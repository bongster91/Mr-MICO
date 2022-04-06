import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { apiURL } from '../../../Util/apiURL';

// Helper
import { addCommas } from '../../../Helper/AddCommasToNumbers';

// MUI
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

// Components
import BillsColumn from '../PortfolioColumns/DebtsColumn/BillsColumn';
import CreditColumn from '../PortfolioColumns/DebtsColumn/CreditColumn';
import ExpensesColumn from '../PortfolioColumns/DebtsColumn/ExpensesColumn';
import LoansColumn from '../PortfolioColumns/DebtsColumn/LoansColumn';

function AllDebtsComponent() {
    const [ allDebts, setAllDebts ] = useState({});
    const [ debtsBalances, setDebtsBalances ] = useState({});
    const [ input, setInput ] = useState('');
    
    const API = apiURL();

    useEffect(() => {
        axios.get(`${API}/users/1/portfolio/debts`)
            .then(async (response) => {
                if (response.data.success) {
                    await setAllDebts(response.data.allDebts.debts)
                    await setDebtsBalances(response.data.allDebts.debtsBalances)
                }
            })
            .catch(error => console.warn(error));
    }, [ API ]);

    const handleInputText = (e) => {
        const char = e.target.value.toLowerCase();
        setInput(char);
    };

    return (
        <Stack spacing={3}>
            
            <Box>
                D3 All Debts Component
            </Box>

            <Typography variant='h4'>Debts Balance: ${ addCommas(debtsBalances.debtTotal) }</Typography>
            
            <Box>
                <TextField
                    onChange={handleInputText}
                    variant='outlined'
                    fullWidth
                    label='Search'
                />
            </Box>

            <BillsColumn
                bills={allDebts.bills}
                billsTotal={debtsBalances.billsTotal}
            />

            <CreditColumn
                credits={allDebts.credits}
                creditsTotal={debtsBalances.creditsTotal}
            />

            <ExpensesColumn
                expenses={allDebts.expenses}
                expensesTotal={debtsBalances.expensesTotal}
            />

            <LoansColumn
                loans={allDebts.loans}
                loansTotal={debtsBalances.loansTotal}
            />

        </Stack>
    );
};

export default AllDebtsComponent;