"use strict";(self.webpackChunkchat_2_db=self.webpackChunkchat_2_db||[]).push([[4771,6264],{86264:(i,t,e)=>{e.r(t),e.d(t,{dyte_recording_indicator:()=>r});var a=e(67503),n=e(92681),s=e(69750);const r=class{constructor(i){(0,a.r)(this,i),this.setIsRecording=i=>{this.isRecording="RECORDING"===i},this.meeting=void 0,this.size=void 0,this.t=(0,s.u)(),this.iconPack=n.d,this.isRecording=void 0}connectedCallback(){this.meetingChanged(this.meeting)}disconnectedCallback(){var i;null===(i=this.meeting)||void 0===i||i.recording.removeListener("recordingUpdate",this.updateRecordingStatus)}meetingChanged(i){null!=i&&(this.setIsRecording(i.recording.recordingState),this.updateRecordingStatus=i=>{this.setIsRecording(i)},i.recording.addListener("recordingUpdate",this.updateRecordingStatus))}render(){return(0,a.h)(a.H,null,this.isRecording&&(0,a.h)("div",{class:"indicator","aria-label":this.t("This meeting is being recorded"),part:"indicator"},(0,a.h)("dyte-icon",{icon:this.iconPack.recording,"aria-hidden":!0,tabIndex:-1,part:"icon",iconPack:this.iconPack,t:this.t}),(0,a.h)("span",null,this.t("REC"))))}static get watchers(){return{meeting:["meetingChanged"]}}};r.style=":host{line-height:initial;font-family:var(--dyte-font-family, sans-serif);font-feature-settings:normal;font-variation-settings:normal}p{margin:var(--dyte-space-0, 0px);padding:var(--dyte-space-0, 0px)}:host{margin-left:var(--dyte-space-2, 8px);margin-right:var(--dyte-space-2, 8px);display:block}:host[size='sm']{margin-left:var(--dyte-space-1, 4px);margin-right:var(--dyte-space-1, 4px)}.indicator{display:flex;flex-direction:row;align-items:center;font-size:14px;--tw-text-opacity:1;color:rgba(var(--dyte-colors-danger, 255 45 45) / var(--tw-text-opacity))}dyte-icon{margin-right:var(--dyte-space-1, 4px);height:var(--dyte-space-5, 20px);width:var(--dyte-space-5, 20px);-webkit-animation:blink 4s linear infinite;animation:blink 4s linear infinite}:host([size='sm']) dyte-icon{height:var(--dyte-space-4, 16px);width:var(--dyte-space-4, 16px)}:host([size='sm']) .indicator span{display:none}@-webkit-keyframes blink{0%,10%{opacity:0}11%,100%{opacity:1}}@keyframes blink{0%,10%{opacity:0}11%,100%{opacity:1}}"}}]);