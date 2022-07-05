import styled, { keyframes } from 'styled-components'

export const ServiceCards = styled.div`
    display: flex;
    width: 95%;
    margin: auto;
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
    width: 475px;
    height: 625px;

    animation-name: ${(p) => p.inViewport ? p.card === 1 ? slideup : slidedown : 'none'};
    animation-duration: 2s;
    transform: scale(${(p) => p.scale})
`

export const ServiceCardHeader = styled.div`
    display: flex;
    justify-content: center;
    font-weight: bold;
    font-size: 32px;
    color: white;
    border-bottom: 2px solid #36B3A1;
    padding: 10px;
    margin: 0px 15px 0px 15px;
    height: 7%;
`

export const ServiceCardDescription = styled.div`
    font-size: 24px;
    color: white;
    padding: 20px 10px 20px 10px;
    border-bottom: 2px solid #36B3A1;
    margin: 0px 15px 0px 15px;
    height: 30%;
`

export const ServiceCardPayment = styled.div`
    border: 5px solid #36B3A1;
    margin: 15px;
    padding: 20px;
    font-size: 24px;
    color: white;
    justify-content: center;
    display: flex;
    cursor: pointer;
`


export const ServiceCardPaymentContainer = styled.div`
    margin-top: 10px;
    height: 50%;
    justify-content: space-evenly;
    flex-direction: column;
    display: flex;
`