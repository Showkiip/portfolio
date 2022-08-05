import { Box, Input, Modal, Stack, TextField, Typography } from '@mui/material';
import React from 'react'

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 800,
    height: 600,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

const EditProfile = ({ open, setOpen }) => {

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);



    return (
        <div>
            <Modal
                open={open}
                // onClose={handleClose}
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
                        <Typography id="modal-modal-title" variant="h6" component="h2">
                            Edit Profile
                        </Typography>

                        <Stack
                            gap="30px"
                            direction="row"
                        >
                          <Box>
                            <Input
                                accept="image/*"
                                id="outlined-button-file"
                                
                                type="file"
                                name="file"
                                label="Upload Profile Picture"
                                variant="outlined"
                                color="secondary"
                                size="small"

                            />
                            
                           
                          </Box>
                        </Stack>
                        <Stack
                            gap="30px"
                            direction="row"
                        >

                            <Box sx={{ minWidth: 300 }}>
                                <TextField
                                    id="outlined-basic"

                                    label="First Name"
                                    variant="outlined"
                                    placeholder='Enter First Name'
                                />
                            </Box>
                            <Box sx={{ minWidth: 300 }}>
                                <TextField
                                    id="outlined-basic"
                                    label="Last Name"
                                    variant="outlined"
                                />
                            </Box>
                        </Stack>
                        <Stack
                            gap="30px"
                            direction="row"
                        >

                            <Box sx={{ minWidth: 300 }}>
                                <TextField
                                    id="outlined-basic"

                                    label="First Name"
                                    variant="outlined"
                                    placeholder='Enter First Name'
                                />
                            </Box>
                            <Box sx={{ minWidth: 300 }}>
                                <TextField
                                    id="outlined-basic"
                                    label="Last Name"
                                    variant="outlined"
                                />
                            </Box>
                        </Stack>
                    </Stack>
                </Box>
            </Modal>
        </div>

    )
}

export default EditProfile