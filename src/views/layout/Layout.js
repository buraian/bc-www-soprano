import m from 'mithril'
import Portfolio from 'Models/Portfolio'
import Header from 'Views/header/Header'
import Meta from 'Views/meta/Meta'

import styles from './MainStyles'


export default {
    view: vnode => {
        return m('div', [
            <Header />,
            <div className={styles.Main()} style={Portfolio.isProjectViewerActive ? { 'overflowY': 'hidden' } : '' }>
                {vnode.children}
            </div>,
            <Meta />,
        ])
    },
}
