import styled, { keyframes } from 'styled-components'
import { Carousel } from 'react-responsive-carousel';

export const ServiceCardsContainer = styled.div`
    display: flex;
    width: 95%;
    justify-content: center;
    margin: auto;
    margin-bottom: 250px;

    @media (max-width: 767px) {
        display: block;
    }
`

const slidedown = keyframes`
 0% { margin-top: -200px; opacity: 0; }
 100% { margin-top: 0px; opacity: 1; }
`

const slideup = keyframes`
 0% { margin-top: 200px; opacity: 0; }
 100% { margin-top: 0px; opacity: 1; }
`


export const ServiceCard = styled.div`
    border: 5px solid #36B3A1;
    margin: 10px;
    width: 400px;
    height: 450px;
    //min-height: 450px;
    height: fit-content;

    animation-name: ${(p) => p.inViewport ? p.card === 1 ? slideup : slidedown : 'none'};
    animation-duration: 2s;
    transform: scale(${(p) => p.scale});

    @media (max-width: 767px) {
        transform: scale(1);
        width: auto;
    }
`

export const ServiceCardHeader = styled.div`
    display: flex;
    justify-content: center;
    font-weight: bold;
    font-size: 24px;
    color: white;
    border-bottom: 2px solid #36B3A1;
    padding: 10px;
    margin: 0px 15px 0px 15px;
    height: 7%;


    @media (max-width: 767px) {
        font-size: 24px;
        justify-content: center;
        align-items: center;
    }

`

export const ServiceCardDescription = styled.div`
    font-size: 18px;
    color: white;
    padding: 20px 10px 20px 10px;
    border-bottom: 2px solid #36B3A1;
    margin: 0px 15px 0px 15px;
    height: fit-content;
    
    @media (min-width: 767px) {
        height: 30%;
    }
`

export const ServiceCardPayment = styled.div`
    border: 3px solid #36B3A1;
    margin: 5px;
    padding: 15px;
    font-size: 16px;
    color: white;
    justify-content: center;
    display: flex;
    cursor: pointer;

        
    @media (max-width: 767px) {
        margin: 5px;
        padding: 20px;
        font-size: 14px;
    }

`


export const ServiceCardPaymentContainer = styled.div`
    // height: 50%;
    // justify-content: space-evenly;
    // flex-direction: column;
    // display: flex;
    min-height: max-content;
`

export const StyledCarousel = styled(Carousel)`
    .slide {
        margin: auto;
        align-items: center;
        display: flex;
    }
`