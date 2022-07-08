import React, { useEffect, useRef, useState } from 'react';
import { useInViewport } from 'react-in-viewport';
import { SectionHeader } from '../style';
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { Carousel } from 'react-responsive-carousel';
import ServiceCards from './service-cards';

import ServiceCardPaymentButton from './service-card-payment-button';
import { ServiceCard, ServiceCardDescription, ServiceCardHeader, ServiceCardPaymentContainer, ServiceCardsContainer } from './style';



const Services = ({servicesRef}) => {

    const myRef = useRef();
    const { inViewport, enterCount } = useInViewport(myRef);

    const [isDesktop, setIsDesktop] = useState(false);

    useEffect(() => {
        window.innerWidth > 600 ?
            setIsDesktop(true) : setIsDesktop(false);
    }, []);

    window.addEventListener('resize', () => {
        window.innerWidth > 600 ?
            setIsDesktop(true) : setIsDesktop(false);
    });

    return (
        <div ref={myRef}>
            <SectionHeader ref={servicesRef} scrollMargin={100}>Our Services</SectionHeader>
            { enterCount === 0 
                ? 
                <div style={{minHeight: "625px"}}></div> 
                : 
                    isDesktop 
                    ?  
                        <ServiceCards inViewport={inViewport} enterCount={enterCount}/> 
                    :
                        <Carousel showArrows={true}>
                                <ServiceCard scale={0.9} inViewport={inViewport && enterCount === 1} card={1} >
                                    <ServiceCardHeader>Fan Art Creator</ServiceCardHeader>
                                    <ServiceCardDescription>Frens with years of freelance art experience, and moreover, diverse NFT fan art portfolios, designing fanart for a project of your choosing</ServiceCardDescription>
                                    <ServiceCardPaymentContainer>
                                        <ServiceCardPaymentButton text={"0.02 eth for 1"} eth={"0.02"}/>
                                        <ServiceCardPaymentButton text={"0.05 eth for 3"} eth={"0.05"}/>
                                    </ServiceCardPaymentContainer>
                                </ServiceCard>
                                <ServiceCard scale={1.1} inViewport={inViewport && enterCount === 1} card={2}>
                                    <ServiceCardHeader>Discord Grinder</ServiceCardHeader>
                                    <ServiceCardDescription>Experienced NFT community member engaging in discord server of your choosing. Frens specialize in charisma, relationship building, project enthusiasm, and necessary NFT lingo to engage</ServiceCardDescription>
                                <ServiceCardPaymentContainer>
                                        <ServiceCardPaymentButton text={"0.008 eth an hour, for 5 hour trial"} eth={"0.04"}/>
                                        <ServiceCardPaymentButton text={"0.006 eth an hour for 20 hours"} eth={"0.12"}/>
                                        <ServiceCardPaymentButton text={"0.005 eth an hour for 50 hours"} eth={"0.25"}/>
                                    </ServiceCardPaymentContainer>
                                </ServiceCard>
                                <ServiceCard scale={0.9} inViewport={inViewport && enterCount === 1} card={1}>
                                    <ServiceCardHeader>PR / Marketing outreach</ServiceCardHeader>
                                    <ServiceCardDescription>Frens with years of freelance art experience, and moreover, diverse NFT fan art portfolios, designing fanart for a project of your choosing</ServiceCardDescription>
                                    <ServiceCardPaymentContainer>
                                        <ServiceCardPaymentButton text={"0.25 eth"} eth={"0.25"}/>
                                    </ServiceCardPaymentContainer>
                                </ServiceCard>
                        </Carousel>
            }
        </div>
    );
        
    
}

export default Services