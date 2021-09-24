"use strict";(self.webpackChunkopenkruise_io=self.webpackChunkopenkruise_io||[]).push([[4726],{3905:function(e,n,r){r.d(n,{Zo:function(){return p},kt:function(){return m}});var t=r(7294);function o(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function a(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function i(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?a(Object(r),!0).forEach((function(n){o(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function c(e,n){if(null==e)return{};var r,t,o=function(e,n){if(null==e)return{};var r,t,o={},a=Object.keys(e);for(t=0;t<a.length;t++)r=a[t],n.indexOf(r)>=0||(o[r]=e[r]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)r=a[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=t.createContext({}),s=function(e){var n=t.useContext(l),r=n;return e&&(r="function"==typeof e?e(n):i(i({},n),e)),r},p=function(e){var n=s(e.components);return t.createElement(l.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},d=t.forwardRef((function(e,n){var r=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),d=s(r),m=o,b=d["".concat(l,".").concat(m)]||d[m]||u[m]||a;return r?t.createElement(b,i(i({ref:n},p),{},{components:r})):t.createElement(b,i({ref:n},p))}));function m(e,n){var r=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=d;var c={};for(var l in n)hasOwnProperty.call(n,l)&&(c[l]=n[l]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var s=2;s<a;s++)i[s]=r[s];return t.createElement.apply(null,i)}return t.createElement.apply(null,r)}d.displayName="MDXCreateElement"},8745:function(e,n,r){r.r(n),r.d(n,{frontMatter:function(){return c},contentTitle:function(){return l},metadata:function(){return s},toc:function(){return p},default:function(){return d}});var t=r(7462),o=r(3366),a=(r(7294),r(3905)),i=["components"],c={title:"AdvancedCronJob"},l=void 0,s={unversionedId:"user-manuals/advancedcronjob",id:"version-v0.10.0/user-manuals/advancedcronjob",isDocsHomePage:!1,title:"AdvancedCronJob",description:"AdvancedCronJob is an enhanced version of CronJob.",source:"@site/versioned_docs/version-v0.10.0/user-manuals/advancedcronjob.md",sourceDirName:"user-manuals",slug:"/user-manuals/advancedcronjob",permalink:"/docs/user-manuals/advancedcronjob",editUrl:"https://github.com/openkruise/openkruise.io/edit/master/docs/user-manuals/advancedcronjob.md",tags:[],version:"v0.10.0",lastUpdatedBy:"Siyu Wang",lastUpdatedAt:1632471441,formattedLastUpdatedAt:"9/24/2021",frontMatter:{title:"AdvancedCronJob"},sidebar:"version-v0.10.0/docs",previous:{title:"BroadcastJob",permalink:"/docs/user-manuals/broadcastjob"},next:{title:"SidecarSet",permalink:"/docs/user-manuals/sidecarset"}},p=[{value:"Example",id:"example",children:[]}],u={toc:p};function d(e){var n=e.components,c=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,t.Z)({},u,c,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"AdvancedCronJob is an enhanced version of CronJob.\nThe original CronJob creates Job reriodically according to schedule rule, but AdvancedCronJob provides template supported multpile job resources."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: apps.kruise.io/v1alpha1\nkind: AdvancedCronJob\nspec:\n  template:\n\n    # Option 1: use jobTemplate, which is equivalent to original CronJob\n    jobTemplate:\n      # ...\n\n    # Option 2: use broadcastJobTemplate, which will create a BroadcastJob object when cron schedule triggers\n    broadcastJobTemplate:\n      # ...\n\n    # Options 3(future): ...\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"jobTemplate\uff1acreate Jobs reriodically, which is equivalent to original CronJob"),(0,a.kt)("li",{parentName:"ul"},"broadcastJobTemplate\uff1acreate ",(0,a.kt)("a",{parentName:"li",href:"./broadcastjob"},"BroadcastJobs")," reriodically, which support to dispatch Jobs on every node")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"AdvancedCronjob",src:r(3748).Z})),(0,a.kt)("h2",{id:"example"},"Example"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: apps.kruise.io/v1alpha1\nkind: AdvancedCronJob\nmetadata:\n  name: acj-test\nspec:\n  schedule: "*/1 * * * *"\n  template:\n    broadcastJobTemplate:\n      spec:\n        template:\n          spec:\n            containers:\n              - name: pi\n                image: perl\n                command: ["perl",  "-Mbignum=bpi", "-wle", "print bpi(2000)"]\n            restartPolicy: Never\n        completionPolicy:\n          type: Always\n          ttlSecondsAfterFinished: 30\n')),(0,a.kt)("p",null,"The YAML below defines an AdvancedCronJob. It will create a BroadcastJob every minute, which will run a job on every node."))}d.isMDXComponent=!0},3748:function(e,n,r){n.Z=r.p+"assets/images/advancedcronjob-2667633566977804a6b7e323ef3d3139.png"}}]);