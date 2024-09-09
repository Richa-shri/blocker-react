import React from "react";
import "./index.scss";

type Props = {
  type?: string;
  show?: boolean;
  title?: string;
  subtitle?: string;
};

const Blocker = (props: Props) => {
  const className =
    props.type === "Circle"
      ? "circle"
      : props.type === "Linear"
      ? "linear"
      : props.type === "CircularDots"
      ? "circular_dots"
      : props.type === "Signal"
      ? "signal"
      : props.type === "Dots"
      ? "dots"
      : "circle";

  const blockEvent = (event: any) => {
    event.stopPropagation();
    event.nativeEvent.stopImmediatePropagation();
    event.preventDefault();
  };

  return props.show ? (
    <div
      className="blocker"
      onClickCapture={blockEvent}
      onChangeCapture={blockEvent}
    >
      <div className="icon">
        <div className={className}></div>
        <br />
        <h3>{props.title}</h3>
        <p>{props.subtitle}</p>
      </div>
    </div>
  ) : null;
};

export default Blocker;
