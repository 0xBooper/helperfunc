const randomRange = (minimum: number, maximum: number): number => {
    // If maximum is lesser than minimum, switch their values
    if (maximum < minimum) {
        const maximumNew = minimum
        const minimumNew = maximum

        minimum = minimumNew
        maximum = maximumNew

        console.log("Warning: maximum should always be greater than minimum. maximum and minimum's values have been swapped.")
    }

    minimum = Math.ceil(minimum)
    maximum = Math.floor(maximum)

    return Math.floor(Math.random() * (maximum - minimum + 1)) + minimum
}

export default randomRange