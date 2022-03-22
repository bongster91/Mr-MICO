import React from 'react'

function PortfolioDebtsColumn({ allDebtsAmount }) {
  return (
    <div>
        <ul className='portfolio-debt-amount-list'>
            {<li> Bills: {allDebtsAmount.billsTotal} </li>}
            {<li> Credits: {allDebtsAmount.creditsTotal} </li>}
            {<li> Debt: {allDebtsAmount.debtTotal} </li>}
            {<li> Loans: {allDebtsAmount.loansTotal} </li>}
        </ul>
    </div>
  );
};

export default PortfolioDebtsColumn;