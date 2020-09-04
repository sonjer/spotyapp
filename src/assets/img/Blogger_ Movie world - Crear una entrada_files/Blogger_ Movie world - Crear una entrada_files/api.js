(function(){/*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
'use strict';var e=this||self;function f(a){if(a&&a!=e)return h(a.document);null===m&&(m=h(e.document));return m}var q=/^[\w+/_-]+[=]{0,2}$/,m=null;function h(a){return(a=a.querySelector&&a.querySelector("script[nonce]"))&&(a=a.nonce||a.getAttribute("nonce"))&&q.test(a)?a:""}function r(a){return a};var t;var u;var v=null,w=e.trustedTypes||e.TrustedTypes;if(w&&w.createPolicy){try{v=w.createPolicy("uf-api#html",{createHTML:r,createScript:r,createScriptURL:r,createURL:r})}catch(a){e.console&&e.console.error(a.message)}u=v}else u=v;var x=u;x&&x.createScript("");function z(a,c){this.h=a===A&&c||"";this.g=B}var B={},A={};x&&x.createHTML("<!DOCTYPE html>");x&&x.createHTML("");x&&x.createHTML("<br>");try{(new self.OffscreenCanvas(0,0)).getContext("2d")}catch(a){};function C(a){this.g=a||e.document||document};function D(a,c,g){a.timeOfStartCall=(new Date).getTime();var k=g||e,n=k.document,b=a.nonce||f(k);b&&!a.nonce&&(a.nonce=b);if("help"==a.flow){a:{var d=["document","location","href"];for(var l=k||e,y=0;y<d.length;y++)if(l=l[d[y]],null==l){d=null;break a}d=l}!a.helpCenterContext&&d&&(a.helpCenterContext=d.substring(0,1200));d=!0;c&&JSON&&JSON.stringify&&(l=JSON.stringify(c),(d=1200>=l.length)&&(a.psdJson=l));d||(c={invalidPsd:!0})}c=[a,c,g];k.GOOGLE_FEEDBACK_START_ARGUMENTS=c;g=a.serverUri||"//www.google.com/tools/feedback";
if(d=k.GOOGLE_FEEDBACK_START)d.apply(k,c);else{k=g+"/load.js?";for(var p in a)c=a[p],(g=null==c)||(g=typeof c,g="object"==g&&null!=c||"function"==g),g||(k+=encodeURIComponent(p)+"="+encodeURIComponent(c)+"&");a=(n?new C(9==n.nodeType?n:n.ownerDocument||n.document):t||(t=new C)).g;p="SCRIPT";"application/xhtml+xml"===a.contentType&&(p=p.toLowerCase());a=a.createElement(p);b&&a.setAttribute("nonce",b);b=k;b=x?x.createScriptURL(b):b;b=new z(A,b);b instanceof z&&b.constructor===z&&b.g===B?b=b.h:("object"!=
typeof b||!b||b instanceof Array||b instanceof Object||Object.prototype.toString.call(b),b="type_error:TrustedResourceUrl");a.src=b;(b=f())&&a.setAttribute("nonce",b);n.body.appendChild(a)}}var E=["userfeedback","api","startFeedback"],F=e;E[0]in F||"undefined"==typeof F.execScript||F.execScript("var "+E[0]);for(var G;E.length&&(G=E.shift());)E.length||void 0===D?F[G]&&F[G]!==Object.prototype[G]?F=F[G]:F=F[G]={}:F[G]=D;}).call(this);