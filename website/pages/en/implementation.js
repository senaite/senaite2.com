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
          title: 'Requirements meeting',
          content: 'High level organization overview, current state organization process specifics, identification of problems and opportunities for improvement, future state questions and expectations.',
          icon: `${baseUrl}img/cd-icon-movie.svg`,
          color: '#f0cb47',
        },
        {
          title: 'GAP Analysis',
          content: 'Unveil how much SENAITE covers the requirements of your organization. Insight into areas that need improvement, prioritization of needs, finding shortcomings to address, uncovering differences in perception vs. reality. <strong>For the elaboration of this GAP analysis, an on-site visit and functional training are strongly recommended</strong>.',
          icon: `${baseUrl}img/cd-icon-location.svg`,
          color: '#927f54',
        },
        {
          title: 'Functional Training',
          content: 'Besides of being a training for lab personnel, this is a proved invaluable tool for the <strong>exploration of organization-specific scenarios that went initially unnoticed</strong>. Therefore, we strongly recommend to do this training at same time the GAP analysis is being elaborated. For the same reason, this is also the <strong>perfect complement to an on-site visit</strong>.',
          icon: `${baseUrl}img/cd-icon-movie.svg`,
          color: '#927f54',
        },
        {
          title: 'Project Plan',
          content: 'Elaboration of a project plan based on the discussion and feedback received from previous stages. Includes the <strong>scope, milestones and deliverables</strong>. It will become the approved document <strong>used to guide both project execution and project control</strong>: document planning assumptions and decisions, facilitate communication, scope, cost, and schedule baselines.',
          icon: `${baseUrl}img/document_cert.svg`,
          color: '#927f54',
        },
        {
          title: 'Implementation',
          content: 'Deployment of two instances: Q-System (pilot environment) and P-System (production environment). Having these two instances at this early stage allows the laboratory to have a working system from the start. The implementation might take from a few weeks to some months to complete depending on the complexity of requirements and the project plan schedule. We follow Continuous Integration (CI) and Continuous Delivery (CD) practices and we include follow-up meetings and weekly reports.',
          icon: `${baseUrl}img/gear.svg`,
          color: '#75cd65',
        },
        {
          title: 'Technical Training',
          content: 'Technical training sessions are a must-have for organizations willing to fully or partially internalise the costs of maintenance and customizations of their own SENAITE system. Introduction to system architecture and application stack, system maintenance, backups, custom-made development',
          icon: `${baseUrl}img/cd-icon-movie.svg`,
          color: '#75cd65',
        },
        {
          title: 'Operational Support',
          content: 'System monitoring, security updates, advice for preventive and corrective actions.',
          icon: `${baseUrl}img/cd-icon-location.svg`,
          color: '#bf3b44',
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
