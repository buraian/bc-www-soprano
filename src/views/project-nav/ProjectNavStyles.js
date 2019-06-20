import { css } from 'emotion'
import tinycolor from 'tinycolor2'
import typography from 'Config/typography'
import headerStyles from 'Views/header/HeaderStyles'
import metaStyles from 'Views/meta/MetaStyles'


class ProjectNavStyles {
    constructor () {
        this.images = {
            background:  { height: 52, width: 307 },
            close:       { height: 30, width:  56 },
            counter:     { height: 30, width:  62 },
            nextProject: { height: 14, width:  35 },
            prevProject: { height: 14, width:  35 },
            nextScreen:  { height: 30, width:  62 },
            prevScreen:  { height: 30, width:  62 },
        }
        this.wrapperHeight = this.images.background.height
        this.wrapperWidth = this.images.background.width
        this.zIndex = 10
    }

    Button () {
        return css`
            appearance: none;
            background: none;
            border: 0;
            color: ${tinycolor({ h: 0, s: 0, l: 90 }).toString()};
            cursor: pointer;
            display: block;
            font-family: ${typography.serif};
            font-size: 21px;
            font-weight: bold;

            &:focus,
            &:hover {
                color: ${tinycolor({ h: 0, s: 0, l: 100 }).toString()};
                outline: 0;

                svg {

                    path {
                        fill: ${tinycolor({ h: 0, s: 0, l: 13 }).lighten(5).toString()};
                    }
                }
            }

        `
    }

    Close () {
        return css`
            font-size: 28px;
            left: 238px;

            &,
            svg {
                height: ${this.images.close.height}px;
                width: ${this.images.close.width}px;
            }
        `
    }

    Counter () {
        return css`
            color: ${tinycolor({ h: 0, s: 0, l: 40 }).toString()};
            font-family: ${typography.monospace};
            left: 116px;

            &,
            svg {
                height: ${this.images.counter.height}px;
                width: ${this.images.counter.width}px;
            }
        `
    }

    Item () {
        return css`
            align-items: center;
            display: flex;
            justify-content: center;
            line-height: 0;
            position: absolute;
            top: 9px;
            z-index: 1;

            &:last-child {
                margin-right: 0;
            }

            svg {
                left: 0;
                position: absolute;
                top: 0;
                z-index: -1;
            }

        `
    }

    NextProject () {
        return css`
            color: ${tinycolor({ h: 0, s: 0, l: 70 }).toString()};
            font-size: 16px;
            left: 21px;
            padding: 1px;
            top: 25px;

            &,
            svg {
                height: ${this.images.nextProject.height}px;
                width: ${this.images.nextProject.width}px;
            }
        `
    }

    NextScreen () {
        return css`
            font-size: 34px;
            left: 183px;
            padding: 0 13px 7px 7px;

            &,
            svg {
                height: ${this.images.nextScreen.height}px;
                width: ${this.images.nextScreen.width}px;
            }
        `
    }

    PageNo () {
        return css`
            font-weight: bold;
        `
    }

    PrevProject () {
        return css`
            color: ${tinycolor({ h: 0, s: 0, l: 70 }).toString()};
            font-size: 16px;
            left: 13px;
            padding: 1px;

            &,
            svg {
                height: ${this.images.prevProject.height}px;
                width: ${this.images.prevProject.width}px;
            }
        `
    }

    PrevScreen () {
        return css`
            font-size: 34px;
            left: 49px;
            padding: 0 7px 7px 13px;

            &,
            svg {
                height: ${this.images.prevScreen.height}px;
                width: ${this.images.prevScreen.width}px;
            }
        `
    }

    ScreenProgressBar () {
        return css`
            background-color: ${tinycolor({ h: 0, s: 0, l: 100 }).toString()};
            border-radius: 3px;
            height: 3px;
        `
    }

    ScreenProgressWrapper () {
        return css`
            background-color: ${tinycolor({ h: 0, s: 0, l: 3 }).toString()};
            bottom: 4px;
            left: 31px;
            position: absolute;
            right: 31px;
        `
    }

    Wrapper () {
        return css`
            color: ${tinycolor({ h: 0, s: 0, l: 100 }).toString()};
            font-family: ${typography.serif};
            font-size: 14px;
            left: calc(50% + (${headerStyles.headerWidth}px - ${metaStyles.metaWidth}px) / 2);
            line-height: 1;
            margin-left: calc(${this.wrapperWidth}px / 2 * -1);
            position: fixed;
            top: 0;
            user-select: none;
            /* visibility: hidden; // Causes trouble with current Asynchronous setup */
            z-index: ${this.zIndex};

            a,
            a:focus {
                color: ${tinycolor({ h: 0, s: 0, l: 90 }).toString()};
                text-decoration: none;
            }

            a:hover {
                color: ${tinycolor({ h: 0, s: 0, l: 100 }).toString()};
            }

            &,
            > svg {
                height: ${this.wrapperHeight}px;
                width: ${this.wrapperWidth}px;
            }

            > svg {
                z-index: -1;
            }
        `
    }
}

export default new ProjectNavStyles()
