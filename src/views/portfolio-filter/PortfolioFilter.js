import m from 'mithril'
import Portfolio from 'Models/Portfolio'
import Button from './Button'

import styles from './PortfolioFilterStyles'


/**
 * Update Project Filter State
 *
 * @param {Node} vnode
 *
 * 1. Get field values
 * 2. Get checked buttons
 * 3. Update State
 */
function serializeFormData (vnode) {
    // 1
    const form = vnode.dom.firstChild
    const fields = [...form].filter(el => {
        if (el.value !== 'all') {
            return el.type === 'radio'
        }
    })

    // 2
    let activeFilters = []
    fields.forEach(field => {
        if (field.checked) {
            activeFilters.push({
                fieldset: field.closest('fieldset').dataset.filter,
                value: field.value,
            })
        }
    })

    Portfolio.setState('projectFiltersActive', activeFilters) // 3
}

/**
 * Watch Form For Changes
 *
 * @param {Node} vnode
 */
function watchFormChanges (vnode) {
    const form = vnode.dom.firstChild
    form.addEventListener('change', () => serializeFormData(vnode))
}


export default {
    oninit: Portfolio.projectTypesLoadData(),
    oncreate: function (vnode) {
        serializeFormData(vnode)
        watchFormChanges(vnode)
    },
    view: function () {
        return <section className={styles.Wrapper()}>
            <form className={styles.Form()}>
                <legend className={styles.Title()}><span>Filters</span></legend>

                {/* Filter All */}
                <fieldset
                    disabled={!Portfolio.isFiltersEnabled}
                    className={styles.Fieldset()}>
                    <Button label="All" size="large" checked />
                </fieldset>

                {/* Roles Filter */}
                <fieldset
                    disabled={!Portfolio.isFiltersEnabled}
                    data-filter="roles"
                    className={styles.Fieldset()}>
                    <h1 className={styles.Heading()}>Roles</h1>
                    <div>
                        {Portfolio.projectFilter.roles.map(role =>
                            <Button label={role} />
                        )}
                    </div>
                </fieldset>

                {/* Project Type Filter */}
                <fieldset
                    disabled={!Portfolio.isFiltersEnabled}
                    data-filter="projectTypes"
                    className={styles.Fieldset()}>
                    <h1 className={styles.Heading()}>Project Types</h1>
                    <div>
                        {Portfolio.projectFilter.projectTypes.map(projectType =>
                            <Button label={projectType} size="small" />
                        )}
                    </div>
                </fieldset>
            </form>
        </section>
    },
}
