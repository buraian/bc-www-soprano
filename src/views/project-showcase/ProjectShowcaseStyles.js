import { css } from 'emotion'
import projectOverviewStyles from 'Views/project-overview/ProjectOverviewStyles'


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
            width: calc(99.9% - ${projectOverviewStyles.containerWidth.default}px);
        `
    }
}

export default new ProjectShowcase()
