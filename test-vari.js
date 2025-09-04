function getInitials(name) {
    return name.slice(0, 1)
}

function createSlug(query) {
    return query.toLowerCase()
}

function average(arr, num) {
    let sum;
    arr.reduce((acc, curr) => {
        return sum = acc + curr

    }, 0)

    return sum / num
}

module.exports = {
    getInitials,
    createSlug,
    average
}
