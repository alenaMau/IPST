const data = {
    name: "Alice",
    age: 25,
    address: "",
    phone: undefined,
    email: "[alice@example.com](<mailto:alice@example.com>)",
    notes: null,
};

const countFilledValues = (obj: Record<string, unknown>) => {
    let count = 0
    for (let value in obj) {
        if (obj[value]) {
            count++
        }
    }
    return count
}

console.log(countFilledValues(data))


interface SourceData {
    title: string,
    year: number,
    author: string,
}


