import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-pedido',
  templateUrl: './pedido.component.html',
  styleUrls: ['./pedido.component.scss']
})
export class PedidoComponent implements OnInit {

  filtroPedidoForm = this._formBuilder.group({
    cliente           : [, []],
    tipo_concreto     : [, []],
    metros3           : [, []],
    valor             : [, []],
    plazo_pagos       : [, []],
    direccion_entrega : [, []],
    tipo_descarga     : [, []],
    fecha             : [, []],
    hora_cargue       : [, []],
    hora_obra         : [, []],
    vendedor          : [, []],
    conductor         : [, []],
    estado            : [, []],
    observaciones     : [, []],
  });

  constructor(private _formBuilder: FormBuilder) { }

  ngOnInit(): void {
  }

}
