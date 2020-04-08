const nodeCrypto = require('crypto');
// Providing crypto for jest tests, this is a quick fix,
// we might use something else than global.crypto to generate random values
if(typeof crypto === 'undefined') global.crypto = {
  getRandomValues: function(buffer) { return nodeCrypto.randomFillSync(buffer);}
};

function uuidv4() {
  return ([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g, c =>
    (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16)
  );
}

export default uuidv4