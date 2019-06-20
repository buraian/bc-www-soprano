import { css } from 'emotion'


class FooterStyles {
    Wrapper () {
        return css`
            bottom: 0;
            left: 0;
            position: absolute;
            right: 0;
            text-align: center;
        `
    }
}

export default new FooterStyles()
