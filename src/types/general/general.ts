export type RequestsMap = {
    [url: string]: number;
};

export type FileObject = {
    id: string;
};

export type ResponseDataItems = {
    items: FileObject[];
    notFoundItems: FileObject[];
};
