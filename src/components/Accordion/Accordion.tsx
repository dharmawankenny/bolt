import React, { useState } from 'react';
import { useSpring, animated } from 'react-spring';

import styled, { withTheme } from 'styled-components';

import Chevron from '../../icons/Chevron';
import useHover from '../../hooks/useHover';
import useMeasure from '../../hooks/useMeasure';

type Props = {
  children: React.ReactNode,
  togglerContent: React.ReactNode,
  expandByDefault: boolean,
};

function Accordion(props: Props) {
  const [expand, setExpand] = useState<boolean>(props.expandByDefault);
  const [isHovered, hoverBindings] = useHover();
  
  const tickerSpringStyle = useSpring({
    from: { transform: 'scale3d(0, 0, 0)' },
    to: { transform: (expand || isHovered) ? 'scale3d(1, 1, 1)' : 'scale3d(0, 0, 0)' },
  });
  
  const iconSpringStyle = useSpring({
    // @ts-ignore
    from: { fill: props.theme.color.neutral.primary, transform: 'rotate(0deg)' },
    to: {
      // @ts-ignore
      fill: expand ? props.theme.color.blue.primary : props.theme.color.neutral.primary,
      transform: expand ? 'rotate(-180deg)' : 'rotate(0deg)',
    },
  });

  const [bindings, { height }] = useMeasure();
  const childSpringStyle = useSpring({ height: expand ? height : 0 });

  return (
    <Container>
      <Toggler onClick={() => setExpand(!expand)} expand={expand} {...hoverBindings}>
        <Ticker style={tickerSpringStyle} />
        <TogglerContentContainer>{props.togglerContent}</TogglerContentContainer>
        <ChevronIcon>
          <Chevron springStyle={iconSpringStyle} />
        </ChevronIcon>
      </Toggler>
      <ChildContainer style={childSpringStyle} expand={expand}>
        <div {...bindings} style={{ width: '100%' }}>
          {props.children}
        </div>
      </ChildContainer>
    </Container>
  )
}

type StyledProps = {
  expand: boolean;
};

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-flow: wrap column;
  justify-content: flex-start;
  align-items: flex-start;
  align-content: flex-start;
`;

const Toggler = styled.button<StyledProps>`
  width: 100%;
  height: auto;
  margin: 0;
  padding: ${props => `${props.theme.spacing.xs} ${props.theme.spacing.m}`};
  border: none;
  outline: none;
  display: flex;
  flex-wrap: wrap;
  justify-content; flex-start;
  align-items: center;
  align-content: center;
  background: ${props => props.expand ? props.theme.color.light.secondary : props.theme.color.light.primary};
  transition: 0.25s ease all;
  cursor: pointer;

  &:hover, &:focus {
    background: ${props => props.theme.color.light.secondary};
    transition: 0.25s ease all;
  }
`;

const TogglerContentContainer = styled.div`
  flex: 1;
  display: flex;
  flex-wrap: wrap;
  justify-content; flex-start;
  align-items: flex-start;
  align-content: flex-start;
`;

const DefaultTogglerContent = styled.div`
  width: 100%;
  margin: 0;
  text-align: left;
`;

const ChildContainer = styled(animated.div)<StyledProps>`
  width: 100%;
  margin: 0;
  overflow: ${props => props.expand ? 'auto' : 'hidden'};
  display: flex;
  flex-flow: wrap row;
  justify-content: flex-start;
  align-items: flex-start;
  align-content: flex-start;
`;

const ChevronIcon = styled.div`
  width: 1rem;
  height: 1rem;
  display: flex;
  flex-flow: wrap row;
  justify-content: center;
  align-items: center;
  align-content: center;
`;

const Ticker = styled(animated.div)`
  width: ${props => props.theme.spacing.xs};
  height: ${props => props.theme.spacing.xs};
  margin: 0 ${props => props.theme.spacing.xs} 0 0;
  border-radius: 100%;
  background: ${props => props.theme.color.blue.primary};
`;

Accordion.defaultProps = {
  expandByDefault: false,
  togglerContent: (<DefaultTogglerContent>Toggle</DefaultTogglerContent>),
};

// @ts-ignore
export default withTheme(Accordion);
