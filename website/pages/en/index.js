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

    const WhyOpenSource = () => (
      <div className="container paddingTop paddingBottom">
        <h1 className="section-header">Why to choose Open-Source</h1>
        <div className="wrapper">
          <div className="section-intro paddingBottom">
            Open source is in your best interest, whether you're an individual, a corporation, a small business, a non-profit, or a government agency.
            <div className="text-muted">
              <hr/>
              Source: <a href="https://ben.balter.com/2015/11/23/why-open-source/">Why Open Source</a> by <a href="https://opensource.com/users/benbalter">Ben Balter</a>, Nov. 23, 2015
            </div>
          </div>
        </div>
        <Block layout="twoColumn">
          {[
            {
              content: "Using open source software yields a lower total cost of ownership when compared to closed source and proprietary alternatives. Adopting open source software generally has a lower up-front cost (because the software often comes at no cost or relatively low cost), and shifts the cost center from licensing (an operating expense) to customization and implementation (a capital expense). Additional costs like training, maintenance, and support are sunk costs. You're going to be paying for both regardless of if the software is open or closed source, the cost often being baked into the license in the case of commercial, off-the-shelf software (COTS). What makes open source unique is that you're not paying for the right to use the underlying intellectual property.",
              image: `${baseUrl}img/undraw_predictive_analytics.svg`,
              imageAlign: 'top',
              title: 'Lower total cost of ownership',
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
              content: "You'd be hard pressed to find a startup today worth it's venture capital funding not based, at least in part (if not largely) on open source. Open source isn't a fad, or a bunch of hippies out in California passing around tie-dye laptops like they would illicit substances. Open source is how modern organizations, and increasingly more traditional organizations build software. It's becoming exceedingly challenging to make the argument that five-or-ten years from now the technology landscape is going to be less collaborative and more closed",
              image: `${baseUrl}img/undraw_open_source.svg`,
              imageAlign: 'top',
              title: "Open source is the future",
            },
          ]}
        </Block>
      </div>
    );

    const UnchainYourLab = () => (
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
              content: 'Automate data imports of your instruments',
              image: `${baseUrl}img/undraw_process.svg`,
              imageAlign: 'top',
              title: 'Process Automation',
            },
            {
              content: 'Import results of your instruments and avoid human errors in the carrying over process.',
              image: `${baseUrl}img/undraw_server.svg`,
              imageAlign: 'top',
              title: 'Equipment Integration',
            },
            {
              content: 'Handle Samples in Batches and Analyses in Worksheets',
              image: `${baseUrl}img/undraw_timeline.svg`,
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
              content: '',
              image: `${baseUrl}img/undraw_inspection.svg`,
              imageAlign: 'top',
              title: 'Compliance',
            },
            {
              content: 'SENAITE generates snapshots of your data on any modification. All changes in the system can be easily inspected and traced back.',
              image: `${baseUrl}img/undraw_surveillance.svg`,
              imageAlign: 'top',
              title: 'Traceability',
            },
            {
              content: 'SENAITE provides a powerful dashboard to visualize the performance of the lab on a daily, weekly, monthly, quarterly, biannually and yearly basis.',
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
        <h1 className="section-header">Technical</h1>
        <div className="wrapper">
          <div className="section-intro">
            Trustable, robust, secure, independent
          </div>
        </div>
        <Block layout="threeColumn">
          {[
            {
              content: 'SENAITE is based on the Content Management System <a href="https://plone.org">Plone</a>, that has the best security track record of any major CMS.',
              image: `${baseUrl}img/undraw_secure_server.svg`,
              imageAlign: 'top',
              title: 'Industrial Strength Security',
            },
            {
              content: 'SENAITE can be run on a Linux Server together with high availability web servers, load balancers and proxy servers',
              image: `${baseUrl}img/undraw_server_status.svg`,
              imageAlign: 'top',
              title: 'Reliable Architecture',
            },
            {
              content: 'All users work with SENAITE through the web browser, so no further software needs to be installed on the workstations.',
              image: `${baseUrl}img/undraw_server.svg`,
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
              content: '',
              image: `${baseUrl}img/undraw_prioritise.svg`,
              imageAlign: 'top',
              title: 'Planning',
            },
            {
              content: '',
              image: `${baseUrl}img/undraw_control_panel.svg`,
              imageAlign: 'top',
              title: 'Tailoring',
            },
            {
              content: '',
              image: `${baseUrl}img/undraw_secure_data.svg`,
              imageAlign: 'top',
              title: 'Training and Support',
            },
          ]}
        </Block>
      </div>
    );

    const Providers = () => (
      <div className="container bg-screen providers paddingBottom paddingTop">
        <h1 className="section-header">Companies</h1>
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
          <Features />
          <Features2 />
          <Features3 />
          <Features4 />
          <Providers />
          {/* <WhyOpenSource /> */}
          {/* <WhyChooseUs /> */}
          {/* <Showcase /> */}
        </div>
      </div>
    );
  }
}

module.exports = Index;
