import React from 'react';

import Link from '@mui/material/Link';
import Box from '@mui/material/Box';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import IconButton from '@mui/material/IconButton';
import MenuItem from '@mui/material/MenuItem';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

function NavBarMenu({ handleCloseNavMenu, handleOpenNavMenu, anchorElNav }) {
    const pages = [
        ['Home', '/'], 
        ['About', '/about'], 
        ['Portfolio', '/users/:user_id/portfolio']
    ];

  return (
    <section className='navbar__list__link'>
{/* 
    <Box sx={{ flexGrow: 1, display: { xs: 'flex' } }}>

        <Menu
            className='navbar-appbar'
            anchorEl={anchorElNav}
            anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left'
            }}
            keepMounted
            transformOrigin={{
                vertical: 'top',
                horizontal: 'left'
            }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                    display: { xs: 'block', md: 'none' },
                }}
            >

                {
                    pages.map((page) => {
                        return (
                            <MenuItem key={page} onClick={handleCloseNavMenu}>

                                <Typography textAlign='center'>
                                    { page[0] }
                                </Typography>

                            </MenuItem>
                        );
                    })
                }
        </Menu>
    </Box> */}

    <Box sx={{ flexGrow: 1, display: {  md: 'flex' } }} >
        {
            pages.map((page) => {
                return (
                    <Button
                        key={page}
                        onClick={handleCloseNavMenu}
                        sx={{ my: 2, color: 'white', display: 'block' }}    
                    >
                        {
                            <Link href={`${page[1]}`} >
                                { page[0] }
                            </Link>
                        }

                    </Button>
                );
            })
        }
    </Box>

    </section>
  );
};

export default NavBarMenu