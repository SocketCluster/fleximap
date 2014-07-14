var assert = require('assert');
var FlexiMap = require('../index.js').FlexiMap;

var flexiMap = new FlexiMap();
flexiMap.set('keyA', {arr: [], obj: {}});

assert(JSON.stringify(flexiMap.get(['keyA', 'arr'])) == '[]', 'Expected empty array');
assert(JSON.stringify(flexiMap.get(['keyA', 'obj'])) == '[]', 'Expected empty array - Empty object casts to empty array');

console.log('All tests passed!');