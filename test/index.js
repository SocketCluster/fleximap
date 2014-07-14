var assert = require('assert');
var FlexiMap = require('../index.js').FlexiMap;

var flexiMap = new FlexiMap();
flexiMap.set('keyA', {arr: [], obj: {}});

assert(JSON.stringify(flexiMap.get(['keyA', 'arr'])) == '[]');
assert(JSON.stringify(flexiMap.get(['keyA', 'obj'])) == '{}');

flexiMap.add(['keyB1', 'keyB2', 'keyB3'], 123);

assert(JSON.stringify(flexiMap.get(['keyB1', 'keyB2'])) == JSON.stringify({keyB3: [123]}));

var arr = [];
arr[5] = 'Hello world';

flexiMap.set(['keyC1', 'keyC2'], arr);
var result = flexiMap.get(['keyC1', 'keyC2']);

assert(JSON.stringify(result) == JSON.stringify({5: 'Hello world'}), 'Sparse Array should be cast to Object');

console.log('All tests passed!');