import React, { useContext } from 'react';
import { ModalContext } from '../../../../modal/modalContext';
import PaymentModal from '../../../payment-modal';
import { ServiceCardPayment } from '../style';

const ServiceCardPaymentButton = ({text, eth}) => {

    const { handleModal } = useContext(ModalContext)

    return (
        <ServiceCardPayment onClick={() => handleModal(<PaymentModal text={text} eth={eth}/>)}>{text}</ServiceCardPayment>
    )
}

export default ServiceCardPaymentButton