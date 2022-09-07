export function input() {
    const input = process.argv.slice(2)
    if (input.length === 0) {
        console.log('Input string should contain at least one character.')
    }
    return input.join(' ')
}
