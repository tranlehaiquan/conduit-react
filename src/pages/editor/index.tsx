import { NextPage, GetServerSideProps } from 'next';
import { useContext, useEffect } from 'react';
import { useRouter } from 'next/router';

import AuthContext from '../../lib/AuthContext';

const Editor: NextPage = () => {
  const { isAuthenticated } = useContext(AuthContext);
  const router = useRouter();
  console.log('456');

  useEffect(() => {
    if (!isAuthenticated) {
      router.push('/login');
    }
  }, []);

  return (
    <p>Editor page</p>
  );
}


export const getServerSideProps: GetServerSideProps = async (ctx) => {
  // ctx.res.writeHead(302, { location: "/login" });
  // ctx.res.end();
  return { props: { }};
}

export default Editor;
