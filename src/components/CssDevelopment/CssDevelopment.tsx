import React from 'react';
import './CssDevelopment.scss';
import cssEbook from '../../assets/images/css-mixins-cover.png';
import cssMixinsPdf from '../../assets/pdfs/css-mixins-ebook.pdf';

const CssDevelopment: React.FC = () => {
  return (
    <section
      id="css-development"
    >
      <div className="dev-section">
        <div className="container">
          <div className="row align-items-center justify-content-center call-to-action my-5">
            <div className="col-12 col-md-auto">
              <h3 className="mb-md-0 mb-4">Interested in a Software Developer's Career?</h3>
            </div>
            <div className="col-12 col-md-auto mb-4 mb-md-0"> 
              <a
                href="https://amzn.to/4cvxvUE"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
                >
                Here's your Developer's Career Handbook
              </a>
            </div>
          </div>
          <div className="row align-items-center justify-content-md-center call-to-action mt-3 mb-5">
            <div className="col-12 col-md-2 mb-4 mb-md-0">
              <a
                href={cssMixinsPdf}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={cssEbook}
                  alt="CSS Mixins Ebook Cover"
                  className="img-fluid"
                  loading="lazy"
                />
              </a>
            </div>
            <div className="col-auto col-md-auto">
              <h3 className="mb-md-0 mb-4">Checkout my FREE ebook on CSS Mixins.<br /> Learn how to use them and why you should</h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CssDevelopment;
