import { IPublisher } from "../interfaces/IPublisher.js";
import { ISubscriber } from "../interfaces/ISubscriber.js";

export class Professor implements IPublisher {
  private subscribers: ISubscriber[] = [];
  private name: string;

  constructor(name: string) {
    this.name = name;
  }

  subscribe(subscriber: ISubscriber): void {
    this.subscribers.push(subscriber);
  }

  unsubscribe(subscriber: ISubscriber): void {
    const index = this.subscribers.indexOf(subscriber);
    if (index > -1) {
      this.subscribers.splice(index, 1);
    }
  }

  publish(message: string): void {
    console.log(`[${this.name}] Publicó: ${message}`);
    this.subscribers.forEach((subscriber) => subscriber.update(message));
  }
}
