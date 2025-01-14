function identicalLetters(string1: string, string2: string): string {
    const result: string[] = [];
    for (let i of string1) {
        if (string2.includes(i)) {
            result.push(i);
        }
    }
    return result.join('');
}

console.log(identicalLetters('banana', 'apple'));