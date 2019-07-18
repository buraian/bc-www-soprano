import m from 'mithril'
import Portfolio from 'Models/Portfolio'
import anime from 'animejs'
import paths from 'Helpers/portfolioApiPaths'

import styles from './ProjectShowcaseItemStyles'


let animate = {
    componentEnterSpeed: 300,
    componentEnterDelay: 500,
    componentExitSpeed: 300,
    componentEnter: function (vnode) {
        const begin = function () {
            vnode.dom.style.display = 'block'
            vnode.dom.style.visibility = 'visible'
        }
        const complete = function () {
            vnode.dom.style.overflowY = 'auto'
        }
        anime({
            targets: vnode.dom,
            opacity: [0, 1],
            translateX: Portfolio.projectChangeDirection === 'reverse' ? ['-5%', 0] : ['5%', 0],
            easing: 'easeOutQuad',
            duration: this.componentEnterSpeed,
            loop: false,
            delay: this.componentEnterDelay,
            begin: begin,
            changeBegin: begin,
            complete: complete,
            changeComplete: complete,
        })
    },
    componentExit: function (vnode) {
        const begin = function () {
            vnode.dom.style.overflowY = 'hidden'
        }
        const complete = function () {
            vnode.dom.style.removeProperty('visibility')
            vnode.dom.style.display = 'none'
        }
        anime({
            targets: vnode.dom,
            opacity: [1, 0],
            translateX: Portfolio.projectChangeDirection === 'reverse' ? [0, '5%'] : [0, '-5%'],
            easing: 'easeInQuad',
            duration: this.componentExitSpeed,
            loop: false,
            begin: begin,
            changeBegin: begin,
            complete: complete,
            changeComplete: complete,
        })
    },
}


export default {
    oncreate: function (vnode) {
        if (vnode.attrs.isActive) {
            animate.componentEnter(vnode)
        }
    },
    onbeforeupdate: function (vnode, old) {
        if (vnode.attrs.isActive && old.attrs.isActive) return false

        if (old.attrs.isActive) {
            animate.componentExit(old)
        }
    },
    onupdate: function (vnode) {
        if (vnode.attrs.isActive) {
            animate.componentEnter(vnode)
        }
    },
    view: function (vnode) {
        const { image } = vnode.attrs

        return <li className={styles.Wrapper()}>
            <img className={styles.Image()} src={`${paths.images.filename(image.filename)}`} />
        </li>
    },
}
