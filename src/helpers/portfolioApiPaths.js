import portfolio from '../../config/.remote-portfolio.json'

export default {
    'projects': {
        list: `${portfolio.api}/portfolio/projects`,
        id: (id) => `${portfolio.api}/api/portfolio/projects/${id}`,
    },
    'projectTypes': {
        list: `${portfolio.api}/portfolio/project-types`,
        id: (id) => `${portfolio.api}/portfolio/project-types/${id}`,
    },
    'features': {
        list: `${portfolio.api}/portfolio/features`,
        id: (id) => `${portfolio.api}/portfolio/features/${id}`,
    },
    'images': {
        path: `${portfolio.images}/portfolio`,
        filename: (filename) => {
            return `${portfolio.images}/portfolio/${filename}.jpg`
        },
    },
}
