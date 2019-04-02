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
    loader: keyof Typography;
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
      {<Spinner variant={variant} shape={shape} intent={intent} size={size} disabled={disabled} loading={loading}><div><div /><div /></div></Spinner>}
      <BtnLabel btnVariant={variant} btnShape={shape} btnIntent={intent} btnDisabled={disabled} btnLoading={loading} variant={BUTTON_SIZE_MAP[size].text} align="center" weight="bold">
        {children}
      </BtnLabel>
    </Btn>
  );
}

const BUTTON_SIZE_MAP: ButtonSizeMap = {
  small: {
    text: 'small',
    loader: 'small',
    horizontalPadding: 's',
    verticalPadding: 'xxs',
    border: 'thin',
    radius: 'm',
  },
  medium: {
    text: 'baseline',
    loader: 'medium',
    horizontalPadding: 'm',
    verticalPadding: 'xs',
    border: 'base',
    radius: 'm',
  },
  large: {
    text: 'large',
    loader: 'large',
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
  ${props => props.shape !== 'text' && `min-width: calc(5 * ${props.theme.typography[BUTTON_SIZE_MAP[props.size].loader].lineHeight});`}
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
  position: relative;
  outline: none;

  &:hover,
  &:focus {
    opacity: ${props => props.disabled ? '1' : '0.75' };
    transition: 0.25s ease opacity;
    outline: none;
  }
`;

const BtnLabel = styled(Text)<{ btnVariant: ButtonVariant; btnShape: ButtonShape; btnIntent: ButtonIntent; btnDisabled: boolean; btnLoading: boolean; }>`
  color: ${props => props.btnDisabled ? props.theme.palette.neutral.base :
    props.btnVariant === 'outline' ? props.theme.palette.dark.base :
      props.btnShape === 'text' && props.btnIntent !== 'neutral' ?
        props.theme.palette[BUTTON_INTENT_MAP[props.btnIntent].fill[0]][BUTTON_INTENT_MAP[props.btnIntent].fill[1]] :
        props.theme.palette[BUTTON_INTENT_MAP[props.btnIntent].text[0]][BUTTON_INTENT_MAP[props.btnIntent].text[1]]};
  opacity: ${props => props.btnLoading ? '0' : '1'};
  transition: 0.25s ease opacity ${props => props.btnLoading ? '0' : '0.125s'};
`;

const Spinner = styled('div')<{ variant: ButtonVariant; shape: ButtonShape; intent: ButtonIntent; size: ButtonSize; disabled: boolean; loading: boolean;}>`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  margin: 0 auto;
  opacity: ${props => props.loading ? '1' : '0'};
  transition: 0.25s ease opacity ${props => props.loading ? '0.125s' : '0'};
  z-index: 0;

  & > div {
    width: calc(${props => props.theme.typography[BUTTON_SIZE_MAP[props.size].loader].lineHeight});
    height: calc(${props => props.theme.typography[BUTTON_SIZE_MAP[props.size].loader].lineHeight});
    position: absolute;
    top: ${props => props.variant === 'outline' && !props.disabled ?
      `calc((${props.theme.spacing[BUTTON_SIZE_MAP[props.size].verticalPadding]} - ${props.theme.border.width[BUTTON_SIZE_MAP[props.size].border]}) * 0.8)` :
      `calc(${props.theme.spacing[BUTTON_SIZE_MAP[props.size].verticalPadding]} * 0.8)`
    };
    left: calc(50% - (${props => props.theme.typography[BUTTON_SIZE_MAP[props.size].loader].lineHeight} / 2));
    animation: sk-rotate 2.0s infinite linear;

    & > div {
      width: 55%;
      height: 55%;
      border-radius: calc(${props => props.theme.typography[BUTTON_SIZE_MAP[props.size].loader].lineHeight});
      background-color: ${props => props.disabled ? props.theme.palette.neutral.base :
        props.variant === 'outline' ? props.theme.palette.dark.base :
          props.shape === 'text' && props.intent !== 'neutral' ?
            props.theme.palette[BUTTON_INTENT_MAP[props.intent].fill[0]][BUTTON_INTENT_MAP[props.intent].fill[1]] :
            props.theme.palette[BUTTON_INTENT_MAP[props.intent].text[0]][BUTTON_INTENT_MAP[props.intent].text[1]]};
      opacity: 1;
      position: absolute;
      top: 0;
      left: calc(50% - ((${props => props.theme.typography[BUTTON_SIZE_MAP[props.size].loader].lineHeight} * 0.6) / 2));
      animation: sk-bounce 2.0s infinite linear;

      &:last-of-type {
        top: auto;
        left: auto;
        bottom: 0;
        right: calc(50% - (${props => props.theme.typography[BUTTON_SIZE_MAP[props.size].loader].lineHeight} * 0.4 / 2));
        animation-delay: -1.0s;
      }
    }
  }

  @keyframes sk-rotate { 100% { transform: rotate(360deg); -webkit-transform: rotate(360deg) }}

  @keyframes sk-bounce {
    0%, 100% { 
      transform: scale(0.0);
    } 50% { 
      transform: scale(1.0);
    }
  }
`;
