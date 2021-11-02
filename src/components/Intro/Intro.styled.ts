import styled from 'styled-components';

export const IntroWrapper = styled.div`
    width: 100%;
    h2 {
        font-size: ${({ theme }) => theme.typography.fontSize.h2};
        margin-bottom: 30px;
        text-align: center;
    }

    p {
        font-size: ${({ theme }) => theme.typography.fontSize.small};
    }

    ul {
        background-color: #0a1a18;
        padding: 15px 30px;
        border-radius: 15px;
    }

    pre {
        margin: 0;
        font-size: ${({ theme }) => theme.typography.fontSize.small};
    }
`;
