function longestWord(string: string): string {
    let str: string[] = string.split(' ')
    let result: string = ''
    let maxlength: number = 0
    str.forEach((element) => {
        let length: number = element.length
        if (length > maxlength) {
            maxlength = length
            result = element
        }
    })
    return result
}

console.log(longestWord('Вите надо выйти'))