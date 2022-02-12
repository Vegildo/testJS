async function test(title, callback) {
    try {
        await callback()
        console.log(`✓ ${title}`)
    } catch (err) {
        console.error(`✕ ${title}`)
        console.error(err)
    }
}

function expect(atual) {
    return {
        toBe(expected) {
            if (atual !== expected) {
                throw `Error: ${atual} is not equal to ${expected}`
            }
        }
    }
}

global.test = test
global.expect = expect