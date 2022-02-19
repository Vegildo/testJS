function fn(impl = () => {}) {
  const mockFn = (...args) => {
    mockFn.mock.calls.push(args)
    return impl(...args)
  }
  mockFn.mock = { calls: [] }
  mockFn.mockImplementation = newImpl => (impl = newImpl) 
  return mockFn
}

//console.log(require.cache)
const utilsPath = require.resolve('../utils')
require.cache[utilsPath] = {
  id: utilsPath,
  filename: utilsPath,
  loaded: true,
  exports: {
    getWinner: fn((p1, p2) => p2)
  }
}

const assert = require('assert');
const thumbWar = require('../thumb-war');
const utils = require('../utils');

const winner = thumbWar('Viviane Braga', 'Lidiane Souza')
assert.strictEqual(winner, 'Lidiane Souza')
//console.log(utils.getWinner.mock.calls)
assert.deepStrictEqual(utils.getWinner.mock.calls, [    
  [ 'Viviane Braga', 'Lidiane Souza' ],
  [ 'Viviane Braga', 'Lidiane Souza' ] 
])

//cleanup
delete require.cache[utilsPath];

/*
//cleanup tb com monkey patching usando metodo spyOn e mockRestore :
utils.getWinner.mockRestore()
//with moncey patching: utils.getWinner = originalGetWinner()
*/
