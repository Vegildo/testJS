const {sum, subtract} = require('./math')

//let result, expected

/*
function sumTest() {
    result = sum(3, 7)
    expected = 10
    expect(result).toBe(expected)
}
test('sum adds numbers', sumTest) */

test('sum adds numbers', () => {
    const result = sum(3, 7)
    const expected = 10
    expect(result).toBe(expected)
})


/*
function subtractTest() {
    result = subtract(7, 3)
    expected = 4
    expect(result).toBe(expected)
}
test('subtract subtracts numbers', subtractTest)*/

test('subtract subtracts numbers', () => {
    const result = subtract(7, 3)
    const expected = 4
    expect(result).toBe(expected)
})

function test(title, callback) {
    try {
        callback()
        console.log(`✓ ${title}`)
    }catch (erro) {
        console.error(`✕ ${title}`)        
        console.error(erro)
    }
}

function expect(actual) {
    return {
        toBe(expected) {
            if (actual !== expected) {
                throw new Error(`${actual} is not equal to ${expected}`)
            }
        }
    }
}

