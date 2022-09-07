import { Component, OnInit } from '@angular/core';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA = [
  {
    valor_pedidos: '2000',
    abonos: '500000',
    saldo: '100'
  },
];

@Component({
  selector: 'app-lista-pagos',
  templateUrl: './lista-pagos.component.html',
  styleUrls: ['./lista-pagos.component.scss']
})
export class ListaPagosComponent implements OnInit {

  displayedColumns: string[] = ['valor_pedidos', 'abonos', 'saldo'];
  dataSource = ELEMENT_DATA;

  constructor() { }

  ngOnInit(): void {
  }

}
