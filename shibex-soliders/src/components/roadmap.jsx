import { motion, useAnimation } from 'framer-motion';
import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import './css_files/roadmap.css';

const Roadmap = () => {
  const { ref, inView } = useInView({
    threshold: 0.7,
  });
  const animation = useAnimation();
  useEffect(() => {
    console.log('use effect hook,inView =', inView);

    if (inView) {
      //end point of animation
      animation.start({ scale: 1, rotate: 360, transition: { duration: 0.3 } });
    }
    if (!inView) {
      //start point of animation
      animation.start({ scale: 0, rotate: 0 });
    }
  }, [inView, animation]);

  const animation2 = useAnimation();
  useEffect(() => {
    console.log('use effect hook,inView =', inView);

    if (inView) {
      //end point of animation2
      animation2.start({
        opacity: 1,
        transition: { duration: 0.5, delay: 0.2 },
      });
    }
    if (!inView) {
      //start point of animation2
      animation2.start({ opacity: 0 });
    }
  }, [inView, animation2]);
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
        <div className="row text-center mb-4">
          <div className="col-12 " ref={ref}>
            <motion.h1 className="display-1 roadmapHead" animate={animation2}>
              Roadmap
            </motion.h1>
          </div>
        </div>
        <div className="row">
          <div className="col-4"></div>
          <div className="col-4 " ref={ref}>
            <motion.p className="lead text-center" animate={animation}>
              Shibex is the token that allows you to play all the games
              developed by the talented Shibex Team, we plan to make one
              multiplayer arcades game.
            </motion.p>
          </div>
        </div>

        <div className="row o-hidden o-lg-visible">
          <div className="col d-flex flex-column align-items-center">
            <ol className="process-vertical mt-5 mb-5">
              <li
                data-aos="fade-left"
                data-aos-duration="1000"
                data-aos-easing="ease-in"
                className="aos-init aos-animate ballsItem "
              >
                <div className="process-circle bg-primary" />
                <div>
                  <span className="text-small text-muted ">Milestone #1</span>
                  <h5 className="mb-0 milestoneText ">
                    website & 65k$ raised during pre-ICO
                  </h5>
                </div>
              </li>
              <li
                data-aos="fade-right"
                data-aos-easing="ease-in"
                data-aos-duration="2000"
                className="aos-init aos-animate ballsItem "
              >
                <div className="process-circle bg-primary" />
                <div>
                  <span className="text-small text-muted">Milestone #2</span>
                  <h5 className="mb-0 milestoneText">
                    ShibexRide lunched & finish the private sale
                  </h5>
                </div>
              </li>
              <li
                data-aos="fade-left"
                data-aos-duration="3000"
                data-aos-easing="ease-in"
                className="aos-init aos-animate ballsItem "
              >
                <div className="process-circle bg-primary" />
                <div>
                  <span className="text-small text-muted">Milestone #3</span>
                  <h5 className="mb-0 milestoneText">
                    ShibexRide Beta droped connected to Iotex blockchain
                  </h5>
                </div>
              </li>
              <li
                data-aos="fade-right"
                data-aos-easing="ease-in"
                data-aos-duration="4000"
                className="aos-init aos-animate ballsItem "
              >
                <div className="process-circle process-ultimate bg-primary" />
                <div>
                  <span
                    className="text-small milestoneHead"
                    style={{ color: '#FCD032' }}
                  >
                    Ultimate Goal
                  </span>
                  <h5 className="mb-0 milestoneUlti  text-center">
                    {' '}
                    Shibex tradable on mimoSwap & new game on development
                  </h5>
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
