import { testLetters } from "./testLetters.js"

export function input() {
    const input = process.argv[2]
    
        if (!testLetters(input)) {
            throw new Error('Please enter a string, no other characters!!!')
        } else {
            console.log('U did it')
        }
   
    return input
    
}
