import React from 'react';
import * as Styled from './Button.styled';

type ButtonProps = {
    text: string;
    onClick?: () => void;
};
export const Button: React.FC<ButtonProps> = ({ text, onClick }) => {
    return <Styled.ButtonWrapper onClick={onClick}>{text}</Styled.ButtonWrapper>;
};
