import m from 'mithril'
import ProjectShowcaseItem from 'Views/project-showcase-item/ProjectShowcaseItem'

import styles from './ProjectShowcaseStyles'


export default {
    view: function (vnode) {
        const { project, screenId } = vnode.attrs

        return <div className={styles.Wrapper()}>
            <ul className={styles.List()}>
                {project.images ? project.images.map(image => {
                    return <ProjectShowcaseItem
                        key={image._id}
                        isActive={image._id === screenId}
                        image={image} />
                }) : null}
            </ul>
        </div>
    },
}
