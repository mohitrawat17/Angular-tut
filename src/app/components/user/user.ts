import { Component } from '@angular/core';
import { Admin } from "../admin/admin";

@Component({
  selector: 'app-user',
  imports: [Admin],
  templateUrl: './user.html',
  styleUrl: './user.css',
})
export class User {
  name = "Mohit"
  age = "24"
}
