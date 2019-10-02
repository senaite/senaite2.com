/**
 * Copyright (c) 2017-present, SENAITE Project.
 */

const React = require('react');

const CompLibrary = require('../../core/CompLibrary.js');
const MarkdownBlock = CompLibrary.MarkdownBlock; /* Used to read markdown */
const Container = CompLibrary.Container;
const GridBlock = CompLibrary.GridBlock;

const HomeSplash = require(`${process.cwd()}/core/HomeSplash.js`);


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
                <a href="https://www.ridingbytes.com" className="logo-link">
                  <img src={baseUrl + "img/ridingbytes.png"}/>
                </a>
                <div className="slogan">Professional Open Source Solutions</div>
              </div>
              <div className="text-muted">
                <strong>RIDING BYTES</strong> is a German-based company, providing <strong>professional open source services</strong> for enterprises of all sizes.
                We are specialized in interfacing systems into existing IT infrastructures and have a special focus on the areas of <strong>lab- and healthcare systems</strong>.
                Our <strong>comprehensive services</strong> encompasses consulting, administration, software development and continuous maintenance of the software and the computer systems.
                <br/>
                <br/>
                The company was started for one single reason: To build better software for human beings.
                Therefore our mission is to build software solutions, using the most sophisticated and modern technologies available on the market.
                Always aligned with our strategy: To support free and open source software.
                <div className="contactBlock">
                  Contact us at <a href="mailto:hello@ridingbytes.com"> hello@ridingbytes.com</a>
                  <div className="">Location: Germany</div>
                </div>
              </div>
            </div>

            <div className="provider naralabs blockElement alignCenter twoByGridBlock">
              <div className="logo">
                <div className="top-slogan">&nbsp;</div>
                <a href="https://naralabs.com" className="logo-link">
                  <img src={baseUrl + "img/naralabs.png"}/>
                </a>
                <div className="slogan"></div>
              </div>
              <div className="text-muted">
                <div>
                  <strong>Naralabs</strong> is a is a company specialized in
                  SENAITE Laboratory Information Management System (LIMS). It
                  offers engineering and professional technology services such
                  as consulting, implementation, training, system maintenance
                  and technical support.
                  <br/>
                  Naralabs observes, and is committed with, the <strong>Professional Open Source (POSS) business model</strong> and actively participates in the SENAITE project both in software design and in development tasks.
                  <br/>
                  <br/>
                  Naralabs mission is to be a <strong>technological and operational partner</strong> by providing a multidisciplinary vision and <strong>empowering our clients with the knowledge, skills and tools to improve, optimize and automate their processes.</strong>
                  <br/>
                  <div className="contactBlock">
                    Contact us at <a href="mailto:info@naralabs.com"> info@naralabs.com</a>
                    <div className="">Location: Spain</div>
                  </div>
                </div>
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
          <div key={user.name} className="company">
            <a href={user.infoLink} key={user.infoLink}>
              <img src={user.image} alt={user.caption} title={user.caption} />
            </a>
            <div className="text-muted text-justified">
            {user.description.map(
              (line, index) =>
                <MarkdownBlock key={index}>{line}</MarkdownBlock>)}
            </div>
          </div>
        ));

      const pageUrl = page => baseUrl + (language ? `${language}/` : '') + page;

      return (
        <div className="container companies productShowcaseSection paddingBottom paddingTop">
          <h1 className="section-header">Companies using SENAITE</h1>
          <div className="wrapper">
            <div className="section-intro">
              The following companies trust SENAITE as a <strong>robust and reliable Open-Source LIMS Solution</strong> to manage their daily laboratory routines.
            </div>
          </div>
          <div className="wrapper">
            <div className="logos">{showcase}</div>
          <div className="more-users">
            <a className="button" href={pageUrl('users.html')}>
              More Companies trusting in SENAITE
            </a>
          </div>
          </div>
        </div>
      );
    };

    return (
      <div>
        <HomeSplash siteConfig={siteConfig} language={language} />
        <div className="mainContainer">
          <Providers />
          <Showcase />
          {/* <Features /> */}
          {/* <FeatureCallout /> */}
          {/* <LearnHow /> */}
          {/* <TryOut /> */}
          {/* <Description /> */}
        </div>
      </div>
    );
  }
}

module.exports = Index;
