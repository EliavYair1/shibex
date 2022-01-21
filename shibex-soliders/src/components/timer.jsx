import { motion, useAnimation } from 'framer-motion';
import './css_files/timer.css';
import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import ShibexChart from './shibexChart';

const Timer = () => {
  const { ref, inView } = useInView({
    threshold: 0.5,
  });

  const animation = useAnimation();
  const animation2 = useAnimation();
  useEffect(() => {
    console.log('use effect hook,inView =', inView);

    if (inView) {
      animation.start({
        x: '0',
        transition: { duration: 0.8, type: 'spring' },
      });
    }
    if (!inView) {
      animation.start({ x: '200vw' });
    }
  }, [inView, animation]);

  useEffect(() => {
    console.log('use effect hook,inView =', inView);

    if (inView) {
      animation2.start({
        x: '0',
        transition: { duration: 0.8, type: 'spring' },
      });
    }
    if (!inView) {
      animation2.start({ x: '-200vw' });
    }
  }, [inView, animation2]);

  return (
    <section className="bg-primary-3 o-hidden" style={{ position: 'relative' }}>
      <div className="container layer-1 ">
        <div className="row justify-content-between " ref={ref}>
          <motion.div className="col-xl-6 text-light mt-5" animate={animation2}>
            <h1 className="timerHeader ms-5 ">
              A Decentralized GameFi Token that Evolved into the amazing IoTex
              Ecosystem !
            </h1>
            <p className="lead timerPara ms-3 mt-5">
              We are always on the move and we are constantly innovating for
              you: referencing, partnerships and above all... new games. Here's
              what to expect: keep an eye on the countdown
            </p>
            <div className="d-flex mb-5">
              <span className="badge badge-primary mr-2">News</span>
              <a href="#" className="text-small hover-arrow">
                Stay Updated with company
              </a>
            </div>
          </motion.div>
          <div className="col-xl-6 col-md-6 mt-5">
            <motion.div
              className="timer"
              // initial={{ x: '200vw' }}
              animate={animation}
              // transition={{ duration: 0.8, type: 'spring' }}
            >
              <div className="text-center text-light">
                <div className="mb-4">
                  <h1 className="timerHeader">
                    Shibex will be tradable on MimoSwap in
                  </h1>
                </div>
                <div>
                  <span className="text-small text-dark fw-bolder fs-3 timerHeader">
                    Coming Soon!
                  </span>
                </div>
              </div>
              <div className="card card-body mt-4 shadow-lg timerBox  ">
                <div className="row">
                  <div
                    className="col-12 mb-4 add-countdown-time"
                    data-countdown-date="2022/01/31"
                    data-detailed
                  >
                    <div data-active className="row text-center">
                      <div className="col">
                        <h2
                          className=" text-warning mb-2 timerDigits"
                          data-days
                          data-format="%D"
                        >
                          00
                        </h2>
                        <span className=" mb-0 timerClock" data-days-label>
                          Days
                        </span>
                      </div>
                      <div className="col">
                        <h2
                          className=" text-warning mb-2 timerDigits"
                          data-hours
                        >
                          00
                        </h2>
                        <span className=" mb-0 timerClock" data-hours-label>
                          Hour
                        </span>
                      </div>
                      <div className="col">
                        <h2
                          className=" text-warning mb-2 timerDigits"
                          data-minutes
                        >
                          00
                        </h2>
                        <span className=" mb-0 timerClock" data-minutes-label>
                          Minutes
                        </span>
                      </div>
                      <div className="col">
                        <h2
                          className=" text-warning mb-2 timerDigits"
                          data-seconds
                        >
                          00
                        </h2>
                        <span className=" mb-0 timerClock" data-seconds-label>
                          Seconds
                        </span>
                      </div>
                    </div>
                    <div data-elapsed style={{ display: 'none' }}>
                      <h1>
                        This is the fallback for when the countdown is elapsed
                      </h1>
                    </div>
                  </div>
                </div>
                <a
                  href="https://swap.mimo.exchange/#/swap?inputCurrency=0x838403e073a79719a0927a16642ca7dcdc642bd5"
                  className="btn btn-warning rounded-pill purchaseBtn fw-bold mt-4 timerPara"
                >
                  Buy Shibex
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
      <div className="decoration-wrapper d-none d-md-block">
        <div className="decoration top right scale-4"></div>
        <ShibexChart />
      </div>
    </section>
  );
};

export default Timer;
