function fn(impl = () => {}) {
    const mocFn = (...args) => {
      mocFn.mock.calls.push(args)
      return impl(...args)
    }
    mocFn.mock = {calls: []}
    return mockFn
}
  
module.exports = {
    getWinner: fn((p1, p2) => p2)    
}
  