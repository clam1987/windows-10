import React from "react";
import DesktopWindowsIcon from "@material-ui/icons/DesktopWindows";
import RestoreIcon from '@material-ui/icons/Restore';
import PowerSettingsNewIcon from '@material-ui/icons/PowerSettingsNew';
import { makeStyles } from '@material-ui/core/styles';
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme) => ({
  root: {
    position: "fixed",
    left: "92%",
    top: "90%"
  },
  icons: {
    color: "white",
    marginRight: ".3em"
  }
}));


const LoginIcons = () => {
  const classes = useStyles()
  return (
    <Grid container direction="row" className={classes.root}>
      <Grid item>
        <DesktopWindowsIcon className={classes.icons} fontSize="large"/>
      </Grid>
      <Grid item>
        <RestoreIcon className={classes.icons} fontSize="large"/>
      </Grid>
      <Grid item>
        <PowerSettingsNewIcon className={classes.icons} fontSize="large"/>
      </Grid>
    </Grid>
  );
};

export default LoginIcons;
