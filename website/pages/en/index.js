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
        <h1 className="section-header">Performance</h1>
        <div className="wrapper">
          <div className="section-intro">
            Eliminate manual or repetitive tasks to increase the efficiency
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
        <h1 className="section-header">Control</h1>
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
        <h1 className="section-header">Technology</h1>
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
        <h1 className="section-header">Open Source</h1>
        <div className="wrapper">
          <div className="section-intro paddingBottom">
            The rights granted are far closer to owner rights than the rights granted by proprietary software
          </div>
        </div>
        <Block layout="twoColumn">
          {[
            {
              content: "Using open source software yields a lower total cost of ownership when compared to closed source and proprietary alternatives. Adopting open source software generally has a lower up-front cost, and <strong>shifts the cost center from licensing (an operating expense) to customization and implementation (a capital expense)</strong>.<br/><br/>Additional costs like training, maintenance, and support are sunk costs. You're going to be paying for both regardless of if the software is open or closed source, the cost often being baked into the license in the case of commercial, off-the-shelf software (COTS).<br/><br/>What makes open source unique is that <strong>you're not paying for the right to use the underlying intellectual property</strong>.<hr/>Source: <a target='_blank' href='https://ben.balter.com/2015/11/23/why-open-source/'>Why Open Source</a> by <a target='_blank' href='https://opensource.com/users/benbalter'>Ben Balter</a>, Nov. 23, 2015",
              image: `${baseUrl}img/undraw_invest.svg`,
              imageAlign: 'top',
              title: 'Lower Total Cost of Ownership (TCO)',
            },
            {
              content: "FLOSS has significant market share in many markets, is <strong>often the most reliable software, and in many cases has the best performance</strong>. FLOSS scales, both in problem size and project size. FLOSS software often has <strong>far better security</strong>, perhaps due to the possibility of worldwide review. Total cost of ownership for FLOSS is often far less than proprietary software, especially as the number of platforms increases.<br/><br/><strong>These statements are not merely opinions; these effects can be shown quantitatively, using a wide variety of measures</strong>. This doesn’t even consider other issues that are hard to measure, such as freedom from control by a single source, freedom from licensing management (with its accompanying risk of audit and litigation), Organizations can transition to FLOSS in part or in stages, which for many is a far more practical transition approach.<hr/>Source: <a target='_blank' href='https://dwheeler.com/oss_fs_why.html'>Why Open Source Software</a> by <a target='_blank' href='https://dwheeler.com/'>David A. Wheeler</a>, rev. Jul. 18, 2015",
              image: `${baseUrl}img/undraw_heatmap.svg`,
              imageAlign: 'top',
              title: "Reliability, Security, Performance",
            },
          ]}
        </Block>
      </div>
    );

    const TrustedBy = () => {
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
        <input className="button" type="submit" title="Send"
               value="Subscribe"/>
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
          <TrustedBy />
        </div>
      </div>
    );
  }
}

module.exports = Index;
