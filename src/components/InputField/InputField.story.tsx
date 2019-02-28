import React from 'react';
import { storiesOf } from '@storybook/react';

import { boolean, text, select } from '@storybook/addon-knobs';

import InputField from './InputField';

storiesOf('InputField', module)
  .add('Default', () => (
    <InputField
      label={text('Label', 'A Text InputField')}
      placeholder={text('Placeholder', 'With Placeholder')}
      hint={{
        leftText: text('Left Hint', 'With A Hint Text'),
        rightText: text('Right Hint', 'and an Additional Hint'),
      }}
      multiline={boolean('Multiline', false)}
      disabled={boolean('Disabled', false)}
      error={boolean('Error', false)}
    />
  ));
