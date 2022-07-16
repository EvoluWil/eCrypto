import { ICrypto } from '../data/models/crypto-model';
import { api } from './api.service';

class CryptoServiceClass {
  async getCryptos(query = '') {
    const { data } = await api.get<ICrypto[]>(query);
    return data;
  }
}

export const CryptoService = new CryptoServiceClass();
