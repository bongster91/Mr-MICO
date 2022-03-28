import React from 'react';
import Link from '@mui/material/Link';
import { addCommas } from '../../../Helper/AddCommasToNumbers';

function PortfolioDebtsColumn({ totalDebtAmount, user_id }) {
  
  return (
    <section className='portfolio-container__portfolio-columns__debts-column'>
          <Link className='debts-link' href={`/users/${user_id}/debts`}>
            <h2>Debts</h2>
          </Link>

          <h3>Debts Balance: ${ addCommas(totalDebtAmount.debtTotal) }</h3>
        
        <ul className='portfolio-debt-amount-list'>
            {<li> Bills: ${ addCommas(totalDebtAmount.billsTotal) } </li>}
            {<li> Credits: ${ addCommas(totalDebtAmount.creditsTotal) } </li>}
            {<li> Debt: ${ addCommas(totalDebtAmount.debtTotal) } </li>}
            {<li> Loans: ${ addCommas(totalDebtAmount.loansTotal) } </li>}
        </ul>
    </section>
  );
};

export default PortfolioDebtsColumn;