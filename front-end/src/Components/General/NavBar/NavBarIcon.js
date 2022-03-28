import React from 'react';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import Tooltip from '@mui/material/Tooltip';

function NavBarIcon() {
    return (
    
        <Typography 
            variant='h6'
            noWrap
            component='div'
            sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}
        >
            <Tooltip title='Home Page'>

                <Link href='/'>
                    <img className='navbar__list__logo' src='http://placekitten.com/75/75' alt='kitty' />
                </Link>

            </Tooltip>
        </Typography>
    );
};

export default NavBarIcon;