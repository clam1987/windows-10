import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import FormHelperText from "@material-ui/core/FormHelperText"
import {
  makeStyles,
} from "@material-ui/core/styles";
import InputBase from "@material-ui/core/InputBase";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import IconButton from "@material-ui/core/IconButton";
import Paper from '@material-ui/core/Paper';
import Divider from '@material-ui/core/Divider';
import Loading from "../Loading/Loading";
import  "./PinForm.css";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: 2,
    display: 'inline-flex',
    width: 500,
    marginTop: "1em"
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
  },
  iconButton: {
    padding: 10,
    borderRadius: 0,
    backgroundColor: "dark gray"
  },
  divider: {
    height: 44,
  },
  margin: {
    display: "flex",
    justifyContent: "center",
    color: "white"
  },
  helperColor: {
    color: "white"
  }
}));


const PinForm = () => {
  const [input, setInput] = useState("");
  const [hintmsg, setHintMsg] = useState("Hint*: The Pin is 0000");
  const [loading, setLoading] = useState(false);
  const history = useHistory();
  const classes = useStyles();
  const handleChange = e => {
    const { name, value } = e.target;
    setInput({
      [name]: value
    });
  }

  const handleSubmit = e => {
    e.preventDefault();
    if(input.input === "0000") {
      setLoading(true);
      setInterval(() => {
        history.push("/desktop")
      }, 5000);
    } else {
      setHintMsg("Pleasae input the correct password, Hint* the password is 0000");
    }
  }

  // if(loading === "true") {
  //   return <Loading />
  // } else {
  //   return false;
  // }

  return (
    <>
    <Paper component="form" className={classes.root}>
    <InputBase
      className={classes.input}
      placeholder="Enter your PIN"
      onChange={handleChange}
      name="input"
    />
    <Divider className={classes.divider} orientation="vertical" />
    <IconButton color="primary" className={`${classes.iconButton} btn-background`} aria-label="enter" type="submit" onClick={handleSubmit}>
      <ArrowForwardIcon className={classes.helperColor}/>
    </IconButton>
  </Paper>
  <FormHelperText id="my-helper-text" className={classes.margin}>{hintmsg}</FormHelperText>
  {/* {loading ? <Loading /> : null} */}
  <Loading />
  </>
  );
};

export default PinForm;
