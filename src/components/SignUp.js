import React from 'react';
import Card from '@material-ui/core/Card';
import { useHistory, Router } from "react-router-dom";
import Button from '@material-ui/core/Button';
import styled from 'styled-components';
import TextField from '@material-ui/core/TextField';
import { CardContent } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';

import { useMutation } from '@apollo/react-hooks';
import { ADD_USER } from '../api/queries';

const LoginCard = styled(Card)`
margin: auto;
`;

const SignUpTextField = styled(TextField)`
width: 100%
`;

const formSpacing = {
  margin: '0 10px 0 10px'
};

const SignUp = () => {
  const [first, setFirst] = React.useState('');
  const [last, setLast] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  // eslint-disable-next-line
  const [disabled, setDisabled] = React.useState(true);
  const [addUser, { data }] = useMutation(ADD_USER);

  const history = useHistory();

  const setProperty = (prop, val) => {
    val = val.target.value
    switch (prop) {
      case 'first':
        setFirst(val);
        break;
      case 'last':
        setLast(val);
        break;
      case 'email':
        setEmail(val);
        break;
      case 'password':
        setPassword(val);
        break;
      default:
        break;
    }
    updateDisabledState();
  }

  const saveInfo = (info) => {
    localStorage.setItem('user', JSON.stringify(info));
  }

  const updateDisabledState = () => {
    if (!!first && !!last && !!email && !!password) {
      setDisabled(false);
      return;
    }
    setDisabled(true);
  }

  const submit = () => {
    addUser({
      variables: {
        userInput: {
          firstName: first,
          lastName: last,
          email: email,
          password: password
        }
      }
    }).then(res => {
      console.log(res);
      saveInfo(res.data.createUser);
      history.push('/');
    })
      .catch(e => console.log(e));
  }

  return (
    <LoginCard>
      <form>
        <CardContent>
          <Typography styles={{ fontSize: 14, textAlign: 'center' }} variant="h5">Sign Up</Typography>
        </CardContent>
        <div style={formSpacing}>
          <SignUpTextField
            id="first-name"
            label="First Name"
            margin="normal"
            value={first}
            onChange={(text) => setProperty('first', text)}
            variant="outlined"
            required
          />
        </div>
        <div style={formSpacing}>
          <SignUpTextField
            id="last-name"
            label="Last Name"
            margin="normal"
            value={last}
            onChange={(text) => setProperty('last', text)}
            variant="outlined"
            required
          />
        </div>
        <div style={formSpacing}>
          <SignUpTextField
            id="email"
            label="Email"
            value={email}
            onChange={(text) => setProperty('email', text)}
            margin="normal"
            variant="outlined"
            required
          />
        </div>
        <div style={formSpacing}>
          <SignUpTextField
            id="password-input"
            label="Password"
            value={password}
            onChange={(text) => setProperty('password', text)}
            type="password"
            autoComplete="current-password"
            margin="normal"
            variant="outlined"
            required
          />
        </div>
        <Button variant="outlined" color="primary" onClick={() => submit()}
          style={{ margin: "0 10px 10px 10px", float: 'right' }} disabled={disabled}>Submit</Button>
        <Button variant="outlined" color="primary" onClick={() => history.push('/')}
          style={{ margin: "0 10px 10px 10px", float: 'right' }}>Back</Button>
      </form>
    </LoginCard>
  )
};

export default SignUp;