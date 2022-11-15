import { AbstractLogger } from "./abstract-logger";
import { LogSubject } from "./log-subject";

export class Debug extends AbstractLogger {
  protected level: number;

  constructor(level: number) {
    super();
    this.level = level;
  }

  public display(msg: string, logSubject: LogSubject): void {
    console.debug("DEBUG: ", msg, " ", new Date().toISOString());
    logSubject.notifyAllObservers(3, msg);
  }
}
