import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { apiURL } from '../../Util/apiURL';

import PortfolioAssetsColumn from './PortfolioAssetsColumn';
import PortfolioDebtsColumn from './PortfolioDebtsColumn';

const API = apiURL();

function PortfolioComponent() {
  const [ portfolio, setPortfolio ] = useState({});
  const [ allAssets, setAllAssets ] = useState({});
  const [ allDebts, setAllDebts ] = useState({});
  const [ totalAssetAmount, setTotalAssetAmount ] = useState({});
  const [ totalDebtAmount, setTotalDebtAmount ] = useState({});

  useEffect(() => {
    axios
      .get(`${API}/users/1/portfolio`)
      .then(
        (response) => {
          setPortfolio(response.data.portfolio)
          setAllAssets(response.data.portfolio.allAssets)
          setAllDebts(response.data.portfolio.allDebts)
          setTotalAssetAmount(response.data.portfolio.totalAssetAmount)
          setTotalDebtAmount(response.data.portfolio.totalDebtAmount)
        },
        (error) => console.log('get', error)
      )
      .catch(
        (c) => console.warn('catch', c)
      );
  }, []);

  return (
    <div className='portfolio-container'>
      {console.log(portfolio)}
      <div className='portfolio-balance'>
        <h3> Total Portfolio Balance: 
          {totalAssetAmount.assetsTotal - totalDebtAmount.debtTotal}
        </h3>
      </div>

      <div className='D3-visuals'>D3 visualization</div>

      <div className='assets-column'>
        <h3>Assets Balance: {totalAssetAmount.assetsTotal}</h3>
        <PortfolioAssetsColumn allAssetsAmount={totalAssetAmount} />        
      </div>

      <div className='debts-column'>
        <h3>Debts Balance: {totalDebtAmount.debtTotal}</h3>
        <PortfolioDebtsColumn allDebtsAmount={totalDebtAmount} />
      </div>
    </div>
  );
};

export default PortfolioComponent;