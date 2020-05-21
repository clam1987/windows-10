import React from "react";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";
import background from "../../assets/img/beach.jpg";
import LoginModal from "../../components/LoginModal/LoginModal"



const useStyles = makeStyles((theme) => ({
  root: {
    height: "100vh",
    width: "100vw",
  },
  loginScreen: {
    background: `url(${background})`,
    width: "100%",
    height: "auto",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
  },
}));

const LandingScreen = () => {
  const classes = useStyles();
  return (
    <Grid container className={classes.root}>
      <Paper className={classes.loginScreen}>
      <LoginModal />
      </Paper>
    </Grid>
  );
};

export default LandingScreen;
