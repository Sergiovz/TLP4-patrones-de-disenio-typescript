import { ISubscriber } from "../interfaces/ISubscriber";

export class Student implements ISubscriber {
  private name: string;

  constructor(name: string) {
    this.name = name;
  }

  update(message: string): void {
    console.log(`[Alumno ${this.name}] Nueva notificación: ${message}`);
  }
}
