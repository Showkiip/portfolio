import React from 'react'
import { Box, Button, Stack, Typography, Modal, TextField } from '@mui/material';
import { useDispatch } from 'react-redux';
import { Register } from '../../reduxToolkit/auth/AuthApi';
import { useNavigate } from 'react-router-dom';
const Signup = ({ register, setRegister }) => {

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

    const [username, setUserName] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [confirmPassword, setConfirmPassword] = React.useState('');

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleRegister = () => {
        const data = {
            name: username,
            email: email,
            password: password,
            confirmPassword: confirmPassword
        }

        console.log("register >>>>",data);
        dispatch(Register({ data, navigate }));
    }

    return (
        <Modal
            open={register}
            // onClose={setOpen(false)
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
                        onClick={() => { setRegister(false) }} >
                        X
                    </Box>
                    <Typography variant="h4">
                        Register
                    </Typography>
                    <TextField
                        label="UserName"
                        type="text"
                        placeholder='Enter UserName'
                        focused
                        value={username}
                        onChange={(e) => setUserName(e.target.value)}
                    />

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
                    <TextField

                        label="Confirm Password"
                        type="password"
                        placeholder='Enter Confirm Password'
                        focused
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                    />
                    <Button variant="contained" color="primary" onClick={() => { setRegister(false); handleRegister() }}>
                        Register
                    </Button>
                </Stack>
            </Box>

        </Modal >
    )
}

export default Signup
