import styled from 'styled-components';


export const Wrapper = styled.div`
    display: flex;
    align-items: flex-start;
`;

export const WrapperInfoUser = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;
    height: 200px;
    h1{
        font-size: 30px;
        font-weight: bold;
    }

    h3{
        font-size: 18px;
        font-weight: bold; 
    }

    h4{
        font-size: 16px;
        font-weight: bold; 
    }
`;

export const WrapperStatusCount = styled.div`
    display: flex;
    align-items: flex-start;
    div {
        margin: 8px;
    }
`;

export const WrapperUserName = styled.div`
    display: flex;
    align-items: center;
    h3 {
        margin-right: 8px;
        text-align: center;
    }
    a{
        color: #FA002B;
        font-weight: bold;
        font-size: 18px;
    }
`;

export const WrapperImage = styled.img`
    border-radius: 50%;
    width: 200px;
    margin: 8px;
`;