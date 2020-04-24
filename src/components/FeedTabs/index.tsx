import { useContext } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import makeStyles from '@material-ui/core/styles/makeStyles';
import cls from 'clsx';

import AuthContext from '../../lib/AuthContext';

const useStyles = makeStyles(({ palette, spacing }) => ({
  root: {

  },
  link: {
    color: palette.brand?.main,
    padding: [spacing(1), spacing(1.5)].map((v) => v + 'px').join(' '),
    display: 'inline-block',
    borderBottom: '2px solid transparent',
  },
  linkActive: {
    borderColor: palette.brand?.main,
  },
}));

const FeedTabs = () => {
  const { isAuthenticated } = useContext(AuthContext);
  const router = useRouter();
  const isFeed = router.pathname.startsWith('/feed');
  const classes = useStyles();

  return (
    <div className={classes.root}>
      {isAuthenticated &&
        <Link href="/feed">
          <a className={cls(isFeed && classes.linkActive, classes.link)}>Feed article</a>
        </Link>
      }
      <Link href="/">
        <a className={cls(!isFeed && classes.linkActive, classes.link)}>Global article</a>
      </Link>
    </div>
  )
}

export default FeedTabs;
