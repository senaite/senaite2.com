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
        <img src={props.img_src} alt="SENAITE" />
      </div>
    );

    const ProjectTitle = props => (
      <div>
        {/* <div style={{float: "left"}}> */}
        <div>
          <h2 className="projectTitle">
            {/* {siteConfig.title} */}
            <img style={{width: "400px"}} src={props.img_src} alt={siteConfig.title} />
            <small className="text-gold">{siteConfig.tagline}</small>
          </h2>
        </div>
        <div>
          <img style={{width: "450px"}} src="/img/screenshot.png" />
        </div>
      </div>
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

    return (
      <SplashContainer>
        {/* <Logo img_src={`${baseUrl}img/senaite_lims.png`} /> */}
        <div className="inner">
          <ProjectTitle
            img_src={`${baseUrl}img/senaite_product_logo.svg`}
            siteConfig={siteConfig} />

          <PromoSection>
            <HomeButtons/>
          </PromoSection>
        </div>
      </SplashContainer>
    );
  }
}

module.exports = HomeSplash;
