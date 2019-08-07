function atob(b64) {
  return Buffer.from(b64, 'base64').toString('utf8');
}

function btoa(str) {
  return Buffer.from(str, 'utf8').toString('base64');
}

function xor(c) {
  return String.fromCharCode(c.charCodeAt(0) ^ '_'.charCodeAt(0));
}

function encode(plaintext) {
  return (
    '{xor}' +
    btoa(
      plaintext
        .split('')
        .map(c => xor(c))
        .join('')
    )
  );
}

function decode(password) {
  return atob(password.replace('{xor}', ''))
    .split('')
    .map(c => xor(c))
    .join('');
}

module.exports = { encode, decode };
