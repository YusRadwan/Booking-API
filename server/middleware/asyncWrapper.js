// asyncWrapper is usually used to save you from having to write try/catch everywhere.
const asyncWrapper = (fn) => {
    return (req, res, next) => {
        Promise.resolve(fn(req, res, next)).catch(next);
    }
}

module.exports = asyncWrapper;