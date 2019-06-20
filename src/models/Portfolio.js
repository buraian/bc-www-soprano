import m from 'mithril'
import paths from 'Helpers/portfolioApiPaths'
import slugify from 'underscore.string/slugify'

const KEY_PREFIX = 'data:portfolio'
const PROJECTS_SAVE_KEY = `${KEY_PREFIX}:projects`
const PROJECT_TYPES_SAVE_KEY = `${KEY_PREFIX}:projecttypes`

class Portfolio {
    constructor () {
        // General
        // this.lastUpdated = null // TODO: Get Database last updated date
        this.error = null

        // Projects
        this.projectsIsFetching = false
        this.projectsIsLoading = false
        this.projects = []
        this.screens = []
        this.pageNum = 1
        this.totalProjects = 0
        this.projectChangeDirection = 'default'
        this.isProjectViewerActive = false
        this.projectDefaults = {
            _id: '',
            colors: {
                primary: '#FFFFFF',
                dominant: '#000000',
            },
            datePublished: '',
            features: [],
            logos: {
                monoLight: '',
            },
            metadata: {
                linesOfCode: '',
            },
            projectType: '',
            roles: ['Design', 'Development'],
            title: '',
            techs: [],
        }

        // Project Types
        this.projectTypesIsFetching = false
        this.projectTypes = []

        // Project Filter
        this.isFiltersEnabled = true
        this.projectFilter = {
            roles: [
                'Designer',
                'Developer',
            ],
            projectTypes: [ // TODO: Reference project types above
                'Ecommerce',
                'Graphic Design',
                'HTML Emails',
                'Web Application',
                'Website',
            ],
        }
        this.projectFiltersActive = []
    }

    // Set State
    setState (property, value, redraw = true) {
        this[property] = value

        if (redraw) {
            m.redraw()
        }
    }

    // Project Handlers
    getProjectByIndex (index) {
        return this.projects[index]
    }

    getProjectIndex (id) {
        return this.projects.findIndex(project => project._id === id)
    }

    getProjectById (id, offset = 0) {
        const index = this.getProjectIndex(id)
        const array = this.projects

        if (offset < 0) {
            return array[(array.length + (index + offset)) % array.length]
        }
        else if (offset > 0) {
            return array[(index + offset) % array.length]
        }
        else {
            return this.projects.find(project => project._id === id)
        }
    }

    getPageNum (id) {
        return this.getProjectIndex(id) + 1
    }

    getTotalProjects () {
        return this.projects.length
    }

    getScreenIndex (id) {
        let result = null

        for (let i = 0; i < this.projects.length; i++) {
            result = this.projects[i].images.findIndex(image => {
                return image._id === id
            })

            if (result > -1) {
                return result
            }
        }
    }

    getScreenById (id, offset = 0) {
        const index = this.getScreenIndex(id)
        const array = this.getProjectByScreenId(id).images

        if (offset < 0) {
            return array[(array.length + (index + offset)) % array.length]
        }
        else if (offset > 0) {
            return array[(index + offset) % array.length]
        }
        return array[index]
    }

    getProjectByScreenId (id) {
        const result = this.projects.filter(project => {
            return project.images.find(image => image._id === id)
        })

        if (result.length > 1) {
            throw Error('Multiple images found. Images should have unique IDs.')
        }
        return result[0]
    }

    /**
     * Build An Index of Screens w/ Project IDs
     *
     * @param {Array} projects An array of Project objects
     * @return {Array} [
     *     { projectId: <String>, screenId: <String> },
     *     { projectId: <String>, screenId: <String> },
     *     ...
     * ]
     */
    buildScreensIndex (projects) {
        let screens = []

        for (let i = 0; i < projects.length; i++) {
            for (let j = 0; j < projects[i].images.length; j++) {
                screens.push({ projectId: projects[i]._id, screenId: projects[i].images[j]._id })
            }
        }

        return screens
    }

    /**
     * Construct A Screen URL Path
     *
     * @param {String} screenId The context Screen ID
     * @param {Number} offset The Screen Index to return
     */
    buildScreenPath (screenId, offset = 0, returnObject = false) {
        const array = this.screens
        const index = array.findIndex(item => item.screenId === screenId)

        const dest = (function () {
            if (offset < 0) {
                return array[(array.length + (index + offset)) % array.length]
            }
            else if (offset > 0) {
                return array[(index + offset) % array.length]
            }
            return array[index]
        })()

        if (returnObject) {
            return {
                projectId: dest.projectId,
                screenId: dest.screenId,
            }
        }
        else {
            return `/portfolio/${dest.projectId}/${dest.screenId}/`
        }
    }

    formatDataForPicker (data) {
        const firstElement = {
            value: 'all',
            label: 'All',
            selected: true,
            disabled: false,
        }

        return [firstElement].concat(data.map(element => {
            return {
                value: slugify(element),
                label: element,
                selected: false,
                disabled: false,
            }
        }))
    }

    // Offline
    saveToLocalStorage (key, value) {
        window.localStorage.setItem(key, JSON.stringify(value))
    }

    loadFromLocalStorage (key) {
        const value = window.localStorage.getItem(key)
        return JSON.parse(value)
    }

    // Fetching/Loading

    // Projects
    projectsNormalizeData (arr) {
        const defaultValues = this.projectDefaults

        return arr.map(element => {
            return { ...defaultValues, ...element }
        })
    }

    projectsLoadData () {
        const localData = this.loadFromLocalStorage(PROJECTS_SAVE_KEY)

        if (localData) {
            this.projects = localData
        }
        else {
            this.projectsFetchData()
        }
    }

    projectsHandleResponse (response) {
        response = this.projectsNormalizeData(response)

        this.projects = response
        this.screens = this.buildScreensIndex(response)
        this.totalProjects = response.length

        // this.saveToLocalStorage(PROJECTS_SAVE_KEY, response)
    }

    projectsFetchData () {
        this.projectsIsFetching = true
        let self = this

        return m.request({
            method: 'GET',
            url: paths.projects.list,
        })
            .then(function (response) {
                self.projectsIsFetching = false
                self.projectsHandleResponse(response)
            })
            .catch(function (error) {
                self.setState('error', 'TODO: write friendly message')
                throw Error(error)
            })
    }

    // Project Types
    projectTypesLoadData () {
        const localData = this.loadFromLocalStorage(PROJECT_TYPES_SAVE_KEY)

        if (localData) {
            this.projectTypes = localData
        }
        else {
            this.projectTypesFetchData()
        }
    }

    projectTypesHandleResponse (response) {
        response = this.formatDataForPicker(response)

        this.projectTypes = response

        // this.saveToLocalStorage(PROJECTS_SAVE_KEY, response)
    }

    projectTypesFetchData () {
        this.projectTypesIsFetching = true
        let self = this

        return m.request({
            method: 'GET',
            url: paths.projectTypes.list,
        })
            .then(function (response) {
                self.projectTypesIsFetching = false
                self.projectTypesHandleResponse(response)
            })
            .catch(function (error) {
                self.setState('error', 'TODO: write friendly message')
                throw Error(error)
            })
    }
}

export default new Portfolio()
