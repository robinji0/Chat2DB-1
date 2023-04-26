"use strict";(self.webpackChunkchat_2_db=self.webpackChunkchat_2_db||[]).push([[3624],{63343:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>p,contentTitle:()=>o,default:()=>g,frontMatter:()=>u,metadata:()=>s,toc:()=>d});a(67294);var n=a(3905);function l(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function r(t,e){return e=null!=e?e:{},Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):function(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}(Object(e)).forEach((function(a){Object.defineProperty(t,a,Object.getOwnPropertyDescriptor(e,a))})),t}function i(t,e){if(null==t)return{};var a,n,l=function(t,e){if(null==t)return{};var a,n,l={},r=Object.keys(t);for(n=0;n<r.length;n++)a=r[n],e.indexOf(a)>=0||(l[a]=t[a]);return l}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(n=0;n<r.length;n++)a=r[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(l[a]=t[a])}return l}const u={title:"Operations on Store",sidebar_position:2},o=void 0,s={unversionedId:"usage/stores-api/manage-stores",id:"usage/stores-api/manage-stores",title:"Operations on Store",description:"There are two kinds of stores global (realtime) and local (accessible only to",source:"@site/docs/plugin-sdk/usage/stores-api/manage-stores.mdx",sourceDirName:"usage/stores-api",slug:"/usage/stores-api/manage-stores",permalink:"/plugin-sdk/usage/stores-api/manage-stores",draft:!1,editUrl:"https://github.com/dyte-in/docs/tree/main/docs/plugin-sdk/usage/stores-api/manage-stores.mdx",tags:[],version:"current",lastUpdatedAt:1682490858,formattedLastUpdatedAt:"Apr 26, 2023",sidebarPosition:2,frontMatter:{title:"Operations on Store",sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Introduction",permalink:"/plugin-sdk/usage/stores-api/introduction"},next:{title:"How to work with Plugin Stores",permalink:"/plugin-sdk/guides/how-to-work-with-plugin-stores"}},p={},d=[{value:"Get store name",id:"get-store-name",level:3},{value:"Check if store is local",id:"check-if-store-is-local",level:3},{value:"Set a value",id:"set-a-value",level:3},{value:"Update a value",id:"update-a-value",level:3},{value:"Get a value",id:"get-a-value",level:3},{value:"Delete a value",id:"delete-a-value",level:3},{value:"Get all data",id:"get-all-data",level:3},{value:"Subscribe to data change",id:"subscribe-to-data-change",level:3},{value:"Unsubscribe to data change",id:"unsubscribe-to-data-change",level:3}],k={toc:d},m="wrapper";function g(t){var{components:e}=t,a=i(t,["components"]);return(0,n.kt)(m,r(function(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{},n=Object.keys(a);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(a).filter((function(t){return Object.getOwnPropertyDescriptor(a,t).enumerable})))),n.forEach((function(e){l(t,e,a[e])}))}return t}({},k,a),{components:e,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"There are two kinds of stores global (realtime) and local (accessible only to\nthe person who created them). You can perform CRUD operations on each store."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-tsx"},"const store = plugin.stores.create('myStore');\n")),(0,n.kt)("h3",{id:"get-store-name"},"Get store name"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-tsx"},"const name = store.name;\n")),(0,n.kt)("h3",{id:"check-if-store-is-local"},"Check if store is local"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-tsx"},"const isLocal = store.isLocal;\n")),(0,n.kt)("h3",{id:"set-a-value"},"Set a value"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Param"),(0,n.kt)("th",{parentName:"tr",align:null},"Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"),(0,n.kt)("th",{parentName:"tr",align:null},"Default Value"),(0,n.kt)("th",{parentName:"tr",align:null},"Required"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"key"),(0,n.kt)("td",{parentName:"tr",align:null},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"Unique identifier used to store value."),(0,n.kt)("td",{parentName:"tr",align:null},"-"),(0,n.kt)("td",{parentName:"tr",align:null},"true")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"value"),(0,n.kt)("td",{parentName:"tr",align:null},"any"),(0,n.kt)("td",{parentName:"tr",align:null},"Data to be set."),(0,n.kt)("td",{parentName:"tr",align:null},"-"),(0,n.kt)("td",{parentName:"tr",align:null},"true")))),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-tsx"},"await store.set('key', { ... });\n")),(0,n.kt)("h3",{id:"update-a-value"},"Update a value"),(0,n.kt)("p",null,"Updates an already existing value in the store. If the stored value is\n",(0,n.kt)("inlineCode",{parentName:"p"},"['a', 'b']"),", the operation ",(0,n.kt)("inlineCode",{parentName:"p"},"store.update('key', ['c'])")," will modify the value\nto ",(0,n.kt)("inlineCode",{parentName:"p"},"['a','b','c']"),"."),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Param"),(0,n.kt)("th",{parentName:"tr",align:null},"Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"),(0,n.kt)("th",{parentName:"tr",align:null},"Default Value"),(0,n.kt)("th",{parentName:"tr",align:null},"Required"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"key"),(0,n.kt)("td",{parentName:"tr",align:null},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"Unique identifier used to update value."),(0,n.kt)("td",{parentName:"tr",align:null},"-"),(0,n.kt)("td",{parentName:"tr",align:null},"true")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"value"),(0,n.kt)("td",{parentName:"tr",align:null},"any"),(0,n.kt)("td",{parentName:"tr",align:null},"Data to be updated."),(0,n.kt)("td",{parentName:"tr",align:null},"-"),(0,n.kt)("td",{parentName:"tr",align:null},"true")))),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-tsx"},"await store.update('key', { ... });\n")),(0,n.kt)("h3",{id:"get-a-value"},"Get a value"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Param"),(0,n.kt)("th",{parentName:"tr",align:null},"Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"),(0,n.kt)("th",{parentName:"tr",align:null},"Default Value"),(0,n.kt)("th",{parentName:"tr",align:null},"Required"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"key"),(0,n.kt)("td",{parentName:"tr",align:null},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"Unique identifier used to get a value."),(0,n.kt)("td",{parentName:"tr",align:null},"-"),(0,n.kt)("td",{parentName:"tr",align:null},"true")))),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-tsx"},"store.get('key');\n")),(0,n.kt)("h3",{id:"delete-a-value"},"Delete a value"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Param"),(0,n.kt)("th",{parentName:"tr",align:null},"Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"),(0,n.kt)("th",{parentName:"tr",align:null},"Default Value"),(0,n.kt)("th",{parentName:"tr",align:null},"Required"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"key"),(0,n.kt)("td",{parentName:"tr",align:null},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"Unique identifier used to delete a value."),(0,n.kt)("td",{parentName:"tr",align:null},"-"),(0,n.kt)("td",{parentName:"tr",align:null},"true")))),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-tsx"},"await store.delete('key');\n")),(0,n.kt)("h3",{id:"get-all-data"},"Get all data"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-tsx"},"store.getAll();\n")),(0,n.kt)("h3",{id:"subscribe-to-data-change"},"Subscribe to data change"),(0,n.kt)("p",null,"Attaches an event listener on store key\u2019s to listen for data change on a\nspecific key. ",(0,n.kt)("strong",{parentName:"p"},"Ideally called just after store is created.")),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Param"),(0,n.kt)("th",{parentName:"tr",align:null},"Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"),(0,n.kt)("th",{parentName:"tr",align:null},"Default Value"),(0,n.kt)("th",{parentName:"tr",align:null},"Required"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"key"),(0,n.kt)("td",{parentName:"tr",align:null},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"Unique identifier."),(0,n.kt)("td",{parentName:"tr",align:null},"-"),(0,n.kt)("td",{parentName:"tr",align:null},"true")))),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-tsx"},"store.subscribe('key', () => { ... });\n")),(0,n.kt)("h3",{id:"unsubscribe-to-data-change"},"Unsubscribe to data change"),(0,n.kt)("p",null,"Removes all event listeners attached to a store key."),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Param"),(0,n.kt)("th",{parentName:"tr",align:null},"Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"),(0,n.kt)("th",{parentName:"tr",align:null},"Default Value"),(0,n.kt)("th",{parentName:"tr",align:null},"Required"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"key"),(0,n.kt)("td",{parentName:"tr",align:null},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"Unique identifier."),(0,n.kt)("td",{parentName:"tr",align:null},"-"),(0,n.kt)("td",{parentName:"tr",align:null},"true")))),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-tsx"},"store.unsubscribe('key');\n")))}g.isMDXComponent=!0}}]);