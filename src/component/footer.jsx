// eslint-disable-next-line no-unused-vars
import React from 'react';
import '../component/footer.css';
import '/Logo.png';

function Footer() {
    return (
      <footer>
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <div>
                <img className="logoweb" src="Logo.png" alt="Logo" />
                <h4>EcoHarmony</h4>
                <h6 className="aboutus">About Us</h6>
                <p className="descabout">
                  <strong>+62-123-456</strong> <br /> <br /> Ecoharmony@gmail.com <br />Tebet, Jakarta Selatan <br /> <br />
                  <a href="https://instagram.com/verra.hlzh?igshid=OGQ5ZDc2ODk2ZA=="><i className="fa fa-instagram"></i></a>
                  <a href="https://www.facebook.com/verra.hlzh.3?mibextid=ZbWKwL"><i className="fa fa-facebook"></i></a>
                  <a href="https://www.linkedin.com/in/verra-halizzah"><i className="fa fa-linkedin"></i></a>
                </p>
              </div>
            </div>
            <div className="col-md-4">
              <div>
                <h6 className="info">Information</h6>
                <ul className="no-bullets">
                  <li key="beranda"><a href="#">Beranda</a></li>
                  <li key="tentang-kami"><a href="#">Tentang Kami</a></li>
                  <li key="layanan"><a href="#">Layanan</a></li>
                  <li key="testimoni"><a href="#">Testimoni</a></li>
                </ul>
              </div>
            </div>
            <div className="col-md-4">
              <div>
                <h6 className="help">Helpful links</h6>
                <ul className="no-bullets">
                  <li><a href="#">Services</a></li>
                  <li><a href="#">Supports</a></li>
                  <li><a href="#">Terms & Condition</a></li>
                  <li><a href="#">Privacy Policy</a></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <hr />
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <div className="copyright">
                <p>&copy; Copyright <b>Verra Halizzah</b>.</p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    );
  }
  
  export default Footer;
  