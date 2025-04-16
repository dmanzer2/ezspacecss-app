import React from 'react';
import './CssDevelopment.scss';
import cssEbook from '../../assets/images/css-mixins-cover.png';

const CssDevelopment: React.FC = () => {
  return (
    <section
      id="css-development"
    >
      <div className="dev-section">
        <div className="container">
          <div className="row align-items-center call-to-action">
            <div className="col-12 col-md-8">
              <h3 className="mb-md-0 mb-4">Interested in learning or mastering CSS?</h3>
            </div>
            <div className="col-12 col-md-4 text-center"> 
              <a
                href="http://amzn.to/2FTCMIM"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
                >
                Get started in development
              </a>
            </div>
          </div>
          <div className="row align-items-center call-to-action mt-3 mb-5">
            <div className="col-12 col-md-3">
            <img
                src={cssEbook}
                alt=""
                className="img-fluid"
              />
            </div>
            <div className="col-12 col-md-9">
              <h3 className="mb-md-0 mb-4">Checkout my ebook on CSS Mixins.<br /> Learn how to use them and why you should</h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CssDevelopment;
