// @ts-nocheck
import { type DLightHTMLAttributes } from "@dlightjs/types"
import type * as atomic from "@iandx/easy-css-atomic"
import type * as utility from "@iandx/easy-css-utility"

type Atomic = typeof atomic
type Utility = typeof utility

type TrimFunction<T extends Record<string, (value: any) => any>> = {
  -readonly[K in keyof T]: T[K] extends (value: infer U) => any ? U : boolean
}
type EasyCss = TrimFunction<Atomic & Utility>

type DLightHTMLAttributesFunc<T> = {
  [K in keyof T]: (value?: T[K]) => (
    K extends "className"
      ? DLightHTMLAttributesFunc<T>
      : Omit<DLightHTMLAttributesFunc<T>, K>
  )
}

export type DLightHtmlTagFunc<T> = (innerText?: string | number) => DLightHTMLAttributesFunc<T>

// won't work, maybe EasyCss is too large?
// type EasyCssHTMLElement = EasyCss & DLightHTMLAttributes<HTMLElement, {}>

export interface EasyCssHTMLAnchorElement extends EasyCss, DLightHTMLAttributes<HTMLAnchorElement, {}> {}
export interface EasyCssHTMLElement extends EasyCss, DLightHTMLAttributes<HTMLElement, {}> {}
export interface EasyCssHTMLAreaElement extends EasyCss, DLightHTMLAttributes<HTMLAreaElement, {}> {}
export interface EasyCssHTMLAudioElement extends EasyCss, DLightHTMLAttributes<HTMLAudioElement, {}> {}
export interface EasyCssHTMLBaseElement extends EasyCss, DLightHTMLAttributes<HTMLBaseElement, {}> {}
export interface EasyCssHTMLQuoteElement extends EasyCss, DLightHTMLAttributes<HTMLQuoteElement, {}> {}
export interface EasyCssHTMLBodyElement extends EasyCss, DLightHTMLAttributes<HTMLBodyElement, {}> {}
export interface EasyCssHTMLBRElement extends EasyCss, DLightHTMLAttributes<HTMLBRElement, {}> {}
export interface EasyCssHTMLButtonElement extends EasyCss, DLightHTMLAttributes<HTMLButtonElement, {}> {}
export interface EasyCssHTMLCanvasElement extends EasyCss, DLightHTMLAttributes<HTMLCanvasElement, {}> {}
export interface EasyCssHTMLTableCaptionElement extends EasyCss, DLightHTMLAttributes<HTMLTableCaptionElement, {}> {}
export interface EasyCssHTMLTableColElement extends EasyCss, DLightHTMLAttributes<HTMLTableColElement, {}> {}
export interface EasyCssHTMLDataElement extends EasyCss, DLightHTMLAttributes<HTMLDataElement, {}> {}
export interface EasyCssHTMLDataListElement extends EasyCss, DLightHTMLAttributes<HTMLDataListElement, {}> {}
export interface EasyCssHTMLModElement extends EasyCss, DLightHTMLAttributes<HTMLModElement, {}> {}
export interface EasyCssHTMLDetailsElement extends EasyCss, DLightHTMLAttributes<HTMLDetailsElement, {}> {}
export interface EasyCssHTMLDialogElement extends EasyCss, DLightHTMLAttributes<HTMLDialogElement, {}> {}
export interface EasyCssHTMLDivElement extends EasyCss, DLightHTMLAttributes<HTMLDivElement, {}> {}
export interface EasyCssHTMLDListElement extends EasyCss, DLightHTMLAttributes<HTMLDListElement, {}> {}
export interface EasyCssHTMLEmbedElement extends EasyCss, DLightHTMLAttributes<HTMLEmbedElement, {}> {}
export interface EasyCssHTMLFieldSetElement extends EasyCss, DLightHTMLAttributes<HTMLFieldSetElement, {}> {}
export interface EasyCssHTMLFormElement extends EasyCss, DLightHTMLAttributes<HTMLFormElement, {}> {}
export interface EasyCssHTMLHeadingElement extends EasyCss, DLightHTMLAttributes<HTMLHeadingElement, {}> {}
export interface EasyCssHTMLHeadElement extends EasyCss, DLightHTMLAttributes<HTMLHeadElement, {}> {}
export interface EasyCssHTMLHRElement extends EasyCss, DLightHTMLAttributes<HTMLHRElement, {}> {}
export interface EasyCssHTMLHtmlElement extends EasyCss, DLightHTMLAttributes<HTMLHtmlElement, {}> {}
export interface EasyCssHTMLIFrameElement extends EasyCss, DLightHTMLAttributes<HTMLIFrameElement, {}> {}
export interface EasyCssHTMLImageElement extends EasyCss, DLightHTMLAttributes<HTMLImageElement, {}> {}
export interface EasyCssHTMLInputElement extends EasyCss, DLightHTMLAttributes<HTMLInputElement, {}> {}
export interface EasyCssHTMLLabelElement extends EasyCss, DLightHTMLAttributes<HTMLLabelElement, {}> {}
export interface EasyCssHTMLLegendElement extends EasyCss, DLightHTMLAttributes<HTMLLegendElement, {}> {}
export interface EasyCssHTMLLIElement extends EasyCss, DLightHTMLAttributes<HTMLLIElement, {}> {}
export interface EasyCssHTMLLinkElement extends EasyCss, DLightHTMLAttributes<HTMLLinkElement, {}> {}
export interface EasyCssHTMLMapElement extends EasyCss, DLightHTMLAttributes<HTMLMapElement, {}> {}
export interface EasyCssHTMLMenuElement extends EasyCss, DLightHTMLAttributes<HTMLMenuElement, {}> {}
export interface EasyCssHTMLMetaElement extends EasyCss, DLightHTMLAttributes<HTMLMetaElement, {}> {}
export interface EasyCssHTMLMeterElement extends EasyCss, DLightHTMLAttributes<HTMLMeterElement, {}> {}
export interface EasyCssHTMLObjectElement extends EasyCss, DLightHTMLAttributes<HTMLObjectElement, {}> {}
export interface EasyCssHTMLOListElement extends EasyCss, DLightHTMLAttributes<HTMLOListElement, {}> {}
export interface EasyCssHTMLOptGroupElement extends EasyCss, DLightHTMLAttributes<HTMLOptGroupElement, {}> {}
export interface EasyCssHTMLOptionElement extends EasyCss, DLightHTMLAttributes<HTMLOptionElement, {}> {}
export interface EasyCssHTMLOutputElement extends EasyCss, DLightHTMLAttributes<HTMLOutputElement, {}> {}
export interface EasyCssHTMLParagraphElement extends EasyCss, DLightHTMLAttributes<HTMLParagraphElement, {}> {}
export interface EasyCssHTMLPictureElement extends EasyCss, DLightHTMLAttributes<HTMLPictureElement, {}> {}
export interface EasyCssHTMLPreElement extends EasyCss, DLightHTMLAttributes<HTMLPreElement, {}> {}
export interface EasyCssHTMLProgressElement extends EasyCss, DLightHTMLAttributes<HTMLProgressElement, {}> {}
export interface EasyCssHTMLScriptElement extends EasyCss, DLightHTMLAttributes<HTMLScriptElement, {}> {}
export interface EasyCssHTMLSelectElement extends EasyCss, DLightHTMLAttributes<HTMLSelectElement, {}> {}
export interface EasyCssHTMLSlotElement extends EasyCss, DLightHTMLAttributes<HTMLSlotElement, {}> {}
export interface EasyCssHTMLSourceElement extends EasyCss, DLightHTMLAttributes<HTMLSourceElement, {}> {}
export interface EasyCssHTMLSpanElement extends EasyCss, DLightHTMLAttributes<HTMLSpanElement, {}> {}
export interface EasyCssHTMLStyleElement extends EasyCss, DLightHTMLAttributes<HTMLStyleElement, {}> {}
export interface EasyCssHTMLTableElement extends EasyCss, DLightHTMLAttributes<HTMLTableElement, {}> {}
export interface EasyCssHTMLTableSectionElement extends EasyCss, DLightHTMLAttributes<HTMLTableSectionElement, {}> {}
export interface EasyCssHTMLTableCellElement extends EasyCss, DLightHTMLAttributes<HTMLTableCellElement, {}> {}
export interface EasyCssHTMLTemplateElement extends EasyCss, DLightHTMLAttributes<HTMLTemplateElement, {}> {}
export interface EasyCssHTMLTextAreaElement extends EasyCss, DLightHTMLAttributes<HTMLTextAreaElement, {}> {}
export interface EasyCssHTMLTimeElement extends EasyCss, DLightHTMLAttributes<HTMLTimeElement, {}> {}
export interface EasyCssHTMLTitleElement extends EasyCss, DLightHTMLAttributes<HTMLTitleElement, {}> {}
export interface EasyCssHTMLTableRowElement extends EasyCss, DLightHTMLAttributes<HTMLTableRowElement, {}> {}
export interface EasyCssHTMLTrackElement extends EasyCss, DLightHTMLAttributes<HTMLTrackElement, {}> {}
export interface EasyCssHTMLUListElement extends EasyCss, DLightHTMLAttributes<HTMLUListElement, {}> {}
export interface EasyCssHTMLVideoElement extends EasyCss, DLightHTMLAttributes<HTMLVideoElement, {}> {}
export interface EasyCssHTMLUnknownElement extends EasyCss, DLightHTMLAttributes<HTMLUnknownElement, {}> {}
export interface EasyCssHTMLDirectoryElement extends EasyCss, DLightHTMLAttributes<HTMLDirectoryElement, {}> {}
export interface EasyCssHTMLFontElement extends EasyCss, DLightHTMLAttributes<HTMLFontElement, {}> {}
export interface EasyCssHTMLFrameElement extends EasyCss, DLightHTMLAttributes<HTMLFrameElement, {}> {}
export interface EasyCssHTMLFrameSetElement extends EasyCss, DLightHTMLAttributes<HTMLFrameSetElement, {}> {}
export interface EasyCssHTMLMarqueeElement extends EasyCss, DLightHTMLAttributes<HTMLMarqueeElement, {}> {}
export interface EasyCssHTMLParamElement extends EasyCss, DLightHTMLAttributes<HTMLParamElement, {}> {}
export interface EasyCssSVGAnimateElement extends EasyCss, DLightHTMLAttributes<SVGAnimateElement, {}> {}
export interface EasyCssSVGAnimateMotionElement extends EasyCss, DLightHTMLAttributes<SVGAnimateMotionElement, {}> {}
export interface EasyCssSVGAnimateTransformElement extends EasyCss, DLightHTMLAttributes<SVGAnimateTransformElement, {}> {}
export interface EasyCssSVGCircleElement extends EasyCss, DLightHTMLAttributes<SVGCircleElement, {}> {}
export interface EasyCssSVGClipPathElement extends EasyCss, DLightHTMLAttributes<SVGClipPathElement, {}> {}
export interface EasyCssSVGDefsElement extends EasyCss, DLightHTMLAttributes<SVGDefsElement, {}> {}
export interface EasyCssSVGDescElement extends EasyCss, DLightHTMLAttributes<SVGDescElement, {}> {}
export interface EasyCssSVGEllipseElement extends EasyCss, DLightHTMLAttributes<SVGEllipseElement, {}> {}
export interface EasyCssSVGFEBlendElement extends EasyCss, DLightHTMLAttributes<SVGFEBlendElement, {}> {}
export interface EasyCssSVGFEColorMatrixElement extends EasyCss, DLightHTMLAttributes<SVGFEColorMatrixElement, {}> {}
export interface EasyCssSVGFEComponentTransferElement extends EasyCss, DLightHTMLAttributes<SVGFEComponentTransferElement, {}> {}
export interface EasyCssSVGFECompositeElement extends EasyCss, DLightHTMLAttributes<SVGFECompositeElement, {}> {}
export interface EasyCssSVGFEConvolveMatrixElement extends EasyCss, DLightHTMLAttributes<SVGFEConvolveMatrixElement, {}> {}
export interface EasyCssSVGFEDiffuseLightingElement extends EasyCss, DLightHTMLAttributes<SVGFEDiffuseLightingElement, {}> {}
export interface EasyCssSVGFEDisplacementMapElement extends EasyCss, DLightHTMLAttributes<SVGFEDisplacementMapElement, {}> {}
export interface EasyCssSVGFEDistantLightElement extends EasyCss, DLightHTMLAttributes<SVGFEDistantLightElement, {}> {}
export interface EasyCssSVGFEDropShadowElement extends EasyCss, DLightHTMLAttributes<SVGFEDropShadowElement, {}> {}
export interface EasyCssSVGFEFloodElement extends EasyCss, DLightHTMLAttributes<SVGFEFloodElement, {}> {}
export interface EasyCssSVGFEFuncAElement extends EasyCss, DLightHTMLAttributes<SVGFEFuncAElement, {}> {}
export interface EasyCssSVGFEFuncBElement extends EasyCss, DLightHTMLAttributes<SVGFEFuncBElement, {}> {}
export interface EasyCssSVGFEFuncGElement extends EasyCss, DLightHTMLAttributes<SVGFEFuncGElement, {}> {}
export interface EasyCssSVGFEFuncRElement extends EasyCss, DLightHTMLAttributes<SVGFEFuncRElement, {}> {}
export interface EasyCssSVGFEGaussianBlurElement extends EasyCss, DLightHTMLAttributes<SVGFEGaussianBlurElement, {}> {}
export interface EasyCssSVGFEImageElement extends EasyCss, DLightHTMLAttributes<SVGFEImageElement, {}> {}
export interface EasyCssSVGFEMergeElement extends EasyCss, DLightHTMLAttributes<SVGFEMergeElement, {}> {}
export interface EasyCssSVGFEMergeNodeElement extends EasyCss, DLightHTMLAttributes<SVGFEMergeNodeElement, {}> {}
export interface EasyCssSVGFEMorphologyElement extends EasyCss, DLightHTMLAttributes<SVGFEMorphologyElement, {}> {}
export interface EasyCssSVGFEOffsetElement extends EasyCss, DLightHTMLAttributes<SVGFEOffsetElement, {}> {}
export interface EasyCssSVGFEPointLightElement extends EasyCss, DLightHTMLAttributes<SVGFEPointLightElement, {}> {}
export interface EasyCssSVGFESpecularLightingElement extends EasyCss, DLightHTMLAttributes<SVGFESpecularLightingElement, {}> {}
export interface EasyCssSVGFESpotLightElement extends EasyCss, DLightHTMLAttributes<SVGFESpotLightElement, {}> {}
export interface EasyCssSVGFETileElement extends EasyCss, DLightHTMLAttributes<SVGFETileElement, {}> {}
export interface EasyCssSVGFETurbulenceElement extends EasyCss, DLightHTMLAttributes<SVGFETurbulenceElement, {}> {}
export interface EasyCssSVGFilterElement extends EasyCss, DLightHTMLAttributes<SVGFilterElement, {}> {}
export interface EasyCssSVGForeignObjectElement extends EasyCss, DLightHTMLAttributes<SVGForeignObjectElement, {}> {}
export interface EasyCssSVGGElement extends EasyCss, DLightHTMLAttributes<SVGGElement, {}> {}
export interface EasyCssSVGImageElement extends EasyCss, DLightHTMLAttributes<SVGImageElement, {}> {}
export interface EasyCssSVGLineElement extends EasyCss, DLightHTMLAttributes<SVGLineElement, {}> {}
export interface EasyCssSVGLinearGradientElement extends EasyCss, DLightHTMLAttributes<SVGLinearGradientElement, {}> {}
export interface EasyCssSVGMarkerElement extends EasyCss, DLightHTMLAttributes<SVGMarkerElement, {}> {}
export interface EasyCssSVGMaskElement extends EasyCss, DLightHTMLAttributes<SVGMaskElement, {}> {}
export interface EasyCssSVGMetadataElement extends EasyCss, DLightHTMLAttributes<SVGMetadataElement, {}> {}
export interface EasyCssSVGMPathElement extends EasyCss, DLightHTMLAttributes<SVGMPathElement, {}> {}
export interface EasyCssSVGPathElement extends EasyCss, DLightHTMLAttributes<SVGPathElement, {}> {}
export interface EasyCssSVGPatternElement extends EasyCss, DLightHTMLAttributes<SVGPatternElement, {}> {}
export interface EasyCssSVGPolygonElement extends EasyCss, DLightHTMLAttributes<SVGPolygonElement, {}> {}
export interface EasyCssSVGPolylineElement extends EasyCss, DLightHTMLAttributes<SVGPolylineElement, {}> {}
export interface EasyCssSVGRadialGradientElement extends EasyCss, DLightHTMLAttributes<SVGRadialGradientElement, {}> {}
export interface EasyCssSVGRectElement extends EasyCss, DLightHTMLAttributes<SVGRectElement, {}> {}
export interface EasyCssSVGSetElement extends EasyCss, DLightHTMLAttributes<SVGSetElement, {}> {}
export interface EasyCssSVGStopElement extends EasyCss, DLightHTMLAttributes<SVGStopElement, {}> {}
export interface EasyCssSVGSVGElement extends EasyCss, DLightHTMLAttributes<SVGSVGElement, {}> {}
export interface EasyCssSVGSwitchElement extends EasyCss, DLightHTMLAttributes<SVGSwitchElement, {}> {}
export interface EasyCssSVGSymbolElement extends EasyCss, DLightHTMLAttributes<SVGSymbolElement, {}> {}
export interface EasyCssSVGTextElement extends EasyCss, DLightHTMLAttributes<SVGTextElement, {}> {}
export interface EasyCssSVGTextPathElement extends EasyCss, DLightHTMLAttributes<SVGTextPathElement, {}> {}
export interface EasyCssSVGTSpanElement extends EasyCss, DLightHTMLAttributes<SVGTSpanElement, {}> {}
export interface EasyCssSVGUseElement extends EasyCss, DLightHTMLAttributes<SVGUseElement, {}> {}
export interface EasyCssSVGViewElement extends EasyCss, DLightHTMLAttributes<SVGViewElement, {}> {}
