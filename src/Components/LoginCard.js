import React from 'react';
import Paper from '@material-ui/core/Paper';
import { Box, TextField } from '@material-ui/core';
import { Button } from '@material-ui/core';
import { styled } from '@material-ui/core/styles';

const MyButton = styled(({ color, ...other }) => <Button {...other} />)({
  background: (props) => 'linear-gradient(225deg, #3356AE 30%, #21CBF3 90%)',
  border: 0,
  borderRadius: 3,
  boxShadow: (props) => '0 3px 5px 2px rgba(33, 203, 243, .3)',
  color: 'white',
  height: 48,
  padding: '0 30px',
  margin: 8,
});

function LoginCard() {
  return (
    <div>
      <Paper elevation={5}>
        <h3>
          <strong>Sign In</strong>
        </h3>
        <form>
          <Box display="flex" flexDirection="column" p={3}>
            <TextField
              id="outlined-textarea"
              label="Your Email"
              placeholder="task@domain.com"
              variant="outlined"
            />
            <TextField
              id="outlined-textarea"
              label="Password"
              type="password"
              placeholder="Password"
              variant="outlined"
            />
            <MyButton>SIGN IN</MyButton>
          </Box>
        </form>
      </Paper>
    </div>
  );
}

export default LoginCard;
