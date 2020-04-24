import { useContext, useState, useEffect } from 'react';
import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';
import makeStyles from '@material-ui/core/styles/makeStyles';
import Typo from '@material-ui/core/Typography';
import Link from 'next/link';
import { useFormik } from 'formik';
import { useRouter } from 'next/router';

import getValidationSchema from '../../lib/FormValidation';
import AuthContext from '../../lib/AuthContext';
import { userLogin } from '../../lib/GetClientSide';

const useStyles = makeStyles(({ palette, spacing }) => ({
  root: {
    maxWidth: 550,
    marginLeft: 'auto',
    marginRight: 'auto',
    paddingTop: spacing(3),
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
  },
  btnSignIn: {
    backgroundColor: palette.brand?.main,
    color: '#fff',
    display: 'block',
    marginLeft: 'auto',
    padding: [spacing(1), spacing(2)].map((x) => `${x}px`).join(' '),
    fontSize: 14,
    borderRadius: 5,
  },
  error: {
    color: palette.error.main,
  },
}));

const validationSchema = getValidationSchema(['username', 'password']);

export default function Login() {
  const { setUserLogin } = useContext(AuthContext);
  const [errors, setErrors] = useState<string[]>([]);
  const classes = useStyles();
  const router = useRouter();
  const formik = useFormik({
    initialValues: {
      username: '',
      password: '',
    },
    onSubmit: handleLogin,
    validationSchema,
  });

  async function handleLogin(values: { username: string; password: string }) {
    try {
      const userLoginRequest = await userLogin(
        values.username,
        values.password
      );
      setUserLogin(userLoginRequest);
      router.push('/');
    } catch (err) {
      if (err.errors) {
        const listError = Object.values<string>(err.errors).map(
          (value) => value
        );
        setErrors(listError);
        return;
      }

      if (err.error) {
        setErrors([err.error]);
        return;
      }

      // TODO
      // For network error will appear infomation
      // tell user try again later
      // eslint-disable-next-line no-console
      console.error(err);
    }
  }

  return (
    <Container maxWidth="md">
      <div className={classes.root}>
        <Typo variant="h4" component="h1" className={classes.title}>
          Sign In
        </Typo>
        <Link href="/register">
          <a className={classes.linkRegister}>Need an account?</a>
        </Link>
        {errors.map((err) => (
          <p className={classes.error} key={err}>
            {err}
          </p>
        ))}
        <TextField
          variant="outlined"
          value={formik.values.username}
          onChange={formik.handleChange}
          id="username"
          name="username"
          className={classes.input}
          fullWidth
          placeholder="Username"
          error={Boolean(formik.touched.username && formik.errors.username)}
          helperText={formik.touched.username ? formik.errors.username : ''}
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
          error={Boolean(formik.touched.password && formik.errors.password)}
          helperText={formik.touched.password ? formik.errors.password : ''}
        />
        <button
          className={classes.btnSignIn}
          onClick={() => {
            formik.handleSubmit();
          }}
          type="submit"
        >
          Submit
        </button>
      </div>
    </Container>
  );
}
