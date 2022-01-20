import slider1 from '../images/shibexBlue.jpg';
import slider2 from '../images/shibexPurple.jpg';
import slider3 from '../images/shibexGreen.png';
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
// import Timer from './timer';
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
            src={slider1}
            className="d-block "
            style={{ height: '100vh', width: '100vw' }}
            alt="sliderImages"
          />
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
            >
              Let's Play
            </a>
          </motion.div>
        </div>
        <div className="carousel-item ">
          <img
            src={slider2}
            className="d-block "
            style={{ height: '100vh', width: '100vw' }}
            alt="godOfWar"
          />
          <div className="carousel-caption mb-5  ">
            <a
              href="https://swap.mimo.exchange/#/swap?inputCurrency=0x838403e073a79719a0927a16642ca7dcdc642bd5"
              className="btn-slider btn btn-warning rounded-pill innerBtns btn-lg"
            >
              Buy Shibex
            </a>
          </div>
        </div>
        <div className="carousel-item">
          <img
            src={slider3}
            className="d-block "
            style={{ height: '100vh', width: '100vw' }}
            alt="playerimage"
          />
          <div className="carousel-caption mb-5">
            <Link
              to="/"
              className="btn-slider btn btn-warning rounded-pill innerBtns btn-lg "
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
