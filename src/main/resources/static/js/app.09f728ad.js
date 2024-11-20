(function(){"use strict";var e={8202:function(e,t,n){var r=n(5130),l=n(6768);function o(e,t,n,r,o,a){const s=(0,l.g2)("SearchBar"),u=(0,l.g2)("FilteringWord"),i=(0,l.g2)("ChatBot");return(0,l.uX)(),(0,l.CE)(l.FK,null,[(0,l.bF)(s),(0,l.bF)(u),(0,l.bF)(i)],64)}var a=n(4232);const s={key:0,border:"1"},u=["onClick"];function i(e,t,n,o,i,c){return(0,l.uX)(),(0,l.CE)("div",null,[(0,l.bo)((0,l.Lk)("input",{type:"text","onUpdate:modelValue":t[0]||(t[0]=e=>i.query=e),onInput:t[1]||(t[1]=(...e)=>c.fetchSuggestions&&c.fetchSuggestions(...e)),placeholder:"검색어 입력"},null,544),[[r.Jo,i.query]]),i.suggestions.length?((0,l.uX)(),(0,l.CE)("table",s,[t[2]||(t[2]=(0,l.Lk)("thead",null,[(0,l.Lk)("tr",null,[(0,l.Lk)("th",null,"ID"),(0,l.Lk)("th",null,"제안 이름")])],-1)),(0,l.Lk)("tbody",null,[((0,l.uX)(!0),(0,l.CE)(l.FK,null,(0,l.pI)(i.suggestions,(e=>((0,l.uX)(),(0,l.CE)("tr",{key:e.id,onClick:t=>c.selectSuggestion(e)},[(0,l.Lk)("td",null,(0,a.v_)(e.id),1),(0,l.Lk)("td",null,(0,a.v_)(e.locationName),1)],8,u)))),128))])])):(0,l.Q3)("",!0)])}var c=n(4373),p={data(){return{query:"",suggestions:[]}},methods:{fetchSuggestions(){this.query.length>1?c.A.get(`/search/suggestions?keyword=${this.query}`).then((e=>{this.suggestions=e.data})).catch((e=>{console.error("Error fetching suggestions:",e)})):this.suggestions=[]},selectSuggestion(e){this.query=e.locationName,this.suggestions=[]}}},d=n(1241);const h=(0,d.A)(p,[["render",i],["__scopeId","data-v-4fb3ca62"]]);var f=h;const v=["value"],g=["value"],k=["value"];function b(e,t,n,o,s,u){return(0,l.uX)(),(0,l.CE)("div",null,[t[13]||(t[13]=(0,l.Lk)("h2",null,"아파트 필터링",-1)),(0,l.Lk)("div",null,[t[8]||(t[8]=(0,l.Lk)("label",{for:"area"},"평수:",-1)),(0,l.bo)((0,l.Lk)("select",{"onUpdate:modelValue":t[0]||(t[0]=e=>s.selectedArea=e),onChange:t[1]||(t[1]=(...e)=>u.applyFilter&&u.applyFilter(...e))},[t[7]||(t[7]=(0,l.Lk)("option",{value:""},"선택하세요",-1)),((0,l.uX)(!0),(0,l.CE)(l.FK,null,(0,l.pI)(s.areaOptions,(e=>((0,l.uX)(),(0,l.CE)("option",{key:e,value:e},(0,a.v_)(e)+" 평",9,v)))),128))],544),[[r.u1,s.selectedArea]])]),(0,l.Lk)("div",null,[t[10]||(t[10]=(0,l.Lk)("label",{for:"price"},"가격:",-1)),(0,l.bo)((0,l.Lk)("select",{"onUpdate:modelValue":t[2]||(t[2]=e=>s.selectedPrice=e),onChange:t[3]||(t[3]=(...e)=>u.applyFilter&&u.applyFilter(...e))},[t[9]||(t[9]=(0,l.Lk)("option",{value:""},"선택하세요",-1)),((0,l.uX)(!0),(0,l.CE)(l.FK,null,(0,l.pI)(s.priceOptions,(e=>((0,l.uX)(),(0,l.CE)("option",{key:e.value,value:e.value},(0,a.v_)(e.label),9,g)))),128))],544),[[r.u1,s.selectedPrice]])]),(0,l.Lk)("div",null,[t[12]||(t[12]=(0,l.Lk)("label",{for:"type"},"매물 종류:",-1)),(0,l.bo)((0,l.Lk)("select",{"onUpdate:modelValue":t[4]||(t[4]=e=>s.selectedType=e),onChange:t[5]||(t[5]=(...e)=>u.applyFilter&&u.applyFilter(...e))},[t[11]||(t[11]=(0,l.Lk)("option",{value:""},"선택하세요",-1)),((0,l.uX)(!0),(0,l.CE)(l.FK,null,(0,l.pI)(s.typeOptions,(e=>((0,l.uX)(),(0,l.CE)("option",{key:e,value:e},(0,a.v_)(e),9,k)))),128))],544),[[r.u1,s.selectedType]])]),(0,l.Lk)("button",{onClick:t[6]||(t[6]=(...e)=>u.fetchApartments&&u.fetchApartments(...e))},"필터링 적용"),t[14]||(t[14]=(0,l.Lk)("h3",null,"결과",-1)),(0,l.Lk)("ul",null,[((0,l.uX)(!0),(0,l.CE)(l.FK,null,(0,l.pI)(s.apartments,(e=>((0,l.uX)(),(0,l.CE)("li",{key:e.id},(0,a.v_)(e.locationName),1)))),128))])])}n(8992),n(4520),n(1454);var y={data(){return{selectedArea:"",selectedPrice:"",selectedType:"",apartments:[],areaOptions:[10,20,30,40,50,60],priceOptions:[{value:"5000",label:"5천만원 이하"},{value:"10000",label:"1억원 이하"},{value:"20000",label:"2억원 이하"},{value:"30000",label:"3억원 이하"},{value:"50000",label:"5억원 이하"},{value:"100000",label:"10억원 이하"},{value:"100001",label:"10억원 이상"}],typeOptions:["월세","전세","매매"]}},methods:{applyFilter(){this.fetchApartments()},fetchApartments(){const e={area:this.selectedArea||null,price:this.selectedPrice||null,type:this.selectedType||null},t=Object.entries(e).filter((([e,t])=>null!==e&&null!==t)).map((([e,t])=>`${e}=${t}`)).join("&");fetch(`/api/apartments?${t}`).then((e=>{if(!e.ok)throw new Error("Network response was not ok");return e.json()})).then((e=>{this.apartments=e})).catch((e=>{console.error("Error fetching apartments:",e)}))}}};const m=(0,d.A)(y,[["render",b],["__scopeId","data-v-4c6ae63c"]]);var L=m;const C={class:"chatbot"},E={key:0};function O(e,t,n,o,s,u){return(0,l.uX)(),(0,l.CE)("div",C,[t[3]||(t[3]=(0,l.Lk)("h2",null,"챗봇",-1)),(0,l.bo)((0,l.Lk)("textarea",{"onUpdate:modelValue":t[0]||(t[0]=e=>s.userMessage=e),placeholder:"챗봇과 대화하기...",rows:"3"},null,512),[[r.Jo,s.userMessage]]),(0,l.Lk)("button",{onClick:t[1]||(t[1]=(...e)=>u.sendMessage&&u.sendMessage(...e))},"전송"),s.chatResponse?((0,l.uX)(),(0,l.CE)("div",E,[t[2]||(t[2]=(0,l.Lk)("h3",null,"챗봇 응답:",-1)),(0,l.Lk)("p",null,(0,a.v_)(s.chatResponse),1)])):(0,l.Q3)("",!0)])}var F={data(){return{userMessage:"",chatResponse:null}},methods:{sendMessage(){""!==this.userMessage.trim()&&c.A.post("/api/chat",this.userMessage).then((e=>{this.chatResponse=e.data,this.userMessage=""})).catch((e=>{console.error("Error sending message:",e),this.chatResponse="챗봇과의 연결에 문제가 발생했습니다. 다시 시도해주세요."}))}}};const _=(0,d.A)(F,[["render",O],["__scopeId","data-v-15f0f397"]]);var X=_,A={name:"App",components:{SearchBar:f,FilteringWord:L,ChatBot:X}};const w=(0,d.A)(A,[["render",o]]);var M=w;const S=(0,r.Ef)(M);S.mount("#app")}},t={};function n(r){var l=t[r];if(void 0!==l)return l.exports;var o=t[r]={exports:{}};return e[r].call(o.exports,o,o.exports,n),o.exports}n.m=e,function(){var e=[];n.O=function(t,r,l,o){if(!r){var a=1/0;for(c=0;c<e.length;c++){r=e[c][0],l=e[c][1],o=e[c][2];for(var s=!0,u=0;u<r.length;u++)(!1&o||a>=o)&&Object.keys(n.O).every((function(e){return n.O[e](r[u])}))?r.splice(u--,1):(s=!1,o<a&&(a=o));if(s){e.splice(c--,1);var i=l();void 0!==i&&(t=i)}}return t}o=o||0;for(var c=e.length;c>0&&e[c-1][2]>o;c--)e[c]=e[c-1];e[c]=[r,l,o]}}(),function(){n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,{a:t}),t}}(),function(){n.d=function(e,t){for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){var e={524:0};n.O.j=function(t){return 0===e[t]};var t=function(t,r){var l,o,a=r[0],s=r[1],u=r[2],i=0;if(a.some((function(t){return 0!==e[t]}))){for(l in s)n.o(s,l)&&(n.m[l]=s[l]);if(u)var c=u(n)}for(t&&t(r);i<a.length;i++)o=a[i],n.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return n.O(c)},r=self["webpackChunkfrontend"]=self["webpackChunkfrontend"]||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))}();var r=n.O(void 0,[504],(function(){return n(8202)}));r=n.O(r)})();
//# sourceMappingURL=app.09f728ad.js.map