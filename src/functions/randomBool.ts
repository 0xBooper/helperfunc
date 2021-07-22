export default function randomBool (singleDigitProbability: number) {
    if (singleDigitProbability > 9) {
        console.error("Error: randomBool() ONLY takes a single-digit number.")
        return new Error("Cannot use a non-single digit parameter in randomBool()")
    }

    return Math.random() < singleDigitProbability / 10
}