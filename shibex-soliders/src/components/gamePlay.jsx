import { motion, useAnimation } from 'framer-motion';
import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import shivaVideo from '../videos/PRUEBATrim.mp4';
import './css_files/gamePlay.css';

const GamePlay = () => {
  const { ref, inView } = useInView({
    threshold: 0.25,
  });

  const animation = useAnimation();

  useEffect(() => {
    console.log('use effect hook,inView =', inView);

    if (inView) {
      //end point of animation
      animation.start({
        y: '0',
      });
    }
    if (!inView) {
      //start point of animation
      animation.start({ y: '-200px' });
    }
  }, [inView, animation]);

  const animation2 = useAnimation();

  useEffect(() => {
    console.log('use effect hook,inView =', inView);

    if (inView) {
      //end point of animation2
      animation2.start({
        y: '0',
      });
    }
    if (!inView) {
      //start point of animation2
      animation2.start({ y: '200px' });
    }
  }, [inView, animation2]);

  return (
    <>
      <div className="container mt-3 gamePlay-container align-center">
        <div className="row">
          <div className="col-12">
            <div className="header" ref={ref}>
              <motion.h1
                className="text-center display-1 gameplayHeader mb-3 mt-5"
                animate={animation2}
              >
                The Shibex Games
              </motion.h1>
            </div>
          </div>
        </div>
        <div className="row ">
          <div className="col-8 text-center video-container ">
            <video width="1000" height="400" controls src={shivaVideo}></video>
          </div>
        </div>
        <div className="row">
          <div className="col-12 text-center buttonWrapper mt-5" ref={ref}>
            <motion.button
              className="platBtn btn-lg btn-warning rounded-pill"
              animate={animation}
            >
              <strong className="innerBtn">Let's Play</strong>
            </motion.button>
          </div>
        </div>
      </div>
    </>
  );
};

export default GamePlay;
