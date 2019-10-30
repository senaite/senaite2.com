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
            <h5>Docs</h5>
            <a href={this.docUrl('installation.html', this.props.language)}>
              Installation
            </a>
            <a href={this.docUrl('quickstart.html', this.props.language)}>
              Quickstart
            </a>
            <a href={this.docUrl('sample-basics.html', this.props.language)}>
              Sample Basics
            </a>
          </div>
          <div>
            <h5>Community</h5>
            {/* <a href={this.pageUrl('users.html', this.props.language)}> */}
            {/*   User Showcase */}
            {/* </a> */}
            <a target="_blank" href="https://gitter.im/senaite/Lobby">Gitter Chat</a>
            <a target="_blank" href="https://community.senaite.org">Community Site</a>
            <a
              href="https://stackoverflow.com/search?q=senaite"
              target="_blank"
              rel="noreferrer noopener">
              Stack Overflow
            </a>
          </div>
          <div>
            <h5>More</h5>
            {/* <a href={`${this.props.config.baseUrl}blog`}>Blog</a> */}
            <a href="https://github.com/senaite">GitHub</a>

            <a className="github-button"
               href={this.props.config.repoUrl}
               data-icon="octicon-star"
               data-count-href="/senaite/senaite.core/stargazers"
               data-show-count="true"
               data-count-aria-label="# stargazers on GitHub"
               aria-label="Star this project on GitHub">
              Star
            </a>
            {this.props.config.twitterUsername && (
              <div className="social">
                <a
                  href={`https://twitter.com/${
                    this.props.config.twitterUsername
                  }`}
                  className="twitter-follow-button">
                  Follow @{this.props.config.twitterUsername}
                </a>
              </div>
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
          {this.props.config.copyright} <a href='https://www.ridingbytes.com' target='_blank'>RIDING BYTES GmbH</a> &amp; <a href='https://www.naralabs.com' target='blank'>NARALABS S.L.</a>
        </section>
      </footer>
    );
  }
}

module.exports = Footer;
