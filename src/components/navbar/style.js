import styled, { keyframes } from 'styled-components'


export const NavBody = styled.div`
    height: 8vh;
    display: flex;
    justify-content: space-between;
    color: white;
    position: sticky;
    top: 0;

    background: ${(p) => p.isSolid ? '#1F2255' : 'transparent'};
    opacity: 0.95;
    z-index: 10;
`

export const NavTabs = styled.div`
    display: flex;
    width: 45%;
    justify-content: space-evenly;
    align-items: center;

    @media (max-width: 767px) {
        display: none;
    }
  
`

export const NavTab = styled.div`
    color: ${(p) => p.isSelected ? '#36B3A1' : 'white'};
    text-decoration:  ${(p) => p.isSelected ? 'underline' : 'none'}; 
    cursor: pointer;


    @media (max-width: 767px) {
        font-size: 24px;
        margin-left: 20%;
        margin-top: 40px;
        height: 5%;
    }

`

export const GetInTouch = styled.div`
    border: 3px solid #36B3A1;
    margin: 8px 20px 5px 0px;
    display: flex;
    align-items: center;
    padding: 20px;

    justify-content: center;
    cursor: pointer;

    @media (min-width: 767px) {
        width: 8%;
    }
`

export const MobileNavButton = styled.img`
    display: none;
    width: 40px;
    height: 40px;
    margin: auto 0;
    margin-left: 10px;

    margin-top: ${p => p.onMobileNav ? '13px' : 'auto'};


    @media (max-width: 767px) {
        display: block;
    }
`

const slidein = keyframes`
 0% { transform: translate(0px, 0px);}
 100% { transform: translate(-100%, 0px); }
`

const slideout = keyframes`
 0% { transform: translate(-100%, 0px); }
 100% { transform: translate(0px, 0px);}
`

export const MobileNavMenu = styled.div`
    background: #1F2255;
    height: 100vh;
    width: 60%;
    position: absolute;
    transform: translate(-100%, 0px);
    animation-name: ${p => p.mobileNav ? slideout : 'none'};
    animation-duration: 1.0s;
    animation-fill-mode: forwards;

    @media (min-width: 767px) {
        display: none;
    }
`

