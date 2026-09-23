import { Course } from './../course';
import { Component, signal } from '@angular/core'

@Component({
  selector: 'app-courses-lister',
  imports: [],
  templateUrl: './courses-lister.component.html',
  styleUrl: './courses-lister.component.scss'
})
export class CoursesListerComponent {
  courses = signal<Course[]>([
    { id: 1, title: 'Curso Angular', hours: 10 },
    { id: 2, title: 'Curso HTML', hours: 15 },
    { id: 3, title: 'Curso CSS', hours: 20 },
    { id: 4, title: 'Curso JavaScript', hours: 25 },
    { id: 5, title: 'Curso TypeScript', hours: 30 },
    { id: 6, title: 'Curso React', hours: 35 }
  ]);
}
