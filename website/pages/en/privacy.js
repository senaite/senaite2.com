/**
 * Copyright (c) 2017-present, SENAITE Project.
 */

const React = require('react');

const CompLibrary = require('../../core/CompLibrary.js');

const Container = CompLibrary.Container;
const GridBlock = CompLibrary.GridBlock;
const MarkdownBlock = CompLibrary.MarkdownBlock;

const VerticalTimeLine = require(`${process.cwd()}/core/VerticalTimeLine.js`);


function Privacy(props) {
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

  const Responsibles = () => (
    <div className="container bg-screen paddingBottom paddingTop privacy_policy_responsibles">
      <h1 className="section-header">Responsibles for the content</h1>
      <div className="wrapper">
        <div className="gridBlock">

          <div className="provider ridingbytes blockElement alignCenter twoByGridBlock">
            <div className="logo">
              <div className="slogan"></div>
              <a href="https://www.ridingbytes.com" className="logo-link">
                <img src={baseUrl + "img/ridingbytes.png"}/>
              </a>
              <div className="slogan">Professional Open Source Solutions</div>
              <div className="company-info">
                <strong>RIDING BYTES GmbH</strong><br/>
                Würzburger Straße 81<br/>
                90766 Fürth, Germany<br/>
                Phone: +49 (0) 911 974 930 90<br/>
                Mail: <a href="mailto:info@ridingbytes.com">info@ridingbytes.com</a>
              </div>
            </div>
          </div>

          <div className="provider naralabs blockElement alignCenter twoByGridBlock">
            <div className="logo">
              <div className="top-slogan">&nbsp;</div>
              <a href="https://naralabs.com" className="logo-link">
                <img src={baseUrl + "img/naralabs.png"}/>
              </a>
              <div className="slogan"></div>
              <div className="company-info">
                <strong>NARALABS S.L.</strong><br/>
                Av. Via Augusta 15 - 25<br/>
                08174 Sant Cugat del Vallès, Spain<br/>
                Phone: +34 93 681 43 87<br/>
                Mail: <a href="mailto:info@naralabs.com">info@naralabs.com</a>
              </div>
            </div>
          </div>
        </div>
      <div className="gridBlock">
      </div>
    </div>
  </div>
  );

  const PrivacyContent = () => (
      <div className="container paddingTop privacy_policy">
        <h1 className="section-header">Privacy Policy</h1>
        <Block layout="oneColumn">
          {[
            {
              title: 'DATA PROTECTION',
              content:
              '<p>RIDING BYTES GmbH and NARALABS, S.L. (hereinafter referred to as "PROVIDERS") guarantee to web page users that such complies with the General Regulation of Data Protection (UE) 2016/679, and has established the security measures claimed by the laws and regulations destined to preserve secrecy, confidentiality and integrity in handling your personal data.</p>'
              + '<p>Such personal data will be used in the way and under the limitations and rights to grant the protection of information of personal use.</p>'
              + '<p>The collection and handling of personal data requested have the sole purpose of giving user support, not only administrative but commercial as well PROVIDERS agree to keep absolute reserve, secrecy and confidentiality about the information of personal data which it handles. You are entitled to obtain information whether if PROVIDERS are treating your personal information, reason for which you have the right to access your personal data, rectify inexact information or request deleting, once these is no longer needed for the purposes for which they were required.</p>',
            },

            {
              title: 'LEGAL ANNOUNCEMENT LSSI – CE',
              content:
              '<p>In compliance with Law 34/2002 of July 11, of the Information and E-Commerce Society Services, the Corporate Entity informs that it is the owner of the web site. According to what is required under article 10, subject to Law above mentioned and such informs the following: The owner of the web site are: RIDING BYTES GmbH (Tax ID: DE-301668607, Address: Würzburger Straße 81, 90766 Fürth, Germany) and NARALABS S.L. (Tax ID: ES-B65947301, Address: Avenida Via Augusta 15-25, 08174 Sant Cugat del Vallès, Barcelona).</p>'
            },

            {
              title: 'USERS',
              content:
              '<p>The Access and/or use of the site grants you the condition of USER, which you accept, under the General Terms of Use hereby stated. Such Terms will be applied independent of the General Terms of Agreement which in your case are mandatory.</p>'
            },

            {
              title: 'USE OF THE WEBSITE',
              content:
              '<p>The web page grants access to a great amount of information, services, programs or data (onwards, “the contents”) in Internet belonging to PROVIDERS or its licensors to whom the USER can have access. The USER undertakes the responsibility of the use of the web site.</p>',
            },

            {
              title: 'EXCLUSION OF GUARANTEES AND RESPONSIBILITIES',
              content:
              '<p>PROVIDERS will not be responsible, under no circumstance, for damages of any nature caused by mistakes or omissions, lack of responsibility of the site or virus contamination or malicious programs or harmful in its contents, in spite of having taken all necessary technological measures to prevent it.</p>',
            },

            {
              title: 'MODIFICATIONS',
              content:
              '<p>PROVIDERS reserve the right, without prior notice, to make changes considered necessary thus, being able to change, eliminate or add not only the contents and services rendered by it but also the way in which they are presented or located in the site.</p>',
            },

            {
              title: 'LINKS',
              content:
              '<p>In the case that in the web page, links or hyperlinks were made to other internet sites, PROVIDERS will not execute any type of control of such sites and contents. PROVIDERS under no circumstance will take any responsibility for the contents of some link belonging to another web site, nor guarantee the technical availability, quality, reliability, accuracy, veracity, validity or constitutionality of any material or information contained in none of such hyperlinks or other internet sites.</p><p>Likewise, the inclusion of these external connections will not imply any kind of association, merging or participation with the connected entities.</p>',
            },

            {
              title: 'EXCLUSION RIGHTS',
              content:
              '<p>PROVIDERS reserve the right to deny or withdraw access to site and/or services offered, with no previous notification, on its own or a third party, to those users who do not comply with the current General Conditions of Use.</p>',
            },

            {
              title: 'GENERALITIES',
              content:
              '<p>PROVIDERS will chase the non compliance of present conditions, as well as any doubtful use of its site by enforcing all civil and penal actions which might correspond.</p>',
            },

            {
              title: 'PRESENT CONDITIONS AND DURATION',
              content:
              '<p>PROVIDERS could modify at any time the conditions hereby determined, being duly published as appearing herewith. The validity of the conditions above will be according to its exhibition and will be valid until duly published,or modified by other.</p>',
            },

            {
              title: 'APPLICABLE LAW AND JURISDICTION',
              content:
              '<p>The relationship between PROVIDERS and the USER will be governed by the Spanish regulations in force and any controversy will be submitted to the Courts of the city in the country.</p>',
            },

          ]}
        </Block>
      </div>
    );


  return (
    <div className="container">
      <Responsibles />
      <PrivacyContent />
    </div>
  );
}

module.exports = Privacy;
