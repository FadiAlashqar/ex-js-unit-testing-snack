const { getInitials, createSlug } = require('./test-vari.js')

// SNACK 1
// Creare un test che verifichi la seguente descrizione:
// 👉 "La funzione getInitials restituisce le iniziali di un nome completo."

test("La funzione getInitials restituisce le iniziali di un nome completo", () => {
    expect(getInitials("Fadi")).toBe("F")
    expect(getInitials("Giulia")).toBe("G")
})

// SNACK2
// Creare un test che verifichi la seguente descrizione:
// 👉 "La funzione createSlug restituisce una stringa in lowercase."

test("La funzione createSlug restituisce una stringa in lowercase.", () => {
    expect(createSlug("JAVA")).toBe("java")
})