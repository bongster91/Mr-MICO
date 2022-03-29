import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { apiURL } from '../../../Util/apiURL';

// Helper
import { addCommas } from '../../../Helper/AddCommasToNumbers';

// MUI
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
        axios.get(`${API}/users/1/portfolio/assets`)
            .then(async (response) => {
                await setAllAssets(response.data.allAssets.assets)
                await setAssetBalances(response.data.allAssets.assetBalances)
            })
            .catch(error => console.warn(error));
    }, [ allAssets ]);

    const handleInputText = (e) => {
        const char = e.target.value.toLowerCase();
        setInputText(char);
    };

  return (
    <div className='allAssets-container'>
        <div className='D3-Assets-chart'>
            D3 All Assets chart
        </div>
        <h1>Assets Balance: ${addCommas(assetBalances.assetsTotal)}</h1>

        <div className='search-bar'>
            <TextField
                onChange={handleInputText}
                variant='outlined'
                fullWidth
                label='Search'
            />
        </div>
        
        <BankAccountsComponent 
            bankAccounts={allAssets.bankAccounts}
            bankAccountsTotal={assetBalances.bankAccountsTotal}
        />

        <InvestmentsComponent 
            investments={allAssets.investments}
            investmentsTotal={assetBalances.investmentsTotal}
        />

        <PropertiesComponent 
            properties={allAssets.properties}
            propertiesTotal={assetBalances.propertiesTotal}
        />

    </div>
  );
};

export default AllAssetsComponent;