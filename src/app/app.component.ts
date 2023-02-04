import { Component } from '@angular/core';
import { Egreso } from './egreso/egreso.model';
import { EgresoServicio } from './egreso/egreso.servicio';
import { Ingreso } from './ingreso/ingreso.model';
import { IngresoServicio } from './ingreso/ingreso.servicio';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  // definimos las variables generales
  ingresos:Ingreso[] = [];
  egresos:Egreso[] = [];
  // definimos el constructor para instanciar los servicios
  constructor(private ingresoServicio:IngresoServicio,
              private egresoServicio:EgresoServicio){
                this.ingresos = ingresoServicio.ingresos;
                this.egresos = egresoServicio.egresos;
              }

// definimos el metodo 1.INGRESO 
  getIngresoTotal(){
    let ingresoTotal:number=0;
    this.ingresos.forEach(ingreso => {
      ingresoTotal += ingreso.valor;
    });
    return ingresoTotal;
  }

  // definimos el metodos 2.EGRESO
  getEgresoTotal(){
    let egresoTotal:number=0;
    this.egresos.forEach(egreso => {
      egresoTotal += egreso.valor;
    });
    return egresoTotal;
  }

  // definimos el metodo 3.PORCENTAJE
  getPorcentajeTotal(){
    return this.getEgresoTotal()/this.getIngresoTotal();
  }

  // definimos el metodo 4.PRESUPUESTO
  getPresupuestoTotal(){
    return this.getIngresoTotal() - this.getEgresoTotal();
  }
}
