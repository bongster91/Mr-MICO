import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { apiURL } from '../../../Util/apiURL';
import EditForm from './EditForm';
import axios from 'axios';
import { findAccountType } from '../../../Helper/FilterAccounts';

function DataForEditForm() {
    const params = useParams();
    const API = apiURL();

    const [ account, setAccount ] = useState({});
    const [ accountType, setAccountType ] = useState({});
    const { user_id, category, category_type, id } = params;

    const handleChange = (e) => {
        setAccount({ ...account, [e.target.id]: [e.target.value] });
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
    }, [])

    return account && accountType.length ?
            <EditForm 
                account={account}
                accountType={accountType}
                params={params}
                handleChange={handleChange}
            />
            : <div>Loading...</div>
    
};

export default DataForEditForm;