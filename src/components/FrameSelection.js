import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Card from '@material-ui/core/Card';
import Button from '@material-ui/core/Button';
import Select from '@material-ui/core/Select';

const useStyles = makeStyles(theme => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: "45%",
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

const FrameSelection = (props) => {
  const classes = useStyles();
  const handleChange = event => {
    props.updateFrame(event.target.value);
  };

  const handleThrow = event => {
    props.setThrowNumber(event.target.value);
  }

  const handleFrame = event => {
    props.updateFrame(event.target.value);
  }

  const createMenus = (stop) => {
    let frames = [];
    for (let i = 1; i < stop; i++) {
      frames.push(<MenuItem value={i} key={i}>{i}</MenuItem>)
    }
    return frames;
  }

  return (
    <Card style={{ marginTop: "10px" }}>
      <FormControl className={classes.formControl}>
        <InputLabel id="fame-select">Frame Number</InputLabel>
        <Select
          labelId="frame-select"
          id="frame-select-id"
          value={props.frame}
          onChange={(event) => handleFrame(event)}
        >
          {createMenus(11)}
        </Select>
      </FormControl>

      <FormControl className={classes.formControl}>
        <InputLabel id="fame-select">Throw Number</InputLabel>
        <Select
          labelId="frame-select"
          id="frame-select-id"
          value={props.throwNumber}
          onChange={(event) => handleThrow(event)}
        >
          {createMenus(4)}
        </Select>
      </FormControl>
      <Button variant="contained" style={{ width: "50%" }} color="secondary" onClick={() => props.addThrowToFrame()}>Submit Throw</Button>
      <Button variant="contained" style={{ width: "50%" }} color="secondary" onClick={() => props.addFrameToGame()}>Submit Frame</Button>
    </Card>
  );
};

export default FrameSelection;