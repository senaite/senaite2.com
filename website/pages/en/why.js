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
            /* { */
            /*   content: "We like to say in open source that all the easy problems have already been solved. Blogging, content management, and operating systems are all problems with established (and mainstream) open source solutions, to name a few. While your developers could spend their time reinventing wheels that the open source community have already perfected, it's far preferable to use the worlds best wheel, especially when that wheel comes at no cost to you. This frees developers up to work on yet-unsolved challenges, the types of challenges that are unique to and add value to your organization's mission. Why not stand on the shoulders of technology giants?", */
            /*   image: `${baseUrl}img/undraw_High_five.svg`, */
            /*   imageAlign: 'top', */
            /*   title: "Shift developers from low-value work to high-value work", */
            /* }, */
            /* { */
            /*   content: "If you consume open source software, it's in your best interest to contribute back. Contributions can be in the form of reporting bugs, or even submitting proposed fixes. Since software is written by humans, it's highly unlikely to be perfect, and even if so, likely doesn't satisfy every use case. Rather than forking the project and implementing changes into your own version (closed source), submitting bug reports and improvements upstream (open source) allows you to more easily continue to benefit from the subsequent fixes and improvements submitted by others.", */
            /*   image: `${baseUrl}img/undraw_invest.svg`, */
            /*   imageAlign: 'top', */
            /*   title: "Upstream improvements", */
            /* }, */
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
            Professional Service Providers will help you to drive the adoption
            and implementation of SENAITE in your organization. In addition, by
            contracting a Professional Service Provider committed to SENAITE
            Open Source project, you always invest in the project as well, making
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
