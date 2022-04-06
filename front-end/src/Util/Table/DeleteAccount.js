import React, { useState } from 'react';
import axios from 'axios';

import { apiURL } from '../../Util/apiURL';

import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';
import DeleteModal from './DeleteModal';

function DeleteAccount({ account }) {
    const [ openModal, setOpenModal ] = useState(false);
    const [ isSuccessful, setIsSuccessful ] = useState(false);

    let { user_id, id } = account.accountInfo;
    let { category, type } = account;

    const API = apiURL();

    const deleteAccount = async () => {
        await axios
            .delete(`${API}/users/${user_id}/portfolio/${category}/${type}/${id}`)
            .then((response) => {
                if (response.data.success) {
                    setIsSuccessful(true);
                    
                } else {
                    setIsSuccessful(false);
                    setOpenModal(true);
                };
            })
            .then(
                setTimeout(() => {
                    setOpenModal(false);
                    setIsSuccessful(false);
                }, 5000)
            )
            .catch((c) => console.error(c, `couldn't delete ${account.accountInfo} from ${category}/${type} for user: ${user_id}`));

    };

    const handleClick = async (event) => {
        setOpenModal(!openModal);
    };

    return (
        <IconButton size='small' color='inherit' aria-label='delete' onClick={handleClick} >
            {
                openModal ?
                    <DeleteModal 
                        openModal={openModal} 
                        deleteAccount={deleteAccount} 
                        account={account.accountInfo}
                        isSuccessful={isSuccessful}
                    />
                    : ''
            }
            <DeleteIcon />
        </IconButton>
    );
};

export default DeleteAccount;