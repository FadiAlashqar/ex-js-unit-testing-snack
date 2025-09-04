function getInitials(name) {
    return name.slice(0, 1)
}

function createSlug(query) {
    return query.toLowerCase()
}

module.exports = {
    getInitials,
    createSlug
}
