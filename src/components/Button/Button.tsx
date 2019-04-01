import React from 'react';

import styled from '../../styled';

import Text, { TextVariant } from '../Text/Text';

type ButtonVariant =
  | 'fill'
  | 'outline';

type ButtonShape =
  | 'base'
  | 'text'
  | 'circular';

type ButtonIntent =
  | 'neutral'
  | 'action'
  | 'instructive'
  | 'attentive'
  | 'destructive';

type ButtonSize =
  | 'small'
  | 'medium'
  | 'large';

type Props = {
  children: string;
  variant?: ButtonVariant;
  shape?: ButtonShape;
  intent?: ButtonIntent;
  size?: ButtonSize;
  expand?: boolean;
  disabled?: boolean;
  loading?: boolean;
};

type StyledProps = {
  variant: ButtonVariant;
  shape: ButtonShape;
  intent: ButtonIntent;
  size: ButtonSize;
  expand: boolean;
  disabled: boolean;
};

type ButtonSizeMap = {
  [key in ButtonSize]: {
    text: TextVariant;
    horizontalPadding: keyof Spacing;
    verticalPadding: keyof Spacing;
    border: keyof BorderWidth;
    radius: keyof BorderRadius;
  };
};

type ButtonIntentMap = {
  [key in ButtonIntent]: {
    fill: [keyof Palette, keyof Color];
    text: [keyof Palette, keyof Color];
  };
}

export default function Button(props: Props) {
  const {
    children,
    variant = 'fill',
    shape = 'base',
    intent = 'neutral',
    size = 'medium',
    expand = false,
    disabled = false,
    loading = false,
    ...rest
  } = props;

  return (
    <Btn variant={variant} shape={shape} intent={intent} size={size} expand={expand} disabled={disabled} {...rest}>
      <BtnLabel btnVariant={variant} btnShape={shape} btnIntent={intent} btnDisabled={disabled} variant={BUTTON_SIZE_MAP[size].text} align="center" weight="bold">{children}</BtnLabel>
    </Btn>
  );
}

const BUTTON_SIZE_MAP: ButtonSizeMap = {
  small: {
    text: 'small',
    horizontalPadding: 's',
    verticalPadding: 'xxs',
    border: 'thin',
    radius: 'm',
  },
  medium: {
    text: 'baseline',
    horizontalPadding: 'm',
    verticalPadding: 'xs',
    border: 'base',
    radius: 'm',
  },
  large: {
    text: 'large',
    horizontalPadding: 'l',
    verticalPadding: 's',
    border: 'thick',
    radius: 'l',
  },
};

const BUTTON_INTENT_MAP: ButtonIntentMap = {
  neutral: {
    fill: ['light', 'accent'],
    text: ['dark', 'base'],
  },
  action: {
    fill: ['primary', 'base'],
    text: ['light', 'light'],
  },
  instructive: {
    fill: ['instructive', 'base'],
    text: ['light', 'light'],
  },
  attentive: {
    fill: ['attentive', 'base'],
    text: ['light', 'light'],
  },
  destructive: {
    fill: ['destructive', 'base'],
    text: ['light', 'light'],
  },
}

const Btn = styled('button')<StyledProps>`
  width: ${props => props.expand ? '100%' : 'auto'};
  padding: ${props => props.variant === 'outline' && !props.disabled ?
    `calc(${props.theme.spacing[BUTTON_SIZE_MAP[props.size].verticalPadding]} - ${props.theme.border.width[BUTTON_SIZE_MAP[props.size].border]}) calc(${props.theme.spacing[BUTTON_SIZE_MAP[props.size].horizontalPadding]} - ${props.theme.border.width[BUTTON_SIZE_MAP[props.size].border]})` :
    `${props.theme.spacing[BUTTON_SIZE_MAP[props.size].verticalPadding]} ${props.theme.spacing[BUTTON_SIZE_MAP[props.size].horizontalPadding]}`
  };
  background: ${props => props.disabled ? props.theme.palette.light.dark :
    props.variant === 'outline' || props.shape === 'text' ?
      props.theme.palette.light.light :
      props.theme.palette[BUTTON_INTENT_MAP[props.intent].fill[0]][BUTTON_INTENT_MAP[props.intent].fill[1]]};
  border: ${props => props.variant === 'outline' && !props.disabled ? `${props.theme.border.width[BUTTON_SIZE_MAP[props.size].border]} solid ${props.theme.palette.dark.base}` : 'none'};
  border-radius: ${props => props.shape === 'circular' ? '100rem' : props.theme.border.radius[BUTTON_SIZE_MAP[props.size].radius]};
  opacity: 1;
  transition: 0.25s ease opacity, 0.25s ease background;
  cursor: pointer;

  &:hover,
  &:focus {
    opacity: ${props => props.disabled ? '1' : '0.75' };
    transition: 0.25s ease opacity;
  }
`;

const BtnLabel = styled(Text)<{ btnVariant: ButtonVariant; btnShape: ButtonShape; btnIntent: ButtonIntent; btnDisabled: boolean; }>`
  color: ${props => props.btnDisabled ? props.theme.palette.neutral.base :
    props.btnVariant === 'outline' ? props.theme.palette.dark.base :
      props.btnShape === 'text' && props.btnIntent !== 'neutral' ?
        props.theme.palette[BUTTON_INTENT_MAP[props.btnIntent].fill[0]][BUTTON_INTENT_MAP[props.btnIntent].fill[1]] :
        props.theme.palette[BUTTON_INTENT_MAP[props.btnIntent].text[0]][BUTTON_INTENT_MAP[props.btnIntent].text[1]]};
`;
