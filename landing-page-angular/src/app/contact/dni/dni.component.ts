import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'dni-input',
  templateUrl: './dni.component.html',
  styleUrls: ['./dni.component.css']
})
export class DniComponent implements OnChanges {

  @Input() tipoDni: string = 'DNI';
  formularioDocumento: FormGroup;
  variableNueva: string = 'RICARDO';

  // Formulario reactivo 
  constructor(private form: FormBuilder) {
    this.formularioDocumento = this.form.group({
      dni: ['', [Validators.required, Validators.minLength(3)]],
    });
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.variableNueva = !changes?.['tipoDni'].firstChange ? changes?.['tipoDni'].currentValue : 'RICARDO';
  }

  hasErrors(contolName: string, errorType: string) {
    return this.formularioDocumento.get(contolName)?.hasError(errorType) && this.formularioDocumento.get(contolName)?.touched;
  }
}
