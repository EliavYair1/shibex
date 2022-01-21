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
          <div className="col-3"></div>
          <motion.div className="chartWrapper col-6">
            <div
              className="nomics-ticker-widget chart"
              data-name="Shibex"
              data-base="SHIBX3"
              data-quote="USD"
            ></div>
          </motion.div>
        </div>
      </>
    );
  }
}

export default ShibexChart;
