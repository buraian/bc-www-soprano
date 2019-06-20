import { css } from 'emotion'
import { mQueryUp } from 'Config/config'


class PortfolioListStyles {
    constructor () {
        this.wrapperBorderRadius = 9
        this.gutter = {
            // default: '1.5%',
            default: '17px',
            desktopLarge: '20px',
        }
        this.offsetBottom = 12
        this.offsetTop = 12
        this.initialOpacity = 0
    }

    ItemWrapper () {
        return css`
            display: block;
            float: left;
            margin: calc(${this.gutter.default} / 2);
            opacity: ${this.initialOpacity};
            overflow: hidden;
            position: relative;
            width: calc(99.9% * 1/3 - ${this.gutter.default});

            ${mQueryUp('laptopHiDpi')} {
                width: calc(99.9% * 1/5 - ${this.gutter.default});
            }

            ${mQueryUp('desktopLarge')} {
                margin: calc(${this.gutter.desktopLarge} / 2);
                width: calc(99.9% * 1/9 - ${this.gutter.desktopLarge});
            }

            &::before {
                content: '';
                display: block;
                padding-top: 100%;
            }
        `
    }

    Wrapper () {
        return css`
            border-radius: ${this.wrapperBorderRadius}px;

            &::after {
                /* clearfix */
                content: '';
                display: table;
                clear: both;
            }
        `
    }
}

export default new PortfolioListStyles()
