import { css, keyframes } from 'emotion'
import tinycolor from 'tinycolor2'
import positionMainWindow from 'Config/mixins/positionMainWindow'
import typography from 'Config/typography'

import oldMath from 'Assets/images/old-mathematics.png'


class ProjectViewer {
    constructor () {
        this.noiseAnimation = keyframes`
              0% { transform: translate(0) }
             10% { transform: translate(-5%, -5%) }
             20% { transform: translate(-10%, 5%) }
             30% { transform: translate(5%, -10%) }
             40% { transform: translate(-5%, 15%) }
             50% { transform: translate(-10%, 5%) }
             60% { transform: translate(15%) }
             70% { transform: translateY(10%) }
             80% { transform: translate(-15%) }
             90% { transform: translate(10%, 5%) }
            100% { transform: translate(5%) }
        `
    }

    Container () {
        return css`
            color: ${tinycolor({ h: 0, s: 0, l: 100 }).toString()};
            font-family: ${typography.sansSerif};
            height: 100%;

            a,
            a:focus {
                color: ${tinycolor({ h: 0, s: 0, l: 100 }).toString()};
                text-decoration: none;
            }
        `
    }

    Wrapper () {
        return css`
            ${positionMainWindow()}
            background-color: ${tinycolor({ h: 0, s: 0, l: 100, a: 0.9 }).toString()};
            box-shadow: inset 0 0 50px 20px hsla(0, 0%, 0%, 0.3);
            overflow: hidden;
            will-change: background-color, opacity, scale;

            &::before {
                animation: ${this.noiseAnimation} 3s steps(4) infinite;
                background-image: url(${oldMath.src});
                bottom: -25%;
                content: '';
                left: -25%;
                position: absolute;
                right: -25%;
                top: -25%;
            }
        `
    }
}

export default new ProjectViewer()
