import firstImage from '../images/avatar/avatar1.png';
import secondImage from '../images/avatar/avatar2.png';
import thirdImage from '../images/avatar/avatar3.png';
import forthImage from '../images/avatar/avatar4.png';
import './css_files/testimonial.css';
const Testimonials = () => {
  return (
    <>
      {' '}
      <section className="testimonial-section d-flex align-items-center">
        <div className="container">
          <h1 className="testi-header text-capitalized">The Shibex's</h1>
          <div className="row align-items-center" data-bs-interval={3000}>
            <div className="col-md-6 testi-img">
              <div className="img-box">
                <div className="circle" />
                <div className="img-box-inner">
                  {/* Slider */}
                  <div
                    id="myCarousel"
                    className="carousel slide "
                    data-bs-ride="carousel"
                    data-bs-interval={3000}
                  >
                    <div className="carousel-inner">
                      <div className="carousel-item active">
                        <img
                          src={firstImage}
                          className="d-block w-75 testSlider ms-5 "
                          alt="..."
                        />
                      </div>
                      <div className="carousel-item">
                        <img
                          src={secondImage}
                          className="d-block w-75 testSlider ms-5"
                          alt="..."
                        />
                      </div>
                      <div className="carousel-item">
                        <img
                          src={thirdImage}
                          className="d-block w-75 testSlider ms-5"
                          alt="..."
                        />
                      </div>
                      <div className="carousel-item">
                        <img
                          src={forthImage}
                          className="d-block w-75 testSlider ms-5"
                          alt="..."
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div
                id="myCarousel"
                className="carousel slide"
                data-bs-interval={3000}
                data-bs-ride="carousel"
              >
                <div className="carousel-inner text-light">
                  <div className="carousel-item testi-item active">
                    <h3 className="text-center mb-5 teamMates">Raphael</h3>
                    <span className="paragraph fw-bolder">
                      Hi, I’m Raphael, I am the CEO! I have strong experience in
                      cryptocurrency and blockchain technology !
                    </span>
                  </div>
                  <div className="carousel-item testi-item">
                    <h3 className="text-center mb-5 teamMates">Nath</h3>
                    <span className="paragraph fw-bolder">
                      Hi guys ! I am the COO of Shibex, focusing on the design
                      and development part. Currently finishing my studies on a
                      double major in computer science, statistics & data
                      sciences.
                    </span>
                  </div>
                  <div className="carousel-item testi-item">
                    <h3 className="text-center mb-5 teamMates">Yosef</h3>
                    <span className="paragraph fw-bolder">
                      I am the CTO of Shibex. Currently finishing my studies on
                      a double major in mathematics and computer science. I
                      specialize in Blockchain development
                    </span>
                  </div>
                  <div className="carousel-item testi-item">
                    <h3 className="text-center mb-5 teamMates ">Ubab</h3>
                    <span className="paragraph fw-bolder">
                      Hi guys ! I am the CDO of Shibex, focusing on design. I
                      worked on multiple design projects including big brands
                      like Balmain, I am in charge of all design at SHIBEX tell
                      me what you think!
                    </span>
                  </div>
                  {/* <div className="btns">
                    <button
                      className="carousel-control-prev"
                      type="button"
                      data-bs-target="#myCarousel"
                      data-bs-slide="prev"
                    >
                      <i className="bi bi-arrow-left-circle text-secondary"></i>
                      <span className="visually-hidden">Previous</span>
                    </button>
                    <button
                      className="carousel-control-next"
                      type="button"
                      data-bs-target="#myCarousel"
                      data-bs-slide="next"
                    >
                      <i className="bi bi-arrow-right-circle text-secondary"></i>
                      <span className="visually-hidden">Next</span>
                    </button>
                  </div> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Testimonials;
