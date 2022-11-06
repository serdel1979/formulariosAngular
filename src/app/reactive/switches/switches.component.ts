import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-switches',
  templateUrl: './switches.component.html',
  styleUrls: ['./switches.component.css']
})
export class SwitchesComponent implements OnInit {


  miFormulario: FormGroup = this.fb.group({
    genero: ['M', Validators.required],
    notificaciones: [true, Validators.required],
    terminos: [false, Validators.requiredTrue]
  });

  persona = {
    genero: 'F',
    notificaciones: false
  }

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
      this.miFormulario.reset({
        ...this.persona,
        condiciones: false
      });


      this.miFormulario.get('terminos')?.valueChanges.subscribe(campo=>{
        console.log(campo)
      })

      this.miFormulario.valueChanges.subscribe(form=>{
        console.log(form)
      })

  }
  
  guardar(){
    const formValue = {...this.miFormulario.value};
    delete formValue.terminos

    console.log(formValue);
  }

}
