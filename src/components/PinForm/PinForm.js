import React, { useState } from "react";
import FormHelperText from "@material-ui/core/FormHelperText"
import {
  fade,
  ThemeProvider,
  withStyles,
  makeStyles,
  createMuiTheme,
} from "@material-ui/core/styles";
import InputBase from "@material-ui/core/InputBase";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import IconButton from "@material-ui/core/IconButton";
import Paper from '@material-ui/core/Paper';
import Divider from '@material-ui/core/Divider';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import DirectionsIcon from '@material-ui/icons/Directions';
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
    // margin: 4,
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

const BootstrapInput = withStyles((theme) => ({
  root: {
    "label + &": {
      marginTop: theme.spacing(3),
    },
  },
  input: {
    marginLeft: theme.spacing(1),
    flex:1,
    borderRadius: 1,
    position: "relative",
    backgroundColor: "white",
    border: "2px solid white",
    fontSize: 16,
    width: "auto",
    padding: "5px 3em 5px 0.5em",
    transition: theme.transitions.create("border-color"),
    // Use the system font instead of the default Roboto font.
    fontFamily: [
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(","),
    "&:focus": {
      borderColor: "white",
    },
  },
}))(InputBase);

const PinForm = () => {
  const [input, setInput] = useState();
  const classes = useStyles();
  const handleChange = e => {
    const { name, value } = e.target;
    setInput({
      [name]: value
    })
    // console.log(input)
  }
  return (
    <>
    <Paper component="form" className={classes.root}>
    <InputBase
      className={classes.input}
      placeholder="Enter your PIN"
      onChange={handleChange}
    />
    <Divider className={classes.divider} orientation="vertical" />
    <IconButton color="primary" className={`${classes.iconButton} btn-background`} aria-label="enter">
      <ArrowForwardIcon className={classes.helperColor}/>
    </IconButton>
  </Paper>
    <FormHelperText id="my-helper-text" className={classes.margin}>Hint*: The Pin is 0000</FormHelperText>
  </>
    // <>
    //   <FormControl className={classes.margin}>
    //     <BootstrapInput
    //       name="pin"
    //       autoFocus
    //       id="bootstrap-input"
    //       color="secondary"
    //       onChange={handleChange}
    //       placeholder="Password"
    //     />
    //     <Divider className={classes.divider} orientation="vertical" />
    //     <IconButton><ArrowForwardIcon /></IconButton>
    //   <FormHelperText id="my-helper-text" className={classes.helperColor}>Hint*: The Pin is 0000</FormHelperText>
    //   </FormControl>
    // </>
  );
};

export default PinForm;
