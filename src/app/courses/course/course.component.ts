import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Course } from '../model/course';
import { CoursesService } from '../services/courses.service';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.scss']
})
export class CourseComponent implements OnInit {

  courses$: Observable<Course[]>;
  displayedColumns = ['name','categoria'];

  constructor(private coursesService: CoursesService) {
    this.courses$ = this.coursesService.list();
  }

  ngOnInit(): void {

  }

}
