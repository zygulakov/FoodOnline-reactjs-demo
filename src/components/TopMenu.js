import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { Typography } from '@material-ui/core';


const TopMenu = () => {
    return (
        <AppBar position="fixed" color="primary" style={{ top: "auto", top: 0 }}>
            <Toolbar>
                <img 
                src='https://image.flaticon.com/icons/png/512/4177/4177317.png'
                 height='40'
                  width='40'/>
                <Typography variant='Xurok Online'>Xurok Online!</Typography>
            </Toolbar>
        </AppBar>
    );
}
export default TopMenu;