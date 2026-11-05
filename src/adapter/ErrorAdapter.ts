import NuevoErrorDefinido from "./NuevoErrorDefinido.ts";

export default class ErrorAdapter{
    mensaje: string;
    constructor(mensaje: string){
        this.mensaje = mensaje;
    }

    serialize(): string {
        const e = new NuevoErrorDefinido(this.mensaje).conInformacion();
        return e.mensaje;
    }

}