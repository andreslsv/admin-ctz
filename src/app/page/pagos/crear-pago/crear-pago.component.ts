import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-crear-pago',
  templateUrl: './crear-pago.component.html',
  styleUrls: ['./crear-pago.component.scss']
})
export class CrearPagoComponent implements OnInit {

  filtroPedidoForm = this._formBuilder.group({
    fecha           : [, []],
    modo_pago       : [, []],
    valor           : [, []],
    observaciones   : [, []]
  });

  constructor(private _formBuilder: FormBuilder) { }

  ngOnInit(): void {
  }

}
