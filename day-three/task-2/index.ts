// {
//     "userId": 1,
//     "id": 1,
//     "title": "delectus aut autem",
//     "completed": false
// }

interface User {
    userId: number,
    id: number,
    title: string,
    completed: boolean
}

const url = 'https://jsonplaceholder.typicode.com/todos/1'

async function getUser(url: string): Promise<User> {
    try {
        const response = await fetch(url, {method: 'GET'})
        if (!response.ok) {
            throw new Error(`Ошибка при загрузке данных - ${response.status}`)
        }
        return response.json().then((data) => {
            return {...data}
        })
    } catch (error: any) {
        console.error('Произошла ошибка:', error)
        return error.message
    }
}

getUser(url).then((data) => {
    console.log(data)
})



