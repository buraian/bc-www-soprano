import { css } from 'emotion'


class ProjectShowcaseItem {
    Image () {
        return css`
            display: block;
            margin: 0 auto;
            max-width: 100%;
        `
    }

    Wrapper () {
        return css`
            display: none;
            height: 100%;
            opacity: 0;
            overflow-y: auto;
            padding: 84px 50px 84px 0;
            ${'' /* visibility: hidden; */}
            width: 100%;
            will-change: opacity, transform;
        `
    }
}

export default new ProjectShowcaseItem()
