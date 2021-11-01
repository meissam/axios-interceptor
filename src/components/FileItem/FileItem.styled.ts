import styled from 'styled-components';

export const FileItemWrapper = styled.div`
    background-color: ${({ theme }) => theme.color.dark};
    border-radius: ${({ theme }) => theme.borderRadius.lg};
    padding: 15px 30px;
    margin: 15px;
`;
