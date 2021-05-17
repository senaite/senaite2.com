/**
 * Copyright (c) 2017-present, SENAITE Project.
 */

const React = require('react');

const CompLibrary = require('../../core/CompLibrary.js');

const Container = CompLibrary.Container;
const GridBlock = CompLibrary.GridBlock;
const MarkdownBlock = CompLibrary.MarkdownBlock;

const VerticalTimeLine = require(`${process.cwd()}/core/VerticalTimeLine.js`);


function Team(props) {
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
      <h1 className="section-header">The Team of SENAITE</h1>
      <div className="wrapper">
        <div className="section-intro">
        We are real LIMS enthusiasts
        </div>
      </div>
    </div>
  );

  const TeamContent = () => (
    <div className="container lightBackground paddingBottom paddingTop">
    <div className="wrapper">
    </div>
    <Block layout="twoColumn">
    {[
      {
        content: '<b>Managing Director</b> Ramon Bartl studied computer science at the Ravensburg-Weingarten University of Applied Sciences in Germany. He also holds an MBA from the University of Applied Sciences in Kempten. With years of experience, in the management of software projects at home and abroad, he supports his customers with special applications and process analyses around the topic of laboratory.<br><br><i>Ramon likes to fly drones</i>',
        image: `${baseUrl}img/portrait_bartl-ramon.jpg`,
        imageAlign: 'top',
        title: 'Dipl. Inf. (FH) Ramon Bartl, MBA',
      },
      {
        content: '<b>Development Manager</b> Jordi Puiggené studied computer science at the Oberta de Catalunya University in Spain. He holds a Bachelor Degree in Microbiology of the Autònoma de Barcelona University. With years of professional experience in microbiology and computer science he supports our customers with highly specialized functionalities.<br><br><i>Jordi loves to play the piano</i>',
        image: `${baseUrl}img/portrait_puiggene_jordi.jpg`,
        imageAlign: 'top',
        title: 'BSc. Biology Jordi Puiggené',
      },
      {
        content: '<b>Project Manager</b> Lutz Kogel studied chemistry at the Westfälische Wilhelms University in Münster in Germany and holds a PhD in natural sciences. He also holds an MBA from the University of Applied Sciences Burgenland in Austria. With years of experience, in the management of testing and developing laboratories at national and international level, he supports and advises his customers with practical knowledge on all aspects of the laboratory business.<br><br><i>Lutz enjoys asian martial arts</i>',
        image: `${baseUrl}img/portrait_kogel-lutz.jpg`,
        imageAlign: 'top',
        title: 'Dr. rer. nat. Dipl. Chem. Lutz Kogel, MBA',
      },
      {
        content: '<b>MD Assistant</b> Simone Henkel, a story to tell about Simone<br><br><i>Simone likes to rework old furniture</i>',
        image: `${baseUrl}img/undraw_organizing_projects.svg`,
        imageAlign: 'top',
        title: 'Simone Henkel',
      },
      {
        title: 'Simply an awesome team . . .',
      }
    ]}
    </Block>
    </div>
  );

  return (
    <div className="container">
      <Headline />
      <TeamContent />
    </div>
  );
}

module.exports = Team;