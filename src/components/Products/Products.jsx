import React from 'react';
import { Grid } from '@material-ui/core';

import Product from './Product/Product';
import useStyles from './styles';
import imgRosa1 from '../../assets/flores-1.jpg';
import imgRosa2 from '../../assets/flores-2.jpg';
import imgRosa3 from '../../assets/flores-3.jpg';
import imgRosa4 from '../../assets/flores-4.jpg';

const products = [
    { id: 1, name: 'Ramo de rosas', description: 'Un elegante arreglo floral con rosas.', price: '$5', image: imgRosa1 },
    { id: 2, name: 'Ramo de girasoles', description: 'Un elegante arreglo floral con girasoles.', price: '$10', image: imgRosa2 },
    { id: 3, name: 'Ramo de rosas', description: 'Un elegante arreglo floral con rosas.', price: '$5', image: imgRosa3, },
    { id: 4, name: 'Ramo de girasoles', description: 'Un elegante arreglo floral con girasoles.', price: '$10', image: imgRosa4, },
];

const Products = () => {
    const classes = useStyles();
    return (
        <main className={classes.content}>
            <div className={classes.toolbar} />
            <Grid container justify="center" spacing={4}>
                {products.map((product) => (
                    <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
                        <Product product={product} />
                    </Grid>
                ))}
            </Grid>
        </main>
    );

}

export default Products;