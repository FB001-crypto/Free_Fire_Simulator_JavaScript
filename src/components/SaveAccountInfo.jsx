import * as React from "react";
import { PlasmicSaveAccountInfo } from "./plasmic/free_fire_simulator/PlasmicSaveAccountInfo";

function SaveAccountInfo_(props, ref) {
  const { plasmicProps } = PlasmicSaveAccountInfo.useBehavior(props, ref);
  return <PlasmicSaveAccountInfo {...plasmicProps} />;
}

const SaveAccountInfo = React.forwardRef(SaveAccountInfo_);

export default Object.assign(SaveAccountInfo, { __plumeType: "button" });
