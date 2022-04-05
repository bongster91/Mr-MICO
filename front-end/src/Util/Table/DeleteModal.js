import React, { useState } from 'react';

import StatusAlert from '../StatusAlert';
import { addCommas } from '../../Helper/AddCommasToNumbers';

import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

function DeleteModal({ openModal, deleteAccount, account, isSuccessful }) {
    const [ open, setOpen ] = useState(openModal);
    
    const handleClose = () => setOpen(false);

  return (
    <div>
        <Modal
            aria-labelledby="transition-modal-title"
            aria-describedby="transition-modal-description"
            open={open}
            onClose={handleClose}
            closeAfterTransition
            BackdropComponent={Backdrop}
            BackdropProps={{
                timeout: 500,
            }}
        >

        <Fade in={open}>
            <Box sx={style}>

                {
                    isSuccessful ?
                        <StatusAlert isSuccessful={isSuccessful} />
                        : ''
                }

                <Typography id="transition-modal-title" variant="h6" component="h2">
                    {`Are you sure you want to delete ${account.name} worth $${ addCommas(account.amount) }?`}
                </Typography>

                <Button onClick={deleteAccount}>Yes</Button>
                <Button onClick={handleClose}>No</Button>
            </Box>
        </Fade>
      </Modal>
    </div>
  )
};

export default DeleteModal;