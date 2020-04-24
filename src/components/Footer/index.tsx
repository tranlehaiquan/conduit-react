import { NextPage } from 'next';

import makeStyles from '@material-ui/core/styles/makeStyles';

const useStyles = makeStyles(({ spacing }) => ({
  root: {
    bottom: 0,
    background: 'linear-gradient(#485563, #29323c)',
    textAlign: 'center',
    padding: spacing(2),
    zIndex: 999,
    color: '#fff',
    fontSize: '1.5rem',
    display: 'block',
  },
}));

const Footer: NextPage = () => {
  const classes = useStyles();

  return <footer className={classes.root}>Fork on GitHub</footer>;
};

export default Footer;
