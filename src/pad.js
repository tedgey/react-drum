import styled from "styled-components";
import { darken } from "polished";

const getBackground = (activated, triggered) => {
  switch (true) {
    case activated && triggered:
      return darken(0.2, "#f39422");
    case activated && !triggered:
      return "#f39422";
    case !activated && triggered:
      return "#eeeeff";
    default:
      return "#202733";
  }
};

const Pad = styled.div.attrs(({ activated, triggered }) => ({
  style: {
    background: getBackground(activated, triggered)
  }
}))`
  border-radius: 4px;
  grid-column: ${props => props.column};
  grid-row: ${props => props.row};
  margin: 2px;
`;

export default Pad;
