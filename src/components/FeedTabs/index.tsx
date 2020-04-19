import { useContext } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import makeStyles from '@material-ui/core/styles/makeStyles';

import AuthContext from '../../lib/AuthContext';

const useStyles = makeStyles(() => ({
  root: {

  }
}));

const FeedTabs = () => {
  const { isAuthenticated } = useContext(AuthContext);
  const router = useRouter();
  const isFeed = router.pathname.startsWith('/feed');
  const classes = useStyles();

  console.log(router.pathname);

  return (
    <div className={classes.root}>
      {isAuthenticated &&
        <Link href="/feed">
          <a>Feed article</a>
        </Link>
      }
      <Link href="/">
        <a>Global article</a>
      </Link>
    </div>
  )
}

export default FeedTabs;
