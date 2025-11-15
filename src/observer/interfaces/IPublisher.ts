import { ISubscriber } from './ISubscriber.js';

export interface IPublisher {
  subscribe(subscriber: ISubscriber): void;
  unsubscribe(subscriber: ISubscriber): void;
  publish(message: string): void;
}