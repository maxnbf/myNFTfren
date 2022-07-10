import React from 'react';
import ServiceCardPaymentButton from '../service-card-payment-button';
import { ServiceCard, ServiceCardDescription, ServiceCardHeader, ServiceCardPaymentContainer, ServiceCardsContainer } from '../style';

const ServiceCards = ({inViewport, enterCount}) => {

    return (
           <ServiceCardsContainer >
                <ServiceCard scale={0.9} inViewport={inViewport && enterCount === 1} card={1} >
                    <ServiceCardHeader>Fan Art Creator</ServiceCardHeader>
                    <ServiceCardDescription>Frens with years of freelance art experience, and moreover, diverse NFT fan art portfolios, designing fanart for a project of your choosing</ServiceCardDescription>
                    <ServiceCardPaymentContainer>
                        <ServiceCardPaymentButton text={"0.02 ETH for 1"} eth={"0.02"}/>
                        <ServiceCardPaymentButton text={"0.05 ETH for 3"} eth={"0.05"}/>
                    </ServiceCardPaymentContainer>
                </ServiceCard>
                <ServiceCard scale={1.1} inViewport={inViewport && enterCount === 1} card={2}>
                    <ServiceCardHeader>Discord Grinder</ServiceCardHeader>
                    <ServiceCardDescription>Experienced NFT community member engaging in discord server of your choosing. Frens specialize in charisma, relationship building, project enthusiasm, and necessary NFT lingo to engage</ServiceCardDescription>
                 <ServiceCardPaymentContainer>
                        <ServiceCardPaymentButton text={"0.008 ETH an hour, for 5 hour trial (0.04 ETH)"} eth={"0.04"}/>
                        <ServiceCardPaymentButton text={"0.006 ETH an hour for 20 hours (0.12 ETH)"} eth={"0.12"}/>
                        <ServiceCardPaymentButton text={"0.005 ETH an hour for 50 hours (0.25 ETH)"} eth={"0.25"}/>
                    </ServiceCardPaymentContainer>
                </ServiceCard>
                <ServiceCard scale={0.9} inViewport={inViewport && enterCount === 1} card={1}>
                    <ServiceCardHeader>PR / Marketing outreach</ServiceCardHeader>
                    <ServiceCardDescription>Trying to get your own NFT project noticed online beyond Twitter and Discord? This list will give you access to hundreds of contacts from NFT/crypto websites, Facebook and sub-Reddits, and Twitter/Instagram Influencers.</ServiceCardDescription>
                    <ServiceCardPaymentContainer>
                        <ServiceCardPaymentButton text={"0.25 ETH"} eth={"0.25"}/>
                    </ServiceCardPaymentContainer>
                </ServiceCard>
            </ServiceCardsContainer>
    )
}

export default ServiceCards;