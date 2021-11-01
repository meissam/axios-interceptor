import React from 'react';
import * as Styled from './Alert.styled';
import { AlertVarients } from '@/types';

type AlertProps = {
    message: React.ReactNode;
    varient: AlertVarients;
};

export const Alert: React.FC<AlertProps> = ({ message, varient }) => {
    return <Styled.AlertWrapper varient={varient}>{message}</Styled.AlertWrapper>;
};
