import { NextPage } from 'next';
import Head from 'next/head';

import Header from '../Header';
import Footer from '../Footer';
import FullHeight from '../FullHeight';

type NextPageProps = {
  title?: string;
};

const Layout: NextPage<NextPageProps> = (props) => {
  const { children, title } = props;

  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="initial-scale=1.0, width=device-width"
          key="viewport"
        />
        <title>{title || 'Nextjs Realworld'}</title>
      </Head>
      <Header />
      <FullHeight>{children}</FullHeight>
      <Footer />
    </>
  );
};

export default Layout;
