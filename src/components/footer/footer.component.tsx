import Image from 'next/image';
import React from 'react';
import { FooterContainer } from './footer.styles';

export const Footer = () => {
  return (
    <FooterContainer>
      <div>
        <a href="#" rel="noreferrer" target="_blank">
          <Image src="/logo.svg" alt="eCrypto" height="60px" width="180" />
        </a>
        <a href="https://www.binance.com/" rel="noreferrer" target="_blank">
          Data provided by <strong>Binance © 2022</strong>
        </a>
        <p>
          <a href="http://willianrodrigues.tk" target="_blank" rel="noreferrer">
            Developed by Will
          </a>
        </p>
      </div>
    </FooterContainer>
  );
};
