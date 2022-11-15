import { AbstractLogger } from "./abstract-logger";
import { LogSubject } from "./log-subject";

export class ErrorLogger extends AbstractLogger {
  protected level: number;

  constructor(level: number) {
    super();
    this.level = level;
  }
  public display(msg: string, logSubject: LogSubject): void {
    console.error(`ERROR: `, msg, " ", new Date().toISOString());
    logSubject.notifyAllObservers(2, msg);
  }
}
