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
    height: auto;
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
`;

export const WrapperImage = styled.img`
    border-radius: 50%;
    width: 200px;
    margin: 8px;
`;