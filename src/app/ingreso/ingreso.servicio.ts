import { Ingreso } from "./ingreso.model";

export class IngresoServicio{
    ingresos:Ingreso[]=[
        new Ingreso('salario', 4000),
        new Ingreso('venta de coche', 500)
    ];

    // creamos elmetodo eliminar registro
    eliminar(ingreso:Ingreso){

        // indice indicador del registro
        // indexOf nos indica el indice de nuestro array y del ingreso
        const indice:number = this.ingresos.indexOf(ingreso)

        /* la funcion splice nos elimina el 
        ingreso pasando el indice y elnumeor 
        de registros a eliminar apartir del
         indice*/
        this.ingresos.splice(indice, 1);
    }
}