import { Component, OnInit } from '@angular/core';
import { Ingreso } from './ingreso.model';
import { IngresoServicio } from './ingreso.servicio';

@Component({
  selector: 'app-ingreso',
  templateUrl: './ingreso.component.html',
  styleUrls: ['./ingreso.component.css']
})
export class IngresoComponent implements OnInit {
  //definir variables 
  ingresos:Ingreso[] = [];




  constructor(private ingresoServicio:IngresoServicio) { }
    // intanciamos el servicio dentro la funcion OnInit
  ngOnInit(): void {
    this.ingresos = this.ingresoServicio.ingresos;
  }

  // definimos le metodo 1.eliminar registro
  eliminarRegistro(ingreso:Ingreso){
    this.ingresoServicio.eliminar(ingreso);
  }

}
