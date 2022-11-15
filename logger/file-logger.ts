import { LogObserver } from "./log-observer";
import { appendFile, closeSync, existsSync, openSync } from "fs";
export class FileLogger implements LogObserver {
  private filename: string;
  constructor(filename?: string) {
    this.filename =
      filename || __dirname + `${new Date().getDate().toString()}-logger.txt`;
    this.createFileForlogging();
  }

  log(msg: string): void {
    const message = `[INFO]:- ${msg} - ${new Date().toISOString()}\n`;
    appendFile(this.filename, message, { encoding: "utf-8" }, (err) => {
      if (err) {
        throw new Error(`error while writing to file ${err}`);
      }
    });
  }

  private createFileForlogging() {
    if (!existsSync(this.filename)) {
      closeSync(openSync(this.filename, "w"));
    }
  }
}
