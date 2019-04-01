import React, { useState, useRef } from 'react';

import styled from '../../styled';

import Text from '../Text/Text';

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
  warning?: boolean;
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

type StyledProps = {
  error?: boolean | undefined;
  disabled?: boolean | undefined;
  warning?: boolean | undefined;
  textAlign?: 'left' | 'right' | 'center' | undefined;
};

export default function InputField(props: Props) {
  return (
    <Container>
      <StyledLabel disabled={props.disabled} variant="small" weight="bold" numberOfLines={1} ellipsize>{props.label}</StyledLabel>
      <StyledInput {...buildInputProps(props)} />
      {props.hint && (
        <Hints>
          <LeftHint>
            <StyledHint
              disabled={props.disabled}
              error={props.error}
              warning={props.warning}
              variant="tiny"
              numberOfLines={3}
              ellipsize
            >
              {props.hint.leftText}
            </StyledHint>
          </LeftHint>
          {props.hint.rightText && (
            <StyledHint
              disabled={props.disabled}
              error={props.error}
              warning={props.warning}
              variant="tiny"
              align="right"
              ellipsize
            >
              {props.hint.rightText}
            </StyledHint>
          )}
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
  warning: false,
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
  align-items: flex-start;
  align-content: flex-start;
  margin: ${props => props.theme.spacing.xxs} 0 0;
`;

const LeftHint = styled.div`
  flex: 1;
  margin-right: 1rem;
`;

const StyledInput = styled('input')<StyledProps>`
  width: 100%;
  margin: 0;
  padding: ${props => props.theme.spacing.xs} ${props => props.disabled ? props.theme.spacing.xs : '0'};
  padding-bottom: calc(${props => `${props.theme.spacing.xs} - ${props.error ? props.theme.border.width.base : props.theme.border.width.thin}`});
  color: ${props => props.theme.palette.dark.base};
  background: ${props => props.disabled ? props.theme.palette.light.accent : props.theme.palette.light.light};
  font-size: ${props => props.theme.typography.medium.fontSize};
  line-height: ${props => props.theme.typography.medium.lineHeight};
  font-weight; 400;
  text-align: left;
  border: none;
  border-bottom:
    ${props => props => props.error ? props.theme.border.width.base : props.theme.border.width.thin}
    solid
    ${props =>
      props.error ? props.theme.palette.destructive.base :
        props.warning ? props.theme.palette.attentive.base :
          props.disabled ? props.theme.palette.light.accent :
            props.theme.palette.light.dark};
  outline: none;
  transition: 0.25s ease all;

  &:hover {
    border-color: ${props =>
      props.error ? props.theme.palette.destructive.base :
        props.warning ? props.theme.palette.attentive.base :
          props.theme.palette.primary.base};
    transition: 0.25s ease all;
  }

  &:focus {
    border-width: ${props => props.theme.border.width.base};
    ${props => !props.error && `padding-bottom: calc(${props.theme.spacing.xs} - ${props.theme.border.width.base});`}
    border-color: ${props =>
      props.error ? props.theme.palette.destructive.base :
        props.warning ? props.theme.palette.attentive.base :
          props.theme.palette.primary.base};
    transition: 0.25s ease all;
  }

  &::placeholder {
    color: ${props => props.disabled ? props.theme.palette.neutral.light : props.theme.palette.neutral.base};
    opacity: 1;
  }
`;

const StyledLabel = styled(Text)<StyledProps>`
  display: block;
  width: 100%;
  margin: 0;
  padding: 0;
  color: ${props => props.disabled ? props.theme.palette.neutral.light : props.theme.palette.dark.base};
`;

const StyledHint = styled(Text)<StyledProps>`
  width: auto;
  margin: 0;
  padding: 0;
  color: ${props =>
    props.error ? props.theme.palette.destructive.base :
      props.warning ? props.theme.palette.attentive.base :
        props.disabled ? props.theme.palette.neutral.light :
          props.theme.palette.neutral.base};
  transition: 0.25s ease all;
`;
