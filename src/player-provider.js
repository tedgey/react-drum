import { useState, useEffect } from "react";
import Tone from "tone";

const PlayerProvider = ({ children }) => {
  const [player, setPlayer] = useState(null);
  useEffect(() => {
    const player = new Tone.Players(
      {
        KC: "sounds/kick.wav",
        CP: "sounds/clap.wav",
        CB: "sounds/cowbell.wav",
        HT: "sounds/hat.wav",
        SN: "sounds/snap.wav",
        SR: "sounds/snare.wav",
        YH: "sounds/yeah.wav",
        WH: "sounds/whoo.flac"
      },
      () => {
        console.log("buffers loaded");
        setPlayer(player);
      }
    ).toMaster();
  }, []);

  return children({ player });
};

export default PlayerProvider;
