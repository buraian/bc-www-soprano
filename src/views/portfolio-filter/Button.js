import m from 'mithril'
import slugify from 'underscore.string/slugify'

import styles from './PortfolioFilterStyles'


export default {
    view: vnode => {
        let { checked, label, size } = vnode.attrs
        const value = slugify(label)

        const labelMaxChars = 15
        if (label.length > labelMaxChars) {
            const ellipsis = '\u2026'
            label = label.slice(0, labelMaxChars - 1) + ellipsis
        }

        const labelClass = () => {
            if (size === 'small') return styles.ButtonSmall()
            else if (size === 'large') return styles.ButtonLarge()
            else return styles.ButtonMedium()
        }

        return <div className={styles.Group()}>
            <input
                defaultChecked={checked}
                className={styles.Input()}
                id={`PortfolioFilter-input--${value}`}
                name="portfolio-filter"
                style={{ opacity: 0, visibility: 'hidden' }}
                type="radio"
                value={value}
            />
            <label
                htmlFor={`PortfolioFilter-input--${value}`}
                className={labelClass()}
            >{label}</label>
            <div className={styles.LedOuter()}></div>
            <div className={styles.LedInner()}></div>
        </div>
    },
}
