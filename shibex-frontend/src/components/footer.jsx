import './css_files/footer.css';

const Footer = () => {
  return (
    <footer className=" footerContainer pb-5 bg-primary-3 text-light">
      <div className="container">
        <div className="row mb-4 justify-content-center">
          <div className="col-auto">
            <p className="text-center fs-4">
              <span class="color_11">ShibexSoldiers are you ready? 🚀</span>
            </p>
          </div>
        </div>
        <div className="row mb-4">
          <div className="col">
            <ul className="nav justify-content-center">
              <li className="nav-item">
                <a href="#" className="nav-link">
                  Demos
                </a>
              </li>
              <li className="nav-item">
                <a href="#" className="nav-link">
                  Pages
                </a>
              </li>
              <li className="nav-item">
                <a href="#" className="nav-link">
                  Blog
                </a>
              </li>
              <li className="nav-item">
                <a href="#" className="nav-link">
                  Portfolio
                </a>
              </li>
              <li className="nav-item">
                <a href="#" className="nav-link">
                  Elements
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="row justify-content-center mt-5 mb-5">
          <div className="col-auto">
            <ul className="nav">
              <li className="nav-item">
                <a href="#" className="nav-link">
                  <i className="bi bi-instagram display-6"></i>
                </a>
              </li>
              <li className="nav-item">
                <a href="#" className="nav-link">
                  <i className="bi bi-twitter display-6"></i>
                </a>
              </li>
              <li className="nav-item">
                <a href="#" className="nav-link">
                  <i className="bi bi-coin display-6"></i>
                </a>
              </li>
              <li className="nav-item">
                <a href="#" className="nav-link">
                  <i className="bi bi-telegram display-6"></i>
                </a>
              </li>
              <li className="nav-item">
                <a href="#" className="nav-link">
                  <i className="bi bi-meta display-6"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="row justify-content-center text-center">
          <div className="col-xl-10">
            <small className="text-muted">
              ©2020 All Rights Reserved. Shibex® is a registered trademark of
              Your Company. Apple and the Apple logo are trademarks of Apple
              Inc., registered in the U.S. and other countries. Mac App Store is
              a service mark of Apple Inc. Google Play and the Google Play logo
              are trademarks of Google Inc.
            </small>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
