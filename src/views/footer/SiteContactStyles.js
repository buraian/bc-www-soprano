import { css } from 'emotion'
import tinycolor from 'tinycolor2'


class SiteContactStyles {
    constructor () {
        this.iconHeight = '40px'
        this.iconWidth = '40px'
        this.labelColor = { h: 0, s: 0, l: 90 }
    }

    Icon () {
        return css`
            display: flex;
            height: ${this.iconHeight};
            justify-content: center;
            margin-bottom: 6px;
            width: 100%;

            svg {
                max-height: 100%;
                max-width: ${this.iconWidth};
            }
        `
    }

    Item () {
        return css`
            margin-right: 1rem;
            user-select: none;

            &:focus,
            &:hover {

                svg {

                    path {
                        fill: ${tinycolor({ h: 0, s: 0, l: 50 }).lighten(20).toString()};
                    }
                }
            }

            &:last-child {
                margin-right: 0;
            }
        `
    }

    Label () {
        return css`
            color: ${tinycolor(this.labelColor).toString()};
            text-decoration: none;

            .${this.Item()}:focus &,
            .${this.Item()}:hover & {
                color: ${tinycolor(this.labelColor).lighten(10).toString()};
            }
        `
    }

    Wrapper () {
        return css`
            align-items: center;
            display: flex;
            font-size: 12px;
            font-style: italic;
            font-weight: bold;
            justify-content: center;

            a,
            a:hover {
                text-decoration: none;
            }
        `
    }
}

export default new SiteContactStyles()
