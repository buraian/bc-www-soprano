import m from 'mithril'
import massageRole from 'Helpers/massageRole'
import paths from 'Helpers/portfolioApiPaths'
import slugify from 'underscore.string/slugify'

import styles from './PortfolioListThumbnailStyles'


export default {
    view: function (vnode) {
        const { cssClasses, project, screen } = vnode.attrs
        const imgPath = paths.images.filename(screen.filename + '-sm', screen.ext)

        return (
            <a
                key={screen._id}
                href={`/portfolio/${project._id}/${screen._id}/`}
                oncreate={m.route.link}
                className={`${cssClasses} ${styles.Wrapper()}`}
                data-project={project._id}
                data-roles={project.roles.map(role => slugify(massageRole(role))).join(' ')}
                data-projecttype={slugify(project.projectType)}
                style={{
                    backgroundImage: `url('${imgPath}')`,
                }}>
                <img src={imgPath} style={{ display: 'none' }} />
            </a>
        )
    },
}
