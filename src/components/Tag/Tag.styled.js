import styled from 'styled-components';

export const TagWrapper = styled.div`
  display: flex;
  gap: 8px;
  width: 526px;
  flex-wrap: wrap;
`;

export const StyledTag = styled.div`
  padding: 12px 18px;
  border-radius: 100px;
  display: flex;
  gap: 8px;
  background-color: ${({ theme }) => theme.colors.lightGrey};
`;
