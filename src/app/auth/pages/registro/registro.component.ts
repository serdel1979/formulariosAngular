import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  nompreApellidoPattern: string = '([a-zA-Z]+) ([a-zA-Z]+)';

  miFormulario: FormGroup = this.fb.group({
    nombre:['',[Validators.required, Validators.pattern(this.nompreApellidoPattern)]]
  })

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  }

  campoNoValido(campo:string){
    return this.miFormulario.get(campo)?.invalid && this.miFormulario.get(campo)?.touched
  }

  submitForm(){
    console.log(this.miFormulario.value);

    this.miFormulario.markAllAsTouched();
  }
}
