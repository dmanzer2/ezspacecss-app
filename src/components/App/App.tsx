import React from 'react';
import './App.scss';
import AppNavbar from '../Navbar/Navbar';
import heroImage from '../../assets/images/ezspace-image-modern.jpg';

const App: React.FC = () => {
  return (
    <div className="App">
      <AppNavbar />
      <section
        id="hero"
        style={{
          height: '100vh',
          backgroundImage: `url(${heroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
        }}
      >
        <div
          style={{
            height: '100%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            color: '#fff',
            textAlign: 'center',
            fontSize: '2rem',
          }}
        >
          <h1>ezspaceCSS<br />spacing utility & helper classes<br />for Bootstrap 3</h1>
        </div>
      </section>
      <main>
        <section id="about" style={{ padding: '100px 0', textAlign: 'center' }}>
          <h1>About</h1>
          <p>Learn more about us!</p>
        </section>

        <section id="download" style={{ padding: '100px 0', textAlign: 'center' }}>
          <h1>Download</h1>
          <p>Get started by downloading our app.</p>
        </section>

        <section id="css-development" style={{ padding: '100px 0', textAlign: 'center' }}>
          <h1>CSS Development</h1>
          <p>Learn how we develop with CSS.</p>
        </section>

        <section id="contact" style={{ padding: '100px 0', textAlign: 'center' }}>
          <h1>Contact</h1>
          <p>Reach out to us anytime!</p>
        </section>
      </main>

      <h1>Hello, World!</h1>
      <button className="btn btn-primary">Click Me</button>
    </div>
  );
};

export default App;
