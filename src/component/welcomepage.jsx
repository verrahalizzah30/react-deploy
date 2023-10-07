import React from 'react';
import '../component/welcomepage.css';
import '/Logo.png';

function App() {
  return (
    <div>
      <div className="header">
        <img className="logo" src="Logo.png" alt="logo" />
        <nav className="navbar ms-auto">
          <ul className="nav-menu">
            <li className="nav-list"><a className="nav-link home" href="#">Home</a></li>
            <li className="nav-list"><a className="nav-link" href="#">Products</a></li>
            <li className="nav-list"><a className="nav-link" href="#">About</a></li>
            <li className="nav-list"><a className="nav-link" href="#">Contacts</a></li>
          </ul>
        </nav>
      </div>
      <div className="content">
        <h1>Welcome To Eco Harmony</h1>
        <p className="isi">EcoHarmony adalah platform online yang didedikasikan untuk mengedukasi dan menginspirasi <br /> orang-orang tentang gaya hidup ramah lingkungan. Kami menyediakan informasi, tips, dan sumber daya  <br />untuk membantu Anda mengurangi jejak karbon, mendukung keberlanjutan, dan menjalani hidup <br />yang lebih seimbang dengan alam.</p>
        <button type="button" className="btn btn-success">JOIN NOW</button>
      </div>
    </div>
  );
}

export default App;
