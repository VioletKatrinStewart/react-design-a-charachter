import './App.css';
import Home from './components/Home/Home';
import background from './background.jpg';

function App() {
  return (
    <div style={{ backgroundImage: `url(${background})` }}>
      <Home />
    </div>
  );
}

export default App;
