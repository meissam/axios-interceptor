import React from 'react';
import * as Styled from './Intro.styled';

export const Intro: React.FC = () => {
    return (
        <Styled.IntroWrapper className="intro">
            <h2>Test Batch Requests</h2>
            <p>
                This test button will batch these requests. It will cancel all requests but one and send just one
                request by new parameters:
            </p>
            <ul>
                <li>
                    <pre> {`apiClient.get(BATCH_URL, { params: { ids: ['fileid3'] } }) `}</pre>{' '}
                </li>
                <li>
                    <pre> {`apiClient.get(BATCH_URL, { params: { ids: ['fileid1', 'fileid2'] } })`}</pre>
                </li>
                <li>
                    <pre> {`apiClient.get(BATCH_URL, { params: { ids: ['fileid2'] } })`}</pre>
                </li>
                <li>
                    <pre> {`apiClient.get(BATCH_URL, { params: { ids: ['fileid4'] } })`}</pre>
                </li>
                <li>
                    <pre> {`apiClient.get(BATCH_URL, { params: { ids: ['fileid5'] } })`}</pre>
                </li>
                <li>
                    <pre> {`apiClient.get(BATCH_URL, { params: { ids: ['fileid4', 'fileid5'] } })`}</pre>
                </li>
            </ul>
        </Styled.IntroWrapper>
    );
};
