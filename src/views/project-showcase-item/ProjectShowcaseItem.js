import m from 'mithril'
import Portfolio from 'Models/Portfolio'
import anime from 'animejs'
import paths from 'Helpers/portfolioApiPaths'

import styles from './ProjectShowcaseItemStyles'


let animate = {
    componentEnterSpeed: 300,
    componentEnterDelay: 500,
    componentExitSpeed: 300,
    componentEnter: vnode => {
        const begin = () => {
            vnode.dom.style.display = 'block'
            vnode.dom.style.visibility = 'visible'
        }
        const complete = () => {
            vnode.dom.style.overflowY = 'auto'
        }
        anime({
            targets: vnode.dom,
            opacity: [0, 1],
            translateX: Portfolio.projectChangeDirection === 'reverse' ? ['-5%', 0] : ['5%', 0],
            easing: 'easeOutQuad',
            duration: animate.componentEnterSpeed,
            loop: false,
            delay: animate.componentEnterDelay,
            begin: begin,
            changeBegin: begin,
            complete: complete,
            changeComplete: complete,
        })
    },
    componentExit: vnode => {
        const begin = () => {
            vnode.dom.style.overflowY = 'hidden'
        }
        const complete = () => {
            vnode.dom.style.removeProperty('visibility')
            vnode.dom.style.display = 'none'
        }
        anime({
            targets: vnode.dom,
            opacity: [1, 0],
            translateX: Portfolio.projectChangeDirection === 'reverse' ? [0, '5%'] : [0, '-5%'],
            easing: 'easeInQuad',
            duration: animate.componentExitSpeed,
            loop: false,
            begin: begin,
            changeBegin: begin,
            complete: complete,
            changeComplete: complete,
        })
    },
}


export default {
    oncreate: vnode => {
        if (vnode.attrs.isActive) {
            animate.componentEnter(vnode)
        }
    },
    onbeforeupdate: (vnode, old) => {
        if (vnode.attrs.isActive && old.attrs.isActive) return false

        if (old.attrs.isActive) {
            animate.componentExit(old)
        }
    },
    onupdate: vnode => {
        if (vnode.attrs.isActive) {
            animate.componentEnter(vnode)
        }
    },
    view: vnode => {
        const { image } = vnode.attrs

        return <li className={styles.Wrapper()}>
            <img className={styles.Image()} src={`${paths.images.filename(image.filename)}`} />
        </li>
    },
}
