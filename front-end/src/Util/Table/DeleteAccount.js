import React from 'react';
import { apiURL } from '../../Util/apiURL';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';

function DeleteAccount({ account }) {
    let { user_id, id } = account.accountInfo;
    let { category, type } = account;

    const API = apiURL();
    const navigate = useNavigate();

    const deleteAccount = async () => {
        await axios
            .delete(`${API}/users/${user_id}/portfolio/${category}/${type}/${id}`)
            .then(
                navigate(`/users/${user_id}/${category}`)
            )
            .catch((c) => console.error(c, `couldn't delete ${account.accountInfo} from ${category}/${type} for user: ${user_id}`));

    };

    const handleClick = async (event) => {
        try {
            await deleteAccount();

        } catch (error) {
            console.warn(error);
        };
    };


    return (
        <IconButton size='small' color='inherit' aria-label='delete' onClick={handleClick} >
            <DeleteIcon />
        </IconButton>
    );
};

export default DeleteAccount;