import styled from 'styled-components';

export const TableContainer = styled.table`
  border-collapse: collapse;
  width: 100%;
`;

interface TableCellProps {
  align: 'left' | 'right' | 'center';
}

export const TableCell = styled.th<TableCellProps>`
  font-size: 12px;
  font-weight: 600;
  padding: 10px 0;
  color: ${({ theme }) => theme.text.secondary};
  text-align: ${({ align }) => {
    if (align === 'right') {
      return 'right';
    }
    if (align === 'left') {
      return 'left';
    }
    return 'center';
  }};

  &:last-child {
    padding-right: 16px;
  }
`;

export const TableRow = styled.tr`
  font-size: 12px;
  font-weight: 600;
  color: ${({ theme }) => theme.text.primary};
  height: 65px;
  cursor: pointer;
  transition: color 0.4s;
  border-bottom: 1px solid ${({ theme }) => theme.border};

  &:hover,
  &.active {
    background-color: ${({ theme }) => theme.detail};
    border: 0px;
    td:first-child {
      border-radius: 20px 0 0 20px;
      margin-left: 20px;
      background-color: ${({ theme }) => theme.detail};
    }
    td:last-child {
      border-radius: 0 20px 20px 0;
      background-color: ${({ theme }) => theme.detail};
    }
  }
  td:last-child,
  td:first-child {
    padding: 16px;
  }

  .panel {
    padding: 0 18px;
    background-color: white;
    display: none;
    overflow: hidden;
  }
`;

interface TableItemProps {
  isPositive?: boolean;
  type?: 'currency' | 'percent' | 'text';
  align: 'center' | 'right' | 'left';
}
export const TableItem = styled.td<TableItemProps>`
  text-align: ${({ align }) => align};
  color: ${({ type, theme, isPositive }) => {
    if (type === 'currency' && !isPositive) {
      return theme.error;
    }
    if (type === 'percent') {
      return isPositive ? theme.success : theme.error;
    }
    return theme.text.primary;
  }};
`;

export const CheckBoxIcon = styled.i`
  font-size: 14px;
  color: ${({ theme }) => theme.text.secondary};

  &.fa-star {
    color: ${({ theme }) => theme.warn};
  }
`;

export const IndexLabel = styled.span`
  font-size: 12px;
  color: ${({ theme }) => theme.text.secondary};
  margin-left: 10px;
`;

export const Panel = styled.div`
  border: 2px solid ${({ theme }) => theme.detail};
  border-radius: 20px;
  border-top: 0;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 32px;
  padding: 32px;
  margin-top: -24px;
  margin-bottom: 16px;
  padding-top: calc(32px + 24px);
  font-size: 14px;

  div {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`;
