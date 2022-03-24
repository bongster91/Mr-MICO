import React, { useState } from 'react';
import CreateTable from '../../../../Util/CreateTable';
import ExpandMoreRoundedIcon from '@mui/icons-material/ExpandMoreRounded';
import ExpandLessRoundedIcon from '@mui/icons-material/ExpandLessRounded';
import Collapse from '@mui/material/Collapse';

function BankAccountsComponent(props) {
    const { bankAccounts, bankAccountsTotal } = props;
    const [ expandContent, setExpandContent ] = useState(false);

    const handleExpandContent = (e) => {
        setExpandContent(!expandContent);
    };

    return (
        <section className='bank-accounts'>
            <h2 className='bank-accounts-header'>
                Bank Acccounts: {bankAccountsTotal}

                <span onClick={handleExpandContent}>
                    {
                        expandContent ?
                        <ExpandLessRoundedIcon />
                        :
                        <ExpandMoreRoundedIcon />
                    }
                </span>
            </h2>

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