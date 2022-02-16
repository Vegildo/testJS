const thumbWar = require('../thumb-war')
const utils = require('../utils')

test('returns winner', () => {
  const originalGetWinner = utils.getWinner
  utils.getWinner = jest.fn((p1, p2) => p1)

  const winner = thumbWar('Leonardo Braga', 'Big Vegildo')
  expect(winner).toBe('Leonardo Braga')  
  expect(utils.getWinner.mock.calls).toEqual([
    [ 'Leonardo Braga', 'Big Vegildo' ],
    [ 'Leonardo Braga', 'Big Vegildo' ]
  ])
  expect(utils.getWinner).toHaveBeenCalledTimes(2)
  expect(utils.getWinner).toHaveBeenCalledWith('Leonardo Braga', 'Big Vegildo')


  // could also do these assertions:
  expect(utils.getWinner).toHaveBeenNthCalledWith(1, 'Leonardo Braga', 'Big Vegildo')
  expect(utils.getWinner).toHaveBeenNthCalledWith(2, 'Leonardo Braga', 'Big Vegildo')

  // cleanup monkey patching
  utils.getWinner = originalGetWinner
})

/*
Gabarito:
const thumbWar = require('../thumb-war')
const utils = require('../utils')

test('returns winner', () => {
  const originalGetWinner = utils.getWinner
  utils.getWinner = jest.fn((p1, p2) => p1)

  const winner = thumbWar('Kent C. Dodds', 'Ken Wheeler')
  expect(winner).toBe('Kent C. Dodds')
  expect(utils.getWinner.mock.calls).toEqual([
    ['Kent C. Dodds', 'Ken Wheeler'],
    ['Kent C. Dodds', 'Ken Wheeler']
  ])
  // could also do these assertions:
  expect(utils.getWinner).toHaveBeenCalledTimes(2)
  expect(utils.getWinner).toHaveBeenNthCalledWith(
    1,
    'Kent C. Dodds',
    'Ken Wheeler'
  )
  expect(utils.getWinner).toHaveBeenNthCalledWith(
    2,
    'Kent C. Dodds',
    'Ken Wheeler'
  )

  // cleanup
  utils.getWinner = originalGetWinner
}) */