import { getProducts as products } from "./getProducts";

export const getProductsByInput = (input: string) => products.filter(({ name }) => {
  const engName = replacePolishLetter(name)
  const engInput = replacePolishLetter(input)

  return engInput.every(wordI => engName.some(wordName => (
    wordName.slice(0, wordI.length - 1).toLocaleLowerCase()
    === wordI.slice(0, wordI.length - 1).toLocaleLowerCase()
  )))
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
    }).join('').split(' ')
)