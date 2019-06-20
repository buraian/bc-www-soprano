import { injectGlobal } from 'emotion'
import tinycolor from 'tinycolor2'
import typography from 'Config/typography'

import blackOrchid from 'Assets/images/black-orchid.png'

injectGlobal`
    html, body {
        -moz-osx-font-smoothing: grayscale;
        -webkit-font-smoothing: antialiased;
        font-family: ${typography.serif};
        height: 100%;
    }

    body {
        background-color: ${tinycolor({ h: 0, s: 0, l: 7 }).toString()};
        background-image:
            url(${blackOrchid.src}),
            radial-gradient(
                circle at center,
                ${tinycolor({ h: 0, s: 0, l: 20 }).toString()},
                ${tinycolor({ h: 0, s: 0, l: 7 }).toString()}
            );
        color: ${tinycolor({ h: 0, s: 0, l: 100 }).toString()};
        margin: 0;
        overflow: hidden;
    }
`
