import m from 'mithril'
import Portfolio from 'Models/Portfolio'
import anime from 'animejs'
import { cx } from 'emotion'
import massageRole from 'Helpers/massageRole'
import replaceSVGFill from 'Helpers/replaceSvgFill'

import styles from './ProjectOverviewStyles'

import headingDecorator from './images/heading-decorator.svg'
import roleInsigniaActive from './images/role-insignia-active.svg'
import roleInsigniaInactive from './images/role-insignia-inactive.svg'


let animate = {
    componentEnterSpeed: 300,
    componentEnterDelay: 300,
    componentEnter: vnode => {
        anime({
            targets: vnode.dom,
            opacity: [0, 1],
            translateX: Portfolio.projectChangeDirection === 'reverse' ? ['-5%', 0] : ['5%', 0],
            easing: 'linear',
            duration: animate.componentEnterSpeed,
            loop: false,
            delay: animate.componentEnterDelay,
        })
    },
}

function renderRoles (project) {
    return <div className={cx(styles.Body(), styles.Roles())}>
        {Portfolio.projectDefaults.roles.sort().map(role =>
            <div className={styles.RoleWrapper()}>

                {/* Ghost Element */}
                {role !== 'Layout' || project.roles.includes('Layout')
                    ? (
                        <div className={styles.RoleGhost()}>
                            {m.trust(replaceSVGFill(roleInsigniaInactive, project.colors.primary))}
                            {massageRole(role)}
                        </div>
                    )
                    : null
                }

                {/* Actual Element */}
                {project.roles.includes(role)
                    ? (
                        <div className={styles.Role()}>
                            {m.trust(replaceSVGFill(roleInsigniaActive, project.colors.primary))}
                            {massageRole(role)}
                        </div>
                    )
                    : role !== 'Layout'
                        ? <div className={styles.RoleBlank()}>&nbsp;</div>
                        : null
                }
            </div>
        )}
    </div>
}


export default {
    oncreate: vnode => {
        animate.componentEnter(vnode)
    },
    view: vnode => {
        const { project } = vnode.attrs

        return (
            <div className={styles.Wrapper()} style={{ color: project.colors.primary }}>

                {/* Header */}
                <header className={styles.Header()}>
                    <div className={styles.Title()}>{project.title}</div>
                    <div className={styles.ProjectType()}>{project.projectType}</div>
                </header>

                {/* Roles */}
                <div className={cx(styles.Group(), styles.RolesWrapper())}>
                    <div className={styles.Heading()} style={{
                        backgroundColor: project.colors.primary,
                        color: project.colors.dominant,
                    }}>
                        {m.trust(replaceSVGFill(headingDecorator, project.colors.primary))}
                        Roles
                    </div>
                    {renderRoles(project)}
                </div>

                {/* Features */}
                {project.features.length > 0
                    ? (
                        <div className={cx(styles.Group(), styles.FeatureWrapper())}>
                            <div className={styles.Heading()} style={{
                                backgroundColor: project.colors.primary,
                                color: project.colors.dominant,
                            }}>
                                {m.trust(replaceSVGFill(headingDecorator, project.colors.primary))}
                                Features
                            </div>
                            <div className={cx(styles.Body(), styles.Feature())}>
                                {project.features.sort().map((feature, idx, array) => {
                                    let separator = idx !== array.length - 1 ? ', ' : null
                                    return <span>{massageRole(feature)}{separator}</span>
                                })}
                            </div>
                        </div>
                    )
                    : null
                }

                {/* Techs */}
                {project.techs.length > 0
                    ? (
                        <div className={cx(styles.Group(), styles.TechWrapper())}>
                            <div className={styles.Heading()} style={{
                                backgroundColor: project.colors.primary,
                                color: project.colors.dominant,
                            }}>
                                {m.trust(replaceSVGFill(headingDecorator, project.colors.primary))}
                                Tech
                            </div>
                            <div className={cx(styles.Body(), styles.Tech())}>
                                {project.techs.sort().map((tech, idx, array) => {
                                    let separator = idx !== array.length - 1 ? ', ' : null
                                    return <span>{massageRole(tech)}{separator}</span>
                                })}
                            </div>
                        </div>
                    )
                    : null
                }

                {/* Stats */}
                <div className={styles.Stats()}>

                    {/* Lines of code */}
                    {project.metadata.linesOfCode
                        ? (
                            <div className={cx(styles.Group(), styles.LinesOfCodeWrapper())}>
                                <div className={styles.Heading()} style={{
                                    backgroundColor: project.colors.primary,
                                    color: project.colors.dominant,
                                }}>
                                    {m.trust(replaceSVGFill(headingDecorator, project.colors.primary))}
                                    Total Lines of Code
                                </div>
                                <div className={cx(styles.Body(), styles.LinesOfCode())}>{project.metadata.linesOfCode}</div>
                            </div>
                        )
                        : null
                    }

                    {/* Year Published */}
                    {project.datePublished
                        ? (
                            <div className={cx(styles.Group(), styles.YearPublishedWrapper())}>
                                <div className={styles.Heading()} style={{
                                    backgroundColor: project.colors.primary,
                                    color: project.colors.dominant,
                                }}>
                                    {m.trust(replaceSVGFill(headingDecorator, project.colors.primary))}
                                    Year Completed
                                </div>
                                <div className={cx(styles.Body(), styles.YearPublished())}>{project.datePublished.match(/^\d{4}/)}</div>
                            </div>
                        )
                        : null
                    }
                </div>

                {/* Client Logo */}
                <div className={styles.Logo()}>
                    {m.trust(replaceSVGFill(project.logos.monoLight, project.colors.primary))}
                </div>
            </div>
        )
    },
}
