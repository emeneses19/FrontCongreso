import { DateTime } from "luxon";

export class CongresoModel {
    codigoCongreso: string;
    nombre: string;
    abierto: Boolean;
    fechaApertura: DateTime;
    fechaCierre: DateTime;
    constructor() {
        this.codigoCongreso = '';
        this.nombre = '';
        this.abierto = true;
        this.fechaApertura = DateTime.now();
        this.fechaCierre = DateTime.now();
    }
}
