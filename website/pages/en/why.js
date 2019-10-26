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

  return (
    <div className="container">
      <h1 className="section-header">
        Why Senaite?
      </h1>
      <Description/>
      <Description2/>
    </div>
  );
}

module.exports = WhySenaite;
