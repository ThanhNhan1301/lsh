export default function removeExp(text) {
    if (!text) return
    text = text.toString()
    text = text.replaceAll('/', '')
    text = text.replaceAll('-', '')
    return text
}
