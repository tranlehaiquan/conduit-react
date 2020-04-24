import { NextPage } from 'next';
import Link from 'next/link';
import Container from '@material-ui/core/Container';
import makeStyles from '@material-ui/core/styles/makeStyles';

import Navigation from '../Navigation';

const useStyles = makeStyles((theme) => ({
  root: {
    background: '#fff',
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(1),
  },
  homePage: {
    color: '#5cb85c',
    marginRight: 2,
    textDecoration: 'none',
    fontSize: 30,
    fontWeight: 'bold',
  },
  wrapper: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
}));

const Header: NextPage = () => {
  const classes = useStyles();

  return (
    <header className={classes.root}>
      <Container maxWidth="md">
        <div className={classes.wrapper}>
          <Link href="/">
            <a className={classes.homePage}>Conduit</a>
          </Link>

          <Navigation />
        </div>
      </Container>
    </header>
  );
};

export default Header;
