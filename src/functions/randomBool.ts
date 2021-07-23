export default function randomBool (singleDigitProbability: number): boolean {
    if (singleDigitProbability > 9) {
        console.error("Error: randomBool() ONLY takes a single-digit number.")
        throw Error("Parameter must be single digit.")
    }

    return Math.random() < singleDigitProbability / 10
}