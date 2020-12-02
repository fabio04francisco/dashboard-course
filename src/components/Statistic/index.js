import React from 'react';
import {
  Container,
  NavigationStatistic,
  SearchIcon,
  BellIcon,
  ArrowDownIcon,
  StatusBox,
} from './styles';

import Avatar from '../Avatar';
import Card from '../Card';

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

      <StatusBox>
        <Card category="Courses Completed" amount="11" />
        <Card category="Courses in Progress" amount="4" />
      </StatusBox>
    </Container>
  );
}

export default Statistic;
