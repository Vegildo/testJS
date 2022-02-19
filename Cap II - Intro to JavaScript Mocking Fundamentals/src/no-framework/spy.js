const assert = require('assert');
const thumbWar = require('../thumb-war');
const utils = require('../utils');

function fn(impl = () => {}) {
  const mockFn = (...args) => {
    mockFn.mock.calls.push(args)
    return impl(...args)
  }
  mockFn.mock = { calls: [] }
  mockFn.mockImplementation = newImpl => (impl = newImpl) 
  return mockFn
}

function spyOn(obj, prop) {
  const originalValue = obj[prop]
  obj[prop] = fn()
  obj[prop].mockRestore = () => (obj[prop] = originalValue)
}

// monckey patching : const originalGetWinner = utils.getWinner
spyOn(utils, 'getWinner')
utils.getWinner.mockImplementation((p1, p2) => p2)

const winner = thumbWar('Viviane Braga', 'Lidiane Souza')
assert.strictEqual(winner, 'Lidiane Souza')
//console.log(utils.getWinner.mock.calls)
assert.deepStrictEqual(utils.getWinner.mock.calls, [    
  [ 'Viviane Braga', 'Lidiane Souza' ],
  [ 'Viviane Braga', 'Lidiane Souza' ] 
])

//cleanup:
utils.getWinner.mockRestore()
//with moncey patching: utils.getWinner = originalGetWinner()

