(function(y,Y,h,d,o,r,u,p,q,K){"use strict";const J=o.findByStoreName("ThemeStore"),Q=o.findByProps("colors","meta"),{TextStyleSheet:Z}=o.findByProps("TextStyleSheet"),{View:R,Text:x,Pressable:ee}=u.General,{FormRow:te}=u.Forms;o.find(function(e){return e.render?.name==="ActionSheet"}),o.findByProps("openLazy","hideActionSheet"),o.findByProps("ActionSheetTitleHeader","ActionSheetCloseButton","ActionSheetContentContainer"),o.findByName("Navigator"),o.findByProps("getRenderCloseButton"),o.findByProps("popModal","pushModal");function ne(e){return Q.meta.resolveSemanticColor(J.theme,e)}function re(e,t){const n=e.discriminator==="0";return e.avatar?`https://cdn.discordapp.com/avatars/${e.id}/${t&&e.avatar.startsWith("a_")?`${e.avatar}.gif`:`${e.avatar}.png`}`:`https://cdn.discordapp.com/embed/avatars/${n?(parseInt(e.id)>>22)%6:parseInt(e.discriminator)%5}`}function ie(e){let{title:t,onPress:n,icon:i}=e;const a=r.stylesheet.createThemedStyleSheet({androidRipple:{color:p.semanticColors.ANDROID_RIPPLE},mainText:{fontFamily:r.constants.Fonts.PRIMARY_SEMIBOLD,fontSize:14,includeFontPadding:!1,letterSpacing:void 0,lineHeight:18,textTransform:"none",color:p.semanticColors.HEADER_SECONDARY},icon:{height:14,tintColor:p.semanticColors.HEADER_SECONDARY}}),s=n?ee:R;return r.React.createElement(s,{android_ripple:a.androidRipple,disabled:!1,accessibilityRole:"button",onPress:n,style:{marginBottom:8,flexDirection:"row",justifyContent:"flex-start",alignItems:"center"}},i&&r.React.createElement(R,{style:{marginRight:4}},r.React.createElement(te.Icon,{style:a.icon,source:i,size:"small"})),r.React.createElement(x,{style:a.mainText},t))}function ae(e){let{title:t,onTitlePress:n,icon:i,children:a,padding:s}=e;const c=r.stylesheet.createThemedStyleSheet({main:{backgroundColor:p.semanticColors.BACKGROUND_TERTIARY,borderRadius:16,overflow:"hidden",flex:1}});return r.React.createElement(R,{style:{marginHorizontal:16,marginTop:16}},r.React.createElement(ie,{title:t,onPress:n,icon:i}),r.React.createElement(R,{style:c.main},s?r.React.createElement(R,{style:{paddingHorizontal:16,paddingVertical:16}},a):a))}var $;(function(e){function t(i){let{children:a,onPress:s}=i;return r.React.createElement(v,{variant:"text-md/bold",onPress:s},a)}e.Bold=t;function n(i){let{children:a,onPress:s}=i;return r.React.createElement(x,{style:{textDecorationLine:"underline"},onPress:s},a)}e.Underline=n})($||($={}));function v(e){let{variant:t,lineClamp:n,color:i,align:a,style:s,onPress:c,getChildren:l,children:b,liveUpdate:E}=e;const[m,H]=r.React.useReducer(function(C){return~C},0);return r.React.useEffect(function(){if(!E)return;const C=new Date().setMilliseconds(1e3);let W,X;return X=setTimeout(function(){H(),W=setInterval(H,1e3)},C-Date.now()),function(){clearTimeout(X),clearInterval(W)}},[]),r.React.createElement(x,{style:[t?Z[t]:{},i?{color:ne(p.semanticColors[i])}:{},a?{textAlign:a}:{},s??{}],numberOfLines:n,onPress:c},l?.()??b)}const{showUserProfile:U}=o.findByProps("showUserProfile"),{fetchProfile:F}=o.findByProps("fetchProfile"),A=o.findByStoreName("UserStore");function se(e){let{userId:t,color:n,loadUsername:i,children:a}=e;const[s,c]=r.React.useState(!1);return r.React.useEffect(function(){return!s&&i&&(A.getUser(t)?c(A.getUser(t).username):F(t).then(function(l){return c(l.user.username)}))},[i]),r.React.createElement(v,{variant:"text-md/bold",color:n??"TEXT_NORMAL",onPress:function(){return A.getUser(t)?U({userId:t}):F(t).then(function(){return U({userId:t})})}},i?`@${s??"..."}`:a)}function oe(e,t){if(t.has(e))throw new TypeError("Cannot initialize the same private elements twice on an object")}function le(e,t){return t.get?t.get.call(e):t.value}function ce(e,t,n){if(t.set)t.set.call(e,n);else{if(!t.writable)throw new TypeError("attempted to set read only private field");t.value=n}}function D(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function L(e,t,n){if(!t.has(e))throw new TypeError("attempted to "+n+" private field on non-instance");return t.get(e)}function _(e,t){var n=L(e,t,"get");return le(e,n)}function M(e,t,n){oe(e,t),t.set(e,n)}function O(e,t,n){var i=L(e,t,"set");return ce(e,i,n),n}function V(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function ue(e,t,n){return t&&V(e.prototype,t),n&&V(e,n),e}const{View:de}=u.General,{FormRow:N,FormSwitchRow:fe,FormDivider:he}=u.Forms;var f;(function(e){e[e.Useful=0]="Useful",e[e.Fixes=1]="Fixes"})(f||(f={}));const ge=[{category:f.Useful,title:"Useful",icon:h.getAssetIDByName("img_nitro_remixing")},{category:f.Fixes,title:"Fixes",icon:h.getAssetIDByName("debug")}];let ye=function(){function e(){D(this,e),this.store=new Array}var t=e.prototype;return t.add=function(n){this.store.push(n)},t.unpatch=function(){this.store.forEach(function(n){return n()}),this.store.length=0},e}();var P=new WeakMap,I=new WeakMap;let S=function(){function e(n){let{id:i,label:a,sublabel:s,category:c,icon:l,settings:b,extra:E,runner:m}=n;D(this,e),M(this,P,{writable:!0,value:void 0}),M(this,I,{writable:!0,value:void 0}),this.patches=new ye,this.id=i,this.label=a,this.sublabel=s,this.category=c,this.icon=l,this.settings=b,this.extra=E,O(this,P,m.onStart.bind(this)),O(this,I,m.onStop.bind(this))}var t=e.prototype;return t.init=function(){w.modules[this.id]??={enabled:!1,options:this.settings?Object.fromEntries(Object.entries(this.settings).map(function(n){let[i,a]=n;return[i,a.default]})):{}},this.storage.enabled?this.start():this.stop()},t.exit=function(){this.storage.enabled&&this.stop()},t.toggle=function(){this.storage.enabled&&this.stop(),this.storage.enabled=!this.storage.enabled,this.storage.enabled?this.start():this.stop()},t.start=function(){_(this,P).call(this)},t.stop=function(){_(this,I).call(this),this.patches.unpatch()},ue(e,[{key:"storage",get:function(){return w.modules[this.id]}},{key:"component",get:function(){var n=this;return function(){const[i,a]=r.React.useReducer(function(l){return~l},0),[s,c]=r.React.useState(!0);return r.React.createElement(r.React.Fragment,null,r.React.createElement(N,{label:n.label,subLabel:n.sublabel,leading:n.icon&&r.React.createElement(N.Icon,{source:n.icon}),trailing:r.React.createElement(N.Arrow,{style:{transform:[{rotate:`${s?180:90}deg`}]}}),onPress:function(){c(!s),r.ReactNative.LayoutAnimation.configureNext(r.ReactNative.LayoutAnimation.Presets.easeInEaseOut)}}),!s&&r.React.createElement(r.React.Fragment,null,r.React.createElement(he,null),r.React.createElement(r.ReactNative.View,{style:{paddingHorizontal:15}},n.extra?.credits&&r.React.createElement(de,{style:{marginHorizontal:12,marginVertical:12}},r.React.createElement(v,{variant:"text-md/semibold",color:"TEXT_NORMAL"},"Additional credits go to:"," ",n.extra.credits.map(function(l,b,E){return r.React.createElement(r.React.Fragment,null,Number.isNaN(Number(l))?l:r.React.createElement(se,{userId:l,loadUsername:!0}),b!==E.length-1?", ":"")}))),r.React.createElement(fe,{label:"Enabled",onValueChange:function(){n.toggle(),a()},value:n.storage.enabled}))))}.bind(this)}}]),e}();const pe=o.findByProps("useIsCurrentUserEligibleForRemix"),Re=o.findByProps("uploadLocalFiles");var ve=new S({id:"freemix",label:"Freemix",sublabel:"Unlocks the Remix feature without nitro",category:f.Useful,icon:h.getAssetIDByName("img_nitro_remixing"),extra:{credits:["257109471589957632"]},runner:{onStart(){var e=this;["useIsCurrentUserEligibleForRemix","useIsRemixEnabledForMedia","useIsRemixEnabled"].forEach(function(t){return e.patches.add(d.after(t,pe,function(){return!0}))}),this.patches.add(d.before("uploadLocalFiles",Re,function(t){return t.map(function(n){return n.items=n.items.map(function(i){return i.isRemix=!1,i.item.isRemix=!1,i}),n})}))},onStop(){}}});const be=o.findByName("UserProfileRow",!1);var Ee=new S({id:"no-invite-to-servers",label:"No Invite to Servers",sublabel:"Removes the 'Invite to Servers' button from profiles",category:f.Fixes,icon:h.getAssetIDByName("icon-invite"),runner:{onStart(){this.patches.add(d.after("default",be,function(e,t){return e[0].label===r.i18n.Messages.GUILD_INVITE_CTA?r.React.createElement(r.React.Fragment):t}))},onStop(){}}});function B(){return B=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e},B.apply(this,arguments)}const{View:z}=u.General,Se=o.findByStoreName("UserStore"),g=o.findByStoreName("SpotifyStore"),{play:we,sync:G}=o.findByProps("play","sync"),xe="https://cdn.discordapp.com/attachments/919655852724604978/1134238120771076226/listenAlong.png";function Ae(e){let{button:t,activity:n,user:i}=e;const[a,s]=r.React.useReducer(function(l){return~l},0);r.React.useEffect(function(){return g.addChangeListener(s),function(){return g.removeChangeListener(s)}},[]);const c=r.React.createElement(u.Button,B({},t));return g.getSyncingWith()?.userId===i.id||Se.getCurrentUser().id===i.id?c:r.React.createElement(r.React.Fragment,null,r.React.createElement(z,{style:{width:"100%",paddingRight:30+8}},c),r.React.createElement(z,{style:{position:"absolute",right:0}},r.React.createElement(u.Button,{size:"small",text:"",style:[t.style,{width:30}],renderIcon:function(){return r.React.createElement(r.ReactNative.Image,{source:{uri:xe}})},onPress:function(){if(q.showToast("Syncing",h.getAssetIDByName("Check")),g.getActivity())G(n,i.id);else{const l=function(){g.removeChangeListener(l),G(n,i.id)};g.addChangeListener(l),we(n,i.id)}}})))}const{SpotifyPlayButton:Ne}=o.findByProps("SpotifyPlayButton"),Pe=o.findByName("UserProfileSection",!1);var Ie=new S({id:"spotify-listen-along",label:"Add Listen Along",sublabel:"Adds a Listen Along button to Spotify activites",category:f.Useful,icon:h.getAssetIDByName("ic_music"),extra:{credits:["1034579679526526976"]},runner:{onStart(){var e=this;this.patches.add(d.after("render",Ne.prototype,function(t,n){const i=n?._owner?.stateNode?.props;if(!i?.activity?.user)return;const a=n.props;return React.createElement(Ae,{button:a,activity:i.activity,user:i.activity.user})})),this.patches.add(d.before("default",Pe,function(t){let[n]=t;if(n.title?.includes("Spotify")){const i=K.findInReactTree(n.children,function(a){return a?.type?.name==="Actions"});i&&e.patches.add(d.before("type",i,function(a){let[s]=a;return s.activity.user=s.user},!0))}}))},onStop(){}}});const Be=o.findByProps("downloadMediaAsset"),Te=o.findByProps("openLazy","hideActionSheet"),j=function(e){const t=e.split("/"),n=t.findIndex(function(c){return c.endsWith(".tenor.com")});if(n===-1)return;const[i,a,s]=t.slice(n,n+3);if(!(!i||!a||!s))return`https://${i}/${a.slice(0,-2)}AC/${s.split(".")[0]}.gif`};var me=new S({id:"tenor-gif-fix",label:"Tenor GIF Fix",sublabel:"Downloads Tenor links as GIFs instead of videos",category:f.Fixes,icon:h.getAssetIDByName("ic_gif_24px"),runner:{onStart(){this.patches.add(d.before("downloadMediaAsset",Be,function(e){const t=e[0];if(!t||typeof t!="string")return;const n=j(t);n&&(e[0]=n,e[1]=1)})),this.patches.add(d.before("openLazy",Te,function(e){const[t,n,i]=e;if(n!=="MediaShareActionSheet")return;const a=i?.syncer?.sources?.[0];if(!a||typeof a.uri!="string")return;const s=j(a.uri);s&&(a.uri=s,a.sourceURI=s,delete a.videoURI,delete a.isGIFV),i.syncer.sources[0]=a}))},onStop(){}}}),T=[ve,me,Ie,Ee];const{Pressable:Ce}=u.General,$e=o.findByStoreName("UserStore");function Ue(){const[e,t]=r.React.useState(0),[n,i]=r.React.useState(!1),a=r.React.useRef(new r.ReactNative.Animated.Value(0)).current;return r.React.useEffect(function(){r.ReactNative.Animated.timing(a,{toValue:e*(Math.PI/180),duration:4e3,easing:r.ReactNative.Easing.out(r.ReactNative.Easing.quad),useNativeDriver:!0}).start()},[e]),r.React.createElement(Ce,{onPress:function(){return t(e+360*5)},style:{marginRight:12},onLongPress:function(){i(!n),r.ReactNative.LayoutAnimation.configureNext({duration:700})}},r.React.createElement(r.ReactNative.Animated.Image,{style:{height:85,width:85,borderRadius:18,transform:[{rotate:a}]},source:{uri:n?re($e.getCurrentUser(),!0):"https://cdn.discordapp.com/attachments/919655852724604978/1131722678450004118/fish.gif"}}))}const{View:Fe,ScrollView:De}=u.General;function Le(){return React.createElement(De,null,React.createElement(Fe,{style:{marginHorizontal:20,marginTop:20,marginBottom:10,flexDirection:"row",justifyContent:"center",alignItems:"center"}},React.createElement(Ue,null),React.createElement(v,{variant:"text-lg/semibold",color:"TEXT_NORMAL"},"NexxUtils v",k)),ge.map(function(e){let{category:t,title:n,icon:i}=e;const a=T.filter(function(s){return s.category===t});return React.createElement(ae,{title:n,icon:i,padding:a.length===0},a.length>0?a.map(function(s){return React.createElement(s.component,null)}):React.createElement(v,{variant:"text-md/semibold",color:"TEXT_NORMAL",style:{fontStyle:"italic"}},`No plugins in the ${n} category yet!`))}))}const w=Y.storage,k="0.1.3";var _e={onLoad:function(){w.modules??={},T.forEach(function(e){return e.init()})},onUnload:function(){return T.forEach(function(e){return e.exit()})},settings:Le};return y.default=_e,y.version=k,y.vstorage=w,Object.defineProperty(y,"__esModule",{value:!0}),y})({},vendetta.plugin,vendetta.ui.assets,vendetta.patcher,vendetta.metro,vendetta.metro.common,vendetta.ui.components,vendetta.ui,vendetta.ui.toasts,vendetta.utils);
