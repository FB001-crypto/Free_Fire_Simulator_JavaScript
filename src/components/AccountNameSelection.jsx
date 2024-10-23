import * as React from "react";
import { PlasmicAccountNameSelection } from "./plasmic/free_fire_simulator/PlasmicAccountNameSelection";
import AccountNameSelection__Option from "./AccountNameSelection__Option";
import AccountNameSelection__OptionGroup from "./AccountNameSelection__OptionGroup";

function AccountNameSelection_(props, ref) {
  const { plasmicProps, state } = PlasmicAccountNameSelection.useBehavior(
    props,
    ref
  );
  return <PlasmicAccountNameSelection {...plasmicProps} />;
}

const AccountNameSelection = React.forwardRef(AccountNameSelection_);

export default Object.assign(AccountNameSelection, {
  Option: AccountNameSelection__Option,
  OptionGroup: AccountNameSelection__OptionGroup,
  __plumeType: "select"
});
