import m from 'mithril'

import stylesFooter from './FooterStyles'
import stylesContact from './SiteContactStyles'
import stylesCopyright from './SiteCopyrightStyles'

import github from './images/icon-github-light-on-dark.svg'
import email from './images/icon-email-light-on-dark.svg'

export default {
    view: function () {
        return (
            <footer className={stylesFooter.Wrapper()}>

                {/* Contact */}
                <div className={stylesContact.Wrapper()}>
                    <a className={stylesContact.Item()} href="//github.com/buraian" target="_blank">
                        <div className={stylesContact.Icon()}>{m.trust(github)}</div>
                        <div className={stylesContact.Label()}>GitHub</div>
                    </a>
                    {/* TODO: Implement modal on click
                    <div className={stylesContact.Item()}>
                        <div className={stylesContact.Icon()}>{m.trust(email)}</div>
                        <div className={stylesContact.Label()}>Email</div>
                    </div>
                    */}
                </div>

                {/* Copyright */}
                <div className={stylesCopyright.Wrapper()}>Copyright &copy; {new Date().getFullYear()} Brian Clark.</div>
            </footer>
        )
    },
}
