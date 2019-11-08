import React from "react";
import Frame from "./frame";
import Pad from "./pad";
import IconFrame from "./icon-frame";

import "./App.css";

const Grid = ({ sequence, toggleStep }) => (
  <div className="frame-wrapper">
    <IconFrame rows={8} columns={1} />
    <Frame rows={8} columns={16}>
      {sequence.map((line, i) =>
        line.map((time, j) => (
          <Pad
            key={i + j}
            column={j + 1}
            row={i + 1}
            activated={sequence[i][j]["activated"]}
            triggered={sequence[i][j]["triggered"]}
            onClick={() => toggleStep(i, j)}
          />
        ))
      )}
    </Frame>
  </div>
);

export default Grid;
