export default interface IFileWriter{
    write(filePath: string | undefined): boolean;
}