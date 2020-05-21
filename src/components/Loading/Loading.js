import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    '& > * + *': {
      marginLeft: theme.spacing(2),
    },
    justifyContent: "center"
  },
  circleColor: {
      color: "white"
  }
}));

const Loading = () => {
  const classes = useStyles();

  return (
    <div className={`${classes.root} loading-container`}>
      <CircularProgress className={classes.circleColor}/>
      <Typography variant="h5" className={classes.circleColor}>Welcome</Typography>
    </div>
  );
}

export default Loading