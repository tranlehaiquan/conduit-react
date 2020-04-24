import { FunctionComponent, useEffect, useState, useRef } from 'react';
import makeStyles from '@material-ui/core/styles/makeStyles';
import cls from 'clsx';

const useStyles = makeStyles(() => ({
  root: ({ height }: {height?: number | string}) => ({
    minHeight: height || `calc(100vh - 120px)`,
  }),
}));

interface FullHeightProps {
  className?: string;
};

// This element will set fix height
// prevent height unit vh change in mobile
const FullHeight: FunctionComponent<FullHeightProps> = ({ children, className, ...restProps }) => {
  const [ height, setHeight ] = useState<number | string>();
  const classes = useStyles({ height });
  const divRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if(divRef?.current?.offsetHeight) {
      setHeight(screen.height - 120);
    }
  }, []);
  
  return (
    <div className={cls(classes.root, className)} {...restProps} ref={divRef}>
      {children}
    </div>
  );
}

export default FullHeight;
