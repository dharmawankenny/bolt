import { configure, addDecorator, addParameters } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { withKnobs } from '@storybook/addon-knobs';
import { create } from '@storybook/theming';

import TableComponent from './PropTable';
import wrapper from './wrapper';
import Logo from './Logo.svg';

function loadStories() {
  importAll(require.context('../src', true, /\.story\.(js|tsx)$/));
}

const Cache = {};
function importAll(r) {
  r.keys().forEach(key => (Cache[key] = r(key)));
}

addParameters({
  options: {
    theme: create({
      base: 'light',
      brandTitle: 'Bolt',
      brandUrl: 'https://bolt.reida.tech',
      // To control appearance:
      brandImage: Logo, 
    }),
    isFullscreen: false,
    panelPosition: 'bottom',
  },
});

addDecorator(
  withInfo({
    header: false,
    TableComponent,
  })
);
addDecorator(withKnobs);
addDecorator(wrapper);

configure(loadStories, module);
