import { Professor } from "./clases/Professor";
import { Student } from "./clases/Student";

export { IPublisher } from "./interfaces/IPublisher";
export { ISubscriber } from "./interfaces/ISubscriber";
export { Professor } from "./clases/Professor";
export { Student } from "./clases/Student";

export function runObserver(): void {
  console.log("=== Patrón Observer: Profesor -> Estudiantes ===");

  const professor = new Professor("Profesor Ale");
  const student1 = new Student("Jhon Doe");
  const student2 = new Student("Jane Adams");
  const student3 = new Student("Alice Smith");

  professor.subscribe(student1);
  professor.subscribe(student2);
  professor.subscribe(student3);

  professor.publish(
    "TP1: Implementar patrón Observer - fecha de entrega viernes 18:00."
  );

  professor.unsubscribe(student2);
  professor.unsubscribe(student3);

  professor.publish("Recordatorio: TP1 vence hoy a las 18:00.");
}
