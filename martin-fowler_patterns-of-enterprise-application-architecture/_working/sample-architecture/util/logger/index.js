import config from '../../config.js';

const { logLevel } = config();

function logForLevel(level, ...args) {
  if (level <= logLevel) {
    // eslint-disable-next-line no-console
    console.log(...args);
  }
}

export default {
  debug(...args) {
    logForLevel(2, ...args);
  },
  error(...args) {
    logForLevel(0, '[ERROR]', ...args);
  },
  info(...args) {
    logForLevel(1, ...args);
  },
  log(...args) {
    logForLevel(0, ...args);
  },
  trace(...args) {
    logForLevel(3, ...args);
  },
  // Traffic is always logged, but with formatting :)
  traffic(...args) {
    logForLevel(0, `[${(new Date()).toISOString()}]`, ...args);
  },
};
