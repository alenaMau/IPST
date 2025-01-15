type User = {
    id: number;
    name: string;
    age: number;
    email: string;
    isActive: boolean
};

async function cleanUserData(users: User[]): Promise<User[]> {
    const random = Math.random()
    if (random < 0.1) {
        throw new Error("Случайная ошибка при обработке данных");
    }
    const activeUsers = users
        .filter((user) => user.isActive)
    activeUsers.forEach((value) => {
        value.email = value.email.toLowerCase()
        value.name = value.name.trim().toLowerCase()
    })
    return activeUsers;
}

const users: User[] = [
    {
        id: 1,
        name: "Иван Иванов",
        age: 25,
        email: "Ivan@example.com",
        isActive: true
    },
    {
        id: 2,
        name: "Мария Петрова",
        age: 30,
        email: "maria@example.com",
        isActive: false
    }
];


cleanUserData(users).then((activeUsers) => {
    console.log(activeUsers);
}).catch((error => {
    console.error(error)
}))

