const thumbWar = require('../thumb-war');
const utils = require('../utils');

jest.mock('../utils', () => {
  return {
    getWinner: jest.fn((p1, p2) => p1)
  }
})

test('returns winner', () => {
  /*
    o método spyon tb é uma forma de mockey patching
  jest.spyOn(utils, 'getWinner')
  //const originalGetWinner = utils.getWinner
  utils.getWinner.mockImplementation((p1, p2) => p1)
  */

  const winner = thumbWar('Ramon Braga', 'Gabriel Braga');

  
  expect(winner).toBe('Ramon Braga')
  expect(utils.getWinner.mock.calls).toEqual([
    [ 'Ramon Braga', 'Gabriel Braga' ],
    [ 'Ramon Braga', 'Gabriel Braga' ]
  ])

  //cleanup
  utils.getWinner.mockReset()

  /*
  //cleanup with spyOn and restore methods (tb mokey patching)
  utils.getWinner.mockRestore()


// cleanup monkey patching utils.getWinner = originalGetWinner
*/
})

