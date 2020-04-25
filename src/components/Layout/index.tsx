import { NextPage } from 'next';

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
      <Header />
      <FullHeight>{children}</FullHeight>
      <Footer />
    </>
  );
};

export default Layout;
