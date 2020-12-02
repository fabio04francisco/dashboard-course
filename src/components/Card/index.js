import React from 'react';
import PropTypes from 'prop-types';

import { Container } from './styles';

function Card({ category, amount }) {
  return (
    <Container>
      <strong>{amount}</strong>
      <span>{category}</span>
    </Container>
  );
}

Card.propTypes = {
  category: PropTypes.string,
  amount: PropTypes.string,
};

Card.defaultProps = {
  category: 'Categoria Padrão',
  amount: '0',
};

export default Card;
