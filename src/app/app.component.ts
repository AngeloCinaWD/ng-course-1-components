import { Component } from "@angular/core";
import { COURSES } from "../db-data";
import { Course } from "./model/course";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  // ognuna di queste proprietà è un oggetto che può essere utilizzato nel template del componente, quindi in app.component.html
  // coreCourse = COURSES[0];

  // rxjsCourse = COURSES[1];

  // ngrxCourse = COURSES[2];

  // commento le proprietà singole
  // creo una proprietà courses che sarà un array di Course
  courses: Course[] = COURSES;

  onCardClicked(course: Course) {
    console.log(course);
  }

  // funzione di tracciamento
  trackCourse(index: number, course: Course) {
    return course.id;
  }
}
