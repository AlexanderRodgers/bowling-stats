import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import NavBar from './components/NavBar';
import Layout from './components/Layout';
import Pinbutton from './components/PinButton';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Card from '@material-ui/core/Card';
import Select from '@material-ui/core/Select';
import './App.css';
import { Button } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: "45%",
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

function App() {
  const classes = useStyles();
  const [age, setAge] = React.useState('');
  const handleChange = event => {
    setAge(event.target.value);
  };

  return (
    <Layout id="hello">
      <NavBar></NavBar>
      <Pinbutton></Pinbutton>
      <Card style={{ marginTop: "10px" }}>
        <FormControl className={classes.formControl}>
          <InputLabel id="fame-select">Frame Number</InputLabel>
          <Select
            labelId="frame-select"
            id="frame-select-id"
            value={age}
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
            value={age}
            onChange={handleChange}
          >
            <MenuItem value={1}>1</MenuItem>
            <MenuItem value={2}>2</MenuItem>
            <MenuItem value={3}>3</MenuItem>
          </Select>
        </FormControl>
      </Card>
      <Button variant="contained" color="primary" style={{ marginTop: "10px", width: "100%" }}>Submit</Button>
    </Layout>
  );
}

export default App;
