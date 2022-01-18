import img from '../images/Shiba_Inu_coin_logo.png';
import './css_files/parallax.css';
const Parallax = () => {
  return (
    <section
      className="d-flex align-items-center position-relative bg-dark bg-size-cover bg-position-center min-vh-100 overflow-hidden pt-6 pb-lg-5"
      style={{ backgroundImage: 'url(img/demo/presentation/intro/bg.jpg)' }}
    >
      <div className="container-fluid pt-4 pb-5 py-lg-5">
        <div className="row align-items-center py-3">
          <div className="col-xl-6 col-lg-5 d-flex justify-content-end">
            <div
              className="pt-2 mx-auto mb-5 mb-lg-0 ms-lg-0 me-xl-7 text-center text-lg-start"
              style={{ maxWidth: '495px' }}
            >
              <h1 className="display-4 text-light pb-2">
                <span className="fw-light">Have a look </span>Around!
              </h1>
              <p className="h4 fw-light text-light opacity-70 line-height-base">
                And you will find everything you need to build a great looking
                website.
              </p>
              <a
                className="d-inline-flex align-items-center text-decoration-none pt-2 mt-4 mb-5"
                href="#demos"
                data-scroll
              >
                <span className="btn btn-icon rounded-circle border-light flex-shrink-0 px-3">
                  <i className="ai-arrow-down h4 text-light my-1" />
                </span>
                <span className="ms-3 text-light fw-medium">View Demos</span>
              </a>
              <hr className="hr-light mt-0 mb-5" />
              <div className="row">
                <div className="col-sm-4 mb-4 mb-sm-0">
                  <div className="h1 text-light mb-1">14</div>
                  <div className="h5 text-light fw-normal opacity-70 mb-2">
                    Demo Homepages
                  </div>
                  <span className="badge rounded-pill bg-success">
                    More coming
                  </span>
                </div>
                <div className="col-sm-4 mb-4 mb-sm-0">
                  <div className="h1 text-light mb-1">50+</div>
                  <div className="h5 text-light fw-normal opacity-70 mb-1">
                    Flexible Components
                  </div>
                </div>
                <div className="col-sm-4">
                  <div className="h1 text-light mb-1">47</div>
                  <div className="h5 text-light fw-normal opacity-70 mb-1">
                    Inner Page Templates
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-6 col-lg-7">
            <div
              className="parallax ms-lg-n5"
              style={{
                maxWidth: '920px',
                transform: 'translate3d(0px, 0px, 0px) rotate(0.0001deg)',
                transformStyle: 'preserve-3d',
                backfaceVisibility: 'hidden',
                pointerEvents: 'none',
              }}
            >
              <div
                className="parallax-layer position-relative"
                data-depth="0.1"
                style={{
                  transform: 'translate3d(5px, -8.3px, 0px)',
                  transformStyle: 'preserve-3d',
                  backfaceVisibility: 'hidden',
                  position: 'relative',
                  display: 'block',
                  left: '0px',
                  top: '0px',
                }}
              >
                <img
                  src="img/demo/presentation/intro/layer01.png"
                  alt="Layer"
                />
              </div>
              <div
                className="parallax-layer"
                style={{
                  zIndex: 2,
                  transform: 'translate3d(15px, -24.9px, 0px)',
                  transformStyle: 'preserve-3d',
                  backfaceVisibility: 'hidden',
                  position: 'absolute',
                  display: 'block',
                  left: '0px',
                  top: '0px',
                }}
                data-depth="0.3"
              >
                <img
                  src="img/demo/presentation/intro/layer02.png"
                  alt="Layer"
                />
              </div>
              <div
                className="parallax-layer"
                data-depth="0.2"
                style={{
                  transform: 'translate3d(10px, -16.6px, 0px)',
                  transformStyle: 'preserve-3d',
                  backfaceVisibility: 'hidden',
                  position: 'absolute',
                  display: 'block',
                  left: '0px',
                  top: '0px',
                }}
              >
                <img
                  src="img/demo/presentation/intro/layer03.png"
                  alt="Layer"
                />
              </div>
              <div
                className="parallax-layer"
                style={{
                  zIndex: 3,
                  transform: 'translate3d(5px, -8.3px, 0px)',
                  transformStyle: 'preserve-3d',
                  backfaceVisibility: 'hidden',
                  position: 'absolute',
                  display: 'block',
                  left: '0px',
                  top: '0px',
                }}
                data-depth="0.1"
              >
                <img
                  src="img/demo/presentation/intro/layer04.png"
                  alt="Layer"
                />
              </div>
              <div
                className="parallax-layer"
                data-depth="0.15"
                style={{
                  transform: 'translate3d(7.5px, -12.5px, 0px)',
                  transformStyle: 'preserve-3d',
                  backfaceVisibility: 'hidden',
                  position: 'absolute',
                  display: 'block',
                  left: '0px',
                  top: '0px',
                }}
              >
                <img
                  src="img/demo/presentation/intro/layer05.png"
                  alt="Layer"
                />
              </div>
              <div
                className="parallax-layer"
                style={{
                  zIndex: 4,
                  transform: 'translate3d(12.5px, -20.8px, 0px)',
                  transformStyle: 'preserve-3d',
                  backfaceVisibility: 'hidden',
                  position: 'absolute',
                  display: 'block',
                  left: '0px',
                  top: '0px',
                }}
                data-depth="0.25"
              >
                <img
                  src="img/demo/presentation/intro/layer06.png"
                  alt="Layer"
                />
              </div>
              <div
                className="parallax-layer"
                data-depth="0.3"
                style={{
                  transform: 'translate3d(15px, -24.9px, 0px)',
                  transformStyle: 'preserve-3d',
                  backfaceVisibility: 'hidden',
                  position: 'absolute',
                  display: 'block',
                  left: '0px',
                  top: '0px',
                }}
              >
                <img
                  src="img/demo/presentation/intro/layer07.png"
                  alt="Layer"
                />
              </div>
              <div
                className="parallax-layer"
                data-depth="0.4"
                style={{
                  transform: 'translate3d(20px, -33.2px, 0px)',
                  transformStyle: 'preserve-3d',
                  backfaceVisibility: 'hidden',
                  position: 'absolute',
                  display: 'block',
                  left: '0px',
                  top: '0px',
                }}
              >
                <img
                  src="img/demo/presentation/intro/layer08.png"
                  alt="Layer"
                />
              </div>
              <div
                className="parallax-layer"
                data-depth="0.35"
                style={{
                  transform: 'translate3d(17.5px, -29.1px, 0px)',
                  transformStyle: 'preserve-3d',
                  backfaceVisibility: 'hidden',
                  position: 'absolute',
                  display: 'block',
                  left: '0px',
                  top: '0px',
                }}
              >
                <img
                  src="img/demo/presentation/intro/layer09.png"
                  alt="Layer"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Parallax;
