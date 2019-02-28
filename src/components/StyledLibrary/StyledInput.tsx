import styled from 'styled-components';

type CustomProps = {
  error?: boolean | undefined;
  disabled?: boolean | undefined;
};

const StyledInput = styled('input')<CustomProps>`
  width: 100%;
  margin: 0;
  padding: ${props => props.theme.spacing.xs} ${props => props.disabled ? props.theme.spacing.xs : '0'};
  padding-bottom: calc(${props => `${props.theme.spacing.xs} - ${props.error ? props.theme.sizing.border.normal : props.theme.sizing.border.thin}`});
  color: ${props => props.theme.color.dark.primary};
  background: ${props => props.disabled ? props.theme.color.light.secondary : props.theme.color.light.primary};
  font-size: ${props => props.theme.sizing.typography.baseline.fontSize};
  line-height: ${props => props.theme.sizing.typography.baseline.lineHeight};
  font-weight; 400;
  text-align: left;
  border: none;
  border-bottom:
    ${props => props => props.error ? props.theme.sizing.border.normal : props.theme.sizing.border.thin}
    solid
    ${props => props.error ? props.theme.color.red.alternate : props.theme.color.light.secondary};
  outline: none;
  transition: 0.25s ease all;

  &:hover {
    border-color: ${props => props.error ? props.theme.color.red.alternate : props.theme.color.blue.secondary};
    transition: 0.25s ease all;
  }

  &:focus {
    border-width: ${props => props.theme.sizing.border.normal};
    ${props => !props.error && `padding-bottom: calc(${props.theme.spacing.xs} - ${props.theme.sizing.border.normal});`}
    border-color: ${props => props.error ? props.theme.color.red.alternate : props.theme.color.blue.alternate};
    transition: 0.25s ease all;
  }

  &::placeholder {
    color: ${props => props.disabled ? props.theme.color.neutral.secondary : props.theme.color.light.secondary};
    opacity: 1;
  }
`;

export default StyledInput;