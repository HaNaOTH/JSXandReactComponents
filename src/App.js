

import './App.css';
import navb from './components/navb';
import Address from './components/Profile.js/Address';
import FullName from './components/Profile.js/FullName';
import Profilephoto from './components/Profile.js/Profilephoto';





function App() {
  return (
    <div className="App">
      {navb ()}
      
      <Profilephoto />
      
      <FullName />
      
      <Address />

  


    </div>
  );
}

export default App;
