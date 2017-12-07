import { Component, OnInit } from '@angular/core';
import { Teacher } from '../../teacherInterface';
import { teacherList } from '../../mock-teacher';

@Component({
  selector: 'app-teacher',
  templateUrl: './teacher.component.html',
  styleUrls: ['./teacher.component.css']
})
export class TeacherComponent implements OnInit {
  teacherDetails: Teacher[] = teacherList;
  selectedTeacher: Teacher;
  constructor() { }
  teacherDisplay(teacher: Teacher) {
     this.selectedTeacher = teacher;
  }
  ngOnInit() {
  }

}
