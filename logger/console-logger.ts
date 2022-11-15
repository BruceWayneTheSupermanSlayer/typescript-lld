import { LogObserver } from "./log-observer";

export class ConsoleLogger implements LogObserver {
  log(msg: string): void {
    console.log(`CONSOLE: `, msg);
  }
}
