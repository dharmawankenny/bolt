import { configure, addDecorator } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { withKnobs } from '@storybook/addon-knobs';
import { setOptions } from '@storybook/addon-options';

import TableComponent from './PropTable';
import wrapper from './wrapper';

function loadStories() {
  importAll(require.context('../src', true, /\.story\.(js|tsx)$/));
}

const Cache = {};
function importAll(r) {
  r.keys().forEach(key => (Cache[key] = r(key)));
}

setOptions({
  name: 'Bolt',
  url: 'https://bolt.reida.tech/',
  addonPanelInRight: true,
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
