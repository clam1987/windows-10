import React from "react";
import { makeStyles, fade } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import CssBaseline from "@material-ui/core/CssBaseline";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import InputBase from "@material-ui/core/InputBase";
import Button from "@material-ui/core/Button"
import Paper from "@material-ui/core/Paper";
import Fab from "@material-ui/core/Fab";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import ListItemText from "@material-ui/core/ListItemText";
import ListSubheader from "@material-ui/core/ListSubheader";
import Avatar from "@material-ui/core/Avatar";
import MenuIcon from "@material-ui/icons/Menu";
import AddIcon from "@material-ui/icons/Add";
import SearchIcon from "@material-ui/icons/Search";
import RadioButtonUncheckedSharpIcon from "@material-ui/icons/RadioButtonUncheckedSharp";
import MoreIcon from "@material-ui/icons/MoreVert";
import { mdiCommentOutline } from "@mdi/js";
import Icon from "@mdi/react";
import { mdiCommentText } from "@mdi/js";
import TaskbarTime from "../TaskbarTime/TaskbarTime";
import TaskbarIcons from "../TaskbarIcons/TaskbarIcons";

const useStyles = makeStyles((theme) => ({
  text: {
    padding: theme.spacing(2, 2, 0),
  },
  paper: {
    paddingBottom: 50,
  },
  list: {
    marginBottom: theme.spacing(2),
  },
  subheader: {
    backgroundColor: theme.palette.background.paper,
  },
  appBar: {
    top: "auto",
    bottom: 0,
    backgroundColor: "rgba(0, 0, 0, .83)",
  },
  grow: {
    flexGrow: 1,
  },
  toolbar: {
    minHeight: "48px",
    marginLeft: "-.675em",
  },
  windowsIcon: {
    fontSize: "1.175rem",
  },
  search: {
    position: "relative",
    backgroundColor: fade(theme.palette.common.white, 1),
    "&:hover": {
      backgroundColor: fade(theme.palette.common.white, 1),
    },
    marginRight: theme.spacing(2),
    marginLeft: "5px !important",
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(3),
      width: "auto",
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    transform: "scaleX(-1)",
    color: "black",
  },
  inputRoot: {
    color: "inherit",
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create("width"),
    width: "100%",
    height: "2rem",
    color: "black",
    [theme.breakpoints.up("md")]: {
      width: "32ch",
    },
  },
  circle: {
    fontSize: "1em",
    borderRadius: "100%",
    boxShadow: "0px 0px 1px 1px #ccc;",
    color: "#ffffff",
  },
  iconRoot: {
    width: ".75em",
    height: ".75em",
  },
  notification: {
    marginLeft: "auto"
  }
}));

export default function BottomAppBar() {
  const classes = useStyles();

  return (
    <>
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar className={classes.toolbar}>
          <IconButton edge="start" color="inherit" aria-label="open drawer">
            <i className={`fab fa-windows ${classes.windowsIcon}`}></i>
          </IconButton>
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Type here to search"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ "aria-label": "search" }}
            />
          </div>
          <IconButton edge="start" color="inherit">
            <RadioButtonUncheckedSharpIcon
              className={classes.circle}
              classes={{ root: classes.iconRoot }}
            />
          </IconButton>
          <TaskbarIcons />
          <TaskbarTime />
          <IconButton edge="end" color="inherit" className={classes.notification}> 
              <Icon path={mdiCommentOutline} size="1.425rem" />
          </IconButton>
        </Toolbar>
      </AppBar>
    </>
  );
}
