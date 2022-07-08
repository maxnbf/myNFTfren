import styled, { keyframes } from 'styled-components'

export const JesseBody = styled.div`
    display: flex;
    width: 80%;
    margin: auto;

    @media (max-width: 767px) {
        display: block;
        width: 90%;
    }
`

export const Images = styled.div`
    display: flex;

    @media (max-width: 767px) {
        justify-content: center;
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

export const JesseDescription = styled.div`
    font-size: 32px;
    color: white;
    font-weight: bold;
    margin-left: 40px;

    @media (max-width: 767px) {
        font-size: 22px;
        margin-top: 30px;
        text-align: center;
        margin-left: 0px;
    }
`

const slideinleft = keyframes`
 0% { transform: translate(-100%, 0px);}
 100% { transform: translate(0px, 0px); }
`

const slideinright = keyframes`
 0% { transform: translate(100%, 0px); }
 100% { transform: translate(0px, 0px);}
`

export const Headshot = styled.img`
    height: 250px;
    border-radius: 125px;
    width: 250px;
    border: 3px solid #36B3A1;
    animation-name: ${(p) => p.inViewport ? slideup: 'none'};
    animation-duration: 2s;

    @media (max-width: 767px) {
        height: 175px;
        width: 175px;
        animation-name: ${(p) => p.inViewport ? slideinleft: 'none'};
        
    }
`

export const NFT = styled(Headshot)`
    margin-left: -70px;
    animation-name: ${(p) => p.inViewport ? slidedown: 'none'};

    @media (max-width: 767px) {
        margin-left: -50px;
        animation-name: ${(p) => p.inViewport ? slideinright: 'none'};
        
    }
`

const maintainloc = keyframes`
    0% { margin-top: -100px; }
    100% { margin-top: 100px; }
`

export const TeamDescription = styled.div`
    width: 70%;
    margin: auto;
    font-size: 32px;
    color: white;
    margin-top: 100px;
    text-align: center;
    font-weight: bolder;
    padding-bottom: 100px;
    animation-name: ${(p) => p.inViewport ? maintainloc: 'none'};
    animation-duration: 2s;

    @media (max-width: 767px) {
        font-size: 18px;
        width: 90%;
        margin-top: 50px;
        animation-name: none;
    }
`