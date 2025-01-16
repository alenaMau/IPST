function splittingBillAmount(sum:number):{ [key: number]: number } {
    const availableBanknotes = [100, 50, 10, 5, 2, 1]

    const conclusion: { [key: number]: number } = {}

    for(let bill of availableBanknotes) {
        if(sum > bill) {
            const count = Math.floor(sum / bill);
            conclusion[bill] = count;
            sum -= count * bill;
        } else {
            conclusion[bill] = 0
        }
    } return conclusion
}

const answer: number = 1050
console.log(splittingBillAmount(answer))