import config from '../../config.cjs';

const { logLevel } = config();

function logForLevel(level, ...args) {
  if (level <= logLevel) {
    // eslint-disable-next-line no-console
    console.log(...args);
  }
}

export default {
  // Use for when you want extra debugging
  debug(...args) {
    logForLevel(2, ...args);
  },
  // Use for formatted errors
  error(...args) {
    logForLevel(0, '[ERROR]', ...args);
  },
  // Use for things you usually want logged
  info(...args) {
    logForLevel(1, ...args);
  },
  // Use for messages you always want logged
  log(...args) {
    logForLevel(0, ...args);
  },
  // Use for entering and exiting functions. Useful for when you want to trace non-errors
  trace(...args) {
    logForLevel(3, ...args);
  },
  // Traffic is always logged, but with formatting :)
  traffic(...args) {
    logForLevel(0, `[${(new Date()).toISOString()}]`, ...args);
  },
};
