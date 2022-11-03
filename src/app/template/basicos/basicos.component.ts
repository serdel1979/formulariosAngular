import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styleUrls: ['./basicos.component.css']
})
export class BasicosComponent implements OnInit {


  @ViewChild('miFormulario') miFormulario!: NgForm;


  initForm = {
    producto: '',
    precio: 10,
    existencia: 10
  }

  constructor() { }

  ngOnInit(): void {
  }

  //guardar(formulario: NgForm){
  guardar(){  
    console.log(this.miFormulario);

    this.miFormulario.resetForm({
      precio: 0,
      existencia: 0
    })
  }

  nombreValido(): boolean{
    return (this.miFormulario?.controls['producto']?.invalid && this.miFormulario?.controls['producto']?.touched)?true:false
  }

  numeroValido(): boolean{
    return (this.miFormulario?.controls['precio']?.invalid && this.miFormulario?.controls['precio']?.touched && this.miFormulario?.controls['precio']?.value < 0)?true:false
  }

}
