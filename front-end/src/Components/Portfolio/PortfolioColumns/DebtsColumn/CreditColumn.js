import React, { useState } from 'react';

import CreateTable from '../../../../Util/Table/CreateTable';
import { addCommas } from '../../../../Helper/AddCommasToNumbers';

import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import ExpandMoreRoundedIcon from '@mui/icons-material/ExpandMoreRounded';
import ExpandLessRoundedIcon from '@mui/icons-material/ExpandLessRounded';
import Collapse from '@mui/material/Collapse';
import Fade from '@mui/material/Fade';

function CreditColumn(props) {
    const { credits, creditsTotal } = props;
    const [ expandContent, setExpandContent ] = useState(false);

    const handleExpandContent = (e) => {
      setExpandContent(!expandContent);
    };

    return (
        <Box>
            <Typography variant='h5'>
              Credits: ${ addCommas(creditsTotal) }

                <span onClick={handleExpandContent}>
                    {
                        expandContent ?
                          <ExpandLessRoundedIcon />
                          :
                          <ExpandMoreRoundedIcon />
                    }
                </span>

            </Typography>

            <Fade in={expandContent}>
                <Collapse      
                    collapsedSize='100%'
                    in={expandContent}
                    orientation='vertical'
                    timeout='auto'
                    unmountOnExit
                >
                    <CreateTable 
                        accounts={credits} 
                        category='debts'
                        type='credits'
                    />          
                </Collapse>
            </Fade>  

        </Box>
    );
};

export default CreditColumn;