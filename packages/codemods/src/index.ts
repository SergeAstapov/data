import { default as legacyCompatBuilders } from './legacy-compat-builders/index.js';
import { log } from './legacy-compat-builders/log.js';

// exports for testing
export const Codemods = {
  'legacy-compat-builders': legacyCompatBuilders,
};
export type Codemods = typeof Codemods;

// exports for testing
export const Logs = {
  'legacy-compat-builders': log,
};
