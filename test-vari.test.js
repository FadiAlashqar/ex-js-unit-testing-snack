const { getInitials, createSlug, average, createSlug2, isPalindrome, findPostById } = require('./test-vari.js')

const posts = [
    {
        id: 1,
        title: "Primo post",
        slug: "primo-post"
    },
    {
        id: 2,
        title: "Un altro articolo",
        slug: "un-altro-articolo"
    },
    {
        id: 3,
        title: "Come usare JavaScript",
        slug: "come-usare-javascript"
    }
];


// SNACK 1
// Creare un test che verifichi la seguente descrizione:
// 👉 "La funzione getInitials restituisce le iniziali di un nome completo."

test("La funzione getInitials restituisce le iniziali di un nome completo", () => {
    expect(getInitials("Fadi")).toBe("F")
    expect(getInitials("Giulia")).toBe("G")
})

// SNACK 2
// Creare un test che verifichi la seguente descrizione:
// 👉 "La funzione createSlug restituisce una stringa in lowercase."

test("La funzione createSlug restituisce una stringa in lowercase.", () => {
    expect(createSlug("JAVA")).toBe("java")
})

// SNACK 3
// Creare un test che verifichi la seguente descrizione:
// 👉 "La funzione average calcola la media aritmetica di un array di numeri."

test("La funzione average calcola la media aritmetica di un array di numeri.", () => {
    expect(average([4, 3, 5, 7, 1], 5)).toBe(4)
    expect(average([5, 9, 7, 6, 10, 8, 4], 7)).toBe(7)
})

// SNACK 4
// Creare un test che verifichi la seguente descrizione:
// 👉 "La funzione createSlug sostituisce gli spazi con -."

test("La funzione createSlug sostituisce gli spazi con -.", () => {
    expect(createSlug2("Questo è un test")).toBe("questo-e-un-test")
    expect(createSlug2("Oggi è una bella giornata")).toBe("oggi-e-una-bella-giornata")

})

// SNACK 5
// Creare un test che verifichi la seguente descrizione:
// 👉 "La funzione isPalindrome verifica se una stringa è un palindromo."
test("La funzione isPalindrome verifica se una stringa è un palindromo.", () => {
    expect(isPalindrome("anna")).toBeTruthy()
})

// SNACK 6
// Creare un test che verifichi la seguente descrizione:
// 👉 "La funzione createSlug lancia un errore se il titolo è vuoto o non valido."
test("La funzione createSlug lancia un errore se il titolo è vuoto o non valido.", () => {
    expect(() => createSlug("")).toThrow()
})


// SNACK 7
// Crea un array di oggetti posts, in cui ogni oggetto ha le proprietà id, title e slug.
// Creare un test che verifichi le seguenti descrizioni:
// 👉 "La funzione findPostById restituisce il post corretto dato l’array di post e l’id"

test("La funzione findPostById restituisce il post corretto dato l’array di post e l’id", () => {
    expect(findPostById(1, posts)).toEqual({
        id: 1,
        title: "Primo post",
        slug: "primo-post"
    })
})

