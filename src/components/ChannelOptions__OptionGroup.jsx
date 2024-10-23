import * as React from "react";
import { PlasmicChannelOptions__OptionGroup } from "./plasmic/free_fire_simulator/PlasmicChannelOptions__OptionGroup";

function ChannelOptions__OptionGroup(props) {
  const { plasmicProps } =
    PlasmicChannelOptions__OptionGroup.useBehavior(props);
  return <PlasmicChannelOptions__OptionGroup {...plasmicProps} />;
}

export default Object.assign(ChannelOptions__OptionGroup, {
  __plumeType: "select-option-group"
});
