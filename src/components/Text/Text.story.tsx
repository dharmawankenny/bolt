import React from 'react';
import { storiesOf } from '@storybook/react';

import { boolean, text, select } from '@storybook/addon-knobs';

import Text from './Text';

storiesOf('Base|Text', module)
  .add('Default', () => (
    <React.Fragment>
      <Text variant="hero" weight="700">
        Hero Text
      </Text>
      <Text variant="title" weight="700">
        Title Text
      </Text>
      <Text variant="subtitle1" weight="700">
        Subtitle 1 Text
      </Text>
      <Text variant="subtitle2" weight="700">
        Subtitle 2 Text
      </Text>
      <Text variant="large">
        Large Text
      </Text>
      <Text variant="baseline">
        Baseline Text
      </Text>
      <Text variant="small">
        Small Text
      </Text>
      <Text variant="tiny">
        Tiny Text
      </Text>
      <Text variant="micro">
        Micro Text
      </Text>
    </React.Fragment>
  ));