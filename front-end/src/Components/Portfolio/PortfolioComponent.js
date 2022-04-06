import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

import PortfolioAssetsColumn from './PortfolioColumns/AssetsColumn/PortfolioAssetsColumn';
import PortfolioDebtsColumn from './PortfolioColumns/DebtsColumn/PortfolioDebtsColumn';
import './PortfolioComponent.scss';

import { apiURL } from '../../Util/apiURL';
import { addCommas } from '../../Helper/AddCommasToNumbers';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';

function PortfolioComponent() {
    const [ portfolio, setPortfolio ] = useState({});
    const [ totalAssetAmount, setTotalAssetAmount ] = useState({});
    const [ totalDebtAmount, setTotalDebtAmount ] = useState({});
    const { user_id } = useParams();
 
    const API = apiURL();

    useEffect(() => {
        axios
            .get(`${API}/users/${user_id}/portfolio`)
            .then(
                (response) => {
                    setPortfolio(response.data.portfolio)
                    setTotalAssetAmount(response.data.portfolio.totalAssetAmount)
                    setTotalDebtAmount(response.data.portfolio.totalDebtAmount)
                },
                (error) => console.log('get', error)
            )
            .catch(
                (c) => console.warn('catch', c)
            );
    }, [ API, user_id ]);

    const portfolioBalance = ( totalAssetAmount.assetsTotal - totalDebtAmount.debtTotal).toFixed(2);
  
    return (
        <Stack className='portfolio-container' spacing={3}>
     
            <Box className='portfolio-container__portfolio-balance'>
                <Typography variant='h4'> 
                    Total Portfolio Balance: ${ addCommas(portfolioBalance) }
                </Typography>
            </Box>

            <Box className='portfolio-container__D3-visuals'>
                D3 visualization
            </Box>

            <Box className='portfolio-container__portfolio-columns'>
                <PortfolioAssetsColumn totalAssetAmount={totalAssetAmount} user_id={user_id} />        
                <PortfolioDebtsColumn totalDebtAmount={totalDebtAmount} user_id={user_id} />
            </Box>
        </Stack>
    );
};

export default PortfolioComponent;