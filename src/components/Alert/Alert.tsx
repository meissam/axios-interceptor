import React from 'react';
import * as Styled from './Alert.styled';

type AlertProps = {
    message: React.ReactNode;
    varient: 'danger' | 'success';
};

export const Alert: React.FC<AlertProps> = ({ message, varient }) => {
    return (
        <Styled.AlertWrapper className="alert" varient={varient}>
            {message}
        </Styled.AlertWrapper>
    );
};
