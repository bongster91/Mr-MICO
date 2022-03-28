import React from 'react';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import { addCommas } from '../../Helper/AddCommasToNumbers';

import TableActions from './TableActions';

function TableRows(props) {
    let { columnNames, el, i, currentData, category, type } = props;

    return (
        <TableRow
            className='table__row'
            key={i} 
            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
        >
            {
                columnNames.map((key, index) => {
                    let key2 = key[0].toLowerCase() + key.slice(1);
                    currentData = el[key2];
                                                
                    if (key2 === 'amount') {
                        return (
                            <TableCell 
                                component='th' 
                                scope='row' 
                                align='left' 
                                key={index} 
                                className='table__row__content'
                            >
                                ${ addCommas(currentData) }
                            </TableCell>
                        );

                    } else {
                        return (
                            <TableCell 
                                component='th' 
                                scope='row' 
                                align='left' 
                                key={index} 
                                className='table-row'
                            >
                                { currentData }
                            </TableCell>
                        );
                    };
                })
            }

            <TableCell>
                <TableActions 
                    accountInfo={el} 
                    category={category}
                    type={type}
                />
            </TableCell>    
        </TableRow>
    );
};

export default TableRows;