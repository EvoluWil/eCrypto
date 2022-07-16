import { useContext } from 'react';
import { CryptoContext } from '../contexts/crypto.context';

const useCrypto = () => {
  const context = useContext(CryptoContext);

  if (!context) {
    throw new Error('useCrypto must be used within an CryptoProvider');
  }

  return context;
};

export { useCrypto };
