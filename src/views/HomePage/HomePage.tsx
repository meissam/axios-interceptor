import React from 'react';
import * as Styled from './HomePage.styled';

export const HomePage: React.FC = () => {
    return (
        <Styled.HomepageWrapper className="home-page">
            <p>test your requests</p>
            <div>messages goes here</div>
            <button>Test Reuests</button>
        </Styled.HomepageWrapper>
    );
};
