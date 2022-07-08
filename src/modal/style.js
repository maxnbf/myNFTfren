import styled from 'styled-components'

export const ModalContainer = styled.div`
    background: rgba(0, 0, 0, 0.8);
    width: 100%;
    height: 100vh;
    position: fixed;
    display: flex;
    justify-content: center;
    align-items: center;    
    z-index: 10;
`

export const ModalBody = styled.div`
    position: relative;
    padding: 1.25rem;
    align-items: flex-start;
    flex-direction: column;
    display: flex;
    border-radius: 50px;
    border: 3px solid #36B3A1;
    background-color: #1f2255;
    padding: 75px;
    width: 50%;
    transform: scale(.7);
    margin-top: 50px;

    @media (max-width: 767px) {
        width: 90%;
    }

`

export const ModalClose = styled.button`
    position: absolute;
    right: 5%;
    top: 3%;
    background: none;
    border: none;
    color: color: #36B3A1;
    color: #36B3A1;
    font-size: 50px;
    cursor: pointer;
`
export const ModalContent = styled.div`
    width: 100%;
`