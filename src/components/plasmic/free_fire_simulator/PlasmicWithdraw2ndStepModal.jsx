// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: ncwW2Qgif2pGwQDF81hXqa
// Component: HgNobPpn0sQA
import * as React from "react";
import {
  Stack as Stack__,
  Trans as Trans__,
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts,
  ensureGlobalVariants,
  usePlasmicTranslator
} from "@plasmicapp/react-web";
import { useDataEnv } from "@plasmicapp/react-web/lib/host";
import CurrencySelection from "../../CurrencySelection"; // plasmic-import: I0ZtuiJGttrZ/component
import ChannelSelection from "../../ChannelSelection"; // plasmic-import: 0iHTuHTgXBjV/component
import NextButton from "../../NextButton"; // plasmic-import: Av2xkV_SUoiq/component
import { useScreenVariants as useScreenVariants_2BvNreuf1Eto } from "./PlasmicGlobalVariant__DesktopBase"; // plasmic-import: 2BVNreuf1ETO/globalVariant
import "@plasmicapp/react-web/lib/plasmic.css";
import plasmic_antd_5_hostless_css from "../antd_5_hostless/plasmic.module.css"; // plasmic-import: ohDidvG9XsCeFumugENU3J/projectcss
import plasmic_plasmic_rich_components_css from "../plasmic_rich_components/plasmic.module.css"; // plasmic-import: jkU633o1Cz7HrJdwdxhVHk/projectcss
import projectcss from "./plasmic.module.css"; // plasmic-import: ncwW2Qgif2pGwQDF81hXqa/projectcss
import sty from "./PlasmicWithdraw2ndStepModal.module.css"; // plasmic-import: HgNobPpn0sQA/css
import BackButtonSvgIcon from "./icons/PlasmicIcon__BackButtonSvg"; // plasmic-import: 62NNR1D0AqJT/icon
import Layer22Icon from "./icons/PlasmicIcon__Layer22"; // plasmic-import: SIu0NpOppXl6/icon
import RightSvgIcon from "./icons/PlasmicIcon__RightSvg"; // plasmic-import: JTHnt52H6OfL/icon

createPlasmicElementProxy;

export const PlasmicWithdraw2ndStepModal__VariantProps = new Array();

export const PlasmicWithdraw2ndStepModal__ArgProps = new Array();

const $$ = {};

function PlasmicWithdraw2ndStepModal__RenderFunc(props) {
  const { variants, overrides, forNode } = props;
  const $translator = usePlasmicTranslator?.();
  const args = React.useMemo(
    () =>
      Object.assign(
        {},
        Object.fromEntries(
          Object.entries(props.args).filter(([_, v]) => v !== undefined)
        )
      ),
    [props.args]
  );
  const $props = {
    ...args,
    ...variants
  };
  const $ctx = useDataEnv?.() || {};
  const refsRef = React.useRef({});
  const $refs = refsRef.current;
  const globalVariants = ensureGlobalVariants({
    desktopBase: useScreenVariants_2BvNreuf1Eto()
  });
  return (
    <Stack__
      as={"div"}
      data-plasmic-name={"profileModal"}
      data-plasmic-override={overrides.profileModal}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      hasGap={true}
      className={classNames(
        projectcss.all,
        projectcss.root_reset,
        projectcss.plasmic_default_styles,
        projectcss.plasmic_mixins,
        projectcss.plasmic_tokens,
        plasmic_antd_5_hostless_css.plasmic_tokens,
        plasmic_plasmic_rich_components_css.plasmic_tokens,
        sty.profileModal
      )}
    >
      <div
        data-plasmic-name={"profileHeader"}
        data-plasmic-override={overrides.profileHeader}
        className={classNames(projectcss.all, sty.profileHeader)}
      >
        <BackButtonSvgIcon
          data-plasmic-name={"closeModal2"}
          data-plasmic-override={overrides.closeModal2}
          className={classNames(projectcss.all, sty.closeModal2)}
          role={"img"}
        />

        <div
          className={classNames(
            projectcss.all,
            projectcss.__wab_text,
            sty.text__tdDw
          )}
        >
          <Trans__>{"\u5151\u6362\u73b0\u91d1"}</Trans__>
        </div>
        <Layer22Icon
          data-plasmic-name={"closeModal"}
          data-plasmic-override={overrides.closeModal}
          className={classNames(projectcss.all, sty.closeModal)}
          role={"img"}
        />
      </div>
      <Stack__
        as={"div"}
        hasGap={true}
        className={classNames(projectcss.all, sty.freeBox__grVjk)}
      >
        <div className={classNames(projectcss.all, sty.freeBox__kec6A)}>
          <div className={classNames(projectcss.all, sty.freeBox__zx5Qt)}>
            <CurrencySelection
              data-plasmic-name={"currencySelection"}
              data-plasmic-override={overrides.currencySelection}
              className={classNames("__wab_instance", sty.currencySelection)}
            />

            <ChannelSelection
              data-plasmic-name={"channelSelection"}
              data-plasmic-override={overrides.channelSelection}
              className={classNames("__wab_instance", sty.channelSelection)}
            />
          </div>
          <div className={classNames(projectcss.all, sty.freeBox___7F98J)}>
            <NextButton
              data-plasmic-name={"nextButton"}
              data-plasmic-override={overrides.nextButton}
              className={classNames("__wab_instance", sty.nextButton)}
              endIcon={
                <RightSvgIcon
                  data-plasmic-name={"svg"}
                  data-plasmic-override={overrides.svg}
                  className={classNames(projectcss.all, sty.svg)}
                  role={"img"}
                />
              }
              showEndIcon={true}
              submitsForm={true}
            >
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__rOabw
                )}
              >
                <Trans__>
                  {
                    <React.Fragment>
                      <span
                        className={"plasmic_default__all plasmic_default__span"}
                        style={{ color: "#000000" }}
                      >
                        {"Next(2/3)"}
                      </span>
                    </React.Fragment>
                  }
                </Trans__>
              </div>
            </NextButton>
          </div>
        </div>
      </Stack__>
    </Stack__>
  );
}

const PlasmicDescendants = {
  profileModal: [
    "profileModal",
    "profileHeader",
    "closeModal2",
    "closeModal",
    "currencySelection",
    "channelSelection",
    "nextButton",
    "svg"
  ],

  profileHeader: ["profileHeader", "closeModal2", "closeModal"],
  closeModal2: ["closeModal2"],
  closeModal: ["closeModal"],
  currencySelection: ["currencySelection"],
  channelSelection: ["channelSelection"],
  nextButton: ["nextButton", "svg"],
  svg: ["svg"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: PlasmicDescendants[nodeName],
          internalArgPropNames: PlasmicWithdraw2ndStepModal__ArgProps,
          internalVariantPropNames: PlasmicWithdraw2ndStepModal__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicWithdraw2ndStepModal__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "profileModal") {
    func.displayName = "PlasmicWithdraw2ndStepModal";
  } else {
    func.displayName = `PlasmicWithdraw2ndStepModal.${nodeName}`;
  }
  return func;
}

export const PlasmicWithdraw2ndStepModal = Object.assign(
  // Top-level PlasmicWithdraw2ndStepModal renders the root element
  makeNodeComponent("profileModal"),
  {
    // Helper components rendering sub-elements
    profileHeader: makeNodeComponent("profileHeader"),
    closeModal2: makeNodeComponent("closeModal2"),
    closeModal: makeNodeComponent("closeModal"),
    currencySelection: makeNodeComponent("currencySelection"),
    channelSelection: makeNodeComponent("channelSelection"),
    nextButton: makeNodeComponent("nextButton"),
    svg: makeNodeComponent("svg"),
    // Metadata about props expected for PlasmicWithdraw2ndStepModal
    internalVariantProps: PlasmicWithdraw2ndStepModal__VariantProps,
    internalArgProps: PlasmicWithdraw2ndStepModal__ArgProps
  }
);

export default PlasmicWithdraw2ndStepModal;
/* prettier-ignore-end */
