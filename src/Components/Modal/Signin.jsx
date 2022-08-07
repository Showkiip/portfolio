import React from 'react';
import { Box, Button, Stack, Typography, Modal, TextField } from '@mui/material';
import { useDispatch } from 'react-redux';
import { Login } from '../../reduxToolkit/auth/AuthApi';
import { useNavigate } from 'react-router-dom';
// import CloseIcon from '@mui/icons-material/Close';

const Signin = ({ open, setOpen }) => {

  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogin = () => {
    const data = {
      email: email,
      password: password
    }

    console.log(data);
    dispatch(Login({ data, navigate }));
  }

  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    borderRadius: '10px',
    boxShadow: 24,
    p: 4,
  };

  return (
    <Modal
      open={open}
      // onClose={setOpen(false)}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"

    >
      <Box sx={style}>

        <Stack alignItems="center"
          justifyContent="center" gap="30px" position="relative">
          <Box
            sx={{
              color: "red",
              position: 'absolute',
              top: '-20px',
              right: '0',
              cursor: 'pointer',
              fontWeight: 'bold',
            }}
            onClick={() => { setOpen(false) }} >
            X
          </Box>
          <Typography variant="h4">
            Login
          </Typography>
          <TextField
            label="Email"
            type="email"
            placeholder='Enter Email'
            focused
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextField

            label="Password"
            type="password"
            placeholder='Enter Password'
            focused
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button variant="contained" color="primary" onClick={() => { setOpen(false); handleLogin() }}>
            Login
          </Button>
        </Stack>
      </Box>

    </Modal >
  )
}

export default Signin