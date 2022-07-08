import styled, { keyframes } from 'styled-components'

const slidedown = keyframes`
 0% { margin-top: -100px; opacity: 0; }
 100% { margin-top: 0px; opacity: 1; }
`

export const AboutBody = styled.div`
    font-weight: bold;
    font-size: 28px;
    color: white;
    width: 65%;
    margin-left: auto;
    margin-right: auto;
    text-align: center;
    padding-bottom: 200px;
    animation-name: ${(p) => p.inViewport ? slidedown : 'none'};
    animation-duration: 2s;

    @media (max-width: 767px) {
        font-size: 22px;
        width: 80%;
    }
`

