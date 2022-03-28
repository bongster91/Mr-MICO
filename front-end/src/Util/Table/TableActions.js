import React from 'react';
import DeleteAccount from './DeleteAccount';

import IconButton from '@mui/material/IconButton';
import Box from '@mui/material/Box';
import EditIcon from '@mui/icons-material/Edit';

function TableActions(props) {

    return (
        <Box>
            <DeleteAccount account={props} />

            <IconButton size='small' color='inherit' aria-label='edit'>
                <EditIcon />
            </IconButton>
        </Box>
    );
};

export default TableActions;