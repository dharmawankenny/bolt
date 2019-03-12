import React from 'react';
import { storiesOf } from '@storybook/react';

import { boolean, text, select } from '@storybook/addon-knobs';

import SideNavigation from './SideNavigation';

// @ts-ignore
import dummyLogo from './dummyLogo.svg';
// @ts-ignore
import dummyIcon from './dummyIcon.svg';

const dummySubNavigations = [
  {
    label: 'Accounts & Records',
    to: '/programme',
  },
  {
    label: 'Income',
    to: '/programme',
  },
  {
    label: 'Expense',
    to: '/programme',
  },
  {
    label: 'Donor',
    to: '/programme',
  },
];

const navigations = [
  {
    icon: dummyIcon,
    label: 'Dashboard',
    to: '/',
  },
  {
    icon: dummyIcon,
    label: 'Programme',
    subNavigations: dummySubNavigations,
  },
  {
    icon: dummyIcon,
    label: 'Publication',
    subNavigations: dummySubNavigations,
  },
  {
    icon: dummyIcon,
    label: 'Finance',
    subNavigations: dummySubNavigations,
  },
  {
    icon: dummyIcon,
    label: 'Objective',
    subNavigations: dummySubNavigations,
  },
  {
    icon: dummyIcon,
    label: 'Donation',
    subNavigations: dummySubNavigations,
  },
  {
    icon: dummyIcon,
    label: 'Volunteer',
    to: '/volunteer',
  },
]

storiesOf('Composed|SideNavigation', module)
  .add('Default', () => (
    <div style={{ width: '100%', background: '#EEE' }}>
      <SideNavigation logo={dummyLogo} navigations={navigations} />
    </div>
  ));
