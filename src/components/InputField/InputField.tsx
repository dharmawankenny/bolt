import React, { useState, useRef } from 'react';

import styled from 'styled-components';

import StyledInput from '../StyledLibrary/StyledInput';
import StyledLabel from '../StyledLibrary/StyledLabel';
import StyledHint from '../StyledLibrary/StyledHint';

type Props = {
  label: string;
  /**
   *  @default null
   */
  hint?: {
    leftText: string;
    rightText?: string;
  };
  /**
   *  @default false
   */
  multiline?: boolean;
  /**
   *  @default ''
   */
  placeholder?: string;
  /**
   *  @default false
   */
  error?: boolean;
  /**
   *  @default false
   */
  disabled?: boolean;
  value?: string;
  onChange?: (value: string) => void;
  onFocus?: (e?: React.SyntheticEvent) => void;
  onBlur?: (e?: React.SyntheticEvent) => void;
  onMouseOver?: (e?: React.SyntheticEvent) => void;
  onMouseOut?: (e?: React.SyntheticEvent) => void;
};

export default function InputField(props: Props) {
  return (
    <Container>
      <StyledLabel disabled={props.disabled}>{props.label}</StyledLabel>
      <StyledInput {...buildInputProps(props)} />
      {props.hint && (
        <Hints>
          <LeftHint>
            <StyledHint disabled={props.disabled} error={props.error}>{props.hint.leftText}</StyledHint>
          </LeftHint>
          {props.hint.rightText && <StyledHint disabled={props.disabled} error={props.error} textAlign="right">{props.hint.rightText}</StyledHint>}
        </Hints>
      )}
    </Container>
  )
}

InputField.defaultProps = {
  label: '',
  hint: null,
  multiline: false,
  placeholder: '',
  error: false,
  disabled: false,
  value: null,
  onChangeText: null,
  onFocus: null,
  onBlur: null,
  onMouseOver: null,
  onMouseOut: null,
};

function buildInputProps(props: any) {
  const cleaned = { ...props };

  if (cleaned.multiline) {
    cleaned.as = 'textarea';
  }

  delete cleaned.label;
  delete cleaned.hint;
  delete cleaned.multiline;

  return cleaned;
}

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-flow: wrap column;
  justify-content: flex-start;
  align-items: flex-start;
  align-content: flex-start;
`;

const Hints = styled.div`
  width: 100%;
  display: flex;
  flex-flow: wrap row;
  justify-content: flex-start;
  align-items: center;
  align-content: center;
`;

const LeftHint = styled.div`
  flex: 1;
`;
