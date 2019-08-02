import { css } from 'emotion'
import portfolioListStyles from 'Views/portfolio-list/PortfolioListStyles'
import headerStyles from 'Views/header/HeaderStyles'
import metaStyles from 'Views/meta/MetaStyles'


export default config => {
    const defaults = {
        borderRadius: portfolioListStyles.wrapperBorderRadius,
        offsetBottom: portfolioListStyles.offsetBottom,
        offsetTop: portfolioListStyles.offsetTop,
    }
    config = { ...defaults, ...config }

    const result = css`
        border-radius: ${config.borderRadius}px;
        bottom: ${config.offsetBottom}px;
        left: ${headerStyles.headerWidth}px;
        position: fixed;
        right: ${metaStyles.metaWidth}px;
        top: ${config.offsetTop}px;
    `
    return result
}
