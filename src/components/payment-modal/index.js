import { Form, Formik } from 'formik';
import React from 'react';
import { submitPayment } from './helpers';
import { Error, InputField, InputTextArea, ModalHeader, PayButton } from './style';

const PaymentModal = ({text, eth}) => {

    return (
        <Formik
            initialValues={{ name: '', email: '', ethwallet: '', solwallet: '', additional: '' }}
            validate={values => {
                const errors = {};
                if (!values.email) {
                    errors.email = 'Required';
                } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
                    errors.email = 'Invalid email address';
                }

                if (!values.name) {
                    errors.name= "Required";
                }
                return errors;
            }}
            onSubmit={(values, { setSubmitting }) => {
                submitPayment(eth, values)
                setSubmitting(false)
            }}
            >
            {({ isSubmitting }) => (
                <Form>
                    <ModalHeader>Confirm your payment</ModalHeader>
                    <div>   
                        <InputField type="text" name="name" placeholder="Your Name"/>
                        <Error name="name" component="div" />
                    </div>
                    <div>
                        <InputField type="email" name="email" placeholder="Your Email" />
                        <Error name="email" component="div" />
                    </div>
                    <div>
                        <InputField type="text" name="ethwallet" placeholder="Eth Wallet Address (optional)" />
                    </div>
                    <div>
                        <InputField type="text" name="solwallet" placeholder="Sol Wallet Address (optional)" />
                      
                    </div>
                    <div>
                        <InputTextArea type="text" name="additional" component="textarea" placeholder="Additional Information"/>
                    </div>
           
                    <PayButton type="submit" disabled={isSubmitting}>
                        Complete payment of {eth} eth
                    </PayButton>
                </Form>
            )}
        </Formik>
    )
}

export default PaymentModal;