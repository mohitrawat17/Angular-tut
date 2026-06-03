import { Component, computed, signal } from '@angular/core';

@Component({
  selector: 'app-signal-comp',
  imports: [],
  templateUrl: './signal-comp.html',
  styleUrl: './signal-comp.css',
})
export class SignalComp {
  firstName = signal('Mohit');
  lastName = signal('Rawat');

  fullName = computed(() => {
    return this.firstName() + ' ' + this.lastName();
  });

  changeName() {
    this.firstName.set('Virat');
    this.lastName.set('Kohli');
  }
}
