import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { ApiService } from 'app/core/api/api.service';

@Component({
  selector: 'app-pedido',
  templateUrl: './pedido.component.html',
  styleUrls: ['./pedido.component.scss']
})
export class PedidoComponent implements OnInit {

  pedidoForm = this._formBuilder.group({
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

  guardarPedido(){
    const nombreQuery ='pedido';
    const dataPedido = this.pedidoForm.value;

    const queryParams=`search:"",orderBy:"id",ordenar:"desc",take:10`;
    const queryProps='id,nombre,fecha,estado,hora_inicio';
  
    this._apiService.setData(nombreQuery,dataPedido).
    subscribe((response) => {
      console.log("Esta es la respuesta de la data =>", response);
      this.dialogRef.close({});
     },
     error=>{
       console.log(error);
     }
     );
  }

  constructor(private _formBuilder: FormBuilder, private _apiService: ApiService, public dialogRef: MatDialogRef<PedidoComponent>) { }

  ngOnInit(): void {
  }

}
