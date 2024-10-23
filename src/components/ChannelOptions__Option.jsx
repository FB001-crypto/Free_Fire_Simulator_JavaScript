import * as React from "react";
import { PlasmicChannelOptions__Option } from "./plasmic/free_fire_simulator/PlasmicChannelOptions__Option";

function ChannelOptions__Option_(props, ref) {
  const { plasmicProps } = PlasmicChannelOptions__Option.useBehavior(
    props,
    ref
  );
  return <PlasmicChannelOptions__Option {...plasmicProps} />;
}

const ChannelOptions__Option = React.forwardRef(ChannelOptions__Option_);

export default Object.assign(ChannelOptions__Option, {
  __plumeType: "select-option"
});
