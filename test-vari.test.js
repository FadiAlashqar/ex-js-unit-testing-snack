const { getInitials } = require('./test-vari.js')

// SNACK 1
// Creare un test che verifichi la seguente descrizione:
// 👉 "La funzione getInitials restituisce le iniziali di un nome completo."

test("La funzione getInitials restituisce le iniziali di un nome completo", () => {
    expect(getInitials("Fadi")).toBe("F")
    expect(getInitials("Giulia")).toBe("G")
})