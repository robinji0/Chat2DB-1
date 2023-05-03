"use strict";(self.webpackChunkchat_2_db=self.webpackChunkchat_2_db||[]).push([[597,4847],{50597:(e,i,t)=>{t.r(i),t.d(i,{dyte_participants_audio:()=>n});var a=t(67503),s=t(86386),r=t(88581),o=t(51922);class d{constructor(){this.audio=document.createElement("audio"),this.audio.autoplay=!0,this.audioStream=new MediaStream,this.audio.srcObject=this.audioStream,this.audioTracks=[]}addTrack(e,i){this.audioTracks.some((i=>i.id===e))||(this.audioTracks.push({id:e,track:i}),this.audioStream.addTrack(i),this.play())}removeTrack(e){const i=this.audioTracks.find((i=>i.id===e));null!=i&&(this.audioStream.removeTrack(i.track),this.audioTracks=this.audioTracks.filter((i=>i.id!==e)))}async play(){var e;this.audio.srcObject=this.audioStream,await(null===(e=this.audio.play())||void 0===e?void 0:e.catch((e=>{"NotAllowedError"===e.name?null!=this._onError&&this._onError():"AbortError"!==e.name&&s.l.error("[dyte-audio] play() error\n",e)})))}async setDevice(e){var i,t,a;await(null===(a=null===(t=(i=this.audio).setSinkId)||void 0===t?void 0:t.call(i,e))||void 0===a?void 0:a.catch((e=>{s.l.error("[dyte-audio] setSinkId() error\n",e)})))}onError(e){this._onError=e}}const n=class{constructor(e){(0,a.r)(this,e),this.dialogClose=(0,a.c)(this,"dialogClose",7),this.onDyteDialogClose=()=>{this.showPlayDialog=!1,this.dialogClose.emit()},this.meeting=void 0,this.iconPack=o.d,this.t=(0,r.u)(),this.showPlayDialog=!1}componentDidLoad(){this.meetingChanged(this.meeting)}disconnectedCallback(){null!=this.meeting&&(this.audioUpdateListener&&this.meeting.participants.joined.removeListener("audioUpdate",this.audioUpdateListener),this.screenShareUpdateListener&&this.meeting.participants.joined.removeListener("screenShareUpdate",this.screenShareUpdateListener),this.participantLeftListener&&this.meeting.participants.joined.removeListener("participantLeft",this.participantLeftListener),this.deviceUpdateListener&&this.meeting.self.removeListener("deviceUpdate",this.deviceUpdateListener))}async meetingChanged(e){if(null!=e){this.audio=new d,this.audio.onError((()=>{this.showPlayDialog=!0})),this.audio.play();const i=e.self.getCurrentDevices();null!=i.speaker&&await this.audio.setDevice(i.speaker.deviceId),this.audioUpdateListener=({id:e,audioEnabled:i,audioTrack:t})=>{const a=`audio-${e}`;i&&null!=t?this.audio.addTrack(a,t):this.audio.removeTrack(a)};{const i=e.participants.joined.toArray();for(const e of i)this.audioUpdateListener(e)}this.participantLeftListener=({id:e})=>{this.audio.removeTrack(`audio-${e}`),this.audio.removeTrack(`screenshare-${e}`)},this.screenShareUpdateListener=({id:e,screenShareEnabled:i,screenShareTracks:t})=>{const a=`screenshare-${e}`;i&&null!=t.audio?this.audio.addTrack(a,t.audio):this.audio.removeTrack(a)},this.deviceUpdateListener=({device:e,preview:i})=>{i||"audiooutput"===e.kind&&this.audio.setDevice(e.deviceId)},e.participants.joined.addListener("audioUpdate",this.audioUpdateListener),e.participants.joined.addListener("screenShareUpdate",this.screenShareUpdateListener),e.participants.joined.addListener("participantLeft",this.participantLeftListener),e.self.addListener("deviceUpdate",this.deviceUpdateListener)}}render(){return(0,a.h)(a.H,null,this.showPlayDialog&&(0,a.h)("dyte-dialog",{open:!0,onDyteDialogClose:this.onDyteDialogClose,hideCloseButton:!0,iconPack:this.iconPack,t:this.t},(0,a.h)("div",{class:"modal"},(0,a.h)("h3",null,this.t("Allow Audio Playback")),(0,a.h)("p",null,this.t("In order to play audio properly on your device, click the button below")),(0,a.h)("dyte-button",{kind:"wide",onClick:()=>{this.audio.play(),this.onDyteDialogClose()},title:this.t("Play Audio"),iconPack:this.iconPack,t:this.t},this.t("Play Audio")))))}static get watchers(){return{meeting:["meetingChanged"]}}};n.style=":host{line-height:initial;font-family:var(--dyte-font-family, sans-serif);display:block;color:rgb(var(--dyte-colors-text-1000, 255 255 255))}.modal{box-sizing:border-box;width:100%;max-width:var(--dyte-space-96, 384px);padding:var(--dyte-space-4, 16px);border-radius:var(--dyte-border-radius-md, 8px);--tw-bg-opacity:1;background-color:rgba(var(--dyte-colors-background-1000, 8 8 8) / var(--tw-bg-opacity))}.modal h3{margin:var(--dyte-space-0, 0px);padding:var(--dyte-space-0, 0px);font-size:24px;font-weight:500}.modal p{margin-top:var(--dyte-space-4, 16px);margin-bottom:var(--dyte-space-6, 24px)}.modal dyte-button{width:100%}"}}]);