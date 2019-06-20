import m from 'mithril'
import Portfolio from 'Models/Portfolio'

// import './MessageStyles'


export default {
    view: function () {
        if (!Portfolio.error) return false

        return <div className="Message">
            {Portfolio.error}
        </div>
    },
}
