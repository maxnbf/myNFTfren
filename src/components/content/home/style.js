import styled from 'styled-components'
import CountUp from 'react-countup';



export const Logo = styled.img`
    width: 40%;
    display: flex;
    margin: auto;
    padding-top: 50px;
    margin-bottom: 50px;
    scroll-margin-top: 100px;

    @media (max-width: 767px) {
        width: 70%;
    }
`

export const SubText = styled.div`
    color: white;
    width: 100%;
    text-align: center;
    font-weight: bold;
    font-size: 20px;
    margin: 8px 0;
    font-family: 'Neuropol', sans-serif;

    @media (max-width: 767px) {
        width: 90%;
        font-size: 18px;
        margin: auto;
    }
`

export const BookAMeeting = styled.div`
    font-size: 28px;

    color: #36B3A1;
    font-weight: bold;

    border: 3px solid #36B3A1;
    display: flex;
    align-items: center;
    padding: 10px 20px;
    width: fit-content;
    margin: auto;
    margin-top: 30px;

    justify-content: center;
    cursor: pointer;
`

export const CountUpText = styled(CountUp)`
    font-size: 72px;
    color: white;
    justify-content: center;
    align-items: center;
    height: 65%;
    display: flex;
`

export const InfoRow = styled.div`
    display: flex;
    justify-content: space-evenly;
    margin-top: 50px;
    padding-bottom: 150px;

    @media (max-width: 767px) {
        display: block;
    }
`

export const InfoContainer = styled.div`
    border: 6px solid #36B3A1;
    padding: 20px;
    width: 30%;
    height: 200px;

    @media (max-width: 767px) {
        height: auto;
        width: auto;
        margin: 20px;
    }
`

export const InfoHeader = styled.div`
    font-size: 32px;
    color: white;
    font-weight: bold;
`



export const Icons = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;

    @media (max-width: 767px) {
        margin-top: 15px;
    }
`


export const IconName = styled.div`
    color: white;
    display: none;  
    width: max-content; 
`


export const IconImage = styled.img`
    width: 35px;
    height: 35px;

    margin-bottom: 21.2px;
`

export const IconWrapper = styled.div`
    text-align: center;
    width: 25%;

    &:hover ${IconName} {
        display: block;  
    }

    &:hover ${IconImage} {
        margin-bottom: 0px;  
        height: 55px;
        width: 55px;
        margin-top: -20px;
    }

`
 

