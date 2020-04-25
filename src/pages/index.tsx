import { NextPage, GetServerSideProps } from 'next';
import React from 'react';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import makeStyles from '@material-ui/core/styles/makeStyles';
import Pagination from '@material-ui/lab/Pagination';
import { useRouter } from 'next/router';
import ceil from 'lodash/ceil';
import Link from 'next/link';

import Banner from '../components/Banner';
import { ResponseGetArticle, ArticleModel } from '../models';
import ArticlePreview from '../components/ArticlePreview';
import ListTags from '../components/ListTags';
import { getListArtilce, getListTag } from '../lib/GetServerSide';
import FeedTabs from '../components/FeedTabs';

export const config = { amp: 'hybrid' };

type HomeProps = {
  articles: ResponseGetArticle;
  tags: string[];
};

const useStyles = makeStyles(({ spacing }) => ({
  root: {
    paddingTop: spacing(3),
    paddingBottom: spacing(3),
  },
}));

const Home: NextPage<HomeProps> = ({ articles, tags }) => {
  const classes = useStyles();
  const router = useRouter();
  const page: number = Number.isNaN(Number(router.query.page))
    ? 1
    : Number(router.query.page);
  const pageCount = ceil(articles.articlesCount / articles.limit);
  const { tag } = router.query;

  function handleChangePage(event: React.ChangeEvent<unknown>, value: number) {
    const tagQuery = tag ? `&tag=${router.query.tag}` : '';
    router.push(`/?page=${value}${tagQuery}`);
  }

  return (
    <>
      <Banner />
      <div className={classes.root}>
        <Container maxWidth="md">
          <Grid container>
            <Grid item md={8} xs={12}>
              <FeedTabs />
              {articles.articles.map((article: ArticleModel) => (
                <ArticlePreview key={article.id} article={article} />
              ))}
              {!articles.articles.length && <p>No articles to show!</p>}
              {pageCount > 1 && (
                <Pagination
                  page={page}
                  count={pageCount}
                  onChange={handleChangePage}
                />
              )}
            </Grid>
            <Grid item md={4} xs={12}>
              <ListTags tags={tags} />
            </Grid>
          </Grid>
        </Container>
      </div>
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const [articles, tags] = await Promise.all([
    getListArtilce(ctx.query),
    getListTag(),
  ]);

  return { props: { articles, tags } };
};

export default Home;
