import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'app/core/api/api.service';

@Component({
  selector: 'app-crear',
  templateUrl: './crear.component.html',
  styleUrls: ['./crear.component.scss']
})
export class CrearComponent implements OnInit {

  constructor(private _sanitizer: DomSanitizer, private _formBuilder: FormBuilder,private _route: ActivatedRoute,private _apiService: ApiService,public _dialog: MatDialog,private _router:Router,) { }


  perfilForm = this._formBuilder.group({
    tipo_documento     : [, [Validators.required]],
    documento     : [, [Validators.required]],
    direccion     : [, [Validators.required]],
    email     : [, [Validators.required]],
    telefono     : [, [Validators.required]],
    nombres     : [, [Validators.required]],
    apellidos     : [, [Validators.required]],
    nickname     : [, [Validators.required]],
    placa     : [, [Validators.required]],
    fecha_ingreso     : [, [Validators.required]],
    password_1     : [, [Validators.required]],
    password_2     : [, [Validators.required]],
    role : [,[Validators.required]]
  });
  
  //imgPerfil: any;

  irListaUsuarios() {
    this._router.navigate([`/usuarios`]);
  }

  guardarUsuario(){
    const nombreQuery ='user';
    const dataUsuario = this.perfilForm.value;

    const queryParams=`search:"",orderBy:"id",ordenar:"desc",take:10`;
    const queryProps='id,nombre,fecha,estado,hora_inicio';
  
    this._apiService.setData(nombreQuery,dataUsuario).
    subscribe((response) => {
      console.log("Esta es la respuesta de la data =>", response);
      this.irListaUsuarios();
     },
     error=>{
       console.log(error);
     }
     );
  }

  ngOnInit(): void {
  }

}
