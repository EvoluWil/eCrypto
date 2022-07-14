import type { NextPage } from 'next';
import Head from 'next/head';
import { Table } from '../components/table/table.componet';

type Cell = {
  id: string;
  label: string;
  align: 'left' | 'center';
  checked: boolean;
};

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Home | eCrypto</title>
      </Head>
      <Table
        cells={[]}
        rows={[]}
        initialOrder={{
          orderBy: '',
          direction: 'asc'
        }}
        onClick={(res) => console.log(res)}
        onSortByClick={(res) => console.log(res)}
        onCheck={(res) => console.log(res)}
      />
    </div>
  );
};

export default Home;
