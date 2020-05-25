import React from "react";
import DesktopWindowsIcon from "@material-ui/icons/DesktopWindows";
import { makeStyles } from '@material-ui/core/styles';
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme) => ({
    root: {
      position: "fixed",
      top: "90%",
      left: "95%"
    },
    icons: {
      color: "white",
    }
  }));

  const DesktopIcons = () => {
      const classes = useStyles()
      return(
        <Grid item className={classes.root}>
            <DesktopWindowsIcon className={classes.icons} fontSize="large" />
        </Grid>
      )
  };

export default DesktopIcons;