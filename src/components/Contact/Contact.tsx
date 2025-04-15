import React from 'react';
import './Contact.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebook,
  faReddit,
  faYoutube,
  faPinterest,
  faInstagram,
  faNpm,
  faGithubAlt
} from '@fortawesome/free-brands-svg-icons';

const ContactSection: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <section id="contact" className="contact-section">
      <div className="contact-overlay">
        <div className="container contact-area">
          <div className="row py-5 mt-4">
            <div className="col-12 text-center">
              <h3>Contact ez space CSS</h3>
              <p>Please feel free to contact me with any questions.</p>
              <a
                href="mailto:ezspaceCSS@gmail.com"
                title="Check out the npm package"
                target="_blank"
                rel="noopener noreferrer"
              >
                ezspaceCSS@gmail.com
              </a>
            </div>
            <div className="col-12 text-center my-4">
              <a
                href="https://github.com/dmanzer2/ez-space-css-repo"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline-light"
                >
                <FontAwesomeIcon icon={faGithubAlt} /> GITHUB REPO
              </a>
            </div>
            <div className="col-12 text-center mb-4">
              {/* Social Media Icons */}
              <div className="social-icons d-flex justify-content-center mb-4">
                <a
                  href="https://www.facebook.com/ezspaceCSS/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-circle-outline mx-2"
                >
                  <FontAwesomeIcon icon={faFacebook} />
                </a>
                <a
                  href="https://www.reddit.com/user/ezspaceCSS/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-circle-outline mx-2"
                >
                  <FontAwesomeIcon icon={faReddit} />
                </a>
                <a
                  href="https://www.youtube.com/channel/UC6CLB1WgQDmvOtug7XWVxFg"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-circle-outline mx-2"
                >
                  <FontAwesomeIcon icon={faYoutube} />
                </a>
                <a
                  href="https://www.pinterest.com/ezspaceCSS/pins/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-circle-outline mx-2"
                >
                  <FontAwesomeIcon icon={faPinterest} />
                </a>
                <a
                  href="https://www.instagram.com/ezspaceCSS/?hl=en"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-circle-outline mx-2"
                >
                  <FontAwesomeIcon icon={faInstagram} />
                </a>
                <a
                  href="https://www.npmjs.com/package/ez-space-css-repo"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-circle-outline mx-2"
                >
                  <FontAwesomeIcon icon={faNpm} />
                </a>
              </div>
              <p className="mb-0">ezspaceCSS 1.2.0 © Copyright 2016-{currentYear}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
