(function(m,R,e,L,h,b,N,_,d,x){"use strict";const{TextStyleSheet:F}=R.findByProps("TextStyleSheet"),{View:E,Text:C,Pressable:H}=b.General,{FormRow:I}=b.Forms;R.find(function(t){return t.render?.name==="ActionSheet"}),R.findByProps("openLazy","hideActionSheet"),R.findByProps("ActionSheetTitleHeader","ActionSheetCloseButton","ActionSheetContentContainer");function $(t){const r=R.findByProps("colors","meta"),s=R.findByStoreName("ThemeStore");return r.meta.resolveSemanticColor(s.theme,t)}function O(t){let{title:r,onPress:s,icon:i}=t;const n=e.stylesheet.createThemedStyleSheet({androidRipple:{color:d.semanticColors.ANDROID_RIPPLE},mainText:{fontFamily:e.constants.Fonts.PRIMARY_SEMIBOLD,fontSize:14,includeFontPadding:!1,letterSpacing:void 0,lineHeight:18,textTransform:"none",color:d.semanticColors.HEADER_SECONDARY},icon:{height:14,tintColor:d.semanticColors.HEADER_SECONDARY}}),a=s?H:E;return e.React.createElement(a,{android_ripple:n.androidRipple,disabled:!1,accessibilityRole:"button",onPress:s,style:{marginBottom:8,flexDirection:"row",justifyContent:"flex-start",alignItems:"center"}},i&&e.React.createElement(E,{style:{marginRight:4}},e.React.createElement(I.Icon,{style:n.icon,source:i,size:"small"})),e.React.createElement(C,{style:n.mainText},r))}function D(t){let{title:r,onTitlePress:s,icon:i,children:n,padding:a}=t;const f=e.stylesheet.createThemedStyleSheet({main:{backgroundColor:d.semanticColors.BACKGROUND_TERTIARY,borderRadius:16,overflow:"hidden",flex:1}});return e.React.createElement(E,{style:{marginHorizontal:16,marginTop:16}},e.React.createElement(O,{title:r,onPress:s,icon:i}),e.React.createElement(E,{style:f.main},a?e.React.createElement(E,{style:{paddingHorizontal:16,paddingVertical:16}},n):n))}var M;(function(t){function r(i){let{children:n,onPress:a}=i;return e.React.createElement(k,{variant:"text-md/bold",onPress:a},n)}t.Bold=r;function s(i){let{children:n,onPress:a}=i;return e.React.createElement(C,{style:{textDecorationLine:"underline"},onPress:a},n)}t.Underline=s})(M||(M={}));function k(t){let{variant:r,lineClamp:s,color:i,align:n,style:a,onPress:f,getChildren:o,children:S,liveUpdate:c}=t;const[g,y]=e.React.useReducer(function(p){return~p},0),u=new Date().setMilliseconds(1e3);return c&&setTimeout(function(){return y()},u-Date.now()),e.React.createElement(C,{style:[r?F[r]:{},i?{color:$(d.semanticColors[i])}:{},n?{textAlign:n}:{},a??{}],numberOfLines:s,onPress:f},o?.()??S)}const{ScrollView:q,Text:T}=b.General,{FormSwitchRow:P,FormIcon:v}=b.Forms,{parseTimestamp:Y}=R.findByProps("parseTimestamp","unparseTimestamp");function z(t){let{style:r}=t;const[s,i]=e.React.useReducer(function(c){return~c},0),n=new Date().setMilliseconds(1e3);setTimeout(function(){return i()},n-Date.now());const a=new Date,f=[[4],[19,20],[4,18,2],a.getHours()<12&&[a.getHours()],[a.getHours(),a.getMinutes()],[a.getHours(),a.getMinutes(),a.getSeconds()]].filter(function(c){return!!c}),o=[];let S=-1;for(const[c,g,y]of f){S++;const u=new Date;u.setHours(c,g??0,y||0);let p=[u.getHours().toString(),g!==void 0&&u.getMinutes().toString().padStart(2,"0"),y!==void 0&&u.getSeconds().toString().padStart(2,"0")].filter(function(j){return!!j}).join(":");c<12&&(p+=" AM");const A=Y(Math.floor(u.getTime()/1e3).toString(),l.alwaysLong?"T":"t");o.push(l.reqBackticks?e.React.createElement(T,{style:r.code},p):p),o.push(" \u2014 "),o.push(e.React.createElement(T,{style:r.timestamp,onPress:function(){return x.showToast(A.full,h.getAssetIDByName("ic_information_24px"))}},A.formatted)),S!==f.length-1&&o.push(`
`)}return e.React.createElement(e.React.Fragment,null,...o)}function G(){l.reqBackticks??=!0,l.alwaysLong??=!1,L.useProxy(l);const t=e.stylesheet.createThemedStyleSheet({mainText:{fontFamily:e.constants.Fonts.DISPLAY_NORMAL,includeFontPadding:!1,fontSize:16,color:d.semanticColors.TEXT_NORMAL},boldText:{fontFamily:e.constants.Fonts.DISPLAY_BOLD,includeFontPadding:!1,color:d.semanticColors.TEXT_NORMAL},code:{fontFamily:e.constants.Fonts.CODE_SEMIBOLD,includeFontPadding:!1,color:d.semanticColors.TEXT_NORMAL,backgroundColor:d.semanticColors.BACKGROUND_SECONDARY},timestamp:{fontFamily:e.constants.Fonts.DISPLAY_NORMAL,includeFontPadding:!1,color:d.semanticColors.TEXT_NORMAL,backgroundColor:d.semanticColors.BACKGROUND_MODIFIER_ACCENT}});return e.React.createElement(q,null,e.React.createElement(D,{title:"Info",icon:h.getAssetIDByName("ic_info_24px"),padding:!0},e.React.createElement(T,{style:t.mainText},"Send a message with a time code (in",e.React.createElement(T,{style:t.boldText}," HH:MM")," or",e.React.createElement(T,{style:t.boldText}," HH:MM:SS")," format) and automatically turn it into a timestamp",`

`,e.React.createElement(z,{style:t}))),e.React.createElement(D,{title:"Settings",icon:h.getAssetIDByName("settings")},e.React.createElement(P,{label:"Require Backticks",subLabel:"Require time to be surrounded by backticks",leading:e.React.createElement(v,{source:h.getAssetIDByName("ic_message_edit")}),onValueChange:function(){return l.reqBackticks=!l.reqBackticks},value:l.reqBackticks}),e.React.createElement(P,{label:"Always Long Time",subLabel:["Always display ",e.React.createElement(T,{style:t.boldText},"HH:MM:SS")," instead of ",e.React.createElement(T,{style:t.boldText},"HH:MM")],leading:e.React.createElement(v,{source:h.getAssetIDByName("ic_message_edit")}),onValueChange:function(){return l.alwaysLong=!l.alwaysLong},value:l.alwaysLong})))}const U=R.findByProps("sendMessage","receiveMessage"),l=_.storage,w=function(t){return/^\s$/.test(t)};let B;var V={onLoad:function(){B=N.before("sendMessage",U,function(t){const r=t[1];let s=r?.content;if(typeof s!="string"||typeof r!="object")return;const i=l.reqBackticks?["`","`"]:["(?:\\s|^)","(?:\\s|$)"],n={otN:"[0-9]{1,2}",tN:"[0-9]{2}",abrv:"(?: ?(AM|PM))"},a=[`(${n.otN}:${n.tN}:${n.tN})${n.abrv}?`,`(${n.otN}:${n.tN})${n.abrv}?`,`(${n.otN})${n.abrv}`].map(function(f){return new RegExp(`${i[0]}${f}${i[1]}`,"gi")});for(const f of a)s=s.replace(f,function(o,S,c){let[g,y,u]=S.split(":").map(function(A){return parseInt(A)});if(g<0||g>24||typeof y=="number"&&(y<0||y>60)||typeof u=="number"&&(u<0||u>60))return o;c&&(c.toLowerCase()==="pm"&&g!==12?g+=12:c.toLowerCase()==="am"&&g===12&&(g=0));const p=new Date;return p.setHours(g,y??0,u??0,0),`${w(o[0])?o[0]:""}<t:${Math.floor(p.getTime()/1e3)}:${l.alwaysLong?"T":"t"}>${w(o[o.length-1])?o[o.length-1]:""}`});r.content=s})},onUnload:function(){return B?.()},settings:G};return m.default=V,m.vstorage=l,Object.defineProperty(m,"__esModule",{value:!0}),m})({},vendetta.metro,vendetta.metro.common,vendetta.storage,vendetta.ui.assets,vendetta.ui.components,vendetta.patcher,vendetta.plugin,vendetta.ui,vendetta.ui.toasts);
