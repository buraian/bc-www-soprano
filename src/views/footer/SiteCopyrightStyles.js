import { css } from 'emotion'
import tinycolor from 'tinycolor2'


class SiteCopyrightStyles {
    Wrapper () {
        return css`
            color: ${tinycolor({ h: 0, s: 0, l: 50 }).toString()};
            font-size: 11px;
            padding: 2rem .5rem;
            text-align: center;
        `
    }
}

export default new SiteCopyrightStyles()
