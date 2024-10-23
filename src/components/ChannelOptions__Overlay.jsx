import * as React from "react";
import { PlasmicChannelOptions__Overlay } from "./plasmic/free_fire_simulator/PlasmicChannelOptions__Overlay";

function ChannelOptions__Overlay_(props, ref) {
  const { plasmicProps } = PlasmicChannelOptions__Overlay.useBehavior(
    props,
    ref
  );
  return <PlasmicChannelOptions__Overlay {...plasmicProps} />;
}

const ChannelOptions__Overlay = React.forwardRef(ChannelOptions__Overlay_);

export default Object.assign(ChannelOptions__Overlay, {
  __plumeType: "triggered-overlay"
});
