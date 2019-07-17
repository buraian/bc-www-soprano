import m from 'mithril'
import { Link } from 'mithril/route'
import PortfolioFilter from 'Views/portfolio-filter/PortfolioFilter'
import Footer from 'Views/footer/Footer'

import headerStyles from './HeaderStyles'
import siteNameStyles from './SiteNameStyles'


export default {
    view: function () {
        return (
            <div className={headerStyles.Wrapper()}>

                {/* Title */}
                <header className={siteNameStyles.Wrapper()}>
                    <div className={siteNameStyles.Container()}>
                        <Link className={siteNameStyles.NameWrapper()} href="/">
                            <div className={siteNameStyles.NameFirstname()}>Brian</div>
                            <div className={siteNameStyles.NameLastname()}>Clark</div>
                        </Link>
                        <div className={siteNameStyles.TitleWrapper()}>
                            <div className={siteNameStyles.TitleOne()}>Designer <span>&</span></div>
                            <div className={siteNameStyles.TitleTwo()}>Developer</div>
                        </div>
                        <div className={siteNameStyles.SectionWrapper()}>
                            <div className={siteNameStyles.SectionPortfolio()}>Portfolio</div>
                        </div>
                    </div>
                </header>

                <PortfolioFilter />
                <Footer />
            </div>
        )
    },
}
