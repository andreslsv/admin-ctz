import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { ApiService } from 'app/core/api/api.service';
import moment from 'moment';

@Component({
  selector: 'app-pedido',
  templateUrl: './pedido.component.html',
  styleUrls: ['./pedido.component.scss']
})
export class PedidoComponent implements OnInit {

  dataCliente:any[]=[];
  dataConcreto:any[]=[];
  dataVendedor:any[]=[];
  dataConductor:any[]=[];

  nombreCliente="";
  nombreVendedor="";
  nombreConductor="";
  tipoConcreto="";
  precioConcreto="0";

  pedidoForm = this._formBuilder.group({
    clienteId           : [, []],
    concretoId     : [, []],
    m3           : [, []],
    valor             : [, []],
    plazo_pagos       : [, []],
    direccion : [, []],
    descarga     : [, []],
    fecha_despacho             : [, []],
    hora_cargue       : [, []],
    hora_obra         : [, []],
    vendedoreId          : [, []],
    conductoreId         : [, []],
    estado            : [, []],
    observaciones     : [, []],
  });

  guardarPedido(){
    const nombreQuery ='pedido';
    var dataPedido = this.pedidoForm.value;
    dataPedido.cliente = this.nombreCliente;
    dataPedido.nombre_vendedor = this.nombreVendedor;
    dataPedido.nombre_conductor = this.nombreConductor;
    dataPedido.tipo_concreto = this.tipoConcreto;
    dataPedido.precio_concreto = this.precioConcreto;
    dataPedido.precio_pedido = parseInt(this.precioConcreto) * parseInt(dataPedido.m3);
    dataPedido.fecha_despacho = moment(dataPedido.fecha_despacho).format('MM-DD-YYYY');
    //dataPedido.hora_cargue = moment(dataPedido.hora_cargue).format('hh:mm');
    //dataPedido.hora_obra = moment(dataPedido.hora_obra).format('hh:mm');

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

  buscarClientes(){
    this.getClientes();
    this.dataCliente;
  }

  setNombreConductor(_nombreConductor){
    this.nombreConductor = `${_nombreConductor}`;
  }

  setNombreVendedor(_nombreVendedor){
    this.nombreVendedor = `${_nombreVendedor}`;
    console.log("Este es el nombre del vendedor =>", _nombreVendedor);
  }

  setNombreConcreto(_concreto){
    this.tipoConcreto = `${_concreto.nombre}`;
    this.precioConcreto = `${_concreto.precio}`
  }

  setNombreCliente(_nombreConductor){
    this.nombreCliente = `${_nombreConductor}`;
  }

  getConcretos(){
    const nombreQuery ='concreto';
    const queryParams=``;
  
    this._apiService.getData(nombreQuery,queryParams).
    subscribe((response) => {
      console.log("Esta es la respuesta de la data =>", response);
      //this.concreto$.next(response);
      this.dataConcreto = response;
     },
     error=>{
       console.log(error);
     }
     );
  }

  
  getVendedor(){
    const nombreQuery ='vendedor';

    const queryParams=``;
  
    this._apiService.getData(nombreQuery,queryParams).
    subscribe((response) => {
      console.log("Esta es la respuesta de la data =>", response);
      //this.concreto$.next(response);
      this.dataVendedor = response;
     },
     error=>{
       console.log(error);
     }
     );
  }

  getClientes(){
    const data = this.pedidoForm.value;
    const nombreQuery ='cliente';
    const limit = 20 ? `limit=${20}&`:"";
    const search_nombre = data.cliente ? `search_nombre=${data.cliente}`:"";
    const queryParams=`${search_nombre}`;

    this._apiService.getData(nombreQuery,queryParams).
    subscribe((response) => {
      console.log("Esta es la respuesta de la data =>", response);
      this.dataCliente=response;
      //this.concreto$.next(response);
     },
     error=>{
       console.log(error);
     }
     );
  }

  
  getConductor(){
    const nombreQuery ='conductor';
    const queryParams=``;
  
    this._apiService.getData(nombreQuery,queryParams).
    subscribe((response) => {
      console.log("Esta es la respuesta de la data =>", response);
      //this.concreto$.next(response);
      this.dataConductor = response;
     },
     error=>{
       console.log(error);
     }
     );
  }

  constructor(private _formBuilder: FormBuilder, private _apiService: ApiService, public dialogRef: MatDialogRef<PedidoComponent>) { }

  ngOnInit(): void {
    this.getClientes();
    this.dataCliente;

    this.getConcretos();
    this.dataConcreto;

    this.getVendedor();
    this.dataVendedor;

    this.getConductor();
    this.dataConductor;
  }

}
