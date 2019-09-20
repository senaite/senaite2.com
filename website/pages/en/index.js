/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require('react');

const CompLibrary = require('../../core/CompLibrary.js');

const MarkdownBlock = CompLibrary.MarkdownBlock; /* Used to read markdown */
const Container = CompLibrary.Container;
const GridBlock = CompLibrary.GridBlock;

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
            <Button target="_blank" href="https://labs.play-with-docker.com/?stack=https://raw.githubusercontent.com/senaite/senaite.docker/master/stack.yml">Try It Out</Button>
            <Button target="_blank" href="https://community.senaite.org">Community Forum</Button>
            <Button target="_blank" href="https://gitter.im/senaite/Lobby">Gitter Chat</Button>
            <Button target="_blank" href="https://github.com/senaite">GitHub Repository</Button>
            {/* <Button href={docUrl('doc1.html')}>Example Link</Button> */}
            {/* <Button href={docUrl('doc2.html')}>Example Link 2</Button> */}
          </PromoSection>
          <MailingListForm></MailingListForm>
        </div>
      </SplashContainer>
    );
  }
}

class Index extends React.Component {
  render() {
    const {config: siteConfig, language = ''} = this.props;
    const {baseUrl} = siteConfig;

    const Block = props => (
      <Container
        padding={['bottom', 'top']}
        id={props.id}
        className={props.className}
        background={props.background}>
        <GridBlock
          align="center"
          contents={props.children}
          layout={props.layout}
        />
      </Container>
    );

    const FeatureCallout = () => (
      <div
        className="productShowcaseSection paddingBottom"
        style={{textAlign: 'center'}}>
        <h2>Feature Callout</h2>
        <MarkdownBlock>These are features of this project</MarkdownBlock>
      </div>
    );

    const TryOut = () => (
      <Block id="try">
        {[
          {
            content:
              'To make your landing page more attractive, use illustrations! Check out ' +
              '[**unDraw**](https://undraw.co/) which provides you with customizable illustrations which are free to use. ' +
              'The illustrations you see on this page are from unDraw.',
            image: `${baseUrl}img/undraw_code_review.svg`,
            imageAlign: 'left',
            title: 'Wonderful SVG Illustrations',
          },
        ]}
      </Block>
    );

    const Description = () => (
      <Block background="dark">
        {[
          {
            content:
              'This is another description of how this project is useful',
            image: `${baseUrl}img/undraw_note_list.svg`,
            imageAlign: 'right',
            title: 'Description',
          },
        ]}
      </Block>
    );

    const Providers = () => (
      <div className="container providers lightBackground paddingBottom paddingTop">
        <h1 className="section-header">The companies behind SENAITE</h1>
        <div className="wrapper">
          <div className="section-intro">
            The listed companies are members of the SENAITE foundation and are <strong>commited to maintain and protect the code of SENAITE</strong>.
            They provide <strong>in depth knowledge</strong> of the system and are able to customize the system to individual needs.
            They work under <strong>high quality standards</strong> and always try to bring the best features of their clients back to the core for the <strong>benefit of the community and the project</strong>.
          </div>
        </div>

        <div className="wrapper">

          <div className="gridBlock">

            <div className="provider ridingbytes blockElement alignCenter twoByGridBlock">
              <div className="logo">
                <div className="slogan"></div>
                <img src={baseUrl + "img/ridingbytes.png"}/>
                <div className="slogan">Professional Open Source Solutions</div>
              </div>
              <div className="blockContent">
                <strong>RIDING BYTES</strong> is specialized in web development
                in UI / UX design and server-based solutions. With over 15
                years of experience in web development and consulting, we
                support small, medium and large companies.

                <div className="contactBlock">
                  Contact Ramon Bartl at <a href="mailto:hello@ridingbytes.com"> hello@ridingbytes.com</a>
                  <div className="">Location: Germany</div>
                </div>

              </div>
            </div>

            <div className="provider naralabs blockElement alignCenter twoByGridBlock">
              <div className="logo">
                <div className="top-slogan">&nbsp;</div>
                <img src={baseUrl + "img/naralabs.png"}/>
                <div className="slogan">&nbsp;</div>
              </div>
              <div className="blockContent">
                <div></div>
              </div>
            </div>

          </div>

        </div>


      </div>
    );

    const Features = () => (
      <Block layout="fourColumn">
        {[
          {
            content: 'This is the content of my feature',
            image: `${baseUrl}img/undraw_react.svg`,
            imageAlign: 'top',
            title: 'Feature One',
          },
          {
            content: 'The content of my second feature',
            image: `${baseUrl}img/undraw_operating_system.svg`,
            imageAlign: 'top',
            title: 'Feature Two',
          },
        ]}
      </Block>
    );

    const Showcase = () => {
      if ((siteConfig.users || []).length === 0) {
        return null;
      }

      const showcase = siteConfig.users
        .filter(user => user.pinned)
        .map(user => (
          <a href={user.infoLink} key={user.infoLink}>
            <img src={user.image} alt={user.caption} title={user.caption} />
          </a>
        ));

      const pageUrl = page => baseUrl + (language ? `${language}/` : '') + page;

      return (
        <div className="productShowcaseSection paddingBottom">
          <h2>Who is Using This?</h2>
          <p>This project is used by all these people</p>
          <div className="logos">{showcase}</div>
          <div className="more-users">
            <a className="button" href={pageUrl('users.html')}>
              More {siteConfig.title} Users
            </a>
          </div>
        </div>
      );
    };

    return (
      <div>
        <HomeSplash siteConfig={siteConfig} language={language} />
        <div className="mainContainer">
          <Providers />
          {/* <Features /> */}
          {/* <FeatureCallout /> */}
          {/* <LearnHow /> */}
          {/* <TryOut /> */}
          {/* <Description /> */}
          {/* <Showcase /> */}
        </div>
      </div>
    );
  }
}

module.exports = Index;
