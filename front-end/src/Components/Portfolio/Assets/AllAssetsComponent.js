import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { apiURL } from '../../../Util/apiURL';
import TextField from '@mui/material/TextField';

// Components
import BankAccountsComponent from './Bank_Accounts/BankAccountsComponent';
import InvestmentsComponent from './Investments/InvestmentsComponent';
import PropertiesComponent from './Properties/PropertiesComponent';

const API = apiURL();

function AllAssetsComponent() {
    const [ allAssets, setAllAssets ] = useState({});
    const [ assetBalances, setAssetBalances ] = useState({});
    const [ inputText, setInputText ] = useState('');

    useEffect(() => {
        axios
            .get(`${API}/users/1/portfolio/assets`)
            .then((response) => {
                setAllAssets(response.data.allAssets.assets)
                setAssetBalances(response.data.allAssets.assetBalances)
            })
            .catch(error => console.warn(error));
    }, []);

    const handleInputText = (e) => {
        const char = e.target.value.toLowerCase();
        setInputText(char);
    };

  return (
    <div className='allAssets-container'>
        <div className='D3-Assets-chart'>
            D3 All Assets chart
        </div>
        {console.log(allAssets)}
        <h2>Assets Balance: {assetBalances.assetsTotal}</h2>

        <div className='search-bar'>
            <TextField
                onChange={handleInputText}
                variant='outlined'
                fullWidth
                label='Search'
            />
        </div>
        {console.log(inputText)}
        <h3>Bank Acccounts: {assetBalances.bankAccountsTotal}</h3>
        <BankAccountsComponent />

        <h3>Investments: {assetBalances.investmentsTotal}</h3>
        <InvestmentsComponent />

        <h3>Properties: {assetBalances.propertiesTotal}</h3>
        <PropertiesComponent />

    </div>
  );
};

export default AllAssetsComponent;