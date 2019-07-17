import m from 'mithril'
import { Link } from 'mithril/route'
import massageRole from 'Helpers/massageRole'
import paths from 'Helpers/portfolioApiPaths'
import slugify from 'underscore.string/slugify'

import styles from './PortfolioListThumbnailStyles'


export default {
    view: function (vnode) {
        const { cssClasses, project, screen } = vnode.attrs
        const imgPath = paths.images.filename(screen.filename + '-sm', screen.ext)

        return (
            <Link
                href={`/portfolio/${project._id}/${screen._id}/`}
                className={`${cssClasses} ${styles.Wrapper()}`}
                data-project={project._id}
                data-roles={project.roles.map(role => slugify(massageRole(role))).join(' ')}
                data-projecttype={slugify(project.projectType)}
                style={{
                    backgroundImage: `url('${imgPath}')`,
                }}>
                <img src={imgPath} style={{ display: 'none' }} />
            </Link>
        )
    },
}
