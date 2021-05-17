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

    const Performance = () => (
      <div className="container paddingBottom paddingTop">
        <h1 className="section-header">Boost Performance</h1>
        <div className="wrapper">
          <div className="section-intro">
            Eliminate manual or repetitive tasks to increase efficiency
          </div>
        </div>
        <Block layout="threeColumn">
          {[
            {
              content: 'Amongst other functionalities, SENAITE comes with highly-customizable workflows to drive users through the analytical process, easy-to-use UI for data registration, automatic import of results, data validation and transition constraints.',
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
              content: 'Reduce the turnaround time on results reports delivery. Assign priorities to samples and due dates for tests, plan and assign the daily work by using worksheets and keep track of delayed tests immediately.',
              image: `${baseUrl}img/undraw_done_checking.svg`,
              imageAlign: 'top',
              title: 'Turnaround Time',
            },
          ]}
        </Block>
      </div>
    );

    const Control = () => (
      <div className="container bg-lightgrey paddingBottom paddingTop">
        <h1 className="section-header">Gain Control</h1>
        <div className="wrapper">
          <div className="section-intro">
            Inspect data flows and gain valuable insights
          </div>
        </div>
        <Block layout="threeColumn">
          {[
            {
              content: 'SENAITE is ready for use in an ISO/IEC 17025 compliant environment, if setup and run properly in an appropriate infrastructure. Although SENAITE by itself can not be certified by its own, <a href="enterprisesolution">we can help review and validate your compliance</a>.',
              image: `${baseUrl}img/undraw_process.svg`,
              imageAlign: 'top',
              title: 'Compliance',
            },
            {
              content: 'SENAITE records and generates snapshots of your data on any modification, including the user name, IP address and datetime when the electronic record was changed. All changes in the system can be easily inspected, analysed and traced back.',
              image: `${baseUrl}img/undraw_done.svg`,
              imageAlign: 'top',
              title: 'Audit and Traceability',
            },
            {
              content: 'SENAITE provides a powerful dashboard to visualize the performance of the lab on a daily, weekly, monthly, quarterly, biannually and yearly basis. Business Intelligence tools can be connected to SENAITE through the use of its JSON API.',
              image: `${baseUrl}img/undraw_all_the_data.svg`,
              imageAlign: 'top',
              title: 'Data Insights',
            },
          ]}
        </Block>
      </div>
    );

    const Technology = () => (
      <div className="container paddingBottom paddingTop">
        <h1 className="section-header">Reliable Technology</h1>
        <div className="wrapper">
          <div className="section-intro">
            Trustable, robust, secure, independent
          </div>
        </div>
        <Block layout="threeColumn">
          {[
            {
              content: 'SENAITE is based on the Content Management System <a href="https://plone.org">Plone</a>, that has the <strong>best security track record of any major CMS</strong>. Besides that, SENAITE comes with several mechanisms to prevent members or business associates making accidental or intentional changes that improperly alter or destroy electronic records.',
              image: `${baseUrl}img/undraw_security.svg`,
              imageAlign: 'top',
              title: 'Industrial Strength Security',
            },
            {
              content: 'SENAITE can be run on Linux servers together with high availability web servers, load balancers and proxy servers. It can be easily deployed in virtualized environments. Thanks to Plone CMS, SENAITE connects and plays well with your infrastructure and is <strong>adaptable to your business needs today and 10 years from now</strong>.',
              image: `${baseUrl}img/undraw_deliveries.svg`,
              imageAlign: 'top',
              title: 'Reliable Architecture',
            },
            {
              content: 'SENAITE works in the web browser, which <strong>improves the information flow</strong> and <strong>lowers the hardware expenses</strong>. This gives IT departments better control and reduces maintenance tasks, which leads to a <strong>reduction of costs, increase of productivity</strong> and <strong>helps to meet industry regulations</strong>, as they usually require varying degrees of IT system centralization.',
              image: `${baseUrl}img/undraw_goals.svg`,
              imageAlign: 'top',
              title: 'Centralized System',
            },
          ]}
        </Block>
      </div>
    );

    const WhyOpenSource = () => (
      <div className="container bg-lightgrey paddingTop paddingBottom">
        <h1 className="section-header">Why Open Source?</h1>
        <div className="wrapper">
          <div className="section-intro paddingBottom">
            Open source is the globalization of software development and together we are even more stronger
          </div>
        </div>
        <Block layout="twoColumn">
          {[
            {
              content: "Open Source is the key to combine the brilliant ideas from millions of gifted people to products that rock. We believe that we can be even more stronger together if we build thrilling technologies on the shoulder of giants and geniuses. Therefore we choose top modern and free Open Source technologies to support your challenging everyday business.",
              image: `${baseUrl}img/undraw_Around_the_world.svg`,
              imageAlign: 'top',
              title: 'Versatility matters',
            },
            {
              content: "Who likes to plunge into the unknown. We do not and therefore decide to strictly use Open Source software as the basis of all our efforts. We combine the most reliable and proven technologies out there to build excellent software and support our valued customers. If you choose SENAITE you will be able to regain control about everything.",
              image: `${baseUrl}img/undraw_heatmap.svg`,
              imageAlign: 'top',
              title: "Security first",
            },
          ]}
        </Block>
      </div>
    );

    const MailingListForm = props => (
     <div className="container paddingTop paddingBottom">
        <h1 className="section-header">Mailing list</h1>
        <div className="wrapper">
          <div className="section-intro">
          Subscribe to announcements and news.
          </div>
        </div>
        <div className="wrapper">
          <div className="alignCenter">
            <form id="subscribe"
              className="form form-inline"
              action="https://sourceforge.net/projects/senaite/lists/senaite-users" method="GET">
              <input name="email" placeholder="labman@acme-labs.io" type="text" className="form-input"/>
              <input className="button" type="submit" title="Send" value="Subscribe"/>
            </form>
          </div>
        </div>
      </div>
    );


    return (
      <div>
        <HomeSplash siteConfig={siteConfig} language={language} />
        <div className="mainContainer">
          <Performance />
          <Control />
          <Technology />
          <WhyOpenSource />
        </div>
      </div>
    );
  }
}

module.exports = Index;