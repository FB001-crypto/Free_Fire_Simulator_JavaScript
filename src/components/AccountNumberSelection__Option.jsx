import * as React from "react";
import { PlasmicAccountNumberSelection__Option } from "./plasmic/free_fire_simulator/PlasmicAccountNumberSelection__Option";

function AccountNumberSelection__Option_(props, ref) {
  const { plasmicProps } = PlasmicAccountNumberSelection__Option.useBehavior(
    props,
    ref
  );
  return <PlasmicAccountNumberSelection__Option {...plasmicProps} />;
}

const AccountNumberSelection__Option = React.forwardRef(
  AccountNumberSelection__Option_
);

export default Object.assign(AccountNumberSelection__Option, {
  __plumeType: "select-option"
});
