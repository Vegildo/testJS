require('../__no-framework-mocks__/utils')
const utilsPath = require.resolve('../utils')
const mockUtilsPath = require.resolve('../__no-framework-mocks__/utils')
require.cache[utilsPath] = require.cache[mockUtilsPath]

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
