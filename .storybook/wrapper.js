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
      primary: '#091E42',
      alternate: '#172B4D',
      muted: '#253858',
      secondary: '#344563',
    },
    neutral: {
      primary: '#505F79',
      alternate: '#6B778C',
      muted: '#8993A4',
      secondary: '#B3BAC5',
    },
    light: {
      primary: '#FFFFFF',
      alternate: '#FAFBFC',
      muted: '#EBECF0',
      secondary: '#DFE1E6',
    },
    blue: {
      primary: '#0052CC',
      alternate: '#0065FF',
      muted: '#2684FF',
      secondary: '#4C9AFF',
    },
    red: {
      primary: '#DE350B',
      alternate: '#FF5630',
      muted: '#FF7452',
      secondary: '#FF8F73',
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
