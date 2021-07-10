import{p as s,a as e,o as a,c as t,b as r,d as i,t as l,e as o,w as n,F as u,r as c,f as p,T as d,g,h,i as m,v,j as f,k as y,l as _,m as b}from"./vendor.707688f7.js";function k(){let s=0,e=0;for(;0===s;)s=Math.random();for(;0===e;)e=Math.random();let a=Math.sqrt(-2*Math.log(s))*Math.cos(2*Math.PI*e);return a=a/10+.5,a>1||a<0?k():a}function w(s){return new Promise((e=>{setTimeout((()=>{e()}),s)}))}var x={props:{text:{type:String,default:"平林　彰史"},textTimeout:{type:Number,default:3200}},data:()=>({currentText:"",showPrompt:!1}),async mounted(){await w(this.textTimeout),this.showPrompt=!0,await w(600);for(var s=0;s<this.text.length;s++)this.currentText+=this.text[s],await w(100*k());this.showPrompt=!1}};const T=n();s("data-v-58088da2");const j={class:"wrapper"},I={class:"current"},P={key:0,class:"prompt"};e();const S=T(((s,e,n,u,c,p)=>(a(),t("div",j,[r("p",I,[i(l(c.currentText),1),c.showPrompt?(a(),t("span",P,"|")):o("",!0)])]))));x.render=S,x.__scopeId="data-v-58088da2";var C={name:"Works",components:{TypeWriterText:x},props:{imgurls:{type:Array,default:["./assets/hirabayashi_works_page-0006.jpg","./assets/hirabayashi_works_page-0007.jpg","./assets/hirabayashi_works_page-0009.jpg","./assets/hirabayashi_works_page-0012.jpg","./assets/hirabayashi_works_page-0013.jpg","./assets/hirabayashi_works_page-0014.jpg","./assets/hirabayashi_works_page-0001.jpg","./assets/hirabayashi_works_page-0002.jpg","./assets/hirabayashi_works_page-0003.jpg","./assets/hirabayashi_works_page-0004.jpg","./assets/hirabayashi_works_page-0005.jpg"]},msg:{type:String,required:!0}},data(){return{currentimgurl:"/src/assets/20191029chipsaw.jpg",counter:0,modalvisible:!1,isPrev:360/this.imgurls.length,carouselIdx:0,showImg:!1}},methods:{fadeIn(){this.showImg=!1,setTimeout((()=>{this.showImg=!0}),3e3)},showModal(s){this.currentimgurl=s,this.modalvisible=!0},hidemodal(){this.modalvisible=!1}},mounted(){var s=document.querySelector(".carouselImg"),e=s.querySelector("figure"),a=s.querySelector("nav"),t=e.childElementCount,r=2*Math.PI/t,i=0;a.addEventListener("click",(function(s){s.stopPropagation();var a=s.target;if("BUTTON"!=a.tagName.toUpperCase())return;a.classList.contains("next")?i++:i--;e.style.transform=`rotateY(${i*-r}rad)`}),!0)}};const M=n();s("data-v-15f3c8b8");const q={class:"carouselImg"},W=r("nav",null,[r("button",{class:"nav prev"}," ＜ "),r("button",{class:"nav next"}," ＞ ")],-1),A={class:"worksText"},N={class:"bigimg"},L=r("p",{class:"close-btn"},[r("a",{href:"#"},"✖")],-1);e();const O=M(((s,e,i,l,n,h)=>{const m=g("TypeWriterText");return a(),t(u,null,[r("div",q,[r("figure",null,[(a(!0),t(u,null,c(i.imgurls,(s=>(a(),t("img",{key:s,onClick:e=>h.showModal(s),src:s},null,8,["onClick","src"])))),128))]),W]),r("div",A,[r(m,{text:"作品を選択してください",textTimeout:2e4})]),r(d,{name:"fadeHoge"},{default:M((()=>[n.modalvisible?(a(),t("div",{key:0,class:"modal",onClick:e[1]||(e[1]=p(((...s)=>h.hidemodal&&h.hidemodal(...s)),["prevent"]))},[r("div",N,[r("img",{src:n.currentimgurl,alt:""},null,8,["src"])]),L])):o("",!0)])),_:1})],64)}));C.render=O,C.__scopeId="data-v-15f3c8b8";var U={name:"Profile",components:{TypeWriterText:x,Works:C},props:{imgProf:{type:String,default:"./assets/face.png"},rsmurls:{type:Array,default:["./assets/rirekisho2021.pdf"]},careerurls:{type:Array,default:["./assets/shokumukeirekisho2021.pdf"]},text:{type:String,default:"平林　彰史"},textTimeout:{type:Number,default:3200}},data:()=>({currentText:""})};const E=n();s("data-v-22be5dd9");const $={class:"face"},H={class:"profText"},B={class:"resume"};e();const F=E(((s,e,i,l,o,n)=>{const c=g("TypeWriterText");return a(),t(u,null,[r("div",$,[r("img",{src:i.imgProf,alt:"顔写真",width:"150px"},null,8,["src"])]),r("div",H,[r("p",null,[r(c,{text:"名前：平林　彰史",textTimeout:3200})]),r("p",null,[r(c,{text:"1983年6月24日、東京都の小平市に生まれる。",textTimeout:6400})]),r("p",null,[r(c,{text:"趣味はお菓子作り、ゲーム。",textTimeout:8400})]),r("p",null,[r(c,{text:"高校卒業後、ファッションデザイナーを目指すが挫折。しかしグラフィックの面白さに目覚め、現在に至る。",textTimeout:10400})]),r("div",B,[r("button",null,[r("a",{href:i.rsmurls,target:"”_blank”"},"履歴書",8,["href"])]),r("button",null,[r("a",{href:i.careerurls,target:"”_blank”"},"職務経歴書",8,["href"])])])])],64)}));U.render=F,U.__scopeId="data-v-22be5dd9";var V={name:"Portfolio",components:{TypeWriterText:x,Works:C,Profile:U},props:{imgurls:{type:Array,default:["./assets/hirabayashi_works_page-0006.jpg","./assets/hirabayashi_works_page-0007.jpg","./assets/hirabayashi_works_page-0009.jpg","./assets/hirabayashi_works_page-0012.jpg","./assets/hirabayashi_works_page-0013.jpg","./assets/hirabayashi_works_page-0014.jpg","./assets/hirabayashi_works_page-0001.jpg","./assets/hirabayashi_works_page-0002.jpg","./assets/hirabayashi_works_page-0003.jpg","./assets/hirabayashi_works_page-0004.jpg","./assets/hirabayashi_works_page-0005.jpg"]},msg:{type:String,required:!0},worksTimeout:{type:Number,default:15e3}},data(){return{currentimgurl:"/src/assets/20210426sale.jpg",counter:0,modalvisible:!1,isPrev:360/this.imgurls.length,carouselIdx:0,showImg:!1}},methods:{showModal(s){this.currentimgurl=s,this.modalvisible=!0},hidemodal(){this.modalvisible=!1}},mounted(){var s=document.querySelector(".carouselImg"),e=s.querySelector("figure"),a=s.querySelector("nav"),t=e.childElementCount,r=2*Math.PI/t,i=0;a.addEventListener("click",(function(s){s.stopPropagation();var a=s.target;if("BUTTON"!=a.tagName.toUpperCase())return;a.classList.contains("next")?i++:i--;e.style.transform=`rotateY(${i*-r}rad)`}),!0)}};const Y=n();s("data-v-1fd8b8f8");const R=r("div",{class:"shutter"},[r("div",{class:"startword"},[r("p",null,"POTFOLIO START")])],-1),z={class:"bgImg"},D=r("div",{class:"bgImg2"},null,-1),G={class:"container"},J={class:"img delayAppear"},K={class:"carouselImg"},Q=r("nav",null,[r("button",{class:"nav prev"}," ＜ "),r("button",{class:"nav next"}," ＞ ")],-1),X={class:"worksText"},Z={class:"prof delayUp"},ss=r("div",{class:"approved"}," ※掲載許諾済 ",-1),es={class:"bigimg"},as=r("p",{class:"close-btn"},[r("a",{href:"#"},"✖")],-1);e();const ts=Y(((s,e,i,l,n,h)=>{const m=g("TypeWriterText"),v=g("Profile");return a(),t(u,null,[R,r("div",z,[D,r("section",G,[r("main",null,[r("div",J,[r("div",K,[r("figure",null,[(a(!0),t(u,null,c(i.imgurls,(s=>(a(),t("img",{key:s,onClick:e=>h.showModal(s),src:s},null,8,["onClick","src"])))),128))]),Q]),r("div",X,[r(m,{text:"作品を選択してください",textTimeout:2e4})])]),r("div",Z,[r(v)]),ss])]),r(d,{name:"fadeHoge"},{default:Y((()=>[n.modalvisible?(a(),t("div",{key:0,class:"modal",onClick:e[1]||(e[1]=p(((...s)=>h.hidemodal&&h.hidemodal(...s)),["prevent"]))},[r("div",es,[r("img",{src:n.currentimgurl,alt:""},null,8,["src"])]),as])):o("",!0)])),_:1})])],64)}));V.render=ts,V.__scopeId="data-v-1fd8b8f8";var rs={setup:(s,e)=>({next:()=>{e.emit("next")},prev:()=>{e.emit("prev")}})};const is={class:"carousel"};rs.render=function(s,e,i,l,o,n){return a(),t("div",is,[h(s.$slots,"default"),r("button",{onClick:e[1]||(e[1]=(...s)=>l.prev&&l.prev(...s)),class:"carousel__prev"},"＜"),r("button",{onClick:e[2]||(e[2]=(...s)=>l.next&&l.next(...s)),class:"carousel__next"},"＞")])};var ls={props:["visibleSlide","index"]};const os={class:"carousel-slide"};ls.render=function(s,e,r,i,l,o){return m((a(),t("div",os,[h(s.$slots,"default")],512)),[[v,r.visibleSlide===r.index]])};var ns=f({name:"App",components:{Portfolio:V,Carousel:rs,CarouselSlide:ls},setup(){const s=y(["/src/assets/20191029chipsaw.jpg","/src/assets/20200708sale.jpg","/src/assets/20210315sale.jpg","/src/assets/20210318sale.jpg","/src/assets/20210426sale.jpg","/src/assets/0001_page-0001.jpg"]),e=y(0),a=_((()=>s.value.length));return{slides:s,visibleSlide:e,next:()=>{e.value>=a.value-1?e.value=0:e.value++},prev:()=>{e.value<=0?e.value=a.value-1:e.value--}}}});ns.render=function(s,e,r,i,l,o){const n=g("Portfolio");return a(),t(n,{msg:"Hello Vue 3 + TypeScript + Vite"})},b(ns).mount("#app");
