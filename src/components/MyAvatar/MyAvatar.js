import React from "react";
import Avatar from "@material-ui/core/Avatar";
import { makeStyles } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme) => ({
  large: {
    width: theme.spacing(27),
    height: theme.spacing(27),
  },
  avatarCenter: {
    marginTop: "25vh"
  }
}));

const MyAvatar = props => {
  const classes = useStyles();
  return (
      <Grid 
        container 
        direction="column" 
        justify="center" 
        alignItems="center"
        className={classes.avatarCenter}
      >
    <Grid item md={2}>
      <Avatar
        alt={props.profileName}
        src={require(`../../assets/img/${props.src}.jpg`)}
        className={classes.large}
      />
    </Grid>
    </Grid>
  );
};

export default MyAvatar;
