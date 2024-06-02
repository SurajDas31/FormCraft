
import { useEffect, useState} from "react";
import Home from "./home/Home"
import { auth } from "./firebase-config/firebase-config";

function App() {

  

  return (
    <div className="App">
      <header className="App-header">
        <Home/>
      </header>
    </div>
  );
}

export default App;
