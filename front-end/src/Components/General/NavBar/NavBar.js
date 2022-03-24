import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import '../NavBar.scss';

// Components
import NavBarIcon from './NavBarIcon';
import NavBarMenu from './NavBarMenu';
import NavBarSettings from './NavBarSettings';

function NavBar() {
    const [anchorElNav, setAnchorElNav] = useState(null);
    const [anchorElUser, setAnchorElUser] = useState(null);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    return (
        <AppBar position='static'>
            <Container maxWidth='xl' className='navbar'>
                <Toolbar disableGutters className='navbar__list'>

                    <NavBarIcon />

                    <NavBarMenu 
                        handleCloseNavMenu={handleCloseNavMenu}
                        handleOpenNavMenu={handleOpenNavMenu}
                        anchorElNav={anchorElNav}
                    />

                    <NavBarSettings 
                        handleCloseUserMenu={handleCloseUserMenu}
                        handleOpenUserMenu={handleOpenUserMenu}
                        anchorElUser={anchorElUser}
                    />

                </Toolbar>
            </Container>
        </AppBar>
    );
};

export default NavBar;
