import { css } from 'emotion'


class HeaderStyles {
    constructor () {
        this.headerWidth = 205
    }

    Wrapper () {
        return css`
            bottom: 0;
            left: 0;
            position: fixed;
            top: 0;
            width: ${this.headerWidth}px;
        `
    }
}

export default new HeaderStyles()
