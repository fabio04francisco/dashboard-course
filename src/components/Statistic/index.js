import React from 'react';
import {
  Container,
  StatisticNavigation,
  SearchIcon,
  BellIcon,
  ArrowDownIcon,
  StatusBox,
  StatisticSection,
  ListOptions,
} from './styles';

import Avatar from '../Avatar';
import Card from '../Card';

function Statistic() {
  return (
    <Container>
      <StatisticNavigation>
        <div>
          <SearchIcon />
          <input type="text" placeholder="Search" />
        </div>

        <div>
          <BellIcon />
          <Avatar />
          <ArrowDownIcon />
        </div>
      </StatisticNavigation>

      <StatusBox>
        <Card category="Courses Completed" amount="11" />
        <Card category="Courses in Progress" amount="4" />
      </StatusBox>

      <StatisticSection>
        <h2>Your Statistics</h2>

        <ListOptions>
          <ul>
            <li className="active">Learning Hours</li>
            <li> My Courses</li>
          </ul>

          <div>
            <strong>Weekly</strong>
            <ArrowDownIcon />
          </div>
        </ListOptions>
      </StatisticSection>
    </Container>
  );
}

export default Statistic;
