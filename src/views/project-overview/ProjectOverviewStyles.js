import { css } from 'emotion'
import tinycolor from 'tinycolor2'
import typography from 'Config/typography'


class ProjectOverviewStyles {
    constructor () {
        this.containerWidth = {
            default: 330,
        }
        this.largeBodyFont = 40
        this.images = {
            headingDecorator: {
                height: 4,
                width: 310,
            },
            roleInsigniaActive: {
                height: 39,
                width: 31,
            },
            roleInsigniaInactive: {
                height: 22,
                width: 16,
            },
        }
    }

    Body () {
        return css`
            font-size: 14px;
        `
    }

    Feature () {
        return css`
            span {
                display: inline-block;
                margin-right: 5px;
                white-space: nowrap;
            }
        `
    }

    FeatureWrapper () {
        return css`
            font-size: 14px;
            margin-bottom: 1.5em;
        `
    }

    Group () {
        return css`
            margin-bottom: 1.5rem;
        `
    }

    Header () {
        return css``
    }

    Heading () {
        return css`
            display: block;
            font-family: ${typography.title};
            font-size: 21px;
            line-height: 1;
            margin-bottom: 8px;
            padding-bottom: 3px;
            position: relative;
            text-transform: uppercase;

            svg {
                bottom: 0;
                height: ${this.images.headingDecorator.height}px;
                left: 0;
                position: absolute;
                width: 100%;
            }
        `
    }

    LinesOfCode () {
        return css`
            font-family: ${typography.display};
            font-size: ${this.largeBodyFont}px;
            line-height: 1;
        `
    }

    Logo () {
        return css`
            align-items: center;
            display: flex;
            height: 65px;
            margin-top: 1.8rem;

            svg {
                height: 100%;
                max-width: 120px;
                width: auto;
            }
        `
    }

    ProjectType () {
        return css`
            background-color: ${tinycolor({ h: 0, s: 0, l: 10 }).toString()};
            border-radius: 3px;
            display: inline-block;
            font-size: 18px;
            margin-bottom: 1.5em;
            padding: 2px 12px 4px;
            text-transform: uppercase;
        `
    }

    Role () {
        return css`
            svg {
                height: ${this.images.roleInsigniaActive.height}px;
                left: -8px;
                position: absolute;
                top: calc(50% - ${this.images.roleInsigniaActive.height}px / 2 - 4px);
                width: ${this.images.roleInsigniaActive.width}px;
            }
        `
    }

    RoleBlank () {
        return css`
            user-select: none;
        `
    }

    RoleGhost () {
        return css`
            filter: blur(1px);
            left: 5px;
            opacity: 0.3;
            padding-left: 24px;
            position: absolute;
            top: 3px;
            user-select: none;
            z-index: -1;

            svg {
                height: ${this.images.roleInsigniaInactive.height}px;
                left: 0;
                position: absolute;
                top: calc(50% - ${this.images.roleInsigniaInactive.height}px / 2 - 4px);
                width: ${this.images.roleInsigniaInactive.width}px;
            }
        `
    }

    RoleWrapper () {
        return css`
            padding-left: 24px;
            position: relative;
        `
    }

    Roles () {
        return css`
            font-family: ${typography.display};
            font-size: 36px;
            line-height: 1;
            position: relative;
            text-transform: uppercase;
        `
    }

    RolesWrapper () {
        return css``
    }

    Stats () {
        return css``
    }

    Tech () {
        return css``
    }

    TechWrapper () {
        return css``
    }

    Title () {
        return css`
            font-family: ${typography.display};
            font-size: 48px;
            letter-spacing: -1px;
            line-height: 0.9;
            margin-bottom: .3rem;
        `
    }

    Wrapper () {
        return css`
            float: left;
            font-family: ${typography.monospace};
            font-weight: bold;
            padding: 84px 40px 0 50px;
            position: relative;
            will-change: color, opacity, transform;
            width: ${this.containerWidth.default}px;
            z-index: 1;
        `
    }

    YearPublished () {
        return css`
            font-family: ${typography.display};
            font-size: ${this.largeBodyFont}px;
            line-height: 1;
        `
    }

    YearPublishedWrapper () {
        return css``
    }
}

export default new ProjectOverviewStyles()
