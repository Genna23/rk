export function getSizeFromUrl(url) {
    const regex = /(\d+)x(\d+)/;
    const match = url.match(regex);
    if (match) {
        return {
            width: match[1],
            height: match[2]
        }
    } return null
}