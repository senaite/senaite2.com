/**
* Copyright (c) 2017-present, SENAITE Project.
*/

const React = require('react');

const CompLibrary = require('../../core/CompLibrary.js');

const Container = CompLibrary.Container;
const GridBlock = CompLibrary.GridBlock;
const MarkdownBlock = CompLibrary.MarkdownBlock;

const VerticalTimeLine = require(`${process.cwd()}/core/VerticalTimeLine.js`);


function Customers(props) {
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
    <h1 className="section-header">Trusted by</h1>
    <div className="wrapper">
    <div className="section-intro">
    Organisations across the globe
    </div>
    </div>
    </div>
  );
  
  const TrustedBy = () => {
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
      <div className="wrapper">
      </div>
      <div className="wrapper">
      <div className="logos">
      {showcase}
      </div>
      </div>
      <h2>and many more to mention . . .</h2>
      </div>
    );
  };
  
  return (
    <div className="container">
    <Headline />
    <TrustedBy />
    </div>
  );
}

module.exports = Customers;
