/*!CK:1417731720!*//*1429199350,*/

if (self.CavalryLogger) { CavalryLogger.start_js(["5mc8B"]); }

__d("EmuController",["AsyncRequest","DataStore","URI","copyProperties","emptyFunction","ge","goURI"],function(a,b,c,d,e,f,g,h,i,j,k,l,m){b.__markCompiled&&b.__markCompiled();function n(o,p){"use strict";var q=l(o);if(!q)return null;this.impression=p;this.containerId=o;h.set(q,'emuController',this);return this;}n.prototype.event=function(o,p,q,r){"use strict";var s={eid:this.impression,f:0,ui:this.containerId,en:o,a:1};if(p)s.ed=JSON.stringify(p);if(!r)r=k;var t=new g().setURI(this.EVENT_HANDLER_PATH).setData(s).setErrorHandler(r);if(q)t.setHandler(q);t.send();};n.prototype.redirect=function(){"use strict";var o={eid:this.impression,f:0,ui:this.containerId,en:this.CLICK,a:0,sig:Math.floor(Math.random()*65535)+65536},p=new i(this.EVENT_HANDLER_PATH);p.setQueryData(o);m(p);};n.fromContainer=function(o){"use strict";var p=l(o);if(!p)return null;return h.get(p,'emuController');};n.getEventClass=function(o){"use strict";return "emuEvent"+String(o).trim();};j(n.prototype,{EVENT_HANDLER_PATH:'/ajax/emu/end.php',CLICK:1,FAN:"fad_fan"});e.exports=n;},null);
__d("legacy:ad-units-base-js",["EmuController"],function(a,b,c,d){b.__markCompiled&&b.__markCompiled();a.EmuController=b('EmuController');},3);
__d("DesktopHscrollUnitEventConstants",[],function(a,b,c,d,e,f){b.__markCompiled&&b.__markCompiled();e.exports={HSCROLL_ITEM_INSERTED_EVENT:'DesktopHScrollUnit/itemInserted',HSCROLL_ITEM_SHOWN_EVENT:'DesktopHScrollUnit/itemShown'};},null);
__d("BrowseClientEventLogger",["Banzai"],function(a,b,c,d,e,f,g){b.__markCompiled&&b.__markCompiled();var h='browse_client_event_session',i='21.',j={logData:function(event,k,l,m){if(!event||!k)return;m=m||{};m.event=event;m.client_time=Math.floor(Date.now());m.session_id=k;m.vertical=l;this.allData=this.allData||{};this.processedSessions=this.processedSessions||[];if(this.processedSessions.indexOf(k)!==-1)return;if(!this.allData.sessionid)this.allData.sessionid=[];this.allData.sessionid.push(m);if(event==='window_unloaded'||event==='window_transition_to_LHC'||event==='window_transition_to_home_click'||event==='window_transition_to_fb_page'){this._postBatch(this.allData.sessionid);this.processedSessions.push(k);}},logClick:function(k){k.event='click';this.maybeLogVisiblityEvent(k,true);},maybeLogClientViewEvent:function(k){k.event='client_view';this.maybeLogVisiblityEvent(k);},maybeLogVisiblityEvent:function(k,l){if(!k||!k.xt||k.xt.indexOf(i)!==0)return;var event=k.event,m=JSON.parse(k.xt.substring(3));if(l)m.click_type=k.click_type;this.logData(event,m.session_id,m.vertical,m);},_postBatch:function(k){g.post(h,k,{delay:0,retry:true});}};e.exports=j;},null);
__d("Visibility",["mixInEventEmitter"],function(a,b,c,d,e,f,g){b.__markCompiled&&b.__markCompiled();var h,i;if(typeof document.hidden!=='undefined'){h='hidden';i='visibilitychange';}else if(typeof document.mozHidden!=='undefined'){h='mozHidden';i='mozvisibilitychange';}else if(typeof document.msHidden!=='undefined'){h='msHidden';i='msvisibilitychange';}else if(typeof document.webkitHidden!=='undefined'){h='webkitHidden';i='webkitvisibilitychange';}function j(){return h?document[h]:false;}var k={HIDDEN:'hidden',VISIBLE:'visible',isHidden:j};g(k,{visible:true,hidden:true});if(document.addEventListener&&i)document.addEventListener(i,function l(){k.emit(j()?k.HIDDEN:k.VISIBLE);});e.exports=k;},null);
__d("ViewableImpressionHeatmapLogger",["Banzai"],function(a,b,c,d,e,f,g){b.__markCompiled&&b.__markCompiled();h.logFromViewableImpressionTracker=function(i,j){"use strict";var k=new h(j);k.subscribeToTrackerEvents(i);};function h(i){"use strict";this.loggingDurationMS=i;this.trackingEntries={};}h.prototype.subscribeToTrackerEvents=function(i){"use strict";this.visibleSubscription=i.addListener('visible',this.onElementVisible,this);this.hiddenSubscription=i.addListener('hidden',this.onElementHidden,this);};h.prototype.onElementVisible=function(i){"use strict";var j=this.getCurrentTimestamp(),k=this.trackingEntries[i.id];if(!k){k=this.createTrackingEntry(i);this.beginTracking(i.id,k);j=k.startedTrackingTS;}k.viewportProgressEvents.push({timestamp:j,percentInViewport:i.percentInViewport.toFixed(2)});};h.prototype.onElementHidden=function(i){"use strict";var j=this.getCurrentTimestamp(),k=this.trackingEntries[i.id];if(!k)return;k.viewportProgressEvents.push({timestamp:j,percentInViewport:0});};h.prototype.onTrackingCompleted=function(i){"use strict";var j=this.trackingEntries[i];j.viewportProgressEvents.push({timestamp:this.getCurrentTimestamp(),percentInViewport:j.tracker.getPercentInViewport().toFixed(2)});if(this.$ViewableImpressionHeatmapLogger0())this.$ViewableImpressionHeatmapLogger1(i,j);this.logToServer(j);delete this.trackingEntries[i];};h.prototype.logToServer=function(i){"use strict";var j=i;delete j.tracker;g.post('xtrackable:heatmap',j);};h.prototype.beginTracking=function(i,j){"use strict";this.trackingEntries[i]=j;setTimeout(function(){return this.onTrackingCompleted(i);}.bind(this),this.loggingDurationMS);};h.prototype.createTrackingEntry=function(i){"use strict";return {tracker:i.tracker,token:i.token,startedTrackingTS:this.getCurrentTimestamp(),viewportProgressEvents:[]};};h.prototype.getCurrentTimestamp=function(){"use strict";return (Date.now()/1000).toFixed(2);};h.prototype.$ViewableImpressionHeatmapLogger0=function(){"use strict";return 0;};h.prototype.$ViewableImpressionHeatmapLogger1=function(i,j){"use strict";var k='Completed tracking for id '+i+' token='+j.token+' startedTrackingTS='+j.startedTrackingTS+'\n';j.viewportProgressEvents.forEach(function(l){k+='% in view: '+l.percentInViewport+' timestamp='+l.timestamp+'\n';});};e.exports=h;},null);
__d("ViewableImpressionTracker",["Banzai","BrowseClientEventLogger","copyProperties","CSSCore","cx","DOM","getElementPosition","getViewportDimensions","mixInEventEmitter","Style","URI"],function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q){b.__markCompiled&&b.__markCompiled();function r(s,t,u){"use strict";this.id=s;this.element=t;this.config=u;this.iframe=null;this.viewableTimeout=null;this.clearSubsequentTimeout=null;this.waitForSubsequent=false;this.waitForLogged=false;this.isNonViewableLogged=false;this.isVisible=false;this.banzaiLogged=false;}r.prototype.getID=function(){"use strict";return this.id;};r.prototype.getPercentInViewport=function(){"use strict";var s=n(),t=m(this.element);if(t.x<s.width&&t.x+t.width>0&&t.y<s.height&&t.y+t.height>0&&p.get(this.element,'visibility')!=='hidden'&&p.get(this.element,'opacity')!=='0'){var u=Math.max(t.x,0),v=Math.min(t.x+t.width,s.width),w=Math.max(t.y,0),x=Math.min(t.y+t.height,s.height);if((t.height*t.width)===0)return 100;if(this.config.require_horizontally_onscreen&&((v-u)<t.width||j.hasClass(this.element,"desktop_hscroll_offscreen")))return 0;var y=100*(v-u)*(x-w)/(t.height*t.width);return y;}return 0;};r.prototype.onVisible=function(){"use strict";this.isVisible=true;var s=this.getPercentInViewport(),t=s>this.config.pixel_in_percentage;this.emit('visible',{tracker:this,id:this.getID(),token:this.getToken(),percentInViewport:s});if(!t){this.$ViewableImpressionTracker0();return;}if(this.isLogged()){this.$ViewableImpressionTracker1();}else this.$ViewableImpressionTracker2();if(!this.waitForLogged&&!this.isLogged()){this.waitForLogged=true;this.viewableTimeout=setTimeout(function(){this.waitForLogged=false;var u=this.getPercentInViewport(),v=u>this.config.pixel_in_percentage;if(!v){this.$ViewableImpressionTracker3();return;}this.logImpression(1,{});this.$ViewableImpressionTracker1();}.bind(this),this.config.duration_in_ms);}};r.prototype.onHidden=function(){"use strict";this.emit('hidden',{id:this.getID(),token:this.getToken()});if(this.config.log_initial_nonviewable&&!this.isLogged()&&!this.isNonViewableLogged){this.logNonViewableImpression();}else if(!this.config.log_initial_nonviewable&&!this.isLogged()&&this.isVisible)this.logNonViewableImpression();this.isVisible=false;if(this.waitForLogged){this.waitForLogged=false;clearTimeout(this.viewableTimeout);}if(this.isLogged()&&!this.waitForSubsequent&&this.config.subsequent_gap_in_ms>=0){this.waitForSubsequent=true;this.clearSubsequentTimeout=setTimeout(function(){this.waitForSubsequent=false;this.reset();if(this.isVisible)this.onVisible();}.bind(this),this.config.subsequent_gap_in_ms);}this.$ViewableImpressionTracker3();};r.prototype.onRemoved=function(){"use strict";this.isVisible=false;};r.prototype.getToken=function(){"use strict";return this.element.getAttribute('data-xt');};r.prototype.logImpression=function(s,t){"use strict";if(this.isLogged())return;var u=this.getToken(),v=Math.floor(Date.now()/1000),w={xt:u,isv:s,cts:v};if(g.isEnabled('xtrackable_clientview_batch')&&this.config.should_batch){this.logWithBanzai(w);}else this.logWithIFrame(i(w,t));};r.prototype.logNonViewableImpression=function(){"use strict";if(this.config.nonviewableEnabled){var s=this.getToken();g.post('xtrackable:nonviewable',{xt:s});}this.isNonViewableLogged=true;};r.prototype.isLogged=function(){"use strict";return this.iframe!==null||this.banzaiLogged;};r.prototype.reset=function(){"use strict";if(this.iframe){l.remove(this.iframe);this.iframe=null;}if(this.banzaiLogged)this.banzaiLogged=false;this.isNonViewableLogged=false;this.isVisible=false;this.waitForLogged=false;this.waitForSubsequent=false;};r.prototype.logWithBanzai=function(s){"use strict";this.banzaiLogged=true;h.maybeLogClientViewEvent(s);g.post('xtrackable:clientview_batch',s);};r.prototype.logWithIFrame=function(s){"use strict";this.iframe=l.create('iframe',{src:new q(this.config.impressionURL).addQueryData(s),width:0,height:0,frameborder:0,scrolling:'no',className:'fbEmuTracking'});this.iframe.setAttribute('aria-hidden','true');l.appendContent(this.element,this.iframe);};r.prototype.$ViewableImpressionTracker4=function(){"use strict";return 0;};r.prototype.$ViewableImpressionTracker0=function(){"use strict";if(this.$ViewableImpressionTracker4()){p.set(this.element,'background-color','#abab9a');p.set(this.element,'outline','3px solid #abab9a');}};r.prototype.$ViewableImpressionTracker2=function(){"use strict";if(this.$ViewableImpressionTracker4()){p.set(this.element,'background-color','#e4f70a');p.set(this.element,'outline','3px solid #e4f70a');}};r.prototype.$ViewableImpressionTracker3=function(){"use strict";if(this.$ViewableImpressionTracker4()){p.set(this.element,'background-color',null);p.set(this.element,'outline',null);}};r.prototype.$ViewableImpressionTracker1=function(){"use strict";if(this.$ViewableImpressionTracker4()){p.set(this.element,'background-color','#047515');p.set(this.element,'outline','3px solid #047515');}};o(r,{visible:true,hidden:true});e.exports=r;},null);
__d("VisibilityTrackingHelper",["Arbiter","DesktopHscrollUnitEventConstants","getViewportDimensions","Event"],function(a,b,c,d,e,f,g,h,i,j){b.__markCompiled&&b.__markCompiled();var k={getEventListeners:function(l){return [j.listen(document,'DOMContentLoaded',l),j.listen(window,'scroll',l),j.listen(window,'resize',l),g.subscribe(h.HSCROLL_ITEM_SHOWN_EVENT,l)];},getViewportInfo:function(){return i();}};e.exports=k;},null);
__d("VisibilityTracking",["Banzai","BrowseClientEventLogger","ErrorUtils","ScriptPath","SubscriptionsHandler","Visibility","VisibilityTrackingHelper","collectDataAttributes","copyProperties","getElementPosition","pageID","throttle"],function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r){b.__markCompiled&&b.__markCompiled();var s='visibility_tracking',t='[data-vistracking]',u=500,v=50,w=50,x=50,y=50,z={VISIBLE:'visible',HIDDEN:'hidden'},aa={DEFAULT:'default',REMOVED:'removed'},ba={name:z.VISIBLE,cause:aa.DEFAULT},ca={name:z.HIDDEN,cause:aa.DEFAULT},da={name:z.HIDDEN,cause:aa.REMOVED},ea=0;function fa(ga){"use strict";ga=ga||{};if(!ga.bypass_banzai_check&&!g.isEnabled(s))return;this.visibleElementInfo={};this.getDataFromConfig(ga);l.addListener(l.VISIBLE,i.guard(this.fireEvent,'VisibilityTracking:visible',this));if(!this.skipVisibilityHiddenEvents)l.addListener(l.HIDDEN,i.guard(this.clearAllVisibleElements,'VisibilityTracking:hidden',this));j.subscribe(i.guard(this.updateVisibleElements,'VisibilityTracking:scriptPath',this));g.subscribe(g.SHUTDOWN,i.guard(this.onUnload,'VisibilityTracking:banzaiShutdown',this));this.fireEventCallback=r.acrossTransitions(i.guard(this.fireEvent,'VisibilityTracking:fireEventCallback',this),this.timeout,this);this.listeners=new k();m.getEventListeners(this.fireEventCallback).forEach(function(ha){this.listeners.addSubscriptions(ha);},this);if(this.extraInit)i.applyWithGuard(this.extraInit.bind(this));}fa.prototype.getDataFromConfig=function(ga){"use strict";this.config=ga;this.root=ga.root||document.documentElement;this.selector=ga.selector||t;this.timeout=(typeof ga.timeout!=='undefined')?ga.timeout:u;this.minOffsetVisibleFromBottom=(typeof ga.minOffsetVisibleFromBottom!=='undefined')?ga.minOffsetVisibleFromBottom:v;this.minOffsetVisibleFromTop=(typeof ga.minOffsetVisibleFromTop!=='undefined')?ga.minOffsetVisibleFromTop:w;this.minOffsetVisibleFromLeft=(typeof ga.minOffsetVisibleFromLeft!=='undefined')?ga.minOffsetVisibleFromLeft:x;this.minOffsetVisibleFromRight=(typeof ga.minOffsetVisibleFromRight!=='undefined')?ga.minOffsetVisibleFromRight:y;this.handleAllHiddenEvents=(typeof ga.handleAllHiddenEvents!=='undefined')?ga.handleAllHiddenEvents:false;this.handleAllVisibleEvents=(typeof ga.handleAllVisibleEvents!=='undefined')?ga.handleAllVisibleEvents:false;this.skipVisibilityHiddenEvents=(typeof ga.skipVisibilityHiddenEvents!=='undefined')?ga.skipVisibilityHiddenEvents:false;this.cacheTrackedElements=(typeof ga.cacheTrackedElements!=='undefined')?ga.cacheTrackedElements:false;};fa.prototype.getAllTrackedElements=function(){"use strict";if(!this.allTrackedElements){this.allTrackedElements={};if(this.root.querySelectorAll){var ga=this.root.querySelectorAll(this.selector);for(var ha=0;ha<ga.length;ha++){var ia=this.getElementID(ga[ha]);this.allTrackedElements[ia]=ga[ha];}}}return this.allTrackedElements;};fa.prototype.refreshAllTrackedElements=function(){"use strict";delete this.allTrackedElements;return this.getAllTrackedElements();};fa.prototype.getDataToLog=function(ga){"use strict";var ha=o(n(ga,['gt']).gt,{client_time:Date.now()/1000,time_spent_id:q,script_path:j.getScriptPath()});return ha;};fa.prototype.getElementID=function(ga){"use strict";var ha=ga.$VisibilityTracking0;if(ha)return ha;ga.$VisibilityTracking0=++ea;return ea;};fa.prototype.sendDataToLog=function(ga){"use strict";h.maybeLogVisiblityEvent(ga);g.post(s,ga);};fa.prototype.fireEvent=function(){"use strict";var ga=this.cacheTrackedElements?this.allTrackedElements:this.refreshAllTrackedElements();for(var ha in ga){var ia=ga[ha],ja=m.getViewportInfo(),ka=this.isVisible(ia,ja);if(!ka&&(ha in this.visibleElementInfo||this.handleAllHiddenEvents)){this.handleEvent(ia,ca);}else if(ka&&(!(ha in this.visibleElementInfo)||this.handleAllVisibleEvents))this.handleEvent(ia,ba);}this.clearUntrackedVisibleElements();};fa.prototype.isVisible=function(ga,ha){"use strict";var ia=p(ga);return (ia.x||ia.y||ia.width||ia.height)&&(ia.y+ia.height>=this.minOffsetVisibleFromTop)&&(ia.y<=ha.height-this.minOffsetVisibleFromBottom)&&(ia.x+ia.width>=this.minOffsetVisibleFromLeft)&&(ia.x<=ha.width-this.minOffsetVisibleFromRight);};fa.prototype.handleEvent=function(ga,event){"use strict";var ha=this.getElementID(ga),ia=this.getDataToLog(ga),ja;if(event.name===z.VISIBLE){var ka=Math.floor(Date.now()/1000);ja=q.concat(":",ka.toString(),":",this.getElementID(ga).toString());this.visibleElementInfo[ha]={visibility_id:ja,elem:ga};}else if(event.name===z.HIDDEN)if(ha in this.visibleElementInfo){ja=this.visibleElementInfo[ha].visibility_id;delete this.visibleElementInfo[ha];}this.sendDataToLog(o(ia,{event:event.name,visibility_id:ja}));};fa.prototype.clearUntrackedVisibleElements=function(){"use strict";var ga=this.getAllTrackedElements();for(var ha in this.visibleElementInfo)if(!(ha in ga)){var ia=this.visibleElementInfo[ha];if(ia.elem)this.handleEvent(ia.elem,da);}};fa.prototype.clearAllVisibleElements=function(){"use strict";var ga=this.getAllTrackedElements();for(var ha in ga)if(ha in this.visibleElementInfo)this.handleEvent(ga[ha],ca);this.clearUntrackedVisibleElements();};fa.prototype.updateVisibleElements=function(){"use strict";this.clearAllVisibleElements();this.fireEvent();};fa.prototype.refreshAndFireEvent=function(){"use strict";this.refreshAllTrackedElements();this.fireEventCallback();};fa.prototype.onUnload=function(){"use strict";this.clearAllVisibleElements();if(this.listeners){this.listeners.release();this.listeners=null;}if(this.extraCleanup)i.applyWithGuard(this.extraCleanup.bind(this));};fa.init=function(ga){"use strict";new fa(ga);};fa.EVENT=z;fa.CAUSE=aa;e.exports=fa;},null);
__d("ViewableImpressionEventHandler",["copyProperties","ViewableImpressionHeatmapLogger","ViewableImpressionTracker","VisibilityTracking"],function(a,b,c,d,e,f,g,h,i,j){b.__markCompiled&&b.__markCompiled();var k=1;for(var l in j)if(j.hasOwnProperty(l))n[l]=j[l];var m=j===null?null:j.prototype;n.prototype=Object.create(m);n.prototype.constructor=n;n.__superConstructor__=j;function n(){"use strict";if(j!==null)j.apply(this,arguments);}n.prototype.extraInit=function(){"use strict";this.impressionTrackers={};};n.prototype.getDataFromConfig=function(o){"use strict";m.getDataFromConfig.call(this,o);this.doHeatmapLogging=o.doHeatmapLogging;this.heatmapLoggingDurationMS=o.heatmapLoggingDurationMS;o.impressionURL=(o.impressionURL!==(void 0))?o.impressionURL:'/xti.php';o.nonviewableEnabled=(o.nonviewableEnabled!==(void 0))?o.nonviewableEnabled:false;};n.prototype.getImpressionTracking=function(o){"use strict";var p=this.getElementID(o),q=g(this.getConfigFromElement(o),this.config),r=this.impressionTrackers[p];if(!r){r=new i(p,o,q);this.impressionTrackers[p]=r;if(this.doHeatmapLogging)h.logFromViewableImpressionTracker(r,this.heatmapLoggingDurationMS);}return r;};n.prototype.handleEvent=function(o,event){"use strict";var p=this.getImpressionTracking(o);if(!p)return;if(event.name===j.EVENT.VISIBLE){p.onVisible();if(!this.visibleElementInfo[p.getID()])this.visibleElementInfo[p.getID()]={elem:o};}else if(event.name===j.EVENT.HIDDEN)if(event.cause===j.CAUSE.DEFAULT){p.onHidden();delete this.visibleElementInfo[p.getID()];}else if(event.cause===j.CAUSE.REMOVED){p.onRemoved();delete this.visibleElementInfo[p.getID()];delete this.impressionTrackers[p.getID()];}};n.prototype.getConfigFromElement=function(o){"use strict";return JSON.parse(o.getAttribute('data-xt-vimp'));};n.prototype.getElementID=function(o){"use strict";if(!o.getAttribute('id'))o.setAttribute('id','xt_uniq_'+k++);return o.getAttribute('id');};e.exports=n;},null);
__d("legacy:async-signal",["AsyncSignal"],function(a,b,c,d){b.__markCompiled&&b.__markCompiled();a.AsyncSignal=b('AsyncSignal');},3);
__d("ViewableImpressionTracking",["Arbiter","DesktopHscrollUnitEventConstants","ErrorUtils","LitestandMessages","Run","ViewableImpressionEventHandler","ViewableImpressionConfig"],function(a,b,c,d,e,f,g,h,i,j,k,l,m){b.__markCompiled&&b.__markCompiled();var n={init:function(){if(l.instance===(void 0)){l.instance=new l(m);l.instance.listeners.addSubscriptions(g.subscribe([j.STORIES_INSERTED,'AdsRefreshHandler/AdsLoaded','MPPInsights/ChartView','PhotoSnowliftAds/displayUnits','WebMessengerAdsControl/adjustAds',h.HSCROLL_ITEM_INSERTED_EVENT],i.guard(function(){l.instance.refreshAndFireEvent();},'ViewableImpressionTracking')));}k.onLoad(function(){l.instance.refreshAndFireEvent();});}};e.exports=n;},null);
__d("MercuryLeftNav",["Arbiter","MessagingTag","NavigationMessage","MercuryThreadInformer","MercuryUnreadState"],function(a,b,c,d,e,f,g,h,i){b.__markCompiled&&b.__markCompiled();var j=b('MercuryThreadInformer').get(),k=b('MercuryUnreadState').get(),l=false;function m(){var o=k.getUnreadCount(h.INBOX);g.inform(i.NAVIGATION_COUNT_UPDATE,{key:'inbox',hide:true});g.inform(i.NAVIGATION_COUNT_UPDATE,{key:'inbox',count:o});}var n={bootstrap:function(){if(l)return;j.subscribe('unread-updated',m);l=true;}};e.exports=n;},null);
__d("EgoUnitSlideInsert",["Animation","CSS","DataStore","DOM","Ease","Event","Parent","TidyArbiterMixin","cx","copyProperties","tidyEvent"],function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q){b.__markCompiled&&b.__markCompiled();var r='sliding',s="EgoSlider/End",t=p({isSliding:function(u){return i.get(u,r);},runAfterSlide:function(u,v){var w=q(t.subscribe(s,function(x,y){if(y===u){w&&w.unsubscribe();v();}}));},registerSlide:function(u,v){l.listen(u,'click',function(w){var x=m.byClass(w.getTarget(),"_5cl_");if(!x)return;var y=m.byClass(u,'ego_unit'),z=0,aa=m.byClass(y,'ego_unit_container'),ba=j.scry(aa,'.ego_unit')[0];if(ba===y)if(y.nextSibling){y.nextSibling.style.paddingTop='0px';y.nextSibling.style.borderTop='0px';}h.addClass(y,"_5cl-");i.set(y,r,true);new g(y).to('height',0).to('padding-top',z).to('padding-bottom',0).to('margin',0).from('opacity',1).to('opacity',0).ease(k.circOut).duration(300).checkpoint(1,function(){j.appendContent(aa,y);j.prependContent(y,v);i.remove(y,r);}).to('height',12).to('opacity',1).to('margin-bottom',10).duration(0).checkpoint(2,function(){t.inform(s,y);}).go();});}},n);e.exports=t;},null);
__d("NetEgo",["Animation","Arbiter","csx","cx","CSS","DOM","EgoUnitSlideInsert","PageLikeButton","Parent","URI","ge"],function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q){b.__markCompiled&&b.__markCompiled();var r={setup:function(s){h.subscribe([n.LIKED,'FriendRequest/sending'],function(t,u){if((s==u.profile_id&&u.origin=='hovercard')||s==u.uid){var v=q(document.body,'.ego_unit_container');if(v){var w=l.scry(v,'.ego_unit'),x=w.length;for(var y=0;y<x;y++){var z=w[y].getAttribute('data-ego-fbid');if(z==s){var aa=l.scry(w[y],'.ego_action a')[0];if(aa)aa.click();break;}}}}});},updateXids:function(s,t){if(s.length==0&&t.length==0)return;var u=function(ea){return function(fa){var ga=fa.getAttribute(ea);if(!ga)return false;var ha=new p(ga).getQueryData();return !!ha.xids;};},v=l.scry(document.body,'.ego_unit a');v=v.filter(u('ajaxify'));if(v.length==0)return;var w=new p(v[0].getAttribute('ajaxify')),x=w.getQueryData();if(!x.xids)return;try{var z=JSON.parse(x.xids);}catch(y){return;}for(var aa=0;aa<s.length;++aa)delete z[s[aa]];for(aa=0;aa<t.length;++aa)z[t[aa]]=1;var ba=JSON.stringify(z),ca=function(ea,fa){w=new p(ea.getAttribute(fa));x=w.getQueryData();x.xids=ba;w.setQueryData(x);ea.setAttribute(fa,w.toString());};for(aa=0;aa<v.length;++aa)ca(v[aa],'ajaxify');var da=l.scry(document.body,'.ego_unit form');da=da.filter(u('action'));for(aa=0;aa<da.length;++aa)ca(da[aa],'action');},replaceUnit:function(s,t,u,v){r.replaceUnitCheckParent(s,t,u,v,false);},replaceUnitCheckParent:function(s,t,u,v,w){var x=o.byClass(s,'ego_unit_container');if(x&&m.isSliding(s)){var y=l.appendContent(x,t);y.forEach(k.hide);m.runAfterSlide(s,r._replaceUnitElement.bind(null,s,y,w));}else r._replaceUnit(s,t,u,v,w);},_replaceUnit:function(s,t,u,v,w){var x=l.insertAfter(s,t);x.forEach(k.hide);if(v!==(void 0)&&v!==null){setTimeout(function(){r._replaceUnitFadeout(s,x,u,w);},v);}else r._replaceUnitFadeout(s,x,u,w);},_replaceUnitFadeout:function(s,t,u,v){if(u){new g(s).from('opacity',1).to('opacity',0).duration(u).checkpoint(1,function(){r._replaceUnitElement(s,t,v);}).go();}else r._replaceUnitElement(s,t,v);},_replaceUnitElement:function(s,t,u){var v=k.hasClass(s,'ego_unit')?s.parentNode:null;if(v&&v.tagName==='LI')v=l.scry(s.parentNode,'^ul')[0];var w=null;if(u)if(v){var x=o.byClass(s,'ego_feed_column');if(x)w=o.byClass(x,"_4-u2");}if(s.parentNode.tagName==='LI'&&!t.length){var y=l.scry(s,"._3pb7")[0];if(y){k.show(y);}else l.remove(s.parentNode);}else{l.remove(s);t.forEach(k.show);}h.inform('netego_replacedUnit');r.clearHeader();if(w&&!v.childNodes.length)k.hide(w);},clearHeader:function(){var s=l.scry(document.body,'.ego_column'),t=[];for(var u=0;u<s.length;++u)t=t.concat(l.scry(s[u],'.uiHeader'));for(u=0;u<t.length;++u){var v=t[u].nextSibling;if(!v||v.childNodes.length===0){l.remove(t[u]);}else if(v.childNodes.length===1){var w=v.childNodes[0];if(k.hasClass(w,'ego_appended_units')&&w.childNodes.length===0)l.remove(t[u]);}}}};e.exports=r;},null);