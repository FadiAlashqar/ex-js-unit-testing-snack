const { getInitials, createSlug, average, createSlug2, isPalindrome } = require('./test-vari.js')

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