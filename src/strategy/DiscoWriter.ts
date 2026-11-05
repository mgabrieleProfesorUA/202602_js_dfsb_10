import type IFileWriter from "../interface/IFileWriter.ts";

export default class DiscoWriter implements IFileWriter{
    write(filePath: string): boolean {
        console.log(`Escribiendo en el disco ${filePath}`);
        return true;
    }
}