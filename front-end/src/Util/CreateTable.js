import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import MoreVertRoundedIcon from '@mui/icons-material/MoreVertRounded';
import Typography from '@mui/material/Typography';

import { addCommas } from '../Helper/AddCommasToNumbers';

const CreateTable = ({ props }) => {
    const columnNames = [];

    for (let key in props[0]) {
        if (key !== 'id' && key !== 'user_id') {
            columnNames.push(key[0].toUpperCase() + key.slice(1));
        };
    };

    return (
        <TableContainer className='table'>
            <Table label='table'>
                <TableHead>
                    <TableRow className='table__column'>
                        {
                            columnNames.map((category, i) => {
                                return (
                                    <TableCell key={i} align='left' className='table__column__header'>
                                        <Typography variant='h6'>
                                            { category } 
                                        </Typography>
                                    </TableCell>
                                );
                            })
                        }
                    </TableRow>
                </TableHead>

                <TableBody>
                        {
                            props.map((el, i) => {
                                let currentData
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
                                                        <TableCell component='th' scope='row' align='left' key={index} className='table-row'>
                                                            {currentData}
                                                        </TableCell>
                                                    );
                                                };
                                            })
                                        }

                                        <TableCell>
                                            <MoreVertRoundedIcon />
                                        </TableCell>    
                                    </TableRow>
                                );
                            })                  
                        }
                </TableBody>
            </Table>
        </TableContainer>
    );
};

export default CreateTable;