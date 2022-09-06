import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';


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
  selector: 'app-cerrar-dia',
  templateUrl: './cerrar-dia.component.html',
  styleUrls: ['./cerrar-dia.component.scss']
})
export class CerrarDiaComponent implements OnInit {

  displayedColumns: string[] = ['fecha_inicio', 'fecha_fin', 'hora_inicio', 'nombre_usuario', 'acciones'];
  dataSource = ELEMENT_DATA;

  filtroPedidoForm = this._formBuilder.group({
    fecha           : [, []],
    hora_inicio     : [, []],
    hora_fin        : [, []],
  });

  constructor(private _formBuilder: FormBuilder) { }

  ngOnInit(): void {
  }

}
