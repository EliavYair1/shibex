import './App.css';
import Navbar from './components/navbar';
import Timer from './components/timer';
import Slider from './components/slider';
import SocialInfo from './components/socialInfo';
import Testimonial from './components/testimonial';
import Roadmap from './components/roadmap';
import Footer from './components/footer';
function App() {
  return (
    <div className="App min-vh-100">
      <Navbar />
      <Slider />
      <Timer />
      <Testimonial />

      <SocialInfo />
      {/* <Roadmap /> */}
      <Footer />
    </div>
  );
}

export default App;
