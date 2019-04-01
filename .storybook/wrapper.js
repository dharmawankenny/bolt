import React from 'react';

import Provider from '../src/Provider';
import styled from '../src/styled';
import { Praya } from '../src/basis/Theme';

const Wrapper = styled.div`
  width: 100%;
  margin: 0;
  padding: 0;
`;

export default function(renderStory) {
  return (
    <Provider theme={Praya}>
      <Wrapper>
        {renderStory()}
      </Wrapper>
    </Provider>
  );
}
