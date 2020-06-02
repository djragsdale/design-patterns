#!/usr/bin/env node

import commander from 'commander';
import { createRequire } from 'module';

import IntentManager from './IntentManager.js';

const require = createRequire(import.meta.url);
const pkg = require('../package.json');

const { program } = commander;

program
  .version(pkg.version)
  .name(pkg.description);

program
  .command('dataview')
  .description('View and edit data')
  .action(async () => {
    await IntentManager.callIntent('MenuIntent');
  });

program.parse(process.argv);
