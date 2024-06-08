import React from "react";
import Intro from "./Intro";
import CustomerReview from "./CustomerReview";

type Props = {};

function ReviewMain({}: Props) {
  return (
    <div>
      <Intro />
      <CustomerReview />
    </div>
  );
}

export default ReviewMain;
