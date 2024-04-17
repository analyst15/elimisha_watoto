import{_ as x,c as f,b as s,n as v,j as m,v as c,a as y,o as b}from"./index-m4b19Rsr.js";const r={_origin:"https://api.emailjs.com"},_=(a,e="https://api.emailjs.com")=>{r._userID=a,r._origin=e},u=(a,e,n)=>{if(!a)throw"The user ID is required. Visit https://dashboard.emailjs.com/admin/integration";if(!e)throw"The service ID is required. Visit https://dashboard.emailjs.com/admin";if(!n)throw"The template ID is required. Visit https://dashboard.emailjs.com/admin/templates";return!0};class g{constructor(e){this.status=e.status,this.text=e.responseText}}const h=(a,e,n={})=>new Promise((l,o)=>{const i=new XMLHttpRequest;i.addEventListener("load",({target:t})=>{const d=new g(t);d.status===200||d.text==="OK"?l(d):o(d)}),i.addEventListener("error",({target:t})=>{o(new g(t))}),i.open("POST",r._origin+a,!0),Object.keys(n).forEach(t=>{i.setRequestHeader(t,n[t])}),i.send(e)}),w=(a,e,n,l)=>{const o=l||r._userID;return u(o,a,e),h("/api/v1.0/email/send",JSON.stringify({lib_version:"3.2.0",user_id:o,service_id:a,template_id:e,template_params:n}),{"Content-type":"application/json"})},k=a=>{let e;if(typeof a=="string"?e=document.querySelector(a):e=a,!e||e.nodeName!=="FORM")throw"The 3rd parameter is expected to be the HTML form element or the style selector of form";return e},M=(a,e,n,l)=>{const o=l||r._userID,i=k(n);u(o,a,e);const t=new FormData(i);return t.append("lib_version","3.2.0"),t.append("service_id",a),t.append("template_id",e),t.append("user_id",o),h("/api/v1.0/email/send-form",t)},p={init:_,send:w,sendForm:M},N={setup(){return{}},data(){return{apiKey:"-gKUnLo8hfE7gQqNq",fName:"",lName:"",uEmail:"",uMessage:""}},mounted(){p.init(this.apiKey)},methods:{sendInfo(){var a={to_email:"support@elimishawatoto.org",to_name:"Wade",from_name:"Elimisha Watoto No-Reply",subject:"Contact Form",message:"Contact Details"+this.fName+" "+this.lName+`
 Email Address: `+this.uEmail+`
`+this.uMessage};p.send("service_94yg6eb","template_1s6dr3n",a).then(e=>{console.log("SUCCESS!",e.status,e.text),alert("Your Message has been sent successfully"),this.clearForm()},e=>{console.log("FAILED...",e)})},clearForm(){this.fName="",this.lName="",this.uEmail="",this.uMessage=""}}},E={class:"py-9"},S={class:"relative isolate bg-white"},F={class:"mx-auto grid max-w-7xl grid-cols-1 lg:grid-cols-2"},V=y('<div class="relative px-6 pb-20 pt-24 sm:pt-32 lg:static lg:px-8 lg:py-32"><div class="mx-auto max-w-xl lg:mx-0 lg:max-w-lg"><div class="absolute inset-y-0 left-0 -z-10 w-full overflow-hidden bg-gray-100 ring-1 ring-gray-900/10 lg:w-1/2"></div><h2 class="text-3xl text-center font-bold tracking-tight text-emerald-600"> Contact Us </h2><dl class="mt-10 space-y-4 text-base leading-7 text-gray-600"><span class="text-3xl font-bold text-emerald-600">Get In Touch</span><div class="flex gap-x-4"><dt class="flex-none"><span class="sr-only">Email</span><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" class="h-7 w-6 text-gray-400"><path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"></path></svg></dt><dd><a class="hover:text-gray-900" href="mailto:contact@yourcompany.com"> info@elimishawatoto.org</a></dd></div><div class="flex gap-x-4"><dt class="flex-none"><span class="sr-only">Address</span><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" class="h-7 w-6 text-gray-400"><path stroke-linecap="round" stroke-linejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008z"></path></svg></dt><dd> 3rd Floor Woodvale Place, Woodvale Grove, Westlands, Nairobi </dd></div></dl><dl class="mt-10 space-y-4 text-base leading-7 text-gray-600"><span class="text-3xl font-bold text-emerald-600">Opening Hours</span><div class="flex gap-x-4"><dt class="flex-none"><span class="sr-only">Email</span></dt><dd><p class="hover:text-gray-900"> Monday - Friday 8:00am - 5:00pm </p><p class="hover:text-gray-900">Saturdays 8:30am - 5:00pm</p><p class="hover:text-gray-900"> Closed on Sundays and Public Holidays </p></dd></div></dl></div></div>',1),j={class:"mx-auto max-w-xl lg:mr-0 lg:max-w-lg"},D={class:"grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2"},C=s("label",{for:"first-name",class:"block text-sm font-semibold leading-6 text-gray-900"},"First name",-1),T={class:"mt-2.5"},I=s("label",{for:"last-name",class:"block text-sm font-semibold leading-6 text-gray-900"},"Last name",-1),L={class:"mt-2.5"},q={class:"sm:col-span-2"},H=s("label",{for:"email",class:"block text-sm font-semibold leading-6 text-gray-900"},"Email",-1),P={class:"mt-2.5"},U={class:"sm:col-span-2"},O=s("label",{for:"message",class:"block text-sm font-semibold leading-6 text-gray-900"},"Message",-1),A={class:"mt-2.5"},B=s("div",{class:"mt-8 flex justify-end"},[s("button",{type:"submit",class:"w-max rounded-2xl border-2 border-[#DA630D] bg-[#e07d2f] px-5 py-1.5 text-sm font-semibold text-white transition-colors duration-150 ease-in-out hover:border-orange-400 hover:bg-orange-400"}," Send message ")],-1);function W(a,e,n,l,o,i){return b(),f("div",E,[s("div",S,[s("div",F,[V,s("form",{onSubmit:e[4]||(e[4]=v((...t)=>i.sendInfo&&i.sendInfo(...t),["prevent"])),class:"px-6 pb-24 pt-20 sm:pb-32 lg:px-8 lg:py-32"},[s("div",j,[s("div",D,[s("div",null,[C,s("div",T,[m(s("input",{type:"text",id:"first-name",autocomplete:"given-name",class:"block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6",name:"firstName","onUpdate:modelValue":e[0]||(e[0]=t=>o.fName=t)},null,512),[[c,o.fName]])])]),s("div",null,[I,s("div",L,[m(s("input",{type:"text",id:"last-name",autocomplete:"family-name",class:"block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6",name:"lastName","onUpdate:modelValue":e[1]||(e[1]=t=>o.lName=t)},null,512),[[c,o.lName]])])]),s("div",q,[H,s("div",P,[m(s("input",{type:"email",id:"email",autocomplete:"email",class:"block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6",name:"email","onUpdate:modelValue":e[2]||(e[2]=t=>o.uEmail=t)},null,512),[[c,o.uEmail]])])]),s("div",U,[O,s("div",A,[m(s("textarea",{id:"message",rows:"4",class:"block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6",name:"message","onUpdate:modelValue":e[3]||(e[3]=t=>o.uMessage=t)},null,512),[[c,o.uMessage]])])])]),B])],32)])])])}const K=x(N,[["render",W]]);export{K as default};
