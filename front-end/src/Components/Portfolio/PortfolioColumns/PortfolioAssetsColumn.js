import React from 'react';
import { Link } from 'react-router-dom';
import { addCommas } from '../../../Helper/AddCommasToNumbers';

function PortfolioAssetsColumn({ totalAssetAmount, user_id }) {

  return (
    <section className='portfolio-container__portfolio-columns__assets-column'>
          <Link className='assets-link' to={`/users/${user_id}/assets`}>
            <h2>Assets</h2>
          </Link>

          <h3>Assets Balance: ${ addCommas(totalAssetAmount.assetsTotal) }</h3>

        <ul className='portfolio-asset-amount-list'>
            {<li> Bank Accounts: ${ addCommas(totalAssetAmount.bankAccountsTotal) } </li>}
            {<li> Investments: ${ addCommas(totalAssetAmount.investmentsTotal) } </li>}
            {<li> Properties: ${ addCommas(totalAssetAmount.propertiesTotal) } </li>}
        </ul>
    </section>
  );
};

export default PortfolioAssetsColumn;