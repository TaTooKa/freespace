/*! For license information please see component---src-pages-character-traits-js-e9ad5adcbe68954029f2.js.LICENSE.txt */
(self.webpackChunkgatsby_starter_rocketdocs=self.webpackChunkgatsby_starter_rocketdocs||[]).push([[674],{80092:function(t,e,a){"use strict";a.r(e),a.d(e,{default:function(){return q}});var n=a(15861),r=a(4942),o=a(64687),s=a.n(o),i=a(67294),l=a(59911),c=a(67940),p=a(23431),u=function(t){var e=t.type+t.name,a=t.inputs[e],n=encodeURIComponent(t.title).replace("%20","-").toLowerCase(),r=(!0===a?"trait active":"trait inactive")+" "+t.type;return(0,p.tZ)("div",{class:r,id:n},(0,p.tZ)("input",{id:e,type:"checkbox",name:e,value:a,onChange:t.handleChange,defaultChecked:a}),(0,p.tZ)("label",{for:e}," ",(0,p.tZ)("span",{class:"trait-name"},t.title),": ",t.children),(0,p.tZ)("img",{src:t.art,class:"art"}))},h=a.p+"static/blademaster-0ba5c104c500527ba33a4e6648ef3b09.jpg",f=a.p+"static/bountyhunter-c005a83153dff6329ed631abe06e349b.jpg",g=a.p+"static/brawler-6c5066ccf8f32784567d72cd848cfad4.jpg",d=a.p+"static/diplomat-ca439e6b68bb157287941a28368189e8.jpg",m=a.p+"static/driver-aa24b19cafee6c059b04dc6aeeeb4bb6.jpg",y=a.p+"static/face-fd472d3fa61da2be5312570d891b0712.jpg",b=a.p+"static/gunkata-3612ea7dfadecd27bda9fe2dcd9f00b7.jpg",Z=a.p+"static/infiltrator-e1f58a65ab7ba097318c7fe38bdf2012.jpg",E=a.p+"static/medic-ae729d29359bd4ae65f9889d395d67a7.jpg",v=a.p+"static/netrunner-202fc4f9374274506c842a105929e773.jpg",A=a.p+"static/sniper-27e931b9ec44648aa68a04f409ab3fd0.jpg",S=a.p+"static/streetrat-eb6bb85217e1e9fc2cd8452889643003.jpg",C=a.p+"static/armored-55ba6babe00ece23e1ed88410fa5cdba.jpg",O=a.p+"static/brainbox-cd1406ab605a5b1ff6d21ed52f7bb977.jpg",R=a.p+"static/cyberclaws-e2290868faf24990e4bfc70717af5a37.jpg",L=a.p+"static/cyberdeck-2bc6c4c63c84ca0e73c7f9b4ad2279cb.jpg",w=a.p+"static/mirrorshades-4de3894379bcbfceb15e40ef3450534f.jpg",T=a.p+"static/neuralink-965f871b0e33ed23d07f5728b42bede9.jpg",N=a.p+"static/retinalhud-4767bb79d51b67b8a5c6110f0b9033a3.jpg",I=a.p+"static/smartcosmetics-7de0653e0b1d4e6e71f3cca35b59f91d.jpg",k=a.p+"static/specialammomod-99e6b1759bc02cbd0809e85f26377ba0.jpg",x=a.p+"static/subdermalshockers-fb6551d1af01ec063f57337cf3299eb4.jpg",B=a.p+"static/synapsechip-45dfdbd17dff20be245fb8288da7b8d0.jpg",D=a.p+"static/thermopticcamo-7b52f5b0c6d518b2183932d29099e5ba.jpg",H=a.p+"static/wiredreflexes-803bfbf24ee20e287b79171b70f7b96b.jpg",G=a.p+"static/dealer-6105d8dd7696619021c35101961bbcc1.jpg",U=a.p+"static/fixer-03e41ccbcccd637b4a618e08c055db41.jpg",F=a.p+"static/infobroker-7ec269c3e071112be07855c85eb6c04c.jpg",j=a.p+"static/streetdoc-66692959e27e2623cba86e56adfc1922.jpg",P=a.p+"static/plaskin-ee960bcd36a4b7f2cab7cb5a2c7e1cc6.jpg",M=a.p+"static/simsenserecorder-8fb2acc793b44629dff03188a63a5c0c.jpg",V=a.p+"static/voicemod-3a9ee3f8f75f5114cce5a3a8af5583a6.jpg",Y=a.p+"static/virtualcowboy-4d5e6f6fc4da25d08280eb1896facf84.jpg",_=a.p+"static/dronerigger-b0ebe55aaeede26a3fbac897d7dffef5.jpg";function X(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function W(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?X(Object(a),!0).forEach((function(e){(0,r.Z)(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):X(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}var q=function(){var t="undefined"!=typeof window&&window,e=function(t){return new Promise((function(e){return setTimeout(e,t)}))},a=(0,i.useState)((function(){var e=t?t.localStorage.getItem("traits"):"{}",a=JSON.parse(e);return function(){J.apply(this,arguments)}(),a||{"trait-toggle":"toggleVisibilityAll"}})),r=a[0],o=a[1],X=function(t){if("checkbox"==t.target.type){var e=t.target.name,a=t.target.checked;o((function(t){var n;return W(W({},t),{},((n={})[e]=a,n))}))}else{var n=t.target.name,r=t.target.value;"trait-toggle"==n&&K(t.target.id),o((function(t){var e;return W(W({},t),{},((e={})[n]=r,e))}))}};(0,i.useEffect)((function(){var t=setTimeout((function(){return q(r)}),500);return function(){return clearTimeout(t)}}),[r]);var q=function(){t&&t.localStorage.setItem("traits",JSON.stringify(r));var e=document.getElementById("active-traits-text"),a=[];Object.keys(r).map((function(t,e){var n=document.getElementById(t);if(n&&"checkbox"==n.type){var r=n.nextElementSibling.querySelector(".trait-name").innerHTML;1==n.checked&&a.push({name:r,id:t})}}));var n=[],o="";a.length>0?(a.forEach((function(t){n.push('<a href="/character-traits#'+t.id+'">'+t.name+"</a>")})),o=n.join(", "),e.innerHTML=o):(o="NONE YET. Pick 3 TRAITS to start.",e.textContent=o),t&&(t.localStorage.setItem("activeTraits",o),K(r["trait-toggle"]))};function K(t){return Q.apply(this,arguments)}function Q(){return(Q=(0,n.Z)(s().mark((function t(a){var n,r;return s().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if("toggleVisibilityAll"!=a){t.next=8;break}for(n=document.getElementsByClassName("trait"),r=0;r<n.length;r++)n[r].style.display="block";return t.next=5,e(200);case 5:for(r=0;r<n.length;r++)n[r].classList.remove("invisible");t.next=13;break;case 8:for(n=document.getElementsByClassName("trait inactive"),r=0;r<n.length;r++)n[r].classList.add("invisible");return t.next=12,e(600);case 12:for(r=0;r<n.length;r++)n[r].style.display="none";case 13:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function J(){return(J=(0,n.Z)(s().mark((function t(){var a;return s().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e(1500);case 2:a=document.getElementById("traits-loading-container"),Object.is(a,null)||(a.style.display="none",document.getElementById("character-traits-form").style.display="block",0!==window.location.hash.substring(1).length&&(window.location=window.location));case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}return(0,p.tZ)(l.Z,{title:"CHARACTER TRAITS",headings:[{depth:2,value:"SKILLS AND BACKGROUND"},{depth:2,value:"GEAR AND CYBERWARE"},{depth:2,value:"CONTACTS"}]},(0,p.tZ)(c.Z,{title:"Character Traits"}),(0,p.tZ)("div",{class:"active-traits"},(0,p.tZ)("span",{id:"active-traits-title"},"Your current TRAITS: "),(0,p.tZ)("span",{id:"active-traits-text"})),(0,p.tZ)("div",{id:"traits-loading-container"},(0,p.tZ)("span",{class:"glitch","data-text":"LOADING"},"LOADING...")),(0,p.tZ)("form",{class:"character-traits",id:"character-traits-form"},(0,p.tZ)("div",{id:"toggle-visibility-container"},(0,p.tZ)("input",{id:"toggleVisibilityAll",class:"toggleVisibilityInput",type:"radio",name:"trait-toggle",value:r.toggleVisibilityAll||"toggleVisibilityAll",onChange:X,checked:"toggleVisibilityAll"===r["trait-toggle"]}),(0,p.tZ)("label",{for:"toggleVisibilityAll",class:"toggleVisibilityLabel"},"SHOW ALL"),(0,p.tZ)("input",{id:"toggleVisibilityActiveOnly",class:"toggleVisibilityInput",type:"radio",name:"trait-toggle",value:r.toggleVisibilityActiveOnly||"toggleVisibilityActiveOnly",onChange:X,checked:"toggleVisibilityActiveOnly"===r["trait-toggle"]}),(0,p.tZ)("label",{for:"toggleVisibilityActiveOnly",class:"toggleVisibilityLabel"},"ACTIVE ONLY")),(0,p.tZ)("div",{class:"traits-container",id:"skills-container"},(0,p.tZ)("h2",{id:"skills-and-background"},"SKILLS AND BACKGROUND"),(0,p.tZ)(u,{type:"skill",name:"Blademaster",title:"BLADEMASTER",art:h,inputs:r,handleChange:X},(0,p.tZ)("span",null,"when wielding a bladed weapon, gain a ",(0,p.tZ)("span",{class:"boost"},"BOOST")," when you test ",(0,p.tZ)("span",{class:"stat"},"CHROME")," to ",(0,p.tZ)("a",{href:"/prompts/general-prompts#clash"},"CLASH")," or when you ",(0,p.tZ)("a",{href:"/prompts/general-prompts#act-under-pressure"},"ACT UNDER PRESSURE")," to defend. When you ",(0,p.tZ)("a",{href:"/prompts/challenge-prompts#fulfill-a-challenge"},"FULFILL A CHALLENGE")," of melee combat, you gain double XP.")),(0,p.tZ)(u,{type:"skill",name:"BountyHunter",title:"BOUNTY HUNTER",art:f,inputs:r,handleChange:X},(0,p.tZ)("span",null,"gain a ",(0,p.tZ)("span",{class:"boost"},"BOOST")," whenever you ",(0,p.tZ)("a",{href:"/prompts/general-prompts#gather-information"},"GATHER INFORMATION"),", ",(0,p.tZ)("a",{href:"/prompts/challenge-prompts#accept-a-challenge"},"ACCEPT A CHALLENGE")," or ",(0,p.tZ)("a",{href:"/prompts/challenge-prompts#fulfill-a-challenge"},"FULFILL A CHALLENGE")," related to a bounty or the procurement of a person. When you ",(0,p.tZ)("a",{href:"/prompts/challenge-prompts#fulfill-a-challenge"},"FULFILL A CHALLENGE")," of capturing a bounty, you gain double XP.")),(0,p.tZ)(u,{type:"skill",name:"Brawler",title:"BRAWLER",art:g,inputs:r,handleChange:X},(0,p.tZ)("span",null,"gain a ",(0,p.tZ)("span",{class:"boost"},"BOOST")," when you ",(0,p.tZ)("a",{href:"/prompts/general-prompts#act-under-pressure"},"ACT UNDER PRESSURE"),", ",(0,p.tZ)("a",{href:"/prompts/general-prompts#secure-an-advantage"},"SECURE AN ADVANTAGE")," or ",(0,p.tZ)("a",{href:"/prompts/general-prompts#clash"},"CLASH")," as long as you are leveraging your unarmed fighting prowess. You can also ",(0,p.tZ)("a",{href:"/prompts/general-prompts#gather-information"},"GATHER INFORMATION")," with ",(0,p.tZ)("span",{class:"stat"},"CHROME")," if you use an intimidating approach.")),(0,p.tZ)(u,{type:"skill",name:"Diplomat",title:"DIPLOMAT",art:d,inputs:r,handleChange:X},(0,p.tZ)("span",null,"gain a ",(0,p.tZ)("span",{class:"boost"},"BOOST")," for any test involving defusing a charged situation, resolving a dispute or negotiating an agreement. When you ",(0,p.tZ)("a",{href:"/prompts/challenge-prompts#fulfill-a-challenge"},"FULFILL A CHALLENGE")," of a social encounter or a negotiation, you gain double XP.")),(0,p.tZ)(u,{type:"skill",name:"Driver",title:"DRIVER",art:m,inputs:r,handleChange:X},(0,p.tZ)("span",null,"gain a ",(0,p.tZ)("span",{class:"boost"},"BOOST")," whenever you ",(0,p.tZ)("a",{href:"/prompts/general-prompts#act-under-pressure"},"ACT UNDER PRESSURE"),", ",(0,p.tZ)("a",{href:"/prompts/general-prompts#secure-an-advantage"},"SECURE AN ADVANTAGE")," or ",(0,p.tZ)("a",{href:"/prompts/general-prompts#clash"},"CLASH")," while piloting a vehicle. Additionally, you can ",(0,p.tZ)("a",{href:"/prompts/general-prompts#clash"},"CLASH")," with ",(0,p.tZ)("span",{class:"stat"},"EDGE")," if you use your vehicle as a weapon. When you ",(0,p.tZ)("a",{href:"/prompts/challenge-prompts#fulfill-a-challenge"},"FULFILL A CHALLENGE")," of a vehicular chase or escape, you gain double XP.")),(0,p.tZ)(u,{type:"skill",name:"DroneRigger",title:"DRONE RIGGER",art:_,inputs:r,handleChange:X},(0,p.tZ)("span",null,"Gain a ",(0,p.tZ)("span",{class:"boost"},"BOOST")," for any action involving controlling remote drones or robotics. You can also ",(0,p.tZ)("a",{href:"/prompts/suffer-prompts#sacrifice-resources"},"SACRIFICE RESOURCES (X)")," to produce a Drone that protects you or your allies (the Drone ",(0,p.tZ)("a",{href:"/prompts/fate-prompts#pay-the-consequences"},"PAYS THE CONSEQUENCES")," instead, a number of times equal to ",(0,p.tZ)("b",null,"X"),") and helps you depending on its type:",(0,p.tZ)("ul",null,(0,p.tZ)("li",null,"UTILITY DRONE: ",(0,p.tZ)("span",{class:"boost"},"BOOSTS")," ",(0,p.tZ)("a",{href:"/prompts/general-prompts#secure-an-advantage"},"SECURE AN ADVANTAGE")),(0,p.tZ)("li",null,"SPY DRONE: ",(0,p.tZ)("span",{class:"boost"},"BOOSTS")," ",(0,p.tZ)("a",{href:"/prompts/general-prompts#gather-information"},"GATHER INFORMATION")),(0,p.tZ)("li",null,"COMBAT DRONE: ",(0,p.tZ)("span",{class:"boost"},"BOOSTS")," ",(0,p.tZ)("a",{href:"/prompts/general-prompts#clash"},"CLASH"))))),(0,p.tZ)(u,{type:"skill",name:"Face",title:"FACE",art:y,inputs:r,handleChange:X},(0,p.tZ)("span",null,"gain a ",(0,p.tZ)("span",{class:"boost"},"BOOST")," when attempting to ",(0,p.tZ)("a",{href:"/prompts/general-prompts#secure-an-advantage"},"SECURE AN ADVANTAGE")," with leadership, coordination or planning; or when you ",(0,p.tZ)("a",{href:"/prompts/challenge-prompts#accept-a-challenge"},"ACCEPT A CHALLENGE"),", ",(0,p.tZ)("a",{href:"/prompts/general-prompts#lead-the-team"},"LEAD THE TEAM")," or ",(0,p.tZ)("a",{href:"/prompts/general-prompts#compel"},"COMPEL")," by testing your ",(0,p.tZ)("span",{class:"stat"},"FLASH"),".")),(0,p.tZ)(u,{type:"skill",name:"GunKata",title:"GUN KATA",art:b,inputs:r,handleChange:X},(0,p.tZ)("span",null,"gain a ",(0,p.tZ)("span",{class:"boost"},"BOOST")," whenever you use firearms in close quarters and you test your ",(0,p.tZ)("span",{class:"stat"},"EDGE")," to ",(0,p.tZ)("a",{href:"/prompts/general-prompts#clash"},"CLASH"),", ",(0,p.tZ)("a",{href:"/prompts/general-prompts#secure-an-advantage"},"SECURE AN ADVANTAGE")," or ",(0,p.tZ)("a",{href:"/prompts/general-prompts#act-under-pressure"},"ACT UNDER PRESSURE"),". When you ",(0,p.tZ)("a",{href:"/prompts/challenge-prompts#fulfill-a-challenge"},"FULFILL A CHALLENGE")," of a firefight, you gain double XP.")),(0,p.tZ)(u,{type:"skill",name:"Infiltrator",title:"INFILTRATOR",art:Z,inputs:r,handleChange:X},(0,p.tZ)("span",null,"gain a ",(0,p.tZ)("span",{class:"boost"},"BOOST")," for any test involving breaking into a secure site, deceiving someone through social engineering or impersonating someone with higher access or hierarchy. When you ",(0,p.tZ)("a",{href:"/prompts/challenge-prompts#fulfill-a-challenge"},"FULFILL A CHALLENGE")," of stealth or espionage, you gain double XP.")),(0,p.tZ)(u,{type:"skill",name:"Medic",title:"MEDIC",art:E,inputs:r,handleChange:X},(0,p.tZ)("span",null,"gain a ",(0,p.tZ)("span",{class:"boost"},"BOOST")," when you ",(0,p.tZ)("a",{href:"/prompts/recovery-prompts#heal"},"HEAL"),", and if you ",(0,p.tZ)("a",{href:"/prompts/suffer-prompts#sacrifice-resources"},"SACRIFICE RESOURCES")," for it, spend 1 less GEAR than needed to gain the same benefits.")),(0,p.tZ)(u,{type:"skill",name:"Netrunner",title:"NETRUNNER",art:v,inputs:r,handleChange:X},(0,p.tZ)("span",null,"gain a ",(0,p.tZ)("span",{class:"boost"},"BOOST")," when you ",(0,p.tZ)("a",{href:"/prompts/challenge-prompts#accept-a-challenge"},"ACCEPT A CHALLENGE")," or ",(0,p.tZ)("a",{href:"/prompts/challenge-prompts#fulfill-a-challenge"},"FULFILL A CHALLENGE")," related to hacking a system, or when you ",(0,p.tZ)("a",{href:"/prompts/general-prompts#gather-information"},"GATHER INFORMATION")," by searching the NET. When you ",(0,p.tZ)("a",{href:"/prompts/challenge-prompts#fulfill-a-challenge"},"FULFILL A CHALLENGE")," of an involved netrun, you gain double XP.")),(0,p.tZ)(u,{type:"skill",name:"Sniper",title:"SNIPER",art:A,inputs:r,handleChange:X},(0,p.tZ)("span",null,"while attacking at long range, gain a ",(0,p.tZ)("span",{class:"boost"},"BOOST")," in ",(0,p.tZ)("a",{href:"/prompts/general-prompts#clash"},"CLASH")," and ",(0,p.tZ)("a",{href:"/prompts/general-prompts#secure-an-advantage"},"SECURE AN ADVANTAGE")," as long as you are ",(0,p.tZ)("i",null,"IN CONTROL"),".")),(0,p.tZ)(u,{type:"skill",name:"StreetRat",title:"STREET RAT",art:S,inputs:r,handleChange:X},(0,p.tZ)("span",null,"gain a ",(0,p.tZ)("span",{class:"boost"},"BOOST")," for any test involving lying, bluffing, stealing or cheating. When you are in the underbelly of the city, you can ",(0,p.tZ)("a",{href:"/prompts/general-prompts#gather-information"},"GATHER INFORMATION")," with ",(0,p.tZ)("span",{class:"stat"},"FLASH")," or ",(0,p.tZ)("span",{class:"stat"},"SHADE"),", and you gain a ",(0,p.tZ)("span",{class:"boost"},"BOOST")," whenever you ",(0,p.tZ)("a",{href:"/prompts/general-prompts#act-under-pressure"},"ACT UNDER PRESSURE")," to parkour through the environment, hide or mix with the people, or move through a secret shortcut.")),(0,p.tZ)(u,{type:"skill",name:"VirtualCowboy",title:"VIRTUAL COWBOY",art:Y,inputs:r,handleChange:X},(0,p.tZ)("span",null,"You are a masterful program-slinger. You can use your ",(0,p.tZ)("span",{class:"stat"},"BRAIN")," to ",(0,p.tZ)("a",{href:"/prompts/general-prompts#clash"},"CLASH")," against VR constructs or avatars, or to ",(0,p.tZ)("a",{href:"/prompts/general-prompts#compel"},"COMPEL")," against auth-bots or security guardians. Additionally, you can ",(0,p.tZ)("a",{href:"/prompts/suffer-prompts#sacrifice-resources"},"SACRIFICE RESOURCES (1)")," to spend an ",(0,p.tZ)("i",null,"exploit")," and gain a ",(0,p.tZ)("span",{class:"boost"},"BOOST")," to hacking-related tests or to reduce the severity when you must ",(0,p.tZ)("a",{href:"/prompts/fate-prompts#pay-the-consequences"},"PAY THE CONSEQUENCES")," of a NET-related adversity."))),(0,p.tZ)("br",null),(0,p.tZ)("hr",null),(0,p.tZ)("br",null),(0,p.tZ)("br",null),(0,p.tZ)("div",{class:"traits-container",id:"gear-container"},(0,p.tZ)("h2",{id:"gear-and-cyberware"},"GEAR AND CYBERWARE"),(0,p.tZ)(u,{type:"gear",name:"Armored",title:"ARMORED",art:C,inputs:r,handleChange:X},(0,p.tZ)("span",null,(0,p.tZ)("i",null,"Shiny and Chrome"),". Muscle+Bone lace and/or metallic alloy plating. Gain a ",(0,p.tZ)("span",{class:"boost"},"BOOST")," for feats of strength when you ",(0,p.tZ)("a",{href:"/prompts/general-prompts#act-under-pressure"},"ACT UNDER PRESSURE")," or ",(0,p.tZ)("a",{href:"/prompts/general-prompts#secure-an-advantage"},"SECURE AN ADVANTAGE"),", or when you ",(0,p.tZ)("a",{href:"/prompts/general-prompts#clash"},"CLASH")," with physical attacks or impact damage.")),(0,p.tZ)(u,{type:"gear",name:"Brainbox",title:"BRAINBOX",art:O,inputs:r,handleChange:X},(0,p.tZ)("span",null,(0,p.tZ)("i",null,"A blackbox for your brain"),". Ignore a ",(0,p.tZ)("span",{class:"fuchsia bold"},"FAILURE")," when you ",(0,p.tZ)("a",{href:"/prompts/suffer-prompts#face-death"},"FACE DEATH"),", but then ",(0,p.tZ)("a",{href:"/prompts/fate-prompts#pay-the-consequences"},"PAY THE CONSEQUENCES")," of having your ",(0,p.tZ)("i",null,"mind-backup")," reinserted in a new body, and lose the BRAINBOX.")),(0,p.tZ)(u,{type:"gear",name:"CyberClaws",title:"CYBERCLAWS",art:R,inputs:r,handleChange:X},(0,p.tZ)("span",null,(0,p.tZ)("i",null,"Retracting Mollies or Logans"),". Gain a ",(0,p.tZ)("span",{class:"boost"},"BOOST")," when you ",(0,p.tZ)("a",{href:"/prompts/challenge-prompts#accept-a-challenge"},"ACCEPT A CHALLENGE")," of violence, when you ",(0,p.tZ)("a",{href:"/prompts/general-prompts#clash"},"CLASH")," or when you ",(0,p.tZ)("a",{href:"/prompts/general-prompts#compel"},"COMPEL")," with ",(0,p.tZ)("span",{class:"stat"},"CHROME"),".")),(0,p.tZ)(u,{type:"gear",name:"Cyberdeck",title:"CYBERDECK",art:L,inputs:r,handleChange:X},(0,p.tZ)("span",null,(0,p.tZ)("i",null,"Tool of the netrunner’s trade"),". gain a ",(0,p.tZ)("span",{class:"boost"},"BOOST")," when you ",(0,p.tZ)("a",{href:"/prompts/general-prompts#secure-an-advantage"},"SECURE AN ADVANTAGE")," or ",(0,p.tZ)("a",{href:"/prompts/general-prompts#gather-information"},"GATHER INFORMATION")," while hacking or surfing the NET in ",(0,p.tZ)("i",null,"Shallow Mode")," (non-VR).")),(0,p.tZ)(u,{type:"gear",name:"MirrorShades",title:"MIRRORSHADES",art:w,inputs:r,handleChange:X},(0,p.tZ)("span",null,(0,p.tZ)("i",null,"excessively cool"),". Gain a ",(0,p.tZ)("span",{class:"boost"},"BOOST")," whenever you test your ",(0,p.tZ)("span",{class:"stat"},"FLASH"),".")),(0,p.tZ)(u,{type:"gear",name:"Neuralink",title:"NEURALINK",art:T,inputs:r,handleChange:X},(0,p.tZ)("span",null,(0,p.tZ)("i",null,"Jacking in"),"... gain a ",(0,p.tZ)("span",{class:"boost"},"BOOST")," for any hacking test while netrunning in ",(0,p.tZ)("i",null,"deep mode")," (full sensory immersion), but since you are unaware of your meat-body and surroundings, gain a ",(0,p.tZ)("span",{class:"glitch","data-text":"GLITCH"},"GLITCH")," for any test ",(0,p.tZ)("b",null,"IRL"),", and increase the severity to ",(0,p.tZ)("i",null,"major")," if you have to ",(0,p.tZ)("a",{href:"/prompts/fate-prompts#pay-the-consequences"},"PAY THE CONSEQUENCES"),".")),(0,p.tZ)(u,{type:"gear",name:"Plaskin",title:"PLASKIN",art:P,inputs:r,handleChange:X},(0,p.tZ)("span",null,(0,p.tZ)("i",null,"Better than real skin™.")," A patch of flexible carbon-fiber polymer mesh over muscle tissue, covered in artificial plastic skin (a self-healing material). Sensitive feedback can be tuned up or down at will. Installable in any part of the body you want. Gain a ",(0,p.tZ)("span",{class:"boost"},"BOOST")," when you ",(0,p.tZ)("a",{href:"/prompts/general-prompts#act-under-pressure"},"ACT UNDER PRESSURE")," to resist electric/cold/heat damage on that body part, or when you ",(0,p.tZ)("a",{href:"/prompts/recovery-prompts#heal"},"HEAL")," from burns, cuts or scratches. ")),(0,p.tZ)(u,{type:"gear",name:"RetinalHud",title:"RETINAL HUD",art:N,inputs:r,handleChange:X},(0,p.tZ)("span",null,(0,p.tZ)("i",null,"Target acquired"),". Your cybereyes project an augmented display with target acquisition, IFF software (identify friend/foe), vulnerability analysis, personal data retrieval, etc. Gain a ",(0,p.tZ)("span",{class:"boost"},"BOOST")," whenever that would give you an advantage in action-packed situations or investigation scenes.")),(0,p.tZ)(u,{type:"gear",name:"SimsenseRecorder",title:"SIMSENSE RECORDER",art:M,inputs:r,handleChange:X},(0,p.tZ)("span",null,"Live ",(0,p.tZ)("i",null,"Better Than Life™")," experiences. SimSense allows to record/playback someone's experience in full five senses. Filtered simchips translate physical sensations only; unfiltered (hacked) ones also replay emotions and thoughts. Apart from being able to replay simchips from others, you can record your own ones to replay later (which gives a ",(0,p.tZ)("span",{class:"boost"},"BOOST")," when you ",(0,p.tZ)("a",{href:"/prompts/general-prompts#secure-an-advantage"},"SECURE AN ADVANTAGE")," or ",(0,p.tZ)("a",{href:"/prompts/general-prompts#gather-information"},"GATHER INFORMATION")," related to that scene, or when you ",(0,p.tZ)("a",{href:"/prompts/recovery-prompts#relax"},"RELAX")," by reliving a pleasant moment).")),(0,p.tZ)(u,{type:"gear",name:"SmartCosmetics",title:"SMART COSMETICS",art:I,inputs:r,handleChange:X},(0,p.tZ)("span",null,"Change hairstyle, makeup or facial features ",(0,p.tZ)("i",null,"at will"),". Gain a ",(0,p.tZ)("span",{class:"boost"},"BOOST")," when you take advantage of this to ",(0,p.tZ)("a",{href:"/prompts/general-prompts#compel"},"COMPEL")," or ",(0,p.tZ)("a",{href:"/prompts/recovery-prompts#resupply"},"RESUPPLY")," by awing or seducing others with ",(0,p.tZ)("span",{class:"stat"},"FLASH"),". Additionally, you can ",(0,p.tZ)("a",{href:"/prompts/general-prompts#gather-information"},"GATHER INFORMATION")," with ",(0,p.tZ)("span",{class:"stat"},"FLASH"),".")),(0,p.tZ)(u,{type:"gear",name:"SpecialAmmoMod",title:"SPECIAL AMMO MOD",art:k,inputs:r,handleChange:X},(0,p.tZ)("span",null,"Your firearm has a voice-activated mod that switches between ",(0,p.tZ)("i",null,"special ammo on demand"),". Including but not limited to: Armor-piercing, Incendiary, Heat-seeker, Flashbang, Cyber-scrambler,  Rubber-ricochet. ",(0,p.tZ)("a",{href:"/prompts/suffer-prompts#sacrifice-resources"},"SACRIFICE RESOURCES (1)")," to gain ",(0,p.tZ)("i",null,"Narrative Permission")," and a ",(0,p.tZ)("span",{class:"boost"},"BOOST")," when you use one for a particular situation.")),(0,p.tZ)(u,{type:"gear",name:"SubdermalShockers",title:"SUBDERMAL SHOCKERS",art:x,inputs:r,handleChange:X},(0,p.tZ)("span",null,(0,p.tZ)("i",null,"no touching!")," gain a ",(0,p.tZ)("span",{class:"boost"},"BOOST")," when you test ",(0,p.tZ)("span",{class:"stat"},"CHROME")," to defend yourself while you ",(0,p.tZ)("a",{href:"/prompts/general-prompts#act-under-pressure"},"ACT UNDER PRESSURE")," or ",(0,p.tZ)("a",{href:"/prompts/general-prompts#clash"},"CLASH"),".")),(0,p.tZ)(u,{type:"gear",name:"SynapseChip",title:"SYNAPSE CHIP",art:B,inputs:r,handleChange:X},(0,p.tZ)("span",null,(0,p.tZ)("i",null,"smarter on demand"),". gain a ",(0,p.tZ)("span",{class:"boost"},"BOOST")," whenever you test your ",(0,p.tZ)("span",{class:"stat"},"BRAIN"),".")),(0,p.tZ)(u,{type:"gear",name:"ThermopticCamo",title:"THERMOPTIC CAMO",art:D,inputs:r,handleChange:X},(0,p.tZ)("span",null,(0,p.tZ)("i",null,"now you see me"),"... Camouflage with nano cameras that record what's behind and reproduce it in front. Gain a ",(0,p.tZ)("span",{class:"boost"},"BOOST")," whenever you test your ",(0,p.tZ)("span",{class:"stat"},"SHADE")," by going almost invisible.")),(0,p.tZ)(u,{type:"gear",name:"VoiceMod",title:"VOICE MOD",art:V,inputs:r,handleChange:X},(0,p.tZ)("span",null,(0,p.tZ)("i",null,"Change your voice on demand"),". This throat+larynx implant includes settings for Ventriloquism, Velvet Singer, Extra-Loud, Screamo Growl, Autotune, Voice-Copy, Instant-Translate, Polyphone, Sound FX, among others. Gain a ",(0,p.tZ)("span",{class:"boost"},"BOOST")," whenever using those features could give you an advantage.")),(0,p.tZ)(u,{type:"gear",name:"WiredReflexes",title:"WIRED REFLEXES",art:H,inputs:r,handleChange:X},(0,p.tZ)("span",null,(0,p.tZ)("i",null,"Sandevistan!")," Spine implant with neural boosters and adrenaline stimulators that makes you abnormaly fast. Gain a ",(0,p.tZ)("span",{class:"boost"},"BOOST")," when you test your ",(0,p.tZ)("span",{class:"stat"},"EDGE")," to ",(0,p.tZ)("a",{href:"/prompts/general-prompts#act-under-pressure"},"ACT UNDER PRESSURE"),", ",(0,p.tZ)("a",{href:"/prompts/general-prompts#secure-an-advantage"},"SECURE AN ADVANTAGE")," or ",(0,p.tZ)("a",{href:"/prompts/general-prompts#clash"},"CLASH"),"."))),(0,p.tZ)("br",null),(0,p.tZ)("hr",null),(0,p.tZ)("br",null),(0,p.tZ)("br",null),(0,p.tZ)("div",{class:"traits-container",id:"contacts-container"},(0,p.tZ)("h2",{id:"contacts"},"CONTACTS"),(0,p.tZ)(u,{type:"contact",name:"Dealer",title:"DEALER",art:G,inputs:r,handleChange:X},(0,p.tZ)("span",null,"gain a ",(0,p.tZ)("span",{class:"boost"},"BOOST")," when you resort to this contact to ",(0,p.tZ)("a",{href:"/prompts/recovery-prompts#relax"},"RELAX")," by using addictive substances or simchips, or gain an automatic ",(0,p.tZ)("span",{class:"turquoise"},"SUCCESS")," if you ",(0,p.tZ)("a",{href:"/prompts/suffer-prompts#sacrifice-resources"},"SACRIFICE RESOURCES"),"."),(0,p.tZ)("div",{class:"name-container"},(0,p.tZ)("label",{for:"contactDealerName"},"NAME / ALIAS:"),(0,p.tZ)("input",{id:"contactDealerName",type:"text",name:"contactDealerName",value:r.contactDealerName,onChange:X}))),(0,p.tZ)(u,{type:"contact",name:"Fixer",title:"FIXER",art:U,inputs:r,handleChange:X},(0,p.tZ)("span",null,"gain a ",(0,p.tZ)("span",{class:"boost"},"BOOST")," when you resort to this contact to ",(0,p.tZ)("a",{href:"/prompts/recovery-prompts#resupply"},"RESUPPLY")," or when you ",(0,p.tZ)("a",{href:"/prompts/challenge-prompts#fulfill-a-challenge"},"FULFILL A CHALLENGE")," for a contract or mission that they facilitated."),(0,p.tZ)("div",{class:"name-container"},(0,p.tZ)("label",{for:"contactFixerName"},"NAME / ALIAS:"),(0,p.tZ)("input",{id:"contactFixerName",type:"text",name:"contactFixerName",value:r.contactFixerName,onChange:X}))),(0,p.tZ)(u,{type:"contact",name:"InfoBroker",title:"INFOBROKER",art:F,inputs:r,handleChange:X},(0,p.tZ)("span",null,"gain a ",(0,p.tZ)("span",{class:"boost"},"BOOST")," when you resort to this contact to ",(0,p.tZ)("a",{href:"/prompts/general-prompts#gather-information"},"GATHER INFORMATION"),", or gain an automatic ",(0,p.tZ)("span",{class:"turquoise"},"SUCCESS")," if you ",(0,p.tZ)("a",{href:"/prompts/suffer-prompts#sacrifice-resources"},"SACRIFICE RESOURCES"),"."),(0,p.tZ)("div",{class:"name-container"},(0,p.tZ)("label",{for:"contactInfoBrokerName"},"NAME / ALIAS:"),(0,p.tZ)("input",{id:"contactInfoBrokerName",type:"text",name:"contactInfoBrokerName",value:r.contactInfoBrokerName,onChange:X}))),(0,p.tZ)(u,{type:"contact",name:"StreetDoc",title:"STREET DOC",art:j,inputs:r,handleChange:X},(0,p.tZ)("span",null,"gain a ",(0,p.tZ)("span",{class:"boost"},"BOOST")," when you resort to this contact to ",(0,p.tZ)("a",{href:"/prompts/recovery-prompts#heal"},"HEAL"),", or gain an automatic SUCCESS if you ",(0,p.tZ)("a",{href:"/prompts/suffer-prompts#sacrifice-resources"},"SACRIFICE RESOURCES (X)"),"."),(0,p.tZ)("div",{class:"name-container"},(0,p.tZ)("label",{for:"contactStreetDocName"},"NAME / ALIAS:"),(0,p.tZ)("input",{id:"contactStreetDocName",type:"text",name:"contactStreetDocName",value:r.contactStreetDocName,onChange:X})))),(0,p.tZ)("br",null),(0,p.tZ)("br",null)))}},17061:function(t,e,a){var n=a(18698).default;function r(){"use strict";t.exports=r=function(){return e},t.exports.__esModule=!0,t.exports.default=t.exports;var e={},a=Object.prototype,o=a.hasOwnProperty,s=Object.defineProperty||function(t,e,a){t[e]=a.value},i="function"==typeof Symbol?Symbol:{},l=i.iterator||"@@iterator",c=i.asyncIterator||"@@asyncIterator",p=i.toStringTag||"@@toStringTag";function u(t,e,a){return Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{u({},"")}catch(I){u=function(t,e,a){return t[e]=a}}function h(t,e,a,n){var r=e&&e.prototype instanceof d?e:d,o=Object.create(r.prototype),i=new w(n||[]);return s(o,"_invoke",{value:C(t,a,i)}),o}function f(t,e,a){try{return{type:"normal",arg:t.call(e,a)}}catch(I){return{type:"throw",arg:I}}}e.wrap=h;var g={};function d(){}function m(){}function y(){}var b={};u(b,l,(function(){return this}));var Z=Object.getPrototypeOf,E=Z&&Z(Z(T([])));E&&E!==a&&o.call(E,l)&&(b=E);var v=y.prototype=d.prototype=Object.create(b);function A(t){["next","throw","return"].forEach((function(e){u(t,e,(function(t){return this._invoke(e,t)}))}))}function S(t,e){function a(r,s,i,l){var c=f(t[r],t,s);if("throw"!==c.type){var p=c.arg,u=p.value;return u&&"object"==n(u)&&o.call(u,"__await")?e.resolve(u.__await).then((function(t){a("next",t,i,l)}),(function(t){a("throw",t,i,l)})):e.resolve(u).then((function(t){p.value=t,i(p)}),(function(t){return a("throw",t,i,l)}))}l(c.arg)}var r;s(this,"_invoke",{value:function(t,n){function o(){return new e((function(e,r){a(t,n,e,r)}))}return r=r?r.then(o,o):o()}})}function C(t,e,a){var n="suspendedStart";return function(r,o){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===r)throw o;return N()}for(a.method=r,a.arg=o;;){var s=a.delegate;if(s){var i=O(s,a);if(i){if(i===g)continue;return i}}if("next"===a.method)a.sent=a._sent=a.arg;else if("throw"===a.method){if("suspendedStart"===n)throw n="completed",a.arg;a.dispatchException(a.arg)}else"return"===a.method&&a.abrupt("return",a.arg);n="executing";var l=f(t,e,a);if("normal"===l.type){if(n=a.done?"completed":"suspendedYield",l.arg===g)continue;return{value:l.arg,done:a.done}}"throw"===l.type&&(n="completed",a.method="throw",a.arg=l.arg)}}}function O(t,e){var a=e.method,n=t.iterator[a];if(void 0===n)return e.delegate=null,"throw"===a&&t.iterator.return&&(e.method="return",e.arg=void 0,O(t,e),"throw"===e.method)||"return"!==a&&(e.method="throw",e.arg=new TypeError("The iterator does not provide a '"+a+"' method")),g;var r=f(n,t.iterator,e.arg);if("throw"===r.type)return e.method="throw",e.arg=r.arg,e.delegate=null,g;var o=r.arg;return o?o.done?(e[t.resultName]=o.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,g):o:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,g)}function R(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function L(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function w(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(R,this),this.reset(!0)}function T(t){if(t){var e=t[l];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var a=-1,n=function e(){for(;++a<t.length;)if(o.call(t,a))return e.value=t[a],e.done=!1,e;return e.value=void 0,e.done=!0,e};return n.next=n}}return{next:N}}function N(){return{value:void 0,done:!0}}return m.prototype=y,s(v,"constructor",{value:y,configurable:!0}),s(y,"constructor",{value:m,configurable:!0}),m.displayName=u(y,p,"GeneratorFunction"),e.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===m||"GeneratorFunction"===(e.displayName||e.name))},e.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,y):(t.__proto__=y,u(t,p,"GeneratorFunction")),t.prototype=Object.create(v),t},e.awrap=function(t){return{__await:t}},A(S.prototype),u(S.prototype,c,(function(){return this})),e.AsyncIterator=S,e.async=function(t,a,n,r,o){void 0===o&&(o=Promise);var s=new S(h(t,a,n,r),o);return e.isGeneratorFunction(a)?s:s.next().then((function(t){return t.done?t.value:s.next()}))},A(v),u(v,p,"Generator"),u(v,l,(function(){return this})),u(v,"toString",(function(){return"[object Generator]"})),e.keys=function(t){var e=Object(t),a=[];for(var n in e)a.push(n);return a.reverse(),function t(){for(;a.length;){var n=a.pop();if(n in e)return t.value=n,t.done=!1,t}return t.done=!0,t}},e.values=T,w.prototype={constructor:w,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(L),!t)for(var e in this)"t"===e.charAt(0)&&o.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function a(a,n){return s.type="throw",s.arg=t,e.next=a,n&&(e.method="next",e.arg=void 0),!!n}for(var n=this.tryEntries.length-1;n>=0;--n){var r=this.tryEntries[n],s=r.completion;if("root"===r.tryLoc)return a("end");if(r.tryLoc<=this.prev){var i=o.call(r,"catchLoc"),l=o.call(r,"finallyLoc");if(i&&l){if(this.prev<r.catchLoc)return a(r.catchLoc,!0);if(this.prev<r.finallyLoc)return a(r.finallyLoc)}else if(i){if(this.prev<r.catchLoc)return a(r.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<r.finallyLoc)return a(r.finallyLoc)}}}},abrupt:function(t,e){for(var a=this.tryEntries.length-1;a>=0;--a){var n=this.tryEntries[a];if(n.tryLoc<=this.prev&&o.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var r=n;break}}r&&("break"===t||"continue"===t)&&r.tryLoc<=e&&e<=r.finallyLoc&&(r=null);var s=r?r.completion:{};return s.type=t,s.arg=e,r?(this.method="next",this.next=r.finallyLoc,g):this.complete(s)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),g},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var a=this.tryEntries[e];if(a.finallyLoc===t)return this.complete(a.completion,a.afterLoc),L(a),g}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var a=this.tryEntries[e];if(a.tryLoc===t){var n=a.completion;if("throw"===n.type){var r=n.arg;L(a)}return r}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,a){return this.delegate={iterator:T(t),resultName:e,nextLoc:a},"next"===this.method&&(this.arg=void 0),g}},e}t.exports=r,t.exports.__esModule=!0,t.exports.default=t.exports},64687:function(t,e,a){var n=a(17061)();t.exports=n;try{regeneratorRuntime=n}catch(r){"object"==typeof globalThis?globalThis.regeneratorRuntime=n:Function("r","regeneratorRuntime = r")(n)}},15861:function(t,e,a){"use strict";function n(t,e,a,n,r,o,s){try{var i=t[o](s),l=i.value}catch(c){return void a(c)}i.done?e(l):Promise.resolve(l).then(n,r)}function r(t){return function(){var e=this,a=arguments;return new Promise((function(r,o){var s=t.apply(e,a);function i(t){n(s,r,o,i,l,"next",t)}function l(t){n(s,r,o,i,l,"throw",t)}i(void 0)}))}}a.d(e,{Z:function(){return r}})}}]);
//# sourceMappingURL=component---src-pages-character-traits-js-e9ad5adcbe68954029f2.js.map