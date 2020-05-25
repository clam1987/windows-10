import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Button from "@material-ui/core/Button";
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import moment from "moment";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginLeft: "auto"
  },
  text: {
      color: "white",
      fontSize: ".65rem",
      float: "right",
  }
}));

const TaskbarTime = () => {
  const classes = useStyles();
    const [time, setTime] = useState(moment().format("LT"));
    const [date, setDate] = useState(moment().format("L"))

    useEffect(() => {
        setInterval(() => {
            setTime(moment().format("LT"));
            setDate(moment().format("L"));
        }, 1000);
    }, [time])

  return (
    <div className={classes.root}>
        <Button className={classes.text}>
            {time}
            <br />
            {date}
        </Button>
    </div>
  );
}

export default TaskbarTime;