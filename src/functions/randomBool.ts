export default function randomBool (singleDigitProbability: number): boolean {
    if (singleDigitProbability > 9) {
        throw new Error("Parameter must be single digit.")
    }

    return Math.random() < singleDigitProbability / 10
}