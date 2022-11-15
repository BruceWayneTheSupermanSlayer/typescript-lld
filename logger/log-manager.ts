import { AbstractLogger } from "./abstract-logger";
import { ConsoleLogger } from "./console-logger";
import { Debug } from "./debug-logger";
import { ErrorLogger } from "./error-logger";
import { FileLogger } from "./file-logger";
import { Info } from "./info-logger";
import { LogSubject } from "./log-subject";

export class LogManager {
  static buildChainOfLogger(): AbstractLogger {
    const infoLogger = new Info(1);
    const errorLogger = new ErrorLogger(2);
    const debugLogger = new Debug(3);

    infoLogger.nextLoggingLevel = errorLogger;
    errorLogger.nextLoggingLevel = debugLogger;

    return infoLogger;
  }

  static buildLogSubjects(): LogSubject {
    const logSubject = new LogSubject();

    const consoleLogger = new ConsoleLogger();
    const fileLogger = new FileLogger();

    logSubject.addObservers(1, consoleLogger);
    logSubject.addObservers(2, fileLogger);
    logSubject.addObservers(2, consoleLogger);

    return logSubject;
  }
}
