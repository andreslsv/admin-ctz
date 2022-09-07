import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { CambiarEstadoComponent } from '../despachos/cambiar-estado/cambiar-estado.component';
import { CambioEstadoCreditoComponent } from './cambio-estado-credito/cambio-estado-credito.component';
import { CrearPagoComponent } from './crear-pago/crear-pago.component';
import { ListaPagosComponent } from './lista-pagos/lista-pagos.component';



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
    fecha_despacho: '12-12-2020',
    estado_pedido:'1',
    valor_pedido:'20000',
    ultimo_pago:'12-02-2020',
    saldo:'10000',
    fecha_pago: '12-12-2022',
    estado_credito:'3'
  },
];

@Component({
  selector: 'app-pagos',
  templateUrl: './pagos.component.html',
  styleUrls: ['./pagos.component.scss']
})
export class PagosComponent implements OnInit {

  displayedColumns: string[] = ['id_pedido','cliente','fecha_despacho','estado_pedido','valor_pedido','ultimo_pago','saldo','fecha_pago','estado_credito','estado','acciones'];
  dataSource = ELEMENT_DATA;

  filtroPedidoForm = this._formBuilder.group({
    fecha1     : [, []],
    fecha2     : [, []],
    cliente     : [, []]
  });

  cambiarEstadoModal() {
    const dialogRef = this._dialog.open(CambioEstadoCreditoComponent, {
      minWidth: '500px',
      data:{}
    });
  
    dialogRef.afterClosed().subscribe((result: any) => {});
  }

  crearPagoModal() {
    const dialogRef = this._dialog.open(CrearPagoComponent, {
      minWidth: '500px',
      data:{}
    });
  
    dialogRef.afterClosed().subscribe((result: any) => {});
  }

  listaPagoModal() {
    const dialogRef = this._dialog.open(ListaPagosComponent, {
      minWidth: '500px',
      data:{}
    });
  
    dialogRef.afterClosed().subscribe((result: any) => {});
  }

  constructor(private _formBuilder: FormBuilder,public _dialog: MatDialog) { }

  ngOnInit(): void {
  }

}
