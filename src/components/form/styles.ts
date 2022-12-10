import styled from 'styled-components';

export const Form = styled.form`
    width: 50%;
    background-color: #303030;
    border-radius: 1rem;
    padding: 3rem 1rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const Title = styled.h3`
    font-size: 1.75rem;
    font-weight: 400;
    margin-bottom: 2rem;
`;

export const Box = styled.div`
    width: 80%;
    border-radius: 1rem;
    max-width: 968px;
    border: 1px solid green;
    
    @media screen and (min-width: 768px) {
        display: flex;
        justify-content: space-between;
    }
    
`;

export const ImageBox = styled.div`
    width: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
`;