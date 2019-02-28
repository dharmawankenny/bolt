import styled from 'styled-components';

type CustomProps = {
  disabled?: boolean | undefined;
};

const StyledLabel = styled('label')<CustomProps>`
  display: block;
  width: 100%;
  margin: 0 0 ${props => props.theme.spacing.xxs};
  padding: 0;
  color: ${props => props.disabled ? props.theme.color.neutral.secondary : props.theme.color.dark.primary};
  font-size: ${props => props.theme.sizing.typography.small.fontSize};
  line-height: ${props => props.theme.sizing.typography.small.lineHeight};
  font-weight: 700;
  text-align: left;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  transition: 0.25s ease all;
`;

export default StyledLabel;
