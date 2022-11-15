import { LogObserver } from "./log-observer";

export class LogSubject {
  private observersList: Map<number, LogObserver[] | null>;
  private observers: LogObserver[] | null;

  constructor() {
    this.observers = [];
    this.observersList = new Map<number, LogObserver[] | null>();
  }

  addObservers(level: number, observer: LogObserver) {
    this.observers?.push(observer);
    this.observersList.set(level, this.observers);
  }

  notifyAllObservers(level: number, msg: string) {
    const extractObservers = this.observersList.get(level);
    if (extractObservers) {
      extractObservers.forEach((observer) => observer.log(msg));
    }
  }
}
