import { Cell } from '../components/table/table.component';
import { ICrypto } from '../data/models/crypto-model';
import { formatCurrency } from './format-currency';

interface FormatCryptoToTableResponse {
  cells: Cell[];
  rows: { [key: string]: any }[];
}
export const formatCryptoToTable = (
  data: ICrypto[]
): FormatCryptoToTableResponse => {
  const cells: Cell[] = [
    {
      id: 'symbol',
      label: 'Name',
      align: 'left',
      checked: false,
      isResponsive: true
    },
    {
      id: 'lastPrice',
      label: 'Price',
      align: 'right',
      checked: false,
      type: 'currency',
      isResponsive: true
    },
    {
      id: 'priceChangePercent',
      label: '24h %',
      align: 'right',
      checked: false,
      type: 'percent',
      isResponsive: true
    },
    {
      id: 'prevClosePrice',
      label: 'Last price',
      align: 'right',
      checked: false,
      type: 'currency'
    },
    {
      id: 'priceChange',
      label: 'Variation',
      align: 'right',
      checked: false,
      type: 'currency'
    },
    {
      id: 'volume',
      label: 'Volume (24h)',
      align: 'right',
      checked: false,
      type: 'currency',
      icon: 'fa fa-bar-chart'
    }
  ];

  const rows = data.map((crypto) => ({
    id: crypto.symbol,
    symbol: crypto.symbol.replace(/BRL/g, ''),
    lastPrice: formatCurrency(crypto.lastPrice) || '',
    priceChangePercent:
      Number(crypto.priceChangePercent).toFixed(2) + ' %' || '',
    prevClosePrice: formatCurrency(crypto.prevClosePrice) || '',
    priceChange: formatCurrency(crypto.priceChange) || '',
    volume: formatCurrency(crypto.volume) || '',
    details: {
      Open_price: formatCurrency(crypto.openPrice),
      Last_close: formatCurrency(crypto.prevClosePrice),
      Highest_price: formatCurrency(crypto.highPrice),
      Lower_price: formatCurrency(crypto.lowPrice),
      Volume_value: formatCurrency(crypto.quoteVolume),
      Volume: formatCurrency(crypto.volume) || ''
    }
  }));
  return { cells, rows };
};
