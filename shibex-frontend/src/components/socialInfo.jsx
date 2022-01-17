import logo from '../images/Shiba_Inu_coin_logo.png';
import './css_files/socialInfo.css';
const SocialInfo = () => {
  return (
    <div className="socialContainer bg-dark">
      <div className="row flex-lg-row-reverse align-items-center px-5 mx-5">
        <div className="img-wrapper col-12 col-sm-8 col-lg-6">
          <img src={logo} alt="" className="shiba ms-5" />
        </div>
        <div className="col-lg-6">
          <h1
            className="display-5 fw-bold lh-1 mb-3 mb-5 text-center "
            style={{ color: '#fcd032' }}
          >
            Shibex Soliders
          </h1>
          <p className="lead text-secondary text-center lh-lg">
            Our community grows stronger every day. Please follow our social
            platforms to get the most up-to-date, accurate SHIBX information.
            Using the links below, you can join our groups alongside the members
            of the ShibexSoldiers.
          </p>
          <div className="btn-wrapper me-5 d-grid gap-2 d-md-flex justify-content-md-start mt-5">
            <button type="button" className="  btn btn-outline-info socialBtn">
              Twitter
              <i className="ms-3 bi bi-twitter"></i>
            </button>
            <button
              type="button"
              className="btn btn-outline-danger ms-5 socialBtn"
            >
              Telegram
              <i className="ms-2 bi bi-telegram"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SocialInfo;

{
}
