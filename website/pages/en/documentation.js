
const React = require('react');

const CompLibrary = require('../../core/CompLibrary');

const Container = CompLibrary.Container;

const CWD = process.cwd();

const doc_categories = require(`${CWD}/documentation.json`);

function Documentation(props) {
  const {config: siteConfig} = props;

  return (
    <div className="container">
      <div className="container bg-lightgrey paddingBottom paddingTop">
          <h1 className="section-header">Documentation</h1>
          <div className="wrapper">
            <div className="section-intro">Discover and learn about SENAITE LIMS</div>
          </div>
      </div>
      <div className="docMainWrapper wrapper">
        <Container className="mainContainer paddingBottom paddingTop">
          {doc_categories.map(
            category => (
              <div className="post pb-2 container">
                <header className="postHeader">
                  <h2>{category.name}</h2>
                  <p><strong>{category.description}</strong></p>
                </header>
                <div className="wrapper">
                  <div className="gridBlock">
                    {category.items.map(
                      (document) => (
                        <div className="blockElement threeByGridBlock">
                          <div className="blockContent">
                            <h3>
                              {document.page.startsWith("http") && (
                                <a class='external' href={`${document.page}`} target='_blank'>{document.name}</a>
                              )}
                              {!document.page.startsWith("http") && (
                                <a href={`${siteConfig.baseUrl}${siteConfig.docsUrl}/${props.language ? props.language + '/' : ''}${document.versions.length > 0 ? '' : 'next/'}${document.page}`}>{document.name}</a>
                              )}
                            </h3>
                            <div>
                              {document.description}
                            </div>
                            {!document.page.startsWith("http") && (
                              <div class="versions">
                                <span>Versions: </span>
                                <span>
                                  <a title="For use with the pre-release version" href={`${siteConfig.baseUrl}${siteConfig.docsUrl}/${props.language ? props.language + '/' : ''}next/${document.page}`}>RC</a>
                                </span>
                                {document.versions.length > 0 && (
                                  <span>
                                    &nbsp;·&nbsp;
                                    <strong><a title="For use with the current and stable release" href={`${siteConfig.baseUrl}${siteConfig.docsUrl}/${props.language ? props.language + '/' : ''}${document.page}`}>v{document.versions[0]}</a></strong>
                                  </span>
                                )}
                                {document.versions.length > 1 && (
                                  <span>
                                  &nbsp;·&nbsp;
                                  {document.versions.slice(1).map(
                                    version => (
                                      <a href={`${siteConfig.baseUrl}${siteConfig.docsUrl}/${props.language ? props.language + '/' : ''}${version}/${document.page}`}>v{version}</a>
                                    )
                                  )}
                                  </span>
                                )}
                              </div>
                            )}
                          </div>
                        </div>
                      ),
                    )}
                  </div>
                </div>
              </div>
            )
          )}
        </Container>
      </div>
    </div>
  )
}

module.exports = Documentation;
