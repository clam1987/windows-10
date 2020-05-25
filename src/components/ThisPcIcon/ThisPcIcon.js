import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from "@material-ui/core/Button"


const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  PC: {
      width: "60px",
      height: "auto"
  },
  PCButton: {
    float: "left"
  },
  pcName: {
    margin: 0
  },
}));

const ThisPcIcon = () => {
  const classes = useStyles();
  
  return (
      <Button className={classes.PCButton}>
      <div className="" id="icon-computer">
          <img src={"http://res.cloudinary.com/dr5ei3rt1/image/upload/v1500505053/thumb_14339670430This_PC_fo5lbo.png"} alt="thumb_14339670430This_PC_fo5lbo" className={classes.PC}/>
          <p className={classes.pcName}>Wilson's PC</p>
      </div>
      </Button>
      );
    };
    
    export default ThisPcIcon;