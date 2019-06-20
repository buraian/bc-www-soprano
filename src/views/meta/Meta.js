import m from 'mithril'

import styles from './MetaStyles'

import adobecc    from './images/i-love-adobecc.svg'
import apple      from './images/i-love-apple.svg'
import css3       from './images/i-love-css3.svg'
import git        from './images/i-love-git.svg'
import html5      from './images/i-love-html5.svg'
import javascript from './images/i-love-javascript.svg'
import mithril    from './images/i-love-mithril.svg'
import mdn        from './images/i-love-mdn.svg'
import nodejs     from './images/i-love-nodejs.svg'
import npm        from './images/i-love-npm.svg'
import postcss    from './images/i-love-postcss.svg'
import sketch     from './images/i-love-sketch.svg'
import vscode     from './images/i-love-vscode.svg'
import webpack    from './images/i-love-webpack.svg'


export default {
    view: function () {
        return (
            <div className={styles.Meta()}>
                <div className={styles.Container()}>
                    <div className={styles.LeadInWrapper()}>
                        <div className={styles.LeadIn()}>Made With:</div>
                    </div>
                    <ul className={styles.ItemWrapper()}>
                        <li className={styles.Item()} title="HTML5">{m.trust(html5)}</li>
                        <li className={styles.Item()} title="CSS3">{m.trust(css3)}</li>
                        <li className={styles.Item()} title="PostCSS">
                            <a href="//postcss.org/" target="_blank">{m.trust(postcss)}</a>
                        </li>
                        <li className={styles.Item()} title="JavaScript">{m.trust(javascript)}</li>
                        <li className={styles.Item()} title="Node JS">
                            <a href="//nodejs.org/" target="_blank">{m.trust(nodejs)}</a>
                        </li>
                        <li className={styles.Item()} title="NPM">
                            <a href="//www.npmjs.com/" target="_blank">{m.trust(npm)}</a>
                        </li>
                        <li className={styles.Item()} title="Mithril JS">
                            <a href="//mithril.js.org/" target="_blank">{m.trust(mithril)}</a>
                        </li>
                        <li className={styles.Item()} title="Webpack">
                            <a href="//webpack.js.org/" target="_blank">{m.trust(webpack)}</a>
                        </li>
                        <li className={styles.Item()} title="Visual Studio Code">
                            <a href="//code.visualstudio.com/" target="_blank">{m.trust(vscode)}</a>
                        </li>
                        <li className={styles.Item()} title="Git">
                            <a href="//git-scm.com/" target="_blank">{m.trust(git)}</a>
                        </li>
                        <li className={styles.Item()} title="Mozilla Developer Network">
                            <a href="//developer.mozilla.org/" target="_blank">{m.trust(mdn)}</a>
                        </li>
                        <li className={styles.Item()} title="Sketch">
                            <a href="//www.sketchapp.com/" target="_blank">{m.trust(sketch)}</a>
                        </li>
                        <li className={styles.Item()} title="Adobe Creative Cloud">
                            <a href="//www.adobe.com/" target="_blank">{m.trust(adobecc)}</a>
                        </li>
                        <li className={styles.Item()} title="Apple">
                            <a href="//www.apple.com/" target="_blank">{m.trust(apple)}</a>
                        </li>
                    </ul>

                    {/* Credits
                    <div className={styles.CreditsWrapper()}>
                        <div className={styles.Credits()}>
                            <div className={styles.CreditsTitle()}>Credits</div>
                            <a className="Meta-credits--credit" href="//www.fontawesome.com/" target="_blank">
                                <div className="Meta-credits--name">FontAwesome Icons</div>
                                <div className="Meta-credits--url">fontawesome.com</div>
                            </a>
                        </div>
                    </div>
                    */}
                </div>
            </div>
        )
    },
}
