const thumbWar = require('../thumb-war');
const utils = require('../utils');


test('returns winner', () => {
  jest.spyOn(utils, 'getWinner')
  //const originalGetWinner = utils.getWinner
  utils.getWinner.mockImplementation((p1, p2) => p1)

  const winner = thumbWar('Ramon Braga', 'Gabriel Braga');

  
  expect(winner).toBe('Ramon Braga')
  expect(utils.getWinner.mock.calls).toEqual([
    [ 'Ramon Braga', 'Gabriel Braga' ],
    [ 'Ramon Braga', 'Gabriel Braga' ]
  ])

  //cleanup with spyOn and restore methods
  utils.getWinner.mockRestore()


// cleanup monkey patching utils.getWinner = originalGetWinner

})

