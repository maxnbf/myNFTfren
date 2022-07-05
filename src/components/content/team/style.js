import styled, { keyframes } from 'styled-components'

export const JesseBody = styled.div`
    display: flex;
    width: 80%;
    margin: auto;
`

export const Images = styled.div`
    display: flex;
`

const slidedown = keyframes`
    0% { margin-top: -200px; opacity: 0; }
    100% { margin-top: 0px; opacity: 1; }
`

const slideup = keyframes`
    0% { margin-top: 200px; opacity: 0; }
    100% { margin-top: 0px; opacity: 1; }
`

const maintainloc = keyframes`
    0% { margin-top: -100px; }
    100% { margin-top: 100px; }
`

export const Headshot = styled.img`
    height: 250px;
    border-radius: 125px;
    width: 250px;
    border: 3px solid #36B3A1;
    animation-name: ${(p) => p.inViewport ? slideup: 'none'};
    animation-duration: 2s;
`

export const NFT = styled(Headshot)`
    margin-left: -70px;
    animation-name: ${(p) => p.inViewport ? slidedown: 'none'};
`

export const JesseDescription = styled.div`
    font-size: 32px;
    color: white;
    font-weight: bold;
    margin-left: 40px;
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
`