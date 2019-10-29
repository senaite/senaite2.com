/**
 * Copyright (c) 2017-present, SENAITE Project.
 */

const React = require('react');

const CompLibrary = require('../../core/CompLibrary.js');

const Container = CompLibrary.Container;
const GridBlock = CompLibrary.GridBlock;

const VerticalTimeLine = require(`${process.cwd()}/core/VerticalTimeLine.js`);

function Implementation(props) {
  const {config: siteConfig, language = ''} = props;
  const {baseUrl, docsUrl} = siteConfig;
  const docsPart = `${docsUrl ? `${docsUrl}/` : ''}`;
  const langPart = `${language ? `${language}/` : ''}`;
  const docUrl = doc => `${baseUrl}${docsPart}${langPart}${doc}`;

  const supportLinks = [
    {
      content: `Learn more using the [documentation on this site.](${docUrl(
        'installation.html',
      )})`,
      title: 'Browse Docs',
    },
    {
      content: 'Ask questions about the project',
      content: `Ask questions about the project on the [Community Site](https://community.senaite.org) or in our [Chat Room](https://gitter.im/senaite/Lobby)`,
      title: 'Join the community',
    },
    {
      content: `Contact [RIDING BYTES](https://www.ridingbytes.com) or [NARALABS](https://naralabs.com)`,
      title: 'Contact a Service Provider',
    },
  ];

  const TimeLineOverview = () => (
    <VerticalTimeLine
      contents={[
        {
          title: 'Initial meeting',
          content: 'Meeting of 45 minutes to know first-hand the organization requirements.',
          icon: `${baseUrl}img/cd-icon-movie.svg`,
          color: '#f0cb47',
        },
        {
          title: 'GAP Analysis',
          content: 'GAP Analysis to unveil how much SENAITE covers the requirements of your organization and determines the recommended actions to be taken into consideration.',
          icon: `${baseUrl}img/cd-icon-location.svg`,
          color: '#f0cb47',
        },
        {
          title: 'Project Plan',
          content: 'Elaboration of a project plan with a defined scope and deliverables.',
          icon: `${baseUrl}img/cd-icon-location.svg`,
          color: '#f0cb47',
        },
        {
          title: 'On-site visit',
          content: 'On-site visit is highly recommended to build trust, engage your team, ad further fine-grained analysis.',
          icon: `${baseUrl}img/cd-icon-location.svg`,
          color: '#f0cb47',
        },
        {
          title: 'Functional Training',
          content: 'On-site visit is highly recommended to build trust, engage your team, ad further fine-grained analysis.',
          icon: `${baseUrl}img/cd-icon-location.svg`,
          color: '#f0cb47',
        },
        {
          title: 'Implementation',
          content: 'Deployment of Q-System and P-System. Continuous Integration (CI) + Continous Delivery (CD). Follow-up meetings and weekly reports.',
          icon: `${baseUrl}img/cd-icon-location.svg`,
          color: '#f0cb47',
        },
        {
          title: 'Technical Training',
          content: 'Technical training sessions are a must-have for organizations willing to fully or partially internalise the costs of maintenance and customizations of their own SENAITE system.',
          icon: `${baseUrl}img/cd-icon-location.svg`,
          color: '#f0cb47',
        },
        {
          title: 'Operational Support',
          content: 'System monitoring, security updates, advice for preventive and corrective actions.',
          icon: `${baseUrl}img/cd-icon-location.svg`,
          color: '#f0cb47',
        }
      ]}/>
  );

  return (
    <div>
      <div className="container paddingBottom">
        <h1 className="section-header">
          Implementation
        </h1>
        <div class="wrapper">
          <div class="section-intro paddingBottom">
            Something goes here
          </div>
        </div>

        <TimeLineOverview/>
      </div>
    </div>
  );
}

module.exports = Implementation;
