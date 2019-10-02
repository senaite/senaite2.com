const React = require('react');


class HomeSplash extends React.Component {
  render() {
    const {siteConfig, language = ''} = this.props;
    const {baseUrl, docsUrl} = siteConfig;
    const docsPart = `${docsUrl ? `${docsUrl}/` : ''}`;
    const langPart = `${language ? `${language}/` : ''}`;
    const docUrl = doc => `${baseUrl}${docsPart}${langPart}${doc}`;

    const SplashContainer = props => (
      <div className="homeContainer">
        <div className="homeSplashFade">
          <div className="wrapper homeWrapper">{props.children}</div>
        </div>
      </div>
    );

    const Logo = props => (
      <div className="projectLogo">
        <img src={props.img_src} alt="SENAITE LIMS" />
      </div>
    );

    const ProjectTitle = props => (
      <h2 className="projectTitle">
        {/* {siteConfig.title} */}
        <img style={{width: "400px"}} src={props.img_src} alt={siteConfig.title} />
        <small>{siteConfig.tagline}</small>
      </h2>
    );

    const PromoSection = props => (
      <div className="section promoSection">
        <div className="promoRow">
          <div className="pluginRowBlock">{props.children}</div>
        </div>
      </div>
    );

    const Button = props => (
      <div className="pluginWrapper buttonWrapper">
        <a className="button" href={props.href} target={props.target}>
          {props.children}
        </a>
      </div>
    );

    /**
     * Renders the main Project Buttons
     */
    const HomeButtons = () => {
      if ((siteConfig.home_buttons || []).length === 0) {
        return null;
      }
      const buttons = siteConfig.home_buttons.map(
        (button, index) =>
          <Button
            key={index}
            title={button.title}
            target={button.target||'_blank'}
            href={button.href}>
            {button.title}
          </Button>
      )
      return buttons
    }

    /**
     * Renders the Mailing List Subscrber Widget
     */
    const MailingListForm = props => (
      <form id="subscribe"
            className="form form-inline"
            action="https://sourceforge.net/projects/senaite/lists/senaite-users" method="GET">
        <input name="email" placeholder="labman@acme-labs.io" type="text" className="form-input"/>
        <input className="button" type="submit" title="Send"
               value="Subscribe to the SENAITE Users List"/>
      </form>
    );

    return (
      <SplashContainer>
        {/* <Logo img_src={`${baseUrl}img/senaite_lims.png`} /> */}
        <div className="inner">
          <ProjectTitle
            img_src={`${baseUrl}img/senaite_lims.png`}
            siteConfig={siteConfig} />
          <PromoSection>
            <HomeButtons/>
          </PromoSection>
          <MailingListForm></MailingListForm>
        </div>
      </SplashContainer>
    );
  }
}

module.exports = HomeSplash;
