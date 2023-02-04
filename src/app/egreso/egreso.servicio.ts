import { Ingreso } from "../ingreso/ingreso.model";
import { Egreso } from "./egreso.model";

export class EgresoServicio{
    egresos:Egreso[] = [
        new Egreso('resta departamento', 900),
        new Egreso('ropa', 200)
    ];

    // definir funcion eliminar para rliminar egreso
    eliminar(egreso:Egreso){
        // indice indicador del registro
        // indexOf nos indica el indice de nuestro array y del egreso
        const indice:number = this.egresos.indexOf(egreso);
        /* la funcion splice nos elimina el 
        ingreso pasando el indice y elnumeor 
        de registros a eliminar apartir del
         indice*/
        this.egresos.splice(indice, 1);
    }
}