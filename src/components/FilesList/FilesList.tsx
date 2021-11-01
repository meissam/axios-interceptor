import React from 'react';
import * as Styled from './FilesList.styled';
import { FileItem } from '@/components';
import { FileObject } from '@/types';

type FilesListProps = {
    files: FileObject[];
};
export const FilesList: React.FC<FilesListProps> = ({ files }) => {
    return (
        <Styled.FilesListWrapper>
            {files.map((file: FileObject) => (
                <FileItem fileId={file.id} key={file.id} />
            ))}
        </Styled.FilesListWrapper>
    );
};
