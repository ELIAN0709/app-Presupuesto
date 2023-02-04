import { Component, Input, OnInit } from '@angular/core';
import { Egreso } from './egreso.model';
import { EgresoServicio } from './egreso.servicio';

@Component({
  selector: 'app-egreso',
  templateUrl: './egreso.component.html',
  styleUrls: ['./egreso.component.css']
})
export class EgresoComponent implements OnInit {
  // declaramos el array para poder acceder a los valores de tipo egresos
  egresos:Egreso[] = [];

  // definimos el atributo para recivir el valor
  @Input() ingresoTotal:number;
  
  // instanciamos el servisio para que se pueda usar 
  constructor(private egresoServicio:EgresoServicio) { }
  
  ngOnInit(): void {
    // inicializamos el arreglo
    this.egresos = this.egresoServicio.egresos;
  }

  // definimos un metodo 1.eliminar egreso
  eliminarEgreso(egreso:Egreso){
    this.egresoServicio.eliminar(egreso);
  }

  // definimos el metodo calcular porcentaje
  calcularPorcentaje(egreso:Egreso){
    return egreso.valor/this.ingresoTotal;
  }
}
