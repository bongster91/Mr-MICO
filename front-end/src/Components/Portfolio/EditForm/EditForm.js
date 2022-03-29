import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './EditForm.scss';
import { apiURL } from '../../../Util/apiURL';

import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import Input from '@mui/material/Input';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import NativeSelect from '@mui/material/NativeSelect';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

function EditForm(props) {
    let { account, accountType, params, handleChange } = props;
    const { category, category_type, user_id, id } = params;
  
    // console.log(props)
    const navigate = useNavigate();
    const API = apiURL();

    const updateAccount = async ( user_id, id, updatedAccount ) => {
        await axios.put(`${API}/users/${user_id}/portfolio/${category}/${category_type}/${id}`, updatedAccount)
            .then(
                console.log('Updated successfully')
            )
            .catch(c => console.error(c, `Didn't update ${account} for ${category_type}, user: ${user_id}`))
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(user_id, id, account)
        await updateAccount(user_id, id, account);
        navigate(`${API}/users/${user_id}/portfolio`);
    };

    return (
        <Box className='form-container' component='form' >
            <Typography variant='h4'>Edit Form</Typography>

            <FormControl className='form-container__section' >
                <TextField
                    required
                    id="name"
                    label="Required"
                    value={account.name}
                    variant="standard"
                    className='form-container__section__input'
                    onChange={handleChange}
                />
            </FormControl>
      
            <FormControl className='form-container__section' >
                <InputLabel htmlFor="amount" >Amount</InputLabel>
                <Input
                    required
                    id='amount'
                    label='Required'
                    value={account.amount}
                    onChange={handleChange}
                    startAdornment={ <InputAdornment position="start"> $ </InputAdornment> }
                    className='form-container__section__input'
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
                    {
                        
                        accountType.map((type, i) => {
                            return (
                                <option value={type || ''} key={i}>{type}</option>
                            )
                        })
                    }
                </NativeSelect>
            </FormControl>
            
            <Button type='submit' onSubmit={handleSubmit} >Submit</Button>
        </Box>
    );
};

export default EditForm;