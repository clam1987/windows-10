import React from "react";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";
import background from "../../assets/img/windows.jpg";
import WindowsBar from "../../components/WindowsBar/WindowsBar";

const useStyles = makeStyles((theme) => ({
    root: {
      height: "100vh",
      width: "100vw",
    },
    mainScreen: {
      background: `url(${background})`,
      width: "100%",
      height: "auto",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
    },
  }));
  

const WindowsScreen = () => {
    const classes = useStyles();
    return(
        <Grid container className={classes.root}>
            <Paper className={classes.mainScreen}>
              <WindowsBar />
            </Paper>
        </Grid>
    )
};

export default WindowsScreen;