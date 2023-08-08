(function(R,C,z,M,c,e,A,g,E,P,Re,b,F,G){"use strict";const $=[/\bmr*e?ow+\b/,/\bnya+\b/];function k(t){return $.some(function(r){return r.test(t)})}const U=c.findByStoreName("ThemeStore"),V=c.findByProps("colors","meta"),{TextStyleSheet:Y}=c.findByProps("TextStyleSheet"),{View:m,Text:x,Pressable:j}=g.General,{FormRow:X}=g.Forms;c.find(function(t){return t.render?.name==="ActionSheet"}),c.findByProps("openLazy","hideActionSheet"),c.findByProps("ActionSheetTitleHeader","ActionSheetCloseButton","ActionSheetContentContainer"),c.findByName("Navigator"),c.findByProps("getRenderCloseButton"),c.findByProps("popModal","pushModal");function Q(t){return V.meta.resolveSemanticColor(U.theme,t)}function K(t){let{title:r,onPress:a,icon:n}=t;const i=e.stylesheet.createThemedStyleSheet({androidRipple:{color:E.semanticColors.ANDROID_RIPPLE},mainText:{fontFamily:e.constants.Fonts.PRIMARY_SEMIBOLD,fontSize:14,includeFontPadding:!1,letterSpacing:void 0,lineHeight:18,textTransform:"none",color:E.semanticColors.HEADER_SECONDARY},icon:{height:14,tintColor:E.semanticColors.HEADER_SECONDARY}}),o=a?j:m;return e.React.createElement(o,{android_ripple:i.androidRipple,disabled:!1,accessibilityRole:"button",onPress:a,style:{marginBottom:8,flexDirection:"row",justifyContent:"flex-start",alignItems:"center"}},n&&e.React.createElement(m,{style:{marginRight:4}},e.React.createElement(X.Icon,{style:i.icon,source:n,size:"small"})),e.React.createElement(x,{style:i.mainText},r))}function W(t){let{title:r,onTitlePress:a,icon:n,children:i,padding:o}=t;const l=e.stylesheet.createThemedStyleSheet({main:{backgroundColor:E.semanticColors.BACKGROUND_TERTIARY,borderRadius:16,overflow:"hidden",flex:1}});return e.React.createElement(m,{style:{marginHorizontal:16,marginTop:16}},e.React.createElement(K,{title:r,onPress:a,icon:n}),e.React.createElement(m,{style:l.main},o?e.React.createElement(m,{style:{paddingHorizontal:16,paddingVertical:16}},i):i))}var B;(function(t){function r(n){let{children:i,onPress:o}=n;return e.React.createElement(T,{variant:"text-md/bold",onPress:o},i)}t.Bold=r;function a(n){let{children:i,onPress:o}=n;return e.React.createElement(x,{style:{textDecorationLine:"underline"},onPress:o},i)}t.Underline=a})(B||(B={}));function T(t){let{variant:r,lineClamp:a,color:n,align:i,style:o,onPress:l,getChildren:y,children:w,liveUpdate:f}=t;const[u,h]=e.React.useReducer(function(D){return~D},0);return e.React.useEffect(function(){if(!f)return;const D=new Date().setMilliseconds(1e3);let H,O;return O=setTimeout(function(){h(),H=setInterval(h,1e3)},D-Date.now()),function(){clearTimeout(O),clearInterval(H)}},[]),e.React.createElement(x,{style:[r?Y[r]:{},n?{color:Q(E.semanticColors[n])}:{},i?{textAlign:i}:{},o??{}],numberOfLines:a,onPress:l},y?.()??w)}const{triggerHaptic:I}=c.findByProps("triggerHaptic"),q=async function(t){I();const r=setInterval(I,1);return new Promise(function(a){return setTimeout(function(){return a(clearInterval(r))},t)})};function J(t){let{until:r}=t;const[a,n]=e.React.useReducer(function(h){return~h},0),i=e.React.useRef(Date.now()),o=e.React.useRef(0);e.React.useEffect(function(){r>=Date.now()&&setTimeout(n,1)});const l=Math.max(r-Date.now(),0),y=Date.now()-i.current,w=r-i.current,f=y/w;let u=0;return l<=1e3?u=l%100:l<=3e3?u=l%250:l<=5e3?u=l%500:u=l%1e3,u>o.current&&e.ReactNative.Platform.select({android:e.ReactNative.Vibration.vibrate(75),ios:q(75)}),o.current=u,e.React.createElement(T,{variant:"heading-xl/semibold",color:"TEXT_NORMAL",style:{transform:[{rotate:`${Math.floor((Math.random()-.5)*(f*30))}deg`},{scale:1+f/3+Math.max(l%1e3-500,0)/1e3}]}},Math.floor(l/1e3),".",Math.floor(l%1e3/10).toString().padStart(2,"0"),"s")}function Z(t){const[r,a]=e.React.useReducer(function(i){return~i},0);e.React.useEffect(function(){t.until>=Date.now()&&setTimeout(a,1)});const n=Math.max(t.until-Date.now(),0);return e.React.createElement(T,{...b.without(t,"until"),style:{transform:[{scale:1+Math.max(n*2%1e3-500,0)/5e3}]}})}function ee(t){const[r,a]=e.React.useReducer(function(o){return~o},0),n=e.React.useRef(Date.now()+t.duration);e.React.useEffect(function(){n.current>=Date.now()&&setTimeout(a,1)});const i=Math.max(n.current-Date.now(),0);return e.React.createElement(T,{...b.without(t,"duration"),style:{transform:[{scale:1+i/t.duration*.2}]}})}function te(t){const[r,a]=e.React.useReducer(function(i){return~i},0);e.React.useEffect(function(){t.until>=Date.now()&&setTimeout(a,1)});const n=Math.max(t.until-Date.now(),0);return e.React.createElement(g.Button,{...b.without(t,"until"),style:[...t.style,{transform:[{scale:1+Math.max(n*2%1e3-500,0)/8e3}]}]})}const{crash:ne}=c.findByProps("crash"),{logout:ae}=c.findByProps("logout");function re(){s.punishment==="mute"?d.muted=Date.now()+12e3:s.punishment==="crash"?ne():s.punishment==="logout"&&ae()}const{View:N}=g.General,{close:ie}=c.findByProps("openLazy","close");function se(t){let{whoMew:r}=t;const a=e.ReactNative.Dimensions.get("screen"),n=[[a.width*.1,a.width*.9],[a.height*.1,a.height*.9]],i=(s.explodeTime??5)*1e3,[o,l]=e.React.useState(!1),[y,w]=e.React.useState(!1),f=e.React.useRef(Date.now()+i),u=e.React.useRef([Math.random()*(n[0][1]-n[0][0])+n[0][0],Math.random()*(n[1][1]-n[1][0])+n[1][0]]);d.active=!0;const h=function(){d.active=!1,d.cooldown=Date.now()+1e4,ie()};return e.React.useEffect(function(){setTimeout(function(){return l(!0)},i),o&&setTimeout(y?h:function(){h(),re()},1e3)},[o]),e.React.createElement(N,{duration:500,fade:"in",style:{backgroundColor:"#0005",width:a.width,height:a.height},animateOnInit:!0},e.React.createElement(N,{style:{flexDirection:"column",alignItems:"center",justifyContent:"center",width:"100%",height:"100%"}},o?e.React.createElement(ee,{variant:"heading-xxl/bold",color:"TEXT_NORMAL",duration:350},y?"Good job!":"Better luck next time!"):e.React.createElement(e.React.Fragment,null,e.React.createElement(Z,{variant:"heading-xxl/bold",color:"TEXT_NORMAL",style:{marginBottom:12},until:f.current,align:"center"},"Quick, ",r," meowed!"),e.React.createElement(J,{until:f.current}))),!o&&e.React.createElement(te,{text:"Tap Me!",color:"green",size:"small",onPress:function(){w(!0),l(!0)},style:[{position:"absolute",zIndex:2,left:u.current[0],top:u.current[1],width:90}],until:f.current}))}const oe=c.findByStoreName("SelectedChannelStore"),le=c.findByStoreName("UserStore"),{ChatInput:ce}=c.findByProps("ChatInput"),_=function(t){const r=le.getCurrentUser(),a=t.channelId===oe.getChannelId()||t.message.mentions.find(function(n){return n.id===r.id});if(!(t.message.state==="SENDING"||t.message.author.id!==r.id||e.ReactNative.AppState.currentState!=="active"||!a)&&k(t.message.content)&&!d.active&&Date.now()>d.cooldown)return A.showCustomAlert(se,{whoMew:t.message.author.username})};function L(){const t=new Array;return e.FluxDispatcher.subscribe("MESSAGE_CREATE",_),t.push(function(){return e.FluxDispatcher.unsubscribe("MESSAGE_CREATE",_)}),t.push(G.after("renderInput",ce.prototype,function(r,a){const n=b.findInReactTree(a,function(i){return i?.type?.name==="ChatInput"});n&&d.muted>=Date.now()&&(n.props.editable=!1,n.props.text="",n.props.placeholder=e.i18n.Messages.READ_ONLY_CHANNEL)})),function(){return t.forEach(function(r){return r()})}}const{ScrollView:ue}=g.General,{FormRow:v,FormRadioRow:p}=g.Forms;function de(){return s.explodeTime??=5,s.punishment??="crash",F.useProxy(s),React.createElement(ue,null,React.createElement(W,{title:"Settings",icon:P.getAssetIDByName("ic_cog_24px")},React.createElement(v,{label:"Reaction time",subLabel:"How much time you have to tap the button",leading:React.createElement(v.Icon,{source:P.getAssetIDByName("ic_message_edit")})}),React.createElement(p,{label:"3 seconds",subLabel:"Hard",onPress:function(){return s.explodeTime=3},selected:s.explodeTime===3,style:{marginHorizontal:12}}),React.createElement(p,{label:"5 seconds",subLabel:"Medium",onPress:function(){return s.explodeTime=5},selected:s.explodeTime===5,style:{marginHorizontal:12}}),React.createElement(p,{label:"10 seconds",subLabel:"Easy",onPress:function(){return s.explodeTime=10},selected:s.explodeTime===10,style:{marginHorizontal:12}}),React.createElement(v,{label:"Punishment",leading:React.createElement(v.Icon,{source:P.getAssetIDByName("ic_message_edit")})}),React.createElement(p,{label:"Crash Discord",subLabel:"Quick and painless!",onPress:function(){return s.punishment="crash"},selected:s.punishment==="crash",style:{marginHorizontal:12}}),React.createElement(p,{label:"Mute for 10s",onPress:function(){return s.punishment="mute"},selected:s.punishment==="mute",style:{marginHorizontal:12}}),React.createElement(p,{label:"Log out",subLabel:"Not recommended lol",onPress:function(){return s.punishment="logout"},selected:s.punishment==="logout",style:{marginHorizontal:12}})))}const s=z.storage,fe=5e3,d={active:!1,cooldown:0,muted:0};let S;var he={onLoad:function(){s.installProgress===void 0?(s.installProgress=!1,setImmediate(function(){M.stopPlugin(C.plugin.id,!0)})):s.installProgress===!1?A.showConfirmationAlert({title:"Warning",content:"This plugin can mute you in all channels, crash your discord and log you out. By pressing Okay you acknowledge this (disabling this plugin will stop this behaviour)",confirmText:"Okay",confirmColor:"brand",onConfirm:function(){s.installProgress=!0,S=L()},cancelText:"Cancel",onCancel:function(){return M.removePlugin(C.plugin.id)}}):s.installProgress&&(S=L())},onUnload:function(){return S?.()},settings:de};return R.default=he,R.explodeTime=fe,R.isMeow=d,R.vstorage=s,Object.defineProperty(R,"__esModule",{value:!0}),R})({},vendetta,vendetta.plugin,vendetta.plugins,vendetta.metro,vendetta.metro.common,vendetta.ui.alerts,vendetta.ui.components,vendetta.ui,vendetta.ui.assets,vendetta.ui.toasts,vendetta.utils,vendetta.storage,vendetta.patcher);
