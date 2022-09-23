import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { ApiService } from 'app/core/api/api.service';

@Component({
  selector: 'app-concreto',
  templateUrl: './concreto.component.html',
  styleUrls: ['./concreto.component.scss']
})
export class ConcretoComponent implements OnInit {

  filtroPedidoForm = this._formBuilder.group({
    nombre       : [, []],
    precio       : [, []],
    unidad_medida       : [, []]
  });

  setConcretos(){
    const nombreQuery ='concreto';
    const dataConcreto = this.filtroPedidoForm.value;


    const queryParams=`search:"",orderBy:"id",ordenar:"desc",take:10`;
    const queryProps='id,nombre,fecha,estado,hora_inicio';
  
    this._apiService.setData(nombreQuery,dataConcreto).
    subscribe((response) => {
      console.log("Esta es la respuesta de la data =>", response);
      this.cerrarModal();
     },
     error=>{
       console.log(error);
     }
     );
  }


  cerrarModal(){
    this.dialogRef.close({});
  }

  constructor(private _formBuilder: FormBuilder, private _apiService: ApiService,public dialogRef: MatDialogRef<ConcretoComponent>) { }

  ngOnInit(): void {
  }

}
