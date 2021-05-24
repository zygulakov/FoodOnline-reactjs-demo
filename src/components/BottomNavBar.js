import { AppBar, BottomNavigationAction, makeStyles } from '@material-ui/core';
import BottomNavigation from '@material-ui/core/BottomNavigation'
import FastfoodIcon from '@material-ui/icons/Fastfood';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import ForumIcon from '@material-ui/icons/Forum';
import { useState } from 'react'
const BottomNavBar = () => {
    const navbarItems = [
        {
            label: 'fastfoods',
            icon: <FastfoodIcon />
        },
        {
            label: 'search',
            icon: <SearchIcon />
        },
        {
            label: 'cart',
            icon: <ShoppingCartIcon />
        },
        {
            label: 'chat',
            icon: <ForumIcon />
        }
    ]
    const [active, setActive] = useState(0);
    const onChange = (e, newValue) => {
        setActive(newValue)
    }

    return (
        <AppBar position="fixed" style={{ top: "auto", bottom: 0 }}>
            <BottomNavigation
                value={active}
                onChange={onChange}
                showLabels
            >
                {navbarItems.map((item, index) => {
                    return (
                        <BottomNavigationAction key={index}
                            label={item.label}
                            icon={item.icon}
                        />
                    )
                })}
            </BottomNavigation>
        </AppBar>
    )
}
export default BottomNavBar;
