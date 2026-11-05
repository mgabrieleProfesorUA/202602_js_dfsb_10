import type IError from '../interface/IError.ts'

export default class ErrorDefinido implements IError{
    mensaje: string;

    constructor(mensaje: string){
        this.mensaje = mensaje;
    }

    serialize(): string {
        return this.mensaje;
    }
}