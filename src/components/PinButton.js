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
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

const styles = {
  pins: {
    borderRadius: "50%"
  },
  pinSpacing: {
    margin: "auto"
  }
}

const PinButton = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Grid container spacing={3} style={{ justifyContent: "center" }}>
        <Grid item xs={1} style={styles.pinSpacing}>
          <Button>
            <Paper style={styles.pins} className={classes.paper}>
              7
          </Paper>
          </Button>
        </Grid>
        <Grid item xs={1} style={styles.pinSpacing}>
          <Button>
            <Paper style={styles.pins} className={classes.paper}>
              8
          </Paper>
          </Button>
        </Grid>
        <Grid item xs={1} style={styles.pinSpacing}>
          <Button>
            <Paper style={styles.pins} className={classes.paper}>
              9
          </Paper>
          </Button>
        </Grid>
        <Grid item xs={1} style={styles.pinSpacing}>
          <Button>
            <Paper style={styles.pins} className={classes.paper}>
              10
          </Paper>
          </Button>
        </Grid>
      </Grid>
      <Grid container spacing={3} style={{ justifyContent: "center" }}>
        <Grid item xs={1} style={styles.pinSpacing}>
          <Button>
            <Paper style={styles.pins} className={classes.paper}>
              4
          </Paper>
          </Button>
        </Grid>
        <Grid item xs={1} style={styles.pinSpacing}>
          <Button>
            <Paper style={styles.pins} className={classes.paper}>
              5
          </Paper>
          </Button>
        </Grid>
        <Grid item xs={1} style={styles.pinSpacing}>
          <Button>
            <Paper style={styles.pins} className={classes.paper}>
              6
          </Paper>
          </Button>
        </Grid>
      </Grid>
      <Grid container spacing={3} style={{ justifyContent: "center" }}>
        <Grid item xs={1} style={styles.pinSpacing}>
          <Button>
            <Paper style={styles.pins} className={classes.paper}>
              2
          </Paper>
          </Button>
        </Grid>
        <Grid item xs={1} style={styles.pinSpacing}>
          <Button>
            <Paper style={styles.pins} className={classes.paper}>
              3
          </Paper>
          </Button>
        </Grid>
      </Grid>
      <Grid container spacing={3} style={{ justifyContent: "center" }}>
        <Grid item xs={1} style={styles.pinSpacing}>
          <Button>
            <Paper style={styles.pins} className={classes.paper}>
              1
            </Paper>
          </Button>
        </Grid>
      </Grid>
    </div>
  );
}

export default PinButton;