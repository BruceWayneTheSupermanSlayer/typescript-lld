import { AbstractLogger } from "./abstract-logger";
import { LogSubject } from "./log-subject";

export class Info extends AbstractLogger {
  level: number;

  constructor(level: number) {
    super();
    this.level = level;
  }

  public override display(msg: string, logSubject: LogSubject): void {
    console.log("INFO: ", msg, " " + new Date().toISOString());
    logSubject.notifyAllObservers(1, msg);
  }
}
