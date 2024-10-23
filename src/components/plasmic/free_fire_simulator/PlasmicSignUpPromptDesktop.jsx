// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: ncwW2Qgif2pGwQDF81hXqa
// Component: lfoX2K6g2IqZ
import * as React from "react";
import {
  PlasmicIcon as PlasmicIcon__,
  Stack as Stack__,
  Trans as Trans__,
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts,
  ensureGlobalVariants,
  generateStateOnChangeProp,
  generateStateValueProp,
  hasVariant,
  useDollarState,
  usePlasmicTranslator
} from "@plasmicapp/react-web";
import { useDataEnv } from "@plasmicapp/react-web/lib/host";
import Divider from "../../Divider"; // plasmic-import: MAHszRYQZTQZ/component
import TextInput from "../../TextInput"; // plasmic-import: OwAPyM2I9Q1G/component
import AuthButton from "../../AuthButton"; // plasmic-import: x4yE4ZG-E551/component
import { useScreenVariants as useScreenVariants_2BvNreuf1Eto } from "./PlasmicGlobalVariant__DesktopBase"; // plasmic-import: 2BVNreuf1ETO/globalVariant
import "@plasmicapp/react-web/lib/plasmic.css";
import plasmic_antd_5_hostless_css from "../antd_5_hostless/plasmic.module.css"; // plasmic-import: ohDidvG9XsCeFumugENU3J/projectcss
import plasmic_plasmic_rich_components_css from "../plasmic_rich_components/plasmic.module.css"; // plasmic-import: jkU633o1Cz7HrJdwdxhVHk/projectcss
import projectcss from "./plasmic.module.css"; // plasmic-import: ncwW2Qgif2pGwQDF81hXqa/projectcss
import sty from "./PlasmicSignUpPromptDesktop.module.css"; // plasmic-import: lfoX2K6g2IqZ/css
import CheckSvgIcon from "./icons/PlasmicIcon__CheckSvg"; // plasmic-import: 8EZZlspBuF5Y/icon
import IconIcon from "./icons/PlasmicIcon__Icon"; // plasmic-import: jEgug0HHkt8v/icon
import Icon7Icon from "./icons/PlasmicIcon__Icon7"; // plasmic-import: -zMzL6eeYIYp/icon

createPlasmicElementProxy;

export const PlasmicSignUpPromptDesktop__VariantProps = new Array();

export const PlasmicSignUpPromptDesktop__ArgProps = new Array();

const $$ = {};

function PlasmicSignUpPromptDesktop__RenderFunc(props) {
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
        path: "textInput3.value",
        type: "private",
        variableType: "text",
        initFunc: ({ $props, $state, $queries, $ctx }) => ""
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
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
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
        sty.root
      )}
    >
      <div className={classNames(projectcss.all, sty.freeBox__tLwU9)}>
        <Stack__
          as={"div"}
          hasGap={true}
          className={classNames(projectcss.all, sty.freeBox__k13Fe)}
        >
          <div
            className={classNames(
              projectcss.all,
              projectcss.__wab_text,
              sty.text__mSp6A
            )}
          >
            <Trans__>{"Sign up with"}</Trans__>
          </div>
          <div className={classNames(projectcss.all, sty.freeBox__ztcvy)}>
            <div
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text__cYCb
              )}
            >
              <Trans__>
                {
                  <React.Fragment>
                    <React.Fragment>{""}</React.Fragment>
                    {
                      <h4
                        className={classNames(
                          projectcss.all,
                          projectcss.h4,
                          projectcss.__wab_text,
                          sty.h4__gybDg
                        )}
                      >
                        {
                          "\ud83d\udd25 \u6587\u672c\u5360\u4f4d\u7b26\uff0c\u9884\u8ba11\u884c"
                        }
                      </h4>
                    }

                    <React.Fragment>{""}</React.Fragment>
                  </React.Fragment>
                }
              </Trans__>
            </div>
            {(
              hasVariant(globalVariants, "desktopBase", "desktopOnly")
                ? true
                : false
            ) ? (
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text___6OEx
                )}
              >
                <Trans__>
                  {
                    <React.Fragment>
                      <React.Fragment>{""}</React.Fragment>
                      {
                        <h4
                          className={classNames(
                            projectcss.all,
                            projectcss.h4,
                            projectcss.__wab_text,
                            sty.h4__oz7Tn
                          )}
                        >
                          {
                            "\ud83d\udd25 \u6587\u672c\u5360\u4f4d\u7b26\uff0c\u9884\u8ba11\u884c"
                          }
                        </h4>
                      }

                      <React.Fragment>{""}</React.Fragment>
                    </React.Fragment>
                  }
                </Trans__>
              </div>
            ) : null}
            {(
              hasVariant(globalVariants, "desktopBase", "desktopOnly")
                ? true
                : false
            ) ? (
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__c7D52
                )}
              >
                <Trans__>
                  {
                    <React.Fragment>
                      <React.Fragment>{""}</React.Fragment>
                      {
                        <h4
                          className={classNames(
                            projectcss.all,
                            projectcss.h4,
                            projectcss.__wab_text,
                            sty.h4__mfLGu
                          )}
                        >
                          {
                            "\ud83d\udd25 \u6587\u672c\u5360\u4f4d\u7b26\uff0c\u9884\u8ba11\u884c"
                          }
                        </h4>
                      }

                      <React.Fragment>{""}</React.Fragment>
                    </React.Fragment>
                  }
                </Trans__>
              </div>
            ) : null}
          </div>
          <Stack__
            as={"div"}
            hasGap={true}
            className={classNames(projectcss.all, sty.freeBox__pBwqD)}
          >
            <Divider
              authPage={"horizontal"}
              className={classNames("__wab_instance", sty.divider__qhy2L)}
            />

            <div
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text__xkGs3
              )}
            >
              <Trans__>
                {hasVariant(globalVariants, "desktopBase", "desktopOnly")
                  ? "\u7acb\u5373\u767b\u5f55"
                  : "Or"}
              </Trans__>
            </div>
            <Divider
              authPage={"horizontal"}
              className={classNames("__wab_instance", sty.divider__bMr8Y)}
            />
          </Stack__>
          <Stack__
            as={"div"}
            hasGap={true}
            className={classNames(projectcss.all, sty.freeBox___6GedO)}
          >
            <TextInput
              data-plasmic-name={"textInput"}
              data-plasmic-override={overrides.textInput}
              className={classNames("__wab_instance", sty.textInput)}
              onChange={(...eventArgs) => {
                generateStateOnChangeProp($state, ["textInput", "value"])(
                  (e => e.target?.value).apply(null, eventArgs)
                );
              }}
              placeholder={"Full Name"}
              value={
                generateStateValueProp($state, ["textInput", "value"]) ?? ""
              }
            />

            <TextInput
              data-plasmic-name={"textInput2"}
              data-plasmic-override={overrides.textInput2}
              className={classNames("__wab_instance", sty.textInput2)}
              onChange={(...eventArgs) => {
                generateStateOnChangeProp($state, ["textInput2", "value"])(
                  (e => e.target?.value).apply(null, eventArgs)
                );
              }}
              placeholder={"Email"}
              value={
                generateStateValueProp($state, ["textInput2", "value"]) ?? ""
              }
            />

            <TextInput
              data-plasmic-name={"textInput3"}
              data-plasmic-override={overrides.textInput3}
              className={classNames("__wab_instance", sty.textInput3)}
              onChange={(...eventArgs) => {
                generateStateOnChangeProp($state, ["textInput3", "value"])(
                  (e => e.target?.value).apply(null, eventArgs)
                );
              }}
              placeholder={"Password"}
              value={
                generateStateValueProp($state, ["textInput3", "value"]) ?? ""
              }
            />
          </Stack__>
          <AuthButton
            data-plasmic-name={"authButton"}
            data-plasmic-override={overrides.authButton}
            className={classNames("__wab_instance", sty.authButton)}
            color={undefined}
            endIcon={
              <Icon7Icon
                className={classNames(projectcss.all, sty.svg___9Q4Rp)}
                role={"img"}
              />
            }
            showStartIcon={
              hasVariant(globalVariants, "desktopBase", "desktopOnly")
                ? true
                : undefined
            }
            startIcon={
              <PlasmicIcon__
                PlasmicIconType={
                  hasVariant(globalVariants, "desktopBase", "desktopOnly")
                    ? IconIcon
                    : CheckSvgIcon
                }
                className={classNames(projectcss.all, sty.svg__r1I0P)}
                role={"img"}
              />
            }
            submitsForm={true}
          >
            <div
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text__sR9I
              )}
            >
              <Trans__>
                {hasVariant(globalVariants, "desktopBase", "desktopOnly")
                  ? "\u4f7f\u7528Google\u4e00\u952e\u767b\u5f55"
                  : "Button"}
              </Trans__>
            </div>
          </AuthButton>
          {(
            hasVariant(globalVariants, "desktopBase", "desktopOnly")
              ? true
              : false
          ) ? (
            <AuthButton
              data-plasmic-name={"authButton2"}
              data-plasmic-override={overrides.authButton2}
              className={classNames("__wab_instance", sty.authButton2)}
              link={`/`}
              showStartIcon={true}
              size={"compact"}
              startIcon={
                <IconIcon
                  className={classNames(projectcss.all, sty.svg__e4Kvh)}
                  role={"img"}
                />
              }
              submitsForm={false}
            >
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text___4Txak
                )}
              >
                <Trans__>
                  {"\u4f7f\u7528Google\u4e00\u952e\u767b\u5f55"}
                </Trans__>
              </div>
            </AuthButton>
          ) : null}
        </Stack__>
        <Divider className={classNames("__wab_instance", sty.divider__lzKs5)} />
        <div className={classNames(projectcss.all, sty.freeBox__pktfI)}>
          <div
            className={classNames(
              projectcss.all,
              projectcss.__wab_text,
              sty.text__c3Ow
            )}
          >
            <Trans__>
              {hasVariant(globalVariants, "desktopBase", "desktopOnly")
                ? "\u6587\u6848\u5360\u4f4d\u7b26\uff0c\u9884\u8ba12\u884c\u3002\u6587\u6848\u5360\u4f4d\u7b26\uff0c\u9884\u8ba12\u884c\u3002\u6587\u6848\u5360\u4f4d\u7b26\uff0c\u9884\u8ba12\u884c\u3002\u6587\u6848\u5360\u4f4d\u7b26\uff0c\u9884\u8ba12\u884c\u3002\u6587\u6848\u5360\u4f4d\u7b26\uff0c\u9884\u8ba12\u884c\u3002"
                : "A cras sagittis odio vestibulum pulvinar a eget hendrerit id vestibulum a leo sociosqu dictumst dictumst natoque magnis parturient."}
            </Trans__>
          </div>
        </div>
      </div>
    </Stack__>
  );
}

const PlasmicDescendants = {
  root: [
    "root",
    "textInput",
    "textInput2",
    "textInput3",
    "authButton",
    "authButton2"
  ],

  textInput: ["textInput"],
  textInput2: ["textInput2"],
  textInput3: ["textInput3"],
  authButton: ["authButton"],
  authButton2: ["authButton2"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: PlasmicDescendants[nodeName],
          internalArgPropNames: PlasmicSignUpPromptDesktop__ArgProps,
          internalVariantPropNames: PlasmicSignUpPromptDesktop__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicSignUpPromptDesktop__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicSignUpPromptDesktop";
  } else {
    func.displayName = `PlasmicSignUpPromptDesktop.${nodeName}`;
  }
  return func;
}

export const PlasmicSignUpPromptDesktop = Object.assign(
  // Top-level PlasmicSignUpPromptDesktop renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    textInput: makeNodeComponent("textInput"),
    textInput2: makeNodeComponent("textInput2"),
    textInput3: makeNodeComponent("textInput3"),
    authButton: makeNodeComponent("authButton"),
    authButton2: makeNodeComponent("authButton2"),
    // Metadata about props expected for PlasmicSignUpPromptDesktop
    internalVariantProps: PlasmicSignUpPromptDesktop__VariantProps,
    internalArgProps: PlasmicSignUpPromptDesktop__ArgProps
  }
);

export default PlasmicSignUpPromptDesktop;
/* prettier-ignore-end */
