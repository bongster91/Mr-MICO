import React from 'react';
import { addCommas } from '../../../../Helper/AddCommasToNumbers';

import Link from '@mui/material/Link';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Typography from '@mui/material/Typography';

function PortfolioDebtsColumn({ totalDebtAmount, user_id }) {
  
    return (
        <Box className='portfolio-container__portfolio-columns__debts-column'>

            <Link className='debts-link' href={`/users/${user_id}/portfolio/debts`}>
                <Typography variant='h5'>Debts</Typography>
            </Link>

            <Typography variant='body1'>Debts Balance: ${ addCommas(totalDebtAmount.debtTotal) }</Typography>
        
            <List className='portfolio-debt-amount-list'>
                {<ListItem>
                    <Link href={`/users/${user_id}/portfolio/debts/bills`}>
                        <Typography variant='body1'>
                            Bills: ${ addCommas(totalDebtAmount.billsTotal) } 
                        </Typography>
                    </Link>
                </ListItem>}

                {<ListItem>
                    <Link href={`/users/${user_id}/portfolio/debts/credit`}>
                        <Typography variant='body1'>
                            Credits: ${ addCommas(totalDebtAmount.creditsTotal) } 
                        </Typography>
                    </Link>
                </ListItem>}

                {<ListItem>
                      < Link href={`/users/${user_id}/portfolio/debts/expenses`}>
                          <Typography variant='body1'>
                              Expenses: ${ addCommas(totalDebtAmount.debtTotal) } 
                          </Typography>
                    </Link>
                </ListItem>}

                {<ListItem>
                    <Link href={`/users/${user_id}/portfolio/debts/loans`}>
                        <Typography variant='body1'>
                            Loans: ${ addCommas(totalDebtAmount.loansTotal) } 
                        </Typography>
                    </Link>
                </ListItem>}
            </List>

        </Box>
    );
};

export default PortfolioDebtsColumn;