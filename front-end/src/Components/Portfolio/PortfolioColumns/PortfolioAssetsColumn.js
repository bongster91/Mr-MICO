import React from 'react';
import { Link } from 'react-router-dom';
import { addCommas } from '../../../Helper/AddCommasToNumbers';

function PortfolioAssetsColumn({ totalAssetAmount, user_id }) {
  console.log(totalAssetAmount);

  return (
    <section className='portfolio-container__portfolio-columns__assets-column'>
          <Link className='assets-link' to={`/users/${user_id}/assets`}>
            <h2>Assets</h2>
          </Link>

          <h3>Assets Balance: ${ totalAssetAmount.assetsTotal }</h3>

        <ul className='portfolio-asset-amount-list'>
            {<li> Bank Accounts: ${ totalAssetAmount.bankAccountsTotal } </li>}
            {<li> Investments: ${ totalAssetAmount.investmentsTotal } </li>}
            {<li> Properties: ${ totalAssetAmount.propertiesTotal } </li>}
        </ul>
    </section>
  );
};

export default PortfolioAssetsColumn;