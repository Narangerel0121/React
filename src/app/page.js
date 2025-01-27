import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
   <div>
     <div id="body">
     <div id="container">
        <p id="text">Online Timer & Stopwatch</p>
        <div id="displayTime">
            <span id="hour">00</span>:<span id="minute">00</span>:<span id="second">00</span>
         </div>
        <div id="buttons">
            <button>Start</button>
            <button>Stop</button>
            <button>Reset</button>
        </div>
    </div>
     </div>
   </div>
  );
}
