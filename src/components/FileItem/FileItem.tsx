import React from 'react';
import * as Styled from './FileItem.styled';

type FileItemProps = {
    fileId: string;
};
export const FileItem: React.FC<FileItemProps> = ({ fileId }) => {
    return <Styled.FileItemWrapper className="file-item">{fileId}</Styled.FileItemWrapper>;
};
