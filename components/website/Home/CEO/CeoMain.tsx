import React from "react";
import Intro from "./Intro";
import CeoVideo from "./CeoVideo";

type Props = {};

function CeoMain({}: Props) {
  return (
    <div>
      <Intro />
      <CeoVideo />
    </div>
  );
}

export default CeoMain;
