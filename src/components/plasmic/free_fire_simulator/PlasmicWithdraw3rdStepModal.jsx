// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: ncwW2Qgif2pGwQDF81hXqa
// Component: f_d7OmVST3AG
import * as React from "react";
import {
  Stack as Stack__,
  Trans as Trans__,
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts,
  ensureGlobalVariants,
  generateStateOnChangeProp,
  generateStateValueProp,
  hasVariant,
  renderPlasmicSlot,
  useDollarState,
  usePlasmicTranslator
} from "@plasmicapp/react-web";
import { useDataEnv } from "@plasmicapp/react-web/lib/host";
import AccountNameSelection from "../../AccountNameSelection"; // plasmic-import: zxbY7F-iXxmn/component
import WithdrawAccount from "../../WithdrawAccount"; // plasmic-import: mIIGLT5R8ZWH/component
import Divider from "../../Divider"; // plasmic-import: MAHszRYQZTQZ/component
import Checkbox from "../../Checkbox"; // plasmic-import: zOFAy3URl6dh/component
import SaveAccountInfo from "../../SaveAccountInfo"; // plasmic-import: CnVe_01iYRQK/component
import TextInput from "../../TextInput"; // plasmic-import: OwAPyM2I9Q1G/component
import NextButton from "../../NextButton"; // plasmic-import: Av2xkV_SUoiq/component
import { useScreenVariants as useScreenVariants_2BvNreuf1Eto } from "./PlasmicGlobalVariant__DesktopBase"; // plasmic-import: 2BVNreuf1ETO/globalVariant
import "@plasmicapp/react-web/lib/plasmic.css";
import plasmic_antd_5_hostless_css from "../antd_5_hostless/plasmic.module.css"; // plasmic-import: ohDidvG9XsCeFumugENU3J/projectcss
import plasmic_plasmic_rich_components_css from "../plasmic_rich_components/plasmic.module.css"; // plasmic-import: jkU633o1Cz7HrJdwdxhVHk/projectcss
import projectcss from "./plasmic.module.css"; // plasmic-import: ncwW2Qgif2pGwQDF81hXqa/projectcss
import sty from "./PlasmicWithdraw3rdStepModal.module.css"; // plasmic-import: f_d7OmVST3AG/css
import BackButtonSvgIcon from "./icons/PlasmicIcon__BackButtonSvg"; // plasmic-import: 62NNR1D0AqJT/icon
import Layer22Icon from "./icons/PlasmicIcon__Layer22"; // plasmic-import: SIu0NpOppXl6/icon
import RightSvgIcon from "./icons/PlasmicIcon__RightSvg"; // plasmic-import: JTHnt52H6OfL/icon

createPlasmicElementProxy;

export const PlasmicWithdraw3rdStepModal__VariantProps = new Array("type");

export const PlasmicWithdraw3rdStepModal__ArgProps = new Array("children");

const $$ = {};

function PlasmicWithdraw3rdStepModal__RenderFunc(props) {
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
        path: "accountSelection.value",
        type: "private",
        variableType: "text",
        initFunc: ({ $props, $state, $queries, $ctx }) => undefined
      },
      {
        path: "checkbox.isChecked",
        type: "private",
        variableType: "boolean",
        initFunc: ({ $props, $state, $queries, $ctx }) => undefined
      },
      {
        path: "textInput.value",
        type: "private",
        variableType: "text",
        initFunc: ({ $props, $state, $queries, $ctx }) => ""
      },
      {
        path: "textInput2.value",
        type: "private",
        variableType: "text",
        initFunc: ({ $props, $state, $queries, $ctx }) => ""
      },
      {
        path: "newInfo",
        type: "private",
        variableType: "boolean",
        initFunc: ({ $props, $state, $queries, $ctx }) => false
      },
      {
        path: "type",
        type: "private",
        variableType: "variant",
        initFunc: ({ $props, $state, $queries, $ctx }) => $props.type
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
        sty.profileModal,
        {
          [sty.profileModaltype_crypto]: hasVariant($state, "type", "crypto"),
          [sty.profileModaltype_fiat]: hasVariant($state, "type", "fiat")
        }
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
            sty.text__ap0N
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
        data-plasmic-name={"chooseDiamonds"}
        data-plasmic-override={overrides.chooseDiamonds}
        hasGap={true}
        className={classNames(projectcss.all, sty.chooseDiamonds)}
      >
        <div
          data-plasmic-name={"group44117"}
          data-plasmic-override={overrides.group44117}
          className={classNames(projectcss.all, sty.group44117, {
            [sty.group44117type_crypto]: hasVariant($state, "type", "crypto")
          })}
        >
          <div
            className={classNames(projectcss.all, sty.freeBox__kJnh0, {
              [sty.freeBoxtype_crypto__kJnh0HccPz]: hasVariant(
                $state,
                "type",
                "crypto"
              )
            })}
          >
            <div
              data-plasmic-name={"_4\u8d26\u6237\u586b\u5199"}
              data-plasmic-override={overrides._4账户填写}
              className={classNames(projectcss.all, sty._4账户填写)}
            >
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text___7Rn0I
                )}
              >
                <Trans__>{"4. \u8d26\u6237\u586b\u5199"}</Trans__>
              </div>
            </div>
            <div
              data-plasmic-name={"accountName"}
              data-plasmic-override={overrides.accountName}
              className={classNames(projectcss.all, sty.accountName, {
                [sty.accountNametype_crypto]: hasVariant(
                  $state,
                  "type",
                  "crypto"
                )
              })}
            >
              <div className={classNames(projectcss.all, sty.freeBox__kfsLr)}>
                <div className={classNames(projectcss.all, sty.freeBox__fcxRv)}>
                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__jziDm
                    )}
                  >
                    <Trans__>
                      {hasVariant(globalVariants, "desktopBase", "desktopOnly")
                        ? "\u8d26\u6237\u59d3\u540d "
                        : "\u8d26\u6237\u59d3\u540d "}
                    </Trans__>
                  </div>
                </div>
                <AccountNameSelection
                  data-plasmic-name={"accountSelection"}
                  data-plasmic-override={overrides.accountSelection}
                  className={classNames(
                    "__wab_instance",
                    sty.accountSelection,
                    {
                      [sty.accountSelectiontype_crypto]: hasVariant(
                        $state,
                        "type",
                        "crypto"
                      )
                    }
                  )}
                  onChange={(...eventArgs) => {
                    generateStateOnChangeProp($state, [
                      "accountSelection",
                      "value"
                    ])(eventArgs[0]);
                  }}
                  options={(() => {
                    const __composite = [
                      { value: null, label: null },
                      { value: null, label: null }
                    ];

                    __composite["0"]["value"] = "Elon Musk";
                    __composite["0"]["label"] = "Elon Musk";
                    __composite["1"]["value"] = "Jensen Huang";
                    __composite["1"]["label"] = "Jensen Huang";
                    return __composite;
                  })()}
                  placeholder={
                    <div
                      className={classNames(
                        projectcss.all,
                        projectcss.__wab_text,
                        sty.text___1It
                      )}
                    >
                      <Trans__>
                        {
                          "\u5df2\u4f7f\u7528\u8fc7\u7684\u8d26\u6237\u59d3\u540d\u2026"
                        }
                      </Trans__>
                    </div>
                  }
                  value={generateStateValueProp($state, [
                    "accountSelection",
                    "value"
                  ])}
                />
              </div>
            </div>
            <WithdrawAccount
              data-plasmic-name={"withdrawAccount"}
              data-plasmic-override={overrides.withdrawAccount}
              className={classNames("__wab_instance", sty.withdrawAccount, {
                [sty.withdrawAccounttype_crypto]: hasVariant(
                  $state,
                  "type",
                  "crypto"
                )
              })}
              type={
                hasVariant($state, "type", "crypto") ? ["crypto"] : undefined
              }
            />
          </div>
          <div className={classNames(projectcss.all, sty.freeBox___92WiZ)}>
            <div
              data-plasmic-name={"\u5907\u6ce8"}
              data-plasmic-override={overrides.备注}
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.备注
              )}
            >
              <Trans__>
                {
                  "*\u53ea\u8bb0\u5f55\u63d0\u6b3e\u6210\u529f\u7684\u8d26\u6237\u4fe1\u606f"
                }
              </Trans__>
            </div>
          </div>
          <Stack__
            as={"div"}
            hasGap={true}
            className={classNames(projectcss.all, sty.freeBox__k8YZf)}
          >
            <Divider
              authPage={"horizontal"}
              className={classNames("__wab_instance", sty.divider___4HdIs)}
              color={["gray"]}
            />

            <div className={classNames(projectcss.all, sty.freeBox__pkbqz)}>
              {renderPlasmicSlot({
                defaultContents: <Trans__>{"or"}</Trans__>,
                value: args.children,
                className: classNames(sty.slotTargetChildren)
              })}
            </div>
            <Divider
              authPage={"horizontal"}
              className={classNames("__wab_instance", sty.divider__b9ZOr)}
              color={["gray"]}
            />
          </Stack__>
          <div className={classNames(projectcss.all, sty.freeBox___2Et28)}>
            <div className={classNames(projectcss.all, sty.freeBox__jwDi4)}>
              <Checkbox
                data-plasmic-name={"checkbox"}
                data-plasmic-override={overrides.checkbox}
                className={classNames("__wab_instance", sty.checkbox)}
                isChecked={
                  generateStateValueProp($state, ["checkbox", "isChecked"]) ??
                  false
                }
                onChange={(...eventArgs) => {
                  generateStateOnChangeProp($state, ["checkbox", "isChecked"])(
                    eventArgs[0]
                  );
                }}
              >
                <div
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text__tVd46
                  )}
                >
                  <Trans__>{"\u586b\u5199\u65b0\u7684\u4fe1\u606f"}</Trans__>
                </div>
              </Checkbox>
              <div className={classNames(projectcss.all, sty.freeBox__vCqcy)}>
                <SaveAccountInfo
                  data-plasmic-name={"saveAccountInfo"}
                  data-plasmic-override={overrides.saveAccountInfo}
                  className={classNames("__wab_instance", sty.saveAccountInfo)}
                  isDisabled={(() => {
                    try {
                      return !$state.checkbox.isChecked;
                    } catch (e) {
                      if (
                        e instanceof TypeError ||
                        e?.plasmicType === "PlasmicUndefinedDataError"
                      ) {
                        return [];
                      }
                      throw e;
                    }
                  })()}
                >
                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__qPSe
                    )}
                  >
                    <Trans__>{"\u4fdd\u5b58\u4fe1\u606f"}</Trans__>
                  </div>
                </SaveAccountInfo>
              </div>
            </div>
            <div
              data-plasmic-name={"accountNumber2"}
              data-plasmic-override={overrides.accountNumber2}
              className={classNames(projectcss.all, sty.accountNumber2, {
                [sty.accountNumber2type_crypto]: hasVariant(
                  $state,
                  "type",
                  "crypto"
                )
              })}
            >
              <div className={classNames(projectcss.all, sty.freeBox__oMo6J)}>
                <div
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text__edVjp
                  )}
                >
                  <Trans__>{"\u586b\u5199\u6536\u6b3e\u8d26\u6237"}</Trans__>
                </div>
              </div>
              <TextInput
                data-plasmic-name={"textInput"}
                data-plasmic-override={overrides.textInput}
                className={classNames("__wab_instance", sty.textInput, {
                  [sty.textInputtype_crypto]: hasVariant(
                    $state,
                    "type",
                    "crypto"
                  )
                })}
                isDisabled={(() => {
                  try {
                    return !$state.checkbox.isChecked;
                  } catch (e) {
                    if (
                      e instanceof TypeError ||
                      e?.plasmicType === "PlasmicUndefinedDataError"
                    ) {
                      return [];
                    }
                    throw e;
                  }
                })()}
                onChange={(...eventArgs) => {
                  generateStateOnChangeProp($state, ["textInput", "value"])(
                    (e => e.target?.value).apply(null, eventArgs)
                  );
                }}
                value={
                  generateStateValueProp($state, ["textInput", "value"]) ?? ""
                }
              />
            </div>
            <div
              data-plasmic-name={"accountNumber3"}
              data-plasmic-override={overrides.accountNumber3}
              className={classNames(projectcss.all, sty.accountNumber3)}
            >
              <div className={classNames(projectcss.all, sty.freeBox__vsAj9)}>
                <div
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text__sMLy3,
                    {
                      [sty.texttype_crypto__sMLy3HccPz]: hasVariant(
                        $state,
                        "type",
                        "crypto"
                      )
                    }
                  )}
                >
                  <Trans__>
                    {hasVariant($state, "type", "crypto")
                      ? "\u586b\u5199\u6570\u5b57\u8d27\u5e01\u94b1\u5305"
                      : "\u586b\u5199\u6536\u6b3e\u8d26\u6237"}
                  </Trans__>
                </div>
              </div>
              <TextInput
                data-plasmic-name={"textInput2"}
                data-plasmic-override={overrides.textInput2}
                className={classNames("__wab_instance", sty.textInput2, {
                  [sty.textInput2type_crypto]: hasVariant(
                    $state,
                    "type",
                    "crypto"
                  )
                })}
                isDisabled={(() => {
                  try {
                    return !$state.checkbox.isChecked;
                  } catch (e) {
                    if (
                      e instanceof TypeError ||
                      e?.plasmicType === "PlasmicUndefinedDataError"
                    ) {
                      return [];
                    }
                    throw e;
                  }
                })()}
                onChange={(...eventArgs) => {
                  generateStateOnChangeProp($state, ["textInput2", "value"])(
                    (e => e.target?.value).apply(null, eventArgs)
                  );
                }}
                placeholder={
                  hasVariant($state, "type", "crypto")
                    ? "Example: Tabc\u2026\u20261234"
                    : "Example: AaBbCcDd12345678"
                }
                value={
                  generateStateValueProp($state, ["textInput2", "value"]) ?? ""
                }
              />
            </div>
          </div>
        </div>
        <div className={classNames(projectcss.all, sty.freeBox__zxJdU)}>
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
                sty.text__aPaoe
              )}
            >
              <Trans__>
                {
                  <React.Fragment>
                    <span
                      className={"plasmic_default__all plasmic_default__span"}
                      style={{ color: "#000000" }}
                    >
                      {"\u7acb\u5373\u5151\u6362"}
                    </span>
                  </React.Fragment>
                }
              </Trans__>
            </div>
          </NextButton>
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
    "chooseDiamonds",
    "group44117",
    "_4\u8d26\u6237\u586b\u5199",
    "accountName",
    "accountSelection",
    "withdrawAccount",
    "\u5907\u6ce8",
    "checkbox",
    "saveAccountInfo",
    "accountNumber2",
    "textInput",
    "accountNumber3",
    "textInput2",
    "nextButton",
    "svg"
  ],

  profileHeader: ["profileHeader", "closeModal2", "closeModal"],
  closeModal2: ["closeModal2"],
  closeModal: ["closeModal"],
  chooseDiamonds: [
    "chooseDiamonds",
    "group44117",
    "_4\u8d26\u6237\u586b\u5199",
    "accountName",
    "accountSelection",
    "withdrawAccount",
    "\u5907\u6ce8",
    "checkbox",
    "saveAccountInfo",
    "accountNumber2",
    "textInput",
    "accountNumber3",
    "textInput2",
    "nextButton",
    "svg"
  ],

  group44117: [
    "group44117",
    "_4\u8d26\u6237\u586b\u5199",
    "accountName",
    "accountSelection",
    "withdrawAccount",
    "\u5907\u6ce8",
    "checkbox",
    "saveAccountInfo",
    "accountNumber2",
    "textInput",
    "accountNumber3",
    "textInput2"
  ],

  _4账户填写: ["_4\u8d26\u6237\u586b\u5199"],
  accountName: ["accountName", "accountSelection"],
  accountSelection: ["accountSelection"],
  withdrawAccount: ["withdrawAccount"],
  备注: ["\u5907\u6ce8"],
  checkbox: ["checkbox"],
  saveAccountInfo: ["saveAccountInfo"],
  accountNumber2: ["accountNumber2", "textInput"],
  textInput: ["textInput"],
  accountNumber3: ["accountNumber3", "textInput2"],
  textInput2: ["textInput2"],
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
          internalArgPropNames: PlasmicWithdraw3rdStepModal__ArgProps,
          internalVariantPropNames: PlasmicWithdraw3rdStepModal__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicWithdraw3rdStepModal__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "profileModal") {
    func.displayName = "PlasmicWithdraw3rdStepModal";
  } else {
    func.displayName = `PlasmicWithdraw3rdStepModal.${nodeName}`;
  }
  return func;
}

export const PlasmicWithdraw3rdStepModal = Object.assign(
  // Top-level PlasmicWithdraw3rdStepModal renders the root element
  makeNodeComponent("profileModal"),
  {
    // Helper components rendering sub-elements
    profileHeader: makeNodeComponent("profileHeader"),
    closeModal2: makeNodeComponent("closeModal2"),
    closeModal: makeNodeComponent("closeModal"),
    chooseDiamonds: makeNodeComponent("chooseDiamonds"),
    group44117: makeNodeComponent("group44117"),
    _4账户填写: makeNodeComponent("_4\u8d26\u6237\u586b\u5199"),
    accountName: makeNodeComponent("accountName"),
    accountSelection: makeNodeComponent("accountSelection"),
    withdrawAccount: makeNodeComponent("withdrawAccount"),
    备注: makeNodeComponent("\u5907\u6ce8"),
    checkbox: makeNodeComponent("checkbox"),
    saveAccountInfo: makeNodeComponent("saveAccountInfo"),
    accountNumber2: makeNodeComponent("accountNumber2"),
    textInput: makeNodeComponent("textInput"),
    accountNumber3: makeNodeComponent("accountNumber3"),
    textInput2: makeNodeComponent("textInput2"),
    nextButton: makeNodeComponent("nextButton"),
    svg: makeNodeComponent("svg"),
    // Metadata about props expected for PlasmicWithdraw3rdStepModal
    internalVariantProps: PlasmicWithdraw3rdStepModal__VariantProps,
    internalArgProps: PlasmicWithdraw3rdStepModal__ArgProps
  }
);

export default PlasmicWithdraw3rdStepModal;
/* prettier-ignore-end */
