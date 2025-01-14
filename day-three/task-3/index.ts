interface User {
    id: number;
    name: string;
    phone: string;
    email: string;
    location: string;
    status: "active" | "delete";
}

function generationUuid(min: number, max: number): number {
    let random = min + Math.random() * (max + 1 - min);
    return Math.floor(random);
}

async function getFakeUsers(delay: number): Promise<User[]> {
    return new Promise((resolve) => {
        setTimeout(() => {
            let fakeApi: User[] = [{
                id: generationUuid(1, 100),
                name: 'name',
                phone: '+123123123',
                email: 'test@gmail.com',
                location: "Tomsk",
                status: "active",
            }]
            resolve(fakeApi)
        }, delay)
    })
}

getFakeUsers(5000)
    .then((result) => {
        console.log(result);
    })
    .catch((error) => {
        console.error('Ошибка', error);
    });
