import makeStyle from '@material-ui/core/styles/makeStyles';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyle(({ spacing, palette }) => ({
  root: {
    background: palette.brand?.main,
    color: '#fff',
    paddingTop: spacing(6),
    paddingBottom: spacing(6),
    textAlign: 'center',
  },
  head: {
    fontSize: '3.5rem',
    fontWeight: 'bold',
  }
}));

export default function Banner() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Typography variant="h1" className={classes.head}>conduit</Typography>
      <Typography variant="subtitle1">A place to share your knowledge.</Typography>
    </div>
  )
}
