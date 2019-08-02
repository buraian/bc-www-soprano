/**
 * function replaceSVGFill
 *
 * @param {String} str The SVG code to perform regex on
 * @param {String} color The color to replace to
 */
export default (str, color) => {
    const regex = RegExp(/(fill=")([#\d\w]*)(")/, 'g')
    return str.replace(regex, (match, p1, p2, p3) => `${p1}${color}${p3}`)
}
