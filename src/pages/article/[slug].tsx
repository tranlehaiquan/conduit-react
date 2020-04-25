import { NextPage, GetServerSideProps } from 'next';
import { useRouter } from 'next/router';
import Container from '@material-ui/core/Container';

import { getArticleDetailBySlug } from '../../lib/GetServerSide';

const Article: NextPage = (props) => {
  const router = useRouter();
  const { query } = router;

  return (
    <Container maxWidth="lg">
      <>article detail {query.slug}</>
    </Container>
  );
};

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { slug } = ctx.query;

  if (!slug) {
    ctx.res.writeHead(302, '/404');
    return { props: {} };
  }

  const articleDetail = await getArticleDetailBySlug(slug as string);

  return {
    props: {
      article: articleDetail,
    },
  };
};

export default Article;
