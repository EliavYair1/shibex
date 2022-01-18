import './css_files/roadmap.css';
const Roadmap = () => {
  return (
    <section
      className="sectionRoadmap bg-primary-3 text-light"
      style={{ position: 'relative' }}
    >
      <div class="custom-shape-divider-bottom-1642543135">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M1200,0H0V120H281.94C572.9,116.24,602.45,3.86,602.45,3.86h0S632,116.24,923,120h277Z"
            class="shape-fill"
          ></path>
        </svg>
      </div>
      <div className="roadmapContainer">
        <div className="row justify-content-center text-center mb-4">
          <div className="col-xl-8 col-lg-9">
            <h2 className="h1">Roadmap</h2>
            <p className="lead">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa.
            </p>
          </div>
        </div>
        <div className="row o-hidden o-lg-visible">
          <div className="col d-flex flex-column align-items-center">
            <ol className="process-vertical">
              <li
                data-aos="fade-left"
                data-aos-duration="1000"
                data-aos-easing="ease-in"
                // className="aos-init aos-animate"
              >
                <div className="process-circle bg-primary" />
                <div>
                  <span className="text-small text-muted">October 2016</span>
                  <h5 className="mb-0">Secured Series-A funding</h5>
                </div>
              </li>
              <li
                data-aos="fade-right"
                data-aos-easing="ease-in"
                data-aos-duration="2000"
                // className="aos-init aos-animate"
              >
                <div className="process-circle bg-primary" />
                <div>
                  <span className="text-small text-muted">April 2017</span>
                  <h5 className="mb-0">New CTO: Joe Schultz</h5>
                </div>
              </li>
              <li
                data-aos="fade-left"
                data-aos-duration="3000"
                data-aos-easing="ease-in"
                // className="aos-init aos-animate"
              >
                <div className="process-circle bg-primary" />
                <div>
                  <span className="text-small text-muted">October 2017</span>
                  <h5 className="mb-0">v1.0 Ships</h5>
                </div>
              </li>
              <li
                data-aos="fade-right"
                data-aos-easing="ease-in"
                data-aos-duration="4000"
                // className="aos-init aos-animate"
              >
                <div className="process-circle bg-primary" />
                <div>
                  <span className="text-small text-muted">February 2018</span>
                  <h5 className="mb-0">Featured in Wired</h5>
                </div>
              </li>
              <li
                data-aos="fade-left"
                data-aos-easing="ease-in"
                data-aos-duration="5000"
                // className="aos-init aos-animate"
              >
                <div className="process-circle bg-primary" />
                <div>
                  <span className="text-small text-muted">September 2018</span>
                  <h5 className="mb-0">v.20 Ships</h5>
                </div>
              </li>
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Roadmap;
