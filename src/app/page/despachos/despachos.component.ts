import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { CambiarEstadoComponent } from './cambiar-estado/cambiar-estado.component';



export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA = [
  {
    id_pedido: '01',
    cliente: 'Fernando',
    conductor: 'Fernando Andrés Salas',
    fecha_despacho: '06-05-2022',
    hora_despacho: '06:00 am',
    hora_llegada: '08:00 am',
    hora_descargue: '09:00 am',
    hora_fin: '10:00 am',
    estado:'2'
  },
];

@Component({
  selector: 'app-despachos',
  templateUrl: './despachos.component.html',
  styleUrls: ['./despachos.component.scss']
})
export class DespachosComponent implements OnInit {

  displayedColumns: string[] = ['id_pedido','cliente', 'conductor', 'fecha_despacho', 'hora_despacho', 'hora_llegada', 'hora_cargue', 'hora_fin', 'estado', 'acciones'];
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
