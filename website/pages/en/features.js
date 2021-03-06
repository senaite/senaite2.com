/**
 * Copyright (c) 2017-present, SENAITE Project.
 */

const React = require('react');

const CompLibrary = require('../../core/CompLibrary.js');

const Container = CompLibrary.Container;
const GridBlock = CompLibrary.GridBlock;


function Features(props) {
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
    align={props.align}
    contents={props.children}
    layout={props.layout}
      />
    </Container>
  );

  const SenaiteFeatures = () => (
      <div className="container bg-lightgrey paddingBottom paddingTop">
        <h1 className="section-header">Features</h1>
        <div className="wrapper">
          <div className="section-intro">
            Discover the built-in functionalities of SENAITE
          </div>
        </div>
        <Block layout="threeColumn">
          {[
            {
              title: 'Samples management',
              content: 'Manage heterogeneous samples from a single place, either if they belong to different clients or require different types of tests. Custom IDs, Priorities, Sample Types, Attachments, Statuses (due, received, etc.) and much more.',
            },
            {
              title: 'Worksheets',
              content: 'Assign and plan the work across the laboratory. Group analyses by type from different samples and clients, add Quality Control tests (blanks, controls and duplicates), map them to instrument runs.',
            },
            {
              title: 'Batches',
              content: 'Group samples by projects and/or clients and keep track of them easily. Generate results reports per batch. Allow Clients to create their own batches of multiple samples at once.',
            },
            {
              title: 'Partitions, Aliquots',
              content: 'Generate partitions and aliquots from samples at will and assign different types and containers while you keep the relationship amongst them. Detach partitions from their parents as required.',
            },
            {
              title: 'Profiles and Templates',
              content: 'Create analysis profiles to boost the registration of samples at the same time you simplify the catalog of available services. Use sample templates for auto-partitioning on reception.'
            },
            {
              title: 'Instruments management',
              content: 'Keep track of the instruments calibration certificates, maintenance. Do internal calibrations automatically with instruments results import and take advantage of Quality Control tests to monitor them.',
            },
            {
              title: 'Audit Log',
              content: 'SENAITE records and generates snapshots of your data on any modification, including the user name, IP and datetime when the Electronic Record was changed. All changes in the system can be easily inspected and traced back.',
            },
            {
              title: 'Analysis and Calculations',
              content: 'Create powerful calculations using either custom parameters or results from other tests as input values. Embed your own python scripts with calls to additional libraries (numpy, scipy, ...) for complex calculations.',
            },
            {
              title: 'Security policies',
              content: 'Roles and groups with different permissions for each ER\'s status: client contact, lab clerk, sampler, preserver, analyst, verifier, publisher, lab manager, regulatory inspector and system administrator.',
            },
          ]}
        </Block>
      </div>
    );

  const WorksheetBlock = () => (
    <div className="container paddingTop">
    <Block align="left">
    {[
      {
        title: 'Worksheets',
        content:
        '<p>Worksheets are entities used by Lab Manager to plan the work to be done by Analysts and to group Analyses from different Samples in a single batch of work.'
        + 'Worksheets might also represent a single work package of multiple samples analyses in a given analytical instrument.</p>'
        + '<p>Worksheets support the addition of QC analyses (blanks, controls and duplicates) detect irregularities during the verification process.',
        image: `${baseUrl}img/worksheet_1.png`,
        imageAlign: 'right',
      },
    ]}
    </Block>
    </div>
  );

  const ProfilesTemplatesBlock = () => (
    <div className="container bg-lightgrey paddingBottom paddingTop">
    <Block align="left">
    {[
      {
        title: 'Profiles and Templates',
        content:
        '<p>Profiles and Templates are useful tools to group analyses and make the creation of Samples with multiple tests an easy task: once a profile is selected while creating a Sample, all tests are added automatically. You can add as many profiles for a Sample as you wish. Templates are like Profiles, but with Sample type and partitioning criteria.</p><p>SENAITE also supports the creation of client-specific templates and profiles.</p>',
        image: `${baseUrl}img/analysis_template_1.png`,
        imageAlign: 'left',
      }
    ]}
    </Block>
    </div>
  );

  return (
      <div className="container">
      <SenaiteFeatures />
      <WorksheetBlock />
      <ProfilesTemplatesBlock />
      </div>
  );
}

module.exports = Features;
