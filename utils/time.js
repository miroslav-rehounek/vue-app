// Takes the first and second half of the masked value and adds zeros if there are too few digits
export const padStart = (string, targetLength, padString) => {
    targetLength = targetLength >> 0
    padString = String(padString || ' ')

    if (string.length > targetLength) {
        return string
    } else {
        targetLength = targetLength - string.length

        if (targetLength > padString.length) {
            padString += padString.repeat(targetLength / padString.length)
        }

        return padString.slice(0, targetLength) + string
    }
}
