import * as React from "react";
import { PlasmicCheckbox } from "./plasmic/free_fire_simulator/PlasmicCheckbox";

function Checkbox_(props, ref) {
  const { plasmicProps, state } = PlasmicCheckbox.useBehavior(props, ref);
  return <PlasmicCheckbox {...plasmicProps} />;
}

const Checkbox = React.forwardRef(Checkbox_);

export default Object.assign(Checkbox, {
  __plumeType: "checkbox",
  __plasmicFormFieldMeta: { valueProp: "isChecked" }
});
