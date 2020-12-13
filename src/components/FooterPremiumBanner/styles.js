import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 440px;
  height: 193px;
  padding: 15px 23px;
  background-color: var(--background-secundary);
  border-radius: 14px;
  margin-top: 30px;

  div:nth-child(1) {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    height: 100%;
    width: 179px;

    > h2 {
      font-family: var(--font-secondary);
      font-size: 24px;
      margin-top: 9px;
    }

    > span {
      font-size: 16px;
      font-family: var(--font-primary);
    }

    > button {
      width: 120px;
      height: 40px;
      border-radius: 8px;
      background-color: var(--primary);
      color: var(--iconMenu);
      font-weight: bold;
      margin-top: 24px;

      cursor: pointer;
      transition: opacity 0.2s;
    }

    > button:hover {
      opacity: 0.9;
    }
  }

  div:nth-child(2) {
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 22px 24px 0 0;
    width: 120px;
    height: 120px;

    img {
      width: 100%;
    }
  }
`;
