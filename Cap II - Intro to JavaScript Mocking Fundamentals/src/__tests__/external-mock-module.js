const thumbWar = require('../thumb-war')
const utils = require('../utils')

jest.mock('../utils')

test('returns winner', () => {
  const winner = thumbWar('Gabriel Braga', 'Ramon Braga')
  expect(winner).toBe('Gabriel Braga')
  expect(utilsMock.getWinner.mock.calls).toEqual([
    ['Gabriel Braga', 'Ramon Braga'],
    ['Gabriel Braga', 'Ramon Braga']
  ])

  // cleanup
  utilsMock.getWinner.mockReset()
})
