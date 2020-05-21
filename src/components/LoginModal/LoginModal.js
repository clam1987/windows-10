import React, { useState, forwardRef, useRef } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Typography from "@material-ui/core/Typography"
import Backdrop from '@material-ui/core/Backdrop';
import { useSpring, animated } from 'react-spring/web.cjs'; // web.cjs is required for IE 11 support
import PinForm from "../../components/PinForm/PinForm";
import MyAvatar from "../../components/MyAvatar/MyAvatar";
import Wilson from "../../assets/json/Wilson.json";
import DateTime from "../../components/DateTime/DateTime";
import "./LoginModal.css"

const useStyles = makeStyles((theme) => ({
    fullScreen: {
        height: "100vh",
        width: "100%",
        opacity: 0
    },
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
  name: {
    display: 'flex',
    direction: "column",
    alignItems: 'center',
    justifyContent: 'center',
    color: "white"
  },
  alignment: {
    color: "blue",
  }
}));

const Fade = forwardRef(function Fade(props, ref) {
  const { in: open, children, onEnter, onExited, ...other } = props;
  const style = useSpring({
    from: { opacity: 0, outline: 'none' },
    to: { opacity: open ? .8 : 0 },
    onStart: () => {
      if (open && onEnter) {
        onEnter();
      }
    },
    onRest: () => {
      if (!open && onExited) {
        onExited();
      }
    },
  });

  return (
    <animated.div ref={ref} style={style} {...other}>
      {children}
    </animated.div>
  );
});

Fade.propTypes = {
  children: PropTypes.element,
  in: PropTypes.bool.isRequired,
  onEnter: PropTypes.func,
  onExited: PropTypes.func,
};

const SpringModal = () => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false)

  const handleOpen = () => {
    setOpen(true);
};

const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <button type="button" onClick={handleOpen} className={classes.fullScreen}>
        react-spring
      </button>
      {open === true? null : <DateTime />}
      <Modal
        aria-labelledby="spring-modal-title"
        aria-describedby="spring-modal-description"
        className={`${classes.modal} modal-outline`}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
            timeout: 500,
        }}
      >
        <Fade in={open}>
            <MyAvatar profileName={Wilson.PicFileName} src={Wilson.AvatarPic} />
            <Typography variant="h3" className={`${classes.name} name-container`}>Wilson Lam</Typography>
            {<PinForm />}
        </Fade>
      </Modal>
    </div>
  );
};

export default SpringModal;