import React, { useContext } from 'react';
import makeStyles from '@material-ui/core/styles/makeStyles';
import Link from 'next/link';

import AuthContext from '../../lib/AuthContext';

const gestNavigation = [
  {
    label: 'Login',
    to: '/login'
  },
  {
    label: 'Register',
    to: '/register',
  },
];

const authenticatedNavigation = [
  {
    label: 'New Post',
    to: '/editor'
  },
  {
    label: 'Settings',
    to: '/settings',
  },
];

const useStyles = makeStyles(({ spacing }) => ({
  root: {

  },
  link: {
    textDecoration: 'none',
    color: 'rgba(0,0,0,.3)',
    padding: spacing(2),
    fontSize: 16,
  }
}));

const Navigation: React.FunctionComponent = () => {
  const classes = useStyles();
  const { isAuthenticated, user } = useContext(AuthContext);

  const Logined: React.FunctionComponent = () => {
    return (
      <>
        {authenticatedNavigation.map(({ label, to }) => (
          <Link href={to} key={label}>
            <a className={classes.link}>{label}</a>
          </Link>
        ))}
        <Link href="/profile">
          <a className={classes.link}>{user?.username}</a>
        </Link>
        <Link href="/logout">
          <a className={classes.link}>Logout</a>
        </Link>
      </>
    );
  };

  const Guest: React.FunctionComponent = () => {
    return (
      <>
        {gestNavigation.map(({ label, to }) => (
          <Link href={to} key={label}>
            <a className={classes.link}>{label}</a>
          </Link>
        ))}
      </>
    )
  };

  return (
    <div className={classes.root}>
      {!isAuthenticated && <Guest />}
      {isAuthenticated && <Logined />}
    </div>
  );
};

export default Navigation;
