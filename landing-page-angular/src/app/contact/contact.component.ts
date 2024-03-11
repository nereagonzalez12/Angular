import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit, OnDestroy {

  // Formulario tipo plantilla
  // public user: any = {
  //   name: '',
  //   email: ''
  // };

  formularioContacto: FormGroup;
  tipoDni: string = '';
  mostrarDNI: boolean = false;
  // usuarioActivo: any = {
  //   nombre: 'Pedro',
  //   apellido: 'Perez',
  //   dni: '09987580F',
  // };

  // Formulario reactivo 
  constructor(private form: FormBuilder) {
    this.formularioContacto = this.form.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      lastName: ['', [Validators.required, Validators.minLength(3)]],
      tipoDni: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
    });
  }

  // ngOnInit(): void {
  //   // Validar desde aquí
  //   //this.formularioContacto.get('apellido')?.setValidators([Validators.required, Validators.minLength(3)]);
  //   // Limpiar validación
  //   this.formularioContacto.get('apellido')?.clearValidators();
  //   this.formularioContacto.get('apellido')?.updateValueAndValidity();
  //   this.formularioContacto.patchValue({
  //     name: this.usuarioActivo.nombre,
  //     // lastName: this.usuarioActivo.apellido,
  //     dni: this.usuarioActivo.dni,

  //   });
  //   this.formularioContacto.get('name')?.disable();
  //   // this.formularioContacto.get('lastName')?.disable();
  //   this.formularioContacto.get('dni')?.disable();
  // }

  ngOnInit(): void {
    // this.formularioContacto.valueChanges.subscribe(valor => {
    //   console.log(valor);
    // });
    this.formularioContacto.get('name')?.setValue('Juan');
    this.formularioContacto.get('name')?.disable();
    this.formularioContacto.get('tipoDni')?.valueChanges.subscribe(value => {
      this.mostrarDNI = value != '';
      this.tipoDni = value;
    });
  }

  ngOnDestroy(): void {
    console.log('Se destruyó el componente');
  }

  enviar() {
    //console.log(this.user);
    console.log(this.formularioContacto);
  }
  hasErrors(contolName: string, errorType: string) {
    return this.formularioContacto.get(contolName)?.hasError(errorType) && this.formularioContacto.get(contolName)?.touched;
  }

}
