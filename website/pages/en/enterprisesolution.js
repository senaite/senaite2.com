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
  
  const Headline = () => (
    <div className="container bg-screen paddingBottom paddingTop privacy_policy_responsibles">
    <h1 className="section-header">Choose Enterprise and Gain Control</h1>
    <div className="wrapper">
    <div className="section-intro">
    Experience, expertise, know-how and passion
    </div>
    </div>
    </div>
  );

  const WhyChooseUs = () => (
      <div className="container lightBackground paddingBottom paddingTop">
        <div className="wrapper">
        </div>
        <Block layout="twoColumn">
          {[
            {
              content: '<strong>We know the LIMS business</strong> and we are passionate to assist whenever you would like to implement a LIMS. We support with programming new features and tailor the system to your individual requirements reliably. <strong>We are Open Source</strong> and therefore start profiting from investments of all our customers worldwide.',
              image: `${baseUrl}img/undraw_version_control.svg`,
              imageAlign: 'top',
              title: 'Excellent Service',
            },
            {
              content: '<strong>We speak your language</strong>. Our team members have a long professional background so that they are able to consult with both Laboratory personnel and IT department. <strong>We analyze your requirements</strong> in-depth and suggest improvements for both functional and technical areas. Due to our implementations success worldwide, we are able to <strong>support you with our best of breed solutions</strong>.',
              image: `${baseUrl}img/undraw_usability_testing.svg`,
              imageAlign: 'top',
              title: 'Skilled Professionals',
            },
            {
              content: 'We build our technologies on proven and reliable Open Source software only. Our enterprise solutions are build on the shoulders of open source giants. We apply <strong>Peer Review strategy</strong>, so the work done is always reviewed before it is delivered. To guarantee backwards compatibility, we follow <strong>Continuous Integration (CI)</strong> practice by adding automated tests. <strong>Continuous Delivery (CD)</strong> is our practice, to provide both <strong>timely deliverables and a working environment from the start</strong>.',
              image: `${baseUrl}img/undraw_confirmation.svg`,
              imageAlign: 'top',
              title: 'High Quality Standards',
            },
            {
              content: '<strong>We know your time is precious</strong> and this is why we apply agile project management techniques to deliver fastest and keep you as our valued customers involved and informed. <strong>Our customers gain full control</strong> and transparency about all steps, milestones and work being performed. We use modern web software where you can <strong>easy collaborate using your browser</strong>. This is the basis of success together with our customers.',
              image: `${baseUrl}img/undraw_organizing_projects.svg`,
              imageAlign: 'top',
              title: 'Project Plans that Match',
            },
            {
              content: '<strong>LIMS is a great fun</strong> and we would love to show you this as well. We train your team with workshops <strong>specifically adjusted to your individual needs</strong>. This why you will learn so quickly how to manage this complex piece of software. <strong>Our professionals have a long term background in laboratory business</strong> and know well about your everyday challenges.',
              image: `${baseUrl}img/undraw_high_five.svg`,
              imageAlign: 'top',
              title: 'Workshops which thrill',
            },
            {
              content: '<strong>Security first</strong>, this is what matters in your professional business. <strong>Stay up-to-date</strong> and keep track with all the technological changes. <strong>Experience first class professional support</strong> whenever a problem might occur. This is why we offer <strong>excellent Service Level Agreements</strong> which really match your needs. <strong>We are here for you</strong> whenever you need our help.',
              image: `${baseUrl}img/undraw_instant_support.svg`,
              imageAlign: 'top',
              title: 'Professional Support',
            },
          ]}
        </Block>
      </div>
    );

  const DrivingImplementation = () => (
      <div className="container bg-white paddingBottom paddingTop">
        <h1 className="section-header">Your Project in good hands</h1>
        <div className="wrapper">
          <div className="section-intro">
            From the first idea to a successful integration. We are here to assist you.
          </div>
        </div>
        <Block layout="threeColumn">
          {[
            {
              content: 'We help you to elaborate a project plan and drive the implementation of SENAITE in your organization. After an <strong>initial workshop</strong> to know first-hand your requirements, we prepare a detailed <strong>GAP analysis and project plan</strong> to unveil how much SENAITE covers the requirements of your lab and determines the amount of customizations needed.',
              image: `${baseUrl}img/undraw_detailed_analysis.svg`,
              imageAlign: 'top',
              title: 'Consulting',
            },
            {
              content: 'After the workshop and the determination of your specific requirements we start to <strong>implement the new functionalities and adjustments</strong>. During the whole implementation phase we <strong>keep you perfectly updated</strong> with our project management tools. Each step, milestone and work being done is available for all stakeholders.',
              image: `${baseUrl}img/undraw_to_the_moon.svg`,
              imageAlign: 'top',
              title: 'Implementation',
            },
            {
              content: 'We assist you to not loose track with our update and support services. If any problem occurs we would love to assist with our Service Level Agreements which perfectly fit in productive environments with guaranteed response times. Become our customer and part of the SENAITE family.',
              image: `${baseUrl}img/undraw_professor.svg`,
              imageAlign: 'top',
              title: 'Support',
            },
          ]}
        </Block>
      </div>
    );

  const TimeLineOverview = () => (
    <div className="container bg-lightgrey paddingBottom paddingTop">
      <h1 className="section-header">
        Six steps to success
      </h1>
      <div className="wrapper">
        <div className="section-intro">
          This is how we work
        </div>
      </div>
      <div className="container">
        <div className="wrapper">
          <VerticalTimeLine
          contents=
            {[
              {
                title: 'Workshop',
                content: 'Before the one day online workshop we configure a prototype of the LIMS with regards to your specific requirements. During the workshop we show you step by step how to setup the system and use the LIMS. Afterwards you can download our SENAITE LIMS Enterprise Server as a virtual appliance or book our cloud services.',
                color: '#927f54',
            },
            {
              title: 'Consulting',
              content: 'If you decide to go further with us we start to identify potential adjustments and additional functionalities for your use case. Whilst keeping everyone appraised we create a detailed project plan for implementation in a quality controlled and written manner.',
              color: '#927f54',
            },
            {
              title: 'Training',
              content: 'A LIMS is a complex piece of software and this is why we offer excellent trainings for lab and management personell to get out the best of this excellent tool.',
              color: '#927f54',
            },
            {
              title: 'Prototyping',
              content: 'After getting trained the LIMS gets tested in a productive environment. This is necessary to measure the performance of the system and optimize it for your daily use. If any problem occurs then this is the perfect moment to fix it.',
              color: '#927f54',
            },
            {
              title: 'Go live',
              content: 'The day has come and SENAITE LIMS goes live. Now we are here to check again if everything works the desired way. Do not forget to book a Service Level Agreement to keep your system up-to-date and enjoy the software for the next decades to come.',
              color: '#927f54',
            },
            {
              title: 'Operational Support',
              content: 'System monitoring, security updates, advice for preventive and corrective actions. A must-have to guarantee that your SENAITE system evolves consistently with unforeseen and/or planned laboratory requirements over time.',
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

      <Headline/>
      <WhyChooseUs/>
      <DrivingImplementation/>
      <TimeLineOverview/>
    </div>
  );
}

module.exports = EnterpriseSolution;
