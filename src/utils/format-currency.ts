export const formatCurrency = (value: string | number): string => {
  value = Number(value).toFixed(2);
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(Number(value));
};
