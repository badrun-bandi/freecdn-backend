"use strict";(self.webpackChunkfreecdn_frontend=self.webpackChunkfreecdn_frontend||[]).push([["vendor"],{1135:(St,He,y)=>{y.d(He,{X:()=>v});var s=y(7579);class v extends s.x{constructor(G){super(),this._value=G}get value(){return this.getValue()}_subscribe(G){const X=super._subscribe(G);return!X.closed&&G.next(this._value),X}getValue(){const{hasError:G,thrownError:X,_value:K}=this;if(G)throw X;return this._throwIfClosed(),K}next(G){super.next(this._value=G)}}},8306:(St,He,y)=>{y.d(He,{y:()=>ce});var s=y(930),v=y(727),M=y(8822),G=y(4671);var ue=y(2416),q=y(576),Me=y(2806);let ce=(()=>{class Ve{constructor(Ke){Ke&&(this._subscribe=Ke)}lift(Ke){const Ne=new Ve;return Ne.source=this,Ne.operator=Ke,Ne}subscribe(Ke,Ne,qe){const ht=function Ge(Ve){return Ve&&Ve instanceof s.Lv||function te(Ve){return Ve&&(0,q.m)(Ve.next)&&(0,q.m)(Ve.error)&&(0,q.m)(Ve.complete)}(Ve)&&(0,v.Nn)(Ve)}(Ke)?Ke:new s.Hp(Ke,Ne,qe);return(0,Me.x)(()=>{const{operator:mt,source:de}=this;ht.add(mt?mt.call(ht,de):de?this._subscribe(ht):this._trySubscribe(ht))}),ht}_trySubscribe(Ke){try{return this._subscribe(Ke)}catch(Ne){Ke.error(Ne)}}forEach(Ke,Ne){return new(Ne=me(Ne))((qe,ht)=>{const mt=new s.Hp({next:de=>{try{Ke(de)}catch(Q){ht(Q),mt.unsubscribe()}},error:ht,complete:qe});this.subscribe(mt)})}_subscribe(Ke){var Ne;return null===(Ne=this.source)||void 0===Ne?void 0:Ne.subscribe(Ke)}[M.L](){return this}pipe(...Ke){return function K(Ve){return 0===Ve.length?G.y:1===Ve.length?Ve[0]:function(Ke){return Ve.reduce((Ne,qe)=>qe(Ne),Ke)}}(Ke)(this)}toPromise(Ke){return new(Ke=me(Ke))((Ne,qe)=>{let ht;this.subscribe(mt=>ht=mt,mt=>qe(mt),()=>Ne(ht))})}}return Ve.create=xe=>new Ve(xe),Ve})();function me(Ve){var xe;return null!==(xe=Ve??ue.v.Promise)&&void 0!==xe?xe:Promise}},7579:(St,He,y)=>{y.d(He,{x:()=>ue});var s=y(8306),v=y(727);const G=(0,y(3888).d)(Me=>function(){Me(this),this.name="ObjectUnsubscribedError",this.message="object unsubscribed"});var X=y(8737),K=y(2806);let ue=(()=>{class Me extends s.y{constructor(){super(),this.closed=!1,this.currentObservers=null,this.observers=[],this.isStopped=!1,this.hasError=!1,this.thrownError=null}lift(me){const te=new q(this,this);return te.operator=me,te}_throwIfClosed(){if(this.closed)throw new G}next(me){(0,K.x)(()=>{if(this._throwIfClosed(),!this.isStopped){this.currentObservers||(this.currentObservers=Array.from(this.observers));for(const te of this.currentObservers)te.next(me)}})}error(me){(0,K.x)(()=>{if(this._throwIfClosed(),!this.isStopped){this.hasError=this.isStopped=!0,this.thrownError=me;const{observers:te}=this;for(;te.length;)te.shift().error(me)}})}complete(){(0,K.x)(()=>{if(this._throwIfClosed(),!this.isStopped){this.isStopped=!0;const{observers:me}=this;for(;me.length;)me.shift().complete()}})}unsubscribe(){this.isStopped=this.closed=!0,this.observers=this.currentObservers=null}get observed(){var me;return(null===(me=this.observers)||void 0===me?void 0:me.length)>0}_trySubscribe(me){return this._throwIfClosed(),super._trySubscribe(me)}_subscribe(me){return this._throwIfClosed(),this._checkFinalizedStatuses(me),this._innerSubscribe(me)}_innerSubscribe(me){const{hasError:te,isStopped:Ge,observers:Ve}=this;return te||Ge?v.Lc:(this.currentObservers=null,Ve.push(me),new v.w0(()=>{this.currentObservers=null,(0,X.P)(Ve,me)}))}_checkFinalizedStatuses(me){const{hasError:te,thrownError:Ge,isStopped:Ve}=this;te?me.error(Ge):Ve&&me.complete()}asObservable(){const me=new s.y;return me.source=this,me}}return Me.create=(ce,me)=>new q(ce,me),Me})();class q extends ue{constructor(ce,me){super(),this.destination=ce,this.source=me}next(ce){var me,te;null===(te=null===(me=this.destination)||void 0===me?void 0:me.next)||void 0===te||te.call(me,ce)}error(ce){var me,te;null===(te=null===(me=this.destination)||void 0===me?void 0:me.error)||void 0===te||te.call(me,ce)}complete(){var ce,me;null===(me=null===(ce=this.destination)||void 0===ce?void 0:ce.complete)||void 0===me||me.call(ce)}_subscribe(ce){var me,te;return null!==(te=null===(me=this.source)||void 0===me?void 0:me.subscribe(ce))&&void 0!==te?te:v.Lc}}},930:(St,He,y)=>{y.d(He,{Hp:()=>Ke,Lv:()=>te});var s=y(576),v=y(727),M=y(2416),G=y(7849),X=y(5032);const K=Me("C",void 0,void 0);function Me(de,Q,ee){return{kind:de,value:Q,error:ee}}var ce=y(3410),me=y(2806);class te extends v.w0{constructor(Q){super(),this.isStopped=!1,Q?(this.destination=Q,(0,v.Nn)(Q)&&Q.add(this)):this.destination=mt}static create(Q,ee,ae){return new Ke(Q,ee,ae)}next(Q){this.isStopped?ht(function q(de){return Me("N",de,void 0)}(Q),this):this._next(Q)}error(Q){this.isStopped?ht(function ue(de){return Me("E",void 0,de)}(Q),this):(this.isStopped=!0,this._error(Q))}complete(){this.isStopped?ht(K,this):(this.isStopped=!0,this._complete())}unsubscribe(){this.closed||(this.isStopped=!0,super.unsubscribe(),this.destination=null)}_next(Q){this.destination.next(Q)}_error(Q){try{this.destination.error(Q)}finally{this.unsubscribe()}}_complete(){try{this.destination.complete()}finally{this.unsubscribe()}}}const Ge=Function.prototype.bind;function Ve(de,Q){return Ge.call(de,Q)}class xe{constructor(Q){this.partialObserver=Q}next(Q){const{partialObserver:ee}=this;if(ee.next)try{ee.next(Q)}catch(ae){Ne(ae)}}error(Q){const{partialObserver:ee}=this;if(ee.error)try{ee.error(Q)}catch(ae){Ne(ae)}else Ne(Q)}complete(){const{partialObserver:Q}=this;if(Q.complete)try{Q.complete()}catch(ee){Ne(ee)}}}class Ke extends te{constructor(Q,ee,ae){let Ee;if(super(),(0,s.m)(Q)||!Q)Ee={next:Q??void 0,error:ee??void 0,complete:ae??void 0};else{let Be;this&&M.v.useDeprecatedNextContext?(Be=Object.create(Q),Be.unsubscribe=()=>this.unsubscribe(),Ee={next:Q.next&&Ve(Q.next,Be),error:Q.error&&Ve(Q.error,Be),complete:Q.complete&&Ve(Q.complete,Be)}):Ee=Q}this.destination=new xe(Ee)}}function Ne(de){M.v.useDeprecatedSynchronousErrorHandling?(0,me.O)(de):(0,G.h)(de)}function ht(de,Q){const{onStoppedNotification:ee}=M.v;ee&&ce.z.setTimeout(()=>ee(de,Q))}const mt={closed:!0,next:X.Z,error:function qe(de){throw de},complete:X.Z}},727:(St,He,y)=>{y.d(He,{Lc:()=>K,w0:()=>X,Nn:()=>ue});var s=y(576);const M=(0,y(3888).d)(Me=>function(me){Me(this),this.message=me?`${me.length} errors occurred during unsubscription:\n${me.map((te,Ge)=>`${Ge+1}) ${te.toString()}`).join("\n  ")}`:"",this.name="UnsubscriptionError",this.errors=me});var G=y(8737);class X{constructor(ce){this.initialTeardown=ce,this.closed=!1,this._parentage=null,this._finalizers=null}unsubscribe(){let ce;if(!this.closed){this.closed=!0;const{_parentage:me}=this;if(me)if(this._parentage=null,Array.isArray(me))for(const Ve of me)Ve.remove(this);else me.remove(this);const{initialTeardown:te}=this;if((0,s.m)(te))try{te()}catch(Ve){ce=Ve instanceof M?Ve.errors:[Ve]}const{_finalizers:Ge}=this;if(Ge){this._finalizers=null;for(const Ve of Ge)try{q(Ve)}catch(xe){ce=ce??[],xe instanceof M?ce=[...ce,...xe.errors]:ce.push(xe)}}if(ce)throw new M(ce)}}add(ce){var me;if(ce&&ce!==this)if(this.closed)q(ce);else{if(ce instanceof X){if(ce.closed||ce._hasParent(this))return;ce._addParent(this)}(this._finalizers=null!==(me=this._finalizers)&&void 0!==me?me:[]).push(ce)}}_hasParent(ce){const{_parentage:me}=this;return me===ce||Array.isArray(me)&&me.includes(ce)}_addParent(ce){const{_parentage:me}=this;this._parentage=Array.isArray(me)?(me.push(ce),me):me?[me,ce]:ce}_removeParent(ce){const{_parentage:me}=this;me===ce?this._parentage=null:Array.isArray(me)&&(0,G.P)(me,ce)}remove(ce){const{_finalizers:me}=this;me&&(0,G.P)(me,ce),ce instanceof X&&ce._removeParent(this)}}X.EMPTY=(()=>{const Me=new X;return Me.closed=!0,Me})();const K=X.EMPTY;function ue(Me){return Me instanceof X||Me&&"closed"in Me&&(0,s.m)(Me.remove)&&(0,s.m)(Me.add)&&(0,s.m)(Me.unsubscribe)}function q(Me){(0,s.m)(Me)?Me():Me.unsubscribe()}},2416:(St,He,y)=>{y.d(He,{v:()=>s});const s={onUnhandledError:null,onStoppedNotification:null,Promise:void 0,useDeprecatedSynchronousErrorHandling:!1,useDeprecatedNextContext:!1}},9841:(St,He,y)=>{y.d(He,{a:()=>ce});var s=y(8306),v=y(4742),M=y(2076),G=y(4671),X=y(3268),K=y(3269),ue=y(1810),q=y(5403),Me=y(9672);function ce(...Ge){const Ve=(0,K.yG)(Ge),xe=(0,K.jO)(Ge),{args:Ke,keys:Ne}=(0,v.D)(Ge);if(0===Ke.length)return(0,M.D)([],Ve);const qe=new s.y(function me(Ge,Ve,xe=G.y){return Ke=>{te(Ve,()=>{const{length:Ne}=Ge,qe=new Array(Ne);let ht=Ne,mt=Ne;for(let de=0;de<Ne;de++)te(Ve,()=>{const Q=(0,M.D)(Ge[de],Ve);let ee=!1;Q.subscribe((0,q.x)(Ke,ae=>{qe[de]=ae,ee||(ee=!0,mt--),mt||Ke.next(xe(qe.slice()))},()=>{--ht||Ke.complete()}))},Ke)},Ke)}}(Ke,Ve,Ne?ht=>(0,ue.n)(Ne,ht):G.y));return xe?qe.pipe((0,X.Z)(xe)):qe}function te(Ge,Ve,xe){Ge?(0,Me.f)(xe,Ge,Ve):Ve()}},7272:(St,He,y)=>{y.d(He,{z:()=>X});var s=y(8189),M=y(3269),G=y(2076);function X(...K){return function v(){return(0,s.J)(1)}()((0,G.D)(K,(0,M.yG)(K)))}},9770:(St,He,y)=>{y.d(He,{P:()=>M});var s=y(8306),v=y(8421);function M(G){return new s.y(X=>{(0,v.Xf)(G()).subscribe(X)})}},515:(St,He,y)=>{y.d(He,{E:()=>v});const v=new(y(8306).y)(X=>X.complete())},4128:(St,He,y)=>{y.d(He,{D:()=>q});var s=y(8306),v=y(4742),M=y(8421),G=y(3269),X=y(5403),K=y(3268),ue=y(1810);function q(...Me){const ce=(0,G.jO)(Me),{args:me,keys:te}=(0,v.D)(Me),Ge=new s.y(Ve=>{const{length:xe}=me;if(!xe)return void Ve.complete();const Ke=new Array(xe);let Ne=xe,qe=xe;for(let ht=0;ht<xe;ht++){let mt=!1;(0,M.Xf)(me[ht]).subscribe((0,X.x)(Ve,de=>{mt||(mt=!0,qe--),Ke[ht]=de},()=>Ne--,void 0,()=>{(!Ne||!mt)&&(qe||Ve.next(te?(0,ue.n)(te,Ke):Ke),Ve.complete())}))}});return ce?Ge.pipe((0,K.Z)(ce)):Ge}},2076:(St,He,y)=>{y.d(He,{D:()=>ae});var s=y(8421),v=y(9672),M=y(4482),G=y(5403);function X(Ee,Be=0){return(0,M.e)((ot,Se)=>{ot.subscribe((0,G.x)(Se,fe=>(0,v.f)(Se,Ee,()=>Se.next(fe),Be),()=>(0,v.f)(Se,Ee,()=>Se.complete(),Be),fe=>(0,v.f)(Se,Ee,()=>Se.error(fe),Be)))})}function K(Ee,Be=0){return(0,M.e)((ot,Se)=>{Se.add(Ee.schedule(()=>ot.subscribe(Se),Be))})}var Me=y(8306),me=y(2202),te=y(576);function Ve(Ee,Be){if(!Ee)throw new Error("Iterable cannot be null");return new Me.y(ot=>{(0,v.f)(ot,Be,()=>{const Se=Ee[Symbol.asyncIterator]();(0,v.f)(ot,Be,()=>{Se.next().then(fe=>{fe.done?ot.complete():ot.next(fe.value)})},0,!0)})})}var xe=y(3670),Ke=y(8239),Ne=y(1144),qe=y(6495),ht=y(2206),mt=y(4532),de=y(3260);function ae(Ee,Be){return Be?function ee(Ee,Be){if(null!=Ee){if((0,xe.c)(Ee))return function ue(Ee,Be){return(0,s.Xf)(Ee).pipe(K(Be),X(Be))}(Ee,Be);if((0,Ne.z)(Ee))return function ce(Ee,Be){return new Me.y(ot=>{let Se=0;return Be.schedule(function(){Se===Ee.length?ot.complete():(ot.next(Ee[Se++]),ot.closed||this.schedule())})})}(Ee,Be);if((0,Ke.t)(Ee))return function q(Ee,Be){return(0,s.Xf)(Ee).pipe(K(Be),X(Be))}(Ee,Be);if((0,ht.D)(Ee))return Ve(Ee,Be);if((0,qe.T)(Ee))return function Ge(Ee,Be){return new Me.y(ot=>{let Se;return(0,v.f)(ot,Be,()=>{Se=Ee[me.h](),(0,v.f)(ot,Be,()=>{let fe,Fe;try{({value:fe,done:Fe}=Se.next())}catch(le){return void ot.error(le)}Fe?ot.complete():ot.next(fe)},0,!0)}),()=>(0,te.m)(Se?.return)&&Se.return()})}(Ee,Be);if((0,de.L)(Ee))return function Q(Ee,Be){return Ve((0,de.Q)(Ee),Be)}(Ee,Be)}throw(0,mt.z)(Ee)}(Ee,Be):(0,s.Xf)(Ee)}},4968:(St,He,y)=>{y.d(He,{R:()=>ce});var s=y(8421),v=y(8306),M=y(5577),G=y(1144),X=y(576),K=y(3268);const ue=["addListener","removeListener"],q=["addEventListener","removeEventListener"],Me=["on","off"];function ce(xe,Ke,Ne,qe){if((0,X.m)(Ne)&&(qe=Ne,Ne=void 0),qe)return ce(xe,Ke,Ne).pipe((0,K.Z)(qe));const[ht,mt]=function Ve(xe){return(0,X.m)(xe.addEventListener)&&(0,X.m)(xe.removeEventListener)}(xe)?q.map(de=>Q=>xe[de](Ke,Q,Ne)):function te(xe){return(0,X.m)(xe.addListener)&&(0,X.m)(xe.removeListener)}(xe)?ue.map(me(xe,Ke)):function Ge(xe){return(0,X.m)(xe.on)&&(0,X.m)(xe.off)}(xe)?Me.map(me(xe,Ke)):[];if(!ht&&(0,G.z)(xe))return(0,M.z)(de=>ce(de,Ke,Ne))((0,s.Xf)(xe));if(!ht)throw new TypeError("Invalid event target");return new v.y(de=>{const Q=(...ee)=>de.next(1<ee.length?ee:ee[0]);return ht(Q),()=>mt(Q)})}function me(xe,Ke){return Ne=>qe=>xe[Ne](Ke,qe)}},8421:(St,He,y)=>{y.d(He,{Xf:()=>Ge});var s=y(655),v=y(1144),M=y(8239),G=y(8306),X=y(3670),K=y(2206),ue=y(4532),q=y(6495),Me=y(3260),ce=y(576),me=y(7849),te=y(8822);function Ge(de){if(de instanceof G.y)return de;if(null!=de){if((0,X.c)(de))return function Ve(de){return new G.y(Q=>{const ee=de[te.L]();if((0,ce.m)(ee.subscribe))return ee.subscribe(Q);throw new TypeError("Provided object does not correctly implement Symbol.observable")})}(de);if((0,v.z)(de))return function xe(de){return new G.y(Q=>{for(let ee=0;ee<de.length&&!Q.closed;ee++)Q.next(de[ee]);Q.complete()})}(de);if((0,M.t)(de))return function Ke(de){return new G.y(Q=>{de.then(ee=>{Q.closed||(Q.next(ee),Q.complete())},ee=>Q.error(ee)).then(null,me.h)})}(de);if((0,K.D)(de))return qe(de);if((0,q.T)(de))return function Ne(de){return new G.y(Q=>{for(const ee of de)if(Q.next(ee),Q.closed)return;Q.complete()})}(de);if((0,Me.L)(de))return function ht(de){return qe((0,Me.Q)(de))}(de)}throw(0,ue.z)(de)}function qe(de){return new G.y(Q=>{(function mt(de,Q){var ee,ae,Ee,Be;return(0,s.mG)(this,void 0,void 0,function*(){try{for(ee=(0,s.KL)(de);!(ae=yield ee.next()).done;)if(Q.next(ae.value),Q.closed)return}catch(ot){Ee={error:ot}}finally{try{ae&&!ae.done&&(Be=ee.return)&&(yield Be.call(ee))}finally{if(Ee)throw Ee.error}}Q.complete()})})(de,Q).catch(ee=>Q.error(ee))})}},6451:(St,He,y)=>{y.d(He,{T:()=>K});var s=y(8189),v=y(8421),M=y(515),G=y(3269),X=y(2076);function K(...ue){const q=(0,G.yG)(ue),Me=(0,G._6)(ue,1/0),ce=ue;return ce.length?1===ce.length?(0,v.Xf)(ce[0]):(0,s.J)(Me)((0,X.D)(ce,q)):M.E}},9646:(St,He,y)=>{y.d(He,{of:()=>M});var s=y(3269),v=y(2076);function M(...G){const X=(0,s.yG)(G);return(0,v.D)(G,X)}},2843:(St,He,y)=>{y.d(He,{_:()=>M});var s=y(8306),v=y(576);function M(G,X){const K=(0,v.m)(G)?G:()=>G,ue=q=>q.error(K());return new s.y(X?q=>X.schedule(ue,0,q):ue)}},5963:(St,He,y)=>{y.d(He,{H:()=>X});var s=y(8306),v=y(4986),M=y(3532);function X(K=0,ue,q=v.P){let Me=-1;return null!=ue&&((0,M.K)(ue)?q=ue:Me=ue),new s.y(ce=>{let me=function G(K){return K instanceof Date&&!isNaN(K)}(K)?+K-q.now():K;me<0&&(me=0);let te=0;return q.schedule(function(){ce.closed||(ce.next(te++),0<=Me?this.schedule(void 0,Me):ce.complete())},me)})}},5403:(St,He,y)=>{y.d(He,{x:()=>v});var s=y(930);function v(G,X,K,ue,q){return new M(G,X,K,ue,q)}class M extends s.Lv{constructor(X,K,ue,q,Me,ce){super(X),this.onFinalize=Me,this.shouldUnsubscribe=ce,this._next=K?function(me){try{K(me)}catch(te){X.error(te)}}:super._next,this._error=q?function(me){try{q(me)}catch(te){X.error(te)}finally{this.unsubscribe()}}:super._error,this._complete=ue?function(){try{ue()}catch(me){X.error(me)}finally{this.unsubscribe()}}:super._complete}unsubscribe(){var X;if(!this.shouldUnsubscribe||this.shouldUnsubscribe()){const{closed:K}=this;super.unsubscribe(),!K&&(null===(X=this.onFinalize)||void 0===X||X.call(this))}}}},262:(St,He,y)=>{y.d(He,{K:()=>G});var s=y(8421),v=y(5403),M=y(4482);function G(X){return(0,M.e)((K,ue)=>{let ce,q=null,Me=!1;q=K.subscribe((0,v.x)(ue,void 0,void 0,me=>{ce=(0,s.Xf)(X(me,G(X)(K))),q?(q.unsubscribe(),q=null,ce.subscribe(ue)):Me=!0})),Me&&(q.unsubscribe(),q=null,ce.subscribe(ue))})}},4351:(St,He,y)=>{y.d(He,{b:()=>M});var s=y(5577),v=y(576);function M(G,X){return(0,v.m)(X)?(0,s.z)(G,X,1):(0,s.z)(G,1)}},8372:(St,He,y)=>{y.d(He,{b:()=>G});var s=y(4986),v=y(4482),M=y(5403);function G(X,K=s.z){return(0,v.e)((ue,q)=>{let Me=null,ce=null,me=null;const te=()=>{if(Me){Me.unsubscribe(),Me=null;const Ve=ce;ce=null,q.next(Ve)}};function Ge(){const Ve=me+X,xe=K.now();if(xe<Ve)return Me=this.schedule(void 0,Ve-xe),void q.add(Me);te()}ue.subscribe((0,M.x)(q,Ve=>{ce=Ve,me=K.now(),Me||(Me=K.schedule(Ge,X),q.add(Me))},()=>{te(),q.complete()},void 0,()=>{ce=Me=null}))})}},1005:(St,He,y)=>{y.d(He,{g:()=>te});var s=y(4986),v=y(7272),M=y(5698),G=y(4482),X=y(5403),K=y(5032),q=y(9718),Me=y(5577);function ce(Ge,Ve){return Ve?xe=>(0,v.z)(Ve.pipe((0,M.q)(1),function ue(){return(0,G.e)((Ge,Ve)=>{Ge.subscribe((0,X.x)(Ve,K.Z))})}()),xe.pipe(ce(Ge))):(0,Me.z)((xe,Ke)=>Ge(xe,Ke).pipe((0,M.q)(1),(0,q.h)(xe)))}var me=y(5963);function te(Ge,Ve=s.z){const xe=(0,me.H)(Ge,Ve);return ce(()=>xe)}},9300:(St,He,y)=>{y.d(He,{h:()=>M});var s=y(4482),v=y(5403);function M(G,X){return(0,s.e)((K,ue)=>{let q=0;K.subscribe((0,v.x)(ue,Me=>G.call(X,Me,q++)&&ue.next(Me)))})}},8746:(St,He,y)=>{y.d(He,{x:()=>v});var s=y(4482);function v(M){return(0,s.e)((G,X)=>{try{G.subscribe(X)}finally{X.add(M)}})}},4004:(St,He,y)=>{y.d(He,{U:()=>M});var s=y(4482),v=y(5403);function M(G,X){return(0,s.e)((K,ue)=>{let q=0;K.subscribe((0,v.x)(ue,Me=>{ue.next(G.call(X,Me,q++))}))})}},9718:(St,He,y)=>{y.d(He,{h:()=>v});var s=y(4004);function v(M){return(0,s.U)(()=>M)}},8189:(St,He,y)=>{y.d(He,{J:()=>M});var s=y(5577),v=y(4671);function M(G=1/0){return(0,s.z)(v.y,G)}},5577:(St,He,y)=>{y.d(He,{z:()=>q});var s=y(4004),v=y(8421),M=y(4482),G=y(9672),X=y(5403),ue=y(576);function q(Me,ce,me=1/0){return(0,ue.m)(ce)?q((te,Ge)=>(0,s.U)((Ve,xe)=>ce(te,Ve,Ge,xe))((0,v.Xf)(Me(te,Ge))),me):("number"==typeof ce&&(me=ce),(0,M.e)((te,Ge)=>function K(Me,ce,me,te,Ge,Ve,xe,Ke){const Ne=[];let qe=0,ht=0,mt=!1;const de=()=>{mt&&!Ne.length&&!qe&&ce.complete()},Q=ae=>qe<te?ee(ae):Ne.push(ae),ee=ae=>{Ve&&ce.next(ae),qe++;let Ee=!1;(0,v.Xf)(me(ae,ht++)).subscribe((0,X.x)(ce,Be=>{Ge?.(Be),Ve?Q(Be):ce.next(Be)},()=>{Ee=!0},void 0,()=>{if(Ee)try{for(qe--;Ne.length&&qe<te;){const Be=Ne.shift();xe?(0,G.f)(ce,xe,()=>ee(Be)):ee(Be)}de()}catch(Be){ce.error(Be)}}))};return Me.subscribe((0,X.x)(ce,Q,()=>{mt=!0,de()})),()=>{Ke?.()}}(te,Ge,Me,me)))}},3099:(St,He,y)=>{y.d(He,{B:()=>K});var s=y(2076),v=y(5698),M=y(7579),G=y(930),X=y(4482);function K(q={}){const{connector:Me=(()=>new M.x),resetOnError:ce=!0,resetOnComplete:me=!0,resetOnRefCountZero:te=!0}=q;return Ge=>{let Ve=null,xe=null,Ke=null,Ne=0,qe=!1,ht=!1;const mt=()=>{xe?.unsubscribe(),xe=null},de=()=>{mt(),Ve=Ke=null,qe=ht=!1},Q=()=>{const ee=Ve;de(),ee?.unsubscribe()};return(0,X.e)((ee,ae)=>{Ne++,!ht&&!qe&&mt();const Ee=Ke=Ke??Me();ae.add(()=>{Ne--,0===Ne&&!ht&&!qe&&(xe=ue(Q,te))}),Ee.subscribe(ae),Ve||(Ve=new G.Hp({next:Be=>Ee.next(Be),error:Be=>{ht=!0,mt(),xe=ue(de,ce,Be),Ee.error(Be)},complete:()=>{qe=!0,mt(),xe=ue(de,me),Ee.complete()}}),(0,s.D)(ee).subscribe(Ve))})(Ge)}}function ue(q,Me,...ce){return!0===Me?(q(),null):!1===Me?null:Me(...ce).pipe((0,v.q)(1)).subscribe(()=>q())}},5684:(St,He,y)=>{y.d(He,{T:()=>v});var s=y(9300);function v(M){return(0,s.h)((G,X)=>M<=X)}},8675:(St,He,y)=>{y.d(He,{O:()=>G});var s=y(7272),v=y(3269),M=y(4482);function G(...X){const K=(0,v.yG)(X);return(0,M.e)((ue,q)=>{(K?(0,s.z)(X,ue,K):(0,s.z)(X,ue)).subscribe(q)})}},5698:(St,He,y)=>{y.d(He,{q:()=>G});var s=y(515),v=y(4482),M=y(5403);function G(X){return X<=0?()=>s.E:(0,v.e)((K,ue)=>{let q=0;K.subscribe((0,M.x)(ue,Me=>{++q<=X&&(ue.next(Me),X<=q&&ue.complete())}))})}},2722:(St,He,y)=>{y.d(He,{R:()=>X});var s=y(4482),v=y(5403),M=y(8421),G=y(5032);function X(K){return(0,s.e)((ue,q)=>{(0,M.Xf)(K).subscribe((0,v.x)(q,()=>q.complete(),G.Z)),!q.closed&&ue.subscribe(q)})}},8505:(St,He,y)=>{y.d(He,{b:()=>X});var s=y(576),v=y(4482),M=y(5403),G=y(4671);function X(K,ue,q){const Me=(0,s.m)(K)||ue||q?{next:K,error:ue,complete:q}:K;return Me?(0,v.e)((ce,me)=>{var te;null===(te=Me.subscribe)||void 0===te||te.call(Me);let Ge=!0;ce.subscribe((0,M.x)(me,Ve=>{var xe;null===(xe=Me.next)||void 0===xe||xe.call(Me,Ve),me.next(Ve)},()=>{var Ve;Ge=!1,null===(Ve=Me.complete)||void 0===Ve||Ve.call(Me),me.complete()},Ve=>{var xe;Ge=!1,null===(xe=Me.error)||void 0===xe||xe.call(Me,Ve),me.error(Ve)},()=>{var Ve,xe;Ge&&(null===(Ve=Me.unsubscribe)||void 0===Ve||Ve.call(Me)),null===(xe=Me.finalize)||void 0===xe||xe.call(Me)}))}):G.y}},4408:(St,He,y)=>{y.d(He,{o:()=>X});var s=y(727);class v extends s.w0{constructor(ue,q){super()}schedule(ue,q=0){return this}}const M={setInterval(K,ue,...q){const{delegate:Me}=M;return Me?.setInterval?Me.setInterval(K,ue,...q):setInterval(K,ue,...q)},clearInterval(K){const{delegate:ue}=M;return(ue?.clearInterval||clearInterval)(K)},delegate:void 0};var G=y(8737);class X extends v{constructor(ue,q){super(ue,q),this.scheduler=ue,this.work=q,this.pending=!1}schedule(ue,q=0){if(this.closed)return this;this.state=ue;const Me=this.id,ce=this.scheduler;return null!=Me&&(this.id=this.recycleAsyncId(ce,Me,q)),this.pending=!0,this.delay=q,this.id=this.id||this.requestAsyncId(ce,this.id,q),this}requestAsyncId(ue,q,Me=0){return M.setInterval(ue.flush.bind(ue,this),Me)}recycleAsyncId(ue,q,Me=0){if(null!=Me&&this.delay===Me&&!1===this.pending)return q;M.clearInterval(q)}execute(ue,q){if(this.closed)return new Error("executing a cancelled action");this.pending=!1;const Me=this._execute(ue,q);if(Me)return Me;!1===this.pending&&null!=this.id&&(this.id=this.recycleAsyncId(this.scheduler,this.id,null))}_execute(ue,q){let ce,Me=!1;try{this.work(ue)}catch(me){Me=!0,ce=me||new Error("Scheduled action threw falsy error")}if(Me)return this.unsubscribe(),ce}unsubscribe(){if(!this.closed){const{id:ue,scheduler:q}=this,{actions:Me}=q;this.work=this.state=this.scheduler=null,this.pending=!1,(0,G.P)(Me,this),null!=ue&&(this.id=this.recycleAsyncId(q,ue,null)),this.delay=null,super.unsubscribe()}}}},640:(St,He,y)=>{y.d(He,{v:()=>M});const s={now:()=>(s.delegate||Date).now(),delegate:void 0};class v{constructor(X,K=v.now){this.schedulerActionCtor=X,this.now=K}schedule(X,K=0,ue){return new this.schedulerActionCtor(this,X).schedule(ue,K)}}v.now=s.now;class M extends v{constructor(X,K=v.now){super(X,K),this.actions=[],this._active=!1,this._scheduled=void 0}flush(X){const{actions:K}=this;if(this._active)return void K.push(X);let ue;this._active=!0;do{if(ue=X.execute(X.state,X.delay))break}while(X=K.shift());if(this._active=!1,ue){for(;X=K.shift();)X.unsubscribe();throw ue}}}},4986:(St,He,y)=>{y.d(He,{P:()=>G,z:()=>M});var s=y(4408);const M=new(y(640).v)(s.o),G=M},3410:(St,He,y)=>{y.d(He,{z:()=>s});const s={setTimeout(v,M,...G){const{delegate:X}=s;return X?.setTimeout?X.setTimeout(v,M,...G):setTimeout(v,M,...G)},clearTimeout(v){const{delegate:M}=s;return(M?.clearTimeout||clearTimeout)(v)},delegate:void 0}},2202:(St,He,y)=>{y.d(He,{h:()=>v});const v=function s(){return"function"==typeof Symbol&&Symbol.iterator?Symbol.iterator:"@@iterator"}()},8822:(St,He,y)=>{y.d(He,{L:()=>s});const s="function"==typeof Symbol&&Symbol.observable||"@@observable"},3269:(St,He,y)=>{y.d(He,{_6:()=>K,jO:()=>G,yG:()=>X});var s=y(576),v=y(3532);function M(ue){return ue[ue.length-1]}function G(ue){return(0,s.m)(M(ue))?ue.pop():void 0}function X(ue){return(0,v.K)(M(ue))?ue.pop():void 0}function K(ue,q){return"number"==typeof M(ue)?ue.pop():q}},4742:(St,He,y)=>{y.d(He,{D:()=>X});const{isArray:s}=Array,{getPrototypeOf:v,prototype:M,keys:G}=Object;function X(ue){if(1===ue.length){const q=ue[0];if(s(q))return{args:q,keys:null};if(function K(ue){return ue&&"object"==typeof ue&&v(ue)===M}(q)){const Me=G(q);return{args:Me.map(ce=>q[ce]),keys:Me}}}return{args:ue,keys:null}}},8737:(St,He,y)=>{function s(v,M){if(v){const G=v.indexOf(M);0<=G&&v.splice(G,1)}}y.d(He,{P:()=>s})},3888:(St,He,y)=>{function s(v){const G=v(X=>{Error.call(X),X.stack=(new Error).stack});return G.prototype=Object.create(Error.prototype),G.prototype.constructor=G,G}y.d(He,{d:()=>s})},1810:(St,He,y)=>{function s(v,M){return v.reduce((G,X,K)=>(G[X]=M[K],G),{})}y.d(He,{n:()=>s})},2806:(St,He,y)=>{y.d(He,{O:()=>G,x:()=>M});var s=y(2416);let v=null;function M(X){if(s.v.useDeprecatedSynchronousErrorHandling){const K=!v;if(K&&(v={errorThrown:!1,error:null}),X(),K){const{errorThrown:ue,error:q}=v;if(v=null,ue)throw q}}else X()}function G(X){s.v.useDeprecatedSynchronousErrorHandling&&v&&(v.errorThrown=!0,v.error=X)}},9672:(St,He,y)=>{function s(v,M,G,X=0,K=!1){const ue=M.schedule(function(){G(),K?v.add(this.schedule(null,X)):this.unsubscribe()},X);if(v.add(ue),!K)return ue}y.d(He,{f:()=>s})},4671:(St,He,y)=>{function s(v){return v}y.d(He,{y:()=>s})},1144:(St,He,y)=>{y.d(He,{z:()=>s});const s=v=>v&&"number"==typeof v.length&&"function"!=typeof v},2206:(St,He,y)=>{y.d(He,{D:()=>v});var s=y(576);function v(M){return Symbol.asyncIterator&&(0,s.m)(M?.[Symbol.asyncIterator])}},576:(St,He,y)=>{function s(v){return"function"==typeof v}y.d(He,{m:()=>s})},3670:(St,He,y)=>{y.d(He,{c:()=>M});var s=y(8822),v=y(576);function M(G){return(0,v.m)(G[s.L])}},6495:(St,He,y)=>{y.d(He,{T:()=>M});var s=y(2202),v=y(576);function M(G){return(0,v.m)(G?.[s.h])}},8239:(St,He,y)=>{y.d(He,{t:()=>v});var s=y(576);function v(M){return(0,s.m)(M?.then)}},3260:(St,He,y)=>{y.d(He,{L:()=>G,Q:()=>M});var s=y(655),v=y(576);function M(X){return(0,s.FC)(this,arguments,function*(){const ue=X.getReader();try{for(;;){const{value:q,done:Me}=yield(0,s.qq)(ue.read());if(Me)return yield(0,s.qq)(void 0);yield yield(0,s.qq)(q)}}finally{ue.releaseLock()}})}function G(X){return(0,v.m)(X?.getReader)}},3532:(St,He,y)=>{y.d(He,{K:()=>v});var s=y(576);function v(M){return M&&(0,s.m)(M.schedule)}},4482:(St,He,y)=>{y.d(He,{A:()=>v,e:()=>M});var s=y(576);function v(G){return(0,s.m)(G?.lift)}function M(G){return X=>{if(v(X))return X.lift(function(K){try{return G(K,this)}catch(ue){this.error(ue)}});throw new TypeError("Unable to lift unknown Observable type")}}},3268:(St,He,y)=>{y.d(He,{Z:()=>G});var s=y(4004);const{isArray:v}=Array;function G(X){return(0,s.U)(K=>function M(X,K){return v(K)?X(...K):X(K)}(X,K))}},5032:(St,He,y)=>{function s(){}y.d(He,{Z:()=>s})},7849:(St,He,y)=>{y.d(He,{h:()=>M});var s=y(2416),v=y(3410);function M(G){v.z.setTimeout(()=>{const{onUnhandledError:X}=s.v;if(!X)throw G;X(G)})}},4532:(St,He,y)=>{function s(v){return new TypeError(`You provided ${null!==v&&"object"==typeof v?"an invalid object":`'${v}'`} where a stream was expected. You can provide an Observable, Promise, ReadableStream, Array, AsyncIterable, or Iterable.`)}y.d(He,{z:()=>s})},655:(St,He,y)=>{function q(Se,fe,Fe,le){return new(Fe||(Fe=Promise))(function(Ye,xt){function Ht(vt){try{ft(le.next(vt))}catch(Pt){xt(Pt)}}function jt(vt){try{ft(le.throw(vt))}catch(Pt){xt(Pt)}}function ft(vt){vt.done?Ye(vt.value):function Le(Ye){return Ye instanceof Fe?Ye:new Fe(function(xt){xt(Ye)})}(vt.value).then(Ht,jt)}ft((le=le.apply(Se,fe||[])).next())})}function Ne(Se){return this instanceof Ne?(this.v=Se,this):new Ne(Se)}function qe(Se,fe,Fe){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var Le,le=Fe.apply(Se,fe||[]),Ye=[];return Le={},xt("next"),xt("throw"),xt("return"),Le[Symbol.asyncIterator]=function(){return this},Le;function xt(ze){le[ze]&&(Le[ze]=function(Ce){return new Promise(function(st,at){Ye.push([ze,Ce,st,at])>1||Ht(ze,Ce)})})}function Ht(ze,Ce){try{!function jt(ze){ze.value instanceof Ne?Promise.resolve(ze.value.v).then(ft,vt):Pt(Ye[0][2],ze)}(le[ze](Ce))}catch(st){Pt(Ye[0][3],st)}}function ft(ze){Ht("next",ze)}function vt(ze){Ht("throw",ze)}function Pt(ze,Ce){ze(Ce),Ye.shift(),Ye.length&&Ht(Ye[0][0],Ye[0][1])}}function mt(Se){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var Fe,fe=Se[Symbol.asyncIterator];return fe?fe.call(Se):(Se=function te(Se){var fe="function"==typeof Symbol&&Symbol.iterator,Fe=fe&&Se[fe],le=0;if(Fe)return Fe.call(Se);if(Se&&"number"==typeof Se.length)return{next:function(){return Se&&le>=Se.length&&(Se=void 0),{value:Se&&Se[le++],done:!Se}}};throw new TypeError(fe?"Object is not iterable.":"Symbol.iterator is not defined.")}(Se),Fe={},le("next"),le("throw"),le("return"),Fe[Symbol.asyncIterator]=function(){return this},Fe);function le(Ye){Fe[Ye]=Se[Ye]&&function(xt){return new Promise(function(Ht,jt){!function Le(Ye,xt,Ht,jt){Promise.resolve(jt).then(function(ft){Ye({value:ft,done:Ht})},xt)}(Ht,jt,(xt=Se[Ye](xt)).done,xt.value)})}}}y.d(He,{FC:()=>qe,KL:()=>mt,mG:()=>q,qq:()=>Ne})},7340:(St,He,y)=>{y.d(He,{F4:()=>ce,IO:()=>xe,LC:()=>v,SB:()=>Me,X$:()=>G,ZE:()=>ht,ZN:()=>qe,_j:()=>s,eR:()=>me,jt:()=>X,k1:()=>mt,l3:()=>M,oB:()=>q,pV:()=>Ge,ru:()=>K,vP:()=>ue});
/**
     * @license Angular v14.0.1
     * (c) 2010-2022 Google LLC. https://angular.io/
     * License: MIT
     */
class s{}class v{}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */const M="*";function G(de,Q){return{type:7,name:de,definitions:Q,options:{}}}function X(de,Q=null){return{type:4,styles:Q,timings:de}}function K(de,Q=null){return{type:3,steps:de,options:Q}}function ue(de,Q=null){return{type:2,steps:de,options:Q}}function q(de){return{type:6,styles:de,offset:null}}function Me(de,Q,ee){return{type:0,name:de,styles:Q,options:ee}}function ce(de){return{type:5,steps:de}}function me(de,Q,ee=null){return{type:1,expr:de,animation:Q,options:ee}}function Ge(de=null){return{type:9,options:de}}function xe(de,Q,ee=null){return{type:11,selector:de,animation:Q,options:ee}}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
function Ne(de){Promise.resolve(null).then(de)}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */class qe{constructor(Q=0,ee=0){this._onDoneFns=[],this._onStartFns=[],this._onDestroyFns=[],this._started=!1,this._destroyed=!1,this._finished=!1,this._position=0,this.parentPlayer=null,this.totalTime=Q+ee}_onFinish(){this._finished||(this._finished=!0,this._onDoneFns.forEach(Q=>Q()),this._onDoneFns=[])}onStart(Q){this._onStartFns.push(Q)}onDone(Q){this._onDoneFns.push(Q)}onDestroy(Q){this._onDestroyFns.push(Q)}hasStarted(){return this._started}init(){}play(){this.hasStarted()||(this._onStart(),this.triggerMicrotask()),this._started=!0}triggerMicrotask(){Ne(()=>this._onFinish())}_onStart(){this._onStartFns.forEach(Q=>Q()),this._onStartFns=[]}pause(){}restart(){}finish(){this._onFinish()}destroy(){this._destroyed||(this._destroyed=!0,this.hasStarted()||this._onStart(),this.finish(),this._onDestroyFns.forEach(Q=>Q()),this._onDestroyFns=[])}reset(){this._started=!1}setPosition(Q){this._position=this.totalTime?Q*this.totalTime:1}getPosition(){return this.totalTime?this._position/this.totalTime:1}triggerCallback(Q){const ee="start"==Q?this._onStartFns:this._onDoneFns;ee.forEach(ae=>ae()),ee.length=0}}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */class ht{constructor(Q){this._onDoneFns=[],this._onStartFns=[],this._finished=!1,this._started=!1,this._destroyed=!1,this._onDestroyFns=[],this.parentPlayer=null,this.totalTime=0,this.players=Q;let ee=0,ae=0,Ee=0;const Be=this.players.length;0==Be?Ne(()=>this._onFinish()):this.players.forEach(ot=>{ot.onDone(()=>{++ee==Be&&this._onFinish()}),ot.onDestroy(()=>{++ae==Be&&this._onDestroy()}),ot.onStart(()=>{++Ee==Be&&this._onStart()})}),this.totalTime=this.players.reduce((ot,Se)=>Math.max(ot,Se.totalTime),0)}_onFinish(){this._finished||(this._finished=!0,this._onDoneFns.forEach(Q=>Q()),this._onDoneFns=[])}init(){this.players.forEach(Q=>Q.init())}onStart(Q){this._onStartFns.push(Q)}_onStart(){this.hasStarted()||(this._started=!0,this._onStartFns.forEach(Q=>Q()),this._onStartFns=[])}onDone(Q){this._onDoneFns.push(Q)}onDestroy(Q){this._onDestroyFns.push(Q)}hasStarted(){return this._started}play(){this.parentPlayer||this.init(),this._onStart(),this.players.forEach(Q=>Q.play())}pause(){this.players.forEach(Q=>Q.pause())}restart(){this.players.forEach(Q=>Q.restart())}finish(){this._onFinish(),this.players.forEach(Q=>Q.finish())}destroy(){this._onDestroy()}_onDestroy(){this._destroyed||(this._destroyed=!0,this._onFinish(),this.players.forEach(Q=>Q.destroy()),this._onDestroyFns.forEach(Q=>Q()),this._onDestroyFns=[])}reset(){this.players.forEach(Q=>Q.reset()),this._destroyed=!1,this._finished=!1,this._started=!1}setPosition(Q){const ee=Q*this.totalTime;this.players.forEach(ae=>{const Ee=ae.totalTime?Math.min(1,ee/ae.totalTime):1;ae.setPosition(Ee)})}getPosition(){const Q=this.players.reduce((ee,ae)=>null===ee||ae.totalTime>ee.totalTime?ae:ee,null);return null!=Q?Q.getPosition():0}beforeDestroy(){this.players.forEach(Q=>{Q.beforeDestroy&&Q.beforeDestroy()})}triggerCallback(Q){const ee="start"==Q?this._onStartFns:this._onDoneFns;ee.forEach(ae=>ae()),ee.length=0}}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */const mt="!";
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */},7725:(St,He,y)=>{y.d(He,{rt:()=>Ue,$s:()=>Be,tE:()=>yt,qV:()=>je,qm:()=>ge,ic:()=>Ye,Kd:()=>se,X6:()=>Je,yG:()=>B});var s=y(6895),v=y(4650),M=y(3353),G=y(1135),X=y(7579),K=y(9646),ue=y(9521),q=y(4671),Me=y(4482),ce=y(5403);function te(Te,_e){return Te===_e}var Ge=y(5698),Ve=y(5684),xe=y(2722),Ke=y(1281),Ne=y(9643);
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */function de(Te,_e){return(Te.getAttribute(_e)||"").match(/\S+/g)||[]}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */const ee="cdk-describedby-message",ae="cdk-describedby-host";let Ee=0,Be=(()=>{class Te{constructor(Y,Re){this._platform=Re,this._messageRegistry=new Map,this._messagesContainer=null,this._id=""+Ee++,this._document=Y,this._id=(0,v.f3M)(v.AFp)+"-"+Ee++}describe(Y,Re,$e){if(!this._canBeDescribed(Y,Re))return;const Et=ot(Re,$e);"string"!=typeof Re?(Se(Re,this._id),this._messageRegistry.set(Et,{messageElement:Re,referenceCount:0})):this._messageRegistry.has(Et)||this._createMessageElement(Re,$e),this._isElementDescribedByMessage(Y,Et)||this._addMessageReference(Y,Et)}removeDescription(Y,Re,$e){if(!Re||!this._isElementNode(Y))return;const Et=ot(Re,$e);if(this._isElementDescribedByMessage(Y,Et)&&this._removeMessageReference(Y,Et),"string"==typeof Re){const Lt=this._messageRegistry.get(Et);Lt&&0===Lt.referenceCount&&this._deleteMessageElement(Et)}0===this._messagesContainer?.childNodes.length&&(this._messagesContainer.remove(),this._messagesContainer=null)}ngOnDestroy(){const Y=this._document.querySelectorAll(`[${ae}="${this._id}"]`);for(let Re=0;Re<Y.length;Re++)this._removeCdkDescribedByReferenceIds(Y[Re]),Y[Re].removeAttribute(ae);this._messagesContainer?.remove(),this._messagesContainer=null,this._messageRegistry.clear()}_createMessageElement(Y,Re){const $e=this._document.createElement("div");Se($e,this._id),$e.textContent=Y,Re&&$e.setAttribute("role",Re),this._createMessagesContainer(),this._messagesContainer.appendChild($e),this._messageRegistry.set(ot(Y,Re),{messageElement:$e,referenceCount:0})}_deleteMessageElement(Y){this._messageRegistry.get(Y)?.messageElement?.remove(),this._messageRegistry.delete(Y)}_createMessagesContainer(){if(this._messagesContainer)return;const Y="cdk-describedby-message-container",Re=this._document.querySelectorAll(`.${Y}[platform="server"]`);for(let Et=0;Et<Re.length;Et++)Re[Et].remove();const $e=this._document.createElement("div");$e.style.visibility="hidden",$e.classList.add(Y),$e.classList.add("cdk-visually-hidden"),this._platform&&!this._platform.isBrowser&&$e.setAttribute("platform","server"),this._document.body.appendChild($e),this._messagesContainer=$e}_removeCdkDescribedByReferenceIds(Y){const Re=de(Y,"aria-describedby").filter($e=>0!=$e.indexOf(ee));Y.setAttribute("aria-describedby",Re.join(" "))}_addMessageReference(Y,Re){const $e=this._messageRegistry.get(Re);(function ht(Te,_e,Y){const Re=de(Te,_e);Re.some($e=>$e.trim()==Y.trim())||(Re.push(Y.trim()),Te.setAttribute(_e,Re.join(" ")))})(Y,"aria-describedby",$e.messageElement.id),Y.setAttribute(ae,this._id),$e.referenceCount++}_removeMessageReference(Y,Re){const $e=this._messageRegistry.get(Re);$e.referenceCount--,function mt(Te,_e,Y){const $e=de(Te,_e).filter(Et=>Et!=Y.trim());$e.length?Te.setAttribute(_e,$e.join(" ")):Te.removeAttribute(_e)}(Y,"aria-describedby",$e.messageElement.id),Y.removeAttribute(ae)}_isElementDescribedByMessage(Y,Re){const $e=de(Y,"aria-describedby"),Et=this._messageRegistry.get(Re),Lt=Et&&Et.messageElement.id;return!!Lt&&-1!=$e.indexOf(Lt)}_canBeDescribed(Y,Re){if(!this._isElementNode(Y))return!1;if(Re&&"object"==typeof Re)return!0;const $e=null==Re?"":`${Re}`.trim(),Et=Y.getAttribute("aria-label");return!(!$e||Et&&Et.trim()===$e)}_isElementNode(Y){return Y.nodeType===this._document.ELEMENT_NODE}}return Te.\u0275fac=function(Y){return new(Y||Te)(v.LFG(s.K0),v.LFG(M.t4))},Te.\u0275prov=v.Yz7({token:Te,factory:Te.\u0275fac,providedIn:"root"}),Te})();function ot(Te,_e){return"string"==typeof Te?`${_e||""}/${Te}`:Te}function Se(Te,_e){Te.id||(Te.id=`${ee}-${_e}-${Ee++}`)}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */let Ye=(()=>{class Te{constructor(Y){this._platform=Y}isDisabled(Y){return Y.hasAttribute("disabled")}isVisible(Y){return function Ht(Te){return!!(Te.offsetWidth||Te.offsetHeight||"function"==typeof Te.getClientRects&&Te.getClientRects().length)}(Y)&&"visible"===getComputedStyle(Y).visibility}isTabbable(Y){if(!this._platform.isBrowser)return!1;const Re=function xt(Te){try{return Te.frameElement}catch{return null}}(function nt(Te){return Te.ownerDocument&&Te.ownerDocument.defaultView||window}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */(Y));if(Re&&(-1===st(Re)||!this.isVisible(Re)))return!1;let $e=Y.nodeName.toLowerCase(),Et=st(Y);return Y.hasAttribute("contenteditable")?-1!==Et:!("iframe"===$e||"object"===$e||this._platform.WEBKIT&&this._platform.IOS&&!function at(Te){let _e=Te.nodeName.toLowerCase(),Y="input"===_e&&Te.type;return"text"===Y||"password"===Y||"select"===_e||"textarea"===_e}(Y))&&("audio"===$e?!!Y.hasAttribute("controls")&&-1!==Et:"video"===$e?-1!==Et&&(null!==Et||this._platform.FIREFOX||Y.hasAttribute("controls")):Y.tabIndex>=0)}isFocusable(Y,Re){return function bt(Te){return!function ft(Te){return function Pt(Te){return"input"==Te.nodeName.toLowerCase()}(Te)&&"hidden"==Te.type}(Te)&&(function jt(Te){let _e=Te.nodeName.toLowerCase();return"input"===_e||"select"===_e||"button"===_e||"textarea"===_e}(Te)||function vt(Te){return function ze(Te){return"a"==Te.nodeName.toLowerCase()}(Te)&&Te.hasAttribute("href")}(Te)||Te.hasAttribute("contenteditable")||Ce(Te))}(Y)&&!this.isDisabled(Y)&&(Re?.ignoreVisibility||this.isVisible(Y))}}return Te.\u0275fac=function(Y){return new(Y||Te)(v.LFG(M.t4))},Te.\u0275prov=v.Yz7({token:Te,factory:Te.\u0275fac,providedIn:"root"}),Te})();function Ce(Te){if(!Te.hasAttribute("tabindex")||void 0===Te.tabIndex)return!1;let _e=Te.getAttribute("tabindex");return!(!_e||isNaN(parseInt(_e,10)))}function st(Te){if(!Ce(Te))return null;const _e=parseInt(Te.getAttribute("tabindex")||"",10);return isNaN(_e)?-1:_e}class rt{constructor(_e,Y,Re,$e,Et=!1){this._element=_e,this._checker=Y,this._ngZone=Re,this._document=$e,this._hasAttached=!1,this.startAnchorListener=()=>this.focusLastTabbableElement(),this.endAnchorListener=()=>this.focusFirstTabbableElement(),this._enabled=!0,Et||this.attachAnchors()}get enabled(){return this._enabled}set enabled(_e){this._enabled=_e,this._startAnchor&&this._endAnchor&&(this._toggleAnchorTabIndex(_e,this._startAnchor),this._toggleAnchorTabIndex(_e,this._endAnchor))}destroy(){const _e=this._startAnchor,Y=this._endAnchor;_e&&(_e.removeEventListener("focus",this.startAnchorListener),_e.remove()),Y&&(Y.removeEventListener("focus",this.endAnchorListener),Y.remove()),this._startAnchor=this._endAnchor=null,this._hasAttached=!1}attachAnchors(){return!!this._hasAttached||(this._ngZone.runOutsideAngular(()=>{this._startAnchor||(this._startAnchor=this._createAnchor(),this._startAnchor.addEventListener("focus",this.startAnchorListener)),this._endAnchor||(this._endAnchor=this._createAnchor(),this._endAnchor.addEventListener("focus",this.endAnchorListener))}),this._element.parentNode&&(this._element.parentNode.insertBefore(this._startAnchor,this._element),this._element.parentNode.insertBefore(this._endAnchor,this._element.nextSibling),this._hasAttached=!0),this._hasAttached)}focusInitialElementWhenReady(_e){return new Promise(Y=>{this._executeOnStable(()=>Y(this.focusInitialElement(_e)))})}focusFirstTabbableElementWhenReady(_e){return new Promise(Y=>{this._executeOnStable(()=>Y(this.focusFirstTabbableElement(_e)))})}focusLastTabbableElementWhenReady(_e){return new Promise(Y=>{this._executeOnStable(()=>Y(this.focusLastTabbableElement(_e)))})}_getRegionBoundary(_e){const Y=this._element.querySelectorAll(`[cdk-focus-region-${_e}], [cdkFocusRegion${_e}], [cdk-focus-${_e}]`);return"start"==_e?Y.length?Y[0]:this._getFirstTabbableElement(this._element):Y.length?Y[Y.length-1]:this._getLastTabbableElement(this._element)}focusInitialElement(_e){const Y=this._element.querySelector("[cdk-focus-initial], [cdkFocusInitial]");if(Y){if(!this._checker.isFocusable(Y)){const Re=this._getFirstTabbableElement(Y);return Re?.focus(_e),!!Re}return Y.focus(_e),!0}return this.focusFirstTabbableElement(_e)}focusFirstTabbableElement(_e){const Y=this._getRegionBoundary("start");return Y&&Y.focus(_e),!!Y}focusLastTabbableElement(_e){const Y=this._getRegionBoundary("end");return Y&&Y.focus(_e),!!Y}hasAttached(){return this._hasAttached}_getFirstTabbableElement(_e){if(this._checker.isFocusable(_e)&&this._checker.isTabbable(_e))return _e;const Y=_e.children;for(let Re=0;Re<Y.length;Re++){const $e=Y[Re].nodeType===this._document.ELEMENT_NODE?this._getFirstTabbableElement(Y[Re]):null;if($e)return $e}return null}_getLastTabbableElement(_e){if(this._checker.isFocusable(_e)&&this._checker.isTabbable(_e))return _e;const Y=_e.children;for(let Re=Y.length-1;Re>=0;Re--){const $e=Y[Re].nodeType===this._document.ELEMENT_NODE?this._getLastTabbableElement(Y[Re]):null;if($e)return $e}return null}_createAnchor(){const _e=this._document.createElement("div");return this._toggleAnchorTabIndex(this._enabled,_e),_e.classList.add("cdk-visually-hidden"),_e.classList.add("cdk-focus-trap-anchor"),_e.setAttribute("aria-hidden","true"),_e}_toggleAnchorTabIndex(_e,Y){_e?Y.setAttribute("tabindex","0"):Y.removeAttribute("tabindex")}toggleAnchors(_e){this._startAnchor&&this._endAnchor&&(this._toggleAnchorTabIndex(_e,this._startAnchor),this._toggleAnchorTabIndex(_e,this._endAnchor))}_executeOnStable(_e){this._ngZone.isStable?_e():this._ngZone.onStable.pipe((0,Ge.q)(1)).subscribe(_e)}}let je=(()=>{class Te{constructor(Y,Re,$e){this._checker=Y,this._ngZone=Re,this._document=$e}create(Y,Re=!1){return new rt(Y,this._checker,this._ngZone,this._document,Re)}}return Te.\u0275fac=function(Y){return new(Y||Te)(v.LFG(Ye),v.LFG(v.R0b),v.LFG(s.K0))},Te.\u0275prov=v.Yz7({token:Te,factory:Te.\u0275fac,providedIn:"root"}),Te})();
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
function Je(Te){return 0===Te.buttons||0===Te.offsetX&&0===Te.offsetY}function B(Te){const _e=Te.touches&&Te.touches[0]||Te.changedTouches&&Te.changedTouches[0];return!(!_e||-1!==_e.identifier||null!=_e.radiusX&&1!==_e.radiusX||null!=_e.radiusY&&1!==_e.radiusY)}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */const F=new v.OlP("cdk-input-modality-detector-options"),j={ignoreKeys:[ue.zL,ue.jx,ue.b2,ue.MW,ue.JU]},T=(0,M.i$)({passive:!0,capture:!0});let P=(()=>{class Te{constructor(Y,Re,$e,Et){this._platform=Y,this._mostRecentTarget=null,this._modality=new G.X(null),this._lastTouchMs=0,this._onKeydown=Lt=>{this._options?.ignoreKeys?.some(bn=>bn===Lt.keyCode)||(this._modality.next("keyboard"),this._mostRecentTarget=(0,M.sA)(Lt))},this._onMousedown=Lt=>{Date.now()-this._lastTouchMs<650||(this._modality.next(Je(Lt)?"keyboard":"mouse"),this._mostRecentTarget=(0,M.sA)(Lt))},this._onTouchstart=Lt=>{B(Lt)?this._modality.next("keyboard"):(this._lastTouchMs=Date.now(),this._modality.next("touch"),this._mostRecentTarget=(0,M.sA)(Lt))},this._options={...j,...Et},this.modalityDetected=this._modality.pipe((0,Ve.T)(1)),this.modalityChanged=this.modalityDetected.pipe(function me(Te,_e=q.y){return Te=Te??te,(0,Me.e)((Y,Re)=>{let $e,Et=!0;Y.subscribe((0,ce.x)(Re,Lt=>{const bn=_e(Lt);(Et||!Te($e,bn))&&(Et=!1,$e=bn,Re.next(Lt))}))})}()),Y.isBrowser&&Re.runOutsideAngular(()=>{$e.addEventListener("keydown",this._onKeydown,T),$e.addEventListener("mousedown",this._onMousedown,T),$e.addEventListener("touchstart",this._onTouchstart,T)})}get mostRecentModality(){return this._modality.value}ngOnDestroy(){this._modality.complete(),this._platform.isBrowser&&(document.removeEventListener("keydown",this._onKeydown,T),document.removeEventListener("mousedown",this._onMousedown,T),document.removeEventListener("touchstart",this._onTouchstart,T))}}return Te.\u0275fac=function(Y){return new(Y||Te)(v.LFG(M.t4),v.LFG(v.R0b),v.LFG(s.K0),v.LFG(F,8))},Te.\u0275prov=v.Yz7({token:Te,factory:Te.\u0275fac,providedIn:"root"}),Te})();
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */const x=new v.OlP("liveAnnouncerElement",{providedIn:"root",factory:function $(){return null}}),ve=new v.OlP("LIVE_ANNOUNCER_DEFAULT_OPTIONS");
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
let se=(()=>{class Te{constructor(Y,Re,$e,Et){this._ngZone=Re,this._defaultOptions=Et,this._document=$e,this._liveElement=Y||this._createLiveElement()}announce(Y,...Re){const $e=this._defaultOptions;let Et,Lt;return 1===Re.length&&"number"==typeof Re[0]?Lt=Re[0]:[Et,Lt]=Re,this.clear(),clearTimeout(this._previousTimeout),Et||(Et=$e&&$e.politeness?$e.politeness:"polite"),null==Lt&&$e&&(Lt=$e.duration),this._liveElement.setAttribute("aria-live",Et),this._ngZone.runOutsideAngular(()=>(this._currentPromise||(this._currentPromise=new Promise(bn=>this._currentResolve=bn)),clearTimeout(this._previousTimeout),this._previousTimeout=setTimeout(()=>{this._liveElement.textContent=Y,"number"==typeof Lt&&(this._previousTimeout=setTimeout(()=>this.clear(),Lt)),this._currentResolve(),this._currentPromise=this._currentResolve=void 0},100),this._currentPromise))}clear(){this._liveElement&&(this._liveElement.textContent="")}ngOnDestroy(){clearTimeout(this._previousTimeout),this._liveElement?.remove(),this._liveElement=null,this._currentResolve?.(),this._currentPromise=this._currentResolve=void 0}_createLiveElement(){const Y="cdk-live-announcer-element",Re=this._document.getElementsByClassName(Y),$e=this._document.createElement("div");for(let Et=0;Et<Re.length;Et++)Re[Et].remove();return $e.classList.add(Y),$e.classList.add("cdk-visually-hidden"),$e.setAttribute("aria-atomic","true"),$e.setAttribute("aria-live","polite"),this._document.body.appendChild($e),$e}}return Te.\u0275fac=function(Y){return new(Y||Te)(v.LFG(x,8),v.LFG(v.R0b),v.LFG(s.K0),v.LFG(ve,8))},Te.\u0275prov=v.Yz7({token:Te,factory:Te.\u0275fac,providedIn:"root"}),Te})();
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */const Rt=new v.OlP("cdk-focus-monitor-default-options"),Ut=(0,M.i$)({passive:!0,capture:!0});let yt=(()=>{class Te{constructor(Y,Re,$e,Et,Lt){this._ngZone=Y,this._platform=Re,this._inputModalityDetector=$e,this._origin=null,this._windowFocused=!1,this._originFromTouchInteraction=!1,this._elementInfo=new Map,this._monitoredElementCount=0,this._rootNodeFocusListenerCount=new Map,this._windowFocusListener=()=>{this._windowFocused=!0,this._windowFocusTimeoutId=window.setTimeout(()=>this._windowFocused=!1)},this._stopInputModalityDetector=new X.x,this._rootNodeFocusAndBlurListener=bn=>{const Zn=(0,M.sA)(bn),$n="focus"===bn.type?this._onFocus:this._onBlur;for(let wn=Zn;wn;wn=wn.parentElement)$n.call(this,bn,wn)},this._document=Et,this._detectionMode=Lt?.detectionMode||0}monitor(Y,Re=!1){const $e=(0,Ke.fI)(Y);if(!this._platform.isBrowser||1!==$e.nodeType)return(0,K.of)(null);const Et=(0,M.kV)($e)||this._getDocument(),Lt=this._elementInfo.get($e);if(Lt)return Re&&(Lt.checkChildren=!0),Lt.subject;const bn={checkChildren:Re,subject:new X.x,rootNode:Et};return this._elementInfo.set($e,bn),this._registerGlobalListeners(bn),bn.subject}stopMonitoring(Y){const Re=(0,Ke.fI)(Y),$e=this._elementInfo.get(Re);$e&&($e.subject.complete(),this._setClasses(Re),this._elementInfo.delete(Re),this._removeGlobalListeners($e))}focusVia(Y,Re,$e){const Et=(0,Ke.fI)(Y);Et===this._getDocument().activeElement?this._getClosestElementsInfo(Et).forEach(([bn,Zn])=>this._originChanged(bn,Re,Zn)):(this._setOrigin(Re),"function"==typeof Et.focus&&Et.focus($e))}ngOnDestroy(){this._elementInfo.forEach((Y,Re)=>this.stopMonitoring(Re))}_getDocument(){return this._document||document}_getWindow(){return this._getDocument().defaultView||window}_getFocusOrigin(Y){return this._origin?this._originFromTouchInteraction?this._shouldBeAttributedToTouch(Y)?"touch":"program":this._origin:this._windowFocused&&this._lastFocusOrigin?this._lastFocusOrigin:"program"}_shouldBeAttributedToTouch(Y){return 1===this._detectionMode||!!Y?.contains(this._inputModalityDetector._mostRecentTarget)}_setClasses(Y,Re){Y.classList.toggle("cdk-focused",!!Re),Y.classList.toggle("cdk-touch-focused","touch"===Re),Y.classList.toggle("cdk-keyboard-focused","keyboard"===Re),Y.classList.toggle("cdk-mouse-focused","mouse"===Re),Y.classList.toggle("cdk-program-focused","program"===Re)}_setOrigin(Y,Re=!1){this._ngZone.runOutsideAngular(()=>{this._origin=Y,this._originFromTouchInteraction="touch"===Y&&Re,0===this._detectionMode&&(clearTimeout(this._originTimeoutId),this._originTimeoutId=setTimeout(()=>this._origin=null,this._originFromTouchInteraction?650:1))})}_onFocus(Y,Re){const $e=this._elementInfo.get(Re),Et=(0,M.sA)(Y);!$e||!$e.checkChildren&&Re!==Et||this._originChanged(Re,this._getFocusOrigin(Et),$e)}_onBlur(Y,Re){const $e=this._elementInfo.get(Re);!$e||$e.checkChildren&&Y.relatedTarget instanceof Node&&Re.contains(Y.relatedTarget)||(this._setClasses(Re),this._emitOrigin($e,null))}_emitOrigin(Y,Re){Y.subject.observers.length&&this._ngZone.run(()=>Y.subject.next(Re))}_registerGlobalListeners(Y){if(!this._platform.isBrowser)return;const Re=Y.rootNode,$e=this._rootNodeFocusListenerCount.get(Re)||0;$e||this._ngZone.runOutsideAngular(()=>{Re.addEventListener("focus",this._rootNodeFocusAndBlurListener,Ut),Re.addEventListener("blur",this._rootNodeFocusAndBlurListener,Ut)}),this._rootNodeFocusListenerCount.set(Re,$e+1),1==++this._monitoredElementCount&&(this._ngZone.runOutsideAngular(()=>{this._getWindow().addEventListener("focus",this._windowFocusListener)}),this._inputModalityDetector.modalityDetected.pipe((0,xe.R)(this._stopInputModalityDetector)).subscribe(Et=>{this._setOrigin(Et,!0)}))}_removeGlobalListeners(Y){const Re=Y.rootNode;if(this._rootNodeFocusListenerCount.has(Re)){const $e=this._rootNodeFocusListenerCount.get(Re);$e>1?this._rootNodeFocusListenerCount.set(Re,$e-1):(Re.removeEventListener("focus",this._rootNodeFocusAndBlurListener,Ut),Re.removeEventListener("blur",this._rootNodeFocusAndBlurListener,Ut),this._rootNodeFocusListenerCount.delete(Re))}--this._monitoredElementCount||(this._getWindow().removeEventListener("focus",this._windowFocusListener),this._stopInputModalityDetector.next(),clearTimeout(this._windowFocusTimeoutId),clearTimeout(this._originTimeoutId))}_originChanged(Y,Re,$e){this._setClasses(Y,Re),this._emitOrigin($e,Re),this._lastFocusOrigin=Re}_getClosestElementsInfo(Y){const Re=[];return this._elementInfo.forEach(($e,Et)=>{(Et===Y||$e.checkChildren&&Et.contains(Y))&&Re.push([Et,$e])}),Re}}return Te.\u0275fac=function(Y){return new(Y||Te)(v.LFG(v.R0b),v.LFG(M.t4),v.LFG(P),v.LFG(s.K0,8),v.LFG(Rt,8))},Te.\u0275prov=v.Yz7({token:Te,factory:Te.\u0275fac,providedIn:"root"}),Te})();
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */const gn="cdk-high-contrast-black-on-white",Qe="cdk-high-contrast-white-on-black",he="cdk-high-contrast-active";let ge=(()=>{class Te{constructor(Y,Re){this._platform=Y,this._document=Re}getHighContrastMode(){if(!this._platform.isBrowser)return 0;const Y=this._document.createElement("div");Y.style.backgroundColor="rgb(1,2,3)",Y.style.position="absolute",this._document.body.appendChild(Y);const Re=this._document.defaultView||window,$e=Re&&Re.getComputedStyle?Re.getComputedStyle(Y):null,Et=($e&&$e.backgroundColor||"").replace(/ /g,"");switch(Y.remove(),Et){case"rgb(0,0,0)":return 2;case"rgb(255,255,255)":return 1}return 0}_applyBodyHighContrastModeCssClasses(){if(!this._hasCheckedHighContrastMode&&this._platform.isBrowser&&this._document.body){const Y=this._document.body.classList;Y.remove(he,gn,Qe),this._hasCheckedHighContrastMode=!0;const Re=this.getHighContrastMode();1===Re?Y.add(he,gn):2===Re&&Y.add(he,Qe)}}}return Te.\u0275fac=function(Y){return new(Y||Te)(v.LFG(M.t4),v.LFG(s.K0))},Te.\u0275prov=v.Yz7({token:Te,factory:Te.\u0275fac,providedIn:"root"}),Te})(),Ue=(()=>{class Te{constructor(Y){Y._applyBodyHighContrastModeCssClasses()}}return Te.\u0275fac=function(Y){return new(Y||Te)(v.LFG(ge))},Te.\u0275mod=v.oAB({type:Te}),Te.\u0275inj=v.cJS({imports:[Ne.Q8]}),Te})();
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */,445:(St,He,y)=>{y.d(He,{Is:()=>ue,vT:()=>Me});var s=y(4650),v=y(6895);
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */const M=new s.OlP("cdk-dir-doc",{providedIn:"root",factory:function G(){return(0,s.f3M)(v.K0)}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */}),X=/^(ar|ckb|dv|he|iw|fa|nqo|ps|sd|ug|ur|yi|.*[-_](Adlm|Arab|Hebr|Nkoo|Rohg|Thaa))(?!.*[-_](Latn|Cyrl)($|-|_))($|-|_)/i;let ue=(()=>{class ce{constructor(te){if(this.value="ltr",this.change=new s.vpe,te){const Ve=te.documentElement?te.documentElement.dir:null;this.value=function K(ce){const me=ce?.toLowerCase()||"";return"auto"===me&&typeof navigator<"u"&&navigator?.language?X.test(navigator.language)?"rtl":"ltr":"rtl"===me?"rtl":"ltr"}((te.body?te.body.dir:null)||Ve||"ltr")}}ngOnDestroy(){this.change.complete()}}return ce.\u0275fac=function(te){return new(te||ce)(s.LFG(M,8))},ce.\u0275prov=s.Yz7({token:ce,factory:ce.\u0275fac,providedIn:"root"}),ce})(),Me=(()=>{class ce{}return ce.\u0275fac=function(te){return new(te||ce)},ce.\u0275mod=s.oAB({type:ce}),ce.\u0275inj=s.cJS({}),ce})();
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */,1281:(St,He,y)=>{y.d(He,{Eq:()=>X,HM:()=>K,Ig:()=>v,fI:()=>ue,su:()=>M,t6:()=>G});var s=y(4650);
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */function v(Me){return null!=Me&&"false"!=`${Me}`}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */function M(Me,ce=0){return G(Me)?Number(Me):ce}function G(Me){return!isNaN(parseFloat(Me))&&!isNaN(Number(Me))}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */function X(Me){return Array.isArray(Me)?Me:[Me]}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */function K(Me){return null==Me?"":"string"==typeof Me?Me:`${Me}px`}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */function ue(Me){return Me instanceof s.SBq?Me.nativeElement:Me}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */,9521:(St,He,y)=>{y.d(He,{JU:()=>K,K5:()=>X,L_:()=>te,MW:()=>Xe,Vb:()=>Xt,b2:()=>$t,hY:()=>me,jx:()=>ue,zL:()=>q});
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
const X=13,K=16,ue=17,q=18,me=27,te=32,Xe=91,$t=224;
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */function Xt(un,...tn){return tn.length?tn.some(Cn=>un[Cn]):un.altKey||un.shiftKey||un.ctrlKey||un.metaKey}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */},9643:(St,He,y)=>{y.d(He,{Q8:()=>Me,wD:()=>q});var s=y(1281),v=y(4650),M=y(8306),G=y(7579),X=y(8372);
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */let K=(()=>{class ce{create(te){return typeof MutationObserver>"u"?null:new MutationObserver(te)}}return ce.\u0275fac=function(te){return new(te||ce)},ce.\u0275prov=v.Yz7({token:ce,factory:ce.\u0275fac,providedIn:"root"}),ce})(),ue=(()=>{class ce{constructor(te){this._mutationObserverFactory=te,this._observedElements=new Map}ngOnDestroy(){this._observedElements.forEach((te,Ge)=>this._cleanupObserver(Ge))}observe(te){const Ge=(0,s.fI)(te);return new M.y(Ve=>{const Ke=this._observeElement(Ge).subscribe(Ve);return()=>{Ke.unsubscribe(),this._unobserveElement(Ge)}})}_observeElement(te){if(this._observedElements.has(te))this._observedElements.get(te).count++;else{const Ge=new G.x,Ve=this._mutationObserverFactory.create(xe=>Ge.next(xe));Ve&&Ve.observe(te,{characterData:!0,childList:!0,subtree:!0}),this._observedElements.set(te,{observer:Ve,stream:Ge,count:1})}return this._observedElements.get(te).stream}_unobserveElement(te){this._observedElements.has(te)&&(this._observedElements.get(te).count--,this._observedElements.get(te).count||this._cleanupObserver(te))}_cleanupObserver(te){if(this._observedElements.has(te)){const{observer:Ge,stream:Ve}=this._observedElements.get(te);Ge&&Ge.disconnect(),Ve.complete(),this._observedElements.delete(te)}}}return ce.\u0275fac=function(te){return new(te||ce)(v.LFG(K))},ce.\u0275prov=v.Yz7({token:ce,factory:ce.\u0275fac,providedIn:"root"}),ce})(),q=(()=>{class ce{constructor(te,Ge,Ve){this._contentObserver=te,this._elementRef=Ge,this._ngZone=Ve,this.event=new v.vpe,this._disabled=!1,this._currentSubscription=null}get disabled(){return this._disabled}set disabled(te){this._disabled=(0,s.Ig)(te),this._disabled?this._unsubscribe():this._subscribe()}get debounce(){return this._debounce}set debounce(te){this._debounce=(0,s.su)(te),this._subscribe()}ngAfterContentInit(){!this._currentSubscription&&!this.disabled&&this._subscribe()}ngOnDestroy(){this._unsubscribe()}_subscribe(){this._unsubscribe();const te=this._contentObserver.observe(this._elementRef);this._ngZone.runOutsideAngular(()=>{this._currentSubscription=(this.debounce?te.pipe((0,X.b)(this.debounce)):te).subscribe(this.event)})}_unsubscribe(){this._currentSubscription?.unsubscribe()}}return ce.\u0275fac=function(te){return new(te||ce)(v.Y36(ue),v.Y36(v.SBq),v.Y36(v.R0b))},ce.\u0275dir=v.lG2({type:ce,selectors:[["","cdkObserveContent",""]],inputs:{disabled:["cdkObserveContentDisabled","disabled"],debounce:"debounce"},outputs:{event:"cdkObserveContent"},exportAs:["cdkObserveContent"]}),ce})(),Me=(()=>{class ce{}return ce.\u0275fac=function(te){return new(te||ce)},ce.\u0275mod=v.oAB({type:ce}),ce.\u0275inj=v.cJS({providers:[K]}),ce})();
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */},8184:(St,He,y)=>{y.d(He,{Iu:()=>Le,U8:()=>Yt,X_:()=>Q,Xj:()=>le,aV:()=>nt});var s=y(8605),v=y(6895),M=y(4650),G=y(1281),X=y(3353),K=y(445),ue=y(4080),q=y(7579),Me=y(727),ce=y(6451),me=y(5698),te=y(2722);
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */const Ge=(0,X.Mq)();class Ve{constructor(B,F){this._viewportRuler=B,this._previousHTMLStyles={top:"",left:""},this._isEnabled=!1,this._document=F}attach(){}enable(){if(this._canBeEnabled()){const B=this._document.documentElement;this._previousScrollPosition=this._viewportRuler.getViewportScrollPosition(),this._previousHTMLStyles.left=B.style.left||"",this._previousHTMLStyles.top=B.style.top||"",B.style.left=(0,G.HM)(-this._previousScrollPosition.left),B.style.top=(0,G.HM)(-this._previousScrollPosition.top),B.classList.add("cdk-global-scrollblock"),this._isEnabled=!0}}disable(){if(this._isEnabled){const B=this._document.documentElement,j=B.style,b=this._document.body.style,T=j.scrollBehavior||"",P=b.scrollBehavior||"";this._isEnabled=!1,j.left=this._previousHTMLStyles.left,j.top=this._previousHTMLStyles.top,B.classList.remove("cdk-global-scrollblock"),Ge&&(j.scrollBehavior=b.scrollBehavior="auto"),window.scroll(this._previousScrollPosition.left,this._previousScrollPosition.top),Ge&&(j.scrollBehavior=T,b.scrollBehavior=P)}}_canBeEnabled(){if(this._document.documentElement.classList.contains("cdk-global-scrollblock")||this._isEnabled)return!1;const F=this._document.body,j=this._viewportRuler.getViewportSize();return F.scrollHeight>j.height||F.scrollWidth>j.width}}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */class Ke{constructor(B,F,j,b){this._scrollDispatcher=B,this._ngZone=F,this._viewportRuler=j,this._config=b,this._scrollSubscription=null,this._detach=()=>{this.disable(),this._overlayRef.hasAttached()&&this._ngZone.run(()=>this._overlayRef.detach())}}attach(B){this._overlayRef=B}enable(){if(this._scrollSubscription)return;const B=this._scrollDispatcher.scrolled(0);this._config&&this._config.threshold&&this._config.threshold>1?(this._initialScrollPosition=this._viewportRuler.getViewportScrollPosition().top,this._scrollSubscription=B.subscribe(()=>{const F=this._viewportRuler.getViewportScrollPosition().top;Math.abs(F-this._initialScrollPosition)>this._config.threshold?this._detach():this._overlayRef.updatePosition()})):this._scrollSubscription=B.subscribe(this._detach)}disable(){this._scrollSubscription&&(this._scrollSubscription.unsubscribe(),this._scrollSubscription=null)}detach(){this.disable(),this._overlayRef=null}}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */class Ne{enable(){}disable(){}attach(){}}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */function qe(Je,B){return B.some(F=>Je.bottom<F.top||Je.top>F.bottom||Je.right<F.left||Je.left>F.right)}function ht(Je,B){return B.some(F=>Je.top<F.top||Je.bottom>F.bottom||Je.left<F.left||Je.right>F.right)}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */class mt{constructor(B,F,j,b){this._scrollDispatcher=B,this._viewportRuler=F,this._ngZone=j,this._config=b,this._scrollSubscription=null}attach(B){this._overlayRef=B}enable(){this._scrollSubscription||(this._scrollSubscription=this._scrollDispatcher.scrolled(this._config?this._config.scrollThrottle:0).subscribe(()=>{if(this._overlayRef.updatePosition(),this._config&&this._config.autoClose){const F=this._overlayRef.overlayElement.getBoundingClientRect(),{width:j,height:b}=this._viewportRuler.getViewportSize();qe(F,[{width:j,height:b,bottom:b,right:j,top:0,left:0}])&&(this.disable(),this._ngZone.run(()=>this._overlayRef.detach()))}}))}disable(){this._scrollSubscription&&(this._scrollSubscription.unsubscribe(),this._scrollSubscription=null)}detach(){this.disable(),this._overlayRef=null}}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */let de=(()=>{class Je{constructor(F,j,b,T){this._scrollDispatcher=F,this._viewportRuler=j,this._ngZone=b,this.noop=()=>new Ne,this.close=P=>new Ke(this._scrollDispatcher,this._ngZone,this._viewportRuler,P),this.block=()=>new Ve(this._viewportRuler,this._document),this.reposition=P=>new mt(this._scrollDispatcher,this._viewportRuler,this._ngZone,P),this._document=T}}return Je.\u0275fac=function(F){return new(F||Je)(M.LFG(s.mF),M.LFG(s.rL),M.LFG(M.R0b),M.LFG(v.K0))},Je.\u0275prov=M.Yz7({token:Je,factory:Je.\u0275fac,providedIn:"root"}),Je})();
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */class Q{constructor(B){if(this.scrollStrategy=new Ne,this.panelClass="",this.hasBackdrop=!1,this.backdropClass="cdk-overlay-dark-backdrop",this.disposeOnNavigation=!1,B){const F=Object.keys(B);for(const j of F)void 0!==B[j]&&(this[j]=B[j])}}}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */class Ee{constructor(B,F){this.connectionPair=B,this.scrollableViewProperties=F}}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
let Se=(()=>{class Je{constructor(F){this._attachedOverlays=[],this._document=F}ngOnDestroy(){this.detach()}add(F){this.remove(F),this._attachedOverlays.push(F)}remove(F){const j=this._attachedOverlays.indexOf(F);j>-1&&this._attachedOverlays.splice(j,1),0===this._attachedOverlays.length&&this.detach()}}return Je.\u0275fac=function(F){return new(F||Je)(M.LFG(v.K0))},Je.\u0275prov=M.Yz7({token:Je,factory:Je.\u0275fac,providedIn:"root"}),Je})(),fe=(()=>{class Je extends Se{constructor(F,j){super(F),this._ngZone=j,this._keydownListener=b=>{const T=this._attachedOverlays;for(let P=T.length-1;P>-1;P--)if(T[P]._keydownEvents.observers.length>0){const x=T[P]._keydownEvents;this._ngZone?this._ngZone.run(()=>x.next(b)):x.next(b);break}}}add(F){super.add(F),this._isAttached||(this._ngZone?this._ngZone.runOutsideAngular(()=>this._document.body.addEventListener("keydown",this._keydownListener)):this._document.body.addEventListener("keydown",this._keydownListener),this._isAttached=!0)}detach(){this._isAttached&&(this._document.body.removeEventListener("keydown",this._keydownListener),this._isAttached=!1)}}return Je.\u0275fac=function(F){return new(F||Je)(M.LFG(v.K0),M.LFG(M.R0b,8))},Je.\u0275prov=M.Yz7({token:Je,factory:Je.\u0275fac,providedIn:"root"}),Je})(),Fe=(()=>{class Je extends Se{constructor(F,j,b){super(F),this._platform=j,this._ngZone=b,this._cursorStyleIsSet=!1,this._pointerDownListener=T=>{this._pointerDownEventTarget=(0,X.sA)(T)},this._clickListener=T=>{const P=(0,X.sA)(T),x="click"===T.type&&this._pointerDownEventTarget?this._pointerDownEventTarget:P;this._pointerDownEventTarget=null;const $=this._attachedOverlays.slice();for(let ve=$.length-1;ve>-1;ve--){const se=$[ve];if(se._outsidePointerEvents.observers.length<1||!se.hasAttached())continue;if(se.overlayElement.contains(P)||se.overlayElement.contains(x))break;const Xe=se._outsidePointerEvents;this._ngZone?this._ngZone.run(()=>Xe.next(T)):Xe.next(T)}}}add(F){if(super.add(F),!this._isAttached){const j=this._document.body;this._ngZone?this._ngZone.runOutsideAngular(()=>this._addEventListeners(j)):this._addEventListeners(j),this._platform.IOS&&!this._cursorStyleIsSet&&(this._cursorOriginalValue=j.style.cursor,j.style.cursor="pointer",this._cursorStyleIsSet=!0),this._isAttached=!0}}detach(){if(this._isAttached){const F=this._document.body;F.removeEventListener("pointerdown",this._pointerDownListener,!0),F.removeEventListener("click",this._clickListener,!0),F.removeEventListener("auxclick",this._clickListener,!0),F.removeEventListener("contextmenu",this._clickListener,!0),this._platform.IOS&&this._cursorStyleIsSet&&(F.style.cursor=this._cursorOriginalValue,this._cursorStyleIsSet=!1),this._isAttached=!1}}_addEventListeners(F){F.addEventListener("pointerdown",this._pointerDownListener,!0),F.addEventListener("click",this._clickListener,!0),F.addEventListener("auxclick",this._clickListener,!0),F.addEventListener("contextmenu",this._clickListener,!0)}}return Je.\u0275fac=function(F){return new(F||Je)(M.LFG(v.K0),M.LFG(X.t4),M.LFG(M.R0b,8))},Je.\u0275prov=M.Yz7({token:Je,factory:Je.\u0275fac,providedIn:"root"}),Je})(),le=(()=>{class Je{constructor(F,j){this._platform=j,this._document=F}ngOnDestroy(){this._containerElement?.remove()}getContainerElement(){return this._containerElement||this._createContainer(),this._containerElement}_createContainer(){const F="cdk-overlay-container";if(this._platform.isBrowser||(0,X.Oy)()){const b=this._document.querySelectorAll(`.${F}[platform="server"], .${F}[platform="test"]`);for(let T=0;T<b.length;T++)b[T].remove()}const j=this._document.createElement("div");j.classList.add(F),(0,X.Oy)()?j.setAttribute("platform","test"):this._platform.isBrowser||j.setAttribute("platform","server"),this._document.body.appendChild(j),this._containerElement=j}}return Je.\u0275fac=function(F){return new(F||Je)(M.LFG(v.K0),M.LFG(X.t4))},Je.\u0275prov=M.Yz7({token:Je,factory:Je.\u0275fac,providedIn:"root"}),Je})();
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
class Le{constructor(B,F,j,b,T,P,x,$,ve,se=!1){this._portalOutlet=B,this._host=F,this._pane=j,this._config=b,this._ngZone=T,this._keyboardDispatcher=P,this._document=x,this._location=$,this._outsideClickDispatcher=ve,this._animationsDisabled=se,this._backdropElement=null,this._backdropClick=new q.x,this._attachments=new q.x,this._detachments=new q.x,this._locationChanges=Me.w0.EMPTY,this._backdropClickHandler=Xe=>this._backdropClick.next(Xe),this._backdropTransitionendHandler=Xe=>{this._disposeBackdrop(Xe.target)},this._keydownEvents=new q.x,this._outsidePointerEvents=new q.x,b.scrollStrategy&&(this._scrollStrategy=b.scrollStrategy,this._scrollStrategy.attach(this)),this._positionStrategy=b.positionStrategy}get overlayElement(){return this._pane}get backdropElement(){return this._backdropElement}get hostElement(){return this._host}attach(B){!this._host.parentElement&&this._previousHostParent&&this._previousHostParent.appendChild(this._host);const F=this._portalOutlet.attach(B);return this._positionStrategy&&this._positionStrategy.attach(this),this._updateStackingOrder(),this._updateElementSize(),this._updateElementDirection(),this._scrollStrategy&&this._scrollStrategy.enable(),this._ngZone.onStable.pipe((0,me.q)(1)).subscribe(()=>{this.hasAttached()&&this.updatePosition()}),this._togglePointerEvents(!0),this._config.hasBackdrop&&this._attachBackdrop(),this._config.panelClass&&this._toggleClasses(this._pane,this._config.panelClass,!0),this._attachments.next(),this._keyboardDispatcher.add(this),this._config.disposeOnNavigation&&(this._locationChanges=this._location.subscribe(()=>this.dispose())),this._outsideClickDispatcher.add(this),F}detach(){if(!this.hasAttached())return;this.detachBackdrop(),this._togglePointerEvents(!1),this._positionStrategy&&this._positionStrategy.detach&&this._positionStrategy.detach(),this._scrollStrategy&&this._scrollStrategy.disable();const B=this._portalOutlet.detach();return this._detachments.next(),this._keyboardDispatcher.remove(this),this._detachContentWhenStable(),this._locationChanges.unsubscribe(),this._outsideClickDispatcher.remove(this),B}dispose(){const B=this.hasAttached();this._positionStrategy&&this._positionStrategy.dispose(),this._disposeScrollStrategy(),this._disposeBackdrop(this._backdropElement),this._locationChanges.unsubscribe(),this._keyboardDispatcher.remove(this),this._portalOutlet.dispose(),this._attachments.complete(),this._backdropClick.complete(),this._keydownEvents.complete(),this._outsidePointerEvents.complete(),this._outsideClickDispatcher.remove(this),this._host?.remove(),this._previousHostParent=this._pane=this._host=null,B&&this._detachments.next(),this._detachments.complete()}hasAttached(){return this._portalOutlet.hasAttached()}backdropClick(){return this._backdropClick}attachments(){return this._attachments}detachments(){return this._detachments}keydownEvents(){return this._keydownEvents}outsidePointerEvents(){return this._outsidePointerEvents}getConfig(){return this._config}updatePosition(){this._positionStrategy&&this._positionStrategy.apply()}updatePositionStrategy(B){B!==this._positionStrategy&&(this._positionStrategy&&this._positionStrategy.dispose(),this._positionStrategy=B,this.hasAttached()&&(B.attach(this),this.updatePosition()))}updateSize(B){this._config={...this._config,...B},this._updateElementSize()}setDirection(B){this._config={...this._config,direction:B},this._updateElementDirection()}addPanelClass(B){this._pane&&this._toggleClasses(this._pane,B,!0)}removePanelClass(B){this._pane&&this._toggleClasses(this._pane,B,!1)}getDirection(){const B=this._config.direction;return B?"string"==typeof B?B:B.value:"ltr"}updateScrollStrategy(B){B!==this._scrollStrategy&&(this._disposeScrollStrategy(),this._scrollStrategy=B,this.hasAttached()&&(B.attach(this),B.enable()))}_updateElementDirection(){this._host.setAttribute("dir",this.getDirection())}_updateElementSize(){if(!this._pane)return;const B=this._pane.style;B.width=(0,G.HM)(this._config.width),B.height=(0,G.HM)(this._config.height),B.minWidth=(0,G.HM)(this._config.minWidth),B.minHeight=(0,G.HM)(this._config.minHeight),B.maxWidth=(0,G.HM)(this._config.maxWidth),B.maxHeight=(0,G.HM)(this._config.maxHeight)}_togglePointerEvents(B){this._pane.style.pointerEvents=B?"":"none"}_attachBackdrop(){const B="cdk-overlay-backdrop-showing";this._backdropElement=this._document.createElement("div"),this._backdropElement.classList.add("cdk-overlay-backdrop"),this._animationsDisabled&&this._backdropElement.classList.add("cdk-overlay-backdrop-noop-animation"),this._config.backdropClass&&this._toggleClasses(this._backdropElement,this._config.backdropClass,!0),this._host.parentElement.insertBefore(this._backdropElement,this._host),this._backdropElement.addEventListener("click",this._backdropClickHandler),!this._animationsDisabled&&typeof requestAnimationFrame<"u"?this._ngZone.runOutsideAngular(()=>{requestAnimationFrame(()=>{this._backdropElement&&this._backdropElement.classList.add(B)})}):this._backdropElement.classList.add(B)}_updateStackingOrder(){this._host.nextSibling&&this._host.parentNode.appendChild(this._host)}detachBackdrop(){const B=this._backdropElement;if(B){if(this._animationsDisabled)return void this._disposeBackdrop(B);B.classList.remove("cdk-overlay-backdrop-showing"),this._ngZone.runOutsideAngular(()=>{B.addEventListener("transitionend",this._backdropTransitionendHandler)}),B.style.pointerEvents="none",this._backdropTimeout=this._ngZone.runOutsideAngular(()=>setTimeout(()=>{this._disposeBackdrop(B)},500))}}_toggleClasses(B,F,j){const b=(0,G.Eq)(F||[]).filter(T=>!!T);b.length&&(j?B.classList.add(...b):B.classList.remove(...b))}_detachContentWhenStable(){this._ngZone.runOutsideAngular(()=>{const B=this._ngZone.onStable.pipe((0,te.R)((0,ce.T)(this._attachments,this._detachments))).subscribe(()=>{(!this._pane||!this._host||0===this._pane.children.length)&&(this._pane&&this._config.panelClass&&this._toggleClasses(this._pane,this._config.panelClass,!1),this._host&&this._host.parentElement&&(this._previousHostParent=this._host.parentElement,this._host.remove()),B.unsubscribe())})})}_disposeScrollStrategy(){const B=this._scrollStrategy;B&&(B.disable(),B.detach&&B.detach())}_disposeBackdrop(B){B&&(B.removeEventListener("click",this._backdropClickHandler),B.removeEventListener("transitionend",this._backdropTransitionendHandler),B.remove(),this._backdropElement===B&&(this._backdropElement=null)),this._backdropTimeout&&(clearTimeout(this._backdropTimeout),this._backdropTimeout=void 0)}}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */const Ye="cdk-overlay-connected-position-bounding-box",xt=/([A-Za-z%]+)$/;class Ht{constructor(B,F,j,b,T){this._viewportRuler=F,this._document=j,this._platform=b,this._overlayContainer=T,this._lastBoundingBoxSize={width:0,height:0},this._isPushed=!1,this._canPush=!0,this._growAfterOpen=!1,this._hasFlexibleDimensions=!0,this._positionLocked=!1,this._viewportMargin=0,this._scrollables=[],this._preferredPositions=[],this._positionChanges=new q.x,this._resizeSubscription=Me.w0.EMPTY,this._offsetX=0,this._offsetY=0,this._appliedPanelClasses=[],this.positionChanges=this._positionChanges,this.setOrigin(B)}get positions(){return this._preferredPositions}attach(B){this._validatePositions(),B.hostElement.classList.add(Ye),this._overlayRef=B,this._boundingBox=B.hostElement,this._pane=B.overlayElement,this._isDisposed=!1,this._isInitialRender=!0,this._lastPosition=null,this._resizeSubscription.unsubscribe(),this._resizeSubscription=this._viewportRuler.change().subscribe(()=>{this._isInitialRender=!0,this.apply()})}apply(){if(this._isDisposed||!this._platform.isBrowser)return;if(!this._isInitialRender&&this._positionLocked&&this._lastPosition)return void this.reapplyLastPosition();this._clearPanelClasses(),this._resetOverlayElementStyles(),this._resetBoundingBoxStyles(),this._viewportRect=this._getNarrowedViewportRect(),this._originRect=this._getOriginRect(),this._overlayRect=this._pane.getBoundingClientRect(),this._containerRect=this._overlayContainer.getContainerElement().getBoundingClientRect();const B=this._originRect,F=this._overlayRect,j=this._viewportRect,b=this._containerRect,T=[];let P;for(let x of this._preferredPositions){let $=this._getOriginPoint(B,b,x),ve=this._getOverlayPoint($,F,x),se=this._getOverlayFit(ve,F,j,x);if(se.isCompletelyWithinViewport)return this._isPushed=!1,void this._applyPosition(x,$);this._canFitWithFlexibleDimensions(se,ve,j)?T.push({position:x,origin:$,overlayRect:F,boundingBoxRect:this._calculateBoundingBoxRect($,x)}):(!P||P.overlayFit.visibleArea<se.visibleArea)&&(P={overlayFit:se,overlayPoint:ve,originPoint:$,position:x,overlayRect:F})}if(T.length){let x=null,$=-1;for(const ve of T){const se=ve.boundingBoxRect.width*ve.boundingBoxRect.height*(ve.position.weight||1);se>$&&($=se,x=ve)}return this._isPushed=!1,void this._applyPosition(x.position,x.origin)}if(this._canPush)return this._isPushed=!0,void this._applyPosition(P.position,P.originPoint);this._applyPosition(P.position,P.originPoint)}detach(){this._clearPanelClasses(),this._lastPosition=null,this._previousPushAmount=null,this._resizeSubscription.unsubscribe()}dispose(){this._isDisposed||(this._boundingBox&&jt(this._boundingBox.style,{top:"",left:"",right:"",bottom:"",height:"",width:"",alignItems:"",justifyContent:""}),this._pane&&this._resetOverlayElementStyles(),this._overlayRef&&this._overlayRef.hostElement.classList.remove(Ye),this.detach(),this._positionChanges.complete(),this._overlayRef=this._boundingBox=null,this._isDisposed=!0)}reapplyLastPosition(){if(this._isDisposed||!this._platform.isBrowser)return;const B=this._lastPosition;if(B){this._originRect=this._getOriginRect(),this._overlayRect=this._pane.getBoundingClientRect(),this._viewportRect=this._getNarrowedViewportRect(),this._containerRect=this._overlayContainer.getContainerElement().getBoundingClientRect();const F=this._getOriginPoint(this._originRect,this._containerRect,B);this._applyPosition(B,F)}else this.apply()}withScrollableContainers(B){return this._scrollables=B,this}withPositions(B){return this._preferredPositions=B,-1===B.indexOf(this._lastPosition)&&(this._lastPosition=null),this._validatePositions(),this}withViewportMargin(B){return this._viewportMargin=B,this}withFlexibleDimensions(B=!0){return this._hasFlexibleDimensions=B,this}withGrowAfterOpen(B=!0){return this._growAfterOpen=B,this}withPush(B=!0){return this._canPush=B,this}withLockedPosition(B=!0){return this._positionLocked=B,this}setOrigin(B){return this._origin=B,this}withDefaultOffsetX(B){return this._offsetX=B,this}withDefaultOffsetY(B){return this._offsetY=B,this}withTransformOriginOn(B){return this._transformOriginSelector=B,this}_getOriginPoint(B,F,j){let b,T;if("center"==j.originX)b=B.left+B.width/2;else{const P=this._isRtl()?B.right:B.left,x=this._isRtl()?B.left:B.right;b="start"==j.originX?P:x}return F.left<0&&(b-=F.left),T="center"==j.originY?B.top+B.height/2:"top"==j.originY?B.top:B.bottom,F.top<0&&(T-=F.top),{x:b,y:T}}_getOverlayPoint(B,F,j){let b,T;return b="center"==j.overlayX?-F.width/2:"start"===j.overlayX?this._isRtl()?-F.width:0:this._isRtl()?0:-F.width,T="center"==j.overlayY?-F.height/2:"top"==j.overlayY?0:-F.height,{x:B.x+b,y:B.y+T}}_getOverlayFit(B,F,j,b){const T=vt(F);let{x:P,y:x}=B,$=this._getOffset(b,"x"),ve=this._getOffset(b,"y");$&&(P+=$),ve&&(x+=ve);let Rt=0-x,Ut=x+T.height-j.height,yt=this._subtractOverflows(T.width,0-P,P+T.width-j.width),qt=this._subtractOverflows(T.height,Rt,Ut),gn=yt*qt;return{visibleArea:gn,isCompletelyWithinViewport:T.width*T.height===gn,fitsInViewportVertically:qt===T.height,fitsInViewportHorizontally:yt==T.width}}_canFitWithFlexibleDimensions(B,F,j){if(this._hasFlexibleDimensions){const b=j.bottom-F.y,T=j.right-F.x,P=ft(this._overlayRef.getConfig().minHeight),x=ft(this._overlayRef.getConfig().minWidth),ve=B.fitsInViewportHorizontally||null!=x&&x<=T;return(B.fitsInViewportVertically||null!=P&&P<=b)&&ve}return!1}_pushOverlayOnScreen(B,F,j){if(this._previousPushAmount&&this._positionLocked)return{x:B.x+this._previousPushAmount.x,y:B.y+this._previousPushAmount.y};const b=vt(F),T=this._viewportRect,P=Math.max(B.x+b.width-T.width,0),x=Math.max(B.y+b.height-T.height,0),$=Math.max(T.top-j.top-B.y,0),ve=Math.max(T.left-j.left-B.x,0);let se=0,Xe=0;return se=b.width<=T.width?ve||-P:B.x<this._viewportMargin?T.left-j.left-B.x:0,Xe=b.height<=T.height?$||-x:B.y<this._viewportMargin?T.top-j.top-B.y:0,this._previousPushAmount={x:se,y:Xe},{x:B.x+se,y:B.y+Xe}}_applyPosition(B,F){if(this._setTransformOrigin(B),this._setOverlayElementStyles(F,B),this._setBoundingBoxStyles(F,B),B.panelClass&&this._addPanelClasses(B.panelClass),this._lastPosition=B,this._positionChanges.observers.length){const j=this._getScrollVisibility(),b=new Ee(B,j);this._positionChanges.next(b)}this._isInitialRender=!1}_setTransformOrigin(B){if(!this._transformOriginSelector)return;const F=this._boundingBox.querySelectorAll(this._transformOriginSelector);let j,b=B.overlayY;j="center"===B.overlayX?"center":this._isRtl()?"start"===B.overlayX?"right":"left":"start"===B.overlayX?"left":"right";for(let T=0;T<F.length;T++)F[T].style.transformOrigin=`${j} ${b}`}_calculateBoundingBoxRect(B,F){const j=this._viewportRect,b=this._isRtl();let T,P,x,se,Xe,Rt;if("top"===F.overlayY)P=B.y,T=j.height-P+this._viewportMargin;else if("bottom"===F.overlayY)x=j.height-B.y+2*this._viewportMargin,T=j.height-x+this._viewportMargin;else{const Ut=Math.min(j.bottom-B.y+j.top,B.y),yt=this._lastBoundingBoxSize.height;T=2*Ut,P=B.y-Ut,T>yt&&!this._isInitialRender&&!this._growAfterOpen&&(P=B.y-yt/2)}if("end"===F.overlayX&&!b||"start"===F.overlayX&&b)Rt=j.width-B.x+this._viewportMargin,se=B.x-this._viewportMargin;else if("start"===F.overlayX&&!b||"end"===F.overlayX&&b)Xe=B.x,se=j.right-B.x;else{const Ut=Math.min(j.right-B.x+j.left,B.x),yt=this._lastBoundingBoxSize.width;se=2*Ut,Xe=B.x-Ut,se>yt&&!this._isInitialRender&&!this._growAfterOpen&&(Xe=B.x-yt/2)}return{top:P,left:Xe,bottom:x,right:Rt,width:se,height:T}}_setBoundingBoxStyles(B,F){const j=this._calculateBoundingBoxRect(B,F);!this._isInitialRender&&!this._growAfterOpen&&(j.height=Math.min(j.height,this._lastBoundingBoxSize.height),j.width=Math.min(j.width,this._lastBoundingBoxSize.width));const b={};if(this._hasExactPosition())b.top=b.left="0",b.bottom=b.right=b.maxHeight=b.maxWidth="",b.width=b.height="100%";else{const T=this._overlayRef.getConfig().maxHeight,P=this._overlayRef.getConfig().maxWidth;b.height=(0,G.HM)(j.height),b.top=(0,G.HM)(j.top),b.bottom=(0,G.HM)(j.bottom),b.width=(0,G.HM)(j.width),b.left=(0,G.HM)(j.left),b.right=(0,G.HM)(j.right),b.alignItems="center"===F.overlayX?"center":"end"===F.overlayX?"flex-end":"flex-start",b.justifyContent="center"===F.overlayY?"center":"bottom"===F.overlayY?"flex-end":"flex-start",T&&(b.maxHeight=(0,G.HM)(T)),P&&(b.maxWidth=(0,G.HM)(P))}this._lastBoundingBoxSize=j,jt(this._boundingBox.style,b)}_resetBoundingBoxStyles(){jt(this._boundingBox.style,{top:"0",left:"0",right:"0",bottom:"0",height:"",width:"",alignItems:"",justifyContent:""})}_resetOverlayElementStyles(){jt(this._pane.style,{top:"",left:"",bottom:"",right:"",position:"",transform:""})}_setOverlayElementStyles(B,F){const j={},b=this._hasExactPosition(),T=this._hasFlexibleDimensions,P=this._overlayRef.getConfig();if(b){const se=this._viewportRuler.getViewportScrollPosition();jt(j,this._getExactOverlayY(F,B,se)),jt(j,this._getExactOverlayX(F,B,se))}else j.position="static";let x="",$=this._getOffset(F,"x"),ve=this._getOffset(F,"y");$&&(x+=`translateX(${$}px) `),ve&&(x+=`translateY(${ve}px)`),j.transform=x.trim(),P.maxHeight&&(b?j.maxHeight=(0,G.HM)(P.maxHeight):T&&(j.maxHeight="")),P.maxWidth&&(b?j.maxWidth=(0,G.HM)(P.maxWidth):T&&(j.maxWidth="")),jt(this._pane.style,j)}_getExactOverlayY(B,F,j){let b={top:"",bottom:""},T=this._getOverlayPoint(F,this._overlayRect,B);return this._isPushed&&(T=this._pushOverlayOnScreen(T,this._overlayRect,j)),"bottom"===B.overlayY?b.bottom=this._document.documentElement.clientHeight-(T.y+this._overlayRect.height)+"px":b.top=(0,G.HM)(T.y),b}_getExactOverlayX(B,F,j){let P,b={left:"",right:""},T=this._getOverlayPoint(F,this._overlayRect,B);return this._isPushed&&(T=this._pushOverlayOnScreen(T,this._overlayRect,j)),P=this._isRtl()?"end"===B.overlayX?"left":"right":"end"===B.overlayX?"right":"left","right"===P?b.right=this._document.documentElement.clientWidth-(T.x+this._overlayRect.width)+"px":b.left=(0,G.HM)(T.x),b}_getScrollVisibility(){const B=this._getOriginRect(),F=this._pane.getBoundingClientRect(),j=this._scrollables.map(b=>b.getElementRef().nativeElement.getBoundingClientRect());return{isOriginClipped:ht(B,j),isOriginOutsideView:qe(B,j),isOverlayClipped:ht(F,j),isOverlayOutsideView:qe(F,j)}}_subtractOverflows(B,...F){return F.reduce((j,b)=>j-Math.max(b,0),B)}_getNarrowedViewportRect(){const B=this._document.documentElement.clientWidth,F=this._document.documentElement.clientHeight,j=this._viewportRuler.getViewportScrollPosition();return{top:j.top+this._viewportMargin,left:j.left+this._viewportMargin,right:j.left+B-this._viewportMargin,bottom:j.top+F-this._viewportMargin,width:B-2*this._viewportMargin,height:F-2*this._viewportMargin}}_isRtl(){return"rtl"===this._overlayRef.getDirection()}_hasExactPosition(){return!this._hasFlexibleDimensions||this._isPushed}_getOffset(B,F){return"x"===F?B.offsetX??this._offsetX:B.offsetY??this._offsetY}_validatePositions(){}_addPanelClasses(B){this._pane&&(0,G.Eq)(B).forEach(F=>{""!==F&&-1===this._appliedPanelClasses.indexOf(F)&&(this._appliedPanelClasses.push(F),this._pane.classList.add(F))})}_clearPanelClasses(){this._pane&&(this._appliedPanelClasses.forEach(B=>{this._pane.classList.remove(B)}),this._appliedPanelClasses=[])}_getOriginRect(){const B=this._origin;if(B instanceof M.SBq)return B.nativeElement.getBoundingClientRect();if(B instanceof Element)return B.getBoundingClientRect();const F=B.width||0,j=B.height||0;return{top:B.y,bottom:B.y+j,left:B.x,right:B.x+F,height:j,width:F}}}function jt(Je,B){for(let F in B)B.hasOwnProperty(F)&&(Je[F]=B[F]);return Je}function ft(Je){if("number"!=typeof Je&&null!=Je){const[B,F]=Je.split(xt);return F&&"px"!==F?null:parseFloat(B)}return Je||null}function vt(Je){return{top:Math.floor(Je.top),right:Math.floor(Je.right),bottom:Math.floor(Je.bottom),left:Math.floor(Je.left),width:Math.floor(Je.width),height:Math.floor(Je.height)}}const Ce="cdk-global-overlay-wrapper";
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */class st{constructor(){this._cssPosition="static",this._topOffset="",this._bottomOffset="",this._alignItems="",this._xPosition="",this._xOffset="",this._width="",this._height="",this._isDisposed=!1}attach(B){const F=B.getConfig();this._overlayRef=B,this._width&&!F.width&&B.updateSize({width:this._width}),this._height&&!F.height&&B.updateSize({height:this._height}),B.hostElement.classList.add(Ce),this._isDisposed=!1}top(B=""){return this._bottomOffset="",this._topOffset=B,this._alignItems="flex-start",this}left(B=""){return this._xOffset=B,this._xPosition="left",this}bottom(B=""){return this._topOffset="",this._bottomOffset=B,this._alignItems="flex-end",this}right(B=""){return this._xOffset=B,this._xPosition="right",this}start(B=""){return this._xOffset=B,this._xPosition="start",this}end(B=""){return this._xOffset=B,this._xPosition="end",this}width(B=""){return this._overlayRef?this._overlayRef.updateSize({width:B}):this._width=B,this}height(B=""){return this._overlayRef?this._overlayRef.updateSize({height:B}):this._height=B,this}centerHorizontally(B=""){return this.left(B),this._xPosition="center",this}centerVertically(B=""){return this.top(B),this._alignItems="center",this}apply(){if(!this._overlayRef||!this._overlayRef.hasAttached())return;const B=this._overlayRef.overlayElement.style,F=this._overlayRef.hostElement.style,j=this._overlayRef.getConfig(),{width:b,height:T,maxWidth:P,maxHeight:x}=j,$=!("100%"!==b&&"100vw"!==b||P&&"100%"!==P&&"100vw"!==P),ve=!("100%"!==T&&"100vh"!==T||x&&"100%"!==x&&"100vh"!==x),se=this._xPosition,Xe=this._xOffset,Rt="rtl"===this._overlayRef.getConfig().direction;let Ut="",yt="",qt="";$?qt="flex-start":"center"===se?(qt="center",Rt?yt=Xe:Ut=Xe):Rt?"left"===se||"end"===se?(qt="flex-end",Ut=Xe):("right"===se||"start"===se)&&(qt="flex-start",yt=Xe):"left"===se||"start"===se?(qt="flex-start",Ut=Xe):("right"===se||"end"===se)&&(qt="flex-end",yt=Xe),B.position=this._cssPosition,B.marginLeft=$?"0":Ut,B.marginTop=ve?"0":this._topOffset,B.marginBottom=this._bottomOffset,B.marginRight=$?"0":yt,F.justifyContent=qt,F.alignItems=ve?"flex-start":this._alignItems}dispose(){if(this._isDisposed||!this._overlayRef)return;const B=this._overlayRef.overlayElement.style,F=this._overlayRef.hostElement,j=F.style;F.classList.remove(Ce),j.justifyContent=j.alignItems=B.marginTop=B.marginBottom=B.marginLeft=B.marginRight=B.position="",this._overlayRef=null,this._isDisposed=!0}}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */let at=(()=>{class Je{constructor(F,j,b,T){this._viewportRuler=F,this._document=j,this._platform=b,this._overlayContainer=T}global(){return new st}flexibleConnectedTo(F){return new Ht(F,this._viewportRuler,this._document,this._platform,this._overlayContainer)}}return Je.\u0275fac=function(F){return new(F||Je)(M.LFG(s.rL),M.LFG(v.K0),M.LFG(X.t4),M.LFG(le))},Je.\u0275prov=M.Yz7({token:Je,factory:Je.\u0275fac,providedIn:"root"}),Je})(),bt=0,nt=(()=>{class Je{constructor(F,j,b,T,P,x,$,ve,se,Xe,Rt,Ut){this.scrollStrategies=F,this._overlayContainer=j,this._componentFactoryResolver=b,this._positionBuilder=T,this._keyboardDispatcher=P,this._injector=x,this._ngZone=$,this._document=ve,this._directionality=se,this._location=Xe,this._outsideClickDispatcher=Rt,this._animationsModuleType=Ut}create(F){const j=this._createHostElement(),b=this._createPaneElement(j),T=this._createPortalOutlet(b),P=new Q(F);return P.direction=P.direction||this._directionality.value,new Le(T,j,b,P,this._ngZone,this._keyboardDispatcher,this._document,this._location,this._outsideClickDispatcher,"NoopAnimations"===this._animationsModuleType)}position(){return this._positionBuilder}_createPaneElement(F){const j=this._document.createElement("div");return j.id="cdk-overlay-"+bt++,j.classList.add("cdk-overlay-pane"),F.appendChild(j),j}_createHostElement(){const F=this._document.createElement("div");return this._overlayContainer.getContainerElement().appendChild(F),F}_createPortalOutlet(F){return this._appRef||(this._appRef=this._injector.get(M.z2F)),new ue.u0(F,this._componentFactoryResolver,this._appRef,this._injector,this._document)}}return Je.\u0275fac=function(F){return new(F||Je)(M.LFG(de),M.LFG(le),M.LFG(M._Vd),M.LFG(at),M.LFG(fe),M.LFG(M.zs3),M.LFG(M.R0b),M.LFG(v.K0),M.LFG(K.Is),M.LFG(v.Ye),M.LFG(Fe),M.LFG(M.QbO,8))},Je.\u0275prov=M.Yz7({token:Je,factory:Je.\u0275fac}),Je})();
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */const Gt={provide:new M.OlP("cdk-connected-overlay-scroll-strategy"),deps:[nt],useFactory:function gt(Je){return()=>Je.scrollStrategies.reposition()}};
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */let Yt=(()=>{class Je{}return Je.\u0275fac=function(F){return new(F||Je)},Je.\u0275mod=M.oAB({type:Je}),Je.\u0275inj=M.cJS({providers:[nt,Gt],imports:[K.vT,ue.eL,s.Cl,s.Cl]}),Je})();
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */,3353:(St,He,y)=>{y.d(He,{Mq:()=>Ve,Oy:()=>de,ht:()=>ht,i$:()=>me,kV:()=>qe,qK:()=>q,sA:()=>mt,t4:()=>G});var s=y(4650),v=y(6895);
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */let M;try{M=typeof Intl<"u"&&Intl.v8BreakIterator}catch{M=!1}let K,G=(()=>{class Q{constructor(ae){this._platformId=ae,this.isBrowser=this._platformId?(0,v.NF)(this._platformId):"object"==typeof document&&!!document,this.EDGE=this.isBrowser&&/(edge)/i.test(navigator.userAgent),this.TRIDENT=this.isBrowser&&/(msie|trident)/i.test(navigator.userAgent),this.BLINK=this.isBrowser&&!(!window.chrome&&!M)&&typeof CSS<"u"&&!this.EDGE&&!this.TRIDENT,this.WEBKIT=this.isBrowser&&/AppleWebKit/i.test(navigator.userAgent)&&!this.BLINK&&!this.EDGE&&!this.TRIDENT,this.IOS=this.isBrowser&&/iPad|iPhone|iPod/.test(navigator.userAgent)&&!("MSStream"in window),this.FIREFOX=this.isBrowser&&/(firefox|minefield)/i.test(navigator.userAgent),this.ANDROID=this.isBrowser&&/android/i.test(navigator.userAgent)&&!this.TRIDENT,this.SAFARI=this.isBrowser&&/safari/i.test(navigator.userAgent)&&this.WEBKIT}}return Q.\u0275fac=function(ae){return new(ae||Q)(s.LFG(s.Lbi))},Q.\u0275prov=s.Yz7({token:Q,factory:Q.\u0275fac,providedIn:"root"}),Q})();
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */const ue=["color","button","checkbox","date","datetime-local","email","file","hidden","image","month","number","password","radio","range","reset","search","submit","tel","text","time","url","week"];function q(){if(K)return K;if("object"!=typeof document||!document)return K=new Set(ue),K;let Q=document.createElement("input");return K=new Set(ue.filter(ee=>(Q.setAttribute("type",ee),Q.type===ee))),K
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */}let Me,Ge,Ke;function me(Q){return function ce(){if(null==Me&&typeof window<"u")try{window.addEventListener("test",null,Object.defineProperty({},"passive",{get:()=>Me=!0}))}finally{Me=Me||!1}return Me}()?Q:!!Q.capture}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */function Ve(){if(null==Ge){if("object"!=typeof document||!document||"function"!=typeof Element||!Element)return Ge=!1,Ge;if("scrollBehavior"in document.documentElement.style)Ge=!0;else{const Q=Element.prototype.scrollTo;Ge=!!Q&&!/\{\s*\[native code\]\s*\}/.test(Q.toString())}}return Ge}function qe(Q){if(function Ne(){if(null==Ke){const Q=typeof document<"u"?document.head:null;Ke=!(!Q||!Q.createShadowRoot&&!Q.attachShadow)}return Ke}()){const ee=Q.getRootNode?Q.getRootNode():null;if(typeof ShadowRoot<"u"&&ShadowRoot&&ee instanceof ShadowRoot)return ee}return null}function ht(){let Q=typeof document<"u"&&document?document.activeElement:null;for(;Q&&Q.shadowRoot;){const ee=Q.shadowRoot.activeElement;if(ee===Q)break;Q=ee}return Q}function mt(Q){return Q.composedPath?Q.composedPath()[0]:Q.target}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */function de(){return typeof __karma__<"u"&&!!__karma__||typeof jasmine<"u"&&!!jasmine||typeof jest<"u"&&!!jest||typeof Mocha<"u"&&!!Mocha}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */},4080:(St,He,y)=>{y.d(He,{C5:()=>ce,Pl:()=>ht,UE:()=>me,eL:()=>de,en:()=>Ge,u0:()=>xe});var s=y(4650),v=y(6895);
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
class Me{attach(ae){return this._attachedHost=ae,ae.attach(this)}detach(){let ae=this._attachedHost;null!=ae&&(this._attachedHost=null,ae.detach())}get isAttached(){return null!=this._attachedHost}setAttachedHost(ae){this._attachedHost=ae}}class ce extends Me{constructor(ae,Ee,Be,ot){super(),this.component=ae,this.viewContainerRef=Ee,this.injector=Be,this.componentFactoryResolver=ot}}class me extends Me{constructor(ae,Ee,Be,ot){super(),this.templateRef=ae,this.viewContainerRef=Ee,this.context=Be,this.injector=ot}get origin(){return this.templateRef.elementRef}attach(ae,Ee=this.context){return this.context=Ee,super.attach(ae)}detach(){return this.context=void 0,super.detach()}}class te extends Me{constructor(ae){super(),this.element=ae instanceof s.SBq?ae.nativeElement:ae}}class Ge{constructor(){this._isDisposed=!1,this.attachDomPortal=null}hasAttached(){return!!this._attachedPortal}attach(ae){return ae instanceof ce?(this._attachedPortal=ae,this.attachComponentPortal(ae)):ae instanceof me?(this._attachedPortal=ae,this.attachTemplatePortal(ae)):this.attachDomPortal&&ae instanceof te?(this._attachedPortal=ae,this.attachDomPortal(ae)):void 0}detach(){this._attachedPortal&&(this._attachedPortal.setAttachedHost(null),this._attachedPortal=null),this._invokeDisposeFn()}dispose(){this.hasAttached()&&this.detach(),this._invokeDisposeFn(),this._isDisposed=!0}setDisposeFn(ae){this._disposeFn=ae}_invokeDisposeFn(){this._disposeFn&&(this._disposeFn(),this._disposeFn=null)}}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
class xe extends Ge{constructor(ae,Ee,Be,ot,Se){super(),this.outletElement=ae,this._componentFactoryResolver=Ee,this._appRef=Be,this._defaultInjector=ot,this.attachDomPortal=fe=>{const Fe=fe.element,le=this._document.createComment("dom-portal");Fe.parentNode.insertBefore(le,Fe),this.outletElement.appendChild(Fe),this._attachedPortal=fe,super.setDisposeFn(()=>{le.parentNode&&le.parentNode.replaceChild(Fe,le)})},this._document=Se}attachComponentPortal(ae){const Be=(ae.componentFactoryResolver||this._componentFactoryResolver).resolveComponentFactory(ae.component);let ot;return ae.viewContainerRef?(ot=ae.viewContainerRef.createComponent(Be,ae.viewContainerRef.length,ae.injector||ae.viewContainerRef.injector),this.setDisposeFn(()=>ot.destroy())):(ot=Be.create(ae.injector||this._defaultInjector||s.zs3.NULL),this._appRef.attachView(ot.hostView),this.setDisposeFn(()=>{this._appRef.viewCount>0&&this._appRef.detachView(ot.hostView),ot.destroy()})),this.outletElement.appendChild(this._getComponentRootNode(ot)),this._attachedPortal=ae,ot}attachTemplatePortal(ae){let Ee=ae.viewContainerRef,Be=Ee.createEmbeddedView(ae.templateRef,ae.context,{injector:ae.injector});return Be.rootNodes.forEach(ot=>this.outletElement.appendChild(ot)),Be.detectChanges(),this.setDisposeFn(()=>{let ot=Ee.indexOf(Be);-1!==ot&&Ee.remove(ot)}),this._attachedPortal=ae,Be}dispose(){super.dispose(),this.outletElement.remove()}_getComponentRootNode(ae){return ae.hostView.rootNodes[0]}}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
let ht=(()=>{class ee extends Ge{constructor(Ee,Be,ot){super(),this._componentFactoryResolver=Ee,this._viewContainerRef=Be,this._isInitialized=!1,this.attached=new s.vpe,this.attachDomPortal=Se=>{const fe=Se.element,Fe=this._document.createComment("dom-portal");Se.setAttachedHost(this),fe.parentNode.insertBefore(Fe,fe),this._getRootNode().appendChild(fe),this._attachedPortal=Se,super.setDisposeFn(()=>{Fe.parentNode&&Fe.parentNode.replaceChild(fe,Fe)})},this._document=ot}get portal(){return this._attachedPortal}set portal(Ee){this.hasAttached()&&!Ee&&!this._isInitialized||(this.hasAttached()&&super.detach(),Ee&&super.attach(Ee),this._attachedPortal=Ee||null)}get attachedRef(){return this._attachedRef}ngOnInit(){this._isInitialized=!0}ngOnDestroy(){super.dispose(),this._attachedPortal=null,this._attachedRef=null}attachComponentPortal(Ee){Ee.setAttachedHost(this);const Be=null!=Ee.viewContainerRef?Ee.viewContainerRef:this._viewContainerRef,Se=(Ee.componentFactoryResolver||this._componentFactoryResolver).resolveComponentFactory(Ee.component),fe=Be.createComponent(Se,Be.length,Ee.injector||Be.injector);return Be!==this._viewContainerRef&&this._getRootNode().appendChild(fe.hostView.rootNodes[0]),super.setDisposeFn(()=>fe.destroy()),this._attachedPortal=Ee,this._attachedRef=fe,this.attached.emit(fe),fe}attachTemplatePortal(Ee){Ee.setAttachedHost(this);const Be=this._viewContainerRef.createEmbeddedView(Ee.templateRef,Ee.context,{injector:Ee.injector});return super.setDisposeFn(()=>this._viewContainerRef.clear()),this._attachedPortal=Ee,this._attachedRef=Be,this.attached.emit(Be),Be}_getRootNode(){const Ee=this._viewContainerRef.element.nativeElement;return Ee.nodeType===Ee.ELEMENT_NODE?Ee:Ee.parentNode}}return ee.\u0275fac=function(Ee){return new(Ee||ee)(s.Y36(s._Vd),s.Y36(s.s_b),s.Y36(v.K0))},ee.\u0275dir=s.lG2({type:ee,selectors:[["","cdkPortalOutlet",""]],inputs:{portal:["cdkPortalOutlet","portal"]},outputs:{attached:"attached"},exportAs:["cdkPortalOutlet"],features:[s.qOj]}),ee})(),de=(()=>{class ee{}return ee.\u0275fac=function(Ee){return new(Ee||ee)},ee.\u0275mod=s.oAB({type:ee}),ee.\u0275inj=s.cJS({}),ee})();
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */,8605:(St,He,y)=>{y.d(He,{ZD:()=>B,mF:()=>rt,Cl:()=>F,rL:()=>ct});var s=y(1281),v=y(4650),M=y(4408),G=y(727);const X={schedule(j){let b=requestAnimationFrame,T=cancelAnimationFrame;const{delegate:P}=X;P&&(b=P.requestAnimationFrame,T=P.cancelAnimationFrame);const x=b($=>{T=void 0,j($)});return new G.w0(()=>T?.(x))},requestAnimationFrame(...j){const{delegate:b}=X;return(b?.requestAnimationFrame||requestAnimationFrame)(...j)},cancelAnimationFrame(...j){const{delegate:b}=X;return(b?.cancelAnimationFrame||cancelAnimationFrame)(...j)},delegate:void 0};var ue=y(640);new class q extends ue.v{flush(b){this._active=!0;const T=this._scheduled;this._scheduled=void 0;const{actions:P}=this;let x;b=b||P.shift();do{if(x=b.execute(b.state,b.delay))break}while((b=P[0])&&b.id===T&&P.shift());if(this._active=!1,x){for(;(b=P[0])&&b.id===T&&P.shift();)b.unsubscribe();throw x}}}(class K extends M.o{constructor(b,T){super(b,T),this.scheduler=b,this.work=T}requestAsyncId(b,T,P=0){return null!==P&&P>0?super.requestAsyncId(b,T,P):(b.actions.push(this),b._scheduled||(b._scheduled=X.requestAnimationFrame(()=>b.flush(void 0))))}recycleAsyncId(b,T,P=0){if(null!=P&&P>0||null==P&&this.delay>0)return super.recycleAsyncId(b,T,P);b.actions.some(x=>x.id===T)||(X.cancelAnimationFrame(T),b._scheduled=void 0)}});let te,me=1;const Ge={};function Ve(j){return j in Ge&&(delete Ge[j],!0)}const xe={setImmediate(j){const b=me++;return Ge[b]=!0,te||(te=Promise.resolve()),te.then(()=>Ve(b)&&j()),b},clearImmediate(j){Ve(j)}},{setImmediate:Ne,clearImmediate:qe}=xe,ht={setImmediate(...j){const{delegate:b}=ht;return(b?.setImmediate||Ne)(...j)},clearImmediate(j){const{delegate:b}=ht;return(b?.clearImmediate||qe)(j)},delegate:void 0};new class de extends ue.v{flush(b){this._active=!0;const T=this._scheduled;this._scheduled=void 0;const{actions:P}=this;let x;b=b||P.shift();do{if(x=b.execute(b.state,b.delay))break}while((b=P[0])&&b.id===T&&P.shift());if(this._active=!1,x){for(;(b=P[0])&&b.id===T&&P.shift();)b.unsubscribe();throw x}}}(class mt extends M.o{constructor(b,T){super(b,T),this.scheduler=b,this.work=T}requestAsyncId(b,T,P=0){return null!==P&&P>0?super.requestAsyncId(b,T,P):(b.actions.push(this),b._scheduled||(b._scheduled=ht.setImmediate(b.flush.bind(b,void 0))))}recycleAsyncId(b,T,P=0){if(null!=P&&P>0||null==P&&this.delay>0)return super.recycleAsyncId(b,T,P);b.actions.some(x=>x.id===T)||(ht.clearImmediate(T),b._scheduled=void 0)}});var ae=y(7579),Ee=y(9646),Be=y(8306),ot=y(4968),Se=y(4986),fe=y(4482),Fe=y(8421),le=y(5403),Ye=y(5963);function xt(j,b=Se.z){return function Le(j){return(0,fe.e)((b,T)=>{let P=!1,x=null,$=null,ve=!1;const se=()=>{if($?.unsubscribe(),$=null,P){P=!1;const Rt=x;x=null,T.next(Rt)}ve&&T.complete()},Xe=()=>{$=null,ve&&T.complete()};b.subscribe((0,le.x)(T,Rt=>{P=!0,x=Rt,$||(0,Fe.Xf)(j(Rt)).subscribe($=(0,le.x)(T,se,Xe))},()=>{ve=!0,(!P||!$||$.closed)&&T.complete()}))})}(()=>(0,Ye.H)(j,b))}var Ht=y(9300),jt=y(3353),ft=y(6895),vt=y(445);
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */let rt=(()=>{class j{constructor(T,P,x){this._ngZone=T,this._platform=P,this._scrolled=new ae.x,this._globalSubscription=null,this._scrolledCount=0,this.scrollContainers=new Map,this._document=x}register(T){this.scrollContainers.has(T)||this.scrollContainers.set(T,T.elementScrolled().subscribe(()=>this._scrolled.next(T)))}deregister(T){const P=this.scrollContainers.get(T);P&&(P.unsubscribe(),this.scrollContainers.delete(T))}scrolled(T=20){return this._platform.isBrowser?new Be.y(P=>{this._globalSubscription||this._addGlobalListener();const x=T>0?this._scrolled.pipe(xt(T)).subscribe(P):this._scrolled.subscribe(P);return this._scrolledCount++,()=>{x.unsubscribe(),this._scrolledCount--,this._scrolledCount||this._removeGlobalListener()}}):(0,Ee.of)()}ngOnDestroy(){this._removeGlobalListener(),this.scrollContainers.forEach((T,P)=>this.deregister(P)),this._scrolled.complete()}ancestorScrolled(T,P){const x=this.getAncestorScrollContainers(T);return this.scrolled(P).pipe((0,Ht.h)($=>!$||x.indexOf($)>-1))}getAncestorScrollContainers(T){const P=[];return this.scrollContainers.forEach((x,$)=>{this._scrollableContainsElement($,T)&&P.push($)}),P}_getWindow(){return this._document.defaultView||window}_scrollableContainsElement(T,P){let x=(0,s.fI)(P),$=T.getElementRef().nativeElement;do{if(x==$)return!0}while(x=x.parentElement);return!1}_addGlobalListener(){this._globalSubscription=this._ngZone.runOutsideAngular(()=>{const T=this._getWindow();return(0,ot.R)(T.document,"scroll").subscribe(()=>this._scrolled.next())})}_removeGlobalListener(){this._globalSubscription&&(this._globalSubscription.unsubscribe(),this._globalSubscription=null)}}return j.\u0275fac=function(T){return new(T||j)(v.LFG(v.R0b),v.LFG(jt.t4),v.LFG(ft.K0,8))},j.\u0275prov=v.Yz7({token:j,factory:j.\u0275fac,providedIn:"root"}),j})(),ct=(()=>{class j{constructor(T,P,x){this._platform=T,this._change=new ae.x,this._changeListener=$=>{this._change.next($)},this._document=x,P.runOutsideAngular(()=>{if(T.isBrowser){const $=this._getWindow();$.addEventListener("resize",this._changeListener),$.addEventListener("orientationchange",this._changeListener)}this.change().subscribe(()=>this._viewportSize=null)})}ngOnDestroy(){if(this._platform.isBrowser){const T=this._getWindow();T.removeEventListener("resize",this._changeListener),T.removeEventListener("orientationchange",this._changeListener)}this._change.complete()}getViewportSize(){this._viewportSize||this._updateViewportSize();const T={width:this._viewportSize.width,height:this._viewportSize.height};return this._platform.isBrowser||(this._viewportSize=null),T}getViewportRect(){const T=this.getViewportScrollPosition(),{width:P,height:x}=this.getViewportSize();return{top:T.top,left:T.left,bottom:T.top+x,right:T.left+P,height:x,width:P}}getViewportScrollPosition(){if(!this._platform.isBrowser)return{top:0,left:0};const T=this._document,P=this._getWindow(),x=T.documentElement,$=x.getBoundingClientRect();return{top:-$.top||T.body.scrollTop||P.scrollY||x.scrollTop||0,left:-$.left||T.body.scrollLeft||P.scrollX||x.scrollLeft||0}}change(T=20){return T>0?this._change.pipe(xt(T)):this._change}_getWindow(){return this._document.defaultView||window}_updateViewportSize(){const T=this._getWindow();this._viewportSize=this._platform.isBrowser?{width:T.innerWidth,height:T.innerHeight}:{width:0,height:0}}}return j.\u0275fac=function(T){return new(T||j)(v.LFG(jt.t4),v.LFG(v.R0b),v.LFG(ft.K0,8))},j.\u0275prov=v.Yz7({token:j,factory:j.\u0275fac,providedIn:"root"}),j})(),B=(()=>{class j{}return j.\u0275fac=function(T){return new(T||j)},j.\u0275mod=v.oAB({type:j}),j.\u0275inj=v.cJS({}),j})(),F=(()=>{class j{}return j.\u0275fac=function(T){return new(T||j)},j.\u0275mod=v.oAB({type:j}),j.\u0275inj=v.cJS({imports:[vt.vT,B,vt.vT,B]}),j})();
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */,6895:(St,He,y)=>{y.d(He,{Do:()=>de,EM:()=>ir,HT:()=>X,JF:()=>Fn,K0:()=>ue,Mx:()=>re,NF:()=>mr,O5:()=>un,Ov:()=>Qi,RF:()=>qn,S$:()=>Ne,V_:()=>ce,Ye:()=>Q,b0:()=>mt,bD:()=>yo,ez:()=>Br,lw:()=>q,mr:()=>ht,n9:()=>Ai,q:()=>M,rS:()=>no,sg:()=>Ct,w_:()=>K});var s=y(4650);
/**
     * @license Angular v14.0.1
     * (c) 2010-2022 Google LLC. https://angular.io/
     * License: MIT
     */
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */let v=null;function M(){return v}function X(C){v||(v=C)}class K{}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */const ue=new s.OlP("DocumentToken");
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */let q=(()=>{class C{historyGo(E){throw new Error("Not implemented")}}return C.\u0275fac=function(E){return new(E||C)},C.\u0275prov=s.Yz7({token:C,factory:function(){return function Me(){return(0,s.LFG)(me)}()},providedIn:"platform"}),C})();const ce=new s.OlP("Location Initialized");let me=(()=>{class C extends q{constructor(E){super(),this._doc=E,this._init()}_init(){this.location=window.location,this._history=window.history}getBaseHrefFromDOM(){return M().getBaseHref(this._doc)}onPopState(E){const z=M().getGlobalEventTarget(this._doc,"window");return z.addEventListener("popstate",E,!1),()=>z.removeEventListener("popstate",E)}onHashChange(E){const z=M().getGlobalEventTarget(this._doc,"window");return z.addEventListener("hashchange",E,!1),()=>z.removeEventListener("hashchange",E)}get href(){return this.location.href}get protocol(){return this.location.protocol}get hostname(){return this.location.hostname}get port(){return this.location.port}get pathname(){return this.location.pathname}get search(){return this.location.search}get hash(){return this.location.hash}set pathname(E){this.location.pathname=E}pushState(E,z,we){te()?this._history.pushState(E,z,we):this.location.hash=we}replaceState(E,z,we){te()?this._history.replaceState(E,z,we):this.location.hash=we}forward(){this._history.forward()}back(){this._history.back()}historyGo(E=0){this._history.go(E)}getState(){return this._history.state}}return C.\u0275fac=function(E){return new(E||C)(s.LFG(ue))},C.\u0275prov=s.Yz7({token:C,factory:function(){return function Ge(){return new me((0,s.LFG)(ue))}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */()},providedIn:"platform"}),C})();function te(){return!!window.history.pushState}function Ve(C,V){if(0==C.length)return V;if(0==V.length)return C;let E=0;return C.endsWith("/")&&E++,V.startsWith("/")&&E++,2==E?C+V.substring(1):1==E?C+V:C+"/"+V}function xe(C){const V=C.match(/#|\?|$/),E=V&&V.index||C.length;return C.slice(0,E-("/"===C[E-1]?1:0))+C.slice(E)}function Ke(C){return C&&"?"!==C[0]?"?"+C:C}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */let Ne=(()=>{class C{historyGo(E){throw new Error("Not implemented")}}return C.\u0275fac=function(E){return new(E||C)},C.\u0275prov=s.Yz7({token:C,factory:function(){return function qe(){const C=(0,s.LFG)(ue).location;return new mt((0,s.LFG)(q),C&&C.origin||"")}()},providedIn:"root"}),C})();const ht=new s.OlP("appBaseHref");let mt=(()=>{class C extends Ne{constructor(E,z){if(super(),this._platformLocation=E,this._removeListenerFns=[],null==z&&(z=this._platformLocation.getBaseHrefFromDOM()),null==z)throw new Error("No base href set. Please provide a value for the APP_BASE_HREF token or add a base element to the document.");this._baseHref=z}ngOnDestroy(){for(;this._removeListenerFns.length;)this._removeListenerFns.pop()()}onPopState(E){this._removeListenerFns.push(this._platformLocation.onPopState(E),this._platformLocation.onHashChange(E))}getBaseHref(){return this._baseHref}prepareExternalUrl(E){return Ve(this._baseHref,E)}path(E=!1){const z=this._platformLocation.pathname+Ke(this._platformLocation.search),we=this._platformLocation.hash;return we&&E?`${z}${we}`:z}pushState(E,z,we,it){const _t=this.prepareExternalUrl(we+Ke(it));this._platformLocation.pushState(E,z,_t)}replaceState(E,z,we,it){const _t=this.prepareExternalUrl(we+Ke(it));this._platformLocation.replaceState(E,z,_t)}forward(){this._platformLocation.forward()}back(){this._platformLocation.back()}getState(){return this._platformLocation.getState()}historyGo(E=0){this._platformLocation.historyGo?.(E)}}return C.\u0275fac=function(E){return new(E||C)(s.LFG(q),s.LFG(ht,8))},C.\u0275prov=s.Yz7({token:C,factory:C.\u0275fac}),C})(),de=(()=>{class C extends Ne{constructor(E,z){super(),this._platformLocation=E,this._baseHref="",this._removeListenerFns=[],null!=z&&(this._baseHref=z)}ngOnDestroy(){for(;this._removeListenerFns.length;)this._removeListenerFns.pop()()}onPopState(E){this._removeListenerFns.push(this._platformLocation.onPopState(E),this._platformLocation.onHashChange(E))}getBaseHref(){return this._baseHref}path(E=!1){let z=this._platformLocation.hash;return null==z&&(z="#"),z.length>0?z.substring(1):z}prepareExternalUrl(E){const z=Ve(this._baseHref,E);return z.length>0?"#"+z:z}pushState(E,z,we,it){let _t=this.prepareExternalUrl(we+Ke(it));0==_t.length&&(_t=this._platformLocation.pathname),this._platformLocation.pushState(E,z,_t)}replaceState(E,z,we,it){let _t=this.prepareExternalUrl(we+Ke(it));0==_t.length&&(_t=this._platformLocation.pathname),this._platformLocation.replaceState(E,z,_t)}forward(){this._platformLocation.forward()}back(){this._platformLocation.back()}getState(){return this._platformLocation.getState()}historyGo(E=0){this._platformLocation.historyGo?.(E)}}return C.\u0275fac=function(E){return new(E||C)(s.LFG(q),s.LFG(ht,8))},C.\u0275prov=s.Yz7({token:C,factory:C.\u0275fac}),C})(),Q=(()=>{class C{constructor(E){this._subject=new s.vpe,this._urlChangeListeners=[],this._urlChangeSubscription=null,this._locationStrategy=E;const z=this._locationStrategy.getBaseHref();this._baseHref=xe(Ee(z)),this._locationStrategy.onPopState(we=>{this._subject.emit({url:this.path(!0),pop:!0,state:we.state,type:we.type})})}ngOnDestroy(){this._urlChangeSubscription?.unsubscribe(),this._urlChangeListeners=[]}path(E=!1){return this.normalize(this._locationStrategy.path(E))}getState(){return this._locationStrategy.getState()}isCurrentPathEqualTo(E,z=""){return this.path()==this.normalize(E+Ke(z))}normalize(E){return C.stripTrailingSlash(function ae(C,V){return C&&V.startsWith(C)?V.substring(C.length):V}(this._baseHref,Ee(E)))}prepareExternalUrl(E){return E&&"/"!==E[0]&&(E="/"+E),this._locationStrategy.prepareExternalUrl(E)}go(E,z="",we=null){this._locationStrategy.pushState(we,"",E,z),this._notifyUrlChangeListeners(this.prepareExternalUrl(E+Ke(z)),we)}replaceState(E,z="",we=null){this._locationStrategy.replaceState(we,"",E,z),this._notifyUrlChangeListeners(this.prepareExternalUrl(E+Ke(z)),we)}forward(){this._locationStrategy.forward()}back(){this._locationStrategy.back()}historyGo(E=0){this._locationStrategy.historyGo?.(E)}onUrlChange(E){return this._urlChangeListeners.push(E),this._urlChangeSubscription||(this._urlChangeSubscription=this.subscribe(z=>{this._notifyUrlChangeListeners(z.url,z.state)})),()=>{const z=this._urlChangeListeners.indexOf(E);this._urlChangeListeners.splice(z,1),0===this._urlChangeListeners.length&&(this._urlChangeSubscription?.unsubscribe(),this._urlChangeSubscription=null)}}_notifyUrlChangeListeners(E="",z){this._urlChangeListeners.forEach(we=>we(E,z))}subscribe(E,z,we){return this._subject.subscribe({next:E,error:z,complete:we})}}return C.normalizeQueryParams=Ke,C.joinWithSlash=Ve,C.stripTrailingSlash=xe,C.\u0275fac=function(E){return new(E||C)(s.LFG(Ne))},C.\u0275prov=s.Yz7({token:C,factory:function(){return function ee(){return new Q((0,s.LFG)(Ne))}()},providedIn:"root"}),C})();
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */function Ee(C){return C.replace(/\/index.html$/,"")}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
function re(C,V){V=encodeURIComponent(V);for(const E of C.split(";")){const z=E.indexOf("="),[we,it]=-1==z?[E,""]:[E.slice(0,z),E.slice(z+1)];if(we.trim()===V)return decodeURIComponent(it)}return null}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
class et{constructor(V,E,z,we){this.$implicit=V,this.ngForOf=E,this.index=z,this.count=we}get first(){return 0===this.index}get last(){return this.index===this.count-1}get even(){return this.index%2==0}get odd(){return!this.even}}let Ct=(()=>{class C{constructor(E,z,we){this._viewContainer=E,this._template=z,this._differs=we,this._ngForOf=null,this._ngForOfDirty=!0,this._differ=null}set ngForOf(E){this._ngForOf=E,this._ngForOfDirty=!0}set ngForTrackBy(E){this._trackByFn=E}get ngForTrackBy(){return this._trackByFn}set ngForTemplate(E){E&&(this._template=E)}ngDoCheck(){if(this._ngForOfDirty){this._ngForOfDirty=!1;const E=this._ngForOf;!this._differ&&E&&(this._differ=this._differs.find(E).create(this.ngForTrackBy))}if(this._differ){const E=this._differ.diff(this._ngForOf);E&&this._applyChanges(E)}}_applyChanges(E){const z=this._viewContainer;E.forEachOperation((we,it,_t)=>{if(null==we.previousIndex)z.createEmbeddedView(this._template,new et(we.item,this._ngForOf,-1,-1),null===_t?void 0:_t);else if(null==_t)z.remove(null===it?void 0:it);else if(null!==it){const kt=z.get(it);z.move(kt,_t),$t(kt,we)}});for(let we=0,it=z.length;we<it;we++){const kt=z.get(we).context;kt.index=we,kt.count=it,kt.ngForOf=this._ngForOf}E.forEachIdentityChange(we=>{$t(z.get(we.currentIndex),we)})}static ngTemplateContextGuard(E,z){return!0}}return C.\u0275fac=function(E){return new(E||C)(s.Y36(s.s_b),s.Y36(s.Rgc),s.Y36(s.ZZ4))},C.\u0275dir=s.lG2({type:C,selectors:[["","ngFor","","ngForOf",""]],inputs:{ngForOf:"ngForOf",ngForTrackBy:"ngForTrackBy",ngForTemplate:"ngForTemplate"}}),C})();function $t(C,V){C.context.$implicit=V.item}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
let un=(()=>{class C{constructor(E,z){this._viewContainer=E,this._context=new tn,this._thenTemplateRef=null,this._elseTemplateRef=null,this._thenViewRef=null,this._elseViewRef=null,this._thenTemplateRef=z}set ngIf(E){this._context.$implicit=this._context.ngIf=E,this._updateView()}set ngIfThen(E){Cn("ngIfThen",E),this._thenTemplateRef=E,this._thenViewRef=null,this._updateView()}set ngIfElse(E){Cn("ngIfElse",E),this._elseTemplateRef=E,this._elseViewRef=null,this._updateView()}_updateView(){this._context.$implicit?this._thenViewRef||(this._viewContainer.clear(),this._elseViewRef=null,this._thenTemplateRef&&(this._thenViewRef=this._viewContainer.createEmbeddedView(this._thenTemplateRef,this._context))):this._elseViewRef||(this._viewContainer.clear(),this._thenViewRef=null,this._elseTemplateRef&&(this._elseViewRef=this._viewContainer.createEmbeddedView(this._elseTemplateRef,this._context)))}static ngTemplateContextGuard(E,z){return!0}}return C.\u0275fac=function(E){return new(E||C)(s.Y36(s.s_b),s.Y36(s.Rgc))},C.\u0275dir=s.lG2({type:C,selectors:[["","ngIf",""]],inputs:{ngIf:"ngIf",ngIfThen:"ngIfThen",ngIfElse:"ngIfElse"}}),C})();class tn{constructor(){this.$implicit=null,this.ngIf=null}}function Cn(C,V){if(V&&!V.createEmbeddedView)throw new Error(`${C} must be a TemplateRef, but received '${(0,s.AaK)(V)}'.`)}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */class xn{constructor(V,E){this._viewContainerRef=V,this._templateRef=E,this._created=!1}create(){this._created=!0,this._viewContainerRef.createEmbeddedView(this._templateRef)}destroy(){this._created=!1,this._viewContainerRef.clear()}enforceState(V){V&&!this._created?this.create():!V&&this._created&&this.destroy()}}let qn=(()=>{class C{constructor(){this._defaultUsed=!1,this._caseCount=0,this._lastCaseCheckIndex=0,this._lastCasesMatched=!1}set ngSwitch(E){this._ngSwitch=E,0===this._caseCount&&this._updateDefaultCases(!0)}_addCase(){return this._caseCount++}_addDefault(E){this._defaultViews||(this._defaultViews=[]),this._defaultViews.push(E)}_matchCase(E){const z=E==this._ngSwitch;return this._lastCasesMatched=this._lastCasesMatched||z,this._lastCaseCheckIndex++,this._lastCaseCheckIndex===this._caseCount&&(this._updateDefaultCases(!this._lastCasesMatched),this._lastCaseCheckIndex=0,this._lastCasesMatched=!1),z}_updateDefaultCases(E){if(this._defaultViews&&E!==this._defaultUsed){this._defaultUsed=E;for(let z=0;z<this._defaultViews.length;z++)this._defaultViews[z].enforceState(E)}}}return C.\u0275fac=function(E){return new(E||C)},C.\u0275dir=s.lG2({type:C,selectors:[["","ngSwitch",""]],inputs:{ngSwitch:"ngSwitch"}}),C})(),Ai=(()=>{class C{constructor(E,z,we){this.ngSwitch=we,we._addCase(),this._view=new xn(E,z)}ngDoCheck(){this._view.enforceState(this.ngSwitch._matchCase(this.ngSwitchCase))}}return C.\u0275fac=function(E){return new(E||C)(s.Y36(s.s_b),s.Y36(s.Rgc),s.Y36(qn,9))},C.\u0275dir=s.lG2({type:C,selectors:[["","ngSwitchCase",""]],inputs:{ngSwitchCase:"ngSwitchCase"}}),C})();
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
function wi(C,V){return new s.vHH(2100,"")}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */class Fr{createSubscription(V,E){return V.subscribe({next:E,error:z=>{throw z}})}dispose(V){V.unsubscribe()}}class Xi{createSubscription(V,E){return V.then(E,z=>{throw z})}dispose(V){}}const hr=new Xi,kr=new Fr;let Qi=(()=>{class C{constructor(E){this._latestValue=null,this._subscription=null,this._obj=null,this._strategy=null,this._ref=E}ngOnDestroy(){this._subscription&&this._dispose(),this._ref=null}transform(E){return this._obj?E!==this._obj?(this._dispose(),this.transform(E)):this._latestValue:(E&&this._subscribe(E),this._latestValue)}_subscribe(E){this._obj=E,this._strategy=this._selectStrategy(E),this._subscription=this._strategy.createSubscription(E,z=>this._updateLatestValue(E,z))}_selectStrategy(E){if((0,s.QGY)(E))return hr;if((0,s.F4k)(E))return kr;throw wi()}_dispose(){this._strategy.dispose(this._subscription),this._latestValue=null,this._subscription=null,this._obj=null}_updateLatestValue(E,z){E===this._obj&&(this._latestValue=z,this._ref.markForCheck())}}return C.\u0275fac=function(E){return new(E||C)(s.Y36(s.sBO,16))},C.\u0275pipe=s.Yjl({name:"async",type:C,pure:!1}),C})();
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */const Li=/(?:[0-9A-Za-z\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u052F\u0531-\u0556\u0559\u0560-\u0588\u05D0-\u05EA\u05EF-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u0860-\u086A\u0870-\u0887\u0889-\u088E\u08A0-\u08C9\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0980\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u09FC\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0AF9\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D\u0C58-\u0C5A\u0C5D\u0C60\u0C61\u0C80\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D04-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D54-\u0D56\u0D5F-\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E86-\u0E8A\u0E8C-\u0EA3\u0EA5\u0EA7-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16F1-\u16F8\u1700-\u1711\u171F-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1878\u1880-\u1884\u1887-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191E\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4C\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1C80-\u1C88\u1C90-\u1CBA\u1CBD-\u1CBF\u1CE9-\u1CEC\u1CEE-\u1CF3\u1CF5\u1CF6\u1CFA\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2183\u2184\u2C00-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2E2F\u3005\u3006\u3031-\u3035\u303B\u303C\u3041-\u3096\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312F\u3131-\u318E\u31A0-\u31BF\u31F0-\u31FF\u3400-\u4DBF\u4E00-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA67F-\uA69D\uA6A0-\uA6E5\uA717-\uA71F\uA722-\uA788\uA78B-\uA7CA\uA7D0\uA7D1\uA7D3\uA7D5-\uA7D9\uA7F2-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA8FD\uA8FE\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uA9E0-\uA9E4\uA9E6-\uA9EF\uA9FA-\uA9FE\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA7E-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB69\uAB70-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]|\uD800[\uDC00-\uDC0B\uDC0D-\uDC26\uDC28-\uDC3A\uDC3C\uDC3D\uDC3F-\uDC4D\uDC50-\uDC5D\uDC80-\uDCFA\uDE80-\uDE9C\uDEA0-\uDED0\uDF00-\uDF1F\uDF2D-\uDF40\uDF42-\uDF49\uDF50-\uDF75\uDF80-\uDF9D\uDFA0-\uDFC3\uDFC8-\uDFCF]|\uD801[\uDC00-\uDC9D\uDCB0-\uDCD3\uDCD8-\uDCFB\uDD00-\uDD27\uDD30-\uDD63\uDD70-\uDD7A\uDD7C-\uDD8A\uDD8C-\uDD92\uDD94\uDD95\uDD97-\uDDA1\uDDA3-\uDDB1\uDDB3-\uDDB9\uDDBB\uDDBC\uDE00-\uDF36\uDF40-\uDF55\uDF60-\uDF67\uDF80-\uDF85\uDF87-\uDFB0\uDFB2-\uDFBA]|\uD802[\uDC00-\uDC05\uDC08\uDC0A-\uDC35\uDC37\uDC38\uDC3C\uDC3F-\uDC55\uDC60-\uDC76\uDC80-\uDC9E\uDCE0-\uDCF2\uDCF4\uDCF5\uDD00-\uDD15\uDD20-\uDD39\uDD80-\uDDB7\uDDBE\uDDBF\uDE00\uDE10-\uDE13\uDE15-\uDE17\uDE19-\uDE35\uDE60-\uDE7C\uDE80-\uDE9C\uDEC0-\uDEC7\uDEC9-\uDEE4\uDF00-\uDF35\uDF40-\uDF55\uDF60-\uDF72\uDF80-\uDF91]|\uD803[\uDC00-\uDC48\uDC80-\uDCB2\uDCC0-\uDCF2\uDD00-\uDD23\uDE80-\uDEA9\uDEB0\uDEB1\uDF00-\uDF1C\uDF27\uDF30-\uDF45\uDF70-\uDF81\uDFB0-\uDFC4\uDFE0-\uDFF6]|\uD804[\uDC03-\uDC37\uDC71\uDC72\uDC75\uDC83-\uDCAF\uDCD0-\uDCE8\uDD03-\uDD26\uDD44\uDD47\uDD50-\uDD72\uDD76\uDD83-\uDDB2\uDDC1-\uDDC4\uDDDA\uDDDC\uDE00-\uDE11\uDE13-\uDE2B\uDE80-\uDE86\uDE88\uDE8A-\uDE8D\uDE8F-\uDE9D\uDE9F-\uDEA8\uDEB0-\uDEDE\uDF05-\uDF0C\uDF0F\uDF10\uDF13-\uDF28\uDF2A-\uDF30\uDF32\uDF33\uDF35-\uDF39\uDF3D\uDF50\uDF5D-\uDF61]|\uD805[\uDC00-\uDC34\uDC47-\uDC4A\uDC5F-\uDC61\uDC80-\uDCAF\uDCC4\uDCC5\uDCC7\uDD80-\uDDAE\uDDD8-\uDDDB\uDE00-\uDE2F\uDE44\uDE80-\uDEAA\uDEB8\uDF00-\uDF1A\uDF40-\uDF46]|\uD806[\uDC00-\uDC2B\uDCA0-\uDCDF\uDCFF-\uDD06\uDD09\uDD0C-\uDD13\uDD15\uDD16\uDD18-\uDD2F\uDD3F\uDD41\uDDA0-\uDDA7\uDDAA-\uDDD0\uDDE1\uDDE3\uDE00\uDE0B-\uDE32\uDE3A\uDE50\uDE5C-\uDE89\uDE9D\uDEB0-\uDEF8]|\uD807[\uDC00-\uDC08\uDC0A-\uDC2E\uDC40\uDC72-\uDC8F\uDD00-\uDD06\uDD08\uDD09\uDD0B-\uDD30\uDD46\uDD60-\uDD65\uDD67\uDD68\uDD6A-\uDD89\uDD98\uDEE0-\uDEF2\uDFB0]|\uD808[\uDC00-\uDF99]|\uD809[\uDC80-\uDD43]|\uD80B[\uDF90-\uDFF0]|[\uD80C\uD81C-\uD820\uD822\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872\uD874-\uD879\uD880-\uD883][\uDC00-\uDFFF]|\uD80D[\uDC00-\uDC2E]|\uD811[\uDC00-\uDE46]|\uD81A[\uDC00-\uDE38\uDE40-\uDE5E\uDE70-\uDEBE\uDED0-\uDEED\uDF00-\uDF2F\uDF40-\uDF43\uDF63-\uDF77\uDF7D-\uDF8F]|\uD81B[\uDE40-\uDE7F\uDF00-\uDF4A\uDF50\uDF93-\uDF9F\uDFE0\uDFE1\uDFE3]|\uD821[\uDC00-\uDFF7]|\uD823[\uDC00-\uDCD5\uDD00-\uDD08]|\uD82B[\uDFF0-\uDFF3\uDFF5-\uDFFB\uDFFD\uDFFE]|\uD82C[\uDC00-\uDD22\uDD50-\uDD52\uDD64-\uDD67\uDD70-\uDEFB]|\uD82F[\uDC00-\uDC6A\uDC70-\uDC7C\uDC80-\uDC88\uDC90-\uDC99]|\uD835[\uDC00-\uDC54\uDC56-\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDEA5\uDEA8-\uDEC0\uDEC2-\uDEDA\uDEDC-\uDEFA\uDEFC-\uDF14\uDF16-\uDF34\uDF36-\uDF4E\uDF50-\uDF6E\uDF70-\uDF88\uDF8A-\uDFA8\uDFAA-\uDFC2\uDFC4-\uDFCB]|\uD837[\uDF00-\uDF1E]|\uD838[\uDD00-\uDD2C\uDD37-\uDD3D\uDD4E\uDE90-\uDEAD\uDEC0-\uDEEB]|\uD839[\uDFE0-\uDFE6\uDFE8-\uDFEB\uDFED\uDFEE\uDFF0-\uDFFE]|\uD83A[\uDC00-\uDCC4\uDD00-\uDD43\uDD4B]|\uD83B[\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB]|\uD869[\uDC00-\uDEDF\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF38\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1\uDEB0-\uDFFF]|\uD87A[\uDC00-\uDFE0]|\uD87E[\uDC00-\uDE1D]|\uD884[\uDC00-\uDF4A])\S*/g;let no=(()=>{class C{transform(E){if(null==E)return null;if("string"!=typeof E)throw wi();return E.replace(Li,z=>z[0].toUpperCase()+z.slice(1).toLowerCase())}}return C.\u0275fac=function(E){return new(E||C)},C.\u0275pipe=s.Yjl({name:"titlecase",type:C,pure:!0}),C})(),Br=(()=>{class C{}return C.\u0275fac=function(E){return new(E||C)},C.\u0275mod=s.oAB({type:C}),C.\u0275inj=s.cJS({}),C})();
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
const yo="browser";function mr(C){return C===yo}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
let ir=(()=>{class C{}return C.\u0275prov=(0,s.Yz7)({token:C,providedIn:"root",factory:()=>new _i((0,s.LFG)(ue),window)}),C})();class _i{constructor(V,E){this.document=V,this.window=E,this.offset=()=>[0,0]}setOffset(V){this.offset=Array.isArray(V)?()=>V:V}getScrollPosition(){return this.supportsScrolling()?[this.window.pageXOffset,this.window.pageYOffset]:[0,0]}scrollToPosition(V){this.supportsScrolling()&&this.window.scrollTo(V[0],V[1])}scrollToAnchor(V){if(!this.supportsScrolling())return;const E=function ti(C,V){const E=C.getElementById(V)||C.getElementsByName(V)[0];if(E)return E;if("function"==typeof C.createTreeWalker&&C.body&&(C.body.createShadowRoot||C.body.attachShadow)){const z=C.createTreeWalker(C.body,NodeFilter.SHOW_ELEMENT);let we=z.currentNode;for(;we;){const it=we.shadowRoot;if(it){const _t=it.getElementById(V)||it.querySelector(`[name="${V}"]`);if(_t)return _t}we=z.nextNode()}}return null}(this.document,V);E&&(this.scrollToElement(E),E.focus())}setHistoryScrollRestoration(V){if(this.supportScrollRestoration()){const E=this.window.history;E&&E.scrollRestoration&&(E.scrollRestoration=V)}}scrollToElement(V){const E=V.getBoundingClientRect(),z=E.left+this.window.pageXOffset,we=E.top+this.window.pageYOffset,it=this.offset();this.window.scrollTo(z-it[0],we-it[1])}supportScrollRestoration(){try{if(!this.supportsScrolling())return!1;const V=Ln(this.window.history)||Ln(Object.getPrototypeOf(this.window.history));return!(!V||!V.writable&&!V.set)}catch{return!1}}supportsScrolling(){try{return!!this.window&&!!this.window.scrollTo&&"pageXOffset"in this.window}catch{return!1}}}function Ln(C){return Object.getOwnPropertyDescriptor(C,"scrollRestoration")}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
class Fn{}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */},529:(St,He,y)=>{y.d(He,{JF:()=>j,TP:()=>xt,Zn:()=>fe,eN:()=>Le});var s=y(6895),v=y(4650),M=y(9646),G=y(8306),X=y(4351),K=y(9300),ue=y(4004);
/**
     * @license Angular v14.0.1
     * (c) 2010-2022 Google LLC. https://angular.io/
     * License: MIT
     */
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */class q{}class Me{}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */class ce{constructor(x){this.normalizedNames=new Map,this.lazyUpdate=null,x?this.lazyInit="string"==typeof x?()=>{this.headers=new Map,x.split("\n").forEach($=>{const ve=$.indexOf(":");if(ve>0){const se=$.slice(0,ve),Xe=se.toLowerCase(),Rt=$.slice(ve+1).trim();this.maybeSetNormalizedName(se,Xe),this.headers.has(Xe)?this.headers.get(Xe).push(Rt):this.headers.set(Xe,[Rt])}})}:()=>{this.headers=new Map,Object.keys(x).forEach($=>{let ve=x[$];const se=$.toLowerCase();"string"==typeof ve&&(ve=[ve]),ve.length>0&&(this.headers.set(se,ve),this.maybeSetNormalizedName($,se))})}:this.headers=new Map}has(x){return this.init(),this.headers.has(x.toLowerCase())}get(x){this.init();const $=this.headers.get(x.toLowerCase());return $&&$.length>0?$[0]:null}keys(){return this.init(),Array.from(this.normalizedNames.values())}getAll(x){return this.init(),this.headers.get(x.toLowerCase())||null}append(x,$){return this.clone({name:x,value:$,op:"a"})}set(x,$){return this.clone({name:x,value:$,op:"s"})}delete(x,$){return this.clone({name:x,value:$,op:"d"})}maybeSetNormalizedName(x,$){this.normalizedNames.has($)||this.normalizedNames.set($,x)}init(){this.lazyInit&&(this.lazyInit instanceof ce?this.copyFrom(this.lazyInit):this.lazyInit(),this.lazyInit=null,this.lazyUpdate&&(this.lazyUpdate.forEach(x=>this.applyUpdate(x)),this.lazyUpdate=null))}copyFrom(x){x.init(),Array.from(x.headers.keys()).forEach($=>{this.headers.set($,x.headers.get($)),this.normalizedNames.set($,x.normalizedNames.get($))})}clone(x){const $=new ce;return $.lazyInit=this.lazyInit&&this.lazyInit instanceof ce?this.lazyInit:this,$.lazyUpdate=(this.lazyUpdate||[]).concat([x]),$}applyUpdate(x){const $=x.name.toLowerCase();switch(x.op){case"a":case"s":let ve=x.value;if("string"==typeof ve&&(ve=[ve]),0===ve.length)return;this.maybeSetNormalizedName(x.name,$);const se=("a"===x.op?this.headers.get($):void 0)||[];se.push(...ve),this.headers.set($,se);break;case"d":const Xe=x.value;if(Xe){let Rt=this.headers.get($);if(!Rt)return;Rt=Rt.filter(Ut=>-1===Xe.indexOf(Ut)),0===Rt.length?(this.headers.delete($),this.normalizedNames.delete($)):this.headers.set($,Rt)}else this.headers.delete($),this.normalizedNames.delete($)}}forEach(x){this.init(),Array.from(this.normalizedNames.keys()).forEach($=>x(this.normalizedNames.get($),this.headers.get($)))}}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */class me{encodeKey(x){return xe(x)}encodeValue(x){return xe(x)}decodeKey(x){return decodeURIComponent(x)}decodeValue(x){return decodeURIComponent(x)}}const Ge=/%(\d[a-f0-9])/gi,Ve={40:"@","3A":":",24:"$","2C":",","3B":";","3D":"=","3F":"?","2F":"/"};function xe(P){return encodeURIComponent(P).replace(Ge,(x,$)=>Ve[$]??x)}function Ke(P){return`${P}`}class Ne{constructor(x={}){if(this.updates=null,this.cloneFrom=null,this.encoder=x.encoder||new me,x.fromString){if(x.fromObject)throw new Error("Cannot specify both fromString and fromObject.");this.map=function te(P,x){const $=new Map;return P.length>0&&P.replace(/^\?/,"").split("&").forEach(se=>{const Xe=se.indexOf("="),[Rt,Ut]=-1==Xe?[x.decodeKey(se),""]:[x.decodeKey(se.slice(0,Xe)),x.decodeValue(se.slice(Xe+1))],yt=$.get(Rt)||[];yt.push(Ut),$.set(Rt,yt)}),$}(x.fromString,this.encoder)}else x.fromObject?(this.map=new Map,Object.keys(x.fromObject).forEach($=>{const ve=x.fromObject[$],se=Array.isArray(ve)?ve.map(Ke):[Ke(ve)];this.map.set($,se)})):this.map=null}has(x){return this.init(),this.map.has(x)}get(x){this.init();const $=this.map.get(x);return $?$[0]:null}getAll(x){return this.init(),this.map.get(x)||null}keys(){return this.init(),Array.from(this.map.keys())}append(x,$){return this.clone({param:x,value:$,op:"a"})}appendAll(x){const $=[];return Object.keys(x).forEach(ve=>{const se=x[ve];Array.isArray(se)?se.forEach(Xe=>{$.push({param:ve,value:Xe,op:"a"})}):$.push({param:ve,value:se,op:"a"})}),this.clone($)}set(x,$){return this.clone({param:x,value:$,op:"s"})}delete(x,$){return this.clone({param:x,value:$,op:"d"})}toString(){return this.init(),this.keys().map(x=>{const $=this.encoder.encodeKey(x);return this.map.get(x).map(ve=>$+"="+this.encoder.encodeValue(ve)).join("&")}).filter(x=>""!==x).join("&")}clone(x){const $=new Ne({encoder:this.encoder});return $.cloneFrom=this.cloneFrom||this,$.updates=(this.updates||[]).concat(x),$}init(){null===this.map&&(this.map=new Map),null!==this.cloneFrom&&(this.cloneFrom.init(),this.cloneFrom.keys().forEach(x=>this.map.set(x,this.cloneFrom.map.get(x))),this.updates.forEach(x=>{switch(x.op){case"a":case"s":const $=("a"===x.op?this.map.get(x.param):void 0)||[];$.push(Ke(x.value)),this.map.set(x.param,$);break;case"d":if(void 0===x.value){this.map.delete(x.param);break}{let ve=this.map.get(x.param)||[];const se=ve.indexOf(Ke(x.value));-1!==se&&ve.splice(se,1),ve.length>0?this.map.set(x.param,ve):this.map.delete(x.param)}}}),this.cloneFrom=this.updates=null)}}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */class ht{constructor(){this.map=new Map}set(x,$){return this.map.set(x,$),this}get(x){return this.map.has(x)||this.map.set(x,x.defaultValue()),this.map.get(x)}delete(x){return this.map.delete(x),this}has(x){return this.map.has(x)}keys(){return this.map.keys()}}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */function de(P){return typeof ArrayBuffer<"u"&&P instanceof ArrayBuffer}function Q(P){return typeof Blob<"u"&&P instanceof Blob}function ee(P){return typeof FormData<"u"&&P instanceof FormData}class Ee{constructor(x,$,ve,se){let Xe;if(this.url=$,this.body=null,this.reportProgress=!1,this.withCredentials=!1,this.responseType="json",this.method=x.toUpperCase(),function mt(P){switch(P){case"DELETE":case"GET":case"HEAD":case"OPTIONS":case"JSONP":return!1;default:return!0}}(this.method)||se?(this.body=void 0!==ve?ve:null,Xe=se):Xe=ve,Xe&&(this.reportProgress=!!Xe.reportProgress,this.withCredentials=!!Xe.withCredentials,Xe.responseType&&(this.responseType=Xe.responseType),Xe.headers&&(this.headers=Xe.headers),Xe.context&&(this.context=Xe.context),Xe.params&&(this.params=Xe.params)),this.headers||(this.headers=new ce),this.context||(this.context=new ht),this.params){const Rt=this.params.toString();if(0===Rt.length)this.urlWithParams=$;else{const Ut=$.indexOf("?");this.urlWithParams=$+(-1===Ut?"?":Ut<$.length-1?"&":"")+Rt}}else this.params=new Ne,this.urlWithParams=$}serializeBody(){return null===this.body?null:de(this.body)||Q(this.body)||ee(this.body)||function ae(P){return typeof URLSearchParams<"u"&&P instanceof URLSearchParams}(this.body)||"string"==typeof this.body?this.body:this.body instanceof Ne?this.body.toString():"object"==typeof this.body||"boolean"==typeof this.body||Array.isArray(this.body)?JSON.stringify(this.body):this.body.toString()}detectContentTypeHeader(){return null===this.body||ee(this.body)?null:Q(this.body)?this.body.type||null:de(this.body)?null:"string"==typeof this.body?"text/plain":this.body instanceof Ne?"application/x-www-form-urlencoded;charset=UTF-8":"object"==typeof this.body||"number"==typeof this.body||"boolean"==typeof this.body?"application/json":null}clone(x={}){const $=x.method||this.method,ve=x.url||this.url,se=x.responseType||this.responseType,Xe=void 0!==x.body?x.body:this.body,Rt=void 0!==x.withCredentials?x.withCredentials:this.withCredentials,Ut=void 0!==x.reportProgress?x.reportProgress:this.reportProgress;let yt=x.headers||this.headers,qt=x.params||this.params;const gn=x.context??this.context;return void 0!==x.setHeaders&&(yt=Object.keys(x.setHeaders).reduce((Qe,he)=>Qe.set(he,x.setHeaders[he]),yt)),x.setParams&&(qt=Object.keys(x.setParams).reduce((Qe,he)=>Qe.set(he,x.setParams[he]),qt)),new Ee($,ve,Xe,{params:qt,headers:yt,context:gn,reportProgress:Ut,responseType:se,withCredentials:Rt})}}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */var Be=(()=>((Be=Be||{})[Be.Sent=0]="Sent",Be[Be.UploadProgress=1]="UploadProgress",Be[Be.ResponseHeader=2]="ResponseHeader",Be[Be.DownloadProgress=3]="DownloadProgress",Be[Be.Response=4]="Response",Be[Be.User=5]="User",Be))();class ot{constructor(x,$=200,ve="OK"){this.headers=x.headers||new ce,this.status=void 0!==x.status?x.status:$,this.statusText=x.statusText||ve,this.url=x.url||null,this.ok=this.status>=200&&this.status<300}}class Se extends ot{constructor(x={}){super(x),this.type=Be.ResponseHeader}clone(x={}){return new Se({headers:x.headers||this.headers,status:void 0!==x.status?x.status:this.status,statusText:x.statusText||this.statusText,url:x.url||this.url||void 0})}}class fe extends ot{constructor(x={}){super(x),this.type=Be.Response,this.body=void 0!==x.body?x.body:null}clone(x={}){return new fe({body:void 0!==x.body?x.body:this.body,headers:x.headers||this.headers,status:void 0!==x.status?x.status:this.status,statusText:x.statusText||this.statusText,url:x.url||this.url||void 0})}}class Fe extends ot{constructor(x){super(x,0,"Unknown Error"),this.name="HttpErrorResponse",this.ok=!1,this.message=this.status>=200&&this.status<300?`Http failure during parsing for ${x.url||"(unknown url)"}`:`Http failure response for ${x.url||"(unknown url)"}: ${x.status} ${x.statusText}`,this.error=x.error||null}}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */function le(P,x){return{body:x,headers:P.headers,context:P.context,observe:P.observe,params:P.params,reportProgress:P.reportProgress,responseType:P.responseType,withCredentials:P.withCredentials}}let Le=(()=>{class P{constructor($){this.handler=$}request($,ve,se={}){let Xe;if($ instanceof Ee)Xe=$;else{let yt,qt;yt=se.headers instanceof ce?se.headers:new ce(se.headers),se.params&&(qt=se.params instanceof Ne?se.params:new Ne({fromObject:se.params})),Xe=new Ee($,ve,void 0!==se.body?se.body:null,{headers:yt,context:se.context,params:qt,reportProgress:se.reportProgress,responseType:se.responseType||"json",withCredentials:se.withCredentials})}const Rt=(0,M.of)(Xe).pipe((0,X.b)(yt=>this.handler.handle(yt)));if($ instanceof Ee||"events"===se.observe)return Rt;const Ut=Rt.pipe((0,K.h)(yt=>yt instanceof fe));switch(se.observe||"body"){case"body":switch(Xe.responseType){case"arraybuffer":return Ut.pipe((0,ue.U)(yt=>{if(null!==yt.body&&!(yt.body instanceof ArrayBuffer))throw new Error("Response is not an ArrayBuffer.");return yt.body}));case"blob":return Ut.pipe((0,ue.U)(yt=>{if(null!==yt.body&&!(yt.body instanceof Blob))throw new Error("Response is not a Blob.");return yt.body}));case"text":return Ut.pipe((0,ue.U)(yt=>{if(null!==yt.body&&"string"!=typeof yt.body)throw new Error("Response is not a string.");return yt.body}));default:return Ut.pipe((0,ue.U)(yt=>yt.body))}case"response":return Ut;default:throw new Error(`Unreachable: unhandled observe type ${se.observe}}`)}}delete($,ve={}){return this.request("DELETE",$,ve)}get($,ve={}){return this.request("GET",$,ve)}head($,ve={}){return this.request("HEAD",$,ve)}jsonp($,ve){return this.request("JSONP",$,{params:(new Ne).append(ve,"JSONP_CALLBACK"),observe:"body",responseType:"json"})}options($,ve={}){return this.request("OPTIONS",$,ve)}patch($,ve,se={}){return this.request("PATCH",$,le(se,ve))}post($,ve,se={}){return this.request("POST",$,le(se,ve))}put($,ve,se={}){return this.request("PUT",$,le(se,ve))}}return P.\u0275fac=function($){return new($||P)(v.LFG(q))},P.\u0275prov=v.Yz7({token:P,factory:P.\u0275fac}),P})();
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */class Ye{constructor(x,$){this.next=x,this.interceptor=$}handle(x){return this.interceptor.intercept(x,this.next)}}const xt=new v.OlP("HTTP_INTERCEPTORS");let Ht=(()=>{class P{intercept($,ve){return ve.handle($)}}return P.\u0275fac=function($){return new($||P)},P.\u0275prov=v.Yz7({token:P,factory:P.\u0275fac}),P})();
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
const nt=/^\)\]\}',?\n/;let je=(()=>{class P{constructor($){this.xhrFactory=$}handle($){if("JSONP"===$.method)throw new Error("Attempted to construct Jsonp request without HttpClientJsonpModule installed.");return new G.y(ve=>{const se=this.xhrFactory.build();if(se.open($.method,$.urlWithParams),$.withCredentials&&(se.withCredentials=!0),$.headers.forEach((ge,Ue)=>se.setRequestHeader(ge,Ue.join(","))),$.headers.has("Accept")||se.setRequestHeader("Accept","application/json, text/plain, */*"),!$.headers.has("Content-Type")){const ge=$.detectContentTypeHeader();null!==ge&&se.setRequestHeader("Content-Type",ge)}if($.responseType){const ge=$.responseType.toLowerCase();se.responseType="json"!==ge?ge:"text"}const Xe=$.serializeBody();let Rt=null;const Ut=()=>{if(null!==Rt)return Rt;const ge=se.statusText||"OK",Ue=new ce(se.getAllResponseHeaders()),Te=function rt(P){return"responseURL"in P&&P.responseURL?P.responseURL:/^X-Request-URL:/m.test(P.getAllResponseHeaders())?P.getResponseHeader("X-Request-URL"):null}(se)||$.url;return Rt=new Se({headers:Ue,status:se.status,statusText:ge,url:Te}),Rt},yt=()=>{let{headers:ge,status:Ue,statusText:Te,url:_e}=Ut(),Y=null;204!==Ue&&(Y=typeof se.response>"u"?se.responseText:se.response),0===Ue&&(Ue=Y?200:0);let Re=Ue>=200&&Ue<300;if("json"===$.responseType&&"string"==typeof Y){const $e=Y;Y=Y.replace(nt,"");try{Y=""!==Y?JSON.parse(Y):null}catch(Et){Y=$e,Re&&(Re=!1,Y={error:Et,text:Y})}}Re?(ve.next(new fe({body:Y,headers:ge,status:Ue,statusText:Te,url:_e||void 0})),ve.complete()):ve.error(new Fe({error:Y,headers:ge,status:Ue,statusText:Te,url:_e||void 0}))},qt=ge=>{const{url:Ue}=Ut(),Te=new Fe({error:ge,status:se.status||0,statusText:se.statusText||"Unknown Error",url:Ue||void 0});ve.error(Te)};let gn=!1;const Qe=ge=>{gn||(ve.next(Ut()),gn=!0);let Ue={type:Be.DownloadProgress,loaded:ge.loaded};ge.lengthComputable&&(Ue.total=ge.total),"text"===$.responseType&&!!se.responseText&&(Ue.partialText=se.responseText),ve.next(Ue)},he=ge=>{let Ue={type:Be.UploadProgress,loaded:ge.loaded};ge.lengthComputable&&(Ue.total=ge.total),ve.next(Ue)};return se.addEventListener("load",yt),se.addEventListener("error",qt),se.addEventListener("timeout",qt),se.addEventListener("abort",qt),$.reportProgress&&(se.addEventListener("progress",Qe),null!==Xe&&se.upload&&se.upload.addEventListener("progress",he)),se.send(Xe),ve.next({type:Be.Sent}),()=>{se.removeEventListener("error",qt),se.removeEventListener("abort",qt),se.removeEventListener("load",yt),se.removeEventListener("timeout",qt),$.reportProgress&&(se.removeEventListener("progress",Qe),null!==Xe&&se.upload&&se.upload.removeEventListener("progress",he)),se.readyState!==se.DONE&&se.abort()}})}}return P.\u0275fac=function($){return new($||P)(v.LFG(s.JF))},P.\u0275prov=v.Yz7({token:P,factory:P.\u0275fac}),P})();
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */const De=new v.OlP("XSRF_COOKIE_NAME"),ct=new v.OlP("XSRF_HEADER_NAME");class gt{}let Gt=(()=>{class P{constructor($,ve,se){this.doc=$,this.platform=ve,this.cookieName=se,this.lastCookieString="",this.lastToken=null,this.parseCount=0}getToken(){if("server"===this.platform)return null;const $=this.doc.cookie||"";return $!==this.lastCookieString&&(this.parseCount++,this.lastToken=(0,s.Mx)($,this.cookieName),this.lastCookieString=$),this.lastToken}}return P.\u0275fac=function($){return new($||P)(v.LFG(s.K0),v.LFG(v.Lbi),v.LFG(De))},P.\u0275prov=v.Yz7({token:P,factory:P.\u0275fac}),P})(),Yt=(()=>{class P{constructor($,ve){this.tokenService=$,this.headerName=ve}intercept($,ve){const se=$.url.toLowerCase();if("GET"===$.method||"HEAD"===$.method||se.startsWith("http://")||se.startsWith("https://"))return ve.handle($);const Xe=this.tokenService.getToken();return null!==Xe&&!$.headers.has(this.headerName)&&($=$.clone({headers:$.headers.set(this.headerName,Xe)})),ve.handle($)}}return P.\u0275fac=function($){return new($||P)(v.LFG(gt),v.LFG(ct))},P.\u0275prov=v.Yz7({token:P,factory:P.\u0275fac}),P})(),Mt=(()=>{class P{constructor($,ve){this.backend=$,this.injector=ve,this.chain=null}handle($){if(null===this.chain){const ve=this.injector.get(xt,[]);this.chain=ve.reduceRight((se,Xe)=>new Ye(se,Xe),this.backend)}return this.chain.handle($)}}return P.\u0275fac=function($){return new($||P)(v.LFG(Me),v.LFG(v.zs3))},P.\u0275prov=v.Yz7({token:P,factory:P.\u0275fac}),P})(),F=(()=>{class P{static disable(){return{ngModule:P,providers:[{provide:Yt,useClass:Ht}]}}static withOptions($={}){return{ngModule:P,providers:[$.cookieName?{provide:De,useValue:$.cookieName}:[],$.headerName?{provide:ct,useValue:$.headerName}:[]]}}}return P.\u0275fac=function($){return new($||P)},P.\u0275mod=v.oAB({type:P}),P.\u0275inj=v.cJS({providers:[Yt,{provide:xt,useExisting:Yt,multi:!0},{provide:gt,useClass:Gt},{provide:De,useValue:"XSRF-TOKEN"},{provide:ct,useValue:"X-XSRF-TOKEN"}]}),P})(),j=(()=>{class P{}return P.\u0275fac=function($){return new($||P)},P.\u0275mod=v.oAB({type:P}),P.\u0275inj=v.cJS({providers:[Le,{provide:q,useClass:Mt},je,{provide:Me,useExisting:je}],imports:[F.withOptions({cookieName:"XSRF-TOKEN",headerName:"X-XSRF-TOKEN"})]}),P})();
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */,4650:(St,He,y)=>{y.d(He,{$8M:()=>Tt,$Z:()=>rh,AFp:()=>wm,ALo:()=>$p,AaK:()=>q,BQk:()=>Ba,CHM:()=>H,CRH:()=>tm,CZH:()=>Xa,CqO:()=>df,D6c:()=>E0,DdM:()=>Bp,EJc:()=>BC,EiD:()=>nd,EpF:()=>cf,F$t:()=>mf,F4k:()=>uf,FYo:()=>Fp,FiY:()=>Rs,G48:()=>o0,Gf:()=>Jp,GfV:()=>kp,GkF:()=>Ac,Gpc:()=>me,Hsn:()=>gf,Ikx:()=>Bc,JOm:()=>Kr,JVY:()=>Pg,KtG:()=>tt,L6k:()=>Fg,LAX:()=>Ng,LFG:()=>ci,LSH:()=>yl,Lbi:()=>FC,MAs:()=>lf,MMx:()=>Qc,NdJ:()=>Ic,O4$:()=>oi,OlP:()=>Vn,Oqu:()=>Lc,PXZ:()=>qC,Q6J:()=>wc,QGY:()=>Tc,QP$:()=>vs,QbO:()=>kC,Qsj:()=>Mb,R0b:()=>dr,RDi:()=>Hr,Rgc:()=>na,SBq:()=>qs,Sil:()=>HC,Suo:()=>em,TTD:()=>Vi,TgZ:()=>ka,Udp:()=>Fc,VKq:()=>Vp,WFA:()=>xc,XFs:()=>Mt,Xpm:()=>_e,Y36:()=>es,YKP:()=>Op,YNc:()=>af,Yjl:()=>wn,Yz7:()=>Ce,ZZ4:()=>Du,_Bn:()=>xp,_UZ:()=>Sc,_Vd:()=>Qs,_c5:()=>b0,_uU:()=>Bf,aQg:()=>bu,c2e:()=>NC,cJS:()=>at,cg1:()=>Hc,d8E:()=>Vc,dDg:()=>KC,deG:()=>sl,dqk:()=>se,eBb:()=>kg,eFA:()=>Nm,ekj:()=>kc,eoX:()=>Om,f3M:()=>Lu,g9A:()=>Sm,h0i:()=>ko,hGG:()=>C0,hM9:()=>kb,hij:()=>Ha,iGM:()=>qp,ifc:()=>ve,ip1:()=>Em,kL8:()=>np,lG2:()=>$n,lcZ:()=>Wp,lqb:()=>Qo,lri:()=>xm,mCW:()=>ks,n5z:()=>U,oAB:()=>Lt,oxw:()=>pf,pB0:()=>Lg,q3G:()=>ui,qLn:()=>Bs,qOj:()=>Dc,qZA:()=>Na,qzn:()=>Ko,rWj:()=>Rm,s9C:()=>Oc,sBO:()=>s0,sIi:()=>Gs,s_b:()=>Ya,soG:()=>Qa,tBr:()=>ga,tb:()=>Am,tp0:()=>Os,uIk:()=>Ec,vHH:()=>xe,vpe:()=>eo,wAp:()=>ln,xp6:()=>Nd,yhl:()=>Ku,ynx:()=>La,z2F:()=>qa,z3N:()=>uo,zSh:()=>Hl,zs3:()=>Zr});var s=y(7579),v=y(727),M=y(8306),G=y(6451),X=y(3099);
/**
     * @license Angular v14.0.1
     * (c) 2010-2022 Google LLC. https://angular.io/
     * License: MIT
     */
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */function K(e){for(let t in e)if(e[t]===K)return t;throw Error("Could not find renamed property on target object.")}function ue(e,t){for(const n in t)t.hasOwnProperty(n)&&!e.hasOwnProperty(n)&&(e[n]=t[n])}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */function q(e){if("string"==typeof e)return e;if(Array.isArray(e))return"["+e.map(q).join(", ")+"]";if(null==e)return""+e;if(e.overriddenName)return`${e.overriddenName}`;if(e.name)return`${e.name}`;const t=e.toString();if(null==t)return""+t;const n=t.indexOf("\n");return-1===n?t:t.substring(0,n)}function Me(e,t){return null==e||""===e?null===t?"":t:null==t||""===t?e:e+" "+t}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */const ce=K({__forward_ref__:K});function me(e){return e.__forward_ref__=me,e.toString=function(){return q(this())},e}function te(e){return Ge(e)?e():e}function Ge(e){return"function"==typeof e&&e.hasOwnProperty(ce)&&e.__forward_ref__===me}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
class xe extends Error{constructor(t,n){super(function Ke(e,t){return`NG0${Math.abs(e)}${t?": "+t.trim():""}`}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */(t,n)),this.code=t}}function Ne(e){return"string"==typeof e?e:null==e?"":String(e)}function Q(e,t){throw new xe(-201,!1)}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */function jt(e,t){null==e&&function ft(e,t,n,i){throw new Error(`ASSERTION ERROR: ${e}`+(null==i?"":` [Expected=> ${n} ${i} ${t} <=Actual]`))}(t,e,null,"!=")}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
function Ce(e){return{token:e.token,providedIn:e.providedIn||null,factory:e.factory,value:void 0}}function at(e){return{providers:e.providers||[],imports:e.imports||[]}}function bt(e){return nt(e,ct)||nt(e,Gt)}function nt(e,t){return e.hasOwnProperty(t)?e[t]:null}function De(e){return e&&(e.hasOwnProperty(gt)||e.hasOwnProperty(Yt))?e[gt]:null}const ct=K({\u0275prov:K}),gt=K({\u0275inj:K}),Gt=K({ngInjectableDef:K}),Yt=K({ngInjectorDef:K});
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */var Mt=(()=>((Mt=Mt||{})[Mt.Default=0]="Default",Mt[Mt.Host=1]="Host",Mt[Mt.Self=2]="Self",Mt[Mt.SkipSelf=4]="SkipSelf",Mt[Mt.Optional=8]="Optional",Mt))();
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */let Je;function F(e){const t=Je;return Je=e,t}function j(e,t,n){const i=bt(e);return i&&"root"==i.providedIn?void 0===i.value?i.value=i.factory():i.value:n&Mt.Optional?null:void 0!==t?t:void Q(q(e))}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
function T(e){return{toString:e}.toString()}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */var P=(()=>((P=P||{})[P.OnPush=0]="OnPush",P[P.Default=1]="Default",P))(),ve=(()=>{return(e=ve||(ve={}))[e.Emulated=0]="Emulated",e[e.None=2]="None",e[e.ShadowDom=3]="ShadowDom",ve;var e})();
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
const se=(()=>typeof globalThis<"u"&&globalThis||typeof global<"u"&&global||typeof window<"u"&&window||typeof self<"u"&&typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&self)(),Ut={},yt=[],qt=K({\u0275cmp:K}),gn=K({\u0275dir:K}),Qe=K({\u0275pipe:K}),he=K({\u0275mod:K}),ge=K({\u0275fac:K}),Ue=K({__NG_ELEMENT_ID__:K});
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
let Te=0;function _e(e){return T(()=>{const n=!0===e.standalone,i={},r={type:e.type,providersResolver:null,decls:e.decls,vars:e.vars,factory:null,template:e.template||null,consts:e.consts||null,ngContentSelectors:e.ngContentSelectors,hostBindings:e.hostBindings||null,hostVars:e.hostVars||0,hostAttrs:e.hostAttrs||null,contentQueries:e.contentQueries||null,declaredInputs:i,inputs:null,outputs:null,exportAs:e.exportAs||null,onPush:e.changeDetection===P.OnPush,directiveDefs:null,pipeDefs:null,standalone:n,dependencies:n&&e.dependencies||null,getStandaloneInjector:null,selectors:e.selectors||yt,viewQuery:e.viewQuery||null,features:e.features||null,data:e.data||{},encapsulation:e.encapsulation||ve.Emulated,id:"c"+Te++,styles:e.styles||yt,_:null,setInput:null,schemas:e.schemas||null,tView:null},o=e.dependencies,a=e.features;return r.inputs=Zn(e.inputs,i),r.outputs=Zn(e.outputs),a&&a.forEach(h=>h(r)),r.directiveDefs=o?()=>("function"==typeof o?o():o).map(Re).filter($e):null,r.pipeDefs=o?()=>("function"==typeof o?o():o).map(vn).filter($e):null,r})}function Re(e){return sn(e)||Qt(e)}function $e(e){return null!==e}const Et={};function Lt(e){return T(()=>{const t={type:e.type,bootstrap:e.bootstrap||yt,declarations:e.declarations||yt,imports:e.imports||yt,exports:e.exports||yt,transitiveCompileScopes:null,schemas:e.schemas||null,id:e.id||null};return null!=e.id&&(Et[e.id]=e.type),t})}function Zn(e,t){if(null==e)return Ut;const n={};for(const i in e)if(e.hasOwnProperty(i)){let r=e[i],o=r;Array.isArray(r)&&(o=r[1],r=r[0]),n[r]=i,t&&(t[r]=o)}return n}const $n=_e;function wn(e){return{type:e.type,name:e.name,factory:null,pure:!1!==e.pure,standalone:!0===e.standalone,onDestroy:e.type.prototype.ngOnDestroy||null}}function sn(e){return e[qt]||null}function Qt(e){return e[gn]||null}function vn(e){return e[Qe]||null}function On(e,t){const n=e[he]||null;if(!n&&!0===t)throw new Error(`Type ${q(e)} does not have '\u0275mod' property.`);return n}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */const N=22;
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
function tn(e){return Array.isArray(e)&&"object"==typeof e[1]}function Cn(e){return Array.isArray(e)&&!0===e[1]}function xn(e){return 0!=(8&e.flags)}function qn(e){return 2==(2&e.flags)}function Ai(e){return 1==(1&e.flags)}function zn(e){return null!==e.template}function Hn(e){return 0!=(256&e[2])}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
function Mi(e,t){return e.hasOwnProperty(ge)?e[ge]:null}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */class qi{constructor(t,n,i){this.previousValue=t,this.currentValue=n,this.firstChange=i}isFirstChange(){return this.firstChange}}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */function Vi(){return Ji}function Ji(e){return e.type.prototype.ngOnChanges&&(e.setInput=er),io}function io(){const e=Mr(this),t=e?.current;if(t){const n=e.previous;if(n===Ut)e.previous=t;else for(let i in t)n[i]=t[i];e.current=null,this.ngOnChanges(t)}}function er(e,t,n,i){const r=Mr(e)||function ro(e,t){return e[tr]=t}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */(e,{previous:Ut,current:null}),o=r.current||(r.current={}),a=r.previous,h=this.declaredInputs[n],p=a[h];o[h]=new qi(p&&p.currentValue,t,a===Ut),e[i]=t}Vi.ngInherit=!0;const tr="__ngSimpleChanges__";function Mr(e){return e[tr]||null}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
let ii;function Hr(e){ii=e}function Ln(e){return!!e.listen}const ti={createRenderer:(e,t)=>function ir(){return void 0!==ii?ii:typeof document<"u"?document:void 0}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */()};
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */function Fn(e){for(;Array.isArray(e);)e=e[0];return e}function E(e,t){return Fn(t[e])}function z(e,t){return Fn(t[e.index])}function it(e,t){return e.data[t]}function _t(e,t){return e[t]}function kt(e,t){const n=t[e];return tn(n)?n:n[0]}function Rn(e){return 4==(4&e[2])}function _n(e){return 64==(64&e[2])}function fn(e,t){return null==t?null:e[t]}function Yn(e){e[18]=0}function An(e,t){e[5]+=t;let n=e,i=e[3];for(;null!==i&&(1===t&&1===n[5]||-1===t&&0===n[5]);)i[5]+=t,n=i,i=i[3]
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */}const Zt={lFrame:Wt(null),bindingsEnabled:!0};function Ar(){return Zt.bindingsEnabled}function m(){return Zt.lFrame.lView}function g(){return Zt.lFrame.tView}function H(e){return Zt.lFrame.contextLView=e,e[8]}function tt(e){return Zt.lFrame.contextLView=null,e}function It(){let e=kn();for(;null!==e&&64===e.type;)e=e.parent;return e}function kn(){return Zt.lFrame.currentTNode}function yi(e,t){const n=Zt.lFrame;n.currentTNode=e,n.isParent=t}function ji(){return Zt.lFrame.isParent}function Tr(){Zt.lFrame.isParent=!1}function vi(){const e=Zt.lFrame;let t=e.bindingRootIndex;return-1===t&&(t=e.bindingRootIndex=e.tView.bindingStartIndex),t}function Ur(){return Zt.lFrame.bindingIndex++}function l(e,t){const n=Zt.lFrame;n.bindingIndex=n.bindingRootIndex=e,D(t)}function D(e){Zt.lFrame.currentDirectiveIndex=e}function k(e){const t=Zt.lFrame.currentDirectiveIndex;return-1===t?null:e[t]}function W(){return Zt.lFrame.currentQueryIndex}function be(e){Zt.lFrame.currentQueryIndex=e}function Ie(e){const t=e[1];return 2===t.type?t.declTNode:1===t.type?e[6]:null}function Ze(e,t,n){if(n&Mt.SkipSelf){let r=t,o=e;for(;!(r=r.parent,null!==r||n&Mt.Host||(r=Ie(o),null===r||(o=o[15],10&r.type))););if(null===r)return!1;t=r,e=o}const i=Zt.lFrame=Vt();return i.currentTNode=t,i.lView=e,!0}function dt(e){const t=Vt(),n=e[1];Zt.lFrame=t,t.currentTNode=n.firstChild,t.lView=e,t.tView=n,t.contextLView=e,t.bindingIndex=n.bindingStartIndex,t.inI18n=!1}function Vt(){const e=Zt.lFrame,t=null===e?null:e.child;return null===t?Wt(e):t}function Wt(e){const t={currentTNode:null,isParent:!0,lView:null,tView:null,selectedIndex:-1,contextLView:null,elementDepthCount:0,currentNamespace:null,currentDirectiveIndex:-1,bindingRootIndex:-1,bindingIndex:-1,currentQueryIndex:0,parent:e,child:null,inI18n:!1};return null!==e&&(e.child=t),t}function Dn(){const e=Zt.lFrame;return Zt.lFrame=e.parent,e.currentTNode=null,e.lView=null,e}const pn=Dn;function nn(){const e=Dn();e.isParent=!0,e.tView=null,e.selectedIndex=-1,e.contextLView=null,e.elementDepthCount=0,e.currentDirectiveIndex=-1,e.currentNamespace=null,e.bindingRootIndex=-1,e.bindingIndex=-1,e.currentQueryIndex=0}function mn(){return Zt.lFrame.selectedIndex}function jn(e){Zt.lFrame.selectedIndex=e}function En(){const e=Zt.lFrame;return it(e.tView,e.selectedIndex)}function oi(){Zt.lFrame.currentNamespace="svg"}function Pi(e,t){for(let n=t.directiveStart,i=t.directiveEnd;n<i;n++){const o=e.data[n].type.prototype,{ngAfterContentInit:a,ngAfterContentChecked:h,ngAfterViewInit:p,ngAfterViewChecked:I,ngOnDestroy:L}=o;a&&(e.contentHooks||(e.contentHooks=[])).push(-n,a),h&&((e.contentHooks||(e.contentHooks=[])).push(n,h),(e.contentCheckHooks||(e.contentCheckHooks=[])).push(n,h)),p&&(e.viewHooks||(e.viewHooks=[])).push(-n,p),I&&((e.viewHooks||(e.viewHooks=[])).push(n,I),(e.viewCheckHooks||(e.viewCheckHooks=[])).push(n,I)),null!=L&&(e.destroyHooks||(e.destroyHooks=[])).push(n,L)}}function oo(e,t,n){so(e,t,3,n)}function sr(e,t,n,i){(3&e[2])===n&&so(e,t,n,i)}function Ui(e,t){let n=e[2];(3&n)===t&&(n&=2047,n+=1,e[2]=n)}function so(e,t,n,i){const o=i??-1,a=t.length-1;let h=0;for(let p=void 0!==i?65535&e[18]:0;p<a;p++)if("number"==typeof t[p+1]){if(h=t[p],null!=i&&h>=i)break}else t[p]<0&&(e[18]+=65536),(h<o||-1==o)&&(Bo(e,n,t,p),e[18]=(4294901760&e[18])+p+2),p++}function Bo(e,t,n,i){const r=n[i]<0,o=n[i+1],h=e[r?-n[i]:n[i]];if(r){if(e[2]>>11<e[18]>>16&&(3&e[2])===t){e[2]+=2048;try{o.call(h)}finally{}}}else try{o.call(h)}finally{}}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */class en{constructor(t,n,i){this.factory=t,this.resolving=!1,this.canSeeViewProviders=n,this.injectImpl=i}}function Gr(e,t,n){const i=Ln(e);let r=0;for(;r<n.length;){const o=n[r];if("number"==typeof o){if(0!==o)break;r++;const a=n[r++],h=n[r++],p=n[r++];i?e.setAttribute(t,h,p,a):t.setAttributeNS(a,h,p)}else{const a=o,h=n[++r];ar(a)?i&&e.setProperty(t,a,h):i?e.setAttribute(t,a,h):t.setAttribute(a,h),r++}}return r}function ei(e){return 3===e||4===e||6===e}function ar(e){return 64===e.charCodeAt(0)}function Di(e,t){if(null!==t&&0!==t.length)if(null===e||0===e.length)e=t.slice();else{let n=-1;for(let i=0;i<t.length;i++){const r=t[i];"number"==typeof r?n=r:0===n||$r(e,n,r,null,-1===n||2===n?t[++i]:null)}}return e}function $r(e,t,n,i,r){let o=0,a=e.length;if(-1===t)a=-1;else for(;o<e.length;){const h=e[o++];if("number"==typeof h){if(h===t){a=-1;break}if(h>t){a=o-1;break}}}for(;o<e.length;){const h=e[o];if("number"==typeof h)break;if(h===n){if(null===i)return void(null!==r&&(e[o+1]=r));if(i===e[o+1])return void(e[o+2]=r)}o++,null!==i&&o++,null!==r&&o++}-1!==a&&(e.splice(a,0,t),o=a+1),e.splice(o++,0,n),null!==i&&e.splice(o++,0,i),null!==r&&e.splice(o++,0,r)}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */function bo(e){return-1!==e}function ao(e){return 32767&e}function lo(e,t){let n=function nl(e){return e>>16}(e),i=t;for(;n>0;)i=i[15],n--;return i}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */let Ho=!0;function Co(e){const t=Ho;return Ho=e,t}let il=0;const yr={};function Ao(e,t){const n=ws(e,t);if(-1!==n)return n;const i=t[1];i.firstCreatePass&&(e.injectorIndex=t.length,Es(i.data,e),Es(t,null),Es(i.blueprint,null));const r=To(e,t),o=e.injectorIndex;if(bo(r)){const a=ao(r),h=lo(r,t),p=h[1].data;for(let I=0;I<8;I++)t[o+I]=h[a+I]|p[a+I]}return t[o+8]=r,o}function Es(e,t){e.push(0,0,0,0,0,0,0,0,t)}function ws(e,t){return-1===e.injectorIndex||e.parent&&e.parent.injectorIndex===e.injectorIndex||null===t[e.injectorIndex+8]?-1:e.injectorIndex}function To(e,t){if(e.parent&&-1!==e.parent.injectorIndex)return e.parent.injectorIndex;let n=0,i=null,r=t;for(;null!==r;){if(i=lt(r),null===i)return-1;if(n++,r=r[15],-1!==i.injectorIndex)return i.injectorIndex|n<<16}return-1}function jo(e,t,n){!function rl(e,t,n){let i;"string"==typeof n?i=n.charCodeAt(0)||0:n.hasOwnProperty(Ue)&&(i=n[Ue]),null==i&&(i=n[Ue]=il++);const r=255&i;t.data[e+(r>>5)]|=1<<r}(e,t,n)}function sa(e,t,n){if(n&Mt.Optional)return e;Q()}function Uo(e,t,n,i){if(n&Mt.Optional&&void 0===i&&(i=null),0==(n&(Mt.Self|Mt.Host))){const r=e[9],o=F(void 0);try{return r?r.get(t,i,n&Mt.Optional):j(t,i,n&Mt.Optional)}finally{F(o)}}return sa(i,0,n)}function aa(e,t,n,i=Mt.Default,r){if(null!==e){if(1024&t[2]){const a=function ye(e,t,n,i,r){let o=e,a=t;for(;null!==o&&null!==a&&1024&a[2]&&!(256&a[2]);){const h=la(o,a,n,i|Mt.Self,yr);if(h!==yr)return h;let p=o.parent;if(!p){const I=a[21];if(I){const L=I.get(n,yr,i);if(L!==yr)return L}p=lt(a),a=a[15]}o=p}return r}(e,t,n,i,yr);if(a!==yr)return a}const o=la(e,t,n,i,yr);if(o!==yr)return o}return Uo(t,n,i,r)}function la(e,t,n,i,r){const o=function f(e){if("string"==typeof e)return e.charCodeAt(0)||0;const t=e.hasOwnProperty(Ue)?e[Ue]:void 0;return"number"==typeof t?t>=0?255&t:S:t}(n);if("function"==typeof o){if(!Ze(t,e,i))return i&Mt.Host?sa(r,0,i):Uo(t,n,i,r);try{const a=o(i);if(null!=a||i&Mt.Optional)return a;Q()}finally{pn()}}else if("number"==typeof o){let a=null,h=ws(e,t),p=-1,I=i&Mt.Host?t[16][6]:null;for((-1===h||i&Mt.SkipSelf)&&(p=-1===h?To(e,t):t[h+8],-1!==p&&c(i,!1)?(a=t[1],h=ao(p),t=lo(p,t)):h=-1);-1!==h;){const L=t[1];if(d(o,h,L.data)){const J=ca(h,t,n,a,i,I);if(J!==yr)return J}p=t[h+8],-1!==p&&c(i,t[1].data[h+8]===I)&&d(o,h,t)?(a=L,h=ao(p),t=lo(p,t)):h=-1}}return r}function ca(e,t,n,i,r,o){const a=t[1],h=a.data[e+8],L=zo(h,a,n,null==i?qn(h)&&Ho:i!=a&&0!=(3&h.type),r&Mt.Host&&o===h);return null!==L?Go(t,a,L,h):yr}function zo(e,t,n,i,r){const o=e.providerIndexes,a=t.data,h=1048575&o,p=e.directiveStart,L=o>>20,Ae=r?h+L:e.directiveEnd;for(let We=i?h:h+L;We<Ae;We++){const pt=a[We];if(We<p&&n===pt||We>=p&&pt.type===n)return We}if(r){const We=a[p];if(We&&zn(We)&&We.type===n)return p}return null}function Go(e,t,n,i){let r=e[n];const o=t.data;if(function an(e){return e instanceof en}(r)){const a=r;a.resolving&&
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
function ht(e,t){const n=t?`. Dependency path: ${t.join(" > ")} > ${e}`:"";throw new xe(-200,`Circular dependency in DI detected for ${e}${n}`)}(function qe(e){return"function"==typeof e?e.name||e.toString():"object"==typeof e&&null!=e&&"function"==typeof e.type?e.type.name||e.type.toString():Ne(e)}(o[n]));const h=Co(a.canSeeViewProviders);a.resolving=!0;const p=a.injectImpl?F(a.injectImpl):null;Ze(e,i,Mt.Default);try{r=e[n]=a.factory(void 0,o,e,i),t.firstCreatePass&&n>=i.directiveStart&&
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
function or(e,t,n){const{ngOnChanges:i,ngOnInit:r,ngDoCheck:o}=t.type.prototype;if(i){const a=Ji(t);(n.preOrderHooks||(n.preOrderHooks=[])).push(e,a),(n.preOrderCheckHooks||(n.preOrderCheckHooks=[])).push(e,a)}r&&(n.preOrderHooks||(n.preOrderHooks=[])).push(0-e,r),o&&((n.preOrderHooks||(n.preOrderHooks=[])).push(e,o),(n.preOrderCheckHooks||(n.preOrderCheckHooks=[])).push(e,o))}(n,o[n],t)}finally{null!==p&&F(p),Co(h),a.resolving=!1,pn()}}return r}function d(e,t,n){return!!(n[t+(e>>5)]&1<<e)}function c(e,t){return!(e&Mt.Self||e&Mt.Host&&t)}class _{constructor(t,n){this._tNode=t,this._lView=n}get(t,n,i){return aa(this._tNode,this._lView,t,i,n)}}function S(){return new _(It(),m())}function U(e){return T(()=>{const t=e.prototype.constructor,n=t[ge]||oe(t),i=Object.prototype;let r=Object.getPrototypeOf(e.prototype).constructor;for(;r&&r!==i;){const o=r[ge]||oe(r);if(o&&o!==n)return o;r=Object.getPrototypeOf(r)}return o=>new o})}function oe(e){return Ge(e)?()=>{const t=oe(te(e));return t&&t()}:Mi(e)}function lt(e){const t=e[1],n=t.type;return 2===n?t.declTNode:1===n?e[6]:null}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */function Tt(e){return function ol(e,t){if("class"===t)return e.classes;if("style"===t)return e.styles;const n=e.attrs;if(n){const i=n.length;let r=0;for(;r<i;){const o=n[r];if(ei(o))break;if(0===o)r+=2;else if("number"==typeof o)for(r++;r<i&&"string"==typeof n[r];)r++;else{if(o===t)return n[r+1];r+=2}}}return null}(It(),e)}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */const Nt="__parameters__";function vr(e,t,n){return T(()=>{const i=function zi(e){return function(...n){if(e){const i=e(...n);for(const r in i)this[r]=i[r]}}}(t);function r(...o){if(this instanceof r)return i.apply(this,o),this;const a=new r(...o);return h.annotation=a,h;function h(p,I,L){const J=p.hasOwnProperty(Nt)?p[Nt]:Object.defineProperty(p,Nt,{value:[]})[Nt];for(;J.length<=L;)J.push(null);return(J[L]=J[L]||[]).push(a),p}}return n&&(r.prototype=Object.create(n.prototype)),r.prototype.ngMetadataName=e,r.annotationCls=r,r})}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
class Vn{constructor(t,n){this._desc=t,this.ngMetadataName="InjectionToken",this.\u0275prov=void 0,"number"==typeof n?this.__NG_ELEMENT_ID__=n:void 0!==n&&(this.\u0275prov=Ce({token:this,providedIn:n.providedIn||"root",factory:n.factory}))}get multi(){return this}toString(){return`InjectionToken ${this._desc}`}}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */const sl=new Vn("AnalyzeForEntryComponents");function lr(e,t){void 0===t&&(t=e);for(let n=0;n<e.length;n++){let i=e[n];Array.isArray(i)?(t===e&&(t=e.slice(0,n)),lr(i,t)):t!==e&&t.push(i)}return t}function co(e,t){e.forEach(n=>Array.isArray(n)?co(n,t):t(n))}function Ru(e,t,n){t>=e.length?e.push(n):e.splice(t,0,n)}function ha(e,t){return t>=e.length-1?e.pop():e.splice(t,1)[0]}function As(e,t){const n=[];for(let i=0;i<e;i++)n.push(t);return n}function cr(e,t,n){let i=$o(e,t);return i>=0?e[1|i]=n:(i=~i,function ig(e,t,n,i){let r=e.length;if(r==t)e.push(n,i);else if(1===r)e.push(i,e[0]),e[0]=n;else{for(r--,e.push(e[r-1],e[r]);r>t;)e[r]=e[r-2],r--;e[t]=n,e[t+1]=i}}(e,i,t,n)),i}function ll(e,t){const n=$o(e,t);if(n>=0)return e[1|n]}function $o(e,t){return function Fu(e,t,n){let i=0,r=e.length>>n;for(;r!==i;){const o=i+(r-i>>1),a=e[o<<n];if(t===a)return o<<n;a>t?r=o:i=o+1}return~(r<<n)}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */(e,t,1)}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
const Ts={},ul="__NG_DI_FLAG__",pa="ngTempTokenPath",dg=/\n/gm,ku="__source";let Is;function ma(e){const t=Is;return Is=e,t}function fg(e,t=Mt.Default){if(void 0===Is)throw new xe(-203,"");return null===Is?j(e,void 0,t):Is.get(e,t&Mt.Optional?null:void 0,t)}function ci(e,t=Mt.Default){return(function B(){return Je}()||fg)(te(e),t)}function Lu(e,t=Mt.Default){return ci(e,t)}function dl(e){const t=[];for(let n=0;n<e.length;n++){const i=te(e[n]);if(Array.isArray(i)){if(0===i.length)throw new xe(900,"");let r,o=Mt.Default;for(let a=0;a<i.length;a++){const h=i[a],p=pg(h);"number"==typeof p?-1===p?r=h.token:o|=p:r=h}t.push(ci(r,o))}else t.push(ci(i))}return t}function xs(e,t){return e[ul]=t,e.prototype[ul]=t,e}function pg(e){return e[ul]}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
const ga=xs(vr("Inject",e=>({token:e})),-1),Rs=xs(vr("Optional"),8),Os=xs(vr("SkipSelf"),4);
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */let va;function Yo(e){return function hl(){if(void 0===va&&(va=null,se.trustedTypes))try{va=se.trustedTypes.createPolicy("angular",{createHTML:e=>e,createScript:e=>e,createScriptURL:e=>e})}catch{}return va}()?.createHTML(e)||e}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
class Io{constructor(t){this.changingThisBreaksApplicationSecurity=t}toString(){return`SafeValue must use [property]=binding: ${this.changingThisBreaksApplicationSecurity} (see https://g.co/ng/security#xss)`}}class Tg extends Io{getTypeName(){return"HTML"}}class Ig extends Io{getTypeName(){return"Style"}}class xg extends Io{getTypeName(){return"Script"}}class Rg extends Io{getTypeName(){return"URL"}}class Og extends Io{getTypeName(){return"ResourceURL"}}function uo(e){return e instanceof Io?e.changingThisBreaksApplicationSecurity:e}function Ko(e,t){const n=Ku(e);if(null!=n&&n!==t){if("ResourceURL"===n&&"URL"===t)return!0;throw new Error(`Required a safe ${t}, got a ${n} (see https://g.co/ng/security#xss)`)}return n===t}function Ku(e){return e instanceof Io&&e.getTypeName()||null}function Pg(e){return new Tg(e)}function Fg(e){return new Ig(e)}function kg(e){return new xg(e)}function Ng(e){return new Rg(e)}function Lg(e){return new Og(e)}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */class Bg{constructor(t){this.inertDocumentHelper=t}getInertBodyElement(t){t="<body><remove></remove>"+t;try{const n=(new window.DOMParser).parseFromString(Yo(t),"text/html").body;return null===n?this.inertDocumentHelper.getInertBodyElement(t):(n.removeChild(n.firstChild),n)}catch{return null}}}class Vg{constructor(t){if(this.defaultDoc=t,this.inertDocument=this.defaultDoc.implementation.createHTMLDocument("sanitization-inert"),null==this.inertDocument.body){const n=this.inertDocument.createElement("html");this.inertDocument.appendChild(n);const i=this.inertDocument.createElement("body");n.appendChild(i)}}getInertBodyElement(t){const n=this.inertDocument.createElement("template");if("content"in n)return n.innerHTML=Yo(t),n;const i=this.inertDocument.createElement("body");return i.innerHTML=Yo(t),this.defaultDoc.documentMode&&this.stripCustomNsAttrs(i),i}stripCustomNsAttrs(t){const n=t.attributes;for(let r=n.length-1;0<r;r--){const a=n.item(r).name;("xmlns:ns1"===a||0===a.indexOf("ns1:"))&&t.removeAttribute(a)}let i=t.firstChild;for(;i;)i.nodeType===Node.ELEMENT_NODE&&this.stripCustomNsAttrs(i),i=i.nextSibling}}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
const jg=/^(?:(?:https?|mailto|ftp|tel|file|sms):|[^&:/?#]*(?:[/?#]|$))/gi,Ug=/^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[a-z0-9+\/]+=*$/i;function ks(e){return(e=String(e)).match(jg)||e.match(Ug)?e:"unsafe:"+e}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
function Yr(e){const t={};for(const n of e.split(","))t[n]=!0;return t}function Ns(...e){const t={};for(const n of e)for(const i in n)n.hasOwnProperty(i)&&(t[i]=!0);return t}const Qu=Yr("area,br,col,hr,img,wbr"),qu=Yr("colgroup,dd,dt,li,p,tbody,td,tfoot,th,thead,tr"),Ju=Yr("rp,rt"),pl=Ns(Qu,Ns(qu,Yr("address,article,aside,blockquote,caption,center,del,details,dialog,dir,div,dl,figure,figcaption,footer,h1,h2,h3,h4,h5,h6,header,hgroup,hr,ins,main,map,menu,nav,ol,pre,section,summary,table,ul")),Ns(Ju,Yr("a,abbr,acronym,audio,b,bdi,bdo,big,br,cite,code,del,dfn,em,font,i,img,ins,kbd,label,map,mark,picture,q,ruby,rp,rt,s,samp,small,source,span,strike,strong,sub,sup,time,track,tt,u,var,video")),Ns(Ju,qu)),ml=Yr("background,cite,href,itemtype,longdesc,poster,src,xlink:href"),gl=Yr("srcset"),ed=Ns(ml,gl,Yr("abbr,accesskey,align,alt,autoplay,axis,bgcolor,border,cellpadding,cellspacing,class,clear,color,cols,colspan,compact,controls,coords,datetime,default,dir,download,face,headers,height,hidden,hreflang,hspace,ismap,itemscope,itemprop,kind,label,lang,language,loop,media,muted,nohref,nowrap,open,preload,rel,rev,role,rows,rowspan,rules,scope,scrolling,shape,size,sizes,span,srclang,start,summary,tabindex,target,title,translate,type,usemap,valign,value,vspace,width"),Yr("aria-activedescendant,aria-atomic,aria-autocomplete,aria-busy,aria-checked,aria-colcount,aria-colindex,aria-colspan,aria-controls,aria-current,aria-describedby,aria-details,aria-disabled,aria-dropeffect,aria-errormessage,aria-expanded,aria-flowto,aria-grabbed,aria-haspopup,aria-hidden,aria-invalid,aria-keyshortcuts,aria-label,aria-labelledby,aria-level,aria-live,aria-modal,aria-multiline,aria-multiselectable,aria-orientation,aria-owns,aria-placeholder,aria-posinset,aria-pressed,aria-readonly,aria-relevant,aria-required,aria-roledescription,aria-rowcount,aria-rowindex,aria-rowspan,aria-selected,aria-setsize,aria-sort,aria-valuemax,aria-valuemin,aria-valuenow,aria-valuetext")),zg=Yr("script,style,template");class Gg{constructor(){this.sanitizedSomething=!1,this.buf=[]}sanitizeChildren(t){let n=t.firstChild,i=!0;for(;n;)if(n.nodeType===Node.ELEMENT_NODE?i=this.startElement(n):n.nodeType===Node.TEXT_NODE?this.chars(n.nodeValue):this.sanitizedSomething=!0,i&&n.firstChild)n=n.firstChild;else for(;n;){n.nodeType===Node.ELEMENT_NODE&&this.endElement(n);let r=this.checkClobberedElement(n,n.nextSibling);if(r){n=r;break}n=this.checkClobberedElement(n,n.parentNode)}return this.buf.join("")}startElement(t){const n=t.nodeName.toLowerCase();if(!pl.hasOwnProperty(n))return this.sanitizedSomething=!0,!zg.hasOwnProperty(n);this.buf.push("<"),this.buf.push(n);const i=t.attributes;for(let r=0;r<i.length;r++){const o=i.item(r),a=o.name,h=a.toLowerCase();if(!ed.hasOwnProperty(h)){this.sanitizedSomething=!0;continue}let p=o.value;ml[h]&&(p=ks(p)),gl[h]&&(e=p,p=(e=String(e)).split(",").map(t=>ks(t.trim())).join(", ")),this.buf.push(" ",a,'="',td(p),'"')}var e;return this.buf.push(">"),!0}endElement(t){const n=t.nodeName.toLowerCase();pl.hasOwnProperty(n)&&!Qu.hasOwnProperty(n)&&(this.buf.push("</"),this.buf.push(n),this.buf.push(">"))}chars(t){this.buf.push(td(t))}checkClobberedElement(t,n){if(n&&(t.compareDocumentPosition(n)&Node.DOCUMENT_POSITION_CONTAINED_BY)===Node.DOCUMENT_POSITION_CONTAINED_BY)throw new Error(`Failed to sanitize html because the element is clobbered: ${t.outerHTML}`);return n}}const $g=/[\uD800-\uDBFF][\uDC00-\uDFFF]/g,Wg=/([^\#-~ |!])/g;function td(e){return e.replace(/&/g,"&amp;").replace($g,function(t){return"&#"+(1024*(t.charCodeAt(0)-55296)+(t.charCodeAt(1)-56320)+65536)+";"}).replace(Wg,function(t){return"&#"+t.charCodeAt(0)+";"}).replace(/</g,"&lt;").replace(/>/g,"&gt;")}let ba;function nd(e,t){let n=null;try{ba=ba||function Zu(e){const t=new Vg(e);return function Hg(){try{return!!(new window.DOMParser).parseFromString(Yo(""),"text/html")}catch{return!1}}()?new Bg(t):t}(e);let i=t?String(t):"";n=ba.getInertBodyElement(i);let r=5,o=i;do{if(0===r)throw new Error("Failed to sanitize html because the input is unstable");r--,i=o,o=n.innerHTML,n=ba.getInertBodyElement(i)}while(i!==o);return Yo((new Gg).sanitizeChildren(_l(n)||n))}finally{if(n){const i=_l(n)||n;for(;i.firstChild;)i.removeChild(i.firstChild)}}}function _l(e){return"content"in e&&function Yg(e){return e.nodeType===Node.ELEMENT_NODE&&"TEMPLATE"===e.nodeName}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */(e)?e.content:null}var ui=(()=>((ui=ui||{})[ui.NONE=0]="NONE",ui[ui.HTML=1]="HTML",ui[ui.STYLE=2]="STYLE",ui[ui.SCRIPT=3]="SCRIPT",ui[ui.URL=4]="URL",ui[ui.RESOURCE_URL=5]="RESOURCE_URL",ui))();
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */function yl(e){const t=function Ls(){const e=m();return e&&e[12]}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */();return t?t.sanitize(ui.URL,e)||"":Ko(e,"URL")?uo(e):ks(Ne(e))}function Dl(e){return e.ngOriginalError}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */class Bs{constructor(){this._console=console}handleError(t){const n=this._findOriginalError(t);this._console.error("ERROR",t),n&&this._console.error("ORIGINAL ERROR",n)}_findOriginalError(t){let n=t&&Dl(t);for(;n&&Dl(n);)n=Dl(n);return n||null}}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
const bl=new Map;let c_=0;const El="__ngContext__";function ki(e,t){tn(t)?(e[El]=t[20],function d_(e){bl.set(e[20],e)}(t)):e[El]=t}function Vs(e){const t=e[El];return"number"==typeof t?function od(e){return bl.get(e)||null}(t):t||null}function wl(e){const t=Vs(e);return t?tn(t)?t:t.lView:null}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
const D_=(()=>(typeof requestAnimationFrame<"u"&&requestAnimationFrame||setTimeout).bind(se))();function ho(e){return e instanceof Function?e():e}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
var Kr=(()=>((Kr=Kr||{})[Kr.Important=1]="Important",Kr[Kr.DashCase=2]="DashCase",Kr))();
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */function Sl(e,t){return undefined(e,t)}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
function Hs(e){const t=e[3];return Cn(t)?t[3]:t}function Al(e){return pd(e[13])}function Tl(e){return pd(e[4])}function pd(e){for(;null!==e&&!Cn(e);)e=e[4];return e}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */function Xo(e,t,n,i,r){if(null!=i){let o,a=!1;Cn(i)?o=i:tn(i)&&(a=!0,i=i[0]);const h=Fn(i);0===e&&null!==n?null==r?Dd(t,n,h):xo(t,n,h,r||null,!0):1===e&&null!==n?xo(t,n,h,r||null,!0):2===e?function Td(e,t,n){const i=Ca(e,t);i&&function k_(e,t,n,i){Ln(e)?e.removeChild(t,n,i):t.removeChild(n)}(e,i,t,n)}(t,h,a):3===e&&t.destroyNode(h),null!=o&&function B_(e,t,n,i,r){const o=n[7];o!==Fn(n)&&Xo(t,e,i,o,r);for(let h=10;h<n.length;h++){const p=n[h];js(p[1],p,e,t,i,o)}}(t,e,o,n,r)}}function xl(e,t,n){if(Ln(e))return e.createElement(t,n);{const i=null!==n?function Vr(e){const t=e.toLowerCase();return"svg"===t?"http://www.w3.org/2000/svg":"math"===t?"http://www.w3.org/1998/MathML/":null}(n):null;return null===i?e.createElement(t):e.createElementNS(i,t)}}function gd(e,t){const n=e[9],i=n.indexOf(t),r=t[3];512&t[2]&&(t[2]&=-513,An(r,-1)),n.splice(i,1)}function Rl(e,t){if(e.length<=10)return;const n=10+t,i=e[n];if(i){const r=i[17];null!==r&&r!==e&&gd(r,i),t>0&&(e[n-1][4]=i[4]);const o=ha(e,10+t);!function A_(e,t){js(e,t,t[11],2,null,null),t[0]=null,t[6]=null}(i[1],i);const a=o[19];null!==a&&a.detachView(o[1]),i[3]=null,i[4]=null,i[2]&=-65}return i}function _d(e,t){if(!(128&t[2])){const n=t[11];Ln(n)&&n.destroyNode&&js(e,t,n,3,null,null),function x_(e){let t=e[13];if(!t)return Ol(e[1],e);for(;t;){let n=null;if(tn(t))n=t[13];else{const i=t[10];i&&(n=i)}if(!n){for(;t&&!t[4]&&t!==e;)tn(t)&&Ol(t[1],t),t=t[3];null===t&&(t=e),tn(t)&&Ol(t[1],t),n=t&&t[4]}t=n}}(t)}}function Ol(e,t){if(!(128&t[2])){t[2]&=-65,t[2]|=128,function F_(e,t){let n;if(null!=e&&null!=(n=e.destroyHooks))for(let i=0;i<n.length;i+=2){const r=t[n[i]];if(!(r instanceof en)){const o=n[i+1];if(Array.isArray(o))for(let a=0;a<o.length;a+=2){const h=r[o[a]],p=o[a+1];try{p.call(h)}finally{}}else try{o.call(r)}finally{}}}}(e,t),function P_(e,t){const n=e.cleanup,i=t[7];let r=-1;if(null!==n)for(let o=0;o<n.length-1;o+=2)if("string"==typeof n[o]){const a=n[o+1],h="function"==typeof a?a(t):Fn(t[a]),p=i[r=n[o+2]],I=n[o+3];"boolean"==typeof I?h.removeEventListener(n[o],p,I):I>=0?i[r=I]():i[r=-I].unsubscribe(),o+=2}else{const a=i[r=n[o+1]];n[o].call(a)}if(null!==i){for(let o=r+1;o<i.length;o++)i[o]();t[7]=null}}(e,t),1===t[1].type&&Ln(t[11])&&t[11].destroy();const n=t[17];if(null!==n&&Cn(t[3])){n!==t[3]&&gd(n,t);const i=t[19];null!==i&&i.detachView(e)}!function h_(e){bl.delete(e[20])}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */(t)}}function yd(e,t,n){return function vd(e,t,n){let i=t;for(;null!==i&&40&i.type;)i=(t=i).parent;if(null===i)return n[0];if(2&i.flags){const r=e.data[i.directiveStart].encapsulation;if(r===ve.None||r===ve.Emulated)return null}return z(i,n)}(e,t.parent,n)}function xo(e,t,n,i,r){Ln(e)?e.insertBefore(t,n,i,r):(Cd(t)?t.content:t).insertBefore(n,i,r)}function Dd(e,t,n){Ln(e)?e.appendChild(t,n):(Cd(t)?t.content:t).appendChild(n)}function bd(e,t,n,i,r){null!==i?xo(e,t,n,i,r):Dd(e,t,n)}function Cd(e){return"TEMPLATE"===e.tagName&&void 0!==e.content}function Ca(e,t){return Ln(e)?e.parentNode(t):t.parentNode}function Ed(e,t,n){return Md(e,t,n)}let Md=function wd(e,t,n){return 40&e.type?z(e,n):null};function Ea(e,t,n,i){const r=yd(e,i,t),o=t[11],h=Ed(i.parent||t[6],i,t);if(null!=r)if(Array.isArray(n))for(let p=0;p<n.length;p++)bd(o,r,n[p],h,!1);else bd(o,r,n,h,!1)}function wa(e,t){if(null!==t){const n=t.type;if(3&n)return z(t,e);if(4&n)return Fl(-1,e[t.index]);if(8&n){const i=t.child;if(null!==i)return wa(e,i);{const r=e[t.index];return Cn(r)?Fl(-1,r):Fn(r)}}if(32&n)return Sl(t,e)()||Fn(e[t.index]);{const i=Ad(e,t);return null!==i?Array.isArray(i)?i[0]:wa(Hs(e[16]),i):wa(e,t.next)}}return null}function Ad(e,t){return null!==t?e[16][6].projection[t.projection]:null}function Fl(e,t){const n=10+e+1;if(n<t.length){const i=t[n],r=i[1].firstChild;if(null!==r)return wa(i,r)}return t[7]}function kl(e,t,n,i,r,o,a){for(;null!=n;){const h=i[n.index],p=n.type;if(a&&0===t&&(h&&ki(Fn(h),i),n.flags|=4),64!=(64&n.flags))if(8&p)kl(e,t,n.child,i,r,o,!1),Xo(t,e,r,h,o);else if(32&p){const I=Sl(n,i);let L;for(;L=I();)Xo(t,e,r,L,o);Xo(t,e,r,h,o)}else 16&p?Id(e,t,i,n,r,o):Xo(t,e,r,h,o);n=a?n.projectionNext:n.next}}function js(e,t,n,i,r,o){kl(n,i,e.firstChild,t,r,o,!1)}function Id(e,t,n,i,r,o){const a=n[16],p=a[6].projection[i.projection];if(Array.isArray(p))for(let I=0;I<p.length;I++)Xo(t,e,r,p[I],o);else kl(e,t,p,a[3],r,o,!0)}function xd(e,t,n){Ln(e)?e.setAttribute(t,"style",n):t.style.cssText=n}function Nl(e,t,n){Ln(e)?""===n?e.removeAttribute(t,"class"):e.setAttribute(t,"class",n):t.className=n}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */function Rd(e,t,n){let i=e.length;for(;;){const r=e.indexOf(t,n);if(-1===r)return r;if(0===r||e.charCodeAt(r-1)<=32){const o=t.length;if(r+o===i||e.charCodeAt(r+o)<=32)return r}n=r+1}}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */const Od="ng-template";function H_(e,t,n){let i=0;for(;i<e.length;){let r=e[i++];if(n&&"class"===r){if(r=e[i],-1!==Rd(r.toLowerCase(),t,0))return!0}else if(1===r){for(;i<e.length&&"string"==typeof(r=e[i++]);)if(r.toLowerCase()===t)return!0;return!1}}return!1}function Pd(e){return 4===e.type&&e.value!==Od}function j_(e,t,n){return t===(4!==e.type||n?e.value:Od)}function U_(e,t,n){let i=4;const r=e.attrs||[],o=function $_(e){for(let t=0;t<e.length;t++)if(ei(e[t]))return t;return e.length}(r);let a=!1;for(let h=0;h<t.length;h++){const p=t[h];if("number"!=typeof p){if(!a)if(4&i){if(i=2|1&i,""!==p&&!j_(e,p,n)||""===p&&1===t.length){if(Ir(i))return!1;a=!0}}else{const I=8&i?p:t[++h];if(8&i&&null!==e.attrs){if(!H_(e.attrs,I,n)){if(Ir(i))return!1;a=!0}continue}const J=z_(8&i?"class":p,r,Pd(e),n);if(-1===J){if(Ir(i))return!1;a=!0;continue}if(""!==I){let Ae;Ae=J>o?"":r[J+1].toLowerCase();const We=8&i?Ae:null;if(We&&-1!==Rd(We,I,0)||2&i&&I!==Ae){if(Ir(i))return!1;a=!0}}}}else{if(!a&&!Ir(i)&&!Ir(p))return!1;if(a&&Ir(p))continue;a=!1,i=p|1&i}}return Ir(i)||a}function Ir(e){return 0==(1&e)}function z_(e,t,n,i){if(null===t)return-1;let r=0;if(i||!n){let o=!1;for(;r<t.length;){const a=t[r];if(a===e)return r;if(3===a||6===a)o=!0;else{if(1===a||2===a){let h=t[++r];for(;"string"==typeof h;)h=t[++r];continue}if(4===a)break;if(0===a){r+=4;continue}}r+=o?1:2}return-1}return function W_(e,t){let n=e.indexOf(4);if(n>-1)for(n++;n<e.length;){const i=e[n];if("number"==typeof i)return-1;if(i===t)return n;n++}return-1}(t,e)}function Fd(e,t,n=!1){for(let i=0;i<t.length;i++)if(U_(e,t[i],n))return!0;return!1}function Y_(e,t){e:for(let n=0;n<t.length;n++){const i=t[n];if(e.length===i.length){for(let r=0;r<e.length;r++)if(e[r]!==i[r])continue e;return!0}}return!1}function kd(e,t){return e?":not("+t.trim()+")":t}function K_(e){let t=e[0],n=1,i=2,r="",o=!1;for(;n<e.length;){let a=e[n];if("string"==typeof a)if(2&i){const h=e[++n];r+="["+a+(h.length>0?'="'+h+'"':"")+"]"}else 8&i?r+="."+a:4&i&&(r+=" "+a);else""!==r&&!Ir(a)&&(t+=kd(o,r),r=""),i=a,o=o||!Ir(i);n++}return""!==r&&(t+=kd(o,r)),t}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
const yn={};
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */function Nd(e){Ld(g(),m(),mn()+e,!1)}function Ld(e,t,n,i){if(!i)if(3==(3&t[2])){const o=e.preOrderCheckHooks;null!==o&&oo(t,o,n)}else{const o=e.preOrderHooks;null!==o&&sr(t,o,0,n)}jn(n)}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
const jd=new Vn("ENVIRONMENT_INITIALIZER"),Ud=new Vn("INJECTOR_DEF_TYPES");
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
function ny(...e){return{\u0275providers:zd(0,e)}}function zd(e,...t){const n=[],i=new Set;let r;return co(t,o=>{const a=o;Ll(a,n,[],i)&&(r||(r=[]),r.push(a))}),void 0!==r&&Gd(r,n),n}function Gd(e,t){for(let n=0;n<e.length;n++){const{providers:r}=e[n];co(r,o=>{t.push(o)})}}function Ll(e,t,n,i){if(!(e=te(e)))return!1;let r=null,o=De(e);const a=!o&&sn(e);if(o||a){if(a&&!a.standalone)return!1;r=e}else{const p=e.ngModule;if(o=De(p),!o)return!1;r=p}const h=i.has(r);if(a){if(h)return!1;if(i.add(r),a.dependencies){const p="function"==typeof a.dependencies?a.dependencies():a.dependencies;for(const I of p)Ll(I,t,n,i)}}else{if(!o)return!1;{if(null!=o.imports&&!h){let I;i.add(r);try{co(o.imports,L=>{Ll(L,t,n,i)&&(I||(I=[]),I.push(L))})}finally{}void 0!==I&&Gd(I,t)}if(!h){const I=Mi(r)||(()=>new r);t.push({provide:r,useFactory:I,deps:yt},{provide:Ud,useValue:r,multi:!0},{provide:jd,useValue:()=>ci(r),multi:!0})}const p=o.providers;null==p||h||co(p,L=>{t.push(L)})}}return r!==e&&void 0!==e.providers}const iy=K({provide:String,useValue:K});function Bl(e){return null!==e&&"object"==typeof e&&iy in e}function Ro(e){return"function"==typeof e}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
const Vl=new Vn("INJECTOR",-1);
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */class Yd{get(t,n=Ts){if(n===Ts){const i=new Error(`NullInjectorError: No provider for ${q(t)}!`);throw i.name="NullInjectorError",i}return n}}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */const Hl=new Vn("Set Injector scope."),Ma={},oy={};
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */let jl;function Ul(){return void 0===jl&&(jl=new Yd),jl}class Qo{}class Kd extends Qo{constructor(t,n,i,r){super(),this.parent=n,this.source=i,this.scopes=r,this.records=new Map,this._ngOnDestroyHooks=new Set,this._onDestroyHooks=[],this._destroyed=!1,Gl(t,a=>this.processProvider(a)),this.records.set(Vl,qo(void 0,this)),r.has("environment")&&this.records.set(Qo,qo(void 0,this));const o=this.records.get(Hl);null!=o&&"string"==typeof o.value&&this.scopes.add(o.value),this.injectorDefTypes=new Set(this.get(Ud.multi,yt,Mt.Self))}get destroyed(){return this._destroyed}destroy(){this.assertNotDestroyed(),this._destroyed=!0;try{for(const t of this._ngOnDestroyHooks)t.ngOnDestroy();for(const t of this._onDestroyHooks)t()}finally{this.records.clear(),this._ngOnDestroyHooks.clear(),this.injectorDefTypes.clear(),this._onDestroyHooks.length=0}}onDestroy(t){this._onDestroyHooks.push(t)}get(t,n=Ts,i=Mt.Default){this.assertNotDestroyed();const r=ma(this),o=F(void 0);try{if(!(i&Mt.SkipSelf)){let h=this.records.get(t);if(void 0===h){const p=function uy(e){return"function"==typeof e||"object"==typeof e&&e instanceof Vn}(t)&&bt(t);h=p&&this.injectableDefInScope(p)?qo(zl(t),Ma):null,this.records.set(t,h)}if(null!=h)return this.hydrate(t,h)}return(i&Mt.Self?Ul():this.parent).get(t,n=i&Mt.Optional&&n===Ts?null:n)}catch(a){if("NullInjectorError"===a.name){if((a[pa]=a[pa]||[]).unshift(q(t)),r)throw a;return function mg(e,t,n,i){const r=e[pa];throw t[ku]&&r.unshift(t[ku]),e.message=function gg(e,t,n,i=null){e=e&&"\n"===e.charAt(0)&&"\u0275"==e.charAt(1)?e.slice(2):e;let r=q(t);if(Array.isArray(t))r=t.map(q).join(" -> ");else if("object"==typeof t){let o=[];for(let a in t)if(t.hasOwnProperty(a)){let h=t[a];o.push(a+":"+("string"==typeof h?JSON.stringify(h):q(h)))}r=`{${o.join(", ")}}`}return`${n}${i?"("+i+")":""}[${r}]: ${e.replace(dg,"\n  ")}`}("\n"+e.message,r,n,i),e.ngTokenPath=r,e[pa]=null,e}(a,t,"R3InjectorError",this.source)}throw a}finally{F(o),ma(r)}}resolveInjectorInitializers(){const t=ma(this),n=F(void 0);try{const i=this.get(jd.multi,yt,Mt.Self);for(const r of i)r()}finally{ma(t),F(n)}}toString(){const t=[],n=this.records;for(const i of n.keys())t.push(q(i));return`R3Injector[${t.join(", ")}]`}assertNotDestroyed(){if(this._destroyed)throw new xe(205,!1)}processProvider(t){let n=Ro(t=te(t))?t:te(t&&t.provide);const i=function ay(e){return Bl(e)?qo(void 0,e.useValue):qo(Zd(e),Ma)}(t);if(Ro(t)||!0!==t.multi)this.records.get(n);else{let r=this.records.get(n);r||(r=qo(void 0,Ma,!0),r.factory=()=>dl(r.multi),this.records.set(n,r)),n=t,r.multi.push(t)}this.records.set(n,i)}hydrate(t,n){return n.value===Ma&&(n.value=oy,n.value=n.factory()),"object"==typeof n.value&&n.value&&function cy(e){return null!==e&&"object"==typeof e&&"function"==typeof e.ngOnDestroy}(n.value)&&this._ngOnDestroyHooks.add(n.value),n.value}injectableDefInScope(t){if(!t.providedIn)return!1;const n=te(t.providedIn);return"string"==typeof n?"any"===n||this.scopes.has(n):this.injectorDefTypes.has(n)}}function zl(e){const t=bt(e),n=null!==t?t.factory:Mi(e);if(null!==n)return n;if(e instanceof Vn)throw new xe(204,!1);if(e instanceof Function)return function sy(e){const t=e.length;if(t>0)throw As(t,"?"),new xe(204,!1);const n=function rt(e){const t=e&&(e[ct]||e[Gt]);if(t){const n=function je(e){if(e.hasOwnProperty("name"))return e.name;const t=(""+e).match(/^function\s*([^\s(]+)/);return null===t?"":t[1]}(e);return console.warn(`DEPRECATED: DI is instantiating a token "${n}" that inherits its @Injectable decorator but does not provide one itself.\nThis will become an error in a future version of Angular. Please add @Injectable() to the "${n}" class.`),t}return null}(e);return null!==n?()=>n.factory(e):()=>new e}(e);throw new xe(204,!1)}function Zd(e,t,n){let i;if(Ro(e)){const r=te(e);return Mi(r)||zl(r)}if(Bl(e))i=()=>te(e.useValue);else if(function Wd(e){return!(!e||!e.useFactory)}(e))i=()=>e.useFactory(...dl(e.deps||[]));else if(function $d(e){return!(!e||!e.useExisting)}(e))i=()=>ci(te(e.useExisting));else{const r=te(e&&(e.useClass||e.provide));if(!function ly(e){return!!e.deps}(e))return Mi(r)||zl(r);i=()=>new r(...dl(e.deps))}return i}function qo(e,t,n=!1){return{factory:e,value:t,multi:n?[]:void 0}}function dy(e){return!!e.\u0275providers}function Gl(e,t){for(const n of e)Array.isArray(n)?Gl(n,t):dy(n)?Gl(n.\u0275providers,t):t(n)}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */function Xd(e,t=null,n=null,i){const r=Qd(e,t,n,i);return r.resolveInjectorInitializers(),r}function Qd(e,t=null,n=null,i,r=new Set){const o=[n||yt,ny(e)];return i=i||("object"==typeof e?void 0:q(e)),new Kd(o,t||Ul(),i||null,r)
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */}let Zr=(()=>{class e{static create(n,i){if(Array.isArray(n))return Xd({name:""},i,n,"");{const r=n.name??"";return Xd({name:r},n.parent,n.providers,r)}}}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
return e.THROW_IF_NOT_FOUND=Ts,e.NULL=new Yd,e.\u0275prov=Ce({token:e,providedIn:"any",factory:()=>ci(Vl)}),e.__NG_ELEMENT_ID__=-1,e})();
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
function es(e,t=Mt.Default){const n=m();return null===n?ci(e,t):aa(It(),n,te(e),t)}function rh(){throw new Error("invalid")}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
function Aa(e,t){return e<<17|t<<2}function xr(e){return e>>17&32767}function ql(e){return 2|e}function fo(e){return(131068&e)>>2}function Jl(e,t){return-131069&e|t<<2}function ec(e){return 1|e}function yh(e,t){const n=e.contentQueries;if(null!==n)for(let i=0;i<n.length;i+=2){const r=n[i],o=n[i+1];if(-1!==o){const a=e.data[o];be(r),a.contentQueries(2,t[o],o)}}}function Us(e,t,n,i,r,o,a,h,p,I,L){const J=t.blueprint.slice();return J[0]=r,J[2]=76|i,(null!==L||e&&1024&e[2])&&(J[2]|=1024),Yn(J),J[3]=J[15]=e,J[8]=n,J[10]=a||e&&e[10],J[11]=h||e&&e[11],J[12]=p||e&&e[12]||null,J[9]=I||e&&e[9]||null,J[6]=o,J[20]=function u_(){return c_++}(),J[21]=L,J[16]=2==t.type?e[16]:J,J}function ts(e,t,n,i,r){let o=e.data[t];if(null===o)o=function cc(e,t,n,i,r){const o=kn(),a=ji(),p=e.data[t]=function zy(e,t,n,i,r,o){return{type:n,index:i,insertBeforeIndex:null,injectorIndex:t?t.injectorIndex:-1,directiveStart:-1,directiveEnd:-1,directiveStylingLast:-1,propertyBindings:null,flags:0,providerIndexes:0,value:r,attrs:o,mergedAttrs:null,localNames:null,initialInputs:void 0,inputs:null,outputs:null,tViews:null,next:null,projectionNext:null,child:null,parent:t,projection:null,styles:null,stylesWithoutHost:null,residualStyles:void 0,classes:null,classesWithoutHost:null,residualClasses:void 0,classBindings:0,styleBindings:0}}(0,a?o:o&&o.parent,n,t,i,r);return null===e.firstChild&&(e.firstChild=p),null!==o&&(a?null==o.child&&null!==p.parent&&(o.child=p):null===o.next&&(o.next=p)),p}(e,t,n,i,r),function oa(){return Zt.lFrame.inI18n}()&&(o.flags|=64);else if(64&o.type){o.type=n,o.value=i,o.attrs=r;const a=function li(){const e=Zt.lFrame,t=e.currentTNode;return e.isParent?t:t.parent}();o.injectorIndex=null===a?-1:a.injectorIndex}return yi(o,!0),o}function ns(e,t,n,i){if(0===n)return-1;const r=t.length;for(let o=0;o<n;o++)t.push(i),e.blueprint.push(i),e.data.push(null);return r}function zs(e,t,n){dt(t);try{const i=e.viewQuery;null!==i&&yc(1,i,n);const r=e.template;null!==r&&vh(e,t,r,1,n),e.firstCreatePass&&(e.firstCreatePass=!1),e.staticContentQueries&&yh(e,t),e.staticViewQueries&&yc(2,e.viewQuery,n);const o=e.components;null!==o&&function Hy(e,t){for(let n=0;n<t.length;n++)av(e,t[n])}(t,o)}catch(i){throw e.firstCreatePass&&(e.incompleteFirstPass=!0,e.firstCreatePass=!1),i}finally{t[2]&=-5,nn()}}function is(e,t,n,i){const r=t[2];if(128!=(128&r)){dt(t);try{Yn(t),function So(e){return Zt.lFrame.bindingIndex=e}(e.bindingStartIndex),null!==n&&vh(e,t,n,2,i);const a=3==(3&r);if(a){const I=e.preOrderCheckHooks;null!==I&&oo(t,I,null)}else{const I=e.preOrderHooks;null!==I&&sr(t,I,0,null),Ui(t,0)}if(function ov(e){for(let t=Al(e);null!==t;t=Tl(t)){if(!t[2])continue;const n=t[9];for(let i=0;i<n.length;i++){const r=n[i],o=r[3];0==(512&r[2])&&An(o,1),r[2]|=512}}}(t),function rv(e){for(let t=Al(e);null!==t;t=Tl(t))for(let n=10;n<t.length;n++){const i=t[n],r=i[1];_n(i)&&is(r,i,r.template,i[8])}}(t),null!==e.contentQueries&&yh(e,t),a){const I=e.contentCheckHooks;null!==I&&oo(t,I)}else{const I=e.contentHooks;null!==I&&sr(t,I,1),Ui(t,1)}!function By(e,t){const n=e.hostBindingOpCodes;if(null!==n)try{for(let i=0;i<n.length;i++){const r=n[i];if(r<0)jn(~r);else{const o=r,a=n[++i],h=n[++i];l(a,o),h(2,t[o])}}}finally{jn(-1)}}(e,t);const h=e.components;null!==h&&function Vy(e,t){for(let n=0;n<t.length;n++)sv(e,t[n])}(t,h);const p=e.viewQuery;if(null!==p&&yc(2,p,i),a){const I=e.viewCheckHooks;null!==I&&oo(t,I)}else{const I=e.viewHooks;null!==I&&sr(t,I,2),Ui(t,2)}!0===e.firstUpdatePass&&(e.firstUpdatePass=!1),t[2]&=-41,512&t[2]&&(t[2]&=-513,An(t[3],-1))}finally{nn()}}}function jy(e,t,n,i){const r=t[10],a=Rn(t);try{!a&&r.begin&&r.begin(),a&&zs(e,t,i),is(e,t,n,i)}finally{!a&&r.end&&r.end()}}function vh(e,t,n,i,r){const o=mn(),a=2&i;try{jn(-1),a&&t.length>N&&Ld(e,t,N,!1),n(i,r)}finally{jn(o)}}function Dh(e,t,n){if(xn(t)){const r=t.directiveEnd;for(let o=t.directiveStart;o<r;o++){const a=e.data[o];a.contentQueries&&a.contentQueries(1,n[o],o)}}}function uc(e,t,n){!Ar()||(function Xy(e,t,n,i){const r=n.directiveStart,o=n.directiveEnd;e.firstCreatePass||Ao(n,t),ki(i,t);const a=n.initialInputs;for(let h=r;h<o;h++){const p=e.data[h],I=zn(p);I&&tv(t,n,p);const L=Go(t,e,h,n);ki(L,t),null!==a&&nv(0,h-r,L,p,0,a),I&&(kt(n.index,t)[8]=L)}}(e,t,n,z(n,t)),128==(128&n.flags)&&function Qy(e,t,n){const i=n.directiveStart,r=n.directiveEnd,o=n.index,a=function u(){return Zt.lFrame.currentDirectiveIndex}();try{jn(o);for(let h=i;h<r;h++){const p=e.data[h],I=t[h];D(h),(null!==p.hostBindings||0!==p.hostVars||null!==p.hostAttrs)&&Ah(p,I)}}finally{jn(-1),D(a)}}(e,t,n))}function dc(e,t,n=z){const i=t.localNames;if(null!==i){let r=t.index+1;for(let o=0;o<i.length;o+=2){const a=i[o+1],h=-1===a?n(t,e):e[a];e[r++]=h}}}function bh(e){const t=e.tView;return null===t||t.incompleteFirstPass?e.tView=xa(1,null,e.template,e.decls,e.vars,e.directiveDefs,e.pipeDefs,e.viewQuery,e.schemas,e.consts):t}function xa(e,t,n,i,r,o,a,h,p,I){const L=N+i,J=L+r,Ae=function Uy(e,t){const n=[];for(let i=0;i<t;i++)n.push(i<e?null:yn);return n}(L,J),We="function"==typeof I?I():I;return Ae[1]={type:e,blueprint:Ae,template:n,queries:null,viewQuery:h,declTNode:t,data:Ae.slice().fill(null,L),bindingStartIndex:L,expandoStartIndex:J,hostBindingOpCodes:null,firstCreatePass:!0,firstUpdatePass:!0,staticViewQueries:!1,staticContentQueries:!1,preOrderHooks:null,preOrderCheckHooks:null,contentHooks:null,contentCheckHooks:null,viewHooks:null,viewCheckHooks:null,destroyHooks:null,cleanup:null,contentQueries:null,components:null,directiveRegistry:"function"==typeof o?o():o,pipeRegistry:"function"==typeof a?a():a,firstChild:null,schemas:p,consts:We,incompleteFirstPass:!1}}function wh(e,t,n,i){const r=Ph(t);null===n?r.push(i):(r.push(n),e.firstCreatePass&&Fh(e).push(i,r.length-1))}function Mh(e,t,n){for(let i in e)if(e.hasOwnProperty(i)){const r=e[i];(n=null===n?{}:n).hasOwnProperty(i)?n[i].push(t,r):n[i]=[t,r]}return n}function ur(e,t,n,i,r,o,a,h){const p=z(t,n);let L,I=t.inputs;!h&&null!=I&&(L=I[i])?(Lh(e,n,L,i,r),qn(t)&&function Wy(e,t){const n=kt(t,e);16&n[2]||(n[2]|=32)}(n,t.index)):3&t.type&&(i=function $y(e){return"class"===e?"className":"for"===e?"htmlFor":"formaction"===e?"formAction":"innerHtml"===e?"innerHTML":"readonly"===e?"readOnly":"tabindex"===e?"tabIndex":e}(i),r=null!=a?a(r,t.value||"",i):r,Ln(o)?o.setProperty(p,i,r):ar(i)||(p.setProperty?p.setProperty(i,r):p[i]=r))}function hc(e,t,n,i){let r=!1;if(Ar()){const o=function qy(e,t,n){const i=e.directiveRegistry;let r=null;if(i)for(let o=0;o<i.length;o++){const a=i[o];Fd(n,a.selectors,!1)&&(r||(r=[]),jo(Ao(n,t),e,a.type),zn(a)?(Th(e,n),r.unshift(a)):r.push(a))}return r}(e,t,n),a=null===i?null:{"":-1};if(null!==o){r=!0,Ih(n,e.data.length,o.length);for(let L=0;L<o.length;L++){const J=o[L];J.providersResolver&&J.providersResolver(J)}let h=!1,p=!1,I=ns(e,t,o.length,null);for(let L=0;L<o.length;L++){const J=o[L];n.mergedAttrs=Di(n.mergedAttrs,J.hostAttrs),xh(e,n,t,I,J),ev(I,J,a),null!==J.contentQueries&&(n.flags|=8),(null!==J.hostBindings||null!==J.hostAttrs||0!==J.hostVars)&&(n.flags|=128);const Ae=J.type.prototype;!h&&(Ae.ngOnChanges||Ae.ngOnInit||Ae.ngDoCheck)&&((e.preOrderHooks||(e.preOrderHooks=[])).push(n.index),h=!0),!p&&(Ae.ngOnChanges||Ae.ngDoCheck)&&((e.preOrderCheckHooks||(e.preOrderCheckHooks=[])).push(n.index),p=!0),I++}!function Gy(e,t){const i=t.directiveEnd,r=e.data,o=t.attrs,a=[];let h=null,p=null;for(let I=t.directiveStart;I<i;I++){const L=r[I],J=L.inputs,Ae=null===o||Pd(t)?null:iv(J,o);a.push(Ae),h=Mh(J,I,h),p=Mh(L.outputs,I,p)}null!==h&&(h.hasOwnProperty("class")&&(t.flags|=16),h.hasOwnProperty("style")&&(t.flags|=32)),t.initialInputs=a,t.inputs=h,t.outputs=p}(e,n)}a&&function Jy(e,t,n){if(t){const i=e.localNames=[];for(let r=0;r<t.length;r+=2){const o=n[t[r+1]];if(null==o)throw new xe(-301,!1);i.push(t[r],o)}}}(n,i,a)}return n.mergedAttrs=Di(n.mergedAttrs,n.attrs),r}function Sh(e,t,n,i,r,o){const a=o.hostBindings;if(a){let h=e.hostBindingOpCodes;null===h&&(h=e.hostBindingOpCodes=[]);const p=~t.index;(function Zy(e){let t=e.length;for(;t>0;){const n=e[--t];if("number"==typeof n&&n<0)return n}return 0})(h)!=p&&h.push(p),h.push(i,r,a)}}function Ah(e,t){null!==e.hostBindings&&e.hostBindings(1,t)}function Th(e,t){t.flags|=2,(e.components||(e.components=[])).push(t.index)}function ev(e,t,n){if(n){if(t.exportAs)for(let i=0;i<t.exportAs.length;i++)n[t.exportAs[i]]=e;zn(t)&&(n[""]=e)}}function Ih(e,t,n){e.flags|=1,e.directiveStart=t,e.directiveEnd=t+n,e.providerIndexes=t}function xh(e,t,n,i,r){e.data[i]=r;const o=r.factory||(r.factory=Mi(r.type)),a=new en(o,zn(r),es);e.blueprint[i]=a,n[i]=a,Sh(e,t,0,i,ns(e,n,r.hostVars,yn),r)}function tv(e,t,n){const i=z(t,e),r=bh(n),o=e[10],a=Ra(e,Us(e,r,null,n.onPush?32:16,i,t,o,o.createRenderer(i,n),null,null,null));e[t.index]=a}function Xr(e,t,n,i,r,o){const a=z(e,t);!function fc(e,t,n,i,r,o,a){if(null==o)Ln(e)?e.removeAttribute(t,r,n):t.removeAttribute(r);else{const h=null==a?Ne(o):a(o,i||"",r);Ln(e)?e.setAttribute(t,r,h,n):n?t.setAttributeNS(n,r,h):t.setAttribute(r,h)}}(t[11],a,o,e.value,n,i,r)}function nv(e,t,n,i,r,o){const a=o[t];if(null!==a){const h=i.setInput;for(let p=0;p<a.length;){const I=a[p++],L=a[p++],J=a[p++];null!==h?i.setInput(n,J,I,L):n[L]=J}}}function iv(e,t){let n=null,i=0;for(;i<t.length;){const r=t[i];if(0!==r)if(5!==r){if("number"==typeof r)break;e.hasOwnProperty(r)&&(null===n&&(n=[]),n.push(r,e[r],t[i+1])),i+=2}else i+=2;else i+=4}return n}function Rh(e,t,n,i){return new Array(e,!0,!1,t,null,0,i,n,null,null)}function sv(e,t){const n=kt(t,e);if(_n(n)){const i=n[1];48&n[2]?is(i,n,i.template,n[8]):n[5]>0&&pc(n)}}function pc(e){for(let i=Al(e);null!==i;i=Tl(i))for(let r=10;r<i.length;r++){const o=i[r];if(512&o[2]){const a=o[1];is(a,o,a.template,o[8])}else o[5]>0&&pc(o)}const n=e[1].components;if(null!==n)for(let i=0;i<n.length;i++){const r=kt(n[i],e);_n(r)&&r[5]>0&&pc(r)}}function av(e,t){const n=kt(t,e),i=n[1];(function lv(e,t){for(let n=t.length;n<e.blueprint.length;n++)t.push(e.blueprint[n])})(i,n),zs(i,n,n[8])}function Ra(e,t){return e[13]?e[14][4]=t:e[13]=t,e[14]=t,t}function mc(e){for(;e;){e[2]|=32;const t=Hs(e);if(Hn(e)&&!t)return e;e=t}return null}function Oh(e){!function gc(e){for(let t=0;t<e.components.length;t++){const n=e.components[t],i=wl(n);if(null!==i){const r=i[1];jy(r,i,r.template,n)}}}(e[8])}function yc(e,t,n){be(0),t(e,n)}const uv=(()=>Promise.resolve(null))();function Ph(e){return e[7]||(e[7]=[])}function Fh(e){return e.cleanup||(e.cleanup=[])}function kh(e,t,n){return(null===e||zn(e))&&(n=function C(e){for(;Array.isArray(e);){if("object"==typeof e[1])return e;e=e[0]}return null}(n[t.index])),n[11]}function Nh(e,t){const n=e[9],i=n?n.get(Bs,null):null;i&&i.handleError(t)}function Lh(e,t,n,i,r){for(let o=0;o<n.length;){const a=n[o++],h=n[o++],p=t[a],I=e.data[a];null!==I.setInput?I.setInput(p,r,i,h):p[h]=r}}function po(e,t,n){const i=E(t,e);!function md(e,t,n){Ln(e)?e.setValue(t,n):t.textContent=n}(e[11],i,n)}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */function Oa(e,t,n){let i=n?e.styles:null,r=n?e.classes:null,o=0;if(null!==t)for(let a=0;a<t.length;a++){const h=t[a];"number"==typeof h?o=h:1==o?r=Me(r,h):2==o&&(i=Me(i,h+": "+t[++a]+";"))}n?e.styles=i:e.stylesWithoutHost=i,n?e.classes=r:e.classesWithoutHost=r}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */function bv(){const e=It();Pi(m()[1],e)}function Dc(e){let t=
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
function Zh(e){return Object.getPrototypeOf(e.prototype).constructor}(e.type),n=!0;const i=[e];for(;t;){let r;if(zn(e))r=t.\u0275cmp||t.\u0275dir;else{if(t.\u0275cmp)throw new xe(903,"");r=t.\u0275dir}if(r){if(n){i.push(r);const a=e;a.inputs=bc(e.inputs),a.declaredInputs=bc(e.declaredInputs),a.outputs=bc(e.outputs);const h=r.hostBindings;h&&Mv(e,h);const p=r.viewQuery,I=r.contentQueries;if(p&&Ev(e,p),I&&wv(e,I),ue(e.inputs,r.inputs),ue(e.declaredInputs,r.declaredInputs),ue(e.outputs,r.outputs),zn(r)&&r.data.animation){const L=e.data;L.animation=(L.animation||[]).concat(r.data.animation)}}const o=r.features;if(o)for(let a=0;a<o.length;a++){const h=o[a];h&&h.ngInherit&&h(e),h===Dc&&(n=!1)}}t=Object.getPrototypeOf(t)}!function Cv(e){let t=0,n=null;for(let i=e.length-1;i>=0;i--){const r=e[i];r.hostVars=t+=r.hostVars,r.hostAttrs=Di(r.hostAttrs,n=Di(n,r.hostAttrs))}}(i)}function bc(e){return e===Ut?{}:e===yt?[]:e}function Ev(e,t){const n=e.viewQuery;e.viewQuery=n?(i,r)=>{t(i,r),n(i,r)}:t}function wv(e,t){const n=e.contentQueries;e.contentQueries=n?(i,r,o)=>{t(i,r,o),n(i,r,o)}:t}function Mv(e,t){const n=e.hostBindings;e.hostBindings=n?(i,r)=>{t(i,r),n(i,r)}:t}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
let Pa=null;function Oo(){if(!Pa){const e=se.Symbol;if(e&&e.iterator)Pa=e.iterator;else{const t=Object.getOwnPropertyNames(Map.prototype);for(let n=0;n<t.length;++n){const i=t[n];"entries"!==i&&"size"!==i&&Map.prototype[i]===Map.prototype.entries&&(Pa=i)}}}return Pa}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */function Gs(e){return!!Cc(e)&&(Array.isArray(e)||!(e instanceof Map)&&Oo()in e)}function Cc(e){return null!==e&&("function"==typeof e||"object"==typeof e)}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
function Qr(e,t,n){return e[t]=n}function Ni(e,t,n){return!Object.is(e[t],n)&&(e[t]=n,!0)}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
function Ec(e,t,n,i){const r=m();return Ni(r,Ur(),t)&&(g(),Xr(En(),r,e,t,n,i)),Ec}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */function os(e,t,n,i){return Ni(e,Ur(),n)?t+Ne(n)+i:yn}function af(e,t,n,i,r,o,a,h){const p=m(),I=g(),L=e+N,J=I.firstCreatePass?
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
function Ov(e,t,n,i,r,o,a,h,p){const I=t.consts,L=ts(t,e,4,a||null,fn(I,h));hc(t,n,L,fn(I,p)),Pi(t,L);const J=L.tViews=xa(2,L,i,r,o,t.directiveRegistry,t.pipeRegistry,null,t.schemas,I);return null!==t.queries&&(t.queries.template(t,L),J.queries=t.queries.embeddedTView(L)),L}(L,I,p,t,n,i,r,o,a):I.data[L];yi(J,!1);const Ae=p[11].createComment("");Ea(I,p,Ae,J),ki(Ae,p),Ra(p,p[L]=Rh(Ae,p,Ae,J)),Ai(J)&&uc(I,p,J),null!=a&&dc(p,J,h)}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */function lf(e){return _t(function bs(){return Zt.lFrame.contextLView}(),N+e)}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */function wc(e,t,n){const i=m();return Ni(i,Ur(),t)&&ur(g(),En(),i,e,t,i[11],n,!1),wc}function Mc(e,t,n,i,r){const a=r?"class":"style";Lh(e,n,t.inputs[a],a,i)}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */function ka(e,t,n,i){const r=m(),o=g(),a=N+e,h=r[11],p=r[a]=xl(h,t,function Oi(){return Zt.lFrame.currentNamespace}()),I=o.firstCreatePass?function Fv(e,t,n,i,r,o,a){const h=t.consts,I=ts(t,e,2,r,fn(h,o));return hc(t,n,I,fn(h,a)),null!==I.attrs&&Oa(I,I.attrs,!1),null!==I.mergedAttrs&&Oa(I,I.mergedAttrs,!0),null!==t.queries&&t.queries.elementStart(t,I),I}(a,o,r,0,t,n,i):o.data[a];yi(I,!0);const L=I.mergedAttrs;null!==L&&Gr(h,p,L);const J=I.classes;null!==J&&Nl(h,p,J);const Ae=I.styles;return null!==Ae&&xd(h,p,Ae),64!=(64&I.flags)&&Ea(o,r,p,I),0===function gr(){return Zt.lFrame.elementDepthCount}()&&ki(p,r),function Si(){Zt.lFrame.elementDepthCount++}(),Ai(I)&&(uc(o,r,I),Dh(o,I,r)),null!==i&&dc(r,I),ka}function Na(){let e=It();ji()?Tr():(e=e.parent,yi(e,!1));const t=e;!function _r(){Zt.lFrame.elementDepthCount--}();const n=g();return n.firstCreatePass&&(Pi(n,e),xn(e)&&n.queries.elementEnd(e)),null!=t.classesWithoutHost&&function xi(e){return 0!=(16&e.flags)}(t)&&Mc(n,t,m(),t.classesWithoutHost,!0),null!=t.stylesWithoutHost&&function Jn(e){return 0!=(32&e.flags)}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */(t)&&Mc(n,t,m(),t.stylesWithoutHost,!1),Na}function Sc(e,t,n,i){return ka(e,t,n,i),Na(),Sc
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */}function La(e,t,n){const i=m(),r=g(),o=e+N,a=r.firstCreatePass?function kv(e,t,n,i,r){const o=t.consts,a=fn(o,i),h=ts(t,e,8,"ng-container",a);return null!==a&&Oa(h,a,!0),hc(t,n,h,fn(o,r)),null!==t.queries&&t.queries.elementStart(t,h),h}(o,r,i,t,n):r.data[o];yi(a,!0);const h=i[o]=i[11].createComment("");return Ea(r,i,h,a),ki(h,i),Ai(a)&&(uc(r,i,a),Dh(r,a,i)),null!=n&&dc(i,a),La}function Ba(){let e=It();const t=g();return ji()?Tr():(e=e.parent,yi(e,!1)),t.firstCreatePass&&(Pi(t,e),xn(e)&&t.queries.elementEnd(e)),Ba}function Ac(e,t,n){return La(e,t,n),Ba(),Ac}function cf(){return m()}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */function Tc(e){return!!e&&"function"==typeof e.then}function uf(e){return!!e&&"function"==typeof e.subscribe}const df=uf;
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */function Ic(e,t,n,i){const r=m(),o=g(),a=It();return hf(o,r,r[11],a,e,t,!!n,i),Ic}function xc(e,t){const n=It(),i=m(),r=g();return hf(r,i,kh(k(r.data),n,i),n,e,t,!1),xc}function hf(e,t,n,i,r,o,a,h){const p=Ai(i),L=e.firstCreatePass&&Fh(e),J=t[8],Ae=Ph(t);let We=!0;if(3&i.type||h){const Bt=z(i,t),Kt=h?h(Bt):Bt,cn=Ae.length,Dt=h?rn=>h(Fn(rn[i.index])):i.index;if(Ln(n)){let rn=null;if(!h&&p&&(rn=function Nv(e,t,n,i){const r=e.cleanup;if(null!=r)for(let o=0;o<r.length-1;o+=2){const a=r[o];if(a===n&&r[o+1]===i){const h=t[7],p=r[o+2];return h.length>p?h[p]:null}"string"==typeof a&&(o+=2)}return null}(e,t,r,i.index)),null!==rn)(rn.__ngLastListenerFn__||rn).__ngNextListenerFn__=o,rn.__ngLastListenerFn__=o,We=!1;else{o=Rc(i,t,J,o,!1);const Nn=n.listen(Kt,r,o);Ae.push(o,Nn),L&&L.push(r,Dt,cn,cn+1)}}else o=Rc(i,t,J,o,!0),Kt.addEventListener(r,o,a),Ae.push(o),L&&L.push(r,Dt,cn,a)}else o=Rc(i,t,J,o,!1);const pt=i.outputs;let wt;if(We&&null!==pt&&(wt=pt[r])){const Bt=wt.length;if(Bt)for(let Kt=0;Kt<Bt;Kt+=2){const Xn=t[wt[Kt]][wt[Kt+1]].subscribe(o),Lo=Ae.length;Ae.push(o,Xn),L&&L.push(r,i.index,Lo,-(Lo+1))}}}function ff(e,t,n,i){try{return!1!==n(i)}catch(r){return Nh(e,r),!1}}function Rc(e,t,n,i,r){return function o(a){if(a===Function)return i;mc(2&e.flags?kt(e.index,t):t);let p=ff(t,0,i,a),I=o.__ngNextListenerFn__;for(;I;)p=ff(t,0,I,a)&&p,I=I.__ngNextListenerFn__;return r&&!1===p&&(a.preventDefault(),a.returnValue=!1),p}}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */function pf(e=1){return function dn(e){return(Zt.lFrame.contextLView=function Bn(e,t){for(;e>0;)t=t[15],e--;return t}(e,Zt.lFrame.contextLView))[8]}(e)}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */function Lv(e,t){let n=null;const i=function G_(e){const t=e.attrs;if(null!=t){const n=t.indexOf(5);if(0==(1&n))return t[n+1]}return null}(e);for(let r=0;r<t.length;r++){const o=t[r];if("*"!==o){if(null===i?Fd(e,o,!0):Y_(i,o))return r}else n=r}return n}function mf(e){const t=m()[16][6];if(!t.projection){const i=t.projection=As(e?e.length:1,null),r=i.slice();let o=t.child;for(;null!==o;){const a=e?Lv(o,e):0;null!==a&&(r[a]?r[a].projectionNext=o:i[a]=o,r[a]=o),o=o.next}}}function gf(e,t=0,n){const i=m(),r=g(),o=ts(r,N+e,16,null,n||null);null===o.projection&&(o.projection=t),Tr(),64!=(64&o.flags)&&function L_(e,t,n){Id(t[11],0,t,n,yd(e,n,t),Ed(n.parent||t[6],n,t))}(r,i,o)}function Oc(e,t,n){return Pc(e,"",t,"",n),Oc}function Pc(e,t,n,i,r){const o=m(),a=os(o,t,n,i);return a!==yn&&ur(g(),En(),o,e,a,o[11],r,!1),Pc}function Mf(e,t,n,i,r){const o=e[n+1],a=null===t;let h=i?xr(o):fo(o),p=!1;for(;0!==h&&(!1===p||a);){const L=e[h+1];Hv(e[h],t)&&(p=!0,e[h+1]=i?ec(L):ql(L)),h=i?xr(L):fo(L)}p&&(e[n+1]=i?ql(o):ec(o))}function Hv(e,t){return null===e||null==t||(Array.isArray(e)?e[1]:e)===t||!(!Array.isArray(e)||"string"!=typeof t)&&$o(e,t)>=0}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
function Fc(e,t,n){return Or(e,t,n,!1),Fc}function kc(e,t){return Or(e,t,null,!0),kc}function Or(e,t,n,i){const r=m(),o=g(),a=function rr(e){const t=Zt.lFrame,n=t.bindingIndex;return t.bindingIndex=t.bindingIndex+e,n}(2);o.firstUpdatePass&&function Pf(e,t,n,i){const r=e.data;if(null===r[n+1]){const o=r[mn()],a=function Of(e,t){return t>=e.expandoStartIndex}(e,n);(function Lf(e,t){return 0!=(e.flags&(t?16:32))}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */)(o,i)&&null===t&&!a&&(t=!1),t=function Zv(e,t,n,i){const r=k(e);let o=i?t.residualClasses:t.residualStyles;if(null===r)0===(i?t.classBindings:t.styleBindings)&&(n=Ws(n=Nc(null,e,t,n,i),t.attrs,i),o=null);else{const a=t.directiveStylingLast;if(-1===a||e[a]!==r)if(n=Nc(r,e,t,n,i),null===o){let p=function Xv(e,t,n){const i=n?t.classBindings:t.styleBindings;if(0!==fo(i))return e[xr(i)]}(e,t,i);void 0!==p&&Array.isArray(p)&&(p=Nc(null,e,t,p[1],i),p=Ws(p,t.attrs,i),function Qv(e,t,n,i){e[xr(n?t.classBindings:t.styleBindings)]=i}(e,t,i,p))}else o=function qv(e,t,n){let i;const r=t.directiveEnd;for(let o=1+t.directiveStylingLast;o<r;o++)i=Ws(i,e[o].hostAttrs,n);return Ws(i,t.attrs,n)}(e,t,i)}return void 0!==o&&(i?t.residualClasses=o:t.residualStyles=o),n}(r,o,t,i),function Bv(e,t,n,i,r,o){let a=o?t.classBindings:t.styleBindings,h=xr(a),p=fo(a);e[i]=n;let L,I=!1;if(Array.isArray(n)){const J=n;L=J[1],(null===L||$o(J,L)>0)&&(I=!0)}else L=n;if(r)if(0!==p){const Ae=xr(e[h+1]);e[i+1]=Aa(Ae,h),0!==Ae&&(e[Ae+1]=Jl(e[Ae+1],i)),e[h+1]=function Ty(e,t){return 131071&e|t<<17}(e[h+1],i)}else e[i+1]=Aa(h,0),0!==h&&(e[h+1]=Jl(e[h+1],i)),h=i;else e[i+1]=Aa(p,0),0===h?h=i:e[p+1]=Jl(e[p+1],i),p=i;I&&(e[i+1]=ql(e[i+1])),Mf(e,L,i,!0),Mf(e,L,i,!1),function Vv(e,t,n,i,r){const o=r?e.residualClasses:e.residualStyles;null!=o&&"string"==typeof t&&$o(o,t)>=0&&(n[i+1]=ec(n[i+1]))}(t,L,e,i,o),a=Aa(h,p),o?t.classBindings=a:t.styleBindings=a}(r,o,t,n,a,i)}}(o,e,a,i),t!==yn&&Ni(r,a,t)&&function kf(e,t,n,i,r,o,a,h){if(!(3&t.type))return;const p=e.data,I=p[h+1];Va(function uh(e){return 1==(1&e)}(I)?Nf(p,t,n,r,fo(I),a):void 0)||(Va(o)||function ch(e){return 2==(2&e)}(I)&&(o=Nf(p,null,n,r,h,a)),function V_(e,t,n,i,r){const o=Ln(e);if(t)r?o?e.addClass(n,i):n.classList.add(i):o?e.removeClass(n,i):n.classList.remove(i);else{let a=-1===i.indexOf("-")?void 0:Kr.DashCase;if(null==r)o?e.removeStyle(n,i,a):n.style.removeProperty(i);else{const h="string"==typeof r&&r.endsWith("!important");h&&(r=r.slice(0,-10),a|=Kr.Important),o?e.setStyle(n,i,r,a):n.style.setProperty(i,r,h?"important":"")}}}(i,a,E(mn(),n),r,o))}(o,o.data[mn()],r,r[11],e,r[a+1]=function tD(e,t){return null==e||("string"==typeof t?e+=t:"object"==typeof e&&(e=q(uo(e)))),e}(t,n),i,a)}function Nc(e,t,n,i,r){let o=null;const a=n.directiveEnd;let h=n.directiveStylingLast;for(-1===h?h=n.directiveStart:h++;h<a&&(o=t[h],i=Ws(i,o.hostAttrs,r),o!==e);)h++;return null!==e&&(n.directiveStylingLast=h),i}function Ws(e,t,n){const i=n?1:2;let r=-1;if(null!==t)for(let o=0;o<t.length;o++){const a=t[o];"number"==typeof a?r=a:r===i&&(Array.isArray(e)||(e=void 0===e?[]:["",e]),cr(e,a,!!n||t[++o]))}return void 0===e?null:e}function Nf(e,t,n,i,r,o){const a=null===t;let h;for(;r>0;){const p=e[r],I=Array.isArray(p),L=I?p[1]:p,J=null===L;let Ae=n[r+1];Ae===yn&&(Ae=J?yt:void 0);let We=J?ll(Ae,i):L===i?Ae:void 0;if(I&&!Va(We)&&(We=ll(p,i)),Va(We)&&(h=We,a))return h;const pt=e[r+1];r=a?xr(pt):fo(pt)}if(null!==t){let p=o?t.residualClasses:t.residualStyles;null!=p&&(h=ll(p,i))}return h}function Va(e){return void 0!==e}function Bf(e,t=""){const n=m(),i=g(),r=e+N,o=i.firstCreatePass?ts(i,r,1,t,null):i.data[r],a=n[r]=function Il(e,t){return Ln(e)?e.createText(t):e.createTextNode(t)}(n[11],t);Ea(i,n,a,o),yi(o,!1)}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */function Lc(e){return Ha("",e,""),Lc}function Ha(e,t,n){const i=m(),r=os(i,e,t,n);return r!==yn&&po(i,mn(),r),Ha}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
function Bc(e,t,n){const i=m();return Ni(i,Ur(),t)&&ur(g(),En(),i,e,t,i[11],n,!0),Bc}function Vc(e,t,n){const i=m();if(Ni(i,Ur(),t)){const o=g(),a=En();ur(o,a,i,e,t,kh(k(o.data),a,i),n,!0)}return Vc}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */const Fo=void 0;var bD=["en",[["a","p"],["AM","PM"],Fo],[["AM","PM"],Fo,Fo],[["S","M","T","W","T","F","S"],["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],["Su","Mo","Tu","We","Th","Fr","Sa"]],Fo,[["J","F","M","A","M","J","J","A","S","O","N","D"],["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],["January","February","March","April","May","June","July","August","September","October","November","December"]],Fo,[["B","A"],["BC","AD"],["Before Christ","Anno Domini"]],0,[6,0],["M/d/yy","MMM d, y","MMMM d, y","EEEE, MMMM d, y"],["h:mm a","h:mm:ss a","h:mm:ss a z","h:mm:ss a zzzz"],["{1}, {0}",Fo,"{1} 'at' {0}",Fo],[".",",",";","%","+","-","E","\xd7","\u2030","\u221e","NaN",":"],["#,##0.###","#,##0%","\xa4#,##0.00","#E0"],"USD","$","US Dollar",{},"ltr",function DD(e){const n=Math.floor(Math.abs(e)),i=e.toString().replace(/^[^.]*\.?/,"").length;return 1===n&&0===i?1:5}];
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */let ps={};function Hc(e){const t=function CD(e){return e.toLowerCase().replace(/_/g,"-")}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */(e);let n=ip(t);if(n)return n;const i=t.split("-")[0];if(n=ip(i),n)return n;if("en"===i)return bD;throw new Error(`Missing locale data for the locale "${e}".`)}function np(e){return Hc(e)[ln.PluralCase]}function ip(e){return e in ps||(ps[e]=se.ng&&se.ng.common&&se.ng.common.locales&&se.ng.common.locales[e]),ps[e]}var ln=(()=>((ln=ln||{})[ln.LocaleId=0]="LocaleId",ln[ln.DayPeriodsFormat=1]="DayPeriodsFormat",ln[ln.DayPeriodsStandalone=2]="DayPeriodsStandalone",ln[ln.DaysFormat=3]="DaysFormat",ln[ln.DaysStandalone=4]="DaysStandalone",ln[ln.MonthsFormat=5]="MonthsFormat",ln[ln.MonthsStandalone=6]="MonthsStandalone",ln[ln.Eras=7]="Eras",ln[ln.FirstDayOfWeek=8]="FirstDayOfWeek",ln[ln.WeekendRange=9]="WeekendRange",ln[ln.DateFormat=10]="DateFormat",ln[ln.TimeFormat=11]="TimeFormat",ln[ln.DateTimeFormat=12]="DateTimeFormat",ln[ln.NumberSymbols=13]="NumberSymbols",ln[ln.NumberFormats=14]="NumberFormats",ln[ln.CurrencyCode=15]="CurrencyCode",ln[ln.CurrencySymbol=16]="CurrencySymbol",ln[ln.CurrencyName=17]="CurrencyName",ln[ln.Currencies=18]="Currencies",ln[ln.Directionality=19]="Directionality",ln[ln.PluralCase=20]="PluralCase",ln[ln.ExtraData=21]="ExtraData",ln))();const ms="en-US";
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
let rp=ms;function zc(e,t,n,i,r){if(e=te(e),Array.isArray(e))for(let o=0;o<e.length;o++)zc(e[o],t,n,i,r);else{const o=g(),a=m();let h=Ro(e)?e:te(e.provide),p=Zd(e);const I=It(),L=1048575&I.providerIndexes,J=I.directiveStart,Ae=I.providerIndexes>>20;if(Ro(e)||!e.multi){const We=new en(p,r,es),pt=$c(h,t,r?L:L+Ae,J);-1===pt?(jo(Ao(I,a),o,h),Gc(o,e,t.length),t.push(h),I.directiveStart++,I.directiveEnd++,r&&(I.providerIndexes+=1048576),n.push(We),a.push(We)):(n[pt]=We,a[pt]=We)}else{const We=$c(h,t,L+Ae,J),pt=$c(h,t,L,L+Ae),wt=We>=0&&n[We],Bt=pt>=0&&n[pt];if(r&&!Bt||!r&&!wt){jo(Ao(I,a),o,h);const Kt=function vb(e,t,n,i,r){const o=new en(e,n,es);return o.multi=[],o.index=t,o.componentProviders=0,Ip(o,r,i&&!n),o}(r?yb:_b,n.length,r,i,p);!r&&Bt&&(n[pt].providerFactory=Kt),Gc(o,e,t.length,0),t.push(h),I.directiveStart++,I.directiveEnd++,r&&(I.providerIndexes+=1048576),n.push(Kt),a.push(Kt)}else Gc(o,e,We>-1?We:pt,Ip(n[r?pt:We],p,!r&&i));!r&&i&&Bt&&n[pt].componentProviders++}}}function Gc(e,t,n,i){const r=Ro(t),o=function ry(e){return!!e.useClass}(t);if(r||o){const p=(o?te(t.useClass):t).prototype.ngOnDestroy;if(p){const I=e.destroyHooks||(e.destroyHooks=[]);if(!r&&t.multi){const L=I.indexOf(n);-1===L?I.push(n,[i,p]):I[L+1].push(i,p)}else I.push(n,p)}}}function Ip(e,t,n){return n&&e.componentProviders++,e.multi.push(t)-1}function $c(e,t,n,i){for(let r=n;r<i;r++)if(t[r]===e)return r;return-1}function _b(e,t,n,i){return Wc(this.multi,[])}function yb(e,t,n,i){const r=this.multi;let o;if(this.providerFactory){const a=this.providerFactory.componentProviders,h=Go(n,n[1],this.providerFactory.index,i);o=h.slice(0,a),Wc(r,o);for(let p=a;p<h.length;p++)o.push(h[p])}else o=[],Wc(r,o);return o}function Wc(e,t){for(let n=0;n<e.length;n++)t.push((0,e[n])());return t}function xp(e,t=[]){return n=>{n.providersResolver=(i,r)=>
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
function gb(e,t,n){const i=g();if(i.firstCreatePass){const r=zn(e);zc(n,i.data,i.blueprint,r,!0),zc(t,i.data,i.blueprint,r,!1)}}(i,r?r(e):e,t)}}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */class bb{resolveComponentFactory(t){throw function Db(e){const t=Error(`No component factory found for ${q(e)}. Did you add it to @NgModule.entryComponents?`);return t.ngComponent=e,t}(t)}}let Qs=(()=>{class e{}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
return e.NULL=new bb,e})();class ko{}class Op{}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */class Pp{}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */function Eb(){return _s(It(),m())}function _s(e,t){return new qs(z(e,t))}let qs=(()=>{class e{constructor(n){this.nativeElement=n}}return e.__NG_ELEMENT_ID__=Eb,e})();function wb(e){return e instanceof qs?e.nativeElement:e}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */class Fp{}let Mb=(()=>{class e{}return e.__NG_ELEMENT_ID__=()=>function Ab(){const e=m(),n=kt(It().index,e);return function Sb(e){return e[11]}(tn(n)?n:e)}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */(),e})(),Tb=(()=>{class e{}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
return e.\u0275prov=Ce({token:e,providedIn:"root",factory:()=>null}),e})();class kp{constructor(t){this.full=t,this.major=t.split(".")[0],this.minor=t.split(".")[1],this.patch=t.split(".").slice(2).join(".")}}const Ib=new kp("14.0.1"),Yc={};
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
function $a(e,t,n,i,r=!1){for(;null!==n;){const o=t[n.index];if(null!==o&&i.push(Fn(o)),Cn(o))for(let h=10;h<o.length;h++){const p=o[h],I=p[1].firstChild;null!==I&&$a(p[1],p,I,i)}const a=n.type;if(8&a)$a(e,t,n.child,i);else if(32&a){const h=Sl(n,t);let p;for(;p=h();)i.push(p)}else if(16&a){const h=Ad(t,n);if(Array.isArray(h))i.push(...h);else{const p=Hs(t[16]);$a(p[1],p,h,i,!0)}}n=r?n.projectionNext:n.next}return i}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */class Js{constructor(t,n){this._lView=t,this._cdRefInjectingView=n,this._appRef=null,this._attachedToViewContainer=!1}get rootNodes(){const t=this._lView,n=t[1];return $a(n,t,n.firstChild,[])}get context(){return this._lView[8]}set context(t){this._lView[8]=t}get destroyed(){return 128==(128&this._lView[2])}destroy(){if(this._appRef)this._appRef.detachView(this);else if(this._attachedToViewContainer){const t=this._lView[3];if(Cn(t)){const n=t[8],i=n?n.indexOf(this):-1;i>-1&&(Rl(t,i),ha(n,i))}this._attachedToViewContainer=!1}_d(this._lView[1],this._lView)}onDestroy(t){wh(this._lView[1],this._lView,null,t)}markForCheck(){mc(this._cdRefInjectingView||this._lView)}detach(){this._lView[2]&=-65}reattach(){this._lView[2]|=64}detectChanges(){!function _c(e,t,n){const i=t[10];i.begin&&i.begin();try{is(e,t,e.template,n)}catch(r){throw Nh(t,r),r}finally{i.end&&i.end()}}(this._lView[1],this._lView,this.context)}checkNoChanges(){}attachToViewContainerRef(){if(this._appRef)throw new xe(902,"");this._attachedToViewContainer=!0}detachFromAppRef(){this._appRef=null,function I_(e,t){js(e,t,t[11],2,null,null)}(this._lView[1],this._lView)}attachToAppRef(t){if(this._attachedToViewContainer)throw new xe(902,"");this._appRef=t}}class xb extends Js{constructor(t){super(t),this._view=t}detectChanges(){Oh(this._view)}checkNoChanges(){}get context(){return null}}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */class Kc extends Qs{constructor(t){super(),this.ngModule=t}resolveComponentFactory(t){const n=sn(t);return new Zc(n,this.ngModule)}}function Np(e){const t=[];for(let n in e)e.hasOwnProperty(n)&&t.push({propName:e[n],templateName:n});return t}class Ob{constructor(t,n){this.injector=t,this.parentInjector=n}get(t,n,i){const r=this.injector.get(t,Yc,i);return r!==Yc||n===Yc?r:this.parentInjector.get(t,n,i)}}class Zc extends Pp{constructor(t,n){super(),this.componentDef=t,this.ngModule=n,this.componentType=t.type,this.selector=function Z_(e){return e.map(K_).join(",")}(t.selectors),this.ngContentSelectors=t.ngContentSelectors?t.ngContentSelectors:[],this.isBoundToModule=!!n}get inputs(){return Np(this.componentDef.inputs)}get outputs(){return Np(this.componentDef.outputs)}create(t,n,i,r){let o=(r=r||this.ngModule)instanceof Qo?r:r?.injector;o&&null!==this.componentDef.getStandaloneInjector&&(o=this.componentDef.getStandaloneInjector(o)||o);const a=o?new Ob(t,o):t,h=a.get(Fp,ti),p=a.get(Tb,null),I=h.createRenderer(null,this.componentDef),L=this.componentDef.selectors[0][0]||"div",J=i?function Eh(e,t,n){if(Ln(e))return e.selectRootElement(t,n===ve.ShadowDom);let i="string"==typeof t?e.querySelector(t):t;return i.textContent="",i}(I,i,this.componentDef.encapsulation):xl(h.createRenderer(null,this.componentDef),L,function Rb(e){const t=e.toLowerCase();return"svg"===t?"svg":"math"===t?"math":null}(L)),Ae=this.componentDef.onPush?288:272,We=function Kh(e,t){return{components:[],scheduler:e||D_,clean:uv,playerHandler:t||null,flags:0}}(),pt=xa(0,null,null,1,0,null,null,null,null,null),wt=Us(null,pt,We,Ae,null,null,h,I,p,a,null);let Bt,Kt;dt(wt);try{const cn=function Wh(e,t,n,i,r,o){const a=n[1];n[22]=e;const p=ts(a,22,2,"#host",null),I=p.mergedAttrs=t.hostAttrs;null!==I&&(Oa(p,I,!0),null!==e&&(Gr(r,e,I),null!==p.classes&&Nl(r,e,p.classes),null!==p.styles&&xd(r,e,p.styles)));const L=i.createRenderer(e,t),J=Us(n,bh(t),null,t.onPush?32:16,n[22],p,i,L,o||null,null,null);return a.firstCreatePass&&(jo(Ao(p,n),a,t.type),Th(a,p),Ih(p,n.length,1)),Ra(n,J),n[22]=J}(J,this.componentDef,wt,h,I);if(J)if(i)Gr(I,J,["ng-version",Ib.full]);else{const{attrs:Dt,classes:rn}=function X_(e){const t=[],n=[];let i=1,r=2;for(;i<e.length;){let o=e[i];if("string"==typeof o)2===r?""!==o&&t.push(o,e[++i]):8===r&&n.push(o);else{if(!Ir(r))break;r=o}i++}return{attrs:t,classes:n}}(this.componentDef.selectors[0]);Dt&&Gr(I,J,Dt),rn&&rn.length>0&&Nl(I,J,rn.join(" "))}if(Kt=it(pt,N),void 0!==n){const Dt=Kt.projection=[];for(let rn=0;rn<this.ngContentSelectors.length;rn++){const Nn=n[rn];Dt.push(null!=Nn?Array.from(Nn):null)}}Bt=function Yh(e,t,n,i,r){const o=n[1],a=function Ky(e,t,n){const i=It();e.firstCreatePass&&(n.providersResolver&&n.providersResolver(n),xh(e,i,t,ns(e,t,1,null),n));const r=Go(t,e,i.directiveStart,i);ki(r,t);const o=z(i,t);return o&&ki(o,t),r}(o,n,t);if(i.components.push(a),e[8]=a,null!==r)for(const p of r)p(a,t);if(t.contentQueries){const p=It();t.contentQueries(1,a,p.directiveStart)}const h=It();return!o.firstCreatePass||null===t.hostBindings&&null===t.hostAttrs||(jn(h.index),Sh(n[1],h,0,h.directiveStart,h.directiveEnd,t),Ah(t,a)),a}(cn,this.componentDef,wt,We,[bv]),zs(pt,wt,null)}finally{nn()}return new Fb(this.componentType,Bt,_s(Kt,wt),wt,Kt)}}class Fb extends class Cb{}{constructor(t,n,i,r,o){super(),this.location=i,this._rootLView=r,this._tNode=o,this.instance=n,this.hostView=this.changeDetectorRef=new xb(r),this.componentType=t}get injector(){return new _(this._tNode,this._rootLView)}destroy(){this.hostView.destroy()}onDestroy(t){this.hostView.onDestroy(t)}}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */function kb(e,t){return new Lp(e,t??null)}class Lp extends ko{constructor(t,n){super(),this._parent=n,this._bootstrapComponents=[],this.injector=this,this.destroyCbs=[],this.componentFactoryResolver=new Kc(this);const i=On(t);this._bootstrapComponents=ho(i.bootstrap),this._r3Injector=Qd(t,n,[{provide:ko,useValue:this},{provide:Qs,useValue:this.componentFactoryResolver}],q(t),new Set(["environment"])),this._r3Injector.resolveInjectorInitializers(),this.instance=this.get(t)}get(t,n=Zr.THROW_IF_NOT_FOUND,i=Mt.Default){return t===Zr||t===ko||t===Vl?this:this._r3Injector.get(t,n,i)}destroy(){const t=this._r3Injector;!t.destroyed&&t.destroy(),this.destroyCbs.forEach(n=>n()),this.destroyCbs=null}onDestroy(t){this.destroyCbs.push(t)}}class Xc extends Op{constructor(t){super(),this.moduleType=t}create(t){return new Lp(this.moduleType,t)}}class Nb extends ko{constructor(t,n,i){super(),this.componentFactoryResolver=new Kc(this),this.instance=null;const r=new Kd([...t,{provide:ko,useValue:this},{provide:Qs,useValue:this.componentFactoryResolver}],n||Ul(),i,new Set(["environment"]));this.injector=r,r.resolveInjectorInitializers()}destroy(){this.injector.destroy()}onDestroy(t){this.injector.onDestroy(t)}}function Qc(e,t=null,n=null){return new Nb(e,t,n).injector}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
function Bp(e,t,n){const i=vi()+e,r=m();return r[i]===yn?Qr(r,i,n?t.call(n):t()):function $s(e,t){return e[t]}(r,i)}function Vp(e,t,n,i){return Hp(m(),vi(),e,t,n,i)}function Hp(e,t,n,i,r,o){const a=t+n;return Ni(e,a,r)?Qr(e,a+1,o?i.call(o,r):i(r)):function ea(e,t){const n=e[t];return n===yn?void 0:n}(e,a+1)}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
function $p(e,t){const n=g();let i;const r=e+N;n.firstCreatePass?(i=function Kb(e,t){if(t)for(let n=t.length-1;n>=0;n--){const i=t[n];if(e===i.name)return i}}(t,n.pipeRegistry),n.data[r]=i,i.onDestroy&&(n.destroyHooks||(n.destroyHooks=[])).push(r,i.onDestroy)):i=n.data[r];const o=i.factory||(i.factory=Mi(i.type)),a=F(es);try{const h=Co(!1),p=o();return Co(h),function Pv(e,t,n,i){n>=e.data.length&&(e.data[n]=null,e.blueprint[n]=null),t[n]=i}(n,m(),r,p),p}finally{F(a)}}function Wp(e,t,n){const i=e+N,r=m(),o=_t(r,i);return function ta(e,t){return e[1].data[t].pure}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */(r,i)?Hp(r,vi(),t,o.transform,n,o):o.transform(n)}function qc(e){return t=>{setTimeout(e,void 0,t)}}const eo=class Jb extends s.x{constructor(t=!1){super(),this.__isAsync=t}emit(t){super.next(t)}subscribe(t,n,i){let r=t,o=n||(()=>null),a=i;if(t&&"object"==typeof t){const p=t;r=p.next?.bind(p),o=p.error?.bind(p),a=p.complete?.bind(p)}this.__isAsync&&(o=qc(o),r&&(r=qc(r)),a&&(a=qc(a)));const h=super.subscribe({next:r,error:o,complete:a});return t instanceof v.w0&&t.add(h),h}};
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */function eC(){return this._results[Oo()]()}class Jc{constructor(t=!1){this._emitDistinctChangesOnly=t,this.dirty=!0,this._results=[],this._changesDetected=!1,this._changes=null,this.length=0,this.first=void 0,this.last=void 0;const n=Oo(),i=Jc.prototype;i[n]||(i[n]=eC)}get changes(){return this._changes||(this._changes=new eo)}get(t){return this._results[t]}map(t){return this._results.map(t)}filter(t){return this._results.filter(t)}find(t){return this._results.find(t)}reduce(t,n){return this._results.reduce(t,n)}forEach(t){this._results.forEach(t)}some(t){return this._results.some(t)}toArray(){return this._results.slice()}toString(){return this._results.toString()}reset(t,n){const i=this;i.dirty=!1;const r=lr(t);(this._changesDetected=!function tg(e,t,n){if(e.length!==t.length)return!1;for(let i=0;i<e.length;i++){let r=e[i],o=t[i];if(n&&(r=n(r),o=n(o)),o!==r)return!1}return!0}(i._results,r,n))&&(i._results=r,i.length=r.length,i.last=r[this.length-1],i.first=r[0])}notifyOnChanges(){this._changes&&(this._changesDetected||!this._emitDistinctChangesOnly)&&this._changes.emit(this)}setDirty(){this.dirty=!0}destroy(){this.changes.complete(),this.changes.unsubscribe()}}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */let na=(()=>{class e{}return e.__NG_ELEMENT_ID__=iC,e})();const tC=na,nC=class extends tC{constructor(t,n,i){super(),this._declarationLView=t,this._declarationTContainer=n,this.elementRef=i}createEmbeddedView(t,n){const i=this._declarationTContainer.tViews,r=Us(this._declarationLView,i,t,16,null,i.declTNode,null,null,null,null,n||null);r[17]=this._declarationLView[this._declarationTContainer.index];const a=this._declarationLView[19];return null!==a&&(r[19]=a.createEmbeddedView(i)),zs(i,r,t),new Js(r)}};function iC(){return Wa(It(),m())}function Wa(e,t){return 4&e.type?new nC(t,e,_s(e,t)):null}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */let Ya=(()=>{class e{}return e.__NG_ELEMENT_ID__=rC,e})();function rC(){return Zp(It(),m())}const oC=Ya,Yp=class extends oC{constructor(t,n,i){super(),this._lContainer=t,this._hostTNode=n,this._hostLView=i}get element(){return _s(this._hostTNode,this._hostLView)}get injector(){return new _(this._hostTNode,this._hostLView)}get parentInjector(){const t=To(this._hostTNode,this._hostLView);if(bo(t)){const n=lo(t,this._hostLView),i=ao(t);return new _(n[1].data[i+8],n)}return new _(null,this._hostLView)}clear(){for(;this.length>0;)this.remove(this.length-1)}get(t){const n=Kp(this._lContainer);return null!==n&&n[t]||null}get length(){return this._lContainer.length-10}createEmbeddedView(t,n,i){let r,o;"number"==typeof i?r=i:null!=i&&(r=i.index,o=i.injector);const a=t.createEmbeddedView(n||{},o);return this.insert(a,r),a}createComponent(t,n,i,r,o){const a=t&&!function Ss(e){return"function"==typeof e}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */(t);let h;if(a)h=n;else{const J=n||{};h=J.index,i=J.injector,r=J.projectableNodes,o=J.environmentInjector||J.ngModuleRef}const p=a?t:new Zc(sn(t)),I=i||this.parentInjector;if(!o&&null==p.ngModule){const Ae=(a?I:this.parentInjector).get(Qo,null);Ae&&(o=Ae)}const L=p.create(I,r,void 0,o);return this.insert(L.hostView,h),L}insert(t,n){const i=t._lView,r=i[1];if(function Sn(e){return Cn(e[3])}(i)){const L=this.indexOf(t);if(-1!==L)this.detach(L);else{const J=i[3],Ae=new Yp(J,J[6],J[3]);Ae.detach(Ae.indexOf(t))}}const o=this._adjustIndex(n),a=this._lContainer;!function R_(e,t,n,i){const r=10+i,o=n.length;i>0&&(n[r-1][4]=t),i<o-10?(t[4]=n[r],Ru(n,10+i,t)):(n.push(t),t[4]=null),t[3]=n;const a=t[17];null!==a&&n!==a&&function O_(e,t){const n=e[9];t[16]!==t[3][3][16]&&(e[2]=!0),null===n?e[9]=[t]:n.push(t)}(a,t);const h=t[19];null!==h&&h.insertView(e),t[2]|=64}(r,i,a,o);const h=Fl(o,a),p=i[11],I=Ca(p,a[7]);return null!==I&&function T_(e,t,n,i,r,o){i[0]=r,i[6]=t,js(e,i,n,1,r,o)}(r,a[6],p,i,I,h),t.attachToViewContainerRef(),Ru(eu(a),o,t),t}move(t,n){return this.insert(t,n)}indexOf(t){const n=Kp(this._lContainer);return null!==n?n.indexOf(t):-1}remove(t){const n=this._adjustIndex(t,-1),i=Rl(this._lContainer,n);i&&(ha(eu(this._lContainer),n),_d(i[1],i))}detach(t){const n=this._adjustIndex(t,-1),i=Rl(this._lContainer,n);return i&&null!=ha(eu(this._lContainer),n)?new Js(i):null}_adjustIndex(t,n=0){return t??this.length+n}};function Kp(e){return e[8]}function eu(e){return e[8]||(e[8]=[])}function Zp(e,t){let n;const i=t[e.index];if(Cn(i))n=i;else{let r;if(8&e.type)r=Fn(i);else{const o=t[11];r=o.createComment("");const a=z(e,t);xo(o,Ca(o,a),r,function N_(e,t){return Ln(e)?e.nextSibling(t):t.nextSibling}(o,a),!1)}t[e.index]=n=Rh(i,t,r,e),Ra(t,n)}return new Yp(n,e,t)}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */class tu{constructor(t){this.queryList=t,this.matches=null}clone(){return new tu(this.queryList)}setDirty(){this.queryList.setDirty()}}class nu{constructor(t=[]){this.queries=t}createEmbeddedView(t){const n=t.queries;if(null!==n){const i=null!==t.contentQueries?t.contentQueries[0]:n.length,r=[];for(let o=0;o<i;o++){const a=n.getByIndex(o);r.push(this.queries[a.indexInDeclarationView].clone())}return new nu(r)}return null}insertView(t){this.dirtyQueriesWithMatches(t)}detachView(t){this.dirtyQueriesWithMatches(t)}dirtyQueriesWithMatches(t){for(let n=0;n<this.queries.length;n++)null!==rm(t,n).matches&&this.queries[n].setDirty()}}class Xp{constructor(t,n,i=null){this.predicate=t,this.flags=n,this.read=i}}class iu{constructor(t=[]){this.queries=t}elementStart(t,n){for(let i=0;i<this.queries.length;i++)this.queries[i].elementStart(t,n)}elementEnd(t){for(let n=0;n<this.queries.length;n++)this.queries[n].elementEnd(t)}embeddedTView(t){let n=null;for(let i=0;i<this.length;i++){const r=null!==n?n.length:0,o=this.getByIndex(i).embeddedTView(t,r);o&&(o.indexInDeclarationView=i,null!==n?n.push(o):n=[o])}return null!==n?new iu(n):null}template(t,n){for(let i=0;i<this.queries.length;i++)this.queries[i].template(t,n)}getByIndex(t){return this.queries[t]}get length(){return this.queries.length}track(t){this.queries.push(t)}}class ru{constructor(t,n=-1){this.metadata=t,this.matches=null,this.indexInDeclarationView=-1,this.crossesNgTemplate=!1,this._appliesToNextNode=!0,this._declarationNodeIndex=n}elementStart(t,n){this.isApplyingToNode(n)&&this.matchTNode(t,n)}elementEnd(t){this._declarationNodeIndex===t.index&&(this._appliesToNextNode=!1)}template(t,n){this.elementStart(t,n)}embeddedTView(t,n){return this.isApplyingToNode(t)?(this.crossesNgTemplate=!0,this.addMatch(-t.index,n),new ru(this.metadata)):null}isApplyingToNode(t){if(this._appliesToNextNode&&1!=(1&this.metadata.flags)){const n=this._declarationNodeIndex;let i=t.parent;for(;null!==i&&8&i.type&&i.index!==n;)i=i.parent;return n===(null!==i?i.index:-1)}return this._appliesToNextNode}matchTNode(t,n){const i=this.metadata.predicate;if(Array.isArray(i))for(let r=0;r<i.length;r++){const o=i[r];this.matchTNodeWithReadOption(t,n,lC(n,o)),this.matchTNodeWithReadOption(t,n,zo(n,t,o,!1,!1))}else i===na?4&n.type&&this.matchTNodeWithReadOption(t,n,-1):this.matchTNodeWithReadOption(t,n,zo(n,t,i,!1,!1))}matchTNodeWithReadOption(t,n,i){if(null!==i){const r=this.metadata.read;if(null!==r)if(r===qs||r===Ya||r===na&&4&n.type)this.addMatch(n.index,-2);else{const o=zo(n,t,r,!1,!1);null!==o&&this.addMatch(n.index,o)}else this.addMatch(n.index,i)}}addMatch(t,n){null===this.matches?this.matches=[t,n]:this.matches.push(t,n)}}function lC(e,t){const n=e.localNames;if(null!==n)for(let i=0;i<n.length;i+=2)if(n[i]===t)return n[i+1];return null}function uC(e,t,n,i){return-1===n?function cC(e,t){return 11&e.type?_s(e,t):4&e.type?Wa(e,t):null}(t,e):-2===n?function dC(e,t,n){return n===qs?_s(t,e):n===na?Wa(t,e):n===Ya?Zp(t,e):void 0}(e,t,i):Go(e,e[1],n,t)}function Qp(e,t,n,i){const r=t[19].queries[i];if(null===r.matches){const o=e.data,a=n.matches,h=[];for(let p=0;p<a.length;p+=2){const I=a[p];h.push(I<0?null:uC(t,o[I],a[p+1],n.metadata.read))}r.matches=h}return r.matches}function ou(e,t,n,i){const r=e.queries.getByIndex(n),o=r.matches;if(null!==o){const a=Qp(e,t,r,n);for(let h=0;h<o.length;h+=2){const p=o[h];if(p>0)i.push(a[h/2]);else{const I=o[h+1],L=t[-p];for(let J=10;J<L.length;J++){const Ae=L[J];Ae[17]===Ae[3]&&ou(Ae[1],Ae,I,i)}if(null!==L[9]){const J=L[9];for(let Ae=0;Ae<J.length;Ae++){const We=J[Ae];ou(We[1],We,I,i)}}}}}return i}function qp(e){const t=m(),n=g(),i=W();be(i+1);const r=rm(n,i);if(e.dirty&&Rn(t)===(2==(2&r.metadata.flags))){if(null===r.matches)e.reset([]);else{const o=r.crossesNgTemplate?ou(n,t,i,[]):Qp(n,t,r,i);e.reset(o,wb),e.notifyOnChanges()}return!0}return!1}function Jp(e,t,n){const i=g();i.firstCreatePass&&(im(i,new Xp(e,t,n),-1),2==(2&t)&&(i.staticViewQueries=!0)),nm(i,m(),t)}function em(e,t,n,i){const r=g();if(r.firstCreatePass){const o=It();im(r,new Xp(t,n,i),o.index),function fC(e,t){const n=e.contentQueries||(e.contentQueries=[]);t!==(n.length?n[n.length-1]:-1)&&n.push(e.queries.length-1,t)}(r,e),2==(2&n)&&(r.staticContentQueries=!0)}nm(r,m(),n)}function tm(){return function hC(e,t){return e[19].queries[t].queryList}(m(),W())}function nm(e,t,n){const i=new Jc(4==(4&n));wh(e,t,i,i.destroy),null===t[19]&&(t[19]=new nu),t[19].queries.push(new tu(i))}function im(e,t,n){null===e.queries&&(e.queries=new iu),e.queries.track(new ru(t,n))}function rm(e,t){return e.queries.getByIndex(t)}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */function vs(e){const t=sn(e)||Qt(e)||vn(e);return null!==t&&t.standalone}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
function Za(...e){}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */const Em=new Vn("Application Initializer");let Xa=(()=>{class e{constructor(n){this.appInits=n,this.resolve=Za,this.reject=Za,this.initialized=!1,this.done=!1,this.donePromise=new Promise((i,r)=>{this.resolve=i,this.reject=r})}runInitializers(){if(this.initialized)return;const n=[],i=()=>{this.done=!0,this.resolve()};if(this.appInits)for(let r=0;r<this.appInits.length;r++){const o=this.appInits[r]();if(Tc(o))n.push(o);else if(df(o)){const a=new Promise((h,p)=>{o.subscribe({complete:h,error:p})});n.push(a)}}Promise.all(n).then(()=>{i()}).catch(r=>{this.reject(r)}),0===n.length&&i(),this.initialized=!0}}return e.\u0275fac=function(n){return new(n||e)(ci(Em,8))},e.\u0275prov=Ce({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */const wm=new Vn("AppId",{providedIn:"root",factory:function Mm(){return`${uu()}${uu()}${uu()}`}});function uu(){return String.fromCharCode(97+Math.floor(25*Math.random()))}const Sm=new Vn("Platform Initializer"),FC=new Vn("Platform ID",{providedIn:"platform",factory:()=>"unknown"}),Am=new Vn("appBootstrapListener"),kC=new Vn("AnimationModuleType");
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */let NC=(()=>{class e{log(n){console.log(n)}warn(n){console.warn(n)}}return e.\u0275fac=function(n){return new(n||e)},e.\u0275prov=Ce({token:e,factory:e.\u0275fac,providedIn:"platform"}),e})();
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */const Qa=new Vn("LocaleId",{providedIn:"root",factory:()=>Lu(Qa,Mt.Optional|Mt.SkipSelf)||function LC(){return typeof $localize<"u"&&$localize.locale||ms}()}),BC=new Vn("DefaultCurrencyCode",{providedIn:"root",factory:()=>"USD"});
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
class VC{constructor(t,n){this.ngModuleFactory=t,this.componentFactories=n}}let HC=(()=>{class e{compileModuleSync(n){return new Xc(n)}compileModuleAsync(n){return Promise.resolve(this.compileModuleSync(n))}compileModuleAndAllComponentsSync(n){const i=this.compileModuleSync(n),o=ho(On(n).declarations).reduce((a,h)=>{const p=sn(h);return p&&a.push(new Zc(p)),a},[]);return new VC(i,o)}compileModuleAndAllComponentsAsync(n){return Promise.resolve(this.compileModuleAndAllComponentsSync(n))}clearCache(){}clearCacheFor(n){}getModuleId(n){}}return e.\u0275fac=function(n){return new(n||e)},e.\u0275prov=Ce({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
const UC=(()=>Promise.resolve(0))();function du(e){typeof Zone>"u"?UC.then(()=>{e&&e.apply(null,null)}):Zone.current.scheduleMicroTask("scheduleMicrotask",e)}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
class dr{constructor({enableLongStackTrace:t=!1,shouldCoalesceEventChangeDetection:n=!1,shouldCoalesceRunChangeDetection:i=!1}){if(this.hasPendingMacrotasks=!1,this.hasPendingMicrotasks=!1,this.isStable=!0,this.onUnstable=new eo(!1),this.onMicrotaskEmpty=new eo(!1),this.onStable=new eo(!1),this.onError=new eo(!1),typeof Zone>"u")throw new Error("In this configuration Angular requires Zone.js");Zone.assertZonePatched();const r=this;r._nesting=0,r._outer=r._inner=Zone.current,Zone.TaskTrackingZoneSpec&&(r._inner=r._inner.fork(new Zone.TaskTrackingZoneSpec)),t&&Zone.longStackTraceZoneSpec&&(r._inner=r._inner.fork(Zone.longStackTraceZoneSpec)),r.shouldCoalesceEventChangeDetection=!i&&n,r.shouldCoalesceRunChangeDetection=i,r.lastRequestAnimationFrameId=-1,r.nativeRequestAnimationFrame=function zC(){let e=se.requestAnimationFrame,t=se.cancelAnimationFrame;if(typeof Zone<"u"&&e&&t){const n=e[Zone.__symbol__("OriginalDelegate")];n&&(e=n);const i=t[Zone.__symbol__("OriginalDelegate")];i&&(t=i)}return{nativeRequestAnimationFrame:e,nativeCancelAnimationFrame:t}}().nativeRequestAnimationFrame,function WC(e){const t=()=>{!function $C(e){e.isCheckStableRunning||-1!==e.lastRequestAnimationFrameId||(e.lastRequestAnimationFrameId=e.nativeRequestAnimationFrame.call(se,()=>{e.fakeTopEventTask||(e.fakeTopEventTask=Zone.root.scheduleEventTask("fakeTopEventTask",()=>{e.lastRequestAnimationFrameId=-1,fu(e),e.isCheckStableRunning=!0,hu(e),e.isCheckStableRunning=!1},void 0,()=>{},()=>{})),e.fakeTopEventTask.invoke()}),fu(e))}(e)};e._inner=e._inner.fork({name:"angular",properties:{isAngularZone:!0},onInvokeTask:(n,i,r,o,a,h)=>{try{return Tm(e),n.invokeTask(r,o,a,h)}finally{(e.shouldCoalesceEventChangeDetection&&"eventTask"===o.type||e.shouldCoalesceRunChangeDetection)&&t(),Im(e)}},onInvoke:(n,i,r,o,a,h,p)=>{try{return Tm(e),n.invoke(r,o,a,h,p)}finally{e.shouldCoalesceRunChangeDetection&&t(),Im(e)}},onHasTask:(n,i,r,o)=>{n.hasTask(r,o),i===r&&("microTask"==o.change?(e._hasPendingMicrotasks=o.microTask,fu(e),hu(e)):"macroTask"==o.change&&(e.hasPendingMacrotasks=o.macroTask))},onHandleError:(n,i,r,o)=>(n.handleError(r,o),e.runOutsideAngular(()=>e.onError.emit(o)),!1)})}(r)}static isInAngularZone(){return typeof Zone<"u"&&!0===Zone.current.get("isAngularZone")}static assertInAngularZone(){if(!dr.isInAngularZone())throw new Error("Expected to be in Angular Zone, but it is not!")}static assertNotInAngularZone(){if(dr.isInAngularZone())throw new Error("Expected to not be in Angular Zone, but it is!")}run(t,n,i){return this._inner.run(t,n,i)}runTask(t,n,i,r){const o=this._inner,a=o.scheduleEventTask("NgZoneEvent: "+r,t,GC,Za,Za);try{return o.runTask(a,n,i)}finally{o.cancelTask(a)}}runGuarded(t,n,i){return this._inner.runGuarded(t,n,i)}runOutsideAngular(t){return this._outer.run(t)}}const GC={};function hu(e){if(0==e._nesting&&!e.hasPendingMicrotasks&&!e.isStable)try{e._nesting++,e.onMicrotaskEmpty.emit(null)}finally{if(e._nesting--,!e.hasPendingMicrotasks)try{e.runOutsideAngular(()=>e.onStable.emit(null))}finally{e.isStable=!0}}}function fu(e){e.hasPendingMicrotasks=!!(e._hasPendingMicrotasks||(e.shouldCoalesceEventChangeDetection||e.shouldCoalesceRunChangeDetection)&&-1!==e.lastRequestAnimationFrameId)}function Tm(e){e._nesting++,e.isStable&&(e.isStable=!1,e.onUnstable.emit(null))}function Im(e){e._nesting--,hu(e)}class YC{constructor(){this.hasPendingMicrotasks=!1,this.hasPendingMacrotasks=!1,this.isStable=!0,this.onUnstable=new eo,this.onMicrotaskEmpty=new eo,this.onStable=new eo,this.onError=new eo}run(t,n,i){return t.apply(n,i)}runGuarded(t,n,i){return t.apply(n,i)}runOutsideAngular(t){return t()}runTask(t,n,i,r){return t.apply(n,i)}}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */const xm=new Vn(""),Rm=new Vn("");let pu,KC=(()=>{class e{constructor(n,i,r){this._ngZone=n,this.registry=i,this._pendingCount=0,this._isZoneStable=!0,this._didWork=!1,this._callbacks=[],this.taskTrackingZone=null,pu||(function ZC(e){pu=e}(r),r.addToWindow(i)),this._watchAngularEvents(),n.run(()=>{this.taskTrackingZone=typeof Zone>"u"?null:Zone.current.get("TaskTrackingZone")})}_watchAngularEvents(){this._ngZone.onUnstable.subscribe({next:()=>{this._didWork=!0,this._isZoneStable=!1}}),this._ngZone.runOutsideAngular(()=>{this._ngZone.onStable.subscribe({next:()=>{dr.assertNotInAngularZone(),du(()=>{this._isZoneStable=!0,this._runCallbacksIfReady()})}})})}increasePendingRequestCount(){return this._pendingCount+=1,this._didWork=!0,this._pendingCount}decreasePendingRequestCount(){if(this._pendingCount-=1,this._pendingCount<0)throw new Error("pending async requests below zero");return this._runCallbacksIfReady(),this._pendingCount}isStable(){return this._isZoneStable&&0===this._pendingCount&&!this._ngZone.hasPendingMacrotasks}_runCallbacksIfReady(){if(this.isStable())du(()=>{for(;0!==this._callbacks.length;){let n=this._callbacks.pop();clearTimeout(n.timeoutId),n.doneCb(this._didWork)}this._didWork=!1});else{let n=this.getPendingTasks();this._callbacks=this._callbacks.filter(i=>!i.updateCb||!i.updateCb(n)||(clearTimeout(i.timeoutId),!1)),this._didWork=!0}}getPendingTasks(){return this.taskTrackingZone?this.taskTrackingZone.macroTasks.map(n=>({source:n.source,creationLocation:n.creationLocation,data:n.data})):[]}addCallback(n,i,r){let o=-1;i&&i>0&&(o=setTimeout(()=>{this._callbacks=this._callbacks.filter(a=>a.timeoutId!==o),n(this._didWork,this.getPendingTasks())},i)),this._callbacks.push({doneCb:n,timeoutId:o,updateCb:r})}whenStable(n,i,r){if(r&&!this.taskTrackingZone)throw new Error('Task tracking zone is required when passing an update callback to whenStable(). Is "zone.js/plugins/task-tracking" loaded?');this.addCallback(n,i,r),this._runCallbacksIfReady()}getPendingRequestCount(){return this._pendingCount}registerApplication(n){this.registry.registerApplication(n,this)}unregisterApplication(n){this.registry.unregisterApplication(n)}findProviders(n,i,r){return[]}}return e.\u0275fac=function(n){return new(n||e)(ci(dr),ci(Om),ci(Rm))},e.\u0275prov=Ce({token:e,factory:e.\u0275fac}),e})(),Om=(()=>{class e{constructor(){this._applications=new Map}registerApplication(n,i){this._applications.set(n,i)}unregisterApplication(n){this._applications.delete(n)}unregisterAllApplications(){this._applications.clear()}getTestability(n){return this._applications.get(n)||null}getAllTestabilities(){return Array.from(this._applications.values())}getAllRootElements(){return Array.from(this._applications.keys())}findTestabilityInTree(n,i=!0){return pu?.findTestabilityInTree(this,n,i)??null}}return e.\u0275fac=function(n){return new(n||e)},e.\u0275prov=Ce({token:e,factory:e.\u0275fac,providedIn:"platform"}),e})(),Mo=null;const Pm=new Vn("AllowMultipleToken"),Fm=new Vn("PlatformOnDestroy");class qC{constructor(t,n){this.name=t,this.token=n}}function Nm(e,t,n=[]){const i=`Platform: ${t}`,r=new Vn(i);return(o=[])=>{let a=mu();if(!a||a.injector.get(Pm,!1)){const h=[...n,...o,{provide:r,useValue:!0}];e?e(h):function JC(e){if(Mo&&!Mo.get(Pm,!1))throw new xe(400,"");Mo=e;const t=e.get(Bm);(function km(e){const t=e.get(Sm,null);t&&t.forEach(n=>n())})(e)}(function Lm(e=[],t){return Zr.create({name:t,providers:[{provide:Hl,useValue:"platform"},{provide:Fm,useValue:()=>Mo=null},...e]})}(h,i))}return function t0(e){const t=mu();if(!t)throw new xe(401,"");return t}()}}function mu(){return Mo?.get(Bm)??null}let Bm=(()=>{class e{constructor(n){this._injector=n,this._modules=[],this._destroyListeners=[],this._destroyed=!1}bootstrapModuleFactory(n,i){const r=function n0(e,t){let n;return n="noop"===e?new YC:("zone.js"===e?void 0:e)||new dr(t),n}(i?.ngZone,function Vm(e){return{enableLongStackTrace:!1,shouldCoalesceEventChangeDetection:!(!e||!e.ngZoneEventCoalescing)||!1,shouldCoalesceRunChangeDetection:!(!e||!e.ngZoneRunCoalescing)||!1}}(i)),o=[{provide:dr,useValue:r}];return r.run(()=>{const a=Zr.create({providers:o,parent:this.injector,name:n.moduleType.name}),h=n.create(a),p=h.injector.get(Bs,null);if(!p)throw new xe(402,"");return r.runOutsideAngular(()=>{const I=r.onError.subscribe({next:L=>{p.handleError(L)}});h.onDestroy(()=>{Ja(this._modules,h),I.unsubscribe()})}),function Hm(e,t,n){try{const i=n();return Tc(i)?i.catch(r=>{throw t.runOutsideAngular(()=>e.handleError(r)),r}):i}catch(i){throw t.runOutsideAngular(()=>e.handleError(i)),i}}(p,r,()=>{const I=h.injector.get(Xa);return I.runInitializers(),I.donePromise.then(()=>(function op(e){jt(e,"Expected localeId to be defined"),"string"==typeof e&&(rp=e.toLowerCase().replace(/_/g,"-"))}(h.injector.get(Qa,ms)||ms),this._moduleDoBootstrap(h),h))})})}bootstrapModule(n,i=[]){const r=jm({},i);return function XC(e,t,n){const i=new Xc(n);return Promise.resolve(i)}(0,0,n).then(o=>this.bootstrapModuleFactory(o,r))}_moduleDoBootstrap(n){const i=n.injector.get(qa);if(n._bootstrapComponents.length>0)n._bootstrapComponents.forEach(r=>i.bootstrap(r));else{if(!n.instance.ngDoBootstrap)throw new xe(403,"");n.instance.ngDoBootstrap(i)}this._modules.push(n)}onDestroy(n){this._destroyListeners.push(n)}get injector(){return this._injector}destroy(){if(this._destroyed)throw new xe(404,"");this._modules.slice().forEach(i=>i.destroy()),this._destroyListeners.forEach(i=>i()),this._injector.get(Fm,null)?.(),this._destroyed=!0}get destroyed(){return this._destroyed}}return e.\u0275fac=function(n){return new(n||e)(ci(Zr))},e.\u0275prov=Ce({token:e,factory:e.\u0275fac,providedIn:"platform"}),e})();function jm(e,t){return Array.isArray(t)?t.reduce(jm,e):{...e,...t}}let qa=(()=>{class e{constructor(n,i,r,o){this._zone=n,this._injector=i,this._exceptionHandler=r,this._initStatus=o,this._bootstrapListeners=[],this._views=[],this._runningTick=!1,this._stable=!0,this._destroyed=!1,this._destroyListeners=[],this.componentTypes=[],this.components=[],this._onMicrotaskEmptySubscription=this._zone.onMicrotaskEmpty.subscribe({next:()=>{this._zone.run(()=>{this.tick()})}});const a=new M.y(p=>{this._stable=this._zone.isStable&&!this._zone.hasPendingMacrotasks&&!this._zone.hasPendingMicrotasks,this._zone.runOutsideAngular(()=>{p.next(this._stable),p.complete()})}),h=new M.y(p=>{let I;this._zone.runOutsideAngular(()=>{I=this._zone.onStable.subscribe(()=>{dr.assertNotInAngularZone(),du(()=>{!this._stable&&!this._zone.hasPendingMacrotasks&&!this._zone.hasPendingMicrotasks&&(this._stable=!0,p.next(!0))})})});const L=this._zone.onUnstable.subscribe(()=>{dr.assertInAngularZone(),this._stable&&(this._stable=!1,this._zone.runOutsideAngular(()=>{p.next(!1)}))});return()=>{I.unsubscribe(),L.unsubscribe()}});this.isStable=(0,G.T)(a,h.pipe((0,X.B)()))}get destroyed(){return this._destroyed}get injector(){return this._injector}bootstrap(n,i){const r=n instanceof Pp;if(!this._initStatus.done)throw!r&&vs(n),new xe(405,false);let o;o=r?n:this._injector.get(Qs).resolveComponentFactory(n),this.componentTypes.push(o.componentType);const a=function QC(e){return e.isBoundToModule}(o)?void 0:this._injector.get(ko),p=o.create(Zr.NULL,[],i||o.selector,a),I=p.location.nativeElement,L=p.injector.get(xm,null);return L?.registerApplication(I),p.onDestroy(()=>{this.detachView(p.hostView),Ja(this.components,p),L?.unregisterApplication(I)}),this._loadComponent(p),p}tick(){if(this._runningTick)throw new xe(101,"");try{this._runningTick=!0;for(let n of this._views)n.detectChanges()}catch(n){this._zone.runOutsideAngular(()=>this._exceptionHandler.handleError(n))}finally{this._runningTick=!1}}attachView(n){const i=n;this._views.push(i),i.attachToAppRef(this)}detachView(n){const i=n;Ja(this._views,i),i.detachFromAppRef()}_loadComponent(n){this.attachView(n.hostView),this.tick(),this.components.push(n),this._injector.get(Am,[]).concat(this._bootstrapListeners).forEach(r=>r(n))}ngOnDestroy(){if(!this._destroyed)try{this._destroyListeners.forEach(n=>n()),this._views.slice().forEach(n=>n.destroy()),this._onMicrotaskEmptySubscription.unsubscribe()}finally{this._destroyed=!0,this._views=[],this._bootstrapListeners=[],this._destroyListeners=[]}}onDestroy(n){return this._destroyListeners.push(n),()=>Ja(this._destroyListeners,n)}destroy(){if(this._destroyed)throw new xe(406,false);const n=this._injector;n.destroy&&!n.destroyed&&n.destroy()}get viewCount(){return this._views.length}warnIfDestroyed(){}}return e.\u0275fac=function(n){return new(n||e)(ci(dr),ci(Zr),ci(Bs),ci(Xa))},e.\u0275prov=Ce({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();function Ja(e,t){const n=e.indexOf(t);n>-1&&e.splice(n,1)}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
let zm=!0;function o0(){zm=!1}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
let s0=(()=>{class e{}return e.__NG_ELEMENT_ID__=a0,e})();function a0(e){return function l0(e,t,n){if(qn(e)&&!n){const i=kt(e.index,t);return new Js(i,i)}return 47&e.type?new Js(t[16],t):null}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */(It(),m(),16==(16&e))}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
class Km{constructor(){}supports(t){return Gs(t)}create(t){return new p0(t)}}const f0=(e,t)=>t;class p0{constructor(t){this.length=0,this._linkedRecords=null,this._unlinkedRecords=null,this._previousItHead=null,this._itHead=null,this._itTail=null,this._additionsHead=null,this._additionsTail=null,this._movesHead=null,this._movesTail=null,this._removalsHead=null,this._removalsTail=null,this._identityChangesHead=null,this._identityChangesTail=null,this._trackByFn=t||f0}forEachItem(t){let n;for(n=this._itHead;null!==n;n=n._next)t(n)}forEachOperation(t){let n=this._itHead,i=this._removalsHead,r=0,o=null;for(;n||i;){const a=!i||n&&n.currentIndex<Xm(i,r,o)?n:i,h=Xm(a,r,o),p=a.currentIndex;if(a===i)r--,i=i._nextRemoved;else if(n=n._next,null==a.previousIndex)r++;else{o||(o=[]);const I=h-r,L=p-r;if(I!=L){for(let Ae=0;Ae<I;Ae++){const We=Ae<o.length?o[Ae]:o[Ae]=0,pt=We+Ae;L<=pt&&pt<I&&(o[Ae]=We+1)}o[a.previousIndex]=L-I}}h!==p&&t(a,h,p)}}forEachPreviousItem(t){let n;for(n=this._previousItHead;null!==n;n=n._nextPrevious)t(n)}forEachAddedItem(t){let n;for(n=this._additionsHead;null!==n;n=n._nextAdded)t(n)}forEachMovedItem(t){let n;for(n=this._movesHead;null!==n;n=n._nextMoved)t(n)}forEachRemovedItem(t){let n;for(n=this._removalsHead;null!==n;n=n._nextRemoved)t(n)}forEachIdentityChange(t){let n;for(n=this._identityChangesHead;null!==n;n=n._nextIdentityChange)t(n)}diff(t){if(null==t&&(t=[]),!Gs(t))throw new xe(900,"");return this.check(t)?this:null}onDestroy(){}check(t){this._reset();let r,o,a,n=this._itHead,i=!1;if(Array.isArray(t)){this.length=t.length;for(let h=0;h<this.length;h++)o=t[h],a=this._trackByFn(h,o),null!==n&&Object.is(n.trackById,a)?(i&&(n=this._verifyReinsertion(n,o,a,h)),Object.is(n.item,o)||this._addIdentityChange(n,o)):(n=this._mismatch(n,o,a,h),i=!0),n=n._next}else r=0,function xv(e,t){if(Array.isArray(e))for(let n=0;n<e.length;n++)t(e[n]);else{const n=e[Oo()]();let i;for(;!(i=n.next()).done;)t(i.value)}}(t,h=>{a=this._trackByFn(r,h),null!==n&&Object.is(n.trackById,a)?(i&&(n=this._verifyReinsertion(n,h,a,r)),Object.is(n.item,h)||this._addIdentityChange(n,h)):(n=this._mismatch(n,h,a,r),i=!0),n=n._next,r++}),this.length=r;return this._truncate(n),this.collection=t,this.isDirty}get isDirty(){return null!==this._additionsHead||null!==this._movesHead||null!==this._removalsHead||null!==this._identityChangesHead}_reset(){if(this.isDirty){let t;for(t=this._previousItHead=this._itHead;null!==t;t=t._next)t._nextPrevious=t._next;for(t=this._additionsHead;null!==t;t=t._nextAdded)t.previousIndex=t.currentIndex;for(this._additionsHead=this._additionsTail=null,t=this._movesHead;null!==t;t=t._nextMoved)t.previousIndex=t.currentIndex;this._movesHead=this._movesTail=null,this._removalsHead=this._removalsTail=null,this._identityChangesHead=this._identityChangesTail=null}}_mismatch(t,n,i,r){let o;return null===t?o=this._itTail:(o=t._prev,this._remove(t)),null!==(t=null===this._unlinkedRecords?null:this._unlinkedRecords.get(i,null))?(Object.is(t.item,n)||this._addIdentityChange(t,n),this._reinsertAfter(t,o,r)):null!==(t=null===this._linkedRecords?null:this._linkedRecords.get(i,r))?(Object.is(t.item,n)||this._addIdentityChange(t,n),this._moveAfter(t,o,r)):t=this._addAfter(new m0(n,i),o,r),t}_verifyReinsertion(t,n,i,r){let o=null===this._unlinkedRecords?null:this._unlinkedRecords.get(i,null);return null!==o?t=this._reinsertAfter(o,t._prev,r):t.currentIndex!=r&&(t.currentIndex=r,this._addToMoves(t,r)),t}_truncate(t){for(;null!==t;){const n=t._next;this._addToRemovals(this._unlink(t)),t=n}null!==this._unlinkedRecords&&this._unlinkedRecords.clear(),null!==this._additionsTail&&(this._additionsTail._nextAdded=null),null!==this._movesTail&&(this._movesTail._nextMoved=null),null!==this._itTail&&(this._itTail._next=null),null!==this._removalsTail&&(this._removalsTail._nextRemoved=null),null!==this._identityChangesTail&&(this._identityChangesTail._nextIdentityChange=null)}_reinsertAfter(t,n,i){null!==this._unlinkedRecords&&this._unlinkedRecords.remove(t);const r=t._prevRemoved,o=t._nextRemoved;return null===r?this._removalsHead=o:r._nextRemoved=o,null===o?this._removalsTail=r:o._prevRemoved=r,this._insertAfter(t,n,i),this._addToMoves(t,i),t}_moveAfter(t,n,i){return this._unlink(t),this._insertAfter(t,n,i),this._addToMoves(t,i),t}_addAfter(t,n,i){return this._insertAfter(t,n,i),this._additionsTail=null===this._additionsTail?this._additionsHead=t:this._additionsTail._nextAdded=t,t}_insertAfter(t,n,i){const r=null===n?this._itHead:n._next;return t._next=r,t._prev=n,null===r?this._itTail=t:r._prev=t,null===n?this._itHead=t:n._next=t,null===this._linkedRecords&&(this._linkedRecords=new Zm),this._linkedRecords.put(t),t.currentIndex=i,t}_remove(t){return this._addToRemovals(this._unlink(t))}_unlink(t){null!==this._linkedRecords&&this._linkedRecords.remove(t);const n=t._prev,i=t._next;return null===n?this._itHead=i:n._next=i,null===i?this._itTail=n:i._prev=n,t}_addToMoves(t,n){return t.previousIndex===n||(this._movesTail=null===this._movesTail?this._movesHead=t:this._movesTail._nextMoved=t),t}_addToRemovals(t){return null===this._unlinkedRecords&&(this._unlinkedRecords=new Zm),this._unlinkedRecords.put(t),t.currentIndex=null,t._nextRemoved=null,null===this._removalsTail?(this._removalsTail=this._removalsHead=t,t._prevRemoved=null):(t._prevRemoved=this._removalsTail,this._removalsTail=this._removalsTail._nextRemoved=t),t}_addIdentityChange(t,n){return t.item=n,this._identityChangesTail=null===this._identityChangesTail?this._identityChangesHead=t:this._identityChangesTail._nextIdentityChange=t,t}}class m0{constructor(t,n){this.item=t,this.trackById=n,this.currentIndex=null,this.previousIndex=null,this._nextPrevious=null,this._prev=null,this._next=null,this._prevDup=null,this._nextDup=null,this._prevRemoved=null,this._nextRemoved=null,this._nextAdded=null,this._nextMoved=null,this._nextIdentityChange=null}}class g0{constructor(){this._head=null,this._tail=null}add(t){null===this._head?(this._head=this._tail=t,t._nextDup=null,t._prevDup=null):(this._tail._nextDup=t,t._prevDup=this._tail,t._nextDup=null,this._tail=t)}get(t,n){let i;for(i=this._head;null!==i;i=i._nextDup)if((null===n||n<=i.currentIndex)&&Object.is(i.trackById,t))return i;return null}remove(t){const n=t._prevDup,i=t._nextDup;return null===n?this._head=i:n._nextDup=i,null===i?this._tail=n:i._prevDup=n,null===this._head}}class Zm{constructor(){this.map=new Map}put(t){const n=t.trackById;let i=this.map.get(n);i||(i=new g0,this.map.set(n,i)),i.add(t)}get(t,n){const r=this.map.get(t);return r?r.get(t,n):null}remove(t){const n=t.trackById;return this.map.get(n).remove(t)&&this.map.delete(n),t}get isEmpty(){return 0===this.map.size}clear(){this.map.clear()}}function Xm(e,t,n){const i=e.previousIndex;if(null===i)return i;let r=0;return n&&i<n.length&&(r=n[i]),i+t+r
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */}class Qm{constructor(){}supports(t){return t instanceof Map||Cc(t)}create(){return new _0}}class _0{constructor(){this._records=new Map,this._mapHead=null,this._appendAfter=null,this._previousMapHead=null,this._changesHead=null,this._changesTail=null,this._additionsHead=null,this._additionsTail=null,this._removalsHead=null,this._removalsTail=null}get isDirty(){return null!==this._additionsHead||null!==this._changesHead||null!==this._removalsHead}forEachItem(t){let n;for(n=this._mapHead;null!==n;n=n._next)t(n)}forEachPreviousItem(t){let n;for(n=this._previousMapHead;null!==n;n=n._nextPrevious)t(n)}forEachChangedItem(t){let n;for(n=this._changesHead;null!==n;n=n._nextChanged)t(n)}forEachAddedItem(t){let n;for(n=this._additionsHead;null!==n;n=n._nextAdded)t(n)}forEachRemovedItem(t){let n;for(n=this._removalsHead;null!==n;n=n._nextRemoved)t(n)}diff(t){if(t){if(!(t instanceof Map||Cc(t)))throw new xe(900,"")}else t=new Map;return this.check(t)?this:null}onDestroy(){}check(t){this._reset();let n=this._mapHead;if(this._appendAfter=null,this._forEach(t,(i,r)=>{if(n&&n.key===r)this._maybeAddToChanges(n,i),this._appendAfter=n,n=n._next;else{const o=this._getOrCreateRecordForKey(r,i);n=this._insertBeforeOrAppend(n,o)}}),n){n._prev&&(n._prev._next=null),this._removalsHead=n;for(let i=n;null!==i;i=i._nextRemoved)i===this._mapHead&&(this._mapHead=null),this._records.delete(i.key),i._nextRemoved=i._next,i.previousValue=i.currentValue,i.currentValue=null,i._prev=null,i._next=null}return this._changesTail&&(this._changesTail._nextChanged=null),this._additionsTail&&(this._additionsTail._nextAdded=null),this.isDirty}_insertBeforeOrAppend(t,n){if(t){const i=t._prev;return n._next=t,n._prev=i,t._prev=n,i&&(i._next=n),t===this._mapHead&&(this._mapHead=n),this._appendAfter=t,t}return this._appendAfter?(this._appendAfter._next=n,n._prev=this._appendAfter):this._mapHead=n,this._appendAfter=n,null}_getOrCreateRecordForKey(t,n){if(this._records.has(t)){const r=this._records.get(t);this._maybeAddToChanges(r,n);const o=r._prev,a=r._next;return o&&(o._next=a),a&&(a._prev=o),r._next=null,r._prev=null,r}const i=new y0(t);return this._records.set(t,i),i.currentValue=n,this._addToAdditions(i),i}_reset(){if(this.isDirty){let t;for(this._previousMapHead=this._mapHead,t=this._previousMapHead;null!==t;t=t._next)t._nextPrevious=t._next;for(t=this._changesHead;null!==t;t=t._nextChanged)t.previousValue=t.currentValue;for(t=this._additionsHead;null!=t;t=t._nextAdded)t.previousValue=t.currentValue;this._changesHead=this._changesTail=null,this._additionsHead=this._additionsTail=null,this._removalsHead=null}}_maybeAddToChanges(t,n){Object.is(n,t.currentValue)||(t.previousValue=t.currentValue,t.currentValue=n,this._addToChanges(t))}_addToAdditions(t){null===this._additionsHead?this._additionsHead=this._additionsTail=t:(this._additionsTail._nextAdded=t,this._additionsTail=t)}_addToChanges(t){null===this._changesHead?this._changesHead=this._changesTail=t:(this._changesTail._nextChanged=t,this._changesTail=t)}_forEach(t,n){t instanceof Map?t.forEach(n):Object.keys(t).forEach(i=>n(t[i],i))}}class y0{constructor(t){this.key=t,this.previousValue=null,this.currentValue=null,this._nextPrevious=null,this._next=null,this._prev=null,this._nextAdded=null,this._nextRemoved=null,this._nextChanged=null}}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */function qm(){return new Du([new Km])}let Du=(()=>{class e{constructor(n){this.factories=n}static create(n,i){if(null!=i){const r=i.factories.slice();n=n.concat(r)}return new e(n)}static extend(n){return{provide:e,useFactory:i=>e.create(n,i||qm()),deps:[[e,new Os,new Rs]]}}find(n){const i=this.factories.find(r=>r.supports(n));if(null!=i)return i;throw new xe(901,"")}}return e.\u0275prov=Ce({token:e,providedIn:"root",factory:qm}),e})();
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
function Jm(){return new bu([new Qm])}let bu=(()=>{class e{constructor(n){this.factories=n}static create(n,i){if(i){const r=i.factories.slice();n=n.concat(r)}return new e(n)}static extend(n){return{provide:e,useFactory:i=>e.create(n,i||Jm()),deps:[[e,new Os,new Rs]]}}find(n){const i=this.factories.find(o=>o.supports(n));if(i)return i;throw new xe(901,"")}}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
return e.\u0275prov=Ce({token:e,providedIn:"root",factory:Jm}),e})();const b0=Nm(null,"core",[]);
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
let C0=(()=>{class e{constructor(n){}}return e.\u0275fac=function(n){return new(n||e)(ci(qa))},e.\u0275mod=Lt({type:e}),e.\u0275inj=at({}),e})();
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */function E0(e){return"boolean"==typeof e?e:null!=e&&"false"!==e}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */,4006:(St,He,y)=>{y.d(He,{CE:()=>Er,F:()=>ie,Fj:()=>Ve,JJ:()=>Mt,JL:()=>Je,NI:()=>Ct,On:()=>Zi,UX:()=>Yn,_Y:()=>Ii,a5:()=>ct,kI:()=>mt,qu:()=>Si,sg:()=>Cr,u:()=>qi,u5:()=>fn});var s=y(4650),v=y(6895),M=y(2076),G=y(4128),X=y(4004);
/**
     * @license Angular v14.0.1
     * (c) 2010-2022 Google LLC. https://angular.io/
     * License: MIT
     */
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */let K=(()=>{class w{constructor(g,H){this._renderer=g,this._elementRef=H,this.onChange=tt=>{},this.onTouched=()=>{}}setProperty(g,H){this._renderer.setProperty(this._elementRef.nativeElement,g,H)}registerOnTouched(g){this.onTouched=g}registerOnChange(g){this.onChange=g}setDisabledState(g){this.setProperty("disabled",g)}}return w.\u0275fac=function(g){return new(g||w)(s.Y36(s.Qsj),s.Y36(s.SBq))},w.\u0275dir=s.lG2({type:w}),w})(),ue=(()=>{class w extends K{}return w.\u0275fac=function(){let m;return function(H){return(m||(m=s.n5z(w)))(H||w)}}(),w.\u0275dir=s.lG2({type:w,features:[s.qOj]}),w})();const q=new s.OlP("NgValueAccessor"),me={provide:q,useExisting:(0,s.Gpc)(()=>Ve),multi:!0},Ge=new s.OlP("CompositionEventMode");
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */let Ve=(()=>{class w extends K{constructor(g,H,tt){super(g,H),this._compositionMode=tt,this._composing=!1,null==this._compositionMode&&(this._compositionMode=!function te(){const w=(0,v.q)()?(0,v.q)().getUserAgent():"";return/android (\d+)/.test(w.toLowerCase())}())}writeValue(g){this.setProperty("value",g??"")}_handleInput(g){(!this._compositionMode||this._compositionMode&&!this._composing)&&this.onChange(g)}_compositionStart(){this._composing=!0}_compositionEnd(g){this._composing=!1,this._compositionMode&&this.onChange(g)}}return w.\u0275fac=function(g){return new(g||w)(s.Y36(s.Qsj),s.Y36(s.SBq),s.Y36(Ge,8))},w.\u0275dir=s.lG2({type:w,selectors:[["input","formControlName","",3,"type","checkbox"],["textarea","formControlName",""],["input","formControl","",3,"type","checkbox"],["textarea","formControl",""],["input","ngModel","",3,"type","checkbox"],["textarea","ngModel",""],["","ngDefaultControl",""]],hostBindings:function(g,H){1&g&&s.NdJ("input",function(It){return H._handleInput(It.target.value)})("blur",function(){return H.onTouched()})("compositionstart",function(){return H._compositionStart()})("compositionend",function(It){return H._compositionEnd(It.target.value)})},features:[s._Bn([me]),s.qOj]}),w})();
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */function xe(w){return null==w||("string"==typeof w||Array.isArray(w))&&0===w.length}function Ke(w){return null!=w&&"number"==typeof w.length}const Ne=new s.OlP("NgValidators"),qe=new s.OlP("NgAsyncValidators"),ht=/^(?=.{1,254}$)(?=.{1,64}@)[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;class mt{static min(m){return function de(w){return m=>{if(xe(m.value)||xe(w))return null;const g=parseFloat(m.value);return!isNaN(g)&&g<w?{min:{min:w,actual:m.value}}:null}}(m)}static max(m){return function Q(w){return m=>{if(xe(m.value)||xe(w))return null;const g=parseFloat(m.value);return!isNaN(g)&&g>w?{max:{max:w,actual:m.value}}:null}}(m)}static required(m){return function ee(w){return xe(w.value)?{required:!0}:null}(m)}static requiredTrue(m){return function ae(w){return!0===w.value?null:{required:!0}}(m)}static email(m){return function Ee(w){return xe(w.value)||ht.test(w.value)?null:{email:!0}}(m)}static minLength(m){return function Be(w){return m=>xe(m.value)||!Ke(m.value)?null:m.value.length<w?{minlength:{requiredLength:w,actualLength:m.value.length}}:null}(m)}static maxLength(m){return function ot(w){return m=>Ke(m.value)&&m.value.length>w?{maxlength:{requiredLength:w,actualLength:m.value.length}}:null}(m)}static pattern(m){return function Se(w){if(!w)return fe;let m,g;return"string"==typeof w?(g="","^"!==w.charAt(0)&&(g+="^"),g+=w,"$"!==w.charAt(w.length-1)&&(g+="$"),m=new RegExp(g)):(g=w.toString(),m=w),H=>{if(xe(H.value))return null;const tt=H.value;return m.test(tt)?null:{pattern:{requiredPattern:g,actualValue:tt}}}}(m)}static nullValidator(m){return null}static compose(m){return jt(m)}static composeAsync(m){return vt(m)}}function fe(w){return null}function Fe(w){return null!=w}function le(w){const m=(0,s.QGY)(w)?(0,M.D)(w):w;return(0,s.CqO)(m),m}function Le(w){let m={};return w.forEach(g=>{m=null!=g?{...m,...g}:m}),0===Object.keys(m).length?null:m}function Ye(w,m){return m.map(g=>g(w))}function Ht(w){return w.map(m=>function xt(w){return!w.validate}(m)?m:g=>m.validate(g))}function jt(w){if(!w)return null;const m=w.filter(Fe);return 0==m.length?null:function(g){return Le(Ye(g,m))}}function ft(w){return null!=w?jt(Ht(w)):null}function vt(w){if(!w)return null;const m=w.filter(Fe);return 0==m.length?null:function(g){const H=Ye(g,m).map(le);return(0,G.D)(H).pipe((0,X.U)(Le))}}function Pt(w){return null!=w?vt(Ht(w)):null}function ze(w,m){return null===w?[m]:Array.isArray(w)?[...w,m]:[w,m]}function Ce(w){return w._rawValidators}function st(w){return w._rawAsyncValidators}function at(w){return w?Array.isArray(w)?w:[w]:[]}function bt(w,m){return Array.isArray(w)?w.includes(m):w===m}function nt(w,m){const g=at(m);return at(w).forEach(tt=>{bt(g,tt)||g.push(tt)}),g}function rt(w,m){return at(m).filter(g=>!bt(w,g))}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */class je{constructor(){this._rawValidators=[],this._rawAsyncValidators=[],this._onDestroyCallbacks=[]}get value(){return this.control?this.control.value:null}get valid(){return this.control?this.control.valid:null}get invalid(){return this.control?this.control.invalid:null}get pending(){return this.control?this.control.pending:null}get disabled(){return this.control?this.control.disabled:null}get enabled(){return this.control?this.control.enabled:null}get errors(){return this.control?this.control.errors:null}get pristine(){return this.control?this.control.pristine:null}get dirty(){return this.control?this.control.dirty:null}get touched(){return this.control?this.control.touched:null}get status(){return this.control?this.control.status:null}get untouched(){return this.control?this.control.untouched:null}get statusChanges(){return this.control?this.control.statusChanges:null}get valueChanges(){return this.control?this.control.valueChanges:null}get path(){return null}_setValidators(m){this._rawValidators=m||[],this._composedValidatorFn=ft(this._rawValidators)}_setAsyncValidators(m){this._rawAsyncValidators=m||[],this._composedAsyncValidatorFn=Pt(this._rawAsyncValidators)}get validator(){return this._composedValidatorFn||null}get asyncValidator(){return this._composedAsyncValidatorFn||null}_registerOnDestroy(m){this._onDestroyCallbacks.push(m)}_invokeOnDestroyCallbacks(){this._onDestroyCallbacks.forEach(m=>m()),this._onDestroyCallbacks=[]}reset(m){this.control&&this.control.reset(m)}hasError(m,g){return!!this.control&&this.control.hasError(m,g)}getError(m,g){return this.control?this.control.getError(m,g):null}}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */class De extends je{get formDirective(){return null}get path(){return null}}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */class ct extends je{constructor(){super(...arguments),this._parent=null,this.name=null,this.valueAccessor=null}}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */class gt{constructor(m){this._cd=m}get isTouched(){return!!this._cd?.control?.touched}get isUntouched(){return!!this._cd?.control?.untouched}get isPristine(){return!!this._cd?.control?.pristine}get isDirty(){return!!this._cd?.control?.dirty}get isValid(){return!!this._cd?.control?.valid}get isInvalid(){return!!this._cd?.control?.invalid}get isPending(){return!!this._cd?.control?.pending}get isSubmitted(){return!!this._cd?.submitted}}let Mt=(()=>{class w extends gt{constructor(g){super(g)}}return w.\u0275fac=function(g){return new(g||w)(s.Y36(ct,2))},w.\u0275dir=s.lG2({type:w,selectors:[["","formControlName",""],["","ngModel",""],["","formControl",""]],hostVars:14,hostBindings:function(g,H){2&g&&s.ekj("ng-untouched",H.isUntouched)("ng-touched",H.isTouched)("ng-pristine",H.isPristine)("ng-dirty",H.isDirty)("ng-valid",H.isValid)("ng-invalid",H.isInvalid)("ng-pending",H.isPending)},features:[s.qOj]}),w})(),Je=(()=>{class w extends gt{constructor(g){super(g)}}return w.\u0275fac=function(g){return new(g||w)(s.Y36(De,10))},w.\u0275dir=s.lG2({type:w,selectors:[["","formGroupName",""],["","formArrayName",""],["","ngModelGroup",""],["","formGroup",""],["form",3,"ngNoForm",""],["","ngForm",""]],hostVars:16,hostBindings:function(g,H){2&g&&s.ekj("ng-untouched",H.isUntouched)("ng-touched",H.isTouched)("ng-pristine",H.isPristine)("ng-dirty",H.isDirty)("ng-valid",H.isValid)("ng-invalid",H.isInvalid)("ng-pending",H.isPending)("ng-submitted",H.isSubmitted)},features:[s.qOj]}),w})();
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
const ge="VALID",Ue="INVALID",Te="PENDING",_e="DISABLED";function Y(w){return(Lt(w)?w.validators:w)||null}function Re(w){return Array.isArray(w)?ft(w):w||null}function $e(w,m){return(Lt(m)?m.asyncValidators:w)||null}function Et(w){return Array.isArray(w)?Pt(w):w||null}function Lt(w){return null!=w&&!Array.isArray(w)&&"object"==typeof w}function bn(w,m,g){const H=w.controls;if(!(m?Object.keys(H):H).length)throw new s.vHH(1e3,"");if(!H[g])throw new s.vHH(1001,"")}function Zn(w,m,g){w._forEachChild((H,tt)=>{if(void 0===g[tt])throw new s.vHH(1002,"")})}class $n{constructor(m,g){this._pendingDirty=!1,this._hasOwnPendingAsyncValidator=!1,this._pendingTouched=!1,this._onCollectionChange=()=>{},this._parent=null,this.pristine=!0,this.touched=!1,this._onDisabledChange=[],this._rawValidators=m,this._rawAsyncValidators=g,this._composedValidatorFn=Re(this._rawValidators),this._composedAsyncValidatorFn=Et(this._rawAsyncValidators)}get validator(){return this._composedValidatorFn}set validator(m){this._rawValidators=this._composedValidatorFn=m}get asyncValidator(){return this._composedAsyncValidatorFn}set asyncValidator(m){this._rawAsyncValidators=this._composedAsyncValidatorFn=m}get parent(){return this._parent}get valid(){return this.status===ge}get invalid(){return this.status===Ue}get pending(){return this.status==Te}get disabled(){return this.status===_e}get enabled(){return this.status!==_e}get dirty(){return!this.pristine}get untouched(){return!this.touched}get updateOn(){return this._updateOn?this._updateOn:this.parent?this.parent.updateOn:"change"}setValidators(m){this._rawValidators=m,this._composedValidatorFn=Re(m)}setAsyncValidators(m){this._rawAsyncValidators=m,this._composedAsyncValidatorFn=Et(m)}addValidators(m){this.setValidators(nt(m,this._rawValidators))}addAsyncValidators(m){this.setAsyncValidators(nt(m,this._rawAsyncValidators))}removeValidators(m){this.setValidators(rt(m,this._rawValidators))}removeAsyncValidators(m){this.setAsyncValidators(rt(m,this._rawAsyncValidators))}hasValidator(m){return bt(this._rawValidators,m)}hasAsyncValidator(m){return bt(this._rawAsyncValidators,m)}clearValidators(){this.validator=null}clearAsyncValidators(){this.asyncValidator=null}markAsTouched(m={}){this.touched=!0,this._parent&&!m.onlySelf&&this._parent.markAsTouched(m)}markAllAsTouched(){this.markAsTouched({onlySelf:!0}),this._forEachChild(m=>m.markAllAsTouched())}markAsUntouched(m={}){this.touched=!1,this._pendingTouched=!1,this._forEachChild(g=>{g.markAsUntouched({onlySelf:!0})}),this._parent&&!m.onlySelf&&this._parent._updateTouched(m)}markAsDirty(m={}){this.pristine=!1,this._parent&&!m.onlySelf&&this._parent.markAsDirty(m)}markAsPristine(m={}){this.pristine=!0,this._pendingDirty=!1,this._forEachChild(g=>{g.markAsPristine({onlySelf:!0})}),this._parent&&!m.onlySelf&&this._parent._updatePristine(m)}markAsPending(m={}){this.status=Te,!1!==m.emitEvent&&this.statusChanges.emit(this.status),this._parent&&!m.onlySelf&&this._parent.markAsPending(m)}disable(m={}){const g=this._parentMarkedDirty(m.onlySelf);this.status=_e,this.errors=null,this._forEachChild(H=>{H.disable({...m,onlySelf:!0})}),this._updateValue(),!1!==m.emitEvent&&(this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._updateAncestors({...m,skipPristineCheck:g}),this._onDisabledChange.forEach(H=>H(!0))}enable(m={}){const g=this._parentMarkedDirty(m.onlySelf);this.status=ge,this._forEachChild(H=>{H.enable({...m,onlySelf:!0})}),this.updateValueAndValidity({onlySelf:!0,emitEvent:m.emitEvent}),this._updateAncestors({...m,skipPristineCheck:g}),this._onDisabledChange.forEach(H=>H(!1))}_updateAncestors(m){this._parent&&!m.onlySelf&&(this._parent.updateValueAndValidity(m),m.skipPristineCheck||this._parent._updatePristine(),this._parent._updateTouched())}setParent(m){this._parent=m}getRawValue(){return this.value}updateValueAndValidity(m={}){this._setInitialStatus(),this._updateValue(),this.enabled&&(this._cancelExistingSubscription(),this.errors=this._runValidator(),this.status=this._calculateStatus(),(this.status===ge||this.status===Te)&&this._runAsyncValidator(m.emitEvent)),!1!==m.emitEvent&&(this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._parent&&!m.onlySelf&&this._parent.updateValueAndValidity(m)}_updateTreeValidity(m={emitEvent:!0}){this._forEachChild(g=>g._updateTreeValidity(m)),this.updateValueAndValidity({onlySelf:!0,emitEvent:m.emitEvent})}_setInitialStatus(){this.status=this._allControlsDisabled()?_e:ge}_runValidator(){return this.validator?this.validator(this):null}_runAsyncValidator(m){if(this.asyncValidator){this.status=Te,this._hasOwnPendingAsyncValidator=!0;const g=le(this.asyncValidator(this));this._asyncValidationSubscription=g.subscribe(H=>{this._hasOwnPendingAsyncValidator=!1,this.setErrors(H,{emitEvent:m})})}}_cancelExistingSubscription(){this._asyncValidationSubscription&&(this._asyncValidationSubscription.unsubscribe(),this._hasOwnPendingAsyncValidator=!1)}setErrors(m,g={}){this.errors=m,this._updateControlsErrors(!1!==g.emitEvent)}get(m){let g=m;return null==g||(Array.isArray(g)||(g=g.split(".")),0===g.length)?null:g.reduce((H,tt)=>H&&H._find(tt),this)}getError(m,g){const H=g?this.get(g):this;return H&&H.errors?H.errors[m]:null}hasError(m,g){return!!this.getError(m,g)}get root(){let m=this;for(;m._parent;)m=m._parent;return m}_updateControlsErrors(m){this.status=this._calculateStatus(),m&&this.statusChanges.emit(this.status),this._parent&&this._parent._updateControlsErrors(m)}_initObservables(){this.valueChanges=new s.vpe,this.statusChanges=new s.vpe}_calculateStatus(){return this._allControlsDisabled()?_e:this.errors?Ue:this._hasOwnPendingAsyncValidator||this._anyControlsHaveStatus(Te)?Te:this._anyControlsHaveStatus(Ue)?Ue:ge}_anyControlsHaveStatus(m){return this._anyControls(g=>g.status===m)}_anyControlsDirty(){return this._anyControls(m=>m.dirty)}_anyControlsTouched(){return this._anyControls(m=>m.touched)}_updatePristine(m={}){this.pristine=!this._anyControlsDirty(),this._parent&&!m.onlySelf&&this._parent._updatePristine(m)}_updateTouched(m={}){this.touched=this._anyControlsTouched(),this._parent&&!m.onlySelf&&this._parent._updateTouched(m)}_registerOnCollectionChange(m){this._onCollectionChange=m}_setUpdateStrategy(m){Lt(m)&&null!=m.updateOn&&(this._updateOn=m.updateOn)}_parentMarkedDirty(m){return!m&&!(!this._parent||!this._parent.dirty)&&!this._parent._anyControlsDirty()}_find(m){return null}}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */class wn extends $n{constructor(m,g,H){super(Y(g),$e(H,g)),this.controls=m,this._initObservables(),this._setUpdateStrategy(g),this._setUpControls(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator})}registerControl(m,g){return this.controls[m]?this.controls[m]:(this.controls[m]=g,g.setParent(this),g._registerOnCollectionChange(this._onCollectionChange),g)}addControl(m,g,H={}){this.registerControl(m,g),this.updateValueAndValidity({emitEvent:H.emitEvent}),this._onCollectionChange()}removeControl(m,g={}){this.controls[m]&&this.controls[m]._registerOnCollectionChange(()=>{}),delete this.controls[m],this.updateValueAndValidity({emitEvent:g.emitEvent}),this._onCollectionChange()}setControl(m,g,H={}){this.controls[m]&&this.controls[m]._registerOnCollectionChange(()=>{}),delete this.controls[m],g&&this.registerControl(m,g),this.updateValueAndValidity({emitEvent:H.emitEvent}),this._onCollectionChange()}contains(m){return this.controls.hasOwnProperty(m)&&this.controls[m].enabled}setValue(m,g={}){Zn(this,0,m),Object.keys(m).forEach(H=>{bn(this,!0,H),this.controls[H].setValue(m[H],{onlySelf:!0,emitEvent:g.emitEvent})}),this.updateValueAndValidity(g)}patchValue(m,g={}){null!=m&&(Object.keys(m).forEach(H=>{const tt=this.controls[H];tt&&tt.patchValue(m[H],{onlySelf:!0,emitEvent:g.emitEvent})}),this.updateValueAndValidity(g))}reset(m={},g={}){this._forEachChild((H,tt)=>{H.reset(m[tt],{onlySelf:!0,emitEvent:g.emitEvent})}),this._updatePristine(g),this._updateTouched(g),this.updateValueAndValidity(g)}getRawValue(){return this._reduceChildren({},(m,g,H)=>(m[H]=g.getRawValue(),m))}_syncPendingControls(){let m=this._reduceChildren(!1,(g,H)=>!!H._syncPendingControls()||g);return m&&this.updateValueAndValidity({onlySelf:!0}),m}_forEachChild(m){Object.keys(this.controls).forEach(g=>{const H=this.controls[g];H&&m(H,g)})}_setUpControls(){this._forEachChild(m=>{m.setParent(this),m._registerOnCollectionChange(this._onCollectionChange)})}_updateValue(){this.value=this._reduceValue()}_anyControls(m){for(const[g,H]of Object.entries(this.controls))if(this.contains(g)&&m(H))return!0;return!1}_reduceValue(){return this._reduceChildren({},(g,H,tt)=>((H.enabled||this.disabled)&&(g[tt]=H.value),g))}_reduceChildren(m,g){let H=m;return this._forEachChild((tt,It)=>{H=g(H,tt,It)}),H}_allControlsDisabled(){for(const m of Object.keys(this.controls))if(this.controls[m].enabled)return!1;return Object.keys(this.controls).length>0||this.disabled}_find(m){return this.controls.hasOwnProperty(m)?this.controls[m]:null}}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
function Mn(w,m){return[...m.path,w]}function At(w,m){ne(w,m),m.valueAccessor.writeValue(w.value),w.disabled&&m.valueAccessor.setDisabledState?.(!0),function ut(w,m){m.valueAccessor.registerOnChange(g=>{w._pendingValue=g,w._pendingChange=!0,w._pendingDirty=!0,"change"===w.updateOn&&hn(w,m)})}(w,m),function Pn(w,m){const g=(H,tt)=>{m.valueAccessor.writeValue(H),tt&&m.viewToModelUpdate(H)};w.registerOnChange(g),m._registerOnDestroy(()=>{w._unregisterOnChange(g)})}(w,m),function Ot(w,m){m.valueAccessor.registerOnTouched(()=>{w._pendingTouched=!0,"blur"===w.updateOn&&w._pendingChange&&hn(w,m),"submit"!==w.updateOn&&w.markAsTouched()})}(w,m),function pe(w,m){if(m.valueAccessor.setDisabledState){const g=H=>{m.valueAccessor.setDisabledState(H)};w.registerOnDisabledChange(g),m._registerOnDestroy(()=>{w._unregisterOnDisabledChange(g)})}}(w,m)}function Jt(w,m,g=!0){const H=()=>{};m.valueAccessor&&(m.valueAccessor.registerOnChange(H),m.valueAccessor.registerOnTouched(H)),Pe(w,m),w&&(m._invokeOnDestroyCallbacks(),w._registerOnCollectionChange(()=>{}))}function Oe(w,m){w.forEach(g=>{g.registerOnValidatorChange&&g.registerOnValidatorChange(m)})}function ne(w,m){const g=Ce(w);null!==m.validator?w.setValidators(ze(g,m.validator)):"function"==typeof g&&w.setValidators([g]);const H=st(w);null!==m.asyncValidator?w.setAsyncValidators(ze(H,m.asyncValidator)):"function"==typeof H&&w.setAsyncValidators([H]);const tt=()=>w.updateValueAndValidity();Oe(m._rawValidators,tt),Oe(m._rawAsyncValidators,tt)}function Pe(w,m){let g=!1;if(null!==w){if(null!==m.validator){const tt=Ce(w);if(Array.isArray(tt)&&tt.length>0){const It=tt.filter(kn=>kn!==m.validator);It.length!==tt.length&&(g=!0,w.setValidators(It))}}if(null!==m.asyncValidator){const tt=st(w);if(Array.isArray(tt)&&tt.length>0){const It=tt.filter(kn=>kn!==m.asyncValidator);It.length!==tt.length&&(g=!0,w.setAsyncValidators(It))}}}const H=()=>{};return Oe(m._rawValidators,H),Oe(m._rawAsyncValidators,H),g}function hn(w,m){w._pendingDirty&&w.markAsDirty(),w.setValue(w._pendingValue,{emitModelToViewChange:!1}),m.viewToModelUpdate(w._pendingValue),w._pendingChange=!1}function Ft(w,m){ne(w,m)}function fi(w,m){if(!w.hasOwnProperty("model"))return!1;const g=w.model;return!!g.isFirstChange()||!Object.is(m,g.currentValue)}function Qn(w,m){w._syncPendingControls(),m.forEach(g=>{const H=g.control;"submit"===H.updateOn&&H._pendingChange&&(g.viewToModelUpdate(H._pendingValue),H._pendingChange=!1)})}function gi(w,m){if(!m)return null;let g,H,tt;return Array.isArray(m),m.forEach(It=>{It.constructor===Ve?g=It:function Ei(w){return Object.getPrototypeOf(w.constructor)===ue}(It)?H=It:tt=It}),tt||H||g||null}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
const re={provide:De,useExisting:(0,s.Gpc)(()=>ie)},O=(()=>Promise.resolve(null))();let ie=(()=>{class w extends De{constructor(g,H){super(),this.submitted=!1,this._directives=new Set,this.ngSubmit=new s.vpe,this.form=new wn({},ft(g),Pt(H))}ngAfterViewInit(){this._setUpdateStrategy()}get formDirective(){return this}get control(){return this.form}get path(){return[]}get controls(){return this.form.controls}addControl(g){O.then(()=>{const H=this._findContainer(g.path);g.control=H.registerControl(g.name,g.control),At(g.control,g),g.control.updateValueAndValidity({emitEvent:!1}),this._directives.add(g)})}getControl(g){return this.form.get(g.path)}removeControl(g){O.then(()=>{const H=this._findContainer(g.path);H&&H.removeControl(g.name),this._directives.delete(g)})}addFormGroup(g){O.then(()=>{const H=this._findContainer(g.path),tt=new wn({});Ft(tt,g),H.registerControl(g.name,tt),tt.updateValueAndValidity({emitEvent:!1})})}removeFormGroup(g){O.then(()=>{const H=this._findContainer(g.path);H&&H.removeControl(g.name)})}getFormGroup(g){return this.form.get(g.path)}updateModel(g,H){O.then(()=>{this.form.get(g.path).setValue(H)})}setValue(g){this.control.setValue(g)}onSubmit(g){return this.submitted=!0,Qn(this.form,this._directives),this.ngSubmit.emit(g),!1}onReset(){this.resetForm()}resetForm(g){this.form.reset(g),this.submitted=!1}_setUpdateStrategy(){this.options&&null!=this.options.updateOn&&(this.form._updateOn=this.options.updateOn)}_findContainer(g){return g.pop(),g.length?this.form.get(g):this.form}}return w.\u0275fac=function(g){return new(g||w)(s.Y36(Ne,10),s.Y36(qe,10))},w.\u0275dir=s.lG2({type:w,selectors:[["form",3,"ngNoForm","",3,"formGroup",""],["ng-form"],["","ngForm",""]],hostBindings:function(g,H){1&g&&s.NdJ("submit",function(It){return H.onSubmit(It)})("reset",function(){return H.onReset()})},inputs:{options:["ngFormOptions","options"]},outputs:{ngSubmit:"ngSubmit"},exportAs:["ngForm"],features:[s._Bn([re]),s.qOj]}),w})();
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */function ke(w,m){const g=w.indexOf(m);g>-1&&w.splice(g,1)}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */function et(w){return"object"==typeof w&&null!==w&&2===Object.keys(w).length&&"value"in w&&"disabled"in w}const Ct=class extends $n{constructor(m=null,g,H){super(Y(g),$e(H,g)),this.defaultValue=null,this._onChange=[],this._pendingChange=!1,this._applyFormState(m),this._setUpdateStrategy(g),this._initObservables(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator}),Lt(g)&&(g.nonNullable||g.initialValueIsDefault)&&(this.defaultValue=et(m)?m.value:m)}setValue(m,g={}){this.value=this._pendingValue=m,this._onChange.length&&!1!==g.emitModelToViewChange&&this._onChange.forEach(H=>H(this.value,!1!==g.emitViewToModelChange)),this.updateValueAndValidity(g)}patchValue(m,g={}){this.setValue(m,g)}reset(m=this.defaultValue,g={}){this._applyFormState(m),this.markAsPristine(g),this.markAsUntouched(g),this.setValue(this.value,g),this._pendingChange=!1}_updateValue(){}_anyControls(m){return!1}_allControlsDisabled(){return this.disabled}registerOnChange(m){this._onChange.push(m)}_unregisterOnChange(m){ke(this._onChange,m)}registerOnDisabledChange(m){this._onDisabledChange.push(m)}_unregisterOnDisabledChange(m){ke(this._onDisabledChange,m)}_forEachChild(m){}_syncPendingControls(){return!("submit"!==this.updateOn||(this._pendingDirty&&this.markAsDirty(),this._pendingTouched&&this.markAsTouched(),!this._pendingChange)||(this.setValue(this._pendingValue,{onlySelf:!0,emitModelToViewChange:!1}),0))}_applyFormState(m){et(m)?(this.value=this._pendingValue=m.value,m.disabled?this.disable({onlySelf:!0,emitEvent:!1}):this.enable({onlySelf:!0,emitEvent:!1})):this.value=this._pendingValue=m}};
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */let un=(()=>{class w extends De{ngOnInit(){this._checkParentType(),this.formDirective.addFormGroup(this)}ngOnDestroy(){this.formDirective&&this.formDirective.removeFormGroup(this)}get control(){return this.formDirective.getFormGroup(this)}get path(){return Mn(null==this.name?this.name:this.name.toString(),this._parent)}get formDirective(){return this._parent?this._parent.formDirective:null}_checkParentType(){}}return w.\u0275fac=function(){let m;return function(H){return(m||(m=s.n5z(w)))(H||w)}}(),w.\u0275dir=s.lG2({type:w,features:[s.qOj]}),w})();
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
const Hn={provide:ct,useExisting:(0,s.Gpc)(()=>Zi)},Ti=(()=>Promise.resolve(null))();let Zi=(()=>{class w extends ct{constructor(g,H,tt,It,kn){super(),this._changeDetectorRef=kn,this.control=new Ct,this._registered=!1,this.update=new s.vpe,this._parent=g,this._setValidators(H),this._setAsyncValidators(tt),this.valueAccessor=gi(0,It)}ngOnChanges(g){if(this._checkForErrors(),!this._registered||"name"in g){if(this._registered&&(this._checkName(),this.formDirective)){const H=g.name.previousValue;this.formDirective.removeControl({name:H,path:this._getPath(H)})}this._setUpControl()}"isDisabled"in g&&this._updateDisabled(g),fi(g,this.viewModel)&&(this._updateValue(this.model),this.viewModel=this.model)}ngOnDestroy(){this.formDirective&&this.formDirective.removeControl(this)}get path(){return this._getPath(this.name)}get formDirective(){return this._parent?this._parent.formDirective:null}viewToModelUpdate(g){this.viewModel=g,this.update.emit(g)}_setUpControl(){this._setUpdateStrategy(),this._isStandalone()?this._setUpStandalone():this.formDirective.addControl(this),this._registered=!0}_setUpdateStrategy(){this.options&&null!=this.options.updateOn&&(this.control._updateOn=this.options.updateOn)}_isStandalone(){return!this._parent||!(!this.options||!this.options.standalone)}_setUpStandalone(){At(this.control,this),this.control.updateValueAndValidity({emitEvent:!1})}_checkForErrors(){this._isStandalone()||this._checkParentType(),this._checkName()}_checkParentType(){}_checkName(){this.options&&this.options.name&&(this.name=this.options.name),this._isStandalone()}_updateValue(g){Ti.then(()=>{this.control.setValue(g,{emitViewToModelChange:!1}),this._changeDetectorRef?.markForCheck()})}_updateDisabled(g){const H=g.isDisabled.currentValue,tt=0!==H&&(0,s.D6c)(H);Ti.then(()=>{tt&&!this.control.disabled?this.control.disable():!tt&&this.control.disabled&&this.control.enable(),this._changeDetectorRef?.markForCheck()})}_getPath(g){return this._parent?Mn(g,this._parent):[g]}}return w.\u0275fac=function(g){return new(g||w)(s.Y36(De,9),s.Y36(Ne,10),s.Y36(qe,10),s.Y36(q,10),s.Y36(s.sBO,8))},w.\u0275dir=s.lG2({type:w,selectors:[["","ngModel","",3,"formControlName","",3,"formControl",""]],inputs:{name:"name",isDisabled:["disabled","isDisabled"],model:["ngModel","model"],options:["ngModelOptions","options"]},outputs:{update:"ngModelChange"},exportAs:["ngModel"],features:[s._Bn([Hn]),s.qOj,s.TTD]}),w})(),Ii=(()=>{class w{}return w.\u0275fac=function(g){return new(g||w)},w.\u0275dir=s.lG2({type:w,selectors:[["form",3,"ngNoForm","",3,"ngNativeValidate",""]],hostAttrs:["novalidate",""]}),w})(),Xi=(()=>{class w{}return w.\u0275fac=function(g){return new(g||w)},w.\u0275mod=s.oAB({type:w}),w.\u0275inj=s.cJS({}),w})();
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
const Li=new s.OlP("NgModelWithFormControlWarning"),_o={provide:De,useExisting:(0,s.Gpc)(()=>Cr)};let Cr=(()=>{class w extends De{constructor(g,H){super(),this.validators=g,this.asyncValidators=H,this.submitted=!1,this._onCollectionChange=()=>this._updateDomValue(),this.directives=[],this.form=null,this.ngSubmit=new s.vpe,this._setValidators(g),this._setAsyncValidators(H)}ngOnChanges(g){this._checkFormPresent(),g.hasOwnProperty("form")&&(this._updateValidators(),this._updateDomValue(),this._updateRegistrations(),this._oldForm=this.form)}ngOnDestroy(){this.form&&(Pe(this.form,this),this.form._onCollectionChange===this._onCollectionChange&&this.form._registerOnCollectionChange(()=>{}))}get formDirective(){return this}get control(){return this.form}get path(){return[]}addControl(g){const H=this.form.get(g.path);return At(H,g),H.updateValueAndValidity({emitEvent:!1}),this.directives.push(g),H}getControl(g){return this.form.get(g.path)}removeControl(g){Jt(g.control||null,g,!1),function Ri(w,m){const g=w.indexOf(m);g>-1&&w.splice(g,1)}(this.directives,g)}addFormGroup(g){this._setUpFormContainer(g)}removeFormGroup(g){this._cleanUpFormContainer(g)}getFormGroup(g){return this.form.get(g.path)}addFormArray(g){this._setUpFormContainer(g)}removeFormArray(g){this._cleanUpFormContainer(g)}getFormArray(g){return this.form.get(g.path)}updateModel(g,H){this.form.get(g.path).setValue(H)}onSubmit(g){return this.submitted=!0,Qn(this.form,this.directives),this.ngSubmit.emit(g),!1}onReset(){this.resetForm()}resetForm(g){this.form.reset(g),this.submitted=!1}_updateDomValue(){this.directives.forEach(g=>{const H=g.control,tt=this.form.get(g.path);H!==tt&&(Jt(H||null,g),(w=>w instanceof Ct)(tt)&&(At(tt,g),g.control=tt))}),this.form._updateTreeValidity({emitEvent:!1})}_setUpFormContainer(g){const H=this.form.get(g.path);Ft(H,g),H.updateValueAndValidity({emitEvent:!1})}_cleanUpFormContainer(g){if(this.form){const H=this.form.get(g.path);H&&function ai(w,m){return Pe(w,m)}(H,g)&&H.updateValueAndValidity({emitEvent:!1})}}_updateRegistrations(){this.form._registerOnCollectionChange(this._onCollectionChange),this._oldForm&&this._oldForm._registerOnCollectionChange(()=>{})}_updateValidators(){ne(this.form,this),this._oldForm&&Pe(this._oldForm,this)}_checkFormPresent(){}}return w.\u0275fac=function(g){return new(g||w)(s.Y36(Ne,10),s.Y36(qe,10))},w.\u0275dir=s.lG2({type:w,selectors:[["","formGroup",""]],hostBindings:function(g,H){1&g&&s.NdJ("submit",function(It){return H.onSubmit(It)})("reset",function(){return H.onReset()})},inputs:{form:["formGroup","form"]},outputs:{ngSubmit:"ngSubmit"},exportAs:["ngForm"],features:[s._Bn([_o]),s.qOj,s.TTD]}),w})();
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */const Bi={provide:De,useExisting:(0,s.Gpc)(()=>fr)};let fr=(()=>{class w extends un{constructor(g,H,tt){super(),this._parent=g,this._setValidators(H),this._setAsyncValidators(tt)}_checkParentType(){wr(this._parent)}}return w.\u0275fac=function(g){return new(g||w)(s.Y36(De,13),s.Y36(Ne,10),s.Y36(qe,10))},w.\u0275dir=s.lG2({type:w,selectors:[["","formGroupName",""]],inputs:{name:["formGroupName","name"]},features:[s._Bn([Bi]),s.qOj]}),w})();const Lr={provide:De,useExisting:(0,s.Gpc)(()=>Er)};let Er=(()=>{class w extends De{constructor(g,H,tt){super(),this._parent=g,this._setValidators(H),this._setAsyncValidators(tt)}ngOnInit(){this._checkParentType(),this.formDirective.addFormArray(this)}ngOnDestroy(){this.formDirective&&this.formDirective.removeFormArray(this)}get control(){return this.formDirective.getFormArray(this)}get formDirective(){return this._parent?this._parent.formDirective:null}get path(){return Mn(null==this.name?this.name:this.name.toString(),this._parent)}_checkParentType(){wr(this._parent)}}return w.\u0275fac=function(g){return new(g||w)(s.Y36(De,13),s.Y36(Ne,10),s.Y36(qe,10))},w.\u0275dir=s.lG2({type:w,selectors:[["","formArrayName",""]],inputs:{name:["formArrayName","name"]},features:[s._Bn([Lr]),s.qOj]}),w})();function wr(w){return!(w instanceof fr||w instanceof Cr||w instanceof Er)}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */const Mi={provide:ct,useExisting:(0,s.Gpc)(()=>qi)};let qi=(()=>{class w extends ct{constructor(g,H,tt,It,kn){super(),this._ngModelWarningConfig=kn,this._added=!1,this.update=new s.vpe,this._ngModelWarningSent=!1,this._parent=g,this._setValidators(H),this._setAsyncValidators(tt),this.valueAccessor=gi(0,It)}set isDisabled(g){}ngOnChanges(g){this._added||this._setUpControl(),fi(g,this.viewModel)&&(this.viewModel=this.model,this.formDirective.updateModel(this,this.model))}ngOnDestroy(){this.formDirective&&this.formDirective.removeControl(this)}viewToModelUpdate(g){this.viewModel=g,this.update.emit(g)}get path(){return Mn(null==this.name?this.name:this.name.toString(),this._parent)}get formDirective(){return this._parent?this._parent.formDirective:null}_checkParentType(){}_setUpControl(){this._checkParentType(),this.control=this.formDirective.addControl(this),this._added=!0}}return w._ngModelWarningSentOnce=!1,w.\u0275fac=function(g){return new(g||w)(s.Y36(De,13),s.Y36(Ne,10),s.Y36(qe,10),s.Y36(q,10),s.Y36(Li,8))},w.\u0275dir=s.lG2({type:w,selectors:[["","formControlName",""]],inputs:{name:["formControlName","name"],isDisabled:["disabled","isDisabled"],model:["ngModel","model"]},outputs:{update:"ngModelChange"},features:[s._Bn([Mi]),s.qOj,s.TTD]}),w})(),Sn=(()=>{class w{}return w.\u0275fac=function(g){return new(g||w)},w.\u0275mod=s.oAB({type:w}),w.\u0275inj=s.cJS({imports:[Xi]}),w})(),fn=(()=>{class w{}return w.\u0275fac=function(g){return new(g||w)},w.\u0275mod=s.oAB({type:w}),w.\u0275inj=s.cJS({imports:[Sn]}),w})(),Yn=(()=>{class w{static withConfig(g){return{ngModule:w,providers:[{provide:Li,useValue:g.warnOnNgModelWithFormControl}]}}}return w.\u0275fac=function(g){return new(g||w)},w.\u0275mod=s.oAB({type:w}),w.\u0275inj=s.cJS({imports:[Sn]}),w})();
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
class An extends $n{constructor(m,g,H){super(Y(g),$e(H,g)),this.controls=m,this._initObservables(),this._setUpdateStrategy(g),this._setUpControls(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator})}at(m){return this.controls[this._adjustIndex(m)]}push(m,g={}){this.controls.push(m),this._registerControl(m),this.updateValueAndValidity({emitEvent:g.emitEvent}),this._onCollectionChange()}insert(m,g,H={}){this.controls.splice(m,0,g),this._registerControl(g),this.updateValueAndValidity({emitEvent:H.emitEvent})}removeAt(m,g={}){let H=this._adjustIndex(m);H<0&&(H=0),this.controls[H]&&this.controls[H]._registerOnCollectionChange(()=>{}),this.controls.splice(H,1),this.updateValueAndValidity({emitEvent:g.emitEvent})}setControl(m,g,H={}){let tt=this._adjustIndex(m);tt<0&&(tt=0),this.controls[tt]&&this.controls[tt]._registerOnCollectionChange(()=>{}),this.controls.splice(tt,1),g&&(this.controls.splice(tt,0,g),this._registerControl(g)),this.updateValueAndValidity({emitEvent:H.emitEvent}),this._onCollectionChange()}get length(){return this.controls.length}setValue(m,g={}){Zn(this,0,m),m.forEach((H,tt)=>{bn(this,!1,tt),this.at(tt).setValue(H,{onlySelf:!0,emitEvent:g.emitEvent})}),this.updateValueAndValidity(g)}patchValue(m,g={}){null!=m&&(m.forEach((H,tt)=>{this.at(tt)&&this.at(tt).patchValue(H,{onlySelf:!0,emitEvent:g.emitEvent})}),this.updateValueAndValidity(g))}reset(m=[],g={}){this._forEachChild((H,tt)=>{H.reset(m[tt],{onlySelf:!0,emitEvent:g.emitEvent})}),this._updatePristine(g),this._updateTouched(g),this.updateValueAndValidity(g)}getRawValue(){return this.controls.map(m=>m.getRawValue())}clear(m={}){this.controls.length<1||(this._forEachChild(g=>g._registerOnCollectionChange(()=>{})),this.controls.splice(0),this.updateValueAndValidity({emitEvent:m.emitEvent}))}_adjustIndex(m){return m<0?m+this.length:m}_syncPendingControls(){let m=this.controls.reduce((g,H)=>!!H._syncPendingControls()||g,!1);return m&&this.updateValueAndValidity({onlySelf:!0}),m}_forEachChild(m){this.controls.forEach((g,H)=>{m(g,H)})}_updateValue(){this.value=this.controls.filter(m=>m.enabled||this.disabled).map(m=>m.value)}_anyControls(m){return this.controls.some(g=>g.enabled&&m(g))}_setUpControls(){this._forEachChild(m=>this._registerControl(m))}_allControlsDisabled(){for(const m of this.controls)if(m.enabled)return!1;return this.controls.length>0||this.disabled}_registerControl(m){m.setParent(this),m._registerOnCollectionChange(this._onCollectionChange)}_find(m){return this.at(m)??null}}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
function ri(w){return!!w&&(void 0!==w.asyncValidators||void 0!==w.validators||void 0!==w.updateOn)}let Si=(()=>{class w{constructor(){this.useNonNullable=!1}get nonNullable(){const g=new w;return g.useNonNullable=!0,g}group(g,H=null){const tt=this._reduceControls(g);let li,It=null,kn=null;return null!==H&&(ri(H)?(It=null!=H.validators?H.validators:null,kn=null!=H.asyncValidators?H.asyncValidators:null,li=null!=H.updateOn?H.updateOn:void 0):(It=null!=H.validator?H.validator:null,kn=null!=H.asyncValidator?H.asyncValidator:null)),new wn(tt,{asyncValidators:kn,updateOn:li,validators:It})}control(g,H,tt){let It={};return this.useNonNullable?(ri(H)?It=H:(It.validators=H,It.asyncValidators=tt),new Ct(g,{...It,nonNullable:!0})):new Ct(g,H,tt)}array(g,H,tt){const It=g.map(kn=>this._createControl(kn));return new An(It,H,tt)}_reduceControls(g){const H={};return Object.keys(g).forEach(tt=>{H[tt]=this._createControl(g[tt])}),H}_createControl(g){return g instanceof Ct||g instanceof $n?g:Array.isArray(g)?this.control(g[0],g.length>1?g[1]:null,g.length>2?g[2]:null):this.control(g)}}return w.\u0275fac=function(g){return new(g||w)},w.\u0275prov=s.Yz7({token:w,factory:w.\u0275fac,providedIn:Yn}),w})();
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */,4859:(St,He,y)=>{y.d(He,{lW:()=>ce,ot:()=>te});var s=y(4650),v=y(3238),M=y(7725);
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */const G=["mat-button",""],X=["*"],q=["mat-button","mat-flat-button","mat-icon-button","mat-raised-button","mat-stroked-button","mat-mini-fab","mat-fab"],Me=(0,v.pj)((0,v.Id)((0,v.Kr)(class{constructor(Ge){this._elementRef=Ge}})));let ce=(()=>{class Ge extends Me{constructor(xe,Ke,Ne){super(xe),this._focusMonitor=Ke,this._animationMode=Ne,this.isRoundButton=this._hasHostAttributes("mat-fab","mat-mini-fab"),this.isIconButton=this._hasHostAttributes("mat-icon-button");for(const qe of q)this._hasHostAttributes(qe)&&this._getHostElement().classList.add(qe);xe.nativeElement.classList.add("mat-button-base"),this.isRoundButton&&(this.color="accent")}ngAfterViewInit(){this._focusMonitor.monitor(this._elementRef,!0)}ngOnDestroy(){this._focusMonitor.stopMonitoring(this._elementRef)}focus(xe,Ke){xe?this._focusMonitor.focusVia(this._getHostElement(),xe,Ke):this._getHostElement().focus(Ke)}_getHostElement(){return this._elementRef.nativeElement}_isRippleDisabled(){return this.disableRipple||this.disabled}_hasHostAttributes(...xe){return xe.some(Ke=>this._getHostElement().hasAttribute(Ke))}}return Ge.\u0275fac=function(xe){return new(xe||Ge)(s.Y36(s.SBq),s.Y36(M.tE),s.Y36(s.QbO,8))},Ge.\u0275cmp=s.Xpm({type:Ge,selectors:[["button","mat-button",""],["button","mat-raised-button",""],["button","mat-icon-button",""],["button","mat-fab",""],["button","mat-mini-fab",""],["button","mat-stroked-button",""],["button","mat-flat-button",""]],viewQuery:function(xe,Ke){if(1&xe&&s.Gf(v.wG,5),2&xe){let Ne;s.iGM(Ne=s.CRH())&&(Ke.ripple=Ne.first)}},hostAttrs:[1,"mat-focus-indicator"],hostVars:5,hostBindings:function(xe,Ke){2&xe&&(s.uIk("disabled",Ke.disabled||null),s.ekj("_mat-animation-noopable","NoopAnimations"===Ke._animationMode)("mat-button-disabled",Ke.disabled))},inputs:{disabled:"disabled",disableRipple:"disableRipple",color:"color"},exportAs:["matButton"],features:[s.qOj],attrs:G,ngContentSelectors:X,decls:4,vars:5,consts:[[1,"mat-button-wrapper"],["matRipple","",1,"mat-button-ripple",3,"matRippleDisabled","matRippleCentered","matRippleTrigger"],[1,"mat-button-focus-overlay"]],template:function(xe,Ke){1&xe&&(s.F$t(),s.TgZ(0,"span",0),s.Hsn(1),s.qZA(),s._UZ(2,"span",1)(3,"span",2)),2&xe&&(s.xp6(2),s.ekj("mat-button-ripple-round",Ke.isRoundButton||Ke.isIconButton),s.Q6J("matRippleDisabled",Ke._isRippleDisabled())("matRippleCentered",Ke.isIconButton)("matRippleTrigger",Ke._getHostElement()))},dependencies:[v.wG],styles:[".mat-button .mat-button-focus-overlay,.mat-icon-button .mat-button-focus-overlay{opacity:0}.mat-button:hover:not(.mat-button-disabled) .mat-button-focus-overlay,.mat-stroked-button:hover:not(.mat-button-disabled) .mat-button-focus-overlay{opacity:.04}@media(hover: none){.mat-button:hover:not(.mat-button-disabled) .mat-button-focus-overlay,.mat-stroked-button:hover:not(.mat-button-disabled) .mat-button-focus-overlay{opacity:0}}.mat-button,.mat-icon-button,.mat-stroked-button,.mat-flat-button{box-sizing:border-box;position:relative;-webkit-user-select:none;user-select:none;cursor:pointer;outline:none;border:none;-webkit-tap-highlight-color:rgba(0,0,0,0);display:inline-block;white-space:nowrap;text-decoration:none;vertical-align:baseline;text-align:center;margin:0;min-width:64px;line-height:36px;padding:0 16px;border-radius:4px;overflow:visible}.mat-button::-moz-focus-inner,.mat-icon-button::-moz-focus-inner,.mat-stroked-button::-moz-focus-inner,.mat-flat-button::-moz-focus-inner{border:0}.mat-button.mat-button-disabled,.mat-icon-button.mat-button-disabled,.mat-stroked-button.mat-button-disabled,.mat-flat-button.mat-button-disabled{cursor:default}.mat-button.cdk-keyboard-focused .mat-button-focus-overlay,.mat-button.cdk-program-focused .mat-button-focus-overlay,.mat-icon-button.cdk-keyboard-focused .mat-button-focus-overlay,.mat-icon-button.cdk-program-focused .mat-button-focus-overlay,.mat-stroked-button.cdk-keyboard-focused .mat-button-focus-overlay,.mat-stroked-button.cdk-program-focused .mat-button-focus-overlay,.mat-flat-button.cdk-keyboard-focused .mat-button-focus-overlay,.mat-flat-button.cdk-program-focused .mat-button-focus-overlay{opacity:.12}.mat-button::-moz-focus-inner,.mat-icon-button::-moz-focus-inner,.mat-stroked-button::-moz-focus-inner,.mat-flat-button::-moz-focus-inner{border:0}.mat-raised-button{box-sizing:border-box;position:relative;-webkit-user-select:none;user-select:none;cursor:pointer;outline:none;border:none;-webkit-tap-highlight-color:rgba(0,0,0,0);display:inline-block;white-space:nowrap;text-decoration:none;vertical-align:baseline;text-align:center;margin:0;min-width:64px;line-height:36px;padding:0 16px;border-radius:4px;overflow:visible;transform:translate3d(0, 0, 0);transition:background 400ms cubic-bezier(0.25, 0.8, 0.25, 1),box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1)}.mat-raised-button::-moz-focus-inner{border:0}.mat-raised-button.mat-button-disabled{cursor:default}.mat-raised-button.cdk-keyboard-focused .mat-button-focus-overlay,.mat-raised-button.cdk-program-focused .mat-button-focus-overlay{opacity:.12}.mat-raised-button::-moz-focus-inner{border:0}.mat-raised-button._mat-animation-noopable{transition:none !important;animation:none !important}.mat-stroked-button{border:1px solid currentColor;padding:0 15px;line-height:34px}.mat-stroked-button .mat-button-ripple.mat-ripple,.mat-stroked-button .mat-button-focus-overlay{top:-1px;left:-1px;right:-1px;bottom:-1px}.mat-fab{box-sizing:border-box;position:relative;-webkit-user-select:none;user-select:none;cursor:pointer;outline:none;border:none;-webkit-tap-highlight-color:rgba(0,0,0,0);display:inline-block;white-space:nowrap;text-decoration:none;vertical-align:baseline;text-align:center;margin:0;min-width:64px;line-height:36px;padding:0 16px;border-radius:4px;overflow:visible;transform:translate3d(0, 0, 0);transition:background 400ms cubic-bezier(0.25, 0.8, 0.25, 1),box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);min-width:0;border-radius:50%;width:56px;height:56px;padding:0;flex-shrink:0}.mat-fab::-moz-focus-inner{border:0}.mat-fab.mat-button-disabled{cursor:default}.mat-fab.cdk-keyboard-focused .mat-button-focus-overlay,.mat-fab.cdk-program-focused .mat-button-focus-overlay{opacity:.12}.mat-fab::-moz-focus-inner{border:0}.mat-fab._mat-animation-noopable{transition:none !important;animation:none !important}.mat-fab .mat-button-wrapper{padding:16px 0;display:inline-block;line-height:24px}.mat-mini-fab{box-sizing:border-box;position:relative;-webkit-user-select:none;user-select:none;cursor:pointer;outline:none;border:none;-webkit-tap-highlight-color:rgba(0,0,0,0);display:inline-block;white-space:nowrap;text-decoration:none;vertical-align:baseline;text-align:center;margin:0;min-width:64px;line-height:36px;padding:0 16px;border-radius:4px;overflow:visible;transform:translate3d(0, 0, 0);transition:background 400ms cubic-bezier(0.25, 0.8, 0.25, 1),box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);min-width:0;border-radius:50%;width:40px;height:40px;padding:0;flex-shrink:0}.mat-mini-fab::-moz-focus-inner{border:0}.mat-mini-fab.mat-button-disabled{cursor:default}.mat-mini-fab.cdk-keyboard-focused .mat-button-focus-overlay,.mat-mini-fab.cdk-program-focused .mat-button-focus-overlay{opacity:.12}.mat-mini-fab::-moz-focus-inner{border:0}.mat-mini-fab._mat-animation-noopable{transition:none !important;animation:none !important}.mat-mini-fab .mat-button-wrapper{padding:8px 0;display:inline-block;line-height:24px}.mat-icon-button{padding:0;min-width:0;width:40px;height:40px;flex-shrink:0;line-height:40px;border-radius:50%}.mat-icon-button i,.mat-icon-button .mat-icon{line-height:24px}.mat-button-ripple.mat-ripple,.mat-button-focus-overlay{top:0;left:0;right:0;bottom:0;position:absolute;pointer-events:none;border-radius:inherit}.mat-button-ripple.mat-ripple:not(:empty){transform:translateZ(0)}.mat-button-focus-overlay{opacity:0;transition:opacity 200ms cubic-bezier(0.35, 0, 0.25, 1),background-color 200ms cubic-bezier(0.35, 0, 0.25, 1)}._mat-animation-noopable .mat-button-focus-overlay{transition:none}.mat-button-ripple-round{border-radius:50%;z-index:1}.mat-button .mat-button-wrapper>*,.mat-flat-button .mat-button-wrapper>*,.mat-stroked-button .mat-button-wrapper>*,.mat-raised-button .mat-button-wrapper>*,.mat-icon-button .mat-button-wrapper>*,.mat-fab .mat-button-wrapper>*,.mat-mini-fab .mat-button-wrapper>*{vertical-align:middle}.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-prefix .mat-icon-button,.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-suffix .mat-icon-button{display:inline-flex;justify-content:center;align-items:center;font-size:inherit;width:2.5em;height:2.5em}.cdk-high-contrast-active .mat-button,.cdk-high-contrast-active .mat-flat-button,.cdk-high-contrast-active .mat-raised-button,.cdk-high-contrast-active .mat-icon-button,.cdk-high-contrast-active .mat-fab,.cdk-high-contrast-active .mat-mini-fab{outline:solid 1px}.cdk-high-contrast-active .mat-button-base.cdk-keyboard-focused,.cdk-high-contrast-active .mat-button-base.cdk-program-focused{outline:solid 3px}"],encapsulation:2,changeDetection:0}),Ge})(),te=(()=>{class Ge{}return Ge.\u0275fac=function(xe){return new(xe||Ge)},Ge.\u0275mod=s.oAB({type:Ge}),Ge.\u0275inj=s.cJS({imports:[v.si,v.BQ,v.BQ]}),Ge})();
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */,3546:(St,He,y)=>{y.d(He,{QW:()=>ee,a8:()=>mt});var s=y(4650),v=y(3238);
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */const M=["*",[["mat-card-footer"]]],G=["*","mat-card-footer"];let mt=(()=>{class ae{constructor(Be){this._animationMode=Be}}return ae.\u0275fac=function(Be){return new(Be||ae)(s.Y36(s.QbO,8))},ae.\u0275cmp=s.Xpm({type:ae,selectors:[["mat-card"]],hostAttrs:[1,"mat-card","mat-focus-indicator"],hostVars:2,hostBindings:function(Be,ot){2&Be&&s.ekj("_mat-animation-noopable","NoopAnimations"===ot._animationMode)},exportAs:["matCard"],ngContentSelectors:G,decls:2,vars:0,template:function(Be,ot){1&Be&&(s.F$t(M),s.Hsn(0),s.Hsn(1,1))},styles:[".mat-card{transition:box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);display:block;position:relative;padding:16px;border-radius:4px}.mat-card._mat-animation-noopable{transition:none !important;animation:none !important}.mat-card>.mat-divider-horizontal{position:absolute;left:0;width:100%}[dir=rtl] .mat-card>.mat-divider-horizontal{left:auto;right:0}.mat-card>.mat-divider-horizontal.mat-divider-inset{position:static;margin:0}[dir=rtl] .mat-card>.mat-divider-horizontal.mat-divider-inset{margin-right:0}.cdk-high-contrast-active .mat-card{outline:solid 1px}.mat-card-actions,.mat-card-subtitle,.mat-card-content{display:block;margin-bottom:16px}.mat-card-title{display:block;margin-bottom:8px}.mat-card-actions{margin-left:-8px;margin-right:-8px;padding:8px 0}.mat-card-actions-align-end{display:flex;justify-content:flex-end}.mat-card-image{width:calc(100% + 32px);margin:0 -16px 16px -16px;display:block;overflow:hidden}.mat-card-image img{width:100%}.mat-card-footer{display:block;margin:0 -16px -16px -16px}.mat-card-actions .mat-button,.mat-card-actions .mat-raised-button,.mat-card-actions .mat-stroked-button{margin:0 8px}.mat-card-header{display:flex;flex-direction:row}.mat-card-header .mat-card-title{margin-bottom:12px}.mat-card-header-text{margin:0 16px}.mat-card-avatar{height:40px;width:40px;border-radius:50%;flex-shrink:0;object-fit:cover}.mat-card-title-group{display:flex;justify-content:space-between}.mat-card-sm-image{width:80px;height:80px}.mat-card-md-image{width:112px;height:112px}.mat-card-lg-image{width:152px;height:152px}.mat-card-xl-image{width:240px;height:240px;margin:-8px}.mat-card-title-group>.mat-card-xl-image{margin:-8px 0 8px}@media(max-width: 599px){.mat-card-title-group{margin:0}.mat-card-xl-image{margin-left:0;margin-right:0}}.mat-card>:first-child,.mat-card-content>:first-child{margin-top:0}.mat-card>:last-child:not(.mat-card-footer),.mat-card-content>:last-child:not(.mat-card-footer){margin-bottom:0}.mat-card-image:first-child{margin-top:-16px;border-top-left-radius:inherit;border-top-right-radius:inherit}.mat-card>.mat-card-actions:last-child{margin-bottom:-8px;padding-bottom:0}.mat-card-actions:not(.mat-card-actions-align-end) .mat-button:first-child,.mat-card-actions:not(.mat-card-actions-align-end) .mat-raised-button:first-child,.mat-card-actions:not(.mat-card-actions-align-end) .mat-stroked-button:first-child{margin-left:0;margin-right:0}.mat-card-actions-align-end .mat-button:last-child,.mat-card-actions-align-end .mat-raised-button:last-child,.mat-card-actions-align-end .mat-stroked-button:last-child{margin-left:0;margin-right:0}.mat-card-title:not(:first-child),.mat-card-subtitle:not(:first-child){margin-top:-4px}.mat-card-header .mat-card-subtitle:not(:first-child){margin-top:-8px}.mat-card>.mat-card-xl-image:first-child{margin-top:-8px}.mat-card>.mat-card-xl-image:last-child{margin-bottom:-8px}"],encapsulation:2,changeDetection:0}),ae})(),ee=(()=>{class ae{}return ae.\u0275fac=function(Be){return new(Be||ae)},ae.\u0275mod=s.oAB({type:ae}),ae.\u0275inj=s.cJS({imports:[v.BQ,v.BQ]}),ae})();
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */,3238:(St,He,y)=>{y.d(He,{yN:()=>xe,mZ:()=>Ke,rD:()=>ze,BQ:()=>ht,Ng:()=>gn,wG:()=>Je,si:()=>B,pj:()=>ae,Kr:()=>Ee,Id:()=>ee,FD:()=>ot,dB:()=>Se});var s=y(4650),v=y(7725),M=y(445),X=y(6895),K=y(3353),ue=y(1281),q=y(8306);
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
let xe=(()=>{class Qe{}return Qe.STANDARD_CURVE="cubic-bezier(0.4,0.0,0.2,1)",Qe.DECELERATION_CURVE="cubic-bezier(0.0,0.0,0.2,1)",Qe.ACCELERATION_CURVE="cubic-bezier(0.4,0.0,1,1)",Qe.SHARP_CURVE="cubic-bezier(0.4,0.0,0.6,1)",Qe})(),Ke=(()=>{class Qe{}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
return Qe.COMPLEX="375ms",Qe.ENTERING="225ms",Qe.EXITING="195ms",Qe})();const qe=new s.OlP("mat-sanity-checks",{providedIn:"root",factory:function Ne(){return!0}});let ht=(()=>{class Qe{constructor(ge,Ue,Te){this._sanityChecks=Ue,this._document=Te,this._hasDoneGlobalChecks=!1,ge._applyBodyHighContrastModeCssClasses(),this._hasDoneGlobalChecks||(this._hasDoneGlobalChecks=!0)}_checkIsEnabled(ge){return!(0,K.Oy)()&&("boolean"==typeof this._sanityChecks?this._sanityChecks:!!this._sanityChecks[ge])}}return Qe.\u0275fac=function(ge){return new(ge||Qe)(s.LFG(v.qm),s.LFG(qe,8),s.LFG(X.K0))},Qe.\u0275mod=s.oAB({type:Qe}),Qe.\u0275inj=s.cJS({imports:[M.vT,M.vT]}),Qe})();
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
function ee(Qe){return class extends Qe{constructor(...he){super(...he),this._disabled=!1}get disabled(){return this._disabled}set disabled(he){this._disabled=(0,ue.Ig)(he)}}}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */function ae(Qe,he){return class extends Qe{constructor(...ge){super(...ge),this.defaultColor=he,this.color=he}get color(){return this._color}set color(ge){const Ue=ge||this.defaultColor;Ue!==this._color&&(this._color&&this._elementRef.nativeElement.classList.remove(`mat-${this._color}`),Ue&&this._elementRef.nativeElement.classList.add(`mat-${Ue}`),this._color=Ue)}}}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */function Ee(Qe){return class extends Qe{constructor(...he){super(...he),this._disableRipple=!1}get disableRipple(){return this._disableRipple}set disableRipple(he){this._disableRipple=(0,ue.Ig)(he)}}}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
function ot(Qe){return class extends Qe{constructor(...he){super(...he),this.errorState=!1}updateErrorState(){const he=this.errorState,_e=(this.errorStateMatcher||this._defaultErrorStateMatcher).isErrorState(this.ngControl?this.ngControl.control:null,this._parentFormGroup||this._parentForm);_e!==he&&(this.errorState=_e,this.stateChanges.next())}}}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */function Se(Qe){return class extends Qe{constructor(...he){super(...he),this._isInitialized=!1,this._pendingSubscribers=[],this.initialized=new q.y(ge=>{this._isInitialized?this._notifySubscriber(ge):this._pendingSubscribers.push(ge)})}_markInitialized(){this._isInitialized=!0,this._pendingSubscribers.forEach(this._notifySubscriber),this._pendingSubscribers=null}_notifySubscriber(he){he.next(),he.complete()}}}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
let ze=(()=>{class Qe{isErrorState(ge,Ue){return!!(ge&&ge.invalid&&(ge.touched||Ue&&Ue.submitted))}}return Qe.\u0275fac=function(ge){return new(ge||Qe)},Qe.\u0275prov=s.Yz7({token:Qe,factory:Qe.\u0275fac,providedIn:"root"}),Qe})();
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
class nt{constructor(he,ge,Ue,Te=!1){this._renderer=he,this.element=ge,this.config=Ue,this._animationForciblyDisabledThroughCss=Te,this.state=3}fadeOut(){this._renderer.fadeOutRipple(this)}}const rt={enterDuration:225,exitDuration:150},De=(0,K.i$)({passive:!0}),ct=["mousedown","touchstart"],gt=["mouseup","mouseleave","touchend","touchcancel"];class Gt{constructor(he,ge,Ue,Te){this._target=he,this._ngZone=ge,this._isPointerDown=!1,this._activeRipples=new Map,this._pointerUpEventsRegistered=!1,Te.isBrowser&&(this._containerElement=(0,ue.fI)(Ue))}fadeInRipple(he,ge,Ue={}){const Te=this._containerRect=this._containerRect||this._containerElement.getBoundingClientRect(),_e={...rt,...Ue.animation};Ue.centered&&(he=Te.left+Te.width/2,ge=Te.top+Te.height/2);const Y=Ue.radius||function Yt(Qe,he,ge){const Ue=Math.max(Math.abs(Qe-ge.left),Math.abs(Qe-ge.right)),Te=Math.max(Math.abs(he-ge.top),Math.abs(he-ge.bottom));return Math.sqrt(Ue*Ue+Te*Te)}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */(he,ge,Te),Re=he-Te.left,$e=ge-Te.top,Et=_e.enterDuration,Lt=document.createElement("div");Lt.classList.add("mat-ripple-element"),Lt.style.left=Re-Y+"px",Lt.style.top=$e-Y+"px",Lt.style.height=2*Y+"px",Lt.style.width=2*Y+"px",null!=Ue.color&&(Lt.style.backgroundColor=Ue.color),Lt.style.transitionDuration=`${Et}ms`,this._containerElement.appendChild(Lt);const bn=window.getComputedStyle(Lt),$n=bn.transitionDuration,wn="none"===bn.transitionProperty||"0s"===$n||"0s, 0s"===$n,sn=new nt(this,Lt,Ue,wn);Lt.style.transform="scale3d(1, 1, 1)",sn.state=0,Ue.persistent||(this._mostRecentTransientRipple=sn);let Qt=null;return!wn&&(Et||_e.exitDuration)&&this._ngZone.runOutsideAngular(()=>{const vn=()=>this._finishRippleTransition(sn),On=()=>this._destroyRipple(sn);Lt.addEventListener("transitionend",vn),Lt.addEventListener("transitioncancel",On),Qt={onTransitionEnd:vn,onTransitionCancel:On}}),this._activeRipples.set(sn,Qt),(wn||!Et)&&this._finishRippleTransition(sn),sn}fadeOutRipple(he){if(2===he.state||3===he.state)return;const ge=he.element,Ue={...rt,...he.config.animation};ge.style.transitionDuration=`${Ue.exitDuration}ms`,ge.style.opacity="0",he.state=2,(he._animationForciblyDisabledThroughCss||!Ue.exitDuration)&&this._finishRippleTransition(he)}fadeOutAll(){this._getActiveRipples().forEach(he=>he.fadeOut())}fadeOutAllNonPersistent(){this._getActiveRipples().forEach(he=>{he.config.persistent||he.fadeOut()})}setupTriggerEvents(he){const ge=(0,ue.fI)(he);!ge||ge===this._triggerElement||(this._removeTriggerEvents(),this._triggerElement=ge,this._registerEvents(ct))}handleEvent(he){"mousedown"===he.type?this._onMousedown(he):"touchstart"===he.type?this._onTouchStart(he):this._onPointerUp(),this._pointerUpEventsRegistered||(this._registerEvents(gt),this._pointerUpEventsRegistered=!0)}_finishRippleTransition(he){0===he.state?this._startFadeOutTransition(he):2===he.state&&this._destroyRipple(he)}_startFadeOutTransition(he){const ge=he===this._mostRecentTransientRipple,{persistent:Ue}=he.config;he.state=1,!Ue&&(!ge||!this._isPointerDown)&&he.fadeOut()}_destroyRipple(he){const ge=this._activeRipples.get(he)??null;this._activeRipples.delete(he),this._activeRipples.size||(this._containerRect=null),he===this._mostRecentTransientRipple&&(this._mostRecentTransientRipple=null),he.state=3,null!==ge&&(he.element.removeEventListener("transitionend",ge.onTransitionEnd),he.element.removeEventListener("transitioncancel",ge.onTransitionCancel)),he.element.remove()}_onMousedown(he){const ge=(0,v.X6)(he),Ue=this._lastTouchStartEvent&&Date.now()<this._lastTouchStartEvent+800;!this._target.rippleDisabled&&!ge&&!Ue&&(this._isPointerDown=!0,this.fadeInRipple(he.clientX,he.clientY,this._target.rippleConfig))}_onTouchStart(he){if(!this._target.rippleDisabled&&!(0,v.yG)(he)){this._lastTouchStartEvent=Date.now(),this._isPointerDown=!0;const ge=he.changedTouches;for(let Ue=0;Ue<ge.length;Ue++)this.fadeInRipple(ge[Ue].clientX,ge[Ue].clientY,this._target.rippleConfig)}}_onPointerUp(){!this._isPointerDown||(this._isPointerDown=!1,this._getActiveRipples().forEach(he=>{!he.config.persistent&&(1===he.state||he.config.terminateOnPointerUp&&0===he.state)&&he.fadeOut()}))}_registerEvents(he){this._ngZone.runOutsideAngular(()=>{he.forEach(ge=>{this._triggerElement.addEventListener(ge,this,De)})})}_getActiveRipples(){return Array.from(this._activeRipples.keys())}_removeTriggerEvents(){this._triggerElement&&(ct.forEach(he=>{this._triggerElement.removeEventListener(he,this,De)}),this._pointerUpEventsRegistered&&gt.forEach(he=>{this._triggerElement.removeEventListener(he,this,De)}))}}const Mt=new s.OlP("mat-ripple-global-options");let Je=(()=>{class Qe{constructor(ge,Ue,Te,_e,Y){this._elementRef=ge,this._animationMode=Y,this.radius=0,this._disabled=!1,this._isInitialized=!1,this._globalOptions=_e||{},this._rippleRenderer=new Gt(this,Ue,ge,Te)}get disabled(){return this._disabled}set disabled(ge){ge&&this.fadeOutAllNonPersistent(),this._disabled=ge,this._setupTriggerEventsIfEnabled()}get trigger(){return this._trigger||this._elementRef.nativeElement}set trigger(ge){this._trigger=ge,this._setupTriggerEventsIfEnabled()}ngOnInit(){this._isInitialized=!0,this._setupTriggerEventsIfEnabled()}ngOnDestroy(){this._rippleRenderer._removeTriggerEvents()}fadeOutAll(){this._rippleRenderer.fadeOutAll()}fadeOutAllNonPersistent(){this._rippleRenderer.fadeOutAllNonPersistent()}get rippleConfig(){return{centered:this.centered,radius:this.radius,color:this.color,animation:{...this._globalOptions.animation,..."NoopAnimations"===this._animationMode?{enterDuration:0,exitDuration:0}:{},...this.animation},terminateOnPointerUp:this._globalOptions.terminateOnPointerUp}}get rippleDisabled(){return this.disabled||!!this._globalOptions.disabled}_setupTriggerEventsIfEnabled(){!this.disabled&&this._isInitialized&&this._rippleRenderer.setupTriggerEvents(this.trigger)}launch(ge,Ue=0,Te){return"number"==typeof ge?this._rippleRenderer.fadeInRipple(ge,Ue,{...this.rippleConfig,...Te}):this._rippleRenderer.fadeInRipple(0,0,{...this.rippleConfig,...ge})}}return Qe.\u0275fac=function(ge){return new(ge||Qe)(s.Y36(s.SBq),s.Y36(s.R0b),s.Y36(K.t4),s.Y36(Mt,8),s.Y36(s.QbO,8))},Qe.\u0275dir=s.lG2({type:Qe,selectors:[["","mat-ripple",""],["","matRipple",""]],hostAttrs:[1,"mat-ripple"],hostVars:2,hostBindings:function(ge,Ue){2&ge&&s.ekj("mat-ripple-unbounded",Ue.unbounded)},inputs:{color:["matRippleColor","color"],unbounded:["matRippleUnbounded","unbounded"],centered:["matRippleCentered","centered"],radius:["matRippleRadius","radius"],animation:["matRippleAnimation","animation"],disabled:["matRippleDisabled","disabled"],trigger:["matRippleTrigger","trigger"]},exportAs:["matRipple"]}),Qe})(),B=(()=>{class Qe{}return Qe.\u0275fac=function(ge){return new(ge||Qe)},Qe.\u0275mod=s.oAB({type:Qe}),Qe.\u0275inj=s.cJS({imports:[ht,ht]}),Qe})(),j=(()=>{class Qe{}return Qe.\u0275fac=function(ge){return new(ge||Qe)},Qe.\u0275mod=s.oAB({type:Qe}),Qe.\u0275inj=s.cJS({imports:[ht]}),Qe})(),gn=(()=>{class Qe{}return Qe.\u0275fac=function(ge){return new(ge||Qe)},Qe.\u0275mod=s.oAB({type:Qe}),Qe.\u0275inj=s.cJS({imports:[B,X.ez,ht,j]}),Qe})();
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */,5412:(St,He,y)=>{y.d(He,{uw:()=>De,Is:()=>B});var s=y(7725),v=y(8184),M=y(3353),G=y(4080),X=y(6895),K=y(4650),ue=y(9521),q=y(7579),Me=y(9770),ce=y(9646),me=y(445),te=y(8675);
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */function Ge(F,j){}class Ve{constructor(){this.role="dialog",this.panelClass="",this.hasBackdrop=!0,this.backdropClass="",this.disableClose=!1,this.width="",this.height="",this.data=null,this.ariaDescribedBy=null,this.ariaLabelledBy=null,this.ariaLabel=null,this.ariaModal=!0,this.autoFocus="first-tabbable",this.restoreFocus=!0,this.closeOnNavigation=!0,this.closeOnDestroy=!0}}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */let Ke=(()=>{class F extends G.en{constructor(b,T,P,x,$,ve,se,Xe){super(),this._elementRef=b,this._focusTrapFactory=T,this._config=x,this._interactivityChecker=$,this._ngZone=ve,this._overlayRef=se,this._focusMonitor=Xe,this._elementFocusedBeforeDialogWasOpened=null,this._closeInteractionType=null,this.attachDomPortal=Rt=>{this._portalOutlet.hasAttached();const Ut=this._portalOutlet.attachDomPortal(Rt);return this._contentAttached(),Ut},this._ariaLabelledBy=this._config.ariaLabelledBy||null,this._document=P}_contentAttached(){this._initializeFocusTrap(),this._handleBackdropClicks(),this._captureInitialFocus()}_captureInitialFocus(){this._trapFocus()}ngOnDestroy(){this._restoreFocus()}attachComponentPortal(b){this._portalOutlet.hasAttached();const T=this._portalOutlet.attachComponentPortal(b);return this._contentAttached(),T}attachTemplatePortal(b){this._portalOutlet.hasAttached();const T=this._portalOutlet.attachTemplatePortal(b);return this._contentAttached(),T}_recaptureFocus(){this._containsFocus()||this._trapFocus()}_forceFocus(b,T){this._interactivityChecker.isFocusable(b)||(b.tabIndex=-1,this._ngZone.runOutsideAngular(()=>{const P=()=>{b.removeEventListener("blur",P),b.removeEventListener("mousedown",P),b.removeAttribute("tabindex")};b.addEventListener("blur",P),b.addEventListener("mousedown",P)})),b.focus(T)}_focusByCssSelector(b,T){let P=this._elementRef.nativeElement.querySelector(b);P&&this._forceFocus(P,T)}_trapFocus(){const b=this._elementRef.nativeElement;switch(this._config.autoFocus){case!1:case"dialog":this._containsFocus()||b.focus();break;case!0:case"first-tabbable":this._focusTrap.focusInitialElementWhenReady().then(T=>{T||this._focusDialogContainer()});break;case"first-heading":this._focusByCssSelector('h1, h2, h3, h4, h5, h6, [role="heading"]');break;default:this._focusByCssSelector(this._config.autoFocus)}}_restoreFocus(){const b=this._config.restoreFocus;let T=null;if("string"==typeof b?T=this._document.querySelector(b):"boolean"==typeof b?T=b?this._elementFocusedBeforeDialogWasOpened:null:b&&(T=b),this._config.restoreFocus&&T&&"function"==typeof T.focus){const P=(0,M.ht)(),x=this._elementRef.nativeElement;(!P||P===this._document.body||P===x||x.contains(P))&&(this._focusMonitor?(this._focusMonitor.focusVia(T,this._closeInteractionType),this._closeInteractionType=null):T.focus())}this._focusTrap&&this._focusTrap.destroy()}_focusDialogContainer(){this._elementRef.nativeElement.focus&&this._elementRef.nativeElement.focus()}_containsFocus(){const b=this._elementRef.nativeElement,T=(0,M.ht)();return b===T||b.contains(T)}_initializeFocusTrap(){this._focusTrap=this._focusTrapFactory.create(this._elementRef.nativeElement),this._document&&(this._elementFocusedBeforeDialogWasOpened=(0,M.ht)())}_handleBackdropClicks(){this._overlayRef.backdropClick().subscribe(()=>{this._config.disableClose&&this._recaptureFocus()})}}return F.\u0275fac=function(b){return new(b||F)(K.Y36(K.SBq),K.Y36(s.qV),K.Y36(X.K0,8),K.Y36(Ve),K.Y36(s.ic),K.Y36(K.R0b),K.Y36(v.Iu),K.Y36(s.tE))},F.\u0275cmp=K.Xpm({type:F,selectors:[["cdk-dialog-container"]],viewQuery:function(b,T){if(1&b&&K.Gf(G.Pl,7),2&b){let P;K.iGM(P=K.CRH())&&(T._portalOutlet=P.first)}},hostAttrs:["tabindex","-1",1,"cdk-dialog-container"],hostVars:6,hostBindings:function(b,T){2&b&&K.uIk("id",T._config.id||null)("role",T._config.role)("aria-modal",T._config.ariaModal)("aria-labelledby",T._config.ariaLabel?null:T._ariaLabelledBy)("aria-label",T._config.ariaLabel)("aria-describedby",T._config.ariaDescribedBy||null)},features:[K.qOj],decls:1,vars:0,consts:[["cdkPortalOutlet",""]],template:function(b,T){1&b&&K.YNc(0,Ge,0,0,"ng-template",0)},dependencies:[G.Pl],styles:[".cdk-dialog-container{display:block;width:100%;height:100%;min-height:inherit;max-height:inherit}"],encapsulation:2}),F})();
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */class Ne{constructor(j,b){this.overlayRef=j,this.config=b,this.closed=new q.x,this.disableClose=b.disableClose,this.backdropClick=j.backdropClick(),this.keydownEvents=j.keydownEvents(),this.outsidePointerEvents=j.outsidePointerEvents(),this.id=b.id,this.keydownEvents.subscribe(T=>{T.keyCode===ue.hY&&!this.disableClose&&!(0,ue.Vb)(T)&&(T.preventDefault(),this.close(void 0,{focusOrigin:"keyboard"}))}),this.backdropClick.subscribe(()=>{this.disableClose||this.close(void 0,{focusOrigin:"mouse"})})}close(j,b){if(this.containerInstance){const T=this.closed;this.containerInstance._closeInteractionType=b?.focusOrigin||"program",this.overlayRef.dispose(),T.next(j),T.complete(),this.componentInstance=this.containerInstance=null}}updatePosition(){return this.overlayRef.updatePosition(),this}updateSize(j="",b=""){return this.overlayRef.updateSize({width:j,height:b}),this}addPanelClass(j){return this.overlayRef.addPanelClass(j),this}removePanelClass(j){return this.overlayRef.removePanelClass(j),this}}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */const qe=new K.OlP("DialogScrollStrategy"),ht=new K.OlP("DialogData"),mt=new K.OlP("DefaultDialogConfig"),Q={provide:qe,deps:[v.aV],useFactory:function de(F){return()=>F.scrollStrategies.block()}};
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
let ee=0,ae=(()=>{class F{constructor(b,T,P,x,$,ve){this._overlay=b,this._injector=T,this._defaultOptions=P,this._parentDialog=x,this._overlayContainer=$,this._openDialogsAtThisLevel=[],this._afterAllClosedAtThisLevel=new q.x,this._afterOpenedAtThisLevel=new q.x,this._ariaHiddenElements=new Map,this.afterAllClosed=(0,Me.P)(()=>this.openDialogs.length?this._getAfterAllClosed():this._getAfterAllClosed().pipe((0,te.O)(void 0))),this._scrollStrategy=ve}get openDialogs(){return this._parentDialog?this._parentDialog.openDialogs:this._openDialogsAtThisLevel}get afterOpened(){return this._parentDialog?this._parentDialog.afterOpened:this._afterOpenedAtThisLevel}open(b,T){(T={...this._defaultOptions||new Ve,...T}).id=T.id||"cdk-dialog-"+ee++,T.id&&this.getDialogById(T.id);const x=this._getOverlayConfig(T),$=this._overlay.create(x),ve=new Ne($,T),se=this._attachContainer($,ve,T);return ve.containerInstance=se,this._attachDialogContent(b,ve,se,T),this.openDialogs.length||this._hideNonDialogContentFromAssistiveTechnology(),this.openDialogs.push(ve),ve.closed.subscribe(()=>this._removeOpenDialog(ve,!0)),this.afterOpened.next(ve),ve}closeAll(){Ee(this.openDialogs,b=>b.close())}getDialogById(b){return this.openDialogs.find(T=>T.id===b)}ngOnDestroy(){Ee(this._openDialogsAtThisLevel,b=>{!1===b.config.closeOnDestroy&&this._removeOpenDialog(b,!1)}),Ee(this._openDialogsAtThisLevel,b=>b.close()),this._afterAllClosedAtThisLevel.complete(),this._afterOpenedAtThisLevel.complete(),this._openDialogsAtThisLevel=[]}_getOverlayConfig(b){const T=new v.X_({positionStrategy:b.positionStrategy||this._overlay.position().global().centerHorizontally().centerVertically(),scrollStrategy:b.scrollStrategy||this._scrollStrategy(),panelClass:b.panelClass,hasBackdrop:b.hasBackdrop,direction:b.direction,minWidth:b.minWidth,minHeight:b.minHeight,maxWidth:b.maxWidth,maxHeight:b.maxHeight,width:b.width,height:b.height,disposeOnNavigation:b.closeOnNavigation});return b.backdropClass&&(T.backdropClass=b.backdropClass),T}_attachContainer(b,T,P){const x=P.injector??P.viewContainerRef?.injector,$=[{provide:Ve,useValue:P},{provide:Ne,useValue:T},{provide:v.Iu,useValue:b}];let ve;P.container?"function"==typeof P.container?ve=P.container:(ve=P.container.type,$.push(...P.container.providers(P))):ve=Ke;const se=new G.C5(ve,P.viewContainerRef,K.zs3.create({parent:x||this._injector,providers:$}),P.componentFactoryResolver);return b.attach(se).instance}_attachDialogContent(b,T,P,x){const $=this._createInjector(x,T,P);if(b instanceof K.Rgc){let ve={$implicit:x.data,dialogRef:T};x.templateContext&&(ve={...ve,..."function"==typeof x.templateContext?x.templateContext():x.templateContext}),P.attachTemplatePortal(new G.UE(b,null,ve,$))}else{const ve=P.attachComponentPortal(new G.C5(b,x.viewContainerRef,$,x.componentFactoryResolver));T.componentInstance=ve.instance}}_createInjector(b,T,P){const x=b&&b.viewContainerRef&&b.viewContainerRef.injector,$=[{provide:ht,useValue:b.data},{provide:Ne,useValue:T}];return b.providers&&("function"==typeof b.providers?$.push(...b.providers(T,b,P)):$.push(...b.providers)),b.direction&&(!x||!x.get(me.Is,null,K.XFs.Optional))&&$.push({provide:me.Is,useValue:{value:b.direction,change:(0,ce.of)()}}),K.zs3.create({parent:x||this._injector,providers:$})}_removeOpenDialog(b,T){const P=this.openDialogs.indexOf(b);P>-1&&(this.openDialogs.splice(P,1),this.openDialogs.length||(this._ariaHiddenElements.forEach((x,$)=>{x?$.setAttribute("aria-hidden",x):$.removeAttribute("aria-hidden")}),this._ariaHiddenElements.clear(),T&&this._getAfterAllClosed().next()))}_hideNonDialogContentFromAssistiveTechnology(){const b=this._overlayContainer.getContainerElement();if(b.parentElement){const T=b.parentElement.children;for(let P=T.length-1;P>-1;P--){const x=T[P];x!==b&&"SCRIPT"!==x.nodeName&&"STYLE"!==x.nodeName&&!x.hasAttribute("aria-live")&&(this._ariaHiddenElements.set(x,x.getAttribute("aria-hidden")),x.setAttribute("aria-hidden","true"))}}}_getAfterAllClosed(){const b=this._parentDialog;return b?b._getAfterAllClosed():this._afterAllClosedAtThisLevel}}return F.\u0275fac=function(b){return new(b||F)(K.LFG(v.aV),K.LFG(K.zs3),K.LFG(mt,8),K.LFG(F,12),K.LFG(v.Xj),K.LFG(qe))},F.\u0275prov=K.Yz7({token:F,factory:F.\u0275fac}),F})();function Ee(F,j){let b=F.length;for(;b--;)j(F[b])}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */let Be=(()=>{class F{}return F.\u0275fac=function(b){return new(b||F)},F.\u0275mod=K.oAB({type:F}),F.\u0275inj=K.cJS({providers:[ae,Q],imports:[v.U8,G.eL,s.rt,G.eL]}),F})();
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */var ot=y(3238),Se=y(6451),fe=y(9300),Fe=y(5698),le=y(7340);
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */function Le(F,j){}const Ye={params:{enterAnimationDuration:"150ms",exitAnimationDuration:"75ms"}},xt={dialogContainer:(0,le.X$)("dialogContainer",[(0,le.SB)("void, exit",(0,le.oB)({opacity:0,transform:"scale(0.7)"})),(0,le.SB)("enter",(0,le.oB)({transform:"none"})),(0,le.eR)("* => enter",(0,le.ru)([(0,le.jt)("{{enterAnimationDuration}} cubic-bezier(0, 0, 0.2, 1)",(0,le.oB)({transform:"none",opacity:1})),(0,le.IO)("@*",(0,le.pV)(),{optional:!0})]),Ye),(0,le.eR)("* => void, * => exit",(0,le.ru)([(0,le.jt)("{{exitAnimationDuration}} cubic-bezier(0.4, 0.0, 0.2, 1)",(0,le.oB)({opacity:0})),(0,le.IO)("@*",(0,le.pV)(),{optional:!0})]),Ye)])};
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */class Ht{constructor(){this.role="dialog",this.panelClass="",this.hasBackdrop=!0,this.backdropClass="",this.disableClose=!1,this.width="",this.height="",this.maxWidth="80vw",this.data=null,this.ariaDescribedBy=null,this.ariaLabelledBy=null,this.ariaLabel=null,this.autoFocus="first-tabbable",this.restoreFocus=!0,this.delayFocusTrap=!0,this.closeOnNavigation=!0,this.enterAnimationDuration=Ye.params.enterAnimationDuration,this.exitAnimationDuration=Ye.params.exitAnimationDuration}}let jt=(()=>{class F extends Ke{constructor(b,T,P,x,$,ve,se,Xe){super(b,T,P,x,$,ve,se,Xe),this._animationStateChanged=new K.vpe}_captureInitialFocus(){this._config.delayFocusTrap||this._trapFocus()}_openAnimationDone(b){this._config.delayFocusTrap&&this._trapFocus(),this._animationStateChanged.next({state:"opened",totalTime:b})}}return F.\u0275fac=function(b){return new(b||F)(K.Y36(K.SBq),K.Y36(s.qV),K.Y36(X.K0,8),K.Y36(Ht),K.Y36(s.ic),K.Y36(K.R0b),K.Y36(v.Iu),K.Y36(s.tE))},F.\u0275cmp=K.Xpm({type:F,selectors:[["ng-component"]],features:[K.qOj],decls:0,vars:0,template:function(b,T){},encapsulation:2}),F})(),ft=(()=>{class F extends jt{constructor(b,T,P,x,$,ve,se,Xe,Rt){super(b,T,P,x,$,ve,se,Rt),this._changeDetectorRef=Xe,this._state="enter"}_onAnimationDone({toState:b,totalTime:T}){"enter"===b?this._openAnimationDone(T):"exit"===b&&this._animationStateChanged.next({state:"closed",totalTime:T})}_onAnimationStart({toState:b,totalTime:T}){"enter"===b?this._animationStateChanged.next({state:"opening",totalTime:T}):("exit"===b||"void"===b)&&this._animationStateChanged.next({state:"closing",totalTime:T})}_startExitAnimation(){this._state="exit",this._changeDetectorRef.markForCheck()}_getAnimationState(){return{value:this._state,params:{enterAnimationDuration:this._config.enterAnimationDuration||Ye.params.enterAnimationDuration,exitAnimationDuration:this._config.exitAnimationDuration||Ye.params.exitAnimationDuration}}}}return F.\u0275fac=function(b){return new(b||F)(K.Y36(K.SBq),K.Y36(s.qV),K.Y36(X.K0,8),K.Y36(Ht),K.Y36(s.ic),K.Y36(K.R0b),K.Y36(v.Iu),K.Y36(K.sBO),K.Y36(s.tE))},F.\u0275cmp=K.Xpm({type:F,selectors:[["mat-dialog-container"]],hostAttrs:["tabindex","-1",1,"mat-dialog-container"],hostVars:7,hostBindings:function(b,T){1&b&&K.WFA("@dialogContainer.start",function(x){return T._onAnimationStart(x)})("@dialogContainer.done",function(x){return T._onAnimationDone(x)}),2&b&&(K.Ikx("id",T._config.id),K.uIk("aria-modal",T._config.ariaModal)("role",T._config.role)("aria-labelledby",T._config.ariaLabel?null:T._ariaLabelledBy)("aria-label",T._config.ariaLabel)("aria-describedby",T._config.ariaDescribedBy||null),K.d8E("@dialogContainer",T._getAnimationState()))},features:[K.qOj],decls:1,vars:0,consts:[["cdkPortalOutlet",""]],template:function(b,T){1&b&&K.YNc(0,Le,0,0,"ng-template",0)},dependencies:[G.Pl],styles:[".mat-dialog-container{display:block;padding:24px;border-radius:4px;box-sizing:border-box;overflow:auto;outline:0;width:100%;height:100%;min-height:inherit;max-height:inherit}.cdk-high-contrast-active .mat-dialog-container{outline:solid 1px}.mat-dialog-content{display:block;margin:0 -24px;padding:0 24px;max-height:65vh;overflow:auto;-webkit-overflow-scrolling:touch}.mat-dialog-title{margin:0 0 20px;display:block}.mat-dialog-actions{padding:8px 0;display:flex;flex-wrap:wrap;min-height:52px;align-items:center;box-sizing:content-box;margin-bottom:-24px}.mat-dialog-actions.mat-dialog-actions-align-center,.mat-dialog-actions[align=center]{justify-content:center}.mat-dialog-actions.mat-dialog-actions-align-end,.mat-dialog-actions[align=end]{justify-content:flex-end}.mat-dialog-actions .mat-button-base+.mat-button-base,.mat-dialog-actions .mat-mdc-button-base+.mat-mdc-button-base{margin-left:8px}[dir=rtl] .mat-dialog-actions .mat-button-base+.mat-button-base,[dir=rtl] .mat-dialog-actions .mat-mdc-button-base+.mat-mdc-button-base{margin-left:0;margin-right:8px}"],encapsulation:2,data:{animation:[xt.dialogContainer]}}),F})();
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */class vt{constructor(j,b,T){this._ref=j,this._containerInstance=T,this._afterOpened=new q.x,this._beforeClosed=new q.x,this._state=0,this.disableClose=b.disableClose,this.id=j.id,T._animationStateChanged.pipe((0,fe.h)(P=>"opened"===P.state),(0,Fe.q)(1)).subscribe(()=>{this._afterOpened.next(),this._afterOpened.complete()}),T._animationStateChanged.pipe((0,fe.h)(P=>"closed"===P.state),(0,Fe.q)(1)).subscribe(()=>{clearTimeout(this._closeFallbackTimeout),this._finishDialogClose()}),j.overlayRef.detachments().subscribe(()=>{this._beforeClosed.next(this._result),this._beforeClosed.complete(),this._finishDialogClose()}),(0,Se.T)(this.backdropClick(),this.keydownEvents().pipe((0,fe.h)(P=>P.keyCode===ue.hY&&!this.disableClose&&!(0,ue.Vb)(P)))).subscribe(P=>{this.disableClose||(P.preventDefault(),function Pt(F,j,b){F._closeInteractionType=j,F.close(b)
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */}(this,"keydown"===P.type?"keyboard":"mouse"))})}close(j){this._result=j,this._containerInstance._animationStateChanged.pipe((0,fe.h)(b=>"closing"===b.state),(0,Fe.q)(1)).subscribe(b=>{this._beforeClosed.next(j),this._beforeClosed.complete(),this._ref.overlayRef.detachBackdrop(),this._closeFallbackTimeout=setTimeout(()=>this._finishDialogClose(),b.totalTime+100)}),this._state=1,this._containerInstance._startExitAnimation()}afterOpened(){return this._afterOpened}afterClosed(){return this._ref.closed}beforeClosed(){return this._beforeClosed}backdropClick(){return this._ref.backdropClick}keydownEvents(){return this._ref.keydownEvents}updatePosition(j){let b=this._ref.config.positionStrategy;return j&&(j.left||j.right)?j.left?b.left(j.left):b.right(j.right):b.centerHorizontally(),j&&(j.top||j.bottom)?j.top?b.top(j.top):b.bottom(j.bottom):b.centerVertically(),this._ref.updatePosition(),this}updateSize(j="",b=""){return this._ref.updateSize(j,b),this}addPanelClass(j){return this._ref.addPanelClass(j),this}removePanelClass(j){return this._ref.removePanelClass(j),this}getState(){return this._state}_finishDialogClose(){this._state=2,this._ref.close(this._result,{focusOrigin:this._closeInteractionType}),this.componentInstance=null}}const ze=new K.OlP("MatDialogData"),Ce=new K.OlP("mat-dialog-default-options"),st=new K.OlP("mat-dialog-scroll-strategy"),nt={provide:st,deps:[v.aV],useFactory:function bt(F){return()=>F.scrollStrategies.block()}};let rt=0,je=(()=>{class F{constructor(b,T,P,x,$,ve,se,Xe,Rt,Ut){this._overlay=b,this._defaultOptions=P,this._parentDialog=x,this._dialogRefConstructor=se,this._dialogContainerType=Xe,this._dialogDataToken=Rt,this._openDialogsAtThisLevel=[],this._afterAllClosedAtThisLevel=new q.x,this._afterOpenedAtThisLevel=new q.x,this._idPrefix="mat-dialog-",this.afterAllClosed=(0,Me.P)(()=>this.openDialogs.length?this._getAfterAllClosed():this._getAfterAllClosed().pipe((0,te.O)(void 0))),this._scrollStrategy=ve,this._dialog=T.get(ae)}get openDialogs(){return this._parentDialog?this._parentDialog.openDialogs:this._openDialogsAtThisLevel}get afterOpened(){return this._parentDialog?this._parentDialog.afterOpened:this._afterOpenedAtThisLevel}_getAfterAllClosed(){const b=this._parentDialog;return b?b._getAfterAllClosed():this._afterAllClosedAtThisLevel}open(b,T){let P;(T={...this._defaultOptions||new Ht,...T}).id=T.id||`${this._idPrefix}${rt++}`,T.scrollStrategy=T.scrollStrategy||this._scrollStrategy();const x=this._dialog.open(b,{...T,positionStrategy:this._overlay.position().global().centerHorizontally().centerVertically(),disableClose:!0,closeOnDestroy:!1,container:{type:this._dialogContainerType,providers:()=>[{provide:Ht,useValue:T},{provide:Ve,useValue:T}]},templateContext:()=>({dialogRef:P}),providers:($,ve,se)=>(P=new this._dialogRefConstructor($,T,se),P.updatePosition(T?.position),[{provide:this._dialogContainerType,useValue:se},{provide:this._dialogDataToken,useValue:ve.data},{provide:this._dialogRefConstructor,useValue:P}])});return P.componentInstance=x.componentInstance,this.openDialogs.push(P),this.afterOpened.next(P),P.afterClosed().subscribe(()=>{const $=this.openDialogs.indexOf(P);$>-1&&(this.openDialogs.splice($,1),this.openDialogs.length||this._getAfterAllClosed().next())}),P}closeAll(){this._closeDialogs(this.openDialogs)}getDialogById(b){return this.openDialogs.find(T=>T.id===b)}ngOnDestroy(){this._closeDialogs(this._openDialogsAtThisLevel),this._afterAllClosedAtThisLevel.complete(),this._afterOpenedAtThisLevel.complete()}_closeDialogs(b){let T=b.length;for(;T--;)b[T].close()}}return F.\u0275fac=function(b){K.$Z()},F.\u0275prov=K.Yz7({token:F,factory:F.\u0275fac}),F})(),De=(()=>{class F extends je{constructor(b,T,P,x,$,ve,se,Xe){super(b,T,x,ve,se,$,vt,ft,ze,Xe)}}return F.\u0275fac=function(b){return new(b||F)(K.LFG(v.aV),K.LFG(K.zs3),K.LFG(X.Ye,8),K.LFG(Ce,8),K.LFG(st),K.LFG(F,12),K.LFG(v.Xj),K.LFG(K.QbO,8))},F.\u0275prov=K.Yz7({token:F,factory:F.\u0275fac}),F})(),B=(()=>{class F{}return F.\u0275fac=function(b){return new(b||F)},F.\u0275mod=K.oAB({type:F}),F.\u0275inj=K.cJS({providers:[De,nt],imports:[Be,v.U8,G.eL,ot.BQ,ot.BQ]}),F})();
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */,9549:(St,He,y)=>{y.d(He,{Eo:()=>Ht,G_:()=>Mt,KE:()=>Je,hX:()=>st,lN:()=>B});var s=y(9643),v=y(6895),M=y(4650),G=y(3238),X=y(445),K=y(1281),ue=y(7579),q=y(6451),Me=y(4968),ce=y(8675),me=y(2722),te=y(5698),Ge=y(7340),Ve=y(3353);
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */const xe=["connectionContainer"],Ke=["inputContainer"],Ne=["label"];function qe(F,j){1&F&&(M.ynx(0),M.TgZ(1,"div",14),M._UZ(2,"div",15)(3,"div",16)(4,"div",17),M.qZA(),M.TgZ(5,"div",18),M._UZ(6,"div",15)(7,"div",16)(8,"div",17),M.qZA(),M.BQk())}function ht(F,j){if(1&F){const b=M.EpF();M.TgZ(0,"div",19),M.NdJ("cdkObserveContent",function(){M.CHM(b);const P=M.oxw();return M.KtG(P.updateOutlineGap())}),M.Hsn(1,1),M.qZA()}if(2&F){const b=M.oxw();M.Q6J("cdkObserveContentDisabled","outline"!=b.appearance)}}function mt(F,j){if(1&F&&(M.ynx(0),M.Hsn(1,2),M.TgZ(2,"span"),M._uU(3),M.qZA(),M.BQk()),2&F){const b=M.oxw(2);M.xp6(3),M.Oqu(b._control.placeholder)}}function de(F,j){1&F&&M.Hsn(0,3,["*ngSwitchCase","true"])}function Q(F,j){1&F&&(M.TgZ(0,"span",23),M._uU(1," *"),M.qZA())}function ee(F,j){if(1&F){const b=M.EpF();M.TgZ(0,"label",20,21),M.NdJ("cdkObserveContent",function(){M.CHM(b);const P=M.oxw();return M.KtG(P.updateOutlineGap())}),M.YNc(2,mt,4,1,"ng-container",12),M.YNc(3,de,1,0,"ng-content",12),M.YNc(4,Q,2,0,"span",22),M.qZA()}if(2&F){const b=M.oxw();M.ekj("mat-empty",b._control.empty&&!b._shouldAlwaysFloat())("mat-form-field-empty",b._control.empty&&!b._shouldAlwaysFloat())("mat-accent","accent"==b.color)("mat-warn","warn"==b.color),M.Q6J("cdkObserveContentDisabled","outline"!=b.appearance)("id",b._labelId)("ngSwitch",b._hasLabel()),M.uIk("for",b._control.id)("aria-owns",b._control.id),M.xp6(2),M.Q6J("ngSwitchCase",!1),M.xp6(1),M.Q6J("ngSwitchCase",!0),M.xp6(1),M.Q6J("ngIf",!b.hideRequiredMarker&&b._control.required&&!b._control.disabled)}}function ae(F,j){1&F&&(M.TgZ(0,"div",24),M.Hsn(1,4),M.qZA())}function Ee(F,j){if(1&F&&(M.TgZ(0,"div",25),M._UZ(1,"span",26),M.qZA()),2&F){const b=M.oxw();M.xp6(1),M.ekj("mat-accent","accent"==b.color)("mat-warn","warn"==b.color)}}function Be(F,j){if(1&F&&(M.TgZ(0,"div"),M.Hsn(1,5),M.qZA()),2&F){const b=M.oxw();M.Q6J("@transitionMessages",b._subscriptAnimationState)}}function ot(F,j){if(1&F&&(M.TgZ(0,"div",30),M._uU(1),M.qZA()),2&F){const b=M.oxw(2);M.Q6J("id",b._hintLabelId),M.xp6(1),M.Oqu(b.hintLabel)}}function Se(F,j){if(1&F&&(M.TgZ(0,"div",27),M.YNc(1,ot,2,2,"div",28),M.Hsn(2,6),M._UZ(3,"div",29),M.Hsn(4,7),M.qZA()),2&F){const b=M.oxw();M.Q6J("@transitionMessages",b._subscriptAnimationState),M.xp6(1),M.Q6J("ngIf",b.hintLabel)}}const fe=["*",[["","matPrefix",""]],[["mat-placeholder"]],[["mat-label"]],[["","matSuffix",""]],[["mat-error"]],[["mat-hint",3,"align","end"]],[["mat-hint","align","end"]]],Fe=["*","[matPrefix]","mat-placeholder","mat-label","[matSuffix]","mat-error","mat-hint:not([align='end'])","mat-hint[align='end']"],Le=new M.OlP("MatError"),xt={transitionMessages:(0,Ge.X$)("transitionMessages",[(0,Ge.SB)("enter",(0,Ge.oB)({opacity:1,transform:"translateY(0%)"})),(0,Ge.eR)("void => enter",[(0,Ge.oB)({opacity:0,transform:"translateY(-5px)"}),(0,Ge.jt)("300ms cubic-bezier(0.55, 0, 0.55, 0.2)")])])};let Ht=(()=>{class F{}return F.\u0275fac=function(b){return new(b||F)},F.\u0275dir=M.lG2({type:F}),F})();
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */const ze=new M.OlP("MatHint");let st=(()=>{class F{}return F.\u0275fac=function(b){return new(b||F)},F.\u0275dir=M.lG2({type:F,selectors:[["mat-label"]]}),F})(),at=(()=>{class F{}return F.\u0275fac=function(b){return new(b||F)},F.\u0275dir=M.lG2({type:F,selectors:[["mat-placeholder"]]}),F})();
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
const bt=new M.OlP("MatPrefix"),rt=new M.OlP("MatSuffix");let De=0;
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */const Gt=(0,G.pj)(class{constructor(F){this._elementRef=F}},"primary"),Yt=new M.OlP("MAT_FORM_FIELD_DEFAULT_OPTIONS"),Mt=new M.OlP("MatFormField");let Je=(()=>{class F extends Gt{constructor(b,T,P,x,$,ve,se){super(b),this._changeDetectorRef=T,this._dir=P,this._defaults=x,this._platform=$,this._ngZone=ve,this._outlineGapCalculationNeededImmediately=!1,this._outlineGapCalculationNeededOnStable=!1,this._destroyed=new ue.x,this._hideRequiredMarker=!1,this._showAlwaysAnimate=!1,this._subscriptAnimationState="",this._hintLabel="",this._hintLabelId="mat-hint-"+De++,this._labelId="mat-form-field-label-"+De++,this.floatLabel=this._getDefaultFloatLabelState(),this._animationsEnabled="NoopAnimations"!==se,this.appearance=x?.appearance||"legacy",x&&(this._hideRequiredMarker=Boolean(x.hideRequiredMarker),x.color&&(this.color=this.defaultColor=x.color))}get appearance(){return this._appearance}set appearance(b){const T=this._appearance;this._appearance=b||this._defaults?.appearance||"legacy","outline"===this._appearance&&T!==b&&(this._outlineGapCalculationNeededOnStable=!0)}get hideRequiredMarker(){return this._hideRequiredMarker}set hideRequiredMarker(b){this._hideRequiredMarker=(0,K.Ig)(b)}_shouldAlwaysFloat(){return"always"===this.floatLabel&&!this._showAlwaysAnimate}_canLabelFloat(){return"never"!==this.floatLabel}get hintLabel(){return this._hintLabel}set hintLabel(b){this._hintLabel=b,this._processHints()}get floatLabel(){return"legacy"!==this.appearance&&"never"===this._floatLabel?"auto":this._floatLabel}set floatLabel(b){b!==this._floatLabel&&(this._floatLabel=b||this._getDefaultFloatLabelState(),this._changeDetectorRef.markForCheck())}get _control(){return this._explicitFormFieldControl||this._controlNonStatic||this._controlStatic}set _control(b){this._explicitFormFieldControl=b}getLabelId(){return this._hasFloatingLabel()?this._labelId:null}getConnectedOverlayOrigin(){return this._connectionContainerRef||this._elementRef}ngAfterContentInit(){this._validateControlChild();const b=this._control;b.controlType&&this._elementRef.nativeElement.classList.add(`mat-form-field-type-${b.controlType}`),b.stateChanges.pipe((0,ce.O)(null)).subscribe(()=>{this._validatePlaceholders(),this._syncDescribedByIds(),this._changeDetectorRef.markForCheck()}),b.ngControl&&b.ngControl.valueChanges&&b.ngControl.valueChanges.pipe((0,me.R)(this._destroyed)).subscribe(()=>this._changeDetectorRef.markForCheck()),this._ngZone.runOutsideAngular(()=>{this._ngZone.onStable.pipe((0,me.R)(this._destroyed)).subscribe(()=>{this._outlineGapCalculationNeededOnStable&&this.updateOutlineGap()})}),(0,q.T)(this._prefixChildren.changes,this._suffixChildren.changes).subscribe(()=>{this._outlineGapCalculationNeededOnStable=!0,this._changeDetectorRef.markForCheck()}),this._hintChildren.changes.pipe((0,ce.O)(null)).subscribe(()=>{this._processHints(),this._changeDetectorRef.markForCheck()}),this._errorChildren.changes.pipe((0,ce.O)(null)).subscribe(()=>{this._syncDescribedByIds(),this._changeDetectorRef.markForCheck()}),this._dir&&this._dir.change.pipe((0,me.R)(this._destroyed)).subscribe(()=>{"function"==typeof requestAnimationFrame?this._ngZone.runOutsideAngular(()=>{requestAnimationFrame(()=>this.updateOutlineGap())}):this.updateOutlineGap()})}ngAfterContentChecked(){this._validateControlChild(),this._outlineGapCalculationNeededImmediately&&this.updateOutlineGap()}ngAfterViewInit(){this._subscriptAnimationState="enter",this._changeDetectorRef.detectChanges()}ngOnDestroy(){this._destroyed.next(),this._destroyed.complete()}_shouldForward(b){const T=this._control?this._control.ngControl:null;return T&&T[b]}_hasPlaceholder(){return!!(this._control&&this._control.placeholder||this._placeholderChild)}_hasLabel(){return!(!this._labelChildNonStatic&&!this._labelChildStatic)}_shouldLabelFloat(){return this._canLabelFloat()&&(this._control&&this._control.shouldLabelFloat||this._shouldAlwaysFloat())}_hideControlPlaceholder(){return"legacy"===this.appearance&&!this._hasLabel()||this._hasLabel()&&!this._shouldLabelFloat()}_hasFloatingLabel(){return this._hasLabel()||"legacy"===this.appearance&&this._hasPlaceholder()}_getDisplayedMessages(){return this._errorChildren&&this._errorChildren.length>0&&this._control.errorState?"error":"hint"}_animateAndLockLabel(){this._hasFloatingLabel()&&this._canLabelFloat()&&(this._animationsEnabled&&this._label&&(this._showAlwaysAnimate=!0,(0,Me.R)(this._label.nativeElement,"transitionend").pipe((0,te.q)(1)).subscribe(()=>{this._showAlwaysAnimate=!1})),this.floatLabel="always",this._changeDetectorRef.markForCheck())}_validatePlaceholders(){}_processHints(){this._validateHints(),this._syncDescribedByIds()}_validateHints(){}_getDefaultFloatLabelState(){return this._defaults&&this._defaults.floatLabel||"auto"}_syncDescribedByIds(){if(this._control){let b=[];if(this._control.userAriaDescribedBy&&"string"==typeof this._control.userAriaDescribedBy&&b.push(...this._control.userAriaDescribedBy.split(" ")),"hint"===this._getDisplayedMessages()){const T=this._hintChildren?this._hintChildren.find(x=>"start"===x.align):null,P=this._hintChildren?this._hintChildren.find(x=>"end"===x.align):null;T?b.push(T.id):this._hintLabel&&b.push(this._hintLabelId),P&&b.push(P.id)}else this._errorChildren&&b.push(...this._errorChildren.map(T=>T.id));this._control.setDescribedByIds(b)}}_validateControlChild(){}updateOutlineGap(){const b=this._label?this._label.nativeElement:null,T=this._connectionContainerRef.nativeElement,P=".mat-form-field-outline-start",x=".mat-form-field-outline-gap";if("outline"!==this.appearance||!this._platform.isBrowser)return;if(!b||!b.children.length||!b.textContent.trim()){const Rt=T.querySelectorAll(`${P}, ${x}`);for(let Ut=0;Ut<Rt.length;Ut++)Rt[Ut].style.width="0";return}if(!this._isAttachedToDOM())return void(this._outlineGapCalculationNeededImmediately=!0);let $=0,ve=0;const se=T.querySelectorAll(P),Xe=T.querySelectorAll(x);if(this._label&&this._label.nativeElement.children.length){const Rt=T.getBoundingClientRect();if(0===Rt.width&&0===Rt.height)return this._outlineGapCalculationNeededOnStable=!0,void(this._outlineGapCalculationNeededImmediately=!1);const Ut=this._getStartEnd(Rt),yt=b.children,qt=this._getStartEnd(yt[0].getBoundingClientRect());let gn=0;for(let Qe=0;Qe<yt.length;Qe++)gn+=yt[Qe].offsetWidth;$=Math.abs(qt-Ut)-5,ve=gn>0?.75*gn+10:0}for(let Rt=0;Rt<se.length;Rt++)se[Rt].style.width=`${$}px`;for(let Rt=0;Rt<Xe.length;Rt++)Xe[Rt].style.width=`${ve}px`;this._outlineGapCalculationNeededOnStable=this._outlineGapCalculationNeededImmediately=!1}_getStartEnd(b){return this._dir&&"rtl"===this._dir.value?b.right:b.left}_isAttachedToDOM(){const b=this._elementRef.nativeElement;if(b.getRootNode){const T=b.getRootNode();return T&&T!==b}return document.documentElement.contains(b)}}return F.\u0275fac=function(b){return new(b||F)(M.Y36(M.SBq),M.Y36(M.sBO),M.Y36(X.Is,8),M.Y36(Yt,8),M.Y36(Ve.t4),M.Y36(M.R0b),M.Y36(M.QbO,8))},F.\u0275cmp=M.Xpm({type:F,selectors:[["mat-form-field"]],contentQueries:function(b,T,P){if(1&b&&(M.Suo(P,Ht,5),M.Suo(P,Ht,7),M.Suo(P,st,5),M.Suo(P,st,7),M.Suo(P,at,5),M.Suo(P,Le,5),M.Suo(P,ze,5),M.Suo(P,bt,5),M.Suo(P,rt,5)),2&b){let x;M.iGM(x=M.CRH())&&(T._controlNonStatic=x.first),M.iGM(x=M.CRH())&&(T._controlStatic=x.first),M.iGM(x=M.CRH())&&(T._labelChildNonStatic=x.first),M.iGM(x=M.CRH())&&(T._labelChildStatic=x.first),M.iGM(x=M.CRH())&&(T._placeholderChild=x.first),M.iGM(x=M.CRH())&&(T._errorChildren=x),M.iGM(x=M.CRH())&&(T._hintChildren=x),M.iGM(x=M.CRH())&&(T._prefixChildren=x),M.iGM(x=M.CRH())&&(T._suffixChildren=x)}},viewQuery:function(b,T){if(1&b&&(M.Gf(xe,7),M.Gf(Ke,5),M.Gf(Ne,5)),2&b){let P;M.iGM(P=M.CRH())&&(T._connectionContainerRef=P.first),M.iGM(P=M.CRH())&&(T._inputContainerRef=P.first),M.iGM(P=M.CRH())&&(T._label=P.first)}},hostAttrs:[1,"mat-form-field"],hostVars:40,hostBindings:function(b,T){2&b&&M.ekj("mat-form-field-appearance-standard","standard"==T.appearance)("mat-form-field-appearance-fill","fill"==T.appearance)("mat-form-field-appearance-outline","outline"==T.appearance)("mat-form-field-appearance-legacy","legacy"==T.appearance)("mat-form-field-invalid",T._control.errorState)("mat-form-field-can-float",T._canLabelFloat())("mat-form-field-should-float",T._shouldLabelFloat())("mat-form-field-has-label",T._hasFloatingLabel())("mat-form-field-hide-placeholder",T._hideControlPlaceholder())("mat-form-field-disabled",T._control.disabled)("mat-form-field-autofilled",T._control.autofilled)("mat-focused",T._control.focused)("ng-untouched",T._shouldForward("untouched"))("ng-touched",T._shouldForward("touched"))("ng-pristine",T._shouldForward("pristine"))("ng-dirty",T._shouldForward("dirty"))("ng-valid",T._shouldForward("valid"))("ng-invalid",T._shouldForward("invalid"))("ng-pending",T._shouldForward("pending"))("_mat-animation-noopable",!T._animationsEnabled)},inputs:{color:"color",appearance:"appearance",hideRequiredMarker:"hideRequiredMarker",hintLabel:"hintLabel",floatLabel:"floatLabel"},exportAs:["matFormField"],features:[M._Bn([{provide:Mt,useExisting:F}]),M.qOj],ngContentSelectors:Fe,decls:15,vars:8,consts:[[1,"mat-form-field-wrapper"],[1,"mat-form-field-flex",3,"click"],["connectionContainer",""],[4,"ngIf"],["class","mat-form-field-prefix",3,"cdkObserveContentDisabled","cdkObserveContent",4,"ngIf"],[1,"mat-form-field-infix"],["inputContainer",""],[1,"mat-form-field-label-wrapper"],["class","mat-form-field-label",3,"cdkObserveContentDisabled","id","mat-empty","mat-form-field-empty","mat-accent","mat-warn","ngSwitch","cdkObserveContent",4,"ngIf"],["class","mat-form-field-suffix",4,"ngIf"],["class","mat-form-field-underline",4,"ngIf"],[1,"mat-form-field-subscript-wrapper",3,"ngSwitch"],[4,"ngSwitchCase"],["class","mat-form-field-hint-wrapper",4,"ngSwitchCase"],[1,"mat-form-field-outline"],[1,"mat-form-field-outline-start"],[1,"mat-form-field-outline-gap"],[1,"mat-form-field-outline-end"],[1,"mat-form-field-outline","mat-form-field-outline-thick"],[1,"mat-form-field-prefix",3,"cdkObserveContentDisabled","cdkObserveContent"],[1,"mat-form-field-label",3,"cdkObserveContentDisabled","id","ngSwitch","cdkObserveContent"],["label",""],["class","mat-placeholder-required mat-form-field-required-marker","aria-hidden","true",4,"ngIf"],["aria-hidden","true",1,"mat-placeholder-required","mat-form-field-required-marker"],[1,"mat-form-field-suffix"],[1,"mat-form-field-underline"],[1,"mat-form-field-ripple"],[1,"mat-form-field-hint-wrapper"],["class","mat-hint",3,"id",4,"ngIf"],[1,"mat-form-field-hint-spacer"],[1,"mat-hint",3,"id"]],template:function(b,T){1&b&&(M.F$t(fe),M.TgZ(0,"div",0)(1,"div",1,2),M.NdJ("click",function(x){return T._control.onContainerClick&&T._control.onContainerClick(x)}),M.YNc(3,qe,9,0,"ng-container",3),M.YNc(4,ht,2,1,"div",4),M.TgZ(5,"div",5,6),M.Hsn(7),M.TgZ(8,"span",7),M.YNc(9,ee,5,16,"label",8),M.qZA()(),M.YNc(10,ae,2,0,"div",9),M.qZA(),M.YNc(11,Ee,2,4,"div",10),M.TgZ(12,"div",11),M.YNc(13,Be,2,1,"div",12),M.YNc(14,Se,5,2,"div",13),M.qZA()()),2&b&&(M.xp6(3),M.Q6J("ngIf","outline"==T.appearance),M.xp6(1),M.Q6J("ngIf",T._prefixChildren.length),M.xp6(5),M.Q6J("ngIf",T._hasFloatingLabel()),M.xp6(1),M.Q6J("ngIf",T._suffixChildren.length),M.xp6(1),M.Q6J("ngIf","outline"!=T.appearance),M.xp6(1),M.Q6J("ngSwitch",T._getDisplayedMessages()),M.xp6(1),M.Q6J("ngSwitchCase","error"),M.xp6(1),M.Q6J("ngSwitchCase","hint"))},dependencies:[v.O5,v.RF,v.n9,s.wD],styles:[".mat-form-field{display:inline-block;position:relative;text-align:left}[dir=rtl] .mat-form-field{text-align:right}.mat-form-field-wrapper{position:relative}.mat-form-field-flex{display:inline-flex;align-items:baseline;box-sizing:border-box;width:100%}.mat-form-field-prefix,.mat-form-field-suffix{white-space:nowrap;flex:none;position:relative}.mat-form-field-infix{display:block;position:relative;flex:auto;min-width:0;width:180px}.cdk-high-contrast-active .mat-form-field-infix{border-image:linear-gradient(transparent, transparent)}.mat-form-field-label-wrapper{position:absolute;left:0;box-sizing:content-box;width:100%;height:100%;overflow:hidden;pointer-events:none}[dir=rtl] .mat-form-field-label-wrapper{left:auto;right:0}.mat-form-field-label{position:absolute;left:0;font:inherit;pointer-events:none;width:100%;white-space:nowrap;text-overflow:ellipsis;overflow:hidden;transform-origin:0 0;transition:transform 400ms cubic-bezier(0.25, 0.8, 0.25, 1),color 400ms cubic-bezier(0.25, 0.8, 0.25, 1),width 400ms cubic-bezier(0.25, 0.8, 0.25, 1);display:none}[dir=rtl] .mat-form-field-label{transform-origin:100% 0;left:auto;right:0}.cdk-high-contrast-active .mat-form-field-disabled .mat-form-field-label{color:GrayText}.mat-form-field-empty.mat-form-field-label,.mat-form-field-can-float.mat-form-field-should-float .mat-form-field-label{display:block}.mat-form-field-autofill-control:-webkit-autofill+.mat-form-field-label-wrapper .mat-form-field-label{display:none}.mat-form-field-can-float .mat-form-field-autofill-control:-webkit-autofill+.mat-form-field-label-wrapper .mat-form-field-label{display:block;transition:none}.mat-input-server:focus+.mat-form-field-label-wrapper .mat-form-field-label,.mat-input-server[placeholder]:not(:placeholder-shown)+.mat-form-field-label-wrapper .mat-form-field-label{display:none}.mat-form-field-can-float .mat-input-server:focus+.mat-form-field-label-wrapper .mat-form-field-label,.mat-form-field-can-float .mat-input-server[placeholder]:not(:placeholder-shown)+.mat-form-field-label-wrapper .mat-form-field-label{display:block}.mat-form-field-label:not(.mat-form-field-empty){transition:none}.mat-form-field-underline{position:absolute;width:100%;pointer-events:none;transform:scale3d(1, 1.0001, 1)}.mat-form-field-ripple{position:absolute;left:0;width:100%;transform-origin:50%;transform:scaleX(0.5);opacity:0;transition:background-color 300ms cubic-bezier(0.55, 0, 0.55, 0.2)}.mat-form-field.mat-focused .mat-form-field-ripple,.mat-form-field.mat-form-field-invalid .mat-form-field-ripple{opacity:1;transform:none;transition:transform 300ms cubic-bezier(0.25, 0.8, 0.25, 1),opacity 100ms cubic-bezier(0.25, 0.8, 0.25, 1),background-color 300ms cubic-bezier(0.25, 0.8, 0.25, 1)}.mat-form-field-subscript-wrapper{position:absolute;box-sizing:border-box;width:100%;overflow:hidden}.mat-form-field-subscript-wrapper .mat-icon,.mat-form-field-label-wrapper .mat-icon{width:1em;height:1em;font-size:inherit;vertical-align:baseline}.mat-form-field-hint-wrapper{display:flex}.mat-form-field-hint-spacer{flex:1 0 1em}.mat-error{display:block}.mat-form-field-control-wrapper{position:relative}.mat-form-field-hint-end{order:1}.mat-form-field._mat-animation-noopable .mat-form-field-label,.mat-form-field._mat-animation-noopable .mat-form-field-ripple{transition:none}",'.mat-form-field-appearance-fill .mat-form-field-flex{border-radius:4px 4px 0 0;padding:.75em .75em 0 .75em}.cdk-high-contrast-active .mat-form-field-appearance-fill .mat-form-field-flex{outline:solid 1px}.cdk-high-contrast-active .mat-form-field-appearance-fill.mat-form-field-disabled .mat-form-field-flex{outline-color:GrayText}.cdk-high-contrast-active .mat-form-field-appearance-fill.mat-focused .mat-form-field-flex{outline:dashed 3px}.mat-form-field-appearance-fill .mat-form-field-underline::before{content:"";display:block;position:absolute;bottom:0;height:1px;width:100%}.mat-form-field-appearance-fill .mat-form-field-ripple{bottom:0;height:2px}.cdk-high-contrast-active .mat-form-field-appearance-fill .mat-form-field-ripple{height:0}.mat-form-field-appearance-fill:not(.mat-form-field-disabled) .mat-form-field-flex:hover~.mat-form-field-underline .mat-form-field-ripple{opacity:1;transform:none;transition:opacity 600ms cubic-bezier(0.25, 0.8, 0.25, 1)}.mat-form-field-appearance-fill._mat-animation-noopable:not(.mat-form-field-disabled) .mat-form-field-flex:hover~.mat-form-field-underline .mat-form-field-ripple{transition:none}.mat-form-field-appearance-fill .mat-form-field-subscript-wrapper{padding:0 1em}','.mat-input-element{font:inherit;background:rgba(0,0,0,0);color:currentColor;border:none;outline:none;padding:0;margin:0;width:100%;max-width:100%;vertical-align:bottom;text-align:inherit;box-sizing:content-box}.mat-input-element:-moz-ui-invalid{box-shadow:none}.mat-input-element,.mat-input-element::-webkit-search-cancel-button,.mat-input-element::-webkit-search-decoration,.mat-input-element::-webkit-search-results-button,.mat-input-element::-webkit-search-results-decoration{-webkit-appearance:none}.mat-input-element::-webkit-contacts-auto-fill-button,.mat-input-element::-webkit-caps-lock-indicator,.mat-input-element:not([type=password])::-webkit-credentials-auto-fill-button{visibility:hidden}.mat-input-element[type=date],.mat-input-element[type=datetime],.mat-input-element[type=datetime-local],.mat-input-element[type=month],.mat-input-element[type=week],.mat-input-element[type=time]{line-height:1}.mat-input-element[type=date]::after,.mat-input-element[type=datetime]::after,.mat-input-element[type=datetime-local]::after,.mat-input-element[type=month]::after,.mat-input-element[type=week]::after,.mat-input-element[type=time]::after{content:" ";white-space:pre;width:1px}.mat-input-element::-webkit-inner-spin-button,.mat-input-element::-webkit-calendar-picker-indicator,.mat-input-element::-webkit-clear-button{font-size:.75em}.mat-input-element::placeholder{-webkit-user-select:none;user-select:none;transition:color 400ms 133.3333333333ms cubic-bezier(0.25, 0.8, 0.25, 1)}.mat-input-element::-moz-placeholder{-webkit-user-select:none;user-select:none;transition:color 400ms 133.3333333333ms cubic-bezier(0.25, 0.8, 0.25, 1)}.mat-input-element::-webkit-input-placeholder{-webkit-user-select:none;user-select:none;transition:color 400ms 133.3333333333ms cubic-bezier(0.25, 0.8, 0.25, 1)}.mat-input-element:-ms-input-placeholder{-webkit-user-select:none;user-select:none;transition:color 400ms 133.3333333333ms cubic-bezier(0.25, 0.8, 0.25, 1)}.mat-form-field-hide-placeholder .mat-input-element::placeholder{color:rgba(0,0,0,0) !important;-webkit-text-fill-color:rgba(0,0,0,0);transition:none}.cdk-high-contrast-active .mat-form-field-hide-placeholder .mat-input-element::placeholder{opacity:0}.mat-form-field-hide-placeholder .mat-input-element::-moz-placeholder{color:rgba(0,0,0,0) !important;-webkit-text-fill-color:rgba(0,0,0,0);transition:none}.cdk-high-contrast-active .mat-form-field-hide-placeholder .mat-input-element::-moz-placeholder{opacity:0}.mat-form-field-hide-placeholder .mat-input-element::-webkit-input-placeholder{color:rgba(0,0,0,0) !important;-webkit-text-fill-color:rgba(0,0,0,0);transition:none}.cdk-high-contrast-active .mat-form-field-hide-placeholder .mat-input-element::-webkit-input-placeholder{opacity:0}.mat-form-field-hide-placeholder .mat-input-element:-ms-input-placeholder{color:rgba(0,0,0,0) !important;-webkit-text-fill-color:rgba(0,0,0,0);transition:none}.cdk-high-contrast-active .mat-form-field-hide-placeholder .mat-input-element:-ms-input-placeholder{opacity:0}._mat-animation-noopable .mat-input-element::placeholder{transition:none}._mat-animation-noopable .mat-input-element::-moz-placeholder{transition:none}._mat-animation-noopable .mat-input-element::-webkit-input-placeholder{transition:none}._mat-animation-noopable .mat-input-element:-ms-input-placeholder{transition:none}textarea.mat-input-element{resize:vertical;overflow:auto}textarea.mat-input-element.cdk-textarea-autosize{resize:none}textarea.mat-input-element{padding:2px 0;margin:-2px 0}select.mat-input-element{-moz-appearance:none;-webkit-appearance:none;position:relative;background-color:rgba(0,0,0,0);display:inline-flex;box-sizing:border-box;padding-top:1em;top:-1em;margin-bottom:-1em}select.mat-input-element::-moz-focus-inner{border:0}select.mat-input-element:not(:disabled){cursor:pointer}.mat-form-field-type-mat-native-select .mat-form-field-infix::after{content:"";width:0;height:0;border-left:5px solid rgba(0,0,0,0);border-right:5px solid rgba(0,0,0,0);border-top:5px solid;position:absolute;top:50%;right:0;margin-top:-2.5px;pointer-events:none}[dir=rtl] .mat-form-field-type-mat-native-select .mat-form-field-infix::after{right:auto;left:0}.mat-form-field-type-mat-native-select .mat-input-element{padding-right:15px}[dir=rtl] .mat-form-field-type-mat-native-select .mat-input-element{padding-right:0;padding-left:15px}.mat-form-field-type-mat-native-select .mat-form-field-label-wrapper{max-width:calc(100% - 10px)}.mat-form-field-type-mat-native-select.mat-form-field-appearance-outline .mat-form-field-infix::after{margin-top:-5px}.mat-form-field-type-mat-native-select.mat-form-field-appearance-fill .mat-form-field-infix::after{margin-top:-10px}',".mat-form-field-appearance-legacy .mat-form-field-label{transform:perspective(100px)}.mat-form-field-appearance-legacy .mat-form-field-prefix .mat-icon,.mat-form-field-appearance-legacy .mat-form-field-suffix .mat-icon{width:1em}.mat-form-field-appearance-legacy .mat-form-field-prefix .mat-icon-button,.mat-form-field-appearance-legacy .mat-form-field-suffix .mat-icon-button{font:inherit;vertical-align:baseline}.mat-form-field-appearance-legacy .mat-form-field-prefix .mat-icon-button .mat-icon,.mat-form-field-appearance-legacy .mat-form-field-suffix .mat-icon-button .mat-icon{font-size:inherit}.mat-form-field-appearance-legacy .mat-form-field-underline{height:1px}.cdk-high-contrast-active .mat-form-field-appearance-legacy .mat-form-field-underline{height:0;border-top:solid 1px}.mat-form-field-appearance-legacy .mat-form-field-ripple{top:0;height:2px;overflow:hidden}.cdk-high-contrast-active .mat-form-field-appearance-legacy .mat-form-field-ripple{height:0;border-top:solid 2px}.mat-form-field-appearance-legacy.mat-form-field-disabled .mat-form-field-underline{background-position:0;background-color:rgba(0,0,0,0)}.cdk-high-contrast-active .mat-form-field-appearance-legacy.mat-form-field-disabled .mat-form-field-underline{border-top-style:dotted;border-top-width:2px;border-top-color:GrayText}.mat-form-field-appearance-legacy.mat-form-field-invalid:not(.mat-focused) .mat-form-field-ripple{height:1px}",".mat-form-field-appearance-outline .mat-form-field-wrapper{margin:.25em 0}.mat-form-field-appearance-outline .mat-form-field-flex{padding:0 .75em 0 .75em;margin-top:-0.25em;position:relative}.mat-form-field-appearance-outline .mat-form-field-prefix,.mat-form-field-appearance-outline .mat-form-field-suffix{top:.25em}.mat-form-field-appearance-outline .mat-form-field-outline{display:flex;position:absolute;top:.25em;left:0;right:0;bottom:0;pointer-events:none}.mat-form-field-appearance-outline .mat-form-field-outline-start,.mat-form-field-appearance-outline .mat-form-field-outline-end{border:1px solid currentColor;min-width:5px}.mat-form-field-appearance-outline .mat-form-field-outline-start{border-radius:5px 0 0 5px;border-right-style:none}[dir=rtl] .mat-form-field-appearance-outline .mat-form-field-outline-start{border-right-style:solid;border-left-style:none;border-radius:0 5px 5px 0}.mat-form-field-appearance-outline .mat-form-field-outline-end{border-radius:0 5px 5px 0;border-left-style:none;flex-grow:1}[dir=rtl] .mat-form-field-appearance-outline .mat-form-field-outline-end{border-left-style:solid;border-right-style:none;border-radius:5px 0 0 5px}.mat-form-field-appearance-outline .mat-form-field-outline-gap{border-radius:.000001px;border:1px solid currentColor;border-left-style:none;border-right-style:none}.mat-form-field-appearance-outline.mat-form-field-can-float.mat-form-field-should-float .mat-form-field-outline-gap{border-top-color:rgba(0,0,0,0)}.mat-form-field-appearance-outline .mat-form-field-outline-thick{opacity:0}.mat-form-field-appearance-outline .mat-form-field-outline-thick .mat-form-field-outline-start,.mat-form-field-appearance-outline .mat-form-field-outline-thick .mat-form-field-outline-end,.mat-form-field-appearance-outline .mat-form-field-outline-thick .mat-form-field-outline-gap{border-width:2px}.mat-form-field-appearance-outline.mat-focused .mat-form-field-outline,.mat-form-field-appearance-outline.mat-form-field-invalid .mat-form-field-outline{opacity:0;transition:opacity 100ms cubic-bezier(0.25, 0.8, 0.25, 1)}.mat-form-field-appearance-outline.mat-focused .mat-form-field-outline-thick,.mat-form-field-appearance-outline.mat-form-field-invalid .mat-form-field-outline-thick{opacity:1}.cdk-high-contrast-active .mat-form-field-appearance-outline.mat-focused .mat-form-field-outline-thick{border:3px dashed}.mat-form-field-appearance-outline:not(.mat-form-field-disabled) .mat-form-field-flex:hover .mat-form-field-outline{opacity:0;transition:opacity 600ms cubic-bezier(0.25, 0.8, 0.25, 1)}.mat-form-field-appearance-outline:not(.mat-form-field-disabled) .mat-form-field-flex:hover .mat-form-field-outline-thick{opacity:1}.mat-form-field-appearance-outline .mat-form-field-subscript-wrapper{padding:0 1em}.cdk-high-contrast-active .mat-form-field-appearance-outline.mat-form-field-disabled .mat-form-field-outline{color:GrayText}.mat-form-field-appearance-outline._mat-animation-noopable:not(.mat-form-field-disabled) .mat-form-field-flex:hover~.mat-form-field-outline,.mat-form-field-appearance-outline._mat-animation-noopable .mat-form-field-outline,.mat-form-field-appearance-outline._mat-animation-noopable .mat-form-field-outline-start,.mat-form-field-appearance-outline._mat-animation-noopable .mat-form-field-outline-end,.mat-form-field-appearance-outline._mat-animation-noopable .mat-form-field-outline-gap{transition:none}",".mat-form-field-appearance-standard .mat-form-field-flex{padding-top:.75em}.mat-form-field-appearance-standard .mat-form-field-underline{height:1px}.cdk-high-contrast-active .mat-form-field-appearance-standard .mat-form-field-underline{height:0;border-top:solid 1px}.mat-form-field-appearance-standard .mat-form-field-ripple{bottom:0;height:2px}.cdk-high-contrast-active .mat-form-field-appearance-standard .mat-form-field-ripple{height:0;border-top:solid 2px}.mat-form-field-appearance-standard.mat-form-field-disabled .mat-form-field-underline{background-position:0;background-color:rgba(0,0,0,0)}.cdk-high-contrast-active .mat-form-field-appearance-standard.mat-form-field-disabled .mat-form-field-underline{border-top-style:dotted;border-top-width:2px}.mat-form-field-appearance-standard:not(.mat-form-field-disabled) .mat-form-field-flex:hover~.mat-form-field-underline .mat-form-field-ripple{opacity:1;transform:none;transition:opacity 600ms cubic-bezier(0.25, 0.8, 0.25, 1)}.mat-form-field-appearance-standard._mat-animation-noopable:not(.mat-form-field-disabled) .mat-form-field-flex:hover~.mat-form-field-underline .mat-form-field-ripple{transition:none}"],encapsulation:2,data:{animation:[xt.transitionMessages]},changeDetection:0}),F})(),B=(()=>{class F{}return F.\u0275fac=function(b){return new(b||F)},F.\u0275mod=M.oAB({type:F}),F.\u0275inj=M.cJS({imports:[v.ez,G.BQ,s.Q8,G.BQ]}),F})();
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */,7392:(St,He,y)=>{y.d(He,{Ps:()=>ft});var s=y(4650),v=y(3238);
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */y(6895),y(9646),y(2843),y(4128),y(8505),y(4004),y(262),y(8746),y(3099),y(529),y(1481);let ft=(()=>{class vt{}return vt.\u0275fac=function(ze){return new(ze||vt)},vt.\u0275mod=s.oAB({type:vt}),vt.\u0275inj=s.cJS({imports:[v.BQ,v.BQ]}),vt})();
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */,4144:(St,He,y)=>{y.d(He,{Nt:()=>ht,c:()=>mt});var s=y(1281),v=y(3353),M=y(4650),G=y(515),X=y(7579);
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */const K=(0,v.i$)({passive:!0});let ue=(()=>{class de{constructor(ee,ae){this._platform=ee,this._ngZone=ae,this._monitoredElements=new Map}monitor(ee){if(!this._platform.isBrowser)return G.E;const ae=(0,s.fI)(ee),Ee=this._monitoredElements.get(ae);if(Ee)return Ee.subject;const Be=new X.x,ot="cdk-text-field-autofilled",Se=fe=>{"cdk-text-field-autofill-start"!==fe.animationName||ae.classList.contains(ot)?"cdk-text-field-autofill-end"===fe.animationName&&ae.classList.contains(ot)&&(ae.classList.remove(ot),this._ngZone.run(()=>Be.next({target:fe.target,isAutofilled:!1}))):(ae.classList.add(ot),this._ngZone.run(()=>Be.next({target:fe.target,isAutofilled:!0})))};return this._ngZone.runOutsideAngular(()=>{ae.addEventListener("animationstart",Se,K),ae.classList.add("cdk-text-field-autofill-monitored")}),this._monitoredElements.set(ae,{subject:Be,unlisten:()=>{ae.removeEventListener("animationstart",Se,K)}}),Be}stopMonitoring(ee){const ae=(0,s.fI)(ee),Ee=this._monitoredElements.get(ae);Ee&&(Ee.unlisten(),Ee.subject.complete(),ae.classList.remove("cdk-text-field-autofill-monitored"),ae.classList.remove("cdk-text-field-autofilled"),this._monitoredElements.delete(ae))}ngOnDestroy(){this._monitoredElements.forEach((ee,ae)=>this.stopMonitoring(ae))}}return de.\u0275fac=function(ee){return new(ee||de)(M.LFG(v.t4),M.LFG(M.R0b))},de.\u0275prov=M.Yz7({token:de,factory:de.\u0275fac,providedIn:"root"}),de})(),ce=(()=>{class de{}return de.\u0275fac=function(ee){return new(ee||de)},de.\u0275mod=M.oAB({type:de}),de.\u0275inj=M.cJS({}),de})();
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
var me=y(4006),te=y(3238),Ge=y(9549);
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
const xe=new M.OlP("MAT_INPUT_VALUE_ACCESSOR"),Ke=["button","checkbox","file","hidden","image","radio","range","reset","submit"];
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */let Ne=0;const qe=(0,te.FD)(class{constructor(de,Q,ee,ae){this._defaultErrorStateMatcher=de,this._parentForm=Q,this._parentFormGroup=ee,this.ngControl=ae,this.stateChanges=new X.x}});let ht=(()=>{class de extends qe{constructor(ee,ae,Ee,Be,ot,Se,fe,Fe,le,Le){super(Se,Be,ot,Ee),this._elementRef=ee,this._platform=ae,this._autofillMonitor=Fe,this._formField=Le,this._uid="mat-input-"+Ne++,this.focused=!1,this.stateChanges=new X.x,this.controlType="mat-input",this.autofilled=!1,this._disabled=!1,this._type="text",this._readonly=!1,this._neverEmptyInputTypes=["date","datetime","datetime-local","month","time","week"].filter(Ht=>(0,v.qK)().has(Ht)),this._iOSKeyupListener=Ht=>{const jt=Ht.target;!jt.value&&0===jt.selectionStart&&0===jt.selectionEnd&&(jt.setSelectionRange(1,1),jt.setSelectionRange(0,0))};const Ye=this._elementRef.nativeElement,xt=Ye.nodeName.toLowerCase();this._inputValueAccessor=fe||Ye,this._previousNativeValue=this.value,this.id=this.id,ae.IOS&&le.runOutsideAngular(()=>{ee.nativeElement.addEventListener("keyup",this._iOSKeyupListener)}),this._isServer=!this._platform.isBrowser,this._isNativeSelect="select"===xt,this._isTextarea="textarea"===xt,this._isInFormField=!!Le,this._isNativeSelect&&(this.controlType=Ye.multiple?"mat-native-select-multiple":"mat-native-select")}get disabled(){return this.ngControl&&null!==this.ngControl.disabled?this.ngControl.disabled:this._disabled}set disabled(ee){this._disabled=(0,s.Ig)(ee),this.focused&&(this.focused=!1,this.stateChanges.next())}get id(){return this._id}set id(ee){this._id=ee||this._uid}get required(){return this._required??this.ngControl?.control?.hasValidator(me.kI.required)??!1}set required(ee){this._required=(0,s.Ig)(ee)}get type(){return this._type}set type(ee){this._type=ee||"text",this._validateType(),!this._isTextarea&&(0,v.qK)().has(this._type)&&(this._elementRef.nativeElement.type=this._type)}get value(){return this._inputValueAccessor.value}set value(ee){ee!==this.value&&(this._inputValueAccessor.value=ee,this.stateChanges.next())}get readonly(){return this._readonly}set readonly(ee){this._readonly=(0,s.Ig)(ee)}ngAfterViewInit(){this._platform.isBrowser&&this._autofillMonitor.monitor(this._elementRef.nativeElement).subscribe(ee=>{this.autofilled=ee.isAutofilled,this.stateChanges.next()})}ngOnChanges(){this.stateChanges.next()}ngOnDestroy(){this.stateChanges.complete(),this._platform.isBrowser&&this._autofillMonitor.stopMonitoring(this._elementRef.nativeElement),this._platform.IOS&&this._elementRef.nativeElement.removeEventListener("keyup",this._iOSKeyupListener)}ngDoCheck(){this.ngControl&&this.updateErrorState(),this._dirtyCheckNativeValue(),this._dirtyCheckPlaceholder()}focus(ee){this._elementRef.nativeElement.focus(ee)}_focusChanged(ee){ee!==this.focused&&(this.focused=ee,this.stateChanges.next())}_onInput(){}_dirtyCheckPlaceholder(){const ee=this._formField,ae=ee&&"legacy"===ee.appearance&&!ee._hasLabel?.()?null:this.placeholder;if(ae!==this._previousPlaceholder){const Ee=this._elementRef.nativeElement;this._previousPlaceholder=ae,ae?Ee.setAttribute("placeholder",ae):Ee.removeAttribute("placeholder")}}_dirtyCheckNativeValue(){const ee=this._elementRef.nativeElement.value;this._previousNativeValue!==ee&&(this._previousNativeValue=ee,this.stateChanges.next())}_validateType(){Ke.indexOf(this._type)}_isNeverEmpty(){return this._neverEmptyInputTypes.indexOf(this._type)>-1}_isBadInput(){let ee=this._elementRef.nativeElement.validity;return ee&&ee.badInput}get empty(){return!(this._isNeverEmpty()||this._elementRef.nativeElement.value||this._isBadInput()||this.autofilled)}get shouldLabelFloat(){if(this._isNativeSelect){const ee=this._elementRef.nativeElement,ae=ee.options[0];return this.focused||ee.multiple||!this.empty||!!(ee.selectedIndex>-1&&ae&&ae.label)}return this.focused||!this.empty}setDescribedByIds(ee){ee.length?this._elementRef.nativeElement.setAttribute("aria-describedby",ee.join(" ")):this._elementRef.nativeElement.removeAttribute("aria-describedby")}onContainerClick(){this.focused||this.focus()}_isInlineSelect(){const ee=this._elementRef.nativeElement;return this._isNativeSelect&&(ee.multiple||ee.size>1)}}return de.\u0275fac=function(ee){return new(ee||de)(M.Y36(M.SBq),M.Y36(v.t4),M.Y36(me.a5,10),M.Y36(me.F,8),M.Y36(me.sg,8),M.Y36(te.rD),M.Y36(xe,10),M.Y36(ue),M.Y36(M.R0b),M.Y36(Ge.G_,8))},de.\u0275dir=M.lG2({type:de,selectors:[["input","matInput",""],["textarea","matInput",""],["select","matNativeControl",""],["input","matNativeControl",""],["textarea","matNativeControl",""]],hostAttrs:[1,"mat-input-element","mat-form-field-autofill-control"],hostVars:12,hostBindings:function(ee,ae){1&ee&&M.NdJ("focus",function(){return ae._focusChanged(!0)})("blur",function(){return ae._focusChanged(!1)})("input",function(){return ae._onInput()}),2&ee&&(M.Ikx("disabled",ae.disabled)("required",ae.required),M.uIk("id",ae.id)("data-placeholder",ae.placeholder)("name",ae.name||null)("readonly",ae.readonly&&!ae._isNativeSelect||null)("aria-invalid",ae.empty&&ae.required?null:ae.errorState)("aria-required",ae.required),M.ekj("mat-input-server",ae._isServer)("mat-native-select-inline",ae._isInlineSelect()))},inputs:{disabled:"disabled",id:"id",placeholder:"placeholder",name:"name",required:"required",type:"type",errorStateMatcher:"errorStateMatcher",userAriaDescribedBy:["aria-describedby","userAriaDescribedBy"],value:"value",readonly:"readonly"},exportAs:["matInput"],features:[M._Bn([{provide:Ge.Eo,useExisting:de}]),M.qOj,M.TTD]}),de})(),mt=(()=>{class de{}return de.\u0275fac=function(ee){return new(ee||de)},de.\u0275mod=M.oAB({type:de}),de.\u0275inj=M.cJS({providers:[te.rD],imports:[ce,Ge.lN,te.BQ,ce,Ge.lN]}),de})();
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */,7974:(St,He,y)=>{y.d(He,{TU:()=>nt});var s=y(6895),v=y(4650),M=y(3238),G=y(4859),X=y(4385),K=y(8184),ue=y(7725),q=y(8605);
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */y(3353),y(7340);const mt={provide:new v.OlP("mat-tooltip-scroll-strategy"),deps:[K.aV],useFactory:function ht(rt){return()=>rt.scrollStrategies.reposition({scrollThrottle:20})}};let ot=(()=>{class rt{}return rt.\u0275fac=function(De){return new(De||rt)},rt.\u0275mod=v.oAB({type:rt}),rt.\u0275inj=v.cJS({providers:[mt],imports:[ue.rt,s.ez,K.U8,M.BQ,M.BQ,q.ZD]}),rt})();
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
var fe=y(7579);
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */let jt=(()=>{class rt{constructor(){this.changes=new fe.x,this.itemsPerPageLabel="Items per page:",this.nextPageLabel="Next page",this.previousPageLabel="Previous page",this.firstPageLabel="First page",this.lastPageLabel="Last page",this.getRangeLabel=(De,ct,gt)=>{if(0==gt||0==ct)return`0 of ${gt}`;const Gt=De*ct;return`${Gt+1} \u2013 ${Gt<(gt=Math.max(gt,0))?Math.min(Gt+ct,gt):Gt+ct} of ${gt}`}}}return rt.\u0275fac=function(De){return new(De||rt)},rt.\u0275prov=v.Yz7({token:rt,factory:rt.\u0275fac,providedIn:"root"}),rt})();const vt={provide:jt,deps:[[new v.FiY,new v.tp0,jt]],useFactory:function ft(rt){return rt||new jt}};
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */let nt=(()=>{class rt{}return rt.\u0275fac=function(De){return new(De||rt)},rt.\u0275mod=v.oAB({type:rt}),rt.\u0275inj=v.cJS({providers:[vt],imports:[s.ez,G.ot,X.LD,ot,M.BQ]}),rt})();
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */,1572:(St,He,y)=>{y.d(He,{Cq:()=>Ne,Ou:()=>Ke});var s=y(1281),v=y(3353),M=y(8605),G=y(6895),X=y(4650),K=y(3238),ue=y(727);
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */function q(ht,mt){if(1&ht&&(X.O4$(),X._UZ(0,"circle",4)),2&ht){const de=X.oxw(),Q=X.MAs(1);X.Udp("animation-name","mat-progress-spinner-stroke-rotate-"+de._spinnerAnimationLabel)("stroke-dashoffset",de._getStrokeDashOffset(),"px")("stroke-dasharray",de._getStrokeCircumference(),"px")("stroke-width",de._getCircleStrokeWidth(),"%")("transform-origin",de._getCircleTransformOrigin(Q)),X.uIk("r",de._getCircleRadius())}}function Me(ht,mt){if(1&ht&&(X.O4$(),X._UZ(0,"circle",4)),2&ht){const de=X.oxw(),Q=X.MAs(1);X.Udp("stroke-dashoffset",de._getStrokeDashOffset(),"px")("stroke-dasharray",de._getStrokeCircumference(),"px")("stroke-width",de._getCircleStrokeWidth(),"%")("transform-origin",de._getCircleTransformOrigin(Q)),X.uIk("r",de._getCircleRadius())}}const te=(0,K.pj)(class{constructor(ht){this._elementRef=ht}},"primary"),Ge=new X.OlP("mat-progress-spinner-default-options",{providedIn:"root",factory:function Ve(){return{diameter:100}}});class Ke extends te{constructor(mt,de,Q,ee,ae,Ee,Be,ot){super(mt),this._document=Q,this._diameter=100,this._value=0,this._resizeSubscription=ue.w0.EMPTY,this.mode="determinate";const Se=Ke._diameters;this._spinnerAnimationLabel=this._getSpinnerAnimationLabel(),Se.has(Q.head)||Se.set(Q.head,new Set([100])),this._noopAnimations="NoopAnimations"===ee&&!!ae&&!ae._forceAnimations,"mat-spinner"===mt.nativeElement.nodeName.toLowerCase()&&(this.mode="indeterminate"),ae&&(ae.color&&(this.color=this.defaultColor=ae.color),ae.diameter&&(this.diameter=ae.diameter),ae.strokeWidth&&(this.strokeWidth=ae.strokeWidth)),de.isBrowser&&de.SAFARI&&Be&&Ee&&ot&&(this._resizeSubscription=Be.change(150).subscribe(()=>{"indeterminate"===this.mode&&ot.run(()=>Ee.markForCheck())}))}get diameter(){return this._diameter}set diameter(mt){this._diameter=(0,s.su)(mt),this._spinnerAnimationLabel=this._getSpinnerAnimationLabel(),this._styleRoot&&this._attachStyleNode()}get strokeWidth(){return this._strokeWidth||this.diameter/10}set strokeWidth(mt){this._strokeWidth=(0,s.su)(mt)}get value(){return"determinate"===this.mode?this._value:0}set value(mt){this._value=Math.max(0,Math.min(100,(0,s.su)(mt)))}ngOnInit(){const mt=this._elementRef.nativeElement;this._styleRoot=(0,v.kV)(mt)||this._document.head,this._attachStyleNode(),mt.classList.add("mat-progress-spinner-indeterminate-animation")}ngOnDestroy(){this._resizeSubscription.unsubscribe()}_getCircleRadius(){return(this.diameter-10)/2}_getViewBox(){const mt=2*this._getCircleRadius()+this.strokeWidth;return`0 0 ${mt} ${mt}`}_getStrokeCircumference(){return 2*Math.PI*this._getCircleRadius()}_getStrokeDashOffset(){return"determinate"===this.mode?this._getStrokeCircumference()*(100-this._value)/100:null}_getCircleStrokeWidth(){return this.strokeWidth/this.diameter*100}_getCircleTransformOrigin(mt){const de=50*(mt.currentScale??1);return`${de}% ${de}%`}_attachStyleNode(){const mt=this._styleRoot,de=this._diameter,Q=Ke._diameters;let ee=Q.get(mt);if(!ee||!ee.has(de)){const ae=this._document.createElement("style");ae.setAttribute("mat-spinner-animation",this._spinnerAnimationLabel),ae.textContent=this._getAnimationText(),mt.appendChild(ae),ee||(ee=new Set,Q.set(mt,ee)),ee.add(de)}}_getAnimationText(){const mt=this._getStrokeCircumference();return"\n @keyframes mat-progress-spinner-stroke-rotate-DIAMETER {\n    0%      { stroke-dashoffset: START_VALUE;  transform: rotate(0); }\n    12.5%   { stroke-dashoffset: END_VALUE;    transform: rotate(0); }\n    12.5001%  { stroke-dashoffset: END_VALUE;    transform: rotateX(180deg) rotate(72.5deg); }\n    25%     { stroke-dashoffset: START_VALUE;  transform: rotateX(180deg) rotate(72.5deg); }\n\n    25.0001%   { stroke-dashoffset: START_VALUE;  transform: rotate(270deg); }\n    37.5%   { stroke-dashoffset: END_VALUE;    transform: rotate(270deg); }\n    37.5001%  { stroke-dashoffset: END_VALUE;    transform: rotateX(180deg) rotate(161.5deg); }\n    50%     { stroke-dashoffset: START_VALUE;  transform: rotateX(180deg) rotate(161.5deg); }\n\n    50.0001%  { stroke-dashoffset: START_VALUE;  transform: rotate(180deg); }\n    62.5%   { stroke-dashoffset: END_VALUE;    transform: rotate(180deg); }\n    62.5001%  { stroke-dashoffset: END_VALUE;    transform: rotateX(180deg) rotate(251.5deg); }\n    75%     { stroke-dashoffset: START_VALUE;  transform: rotateX(180deg) rotate(251.5deg); }\n\n    75.0001%  { stroke-dashoffset: START_VALUE;  transform: rotate(90deg); }\n    87.5%   { stroke-dashoffset: END_VALUE;    transform: rotate(90deg); }\n    87.5001%  { stroke-dashoffset: END_VALUE;    transform: rotateX(180deg) rotate(341.5deg); }\n    100%    { stroke-dashoffset: START_VALUE;  transform: rotateX(180deg) rotate(341.5deg); }\n  }\n".replace(/START_VALUE/g,""+.95*mt).replace(/END_VALUE/g,""+.2*mt).replace(/DIAMETER/g,`${this._spinnerAnimationLabel}`)}_getSpinnerAnimationLabel(){return this.diameter.toString().replace(".","_")}}Ke._diameters=new WeakMap,Ke.\u0275fac=function(mt){return new(mt||Ke)(X.Y36(X.SBq),X.Y36(v.t4),X.Y36(G.K0,8),X.Y36(X.QbO,8),X.Y36(Ge),X.Y36(X.sBO),X.Y36(M.rL),X.Y36(X.R0b))},Ke.\u0275cmp=X.Xpm({type:Ke,selectors:[["mat-progress-spinner"],["mat-spinner"]],hostAttrs:["role","progressbar","tabindex","-1",1,"mat-progress-spinner","mat-spinner"],hostVars:10,hostBindings:function(mt,de){2&mt&&(X.uIk("aria-valuemin","determinate"===de.mode?0:null)("aria-valuemax","determinate"===de.mode?100:null)("aria-valuenow","determinate"===de.mode?de.value:null)("mode",de.mode),X.Udp("width",de.diameter,"px")("height",de.diameter,"px"),X.ekj("_mat-animation-noopable",de._noopAnimations))},inputs:{color:"color",diameter:"diameter",strokeWidth:"strokeWidth",mode:"mode",value:"value"},exportAs:["matProgressSpinner"],features:[X.qOj],decls:4,vars:8,consts:[["preserveAspectRatio","xMidYMid meet","focusable","false","aria-hidden","true",3,"ngSwitch"],["svg",""],["cx","50%","cy","50%",3,"animation-name","stroke-dashoffset","stroke-dasharray","stroke-width","transform-origin",4,"ngSwitchCase"],["cx","50%","cy","50%",3,"stroke-dashoffset","stroke-dasharray","stroke-width","transform-origin",4,"ngSwitchCase"],["cx","50%","cy","50%"]],template:function(mt,de){1&mt&&(X.O4$(),X.TgZ(0,"svg",0,1),X.YNc(2,q,1,11,"circle",2),X.YNc(3,Me,1,9,"circle",3),X.qZA()),2&mt&&(X.Udp("width",de.diameter,"px")("height",de.diameter,"px"),X.Q6J("ngSwitch","indeterminate"===de.mode),X.uIk("viewBox",de._getViewBox()),X.xp6(2),X.Q6J("ngSwitchCase",!0),X.xp6(1),X.Q6J("ngSwitchCase",!1))},dependencies:[G.RF,G.n9],styles:[".mat-progress-spinner{display:block;position:relative;overflow:hidden}.mat-progress-spinner svg{position:absolute;transform:rotate(-90deg);top:0;left:0;transform-origin:center;overflow:visible}.mat-progress-spinner circle{fill:rgba(0,0,0,0);transition:stroke-dashoffset 225ms linear}.cdk-high-contrast-active .mat-progress-spinner circle{stroke:CanvasText}.mat-progress-spinner[mode=indeterminate] svg{animation:mat-progress-spinner-linear-rotate 2000ms linear infinite}.mat-progress-spinner[mode=indeterminate] circle{transition-property:stroke;animation-duration:4000ms;animation-timing-function:cubic-bezier(0.35, 0, 0.25, 1);animation-iteration-count:infinite}.mat-progress-spinner._mat-animation-noopable svg,.mat-progress-spinner._mat-animation-noopable circle{animation:none;transition:none}@keyframes mat-progress-spinner-linear-rotate{0%{transform:rotate(0deg)}100%{transform:rotate(360deg)}}@keyframes mat-progress-spinner-stroke-rotate-100{0%{stroke-dashoffset:268.606171575px;transform:rotate(0)}12.5%{stroke-dashoffset:56.5486677px;transform:rotate(0)}12.5001%{stroke-dashoffset:56.5486677px;transform:rotateX(180deg) rotate(72.5deg)}25%{stroke-dashoffset:268.606171575px;transform:rotateX(180deg) rotate(72.5deg)}25.0001%{stroke-dashoffset:268.606171575px;transform:rotate(270deg)}37.5%{stroke-dashoffset:56.5486677px;transform:rotate(270deg)}37.5001%{stroke-dashoffset:56.5486677px;transform:rotateX(180deg) rotate(161.5deg)}50%{stroke-dashoffset:268.606171575px;transform:rotateX(180deg) rotate(161.5deg)}50.0001%{stroke-dashoffset:268.606171575px;transform:rotate(180deg)}62.5%{stroke-dashoffset:56.5486677px;transform:rotate(180deg)}62.5001%{stroke-dashoffset:56.5486677px;transform:rotateX(180deg) rotate(251.5deg)}75%{stroke-dashoffset:268.606171575px;transform:rotateX(180deg) rotate(251.5deg)}75.0001%{stroke-dashoffset:268.606171575px;transform:rotate(90deg)}87.5%{stroke-dashoffset:56.5486677px;transform:rotate(90deg)}87.5001%{stroke-dashoffset:56.5486677px;transform:rotateX(180deg) rotate(341.5deg)}100%{stroke-dashoffset:268.606171575px;transform:rotateX(180deg) rotate(341.5deg)}}"],encapsulation:2,changeDetection:0});
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
let Ne=(()=>{class ht{}return ht.\u0275fac=function(de){return new(de||ht)},ht.\u0275mod=X.oAB({type:ht}),ht.\u0275inj=X.cJS({imports:[K.BQ,G.ez,K.BQ]}),ht})();
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */,4385:(St,He,y)=>{y.d(He,{LD:()=>vt});var s=y(8184),v=y(6895),M=y(4650),G=y(3238),X=y(9549),K=y(8605);
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */y(7340);const le={provide:new M.OlP("mat-select-scroll-strategy"),deps:[s.aV],useFactory:function fe(Pt){return()=>Pt.scrollStrategies.reposition()}};let vt=(()=>{class Pt{}return Pt.\u0275fac=function(Ce){return new(Ce||Pt)},Pt.\u0275mod=M.oAB({type:Pt}),Pt.\u0275inj=M.cJS({providers:[le],imports:[v.ez,s.U8,G.Ng,G.BQ,K.ZD,X.lN,G.Ng,G.BQ]}),Pt})();
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */,6046:(St,He,y)=>{y.d(He,{ux:()=>bt,ZX:()=>ze});var s=y(8184),v=y(4080),M=y(6895),G=y(4650),X=y(3238),K=y(4859),ue=y(7579),q=y(3353),Me=y(5698),ce=y(2722),me=y(7340),te=y(7725),Ge=y(1281),Ve=y(9841),xe=y(7272),Ke=y(8306),Ne=y(5684),qe=y(8372),ht=y(4004),mt=y(8675);
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
const Q=new Set;let ee,ae=(()=>{class nt{constructor(je){this._platform=je,this._matchMedia=this._platform.isBrowser&&window.matchMedia?window.matchMedia.bind(window):Be}matchMedia(je){return(this._platform.WEBKIT||this._platform.BLINK)&&function Ee(nt){if(!Q.has(nt))try{ee||(ee=document.createElement("style"),ee.setAttribute("type","text/css"),document.head.appendChild(ee)),ee.sheet&&(ee.sheet.insertRule(`@media ${nt} {body{ }}`,0),Q.add(nt))}catch(rt){console.error(rt)}}(je),this._matchMedia(je)}}return nt.\u0275fac=function(je){return new(je||nt)(G.LFG(q.t4))},nt.\u0275prov=G.Yz7({token:nt,factory:nt.\u0275fac,providedIn:"root"}),nt})();function Be(nt){return{matches:"all"===nt||""===nt,media:nt,addListener:()=>{},removeListener:()=>{}}}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */let ot=(()=>{class nt{constructor(je,De){this._mediaMatcher=je,this._zone=De,this._queries=new Map,this._destroySubject=new ue.x}ngOnDestroy(){this._destroySubject.next(),this._destroySubject.complete()}isMatched(je){return Se((0,Ge.Eq)(je)).some(ct=>this._registerQuery(ct).mql.matches)}observe(je){const ct=Se((0,Ge.Eq)(je)).map(Gt=>this._registerQuery(Gt).observable);let gt=(0,Ve.a)(ct);return gt=(0,xe.z)(gt.pipe((0,Me.q)(1)),gt.pipe((0,Ne.T)(1),(0,qe.b)(0))),gt.pipe((0,ht.U)(Gt=>{const Yt={matches:!1,breakpoints:{}};return Gt.forEach(({matches:Mt,query:Je})=>{Yt.matches=Yt.matches||Mt,Yt.breakpoints[Je]=Mt}),Yt}))}_registerQuery(je){if(this._queries.has(je))return this._queries.get(je);const De=this._mediaMatcher.matchMedia(je),gt={observable:new Ke.y(Gt=>{const Yt=Mt=>this._zone.run(()=>Gt.next(Mt));return De.addListener(Yt),()=>{De.removeListener(Yt)}}).pipe((0,mt.O)(De),(0,ht.U)(({matches:Gt})=>({query:je,matches:Gt})),(0,ce.R)(this._destroySubject)),mql:De};return this._queries.set(je,gt),gt}}return nt.\u0275fac=function(je){return new(je||nt)(G.LFG(ae),G.LFG(G.R0b))},nt.\u0275prov=G.Yz7({token:nt,factory:nt.\u0275fac,providedIn:"root"}),nt})();function Se(nt){return nt.map(rt=>rt.split(",")).reduce((rt,je)=>rt.concat(je)).map(rt=>rt.trim())}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
function Fe(nt,rt){if(1&nt){const je=G.EpF();G.TgZ(0,"div",2)(1,"button",3),G.NdJ("click",function(){G.CHM(je);const ct=G.oxw();return G.KtG(ct.action())}),G._uU(2),G.qZA()()}if(2&nt){const je=G.oxw();G.xp6(2),G.Oqu(je.data.action)}}function le(nt,rt){}const Le=new G.OlP("MatSnackBarData");class Ye{constructor(){this.politeness="assertive",this.announcementMessage="",this.duration=0,this.data=null,this.horizontalPosition="center",this.verticalPosition="bottom"}}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */const xt=Math.pow(2,31)-1;class Ht{constructor(rt,je){this._overlayRef=je,this._afterDismissed=new ue.x,this._afterOpened=new ue.x,this._onAction=new ue.x,this._dismissedByAction=!1,this.containerInstance=rt,rt._onExit.subscribe(()=>this._finishDismiss())}dismiss(){this._afterDismissed.closed||this.containerInstance.exit(),clearTimeout(this._durationTimeoutId)}dismissWithAction(){this._onAction.closed||(this._dismissedByAction=!0,this._onAction.next(),this._onAction.complete(),this.dismiss()),clearTimeout(this._durationTimeoutId)}closeWithAction(){this.dismissWithAction()}_dismissAfter(rt){this._durationTimeoutId=setTimeout(()=>this.dismiss(),Math.min(rt,xt))}_open(){this._afterOpened.closed||(this._afterOpened.next(),this._afterOpened.complete())}_finishDismiss(){this._overlayRef.dispose(),this._onAction.closed||this._onAction.complete(),this._afterDismissed.next({dismissedByAction:this._dismissedByAction}),this._afterDismissed.complete(),this._dismissedByAction=!1}afterDismissed(){return this._afterDismissed}afterOpened(){return this.containerInstance._onEnter}onAction(){return this._onAction}}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */let jt=(()=>{class nt{constructor(je,De){this.snackBarRef=je,this.data=De}action(){this.snackBarRef.dismissWithAction()}get hasAction(){return!!this.data.action}}return nt.\u0275fac=function(je){return new(je||nt)(G.Y36(Ht),G.Y36(Le))},nt.\u0275cmp=G.Xpm({type:nt,selectors:[["simple-snack-bar"]],hostAttrs:[1,"mat-simple-snackbar"],decls:3,vars:2,consts:[[1,"mat-simple-snack-bar-content"],["class","mat-simple-snackbar-action",4,"ngIf"],[1,"mat-simple-snackbar-action"],["mat-button","",3,"click"]],template:function(je,De){1&je&&(G.TgZ(0,"span",0),G._uU(1),G.qZA(),G.YNc(2,Fe,3,1,"div",1)),2&je&&(G.xp6(1),G.Oqu(De.data.message),G.xp6(1),G.Q6J("ngIf",De.hasAction))},dependencies:[M.O5,K.lW],styles:[".mat-simple-snackbar{display:flex;justify-content:space-between;align-items:center;line-height:20px;opacity:1}.mat-simple-snackbar-action{flex-shrink:0;margin:-8px -8px -8px 8px}.mat-simple-snackbar-action button{max-height:36px;min-width:0}[dir=rtl] .mat-simple-snackbar-action{margin-left:-8px;margin-right:8px}.mat-simple-snack-bar-content{overflow:hidden;text-overflow:ellipsis}"],encapsulation:2,changeDetection:0}),nt})();
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */const ft={snackBarState:(0,me.X$)("state",[(0,me.SB)("void, hidden",(0,me.oB)({transform:"scale(0.8)",opacity:0})),(0,me.SB)("visible",(0,me.oB)({transform:"scale(1)",opacity:1})),(0,me.eR)("* => visible",(0,me.jt)("150ms cubic-bezier(0, 0, 0.2, 1)")),(0,me.eR)("* => void, * => hidden",(0,me.jt)("75ms cubic-bezier(0.4, 0.0, 1, 1)",(0,me.oB)({opacity:0})))])};let vt=(()=>{class nt extends v.en{constructor(je,De,ct,gt,Gt){super(),this._ngZone=je,this._elementRef=De,this._changeDetectorRef=ct,this._platform=gt,this.snackBarConfig=Gt,this._announceDelay=150,this._destroyed=!1,this._onAnnounce=new ue.x,this._onExit=new ue.x,this._onEnter=new ue.x,this._animationState="void",this.attachDomPortal=Yt=>{this._assertNotAttached();const Mt=this._portalOutlet.attachDomPortal(Yt);return this._afterPortalAttached(),Mt},this._live="assertive"!==Gt.politeness||Gt.announcementMessage?"off"===Gt.politeness?"off":"polite":"assertive",this._platform.FIREFOX&&("polite"===this._live&&(this._role="status"),"assertive"===this._live&&(this._role="alert"))}attachComponentPortal(je){this._assertNotAttached();const De=this._portalOutlet.attachComponentPortal(je);return this._afterPortalAttached(),De}attachTemplatePortal(je){this._assertNotAttached();const De=this._portalOutlet.attachTemplatePortal(je);return this._afterPortalAttached(),De}onAnimationEnd(je){const{fromState:De,toState:ct}=je;if(("void"===ct&&"void"!==De||"hidden"===ct)&&this._completeExit(),"visible"===ct){const gt=this._onEnter;this._ngZone.run(()=>{gt.next(),gt.complete()})}}enter(){this._destroyed||(this._animationState="visible",this._changeDetectorRef.detectChanges(),this._screenReaderAnnounce())}exit(){return this._ngZone.run(()=>{this._animationState="hidden",this._elementRef.nativeElement.setAttribute("mat-exit",""),clearTimeout(this._announceTimeoutId)}),this._onExit}ngOnDestroy(){this._destroyed=!0,this._completeExit()}_completeExit(){this._ngZone.onMicrotaskEmpty.pipe((0,Me.q)(1)).subscribe(()=>{this._ngZone.run(()=>{this._onExit.next(),this._onExit.complete()})})}_afterPortalAttached(){const je=this._elementRef.nativeElement,De=this.snackBarConfig.panelClass;De&&(Array.isArray(De)?De.forEach(ct=>je.classList.add(ct)):je.classList.add(De))}_assertNotAttached(){this._portalOutlet.hasAttached()}_screenReaderAnnounce(){this._announceTimeoutId||this._ngZone.runOutsideAngular(()=>{this._announceTimeoutId=setTimeout(()=>{const je=this._elementRef.nativeElement.querySelector("[aria-hidden]"),De=this._elementRef.nativeElement.querySelector("[aria-live]");if(je&&De){let ct=null;this._platform.isBrowser&&document.activeElement instanceof HTMLElement&&je.contains(document.activeElement)&&(ct=document.activeElement),je.removeAttribute("aria-hidden"),De.appendChild(je),ct?.focus(),this._onAnnounce.next(),this._onAnnounce.complete()}},this._announceDelay)})}}return nt.\u0275fac=function(je){return new(je||nt)(G.Y36(G.R0b),G.Y36(G.SBq),G.Y36(G.sBO),G.Y36(q.t4),G.Y36(Ye))},nt.\u0275dir=G.lG2({type:nt,viewQuery:function(je,De){if(1&je&&G.Gf(v.Pl,7),2&je){let ct;G.iGM(ct=G.CRH())&&(De._portalOutlet=ct.first)}},features:[G.qOj]}),nt})(),Pt=(()=>{class nt extends vt{_afterPortalAttached(){super._afterPortalAttached(),"center"===this.snackBarConfig.horizontalPosition&&this._elementRef.nativeElement.classList.add("mat-snack-bar-center"),"top"===this.snackBarConfig.verticalPosition&&this._elementRef.nativeElement.classList.add("mat-snack-bar-top")}}return nt.\u0275fac=function(){let rt;return function(De){return(rt||(rt=G.n5z(nt)))(De||nt)}}(),nt.\u0275cmp=G.Xpm({type:nt,selectors:[["snack-bar-container"]],hostAttrs:[1,"mat-snack-bar-container"],hostVars:1,hostBindings:function(je,De){1&je&&G.WFA("@state.done",function(gt){return De.onAnimationEnd(gt)}),2&je&&G.d8E("@state",De._animationState)},features:[G.qOj],decls:3,vars:2,consts:[["aria-hidden","true"],["cdkPortalOutlet",""]],template:function(je,De){1&je&&(G.TgZ(0,"div",0),G.YNc(1,le,0,0,"ng-template",1),G.qZA(),G._UZ(2,"div")),2&je&&(G.xp6(2),G.uIk("aria-live",De._live)("role",De._role))},dependencies:[v.Pl],styles:[".mat-snack-bar-container{border-radius:4px;box-sizing:border-box;display:block;margin:24px;max-width:33vw;min-width:344px;padding:14px 16px;min-height:48px;transform-origin:center}.cdk-high-contrast-active .mat-snack-bar-container{border:solid 1px}.mat-snack-bar-handset{width:100%}.mat-snack-bar-handset .mat-snack-bar-container{margin:8px;max-width:100%;min-width:0;width:100%}"],encapsulation:2,data:{animation:[ft.snackBarState]}}),nt})(),ze=(()=>{class nt{}return nt.\u0275fac=function(je){return new(je||nt)},nt.\u0275mod=G.oAB({type:nt}),nt.\u0275inj=G.cJS({imports:[s.U8,v.eL,M.ez,K.ot,X.BQ,X.BQ]}),nt})();
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
const Ce=new G.OlP("mat-snack-bar-default-options",{providedIn:"root",factory:function st(){return new Ye}});let at=(()=>{class nt{constructor(je,De,ct,gt,Gt,Yt){this._overlay=je,this._live=De,this._injector=ct,this._breakpointObserver=gt,this._parentSnackBar=Gt,this._defaultConfig=Yt,this._snackBarRefAtThisLevel=null}get _openedSnackBarRef(){const je=this._parentSnackBar;return je?je._openedSnackBarRef:this._snackBarRefAtThisLevel}set _openedSnackBarRef(je){this._parentSnackBar?this._parentSnackBar._openedSnackBarRef=je:this._snackBarRefAtThisLevel=je}openFromComponent(je,De){return this._attach(je,De)}openFromTemplate(je,De){return this._attach(je,De)}open(je,De="",ct){const gt={...this._defaultConfig,...ct};return gt.data={message:je,action:De},gt.announcementMessage===je&&(gt.announcementMessage=void 0),this.openFromComponent(this.simpleSnackBarComponent,gt)}dismiss(){this._openedSnackBarRef&&this._openedSnackBarRef.dismiss()}ngOnDestroy(){this._snackBarRefAtThisLevel&&this._snackBarRefAtThisLevel.dismiss()}_attachSnackBarContainer(je,De){const gt=G.zs3.create({parent:De&&De.viewContainerRef&&De.viewContainerRef.injector||this._injector,providers:[{provide:Ye,useValue:De}]}),Gt=new v.C5(this.snackBarContainerComponent,De.viewContainerRef,gt),Yt=je.attach(Gt);return Yt.instance.snackBarConfig=De,Yt.instance}_attach(je,De){const ct={...new Ye,...this._defaultConfig,...De},gt=this._createOverlay(ct),Gt=this._attachSnackBarContainer(gt,ct),Yt=new Ht(Gt,gt);if(je instanceof G.Rgc){const Mt=new v.UE(je,null,{$implicit:ct.data,snackBarRef:Yt});Yt.instance=Gt.attachTemplatePortal(Mt)}else{const Mt=this._createInjector(ct,Yt),Je=new v.C5(je,void 0,Mt),B=Gt.attachComponentPortal(Je);Yt.instance=B.instance}return this._breakpointObserver.observe("(max-width: 599.98px) and (orientation: portrait)").pipe((0,ce.R)(gt.detachments())).subscribe(Mt=>{gt.overlayElement.classList.toggle(this.handsetCssClass,Mt.matches)}),ct.announcementMessage&&Gt._onAnnounce.subscribe(()=>{this._live.announce(ct.announcementMessage,ct.politeness)}),this._animateSnackBar(Yt,ct),this._openedSnackBarRef=Yt,this._openedSnackBarRef}_animateSnackBar(je,De){je.afterDismissed().subscribe(()=>{this._openedSnackBarRef==je&&(this._openedSnackBarRef=null),De.announcementMessage&&this._live.clear()}),this._openedSnackBarRef?(this._openedSnackBarRef.afterDismissed().subscribe(()=>{je.containerInstance.enter()}),this._openedSnackBarRef.dismiss()):je.containerInstance.enter(),De.duration&&De.duration>0&&je.afterOpened().subscribe(()=>je._dismissAfter(De.duration))}_createOverlay(je){const De=new s.X_;De.direction=je.direction;let ct=this._overlay.position().global();const gt="rtl"===je.direction,Gt="left"===je.horizontalPosition||"start"===je.horizontalPosition&&!gt||"end"===je.horizontalPosition&&gt,Yt=!Gt&&"center"!==je.horizontalPosition;return Gt?ct.left("0"):Yt?ct.right("0"):ct.centerHorizontally(),"top"===je.verticalPosition?ct.top("0"):ct.bottom("0"),De.positionStrategy=ct,this._overlay.create(De)}_createInjector(je,De){return G.zs3.create({parent:je&&je.viewContainerRef&&je.viewContainerRef.injector||this._injector,providers:[{provide:Ht,useValue:De},{provide:Le,useValue:je.data}]})}}return nt.\u0275fac=function(je){return new(je||nt)(G.LFG(s.aV),G.LFG(te.Kd),G.LFG(G.zs3),G.LFG(ot),G.LFG(nt,12),G.LFG(Ce))},nt.\u0275prov=G.Yz7({token:nt,factory:nt.\u0275fac}),nt})(),bt=(()=>{class nt extends at{constructor(je,De,ct,gt,Gt,Yt){super(je,De,ct,gt,Gt,Yt),this.simpleSnackBarComponent=jt,this.snackBarContainerComponent=Pt,this.handsetCssClass="mat-snack-bar-handset"}}return nt.\u0275fac=function(je){return new(je||nt)(G.LFG(s.aV),G.LFG(te.Kd),G.LFG(G.zs3),G.LFG(ot),G.LFG(nt,12),G.LFG(Ce))},nt.\u0275prov=G.Yz7({token:nt,factory:nt.\u0275fac,providedIn:ze}),nt})();
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */},6308:(St,He,y)=>{y.d(He,{JX:()=>Se,YE:()=>ht,nU:()=>ot});var s=y(4650),v=y(7725),M=y(1281),G=y(9521),X=y(3238),K=y(7579),ue=y(6451),q=y(7340),Me=y(6895);
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */const ce=["mat-sort-header",""];function me(fe,Fe){if(1&fe){const le=s.EpF();s.TgZ(0,"div",3),s.NdJ("@arrowPosition.start",function(){s.CHM(le);const Ye=s.oxw();return s.KtG(Ye._disableViewStateAnimation=!0)})("@arrowPosition.done",function(){s.CHM(le);const Ye=s.oxw();return s.KtG(Ye._disableViewStateAnimation=!1)}),s._UZ(1,"div",4),s.TgZ(2,"div",5),s._UZ(3,"div",6)(4,"div",7)(5,"div",8),s.qZA()()}if(2&fe){const le=s.oxw();s.Q6J("@arrowOpacity",le._getArrowViewState())("@arrowPosition",le._getArrowViewState())("@allowChildren",le._getArrowDirectionState()),s.xp6(2),s.Q6J("@indicator",le._getArrowDirectionState()),s.xp6(1),s.Q6J("@leftPointer",le._getArrowDirectionState()),s.xp6(1),s.Q6J("@rightPointer",le._getArrowDirectionState())}}const te=["*"],Ne=new s.OlP("MAT_SORT_DEFAULT_OPTIONS"),qe=(0,X.dB)((0,X.Id)(class{}));let ht=(()=>{class fe extends qe{constructor(le){super(),this._defaultOptions=le,this.sortables=new Map,this._stateChanges=new K.x,this.start="asc",this._direction="",this.sortChange=new s.vpe}get direction(){return this._direction}set direction(le){this._direction=le}get disableClear(){return this._disableClear}set disableClear(le){this._disableClear=(0,M.Ig)(le)}register(le){this.sortables.set(le.id,le)}deregister(le){this.sortables.delete(le.id)}sort(le){this.active!=le.id?(this.active=le.id,this.direction=le.start?le.start:this.start):this.direction=this.getNextSortDirection(le),this.sortChange.emit({active:this.active,direction:this.direction})}getNextSortDirection(le){if(!le)return"";let Ye=function mt(fe,Fe){let le=["asc","desc"];return"desc"==fe&&le.reverse(),Fe||le.push(""),le
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */}(le.start||this.start,le?.disableClear??this.disableClear??!!this._defaultOptions?.disableClear),xt=Ye.indexOf(this.direction)+1;return xt>=Ye.length&&(xt=0),Ye[xt]}ngOnInit(){this._markInitialized()}ngOnChanges(){this._stateChanges.next()}ngOnDestroy(){this._stateChanges.complete()}}return fe.\u0275fac=function(le){return new(le||fe)(s.Y36(Ne,8))},fe.\u0275dir=s.lG2({type:fe,selectors:[["","matSort",""]],hostAttrs:[1,"mat-sort"],inputs:{disabled:["matSortDisabled","disabled"],active:["matSortActive","active"],start:["matSortStart","start"],direction:["matSortDirection","direction"],disableClear:["matSortDisableClear","disableClear"]},outputs:{sortChange:"matSortChange"},exportAs:["matSort"],features:[s.qOj,s.TTD]}),fe})();const de=X.mZ.ENTERING+" "+X.yN.STANDARD_CURVE,Q={indicator:(0,q.X$)("indicator",[(0,q.SB)("active-asc, asc",(0,q.oB)({transform:"translateY(0px)"})),(0,q.SB)("active-desc, desc",(0,q.oB)({transform:"translateY(10px)"})),(0,q.eR)("active-asc <=> active-desc",(0,q.jt)(de))]),leftPointer:(0,q.X$)("leftPointer",[(0,q.SB)("active-asc, asc",(0,q.oB)({transform:"rotate(-45deg)"})),(0,q.SB)("active-desc, desc",(0,q.oB)({transform:"rotate(45deg)"})),(0,q.eR)("active-asc <=> active-desc",(0,q.jt)(de))]),rightPointer:(0,q.X$)("rightPointer",[(0,q.SB)("active-asc, asc",(0,q.oB)({transform:"rotate(45deg)"})),(0,q.SB)("active-desc, desc",(0,q.oB)({transform:"rotate(-45deg)"})),(0,q.eR)("active-asc <=> active-desc",(0,q.jt)(de))]),arrowOpacity:(0,q.X$)("arrowOpacity",[(0,q.SB)("desc-to-active, asc-to-active, active",(0,q.oB)({opacity:1})),(0,q.SB)("desc-to-hint, asc-to-hint, hint",(0,q.oB)({opacity:.54})),(0,q.SB)("hint-to-desc, active-to-desc, desc, hint-to-asc, active-to-asc, asc, void",(0,q.oB)({opacity:0})),(0,q.eR)("* => asc, * => desc, * => active, * => hint, * => void",(0,q.jt)("0ms")),(0,q.eR)("* <=> *",(0,q.jt)(de))]),arrowPosition:(0,q.X$)("arrowPosition",[(0,q.eR)("* => desc-to-hint, * => desc-to-active",(0,q.jt)(de,(0,q.F4)([(0,q.oB)({transform:"translateY(-25%)"}),(0,q.oB)({transform:"translateY(0)"})]))),(0,q.eR)("* => hint-to-desc, * => active-to-desc",(0,q.jt)(de,(0,q.F4)([(0,q.oB)({transform:"translateY(0)"}),(0,q.oB)({transform:"translateY(25%)"})]))),(0,q.eR)("* => asc-to-hint, * => asc-to-active",(0,q.jt)(de,(0,q.F4)([(0,q.oB)({transform:"translateY(25%)"}),(0,q.oB)({transform:"translateY(0)"})]))),(0,q.eR)("* => hint-to-asc, * => active-to-asc",(0,q.jt)(de,(0,q.F4)([(0,q.oB)({transform:"translateY(0)"}),(0,q.oB)({transform:"translateY(-25%)"})]))),(0,q.SB)("desc-to-hint, asc-to-hint, hint, desc-to-active, asc-to-active, active",(0,q.oB)({transform:"translateY(0)"})),(0,q.SB)("hint-to-desc, active-to-desc, desc",(0,q.oB)({transform:"translateY(-25%)"})),(0,q.SB)("hint-to-asc, active-to-asc, asc",(0,q.oB)({transform:"translateY(25%)"}))]),allowChildren:(0,q.X$)("allowChildren",[(0,q.eR)("* <=> *",[(0,q.IO)("@*",(0,q.pV)(),{optional:!0})])])};
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */let ee=(()=>{class fe{constructor(){this.changes=new K.x}}return fe.\u0275fac=function(le){return new(le||fe)},fe.\u0275prov=s.Yz7({token:fe,factory:fe.\u0275fac,providedIn:"root"}),fe})();const Ee={provide:ee,deps:[[new s.FiY,new s.tp0,ee]],useFactory:function ae(fe){return fe||new ee}},Be=(0,X.Id)(class{});
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */let ot=(()=>{class fe extends Be{constructor(le,Le,Ye,xt,Ht,jt,ft,vt){super(),this._intl=le,this._changeDetectorRef=Le,this._sort=Ye,this._columnDef=xt,this._focusMonitor=Ht,this._elementRef=jt,this._ariaDescriber=ft,this._showIndicatorHint=!1,this._viewState={},this._arrowDirection="",this._disableViewStateAnimation=!1,this.arrowPosition="after",this._sortActionDescription="Sort",vt?.arrowPosition&&(this.arrowPosition=vt?.arrowPosition),this._handleStateChanges()}get sortActionDescription(){return this._sortActionDescription}set sortActionDescription(le){this._updateSortActionDescription(le)}get disableClear(){return this._disableClear}set disableClear(le){this._disableClear=(0,M.Ig)(le)}ngOnInit(){!this.id&&this._columnDef&&(this.id=this._columnDef.name),this._updateArrowDirection(),this._setAnimationTransitionState({toState:this._isSorted()?"active":this._arrowDirection}),this._sort.register(this),this._sortButton=this._elementRef.nativeElement.querySelector(".mat-sort-header-container"),this._updateSortActionDescription(this._sortActionDescription)}ngAfterViewInit(){this._focusMonitor.monitor(this._elementRef,!0).subscribe(le=>{const Le=!!le;Le!==this._showIndicatorHint&&(this._setIndicatorHintVisible(Le),this._changeDetectorRef.markForCheck())})}ngOnDestroy(){this._focusMonitor.stopMonitoring(this._elementRef),this._sort.deregister(this),this._rerenderSubscription.unsubscribe()}_setIndicatorHintVisible(le){this._isDisabled()&&le||(this._showIndicatorHint=le,this._isSorted()||(this._updateArrowDirection(),this._setAnimationTransitionState(this._showIndicatorHint?{fromState:this._arrowDirection,toState:"hint"}:{fromState:"hint",toState:this._arrowDirection})))}_setAnimationTransitionState(le){this._viewState=le||{},this._disableViewStateAnimation&&(this._viewState={toState:le.toState})}_toggleOnInteraction(){this._sort.sort(this),("hint"===this._viewState.toState||"active"===this._viewState.toState)&&(this._disableViewStateAnimation=!0)}_handleClick(){this._isDisabled()||this._sort.sort(this)}_handleKeydown(le){!this._isDisabled()&&(le.keyCode===G.L_||le.keyCode===G.K5)&&(le.preventDefault(),this._toggleOnInteraction())}_isSorted(){return this._sort.active==this.id&&("asc"===this._sort.direction||"desc"===this._sort.direction)}_getArrowDirectionState(){return`${this._isSorted()?"active-":""}${this._arrowDirection}`}_getArrowViewState(){const le=this._viewState.fromState;return(le?`${le}-to-`:"")+this._viewState.toState}_updateArrowDirection(){this._arrowDirection=this._isSorted()?this._sort.direction:this.start||this._sort.start}_isDisabled(){return this._sort.disabled||this.disabled}_getAriaSortAttribute(){return this._isSorted()?"asc"==this._sort.direction?"ascending":"descending":"none"}_renderArrow(){return!this._isDisabled()||this._isSorted()}_updateSortActionDescription(le){this._sortButton&&(this._ariaDescriber?.removeDescription(this._sortButton,this._sortActionDescription),this._ariaDescriber?.describe(this._sortButton,le)),this._sortActionDescription=le}_handleStateChanges(){this._rerenderSubscription=(0,ue.T)(this._sort.sortChange,this._sort._stateChanges,this._intl.changes).subscribe(()=>{this._isSorted()&&(this._updateArrowDirection(),("hint"===this._viewState.toState||"active"===this._viewState.toState)&&(this._disableViewStateAnimation=!0),this._setAnimationTransitionState({fromState:this._arrowDirection,toState:"active"}),this._showIndicatorHint=!1),!this._isSorted()&&this._viewState&&"active"===this._viewState.toState&&(this._disableViewStateAnimation=!1,this._setAnimationTransitionState({fromState:"active",toState:this._arrowDirection})),this._changeDetectorRef.markForCheck()})}}return fe.\u0275fac=function(le){return new(le||fe)(s.Y36(ee),s.Y36(s.sBO),s.Y36(ht,8),s.Y36("MAT_SORT_HEADER_COLUMN_DEF",8),s.Y36(v.tE),s.Y36(s.SBq),s.Y36(v.$s,8),s.Y36(Ne,8))},fe.\u0275cmp=s.Xpm({type:fe,selectors:[["","mat-sort-header",""]],hostAttrs:[1,"mat-sort-header"],hostVars:3,hostBindings:function(le,Le){1&le&&s.NdJ("click",function(){return Le._handleClick()})("keydown",function(xt){return Le._handleKeydown(xt)})("mouseenter",function(){return Le._setIndicatorHintVisible(!0)})("mouseleave",function(){return Le._setIndicatorHintVisible(!1)}),2&le&&(s.uIk("aria-sort",Le._getAriaSortAttribute()),s.ekj("mat-sort-header-disabled",Le._isDisabled()))},inputs:{disabled:"disabled",id:["mat-sort-header","id"],arrowPosition:"arrowPosition",start:"start",sortActionDescription:"sortActionDescription",disableClear:"disableClear"},exportAs:["matSortHeader"],features:[s.qOj],attrs:ce,ngContentSelectors:te,decls:4,vars:7,consts:[[1,"mat-sort-header-container","mat-focus-indicator"],[1,"mat-sort-header-content"],["class","mat-sort-header-arrow",4,"ngIf"],[1,"mat-sort-header-arrow"],[1,"mat-sort-header-stem"],[1,"mat-sort-header-indicator"],[1,"mat-sort-header-pointer-left"],[1,"mat-sort-header-pointer-right"],[1,"mat-sort-header-pointer-middle"]],template:function(le,Le){1&le&&(s.F$t(),s.TgZ(0,"div",0)(1,"div",1),s.Hsn(2),s.qZA(),s.YNc(3,me,6,6,"div",2),s.qZA()),2&le&&(s.ekj("mat-sort-header-sorted",Le._isSorted())("mat-sort-header-position-before","before"===Le.arrowPosition),s.uIk("tabindex",Le._isDisabled()?null:0)("role",Le._isDisabled()?null:"button"),s.xp6(3),s.Q6J("ngIf",Le._renderArrow()))},dependencies:[Me.O5],styles:[".mat-sort-header-container{display:flex;cursor:pointer;align-items:center;letter-spacing:normal;outline:0}[mat-sort-header].cdk-keyboard-focused .mat-sort-header-container,[mat-sort-header].cdk-program-focused .mat-sort-header-container{border-bottom:solid 1px currentColor}.mat-sort-header-disabled .mat-sort-header-container{cursor:default}.mat-sort-header-content{text-align:center;display:flex;align-items:center}.mat-sort-header-position-before{flex-direction:row-reverse}.mat-sort-header-arrow{height:12px;width:12px;min-width:12px;position:relative;display:flex;opacity:0}.mat-sort-header-arrow,[dir=rtl] .mat-sort-header-position-before .mat-sort-header-arrow{margin:0 0 0 6px}.mat-sort-header-position-before .mat-sort-header-arrow,[dir=rtl] .mat-sort-header-arrow{margin:0 6px 0 0}.mat-sort-header-stem{background:currentColor;height:10px;width:2px;margin:auto;display:flex;align-items:center}.cdk-high-contrast-active .mat-sort-header-stem{width:0;border-left:solid 2px}.mat-sort-header-indicator{width:100%;height:2px;display:flex;align-items:center;position:absolute;top:0;left:0}.mat-sort-header-pointer-middle{margin:auto;height:2px;width:2px;background:currentColor;transform:rotate(45deg)}.cdk-high-contrast-active .mat-sort-header-pointer-middle{width:0;height:0;border-top:solid 2px;border-left:solid 2px}.mat-sort-header-pointer-left,.mat-sort-header-pointer-right{background:currentColor;width:6px;height:2px;position:absolute;top:0}.cdk-high-contrast-active .mat-sort-header-pointer-left,.cdk-high-contrast-active .mat-sort-header-pointer-right{width:0;height:0;border-left:solid 6px;border-top:solid 2px}.mat-sort-header-pointer-left{transform-origin:right;left:0}.mat-sort-header-pointer-right{transform-origin:left;right:0}"],encapsulation:2,data:{animation:[Q.indicator,Q.leftPointer,Q.rightPointer,Q.arrowOpacity,Q.arrowPosition,Q.allowChildren]},changeDetection:0}),fe})(),Se=(()=>{class fe{}return fe.\u0275fac=function(le){return new(le||fe)},fe.\u0275mod=s.oAB({type:fe}),fe.\u0275inj=s.cJS({providers:[Ee],imports:[Me.ez,X.BQ]}),fe})();
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */,5717:(St,He,y)=>{y.d(He,{ev:()=>Ot,Dz:()=>Jt,w1:()=>ne,ge:()=>Pe,fO:()=>Oe,XQ:()=>ai,as:()=>hn,Gk:()=>hi,nj:()=>Ft,BZ:()=>At,by:()=>Ri,p0:()=>Ei});var s=y(4650),v=y(445),M=y(1281);
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */function X(N){return N&&"function"==typeof N.connect}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
class ue{applyChanges(re,O,ie,ke,et){re.forEachOperation((Ct,$t,Xt)=>{let un,tn;if(null==Ct.previousIndex){const Cn=ie(Ct,$t,Xt);un=O.createEmbeddedView(Cn.templateRef,Cn.context,Cn.index),tn=1}else null==Xt?(O.remove($t),tn=3):(un=O.get($t),O.move(un,Xt),tn=2);et&&et({context:un?.context,operation:tn,record:Ct})})}detach(){}}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
const te=new s.OlP("_ViewRepeater");
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */var Ge=y(3353),Ve=y(8605),xe=y(6895),Ke=y(7579),Ne=y(2076),qe=y(1135),ht=y(8306),mt=y(576),Q=y(9646),ee=y(2722),ae=y(5698);
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
const Ee=[[["caption"]],[["colgroup"],["col"]]],Be=["caption","colgroup, col"];function fe(N){return class extends N{constructor(...re){super(...re),this._sticky=!1,this._hasStickyChanged=!1}get sticky(){return this._sticky}set sticky(re){const O=this._sticky;this._sticky=(0,M.Ig)(re),this._hasStickyChanged=O!==this._sticky}hasStickyChanged(){const re=this._hasStickyChanged;return this._hasStickyChanged=!1,re}resetStickyChanged(){this._hasStickyChanged=!1}}}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */const Fe=new s.OlP("CDK_TABLE");
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */let Le=(()=>{class N{constructor(O){this.template=O}}return N.\u0275fac=function(O){return new(O||N)(s.Y36(s.Rgc))},N.\u0275dir=s.lG2({type:N,selectors:[["","cdkCellDef",""]]}),N})(),Ye=(()=>{class N{constructor(O){this.template=O}}return N.\u0275fac=function(O){return new(O||N)(s.Y36(s.Rgc))},N.\u0275dir=s.lG2({type:N,selectors:[["","cdkHeaderCellDef",""]]}),N})(),xt=(()=>{class N{constructor(O){this.template=O}}return N.\u0275fac=function(O){return new(O||N)(s.Y36(s.Rgc))},N.\u0275dir=s.lG2({type:N,selectors:[["","cdkFooterCellDef",""]]}),N})();class Ht{}const jt=fe(Ht);let ft=(()=>{class N extends jt{constructor(O){super(),this._table=O,this._stickyEnd=!1}get name(){return this._name}set name(O){this._setNameInput(O)}get stickyEnd(){return this._stickyEnd}set stickyEnd(O){const ie=this._stickyEnd;this._stickyEnd=(0,M.Ig)(O),this._hasStickyChanged=ie!==this._stickyEnd}_updateColumnCssClassName(){this._columnCssClassName=[`cdk-column-${this.cssClassFriendlyName}`]}_setNameInput(O){O&&(this._name=O,this.cssClassFriendlyName=O.replace(/[^a-z0-9_-]/gi,"-"),this._updateColumnCssClassName())}}return N.\u0275fac=function(O){return new(O||N)(s.Y36(Fe,8))},N.\u0275dir=s.lG2({type:N,selectors:[["","cdkColumnDef",""]],contentQueries:function(O,ie,ke){if(1&O&&(s.Suo(ke,Le,5),s.Suo(ke,Ye,5),s.Suo(ke,xt,5)),2&O){let et;s.iGM(et=s.CRH())&&(ie.cell=et.first),s.iGM(et=s.CRH())&&(ie.headerCell=et.first),s.iGM(et=s.CRH())&&(ie.footerCell=et.first)}},inputs:{sticky:"sticky",name:["cdkColumnDef","name"],stickyEnd:"stickyEnd"},features:[s._Bn([{provide:"MAT_SORT_HEADER_COLUMN_DEF",useExisting:N}]),s.qOj]}),N})();class vt{constructor(re,O){O.nativeElement.classList.add(...re._columnCssClassName)}}let Pt=(()=>{class N extends vt{constructor(O,ie){super(O,ie)}}return N.\u0275fac=function(O){return new(O||N)(s.Y36(ft),s.Y36(s.SBq))},N.\u0275dir=s.lG2({type:N,selectors:[["cdk-header-cell"],["th","cdk-header-cell",""]],hostAttrs:["role","columnheader",1,"cdk-header-cell"],features:[s.qOj]}),N})(),Ce=(()=>{class N extends vt{constructor(O,ie){if(super(O,ie),1===O._table?._elementRef.nativeElement.nodeType){const ke=O._table._elementRef.nativeElement.getAttribute("role");ie.nativeElement.setAttribute("role","grid"===ke||"treegrid"===ke?"gridcell":"cell")}}}return N.\u0275fac=function(O){return new(O||N)(s.Y36(ft),s.Y36(s.SBq))},N.\u0275dir=s.lG2({type:N,selectors:[["cdk-cell"],["td","cdk-cell",""]],hostAttrs:[1,"cdk-cell"],features:[s.qOj]}),N})();
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */class st{constructor(){this.tasks=[],this.endTasks=[]}}const at=new s.OlP("_COALESCED_STYLE_SCHEDULER");let bt=(()=>{class N{constructor(O){this._ngZone=O,this._currentSchedule=null,this._destroyed=new Ke.x}schedule(O){this._createScheduleIfNeeded(),this._currentSchedule.tasks.push(O)}scheduleEnd(O){this._createScheduleIfNeeded(),this._currentSchedule.endTasks.push(O)}ngOnDestroy(){this._destroyed.next(),this._destroyed.complete()}_createScheduleIfNeeded(){this._currentSchedule||(this._currentSchedule=new st,this._getScheduleObservable().pipe((0,ee.R)(this._destroyed)).subscribe(()=>{for(;this._currentSchedule.tasks.length||this._currentSchedule.endTasks.length;){const O=this._currentSchedule;this._currentSchedule=new st;for(const ie of O.tasks)ie();for(const ie of O.endTasks)ie()}this._currentSchedule=null}))}_getScheduleObservable(){return this._ngZone.isStable?(0,Ne.D)(Promise.resolve(void 0)):this._ngZone.onStable.pipe((0,ae.q)(1))}}return N.\u0275fac=function(O){return new(O||N)(s.LFG(s.R0b))},N.\u0275prov=s.Yz7({token:N,factory:N.\u0275fac}),N})(),rt=(()=>{class N{constructor(O,ie){this.template=O,this._differs=ie}ngOnChanges(O){if(!this._columnsDiffer){const ie=O.columns&&O.columns.currentValue||[];this._columnsDiffer=this._differs.find(ie).create(),this._columnsDiffer.diff(ie)}}getColumnsDiff(){return this._columnsDiffer.diff(this.columns)}extractCellTemplate(O){return this instanceof ct?O.headerCell.template:this instanceof Yt?O.footerCell.template:O.cell.template}}return N.\u0275fac=function(O){return new(O||N)(s.Y36(s.Rgc),s.Y36(s.ZZ4))},N.\u0275dir=s.lG2({type:N,features:[s.TTD]}),N})();
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */class je extends rt{}const De=fe(je);let ct=(()=>{class N extends De{constructor(O,ie,ke){super(O,ie),this._table=ke}ngOnChanges(O){super.ngOnChanges(O)}}return N.\u0275fac=function(O){return new(O||N)(s.Y36(s.Rgc),s.Y36(s.ZZ4),s.Y36(Fe,8))},N.\u0275dir=s.lG2({type:N,selectors:[["","cdkHeaderRowDef",""]],inputs:{columns:["cdkHeaderRowDef","columns"],sticky:["cdkHeaderRowDefSticky","sticky"]},features:[s.qOj,s.TTD]}),N})();class gt extends rt{}const Gt=fe(gt);let Yt=(()=>{class N extends Gt{constructor(O,ie,ke){super(O,ie),this._table=ke}ngOnChanges(O){super.ngOnChanges(O)}}return N.\u0275fac=function(O){return new(O||N)(s.Y36(s.Rgc),s.Y36(s.ZZ4),s.Y36(Fe,8))},N.\u0275dir=s.lG2({type:N,selectors:[["","cdkFooterRowDef",""]],inputs:{columns:["cdkFooterRowDef","columns"],sticky:["cdkFooterRowDefSticky","sticky"]},features:[s.qOj,s.TTD]}),N})(),Mt=(()=>{class N extends rt{constructor(O,ie,ke){super(O,ie),this._table=ke}}return N.\u0275fac=function(O){return new(O||N)(s.Y36(s.Rgc),s.Y36(s.ZZ4),s.Y36(Fe,8))},N.\u0275dir=s.lG2({type:N,selectors:[["","cdkRowDef",""]],inputs:{columns:["cdkRowDefColumns","columns"],when:["cdkRowDefWhen","when"]},features:[s.qOj]}),N})(),Je=(()=>{class N{constructor(O){this._viewContainer=O,N.mostRecentCellOutlet=this}ngOnDestroy(){N.mostRecentCellOutlet===this&&(N.mostRecentCellOutlet=null)}}return N.mostRecentCellOutlet=null,N.\u0275fac=function(O){return new(O||N)(s.Y36(s.s_b))},N.\u0275dir=s.lG2({type:N,selectors:[["","cdkCellOutlet",""]]}),N})(),B=(()=>{class N{}return N.\u0275fac=function(O){return new(O||N)},N.\u0275cmp=s.Xpm({type:N,selectors:[["cdk-header-row"],["tr","cdk-header-row",""]],hostAttrs:["role","row",1,"cdk-header-row"],decls:1,vars:0,consts:[["cdkCellOutlet",""]],template:function(O,ie){1&O&&s.GkF(0,0)},dependencies:[Je],encapsulation:2}),N})(),j=(()=>{class N{}return N.\u0275fac=function(O){return new(O||N)},N.\u0275cmp=s.Xpm({type:N,selectors:[["cdk-row"],["tr","cdk-row",""]],hostAttrs:["role","row",1,"cdk-row"],decls:1,vars:0,consts:[["cdkCellOutlet",""]],template:function(O,ie){1&O&&s.GkF(0,0)},dependencies:[Je],encapsulation:2}),N})(),b=(()=>{class N{constructor(O){this.templateRef=O,this._contentClassName="cdk-no-data-row"}}return N.\u0275fac=function(O){return new(O||N)(s.Y36(s.Rgc))},N.\u0275dir=s.lG2({type:N,selectors:[["ng-template","cdkNoDataRow",""]]}),N})();
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */const T=["top","bottom","left","right"];class P{constructor(re,O,ie,ke,et=!0,Ct=!0,$t){this._isNativeHtmlTable=re,this._stickCellCss=O,this.direction=ie,this._coalescedStyleScheduler=ke,this._isBrowser=et,this._needsPositionStickyOnElement=Ct,this._positionListener=$t,this._cachedCellWidths=[],this._borderCellCss={top:`${O}-border-elem-top`,bottom:`${O}-border-elem-bottom`,left:`${O}-border-elem-left`,right:`${O}-border-elem-right`}}clearStickyPositioning(re,O){const ie=[];for(const ke of re)if(ke.nodeType===ke.ELEMENT_NODE){ie.push(ke);for(let et=0;et<ke.children.length;et++)ie.push(ke.children[et])}this._coalescedStyleScheduler.schedule(()=>{for(const ke of ie)this._removeStickyStyle(ke,O)})}updateStickyColumns(re,O,ie,ke=!0){if(!re.length||!this._isBrowser||!O.some(xn=>xn)&&!ie.some(xn=>xn))return void(this._positionListener&&(this._positionListener.stickyColumnsUpdated({sizes:[]}),this._positionListener.stickyEndColumnsUpdated({sizes:[]})));const et=re[0],Ct=et.children.length,$t=this._getCellWidths(et,ke),Xt=this._getStickyStartColumnPositions($t,O),un=this._getStickyEndColumnPositions($t,ie),tn=O.lastIndexOf(!0),Cn=ie.indexOf(!0);this._coalescedStyleScheduler.schedule(()=>{const xn="rtl"===this.direction,qn=xn?"right":"left",Ai=xn?"left":"right";for(const zn of re)for(let Hn=0;Hn<Ct;Hn++){const Ti=zn.children[Hn];O[Hn]&&this._addStickyStyle(Ti,qn,Xt[Hn],Hn===tn),ie[Hn]&&this._addStickyStyle(Ti,Ai,un[Hn],Hn===Cn)}this._positionListener&&(this._positionListener.stickyColumnsUpdated({sizes:-1===tn?[]:$t.slice(0,tn+1).map((zn,Hn)=>O[Hn]?zn:null)}),this._positionListener.stickyEndColumnsUpdated({sizes:-1===Cn?[]:$t.slice(Cn).map((zn,Hn)=>ie[Hn+Cn]?zn:null).reverse()}))})}stickRows(re,O,ie){if(!this._isBrowser)return;const ke="bottom"===ie?re.slice().reverse():re,et="bottom"===ie?O.slice().reverse():O,Ct=[],$t=[],Xt=[];for(let tn=0,Cn=0;tn<ke.length;tn++){if(!et[tn])continue;Ct[tn]=Cn;const xn=ke[tn];Xt[tn]=this._isNativeHtmlTable?Array.from(xn.children):[xn];const qn=xn.getBoundingClientRect().height;Cn+=qn,$t[tn]=qn}const un=et.lastIndexOf(!0);this._coalescedStyleScheduler.schedule(()=>{for(let tn=0;tn<ke.length;tn++){if(!et[tn])continue;const Cn=Ct[tn],xn=tn===un;for(const qn of Xt[tn])this._addStickyStyle(qn,ie,Cn,xn)}"top"===ie?this._positionListener?.stickyHeaderRowsUpdated({sizes:$t,offsets:Ct,elements:Xt}):this._positionListener?.stickyFooterRowsUpdated({sizes:$t,offsets:Ct,elements:Xt})})}updateStickyFooterContainer(re,O){if(!this._isNativeHtmlTable)return;const ie=re.querySelector("tfoot");this._coalescedStyleScheduler.schedule(()=>{O.some(ke=>!ke)?this._removeStickyStyle(ie,["bottom"]):this._addStickyStyle(ie,"bottom",0,!1)})}_removeStickyStyle(re,O){for(const ke of O)re.style[ke]="",re.classList.remove(this._borderCellCss[ke]);T.some(ke=>-1===O.indexOf(ke)&&re.style[ke])?re.style.zIndex=this._getCalculatedZIndex(re):(re.style.zIndex="",this._needsPositionStickyOnElement&&(re.style.position=""),re.classList.remove(this._stickCellCss))}_addStickyStyle(re,O,ie,ke){re.classList.add(this._stickCellCss),ke&&re.classList.add(this._borderCellCss[O]),re.style[O]=`${ie}px`,re.style.zIndex=this._getCalculatedZIndex(re),this._needsPositionStickyOnElement&&(re.style.cssText+="position: -webkit-sticky; position: sticky; ")}_getCalculatedZIndex(re){const O={top:100,bottom:10,left:1,right:1};let ie=0;for(const ke of T)re.style[ke]&&(ie+=O[ke]);return ie?`${ie}`:""}_getCellWidths(re,O=!0){if(!O&&this._cachedCellWidths.length)return this._cachedCellWidths;const ie=[],ke=re.children;for(let et=0;et<ke.length;et++)ie.push(ke[et].getBoundingClientRect().width);return this._cachedCellWidths=ie,ie}_getStickyStartColumnPositions(re,O){const ie=[];let ke=0;for(let et=0;et<re.length;et++)O[et]&&(ie[et]=ke,ke+=re[et]);return ie}_getStickyEndColumnPositions(re,O){const ie=[];let ke=0;for(let et=re.length;et>0;et--)O[et]&&(ie[et]=ke,ke+=re[et]);return ie}}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
const qt=new s.OlP("CDK_SPL");
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */let Qe=(()=>{class N{constructor(O,ie){this.viewContainer=O,this.elementRef=ie}}return N.\u0275fac=function(O){return new(O||N)(s.Y36(s.s_b),s.Y36(s.SBq))},N.\u0275dir=s.lG2({type:N,selectors:[["","rowOutlet",""]]}),N})(),he=(()=>{class N{constructor(O,ie){this.viewContainer=O,this.elementRef=ie}}return N.\u0275fac=function(O){return new(O||N)(s.Y36(s.s_b),s.Y36(s.SBq))},N.\u0275dir=s.lG2({type:N,selectors:[["","headerRowOutlet",""]]}),N})(),ge=(()=>{class N{constructor(O,ie){this.viewContainer=O,this.elementRef=ie}}return N.\u0275fac=function(O){return new(O||N)(s.Y36(s.s_b),s.Y36(s.SBq))},N.\u0275dir=s.lG2({type:N,selectors:[["","footerRowOutlet",""]]}),N})(),Ue=(()=>{class N{constructor(O,ie){this.viewContainer=O,this.elementRef=ie}}return N.\u0275fac=function(O){return new(O||N)(s.Y36(s.s_b),s.Y36(s.SBq))},N.\u0275dir=s.lG2({type:N,selectors:[["","noDataRowOutlet",""]]}),N})(),Y=(()=>{class N{constructor(O,ie,ke,et,Ct,$t,Xt,un,tn,Cn,xn,qn){this._differs=O,this._changeDetectorRef=ie,this._elementRef=ke,this._dir=Ct,this._platform=Xt,this._viewRepeater=un,this._coalescedStyleScheduler=tn,this._viewportRuler=Cn,this._stickyPositioningListener=xn,this._ngZone=qn,this._onDestroy=new Ke.x,this._columnDefsByName=new Map,this._customColumnDefs=new Set,this._customRowDefs=new Set,this._customHeaderRowDefs=new Set,this._customFooterRowDefs=new Set,this._headerRowDefChanged=!0,this._footerRowDefChanged=!0,this._stickyColumnStylesNeedReset=!0,this._forceRecalculateCellWidths=!0,this._cachedRenderRowsMap=new Map,this.stickyCssClass="cdk-table-sticky",this.needsPositionStickyOnElement=!0,this._isShowingNoDataRow=!1,this._multiTemplateDataRows=!1,this._fixedLayout=!1,this.contentChanged=new s.vpe,this.viewChange=new qe.X({start:0,end:Number.MAX_VALUE}),et||this._elementRef.nativeElement.setAttribute("role","table"),this._document=$t,this._isNativeHtmlTable="TABLE"===this._elementRef.nativeElement.nodeName}get trackBy(){return this._trackByFn}set trackBy(O){this._trackByFn=O}get dataSource(){return this._dataSource}set dataSource(O){this._dataSource!==O&&this._switchDataSource(O)}get multiTemplateDataRows(){return this._multiTemplateDataRows}set multiTemplateDataRows(O){this._multiTemplateDataRows=(0,M.Ig)(O),this._rowOutlet&&this._rowOutlet.viewContainer.length&&(this._forceRenderDataRows(),this.updateStickyColumnStyles())}get fixedLayout(){return this._fixedLayout}set fixedLayout(O){this._fixedLayout=(0,M.Ig)(O),this._forceRecalculateCellWidths=!0,this._stickyColumnStylesNeedReset=!0}ngOnInit(){this._setupStickyStyler(),this._isNativeHtmlTable&&this._applyNativeTableSections(),this._dataDiffer=this._differs.find([]).create((O,ie)=>this.trackBy?this.trackBy(ie.dataIndex,ie.data):ie),this._viewportRuler.change().pipe((0,ee.R)(this._onDestroy)).subscribe(()=>{this._forceRecalculateCellWidths=!0})}ngAfterContentChecked(){this._cacheRowDefs(),this._cacheColumnDefs();const ie=this._renderUpdatedColumns()||this._headerRowDefChanged||this._footerRowDefChanged;this._stickyColumnStylesNeedReset=this._stickyColumnStylesNeedReset||ie,this._forceRecalculateCellWidths=ie,this._headerRowDefChanged&&(this._forceRenderHeaderRows(),this._headerRowDefChanged=!1),this._footerRowDefChanged&&(this._forceRenderFooterRows(),this._footerRowDefChanged=!1),this.dataSource&&this._rowDefs.length>0&&!this._renderChangeSubscription?this._observeRenderChanges():this._stickyColumnStylesNeedReset&&this.updateStickyColumnStyles(),this._checkStickyStates()}ngOnDestroy(){[this._rowOutlet.viewContainer,this._headerRowOutlet.viewContainer,this._footerRowOutlet.viewContainer,this._cachedRenderRowsMap,this._customColumnDefs,this._customRowDefs,this._customHeaderRowDefs,this._customFooterRowDefs,this._columnDefsByName].forEach(O=>{O.clear()}),this._headerRowDefs=[],this._footerRowDefs=[],this._defaultRowDef=null,this._onDestroy.next(),this._onDestroy.complete(),X(this.dataSource)&&this.dataSource.disconnect(this)}renderRows(){this._renderRows=this._getAllRenderRows();const O=this._dataDiffer.diff(this._renderRows);if(!O)return this._updateNoDataRow(),void this.contentChanged.next();const ie=this._rowOutlet.viewContainer;this._viewRepeater.applyChanges(O,ie,(ke,et,Ct)=>this._getEmbeddedViewArgs(ke.item,Ct),ke=>ke.item.data,ke=>{1===ke.operation&&ke.context&&this._renderCellTemplateForItem(ke.record.item.rowDef,ke.context)}),this._updateRowIndexContext(),O.forEachIdentityChange(ke=>{ie.get(ke.currentIndex).context.$implicit=ke.item.data}),this._updateNoDataRow(),this._ngZone&&s.R0b.isInAngularZone()?this._ngZone.onStable.pipe((0,ae.q)(1),(0,ee.R)(this._onDestroy)).subscribe(()=>{this.updateStickyColumnStyles()}):this.updateStickyColumnStyles(),this.contentChanged.next()}addColumnDef(O){this._customColumnDefs.add(O)}removeColumnDef(O){this._customColumnDefs.delete(O)}addRowDef(O){this._customRowDefs.add(O)}removeRowDef(O){this._customRowDefs.delete(O)}addHeaderRowDef(O){this._customHeaderRowDefs.add(O),this._headerRowDefChanged=!0}removeHeaderRowDef(O){this._customHeaderRowDefs.delete(O),this._headerRowDefChanged=!0}addFooterRowDef(O){this._customFooterRowDefs.add(O),this._footerRowDefChanged=!0}removeFooterRowDef(O){this._customFooterRowDefs.delete(O),this._footerRowDefChanged=!0}setNoDataRow(O){this._customNoDataRow=O}updateStickyHeaderRowStyles(){const O=this._getRenderedRows(this._headerRowOutlet),ke=this._elementRef.nativeElement.querySelector("thead");ke&&(ke.style.display=O.length?"":"none");const et=this._headerRowDefs.map(Ct=>Ct.sticky);this._stickyStyler.clearStickyPositioning(O,["top"]),this._stickyStyler.stickRows(O,et,"top"),this._headerRowDefs.forEach(Ct=>Ct.resetStickyChanged())}updateStickyFooterRowStyles(){const O=this._getRenderedRows(this._footerRowOutlet),ke=this._elementRef.nativeElement.querySelector("tfoot");ke&&(ke.style.display=O.length?"":"none");const et=this._footerRowDefs.map(Ct=>Ct.sticky);this._stickyStyler.clearStickyPositioning(O,["bottom"]),this._stickyStyler.stickRows(O,et,"bottom"),this._stickyStyler.updateStickyFooterContainer(this._elementRef.nativeElement,et),this._footerRowDefs.forEach(Ct=>Ct.resetStickyChanged())}updateStickyColumnStyles(){const O=this._getRenderedRows(this._headerRowOutlet),ie=this._getRenderedRows(this._rowOutlet),ke=this._getRenderedRows(this._footerRowOutlet);(this._isNativeHtmlTable&&!this._fixedLayout||this._stickyColumnStylesNeedReset)&&(this._stickyStyler.clearStickyPositioning([...O,...ie,...ke],["left","right"]),this._stickyColumnStylesNeedReset=!1),O.forEach((et,Ct)=>{this._addStickyColumnStyles([et],this._headerRowDefs[Ct])}),this._rowDefs.forEach(et=>{const Ct=[];for(let $t=0;$t<ie.length;$t++)this._renderRows[$t].rowDef===et&&Ct.push(ie[$t]);this._addStickyColumnStyles(Ct,et)}),ke.forEach((et,Ct)=>{this._addStickyColumnStyles([et],this._footerRowDefs[Ct])}),Array.from(this._columnDefsByName.values()).forEach(et=>et.resetStickyChanged())}_getAllRenderRows(){const O=[],ie=this._cachedRenderRowsMap;this._cachedRenderRowsMap=new Map;for(let ke=0;ke<this._data.length;ke++){let et=this._data[ke];const Ct=this._getRenderRowsForData(et,ke,ie.get(et));this._cachedRenderRowsMap.has(et)||this._cachedRenderRowsMap.set(et,new WeakMap);for(let $t=0;$t<Ct.length;$t++){let Xt=Ct[$t];const un=this._cachedRenderRowsMap.get(Xt.data);un.has(Xt.rowDef)?un.get(Xt.rowDef).push(Xt):un.set(Xt.rowDef,[Xt]),O.push(Xt)}}return O}_getRenderRowsForData(O,ie,ke){return this._getRowDefs(O,ie).map(Ct=>{const $t=ke&&ke.has(Ct)?ke.get(Ct):[];if($t.length){const Xt=$t.shift();return Xt.dataIndex=ie,Xt}return{data:O,rowDef:Ct,dataIndex:ie}})}_cacheColumnDefs(){this._columnDefsByName.clear(),Re(this._getOwnDefs(this._contentColumnDefs),this._customColumnDefs).forEach(ie=>{this._columnDefsByName.has(ie.name),this._columnDefsByName.set(ie.name,ie)})}_cacheRowDefs(){this._headerRowDefs=Re(this._getOwnDefs(this._contentHeaderRowDefs),this._customHeaderRowDefs),this._footerRowDefs=Re(this._getOwnDefs(this._contentFooterRowDefs),this._customFooterRowDefs),this._rowDefs=Re(this._getOwnDefs(this._contentRowDefs),this._customRowDefs);const O=this._rowDefs.filter(ie=>!ie.when);this._defaultRowDef=O[0]}_renderUpdatedColumns(){const O=(Ct,$t)=>Ct||!!$t.getColumnsDiff(),ie=this._rowDefs.reduce(O,!1);ie&&this._forceRenderDataRows();const ke=this._headerRowDefs.reduce(O,!1);ke&&this._forceRenderHeaderRows();const et=this._footerRowDefs.reduce(O,!1);return et&&this._forceRenderFooterRows(),ie||ke||et}_switchDataSource(O){this._data=[],X(this.dataSource)&&this.dataSource.disconnect(this),this._renderChangeSubscription&&(this._renderChangeSubscription.unsubscribe(),this._renderChangeSubscription=null),O||(this._dataDiffer&&this._dataDiffer.diff([]),this._rowOutlet.viewContainer.clear()),this._dataSource=O}_observeRenderChanges(){if(!this.dataSource)return;let O;X(this.dataSource)?O=this.dataSource.connect(this):function de(N){return!!N&&(N instanceof ht.y||(0,mt.m)(N.lift)&&(0,mt.m)(N.subscribe))}(this.dataSource)?O=this.dataSource:Array.isArray(this.dataSource)&&(O=(0,Q.of)(this.dataSource)),this._renderChangeSubscription=O.pipe((0,ee.R)(this._onDestroy)).subscribe(ie=>{this._data=ie||[],this.renderRows()})}_forceRenderHeaderRows(){this._headerRowOutlet.viewContainer.length>0&&this._headerRowOutlet.viewContainer.clear(),this._headerRowDefs.forEach((O,ie)=>this._renderRow(this._headerRowOutlet,O,ie)),this.updateStickyHeaderRowStyles()}_forceRenderFooterRows(){this._footerRowOutlet.viewContainer.length>0&&this._footerRowOutlet.viewContainer.clear(),this._footerRowDefs.forEach((O,ie)=>this._renderRow(this._footerRowOutlet,O,ie)),this.updateStickyFooterRowStyles()}_addStickyColumnStyles(O,ie){const ke=Array.from(ie.columns||[]).map($t=>this._columnDefsByName.get($t)),et=ke.map($t=>$t.sticky),Ct=ke.map($t=>$t.stickyEnd);this._stickyStyler.updateStickyColumns(O,et,Ct,!this._fixedLayout||this._forceRecalculateCellWidths)}_getRenderedRows(O){const ie=[];for(let ke=0;ke<O.viewContainer.length;ke++){const et=O.viewContainer.get(ke);ie.push(et.rootNodes[0])}return ie}_getRowDefs(O,ie){if(1==this._rowDefs.length)return[this._rowDefs[0]];let ke=[];if(this.multiTemplateDataRows)ke=this._rowDefs.filter(et=>!et.when||et.when(ie,O));else{let et=this._rowDefs.find(Ct=>Ct.when&&Ct.when(ie,O))||this._defaultRowDef;et&&ke.push(et)}return ke}_getEmbeddedViewArgs(O,ie){return{templateRef:O.rowDef.template,context:{$implicit:O.data},index:ie}}_renderRow(O,ie,ke,et={}){const Ct=O.viewContainer.createEmbeddedView(ie.template,et,ke);return this._renderCellTemplateForItem(ie,et),Ct}_renderCellTemplateForItem(O,ie){for(let ke of this._getCellTemplates(O))Je.mostRecentCellOutlet&&Je.mostRecentCellOutlet._viewContainer.createEmbeddedView(ke,ie);this._changeDetectorRef.markForCheck()}_updateRowIndexContext(){const O=this._rowOutlet.viewContainer;for(let ie=0,ke=O.length;ie<ke;ie++){const Ct=O.get(ie).context;Ct.count=ke,Ct.first=0===ie,Ct.last=ie===ke-1,Ct.even=ie%2==0,Ct.odd=!Ct.even,this.multiTemplateDataRows?(Ct.dataIndex=this._renderRows[ie].dataIndex,Ct.renderIndex=ie):Ct.index=this._renderRows[ie].dataIndex}}_getCellTemplates(O){return O&&O.columns?Array.from(O.columns,ie=>{const ke=this._columnDefsByName.get(ie);return O.extractCellTemplate(ke)}):[]}_applyNativeTableSections(){const O=this._document.createDocumentFragment(),ie=[{tag:"thead",outlets:[this._headerRowOutlet]},{tag:"tbody",outlets:[this._rowOutlet,this._noDataRowOutlet]},{tag:"tfoot",outlets:[this._footerRowOutlet]}];for(const ke of ie){const et=this._document.createElement(ke.tag);et.setAttribute("role","rowgroup");for(const Ct of ke.outlets)et.appendChild(Ct.elementRef.nativeElement);O.appendChild(et)}this._elementRef.nativeElement.appendChild(O)}_forceRenderDataRows(){this._dataDiffer.diff([]),this._rowOutlet.viewContainer.clear(),this.renderRows()}_checkStickyStates(){const O=(ie,ke)=>ie||ke.hasStickyChanged();this._headerRowDefs.reduce(O,!1)&&this.updateStickyHeaderRowStyles(),this._footerRowDefs.reduce(O,!1)&&this.updateStickyFooterRowStyles(),Array.from(this._columnDefsByName.values()).reduce(O,!1)&&(this._stickyColumnStylesNeedReset=!0,this.updateStickyColumnStyles())}_setupStickyStyler(){this._stickyStyler=new P(this._isNativeHtmlTable,this.stickyCssClass,this._dir?this._dir.value:"ltr",this._coalescedStyleScheduler,this._platform.isBrowser,this.needsPositionStickyOnElement,this._stickyPositioningListener),(this._dir?this._dir.change:(0,Q.of)()).pipe((0,ee.R)(this._onDestroy)).subscribe(ie=>{this._stickyStyler.direction=ie,this.updateStickyColumnStyles()})}_getOwnDefs(O){return O.filter(ie=>!ie._table||ie._table===this)}_updateNoDataRow(){const O=this._customNoDataRow||this._noDataRow;if(!O)return;const ie=0===this._rowOutlet.viewContainer.length;if(ie===this._isShowingNoDataRow)return;const ke=this._noDataRowOutlet.viewContainer;if(ie){const et=ke.createEmbeddedView(O.templateRef),Ct=et.rootNodes[0];1===et.rootNodes.length&&Ct?.nodeType===this._document.ELEMENT_NODE&&(Ct.setAttribute("role","row"),Ct.classList.add(O._contentClassName))}else ke.clear();this._isShowingNoDataRow=ie}}return N.\u0275fac=function(O){return new(O||N)(s.Y36(s.ZZ4),s.Y36(s.sBO),s.Y36(s.SBq),s.$8M("role"),s.Y36(v.Is,8),s.Y36(xe.K0),s.Y36(Ge.t4),s.Y36(te),s.Y36(at),s.Y36(Ve.rL),s.Y36(qt,12),s.Y36(s.R0b,8))},N.\u0275cmp=s.Xpm({type:N,selectors:[["cdk-table"],["table","cdk-table",""]],contentQueries:function(O,ie,ke){if(1&O&&(s.Suo(ke,b,5),s.Suo(ke,ft,5),s.Suo(ke,Mt,5),s.Suo(ke,ct,5),s.Suo(ke,Yt,5)),2&O){let et;s.iGM(et=s.CRH())&&(ie._noDataRow=et.first),s.iGM(et=s.CRH())&&(ie._contentColumnDefs=et),s.iGM(et=s.CRH())&&(ie._contentRowDefs=et),s.iGM(et=s.CRH())&&(ie._contentHeaderRowDefs=et),s.iGM(et=s.CRH())&&(ie._contentFooterRowDefs=et)}},viewQuery:function(O,ie){if(1&O&&(s.Gf(Qe,7),s.Gf(he,7),s.Gf(ge,7),s.Gf(Ue,7)),2&O){let ke;s.iGM(ke=s.CRH())&&(ie._rowOutlet=ke.first),s.iGM(ke=s.CRH())&&(ie._headerRowOutlet=ke.first),s.iGM(ke=s.CRH())&&(ie._footerRowOutlet=ke.first),s.iGM(ke=s.CRH())&&(ie._noDataRowOutlet=ke.first)}},hostAttrs:[1,"cdk-table"],hostVars:2,hostBindings:function(O,ie){2&O&&s.ekj("cdk-table-fixed-layout",ie.fixedLayout)},inputs:{trackBy:"trackBy",dataSource:"dataSource",multiTemplateDataRows:"multiTemplateDataRows",fixedLayout:"fixedLayout"},outputs:{contentChanged:"contentChanged"},exportAs:["cdkTable"],features:[s._Bn([{provide:Fe,useExisting:N},{provide:te,useClass:ue},{provide:at,useClass:bt},{provide:qt,useValue:null}])],ngContentSelectors:Be,decls:6,vars:0,consts:[["headerRowOutlet",""],["rowOutlet",""],["noDataRowOutlet",""],["footerRowOutlet",""]],template:function(O,ie){1&O&&(s.F$t(Ee),s.Hsn(0),s.Hsn(1,1),s.GkF(2,0)(3,1)(4,2)(5,3))},dependencies:[Qe,he,ge,Ue],styles:[".cdk-table-fixed-layout{table-layout:fixed}"],encapsulation:2}),N})();function Re(N,re){return N.concat(Array.from(re))}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */let Lt=(()=>{class N{}return N.\u0275fac=function(O){return new(O||N)},N.\u0275mod=s.oAB({type:N}),N.\u0275inj=s.cJS({imports:[Ve.Cl]}),N})();
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */var bn=y(3238),Zn=y(6451),$n=y(9841),wn=y(4004);
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */const sn=[[["caption"]],[["colgroup"],["col"]]],Qt=["caption","colgroup, col"];let At=(()=>{class N extends Y{constructor(){super(...arguments),this.stickyCssClass="mat-table-sticky",this.needsPositionStickyOnElement=!1}}return N.\u0275fac=function(){let re;return function(ie){return(re||(re=s.n5z(N)))(ie||N)}}(),N.\u0275cmp=s.Xpm({type:N,selectors:[["mat-table"],["table","mat-table",""]],hostAttrs:[1,"mat-table"],hostVars:2,hostBindings:function(O,ie){2&O&&s.ekj("mat-table-fixed-layout",ie.fixedLayout)},exportAs:["matTable"],features:[s._Bn([{provide:te,useClass:ue},{provide:Y,useExisting:N},{provide:Fe,useExisting:N},{provide:at,useClass:bt},{provide:qt,useValue:null}]),s.qOj],ngContentSelectors:Qt,decls:6,vars:0,consts:[["headerRowOutlet",""],["rowOutlet",""],["noDataRowOutlet",""],["footerRowOutlet",""]],template:function(O,ie){1&O&&(s.F$t(sn),s.Hsn(0),s.Hsn(1,1),s.GkF(2,0)(3,1)(4,2)(5,3))},dependencies:[Qe,he,ge,Ue],styles:["mat-table{display:block}mat-header-row{min-height:56px}mat-row,mat-footer-row{min-height:48px}mat-row,mat-header-row,mat-footer-row{display:flex;border-width:0;border-bottom-width:1px;border-style:solid;align-items:center;box-sizing:border-box}mat-cell:first-of-type,mat-header-cell:first-of-type,mat-footer-cell:first-of-type{padding-left:24px}[dir=rtl] mat-cell:first-of-type:not(:only-of-type),[dir=rtl] mat-header-cell:first-of-type:not(:only-of-type),[dir=rtl] mat-footer-cell:first-of-type:not(:only-of-type){padding-left:0;padding-right:24px}mat-cell:last-of-type,mat-header-cell:last-of-type,mat-footer-cell:last-of-type{padding-right:24px}[dir=rtl] mat-cell:last-of-type:not(:only-of-type),[dir=rtl] mat-header-cell:last-of-type:not(:only-of-type),[dir=rtl] mat-footer-cell:last-of-type:not(:only-of-type){padding-right:0;padding-left:24px}mat-cell,mat-header-cell,mat-footer-cell{flex:1;display:flex;align-items:center;overflow:hidden;word-wrap:break-word;min-height:inherit}table.mat-table{border-spacing:0}tr.mat-header-row{height:56px}tr.mat-row,tr.mat-footer-row{height:48px}th.mat-header-cell{text-align:left}[dir=rtl] th.mat-header-cell{text-align:right}th.mat-header-cell,td.mat-cell,td.mat-footer-cell{padding:0;border-bottom-width:1px;border-bottom-style:solid}th.mat-header-cell:first-of-type,td.mat-cell:first-of-type,td.mat-footer-cell:first-of-type{padding-left:24px}[dir=rtl] th.mat-header-cell:first-of-type:not(:only-of-type),[dir=rtl] td.mat-cell:first-of-type:not(:only-of-type),[dir=rtl] td.mat-footer-cell:first-of-type:not(:only-of-type){padding-left:0;padding-right:24px}th.mat-header-cell:last-of-type,td.mat-cell:last-of-type,td.mat-footer-cell:last-of-type{padding-right:24px}[dir=rtl] th.mat-header-cell:last-of-type:not(:only-of-type),[dir=rtl] td.mat-cell:last-of-type:not(:only-of-type),[dir=rtl] td.mat-footer-cell:last-of-type:not(:only-of-type){padding-right:0;padding-left:24px}.mat-table-sticky{position:sticky !important}.mat-table-fixed-layout{table-layout:fixed}"],encapsulation:2}),N})(),Jt=(()=>{class N extends Le{}return N.\u0275fac=function(){let re;return function(ie){return(re||(re=s.n5z(N)))(ie||N)}}(),N.\u0275dir=s.lG2({type:N,selectors:[["","matCellDef",""]],features:[s._Bn([{provide:Le,useExisting:N}]),s.qOj]}),N})(),Oe=(()=>{class N extends Ye{}return N.\u0275fac=function(){let re;return function(ie){return(re||(re=s.n5z(N)))(ie||N)}}(),N.\u0275dir=s.lG2({type:N,selectors:[["","matHeaderCellDef",""]],features:[s._Bn([{provide:Ye,useExisting:N}]),s.qOj]}),N})(),ne=(()=>{class N extends ft{get name(){return this._name}set name(O){this._setNameInput(O)}_updateColumnCssClassName(){super._updateColumnCssClassName(),this._columnCssClassName.push(`mat-column-${this.cssClassFriendlyName}`)}}return N.\u0275fac=function(){let re;return function(ie){return(re||(re=s.n5z(N)))(ie||N)}}(),N.\u0275dir=s.lG2({type:N,selectors:[["","matColumnDef",""]],inputs:{sticky:"sticky",name:["matColumnDef","name"]},features:[s._Bn([{provide:ft,useExisting:N},{provide:"MAT_SORT_HEADER_COLUMN_DEF",useExisting:N}]),s.qOj]}),N})(),Pe=(()=>{class N extends Pt{}return N.\u0275fac=function(){let re;return function(ie){return(re||(re=s.n5z(N)))(ie||N)}}(),N.\u0275dir=s.lG2({type:N,selectors:[["mat-header-cell"],["th","mat-header-cell",""]],hostAttrs:["role","columnheader",1,"mat-header-cell"],features:[s.qOj]}),N})(),Ot=(()=>{class N extends Ce{}return N.\u0275fac=function(){let re;return function(ie){return(re||(re=s.n5z(N)))(ie||N)}}(),N.\u0275dir=s.lG2({type:N,selectors:[["mat-cell"],["td","mat-cell",""]],hostAttrs:["role","gridcell",1,"mat-cell"],features:[s.qOj]}),N})(),hn=(()=>{class N extends ct{}return N.\u0275fac=function(){let re;return function(ie){return(re||(re=s.n5z(N)))(ie||N)}}(),N.\u0275dir=s.lG2({type:N,selectors:[["","matHeaderRowDef",""]],inputs:{columns:["matHeaderRowDef","columns"],sticky:["matHeaderRowDefSticky","sticky"]},features:[s._Bn([{provide:ct,useExisting:N}]),s.qOj]}),N})(),Ft=(()=>{class N extends Mt{}return N.\u0275fac=function(){let re;return function(ie){return(re||(re=s.n5z(N)))(ie||N)}}(),N.\u0275dir=s.lG2({type:N,selectors:[["","matRowDef",""]],inputs:{columns:["matRowDefColumns","columns"],when:["matRowDefWhen","when"]},features:[s._Bn([{provide:Mt,useExisting:N}]),s.qOj]}),N})(),ai=(()=>{class N extends B{}return N.\u0275fac=function(){let re;return function(ie){return(re||(re=s.n5z(N)))(ie||N)}}(),N.\u0275cmp=s.Xpm({type:N,selectors:[["mat-header-row"],["tr","mat-header-row",""]],hostAttrs:["role","row",1,"mat-header-row"],exportAs:["matHeaderRow"],features:[s._Bn([{provide:B,useExisting:N}]),s.qOj],decls:1,vars:0,consts:[["cdkCellOutlet",""]],template:function(O,ie){1&O&&s.GkF(0,0)},dependencies:[Je],encapsulation:2}),N})(),hi=(()=>{class N extends j{}return N.\u0275fac=function(){let re;return function(ie){return(re||(re=s.n5z(N)))(ie||N)}}(),N.\u0275cmp=s.Xpm({type:N,selectors:[["mat-row"],["tr","mat-row",""]],hostAttrs:["role","row",1,"mat-row"],exportAs:["matRow"],features:[s._Bn([{provide:j,useExisting:N}]),s.qOj],decls:1,vars:0,consts:[["cdkCellOutlet",""]],template:function(O,ie){1&O&&s.GkF(0,0)},dependencies:[Je],encapsulation:2}),N})(),Ei=(()=>{class N{}return N.\u0275fac=function(O){return new(O||N)},N.\u0275mod=s.oAB({type:N}),N.\u0275inj=s.cJS({imports:[Lt,bn.BQ,bn.BQ]}),N})();
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */class Ri extends class gi extends class G{}{constructor(re=[]){super(),this._renderData=new qe.X([]),this._filter=new qe.X(""),this._internalPageChanges=new Ke.x,this._renderChangesSubscription=null,this.sortingDataAccessor=(O,ie)=>{const ke=O[ie];if((0,M.t6)(ke)){const et=Number(ke);return et<9007199254740991?et:ke}return ke},this.sortData=(O,ie)=>{const ke=ie.active,et=ie.direction;return ke&&""!=et?O.sort((Ct,$t)=>{let Xt=this.sortingDataAccessor(Ct,ke),un=this.sortingDataAccessor($t,ke);const tn=typeof Xt,Cn=typeof un;tn!==Cn&&("number"===tn&&(Xt+=""),"number"===Cn&&(un+=""));let xn=0;return null!=Xt&&null!=un?Xt>un?xn=1:Xt<un&&(xn=-1):null!=Xt?xn=1:null!=un&&(xn=-1),xn*("asc"==et?1:-1)}):O},this.filterPredicate=(O,ie)=>{const ke=Object.keys(O).reduce((Ct,$t)=>Ct+O[$t]+"\u25ec","").toLowerCase(),et=ie.trim().toLowerCase();return-1!=ke.indexOf(et)},this._data=new qe.X(re),this._updateChangeSubscription()}get data(){return this._data.value}set data(re){re=Array.isArray(re)?re:[],this._data.next(re),this._renderChangesSubscription||this._filterData(re)}get filter(){return this._filter.value}set filter(re){this._filter.next(re),this._renderChangesSubscription||this._filterData(this.data)}get sort(){return this._sort}set sort(re){this._sort=re,this._updateChangeSubscription()}get paginator(){return this._paginator}set paginator(re){this._paginator=re,this._updateChangeSubscription()}_updateChangeSubscription(){const re=this._sort?(0,Zn.T)(this._sort.sortChange,this._sort.initialized):(0,Q.of)(null),O=this._paginator?(0,Zn.T)(this._paginator.page,this._internalPageChanges,this._paginator.initialized):(0,Q.of)(null),ke=(0,$n.a)([this._data,this._filter]).pipe((0,wn.U)(([$t])=>this._filterData($t))),et=(0,$n.a)([ke,re]).pipe((0,wn.U)(([$t])=>this._orderData($t))),Ct=(0,$n.a)([et,O]).pipe((0,wn.U)(([$t])=>this._pageData($t)));this._renderChangesSubscription?.unsubscribe(),this._renderChangesSubscription=Ct.subscribe($t=>this._renderData.next($t))}_filterData(re){return this.filteredData=null==this.filter||""===this.filter?re:re.filter(O=>this.filterPredicate(O,this.filter)),this.paginator&&this._updatePaginator(this.filteredData.length),this.filteredData}_orderData(re){return this.sort?this.sortData(re.slice(),this.sort):re}_pageData(re){if(!this.paginator)return re;const O=this.paginator.pageIndex*this.paginator.pageSize;return re.slice(O,O+this.paginator.pageSize)}_updatePaginator(re){Promise.resolve().then(()=>{const O=this.paginator;if(O&&(O.length=re,O.pageIndex>0)){const ie=Math.ceil(O.length/O.pageSize)-1||0,ke=Math.min(O.pageIndex,ie);ke!==O.pageIndex&&(O.pageIndex=ke,this._internalPageChanges.next())}})}connect(){return this._renderChangesSubscription||this._updateChangeSubscription(),this._renderData}disconnect(){this._renderChangesSubscription?.unsubscribe(),this._renderChangesSubscription=null}}{}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */},1516:(St,He,y)=>{y.d(He,{PW:()=>rr});var s=y(4650),v=y(1481),M=y(7340);
/**
     * @license Angular v14.0.1
     * (c) 2010-2022 Google LLC. https://angular.io/
     * License: MIT
     */
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */const G=!1;function K(R){return new s.vHH(3e3,G)}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
function at(){return typeof window<"u"&&typeof window.document<"u"}function bt(){return typeof process<"u"&&"[object process]"==={}.toString.call(process)}function nt(R){switch(R.length){case 0:return new M.ZN;case 1:return R[0];default:return new M.ZE(R)}}function rt(R,l,u,D,k=new Map,W=new Map){const be=[],Ie=[];let Ze=-1,dt=null;if(D.forEach(Vt=>{const Wt=Vt.get("offset"),Dn=Wt==Ze,pn=Dn&&dt||new Map;Vt.forEach((nn,dn)=>{let Bn=dn,mn=nn;if("offset"!==dn)switch(Bn=l.normalizePropertyName(Bn,be),mn){case M.k1:mn=k.get(dn);break;case M.l3:mn=W.get(dn);break;default:mn=l.normalizeStyleValue(dn,Bn,mn,be)}pn.set(Bn,mn)}),Dn||Ie.push(pn),dt=pn,Ze=Wt}),be.length)throw function Fe(R){return new s.vHH(3502,G)}();return Ie}function je(R,l,u,D){switch(l){case"start":R.onStart(()=>D(u&&De(u,"start",R)));break;case"done":R.onDone(()=>D(u&&De(u,"done",R)));break;case"destroy":R.onDestroy(()=>D(u&&De(u,"destroy",R)))}}function De(R,l,u){const W=ct(R.element,R.triggerName,R.fromState,R.toState,l||R.phaseName,u.totalTime??R.totalTime,!!u.disabled),be=R._data;return null!=be&&(W._data=be),W}function ct(R,l,u,D,k="",W=0,be){return{element:R,triggerName:l,fromState:u,toState:D,phaseName:k,totalTime:W,disabled:!!be}}function gt(R,l,u){let D=R.get(l);return D||R.set(l,D=u),D}function Gt(R){const l=R.indexOf(":");return[R.substring(1,l),R.slice(l+1)]}let Yt=(R,l)=>!1,Mt=(R,l,u)=>[],Je=null;function B(R){const l=R.parentNode||R.host;return l===Je?null:l}(bt()||typeof Element<"u")&&(at()?(Je=(()=>document.documentElement)(),Yt=(R,l)=>{for(;l;){if(l===R)return!0;l=B(l)}return!1}):Yt=(R,l)=>R.contains(l),Mt=(R,l,u)=>{if(u)return Array.from(R.querySelectorAll(l));const D=R.querySelector(l);return D?[D]:[]});let b=null,T=!1;const ve=Yt,se=Mt;
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
let Rt=(()=>{class R{validateStyleProperty(u){return function P(R){b||(b=function $(){return typeof document<"u"?document.body:null}()||{},T=!!b.style&&"WebkitAppearance"in b.style);let l=!0;return b.style&&!function j(R){return"ebkit"==R.substring(1,6)}(R)&&(l=R in b.style,!l&&T&&(l="Webkit"+R.charAt(0).toUpperCase()+R.slice(1)in b.style)),l}(u)}matchesElement(u,D){return!1}containsElement(u,D){return ve(u,D)}getParentElement(u){return B(u)}query(u,D,k){return se(u,D,k)}computeStyle(u,D,k){return k||""}animate(u,D,k,W,be,Ie=[],Ze){return new M.ZN(k,W)}}return R.\u0275fac=function(u){return new(u||R)},R.\u0275prov=s.Yz7({token:R,factory:R.\u0275fac}),R})(),Ut=(()=>{class R{}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
return R.NOOP=new Rt,R})();const Qe="ng-enter",he="ng-leave",ge="ng-trigger",Ue=".ng-trigger",Te="ng-animating",_e=".ng-animating";function Y(R){if("number"==typeof R)return R;const l=R.match(/^(-?[\.\d]+)(m?s)/);return!l||l.length<2?0:Re(parseFloat(l[1]),l[2])}function Re(R,l){return"s"===l?1e3*R:R}function $e(R,l,u){return R.hasOwnProperty("duration")?R:function Et(R,l,u){let k,W=0,be="";if("string"==typeof R){const Ie=R.match(/^(-?[\.\d]+)(m?s)(?:\s+(-?[\.\d]+)(m?s))?(?:\s+([-a-z]+(?:\(.+?\))?))?$/i);if(null===Ie)return l.push(K()),{duration:0,delay:0,easing:""};k=Re(parseFloat(Ie[1]),Ie[2]);const Ze=Ie[3];null!=Ze&&(W=Re(parseFloat(Ze),Ie[4]));const dt=Ie[5];dt&&(be=dt)}else k=R;if(!u){let Ie=!1,Ze=l.length;k<0&&(l.push(function ue(){return new s.vHH(3100,G)}()),Ie=!0),W<0&&(l.push(function q(){return new s.vHH(3101,G)}()),Ie=!0),Ie&&l.splice(Ze,0,K())}return{duration:k,delay:W,easing:be}}(R,l,u)}function Lt(R,l={}){return Object.keys(R).forEach(u=>{l[u]=R[u]}),l}function bn(R){const l=new Map;return Object.keys(R).forEach(u=>{l.set(u,R[u])}),l}function wn(R,l=new Map,u){if(u)for(let[D,k]of u)l.set(D,k);for(let[D,k]of R)l.set(D,k);return l}function sn(R,l,u){return u?l+":"+u+";":""}function Qt(R){let l="";for(let u=0;u<R.style.length;u++){const D=R.style.item(u);l+=sn(0,D,R.style.getPropertyValue(D))}for(const u in R.style)R.style.hasOwnProperty(u)&&!u.startsWith("_")&&(l+=sn(0,Ot(u),R.style[u]));R.setAttribute("style",l)}function vn(R,l,u){R.style&&(l.forEach((D,k)=>{const W=ut(k);u&&!u.has(k)&&u.set(k,R.style[W]),R.style[W]=D}),bt()&&Qt(R))}function On(R,l){R.style&&(l.forEach((u,D)=>{const k=ut(D);R.style[k]=""}),bt()&&Qt(R))}function Mn(R){return Array.isArray(R)?1==R.length?R[0]:(0,M.vP)(R):R}const Jt=new RegExp("{{\\s*(.+?)\\s*}}","g");function Oe(R){let l=[];if("string"==typeof R){let u;for(;u=Jt.exec(R);)l.push(u[1]);Jt.lastIndex=0}return l}function pe(R,l,u){const D=R.toString(),k=D.replace(Jt,(W,be)=>{let Ie=l[be];return null==Ie&&(u.push(function ce(R){return new s.vHH(3003,G)}()),Ie=""),Ie.toString()});return k==D?R:k}function ne(R){const l=[];let u=R.next();for(;!u.done;)l.push(u.value),u=R.next();return l}const Pe=/-+([a-z0-9])/g;function ut(R){return R.replace(Pe,(...l)=>l[1].toUpperCase())}function Ot(R){return R.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase()}function Ft(R,l,u){switch(l.type){case 7:return R.visitTrigger(l,u);case 0:return R.visitState(l,u);case 1:return R.visitTransition(l,u);case 2:return R.visitSequence(l,u);case 3:return R.visitGroup(l,u);case 4:return R.visitAnimate(l,u);case 5:return R.visitKeyframes(l,u);case 6:return R.visitStyle(l,u);case 8:return R.visitReference(l,u);case 9:return R.visitAnimateChild(l,u);case 10:return R.visitAnimateRef(l,u);case 11:return R.visitQuery(l,u);case 12:return R.visitStagger(l,u);default:throw function me(R){return new s.vHH(3004,G)}()}}function ai(R,l){return window.getComputedStyle(R)[l]}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */function N(R,l){const u=[];return"string"==typeof R?R.split(/\s*,\s*/).forEach(D=>function re(R,l,u){if(":"==R[0]){const Ze=function O(R,l){switch(R){case":enter":return"void => *";case":leave":return"* => void";case":increment":return(u,D)=>parseFloat(D)>parseFloat(u);case":decrement":return(u,D)=>parseFloat(D)<parseFloat(u);default:return l.push(function Be(R){return new s.vHH(3016,G)}()),"* => *"}}(R,u);if("function"==typeof Ze)return void l.push(Ze);R=Ze}const D=R.match(/^(\*|[-\w]+)\s*(<?[=-]>)\s*(\*|[-\w]+)$/);if(null==D||D.length<4)return u.push(function Ee(R){return new s.vHH(3015,G)}()),l;const k=D[1],W=D[2],be=D[3];l.push(et(k,be));"<"==W[0]&&!("*"==k&&"*"==be)&&l.push(et(be,k))}(D,u,l)):u.push(R),u}const ie=new Set(["true","1"]),ke=new Set(["false","0"]);function et(R,l){const u=ie.has(R)||ke.has(R),D=ie.has(l)||ke.has(l);return(k,W)=>{let be="*"==R||R==k,Ie="*"==l||l==W;return!be&&u&&"boolean"==typeof k&&(be=k?ie.has(R):ke.has(R)),!Ie&&D&&"boolean"==typeof W&&(Ie=W?ie.has(l):ke.has(l)),be&&Ie}}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */const $t=new RegExp("s*:selfs*,?","g");function Xt(R,l,u,D){return new tn(R).build(l,u,D)}class tn{constructor(l){this._driver=l}build(l,u,D){const k=new qn(u);return this._resetContextStyleTimingState(k),Ft(this,Mn(l),k)}_resetContextStyleTimingState(l){l.currentQuerySelector="",l.collectedStyles=new Map,l.collectedStyles.set("",new Map),l.currentTime=0}visitTrigger(l,u){let D=u.queryCount=0,k=u.depCount=0;const W=[],be=[];return"@"==l.name.charAt(0)&&u.errors.push(function Ge(){return new s.vHH(3006,G)}()),l.definitions.forEach(Ie=>{if(this._resetContextStyleTimingState(u),0==Ie.type){const Ze=Ie,dt=Ze.name;dt.toString().split(/\s*,\s*/).forEach(Vt=>{Ze.name=Vt,W.push(this.visitState(Ze,u))}),Ze.name=dt}else if(1==Ie.type){const Ze=this.visitTransition(Ie,u);D+=Ze.queryCount,k+=Ze.depCount,be.push(Ze)}else u.errors.push(function Ve(){return new s.vHH(3007,G)}())}),{type:7,name:l.name,states:W,transitions:be,queryCount:D,depCount:k,options:null}}visitState(l,u){const D=this.visitStyle(l.styles,u),k=l.options&&l.options.params||null;if(D.containsDynamicStyles){const W=new Set,be=k||{};D.styles.forEach(Ie=>{Ie instanceof Map&&Ie.forEach(Ze=>{Oe(Ze).forEach(dt=>{be.hasOwnProperty(dt)||W.add(dt)})})}),W.size&&(ne(W.values()),u.errors.push(function xe(R,l){return new s.vHH(3008,G)}()))}return{type:0,name:l.name,style:D,options:k?{params:k}:null}}visitTransition(l,u){u.queryCount=0,u.depCount=0;const D=Ft(this,Mn(l.animation),u);return{type:1,matchers:N(l.expr,u.errors),animation:D,queryCount:u.queryCount,depCount:u.depCount,options:Hn(l.options)}}visitSequence(l,u){return{type:2,steps:l.steps.map(D=>Ft(this,D,u)),options:Hn(l.options)}}visitGroup(l,u){const D=u.currentTime;let k=0;const W=l.steps.map(be=>{u.currentTime=D;const Ie=Ft(this,be,u);return k=Math.max(k,u.currentTime),Ie});return u.currentTime=k,{type:3,steps:W,options:Hn(l.options)}}visitAnimate(l,u){const D=function zn(R,l){if(R.hasOwnProperty("duration"))return R;if("number"==typeof R)return Ti($e(R,l).duration,0,"");const u=R;if(u.split(/\s+/).some(W=>"{"==W.charAt(0)&&"{"==W.charAt(1))){const W=Ti(0,0,"");return W.dynamic=!0,W.strValue=u,W}const k=$e(u,l);return Ti(k.duration,k.delay,k.easing)}(l.timings,u.errors);u.currentAnimateTimings=D;let k,W=l.styles?l.styles:(0,M.oB)({});if(5==W.type)k=this.visitKeyframes(W,u);else{let be=l.styles,Ie=!1;if(!be){Ie=!0;const dt={};D.easing&&(dt.easing=D.easing),be=(0,M.oB)(dt)}u.currentTime+=D.duration+D.delay;const Ze=this.visitStyle(be,u);Ze.isEmptyStep=Ie,k=Ze}return u.currentAnimateTimings=null,{type:4,timings:D,style:k,options:null}}visitStyle(l,u){const D=this._makeStyleAst(l,u);return this._validateStyleAst(D,u),D}_makeStyleAst(l,u){const D=[],k=Array.isArray(l.styles)?l.styles:[l.styles];for(let Ie of k)"string"==typeof Ie?Ie===M.l3?D.push(Ie):u.errors.push(new s.vHH(3002,G)):D.push(bn(Ie));let W=!1,be=null;return D.forEach(Ie=>{if(Ie instanceof Map&&(Ie.has("easing")&&(be=Ie.get("easing"),Ie.delete("easing")),!W))for(let Ze of Ie.values())if(Ze.toString().indexOf("{{")>=0){W=!0;break}}),{type:6,styles:D,easing:be,offset:l.offset,containsDynamicStyles:W,options:null}}_validateStyleAst(l,u){const D=u.currentAnimateTimings;let k=u.currentTime,W=u.currentTime;D&&W>0&&(W-=D.duration+D.delay),l.styles.forEach(be=>{"string"!=typeof be&&be.forEach((Ie,Ze)=>{const dt=u.collectedStyles.get(u.currentQuerySelector),Vt=dt.get(Ze);let Wt=!0;Vt&&(W!=k&&W>=Vt.startTime&&k<=Vt.endTime&&(u.errors.push(function qe(R,l,u,D,k){return new s.vHH(3010,G)}()),Wt=!1),W=Vt.startTime),Wt&&dt.set(Ze,{startTime:W,endTime:k}),u.options&&function At(R,l,u){const D=l.params||{},k=Oe(R);k.length&&k.forEach(W=>{D.hasOwnProperty(W)||u.push(function Me(R){return new s.vHH(3001,G)}())})}(Ie,u.options,u.errors)})})}visitKeyframes(l,u){const D={type:5,styles:[],options:null};if(!u.currentAnimateTimings)return u.errors.push(function ht(){return new s.vHH(3011,G)}()),D;let W=0;const be=[];let Ie=!1,Ze=!1,dt=0;const Vt=l.steps.map(mn=>{const jn=this._makeStyleAst(mn,u);let En=null!=jn.offset?jn.offset:function Ai(R){if("string"==typeof R)return null;let l=null;if(Array.isArray(R))R.forEach(u=>{if(u instanceof Map&&u.has("offset")){const D=u;l=parseFloat(D.get("offset")),D.delete("offset")}});else if(R instanceof Map&&R.has("offset")){const u=R;l=parseFloat(u.get("offset")),u.delete("offset")}return l}(jn.styles),oi=0;return null!=En&&(W++,oi=jn.offset=En),Ze=Ze||oi<0||oi>1,Ie=Ie||oi<dt,dt=oi,be.push(oi),jn});Ze&&u.errors.push(function mt(){return new s.vHH(3012,G)}()),Ie&&u.errors.push(function de(){return new s.vHH(3200,G)}());const Wt=l.steps.length;let Dn=0;W>0&&W<Wt?u.errors.push(function Q(){return new s.vHH(3202,G)}()):0==W&&(Dn=1/(Wt-1));const pn=Wt-1,nn=u.currentTime,dn=u.currentAnimateTimings,Bn=dn.duration;return Vt.forEach((mn,jn)=>{const En=Dn>0?jn==pn?1:Dn*jn:be[jn],oi=En*Bn;u.currentTime=nn+dn.delay+oi,dn.duration=oi,this._validateStyleAst(mn,u),mn.offset=En,D.styles.push(mn)}),D}visitReference(l,u){return{type:8,animation:Ft(this,Mn(l.animation),u),options:Hn(l.options)}}visitAnimateChild(l,u){return u.depCount++,{type:9,options:Hn(l.options)}}visitAnimateRef(l,u){return{type:10,animation:this.visitReference(l.animation,u),options:Hn(l.options)}}visitQuery(l,u){const D=u.currentQuerySelector,k=l.options||{};u.queryCount++,u.currentQuery=l;const[W,be]=function Cn(R){const l=!!R.split(/\s*,\s*/).find(u=>":self"==u);return l&&(R=R.replace($t,"")),R=R.replace(/@\*/g,Ue).replace(/@\w+/g,u=>Ue+"-"+u.slice(1)).replace(/:animating/g,_e),[R,l]}(l.selector);u.currentQuerySelector=D.length?D+" "+W:W,gt(u.collectedStyles,u.currentQuerySelector,new Map);const Ie=Ft(this,Mn(l.animation),u);return u.currentQuery=null,u.currentQuerySelector=D,{type:11,selector:W,limit:k.limit||0,optional:!!k.optional,includeSelf:be,animation:Ie,originalSelector:l.selector,options:Hn(l.options)}}visitStagger(l,u){u.currentQuery||u.errors.push(function ee(){return new s.vHH(3013,G)}());const D="full"===l.timings?{duration:0,delay:0,easing:"full"}:$e(l.timings,u.errors,!0);return{type:12,animation:Ft(this,Mn(l.animation),u),timings:D,options:null}}}class qn{constructor(l){this.errors=l,this.queryCount=0,this.depCount=0,this.currentTransition=null,this.currentQuery=null,this.currentQuerySelector=null,this.currentAnimateTimings=null,this.currentTime=0,this.collectedStyles=new Map,this.options=null,this.unsupportedCSSPropertiesFound=new Set,this.nonAnimatableCSSPropertiesFound=new Set}}function Hn(R){return R?(R=Lt(R)).params&&(R.params=function xn(R){return R?Lt(R):null}(R.params)):R={},R}function Ti(R,l,u){return{duration:R,delay:l,easing:u}}function Zi(R,l,u,D,k,W,be=null,Ie=!1){return{type:1,element:R,keyframes:l,preStyleProps:u,postStyleProps:D,duration:k,delay:W,totalTime:k+W,easing:be,subTimeline:Ie}}class Ii{constructor(){this._map=new Map}get(l){return this._map.get(l)||[]}append(l,u){let D=this._map.get(l);D||this._map.set(l,D=[]),D.push(...u)}has(l){return this._map.has(l)}clear(){this._map.clear()}}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */const wi=new RegExp(":enter","g"),Xi=new RegExp(":leave","g");function hr(R,l,u,D,k,W=new Map,be=new Map,Ie,Ze,dt=[]){return(new kr).buildKeyframes(R,l,u,D,k,W,be,Ie,Ze,dt)}class kr{buildKeyframes(l,u,D,k,W,be,Ie,Ze,dt,Vt=[]){dt=dt||new Ii;const Wt=new br(l,u,dt,k,W,Vt,[]);Wt.options=Ze;const Dn=Ze.delay?Y(Ze.delay):0;Wt.currentTimeline.delayNextStep(Dn),Wt.currentTimeline.setStyles([be],null,Wt.errors,Ze),Ft(this,D,Wt);const pn=Wt.timelines.filter(nn=>nn.containsAnimation());if(pn.length&&Ie.size){let nn;for(let dn=pn.length-1;dn>=0;dn--){const Bn=pn[dn];if(Bn.element===u){nn=Bn;break}}nn&&!nn.allowOnlyTimelineStyles()&&nn.setStyles([Ie],null,Wt.errors,Ze)}return pn.length?pn.map(nn=>nn.buildKeyframes()):[Zi(u,[],[],[],0,Dn,"",!1)]}visitTrigger(l,u){}visitState(l,u){}visitTransition(l,u){}visitAnimateChild(l,u){const D=u.subInstructions.get(u.element);if(D){const k=u.createSubContext(l.options),W=u.currentTimeline.currentTime,be=this._visitSubInstructions(D,k,k.options);W!=be&&u.transformIntoNewTimeline(be)}u.previousNode=l}visitAnimateRef(l,u){const D=u.createSubContext(l.options);D.transformIntoNewTimeline(),this.visitReference(l.animation,D),u.transformIntoNewTimeline(D.currentTimeline.currentTime),u.previousNode=l}_visitSubInstructions(l,u,D){let W=u.currentTimeline.currentTime;const be=null!=D.duration?Y(D.duration):null,Ie=null!=D.delay?Y(D.delay):null;return 0!==be&&l.forEach(Ze=>{const dt=u.appendInstructionToTimeline(Ze,be,Ie);W=Math.max(W,dt.duration+dt.delay)}),W}visitReference(l,u){u.updateOptions(l.options,!0),Ft(this,l.animation,u),u.previousNode=l}visitSequence(l,u){const D=u.subContextCount;let k=u;const W=l.options;if(W&&(W.params||W.delay)&&(k=u.createSubContext(W),k.transformIntoNewTimeline(),null!=W.delay)){6==k.previousNode.type&&(k.currentTimeline.snapshotCurrentStyles(),k.previousNode=Qi);const be=Y(W.delay);k.delayNextStep(be)}l.steps.length&&(l.steps.forEach(be=>Ft(this,be,k)),k.currentTimeline.applyStylesToKeyframe(),k.subContextCount>D&&k.transformIntoNewTimeline()),u.previousNode=l}visitGroup(l,u){const D=[];let k=u.currentTimeline.currentTime;const W=l.options&&l.options.delay?Y(l.options.delay):0;l.steps.forEach(be=>{const Ie=u.createSubContext(l.options);W&&Ie.delayNextStep(W),Ft(this,be,Ie),k=Math.max(k,Ie.currentTimeline.currentTime),D.push(Ie.currentTimeline)}),D.forEach(be=>u.currentTimeline.mergeTimelineCollectedStyles(be)),u.transformIntoNewTimeline(k),u.previousNode=l}_visitTiming(l,u){if(l.dynamic){const D=l.strValue;return $e(u.params?pe(D,u.params,u.errors):D,u.errors)}return{duration:l.duration,delay:l.delay,easing:l.easing}}visitAnimate(l,u){const D=u.currentAnimateTimings=this._visitTiming(l.timings,u),k=u.currentTimeline;D.delay&&(u.incrementTime(D.delay),k.snapshotCurrentStyles());const W=l.style;5==W.type?this.visitKeyframes(W,u):(u.incrementTime(D.duration),this.visitStyle(W,u),k.applyStylesToKeyframe()),u.currentAnimateTimings=null,u.previousNode=l}visitStyle(l,u){const D=u.currentTimeline,k=u.currentAnimateTimings;!k&&D.hasCurrentStyleProperties()&&D.forwardFrame();const W=k&&k.easing||l.easing;l.isEmptyStep?D.applyEmptyStep(W):D.setStyles(l.styles,W,u.errors,u.options),u.previousNode=l}visitKeyframes(l,u){const D=u.currentAnimateTimings,k=u.currentTimeline.duration,W=D.duration,Ie=u.createSubContext().currentTimeline;Ie.easing=D.easing,l.styles.forEach(Ze=>{Ie.forwardTime((Ze.offset||0)*W),Ie.setStyles(Ze.styles,Ze.easing,u.errors,u.options),Ie.applyStylesToKeyframe()}),u.currentTimeline.mergeTimelineCollectedStyles(Ie),u.transformIntoNewTimeline(k+W),u.previousNode=l}visitQuery(l,u){const D=u.currentTimeline.currentTime,k=l.options||{},W=k.delay?Y(k.delay):0;W&&(6===u.previousNode.type||0==D&&u.currentTimeline.hasCurrentStyleProperties())&&(u.currentTimeline.snapshotCurrentStyles(),u.previousNode=Qi);let be=D;const Ie=u.invokeQuery(l.selector,l.originalSelector,l.limit,l.includeSelf,!!k.optional,u.errors);u.currentQueryTotal=Ie.length;let Ze=null;Ie.forEach((dt,Vt)=>{u.currentQueryIndex=Vt;const Wt=u.createSubContext(l.options,dt);W&&Wt.delayNextStep(W),dt===u.element&&(Ze=Wt.currentTimeline),Ft(this,l.animation,Wt),Wt.currentTimeline.applyStylesToKeyframe(),be=Math.max(be,Wt.currentTimeline.currentTime)}),u.currentQueryIndex=0,u.currentQueryTotal=0,u.transformIntoNewTimeline(be),Ze&&(u.currentTimeline.mergeTimelineCollectedStyles(Ze),u.currentTimeline.snapshotCurrentStyles()),u.previousNode=l}visitStagger(l,u){const D=u.parentContext,k=u.currentTimeline,W=l.timings,be=Math.abs(W.duration),Ie=be*(u.currentQueryTotal-1);let Ze=be*u.currentQueryIndex;switch(W.duration<0?"reverse":W.easing){case"reverse":Ze=Ie-Ze;break;case"full":Ze=D.currentStaggerTime}const Vt=u.currentTimeline;Ze&&Vt.delayNextStep(Ze);const Wt=Vt.currentTime;Ft(this,l.animation,u),u.previousNode=l,D.currentStaggerTime=k.currentTime-Wt+(k.startTime-D.currentTimeline.startTime)}}const Qi={};class br{constructor(l,u,D,k,W,be,Ie,Ze){this._driver=l,this.element=u,this.subInstructions=D,this._enterClassName=k,this._leaveClassName=W,this.errors=be,this.timelines=Ie,this.parentContext=null,this.currentAnimateTimings=null,this.previousNode=Qi,this.subContextCount=0,this.options={},this.currentQueryIndex=0,this.currentQueryTotal=0,this.currentStaggerTime=0,this.currentTimeline=Ze||new Li(this._driver,u,0),Ie.push(this.currentTimeline)}get params(){return this.options.params}updateOptions(l,u){if(!l)return;const D=l;let k=this.options;null!=D.duration&&(k.duration=Y(D.duration)),null!=D.delay&&(k.delay=Y(D.delay));const W=D.params;if(W){let be=k.params;be||(be=this.options.params={}),Object.keys(W).forEach(Ie=>{(!u||!be.hasOwnProperty(Ie))&&(be[Ie]=pe(W[Ie],be,this.errors))})}}_copyOptions(){const l={};if(this.options){const u=this.options.params;if(u){const D=l.params={};Object.keys(u).forEach(k=>{D[k]=u[k]})}}return l}createSubContext(l=null,u,D){const k=u||this.element,W=new br(this._driver,k,this.subInstructions,this._enterClassName,this._leaveClassName,this.errors,this.timelines,this.currentTimeline.fork(k,D||0));return W.previousNode=this.previousNode,W.currentAnimateTimings=this.currentAnimateTimings,W.options=this._copyOptions(),W.updateOptions(l),W.currentQueryIndex=this.currentQueryIndex,W.currentQueryTotal=this.currentQueryTotal,W.parentContext=this,this.subContextCount++,W}transformIntoNewTimeline(l){return this.previousNode=Qi,this.currentTimeline=this.currentTimeline.fork(this.element,l),this.timelines.push(this.currentTimeline),this.currentTimeline}appendInstructionToTimeline(l,u,D){const k={duration:u??l.duration,delay:this.currentTimeline.currentTime+(D??0)+l.delay,easing:""},W=new no(this._driver,l.element,l.keyframes,l.preStyleProps,l.postStyleProps,k,l.stretchStartingKeyframe);return this.timelines.push(W),k}incrementTime(l){this.currentTimeline.forwardTime(this.currentTimeline.duration+l)}delayNextStep(l){l>0&&this.currentTimeline.delayNextStep(l)}invokeQuery(l,u,D,k,W,be){let Ie=[];if(k&&Ie.push(this.element),l.length>0){l=(l=l.replace(wi,"."+this._enterClassName)).replace(Xi,"."+this._leaveClassName);let dt=this._driver.query(this.element,l,1!=D);0!==D&&(dt=D<0?dt.slice(dt.length+D,dt.length):dt.slice(0,D)),Ie.push(...dt)}return!W&&0==Ie.length&&be.push(function ae(R){return new s.vHH(3014,G)}()),Ie}}class Li{constructor(l,u,D,k){this._driver=l,this.element=u,this.startTime=D,this._elementTimelineStylesLookup=k,this.duration=0,this._previousKeyframe=new Map,this._currentKeyframe=new Map,this._keyframes=new Map,this._styleSummary=new Map,this._localTimelineStyles=new Map,this._pendingStyles=new Map,this._backFill=new Map,this._currentEmptyStepKeyframe=null,this._elementTimelineStylesLookup||(this._elementTimelineStylesLookup=new Map),this._globalTimelineStyles=this._elementTimelineStylesLookup.get(u),this._globalTimelineStyles||(this._globalTimelineStyles=this._localTimelineStyles,this._elementTimelineStylesLookup.set(u,this._localTimelineStyles)),this._loadKeyframe()}containsAnimation(){switch(this._keyframes.size){case 0:return!1;case 1:return this.hasCurrentStyleProperties();default:return!0}}hasCurrentStyleProperties(){return this._currentKeyframe.size>0}get currentTime(){return this.startTime+this.duration}delayNextStep(l){const u=1===this._keyframes.size&&this._pendingStyles.size;this.duration||u?(this.forwardTime(this.currentTime+l),u&&this.snapshotCurrentStyles()):this.startTime+=l}fork(l,u){return this.applyStylesToKeyframe(),new Li(this._driver,l,u||this.currentTime,this._elementTimelineStylesLookup)}_loadKeyframe(){this._currentKeyframe&&(this._previousKeyframe=this._currentKeyframe),this._currentKeyframe=this._keyframes.get(this.duration),this._currentKeyframe||(this._currentKeyframe=new Map,this._keyframes.set(this.duration,this._currentKeyframe))}forwardFrame(){this.duration+=1,this._loadKeyframe()}forwardTime(l){this.applyStylesToKeyframe(),this.duration=l,this._loadKeyframe()}_updateStyle(l,u){this._localTimelineStyles.set(l,u),this._globalTimelineStyles.set(l,u),this._styleSummary.set(l,{time:this.currentTime,value:u})}allowOnlyTimelineStyles(){return this._currentEmptyStepKeyframe!==this._currentKeyframe}applyEmptyStep(l){l&&this._previousKeyframe.set("easing",l);for(let[u,D]of this._globalTimelineStyles)this._backFill.set(u,D||M.l3),this._currentKeyframe.set(u,M.l3);this._currentEmptyStepKeyframe=this._currentKeyframe}setStyles(l,u,D,k){u&&this._previousKeyframe.set("easing",u);const W=k&&k.params||{},be=function _o(R,l){const u=new Map;let D;return R.forEach(k=>{if("*"===k){D=D||l.keys();for(let W of D)u.set(W,M.l3)}else wn(k,u)}),u}(l,this._globalTimelineStyles);for(let[Ie,Ze]of be){const dt=pe(Ze,W,D);this._pendingStyles.set(Ie,dt),this._localTimelineStyles.has(Ie)||this._backFill.set(Ie,this._globalTimelineStyles.get(Ie)||M.l3),this._updateStyle(Ie,dt)}}applyStylesToKeyframe(){0!=this._pendingStyles.size&&(this._pendingStyles.forEach((l,u)=>{this._currentKeyframe.set(u,l)}),this._pendingStyles.clear(),this._localTimelineStyles.forEach((l,u)=>{this._currentKeyframe.has(u)||this._currentKeyframe.set(u,l)}))}snapshotCurrentStyles(){for(let[l,u]of this._localTimelineStyles)this._pendingStyles.set(l,u),this._updateStyle(l,u)}getFinalKeyframe(){return this._keyframes.get(this.duration)}get properties(){const l=[];for(let u in this._currentKeyframe)l.push(u);return l}mergeTimelineCollectedStyles(l){l._styleSummary.forEach((u,D)=>{const k=this._styleSummary.get(D);(!k||u.time>k.time)&&this._updateStyle(D,u.value)})}buildKeyframes(){this.applyStylesToKeyframe();const l=new Set,u=new Set,D=1===this._keyframes.size&&0===this.duration;let k=[];this._keyframes.forEach((Ie,Ze)=>{const dt=wn(Ie,new Map,this._backFill);dt.forEach((Vt,Wt)=>{Vt===M.k1?l.add(Wt):Vt===M.l3&&u.add(Wt)}),D||dt.set("offset",Ze/this.duration),k.push(dt)});const W=l.size?ne(l.values()):[],be=u.size?ne(u.values()):[];if(D){const Ie=k[0],Ze=new Map(Ie);Ie.set("offset",0),Ze.set("offset",1),k=[Ie,Ze]}return Zi(this.element,k,W,be,this.duration,this.startTime,this.easing,!1)}}class no extends Li{constructor(l,u,D,k,W,be,Ie=!1){super(l,u,be.delay),this.keyframes=D,this.preStyleProps=k,this.postStyleProps=W,this._stretchStartingKeyframe=Ie,this.timings={duration:be.duration,delay:be.delay,easing:be.easing}}containsAnimation(){return this.keyframes.length>1}buildKeyframes(){let l=this.keyframes,{delay:u,duration:D,easing:k}=this.timings;if(this._stretchStartingKeyframe&&u){const W=[],be=D+u,Ie=u/be,Ze=wn(l[0]);Ze.set("offset",0),W.push(Ze);const dt=wn(l[0]);dt.set("offset",Nr(Ie)),W.push(dt);const Vt=l.length-1;for(let Wt=1;Wt<=Vt;Wt++){let Dn=wn(l[Wt]);const pn=Dn.get("offset");Dn.set("offset",Nr((u+pn*D)/be)),W.push(Dn)}D=be,u=0,k="",l=W}return Zi(this.element,l,this.preStyleProps,this.postStyleProps,D,u,k,!0)}}function Nr(R,l=3){const u=Math.pow(10,l-1);return Math.round(R*u)/u}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
class Bi{}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
const Lr=new Set(["width","height","minWidth","minHeight","maxWidth","maxHeight","left","top","bottom","right","fontSize","outlineWidth","outlineOffset","paddingTop","paddingLeft","paddingBottom","paddingRight","marginTop","marginLeft","marginBottom","marginRight","borderRadius","borderWidth","borderTopWidth","borderLeftWidth","borderRightWidth","borderBottomWidth","textIndent","perspective"]);class Er extends Bi{normalizePropertyName(l,u){return ut(l)}normalizeStyleValue(l,u,D,k){let W="";const be=D.toString().trim();if(Lr.has(u)&&0!==D&&"0"!==D)if("number"==typeof D)W="px";else{const Ie=D.match(/^[+-]?[\d\.]+([a-z]*)$/);Ie&&0==Ie[1].length&&k.push(function te(R,l){return new s.vHH(3005,G)}())}return be+W}}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */function wr(R,l,u,D,k,W,be,Ie,Ze,dt,Vt,Wt,Dn){return{type:0,element:R,triggerName:l,isRemovalTransition:k,fromState:u,fromStyles:W,toState:D,toStyles:be,timelines:Ie,queriedElements:Ze,preStyleProps:dt,postStyleProps:Vt,totalTime:Wt,errors:Dn}}const Mi={};class qi{constructor(l,u,D){this._triggerName=l,this.ast=u,this._stateStyles=D}match(l,u,D,k){return function Vi(R,l,u,D,k){return R.some(W=>W(l,u,D,k))}(this.ast.matchers,l,u,D,k)}buildStyles(l,u,D){let k=this._stateStyles.get("*");return void 0!==l&&(k=this._stateStyles.get(l?.toString())||k),k?k.buildStyles(u,D):new Map}build(l,u,D,k,W,be,Ie,Ze,dt,Vt){const Wt=[],Dn=this.ast.options&&this.ast.options.params||Mi,nn=this.buildStyles(D,Ie&&Ie.params||Mi,Wt),dn=Ze&&Ze.params||Mi,Bn=this.buildStyles(k,dn,Wt),mn=new Set,jn=new Map,En=new Map,oi="void"===k,zr={params:Ji(dn,Dn),delay:this.ast.options?.delay},Ki=Vt?[]:hr(l,u,this.ast.animation,W,be,nn,Bn,zr,dt,Wt);let pi=0;if(Ki.forEach(or=>{pi=Math.max(or.duration+or.delay,pi)}),Wt.length)return wr(u,this._triggerName,D,k,oi,nn,Bn,[],[],jn,En,pi,Wt);Ki.forEach(or=>{const Pi=or.element,oo=gt(jn,Pi,new Set);or.preStyleProps.forEach(Ui=>oo.add(Ui));const sr=gt(En,Pi,new Set);or.postStyleProps.forEach(Ui=>sr.add(Ui)),Pi!==u&&mn.add(Pi)});const Oi=ne(mn.values());return wr(u,this._triggerName,D,k,oi,nn,Bn,Ki,Oi,jn,En,pi)}}function Ji(R,l){const u=Lt(l);for(const D in R)R.hasOwnProperty(D)&&null!=R[D]&&(u[D]=R[D]);return u}class io{constructor(l,u,D){this.styles=l,this.defaultParams=u,this.normalizer=D}buildStyles(l,u){const D=new Map,k=Lt(this.defaultParams);return Object.keys(l).forEach(W=>{const be=l[W];null!==be&&(k[W]=be)}),this.styles.styles.forEach(W=>{"string"!=typeof W&&W.forEach((be,Ie)=>{be&&(be=pe(be,k,u));const Ze=this.normalizer.normalizePropertyName(Ie,u);be=this.normalizer.normalizeStyleValue(Ie,Ze,be,u),D.set(Ze,be)})}),D}}class tr{constructor(l,u,D){this.name=l,this.ast=u,this._normalizer=D,this.transitionFactories=[],this.states=new Map,u.states.forEach(k=>{this.states.set(k.name,new io(k.style,k.options&&k.options.params||{},D))}),ro(this.states,"true","1"),ro(this.states,"false","0"),u.transitions.forEach(k=>{this.transitionFactories.push(new qi(l,k,this.states))}),this.fallbackTransition=function Mr(R,l,u){return new qi(R,{type:1,animation:{type:2,steps:[],options:null},matchers:[(be,Ie)=>!0],options:null,queryCount:0,depCount:0},l)}(l,this.states)}get containsQueries(){return this.ast.queryCount>0}matchTransition(l,u,D,k){return this.transitionFactories.find(be=>be.match(l,u,D,k))||null}matchStyles(l,u,D){return this.fallbackTransition.buildStyles(l,u,D)}}function ro(R,l,u){R.has(l)?R.has(u)||R.set(u,R.get(l)):R.has(u)&&R.set(l,R.get(u))}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */const Br=new Ii;class yo{constructor(l,u,D){this.bodyNode=l,this._driver=u,this._normalizer=D,this._animations=new Map,this._playersById=new Map,this.players=[]}register(l,u){const D=[],W=Xt(this._driver,u,D,[]);if(D.length)throw function le(R){return new s.vHH(3503,G)}();this._animations.set(l,W)}_buildPlayer(l,u,D){const k=l.element,W=rt(0,this._normalizer,0,l.keyframes,u,D);return this._driver.animate(k,W,l.duration,l.delay,l.easing,[],!0)}create(l,u,D={}){const k=[],W=this._animations.get(l);let be;const Ie=new Map;if(W?(be=hr(this._driver,u,W,Qe,he,new Map,new Map,D,Br,k),be.forEach(Vt=>{const Wt=gt(Ie,Vt.element,new Map);Vt.postStyleProps.forEach(Dn=>Wt.set(Dn,null))})):(k.push(function Le(){return new s.vHH(3300,G)}()),be=[]),k.length)throw function Ye(R){return new s.vHH(3504,G)}();Ie.forEach((Vt,Wt)=>{Vt.forEach((Dn,pn)=>{Vt.set(pn,this._driver.computeStyle(Wt,pn,M.l3))})});const dt=nt(be.map(Vt=>{const Wt=Ie.get(Vt.element);return this._buildPlayer(Vt,new Map,Wt)}));return this._playersById.set(l,dt),dt.onDestroy(()=>this.destroy(l)),this.players.push(dt),dt}destroy(l){const u=this._getPlayer(l);u.destroy(),this._playersById.delete(l);const D=this.players.indexOf(u);D>=0&&this.players.splice(D,1)}_getPlayer(l){const u=this._playersById.get(l);if(!u)throw function xt(R){return new s.vHH(3301,G)}();return u}listen(l,u,D,k){const W=ct(u,"","","");return je(this._getPlayer(l),D,W,k),()=>{}}command(l,u,D,k){if("register"==D)return void this.register(l,k[0]);if("create"==D)return void this.create(l,u,k[0]||{});const W=this._getPlayer(l);switch(D){case"play":W.play();break;case"pause":W.pause();break;case"reset":W.reset();break;case"restart":W.restart();break;case"finish":W.finish();break;case"init":W.init();break;case"setPosition":W.setPosition(parseFloat(k[0]));break;case"destroy":this.destroy(l)}}}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */const ni="ng-animate-queued",pr="ng-animate-disabled",ii=[],Hr={namespaceId:"",setForRemoval:!1,setForMove:!1,hasAnimation:!1,removedBeforeQueried:!1},ir={namespaceId:"",setForMove:!1,setForRemoval:!1,hasAnimation:!1,removedBeforeQueried:!0},_i="__ng_removed";class Ln{constructor(l,u=""){this.namespaceId=u;const D=l&&l.hasOwnProperty("value");if(this.value=function z(R){return R??null}(D?l.value:l),D){const W=Lt(l);delete W.value,this.options=W}else this.options={};this.options.params||(this.options.params={})}get params(){return this.options.params}absorbOptions(l){const u=l.params;if(u){const D=this.options.params;Object.keys(u).forEach(k=>{null==D[k]&&(D[k]=u[k])})}}}const ti="void",Sr=new Ln(ti);class Fn{constructor(l,u,D){this.id=l,this.hostElement=u,this._engine=D,this.players=[],this._triggers=new Map,this._queue=[],this._elementListeners=new Map,this._hostClassName="ng-tns-"+l,_n(u,this._hostClassName)}listen(l,u,D,k){if(!this._triggers.has(u))throw function Ht(R,l){return new s.vHH(3302,G)}();if(null==D||0==D.length)throw function jt(R){return new s.vHH(3303,G)}();if(!function it(R){return"start"==R||"done"==R}(D))throw function ft(R,l){return new s.vHH(3400,G)}();const W=gt(this._elementListeners,l,[]),be={name:u,phase:D,callback:k};W.push(be);const Ie=gt(this._engine.statesByElement,l,new Map);return Ie.has(u)||(_n(l,ge),_n(l,ge+"-"+u),Ie.set(u,Sr)),()=>{this._engine.afterFlush(()=>{const Ze=W.indexOf(be);Ze>=0&&W.splice(Ze,1),this._triggers.has(u)||Ie.delete(u)})}}register(l,u){return!this._triggers.has(l)&&(this._triggers.set(l,u),!0)}_getTrigger(l){const u=this._triggers.get(l);if(!u)throw function vt(R){return new s.vHH(3401,G)}();return u}trigger(l,u,D,k=!0){const W=this._getTrigger(u),be=new V(this.id,u,l);let Ie=this._engine.statesByElement.get(l);Ie||(_n(l,ge),_n(l,ge+"-"+u),this._engine.statesByElement.set(l,Ie=new Map));let Ze=Ie.get(u);const dt=new Ln(D,this.id);if(!(D&&D.hasOwnProperty("value"))&&Ze&&dt.absorbOptions(Ze.options),Ie.set(u,dt),Ze||(Ze=Sr),dt.value!==ti&&Ze.value===dt.value){if(!function Zt(R,l){const u=Object.keys(R),D=Object.keys(l);if(u.length!=D.length)return!1;for(let k=0;k<u.length;k++){const W=u[k];if(!l.hasOwnProperty(W)||R[W]!==l[W])return!1}return!0}(Ze.params,dt.params)){const dn=[],Bn=W.matchStyles(Ze.value,Ze.params,dn),mn=W.matchStyles(dt.value,dt.params,dn);dn.length?this._engine.reportError(dn):this._engine.afterFlush(()=>{On(l,Bn),vn(l,mn)})}return}const Dn=gt(this._engine.playersByElement,l,[]);Dn.forEach(dn=>{dn.namespaceId==this.id&&dn.triggerName==u&&dn.queued&&dn.destroy()});let pn=W.matchTransition(Ze.value,dt.value,l,dt.params),nn=!1;if(!pn){if(!k)return;pn=W.fallbackTransition,nn=!0}return this._engine.totalQueuedPlayers++,this._queue.push({element:l,triggerName:u,transition:pn,fromState:Ze,toState:dt,player:be,isFallbackTransition:nn}),nn||(_n(l,ni),be.onStart(()=>{Sn(l,ni)})),be.onDone(()=>{let dn=this.players.indexOf(be);dn>=0&&this.players.splice(dn,1);const Bn=this._engine.playersByElement.get(l);if(Bn){let mn=Bn.indexOf(be);mn>=0&&Bn.splice(mn,1)}}),this.players.push(be),Dn.push(be),be}deregister(l){this._triggers.delete(l),this._engine.statesByElement.forEach(u=>u.delete(l)),this._elementListeners.forEach((u,D)=>{this._elementListeners.set(D,u.filter(k=>k.name!=l))})}clearElementCache(l){this._engine.statesByElement.delete(l),this._elementListeners.delete(l);const u=this._engine.playersByElement.get(l);u&&(u.forEach(D=>D.destroy()),this._engine.playersByElement.delete(l))}_signalRemovalForInnerTriggers(l,u){const D=this._engine.driver.query(l,Ue,!0);D.forEach(k=>{if(k[_i])return;const W=this._engine.fetchNamespacesByElement(k);W.size?W.forEach(be=>be.triggerLeaveAnimation(k,u,!1,!0)):this.clearElementCache(k)}),this._engine.afterFlushAnimationsDone(()=>D.forEach(k=>this.clearElementCache(k)))}triggerLeaveAnimation(l,u,D,k){const W=this._engine.statesByElement.get(l),be=new Map;if(W){const Ie=[];if(W.forEach((Ze,dt)=>{if(be.set(dt,Ze.value),this._triggers.has(dt)){const Vt=this.trigger(l,dt,ti,k);Vt&&Ie.push(Vt)}}),Ie.length)return this._engine.markElementAsRemoved(this.id,l,!0,u,be),D&&nt(Ie).onDone(()=>this._engine.processLeaveNode(l)),!0}return!1}prepareLeaveAnimationListeners(l){const u=this._elementListeners.get(l),D=this._engine.statesByElement.get(l);if(u&&D){const k=new Set;u.forEach(W=>{const be=W.name;if(k.has(be))return;k.add(be);const Ze=this._triggers.get(be).fallbackTransition,dt=D.get(be)||Sr,Vt=new Ln(ti),Wt=new V(this.id,be,l);this._engine.totalQueuedPlayers++,this._queue.push({element:l,triggerName:be,transition:Ze,fromState:dt,toState:Vt,player:Wt,isFallbackTransition:!0})})}}removeNode(l,u){const D=this._engine;if(l.childElementCount&&this._signalRemovalForInnerTriggers(l,u),this.triggerLeaveAnimation(l,u,!0))return;let k=!1;if(D.totalAnimations){const W=D.players.length?D.playersByQueriedElement.get(l):[];if(W&&W.length)k=!0;else{let be=l;for(;be=be.parentNode;)if(D.statesByElement.get(be)){k=!0;break}}}if(this.prepareLeaveAnimationListeners(l),k)D.markElementAsRemoved(this.id,l,!1,u);else{const W=l[_i];(!W||W===Hr)&&(D.afterFlush(()=>this.clearElementCache(l)),D.destroyInnerAnimations(l),D._onRemovalComplete(l,u))}}insertNode(l,u){_n(l,this._hostClassName)}drainQueuedTransitions(l){const u=[];return this._queue.forEach(D=>{const k=D.player;if(k.destroyed)return;const W=D.element,be=this._elementListeners.get(W);be&&be.forEach(Ie=>{if(Ie.name==D.triggerName){const Ze=ct(W,D.triggerName,D.fromState.value,D.toState.value);Ze._data=l,je(D.player,Ie.phase,Ze,Ie.callback)}}),k.markedForDestroy?this._engine.afterFlush(()=>{k.destroy()}):u.push(D)}),this._queue=[],u.sort((D,k)=>{const W=D.transition.ast.depCount,be=k.transition.ast.depCount;return 0==W||0==be?W-be:this._engine.driver.containsElement(D.element,k.element)?1:-1})}destroy(l){this.players.forEach(u=>u.destroy()),this._signalRemovalForInnerTriggers(this.hostElement,l)}elementContainsData(l){let u=!1;return this._elementListeners.has(l)&&(u=!0),u=!!this._queue.find(D=>D.element===l)||u,u}}class C{constructor(l,u,D){this.bodyNode=l,this.driver=u,this._normalizer=D,this.players=[],this.newHostElements=new Map,this.playersByElement=new Map,this.playersByQueriedElement=new Map,this.statesByElement=new Map,this.disabledNodes=new Set,this.totalAnimations=0,this.totalQueuedPlayers=0,this._namespaceLookup={},this._namespaceList=[],this._flushFns=[],this._whenQuietFns=[],this.namespacesByHostElement=new Map,this.collectedEnterElements=[],this.collectedLeaveElements=[],this.onRemovalComplete=(k,W)=>{}}_onRemovalComplete(l,u){this.onRemovalComplete(l,u)}get queuedPlayers(){const l=[];return this._namespaceList.forEach(u=>{u.players.forEach(D=>{D.queued&&l.push(D)})}),l}createNamespace(l,u){const D=new Fn(l,u,this);return this.bodyNode&&this.driver.containsElement(this.bodyNode,u)?this._balanceNamespaceList(D,u):(this.newHostElements.set(u,D),this.collectEnterElement(u)),this._namespaceLookup[l]=D}_balanceNamespaceList(l,u){const D=this._namespaceList,k=this.namespacesByHostElement;if(D.length-1>=0){let be=!1,Ie=this.driver.getParentElement(u);for(;Ie;){const Ze=k.get(Ie);if(Ze){const dt=D.indexOf(Ze);D.splice(dt+1,0,l),be=!0;break}Ie=this.driver.getParentElement(Ie)}be||D.unshift(l)}else D.push(l);return k.set(u,l),l}register(l,u){let D=this._namespaceLookup[l];return D||(D=this.createNamespace(l,u)),D}registerTrigger(l,u,D){let k=this._namespaceLookup[l];k&&k.register(u,D)&&this.totalAnimations++}destroy(l,u){if(!l)return;const D=this._fetchNamespace(l);this.afterFlush(()=>{this.namespacesByHostElement.delete(D.hostElement),delete this._namespaceLookup[l];const k=this._namespaceList.indexOf(D);k>=0&&this._namespaceList.splice(k,1)}),this.afterFlushAnimationsDone(()=>D.destroy(u))}_fetchNamespace(l){return this._namespaceLookup[l]}fetchNamespacesByElement(l){const u=new Set,D=this.statesByElement.get(l);if(D)for(let k of D.values())if(k.namespaceId){const W=this._fetchNamespace(k.namespaceId);W&&u.add(W)}return u}trigger(l,u,D,k){if(we(u)){const W=this._fetchNamespace(l);if(W)return W.trigger(u,D,k),!0}return!1}insertNode(l,u,D,k){if(!we(u))return;const W=u[_i];if(W&&W.setForRemoval){W.setForRemoval=!1,W.setForMove=!0;const be=this.collectedLeaveElements.indexOf(u);be>=0&&this.collectedLeaveElements.splice(be,1)}if(l){const be=this._fetchNamespace(l);be&&be.insertNode(u,D)}k&&this.collectEnterElement(u)}collectEnterElement(l){this.collectedEnterElements.push(l)}markElementAsDisabled(l,u){u?this.disabledNodes.has(l)||(this.disabledNodes.add(l),_n(l,pr)):this.disabledNodes.has(l)&&(this.disabledNodes.delete(l),Sn(l,pr))}removeNode(l,u,D,k){if(we(u)){const W=l?this._fetchNamespace(l):null;if(W?W.removeNode(u,k):this.markElementAsRemoved(l,u,!1,k),D){const be=this.namespacesByHostElement.get(u);be&&be.id!==l&&be.removeNode(u,k)}}else this._onRemovalComplete(u,k)}markElementAsRemoved(l,u,D,k,W){this.collectedLeaveElements.push(u),u[_i]={namespaceId:l,setForRemoval:k,hasAnimation:D,removedBeforeQueried:!1,previousTriggersValues:W}}listen(l,u,D,k,W){return we(u)?this._fetchNamespace(l).listen(u,D,k,W):()=>{}}_buildInstruction(l,u,D,k,W){return l.transition.build(this.driver,l.element,l.fromState.value,l.toState.value,D,k,l.fromState.options,l.toState.options,u,W)}destroyInnerAnimations(l){let u=this.driver.query(l,Ue,!0);u.forEach(D=>this.destroyActiveAnimationsForElement(D)),0!=this.playersByQueriedElement.size&&(u=this.driver.query(l,_e,!0),u.forEach(D=>this.finishActiveQueriedAnimationOnElement(D)))}destroyActiveAnimationsForElement(l){const u=this.playersByElement.get(l);u&&u.forEach(D=>{D.queued?D.markedForDestroy=!0:D.destroy()})}finishActiveQueriedAnimationOnElement(l){const u=this.playersByQueriedElement.get(l);u&&u.forEach(D=>D.finish())}whenRenderingDone(){return new Promise(l=>{if(this.players.length)return nt(this.players).onDone(()=>l());l()})}processLeaveNode(l){const u=l[_i];if(u&&u.setForRemoval){if(l[_i]=Hr,u.namespaceId){this.destroyInnerAnimations(l);const D=this._fetchNamespace(u.namespaceId);D&&D.clearElementCache(l)}this._onRemovalComplete(l,u.setForRemoval)}l.classList?.contains(pr)&&this.markElementAsDisabled(l,!1),this.driver.query(l,".ng-animate-disabled",!0).forEach(D=>{this.markElementAsDisabled(D,!1)})}flush(l=-1){let u=[];if(this.newHostElements.size&&(this.newHostElements.forEach((D,k)=>this._balanceNamespaceList(D,k)),this.newHostElements.clear()),this.totalAnimations&&this.collectedEnterElements.length)for(let D=0;D<this.collectedEnterElements.length;D++)_n(this.collectedEnterElements[D],"ng-star-inserted");if(this._namespaceList.length&&(this.totalQueuedPlayers||this.collectedLeaveElements.length)){const D=[];try{u=this._flushAnimations(D,l)}finally{for(let k=0;k<D.length;k++)D[k]()}}else for(let D=0;D<this.collectedLeaveElements.length;D++)this.processLeaveNode(this.collectedLeaveElements[D]);if(this.totalQueuedPlayers=0,this.collectedEnterElements.length=0,this.collectedLeaveElements.length=0,this._flushFns.forEach(D=>D()),this._flushFns=[],this._whenQuietFns.length){const D=this._whenQuietFns;this._whenQuietFns=[],u.length?nt(u).onDone(()=>{D.forEach(k=>k())}):D.forEach(k=>k())}}reportError(l){throw function Pt(R){return new s.vHH(3402,G)}()}_flushAnimations(l,u){const D=new Ii,k=[],W=new Map,be=[],Ie=new Map,Ze=new Map,dt=new Map,Vt=new Set;this.disabledNodes.forEach(zt=>{Vt.add(zt);const en=this.driver.query(zt,".ng-animate-queued",!0);for(let an=0;an<en.length;an++)Vt.add(en[an])});const Wt=this.bodyNode,Dn=Array.from(this.statesByElement.keys()),pn=Rn(Dn,this.collectedEnterElements),nn=new Map;let dn=0;pn.forEach((zt,en)=>{const an=Qe+dn++;nn.set(en,an),zt.forEach(In=>_n(In,an))});const Bn=[],mn=new Set,jn=new Set;for(let zt=0;zt<this.collectedLeaveElements.length;zt++){const en=this.collectedLeaveElements[zt],an=en[_i];an&&an.setForRemoval&&(Bn.push(en),mn.add(en),an.hasAnimation?this.driver.query(en,".ng-star-inserted",!0).forEach(In=>mn.add(In)):jn.add(en))}const En=new Map,oi=Rn(Dn,Array.from(mn));oi.forEach((zt,en)=>{const an=he+dn++;En.set(en,an),zt.forEach(In=>_n(In,an))}),l.push(()=>{pn.forEach((zt,en)=>{const an=nn.get(en);zt.forEach(In=>Sn(In,an))}),oi.forEach((zt,en)=>{const an=En.get(en);zt.forEach(In=>Sn(In,an))}),Bn.forEach(zt=>{this.processLeaveNode(zt)})});const zr=[],Ki=[];for(let zt=this._namespaceList.length-1;zt>=0;zt--)this._namespaceList[zt].drainQueuedTransitions(u).forEach(an=>{const In=an.player,Gn=an.element;if(zr.push(In),this.collectedEnterElements.length){const ei=Gn[_i];if(ei&&ei.setForMove){if(ei.previousTriggersValues&&ei.previousTriggersValues.has(an.triggerName)){const ar=ei.previousTriggersValues.get(an.triggerName),Di=this.statesByElement.get(an.element);if(Di&&Di.has(an.triggerName)){const $r=Di.get(an.triggerName);$r.value=ar,Di.set(an.triggerName,$r)}}return void In.destroy()}}const Fi=!Wt||!this.driver.containsElement(Wt,Gn),xi=En.get(Gn),Jn=nn.get(Gn),Kn=this._buildInstruction(an,D,Jn,xi,Fi);if(Kn.errors&&Kn.errors.length)return void Ki.push(Kn);if(Fi)return In.onStart(()=>On(Gn,Kn.fromStyles)),In.onDestroy(()=>vn(Gn,Kn.toStyles)),void k.push(In);if(an.isFallbackTransition)return In.onStart(()=>On(Gn,Kn.fromStyles)),In.onDestroy(()=>vn(Gn,Kn.toStyles)),void k.push(In);const Vo=[];Kn.timelines.forEach(ei=>{ei.stretchStartingKeyframe=!0,this.disabledNodes.has(ei.element)||Vo.push(ei)}),Kn.timelines=Vo,D.append(Gn,Kn.timelines),be.push({instruction:Kn,player:In,element:Gn}),Kn.queriedElements.forEach(ei=>gt(Ie,ei,[]).push(In)),Kn.preStyleProps.forEach((ei,ar)=>{if(ei.size){let Di=Ze.get(ar);Di||Ze.set(ar,Di=new Set),ei.forEach(($r,bo)=>Di.add(bo))}}),Kn.postStyleProps.forEach((ei,ar)=>{let Di=dt.get(ar);Di||dt.set(ar,Di=new Set),ei.forEach(($r,bo)=>Di.add(bo))})});if(Ki.length){const zt=[];Ki.forEach(en=>{zt.push(function Ce(R,l){return new s.vHH(3505,G)}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */())}),zr.forEach(en=>en.destroy()),this.reportError(zt)}const pi=new Map,Oi=new Map;be.forEach(zt=>{const en=zt.element;D.has(en)&&(Oi.set(en,en),this._beforeAnimationBuild(zt.player.namespaceId,zt.instruction,pi))}),k.forEach(zt=>{const en=zt.element;this._getPreviousPlayers(en,!1,zt.namespaceId,zt.triggerName,null).forEach(In=>{gt(pi,en,[]).push(In),In.destroy()})});const or=Bn.filter(zt=>Hi(zt,Ze,dt)),Pi=new Map;kt(Pi,this.driver,jn,dt,M.l3).forEach(zt=>{Hi(zt,Ze,dt)&&or.push(zt)});const sr=new Map;pn.forEach((zt,en)=>{kt(sr,this.driver,new Set(zt),Ze,M.k1)}),or.forEach(zt=>{const en=Pi.get(zt),an=sr.get(zt);Pi.set(zt,new Map([...Array.from(en?.entries()??[]),...Array.from(an?.entries()??[])]))});const Ui=[],so=[],Bo={};be.forEach(zt=>{const{element:en,player:an,instruction:In}=zt;if(D.has(en)){if(Vt.has(en))return an.onDestroy(()=>vn(en,In.toStyles)),an.disabled=!0,an.overrideTotalTime(In.totalTime),void k.push(an);let Gn=Bo;if(Oi.size>1){let xi=en;const Jn=[];for(;xi=xi.parentNode;){const Kn=Oi.get(xi);if(Kn){Gn=Kn;break}Jn.push(xi)}Jn.forEach(Kn=>Oi.set(Kn,Gn))}const Fi=this._buildAnimation(an.namespaceId,In,pi,W,sr,Pi);if(an.setRealPlayer(Fi),Gn===Bo)Ui.push(an);else{const xi=this.playersByElement.get(Gn);xi&&xi.length&&(an.parentPlayer=nt(xi)),k.push(an)}}else On(en,In.fromStyles),an.onDestroy(()=>vn(en,In.toStyles)),so.push(an),Vt.has(en)&&k.push(an)}),so.forEach(zt=>{const en=W.get(zt.element);if(en&&en.length){const an=nt(en);zt.setRealPlayer(an)}}),k.forEach(zt=>{zt.parentPlayer?zt.syncPlayerEvents(zt.parentPlayer):zt.destroy()});for(let zt=0;zt<Bn.length;zt++){const en=Bn[zt],an=en[_i];if(Sn(en,he),an&&an.hasAnimation)continue;let In=[];if(Ie.size){let Fi=Ie.get(en);Fi&&Fi.length&&In.push(...Fi);let xi=this.driver.query(en,_e,!0);for(let Jn=0;Jn<xi.length;Jn++){let Kn=Ie.get(xi[Jn]);Kn&&Kn.length&&In.push(...Kn)}}const Gn=In.filter(Fi=>!Fi.destroyed);Gn.length?fn(this,en,Gn):this.processLeaveNode(en)}return Bn.length=0,Ui.forEach(zt=>{this.players.push(zt),zt.onDone(()=>{zt.destroy();const en=this.players.indexOf(zt);this.players.splice(en,1)}),zt.play()}),Ui}elementContainsData(l,u){let D=!1;const k=u[_i];return k&&k.setForRemoval&&(D=!0),this.playersByElement.has(u)&&(D=!0),this.playersByQueriedElement.has(u)&&(D=!0),this.statesByElement.has(u)&&(D=!0),this._fetchNamespace(l).elementContainsData(u)||D}afterFlush(l){this._flushFns.push(l)}afterFlushAnimationsDone(l){this._whenQuietFns.push(l)}_getPreviousPlayers(l,u,D,k,W){let be=[];if(u){const Ie=this.playersByQueriedElement.get(l);Ie&&(be=Ie)}else{const Ie=this.playersByElement.get(l);if(Ie){const Ze=!W||W==ti;Ie.forEach(dt=>{dt.queued||!Ze&&dt.triggerName!=k||be.push(dt)})}}return(D||k)&&(be=be.filter(Ie=>!(D&&D!=Ie.namespaceId||k&&k!=Ie.triggerName))),be}_beforeAnimationBuild(l,u,D){const W=u.element,be=u.isRemovalTransition?void 0:l,Ie=u.isRemovalTransition?void 0:u.triggerName;for(const Ze of u.timelines){const dt=Ze.element,Vt=dt!==W,Wt=gt(D,dt,[]);this._getPreviousPlayers(dt,Vt,be,Ie,u.toState).forEach(pn=>{const nn=pn.getRealPlayer();nn.beforeDestroy&&nn.beforeDestroy(),pn.destroy(),Wt.push(pn)})}On(W,u.fromStyles)}_buildAnimation(l,u,D,k,W,be){const Ie=u.triggerName,Ze=u.element,dt=[],Vt=new Set,Wt=new Set,Dn=u.timelines.map(nn=>{const dn=nn.element;Vt.add(dn);const Bn=dn[_i];if(Bn&&Bn.removedBeforeQueried)return new M.ZN(nn.duration,nn.delay);const mn=dn!==Ze,jn=function Yn(R){const l=[];return An(R,l),l}((D.get(dn)||ii).map(pi=>pi.getRealPlayer())).filter(pi=>!!pi.element&&pi.element===dn),En=W.get(dn),oi=be.get(dn),zr=rt(0,this._normalizer,0,nn.keyframes,En,oi),Ki=this._buildPlayer(nn,zr,jn);if(nn.subTimeline&&k&&Wt.add(dn),mn){const pi=new V(l,Ie,dn);pi.setRealPlayer(Ki),dt.push(pi)}return Ki});dt.forEach(nn=>{gt(this.playersByQueriedElement,nn.element,[]).push(nn),nn.onDone(()=>function E(R,l,u){let D=R.get(l);if(D){if(D.length){const k=D.indexOf(u);D.splice(k,1)}0==D.length&&R.delete(l)}return D}(this.playersByQueriedElement,nn.element,nn))}),Vt.forEach(nn=>_n(nn,Te));const pn=nt(Dn);return pn.onDestroy(()=>{Vt.forEach(nn=>Sn(nn,Te)),vn(Ze,u.toStyles)}),Wt.forEach(nn=>{gt(k,nn,[]).push(pn)}),pn}_buildPlayer(l,u,D){return u.length>0?this.driver.animate(l.element,u,l.duration,l.delay,l.easing,D):new M.ZN(l.duration,l.delay)}}class V{constructor(l,u,D){this.namespaceId=l,this.triggerName=u,this.element=D,this._player=new M.ZN,this._containsRealPlayer=!1,this._queuedCallbacks=new Map,this.destroyed=!1,this.markedForDestroy=!1,this.disabled=!1,this.queued=!0,this.totalTime=0}setRealPlayer(l){this._containsRealPlayer||(this._player=l,this._queuedCallbacks.forEach((u,D)=>{u.forEach(k=>je(l,D,void 0,k))}),this._queuedCallbacks.clear(),this._containsRealPlayer=!0,this.overrideTotalTime(l.totalTime),this.queued=!1)}getRealPlayer(){return this._player}overrideTotalTime(l){this.totalTime=l}syncPlayerEvents(l){const u=this._player;u.triggerCallback&&l.onStart(()=>u.triggerCallback("start")),l.onDone(()=>this.finish()),l.onDestroy(()=>this.destroy())}_queueEvent(l,u){gt(this._queuedCallbacks,l,[]).push(u)}onDone(l){this.queued&&this._queueEvent("done",l),this._player.onDone(l)}onStart(l){this.queued&&this._queueEvent("start",l),this._player.onStart(l)}onDestroy(l){this.queued&&this._queueEvent("destroy",l),this._player.onDestroy(l)}init(){this._player.init()}hasStarted(){return!this.queued&&this._player.hasStarted()}play(){!this.queued&&this._player.play()}pause(){!this.queued&&this._player.pause()}restart(){!this.queued&&this._player.restart()}finish(){this._player.finish()}destroy(){this.destroyed=!0,this._player.destroy()}reset(){!this.queued&&this._player.reset()}setPosition(l){this.queued||this._player.setPosition(l)}getPosition(){return this.queued?0:this._player.getPosition()}triggerCallback(l){const u=this._player;u.triggerCallback&&u.triggerCallback(l)}}function we(R){return R&&1===R.nodeType}function _t(R,l){const u=R.style.display;return R.style.display=l??"none",u}function kt(R,l,u,D,k){const W=[];u.forEach(Ze=>W.push(_t(Ze)));const be=[];D.forEach((Ze,dt)=>{const Vt=new Map;Ze.forEach(Wt=>{const Dn=l.computeStyle(dt,Wt,k);Vt.set(Wt,Dn),(!Dn||0==Dn.length)&&(dt[_i]=ir,be.push(dt))}),R.set(dt,Vt)});let Ie=0;return u.forEach(Ze=>_t(Ze,W[Ie++])),be}function Rn(R,l){const u=new Map;if(R.forEach(Ie=>u.set(Ie,[])),0==l.length)return u;const k=new Set(l),W=new Map;function be(Ie){if(!Ie)return 1;let Ze=W.get(Ie);if(Ze)return Ze;const dt=Ie.parentNode;return Ze=u.has(dt)?dt:k.has(dt)?1:be(dt),W.set(Ie,Ze),Ze}return l.forEach(Ie=>{const Ze=be(Ie);1!==Ze&&u.get(Ze).push(Ie)}),u}function _n(R,l){R.classList?.add(l)}function Sn(R,l){R.classList?.remove(l)}function fn(R,l,u){nt(u).onDone(()=>R.processLeaveNode(l))}function An(R,l){for(let u=0;u<R.length;u++){const D=R[u];D instanceof M.ZE?An(D.players,l):l.push(D)}}function Hi(R,l,u){const D=u.get(R);if(!D)return!1;let k=l.get(R);return k?D.forEach(W=>k.add(W)):l.set(R,D),u.delete(R),!0}class ri{constructor(l,u,D){this.bodyNode=l,this._driver=u,this._normalizer=D,this._triggerCache={},this.onRemovalComplete=(k,W)=>{},this._transitionEngine=new C(l,u,D),this._timelineEngine=new yo(l,u,D),this._transitionEngine.onRemovalComplete=(k,W)=>this.onRemovalComplete(k,W)}registerTrigger(l,u,D,k,W){const be=l+"-"+k;let Ie=this._triggerCache[be];if(!Ie){const Ze=[],Vt=Xt(this._driver,W,Ze,[]);if(Ze.length)throw function fe(R,l){return new s.vHH(3404,G)}();Ie=function er(R,l,u){return new tr(R,l,u)}(k,Vt,this._normalizer),this._triggerCache[be]=Ie}this._transitionEngine.registerTrigger(u,k,Ie)}register(l,u){this._transitionEngine.register(l,u)}destroy(l,u){this._transitionEngine.destroy(l,u)}onInsert(l,u,D,k){this._transitionEngine.insertNode(l,u,D,k)}onRemove(l,u,D,k){this._transitionEngine.removeNode(l,u,k||!1,D)}disableAnimations(l,u){this._transitionEngine.markElementAsDisabled(l,u)}process(l,u,D,k){if("@"==D.charAt(0)){const[W,be]=Gt(D);this._timelineEngine.command(W,u,be,k)}else this._transitionEngine.trigger(l,u,D,k)}listen(l,u,D,k,W){if("@"==D.charAt(0)){const[be,Ie]=Gt(D);return this._timelineEngine.listen(be,u,Ie,W)}return this._transitionEngine.listen(l,u,D,k,W)}flush(l=-1){this._transitionEngine.flush(l)}get players(){return this._transitionEngine.players.concat(this._timelineEngine.players)}whenRenderingDone(){return this._transitionEngine.whenRenderingDone()}}let Si=(()=>{class R{constructor(u,D,k){this._element=u,this._startStyles=D,this._endStyles=k,this._state=0;let W=R.initialStylesByElement.get(u);W||R.initialStylesByElement.set(u,W=new Map),this._initialStyles=W}start(){this._state<1&&(this._startStyles&&vn(this._element,this._startStyles,this._initialStyles),this._state=1)}finish(){this.start(),this._state<2&&(vn(this._element,this._initialStyles),this._endStyles&&(vn(this._element,this._endStyles),this._endStyles=null),this._state=1)}destroy(){this.finish(),this._state<3&&(R.initialStylesByElement.delete(this._element),this._startStyles&&(On(this._element,this._startStyles),this._endStyles=null),this._endStyles&&(On(this._element,this._endStyles),this._endStyles=null),vn(this._element,this._initialStyles),this._state=3)}}return R.initialStylesByElement=new WeakMap,R})();function _r(R){let l=null;return R.forEach((u,D)=>{(function Ar(R){return"display"===R||"position"===R})(D)&&(l=l||new Map,l.set(D,u))}),l}class jr{constructor(l,u,D,k){this.element=l,this.keyframes=u,this.options=D,this._specialStyles=k,this._onDoneFns=[],this._onStartFns=[],this._onDestroyFns=[],this._initialized=!1,this._finished=!1,this._started=!1,this._destroyed=!1,this.time=0,this.parentPlayer=null,this.currentSnapshot=new Map,this._duration=D.duration,this._delay=D.delay||0,this.time=this._duration+this._delay}_onFinish(){this._finished||(this._finished=!0,this._onDoneFns.forEach(l=>l()),this._onDoneFns=[])}init(){this._buildPlayer(),this._preparePlayerBeforeStart()}_buildPlayer(){if(this._initialized)return;this._initialized=!0;const l=this.keyframes;this.domPlayer=this._triggerWebAnimation(this.element,l,this.options),this._finalKeyframe=l.length?l[l.length-1]:new Map,this.domPlayer.addEventListener("finish",()=>this._onFinish())}_preparePlayerBeforeStart(){this._delay?this._resetDomPlayerState():this.domPlayer.pause()}_convertKeyframesToObject(l){const u=[];return l.forEach(D=>{u.push(Object.fromEntries(D))}),u}_triggerWebAnimation(l,u,D){return l.animate(this._convertKeyframesToObject(u),D)}onStart(l){this._onStartFns.push(l)}onDone(l){this._onDoneFns.push(l)}onDestroy(l){this._onDestroyFns.push(l)}play(){this._buildPlayer(),this.hasStarted()||(this._onStartFns.forEach(l=>l()),this._onStartFns=[],this._started=!0,this._specialStyles&&this._specialStyles.start()),this.domPlayer.play()}pause(){this.init(),this.domPlayer.pause()}finish(){this.init(),this._specialStyles&&this._specialStyles.finish(),this._onFinish(),this.domPlayer.finish()}reset(){this._resetDomPlayerState(),this._destroyed=!1,this._finished=!1,this._started=!1}_resetDomPlayerState(){this.domPlayer&&this.domPlayer.cancel()}restart(){this.reset(),this.play()}hasStarted(){return this._started}destroy(){this._destroyed||(this._destroyed=!0,this._resetDomPlayerState(),this._onFinish(),this._specialStyles&&this._specialStyles.destroy(),this._onDestroyFns.forEach(l=>l()),this._onDestroyFns=[])}setPosition(l){void 0===this.domPlayer&&this.init(),this.domPlayer.currentTime=l*this.time}getPosition(){return this.domPlayer.currentTime/this.time}get totalTime(){return this._delay+this._duration}beforeDestroy(){const l=new Map;this.hasStarted()&&this._finalKeyframe.forEach((D,k)=>{"offset"!==k&&l.set(k,this._finished?D:ai(this.element,k))}),this.currentSnapshot=l}triggerCallback(l){const u="start"===l?this._onStartFns:this._onDoneFns;u.forEach(D=>D()),u.length=0}}class w{validateStyleProperty(l){return!0}validateAnimatableStyleProperty(l){return!0}matchesElement(l,u){return!1}containsElement(l,u){return ve(l,u)}getParentElement(l){return B(l)}query(l,u,D){return se(l,u,D)}computeStyle(l,u,D){return window.getComputedStyle(l)[u]}animate(l,u,D,k,W,be=[]){const Ze={duration:D,delay:k,fill:0==k?"both":"forwards"};W&&(Ze.easing=W);const dt=new Map,Vt=be.filter(pn=>pn instanceof jr);(function hn(R,l){return 0===R||0===l})(D,k)&&Vt.forEach(pn=>{pn.currentSnapshot.forEach((nn,dn)=>dt.set(dn,nn))});let Wt=function Zn(R){return R.length?R[0]instanceof Map?R:R.map(l=>bn(l)):[]}(u).map(pn=>wn(pn));Wt=function Pn(R,l,u){if(u.size&&l.length){let D=l[0],k=[];if(u.forEach((W,be)=>{D.has(be)||k.push(be),D.set(be,W)}),k.length)for(let W=1;W<l.length;W++){let be=l[W];k.forEach(Ie=>be.set(Ie,ai(R,Ie)))}}return l}(l,Wt,dt);const Dn=function gr(R,l){let u=null,D=null;return Array.isArray(l)&&l.length?(u=_r(l[0]),l.length>1&&(D=_r(l[l.length-1]))):l instanceof Map&&(u=_r(l)),u||D?new Si(R,u,D):null}(l,Wt);return new jr(l,Wt,Ze,Dn)}}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */var m=y(6895);
/**
     * @license Angular v14.0.1
     * (c) 2010-2022 Google LLC. https://angular.io/
     * License: MIT
     */
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */let g=(()=>{class R extends M._j{constructor(u,D){super(),this._nextAnimationId=0,this._renderer=u.createRenderer(D.body,{id:"0",encapsulation:s.ifc.None,styles:[],data:{animation:[]}})}build(u){const D=this._nextAnimationId.toString();this._nextAnimationId++;const k=Array.isArray(u)?(0,M.vP)(u):u;return It(this._renderer,null,D,"register",[k]),new H(D,this._renderer)}}return R.\u0275fac=function(u){return new(u||R)(s.LFG(s.FYo),s.LFG(m.K0))},R.\u0275prov=s.Yz7({token:R,factory:R.\u0275fac}),R})();class H extends M.LC{constructor(l,u){super(),this._id=l,this._renderer=u}create(l,u){return new tt(this._id,l,u||{},this._renderer)}}class tt{constructor(l,u,D,k){this.id=l,this.element=u,this._renderer=k,this.parentPlayer=null,this._started=!1,this.totalTime=0,this._command("create",D)}_listen(l,u){return this._renderer.listen(this.element,`@@${this.id}:${l}`,u)}_command(l,...u){return It(this._renderer,this.element,this.id,l,u)}onDone(l){this._listen("done",l)}onStart(l){this._listen("start",l)}onDestroy(l){this._listen("destroy",l)}init(){this._command("init")}hasStarted(){return this._started}play(){this._command("play"),this._started=!0}pause(){this._command("pause")}restart(){this._command("restart")}finish(){this._command("finish")}destroy(){this._command("destroy")}reset(){this._command("reset"),this._started=!1}setPosition(l){this._command("setPosition",l)}getPosition(){return this._renderer.engine.players[+this.id]?.getPosition()??0}}function It(R,l,u,D,k){return R.setProperty(l,`@@${u}:${D}`,k)}const li="@.disabled";let yi=(()=>{class R{constructor(u,D,k){this.delegate=u,this.engine=D,this._zone=k,this._currentId=0,this._microtaskId=1,this._animationCallbacksBuffer=[],this._rendererCache=new Map,this._cdRecurDepth=0,this.promise=Promise.resolve(0),D.onRemovalComplete=(W,be)=>{const Ie=be?.parentNode(W);Ie&&be.removeChild(Ie,W)}}createRenderer(u,D){const W=this.delegate.createRenderer(u,D);if(!(u&&D&&D.data&&D.data.animation)){let Vt=this._rendererCache.get(W);return Vt||(Vt=new ji("",W,this.engine),this._rendererCache.set(W,Vt)),Vt}const be=D.id,Ie=D.id+"-"+this._currentId;this._currentId++,this.engine.register(Ie,u);const Ze=Vt=>{Array.isArray(Vt)?Vt.forEach(Ze):this.engine.registerTrigger(be,Ie,u,Vt.name,Vt)};return D.data.animation.forEach(Ze),new Tr(this,Ie,W,this.engine)}begin(){this._cdRecurDepth++,this.delegate.begin&&this.delegate.begin()}_scheduleCountTask(){this.promise.then(()=>{this._microtaskId++})}scheduleListenerCallback(u,D,k){u>=0&&u<this._microtaskId?this._zone.run(()=>D(k)):(0==this._animationCallbacksBuffer.length&&Promise.resolve(null).then(()=>{this._zone.run(()=>{this._animationCallbacksBuffer.forEach(W=>{const[be,Ie]=W;be(Ie)}),this._animationCallbacksBuffer=[]})}),this._animationCallbacksBuffer.push([D,k]))}end(){this._cdRecurDepth--,0==this._cdRecurDepth&&this._zone.runOutsideAngular(()=>{this._scheduleCountTask(),this.engine.flush(this._microtaskId)}),this.delegate.end&&this.delegate.end()}whenRenderingDone(){return this.engine.whenRenderingDone()}}return R.\u0275fac=function(u){return new(u||R)(s.LFG(s.FYo),s.LFG(ri),s.LFG(s.R0b))},R.\u0275prov=s.Yz7({token:R,factory:R.\u0275fac}),R})();class ji{constructor(l,u,D){this.namespaceId=l,this.delegate=u,this.engine=D,this.destroyNode=this.delegate.destroyNode?k=>u.destroyNode(k):null}get data(){return this.delegate.data}destroy(){this.engine.destroy(this.namespaceId,this.delegate),this.delegate.destroy()}createElement(l,u){return this.delegate.createElement(l,u)}createComment(l){return this.delegate.createComment(l)}createText(l){return this.delegate.createText(l)}appendChild(l,u){this.delegate.appendChild(l,u),this.engine.onInsert(this.namespaceId,u,l,!1)}insertBefore(l,u,D,k=!0){this.delegate.insertBefore(l,u,D),this.engine.onInsert(this.namespaceId,u,l,k)}removeChild(l,u,D){this.engine.onRemove(this.namespaceId,u,this.delegate,D)}selectRootElement(l,u){return this.delegate.selectRootElement(l,u)}parentNode(l){return this.delegate.parentNode(l)}nextSibling(l){return this.delegate.nextSibling(l)}setAttribute(l,u,D,k){this.delegate.setAttribute(l,u,D,k)}removeAttribute(l,u,D){this.delegate.removeAttribute(l,u,D)}addClass(l,u){this.delegate.addClass(l,u)}removeClass(l,u){this.delegate.removeClass(l,u)}setStyle(l,u,D,k){this.delegate.setStyle(l,u,D,k)}removeStyle(l,u,D){this.delegate.removeStyle(l,u,D)}setProperty(l,u,D){"@"==u.charAt(0)&&u==li?this.disableAnimations(l,!!D):this.delegate.setProperty(l,u,D)}setValue(l,u){this.delegate.setValue(l,u)}listen(l,u,D){return this.delegate.listen(l,u,D)}disableAnimations(l,u){this.engine.disableAnimations(l,u)}}class Tr extends ji{constructor(l,u,D,k){super(u,D,k),this.factory=l,this.namespaceId=u}setProperty(l,u,D){"@"==u.charAt(0)?"."==u.charAt(1)&&u==li?this.disableAnimations(l,D=void 0===D||!!D):this.engine.process(this.namespaceId,l,u.slice(1),D):this.delegate.setProperty(l,u,D)}listen(l,u,D){if("@"==u.charAt(0)){const k=function ra(R){switch(R){case"body":return document.body;case"document":return document;case"window":return window;default:return R}}(l);let W=u.slice(1),be="";return"@"!=W.charAt(0)&&([W,be]=function bs(R){const l=R.indexOf(".");return[R.substring(0,l),R.slice(l+1)]}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */(W)),this.engine.listen(this.namespaceId,k,W,be,Ie=>{this.factory.scheduleListenerCallback(Ie._data||-1,D,Ie)})}return this.delegate.listen(l,u,D)}}const Yi=[{provide:M._j,useClass:g},{provide:Bi,useFactory:function Do(){return new Er}},{provide:ri,useClass:(()=>{class R extends ri{constructor(u,D,k){super(u.body,D,k)}ngOnDestroy(){this.flush()}}return R.\u0275fac=function(u){return new(u||R)(s.LFG(m.K0),s.LFG(Ut),s.LFG(Bi))},R.\u0275prov=s.Yz7({token:R,factory:R.\u0275fac}),R})()},{provide:s.FYo,useFactory:function vi(R,l,u){return new yi(R,l,u)},deps:[v.se,ri,s.R0b]}],So=[{provide:Ut,useFactory:()=>new w},{provide:s.QbO,useValue:"BrowserAnimations"},...Yi],Ur=[{provide:Ut,useClass:Rt},{provide:s.QbO,useValue:"NoopAnimations"},...Yi];
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */let rr=(()=>{class R{static withConfig(u){return{ngModule:R,providers:u.disableAnimations?Ur:So}}}return R.\u0275fac=function(u){return new(u||R)},R.\u0275mod=s.oAB({type:R}),R.\u0275inj=s.cJS({providers:So,imports:[v.b2]}),R})();
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */},1481:(St,He,y)=>{y.d(He,{Dx:()=>$,H7:()=>On,b2:()=>j,q6:()=>Mt,se:()=>le});var s=y(6895),v=y(4650);
/**
     * @license Angular v14.0.1
     * (c) 2010-2022 Google LLC. https://angular.io/
     * License: MIT
     */
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */class M extends s.w_{constructor(){super(...arguments),this.supportsDOMEvents=!0}}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */class G extends M{static makeCurrent(){(0,s.HT)(new G)}onAndCancel(pe,ne,Pe){return pe.addEventListener(ne,Pe,!1),()=>{pe.removeEventListener(ne,Pe,!1)}}dispatchEvent(pe,ne){pe.dispatchEvent(ne)}remove(pe){pe.parentNode&&pe.parentNode.removeChild(pe)}createElement(pe,ne){return(ne=ne||this.getDefaultDocument()).createElement(pe)}createHtmlDocument(){return document.implementation.createHTMLDocument("fakeTitle")}getDefaultDocument(){return document}isElementNode(pe){return pe.nodeType===Node.ELEMENT_NODE}isShadowRoot(pe){return pe instanceof DocumentFragment}getGlobalEventTarget(pe,ne){return"window"===ne?window:"document"===ne?pe:"body"===ne?pe.body:null}getBaseHref(pe){const ne=function K(){return X=X||document.querySelector("base"),X?X.getAttribute("href"):null}();return null==ne?null:function q(Oe){ue=ue||document.createElement("a"),ue.setAttribute("href",Oe);const pe=ue.pathname;return"/"===pe.charAt(0)?pe:`/${pe}`}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */(ne)}resetBaseElement(){X=null}getUserAgent(){return window.navigator.userAgent}getCookie(pe){return(0,s.Mx)(document.cookie,pe)}}let ue,X=null;const Me=new v.OlP("TRANSITION_ID"),me=[{provide:v.ip1,useFactory:function ce(Oe,pe,ne){return()=>{ne.get(v.CZH).donePromise.then(()=>{const Pe=(0,s.q)(),ut=pe.querySelectorAll(`style[ng-transition="${Oe}"]`);for(let Ot=0;Ot<ut.length;Ot++)Pe.remove(ut[Ot])})}},deps:[Me,s.K0,v.zs3],multi:!0}];let Ge=(()=>{class Oe{build(){return new XMLHttpRequest}}return Oe.\u0275fac=function(ne){return new(ne||Oe)},Oe.\u0275prov=v.Yz7({token:Oe,factory:Oe.\u0275fac}),Oe})();
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */const Ve=new v.OlP("EventManagerPlugins");let xe=(()=>{class Oe{constructor(ne,Pe){this._zone=Pe,this._eventNameToPlugin=new Map,ne.forEach(ut=>ut.manager=this),this._plugins=ne.slice().reverse()}addEventListener(ne,Pe,ut){return this._findPluginFor(Pe).addEventListener(ne,Pe,ut)}addGlobalEventListener(ne,Pe,ut){return this._findPluginFor(Pe).addGlobalEventListener(ne,Pe,ut)}getZone(){return this._zone}_findPluginFor(ne){const Pe=this._eventNameToPlugin.get(ne);if(Pe)return Pe;const ut=this._plugins;for(let Ot=0;Ot<ut.length;Ot++){const hn=ut[Ot];if(hn.supports(ne))return this._eventNameToPlugin.set(ne,hn),hn}throw new Error(`No event manager plugin found for event ${ne}`)}}return Oe.\u0275fac=function(ne){return new(ne||Oe)(v.LFG(Ve),v.LFG(v.R0b))},Oe.\u0275prov=v.Yz7({token:Oe,factory:Oe.\u0275fac}),Oe})();class Ke{constructor(pe){this._doc=pe}addGlobalEventListener(pe,ne,Pe){const ut=(0,s.q)().getGlobalEventTarget(this._doc,pe);if(!ut)throw new Error(`Unsupported event target ${ut} for event ${ne}`);return this.addEventListener(ut,ne,Pe)}}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */let Ne=(()=>{class Oe{constructor(){this._stylesSet=new Set}addStyles(ne){const Pe=new Set;ne.forEach(ut=>{this._stylesSet.has(ut)||(this._stylesSet.add(ut),Pe.add(ut))}),this.onStylesAdded(Pe)}onStylesAdded(ne){}getAllStyles(){return Array.from(this._stylesSet)}}return Oe.\u0275fac=function(ne){return new(ne||Oe)},Oe.\u0275prov=v.Yz7({token:Oe,factory:Oe.\u0275fac}),Oe})(),qe=(()=>{class Oe extends Ne{constructor(ne){super(),this._doc=ne,this._hostNodes=new Map,this._hostNodes.set(ne.head,[])}_addStylesToHost(ne,Pe,ut){ne.forEach(Ot=>{const hn=this._doc.createElement("style");hn.textContent=Ot,ut.push(Pe.appendChild(hn))})}addHost(ne){const Pe=[];this._addStylesToHost(this._stylesSet,ne,Pe),this._hostNodes.set(ne,Pe)}removeHost(ne){const Pe=this._hostNodes.get(ne);Pe&&Pe.forEach(ht),this._hostNodes.delete(ne)}onStylesAdded(ne){this._hostNodes.forEach((Pe,ut)=>{this._addStylesToHost(ne,ut,Pe)})}ngOnDestroy(){this._hostNodes.forEach(ne=>ne.forEach(ht))}}return Oe.\u0275fac=function(ne){return new(ne||Oe)(v.LFG(s.K0))},Oe.\u0275prov=v.Yz7({token:Oe,factory:Oe.\u0275fac}),Oe})();function ht(Oe){(0,s.q)().remove(Oe)}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */const mt={svg:"http://www.w3.org/2000/svg",xhtml:"http://www.w3.org/1999/xhtml",xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace",xmlns:"http://www.w3.org/2000/xmlns/",math:"http://www.w3.org/1998/MathML/"},de=/%COMP%/g;function Se(Oe,pe,ne){for(let Pe=0;Pe<pe.length;Pe++){let ut=pe[Pe];Array.isArray(ut)?Se(Oe,ut,ne):(ut=ut.replace(de,Oe),ne.push(ut))}return ne}function fe(Oe){return pe=>{if("__ngUnwrap__"===pe)return Oe;!1===Oe(pe)&&(pe.preventDefault(),pe.returnValue=!1)}}let le=(()=>{class Oe{constructor(ne,Pe,ut){this.eventManager=ne,this.sharedStylesHost=Pe,this.appId=ut,this.rendererByCompId=new Map,this.defaultRenderer=new Le(ne)}createRenderer(ne,Pe){if(!ne||!Pe)return this.defaultRenderer;switch(Pe.encapsulation){case v.ifc.Emulated:{let ut=this.rendererByCompId.get(Pe.id);return ut||(ut=new jt(this.eventManager,this.sharedStylesHost,Pe,this.appId),this.rendererByCompId.set(Pe.id,ut)),ut.applyToHost(ne),ut}case 1:case v.ifc.ShadowDom:return new ft(this.eventManager,this.sharedStylesHost,ne,Pe);default:if(!this.rendererByCompId.has(Pe.id)){const ut=Se(Pe.id,Pe.styles,[]);this.sharedStylesHost.addStyles(ut),this.rendererByCompId.set(Pe.id,this.defaultRenderer)}return this.defaultRenderer}}begin(){}end(){}}return Oe.\u0275fac=function(ne){return new(ne||Oe)(v.LFG(xe),v.LFG(qe),v.LFG(v.AFp))},Oe.\u0275prov=v.Yz7({token:Oe,factory:Oe.\u0275fac}),Oe})();class Le{constructor(pe){this.eventManager=pe,this.data=Object.create(null),this.destroyNode=null}destroy(){}createElement(pe,ne){return ne?document.createElementNS(mt[ne]||ne,pe):document.createElement(pe)}createComment(pe){return document.createComment(pe)}createText(pe){return document.createTextNode(pe)}appendChild(pe,ne){(Ht(pe)?pe.content:pe).appendChild(ne)}insertBefore(pe,ne,Pe){pe&&(Ht(pe)?pe.content:pe).insertBefore(ne,Pe)}removeChild(pe,ne){pe&&pe.removeChild(ne)}selectRootElement(pe,ne){let Pe="string"==typeof pe?document.querySelector(pe):pe;if(!Pe)throw new Error(`The selector "${pe}" did not match any elements`);return ne||(Pe.textContent=""),Pe}parentNode(pe){return pe.parentNode}nextSibling(pe){return pe.nextSibling}setAttribute(pe,ne,Pe,ut){if(ut){ne=ut+":"+ne;const Ot=mt[ut];Ot?pe.setAttributeNS(Ot,ne,Pe):pe.setAttribute(ne,Pe)}else pe.setAttribute(ne,Pe)}removeAttribute(pe,ne,Pe){if(Pe){const ut=mt[Pe];ut?pe.removeAttributeNS(ut,ne):pe.removeAttribute(`${Pe}:${ne}`)}else pe.removeAttribute(ne)}addClass(pe,ne){pe.classList.add(ne)}removeClass(pe,ne){pe.classList.remove(ne)}setStyle(pe,ne,Pe,ut){ut&(v.JOm.DashCase|v.JOm.Important)?pe.style.setProperty(ne,Pe,ut&v.JOm.Important?"important":""):pe.style[ne]=Pe}removeStyle(pe,ne,Pe){Pe&v.JOm.DashCase?pe.style.removeProperty(ne):pe.style[ne]=""}setProperty(pe,ne,Pe){pe[ne]=Pe}setValue(pe,ne){pe.nodeValue=ne}listen(pe,ne,Pe){return"string"==typeof pe?this.eventManager.addGlobalEventListener(pe,ne,fe(Pe)):this.eventManager.addEventListener(pe,ne,fe(Pe))}}function Ht(Oe){return"TEMPLATE"===Oe.tagName&&void 0!==Oe.content}class jt extends Le{constructor(pe,ne,Pe,ut){super(pe),this.component=Pe;const Ot=Se(ut+"-"+Pe.id,Pe.styles,[]);ne.addStyles(Ot),this.contentAttr=function Be(Oe){return"_ngcontent-%COMP%".replace(de,Oe)}(ut+"-"+Pe.id),this.hostAttr=function ot(Oe){return"_nghost-%COMP%".replace(de,Oe)}(ut+"-"+Pe.id)}applyToHost(pe){super.setAttribute(pe,this.hostAttr,"")}createElement(pe,ne){const Pe=super.createElement(pe,ne);return super.setAttribute(Pe,this.contentAttr,""),Pe}}class ft extends Le{constructor(pe,ne,Pe,ut){super(pe),this.sharedStylesHost=ne,this.hostEl=Pe,this.shadowRoot=Pe.attachShadow({mode:"open"}),this.sharedStylesHost.addHost(this.shadowRoot);const Ot=Se(ut.id,ut.styles,[]);for(let hn=0;hn<Ot.length;hn++){const Pn=document.createElement("style");Pn.textContent=Ot[hn],this.shadowRoot.appendChild(Pn)}}nodeOrShadowRoot(pe){return pe===this.hostEl?this.shadowRoot:pe}destroy(){this.sharedStylesHost.removeHost(this.shadowRoot)}appendChild(pe,ne){return super.appendChild(this.nodeOrShadowRoot(pe),ne)}insertBefore(pe,ne,Pe){return super.insertBefore(this.nodeOrShadowRoot(pe),ne,Pe)}removeChild(pe,ne){return super.removeChild(this.nodeOrShadowRoot(pe),ne)}parentNode(pe){return this.nodeOrShadowRoot(super.parentNode(this.nodeOrShadowRoot(pe)))}}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */let vt=(()=>{class Oe extends Ke{constructor(ne){super(ne)}supports(ne){return!0}addEventListener(ne,Pe,ut){return ne.addEventListener(Pe,ut,!1),()=>this.removeEventListener(ne,Pe,ut)}removeEventListener(ne,Pe,ut){return ne.removeEventListener(Pe,ut)}}return Oe.\u0275fac=function(ne){return new(ne||Oe)(v.LFG(s.K0))},Oe.\u0275prov=v.Yz7({token:Oe,factory:Oe.\u0275fac}),Oe})();
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */const Pt=["alt","control","meta","shift"],Ce={"\b":"Backspace","\t":"Tab","\x7f":"Delete","\x1b":"Escape",Del:"Delete",Esc:"Escape",Left:"ArrowLeft",Right:"ArrowRight",Up:"ArrowUp",Down:"ArrowDown",Menu:"ContextMenu",Scroll:"ScrollLock",Win:"OS"},st={A:"1",B:"2",C:"3",D:"4",E:"5",F:"6",G:"7",H:"8",I:"9",J:"*",K:"+",M:"-",N:".",O:"/","`":"0","\x90":"NumLock"},at={alt:Oe=>Oe.altKey,control:Oe=>Oe.ctrlKey,meta:Oe=>Oe.metaKey,shift:Oe=>Oe.shiftKey};let bt=(()=>{class Oe extends Ke{constructor(ne){super(ne)}supports(ne){return null!=Oe.parseEventName(ne)}addEventListener(ne,Pe,ut){const Ot=Oe.parseEventName(Pe),hn=Oe.eventCallback(Ot.fullKey,ut,this.manager.getZone());return this.manager.getZone().runOutsideAngular(()=>(0,s.q)().onAndCancel(ne,Ot.domEventName,hn))}static parseEventName(ne){const Pe=ne.toLowerCase().split("."),ut=Pe.shift();if(0===Pe.length||"keydown"!==ut&&"keyup"!==ut)return null;const Ot=Oe._normalizeKey(Pe.pop());let hn="";if(Pt.forEach(Ft=>{const ai=Pe.indexOf(Ft);ai>-1&&(Pe.splice(ai,1),hn+=Ft+".")}),hn+=Ot,0!=Pe.length||0===Ot.length)return null;const Pn={};return Pn.domEventName=ut,Pn.fullKey=hn,Pn}static getEventFullKey(ne){let Pe="",ut=function nt(Oe){let pe=Oe.key;if(null==pe){if(pe=Oe.keyIdentifier,null==pe)return"Unidentified";pe.startsWith("U+")&&(pe=String.fromCharCode(parseInt(pe.substring(2),16)),3===Oe.location&&st.hasOwnProperty(pe)&&(pe=st[pe]))}return Ce[pe]||pe}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */(ne);return ut=ut.toLowerCase()," "===ut?ut="space":"."===ut&&(ut="dot"),Pt.forEach(Ot=>{Ot!=ut&&at[Ot](ne)&&(Pe+=Ot+".")}),Pe+=ut,Pe}static eventCallback(ne,Pe,ut){return Ot=>{Oe.getEventFullKey(Ot)===ne&&ut.runGuarded(()=>Pe(Ot))}}static _normalizeKey(ne){return"esc"===ne?"escape":ne}}return Oe.\u0275fac=function(ne){return new(ne||Oe)(v.LFG(s.K0))},Oe.\u0275prov=v.Yz7({token:Oe,factory:Oe.\u0275fac}),Oe})();const Mt=(0,v.eFA)(v._c5,"browser",[{provide:v.Lbi,useValue:s.bD},{provide:v.g9A,useValue:function ct(){G.makeCurrent()},multi:!0},{provide:s.K0,useFactory:function Gt(){return(0,v.RDi)(document),document},deps:[]}]),Je=new v.OlP(""),B=[{provide:v.rWj,useClass:
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
class te{addToWindow(pe){v.dqk.getAngularTestability=(Pe,ut=!0)=>{const Ot=pe.findTestabilityInTree(Pe,ut);if(null==Ot)throw new Error("Could not find testability for element.");return Ot},v.dqk.getAllAngularTestabilities=()=>pe.getAllTestabilities(),v.dqk.getAllAngularRootElements=()=>pe.getAllRootElements(),v.dqk.frameworkStabilizers||(v.dqk.frameworkStabilizers=[]),v.dqk.frameworkStabilizers.push(Pe=>{const ut=v.dqk.getAllAngularTestabilities();let Ot=ut.length,hn=!1;const Pn=function(Ft){hn=hn||Ft,Ot--,0==Ot&&Pe(hn)};ut.forEach(function(Ft){Ft.whenStable(Pn)})})}findTestabilityInTree(pe,ne,Pe){return null==ne?null:pe.getTestability(ne)??(Pe?(0,s.q)().isShadowRoot(ne)?this.findTestabilityInTree(pe,ne.host,!0):this.findTestabilityInTree(pe,ne.parentElement,!0):null)}},deps:[]},{provide:v.lri,useClass:v.dDg,deps:[v.R0b,v.eoX,v.rWj]},{provide:v.dDg,useClass:v.dDg,deps:[v.R0b,v.eoX,v.rWj]}],F=[{provide:v.zSh,useValue:"root"},{provide:v.qLn,useFactory:function gt(){return new v.qLn},deps:[]},{provide:Ve,useClass:vt,multi:!0,deps:[s.K0,v.R0b,v.Lbi]},{provide:Ve,useClass:bt,multi:!0,deps:[s.K0]},{provide:le,useClass:le,deps:[xe,qe,v.AFp]},{provide:v.FYo,useExisting:le},{provide:Ne,useExisting:qe},{provide:qe,useClass:qe,deps:[s.K0]},{provide:xe,useClass:xe,deps:[Ve,v.R0b]},{provide:s.JF,useClass:Ge,deps:[]},[]];let j=(()=>{class Oe{constructor(ne){}static withServerTransition(ne){return{ngModule:Oe,providers:[{provide:v.AFp,useValue:ne.appId},{provide:Me,useExisting:v.AFp},me]}}}return Oe.\u0275fac=function(ne){return new(ne||Oe)(v.LFG(Je,12))},Oe.\u0275mod=v.oAB({type:Oe}),Oe.\u0275inj=v.cJS({providers:[...F,...B],imports:[s.ez,v.hGG]}),Oe})(),$=(()=>{class Oe{constructor(ne){this._doc=ne}getTitle(){return this._doc.title}setTitle(ne){this._doc.title=ne||""}}return Oe.\u0275fac=function(ne){return new(ne||Oe)(v.LFG(s.K0))},Oe.\u0275prov=v.Yz7({token:Oe,factory:function(ne){let Pe=null;return Pe=ne?new ne:
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
function x(){return new $((0,v.LFG)(s.K0))}(),Pe},providedIn:"root"}),Oe})();
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */typeof window<"u"&&window;let On=(()=>{class Oe{}return Oe.\u0275fac=function(ne){return new(ne||Oe)},Oe.\u0275prov=v.Yz7({token:Oe,factory:function(ne){let Pe=null;return Pe=ne?new(ne||Oe):v.LFG(At),Pe},providedIn:"root"}),Oe})(),At=(()=>{class Oe extends On{constructor(ne){super(),this._doc=ne}sanitize(ne,Pe){if(null==Pe)return null;switch(ne){case v.q3G.NONE:return Pe;case v.q3G.HTML:return(0,v.qzn)(Pe,"HTML")?(0,v.z3N)(Pe):(0,v.EiD)(this._doc,String(Pe)).toString();case v.q3G.STYLE:return(0,v.qzn)(Pe,"Style")?(0,v.z3N)(Pe):Pe;case v.q3G.SCRIPT:if((0,v.qzn)(Pe,"Script"))return(0,v.z3N)(Pe);throw new Error("unsafe value used in a script context");case v.q3G.URL:return(0,v.yhl)(Pe),(0,v.qzn)(Pe,"URL")?(0,v.z3N)(Pe):(0,v.mCW)(String(Pe));case v.q3G.RESOURCE_URL:if((0,v.qzn)(Pe,"ResourceURL"))return(0,v.z3N)(Pe);throw new Error("unsafe value used in a resource URL context (see https://g.co/ng/security#xss)");default:throw new Error(`Unexpected SecurityContext ${ne} (see https://g.co/ng/security#xss)`)}}bypassSecurityTrustHtml(ne){return(0,v.JVY)(ne)}bypassSecurityTrustStyle(ne){return(0,v.L6k)(ne)}bypassSecurityTrustScript(ne){return(0,v.eBb)(ne)}bypassSecurityTrustUrl(ne){return(0,v.LAX)(ne)}bypassSecurityTrustResourceUrl(ne){return(0,v.pB0)(ne)}}return Oe.\u0275fac=function(ne){return new(ne||Oe)(v.LFG(s.K0))},Oe.\u0275prov=v.Yz7({token:Oe,factory:function(ne){let Pe=null;return Pe=ne?new ne:function Mn(Oe){return new At(Oe.get(s.K0))}(v.LFG(v.zs3)),Pe},providedIn:"root"}),Oe})();
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */,6949:(St,He,y)=>{y.d(He,{gz:()=>un,yS:()=>ei,Bz:()=>rl,lC:()=>Ji});var s=y(6895),v=y(4650);const G=(0,y(3888).d)(f=>function(){f(this),this.name="EmptyError",this.message="no elements in sequence"});var X=y(8306),K=y(727),ue=y(4482),q=y(5403);function Me(){return(0,ue.e)((f,d)=>{let c=null;f._refCount++;const _=(0,q.x)(d,void 0,void 0,void 0,()=>{if(!f||f._refCount<=0||0<--f._refCount)return void(c=null);const S=f._connection,U=c;c=null,S&&(!U||S===U)&&S.unsubscribe(),d.unsubscribe()});f.subscribe(_),_.closed||(c=f.connect())})}class ce extends X.y{constructor(d,c){super(),this.source=d,this.subjectFactory=c,this._subject=null,this._refCount=0,this._connection=null,(0,ue.A)(d)&&(this.lift=d.lift)}_subscribe(d){return this.getSubject().subscribe(d)}getSubject(){const d=this._subject;return(!d||d.isStopped)&&(this._subject=this.subjectFactory()),this._subject}_teardown(){this._refCount=0;const{_connection:d}=this;this._subject=this._connection=null,d?.unsubscribe()}connect(){let d=this._connection;if(!d){d=this._connection=new K.w0;const c=this.getSubject();d.add(this.source.subscribe((0,q.x)(c,void 0,()=>{this._teardown(),c.complete()},_=>{this._teardown(),c.error(_)},()=>this._teardown()))),d.closed&&(this._connection=null,d=K.w0.EMPTY)}return d}refCount(){return Me()(this)}}var me=y(2076),te=y(9646),Ge=y(1135),Ve=y(9841),xe=y(2843),Ke=y(7272),Ne=y(9770),qe=y(515),ht=y(7579),mt=y(8421);function de(f,d){return(0,ue.e)((c,_)=>{let S=null,U=0,oe=!1;const ye=()=>oe&&!S&&_.complete();c.subscribe((0,q.x)(_,lt=>{S?.unsubscribe();let Tt=0;const on=U++;(0,mt.Xf)(f(lt,on)).subscribe(S=(0,q.x)(_,Nt=>_.next(d?d(lt,Nt,on,Tt++):Nt),()=>{S=null,ye()}))},()=>{oe=!0,ye()}))})}function Q(f,d,c,_,S){return(U,oe)=>{let ye=c,lt=d,Tt=0;U.subscribe((0,q.x)(oe,on=>{const Nt=Tt++;lt=ye?f(lt,on,Nt):(ye=!0,on),_&&oe.next(lt)},S&&(()=>{ye&&oe.next(lt),oe.complete()})))}}function ee(f,d){return(0,ue.e)(Q(f,d,arguments.length>=2,!0))}var ae=y(9300);function Ee(f){return f<=0?()=>qe.E:(0,ue.e)((d,c)=>{let _=[];d.subscribe((0,q.x)(c,S=>{_.push(S),f<_.length&&_.shift()},()=>{for(const S of _)c.next(S);c.complete()},void 0,()=>{_=null}))})}function Be(f=ot){return(0,ue.e)((d,c)=>{let _=!1;d.subscribe((0,q.x)(c,S=>{_=!0,c.next(S)},()=>_?c.complete():c.error(f())))})}function ot(){return new G}function Se(f){return(0,ue.e)((d,c)=>{let _=!1;d.subscribe((0,q.x)(c,S=>{_=!0,c.next(S)},()=>{_||c.next(f),c.complete()}))})}var fe=y(4671),le=y(5698);function Le(f,d){const c=arguments.length>=2;return _=>_.pipe(f?(0,ae.h)((S,U)=>f(S,U,_)):fe.y,(0,le.q)(1),c?Se(d):Be(()=>new G))}var Ye=y(4004),xt=y(8675),Ht=y(262),jt=y(4351),ft=y(5577),vt=y(8505),Pt=y(9718),ze=y(8746),Ce=y(8189),st=y(1481);
/**
     * @license Angular v14.0.1
     * (c) 2010-2022 Google LLC. https://angular.io/
     * License: MIT
     */
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */class at{constructor(d,c){this.id=d,this.url=c}}class bt extends at{constructor(d,c,_="imperative",S=null){super(d,c),this.type=0,this.navigationTrigger=_,this.restoredState=S}toString(){return`NavigationStart(id: ${this.id}, url: '${this.url}')`}}class nt extends at{constructor(d,c,_){super(d,c),this.urlAfterRedirects=_,this.type=1}toString(){return`NavigationEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}')`}}class rt extends at{constructor(d,c,_){super(d,c),this.reason=_,this.type=2}toString(){return`NavigationCancel(id: ${this.id}, url: '${this.url}')`}}class je extends at{constructor(d,c,_){super(d,c),this.error=_,this.type=3}toString(){return`NavigationError(id: ${this.id}, url: '${this.url}', error: ${this.error})`}}class De extends at{constructor(d,c,_,S){super(d,c),this.urlAfterRedirects=_,this.state=S,this.type=4}toString(){return`RoutesRecognized(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}}class ct extends at{constructor(d,c,_,S){super(d,c),this.urlAfterRedirects=_,this.state=S,this.type=7}toString(){return`GuardsCheckStart(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}}class gt extends at{constructor(d,c,_,S,U){super(d,c),this.urlAfterRedirects=_,this.state=S,this.shouldActivate=U,this.type=8}toString(){return`GuardsCheckEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state}, shouldActivate: ${this.shouldActivate})`}}class Gt extends at{constructor(d,c,_,S){super(d,c),this.urlAfterRedirects=_,this.state=S,this.type=5}toString(){return`ResolveStart(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}}class Yt extends at{constructor(d,c,_,S){super(d,c),this.urlAfterRedirects=_,this.state=S,this.type=6}toString(){return`ResolveEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}}class Mt{constructor(d){this.route=d,this.type=9}toString(){return`RouteConfigLoadStart(path: ${this.route.path})`}}class Je{constructor(d){this.route=d,this.type=10}toString(){return`RouteConfigLoadEnd(path: ${this.route.path})`}}class B{constructor(d){this.snapshot=d,this.type=11}toString(){return`ChildActivationStart(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}}class F{constructor(d){this.snapshot=d,this.type=12}toString(){return`ChildActivationEnd(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}}class j{constructor(d){this.snapshot=d,this.type=13}toString(){return`ActivationStart(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}}class b{constructor(d){this.snapshot=d,this.type=14}toString(){return`ActivationEnd(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}}class T{constructor(d,c,_){this.routerEvent=d,this.position=c,this.anchor=_,this.type=15}toString(){return`Scroll(anchor: '${this.anchor}', position: '${this.position?`${this.position[0]}, ${this.position[1]}`:null}')`}}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
const x="primary";class ${constructor(d){this.params=d||{}}has(d){return Object.prototype.hasOwnProperty.call(this.params,d)}get(d){if(this.has(d)){const c=this.params[d];return Array.isArray(c)?c[0]:c}return null}getAll(d){if(this.has(d)){const c=this.params[d];return Array.isArray(c)?c:[c]}return[]}get keys(){return Object.keys(this.params)}}function ve(f){return new $(f)}const se="ngNavigationCancelingError";function Xe(f){const d=Error("NavigationCancelingError: "+f);return d[se]=!0,d}function Ut(f,d,c){const _=c.path.split("/");if(_.length>f.length||"full"===c.pathMatch&&(d.hasChildren()||_.length<f.length))return null;const S={};for(let U=0;U<_.length;U++){const oe=_[U],ye=f[U];if(oe.startsWith(":"))S[oe.substring(1)]=ye;else if(oe!==ye.path)return null}return{consumed:f.slice(0,_.length),posParams:S}}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */function qt(f,d){const c=f?Object.keys(f):void 0,_=d?Object.keys(d):void 0;if(!c||!_||c.length!=_.length)return!1;let S;for(let U=0;U<c.length;U++)if(S=c[U],!gn(f[S],d[S]))return!1;return!0}function gn(f,d){if(Array.isArray(f)&&Array.isArray(d)){if(f.length!==d.length)return!1;const c=[...f].sort(),_=[...d].sort();return c.every((S,U)=>_[U]===S)}return f===d}function Qe(f){return Array.prototype.concat.apply([],f)}function he(f){return f.length>0?f[f.length-1]:null}function Ue(f,d){for(const c in f)f.hasOwnProperty(c)&&d(f[c],c)}function Te(f){return(0,v.CqO)(f)?f:(0,v.QGY)(f)?(0,me.D)(Promise.resolve(f)):(0,te.of)(f)}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */const Y={exact:function Lt(f,d,c){if(!Mn(f.segments,d.segments)||!wn(f.segments,d.segments,c)||f.numberOfChildren!==d.numberOfChildren)return!1;for(const _ in d.children)if(!f.children[_]||!Lt(f.children[_],d.children[_],c))return!1;return!0},subset:Zn},Re={exact:function Et(f,d){return qt(f,d)},subset:function bn(f,d){return Object.keys(d).length<=Object.keys(f).length&&Object.keys(d).every(c=>gn(f[c],d[c]))},ignored:()=>!0};function $e(f,d,c){return Y[c.paths](f.root,d.root,c.matrixParams)&&Re[c.queryParams](f.queryParams,d.queryParams)&&!("exact"===c.fragment&&f.fragment!==d.fragment)}function Zn(f,d,c){return $n(f,d,d.segments,c)}function $n(f,d,c,_){if(f.segments.length>c.length){const S=f.segments.slice(0,c.length);return!(!Mn(S,c)||d.hasChildren()||!wn(S,c,_))}if(f.segments.length===c.length){if(!Mn(f.segments,c)||!wn(f.segments,c,_))return!1;for(const S in d.children)if(!f.children[S]||!Zn(f.children[S],d.children[S],_))return!1;return!0}{const S=c.slice(0,f.segments.length),U=c.slice(f.segments.length);return!!(Mn(f.segments,S)&&wn(f.segments,S,_)&&f.children[x])&&$n(f.children[x],d,U,_)}}function wn(f,d,c){return d.every((_,S)=>Re[c](f[S].parameters,_.parameters))}class sn{constructor(d,c,_){this.root=d,this.queryParams=c,this.fragment=_}get queryParamMap(){return this._queryParamMap||(this._queryParamMap=ve(this.queryParams)),this._queryParamMap}toString(){return pe.serialize(this)}}class Qt{constructor(d,c){this.segments=d,this.children=c,this.parent=null,Ue(c,(_,S)=>_.parent=this)}hasChildren(){return this.numberOfChildren>0}get numberOfChildren(){return Object.keys(this.children).length}toString(){return ne(this)}}class vn{constructor(d,c){this.path=d,this.parameters=c}get parameterMap(){return this._parameterMap||(this._parameterMap=ve(this.parameters)),this._parameterMap}toString(){return di(this)}}function Mn(f,d){return f.length===d.length&&f.every((c,_)=>c.path===d[_].path)}class Jt{}class Oe{parse(d){const c=new N(d);return new sn(c.parseRootSegment(),c.parseQueryParams(),c.parseFragment())}serialize(d){const c=`/${Pe(d.root,!0)}`,_=function mi(f){const d=Object.keys(f).map(c=>{const _=f[c];return Array.isArray(_)?_.map(S=>`${Ot(c)}=${Ot(S)}`).join("&"):`${Ot(c)}=${Ot(_)}`}).filter(c=>!!c);return d.length?`?${d.join("&")}`:""}(d.queryParams);return`${c}${_}${"string"==typeof d.fragment?`#${function hn(f){return encodeURI(f)}(d.fragment)}`:""}`}}const pe=new Oe;function ne(f){return f.segments.map(d=>di(d)).join("/")}function Pe(f,d){if(!f.hasChildren())return ne(f);if(d){const c=f.children[x]?Pe(f.children[x],!1):"",_=[];return Ue(f.children,(S,U)=>{U!==x&&_.push(`${U}:${Pe(S,!1)}`)}),_.length>0?`${c}(${_.join("//")})`:c}{const c=function At(f,d){let c=[];return Ue(f.children,(_,S)=>{S===x&&(c=c.concat(d(_,S)))}),Ue(f.children,(_,S)=>{S!==x&&(c=c.concat(d(_,S)))}),c}(f,(_,S)=>S===x?[Pe(f.children[x],!1)]:[`${S}:${Pe(_,!1)}`]);return 1===Object.keys(f.children).length&&null!=f.children[x]?`${ne(f)}/${c[0]}`:`${ne(f)}/(${c.join("//")})`}}function ut(f){return encodeURIComponent(f).replace(/%40/g,"@").replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",")}function Ot(f){return ut(f).replace(/%3B/gi,";")}function Pn(f){return ut(f).replace(/\(/g,"%28").replace(/\)/g,"%29").replace(/%26/gi,"&")}function Ft(f){return decodeURIComponent(f)}function ai(f){return Ft(f.replace(/\+/g,"%20"))}function di(f){return`${Pn(f.path)}${function hi(f){return Object.keys(f).map(d=>`;${Pn(d)}=${Pn(f[d])}`).join("")}(f.parameters)}`}const Wn=/^[^\/()?;=#]+/;function fi(f){const d=f.match(Wn);return d?d[0]:""}const Ei=/^[^=?&#]+/,gi=/^[^&#]+/;class N{constructor(d){this.url=d,this.remaining=d}parseRootSegment(){return this.consumeOptional("/"),""===this.remaining||this.peekStartsWith("?")||this.peekStartsWith("#")?new Qt([],{}):new Qt([],this.parseChildren())}parseQueryParams(){const d={};if(this.consumeOptional("?"))do{this.parseQueryParam(d)}while(this.consumeOptional("&"));return d}parseFragment(){return this.consumeOptional("#")?decodeURIComponent(this.remaining):null}parseChildren(){if(""===this.remaining)return{};this.consumeOptional("/");const d=[];for(this.peekStartsWith("(")||d.push(this.parseSegment());this.peekStartsWith("/")&&!this.peekStartsWith("//")&&!this.peekStartsWith("/(");)this.capture("/"),d.push(this.parseSegment());let c={};this.peekStartsWith("/(")&&(this.capture("/"),c=this.parseParens(!0));let _={};return this.peekStartsWith("(")&&(_=this.parseParens(!1)),(d.length>0||Object.keys(c).length>0)&&(_[x]=new Qt(d,c)),_}parseSegment(){const d=fi(this.remaining);if(""===d&&this.peekStartsWith(";"))throw new Error(`Empty path url segment cannot have parameters: '${this.remaining}'.`);return this.capture(d),new vn(Ft(d),this.parseMatrixParams())}parseMatrixParams(){const d={};for(;this.consumeOptional(";");)this.parseParam(d);return d}parseParam(d){const c=fi(this.remaining);if(!c)return;this.capture(c);let _="";if(this.consumeOptional("=")){const S=fi(this.remaining);S&&(_=S,this.capture(_))}d[Ft(c)]=Ft(_)}parseQueryParam(d){const c=function Qn(f){const d=f.match(Ei);return d?d[0]:""}(this.remaining);if(!c)return;this.capture(c);let _="";if(this.consumeOptional("=")){const oe=function Ri(f){const d=f.match(gi);return d?d[0]:""}(this.remaining);oe&&(_=oe,this.capture(_))}const S=ai(c),U=ai(_);if(d.hasOwnProperty(S)){let oe=d[S];Array.isArray(oe)||(oe=[oe],d[S]=oe),oe.push(U)}else d[S]=U}parseParens(d){const c={};for(this.capture("(");!this.consumeOptional(")")&&this.remaining.length>0;){const _=fi(this.remaining),S=this.remaining[_.length];if("/"!==S&&")"!==S&&";"!==S)throw new Error(`Cannot parse url '${this.url}'`);let U;_.indexOf(":")>-1?(U=_.slice(0,_.indexOf(":")),this.capture(U),this.capture(":")):d&&(U=x);const oe=this.parseChildren();c[U]=1===Object.keys(oe).length?oe[x]:new Qt([],oe),this.consumeOptional("//")}return c}peekStartsWith(d){return this.remaining.startsWith(d)}consumeOptional(d){return!!this.peekStartsWith(d)&&(this.remaining=this.remaining.substring(d.length),!0)}capture(d){if(!this.consumeOptional(d))throw new Error(`Expected "${d}".`)}}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */class re{constructor(d){this._root=d}get root(){return this._root.value}parent(d){const c=this.pathFromRoot(d);return c.length>1?c[c.length-2]:null}children(d){const c=O(d,this._root);return c?c.children.map(_=>_.value):[]}firstChild(d){const c=O(d,this._root);return c&&c.children.length>0?c.children[0].value:null}siblings(d){const c=ie(d,this._root);return c.length<2?[]:c[c.length-2].children.map(S=>S.value).filter(S=>S!==d)}pathFromRoot(d){return ie(d,this._root).map(c=>c.value)}}function O(f,d){if(f===d.value)return d;for(const c of d.children){const _=O(f,c);if(_)return _}return null}function ie(f,d){if(f===d.value)return[d];for(const c of d.children){const _=ie(f,c);if(_.length)return _.unshift(d),_}return[]}class ke{constructor(d,c){this.value=d,this.children=c}toString(){return`TreeNode(${this.value})`}}function et(f){const d={};return f&&f.children.forEach(c=>d[c.value.outlet]=c),d
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */}class Ct extends re{constructor(d,c){super(d),this.snapshot=c,Ai(this,d)}toString(){return this.snapshot.toString()}}function $t(f,d){const c=function Xt(f,d){const oe=new xn([],{},{},"",{},x,d,null,f.root,-1,{});return new qn("",new ke(oe,[]))}(f,d),_=new Ge.X([new vn("",{})]),S=new Ge.X({}),U=new Ge.X({}),oe=new Ge.X({}),ye=new Ge.X(""),lt=new un(_,S,oe,ye,U,x,d,c.root);return lt.snapshot=c.root,new Ct(new ke(lt,[]),c)}class un{constructor(d,c,_,S,U,oe,ye,lt){this.url=d,this.params=c,this.queryParams=_,this.fragment=S,this.data=U,this.outlet=oe,this.component=ye,this._futureSnapshot=lt}get routeConfig(){return this._futureSnapshot.routeConfig}get root(){return this._routerState.root}get parent(){return this._routerState.parent(this)}get firstChild(){return this._routerState.firstChild(this)}get children(){return this._routerState.children(this)}get pathFromRoot(){return this._routerState.pathFromRoot(this)}get paramMap(){return this._paramMap||(this._paramMap=this.params.pipe((0,Ye.U)(d=>ve(d)))),this._paramMap}get queryParamMap(){return this._queryParamMap||(this._queryParamMap=this.queryParams.pipe((0,Ye.U)(d=>ve(d)))),this._queryParamMap}toString(){return this.snapshot?this.snapshot.toString():`Future(${this._futureSnapshot})`}}function tn(f,d="emptyOnly"){const c=f.pathFromRoot;let _=0;if("always"!==d)for(_=c.length-1;_>=1;){const S=c[_],U=c[_-1];if(S.routeConfig&&""===S.routeConfig.path)_--;else{if(U.component)break;_--}}return function Cn(f){return f.reduce((d,c)=>({params:{...d.params,...c.params},data:{...d.data,...c.data},resolve:{...c.data,...d.resolve,...c.routeConfig?.data,...c._resolvedData}}),{params:{},data:{},resolve:{}})}(c.slice(_))}class xn{constructor(d,c,_,S,U,oe,ye,lt,Tt,on,Nt,Tn){this.url=d,this.params=c,this.queryParams=_,this.fragment=S,this.data=U,this.outlet=oe,this.component=ye,this.routeConfig=lt,this._urlSegment=Tt,this._lastPathIndex=on,this._correctedLastPathIndex=Tn??on,this._resolve=Nt}get root(){return this._routerState.root}get parent(){return this._routerState.parent(this)}get firstChild(){return this._routerState.firstChild(this)}get children(){return this._routerState.children(this)}get pathFromRoot(){return this._routerState.pathFromRoot(this)}get paramMap(){return this._paramMap||(this._paramMap=ve(this.params)),this._paramMap}get queryParamMap(){return this._queryParamMap||(this._queryParamMap=ve(this.queryParams)),this._queryParamMap}toString(){return`Route(url:'${this.url.map(_=>_.toString()).join("/")}', path:'${this.routeConfig?this.routeConfig.path:""}')`}}class qn extends re{constructor(d,c){super(c),this.url=d,Ai(this,c)}toString(){return zn(this._root)}}function Ai(f,d){d.value._routerState=f,d.children.forEach(c=>Ai(f,c))}function zn(f){const d=f.children.length>0?` { ${f.children.map(zn).join(", ")} } `:"";return`${f.value}${d}`}function Hn(f){if(f.snapshot){const d=f.snapshot,c=f._futureSnapshot;f.snapshot=c,qt(d.queryParams,c.queryParams)||f.queryParams.next(c.queryParams),d.fragment!==c.fragment&&f.fragment.next(c.fragment),qt(d.params,c.params)||f.params.next(c.params),function yt(f,d){if(f.length!==d.length)return!1;for(let c=0;c<f.length;++c)if(!qt(f[c],d[c]))return!1;return!0}(d.url,c.url)||f.url.next(c.url),qt(d.data,c.data)||f.data.next(c.data)}else f.snapshot=f._futureSnapshot,f.data.next(f._futureSnapshot.data)}function Ti(f,d){const c=qt(f.params,d.params)&&function On(f,d){return Mn(f,d)&&f.every((c,_)=>qt(c.parameters,d[_].parameters))}(f.url,d.url);return c&&!(!f.parent!=!d.parent)&&(!f.parent||Ti(f.parent,d.parent))}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */function Ii(f,d,c){if(c&&f.shouldReuseRoute(d.value,c.value.snapshot)){const _=c.value;_._futureSnapshot=d.value;const S=function mo(f,d,c){return d.children.map(_=>{for(const S of c.children)if(f.shouldReuseRoute(_.value,S.value.snapshot))return Ii(f,_,S);return Ii(f,_)})}(f,d,c);return new ke(_,S)}{if(f.shouldAttach(d.value)){const U=f.retrieve(d.value);if(null!==U){const oe=U.route;return oe.value._futureSnapshot=d.value,oe.children=d.children.map(ye=>Ii(f,ye)),oe}}const _=function go(f){return new un(new Ge.X(f.url),new Ge.X(f.params),new Ge.X(f.queryParams),new Ge.X(f.fragment),new Ge.X(f.data),f.outlet,f.component,f)}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */(d.value),S=d.children.map(U=>Ii(f,U));return new ke(_,S)}}function Fr(f){return"object"==typeof f&&null!=f&&!f.outlets&&!f.segmentPath}function Xi(f){return"object"==typeof f&&null!=f&&f.outlets}function hr(f,d,c,_,S){let U={};if(_&&Ue(_,(ye,lt)=>{U[lt]=Array.isArray(ye)?ye.map(Tt=>`${Tt}`):`${ye}`}),f===d)return new sn(c,U,S);const oe=kr(f,d,c);return new sn(oe,U,S)}function kr(f,d,c){const _={};return Ue(f.children,(S,U)=>{_[U]=S===d?c:kr(S,d,c)}),new Qt(f.segments,_)}class Qi{constructor(d,c,_){if(this.isAbsolute=d,this.numberOfDoubleDots=c,this.commands=_,d&&_.length>0&&Fr(_[0]))throw new Error("Root segment cannot have matrix parameters");const S=_.find(Xi);if(S&&S!==he(_))throw new Error("{outlets:{}} has to be the last command")}toRoot(){return this.isAbsolute&&1===this.commands.length&&"/"==this.commands[0]}}class Li{constructor(d,c,_){this.segmentGroup=d,this.processChildren=c,this.index=_}}function Cr(f,d,c){if(f||(f=new Qt([],{})),0===f.segments.length&&f.hasChildren())return Bi(f,d,c);const _=function fr(f,d,c){let _=0,S=d;const U={match:!1,pathIndex:0,commandIndex:0};for(;S<f.segments.length;){if(_>=c.length)return U;const oe=f.segments[S],ye=c[_];if(Xi(ye))break;const lt=`${ye}`,Tt=_<c.length-1?c[_+1]:null;if(S>0&&void 0===lt)break;if(lt&&Tt&&"object"==typeof Tt&&void 0===Tt.outlets){if(!Mi(lt,Tt,oe))return U;_+=2}else{if(!Mi(lt,{},oe))return U;_++}S++}return{match:!0,pathIndex:S,commandIndex:_}}(f,d,c),S=c.slice(_.commandIndex);if(_.match&&_.pathIndex<f.segments.length){const U=new Qt(f.segments.slice(0,_.pathIndex),{});return U.children[x]=new Qt(f.segments.slice(_.pathIndex),f.children),Bi(U,0,S)}return _.match&&0===S.length?new Qt(f.segments,{}):_.match&&!f.hasChildren()?Lr(f,d,c):_.match?Bi(f,0,S):Lr(f,d,c)}function Bi(f,d,c){if(0===c.length)return new Qt(f.segments,{});{const _=function _o(f){return Xi(f[0])?f[0].outlets:{[x]:f}}(c),S={};return Ue(_,(U,oe)=>{"string"==typeof U&&(U=[U]),null!==U&&(S[oe]=Cr(f.children[oe],d,U))}),Ue(f.children,(U,oe)=>{void 0===_[oe]&&(S[oe]=U)}),new Qt(f.segments,S)}}function Lr(f,d,c){const _=f.segments.slice(0,d);let S=0;for(;S<c.length;){const U=c[S];if(Xi(U)){const lt=Er(U.outlets);return new Qt(_,lt)}if(0===S&&Fr(c[0])){_.push(new vn(f.segments[d].path,wr(c[0]))),S++;continue}const oe=Xi(U)?U.outlets[x]:`${U}`,ye=S<c.length-1?c[S+1]:null;oe&&ye&&Fr(ye)?(_.push(new vn(oe,wr(ye))),S+=2):(_.push(new vn(oe,{})),S++)}return new Qt(_,{})}function Er(f){const d={};return Ue(f,(c,_)=>{"string"==typeof c&&(c=[c]),null!==c&&(d[_]=Lr(new Qt([],{}),0,c))}),d}function wr(f){const d={};return Ue(f,(c,_)=>d[_]=`${c}`),d}function Mi(f,d,c){return f==c.path&&qt(d,c.parameters)}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */class qi{constructor(){this.outlet=null,this.route=null,this.resolver=null,this.injector=null,this.children=new Vi,this.attachRef=null}}class Vi{constructor(){this.contexts=new Map}onChildOutletCreated(d,c){const _=this.getOrCreateContext(d);_.outlet=c,this.contexts.set(d,_)}onChildOutletDestroyed(d){const c=this.getContext(d);c&&(c.outlet=null,c.attachRef=null)}onOutletDeactivated(){const d=this.contexts;return this.contexts=new Map,d}onOutletReAttached(d){this.contexts=d}getOrCreateContext(d){let c=this.getContext(d);return c||(c=new qi,this.contexts.set(d,c)),c}getContext(d){return this.contexts.get(d)||null}}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */let Ji=(()=>{class f{constructor(c,_,S,U,oe){this.parentContexts=c,this.location=_,this.changeDetector=U,this.environmentInjector=oe,this.activated=null,this._activatedRoute=null,this.activateEvents=new v.vpe,this.deactivateEvents=new v.vpe,this.attachEvents=new v.vpe,this.detachEvents=new v.vpe,this.name=S||x,c.onChildOutletCreated(this.name,this)}ngOnDestroy(){this.parentContexts.onChildOutletDestroyed(this.name)}ngOnInit(){if(!this.activated){const c=this.parentContexts.getContext(this.name);c&&c.route&&(c.attachRef?this.attach(c.attachRef,c.route):this.activateWith(c.route,c.injector))}}get isActivated(){return!!this.activated}get component(){if(!this.activated)throw new Error("Outlet is not activated");return this.activated.instance}get activatedRoute(){if(!this.activated)throw new Error("Outlet is not activated");return this._activatedRoute}get activatedRouteData(){return this._activatedRoute?this._activatedRoute.snapshot.data:{}}detach(){if(!this.activated)throw new Error("Outlet is not activated");this.location.detach();const c=this.activated;return this.activated=null,this._activatedRoute=null,this.detachEvents.emit(c.instance),c}attach(c,_){this.activated=c,this._activatedRoute=_,this.location.insert(c.hostView),this.attachEvents.emit(c.instance)}deactivate(){if(this.activated){const c=this.component;this.activated.destroy(),this.activated=null,this._activatedRoute=null,this.deactivateEvents.emit(c)}}activateWith(c,_){if(this.isActivated)throw new Error("Cannot activate an already activated outlet");this._activatedRoute=c;const S=this.location,oe=c._futureSnapshot.component,ye=this.parentContexts.getOrCreateContext(this.name).children,lt=new io(c,ye,S.injector);if(_&&function er(f){return!!f.resolveComponentFactory}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */(_)){const Tt=_.resolveComponentFactory(oe);this.activated=S.createComponent(Tt,S.length,lt)}else this.activated=S.createComponent(oe,{index:S.length,injector:lt,environmentInjector:_??this.environmentInjector});this.changeDetector.markForCheck(),this.activateEvents.emit(this.activated.instance)}}return f.\u0275fac=function(c){return new(c||f)(v.Y36(Vi),v.Y36(v.s_b),v.$8M("name"),v.Y36(v.sBO),v.Y36(v.lqb))},f.\u0275dir=v.lG2({type:f,selectors:[["router-outlet"]],outputs:{activateEvents:"activate",deactivateEvents:"deactivate",attachEvents:"attach",detachEvents:"detach"},exportAs:["outlet"]}),f})();class io{constructor(d,c,_){this.route=d,this.childContexts=c,this.parent=_}get(d,c){return d===un?this.route:d===Vi?this.childContexts:this.parent.get(d,c)}}let tr=(()=>{class f{}return f.\u0275fac=function(c){return new(c||f)},f.\u0275cmp=v.Xpm({type:f,selectors:[["ng-component"]],decls:1,vars:0,template:function(c,_){1&c&&v._UZ(0,"router-outlet")},dependencies:[Ji],encapsulation:2}),f})();
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */function Mr(f,d){return f.providers&&!f._injector&&(f._injector=(0,v.MMx)(f.providers,d,`Route: ${f.path}`)),f._injector??d}function Vr(f){const d=f.children&&f.children.map(Vr),c=d?{...f,children:d}:{...f};return!c.component&&!c.loadComponent&&(d||c.loadChildren)&&c.outlet&&c.outlet!==x&&(c.component=tr),c}function ii(f){return f.outlet||x}function Hr(f,d){const c=f.filter(_=>ii(_)===d);return c.push(...f.filter(_=>ii(_)!==d)),c}function ir(f){if(!f)return null;if(f.routeConfig?._injector)return f.routeConfig._injector;for(let d=f.parent;d;d=d.parent){const c=d.routeConfig;if(c?._loadedInjector)return c._loadedInjector;if(c?._injector)return c._injector}return null}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */class Ln{constructor(d,c,_,S){this.routeReuseStrategy=d,this.futureState=c,this.currState=_,this.forwardEvent=S}activate(d){const c=this.futureState._root,_=this.currState?this.currState._root:null;this.deactivateChildRoutes(c,_,d),Hn(this.futureState.root),this.activateChildRoutes(c,_,d)}deactivateChildRoutes(d,c,_){const S=et(c);d.children.forEach(U=>{const oe=U.value.outlet;this.deactivateRoutes(U,S[oe],_),delete S[oe]}),Ue(S,(U,oe)=>{this.deactivateRouteAndItsChildren(U,_)})}deactivateRoutes(d,c,_){const S=d.value,U=c?c.value:null;if(S===U)if(S.component){const oe=_.getContext(S.outlet);oe&&this.deactivateChildRoutes(d,c,oe.children)}else this.deactivateChildRoutes(d,c,_);else U&&this.deactivateRouteAndItsChildren(c,_)}deactivateRouteAndItsChildren(d,c){d.value.component&&this.routeReuseStrategy.shouldDetach(d.value.snapshot)?this.detachAndStoreRouteSubtree(d,c):this.deactivateRouteAndOutlet(d,c)}detachAndStoreRouteSubtree(d,c){const _=c.getContext(d.value.outlet),S=_&&d.value.component?_.children:c,U=et(d);for(const oe of Object.keys(U))this.deactivateRouteAndItsChildren(U[oe],S);if(_&&_.outlet){const oe=_.outlet.detach(),ye=_.children.onOutletDeactivated();this.routeReuseStrategy.store(d.value.snapshot,{componentRef:oe,route:d,contexts:ye})}}deactivateRouteAndOutlet(d,c){const _=c.getContext(d.value.outlet),S=_&&d.value.component?_.children:c,U=et(d);for(const oe of Object.keys(U))this.deactivateRouteAndItsChildren(U[oe],S);_&&_.outlet&&(_.outlet.deactivate(),_.children.onOutletDeactivated(),_.attachRef=null,_.resolver=null,_.route=null)}activateChildRoutes(d,c,_){const S=et(c);d.children.forEach(U=>{this.activateRoutes(U,S[U.value.outlet],_),this.forwardEvent(new b(U.value.snapshot))}),d.children.length&&this.forwardEvent(new F(d.value.snapshot))}activateRoutes(d,c,_){const S=d.value,U=c?c.value:null;if(Hn(S),S===U)if(S.component){const oe=_.getOrCreateContext(S.outlet);this.activateChildRoutes(d,c,oe.children)}else this.activateChildRoutes(d,c,_);else if(S.component){const oe=_.getOrCreateContext(S.outlet);if(this.routeReuseStrategy.shouldAttach(S.snapshot)){const ye=this.routeReuseStrategy.retrieve(S.snapshot);this.routeReuseStrategy.store(S.snapshot,null),oe.children.onOutletReAttached(ye.contexts),oe.attachRef=ye.componentRef,oe.route=ye.route.value,oe.outlet&&oe.outlet.attach(ye.componentRef,ye.route.value),Hn(ye.route.value),this.activateChildRoutes(d,null,oe.children)}else{const ye=ir(S.snapshot),lt=ye?.get(v._Vd)??null;oe.attachRef=null,oe.route=S,oe.resolver=lt,oe.injector=ye,oe.outlet&&oe.outlet.activateWith(S,oe.injector),this.activateChildRoutes(d,null,oe.children)}}else this.activateChildRoutes(d,null,_)}}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */function ti(f){return"function"==typeof f}function Fn(f){return f instanceof sn}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
const we=Symbol("INITIAL_VALUE");function it(){return de(f=>(0,Ve.a)(f.map(d=>d.pipe((0,le.q)(1),(0,xt.O)(we)))).pipe(ee((d,c)=>{let _=!1;return c.reduce((S,U,oe)=>S!==we?S:(U===we&&(_=!0),_||!1!==U&&oe!==c.length-1&&!Fn(U)?S:U),d)},we),(0,ae.h)(d=>d!==we),(0,Ye.U)(d=>Fn(d)?d:!0===d),(0,le.q)(1)))}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */const _t={matched:!1,consumedSegments:[],remainingSegments:[],parameters:{},positionalParamSegments:{}};function kt(f,d,c){if(""===d.path)return"full"===d.pathMatch&&(f.hasChildren()||c.length>0)?{..._t}:{matched:!0,consumedSegments:[],remainingSegments:c,parameters:{},positionalParamSegments:{}};const S=(d.matcher||Ut)(c,f,d);if(!S)return{..._t};const U={};Ue(S.posParams,(ye,lt)=>{U[lt]=ye.path});const oe=S.consumed.length>0?{...U,...S.consumed[S.consumed.length-1].parameters}:U;return{matched:!0,consumedSegments:S.consumed,remainingSegments:c.slice(S.consumed.length),parameters:oe,positionalParamSegments:S.posParams??{}}}function Rn(f,d,c,_,S="corrected"){if(c.length>0&&function fn(f,d,c){return c.some(_=>An(f,d,_)&&ii(_)!==x)}(f,c,_)){const oe=new Qt(d,function Sn(f,d,c,_){const S={};S[x]=_,_._sourceSegment=f,_._segmentIndexShift=d.length;for(const U of c)if(""===U.path&&ii(U)!==x){const oe=new Qt([],{});oe._sourceSegment=f,oe._segmentIndexShift=d.length,S[ii(U)]=oe}return S}(f,d,_,new Qt(c,f.children)));return oe._sourceSegment=f,oe._segmentIndexShift=d.length,{segmentGroup:oe,slicedSegments:[]}}if(0===c.length&&function Yn(f,d,c){return c.some(_=>An(f,d,_))}(f,c,_)){const oe=new Qt(f.segments,function _n(f,d,c,_,S,U){const oe={};for(const ye of _)if(An(f,c,ye)&&!S[ii(ye)]){const lt=new Qt([],{});lt._sourceSegment=f,lt._segmentIndexShift="legacy"===U?f.segments.length:d.length,oe[ii(ye)]=lt}return{...S,...oe}}(f,d,c,_,f.children,S));return oe._sourceSegment=f,oe._segmentIndexShift=d.length,{segmentGroup:oe,slicedSegments:c}}const U=new Qt(f.segments,f.children);return U._sourceSegment=f,U._segmentIndexShift=d.length,{segmentGroup:U,slicedSegments:c}}function An(f,d,c){return(!(f.hasChildren()||d.length>0)||"full"!==c.pathMatch)&&""===c.path}function Zt(f,d,c,_){return!!(ii(f)===_||_!==x&&An(d,c,f))&&("**"===f.path||kt(d,f,c).matched)}function Hi(f,d,c){return 0===d.length&&!f.children[c]}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */class ri{constructor(d){this.segmentGroup=d||null}}class gr{constructor(d){this.urlTree=d}}function Si(f){return(0,xe._)(new ri(f))}function _r(f){return(0,xe._)(new gr(f))}class m{constructor(d,c,_,S,U){this.injector=d,this.configLoader=c,this.urlSerializer=_,this.urlTree=S,this.config=U,this.allowRedirects=!0}apply(){const d=Rn(this.urlTree.root,[],[],this.config).segmentGroup,c=new Qt(d.segments,d.children);return this.expandSegmentGroup(this.injector,this.config,c,x).pipe((0,Ye.U)(U=>this.createUrlTree(H(U),this.urlTree.queryParams,this.urlTree.fragment))).pipe((0,Ht.K)(U=>{if(U instanceof gr)return this.allowRedirects=!1,this.match(U.urlTree);throw U instanceof ri?this.noMatchError(U):U}))}match(d){return this.expandSegmentGroup(this.injector,this.config,d.root,x).pipe((0,Ye.U)(S=>this.createUrlTree(H(S),d.queryParams,d.fragment))).pipe((0,Ht.K)(S=>{throw S instanceof ri?this.noMatchError(S):S}))}noMatchError(d){return new Error(`Cannot match any routes. URL Segment: '${d.segmentGroup}'`)}createUrlTree(d,c,_){const S=d.segments.length>0?new Qt([],{[x]:d}):d;return new sn(S,c,_)}expandSegmentGroup(d,c,_,S){return 0===_.segments.length&&_.hasChildren()?this.expandChildren(d,c,_).pipe((0,Ye.U)(U=>new Qt([],U))):this.expandSegment(d,_,c,_.segments,S,!0)}expandChildren(d,c,_){const S=[];for(const U of Object.keys(_.children))"primary"===U?S.unshift(U):S.push(U);return(0,me.D)(S).pipe((0,jt.b)(U=>{const oe=_.children[U],ye=Hr(c,U);return this.expandSegmentGroup(d,ye,oe,U).pipe((0,Ye.U)(lt=>({segment:lt,outlet:U})))}),ee((U,oe)=>(U[oe.outlet]=oe.segment,U),{}),function Fe(f,d){const c=arguments.length>=2;return _=>_.pipe(f?(0,ae.h)((S,U)=>f(S,U,_)):fe.y,Ee(1),c?Se(d):Be(()=>new G))}())}expandSegment(d,c,_,S,U,oe){return(0,me.D)(_).pipe((0,jt.b)(ye=>this.expandSegmentAgainstRoute(d,c,_,ye,S,U,oe).pipe((0,Ht.K)(Tt=>{if(Tt instanceof ri)return(0,te.of)(null);throw Tt}))),Le(ye=>!!ye),(0,Ht.K)((ye,lt)=>{if(ye instanceof G||"EmptyError"===ye.name)return Hi(c,S,U)?(0,te.of)(new Qt([],{})):Si(c);throw ye}))}expandSegmentAgainstRoute(d,c,_,S,U,oe,ye){return Zt(S,c,U,oe)?void 0===S.redirectTo?this.matchSegmentAgainstRoute(d,c,S,U,oe):ye&&this.allowRedirects?this.expandSegmentAgainstRouteUsingRedirect(d,c,_,S,U,oe):Si(c):Si(c)}expandSegmentAgainstRouteUsingRedirect(d,c,_,S,U,oe){return"**"===S.path?this.expandWildCardWithParamsAgainstRouteUsingRedirect(d,_,S,oe):this.expandRegularSegmentAgainstRouteUsingRedirect(d,c,_,S,U,oe)}expandWildCardWithParamsAgainstRouteUsingRedirect(d,c,_,S){const U=this.applyRedirectCommands([],_.redirectTo,{});return _.redirectTo.startsWith("/")?_r(U):this.lineralizeSegments(_,U).pipe((0,ft.z)(oe=>{const ye=new Qt(oe,{});return this.expandSegment(d,ye,c,oe,S,!1)}))}expandRegularSegmentAgainstRouteUsingRedirect(d,c,_,S,U,oe){const{matched:ye,consumedSegments:lt,remainingSegments:Tt,positionalParamSegments:on}=kt(c,S,U);if(!ye)return Si(c);const Nt=this.applyRedirectCommands(lt,S.redirectTo,on);return S.redirectTo.startsWith("/")?_r(Nt):this.lineralizeSegments(S,Nt).pipe((0,ft.z)(Tn=>this.expandSegment(d,c,_,Tn.concat(Tt),oe,!1)))}matchSegmentAgainstRoute(d,c,_,S,U){if("**"===_.path)return d=Mr(_,d),_.loadChildren?(_._loadedRoutes?(0,te.of)({routes:_._loadedRoutes,injector:_._loadedInjector}):this.configLoader.loadChildren(d,_)).pipe((0,Ye.U)(Nt=>(_._loadedRoutes=Nt.routes,_._loadedInjector=Nt.injector,new Qt(S,{})))):(0,te.of)(new Qt(S,{}));const{matched:oe,consumedSegments:ye,remainingSegments:lt}=kt(c,_,S);return oe?(d=Mr(_,d),this.getChildConfig(d,_,S).pipe((0,ft.z)(on=>{const Nt=on.injector??d,Tn=on.routes,{segmentGroup:Un,slicedSegments:zi}=Rn(c,ye,lt,Tn),vr=new Qt(Un.segments,Un.children);if(0===zi.length&&vr.hasChildren())return this.expandChildren(Nt,Tn,vr).pipe((0,Ye.U)(sl=>new Qt(ye,sl)));if(0===Tn.length&&0===zi.length)return(0,te.of)(new Qt(ye,{}));const ua=ii(_)===U;return this.expandSegment(Nt,vr,Tn,zi,ua?x:U,!0).pipe((0,Ye.U)(Vn=>new Qt(ye.concat(Vn.segments),Vn.children)))}))):Si(c)}getChildConfig(d,c,_){return c.children?(0,te.of)({routes:c.children,injector:d}):c.loadChildren?void 0!==c._loadedRoutes?(0,te.of)({routes:c._loadedRoutes,injector:c._loadedInjector}):this.runCanLoadGuards(d,c,_).pipe((0,ft.z)(S=>S?this.configLoader.loadChildren(d,c).pipe((0,vt.b)(U=>{c._loadedRoutes=U.routes,c._loadedInjector=U.injector})):function jr(f){return(0,xe._)(Xe(`Cannot load children because the guard of the route "path: '${f.path}'" returned false`))}(c))):(0,te.of)({routes:[],injector:d})}runCanLoadGuards(d,c,_){const S=c.canLoad;if(!S||0===S.length)return(0,te.of)(!0);const U=S.map(oe=>{const ye=d.get(oe);let lt;if(function C(f){return f&&ti(f.canLoad)}(ye))lt=ye.canLoad(c,_);else{if(!ti(ye))throw new Error("Invalid CanLoad guard");lt=ye(c,_)}return Te(lt)});return(0,te.of)(U).pipe(it(),(0,vt.b)(oe=>{if(!Fn(oe))return;const ye=Xe(`Redirecting to "${this.urlSerializer.serialize(oe)}"`);throw ye.url=oe,ye}),(0,Ye.U)(oe=>!0===oe))}lineralizeSegments(d,c){let _=[],S=c.root;for(;;){if(_=_.concat(S.segments),0===S.numberOfChildren)return(0,te.of)(_);if(S.numberOfChildren>1||!S.children[x])return(0,xe._)(new Error(`Only absolute redirects can have named outlets. redirectTo: '${d.redirectTo}'`));S=S.children[x]}}applyRedirectCommands(d,c,_){return this.applyRedirectCreatreUrlTree(c,this.urlSerializer.parse(c),d,_)}applyRedirectCreatreUrlTree(d,c,_,S){const U=this.createSegmentGroup(d,c.root,_,S);return new sn(U,this.createQueryParams(c.queryParams,this.urlTree.queryParams),c.fragment)}createQueryParams(d,c){const _={};return Ue(d,(S,U)=>{if("string"==typeof S&&S.startsWith(":")){const ye=S.substring(1);_[U]=c[ye]}else _[U]=S}),_}createSegmentGroup(d,c,_,S){const U=this.createSegments(d,c.segments,_,S);let oe={};return Ue(c.children,(ye,lt)=>{oe[lt]=this.createSegmentGroup(d,ye,_,S)}),new Qt(U,oe)}createSegments(d,c,_,S){return c.map(U=>U.path.startsWith(":")?this.findPosParam(d,U,S):this.findOrReturn(U,_))}findPosParam(d,c,_){const S=_[c.path.substring(1)];if(!S)throw new Error(`Cannot redirect to '${d}'. Cannot find '${c.path}'.`);return S}findOrReturn(d,c){let _=0;for(const S of c){if(S.path===d.path)return c.splice(_),S;_++}return d}}function H(f){const d={};for(const _ of Object.keys(f.children)){const U=H(f.children[_]);(U.segments.length>0||U.hasChildren())&&(d[_]=U)}return function g(f){if(1===f.numberOfChildren&&f.children[x]){const d=f.children[x];return new Qt(f.segments.concat(d.segments),d.children)}return f}(new Qt(f.segments,d))}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
class It{constructor(d){this.path=d,this.route=this.path[this.path.length-1]}}class kn{constructor(d,c){this.component=d,this.route=c}}function li(f,d,c){const _=f._root;return Tr(_,d?d._root:null,c,[_.value])}function ji(f,d,c){return(ir(d)??c).get(f)}function Tr(f,d,c,_,S={canDeactivateChecks:[],canActivateChecks:[]}){const U=et(d);return f.children.forEach(oe=>{(function ra(f,d,c,_,S={canDeactivateChecks:[],canActivateChecks:[]}){const U=f.value,oe=d?d.value:null,ye=c?c.getContext(f.value.outlet):null;if(oe&&U.routeConfig===oe.routeConfig){const lt=function bs(f,d,c){if("function"==typeof c)return c(f,d);switch(c){case"pathParamsChange":return!Mn(f.url,d.url);case"pathParamsOrQueryParamsChange":return!Mn(f.url,d.url)||!qt(f.queryParams,d.queryParams);case"always":return!0;case"paramsOrQueryParamsChange":return!Ti(f,d)||!qt(f.queryParams,d.queryParams);default:return!Ti(f,d)}}(oe,U,U.routeConfig.runGuardsAndResolvers);lt?S.canActivateChecks.push(new It(_)):(U.data=oe.data,U._resolvedData=oe._resolvedData),Tr(f,d,U.component?ye?ye.children:null:c,_,S),lt&&ye&&ye.outlet&&ye.outlet.isActivated&&S.canDeactivateChecks.push(new kn(ye.outlet.component,oe))}else oe&&vo(d,ye,S),S.canActivateChecks.push(new It(_)),Tr(f,null,U.component?ye?ye.children:null:c,_,S)})(oe,U[oe.value.outlet],c,_.concat([oe.value]),S),delete U[oe.value.outlet]}),Ue(U,(oe,ye)=>vo(oe,c.getContext(ye),S)),S}function vo(f,d,c){const _=et(f),S=f.value;Ue(_,(U,oe)=>{vo(U,S.component?d?d.children.getContext(oe):null:d,c)}),c.canDeactivateChecks.push(new kn(S.component&&d&&d.outlet&&d.outlet.isActivated?d.outlet.component:null,S))}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */class u{}function D(f){return new X.y(d=>d.error(f))}class W{constructor(d,c,_,S,U,oe){this.rootComponentType=d,this.config=c,this.urlTree=_,this.url=S,this.paramsInheritanceStrategy=U,this.relativeLinkResolution=oe}recognize(){const d=Rn(this.urlTree.root,[],[],this.config.filter(oe=>void 0===oe.redirectTo),this.relativeLinkResolution).segmentGroup,c=this.processSegmentGroup(this.config,d,x);if(null===c)return null;const _=new xn([],Object.freeze({}),Object.freeze({...this.urlTree.queryParams}),this.urlTree.fragment,{},x,this.rootComponentType,null,this.urlTree.root,-1,{}),S=new ke(_,c),U=new qn(this.url,S);return this.inheritParamsAndData(U._root),U}inheritParamsAndData(d){const c=d.value,_=tn(c,this.paramsInheritanceStrategy);c.params=Object.freeze(_.params),c.data=Object.freeze(_.data),d.children.forEach(S=>this.inheritParamsAndData(S))}processSegmentGroup(d,c,_){return 0===c.segments.length&&c.hasChildren()?this.processChildren(d,c):this.processSegment(d,c,c.segments,_)}processChildren(d,c){const _=[];for(const U of Object.keys(c.children)){const oe=c.children[U],ye=Hr(d,U),lt=this.processSegmentGroup(ye,oe,U);if(null===lt)return null;_.push(...lt)}const S=dt(_);return function be(f){f.sort((d,c)=>d.value.outlet===x?-1:c.value.outlet===x?1:d.value.outlet.localeCompare(c.value.outlet))}(S),S}processSegment(d,c,_,S){for(const U of d){const oe=this.processSegmentAgainstRoute(U,c,_,S);if(null!==oe)return oe}return Hi(c,_,S)?[]:null}processSegmentAgainstRoute(d,c,_,S){if(d.redirectTo||!Zt(d,c,_,S))return null;let U,oe=[],ye=[];if("**"===d.path){const Un=_.length>0?he(_).parameters:{},zi=Dn(c)+_.length;U=new xn(_,Un,Object.freeze({...this.urlTree.queryParams}),this.urlTree.fragment,nn(d),ii(d),d.component??d._loadedComponent??null,d,Wt(c),zi,dn(d),zi)}else{const Un=kt(c,d,_);if(!Un.matched)return null;oe=Un.consumedSegments,ye=Un.remainingSegments;const zi=Dn(c)+oe.length;U=new xn(oe,Un.parameters,Object.freeze({...this.urlTree.queryParams}),this.urlTree.fragment,nn(d),ii(d),d.component??d._loadedComponent??null,d,Wt(c),zi,dn(d),zi)}const lt=function Ie(f){return f.children?f.children:f.loadChildren?f._loadedRoutes:[]}(d),{segmentGroup:Tt,slicedSegments:on}=Rn(c,oe,ye,lt.filter(Un=>void 0===Un.redirectTo),this.relativeLinkResolution);if(0===on.length&&Tt.hasChildren()){const Un=this.processChildren(lt,Tt);return null===Un?null:[new ke(U,Un)]}if(0===lt.length&&0===on.length)return[new ke(U,[])];const Nt=ii(d)===S,Tn=this.processSegment(lt,Tt,on,Nt?x:S);return null===Tn?null:[new ke(U,Tn)]}}function Ze(f){const d=f.value.routeConfig;return d&&""===d.path&&void 0===d.redirectTo}function dt(f){const d=[],c=new Set;for(const _ of f){if(!Ze(_)){d.push(_);continue}const S=d.find(U=>_.value.routeConfig===U.value.routeConfig);void 0!==S?(S.children.push(..._.children),c.add(S)):d.push(_)}for(const _ of c){const S=dt(_.children);d.push(new ke(_.value,S))}return d.filter(_=>!c.has(_))}function Wt(f){let d=f;for(;d._sourceSegment;)d=d._sourceSegment;return d}function Dn(f){let d=f,c=d._segmentIndexShift??0;for(;d._sourceSegment;)d=d._sourceSegment,c+=d._segmentIndexShift??0;return c-1}function nn(f){return f.data||{}}function dn(f){return f.resolve||{}}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
const mn=Symbol("RouteTitle");function pi(f){return"string"==typeof f.title||null===f.title}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */function Oi(f){return de(d=>{const c=f(d);return c?(0,me.D)(c).pipe((0,Ye.U)(()=>d)):(0,te.of)(d)})}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */class oo extends class Pi{shouldDetach(d){return!1}store(d,c){}shouldAttach(d){return!1}retrieve(d){return null}shouldReuseRoute(d,c){return d.routeConfig===c.routeConfig}}{}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */const Ui=new v.OlP("ROUTES");let so=(()=>{class f{constructor(c,_){this.injector=c,this.compiler=_,this.componentLoaders=new WeakMap,this.childrenLoaders=new WeakMap}loadComponent(c){if(this.componentLoaders.get(c))return this.componentLoaders.get(c);if(c._loadedComponent)return(0,te.of)(c._loadedComponent);this.onLoadStartListener&&this.onLoadStartListener(c);const _=Te(c.loadComponent()).pipe((0,vt.b)(U=>{this.onLoadEndListener&&this.onLoadEndListener(c),c._loadedComponent=U}),(0,ze.x)(()=>{this.componentLoaders.delete(c)})),S=new ce(_,()=>new ht.x).pipe(Me());return this.componentLoaders.set(c,S),S}loadChildren(c,_){if(this.childrenLoaders.get(_))return this.childrenLoaders.get(_);if(_._loadedRoutes)return(0,te.of)({routes:_._loadedRoutes,injector:_._loadedInjector});this.onLoadStartListener&&this.onLoadStartListener(_);const U=this.loadModuleFactoryOrRoutes(_.loadChildren).pipe((0,Ye.U)(ye=>{this.onLoadEndListener&&this.onLoadEndListener(_);let lt,Tt,on=!1;Array.isArray(ye)?Tt=ye:(lt=ye.create(c).injector,Tt=Qe(lt.get(Ui,[],v.XFs.Self|v.XFs.Optional)));return{routes:Tt.map(Vr),injector:lt}}),(0,ze.x)(()=>{this.childrenLoaders.delete(_)})),oe=new ce(U,()=>new ht.x).pipe(Me());return this.childrenLoaders.set(_,oe),oe}loadModuleFactoryOrRoutes(c){return Te(c()).pipe((0,ft.z)(_=>_ instanceof v.YKP||Array.isArray(_)?(0,te.of)(_):(0,me.D)(this.compiler.compileModuleAsync(_))))}}return f.\u0275fac=function(c){return new(c||f)(v.LFG(v.zs3),v.LFG(v.Sil))},f.\u0275prov=v.Yz7({token:f,factory:f.\u0275fac}),f})();
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */class zt{shouldProcessUrl(d){return!0}extract(d){return d}merge(d,c){return d}}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */function an(f){throw f}function In(f,d,c){return d.parse("/")}function Gn(f,d){return(0,te.of)(null)}const Fi={paths:"exact",fragment:"ignored",matrixParams:"ignored",queryParams:"exact"},xi={paths:"subset",fragment:"ignored",matrixParams:"ignored",queryParams:"subset"};let Jn=(()=>{class f{constructor(c,_,S,U,oe,ye,lt){this.rootComponentType=c,this.urlSerializer=_,this.rootContexts=S,this.location=U,this.config=lt,this.lastSuccessfulNavigation=null,this.currentNavigation=null,this.disposed=!1,this.navigationId=0,this.currentPageId=0,this.isNgZoneEnabled=!1,this.events=new ht.x,this.errorHandler=an,this.malformedUriErrorHandler=In,this.navigated=!1,this.lastSuccessfulId=-1,this.hooks={beforePreactivation:Gn,afterPreactivation:Gn},this.urlHandlingStrategy=new zt,this.routeReuseStrategy=new oo,this.onSameUrlNavigation="ignore",this.paramsInheritanceStrategy="emptyOnly",this.urlUpdateStrategy="deferred",this.relativeLinkResolution="corrected",this.canceledNavigationResolution="replace",this.configLoader=oe.get(so),this.configLoader.onLoadEndListener=Tn=>this.triggerEvent(new Je(Tn)),this.configLoader.onLoadStartListener=Tn=>this.triggerEvent(new Mt(Tn)),this.ngModule=oe.get(v.h0i),this.console=oe.get(v.c2e);const Nt=oe.get(v.R0b);this.isNgZoneEnabled=Nt instanceof v.R0b&&v.R0b.isInAngularZone(),this.resetConfig(lt),this.currentUrlTree=function _e(){return new sn(new Qt([],{}),{},null)}(),this.rawUrlTree=this.currentUrlTree,this.browserUrlTree=this.currentUrlTree,this.routerState=$t(this.currentUrlTree,this.rootComponentType),this.transitions=new Ge.X({id:0,targetPageId:0,currentUrlTree:this.currentUrlTree,currentRawUrl:this.currentUrlTree,extractedUrl:this.urlHandlingStrategy.extract(this.currentUrlTree),urlAfterRedirects:this.urlHandlingStrategy.extract(this.currentUrlTree),rawUrl:this.currentUrlTree,extras:{},resolve:null,reject:null,promise:Promise.resolve(!0),source:"imperative",restoredState:null,currentSnapshot:this.routerState.snapshot,targetSnapshot:null,currentRouterState:this.routerState,targetRouterState:null,guards:{canActivateChecks:[],canDeactivateChecks:[]},guardsResult:null}),this.navigations=this.setupNavigations(this.transitions),this.processNavigations()}get browserPageId(){return this.location.getState()?.\u0275routerPageId}setupNavigations(c){const _=this.events;return c.pipe((0,ae.h)(S=>0!==S.id),(0,Ye.U)(S=>({...S,extractedUrl:this.urlHandlingStrategy.extract(S.rawUrl)})),de(S=>{let U=!1,oe=!1;return(0,te.of)(S).pipe((0,vt.b)(ye=>{this.currentNavigation={id:ye.id,initialUrl:ye.rawUrl,extractedUrl:ye.extractedUrl,trigger:ye.source,extras:ye.extras,previousNavigation:this.lastSuccessfulNavigation?{...this.lastSuccessfulNavigation,previousNavigation:null}:null}}),de(ye=>{const lt=this.browserUrlTree.toString(),Tt=!this.navigated||ye.extractedUrl.toString()!==lt||lt!==this.currentUrlTree.toString();if(("reload"===this.onSameUrlNavigation||Tt)&&this.urlHandlingStrategy.shouldProcessUrl(ye.rawUrl))return Vo(ye.source)&&(this.browserUrlTree=ye.extractedUrl),(0,te.of)(ye).pipe(de(Nt=>{const Tn=this.transitions.getValue();return _.next(new bt(Nt.id,this.serializeUrl(Nt.extractedUrl),Nt.source,Nt.restoredState)),Tn!==this.transitions.getValue()?qe.E:Promise.resolve(Nt)}),function tt(f,d,c,_){return de(S=>function w(f,d,c,_,S){return new m(f,d,c,_,S).apply()}(f,d,c,S.extractedUrl,_).pipe((0,Ye.U)(U=>({...S,urlAfterRedirects:U}))))}(this.ngModule.injector,this.configLoader,this.urlSerializer,this.config),(0,vt.b)(Nt=>{this.currentNavigation={...this.currentNavigation,finalUrl:Nt.urlAfterRedirects}}),function Bn(f,d,c,_,S){return(0,ft.z)(U=>function k(f,d,c,_,S="emptyOnly",U="legacy"){try{const oe=new W(f,d,c,_,S,U).recognize();return null===oe?D(new u):(0,te.of)(oe)}catch(oe){return D(oe)}}(f,d,U.urlAfterRedirects,c(U.urlAfterRedirects),_,S).pipe((0,Ye.U)(oe=>({...U,targetSnapshot:oe}))))}(this.rootComponentType,this.config,Nt=>this.serializeUrl(Nt),this.paramsInheritanceStrategy,this.relativeLinkResolution),(0,vt.b)(Nt=>{if("eager"===this.urlUpdateStrategy){if(!Nt.extras.skipLocationChange){const Un=this.urlHandlingStrategy.merge(Nt.urlAfterRedirects,Nt.rawUrl);this.setBrowserUrl(Un,Nt)}this.browserUrlTree=Nt.urlAfterRedirects}const Tn=new De(Nt.id,this.serializeUrl(Nt.extractedUrl),this.serializeUrl(Nt.urlAfterRedirects),Nt.targetSnapshot);_.next(Tn)}));if(Tt&&this.rawUrlTree&&this.urlHandlingStrategy.shouldProcessUrl(this.rawUrlTree)){const{id:Tn,extractedUrl:Un,source:zi,restoredState:vr,extras:ua}=ye,da=new bt(Tn,this.serializeUrl(Un),zi,vr);_.next(da);const Vn=$t(Un,this.rootComponentType).snapshot;return(0,te.of)({...ye,targetSnapshot:Vn,urlAfterRedirects:Un,extras:{...ua,skipLocationChange:!1,replaceUrl:!1}})}return this.rawUrlTree=ye.rawUrl,ye.resolve(null),qe.E}),Oi(ye=>{const{targetSnapshot:lt,id:Tt,extractedUrl:on,rawUrl:Nt,extras:{skipLocationChange:Tn,replaceUrl:Un}}=ye;return this.hooks.beforePreactivation(lt,{navigationId:Tt,appliedUrlTree:on,rawUrlTree:Nt,skipLocationChange:!!Tn,replaceUrl:!!Un})}),(0,vt.b)(ye=>{const lt=new ct(ye.id,this.serializeUrl(ye.extractedUrl),this.serializeUrl(ye.urlAfterRedirects),ye.targetSnapshot);this.triggerEvent(lt)}),(0,Ye.U)(ye=>({...ye,guards:li(ye.targetSnapshot,ye.currentSnapshot,this.rootContexts)})),function Do(f,d){return(0,ft.z)(c=>{const{targetSnapshot:_,currentSnapshot:S,guards:{canActivateChecks:U,canDeactivateChecks:oe}}=c;return 0===oe.length&&0===U.length?(0,te.of)({...c,guardsResult:!0}):function vi(f,d,c,_){return(0,me.D)(f).pipe((0,ft.z)(S=>function R(f,d,c,_,S){const U=d&&d.routeConfig?d.routeConfig.canDeactivate:null;if(!U||0===U.length)return(0,te.of)(!0);const oe=U.map(ye=>{const lt=ji(ye,d,S);let Tt;if(function z(f){return f&&ti(f.canDeactivate)}(lt))Tt=Te(lt.canDeactivate(f,d,c,_));else{if(!ti(lt))throw new Error("Invalid CanDeactivate guard");Tt=Te(lt(f,d,c,_))}return Tt.pipe(Le())});return(0,te.of)(oe).pipe(it())}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */(S.component,S.route,c,d,_)),Le(S=>!0!==S,!0))}(oe,_,S,f).pipe((0,ft.z)(ye=>ye&&function Sr(f){return"boolean"==typeof f}(ye)?function Yi(f,d,c,_){return(0,me.D)(d).pipe((0,jt.b)(S=>(0,Ke.z)(function Ur(f,d){return null!==f&&d&&d(new B(f)),(0,te.of)(!0)}(S.route.parent,_),function So(f,d){return null!==f&&d&&d(new j(f)),(0,te.of)(!0)}(S.route,_),function oa(f,d,c){const _=d[d.length-1],U=d.slice(0,d.length-1).reverse().map(oe=>function yi(f){const d=f.routeConfig?f.routeConfig.canActivateChild:null;return d&&0!==d.length?{node:f,guards:d}:null}(oe)).filter(oe=>null!==oe).map(oe=>(0,Ne.P)(()=>{const ye=oe.guards.map(lt=>{const Tt=ji(lt,oe.node,c);let on;if(function E(f){return f&&ti(f.canActivateChild)}(Tt))on=Te(Tt.canActivateChild(_,f));else{if(!ti(Tt))throw new Error("Invalid CanActivateChild guard");on=Te(Tt(_,f))}return on.pipe(Le())});return(0,te.of)(ye).pipe(it())}));return(0,te.of)(U).pipe(it())}(f,S.path,c),function rr(f,d,c){const _=d.routeConfig?d.routeConfig.canActivate:null;if(!_||0===_.length)return(0,te.of)(!0);const S=_.map(U=>(0,Ne.P)(()=>{const oe=ji(U,d,c);let ye;if(function V(f){return f&&ti(f.canActivate)}(oe))ye=Te(oe.canActivate(d,f));else{if(!ti(oe))throw new Error("Invalid CanActivate guard");ye=Te(oe(d,f))}return ye.pipe(Le())}));return(0,te.of)(S).pipe(it())}(f,S.route,c))),Le(S=>!0!==S,!0))}(_,U,f,d):(0,te.of)(ye)),(0,Ye.U)(ye=>({...c,guardsResult:ye})))})}(this.ngModule.injector,ye=>this.triggerEvent(ye)),(0,vt.b)(ye=>{if(Fn(ye.guardsResult)){const Tt=Xe(`Redirecting to "${this.serializeUrl(ye.guardsResult)}"`);throw Tt.url=ye.guardsResult,Tt}const lt=new gt(ye.id,this.serializeUrl(ye.extractedUrl),this.serializeUrl(ye.urlAfterRedirects),ye.targetSnapshot,!!ye.guardsResult);this.triggerEvent(lt)}),(0,ae.h)(ye=>!!ye.guardsResult||(this.restoreHistory(ye),this.cancelNavigationTransition(ye,""),!1)),Oi(ye=>{if(ye.guards.canActivateChecks.length)return(0,te.of)(ye).pipe((0,vt.b)(lt=>{const Tt=new Gt(lt.id,this.serializeUrl(lt.extractedUrl),this.serializeUrl(lt.urlAfterRedirects),lt.targetSnapshot);this.triggerEvent(Tt)}),de(lt=>{let Tt=!1;return(0,te.of)(lt).pipe(function jn(f,d){return(0,ft.z)(c=>{const{targetSnapshot:_,guards:{canActivateChecks:S}}=c;if(!S.length)return(0,te.of)(c);let U=0;return(0,me.D)(S).pipe((0,jt.b)(oe=>function En(f,d,c,_){const S=f.routeConfig,U=f._resolve;return void 0!==S?.title&&!pi(S)&&(U[mn]=S.title),function oi(f,d,c,_){const S=function zr(f){return[...Object.keys(f),...Object.getOwnPropertySymbols(f)]}(f);if(0===S.length)return(0,te.of)({});const U={};return(0,me.D)(S).pipe((0,ft.z)(oe=>function Ki(f,d,c,_){const S=ji(f,d,_);return Te(S.resolve?S.resolve(d,c):S(d,c))}(f[oe],d,c,_).pipe(Le(),(0,vt.b)(ye=>{U[oe]=ye}))),Ee(1),(0,Pt.h)(U),(0,Ht.K)(oe=>oe instanceof G?qe.E:(0,xe._)(oe)))}(U,f,d,_).pipe((0,Ye.U)(oe=>(f._resolvedData=oe,f.data=tn(f,c).resolve,S&&pi(S)&&(f.data[mn]=S.title),null)))}(oe.route,_,f,d)),(0,vt.b)(()=>U++),Ee(1),(0,ft.z)(oe=>U===S.length?(0,te.of)(c):qe.E))})}(this.paramsInheritanceStrategy,this.ngModule.injector),(0,vt.b)({next:()=>Tt=!0,complete:()=>{Tt||(this.restoreHistory(lt),this.cancelNavigationTransition(lt,"At least one route resolver didn't emit any value."))}}))}),(0,vt.b)(lt=>{const Tt=new Yt(lt.id,this.serializeUrl(lt.extractedUrl),this.serializeUrl(lt.urlAfterRedirects),lt.targetSnapshot);this.triggerEvent(Tt)}))}),Oi(ye=>{const{targetSnapshot:lt,id:Tt,extractedUrl:on,rawUrl:Nt,extras:{skipLocationChange:Tn,replaceUrl:Un}}=ye;return this.hooks.afterPreactivation(lt,{navigationId:Tt,appliedUrlTree:on,rawUrlTree:Nt,skipLocationChange:!!Tn,replaceUrl:!!Un})}),Oi(ye=>{const lt=Tt=>{const on=[];Tt.routeConfig?.loadComponent&&!Tt.routeConfig._loadedComponent&&on.push(this.configLoader.loadComponent(Tt.routeConfig).pipe((0,vt.b)(Nt=>{Tt.component=Nt}),(0,Ye.U)(()=>{})));for(const Nt of Tt.children)on.push(...lt(Nt));return on};return(0,Ve.a)(lt(ye.targetSnapshot.root)).pipe(Se(),(0,le.q)(1))}),(0,Ye.U)(ye=>{const lt=function Zi(f,d,c){const _=Ii(f,d._root,c?c._root:void 0);return new Ct(_,d)}(this.routeReuseStrategy,ye.targetSnapshot,ye.currentRouterState);return{...ye,targetRouterState:lt}}),(0,vt.b)(ye=>{this.currentUrlTree=ye.urlAfterRedirects,this.rawUrlTree=this.urlHandlingStrategy.merge(ye.urlAfterRedirects,ye.rawUrl),this.routerState=ye.targetRouterState,"deferred"===this.urlUpdateStrategy&&(ye.extras.skipLocationChange||this.setBrowserUrl(this.rawUrlTree,ye),this.browserUrlTree=ye.urlAfterRedirects)}),((f,d,c)=>(0,Ye.U)(_=>(new Ln(d,_.targetRouterState,_.currentRouterState,c).activate(f),_)))(this.rootContexts,this.routeReuseStrategy,ye=>this.triggerEvent(ye)),(0,vt.b)({next(){U=!0},complete(){U=!0}}),(0,ze.x)(()=>{U||oe||this.cancelNavigationTransition(S,`Navigation ID ${S.id} is not equal to the current navigation id ${this.navigationId}`),this.currentNavigation?.id===S.id&&(this.currentNavigation=null)}),(0,Ht.K)(ye=>{if(oe=!0,function Rt(f){return f&&f[se]}(ye)){const lt=Fn(ye.url);lt||(this.navigated=!0,this.restoreHistory(S,!0));const Tt=new rt(S.id,this.serializeUrl(S.extractedUrl),ye.message);if(_.next(Tt),lt){const on=this.urlHandlingStrategy.merge(ye.url,this.rawUrlTree),Nt={skipLocationChange:S.extras.skipLocationChange,replaceUrl:"eager"===this.urlUpdateStrategy||Vo(S.source)};this.scheduleNavigation(on,"imperative",null,Nt,{resolve:S.resolve,reject:S.reject,promise:S.promise})}else S.resolve(!1)}else{this.restoreHistory(S,!0);const lt=new je(S.id,this.serializeUrl(S.extractedUrl),ye);_.next(lt);try{S.resolve(this.errorHandler(ye))}catch(Tt){S.reject(Tt)}}return qe.E}))}))}resetRootComponentType(c){this.rootComponentType=c,this.routerState.root.component=this.rootComponentType}setTransition(c){this.transitions.next({...this.transitions.value,...c})}initialNavigation(){this.setUpLocationChangeListener(),0===this.navigationId&&this.navigateByUrl(this.location.path(!0),{replaceUrl:!0})}setUpLocationChangeListener(){this.locationSubscription||(this.locationSubscription=this.location.subscribe(c=>{const _="popstate"===c.type?"popstate":"hashchange";"popstate"===_&&setTimeout(()=>{const S={replaceUrl:!0},U=c.state?.navigationId?c.state:null;if(U){const ye={...U};delete ye.navigationId,delete ye.\u0275routerPageId,0!==Object.keys(ye).length&&(S.state=ye)}const oe=this.parseUrl(c.url);this.scheduleNavigation(oe,_,U,S)},0)}))}get url(){return this.serializeUrl(this.currentUrlTree)}getCurrentNavigation(){return this.currentNavigation}triggerEvent(c){this.events.next(c)}resetConfig(c){this.config=c.map(Vr),this.navigated=!1,this.lastSuccessfulId=-1}ngOnDestroy(){this.dispose()}dispose(){this.transitions.complete(),this.locationSubscription&&(this.locationSubscription.unsubscribe(),this.locationSubscription=void 0),this.disposed=!0}createUrlTree(c,_={}){const{relativeTo:S,queryParams:U,fragment:oe,queryParamsHandling:ye,preserveFragment:lt}=_,Tt=S||this.routerState.root,on=lt?this.currentUrlTree.fragment:oe;let Nt=null;switch(ye){case"merge":Nt={...this.currentUrlTree.queryParams,...U};break;case"preserve":Nt=this.currentUrlTree.queryParams;break;default:Nt=U||null}return null!==Nt&&(Nt=this.removeEmptyProps(Nt)),function wi(f,d,c,_,S){if(0===c.length)return hr(d.root,d.root,d.root,_,S);const U=function br(f){if("string"==typeof f[0]&&1===f.length&&"/"===f[0])return new Qi(!0,0,f);let d=0,c=!1;const _=f.reduce((S,U,oe)=>{if("object"==typeof U&&null!=U){if(U.outlets){const ye={};return Ue(U.outlets,(lt,Tt)=>{ye[Tt]="string"==typeof lt?lt.split("/"):lt}),[...S,{outlets:ye}]}if(U.segmentPath)return[...S,U.segmentPath]}return"string"!=typeof U?[...S,U]:0===oe?(U.split("/").forEach((ye,lt)=>{0==lt&&"."===ye||(0==lt&&""===ye?c=!0:".."===ye?d++:""!=ye&&S.push(ye))}),S):[...S,U]},[]);return new Qi(c,d,_)}(c);return U.toRoot()?hr(d.root,d.root,new Qt([],{}),_,S):function oe(lt){const Tt=function no(f,d,c,_){return f.isAbsolute?new Li(d.root,!0,0):-1===_?new Li(c,c===d.root,0):function Nr(f,d,c){let _=f,S=d,U=c;for(;U>S;){if(U-=S,_=_.parent,!_)throw new Error("Invalid number of '../'");S=_.segments.length}return new Li(_,!1,S-U)}(c,_+(Fr(f.commands[0])?0:1),f.numberOfDoubleDots)}(U,d,f.snapshot?._urlSegment,lt),on=Tt.processChildren?Bi(Tt.segmentGroup,Tt.index,U.commands):Cr(Tt.segmentGroup,Tt.index,U.commands);return hr(d.root,Tt.segmentGroup,on,_,S)}(f.snapshot?._lastPathIndex)}(Tt,this.currentUrlTree,c,Nt,on??null)}navigateByUrl(c,_={skipLocationChange:!1}){const S=Fn(c)?c:this.parseUrl(c),U=this.urlHandlingStrategy.merge(S,this.rawUrlTree);return this.scheduleNavigation(U,"imperative",null,_)}navigate(c,_={skipLocationChange:!1}){return function Kn(f){for(let d=0;d<f.length;d++){const c=f[d];if(null==c)throw new Error(`The requested path contains ${c} segment at index ${d}`)}}(c),this.navigateByUrl(this.createUrlTree(c,_),_)}serializeUrl(c){return this.urlSerializer.serialize(c)}parseUrl(c){let _;try{_=this.urlSerializer.parse(c)}catch(S){_=this.malformedUriErrorHandler(S,this.urlSerializer,c)}return _}isActive(c,_){let S;if(S=!0===_?{...Fi}:!1===_?{...xi}:_,Fn(c))return $e(this.currentUrlTree,c,S);const U=this.parseUrl(c);return $e(this.currentUrlTree,U,S)}removeEmptyProps(c){return Object.keys(c).reduce((_,S)=>{const U=c[S];return null!=U&&(_[S]=U),_},{})}processNavigations(){this.navigations.subscribe(c=>{this.navigated=!0,this.lastSuccessfulId=c.id,this.currentPageId=c.targetPageId,this.events.next(new nt(c.id,this.serializeUrl(c.extractedUrl),this.serializeUrl(this.currentUrlTree))),this.lastSuccessfulNavigation=this.currentNavigation,this.titleStrategy?.updateTitle(this.routerState.snapshot),c.resolve(!0)},c=>{this.console.warn(`Unhandled Navigation Error: ${c}`)})}scheduleNavigation(c,_,S,U,oe){if(this.disposed)return Promise.resolve(!1);let ye,lt,Tt;oe?(ye=oe.resolve,lt=oe.reject,Tt=oe.promise):Tt=new Promise((Tn,Un)=>{ye=Tn,lt=Un});const on=++this.navigationId;let Nt;return"computed"===this.canceledNavigationResolution?(0===this.currentPageId&&(S=this.location.getState()),Nt=S&&S.\u0275routerPageId?S.\u0275routerPageId:U.replaceUrl||U.skipLocationChange?this.browserPageId??0:(this.browserPageId??0)+1):Nt=0,this.setTransition({id:on,targetPageId:Nt,source:_,restoredState:S,currentUrlTree:this.currentUrlTree,currentRawUrl:this.rawUrlTree,rawUrl:c,extras:U,resolve:ye,reject:lt,promise:Tt,currentSnapshot:this.routerState.snapshot,currentRouterState:this.routerState}),Tt.catch(Tn=>Promise.reject(Tn))}setBrowserUrl(c,_){const S=this.urlSerializer.serialize(c),U={..._.extras.state,...this.generateNgRouterState(_.id,_.targetPageId)};this.location.isCurrentPathEqualTo(S)||_.extras.replaceUrl?this.location.replaceState(S,"",U):this.location.go(S,"",U)}restoreHistory(c,_=!1){if("computed"===this.canceledNavigationResolution){const S=this.currentPageId-c.targetPageId;"popstate"!==c.source&&"eager"!==this.urlUpdateStrategy&&this.currentUrlTree!==this.currentNavigation?.finalUrl||0===S?this.currentUrlTree===this.currentNavigation?.finalUrl&&0===S&&(this.resetState(c),this.browserUrlTree=c.currentUrlTree,this.resetUrlToCurrentUrlTree()):this.location.historyGo(S)}else"replace"===this.canceledNavigationResolution&&(_&&this.resetState(c),this.resetUrlToCurrentUrlTree())}resetState(c){this.routerState=c.currentRouterState,this.currentUrlTree=c.currentUrlTree,this.rawUrlTree=this.urlHandlingStrategy.merge(this.currentUrlTree,c.rawUrl)}resetUrlToCurrentUrlTree(){this.location.replaceState(this.urlSerializer.serialize(this.rawUrlTree),"",this.generateNgRouterState(this.lastSuccessfulId,this.currentPageId))}cancelNavigationTransition(c,_){const S=new rt(c.id,this.serializeUrl(c.extractedUrl),_);this.triggerEvent(S),c.resolve(!1)}generateNgRouterState(c,_){return"computed"===this.canceledNavigationResolution?{navigationId:c,\u0275routerPageId:_}:{navigationId:c}}}return f.\u0275fac=function(c){v.$Z()},f.\u0275prov=v.Yz7({token:f,factory:f.\u0275fac}),f})();function Vo(f){return"imperative"!==f}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */let ei=(()=>{class f{constructor(c,_,S){this.router=c,this.route=_,this.locationStrategy=S,this.commands=null,this.href=null,this.onChanges=new ht.x,this.subscription=c.events.subscribe(U=>{U instanceof nt&&this.updateTargetUrlAndHref()})}set routerLink(c){this.commands=null!=c?Array.isArray(c)?c:[c]:null}ngOnChanges(c){this.updateTargetUrlAndHref(),this.onChanges.next(this)}ngOnDestroy(){this.subscription.unsubscribe()}onClick(c,_,S,U,oe){if(0!==c||_||S||U||oe||"string"==typeof this.target&&"_self"!=this.target||null===this.urlTree)return!0;const ye={skipLocationChange:(0,v.D6c)(this.skipLocationChange),replaceUrl:(0,v.D6c)(this.replaceUrl),state:this.state};return this.router.navigateByUrl(this.urlTree,ye),!1}updateTargetUrlAndHref(){this.href=null!==this.urlTree?this.locationStrategy.prepareExternalUrl(this.router.serializeUrl(this.urlTree)):null}get urlTree(){return null===this.commands?null:this.router.createUrlTree(this.commands,{relativeTo:void 0!==this.relativeTo?this.relativeTo:this.route,queryParams:this.queryParams,fragment:this.fragment,queryParamsHandling:this.queryParamsHandling,preserveFragment:(0,v.D6c)(this.preserveFragment)})}}return f.\u0275fac=function(c){return new(c||f)(v.Y36(Jn),v.Y36(un),v.Y36(s.S$))},f.\u0275dir=v.lG2({type:f,selectors:[["a","routerLink",""],["area","routerLink",""]],hostVars:2,hostBindings:function(c,_){1&c&&v.NdJ("click",function(U){return _.onClick(U.button,U.ctrlKey,U.shiftKey,U.altKey,U.metaKey)}),2&c&&v.uIk("target",_.target)("href",_.href,v.LSH)},inputs:{target:"target",queryParams:"queryParams",fragment:"fragment",queryParamsHandling:"queryParamsHandling",preserveFragment:"preserveFragment",skipLocationChange:"skipLocationChange",replaceUrl:"replaceUrl",state:"state",relativeTo:"relativeTo",routerLink:"routerLink"},features:[v.TTD]}),f})();
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
class $r{buildTitle(d){let c,_=d.root;for(;void 0!==_;)c=this.getResolvedTitleForRoute(_)??c,_=_.children.find(S=>S.outlet===x);return c}getResolvedTitleForRoute(d){return d.data[mn]}}let bo=(()=>{class f extends $r{constructor(c){super(),this.title=c}updateTitle(c){const _=this.buildTitle(c);void 0!==_&&this.title.setTitle(_)}}return f.\u0275fac=function(c){return new(c||f)(v.LFG(st.Dx))},f.\u0275prov=v.Yz7({token:f,factory:f.\u0275fac,providedIn:"root"}),f})();
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */class ao{}class lo{preload(d,c){return(0,te.of)(null)}}let Ho=(()=>{class f{constructor(c,_,S,U,oe){this.router=c,this.injector=S,this.preloadingStrategy=U,this.loader=oe}setUpPreloading(){this.subscription=this.router.events.pipe((0,ae.h)(c=>c instanceof nt),(0,jt.b)(()=>this.preload())).subscribe(()=>{})}preload(){return this.processRoutes(this.injector,this.router.config)}ngOnDestroy(){this.subscription&&this.subscription.unsubscribe()}processRoutes(c,_){const S=[];for(const U of _){U.providers&&!U._injector&&(U._injector=(0,v.MMx)(U.providers,c,`Route: ${U.path}`));const oe=U._injector??c,ye=U._loadedInjector??oe;U.loadChildren&&!U._loadedRoutes||U.loadComponent&&!U._loadedComponent?S.push(this.preloadConfig(oe,U)):(U.children||U._loadedRoutes)&&S.push(this.processRoutes(ye,U.children??U._loadedRoutes))}return(0,me.D)(S).pipe((0,Ce.J)())}preloadConfig(c,_){return this.preloadingStrategy.preload(_,()=>{let S;S=_.loadChildren&&void 0===_.canLoad?this.loader.loadChildren(c,_):(0,te.of)(null);const U=S.pipe((0,ft.z)(oe=>null===oe?(0,te.of)(void 0):(_._loadedRoutes=oe.routes,_._loadedInjector=oe.injector,this.processRoutes(oe.injector??c,oe.routes))));if(_.loadComponent&&!_._loadedComponent){const oe=this.loader.loadComponent(_);return(0,me.D)([U,oe]).pipe((0,Ce.J)())}return U})}}return f.\u0275fac=function(c){return new(c||f)(v.LFG(Jn),v.LFG(v.Sil),v.LFG(v.lqb),v.LFG(ao),v.LFG(so))},f.\u0275prov=v.Yz7({token:f,factory:f.\u0275fac}),f})(),Co=(()=>{class f{constructor(c,_,S={}){this.router=c,this.viewportScroller=_,this.options=S,this.lastId=0,this.lastSource="imperative",this.restoredId=0,this.store={},S.scrollPositionRestoration=S.scrollPositionRestoration||"disabled",S.anchorScrolling=S.anchorScrolling||"disabled"}init(){"disabled"!==this.options.scrollPositionRestoration&&this.viewportScroller.setHistoryScrollRestoration("manual"),this.routerEventsSubscription=this.createScrollEvents(),this.scrollEventsSubscription=this.consumeScrollEvents()}createScrollEvents(){return this.router.events.subscribe(c=>{c instanceof bt?(this.store[this.lastId]=this.viewportScroller.getScrollPosition(),this.lastSource=c.navigationTrigger,this.restoredId=c.restoredState?c.restoredState.navigationId:0):c instanceof nt&&(this.lastId=c.id,this.scheduleScrollEvent(c,this.router.parseUrl(c.urlAfterRedirects).fragment))})}consumeScrollEvents(){return this.router.events.subscribe(c=>{c instanceof T&&(c.position?"top"===this.options.scrollPositionRestoration?this.viewportScroller.scrollToPosition([0,0]):"enabled"===this.options.scrollPositionRestoration&&this.viewportScroller.scrollToPosition(c.position):c.anchor&&"enabled"===this.options.anchorScrolling?this.viewportScroller.scrollToAnchor(c.anchor):"disabled"!==this.options.scrollPositionRestoration&&this.viewportScroller.scrollToPosition([0,0]))})}scheduleScrollEvent(c,_){this.router.triggerEvent(new T(c,"popstate"===this.lastSource?this.store[this.restoredId]:null,_))}ngOnDestroy(){this.routerEventsSubscription&&this.routerEventsSubscription.unsubscribe(),this.scrollEventsSubscription&&this.scrollEventsSubscription.unsubscribe()}}return f.\u0275fac=function(c){v.$Z()},f.\u0275prov=v.Yz7({token:f,factory:f.\u0275fac}),f})();
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
const Wr=new v.OlP("ROUTER_CONFIGURATION"),Cs=new v.OlP("ROUTER_FORROOT_GUARD"),il=[s.Ye,{provide:Jt,useClass:Oe},{provide:Jn,useFactory:function jo(f,d,c,_,S,U,oe={},ye,lt,Tt,on){const Nt=new Jn(null,f,d,c,_,S,Qe(U));return Tt&&(Nt.urlHandlingStrategy=Tt),on&&(Nt.routeReuseStrategy=on),Nt.titleStrategy=lt??ye,function ol(f,d){f.errorHandler&&(d.errorHandler=f.errorHandler),f.malformedUriErrorHandler&&(d.malformedUriErrorHandler=f.malformedUriErrorHandler),f.onSameUrlNavigation&&(d.onSameUrlNavigation=f.onSameUrlNavigation),f.paramsInheritanceStrategy&&(d.paramsInheritanceStrategy=f.paramsInheritanceStrategy),f.relativeLinkResolution&&(d.relativeLinkResolution=f.relativeLinkResolution),f.urlUpdateStrategy&&(d.urlUpdateStrategy=f.urlUpdateStrategy),f.canceledNavigationResolution&&(d.canceledNavigationResolution=f.canceledNavigationResolution)}(oe,Nt),Nt},deps:[Jt,Vi,s.Ye,v.zs3,v.Sil,Ui,Wr,bo,[$r,new v.FiY],[class Bo{},new v.FiY],[class or{},new v.FiY]]},Vi,{provide:un,useFactory:function sa(f){return f.routerState.root},deps:[Jn]},Ho,lo,class nl{preload(d,c){return c().pipe((0,Ht.K)(()=>(0,te.of)(null)))}},{provide:Wr,useValue:{enableTracing:!1}},so];function yr(){return new v.PXZ("Router",Jn)}let rl=(()=>{class f{constructor(c,_){}static forRoot(c,_){return{ngModule:f,providers:[il,To(c),{provide:Cs,useFactory:ws,deps:[[Jn,new v.FiY,new v.tp0]]},{provide:Wr,useValue:_||{}},{provide:s.S$,useFactory:Es,deps:[s.lw,[new v.tBr(s.mr),new v.FiY],Wr]},{provide:Co,useFactory:Ao,deps:[Jn,s.EM,Wr]},{provide:ao,useExisting:_&&_.preloadingStrategy?_.preloadingStrategy:lo},{provide:v.PXZ,multi:!0,useFactory:yr},[Uo,{provide:v.ip1,multi:!0,useFactory:aa,deps:[Uo]},{provide:ca,useFactory:la,deps:[Uo]},{provide:v.tb,multi:!0,useExisting:ca}]]}}static forChild(c){return{ngModule:f,providers:[To(c)]}}}return f.\u0275fac=function(c){return new(c||f)(v.LFG(Cs,8),v.LFG(Jn,8))},f.\u0275mod=v.oAB({type:f}),f.\u0275inj=v.cJS({}),f})();function Ao(f,d,c){return c.scrollOffset&&d.setOffset(c.scrollOffset),new Co(f,d,c)}function Es(f,d,c={}){return c.useHash?new s.Do(f,d):new s.b0(f,d)}function ws(f){return"guarded"}function To(f){return[{provide:v.deG,multi:!0,useValue:f},{provide:Ui,multi:!0,useValue:f}]}let Uo=(()=>{class f{constructor(c){this.injector=c,this.initNavigation=!1,this.destroyed=!1,this.resultOfPreactivationDone=new ht.x}appInitializer(){return this.injector.get(s.V_,Promise.resolve(null)).then(()=>{if(this.destroyed)return Promise.resolve(!0);let _=null;const S=new Promise(ye=>_=ye),U=this.injector.get(Jn),oe=this.injector.get(Wr);return"disabled"===oe.initialNavigation?(U.setUpLocationChangeListener(),_(!0)):"enabledBlocking"===oe.initialNavigation?(U.hooks.afterPreactivation=()=>this.initNavigation?(0,te.of)(null):(this.initNavigation=!0,_(!0),this.resultOfPreactivationDone),U.initialNavigation()):_(!0),S})}bootstrapListener(c){const _=this.injector.get(Wr),S=this.injector.get(Ho),U=this.injector.get(Co),oe=this.injector.get(Jn),ye=this.injector.get(v.z2F);c===ye.components[0]&&(("enabledNonBlocking"===_.initialNavigation||void 0===_.initialNavigation)&&oe.initialNavigation(),S.setUpPreloading(),U.init(),oe.resetRootComponentType(ye.componentTypes[0]),this.resultOfPreactivationDone.next(null),this.resultOfPreactivationDone.complete())}ngOnDestroy(){this.destroyed=!0}}return f.\u0275fac=function(c){return new(c||f)(v.LFG(v.zs3))},f.\u0275prov=v.Yz7({token:f,factory:f.\u0275fac}),f})();function aa(f){return f.appInitializer.bind(f)}function la(f){return f.bootstrapListener.bind(f)}const ca=new v.OlP("Router Initializer")}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */}]);