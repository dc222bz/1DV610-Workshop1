export function input() {
    const input = process.argv[2]
    for (let i = 0; i < input.length; i++) {
        const testChar = input[i]
        // const validChar = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'x', 'y', 'z', 'å', 'ä', 'ö']
        if (typeof Number.parseInt(testChar) === "number") {
            throw new Error('Please enter a string, no other characters!!!')
        } else if (typeof Number.parseInt(testChar) === "NaN") {
            console.log('U did it')
        }
    }
    return input
    
}
