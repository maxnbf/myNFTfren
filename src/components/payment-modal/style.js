import styled from 'styled-components'
import { Field, ErrorMessage } from 'formik';

export const ModalHeader = styled.div`
    font-size: 44px;
    color: #36B3A1;
    font-weight: bolder;
    text-align: center;
    margin-bottom: 20px;
`

export const InputField = styled(Field)`
    border: none;
    max-width: 97%;
    min-width: 97%;
    border-bottom: 2px solid #36B3A1;
    font-size: 28px;
    padding: 10px;
    padding-bottom: 20px;
    margin-top: 20px;
    background-color: #1F2254 !important;
    color: #36B3A1;

    &:focus {
        outline: none !important;
    }

    &::placeholder {
        color: #36B3A1;
        opacity: .7;
        @media (max-width: 767px) {
            font-size: 24px;
        }
    }
`

export const InputTextArea = styled(InputField)`
    height: 125px !important;
    resize: none;
`

export const PayButton = styled.button`
    background: #36b3A1;
    border-radius: 40px;
    font-size: 32px;
    padding: 20px 30px 20px 30px;
    width: 80%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: auto;
    margin-top: 40px;
    cursor: pointer;
    margin-bottom: -20px;

    @media (max-width: 767px) {
        font-size: 22px;
        border-radius: 60px;
    }
`

export const Error = styled(ErrorMessage)`
    position: absolute;
    color: red;
    margin-left: 10px;
`