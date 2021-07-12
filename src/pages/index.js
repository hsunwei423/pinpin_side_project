import Head from 'next/head'

import Layout from '@/components/Layout';
import MainSale from '@/components/MainSale';

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>拼拼</title>
      </Head>
      <MainSale />
    </Layout>
  )
}
