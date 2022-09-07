import { testLetters } from "./testLetters.js"

export function input() {
    // const input = process.argv[2]
    const input = process.argv.slice(2)

        // if (!testLetters(input)) {
        //     throw new Error('Please enter a string containing only letters, no other characters!!!')
        // } else {
        //     console.log('U did it')
        // }
   
    return input.join(' ')
    
}
