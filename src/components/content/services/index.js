import React, { useRef } from 'react';
import { useInViewport } from 'react-in-viewport';
import { SectionHeader } from '../style';
import { ServiceCard, ServiceCardDescription, ServiceCardHeader, ServiceCardPaymentContainer, ServiceCards } from './style';
import ServiceCardPaymentButton from './service-card-payment-button';

const Services = ({servicesRef}) => {

    const myRef = useRef();
    const { inViewport, enterCount } = useInViewport(myRef);


    return (
        <div>
            <SectionHeader ref={servicesRef} scrollMargin={100}>Our Services</SectionHeader>
            <ServiceCards ref={myRef}>
                <ServiceCard scale={0.9} inViewport={inViewport && enterCount === 1} card={1} >
                    <ServiceCardHeader>Fan Art Creator</ServiceCardHeader>
                    <ServiceCardDescription>Frens with years of freelance art experience, and moreover, diverse NFT fan art portfolios, designing fanart for a project of your choosing</ServiceCardDescription>
                    <ServiceCardPaymentContainer>
                        <ServiceCardPaymentButton text={"0.0005 eth for 1"} eth={"0.0005"}/>
                        <ServiceCardPaymentButton text={"0.02 eth for 1"} eth={0.02}/>
                    </ServiceCardPaymentContainer>
                </ServiceCard>
                <ServiceCard scale={1.1} inViewport={inViewport && enterCount === 1} card={2}>
                    <ServiceCardHeader>Fan Art Creator</ServiceCardHeader>
                    <ServiceCardDescription>Experienced NFT community member engaging in discord server of your choosing. Frens specialize in charisma, relationship building, project enthusiasm, and necessary NFT lingo to engage</ServiceCardDescription>
                 <ServiceCardPaymentContainer>
                        <ServiceCardPaymentButton text={"0.02 eth for 1"} eth={0.02}/>
                        <ServiceCardPaymentButton text={"0.02 eth for 1"} eth={0.02}/>
                        <ServiceCardPaymentButton text={"0.02 eth for 1"} eth={0.02}/>
                    </ServiceCardPaymentContainer>
                </ServiceCard>
                <ServiceCard scale={0.9} inViewport={inViewport && enterCount === 1} card={1}>
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