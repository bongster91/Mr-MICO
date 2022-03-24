import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';
import { apiURL } from '../../Util/apiURL';

import PortfolioAssetsColumn from './PortfolioColumns/PortfolioAssetsColumn';
import PortfolioDebtsColumn from './PortfolioColumns/PortfolioDebtsColumn';
import './PortfolioComponent.scss';

import { addCommas } from '../../Helper/AddCommasToNumbers';

const API = apiURL();

function PortfolioComponent() {
  const [ portfolio, setPortfolio ] = useState({});
  const [ totalAssetAmount, setTotalAssetAmount ] = useState({});
  const [ totalDebtAmount, setTotalDebtAmount ] = useState({});
  const { user_id } = useParams();

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
  }, [ user_id ]);

  const portfolioBalance = ( totalAssetAmount.assetsTotal - totalDebtAmount.debtTotal).toFixed(2);
  
  return (
    <div className='portfolio-container'>
     
      <div className='portfolio-container__portfolio-balance'>
        <h1> 
          Total Portfolio Balance: ${ addCommas(portfolioBalance) }
        </h1>
      </div>

      <div className='portfolio-container__D3-visuals'>D3 visualization</div>

      <div className='portfolio-container__portfolio-columns'>
        <PortfolioAssetsColumn totalAssetAmount={totalAssetAmount} user_id={user_id} />        
        <PortfolioDebtsColumn totalDebtAmount={totalDebtAmount} user_id={user_id} />
      </div>
    </div>
  );
};

export default PortfolioComponent;