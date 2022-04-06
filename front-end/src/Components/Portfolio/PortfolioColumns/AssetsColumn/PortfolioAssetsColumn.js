import React from 'react';
import { addCommas } from '../../../../Helper/AddCommasToNumbers';

import Link from '@mui/material/Link';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Typography from '@mui/material/Typography';

function PortfolioAssetsColumn({ totalAssetAmount, user_id }) {

  return (
    <Box className='portfolio-container__portfolio-columns__assets-column'>

        <Link className='assets-link' href={`/users/${user_id}/portfolio/assets`}>
          <Typography variant='h5'>Assets</Typography>
        </Link>

        <Typography variant='body1'>Assets Balance: ${ addCommas(totalAssetAmount.assetsTotal) }</Typography>

        <List className='portfolio-asset-amount-list'>
            {<ListItem>
                <Link href={`/users/${user_id}/portfolio/assets/bank_accounts`}>
                    <Typography variant='body1'>
                        Bank Accounts: ${ addCommas(totalAssetAmount.bankAccountsTotal) } 
                    </Typography>
               </Link>
            </ListItem>}

            {<ListItem>
                <Link href={`/users/${user_id}/portfolio/assets/investments`}>
                    <Typography variant='body1'>
                        Investments: ${ addCommas(totalAssetAmount.investmentsTotal) } 
                    </Typography>
               </Link>
            </ListItem>}

            {<ListItem>
                <Link href={`/users/${user_id}/portfolio/assets/properties`}>
                    <Typography variant='body1'>
                        Properties: ${ addCommas(totalAssetAmount.propertiesTotal) } 
                    </Typography>
               </Link>
            </ListItem>}
        </List>

    </Box>
  );
};

export default PortfolioAssetsColumn;