import React, { useState } from 'react';

import CreateTable from '../../../../Util/Table/CreateTable';
import { addCommas } from '../../../../Helper/AddCommasToNumbers';

import ExpandMoreRoundedIcon from '@mui/icons-material/ExpandMoreRounded';
import ExpandLessRoundedIcon from '@mui/icons-material/ExpandLessRounded';
import Collapse from '@mui/material/Collapse';
import Fade from '@mui/material/Fade';


function InvestmentsColumn(props) {
  const { investments, investmentsTotal } = props;
  const [ expandContent, setExpandContent ] = useState(false);

    const handleExpandContent = (e) => {
        setExpandContent(!expandContent);
    };

    return (
        <section className='investments'>
            <h2 className='investments-header'>
                Investments: ${ addCommas(investmentsTotal) }

                <span onClick={handleExpandContent}>
                    {
                        expandContent ?
                        <ExpandLessRoundedIcon />
                        :
                        <ExpandMoreRoundedIcon />
                    }
                </span>
            </h2>
            
            <Fade in={expandContent}>
                <Collapse      
                    collapsedSize='100%'
                    in={expandContent}
                    orientation='vertical'
                    timeout='auto'
                    unmountOnExit
                    >

                  <CreateTable 
                    accounts={investments} 
                    category='assets'
                    type='investments'
                />
                
                </Collapse>
            </Fade>
        </section>
    );
};

export default InvestmentsColumn;