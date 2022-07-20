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
    padding-bottom: 50px;

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
    font-size: 26px;
    margin-top: -10px;
    margin-bottom: 15px;
    color: white;
    font-weight: bold;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;

    @media (max-width: 767px) {
        font-size: 18px;
        margin-bottom: 30px;
    }
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
 

export const LogosContainer = styled.div`
    width: 78%;
    margin: auto;

    @media (max-width: 767px) {
        width: 95%;
    }
`

export const ProjectLogo = styled.img`
    border: 3px solid #36B3A1;
    border-radius: 150px;
    width: 200px;
    height: 200px;


    @media (max-width: 767px) {
        display: flex;
        margin: auto;
    }

`

export const ProjectItem = styled.a`
    padding: 50px;
    cursor: pointer;
    text-decoration: none;

    @media (min-width: 767px) {
        padding: 50px;
    }
`

export const ProjectName = styled.div`
    font-size: 24px;
    color: #36B3A1;
    text-align: center;
    font-weight: bolder;
    padding: 10px;
`

export const ProjectTitle = styled.div`
    width: 100%;
    font-size: 32px;
    color: white;
    text-align: center;
    font-weight: bolder;
    padding: 10px;
`

export const Projects = styled.div`
    @media (min-width: 767px) {
        justify-content: space-around;
        display: flex;
    }
`