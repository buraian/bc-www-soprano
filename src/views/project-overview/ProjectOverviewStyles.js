import { css } from 'emotion'
import typography from 'Config/typography'


class ProjectOverviewStyles {
    constructor () {
        this.groupPaddingLeft = 10
        this.largeBodyFont = 40
        this.images = {
            headingDecorator: {
                height: 21,
                width: 44,
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
            padding-left: ${this.groupPaddingLeft}px;
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
            border-radius: 2px;
            display: inline-block;
            font-size: 14px;
            height: 21px;
            line-height: 1;
            margin-bottom: 8px;
            padding: 3px ${this.groupPaddingLeft}px;
            position: relative;
            text-transform: uppercase;

            svg {
                height: ${this.images.headingDecorator.height}px;
                left: calc(100% - 3px);
                position: absolute;
                top: 0;
                width: ${this.images.headingDecorator.width}px;
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
            font-size: 21px;
            font-style: italic;
            margin-bottom: 1.2em;
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
            font-size: 2.25vw;
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
            font-size: 3vw;
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
            padding: 84px 0 0 50px;
            position: relative;
            will-change: color, opacity, transform;
            width: calc(99.9% * 1/4);
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
