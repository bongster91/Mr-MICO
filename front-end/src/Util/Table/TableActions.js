import React from 'react';
import DeleteAccount from './DeleteAccount';
import { useNavigate } from 'react-router-dom';

import IconButton from '@mui/material/IconButton';
import Box from '@mui/material/Box';
import EditIcon from '@mui/icons-material/Edit';

function TableActions(props) {
    const { accountInfo, category, type } = props;

    const navigate = useNavigate();

    const handleRedirect = () => {
        navigate(`/users/${accountInfo.user_id}/portfolio/${category}/${type}/${accountInfo.id}/edit`)
    };

    return (
        <Box>
           
            <DeleteAccount account={props} />

            <IconButton size='small' color='inherit' aria-label='edit' onClick={ handleRedirect }>
                <EditIcon />
            </IconButton>
            
        </Box>
    );
};

export default TableActions;