import React from 'react';
import './CssDevelopment.scss';

const CssDevelopment: React.FC = () => {
  return (
    <section
      id="css-development"
    >
      <div className="dev-section">
        <div className="container">
          <div className="row align-items-center call-to-action">
            <div className="col-md-9">
              <h3 className="mb-md-0 mb-4">Interested in learning or mastering CSS?</h3>
            </div>
            <div className="col-md-3 text-center"> 
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
        </div>
      </div>
    </section>
  );
};

export default CssDevelopment;
