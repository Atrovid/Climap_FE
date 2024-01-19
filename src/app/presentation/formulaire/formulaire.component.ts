import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-formulaire',
  standalone: true,
  imports: [FormsModule, NgIf],
  templateUrl: './formulaire.component.html',
  styleUrl: './formulaire.component.css'
})
export class FormulaireComponent {
  // protected sendForm = new FormGroup({
  //   name: new FormControl(),
  //   surname: new FormControl(),
  //   email: new FormControl(),
  // });
  protected sendOk = false;

  


  // constructor() {
  //   this.sendForm.valueChanges.subscribe(() => {
  //     this.sendOk = false;
  //   });
  // }
  
  send() {
    console.log("envoie Ok");
    this.sendOk = true;  
  }

  noSend() {
    console.log("cache message");
    this.sendOk = false;
  }
}

