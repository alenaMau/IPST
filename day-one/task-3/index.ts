function indexOf(string: string, substring: string): number {
    for (let i = 0; i <= string.length - substring.length; i++) {
        let match = true;
        for (let j = 0; j < substring.length; j++) {
            if (string[i + j] !== substring[j]) {
                match = false;
                break;
            }
        }
        if (match) {
            return i;
        }
    }
    return -1;
}

console.log(indexOf('banana', 'na'));
console.log(indexOf('banana', 'ana'));
console.log(indexOf('banana', 'apple'));

console.log(indexOf('banana', 'ban'))