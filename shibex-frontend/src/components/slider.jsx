import slider1 from '../images/2021-Was-a-Great-Year-for-Shiba-Inu-Will-the-Hype-Continue.jpg';
import slider2 from '../images/ee4c06a1-33f1-471d-9128-77443bf7f6ea_1140x641.jpg';
import slider3 from '../images/792212b15a1c2afa2281eb934519b1f6.jpg';
import './css_files/slider.css';
const Slider = () => {
  return (
    <div
      id="carouselExampleFade"
      className="carousel slide carousel-fade mb-3 sliderShadow "
      data-bs-ride="carousel"
    >
      <ol className="carousel-indicators">
        <li
          data-bs-target="#carouselExampleFade"
          data-bs-slide-to="0"
          className="active"
        ></li>
        <li data-bs-target="#carouselExampleFade" data-bs-slide-to="1"></li>
        <li data-bs-target="#carouselExampleFade" data-bs-slide-to="2"></li>
      </ol>
      <div className="carousel-inner ">
        <div className="carousel-item active">
          <img
            src={slider1}
            className="d-block "
            style={{ height: '60vh', width: '100vw' }}
            alt="sliderImages"
          />
          <div className="carousel-caption mb-5">
            <button className=" btn-primary btn-lg">Join Shibex</button>

            {/*  <Link to="/signup" className="btn btn-secondary text-dark w-20">
                Sign Up
              </Link> */}
          </div>
        </div>
        <div className="carousel-item ">
          <img
            src={slider2}
            className="d-block "
            style={{ height: '60vh', width: '100vw' }}
            alt="godOfWar"
          />
          <div className="carousel-caption mb-5">
            <button className="btn btn-primary btn-lg">Buy Shibex</button>
            {/*  {!user?.premium ? (
                <Link
                  to="/signupPremium"
                  className="btn btn-secondary text-dark w-20"
                >
                  To Events
                </Link>
              ) : (
                <Link to="/events" className="btn btn-secondary text-dark w-20">
                  To Events
                </Link>
              )} */}
          </div>
        </div>
        <div className="carousel-item">
          <img
            src={slider3}
            className="d-block "
            style={{ height: '60vh', width: '100vw' }}
            alt="playerimage"
          />
          <div className="carousel-caption mb-5">
            <button className="btn btn-primary btn-lg">Play Shibex</button>

            {/*   <Link to="/store" className="btn btn-secondary text-dark w-20">
                To Store
              </Link> */}
          </div>
        </div>
      </div>
      {/* <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleFade"
          data-bs-slide="prev"
        >
          <i className="bi bi-caret-left display-3"></i>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleFade"
          data-bs-slide="next"
        >
          <i className="bi bi-caret-right display-3"></i>
          <span className="visually-hidden">Next</span>
        </button> */}
    </div>
  );
};

export default Slider;
