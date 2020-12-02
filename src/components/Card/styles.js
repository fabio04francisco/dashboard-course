import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 97px;
  width: 208px;

  padding: 0 35px 0 35px;
  background-color: var(--background-secundary);
  border-radius: 14px;

  > strong {
    font-size: 64px;
    font-family: var(--font-secondary);

    align-self: center;
  }

  > span {
    font-size: 16px;
    line-height: 24px;
    margin-left: 11px;
  }
`;
