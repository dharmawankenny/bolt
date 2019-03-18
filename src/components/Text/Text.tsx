import React from 'react';

import styled from 'styled-components';

type TextVariant =
  | 'hero'
  | 'title'
  | 'subtitle1'
  | 'subtitle2'
  | 'large'
  | 'baseline'
  | 'small'
  | 'tiny'
  | 'micro';

type Props = {
  variant: TextVariant;
  children: React.ReactNode;
  align?: 'left' | 'center' | 'right' | 'justify';
  weight?: 'normal' | 'bold' | '100' | '200' | '300' | '400' | '500' | '600' | '700' | '800' | '900';
  light?: boolean;
  className?: string;
};

export default function Text(props: Props) {
  const {
    variant,
    children,
    align = 'left',
    weight = '400',
    light = false,
    className = '',
  } = props;

  return (
    <TextStyled className={className} variant={variant} align={align} weight={weight} light={light}>
      {children}
    </TextStyled>
  );
}

const VARIANT_TYPOGRAPHY_MAP = {
  hero: 'huge',
  title: 'big',
  subtitle1: 'large',
  subtitle2: 'medium',
  large: 'large',
  baseline: 'medium',
  small: 'small',
  tiny: 'tiny',
  micro: 'micro',
};

const VARIANT_LETTER_SPACING_MAP = {
  hero: '-0.15rem',
  title: '-0.075rem',
  subtitle1: '-0.0375rem',
  subtitle2: '-0.0375rem',
  large: '-0.075rem',
  baseline: '-0.0375rem',
  small: '-0.025rem',
  tiny: '0',
  micro: '0',
};

const TextStyled = styled.div<Props>`
  display: block;
  width: 100%;
  margin: 0;
  padding: 0;
  font-size: ${props => props.theme.sizing.typography[VARIANT_TYPOGRAPHY_MAP[props.variant]].fontSize};
  line-height: ${props => props.theme.sizing.typography[VARIANT_TYPOGRAPHY_MAP[props.variant]].lineHeight};
  letter-spacing: ${props => VARIANT_LETTER_SPACING_MAP[props.variant]};
  font-weight: ${props => props.weight};
  text-align: ${props => props.align};
  color: ${props => props.theme.color[props.light ? 'light' : 'dark'].primary};
`;
