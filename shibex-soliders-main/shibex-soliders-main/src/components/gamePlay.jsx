import shivaVideo from "../videos/PRUEBA 31)_Trim.mp4";
import "./css_files/gamePlay.css";

const GamePlay = () => {
  return (
    <>
      <div className="container mt-3">
        <h1 className="text-center display-1 gameplayHeader mb-5 mt-5">
          The Shibex Games
        </h1>
        <div className="row">
          <div className="col-2 text-center">
            <video width="700" height="400" controls src={shivaVideo}></video>
          </div>
          <div className="col-6">
            <br />
            <br />
            <br />
          </div>
          <div className="col-4 text-center">
            <p className="text-warning fs-3 gameplayPara mt-3">
              If you'd like to donate to the Devs, send IOTX, SHIBX, ioETH or
              Vita here. Thank you for your support! WOOF!
            </p>
            <br />
            <button className="platBtn btn-lg btn-warning rounded-pill mb-5">
              {" "}
              <strong className="innerBtn">Let's Play</strong>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default GamePlay;
