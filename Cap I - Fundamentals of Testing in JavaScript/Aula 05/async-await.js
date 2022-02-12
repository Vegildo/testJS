const {sumAsync, subtractAsync} = require('./math')

test('sumAsync adds numbers asynchronously', async () => {
    const result = await sumAsync(3, 7)
    const expected = 10
    expect(result).toBe(expected)
})

test('subtract subtracts numbers', async () => {
    const result = await subtractAsync(7, 3)
    const expected = 4
    expect(result).toBe(expected)
})

async function test(title, callback) {
    try {
        await callback()
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
                throw `Error: ${actual} is not equal to ${expected}`
            }
        }
    }
}