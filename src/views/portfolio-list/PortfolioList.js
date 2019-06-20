import m from 'mithril'
import Portfolio from 'Models/Portfolio'
import PortfolioListCard from 'Views/portfolio-list-card/PortfolioListCard'
import PortfolioListThumbnail from 'Views/portfolio-list-thumbnail/PortfolioListThumbnail'
import anime from 'animejs'
import massageRole from 'Helpers/massageRole'
import slugify from 'underscore.string/slugify'

import styles from './PortfolioListStyles'


let animate = {
    componentEnterSpeed: 300,
    componentFilterInSpeed: 300,
    componentFilterOutSpeed: 300,
    delayTimer: 0,
    delayIncrement: 50,
    componentEnter: function (vnode) {
        anime({
            targets: vnode.dom,
            opacity: [0, 1],
            easing: 'linear',
            duration: this.componentEnterSpeed,
        })
    },
    componentFilterIn: function (vnode, oncreate = false, delay = 0) {
        anime({
            targets: vnode.dom,
            opacity: oncreate ? [0, 0.9] : [0.1, 0.9],
            easing: 'linear',
            duration: this.componentFilterInSpeed,
            delay: oncreate ? this.componentEnterSpeed + delay : delay,
        })
    },
    componentFilterOut: function (vnode) {
        anime({
            targets: vnode.dom,
            opacity: [0.9, 0.1],
            easing: 'linear',
            duration: this.componentFilterOutSpeed,
        })
    },
}

/**
 * Is Component Filtered In?
 *
 * @param {Array} roles
 * @param {String} projectType
 *
 * @return {Boolean}
 *
 * 1. None are filtered so all are filtered.
 */
function isFilteredIn (project) {
    if (Portfolio.projectFiltersActive.length === 0) return true // 1

    const roles = project.roles.map(role => slugify(massageRole(role)))
    const projectType = slugify(project.projectType)

    const hasRoles = roles.some(role => Portfolio.projectFiltersActive.some(filter => filter.value === role))
    const hasProjectTypes = Portfolio.projectFiltersActive.some(filter => filter.value === projectType)

    return hasRoles || hasProjectTypes
}

function listItemOnCreate (vnode) {
    if (vnode.attrs.filteredIn) {
        animate.componentFilterIn(vnode, true, animate.delayTimer)
        animate.delayTimer += animate.delayIncrement
    }
}

function listItemOnBeforeUpdate (vnode, old) {
    vnode.state.isFilterStatusChanging = old.attrs.filteredIn !== vnode.attrs.filteredIn

    if (old.attrs.filteredIn && !vnode.attrs.filteredIn) {
        animate.componentFilterOut(old)
    }
}

function listItemOnUpdate (vnode) {
    animate.delayTimer = 0

    if (vnode.state.isFilterStatusChanging && vnode.attrs.filteredIn) {
        animate.componentFilterIn(vnode)
    }
}

export default {
    oninit: Portfolio.projectsLoadData(),
    oncreate: function (vnode) {
        animate.componentEnter(vnode)
    },
    view: function () {
        return <div className={styles.Wrapper()}>
            {Portfolio.projectsIsFetching ? (
                <div className="PortfolioList-loading--wrapper">
                    <div className="PortfolioList-loading">Loading&hellip;</div>
                </div>
            ) : (
                Portfolio.projects.map((project, i) => [

                    /* Card */
                    <PortfolioListCard
                        cssClasses={styles.ItemWrapper()}
                        filteredIn={isFilteredIn(project)}
                        project={project}
                        projectNo={i + 1}
                        key={project._id}
                        oncreate={listItemOnCreate}
                        onbeforeupdate={listItemOnBeforeUpdate}
                        onupdate={listItemOnUpdate}
                    />,

                    /* Thumbnail */
                    project.images.map(image =>
                        <PortfolioListThumbnail
                            cssClasses={styles.ItemWrapper()}
                            filteredIn={isFilteredIn(project)}
                            project={project}
                            screen={image}
                            key={image._id}
                            oncreate={listItemOnCreate}
                            onbeforeupdate={listItemOnBeforeUpdate}
                            onupdate={listItemOnUpdate}
                        />
                    ),
                ])
            )}
        </div>
    },
}
