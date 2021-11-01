import styled from 'styled-components';

export const ButtonWrapper = styled.button`
    background-color: ${({ theme }) => theme.color.cyan};
    border-radius: ${({ theme }) => theme.borderRadius.full};
    color: ${({ theme }) => theme.color.white};
    padding: 15px 30px;
    margin: 15px;
    outline: none;
    border: none;
    transition: all 0.3s;

    &:hover {
        background-color: ${({ theme }) => theme.color.green};
        cursor: pointer;
    }
`;
