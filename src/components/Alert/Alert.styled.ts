import styled, { css } from 'styled-components';
import { AlertVarients } from '@/types';

type AlertWrapperProps = {
    varient: AlertVarients;
};

export const AlertWrapper = styled.div<AlertWrapperProps>`
    position: relative;
    border-width: 1px solid;
    border-radius: ${({ theme }) => theme.borderRadius.sm};
    ${({ varient, theme }) => {
        switch (varient) {
            case AlertVarients.Success:
                return css`
                    background-color: ${theme.color.green};
                    border-color: ${theme.color.cyan};
                `;
            case AlertVarients.Danger:
                return css`
                    background-color: ${theme.color.red};
                    border-color: ${theme.color.dark};
                `;
            default:
                return css`
                    background-color: ${theme.color.gray};
                    border-color: ${theme.color.darkGray};
                `;
        }
    }}
`;
