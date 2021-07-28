const randomString = (length: number, charSet?: string): string => {
    // If charset isn't given, give it a default
    if (!charSet) charSet = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890?-_"

    const randomText: Array<string> = []
    
    // For the length of the length param, choose a random char from charSet, then push it to the randomText array
    for (let i = 0; i <= length; i++) {
        randomText.push(charSet.charAt(Math.floor(Math.random() * length)))
    }
    
    return randomText.join("")
}

export default randomString