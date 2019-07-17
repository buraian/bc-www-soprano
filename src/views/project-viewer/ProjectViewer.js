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
    componentEnter: function (vnode) {
        anime({
            targets: vnode.dom,
            opacity: [0, 1],
            perspective: 1000,
            scaleX: [0.6, 1],
            scaleY: [0, 1],
            easing: 'linear',
            duration: this.componentEnterSpeed,
        })
    },
    componentExit: function (vnode) {
        anime({
            targets: vnode.dom,
            opacity: [1, 0],
            easing: 'easeInQuad',
            duration: this.componentExitSpeed,
            loop: false,
        })
    },
    componentUpdate: function (vnode, project) {
        anime({
            targets: vnode.dom,
            backgroundColor: tinycolor(project.colors.dominant).setAlpha(0.9).toRgbString(),
            duration: this.componentEnterSpeed,
            easing: 'linear',
        })
    },
}


export default {
    oninit: Portfolio.projectsLoadData(),
    oncreate: function (vnode) {
        animate.componentEnter(vnode)
        Portfolio.setState('isProjectViewerActive', true)
        Portfolio.setState('isFiltersEnabled', false)
    },
    onupdate: function (vnode) {
        const project = Portfolio.getProjectById(vnode.attrs.projectId)

        if (!Portfolio.isFetching && project) {
            animate.componentUpdate(vnode, project)
        }
    },
    onbeforeremove: function (vnode) {
        animate.componentExit(vnode)
        Portfolio.setState('isProjectViewerActive', false)
        Portfolio.setState('isFiltersEnabled', true)

        return new Promise(function (resolve) {
            setTimeout(resolve, animate.componentExitSpeed)
        })
    },
    view: function (vnode) {
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
