import { Component, OnInit, Input } from '@angular/core';
import { Teacher } from '../../teacherInterface';

@Component({
  selector: 'app-teacher-details',
  templateUrl: './teacher-details.component.html',
  styleUrls: ['./teacher-details.component.css']
})
export class TeacherDetailsComponent implements OnInit {
@Input() teacher: Teacher;
  constructor() { }

  ngOnInit() {
  }

}
