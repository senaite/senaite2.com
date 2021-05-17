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
        <h1 className="section-header">Mission Statement</h1>
        <div className="wrapper">
          <div className="section-intro">
            This is who we are
          </div>
        </div>
      </div>
    );

  const WorksheetBlock = () => (
    <div className="container paddingTop">
    <Block align="left">
    {[
      {
        title: 'We are Authentic',
        content:
        '<p>The success of software not only depends on the quality of the code with which it was written, but also on the acceptance of the people who use it.'
        + 'We have been programming source-open software for years out of conviction, where everyone can view and analyze the source code.</p>'
        + '<p>Only software that handles data conscientiously, whose code is written in a comprehensible and precise manner, and which meets the highest quality standards, will be accepted.'
        + 'Just like our code, we also work with our fellow human beings and customers - openly, honestly and mindfully.</p>'
        + 'We take the needs of our customers seriously and notice them, because this is the only way to create a software solution that meets the needs and is accepted by the users.',
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
        title: 'Our solutions are smart',
        content:
        '<p>Only those who break new ground leave their mark. In contrast to proprietary systems, with us you invest completely in adapting the software to your laboratory. The fee for the use of intellectual property (licenses) is thus completely eliminated.</p>'
        + '<p>What does not yet fit will be made to fit you, and what does not yet exist will be made for you. There are no technical hurdles for us and we see every new requirement from you as a challenge to expand and grow the system.</p>',
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
