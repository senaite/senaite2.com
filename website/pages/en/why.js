/**
 * Copyright (c) 2017-present, SENAITE Project.
 */

const React = require('react');

const CompLibrary = require('../../core/CompLibrary.js');

const Container = CompLibrary.Container;
const GridBlock = CompLibrary.GridBlock;

const VerticalTimeLine = require(`${process.cwd()}/core/VerticalTimeLine.js`);

function WhySenaite(props) {
  const {config: siteConfig, language = ''} = props;
  const {baseUrl, docsUrl} = siteConfig;
  const docsPart = `${docsUrl ? `${docsUrl}/` : ''}`;
  const langPart = `${language ? `${language}/` : ''}`;
  const docUrl = doc => `${baseUrl}${docsPart}${langPart}${doc}`;

  const Block = props => (
    <Container
    padding={['bottom', 'top']}
    id={props.id}
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
        <h1 className="section-header">SENAITE Features</h1>
        <div className="wrapper">
          <div className="section-intro">
            Discover some of the functionalities SENAITE comes with
          </div>
        </div>
        <Block layout="threeColumn">
          {[
            {
              content: 'Amongst other functionalities, SENAITE comes with highly-customizable workflows to drive users through the analytical process, easy-to-use UI for data registration, automatic import of results, data validation and transitions constraints.',
              title: 'Samples management',
            },
            {
              content: 'SENAITE can be easily integrated with instruments by using off-the-shell interfaces for data import and export. Custom interfacing is supported too. Import instrument results and avoid human errors in the carrying over process.',
              title: 'Worksheets',
            },
            {
              content: 'Reduce the turnaround time on results reports delivery. Assign priorities to samples and due dates for tests, plan and assign the daily work by using worksheets and keep track of delayed tests immediately',
              title: 'Batches',
            },
            {
              content: 'Reduce the turnaround time on results reports delivery. Assign priorities to samples and due dates for tests, plan and assign the daily work by using worksheets and keep track of delayed tests immediately',
              title: 'Partitions, Aliquots',
            },
            {
              content: 'Reduce the turnaround time on results reports delivery. Assign priorities to samples and due dates for tests, plan and assign the daily work by using worksheets and keep track of delayed tests immediately',
              title: 'Profiles and Templates',
            },
            {
              content: 'Reduce the turnaround time on results reports delivery. Assign priorities to samples and due dates for tests, plan and assign the daily work by using worksheets and keep track of delayed tests immediately',
              title: 'Instruments management',
            },
            {
              content: 'Reduce the turnaround time on results reports delivery. Assign priorities to samples and due dates for tests, plan and assign the daily work by using worksheets and keep track of delayed tests immediately',
              title: 'Audit Log',
            },
            {
              content: 'Reduce the turnaround time on results reports delivery. Assign priorities to samples and due dates for tests, plan and assign the daily work by using worksheets and keep track of delayed tests immediately',
              title: 'Analysis and Calculations',
            },
            {
              content: 'Reduce the turnaround time on results reports delivery. Assign priorities to samples and due dates for tests, plan and assign the daily work by using worksheets and keep track of delayed tests immediately',
              title: 'Security policies',
            },
            {
              content: 'Reduce the turnaround time on results reports delivery. Assign priorities to samples and due dates for tests, plan and assign the daily work by using worksheets and keep track of delayed tests immediately',
              title: 'Barcode printing',
            },
            {
              content: 'Reduce the turnaround time on results reports delivery. Assign priorities to samples and due dates for tests, plan and assign the daily work by using worksheets and keep track of delayed tests immediately',
              title: 'Results reports and COA',
            },
            {
              content: 'Reduce the turnaround time on results reports delivery. Assign priorities to samples and due dates for tests, plan and assign the daily work by using worksheets and keep track of delayed tests immediately',
              title: 'Integration with instruments',
            },
          ]}
        </Block>
      </div>
    );


  const Description = () => (
    <Block>
    {[
      {
        content:
        'This is another description of how this project is useful',
        image: `${baseUrl}img/undraw_invest.svg`,
        imageAlign: 'right',
        title: 'Description',
      },
    ]}
    </Block>
  );

  const Description2 = () => (
    <Block background="light">
    {[
      {
        content:
        'This is another description of how this project is useful',
        image: `${baseUrl}img/undraw_invest.svg`,
        imageAlign: 'left',
        title: 'Description',
      },
    ]}
    </Block>
  );

    const UnchainYourLab = () => (
      <div className="container paddingBottom">
        <h1 className="section-header">Unchain your Lab with SENAITE</h1>
        <div className="wrapper">
          <div className="section-intro paddingBottom">
            Choosing Open Source is a matter of <strong>liberty</strong> and not just the ability to get the software for free.
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


    const WhyOpenSource = () => (
      <div className="container paddingTop paddingBottom">
        <h1 className="section-header">Why Open Source</h1>
        <div className="wrapper">
          <div className="section-intro paddingBottom">
            The rights granted are far closer to an owner's rights than the rights granted by proprietary software
          </div>
        </div>
        <Block layout="twoColumn">
          {[
            {
              content: "Using open source software yields a lower total cost of ownership when compared to closed source and proprietary alternatives. Adopting open source software generally has a lower up-front cost, and <strong>shifts the cost center from licensing (an operating expense) to customization and implementation (a capital expense)</strong>.<br/><br/>Additional costs like training, maintenance, and support are sunk costs. You're going to be paying for both regardless of if the software is open or closed source, the cost often being baked into the license in the case of commercial, off-the-shelf software (COTS).<br/><br/>What makes open source unique is that <strong>you're not paying for the right to use the underlying intellectual property</strong>.<hr>Source: <a href='https://ben.balter.com/2015/11/23/why-open-source/'>Why Open Source</a> by <a href='https://opensource.com/users/benbalter'>Ben Balter</a>, Nov. 23, 2015",
              image: `${baseUrl}img/undraw_invest.svg`,
              imageAlign: 'top',
              title: 'Lower Total Cost of Ownership (TCO)',
            },
            {
              content: "FLOSS has significant market share in many markets, is <strong>often the most reliable software, and in many cases has the best performance</strong>. FLOSS scales, both in problem size and project size. FLOSS software often has <strong>far better security</strong>, perhaps due to the possibility of worldwide review. Total cost of ownership for FLOSS is often far less than proprietary software, especially as the number of platforms increases.<br/><br/><strong>These statements are not merely opinions; these effects can be shown quantitatively, using a wide variety of measures</strong>. This doesn’t even consider other issues that are hard to measure, such as freedom from control by a single source, freedom from licensing management (with its accompanying risk of audit and litigation), Organizations can transition to FLOSS in part or in stages, which for many is a far more practical transition approach.<hr>Source: <a href='https://dwheeler.com/oss_fs_why.html'>Why Open Source Software</a> by <a href='https://dwheeler.com/'>David A. Wheeler</a>, rev. Jul. 18, 2015",
              image: `${baseUrl}img/undraw_heatmap.svg`,
              imageAlign: 'top',
              title: "Reliability, Security, Performance",
            },
          ]}
        </Block>
      </div>
    );

  const WhyChooseUs = () => (
      <div className="container lightBackground paddingBottom paddingTop">
        <h1 className="section-header">Why Professional Providers</h1>
        <div className="wrapper">
          <div className="section-intro">
            Experience, expertise, know-how and passionate
          </div>
        </div>
        <Block layout="twoColumn">
          {[
            {
              content: 'Professional Service Providers, as maintainers and developers, have a <strong>deep understanding of the SENAITE Codebase</strong> and know quickly where and how to implement new features or how to tailor the system to best fit your organization needs. In addition, by contracting a Professional Service Provider, <strong>you always invest in SENAITE codebase</strong> as well, making it a better product while receiving back the contributions made for other laboratories like yours.',
              image: `${baseUrl}img/undraw_version_control.svg`,
              imageAlign: 'top',
              title: 'Maintainers and Developers',
            },
            {
              content: 'Professional service providers are also passionate engineers, <strong>able to speak same language with both Laboratory personnel and IT department</strong>. We analyse your organization requirements in-depth and suggest improvements for both functional and technical areas. Thanks to several <strong>years of experience on driving SENAITE implementations worldwide with success</strong>, providers have dealt with similar challenges as those that might arise while implementing a LIMS/LIS.',
              image: `${baseUrl}img/undraw_usability_testing.svg`,
              imageAlign: 'top',
              title: 'Skilled Engineers',
            },
            {
              content: 'We write clean, concise and human understandable <strong>Code based on the [Zen of Python](https://www.python.org/dev/peps/pep-0020/#id3) principles</strong>, to keep the code understandable and further maintenance costs low. We use <strong>Peer Review strategy</strong>, so the work done by one of our engineers is always reviewed by another engineer before its delivery. To guarantee backwards compatibility, we follow <strong>Continuous Integration (CI)</strong> practice by adding automated tests. Last, but not least, we also follow <strong>Continuous Delivery (CD)</strong> practice, to provide both <strong>timely deliverables and a working environment from the start</strong>.',
              image: `${baseUrl}img/undraw_confirmation.svg`,
              imageAlign: 'top',
              title: 'High Quality Standards',
            },
            {
              content: 'After an <strong>initial meeting</strong> to know first-hand your requirements, Professional Service Providers do an in-depth <strong>GAP Analysis</strong> to unveil how much SENAITE covers the requirements of your laboratory and determines the recommended actions to be taken into consideration. As soon as the actions suggested are accepted, we elaborate a <strong>Project Plan</strong>. The project plan is based on <strong>milestones and deliverables</strong>. An <strong>on-site visit</strong> is highly recommended to build trust, engage your team, and further fine-grained assessment. <strong>Follow-up meetings and weekly reports</strong> are mechanisms to control the project success.',
              image: `${baseUrl}img/undraw_organizing_projects.svg`,
              imageAlign: 'top',
              title: 'Project plan',
            },
            {
              content: 'We train your team in both functional and technical areas. <strong>Functional training sessions</strong> are useful for the laboratory personnel to know about the capabilities of SENAITE in detail and get the most of it. Are also a proved invaluable tool for the <strong>exploration of organization-specific scenarios</strong> that went unnoticed. SENAITE is Open Source, and as such, your team have access, study and modify the source code without any restriction. Therefore, <strong>Technical training sessions</strong> are a must-have for organizations willing to fully or partially <strong>internalise the costs of maintenance and customization</strong> of their own SENAITE system.',
              image: `${baseUrl}img/undraw_high_five.svg`,
              imageAlign: 'top',
              title: 'Capacity building',
            },
            {
              content: 'Professional service providers also give you the opportunity to hire <strong>Operational Support Packages</strong>. With these packages, we can monitor your system, notify about deviations rapidly, apply <strong>security updates</strong> promptly and give you <strong>advice for preventive and corrective actions</strong>. System monitoring is also useful to guarantee that your <strong>SENAITE system evolves consistently with unforeseen and/or planned laboratory requirements over time</strong>, being these requirements related with either functional or technical areas.',
              image: `${baseUrl}img/undraw_instant_support.svg`,
              imageAlign: 'top',
              title: 'Long Term Support',
            },
          ]}
        </Block>
      </div>
    );


  const TimeLineOverview = () => (
    <div className="container paddingBottom">
    <h1 className="section-header">
      Implementation
    </h1>
    <div class="wrapper">
      <div class="section-intro paddingBottom">
        7 Steps to SENAITE implementation success
      </div>
    </div>
    <VerticalTimeLine
      contents={[
        {
          title: 'Requirements meeting',
          content: 'High level organization overview, current state organization process specifics, identification of problems and opportunities for improvement, future state questions and expectations.',
          color: '#927f54',
        },
        {
          title: 'GAP Analysis',
          content: 'Unveil how much SENAITE covers the requirements of your organization. Insight into areas that need improvement, prioritization of needs, finding shortcomings to address, uncovering differences in perception vs. reality. <strong>For the elaboration of this GAP analysis, an on-site visit and functional training are strongly recommended</strong>.',
          color: '#927f54',
        },
        {
          title: 'Functional Training',
          content: 'Besides of being a training for lab personnel, this is a proved invaluable tool for the <strong>exploration of organization-specific scenarios that went initially unnoticed</strong>. Therefore, we strongly recommend to do this training at same time the GAP analysis is being elaborated. For the same reason, this is also the <strong>perfect complement to an on-site visit</strong>.',
          color: '#927f54',
        },
        {
          title: 'Project Plan',
          content: '<p>Delivery of a project plan based on the discussion and feedback received from previous stages. Includes the <strong>scope, milestones and deliverables</strong>.</p><p>It becomes the approved document <strong>used to guide both project execution and project control</strong>: document planning assumptions and decisions, facilitate communication, scope, cost, and schedule baselines.</p>',
          icon: `${baseUrl}img/cd-icon-location.svg`,
          color: '#927f54',
        },
        {
          title: 'Implementation',
          content: '<p>Deployment of two instances: <strong>Q-System (pilot environment) and P-System (production environment)</strong>. Having these two instances at this early stage allows the laboratory to have a working system from the start.</p><p>The implementation might take from a few weeks to some months to complete depending on the project plan schedule.</p><p>We follow <strong>Continuous Integration (CI) and Continuous Delivery (CD) practices</strong>. <strong>Follow-up meetings and weekly reports</strong> are included.</p>',
          color: '#927f54',
        },
        {
          title: 'Technical Training',
          content: 'Technical training sessions are a must-have for organizations willing to fully or partially internalise the costs of maintenance and customizations of their own SENAITE system. Introduction to <strong>system architecture and application stack, system maintenance, backups and custom-made development</strong>.',
          color: '#927f54',
        },
        {
          title: 'Operational Support',
          content: 'System monitoring, security updates, advice for preventive and corrective actions. A must-have to guarantee that your <strong>SENAITE system evolves consistently with unforeseen and/or planned laboratory requirements over time</strong>.',
          color: '#927f54',
        }
      ]}/>
    </div>
  );

  return (
    <div className="container">
      { /* <h1 className="section-header"> */ }
      { /*   Why Senaite? */ }
      { /* </h1> */ }
      { /* <UnchainYourLab/> */ }
      <Features/>
      <WhyOpenSource/>
      <WhyChooseUs/>
      <TimeLineOverview/>
    </div>
  );
}

module.exports = WhySenaite;
