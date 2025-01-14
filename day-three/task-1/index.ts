function getPromise(delay: number, message: string): Promise<string> {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(message)
        }, delay)
    })
}

getPromise(5000, 'Куку')
    .then((result) => {
        console.log(result);
    })
    .catch((error) => {
        console.error('Ошибка', error);
    });



