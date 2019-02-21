import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  width: calc(100% + 16px);
  margin: -8px;
  padding: 0;
`;

export default function(renderStory) {
  return <Wrapper>{renderStory()}</Wrapper>;
}
