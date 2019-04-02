import React from 'react';
import { storiesOf } from '@storybook/react';

import styled from '../../styled';

import { boolean, text, select, number } from '@storybook/addon-knobs';

import Text from '../Text/Text';

import Button from './Button';

const Wrapper = styled.div`
  width: 100%;
  padding: 1rem;
  
  button {
    margin: 0 1rem 1rem 0;
  }
`;

const SectionHeader = styled(Text)`
  margin: 0 0 1rem;
`;

storiesOf('Base|Button', module)
  .add('Default', () => (
    <Wrapper>
      <SectionHeader variant="subtitle1" weight="bold">Variants</SectionHeader>
      <Button variant="fill">Filled Button</Button>
      <Button variant="outline">Outline</Button>
      <SectionHeader variant="subtitle1" weight="bold">Actions</SectionHeader>
      <Button intent="neutral">Neutral Intent</Button>
      <Button intent="action">Action Intent</Button>
      <Button intent="instructive">Instructive Intent</Button>
      <Button intent="attentive">Attentive Intent</Button>
      <Button intent="destructive">Destructive Intent</Button>
      <SectionHeader variant="subtitle1" weight="bold">Shapes</SectionHeader>
      <Button intent="action" shape="base">Base</Button>
      <Button intent="action" shape="text">Inline Text</Button>
      <Button intent="action" shape="circular">Circular</Button>
      <SectionHeader variant="subtitle1" weight="bold">Sizes</SectionHeader>
      <Button intent="action" size="small">Small</Button>
      <Button intent="action" size="medium">Medium</Button>
      <Button intent="action" size="large">Large</Button>
      <SectionHeader variant="subtitle1" weight="bold">Expanded</SectionHeader>
      <Button intent="action" size="small" expand>Small</Button>
      <Button intent="action" size="medium" expand>Medium</Button>
      <Button intent="action" size="large" expand>Large</Button>
      <SectionHeader variant="subtitle1" weight="bold">Disabled</SectionHeader>
      <Button shape="base" disabled>Base</Button>
      <Button shape="text" disabled>Inline Text</Button>
      <Button shape="circular" disabled>Circular</Button>
      <SectionHeader variant="subtitle1" weight="bold">Loading</SectionHeader>
      <Button intent="action" shape="base" loading>Base</Button>
      <Button intent="action" shape="text" loading>Inline Text</Button>
      <Button intent="action" shape="circular" loading>Circular</Button>
    </Wrapper>
  ))
  .add('with knobs', () => (
    <Button
      variant={select(
        'Variant',
        ['fill', 'outline'],
        'fill'
      )}
      shape={select(
        'shape',
        ['base', 'text', 'circular'],
        'base'
      )}
      intent={select(
        'intent',
        ['neutral', 'action', 'instructive', 'attentive', 'destructive'],
        'neutral'
      )}
      size={select(
        'size',
        ['small', 'medium', 'large'],
        'medium'
      )}
      expand={boolean('expand', false)}
      disabled={boolean('disabled', false)}
      loading={boolean('loading', false)}
    >
      {text('Button Label', 'A Button')}
    </Button>
  ));