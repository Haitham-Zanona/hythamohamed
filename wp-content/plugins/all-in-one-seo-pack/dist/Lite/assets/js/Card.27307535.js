import{c as a,m as n}from"./vuex.esm.8fdeb4b6.js";import{C as r}from"./Tooltip.68a8a92b.js";import{f as l,S as i}from"./Caret.19b10233.js";import{a as c}from"./index.3c70e00e.js";import{T as d}from"./Slide.15a07930.js";import{n as u}from"./_plugin-vue2_normalizer.61652a7c.js";const g={components:{CoreTooltip:r,SvgCaret:l,SvgCircleQuestionMark:c,SvgClose:i,TransitionSlide:d},props:{slug:{type:String,required:!0},headerText:String,toggles:{type:Boolean,default(){return!0}},hideHeader:Boolean,noSlide:Boolean,closes:Boolean,saveToggleStatus:{type:Boolean,default(){return!0}},disabled:Boolean,cardClass:{type:Object,default(){return{}}}},watch:{toggles(o){const t=this.slug;o&&!this.settings.toggledCards[t]&&this.toggleCard({slug:t,shouldSave:!0})}},computed:{...a(["settings"])},methods:{...n(["toggleCard"])}};var _=function(){var t=this,e=t._self._c;return e("div",{staticClass:"aioseo-card",class:{disabled:t.disabled,...t.cardClass}},[t.hideHeader?t._e():e("div",{staticClass:"header",class:[{toggles:t.toggles}],on:{click:function(s){return t.toggleCard({slug:t.slug,shouldSave:t.saveToggleStatus})}}},[e("div",{staticClass:"text"},[e("div",{staticClass:"header-icon"},[t._t("header-icon")],2),e("div",{staticClass:"header-title",on:{click:function(s){s.stopPropagation()}}},[t._t("header",function(){return[e("span",[t._v(t._s(t.headerText))])]})],2),t.$slots.tooltip?e("core-tooltip",{scopedSlots:t._u([{key:"tooltip",fn:function(){return[t._t("tooltip")]},proxy:!0}],null,!0)},[e("svg-circle-question-mark")],1):t._e(),e("div",{staticClass:"header-extra"},[t._t("header-extra")],2)],1),!t.closes&&t.toggles&&t.settings.toggledCards&&!t.noSlide&&!t.disabled?e("svg-caret",{class:{rotated:!t.settings.toggledCards[t.slug]}}):t._e(),t.closes?e("svg-close",{on:{click:function(s){return t.$emit("close-card",!0)}}}):t._e()],1),t.$slots.disabled&&t.disabled?e("div",{staticClass:"content"},[t._t("disabled")],2):t._e(),(t.settings.toggledCards||t.noSlide)&&!t.disabled?e("transition-slide",{attrs:{active:t.settings.toggledCards[t.slug]&&t.toggles||t.noSlide}},[t.$slots["before-tabs"]?e("div",{staticClass:"content"},[t._t("before-tabs")],2):t._e(),t._t("tabs"),t.$slots.default?e("div",{staticClass:"content"},[t._t("default")],2):t._e()],2):t._e()],1)},p=[],f=u(g,_,p,!1,null,null,null,null);const b=f.exports;export{b as C};
