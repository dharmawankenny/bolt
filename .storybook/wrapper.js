import React from 'react';
import styled, { ThemeProvider } from 'styled-components';

const Wrapper = styled.div`
  width: 100%;
  margin: 0;
  padding: 8px;
`;

const exampleTheme = {
  color: {
    dark: {
      dusk: '#091E42',
      primary: '#172B4D',
      alternate: '#253858',
      secondary: '#344563',
    },
    neutral: {
      dusk: '#505F79',
      primary: '#6B778C',
      alternate: '#8993A4',
      secondary: '#B3BAC5',
    },
    light: {
      dusk: '#DFE1E6',
      primary: '#FFFFFF',
      alternate: '#FAFBFC',
      secondary: '#F4F5F7',
    },
    blue: {
      dusk: '#0052CC',
      primary: '#0065FF',
      alternate: '#2684FF',
      secondary: '#4C9AFF',
    },
    red: {
      dusk: '#DE350B',
      primary: '#FF5630',
      alternate: '#FF7452',
      secondary: '#FF8F73',
    },
    yellow: {
      dusk: '#FF991F',
      primary: '#FFAB00',
      alternate: '#FFC400',
      secondary: '#FFE380',
    },
    green: {
      dusk: '#00875A',
      primary: '#36B37E',
      alternate: '#57D9A3',
      secondary: '#79F2C0',
    },
    green: {
      dusk: '#00A3BF',
      primary: '#00B8D9',
      alternate: '#00C7E6',
      secondary: '#79E2F2',
    },
    purple: {
      dusk: '#5243AA',
      primary: '#6554C0',
      alternate: '#8777D9',
      secondary: '#998DD9',
    },
  },
  spacing: {
    xxs: '0.25rem',
    xs: '0.5rem',
    s: '0.75rem',
    m: '1rem',
    ml: '1.25rem',
    l: '1.5rem',
    xl: '2rem',
    xxl: '2.5rem',
  },
  sizing: {
    border: {
      thin: '0.05rem',
      normal: '0.1rem',
      thick: '0.2rem',
    },
    radius: {
      normal: '0.375rem',
    },
    typography: {
      baseline: {
        fontSize: '1rem',
        lineHeight: '1.5rem',
      },
      small: {
        fontSize: '0.875rem',
        lineHeight: '1.25rem',
      },
      tiny: {
        fontSize: '0.75rem',
        lineHeight: '1rem',
      },
    },
  },
};

export default function(renderStory) {
  return (
    <ThemeProvider theme={exampleTheme}>
      <Wrapper>
        {renderStory()}
      </Wrapper>
    </ThemeProvider>
  );
}
