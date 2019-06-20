import { css, keyframes } from 'emotion'
import tinycolor from 'tinycolor2'
import typography from 'Config/typography'

import oldMath from 'Assets/images/old-mathematics.png'


class PortfolioListCardStyles {
    constructor () {
        this.innerPaddingX = '7%'
        this.innerPaddingY = '5%'
        this.decorator = {
            height: 30,
            width: 30,
        }
        this.portfolioListCardDecoratorActive = keyframes`
            from { transform: scale(1, 1); }
            to   { transform: scale(1.5, 1.5); }
        `
        this.portfolioListCardDecoratorInactive = keyframes`
            from { transform: scale(1.5, 1.5); }
            to   { transform: scale(1, 1); }
        `
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

    Counter () {
        return css`
            font-family: ${typography.monospace};
            font-size: 16px;
            font-weight: bold;
            position: absolute;
            left: ${this.innerPaddingX};
            top: 10%;
        `
    }

    Decorator () {
        return css`
            animation: ${this.portfolioListCardDecoratorInactive} 0.3s 1 forwards;
            bottom: 10px;
            height: ${this.decorator.height}px;
            position: absolute;
            right: 10px;
            transform-origin: 100% 100%;
            width: ${this.decorator.width}px;

            svg {
                height: 100%;
                width: 100%;
            }

            .${this.Wrapper()}:hover &,
            .${this.Wrapper()}:focus & {
                animation: ${this.portfolioListCardDecoratorActive} 0.3s 1 forwards;
            }
        `
    }

    Header () {
        return css`
            left: ${this.innerPaddingX};
            position: absolute;
            right: ${this.innerPaddingX};
            top: 27%;
        `
    }

    Logo () {
        return css`
            align-items: center;
            bottom: ${this.innerPaddingY};
            display: flex;
            height: 5vh;
            left: ${this.innerPaddingX};
            position: absolute;
            width: 84%;

            svg {
                height: 100%;
                max-width: 80px;
                width: auto;
            }
        `
    }

    ProjectType () {
        return css`
            font-family: ${typography.monospace};
            font-size: 15px;
            font-style: italic;
            font-weight: bold;
        `
    }

    Title () {
        return css`
            font-size: 29px;
            font-weight: bold;
            line-height: 1.1;
            margin-bottom: 3px;
        `
    }

    Wrapper () {
        return css`
            border-radius: 5px;
            color: ${tinycolor({ h: 0, s: 0, l: 100 }).toString()};
            font-family: ${typography.sansSerif};
            position: relative;
            user-select: none;

            &::after {
                animation: ${this.noiseAnimation} 3s steps(4) infinite;
                background-image: url(${oldMath.src});
                bottom: -25%;
                content: '';
                left: -25%;
                position: absolute;
                right: -25%;
                top: -25%;
                z-index: -1;
            }

            &:active {

                &::after {
                    transform: scale(.99);
                }
            }
        `
    }
}

export default new PortfolioListCardStyles()
