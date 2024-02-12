'use client';

import Image from "next/image";
import styles from "./page.module.css";
import {useState} from "react";
// import button from "./ui/button";
import CountButton from "./ui/countButton";

import { countUSD } from "./utils/countUSD";
import { count } from "console";


export default function Home() {

  // const [count, setCount] = useState(0);

  const [cashAmount, setCashAmount] = useState(0);

  const [text, setText] = useState("");




  function handleTextChange(e: React.ChangeEvent<HTMLTextAreaElement>) {
    // Update the text value state with the new value as the user types in the textbox
    setText(e.target.value);
  }

  function handleClick() {
    setCashAmount(countUSD(text));
  }


  function findAndSumUSD() {
    let total = 0;
    let matches = text.match(/\$\d+(\.\d+)?/g);
    if (matches) {
      matches.forEach((match) => {
        total += parseFloat(match.replace("$", ""));
      });
    }
    setCashAmount(total);
  }



  return (
    <main className={styles.main}>
      <div>
      <h1 className="titl">Find & Sum USD in Blocks of Text</h1>
      

      <div className="container">
    <div className="column" id="leftColumn">

      <div className="text-area">
        <textarea id="text" name="text" value={text} onChange={handleTextChange} rows={10} cols={25} placeholder="Enter text here"></textarea>
      </div>
      </div>

      <div className="cash-amount">
        <br />  
        <p>cash amount:</p>
        <p>${cashAmount}</p>
      </div>
      </div>
      </div>

      {/* <button onClick={findAndSumUSD}>Find & Sum USD</button> */}

      {/* <CountButton onClick={findAndSumUSD} /> */}
      <CountButton onClick={handleClick} />

    </main>
  );
}
