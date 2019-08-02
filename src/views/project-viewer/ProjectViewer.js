import m from 'mithril'
import Portfolio from 'Models/Portfolio'
import ProjectOverview from 'Views/project-overview/ProjectOverview'
import ProjectShowcase from 'Views/project-showcase/ProjectShowcase'
import anime from 'animejs'
import tinycolor from 'tinycolor2'

import styles from './ProjectViewerStyles'


let animate = {
    componentEnterSpeed: 200,
    componentExitSpeed: 300,
    componentEnter: vnode => {
        anime({
            targets: vnode.dom,
            opacity: [0, 1],
            perspective: 1000,
            scaleX: [0.6, 1],
            scaleY: [0, 1],
            easing: 'linear',
            duration: animate.componentEnterSpeed,
        })
    },
    componentExit: vnode => {
        anime({
            targets: vnode.dom,
            opacity: [1, 0],
            easing: 'easeInQuad',
            duration: animate.componentExitSpeed,
            loop: false,
        })
    },
    componentUpdate: (vnode, project) => {
        anime({
            targets: vnode.dom,
            backgroundColor: tinycolor(project.colors.dominant).setAlpha(0.9).toRgbString(),
            duration: animate.componentEnterSpeed,
            easing: 'linear',
        })
    },
}


export default {
    oninit: Portfolio.projectsLoadData(),
    oncreate: vnode => {
        animate.componentEnter(vnode)
        Portfolio.setState('isProjectViewerActive', true)
        Portfolio.setState('isFiltersEnabled', false)
    },
    onupdate: vnode => {
        const project = Portfolio.getProjectById(vnode.attrs.projectId)

        if (!Portfolio.isFetching && project) {
            animate.componentUpdate(vnode, project)
        }
    },
    onbeforeremove: vnode => {
        animate.componentExit(vnode)
        Portfolio.setState('isProjectViewerActive', false)
        Portfolio.setState('isFiltersEnabled', true)

        return new Promise(resolve => {
            setTimeout(resolve, animate.componentExitSpeed)
        })
    },
    view: vnode => {
        const project = Portfolio.getProjectById(vnode.attrs.projectId)

        return <div className={styles.Wrapper()}>
            {Portfolio.isFetching || !project
                ? <div className="ProjectViewer-loading--wrapper">
                    <div className="ProjectViewer-loading">Loading...</div>
                </div>
                : <div className={styles.Container()}>
                    <ProjectOverview project={project} />
                    <ProjectShowcase project={project} screenId={vnode.attrs.screenId} />
                </div>
            }
        </div>
    },
}
