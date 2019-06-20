import m from 'mithril'
import Portfolio from 'Models/Portfolio'
import Layout from 'Views/layout/Layout'
import PortfolioList from 'Views/portfolio-list/PortfolioList'
import ProjectViewer from 'Views/project-viewer/ProjectViewer'
import ProjectNav from 'Views/project-nav/ProjectNav'
import Error404 from 'Views/error-404/Error404'

import './reset.sss'
import './globalStyles.js'

// TODO: Rethink current asynchronous portfolio content loading.
//       Perhaps load all portfolio content in Layout component?
//       or custom component?

m.route(document.body, '/portfolio/', {
    '/portfolio/': {
        render: function () {
            return m(Layout, m(PortfolioList))
        },
    },
    '/portfolio/:projectId/': {
        onmatch: function (args) {
            const project = Portfolio.getProjectById(args.projectId)
            m.route.set(`/portfolio/${project._id}/${project.images[0]._id}/`)
        },
    },
    '/portfolio/:projectId/:screenId/': {
        render: function (vnode) {
            return m(Layout, [
                m(PortfolioList),
                m(ProjectViewer, vnode.attrs),
                m(ProjectNav, vnode.attrs),
            ])
        },
    },
    '/:404/': {
        render: function (vnode) {
            return m(Layout, m(Error404, vnode.attrs.error))
        },
    },
})
