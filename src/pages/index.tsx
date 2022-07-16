import type { GetServerSideProps, NextPage } from 'next';
import Head from 'next/head';
import { symbolsWithBrl } from '../constants/symbolsWithBrl.constant';
import { ICrypto } from '../data/models/crypto-model';
import { api } from '../services/api.service';
import { useMemo } from 'react';
import { formatCryptoToTable } from '../utils/generate-cell.util';
import { Table } from '../components/table/table.component';
import { TableComponentContainer } from '../styles/home.styles';

interface HomeProps {
  data: ICrypto[];
}
const Home: NextPage<HomeProps> = ({ data }) => {
  const { rows, cells } = useMemo(() => {
    return formatCryptoToTable(data);
  }, [data]);
  return (
    <>
      <Head>
        <title>Home | eCrypto</title>
      </Head>
      {cells ? (
        <TableComponentContainer>
          <Table
            cells={cells}
            rows={rows}
            initialOrder={{
              orderBy: 'symbol',
              direction: 'asc'
            }}
            hasDetails
          />
        </TableComponentContainer>
      ) : (
        <p>Não foi dessa vez</p>
      )}
    </>
  );
};

export default Home;

export const getServerSideProps: GetServerSideProps = async () => {
  try {
    const { data } = await api.get<ICrypto[]>(
      `/ticker/24hr?symbols=${symbolsWithBrl}`
    );
    return {
      props: { data }
    };
  } catch (err) {
    return {
      props: {}
    };
  }
};
