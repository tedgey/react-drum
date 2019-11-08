import React from "react";
import ReactDOM from "react-dom";
import Sequencer from "./sequencer";
import PlayerProvider from "./player-provider";

import "./App.css";

function App() {
  return (
    <PlayerProvider>
      {({ player }) => {
        return <Sequencer player={player} />;
      }}
    </PlayerProvider>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

export default App;
