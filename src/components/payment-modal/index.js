import { Form, Formik } from 'formik';
import React, { useContext, useState } from 'react';
import { ModalContext } from '../../modal/modalContext';
import { submitPayment } from './helpers';
import { Error, InputField, InputTextArea, ModalHeader, PayButton, PaymentError } from './style';

const PaymentModal = ({text, eth}) => {

    const { handleModal } = useContext(ModalContext)

    const [submitError, setSubmitError] = useState(false)
    return (
        <Formik
            initialValues={{ name: '', email: '', ethwallet: '', solwallet: '', twitter: "", additional: '' }}
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
                submitPayment(eth, values, handleModal, setSubmitError)
                setSubmitting(false)
            }}
            >
            {({ isSubmitting }) => (
                <Form>
                    <ModalHeader>Confirm your payment</ModalHeader>
                    <div style={{position: 'relative'}}>   
                        <InputField type="text" name="name" placeholder="Your Name"/>
                        <Error name="name" component="div" />
                    </div>
                    <div style={{position: 'relative'}}>
                        <InputField type="email" name="email" placeholder="Your Email" />
                        <Error name="email" component="div" />
                    </div>
                    <div>
                        <InputField type="text" name="ethwallet" placeholder="ETH Wallet Address (optional)" />
                    </div>
                    <div>
                        <InputField type="text" name="solwallet" placeholder="Sol Wallet Address (optional)" />
                    </div>
                    <div>
                        <InputField type="text" name="twitter" placeholder="Twitter Handle (optional)" />
                    </div>
                    <div>
                        <InputTextArea type="text" name="additional" component="textarea" placeholder="Additional Information"/>
                    </div>
           
                    <PayButton type="submit" disabled={isSubmitting}>
                        Complete payment of {eth} ETH
                    </PayButton>
                    {submitError && <PaymentError>Error - ensure you have funds (including gas prices)</PaymentError>}
                </Form>
            )}
        </Formik>
    )
}

export default PaymentModal;