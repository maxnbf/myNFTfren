import styled from 'styled-components'

export const ContentBody = styled.div`
    height: auto;
    position: relative;
`

export const SectionHeader = styled.div`
    font-size: 52px;
    font-weight: bolder;
    color: #36B3A1;
    margin-top: 300px;
    margin-bottom: 100px;
    text-align: center;
    scroll-margin-top: ${(p) => p.scrollMargin}px;

    @media (max-width: 767px) {
        font-size: 40px;
        scroll-margin-top: ${(p) => p.scrollMargin - 50}px;
        margin-top: 200px;
        margin-bottom: 70px;
    }
`