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
        <h1 className="section-header">Unchain your Lab with SENAITE</h1>
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

    const Features = () => (
      <div className="container features lightBackground paddingBottom paddingTop">
        <h1 className="section-header">SENAITE Features</h1>
        <div className="wrapper">
          <div className="section-intro">
            SENAITE ships with a <strong>lot of great features</strong> that makes it an <strong>outstanding and trusted Laboratory Management System</strong>.
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

    const Providers = () => (
      <div className="container providers paddingBottom paddingTop">
        <h1 className="section-header">The companies behind SENAITE</h1>
        <div className="wrapper">
          <div className="section-intro">
            The listed companies are SENAITE Professional Service Providers and
            are <strong>committed to maintain and protect the code of SENAITE</strong>.
            They provide <strong>in depth knowledge</strong> of the system and
            are able to tailor the system to your specific needs and requirements.
            They work under <strong>high quality standards</strong> and always
            try to bring the best features of their clients back to the core for
            the <strong>benefit of the community and the project</strong>.
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
                Our <strong>comprehensive services</strong> include consulting, administration, software development and continuous maintenance of the software and the computer systems.
                <br/>
                <br/>
                The company was started for one single reason: To build better software for human beings.
                Therefore our mission is to build software solutions, using the most sophisticated and modern technologies available on the market.
                Always aligned with our strategy: To support Free and Open-Source Software.
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
                <p>
                  <strong>Naralabs</strong> is a company specialized in engineering
                  and professional services around SENAITE. Our vision is to
                  consolidate Open Source Software as an essential component
                  within the strategies for improving efficiency, quality and
                  data management in laboratories.
                </p>
                <p>
                  We are not only accomplished professional service providers,
                  but also passionate engineers, able to speak same language with
                  both Laboratory personnel and IT department: we act as the
                  catalyst to make the implementation of the LIMS/LIS in your
                  organization a success.
                </p>
                  <div className="contactBlock">
                    Contact us at <a href="mailto:info@naralabs.com"> info@naralabs.com</a>
                    <div className="">Location: Barcelona, Spain</div>
                    <div className="">Website: <a href="https://naralabs.com">https://naralabs.com</a></div>
                  </div>
                </div>
              </div>
            </div>

          </div>

        </div>


      </div>
    );

    const WhyChooseUs = () => (
      <div className="container lightBackground paddingBottom paddingTop">
        <h1 className="section-header">Advantages of choosing a Professional Service Provider</h1>
        <div className="wrapper">
          <div className="section-intro">
            Professional Service Providers will help you to drive the adoption
            and implementation of SENAITE in your organization. In addition, by
            contracting a Professional Service Provider committed to SENAITE
            Open-Source project, you always invest in the project as well, making
            SENAITE a better product for all.
          </div>
        </div>
        <Block layout="twoColumn">
          {[
            {
              content: 'As Core Developers we have a deep understanding of the SENAITE Codebase and know quickly where and how to implement new features.',
              image: `${baseUrl}img/undraw_solution_mindset.svg`,
              imageAlign: 'top',
              title: 'Deep Knowledge',
            },
            {
              content: 'We write clean, concise and human understandable Code based on the [Zen of Python](https://www.python.org/dev/peps/pep-0020/#id3) principles, to keep the code understandable and further maintenance costs low.',
              image: `${baseUrl}img/undraw_to_the_moon.svg`,
              imageAlign: 'top',
              title: 'High Quality Standards',
            },
            {
              content: 'We code your customizations in separate Add-ons to keep your system upgradable and mitigate the adaption to newer versions of SENAITE.',
              image: `${baseUrl}img/undraw_version_control.svg`,
              imageAlign: 'top',
              title: 'Sustainable Solutions',
            },
            {
              content: 'We always try to bring the best features from our Client projects back into the Core for the benefit of all users.',
              image: `${baseUrl}img/undraw_investment.svg`,
              imageAlign: 'top',
              title: 'Back to Core',
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
          <h1 className="section-header">Powering laboratories efficiency</h1>
          <div className="wrapper">
            <div className="section-intro">
              Organizations across the globe that trust SENAITE as a <strong>robust
              and reliable Open-Source LIMS Solution</strong> to manage their
              daily laboratory routines.
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
          <WhyChooseUs />
          <Showcase />
        </div>
      </div>
    );
  }
}

module.exports = Index;
