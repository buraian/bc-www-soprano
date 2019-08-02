export const globalFontSize = 16

const breakpoints = {
    'mobilePortrait':  { 'min-width':    0, 'max-width':  320 },
    'mobileLandscape': { 'min-width':  321, 'max-width':  480 },
    'tabletPortrait':  { 'min-width':  481, 'max-width':  720 },
    'tabletLandscape': { 'min-width':  721, 'max-width': 1024 },
    'laptopMdDpi':     { 'min-width': 1025, 'max-width': 1280 },
    'laptopHiDpi':     { 'min-width': 1281, 'max-width': 1440 },
    'desktopSmall':    { 'min-width': 1441, 'max-width': 1600 },
    'desktopMedium':   { 'min-width': 1601, 'max-width': 1920 },
    'desktopLarge':    { 'min-width': 1921, 'max-width': 2560 },
}

const pxToEm = (value, size = globalFontSize) => {
    return value / size
}

export function mQueryOnly (breakpoint) {
    const minWidth = pxToEm(breakpoints[breakpoint]['min-width'])
    const maxWidth = pxToEm(breakpoints[breakpoint]['max-width'])
    return `@media (min-width: ${minWidth}em) and (max-width: ${maxWidth}em)`
}

export function mQueryUp (breakpoint) {
    const minWidth = pxToEm(breakpoints[breakpoint]['min-width'])
    return `@media (min-width: ${minWidth}em)`
}

export function mQueryDown (breakpoint) {
    const maxWidth = pxToEm(breakpoints[breakpoint]['max-width'])
    return `@media (max-width: ${maxWidth}em)`
}

export default breakpoints
