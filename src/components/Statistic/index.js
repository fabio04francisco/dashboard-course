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
  GraphicSection,
} from './styles';

import graphicImage from '../../assets/graphic.svg';

import Avatar from '../Avatar';
import Card from '../Card';
import FooterPremiumBanner from '../FooterPremiumBanner';

function Statistic() {
  return (
    <Container>
      <StatisticNavigation notification="1">
        <div>
          <SearchIcon />
          <input type="text" placeholder="Search" />
        </div>

        <div>
          <div className="notification">
            <BellIcon />
          </div>

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

        <GraphicSection>
          <img src={graphicImage} alt="Grafico Estatisticas Cursos" />
        </GraphicSection>
      </StatisticSection>
      <FooterPremiumBanner />
    </Container>
  );
}

export default Statistic;
