// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: ncwW2Qgif2pGwQDF81hXqa
// Component: 5nXKPJRaklYa
import * as React from "react";
import {
  PlasmicImg as PlasmicImg__,
  Stack as Stack__,
  Trans as Trans__,
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts,
  ensureGlobalVariants,
  hasVariant,
  useDollarState,
  usePlasmicTranslator
} from "@plasmicapp/react-web";
import { useDataEnv } from "@plasmicapp/react-web/lib/host";
import _01KButton from "../../_01KButton"; // plasmic-import: VENA7-JXpokg/component
import _1KButton from "../../_1KButton"; // plasmic-import: OnMFW3Jhk7Lt/component
import _10KButton from "../../_10KButton"; // plasmic-import: qKRiSytsZP5j/component
import Divider from "../../Divider"; // plasmic-import: MAHszRYQZTQZ/component
import { useScreenVariants as useScreenVariants_2BvNreuf1Eto } from "./PlasmicGlobalVariant__DesktopBase"; // plasmic-import: 2BVNreuf1ETO/globalVariant
import "@plasmicapp/react-web/lib/plasmic.css";
import plasmic_antd_5_hostless_css from "../antd_5_hostless/plasmic.module.css"; // plasmic-import: ohDidvG9XsCeFumugENU3J/projectcss
import plasmic_plasmic_rich_components_css from "../plasmic_rich_components/plasmic.module.css"; // plasmic-import: jkU633o1Cz7HrJdwdxhVHk/projectcss
import projectcss from "./plasmic.module.css"; // plasmic-import: ncwW2Qgif2pGwQDF81hXqa/projectcss
import sty from "./PlasmicAmountSelection.module.css"; // plasmic-import: 5nXKPJRaklYa/css
import Group9Icon from "./icons/PlasmicIcon__Group9"; // plasmic-import: -PyRtQ8Pw48U/icon
import Group10Icon from "./icons/PlasmicIcon__Group10"; // plasmic-import: mzyiIWJ5iBGF/icon
import group8WesPIlTwOgd from "./images/group8.svg"; // plasmic-import: wesP-ilTwOgd/picture

createPlasmicElementProxy;

export const PlasmicAmountSelection__VariantProps = new Array("amount");

export const PlasmicAmountSelection__ArgProps = new Array();

const $$ = {};

function PlasmicAmountSelection__RenderFunc(props) {
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
  const stateSpecs = React.useMemo(
    () => [
      {
        path: "amount",
        type: "private",
        variableType: "variant",
        initFunc: ({ $props, $state, $queries, $ctx }) => $props.amount
      }
    ],

    [$props, $ctx, $refs]
  );
  const $state = useDollarState(stateSpecs, {
    $props,
    $ctx,
    $queries: {},
    $refs
  });
  const globalVariants = ensureGlobalVariants({
    desktopBase: useScreenVariants_2BvNreuf1Eto()
  });
  return (
    <div
      data-plasmic-name={"amountSelection"}
      data-plasmic-override={overrides.amountSelection}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      className={classNames(
        projectcss.all,
        projectcss.root_reset,
        projectcss.plasmic_default_styles,
        projectcss.plasmic_mixins,
        projectcss.plasmic_tokens,
        plasmic_antd_5_hostless_css.plasmic_tokens,
        plasmic_plasmic_rich_components_css.plasmic_tokens,
        sty.amountSelection,
        {
          [sty.amountSelectionamount_unnamedVariant]: hasVariant(
            $state,
            "amount",
            "unnamedVariant"
          )
        }
      )}
    >
      <div
        data-plasmic-name={"amountSelectionBackground"}
        data-plasmic-override={overrides.amountSelectionBackground}
        className={classNames(projectcss.all, sty.amountSelectionBackground)}
      >
        <div className={classNames(projectcss.all, sty.freeBox__xKrE2)}>
          <div
            data-plasmic-name={"initialAmount"}
            data-plasmic-override={overrides.initialAmount}
            className={classNames(projectcss.all, sty.initialAmount)}
          >
            <div className={classNames(projectcss.all, sty.freeBox__mUhC)}>
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__xg4Kw
                )}
              >
                <Trans__>
                  {hasVariant(globalVariants, "desktopBase", "desktopOnly")
                    ? "\u53c2\u4e0e\u91d1\u989d:"
                    : "\u53c2\u4e0e\u91d1\u989d:"}
                </Trans__>
              </div>
            </div>
            <Stack__
              as={"div"}
              hasGap={true}
              className={classNames(projectcss.all, sty.freeBox___3PHWm)}
            >
              <Stack__
                as={"div"}
                hasGap={true}
                className={classNames(projectcss.all, sty.freeBox__gq3Y2)}
              >
                <_01KButton
                  chosen={
                    hasVariant($state, "amount", "unnamedVariant")
                      ? true
                      : undefined
                  }
                  className={classNames(
                    "__wab_instance",
                    sty._01KButton__kdb63,
                    {
                      [sty._01KButtonamount_unnamedVariant__kdb63Oh0GE]:
                        hasVariant($state, "amount", "unnamedVariant")
                    }
                  )}
                />

                <_1KButton
                  className={classNames(
                    "__wab_instance",
                    sty._1KButton___5ZnaA,
                    {
                      [sty._1KButtonamount_unnamedVariant___5ZnaAoh0GE]:
                        hasVariant($state, "amount", "unnamedVariant")
                    }
                  )}
                />

                <_10KButton
                  className={classNames(
                    "__wab_instance",
                    sty._10KButton__bChRc,
                    {
                      [sty._10KButtonamount_unnamedVariant__bChRcoh0GE]:
                        hasVariant($state, "amount", "unnamedVariant")
                    }
                  )}
                />
              </Stack__>
            </Stack__>
          </div>
          {(
            hasVariant(globalVariants, "desktopBase", "desktopOnly")
              ? true
              : false
          ) ? (
            <Divider
              className={classNames("__wab_instance", sty.divider___9V1Wj)}
              yellow={true}
            />
          ) : null}
          <div
            data-plasmic-name={"amountMultipler"}
            data-plasmic-override={overrides.amountMultipler}
            className={classNames(projectcss.all, sty.amountMultipler)}
          >
            <div
              data-plasmic-name={"rectangle4176"}
              data-plasmic-override={overrides.rectangle4176}
              className={classNames(projectcss.all, sty.rectangle4176)}
            >
              <div className={classNames(projectcss.all, sty.freeBox__cS5O)}>
                <div
                  data-plasmic-name={"curentAmount"}
                  data-plasmic-override={overrides.curentAmount}
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.curentAmount
                  )}
                >
                  <Trans__>{"200"}</Trans__>
                </div>
                <div
                  data-plasmic-name={"diamond"}
                  data-plasmic-override={overrides.diamond}
                  className={classNames(projectcss.all, sty.diamond)}
                >
                  <PlasmicImg__
                    alt={""}
                    className={classNames(sty.img__eu97S)}
                    displayHeight={
                      hasVariant(globalVariants, "desktopBase", "desktopOnly")
                        ? "24px"
                        : "15.016px"
                    }
                    displayMaxHeight={"none"}
                    displayMaxWidth={"100%"}
                    displayMinHeight={"0"}
                    displayMinWidth={"0"}
                    displayWidth={
                      hasVariant(globalVariants, "desktopBase", "desktopOnly")
                        ? "24px"
                        : "18px"
                    }
                    loading={"lazy"}
                    src={{
                      src: group8WesPIlTwOgd,
                      fullWidth: 18,
                      fullHeight: 15.016,
                      aspectRatio: 1.125
                    }}
                  />

                  <Group9Icon
                    className={classNames(projectcss.all, sty.svg___6GgLr)}
                    role={"img"}
                  />

                  <Group9Icon
                    className={classNames(projectcss.all, sty.svg__vbWq1)}
                    role={"img"}
                  />

                  <Group10Icon
                    className={classNames(projectcss.all, sty.svg__t3Dqy)}
                    role={"img"}
                  />
                </div>
              </div>
            </div>
            <div
              data-plasmic-name={"rectangle4178"}
              data-plasmic-override={overrides.rectangle4178}
              className={classNames(projectcss.all, sty.rectangle4178)}
            >
              <div className={classNames(projectcss.all, sty.freeBox__qLj4L)}>
                <div
                  data-plasmic-name={"half"}
                  data-plasmic-override={overrides.half}
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.half
                  )}
                >
                  <Trans__>{"\u00bd"}</Trans__>
                </div>
                <Divider
                  className={classNames("__wab_instance", sty.divider___9GHEu)}
                />

                <div
                  data-plasmic-name={"double"}
                  data-plasmic-override={overrides.double}
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.double
                  )}
                >
                  <Trans__>{"2\u00d7"}</Trans__>
                </div>
                <Divider
                  className={classNames("__wab_instance", sty.divider__skGCu)}
                />

                <div
                  data-plasmic-name={"_10Times"}
                  data-plasmic-override={overrides._10Times}
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty._10Times
                  )}
                >
                  <Trans__>{"10\u00d7"}</Trans__>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {(
        hasVariant(globalVariants, "desktopBase", "desktopOnly") ? true : false
      ) ? (
        <div
          data-plasmic-name={"amountSelectionBackground3"}
          data-plasmic-override={overrides.amountSelectionBackground3}
          className={classNames(projectcss.all, sty.amountSelectionBackground3)}
        >
          <div className={classNames(projectcss.all, sty.freeBox___7SYp6)}>
            <div
              data-plasmic-name={"initialAmount3"}
              data-plasmic-override={overrides.initialAmount3}
              className={classNames(projectcss.all, sty.initialAmount3)}
            >
              <div className={classNames(projectcss.all, sty.freeBox___2Vs55)}>
                <div
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text__t8RoD
                  )}
                >
                  <Trans__>
                    {hasVariant(globalVariants, "desktopBase", "desktopOnly")
                      ? "\u53c2\u4e0e\u91d1\u989d:"
                      : "\u53c2\u4e0e\u91d1\u989d:"}
                  </Trans__>
                </div>
                <div
                  data-plasmic-name={"rectangle4180"}
                  data-plasmic-override={overrides.rectangle4180}
                  className={classNames(projectcss.all, sty.rectangle4180)}
                >
                  <div
                    className={classNames(projectcss.all, sty.freeBox__vxBd8)}
                  >
                    <div
                      data-plasmic-name={"curentAmount3"}
                      data-plasmic-override={overrides.curentAmount3}
                      className={classNames(
                        projectcss.all,
                        projectcss.__wab_text,
                        sty.curentAmount3
                      )}
                    >
                      <Trans__>
                        {hasVariant(
                          globalVariants,
                          "desktopBase",
                          "desktopOnly"
                        )
                          ? "2,000"
                          : "200"}
                      </Trans__>
                    </div>
                    <div
                      data-plasmic-name={"diamond3"}
                      data-plasmic-override={overrides.diamond3}
                      className={classNames(projectcss.all, sty.diamond3)}
                    >
                      <PlasmicImg__
                        alt={""}
                        className={classNames(sty.img__jn7V3)}
                        displayHeight={
                          hasVariant(
                            globalVariants,
                            "desktopBase",
                            "desktopOnly"
                          )
                            ? "24px"
                            : "15.016px"
                        }
                        displayMaxHeight={"none"}
                        displayMaxWidth={"100%"}
                        displayMinHeight={"0"}
                        displayMinWidth={"0"}
                        displayWidth={
                          hasVariant(
                            globalVariants,
                            "desktopBase",
                            "desktopOnly"
                          )
                            ? "24px"
                            : "18px"
                        }
                        loading={"lazy"}
                        src={{
                          src: group8WesPIlTwOgd,
                          fullWidth: 18,
                          fullHeight: 15.016,
                          aspectRatio: 1.125
                        }}
                      />

                      <Group9Icon
                        className={classNames(projectcss.all, sty.svg___9I88)}
                        role={"img"}
                      />

                      <Group9Icon
                        className={classNames(projectcss.all, sty.svg__eCfBh)}
                        role={"img"}
                      />

                      <Group10Icon
                        className={classNames(projectcss.all, sty.svg__rneDw)}
                        role={"img"}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {(
              hasVariant(globalVariants, "desktopBase", "desktopOnly")
                ? true
                : false
            ) ? (
              <Divider
                className={classNames("__wab_instance", sty.divider__dULm4)}
                yellow={true}
              />
            ) : null}
            <div
              data-plasmic-name={"amountMultipler3"}
              data-plasmic-override={overrides.amountMultipler3}
              className={classNames(projectcss.all, sty.amountMultipler3)}
            >
              <div className={classNames(projectcss.all, sty.freeBox__ns3Kk)}>
                <Stack__
                  as={"div"}
                  hasGap={true}
                  className={classNames(projectcss.all, sty.freeBox___7GX5K)}
                >
                  <_01KButton
                    className={classNames(
                      "__wab_instance",
                      sty._01KButton__pEZpR
                    )}
                  />

                  <_1KButton
                    chosen={true}
                    className={classNames(
                      "__wab_instance",
                      sty._1KButton__jBm2Q
                    )}
                  />

                  <_10KButton
                    className={classNames(
                      "__wab_instance",
                      sty._10KButton__gRjGc
                    )}
                  />
                </Stack__>
                <div className={classNames(projectcss.all, sty.freeBox__opFob)}>
                  <div
                    data-plasmic-name={"rectangle4181"}
                    data-plasmic-override={overrides.rectangle4181}
                    className={classNames(projectcss.all, sty.rectangle4181)}
                  >
                    <div
                      className={classNames(projectcss.all, sty.freeBox__pGnvh)}
                    >
                      <div
                        data-plasmic-name={"half3"}
                        data-plasmic-override={overrides.half3}
                        className={classNames(
                          projectcss.all,
                          projectcss.__wab_text,
                          sty.half3
                        )}
                      >
                        <Trans__>{"\u00bd"}</Trans__>
                      </div>
                      <Divider
                        className={classNames(
                          "__wab_instance",
                          sty.divider__snCuG
                        )}
                      />

                      <div
                        data-plasmic-name={"double3"}
                        data-plasmic-override={overrides.double3}
                        className={classNames(
                          projectcss.all,
                          projectcss.__wab_text,
                          sty.double3
                        )}
                      >
                        <Trans__>{"2\u00d7"}</Trans__>
                      </div>
                      <Divider
                        className={classNames(
                          "__wab_instance",
                          sty.divider__qOiCg
                        )}
                      />

                      <div
                        data-plasmic-name={"_10Times3"}
                        data-plasmic-override={overrides._10Times3}
                        className={classNames(
                          projectcss.all,
                          projectcss.__wab_text,
                          sty._10Times3
                        )}
                      >
                        <Trans__>{"10\u00d7"}</Trans__>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}

const PlasmicDescendants = {
  amountSelection: [
    "amountSelection",
    "amountSelectionBackground",
    "initialAmount",
    "amountMultipler",
    "rectangle4176",
    "curentAmount",
    "diamond",
    "rectangle4178",
    "half",
    "double",
    "_10Times",
    "amountSelectionBackground3",
    "initialAmount3",
    "rectangle4180",
    "curentAmount3",
    "diamond3",
    "amountMultipler3",
    "rectangle4181",
    "half3",
    "double3",
    "_10Times3"
  ],

  amountSelectionBackground: [
    "amountSelectionBackground",
    "initialAmount",
    "amountMultipler",
    "rectangle4176",
    "curentAmount",
    "diamond",
    "rectangle4178",
    "half",
    "double",
    "_10Times"
  ],

  initialAmount: ["initialAmount"],
  amountMultipler: [
    "amountMultipler",
    "rectangle4176",
    "curentAmount",
    "diamond",
    "rectangle4178",
    "half",
    "double",
    "_10Times"
  ],

  rectangle4176: ["rectangle4176", "curentAmount", "diamond"],
  curentAmount: ["curentAmount"],
  diamond: ["diamond"],
  rectangle4178: ["rectangle4178", "half", "double", "_10Times"],
  half: ["half"],
  double: ["double"],
  _10Times: ["_10Times"],
  amountSelectionBackground3: [
    "amountSelectionBackground3",
    "initialAmount3",
    "rectangle4180",
    "curentAmount3",
    "diamond3",
    "amountMultipler3",
    "rectangle4181",
    "half3",
    "double3",
    "_10Times3"
  ],

  initialAmount3: [
    "initialAmount3",
    "rectangle4180",
    "curentAmount3",
    "diamond3"
  ],

  rectangle4180: ["rectangle4180", "curentAmount3", "diamond3"],
  curentAmount3: ["curentAmount3"],
  diamond3: ["diamond3"],
  amountMultipler3: [
    "amountMultipler3",
    "rectangle4181",
    "half3",
    "double3",
    "_10Times3"
  ],

  rectangle4181: ["rectangle4181", "half3", "double3", "_10Times3"],
  half3: ["half3"],
  double3: ["double3"],
  _10Times3: ["_10Times3"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: PlasmicDescendants[nodeName],
          internalArgPropNames: PlasmicAmountSelection__ArgProps,
          internalVariantPropNames: PlasmicAmountSelection__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicAmountSelection__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "amountSelection") {
    func.displayName = "PlasmicAmountSelection";
  } else {
    func.displayName = `PlasmicAmountSelection.${nodeName}`;
  }
  return func;
}

export const PlasmicAmountSelection = Object.assign(
  // Top-level PlasmicAmountSelection renders the root element
  makeNodeComponent("amountSelection"),
  {
    // Helper components rendering sub-elements
    amountSelectionBackground: makeNodeComponent("amountSelectionBackground"),
    initialAmount: makeNodeComponent("initialAmount"),
    amountMultipler: makeNodeComponent("amountMultipler"),
    rectangle4176: makeNodeComponent("rectangle4176"),
    curentAmount: makeNodeComponent("curentAmount"),
    diamond: makeNodeComponent("diamond"),
    rectangle4178: makeNodeComponent("rectangle4178"),
    half: makeNodeComponent("half"),
    double: makeNodeComponent("double"),
    _10Times: makeNodeComponent("_10Times"),
    amountSelectionBackground3: makeNodeComponent("amountSelectionBackground3"),
    initialAmount3: makeNodeComponent("initialAmount3"),
    rectangle4180: makeNodeComponent("rectangle4180"),
    curentAmount3: makeNodeComponent("curentAmount3"),
    diamond3: makeNodeComponent("diamond3"),
    amountMultipler3: makeNodeComponent("amountMultipler3"),
    rectangle4181: makeNodeComponent("rectangle4181"),
    half3: makeNodeComponent("half3"),
    double3: makeNodeComponent("double3"),
    _10Times3: makeNodeComponent("_10Times3"),
    // Metadata about props expected for PlasmicAmountSelection
    internalVariantProps: PlasmicAmountSelection__VariantProps,
    internalArgProps: PlasmicAmountSelection__ArgProps
  }
);

export default PlasmicAmountSelection;
/* prettier-ignore-end */
