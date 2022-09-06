import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-generar-excel',
  templateUrl: './generar-excel.component.html',
  styleUrls: ['./generar-excel.component.scss']
})
export class GenerarExcelComponent implements OnInit {

  filtroPedidoForm = this._formBuilder.group({
    fecha1     : [, []],
    fecha2     : [, []],
  });

  constructor(private _formBuilder: FormBuilder) { }

  ngOnInit(): void {
  }

}
