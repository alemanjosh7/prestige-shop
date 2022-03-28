import React from 'react'
import { Container, Typography, Button, Grid } from '@material-ui/core';
import useStyles from './styles';
import CartItem from './CartItem/CartItem';
import { Link } from 'react-router-dom';

const Cart = ({ cart }) => {
    const classes = useStyles();
    const EmptyCart = () => (
        <Typography variant="subtitle1">No tienes items en tu carrito de compras, <Link>empieza añadiendo unos!</Link> </Typography>
    );
    const FilledCart = () => (
        <>
            <Grid container spacing={3}>
                {cart.line_items.map((item) => (
                    <Grid item xs={12} sm={4} key={item.id}>
                        <CartItem item={item} />

                    </Grid>
                ))}
            </Grid>
            <div className={classes.cardDetails}>
                <Typography variant="h4">
                    Subtotal: {cart.subtotal.formatted_with_symbol}
                </Typography>
                <div>
                    <Button className={classes.emptyButton} size="large" type="button" variant="contained" color="secondary">Carrito vacío</Button>
                    <Button className={classes.checkoutButton} size="large" type="button" variant="contained" color="primary">Proceder</Button>
                </div>
            </div>
        </>
    );

    if (!cart.line_items) return 'Cargando...';

    return (
        <Container >
            <div className={classes.toolbar} gutterBottom/>
            <Typography className={classes.title} variant="h3" gutterBottom>Tu carrito de compras</Typography>
            {!cart.line_items.length ? <EmptyCart /> : <FilledCart />}
        </Container>
    )
}

export default Cart