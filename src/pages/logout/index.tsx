import { NextPage } from 'next';
import { useContext, useEffect } from 'react';
import { useRouter } from 'next/router';
import makeStyles from '@material-ui/core/styles/makeStyles';
import Typo from '@material-ui/core/Typography';

import AuthContext from '../../lib/AuthContext';

const useStyle = makeStyles(({ spacing }) => ({
  root: {
    paddingTop: spacing(8),
    textAlign: 'center',
  },
}))

const Logout: NextPage = () => {
  const { logout } = useContext(AuthContext);
  const router = useRouter();
  const classes = useStyle();

  useEffect(() => {
    logout();
    setTimeout(() => {
      router.push('/');
    }, 3000);
  }, []);

  return (
    <div className={classes.root}>
      <Typo variant="h5" component="h1">See you again! 👋👋👋</Typo>
    </div>
  );
}

export default Logout;
