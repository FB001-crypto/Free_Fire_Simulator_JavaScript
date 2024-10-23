import * as React from "react";
import { PlasmicAccountNameSelection__Option } from "./plasmic/free_fire_simulator/PlasmicAccountNameSelection__Option";

function AccountNameSelection__Option_(props, ref) {
  const { plasmicProps } = PlasmicAccountNameSelection__Option.useBehavior(
    props,
    ref
  );
  return <PlasmicAccountNameSelection__Option {...plasmicProps} />;
}

const AccountNameSelection__Option = React.forwardRef(
  AccountNameSelection__Option_
);

export default Object.assign(AccountNameSelection__Option, {
  __plumeType: "select-option"
});
