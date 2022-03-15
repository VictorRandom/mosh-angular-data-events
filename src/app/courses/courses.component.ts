import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {

  title = "List of Courses";
  imageUrl = "https://picsum.photos/400/200"

  constructor() { }

  ngOnInit(): void {
  }

}
