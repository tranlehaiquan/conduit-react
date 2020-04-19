import { useContext } from 'react';
import { NextPage, GetServerSideProps } from 'next';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import makeStyles from '@material-ui/core/styles/makeStyles';

import Banner from '../components/Banner';
import { ResponseGetArticle, ArticleModel } from '../models';
import Layout from '../components/Layout';
import ArticlePreview from '../components/ArticlePreview';
import ListTags from '../components/ListTags';
import { getListArtilce, getListTag } from '../lib/GetServerSide';
import AuthContext from '../lib/AuthContext';
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
  const { isAuthenticated } = useContext(AuthContext);

  return (
    <Layout title="Home Realworld | Learning">
      <Banner />
      <div className={classes.root}>
        <Container maxWidth="md" >
          <Grid container >
            <Grid item md={8} >
              <FeedTabs />
              {articles.articles.map((article: ArticleModel) => (
                <ArticlePreview key={article.id} article={article} />
              ))}
            </Grid>
            <Grid item md={4}>
              <ListTags tags={tags} />
            </Grid>
          </Grid>
        </Container>
      </div>
    </Layout>
  )
};

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const [ articles, tags ] = await Promise.all([ getListArtilce(ctx.query), getListTag() ]);

  return { props: { articles, tags: tags }};
}

export default Home;
