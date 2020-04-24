import { NextPage } from 'next';
import makeStyles from '@material-ui/core/styles/makeStyles';
import Link from 'next/link';
import Typo from '@material-ui/core/Typography';
import formatDistanceToNow from 'date-fns/formatDistanceToNow';
import { vi } from 'date-fns/locale';

import { ArticleModel } from '../../models';

const useStyle = makeStyles(({ spacing, palette }) => ({
  root: {
    paddingTop: spacing(3),
    paddingBottom: spacing(3),
    borderTop: '1px solid rgba(0,0,0,.1)',
  },
  title: {},
  titleLink: {
    textDecoration: 'none',
    color: '#000',
  },
  tags: {
    listStyle: 'none',
    margin: 0,
    padding: 0,
  },
  tag: {
    display: 'inline-block',
    color: palette.text.secondary,
    padding: `${spacing(0.2)}px ${spacing(0.6)}px`,
  },
  author: {
    display: 'flex',
    alignItems: 'center',
  },
  authorImg: {
    height: 30,
    width: 30,
    borderRadius: '50%',
    marginRight: spacing(1),
    fontWeight: 'bold',
  },
  authorName: {
    color: palette.primary.light,
    marginRight: spacing(1),
  },
  timeDistance: {
    color: palette.text.secondary,
  },
}));

type ArticlePreviewProps = {
  article: ArticleModel;
};

const ArticlePreview: NextPage<ArticlePreviewProps> = ({ article }) => {
  const classes = useStyle();
  const haveTags = !!article.tagList.length;

  return (
    <div className={classes.root}>
      <Link href="/article/[slug]" as={`/article/${article.slug}`}>
        <a className={classes.titleLink}>
          <Typo variant="h6" component="h3">
            {article.title}
          </Typo>
          <Typo variant="subtitle1">{article.description}</Typo>

          <div className={classes.author}>
            <img
              src={article.author.image}
              alt={article.author.username}
              className={classes.authorImg}
            />
            <p className={classes.authorName}>{article.author.username}</p>
            <p className={classes.timeDistance}>
              {formatDistanceToNow(new Date(article.createdAt), { locale: vi })}{' '}
              trước
            </p>
          </div>

          {haveTags && (
            <Typo variant="subtitle2">
              {article.tagList.map((tag) => tag).join(', ')}
            </Typo>
          )}
        </a>
      </Link>
    </div>
  );
};

export default ArticlePreview;
