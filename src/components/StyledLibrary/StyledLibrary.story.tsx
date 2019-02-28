import React from 'react';
import { storiesOf } from '@storybook/react';

import { boolean, text, select } from '@storybook/addon-knobs';

import StyledInput from './StyledInput';
import StyledLabel from './StyledLabel';
import StyledHint from './StyledHint';

storiesOf('Styled Library', module)
  .add('Input', () => (
    <StyledInput
      placeholder={text('Placeholder', 'Placeholder')}
      disabled={boolean('Disabled', false)}
      error={boolean('Error', false)}
      warning={boolean('Warning', false)}
    />
  ))
  .add('Label', () => (
    <StyledLabel disabled={boolean('Disabled', false)}>{text('Label', 'A Label')}</StyledLabel>
  ))
  .add('Hint', () => (
    <StyledHint
      textAlign={select('Text Align', { Left: 'left', Center: 'center', Right: 'right' }, 'left')}
      disabled={boolean('Disabled', false)}
      error={boolean('Error', false)}
      warning={boolean('Warning', false)}
    >
      {text('Hint', 'A Very Long Hint')}
    </StyledHint>
  ));
