import React, { useState } from 'react';
import { animated, useSpring } from 'react-spring';
import styled from 'styled-components';

import useHover from '../../hooks/useHover';

import Accordion from '../Accordion/Accordion';

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
      togglerContent={<Toggler><img src={navigation.icon} /><span>{navigation.label}</span></Toggler>}
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
      <a href={navigation.to} target="_blank"><animated.div style={tickerSpringStyle} className="ticker" /><img src={navigation.icon} />{navigation.label}</a>
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
      {subNavigation.label}
    </SubNavigationLink>
  );
}

const Container = styled.div`
  width: 15rem;
  height: 100vh;
  background: ${props => props.theme.color.light.primary};
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
  background: ${props => props.active ? props.theme.color.light.secondary : props.theme.color.light.primary};
  transition: 0.25s ease all;

  &:hover, &:focus {
    background: ${props => props.theme.color.light.secondary};
    transition: 0.25s ease all;
  }

  a {
    display: flex;
    flex-flow: wrap row;
    justify-content: flex-start;
    align-items: center;
    align-content: center;
    font-size: ${props => props.theme.sizing.typography.small.fontSize};
    line-height: ${props => props.theme.sizing.typography.small.lineHeight};
    font-weight: 600;
    text-align: left;
    letter-spacing: -1.5%;
    text-decoration: none;
    color: ${props => props.theme.color.dark.primary};
  }

  .ticker {
    width: ${props => props.theme.spacing.xs};
    height: ${props => props.theme.spacing.xs};
    border-radius: 100%;
    background: ${props => props.theme.color.blue.primary};
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
  font-size: ${props => props.theme.sizing.typography.tiny.fontSize};
  line-height: ${props => props.theme.sizing.typography.tiny.lineHeight};
  font-weight: 600;
  text-align: left;
  letter-spacing: -1.5%;
  text-decoration: none;
  cursor: pointer;
  color: ${props => props.theme.color.dark.primary};
  background: ${props => props.active ? props.theme.color.light.secondary : props.theme.color.light.alternate};
  transition: 0.25s ease all;

  &:hover, &:focus {
    background: ${props => props.theme.color.light.secondary};
    transition: 0.25s ease all;
  }

  .ticker {
    width: ${props => props.theme.spacing.xs};
    height: ${props => props.theme.spacing.xs};
    border-radius: 100%;
    background: ${props => props.theme.color.blue.primary};
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

  span {
    flex: 1;
    font-size: ${props => props.theme.sizing.typography.small.fontSize};
    line-height: ${props => props.theme.sizing.typography.small.lineHeight};
    letter-spacing: -1.5%;
    font-weight: 600;
    text-align: left;
  }
`;
