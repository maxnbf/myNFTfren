import styled from 'styled-components'

export const SocialMedia = styled.div`
    justify-content: space-between;
    margin: auto;
    margin-bottom: 40px;

    
    @media (min-width: 767px) {
        display: flex;
        width: 50%;
    }

    @media (max-width: 767px) {
        margin-bottom: 20px;
        margin-top: 20px;
    }
`

export const Gmail = styled.img`
    width: 30px;
    height: 30px;
    margin-right: 30px;

    @media (max-width: 767px) {
        margin-right: 40px;
    }
`

export const Twitter = styled.img`
    width: 50px;
    height: 50px;
    margin-right: 30px;
`

export const MediaItem = styled.div`
    display: flex;
    color: white;
    font-size: 28px;
    align-items: center;

    @media (max-width: 767px) {
        margin-right: 10px;

        ${Gmail} {
            margin-left: 10px;
        }
    }


`

export const MediaLink = styled.a`
    text-decoration: none;
    color: white;
    cursor: pointer;

    @media (max-width: 767px) {
        font-size: 18px;
        justify-content: left;
    }

`