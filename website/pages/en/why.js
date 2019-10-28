/**
 * Copyright (c) 2017-present, SENAITE Project.
 */

const React = require('react');

const CompLibrary = require('../../core/CompLibrary.js');

const Container = CompLibrary.Container;
const GridBlock = CompLibrary.GridBlock;

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
            Experience, expertise, know-how and passionate engineers
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
              content: 'Professional service providers are also passionate engineers, <strong>able to speak same language with both Laboratory personnel and IT department</strong>. We analyse your organization requirements in-depth and suggest improvements both in functional and technical areas. Thanks to several <strong>years of experience on driving SENAITE implementations worldwide with success</strong>, providers have dealt with similar challenges as those that might arise while implementing a LIMS/LIS.',
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
              content: 'We code your customizations in separate Add-ons to keep your system upgradable and mitigate the adaption to newer versions of SENAITE.',
              image: `${baseUrl}img/undraw_version_control.svg`,
              imageAlign: 'top',
              title: 'Capacity building',
            },
            {
              content: 'We code your customizations in separate Add-ons to keep your system upgradable and mitigate the adaption to newer versions of SENAITE.',
              image: `${baseUrl}img/undraw_version_control.svg`,
              imageAlign: 'top',
              title: 'Long Term Support',
            },
          ]}
        </Block>
      </div>
    );

  return (
    <div className="container">
      <h1 className="section-header">
        Why Senaite?
      </h1>
      { /* <UnchainYourLab/> */ }
      <Description/>
      <Description2/>
      <WhyOpenSource/>
      <WhyChooseUs/>
    </div>
  );
}

module.exports = WhySenaite;
