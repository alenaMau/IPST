interface TargetData {
    title: string,
    year: number,
    author: string,
    preview: string,
    url: string
}

function createBook(title: string, year: number, author: string): TargetData {
    const preview = "Название: ".concat(title, ", Автор: ", author, ", Год: ", year.toString());
    // const url = 'www.someurl.com/preview?title=' + title + '&year=' + year + '&author=' + author + '.'
    const baseUrl = "www.someurl.com/preview"
    const searchParams = new URLSearchParams(baseUrl)
    searchParams.set('title',title)
    searchParams.set('year',year.toString())
    searchParams.set('author',author)
    let url = searchParams.toString()



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