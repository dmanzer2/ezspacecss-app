import React from 'react';
import './About.scss';
import aboutImg1 from '../../assets/images/about-image1.jpg';
import aboutImg2 from '../../assets/images/about-image2.jpg';

const AboutSection: React.FC = () => {
  return (
    <section
      id="about"
    >
      <div className="container">
        <div className="row mb-3">
          <div className="col-12">
            <h3>About</h3>
          </div>
        </div>
        <div className="row mb-5">
          {/* First Column */}
          <div className="col-md-7">
            <p><strong>Why would I need exspaceCSS?</strong></p>
            <p>Tired of fiddling with inconsistent margins and padding in your <a href="http://getbootstrap.com/css/#grid-media-queries" target="_blank" rel="noopener noreferrer">Bootstrap 3</a> layouts? Meet ezspaceCSS—a lightweight, developer-friendly spacing utility designed to make your life easier. Built with SASS, ezspaceCSS integrates seamlessly into your project, whether you prefer to use a npm package or a plain old CSS file.</p>
                  
            <p>What makes ezspaceCSS stand out? Its clever use of 5px increments. Need to quickly tweak margins or padding? Just drop in one of the helper classes, and you're good to go. It's a perfect match for Bootstrap 3's responsive breakpoints (xs-, sm-, md-, and lg-), ensuring your layout looks clean and consistent at every screen size.</p>
            
            <p>With a wide range of spacing classes, ezspaceCSS gives you pinpoint control over your design—no more guesswork, no more uneven spacing. Whether you're fine-tuning a button's padding or aligning content across breakpoints, it's all about keeping your workflow efficient and your designs polished.</p>
            
            <p>In a nutshell, ezspaceCSS is a powerful yet simple tool that's tailor-made for Bootstrap 3 developers. Its intuitive 5px spacing system makes achieving a professional, well-structured layout a breeze. Say goodbye to frustration and hello to a smarter way to style your projects.</p>
          </div>
          {/* Second Column */}
          <div className="col-md-5">
            <img
              src={aboutImg1}
              alt=""
              className="img-fluid rounded shadow"
            />
          </div>
        </div>
        <div className="row">
        <div className="col-md-5">
          <img
              src={aboutImg2}
              alt=""
              className="img-fluid rounded shadow"
            />
          </div>
          <div className="col-md-7">
          <p><strong>Getting Started with Bootstrap: Customization Made Easy</strong></p>

          <p>Getting started with <a href="http://getbootstrap.com" target="_blank" rel="noopener noreferrer">Bootstrap</a> is straightforward, thanks to its extensive customization options. Whether you want to use only the specific components you need or load up the full kit to get everything in one go, Bootstrap has you covered. And if you want to go the extra mile, you can take advantage of its "build your own" feature, which lets you fine-tune the download to suit your exact project needs.</p>

          <p>What makes Bootstrap so developer-friendly is its focus on industry best practices. It integrates LESS for pre-processing CSS and uses the familiar jQuery library for small interactive behaviors. On top of that, Bootstrap comes with an intuitive grid system that's easy to use, thanks to its simple column class naming conventions. Plus, the robust jQuery components allow you to add subtle but impactful touches to your site's functionality.</p>

          <p>That said, Bootstrap 3 did have some limitations. It didn't support flexbox, lacked sizing classes, and didn't natively include SASS support—issues that were addressed in Bootstrap 4. One of the biggest gaps in Bootstrap 3 was its lack of a responsive spacing utility. This made it challenging to maintain consistent and flexible spacing, especially when making quick adjustments. Enter ezspaceCSS.</p>

          <p>ezspaceCSS is a custom SASS library that seamlessly integrates with Bootstrap. It provides a set of simple classes to easily add margin and padding to your elements. Its naming conventions align well with Bootstrap's, so it feels like a natural extension of the framework. For instance, using the class sm-pl-20 will add 20px of padding to the left side of an element. Want to add margin instead? Just swap the "p" for an "m." Installation is a breeze—you can install it with npm or download the zip directly from the repo.</p>

          <p>With ezspaceCSS, you'll no longer be limited by the spacing restrictions of Bootstrap 3, and you'll have full control over your project's layout and responsiveness. It's the perfect solution for developers looking to add clean, consistent spacing without a hassle.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
