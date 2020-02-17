import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Card from '@material-ui/core/Card';
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
  let frame = 1;
  let bowl = 1;
  const classes = useStyles();
  const handleChange = event => {
    props.updateFrame(event.target.value);
  };
  return (
    <Card style={{ marginTop: "10px" }}>
      <FormControl className={classes.formControl}>
        <InputLabel id="fame-select">Frame Number</InputLabel>
        <Select
          labelId="frame-select"
          id="frame-select-id"
          value={frame}
          onChange={handleChange}
        >
          <MenuItem value={1}>1</MenuItem>
          <MenuItem value={2}>2</MenuItem>
          <MenuItem value={3}>3</MenuItem>
          <MenuItem value={4}>4</MenuItem>
          <MenuItem value={5}>5</MenuItem>
          <MenuItem value={6}>6</MenuItem>
          <MenuItem value={7}>7</MenuItem>
          <MenuItem value={8}>8</MenuItem>
          <MenuItem value={9}>9</MenuItem>
          <MenuItem value={10}>10</MenuItem>
        </Select>
      </FormControl>

      <FormControl className={classes.formControl}>
        <InputLabel id="fame-select">Throw Number</InputLabel>
        <Select
          labelId="frame-select"
          id="frame-select-id"
          value={bowl}
          onChange={handleChange}
        >
          <MenuItem value={1}>1</MenuItem>
          <MenuItem value={2}>2</MenuItem>
          <MenuItem value={3}>3</MenuItem>
        </Select>
      </FormControl>
    </Card>
  );
};

export default FrameSelection;