import styled from "styled-components";

export const Wrapper = styled.div`
    border-radius: 8px;
    border: 1px solid #ccc;
    padding: 8px;
    margin: 16px;
    width: 350px;
    height: 150px;
    align-content: center;
    background-color: #C4C8CC;
`;


export const WrapperTittle = styled.h2`
    font-size: 18px;
    font-weight: bold;
    margin: 8px 0;
    background-color: #C4C8CC;
`;


export const WrapperFullName = styled.h2`
    font-size: 14px;
    font-weight: bold;
    margin: 8px 0;
    color: grey;
    background-color: #C4C8CC;
`;

export const WrapperLink = styled.a`
    font-size: 14px;
    margin: 8px 0;
    color: #FA002B;

    &:hover {
        text-decoration: underline;
        color: #D0FC30;
    }
`;