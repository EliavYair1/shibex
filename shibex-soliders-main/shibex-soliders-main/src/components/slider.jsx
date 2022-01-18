import slider1 from '../images/362039_c4c907280bc143338cbbbd0b937b84ff_mv2.webp';
import slider2 from '../images/ee4c06a1-33f1-471d-9128-77443bf7f6ea_1140x641.jpg';
import slider3 from '../images/maxresdefaultbla.jpg';
import './css_files/slider.css';
import { Link } from 'react-router-dom';

// import Timer from './timer';
const Slider = () => {
  return (
    <div
      id="carouselExampleFade"
      className="carousel slide carousel-fade mb-3 sliderShadow  "
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
            style={{ height: '90vh', width: '100vw' }}
            alt="sliderImages"
          />
          <div className="carousel-caption mb-5">
            <Link to="/" className="btn-slider btn btn-dark btn-lg">
              Join Shibex
            </Link>
          </div>
        </div>
        <div className="carousel-item ">
          <img
            src={slider2}
            className="d-block "
            style={{ height: '90vh', width: '100vw' }}
            alt="godOfWar"
          />
          <div className="carousel-caption mb-5  ">
            <Link to="/" className="btn-slider btn btn-dark btn-lg">
              Buy Shibex
            </Link>
          </div>
        </div>
        <div className="carousel-item">
          <img
            src={slider3}
            className="d-block "
            style={{ height: '90vh', width: '100vw' }}
            alt="playerimage"
          />
          <div className="carousel-caption mb-5">
            <Link to="/" className="btn-slider btn btn-dark btn-lg ">
              Play Shibex
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slider;
