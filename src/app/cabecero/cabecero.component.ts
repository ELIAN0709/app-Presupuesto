import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-cabecero',
  templateUrl: './cabecero.component.html',
  styleUrls: ['./cabecero.component.css']
})
export class CabeceroComponent implements OnInit {
  // definimos las variables para poder recivir la infrormacion
  // con el decorador (@Input) quien va a revicir la informacion
  @Input() presupuestoTotal:number;
  @Input() ingresoTotal:number;
  @Input() egresoTotal:number;
  @Input() porcentaje:number;
  
  
  
  constructor() { }

  ngOnInit(): void {
  }

}
