import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    width: "20vw",
    height: "20vw",
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

const styles = {
  pins: {
    padding: "20px 0px 0px 0px",
    justifyContent: "center"
  },
  pinSpacing: {
    margin: "auto"
  }

}

const PinButton = (props) => {

  const handleChange = (pinNumber, e) => {
    props.togglePinState(pinNumber, e);
  }

  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Grid container style={styles.pins}>
        <Button >
          <Paper onClick={(e) => handleChange(7, e)} className={classes.paper} >
            7
          </Paper>
        </Button>
        <Button >
          <Paper onClick={(e) => handleChange(8, e)} className={classes.paper}>
            8
          </Paper>
        </Button>
        <Button>
          <Paper onClick={(e) => handleChange(9, e)} className={classes.paper}>
            9
          </Paper>
        </Button>
        <Button >
          <Paper onClick={(e) => handleChange(10, e)} className={classes.paper}>
            10
          </Paper>
        </Button>
      </Grid>
      <Grid container style={styles.pins}>
        <Button>
          <Paper onClick={(e) => handleChange(4, e)} className={classes.paper}>
            4
          </Paper>
        </Button>
        <Button >
          <Paper onClick={(e) => handleChange(5, e)} className={classes.paper}>
            5
          </Paper>
        </Button>
        <Button >
          <Paper onClick={(e) => handleChange(6, e)} className={classes.paper}>
            6
          </Paper>
        </Button>
      </Grid>
      <Grid container style={styles.pins}>
        <Button >
          <Paper onClick={(e) => handleChange(2, e)} className={classes.paper}>
            2
          </Paper>
        </Button>
        <Button >
          <Paper onClick={(e) => handleChange(3, e)} className={classes.paper}>
            3
          </Paper>
        </Button>
      </Grid>
      <Grid container style={styles.pins}>
        <Button>
          <Paper onClick={(e) => handleChange(1, e)} className={classes.paper}>
            1
            </Paper>
        </Button>
      </Grid>
    </div >
  );
}

export default PinButton;