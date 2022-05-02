import React from "react";
import { useState } from "react";
import "./App.css";

function App() {
  const [qr, setQr] = useState();
  function passQr(e){
    console.log(e.target.value);
    let q = e.target.value;
    console.log('q',q)
    setQr(`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${q}`)
  }
  return (
    <div className="Container-app">
      <div className="Container-all">
        <div className="Container-in">
            <input onChange={passQr} placeholder="digite um site"></input>

        </div>
        <div className="Container-out">
           <img src={qr}></img>
        </div>
      </div>
    </div>
  );
}

export default App;
