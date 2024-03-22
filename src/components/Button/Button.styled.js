import styled from 'styled-components';

export const StyledButton = styled.button`
  border-radius: 200px;
  padding: 16px 40px;
  font-weight: 500;
  font-size: 16px;
  line-height: 1.5;

  background-color: ${({ theme, $style }) =>
    $style === 'filled' ? theme.colors.mainRed : 'transparent'};
  width: ${props => props.$width}px;
  height: ${props => props.$height}px;
  color: ${({ $style, theme }) =>
    $style === 'filled' ? '#ffffff' : theme.colors.mainDark};
  border: ${({ $style, theme }) =>
    $style === 'filled' ? 'none' : `1px solid ${theme.colors.mainBtn}`};
  transition: ${({ $style }) =>
      $style === 'filled' ? 'background-color' : 'border'}
    350ms ease;

  &:hover {
    ${({ $style, theme }) =>
      $style === 'filled'
        ? `background-color: ${theme.colors.hoverBtn}`
        : `border: 1px solid ${theme.colors.mainRed}`}
  }
`;
