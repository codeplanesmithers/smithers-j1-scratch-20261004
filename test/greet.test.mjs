import { strict as assert } from 'node:assert';
import { greet } from '../greet.mjs';

assert.strictEqual(greet('Ada'), 'Hello, Ada!');
console.log('✓ greet function test passed');
