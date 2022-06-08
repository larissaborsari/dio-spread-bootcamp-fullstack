import styled from 'styled-components';

export const Wrapper = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-between;
    padding: 4px;

    input{
        border: 1px solid #ccc;
        border-radius: 8px;
        width: 100%;
        height: 44px;
        color: #ccc;
    }

    button{
        background-color: #FA002B;
        padding: 8px 16px;
        border-radius: 16px;
        margin: 0 8px;
        font-weight: bold;
        color: #ccc;

        &:hover{
            box-shadow: 0 0 0.5em #FD470D;
        }
    }
`;