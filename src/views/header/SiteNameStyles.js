import { css } from 'emotion'
import tinycolor from 'tinycolor2'

class SiteNameStyles {
    constructor () {
        this.divider = css`
            background-color: ${tinycolor({ h: 0, s: 0, l: 3 }).toString()};
            content: '';
            height: 3px;
            left: 0;
            position: absolute;
            right: 0;
            top: -1px;
        `
    }

    Wrapper () {
        return css`
            display: flex;
            flex-direction: column;
            padding: 50px 0 1rem;
            text-shadow: 0 -2px 0 ${tinycolor({ h: 0, s: 0, l: 0 }).toString()};
        `
    }

    Container () {
        return css`
            align-self: center;
            display: block;
            text-align: center;
            width: 132px;
        `
    }

    NameWrapper () {
        return css`
            display: block;
            line-height: 0.9;
            margin-bottom: 9px;

            &,
            &:focus,
            &:hover {
                color: ${tinycolor({ h: 0, s: 0, l: 100 }).toString()};
                text-decoration: none;
            }
        `
    }

    NameFirstname () {
        return css`
            font-size: 46.5px;
            font-weight: bold;
        `
    }

    NameLastname () {
        return css`
            font-size: 39px;
            text-transform: uppercase;
        `
    }

    TitleWrapper () {
        return css`
            color: ${tinycolor({ h: 0, s: 0, l: 80 }).toString()};
            font-style: italic;
            line-height: 0.9;
            margin-bottom: 10px;
            padding-top: 9px;
            position: relative;
            white-space: nowrap;

            span {
                font-weight: bold;
                color: ${tinycolor({ h: 0, s: 0, l: 100 }).toString()};
            }

            &::before {
                ${this.divider}
            }
        `
    }

    TitleOne () {
        return css`
            font-size: 28px;
        `
    }

    TitleTwo () {
        return css`
            font-size: 31px;
        `
    }

    SectionWrapper () {
        return css`
            color: ${tinycolor({ h: 0, s: 0, l: 100 }).toString()};
            font-weight: bold;
            padding-top: 10px;
            position: relative;
            text-transform: uppercase;

            &::before {
                ${this.divider}
            }
        `
    }

    SectionPortfolio () {
        return css`
            font-size: 21.5px;
        `
    }
}

export default new SiteNameStyles()
