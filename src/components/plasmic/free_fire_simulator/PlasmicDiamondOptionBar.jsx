// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: ncwW2Qgif2pGwQDF81hXqa
// Component: 98jyidEvWsmk
import * as React from "react";
import {
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts,
  ensureGlobalVariants,
  hasVariant,
  useDollarState,
  usePlasmicTranslator
} from "@plasmicapp/react-web";
import { useDataEnv } from "@plasmicapp/react-web/lib/host";
import DiamondOptions from "../../DiamondOptions"; // plasmic-import: jMxwgCFw66LF/component
import { useScreenVariants as useScreenVariants_2BvNreuf1Eto } from "./PlasmicGlobalVariant__DesktopBase"; // plasmic-import: 2BVNreuf1ETO/globalVariant
import "@plasmicapp/react-web/lib/plasmic.css";
import plasmic_antd_5_hostless_css from "../antd_5_hostless/plasmic.module.css"; // plasmic-import: ohDidvG9XsCeFumugENU3J/projectcss
import plasmic_plasmic_rich_components_css from "../plasmic_rich_components/plasmic.module.css"; // plasmic-import: jkU633o1Cz7HrJdwdxhVHk/projectcss
import projectcss from "./plasmic.module.css"; // plasmic-import: ncwW2Qgif2pGwQDF81hXqa/projectcss
import sty from "./PlasmicDiamondOptionBar.module.css"; // plasmic-import: 98jyidEvWsmk/css

createPlasmicElementProxy;

export const PlasmicDiamondOptionBar__VariantProps = new Array(
  "topUp",
  "withdraw"
);

export const PlasmicDiamondOptionBar__ArgProps = new Array();

const $$ = {};

function PlasmicDiamondOptionBar__RenderFunc(props) {
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
        path: "topUp",
        type: "private",
        variableType: "variant",
        initFunc: ({ $props, $state, $queries, $ctx }) => $props.topUp
      },
      {
        path: "withdraw",
        type: "private",
        variableType: "variant",
        initFunc: ({ $props, $state, $queries, $ctx }) => $props.withdraw
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
      data-plasmic-name={"group"}
      data-plasmic-override={overrides.group}
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
        sty.group,
        {
          [sty.grouptopUp__2ndBar]: hasVariant($state, "topUp", "_2ndBar"),
          [sty.groupwithdraw__1stBar]: hasVariant(
            $state,
            "withdraw",
            "_1stBar"
          ),
          [sty.groupwithdraw__2ndBar]: hasVariant($state, "withdraw", "_2ndBar")
        }
      )}
    >
      <div
        data-plasmic-name={"light"}
        data-plasmic-override={overrides.light}
        className={classNames(projectcss.all, sty.light)}
      />

      <div
        data-plasmic-name={"dark"}
        data-plasmic-override={overrides.dark}
        className={classNames(projectcss.all, sty.dark)}
      />

      <div
        className={classNames(projectcss.all, sty.freeBox__gkPh, {
          [sty.freeBoxtopUp__1stBar__gkPh2Itys]: hasVariant(
            $state,
            "topUp",
            "_1stBar"
          ),
          [sty.freeBoxtopUp__2ndBar__gkPhRlFd4]: hasVariant(
            $state,
            "topUp",
            "_2ndBar"
          ),
          [sty.freeBoxtopUp__3rdBar__gkPhU1Qig]: hasVariant(
            $state,
            "topUp",
            "_3rdBar"
          ),
          [sty.freeBoxwithdraw__2ndBar__gkPhHvNvR]: hasVariant(
            $state,
            "withdraw",
            "_2ndBar"
          )
        })}
      >
        <DiamondOptions
          chosen={hasVariant($state, "withdraw", "_1stBar") ? true : undefined}
          className={classNames("__wab_instance", sty.diamondOptions__wGgeA, {
            [sty.diamondOptionstopUp__1stBar__wGgeA2Itys]: hasVariant(
              $state,
              "topUp",
              "_1stBar"
            ),
            [sty.diamondOptionstopUp__2ndBar__wGgeArlFd4]: hasVariant(
              $state,
              "topUp",
              "_2ndBar"
            ),
            [sty.diamondOptionstopUp__3rdBar__wGgeAu1Qig]: hasVariant(
              $state,
              "topUp",
              "_3rdBar"
            ),
            [sty.diamondOptionswithdraw__1stBar__wGgeAqlxap]: hasVariant(
              $state,
              "withdraw",
              "_1stBar"
            ),
            [sty.diamondOptionswithdraw__2ndBar__wGgeAhvNvR]: hasVariant(
              $state,
              "withdraw",
              "_2ndBar"
            ),
            [sty.diamondOptionswithdraw__3rdBar__wGgeA7Hk5X]: hasVariant(
              $state,
              "withdraw",
              "_3rdBar"
            )
          })}
          usdtAmount={
            hasVariant($state, "withdraw", "_3rdBar")
              ? ["_1000000"]
              : hasVariant($state, "withdraw", "_2ndBar") &&
                hasVariant(globalVariants, "desktopBase", "desktopOnly")
              ? ["_500000"]
              : hasVariant($state, "withdraw", "_2ndBar")
              ? ["_100000"]
              : hasVariant($state, "withdraw", "_1stBar")
              ? ["_10000"]
              : hasVariant($state, "topUp", "_3rdBar")
              ? ["_100000"]
              : hasVariant($state, "topUp", "_2ndBar") &&
                hasVariant(globalVariants, "desktopBase", "desktopOnly")
              ? ["_50000"]
              : hasVariant($state, "topUp", "_2ndBar")
              ? ["_10000"]
              : hasVariant($state, "topUp", "_1stBar")
              ? ["_1000"]
              : ["_1000"]
          }
        />

        <DiamondOptions
          chosen={
            hasVariant($state, "withdraw", "_3rdBar")
              ? undefined
              : hasVariant($state, "withdraw", "_2ndBar")
              ? undefined
              : hasVariant($state, "withdraw", "_1stBar")
              ? undefined
              : hasVariant($state, "topUp", "_3rdBar")
              ? undefined
              : hasVariant($state, "topUp", "_2ndBar")
              ? undefined
              : hasVariant($state, "topUp", "_1stBar")
              ? true
              : true
          }
          className={classNames("__wab_instance", sty.diamondOptions__wswXk, {
            [sty.diamondOptionstopUp__1stBar__wswXk2Itys]: hasVariant(
              $state,
              "topUp",
              "_1stBar"
            ),
            [sty.diamondOptionstopUp__2ndBar__wswXkRlFd4]: hasVariant(
              $state,
              "topUp",
              "_2ndBar"
            ),
            [sty.diamondOptionstopUp__3rdBar__wswXku1Qig]: hasVariant(
              $state,
              "topUp",
              "_3rdBar"
            ),
            [sty.diamondOptionswithdraw__1stBar__wswXkqlxap]: hasVariant(
              $state,
              "withdraw",
              "_1stBar"
            ),
            [sty.diamondOptionswithdraw__2ndBar__wswXkhvNvR]: hasVariant(
              $state,
              "withdraw",
              "_2ndBar"
            ),
            [sty.diamondOptionswithdraw__3rdBar__wswXk7Hk5X]: hasVariant(
              $state,
              "withdraw",
              "_3rdBar"
            )
          })}
          usdtAmount={
            hasVariant($state, "withdraw", "_3rdBar")
              ? ["_2000000"]
              : hasVariant($state, "withdraw", "_2ndBar") &&
                hasVariant(globalVariants, "desktopBase", "desktopOnly")
              ? ["_1000000"]
              : hasVariant($state, "withdraw", "_2ndBar")
              ? ["_200000"]
              : hasVariant($state, "withdraw", "_1stBar")
              ? ["_20000"]
              : hasVariant($state, "topUp", "_3rdBar")
              ? ["_200000"]
              : hasVariant($state, "topUp", "_2ndBar") &&
                hasVariant(globalVariants, "desktopBase", "desktopOnly")
              ? []
              : hasVariant($state, "topUp", "_2ndBar")
              ? ["_20000"]
              : hasVariant($state, "topUp", "_1stBar")
              ? ["_2000"]
              : ["_2000"]
          }
        />

        <DiamondOptions
          className={classNames("__wab_instance", sty.diamondOptions__xIgQ9, {
            [sty.diamondOptionstopUp__1stBar__xIgQ92Itys]: hasVariant(
              $state,
              "topUp",
              "_1stBar"
            ),
            [sty.diamondOptionstopUp__2ndBar__xIgQ9RlFd4]: hasVariant(
              $state,
              "topUp",
              "_2ndBar"
            ),
            [sty.diamondOptionstopUp__3rdBar__xIgQ9U1Qig]: hasVariant(
              $state,
              "topUp",
              "_3rdBar"
            ),
            [sty.diamondOptionswithdraw__1stBar__xIgQ9Qlxap]: hasVariant(
              $state,
              "withdraw",
              "_1stBar"
            ),
            [sty.diamondOptionswithdraw__2ndBar__xIgQ9HvNvR]: hasVariant(
              $state,
              "withdraw",
              "_2ndBar"
            ),
            [sty.diamondOptionswithdraw__3rdBar__xIgQ97Hk5X]: hasVariant(
              $state,
              "withdraw",
              "_3rdBar"
            )
          })}
          usdtAmount={
            hasVariant($state, "withdraw", "_2ndBar") &&
            hasVariant(globalVariants, "desktopBase", "desktopOnly")
              ? ["_2000000"]
              : hasVariant($state, "withdraw", "_2ndBar")
              ? ["_500000"]
              : hasVariant($state, "withdraw", "_1stBar")
              ? ["_50000"]
              : hasVariant($state, "topUp", "_3rdBar")
              ? ["_500000"]
              : hasVariant($state, "topUp", "_2ndBar") &&
                hasVariant(globalVariants, "desktopBase", "desktopOnly")
              ? ["_200000"]
              : hasVariant($state, "topUp", "_2ndBar")
              ? ["_50000"]
              : ["_5000"]
          }
        />

        {(
          hasVariant($state, "withdraw", "_2ndBar") &&
          hasVariant(globalVariants, "desktopBase", "desktopOnly")
            ? true
            : hasVariant(globalVariants, "desktopBase", "desktopOnly")
            ? true
            : false
        ) ? (
          <DiamondOptions
            className={classNames("__wab_instance", sty.diamondOptions__kt1N, {
              [sty.diamondOptionstopUp__1stBar__kt1N2Itys]: hasVariant(
                $state,
                "topUp",
                "_1stBar"
              ),
              [sty.diamondOptionstopUp__2ndBar__kt1NRlFd4]: hasVariant(
                $state,
                "topUp",
                "_2ndBar"
              ),
              [sty.diamondOptionstopUp__3rdBar__kt1Nu1Qig]: hasVariant(
                $state,
                "topUp",
                "_3rdBar"
              ),
              [sty.diamondOptionswithdraw__1stBar__kt1Nqlxap]: hasVariant(
                $state,
                "withdraw",
                "_1stBar"
              ),
              [sty.diamondOptionswithdraw__2ndBar__kt1NhvNvR]: hasVariant(
                $state,
                "withdraw",
                "_2ndBar"
              )
            })}
            usdtAmount={
              hasVariant($state, "withdraw", "_1stBar") &&
              hasVariant(globalVariants, "desktopBase", "desktopOnly")
                ? ["_100000"]
                : hasVariant($state, "topUp", "_3rdBar")
                ? ["_500000"]
                : hasVariant($state, "topUp", "_2ndBar") &&
                  hasVariant(globalVariants, "desktopBase", "desktopOnly")
                ? ["_500000"]
                : hasVariant($state, "topUp", "_2ndBar")
                ? ["_50000"]
                : hasVariant(globalVariants, "desktopBase", "desktopOnly")
                ? ["_10000"]
                : ["_5000"]
            }
          />
        ) : null}
        {(
          hasVariant($state, "withdraw", "_2ndBar") &&
          hasVariant(globalVariants, "desktopBase", "desktopOnly")
            ? true
            : hasVariant($state, "topUp", "_2ndBar") &&
              hasVariant(globalVariants, "desktopBase", "desktopOnly")
            ? true
            : hasVariant(globalVariants, "desktopBase", "desktopOnly")
            ? true
            : false
        ) ? (
          <DiamondOptions
            className={classNames("__wab_instance", sty.diamondOptions__ha0Fs, {
              [sty.diamondOptionstopUp__1stBar__ha0Fs2Itys]: hasVariant(
                $state,
                "topUp",
                "_1stBar"
              ),
              [sty.diamondOptionstopUp__2ndBar__ha0FsrlFd4]: hasVariant(
                $state,
                "topUp",
                "_2ndBar"
              ),
              [sty.diamondOptionstopUp__3rdBar__ha0FSu1Qig]: hasVariant(
                $state,
                "topUp",
                "_3rdBar"
              ),
              [sty.diamondOptionswithdraw__1stBar__ha0FSqlxap]: hasVariant(
                $state,
                "withdraw",
                "_1stBar"
              ),
              [sty.diamondOptionswithdraw__2ndBar__ha0FShvNvR]: hasVariant(
                $state,
                "withdraw",
                "_2ndBar"
              )
            })}
            usdtAmount={
              hasVariant($state, "withdraw", "_1stBar") &&
              hasVariant(globalVariants, "desktopBase", "desktopOnly")
                ? ["_200000"]
                : hasVariant($state, "topUp", "_3rdBar")
                ? ["_500000"]
                : hasVariant($state, "topUp", "_2ndBar")
                ? ["_50000"]
                : hasVariant(globalVariants, "desktopBase", "desktopOnly")
                ? ["_20000"]
                : ["_5000"]
            }
          />
        ) : null}
        <div
          className={classNames(projectcss.all, sty.freeBox__imnHs, {
            [sty.freeBoxtopUp__2ndBar__imnHsrlFd4]: hasVariant(
              $state,
              "topUp",
              "_2ndBar"
            ),
            [sty.freeBoxwithdraw__2ndBar__imnHShvNvR]: hasVariant(
              $state,
              "withdraw",
              "_2ndBar"
            ),
            [sty.freeBoxwithdraw__3rdBar__imnHs7Hk5X]: hasVariant(
              $state,
              "withdraw",
              "_3rdBar"
            )
          })}
        />

        {(
          hasVariant($state, "withdraw", "_3rdBar")
            ? true
            : hasVariant($state, "withdraw", "_2ndBar") &&
              hasVariant(globalVariants, "desktopBase", "desktopOnly")
            ? true
            : hasVariant($state, "topUp", "_2ndBar") &&
              hasVariant(globalVariants, "desktopBase", "desktopOnly")
            ? true
            : hasVariant(globalVariants, "desktopBase", "desktopOnly")
            ? true
            : false
        ) ? (
          <div
            className={classNames(projectcss.all, sty.freeBox__vzMgl, {
              [sty.freeBoxtopUp__2ndBar__vzMglrlFd4]: hasVariant(
                $state,
                "topUp",
                "_2ndBar"
              ),
              [sty.freeBoxwithdraw__2ndBar__vzMgLhvNvR]: hasVariant(
                $state,
                "withdraw",
                "_2ndBar"
              ),
              [sty.freeBoxwithdraw__3rdBar__vzMgl7Hk5X]: hasVariant(
                $state,
                "withdraw",
                "_3rdBar"
              )
            })}
          />
        ) : null}
      </div>
    </div>
  );
}

const PlasmicDescendants = {
  group: ["group", "light", "dark"],
  light: ["light"],
  dark: ["dark"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: PlasmicDescendants[nodeName],
          internalArgPropNames: PlasmicDiamondOptionBar__ArgProps,
          internalVariantPropNames: PlasmicDiamondOptionBar__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicDiamondOptionBar__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "group") {
    func.displayName = "PlasmicDiamondOptionBar";
  } else {
    func.displayName = `PlasmicDiamondOptionBar.${nodeName}`;
  }
  return func;
}

export const PlasmicDiamondOptionBar = Object.assign(
  // Top-level PlasmicDiamondOptionBar renders the root element
  makeNodeComponent("group"),
  {
    // Helper components rendering sub-elements
    light: makeNodeComponent("light"),
    dark: makeNodeComponent("dark"),
    // Metadata about props expected for PlasmicDiamondOptionBar
    internalVariantProps: PlasmicDiamondOptionBar__VariantProps,
    internalArgProps: PlasmicDiamondOptionBar__ArgProps
  }
);

export default PlasmicDiamondOptionBar;
/* prettier-ignore-end */
