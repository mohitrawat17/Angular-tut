import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DataBinding } from "./components/data-binding/data-binding";
import { SignalComp } from "./components/signal-comp/signal-comp";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, DataBinding, SignalComp],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('ang20');
}
