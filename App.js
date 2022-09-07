import { input } from './input.js'
import { translate } from './translate.js'

const InputToTranslate = input()
const translationResult = translate(InputToTranslate)
    
console.log(translationResult)


