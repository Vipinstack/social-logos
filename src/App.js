// import './App.css';
import Logo from './Components/Logo';
import Telegram from './Components/Telegram';
import WhatApp from './Components/WhatApp';

function App() {
  return (
    <div className="App">
      <Logo />
      <span>
        <WhatApp />
      </span>
      <span>
        <Telegram />
      </span>
    </div>
  );
}

export default App;
