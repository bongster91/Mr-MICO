import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import MoreVertRoundedIcon from '@mui/icons-material/MoreVertRounded';

const CreateTable = ({ props }) => {
    const columnNames = [];

    for (let key in props[0]) {
        if (key !== 'id' && key !== 'user_id') {
            columnNames.push(key[0].toUpperCase() + key.slice(1));
        };
    };

    return (
        <TableContainer>
            <Table label='table'>
                <TableHead>
                    <TableRow>
                        {
                            columnNames.map((category, i) => {
                                return (
                                    <TableCell key={i} align='left'> {category} </TableCell>
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
                                    <TableRow key={i} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>

                                        {
                                            columnNames.map(key => {
                                                let key2 = key[0].toLowerCase() + key.slice(1);
                                                currentData = el[key2];
                                    
                                                return (
                                                    <TableCell component='tb' scope='row' align='left'> {currentData}</TableCell>
                                                );
                                            })
                                        }

                                        <TableCell><MoreVertRoundedIcon /></TableCell>    
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