/**
 * Function padLeft
 *
 * @param  {String} str The string to pad
 * @param  {String} pad Number of digits to pad
 * @return {String}     The string with applied padding
 */
export default function (str, pad = '000') {
    return (pad + str).slice(-pad.length)
};
