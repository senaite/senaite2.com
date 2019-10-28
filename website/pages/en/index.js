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

    const Features = () => (
      <div className="container bg-lightgrey paddingBottom paddingTop">
        <h1 className="section-header">Performance</h1>
        <div className="wrapper">
          <div className="section-intro">
            Eliminate manual or repetitive tasks to increase the efficiency
          </div>
        </div>
        <Block layout="threeColumn">
          {[
            {
              content: 'Amongst other functionalities, SENAITE comes with highly-customizable workflows to drive users through the analytical process, easy-to-use UI for data registration, automatic import of results, data validation and transitions constraints.',
              image: `${baseUrl}img/undraw_investment.svg`,
              imageAlign: 'top',
              title: 'Process Automation',
            },
            {
              content: 'SENAITE can be easily integrated with instruments by using off-the-shell interfaces for data import and export. Custom interfacing is supported too. Import instrument results and avoid human errors in the carrying over process.',
              image: `${baseUrl}img/undraw_solution_mindset.svg`,
              imageAlign: 'top',
              title: 'Equipment Integration',
            },
            {
              content: 'Reduce the turnaround time on results reports delivery. Assign priorities to samples and due dates for tests, plan and assign the daily work by using worksheets and keep track of delayed tests immediately',
              image: `${baseUrl}img/undraw_done_checking.svg`,
              imageAlign: 'top',
              title: 'Turnaround Time',
            },
          ]}
        </Block>
      </div>
    );

    const Features2 = () => (
      <div className="container bg-white paddingBottom paddingTop">
        <h1 className="section-header">Control</h1>
        <div className="wrapper">
          <div className="section-intro">
            Inspect data flows and gain valuable insights
          </div>
        </div>
        <Block layout="threeColumn">
          {[
            {
              content: 'SENAITE is ready for use in an ISO/IEC 17025 compliant environment, if setup and run properly on appropriate infrastructure. SENAITE itself can not be certified. However we can help review and validate your compliance.',
              image: `${baseUrl}img/undraw_process.svg`,
              imageAlign: 'top',
              title: 'Compliance',
            },
            {
              content: 'SENAITE records and generates snapshots of your data on any modification, including the user name, IP and datetime when the Electronic Record was changed. All changes in the system can be easily inspected and traced back.',
              image: `${baseUrl}img/undraw_done.svg`,
              imageAlign: 'top',
              title: 'Audit and Traceability',
            },
            {
              content: 'SENAITE provides a powerful dashboard to visualize the performance of the lab on a daily, weekly, monthly, quarterly, biannually and yearly basis. Business Intelligence tools can also be connected to SENAITE through its JSON API.',
              image: `${baseUrl}img/undraw_all_the_data.svg`,
              imageAlign: 'top',
              title: 'Data Insights',
            },
          ]}
        </Block>
      </div>
    );

    const Features3 = () => (
      <div className="container bg-lightgrey paddingBottom paddingTop">
        <h1 className="section-header">Technology</h1>
        <div className="wrapper">
          <div className="section-intro">
            Trustable, robust, secure, independent
          </div>
        </div>
        <Block layout="threeColumn">
          {[
            {
              content: 'SENAITE is based on the Content Management System <a href="https://plone.org">Plone</a>, that has the best security track record of any major CMS. Besides, SENAITE comes with several mechanisms to prevent members or business associates making accidental or intentional changes that improperly alter or destroy electronic records.',
              image: `${baseUrl}img/undraw_security.svg`,
              imageAlign: 'top',
              title: 'Industrial Strength Security',
            },
            {
              content: 'SENAITE can be run on a Linux Server together with high availability web servers, load balancers and proxy servers',
              image: `${baseUrl}img/undraw_deliveries.svg`,
              imageAlign: 'top',
              title: 'Reliable Architecture',
            },
            {
              content: 'All users work with SENAITE through the web browser, so no further software needs to be installed on the workstations',
              image: `${baseUrl}img/undraw_goals.svg`,
              imageAlign: 'top',
              title: 'Centralized System',
            },
          ]}
        </Block>
      </div>
    );


    const Features4 = () => (
      <div className="container bg-white paddingBottom paddingTop">
        <h1 className="section-header">Driving the Implementation</h1>
        <div className="wrapper">
          <div className="section-intro">
            From the planning to the successful integration of SENAITE in your daily lab routine
          </div>
        </div>
        <Block layout="threeColumn">
          {[
            {
              content: 'We help you to elaborate a project plan and drive the implementation of SENAITE in your organization. After an <b>initial meeting</b> to know first-hand your requirements, we elaborate a detailed <b>GAP analysis</b> to unveil how much SENAITE covers the requirements of your lab and determines the amount of customizations needed. With your feedback, we therefore elaborate a <b>project plan with a defined scope and deliverables</b>.',
              image: `${baseUrl}img/undraw_detailed_analysis.svg`,
              imageAlign: 'top',
              title: 'Analysis and Planning',
            },
            {
              content: 'After the project plan is approved, we then proceed with the installation of two instances: <b>Q-System (pilot) + P-System (production)</b>. Having these two instances running at this early stage allows the laboratory to have a working system from the very beginning, making it easier for the lab-personnel to familiarize themselves with SENAITE and therefore, facilitating a regular feedback to make the implementation a success.',
              image: `${baseUrl}img/undraw_to_the_moon.svg`,
              imageAlign: 'top',
              title: 'Implementation',
            },
            {
              content: '<b>We love capacity building</b>, because we strongly believe the engagement of your team is key for success. We train your team in both functional (Lab personnel) and technical areas (System administrators and Software developers), so they can take control of SENAITE by themselves. We also provide <b>Operational Support Packages</b> to monitor your system and give you advice for <b>preventive and corrective actions</b>.',
              image: `${baseUrl}img/undraw_professor.svg`,
              imageAlign: 'top',
              title: 'Training and Support',
            },
          ]}
        </Block>
      </div>
    );

    const Providers = () => (
      <div className="container bg-screen providers paddingBottom paddingTop">
        <h1 className="section-header">Providers</h1>
        <div className="wrapper">
          {/* <div className="section-intro"> */}
          {/*   The listed companies are SENAITE Professional Service Providers and */}
          {/*   are <strong>committed to maintain and protect the code of SENAITE</strong>. */}
          {/*   They provide <strong>in depth knowledge</strong> of the system and */}
          {/*   are able to tailor the system to your specific needs and requirements. */}
          {/*   They work under <strong>high quality standards</strong> and always */}
          {/*   try to bring the best features of their clients back to the core for */}
          {/*   the <strong>benefit of the community and the project</strong>. */}
          {/* </div> */}
          <div className="section-intro">
            Solutions made by people. We are the companies behind SENAITE.
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
              {/* <div className="text-muted"> */}
              {/*   <strong>RIDING BYTES</strong> is a German-based company, providing <strong>professional open source services</strong> for enterprises of all sizes. */}
              {/*   We are specialized in interfacing systems into existing IT infrastructures and have a special focus on the areas of <strong>lab- and healthcare systems</strong>. */}
              {/*   Our <strong>comprehensive services</strong> include consulting, administration, software development and continuous maintenance of the software and the computer systems. */}
              {/*   <br/> */}
              {/*   <br/> */}
              {/*   The company was started for one single reason: To build better software for human beings. */}
              {/*   Therefore our mission is to build software solutions, using the most sophisticated and modern technologies available on the market. */}
              {/*   Always aligned with our strategy: To support Open-Source Software. */}
              {/*   <div className="contactBlock"> */}
              {/*     Contact us at <a href="mailto:hello@ridingbytes.com"> hello@ridingbytes.com</a> */}
              {/*     <div className="">Location: Germany</div> */}
              {/*   </div> */}
              {/* </div> */}
            </div>

            <div className="provider naralabs blockElement alignCenter twoByGridBlock">
              <div className="logo">
                <div className="top-slogan">&nbsp;</div>
                <a href="https://naralabs.com" className="logo-link">
                  <img src={baseUrl + "img/naralabs.png"}/>
                </a>
                <div className="slogan"></div>
              </div>
              {/* <div className="text-muted"> */}
              {/*   <div> */}
              {/*   <p> */}
              {/*     <strong>Naralabs</strong> is a company specialized in engineering */}
              {/*     and professional services around SENAITE. Our vision is to */}
              {/*     consolidate Open Source Software as an essential component */}
              {/*     within the strategies for improving efficiency, quality and */}
              {/*     data management in laboratories. */}
              {/*   </p> */}
              {/*   <p> */}
              {/*     We are not only accomplished professional service providers, */}
              {/*     but also passionate engineers, able to speak same language with */}
              {/*     both Laboratory personnel and IT department: we act as the */}
              {/*     catalyst to make the implementation of the LIMS/LIS in your */}
              {/*     organization a success. */}
              {/*   </p> */}
              {/*     <div className="contactBlock"> */}
              {/*       Contact us at <a href="mailto:info@naralabs.com"> info@naralabs.com</a> */}
              {/*       <div className="">Location: Barcelona, Spain</div> */}
              {/*     </div> */}
              {/*   </div> */}
              {/* </div> */}
            </div>

          </div>
          <div className="gridBlock">
          </div>
        </div>
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
          <h1 className="section-header">Trusted by</h1>
          <div className="wrapper">
            <div className="section-intro">
              Organizations across the globe.
            </div>
          </div>
          <div className="wrapper">
            <div className="logos">
              {showcase}
            </div>
          </div>
        </div>
      );
    };

    return (
      <div>
        <HomeSplash siteConfig={siteConfig} language={language} />
        <div className="mainContainer">
          <Features />
          <Features2 />
          <Features3 />
          <Features4 />
          <Providers />
          <Showcase />
        </div>
      </div>
    );
  }
}

module.exports = Index;
