/* eslint-disable jsx-a11y/anchor-is-valid */
import './css_files/navbar.css';
import logo from '../images/Shiba_Inu_coin_logo.png';
const Navbar = () => {
  return (
    <nav
      className="navbar navbar-expand-md navbarColor"
      aria-label="Fourth navbar example"
    >
      <div className="container-fluid ">
        <a className="navbar-brand" href="#">
          <img src={logo} alt="" className="shiba_logo" />
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
        <div className=" collapse navbar-collapse " id="navbarsExample04">
          <ul className="navbar-nav me-auto mb-2 mb-md-0 ">
            <li className="nav-item">
              <a
                className="nav-link navLinkColor active fw-bold fs-4"
                aria-current="page"
                href="#"
              >
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link navLinkColor fw-bold fs-4" href="#">
                Link
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link navLinkColor fw-bold fs-4"
                href="#"
                tabIndex={-1}
                aria-disabled="true"
              >
                Disabled
              </a>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link navLinkColor  dropdown-toggle fw-bold fs-4"
                href="#"
                id="dropdown04"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Dropdown
              </a>
              <ul
                className="dropdown-menu bg-dark"
                aria-labelledby="dropdown04"
              >
                <li>
                  <a className="dropdown-item border border-warning " href="#">
                    Action
                  </a>
                </li>
                <li>
                  <a className="dropdown-item  border border-warning" href="#">
                    Another action
                  </a>
                </li>
                <li>
                  <a
                    className="dropdown-item text-info border border-warning"
                    href="#"
                  >
                    Something else here
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
