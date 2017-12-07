import { Component } from '@angular/core';
import { Student } from '../studInterface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Admin';
  student: string;

  studentListing(stud: string) {
    this.student = stud;
  }
}
