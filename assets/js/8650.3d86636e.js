"use strict";(self.webpackChunkchat_2_db=self.webpackChunkchat_2_db||[]).push([[8650,1742],{41742:(t,e,i)=>{i.r(e),i.d(e,{dyte_sidebar:()=>l});var s=i(67503),a=i(92681),n=i(69750),o=i(24228),r=i(37692),d=i(86466),c=i(64734);i(24555);const l=class{constructor(t){(0,s.r)(this,t),this.stateUpdate=(0,s.c)(this,"dyteStateUpdate",7),this.close=()=>{this.stateUpdate.emit({activeSidebar:!1,sidebar:this.defaultSection}),d.s.sidebar=this.tab},this.enabledSections=["none"],this.defaultSection="chat",this.meeting=void 0,this.states=void 0,this.config=r.d,this.iconPack=a.d,this.t=(0,n.u)(),this.size=void 0,this.view="default",this.tab=this.defaultSection}connectedCallback(){this.viewChanged(this.view),this.statesChanged(this.states),this.meetingChanged(this.meeting),(0,d.o)("sidebar",(()=>this.statesChanged()))}disconnectedCallback(){var t,e;this.keydownListener&&document.removeEventListener("keydown",this.keydownListener),null===(e=null===(t=this.meeting)||void 0===t?void 0:t.stage)||void 0===e||e.removeListener("stageStatusUpdate",this.updateEnabledSections)}meetingChanged(t){var e,i;this.updateEnabledSections(t),null===(i=null===(e=this.meeting)||void 0===e?void 0:e.stage)||void 0===i||i.on("stageStatusUpdate",this.updateEnabledSections)}statesChanged(t){const e=t||d.s;null!=(null==e?void 0:e.sidebar)&&(this.tab=e.sidebar)}viewChanged(t){"full-screen"===t&&(this.keydownListener=t=>{"Escape"===t.key&&this.close()},document.addEventListener("keydown",this.keydownListener))}filterSections(t){if(!this.meeting.self.config)return t;const e=this.meeting.self.config;return t.filter((t=>e.controlBar.elements[t]))}viewSection(t){this.tab=t,this.stateUpdate.emit({activeSidebar:!0,sidebar:this.tab}),d.s.activeSidebar=!0,d.s.sidebar=this.tab}updateEnabledSections(t=this.meeting){const e=["none"];(0,c.c)(t)&&e.push("chat"),(0,c.a)(t)&&e.push("participants"),(0,c.b)(t)&&e.push("plugins"),(0,c.d)(t)&&e.push("polls"),this.enabledSections=e}render(){var t;const e={meeting:this.meeting,config:this.config,states:this.states||d.s,size:this.size,t:this.t,iconPack:this.iconPack};return!1===(null===(t=this.states)||void 0===t?void 0:t.activeSidebar)||"none"===this.tab?null:(0,s.h)(s.H,null,"full-screen"===this.view&&[(0,s.h)("h3",{class:"title"},this.t("About Call")),(0,s.h)("div",{id:"mobile-header"},this.filterSections(this.enabledSections).map((t=>(0,s.h)("dyte-button",{key:t,variant:"ghost",class:{active:this.tab===t},onClick:()=>this.viewSection(t),iconPack:this.iconPack,t:this.t},this.t(t)))))],(0,s.h)("dyte-button",{variant:"ghost",kind:"icon",class:"close",onClick:this.close,"aria-label":this.t("Close"),iconPack:this.iconPack,t:this.t},(0,s.h)("dyte-icon",{icon:this.iconPack.dismiss,iconPack:this.iconPack,t:this.t})),"full-screen"!==this.view&&(0,s.h)("h3",{class:"title"},this.t(this.tab)),"chat"===this.tab&&(0,s.h)(o.R,{element:"dyte-chat",defaults:e}),"polls"===this.tab&&(0,s.h)(o.R,{element:"dyte-polls",defaults:e}),"participants"===this.tab&&(0,s.h)(o.R,{element:"dyte-participants",defaults:e}),"plugins"===this.tab&&(0,s.h)(o.R,{element:"dyte-plugins",defaults:e}))}static get watchers(){return{meeting:["meetingChanged"],states:["statesChanged"],view:["viewChanged"]}}};l.style=":host{line-height:initial;font-family:var(--dyte-font-family, sans-serif);font-feature-settings:normal;font-variation-settings:normal}p{margin:var(--dyte-space-0, 0px);padding:var(--dyte-space-0, 0px)}:host{position:relative;box-sizing:border-box;display:flex;width:100%;max-width:var(--dyte-space-80, 320px);flex-direction:column;--tw-bg-opacity:1;background-color:rgba(var(--dyte-colors-background-1000, 8 8 8) / var(--tw-bg-opacity));color:rgb(var(--dyte-colors-text-1000, 255 255 255));overflow:hidden}.close{position:absolute;top:var(--dyte-space-3, 12px);left:var(--dyte-space-3, 12px)}.title{margin-left:var(--dyte-space-0, 0px);margin-right:var(--dyte-space-0, 0px);margin-top:var(--dyte-space-5, 20px);margin-bottom:var(--dyte-space-5, 20px);-webkit-user-select:none;-moz-user-select:none;user-select:none;padding:var(--dyte-space-0, 0px);text-align:center;font-size:16px;font-weight:400}#mobile-header{margin-top:var(--dyte-space-2, 8px);display:flex;align-items:center;justify-content:space-evenly;border-bottom:var(--dyte-border-width-sm, 1px) solid rgb(var(--dyte-colors-background-600, 60 60 60))}#mobile-header dyte-button{border-bottom:var(--dyte-border-width-md, 2px) solid transparent;border-radius:var(--dyte-border-radius-none, 0)}#mobile-header dyte-button:hover{background-color:transparent}#mobile-header dyte-button.active{border-color:rgb(var(--dyte-colors-brand-400, 53 110 253))}dyte-chat,dyte-participants,dyte-plugins{flex:1}:host([view='sidebar']){margin-left:var(--dyte-space-2, 8px);margin-right:var(--dyte-space-2, 8px);border-radius:var(--dyte-border-radius-lg, 12px);--tw-bg-opacity:1;background-color:rgba(var(--dyte-colors-background-900, 26 26 26) / var(--tw-bg-opacity))}:host([view='full-screen']){position:absolute;top:var(--dyte-space-0, 0px);right:var(--dyte-space-0, 0px);bottom:var(--dyte-space-0, 0px);left:var(--dyte-space-0, 0px);z-index:50;max-width:100%;border:none}"},64734:(t,e,i)=>{i.d(e,{a:()=>o,b:()=>r,c:()=>a,d:()=>n});var s=i(24555);const a=t=>{if(t&&!t.chat)return!1;const e=null==t?void 0:t.self.config;if(e&&!e.controlBar.elements.chat)return!1;const{chatPublic:i,chatPrivate:s}=t.self.permissions;return i.canSend||i.text||i.files||s.canSend||s.canReceive||s.files||s.text},n=t=>{if(t&&!t.polls)return!1;const e=null==t?void 0:t.self.config;if(e&&!e.controlBar.elements.polls)return!1;const{polls:i}=t.self.permissions;return i.canCreate||i.canView||i.canVote},o=t=>{var e,i;if((0,s.s)(t)&&!(null===(e=t.self.permissions)||void 0===e?void 0:e.acceptPresentRequests))return!1;if(t&&!t.participants)return!1;if("LIVESTREAM"===t.meta.viewType)return t.self.permissions.acceptPresentRequests||"ON_STAGE"===(null===(i=null==t?void 0:t.stage)||void 0===i?void 0:i.status);const a=null==t?void 0:t.self.config;return!(a&&!a.controlBar.elements.participants)},r=t=>{if((0,s.a)(t))return!1;if(t&&!t.plugins)return!1;if("LIVESTREAM"===t.meta.viewType)return"ON_STAGE"===t.stage.status;const e=null==t?void 0:t.self.config;if(e&&!e.controlBar.elements.plugins)return!1;const{plugins:i}=t.self.permissions;return i.canClose||i.canStart}}}]);