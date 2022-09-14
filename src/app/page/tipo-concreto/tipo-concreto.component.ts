import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { CambiarEstadoComponent } from '../despachos/cambiar-estado/cambiar-estado.component';


export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA = [
  {
    id: '01',
    nombre: 'Fernando',
    unidad_medida: 'Fernando Andrés Salas'
  },
];

@Component({
  selector: 'app-tipo-concreto',
  templateUrl: './tipo-concreto.component.html',
  styleUrls: ['./tipo-concreto.component.scss']
})
export class TipoConcretoComponent implements OnInit {

  displayedColumns: string[] = ['id','nombre', 'unidad_medida', 'acciones'];
  dataSource = ELEMENT_DATA;

  filtroPedidoForm = this._formBuilder.group({
    fecha1     : [, []],
    fecha2     : [, []],
    cliente     : [, []]
  });

  cambiarEstado() {
    const dialogRef = this._dialog.open(CambiarEstadoComponent, {
      minWidth: '500px',
      data:{}
    });
  
    dialogRef.afterClosed().subscribe((result: any) => {});
  }

  

  constructor(private _formBuilder: FormBuilder,public _dialog: MatDialog) { }

  ngOnInit(): void {
  }

}
