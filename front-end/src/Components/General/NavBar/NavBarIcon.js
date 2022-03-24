import React from 'react';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';

function NavBarIcon() {
    return (
    
        <Typography 
            variant='h6'
            noWrap
            component='div'
            sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}
        >
            <Link to='/'>
                <img className='navbar__list__logo' src='http://placekitten.com/75/75' alt='kitty' />
            </Link>

        </Typography>
    );
};

export default NavBarIcon;