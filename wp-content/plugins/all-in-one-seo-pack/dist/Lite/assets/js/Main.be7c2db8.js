import{a as e}from"./vuex.esm.8fdeb4b6.js";import"./WpTable.ee9185a7.js";import"./default-i18n.3a91e0e5.js";import"./constants.0d8c074c.js";import{n as o}from"./_plugin-vue2_normalizer.61652a7c.js";import"./index.ec9852b3.js";import{R as s,a as i}from"./RequiresUpdate.5342b97f.js";import"./SaveChanges.e40a9083.js";import{C as a}from"./Index.bd5fc4bf.js";import _ from"./Redirects.160045a2.js";import"./helpers.de7566d0.js";import"./attachments.6af710f9.js";import"./cleanForSlug.51ef7354.js";import"./isArrayLikeObject.9b4b678d.js";import"./Caret.19b10233.js";import"./_commonjsHelpers.f84db168.js";import"./html.14f2a8b9.js";import"./Index.6dd703b2.js";import"./RequiresUpdate.72442782.js";/* empty css             */import"./params.597cd0f5.js";import"./Header.10fd4a81.js";import"./LicenseKeyBar.f7493613.js";import"./LogoGear.16108a75.js";import"./AnimatedNumber.932b583a.js";import"./Logo.8785cc9f.js";import"./index.3c70e00e.js";import"./client.e62d6c37.js";import"./translations.c394afe3.js";import"./portal-vue.esm.98f2e05b.js";import"./Support.85587a91.js";import"./Tabs.94a491a6.js";import"./TruSeoScore.339d22e1.js";import"./Information.93f80cbf.js";import"./Slide.15a07930.js";import"./Exclamation.fd45a7b0.js";import"./Url.c71d5763.js";import"./Gear.184e0c65.js";import"./Redirects.76f4bc5a.js";import"./Index.481fa14f.js";import"./JsonValues.870a4901.js";import"./strings.aee612e0.js";import"./isString.0b99231f.js";import"./ProBadge.66f48bdc.js";import"./External.4c957e9a.js";import"./Checkbox.60ba2f56.js";import"./Checkmark.f26f6201.js";import"./Row.830f6397.js";import"./Tooltip.68a8a92b.js";import"./Plus.6984df43.js";import"./Blur.f36c594d.js";import"./Card.27307535.js";import"./Table.e3a46b6a.js";import"./Index.235069bb.js";import"./RequiredPlans.d3ddea12.js";const c={};var m=function(){var t=this,r=t._self._c;return r("div")},p=[],l=o(c,m,p,!1,null,null,null,null);const u=l.exports,d={};var f=function(){var t=this,r=t._self._c;return r("div")},v=[],$=o(d,f,v,!1,null,null,null,null);const h=$.exports,g={};var x=function(){var t=this,r=t._self._c;return r("div")},R=[],y=o(g,x,R,!1,null,null,null,null);const b=y.exports,F={};var A=function(){var t=this,r=t._self._c;return r("div")},S=[],L=o(F,A,S,!1,null,null,null,null);const T=L.exports,w={};var C=function(){var t=this,r=t._self._c;return r("div")},E=[],M=o(w,C,E,!1,null,null,null,null);const U=M.exports;const q={components:{CoreMain:a,FullSiteRedirect:u,ImportExport:h,Logs:b,Logs404:T,Redirects:_,Settings:U},mixins:[s,i],data(){return{strings:{pageName:this.$t.__("Redirects",this.$td)}}},computed:{...e("redirects",["options"]),showSaveButton(){return this.$route.name!=="redirects"&&this.$route.name!=="groups"&&this.$route.name!=="logs-404"&&this.$route.name!=="logs"&&this.$route.name!=="import-export"},excludeTabs(){const n=this.$addons.isActive("aioseo-redirects")?this.getExcludedUpdateTabs("aioseo-redirects"):this.getExcludedActivationTabs("aioseo-redirects");return this.options.logs.log404.enabled||n.push("logs-404"),(!this.options.logs.redirects.enabled||this.options.main.method==="server")&&n.push("logs"),n}}};var B=function(){var t=this,r=t._self._c;return r("core-main",{attrs:{"page-name":t.strings.pageName,"show-save-button":t.showSaveButton,"exclude-tabs":t.excludeTabs}},[r(t.$route.name,{tag:"component"})],1)},N=[],z=o(q,B,N,!1,null,null,null,null);const Pt=z.exports;export{Pt as default};
