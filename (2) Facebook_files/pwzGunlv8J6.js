/*!CK:572220328!*//*1429199359,*/

if (self.CavalryLogger) { CavalryLogger.start_js(["JSwnd"]); }

__d("MercuryGenericConstants",[],function(a,b,c,d,e,f){b.__markCompiled&&b.__markCompiled();e.exports={MAX_THREAD_NAME_LENGTH:250};},null);
__d("PagesMessagingConst",[],function(a,b,c,d,e,f){b.__markCompiled&&b.__markCompiled();e.exports={LOAD_MESSAGE_THREAD_URI:"\/ajax\/pages\/messages\/load_message_thread.php",ASYNC_ENDPOINT:"\/ajax\/messaging\/async.php"};},null);
__d("clearImmediatePolyfill",["ImmediateImplementation"],function(a,b,c,d,e,f){b.__markCompiled&&b.__markCompiled();e.exports=a.clearImmediate||b('ImmediateImplementation').clearImmediate;},null);
__d("whitelistObjectKeys",[],function(a,b,c,d,e,f){b.__markCompiled&&b.__markCompiled();function g(h,i){var j={},k=Array.isArray(i)?i:Object.keys(i);for(var l=0;l<k.length;l++)if(typeof h[k[l]]!=='undefined')j[k[l]]=h[k[l]];return j;}e.exports=g;},null);
__d("StoreAndPropBasedStateMixin",["StoreBasedStateMixinHelper","invariant","setImmediate"],function(a,b,c,d,e,f,g,h,i){b.__markCompiled&&b.__markCompiled();'use strict';var j=function(){for(var k=[],l=0,m=arguments.length;l<m;l++)k.push(arguments[l]);return {getInitialState:function(){return this.constructor.calculateState(this.props);},componentWillMount:function(){h(this.constructor.calculateState);this._recalculateStateID=null;var n=function(){if(this.isMounted())this.setState(this.constructor.calculateState(this.props));this._recalculateStateID=null;}.bind(this);this._mixin=new g(k);this._mixin.subscribeCallback(function(){if(this._recalculateStateID===null)this._recalculateStateID=i(n);}.bind(this));},componentWillReceiveProps:function(n){this.setState(this.constructor.calculateState(n));},componentWillUnmount:function(){this._mixin.release();this._mixin=null;}};}.bind(this);e.exports=j;},null);
__d("clearImmediate",["clearImmediatePolyfill"],function(a,b,c,d,e,f,g){b.__markCompiled&&b.__markCompiled();e.exports=g.bind(a);},null);
__d("clearInterval",[],function(a,b,c,d,e,f){b.__markCompiled&&b.__markCompiled();e.exports=a.clearInterval.bind(a);},null);
__d("setInterval",["TimerStorage","setIntervalAcrossTransitions"],function(a,b,c,d,e,f,g,h){b.__markCompiled&&b.__markCompiled();e.exports=function(){for(var i=[],j=0,k=arguments.length;j<k;j++)i.push(arguments[j]);var l=h.apply(a,i);g.push(g.INTERVAL,l);return l;};},null);
__d("replaceNativeTimer",["clearInterval","clearTimeout","setInterval","setTimeout"],function(a,b,c,d,e,f,g,h,i,j){b.__markCompiled&&b.__markCompiled();var k=false;function l(){if(!k){k=true;j.nativeBackup=a.setTimeout;h.nativeBackup=a.clearTimeout;i.nativeBackup=a.setInterval;g.nativeBackup=a.clearInterval;a.setTimeout=j;a.clearTimeout=h;a.setInterval=i;a.clearInterval=g;}}e.exports=l;},null);
__d("MercuryUnseenState",["MercuryFolders","KeyedCallbackManager","LogHistory","MercuryActionType","MercurySingletonMixin","MercuryThreadInfo","MercuryThreadlistConstants","MessagingTag","MercuryServerRequests","MercuryThreadInformer","MercuryThreads","copyProperties","createObjectFrom","isEmpty"],function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t){b.__markCompiled&&b.__markCompiled();var u=m.MAX_UNSEEN_COUNT,v='unseen_thread_hash',w='unseen_thread_list',x=i.getInstance('mercury_unseen_state');function y(na){this._fbid=na;this._serverRequests=o.getForFBID(this._fbid);this._threads=q.getForFBID(this._fbid);this._threadInformer=p.getForFBID(this._fbid);this._initialUnseenCount=null;this._lastSeenTimestamp=0;this._maxCount=false;this._pendingServerUpdates=false;this._unseenResources=new h();this._serverRequests.subscribe('update-unseen',function(oa,pa){ea(this,pa);}.bind(this));this._serverRequests.subscribe('update-thread-ids',function(oa,pa){ka(this,pa);}.bind(this));}r(y.prototype,{getUnseenCount:function(){if(this.exceedsMaxCount()){x.error('unguarded_unseen_count_fetch',{});return 0;}return da(this)||0;},exceedsMaxCount:function(){return this._maxCount||(da(this)>u);},markAsSeen:function(){var na=da(this);if(na===null){this._pendingServerUpdates=true;}else if(na>0||this._maxCount){this._serverRequests.markSeen();var oa=this._serverRequests.getLastActionTimestamp();fa(this,oa,[]);}}});r(y,k);function z(na,oa,pa){var qa={};qa[oa]=0;ha(na,qa,pa);}function aa(na,oa){na._unseenResources.setResource(v,oa);na._unseenResources.setResource(w,Object.keys(oa));}function ba(na,oa){var pa=na._unseenResources.executeOrEnqueue(v,oa),qa=na._unseenResources.getUnavailableResources(pa);if(qa.length)na._serverRequests.fetchUnseenThreadIDs();}function ca(na){return na._unseenResources.getResource(v);}function da(na){var oa=na._unseenResources.getResource(w);if(oa){return oa.length;}else return na._initialUnseenCount;}function ea(na,oa){var pa=ma(oa);if(oa.unseen_thread_fbids){oa.unseen_thread_fbids.forEach(function(ab){if(ab.folder!=n.INBOX)return;var bb=ab.thread_fbids||[];bb=bb.concat(ab.other_user_fbids||[]);var cb=ja(na,bb),db=na._lastSeenTimestamp;if(pa&&pa.seen_timestamp)db=pa.seen_timestamp;fa(na,db,cb);if(pa&&pa.unseen_count>u)na._maxCount=true;});}else if(pa&&pa.seen_timestamp){na._lastSeenTimestamp=pa.seen_timestamp;if(pa.unseen_count>u){na._maxCount=true;aa(na,{});}else{na._initialUnseenCount=pa.unseen_count;if(na._initialUnseenCount===0)aa(na,{});}}else{if(na._maxCount)return;var qa=oa.actions;if(!qa||!(qa.length))return;var ra={},sa={};for(var ta=0;ta<qa.length;ta++){var ua=qa[ta];if(ua.is_forward)continue;var va=ua.action_type,wa=ua.other_user_fbid?ua.other_user_fbid:ua.thread_fbid,xa=ua.thread_id?ua.thread_id:wa;if(va==j.MARK_THREAD_SEEN){z(na,xa,ua.persistent);continue;}if(!la(na,ua))continue;if(va==j.USER_GENERATED_MESSAGE||va==j.LOG_MESSAGE){var ya=ra[xa]?ua.timestamp>ra[xa]:false,za=ya||!ra[xa];if(ua.is_unread&&za)na._threads.getThreadMeta(xa,function(ab){var bb=false;if(ab&&ab.last_read_timestamp)if(ab.last_read_timestamp>=ua.timestamp)bb=true;if(!l.isMuted(ab)&&!bb)ra[xa]=ua.timestamp;});}else if(va==j.CHANGE_READ_STATUS&&ua.mark_as_read)sa[xa]=ua.timestamp;}ga(na,ra);ha(na,sa);}if(na._pendingServerUpdates){na._pendingServerUpdates=false;na.markAsSeen();}}function fa(na,oa,pa){var qa=ca(na);if(qa===(void 0)||oa>na._lastSeenTimestamp||na._maxCount){na._lastSeenTimestamp=oa;pa=pa||[];if(pa.length<=u)na._maxCount=false;var ra={},sa=ca(na)||{};for(var ta in sa)if(sa[ta]!==true){var ua=sa[ta];if(ia(na,ua))ra[ta]=ua;}var va=r(s(pa,true),ra);aa(na,va);na._threadInformer.updatedUnseenState();}}function ga(na,oa){if(na._maxCount)return;var pa={},qa=false;for(var ra in oa){var sa=oa[ra];if(ia(na,sa)){pa[ra]=sa;qa=true;}}if(!qa)return;ba(na,function(ta){for(var ua in pa){var va=pa[ua];if(!ta[ua]&&ia(na,va))ta[ua]=pa[ua];}aa(na,ta);na._threadInformer.updatedUnseenState();});}function ha(na,oa,pa){var qa=false;if(!t(oa))qa=true;if(qa)ba(na,function(ra){var sa=false;for(var ta in oa){var ua=oa[ta],va=ua>ra[ta];if(ra[ta]&&(!ua||va)){delete ra[ta];sa=true;}}if(sa){aa(na,ra);na._threadInformer.updatedUnseenState();if(pa&&da(na)===0)na._serverRequests.markSeen();}});}function ia(na,oa){return oa>na._lastSeenTimestamp;}function ja(na,oa){return oa.map(na._serverRequests.convertThreadIDIfAvailable,na._serverRequests);}function ka(na,oa){var pa=ca(na);if(!pa)return;for(var qa in oa){var ra=oa[qa];if(pa[qa]){pa[ra]=pa[qa];delete pa[qa];}}aa(na,pa);}function la(na,oa){var pa=oa.thread_id?na._threads.getThreadMetaNow(oa.thread_id):null,qa=pa?g.getFromMeta(pa):oa.folder;return qa===n.INBOX||qa===(void 0);}function ma(na){var oa=(na.message_counts||[]);for(var pa=0;pa<oa.length;pa++)if(oa[pa].folder==n.INBOX)return oa[pa];return null;}e.exports=y;},null);
__d("QuicklingAugmenter",["URI"],function(a,b,c,d,e,f,g){b.__markCompiled&&b.__markCompiled();var h=[],i={addHandler:function(j){h.push(j);},augmentURI:function(j){var k=[],l=g(j);h.forEach(function(m){var n=m(l);if(!n)return l;k.push(m);l=l.addQueryData(n);});h=k;return l;}};e.exports=i;},null);
__d("Quickling",["AjaxPipeRequest","Arbiter","CSSClassTransition","DocumentTitle","DOM","HTML","PageHooks","PageEvents","PageTransitions","QuicklingAugmenter","QuicklingConfig","Run","URI","UserAgent_DEPRECATED","PHPQuerySerializer","TimerStorage","cancelAnimationFrame","clearImmediate","clearInterval","clearTimeout","goOrReplace","isEmpty","replaceNativeTimer"],function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,aa,ba,ca){b.__markCompiled&&b.__markCompiled();var da=q.version,ea=q.sessionLength,fa=new RegExp(q.inactivePageRegex),ga=0,ha,ia='',ja={isActive:function(){return true;},isPageActive:function(ra){if(ra=='#')return false;ra=new s(ra);if(ra.getDomain()&&ra.getDomain()!=s().getDomain())return false;if(ra.getPath()=='/l.php'){var sa=ra.getQueryData().u;if(sa){sa=s(unescape(sa)).getDomain();if(sa&&sa!=s().getDomain())return false;}}var ta=ra.getPath(),ua=ra.getQueryData();if(!ba(ua))ta+='?'+u.serialize(ua);return !fa.test(ta);},getLoadCount:function(){return ga;}};function ka(ra){ra=ra||'Facebook';j.set(ra);if(t.ie()){ia=ra;if(!ha)ha=window.setInterval(function(){var sa=ia,ta=j.get();if(sa!=ta)j.set(sa);},5000,false);}}function la(ra){var sa=document.getElementsByTagName('link');for(var ta=0;ta<sa.length;++ta){if(sa[ta].rel!='alternate')continue;k.remove(sa[ta]);}if(ra.length){var ua=k.find(document,'head');ua&&k.appendContent(ua,l(ra[0]));}}for(var ma in g)if(g.hasOwnProperty(ma))oa[ma]=g[ma];var na=g===null?null:g.prototype;oa.prototype=Object.create(na);oa.prototype.constructor=oa;oa.__superConstructor__=g;function oa(ra){"use strict";var sa={version:da};this._isQuickling=true;g.call(this,ra,{quickling:sa});}oa.prototype._preBootloadFirstResponse=function(ra){"use strict";return true;};oa.prototype._fireDomContentCallback=function(){"use strict";this._request.cavalry&&this._request.cavalry.setTimeStamp('t_domcontent');o.transitionComplete();this._onPageDisplayed&&this._onPageDisplayed(this.pipe);na._fireDomContentCallback.call(this);};oa.prototype._fireOnloadCallback=function(){"use strict";if(this._request.cavalry){this._request.cavalry.setTimeStamp('t_hooks');this._request.cavalry.setTimeStamp('t_layout');this._request.cavalry.setTimeStamp('t_onload');}na._fireOnloadCallback.call(this);};oa.prototype.isPageActive=function(ra){"use strict";return ja.isPageActive(ra);};oa.prototype._versionCheck=function(ra){"use strict";if(ra.version==da)return true;var sa=['quickling','ajaxpipe','ajaxpipe_token'];aa(window.location,s(ra.uri).removeQueryData(sa),true);return false;};oa.prototype._processFirstResponse=function(ra){"use strict";var sa=ra.getPayload();ka(sa.title);la(sa.syndication||[]);window.scrollTo(0,0);i.go(document.body,sa.body_class||'',o.getMostRecentURI(),ra.getRequest().getURI());h.inform('quickling/response');};oa.prototype.getSanitizedParameters=function(){"use strict";return ['quickling'];};function pa(){ga++;return ga>=ea;}function qa(ra){g.setCurrentRequest(null);if(pa())return false;ra=p.augmentURI(ra);if(!ja.isPageActive(ra))return false;v.popAll(v.TIMEOUT,z);v.popAll(v.INTERVAL,y);v.popAll(v.IMMEDIATE,x);v.popAll(v.ANIMATION_FRAME,w);window.ExitTime=Date.now();r.__removeHook(m.ONLOAD_HOOK);r.__removeHook(m.DOMREADY_HOOK);m.runHooks('onleavehooks');h.inform(n.AJAXPIPE_ONUNLOAD,true);new oa(ra).setCanvasId('content').send();return true;}ca();r.onAfterLoad(function ra(){o.registerHandler(qa,1);});e.exports=a.Quickling=ja;},null);
__d("FacebarTypeaheadShortcut",["FacebarTypeaheadShortcutConfig","KeyEventController","Run"],function(a,b,c,d,e,f,g,h,i){b.__markCompiled&&b.__markCompiled();function j(k){"use strict";this._input=k.core.input;this._view=k.view;this._listener=null;}j.prototype.enable=function(){"use strict";this._registerListener();};j.prototype.disable=function(){"use strict";};j.prototype._registerListener=function(){"use strict";this._listener=h.registerKey('SLASH',this._handleKeydown.bind(this));i.onLeave(function(){setTimeout(this._registerListener.bind(this),0);}.bind(this));};j.prototype._handleKeydown=function(k){"use strict";var l=k.getModifiers().shift;if(l&&!g.gkWebShortcut)return;this._selectInput(l);return false;};j.prototype._selectInput=function(k){"use strict";this._view.setAutoSelect(true);this._input.focus();this._input.selectInput();this._input.inform('shortcut',{shift:k});};e.exports=j;},null);
__d("VaultBoxURI",["URI"],function(a,b,c,d,e,f,g){b.__markCompiled&&b.__markCompiled();var h={PHOTOS_SYNCED:'photos_synced',isVaultBoxURI:function(i){var j=new RegExp("\/"+h.PHOTOS_SYNCED+"\/?$");return i.getPath().match(j)&&i.getQueryData().hasOwnProperty('view_image');},isVaultArchiveURI:function(i){var j=new RegExp("\/"+h.PHOTOS_SYNCED+"\/?$");return i.getPath().match(j);},getSyncedTabURI:function(){return new g('/me/'+h.PHOTOS_SYNCED).getQualifiedURI();}};e.exports=h;},null);