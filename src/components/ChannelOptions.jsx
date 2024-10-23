import * as React from "react";
import { PlasmicChannelOptions } from "./plasmic/free_fire_simulator/PlasmicChannelOptions";
import ChannelOptions__Option from "./ChannelOptions__Option";
import ChannelOptions__OptionGroup from "./ChannelOptions__OptionGroup";

function ChannelOptions_(props, ref) {
  const { plasmicProps, state } = PlasmicChannelOptions.useBehavior(props, ref);
  return <PlasmicChannelOptions {...plasmicProps} />;
}

const ChannelOptions = React.forwardRef(ChannelOptions_);

export default Object.assign(ChannelOptions, {
  Option: ChannelOptions__Option,
  OptionGroup: ChannelOptions__OptionGroup,
  __plumeType: "select"
});
