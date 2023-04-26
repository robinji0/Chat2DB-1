"use strict";(self.webpackChunkchat_2_db=self.webpackChunkchat_2_db||[]).push([[1394],{62968:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>m,frontMatter:()=>o,metadata:()=>p,toc:()=>c});n(67294);var a=n(3905);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}const o={title:"Manage your Plugin",sidebar_position:5},s=void 0,p={unversionedId:"setup/manage",id:"setup/manage",title:"Manage your Plugin",description:"Version specific deployments",source:"@site/docs/plugin-sdk/setup/manage.mdx",sourceDirName:"setup",slug:"/setup/manage",permalink:"/plugin-sdk/setup/manage",draft:!1,editUrl:"https://github.com/dyte-in/docs/tree/main/docs/plugin-sdk/setup/manage.mdx",tags:[],version:"current",lastUpdatedAt:1682490858,formattedLastUpdatedAt:"Apr 26, 2023",sidebarPosition:5,frontMatter:{title:"Manage your Plugin",sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"Set Up Development Environment",permalink:"/plugin-sdk/setup/develop"},next:{title:"Installation",permalink:"/plugin-sdk/usage/installation"}},u={},c=[{value:"Version specific deployments",id:"version-specific-deployments",level:3},{value:"Unpublishing",id:"unpublishing",level:3},{value:"Plugin configuration",id:"plugin-configuration",level:3},{value:"Access control and visibility",id:"access-control-and-visibility",level:3},{value:"Next Step",id:"next-step",level:3}],d={toc:c},g="wrapper";function m(e){var{components:t}=e,n=i(e,["components"]);return(0,a.kt)(g,l(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},a=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),a.forEach((function(t){r(e,t,n[t])}))}return e}({},d,n),{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h3",{id:"version-specific-deployments"},"Version specific deployments"),(0,a.kt)("p",null,"Dyte lets you publish multiple versions of your plugins. You can choose to\ndeploy a specific version."),(0,a.kt)("p",null,"List all available versions of your plugin"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"dyte plugins version list\n")),(0,a.kt)("p",null,"You can now select the version you wish to deploy."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"dyte plugins version change-latest -v <version>\n")),(0,a.kt)("h3",{id:"unpublishing"},"Unpublishing"),(0,a.kt)("p",null,"Unpublishing a plugin removes all versions of it from our database and your\nmeetings."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"dyte plugins unpublish\n")),(0,a.kt)("p",null,"If you wish to delete a specific version of the plugin you can do that with"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"dyte plugins version delete -v <version>\n")),(0,a.kt)("h3",{id:"plugin-configuration"},"Plugin configuration"),(0,a.kt)("p",null,"You can update your ",(0,a.kt)("inlineCode",{parentName:"p"},"dyte-config")," to update properties like name, description,\nbuild path and more. These changes will reflect once you publish or deploy the\nplugin."),(0,a.kt)("h3",{id:"access-control-and-visibility"},"Access control and visibility"),(0,a.kt)("p",null,"Each Dyte user is associated to a preset. This preset dictates the meeting\nexpirence for that user. You can customize how this preset can interact with a\nplugin using the ",(0,a.kt)("a",{parentName:"p",href:"https://dev.dyte.io/roles-presets"},"Preset Editor"),"."),(0,a.kt)("p",null,"In your preset editor you can select the plugins you want a preset to have\naccess to."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Manage Plugin Interactions")),(0,a.kt)("p",null,"We let you manage how your users interacts with a plugin. This setting can be\nconfigured differently for each plugin."),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"th"}," Control ")),(0,a.kt)("th",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"th"}," Description ")))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"View Only"),(0,a.kt)("td",{parentName:"tr",align:null},"The user can only view the plugin.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Full Access"),(0,a.kt)("td",{parentName:"tr",align:null},"The user can interact with the plugin and has control over it.")))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Manage Access Control.")),(0,a.kt)("p",null,"You can specify who has access to launch/close plugins."),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"th"}," Control ")),(0,a.kt)("th",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"th"}," Description ")))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Launch"),(0,a.kt)("td",{parentName:"tr",align:null},"Preset can launch plugins")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Close"),(0,a.kt)("td",{parentName:"tr",align:null},"Preset can close plugins")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Control"),(0,a.kt)("td",{parentName:"tr",align:null},"Preset can give others the access to launch/close plugins temporarily")))),(0,a.kt)("h3",{id:"next-step"},"Next Step"),(0,a.kt)("p",null,"Understand how you can use the modules and offerings provided by the Plugin SDK\nto build your plugin."))}m.isMDXComponent=!0}}]);