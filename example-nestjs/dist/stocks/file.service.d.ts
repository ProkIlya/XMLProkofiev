export declare class FileService<T> {
    private readonly filePath;
    constructor(filePath: string);
    read(): T;
    write(data: T): void;
}
