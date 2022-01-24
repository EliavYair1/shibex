import desktop1 from '../images/shibexLogo/shibexLogo/desktop/desktop3.png';
import desktop2 from '../images/shibexLogo/shibexLogo/desktop/desktop2.png';
import desktop3 from '../images/shibexLogo/shibexLogo/desktop/desktop.png';
import mobile1 from '../images/shibexLogo/shibexLogo/mobile/mobile1.png';
import mobile2 from '../images/shibexLogo/shibexLogo/mobile/mobile2.png';
import mobile3 from '../images/shibexLogo/shibexLogo/mobile/mobile3.png';
import './css_files/slider.css';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
const variants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
  },
};
const Slider = () => {
  return (
    <motion.div
      variants={variants}
      initial="hidden"
      animate="visible"
      transition={{ duration: 3 }}
      className="carousel slide   sliderShadow  "
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
            src={desktop1}
            className=" desktopImg"
            style={{ height: '100vh', width: '100%' }}
            alt="sliderImages"
          />
          <img
            src={mobile1}
            alt="sliderMobile"
            className="mobileImg"
            style={{ height: '100vh', width: '100%' }}
          />
          <div className="carousel-caption first-caption text-start">
            <p className="display-6 fw-bolder text-capitalize captionPara">
              more player, more burn, more value
            </p>
          </div>
          <motion.div
            className="carousel-caption mb-5"
            initial={{ opacity: '0', scale: 0 }}
            animate={{
              opacity: '1',
              transition: { duration: '1' },
              rotate: 360,
              scale: 1,
            }}
            transition={{
              delay: 2,
              type: 'spring',
              stiffness: 260,
              damping: 20,
            }}
          >
            <a
              href="https://shibex-soldiers.web.app/"
              className="btn-slider btn btn-warning rounded-pill innerBtns btn-lg"
              target="_blank"
              rel="noreferrer"
            >
              Let's Play
            </a>
          </motion.div>
        </div>
        <div className="carousel-item ">
          <img
            src={desktop2}
            className=" desktopImg"
            style={{ height: '100vh', width: '100%' }}
            alt="godOfWar"
          />
          <img
            src={mobile2}
            alt="sliderMobile"
            className=" mobileImg"
            style={{ height: '100vh', width: '100%' }}
          />
          <div className="carousel-caption second-caption">
            <p className="display-6 fw-bolder text-capitalize captionPara">
              An econosystem of arcade game based on play to burn modele.
            </p>
          </div>
          <div className="carousel-caption second-caption mb-5  ">
            <a
              href="https://swap.mimo.exchange/#/swap?inputCurrency=0x838403e073a79719a0927a16642ca7dcdc642bd5"
              className="btn-slider btn btn-warning rounded-pill innerBtns btn-lg"
              target="_blank"
              rel="noreferrer"
            >
              Buy Shibex
            </a>
          </div>
        </div>
        <div className="carousel-item">
          <img
            src={desktop3}
            className=" desktopImg"
            style={{ height: '100vh', width: '100%' }}
            alt="playerimage"
          />
          <img
            src={mobile3}
            alt="sliderMobile"
            className="mobileImg"
            style={{ height: '100vh', width: '100%' }}
          />
          <div className="carousel-caption third-caption text-end">
            <p className="display-6 fw-bolder text-capitalize captionPara">
              Look out for more upcoming events.
            </p>
          </div>
          <div className="carousel-caption mb-5">
            <Link
              to="/"
              className="btn-slider btn btn-warning rounded-pill innerBtns btn-lg "
              target="_blank"
              rel="noreferrer"
            >
              Join Shibex
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Slider;
