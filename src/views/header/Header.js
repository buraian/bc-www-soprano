import m from 'mithril'
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
                        <a className={siteNameStyles.NameWrapper()} href="/" oncreate={m.route.link}>
                            <div className={siteNameStyles.NameFirstname()}>Brian</div>
                            <div className={siteNameStyles.NameLastname()}>Clark</div>
                        </a>
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
