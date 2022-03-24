import React, { useState } from 'react';
import CreateTable from '../../../../Util/CreateTable';
import ExpandMoreRoundedIcon from '@mui/icons-material/ExpandMoreRounded';
import ExpandLessRoundedIcon from '@mui/icons-material/ExpandLessRounded';
import Collapse from '@mui/material/Collapse';

function BankAccountsComponent(props) {
    const { bankAccounts, handleExpandContent, expandContent, bankAccountsTotal } = props;
    const [ showBanks, setShowBanks ] = useState(false);
    
    return (
        <section className='bank-accounts'>
            <h3 className='bank-accounts-header'>
                Bank Acccounts: {bankAccountsTotal}

                <span onClick={handleExpandContent}>
                    {
                        expandContent ?
                        <ExpandLessRoundedIcon />
                        :
                        <ExpandMoreRoundedIcon />
                    }
                </span>
            </h3>

            <Collapse      
                collapsedSize='100%'
                in={expandContent}
                orientation='vertical'
                timeout='auto'
                unmountOnExit
            >
                <CreateTable props={bankAccounts} />
            </Collapse>
        </section>
    );
};

export default BankAccountsComponent;