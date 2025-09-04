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


function createSlug2(query) {
    return query.split(" ").join("-").toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "")
}

function isPalindrome(string) {
    let reversedString = string.split("").reverse().join("")

    return reversedString === string ? true : false

}

module.exports = {
    getInitials,
    createSlug,
    average,
    createSlug2,
    isPalindrome
}
