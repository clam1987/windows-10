import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import moment from "moment";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    float: "left",
    position: "fixed",
    top: "65%"
  },
  paper: {
    padding: theme.spacing(2),
    margin: 'auto',
    maxWidth: 500,
    background: "rgba(0, 0, 0, 0)",
  },
  image: {
    width: 128,
    height: 128,
  },
  img: {
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
  },
  text: {
      color: "white",
      float: "left"
  }
}));

const DateTime = () => {
  const classes = useStyles();
    const [time, setTime] = useState(moment().format("h:mm"));
    const [date, setDate] = useState(moment().format("dddd, MMM Do"))

    useEffect(() => {
        setInterval(() => {
            setTime(moment().format("h:mm"));
        }, 1000);
    }, [time])
  return (
    <div className={classes.root}>
      <Paper elevation={0} className={classes.paper}>
        <Grid container spacing={2}>
            <Grid item>
                <Typography variant="h1" className={classes.text}>{time}</Typography>
                <Typography variant="h3" className={classes.text}>{date}</Typography>
            </Grid>
        </Grid>
      </Paper>
    </div>
  );
}

export default DateTime;