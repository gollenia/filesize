declare type FileSize = {
    value: number;
    unit: 'byte' | 'kilobyte' | 'megabyte' | 'gigabyte' | 'terrabyte' | 'petabyte' | 'exabyte';
};
declare const fileSize: (bytes: number, physical?: boolean) => FileSize;
export default fileSize;
