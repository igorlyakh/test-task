import { StyledButton } from './Button.styled';

const Button = ({
  style = 'filled',
  width = '173',
  height = '56',
  children,
}) => {
  return (
    <StyledButton
      $width={width}
      $height={height}
      $style={style}
    >
      {children}
    </StyledButton>
  );
};

export default Button;
