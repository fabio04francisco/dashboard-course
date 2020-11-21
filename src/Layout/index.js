import React from 'react';

import { Grid, Container } from './styles';
import Sidebar from '../components/Sidebar';
import Main from '../components/Main';
import Statistic from '../components/Statistic';

function Layout() {
  return (
    <Container>
      <Grid>
        <Sidebar />
        <Main />
        <Statistic />
      </Grid>
    </Container>
  );
}

export default Layout;
