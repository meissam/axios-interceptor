import styled from 'styled-components';

type AlertWrapperProps = {
    varient: 'danger' | 'success';
};

export const AlertWrapper = styled.div<AlertWrapperProps>`
    position: relative;
    border-radius: ${({ theme }) => theme.borderRadius.sm};
    padding: 10px 30px;
    width: 100%;
    margin-bottom: 15px;
    background-color: ${({ varient, theme }) => {
        switch (varient) {
            case 'success':
                return theme.color.green;
            case 'danger':
                return theme.color.red;
            default:
                return theme.color.gray;
        }
    }};
`;
