import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styleUrls: ['./basicos.component.css']
})
export class BasicosComponent {


  //miFormulario: FormGroup = new FormGroup({
  //  'nombre': new FormControl('RTX 4080TI'),
  //  'precio':  new FormControl(1500),
  //  'existencias':  new FormControl(5)
  //})

  miFormulario: FormGroup = this.fb.group({
    'nombre': ['RTX 4080 TI'],
    'precio': [5],
    'existencias': [10]
  });

  constructor(private fb: FormBuilder) { }

 


 

}
