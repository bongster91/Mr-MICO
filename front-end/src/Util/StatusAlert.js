import React, { useState } from 'react';

import Box from '@mui/material/Box';
import Alert from '@mui/material/Alert';
import IconButton from '@mui/material/IconButton';
import Collapse from '@mui/material/Collapse';
import CloseIcon from '@mui/icons-material/Close';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import MoodBadIcon from '@mui/icons-material/MoodBad';

function StatusAlert({ isSuccessful }) {
    const [ open, setOpen ] = useState(true);

    return (
        <Box sx={{ width: '100%' }}>
            <Collapse in={open}>

                {
                    isSuccessful ?
                        <Alert
                            severity='success'
                            action={
                                <IconButton
                                    aria-label="close"
                                    color="inherit"
                                    size="small"
                                    onClick={() => {
                                        setOpen(false);
                                    }}
                                >
                                    <CloseIcon fontSize="inherit" />
                                </IconButton>
                            }
                            sx={{ mb: 2 }}
                        >
                            Success!!  <EmojiEmotionsIcon />
                        </Alert>
                        :
                        <Alert
                            severity='error'
                            sx={{ mb: 2 }}
                            action={
                                <IconButton
                                    aria-label='close'
                                    color='inherit'
                                    size='small'
                                    onClick={() => {
                                        setOpen(false);
                                    }}
                                >
                                    <CloseIcon fontSize='inherit' />
                                </IconButton>
                            }
                        >
                            Failed... <MoodBadIcon />
                        </Alert>
                }

            </Collapse>
        </Box>
    );
};

export default StatusAlert;