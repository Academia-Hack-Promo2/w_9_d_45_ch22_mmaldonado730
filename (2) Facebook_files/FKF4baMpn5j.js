/*!CK:598677905!*//*1427086801,*/

if (self.CavalryLogger) { CavalryLogger.start_js(["+v1DR"]); }

__d("XAdPreferencesCategoryInfoController",["XController"],function(a,b,c,d,e,f){b.__markCompiled&&b.__markCompiled();e.exports=b("XController").create("\/ads\/preferences\/category_info\/",{ad_id:{type:"Int",required:true},category_fbid:{type:"Int",required:true}});},null);
__d("AdsPreferencesInterestListItem.react",["AdPreferencesDesktopStrings","AsyncRequest","Image.react","Layout.react","xuiglyph","React","ReactLayeredComponentMixin","XAdPreferencesCategoryInfoController","XUIContextualDialog.react","XUIContextualDialogTitle.react","XUIContextualDialogBody.react","XUIText.react","cx","fbt"],function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t){b.__markCompiled&&b.__markCompiled();var u=j.Column,v=j.FillColumn,w=l,x=w.PropTypes,y=l.createClass({displayName:"AdsPreferencesInterestListItem",mixins:[m],propTypes:{adID:x.number.isRequired,interest:x.object.isRequired,isListItem:x.bool.isRequired,onInterestClick:x.func.isRequired,removed:x.bool.isRequired,setDialog:x.func,setReportDialog:x.func},getInitialState:function(){return {xHover:false,iHover:false,interestHover:false,enterTimeout:-1,suggestions:{}};},_xHover:function(event){this.setState({xHover:!this.state.xHover});},_xOver:function(event){this.setState({xHover:true});},_iHover:function(event){this.setState({iHover:!this.state.iHover});},_interestHover:function(z){this.setState({interestHover:z});},_interestEnter:function(event,z,aa){if(aa){this._interestHover(true);}else{var ba=setTimeout(this._interestEnter.bind(this,true,true,true),250);this.setState({enterTimeout:ba});}},_interestLeave:function(event){this._interestHover(false);clearTimeout(this.state.enterTimeout);},_handleInterestClick:function(event){var z=this.refs['toggle_'+this.props.interest.id];this.props.onInterestClick(this.props.interest,this.props.removed,z);},_onInterestTextClick:function(event){if(this.state.suggestions>0&&this.props.setDialog){this.props.setDialog(this.props.interest,this.state.suggestions);}else{var z=n.getURIBuilder().setInt('ad_id',this.props.adID).setInt('category_fbid',this.props.interest.id).getURI();new h(z).setHandler(function(aa){var ba=aa.payload,ca=ba.suggestions,da=this.props.interest;if(!da.description)da.description=t._("T\u00fa agregaste esta preferencia.");this.setState({suggestions:ca});if(this.props.setDialog)this.props.setDialog(da,ba.suggestions);}.bind(this)).send();}},_onReportPreferenceClick:function(event){if(this.props.setReportDialog)this.props.setReportDialog(this.props.interest);},render:function(){var z=((this.state.iHover?"hidden_elem":'')),aa=((!this.state.iHover?"hidden_elem":'')),ba=((this.state.interestHover&&this.props.isListItem?"_2imp":'')+(!this.state.interestHover&&this.props.isListItem?' '+"_2imq":'')+(this.props.removed?' '+"hidden_elem":'')),ca=!this.props.isListItem?null:l.createElement("span",{className:ba,ref:this.props.interest.name,onMouseEnter:this._iHover,onMouseLeave:this._iHover},l.createElement(i,{className:z,src:k({name:'info-solid',shade:'light',size:'medium'})}),l.createElement(i,{className:aa,src:k({name:'info-solid',shade:'dark',size:'medium'})})),da=l.createElement("span",{className:ba,onMouseEnter:this._xHover,onMouseLeave:this._xHover,onMouseMove:this._xOver},l.createElement(i,{className:((this.state.xHover?"hidden_elem":'')),src:k({name:'cross',shade:'dark'})}),l.createElement(i,{className:((!this.state.xHover?"hidden_elem":'')),src:k({name:'cross',shade:'accent'})})),ea=l.createElement("div",{className:"_2imr"},l.createElement("a",{href:"#"},t._("Deshacer"))),fa=l.createElement(r,{className:((this.props.removed?"_2ims":'')),size:"small",weight:"bold","data-fbid":this.props.interest.id},this.props.interest.name),ga=(!this.props.isListItem||this.props.removed)?fa:l.createElement("a",{onClick:this._onInterestTextClick},fa),ha=(("_2imt")+(!this.props.isListItem?' '+"_2imu":'')),ia=l.createElement(v,null,l.createElement("a",{onClick:this._onReportPreferenceClick,className:ba},l.createElement(r,{size:"small",weight:"bold"},"[FB-Only] Report"))),ja=(this.props.isListItem&&this.props.setReportDialog)?ia:null;return (l.createElement("li",{className:ha,onMouseEnter:this._interestEnter,onMouseLeave:this._interestLeave},l.createElement(j,null,l.createElement(v,null,ga,l.createElement("span",{className:"_2imv"},ca)),ja,l.createElement(u,{className:"mlm"},l.createElement("div",{onClick:this._handleInterestClick,className:"_2imw",ref:'toggle_'+this.props.interest.id},!this.props.removed?da:ea)))));},renderLayers:function(){var z=this.props.interest.description?this.props.interest.description:t._("T\u00fa agregaste esta preferencia.");return {contextualDialog:l.createElement(o,{contextRef:this.props.interest.name,shown:this.state.iHover,position:"above",focusContextOnHide:false,width:o.WIDTH.NORMAL},l.createElement(p,null,g.about_this_ads_preference),l.createElement(q,null,z))};}});e.exports=y;},null);
__d("XAdPreferencesInterestsWriteController",["XController"],function(a,b,c,d,e,f){b.__markCompiled&&b.__markCompiled();e.exports=b("XController").create("\/ads\/preferences\/edit_interests\/",{ad_id:{type:"Int",required:true},action:{type:"Enum",required:true,enumType:1},type:{type:"Enum",required:true,enumType:1},fbids:{type:"IntVector",required:true}});},null);
__d("XAdPreferencesNUXController",["XController"],function(a,b,c,d,e,f){b.__markCompiled&&b.__markCompiled();e.exports=b("XController").create("\/ads\/preferences\/nux\/",{type:{type:"String",required:true}});},null);
__d("XAdsPreferencesFeedbackController",["XController"],function(a,b,c,d,e,f){b.__markCompiled&&b.__markCompiled();e.exports=b("XController").create("\/ads\/preferences\/feeedback\/",{ad_id:{type:"Int",required:true},favorite:{type:"Enum",required:true,enumType:1}});},null);
__d("AdsPrefs",["AdsPreferencesInterestListItem.react","AsyncRequest","CSS","DOM","Event","React","XAdPreferencesInterestsWriteController","XAdPreferencesNUXController","XAdsPreferencesFeedbackController","csx","cx","tidyEvent"],function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r){b.__markCompiled&&b.__markCompiled();function s(w,x){i.toggleClass(w,"hidden_elem");var y=i.hasClass(w,"hidden_elem")?'ad_useful':'ad_neutral',z=o.getURIBuilder().setInt('ad_id',x).setEnum('favorite',y).getURI(),aa=new h(z);aa.send();}function t(){var w=n.getURIBuilder().setString('type','interest_nux_ts').getURI();new h(w).send();}function u(w,x,y){var z=x?'add':'del',aa=m.getURIBuilder().setInt('ad_id',w.adID).setEnum('action',z).setEnum('type','interest').setIntVector('fbids',[w.id]).getURI();new h(aa).send();l.render(l.createElement(g,{className:"_589n",adID:w.adID,interest:w,isListItem:false,onInterestClick:u,removed:!x}),document.getElementById(w.rootID));if(w.dialog&&y!=null){t();w.dialog.setContext(y);w.dialog.show();}}var v={initRHCFeedback:function(w,x,y){r(k.listen(x,'click',function(z){s(y,w);z.kill();}));},createListElement:function(w,x,y,z,aa,ba){var ca={id:x,name:y,adID:w,rootID:z,dialog:ba};l.render(l.createElement(g,{className:"_589n",adID:w,interest:ca,isListItem:false,onInterestClick:u,removed:false}),document.getElementById(z));},initExpandable:function(w){r(k.listen(w,'click',function(x){var y=j.scry(w,"div._2fdq")[0],z=j.scry(w,"._4r43")[0],aa=j.scry(w,"._1uhj")[0];i.toggleClass(z,'hidden_elem');i.toggleClass(aa,'hidden_elem');i.toggleClass(y,'hidden_elem');}));},toggleFavorite:function(w){var x=j.find(w.getRoot(),'.img');s(x,w.getLabel());}};e.exports=v;},null);
__d("DesktopHscrollPager",[],function(a,b,c,d,e,f){b.__markCompiled&&b.__markCompiled();function g(){"use strict";}g.prototype.initPager=function(h,i){"use strict";this.$DesktopHscrollPager0=h;this.$DesktopHscrollPager1=i;i.subscribe('next',this.$DesktopHscrollPager0.scrollNext.bind(this.$DesktopHscrollPager0));i.subscribe('prev',this.$DesktopHscrollPager0.scrollPrevious.bind(this.$DesktopHscrollPager0));this.$DesktopHscrollPager0.getArbiter().subscribe('onShow',function(j,k){this.$DesktopHscrollPager2(k.index);}.bind(this));this.$DesktopHscrollPager0.getArbiter().subscribe('onAdditionalItemsAdded',function(j,k){this.$DesktopHscrollPager2(this.$DesktopHscrollPager0.getSelectedIndex());}.bind(this));};g.prototype.getPagerButtons=function(){"use strict";return this.$DesktopHscrollPager1;};g.prototype.$DesktopHscrollPager2=function(h){"use strict";this.$DesktopHscrollPager1.setPrevEnabled(h>0);this.$DesktopHscrollPager1.setNextEnabled(h<this.$DesktopHscrollPager0.getNumItems()-1);};e.exports=g;},null);
__d("PixelNumConverter",[],function(a,b,c,d,e,f){b.__markCompiled&&b.__markCompiled();var g={pixelValue:function(h){return h!==null?Number(h)+'px':'auto';},numValue:function(h){return Number(h.replace("px",""));}};e.exports=g;},null);
__d("DesktopHscrollUnit",["Arbiter","BanzaiODS","CSS","DesktopHscrollUnitEventConstants","DOM","DOMQuery","Locale","PixelNumConverter","Style","csx","cx","getStyleProperty","queryThenMutateDOM"],function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s){b.__markCompiled&&b.__markCompiled();var t="_2_tg",u=300,v="_2_th",w="_2_ti",x="_2_tj",y="_hy9",z="_1kf5";function aa(ba,ca,da,ea,fa,ga,ha,ia,ja){"use strict";this.$DesktopHscrollUnit0=ba;this.$DesktopHscrollUnit1=ca;this.$DesktopHscrollUnit2=da;this.$DesktopHscrollUnit3=ea;this.$DesktopHscrollUnit4=ga;this.$DesktopHscrollUnit5=0;this.$DesktopHscrollUnit6=1+ga.length;this.$DesktopHscrollUnit7=[fa];this.$DesktopHscrollUnit8=ha;this.$DesktopHscrollUnit9=new g();this.$DesktopHscrollUnita=0;this.$DesktopHscrollUnitb=ja;this.$DesktopHscrollUnitc=l.find(ba,"^div._5jmm");this.$DesktopHscrollUnitd=this.$DesktopHscrollUnitc.getAttribute('data-ft');this.$DesktopHscrollUnit2.initPager(this,this.$DesktopHscrollUnit3);ia.forEach(function(ka){ka.init(this);},this);i.addClass(fa.ad,v);if(fa.subheader)this.$DesktopHscrollUnite(fa.subheader);this.$DesktopHscrollUnitf(this.$DesktopHscrollUnit5);i.addClass(this.$DesktopHscrollUnitc,"_sf6");i.conditionClass(this.$DesktopHscrollUnitc,"_2_tl",this.$DesktopHscrollUnit8);this.$DesktopHscrollUnitg();}aa.prototype.getArbiter=function(){"use strict";return this.$DesktopHscrollUnit9;};aa.prototype.getAdContainer=function(){"use strict";return this.$DesktopHscrollUnit0;};aa.prototype.getPager=function(){"use strict";return this.$DesktopHscrollUnit2;};aa.prototype.getSelectedItem=function(){"use strict";return this.$DesktopHscrollUnit7[this.$DesktopHscrollUnit5];};aa.prototype.getSelectedIndex=function(){"use strict";return this.$DesktopHscrollUnit5;};aa.prototype.getNumItems=function(){"use strict";return this.$DesktopHscrollUnit6;};aa.prototype.getID=function(){"use strict";return this.$DesktopHscrollUnitc.id;};aa.prototype.scrollNext=function(){"use strict";if(this.$DesktopHscrollUnit5+1<this.$DesktopHscrollUnit6){this.$DesktopHscrollUnith(this.$DesktopHscrollUnit5+1);if(this.$DesktopHscrollUnit5===1)h.bumpEntityKey('feed_ads',this.$DesktopHscrollUniti());}};aa.prototype.scrollPrevious=function(){"use strict";if(this.$DesktopHscrollUnit5-1>=0)this.$DesktopHscrollUnith(this.$DesktopHscrollUnit5-1);};aa.prototype.addOffscreenItems=function(ba){"use strict";this.$DesktopHscrollUnit4.push.apply(this.$DesktopHscrollUnit4,ba);this.$DesktopHscrollUnit6+=ba.length;this.$DesktopHscrollUnit9.inform('onAdditionalItemsAdded',{});};aa.prototype.$DesktopHscrollUnitf=function(ba){"use strict";var ca=this.$DesktopHscrollUnit7[ba];if(this.$DesktopHscrollUnit8&&ca.subheader){k.remove(ca.subheader);k.appendContent(this.$DesktopHscrollUnit1,ca.subheader);this.$DesktopHscrollUnit1.offsetHeight;}this.$DesktopHscrollUnit7.forEach(function(da,ea){var fa=ea==ba;i.conditionClass(da.ad,x,fa);i.conditionClass(da.ad,y,!fa);if(da.subheader)i.conditionClass(da.subheader,x,fa);});this.$DesktopHscrollUnit9.inform('onShow',{item:ca,index:ba},g.BEHAVIOR_EVENT);g.inform(j.HSCROLL_ITEM_SHOWN_EVENT);};aa.prototype.$DesktopHscrollUnith=function(ba){"use strict";this.$DesktopHscrollUnit9.inform('onBeforeTransition',{item:this.$DesktopHscrollUnit7[this.$DesktopHscrollUnit5]},g.BEHAVIOR_EVENT);while(this.$DesktopHscrollUnit4.length>0&&ba>=this.$DesktopHscrollUnit7.length)this.$DesktopHscrollUnitj(this.$DesktopHscrollUnit4.shift());this.$DesktopHscrollUnitf(ba);if(this.$DesktopHscrollUnit8){this.$DesktopHscrollUnita++;i.addClass(this.$DesktopHscrollUnit0,t);setTimeout(function(){if(--this.$DesktopHscrollUnita===0)i.removeClass(this.$DesktopHscrollUnit0,t);}.bind(this),u);this.$DesktopHscrollUnit9.inform('onAnimate',{item:this.$DesktopHscrollUnit7[ba]},g.BEHAVIOR_EVENT);var ca,da;s(function(){ca=n.numValue(r(this.$DesktopHscrollUnit0,'padding-bottom'));da=this.$DesktopHscrollUnit0.offsetHeight;}.bind(this),function(){o.set(this.$DesktopHscrollUnit0,'min-height',i.hasClass(this.$DesktopHscrollUnit7[ba].ad,z)?'0px':n.pixelValue(da-ca));o.set(this.$DesktopHscrollUnit7[0].ad,m.isRTL()?'margin-right':'margin-left',(ba*-100)+'%');}.bind(this));}this.$DesktopHscrollUnit5=ba;this.$DesktopHscrollUnitg();};aa.prototype.$DesktopHscrollUnitj=function(ba){"use strict";i.addClass(ba.ad,v);k.appendContent(this.$DesktopHscrollUnit0,ba.ad);g.inform(j.HSCROLL_ITEM_INSERTED_EVENT);if(ba.subheader){this.$DesktopHscrollUnite(ba.subheader);k.appendContent(this.$DesktopHscrollUnit1,ba.subheader);}this.$DesktopHscrollUnit7.push(ba);};aa.prototype.$DesktopHscrollUnitg=function(){"use strict";var ba=JSON.parse(this.$DesktopHscrollUnit7[this.$DesktopHscrollUnit5].ad.getAttribute('data-ft')),ca=JSON.parse(this.$DesktopHscrollUnitd);for(var da in ba)ca[da]=ba[da];this.$DesktopHscrollUnitc.setAttribute('data-ft',JSON.stringify(ca));g.inform('FeedAdsClickLogger/refreshTrackingData',{});};aa.prototype.$DesktopHscrollUnite=function(ba){"use strict";i.addClass(ba,w);if(this.$DesktopHscrollUnit8){var ca=k.create('div');i.addClass(ca,"_2_tm");k.appendContent(ba,ca);}};aa.prototype.$DesktopHscrollUniti=function(){"use strict";var ba='old_desktop_hscroll_first_next_pos_';return ba.concat(this.$DesktopHscrollUnitb);};e.exports=aa;},null);
__d("PadMessageOnAnimateExtension",["Arbiter","CSS","DOM","DOMQuery","PixelNumConverter","Style","csx","cx","getStyleProperty","queryThenMutateDOM"],function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){b.__markCompiled&&b.__markCompiled();var q="div._5pbx",r="div._329q",s="div._6m2",t="_1kf5";function u(){"use strict";}u.prototype.init=function(v){"use strict";this.$PadMessageOnAnimateExtension0=v;this.$PadMessageOnAnimateExtension0.getArbiter().subscribe('onAnimate',this.$PadMessageOnAnimateExtension1.bind(this),g.SUBSCRIBE_NEW);};u.prototype.$PadMessageOnAnimateExtension1=function(v,w){"use strict";if(h.hasClass(w.item.ad,t))return;var x=j.scry(w.item.ad,q)[0];if(!x)return;var y=j.scry(w.item.ad,r)[0]||j.scry(w.item.ad,s)[0];if(!y)return;var z=j.scry(w.item.ad,"div._5pbx .text_exposed_root")[0],aa,ba,ca,da;p(function(){aa=k.numValue(o(this.$PadMessageOnAnimateExtension0.getAdContainer(),'padding-bottom'));ca=this.$PadMessageOnAnimateExtension0.getAdContainer().offsetHeight;ba=x.offsetHeight;da=w.item.ad.offsetHeight;}.bind(this),function(){var ea=ca-aa-da;if(z&&!h.hasClass(z,'text_exposed')){h.addClass(z,'text_exposed');var fa=x.offsetHeight-ba;if(fa<=ea){ea-=fa;this.$PadMessageOnAnimateExtension2(z);}else h.removeClass(z,'text_exposed');}l.set(x,'min-height',k.pixelValue(ba+ea));}.bind(this));};u.prototype.$PadMessageOnAnimateExtension2=function(v){"use strict";j.scry(v,'.text_exposed_hide').forEach(function(w){i.remove(w);});j.scry(v,'.text_exposed_link').forEach(function(w){i.remove(w);});j.scry(v,'.text_exposed_show').forEach(function(w){i.replace(w,w.childNodes);});h.removeClass(v,'text_exposed_root');h.removeClass(v,'text_exposed');};e.exports=u;},null);
__d("PageLikeAdScrollOnLikeExtension",["Arbiter","Button","PageLikeButton"],function(a,b,c,d,e,f,g,h,i){b.__markCompiled&&b.__markCompiled();var j=750;function k(){"use strict";}k.prototype.init=function(l){"use strict";this.$PageLikeAdScrollOnLikeExtension0=l;var m=this.$PageLikeAdScrollOnLikeExtension0.getPager().getPagerButtons().getRoot().childNodes;this.$PageLikeAdScrollOnLikeExtension1=m[m.length-1];g.subscribe(i.LIKED,this.$PageLikeAdScrollOnLikeExtension2.bind(this),g.SUBSCRIBE_NEW);};k.prototype.$PageLikeAdScrollOnLikeExtension2=function(l,m){"use strict";var n=this.$PageLikeAdScrollOnLikeExtension0.getSelectedItem().ad.getAttribute('data-oid');if(m.profile_id!=n||!h.isEnabled(this.$PageLikeAdScrollOnLikeExtension1))return;var o=this.$PageLikeAdScrollOnLikeExtension0.getPager();o.fetchAdditionalAdsIfNecessary&&o.fetchAdditionalAdsIfNecessary();setTimeout(function(){h.setDepressed(this.$PageLikeAdScrollOnLikeExtension1,true);}.bind(this),j/2);setTimeout(function(){h.setDepressed(this.$PageLikeAdScrollOnLikeExtension1,false);this.$PageLikeAdScrollOnLikeExtension0.getPager().getPagerButtons().inform('next');}.bind(this),j);};e.exports=k;},null);
__d("EntstreamFeedObjectDigest",["DOM","EntstreamFeedObject","EntstreamFeedObjectFollowup","cx","ge"],function(a,b,c,d,e,f,g,h,i,j,k){b.__markCompiled&&b.__markCompiled();var l={toggleDigest:function(m,n,o){var p=m.getValue()==='digest_on'?o.digest_off:o.digest_on,q=h.getRoot(k(n)),r=i.getFollowup(q);if(r){var s=i.getFollowupMessage(r);g.replace(s,p);}else i.addFollowup(q,p,"_521o");}};e.exports=l;},null);
__d("EntstreamFeedObjectFollow",["EntstreamFeedObject","EntstreamFeedObjectFollowup","Event","Parent","cx","ge"],function(a,b,c,d,e,f,g,h,i,j,k,l){b.__markCompiled&&b.__markCompiled();var m={toggleFollow:function(n,o,p){var q=n.getValue()=='follow_post'?p.follow_post:p.unfollow_post,r=g.getRoot(l(o)),s=h.getFollowup(r);if(s){h.replaceFollowupMessage(s,q);}else{s=h.addFollowup(r,q,"_521o")||h.getFollowup(r);i.listen(s,'click',function(event){var t=event.getTarget(),u="_1f89";if(j.byClass(t,u)){m.toggleFollow(n,o,p);n.toggleMenuItem();}});}}};e.exports=m;},null);
__d("EntstreamFeedObjectHide",["Event","CSS","EntstreamFeedObject","EntstreamFeedObjectFollowup","Focus","TabbableElements","cx","ge"],function(a,b,c,d,e,f,g,h,i,j,k,l,m,n){b.__markCompiled&&b.__markCompiled();var o={hide:function(p,q){var r=i.getRoot(n(p));r=i.getHscrollOuterRootIfAvailable(r);j.addFollowup(r,q);h.addClass(r,"_i6m");o.setFocus(r);},registerUnhide:function(p,q){g.listen(p,'click',function(){if(q)q.send();var r=i.getRoot(p);r=i.getHscrollOuterRootIfAvailable(r);o.unhide(r);});},setFocus:function(p){var q=l.find(p);if(q&&q[0])k.setWithoutOutline(q[0]);},unhide:function(p){j.removeFollowup(p);h.removeClass(p,"_i6m");o.setFocus(p);}};e.exports=o;},null);
__d("YouTube",["CSS","DOM","DOMQuery","Event","Keys","LitestandStoryInsertionStatus","SubscriptionsHandler","UserAgent_DEPRECATED","Focus","copyProperties","cx"],function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q){b.__markCompiled&&b.__markCompiled();function r(s,t,u){"use strict";var v=new m();v.addSubscriptions(j.listen(s,'load',this.listening.bind(this)),l.registerBlocker(function(){return this.playerState===r.STATE_PLAYING;}.bind(this)));p(this,{iframe:s,autofocus:t,autoplay:u,playerState:r.STATE_UNSTARTED,muted:false,volume:100,currentTime:0,timer:null,handler:v});if(t)o.set(s);}r.prototype.id=function(){"use strict";return this.iframe.id;};r.prototype.post=function(s){"use strict";s.id=this.id();this.iframe.contentWindow.postMessage(JSON.stringify(s),'*');};r.prototype.listening=function(){"use strict";this.post({event:'listening'});clearTimeout(this.timer);this.timer=setTimeout(this.listening.bind(this),100);};r.prototype.update=function(s){"use strict";if(s.event=='initialDelivery'){clearTimeout(this.timer);if((n.webkit()||n.firefox())&&s.info&&s.info.debugText.match(/flashVersion/)){this.addAccessibleButtons();if(n.firefox())this.iframe.tabIndex=-1;}}if(s.info)['playerState','muted','volume','currentTime'].forEach(function(t){if(s.info.hasOwnProperty(t))this[t]=s.info[t];}.bind(this));};r.prototype.togglePlay=function(){"use strict";this.post({event:'command',func:(this.playerState==r.STATE_PLAYING)?'pauseVideo':'playVideo'});};r.prototype.toggleMute=function(){"use strict";this.post({event:'command',func:this.muted?'unMute':'mute'});};r.prototype.addAccessibleButtons=function(){"use strict";this.addAccessibleButton('Mute',"_505m",this.toggleMute.bind(this));this.addAccessibleButton('Play',"_505n",this.togglePlay.bind(this));};r.prototype.addAccessibleButton=function(s,t,u){"use strict";var v=h.create('button',{'class':t,tabindex:0},s);h.insertAfter(this.iframe,v);this.handler.addSubscriptions(j.listen(v,'click',u),j.listen(v,'mouseover',g.hide.bind(null,v)),j.listen(this.iframe,'mouseout',g.show.bind(null,v)),j.listen(v,'focus',function(){if(!this.autoplay&&this.playerState==r.STATE_UNSTARTED){this.post({event:'command',func:'playVideo'});this.post({event:'command',func:'pauseVideo'});}}.bind(this)),j.listen(v,'keydown',function(w){switch(w.keyCode){case k.UP:case k.DOWN:this.post({event:'command',func:'setVolume',args:[this.volume+((w.keyCode==k.UP)?10:-10)]});w.prevent();break;case k.RIGHT:case k.LEFT:this.post({event:'command',func:'seekTo',args:[this.currentTime+((w.keyCode==k.RIGHT)?10:-10)]});w.prevent();break;}}.bind(this)));return v;};r.prototype.destroy=function(){"use strict";this.handler.release();delete r.instances[this.id()];if(!Object.keys(r.instances).length)r.handler.remove();};r.register=function(s,t,u){"use strict";if(!window.postMessage)return;if(!Object.keys(r.instances).length)r.handler=j.listen(window,'message',function(w){try{var x=JSON.parse(w.data);if(r.instances[x.id])r.instances[x.id].update(x);}catch(w){}});var v=new r(i.find(s,'iframe'),t,u);r.instances[v.id()]=v;};p(r,{STATE_UNSTARTED:-1,STATE_PLAYING:1,instances:{},handler:null});e.exports=r;},null);
__d("EntstreamHomeFeedObjectHide",["AsyncRequest","CSS","DOM","EntstreamFeedObject","EntstreamFeedObjectHide","Event","TrackingNodes","YouTube","csx","cx","ge","fbt","$"],function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s){b.__markCompiled&&b.__markCompiled();var t={stopVideo:function(u){var v=s(u),w=i.find(v,"^._5jmm"),x=i.scry(w,'iframe');for(var y=0;y<x.length;y++){var z=n.instances[i.getID(x[y])];if(z&&(z.playerState===n.STATE_PLAYING))z.togglePlay();}var aa=i.scry(w,'video');for(var ba=0;ba<aa.length;ba++)if(('paused' in aa[ba])&&!aa[ba].paused)if(typeof aa[ba].pause==='function')aa[ba].pause();},hide:function(u,v,w,x){t.stopVideo(u);var y=j.getRoot(q(u)),z=h.hasClass(y,"_5pat"),aa;if(z&&w=='afrostart'){aa='';}else{var ba=w=='hide'||w=='afrostart'?r._("Esta historia se ocult\u00f3 en tu secci\u00f3n de noticias."):r._("Se marc\u00f3 esta historia como spam."),ca=w=='hide'||w=='afrostart'?r._("Mostrar"):r._("Deshacer"),da=m.getTrackingInfo(m.types.UNHIDE_LINK),ea=i.create('a',{href:'#','data-ft':da},ca),fa={};if(v)fa.token=v;if(x)fa.hideable_token=x;var ga=new g().setURI('/ajax/entstream/home/story/unhide').setMethod('POST').setData(fa).setRelativeTo(ea);k.registerUnhide(ea,ga);aa=i.create('div',{'class':"_1f86"},[ba,' ',ea]);}k.hide(u,aa);},registerHide:function(u,v,w,x){l.listen(u,'click',function(){t.hide(u.getAttribute('id'),v,w,x);});}};e.exports=t;},null);
__d("MenuTogglingItem",["DOM","MenuItem"],function(a,b,c,d,e,f,g,h){b.__markCompiled&&b.__markCompiled();for(var i in h)if(h.hasOwnProperty(i))k[i]=h[i];var j=h===null?null:h.prototype;k.prototype=Object.create(j);k.prototype.constructor=k;k.__superConstructor__=h;function k(){"use strict";if(h!==null)h.apply(this,arguments);}k.prototype.handleClick=function(){"use strict";this.toggleMenuItem();return j.handleClick.call(this);};k.prototype.toggleMenuItem=function(){"use strict";this._swap('ajaxify','toggleAjaxify');this._swap('value','toggleValue');this._toggleItemText();};k.prototype.setValue=function(l){"use strict";this._data.value=l;};k.prototype._toggleItemText=function(){"use strict";var l=this._anchor;this._swap('markup','toggleMarkup');g.replace(l,this._renderItemContent());};k.prototype._swap=function(l,m){"use strict";var n=this._data[l];this._data[l]=this._data[m];this._data[m]=n;};e.exports=k;},null);
__d("EntstreamHomeFeedObjectOptionsMenu",["AdsPrefs","BanzaiLogger","CSS","DOM","EntstreamFeedObject","EntstreamFeedObjectDigest","EntstreamFeedObjectFollow","EntstreamHomeFeedObjectHide","MenuTogglingItem","UFICentralUpdates","UFIConstants","cx","ge"],function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s){b.__markCompiled&&b.__markCompiled();function t(u,v,w,x,y,z,aa,ba,ca,da){u.subscribe('itemclick',function(ea,fa){var ga=fa.item.getRoot(),ha=ga.getAttribute('data-feed-option-name'),ia=i.hasClass(ga,"_50o2")||i.hasClass(ga,"_50o0");if(ha)h.log('FeedStoryOptionMenuLoggerConfig',{option_name:ha,is_secondary:ia?1:0,event_type:'clk',feed_location:aa,session_id:ba,is_sponsored:ca,is_self_story:da});if(typeof fa.item.getValue!=='function')return;switch(fa.item.getValue()){case 'hide':case 'markspam':case 'afrostart':n.hide(v,w,fa.item.getValue(),y);break;case 'afro_direct_action':var ja=k.getRoot(s(v));ja=k.getHscrollOuterRootIfAvailable(ja);var ka=fa.item.getRoot().getAttribute('data-optimistic-hide');if(ka){var la=j.create('div',{className:"_5lum"});j.appendContent(la,fa.item.getRoot().getAttribute('data-action-in-progress-string'));j.insertBefore(ja.firstChild,la);i.addClass(ja,"_i6m");}break;case 'follow_post':case 'unfollow_post':m.toggleFollow(fa.item,v,x);break;case 'ad_useful':case 'ad_neutral':g.toggleFavorite(fa.item);ea.kill();break;case 'digest_on':case 'digest_off':l.toggleDigest(fa.item,v,x);break;}}.bind(this));u.subscribe('show',function(){h.log('FeedStoryOptionMenuLoggerConfig',{option_name:'root',event_type:'clk',feed_location:aa,session_id:ba,is_sponsored:ca,is_self_story:da});var ea=i.hasClass(u.getRoot(),"_50o1"),fa=i.hasClass(u.getRoot(),"_50n_");u.forEachItem(function(ga){var ha=ga.getRoot(),ia=ha.getAttribute('data-feed-option-name'),ja=i.hasClass(ha,"_50o2"),ka=i.hasClass(ha,"_50o0"),la=i.hasClass(ha,"_50nd"),ma=i.hasClass(ha,"_50ne"),na=(ea&&ja)||(fa&&ka)||(!ea&&la)||(!fa&&ma),oa=ja||ka;if(ia&&!na)h.log('FeedStoryOptionMenuLoggerConfig',{option_name:ia,is_secondary:oa?1:0,event_type:'imp',feed_location:aa,session_id:ba,is_sponsored:ca,is_self_story:da});ga.onShow();});});p.subscribe('update-actions',function(ea,fa){if(fa.payloadsource===q.UFIPayloadSourceType.USER_ACTION){var ga=fa.actions||[];for(var ha=0;ha<ga.length;ha++)if(ga[ha].actiontype===q.UFIActionType.ADD_COMMENT_ACTION){if(ga[ha].feedbackfbid!=z)return;u.getRoot();u.forEachItem(function(ia){if(ia instanceof o&&ia.getValue()==='unfollow_post')ia.handleClick();});}}});}e.exports=t;},null);
__d("ExtendedMultiShareCarousel",["Animation","CSS","Ease","Event","Locale","TidyArbiterMixin","TrackingNodes","TrackingNodeTypes","cx","mixin","tidyEvent"],function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q){b.__markCompiled&&b.__markCompiled();var r=212,s=70,t=6,u=2,v=350,w=p(l);for(var x in w)if(w.hasOwnProperty(x))z[x]=w[x];var y=w===null?null:w.prototype;z.prototype=Object.create(y);z.prototype.constructor=z;z.__superConstructor__=w;function z(aa){"use strict";this.$ExtendedMultiShareCarousel0=aa.node;this.$ExtendedMultiShareCarousel1=aa.grid;this.$ExtendedMultiShareCarousel2=aa.prev_pager;this.$ExtendedMultiShareCarousel3=aa.next_pager;this.$ExtendedMultiShareCarousel4=0;this.$ExtendedMultiShareCarousel5=12;this.$ExtendedMultiShareCarousel6=k.isRTL()?'right':'left';this.$ExtendedMultiShareCarousel1.style[this.$ExtendedMultiShareCarousel6]=this.$ExtendedMultiShareCarousel5+'px';this.$ExtendedMultiShareCarousel7();q([j.listen(this.$ExtendedMultiShareCarousel2,'click',this.$ExtendedMultiShareCarousel8.bind(this)),j.listen(this.$ExtendedMultiShareCarousel3,'click',this.$ExtendedMultiShareCarousel9.bind(this))]);this.refresh();}z.prototype.$ExtendedMultiShareCarousela=function(){"use strict";return this.$ExtendedMultiShareCarousel1.childNodes.length-this.getLastVisibleIndex();};z.prototype.$ExtendedMultiShareCarouselb=function(){"use strict";return this.$ExtendedMultiShareCarousel4;};z.prototype.$ExtendedMultiShareCarouselc=function(){"use strict";return this.$ExtendedMultiShareCarouselb()>0;};z.prototype.$ExtendedMultiShareCarouseld=function(){"use strict";return this.$ExtendedMultiShareCarousela()>0;};z.prototype.$ExtendedMultiShareCarousel9=function(){"use strict";if(!this.$ExtendedMultiShareCarouseld())return;this.$ExtendedMultiShareCarousele(1,this.$ExtendedMultiShareCarouselc());this.$ExtendedMultiShareCarousel7();};z.prototype.$ExtendedMultiShareCarousel8=function(){"use strict";if(!this.$ExtendedMultiShareCarouselc())return;this.$ExtendedMultiShareCarousele(-1,this.$ExtendedMultiShareCarouseld());this.$ExtendedMultiShareCarousel7();};z.prototype.$ExtendedMultiShareCarousel7=function(){"use strict";if(this.$ExtendedMultiShareCarouseld())m.addDataAttribute(this.$ExtendedMultiShareCarousel3,n.MULTI_ATTACHMENT_PAGER_NEXT,this.getLastVisibleIndex()+1);};z.prototype.$ExtendedMultiShareCarouself=function(){"use strict";return this.$ExtendedMultiShareCarouseld()&&this.$ExtendedMultiShareCarouselc();};z.prototype.getLastVisibleIndex=function(){"use strict";return this.$ExtendedMultiShareCarousel4+u;};z.prototype.refresh=function(){"use strict";h.conditionClass(this.$ExtendedMultiShareCarousel0,"_3dm4",!this.$ExtendedMultiShareCarouselc());h.conditionClass(this.$ExtendedMultiShareCarousel0,"_3dm5",!this.$ExtendedMultiShareCarouseld());h.conditionClass(this.$ExtendedMultiShareCarousel0,"_3o-b",this.$ExtendedMultiShareCarouself());};z.prototype.$ExtendedMultiShareCarousele=function(aa,ba){"use strict";this.$ExtendedMultiShareCarousel4+=aa;var ca=(s+t)/2;if(ba&&this.$ExtendedMultiShareCarouself())ca=t;if(!ba&&!this.$ExtendedMultiShareCarouself())ca=s;ca=-aa*ca;var da=aa*r;this.$ExtendedMultiShareCarousel5-=da+ca;var ea=this.$ExtendedMultiShareCarousel0;h.addClass(ea,"_3dm6");new g(this.$ExtendedMultiShareCarousel1).to(this.$ExtendedMultiShareCarousel6,this.$ExtendedMultiShareCarousel5).duration(v).ease(i.sineOut).ondone(function(){h.removeClass(ea,"_3dm6");this.refresh();}.bind(this)).go();};e.exports=z;},null);
__d("SaveCaretMenuItem",["Banzai","CSS","DOM","EntstreamFeedObject","EntstreamFeedObjectFollowup","Event","MenuItem","SaveState","SaveStateHandler","cx","ge"],function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q){b.__markCompiled&&b.__markCompiled();var r='saved_for_later:caret_action',s='click',t='imp';for(var u in m)if(m.hasOwnProperty(u))w[u]=m[u];var v=m===null?null:m.prototype;w.prototype=Object.create(v);w.prototype.constructor=w;w.__superConstructor__=m;function w(x){"use strict";m.call(this,x);this._updateData();this.getRoot();l.listen(this._anchor,'error',this.handleError.bind(this));o.listen(x.ogobjectids,function(y){this._updateData();this._doRender(y);}.bind(this));}w.prototype.handleClick=function(){"use strict";var x=v.handleClick.call(this),y=this._data.logdata;g.post(r,{action:s,collection_id:y.collection_id,surface:y.surface,story_id:y.story_id,is_save:this._data.isSaveAction,is_multi:y.is_multi});var z=j.getRoot(q(this._data.storydomid));if(this._data.isSaveAction){o.saving(this._data.ogobjectids);z&&k.addFollowup(z,this._data.savefollowupmarkup,"_521o");}else{o.unsaving(this._data.ogobjectids);var aa=k.getFollowup(z);aa&&k.removeFollowup(z);}return x;};w.prototype.handleError=function(){"use strict";if(this._data.isSaveAction){o.saved(this._data.ogobjectids);}else o.unsaved(this._data.ogobjectids);};w.prototype._updateData=function(){"use strict";this._data.isSaveAction=o.isSaveAction(this._data.ogobjectids);if(this._data.isSaveAction){this._data.markup=this._data.savemarkup;this._data.ajaxify=this._data.saveajaxify;this._data.title=this._data.savetitle;}else{this._data.markup=this._data.unsavemarkup;this._data.ajaxify=this._data.unsaveajaxify;this._data.title=this._data.unsavetitle;}};w.prototype._doRender=function(x){"use strict";if(!this._root)return;switch(x){case n.SAVING:case n.UNSAVING:h.addClass(this._root,"_5arm");setTimeout(this.disable.bind(this),10);break;case n.SAVED:case n.UNSAVED:h.removeClass(this._root,"_5arm");setTimeout(this.enable.bind(this),10);break;}i.replace(this._anchor,this._renderItemContent());l.listen(this._anchor,'error',this.handleError.bind(this));};w.prototype.onShow=function(){"use strict";var x=this._data.logdata;g.post(r,{action:t,collection_id:x.collection_id,surface:x.surface,story_id:x.story_id,is_save:this._data.isSaveAction,is_multi:x.is_multi});};e.exports=w;},null);
__d("FbFeedOptionsExpander",["BanzaiLogger","CSS","DOM","Event"],function(a,b,c,d,e,f,g,h,i,j){b.__markCompiled&&b.__markCompiled();var k={expand:function(l){var m=l.expander,n=l.menu,o=l.foldedClass,p=l.unfoldedClass,q=l.foldedItemClass,r=l.data;j.listen(m,'click',function(){h.toggleClass(n.getRoot(),o);h.toggleClass(n.getRoot(),p);var s=i.scry(n.getRoot(),'li.'+q);s.forEach(function(t){var u=t.getAttribute('data-feed-option-name');if(u)g.log('FeedStoryOptionMenuLoggerConfig',{option_name:u,is_secondary:1,event_type:'imp',feed_location:r.location,session_id:r.session_id,is_sponsored:r.is_sponsored,is_self_story:r.is_self_story});},this);});}};e.exports=k;},null);