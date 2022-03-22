import React from 'react';

function PortfolioAssetsColumn({ allAssetsAmount }) {
    
  return (
    <div>
        <ul className='portfolio-asset-amount-list'>
            {<li> Bank Accounts: {allAssetsAmount.bankAccountsTotal} </li>}
            {<li> Investments: {allAssetsAmount.investmentsTotal} </li>}
            {<li> Properties: {allAssetsAmount.propertiesTotal} </li>}
        </ul>
    </div>
  );
};

export default PortfolioAssetsColumn;