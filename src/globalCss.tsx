import { FunctionComponent } from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  '@global': {
    'a': {
      textDecoration: 'none',
    }
  },
});

const GlobalCss: FunctionComponent = (props) => {
  const classes = useStyles();
  const { children = null } = props;

  return <>{children}</>
}

export default GlobalCss;
