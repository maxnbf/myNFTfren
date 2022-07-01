import React from 'react';
import { AboutHeader } from '../about/style';
import { ServiceCard, ServiceCardDescription, ServiceCardHeader, ServiceCardPayment, ServiceCardPaymentContainer, ServiceCards } from './style';

const Services = () => {

    return (
        <div>
            <AboutHeader>Our Services</AboutHeader>
            <ServiceCards>
                <ServiceCard scale={0.9}>
                    <ServiceCardHeader>Fan Art Creator</ServiceCardHeader>
                    <ServiceCardDescription>Frens with years of freelance art experience, and moreover, diverse NFT fan art portfolios, designing fanart for a project of your choosing</ServiceCardDescription>
                    <ServiceCardPaymentContainer>
                        <ServiceCardPayment>0.02 eth for 1</ServiceCardPayment>
                        <ServiceCardPayment>0.05 eth for 3</ServiceCardPayment>
                    </ServiceCardPaymentContainer>
                </ServiceCard>
                <ServiceCard scale={1.1}>
                    <ServiceCardHeader>Fan Art Creator</ServiceCardHeader>
                    <ServiceCardDescription>Experienced NFT community member engaging in discord server of your choosing. Frens specialize in charisma, relationship building, project enthusiasm, and necessary NFT lingo to engage</ServiceCardDescription>
                 <ServiceCardPaymentContainer>
                        <ServiceCardPayment>0.02 eth for 1</ServiceCardPayment>
                        <ServiceCardPayment>0.02 eth for 1</ServiceCardPayment>
                        <ServiceCardPayment>0.05 eth for 3</ServiceCardPayment>
                    </ServiceCardPaymentContainer>
                </ServiceCard>
                <ServiceCard scale={0.9}>
                    <ServiceCardHeader>Fan Art Creator</ServiceCardHeader>
                    <ServiceCardDescription>Frens with years of freelance art experience, and moreover, diverse NFT fan art portfolios, designing fanart for a project of your choosing</ServiceCardDescription>
                    <ServiceCardPaymentContainer>
                        <ServiceCardPayment>0.02 eth for 1</ServiceCardPayment>
                    </ServiceCardPaymentContainer>
                </ServiceCard>
            </ServiceCards>
        </div>
    )
}

export default Services