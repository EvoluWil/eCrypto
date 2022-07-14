import styled from 'styled-components';

export const TableContainer = styled.table`
  border-collapse: collapse;
  width: 100%;
`;

interface TableCellProps {
  align: 'center' | 'left';
}

export const TableCell = styled.th<TableCellProps>`
  font-size: 12px;
  font-weight: 600;
  padding: 10px 0;
  color: ${({ theme }) => theme.text.secondary};
  text-align: ${({ align }) => (align === 'center' ? 'center' : 'left')};
`;

export const TableRow = styled.tr`
  font-size: 12px;
  font-weight: 600;
  color: ${({ theme }) => theme.text.primary};
  height: 65px;
  border-radius: 20px;

  &:hover {
    background-color: ${({ theme }) => theme.detail};
  }
`;
