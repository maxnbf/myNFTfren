import React from 'react';
import { SectionHeader } from '../style';
import { ServiceCard, ServiceCardDescription, ServiceCardHeader, ServiceCardPaymentContainer, ServiceCards } from './style';
import ServiceCardPaymentButton from './service-card-payment-button';

const Services = ({servicesRef}) => {

    return (
        <div>
            <SectionHeader ref={servicesRef} scrollMargin={100}>Our Services</SectionHeader>
            <ServiceCards>
                <ServiceCard scale={0.9}>
                    <ServiceCardHeader>Fan Art Creator</ServiceCardHeader>
                    <ServiceCardDescription>Frens with years of freelance art experience, and moreover, diverse NFT fan art portfolios, designing fanart for a project of your choosing</ServiceCardDescription>
                    <ServiceCardPaymentContainer>
                        <ServiceCardPaymentButton text={"0.02 eth for 1"} eth={0.02}/>
                        <ServiceCardPaymentButton text={"0.02 eth for 1"} eth={0.02}/>
                    </ServiceCardPaymentContainer>
                </ServiceCard>
                <ServiceCard scale={1.1}>
                    <ServiceCardHeader>Fan Art Creator</ServiceCardHeader>
                    <ServiceCardDescription>Experienced NFT community member engaging in discord server of your choosing. Frens specialize in charisma, relationship building, project enthusiasm, and necessary NFT lingo to engage</ServiceCardDescription>
                 <ServiceCardPaymentContainer>
                        <ServiceCardPaymentButton text={"0.02 eth for 1"} eth={0.02}/>
                        <ServiceCardPaymentButton text={"0.02 eth for 1"} eth={0.02}/>
                        <ServiceCardPaymentButton text={"0.02 eth for 1"} eth={0.02}/>
                    </ServiceCardPaymentContainer>
                </ServiceCard>
                <ServiceCard scale={0.9}>
                    <ServiceCardHeader>Fan Art Creator</ServiceCardHeader>
                    <ServiceCardDescription>Frens with years of freelance art experience, and moreover, diverse NFT fan art portfolios, designing fanart for a project of your choosing</ServiceCardDescription>
                    <ServiceCardPaymentContainer>
                        <ServiceCardPaymentButton text={"0.02 eth for 1"} eth={0.02}/>
                        <ServiceCardPaymentButton text={"0.02 eth for 1"} eth={0.02}/>
                    </ServiceCardPaymentContainer>
                </ServiceCard>
            </ServiceCards>
        </div>
    )
}

export default Services