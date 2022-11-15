import { LogSubject } from "./log-subject";

export abstract class AbstractLogger {
  protected abstract level: number;
  protected _nextLoggingLevel: AbstractLogger | null = null;

  public set nextLoggingLevel(nextLevel: AbstractLogger) {
    this._nextLoggingLevel = nextLevel;
  }

  logMessage(level: number, msg: string, logSubject: LogSubject) {
    if (this.level <= level) {
      this.display(msg, logSubject);
    }
    if (this._nextLoggingLevel) {
      this._nextLoggingLevel.logMessage(level, msg, logSubject);
    }

   
  }

  public abstract display(msg: string, logSubject: LogSubject): void;
}
