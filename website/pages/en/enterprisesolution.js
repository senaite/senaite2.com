/**
 * Copyright (c) 2017-present, SENAITE Project.
 */

const React = require('react');

const CompLibrary = require('../../core/CompLibrary.js');

const Container = CompLibrary.Container;
const GridBlock = CompLibrary.GridBlock;

const VerticalTimeLine = require(`${process.cwd()}/core/VerticalTimeLine.js`);


function EnterpriseSolution(props) {
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

  const Providers = () => (
    <div className="container bg-screen providers paddingBottom paddingTop">
      <h1 className="section-header">Enterprise Solution</h1>
      <div className="wrapper">
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
          </div>

          <div className="provider naralabs blockElement alignCenter twoByGridBlock">
            <div className="logo">
              <div className="top-slogan">&nbsp;</div>
              <a href="https://naralabs.com" className="logo-link">
                <img src={baseUrl + "img/naralabs.png"}/>
              </a>
              <div className="slogan"></div>
            </div>
          </div>
        </div>
      <div className="gridBlock">
      </div>
    </div>
  </div>
  );

  const WhyChooseUs = () => (
      <div className="container lightBackground paddingBottom paddingTop">
        <h1 className="section-header">Why Professional Providers</h1>
        <div className="wrapper">
          <div className="section-intro">
            Experience, expertise, know-how and passion
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
              content: 'We train your team in both functional and technical areas. <strong>Functional training sessions</strong> are useful for the laboratory personnel to know about the capabilities of SENAITE in detail and get the most of it. They are also a proven invaluable tool for the <strong>exploration of organization-specific scenarios</strong> that went unnoticed. SENAITE is Open Source, and as such, your team have access, study and modify the source code without any restriction. Therefore, <strong>Technical training sessions</strong> are a must-have for organizations willing to fully or partially <strong>internalise the costs of maintenance and customization</strong> of their own SENAITE system.',
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

  const DrivingImplementation = () => (
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
              content: 'We help you to elaborate a project plan and drive the implementation of SENAITE in your organization. After an <strong>initial meeting</strong> to know first-hand your requirements, we elaborate a detailed <strong>GAP analysis</strong> to unveil how much SENAITE covers the requirements of your lab and determines the amount of customizations needed. With your feedback, we therefore elaborate a <strong>project plan with a defined scope and deliverables</strong>.',
              image: `${baseUrl}img/undraw_detailed_analysis.svg`,
              imageAlign: 'top',
              title: 'Analysis and Planning',
            },
            {
              content: 'After the project plan is approved, we then proceed with the installation of two instances: <strong>Q-System (pilot) + P-System (production)</strong>. Having these two instances running at this early stage allows the laboratory to have a working system from the very beginning, making it easier for the lab-personnel to familiarize themselves with SENAITE and therefore, facilitating a regular feedback to make the implementation a success.',
              image: `${baseUrl}img/undraw_to_the_moon.svg`,
              imageAlign: 'top',
              title: 'Implementation',
            },
            {
              content: '<strong>We love capacity building</strong>, because we strongly believe the engagement of your team is key for success. We train your team in both functional (Lab personnel) and technical areas (System administrators and Software developers), so they can take control of SENAITE by themselves. We also provide <strong>Operational Support Packages</strong> to monitor your system and give you advice for <strong>preventive and corrective actions</strong>.',
              image: `${baseUrl}img/undraw_professor.svg`,
              imageAlign: 'top',
              title: 'Training and Support',
            },
          ]}
        </Block>
      </div>
    );

  const TimeLineOverview = () => (
    <div className="container bg-lightgrey paddingBottom paddingTop">
      <h1 className="section-header">
        How we work
      </h1>
      <div className="wrapper">
        <div className="section-intro">
          8 Steps to SENAITE implementation success
        </div>
      </div>
      <div className="container">
        <div class="wrapper">
          <VerticalTimeLine
          contents=
            {[
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
              title: 'Preventive & Corrective Support',
              content: 'Keep your SENAITE instance <strong>up-to-date and compatible</strong> with latest versions. Include updates, upgrades and Q&A',
              color: '#927f54',
            },
            {
              title: 'Operational Support',
              content: 'System monitoring, security updates, advice for preventive and corrective actions. A must-have to guarantee that your <strong>SENAITE system evolves consistently with unforeseen and/or planned laboratory requirements over time</strong>.',
              color: '#927f54',
            }
            ]}
          />
          </div>
        </div>
    </div>
  );


  return (
    <div className="container">
      <Providers/>
      <WhyChooseUs/>
      <DrivingImplementation/>
      <TimeLineOverview/>
    </div>
  );
}

module.exports = EnterpriseSolution;
