import * as React from "react";
import { PlasmicAuthButton } from "./plasmic/free_fire_simulator/PlasmicAuthButton";

function AuthButton_(props, ref) {
  const { plasmicProps } = PlasmicAuthButton.useBehavior(props, ref);
  return <PlasmicAuthButton {...plasmicProps} />;
}

const AuthButton = React.forwardRef(AuthButton_);

export default Object.assign(AuthButton, { __plumeType: "button" });
