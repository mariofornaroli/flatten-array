function flatten(inArr) {
    if (!Array.isArray(inArr)) {
        throw new TypeError('The input is not an array')
    }

    return inArr.reduce(
        function flattenRec(acc, item) {
            if (!Array.isArray(item)) {
                acc.push(item)
                return acc;
            }
            let retArr = acc.concat(item.reduce(flattenRec, []));
            return retArr;
        }
        , []
    )
}

module.exports = flatten;