import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { CerrarDiaComponent } from './cerrar-dia/cerrar-dia.component';
import { GenerarExcelComponent } from './generar-excel/generar-excel.component';
import { PedidoComponent } from './pedido/pedido.component';


export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA = [
  {
    cliente: 'Fernando',
    fecha_despacho: '12/12/2022',
    hora_cargue: '12:am',
    hora_obra: '12:am',
    ult_actualizacion: '12/12/2022',
    direccion: 'Cll 6 #4-27',
    observaciones: "Bla bla bla bla",
    descarga: 'fsdf',
    concreto: 'Primer',
    precio_concreto: 5000,
    m3: '300',
    precio_pedido: '100000',
    vendedor: 'Diego Medina',
    conductor: 'Carlos Pérez',
    estado: 1
  },
];

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.scss']
})

export class InicioComponent implements OnInit {

  displayedColumns2: string[] = ['position', 'name', 'weight', 'symbol'];
  displayedColumns: string[] = ['cliente', 'fecha_despacho', 'hora_cargue', 'hora_obra', 'ult_actualizacion', 'direccion', 'observaciones', 'descarga', 'concreto', 'precio_concreto', 'm3', 'precio_pedido', 'vendedor', 'conductor', 'estado', 'acciones'];
  dataSource = ELEMENT_DATA;


  filtroPedidoForm = this._formBuilder.group({
    fecha1     : [, []],
    fecha2     : [, []],
    cliente     : [, []]
  });

  constructor(private _formBuilder: FormBuilder,public _dialog: MatDialog,) { }

  
  generarExcelModal() {
    const dialogRef = this._dialog.open(GenerarExcelComponent, {
      minWidth: '500px',
      data:{}
    });
  
    dialogRef.afterClosed().subscribe((result: any) => {});
  }

  cerrarDiaModal() {
    const dialogRef = this._dialog.open(CerrarDiaComponent, {
      minWidth: '500px',
      data:{}
    });
  
    dialogRef.afterClosed().subscribe((result: any) => {});
  }

  pedidoModal() {
    const dialogRef = this._dialog.open(PedidoComponent, {
      minWidth: '500px',
      data:{}
    });
  
    dialogRef.afterClosed().subscribe((result: any) => {});
  }

  ngOnInit(): void {

  }

}
