import React from 'react';
import { storiesOf } from '@storybook/react';

import { boolean, text, select, number } from '@storybook/addon-knobs';

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
  ))
  .add('withKnobs', () => (
    <Text
      variant={select(
        'Variants',
        [
          'hero',
          'title',
          'subtitle1',
          'subtitle2',
          'large',
          'baseline',
          'small',
          'tiny',
          'micro',
        ],
        'baseline'
      )}
      align={select(
        'Alignment',
        [
          'left',
          'center',
          'right',
          'justify',
        ],
        'left'
      )}
      weight={select(
        'weight',
        [
          'normal',
          'bold',
          '100',
          '200',
          '300',
          '400',
          '500',
          '600',
          '700',
          '800',
          '900',
        ],
        'normal'
      )}
      invert={boolean('Invert Color', false)}
      ellipsize={boolean('Ellipsize', false)}
      numberOfLines={number('Number of Lines', 3)}
    >
      {text('Content Text', 'Eu facilisis ipsum a scelerisque duis etiam eu habitasse suspendisse dictumst adipiscing fames nostra condimentum torquent luctus eros montes class aptent est fames vestibulum semper enim vel a class. Nec erat lobortis sapien at habitasse vestibulum ullamcorper dictumst parturient etiam laoreet ante suspendisse phasellus condimentum imperdiet nibh ante vestibulum at a id vestibulum curabitur eu. Ultrices himenaeos aliquet magna ac ultrices ultricies a nunc aliquet a convallis fames tincidunt leo mattis dapibus a. Inceptos lobortis varius ullamcorper vitae ullamcorper consequat a consectetur tempor vestibulum at ullamcorper pulvinar euismod parturient id nisi condimentum auctor sociis erat. Elit tellus elit scelerisque vehicula ante scelerisque lobortis a vitae ullamcorper nam a fames scelerisque. Nec a a habitant aliquam id mi himenaeos dolor potenti placerat nunc quam praesent convallis tempus vestibulum mus.')}
    </Text>
  ));
