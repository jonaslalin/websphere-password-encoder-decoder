const assert = require('assert');
const { encode, decode } = require('./index');

try {
  assert.deepStrictEqual(encode('Password123'), '{xor}Dz4sLCgwLTtubWw=');
  assert.deepStrictEqual(decode('{xor}Dz4sLCgwLTtubWw='), 'Password123');

  console.log('Test success!');
} catch (err) {
  console.error('Test failure!\n', err);
}
