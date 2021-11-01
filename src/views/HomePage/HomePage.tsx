import React from 'react';
import * as Styled from './HomePage.styled';
import { Button, FilesList, Loading } from '@/components';
import { BATCH_URL, client } from '@/utils';
import { FileObject, ResponseDataItems } from '@/types';

export const HomePage: React.FC = () => {
    const apiClient = client();

    const [files, setFiles] = React.useState<FileObject[]>([]);
    const [loading, setLoading] = React.useState<boolean>(false);

    const handleTestRequests = async () => {
        setLoading(true);
        await Promise.allSettled([
            apiClient.get(BATCH_URL, { params: { ids: ['fileid3'] } }),
            apiClient.get(BATCH_URL, { params: { ids: ['fileid1', 'fileid2'] } }),
            apiClient.get(BATCH_URL, { params: { ids: ['fileid2'] } }),
            apiClient.get(BATCH_URL, { params: { ids: ['fileid4'] } }),
            apiClient.get(BATCH_URL, { params: { ids: ['fileid5'] } }),
            apiClient.get(BATCH_URL, { params: { ids: ['fileid4', 'fileid5'] } }),
        ]).then((responses) => {
            console.log(responses);

            for (const response of responses) {
                if (response.status === 'fulfilled') {
                    const data: ResponseDataItems = response.value.data;
                    setLoading(false);

                    setFiles(data.items);
                }
            }
        });
    };

    React.useEffect(() => {
        console.log('files changed');
    }, [files]);

    return (
        <Styled.HomepageWrapper className="home-page">
            <h2>Test Your Request</h2>
            <p>here is the requests</p>
            {loading && <Loading />}
            <FilesList files={files} />
            <Button text="Test Reuests" onClick={handleTestRequests} />
        </Styled.HomepageWrapper>
    );
};
