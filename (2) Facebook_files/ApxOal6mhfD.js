/*!CK:3721016495!*//*1429199348,*/

if (self.CavalryLogger) { CavalryLogger.start_js(["\/wtxT"]); }

__d("InstanceProxy",[],function(a,b,c,d,e,f){b.__markCompiled&&b.__markCompiled();function g(h){"use strict";this.$InstanceProxy0=h;}g.prototype.getInstance=function(){"use strict";return this.$InstanceProxy0;};e.exports=g;},null);
__d("CensorLogger",["Event","Banzai","DOM","debounce","ge","Keys"],function(a,b,c,d,e,f,g,h,i,j,k){b.__markCompiled&&b.__markCompiled();var l=10*60*1000,m=b('Keys').RETURN,n=function(q){var r=(q.target||q.srcElement).id,s=(q.target||q.srcElement).value.trim().length,t=o.tracker(r);if(!t)return;if(s>5&&!t.submitted){if(t.type=='comment'&&t.parent_fbid=='unknown'){if(!o.syncTrackerWithForm(r))o.snowliftSync(r);t=o.tracker(r);}h.post('censorlogger',{impid:t.impid,clearcounter:t.clearcounter,instrument:t.type,elementid:r,parent_fbid:(t.parent_fbid=='unknown'?null:t.parent_fbid),version:"original"},h.VITAL);o.setSubmitted(r,true);}else if(s===0&&t.submitted&&q.which!=m){o.debouncers[r]=p(r);o.debouncers[r]();}else if(s>0&&t.submitted)if(o.debouncers[r])o.debouncers[r].reset();},o={init:function(q){this.impressionID=q;for(var r in this.trackedElements)if(!k(r))this.stopTracking(r);for(var s in this.unmatchedForms)if(!k(s))delete this.unmatchedForms[s];},trackElement:function(q,r,s){var t,u,v;this.debouncers=this.debouncers||{};this.trackedElements=this.trackedElements||{};this.unmatchedForms=this.unmatchedForms||{};r=r.toLowerCase();if(r=='composer'){t=(s?i.find(q,'div.uiMetaComposerMessageBox textarea.input'):i.find(q,'div.uiComposerMessageBox textarea.input'));u=i.find(q,'form.attachmentForm');var w=i.scry(q,'input[name="xhpc_targetid"]')[0];if(w)v=w.value;}else if(r=='comment')t=i.find(q,'div.commentBox textarea.textInput');if(t==null)return;var x=i.getID(t);if(u)this.addJoinTableInfoToForm(u,i.getID(t));g.listen(t,'keyup',n.bind(this));this.trackedElements[x]={submitted:false,clearcounter:0,type:r,impid:this.impressionID,parent_fbid:v||'unknown',formID:(u?i.getID(u):null)};if(r=='comment')this.syncTrackerWithForm(x);},registerForm:function(q,r){this.unmatchedForms=this.unmatchedForms||{};this.unmatchedForms[q]=r;},syncTrackerWithForm:function(q){for(var r in this.unmatchedForms){var s=k(r);if(s){var t=i.scry(s,'div.commentBox textarea.textInput')[0];if(t){var u=i.getID(t);if(u&&u==q){this.trackedElements[q].parent_fbid=this.unmatchedForms[r];this.trackedElements[q].formID=r;this.addJoinTableInfoToForm(s,q);delete this.unmatchedForms[r];return true;}}}}return false;},snowliftSync:function(q){var r,s=k(q);if(s&&(r=i.scry(s,'^.fbPhotosSnowboxFeedbackInput')[0])){var t=i.find(r,'input[name="feedback_params"]'),u=JSON.parse(t.value).target_fbid;this.trackedElements[q].parent_fbid=u;this.trackedElements[q].formID=r.id;this.addJoinTableInfoToForm(r,q);return true;}return false;},stopTracking:function(q){delete this.trackedElements[q];if(this.debouncers[q]){this.debouncers[q].reset();delete this.debouncers[q];}},tracker:function(q){return this.trackedElements[q];},getSubmitted:function(q){return (this.trackedElements[q]?this.trackedElements[q].submitted:false);},setSubmitted:function(q,r){if(this.trackedElements[q])this.trackedElements[q].submitted=r;},incrementClearCounter:function(q){if(!this.tracker(q))return;this.trackedElements[q].clearcounter++;this.trackedElements[q].submitted=false;var r=i.scry(k(this.trackedElements[q].formID),'input[name="clp"]')[0];if(r)r.value=JSON.stringify({censorlogger_impid:this.trackedElements[q].impid,clearcounter:this.trackedElements[q].clearcounter,element_id:q});},addJoinTableInfoToForm:function(q,r){i.prependContent(q,i.create('input',{type:'hidden',name:'clp',value:JSON.stringify({censorlogger_impid:this.impressionID,clearcounter:0,element_id:r,version:"original"})}));}},p=function(q){return j(function(){o.incrementClearCounter(q);},l,o);};e.exports=o;},null);
__d("UFIOrderingModeSelector.react",["InlineBlock.react","Link.react","LoadingIndicator.react","React","Image.react","ReactXUIMenu","PopoverMenu.react","cx","ix"],function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o){b.__markCompiled&&b.__markCompiled();var p=j,q=p.PropTypes,r=l.SelectableMenu,s=l.SelectableItem,t=j.createClass({displayName:"UFIOrderingModeSelector",propTypes:{currentOrderingMode:q.string,onOrderChanged:q.func,orderingmodes:q.array.isRequired},getInitialState:function(){var u=null;this.props.orderingmodes.map(function(v){if(v.selected)u=v;});return {selectedMode:u};},onMenuItemClick:function(u,v){var w=v.item.getValue();this.props.orderingmodes.map(function(x){if(x.value===w)this.setState({selectedMode:x});}.bind(this));this.props.onOrderChanged(w);},render:function(){var u=null;if(this.props.currentOrderingMode!=this.state.selectedMode.value)u=j.createElement(i,{className:"UFIOrderingModeSelectorLoading",color:"white",size:"small"});var v=j.createElement(r,{onItemClick:this.onMenuItemClick},this.props.orderingmodes.map(function(w){return (j.createElement(s,{key:w.value,value:w.value,selected:w.value===this.state.selectedMode.value},w.name));}.bind(this)));return (j.createElement("div",{className:"UFIOrderingModeSelector"},u,j.createElement(g,null,j.createElement(m,{className:"UFIOrderingModeSelectorPopover",menu:v,alignh:"right"},j.createElement(h,null,this.state.selectedMode.name,j.createElement(k,{className:"UFIOrderingModeSelectorDownCaret",src:o('/images/ui/xhp/link/more/down_caret.gif')}))))));}});e.exports=t;},null);
__d("legacy:ScrollAwareDOM",["ScrollAwareDOM"],function(a,b,c,d){b.__markCompiled&&b.__markCompiled();a.ScrollAwareDOM=b('ScrollAwareDOM');},3);
__d("XPubcontentInlinePhotoPivotsEventsController",["XController"],function(a,b,c,d,e,f){b.__markCompiled&&b.__markCompiled();e.exports=b("XController").create("\/pubcontent\/inline_photo_pivots_chaining\/events\/",{});},null);
__d("EntstreamAttachmentRelatedShare",["Arbiter","AsyncRequest","AttachmentRelatedShareConstants","csx","cx","CSS","DOM","Event","ge","tidyEvent","XPubcontentInlinePhotoPivotsEventsController"],function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q){b.__markCompiled&&b.__markCompiled();var r=2,s=3,t={createRelatedAttachmentDelay:function(u,v,w){var x=null;if(typeof u==="string"){x=o(u);}else x=u;if(!x)return;setTimeout(function(){g.inform(i.ARTICLE_CLICK,{attachment:x,global_share_id:v,is_auto_expand:true,is_right_click:false});},1000);},loadRelatedAttachment:function(u,v,w){var x=null;if(typeof u==="string"){x=o(u);}else x=u;if(!x)return;var y=n.listen(x,'click',function(){y.remove();g.inform(i.ARTICLE_CLICK,{attachment:x,global_share_id:v,is_right_click:false,share_id:w});}),z=n.listen(x,'mousedown',function(event){if(event.which===s||event.button===r){z.remove();g.inform(i.ARTICLE_CLICK,{attachment:x,global_share_id:v,is_right_click:true});}});},loadInlineStoryPivotAttachment:function(u,v){var w=o(u);if(!w)return;var x=n.listen(w,'click',function(){x.remove();g.inform(i.PHOTO_CLICK,{attachment:w,storyid:v});});},loadRelatedGameAttachment:function(u,v){var w=null;if(typeof u==="string"){w=o(u);}else w=u;if(!w)return;p(n.listen(w,'click',function(){g.inform(i.GAME_CLICK,{attachment:w,global_share_id:v});}));p(n.listen(w,'mousedown',function(event){if(event.which===s||event.button===r)g.inform(i.GAME_CLICK,{attachment:w,global_share_id:v});}));},loadRelatedLSCVideoAttachment:function(u,v){var w=null;if(typeof u==='string'){w=o(u);}else w=u;if(!w)return;var x="^div._4-u2",y=m.scry(w,x),z=n.listen(w,'click',function(){z.remove();g.inform(i.VIDEO_CLICK,{attachment:w,global_share_id:v});});},loadRelatedLSCInlineVideoAttachment:function(u,v){var w=null;if(typeof u==='string'){w=o(u);}else w=u;if(!w)return;n.listen(w,'click',function(){var x="^div._4-u2",y="_1d8v",z=m.scry(w,x),aa=z.length===1?z[0]:null,ba=aa.parentNode,ca=ba.previousSibling;while(!ca){ba=ba.parentNode;ca=ba.previousSibling;}if(!l.hasClass(ca,y)){var da=m.create('div',{className:y}),ea=m.insertBefore(aa.parentNode,da),fa=ea.length>=1?ea[0]:null;}else fa=ca;var ga=m.getID(fa);new h().setURI('/ajax/flash/expand_inline.php').setData({share_id:v,target_div:ga,max_width:470,max_height:264,replace_target_div:true}).setMethod('GET').setReadOnly(true).setRelativeTo(w.parentNode).send();});},loadRelatedEventsPivotAttachment:function(u,v){var w=null;if(typeof u==="string"){w=o(u);}else w=u;if(!w)return;p(n.listen(w,'click',function(){g.inform(i.EVENT_JOIN,{attachment:w,event_id:v});}));},closeButton:function(u,v){n.listen(u,'click',function(){m.remove(v);});},closeButtonPhotoPivots:function(u,v,w,x){n.listen(u,'click',function(){var y=q.getURIBuilder(),z={story_id:w,search_query_type:x,event:'hide'};new h().setMethod('POST').setURI(y.getURI()).setData(z).send();m.remove(v);});},seeAllLinkPhotoPivots:function(u,v,w){n.listen(u,'click',function(){var x=q.getURIBuilder(),y={story_id:v,search_query_type:w,event:'see_all'};new h().setMethod('POST').setURI(x.getURI()).setData(y).send();});},loadRelatedVideos:function(u,v,w){var x=o(u);if(!x)return;var y=o(v);if(!y)return;var z={global_share_id:w,attachment_div_id:m.getID(x.parentNode),video_div_id:v},aa=n.listen(y,'click',function(){aa.remove();g.inform(i.VIDEO_CLICK,{attachment:x.parentNode,attachment_div_id:m.getID(x.parentNode),video_div_id:v,global_share_id:w});});},removeOldSuggestions:function(u){var v=o(u);if(!v)return;var w=m.scry(v.parentNode,"._5d73");for(var x=1;x<w.length;x++)m.remove(w[x]);setTimeout(function(){l.show(w[0]);},1000);},showHiddenSuggestions:function(u){var v=n.listen(u,'click',function(){v.remove();var w="^._1ui8",x=m.scry(u,w);if(!x)return;l.hide(x[0]);var y=x[0].previousSibling;while(y){l.show(y);y=y.previousSibling;}});}};e.exports=t;},null);
__d("FeedTrackingAsync",["Arbiter","collectDataAttributes","copyProperties"],function(a,b,c,d,e,f,g,h,i){b.__markCompiled&&b.__markCompiled();function j(){g.subscribe('AsyncRequest/send',function(k,l){var m=l.request,n=m.getRelativeTo();if(n){var o=m.getData(),p=h(n,['ft']);if(Object.keys(p.ft).length)i(o,p);}});}e.exports={init:j};},null);
__d("XLtgPostTranslationController",["XController"],function(a,b,c,d,e,f){b.__markCompiled&&b.__markCompiled();e.exports=b("XController").create("\/intl\/see_translation\/",{ftid:{type:"String",required:true}});},null);
__d("LtgPostTranslation",["Arbiter","AsyncRequest","cx","DOM","Event","fbt","highlight","LoadingIndicator.react","React","XLtgPostTranslationController"],function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){b.__markCompiled&&b.__markCompiled();function q(s,t){var u=j.create('div',{'class':"_49k0"},t||l._("No hay ninguna traducci\u00f3n disponible"));j.replace(s,u);if(t)m(u);}var r={bindListener:function(s,t){k.listen(s,'click',function(){o.render(o.createElement(n,{size:"small",color:"white"}),s);var u=p.getURIBuilder().setString('ftid',t).getURI();new h().setURI(u).setHandler(function(v){var w=v.getPayload();q(s,w&&w.text);g.inform('ufi/translationRendered');}).setErrorHandler(function(){q(s,null);}).send();});}};e.exports=r;},null);
__d("AsyncRequestNectarLogging",["AsyncRequest","Nectar","copyProperties"],function(a,b,c,d,e,f,g,h,i){b.__markCompiled&&b.__markCompiled();i(g.prototype,{setNectarModuleData:function(j){if(this.method=='POST')h.addModuleData(this.data,j);},setNectarImpressionId:function(){if(this.method=='POST')h.addImpressionID(this.data);}});},null);
__d("AudienceSelectorTags",[],function(a,b,c,d,e,f){b.__markCompiled&&b.__markCompiled();var g={},h={hasTags:function(i){return g.hasOwnProperty(i);},setHasTags:function(i){if(i)g[i]=true;}};e.exports=h;},null);
__d("PopoverAsyncMenu",["Bootloader","Event","PopoverMenu"],function(a,b,c,d,e,f,g,h,i){b.__markCompiled&&b.__markCompiled();var j={},k=0;for(var l in i)if(i.hasOwnProperty(l))n[l]=i[l];var m=i===null?null:i.prototype;n.prototype=Object.create(m);n.prototype.constructor=n;n.__superConstructor__=i;function n(o,p,q,r,s,t){"use strict";this._endpoint=r;this._endpointData=t||{};this._loadingMenu=q;this._instanceId=k++;j[this._instanceId]=this;this._mouseoverListener=h.listen(p,'mouseover',this.fetchMenu.bind(this));i.call(this,o,p,null,s);}n.prototype._onLayerInit=function(){"use strict";if(!this._menu&&this._loadingMenu)this.setMenu(this._loadingMenu);this.fetchMenu();this._popover.getLayer().subscribe('key',this._handleKeyEvent.bind(this));};n.prototype.fetchMenu=function(){"use strict";if(this._fetched)return;g.loadModules(["AsyncRequest"],function(o){new o().setURI(this._endpoint).setData(Object.assign({pmid:this._instanceId},this._endpointData)).send();}.bind(this));this._fetched=true;if(this._mouseoverListener){this._mouseoverListener.remove();this._mouseoverListener=null;}};n.setMenu=function(o,p){"use strict";j[o].setMenu(p);};n.getInstance=function(o){"use strict";return j[o];};e.exports=n;},null);
__d("FbFeedCommentUFIScroller",["Arbiter","DOMScroll","containsNode","ge"],function(a,b,c,d,e,f,g,h,i,j){b.__markCompiled&&b.__markCompiled();g.subscribe('comment/focus',function(k,l){var m=l.element,n=j('content');if(n&&i(n,m))h.ensureVisible(m,null,60,250);});e.exports={};},null);
__d("PopoverLoadingMenu",["BehaviorsMixin","DOM","PopoverMenuInterface","copyProperties","cx","joinClasses"],function(a,b,c,d,e,f,g,h,i,j,k,l){b.__markCompiled&&b.__markCompiled();for(var m in i)if(i.hasOwnProperty(m))o[m]=i[m];var n=i===null?null:i.prototype;o.prototype=Object.create(n);o.prototype.constructor=o;o.__superConstructor__=i;function o(p){"use strict";i.call(this);this._config=p||{};this._theme=p.theme||{};}o.prototype.getRoot=function(){"use strict";if(!this._root){this._root=h.create('div',{className:l("_54nq",this._config.className,this._theme.className)},h.create('div',{className:"_54ng"},h.create('div',{className:"_54nf _54af"},h.create('span',{className:"_54ag"}))));if(this._config.behaviors)this.enableBehaviors(this._config.behaviors);}return this._root;};j(o.prototype,g,{_root:null});e.exports=o;},null);
__d("Hovercard",["AccessibleLayer","Arbiter","AsyncRequest","ContextualDialog","ContextualDialogXUITheme","ContextualThing","DOM","Event","JSXDOM","LayerAutoFocus","LayerRefocusOnHide","Parent","Style","Vector","clickRefAction","csx","cx","getInlineBoundingRect","fbt"],function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y){b.__markCompiled&&b.__markCompiled();var z={},aa={},ba=null,ca=null,da=null,ea=null,fa=150,ga=700,ha=1000,ia=250,ja=50,ka=null,la=null,ma=null,na=null;function oa(event){var eb=r.byTag(event.getTarget(),'a');db.processNode(eb)&&event.stop();}function pa(eb){ca=eb;if(!qa(eb)){var fb;if(!eb||!(fb=ra(eb))||bb(eb)){aa.moveToken&&aa.moveToken.remove();aa={};return false;}if(aa.node!=eb){aa.moveToken&&aa.moveToken.remove();aa={node:eb,endpoint:fb,pos:null};}}return true;}function qa(eb){return eb&&ba&&aa.node==eb;}function ra(eb){return eb.getAttribute('data-hovercard');}function sa(eb){var fb=m.scry(eb,"^._5jmm ._2orz").length;if(fb)return;if(!eb.leaveToken){var gb=n.listen(eb,'mouseleave',function(){clearTimeout(ka);clearTimeout(la);gb.remove();eb.leaveToken=null;ca=null;if(!db.contains(eb))db.hide();});eb.leaveToken=gb;}if(!aa.moveToken)aa.moveToken=n.listen(eb,'mousemove',function(event){aa.pos=t.getEventPosition(event);});clearTimeout(ka);clearTimeout(la);clearTimeout(na);na=null;var hb=fa,ib=ba?ia:ga;if(eb.getAttribute('data-hovercard-instant'))hb=ib=ja;ka=setTimeout(wa.bind(null,eb),hb);la=setTimeout(ta.bind(null,eb),ib);}function ta(eb,fb){if(aa.node!=eb)return;var gb=z[ra(eb)];if(gb){va(gb);}else if(fb){va(za());}else{var hb=ba?ia:ga;ma=setTimeout(ta.bind(null,eb,true),ha-hb);}}function ua(){db.hide(true);clearTimeout(la);}function va(eb){var fb=aa.node,gb=ba,hb=gb!=fb,ib=fb.getAttribute('data-hovercard-position');ib&&eb.setPosition(ib);if(ea){var jb=ea.getContentRoot();if(!l.containsIncludingLayers(jb,fb))ea.hide();}if(!m.contains(document.body,fb)){db.hide(true);return;}ba=fb;ea=eb;eb.setContextWithBounds(fb,x(fb,aa.pos)).show();if(hb)setTimeout(function(){u('himp',ba,null,'FORCE',{ft:{evt:39}});},0);}function wa(eb){if(eb.id&&z[eb.id]!=null)return;var fb=ra(eb);if(z[fb]!=null)return;xa(fb);var gb=function(){db.dirty(fb);ua();};new i(fb).setData({endpoint:fb}).setMethod('GET').setReadOnly(true).setErrorHandler(gb).setTransportErrorHandler(gb).send();}function xa(eb){z[eb]=false;}function ya(eb){var fb=aa.node.getAttribute('data-hovercard-offset-x')||0;eb.setOffsetX(parseInt(fb,10));var gb=aa.node.getAttribute('data-hovercard-offset-y')||0;eb.setOffsetY(parseInt(gb,10));}var za=function(){if(!da){da=new j({width:275,theme:k},o.div({className:"_7lk"},y._("Cargando...")));da.disableBehavior(g).disableBehavior(p).disableBehavior(q);ab(da);}var eb=aa.node.getAttribute('data-hovercard-position');da.setPosition(eb);ya(da);return da;};function ab(eb){var fb=[eb.subscribe('mouseenter',function(){clearTimeout(na);na=null;ca=aa.node;}),eb.subscribe('mouseleave',function(){eb.hide();ca=null;}),eb.subscribe('destroy',function(){while(fb.length)fb.pop().unsubscribe();fb=null;})];}function bb(eb){return (r.byClass(eb,"_7lu")!==null);}var cb=true,db={hide:function(eb){if(!ba)return;if(eb){clearTimeout(na);na=null;if(ea)ea.hide();ca=null;ba=null;ea=null;}else{var fb=aa.node.getAttribute('data-hovercard-instant')?ja:ia;if(na===null)na=setTimeout(db.hide.bind(null,true),fb);}},setDialog:function(eb,fb){fb.disableBehavior(g).disableBehavior(p).disableBehavior(q);z[eb]=fb;ab(fb);if(aa.endpoint==eb&&ca==aa.node){za().hide();ya(fb);va(fb);}},getDialog:function(eb){return z[eb];},contains:function(eb){if(ea)return l.containsIncludingLayers(ea.getContentRoot(),eb);return false;},dirty:function(eb){var fb=z[eb];if(fb){fb.destroy();delete z[eb];}},dirtyAll:function(){for(var eb in z){var fb=z[eb];fb&&db.dirty(eb);}h.inform('Hovercard/dirty');},processNode:function(eb){if(eb&&pa(eb)){sa(eb);return true;}return false;},setDirtyAllOnPageTransition:function(eb){cb=eb;},getLoadingDelay:function(){return ha;},getHideDelay:function(){return ia;}};(function(){n.listen(document.documentElement,'mouseover',oa);n.listen(window,'scroll',function(){if(ba&&s.isFixed(ba))db.hide(true);});h.subscribe('page_transition',function(){ua();cb&&db.dirtyAll();},h.SUBSCRIBE_NEW);})();e.exports=db;},null);
__d("XPrivacyCustomDialogController",["XController"],function(a,b,c,d,e,f){b.__markCompiled&&b.__markCompiled();e.exports=b("XController").create("\/privacy\/custom_dialog\/",{id:{type:"String",required:true},option_id:{type:"String",required:true},autosave:{type:"Bool",defaultValue:false},explain_tags:{type:"Bool",defaultValue:false},limit_community:{type:"Bool",defaultValue:false},limit_facebook:{type:"Bool",defaultValue:false},limit_fof:{type:"Bool",defaultValue:false},limit_tagexpand:{type:"Bool",defaultValue:false},is_new_privacy_selector:{type:"Bool",defaultValue:false},render_location:{type:"Int"},content_type:{type:"String"},post_param:{type:"String"},privacy_data:{type:"String"},source:{type:"String"},tags:{type:"IntVector"},tag_expansion_button:{type:"String"},__asyncDialog:{type:"Int"}});},null);