import './App.css';
import Navbar from './components/navbar';
import Slider from './components/slider';
import SocialInfo from './components/socialInfo';
function App() {
  return (
    <div className="App min-vh-100">
      <Navbar />
      <Slider />

      <SocialInfo />
    </div>
  );
}

export default App;
