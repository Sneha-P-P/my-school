import { Component, OnInit } from '@angular/core';
import { Student } from '../../studInterface';
import { studentsList } from '../../mock-students';


@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})

export class StudentComponent implements OnInit {
  studentDetails: Student[] = studentsList;
  selectedStudent: Student;
  constructor() { }
  studentDisplay(student: Student) {
    this.selectedStudent = student;
  }
  ngOnInit() {
  }

}
