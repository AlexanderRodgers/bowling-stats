import React from 'react';
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

  const createButtons = (start, stop) => {
    const buttons = [];
    for (let i = start; i < stop; i++) {
      buttons.push(
        <Button key={i} >
          <Paper onClick={(e) => handleChange(i, e)} className={classes.paper}>{i}</Paper>
        </Button>
      );
    }
    return buttons;
  }

  const handleChange = (pinNumber, e) => {
    props.togglePinState(pinNumber, e);
  }

  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Grid container style={styles.pins}>
        {createButtons(7, 11)}
      </Grid>
      <Grid container style={styles.pins}>
        {createButtons(4, 7)}
      </Grid>
      <Grid container style={styles.pins}>
        {createButtons(2, 4)}
      </Grid>
      <Grid container style={styles.pins}>
        <Button>
          <Paper className={classes.paper}>X</Paper>
        </Button>
        <Button>
          <Paper onClick={(e) => handleChange(1, e)} className={classes.paper}>
            1
          </Paper>
        </Button>
        <Button>
          <Paper className={classes.paper}>/</Paper>
        </Button>
      </Grid>
    </div >
  );
}

export default PinButton;