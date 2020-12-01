import styled from 'styled-components';

// SB - Sidebar
// MA - Main
// ST - Statistics
export const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  width: 100%;
`;

export const Grid = styled.div`
  display: grid;

  width: 1440px;

  grid-template-columns: 200px 688px 552px;
  grid-template-rows: minmax(900px, 100vh);

  grid-template-areas: 'SB MA ST';
`;
