import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";
import Button from "@material-ui/core/Button";
import VolumeUpIcon from "@material-ui/icons/VolumeUp";
import WifiIcon from "@material-ui/icons/Wifi";
import ExpandLessIcon from "@material-ui/icons/ExpandLess";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 262345676778,
    marginLeft: "auto",
  },
  iconBtn: {
    color: "white",
    fontSize: ".75rem",
    float: "right",
  },
  text: {
    color: "white",
    fontSize: ".75rem",
    float: "right",
    marginTop: ".1em"
  },
  iconRoot: {
    minWidth: "1.275rem",
  },
  iconRoot2: {
    padding: ".275rem"
  }
}));

const TaskbarIcons = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Button className={classes.text} classes={{root: classes.iconRoot}}>ENG</Button>
      <IconButton className={classes.iconBtn} classes={{root: classes.iconRoot2}}>
        <VolumeUpIcon />
      </IconButton>
      <IconButton className={classes.iconBtn} classes={{root: classes.iconRoot2}}>
        <WifiIcon />
      </IconButton>
      <IconButton className={classes.iconBtn} classes={{root: classes.iconRoot2}}>
        <ExpandLessIcon />
      </IconButton>
    </div>
  );
};

export default TaskbarIcons;
