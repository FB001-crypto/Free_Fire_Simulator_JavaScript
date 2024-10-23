import * as React from "react";
import { PlasmicNextButton } from "./plasmic/free_fire_simulator/PlasmicNextButton";

function NextButton_(props, ref) {
  const { plasmicProps } = PlasmicNextButton.useBehavior(props, ref);
  return <PlasmicNextButton {...plasmicProps} />;
}

const NextButton = React.forwardRef(NextButton_);

export default Object.assign(NextButton, { __plumeType: "button" });
