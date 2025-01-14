function runLengthEncoding(string: string): string {
    let count = 1
    let coding = ''

    for (let i = 0; i < string.length; i++) {
        if (string[i] == string[i + 1]) {
            count++
        } else {
            coding += string[i] + count;
            count = 1
        }
    }
    return coding
}

console.log(runLengthEncoding('qqqqaaaa'))


function runLengthDecoding(coding: string): string {
    let decoding = ''
    let i = 0;

    while (i < coding.length) {
        const char = coding[i];
        i++;

        let countStr = '';
        while (i < coding.length && /\d/.test(coding[i])) {
            countStr += coding[i];
            i++;
        }

        const count = parseInt(countStr, 10);

        decoding += char.repeat(count);
    }

    return decoding;
}

console.log(runLengthDecoding("q4a4"))