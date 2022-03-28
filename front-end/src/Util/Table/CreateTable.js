import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';

import TableRows from './TableRows';
import TableColumns from './TableColumns';

const CreateTable = (props) => {
    const { accounts, category, type } = props;
    const columnNames = [];

    for (let key in accounts[0]) {
        if (key !== 'id' && key !== 'user_id') {
            columnNames.push(key[0].toUpperCase() + key.slice(1));
        };
    };

    return (
        <TableContainer className='table'>
            <Table label='table'>

                <TableHead>
                    <TableColumns columnNames={columnNames} />
                </TableHead>

                <TableBody>
                        {
                            accounts.map((el, i) => {
                                let currentData

                                return (
                                    <TableRows  
                                        currentData={currentData} 
                                        el={el}
                                        i={i}
                                        columnNames={columnNames}
                                        category={category}
                                        key={i}
                                        type={type}
                                    />
                                );
                            })                  
                        }
                </TableBody>
                
            </Table>
        </TableContainer>
    );
};

export default CreateTable;