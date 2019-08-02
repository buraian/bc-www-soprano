// TODO: Finish Message

import m from 'mithril'
import Portfolio from 'Models/Portfolio'

// import './MessageStyles'


export default {
    view: () => {
        if (!Portfolio.error) return false

        return <div className="Message">
            {Portfolio.error}
        </div>
    },
}
