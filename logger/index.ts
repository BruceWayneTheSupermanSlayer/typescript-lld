import { Logger } from "./logger";

const logger = Logger.getInstance();

logger.info(`info log`);
logger.error("error log");
logger.debug(`debug log`);
