import * as React from "react";
import { PlasmicAccountNumberSelection } from "./plasmic/free_fire_simulator/PlasmicAccountNumberSelection";
import AccountNumberSelection__Option from "./AccountNumberSelection__Option";
import AccountNumberSelection__OptionGroup from "./AccountNumberSelection__OptionGroup";

function AccountNumberSelection_(props, ref) {
  const { plasmicProps, state } = PlasmicAccountNumberSelection.useBehavior(
    props,
    ref
  );
  return <PlasmicAccountNumberSelection {...plasmicProps} />;
}

const AccountNumberSelection = React.forwardRef(AccountNumberSelection_);

export default Object.assign(AccountNumberSelection, {
  Option: AccountNumberSelection__Option,
  OptionGroup: AccountNumberSelection__OptionGroup,
  __plumeType: "select"
});
