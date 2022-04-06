import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { apiURL } from '../../../Util/apiURL';

// Helper
import { addCommas } from '../../../Helper/AddCommasToNumbers';

// MUI
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

// Components
import BankAccountsColumn from '../PortfolioColumns/AssetsColumn/BankAccountsColumn';
import InvestmentsColumn from '../PortfolioColumns/AssetsColumn/InvestmentsColumn';
import PropertiesColumn from '../PortfolioColumns/AssetsColumn/PropertiesColumn';

function AllAssetsComponent() {
    const [ allAssets, setAllAssets ] = useState({});
    const [ assetBalances, setAssetBalances ] = useState({});
    const [ inputText, setInputText ] = useState('');
    
    const API = apiURL();

    useEffect(() => {
        axios.get(`${API}/users/1/portfolio/assets`)
            .then(async (response) => {
                await setAllAssets(response.data.allAssets.assets)
                await setAssetBalances(response.data.allAssets.assetBalances)
            })
            .catch(error => console.warn(error));
    }, [ API ]);

    const handleInputText = (e) => {
        const char = e.target.value.toLowerCase();
        setInputText(char);
    };

    return (
        <Stack spacing={3}>

            <Box>
                D3 All Assets chart
            </Box>

            <Typography variant='h4'>Assets Balance: ${ addCommas(assetBalances.assetsTotal) }</Typography>

            <Box>
                <TextField
                    onChange={handleInputText}
                    variant='outlined'
                    fullWidth
                    label='Search'
                />
            </Box>
        
            <BankAccountsColumn 
                bankAccounts={allAssets.bankAccounts}
                bankAccountsTotal={assetBalances.bankAccountsTotal}
            />

            <InvestmentsColumn 
                investments={allAssets.investments}
                investmentsTotal={assetBalances.investmentsTotal}
            />

            <PropertiesColumn 
                properties={allAssets.properties}
                propertiesTotal={assetBalances.propertiesTotal}
            />

        </Stack>
    );
};

export default AllAssetsComponent;