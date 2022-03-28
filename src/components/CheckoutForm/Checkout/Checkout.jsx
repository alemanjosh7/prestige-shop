import React, { useState } from 'react'
import { Paper, Stepper, Step, StepLabel, Typography, CircularProgress, Divider, Button } from '@material-ui/core';

import AdressForm from '../AdressForm';
import PaymentForm from '../PaymentForm';

import useStyles from './styles';

const steps = ['Lugar de envío', 'Detalles de pago'];

const Checkout = () => {
    const [activeStep, setActiveStep] = useState(0);
    const classes = useStyles();
    const Confirmation = () => (
        <div>Confirmation</div>
    )
    const Form = () => activeStep === 0
        ? <AdressForm />
        : <PaymentForm />

    return (
        <>
            <div className={classes.toolbar}></div>
            <main className={classes.layout}>
                <Paper className={classes.paper}>
                    <Typography variant="h4" align="center">Checkout</Typography>
                    <Stepper activeStep={activeStep} className={classes.stepper}>
                        {steps.map((step) =>
                            <Step key={step}>
                                <StepLabel>{step}</StepLabel>
                            </Step>
                        )}
                    </Stepper>
                    {activeStep === steps.length ? <Confirmation /> : <Form />}
                </Paper>
            </main>
        </>
    )
}

export default Checkout