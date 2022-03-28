import React from 'react'
import { AppBar, Toolbar, IconButton, Badge, MenuItem, Menu, Typography } from '@material-ui/core'
import { ShoppingCart } from '@material-ui/icons';
import { Link, useLocation } from 'react-router-dom';
import logo from '../../assets/logo.jpg';
import useStyles from './styles';

const Navbar = ({ totalItems }) => {
    const classes = useStyles();
    const Location = useLocation();

    return (
        <>
            <AppBar position="fixed" className={classes.appBar} color="inherit">
                <Toolbar>
                    <Typography component={Link} to='/' variant="h6" className={classes.title} color="inherit">
                        <img src={logo} alt="Prestige Floristería" height="25px" className={classes.image} />
                        Prestige Floristería
                    </Typography>
                    <div className={classes.grow} />
                    {Location.pathname === '/' && (<div className={classes.button}>
                        <IconButton component={Link} to='/cart' aria-label="Mostrar items del carrito" color="inherit">
                            <Badge badgeContent={totalItems} color="secondary">
                                <ShoppingCart />
                            </Badge>

                        </IconButton>
                    </div>)}

                </Toolbar>
            </AppBar>
        </>
    );
}

export default Navbar;