import React, { useState } from "react";
import "./App.css";
import {store} from "./redux";

function App() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleSignUp = (e: React.MouseEvent): void => {
    e.preventDefault();
    console.log(email);
    console.log(password);
  };

  return (
    <div className="App">
      <header className="App-header">
        <form>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <input type="button" onClick={handleSignUp} />
        </form>
      </header>
    </div>
  );
}

export default App;
