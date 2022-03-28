import React from 'react';

import Link from '@mui/material/Link';
import Box from '@mui/material/Box';
import Tooltip from '@mui/material/Tooltip';
import IconButton from '@mui/material/IconButton';
import Avatar from '@mui/material/Avatar';
import Menu from '@mui/material/Menu';
import Typography from '@mui/material/Typography';
import MenuItem from '@mui/material/MenuItem';
import MenuIcon from '@mui/icons-material/Menu';

function NavBarSettings({ handleOpenUserMenu, handleCloseUserMenu, anchorElUser }) {
    const settings = [
        ['Profile', '/users/:user_id/profile'], 
        ['Account', '/users/:user_id/account'], 
        ['Dashboard', '/users/:user_id/dashboard'], 
        ['Logout', '/users/:user_id/logout']
    ];

    return (
        <Box sx={{ flexGrow: 0 }} className='navbar__list__settings'>

            <Tooltip title="Open settings">
                {/* <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>

                    <Avatar alt="kitty" src="http://placekitten.com/75/75" />

                </IconButton> */}
                <MenuIcon onClick={handleOpenUserMenu} sx={{ p:0 }} />
            </Tooltip>

            <Menu
                sx={{ mt: '45px' }}
                className='navbar__list_settings__appbar'
                anchorEl={anchorElUser}
                anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
            >
                {
                    settings.map((setting) => (
                        <MenuItem 
                            key={setting} 
                            onClick={handleCloseUserMenu} className='navbar__list__settings_link'
                        >

                            <Typography textAlign="center">

                                <Link href={`${setting[1]}`}>
                                    { setting[0] }
                                </Link>

                            </Typography>

                        </MenuItem>
                    ))
                }
              
            </Menu>
        </Box>
    );
};

export default NavBarSettings;