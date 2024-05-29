
import { useEffect, useState} from "react";
import Home from "./home/Home"
import { auth } from "./firebase-config/firebase-config";

function App() {

  const [user, setUser] = useState(null)

  useEffect(() => {

    setUser(auth.currentUser)
    console.log(user);
  })

  return (
    <div className="App">
      <header className="App-header">
        <Home user={user} setUser={(val) => setUser(val)}/>
      </header>
    </div>
  );
}

export default App;
