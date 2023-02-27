import logo from "./logo.svg";
import "./App.css";
import { TakeSelfie } from "./components/takeSelfie";
import { useState } from "react";
import { Header } from "./components/header";
import { Captcha } from "./components/captcha";

function App() {
  const [selfie, setSelfie] = useState(false);
  const [captcha, setCaptcha] = useState(false);
  const [total, setTotal] = useState([]);
  const [selectedItems, setSelectedItems] = useState([]);

  const randomindex = Math.floor(Math.random() * 3);
  const [index, setIndex] = useState(randomindex);

  const numbers = [];
  let i = 1;

  while (i <= 16) {
    numbers.push(Math.floor(Math.random() * 3));
    i++;
  }
  const [icons, setIcons] = useState([...numbers]);

  function showCaptcha() {
    if (captcha) setCaptcha(false);
    else setCaptcha(true);
  }
  const [tried, setTried] = useState(0);
  function validateCaptcha() {
    let targetIcons = icons.filter((item) => item === index);

    console.log(total);
    console.log(targetIcons);

    if (tried >= 3) {
      alert("you tried more than three rounds. So wait 5 minutes???????????");
      return;
    }
    if (JSON.stringify(total) !== JSON.stringify(targetIcons)) {
      alert("Try again!!!!!!!!!!!!!!!");
      setTried(tried + 1);
      init();
      console.log(tried);
      return;
    }
    alert("Sucessfull........");
  }

  function init() {
    setIcons([...numbers]);
    setIndex(randomindex);
    setTotal([]);
    setSelectedItems([]);
  }

  return (
    <div className="App">
      <div className="takeSelfie">
        <Header captcha={captcha} index={index} />
        {/* <div className="App-logo"> <img id="image"src="images/nature.jpg"  alt="logo" /></div> */}
        <div className="App-logo">
          {" "}
          <TakeSelfie setSelfie={setSelfie}></TakeSelfie>
        </div>

        {captcha && (
          <div className="captchaBox">
            <Captcha
              total={total}
              setTotal={setTotal}
              icons={icons}
              selectedItems={selectedItems}
              setSelectedItems={setSelectedItems}
            />
          </div>
        )}

        {/* {captcha ? <button id="btn_continue" onClick={validateCaptcha}>VALIDATE</button> :<button id="btn_continue" onClick={showCaptcha}>CONTINUE</button>} */}

        {captcha && (
          <button id="btn_continue" onClick={validateCaptcha}>
            VALIDATE
          </button>
        )}

        {!captcha && selfie && (
          <button id="btn_continue" onClick={showCaptcha}>
            CONTINUE
          </button>
        )}
      </div>
    </div>
  );
}

export default App;
