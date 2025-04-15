import React from 'react';
import './Download.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithubAlt } from '@fortawesome/free-brands-svg-icons';

const DownloadSection: React.FC = () => {
  return (
    <section
      id="download"
    >
      <div className="download-section">
        <div className="container">
          <div className="row mb-3">
            <div className="col-12 col-lg-6 mx-auto">
              <h3>Download ez space CSS<br/>
              bootstrap 3 utility classes</h3>
              <h4>You can download the collection of ezspaceCSS helper classes or install directly in to your project with npm.</h4>
              <h4>$ npm i ez-space-css-repo</h4>
              {/* <div className="npm-call-out mx-auto my-4">
                <p className="mb-0">$ npm i ez-space-css-repo</p>
              </div> */}
              <a
                href="https://github.com/dmanzer2/ez-space-css-repo"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary d-inline-flex align-items-center mt-3"
              >
                <FontAwesomeIcon icon={faGithubAlt} className="me-2" />
                Visit GitHub Repo
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DownloadSection;
