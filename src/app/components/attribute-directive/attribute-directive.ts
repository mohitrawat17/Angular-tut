import { NgStyle, NgClass } from '@angular/common';
import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-attribute-directive',
  imports: [NgStyle, NgClass],
  templateUrl: './attribute-directive.html',
  styleUrl: './attribute-directive.css',
})
export class AttributeDirective {
  currentColor = signal<string>('')
  currentClass = signal<string>('')

  changeColor(color: string) {
    this.currentColor.set(color);
  }

  changeClass(className: string) {
    this.currentClass.set(className);
  }
}
