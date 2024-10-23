import * as React from "react";
import { PlasmicAccountNumberSelection__OptionGroup } from "./plasmic/free_fire_simulator/PlasmicAccountNumberSelection__OptionGroup";

function AccountNumberSelection__OptionGroup(props) {
  const { plasmicProps } =
    PlasmicAccountNumberSelection__OptionGroup.useBehavior(props);
  return <PlasmicAccountNumberSelection__OptionGroup {...plasmicProps} />;
}

export default Object.assign(AccountNumberSelection__OptionGroup, {
  __plumeType: "select-option-group"
});
