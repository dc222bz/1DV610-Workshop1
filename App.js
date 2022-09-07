import { input } from './input.js'
import { translate } from './translate.js'

const inputToTranslate = input()
const translationResult = translate(inputToTranslate)
    
console.log(translationResult)


