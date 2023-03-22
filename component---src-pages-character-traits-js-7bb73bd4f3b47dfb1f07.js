"use strict";(self.webpackChunkgatsby_starter_rocketdocs=self.webpackChunkgatsby_starter_rocketdocs||[]).push([[674],{28354:function(e,t,a){a.r(t),a.d(t,{default:function(){return H}});var r=a(4942),s=a(67294),n=a(53047),l=a(67940),c=a.p+"static/blademaster-3f008a8efeaef1dda0125266cf2e315f.jpg",i=a.p+"static/bountyhunter-652777b0b07654854511fb67b60df41a.jpg",o=a.p+"static/brawler-1f9714ee0d9788f8117568e58d6aae7e.jpg",p=a.p+"static/diplomat-49e4e7e6ca3423a3bdba06a5a8b5e0ae.jpg",d=a.p+"static/driver-dbe5e3ffba9b9b3240d8c1d1560a18f3.jpg",g=a.p+"static/face-a382f9bdad1e32a1bc008e38bc82db1c.jpg",u=a.p+"static/infiltrator-7f22cd59a2a04e89ef582609d9a2b782.jpg",m=a.p+"static/medic-e69fb92379c813d985a71d9f53b7527c.jpg",h=a.p+"static/netrunner-18cb6cf3a98b48da799217993d091d42.jpg",f=a.p+"static/sniper-500eaaee8ab74eea1ece661eda51545b.jpg",Z=a.p+"static/streetrat-459aad952e304099e1dc4d3ee979e126.jpg",b=a.p+"static/armored-f154a468fcca4c83145ae251e4ed397c.jpg",k=a.p+"static/brainbox-824d192e56bafccda664d298d0565417.jpg",C=a.p+"static/cyberclaws-4b60ba30b51e04b6f9560f7bf72bfea8.jpg",S=a.p+"static/cyberdeck-23f1a6cf42354db4ac5ad873934d9fd2.jpg",y=a.p+"static/mirrorshades-fdb536634aec6f3d38aad586e7a89b60.jpg",E=a.p+"static/neuralink-78cebfb82feb024c4b7e3da8a5f52d9f.jpg",v=a.p+"static/smartcosmetics-2b0ae373269567c0791eb45f5abd47e0.jpg",A=a.p+"static/subdermalshockers-8902cecd9669f08c802a414a13cf5dd7.jpg",R=a.p+"static/synapsechip-5a9371a7e394c88d442f36adde93b777.jpg",O=a.p+"static/thermopticcamo-cb75936ced1a69a35a540e41a818748a.jpg",N=a.p+"static/wiredreflexes-45e7e5b1b3d4a0d1e9470af0ef99e4d4.jpg",T=a.p+"static/dealer-a482c24a78dd1e8debdd3f69925119c4.jpg",B=a.p+"static/fixer-0b8eba1f5e7229390f6b7d3a6b8333fc.jpg",w=a.p+"static/infobroker-23316efc32ec4af14d0e22fbe000e37b.jpg",D=a.p+"static/streetdoc-7dd2ff677c6863b8c60a64b1eb2874ff.jpg",I=a(23431);function x(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function L(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?x(Object(a),!0).forEach((function(t){(0,r.Z)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):x(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var H=function(){var e="undefined"!=typeof window&&window,t=(0,s.useState)((function(){var t=e?e.localStorage.getItem("traits"):"{}";return JSON.parse(t)||{}})),a=t[0],r=t[1],x=function(e){if("checkbox"==e.target.type){var t=e.target.name,a=e.target.checked;r((function(e){var r;return L(L({},e),{},((r={})[t]=a,r))}))}else{var s=e.target.name,n=e.target.value;r((function(e){var t;return L(L({},e),{},((t={})[s]=n,t))}))}};(0,s.useEffect)((function(){var e=setTimeout((function(){return H(a)}),500);return function(){return clearTimeout(e)}}),[a]);var H=function(){e&&e.localStorage.setItem("traits",JSON.stringify(a));var t=document.getElementById("active-traits-text"),r=[];Object.keys(a).map((function(e,t){var a=document.getElementById(e);if("checkbox"==a.type){var s=a.nextElementSibling.querySelector(".trait-name").innerHTML;1==a.checked&&r.push({name:s,id:e})}}));var s=[];r.length>0?(r.forEach((function(e){s.push('<a href="/character-traits#'+e.id+'">'+e.name+"</a>")})),t.innerHTML=s.join(", ")):t.textContent="NONE YET. Pick 3 TRAITS to start."};return(0,I.tZ)(n.Z,{title:"CHARACTER TRAITS",headings:[{depth:2,value:"SKILLS AND BACKGROUND"},{depth:2,value:"GEAR AND CYBERWARE"},{depth:2,value:"CONTACTS"}]},(0,I.tZ)(l.Z,{title:"Character Traits"}),(0,I.tZ)("div",{class:"active-traits"},(0,I.tZ)("span",{id:"active-traits-title"},"Your current TRAITS: "),(0,I.tZ)("span",{id:"active-traits-text"})),(0,I.tZ)("form",{class:"character-traits"},(0,I.tZ)("div",{class:"traits-container",id:"skills-container"},(0,I.tZ)("h2",{id:"skills-and-background"},"SKILLS AND BACKGROUND"),(0,I.tZ)("div",{class:"trait skill"},(0,I.tZ)("input",{id:"skillBlademaster",type:"checkbox",name:"skillBlademaster",value:a.skillBlademaster,onChange:x,defaultChecked:a.skillBlademaster}),(0,I.tZ)("label",{for:"skillBlademaster"}," ",(0,I.tZ)("span",{class:"trait-name"},"BLADEMASTER"),": when wielding a long blade, gain a ",(0,I.tZ)("span",{class:"boost"},"BOOST")," when you test ",(0,I.tZ)("span",{class:"stat"},"CHROME")," to ",(0,I.tZ)("a",{href:"/prompts/general-prompts#clash"},"CLASH")," or when you ",(0,I.tZ)("a",{href:"/prompts/general-prompts#act-under-pressure"},"ACT UNDER PRESSURE")," to defend."),(0,I.tZ)("img",{src:c,class:"art"})),(0,I.tZ)("div",{class:"trait skill"},(0,I.tZ)("input",{id:"skillBountyHunter",type:"checkbox",name:"skillBountyHunter",value:a.skillBountyHunter,onChange:x,defaultChecked:a.skillBountyHunter}),(0,I.tZ)("label",{for:"skillBountyHunter"}," ",(0,I.tZ)("span",{class:"trait-name"},"BOUNTY HUNTER"),": gain a ",(0,I.tZ)("span",{class:"boost"},"BOOST")," whenever you ",(0,I.tZ)("a",{href:"/prompts/general-prompts#gather-information"},"GATHER INFORMATION"),", ",(0,I.tZ)("a",{href:"/prompts/challenge-prompts#accept-a-challenge"},"ACCEPT A CHALLENGE")," or ",(0,I.tZ)("a",{href:"/prompts/challenge-prompts#fulfill-a-challenge"},"FULFILL A CHALLENGE")," related to a bounty."),(0,I.tZ)("img",{src:i,class:"art"})),(0,I.tZ)("div",{class:"trait skill"},(0,I.tZ)("input",{id:"skillBrawler",type:"checkbox",name:"skillBrawler",value:a.skillBrawler,onChange:x,defaultChecked:a.skillBrawler}),(0,I.tZ)("label",{for:"skillBrawler"}," ",(0,I.tZ)("span",{class:"trait-name"},"BRAWLER"),": gain a ",(0,I.tZ)("span",{class:"boost"},"BOOST")," when you ",(0,I.tZ)("a",{href:"/prompts/general-prompts#act-under-pressure"},"ACT UNDER PRESSURE"),", ",(0,I.tZ)("a",{href:"/prompts/general-prompts#secure-an-advantage"},"SECURE AN ADVANTAGE")," or ",(0,I.tZ)("a",{href:"/prompts/general-prompts#clash"},"CLASH")," as long as you are leveraging your unarmed fighting prowess."),(0,I.tZ)("img",{src:o,class:"art"})),(0,I.tZ)("div",{class:"trait skill"},(0,I.tZ)("input",{id:"skillDiplomat",type:"checkbox",name:"skillDiplomat",value:a.skillDiplomat,onChange:x,defaultChecked:a.skillDiplomat}),(0,I.tZ)("label",{for:"skillDiplomat"}," ",(0,I.tZ)("span",{class:"trait-name"},"DIPLOMAT"),": gain a ",(0,I.tZ)("span",{class:"boost"},"BOOST")," for any test involving defusing a charged situation, resolving a dispute or negotiating an agreement."),(0,I.tZ)("img",{src:p,class:"art"})),(0,I.tZ)("div",{class:"trait skill"},(0,I.tZ)("input",{id:"skillDriver",type:"checkbox",name:"skillDriver",value:a.skillDriver,onChange:x,defaultChecked:a.skillDriver}),(0,I.tZ)("label",{for:"skillDriver"}," ",(0,I.tZ)("span",{class:"trait-name"},"DRIVER"),": gain a ",(0,I.tZ)("span",{class:"boost"},"BOOST")," whenever you ",(0,I.tZ)("a",{href:"/prompts/general-prompts#act-under-pressure"},"ACT UNDER PRESSURE"),", ",(0,I.tZ)("a",{href:"/prompts/general-prompts#secure-an-advantage"},"SECURE AN ADVANTAGE")," or ",(0,I.tZ)("a",{href:"/prompts/general-prompts#clash"},"CLASH")," while piloting a vehicle."),(0,I.tZ)("img",{src:d,class:"art"})),(0,I.tZ)("div",{class:"trait skill"},(0,I.tZ)("input",{id:"skillFace",type:"checkbox",name:"skillFace",value:a.skillFace,onChange:x,defaultChecked:a.skillFace}),(0,I.tZ)("label",{for:"skillFace"}," ",(0,I.tZ)("span",{class:"trait-name"},"FACE"),": gain a ",(0,I.tZ)("span",{class:"boost"},"BOOST")," when attempting to ",(0,I.tZ)("a",{href:"/prompts/general-prompts#secure-an-advantage"},"SECURE AN ADVANTAGE")," with leadership, coordination or planning; or when you ",(0,I.tZ)("a",{href:"/prompts/challenge-prompts#accept-a-challenge"},"ACCEPT A CHALLENGE")," by testing your ",(0,I.tZ)("span",{class:"stat"},"FLASH"),"."),(0,I.tZ)("img",{src:g,class:"art"})),(0,I.tZ)("div",{class:"trait skill"},(0,I.tZ)("input",{id:"skillInfiltrator",type:"checkbox",name:"skillInfiltrator",value:a.skillInfiltrator,onChange:x,defaultChecked:a.skillInfiltrator}),(0,I.tZ)("label",{for:"skillInfiltrator"}," ",(0,I.tZ)("span",{class:"trait-name"},"INFILTRATOR"),": gain a ",(0,I.tZ)("span",{class:"boost"},"BOOST")," for any test involving breaking into a secure site, deceiving someone through social engineering or impersonating someone with higher access or hierarchy."),(0,I.tZ)("img",{src:u,class:"art"})),(0,I.tZ)("div",{class:"trait skill"},(0,I.tZ)("input",{id:"skillMedic",type:"checkbox",name:"skillMedic",value:a.skillMedic,onChange:x,defaultChecked:a.skillMedic}),(0,I.tZ)("label",{for:"skillMedic"}," ",(0,I.tZ)("span",{class:"trait-name"},"MEDIC"),": gain a ",(0,I.tZ)("span",{class:"boost"},"BOOST")," when you ",(0,I.tZ)("a",{href:"/prompts/recovery-prompts#heal"},"HEAL"),", and if you ",(0,I.tZ)("a",{href:"/prompts/suffer-prompts#sacrifice-resources"},"SACRIFICE RESOURCES")," for it, spend 1 less GEAR than needed to gain the same benefits."),(0,I.tZ)("img",{src:m,class:"art"})),(0,I.tZ)("div",{class:"trait skill"},(0,I.tZ)("input",{id:"skillNetrunner",type:"checkbox",name:"skillNetrunner",value:a.skillNetrunner,onChange:x,defaultChecked:a.skillNetrunner}),(0,I.tZ)("label",{for:"skillNetrunner"}," ",(0,I.tZ)("span",{class:"trait-name"},"NETRUNNER"),": gain a ",(0,I.tZ)("span",{class:"boost"},"BOOST")," for any test involving hacking or surfing the NET."),(0,I.tZ)("img",{src:h,class:"art"})),(0,I.tZ)("div",{class:"trait skill"},(0,I.tZ)("input",{id:"skillSniper",type:"checkbox",name:"skillSniper",value:a.skillSniper,onChange:x,defaultChecked:a.skillSniper}),(0,I.tZ)("label",{for:"skillSniper"}," ",(0,I.tZ)("span",{class:"trait-name"},"SNIPER"),": while attacking at long range, gain a ",(0,I.tZ)("span",{class:"boost"},"BOOST")," in ",(0,I.tZ)("a",{href:"/prompts/general-prompts#clash"},"CLASH")," and ",(0,I.tZ)("a",{href:"/prompts/general-prompts#secure-an-advantage"},"SECURE AN ADVANTAGE")," as long as you are ",(0,I.tZ)("i",null,"IN CONTROL"),"."),(0,I.tZ)("img",{src:f,class:"art"})),(0,I.tZ)("div",{class:"trait skill"},(0,I.tZ)("input",{id:"skillStreetRat",type:"checkbox",name:"skillStreetRat",value:a.skillStreetRat,onChange:x,defaultChecked:a.skillStreetRat}),(0,I.tZ)("label",{for:"skillStreetRat"}," ",(0,I.tZ)("span",{class:"trait-name"},"STREET RAT"),": gain a ",(0,I.tZ)("span",{class:"boost"},"BOOST")," for any test involving lying, bluffing, stealing or cheating."),(0,I.tZ)("img",{src:Z,class:"art"}))),(0,I.tZ)("br",null),(0,I.tZ)("hr",null),(0,I.tZ)("br",null),(0,I.tZ)("br",null),(0,I.tZ)("div",{class:"traits-container",id:"gear-container"},(0,I.tZ)("h2",{id:"gear-and-cyberware"},"GEAR AND CYBERWARE"),(0,I.tZ)("div",{class:"trait gear"},(0,I.tZ)("input",{id:"gearArmored",type:"checkbox",name:"gearArmored",value:a.gearArmored,onChange:x,defaultChecked:a.gearArmored}),(0,I.tZ)("label",{for:"gearArmored"}," ",(0,I.tZ)("span",{class:"trait-name"},"ARMORED"),": ",(0,I.tZ)("i",null,"Shiny and Chrome"),". gain a ",(0,I.tZ)("span",{class:"boost"},"BOOST")," when you ",(0,I.tZ)("a",{href:"/prompts/general-prompts#act-under-pressure"},"ACT UNDER PRESSURE")," or ",(0,I.tZ)("a",{href:"/prompts/general-prompts#clash"},"CLASH")," against physical attacks or impact damage."),(0,I.tZ)("img",{src:b,class:"art"})),(0,I.tZ)("div",{class:"trait gear"},(0,I.tZ)("input",{id:"gearBrainbox",type:"checkbox",name:"gearBrainbox",value:a.gearBrainbox,onChange:x,defaultChecked:a.gearBrainbox}),(0,I.tZ)("label",{for:"gearBrainbox"}," ",(0,I.tZ)("span",{class:"trait-name"},"BRAINBOX"),": ",(0,I.tZ)("i",null,"A blackbox for your brain"),". Ignore a ",(0,I.tZ)("span",{class:"fuchsia"},"FAILURE")," when you ",(0,I.tZ)("a",{href:"/prompts/suffer-prompts#face-death"},"FACE DEATH"),", but then ",(0,I.tZ)("a",{href:"/prompts/fate-prompts#pay-the-consequences"},"PAY THE CONSEQUENCES")," of having your ",(0,I.tZ)("i",null,"mind-backup")," reinserted in a new body, and lose the BRAINBOX."),(0,I.tZ)("img",{src:k,class:"art"})),(0,I.tZ)("div",{class:"trait gear"},(0,I.tZ)("input",{id:"gearCyberClaws",type:"checkbox",name:"gearCyberClaws",value:a.gearCyberClaws,onChange:x,defaultChecked:a.gearCyberClaws}),(0,I.tZ)("label",{for:"gearCyberClaws"}," ",(0,I.tZ)("span",{class:"trait-name"},"CYBERCLAWS"),": ",(0,I.tZ)("i",null,"Retracting Mollies or Logans"),". Gain a ",(0,I.tZ)("span",{class:"boost"},"BOOST")," when you ",(0,I.tZ)("a",{href:"/prompts/challenge-prompts#accept-a-challenge"},"ACCEPT A CHALLENGE")," of violence, when you ",(0,I.tZ)("a",{href:"/prompts/general-prompts#clash"},"CLASH")," or when you ",(0,I.tZ)("a",{href:"/prompts/general-prompts#compel"},"COMPEL")," with ",(0,I.tZ)("span",{class:"stat"},"CHROME"),"."),(0,I.tZ)("img",{src:C,class:"art"})),(0,I.tZ)("div",{class:"trait gear"},(0,I.tZ)("input",{id:"gearCyberdeck",type:"checkbox",name:"gearCyberdeck",value:a.gearCyberdeck,onChange:x,defaultChecked:a.gearCyberdeck}),(0,I.tZ)("label",{for:"gearCyberdeck"}," ",(0,I.tZ)("span",{class:"trait-name"},"CYBERDECK"),": ",(0,I.tZ)("i",null,"Tool of the netrunner’s trade"),". gain a ",(0,I.tZ)("span",{class:"boost"},"BOOST")," for any test involving hacking or surfing the NET."),(0,I.tZ)("img",{src:S,class:"art"})),(0,I.tZ)("div",{class:"trait gear"},(0,I.tZ)("input",{id:"gearMirrorShades",type:"checkbox",name:"gearMirrorShades",value:a.gearMirrorShades,onChange:x,defaultChecked:a.gearMirrorShades}),(0,I.tZ)("label",{for:"gearMirrorShades"}," ",(0,I.tZ)("span",{class:"trait-name"},"MIRRORSHADES"),": ",(0,I.tZ)("i",null,"excessively cool"),". Gain a ",(0,I.tZ)("span",{class:"boost"},"BOOST")," whenever you test your ",(0,I.tZ)("span",{class:"stat"},"FLASH"),"."),(0,I.tZ)("img",{src:y,class:"art"})),(0,I.tZ)("div",{class:"trait gear"},(0,I.tZ)("input",{id:"gearNeuralink",type:"checkbox",name:"gearNeuralink",value:a.gearNeuralink,onChange:x,defaultChecked:a.gearNeuralink}),(0,I.tZ)("label",{for:"gearNeuralink"}," ",(0,I.tZ)("span",{class:"trait-name"},"NEURALINK"),": ",(0,I.tZ)("i",null,"Jack me in"),". gain a ",(0,I.tZ)("span",{class:"boost"},"BOOST")," when netrunning in ",(0,I.tZ)("i",null,"deep mode")," (full sensory immersion)."),(0,I.tZ)("img",{src:E,class:"art"})),(0,I.tZ)("div",{class:"trait gear"},(0,I.tZ)("input",{id:"gearSmartCosmetics",type:"checkbox",name:"gearSmartCosmetics",value:a.gearSmartCosmetics,onChange:x,defaultChecked:a.gearSmartCosmetics}),(0,I.tZ)("label",{for:"gearSmartCosmetics"}," ",(0,I.tZ)("span",{class:"trait-name"},"SMART COSMETICS"),": Change hairstyle, makeup or facial features ",(0,I.tZ)("i",null,"at will"),". Gain a ",(0,I.tZ)("span",{class:"boost"},"BOOST")," when you take advantage of this to ",(0,I.tZ)("a",{href:"/prompts/general-prompts#compel"},"COMPEL"),", ",(0,I.tZ)("a",{href:"/prompts/general-prompts#gather-information"},"GATHER INFORMATION")," or ",(0,I.tZ)("a",{href:"/prompts/recovery-prompts#resupply"},"RESUPPLY")," by awing or seducing others with ",(0,I.tZ)("span",{class:"stat"},"FLASH"),"."),(0,I.tZ)("img",{src:v,class:"art"})),(0,I.tZ)("div",{class:"trait gear"},(0,I.tZ)("input",{id:"gearSubdermalShockers",type:"checkbox",name:"gearSubdermalShockers",value:a.gearSubdermalShockers,onChange:x,defaultChecked:a.gearSubdermalShockers}),(0,I.tZ)("label",{for:"gearSubdermalShockers"}," ",(0,I.tZ)("span",{class:"trait-name"},"SUBDERMAL SHOCKERS"),": ",(0,I.tZ)("i",null,"no touching!")," gain a ",(0,I.tZ)("span",{class:"boost"},"BOOST")," when you test ",(0,I.tZ)("span",{class:"stat"},"CHROME")," to defend yourself while you ",(0,I.tZ)("a",{href:"/prompts/general-prompts#act-under-pressure"},"ACT UNDER PRESSURE")," or ",(0,I.tZ)("a",{href:"/prompts/general-prompts#clash"},"CLASH"),"."),(0,I.tZ)("img",{src:A,class:"art"})),(0,I.tZ)("div",{class:"trait gear"},(0,I.tZ)("input",{id:"gearSynapseChip",type:"checkbox",name:"gearSynapseChip",value:a.gearSynapseChip,onChange:x,defaultChecked:a.gearSynapseChip}),(0,I.tZ)("label",{for:"gearSynapseChip"}," ",(0,I.tZ)("span",{class:"trait-name"},"SYNAPSE CHIP"),": ",(0,I.tZ)("i",null,"smarter on demand"),". gain a ",(0,I.tZ)("span",{class:"boost"},"BOOST")," whenever you test your ",(0,I.tZ)("span",{class:"stat"},"BRAIN"),"."),(0,I.tZ)("img",{src:R,class:"art"})),(0,I.tZ)("div",{class:"trait gear"},(0,I.tZ)("input",{id:"gearThermopticCamo",type:"checkbox",name:"gearThermopticCamo",value:a.gearThermopticCamo,onChange:x,defaultChecked:a.gearThermopticCamo}),(0,I.tZ)("label",{for:"gearThermopticCamo"}," ",(0,I.tZ)("span",{class:"trait-name"},"THERMOPTIC CAMO"),": ",(0,I.tZ)("i",null,"now you see me"),"... gain a ",(0,I.tZ)("span",{class:"boost"},"BOOST")," whenever you test your ",(0,I.tZ)("span",{class:"stat"},"SHADE")," by going almost invisible."),(0,I.tZ)("img",{src:O,class:"art"})),(0,I.tZ)("div",{class:"trait gear"},(0,I.tZ)("input",{id:"gearWiredReflexes",type:"checkbox",name:"gearWiredReflexes",value:a.gearWiredReflexes,onChange:x,defaultChecked:a.gearWiredReflexes}),(0,I.tZ)("label",{for:"gearWiredReflexes"}," ",(0,I.tZ)("span",{class:"trait-name"},"WIRED REFLEXES"),": ",(0,I.tZ)("i",null,"Sandevistan!")," gain a ",(0,I.tZ)("span",{class:"boost"},"BOOST")," when you test your ",(0,I.tZ)("span",{class:"stat"},"EDGE")," to ",(0,I.tZ)("a",{href:"/prompts/general-prompts#act-under-pressure"},"ACT UNDER PRESSURE"),", ",(0,I.tZ)("a",{href:"/prompts/general-prompts#secure-an-advantage"},"SECURE AN ADVANTAGE")," or ",(0,I.tZ)("a",{href:"/prompts/general-prompts#clash"},"CLASH"),"."),(0,I.tZ)("img",{src:N,class:"art"}))),(0,I.tZ)("br",null),(0,I.tZ)("hr",null),(0,I.tZ)("br",null),(0,I.tZ)("br",null),(0,I.tZ)("div",{class:"traits-container",id:"contacts-container"},(0,I.tZ)("h2",{id:"contacts"},"CONTACTS"),(0,I.tZ)("div",{class:"trait contact"},(0,I.tZ)("input",{id:"contactDealer",type:"checkbox",name:"contactDealer",value:a.contactDealer,onChange:x,defaultChecked:a.contactDealer}),(0,I.tZ)("label",{for:"contactDealer"}," ",(0,I.tZ)("span",{class:"trait-name"},"DEALER"),": gain a ",(0,I.tZ)("span",{class:"boost"},"BOOST")," when you resort to this contact to ",(0,I.tZ)("a",{href:"/prompts/recovery-prompts#relax"},"RELAX")," by using addictive substances or simchips, or gain an automatic ",(0,I.tZ)("span",{class:"turquoise"},"SUCCESS")," if you ",(0,I.tZ)("a",{href:"/prompts/suffer-prompts#sacrifice-resources"},"SACRIFICE RESOURCES"),"."),(0,I.tZ)("img",{src:T,class:"art"}),(0,I.tZ)("div",{class:"name-container"},(0,I.tZ)("label",{for:"contactDealerName"},"NAME / ALIAS:"),(0,I.tZ)("input",{id:"contactDealerName",type:"text",name:"contactDealerName",value:a.contactDealerName,onChange:x}))),(0,I.tZ)("div",{class:"trait contact"},(0,I.tZ)("input",{id:"contactFixer",type:"checkbox",name:"contactFixer",value:a.contactFixer,onChange:x,defaultChecked:a.contactFixer}),(0,I.tZ)("label",{for:"contactFixer"}," ",(0,I.tZ)("span",{class:"trait-name"},"FIXER"),": gain a ",(0,I.tZ)("span",{class:"boost"},"BOOST")," when you resort to this contact to ",(0,I.tZ)("a",{href:"/prompts/recovery-prompts#resupply"},"RESUPPLY")," or when you ",(0,I.tZ)("a",{href:"/prompts/challenge-prompts#fulfill-a-challenge"},"FULFILL A CHALLENGE")," for a contract or mission that they facilitated."),(0,I.tZ)("img",{src:B,class:"art"}),(0,I.tZ)("div",{class:"name-container"},(0,I.tZ)("label",{for:"contactFixerName"},"NAME / ALIAS:"),(0,I.tZ)("input",{id:"contactFixerName",type:"text",name:"contactFixerName",value:a.contactFixerName,onChange:x}))),(0,I.tZ)("div",{class:"trait contact"},(0,I.tZ)("input",{id:"contactInfoBroker",type:"checkbox",name:"contactInfoBroker",value:a.contactInfoBroker,onChange:x,defaultChecked:a.contactInfoBroker}),(0,I.tZ)("label",{for:"contactInfoBroker"}," ",(0,I.tZ)("span",{class:"trait-name"},"INFOBROKER"),": gain a ",(0,I.tZ)("span",{class:"boost"},"BOOST")," when you resort to this contact to ",(0,I.tZ)("a",{href:"/prompts/general-prompts#gather-information"},"GATHER INFORMATION"),", or gain an automatic ",(0,I.tZ)("span",{class:"turquoise"},"SUCCESS")," if you ",(0,I.tZ)("a",{href:"/prompts/suffer-prompts#sacrifice-resources"},"SACRIFICE RESOURCES"),"."),(0,I.tZ)("img",{src:w,class:"art"}),(0,I.tZ)("div",{class:"name-container"},(0,I.tZ)("label",{for:"contactInfoBrokerName"},"NAME / ALIAS:"),(0,I.tZ)("input",{id:"contactInfoBrokerName",type:"text",name:"contactInfoBrokerName",value:a.contactInfoBrokerName,onChange:x}))),(0,I.tZ)("div",{class:"trait contact"},(0,I.tZ)("input",{id:"contactStreetDoc",type:"checkbox",name:"contactStreetDoc",value:a.contactStreetDoc,onChange:x,defaultChecked:a.contactStreetDoc}),(0,I.tZ)("label",{for:"contactStreetDoc"}," ",(0,I.tZ)("span",{class:"trait-name"},"STREET DOC"),": gain a ",(0,I.tZ)("span",{class:"boost"},"BOOST")," when you resort to this contact to ",(0,I.tZ)("a",{href:"/prompts/recovery-prompts#heal"},"HEAL"),", or gain an automatic SUCCESS if you ",(0,I.tZ)("a",{href:"/prompts/suffer-prompts#sacrifice-resources"},"SACRIFICE RESOURCES (X)"),"."),(0,I.tZ)("img",{src:D,class:"art"}),(0,I.tZ)("div",{class:"name-container"},(0,I.tZ)("label",{for:"contactStreetDocName"},"NAME / ALIAS:"),(0,I.tZ)("input",{id:"contactStreetDocName",type:"text",name:"contactStreetDocName",value:a.contactStreetDocName,onChange:x})))),(0,I.tZ)("br",null),(0,I.tZ)("br",null)))}}}]);
//# sourceMappingURL=component---src-pages-character-traits-js-7bb73bd4f3b47dfb1f07.js.map