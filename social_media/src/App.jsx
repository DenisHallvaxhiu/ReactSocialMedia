import './App.css';
import Auth from './Screens/Auth/Auth';
import Home from './Screens/Home/Home';
import Profile from './Screens/Profile/Profile';

function App() {
  return (
    <div className="App">
      <div className='blur blur1'></div>
      <div className='blur blur2'></div>
      {/* <Home/> */}
      <Profile/>
      {/* <Auth/> */}
    </div>
  );
}

export default App;
