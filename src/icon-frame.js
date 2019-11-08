import React, { ReactComponent } from "react";
import styled from "styled-components";

import "./App.css";

import Clap from "./icons/clap.png";
import Cowbell from "./icons/cowbell.png";
import Hat from "./icons/hat.png";
import Kick from "./icons/kick.png";
import Snap from "./icons/snap.png";
import Snare from "./icons/snare.png";
import Whoo from "./icons/whoo.png";
import Yeah from "./icons/yeah.png";

const IconFrame = styled.div`
  display: grid;
  grid-template-columns: repeat(${props => props.columns}, 1fr);
  grid-template-rows: repeat(${props => props.rows}, 1fr);
  width: 9vw;
  height: calc(100vh - 60px);
  position: absolute;
`;

export default () => (
  <IconFrame>
    <figure className="icon-grid">
      <img src={Kick} className="sound-icons" alt="kick" />
    </figure>
    <figure className="icon-grid">
      <img src={Clap} className="sound-icons" alt="clap" />
    </figure>
    <figure className="icon-grid">
      <img src={Cowbell} className="sound-icons" alt="cowbell" />
    </figure>
    <figure className="icon-grid">
      <img src={Hat} className="sound-icons" alt="hat" />
    </figure>
    <figure className="icon-grid">
      <img src={Snap} className="sound-icons" alt="snap" />
    </figure>
    <figure className="icon-grid">
      <img src={Snare} className="sound-icons" alt="snare" />
    </figure>
    <figure className="icon-grid">
      <img src={Yeah} className="sound-icons" alt="yeah-noise" />
    </figure>
    <figure className="icon-grid">
      <img src={Whoo} className="sound-icons" alt="whoo-noise" />
    </figure>
  </IconFrame>
);
