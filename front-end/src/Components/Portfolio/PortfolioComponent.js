import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { apiURL } from '../../Util/apiURL';

import PortfolioAssetsColumn from './PortfolioAssetsColumn';
import PortfolioDebtsColumn from './PortfolioDebtsColumn';
import './PortfolioComponent.scss';

const API = apiURL();

function PortfolioComponent() {
  const [ portfolio, setPortfolio ] = useState({});
  const [ totalAssetAmount, setTotalAssetAmount ] = useState({});
  const [ totalDebtAmount, setTotalDebtAmount ] = useState({});

  useEffect(() => {
    axios
      .get(`${API}/users/1/portfolio`)
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
  }, []);

  return (
    <div className='portfolio-container'>
      {console.log(portfolio)}
      <div className='portfolio-container__portfolio-balance'>
        <h3> Total Portfolio Balance: {totalAssetAmount.assetsTotal - totalDebtAmount.debtTotal}
        </h3>
      </div>

      <div className='portfolio-container__D3-visuals'>D3 visualization</div>

      <div className='portfolio-container__portfolio-columns'>

        <div className='portfolio-container__portfolio-columns__assets-column'>
          <Link className='assets-link' to={`/users/1/assets`}>
            <h2>Assets</h2>
          </Link>

          <h3>Assets Balance: {totalAssetAmount.assetsTotal}</h3>
          <PortfolioAssetsColumn allAssetsAmount={totalAssetAmount} />        
        </div>

        <div className='portfolio-container__portfolio-columns__debts-column'>
          <Link className='debts-link' to={`/users/1/debts`}>
            <h2>Debts</h2>
          </Link>

          <h3>Debts Balance: {totalDebtAmount.debtTotal}</h3>
          <PortfolioDebtsColumn allDebtsAmount={totalDebtAmount} />
        </div>

      </div>
    </div>
  );
};

export default PortfolioComponent;