import { css } from 'emotion'


class ProjectShowcase {
    List () {
        return css`
            height: 100%;
            list-style: none;
            margin: 0;
            padding: 0;
            position: relative;
        `
    }

    Wrapper () {
        return css`
            float: left;
            height: 100%;
            width: calc(99.9% * 3/4);
        `
    }
}

export default new ProjectShowcase()
