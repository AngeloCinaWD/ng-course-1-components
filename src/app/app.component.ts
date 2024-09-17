import { Component, ElementRef, ViewChild } from "@angular/core";
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

  // interrogo un elemento nel template tramite nome dato con TEMPLATE REFERENCE, lo richiamo inserendo il nome come stringa
  // il collegamento tramite template reference è utile quando si hanno multipli elementi e se ne vuole interrogare uno in particolare
  @ViewChild("cardRef")
  card2: CourseCardComponent;

  // il nome della variabile può essere uno qualsiasi, quello che conta è quello passato al ViewChild decorator
  // con la template reference ed il tipo ElementRef ottengo l'html
  @ViewChild("container")
  container: ElementRef;

  // posso ottenere un collegamento all'html di un component e non alla sua istanza indicandolo in un oggetto nel decorator
  // la proprietà read è di default istance
  @ViewChild("cardRef", { read: ElementRef })
  collegamentoHTML: ElementRef;

  // per interrogare elementi nativi del DOM, pieno html, utilizzo il tipo ElementRef

  onCardClicked(course: Course) {
    console.log(course);
    // facendo il console log di card ottengo un riferimento ad una istanza del componente
    // le proprietà sono course, indice e count che ora non c'è perchè non è definita per questo compoennte
    // posso vedere tutte le sue prorietà e l'evento emesso (in questo caso courseSelected)
    console.log(this.card);
    console.log(this.card2);
    // l'oggetto container restituisce al suo interno un ElementRef con una prorpietà nativeElement che contiene una serie di proprietà legate all'html dell'elemento
    console.log(this.container.nativeElement);
    console.log(this.container.nativeElement.baseURI);
    console.log(this.container.nativeElement.children);

    // ottengo sempre un nativeElement
    console.log(this.collegamentoHTML);
  }

  // funzione di tracciamento
  trackCourse(index: number, course: Course) {
    return course.id;
  }
}
