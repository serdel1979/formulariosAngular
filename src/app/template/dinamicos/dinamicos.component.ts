import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-dinamicos',
  templateUrl: './dinamicos.component.html',
  styleUrls: ['./dinamicos.component.css']
})
export class DinamicosComponent implements OnInit {

  constructor() { }

  @ViewChild('miFormulario') miFormulario!: NgForm;


  ngOnInit(): void {
  }

  guardar(){
    console.log(this.miFormulario);
  }

 

}
