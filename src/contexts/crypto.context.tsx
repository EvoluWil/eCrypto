import React, { createContext, ReactNode, useCallback, useMemo } from 'react';
import { symbolsWithBrl } from '../constants/symbolsWithBrl.constant';
import { ICrypto } from '../data/models/crypto-model';
import { CryptoService } from '../services/crypto.service';

interface CryptoContextData {
  getCryptosWithBrl: () => Promise<ICrypto[]>;
}

type CryptoContextProps = {
  children: ReactNode;
};

export const CryptoContext = createContext({} as CryptoContextData);

export const CryptoProvider: React.FC<CryptoContextProps> = ({ children }) => {
  const getCryptosWithBrl = useCallback(() => {
    return CryptoService.getCryptos(`?symbols=${symbolsWithBrl}`);
  }, []);
  const providerValue = useMemo(() => ({ getCryptosWithBrl }), [getCryptosWithBrl]);
  return <CryptoContext.Provider value={providerValue}>{children}</CryptoContext.Provider>;
};
