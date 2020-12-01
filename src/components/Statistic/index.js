import React from 'react';
import {
  Container,
  NavigationStatistic,
  SearchIcon,
  BellIcon,
  ArrowDownIcon,
} from './styles';

import Avatar from '../Avatar';

function Statistic() {
  return (
    <Container>
      <NavigationStatistic>
        <div>
          <SearchIcon />
          <input type="text" placeholder="Search" />
        </div>

        <div>
          <BellIcon />
          <Avatar />
          <ArrowDownIcon />
        </div>
      </NavigationStatistic>
    </Container>
  );
}

export default Statistic;
