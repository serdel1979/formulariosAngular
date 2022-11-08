import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { EmailValidatorService } from 'src/app/shared/validator/email-validator.service';
//import { emailPattern, nompreApellidoPattern, noPuedeSerStrider } from 'src/app/shared/validaciones';
import { ValidatorService } from '../../../shared/validator/validator.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

 





  miFormulario: FormGroup = this.fb.group({
    nombre:['',[Validators.required, Validators.pattern(this.validatorService.nombreApellidoPattern)]],
    email:['',[Validators.required, Validators.pattern(this.validatorService.emailPattern)],[ this.emailValidator]],
    username:['',[Validators.required, this.validatorService.noPuedeSerStrider]],
    password:['',[Validators.required, Validators.minLength(6)]],
    passwordConfirm:['',[Validators.required]],
  },{
     validators:[this.validatorService.camposIguales('password','passwordConfirm')] 
  })

  constructor(private fb: FormBuilder, 
    private validatorService: ValidatorService,
    private emailValidator: EmailValidatorService) { }

  ngOnInit(): void {
    this.miFormulario.reset({
      nombre:'Sergio DeLuca',
      email: 'test1@test.com',
      username: 'El_enzo'
    })
  }

  campoNoValido(campo:string){
    return this.miFormulario.get(campo)?.invalid && this.miFormulario.get(campo)?.touched
  }

  submitForm(){
    console.log(this.miFormulario.value);

    this.miFormulario.markAllAsTouched();
  }
}
