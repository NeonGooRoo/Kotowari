import{V as l,ap as vs,aq as qs,N as ds,ar as u,a3 as bs,as as Ns,at as Ls,ah as a,au as $s,O as x,U as c,$ as r,av as fs,aw as ks,ax as Ys,ay as ws,az as Ws,aA as Os,aB as Ss,aC as Zs,aD as As,aE as zs,aF as Ds,aG as Fs,aH as Us,aI as Xs,aJ as js,aK as Js,aL as Ts,aM as Cs,aN as Ks,aO as Vs,aP as Is,aQ as Qs,aR as Ps,aS as ys,aT as Ht,S as Lt,aU as Bs,aV as Rs,aW as Gs,aX as Es,X as _s,aY as Ms,Z as ta,L as sa,aj as Hs,aZ as aa,a_ as ea,a$ as ia,b0 as na,b1 as ca,b2 as oa,b3 as ra,b4 as ha,b5 as ma,b6 as la,b7 as pa,b8 as ga,b9 as ua,ba as xa,bb as da,ao as s}from"./app-D0I1GGIP.js";import{L as ba,x as Na}from"./vidstack-rsZGrNIW-BiUwPbUx.js";import{MediaPosterElement as Ha}from"./vidstack-fhDp_Jh9-BjnSBQsN.js";class La extends l{onAttach(t){t.style.pointerEvents||vs(t,"pointer-events","auto")}}class fa extends l{constructor(){super(),new qs}onConnect(t){ds(u(()=>{if(!this.connectScope)return;this.xb();const e=bs(Ns);ds(()=>{const i=this.Bd();i&&e._e(i)})}))}xb(){const t=this.Bd(),e=bs(Ns);t&&e.Ze(t)}Bd(){const t=this.el.firstElementChild;return(t==null?void 0:t.localName)==="button"||(t==null?void 0:t.getAttribute("role"))==="button"?t:this.el}}class Ta extends Ls{}const Ca=ys('<img loading="eager" decoding="async" aria-hidden="true">'),N=class N extends a(HTMLElement,$s){constructor(){super(...arguments),this.Wm=this.nn()}onSetup(){this.a=x(),this.$state.img.set(this.Wm)}onConnect(){const{src:t,crossOrigin:e}=this.$state;this.Wm.parentNode!==this&&this.prepend(this.Wm),c(()=>{r(this.Wm,"src",t()),r(this.Wm,"crossorigin",e())})}nn(){return fs(Ca)}};N.tagName="media-thumbnail",N.attrs={crossOrigin:"crossorigin"};let b=N;const ft=class ft extends a(HTMLElement,ks){onConnect(){c(()=>{this.textContent=this.$state.timeText()})}};ft.tagName="media-time";let T=ft;const Tt=class Tt extends a(HTMLElement,Ys){};Tt.tagName="media-airplay-button";let C=Tt;const Ct=class Ct extends a(HTMLElement,ws){};Ct.tagName="media-caption-button";let y=Ct;const yt=class yt extends a(HTMLElement,Ws){};yt.tagName="media-fullscreen-button";let v=yt;const vt=class vt extends a(HTMLElement,Os){};vt.tagName="media-live-button";let q=vt;const qt=class qt extends a(HTMLElement,Ss){};qt.tagName="media-mute-button";let $=qt;const $t=class $t extends a(HTMLElement,Zs){};$t.tagName="media-pip-button";let k=$t;const kt=class kt extends a(HTMLElement,As){};kt.tagName="media-play-button";let Y=kt;const Yt=class Yt extends a(HTMLElement,zs){};Yt.tagName="media-seek-button";let w=Yt;function g(h,t){u(()=>{if(!h.connectScope)return;const e=h.querySelector("template");e&&c(()=>{const i=h.getOptions();Ht(e,i.length,(n,m)=>{const{label:o,value:d}=i[m],p=n.querySelector('[data-part="label"]');n.setAttribute("value",d),p&&(Lt(o)?p.textContent=o:c(()=>{p.textContent=o()})),t==null||t(n,i[m],m)})})})}const wt=class wt extends a(HTMLElement,Ds){onConnect(){g(this)}};wt.tagName="media-audio-radio-group";let W=wt;const Wt=class Wt extends a(HTMLElement,Fs){onConnect(){g(this)}};Wt.tagName="media-captions-radio-group";let O=Wt;const Ot=class Ot extends a(HTMLElement,Us){};Ot.tagName="media-menu";let S=Ot;const St=class St extends a(HTMLElement,Ls){};St.tagName="media-menu-button";let Z=St;const Zt=class Zt extends a(HTMLElement,Ta){};Zt.tagName="media-menu-item";let A=Zt;const At=class At extends a(HTMLElement,Xs){};At.tagName="media-menu-items";let z=At;const zt=class zt extends a(HTMLElement,js){onConnect(){g(this)}};zt.tagName="media-speed-radio-group";let D=zt;const Dt=class Dt extends a(HTMLElement,Js){onConnect(){g(this,(t,e)=>{const i=e.bitrate,n=t.querySelector('[data-part="bitrate"]');i&&n&&c(()=>{n.textContent=i()||""})})}};Dt.tagName="media-quality-radio-group";let F=Dt;const Ft=class Ft extends b{onSetup(){super.onSetup(),this.ia=Ts(Cs.state)}onConnect(){super.onConnect(),c(this.Yh.bind(this))}Yh(){const{duration:t,clipStartTime:e}=this.a.$state;this.time=e()+this.ia.pointerRate()*t()}};Ft.tagName="media-slider-thumbnail";let U=Ft;const H=class H extends a(HTMLElement,Ks){onConnect(){c(()=>{this.textContent=this.getValueText()})}};H.tagName="media-slider-value",H.attrs={padMinutes:{converter:Vs}};let X=H;const Ut=class Ut extends a(HTMLElement,Is){};Ut.tagName="media-time-slider";let j=Ut;const Xt=class Xt extends a(HTMLElement,Qs){};Xt.tagName="media-slider-preview";let J=Xt;const jt=class jt extends a(HTMLElement,Ps){};jt.tagName="media-volume-slider";let K=jt;const Jt=class Jt extends a(HTMLElement,Bs){};Jt.tagName="media-captions";let V=Jt;const Kt=class Kt extends a(HTMLElement,Rs){};Kt.tagName="media-gesture";let I=Kt;const Vt=class Vt extends a(HTMLElement,Gs){};Vt.tagName="media-announcer";let Q=Vt;const It=class It extends a(HTMLElement,Es){};It.tagName="media-controls";let P=It;const Qt=class Qt extends a(HTMLElement,La){};Qt.tagName="media-controls-group";let B=Qt;class ya extends l{}const Pt=class Pt extends a(HTMLElement,ya){onSetup(){this.a=x()}onConnect(){c(this.td.bind(this))}td(){const{title:t}=this.a.$state;this.textContent=t()}};Pt.tagName="media-title";let R=Pt;const Bt=class Bt extends l{};Bt.props={defaultText:""};let G=Bt;const Rt=class Rt extends a(HTMLElement,G){onSetup(){this.a=x(),this.bn=_s("")}onConnect(){const t=this.a.textTracks;Ms(t,"chapters",this.bn.set),c(this.pn.bind(this))}pn(){const{defaultText:t}=this.$props;this.textContent=this.bn()||t()}};Rt.tagName="media-chapter-title";let E=Rt;const Gt=class Gt extends l{onConnect(t){u(()=>{if(!this.connectScope)return;const e=t.querySelector("svg"),i=e.firstElementChild,n=i.nextElementSibling;c(this.Ha.bind(this,e,i,n))})}Ha(t,e,i){const{size:n,trackWidth:m,fillPercent:o}=this.$props;r(t,"width",n()),r(t,"height",n()),r(e,"stroke-width",m()),r(i,"stroke-width",m()),r(i,"stroke-dashoffset",100-o())}};Gt.props={size:96,trackWidth:8,fillPercent:50};let _=Gt;const Et=class Et extends a(ba,_){render(){return Na`
      <svg fill="none" viewBox="0 0 120 120" aria-hidden="true" data-part="root">
        <circle cx="60" cy="60" r="54" stroke="currentColor" data-part="track"></circle>
        <circle
          cx="60"
          cy="60"
          r="54"
          stroke="currentColor"
          pathLength="100"
          stroke-dasharray="100"
          data-part="track-fill"
        ></circle>
      </svg>
    `}};Et.tagName="media-spinner";let M=Et;const _t=class _t extends l{};_t.props={when:!1};let tt=_t;const Mt=class Mt extends a(HTMLElement,tt){onSetup(){this.a=x()}onConnect(){c(this.qn.bind(this))}qn(){const t=this.firstElementChild,e=(t==null?void 0:t.localName)==="template",i=this.$props.when();if(!(ta(i)?i:sa(()=>i(this.a.player.state))())){e?(this.textContent="",this.appendChild(t)):Hs(t)&&(t.style.display="none");return}e?this.append(t.content.cloneNode(!0)):Hs(t)&&(t.style.display="")}};Mt.tagName="media-layout";let st=Mt;const ts=class ts extends a(HTMLElement,aa){};ts.tagName="media-google-cast-button";let at=ts;const ss=class ss extends a(HTMLElement,ea){};ss.tagName="media-toggle-button";let et=ss;const as=class as extends a(HTMLElement,ia){};as.tagName="media-tooltip";let it=as;const es=class es extends a(HTMLElement,fa){onConnect(){this.style.display="contents"}};es.tagName="media-tooltip-trigger";let nt=es;const is=class is extends a(HTMLElement,na){};is.tagName="media-tooltip-content";let ct=is;const L=class L extends a(HTMLElement,ca){};L.tagName="media-menu-portal",L.attrs={disabled:{converter(t){return Lt(t)?t:t!==null}}};let ot=L;const ns=class ns extends a(HTMLElement,oa){onConnect(){g(this,(t,e)=>{const{cue:i,startTime:n,duration:m}=e,o=t.querySelector(".vds-thumbnail,media-thumbnail"),d=t.querySelector('[data-part="start-time"]'),p=t.querySelector('[data-part="duration"]');d&&(d.textContent=n),p&&(p.textContent=m),o&&(o.setAttribute("time",i.startTime+""),c(()=>{const f=this.$props.thumbnails();"src"in o?o.src=f:Lt(f)&&o.setAttribute("src",f)}))})}};ns.tagName="media-chapters-radio-group";let rt=ns;const cs=class cs extends a(HTMLElement,ra){onConnect(){g(this)}};cs.tagName="media-audio-gain-radio-group";let ht=cs;const os=class os extends a(HTMLElement,ha){};os.tagName="media-radio";let mt=os;const rs=class rs extends a(HTMLElement,ma){};rs.tagName="media-radio-group";let lt=rs;const hs=class hs extends a(HTMLElement,Cs){};hs.tagName="media-slider";let pt=hs;const va=ys('<video muted playsinline preload="none" style="max-width: unset;"></video>'),ms=class ms extends a(HTMLElement,la){constructor(){super(...arguments),this.m=this.an()}onSetup(){this.a=x(),this.$state.video.set(this.m)}onConnect(){const{canLoad:t}=this.a.$state,{src:e,crossOrigin:i}=this.$state;this.m.parentNode!==this&&this.prepend(this.m),c(()=>{r(this.m,"crossorigin",i()),r(this.m,"preload",t()?"auto":"none"),r(this.m,"src",e())})}an(){return fs(va)}};ms.tagName="media-slider-video";let gt=ms;const ls=class ls extends a(HTMLElement,pa){};ls.tagName="media-audio-gain-slider";let ut=ls;const ps=class ps extends a(HTMLElement,ga){};ps.tagName="media-speed-slider";let xt=ps;const gs=class gs extends a(HTMLElement,ua){};gs.tagName="media-quality-slider";let dt=gs;const us=class us extends a(HTMLElement,xa){constructor(){super(...arguments),this.Ym=null}onConnect(){u(()=>{if(!this.connectScope)return;const t=this.querySelector("template");t&&(this.Ym=t,c(this.un.bind(this)))})}un(){if(!this.Ym)return;const t=Ht(this.Ym,this.cues.length||1);this.setRefs(t)}};us.tagName="media-slider-chapters";let bt=us;class qa extends l{}const xs=class xs extends a(HTMLElement,qa){constructor(){super(...arguments),this.Ym=null}onConnect(t){u(()=>{this.connectScope&&(this.Ym=t.querySelector("template"),this.Ym&&c(this.Zm.bind(this)))})}Zm(){if(!this.Ym)return;const{min:t,max:e,step:i}=Ts(da),n=(e()-t())/i();Ht(this.Ym,Math.floor(n)+1)}};xs.tagName="media-slider-steps";let Nt=xs;s(st);s(P);s(B);s(Ha);s(Q);s(it);s(nt);s(ct);s(Y);s($);s(y);s(v);s(k);s(w);s(C);s(at);s(et);s(pt);s(ut);s(K);s(j);s(xt);s(dt);s(bt);s(Nt);s(J);s(X);s(U);s(gt);s(S);s(Z);s(ot);s(z);s(A);s(W);s(O);s(D);s(ht);s(F);s(rt);s(lt);s(mt);s(I);s(b);s(V);s(q);s(T);s(R);s(E);s(M);