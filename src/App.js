import React from 'react';
import './App.css';
import pic1 from './saif.jpeg';
import pic2 from './saif2.jpeg';

function App() {
  return (
    <div className="App">
      <header>
        <h1>Saifi 😊</h1>
        <h4>Hey! 'My name is Saif-Ullah'</h4>
        <div className="logos">
          {/* Include your logos here */}
          <img src={pic1} alt="Logo 1" className="logo" />
          <img src={pic2} alt="Logo 2" className="logo" />
        </div>
      </header>
      <section className="content">
        <h2>Education and Experience</h2>
        <p>
          Undergraduate at Numl University Islamabad
        </p>
        <p>
          Experience in C++, Java, CSS, HTML, JavaScript, Python, and ReactJs.
        </p>
        <div>
          <p>Check out my React projects:</p>
          <ul>
            <li>
              <a href="https://sports-shop-drab.vercel.app/" target="_blank" rel="noopener noreferrer">
                sports-shop 
              </a>
            </li>
            <li>
              <a href="https://tyara.vercel.app/" target="_blank" rel="noopener noreferrer">
                online-Bus-Service 
              </a>
            </li>
          </ul>
        </div>
      </section>
      <footer>
        <h2>Contact Information</h2>
        <p>Phone: 03175343491</p>
        <p>Email: su2285926@gmail.com</p>
        <p>Address: District Rawalpindi, Tehsil Gujar Khan, Post Office Khinger Mumdal, Village Mohri Rajgan</p>
      </footer>
    </div>
  );
}

export default App;

