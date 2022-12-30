import { useState } from "react";
import "./number.css";
import Sound from "react-sound";
import Image from "../../assets/guess.webp";
import Happy from "../../assets/happy.png";
import Cry from "../../assets/cry.gif";
import happy from "../../sounds/happy.mp3";
import cry from "../../sounds/cry.mp3";

function NumberGuessing() {
  const [isPlaying, setIsPlaying] = useState(false);
  let randomNumber1 = Math.floor(Math.random() * 10);
  let randomNumber2 = Math.floor(Math.random() * 10);
  let randomNumber3 = Math.round(Math.random() * 10);
  let [image, setimage] = useState(Image);

  const [Correct, setCorrect] = useState(0);
  const [False, setFalse] = useState(0);
  const [guess, setGuess] = useState(null);
  const [sound, setSound] = useState("");

  const checkNumber = () => {
    const randomNumber = Math.floor(Math.random() * 10)+1;
    console.log("right answer : " + randomNumber);
    if (Number(guess) === randomNumber) {
      setCorrect(() => Correct + 1);
      setimage(Happy);
      setIsPlaying(true);
      setSound(happy);
    }

    if (Number(guess) !== randomNumber) {
      setFalse(() => False + 1);
      setimage(Cry);
      setIsPlaying(true);
      setSound(cry);
    }
  };

  function OnClick(e) {
    setGuess(e.target.value);
    checkNumber();
  }

  return (
    <>
      <span className="row">
        <h5>Correct:{Correct}</h5>
        <h5>False:{False}</h5>
      </span>
      <img src={image} alt=""/>

      <Sound
    
        // url- Link to the music you imported
        url={sound}
        // playStatus- We will set it to Sound.status.PLAYING.
        playStatus={isPlaying ? Sound.status.PLAYING : Sound.status.STOPPED}
        // playFromPosition- You could adjust the milliseconds of when the music should start playing,
        // I would just leave it at 300.
        playFromPosition={300}
      />

      <div>
        <button className="button" value={randomNumber1} onClick={OnClick}>
          {randomNumber1}
        </button>
        <button value={randomNumber2} onClick={OnClick}>
          {randomNumber2}
        </button>
        <button value={randomNumber3} onClick={OnClick}>
          {randomNumber3}
        </button>
      </div>
    </>
  );
}

export default NumberGuessing;
