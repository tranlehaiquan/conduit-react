import React from 'react';
import Link from 'next/link';
import makeStyles from '@material-ui/core/styles/makeStyles';
import Typo from '@material-ui/core/Typography';
import { useRouter } from 'next/router';

import cls from 'clsx';

const useStyles = makeStyles(({ spacing }) => ({
  root: {
    backgroundColor: '#f3f3f3',
    padding: [spacing(3), spacing(2)].map((i) => i + 'px').join(' '),
  },
  tag: {
    backgroundColor: '#818a91',
    padding: spacing(0.5),
    color: '#fff',
    borderRadius: '10rem',
    marginRight: spacing(0.5),
  },
  title: {
    marginBottom: spacing(1),
  },
  active: {
    backgroundColor: '#687077',
  },
}));

interface ListTagsProps {
  tags: string[];
};

const ListTags: React.FunctionComponent<ListTagsProps> = ({ tags }) => {
  const classes = useStyles();
  const router = useRouter();
  const { tag: currentTag } = router.query;
  const currentPath = router.pathname;

  return (
    <div className={classes.root}>
      <Typo className={classes.title}>Popular Tags</Typo>
      {tags.map((tag) => (
        <Link key={tag} href={`${currentPath}?tag=${tag}`}>
          <a className={cls(classes.tag, currentTag === tag && classes.active )}>{tag}</a>
        </Link>
      ))}
    </div>
  )
}

export default ListTags;
