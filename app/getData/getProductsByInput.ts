import { getProducts as products } from "./getProducts";

export const getProductsByInput = (input: string) => products.filter(({ name }) => {
  const engName = replacePolishLetter(name)
  const engInput = replacePolishLetter(input)

  return engName.split(' ').find(word => {
    if (word.slice(0, engInput.length).toLocaleLowerCase()
      === engInput.slice(0, engInput.length).toLocaleLowerCase()) {
      return true;
    }
  })
})

const replacePolishLetter = (polishWord: string) => (
  polishWord.split('')
    .map(letter => {
      switch (letter) {
        case "ą":
          return 'a'
        case "ć":
          return 'c'
        case "ę":
          return 'e'
        case "ł":
          return 'l'
        case "ó":
          return 'o'
        case "ś":
          return 's'
        case "ż":
          return 'z'
        case "ź":
          return 'z'
        default:
          return letter
      }
    }).join('')
)
