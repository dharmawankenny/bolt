import styled from 'styled-components';

type CustomProps = {
  error?: boolean | undefined;
  disabled?: boolean | undefined;
  textAlign?: 'left' | 'right' | 'center' | undefined;
};

const StyledHint = styled('span')<CustomProps>`
  margin: ${props => props.theme.spacing.xs} 0 0;
  padding: 0;
  color: ${props =>
    props.error ? props.theme.color.red.primary :
      props.warning ? props.theme.color.yellow.primary :
        props.disabled ? props.theme.color.neutral.secondary :
          props.theme.color.neutral.primary};
  font-size: ${props => props.theme.sizing.typography.tiny.fontSize};
  line-height: ${props => props.theme.sizing.typography.tiny.lineHeight};
  font-weight: 400;
  text-align: ${props => props.textAlign ? props.textAlign : 'left'};
  transition: 0.25s ease all;
`;

export default StyledHint;
