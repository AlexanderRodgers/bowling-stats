import React from 'react';
import { useHistory } from "react-router-dom";
import Card from '@material-ui/core/Card';
import styled from 'styled-components';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { CardContent } from '@material-ui/core';

const LoginCard = styled(Card)`
margin: auto;
`;

const LoginTextField = styled(TextField)`
width: 100%
`;

const Login = () => {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [disabled, setDisabled] = React.useState(true);

  const history = useHistory();

  const updateDisabledState = () => {
    if (!!email && !!password) {
      setDisabled(false);
      return;
    }
    setDisabled(true);
  }

  return (
    <LoginCard>
      <CardContent>
        <Typography styles={{ fontSize: 14, textAlign: 'center' }} variant="h5">Log In</Typography>
      </CardContent>
      <div style={{ margin: '0 10px 0 10px' }}>
        <LoginTextField
          id="username"
          label="Username"
          value={email}
          onChange={(text) => setEmail(text)}
          margin="normal"
          variant="outlined"
          required
        />
      </div>
      <div style={{ margin: '0 10px 0 10px' }}>
        <LoginTextField
          id="password"
          label="Password"
          value={password}
          onChange={(text) => setPassword(text)}
          type="password"
          autoComplete="current-password"
          margin="normal"
          variant="outlined"
          required
        />
      </div>
      <div>
        <Button variant="contained" color="primary"
          style={{ margin: "0 10px 0 10px", float: 'right' }}
          disabled={() => updateDisabledState()}
          onClick={() => this.runQuery()}>
          Submit
            </Button>
        <Button variant="outlined" color="primary"
          style={{ margin: "0 10px 10px 10px", float: 'right' }} onClick={() => history.push('/')}>Back</Button>
      </div>
    </LoginCard>
  );
};

export default Login;