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

    const Description = () => (
      <div className="container paddingBottom">
        <h1 className="section-header">Unchain your laboratory with SENAITE</h1>
        <div className="wrapper">
          <div className="section-intro paddingBottom">
            Choosing Open-Source is a matter of <strong>liberty</strong> and not just the ability to get the software for free.
            We believe that <strong>freedom is one of the most important goods</strong> in every aspect of life.
            Therefore, you should choose SENAITE primarily because of its abilities and because you love your freedom as much as we do.
          </div>
        </div>
        <div className="wrapper pt-1">
          <div className="gridBlock">
            <div className="blockElement twoByGridBlock">
              <ul>
                <li>no license binding</li>
                <li>no licensing costs (GPLv2 License)</li>
                <li>no usage restrictions</li>
                <li>no restriction of the number of users</li>
                <li>no dependence on a manufacturer</li>
              </ul>
            </div>
            <div className="blockElement twoByGridBlock">
              <ul>
                <li>insight into the source code</li>
                <li>code hosted publicly on GitHub</li>
                <li>testability for user-unwanted mechanisms (backdoors)</li>
                <li>adherence to open standards</li>
                <li>testable software quality</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );

    const Providers = () => (
      <div className="container providers paddingBottom paddingTop">
        <h1 className="section-header">The companies behind SENAITE</h1>
        <div className="wrapper">
          <div className="section-intro">
            The listed companies are members of the SENAITE foundation and are <strong>committed to maintain and protect the code of SENAITE</strong>.
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
      <div className="container features lightBackground paddingBottom paddingTop">
        <h1 className="section-header">SENAITE Features</h1>
        <div className="wrapper">
          <div className="section-intro">
            SENAITE ships with a <strong>lot of great features</strong> that makes it an <strong>outstanding and trusted laboratory management system</strong>.
            While we are adding constantly new exciting features and solutions from real laboratories back into the SENAITE core system,
            we would like to highlight some of them here, but there is a lot more you can discover in SENAITE.
          </div>
        </div>
        <Block layout="threeColumn">
          {[
            {
              content: 'SENAITE is based on the Content Management System <a href="https://plone.org">Plone</a>, that has the best security track record of any major CMS.',
              image: `${baseUrl}img/undraw_secure_data.svg`,
              imageAlign: 'top',
              title: 'Industrial Strength Security',
            },
            {
              content: 'SENAITE uses state of the art web frameworks to provide a modern and responsive User Interface that displays just the right information at the right place.',
              image: `${baseUrl}img/undraw_done.svg`,
              imageAlign: 'top',
              title: 'Great User Experience',
            },
            {
              content: 'SENAITE provides a powerful extensible fulltext search engine, to let you quickly find and filter the data and locate Samples by simply scanning the Barcode or QR-code.',
              image: `${baseUrl}img/undraw_Search.svg`,
              imageAlign: 'top',
              title: 'Fast Search Engine',
            },
            {
              content: 'SENAITE allows you to generate Barcodes, QR-codes and even Address stickers with a few clicks.',
              image: `${baseUrl}img/undraw_windows.svg`,
              imageAlign: 'top',
              title: 'Barcodes',
            },
            {
              content: 'Generate pixel-perfect Reports in PDF of your Analysis Results and send them directly out via Email.',
              image: `${baseUrl}img/undraw_data.svg`,
              imageAlign: 'top',
              title: 'Beautiful Reports',
            },
            {
              content: 'Import results from your instruments to speed up your turn-around time and avoid human errors in the carrying over process.',
              image: `${baseUrl}img/undraw_server.svg`,
              imageAlign: 'top',
              title: 'Import Results',
            },
            {
              content: 'SENAITE generates snapshots of your data on any modification. All changes in the system can be easily inspected and traced back.',
              image: `${baseUrl}img/undraw_inspection.svg`,
              imageAlign: 'top',
              title: 'Audit Trails',
            },
            {
              content: 'SENAITE provides a powerful dashboard to visualize the performance of the lab on a daily, weekly, monthly, quarterly, biannually and yearly basis.',
              image: `${baseUrl}img/undraw_all_the_data.svg`,
              imageAlign: 'top',
              title: 'Data Insights',
            },
            {
              content: 'SENAITE can be translated into in any language. If your language is not yet supported, you can easily provide it via <a href="https://transifex.com/senaite/senaite-core/dashboard/">Transifex</a>',
              image: `${baseUrl}img/undraw_chat.svg`,
              imageAlign: 'top',
              title: 'Speaks your Language',
            },
          ]}
        </Block>
      </div>
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
        <div className="container companies productShowcaseSection paddingBottom paddingTop">
          <h1 className="section-header">Organizations using SENAITE</h1>
          <div className="wrapper">
            <div className="section-intro">
              The following organizations trust SENAITE as a <strong>robust and reliable Open-Source LIMS Solution</strong> to manage their daily laboratory routines.
            </div>
          </div>
          <div className="wrapper">
            <div className="logos">
              {showcase}
            </div>
            <div className="more-users">
              <a className="button" href={pageUrl('users.html')}>
                View all Organizations trusting in SENAITE
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
          <Description />
          <Features />
          <Providers />
          <Showcase />
        </div>
      </div>
    );
  }
}

module.exports = Index;
