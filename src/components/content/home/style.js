import styled from 'styled-components'
import CountUp from 'react-countup';



export const Logo = styled.img`
    width: 60%;
    display: flex;
    margin: auto;
    padding-top: 50px;
    margin-bottom: 50px;
    scroll-margin-top: 100px;
`

export const SubText = styled.div`
    color: white;
    width: 100%;
    text-align: center;
    font-weight: bold;
    font-size: 24px;
    margin: 8px 0;
`

export const BookAMeeting = styled.div`
    font-size: 32px;
    text-align: center;
    margin-top: 32px;
    text-decoration: underline;
    color: #36B3A1;
    font-weight: bold;
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
`

export const InfoContainer = styled.div`
    border: 6px solid #36B3A1;
    padding: 20px;
    width: 500px;
    height: 200px;
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
`


export const IconName = styled.div`
    color: white;
    display: none;   
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
    }
`
 

