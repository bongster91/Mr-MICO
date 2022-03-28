import React from 'react';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import Typography from '@mui/material/Typography';

function TableColumns({ columnNames }) {
    return (
        <TableRow className='table__column'>
            {
                columnNames.map((category, i) => {
                    return (
                        <TableCell 
                            key={i} 
                            align='left' 
                            className='table__column__header'
                        >
                            
                            <Typography variant='h6'>
                                { category } 
                            </Typography>
                        
                        </TableCell>
                    );
                })
            }
        </TableRow>
    );
};

export default TableColumns;