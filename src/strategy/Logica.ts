import AzureWriter from "./AzureWriter.ts";
import DiscoWriter from "./DiscoWriter.ts";
import Writer from "./Writer.ts";

let tamanio = 1000; //1000 MB

if(tamanio < 1000)
{
    const writer = new Writer(new DiscoWriter());
    writer.write("Ruta del archivo");
}
else
{
    const writer = new Writer(new AzureWriter());
    writer.write("Completando el archivo en la nube");
}