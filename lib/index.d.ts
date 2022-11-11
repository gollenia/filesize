declare type FileSize = {
    value: number;
    unit: 'byte' | 'kilobyte' | 'megabyte' | 'gigabyte' | 'terrabyte';
};
declare const fileSize: (bytes: number) => FileSize;
export default fileSize;
