import { css } from 'emotion'
import tinycolor from 'tinycolor2'


class MetaStyles {
    constructor () {
        this.metaWidth = 65
        this.textColor = { h: 0, s: 0, l: 50 }
    }

    Meta () {
        return css`
            bottom: 0;
            color: ${tinycolor(this.textColor).toString()};
            display: flex;
            font-size: 10px;
            position: fixed;
            right: 0;
            top: 0;
            width: ${this.metaWidth}px;

            a,
            a:visited {
                color: ${tinycolor(this.textColor).toString()};
                text-decoration: none;
            }

            a:focus {
                outline: 0;
            }
        `
    }

    Container () {
        return css`
            padding: 50px 0;
        `
    }

    // CreditsWrapper () {
    //     return css`
    //         display: flex;
    //         justify-content: center;
    //     `
    // }

    // Credits () {
    //     return css`
    //         left: -3px;
    //         position: relative;
    //         white-space: nowrap;
    //         writing-mode: vertical-rl;
    //     `
    // }

    // CreditsTitle () {
    //     return css`
    //         font-weight: bold;
    //         text-transform: uppercase;
    //     `
    // }

    Item () {
        return css`
            align-items: center;
            display: flex;
            /* transform: rotate(90deg); */
            justify-content: center;
            padding: 7px 0;
            transition: transform 0.2s;

            a {
                align-items: center;
                display: flex;
                height: 100%;
                justify-content: center;
                width: 100%;

                &:hover {
                    transform: scale(1.1)
                }
            }

            svg {
                max-width: 45%;
                width: 100%;
            }
        `
    }

    ItemWrapper () {
        return css`
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
            list-style-type: none;
            margin: 0 0 1rem;
            padding: 0 3px;
            width: 100%;
            /* writing-mode: vertical-rl; */
        `
    }

    LeadIn () {
        return css`
            font-weight: bold;
            line-height: 1;
            text-transform: uppercase;
            white-space: nowrap;
            writing-mode: vertical-rl;
        `
    }

    LeadInWrapper () {
        return css`
            display: flex;
            justify-content: center;
            padding-bottom: 10px;
        `
    }
}

export default new MetaStyles()
