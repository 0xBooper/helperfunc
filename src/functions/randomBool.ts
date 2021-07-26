const randomBool = (singleDigitProbability: number): boolean | null => {
    if (singleDigitProbability > 9) {
        console.error("Parameter should be single digit.")
        return null
    }
    
    return Math.random() < singleDigitProbability / 10
}

export default randomBool