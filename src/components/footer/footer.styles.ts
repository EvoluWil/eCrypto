import styled from 'styled-components';

export const FooterContainer = styled.footer`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100vw;
  height: 80px;
  box-shadow: 0 6px 6px 4px rgba(0, 0, 0, 0.5);
  background: ${({ theme }) => theme.detail};
  height: 120px;
  padding: 16px;
  color: ${({ theme }) => theme.text.primary};
  font-size: 12px;

  div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;

    max-width: 1080px;

    @media (max-width: 960px) {
      margin-top: auto;
      flex-direction: column;
      gap: 16px;
      height: auto;
    }
  }
`;
