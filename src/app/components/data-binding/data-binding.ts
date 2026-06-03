import { Component } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  imports: [],
  templateUrl: './data-binding.html',
  styleUrl: './data-binding.css',
})
export class DataBinding {
  name: string = "Mohit"
  inputType: string = "text"
  maxLength: number = 10

  changeName() {
    this.name = "John"
    alert("Name has been changed !")
  }
}
