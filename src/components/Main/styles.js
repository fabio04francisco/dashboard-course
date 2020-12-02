import styled, { css } from 'styled-components';

import { LeftArrow, RightArrow, Time, Flame } from '../Icons';

export const Container = styled.div`
  grid-area: MA;

  display: flex;
  flex-direction: column;
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

  & > div:nth-child(4) > button {
    display: flex;
    align-items: center;
    justify-content: center;

    width: 120px;
    height: 40px;
    border-radius: 8px;

    background-color: var(--primary);

    font-size: 13px;
    color: var(--iconMenu);

    cursor: pointer;
    transition: opacity 0.2s;

    &:hover {
      opacity: 0.9;
    }
  }
`;

const CSSArrowIcon = css`
  height: 40px;
  width: 40px;
  cursor: pointer;
  transition: opacity 0.2s;

  &:hover {
    opacity: 0.8;
  }
`;

export const LeftArrowIcon = styled(LeftArrow)`
  ${CSSArrowIcon}
`;

export const RightArrowIcon = styled(RightArrow)`
  ${CSSArrowIcon}
`;

export const Actions = styled.div`
  display: flex;
  width: 100px;

  align-items: center;
  justify-content: space-between;
`;

export const TimeIcon = styled(Time)`
  > path {
    fill: var(--primary);
  }
`;
export const FlameIcon = styled(Flame)`
  > path {
    fill: var(--primary);
  }
`;

export const CourseGridSetion = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;
  max-height: 500px;
  margin-top: 40px;
  padding: 0;

  > h2 {
    font-size: 24px;
    color: var(--primary);
    font-family: var(--font-secondary);
  }

  display: flex;
  flex-direction: column;
`;

export const ListOptions = styled.ul`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  list-style-type: none;

  > li {
    font-size: 16px;
    line-height: 26px;
    color: var(--primary);
    font-family: var(--font-secondary);
    font-weight: bold;
    opacity: var(--opacity);
    transition: opacity 0.2s;

    cursor: pointer;

    & + li {
      margin-left: 30px;
    }

    &:hover {
      opacity: 1;
    }
  }

  & .active {
    opacity: 1;
  }
`;
export const ListCourse = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 10px;
  width: 100%;
  overflow-y: scroll;

  ::-webkit-scrollbar {
    width: 4px;
  }

  ::-webkit-scrollbar-thumb {
    background-color: var(--primary);
    border-radius: 4px;
  }
`;
export const CourseDetails = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  background-color: #f5f5f7;
  border-radius: 17px;

  height: 80px;
  width: 100%;

  padding: 8px 23px 8px 8px;

  & + div {
    margin-top: 16px;
  }

  > div:nth-child(1) {
    display: flex;
    align-items: center;
    justify-content: center;

    height: 64px;
    width: 64px;
  }

  > div:nth-child(2) {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;

    height: 100%;
    width: 190px;

    margin-left: 24px;

    > h3 {
      font-size: 16;
      color: var(--primary);
      font-family: var(--font-secondary);
    }

    > span {
      color: var(--primary);
      font-size: 13px;
    }
  }

  > div:nth-child(3) {
    display: flex;
    align-items: center;
    justify-content: flex-start;

    height: 100%;
    width: 102px;

    > svg {
      height: 16px;
      width: 16px;
    }

    > span {
      color: var(--primary);
      font-size: 13px;

      margin-left: 7px;
    }
  }

  > div:nth-child(4) {
    display: flex;
    align-items: center;
    justify-content: flex-start;

    height: 100%;
    width: 70px;

    > svg {
      height: 16px;
      width: 10px;
    }

    > span {
      color: var(--primary);
      font-size: 13px;

      margin-left: 7px;
    }
  }

  > button {
    width: 120px;
    height: 40px;
    font-size: 13px;
    font-weight: 700;
    border: 2px solid var(--primary);
    border-radius: 8px;
    background-color: var(--background-color);
    opacity: 1;
    transition: opacity 0.2s;
    cursor: pointer;

    &:hover {
      opacity: 0.7;
    }
  }
`;
