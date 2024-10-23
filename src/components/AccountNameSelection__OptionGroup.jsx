import * as React from "react";
import { PlasmicAccountNameSelection__OptionGroup } from "./plasmic/free_fire_simulator/PlasmicAccountNameSelection__OptionGroup";

function AccountNameSelection__OptionGroup(props) {
  const { plasmicProps } =
    PlasmicAccountNameSelection__OptionGroup.useBehavior(props);
  return <PlasmicAccountNameSelection__OptionGroup {...plasmicProps} />;
}

export default Object.assign(AccountNameSelection__OptionGroup, {
  __plumeType: "select-option-group"
});
