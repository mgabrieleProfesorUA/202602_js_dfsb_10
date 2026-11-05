export default class NuevoErrorDefinido {
    mensaje: string;

    constructor(mensaje: string){
        this.mensaje = mensaje;
    }

    conInformacion() {
        return {mensaje: this.mensaje};
    }
}