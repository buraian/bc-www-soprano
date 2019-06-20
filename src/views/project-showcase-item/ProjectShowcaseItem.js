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
        anime({
            targets: vnode.dom,
            opacity: [0, 1],
            translateX: Portfolio.projectChangeDirection === 'reverse' ? ['-5%', 0] : ['5%', 0],
            easing: 'easeOutQuad',
            duration: this.componentEnterSpeed,
            loop: false,
            delay: this.componentEnterDelay,
            changeBegin: function () {
                vnode.dom.style.display = 'block'
                vnode.dom.style.visibility = 'visible'
            },
        })
    },
    componentExit: function (vnode) {
        anime({
            targets: vnode.dom,
            opacity: [1, 0],
            translateX: Portfolio.projectChangeDirection === 'reverse' ? [0, '5%'] : [0, '-5%'],
            easing: 'easeInQuad',
            duration: this.componentExitSpeed,
            loop: false,
            complete: function () {
                vnode.dom.style.removeProperty('visibility')
                vnode.dom.style.display = 'none'
            },
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

        return <li className={styles.Wrapper()} key={image._id}>
            <img className={styles.Image()} src={`${paths.images.filename(image.filename)}`} />
        </li>
    },
}
