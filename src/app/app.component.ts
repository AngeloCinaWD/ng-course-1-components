import { Component, ViewChild } from "@angular/core";
import { COURSES } from "../db-data";
import { Course } from "./model/course";
import { CourseCardComponent } from "./course-card/course-card.component";

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

  startDate = new Date();
  startDate2 = new Date("2024 09 08"); // creo data con stringa con anno mese giorno

  title = COURSES[0].description;

  price = 9.999934;

  rate = 0.67;

  // Per ottenere una reference ad un elemento nel template abbiamo bisogno del decoratore @ViewChild()
  // all'interno delle parentesi va definito come vogliamo ottenere la reference
  // passando il nome della classe del componente la variabile verrà popolata con un riferimento all'istanza del compoennte
  // il riferimento in questo modo viene associato al primo CourseCardComponent presente nel template, infatti se clicco su uno qualsiasi degli altri componenti vedo che in card c'è sempre il primo course
  @ViewChild(CourseCardComponent)
  card: CourseCardComponent;

  onCardClicked(course: Course) {
    console.log(course);
    // facendi il console log di card ottengo un riferimento ad una istanza del componente
    // le proprietà sono course, indice e count che ora non c'è perchè non è definita per questo compoennte
    // posso vedere tutte le sue prorietà e l'evento emesso (in questo caso courseSelected)
    console.log(this.card);
  }

  // funzione di tracciamento
  trackCourse(index: number, course: Course) {
    return course.id;
  }
}
