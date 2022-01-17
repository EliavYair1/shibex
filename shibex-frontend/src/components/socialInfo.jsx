import logo from '../images/Shiba_Inu_coin_logo.png';
import './css_files/socialInfo.css';
const SocialInfo = () => {
  return (
    <div className=" bg-dark  w-100  ">
      <div className="row flex-lg-row-reverse align-items-center  px-5  mx-5">
        <div className="img-wrapper col-12 col-sm-8 col-lg-6">
          <img src={logo} alt="" className="shiba ms-5" />
        </div>
        <div className="col-lg-6">
          <h1 className="display-5 fw-bold lh-1 mb-3 mb-5 text-center text-warning">
            Shibex Soliders
          </h1>
          <p className="lead text-secondary text-center lh-lg">
            Our community grows stronger every day. Please follow our social
            platforms to get the most up-to-date, accurate SHIBX information.
            Using the links below, you can join our groups alongside the members
            of the ShibexSoldiers.
          </p>
          <div className="btn-wrapper d-grid gap-2 d-md-flex justify-content-md-start mt-5">
            <button
              type="button"
              className="btn btn-outline-info btn-lg px-4 me-md-2 rounded-circle p-4"
            >
              Twitter
              <i className="ms-3 bi bi-twitter"></i>
            </button>
            <button
              type="button"
              className="btn btn-outline-danger btn-lg px-4 rounded-circle p-4"
            >
              Telegram
              <i className="ms-3 bi bi-telegram"></i>
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
