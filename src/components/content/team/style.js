import styled, { keyframes } from 'styled-components'

export const JesseBody = styled.div`
    display: flex;
    width: 70%;
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
    font-size: 24px;
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
    height: 175px;
    border-radius: 125px;
    width: 175px;
    border: 3px solid #36B3A1;
    animation-name: ${(p) => p.inViewport ? slideup: 'none'};
    animation-duration: 2s;

    @media (max-width: 767px) {
        animation-name: ${(p) => p.inViewport ? slideinleft: 'none'};
        
    }
`

export const NFT = styled(Headshot)`
    margin-left: -50px;
    animation-name: ${(p) => p.inViewport ? slidedown: 'none'};

    @media (max-width: 767px) {
        animation-name: ${(p) => p.inViewport ? slideinright: 'none'};      
    }
`

const maintainloc = keyframes`
    0% { margin-top: -150px; }
    100% { margin-top: 50px; }
`

export const TeamDescription = styled.div`
    width: 65%;
    margin: auto;
    font-size: 20px;
    color: white;
    margin-top: 50px;
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

export const TeamProfiles = styled.div`

    @media (min-width: 767px) {
        display: flex;
        width: 40%;
        margin: auto;
        justify-content: space-around;    
    }
`

export const TeamMemberProfile = styled.div`
    margin: 5px;
`

export const TeamMemberImage = styled.img`
    width: 175px;
    height: 175px;
    border: 3px solid #36B3A1;
    border-radius: 125px;

    @media (max-width: 767px) {
        display: flex; 
        margin: auto;
        margin-top: 10px;
    }
`

export const TeamMemberName = styled.div`
    font-size: 28px;
    color: white;
    text-align: center;
    font-weight: bolder;
    margin-top: 10px;
`

export const TeamMemberRole = styled.div`
    font-size: 24px;
    color: #36B3A1;
    text-align: center;
    font-weight: bolder;

`
