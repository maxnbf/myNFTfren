import styled from 'styled-components'

export const ContentBody = styled.div`
    height: auto;
    position: relative;

    width: 85%;
    margin: auto;
`

export const SectionHeader = styled.div`
    font-size: 44px;
    font-weight: bolder;
    color: #36B3A1;
    margin-top: 200px;
    margin-bottom: 100px;
    text-align: center;
    scroll-margin-top: ${(p) => p.scrollMargin}px;
    font-family: 'Neuropol', sans-serif;

    @media (max-width: 767px) {
        font-size: 40px;
        scroll-margin-top: ${(p) => p.scrollMargin - 50}px;
        margin-top: 200px;
        margin-bottom: 70px;
    }
`