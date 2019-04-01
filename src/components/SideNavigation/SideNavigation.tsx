import React, { useState } from 'react';
import { animated, useSpring } from 'react-spring';
import styled from '../../styled';

import useHover from '../../hooks/useHover';

import Accordion from '../Accordion/Accordion';
import Text from '../Text/Text';

type SubNavigationItem = {
  label: string;
  to: string;
};

type NavigationItem = {
  icon: string;
  label: string;
  to?: string;
  subNavigations?: Array<SubNavigationItem>;
};

type Props = {
  logo: string;
  navigations: Array<NavigationItem>;
};

export default function SideNavigation(props: Props) {
  return (
    <Container>
      <Logo src={props.logo} />
      <NavigationContainer>
        {props.navigations.map(navigation => (<RootNavigation {...navigation} />))}
      </NavigationContainer>
    </Container>
  );
}

function RootNavigation(navigation: NavigationItem) {
  if (!navigation.subNavigations || navigation.subNavigations.length === 0) {
    return <SingleNavigation {...navigation} />;
  }

  return (
    <Accordion
      togglerContent={<Toggler><img src={navigation.icon} /><Text variant="small" weight="600">{navigation.label}</Text></Toggler>}
    >
      {navigation.subNavigations.map(subNavigation => (<SubNavigation {...subNavigation} />))}
    </Accordion>
  );
}

function SingleNavigation(navigation: NavigationItem) {
  const [isHovered, hoverBindings] = useHover();
  
  const tickerSpringStyle = useSpring({
    from: { transform: 'scale3d(0, 0, 0)' },
    to: { transform: isHovered ? 'scale3d(1, 1, 1)' : 'scale3d(0, 0, 0)' },
  });

  return (
    <NavigationLink {...hoverBindings}>
      <a href={navigation.to} target="_blank">
        <animated.div style={tickerSpringStyle} className="ticker" />
        <img src={navigation.icon} />
        <SingleLinkText variant="small" weight="600">{navigation.label}</SingleLinkText>
      </a>
    </NavigationLink>
  );
}

function SubNavigation(subNavigation: SubNavigationItem) {
  const [isHovered, hoverBindings] = useHover();
  
  const tickerSpringStyle = useSpring({
    from: { transform: 'scale3d(0, 0, 0)' },
    to: { transform: isHovered ? 'scale3d(1, 1, 1)' : 'scale3d(0, 0, 0)' },
  });

  return (
    <SubNavigationLink href={subNavigation.to} target="_blank" {...hoverBindings}>
      <animated.div style={tickerSpringStyle} className="ticker" />
      <SingleLinkText variant="tiny" weight="600">{subNavigation.label}</SingleLinkText>
    </SubNavigationLink>
  );
}

const Container = styled.div`
  width: 15rem;
  height: 100vh;
  background: ${props => props.theme.palette.light.light};
  display: flex;
  flex-flow: wrap column;
  justify-content: flex-start;
  align-items: center;
  align-content: center;
  position: relative;
`;

const Logo = styled.img`
  width: calc(100% - 4rem);
  height: 4rem;
  object-fit: contain;
  object-position: 0 50%;
  margin: ${props => `${props.theme.spacing.xl} ${props.theme.spacing.xl}`} 4rem;
`;

const NavigationContainer = styled.div`
  flex: 1;
  width: 100%;
  display: flex;
  flex-flow: wrap row;
  justify-content: flex-start;
  align-items: flex-start;
  align-content: flex-start;
  overflow: auto;
  overflow-x: hidden;
  overflow-y: auto;

  & > div {
    margin-bottom: ${props => props.theme.spacing.m};

    &:last-of-type {
      margin-bottom: 0;
    }
  }
`;

const NavigationLink = styled.div<{ active?: boolean; }>`
  width: 100%;
  margin: 0;
  padding: ${props => `${props.theme.spacing.xs} ${props.theme.spacing.xl} ${props.theme.spacing.xs} ${props.theme.spacing.m}`};
  cursor: pointer;
  background: ${props => props.active ? props.theme.palette.light.base : props.theme.palette.light.light};
  transition: 0.25s ease all;

  &:hover, &:focus {
    background: ${props => props.theme.palette.light.accent};
    transition: 0.25s ease all;
  }

  a {
    display: flex;
    flex-flow: wrap row;
    justify-content: flex-start;
    align-items: center;
    align-content: center;
    font-size: ${props => props.theme.typography.small.fontSize};
    line-height: ${props => props.theme.typography.small.lineHeight};
    font-weight: 600;
    text-align: left;
    letter-spacing: -1.5%;
    text-decoration: none;
    color: ${props => props.theme.palette.dark.base};
  }

  .ticker {
    width: ${props => props.theme.spacing.xs};
    height: ${props => props.theme.spacing.xs};
    border-radius: 100%;
    background: ${props => props.theme.palette.primary.base};
    margin: 0 ${props => props.theme.spacing.xs} 0 0;
  }

  img {
    width: 1.5rem;
    height: 1.5rem;
    object-fit: contain;
    object-position: center;
    margin: 0 ${props => props.theme.spacing.xs} 0 0;
  }
`;

const SubNavigationLink = styled.a<{ active?: boolean; }>`
  display: flex;
  flex-flow: wrap row;
  justify-content: flex-start;
  align-items: center;
  align-content: center;
  width: 100%;
  margin: 0;
  padding: ${props => `${props.theme.spacing.xs} ${props.theme.spacing.xl}`};
  font-weight: 600;
  text-align: left;
  letter-spacing: -1.5%;
  text-decoration: none;
  cursor: pointer;
  background: ${props => props.active ? props.theme.palette.light.accent : props.theme.palette.light.base};
  transition: 0.25s ease all;

  &:hover, &:focus {
    background: ${props => props.theme.palette.light.accent};
    transition: 0.25s ease all;
  }

  .ticker {
    width: ${props => props.theme.spacing.xs};
    height: ${props => props.theme.spacing.xs};
    border-radius: 100%;
    background: ${props => props.theme.palette.primary.base};
    margin: 0 ${props => props.theme.spacing.xs} 0 0;
  }
`;

const Toggler = styled.div`
  width: 100%;
  display: flex;
  flex-flow: wrap row;
  justify-content: flex-start;
  align-items: center;
  align-content: center;

  img {
    width: 1.5rem;
    height: 1.5rem;
    object-fit: contain;
    object-position: center;
    margin: 0 ${props => props.theme.spacing.xs} 0 0;
  }

  & > div {
    flex: 1;
  }
`;

const SingleLinkText = styled(Text)`
  flex: 1;
`;
