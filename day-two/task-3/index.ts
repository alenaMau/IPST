interface TargetData {
    title: string,
    year: number,
    author: string,
    preview: string,
    url: string
}

function createBook(title: string, year: number, author: string): TargetData {
    const preview = "Название: ".concat(title, ", Автор: ", author, ", Год: ", year.toString());
    const url = 'www.someurl.com/preview?title=' + title + '&year=' + year + '&author=' + author + '.'

    return {
        title,
        year,
        author,
        preview,
        url
    }
}

const source = {
    title: "Harry Potter",
    year: 1997,
    author: "J.K. Rowling",
}

console.log(createBook(source.title, source.year, source.author))