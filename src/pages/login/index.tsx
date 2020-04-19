import React from 'react';
import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';
import makeStyles from '@material-ui/core/styles/makeStyles';
import Typo from '@material-ui/core/Typography';
import Link from 'next/link';
import { useFormik } from 'formik';

import FullHeight from '../../components/FullHeight';
import Layout from '../../components/Layout';

const useStyles = makeStyles(({ palette, spacing }) => ({
  root: {
    maxWidth: 550,
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  title: {
    textAlign: 'center',
  },
  linkRegister: {
    textAlign: 'center',
    color: palette.brand?.main,
    display: 'block',
    marginBottom: spacing(3),
  },
  input: {
    marginBottom: spacing(2),
  }
}));

export default function Login() {
  const classes = useStyles();
  const formik = useFormik({
    initialValues: {
      username: '',
      password: '',
    },
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <Layout title="Article page" >
      <Container maxWidth="md">
        <div className={classes.root}>
          <FullHeight>
            <Typo variant="h4" component="h1" className={classes.title} >Sign In</Typo>
            <Link href="/register">
              <a className={classes.linkRegister}>Need an account?</a>
            </Link>
            <TextField 
              variant="outlined" 
              value={formik.values.username} 
              onChange={formik.handleChange}
              id="username"
              name="username"
              className={classes.input} 
              fullWidth 
              placeholder="Username" 
            />
            <TextField 
              variant="outlined"
              value={formik.values.password} 
              onChange={formik.handleChange}
              id="password"
              name="password"
              type="password"
              className={classes.input}
              fullWidth
              placeholder="Password"
            />
            <button type="submit">Submit</button>
          </FullHeight>
        </div>
      </Container>
    </Layout>
  )
}
