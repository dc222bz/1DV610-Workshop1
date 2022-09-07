
export function translate (input) {
    let translationResult = ''

    for (let i = 0; i < input.length; i++) {
        if (!/^[aeiou]+$/.test(input[i])) { // if consonant
            translationResult += input[i] + 'o' + input[i]  
        }   else {
            translationResult += input[i]
        }    
    }
    
    return translationResult
    
}