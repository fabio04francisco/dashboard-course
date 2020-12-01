import styled from 'styled-components';

import Bell from '../Icons/Bell';
import Search from '../Icons/Search';
import ArrowDown from '../Icons/ArrowDown';

export const Container = styled.div`
  grid-area: ST;

  display: flex;
  height: 100%;
  width: 100%;

  padding: 0px 0px 0 36px;
`;

export const NavigationStatistic = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  height: 43px;
  width: 439px;
  padding: 3px 0 0 0;
  margin-top: 52px;

  & > div:nth-child(1) {
    display: flex;
    align-items: center;

    height: 40px;
    width: 300px;

    border-radius: 8px;

    background-color: var(--background-secundary);

    > input {
      background-color: inherit;
    }
  }

  & > div:nth-child(2) {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    width: 100%;

    > div {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 40px;
      height: 40px;

      margin: 0 8px 0 18px;

      > img {
        height: inherit;
        width: auto;
        object-fit: fill;
        -webkit-filter: grayscale(100%);
        filter: grayscale(100%);
      }
    }
  }
`;
export const SearchIcon = styled(Search)`
  height: 20px;
  width: 20px;

  margin: 0 10px 0 15px;
`;
export const BellIcon = styled(Bell)`
  height: 23px;
  width: 26px;
`;
export const ArrowDownIcon = styled(ArrowDown)`
  height: 4px;
  width: 7px;
`;
