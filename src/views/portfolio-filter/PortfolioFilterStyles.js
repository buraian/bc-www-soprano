import { css } from 'emotion'
import tinycolor from 'tinycolor2'


class PortfolioFilterStyles {
    constructor () {
        this.textShadow = `0 -1px 0 ${tinycolor({ h: 0, s: 0, l: 0 }).toString()}`
        this.LedShared = css`
            position: absolute;
            top: 50%;
        `
    }

    ButtonShared () {
        return css`
            align-items: center;
            background-color: ${tinycolor({ h: 0, s: 0, l: 13 }).toString()};
            color: ${tinycolor({ h: 0, s: 0, l: 40 }).toString()};
            display: flex;
            font-weight: bold;
            cursor: pointer;
            padding-left: 30px;
            position: relative;
            transition: color .3s, text-shadow .5s;
            white-space: nowrap;

            .${this.Group()}:first-of-type & {
                border-radius: 2px 2px 0 0;
            }

            .${this.Group()}:last-child & {
                border-radius: 0 0 2px 2px;
            }

            .${this.Input()}:checked + & {
                background-color: ${tinycolor({ h: 0, s: 0, l: 7 }).toString()};
                color: ${tinycolor({ h: 0, s: 0, l: 100 }).toString()};
                text-shadow: ${this.textShadow}, 0 0 6px ${tinycolor({ h: 0, s: 0, l: 30, a: 0.5 }).toString()};
            }

            .${this.Fieldset()}:disabled & {
                background-color: ${tinycolor({ h: 0, s: 0, l: 3 }).toString()};
                color: ${tinycolor({ h: 0, s: 0, l: 15 }).toString()};
                cursor: not-allowed;
                text-shadow: none;
            }

            &:hover {
                transform: rotate3d(1, 100, -10, 1deg);
            }
        `
    }

    ButtonSmall () {
        return css`
            ${this.ButtonShared()}
            font-size: 11px;
            font-weight: normal;
            height: 23px;
        `
    }

    ButtonMedium () {
        return css`
            ${this.ButtonShared()}
            font-size: 13px;
            height: 31px;
            text-transform: uppercase;
        `
    }

    ButtonLarge () {
        return css`
            ${this.ButtonShared()}
            font-size: 17px;
            height: 41px;
        `
    }

    Fieldset () {
        return css`
            background-color: ${tinycolor({ h: 0, s: 0, l: 3 }).toString()};
            border-radius: 4px;
            border: 0;
            margin: 0 0 11px;
            padding: 3px;
            position: relative;
            user-select: none;
        `
    }

    Form () {
        return css`
            width: 132px;
        `
    }

    Group () {
        return css`
            margin-bottom: 1px;
            position: relative;

            &:last-child {
                margin-bottom: 0;
            }

            &::after {
                background-color: ${tinycolor({ h: 0, s: 0, l: 9 }).toString()};
                content: '';
                height: 19px;
                left: 22px;
                margin-top: -10px;
                position: absolute;
                top: 50%;
                width: 1px;
            }
        `
    }

    Heading () {
        return css`
            background-color: ${tinycolor({ h: 0, s: 0, l: 3 }).toString()};
            border-radius: 3px;
            color: ${tinycolor({ h: 0, s: 0, l: 50 }).toString()};
            display: inline-block;
            font-size: 10px;
            margin: 0;
            padding: 0.75rem 3px;
            position: absolute;
            right: calc(100% + 4px);
            text-align: center;
            text-transform: uppercase;
            top: 3px;
            transform: rotate(180deg);
            white-space: nowrap;
            writing-mode: vertical-lr;

            .${this.Fieldset()}:disabled & {
                color: ${tinycolor({ h: 0, s: 0, l: 15 }).toString()};
            }
        `
    }

    Input () {
        return css`
            position: absolute;
        `
    }

    LedInner () {
        return css`
            ${this.LedShared}
            background-color: ${tinycolor({ h: 0, s: 0, l: 30 }).toString()};
            border-radius: 9px;
            height: 9px;
            left: 7px;
            margin-top: -5px;
            width: 9px;
            transition: background-color .3s, box-shadow .5s;

            .${this.Input()}:checked ~ & {
                background-color: ${tinycolor({ h: 0, s: 0, l: 100 }).toString()};
                box-shadow: 0 0 6px ${tinycolor({ h: 0, s: 0, l: 30, a: 0.5 }).toString()};
            }

            .${this.Fieldset()}:disabled & {
                background-color: ${tinycolor({ h: 0, s: 0, l: 15 }).toString()};
            }

            .${this.Fieldset()}:disabled .PortfolioFilter-input:checked ~ & {
                background-color: ${tinycolor({ h: 0, s: 0, l: 15 }).toString()};
                box-shadow: none;
            }
        `
    }

    LedOuter () {
        return css`
            ${this.LedShared}
            background-color: ${tinycolor({ h: 0, s: 0, l: 3 }).toString()};
            border-radius: 11px;
            height: 11px;
            left: 6px;
            margin-top: -6px;
            width: 11px;
        `
    }

    Title () {
        return css`
            color: ${tinycolor({ h: 0, s: 0, l: 50 }).toString()};
            display: block;
            font-size: 13px;
            font-weight: bold;
            margin-bottom: 13px;
            position: relative;
            text-align: center;
            text-transform: uppercase;

            &::before {
                background-color: ${tinycolor({ h: 0, s: 0, l: 3 }).toString()};
                bottom: -2px;
                content: '';
                height: 3px;
                left: 0;
                position: absolute;
                right: 0;
            }

            span {
                background-color: ${tinycolor({ h: 0, s: 0, l: 3 }).toString()};
                border-radius: 3px 3px 0 0;
                display: inline-block;
                padding: 5px 0.75rem 3px;
            }
        `
    }

    Wrapper () {
        return css`
            display: flex;
            justify-content: center;
            text-shadow: ${this.textShadow};
        `
    }
}

export default new PortfolioFilterStyles()
