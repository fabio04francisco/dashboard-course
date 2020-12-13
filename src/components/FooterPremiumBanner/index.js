import React from 'react';

import bookImage from '../../assets/book.svg';

import { Container } from './styles';

function FooterPremiumBanner() {
  return (
    <Container>
      <div>
        <h2>Lern even more!</h2>
        <span>Unlock premium features only for $9.99 per month.</span>
        <button type="button">Go Premium</button>
      </div>
      <div>
        <img src={bookImage} alt="Books" />
      </div>
    </Container>
  );
}

export default FooterPremiumBanner;
