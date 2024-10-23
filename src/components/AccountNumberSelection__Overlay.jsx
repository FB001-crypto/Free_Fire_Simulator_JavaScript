import * as React from "react";
import { PlasmicAccountNumberSelection__Overlay } from "./plasmic/free_fire_simulator/PlasmicAccountNumberSelection__Overlay";

function AccountNumberSelection__Overlay_(props, ref) {
  const { plasmicProps } = PlasmicAccountNumberSelection__Overlay.useBehavior(
    props,
    ref
  );
  return <PlasmicAccountNumberSelection__Overlay {...plasmicProps} />;
}

const AccountNumberSelection__Overlay = React.forwardRef(
  AccountNumberSelection__Overlay_
);

export default Object.assign(AccountNumberSelection__Overlay, {
  __plumeType: "triggered-overlay"
});
