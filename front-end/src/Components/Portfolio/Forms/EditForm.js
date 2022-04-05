import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

import { apiURL } from '../../../Util/apiURL';
import { findAccountType } from '../../../Helper/FilterAccounts';
import StatusAlert from '../../../Util/StatusAlert';

import InputLabel from '@mui/material/InputLabel';
import Input from '@mui/material/Input';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import NativeSelect from '@mui/material/NativeSelect';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

function EditForm() {
    const params = useParams();
    const API = apiURL();

    const [ account, setAccount ] = useState({});
    const [ accountType, setAccountType ] = useState({});
    const [ isSuccessful, setIsSuccessful ] = useState(false);
    const [ showAlert, setShowAlert ] = useState(false);
    const { user_id, category, category_type, id } = params;

    const handleChange = (e) => {
        setAccount({ ...account, [e.target.id]: e.target.value });
    };

    useEffect(() => {
        axios.get(`${API}/users/${user_id}/portfolio/${category}/${category_type}/${id}`)
            .then(
                async (response) => {
                    let data = findAccountType(response.data);
                    await setAccount(response.data[data.key]);
                    await setAccountType(data.accountTypes);
               
            })
            .catch(c => console.error(
                c, 
                `couldn't get account from ${category}/${category_type} with id: ${id} and user_id: ${user_id}`
            ));
    }, [API, user_id, category, category_type, id])

    const updateAccount = async (updatedAccount) => {
        await axios
            .put(`${API}/users/${user_id}/portfolio/${category}/${category_type}/${id}`, updatedAccount)
            .then(
                (response) => {
                    if (response.data.success) {
                        setIsSuccessful(true);
                        setShowAlert(true);
                        setAccount(response.data);

                    } else {
                        setIsSuccessful(false);
                        setShowAlert(true);
                    };
                }
            )
            .then(
                setTimeout(() => {
                    setShowAlert(false);
                    setIsSuccessful(false);
                }, 8000)
            )
            .catch(c => console.error(c, `Didn't update ${account} for ${category_type}, user: ${user_id}`))
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        await updateAccount(account);
    };

    return account && accountType.length && params ?
            <form onSubmit={handleSubmit}>
            <Typography variant='h4'>Edit Form</Typography>

            {
                showAlert ?
                    <StatusAlert isSuccessful={isSuccessful} />
                    : ''
            }
            
            <FormControl className='form-container__section' >
                <TextField
                    required
                    id="name"
                    label="Account Name"
                    value={account.name}
                    variant="standard"
                    className='form-container__section__input'
                    onChange={handleChange}
                    helperText='min. 5 alphanumeric characters'
                />
            </FormControl>
      
            <FormControl className='form-container__section' >
                <InputLabel htmlFor="amount" >Amount</InputLabel>
                <Input
                    required
                    id='amount'
                    label='Amount'
                    value={account.amount}
                    onChange={handleChange}
                    startAdornment={ <InputAdornment position="start"> $ </InputAdornment> }
                    className='form-container__section__input'
                    helpertext='$XX.XX numbers only'
                />
            </FormControl>
   
            <FormControl className='form-container__section' >
                <InputLabel variant='standard' htmlFor='type'>Type</InputLabel>
                <NativeSelect
                    required
                    label='Required'
                    value={account.type}
                    id='type'
                    className='form-container__section__input'
                    onChange={handleChange}
                >
                    {   accountType && accountType.length ?
                        accountType.map((type, i) => {
                            return (
                                <option value={type || ''} key={i}>{type}</option>
                            );
                        })
                        : ''
                    }
                </NativeSelect>
            </FormControl>
            
            <Button type='submit' >Submit</Button>
            </form>
    
            : <div>Loading...</div>
};

export default EditForm;