import './css_files/footer.css';

const Footer = () => {
  return (
    <footer
      className="footerContainer pb-5 bg-primary-3 text-light"
      style={{ position: 'relative' }}
    >
      <div class="custom-shape-divider-top-1642532432">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            class="shape-fill"
          ></path>
        </svg>
      </div>
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
