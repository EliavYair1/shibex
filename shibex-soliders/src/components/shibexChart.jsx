import { motion } from 'framer-motion';
import { Component } from 'react';

class ShibexChart extends Component {
  state = {};
  componentDidMount() {
    const script = document.createElement('script');

    script.src = 'https://widget.nomics.com/embed.js';
    script.async = true;

    document.body.appendChild(script);
  }

  render() {
    return (
      <>
        <div className="row">
          <div className="col-xl-4 col-sm-4 col-xs-4 col-md-4"></div>
          <motion.div className="chartWrapper col-xl-4 col-sm-4 col-md-4 col-xs-4 ">
            <div
              className="nomics-ticker-widget chart"
              data-name="Shibex"
              data-base="SHIBX3"
              data-quote="USD"
            ></div>
          </motion.div>
          <div className="col-xl-2 col-sm-4 col-md-4 col-xs-4"></div>
        </div>
      </>
    );
  }
}

export default ShibexChart;
