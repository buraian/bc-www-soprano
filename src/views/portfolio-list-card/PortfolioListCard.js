import m from 'mithril'
import massageRole from 'Helpers/massageRole'
import padLeft from 'Helpers/padLeft'
import replaceSVGFill from 'Helpers/replaceSvgFill'
import slugify from 'underscore.string/slugify'

import styles from './PortfolioListCardStyles'

import decorator from './images/call-to-action-triangle.svg'


export default {
    view: function (vnode) {
        const { cssClasses, project, projectNo } = vnode.attrs

        return <a
            href={`/portfolio/${project._id}/`}
            oncreate={m.route.link}
            className={`${cssClasses} ${styles.Wrapper()}`}
            data-project={project._id}
            data-roles={project.roles.map(role => slugify(massageRole(role))).join(' ')}
            data-projecttype={slugify(project.projectType)}
            style={{
                color: project.colors.primary,
                backgroundColor: project.colors.dominant,
            }}
            key={project._id}>

            {/* Project Number */}
            <div className={styles.Counter()}>{padLeft(projectNo, '00')}</div>

            {/* Header */}
            <div className={styles.Header()}>
                <div className={styles.Title()}>{project.title}</div>
                <div className={styles.ProjectType()}>{project.projectType}</div>
            </div>

            {/* Client Logo */}
            <div className={styles.Logo()}>
                {m.trust(replaceSVGFill(project.logos.monoLight, project.colors.primary))}
            </div>

            {/* Call To Action Decorator */}
            <div className={styles.Decorator()}>
                {m.trust(replaceSVGFill(decorator, project.colors.primary))}
            </div>
        </a>
    },
}
