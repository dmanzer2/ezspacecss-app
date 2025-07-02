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
        {/* Responsive background image with WebP and JPEG fallback */}
        <picture>
          <source srcSet={require('../../assets/images/about-image2.webp')} type="image/webp" />
          <img
            src={require('../../assets/images/about-image2.jpg')}
            alt="About section background"
            className="download-bg-img"
            fetchPriority="high"
            decoding="async"
            loading="eager"
          />
        </picture>
        <div className="container">
          <div className="row mb-3">
            <div className="col-12 col-lg-6 mx-auto">
              <h2 className="mb-4">Download ez space CSS<br/>
              bootstrap 3 utility classes</h2>
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
