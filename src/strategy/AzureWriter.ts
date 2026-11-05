import type IFileWriter from "../interface/IFileWriter.ts";

export default class AzureWriter implements IFileWriter{
    write(): boolean{
        console.log("Escribiendo el archivo a la nube del Azure");
        return true;
    }
}