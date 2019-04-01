import 'sanitize.css';

import React from 'react';

import { createGlobalStyle, ThemeProvider } from './styled';

type Props = {
  theme: Theme;
  children: React.ReactChild;
};

const GlobalStyle = createGlobalStyle`
  html {
    font-family: ${props => props.theme.fontFace}
  }
`;

export default function Provider(props: Props) {
  return (
    <ThemeProvider theme={props.theme}>
      <React.Fragment>
        <GlobalStyle />
        {props.children}
      </React.Fragment>
    </ThemeProvider>
  );
}
