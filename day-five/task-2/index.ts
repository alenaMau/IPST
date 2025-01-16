function splittingBillAmount(sum: number): { [key: number]: number } {
    const availableBanknotes = [100, 50, 10, 5, 2, 1]

    const conclusion: { [key: number]: number } = {}

    for (let bill of availableBanknotes) {
        if (sum > bill) {
            conclusion[bill] = Math.floor(sum / bill);
            sum %= bill
        } else {
            conclusion[bill] = 0
        }
    }
    return conclusion
}

const answer: number = 1050
console.log(splittingBillAmount(answer))