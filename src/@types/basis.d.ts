type Color = {
  dark: string;
  base: string;
  light: string;
  accent: string;
};

type Palette = {
  dark: Color;
  neutral: Color;
  light: Color;
  primary: Color;
  secondary: Color;
  instructive: Color;
  attentive: Color;
  destructive: Color;
};

type Spacing = {
  xxs: string;
  xs: string;
  s: string;
  m: string;
  l: string;
  xl: string;
  xxl: string;
};

type BorderWidth = {
  thin: string;
  base: string;
  thick: string;
};

type BorderRadius = {
  s: string;
  m: string;
  l: string;
};

type Border = {
  width: BorderWidth;
  radius: BorderRadius;
};

type TypographySize = {
  fontSize: string;
  lineHeight: string;
  letterSpacing: string;
};

type Typography = {
  micro: TypographySize;
  tiny: TypographySize;
  small: TypographySize;
  medium: TypographySize;
  large: TypographySize;
  big: TypographySize;
  huge: TypographySize;
};

type Theme = {
  palette: Palette;
  spacing: Spacing;
  border: Border;
  typography: Typography;
  fontFace: string;
};
