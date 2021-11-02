import React from 'react';
import * as Styled from './HomePage.styled';
import { Alert, Button, FilesList, Intro, Loading } from '@/components';
import { BATCH_URL, client } from '@/utils';
import { FileObject, ResponseDataItems } from '@/types';

export const HomePage: React.FC = () => {
    const apiClient = client();

    const [files, setFiles] = React.useState<FileObject[]>([]);
    const [notFoundFiles, setNotFoundFiles] = React.useState<FileObject[]>([]);
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
        ])
            .then((responses) => {
                console.log(responses);

                for (const response of responses) {
                    if (response.status === 'fulfilled') {
                        const data: ResponseDataItems = response.value.data;
                        setFiles(data.items);
                        setNotFoundFiles(data.notFoundItems);
                    }
                }
            })
            .finally(() => {
                setLoading(false);
            });
    };

    return (
        <Styled.HomepageWrapper className="home-page">
            <Intro />
            {loading && <Loading />}
            {files.length > 0 && <FilesList files={files} />}
            {notFoundFiles.length > 0 &&
                notFoundFiles.map((file) => <Alert key={file.id} message={`${file.id} Not found`} varient="danger" />)}
            <Button text="Test Reuests" onClick={handleTestRequests} />
        </Styled.HomepageWrapper>
    );
};
