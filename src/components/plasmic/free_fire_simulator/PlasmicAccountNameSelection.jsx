// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: ncwW2Qgif2pGwQDF81hXqa
// Component: zxbY7F-iXxmn
import * as React from "react";
import {
  PlasmicIcon as PlasmicIcon__,
  Trans as Trans__,
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts,
  hasVariant,
  renderPlasmicSlot,
  set as $stateSet,
  useDollarState,
  usePlasmicTranslator,
  useTrigger
} from "@plasmicapp/react-web";
import { useDataEnv } from "@plasmicapp/react-web/lib/host";
import * as pp from "@plasmicapp/react-web";
import AccountNameSelection__Overlay from "../../AccountNameSelection__Overlay"; // plasmic-import: gbzt5VrAf48M/component
import AccountNameSelection__Option from "../../AccountNameSelection__Option"; // plasmic-import: h_M3E9U_Kj7w/component
import AccountNameSelection__OptionGroup from "../../AccountNameSelection__OptionGroup"; // plasmic-import: g6ZPCAHzd_nV/component
import "@plasmicapp/react-web/lib/plasmic.css";
import plasmic_antd_5_hostless_css from "../antd_5_hostless/plasmic.module.css"; // plasmic-import: ohDidvG9XsCeFumugENU3J/projectcss
import plasmic_plasmic_rich_components_css from "../plasmic_rich_components/plasmic.module.css"; // plasmic-import: jkU633o1Cz7HrJdwdxhVHk/projectcss
import projectcss from "./plasmic.module.css"; // plasmic-import: ncwW2Qgif2pGwQDF81hXqa/projectcss
import sty from "./PlasmicAccountNameSelection.module.css"; // plasmic-import: zxbY7F-iXxmn/css
import ChevronDownSvgIcon from "./icons/PlasmicIcon__ChevronDownSvg"; // plasmic-import: 7FGkwQDhu9In/icon
import ChevronUpSvgIcon from "./icons/PlasmicIcon__ChevronUpSvg"; // plasmic-import: kIN6pcnwZSsg/icon

createPlasmicElementProxy;

export const PlasmicAccountNameSelection__VariantProps = new Array(
  "showPlaceholder",
  "isOpen",
  "isDisabled",
  "color"
);

export const PlasmicAccountNameSelection__ArgProps = new Array(
  "selectedContent",
  "placeholder",
  "children",
  "value",
  "name",
  "aria-label",
  "aria-labelledby",
  "options",
  "onChange"
);

const PlasmicAccountNameSelectionContext = React.createContext(undefined);

const $$ = {};

function PlasmicAccountNameSelection__RenderFunc(props) {
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
        path: "showPlaceholder",
        type: "private",
        variableType: "variant",
        initFunc: ({ $props, $state, $queries, $ctx }) => $props.showPlaceholder
      },
      {
        path: "isOpen",
        type: "private",
        variableType: "variant",
        initFunc: ({ $props, $state, $queries, $ctx }) => $props.isOpen
      },
      {
        path: "isDisabled",
        type: "private",
        variableType: "variant",
        initFunc: ({ $props, $state, $queries, $ctx }) => $props.isDisabled
      },
      {
        path: "color",
        type: "private",
        variableType: "variant",
        initFunc: ({ $props, $state, $queries, $ctx }) => $props.color
      },
      {
        path: "value",
        type: "writable",
        variableType: "text",
        valueProp: "value",
        onChangeProp: "onChange"
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
  const [isRootFocusVisibleWithin, triggerRootFocusVisibleWithinProps] =
    useTrigger("useFocusVisibleWithin", {
      isTextInput: false
    });
  const triggers = {
    focusVisibleWithin_root: isRootFocusVisibleWithin
  };
  return (
    <PlasmicAccountNameSelectionContext.Provider value={{ variants, args }}>
      <div
        data-plasmic-name={"root"}
        data-plasmic-override={overrides.root}
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
          sty.root,
          {
            [sty.root___focusVisibleWithin]: triggers.focusVisibleWithin_root,
            [sty.rootcolor_clear]: hasVariant($state, "color", "clear"),
            [sty.rootcolor_softBlue]: hasVariant($state, "color", "softBlue"),
            [sty.rootcolor_softCyan]: hasVariant($state, "color", "softCyan"),
            [sty.rootcolor_softGreen]: hasVariant($state, "color", "softGreen"),
            [sty.rootcolor_softOrange]: hasVariant(
              $state,
              "color",
              "softOrange"
            ),
            [sty.rootcolor_softPink]: hasVariant($state, "color", "softPink"),
            [sty.rootcolor_softPurple]: hasVariant(
              $state,
              "color",
              "softPurple"
            ),
            [sty.rootcolor_softRed]: hasVariant($state, "color", "softRed"),
            [sty.rootcolor_softYellow]: hasVariant(
              $state,
              "color",
              "softYellow"
            ),
            [sty.rootisOpen]: hasVariant($state, "isOpen", "isOpen")
          }
        )}
        data-plasmic-trigger-props={[triggerRootFocusVisibleWithinProps]}
      >
        <button
          data-plasmic-name={"trigger"}
          data-plasmic-override={overrides.trigger}
          className={classNames(
            projectcss.all,
            projectcss.button,
            sty.trigger,
            {
              [sty.trigger___focusVisibleWithin]:
                triggers.focusVisibleWithin_root,
              [sty.triggercolor_clear]: hasVariant($state, "color", "clear"),
              [sty.triggercolor_dark]: hasVariant($state, "color", "dark"),
              [sty.triggercolor_softBlue]: hasVariant(
                $state,
                "color",
                "softBlue"
              ),
              [sty.triggercolor_softCyan]: hasVariant(
                $state,
                "color",
                "softCyan"
              ),
              [sty.triggercolor_softGray]: hasVariant(
                $state,
                "color",
                "softGray"
              ),
              [sty.triggercolor_softGreen]: hasVariant(
                $state,
                "color",
                "softGreen"
              ),
              [sty.triggercolor_softOrange]: hasVariant(
                $state,
                "color",
                "softOrange"
              ),
              [sty.triggercolor_softPink]: hasVariant(
                $state,
                "color",
                "softPink"
              ),
              [sty.triggercolor_softPurple]: hasVariant(
                $state,
                "color",
                "softPurple"
              ),
              [sty.triggercolor_softRed]: hasVariant(
                $state,
                "color",
                "softRed"
              ),
              [sty.triggercolor_softYellow]: hasVariant(
                $state,
                "color",
                "softYellow"
              ),
              [sty.triggerisDisabled]: hasVariant(
                $state,
                "isDisabled",
                "isDisabled"
              ),
              [sty.triggerisOpen]: hasVariant($state, "isOpen", "isOpen"),
              [sty.triggershowPlaceholder]: hasVariant(
                $state,
                "showPlaceholder",
                "showPlaceholder"
              )
            }
          )}
          disabled={
            hasVariant($state, "isDisabled", "isDisabled") ? true : false
          }
          onClick={async event => {
            const $steps = {};
            $steps["updateValue"] = true
              ? (() => {
                  const actionArgs = {
                    variable: {
                      objRoot: $state,
                      variablePath: ["value"]
                    },
                    operation: 0
                  };
                  return (({ variable, value, startIndex, deleteCount }) => {
                    if (!variable) {
                      return;
                    }
                    const { objRoot, variablePath } = variable;
                    $stateSet(objRoot, variablePath, value);
                    return value;
                  })?.apply(null, [actionArgs]);
                })()
              : undefined;
            if (
              $steps["updateValue"] != null &&
              typeof $steps["updateValue"] === "object" &&
              typeof $steps["updateValue"].then === "function"
            ) {
              $steps["updateValue"] = await $steps["updateValue"];
            }
          }}
          ref={ref => {
            $refs["trigger"] = ref;
          }}
        >
          <div
            data-plasmic-name={"contentContainer"}
            data-plasmic-override={overrides.contentContainer}
            className={classNames(projectcss.all, sty.contentContainer, {
              [sty.contentContainercolor_dark]: hasVariant(
                $state,
                "color",
                "dark"
              ),
              [sty.contentContainercolor_softBlue]: hasVariant(
                $state,
                "color",
                "softBlue"
              ),
              [sty.contentContainerisDisabled]: hasVariant(
                $state,
                "isDisabled",
                "isDisabled"
              ),
              [sty.contentContainerisOpen]: hasVariant(
                $state,
                "isOpen",
                "isOpen"
              ),
              [sty.contentContainershowPlaceholder]: hasVariant(
                $state,
                "showPlaceholder",
                "showPlaceholder"
              )
            })}
          >
            {(
              hasVariant($state, "showPlaceholder", "showPlaceholder")
                ? false
                : true
            )
              ? renderPlasmicSlot({
                  defaultContents: <Trans__>{"Selected"}</Trans__>,
                  value: args.selectedContent,
                  className: classNames(sty.slotTargetSelectedContent, {
                    [sty.slotTargetSelectedContentcolor_softBlue]: hasVariant(
                      $state,
                      "color",
                      "softBlue"
                    ),
                    [sty.slotTargetSelectedContentcolor_softCyan]: hasVariant(
                      $state,
                      "color",
                      "softCyan"
                    ),
                    [sty.slotTargetSelectedContentcolor_softGreen]: hasVariant(
                      $state,
                      "color",
                      "softGreen"
                    ),
                    [sty.slotTargetSelectedContentcolor_softOrange]: hasVariant(
                      $state,
                      "color",
                      "softOrange"
                    ),
                    [sty.slotTargetSelectedContentcolor_softPink]: hasVariant(
                      $state,
                      "color",
                      "softPink"
                    ),
                    [sty.slotTargetSelectedContentcolor_softPurple]: hasVariant(
                      $state,
                      "color",
                      "softPurple"
                    ),
                    [sty.slotTargetSelectedContentcolor_softRed]: hasVariant(
                      $state,
                      "color",
                      "softRed"
                    ),
                    [sty.slotTargetSelectedContentcolor_softYellow]: hasVariant(
                      $state,
                      "color",
                      "softYellow"
                    ),
                    [sty.slotTargetSelectedContentisDisabled]: hasVariant(
                      $state,
                      "isDisabled",
                      "isDisabled"
                    ),
                    [sty.slotTargetSelectedContentisOpen]: hasVariant(
                      $state,
                      "isOpen",
                      "isOpen"
                    ),
                    [sty.slotTargetSelectedContentshowPlaceholder]: hasVariant(
                      $state,
                      "showPlaceholder",
                      "showPlaceholder"
                    )
                  })
                })
              : null}
            {(
              hasVariant($state, "showPlaceholder", "showPlaceholder")
                ? true
                : (() => {
                    try {
                      return !$state.value;
                    } catch (e) {
                      if (
                        e instanceof TypeError ||
                        e?.plasmicType === "PlasmicUndefinedDataError"
                      ) {
                        return false;
                      }
                      throw e;
                    }
                  })()
            )
              ? renderPlasmicSlot({
                  defaultContents: (
                    <Trans__>
                      {"\u8bf7\u9009\u62e9\u6536\u6b3e\u8d26\u6237\u2026"}
                    </Trans__>
                  ),

                  value: args.placeholder,
                  className: classNames(sty.slotTargetPlaceholder, {
                    [sty.slotTargetPlaceholder___focusVisibleWithin]:
                      triggers.focusVisibleWithin_root,
                    [sty.slotTargetPlaceholdercolor_clear]: hasVariant(
                      $state,
                      "color",
                      "clear"
                    ),
                    [sty.slotTargetPlaceholdercolor_dark]: hasVariant(
                      $state,
                      "color",
                      "dark"
                    ),
                    [sty.slotTargetPlaceholdercolor_softBlue]: hasVariant(
                      $state,
                      "color",
                      "softBlue"
                    ),
                    [sty.slotTargetPlaceholdercolor_softGray]: hasVariant(
                      $state,
                      "color",
                      "softGray"
                    ),
                    [sty.slotTargetPlaceholdercolor_softGreen_showPlaceholder]:
                      hasVariant(
                        $state,
                        "showPlaceholder",
                        "showPlaceholder"
                      ) && hasVariant($state, "color", "softGreen"),
                    [sty.slotTargetPlaceholdercolor_softPink_showPlaceholder]:
                      hasVariant(
                        $state,
                        "showPlaceholder",
                        "showPlaceholder"
                      ) && hasVariant($state, "color", "softPink"),
                    [sty.slotTargetPlaceholdercolor_softYellow_showPlaceholder]:
                      hasVariant(
                        $state,
                        "showPlaceholder",
                        "showPlaceholder"
                      ) && hasVariant($state, "color", "softYellow"),
                    [sty.slotTargetPlaceholderisDisabled]: hasVariant(
                      $state,
                      "isDisabled",
                      "isDisabled"
                    ),
                    [sty.slotTargetPlaceholderisOpen]: hasVariant(
                      $state,
                      "isOpen",
                      "isOpen"
                    ),
                    [sty.slotTargetPlaceholdershowPlaceholder]: hasVariant(
                      $state,
                      "showPlaceholder",
                      "showPlaceholder"
                    ),
                    [sty.slotTargetPlaceholdershowPlaceholder_color_dark]:
                      hasVariant(
                        $state,
                        "showPlaceholder",
                        "showPlaceholder"
                      ) && hasVariant($state, "color", "dark"),
                    [sty.slotTargetPlaceholdershowPlaceholder_color_softBlue]:
                      hasVariant(
                        $state,
                        "showPlaceholder",
                        "showPlaceholder"
                      ) && hasVariant($state, "color", "softBlue"),
                    [sty.slotTargetPlaceholdershowPlaceholder_color_softCyan]:
                      hasVariant(
                        $state,
                        "showPlaceholder",
                        "showPlaceholder"
                      ) && hasVariant($state, "color", "softCyan"),
                    [sty.slotTargetPlaceholdershowPlaceholder_color_softOrange]:
                      hasVariant(
                        $state,
                        "showPlaceholder",
                        "showPlaceholder"
                      ) && hasVariant($state, "color", "softOrange"),
                    [sty.slotTargetPlaceholdershowPlaceholder_color_softPurple]:
                      hasVariant($state, "color", "softPurple") &&
                      hasVariant($state, "showPlaceholder", "showPlaceholder"),
                    [sty.slotTargetPlaceholdershowPlaceholder_color_softRed]:
                      hasVariant(
                        $state,
                        "showPlaceholder",
                        "showPlaceholder"
                      ) && hasVariant($state, "color", "softRed")
                  })
                })
              : null}
          </div>
          <PlasmicIcon__
            data-plasmic-name={"dropdownIcon"}
            data-plasmic-override={overrides.dropdownIcon}
            PlasmicIconType={
              hasVariant($state, "isOpen", "isOpen")
                ? ChevronUpSvgIcon
                : ChevronDownSvgIcon
            }
            className={classNames(projectcss.all, sty.dropdownIcon, {
              [sty.dropdownIcon___focusVisibleWithin]:
                triggers.focusVisibleWithin_root,
              [sty.dropdownIconcolor_clear]: hasVariant(
                $state,
                "color",
                "clear"
              ),
              [sty.dropdownIconcolor_dark]: hasVariant($state, "color", "dark"),
              [sty.dropdownIconcolor_softBlue]: hasVariant(
                $state,
                "color",
                "softBlue"
              ),
              [sty.dropdownIconcolor_softCyan]: hasVariant(
                $state,
                "color",
                "softCyan"
              ),
              [sty.dropdownIconcolor_softGray]: hasVariant(
                $state,
                "color",
                "softGray"
              ),
              [sty.dropdownIconcolor_softGreen]: hasVariant(
                $state,
                "color",
                "softGreen"
              ),
              [sty.dropdownIconcolor_softOrange]: hasVariant(
                $state,
                "color",
                "softOrange"
              ),
              [sty.dropdownIconcolor_softPink]: hasVariant(
                $state,
                "color",
                "softPink"
              ),
              [sty.dropdownIconcolor_softPurple]: hasVariant(
                $state,
                "color",
                "softPurple"
              ),
              [sty.dropdownIconcolor_softRed]: hasVariant(
                $state,
                "color",
                "softRed"
              ),
              [sty.dropdownIconcolor_softYellow]: hasVariant(
                $state,
                "color",
                "softYellow"
              ),
              [sty.dropdownIconisDisabled]: hasVariant(
                $state,
                "isDisabled",
                "isDisabled"
              ),
              [sty.dropdownIconisOpen]: hasVariant($state, "isOpen", "isOpen"),
              [sty.dropdownIconshowPlaceholder]: hasVariant(
                $state,
                "showPlaceholder",
                "showPlaceholder"
              )
            })}
            role={"img"}
          />
        </button>
        <AccountNameSelection__Overlay
          data-plasmic-name={"overlay"}
          data-plasmic-override={overrides.overlay}
          className={classNames("__wab_instance", sty.overlay, {
            [sty.overlayisOpen]: hasVariant($state, "isOpen", "isOpen")
          })}
          relativePlacement={"bottom"}
        >
          <div
            data-plasmic-name={"optionsContainer"}
            data-plasmic-override={overrides.optionsContainer}
            className={classNames(projectcss.all, sty.optionsContainer, {
              [sty.optionsContainerisOpen]: hasVariant(
                $state,
                "isOpen",
                "isOpen"
              )
            })}
          >
            {renderPlasmicSlot({
              defaultContents: null,
              value: args.children
            })}
          </div>
        </AccountNameSelection__Overlay>
      </div>
    </PlasmicAccountNameSelectionContext.Provider>
  );
}

function useBehavior(props, ref) {
  if (!("options" in props)) {
  }
  return pp.useSelect(
    PlasmicAccountNameSelection,
    props,
    {
      ...{
        isOpenVariant: { group: "isOpen", variant: "isOpen" },
        placeholderVariant: {
          group: "showPlaceholder",
          variant: "showPlaceholder"
        },
        isDisabledVariant: { group: "isDisabled", variant: "isDisabled" },
        triggerContentSlot: "selectedContent",
        optionsSlot: "children",
        placeholderSlot: "placeholder",
        root: "root",
        trigger: "trigger",
        overlay: "overlay",
        optionsContainer: "optionsContainer"
      },
      OptionComponent: AccountNameSelection__Option,
      OptionGroupComponent: AccountNameSelection__OptionGroup
    },
    ref
  );
}

const PlasmicDescendants = {
  root: [
    "root",
    "trigger",
    "contentContainer",
    "dropdownIcon",
    "overlay",
    "optionsContainer"
  ],

  trigger: ["trigger", "contentContainer", "dropdownIcon"],
  contentContainer: ["contentContainer"],
  dropdownIcon: ["dropdownIcon"],
  overlay: ["overlay", "optionsContainer"],
  optionsContainer: ["optionsContainer"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: PlasmicDescendants[nodeName],
          internalArgPropNames: PlasmicAccountNameSelection__ArgProps,
          internalVariantPropNames: PlasmicAccountNameSelection__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicAccountNameSelection__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicAccountNameSelection";
  } else {
    func.displayName = `PlasmicAccountNameSelection.${nodeName}`;
  }
  return func;
}

export const PlasmicAccountNameSelection = Object.assign(
  // Top-level PlasmicAccountNameSelection renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    trigger: makeNodeComponent("trigger"),
    contentContainer: makeNodeComponent("contentContainer"),
    dropdownIcon: makeNodeComponent("dropdownIcon"),
    overlay: makeNodeComponent("overlay"),
    optionsContainer: makeNodeComponent("optionsContainer"),
    // Metadata about props expected for PlasmicAccountNameSelection
    internalVariantProps: PlasmicAccountNameSelection__VariantProps,
    internalArgProps: PlasmicAccountNameSelection__ArgProps,
    // Context for sub components
    Context: PlasmicAccountNameSelectionContext,
    useBehavior
  }
);

export default PlasmicAccountNameSelection;
/* prettier-ignore-end */
