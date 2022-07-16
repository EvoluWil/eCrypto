import styled from 'styled-components';

export const HeaderContainer = styled.header`
  width: 100vw;
  height: 80px;
  box-shadow: 6px 6px 6px rgba(0, 0, 0, 0.15);

  background-color: ${({ theme }) => theme.detail};

  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 16px;

  div {
    width: 100%;
    max-width: 1080px;
  }
`;
