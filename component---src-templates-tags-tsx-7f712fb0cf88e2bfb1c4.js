"use strict";(self.webpackChunkgatsby_starter_blog=self.webpackChunkgatsby_starter_blog||[]).push([[975],{1171:function(e,t,n){var a=n(7294),l=n(1597),r=n(3583);t.Z=function(e){var t=e.pageContext,n=t.numPages,r=t.currentPage,i=t.linkPrefix,c=t.linkSuffix;return a.createElement("nav",null,a.createElement(o,null,Array.from({length:n},(function(e,t){return a.createElement("li",{key:"pagination-number"+(t+1),className:""+(t+1)==r?"thisPage":"etherPage"},a.createElement(l.Link,{to:""+i+(0===t?"":c)+(0===t?"":t+1)+"/"},t+1))}))))};var o=r.default.ul.withConfig({displayName:"pageNation__UlWrapper",componentId:"sc-1whnddh-0"})(["display:flex;justify-content:center;li{display:block;width:3em;text-align:center;margin:0 0.2em;}li.thisPage{background-color:var(--colorSecondary);}li.etherPage{background-color:var(--colorPrimary);}"])},691:function(e,t,n){var a=n(7294),l=n(3583),r=n(7403);t.Z=function(e){var t=e.title,n=e.prefixTitle;return a.createElement(a.Fragment,null,a.createElement(o,{className:"pageTitle"},n?a.createElement("div",{className:"prefix"},n,":"):"",a.createElement("h1",null,t)),a.createElement(r.Z,{slotKey:"contentsLower"}))};var o=l.default.div.withConfig({displayName:"pageTitle__DivWrapper",componentId:"sc-140o05u-0"})(["margin-bottom:0;display:flex;.prefix{font-size:var(--fontSizeH1);margin-right:0.5em;}"])},8308:function(e,t,n){var a=n(7294),l=n(3583),r=n(1597),o=n(6718);t.Z=function(e){var t=e.nodes;return a.createElement(i,null,t.map((function(e){var t,n,l,i,c,s,m=(null==e||null===(t=e.frontmatter)||void 0===t?void 0:t.title)||(null===(n=e.fields)||void 0===n?void 0:n.slug);return a.createElement("li",{key:null===(l=e.fields)||void 0===l?void 0:l.slug,className:"postList"},a.createElement("article",{className:"post-list-item"},a.createElement("h2",null,a.createElement(r.Link,{to:"/blog"+(null===(i=e.fields)||void 0===i?void 0:i.slug)||0,itemProp:"url"},a.createElement("span",{itemProp:"headline"},m))),a.createElement("p",{className:"post_modified"},a.createElement("span",null,null===(c=e.frontmatter)||void 0===c?void 0:c.post_modified)),a.createElement("p",{className:"content",dangerouslySetInnerHTML:{__html:(null===(s=e.frontmatter)||void 0===s?void 0:s.description)||(null==e?void 0:e.excerpt)||""},itemProp:"description"}),a.createElement(o.Z,{node:e})))})))};var i=l.default.ol.withConfig({displayName:"postList__OlWrapper",componentId:"sc-ihaxmi-0"})(["P.post_modified{text-align:end;span{color:var(--colorSecondary);}}li.postList{background-color:var(--bgColorScondary);border-radius:8px;margin-bottom:1.5em;padding:3px;box-shadow:inset 0 0 30px -15px rgba(255,255,255,0.4);}h2{background-color:var(--colorPrimary);border-radius:8px;padding:0 4px;}p.content{padding-left:6px;}"])},6718:function(e,t,n){var a=n(7294),l=n(3583),r=n(1597),o=n(1804),i=n.n(o),c=n(9519),s=n(8014);t.Z=function(e){var t,n,l=e.node;return a.createElement(m,{className:"tags"},null===(t=l.frontmatter)||void 0===t||null===(n=t.tags)||void 0===n?void 0:n.map((function(e){return a.createElement("li",{key:e},a.createElement(c.G,{icon:s.LEN}),a.createElement(r.Link,{to:"/blog/tags/"+i()(e)+"/"},e))})))};var m=l.default.ul.withConfig({displayName:"tagsInContent__UlWrapper",componentId:"sc-gochus-0"})(["display:flex;justify-content:flex-end;li{margin-left:1em;button{color:var(--fontColor) !important;}}"])},4875:function(e,t,n){n.r(t);var a=n(7294),l=n(1597),r=n(1174),o=n(9470),i=n(8308),c=n(691),s=n(1171);t.default=function(e){var t=e.pageContext,n=e.data,m=t.tag,d=n.allMarkdownRemark.nodes;return a.createElement(r.Z,null,a.createElement(o.Z,{title:m+" がタグ付けされた記事一覧",DisplaySubTitle:!0,description:m+" がタグ付けされた記事一覧"}),a.createElement("div",null,a.createElement(c.Z,{title:m,prefixTitle:"Tagging"}),a.createElement(i.Z,{nodes:d}),a.createElement(l.Link,{to:"/blog/tags/"},"All tags")),a.createElement("section",null,a.createElement(s.Z,{pageContext:t})))}}}]);
//# sourceMappingURL=component---src-templates-tags-tsx-7f712fb0cf88e2bfb1c4.js.map