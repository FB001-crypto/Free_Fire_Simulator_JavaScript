import * as React from "react";
import { PlasmicAccountNameSelection__Overlay } from "./plasmic/free_fire_simulator/PlasmicAccountNameSelection__Overlay";

function AccountNameSelection__Overlay_(props, ref) {
  const { plasmicProps } = PlasmicAccountNameSelection__Overlay.useBehavior(
    props,
    ref
  );
  return <PlasmicAccountNameSelection__Overlay {...plasmicProps} />;
}

const AccountNameSelection__Overlay = React.forwardRef(
  AccountNameSelection__Overlay_
);

export default Object.assign(AccountNameSelection__Overlay, {
  __plumeType: "triggered-overlay"
});
