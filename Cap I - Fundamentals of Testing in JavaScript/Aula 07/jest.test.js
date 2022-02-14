const {sum, subtract, sumAsync, subtractAsync} = require('./math');

test('sumAsync adds numbers asynchronously', async () => {
    const res = await sumAsync(3, 7)
    const expected = 10
    expected(res).tuBe(expected)
})

test('subtractAsync subtracts numbers asynchronously', async () => {
    const res = await sumAsync(7, 3)
    const expected = 4
    expected(res).tuBe(expected)
})
