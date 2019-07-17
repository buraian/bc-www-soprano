import m from 'mithril'
import { Link } from 'mithril/route'
import Portfolio from 'Models/Portfolio'
import anime from 'animejs'
import { cx } from 'emotion'

import styles from './ProjectNavStyles'

import background        from './images/ProjectNav-background.svg'
import buttonPrevProject from './images/ProjectNav-button-prev-project.svg'
import buttonNextProject from './images/ProjectNav-button-next-project.svg'
import counter           from './images/ProjectNav-counter.svg'
import buttonPrevScreen  from './images/ProjectNav-button-prev-screen.svg'
import buttonNextScreen  from './images/ProjectNav-button-next-screen.svg'
import buttonClose       from './images/ProjectNav-button-close.svg'


let animate = {
    componentEnterSpeed: 200,
    componentExitSpeed: 300,
    componentEnter: function (vnode) {
        anime({
            targets: vnode.dom,
            translateY: ['-100%', 0],
            easing: 'easeOutQuad',
            duration: this.componentEnterSpeed,
            loop: false,
            begin: function () {
                // TODO: Fix. Currently not working with site's Asynchronous Portfolio
                //       setup. (vnode.dom doesn't exist yet.)
                vnode.dom.style.visibility = 'visible'
            },
        })
    },
    componentExit: function (vnode) {
        anime({
            targets: vnode.dom,
            translateY: [0, '-100%'],
            easing: 'easeInQuad',
            duration: this.componentExitSpeed,
            loop: false,
            complete: function () {
                vnode.dom.style.removeProperty('visibility')
            },
        })
    },
    progressBar: function (vnode, width) {
        anime({
            targets: vnode.dom,
            width: `${width}%`,
            easing: 'linear',
            duration: 100,
            loop: false,
        })
    },
}

// Bind Arrow Left/Right Keys to Component
function handleKeydown (e) {
    if (e.key === 'ArrowLeft') {
        document.getElementById('ProjectNav-prevScreen').click()
    }
    else if (e.key === 'ArrowRight') {
        document.getElementById('ProjectNav-nextScreen').click()
    }
}

export default {
    oninit: Portfolio.projectsLoadData(),
    oncreate: function (vnode) {
        document.addEventListener('keydown', handleKeydown)
        if (!Portfolio.projectsIsFetching) {
            animate.componentEnter(vnode)
        }
    },
    onbeforeremove: function (vnode) {
        document.removeEventListener('keydown', handleKeydown)
        animate.componentExit(vnode)

        return new Promise(function (resolve) {
            setTimeout(resolve, animate.componentExitSpeed)
        })
    },
    view: function (vnode) {
        if (Portfolio.projectsIsFetching) return false

        const { projectId, screenId } = vnode.attrs
        const project = Portfolio.getProjectById(projectId)
        const screenNo = Portfolio.getScreenIndex(screenId)
        const totalScreens = (project.images.length - 1)
        const percentComplete = ((screenNo + 1) / (totalScreens + 1) * 100)

        return <div className={styles.Wrapper()}>

            {/* Background SVG */}
            {m.trust(background)}

            {/* Previous Project Button */}
            <button
                className={cx(styles.Button(), styles.Item(), styles.PrevProject())}
                onclick={(e) => {
                    e.redraw = false
                    Portfolio.setState('projectChangeDirection', 'reverse', false)
                    m.route.set('/portfolio/:projectId/', {
                        projectId: Portfolio.getProjectById(vnode.attrs.projectId, -1)._id,
                    })
                }}>
                {m.trust(buttonPrevProject)}
                &larr;
            </button>

            {/* Next Project Button */}
            <button
                className={cx(styles.Button(), styles.Item(), styles.NextProject())}
                onclick={(e) => {
                    e.redraw = false
                    Portfolio.setState('projectChangeDirection', 'default', false)
                    m.route.set('/portfolio/:projectId/', {
                        projectId: Portfolio.getProjectById(vnode.attrs.projectId, +1)._id,
                    })
                }}>
                {m.trust(buttonNextProject)}
                &rarr;
            </button>

            {/* Project Number Display */}
            <div className={cx(styles.Item(), styles.Counter())}>
                {m.trust(counter)}
                <span className={styles.PageNo()}>{Portfolio.getPageNum(vnode.attrs.projectId)}</span>
                <span> / </span>
                <span>{Portfolio.getTotalProjects()}</span>
            </div>

            {/* Previous Screen Button */}
            <button
                className={cx(styles.Button(), styles.Item(), styles.PrevScreen())}
                id="ProjectNav-prevScreen"
                onclick={(e) => {
                    e.redraw = false
                    Portfolio.setState('projectChangeDirection', 'reverse', false)
                    const params = Portfolio.buildScreenPath(screenId, -1, true)
                    m.route.set('/portfolio/:projectId/:screenId/', {
                        projectId: params.projectId,
                        screenId: params.screenId,
                    })
                }}>
                {m.trust(buttonPrevScreen)}
                &lsaquo;
            </button>

            {/* Next Screen Button */}
            <button
                className={cx(styles.Button(), styles.Item(), styles.NextScreen())}
                id="ProjectNav-nextScreen"
                onclick={(e) => {
                    e.redraw = false
                    Portfolio.setState('projectChangeDirection', 'default', false)
                    const params = Portfolio.buildScreenPath(screenId, +1, true)
                    m.route.set('/portfolio/:projectId/:screenId/', {
                        projectId: params.projectId,
                        screenId: params.screenId,
                    })
                }}>
                {m.trust(buttonNextScreen)}
                &rsaquo;
            </button>

            {/* Close Button */}
            <Link
                href="/portfolio/"
                className={cx(styles.Button(), styles.Item(), styles.Close())}>
                {m.trust(buttonClose)}
                &times;
            </Link>

            {/* Screen Progress Bar */}
            <div className={styles.ScreenProgressWrapper()}>
                <div
                    className={styles.ScreenProgressBar()}
                    oncreate={(vnode) => animate.progressBar(vnode, percentComplete)}
                    onupdate={(vnode) => animate.progressBar(vnode, percentComplete)}
                    style={{ backgroundColor: project.colors.primary }}></div>
            </div>
        </div>
    },
}
