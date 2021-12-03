import './App.css';
import Home from './components/Home/Home';
import background from './background.jpg';

function App() {
  return (
    <div>
      <div style={{ backgroundImage: `url(${background})` }}></div>
      <Home />
    </div>
  );
}

export default App;
