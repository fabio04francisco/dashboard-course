import styled from 'styled-components';

import { LeftArrow, RightArrow } from '../Icons';

export const Container = styled.div`
  grid-area: MA;

  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;

  padding: 24px 32px 0 36px;
`;

export const Header = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;

  height: 205px;
  width: 100%;
`;

export const Content = styled.div`
  position: relative;
  display: flex;

  padding: 0 31px;

  height: 160px;
  width: 100%;
  flex-direction: column;

  background-color: #f5f5f7;
  border-radius: 14px;

  > h1 {
    margin-top: 46px;
    font-family: var(--font-secondary);
    font-size: 36px;
    font-weight: bold;
  }

  > p {
    font-size: 16px;
    line-height: 24px;
  }

  > img {
    position: absolute;

    right: 104px;
    bottom: 0.25px;
    height: 191px;
    width: 175px;
  }
`;

export const MyCurse = styled.div`
  display: flex;
  flex-direction: row;

  justify-content: space-between;
  margin-top: 24px;
  height: 80px;
  width: 100%;
`;

export const InfoCourse = styled.div`
  display: flex;
  flex-direction: row;

  align-items: center;
  justify-content: space-around;

  height: 100%;
  width: 500px;

  border-radius: 14px;
  background-color: #f5f5f7;

  & > div:nth-child(1) > svg {
    height: 32px;
    width: 32px;
  }

  & > div:nth-child(2) {
    display: flex;
    flex-direction: column;

    > strong {
      font-size: 16px;
      font-family: var(--font-secondary);
      line-height: 25px;
    }

    > span {
      font-size: 13px;
    }
  }
`;

export const LeftArrowIcon = styled(LeftArrow)`
  height: 40px;
  width: 40px;
  cursor: pointer;
`;

export const RightArrowIcon = styled(RightArrow)`
  height: 40px;
  width: 40px;
  cursor: pointer;
`;

export const Actions = styled.div`
  display: flex;
  width: 100px;

  align-items: center;
  justify-content: space-between;
`;
