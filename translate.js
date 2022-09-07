
export function translate (input) {
    let translationResult = ''
    if (input) {
    for (let i = 0; i < input.length; i++) {
        if (/^[bcdfghjklmnpqrstvwxz]+$/.test(input[i])) { // if consonant
            translationResult += input[i] + 'o' + input[i]  
        }   else {
            translationResult += input[i]
        }    
    } 
    } 
    return translationResult
    
}