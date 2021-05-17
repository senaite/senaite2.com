/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require('react');

class Footer extends React.Component {
  docUrl(doc, language) {
    const baseUrl = this.props.config.baseUrl;
    const docsUrl = this.props.config.docsUrl;
    const docsPart = `${docsUrl ? `${docsUrl}/` : ''}`;
    const langPart = `${language ? `${language}/` : ''}`;
    return `${baseUrl}${docsPart}${langPart}${doc}`;
  }

  pageUrl(doc, language) {
    const baseUrl = this.props.config.baseUrl;
    return baseUrl + (language ? `${language}/` : '') + doc;
  }

  render() {
    return (
      <footer className="nav-footer" id="footer">
        <section className="sitemap">
          <a href={this.props.config.baseUrl} className="nav-home">
            {this.props.config.footerIcon && (
              <img
                src={this.props.config.baseUrl + this.props.config.footerIcon}
                alt={this.props.config.title}
              />
            )}
          </a>
          <div>
            <h5>ABOUT</h5>
            <a href="team">The Team</a>
            <a href="customers">Our Customers</a>
            <a href="mission">Mission Statement</a>
          </div>
          <div>
            <h5>CONTACT</h5>
            <a href="mailto:hello@senaite.com">hello@senaite.com</a>
            <a href="tel:+49 (0) 911 974 930 91">+49 (0) 911 974 930 91</a>
          </div>
          <div>
            <h5>COMMUNITY</h5>
              <a target="_blank" href="https://community.senaite.org">Discussion Forum</a>
              <a target="_blank" href="https://gitter.im/senaite/Lobby">Gitter Channel</a>
              <a target="_blank" href="https://sourceforge.net/projects/senaite/lists/senaite-users">Mailing List</a>
          </div>
          <div>
            <h5>INVOLVEMENT</h5>
            {/* <a href={`${this.props.config.baseUrl}blog`}>Blog</a> */}
            <a href="https://www.transifex.com/senaite/public/">Translate @ Transifex</a>
            <a href="https://github.com/senaite">Contribute @ GitHib</a>
            )}
          </div>
        </section>

        <a href="https://www.senaite.com/"
           target="_blank"
           rel="noreferrer noopener"
           className="fbOpenSource">
          <img
            src={`${this.props.config.baseUrl}img/senaite_product_logo_grey.svg`}
            alt="SENAITE LIMS"/>
        </a>
        <section className="copyright">
          {this.props.config.copyright} SENAITE GmbH
        </section>
        <section className="privacy">
          <a href="privacy">Privacy Policy and Web Legal Announcement</a>
        </section>
        {/* Matomo Tracking Image */}
        <img src="https://piwik.ridingbytes.com/matomo.php?idsite=3&amp;rec=1" style={{border: 0}} alt="" />
      </footer>
    );
  }
}

module.exports = Footer;
