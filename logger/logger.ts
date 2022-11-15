import { AbstractLogger } from "./abstract-logger";
import { LogManager } from "./log-manager";
import { LogSubject } from "./log-subject";

export class Logger {
  private static instance: Logger;
  private loggerChain: AbstractLogger;
  private readonly logSubject: LogSubject;
  private constructor() {
    this.loggerChain = LogManager.buildChainOfLogger();
    this.logSubject = LogManager.buildLogSubjects();
  }

  static getInstance() {
    if (!Logger.instance) {
      Logger.instance = new Logger();
    }
    return Logger.instance;
  }

  private createMessage(level: number, msg: string) {
    this.loggerChain.logMessage(level, msg, this.logSubject);
  }

  public info(msg: string): void {
    this.createMessage(1, msg);
  }

  public error(msg: string): void {
    this.createMessage(2, msg);
  }

  public debug(msg: string): void {
    this.createMessage(3, msg);
  }
}
