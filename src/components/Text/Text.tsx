import React from 'react';

import styled from '../../styled';
import { number } from 'prop-types';

export type TextVariant =
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
  invert?: boolean;
  ellipsize?: boolean;
  numberOfLines?: number;
  className?: string;
};

type VariantTypographyMap = {
  [key in TextVariant]: keyof Typography;
};

export default function Text(props: Props) {
  const {
    variant,
    children,
    align = 'left',
    weight = '400',
    invert = false,
    ellipsize = false,
    numberOfLines = 1,
    className = '',
  } = props;

  return (
    <TextStyled className={className} variant={variant} align={align} weight={weight} invert={invert} ellipsize={ellipsize} numberOfLines={numberOfLines}>
      {children}
    </TextStyled>
  );
}

const VARIANT_TYPOGRAPHY_MAP: VariantTypographyMap = {
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

const TextStyled = styled.div<Props>`
  display: block;
  width: 100%;
  margin: 0;
  padding: 0;
  font-size: ${props => props.theme.typography[VARIANT_TYPOGRAPHY_MAP[props.variant]].fontSize};
  line-height: ${props => props.theme.typography[VARIANT_TYPOGRAPHY_MAP[props.variant]].lineHeight};
  letter-spacing: ${props => props.theme.typography[VARIANT_TYPOGRAPHY_MAP[props.variant]].letterSpacing};
  font-weight: ${props => props.weight};
  text-align: ${props => props.align};
  color: ${props => props.theme.palette[props.invert ? 'light' : 'dark'][props.invert ? 'light' : 'base']};

  ${props => {
    if (!!props.ellipsize && !!props.numberOfLines) {
      if (props.numberOfLines > 1) {
        return `
          overflow: hidden;
          position: relative;
          line-height: ${props.theme.typography[VARIANT_TYPOGRAPHY_MAP[props.variant]].lineHeight};
          max-height: calc(${props.theme.typography[VARIANT_TYPOGRAPHY_MAP[props.variant]].lineHeight} * ${props.numberOfLines});
          text-align: justify;

          &:before {
            content: '...';
            position: absolute;
            right: 0;
            bottom: 0;
            width: calc(1.05 * ${props.theme.typography[VARIANT_TYPOGRAPHY_MAP[props.variant]].fontSize});
            text-align: right;
            background: ${props.theme.palette[props.invert ? 'dark' : 'light'][props.invert ? 'base' : 'light']};
          }

          &:after {
            content: '';
            position: absolute;
            right: 0;
            width: calc(1.05 * ${props.theme.typography[VARIANT_TYPOGRAPHY_MAP[props.variant]].fontSize});
            height: ${props.theme.typography[VARIANT_TYPOGRAPHY_MAP[props.variant]].lineHeight};
            margin-top: 0.2rem;
            background: ${props.theme.palette[props.invert ? 'dark' : 'light'][props.invert ? 'base' : 'light']};
          }
        `;
      }

      return `
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
      `;
    }

    return '';
  }}
`;
