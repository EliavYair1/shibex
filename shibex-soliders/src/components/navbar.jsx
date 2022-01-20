/* eslint-disable jsx-a11y/anchor-is-valid */
import { motion } from 'framer-motion';
import './css_files/navbar.css';
import logo from '../images/shibexLogoSmall1.webp';

const Navbar = () => {
  return (
    <nav
      className="navbar navbar-expand-md navbarColor "
      aria-label="Fourth navbar example"
    >
      <div className="container-fluid ">
        <a className="navbar-brand" href="#">
          <motion.img
            src={logo}
            alt=""
            className="shiba_logo"
            animate={{
              scale: [1, 1.2, 1.2, 0, 1],
              rotate: [0, 0, 360, 0, 360],
            }}
          />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarsExample04"
          aria-controls="navbarsExample04"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className=" collapse navbar-collapse " id="navbarsExample04 ">
          <ul className="navbar-nav me-auto mb-2 mb-md-0 myNav col-12 d-flex justify-content-evenly ">
            <li className="nav-item">
              <motion.a
                className="nav-link navLinkColor active fw-bold fs-4"
                aria-current="page"
                href="#"
                // initial={}
                whileHover={{ color: 'var(--redColor)' }}
                whileTap={{ rotate: 360, scale: 0.2 }}
              >
                Home
              </motion.a>
            </li>
            <li className="nav-item">
              <motion.a
                className="nav-link navLinkColor fw-bold fs-4"
                href="#"
                whileHover={{ color: 'var(--redColor)' }}
                whileTap={{ rotate: 360, scale: 0.2 }}
              >
                About
              </motion.a>
            </li>
            <li className="nav-item">
              <motion.a
                className="nav-link navLinkColor fw-bold fs-4"
                href="#"
                tabIndex={-1}
                aria-disabled="true"
                whileHover={{ color: 'var(--redColor)' }}
                whileTap={{ rotate: 360, scale: 0.2 }}
              >
                News
              </motion.a>
            </li>
            <li className="nav-item">
              <motion.a
                className="nav-link navLinkColor fw-bold fs-4"
                href="#"
                tabIndex={-1}
                aria-disabled="true"
                whileHover={{ color: 'var(--redColor)' }}
                whileTap={{ rotate: 360, scale: 0.2 }}
              >
                Contact
              </motion.a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
