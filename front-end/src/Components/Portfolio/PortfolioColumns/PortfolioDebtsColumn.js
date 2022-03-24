import React from 'react';
import { Link } from 'react-router-dom';
import { addCommas } from '../../../Helper/AddCommasToNumbers';

function PortfolioDebtsColumn({ totalDebtAmount, user_id }) {
  
  return (
    <section className='portfolio-container__portfolio-columns__debts-column'>
          <Link className='debts-link' to={`/users/${user_id}/debts`}>
            <h2>Debts</h2>
          </Link>

          <h3>Debts Balance: ${ totalDebtAmount.debtTotal }</h3>
        
        <ul className='portfolio-debt-amount-list'>
            {<li> Bills: ${ totalDebtAmount.billsTotal } </li>}
            {<li> Credits: ${ totalDebtAmount.creditsTotal } </li>}
            {<li> Debt: ${ totalDebtAmount.debtTotal } </li>}
            {<li> Loans: ${ totalDebtAmount.loansTotal } </li>}
        </ul>
    </section>
  );
};

export default PortfolioDebtsColumn;