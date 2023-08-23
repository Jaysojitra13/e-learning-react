import * as React from 'react';
import './Login.css';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import AccountCircle from '@mui/icons-material/AccountCircle';
import PasswordIcon from '@mui/icons-material/Password';
import Grid from '@mui/material/Grid';

const Login = (props) => {
  return (
    <Card
      sx={{
        minWidth: 100,
        width: '40%',
        margin: 'auto',
        padding: '15px',
        marginTop: '10%',
        background: '#efefef',
      }}
    >
      <CardContent>
        <Grid container spacing={15} justifyContent="center">
          <Grid item>
            <Box>
              <Box sx={{ display: 'flex', alignItems: 'flex-end', gap: 2 }}>
                <AccountCircle
                  sx={{ color: 'action.active', mr: 1, my: 0.5 }}
                />
                <TextField id="email-basic" label="Email" variant="standard" />
              </Box>
              <br />
              <Box sx={{ display: 'flex', alignItems: 'flex-end', gap: 2 }}>
                <PasswordIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
                <TextField
                  id="password-basic"
                  label="Password"
                  variant="standard"
                  type="password"
                />
              </Box>

              <br />
              <Button variant="contained" size="large">
                Login
              </Button>
            </Box>
          </Grid>
          <Grid item sx={{ display: 'flex', alignItems: 'center' }}>
            <img
              src="/common/login-logo.webp"
              width={250}
              height={200}
              alt="Home logo image"
            />
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default Login;
