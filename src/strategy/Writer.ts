import type IFileWriter from "../interface/IFileWriter.ts";

export default class Writer{
    protected writer;
    constructor(writer: IFileWriter){
        this.writer = writer;
    }

    write(filePath: string): boolean{
        return this.writer.write(filePath);
    }
}