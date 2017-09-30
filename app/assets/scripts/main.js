/*! jQuery v3.2.2-pre -ajax,-ajax/jsonp,-ajax/load,-ajax/parseXML,-ajax/script,-ajax/var/location,-ajax/var/nonce,-ajax/var/rquery,-ajax/xhr,-manipulation/_evalUrl,-event/ajax,-deprecated | (c) JS Foundation and other contributors | jquery.org/license */
!function(e,t){"use strict";"object"==typeof module&&"object"==typeof module.exports?module.exports=e.document?t(e,!0):function(e){if(!e.document)throw new Error("jQuery requires a window with a document");return t(e)}:t(e)}("undefined"!=typeof window?window:this,function(e,t){"use strict";var n=[],i=e.document,r=Object.getPrototypeOf,o=n.slice,s=n.concat,a=n.push,u=n.indexOf,l={},c=l.toString,f=l.hasOwnProperty,p=f.toString,d=p.call(Object),h={},g=function e(t){return null!=t&&t===t.window};function v(e,t){var n=(t=t||i).createElement("script");n.text=e,t.head.appendChild(n).parentNode.removeChild(n)}var m="3.2.2-pre -ajax,-ajax/jsonp,-ajax/load,-ajax/parseXML,-ajax/script,-ajax/var/location,-ajax/var/nonce,-ajax/var/rquery,-ajax/xhr,-manipulation/_evalUrl,-event/ajax,-deprecated",y=function(e,t){return new y.fn.init(e,t)},x=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,b=/^-ms-/,w=/-([a-z])/g,C=function(e,t){return t.toUpperCase()};y.fn=y.prototype={jquery:m,constructor:y,length:0,toArray:function(){return o.call(this)},get:function(e){return null==e?o.call(this):e<0?this[e+this.length]:this[e]},pushStack:function(e){var t=y.merge(this.constructor(),e);return t.prevObject=this,t},each:function(e){return y.each(this,e)},map:function(e){return this.pushStack(y.map(this,function(t,n){return e.call(t,n,t)}))},slice:function(){return this.pushStack(o.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(e){var t=this.length,n=+e+(e<0?t:0);return this.pushStack(n>=0&&n<t?[this[n]]:[])},end:function(){return this.prevObject||this.constructor()},push:a,sort:n.sort,splice:n.splice},y.extend=y.fn.extend=function(){var e,t,n,i,r,o,s=arguments[0]||{},a=1,u=arguments.length,l=!1;for("boolean"==typeof s&&(l=s,s=arguments[a]||{},a++),"object"==typeof s||y.isFunction(s)||(s={}),a===u&&(s=this,a--);a<u;a++)if(null!=(e=arguments[a]))for(t in e)n=s[t],s!==(i=e[t])&&(l&&i&&(y.isPlainObject(i)||(r=Array.isArray(i)))?(r?(r=!1,o=n&&Array.isArray(n)?n:[]):o=n&&y.isPlainObject(n)?n:{},s[t]=y.extend(l,o,i)):void 0!==i&&(s[t]=i));return s},y.extend({expando:"jQuery"+(m+Math.random()).replace(/\D/g,""),isReady:!0,error:function(e){throw new Error(e)},noop:function(){},isFunction:function(e){return"function"==typeof e&&"number"!=typeof e.nodeType},isNumeric:function(e){var t=y.type(e);return("number"===t||"string"===t)&&!isNaN(e-parseFloat(e))},isPlainObject:function(e){var t,n;return!(!e||"[object Object]"!==c.call(e))&&(!(t=r(e))||"function"==typeof(n=f.call(t,"constructor")&&t.constructor)&&p.call(n)===d)},isEmptyObject:function(e){var t;for(t in e)return!1;return!0},type:function(e){return null==e?e+"":"object"==typeof e||"function"==typeof e?l[c.call(e)]||"object":typeof e},globalEval:function(e){v(e)},camelCase:function(e){return e.replace(b,"ms-").replace(w,C)},each:function(e,t){var n,i=0;if(T(e)){for(n=e.length;i<n;i++)if(!1===t.call(e[i],i,e[i]))break}else for(i in e)if(!1===t.call(e[i],i,e[i]))break;return e},trim:function(e){return null==e?"":(e+"").replace(x,"")},makeArray:function(e,t){var n=t||[];return null!=e&&(T(Object(e))?y.merge(n,"string"==typeof e?[e]:e):a.call(n,e)),n},inArray:function(e,t,n){return null==t?-1:u.call(t,e,n)},merge:function(e,t){for(var n=+t.length,i=0,r=e.length;i<n;i++)e[r++]=t[i];return e.length=r,e},grep:function(e,t,n){for(var i,r=[],o=0,s=e.length,a=!n;o<s;o++)(i=!t(e[o],o))!==a&&r.push(e[o]);return r},map:function(e,t,n){var i,r,o=0,a=[];if(T(e))for(i=e.length;o<i;o++)null!=(r=t(e[o],o,n))&&a.push(r);else for(o in e)null!=(r=t(e[o],o,n))&&a.push(r);return s.apply([],a)},guid:1,proxy:function(e,t){var n,i,r;if("string"==typeof t&&(n=e[t],t=e,e=n),y.isFunction(e))return i=o.call(arguments,2),r=function(){return e.apply(t||this,i.concat(o.call(arguments)))},r.guid=e.guid=e.guid||y.guid++,r},now:Date.now,support:h}),"function"==typeof Symbol&&(y.fn[Symbol.iterator]=n[Symbol.iterator]),y.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),function(e,t){l["[object "+t+"]"]=t.toLowerCase()});function T(e){var t=!!e&&"length"in e&&e.length,n=y.type(e);return!y.isFunction(e)&&!g(e)&&("array"===n||0===t||"number"==typeof t&&t>0&&t-1 in e)}var k=function(e){var t,n,i,r,o,s,a,u,l,c,f,p,d,h,g,v,m,y,x,b="sizzle"+1*new Date,w=e.document,C=0,T=0,k=se(),E=se(),N=se(),A=function(e,t){return e===t&&(f=!0),0},D={}.hasOwnProperty,S=[],q=S.pop,L=S.push,j=S.push,H=S.slice,F=function(e,t){for(var n=0,i=e.length;n<i;n++)if(e[n]===t)return n;return-1},O="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",P="[\\x20\\t\\r\\n\\f]",I="(?:\\\\.|[\\w-]|[^\0-\\xa0])+",R="\\["+P+"*("+I+")(?:"+P+"*([*^$|!~]?=)"+P+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+I+"))|)"+P+"*\\]",M=":("+I+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+R+")*)|.*)\\)|)",W=new RegExp(P+"+","g"),B=new RegExp("^"+P+"+|((?:^|[^\\\\])(?:\\\\.)*)"+P+"+$","g"),$=new RegExp("^"+P+"*,"+P+"*"),_=new RegExp("^"+P+"*([>+~]|"+P+")"+P+"*"),z=new RegExp("="+P+"*([^\\]'\"]*?)"+P+"*\\]","g"),U=new RegExp(M),X=new RegExp("^"+I+"$"),V={ID:new RegExp("^#("+I+")"),CLASS:new RegExp("^\\.("+I+")"),TAG:new RegExp("^("+I+"|[*])"),ATTR:new RegExp("^"+R),PSEUDO:new RegExp("^"+M),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+P+"*(even|odd|(([+-]|)(\\d*)n|)"+P+"*(?:([+-]|)"+P+"*(\\d+)|))"+P+"*\\)|)","i"),bool:new RegExp("^(?:"+O+")$","i"),needsContext:new RegExp("^"+P+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+P+"*((?:-\\d)?\\d*)"+P+"*\\)|)(?=[^-]|$)","i")},Y=/^(?:input|select|textarea|button)$/i,Q=/^h\d$/i,G=/^[^{]+\{\s*\[native \w/,K=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,J=/[+~]/,Z=new RegExp("\\\\([\\da-f]{1,6}"+P+"?|("+P+")|.)","ig"),ee=function(e,t,n){var i="0x"+t-65536;return i!==i||n?t:i<0?String.fromCharCode(i+65536):String.fromCharCode(i>>10|55296,1023&i|56320)},te=/([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,ne=function(e,t){return t?"\0"===e?"\ufffd":e.slice(0,-1)+"\\"+e.charCodeAt(e.length-1).toString(16)+" ":"\\"+e},ie=function(){p()},re=ye(function(e){return!0===e.disabled&&("form"in e||"label"in e)},{dir:"parentNode",next:"legend"});try{j.apply(S=H.call(w.childNodes),w.childNodes),S[w.childNodes.length].nodeType}catch(e){j={apply:S.length?function(e,t){L.apply(e,H.call(t))}:function(e,t){var n=e.length,i=0;while(e[n++]=t[i++]);e.length=n-1}}}function oe(e,t,i,r){var o,a,l,c,f,h,m,y=t&&t.ownerDocument,C=t?t.nodeType:9;if(i=i||[],"string"!=typeof e||!e||1!==C&&9!==C&&11!==C)return i;if(!r&&((t?t.ownerDocument||t:w)!==d&&p(t),t=t||d,g)){if(11!==C&&(f=K.exec(e)))if(o=f[1]){if(9===C){if(!(l=t.getElementById(o)))return i;if(l.id===o)return i.push(l),i}else if(y&&(l=y.getElementById(o))&&x(t,l)&&l.id===o)return i.push(l),i}else{if(f[2])return j.apply(i,t.getElementsByTagName(e)),i;if((o=f[3])&&n.getElementsByClassName&&t.getElementsByClassName)return j.apply(i,t.getElementsByClassName(o)),i}if(n.qsa&&!N[e+" "]&&(!v||!v.test(e))){if(1!==C)y=t,m=e;else if("object"!==t.nodeName.toLowerCase()){(c=t.getAttribute("id"))?c=c.replace(te,ne):t.setAttribute("id",c=b),a=(h=s(e)).length;while(a--)h[a]="#"+c+" "+me(h[a]);m=h.join(","),y=J.test(e)&&ge(t.parentNode)||t}if(m)try{return j.apply(i,y.querySelectorAll(m)),i}catch(e){}finally{c===b&&t.removeAttribute("id")}}}return u(e.replace(B,"$1"),t,i,r)}function se(){var e=[];function t(n,r){return e.push(n+" ")>i.cacheLength&&delete t[e.shift()],t[n+" "]=r}return t}function ae(e){return e[b]=!0,e}function ue(e){var t=d.createElement("fieldset");try{return!!e(t)}catch(e){return!1}finally{t.parentNode&&t.parentNode.removeChild(t),t=null}}function le(e,t){var n=e.split("|"),r=n.length;while(r--)i.attrHandle[n[r]]=t}function ce(e,t){var n=t&&e,i=n&&1===e.nodeType&&1===t.nodeType&&e.sourceIndex-t.sourceIndex;if(i)return i;if(n)while(n=n.nextSibling)if(n===t)return-1;return e?1:-1}function fe(e){return function(t){return"input"===t.nodeName.toLowerCase()&&t.type===e}}function pe(e){return function(t){var n=t.nodeName.toLowerCase();return("input"===n||"button"===n)&&t.type===e}}function de(e){return function(t){return"form"in t?t.parentNode&&!1===t.disabled?"label"in t?"label"in t.parentNode?t.parentNode.disabled===e:t.disabled===e:t.isDisabled===e||t.isDisabled!==!e&&re(t)===e:t.disabled===e:"label"in t&&t.disabled===e}}function he(e){return ae(function(t){return t=+t,ae(function(n,i){var r,o=e([],n.length,t),s=o.length;while(s--)n[r=o[s]]&&(n[r]=!(i[r]=n[r]))})})}function ge(e){return e&&"undefined"!=typeof e.getElementsByTagName&&e}n=oe.support={},o=oe.isXML=function(e){var t=e&&(e.ownerDocument||e).documentElement;return!!t&&"HTML"!==t.nodeName},p=oe.setDocument=function(e){var t,r,s=e?e.ownerDocument||e:w;return s!==d&&9===s.nodeType&&s.documentElement?(d=s,h=d.documentElement,g=!o(d),w!==d&&(r=d.defaultView)&&r.top!==r&&(r.addEventListener?r.addEventListener("unload",ie,!1):r.attachEvent&&r.attachEvent("onunload",ie)),n.attributes=ue(function(e){return e.className="i",!e.getAttribute("className")}),n.getElementsByTagName=ue(function(e){return e.appendChild(d.createComment("")),!e.getElementsByTagName("*").length}),n.getElementsByClassName=G.test(d.getElementsByClassName),n.getById=ue(function(e){return h.appendChild(e).id=b,!d.getElementsByName||!d.getElementsByName(b).length}),n.getById?(i.filter.ID=function(e){var t=e.replace(Z,ee);return function(e){return e.getAttribute("id")===t}},i.find.ID=function(e,t){if("undefined"!=typeof t.getElementById&&g){var n=t.getElementById(e);return n?[n]:[]}}):(i.filter.ID=function(e){var t=e.replace(Z,ee);return function(e){var n="undefined"!=typeof e.getAttributeNode&&e.getAttributeNode("id");return n&&n.value===t}},i.find.ID=function(e,t){if("undefined"!=typeof t.getElementById&&g){var n,i,r,o=t.getElementById(e);if(o){if((n=o.getAttributeNode("id"))&&n.value===e)return[o];r=t.getElementsByName(e),i=0;while(o=r[i++])if((n=o.getAttributeNode("id"))&&n.value===e)return[o]}return[]}}),i.find.TAG=n.getElementsByTagName?function(e,t){return"undefined"!=typeof t.getElementsByTagName?t.getElementsByTagName(e):n.qsa?t.querySelectorAll(e):void 0}:function(e,t){var n,i=[],r=0,o=t.getElementsByTagName(e);if("*"===e){while(n=o[r++])1===n.nodeType&&i.push(n);return i}return o},i.find.CLASS=n.getElementsByClassName&&function(e,t){if("undefined"!=typeof t.getElementsByClassName&&g)return t.getElementsByClassName(e)},m=[],v=[],(n.qsa=G.test(d.querySelectorAll))&&(ue(function(e){h.appendChild(e).innerHTML="<a id='"+b+"'></a><select id='"+b+"-\r\\' msallowcapture=''><option selected=''></option></select>",e.querySelectorAll("[msallowcapture^='']").length&&v.push("[*^$]="+P+"*(?:''|\"\")"),e.querySelectorAll("[selected]").length||v.push("\\["+P+"*(?:value|"+O+")"),e.querySelectorAll("[id~="+b+"-]").length||v.push("~="),e.querySelectorAll(":checked").length||v.push(":checked"),e.querySelectorAll("a#"+b+"+*").length||v.push(".#.+[+~]")}),ue(function(e){e.innerHTML="<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";var t=d.createElement("input");t.setAttribute("type","hidden"),e.appendChild(t).setAttribute("name","D"),e.querySelectorAll("[name=d]").length&&v.push("name"+P+"*[*^$|!~]?="),2!==e.querySelectorAll(":enabled").length&&v.push(":enabled",":disabled"),h.appendChild(e).disabled=!0,2!==e.querySelectorAll(":disabled").length&&v.push(":enabled",":disabled"),e.querySelectorAll("*,:x"),v.push(",.*:")})),(n.matchesSelector=G.test(y=h.matches||h.webkitMatchesSelector||h.mozMatchesSelector||h.oMatchesSelector||h.msMatchesSelector))&&ue(function(e){n.disconnectedMatch=y.call(e,"*"),y.call(e,"[s!='']:x"),m.push("!=",M)}),v=v.length&&new RegExp(v.join("|")),m=m.length&&new RegExp(m.join("|")),t=G.test(h.compareDocumentPosition),x=t||G.test(h.contains)?function(e,t){var n=9===e.nodeType?e.documentElement:e,i=t&&t.parentNode;return e===i||!(!i||1!==i.nodeType||!(n.contains?n.contains(i):e.compareDocumentPosition&&16&e.compareDocumentPosition(i)))}:function(e,t){if(t)while(t=t.parentNode)if(t===e)return!0;return!1},A=t?function(e,t){if(e===t)return f=!0,0;var i=!e.compareDocumentPosition-!t.compareDocumentPosition;return i||(1&(i=(e.ownerDocument||e)===(t.ownerDocument||t)?e.compareDocumentPosition(t):1)||!n.sortDetached&&t.compareDocumentPosition(e)===i?e===d||e.ownerDocument===w&&x(w,e)?-1:t===d||t.ownerDocument===w&&x(w,t)?1:c?F(c,e)-F(c,t):0:4&i?-1:1)}:function(e,t){if(e===t)return f=!0,0;var n,i=0,r=e.parentNode,o=t.parentNode,s=[e],a=[t];if(!r||!o)return e===d?-1:t===d?1:r?-1:o?1:c?F(c,e)-F(c,t):0;if(r===o)return ce(e,t);n=e;while(n=n.parentNode)s.unshift(n);n=t;while(n=n.parentNode)a.unshift(n);while(s[i]===a[i])i++;return i?ce(s[i],a[i]):s[i]===w?-1:a[i]===w?1:0},d):d},oe.matches=function(e,t){return oe(e,null,null,t)},oe.matchesSelector=function(e,t){if((e.ownerDocument||e)!==d&&p(e),t=t.replace(z,"='$1']"),n.matchesSelector&&g&&!N[t+" "]&&(!m||!m.test(t))&&(!v||!v.test(t)))try{var i=y.call(e,t);if(i||n.disconnectedMatch||e.document&&11!==e.document.nodeType)return i}catch(e){}return oe(t,d,null,[e]).length>0},oe.contains=function(e,t){return(e.ownerDocument||e)!==d&&p(e),x(e,t)},oe.attr=function(e,t){(e.ownerDocument||e)!==d&&p(e);var r=i.attrHandle[t.toLowerCase()],o=r&&D.call(i.attrHandle,t.toLowerCase())?r(e,t,!g):void 0;return void 0!==o?o:n.attributes||!g?e.getAttribute(t):(o=e.getAttributeNode(t))&&o.specified?o.value:null},oe.escape=function(e){return(e+"").replace(te,ne)},oe.error=function(e){throw new Error("Syntax error, unrecognized expression: "+e)},oe.uniqueSort=function(e){var t,i=[],r=0,o=0;if(f=!n.detectDuplicates,c=!n.sortStable&&e.slice(0),e.sort(A),f){while(t=e[o++])t===e[o]&&(r=i.push(o));while(r--)e.splice(i[r],1)}return c=null,e},r=oe.getText=function(e){var t,n="",i=0,o=e.nodeType;if(o){if(1===o||9===o||11===o){if("string"==typeof e.textContent)return e.textContent;for(e=e.firstChild;e;e=e.nextSibling)n+=r(e)}else if(3===o||4===o)return e.nodeValue}else while(t=e[i++])n+=r(t);return n},(i=oe.selectors={cacheLength:50,createPseudo:ae,match:V,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(e){return e[1]=e[1].replace(Z,ee),e[3]=(e[3]||e[4]||e[5]||"").replace(Z,ee),"~="===e[2]&&(e[3]=" "+e[3]+" "),e.slice(0,4)},CHILD:function(e){return e[1]=e[1].toLowerCase(),"nth"===e[1].slice(0,3)?(e[3]||oe.error(e[0]),e[4]=+(e[4]?e[5]+(e[6]||1):2*("even"===e[3]||"odd"===e[3])),e[5]=+(e[7]+e[8]||"odd"===e[3])):e[3]&&oe.error(e[0]),e},PSEUDO:function(e){var t,n=!e[6]&&e[2];return V.CHILD.test(e[0])?null:(e[3]?e[2]=e[4]||e[5]||"":n&&U.test(n)&&(t=s(n,!0))&&(t=n.indexOf(")",n.length-t)-n.length)&&(e[0]=e[0].slice(0,t),e[2]=n.slice(0,t)),e.slice(0,3))}},filter:{TAG:function(e){var t=e.replace(Z,ee).toLowerCase();return"*"===e?function(){return!0}:function(e){return e.nodeName&&e.nodeName.toLowerCase()===t}},CLASS:function(e){var t=k[e+" "];return t||(t=new RegExp("(^|"+P+")"+e+"("+P+"|$)"))&&k(e,function(e){return t.test("string"==typeof e.className&&e.className||"undefined"!=typeof e.getAttribute&&e.getAttribute("class")||"")})},ATTR:function(e,t,n){return function(i){var r=oe.attr(i,e);return null==r?"!="===t:!t||(r+="","="===t?r===n:"!="===t?r!==n:"^="===t?n&&0===r.indexOf(n):"*="===t?n&&r.indexOf(n)>-1:"$="===t?n&&r.slice(-n.length)===n:"~="===t?(" "+r.replace(W," ")+" ").indexOf(n)>-1:"|="===t&&(r===n||r.slice(0,n.length+1)===n+"-"))}},CHILD:function(e,t,n,i,r){var o="nth"!==e.slice(0,3),s="last"!==e.slice(-4),a="of-type"===t;return 1===i&&0===r?function(e){return!!e.parentNode}:function(t,n,u){var l,c,f,p,d,h,g=o!==s?"nextSibling":"previousSibling",v=t.parentNode,m=a&&t.nodeName.toLowerCase(),y=!u&&!a,x=!1;if(v){if(o){while(g){p=t;while(p=p[g])if(a?p.nodeName.toLowerCase()===m:1===p.nodeType)return!1;h=g="only"===e&&!h&&"nextSibling"}return!0}if(h=[s?v.firstChild:v.lastChild],s&&y){x=(d=(l=(c=(f=(p=v)[b]||(p[b]={}))[p.uniqueID]||(f[p.uniqueID]={}))[e]||[])[0]===C&&l[1])&&l[2],p=d&&v.childNodes[d];while(p=++d&&p&&p[g]||(x=d=0)||h.pop())if(1===p.nodeType&&++x&&p===t){c[e]=[C,d,x];break}}else if(y&&(x=d=(l=(c=(f=(p=t)[b]||(p[b]={}))[p.uniqueID]||(f[p.uniqueID]={}))[e]||[])[0]===C&&l[1]),!1===x)while(p=++d&&p&&p[g]||(x=d=0)||h.pop())if((a?p.nodeName.toLowerCase()===m:1===p.nodeType)&&++x&&(y&&((c=(f=p[b]||(p[b]={}))[p.uniqueID]||(f[p.uniqueID]={}))[e]=[C,x]),p===t))break;return(x-=r)===i||x%i==0&&x/i>=0}}},PSEUDO:function(e,t){var n,r=i.pseudos[e]||i.setFilters[e.toLowerCase()]||oe.error("unsupported pseudo: "+e);return r[b]?r(t):r.length>1?(n=[e,e,"",t],i.setFilters.hasOwnProperty(e.toLowerCase())?ae(function(e,n){var i,o=r(e,t),s=o.length;while(s--)e[i=F(e,o[s])]=!(n[i]=o[s])}):function(e){return r(e,0,n)}):r}},pseudos:{not:ae(function(e){var t=[],n=[],i=a(e.replace(B,"$1"));return i[b]?ae(function(e,t,n,r){var o,s=i(e,null,r,[]),a=e.length;while(a--)(o=s[a])&&(e[a]=!(t[a]=o))}):function(e,r,o){return t[0]=e,i(t,null,o,n),t[0]=null,!n.pop()}}),has:ae(function(e){return function(t){return oe(e,t).length>0}}),contains:ae(function(e){return e=e.replace(Z,ee),function(t){return(t.textContent||t.innerText||r(t)).indexOf(e)>-1}}),lang:ae(function(e){return X.test(e||"")||oe.error("unsupported lang: "+e),e=e.replace(Z,ee).toLowerCase(),function(t){var n;do{if(n=g?t.lang:t.getAttribute("xml:lang")||t.getAttribute("lang"))return(n=n.toLowerCase())===e||0===n.indexOf(e+"-")}while((t=t.parentNode)&&1===t.nodeType);return!1}}),target:function(t){var n=e.location&&e.location.hash;return n&&n.slice(1)===t.id},root:function(e){return e===h},focus:function(e){return e===d.activeElement&&(!d.hasFocus||d.hasFocus())&&!!(e.type||e.href||~e.tabIndex)},enabled:de(!1),disabled:de(!0),checked:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&!!e.checked||"option"===t&&!!e.selected},selected:function(e){return e.parentNode&&e.parentNode.selectedIndex,!0===e.selected},empty:function(e){for(e=e.firstChild;e;e=e.nextSibling)if(e.nodeType<6)return!1;return!0},parent:function(e){return!i.pseudos.empty(e)},header:function(e){return Q.test(e.nodeName)},input:function(e){return Y.test(e.nodeName)},button:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&"button"===e.type||"button"===t},text:function(e){var t;return"input"===e.nodeName.toLowerCase()&&"text"===e.type&&(null==(t=e.getAttribute("type"))||"text"===t.toLowerCase())},first:he(function(){return[0]}),last:he(function(e,t){return[t-1]}),eq:he(function(e,t,n){return[n<0?n+t:n]}),even:he(function(e,t){for(var n=0;n<t;n+=2)e.push(n);return e}),odd:he(function(e,t){for(var n=1;n<t;n+=2)e.push(n);return e}),lt:he(function(e,t,n){for(var i=n<0?n+t:n;--i>=0;)e.push(i);return e}),gt:he(function(e,t,n){for(var i=n<0?n+t:n;++i<t;)e.push(i);return e})}}).pseudos.nth=i.pseudos.eq;for(t in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})i.pseudos[t]=fe(t);for(t in{submit:!0,reset:!0})i.pseudos[t]=pe(t);function ve(){}ve.prototype=i.filters=i.pseudos,i.setFilters=new ve,s=oe.tokenize=function(e,t){var n,r,o,s,a,u,l,c=E[e+" "];if(c)return t?0:c.slice(0);a=e,u=[],l=i.preFilter;while(a){n&&!(r=$.exec(a))||(r&&(a=a.slice(r[0].length)||a),u.push(o=[])),n=!1,(r=_.exec(a))&&(n=r.shift(),o.push({value:n,type:r[0].replace(B," ")}),a=a.slice(n.length));for(s in i.filter)!(r=V[s].exec(a))||l[s]&&!(r=l[s](r))||(n=r.shift(),o.push({value:n,type:s,matches:r}),a=a.slice(n.length));if(!n)break}return t?a.length:a?oe.error(e):E(e,u).slice(0)};function me(e){for(var t=0,n=e.length,i="";t<n;t++)i+=e[t].value;return i}function ye(e,t,n){var i=t.dir,r=t.next,o=r||i,s=n&&"parentNode"===o,a=T++;return t.first?function(t,n,r){while(t=t[i])if(1===t.nodeType||s)return e(t,n,r);return!1}:function(t,n,u){var l,c,f,p=[C,a];if(u){while(t=t[i])if((1===t.nodeType||s)&&e(t,n,u))return!0}else while(t=t[i])if(1===t.nodeType||s)if(f=t[b]||(t[b]={}),c=f[t.uniqueID]||(f[t.uniqueID]={}),r&&r===t.nodeName.toLowerCase())t=t[i]||t;else{if((l=c[o])&&l[0]===C&&l[1]===a)return p[2]=l[2];if(c[o]=p,p[2]=e(t,n,u))return!0}return!1}}function xe(e){return e.length>1?function(t,n,i){var r=e.length;while(r--)if(!e[r](t,n,i))return!1;return!0}:e[0]}function be(e,t,n){for(var i=0,r=t.length;i<r;i++)oe(e,t[i],n);return n}function we(e,t,n,i,r){for(var o,s=[],a=0,u=e.length,l=null!=t;a<u;a++)(o=e[a])&&(n&&!n(o,i,r)||(s.push(o),l&&t.push(a)));return s}function Ce(e,t,n,i,r,o){return i&&!i[b]&&(i=Ce(i)),r&&!r[b]&&(r=Ce(r,o)),ae(function(o,s,a,u){var l,c,f,p=[],d=[],h=s.length,g=o||be(t||"*",a.nodeType?[a]:a,[]),v=!e||!o&&t?g:we(g,p,e,a,u),m=n?r||(o?e:h||i)?[]:s:v;if(n&&n(v,m,a,u),i){l=we(m,d),i(l,[],a,u),c=l.length;while(c--)(f=l[c])&&(m[d[c]]=!(v[d[c]]=f))}if(o){if(r||e){if(r){l=[],c=m.length;while(c--)(f=m[c])&&l.push(v[c]=f);r(null,m=[],l,u)}c=m.length;while(c--)(f=m[c])&&(l=r?F(o,f):p[c])>-1&&(o[l]=!(s[l]=f))}}else m=we(m===s?m.splice(h,m.length):m),r?r(null,s,m,u):j.apply(s,m)})}function Te(e){for(var t,n,r,o=e.length,s=i.relative[e[0].type],a=s||i.relative[" "],u=s?1:0,c=ye(function(e){return e===t},a,!0),f=ye(function(e){return F(t,e)>-1},a,!0),p=[function(e,n,i){var r=!s&&(i||n!==l)||((t=n).nodeType?c(e,n,i):f(e,n,i));return t=null,r}];u<o;u++)if(n=i.relative[e[u].type])p=[ye(xe(p),n)];else{if((n=i.filter[e[u].type].apply(null,e[u].matches))[b]){for(r=++u;r<o;r++)if(i.relative[e[r].type])break;return Ce(u>1&&xe(p),u>1&&me(e.slice(0,u-1).concat({value:" "===e[u-2].type?"*":""})).replace(B,"$1"),n,u<r&&Te(e.slice(u,r)),r<o&&Te(e=e.slice(r)),r<o&&me(e))}p.push(n)}return xe(p)}function ke(e,t){var n=t.length>0,r=e.length>0,o=function(o,s,a,u,c){var f,h,v,m=0,y="0",x=o&&[],b=[],w=l,T=o||r&&i.find.TAG("*",c),k=C+=null==w?1:Math.random()||.1,E=T.length;for(c&&(l=s===d||s||c);y!==E&&null!=(f=T[y]);y++){if(r&&f){h=0,s||f.ownerDocument===d||(p(f),a=!g);while(v=e[h++])if(v(f,s||d,a)){u.push(f);break}c&&(C=k)}n&&((f=!v&&f)&&m--,o&&x.push(f))}if(m+=y,n&&y!==m){h=0;while(v=t[h++])v(x,b,s,a);if(o){if(m>0)while(y--)x[y]||b[y]||(b[y]=q.call(u));b=we(b)}j.apply(u,b),c&&!o&&b.length>0&&m+t.length>1&&oe.uniqueSort(u)}return c&&(C=k,l=w),x};return n?ae(o):o}return a=oe.compile=function(e,t){var n,i=[],r=[],o=N[e+" "];if(!o){t||(t=s(e)),n=t.length;while(n--)(o=Te(t[n]))[b]?i.push(o):r.push(o);(o=N(e,ke(r,i))).selector=e}return o},u=oe.select=function(e,t,n,r){var o,u,l,c,f,p="function"==typeof e&&e,d=!r&&s(e=p.selector||e);if(n=n||[],1===d.length){if((u=d[0]=d[0].slice(0)).length>2&&"ID"===(l=u[0]).type&&9===t.nodeType&&g&&i.relative[u[1].type]){if(!(t=(i.find.ID(l.matches[0].replace(Z,ee),t)||[])[0]))return n;p&&(t=t.parentNode),e=e.slice(u.shift().value.length)}o=V.needsContext.test(e)?0:u.length;while(o--){if(l=u[o],i.relative[c=l.type])break;if((f=i.find[c])&&(r=f(l.matches[0].replace(Z,ee),J.test(u[0].type)&&ge(t.parentNode)||t))){if(u.splice(o,1),!(e=r.length&&me(u)))return j.apply(n,r),n;break}}}return(p||a(e,d))(r,t,!g,n,!t||J.test(e)&&ge(t.parentNode)||t),n},n.sortStable=b.split("").sort(A).join("")===b,n.detectDuplicates=!!f,p(),n.sortDetached=ue(function(e){return 1&e.compareDocumentPosition(d.createElement("fieldset"))}),ue(function(e){return e.innerHTML="<a href='#'></a>","#"===e.firstChild.getAttribute("href")})||le("type|href|height|width",function(e,t,n){if(!n)return e.getAttribute(t,"type"===t.toLowerCase()?1:2)}),n.attributes&&ue(function(e){return e.innerHTML="<input/>",e.firstChild.setAttribute("value",""),""===e.firstChild.getAttribute("value")})||le("value",function(e,t,n){if(!n&&"input"===e.nodeName.toLowerCase())return e.defaultValue}),ue(function(e){return null==e.getAttribute("disabled")})||le(O,function(e,t,n){var i;if(!n)return!0===e[t]?t.toLowerCase():(i=e.getAttributeNode(t))&&i.specified?i.value:null}),oe}(e);y.find=k,y.expr=k.selectors,y.expr[":"]=y.expr.pseudos,y.uniqueSort=y.unique=k.uniqueSort,y.text=k.getText,y.isXMLDoc=k.isXML,y.contains=k.contains,y.escapeSelector=k.escape;var E=function(e,t,n){var i=[],r=void 0!==n;while((e=e[t])&&9!==e.nodeType)if(1===e.nodeType){if(r&&y(e).is(n))break;i.push(e)}return i},N=function(e,t){for(var n=[];e;e=e.nextSibling)1===e.nodeType&&e!==t&&n.push(e);return n},A=y.expr.match.needsContext;function D(e,t){return e.nodeName&&e.nodeName.toLowerCase()===t.toLowerCase()}var S=/^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i,q=/^.[^:#\[\.,]*$/;function L(e,t,n){return y.isFunction(t)?y.grep(e,function(e,i){return!!t.call(e,i,e)!==n}):t.nodeType?y.grep(e,function(e){return e===t!==n}):"string"!=typeof t?y.grep(e,function(e){return u.call(t,e)>-1!==n}):q.test(t)?y.filter(t,e,n):(t=y.filter(t,e),y.grep(e,function(e){return u.call(t,e)>-1!==n&&1===e.nodeType}))}y.filter=function(e,t,n){var i=t[0];return n&&(e=":not("+e+")"),1===t.length&&1===i.nodeType?y.find.matchesSelector(i,e)?[i]:[]:y.find.matches(e,y.grep(t,function(e){return 1===e.nodeType}))},y.fn.extend({find:function(e){var t,n,i=this.length,r=this;if("string"!=typeof e)return this.pushStack(y(e).filter(function(){for(t=0;t<i;t++)if(y.contains(r[t],this))return!0}));for(n=this.pushStack([]),t=0;t<i;t++)y.find(e,r[t],n);return i>1?y.uniqueSort(n):n},filter:function(e){return this.pushStack(L(this,e||[],!1))},not:function(e){return this.pushStack(L(this,e||[],!0))},is:function(e){return!!L(this,"string"==typeof e&&A.test(e)?y(e):e||[],!1).length}});var j,H=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;(y.fn.init=function(e,t,n){var r,o;if(!e)return this;if(n=n||j,"string"==typeof e){if(!(r="<"===e[0]&&">"===e[e.length-1]&&e.length>=3?[null,e,null]:H.exec(e))||!r[1]&&t)return!t||t.jquery?(t||n).find(e):this.constructor(t).find(e);if(r[1]){if(t=t instanceof y?t[0]:t,y.merge(this,y.parseHTML(r[1],t&&t.nodeType?t.ownerDocument||t:i,!0)),S.test(r[1])&&y.isPlainObject(t))for(r in t)y.isFunction(this[r])?this[r](t[r]):this.attr(r,t[r]);return this}return(o=i.getElementById(r[2]))&&(this[0]=o,this.length=1),this}return e.nodeType?(this[0]=e,this.length=1,this):y.isFunction(e)?void 0!==n.ready?n.ready(e):e(y):y.makeArray(e,this)}).prototype=y.fn,j=y(i);var F=/^(?:parents|prev(?:Until|All))/,O={children:!0,contents:!0,next:!0,prev:!0};y.fn.extend({has:function(e){var t=y(e,this),n=t.length;return this.filter(function(){for(var e=0;e<n;e++)if(y.contains(this,t[e]))return!0})},closest:function(e,t){var n,i=0,r=this.length,o=[],s="string"!=typeof e&&y(e);if(!A.test(e))for(;i<r;i++)for(n=this[i];n&&n!==t;n=n.parentNode)if(n.nodeType<11&&(s?s.index(n)>-1:1===n.nodeType&&y.find.matchesSelector(n,e))){o.push(n);break}return this.pushStack(o.length>1?y.uniqueSort(o):o)},index:function(e){return e?"string"==typeof e?u.call(y(e),this[0]):u.call(this,e.jquery?e[0]:e):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(e,t){return this.pushStack(y.uniqueSort(y.merge(this.get(),y(e,t))))},addBack:function(e){return this.add(null==e?this.prevObject:this.prevObject.filter(e))}});function P(e,t){while((e=e[t])&&1!==e.nodeType);return e}y.each({parent:function(e){var t=e.parentNode;return t&&11!==t.nodeType?t:null},parents:function(e){return E(e,"parentNode")},parentsUntil:function(e,t,n){return E(e,"parentNode",n)},next:function(e){return P(e,"nextSibling")},prev:function(e){return P(e,"previousSibling")},nextAll:function(e){return E(e,"nextSibling")},prevAll:function(e){return E(e,"previousSibling")},nextUntil:function(e,t,n){return E(e,"nextSibling",n)},prevUntil:function(e,t,n){return E(e,"previousSibling",n)},siblings:function(e){return N((e.parentNode||{}).firstChild,e)},children:function(e){return N(e.firstChild)},contents:function(e){return D(e,"iframe")?e.contentDocument:(D(e,"template")&&(e=e.content||e),y.merge([],e.childNodes))}},function(e,t){y.fn[e]=function(n,i){var r=y.map(this,t,n);return"Until"!==e.slice(-5)&&(i=n),i&&"string"==typeof i&&(r=y.filter(i,r)),this.length>1&&(O[e]||y.uniqueSort(r),F.test(e)&&r.reverse()),this.pushStack(r)}});var I=/[^\x20\t\r\n\f]+/g;function R(e){var t={};return y.each(e.match(I)||[],function(e,n){t[n]=!0}),t}y.Callbacks=function(e){e="string"==typeof e?R(e):y.extend({},e);var t,n,i,r,o=[],s=[],a=-1,u=function(){for(r=r||e.once,i=t=!0;s.length;a=-1){n=s.shift();while(++a<o.length)!1===o[a].apply(n[0],n[1])&&e.stopOnFalse&&(a=o.length,n=!1)}e.memory||(n=!1),t=!1,r&&(o=n?[]:"")},l={add:function(){return o&&(n&&!t&&(a=o.length-1,s.push(n)),function t(n){y.each(n,function(n,i){y.isFunction(i)?e.unique&&l.has(i)||o.push(i):i&&i.length&&"string"!==y.type(i)&&t(i)})}(arguments),n&&!t&&u()),this},remove:function(){return y.each(arguments,function(e,t){var n;while((n=y.inArray(t,o,n))>-1)o.splice(n,1),n<=a&&a--}),this},has:function(e){return e?y.inArray(e,o)>-1:o.length>0},empty:function(){return o&&(o=[]),this},disable:function(){return r=s=[],o=n="",this},disabled:function(){return!o},lock:function(){return r=s=[],n||t||(o=n=""),this},locked:function(){return!!r},fireWith:function(e,n){return r||(n=[e,(n=n||[]).slice?n.slice():n],s.push(n),t||u()),this},fire:function(){return l.fireWith(this,arguments),this},fired:function(){return!!i}};return l};function M(e){return e}function W(e){throw e}function B(e,t,n,i){var r;try{e&&y.isFunction(r=e.promise)?r.call(e).done(t).fail(n):e&&y.isFunction(r=e.then)?r.call(e,t,n):t.apply(void 0,[e].slice(i))}catch(e){n.apply(void 0,[e])}}y.extend({Deferred:function(t){var n=[["notify","progress",y.Callbacks("memory"),y.Callbacks("memory"),2],["resolve","done",y.Callbacks("once memory"),y.Callbacks("once memory"),0,"resolved"],["reject","fail",y.Callbacks("once memory"),y.Callbacks("once memory"),1,"rejected"]],i="pending",r={state:function(){return i},always:function(){return o.done(arguments).fail(arguments),this},catch:function(e){return r.then(null,e)},pipe:function(){var e=arguments;return y.Deferred(function(t){y.each(n,function(n,i){var r=y.isFunction(e[i[4]])&&e[i[4]];o[i[1]](function(){var e=r&&r.apply(this,arguments);e&&y.isFunction(e.promise)?e.promise().progress(t.notify).done(t.resolve).fail(t.reject):t[i[0]+"With"](this,r?[e]:arguments)})}),e=null}).promise()},then:function(t,i,r){var o=0;function s(t,n,i,r){return function(){var a=this,u=arguments,l=function(){var e,l;if(!(t<o)){if((e=i.apply(a,u))===n.promise())throw new TypeError("Thenable self-resolution");l=e&&("object"==typeof e||"function"==typeof e)&&e.then,y.isFunction(l)?r?l.call(e,s(o,n,M,r),s(o,n,W,r)):(o++,l.call(e,s(o,n,M,r),s(o,n,W,r),s(o,n,M,n.notifyWith))):(i!==M&&(a=void 0,u=[e]),(r||n.resolveWith)(a,u))}},c=r?l:function(){try{l()}catch(e){y.Deferred.exceptionHook&&y.Deferred.exceptionHook(e,c.stackTrace),t+1>=o&&(i!==W&&(a=void 0,u=[e]),n.rejectWith(a,u))}};t?c():(y.Deferred.getStackHook&&(c.stackTrace=y.Deferred.getStackHook()),e.setTimeout(c))}}return y.Deferred(function(e){n[0][3].add(s(0,e,y.isFunction(r)?r:M,e.notifyWith)),n[1][3].add(s(0,e,y.isFunction(t)?t:M)),n[2][3].add(s(0,e,y.isFunction(i)?i:W))}).promise()},promise:function(e){return null!=e?y.extend(e,r):r}},o={};return y.each(n,function(e,t){var s=t[2],a=t[5];r[t[1]]=s.add,a&&s.add(function(){i=a},n[3-e][2].disable,n[3-e][3].disable,n[0][2].lock,n[0][3].lock),s.add(t[3].fire),o[t[0]]=function(){return o[t[0]+"With"](this===o?void 0:this,arguments),this},o[t[0]+"With"]=s.fireWith}),r.promise(o),t&&t.call(o,o),o},when:function(e){var t=arguments.length,n=t,i=Array(n),r=o.call(arguments),s=y.Deferred(),a=function(e){return function(n){i[e]=this,r[e]=arguments.length>1?o.call(arguments):n,--t||s.resolveWith(i,r)}};if(t<=1&&(B(e,s.done(a(n)).resolve,s.reject,!t),"pending"===s.state()||y.isFunction(r[n]&&r[n].then)))return s.then();while(n--)B(r[n],a(n),s.reject);return s.promise()}});var $=/^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;y.Deferred.exceptionHook=function(t,n){e.console&&e.console.warn&&t&&$.test(t.name)&&e.console.warn("jQuery.Deferred exception: "+t.message,t.stack,n)},y.readyException=function(t){e.setTimeout(function(){throw t})};var _=y.Deferred();y.fn.ready=function(e){return _.then(e).catch(function(e){y.readyException(e)}),this},y.extend({isReady:!1,readyWait:1,ready:function(e){(!0===e?--y.readyWait:y.isReady)||(y.isReady=!0,!0!==e&&--y.readyWait>0||_.resolveWith(i,[y]))}}),y.ready.then=_.then;function z(){i.removeEventListener("DOMContentLoaded",z),e.removeEventListener("load",z),y.ready()}"complete"===i.readyState||"loading"!==i.readyState&&!i.documentElement.doScroll?e.setTimeout(y.ready):(i.addEventListener("DOMContentLoaded",z),e.addEventListener("load",z));var U=function(e,t,n,i,r,o,s){var a=0,u=e.length,l=null==n;if("object"===y.type(n)){r=!0;for(a in n)U(e,t,a,n[a],!0,o,s)}else if(void 0!==i&&(r=!0,y.isFunction(i)||(s=!0),l&&(s?(t.call(e,i),t=null):(l=t,t=function(e,t,n){return l.call(y(e),n)})),t))for(;a<u;a++)t(e[a],n,s?i:i.call(e[a],a,t(e[a],n)));return r?e:l?t.call(e):u?t(e[0],n):o},X=function(e){return 1===e.nodeType||9===e.nodeType||!+e.nodeType};function V(){this.expando=y.expando+V.uid++}V.uid=1,V.prototype={cache:function(e){var t=e[this.expando];return t||(t={},X(e)&&(e.nodeType?e[this.expando]=t:Object.defineProperty(e,this.expando,{value:t,configurable:!0}))),t},set:function(e,t,n){var i,r=this.cache(e);if("string"==typeof t)r[y.camelCase(t)]=n;else for(i in t)r[y.camelCase(i)]=t[i];return r},get:function(e,t){return void 0===t?this.cache(e):e[this.expando]&&e[this.expando][y.camelCase(t)]},access:function(e,t,n){return void 0===t||t&&"string"==typeof t&&void 0===n?this.get(e,t):(this.set(e,t,n),void 0!==n?n:t)},remove:function(e,t){var n,i=e[this.expando];if(void 0!==i){if(void 0!==t){n=(t=Array.isArray(t)?t.map(y.camelCase):(t=y.camelCase(t))in i?[t]:t.match(I)||[]).length;while(n--)delete i[t[n]]}(void 0===t||y.isEmptyObject(i))&&(e.nodeType?e[this.expando]=void 0:delete e[this.expando])}},hasData:function(e){var t=e[this.expando];return void 0!==t&&!y.isEmptyObject(t)}};var Y=new V,Q=new V,G=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,K=/[A-Z]/g;function J(e){return"true"===e||"false"!==e&&("null"===e?null:e===+e+""?+e:G.test(e)?JSON.parse(e):e)}function Z(e,t,n){var i;if(void 0===n&&1===e.nodeType)if(i="data-"+t.replace(K,"-$&").toLowerCase(),"string"==typeof(n=e.getAttribute(i))){try{n=J(n)}catch(e){}Q.set(e,t,n)}else n=void 0;return n}y.extend({hasData:function(e){return Q.hasData(e)||Y.hasData(e)},data:function(e,t,n){return Q.access(e,t,n)},removeData:function(e,t){Q.remove(e,t)},_data:function(e,t,n){return Y.access(e,t,n)},_removeData:function(e,t){Y.remove(e,t)}}),y.fn.extend({data:function(e,t){var n,i,r,o=this[0],s=o&&o.attributes;if(void 0===e){if(this.length&&(r=Q.get(o),1===o.nodeType&&!Y.get(o,"hasDataAttrs"))){n=s.length;while(n--)s[n]&&0===(i=s[n].name).indexOf("data-")&&(i=y.camelCase(i.slice(5)),Z(o,i,r[i]));Y.set(o,"hasDataAttrs",!0)}return r}return"object"==typeof e?this.each(function(){Q.set(this,e)}):U(this,function(t){var n;if(o&&void 0===t){if(void 0!==(n=Q.get(o,e)))return n;if(void 0!==(n=Z(o,e)))return n}else this.each(function(){Q.set(this,e,t)})},null,t,arguments.length>1,null,!0)},removeData:function(e){return this.each(function(){Q.remove(this,e)})}}),y.extend({queue:function(e,t,n){var i;if(e)return t=(t||"fx")+"queue",i=Y.get(e,t),n&&(!i||Array.isArray(n)?i=Y.access(e,t,y.makeArray(n)):i.push(n)),i||[]},dequeue:function(e,t){t=t||"fx";var n=y.queue(e,t),i=n.length,r=n.shift(),o=y._queueHooks(e,t),s=function(){y.dequeue(e,t)};"inprogress"===r&&(r=n.shift(),i--),r&&("fx"===t&&n.unshift("inprogress"),delete o.stop,r.call(e,s,o)),!i&&o&&o.empty.fire()},_queueHooks:function(e,t){var n=t+"queueHooks";return Y.get(e,n)||Y.access(e,n,{empty:y.Callbacks("once memory").add(function(){Y.remove(e,[t+"queue",n])})})}}),y.fn.extend({queue:function(e,t){var n=2;return"string"!=typeof e&&(t=e,e="fx",n--),arguments.length<n?y.queue(this[0],e):void 0===t?this:this.each(function(){var n=y.queue(this,e,t);y._queueHooks(this,e),"fx"===e&&"inprogress"!==n[0]&&y.dequeue(this,e)})},dequeue:function(e){return this.each(function(){y.dequeue(this,e)})},clearQueue:function(e){return this.queue(e||"fx",[])},promise:function(e,t){var n,i=1,r=y.Deferred(),o=this,s=this.length,a=function(){--i||r.resolveWith(o,[o])};"string"!=typeof e&&(t=e,e=void 0),e=e||"fx";while(s--)(n=Y.get(o[s],e+"queueHooks"))&&n.empty&&(i++,n.empty.add(a));return a(),r.promise(t)}});var ee=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,te=new RegExp("^(?:([+-])=|)("+ee+")([a-z%]*)$","i"),ne=["Top","Right","Bottom","Left"],ie=function(e,t){return"none"===(e=t||e).style.display||""===e.style.display&&y.contains(e.ownerDocument,e)&&"none"===y.css(e,"display")},re=function(e,t,n,i){var r,o,s={};for(o in t)s[o]=e.style[o],e.style[o]=t[o];r=n.apply(e,i||[]);for(o in t)e.style[o]=s[o];return r};function oe(e,t,n,i){var r,o,s=20,a=i?function(){return i.cur()}:function(){return y.css(e,t,"")},u=a(),l=n&&n[3]||(y.cssNumber[t]?"":"px"),c=(y.cssNumber[t]||"px"!==l&&+u)&&te.exec(y.css(e,t));if(c&&c[3]!==l){u/=2,l=l||c[3],c=+u||1;while(s--)y.style(e,t,c+l),(1-o)*(1-(o=a()/u||.5))<=0&&(s=0),c/=o;c*=2,y.style(e,t,c+l),n=n||[]}return n&&(c=+c||+u||0,r=n[1]?c+(n[1]+1)*n[2]:+n[2],i&&(i.unit=l,i.start=c,i.end=r)),r}var se={};function ae(e){var t,n=e.ownerDocument,i=e.nodeName,r=se[i];return r||(t=n.body.appendChild(n.createElement(i)),r=y.css(t,"display"),t.parentNode.removeChild(t),"none"===r&&(r="block"),se[i]=r,r)}function ue(e,t){for(var n,i,r=[],o=0,s=e.length;o<s;o++)(i=e[o]).style&&(n=i.style.display,t?("none"===n&&(r[o]=Y.get(i,"display")||null,r[o]||(i.style.display="")),""===i.style.display&&ie(i)&&(r[o]=ae(i))):"none"!==n&&(r[o]="none",Y.set(i,"display",n)));for(o=0;o<s;o++)null!=r[o]&&(e[o].style.display=r[o]);return e}y.fn.extend({show:function(){return ue(this,!0)},hide:function(){return ue(this)},toggle:function(e){return"boolean"==typeof e?e?this.show():this.hide():this.each(function(){ie(this)?y(this).show():y(this).hide()})}});var le=/^(?:checkbox|radio)$/i,ce=/<([a-z][^\/\0>\x20\t\r\n\f]+)/i,fe=/^$|\/(?:java|ecma)script/i,pe={option:[1,"<select multiple='multiple'>","</select>"],thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};pe.optgroup=pe.option,pe.tbody=pe.tfoot=pe.colgroup=pe.caption=pe.thead,pe.th=pe.td;function de(e,t){var n;return n="undefined"!=typeof e.getElementsByTagName?e.getElementsByTagName(t||"*"):"undefined"!=typeof e.querySelectorAll?e.querySelectorAll(t||"*"):[],void 0===t||t&&D(e,t)?y.merge([e],n):n}function he(e,t){for(var n=0,i=e.length;n<i;n++)Y.set(e[n],"globalEval",!t||Y.get(t[n],"globalEval"))}var ge=/<|&#?\w+;/;function ve(e,t,n,i,r){for(var o,s,a,u,l,c,f=t.createDocumentFragment(),p=[],d=0,h=e.length;d<h;d++)if((o=e[d])||0===o)if("object"===y.type(o))y.merge(p,o.nodeType?[o]:o);else if(ge.test(o)){s=s||f.appendChild(t.createElement("div")),a=(ce.exec(o)||["",""])[1].toLowerCase(),u=pe[a]||pe._default,s.innerHTML=u[1]+y.htmlPrefilter(o)+u[2],c=u[0];while(c--)s=s.lastChild;y.merge(p,s.childNodes),(s=f.firstChild).textContent=""}else p.push(t.createTextNode(o));f.textContent="",d=0;while(o=p[d++])if(i&&y.inArray(o,i)>-1)r&&r.push(o);else if(l=y.contains(o.ownerDocument,o),s=de(f.appendChild(o),"script"),l&&he(s),n){c=0;while(o=s[c++])fe.test(o.type||"")&&n.push(o)}return f}!function(){var e=i.createDocumentFragment().appendChild(i.createElement("div")),t=i.createElement("input");t.setAttribute("type","radio"),t.setAttribute("checked","checked"),t.setAttribute("name","t"),e.appendChild(t),h.checkClone=e.cloneNode(!0).cloneNode(!0).lastChild.checked,e.innerHTML="<textarea>x</textarea>",h.noCloneChecked=!!e.cloneNode(!0).lastChild.defaultValue}();var me=i.documentElement,ye=/^key/,xe=/^(?:mouse|pointer|contextmenu|drag|drop)|click/,be=/^([^.]*)(?:\.(.+)|)/;function we(){return!0}function Ce(){return!1}function Te(){try{return i.activeElement}catch(e){}}function ke(e,t,n,i,r,o){var s,a;if("object"==typeof t){"string"!=typeof n&&(i=i||n,n=void 0);for(a in t)ke(e,a,n,i,t[a],o);return e}if(null==i&&null==r?(r=n,i=n=void 0):null==r&&("string"==typeof n?(r=i,i=void 0):(r=i,i=n,n=void 0)),!1===r)r=Ce;else if(!r)return e;return 1===o&&(s=r,(r=function(e){return y().off(e),s.apply(this,arguments)}).guid=s.guid||(s.guid=y.guid++)),e.each(function(){y.event.add(this,t,r,i,n)})}y.event={global:{},add:function(e,t,n,i,r){var o,s,a,u,l,c,f,p,d,h,g,v=Y.get(e);if(v){n.handler&&(n=(o=n).handler,r=o.selector),r&&y.find.matchesSelector(me,r),n.guid||(n.guid=y.guid++),(u=v.events)||(u=v.events={}),(s=v.handle)||(s=v.handle=function(t){return"undefined"!=typeof y&&y.event.triggered!==t.type?y.event.dispatch.apply(e,arguments):void 0}),l=(t=(t||"").match(I)||[""]).length;while(l--)d=g=(a=be.exec(t[l])||[])[1],h=(a[2]||"").split(".").sort(),d&&(f=y.event.special[d]||{},d=(r?f.delegateType:f.bindType)||d,f=y.event.special[d]||{},c=y.extend({type:d,origType:g,data:i,handler:n,guid:n.guid,selector:r,needsContext:r&&y.expr.match.needsContext.test(r),namespace:h.join(".")},o),(p=u[d])||((p=u[d]=[]).delegateCount=0,f.setup&&!1!==f.setup.call(e,i,h,s)||e.addEventListener&&e.addEventListener(d,s)),f.add&&(f.add.call(e,c),c.handler.guid||(c.handler.guid=n.guid)),r?p.splice(p.delegateCount++,0,c):p.push(c),y.event.global[d]=!0)}},remove:function(e,t,n,i,r){var o,s,a,u,l,c,f,p,d,h,g,v=Y.hasData(e)&&Y.get(e);if(v&&(u=v.events)){l=(t=(t||"").match(I)||[""]).length;while(l--)if(a=be.exec(t[l])||[],d=g=a[1],h=(a[2]||"").split(".").sort(),d){f=y.event.special[d]||{},p=u[d=(i?f.delegateType:f.bindType)||d]||[],a=a[2]&&new RegExp("(^|\\.)"+h.join("\\.(?:.*\\.|)")+"(\\.|$)"),s=o=p.length;while(o--)c=p[o],!r&&g!==c.origType||n&&n.guid!==c.guid||a&&!a.test(c.namespace)||i&&i!==c.selector&&("**"!==i||!c.selector)||(p.splice(o,1),c.selector&&p.delegateCount--,f.remove&&f.remove.call(e,c));s&&!p.length&&(f.teardown&&!1!==f.teardown.call(e,h,v.handle)||y.removeEvent(e,d,v.handle),delete u[d])}else for(d in u)y.event.remove(e,d+t[l],n,i,!0);y.isEmptyObject(u)&&Y.remove(e,"handle events")}},dispatch:function(e){var t=y.event.fix(e),n,i,r,o,s,a,u=new Array(arguments.length),l=(Y.get(this,"events")||{})[t.type]||[],c=y.event.special[t.type]||{};for(u[0]=t,n=1;n<arguments.length;n++)u[n]=arguments[n];if(t.delegateTarget=this,!c.preDispatch||!1!==c.preDispatch.call(this,t)){a=y.event.handlers.call(this,t,l),n=0;while((o=a[n++])&&!t.isPropagationStopped()){t.currentTarget=o.elem,i=0;while((s=o.handlers[i++])&&!t.isImmediatePropagationStopped())t.rnamespace&&!t.rnamespace.test(s.namespace)||(t.handleObj=s,t.data=s.data,void 0!==(r=((y.event.special[s.origType]||{}).handle||s.handler).apply(o.elem,u))&&!1===(t.result=r)&&(t.preventDefault(),t.stopPropagation()))}return c.postDispatch&&c.postDispatch.call(this,t),t.result}},handlers:function(e,t){var n,i,r,o,s,a=[],u=t.delegateCount,l=e.target;if(u&&l.nodeType&&!("click"===e.type&&e.button>=1))for(;l!==this;l=l.parentNode||this)if(1===l.nodeType&&("click"!==e.type||!0!==l.disabled)){for(o=[],s={},n=0;n<u;n++)void 0===s[r=(i=t[n]).selector+" "]&&(s[r]=i.needsContext?y(r,this).index(l)>-1:y.find(r,this,null,[l]).length),s[r]&&o.push(i);o.length&&a.push({elem:l,handlers:o})}return l=this,u<t.length&&a.push({elem:l,handlers:t.slice(u)}),a},addProp:function(e,t){Object.defineProperty(y.Event.prototype,e,{enumerable:!0,configurable:!0,get:y.isFunction(t)?function(){if(this.originalEvent)return t(this.originalEvent)}:function(){if(this.originalEvent)return this.originalEvent[e]},set:function(t){Object.defineProperty(this,e,{enumerable:!0,configurable:!0,writable:!0,value:t})}})},fix:function(e){return e[y.expando]?e:new y.Event(e)},special:{load:{noBubble:!0},focus:{trigger:function(){if(this!==Te()&&this.focus)return this.focus(),!1},delegateType:"focusin"},blur:{trigger:function(){if(this===Te()&&this.blur)return this.blur(),!1},delegateType:"focusout"},click:{trigger:function(){if("checkbox"===this.type&&this.click&&D(this,"input"))return this.click(),!1},_default:function(e){return D(e.target,"a")}},beforeunload:{postDispatch:function(e){void 0!==e.result&&e.originalEvent&&(e.originalEvent.returnValue=e.result)}}}},y.removeEvent=function(e,t,n){e.removeEventListener&&e.removeEventListener(t,n)},y.Event=function(e,t){if(!(this instanceof y.Event))return new y.Event(e,t);e&&e.type?(this.originalEvent=e,this.type=e.type,this.isDefaultPrevented=e.defaultPrevented||void 0===e.defaultPrevented&&!1===e.returnValue?we:Ce,this.target=e.target&&3===e.target.nodeType?e.target.parentNode:e.target,this.currentTarget=e.currentTarget,this.relatedTarget=e.relatedTarget):this.type=e,t&&y.extend(this,t),this.timeStamp=e&&e.timeStamp||y.now(),this[y.expando]=!0},y.Event.prototype={constructor:y.Event,isDefaultPrevented:Ce,isPropagationStopped:Ce,isImmediatePropagationStopped:Ce,isSimulated:!1,preventDefault:function(){var e=this.originalEvent;this.isDefaultPrevented=we,e&&!this.isSimulated&&e.preventDefault()},stopPropagation:function(){var e=this.originalEvent;this.isPropagationStopped=we,e&&!this.isSimulated&&e.stopPropagation()},stopImmediatePropagation:function(){var e=this.originalEvent;this.isImmediatePropagationStopped=we,e&&!this.isSimulated&&e.stopImmediatePropagation(),this.stopPropagation()}},y.each({altKey:!0,bubbles:!0,cancelable:!0,changedTouches:!0,ctrlKey:!0,detail:!0,eventPhase:!0,metaKey:!0,pageX:!0,pageY:!0,shiftKey:!0,view:!0,char:!0,charCode:!0,key:!0,keyCode:!0,button:!0,buttons:!0,clientX:!0,clientY:!0,offsetX:!0,offsetY:!0,pointerId:!0,pointerType:!0,screenX:!0,screenY:!0,targetTouches:!0,toElement:!0,touches:!0,which:function(e){var t=e.button;return null==e.which&&ye.test(e.type)?null!=e.charCode?e.charCode:e.keyCode:!e.which&&void 0!==t&&xe.test(e.type)?1&t?1:2&t?3:4&t?2:0:e.which}},y.event.addProp),y.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(e,t){y.event.special[e]={delegateType:t,bindType:t,handle:function(e){var n,i=this,r=e.relatedTarget,o=e.handleObj;return r&&(r===i||y.contains(i,r))||(e.type=o.origType,n=o.handler.apply(this,arguments),e.type=t),n}}}),y.fn.extend({on:function(e,t,n,i){return ke(this,e,t,n,i)},one:function(e,t,n,i){return ke(this,e,t,n,i,1)},off:function(e,t,n){var i,r;if(e&&e.preventDefault&&e.handleObj)return i=e.handleObj,y(e.delegateTarget).off(i.namespace?i.origType+"."+i.namespace:i.origType,i.selector,i.handler),this;if("object"==typeof e){for(r in e)this.off(r,t,e[r]);return this}return!1!==t&&"function"!=typeof t||(n=t,t=void 0),!1===n&&(n=Ce),this.each(function(){y.event.remove(this,e,n,t)})}});var Ee=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,Ne=/<script|<style|<link/i,Ae=/checked\s*(?:[^=]|=\s*.checked.)/i,De=/^true\/(.*)/,Se=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;function qe(e,t){return D(e,"table")&&D(11!==t.nodeType?t:t.firstChild,"tr")?y(">tbody",e)[0]||e:e}function Le(e){return e.type=(null!==e.getAttribute("type"))+"/"+e.type,e}function je(e){var t=De.exec(e.type);return t?e.type=t[1]:e.removeAttribute("type"),e}function He(e,t){var n,i,r,o,s,a,u,l;if(1===t.nodeType){if(Y.hasData(e)&&(o=Y.access(e),s=Y.set(t,o),l=o.events)){delete s.handle,s.events={};for(r in l)for(n=0,i=l[r].length;n<i;n++)y.event.add(t,r,l[r][n])}Q.hasData(e)&&(a=Q.access(e),u=y.extend({},a),Q.set(t,u))}}function Fe(e,t){var n=t.nodeName.toLowerCase();"input"===n&&le.test(e.type)?t.checked=e.checked:"input"!==n&&"textarea"!==n||(t.defaultValue=e.defaultValue)}function Oe(e,t,n,i){t=s.apply([],t);var r,o,a,u,l,c,f=0,p=e.length,d=p-1,g=t[0],m=y.isFunction(g);if(m||p>1&&"string"==typeof g&&!h.checkClone&&Ae.test(g))return e.each(function(r){var o=e.eq(r);m&&(t[0]=g.call(this,r,o.html())),Oe(o,t,n,i)});if(p&&(r=ve(t,e[0].ownerDocument,!1,e,i),o=r.firstChild,1===r.childNodes.length&&(r=o),o||i)){for(u=(a=y.map(de(r,"script"),Le)).length;f<p;f++)l=r,f!==d&&(l=y.clone(l,!0,!0),u&&y.merge(a,de(l,"script"))),n.call(e[f],l,f);if(u)for(c=a[a.length-1].ownerDocument,y.map(a,je),f=0;f<u;f++)l=a[f],fe.test(l.type||"")&&!Y.access(l,"globalEval")&&y.contains(c,l)&&(l.src?y._evalUrl&&y._evalUrl(l.src):v(l.textContent.replace(Se,""),c))}return e}function Pe(e,t,n){for(var i,r=t?y.filter(t,e):e,o=0;null!=(i=r[o]);o++)n||1!==i.nodeType||y.cleanData(de(i)),i.parentNode&&(n&&y.contains(i.ownerDocument,i)&&he(de(i,"script")),i.parentNode.removeChild(i));return e}y.extend({htmlPrefilter:function(e){return e.replace(Ee,"<$1></$2>")},clone:function(e,t,n){var i,r,o,s,a=e.cloneNode(!0),u=y.contains(e.ownerDocument,e);if(!(h.noCloneChecked||1!==e.nodeType&&11!==e.nodeType||y.isXMLDoc(e)))for(s=de(a),i=0,r=(o=de(e)).length;i<r;i++)Fe(o[i],s[i]);if(t)if(n)for(o=o||de(e),s=s||de(a),i=0,r=o.length;i<r;i++)He(o[i],s[i]);else He(e,a);return(s=de(a,"script")).length>0&&he(s,!u&&de(e,"script")),a},cleanData:function(e){for(var t,n,i,r=y.event.special,o=0;void 0!==(n=e[o]);o++)if(X(n)){if(t=n[Y.expando]){if(t.events)for(i in t.events)r[i]?y.event.remove(n,i):y.removeEvent(n,i,t.handle);n[Y.expando]=void 0}n[Q.expando]&&(n[Q.expando]=void 0)}}}),y.fn.extend({detach:function(e){return Pe(this,e,!0)},remove:function(e){return Pe(this,e)},text:function(e){return U(this,function(e){return void 0===e?y.text(this):this.empty().each(function(){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||(this.textContent=e)})},null,e,arguments.length)},append:function(){return Oe(this,arguments,function(e){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||qe(this,e).appendChild(e)})},prepend:function(){return Oe(this,arguments,function(e){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var t=qe(this,e);t.insertBefore(e,t.firstChild)}})},before:function(){return Oe(this,arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this)})},after:function(){return Oe(this,arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this.nextSibling)})},empty:function(){for(var e,t=0;null!=(e=this[t]);t++)1===e.nodeType&&(y.cleanData(de(e,!1)),e.textContent="");return this},clone:function(e,t){return e=null!=e&&e,t=null==t?e:t,this.map(function(){return y.clone(this,e,t)})},html:function(e){return U(this,function(e){var t=this[0]||{},n=0,i=this.length;if(void 0===e&&1===t.nodeType)return t.innerHTML;if("string"==typeof e&&!Ne.test(e)&&!pe[(ce.exec(e)||["",""])[1].toLowerCase()]){e=y.htmlPrefilter(e);try{for(;n<i;n++)1===(t=this[n]||{}).nodeType&&(y.cleanData(de(t,!1)),t.innerHTML=e);t=0}catch(e){}}t&&this.empty().append(e)},null,e,arguments.length)},replaceWith:function(){var e=[];return Oe(this,arguments,function(t){var n=this.parentNode;y.inArray(this,e)<0&&(y.cleanData(de(this)),n&&n.replaceChild(t,this))},e)}}),y.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(e,t){y.fn[e]=function(e){for(var n,i=[],r=y(e),o=r.length-1,s=0;s<=o;s++)n=s===o?this:this.clone(!0),y(r[s])[t](n),a.apply(i,n.get());return this.pushStack(i)}});var Ie=/^margin/,Re=new RegExp("^("+ee+")(?!px)[a-z%]+$","i"),Me=function(t){var n=t.ownerDocument.defaultView;return n&&n.opener||(n=e),n.getComputedStyle(t)};!function(){function t(){if(l){u.style.cssText="position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0",l.style.cssText="position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%",me.appendChild(u).appendChild(l);var t=e.getComputedStyle(l);n="1%"!==t.top,a="12px"===t.marginLeft,l.style.marginRight="60%",s="36px"===t.marginRight,r="36px"===t.width,l.style.position="absolute",o=36===l.offsetWidth||"absolute",me.removeChild(u),l=null}}var n,r,o,s,a,u=i.createElement("div"),l=i.createElement("div");l.style&&(l.style.backgroundClip="content-box",l.cloneNode(!0).style.backgroundClip="",h.clearCloneStyle="content-box"===l.style.backgroundClip,y.extend(h,{boxSizingReliable:function(){return t(),r},pixelPosition:function(){return t(),n},pixelMarginRight:function(){return t(),s},reliableMarginLeft:function(){return t(),a},scrollboxSize:function(){return t(),o}}))}();function We(e,t,n){var i,r,o,s,a=e.style;return(n=n||Me(e))&&(""!==(s=n.getPropertyValue(t)||n[t])||y.contains(e.ownerDocument,e)||(s=y.style(e,t)),!h.pixelMarginRight()&&Re.test(s)&&Ie.test(t)&&(i=a.width,r=a.minWidth,o=a.maxWidth,a.minWidth=a.maxWidth=a.width=s,s=n.width,a.width=i,a.minWidth=r,a.maxWidth=o)),void 0!==s?s+"":s}function Be(e,t){return{get:function(){if(!e())return(this.get=t).apply(this,arguments);delete this.get}}}var $e=/^(none|table(?!-c[ea]).+)/,_e=/^--/,ze={position:"absolute",visibility:"hidden",display:"block"},Ue={letterSpacing:"0",fontWeight:"400"},Xe=["Webkit","Moz","ms"],Ve=i.createElement("div").style;function Ye(e){if(e in Ve)return e;var t=e[0].toUpperCase()+e.slice(1),n=Xe.length;while(n--)if((e=Xe[n]+t)in Ve)return e}function Qe(e){var t=y.cssProps[e];return t||(t=y.cssProps[e]=Ye(e)||e),t}function Ge(e,t,n){var i=te.exec(t);return i?Math.max(0,i[2]-(n||0))+(i[3]||"px"):t}function Ke(e,t,n,i,r,o){var s="width"===t?1:0,a=0,u=0;if(n===(i?"border":"content"))return 0;for(;s<4;s+=2)"margin"===n&&(u+=y.css(e,n+ne[s],!0,r)),i?("content"===n&&(u-=y.css(e,"padding"+ne[s],!0,r)),"margin"!==n&&(u-=y.css(e,"border"+ne[s]+"Width",!0,r))):(u+=y.css(e,"padding"+ne[s],!0,r),"padding"!==n?u+=y.css(e,"border"+ne[s]+"Width",!0,r):a+=y.css(e,"border"+ne[s]+"Width",!0,r));return!i&&o>=0&&(u+=Math.max(0,Math.ceil(e["offset"+t[0].toUpperCase()+t.slice(1)]-o-u-a-.5))),u}function Je(e,t,n){var i=Me(e),r=We(e,t,i),o="border-box"===y.css(e,"boxSizing",!1,i),s=o;if(Re.test(r)){if(!n)return r;r="auto"}return s=s&&(h.boxSizingReliable()||r===e.style[t]),("auto"===r||!parseFloat(r)&&"inline"===y.css(e,"display",!1,i))&&(r=e["offset"+t[0].toUpperCase()+t.slice(1)],s=!0),(r=parseFloat(r)||0)+Ke(e,t,n||(o?"border":"content"),s,i,r)+"px"}y.extend({cssHooks:{opacity:{get:function(e,t){if(t){var n=We(e,"opacity");return""===n?"1":n}}}},cssNumber:{animationIterationCount:!0,columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{},style:function(e,t,n,i){if(e&&3!==e.nodeType&&8!==e.nodeType&&e.style){var r,o,s,a=y.camelCase(t),u=_e.test(t),l=e.style;if(u||(t=Qe(a)),s=y.cssHooks[t]||y.cssHooks[a],void 0===n)return s&&"get"in s&&void 0!==(r=s.get(e,!1,i))?r:l[t];"string"==(o=typeof n)&&(r=te.exec(n))&&r[1]&&(n=oe(e,t,r),o="number"),null!=n&&n===n&&("number"===o&&(n+=r&&r[3]||(y.cssNumber[a]?"":"px")),h.clearCloneStyle||""!==n||0!==t.indexOf("background")||(l[t]="inherit"),s&&"set"in s&&void 0===(n=s.set(e,n,i))||(u?l.setProperty(t,n):l[t]=n))}},css:function(e,t,n,i){var r,o,s,a=y.camelCase(t);return _e.test(t)||(t=Qe(a)),(s=y.cssHooks[t]||y.cssHooks[a])&&"get"in s&&(r=s.get(e,!0,n)),void 0===r&&(r=We(e,t,i)),"normal"===r&&t in Ue&&(r=Ue[t]),""===n||n?(o=parseFloat(r),!0===n||isFinite(o)?o||0:r):r}}),y.each(["height","width"],function(e,t){y.cssHooks[t]={get:function(e,n,i){if(n)return!$e.test(y.css(e,"display"))||e.getClientRects().length&&e.getBoundingClientRect().width?Je(e,t,i):re(e,ze,function(){return Je(e,t,i)})},set:function(e,n,i){var r,o=Me(e),s="border-box"===y.css(e,"boxSizing",!1,o),a=i&&Ke(e,t,i,s,o);return s&&h.scrollboxSize()===o.position&&(a-=Math.ceil(e["offset"+t[0].toUpperCase()+t.slice(1)]-parseFloat(o[t])-Ke(e,t,"border",!1,o)-.5)),a&&(r=te.exec(n))&&"px"!==(r[3]||"px")&&(e.style[t]=n,n=y.css(e,t)),Ge(e,n,a)}}}),y.cssHooks.marginLeft=Be(h.reliableMarginLeft,function(e,t){if(t)return(parseFloat(We(e,"marginLeft"))||e.getBoundingClientRect().left-re(e,{marginLeft:0},function(){return e.getBoundingClientRect().left}))+"px"}),y.each({margin:"",padding:"",border:"Width"},function(e,t){y.cssHooks[e+t]={expand:function(n){for(var i=0,r={},o="string"==typeof n?n.split(" "):[n];i<4;i++)r[e+ne[i]+t]=o[i]||o[i-2]||o[0];return r}},Ie.test(e)||(y.cssHooks[e+t].set=Ge)}),y.fn.extend({css:function(e,t){return U(this,function(e,t,n){var i,r,o={},s=0;if(Array.isArray(t)){for(i=Me(e),r=t.length;s<r;s++)o[t[s]]=y.css(e,t[s],!1,i);return o}return void 0!==n?y.style(e,t,n):y.css(e,t)},e,t,arguments.length>1)}});function Ze(e,t,n,i,r){return new Ze.prototype.init(e,t,n,i,r)}y.Tween=Ze,Ze.prototype={constructor:Ze,init:function(e,t,n,i,r,o){this.elem=e,this.prop=n,this.easing=r||y.easing._default,this.options=t,this.start=this.now=this.cur(),this.end=i,this.unit=o||(y.cssNumber[n]?"":"px")},cur:function(){var e=Ze.propHooks[this.prop];return e&&e.get?e.get(this):Ze.propHooks._default.get(this)},run:function(e){var t,n=Ze.propHooks[this.prop];return this.options.duration?this.pos=t=y.easing[this.easing](e,this.options.duration*e,0,1,this.options.duration):this.pos=t=e,this.now=(this.end-this.start)*t+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),n&&n.set?n.set(this):Ze.propHooks._default.set(this),this}},Ze.prototype.init.prototype=Ze.prototype,Ze.propHooks={_default:{get:function(e){var t;return 1!==e.elem.nodeType||null!=e.elem[e.prop]&&null==e.elem.style[e.prop]?e.elem[e.prop]:(t=y.css(e.elem,e.prop,""))&&"auto"!==t?t:0},set:function(e){y.fx.step[e.prop]?y.fx.step[e.prop](e):1!==e.elem.nodeType||null==e.elem.style[y.cssProps[e.prop]]&&!y.cssHooks[e.prop]?e.elem[e.prop]=e.now:y.style(e.elem,e.prop,e.now+e.unit)}}},Ze.propHooks.scrollTop=Ze.propHooks.scrollLeft={set:function(e){e.elem.nodeType&&e.elem.parentNode&&(e.elem[e.prop]=e.now)}},y.easing={linear:function(e){return e},swing:function(e){return.5-Math.cos(e*Math.PI)/2},_default:"swing"},y.fx=Ze.prototype.init,y.fx.step={};var et,tt,nt=/^(?:toggle|show|hide)$/,it=/queueHooks$/;function rt(){tt&&(!1===i.hidden&&e.requestAnimationFrame?e.requestAnimationFrame(rt):e.setTimeout(rt,y.fx.interval),y.fx.tick())}function ot(){return e.setTimeout(function(){et=void 0}),et=y.now()}function st(e,t){var n,i=0,r={height:e};for(t=t?1:0;i<4;i+=2-t)r["margin"+(n=ne[i])]=r["padding"+n]=e;return t&&(r.opacity=r.width=e),r}function at(e,t,n){for(var i,r=(ct.tweeners[t]||[]).concat(ct.tweeners["*"]),o=0,s=r.length;o<s;o++)if(i=r[o].call(n,t,e))return i}function ut(e,t,n){var i,r,o,s,a,u,l,c,f="width"in t||"height"in t,p=this,d={},h=e.style,g=e.nodeType&&ie(e),v=Y.get(e,"fxshow");n.queue||(null==(s=y._queueHooks(e,"fx")).unqueued&&(s.unqueued=0,a=s.empty.fire,s.empty.fire=function(){s.unqueued||a()}),s.unqueued++,p.always(function(){p.always(function(){s.unqueued--,y.queue(e,"fx").length||s.empty.fire()})}));for(i in t)if(r=t[i],nt.test(r)){if(delete t[i],o=o||"toggle"===r,r===(g?"hide":"show")){if("show"!==r||!v||void 0===v[i])continue;g=!0}d[i]=v&&v[i]||y.style(e,i)}if((u=!y.isEmptyObject(t))||!y.isEmptyObject(d)){f&&1===e.nodeType&&(n.overflow=[h.overflow,h.overflowX,h.overflowY],null==(l=v&&v.display)&&(l=Y.get(e,"display")),"none"===(c=y.css(e,"display"))&&(l?c=l:(ue([e],!0),l=e.style.display||l,c=y.css(e,"display"),ue([e]))),("inline"===c||"inline-block"===c&&null!=l)&&"none"===y.css(e,"float")&&(u||(p.done(function(){h.display=l}),null==l&&(c=h.display,l="none"===c?"":c)),h.display="inline-block")),n.overflow&&(h.overflow="hidden",p.always(function(){h.overflow=n.overflow[0],h.overflowX=n.overflow[1],h.overflowY=n.overflow[2]})),u=!1;for(i in d)u||(v?"hidden"in v&&(g=v.hidden):v=Y.access(e,"fxshow",{display:l}),o&&(v.hidden=!g),g&&ue([e],!0),p.done(function(){g||ue([e]),Y.remove(e,"fxshow");for(i in d)y.style(e,i,d[i])})),u=at(g?v[i]:0,i,p),i in v||(v[i]=u.start,g&&(u.end=u.start,u.start=0))}}function lt(e,t){var n,i,r,o,s;for(n in e)if(i=y.camelCase(n),r=t[i],o=e[n],Array.isArray(o)&&(r=o[1],o=e[n]=o[0]),n!==i&&(e[i]=o,delete e[n]),(s=y.cssHooks[i])&&"expand"in s){o=s.expand(o),delete e[i];for(n in o)n in e||(e[n]=o[n],t[n]=r)}else t[i]=r}function ct(e,t,n){var i,r,o=0,s=ct.prefilters.length,a=y.Deferred().always(function(){delete u.elem}),u=function(){if(r)return!1;for(var t=et||ot(),n=Math.max(0,l.startTime+l.duration-t),i=1-(n/l.duration||0),o=0,s=l.tweens.length;o<s;o++)l.tweens[o].run(i);return a.notifyWith(e,[l,i,n]),i<1&&s?n:(s||a.notifyWith(e,[l,1,0]),a.resolveWith(e,[l]),!1)},l=a.promise({elem:e,props:y.extend({},t),opts:y.extend(!0,{specialEasing:{},easing:y.easing._default},n),originalProperties:t,originalOptions:n,startTime:et||ot(),duration:n.duration,tweens:[],createTween:function(t,n){var i=y.Tween(e,l.opts,t,n,l.opts.specialEasing[t]||l.opts.easing);return l.tweens.push(i),i},stop:function(t){var n=0,i=t?l.tweens.length:0;if(r)return this;for(r=!0;n<i;n++)l.tweens[n].run(1);return t?(a.notifyWith(e,[l,1,0]),a.resolveWith(e,[l,t])):a.rejectWith(e,[l,t]),this}}),c=l.props;for(lt(c,l.opts.specialEasing);o<s;o++)if(i=ct.prefilters[o].call(l,e,c,l.opts))return y.isFunction(i.stop)&&(y._queueHooks(l.elem,l.opts.queue).stop=y.proxy(i.stop,i)),i;return y.map(c,at,l),y.isFunction(l.opts.start)&&l.opts.start.call(e,l),l.progress(l.opts.progress).done(l.opts.done,l.opts.complete).fail(l.opts.fail).always(l.opts.always),y.fx.timer(y.extend(u,{elem:e,anim:l,queue:l.opts.queue})),l}y.Animation=y.extend(ct,{tweeners:{"*":[function(e,t){var n=this.createTween(e,t);return oe(n.elem,e,te.exec(t),n),n}]},tweener:function(e,t){y.isFunction(e)?(t=e,e=["*"]):e=e.match(I);for(var n,i=0,r=e.length;i<r;i++)n=e[i],ct.tweeners[n]=ct.tweeners[n]||[],ct.tweeners[n].unshift(t)},prefilters:[ut],prefilter:function(e,t){t?ct.prefilters.unshift(e):ct.prefilters.push(e)}}),y.speed=function(e,t,n){var i=e&&"object"==typeof e?y.extend({},e):{complete:n||!n&&t||y.isFunction(e)&&e,duration:e,easing:n&&t||t&&!y.isFunction(t)&&t};return y.fx.off?i.duration=0:"number"!=typeof i.duration&&(i.duration in y.fx.speeds?i.duration=y.fx.speeds[i.duration]:i.duration=y.fx.speeds._default),null!=i.queue&&!0!==i.queue||(i.queue="fx"),i.old=i.complete,i.complete=function(){y.isFunction(i.old)&&i.old.call(this),i.queue&&y.dequeue(this,i.queue)},i},y.fn.extend({fadeTo:function(e,t,n,i){return this.filter(ie).css("opacity",0).show().end().animate({opacity:t},e,n,i)},animate:function(e,t,n,i){var r=y.isEmptyObject(e),o=y.speed(t,n,i),s=function(){var t=ct(this,y.extend({},e),o);(r||Y.get(this,"finish"))&&t.stop(!0)};return s.finish=s,r||!1===o.queue?this.each(s):this.queue(o.queue,s)},stop:function(e,t,n){var i=function(e){var t=e.stop;delete e.stop,t(n)};return"string"!=typeof e&&(n=t,t=e,e=void 0),t&&!1!==e&&this.queue(e||"fx",[]),this.each(function(){var t=!0,r=null!=e&&e+"queueHooks",o=y.timers,s=Y.get(this);if(r)s[r]&&s[r].stop&&i(s[r]);else for(r in s)s[r]&&s[r].stop&&it.test(r)&&i(s[r]);for(r=o.length;r--;)o[r].elem!==this||null!=e&&o[r].queue!==e||(o[r].anim.stop(n),t=!1,o.splice(r,1));!t&&n||y.dequeue(this,e)})},finish:function(e){return!1!==e&&(e=e||"fx"),this.each(function(){var t,n=Y.get(this),i=n[e+"queue"],r=n[e+"queueHooks"],o=y.timers,s=i?i.length:0;for(n.finish=!0,y.queue(this,e,[]),r&&r.stop&&r.stop.call(this,!0),t=o.length;t--;)o[t].elem===this&&o[t].queue===e&&(o[t].anim.stop(!0),o.splice(t,1));for(t=0;t<s;t++)i[t]&&i[t].finish&&i[t].finish.call(this);delete n.finish})}}),y.each(["toggle","show","hide"],function(e,t){var n=y.fn[t];y.fn[t]=function(e,i,r){return null==e||"boolean"==typeof e?n.apply(this,arguments):this.animate(st(t,!0),e,i,r)}}),y.each({slideDown:st("show"),slideUp:st("hide"),slideToggle:st("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(e,t){y.fn[e]=function(e,n,i){return this.animate(t,e,n,i)}}),y.timers=[],y.fx.tick=function(){var e,t=0,n=y.timers;for(et=y.now();t<n.length;t++)(e=n[t])()||n[t]!==e||n.splice(t--,1);n.length||y.fx.stop(),et=void 0},y.fx.timer=function(e){y.timers.push(e),y.fx.start()},y.fx.interval=13,y.fx.start=function(){tt||(tt=!0,rt())},y.fx.stop=function(){tt=null},y.fx.speeds={slow:600,fast:200,_default:400},y.fn.delay=function(t,n){return t=y.fx?y.fx.speeds[t]||t:t,n=n||"fx",this.queue(n,function(n,i){var r=e.setTimeout(n,t);i.stop=function(){e.clearTimeout(r)}})},function(){var e=i.createElement("input"),t=i.createElement("select").appendChild(i.createElement("option"));e.type="checkbox",h.checkOn=""!==e.value,h.optSelected=t.selected,(e=i.createElement("input")).value="t",e.type="radio",h.radioValue="t"===e.value}();var ft,pt=y.expr.attrHandle;y.fn.extend({attr:function(e,t){return U(this,y.attr,e,t,arguments.length>1)},removeAttr:function(e){return this.each(function(){y.removeAttr(this,e)})}}),y.extend({attr:function(e,t,n){var i,r,o=e.nodeType;if(3!==o&&8!==o&&2!==o)return"undefined"==typeof e.getAttribute?y.prop(e,t,n):(1===o&&y.isXMLDoc(e)||(r=y.attrHooks[t.toLowerCase()]||(y.expr.match.bool.test(t)?ft:void 0)),void 0!==n?null===n?void y.removeAttr(e,t):r&&"set"in r&&void 0!==(i=r.set(e,n,t))?i:(e.setAttribute(t,n+""),n):r&&"get"in r&&null!==(i=r.get(e,t))?i:null==(i=y.find.attr(e,t))?void 0:i)},attrHooks:{type:{set:function(e,t){if(!h.radioValue&&"radio"===t&&D(e,"input")){var n=e.value;return e.setAttribute("type",t),n&&(e.value=n),t}}}},removeAttr:function(e,t){var n,i=0,r=t&&t.match(I);if(r&&1===e.nodeType)while(n=r[i++])e.removeAttribute(n)}}),ft={set:function(e,t,n){return!1===t?y.removeAttr(e,n):e.setAttribute(n,n),n}},y.each(y.expr.match.bool.source.match(/\w+/g),function(e,t){var n=pt[t]||y.find.attr;pt[t]=function(e,t,i){var r,o,s=t.toLowerCase();return i||(o=pt[s],pt[s]=r,r=null!=n(e,t,i)?s:null,pt[s]=o),r}});var dt=/^(?:input|select|textarea|button)$/i,ht=/^(?:a|area)$/i;y.fn.extend({prop:function(e,t){return U(this,y.prop,e,t,arguments.length>1)},removeProp:function(e){return this.each(function(){delete this[y.propFix[e]||e]})}}),y.extend({prop:function(e,t,n){var i,r,o=e.nodeType;if(3!==o&&8!==o&&2!==o)return 1===o&&y.isXMLDoc(e)||(t=y.propFix[t]||t,r=y.propHooks[t]),void 0!==n?r&&"set"in r&&void 0!==(i=r.set(e,n,t))?i:e[t]=n:r&&"get"in r&&null!==(i=r.get(e,t))?i:e[t]},propHooks:{tabIndex:{get:function(e){var t=y.find.attr(e,"tabindex");return t?parseInt(t,10):dt.test(e.nodeName)||ht.test(e.nodeName)&&e.href?0:-1}}},propFix:{for:"htmlFor",class:"className"}}),h.optSelected||(y.propHooks.selected={get:function(e){var t=e.parentNode;return t&&t.parentNode&&t.parentNode.selectedIndex,null},set:function(e){var t=e.parentNode;t&&(t.selectedIndex,t.parentNode&&t.parentNode.selectedIndex)}}),y.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){y.propFix[this.toLowerCase()]=this});function gt(e){return(e.match(I)||[]).join(" ")}function vt(e){return e.getAttribute&&e.getAttribute("class")||""}y.fn.extend({addClass:function(e){var t,n,i,r,o,s,a,u=0;if(y.isFunction(e))return this.each(function(t){y(this).addClass(e.call(this,t,vt(this)))});if("string"==typeof e&&e){t=e.match(I)||[];while(n=this[u++])if(r=vt(n),i=1===n.nodeType&&" "+gt(r)+" "){s=0;while(o=t[s++])i.indexOf(" "+o+" ")<0&&(i+=o+" ");r!==(a=gt(i))&&n.setAttribute("class",a)}}return this},removeClass:function(e){var t,n,i,r,o,s,a,u=0;if(y.isFunction(e))return this.each(function(t){y(this).removeClass(e.call(this,t,vt(this)))});if(!arguments.length)return this.attr("class","");if("string"==typeof e&&e){t=e.match(I)||[];while(n=this[u++])if(r=vt(n),i=1===n.nodeType&&" "+gt(r)+" "){s=0;while(o=t[s++])while(i.indexOf(" "+o+" ")>-1)i=i.replace(" "+o+" "," ");r!==(a=gt(i))&&n.setAttribute("class",a)}}return this},toggleClass:function(e,t){var n=typeof e;return"boolean"==typeof t&&"string"===n?t?this.addClass(e):this.removeClass(e):y.isFunction(e)?this.each(function(n){y(this).toggleClass(e.call(this,n,vt(this),t),t)}):this.each(function(){var t,i,r,o;if("string"===n){i=0,r=y(this),o=e.match(I)||[];while(t=o[i++])r.hasClass(t)?r.removeClass(t):r.addClass(t)}else void 0!==e&&"boolean"!==n||((t=vt(this))&&Y.set(this,"__className__",t),this.setAttribute&&this.setAttribute("class",t||!1===e?"":Y.get(this,"__className__")||""))})},hasClass:function(e){var t,n,i=0;t=" "+e+" ";while(n=this[i++])if(1===n.nodeType&&(" "+gt(vt(n))+" ").indexOf(t)>-1)return!0;return!1}});var mt=/\r/g;y.fn.extend({val:function(e){var t,n,i,r=this[0];{if(arguments.length)return i=y.isFunction(e),this.each(function(n){var r;1===this.nodeType&&(null==(r=i?e.call(this,n,y(this).val()):e)?r="":"number"==typeof r?r+="":Array.isArray(r)&&(r=y.map(r,function(e){return null==e?"":e+""})),(t=y.valHooks[this.type]||y.valHooks[this.nodeName.toLowerCase()])&&"set"in t&&void 0!==t.set(this,r,"value")||(this.value=r))});if(r)return(t=y.valHooks[r.type]||y.valHooks[r.nodeName.toLowerCase()])&&"get"in t&&void 0!==(n=t.get(r,"value"))?n:"string"==typeof(n=r.value)?n.replace(mt,""):null==n?"":n}}}),y.extend({valHooks:{option:{get:function(e){var t=y.find.attr(e,"value");return null!=t?t:gt(y.text(e))}},select:{get:function(e){var t,n,i,r=e.options,o=e.selectedIndex,s="select-one"===e.type,a=s?null:[],u=s?o+1:r.length;for(i=o<0?u:s?o:0;i<u;i++)if(((n=r[i]).selected||i===o)&&!n.disabled&&(!n.parentNode.disabled||!D(n.parentNode,"optgroup"))){if(t=y(n).val(),s)return t;a.push(t)}return a},set:function(e,t){var n,i,r=e.options,o=y.makeArray(t),s=r.length;while(s--)((i=r[s]).selected=y.inArray(y.valHooks.option.get(i),o)>-1)&&(n=!0);return n||(e.selectedIndex=-1),o}}}}),y.each(["radio","checkbox"],function(){y.valHooks[this]={set:function(e,t){if(Array.isArray(t))return e.checked=y.inArray(y(e).val(),t)>-1}},h.checkOn||(y.valHooks[this].get=function(e){return null===e.getAttribute("value")?"on":e.value})});var yt=/^(?:focusinfocus|focusoutblur)$/,xt=function(e){e.stopPropagation()};y.extend(y.event,{trigger:function(t,n,r,o){var s,a,u,l,c,p,d,h,v=[r||i],m=f.call(t,"type")?t.type:t,x=f.call(t,"namespace")?t.namespace.split("."):[];if(a=h=u=r=r||i,3!==r.nodeType&&8!==r.nodeType&&!yt.test(m+y.event.triggered)&&(m.indexOf(".")>-1&&(m=(x=m.split(".")).shift(),x.sort()),c=m.indexOf(":")<0&&"on"+m,t=t[y.expando]?t:new y.Event(m,"object"==typeof t&&t),t.isTrigger=o?2:3,t.namespace=x.join("."),t.rnamespace=t.namespace?new RegExp("(^|\\.)"+x.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,t.result=void 0,t.target||(t.target=r),n=null==n?[t]:y.makeArray(n,[t]),d=y.event.special[m]||{},o||!d.trigger||!1!==d.trigger.apply(r,n))){if(!o&&!d.noBubble&&!g(r)){for(l=d.delegateType||m,yt.test(l+m)||(a=a.parentNode);a;a=a.parentNode)v.push(a),u=a;u===(r.ownerDocument||i)&&v.push(u.defaultView||u.parentWindow||e)}s=0;while((a=v[s++])&&!t.isPropagationStopped())h=a,t.type=s>1?l:d.bindType||m,(p=(Y.get(a,"events")||{})[t.type]&&Y.get(a,"handle"))&&p.apply(a,n),(p=c&&a[c])&&p.apply&&X(a)&&(t.result=p.apply(a,n),!1===t.result&&t.preventDefault());return t.type=m,o||t.isDefaultPrevented()||d._default&&!1!==d._default.apply(v.pop(),n)||!X(r)||c&&y.isFunction(r[m])&&!g(r)&&((u=r[c])&&(r[c]=null),y.event.triggered=m,t.isPropagationStopped()&&h.addEventListener(m,xt),r[m](),t.isPropagationStopped()&&h.removeEventListener(m,xt),y.event.triggered=void 0,u&&(r[c]=u)),t.result}},simulate:function(e,t,n){var i=y.extend(new y.Event,n,{type:e,isSimulated:!0});y.event.trigger(i,null,t)}}),y.fn.extend({trigger:function(e,t){return this.each(function(){y.event.trigger(e,t,this)})},triggerHandler:function(e,t){var n=this[0];if(n)return y.event.trigger(e,t,n,!0)}}),y.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "),function(e,t){y.fn[t]=function(e,n){return arguments.length>0?this.on(t,null,e,n):this.trigger(t)}}),y.fn.extend({hover:function(e,t){return this.mouseenter(e).mouseleave(t||e)}}),h.focusin="onfocusin"in e,h.focusin||y.each({focus:"focusin",blur:"focusout"},function(e,t){var n=function(e){y.event.simulate(t,e.target,y.event.fix(e))};y.event.special[t]={setup:function(){var i=this.ownerDocument||this,r=Y.access(i,t);r||i.addEventListener(e,n,!0),Y.access(i,t,(r||0)+1)},teardown:function(){var i=this.ownerDocument||this,r=Y.access(i,t)-1;r?Y.access(i,t,r):(i.removeEventListener(e,n,!0),Y.remove(i,t))}}});var bt=/\[\]$/,wt=/\r?\n/g,Ct=/^(?:submit|button|image|reset|file)$/i,Tt=/^(?:input|select|textarea|keygen)/i;function kt(e,t,n,i){var r;if(Array.isArray(t))y.each(t,function(t,r){n||bt.test(e)?i(e,r):kt(e+"["+("object"==typeof r&&null!=r?t:"")+"]",r,n,i)});else if(n||"object"!==y.type(t))i(e,t);else for(r in t)kt(e+"["+r+"]",t[r],n,i)}y.param=function(e,t){var n,i=[],r=function(e,t){var n=y.isFunction(t)?t():t;i[i.length]=encodeURIComponent(e)+"="+encodeURIComponent(null==n?"":n)};if(Array.isArray(e)||e.jquery&&!y.isPlainObject(e))y.each(e,function(){r(this.name,this.value)});else for(n in e)kt(n,e[n],t,r);return i.join("&")},y.fn.extend({serialize:function(){return y.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var e=y.prop(this,"elements");return e?y.makeArray(e):this}).filter(function(){var e=this.type;return this.name&&!y(this).is(":disabled")&&Tt.test(this.nodeName)&&!Ct.test(e)&&(this.checked||!le.test(e))}).map(function(e,t){var n=y(this).val();return null==n?null:Array.isArray(n)?y.map(n,function(e){return{name:t.name,value:e.replace(wt,"\r\n")}}):{name:t.name,value:n.replace(wt,"\r\n")}}).get()}}),y.fn.extend({wrapAll:function(e){var t;return this[0]&&(y.isFunction(e)&&(e=e.call(this[0])),t=y(e,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&t.insertBefore(this[0]),t.map(function(){var e=this;while(e.firstElementChild)e=e.firstElementChild;return e}).append(this)),this},wrapInner:function(e){return y.isFunction(e)?this.each(function(t){y(this).wrapInner(e.call(this,t))}):this.each(function(){var t=y(this),n=t.contents();n.length?n.wrapAll(e):t.append(e)})},wrap:function(e){var t=y.isFunction(e);return this.each(function(n){y(this).wrapAll(t?e.call(this,n):e)})},unwrap:function(e){return this.parent(e).not("body").each(function(){y(this).replaceWith(this.childNodes)}),this}}),y.expr.pseudos.hidden=function(e){return!y.expr.pseudos.visible(e)},y.expr.pseudos.visible=function(e){return!!(e.offsetWidth||e.offsetHeight||e.getClientRects().length)},h.createHTMLDocument=function(){var e=i.implementation.createHTMLDocument("").body;return e.innerHTML="<form></form><form></form>",2===e.childNodes.length}(),y.parseHTML=function(e,t,n){if("string"!=typeof e)return[];"boolean"==typeof t&&(n=t,t=!1);var r,o,s;return t||(h.createHTMLDocument?((r=(t=i.implementation.createHTMLDocument("")).createElement("base")).href=i.location.href,t.head.appendChild(r)):t=i),o=S.exec(e),s=!n&&[],o?[t.createElement(o[1])]:(o=ve([e],t,s),s&&s.length&&y(s).remove(),y.merge([],o.childNodes))},y.expr.pseudos.animated=function(e){return y.grep(y.timers,function(t){return e===t.elem}).length},y.offset={setOffset:function(e,t,n){var i,r,o,s,a,u,l,c=y.css(e,"position"),f=y(e),p={};"static"===c&&(e.style.position="relative"),a=f.offset(),o=y.css(e,"top"),u=y.css(e,"left"),(l=("absolute"===c||"fixed"===c)&&(o+u).indexOf("auto")>-1)?(s=(i=f.position()).top,r=i.left):(s=parseFloat(o)||0,r=parseFloat(u)||0),y.isFunction(t)&&(t=t.call(e,n,y.extend({},a))),null!=t.top&&(p.top=t.top-a.top+s),null!=t.left&&(p.left=t.left-a.left+r),"using"in t?t.using.call(e,p):f.css(p)}},y.fn.extend({offset:function(e){if(arguments.length)return void 0===e?this:this.each(function(t){y.offset.setOffset(this,e,t)});var t,n,i=this[0];if(i)return i.getClientRects().length?(t=i.getBoundingClientRect(),n=i.ownerDocument.defaultView,{top:t.top+n.pageYOffset,left:t.left+n.pageXOffset}):{top:0,left:0}},position:function(){if(this[0]){var e,t,n,i=this[0],r={top:0,left:0};if("fixed"===y.css(i,"position"))t=i.getBoundingClientRect();else{t=this.offset(),n=i.ownerDocument,e=i.offsetParent||n.documentElement;while(e&&(e===n.body||e===n.documentElement)&&"static"===y.css(e,"position"))e=e.parentNode;e&&e!==i&&1===e.nodeType&&((r=y(e).offset()).top+=y.css(e,"borderTopWidth",!0),r.left+=y.css(e,"borderLeftWidth",!0))}return{top:t.top-r.top-y.css(i,"marginTop",!0),left:t.left-r.left-y.css(i,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var e=this.offsetParent;while(e&&"static"===y.css(e,"position"))e=e.offsetParent;return e||me})}}),y.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(e,t){var n="pageYOffset"===t;y.fn[e]=function(i){return U(this,function(e,i,r){var o;if(g(e)?o=e:9===e.nodeType&&(o=e.defaultView),void 0===r)return o?o[t]:e[i];o?o.scrollTo(n?o.pageXOffset:r,n?r:o.pageYOffset):e[i]=r},e,i,arguments.length)}}),y.each(["top","left"],function(e,t){y.cssHooks[t]=Be(h.pixelPosition,function(e,n){if(n)return n=We(e,t),Re.test(n)?y(e).position()[t]+"px":n})}),y.each({Height:"height",Width:"width"},function(e,t){y.each({padding:"inner"+e,content:t,"":"outer"+e},function(n,i){y.fn[i]=function(r,o){var s=arguments.length&&(n||"boolean"!=typeof r),a=n||(!0===r||!0===o?"margin":"border");return U(this,function(t,n,r){var o;return g(t)?0===i.indexOf("outer")?t["inner"+e]:t.document.documentElement["client"+e]:9===t.nodeType?(o=t.documentElement,Math.max(t.body["scroll"+e],o["scroll"+e],t.body["offset"+e],o["offset"+e],o["client"+e])):void 0===r?y.css(t,n,a):y.style(t,n,r,a)},t,s?r:void 0,s)}})}),"function"==typeof define&&define.amd&&define("jquery",[],function(){return y});var Et=e.jQuery,Nt=e.$;return y.noConflict=function(t){return e.$===y&&(e.$=Nt),t&&e.jQuery===y&&(e.jQuery=Et),y},t||(e.jQuery=e.$=y),y});
//# sourceMappingURL=jquery.min.map
// Check for jQuery.
if (typeof jQuery === 'undefined') {
  // Check if require is a defined function.
  if (typeof require === 'function') {
    jQuery = $ = require('jquery');
    // Else use the dollar sign alias.
  } else {
    jQuery = $;
  }
}
; /*
  * jQuery Easing v1.4.0 - http://gsgd.co.uk/sandbox/jquery/easing/
  * Open source under the BSD License.
  * Copyright © 2008 George McGinley Smith
  * All rights reserved.
  * https://raw.github.com/gdsmith/jquery-easing/master/LICENSE
  */

(function (factory) {
  if (typeof define === "function" && define.amd) {
    define(['jquery'], function ($) {
      return factory($);
    });
  } else if (typeof module === "object" && typeof module.exports === "object") {
    exports = factory(require('jquery'));
  } else {
    factory(jQuery);
  }
})(function ($) {

  // Preserve the original jQuery "swing" easing as "jswing"
  $.easing['jswing'] = $.easing['swing'];

  var pow = Math.pow,
      sqrt = Math.sqrt,
      sin = Math.sin,
      cos = Math.cos,
      PI = Math.PI,
      c1 = 1.70158,
      c2 = c1 * 1.525,
      c3 = c1 + 1,
      c4 = 2 * PI / 3,
      c5 = 2 * PI / 4.5;

  // x is the fraction of animation progress, in the range 0..1
  function bounceOut(x) {
    var n1 = 7.5625,
        d1 = 2.75;
    if (x < 1 / d1) {
      return n1 * x * x;
    } else if (x < 2 / d1) {
      return n1 * (x -= 1.5 / d1) * x + .75;
    } else if (x < 2.5 / d1) {
      return n1 * (x -= 2.25 / d1) * x + .9375;
    } else {
      return n1 * (x -= 2.625 / d1) * x + .984375;
    }
  }

  $.extend($.easing, {
    def: 'easeOutQuad',
    swing: function (x) {
      return $.easing[$.easing.def](x);
    },
    easeInQuad: function (x) {
      return x * x;
    },
    easeOutQuad: function (x) {
      return 1 - (1 - x) * (1 - x);
    },
    easeInOutQuad: function (x) {
      return x < 0.5 ? 2 * x * x : 1 - pow(-2 * x + 2, 2) / 2;
    },
    easeInCubic: function (x) {
      return x * x * x;
    },
    easeOutCubic: function (x) {
      return 1 - pow(1 - x, 3);
    },
    easeInOutCubic: function (x) {
      return x < 0.5 ? 4 * x * x * x : 1 - pow(-2 * x + 2, 3) / 2;
    },
    easeInQuart: function (x) {
      return x * x * x * x;
    },
    easeOutQuart: function (x) {
      return 1 - pow(1 - x, 4);
    },
    easeInOutQuart: function (x) {
      return x < 0.5 ? 8 * x * x * x * x : 1 - pow(-2 * x + 2, 4) / 2;
    },
    easeInQuint: function (x) {
      return x * x * x * x * x;
    },
    easeOutQuint: function (x) {
      return 1 - pow(1 - x, 5);
    },
    easeInOutQuint: function (x) {
      return x < 0.5 ? 16 * x * x * x * x * x : 1 - pow(-2 * x + 2, 5) / 2;
    },
    easeInSine: function (x) {
      return 1 - cos(x * PI / 2);
    },
    easeOutSine: function (x) {
      return sin(x * PI / 2);
    },
    easeInOutSine: function (x) {
      return -(cos(PI * x) - 1) / 2;
    },
    easeInExpo: function (x) {
      return x === 0 ? 0 : pow(2, 10 * x - 10);
    },
    easeOutExpo: function (x) {
      return x === 1 ? 1 : 1 - pow(2, -10 * x);
    },
    easeInOutExpo: function (x) {
      return x === 0 ? 0 : x === 1 ? 1 : x < 0.5 ? pow(2, 20 * x - 10) / 2 : (2 - pow(2, -20 * x + 10)) / 2;
    },
    easeInCirc: function (x) {
      return 1 - sqrt(1 - pow(x, 2));
    },
    easeOutCirc: function (x) {
      return sqrt(1 - pow(x - 1, 2));
    },
    easeInOutCirc: function (x) {
      return x < 0.5 ? (1 - sqrt(1 - pow(2 * x, 2))) / 2 : (sqrt(1 - pow(-2 * x + 2, 2)) + 1) / 2;
    },
    easeInElastic: function (x) {
      return x === 0 ? 0 : x === 1 ? 1 : -pow(2, 10 * x - 10) * sin((x * 10 - 10.75) * c4);
    },
    easeOutElastic: function (x) {
      return x === 0 ? 0 : x === 1 ? 1 : pow(2, -10 * x) * sin((x * 10 - 0.75) * c4) + 1;
    },
    easeInOutElastic: function (x) {
      return x === 0 ? 0 : x === 1 ? 1 : x < 0.5 ? -(pow(2, 20 * x - 10) * sin((20 * x - 11.125) * c5)) / 2 : pow(2, -20 * x + 10) * sin((20 * x - 11.125) * c5) / 2 + 1;
    },
    easeInBack: function (x) {
      return c3 * x * x * x - c1 * x * x;
    },
    easeOutBack: function (x) {
      return 1 + c3 * pow(x - 1, 3) + c1 * pow(x - 1, 2);
    },
    easeInOutBack: function (x) {
      return x < 0.5 ? pow(2 * x, 2) * ((c2 + 1) * 2 * x - c2) / 2 : (pow(2 * x - 2, 2) * ((c2 + 1) * (x * 2 - 2) + c2) + 2) / 2;
    },
    easeInBounce: function (x) {
      return 1 - bounceOut(1 - x);
    },
    easeOutBounce: bounceOut,
    easeInOutBounce: function (x) {
      return x < 0.5 ? (1 - bounceOut(1 - 2 * x)) / 2 : (1 + bounceOut(2 * x - 1)) / 2;
    }
  });
});; // Custom Easing
jQuery.extend(jQuery.easing, {
  easeInOutMaterial: function (x, t, b, c, d) {
    if ((t /= d / 2) < 1) return c / 2 * t * t + b;
    return c / 4 * ((t -= 2) * t * t + 2) + b;
  }
});; /*! VelocityJS.org (1.2.3). (C) 2014 Julian Shapiro. MIT @license: en.wikipedia.org/wiki/MIT_License */
/*! VelocityJS.org jQuery Shim (1.0.1). (C) 2014 The jQuery Foundation. MIT @license: en.wikipedia.org/wiki/MIT_License. */
/*! Note that this has been modified by Materialize to confirm that Velocity is not already being imported. */
jQuery.Velocity ? console.log("Velocity is already loaded. You may be needlessly importing Velocity again; note that Materialize includes Velocity.") : (!function (e) {
  function t(e) {
    var t = e.length,
        a = r.type(e);return "function" === a || r.isWindow(e) ? !1 : 1 === e.nodeType && t ? !0 : "array" === a || 0 === t || "number" == typeof t && t > 0 && t - 1 in e;
  }if (!e.jQuery) {
    var r = function (e, t) {
      return new r.fn.init(e, t);
    };r.isWindow = function (e) {
      return null != e && e == e.window;
    }, r.type = function (e) {
      return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? n[i.call(e)] || "object" : typeof e;
    }, r.isArray = Array.isArray || function (e) {
      return "array" === r.type(e);
    }, r.isPlainObject = function (e) {
      var t;if (!e || "object" !== r.type(e) || e.nodeType || r.isWindow(e)) return !1;try {
        if (e.constructor && !o.call(e, "constructor") && !o.call(e.constructor.prototype, "isPrototypeOf")) return !1;
      } catch (a) {
        return !1;
      }for (t in e) {}return void 0 === t || o.call(e, t);
    }, r.each = function (e, r, a) {
      var n,
          o = 0,
          i = e.length,
          s = t(e);if (a) {
        if (s) for (; i > o && (n = r.apply(e[o], a), n !== !1); o++) {} else for (o in e) {
          if (n = r.apply(e[o], a), n === !1) break;
        }
      } else if (s) for (; i > o && (n = r.call(e[o], o, e[o]), n !== !1); o++) {} else for (o in e) {
        if (n = r.call(e[o], o, e[o]), n === !1) break;
      }return e;
    }, r.data = function (e, t, n) {
      if (void 0 === n) {
        var o = e[r.expando],
            i = o && a[o];if (void 0 === t) return i;if (i && t in i) return i[t];
      } else if (void 0 !== t) {
        var o = e[r.expando] || (e[r.expando] = ++r.uuid);return a[o] = a[o] || {}, a[o][t] = n, n;
      }
    }, r.removeData = function (e, t) {
      var n = e[r.expando],
          o = n && a[n];o && r.each(t, function (e, t) {
        delete o[t];
      });
    }, r.extend = function () {
      var e,
          t,
          a,
          n,
          o,
          i,
          s = arguments[0] || {},
          l = 1,
          u = arguments.length,
          c = !1;for ("boolean" == typeof s && (c = s, s = arguments[l] || {}, l++), "object" != typeof s && "function" !== r.type(s) && (s = {}), l === u && (s = this, l--); u > l; l++) {
        if (null != (o = arguments[l])) for (n in o) {
          e = s[n], a = o[n], s !== a && (c && a && (r.isPlainObject(a) || (t = r.isArray(a))) ? (t ? (t = !1, i = e && r.isArray(e) ? e : []) : i = e && r.isPlainObject(e) ? e : {}, s[n] = r.extend(c, i, a)) : void 0 !== a && (s[n] = a));
        }
      }return s;
    }, r.queue = function (e, a, n) {
      function o(e, r) {
        var a = r || [];return null != e && (t(Object(e)) ? !function (e, t) {
          for (var r = +t.length, a = 0, n = e.length; r > a;) {
            e[n++] = t[a++];
          }if (r !== r) for (; void 0 !== t[a];) {
            e[n++] = t[a++];
          }return e.length = n, e;
        }(a, "string" == typeof e ? [e] : e) : [].push.call(a, e)), a;
      }if (e) {
        a = (a || "fx") + "queue";var i = r.data(e, a);return n ? (!i || r.isArray(n) ? i = r.data(e, a, o(n)) : i.push(n), i) : i || [];
      }
    }, r.dequeue = function (e, t) {
      r.each(e.nodeType ? [e] : e, function (e, a) {
        t = t || "fx";var n = r.queue(a, t),
            o = n.shift();"inprogress" === o && (o = n.shift()), o && ("fx" === t && n.unshift("inprogress"), o.call(a, function () {
          r.dequeue(a, t);
        }));
      });
    }, r.fn = r.prototype = { init: function (e) {
        if (e.nodeType) return this[0] = e, this;throw new Error("Not a DOM node.");
      }, offset: function () {
        var t = this[0].getBoundingClientRect ? this[0].getBoundingClientRect() : { top: 0, left: 0 };return { top: t.top + (e.pageYOffset || document.scrollTop || 0) - (document.clientTop || 0), left: t.left + (e.pageXOffset || document.scrollLeft || 0) - (document.clientLeft || 0) };
      }, position: function () {
        function e() {
          for (var e = this.offsetParent || document; e && "html" === !e.nodeType.toLowerCase && "static" === e.style.position;) {
            e = e.offsetParent;
          }return e || document;
        }var t = this[0],
            e = e.apply(t),
            a = this.offset(),
            n = /^(?:body|html)$/i.test(e.nodeName) ? { top: 0, left: 0 } : r(e).offset();return a.top -= parseFloat(t.style.marginTop) || 0, a.left -= parseFloat(t.style.marginLeft) || 0, e.style && (n.top += parseFloat(e.style.borderTopWidth) || 0, n.left += parseFloat(e.style.borderLeftWidth) || 0), { top: a.top - n.top, left: a.left - n.left };
      } };var a = {};r.expando = "velocity" + new Date().getTime(), r.uuid = 0;for (var n = {}, o = n.hasOwnProperty, i = n.toString, s = "Boolean Number String Function Array Date RegExp Object Error".split(" "), l = 0; l < s.length; l++) {
      n["[object " + s[l] + "]"] = s[l].toLowerCase();
    }r.fn.init.prototype = r.fn, e.Velocity = { Utilities: r };
  }
}(window), function (e) {
  "object" == typeof module && "object" == typeof module.exports ? module.exports = e() : "function" == typeof define && define.amd ? define(e) : e();
}(function () {
  return function (e, t, r, a) {
    function n(e) {
      for (var t = -1, r = e ? e.length : 0, a = []; ++t < r;) {
        var n = e[t];n && a.push(n);
      }return a;
    }function o(e) {
      return m.isWrapped(e) ? e = [].slice.call(e) : m.isNode(e) && (e = [e]), e;
    }function i(e) {
      var t = f.data(e, "velocity");return null === t ? a : t;
    }function s(e) {
      return function (t) {
        return Math.round(t * e) * (1 / e);
      };
    }function l(e, r, a, n) {
      function o(e, t) {
        return 1 - 3 * t + 3 * e;
      }function i(e, t) {
        return 3 * t - 6 * e;
      }function s(e) {
        return 3 * e;
      }function l(e, t, r) {
        return ((o(t, r) * e + i(t, r)) * e + s(t)) * e;
      }function u(e, t, r) {
        return 3 * o(t, r) * e * e + 2 * i(t, r) * e + s(t);
      }function c(t, r) {
        for (var n = 0; m > n; ++n) {
          var o = u(r, e, a);if (0 === o) return r;var i = l(r, e, a) - t;r -= i / o;
        }return r;
      }function p() {
        for (var t = 0; b > t; ++t) {
          w[t] = l(t * x, e, a);
        }
      }function f(t, r, n) {
        var o,
            i,
            s = 0;do {
          i = r + (n - r) / 2, o = l(i, e, a) - t, o > 0 ? n = i : r = i;
        } while (Math.abs(o) > h && ++s < v);return i;
      }function d(t) {
        for (var r = 0, n = 1, o = b - 1; n != o && w[n] <= t; ++n) {
          r += x;
        }--n;var i = (t - w[n]) / (w[n + 1] - w[n]),
            s = r + i * x,
            l = u(s, e, a);return l >= y ? c(t, s) : 0 == l ? s : f(t, r, r + x);
      }function g() {
        V = !0, (e != r || a != n) && p();
      }var m = 4,
          y = .001,
          h = 1e-7,
          v = 10,
          b = 11,
          x = 1 / (b - 1),
          S = "Float32Array" in t;if (4 !== arguments.length) return !1;for (var P = 0; 4 > P; ++P) {
        if ("number" != typeof arguments[P] || isNaN(arguments[P]) || !isFinite(arguments[P])) return !1;
      }e = Math.min(e, 1), a = Math.min(a, 1), e = Math.max(e, 0), a = Math.max(a, 0);var w = S ? new Float32Array(b) : new Array(b),
          V = !1,
          C = function (t) {
        return V || g(), e === r && a === n ? t : 0 === t ? 0 : 1 === t ? 1 : l(d(t), r, n);
      };C.getControlPoints = function () {
        return [{ x: e, y: r }, { x: a, y: n }];
      };var T = "generateBezier(" + [e, r, a, n] + ")";return C.toString = function () {
        return T;
      }, C;
    }function u(e, t) {
      var r = e;return m.isString(e) ? b.Easings[e] || (r = !1) : r = m.isArray(e) && 1 === e.length ? s.apply(null, e) : m.isArray(e) && 2 === e.length ? x.apply(null, e.concat([t])) : m.isArray(e) && 4 === e.length ? l.apply(null, e) : !1, r === !1 && (r = b.Easings[b.defaults.easing] ? b.defaults.easing : v), r;
    }function c(e) {
      if (e) {
        var t = new Date().getTime(),
            r = b.State.calls.length;r > 1e4 && (b.State.calls = n(b.State.calls));for (var o = 0; r > o; o++) {
          if (b.State.calls[o]) {
            var s = b.State.calls[o],
                l = s[0],
                u = s[2],
                d = s[3],
                g = !!d,
                y = null;d || (d = b.State.calls[o][3] = t - 16);for (var h = Math.min((t - d) / u.duration, 1), v = 0, x = l.length; x > v; v++) {
              var P = l[v],
                  V = P.element;if (i(V)) {
                var C = !1;if (u.display !== a && null !== u.display && "none" !== u.display) {
                  if ("flex" === u.display) {
                    var T = ["-webkit-box", "-moz-box", "-ms-flexbox", "-webkit-flex"];f.each(T, function (e, t) {
                      S.setPropertyValue(V, "display", t);
                    });
                  }S.setPropertyValue(V, "display", u.display);
                }u.visibility !== a && "hidden" !== u.visibility && S.setPropertyValue(V, "visibility", u.visibility);for (var k in P) {
                  if ("element" !== k) {
                    var A,
                        F = P[k],
                        j = m.isString(F.easing) ? b.Easings[F.easing] : F.easing;if (1 === h) A = F.endValue;else {
                      var E = F.endValue - F.startValue;if (A = F.startValue + E * j(h, u, E), !g && A === F.currentValue) continue;
                    }if (F.currentValue = A, "tween" === k) y = A;else {
                      if (S.Hooks.registered[k]) {
                        var H = S.Hooks.getRoot(k),
                            N = i(V).rootPropertyValueCache[H];N && (F.rootPropertyValue = N);
                      }var L = S.setPropertyValue(V, k, F.currentValue + (0 === parseFloat(A) ? "" : F.unitType), F.rootPropertyValue, F.scrollData);S.Hooks.registered[k] && (i(V).rootPropertyValueCache[H] = S.Normalizations.registered[H] ? S.Normalizations.registered[H]("extract", null, L[1]) : L[1]), "transform" === L[0] && (C = !0);
                    }
                  }
                }u.mobileHA && i(V).transformCache.translate3d === a && (i(V).transformCache.translate3d = "(0px, 0px, 0px)", C = !0), C && S.flushTransformCache(V);
              }
            }u.display !== a && "none" !== u.display && (b.State.calls[o][2].display = !1), u.visibility !== a && "hidden" !== u.visibility && (b.State.calls[o][2].visibility = !1), u.progress && u.progress.call(s[1], s[1], h, Math.max(0, d + u.duration - t), d, y), 1 === h && p(o);
          }
        }
      }b.State.isTicking && w(c);
    }function p(e, t) {
      if (!b.State.calls[e]) return !1;for (var r = b.State.calls[e][0], n = b.State.calls[e][1], o = b.State.calls[e][2], s = b.State.calls[e][4], l = !1, u = 0, c = r.length; c > u; u++) {
        var p = r[u].element;if (t || o.loop || ("none" === o.display && S.setPropertyValue(p, "display", o.display), "hidden" === o.visibility && S.setPropertyValue(p, "visibility", o.visibility)), o.loop !== !0 && (f.queue(p)[1] === a || !/\.velocityQueueEntryFlag/i.test(f.queue(p)[1])) && i(p)) {
          i(p).isAnimating = !1, i(p).rootPropertyValueCache = {};var d = !1;f.each(S.Lists.transforms3D, function (e, t) {
            var r = /^scale/.test(t) ? 1 : 0,
                n = i(p).transformCache[t];i(p).transformCache[t] !== a && new RegExp("^\\(" + r + "[^.]").test(n) && (d = !0, delete i(p).transformCache[t]);
          }), o.mobileHA && (d = !0, delete i(p).transformCache.translate3d), d && S.flushTransformCache(p), S.Values.removeClass(p, "velocity-animating");
        }if (!t && o.complete && !o.loop && u === c - 1) try {
          o.complete.call(n, n);
        } catch (g) {
          setTimeout(function () {
            throw g;
          }, 1);
        }s && o.loop !== !0 && s(n), i(p) && o.loop === !0 && !t && (f.each(i(p).tweensContainer, function (e, t) {
          /^rotate/.test(e) && 360 === parseFloat(t.endValue) && (t.endValue = 0, t.startValue = 360), /^backgroundPosition/.test(e) && 100 === parseFloat(t.endValue) && "%" === t.unitType && (t.endValue = 0, t.startValue = 100);
        }), b(p, "reverse", { loop: !0, delay: o.delay })), o.queue !== !1 && f.dequeue(p, o.queue);
      }b.State.calls[e] = !1;for (var m = 0, y = b.State.calls.length; y > m; m++) {
        if (b.State.calls[m] !== !1) {
          l = !0;break;
        }
      }l === !1 && (b.State.isTicking = !1, delete b.State.calls, b.State.calls = []);
    }var f,
        d = function () {
      if (r.documentMode) return r.documentMode;for (var e = 7; e > 4; e--) {
        var t = r.createElement("div");if (t.innerHTML = "<!--[if IE " + e + "]><span></span><![endif]-->", t.getElementsByTagName("span").length) return t = null, e;
      }return a;
    }(),
        g = function () {
      var e = 0;return t.webkitRequestAnimationFrame || t.mozRequestAnimationFrame || function (t) {
        var r,
            a = new Date().getTime();return r = Math.max(0, 16 - (a - e)), e = a + r, setTimeout(function () {
          t(a + r);
        }, r);
      };
    }(),
        m = { isString: function (e) {
        return "string" == typeof e;
      }, isArray: Array.isArray || function (e) {
        return "[object Array]" === Object.prototype.toString.call(e);
      }, isFunction: function (e) {
        return "[object Function]" === Object.prototype.toString.call(e);
      }, isNode: function (e) {
        return e && e.nodeType;
      }, isNodeList: function (e) {
        return "object" == typeof e && /^\[object (HTMLCollection|NodeList|Object)\]$/.test(Object.prototype.toString.call(e)) && e.length !== a && (0 === e.length || "object" == typeof e[0] && e[0].nodeType > 0);
      }, isWrapped: function (e) {
        return e && (e.jquery || t.Zepto && t.Zepto.zepto.isZ(e));
      }, isSVG: function (e) {
        return t.SVGElement && e instanceof t.SVGElement;
      }, isEmptyObject: function (e) {
        for (var t in e) {
          return !1;
        }return !0;
      } },
        y = !1;if (e.fn && e.fn.jquery ? (f = e, y = !0) : f = t.Velocity.Utilities, 8 >= d && !y) throw new Error("Velocity: IE8 and below require jQuery to be loaded before Velocity.");if (7 >= d) return void (jQuery.fn.velocity = jQuery.fn.animate);var h = 400,
        v = "swing",
        b = { State: { isMobile: /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent), isAndroid: /Android/i.test(navigator.userAgent), isGingerbread: /Android 2\.3\.[3-7]/i.test(navigator.userAgent), isChrome: t.chrome, isFirefox: /Firefox/i.test(navigator.userAgent), prefixElement: r.createElement("div"), prefixMatches: {}, scrollAnchor: null, scrollPropertyLeft: null, scrollPropertyTop: null, isTicking: !1, calls: [] }, CSS: {}, Utilities: f, Redirects: {}, Easings: {}, Promise: t.Promise, defaults: { queue: "", duration: h, easing: v, begin: a, complete: a, progress: a, display: a, visibility: a, loop: !1, delay: !1, mobileHA: !0, _cacheValues: !0 }, init: function (e) {
        f.data(e, "velocity", { isSVG: m.isSVG(e), isAnimating: !1, computedStyle: null, tweensContainer: null, rootPropertyValueCache: {}, transformCache: {} });
      }, hook: null, mock: !1, version: { major: 1, minor: 2, patch: 2 }, debug: !1 };t.pageYOffset !== a ? (b.State.scrollAnchor = t, b.State.scrollPropertyLeft = "pageXOffset", b.State.scrollPropertyTop = "pageYOffset") : (b.State.scrollAnchor = r.documentElement || r.body.parentNode || r.body, b.State.scrollPropertyLeft = "scrollLeft", b.State.scrollPropertyTop = "scrollTop");var x = function () {
      function e(e) {
        return -e.tension * e.x - e.friction * e.v;
      }function t(t, r, a) {
        var n = { x: t.x + a.dx * r, v: t.v + a.dv * r, tension: t.tension, friction: t.friction };return { dx: n.v, dv: e(n) };
      }function r(r, a) {
        var n = { dx: r.v, dv: e(r) },
            o = t(r, .5 * a, n),
            i = t(r, .5 * a, o),
            s = t(r, a, i),
            l = 1 / 6 * (n.dx + 2 * (o.dx + i.dx) + s.dx),
            u = 1 / 6 * (n.dv + 2 * (o.dv + i.dv) + s.dv);return r.x = r.x + l * a, r.v = r.v + u * a, r;
      }return function a(e, t, n) {
        var o,
            i,
            s,
            l = { x: -1, v: 0, tension: null, friction: null },
            u = [0],
            c = 0,
            p = 1e-4,
            f = .016;for (e = parseFloat(e) || 500, t = parseFloat(t) || 20, n = n || null, l.tension = e, l.friction = t, o = null !== n, o ? (c = a(e, t), i = c / n * f) : i = f; s = r(s || l, i), u.push(1 + s.x), c += 16, Math.abs(s.x) > p && Math.abs(s.v) > p;) {}return o ? function (e) {
          return u[e * (u.length - 1) | 0];
        } : c;
      };
    }();b.Easings = { linear: function (e) {
        return e;
      }, swing: function (e) {
        return .5 - Math.cos(e * Math.PI) / 2;
      }, spring: function (e) {
        return 1 - Math.cos(4.5 * e * Math.PI) * Math.exp(6 * -e);
      } }, f.each([["ease", [.25, .1, .25, 1]], ["ease-in", [.42, 0, 1, 1]], ["ease-out", [0, 0, .58, 1]], ["ease-in-out", [.42, 0, .58, 1]], ["easeInSine", [.47, 0, .745, .715]], ["easeOutSine", [.39, .575, .565, 1]], ["easeInOutSine", [.445, .05, .55, .95]], ["easeInQuad", [.55, .085, .68, .53]], ["easeOutQuad", [.25, .46, .45, .94]], ["easeInOutQuad", [.455, .03, .515, .955]], ["easeInCubic", [.55, .055, .675, .19]], ["easeOutCubic", [.215, .61, .355, 1]], ["easeInOutCubic", [.645, .045, .355, 1]], ["easeInQuart", [.895, .03, .685, .22]], ["easeOutQuart", [.165, .84, .44, 1]], ["easeInOutQuart", [.77, 0, .175, 1]], ["easeInQuint", [.755, .05, .855, .06]], ["easeOutQuint", [.23, 1, .32, 1]], ["easeInOutQuint", [.86, 0, .07, 1]], ["easeInExpo", [.95, .05, .795, .035]], ["easeOutExpo", [.19, 1, .22, 1]], ["easeInOutExpo", [1, 0, 0, 1]], ["easeInCirc", [.6, .04, .98, .335]], ["easeOutCirc", [.075, .82, .165, 1]], ["easeInOutCirc", [.785, .135, .15, .86]]], function (e, t) {
      b.Easings[t[0]] = l.apply(null, t[1]);
    });var S = b.CSS = { RegEx: { isHex: /^#([A-f\d]{3}){1,2}$/i, valueUnwrap: /^[A-z]+\((.*)\)$/i, wrappedValueAlreadyExtracted: /[0-9.]+ [0-9.]+ [0-9.]+( [0-9.]+)?/, valueSplit: /([A-z]+\(.+\))|(([A-z0-9#-.]+?)(?=\s|$))/gi }, Lists: { colors: ["fill", "stroke", "stopColor", "color", "backgroundColor", "borderColor", "borderTopColor", "borderRightColor", "borderBottomColor", "borderLeftColor", "outlineColor"], transformsBase: ["translateX", "translateY", "scale", "scaleX", "scaleY", "skewX", "skewY", "rotateZ"], transforms3D: ["transformPerspective", "translateZ", "scaleZ", "rotateX", "rotateY"] }, Hooks: { templates: { textShadow: ["Color X Y Blur", "black 0px 0px 0px"], boxShadow: ["Color X Y Blur Spread", "black 0px 0px 0px 0px"], clip: ["Top Right Bottom Left", "0px 0px 0px 0px"], backgroundPosition: ["X Y", "0% 0%"], transformOrigin: ["X Y Z", "50% 50% 0px"], perspectiveOrigin: ["X Y", "50% 50%"] }, registered: {}, register: function () {
          for (var e = 0; e < S.Lists.colors.length; e++) {
            var t = "color" === S.Lists.colors[e] ? "0 0 0 1" : "255 255 255 1";S.Hooks.templates[S.Lists.colors[e]] = ["Red Green Blue Alpha", t];
          }var r, a, n;if (d) for (r in S.Hooks.templates) {
            a = S.Hooks.templates[r], n = a[0].split(" ");var o = a[1].match(S.RegEx.valueSplit);"Color" === n[0] && (n.push(n.shift()), o.push(o.shift()), S.Hooks.templates[r] = [n.join(" "), o.join(" ")]);
          }for (r in S.Hooks.templates) {
            a = S.Hooks.templates[r], n = a[0].split(" ");for (var e in n) {
              var i = r + n[e],
                  s = e;S.Hooks.registered[i] = [r, s];
            }
          }
        }, getRoot: function (e) {
          var t = S.Hooks.registered[e];return t ? t[0] : e;
        }, cleanRootPropertyValue: function (e, t) {
          return S.RegEx.valueUnwrap.test(t) && (t = t.match(S.RegEx.valueUnwrap)[1]), S.Values.isCSSNullValue(t) && (t = S.Hooks.templates[e][1]), t;
        }, extractValue: function (e, t) {
          var r = S.Hooks.registered[e];if (r) {
            var a = r[0],
                n = r[1];return t = S.Hooks.cleanRootPropertyValue(a, t), t.toString().match(S.RegEx.valueSplit)[n];
          }return t;
        }, injectValue: function (e, t, r) {
          var a = S.Hooks.registered[e];if (a) {
            var n,
                o,
                i = a[0],
                s = a[1];return r = S.Hooks.cleanRootPropertyValue(i, r), n = r.toString().match(S.RegEx.valueSplit), n[s] = t, o = n.join(" ");
          }return r;
        } }, Normalizations: { registered: { clip: function (e, t, r) {
            switch (e) {case "name":
                return "clip";case "extract":
                var a;return S.RegEx.wrappedValueAlreadyExtracted.test(r) ? a = r : (a = r.toString().match(S.RegEx.valueUnwrap), a = a ? a[1].replace(/,(\s+)?/g, " ") : r), a;case "inject":
                return "rect(" + r + ")";}
          }, blur: function (e, t, r) {
            switch (e) {case "name":
                return b.State.isFirefox ? "filter" : "-webkit-filter";case "extract":
                var a = parseFloat(r);if (!a && 0 !== a) {
                  var n = r.toString().match(/blur\(([0-9]+[A-z]+)\)/i);a = n ? n[1] : 0;
                }return a;case "inject":
                return parseFloat(r) ? "blur(" + r + ")" : "none";}
          }, opacity: function (e, t, r) {
            if (8 >= d) switch (e) {case "name":
                return "filter";case "extract":
                var a = r.toString().match(/alpha\(opacity=(.*)\)/i);return r = a ? a[1] / 100 : 1;case "inject":
                return t.style.zoom = 1, parseFloat(r) >= 1 ? "" : "alpha(opacity=" + parseInt(100 * parseFloat(r), 10) + ")";} else switch (e) {case "name":
                return "opacity";case "extract":
                return r;case "inject":
                return r;}
          } }, register: function () {
          9 >= d || b.State.isGingerbread || (S.Lists.transformsBase = S.Lists.transformsBase.concat(S.Lists.transforms3D));for (var e = 0; e < S.Lists.transformsBase.length; e++) {
            !function () {
              var t = S.Lists.transformsBase[e];S.Normalizations.registered[t] = function (e, r, n) {
                switch (e) {case "name":
                    return "transform";case "extract":
                    return i(r) === a || i(r).transformCache[t] === a ? /^scale/i.test(t) ? 1 : 0 : i(r).transformCache[t].replace(/[()]/g, "");case "inject":
                    var o = !1;switch (t.substr(0, t.length - 1)) {case "translate":
                        o = !/(%|px|em|rem|vw|vh|\d)$/i.test(n);break;case "scal":case "scale":
                        b.State.isAndroid && i(r).transformCache[t] === a && 1 > n && (n = 1), o = !/(\d)$/i.test(n);break;case "skew":
                        o = !/(deg|\d)$/i.test(n);break;case "rotate":
                        o = !/(deg|\d)$/i.test(n);}return o || (i(r).transformCache[t] = "(" + n + ")"), i(r).transformCache[t];}
              };
            }();
          }for (var e = 0; e < S.Lists.colors.length; e++) {
            !function () {
              var t = S.Lists.colors[e];S.Normalizations.registered[t] = function (e, r, n) {
                switch (e) {case "name":
                    return t;case "extract":
                    var o;if (S.RegEx.wrappedValueAlreadyExtracted.test(n)) o = n;else {
                      var i,
                          s = { black: "rgb(0, 0, 0)", blue: "rgb(0, 0, 255)", gray: "rgb(128, 128, 128)", green: "rgb(0, 128, 0)", red: "rgb(255, 0, 0)", white: "rgb(255, 255, 255)" };/^[A-z]+$/i.test(n) ? i = s[n] !== a ? s[n] : s.black : S.RegEx.isHex.test(n) ? i = "rgb(" + S.Values.hexToRgb(n).join(" ") + ")" : /^rgba?\(/i.test(n) || (i = s.black), o = (i || n).toString().match(S.RegEx.valueUnwrap)[1].replace(/,(\s+)?/g, " ");
                    }return 8 >= d || 3 !== o.split(" ").length || (o += " 1"), o;case "inject":
                    return 8 >= d ? 4 === n.split(" ").length && (n = n.split(/\s+/).slice(0, 3).join(" ")) : 3 === n.split(" ").length && (n += " 1"), (8 >= d ? "rgb" : "rgba") + "(" + n.replace(/\s+/g, ",").replace(/\.(\d)+(?=,)/g, "") + ")";}
              };
            }();
          }
        } }, Names: { camelCase: function (e) {
          return e.replace(/-(\w)/g, function (e, t) {
            return t.toUpperCase();
          });
        }, SVGAttribute: function (e) {
          var t = "width|height|x|y|cx|cy|r|rx|ry|x1|x2|y1|y2";return (d || b.State.isAndroid && !b.State.isChrome) && (t += "|transform"), new RegExp("^(" + t + ")$", "i").test(e);
        }, prefixCheck: function (e) {
          if (b.State.prefixMatches[e]) return [b.State.prefixMatches[e], !0];for (var t = ["", "Webkit", "Moz", "ms", "O"], r = 0, a = t.length; a > r; r++) {
            var n;if (n = 0 === r ? e : t[r] + e.replace(/^\w/, function (e) {
              return e.toUpperCase();
            }), m.isString(b.State.prefixElement.style[n])) return b.State.prefixMatches[e] = n, [n, !0];
          }return [e, !1];
        } }, Values: { hexToRgb: function (e) {
          var t,
              r = /^#?([a-f\d])([a-f\d])([a-f\d])$/i,
              a = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i;return e = e.replace(r, function (e, t, r, a) {
            return t + t + r + r + a + a;
          }), t = a.exec(e), t ? [parseInt(t[1], 16), parseInt(t[2], 16), parseInt(t[3], 16)] : [0, 0, 0];
        }, isCSSNullValue: function (e) {
          return 0 == e || /^(none|auto|transparent|(rgba\(0, ?0, ?0, ?0\)))$/i.test(e);
        }, getUnitType: function (e) {
          return (/^(rotate|skew)/i.test(e) ? "deg" : /(^(scale|scaleX|scaleY|scaleZ|alpha|flexGrow|flexHeight|zIndex|fontWeight)$)|((opacity|red|green|blue|alpha)$)/i.test(e) ? "" : "px"
          );
        }, getDisplayType: function (e) {
          var t = e && e.tagName.toString().toLowerCase();return (/^(b|big|i|small|tt|abbr|acronym|cite|code|dfn|em|kbd|strong|samp|var|a|bdo|br|img|map|object|q|script|span|sub|sup|button|input|label|select|textarea)$/i.test(t) ? "inline" : /^(li)$/i.test(t) ? "list-item" : /^(tr)$/i.test(t) ? "table-row" : /^(table)$/i.test(t) ? "table" : /^(tbody)$/i.test(t) ? "table-row-group" : "block"
          );
        }, addClass: function (e, t) {
          e.classList ? e.classList.add(t) : e.className += (e.className.length ? " " : "") + t;
        }, removeClass: function (e, t) {
          e.classList ? e.classList.remove(t) : e.className = e.className.toString().replace(new RegExp("(^|\\s)" + t.split(" ").join("|") + "(\\s|$)", "gi"), " ");
        } }, getPropertyValue: function (e, r, n, o) {
        function s(e, r) {
          function n() {
            u && S.setPropertyValue(e, "display", "none");
          }var l = 0;if (8 >= d) l = f.css(e, r);else {
            var u = !1;if (/^(width|height)$/.test(r) && 0 === S.getPropertyValue(e, "display") && (u = !0, S.setPropertyValue(e, "display", S.Values.getDisplayType(e))), !o) {
              if ("height" === r && "border-box" !== S.getPropertyValue(e, "boxSizing").toString().toLowerCase()) {
                var c = e.offsetHeight - (parseFloat(S.getPropertyValue(e, "borderTopWidth")) || 0) - (parseFloat(S.getPropertyValue(e, "borderBottomWidth")) || 0) - (parseFloat(S.getPropertyValue(e, "paddingTop")) || 0) - (parseFloat(S.getPropertyValue(e, "paddingBottom")) || 0);return n(), c;
              }if ("width" === r && "border-box" !== S.getPropertyValue(e, "boxSizing").toString().toLowerCase()) {
                var p = e.offsetWidth - (parseFloat(S.getPropertyValue(e, "borderLeftWidth")) || 0) - (parseFloat(S.getPropertyValue(e, "borderRightWidth")) || 0) - (parseFloat(S.getPropertyValue(e, "paddingLeft")) || 0) - (parseFloat(S.getPropertyValue(e, "paddingRight")) || 0);return n(), p;
              }
            }var g;g = i(e) === a ? t.getComputedStyle(e, null) : i(e).computedStyle ? i(e).computedStyle : i(e).computedStyle = t.getComputedStyle(e, null), "borderColor" === r && (r = "borderTopColor"), l = 9 === d && "filter" === r ? g.getPropertyValue(r) : g[r], ("" === l || null === l) && (l = e.style[r]), n();
          }if ("auto" === l && /^(top|right|bottom|left)$/i.test(r)) {
            var m = s(e, "position");("fixed" === m || "absolute" === m && /top|left/i.test(r)) && (l = f(e).position()[r] + "px");
          }return l;
        }var l;if (S.Hooks.registered[r]) {
          var u = r,
              c = S.Hooks.getRoot(u);n === a && (n = S.getPropertyValue(e, S.Names.prefixCheck(c)[0])), S.Normalizations.registered[c] && (n = S.Normalizations.registered[c]("extract", e, n)), l = S.Hooks.extractValue(u, n);
        } else if (S.Normalizations.registered[r]) {
          var p, g;p = S.Normalizations.registered[r]("name", e), "transform" !== p && (g = s(e, S.Names.prefixCheck(p)[0]), S.Values.isCSSNullValue(g) && S.Hooks.templates[r] && (g = S.Hooks.templates[r][1])), l = S.Normalizations.registered[r]("extract", e, g);
        }if (!/^[\d-]/.test(l)) if (i(e) && i(e).isSVG && S.Names.SVGAttribute(r)) {
          if (/^(height|width)$/i.test(r)) try {
            l = e.getBBox()[r];
          } catch (m) {
            l = 0;
          } else l = e.getAttribute(r);
        } else l = s(e, S.Names.prefixCheck(r)[0]);return S.Values.isCSSNullValue(l) && (l = 0), b.debug >= 2 && console.log("Get " + r + ": " + l), l;
      }, setPropertyValue: function (e, r, a, n, o) {
        var s = r;if ("scroll" === r) o.container ? o.container["scroll" + o.direction] = a : "Left" === o.direction ? t.scrollTo(a, o.alternateValue) : t.scrollTo(o.alternateValue, a);else if (S.Normalizations.registered[r] && "transform" === S.Normalizations.registered[r]("name", e)) S.Normalizations.registered[r]("inject", e, a), s = "transform", a = i(e).transformCache[r];else {
          if (S.Hooks.registered[r]) {
            var l = r,
                u = S.Hooks.getRoot(r);n = n || S.getPropertyValue(e, u), a = S.Hooks.injectValue(l, a, n), r = u;
          }if (S.Normalizations.registered[r] && (a = S.Normalizations.registered[r]("inject", e, a), r = S.Normalizations.registered[r]("name", e)), s = S.Names.prefixCheck(r)[0], 8 >= d) try {
            e.style[s] = a;
          } catch (c) {
            b.debug && console.log("Browser does not support [" + a + "] for [" + s + "]");
          } else i(e) && i(e).isSVG && S.Names.SVGAttribute(r) ? e.setAttribute(r, a) : e.style[s] = a;b.debug >= 2 && console.log("Set " + r + " (" + s + "): " + a);
        }return [s, a];
      }, flushTransformCache: function (e) {
        function t(t) {
          return parseFloat(S.getPropertyValue(e, t));
        }var r = "";if ((d || b.State.isAndroid && !b.State.isChrome) && i(e).isSVG) {
          var a = { translate: [t("translateX"), t("translateY")], skewX: [t("skewX")], skewY: [t("skewY")], scale: 1 !== t("scale") ? [t("scale"), t("scale")] : [t("scaleX"), t("scaleY")], rotate: [t("rotateZ"), 0, 0] };f.each(i(e).transformCache, function (e) {
            /^translate/i.test(e) ? e = "translate" : /^scale/i.test(e) ? e = "scale" : /^rotate/i.test(e) && (e = "rotate"), a[e] && (r += e + "(" + a[e].join(" ") + ") ", delete a[e]);
          });
        } else {
          var n, o;f.each(i(e).transformCache, function (t) {
            return n = i(e).transformCache[t], "transformPerspective" === t ? (o = n, !0) : (9 === d && "rotateZ" === t && (t = "rotate"), void (r += t + n + " "));
          }), o && (r = "perspective" + o + " " + r);
        }S.setPropertyValue(e, "transform", r);
      } };S.Hooks.register(), S.Normalizations.register(), b.hook = function (e, t, r) {
      var n = a;return e = o(e), f.each(e, function (e, o) {
        if (i(o) === a && b.init(o), r === a) n === a && (n = b.CSS.getPropertyValue(o, t));else {
          var s = b.CSS.setPropertyValue(o, t, r);"transform" === s[0] && b.CSS.flushTransformCache(o), n = s;
        }
      }), n;
    };var P = function () {
      function e() {
        return s ? k.promise || null : l;
      }function n() {
        function e(e) {
          function p(e, t) {
            var r = a,
                n = a,
                i = a;return m.isArray(e) ? (r = e[0], !m.isArray(e[1]) && /^[\d-]/.test(e[1]) || m.isFunction(e[1]) || S.RegEx.isHex.test(e[1]) ? i = e[1] : (m.isString(e[1]) && !S.RegEx.isHex.test(e[1]) || m.isArray(e[1])) && (n = t ? e[1] : u(e[1], s.duration), e[2] !== a && (i = e[2]))) : r = e, t || (n = n || s.easing), m.isFunction(r) && (r = r.call(o, V, w)), m.isFunction(i) && (i = i.call(o, V, w)), [r || 0, n, i];
          }function d(e, t) {
            var r, a;return a = (t || "0").toString().toLowerCase().replace(/[%A-z]+$/, function (e) {
              return r = e, "";
            }), r || (r = S.Values.getUnitType(e)), [a, r];
          }function h() {
            var e = { myParent: o.parentNode || r.body, position: S.getPropertyValue(o, "position"), fontSize: S.getPropertyValue(o, "fontSize") },
                a = e.position === L.lastPosition && e.myParent === L.lastParent,
                n = e.fontSize === L.lastFontSize;L.lastParent = e.myParent, L.lastPosition = e.position, L.lastFontSize = e.fontSize;var s = 100,
                l = {};if (n && a) l.emToPx = L.lastEmToPx, l.percentToPxWidth = L.lastPercentToPxWidth, l.percentToPxHeight = L.lastPercentToPxHeight;else {
              var u = i(o).isSVG ? r.createElementNS("http://www.w3.org/2000/svg", "rect") : r.createElement("div");b.init(u), e.myParent.appendChild(u), f.each(["overflow", "overflowX", "overflowY"], function (e, t) {
                b.CSS.setPropertyValue(u, t, "hidden");
              }), b.CSS.setPropertyValue(u, "position", e.position), b.CSS.setPropertyValue(u, "fontSize", e.fontSize), b.CSS.setPropertyValue(u, "boxSizing", "content-box"), f.each(["minWidth", "maxWidth", "width", "minHeight", "maxHeight", "height"], function (e, t) {
                b.CSS.setPropertyValue(u, t, s + "%");
              }), b.CSS.setPropertyValue(u, "paddingLeft", s + "em"), l.percentToPxWidth = L.lastPercentToPxWidth = (parseFloat(S.getPropertyValue(u, "width", null, !0)) || 1) / s, l.percentToPxHeight = L.lastPercentToPxHeight = (parseFloat(S.getPropertyValue(u, "height", null, !0)) || 1) / s, l.emToPx = L.lastEmToPx = (parseFloat(S.getPropertyValue(u, "paddingLeft")) || 1) / s, e.myParent.removeChild(u);
            }return null === L.remToPx && (L.remToPx = parseFloat(S.getPropertyValue(r.body, "fontSize")) || 16), null === L.vwToPx && (L.vwToPx = parseFloat(t.innerWidth) / 100, L.vhToPx = parseFloat(t.innerHeight) / 100), l.remToPx = L.remToPx, l.vwToPx = L.vwToPx, l.vhToPx = L.vhToPx, b.debug >= 1 && console.log("Unit ratios: " + JSON.stringify(l), o), l;
          }if (s.begin && 0 === V) try {
            s.begin.call(g, g);
          } catch (x) {
            setTimeout(function () {
              throw x;
            }, 1);
          }if ("scroll" === A) {
            var P,
                C,
                T,
                F = /^x$/i.test(s.axis) ? "Left" : "Top",
                j = parseFloat(s.offset) || 0;s.container ? m.isWrapped(s.container) || m.isNode(s.container) ? (s.container = s.container[0] || s.container, P = s.container["scroll" + F], T = P + f(o).position()[F.toLowerCase()] + j) : s.container = null : (P = b.State.scrollAnchor[b.State["scrollProperty" + F]], C = b.State.scrollAnchor[b.State["scrollProperty" + ("Left" === F ? "Top" : "Left")]], T = f(o).offset()[F.toLowerCase()] + j), l = { scroll: { rootPropertyValue: !1, startValue: P, currentValue: P, endValue: T, unitType: "", easing: s.easing, scrollData: { container: s.container, direction: F, alternateValue: C } }, element: o }, b.debug && console.log("tweensContainer (scroll): ", l.scroll, o);
          } else if ("reverse" === A) {
            if (!i(o).tweensContainer) return void f.dequeue(o, s.queue);"none" === i(o).opts.display && (i(o).opts.display = "auto"), "hidden" === i(o).opts.visibility && (i(o).opts.visibility = "visible"), i(o).opts.loop = !1, i(o).opts.begin = null, i(o).opts.complete = null, v.easing || delete s.easing, v.duration || delete s.duration, s = f.extend({}, i(o).opts, s);var E = f.extend(!0, {}, i(o).tweensContainer);for (var H in E) {
              if ("element" !== H) {
                var N = E[H].startValue;E[H].startValue = E[H].currentValue = E[H].endValue, E[H].endValue = N, m.isEmptyObject(v) || (E[H].easing = s.easing), b.debug && console.log("reverse tweensContainer (" + H + "): " + JSON.stringify(E[H]), o);
              }
            }l = E;
          } else if ("start" === A) {
            var E;i(o).tweensContainer && i(o).isAnimating === !0 && (E = i(o).tweensContainer), f.each(y, function (e, t) {
              if (RegExp("^" + S.Lists.colors.join("$|^") + "$").test(e)) {
                var r = p(t, !0),
                    n = r[0],
                    o = r[1],
                    i = r[2];if (S.RegEx.isHex.test(n)) {
                  for (var s = ["Red", "Green", "Blue"], l = S.Values.hexToRgb(n), u = i ? S.Values.hexToRgb(i) : a, c = 0; c < s.length; c++) {
                    var f = [l[c]];o && f.push(o), u !== a && f.push(u[c]), y[e + s[c]] = f;
                  }delete y[e];
                }
              }
            });for (var z in y) {
              var O = p(y[z]),
                  q = O[0],
                  $ = O[1],
                  M = O[2];z = S.Names.camelCase(z);var I = S.Hooks.getRoot(z),
                  B = !1;if (i(o).isSVG || "tween" === I || S.Names.prefixCheck(I)[1] !== !1 || S.Normalizations.registered[I] !== a) {
                (s.display !== a && null !== s.display && "none" !== s.display || s.visibility !== a && "hidden" !== s.visibility) && /opacity|filter/.test(z) && !M && 0 !== q && (M = 0), s._cacheValues && E && E[z] ? (M === a && (M = E[z].endValue + E[z].unitType), B = i(o).rootPropertyValueCache[I]) : S.Hooks.registered[z] ? M === a ? (B = S.getPropertyValue(o, I), M = S.getPropertyValue(o, z, B)) : B = S.Hooks.templates[I][1] : M === a && (M = S.getPropertyValue(o, z));var W,
                    G,
                    Y,
                    D = !1;if (W = d(z, M), M = W[0], Y = W[1], W = d(z, q), q = W[0].replace(/^([+-\/*])=/, function (e, t) {
                  return D = t, "";
                }), G = W[1], M = parseFloat(M) || 0, q = parseFloat(q) || 0, "%" === G && (/^(fontSize|lineHeight)$/.test(z) ? (q /= 100, G = "em") : /^scale/.test(z) ? (q /= 100, G = "") : /(Red|Green|Blue)$/i.test(z) && (q = q / 100 * 255, G = "")), /[\/*]/.test(D)) G = Y;else if (Y !== G && 0 !== M) if (0 === q) G = Y;else {
                  n = n || h();var Q = /margin|padding|left|right|width|text|word|letter/i.test(z) || /X$/.test(z) || "x" === z ? "x" : "y";switch (Y) {case "%":
                      M *= "x" === Q ? n.percentToPxWidth : n.percentToPxHeight;break;case "px":
                      break;default:
                      M *= n[Y + "ToPx"];}switch (G) {case "%":
                      M *= 1 / ("x" === Q ? n.percentToPxWidth : n.percentToPxHeight);break;case "px":
                      break;default:
                      M *= 1 / n[G + "ToPx"];}
                }switch (D) {case "+":
                    q = M + q;break;case "-":
                    q = M - q;break;case "*":
                    q = M * q;break;case "/":
                    q = M / q;}l[z] = { rootPropertyValue: B, startValue: M, currentValue: M, endValue: q, unitType: G, easing: $ }, b.debug && console.log("tweensContainer (" + z + "): " + JSON.stringify(l[z]), o);
              } else b.debug && console.log("Skipping [" + I + "] due to a lack of browser support.");
            }l.element = o;
          }l.element && (S.Values.addClass(o, "velocity-animating"), R.push(l), "" === s.queue && (i(o).tweensContainer = l, i(o).opts = s), i(o).isAnimating = !0, V === w - 1 ? (b.State.calls.push([R, g, s, null, k.resolver]), b.State.isTicking === !1 && (b.State.isTicking = !0, c())) : V++);
        }var n,
            o = this,
            s = f.extend({}, b.defaults, v),
            l = {};switch (i(o) === a && b.init(o), parseFloat(s.delay) && s.queue !== !1 && f.queue(o, s.queue, function (e) {
          b.velocityQueueEntryFlag = !0, i(o).delayTimer = { setTimeout: setTimeout(e, parseFloat(s.delay)), next: e };
        }), s.duration.toString().toLowerCase()) {case "fast":
            s.duration = 200;break;case "normal":
            s.duration = h;break;case "slow":
            s.duration = 600;break;default:
            s.duration = parseFloat(s.duration) || 1;}b.mock !== !1 && (b.mock === !0 ? s.duration = s.delay = 1 : (s.duration *= parseFloat(b.mock) || 1, s.delay *= parseFloat(b.mock) || 1)), s.easing = u(s.easing, s.duration), s.begin && !m.isFunction(s.begin) && (s.begin = null), s.progress && !m.isFunction(s.progress) && (s.progress = null), s.complete && !m.isFunction(s.complete) && (s.complete = null), s.display !== a && null !== s.display && (s.display = s.display.toString().toLowerCase(), "auto" === s.display && (s.display = b.CSS.Values.getDisplayType(o))), s.visibility !== a && null !== s.visibility && (s.visibility = s.visibility.toString().toLowerCase()), s.mobileHA = s.mobileHA && b.State.isMobile && !b.State.isGingerbread, s.queue === !1 ? s.delay ? setTimeout(e, s.delay) : e() : f.queue(o, s.queue, function (t, r) {
          return r === !0 ? (k.promise && k.resolver(g), !0) : (b.velocityQueueEntryFlag = !0, void e(t));
        }), "" !== s.queue && "fx" !== s.queue || "inprogress" === f.queue(o)[0] || f.dequeue(o);
      }var s,
          l,
          d,
          g,
          y,
          v,
          x = arguments[0] && (arguments[0].p || f.isPlainObject(arguments[0].properties) && !arguments[0].properties.names || m.isString(arguments[0].properties));if (m.isWrapped(this) ? (s = !1, d = 0, g = this, l = this) : (s = !0, d = 1, g = x ? arguments[0].elements || arguments[0].e : arguments[0]), g = o(g)) {
        x ? (y = arguments[0].properties || arguments[0].p, v = arguments[0].options || arguments[0].o) : (y = arguments[d], v = arguments[d + 1]);var w = g.length,
            V = 0;if (!/^(stop|finish)$/i.test(y) && !f.isPlainObject(v)) {
          var C = d + 1;v = {};for (var T = C; T < arguments.length; T++) {
            m.isArray(arguments[T]) || !/^(fast|normal|slow)$/i.test(arguments[T]) && !/^\d/.test(arguments[T]) ? m.isString(arguments[T]) || m.isArray(arguments[T]) ? v.easing = arguments[T] : m.isFunction(arguments[T]) && (v.complete = arguments[T]) : v.duration = arguments[T];
          }
        }var k = { promise: null, resolver: null, rejecter: null };s && b.Promise && (k.promise = new b.Promise(function (e, t) {
          k.resolver = e, k.rejecter = t;
        }));var A;switch (y) {case "scroll":
            A = "scroll";break;case "reverse":
            A = "reverse";break;case "finish":case "stop":
            f.each(g, function (e, t) {
              i(t) && i(t).delayTimer && (clearTimeout(i(t).delayTimer.setTimeout), i(t).delayTimer.next && i(t).delayTimer.next(), delete i(t).delayTimer);
            });var F = [];return f.each(b.State.calls, function (e, t) {
              t && f.each(t[1], function (r, n) {
                var o = v === a ? "" : v;return o === !0 || t[2].queue === o || v === a && t[2].queue === !1 ? void f.each(g, function (r, a) {
                  a === n && ((v === !0 || m.isString(v)) && (f.each(f.queue(a, m.isString(v) ? v : ""), function (e, t) {
                    m.isFunction(t) && t(null, !0);
                  }), f.queue(a, m.isString(v) ? v : "", [])), "stop" === y ? (i(a) && i(a).tweensContainer && o !== !1 && f.each(i(a).tweensContainer, function (e, t) {
                    t.endValue = t.currentValue;
                  }), F.push(e)) : "finish" === y && (t[2].duration = 1));
                }) : !0;
              });
            }), "stop" === y && (f.each(F, function (e, t) {
              p(t, !0);
            }), k.promise && k.resolver(g)), e();default:
            if (!f.isPlainObject(y) || m.isEmptyObject(y)) {
              if (m.isString(y) && b.Redirects[y]) {
                var j = f.extend({}, v),
                    E = j.duration,
                    H = j.delay || 0;return j.backwards === !0 && (g = f.extend(!0, [], g).reverse()), f.each(g, function (e, t) {
                  parseFloat(j.stagger) ? j.delay = H + parseFloat(j.stagger) * e : m.isFunction(j.stagger) && (j.delay = H + j.stagger.call(t, e, w)), j.drag && (j.duration = parseFloat(E) || (/^(callout|transition)/.test(y) ? 1e3 : h), j.duration = Math.max(j.duration * (j.backwards ? 1 - e / w : (e + 1) / w), .75 * j.duration, 200)), b.Redirects[y].call(t, t, j || {}, e, w, g, k.promise ? k : a);
                }), e();
              }var N = "Velocity: First argument (" + y + ") was not a property map, a known action, or a registered redirect. Aborting.";return k.promise ? k.rejecter(new Error(N)) : console.log(N), e();
            }A = "start";}var L = { lastParent: null, lastPosition: null, lastFontSize: null, lastPercentToPxWidth: null, lastPercentToPxHeight: null, lastEmToPx: null, remToPx: null, vwToPx: null, vhToPx: null },
            R = [];f.each(g, function (e, t) {
          m.isNode(t) && n.call(t);
        });var z,
            j = f.extend({}, b.defaults, v);if (j.loop = parseInt(j.loop), z = 2 * j.loop - 1, j.loop) for (var O = 0; z > O; O++) {
          var q = { delay: j.delay, progress: j.progress };O === z - 1 && (q.display = j.display, q.visibility = j.visibility, q.complete = j.complete), P(g, "reverse", q);
        }return e();
      }
    };b = f.extend(P, b), b.animate = P;var w = t.requestAnimationFrame || g;return b.State.isMobile || r.hidden === a || r.addEventListener("visibilitychange", function () {
      r.hidden ? (w = function (e) {
        return setTimeout(function () {
          e(!0);
        }, 16);
      }, c()) : w = t.requestAnimationFrame || g;
    }), e.Velocity = b, e !== t && (e.fn.velocity = P, e.fn.velocity.defaults = b.defaults), f.each(["Down", "Up"], function (e, t) {
      b.Redirects["slide" + t] = function (e, r, n, o, i, s) {
        var l = f.extend({}, r),
            u = l.begin,
            c = l.complete,
            p = { height: "", marginTop: "", marginBottom: "", paddingTop: "", paddingBottom: "" },
            d = {};l.display === a && (l.display = "Down" === t ? "inline" === b.CSS.Values.getDisplayType(e) ? "inline-block" : "block" : "none"), l.begin = function () {
          u && u.call(i, i);for (var r in p) {
            d[r] = e.style[r];var a = b.CSS.getPropertyValue(e, r);p[r] = "Down" === t ? [a, 0] : [0, a];
          }d.overflow = e.style.overflow, e.style.overflow = "hidden";
        }, l.complete = function () {
          for (var t in d) {
            e.style[t] = d[t];
          }c && c.call(i, i), s && s.resolver(i);
        }, b(e, p, l);
      };
    }), f.each(["In", "Out"], function (e, t) {
      b.Redirects["fade" + t] = function (e, r, n, o, i, s) {
        var l = f.extend({}, r),
            u = { opacity: "In" === t ? 1 : 0 },
            c = l.complete;l.complete = n !== o - 1 ? l.begin = null : function () {
          c && c.call(i, i), s && s.resolver(i);
        }, l.display === a && (l.display = "In" === t ? "auto" : "none"), b(this, u, l);
      };
    }), b;
  }(window.jQuery || window.Zepto || window, window, document);
}));
;!function (a, b, c, d) {
  "use strict";
  function k(a, b, c) {
    return setTimeout(q(a, c), b);
  }function l(a, b, c) {
    return Array.isArray(a) ? (m(a, c[b], c), !0) : !1;
  }function m(a, b, c) {
    var e;if (a) if (a.forEach) a.forEach(b, c);else if (a.length !== d) for (e = 0; e < a.length;) {
      b.call(c, a[e], e, a), e++;
    } else for (e in a) {
      a.hasOwnProperty(e) && b.call(c, a[e], e, a);
    }
  }function n(a, b, c) {
    for (var e = Object.keys(b), f = 0; f < e.length;) {
      (!c || c && a[e[f]] === d) && (a[e[f]] = b[e[f]]), f++;
    }return a;
  }function o(a, b) {
    return n(a, b, !0);
  }function p(a, b, c) {
    var e,
        d = b.prototype;e = a.prototype = Object.create(d), e.constructor = a, e._super = d, c && n(e, c);
  }function q(a, b) {
    return function () {
      return a.apply(b, arguments);
    };
  }function r(a, b) {
    return typeof a == g ? a.apply(b ? b[0] || d : d, b) : a;
  }function s(a, b) {
    return a === d ? b : a;
  }function t(a, b, c) {
    m(x(b), function (b) {
      a.addEventListener(b, c, !1);
    });
  }function u(a, b, c) {
    m(x(b), function (b) {
      a.removeEventListener(b, c, !1);
    });
  }function v(a, b) {
    for (; a;) {
      if (a == b) return !0;a = a.parentNode;
    }return !1;
  }function w(a, b) {
    return a.indexOf(b) > -1;
  }function x(a) {
    return a.trim().split(/\s+/g);
  }function y(a, b, c) {
    if (a.indexOf && !c) return a.indexOf(b);for (var d = 0; d < a.length;) {
      if (c && a[d][c] == b || !c && a[d] === b) return d;d++;
    }return -1;
  }function z(a) {
    return Array.prototype.slice.call(a, 0);
  }function A(a, b, c) {
    for (var d = [], e = [], f = 0; f < a.length;) {
      var g = b ? a[f][b] : a[f];y(e, g) < 0 && d.push(a[f]), e[f] = g, f++;
    }return c && (d = b ? d.sort(function (a, c) {
      return a[b] > c[b];
    }) : d.sort()), d;
  }function B(a, b) {
    for (var c, f, g = b[0].toUpperCase() + b.slice(1), h = 0; h < e.length;) {
      if (c = e[h], f = c ? c + g : b, f in a) return f;h++;
    }return d;
  }function D() {
    return C++;
  }function E(a) {
    var b = a.ownerDocument;return b.defaultView || b.parentWindow;
  }function ab(a, b) {
    var c = this;this.manager = a, this.callback = b, this.element = a.element, this.target = a.options.inputTarget, this.domHandler = function (b) {
      r(a.options.enable, [a]) && c.handler(b);
    }, this.init();
  }function bb(a) {
    var b,
        c = a.options.inputClass;return b = c ? c : H ? wb : I ? Eb : G ? Gb : rb, new b(a, cb);
  }function cb(a, b, c) {
    var d = c.pointers.length,
        e = c.changedPointers.length,
        f = b & O && 0 === d - e,
        g = b & (Q | R) && 0 === d - e;c.isFirst = !!f, c.isFinal = !!g, f && (a.session = {}), c.eventType = b, db(a, c), a.emit("hammer.input", c), a.recognize(c), a.session.prevInput = c;
  }function db(a, b) {
    var c = a.session,
        d = b.pointers,
        e = d.length;c.firstInput || (c.firstInput = gb(b)), e > 1 && !c.firstMultiple ? c.firstMultiple = gb(b) : 1 === e && (c.firstMultiple = !1);var f = c.firstInput,
        g = c.firstMultiple,
        h = g ? g.center : f.center,
        i = b.center = hb(d);b.timeStamp = j(), b.deltaTime = b.timeStamp - f.timeStamp, b.angle = lb(h, i), b.distance = kb(h, i), eb(c, b), b.offsetDirection = jb(b.deltaX, b.deltaY), b.scale = g ? nb(g.pointers, d) : 1, b.rotation = g ? mb(g.pointers, d) : 0, fb(c, b);var k = a.element;v(b.srcEvent.target, k) && (k = b.srcEvent.target), b.target = k;
  }function eb(a, b) {
    var c = b.center,
        d = a.offsetDelta || {},
        e = a.prevDelta || {},
        f = a.prevInput || {};(b.eventType === O || f.eventType === Q) && (e = a.prevDelta = { x: f.deltaX || 0, y: f.deltaY || 0 }, d = a.offsetDelta = { x: c.x, y: c.y }), b.deltaX = e.x + (c.x - d.x), b.deltaY = e.y + (c.y - d.y);
  }function fb(a, b) {
    var f,
        g,
        h,
        j,
        c = a.lastInterval || b,
        e = b.timeStamp - c.timeStamp;if (b.eventType != R && (e > N || c.velocity === d)) {
      var k = c.deltaX - b.deltaX,
          l = c.deltaY - b.deltaY,
          m = ib(e, k, l);g = m.x, h = m.y, f = i(m.x) > i(m.y) ? m.x : m.y, j = jb(k, l), a.lastInterval = b;
    } else f = c.velocity, g = c.velocityX, h = c.velocityY, j = c.direction;b.velocity = f, b.velocityX = g, b.velocityY = h, b.direction = j;
  }function gb(a) {
    for (var b = [], c = 0; c < a.pointers.length;) {
      b[c] = { clientX: h(a.pointers[c].clientX), clientY: h(a.pointers[c].clientY) }, c++;
    }return { timeStamp: j(), pointers: b, center: hb(b), deltaX: a.deltaX, deltaY: a.deltaY };
  }function hb(a) {
    var b = a.length;if (1 === b) return { x: h(a[0].clientX), y: h(a[0].clientY) };for (var c = 0, d = 0, e = 0; b > e;) {
      c += a[e].clientX, d += a[e].clientY, e++;
    }return { x: h(c / b), y: h(d / b) };
  }function ib(a, b, c) {
    return { x: b / a || 0, y: c / a || 0 };
  }function jb(a, b) {
    return a === b ? S : i(a) >= i(b) ? a > 0 ? T : U : b > 0 ? V : W;
  }function kb(a, b, c) {
    c || (c = $);var d = b[c[0]] - a[c[0]],
        e = b[c[1]] - a[c[1]];return Math.sqrt(d * d + e * e);
  }function lb(a, b, c) {
    c || (c = $);var d = b[c[0]] - a[c[0]],
        e = b[c[1]] - a[c[1]];return 180 * Math.atan2(e, d) / Math.PI;
  }function mb(a, b) {
    return lb(b[1], b[0], _) - lb(a[1], a[0], _);
  }function nb(a, b) {
    return kb(b[0], b[1], _) / kb(a[0], a[1], _);
  }function rb() {
    this.evEl = pb, this.evWin = qb, this.allow = !0, this.pressed = !1, ab.apply(this, arguments);
  }function wb() {
    this.evEl = ub, this.evWin = vb, ab.apply(this, arguments), this.store = this.manager.session.pointerEvents = [];
  }function Ab() {
    this.evTarget = yb, this.evWin = zb, this.started = !1, ab.apply(this, arguments);
  }function Bb(a, b) {
    var c = z(a.touches),
        d = z(a.changedTouches);return b & (Q | R) && (c = A(c.concat(d), "identifier", !0)), [c, d];
  }function Eb() {
    this.evTarget = Db, this.targetIds = {}, ab.apply(this, arguments);
  }function Fb(a, b) {
    var c = z(a.touches),
        d = this.targetIds;if (b & (O | P) && 1 === c.length) return d[c[0].identifier] = !0, [c, c];var e,
        f,
        g = z(a.changedTouches),
        h = [],
        i = this.target;if (f = c.filter(function (a) {
      return v(a.target, i);
    }), b === O) for (e = 0; e < f.length;) {
      d[f[e].identifier] = !0, e++;
    }for (e = 0; e < g.length;) {
      d[g[e].identifier] && h.push(g[e]), b & (Q | R) && delete d[g[e].identifier], e++;
    }return h.length ? [A(f.concat(h), "identifier", !0), h] : void 0;
  }function Gb() {
    ab.apply(this, arguments);var a = q(this.handler, this);this.touch = new Eb(this.manager, a), this.mouse = new rb(this.manager, a);
  }function Pb(a, b) {
    this.manager = a, this.set(b);
  }function Qb(a) {
    if (w(a, Mb)) return Mb;var b = w(a, Nb),
        c = w(a, Ob);return b && c ? Nb + " " + Ob : b || c ? b ? Nb : Ob : w(a, Lb) ? Lb : Kb;
  }function Yb(a) {
    this.id = D(), this.manager = null, this.options = o(a || {}, this.defaults), this.options.enable = s(this.options.enable, !0), this.state = Rb, this.simultaneous = {}, this.requireFail = [];
  }function Zb(a) {
    return a & Wb ? "cancel" : a & Ub ? "end" : a & Tb ? "move" : a & Sb ? "start" : "";
  }function $b(a) {
    return a == W ? "down" : a == V ? "up" : a == T ? "left" : a == U ? "right" : "";
  }function _b(a, b) {
    var c = b.manager;return c ? c.get(a) : a;
  }function ac() {
    Yb.apply(this, arguments);
  }function bc() {
    ac.apply(this, arguments), this.pX = null, this.pY = null;
  }function cc() {
    ac.apply(this, arguments);
  }function dc() {
    Yb.apply(this, arguments), this._timer = null, this._input = null;
  }function ec() {
    ac.apply(this, arguments);
  }function fc() {
    ac.apply(this, arguments);
  }function gc() {
    Yb.apply(this, arguments), this.pTime = !1, this.pCenter = !1, this._timer = null, this._input = null, this.count = 0;
  }function hc(a, b) {
    return b = b || {}, b.recognizers = s(b.recognizers, hc.defaults.preset), new kc(a, b);
  }function kc(a, b) {
    b = b || {}, this.options = o(b, hc.defaults), this.options.inputTarget = this.options.inputTarget || a, this.handlers = {}, this.session = {}, this.recognizers = [], this.element = a, this.input = bb(this), this.touchAction = new Pb(this, this.options.touchAction), lc(this, !0), m(b.recognizers, function (a) {
      var b = this.add(new a[0](a[1]));a[2] && b.recognizeWith(a[2]), a[3] && b.requireFailure(a[3]);
    }, this);
  }function lc(a, b) {
    var c = a.element;m(a.options.cssProps, function (a, d) {
      c.style[B(c.style, d)] = b ? a : "";
    });
  }function mc(a, c) {
    var d = b.createEvent("Event");d.initEvent(a, !0, !0), d.gesture = c, c.target.dispatchEvent(d);
  }var e = ["", "webkit", "moz", "MS", "ms", "o"],
      f = b.createElement("div"),
      g = "function",
      h = Math.round,
      i = Math.abs,
      j = Date.now,
      C = 1,
      F = /mobile|tablet|ip(ad|hone|od)|android/i,
      G = "ontouchstart" in a,
      H = B(a, "PointerEvent") !== d,
      I = G && F.test(navigator.userAgent),
      J = "touch",
      K = "pen",
      L = "mouse",
      M = "kinect",
      N = 25,
      O = 1,
      P = 2,
      Q = 4,
      R = 8,
      S = 1,
      T = 2,
      U = 4,
      V = 8,
      W = 16,
      X = T | U,
      Y = V | W,
      Z = X | Y,
      $ = ["x", "y"],
      _ = ["clientX", "clientY"];ab.prototype = { handler: function () {}, init: function () {
      this.evEl && t(this.element, this.evEl, this.domHandler), this.evTarget && t(this.target, this.evTarget, this.domHandler), this.evWin && t(E(this.element), this.evWin, this.domHandler);
    }, destroy: function () {
      this.evEl && u(this.element, this.evEl, this.domHandler), this.evTarget && u(this.target, this.evTarget, this.domHandler), this.evWin && u(E(this.element), this.evWin, this.domHandler);
    } };var ob = { mousedown: O, mousemove: P, mouseup: Q },
      pb = "mousedown",
      qb = "mousemove mouseup";p(rb, ab, { handler: function (a) {
      var b = ob[a.type];b & O && 0 === a.button && (this.pressed = !0), b & P && 1 !== a.which && (b = Q), this.pressed && this.allow && (b & Q && (this.pressed = !1), this.callback(this.manager, b, { pointers: [a], changedPointers: [a], pointerType: L, srcEvent: a }));
    } });var sb = { pointerdown: O, pointermove: P, pointerup: Q, pointercancel: R, pointerout: R },
      tb = { 2: J, 3: K, 4: L, 5: M },
      ub = "pointerdown",
      vb = "pointermove pointerup pointercancel";a.MSPointerEvent && (ub = "MSPointerDown", vb = "MSPointerMove MSPointerUp MSPointerCancel"), p(wb, ab, { handler: function (a) {
      var b = this.store,
          c = !1,
          d = a.type.toLowerCase().replace("ms", ""),
          e = sb[d],
          f = tb[a.pointerType] || a.pointerType,
          g = f == J,
          h = y(b, a.pointerId, "pointerId");e & O && (0 === a.button || g) ? 0 > h && (b.push(a), h = b.length - 1) : e & (Q | R) && (c = !0), 0 > h || (b[h] = a, this.callback(this.manager, e, { pointers: b, changedPointers: [a], pointerType: f, srcEvent: a }), c && b.splice(h, 1));
    } });var xb = { touchstart: O, touchmove: P, touchend: Q, touchcancel: R },
      yb = "touchstart",
      zb = "touchstart touchmove touchend touchcancel";p(Ab, ab, { handler: function (a) {
      var b = xb[a.type];if (b === O && (this.started = !0), this.started) {
        var c = Bb.call(this, a, b);b & (Q | R) && 0 === c[0].length - c[1].length && (this.started = !1), this.callback(this.manager, b, { pointers: c[0], changedPointers: c[1], pointerType: J, srcEvent: a });
      }
    } });var Cb = { touchstart: O, touchmove: P, touchend: Q, touchcancel: R },
      Db = "touchstart touchmove touchend touchcancel";p(Eb, ab, { handler: function (a) {
      var b = Cb[a.type],
          c = Fb.call(this, a, b);c && this.callback(this.manager, b, { pointers: c[0], changedPointers: c[1], pointerType: J, srcEvent: a });
    } }), p(Gb, ab, { handler: function (a, b, c) {
      var d = c.pointerType == J,
          e = c.pointerType == L;if (d) this.mouse.allow = !1;else if (e && !this.mouse.allow) return;b & (Q | R) && (this.mouse.allow = !0), this.callback(a, b, c);
    }, destroy: function () {
      this.touch.destroy(), this.mouse.destroy();
    } });var Hb = B(f.style, "touchAction"),
      Ib = Hb !== d,
      Jb = "compute",
      Kb = "auto",
      Lb = "manipulation",
      Mb = "none",
      Nb = "pan-x",
      Ob = "pan-y";Pb.prototype = { set: function (a) {
      a == Jb && (a = this.compute()), Ib && (this.manager.element.style[Hb] = a), this.actions = a.toLowerCase().trim();
    }, update: function () {
      this.set(this.manager.options.touchAction);
    }, compute: function () {
      var a = [];return m(this.manager.recognizers, function (b) {
        r(b.options.enable, [b]) && (a = a.concat(b.getTouchAction()));
      }), Qb(a.join(" "));
    }, preventDefaults: function (a) {
      if (!Ib) {
        var b = a.srcEvent,
            c = a.offsetDirection;if (this.manager.session.prevented) return b.preventDefault(), void 0;var d = this.actions,
            e = w(d, Mb),
            f = w(d, Ob),
            g = w(d, Nb);return e || f && c & X || g && c & Y ? this.preventSrc(b) : void 0;
      }
    }, preventSrc: function (a) {
      this.manager.session.prevented = !0, a.preventDefault();
    } };var Rb = 1,
      Sb = 2,
      Tb = 4,
      Ub = 8,
      Vb = Ub,
      Wb = 16,
      Xb = 32;Yb.prototype = { defaults: {}, set: function (a) {
      return n(this.options, a), this.manager && this.manager.touchAction.update(), this;
    }, recognizeWith: function (a) {
      if (l(a, "recognizeWith", this)) return this;var b = this.simultaneous;return a = _b(a, this), b[a.id] || (b[a.id] = a, a.recognizeWith(this)), this;
    }, dropRecognizeWith: function (a) {
      return l(a, "dropRecognizeWith", this) ? this : (a = _b(a, this), delete this.simultaneous[a.id], this);
    }, requireFailure: function (a) {
      if (l(a, "requireFailure", this)) return this;var b = this.requireFail;return a = _b(a, this), -1 === y(b, a) && (b.push(a), a.requireFailure(this)), this;
    }, dropRequireFailure: function (a) {
      if (l(a, "dropRequireFailure", this)) return this;a = _b(a, this);var b = y(this.requireFail, a);return b > -1 && this.requireFail.splice(b, 1), this;
    }, hasRequireFailures: function () {
      return this.requireFail.length > 0;
    }, canRecognizeWith: function (a) {
      return !!this.simultaneous[a.id];
    }, emit: function (a) {
      function d(d) {
        b.manager.emit(b.options.event + (d ? Zb(c) : ""), a);
      }var b = this,
          c = this.state;Ub > c && d(!0), d(), c >= Ub && d(!0);
    }, tryEmit: function (a) {
      return this.canEmit() ? this.emit(a) : (this.state = Xb, void 0);
    }, canEmit: function () {
      for (var a = 0; a < this.requireFail.length;) {
        if (!(this.requireFail[a].state & (Xb | Rb))) return !1;a++;
      }return !0;
    }, recognize: function (a) {
      var b = n({}, a);return r(this.options.enable, [this, b]) ? (this.state & (Vb | Wb | Xb) && (this.state = Rb), this.state = this.process(b), this.state & (Sb | Tb | Ub | Wb) && this.tryEmit(b), void 0) : (this.reset(), this.state = Xb, void 0);
    }, process: function () {}, getTouchAction: function () {}, reset: function () {} }, p(ac, Yb, { defaults: { pointers: 1 }, attrTest: function (a) {
      var b = this.options.pointers;return 0 === b || a.pointers.length === b;
    }, process: function (a) {
      var b = this.state,
          c = a.eventType,
          d = b & (Sb | Tb),
          e = this.attrTest(a);return d && (c & R || !e) ? b | Wb : d || e ? c & Q ? b | Ub : b & Sb ? b | Tb : Sb : Xb;
    } }), p(bc, ac, { defaults: { event: "pan", threshold: 10, pointers: 1, direction: Z }, getTouchAction: function () {
      var a = this.options.direction,
          b = [];return a & X && b.push(Ob), a & Y && b.push(Nb), b;
    }, directionTest: function (a) {
      var b = this.options,
          c = !0,
          d = a.distance,
          e = a.direction,
          f = a.deltaX,
          g = a.deltaY;return e & b.direction || (b.direction & X ? (e = 0 === f ? S : 0 > f ? T : U, c = f != this.pX, d = Math.abs(a.deltaX)) : (e = 0 === g ? S : 0 > g ? V : W, c = g != this.pY, d = Math.abs(a.deltaY))), a.direction = e, c && d > b.threshold && e & b.direction;
    }, attrTest: function (a) {
      return ac.prototype.attrTest.call(this, a) && (this.state & Sb || !(this.state & Sb) && this.directionTest(a));
    }, emit: function (a) {
      this.pX = a.deltaX, this.pY = a.deltaY;var b = $b(a.direction);b && this.manager.emit(this.options.event + b, a), this._super.emit.call(this, a);
    } }), p(cc, ac, { defaults: { event: "pinch", threshold: 0, pointers: 2 }, getTouchAction: function () {
      return [Mb];
    }, attrTest: function (a) {
      return this._super.attrTest.call(this, a) && (Math.abs(a.scale - 1) > this.options.threshold || this.state & Sb);
    }, emit: function (a) {
      if (this._super.emit.call(this, a), 1 !== a.scale) {
        var b = a.scale < 1 ? "in" : "out";this.manager.emit(this.options.event + b, a);
      }
    } }), p(dc, Yb, { defaults: { event: "press", pointers: 1, time: 500, threshold: 5 }, getTouchAction: function () {
      return [Kb];
    }, process: function (a) {
      var b = this.options,
          c = a.pointers.length === b.pointers,
          d = a.distance < b.threshold,
          e = a.deltaTime > b.time;if (this._input = a, !d || !c || a.eventType & (Q | R) && !e) this.reset();else if (a.eventType & O) this.reset(), this._timer = k(function () {
        this.state = Vb, this.tryEmit();
      }, b.time, this);else if (a.eventType & Q) return Vb;return Xb;
    }, reset: function () {
      clearTimeout(this._timer);
    }, emit: function (a) {
      this.state === Vb && (a && a.eventType & Q ? this.manager.emit(this.options.event + "up", a) : (this._input.timeStamp = j(), this.manager.emit(this.options.event, this._input)));
    } }), p(ec, ac, { defaults: { event: "rotate", threshold: 0, pointers: 2 }, getTouchAction: function () {
      return [Mb];
    }, attrTest: function (a) {
      return this._super.attrTest.call(this, a) && (Math.abs(a.rotation) > this.options.threshold || this.state & Sb);
    } }), p(fc, ac, { defaults: { event: "swipe", threshold: 10, velocity: .65, direction: X | Y, pointers: 1 }, getTouchAction: function () {
      return bc.prototype.getTouchAction.call(this);
    }, attrTest: function (a) {
      var c,
          b = this.options.direction;return b & (X | Y) ? c = a.velocity : b & X ? c = a.velocityX : b & Y && (c = a.velocityY), this._super.attrTest.call(this, a) && b & a.direction && a.distance > this.options.threshold && i(c) > this.options.velocity && a.eventType & Q;
    }, emit: function (a) {
      var b = $b(a.direction);b && this.manager.emit(this.options.event + b, a), this.manager.emit(this.options.event, a);
    } }), p(gc, Yb, { defaults: { event: "tap", pointers: 1, taps: 1, interval: 300, time: 250, threshold: 2, posThreshold: 10 }, getTouchAction: function () {
      return [Lb];
    }, process: function (a) {
      var b = this.options,
          c = a.pointers.length === b.pointers,
          d = a.distance < b.threshold,
          e = a.deltaTime < b.time;if (this.reset(), a.eventType & O && 0 === this.count) return this.failTimeout();if (d && e && c) {
        if (a.eventType != Q) return this.failTimeout();var f = this.pTime ? a.timeStamp - this.pTime < b.interval : !0,
            g = !this.pCenter || kb(this.pCenter, a.center) < b.posThreshold;this.pTime = a.timeStamp, this.pCenter = a.center, g && f ? this.count += 1 : this.count = 1, this._input = a;var h = this.count % b.taps;if (0 === h) return this.hasRequireFailures() ? (this._timer = k(function () {
          this.state = Vb, this.tryEmit();
        }, b.interval, this), Sb) : Vb;
      }return Xb;
    }, failTimeout: function () {
      return this._timer = k(function () {
        this.state = Xb;
      }, this.options.interval, this), Xb;
    }, reset: function () {
      clearTimeout(this._timer);
    }, emit: function () {
      this.state == Vb && (this._input.tapCount = this.count, this.manager.emit(this.options.event, this._input));
    } }), hc.VERSION = "2.0.4", hc.defaults = { domEvents: !1, touchAction: Jb, enable: !0, inputTarget: null, inputClass: null, preset: [[ec, { enable: !1 }], [cc, { enable: !1 }, ["rotate"]], [fc, { direction: X }], [bc, { direction: X }, ["swipe"]], [gc], [gc, { event: "doubletap", taps: 2 }, ["tap"]], [dc]], cssProps: { userSelect: "default", touchSelect: "none", touchCallout: "none", contentZooming: "none", userDrag: "none", tapHighlightColor: "rgba(0,0,0,0)" } };var ic = 1,
      jc = 2;kc.prototype = { set: function (a) {
      return n(this.options, a), a.touchAction && this.touchAction.update(), a.inputTarget && (this.input.destroy(), this.input.target = a.inputTarget, this.input.init()), this;
    }, stop: function (a) {
      this.session.stopped = a ? jc : ic;
    }, recognize: function (a) {
      var b = this.session;if (!b.stopped) {
        this.touchAction.preventDefaults(a);var c,
            d = this.recognizers,
            e = b.curRecognizer;(!e || e && e.state & Vb) && (e = b.curRecognizer = null);for (var f = 0; f < d.length;) {
          c = d[f], b.stopped === jc || e && c != e && !c.canRecognizeWith(e) ? c.reset() : c.recognize(a), !e && c.state & (Sb | Tb | Ub) && (e = b.curRecognizer = c), f++;
        }
      }
    }, get: function (a) {
      if (a instanceof Yb) return a;for (var b = this.recognizers, c = 0; c < b.length; c++) {
        if (b[c].options.event == a) return b[c];
      }return null;
    }, add: function (a) {
      if (l(a, "add", this)) return this;var b = this.get(a.options.event);return b && this.remove(b), this.recognizers.push(a), a.manager = this, this.touchAction.update(), a;
    }, remove: function (a) {
      if (l(a, "remove", this)) return this;var b = this.recognizers;return a = this.get(a), b.splice(y(b, a), 1), this.touchAction.update(), this;
    }, on: function (a, b) {
      var c = this.handlers;return m(x(a), function (a) {
        c[a] = c[a] || [], c[a].push(b);
      }), this;
    }, off: function (a, b) {
      var c = this.handlers;return m(x(a), function (a) {
        b ? c[a].splice(y(c[a], b), 1) : delete c[a];
      }), this;
    }, emit: function (a, b) {
      this.options.domEvents && mc(a, b);var c = this.handlers[a] && this.handlers[a].slice();if (c && c.length) {
        b.type = a, b.preventDefault = function () {
          b.srcEvent.preventDefault();
        };for (var d = 0; d < c.length;) {
          c[d](b), d++;
        }
      }
    }, destroy: function () {
      this.element && lc(this, !1), this.handlers = {}, this.session = {}, this.input.destroy(), this.element = null;
    } }, n(hc, { INPUT_START: O, INPUT_MOVE: P, INPUT_END: Q, INPUT_CANCEL: R, STATE_POSSIBLE: Rb, STATE_BEGAN: Sb, STATE_CHANGED: Tb, STATE_ENDED: Ub, STATE_RECOGNIZED: Vb, STATE_CANCELLED: Wb, STATE_FAILED: Xb, DIRECTION_NONE: S, DIRECTION_LEFT: T, DIRECTION_RIGHT: U, DIRECTION_UP: V, DIRECTION_DOWN: W, DIRECTION_HORIZONTAL: X, DIRECTION_VERTICAL: Y, DIRECTION_ALL: Z, Manager: kc, Input: ab, TouchAction: Pb, TouchInput: Eb, MouseInput: rb, PointerEventInput: wb, TouchMouseInput: Gb, SingleTouchInput: Ab, Recognizer: Yb, AttrRecognizer: ac, Tap: gc, Pan: bc, Swipe: fc, Pinch: cc, Rotate: ec, Press: dc, on: t, off: u, each: m, merge: o, extend: n, inherit: p, bindFn: q, prefixed: B }), typeof define == g && define.amd ? define(function () {
    return hc;
  }) : "undefined" != typeof module && module.exports ? module.exports = hc : a[c] = hc;
}(window, document, "Hammer");;(function (factory) {
  if (typeof define === 'function' && define.amd) {
    define(['jquery', 'hammerjs'], factory);
  } else if (typeof exports === 'object') {
    factory(require('jquery'), require('hammerjs'));
  } else {
    factory(jQuery, Hammer);
  }
})(function ($, Hammer) {
  function hammerify(el, options) {
    var $el = $(el);
    if (!$el.data("hammer")) {
      $el.data("hammer", new Hammer($el[0], options));
    }
  }

  $.fn.hammer = function (options) {
    return this.each(function () {
      hammerify(this, options);
    });
  };

  // extend the emit method to also trigger jQuery events
  Hammer.Manager.prototype.emit = function (originalEmit) {
    return function (type, data) {
      originalEmit.call(this, type, data);
      $(this.element).trigger({
        type: type,
        gesture: data
      });
    };
  }(Hammer.Manager.prototype.emit);
});
; // Required for Meteor package, the use of window prevents export by Meteor
(function (window) {
  if (window.Package) {
    Materialize = {};
  } else {
    window.Materialize = {};
  }
})(window);

if (typeof exports !== 'undefined' && !exports.nodeType) {
  if (typeof module !== 'undefined' && !module.nodeType && module.exports) {
    exports = module.exports = Materialize;
  }
  exports.default = Materialize;
}

/*
 * raf.js
 * https://github.com/ngryman/raf.js
 *
 * original requestAnimationFrame polyfill by Erik Möller
 * inspired from paul_irish gist and post
 *
 * Copyright (c) 2013 ngryman
 * Licensed under the MIT license.
 */
(function (window) {
  var lastTime = 0,
      vendors = ['webkit', 'moz'],
      requestAnimationFrame = window.requestAnimationFrame,
      cancelAnimationFrame = window.cancelAnimationFrame,
      i = vendors.length;

  // try to un-prefix existing raf
  while (--i >= 0 && !requestAnimationFrame) {
    requestAnimationFrame = window[vendors[i] + 'RequestAnimationFrame'];
    cancelAnimationFrame = window[vendors[i] + 'CancelRequestAnimationFrame'];
  }

  // polyfill with setTimeout fallback
  // heavily inspired from @darius gist mod: https://gist.github.com/paulirish/1579671#comment-837945
  if (!requestAnimationFrame || !cancelAnimationFrame) {
    requestAnimationFrame = function (callback) {
      var now = +Date.now(),
          nextTime = Math.max(lastTime + 16, now);
      return setTimeout(function () {
        callback(lastTime = nextTime);
      }, nextTime - now);
    };

    cancelAnimationFrame = clearTimeout;
  }

  // export to window
  window.requestAnimationFrame = requestAnimationFrame;
  window.cancelAnimationFrame = cancelAnimationFrame;
})(window);

/**
 * Generate approximated selector string for a jQuery object
 * @param {jQuery} obj  jQuery object to be parsed
 * @returns {string}
 */
Materialize.objectSelectorString = function (obj) {
  var tagStr = obj.prop('tagName') || '';
  var idStr = obj.attr('id') || '';
  var classStr = obj.attr('class') || '';
  return (tagStr + idStr + classStr).replace(/\s/g, '');
};

// Unique Random ID
Materialize.guid = function () {
  function s4() {
    return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
  }
  return function () {
    return s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4();
  };
}();

/**
 * Escapes hash from special characters
 * @param {string} hash  String returned from this.hash
 * @returns {string}
 */
Materialize.escapeHash = function (hash) {
  return hash.replace(/(:|\.|\[|\]|,|=)/g, "\\$1");
};

Materialize.elementOrParentIsFixed = function (element) {
  var $element = $(element);
  var $checkElements = $element.add($element.parents());
  var isFixed = false;
  $checkElements.each(function () {
    if ($(this).css("position") === "fixed") {
      isFixed = true;
      return false;
    }
  });
  return isFixed;
};

/**
 * Get time in ms
 * @license https://raw.github.com/jashkenas/underscore/master/LICENSE
 * @type {function}
 * @return {number}
 */
var getTime = Date.now || function () {
  return new Date().getTime();
};

/**
 * Returns a function, that, when invoked, will only be triggered at most once
 * during a given window of time. Normally, the throttled function will run
 * as much as it can, without ever going more than once per `wait` duration;
 * but if you'd like to disable the execution on the leading edge, pass
 * `{leading: false}`. To disable execution on the trailing edge, ditto.
 * @license https://raw.github.com/jashkenas/underscore/master/LICENSE
 * @param {function} func
 * @param {number} wait
 * @param {Object=} options
 * @returns {Function}
 */
Materialize.throttle = function (func, wait, options) {
  var context, args, result;
  var timeout = null;
  var previous = 0;
  options || (options = {});
  var later = function () {
    previous = options.leading === false ? 0 : getTime();
    timeout = null;
    result = func.apply(context, args);
    context = args = null;
  };
  return function () {
    var now = getTime();
    if (!previous && options.leading === false) previous = now;
    var remaining = wait - (now - previous);
    context = this;
    args = arguments;
    if (remaining <= 0) {
      clearTimeout(timeout);
      timeout = null;
      previous = now;
      result = func.apply(context, args);
      context = args = null;
    } else if (!timeout && options.trailing !== false) {
      timeout = setTimeout(later, remaining);
    }
    return result;
  };
};

// Velocity has conflicts when loaded with jQuery, this will check for it
// First, check if in noConflict mode
var Vel;
if (jQuery) {
  Vel = jQuery.Velocity;
} else if ($) {
  Vel = $.Velocity;
} else {
  Vel = Velocity;
}

if (Vel) {
  Materialize.Vel = Vel;
} else {
  Materialize.Vel = Velocity;
}
;(function ($) {
  $.fn.collapsible = function (options, methodParam) {
    var defaults = {
      accordion: undefined,
      onOpen: undefined,
      onClose: undefined
    };

    var methodName = options;
    options = $.extend(defaults, options);

    return this.each(function () {

      var $this = $(this);

      var $panel_headers = $(this).find('> li > .collapsible-header');

      var collapsible_type = $this.data("collapsible");

      /****************
      Helper Functions
      ****************/

      // Accordion Open
      function accordionOpen(object) {
        $panel_headers = $this.find('> li > .collapsible-header');
        if (object.hasClass('active')) {
          object.parent().addClass('active');
        } else {
          object.parent().removeClass('active');
        }
        if (object.parent().hasClass('active')) {
          object.siblings('.collapsible-body').stop(true, false).slideDown({ duration: 350, easing: "easeOutQuart", queue: false, complete: function () {
              $(this).css('height', '');
            } });
        } else {
          object.siblings('.collapsible-body').stop(true, false).slideUp({ duration: 350, easing: "easeOutQuart", queue: false, complete: function () {
              $(this).css('height', '');
            } });
        }

        $panel_headers.not(object).removeClass('active').parent().removeClass('active');

        // Close previously open accordion elements.
        $panel_headers.not(object).parent().children('.collapsible-body').stop(true, false).each(function () {
          if ($(this).is(':visible')) {
            $(this).slideUp({
              duration: 350,
              easing: "easeOutQuart",
              queue: false,
              complete: function () {
                $(this).css('height', '');
                execCallbacks($(this).siblings('.collapsible-header'));
              }
            });
          }
        });
      }

      // Expandable Open
      function expandableOpen(object) {
        if (object.hasClass('active')) {
          object.parent().addClass('active');
        } else {
          object.parent().removeClass('active');
        }
        if (object.parent().hasClass('active')) {
          object.siblings('.collapsible-body').stop(true, false).slideDown({ duration: 350, easing: "easeOutQuart", queue: false, complete: function () {
              $(this).css('height', '');
            } });
        } else {
          object.siblings('.collapsible-body').stop(true, false).slideUp({ duration: 350, easing: "easeOutQuart", queue: false, complete: function () {
              $(this).css('height', '');
            } });
        }
      }

      // Open collapsible. object: .collapsible-header
      function collapsibleOpen(object, noToggle) {
        if (!noToggle) {
          object.toggleClass('active');
        }

        if (options.accordion || collapsible_type === "accordion" || collapsible_type === undefined) {
          // Handle Accordion
          accordionOpen(object);
        } else {
          // Handle Expandables
          expandableOpen(object);
        }

        execCallbacks(object);
      }

      // Handle callbacks
      function execCallbacks(object) {
        if (object.hasClass('active')) {
          if (typeof options.onOpen === "function") {
            options.onOpen.call(this, object.parent());
          }
        } else {
          if (typeof options.onClose === "function") {
            options.onClose.call(this, object.parent());
          }
        }
      }

      /**
       * Check if object is children of panel header
       * @param  {Object}  object Jquery object
       * @return {Boolean} true if it is children
       */
      function isChildrenOfPanelHeader(object) {

        var panelHeader = getPanelHeader(object);

        return panelHeader.length > 0;
      }

      /**
       * Get panel header from a children element
       * @param  {Object} object Jquery object
       * @return {Object} panel header object
       */
      function getPanelHeader(object) {

        return object.closest('li > .collapsible-header');
      }

      // Turn off any existing event handlers
      function removeEventHandlers() {
        $this.off('click.collapse', '> li > .collapsible-header');
      }

      /*****  End Helper Functions  *****/

      // Methods
      if (methodName === 'destroy') {
        removeEventHandlers();
        return;
      } else if (methodParam >= 0 && methodParam < $panel_headers.length) {
        var $curr_header = $panel_headers.eq(methodParam);
        if ($curr_header.length && (methodName === 'open' || methodName === 'close' && $curr_header.hasClass('active'))) {
          collapsibleOpen($curr_header);
        }
        return;
      }

      removeEventHandlers();

      // Add click handler to only direct collapsible header children
      $this.on('click.collapse', '> li > .collapsible-header', function (e) {
        var element = $(e.target);

        if (isChildrenOfPanelHeader(element)) {
          element = getPanelHeader(element);
        }

        collapsibleOpen(element);
      });

      // Open first active
      if (options.accordion || collapsible_type === "accordion" || collapsible_type === undefined) {
        // Handle Accordion
        collapsibleOpen($panel_headers.filter('.active').first(), true);
      } else {
        // Handle Expandables
        $panel_headers.filter('.active').each(function () {
          collapsibleOpen($(this), true);
        });
      }
    });
  };

  $(document).ready(function () {
    $('.collapsible').collapsible();
  });
})(jQuery);;(function ($) {

  // Add posibility to scroll to selected option
  // usefull for select for example
  $.fn.scrollTo = function (elem) {
    $(this).scrollTop($(this).scrollTop() - $(this).offset().top + $(elem).offset().top);
    return this;
  };

  $.fn.dropdown = function (options) {
    var defaults = {
      inDuration: 300,
      outDuration: 225,
      constrainWidth: true, // Constrains width of dropdown to the activator
      hover: false,
      gutter: 0, // Spacing from edge
      belowOrigin: false,
      alignment: 'left',
      stopPropagation: false
    };

    // Open dropdown.
    if (options === "open") {
      this.each(function () {
        $(this).trigger('open');
      });
      return false;
    }

    // Close dropdown.
    if (options === "close") {
      this.each(function () {
        $(this).trigger('close');
      });
      return false;
    }

    this.each(function () {
      var origin = $(this);
      var curr_options = $.extend({}, defaults, options);
      var isFocused = false;

      // Dropdown menu
      var activates = $("#" + origin.attr('data-activates'));

      function updateOptions() {
        if (origin.data('induration') !== undefined) curr_options.inDuration = origin.data('induration');
        if (origin.data('outduration') !== undefined) curr_options.outDuration = origin.data('outduration');
        if (origin.data('constrainwidth') !== undefined) curr_options.constrainWidth = origin.data('constrainwidth');
        if (origin.data('hover') !== undefined) curr_options.hover = origin.data('hover');
        if (origin.data('gutter') !== undefined) curr_options.gutter = origin.data('gutter');
        if (origin.data('beloworigin') !== undefined) curr_options.belowOrigin = origin.data('beloworigin');
        if (origin.data('alignment') !== undefined) curr_options.alignment = origin.data('alignment');
        if (origin.data('stoppropagation') !== undefined) curr_options.stopPropagation = origin.data('stoppropagation');
      }

      updateOptions();

      // Attach dropdown to its activator
      origin.after(activates);

      /*
        Helper function to position and resize dropdown.
        Used in hover and click handler.
      */
      function placeDropdown(eventType) {
        // Check for simultaneous focus and click events.
        if (eventType === 'focus') {
          isFocused = true;
        }

        // Check html data attributes
        updateOptions();

        // Set Dropdown state
        activates.addClass('active');
        origin.addClass('active');

        var originWidth = origin[0].getBoundingClientRect().width;

        // Constrain width
        if (curr_options.constrainWidth === true) {
          activates.css('width', originWidth);
        } else {
          activates.css('white-space', 'nowrap');
        }

        // Offscreen detection
        var windowHeight = window.innerHeight;
        var originHeight = origin.innerHeight();
        var offsetLeft = origin.offset().left;
        var offsetTop = origin.offset().top - $(window).scrollTop();
        var currAlignment = curr_options.alignment;
        var gutterSpacing = 0;
        var leftPosition = 0;

        // Below Origin
        var verticalOffset = 0;
        if (curr_options.belowOrigin === true) {
          verticalOffset = originHeight;
        }

        // Check for scrolling positioned container.
        var scrollYOffset = 0;
        var scrollXOffset = 0;
        var wrapper = origin.parent();
        if (!wrapper.is('body')) {
          if (wrapper[0].scrollHeight > wrapper[0].clientHeight) {
            scrollYOffset = wrapper[0].scrollTop;
          }
          if (wrapper[0].scrollWidth > wrapper[0].clientWidth) {
            scrollXOffset = wrapper[0].scrollLeft;
          }
        }

        if (offsetLeft + activates.innerWidth() > $(window).width()) {
          // Dropdown goes past screen on right, force right alignment
          currAlignment = 'right';
        } else if (offsetLeft - activates.innerWidth() + origin.innerWidth() < 0) {
          // Dropdown goes past screen on left, force left alignment
          currAlignment = 'left';
        }
        // Vertical bottom offscreen detection
        if (offsetTop + activates.innerHeight() > windowHeight) {
          // If going upwards still goes offscreen, just crop height of dropdown.
          if (offsetTop + originHeight - activates.innerHeight() < 0) {
            var adjustedHeight = windowHeight - offsetTop - verticalOffset;
            activates.css('max-height', adjustedHeight);
          } else {
            // Flow upwards.
            if (!verticalOffset) {
              verticalOffset += originHeight;
            }
            verticalOffset -= activates.innerHeight();
          }
        }

        // Handle edge alignment
        if (currAlignment === 'left') {
          gutterSpacing = curr_options.gutter;
          leftPosition = origin.position().left + gutterSpacing;
        } else if (currAlignment === 'right') {
          // Material icons fix
          activates.stop(true, true).css({
            opacity: 0,
            left: 0
          });

          var offsetRight = origin.position().left + originWidth - activates.width();
          gutterSpacing = -curr_options.gutter;
          leftPosition = offsetRight + gutterSpacing;
        }

        // Position dropdown
        activates.css({
          position: 'absolute',
          top: origin.position().top + verticalOffset + scrollYOffset,
          left: leftPosition + scrollXOffset
        });

        // Show dropdown
        activates.slideDown({
          queue: false,
          duration: curr_options.inDuration,
          easing: 'easeOutCubic',
          complete: function () {
            $(this).css('height', '');
          }
        }).animate({ opacity: 1 }, { queue: false, duration: curr_options.inDuration, easing: 'easeOutSine' });

        // Add click close handler to document
        setTimeout(function () {
          $(document).on('click.' + activates.attr('id'), function (e) {
            hideDropdown();
            $(document).off('click.' + activates.attr('id'));
          });
        }, 0);
      }

      function hideDropdown() {
        // Check for simultaneous focus and click events.
        isFocused = false;
        activates.fadeOut(curr_options.outDuration);
        activates.removeClass('active');
        origin.removeClass('active');
        $(document).off('click.' + activates.attr('id'));
        setTimeout(function () {
          activates.css('max-height', '');
        }, curr_options.outDuration);
      }

      // Hover
      if (curr_options.hover) {
        var open = false;
        origin.off('click.' + origin.attr('id'));
        // Hover handler to show dropdown
        origin.on('mouseenter', function (e) {
          // Mouse over
          if (open === false) {
            placeDropdown();
            open = true;
          }
        });
        origin.on('mouseleave', function (e) {
          // If hover on origin then to something other than dropdown content, then close
          var toEl = e.toElement || e.relatedTarget; // added browser compatibility for target element
          if (!$(toEl).closest('.dropdown-content').is(activates)) {
            activates.stop(true, true);
            hideDropdown();
            open = false;
          }
        });

        activates.on('mouseleave', function (e) {
          // Mouse out
          var toEl = e.toElement || e.relatedTarget;
          if (!$(toEl).closest('.dropdown-button').is(origin)) {
            activates.stop(true, true);
            hideDropdown();
            open = false;
          }
        });

        // Click
      } else {
        // Click handler to show dropdown
        origin.off('click.' + origin.attr('id'));
        origin.on('click.' + origin.attr('id'), function (e) {
          if (!isFocused) {
            if (origin[0] == e.currentTarget && !origin.hasClass('active') && $(e.target).closest('.dropdown-content').length === 0) {
              e.preventDefault(); // Prevents button click from moving window
              if (curr_options.stopPropagation) {
                e.stopPropagation();
              }
              placeDropdown('click');
            }
            // If origin is clicked and menu is open, close menu
            else if (origin.hasClass('active')) {
                hideDropdown();
                $(document).off('click.' + activates.attr('id'));
              }
          }
        });
      } // End else

      // Listen to open and close event - useful for select component
      origin.on('open', function (e, eventType) {
        placeDropdown(eventType);
      });
      origin.on('close', hideDropdown);
    });
  }; // End dropdown plugin

  $(document).ready(function () {
    $('.dropdown-button').dropdown();
  });
})(jQuery);
;(function ($) {

  $.fn.parallax = function () {
    var window_width = $(window).width();
    // Parallax Scripts
    return this.each(function (i) {
      var $this = $(this);
      $this.addClass('parallax');

      function updateParallax(initial) {
        var container_height;
        if (window_width < 601) {
          container_height = $this.height() > 0 ? $this.height() : $this.children("img").height();
        } else {
          container_height = $this.height() > 0 ? $this.height() : 500;
        }
        var $img = $this.children("img").first();
        var img_height = $img.height();
        var parallax_dist = img_height - container_height;
        var bottom = $this.offset().top + container_height;
        var top = $this.offset().top;
        var scrollTop = $(window).scrollTop();
        var windowHeight = window.innerHeight;
        var windowBottom = scrollTop + windowHeight;
        var percentScrolled = (windowBottom - top) / (container_height + windowHeight);
        var parallax = Math.round(parallax_dist * percentScrolled);

        if (initial) {
          $img.css('display', 'block');
        }
        if (bottom > scrollTop && top < scrollTop + windowHeight) {
          $img.css('transform', "translate3D(-50%," + parallax + "px, 0)");
        }
      }

      // Wait for image load
      $this.children("img").one("load", function () {
        updateParallax(true);
      }).each(function () {
        if (this.complete) $(this).trigger("load");
      });

      $(window).scroll(function () {
        window_width = $(window).width();
        updateParallax(false);
      });

      $(window).resize(function () {
        window_width = $(window).width();
        updateParallax(false);
      });
    });
  };
})(jQuery);
; /*!
  * Waves v0.6.4
  * http://fian.my.id/Waves
  *
  * Copyright 2014 Alfiana E. Sibuea and other contributors
  * Released under the MIT license
  * https://github.com/fians/Waves/blob/master/LICENSE
  */

;(function (window) {
  'use strict';

  var Waves = Waves || {};
  var $$ = document.querySelectorAll.bind(document);

  // Find exact position of element
  function isWindow(obj) {
    return obj !== null && obj === obj.window;
  }

  function getWindow(elem) {
    return isWindow(elem) ? elem : elem.nodeType === 9 && elem.defaultView;
  }

  function offset(elem) {
    var docElem,
        win,
        box = { top: 0, left: 0 },
        doc = elem && elem.ownerDocument;

    docElem = doc.documentElement;

    if (typeof elem.getBoundingClientRect !== typeof undefined) {
      box = elem.getBoundingClientRect();
    }
    win = getWindow(doc);
    return {
      top: box.top + win.pageYOffset - docElem.clientTop,
      left: box.left + win.pageXOffset - docElem.clientLeft
    };
  }

  function convertStyle(obj) {
    var style = '';

    for (var a in obj) {
      if (obj.hasOwnProperty(a)) {
        style += a + ':' + obj[a] + ';';
      }
    }

    return style;
  }

  var Effect = {

    // Effect delay
    duration: 750,

    show: function (e, element) {

      // Disable right click
      if (e.button === 2) {
        return false;
      }

      var el = element || this;

      // Create ripple
      var ripple = document.createElement('div');
      ripple.className = 'waves-ripple';
      el.appendChild(ripple);

      // Get click coordinate and element witdh
      var pos = offset(el);
      var relativeY = e.pageY - pos.top;
      var relativeX = e.pageX - pos.left;
      var scale = 'scale(' + el.clientWidth / 100 * 10 + ')';

      // Support for touch devices
      if ('touches' in e) {
        relativeY = e.touches[0].pageY - pos.top;
        relativeX = e.touches[0].pageX - pos.left;
      }

      // Attach data to element
      ripple.setAttribute('data-hold', Date.now());
      ripple.setAttribute('data-scale', scale);
      ripple.setAttribute('data-x', relativeX);
      ripple.setAttribute('data-y', relativeY);

      // Set ripple position
      var rippleStyle = {
        'top': relativeY + 'px',
        'left': relativeX + 'px'
      };

      ripple.className = ripple.className + ' waves-notransition';
      ripple.setAttribute('style', convertStyle(rippleStyle));
      ripple.className = ripple.className.replace('waves-notransition', '');

      // Scale the ripple
      rippleStyle['-webkit-transform'] = scale;
      rippleStyle['-moz-transform'] = scale;
      rippleStyle['-ms-transform'] = scale;
      rippleStyle['-o-transform'] = scale;
      rippleStyle.transform = scale;
      rippleStyle.opacity = '1';

      rippleStyle['-webkit-transition-duration'] = Effect.duration + 'ms';
      rippleStyle['-moz-transition-duration'] = Effect.duration + 'ms';
      rippleStyle['-o-transition-duration'] = Effect.duration + 'ms';
      rippleStyle['transition-duration'] = Effect.duration + 'ms';

      rippleStyle['-webkit-transition-timing-function'] = 'cubic-bezier(0.250, 0.460, 0.450, 0.940)';
      rippleStyle['-moz-transition-timing-function'] = 'cubic-bezier(0.250, 0.460, 0.450, 0.940)';
      rippleStyle['-o-transition-timing-function'] = 'cubic-bezier(0.250, 0.460, 0.450, 0.940)';
      rippleStyle['transition-timing-function'] = 'cubic-bezier(0.250, 0.460, 0.450, 0.940)';

      ripple.setAttribute('style', convertStyle(rippleStyle));
    },

    hide: function (e) {
      TouchHandler.touchup(e);

      var el = this;
      var width = el.clientWidth * 1.4;

      // Get first ripple
      var ripple = null;
      var ripples = el.getElementsByClassName('waves-ripple');
      if (ripples.length > 0) {
        ripple = ripples[ripples.length - 1];
      } else {
        return false;
      }

      var relativeX = ripple.getAttribute('data-x');
      var relativeY = ripple.getAttribute('data-y');
      var scale = ripple.getAttribute('data-scale');

      // Get delay beetween mousedown and mouse leave
      var diff = Date.now() - Number(ripple.getAttribute('data-hold'));
      var delay = 350 - diff;

      if (delay < 0) {
        delay = 0;
      }

      // Fade out ripple after delay
      setTimeout(function () {
        var style = {
          'top': relativeY + 'px',
          'left': relativeX + 'px',
          'opacity': '0',

          // Duration
          '-webkit-transition-duration': Effect.duration + 'ms',
          '-moz-transition-duration': Effect.duration + 'ms',
          '-o-transition-duration': Effect.duration + 'ms',
          'transition-duration': Effect.duration + 'ms',
          '-webkit-transform': scale,
          '-moz-transform': scale,
          '-ms-transform': scale,
          '-o-transform': scale,
          'transform': scale
        };

        ripple.setAttribute('style', convertStyle(style));

        setTimeout(function () {
          try {
            el.removeChild(ripple);
          } catch (e) {
            return false;
          }
        }, Effect.duration);
      }, delay);
    },

    // Little hack to make <input> can perform waves effect
    wrapInput: function (elements) {
      for (var a = 0; a < elements.length; a++) {
        var el = elements[a];

        if (el.tagName.toLowerCase() === 'input') {
          var parent = el.parentNode;

          // If input already have parent just pass through
          if (parent.tagName.toLowerCase() === 'i' && parent.className.indexOf('waves-effect') !== -1) {
            continue;
          }

          // Put element class and style to the specified parent
          var wrapper = document.createElement('i');
          wrapper.className = el.className + ' waves-input-wrapper';

          var elementStyle = el.getAttribute('style');

          if (!elementStyle) {
            elementStyle = '';
          }

          wrapper.setAttribute('style', elementStyle);

          el.className = 'waves-button-input';
          el.removeAttribute('style');

          // Put element as child
          parent.replaceChild(wrapper, el);
          wrapper.appendChild(el);
        }
      }
    }
  };

  /**
   * Disable mousedown event for 500ms during and after touch
   */
  var TouchHandler = {
    /* uses an integer rather than bool so there's no issues with
     * needing to clear timeouts if another touch event occurred
     * within the 500ms. Cannot mouseup between touchstart and
     * touchend, nor in the 500ms after touchend. */
    touches: 0,
    allowEvent: function (e) {
      var allow = true;

      if (e.type === 'touchstart') {
        TouchHandler.touches += 1; //push
      } else if (e.type === 'touchend' || e.type === 'touchcancel') {
        setTimeout(function () {
          if (TouchHandler.touches > 0) {
            TouchHandler.touches -= 1; //pop after 500ms
          }
        }, 500);
      } else if (e.type === 'mousedown' && TouchHandler.touches > 0) {
        allow = false;
      }

      return allow;
    },
    touchup: function (e) {
      TouchHandler.allowEvent(e);
    }
  };

  /**
   * Delegated click handler for .waves-effect element.
   * returns null when .waves-effect element not in "click tree"
   */
  function getWavesEffectElement(e) {
    if (TouchHandler.allowEvent(e) === false) {
      return null;
    }

    var element = null;
    var target = e.target || e.srcElement;

    while (target.parentNode !== null) {
      if (!(target instanceof SVGElement) && target.className.indexOf('waves-effect') !== -1) {
        element = target;
        break;
      }
      target = target.parentNode;
    }
    return element;
  }

  /**
   * Bubble the click and show effect if .waves-effect elem was found
   */
  function showEffect(e) {
    var element = getWavesEffectElement(e);

    if (element !== null) {
      Effect.show(e, element);

      if ('ontouchstart' in window) {
        element.addEventListener('touchend', Effect.hide, false);
        element.addEventListener('touchcancel', Effect.hide, false);
      }

      element.addEventListener('mouseup', Effect.hide, false);
      element.addEventListener('mouseleave', Effect.hide, false);
      element.addEventListener('dragend', Effect.hide, false);
    }
  }

  Waves.displayEffect = function (options) {
    options = options || {};

    if ('duration' in options) {
      Effect.duration = options.duration;
    }

    //Wrap input inside <i> tag
    Effect.wrapInput($$('.waves-effect'));

    if ('ontouchstart' in window) {
      document.body.addEventListener('touchstart', showEffect, false);
    }

    document.body.addEventListener('mousedown', showEffect, false);
  };

  /**
   * Attach Waves to an input element (or any element which doesn't
   * bubble mouseup/mousedown events).
   *   Intended to be used with dynamically loaded forms/inputs, or
   * where the user doesn't want a delegated click handler.
   */
  Waves.attach = function (element) {
    //FUTURE: automatically add waves classes and allow users
    // to specify them with an options param? Eg. light/classic/button
    if (element.tagName.toLowerCase() === 'input') {
      Effect.wrapInput([element]);
      element = element.parentNode;
    }

    if ('ontouchstart' in window) {
      element.addEventListener('touchstart', showEffect, false);
    }

    element.addEventListener('mousedown', showEffect, false);
  };

  window.Waves = Waves;

  document.addEventListener('DOMContentLoaded', function () {
    Waves.displayEffect();
  }, false);
})(window);
;(function ($) {

  var methods = {
    init: function (options) {
      var defaults = {
        menuWidth: 300,
        edge: 'left',
        closeOnClick: false,
        draggable: true,
        onOpen: null,
        onClose: null
      };
      options = $.extend(defaults, options);

      $(this).each(function () {
        var $this = $(this);
        var menuId = $this.attr('data-activates');
        var menu = $("#" + menuId);

        // Set to width
        if (options.menuWidth != 300) {
          menu.css('width', options.menuWidth);
        }

        // Add Touch Area
        var $dragTarget = $('.drag-target[data-sidenav="' + menuId + '"]');
        if (options.draggable) {
          // Regenerate dragTarget
          if ($dragTarget.length) {
            $dragTarget.remove();
          }

          $dragTarget = $('<div class="drag-target"></div>').attr('data-sidenav', menuId);
          $('body').append($dragTarget);
        } else {
          $dragTarget = $();
        }

        if (options.edge == 'left') {
          menu.css('transform', 'translateX(-100%)');
          $dragTarget.css({ 'left': 0 }); // Add Touch Area
        } else {
          menu.addClass('right-aligned') // Change text-alignment to right
          .css('transform', 'translateX(100%)');
          $dragTarget.css({ 'right': 0 }); // Add Touch Area
        }

        // If fixed sidenav, bring menu out
        if (menu.hasClass('fixed')) {
          if (window.innerWidth > 992) {
            menu.css('transform', 'translateX(0)');
          }
        }

        // Window resize to reset on large screens fixed
        if (menu.hasClass('fixed')) {
          $(window).resize(function () {
            if (window.innerWidth > 992) {
              // Close menu if window is resized bigger than 992 and user has fixed sidenav
              if ($('#sidenav-overlay').length !== 0 && menuOut) {
                removeMenu(true);
              } else {
                // menu.removeAttr('style');
                menu.css('transform', 'translateX(0%)');
                // menu.css('width', options.menuWidth);
              }
            } else if (menuOut === false) {
              if (options.edge === 'left') {
                menu.css('transform', 'translateX(-100%)');
              } else {
                menu.css('transform', 'translateX(100%)');
              }
            }
          });
        }

        // if closeOnClick, then add close event for all a tags in side sideNav
        if (options.closeOnClick === true) {
          menu.on("click.itemclick", "a:not(.collapsible-header)", function () {
            if (!(window.innerWidth > 992 && menu.hasClass('fixed'))) {
              removeMenu();
            }
          });
        }

        var removeMenu = function (restoreNav) {
          panning = false;
          menuOut = false;
          // Reenable scrolling
          $('body').css({
            overflow: '',
            width: ''
          });

          $('#sidenav-overlay').velocity({ opacity: 0 }, { duration: 200,
            queue: false, easing: 'easeOutQuad',
            complete: function () {
              $(this).remove();
            } });
          if (options.edge === 'left') {
            // Reset phantom div
            $dragTarget.css({ width: '', right: '', left: '0' });
            menu.velocity({ 'translateX': '-100%' }, { duration: 200,
              queue: false,
              easing: 'easeOutCubic',
              complete: function () {
                if (restoreNav === true) {
                  // Restore Fixed sidenav
                  menu.removeAttr('style');
                  menu.css('width', options.menuWidth);
                }
              }

            });
          } else {
            // Reset phantom div
            $dragTarget.css({ width: '', right: '0', left: '' });
            menu.velocity({ 'translateX': '100%' }, { duration: 200,
              queue: false,
              easing: 'easeOutCubic',
              complete: function () {
                if (restoreNav === true) {
                  // Restore Fixed sidenav
                  menu.removeAttr('style');
                  menu.css('width', options.menuWidth);
                }
              }
            });
          }

          // Callback
          if (typeof options.onClose === 'function') {
            options.onClose.call(this, menu);
          }
        };

        // Touch Event
        var panning = false;
        var menuOut = false;

        if (options.draggable) {
          $dragTarget.on('click', function () {
            if (menuOut) {
              removeMenu();
            }
          });

          $dragTarget.hammer({
            prevent_default: false
          }).on('pan', function (e) {

            if (e.gesture.pointerType == "touch") {

              var direction = e.gesture.direction;
              var x = e.gesture.center.x;
              var y = e.gesture.center.y;
              var velocityX = e.gesture.velocityX;

              // Vertical scroll bugfix
              if (x === 0 && y === 0) {
                return;
              }

              // Disable Scrolling
              var $body = $('body');
              var $overlay = $('#sidenav-overlay');
              var oldWidth = $body.innerWidth();
              $body.css('overflow', 'hidden');
              $body.width(oldWidth);

              // If overlay does not exist, create one and if it is clicked, close menu
              if ($overlay.length === 0) {
                $overlay = $('<div id="sidenav-overlay"></div>');
                $overlay.css('opacity', 0).click(function () {
                  removeMenu();
                });

                // Run 'onOpen' when sidenav is opened via touch/swipe if applicable
                if (typeof options.onOpen === 'function') {
                  options.onOpen.call(this, menu);
                }

                $('body').append($overlay);
              }

              // Keep within boundaries
              if (options.edge === 'left') {
                if (x > options.menuWidth) {
                  x = options.menuWidth;
                } else if (x < 0) {
                  x = 0;
                }
              }

              if (options.edge === 'left') {
                // Left Direction
                if (x < options.menuWidth / 2) {
                  menuOut = false;
                }
                // Right Direction
                else if (x >= options.menuWidth / 2) {
                    menuOut = true;
                  }
                menu.css('transform', 'translateX(' + (x - options.menuWidth) + 'px)');
              } else {
                // Left Direction
                if (x < window.innerWidth - options.menuWidth / 2) {
                  menuOut = true;
                }
                // Right Direction
                else if (x >= window.innerWidth - options.menuWidth / 2) {
                    menuOut = false;
                  }
                var rightPos = x - options.menuWidth / 2;
                if (rightPos < 0) {
                  rightPos = 0;
                }

                menu.css('transform', 'translateX(' + rightPos + 'px)');
              }

              // Percentage overlay
              var overlayPerc;
              if (options.edge === 'left') {
                overlayPerc = x / options.menuWidth;
                $overlay.velocity({ opacity: overlayPerc }, { duration: 10, queue: false, easing: 'easeOutQuad' });
              } else {
                overlayPerc = Math.abs((x - window.innerWidth) / options.menuWidth);
                $overlay.velocity({ opacity: overlayPerc }, { duration: 10, queue: false, easing: 'easeOutQuad' });
              }
            }
          }).on('panend', function (e) {

            if (e.gesture.pointerType == "touch") {
              var $overlay = $('#sidenav-overlay');
              var velocityX = e.gesture.velocityX;
              var x = e.gesture.center.x;
              var leftPos = x - options.menuWidth;
              var rightPos = x - options.menuWidth / 2;
              if (leftPos > 0) {
                leftPos = 0;
              }
              if (rightPos < 0) {
                rightPos = 0;
              }
              panning = false;

              if (options.edge === 'left') {
                // If velocityX <= 0.3 then the user is flinging the menu closed so ignore menuOut
                if (menuOut && velocityX <= 0.3 || velocityX < -0.5) {
                  // Return menu to open
                  if (leftPos !== 0) {
                    menu.velocity({ 'translateX': [0, leftPos] }, { duration: 300, queue: false, easing: 'easeOutQuad' });
                  }

                  $overlay.velocity({ opacity: 1 }, { duration: 50, queue: false, easing: 'easeOutQuad' });
                  $dragTarget.css({ width: '50%', right: 0, left: '' });
                  menuOut = true;
                } else if (!menuOut || velocityX > 0.3) {
                  // Enable Scrolling
                  $('body').css({
                    overflow: '',
                    width: ''
                  });
                  // Slide menu closed
                  menu.velocity({ 'translateX': [-1 * options.menuWidth - 10, leftPos] }, { duration: 200, queue: false, easing: 'easeOutQuad' });
                  $overlay.velocity({ opacity: 0 }, { duration: 200, queue: false, easing: 'easeOutQuad',
                    complete: function () {
                      // Run 'onClose' when sidenav is closed via touch/swipe if applicable
                      if (typeof options.onClose === 'function') {
                        options.onClose.call(this, menu);
                      }

                      $(this).remove();
                    } });
                  $dragTarget.css({ width: '10px', right: '', left: 0 });
                }
              } else {
                if (menuOut && velocityX >= -0.3 || velocityX > 0.5) {
                  // Return menu to open
                  if (rightPos !== 0) {
                    menu.velocity({ 'translateX': [0, rightPos] }, { duration: 300, queue: false, easing: 'easeOutQuad' });
                  }

                  $overlay.velocity({ opacity: 1 }, { duration: 50, queue: false, easing: 'easeOutQuad' });
                  $dragTarget.css({ width: '50%', right: '', left: 0 });
                  menuOut = true;
                } else if (!menuOut || velocityX < -0.3) {
                  // Enable Scrolling
                  $('body').css({
                    overflow: '',
                    width: ''
                  });

                  // Slide menu closed
                  menu.velocity({ 'translateX': [options.menuWidth + 10, rightPos] }, { duration: 200, queue: false, easing: 'easeOutQuad' });
                  $overlay.velocity({ opacity: 0 }, { duration: 200, queue: false, easing: 'easeOutQuad',
                    complete: function () {
                      // Run 'onClose' when sidenav is closed via touch/swipe if applicable
                      if (typeof options.onClose === 'function') {
                        options.onClose.call(this, menu);
                      }

                      $(this).remove();
                    } });
                  $dragTarget.css({ width: '10px', right: 0, left: '' });
                }
              }
            }
          });
        }

        $this.off('click.sidenav').on('click.sidenav', function () {
          if (menuOut === true) {
            menuOut = false;
            panning = false;
            removeMenu();
          } else {

            // Disable Scrolling
            var $body = $('body');
            var $overlay = $('<div id="sidenav-overlay"></div>');
            var oldWidth = $body.innerWidth();
            $body.css('overflow', 'hidden');
            $body.width(oldWidth);

            // Push current drag target on top of DOM tree
            $('body').append($dragTarget);

            if (options.edge === 'left') {
              $dragTarget.css({ width: '50%', right: 0, left: '' });
              menu.velocity({ 'translateX': [0, -1 * options.menuWidth] }, { duration: 300, queue: false, easing: 'easeOutQuad' });
            } else {
              $dragTarget.css({ width: '50%', right: '', left: 0 });
              menu.velocity({ 'translateX': [0, options.menuWidth] }, { duration: 300, queue: false, easing: 'easeOutQuad' });
            }

            // Overlay close on click
            $overlay.css('opacity', 0).click(function () {
              menuOut = false;
              panning = false;
              removeMenu();
              $overlay.velocity({ opacity: 0 }, { duration: 300, queue: false, easing: 'easeOutQuad',
                complete: function () {
                  $(this).remove();
                }
              });
            });

            // Append body
            $('body').append($overlay);
            $overlay.velocity({ opacity: 1 }, { duration: 300, queue: false, easing: 'easeOutQuad',
              complete: function () {
                menuOut = true;
                panning = false;
              }
            });

            // Callback
            if (typeof options.onOpen === 'function') {
              options.onOpen.call(this, menu);
            }
          }

          return false;
        });
      });
    },
    destroy: function () {
      var $overlay = $('#sidenav-overlay');
      var $dragTarget = $('.drag-target[data-sidenav="' + $(this).attr('data-activates') + '"]');
      $overlay.trigger('click');
      $dragTarget.remove();
      $(this).off('click');
      $overlay.remove();
    },
    show: function () {
      this.trigger('click');
    },
    hide: function () {
      $('#sidenav-overlay').trigger('click');
    }
  };

  $.fn.sideNav = function (methodOrOptions) {
    if (methods[methodOrOptions]) {
      return methods[methodOrOptions].apply(this, Array.prototype.slice.call(arguments, 1));
    } else if (typeof methodOrOptions === 'object' || !methodOrOptions) {
      // Default to "init"
      return methods.init.apply(this, arguments);
    } else {
      $.error('Method ' + methodOrOptions + ' does not exist on jQuery.sideNav');
    }
  }; // Plugin end
})(jQuery);
;(function ($) {
  $(document).ready(function () {

    // jQuery reverse
    $.fn.reverse = [].reverse;

    // Hover behaviour: make sure this doesn't work on .click-to-toggle FABs!
    $(document).on('mouseenter.fixedActionBtn', '.fixed-action-btn:not(.click-to-toggle):not(.toolbar)', function (e) {
      var $this = $(this);
      openFABMenu($this);
    });
    $(document).on('mouseleave.fixedActionBtn', '.fixed-action-btn:not(.click-to-toggle):not(.toolbar)', function (e) {
      var $this = $(this);
      closeFABMenu($this);
    });

    // Toggle-on-click behaviour.
    $(document).on('click.fabClickToggle', '.fixed-action-btn.click-to-toggle > a', function (e) {
      var $this = $(this);
      var $menu = $this.parent();
      if ($menu.hasClass('active')) {
        closeFABMenu($menu);
      } else {
        openFABMenu($menu);
      }
    });

    // Toolbar transition behaviour.
    $(document).on('click.fabToolbar', '.fixed-action-btn.toolbar > a', function (e) {
      var $this = $(this);
      var $menu = $this.parent();
      FABtoToolbar($menu);
    });
  });

  $.fn.extend({
    openFAB: function () {
      openFABMenu($(this));
    },
    closeFAB: function () {
      closeFABMenu($(this));
    },
    openToolbar: function () {
      FABtoToolbar($(this));
    },
    closeToolbar: function () {
      toolbarToFAB($(this));
    }
  });

  var openFABMenu = function (btn) {
    var $this = btn;
    if ($this.hasClass('active') === false) {

      // Get direction option
      var horizontal = $this.hasClass('horizontal');
      var offsetY, offsetX;

      if (horizontal === true) {
        offsetX = 40;
      } else {
        offsetY = 40;
      }

      $this.addClass('active');
      $this.find('ul .btn-floating').velocity({ scaleY: ".4", scaleX: ".4", translateY: offsetY + 'px', translateX: offsetX + 'px' }, { duration: 0 });

      var time = 0;
      $this.find('ul .btn-floating').reverse().each(function () {
        $(this).velocity({ opacity: "1", scaleX: "1", scaleY: "1", translateY: "0", translateX: '0' }, { duration: 80, delay: time });
        time += 40;
      });
    }
  };

  var closeFABMenu = function (btn) {
    var $this = btn;
    // Get direction option
    var horizontal = $this.hasClass('horizontal');
    var offsetY, offsetX;

    if (horizontal === true) {
      offsetX = 40;
    } else {
      offsetY = 40;
    }

    $this.removeClass('active');
    var time = 0;
    $this.find('ul .btn-floating').velocity("stop", true);
    $this.find('ul .btn-floating').velocity({ opacity: "0", scaleX: ".4", scaleY: ".4", translateY: offsetY + 'px', translateX: offsetX + 'px' }, { duration: 80 });
  };

  /**
   * Transform FAB into toolbar
   * @param  {Object}  object jQuery object
   */
  var FABtoToolbar = function (btn) {
    if (btn.attr('data-open') === "true") {
      return;
    }

    var offsetX, offsetY, scaleFactor;
    var windowWidth = window.innerWidth;
    var windowHeight = window.innerHeight;
    var btnRect = btn[0].getBoundingClientRect();
    var anchor = btn.find('> a').first();
    var menu = btn.find('> ul').first();
    var backdrop = $('<div class="fab-backdrop"></div>');
    var fabColor = anchor.css('background-color');
    anchor.append(backdrop);

    offsetX = btnRect.left - windowWidth / 2 + btnRect.width / 2;
    offsetY = windowHeight - btnRect.bottom;
    scaleFactor = windowWidth / backdrop.width();
    btn.attr('data-origin-bottom', btnRect.bottom);
    btn.attr('data-origin-left', btnRect.left);
    btn.attr('data-origin-width', btnRect.width);

    // Set initial state
    btn.addClass('active');
    btn.attr('data-open', true);
    btn.css({
      'text-align': 'center',
      width: '100%',
      bottom: 0,
      left: 0,
      transform: 'translateX(' + offsetX + 'px)',
      transition: 'none'
    });
    anchor.css({
      transform: 'translateY(' + -offsetY + 'px)',
      transition: 'none'
    });
    backdrop.css({
      'background-color': fabColor
    });

    setTimeout(function () {
      btn.css({
        transform: '',
        transition: 'transform .2s cubic-bezier(0.550, 0.085, 0.680, 0.530), background-color 0s linear .2s'
      });
      anchor.css({
        overflow: 'visible',
        transform: '',
        transition: 'transform .2s'
      });

      setTimeout(function () {
        btn.css({
          overflow: 'hidden',
          'background-color': fabColor
        });
        backdrop.css({
          transform: 'scale(' + scaleFactor + ')',
          transition: 'transform .2s cubic-bezier(0.550, 0.055, 0.675, 0.190)'
        });
        menu.find('> li > a').css({
          opacity: 1
        });

        // Scroll to close.
        $(window).on('scroll.fabToolbarClose', function () {
          toolbarToFAB(btn);
          $(window).off('scroll.fabToolbarClose');
          $(document).off('click.fabToolbarClose');
        });

        $(document).on('click.fabToolbarClose', function (e) {
          if (!$(e.target).closest(menu).length) {
            toolbarToFAB(btn);
            $(window).off('scroll.fabToolbarClose');
            $(document).off('click.fabToolbarClose');
          }
        });
      }, 100);
    }, 0);
  };

  /**
   * Transform toolbar back into FAB
   * @param  {Object}  object jQuery object
   */
  var toolbarToFAB = function (btn) {
    if (btn.attr('data-open') !== "true") {
      return;
    }

    var offsetX, offsetY, scaleFactor;
    var windowWidth = window.innerWidth;
    var windowHeight = window.innerHeight;
    var btnWidth = btn.attr('data-origin-width');
    var btnBottom = btn.attr('data-origin-bottom');
    var btnLeft = btn.attr('data-origin-left');
    var anchor = btn.find('> .btn-floating').first();
    var menu = btn.find('> ul').first();
    var backdrop = btn.find('.fab-backdrop');
    var fabColor = anchor.css('background-color');

    offsetX = btnLeft - windowWidth / 2 + btnWidth / 2;
    offsetY = windowHeight - btnBottom;
    scaleFactor = windowWidth / backdrop.width();

    // Hide backdrop
    btn.removeClass('active');
    btn.attr('data-open', false);
    btn.css({
      'background-color': 'transparent',
      transition: 'none'
    });
    anchor.css({
      transition: 'none'
    });
    backdrop.css({
      transform: 'scale(0)',
      'background-color': fabColor
    });
    menu.find('> li > a').css({
      opacity: ''
    });

    setTimeout(function () {
      backdrop.remove();

      // Set initial state.
      btn.css({
        'text-align': '',
        width: '',
        bottom: '',
        left: '',
        overflow: '',
        'background-color': '',
        transform: 'translate3d(' + -offsetX + 'px,0,0)'
      });
      anchor.css({
        overflow: '',
        transform: 'translate3d(0,' + offsetY + 'px,0)'
      });

      setTimeout(function () {
        btn.css({
          transform: 'translate3d(0,0,0)',
          transition: 'transform .2s'
        });
        anchor.css({
          transform: 'translate3d(0,0,0)',
          transition: 'transform .2s cubic-bezier(0.550, 0.055, 0.675, 0.190)'
        });
      }, 20);
    }, 200);
  };
})(jQuery);

//# sourceMappingURL=materialize_concat.js.map
//# sourceMappingURL=materialize.js.map

/*!
  * Simple-Jekyll-Search v1.4.1 (https://github.com/christian-fei/Simple-Jekyll-Search)
  * Copyright 2015-2017, Christian Fei
  * Licensed under MIT (https://github.com/christian-fei/Simple-Jekyll-Search/blob/master/LICENSE.md)
  */
!function t(e,r,n){function i(o,a){if(!r[o]){if(!e[o]){var c="function"==typeof require&&require;if(!a&&c)return c(o,!0);if(u)return u(o,!0);var s=new Error("Cannot find module '"+o+"'");throw s.code="MODULE_NOT_FOUND",s}var f=r[o]={exports:{}};e[o][0].call(f.exports,function(t){var r=e[o][1][t];return i(r||t)},f,f.exports,t,e,r,n)}return r[o].exports}for(var u="function"==typeof require&&require,o=0;o<n.length;o++)i(n[o]);return i}({1:[function(t,e,r){"use strict";e.exports=function(t,e){var r=e.length,n=t.length;if(n>r)return!1;if(n===r)return t===e;t:for(var i=0,u=0;i<n;i++){for(var o=t.charCodeAt(i);u<r;)if(e.charCodeAt(u++)===o)continue t;return!1}return!0}},{}],2:[function(t,e,r){"use strict";function n(t,e){return function(){if(4===t.readyState&&200===t.status)try{e(null,JSON.parse(t.responseText))}catch(r){e(r,null)}}}function i(){return window.XMLHttpRequest?new XMLHttpRequest:new ActiveXObject("Microsoft.XMLHTTP")}e.exports={load:function(t,e){var r=i();r.open("GET",t,!0),r.onreadystatechange=n(r,e),r.send()}}},{}],3:[function(t,e,r){"use strict";e.exports=function n(t){if(!function(t){return!!t&&"undefined"!=typeof t.required&&t.required instanceof Array}(t))throw new Error("-- OptionsValidator: required options missing");if(!(this instanceof n))return new n(t);var e=t.required;this.getRequiredOptions=function(){return e},this.validate=function(t){var r=[];return e.forEach(function(e){"undefined"==typeof t[e]&&r.push(e)}),r}}},{}],4:[function(t,e,r){"use strict";function n(t){return!!t&&"[object Object]"===Object.prototype.toString.call(t)}function i(t){return!!t&&"[object Array]"===Object.prototype.toString.call(t)}function u(t){return p.push(t),p}function o(t){for(var e=[],r=0;r<t.length;r++)n(t[r])&&e.push(u(t[r]));return e}function a(t,e,r,n){for(var i=[],u=0;u<t.length&&i.length<n.limit;u++){var o=c(t[u],e,r,n);o&&i.push(o)}return i}function c(t,e,r,n){for(var i in t)if(!s(t[i],n.exclude)&&r.matches(t[i],e))return t}function s(t,e){var r=!1;e=e||[];for(var n=0;n<e.length;n++){var i=e[n];!r&&new RegExp(t).test(i)&&(r=!0)}return r}e.exports={put:function(t){return n(t)?u(t):i(t)?o(t):undefined},clear:function(){return p.length=0,p},get:function(){return p},search:function(t){return t?a(p,t,h.searchStrategy,h):[]},setOptions:function(t){(h=t||{}).fuzzy=t.fuzzy||!1,h.limit=t.limit||10,h.searchStrategy=t.fuzzy?f:l}};var f=t("./SearchStrategies/FuzzySearchStrategy"),l=t("./SearchStrategies/LiteralSearchStrategy"),p=[],h={};h.fuzzy=!1,h.limit=10,h.searchStrategy=h.fuzzy?f:l},{"./SearchStrategies/FuzzySearchStrategy":5,"./SearchStrategies/LiteralSearchStrategy":6}],5:[function(t,e,r){"use strict";var n=t("fuzzysearch");e.exports=new function(){this.matches=function(t,e){return n(e,t)}}},{fuzzysearch:1}],6:[function(t,e,r){"use strict";e.exports=new function(){this.matches=function(t,e){return"string"==typeof t&&(t=t.trim()).toLowerCase().indexOf(e.toLowerCase())>=0}}},{}],7:[function(t,e,r){"use strict";e.exports={compile:function(t){return n.template.replace(n.pattern,function(e,r){var i=n.middleware(r,t[r],n.template);return void 0!==i?i:t[r]||e})},setOptions:function(t){n.pattern=t.pattern||n.pattern,n.template=t.template||n.template,"function"==typeof t.middleware&&(n.middleware=t.middleware)}};var n={};n.pattern=/\{(.*?)\}/g,n.template="",n.middleware=function(){}},{}],8:[function(t,e,r){!function(e,r){"use strict";function n(t){m.put(t),a()}function i(t){S.load(t,function(e,r){e&&p("failed to get JSON ("+t+")"),n(r)})}function u(){h.resultsContainer.innerHTML=""}function o(t){h.resultsContainer.innerHTML+=t}function a(){h.searchInput.addEventListener("keyup",function(t){l(t.which)&&(u(),c(t.target.value))})}function c(t){f(t)&&s(m.search(t))}function s(t){var e=t.length;if(0===e)return o(h.noResultsText);for(var r=0;r<e;r++)o(y.compile(t[r]))}function f(t){return t&&t.length>0}function l(t){return-1===[13,16,20,37,38,39,40,91].indexOf(t)}function p(t){throw new Error("SimpleJekyllSearch --- "+t)}var h={searchInput:null,resultsContainer:null,json:[],searchResultTemplate:'<li><a href="{url}" title="{desc}">{title}</a></li>',templateMiddleware:function(){},noResultsText:"No results found",limit:10,fuzzy:!1,exclude:[]},d=["searchInput","resultsContainer","json"],y=t("./Templater"),m=t("./Repository"),S=t("./JSONLoader"),g=t("./OptionsValidator")({required:d}),v=t("./utils");e.SimpleJekyllSearch=function(t){return g.validate(t).length>0&&p("You must specify the following required options: "+d),h=v.merge(h,t),y.setOptions({template:h.searchResultTemplate,middleware:h.templateMiddleware}),m.setOptions({fuzzy:h.fuzzy,limit:h.limit}),v.isJSON(h.json)?n(h.json):i(h.json),{search:c}},e.SimpleJekyllSearch.init=e.SimpleJekyllSearch,"function"==typeof e.SimpleJekyllSearchInit&&e.SimpleJekyllSearchInit.call(this,e.SimpleJekyllSearch)}(window,document)},{"./JSONLoader":2,"./OptionsValidator":3,"./Repository":4,"./Templater":7,"./utils":9}],9:[function(t,e,r){"use strict";e.exports={merge:function(t,e){var r={};for(var n in t)r[n]=t[n],"undefined"!=typeof e[n]&&(r[n]=e[n]);return r},isJSON:function(t){try{return!!(t instanceof Object&&JSON.parse(JSON.stringify(t)))}catch(e){return!1}}}},{}]},{},[8]);
// ************************************* //
// *** Hide Header on on scroll down *** //
// ************************************* //

var didScroll;
var lastScrollTop = 0;
var delta = 5;
var navbarHeight = $('.navbar-fixed').outerHeight();

$(window).scroll(function(event){
    didScroll = true;
});

setInterval(function() {
    if (didScroll) {
        hasScrolled();
        didScroll = false;
    }
}, 250);

function hasScrolled() {
    var st = $(this).scrollTop();

    // Make sure they scroll more than delta
    if(Math.abs(lastScrollTop - st) <= delta)
        return;

    // If they scrolled down and are past the navbar, add class .nav-up.
    // This is necessary so you never see what is "behind" the navbar.
    if (st > lastScrollTop && st > navbarHeight){
        // Scroll Down
        $('.navbar-fixed').removeClass('nav-down').addClass('nav-up');
    } else {
        // Scroll Up
        if(st + $(window).height() < $(document).height()) {
            $('.navbar-fixed').removeClass('nav-up').addClass('nav-down');
        }
    }

    lastScrollTop = st;
}


// ************************************* //
// ** Toggleable Inverter (NightMode) ** //
// ************************************* //
// toggleable inverter with sessionStorage
// from http://stackoverflow.com/questions/28239337/store-a-css-class-on-browser


  $( '#inverter' ).click(function () {
    $( 'body' ).toggleClass( 'night' );

    if ($( 'body' ).hasClass( 'night' )) {
      sessionStorage.setItem( 'theme', 'night' );
    }

    else {
      sessionStorage.setItem( 'theme', 'day' );
    }

  });

  $(document).ready(function() {
    var theme = sessionStorage.getItem( 'theme' );
    if (theme !== '') {
      $( 'body' ).addClass(theme);
    }
  });



  $(document).ready(function() {

    $(function () {
      $( '.invert i' ).click(function() {

        $(this).toggleClass( 'feather-sun' );

        if ($(this).attr( 'class' ) == 'feather-moon' ) {
          sessionStorage.class = 'feather-moon';
        }
        else if ($(this).attr( 'class' ) == ( 'feather-moon feather-sun' )) {
          sessionStorage.class = 'feather-sun';
        }

      });

    });

    if(typeof(Storage) !== 'undefined' ) {
      $( '.invert i' ).addClass(sessionStorage.class);
    }

  });


// Initialize materialize components

  $(document).ready(function() {
    $('.parallax').parallax();

    $(".button-collapse").sideNav({
      menuWidth: 270,
      edge: 'right',
      closeOnClick: true,
      draggable: true
    });

    $('.collapsible').collapsible();
  });


  // Initialize the Jekyll Search plugin
  SimpleJekyllSearch({
    searchInput: document.getElementById('search-input'),
    resultsContainer: document.getElementById('results-container'),
    json: '/search.json',
    exclude: ['Dhammapuja']
  });

/*!
 * jQuery Smooth Scroll - v2.2.0 - 2017-05-05
 * https://github.com/kswedberg/jquery-smooth-scroll
 * Copyright (c) 2017 Karl Swedberg
 * Licensed MIT
 */


!function(a){"function"==typeof define&&define.amd?define(["jquery"],a):a("object"==typeof module&&module.exports?require("jquery"):jQuery)}(function(a){var b={},c={exclude:[],excludeWithin:[],offset:0,direction:"top",delegateSelector:null,scrollElement:null,scrollTarget:null,autoFocus:!1,beforeScroll:function(){},afterScroll:function(){},easing:"swing",speed:400,autoCoefficient:2,preventDefault:!0},d=function(b){var c=[],d=!1,e=b.dir&&"left"===b.dir?"scrollLeft":"scrollTop";return this.each(function(){var b=a(this);if(this!==document&&this!==window)return!document.scrollingElement||this!==document.documentElement&&this!==document.body?void(b[e]()>0?c.push(this):(b[e](1),d=b[e]()>0,d&&c.push(this),b[e](0))):(c.push(document.scrollingElement),!1)}),c.length||this.each(function(){this===document.documentElement&&"smooth"===a(this).css("scrollBehavior")&&(c=[this]),c.length||"BODY"!==this.nodeName||(c=[this])}),"first"===b.el&&c.length>1&&(c=[c[0]]),c},e=/^([\-\+]=)(\d+)/;a.fn.extend({scrollable:function(a){var b=d.call(this,{dir:a});return this.pushStack(b)},firstScrollable:function(a){var b=d.call(this,{el:"first",dir:a});return this.pushStack(b)},smoothScroll:function(b,c){if("options"===(b=b||{}))return c?this.each(function(){var b=a(this),d=a.extend(b.data("ssOpts")||{},c);a(this).data("ssOpts",d)}):this.first().data("ssOpts");var d=a.extend({},a.fn.smoothScroll.defaults,b),e=function(b){var c=function(a){return a.replace(/(:|\.|\/)/g,"\\$1")},e=this,f=a(this),g=a.extend({},d,f.data("ssOpts")||{}),h=d.exclude,i=g.excludeWithin,j=0,k=0,l=!0,m={},n=a.smoothScroll.filterPath(location.pathname),o=a.smoothScroll.filterPath(e.pathname),p=location.hostname===e.hostname||!e.hostname,q=g.scrollTarget||o===n,r=c(e.hash);if(r&&!a(r).length&&(l=!1),g.scrollTarget||p&&q&&r){for(;l&&j<h.length;)f.is(c(h[j++]))&&(l=!1);for(;l&&k<i.length;)f.closest(i[k++]).length&&(l=!1)}else l=!1;l&&(g.preventDefault&&b.preventDefault(),a.extend(m,g,{scrollTarget:g.scrollTarget||r,link:e}),a.smoothScroll(m))};return null!==b.delegateSelector?this.off("click.smoothscroll",b.delegateSelector).on("click.smoothscroll",b.delegateSelector,e):this.off("click.smoothscroll").on("click.smoothscroll",e),this}});var f=function(a){var b={relative:""},c="string"==typeof a&&e.exec(a);return"number"==typeof a?b.px=a:c&&(b.relative=c[1],b.px=parseFloat(c[2])||0),b},g=function(b){var c=a(b.scrollTarget);b.autoFocus&&c.length&&(c[0].focus(),c.is(document.activeElement)||(c.prop({tabIndex:-1}),c[0].focus())),b.afterScroll.call(b.link,b)};a.smoothScroll=function(c,d){if("options"===c&&"object"==typeof d)return a.extend(b,d);var e,h,i,j,k=f(c),l={},m=0,n="offset",o="scrollTop",p={},q={};k.px?e=a.extend({link:null},a.fn.smoothScroll.defaults,b):(e=a.extend({link:null},a.fn.smoothScroll.defaults,c||{},b),e.scrollElement&&(n="position","static"===e.scrollElement.css("position")&&e.scrollElement.css("position","relative")),d&&(k=f(d))),o="left"===e.direction?"scrollLeft":o,e.scrollElement?(h=e.scrollElement,k.px||/^(?:HTML|BODY)$/.test(h[0].nodeName)||(m=h[o]())):h=a("html, body").firstScrollable(e.direction),e.beforeScroll.call(h,e),l=k.px?k:{relative:"",px:a(e.scrollTarget)[n]()&&a(e.scrollTarget)[n]()[e.direction]||0},p[o]=l.relative+(l.px+m+e.offset),i=e.speed,"auto"===i&&(j=Math.abs(p[o]-h[o]()),i=j/e.autoCoefficient),q={duration:i,easing:e.easing,complete:function(){g(e)}},e.step&&(q.step=e.step),h.length?h.stop().animate(p,q):g(e)},a.smoothScroll.version="2.2.0",a.smoothScroll.filterPath=function(a){return a=a||"",a.replace(/^\//,"").replace(/(?:index|default).[a-zA-Z]{3,4}$/,"").replace(/\/$/,"")},a.fn.smoothScroll.defaults=c});
//= requires jquery/jquery.smooth-scroll

jQuery.fx.interval = 10;

var audio = $("#audio audio")[0];
var display;
var data = $("#data");
var timeLineNodes = [];

if (data && data.val()) {
  display = $('<ul class="display"></ul>');
  time = $('<div id="time">00:00.0</div>');
  var contain = $("#main"); /* for materialize <main> */
  contain.append(time);
  contain.append(display); /* for materialize <main> */
  /*$('body').append('<div id="time">00:00.0</div>'); // bootstrap */
  /*$('body').append(display); //boostrap */

  data.val().split(/\n+/).forEach(function (line) {
    var match = line.match(/^\s*(\[(.+?)\])?(\s*)(.+)\s*$/);
    if (match) {
      var time   = humanToTime(match[2]),
          indent = match[3],
          text   = match[4],
          node;
      if (text === "") {
        console.log("empty");
        return;
      } else if (text[0] == "#") {
        var match = text.match(/^(#+)\s*(.+)$/),
            depth = match[1].length,
            text  = match[2];
        console.log(match);
        node = $('<li><h' + depth +'>' + text + '</h' + depth + '></li>');
      } else {
        var pclass;
        if (indent.length > 1) {
          pclass = "en flow-text";
        } else {
          pclass = "pali flow-text";
        }
        text = vocalize(text);
        text = underline(text);
        node = $('<li><p class="' + pclass + '">' + text + '</p></li>');
      }
      if (time !== null) {
        var timeNode = $('<div class="time" data-time="' + time + '">' + timeToHuman(time) + '</div>');
        node.on("click", function(event) {
          // Binding event
          //audio.oncanplay = function() {
          //  console.log("Can start playing audio");
          //}


          audio.currentTime = time;
          audio.play();
        });
        node.prepend(timeNode);
        timeLineNodes.push({ time: time, node: node });
      }
      display.append(node);
    }
  });
}

function timeToHuman(time, digits) {
  return "" + parseInt(time / 60) + ":" + ("0" + (time % 60).toFixed(1)).slice(-4);
}

function humanToTime(time) {
  if (typeof(time) == "string") {
    var match = time.match(/^\s*(\d+)\s*:\s*([\d\.]+)\s*$/);
    if (match) {
      return (parseInt(match[1]) * 60) + parseFloat(match[2]);
    }
  }
  return parseFloat(time) || null;
}

function vocalize(text) {
  return text.replace(/(([\^`]+)(.))/g, function(t1, t2, m, c) {
    console.log([m, c]);
    var dir;
    if (m[0] == "^") {
      dir = "u";
    } else {
      dir = "d";
    }
    if (m.length > 1) {
      dir = dir + dir;
    }
    return '<span class="t">' + c + '<span><span class="' + dir + '"></span></span></span>';
  });
}

function underline(text) {
  return text.replace(/_(.+?)_/g, function(t1, m) {
    return '<span class="un">' + m + '</span>';
  });
}

function findLineByTime(time) {
  var min = 0, mid = 0, max = timeLineNodes.length;
  if (max === 0) {
    return null;
  }
  while (min < max) {
    mid = parseInt((min + max) / 2);
    midTime = timeLineNodes[mid].time;
    if (time < midTime) {
      if (max == mid) {
        max = mid - 1;
      } else {
        max = mid;
      }
    } else {
      if (min == mid) {
        min = mid + 1;
      } else {
        min = mid;
      }
    }
  }
  return timeLineNodes[mid].node;
}

function trackTime(track) {
  var lineNode = findLineByTime(track.currentTime);
  if (lineNode) {
    if (!lineNode.hasClass("highlight")) {
      $('li.highlight').removeClass("highlight");
      lineNode.addClass("highlight");
      console.log();
      if (!elementInScreen(lineNode, 150)) {
        $.smoothScroll({
          scrollTarget: lineNode,
          offset: -100,
          easing: 'swing',
          speed: 1000
        });
      }
    }
  }
  $("#time").text(timeToHuman(track.currentTime));
}

function elementInScreen(el, tolerance) {
  var el      = $(el),
      win     = $(window),
      top     = el.offset().top,
      height  = el.height(),
      wTop    = win.scrollTop(),
      wHeight = win.height();
  return ((wTop < top - tolerance) &&
          (wTop + wHeight > top + height + tolerance));
}

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImpxdWVyeS0zLjIuMS1jdXN0b20ubWluLmpzIiwibWF0ZXJpYWxpemUtdjAuMTAwLjItY3VzdG9tLmpzIiwic2ltcGxlLWpla3lsbC1zZWFyY2gubWluLmpzIiwic2NyaXB0cy5qcyIsImpxdWVyeS5zbW9vdGgtc2Nyb2xsLmpzIiwiY2hhbnRpbmcuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FDRkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNuMEZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ0xBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDeEhBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ1JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiEgalF1ZXJ5IHYzLjIuMi1wcmUgLWFqYXgsLWFqYXgvanNvbnAsLWFqYXgvbG9hZCwtYWpheC9wYXJzZVhNTCwtYWpheC9zY3JpcHQsLWFqYXgvdmFyL2xvY2F0aW9uLC1hamF4L3Zhci9ub25jZSwtYWpheC92YXIvcnF1ZXJ5LC1hamF4L3hociwtbWFuaXB1bGF0aW9uL19ldmFsVXJsLC1ldmVudC9hamF4LC1kZXByZWNhdGVkIHwgKGMpIEpTIEZvdW5kYXRpb24gYW5kIG90aGVyIGNvbnRyaWJ1dG9ycyB8IGpxdWVyeS5vcmcvbGljZW5zZSAqL1xuIWZ1bmN0aW9uKGUsdCl7XCJ1c2Ugc3RyaWN0XCI7XCJvYmplY3RcIj09dHlwZW9mIG1vZHVsZSYmXCJvYmplY3RcIj09dHlwZW9mIG1vZHVsZS5leHBvcnRzP21vZHVsZS5leHBvcnRzPWUuZG9jdW1lbnQ/dChlLCEwKTpmdW5jdGlvbihlKXtpZighZS5kb2N1bWVudCl0aHJvdyBuZXcgRXJyb3IoXCJqUXVlcnkgcmVxdWlyZXMgYSB3aW5kb3cgd2l0aCBhIGRvY3VtZW50XCIpO3JldHVybiB0KGUpfTp0KGUpfShcInVuZGVmaW5lZFwiIT10eXBlb2Ygd2luZG93P3dpbmRvdzp0aGlzLGZ1bmN0aW9uKGUsdCl7XCJ1c2Ugc3RyaWN0XCI7dmFyIG49W10saT1lLmRvY3VtZW50LHI9T2JqZWN0LmdldFByb3RvdHlwZU9mLG89bi5zbGljZSxzPW4uY29uY2F0LGE9bi5wdXNoLHU9bi5pbmRleE9mLGw9e30sYz1sLnRvU3RyaW5nLGY9bC5oYXNPd25Qcm9wZXJ0eSxwPWYudG9TdHJpbmcsZD1wLmNhbGwoT2JqZWN0KSxoPXt9LGc9ZnVuY3Rpb24gZSh0KXtyZXR1cm4gbnVsbCE9dCYmdD09PXQud2luZG93fTtmdW5jdGlvbiB2KGUsdCl7dmFyIG49KHQ9dHx8aSkuY3JlYXRlRWxlbWVudChcInNjcmlwdFwiKTtuLnRleHQ9ZSx0LmhlYWQuYXBwZW5kQ2hpbGQobikucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChuKX12YXIgbT1cIjMuMi4yLXByZSAtYWpheCwtYWpheC9qc29ucCwtYWpheC9sb2FkLC1hamF4L3BhcnNlWE1MLC1hamF4L3NjcmlwdCwtYWpheC92YXIvbG9jYXRpb24sLWFqYXgvdmFyL25vbmNlLC1hamF4L3Zhci9ycXVlcnksLWFqYXgveGhyLC1tYW5pcHVsYXRpb24vX2V2YWxVcmwsLWV2ZW50L2FqYXgsLWRlcHJlY2F0ZWRcIix5PWZ1bmN0aW9uKGUsdCl7cmV0dXJuIG5ldyB5LmZuLmluaXQoZSx0KX0seD0vXltcXHNcXHVGRUZGXFx4QTBdK3xbXFxzXFx1RkVGRlxceEEwXSskL2csYj0vXi1tcy0vLHc9Ly0oW2Etel0pL2csQz1mdW5jdGlvbihlLHQpe3JldHVybiB0LnRvVXBwZXJDYXNlKCl9O3kuZm49eS5wcm90b3R5cGU9e2pxdWVyeTptLGNvbnN0cnVjdG9yOnksbGVuZ3RoOjAsdG9BcnJheTpmdW5jdGlvbigpe3JldHVybiBvLmNhbGwodGhpcyl9LGdldDpmdW5jdGlvbihlKXtyZXR1cm4gbnVsbD09ZT9vLmNhbGwodGhpcyk6ZTwwP3RoaXNbZSt0aGlzLmxlbmd0aF06dGhpc1tlXX0scHVzaFN0YWNrOmZ1bmN0aW9uKGUpe3ZhciB0PXkubWVyZ2UodGhpcy5jb25zdHJ1Y3RvcigpLGUpO3JldHVybiB0LnByZXZPYmplY3Q9dGhpcyx0fSxlYWNoOmZ1bmN0aW9uKGUpe3JldHVybiB5LmVhY2godGhpcyxlKX0sbWFwOmZ1bmN0aW9uKGUpe3JldHVybiB0aGlzLnB1c2hTdGFjayh5Lm1hcCh0aGlzLGZ1bmN0aW9uKHQsbil7cmV0dXJuIGUuY2FsbCh0LG4sdCl9KSl9LHNsaWNlOmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMucHVzaFN0YWNrKG8uYXBwbHkodGhpcyxhcmd1bWVudHMpKX0sZmlyc3Q6ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5lcSgwKX0sbGFzdDpmdW5jdGlvbigpe3JldHVybiB0aGlzLmVxKC0xKX0sZXE6ZnVuY3Rpb24oZSl7dmFyIHQ9dGhpcy5sZW5ndGgsbj0rZSsoZTwwP3Q6MCk7cmV0dXJuIHRoaXMucHVzaFN0YWNrKG4+PTAmJm48dD9bdGhpc1tuXV06W10pfSxlbmQ6ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5wcmV2T2JqZWN0fHx0aGlzLmNvbnN0cnVjdG9yKCl9LHB1c2g6YSxzb3J0Om4uc29ydCxzcGxpY2U6bi5zcGxpY2V9LHkuZXh0ZW5kPXkuZm4uZXh0ZW5kPWZ1bmN0aW9uKCl7dmFyIGUsdCxuLGkscixvLHM9YXJndW1lbnRzWzBdfHx7fSxhPTEsdT1hcmd1bWVudHMubGVuZ3RoLGw9ITE7Zm9yKFwiYm9vbGVhblwiPT10eXBlb2YgcyYmKGw9cyxzPWFyZ3VtZW50c1thXXx8e30sYSsrKSxcIm9iamVjdFwiPT10eXBlb2Ygc3x8eS5pc0Z1bmN0aW9uKHMpfHwocz17fSksYT09PXUmJihzPXRoaXMsYS0tKTthPHU7YSsrKWlmKG51bGwhPShlPWFyZ3VtZW50c1thXSkpZm9yKHQgaW4gZSluPXNbdF0scyE9PShpPWVbdF0pJiYobCYmaSYmKHkuaXNQbGFpbk9iamVjdChpKXx8KHI9QXJyYXkuaXNBcnJheShpKSkpPyhyPyhyPSExLG89biYmQXJyYXkuaXNBcnJheShuKT9uOltdKTpvPW4mJnkuaXNQbGFpbk9iamVjdChuKT9uOnt9LHNbdF09eS5leHRlbmQobCxvLGkpKTp2b2lkIDAhPT1pJiYoc1t0XT1pKSk7cmV0dXJuIHN9LHkuZXh0ZW5kKHtleHBhbmRvOlwialF1ZXJ5XCIrKG0rTWF0aC5yYW5kb20oKSkucmVwbGFjZSgvXFxEL2csXCJcIiksaXNSZWFkeTohMCxlcnJvcjpmdW5jdGlvbihlKXt0aHJvdyBuZXcgRXJyb3IoZSl9LG5vb3A6ZnVuY3Rpb24oKXt9LGlzRnVuY3Rpb246ZnVuY3Rpb24oZSl7cmV0dXJuXCJmdW5jdGlvblwiPT10eXBlb2YgZSYmXCJudW1iZXJcIiE9dHlwZW9mIGUubm9kZVR5cGV9LGlzTnVtZXJpYzpmdW5jdGlvbihlKXt2YXIgdD15LnR5cGUoZSk7cmV0dXJuKFwibnVtYmVyXCI9PT10fHxcInN0cmluZ1wiPT09dCkmJiFpc05hTihlLXBhcnNlRmxvYXQoZSkpfSxpc1BsYWluT2JqZWN0OmZ1bmN0aW9uKGUpe3ZhciB0LG47cmV0dXJuISghZXx8XCJbb2JqZWN0IE9iamVjdF1cIiE9PWMuY2FsbChlKSkmJighKHQ9cihlKSl8fFwiZnVuY3Rpb25cIj09dHlwZW9mKG49Zi5jYWxsKHQsXCJjb25zdHJ1Y3RvclwiKSYmdC5jb25zdHJ1Y3RvcikmJnAuY2FsbChuKT09PWQpfSxpc0VtcHR5T2JqZWN0OmZ1bmN0aW9uKGUpe3ZhciB0O2Zvcih0IGluIGUpcmV0dXJuITE7cmV0dXJuITB9LHR5cGU6ZnVuY3Rpb24oZSl7cmV0dXJuIG51bGw9PWU/ZStcIlwiOlwib2JqZWN0XCI9PXR5cGVvZiBlfHxcImZ1bmN0aW9uXCI9PXR5cGVvZiBlP2xbYy5jYWxsKGUpXXx8XCJvYmplY3RcIjp0eXBlb2YgZX0sZ2xvYmFsRXZhbDpmdW5jdGlvbihlKXt2KGUpfSxjYW1lbENhc2U6ZnVuY3Rpb24oZSl7cmV0dXJuIGUucmVwbGFjZShiLFwibXMtXCIpLnJlcGxhY2UodyxDKX0sZWFjaDpmdW5jdGlvbihlLHQpe3ZhciBuLGk9MDtpZihUKGUpKXtmb3Iobj1lLmxlbmd0aDtpPG47aSsrKWlmKCExPT09dC5jYWxsKGVbaV0saSxlW2ldKSlicmVha31lbHNlIGZvcihpIGluIGUpaWYoITE9PT10LmNhbGwoZVtpXSxpLGVbaV0pKWJyZWFrO3JldHVybiBlfSx0cmltOmZ1bmN0aW9uKGUpe3JldHVybiBudWxsPT1lP1wiXCI6KGUrXCJcIikucmVwbGFjZSh4LFwiXCIpfSxtYWtlQXJyYXk6ZnVuY3Rpb24oZSx0KXt2YXIgbj10fHxbXTtyZXR1cm4gbnVsbCE9ZSYmKFQoT2JqZWN0KGUpKT95Lm1lcmdlKG4sXCJzdHJpbmdcIj09dHlwZW9mIGU/W2VdOmUpOmEuY2FsbChuLGUpKSxufSxpbkFycmF5OmZ1bmN0aW9uKGUsdCxuKXtyZXR1cm4gbnVsbD09dD8tMTp1LmNhbGwodCxlLG4pfSxtZXJnZTpmdW5jdGlvbihlLHQpe2Zvcih2YXIgbj0rdC5sZW5ndGgsaT0wLHI9ZS5sZW5ndGg7aTxuO2krKyllW3IrK109dFtpXTtyZXR1cm4gZS5sZW5ndGg9cixlfSxncmVwOmZ1bmN0aW9uKGUsdCxuKXtmb3IodmFyIGkscj1bXSxvPTAscz1lLmxlbmd0aCxhPSFuO288cztvKyspKGk9IXQoZVtvXSxvKSkhPT1hJiZyLnB1c2goZVtvXSk7cmV0dXJuIHJ9LG1hcDpmdW5jdGlvbihlLHQsbil7dmFyIGkscixvPTAsYT1bXTtpZihUKGUpKWZvcihpPWUubGVuZ3RoO288aTtvKyspbnVsbCE9KHI9dChlW29dLG8sbikpJiZhLnB1c2gocik7ZWxzZSBmb3IobyBpbiBlKW51bGwhPShyPXQoZVtvXSxvLG4pKSYmYS5wdXNoKHIpO3JldHVybiBzLmFwcGx5KFtdLGEpfSxndWlkOjEscHJveHk6ZnVuY3Rpb24oZSx0KXt2YXIgbixpLHI7aWYoXCJzdHJpbmdcIj09dHlwZW9mIHQmJihuPWVbdF0sdD1lLGU9bikseS5pc0Z1bmN0aW9uKGUpKXJldHVybiBpPW8uY2FsbChhcmd1bWVudHMsMikscj1mdW5jdGlvbigpe3JldHVybiBlLmFwcGx5KHR8fHRoaXMsaS5jb25jYXQoby5jYWxsKGFyZ3VtZW50cykpKX0sci5ndWlkPWUuZ3VpZD1lLmd1aWR8fHkuZ3VpZCsrLHJ9LG5vdzpEYXRlLm5vdyxzdXBwb3J0Omh9KSxcImZ1bmN0aW9uXCI9PXR5cGVvZiBTeW1ib2wmJih5LmZuW1N5bWJvbC5pdGVyYXRvcl09bltTeW1ib2wuaXRlcmF0b3JdKSx5LmVhY2goXCJCb29sZWFuIE51bWJlciBTdHJpbmcgRnVuY3Rpb24gQXJyYXkgRGF0ZSBSZWdFeHAgT2JqZWN0IEVycm9yIFN5bWJvbFwiLnNwbGl0KFwiIFwiKSxmdW5jdGlvbihlLHQpe2xbXCJbb2JqZWN0IFwiK3QrXCJdXCJdPXQudG9Mb3dlckNhc2UoKX0pO2Z1bmN0aW9uIFQoZSl7dmFyIHQ9ISFlJiZcImxlbmd0aFwiaW4gZSYmZS5sZW5ndGgsbj15LnR5cGUoZSk7cmV0dXJuIXkuaXNGdW5jdGlvbihlKSYmIWcoZSkmJihcImFycmF5XCI9PT1ufHwwPT09dHx8XCJudW1iZXJcIj09dHlwZW9mIHQmJnQ+MCYmdC0xIGluIGUpfXZhciBrPWZ1bmN0aW9uKGUpe3ZhciB0LG4saSxyLG8scyxhLHUsbCxjLGYscCxkLGgsZyx2LG0seSx4LGI9XCJzaXp6bGVcIisxKm5ldyBEYXRlLHc9ZS5kb2N1bWVudCxDPTAsVD0wLGs9c2UoKSxFPXNlKCksTj1zZSgpLEE9ZnVuY3Rpb24oZSx0KXtyZXR1cm4gZT09PXQmJihmPSEwKSwwfSxEPXt9Lmhhc093blByb3BlcnR5LFM9W10scT1TLnBvcCxMPVMucHVzaCxqPVMucHVzaCxIPVMuc2xpY2UsRj1mdW5jdGlvbihlLHQpe2Zvcih2YXIgbj0wLGk9ZS5sZW5ndGg7bjxpO24rKylpZihlW25dPT09dClyZXR1cm4gbjtyZXR1cm4tMX0sTz1cImNoZWNrZWR8c2VsZWN0ZWR8YXN5bmN8YXV0b2ZvY3VzfGF1dG9wbGF5fGNvbnRyb2xzfGRlZmVyfGRpc2FibGVkfGhpZGRlbnxpc21hcHxsb29wfG11bHRpcGxlfG9wZW58cmVhZG9ubHl8cmVxdWlyZWR8c2NvcGVkXCIsUD1cIltcXFxceDIwXFxcXHRcXFxcclxcXFxuXFxcXGZdXCIsST1cIig/OlxcXFxcXFxcLnxbXFxcXHctXXxbXlxcMC1cXFxceGEwXSkrXCIsUj1cIlxcXFxbXCIrUCtcIiooXCIrSStcIikoPzpcIitQK1wiKihbKl4kfCF+XT89KVwiK1ArXCIqKD86JygoPzpcXFxcXFxcXC58W15cXFxcXFxcXCddKSopJ3xcXFwiKCg/OlxcXFxcXFxcLnxbXlxcXFxcXFxcXFxcIl0pKilcXFwifChcIitJK1wiKSl8KVwiK1ArXCIqXFxcXF1cIixNPVwiOihcIitJK1wiKSg/OlxcXFwoKCgnKCg/OlxcXFxcXFxcLnxbXlxcXFxcXFxcJ10pKiknfFxcXCIoKD86XFxcXFxcXFwufFteXFxcXFxcXFxcXFwiXSkqKVxcXCIpfCgoPzpcXFxcXFxcXC58W15cXFxcXFxcXCgpW1xcXFxdXXxcIitSK1wiKSopfC4qKVxcXFwpfClcIixXPW5ldyBSZWdFeHAoUCtcIitcIixcImdcIiksQj1uZXcgUmVnRXhwKFwiXlwiK1ArXCIrfCgoPzpefFteXFxcXFxcXFxdKSg/OlxcXFxcXFxcLikqKVwiK1ArXCIrJFwiLFwiZ1wiKSwkPW5ldyBSZWdFeHAoXCJeXCIrUCtcIiosXCIrUCtcIipcIiksXz1uZXcgUmVnRXhwKFwiXlwiK1ArXCIqKFs+K35dfFwiK1ArXCIpXCIrUCtcIipcIiksej1uZXcgUmVnRXhwKFwiPVwiK1ArXCIqKFteXFxcXF0nXFxcIl0qPylcIitQK1wiKlxcXFxdXCIsXCJnXCIpLFU9bmV3IFJlZ0V4cChNKSxYPW5ldyBSZWdFeHAoXCJeXCIrSStcIiRcIiksVj17SUQ6bmV3IFJlZ0V4cChcIl4jKFwiK0krXCIpXCIpLENMQVNTOm5ldyBSZWdFeHAoXCJeXFxcXC4oXCIrSStcIilcIiksVEFHOm5ldyBSZWdFeHAoXCJeKFwiK0krXCJ8WypdKVwiKSxBVFRSOm5ldyBSZWdFeHAoXCJeXCIrUiksUFNFVURPOm5ldyBSZWdFeHAoXCJeXCIrTSksQ0hJTEQ6bmV3IFJlZ0V4cChcIl46KG9ubHl8Zmlyc3R8bGFzdHxudGh8bnRoLWxhc3QpLShjaGlsZHxvZi10eXBlKSg/OlxcXFwoXCIrUCtcIiooZXZlbnxvZGR8KChbKy1dfCkoXFxcXGQqKW58KVwiK1ArXCIqKD86KFsrLV18KVwiK1ArXCIqKFxcXFxkKyl8KSlcIitQK1wiKlxcXFwpfClcIixcImlcIiksYm9vbDpuZXcgUmVnRXhwKFwiXig/OlwiK08rXCIpJFwiLFwiaVwiKSxuZWVkc0NvbnRleHQ6bmV3IFJlZ0V4cChcIl5cIitQK1wiKls+K35dfDooZXZlbnxvZGR8ZXF8Z3R8bHR8bnRofGZpcnN0fGxhc3QpKD86XFxcXChcIitQK1wiKigoPzotXFxcXGQpP1xcXFxkKilcIitQK1wiKlxcXFwpfCkoPz1bXi1dfCQpXCIsXCJpXCIpfSxZPS9eKD86aW5wdXR8c2VsZWN0fHRleHRhcmVhfGJ1dHRvbikkL2ksUT0vXmhcXGQkL2ksRz0vXltee10rXFx7XFxzKlxcW25hdGl2ZSBcXHcvLEs9L14oPzojKFtcXHctXSspfChcXHcrKXxcXC4oW1xcdy1dKykpJC8sSj0vWyt+XS8sWj1uZXcgUmVnRXhwKFwiXFxcXFxcXFwoW1xcXFxkYS1mXXsxLDZ9XCIrUCtcIj98KFwiK1ArXCIpfC4pXCIsXCJpZ1wiKSxlZT1mdW5jdGlvbihlLHQsbil7dmFyIGk9XCIweFwiK3QtNjU1MzY7cmV0dXJuIGkhPT1pfHxuP3Q6aTwwP1N0cmluZy5mcm9tQ2hhckNvZGUoaSs2NTUzNik6U3RyaW5nLmZyb21DaGFyQ29kZShpPj4xMHw1NTI5NiwxMDIzJml8NTYzMjApfSx0ZT0vKFtcXDAtXFx4MWZcXHg3Zl18Xi0/XFxkKXxeLSR8W15cXDAtXFx4MWZcXHg3Zi1cXHVGRkZGXFx3LV0vZyxuZT1mdW5jdGlvbihlLHQpe3JldHVybiB0P1wiXFwwXCI9PT1lP1wiXFx1ZmZmZFwiOmUuc2xpY2UoMCwtMSkrXCJcXFxcXCIrZS5jaGFyQ29kZUF0KGUubGVuZ3RoLTEpLnRvU3RyaW5nKDE2KStcIiBcIjpcIlxcXFxcIitlfSxpZT1mdW5jdGlvbigpe3AoKX0scmU9eWUoZnVuY3Rpb24oZSl7cmV0dXJuITA9PT1lLmRpc2FibGVkJiYoXCJmb3JtXCJpbiBlfHxcImxhYmVsXCJpbiBlKX0se2RpcjpcInBhcmVudE5vZGVcIixuZXh0OlwibGVnZW5kXCJ9KTt0cnl7ai5hcHBseShTPUguY2FsbCh3LmNoaWxkTm9kZXMpLHcuY2hpbGROb2RlcyksU1t3LmNoaWxkTm9kZXMubGVuZ3RoXS5ub2RlVHlwZX1jYXRjaChlKXtqPXthcHBseTpTLmxlbmd0aD9mdW5jdGlvbihlLHQpe0wuYXBwbHkoZSxILmNhbGwodCkpfTpmdW5jdGlvbihlLHQpe3ZhciBuPWUubGVuZ3RoLGk9MDt3aGlsZShlW24rK109dFtpKytdKTtlLmxlbmd0aD1uLTF9fX1mdW5jdGlvbiBvZShlLHQsaSxyKXt2YXIgbyxhLGwsYyxmLGgsbSx5PXQmJnQub3duZXJEb2N1bWVudCxDPXQ/dC5ub2RlVHlwZTo5O2lmKGk9aXx8W10sXCJzdHJpbmdcIiE9dHlwZW9mIGV8fCFlfHwxIT09QyYmOSE9PUMmJjExIT09QylyZXR1cm4gaTtpZighciYmKCh0P3Qub3duZXJEb2N1bWVudHx8dDp3KSE9PWQmJnAodCksdD10fHxkLGcpKXtpZigxMSE9PUMmJihmPUsuZXhlYyhlKSkpaWYobz1mWzFdKXtpZig5PT09Qyl7aWYoIShsPXQuZ2V0RWxlbWVudEJ5SWQobykpKXJldHVybiBpO2lmKGwuaWQ9PT1vKXJldHVybiBpLnB1c2gobCksaX1lbHNlIGlmKHkmJihsPXkuZ2V0RWxlbWVudEJ5SWQobykpJiZ4KHQsbCkmJmwuaWQ9PT1vKXJldHVybiBpLnB1c2gobCksaX1lbHNle2lmKGZbMl0pcmV0dXJuIGouYXBwbHkoaSx0LmdldEVsZW1lbnRzQnlUYWdOYW1lKGUpKSxpO2lmKChvPWZbM10pJiZuLmdldEVsZW1lbnRzQnlDbGFzc05hbWUmJnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSlyZXR1cm4gai5hcHBseShpLHQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShvKSksaX1pZihuLnFzYSYmIU5bZStcIiBcIl0mJighdnx8IXYudGVzdChlKSkpe2lmKDEhPT1DKXk9dCxtPWU7ZWxzZSBpZihcIm9iamVjdFwiIT09dC5ub2RlTmFtZS50b0xvd2VyQ2FzZSgpKXsoYz10LmdldEF0dHJpYnV0ZShcImlkXCIpKT9jPWMucmVwbGFjZSh0ZSxuZSk6dC5zZXRBdHRyaWJ1dGUoXCJpZFwiLGM9YiksYT0oaD1zKGUpKS5sZW5ndGg7d2hpbGUoYS0tKWhbYV09XCIjXCIrYytcIiBcIittZShoW2FdKTttPWguam9pbihcIixcIikseT1KLnRlc3QoZSkmJmdlKHQucGFyZW50Tm9kZSl8fHR9aWYobSl0cnl7cmV0dXJuIGouYXBwbHkoaSx5LnF1ZXJ5U2VsZWN0b3JBbGwobSkpLGl9Y2F0Y2goZSl7fWZpbmFsbHl7Yz09PWImJnQucmVtb3ZlQXR0cmlidXRlKFwiaWRcIil9fX1yZXR1cm4gdShlLnJlcGxhY2UoQixcIiQxXCIpLHQsaSxyKX1mdW5jdGlvbiBzZSgpe3ZhciBlPVtdO2Z1bmN0aW9uIHQobixyKXtyZXR1cm4gZS5wdXNoKG4rXCIgXCIpPmkuY2FjaGVMZW5ndGgmJmRlbGV0ZSB0W2Uuc2hpZnQoKV0sdFtuK1wiIFwiXT1yfXJldHVybiB0fWZ1bmN0aW9uIGFlKGUpe3JldHVybiBlW2JdPSEwLGV9ZnVuY3Rpb24gdWUoZSl7dmFyIHQ9ZC5jcmVhdGVFbGVtZW50KFwiZmllbGRzZXRcIik7dHJ5e3JldHVybiEhZSh0KX1jYXRjaChlKXtyZXR1cm4hMX1maW5hbGx5e3QucGFyZW50Tm9kZSYmdC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHQpLHQ9bnVsbH19ZnVuY3Rpb24gbGUoZSx0KXt2YXIgbj1lLnNwbGl0KFwifFwiKSxyPW4ubGVuZ3RoO3doaWxlKHItLSlpLmF0dHJIYW5kbGVbbltyXV09dH1mdW5jdGlvbiBjZShlLHQpe3ZhciBuPXQmJmUsaT1uJiYxPT09ZS5ub2RlVHlwZSYmMT09PXQubm9kZVR5cGUmJmUuc291cmNlSW5kZXgtdC5zb3VyY2VJbmRleDtpZihpKXJldHVybiBpO2lmKG4pd2hpbGUobj1uLm5leHRTaWJsaW5nKWlmKG49PT10KXJldHVybi0xO3JldHVybiBlPzE6LTF9ZnVuY3Rpb24gZmUoZSl7cmV0dXJuIGZ1bmN0aW9uKHQpe3JldHVyblwiaW5wdXRcIj09PXQubm9kZU5hbWUudG9Mb3dlckNhc2UoKSYmdC50eXBlPT09ZX19ZnVuY3Rpb24gcGUoZSl7cmV0dXJuIGZ1bmN0aW9uKHQpe3ZhciBuPXQubm9kZU5hbWUudG9Mb3dlckNhc2UoKTtyZXR1cm4oXCJpbnB1dFwiPT09bnx8XCJidXR0b25cIj09PW4pJiZ0LnR5cGU9PT1lfX1mdW5jdGlvbiBkZShlKXtyZXR1cm4gZnVuY3Rpb24odCl7cmV0dXJuXCJmb3JtXCJpbiB0P3QucGFyZW50Tm9kZSYmITE9PT10LmRpc2FibGVkP1wibGFiZWxcImluIHQ/XCJsYWJlbFwiaW4gdC5wYXJlbnROb2RlP3QucGFyZW50Tm9kZS5kaXNhYmxlZD09PWU6dC5kaXNhYmxlZD09PWU6dC5pc0Rpc2FibGVkPT09ZXx8dC5pc0Rpc2FibGVkIT09IWUmJnJlKHQpPT09ZTp0LmRpc2FibGVkPT09ZTpcImxhYmVsXCJpbiB0JiZ0LmRpc2FibGVkPT09ZX19ZnVuY3Rpb24gaGUoZSl7cmV0dXJuIGFlKGZ1bmN0aW9uKHQpe3JldHVybiB0PSt0LGFlKGZ1bmN0aW9uKG4saSl7dmFyIHIsbz1lKFtdLG4ubGVuZ3RoLHQpLHM9by5sZW5ndGg7d2hpbGUocy0tKW5bcj1vW3NdXSYmKG5bcl09IShpW3JdPW5bcl0pKX0pfSl9ZnVuY3Rpb24gZ2UoZSl7cmV0dXJuIGUmJlwidW5kZWZpbmVkXCIhPXR5cGVvZiBlLmdldEVsZW1lbnRzQnlUYWdOYW1lJiZlfW49b2Uuc3VwcG9ydD17fSxvPW9lLmlzWE1MPWZ1bmN0aW9uKGUpe3ZhciB0PWUmJihlLm93bmVyRG9jdW1lbnR8fGUpLmRvY3VtZW50RWxlbWVudDtyZXR1cm4hIXQmJlwiSFRNTFwiIT09dC5ub2RlTmFtZX0scD1vZS5zZXREb2N1bWVudD1mdW5jdGlvbihlKXt2YXIgdCxyLHM9ZT9lLm93bmVyRG9jdW1lbnR8fGU6dztyZXR1cm4gcyE9PWQmJjk9PT1zLm5vZGVUeXBlJiZzLmRvY3VtZW50RWxlbWVudD8oZD1zLGg9ZC5kb2N1bWVudEVsZW1lbnQsZz0hbyhkKSx3IT09ZCYmKHI9ZC5kZWZhdWx0VmlldykmJnIudG9wIT09ciYmKHIuYWRkRXZlbnRMaXN0ZW5lcj9yLmFkZEV2ZW50TGlzdGVuZXIoXCJ1bmxvYWRcIixpZSwhMSk6ci5hdHRhY2hFdmVudCYmci5hdHRhY2hFdmVudChcIm9udW5sb2FkXCIsaWUpKSxuLmF0dHJpYnV0ZXM9dWUoZnVuY3Rpb24oZSl7cmV0dXJuIGUuY2xhc3NOYW1lPVwiaVwiLCFlLmdldEF0dHJpYnV0ZShcImNsYXNzTmFtZVwiKX0pLG4uZ2V0RWxlbWVudHNCeVRhZ05hbWU9dWUoZnVuY3Rpb24oZSl7cmV0dXJuIGUuYXBwZW5kQ2hpbGQoZC5jcmVhdGVDb21tZW50KFwiXCIpKSwhZS5nZXRFbGVtZW50c0J5VGFnTmFtZShcIipcIikubGVuZ3RofSksbi5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lPUcudGVzdChkLmdldEVsZW1lbnRzQnlDbGFzc05hbWUpLG4uZ2V0QnlJZD11ZShmdW5jdGlvbihlKXtyZXR1cm4gaC5hcHBlbmRDaGlsZChlKS5pZD1iLCFkLmdldEVsZW1lbnRzQnlOYW1lfHwhZC5nZXRFbGVtZW50c0J5TmFtZShiKS5sZW5ndGh9KSxuLmdldEJ5SWQ/KGkuZmlsdGVyLklEPWZ1bmN0aW9uKGUpe3ZhciB0PWUucmVwbGFjZShaLGVlKTtyZXR1cm4gZnVuY3Rpb24oZSl7cmV0dXJuIGUuZ2V0QXR0cmlidXRlKFwiaWRcIik9PT10fX0saS5maW5kLklEPWZ1bmN0aW9uKGUsdCl7aWYoXCJ1bmRlZmluZWRcIiE9dHlwZW9mIHQuZ2V0RWxlbWVudEJ5SWQmJmcpe3ZhciBuPXQuZ2V0RWxlbWVudEJ5SWQoZSk7cmV0dXJuIG4/W25dOltdfX0pOihpLmZpbHRlci5JRD1mdW5jdGlvbihlKXt2YXIgdD1lLnJlcGxhY2UoWixlZSk7cmV0dXJuIGZ1bmN0aW9uKGUpe3ZhciBuPVwidW5kZWZpbmVkXCIhPXR5cGVvZiBlLmdldEF0dHJpYnV0ZU5vZGUmJmUuZ2V0QXR0cmlidXRlTm9kZShcImlkXCIpO3JldHVybiBuJiZuLnZhbHVlPT09dH19LGkuZmluZC5JRD1mdW5jdGlvbihlLHQpe2lmKFwidW5kZWZpbmVkXCIhPXR5cGVvZiB0LmdldEVsZW1lbnRCeUlkJiZnKXt2YXIgbixpLHIsbz10LmdldEVsZW1lbnRCeUlkKGUpO2lmKG8pe2lmKChuPW8uZ2V0QXR0cmlidXRlTm9kZShcImlkXCIpKSYmbi52YWx1ZT09PWUpcmV0dXJuW29dO3I9dC5nZXRFbGVtZW50c0J5TmFtZShlKSxpPTA7d2hpbGUobz1yW2krK10paWYoKG49by5nZXRBdHRyaWJ1dGVOb2RlKFwiaWRcIikpJiZuLnZhbHVlPT09ZSlyZXR1cm5bb119cmV0dXJuW119fSksaS5maW5kLlRBRz1uLmdldEVsZW1lbnRzQnlUYWdOYW1lP2Z1bmN0aW9uKGUsdCl7cmV0dXJuXCJ1bmRlZmluZWRcIiE9dHlwZW9mIHQuZ2V0RWxlbWVudHNCeVRhZ05hbWU/dC5nZXRFbGVtZW50c0J5VGFnTmFtZShlKTpuLnFzYT90LnF1ZXJ5U2VsZWN0b3JBbGwoZSk6dm9pZCAwfTpmdW5jdGlvbihlLHQpe3ZhciBuLGk9W10scj0wLG89dC5nZXRFbGVtZW50c0J5VGFnTmFtZShlKTtpZihcIipcIj09PWUpe3doaWxlKG49b1tyKytdKTE9PT1uLm5vZGVUeXBlJiZpLnB1c2gobik7cmV0dXJuIGl9cmV0dXJuIG99LGkuZmluZC5DTEFTUz1uLmdldEVsZW1lbnRzQnlDbGFzc05hbWUmJmZ1bmN0aW9uKGUsdCl7aWYoXCJ1bmRlZmluZWRcIiE9dHlwZW9mIHQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSYmZylyZXR1cm4gdC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKGUpfSxtPVtdLHY9W10sKG4ucXNhPUcudGVzdChkLnF1ZXJ5U2VsZWN0b3JBbGwpKSYmKHVlKGZ1bmN0aW9uKGUpe2guYXBwZW5kQ2hpbGQoZSkuaW5uZXJIVE1MPVwiPGEgaWQ9J1wiK2IrXCInPjwvYT48c2VsZWN0IGlkPSdcIitiK1wiLVxcclxcXFwnIG1zYWxsb3djYXB0dXJlPScnPjxvcHRpb24gc2VsZWN0ZWQ9Jyc+PC9vcHRpb24+PC9zZWxlY3Q+XCIsZS5xdWVyeVNlbGVjdG9yQWxsKFwiW21zYWxsb3djYXB0dXJlXj0nJ11cIikubGVuZ3RoJiZ2LnB1c2goXCJbKl4kXT1cIitQK1wiKig/OicnfFxcXCJcXFwiKVwiKSxlLnF1ZXJ5U2VsZWN0b3JBbGwoXCJbc2VsZWN0ZWRdXCIpLmxlbmd0aHx8di5wdXNoKFwiXFxcXFtcIitQK1wiKig/OnZhbHVlfFwiK08rXCIpXCIpLGUucXVlcnlTZWxlY3RvckFsbChcIltpZH49XCIrYitcIi1dXCIpLmxlbmd0aHx8di5wdXNoKFwifj1cIiksZS5xdWVyeVNlbGVjdG9yQWxsKFwiOmNoZWNrZWRcIikubGVuZ3RofHx2LnB1c2goXCI6Y2hlY2tlZFwiKSxlLnF1ZXJ5U2VsZWN0b3JBbGwoXCJhI1wiK2IrXCIrKlwiKS5sZW5ndGh8fHYucHVzaChcIi4jLitbK35dXCIpfSksdWUoZnVuY3Rpb24oZSl7ZS5pbm5lckhUTUw9XCI8YSBocmVmPScnIGRpc2FibGVkPSdkaXNhYmxlZCc+PC9hPjxzZWxlY3QgZGlzYWJsZWQ9J2Rpc2FibGVkJz48b3B0aW9uLz48L3NlbGVjdD5cIjt2YXIgdD1kLmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTt0LnNldEF0dHJpYnV0ZShcInR5cGVcIixcImhpZGRlblwiKSxlLmFwcGVuZENoaWxkKHQpLnNldEF0dHJpYnV0ZShcIm5hbWVcIixcIkRcIiksZS5xdWVyeVNlbGVjdG9yQWxsKFwiW25hbWU9ZF1cIikubGVuZ3RoJiZ2LnB1c2goXCJuYW1lXCIrUCtcIipbKl4kfCF+XT89XCIpLDIhPT1lLnF1ZXJ5U2VsZWN0b3JBbGwoXCI6ZW5hYmxlZFwiKS5sZW5ndGgmJnYucHVzaChcIjplbmFibGVkXCIsXCI6ZGlzYWJsZWRcIiksaC5hcHBlbmRDaGlsZChlKS5kaXNhYmxlZD0hMCwyIT09ZS5xdWVyeVNlbGVjdG9yQWxsKFwiOmRpc2FibGVkXCIpLmxlbmd0aCYmdi5wdXNoKFwiOmVuYWJsZWRcIixcIjpkaXNhYmxlZFwiKSxlLnF1ZXJ5U2VsZWN0b3JBbGwoXCIqLDp4XCIpLHYucHVzaChcIiwuKjpcIil9KSksKG4ubWF0Y2hlc1NlbGVjdG9yPUcudGVzdCh5PWgubWF0Y2hlc3x8aC53ZWJraXRNYXRjaGVzU2VsZWN0b3J8fGgubW96TWF0Y2hlc1NlbGVjdG9yfHxoLm9NYXRjaGVzU2VsZWN0b3J8fGgubXNNYXRjaGVzU2VsZWN0b3IpKSYmdWUoZnVuY3Rpb24oZSl7bi5kaXNjb25uZWN0ZWRNYXRjaD15LmNhbGwoZSxcIipcIikseS5jYWxsKGUsXCJbcyE9JyddOnhcIiksbS5wdXNoKFwiIT1cIixNKX0pLHY9di5sZW5ndGgmJm5ldyBSZWdFeHAodi5qb2luKFwifFwiKSksbT1tLmxlbmd0aCYmbmV3IFJlZ0V4cChtLmpvaW4oXCJ8XCIpKSx0PUcudGVzdChoLmNvbXBhcmVEb2N1bWVudFBvc2l0aW9uKSx4PXR8fEcudGVzdChoLmNvbnRhaW5zKT9mdW5jdGlvbihlLHQpe3ZhciBuPTk9PT1lLm5vZGVUeXBlP2UuZG9jdW1lbnRFbGVtZW50OmUsaT10JiZ0LnBhcmVudE5vZGU7cmV0dXJuIGU9PT1pfHwhKCFpfHwxIT09aS5ub2RlVHlwZXx8IShuLmNvbnRhaW5zP24uY29udGFpbnMoaSk6ZS5jb21wYXJlRG9jdW1lbnRQb3NpdGlvbiYmMTYmZS5jb21wYXJlRG9jdW1lbnRQb3NpdGlvbihpKSkpfTpmdW5jdGlvbihlLHQpe2lmKHQpd2hpbGUodD10LnBhcmVudE5vZGUpaWYodD09PWUpcmV0dXJuITA7cmV0dXJuITF9LEE9dD9mdW5jdGlvbihlLHQpe2lmKGU9PT10KXJldHVybiBmPSEwLDA7dmFyIGk9IWUuY29tcGFyZURvY3VtZW50UG9zaXRpb24tIXQuY29tcGFyZURvY3VtZW50UG9zaXRpb247cmV0dXJuIGl8fCgxJihpPShlLm93bmVyRG9jdW1lbnR8fGUpPT09KHQub3duZXJEb2N1bWVudHx8dCk/ZS5jb21wYXJlRG9jdW1lbnRQb3NpdGlvbih0KToxKXx8IW4uc29ydERldGFjaGVkJiZ0LmNvbXBhcmVEb2N1bWVudFBvc2l0aW9uKGUpPT09aT9lPT09ZHx8ZS5vd25lckRvY3VtZW50PT09dyYmeCh3LGUpPy0xOnQ9PT1kfHx0Lm93bmVyRG9jdW1lbnQ9PT13JiZ4KHcsdCk/MTpjP0YoYyxlKS1GKGMsdCk6MDo0Jmk/LTE6MSl9OmZ1bmN0aW9uKGUsdCl7aWYoZT09PXQpcmV0dXJuIGY9ITAsMDt2YXIgbixpPTAscj1lLnBhcmVudE5vZGUsbz10LnBhcmVudE5vZGUscz1bZV0sYT1bdF07aWYoIXJ8fCFvKXJldHVybiBlPT09ZD8tMTp0PT09ZD8xOnI/LTE6bz8xOmM/RihjLGUpLUYoYyx0KTowO2lmKHI9PT1vKXJldHVybiBjZShlLHQpO249ZTt3aGlsZShuPW4ucGFyZW50Tm9kZSlzLnVuc2hpZnQobik7bj10O3doaWxlKG49bi5wYXJlbnROb2RlKWEudW5zaGlmdChuKTt3aGlsZShzW2ldPT09YVtpXSlpKys7cmV0dXJuIGk/Y2Uoc1tpXSxhW2ldKTpzW2ldPT09dz8tMTphW2ldPT09dz8xOjB9LGQpOmR9LG9lLm1hdGNoZXM9ZnVuY3Rpb24oZSx0KXtyZXR1cm4gb2UoZSxudWxsLG51bGwsdCl9LG9lLm1hdGNoZXNTZWxlY3Rvcj1mdW5jdGlvbihlLHQpe2lmKChlLm93bmVyRG9jdW1lbnR8fGUpIT09ZCYmcChlKSx0PXQucmVwbGFjZSh6LFwiPSckMSddXCIpLG4ubWF0Y2hlc1NlbGVjdG9yJiZnJiYhTlt0K1wiIFwiXSYmKCFtfHwhbS50ZXN0KHQpKSYmKCF2fHwhdi50ZXN0KHQpKSl0cnl7dmFyIGk9eS5jYWxsKGUsdCk7aWYoaXx8bi5kaXNjb25uZWN0ZWRNYXRjaHx8ZS5kb2N1bWVudCYmMTEhPT1lLmRvY3VtZW50Lm5vZGVUeXBlKXJldHVybiBpfWNhdGNoKGUpe31yZXR1cm4gb2UodCxkLG51bGwsW2VdKS5sZW5ndGg+MH0sb2UuY29udGFpbnM9ZnVuY3Rpb24oZSx0KXtyZXR1cm4oZS5vd25lckRvY3VtZW50fHxlKSE9PWQmJnAoZSkseChlLHQpfSxvZS5hdHRyPWZ1bmN0aW9uKGUsdCl7KGUub3duZXJEb2N1bWVudHx8ZSkhPT1kJiZwKGUpO3ZhciByPWkuYXR0ckhhbmRsZVt0LnRvTG93ZXJDYXNlKCldLG89ciYmRC5jYWxsKGkuYXR0ckhhbmRsZSx0LnRvTG93ZXJDYXNlKCkpP3IoZSx0LCFnKTp2b2lkIDA7cmV0dXJuIHZvaWQgMCE9PW8/bzpuLmF0dHJpYnV0ZXN8fCFnP2UuZ2V0QXR0cmlidXRlKHQpOihvPWUuZ2V0QXR0cmlidXRlTm9kZSh0KSkmJm8uc3BlY2lmaWVkP28udmFsdWU6bnVsbH0sb2UuZXNjYXBlPWZ1bmN0aW9uKGUpe3JldHVybihlK1wiXCIpLnJlcGxhY2UodGUsbmUpfSxvZS5lcnJvcj1mdW5jdGlvbihlKXt0aHJvdyBuZXcgRXJyb3IoXCJTeW50YXggZXJyb3IsIHVucmVjb2duaXplZCBleHByZXNzaW9uOiBcIitlKX0sb2UudW5pcXVlU29ydD1mdW5jdGlvbihlKXt2YXIgdCxpPVtdLHI9MCxvPTA7aWYoZj0hbi5kZXRlY3REdXBsaWNhdGVzLGM9IW4uc29ydFN0YWJsZSYmZS5zbGljZSgwKSxlLnNvcnQoQSksZil7d2hpbGUodD1lW28rK10pdD09PWVbb10mJihyPWkucHVzaChvKSk7d2hpbGUoci0tKWUuc3BsaWNlKGlbcl0sMSl9cmV0dXJuIGM9bnVsbCxlfSxyPW9lLmdldFRleHQ9ZnVuY3Rpb24oZSl7dmFyIHQsbj1cIlwiLGk9MCxvPWUubm9kZVR5cGU7aWYobyl7aWYoMT09PW98fDk9PT1vfHwxMT09PW8pe2lmKFwic3RyaW5nXCI9PXR5cGVvZiBlLnRleHRDb250ZW50KXJldHVybiBlLnRleHRDb250ZW50O2ZvcihlPWUuZmlyc3RDaGlsZDtlO2U9ZS5uZXh0U2libGluZyluKz1yKGUpfWVsc2UgaWYoMz09PW98fDQ9PT1vKXJldHVybiBlLm5vZGVWYWx1ZX1lbHNlIHdoaWxlKHQ9ZVtpKytdKW4rPXIodCk7cmV0dXJuIG59LChpPW9lLnNlbGVjdG9ycz17Y2FjaGVMZW5ndGg6NTAsY3JlYXRlUHNldWRvOmFlLG1hdGNoOlYsYXR0ckhhbmRsZTp7fSxmaW5kOnt9LHJlbGF0aXZlOntcIj5cIjp7ZGlyOlwicGFyZW50Tm9kZVwiLGZpcnN0OiEwfSxcIiBcIjp7ZGlyOlwicGFyZW50Tm9kZVwifSxcIitcIjp7ZGlyOlwicHJldmlvdXNTaWJsaW5nXCIsZmlyc3Q6ITB9LFwiflwiOntkaXI6XCJwcmV2aW91c1NpYmxpbmdcIn19LHByZUZpbHRlcjp7QVRUUjpmdW5jdGlvbihlKXtyZXR1cm4gZVsxXT1lWzFdLnJlcGxhY2UoWixlZSksZVszXT0oZVszXXx8ZVs0XXx8ZVs1XXx8XCJcIikucmVwbGFjZShaLGVlKSxcIn49XCI9PT1lWzJdJiYoZVszXT1cIiBcIitlWzNdK1wiIFwiKSxlLnNsaWNlKDAsNCl9LENISUxEOmZ1bmN0aW9uKGUpe3JldHVybiBlWzFdPWVbMV0udG9Mb3dlckNhc2UoKSxcIm50aFwiPT09ZVsxXS5zbGljZSgwLDMpPyhlWzNdfHxvZS5lcnJvcihlWzBdKSxlWzRdPSsoZVs0XT9lWzVdKyhlWzZdfHwxKToyKihcImV2ZW5cIj09PWVbM118fFwib2RkXCI9PT1lWzNdKSksZVs1XT0rKGVbN10rZVs4XXx8XCJvZGRcIj09PWVbM10pKTplWzNdJiZvZS5lcnJvcihlWzBdKSxlfSxQU0VVRE86ZnVuY3Rpb24oZSl7dmFyIHQsbj0hZVs2XSYmZVsyXTtyZXR1cm4gVi5DSElMRC50ZXN0KGVbMF0pP251bGw6KGVbM10/ZVsyXT1lWzRdfHxlWzVdfHxcIlwiOm4mJlUudGVzdChuKSYmKHQ9cyhuLCEwKSkmJih0PW4uaW5kZXhPZihcIilcIixuLmxlbmd0aC10KS1uLmxlbmd0aCkmJihlWzBdPWVbMF0uc2xpY2UoMCx0KSxlWzJdPW4uc2xpY2UoMCx0KSksZS5zbGljZSgwLDMpKX19LGZpbHRlcjp7VEFHOmZ1bmN0aW9uKGUpe3ZhciB0PWUucmVwbGFjZShaLGVlKS50b0xvd2VyQ2FzZSgpO3JldHVyblwiKlwiPT09ZT9mdW5jdGlvbigpe3JldHVybiEwfTpmdW5jdGlvbihlKXtyZXR1cm4gZS5ub2RlTmFtZSYmZS5ub2RlTmFtZS50b0xvd2VyQ2FzZSgpPT09dH19LENMQVNTOmZ1bmN0aW9uKGUpe3ZhciB0PWtbZStcIiBcIl07cmV0dXJuIHR8fCh0PW5ldyBSZWdFeHAoXCIoXnxcIitQK1wiKVwiK2UrXCIoXCIrUCtcInwkKVwiKSkmJmsoZSxmdW5jdGlvbihlKXtyZXR1cm4gdC50ZXN0KFwic3RyaW5nXCI9PXR5cGVvZiBlLmNsYXNzTmFtZSYmZS5jbGFzc05hbWV8fFwidW5kZWZpbmVkXCIhPXR5cGVvZiBlLmdldEF0dHJpYnV0ZSYmZS5nZXRBdHRyaWJ1dGUoXCJjbGFzc1wiKXx8XCJcIil9KX0sQVRUUjpmdW5jdGlvbihlLHQsbil7cmV0dXJuIGZ1bmN0aW9uKGkpe3ZhciByPW9lLmF0dHIoaSxlKTtyZXR1cm4gbnVsbD09cj9cIiE9XCI9PT10OiF0fHwocis9XCJcIixcIj1cIj09PXQ/cj09PW46XCIhPVwiPT09dD9yIT09bjpcIl49XCI9PT10P24mJjA9PT1yLmluZGV4T2Yobik6XCIqPVwiPT09dD9uJiZyLmluZGV4T2Yobik+LTE6XCIkPVwiPT09dD9uJiZyLnNsaWNlKC1uLmxlbmd0aCk9PT1uOlwifj1cIj09PXQ/KFwiIFwiK3IucmVwbGFjZShXLFwiIFwiKStcIiBcIikuaW5kZXhPZihuKT4tMTpcInw9XCI9PT10JiYocj09PW58fHIuc2xpY2UoMCxuLmxlbmd0aCsxKT09PW4rXCItXCIpKX19LENISUxEOmZ1bmN0aW9uKGUsdCxuLGkscil7dmFyIG89XCJudGhcIiE9PWUuc2xpY2UoMCwzKSxzPVwibGFzdFwiIT09ZS5zbGljZSgtNCksYT1cIm9mLXR5cGVcIj09PXQ7cmV0dXJuIDE9PT1pJiYwPT09cj9mdW5jdGlvbihlKXtyZXR1cm4hIWUucGFyZW50Tm9kZX06ZnVuY3Rpb24odCxuLHUpe3ZhciBsLGMsZixwLGQsaCxnPW8hPT1zP1wibmV4dFNpYmxpbmdcIjpcInByZXZpb3VzU2libGluZ1wiLHY9dC5wYXJlbnROb2RlLG09YSYmdC5ub2RlTmFtZS50b0xvd2VyQ2FzZSgpLHk9IXUmJiFhLHg9ITE7aWYodil7aWYobyl7d2hpbGUoZyl7cD10O3doaWxlKHA9cFtnXSlpZihhP3Aubm9kZU5hbWUudG9Mb3dlckNhc2UoKT09PW06MT09PXAubm9kZVR5cGUpcmV0dXJuITE7aD1nPVwib25seVwiPT09ZSYmIWgmJlwibmV4dFNpYmxpbmdcIn1yZXR1cm4hMH1pZihoPVtzP3YuZmlyc3RDaGlsZDp2Lmxhc3RDaGlsZF0scyYmeSl7eD0oZD0obD0oYz0oZj0ocD12KVtiXXx8KHBbYl09e30pKVtwLnVuaXF1ZUlEXXx8KGZbcC51bmlxdWVJRF09e30pKVtlXXx8W10pWzBdPT09QyYmbFsxXSkmJmxbMl0scD1kJiZ2LmNoaWxkTm9kZXNbZF07d2hpbGUocD0rK2QmJnAmJnBbZ118fCh4PWQ9MCl8fGgucG9wKCkpaWYoMT09PXAubm9kZVR5cGUmJisreCYmcD09PXQpe2NbZV09W0MsZCx4XTticmVha319ZWxzZSBpZih5JiYoeD1kPShsPShjPShmPShwPXQpW2JdfHwocFtiXT17fSkpW3AudW5pcXVlSURdfHwoZltwLnVuaXF1ZUlEXT17fSkpW2VdfHxbXSlbMF09PT1DJiZsWzFdKSwhMT09PXgpd2hpbGUocD0rK2QmJnAmJnBbZ118fCh4PWQ9MCl8fGgucG9wKCkpaWYoKGE/cC5ub2RlTmFtZS50b0xvd2VyQ2FzZSgpPT09bToxPT09cC5ub2RlVHlwZSkmJisreCYmKHkmJigoYz0oZj1wW2JdfHwocFtiXT17fSkpW3AudW5pcXVlSURdfHwoZltwLnVuaXF1ZUlEXT17fSkpW2VdPVtDLHhdKSxwPT09dCkpYnJlYWs7cmV0dXJuKHgtPXIpPT09aXx8eCVpPT0wJiZ4L2k+PTB9fX0sUFNFVURPOmZ1bmN0aW9uKGUsdCl7dmFyIG4scj1pLnBzZXVkb3NbZV18fGkuc2V0RmlsdGVyc1tlLnRvTG93ZXJDYXNlKCldfHxvZS5lcnJvcihcInVuc3VwcG9ydGVkIHBzZXVkbzogXCIrZSk7cmV0dXJuIHJbYl0/cih0KTpyLmxlbmd0aD4xPyhuPVtlLGUsXCJcIix0XSxpLnNldEZpbHRlcnMuaGFzT3duUHJvcGVydHkoZS50b0xvd2VyQ2FzZSgpKT9hZShmdW5jdGlvbihlLG4pe3ZhciBpLG89cihlLHQpLHM9by5sZW5ndGg7d2hpbGUocy0tKWVbaT1GKGUsb1tzXSldPSEobltpXT1vW3NdKX0pOmZ1bmN0aW9uKGUpe3JldHVybiByKGUsMCxuKX0pOnJ9fSxwc2V1ZG9zOntub3Q6YWUoZnVuY3Rpb24oZSl7dmFyIHQ9W10sbj1bXSxpPWEoZS5yZXBsYWNlKEIsXCIkMVwiKSk7cmV0dXJuIGlbYl0/YWUoZnVuY3Rpb24oZSx0LG4scil7dmFyIG8scz1pKGUsbnVsbCxyLFtdKSxhPWUubGVuZ3RoO3doaWxlKGEtLSkobz1zW2FdKSYmKGVbYV09ISh0W2FdPW8pKX0pOmZ1bmN0aW9uKGUscixvKXtyZXR1cm4gdFswXT1lLGkodCxudWxsLG8sbiksdFswXT1udWxsLCFuLnBvcCgpfX0pLGhhczphZShmdW5jdGlvbihlKXtyZXR1cm4gZnVuY3Rpb24odCl7cmV0dXJuIG9lKGUsdCkubGVuZ3RoPjB9fSksY29udGFpbnM6YWUoZnVuY3Rpb24oZSl7cmV0dXJuIGU9ZS5yZXBsYWNlKFosZWUpLGZ1bmN0aW9uKHQpe3JldHVybih0LnRleHRDb250ZW50fHx0LmlubmVyVGV4dHx8cih0KSkuaW5kZXhPZihlKT4tMX19KSxsYW5nOmFlKGZ1bmN0aW9uKGUpe3JldHVybiBYLnRlc3QoZXx8XCJcIil8fG9lLmVycm9yKFwidW5zdXBwb3J0ZWQgbGFuZzogXCIrZSksZT1lLnJlcGxhY2UoWixlZSkudG9Mb3dlckNhc2UoKSxmdW5jdGlvbih0KXt2YXIgbjtkb3tpZihuPWc/dC5sYW5nOnQuZ2V0QXR0cmlidXRlKFwieG1sOmxhbmdcIil8fHQuZ2V0QXR0cmlidXRlKFwibGFuZ1wiKSlyZXR1cm4obj1uLnRvTG93ZXJDYXNlKCkpPT09ZXx8MD09PW4uaW5kZXhPZihlK1wiLVwiKX13aGlsZSgodD10LnBhcmVudE5vZGUpJiYxPT09dC5ub2RlVHlwZSk7cmV0dXJuITF9fSksdGFyZ2V0OmZ1bmN0aW9uKHQpe3ZhciBuPWUubG9jYXRpb24mJmUubG9jYXRpb24uaGFzaDtyZXR1cm4gbiYmbi5zbGljZSgxKT09PXQuaWR9LHJvb3Q6ZnVuY3Rpb24oZSl7cmV0dXJuIGU9PT1ofSxmb2N1czpmdW5jdGlvbihlKXtyZXR1cm4gZT09PWQuYWN0aXZlRWxlbWVudCYmKCFkLmhhc0ZvY3VzfHxkLmhhc0ZvY3VzKCkpJiYhIShlLnR5cGV8fGUuaHJlZnx8fmUudGFiSW5kZXgpfSxlbmFibGVkOmRlKCExKSxkaXNhYmxlZDpkZSghMCksY2hlY2tlZDpmdW5jdGlvbihlKXt2YXIgdD1lLm5vZGVOYW1lLnRvTG93ZXJDYXNlKCk7cmV0dXJuXCJpbnB1dFwiPT09dCYmISFlLmNoZWNrZWR8fFwib3B0aW9uXCI9PT10JiYhIWUuc2VsZWN0ZWR9LHNlbGVjdGVkOmZ1bmN0aW9uKGUpe3JldHVybiBlLnBhcmVudE5vZGUmJmUucGFyZW50Tm9kZS5zZWxlY3RlZEluZGV4LCEwPT09ZS5zZWxlY3RlZH0sZW1wdHk6ZnVuY3Rpb24oZSl7Zm9yKGU9ZS5maXJzdENoaWxkO2U7ZT1lLm5leHRTaWJsaW5nKWlmKGUubm9kZVR5cGU8NilyZXR1cm4hMTtyZXR1cm4hMH0scGFyZW50OmZ1bmN0aW9uKGUpe3JldHVybiFpLnBzZXVkb3MuZW1wdHkoZSl9LGhlYWRlcjpmdW5jdGlvbihlKXtyZXR1cm4gUS50ZXN0KGUubm9kZU5hbWUpfSxpbnB1dDpmdW5jdGlvbihlKXtyZXR1cm4gWS50ZXN0KGUubm9kZU5hbWUpfSxidXR0b246ZnVuY3Rpb24oZSl7dmFyIHQ9ZS5ub2RlTmFtZS50b0xvd2VyQ2FzZSgpO3JldHVyblwiaW5wdXRcIj09PXQmJlwiYnV0dG9uXCI9PT1lLnR5cGV8fFwiYnV0dG9uXCI9PT10fSx0ZXh0OmZ1bmN0aW9uKGUpe3ZhciB0O3JldHVyblwiaW5wdXRcIj09PWUubm9kZU5hbWUudG9Mb3dlckNhc2UoKSYmXCJ0ZXh0XCI9PT1lLnR5cGUmJihudWxsPT0odD1lLmdldEF0dHJpYnV0ZShcInR5cGVcIikpfHxcInRleHRcIj09PXQudG9Mb3dlckNhc2UoKSl9LGZpcnN0OmhlKGZ1bmN0aW9uKCl7cmV0dXJuWzBdfSksbGFzdDpoZShmdW5jdGlvbihlLHQpe3JldHVyblt0LTFdfSksZXE6aGUoZnVuY3Rpb24oZSx0LG4pe3JldHVybltuPDA/bit0Om5dfSksZXZlbjpoZShmdW5jdGlvbihlLHQpe2Zvcih2YXIgbj0wO248dDtuKz0yKWUucHVzaChuKTtyZXR1cm4gZX0pLG9kZDpoZShmdW5jdGlvbihlLHQpe2Zvcih2YXIgbj0xO248dDtuKz0yKWUucHVzaChuKTtyZXR1cm4gZX0pLGx0OmhlKGZ1bmN0aW9uKGUsdCxuKXtmb3IodmFyIGk9bjwwP24rdDpuOy0taT49MDspZS5wdXNoKGkpO3JldHVybiBlfSksZ3Q6aGUoZnVuY3Rpb24oZSx0LG4pe2Zvcih2YXIgaT1uPDA/bit0Om47KytpPHQ7KWUucHVzaChpKTtyZXR1cm4gZX0pfX0pLnBzZXVkb3MubnRoPWkucHNldWRvcy5lcTtmb3IodCBpbntyYWRpbzohMCxjaGVja2JveDohMCxmaWxlOiEwLHBhc3N3b3JkOiEwLGltYWdlOiEwfSlpLnBzZXVkb3NbdF09ZmUodCk7Zm9yKHQgaW57c3VibWl0OiEwLHJlc2V0OiEwfSlpLnBzZXVkb3NbdF09cGUodCk7ZnVuY3Rpb24gdmUoKXt9dmUucHJvdG90eXBlPWkuZmlsdGVycz1pLnBzZXVkb3MsaS5zZXRGaWx0ZXJzPW5ldyB2ZSxzPW9lLnRva2VuaXplPWZ1bmN0aW9uKGUsdCl7dmFyIG4scixvLHMsYSx1LGwsYz1FW2UrXCIgXCJdO2lmKGMpcmV0dXJuIHQ/MDpjLnNsaWNlKDApO2E9ZSx1PVtdLGw9aS5wcmVGaWx0ZXI7d2hpbGUoYSl7biYmIShyPSQuZXhlYyhhKSl8fChyJiYoYT1hLnNsaWNlKHJbMF0ubGVuZ3RoKXx8YSksdS5wdXNoKG89W10pKSxuPSExLChyPV8uZXhlYyhhKSkmJihuPXIuc2hpZnQoKSxvLnB1c2goe3ZhbHVlOm4sdHlwZTpyWzBdLnJlcGxhY2UoQixcIiBcIil9KSxhPWEuc2xpY2Uobi5sZW5ndGgpKTtmb3IocyBpbiBpLmZpbHRlcikhKHI9VltzXS5leGVjKGEpKXx8bFtzXSYmIShyPWxbc10ocikpfHwobj1yLnNoaWZ0KCksby5wdXNoKHt2YWx1ZTpuLHR5cGU6cyxtYXRjaGVzOnJ9KSxhPWEuc2xpY2Uobi5sZW5ndGgpKTtpZighbilicmVha31yZXR1cm4gdD9hLmxlbmd0aDphP29lLmVycm9yKGUpOkUoZSx1KS5zbGljZSgwKX07ZnVuY3Rpb24gbWUoZSl7Zm9yKHZhciB0PTAsbj1lLmxlbmd0aCxpPVwiXCI7dDxuO3QrKylpKz1lW3RdLnZhbHVlO3JldHVybiBpfWZ1bmN0aW9uIHllKGUsdCxuKXt2YXIgaT10LmRpcixyPXQubmV4dCxvPXJ8fGkscz1uJiZcInBhcmVudE5vZGVcIj09PW8sYT1UKys7cmV0dXJuIHQuZmlyc3Q/ZnVuY3Rpb24odCxuLHIpe3doaWxlKHQ9dFtpXSlpZigxPT09dC5ub2RlVHlwZXx8cylyZXR1cm4gZSh0LG4scik7cmV0dXJuITF9OmZ1bmN0aW9uKHQsbix1KXt2YXIgbCxjLGYscD1bQyxhXTtpZih1KXt3aGlsZSh0PXRbaV0paWYoKDE9PT10Lm5vZGVUeXBlfHxzKSYmZSh0LG4sdSkpcmV0dXJuITB9ZWxzZSB3aGlsZSh0PXRbaV0paWYoMT09PXQubm9kZVR5cGV8fHMpaWYoZj10W2JdfHwodFtiXT17fSksYz1mW3QudW5pcXVlSURdfHwoZlt0LnVuaXF1ZUlEXT17fSksciYmcj09PXQubm9kZU5hbWUudG9Mb3dlckNhc2UoKSl0PXRbaV18fHQ7ZWxzZXtpZigobD1jW29dKSYmbFswXT09PUMmJmxbMV09PT1hKXJldHVybiBwWzJdPWxbMl07aWYoY1tvXT1wLHBbMl09ZSh0LG4sdSkpcmV0dXJuITB9cmV0dXJuITF9fWZ1bmN0aW9uIHhlKGUpe3JldHVybiBlLmxlbmd0aD4xP2Z1bmN0aW9uKHQsbixpKXt2YXIgcj1lLmxlbmd0aDt3aGlsZShyLS0paWYoIWVbcl0odCxuLGkpKXJldHVybiExO3JldHVybiEwfTplWzBdfWZ1bmN0aW9uIGJlKGUsdCxuKXtmb3IodmFyIGk9MCxyPXQubGVuZ3RoO2k8cjtpKyspb2UoZSx0W2ldLG4pO3JldHVybiBufWZ1bmN0aW9uIHdlKGUsdCxuLGkscil7Zm9yKHZhciBvLHM9W10sYT0wLHU9ZS5sZW5ndGgsbD1udWxsIT10O2E8dTthKyspKG89ZVthXSkmJihuJiYhbihvLGkscil8fChzLnB1c2gobyksbCYmdC5wdXNoKGEpKSk7cmV0dXJuIHN9ZnVuY3Rpb24gQ2UoZSx0LG4saSxyLG8pe3JldHVybiBpJiYhaVtiXSYmKGk9Q2UoaSkpLHImJiFyW2JdJiYocj1DZShyLG8pKSxhZShmdW5jdGlvbihvLHMsYSx1KXt2YXIgbCxjLGYscD1bXSxkPVtdLGg9cy5sZW5ndGgsZz1vfHxiZSh0fHxcIipcIixhLm5vZGVUeXBlP1thXTphLFtdKSx2PSFlfHwhbyYmdD9nOndlKGcscCxlLGEsdSksbT1uP3J8fChvP2U6aHx8aSk/W106czp2O2lmKG4mJm4odixtLGEsdSksaSl7bD13ZShtLGQpLGkobCxbXSxhLHUpLGM9bC5sZW5ndGg7d2hpbGUoYy0tKShmPWxbY10pJiYobVtkW2NdXT0hKHZbZFtjXV09ZikpfWlmKG8pe2lmKHJ8fGUpe2lmKHIpe2w9W10sYz1tLmxlbmd0aDt3aGlsZShjLS0pKGY9bVtjXSkmJmwucHVzaCh2W2NdPWYpO3IobnVsbCxtPVtdLGwsdSl9Yz1tLmxlbmd0aDt3aGlsZShjLS0pKGY9bVtjXSkmJihsPXI/RihvLGYpOnBbY10pPi0xJiYob1tsXT0hKHNbbF09ZikpfX1lbHNlIG09d2UobT09PXM/bS5zcGxpY2UoaCxtLmxlbmd0aCk6bSkscj9yKG51bGwscyxtLHUpOmouYXBwbHkocyxtKX0pfWZ1bmN0aW9uIFRlKGUpe2Zvcih2YXIgdCxuLHIsbz1lLmxlbmd0aCxzPWkucmVsYXRpdmVbZVswXS50eXBlXSxhPXN8fGkucmVsYXRpdmVbXCIgXCJdLHU9cz8xOjAsYz15ZShmdW5jdGlvbihlKXtyZXR1cm4gZT09PXR9LGEsITApLGY9eWUoZnVuY3Rpb24oZSl7cmV0dXJuIEYodCxlKT4tMX0sYSwhMCkscD1bZnVuY3Rpb24oZSxuLGkpe3ZhciByPSFzJiYoaXx8biE9PWwpfHwoKHQ9bikubm9kZVR5cGU/YyhlLG4saSk6ZihlLG4saSkpO3JldHVybiB0PW51bGwscn1dO3U8bzt1KyspaWYobj1pLnJlbGF0aXZlW2VbdV0udHlwZV0pcD1beWUoeGUocCksbildO2Vsc2V7aWYoKG49aS5maWx0ZXJbZVt1XS50eXBlXS5hcHBseShudWxsLGVbdV0ubWF0Y2hlcykpW2JdKXtmb3Iocj0rK3U7cjxvO3IrKylpZihpLnJlbGF0aXZlW2Vbcl0udHlwZV0pYnJlYWs7cmV0dXJuIENlKHU+MSYmeGUocCksdT4xJiZtZShlLnNsaWNlKDAsdS0xKS5jb25jYXQoe3ZhbHVlOlwiIFwiPT09ZVt1LTJdLnR5cGU/XCIqXCI6XCJcIn0pKS5yZXBsYWNlKEIsXCIkMVwiKSxuLHU8ciYmVGUoZS5zbGljZSh1LHIpKSxyPG8mJlRlKGU9ZS5zbGljZShyKSkscjxvJiZtZShlKSl9cC5wdXNoKG4pfXJldHVybiB4ZShwKX1mdW5jdGlvbiBrZShlLHQpe3ZhciBuPXQubGVuZ3RoPjAscj1lLmxlbmd0aD4wLG89ZnVuY3Rpb24obyxzLGEsdSxjKXt2YXIgZixoLHYsbT0wLHk9XCIwXCIseD1vJiZbXSxiPVtdLHc9bCxUPW98fHImJmkuZmluZC5UQUcoXCIqXCIsYyksaz1DKz1udWxsPT13PzE6TWF0aC5yYW5kb20oKXx8LjEsRT1ULmxlbmd0aDtmb3IoYyYmKGw9cz09PWR8fHN8fGMpO3khPT1FJiZudWxsIT0oZj1UW3ldKTt5Kyspe2lmKHImJmYpe2g9MCxzfHxmLm93bmVyRG9jdW1lbnQ9PT1kfHwocChmKSxhPSFnKTt3aGlsZSh2PWVbaCsrXSlpZih2KGYsc3x8ZCxhKSl7dS5wdXNoKGYpO2JyZWFrfWMmJihDPWspfW4mJigoZj0hdiYmZikmJm0tLSxvJiZ4LnB1c2goZikpfWlmKG0rPXksbiYmeSE9PW0pe2g9MDt3aGlsZSh2PXRbaCsrXSl2KHgsYixzLGEpO2lmKG8pe2lmKG0+MCl3aGlsZSh5LS0peFt5XXx8Ylt5XXx8KGJbeV09cS5jYWxsKHUpKTtiPXdlKGIpfWouYXBwbHkodSxiKSxjJiYhbyYmYi5sZW5ndGg+MCYmbSt0Lmxlbmd0aD4xJiZvZS51bmlxdWVTb3J0KHUpfXJldHVybiBjJiYoQz1rLGw9dykseH07cmV0dXJuIG4/YWUobyk6b31yZXR1cm4gYT1vZS5jb21waWxlPWZ1bmN0aW9uKGUsdCl7dmFyIG4saT1bXSxyPVtdLG89TltlK1wiIFwiXTtpZighbyl7dHx8KHQ9cyhlKSksbj10Lmxlbmd0aDt3aGlsZShuLS0pKG89VGUodFtuXSkpW2JdP2kucHVzaChvKTpyLnB1c2gobyk7KG89TihlLGtlKHIsaSkpKS5zZWxlY3Rvcj1lfXJldHVybiBvfSx1PW9lLnNlbGVjdD1mdW5jdGlvbihlLHQsbixyKXt2YXIgbyx1LGwsYyxmLHA9XCJmdW5jdGlvblwiPT10eXBlb2YgZSYmZSxkPSFyJiZzKGU9cC5zZWxlY3Rvcnx8ZSk7aWYobj1ufHxbXSwxPT09ZC5sZW5ndGgpe2lmKCh1PWRbMF09ZFswXS5zbGljZSgwKSkubGVuZ3RoPjImJlwiSURcIj09PShsPXVbMF0pLnR5cGUmJjk9PT10Lm5vZGVUeXBlJiZnJiZpLnJlbGF0aXZlW3VbMV0udHlwZV0pe2lmKCEodD0oaS5maW5kLklEKGwubWF0Y2hlc1swXS5yZXBsYWNlKFosZWUpLHQpfHxbXSlbMF0pKXJldHVybiBuO3AmJih0PXQucGFyZW50Tm9kZSksZT1lLnNsaWNlKHUuc2hpZnQoKS52YWx1ZS5sZW5ndGgpfW89Vi5uZWVkc0NvbnRleHQudGVzdChlKT8wOnUubGVuZ3RoO3doaWxlKG8tLSl7aWYobD11W29dLGkucmVsYXRpdmVbYz1sLnR5cGVdKWJyZWFrO2lmKChmPWkuZmluZFtjXSkmJihyPWYobC5tYXRjaGVzWzBdLnJlcGxhY2UoWixlZSksSi50ZXN0KHVbMF0udHlwZSkmJmdlKHQucGFyZW50Tm9kZSl8fHQpKSl7aWYodS5zcGxpY2UobywxKSwhKGU9ci5sZW5ndGgmJm1lKHUpKSlyZXR1cm4gai5hcHBseShuLHIpLG47YnJlYWt9fX1yZXR1cm4ocHx8YShlLGQpKShyLHQsIWcsbiwhdHx8Si50ZXN0KGUpJiZnZSh0LnBhcmVudE5vZGUpfHx0KSxufSxuLnNvcnRTdGFibGU9Yi5zcGxpdChcIlwiKS5zb3J0KEEpLmpvaW4oXCJcIik9PT1iLG4uZGV0ZWN0RHVwbGljYXRlcz0hIWYscCgpLG4uc29ydERldGFjaGVkPXVlKGZ1bmN0aW9uKGUpe3JldHVybiAxJmUuY29tcGFyZURvY3VtZW50UG9zaXRpb24oZC5jcmVhdGVFbGVtZW50KFwiZmllbGRzZXRcIikpfSksdWUoZnVuY3Rpb24oZSl7cmV0dXJuIGUuaW5uZXJIVE1MPVwiPGEgaHJlZj0nIyc+PC9hPlwiLFwiI1wiPT09ZS5maXJzdENoaWxkLmdldEF0dHJpYnV0ZShcImhyZWZcIil9KXx8bGUoXCJ0eXBlfGhyZWZ8aGVpZ2h0fHdpZHRoXCIsZnVuY3Rpb24oZSx0LG4pe2lmKCFuKXJldHVybiBlLmdldEF0dHJpYnV0ZSh0LFwidHlwZVwiPT09dC50b0xvd2VyQ2FzZSgpPzE6Mil9KSxuLmF0dHJpYnV0ZXMmJnVlKGZ1bmN0aW9uKGUpe3JldHVybiBlLmlubmVySFRNTD1cIjxpbnB1dC8+XCIsZS5maXJzdENoaWxkLnNldEF0dHJpYnV0ZShcInZhbHVlXCIsXCJcIiksXCJcIj09PWUuZmlyc3RDaGlsZC5nZXRBdHRyaWJ1dGUoXCJ2YWx1ZVwiKX0pfHxsZShcInZhbHVlXCIsZnVuY3Rpb24oZSx0LG4pe2lmKCFuJiZcImlucHV0XCI9PT1lLm5vZGVOYW1lLnRvTG93ZXJDYXNlKCkpcmV0dXJuIGUuZGVmYXVsdFZhbHVlfSksdWUoZnVuY3Rpb24oZSl7cmV0dXJuIG51bGw9PWUuZ2V0QXR0cmlidXRlKFwiZGlzYWJsZWRcIil9KXx8bGUoTyxmdW5jdGlvbihlLHQsbil7dmFyIGk7aWYoIW4pcmV0dXJuITA9PT1lW3RdP3QudG9Mb3dlckNhc2UoKTooaT1lLmdldEF0dHJpYnV0ZU5vZGUodCkpJiZpLnNwZWNpZmllZD9pLnZhbHVlOm51bGx9KSxvZX0oZSk7eS5maW5kPWsseS5leHByPWsuc2VsZWN0b3JzLHkuZXhwcltcIjpcIl09eS5leHByLnBzZXVkb3MseS51bmlxdWVTb3J0PXkudW5pcXVlPWsudW5pcXVlU29ydCx5LnRleHQ9ay5nZXRUZXh0LHkuaXNYTUxEb2M9ay5pc1hNTCx5LmNvbnRhaW5zPWsuY29udGFpbnMseS5lc2NhcGVTZWxlY3Rvcj1rLmVzY2FwZTt2YXIgRT1mdW5jdGlvbihlLHQsbil7dmFyIGk9W10scj12b2lkIDAhPT1uO3doaWxlKChlPWVbdF0pJiY5IT09ZS5ub2RlVHlwZSlpZigxPT09ZS5ub2RlVHlwZSl7aWYociYmeShlKS5pcyhuKSlicmVhaztpLnB1c2goZSl9cmV0dXJuIGl9LE49ZnVuY3Rpb24oZSx0KXtmb3IodmFyIG49W107ZTtlPWUubmV4dFNpYmxpbmcpMT09PWUubm9kZVR5cGUmJmUhPT10JiZuLnB1c2goZSk7cmV0dXJuIG59LEE9eS5leHByLm1hdGNoLm5lZWRzQ29udGV4dDtmdW5jdGlvbiBEKGUsdCl7cmV0dXJuIGUubm9kZU5hbWUmJmUubm9kZU5hbWUudG9Mb3dlckNhc2UoKT09PXQudG9Mb3dlckNhc2UoKX12YXIgUz0vXjwoW2Etel1bXlxcL1xcMD46XFx4MjBcXHRcXHJcXG5cXGZdKilbXFx4MjBcXHRcXHJcXG5cXGZdKlxcLz8+KD86PFxcL1xcMT58KSQvaSxxPS9eLlteOiNcXFtcXC4sXSokLztmdW5jdGlvbiBMKGUsdCxuKXtyZXR1cm4geS5pc0Z1bmN0aW9uKHQpP3kuZ3JlcChlLGZ1bmN0aW9uKGUsaSl7cmV0dXJuISF0LmNhbGwoZSxpLGUpIT09bn0pOnQubm9kZVR5cGU/eS5ncmVwKGUsZnVuY3Rpb24oZSl7cmV0dXJuIGU9PT10IT09bn0pOlwic3RyaW5nXCIhPXR5cGVvZiB0P3kuZ3JlcChlLGZ1bmN0aW9uKGUpe3JldHVybiB1LmNhbGwodCxlKT4tMSE9PW59KTpxLnRlc3QodCk/eS5maWx0ZXIodCxlLG4pOih0PXkuZmlsdGVyKHQsZSkseS5ncmVwKGUsZnVuY3Rpb24oZSl7cmV0dXJuIHUuY2FsbCh0LGUpPi0xIT09biYmMT09PWUubm9kZVR5cGV9KSl9eS5maWx0ZXI9ZnVuY3Rpb24oZSx0LG4pe3ZhciBpPXRbMF07cmV0dXJuIG4mJihlPVwiOm5vdChcIitlK1wiKVwiKSwxPT09dC5sZW5ndGgmJjE9PT1pLm5vZGVUeXBlP3kuZmluZC5tYXRjaGVzU2VsZWN0b3IoaSxlKT9baV06W106eS5maW5kLm1hdGNoZXMoZSx5LmdyZXAodCxmdW5jdGlvbihlKXtyZXR1cm4gMT09PWUubm9kZVR5cGV9KSl9LHkuZm4uZXh0ZW5kKHtmaW5kOmZ1bmN0aW9uKGUpe3ZhciB0LG4saT10aGlzLmxlbmd0aCxyPXRoaXM7aWYoXCJzdHJpbmdcIiE9dHlwZW9mIGUpcmV0dXJuIHRoaXMucHVzaFN0YWNrKHkoZSkuZmlsdGVyKGZ1bmN0aW9uKCl7Zm9yKHQ9MDt0PGk7dCsrKWlmKHkuY29udGFpbnMoclt0XSx0aGlzKSlyZXR1cm4hMH0pKTtmb3Iobj10aGlzLnB1c2hTdGFjayhbXSksdD0wO3Q8aTt0KyspeS5maW5kKGUsclt0XSxuKTtyZXR1cm4gaT4xP3kudW5pcXVlU29ydChuKTpufSxmaWx0ZXI6ZnVuY3Rpb24oZSl7cmV0dXJuIHRoaXMucHVzaFN0YWNrKEwodGhpcyxlfHxbXSwhMSkpfSxub3Q6ZnVuY3Rpb24oZSl7cmV0dXJuIHRoaXMucHVzaFN0YWNrKEwodGhpcyxlfHxbXSwhMCkpfSxpczpmdW5jdGlvbihlKXtyZXR1cm4hIUwodGhpcyxcInN0cmluZ1wiPT10eXBlb2YgZSYmQS50ZXN0KGUpP3koZSk6ZXx8W10sITEpLmxlbmd0aH19KTt2YXIgaixIPS9eKD86XFxzKig8W1xcd1xcV10rPilbXj5dKnwjKFtcXHctXSspKSQvOyh5LmZuLmluaXQ9ZnVuY3Rpb24oZSx0LG4pe3ZhciByLG87aWYoIWUpcmV0dXJuIHRoaXM7aWYobj1ufHxqLFwic3RyaW5nXCI9PXR5cGVvZiBlKXtpZighKHI9XCI8XCI9PT1lWzBdJiZcIj5cIj09PWVbZS5sZW5ndGgtMV0mJmUubGVuZ3RoPj0zP1tudWxsLGUsbnVsbF06SC5leGVjKGUpKXx8IXJbMV0mJnQpcmV0dXJuIXR8fHQuanF1ZXJ5Pyh0fHxuKS5maW5kKGUpOnRoaXMuY29uc3RydWN0b3IodCkuZmluZChlKTtpZihyWzFdKXtpZih0PXQgaW5zdGFuY2VvZiB5P3RbMF06dCx5Lm1lcmdlKHRoaXMseS5wYXJzZUhUTUwoclsxXSx0JiZ0Lm5vZGVUeXBlP3Qub3duZXJEb2N1bWVudHx8dDppLCEwKSksUy50ZXN0KHJbMV0pJiZ5LmlzUGxhaW5PYmplY3QodCkpZm9yKHIgaW4gdCl5LmlzRnVuY3Rpb24odGhpc1tyXSk/dGhpc1tyXSh0W3JdKTp0aGlzLmF0dHIocix0W3JdKTtyZXR1cm4gdGhpc31yZXR1cm4obz1pLmdldEVsZW1lbnRCeUlkKHJbMl0pKSYmKHRoaXNbMF09byx0aGlzLmxlbmd0aD0xKSx0aGlzfXJldHVybiBlLm5vZGVUeXBlPyh0aGlzWzBdPWUsdGhpcy5sZW5ndGg9MSx0aGlzKTp5LmlzRnVuY3Rpb24oZSk/dm9pZCAwIT09bi5yZWFkeT9uLnJlYWR5KGUpOmUoeSk6eS5tYWtlQXJyYXkoZSx0aGlzKX0pLnByb3RvdHlwZT15LmZuLGo9eShpKTt2YXIgRj0vXig/OnBhcmVudHN8cHJldig/OlVudGlsfEFsbCkpLyxPPXtjaGlsZHJlbjohMCxjb250ZW50czohMCxuZXh0OiEwLHByZXY6ITB9O3kuZm4uZXh0ZW5kKHtoYXM6ZnVuY3Rpb24oZSl7dmFyIHQ9eShlLHRoaXMpLG49dC5sZW5ndGg7cmV0dXJuIHRoaXMuZmlsdGVyKGZ1bmN0aW9uKCl7Zm9yKHZhciBlPTA7ZTxuO2UrKylpZih5LmNvbnRhaW5zKHRoaXMsdFtlXSkpcmV0dXJuITB9KX0sY2xvc2VzdDpmdW5jdGlvbihlLHQpe3ZhciBuLGk9MCxyPXRoaXMubGVuZ3RoLG89W10scz1cInN0cmluZ1wiIT10eXBlb2YgZSYmeShlKTtpZighQS50ZXN0KGUpKWZvcig7aTxyO2krKylmb3Iobj10aGlzW2ldO24mJm4hPT10O249bi5wYXJlbnROb2RlKWlmKG4ubm9kZVR5cGU8MTEmJihzP3MuaW5kZXgobik+LTE6MT09PW4ubm9kZVR5cGUmJnkuZmluZC5tYXRjaGVzU2VsZWN0b3IobixlKSkpe28ucHVzaChuKTticmVha31yZXR1cm4gdGhpcy5wdXNoU3RhY2soby5sZW5ndGg+MT95LnVuaXF1ZVNvcnQobyk6byl9LGluZGV4OmZ1bmN0aW9uKGUpe3JldHVybiBlP1wic3RyaW5nXCI9PXR5cGVvZiBlP3UuY2FsbCh5KGUpLHRoaXNbMF0pOnUuY2FsbCh0aGlzLGUuanF1ZXJ5P2VbMF06ZSk6dGhpc1swXSYmdGhpc1swXS5wYXJlbnROb2RlP3RoaXMuZmlyc3QoKS5wcmV2QWxsKCkubGVuZ3RoOi0xfSxhZGQ6ZnVuY3Rpb24oZSx0KXtyZXR1cm4gdGhpcy5wdXNoU3RhY2soeS51bmlxdWVTb3J0KHkubWVyZ2UodGhpcy5nZXQoKSx5KGUsdCkpKSl9LGFkZEJhY2s6ZnVuY3Rpb24oZSl7cmV0dXJuIHRoaXMuYWRkKG51bGw9PWU/dGhpcy5wcmV2T2JqZWN0OnRoaXMucHJldk9iamVjdC5maWx0ZXIoZSkpfX0pO2Z1bmN0aW9uIFAoZSx0KXt3aGlsZSgoZT1lW3RdKSYmMSE9PWUubm9kZVR5cGUpO3JldHVybiBlfXkuZWFjaCh7cGFyZW50OmZ1bmN0aW9uKGUpe3ZhciB0PWUucGFyZW50Tm9kZTtyZXR1cm4gdCYmMTEhPT10Lm5vZGVUeXBlP3Q6bnVsbH0scGFyZW50czpmdW5jdGlvbihlKXtyZXR1cm4gRShlLFwicGFyZW50Tm9kZVwiKX0scGFyZW50c1VudGlsOmZ1bmN0aW9uKGUsdCxuKXtyZXR1cm4gRShlLFwicGFyZW50Tm9kZVwiLG4pfSxuZXh0OmZ1bmN0aW9uKGUpe3JldHVybiBQKGUsXCJuZXh0U2libGluZ1wiKX0scHJldjpmdW5jdGlvbihlKXtyZXR1cm4gUChlLFwicHJldmlvdXNTaWJsaW5nXCIpfSxuZXh0QWxsOmZ1bmN0aW9uKGUpe3JldHVybiBFKGUsXCJuZXh0U2libGluZ1wiKX0scHJldkFsbDpmdW5jdGlvbihlKXtyZXR1cm4gRShlLFwicHJldmlvdXNTaWJsaW5nXCIpfSxuZXh0VW50aWw6ZnVuY3Rpb24oZSx0LG4pe3JldHVybiBFKGUsXCJuZXh0U2libGluZ1wiLG4pfSxwcmV2VW50aWw6ZnVuY3Rpb24oZSx0LG4pe3JldHVybiBFKGUsXCJwcmV2aW91c1NpYmxpbmdcIixuKX0sc2libGluZ3M6ZnVuY3Rpb24oZSl7cmV0dXJuIE4oKGUucGFyZW50Tm9kZXx8e30pLmZpcnN0Q2hpbGQsZSl9LGNoaWxkcmVuOmZ1bmN0aW9uKGUpe3JldHVybiBOKGUuZmlyc3RDaGlsZCl9LGNvbnRlbnRzOmZ1bmN0aW9uKGUpe3JldHVybiBEKGUsXCJpZnJhbWVcIik/ZS5jb250ZW50RG9jdW1lbnQ6KEQoZSxcInRlbXBsYXRlXCIpJiYoZT1lLmNvbnRlbnR8fGUpLHkubWVyZ2UoW10sZS5jaGlsZE5vZGVzKSl9fSxmdW5jdGlvbihlLHQpe3kuZm5bZV09ZnVuY3Rpb24obixpKXt2YXIgcj15Lm1hcCh0aGlzLHQsbik7cmV0dXJuXCJVbnRpbFwiIT09ZS5zbGljZSgtNSkmJihpPW4pLGkmJlwic3RyaW5nXCI9PXR5cGVvZiBpJiYocj15LmZpbHRlcihpLHIpKSx0aGlzLmxlbmd0aD4xJiYoT1tlXXx8eS51bmlxdWVTb3J0KHIpLEYudGVzdChlKSYmci5yZXZlcnNlKCkpLHRoaXMucHVzaFN0YWNrKHIpfX0pO3ZhciBJPS9bXlxceDIwXFx0XFxyXFxuXFxmXSsvZztmdW5jdGlvbiBSKGUpe3ZhciB0PXt9O3JldHVybiB5LmVhY2goZS5tYXRjaChJKXx8W10sZnVuY3Rpb24oZSxuKXt0W25dPSEwfSksdH15LkNhbGxiYWNrcz1mdW5jdGlvbihlKXtlPVwic3RyaW5nXCI9PXR5cGVvZiBlP1IoZSk6eS5leHRlbmQoe30sZSk7dmFyIHQsbixpLHIsbz1bXSxzPVtdLGE9LTEsdT1mdW5jdGlvbigpe2ZvcihyPXJ8fGUub25jZSxpPXQ9ITA7cy5sZW5ndGg7YT0tMSl7bj1zLnNoaWZ0KCk7d2hpbGUoKythPG8ubGVuZ3RoKSExPT09b1thXS5hcHBseShuWzBdLG5bMV0pJiZlLnN0b3BPbkZhbHNlJiYoYT1vLmxlbmd0aCxuPSExKX1lLm1lbW9yeXx8KG49ITEpLHQ9ITEsciYmKG89bj9bXTpcIlwiKX0sbD17YWRkOmZ1bmN0aW9uKCl7cmV0dXJuIG8mJihuJiYhdCYmKGE9by5sZW5ndGgtMSxzLnB1c2gobikpLGZ1bmN0aW9uIHQobil7eS5lYWNoKG4sZnVuY3Rpb24obixpKXt5LmlzRnVuY3Rpb24oaSk/ZS51bmlxdWUmJmwuaGFzKGkpfHxvLnB1c2goaSk6aSYmaS5sZW5ndGgmJlwic3RyaW5nXCIhPT15LnR5cGUoaSkmJnQoaSl9KX0oYXJndW1lbnRzKSxuJiYhdCYmdSgpKSx0aGlzfSxyZW1vdmU6ZnVuY3Rpb24oKXtyZXR1cm4geS5lYWNoKGFyZ3VtZW50cyxmdW5jdGlvbihlLHQpe3ZhciBuO3doaWxlKChuPXkuaW5BcnJheSh0LG8sbikpPi0xKW8uc3BsaWNlKG4sMSksbjw9YSYmYS0tfSksdGhpc30saGFzOmZ1bmN0aW9uKGUpe3JldHVybiBlP3kuaW5BcnJheShlLG8pPi0xOm8ubGVuZ3RoPjB9LGVtcHR5OmZ1bmN0aW9uKCl7cmV0dXJuIG8mJihvPVtdKSx0aGlzfSxkaXNhYmxlOmZ1bmN0aW9uKCl7cmV0dXJuIHI9cz1bXSxvPW49XCJcIix0aGlzfSxkaXNhYmxlZDpmdW5jdGlvbigpe3JldHVybiFvfSxsb2NrOmZ1bmN0aW9uKCl7cmV0dXJuIHI9cz1bXSxufHx0fHwobz1uPVwiXCIpLHRoaXN9LGxvY2tlZDpmdW5jdGlvbigpe3JldHVybiEhcn0sZmlyZVdpdGg6ZnVuY3Rpb24oZSxuKXtyZXR1cm4gcnx8KG49W2UsKG49bnx8W10pLnNsaWNlP24uc2xpY2UoKTpuXSxzLnB1c2gobiksdHx8dSgpKSx0aGlzfSxmaXJlOmZ1bmN0aW9uKCl7cmV0dXJuIGwuZmlyZVdpdGgodGhpcyxhcmd1bWVudHMpLHRoaXN9LGZpcmVkOmZ1bmN0aW9uKCl7cmV0dXJuISFpfX07cmV0dXJuIGx9O2Z1bmN0aW9uIE0oZSl7cmV0dXJuIGV9ZnVuY3Rpb24gVyhlKXt0aHJvdyBlfWZ1bmN0aW9uIEIoZSx0LG4saSl7dmFyIHI7dHJ5e2UmJnkuaXNGdW5jdGlvbihyPWUucHJvbWlzZSk/ci5jYWxsKGUpLmRvbmUodCkuZmFpbChuKTplJiZ5LmlzRnVuY3Rpb24ocj1lLnRoZW4pP3IuY2FsbChlLHQsbik6dC5hcHBseSh2b2lkIDAsW2VdLnNsaWNlKGkpKX1jYXRjaChlKXtuLmFwcGx5KHZvaWQgMCxbZV0pfX15LmV4dGVuZCh7RGVmZXJyZWQ6ZnVuY3Rpb24odCl7dmFyIG49W1tcIm5vdGlmeVwiLFwicHJvZ3Jlc3NcIix5LkNhbGxiYWNrcyhcIm1lbW9yeVwiKSx5LkNhbGxiYWNrcyhcIm1lbW9yeVwiKSwyXSxbXCJyZXNvbHZlXCIsXCJkb25lXCIseS5DYWxsYmFja3MoXCJvbmNlIG1lbW9yeVwiKSx5LkNhbGxiYWNrcyhcIm9uY2UgbWVtb3J5XCIpLDAsXCJyZXNvbHZlZFwiXSxbXCJyZWplY3RcIixcImZhaWxcIix5LkNhbGxiYWNrcyhcIm9uY2UgbWVtb3J5XCIpLHkuQ2FsbGJhY2tzKFwib25jZSBtZW1vcnlcIiksMSxcInJlamVjdGVkXCJdXSxpPVwicGVuZGluZ1wiLHI9e3N0YXRlOmZ1bmN0aW9uKCl7cmV0dXJuIGl9LGFsd2F5czpmdW5jdGlvbigpe3JldHVybiBvLmRvbmUoYXJndW1lbnRzKS5mYWlsKGFyZ3VtZW50cyksdGhpc30sY2F0Y2g6ZnVuY3Rpb24oZSl7cmV0dXJuIHIudGhlbihudWxsLGUpfSxwaXBlOmZ1bmN0aW9uKCl7dmFyIGU9YXJndW1lbnRzO3JldHVybiB5LkRlZmVycmVkKGZ1bmN0aW9uKHQpe3kuZWFjaChuLGZ1bmN0aW9uKG4saSl7dmFyIHI9eS5pc0Z1bmN0aW9uKGVbaVs0XV0pJiZlW2lbNF1dO29baVsxXV0oZnVuY3Rpb24oKXt2YXIgZT1yJiZyLmFwcGx5KHRoaXMsYXJndW1lbnRzKTtlJiZ5LmlzRnVuY3Rpb24oZS5wcm9taXNlKT9lLnByb21pc2UoKS5wcm9ncmVzcyh0Lm5vdGlmeSkuZG9uZSh0LnJlc29sdmUpLmZhaWwodC5yZWplY3QpOnRbaVswXStcIldpdGhcIl0odGhpcyxyP1tlXTphcmd1bWVudHMpfSl9KSxlPW51bGx9KS5wcm9taXNlKCl9LHRoZW46ZnVuY3Rpb24odCxpLHIpe3ZhciBvPTA7ZnVuY3Rpb24gcyh0LG4saSxyKXtyZXR1cm4gZnVuY3Rpb24oKXt2YXIgYT10aGlzLHU9YXJndW1lbnRzLGw9ZnVuY3Rpb24oKXt2YXIgZSxsO2lmKCEodDxvKSl7aWYoKGU9aS5hcHBseShhLHUpKT09PW4ucHJvbWlzZSgpKXRocm93IG5ldyBUeXBlRXJyb3IoXCJUaGVuYWJsZSBzZWxmLXJlc29sdXRpb25cIik7bD1lJiYoXCJvYmplY3RcIj09dHlwZW9mIGV8fFwiZnVuY3Rpb25cIj09dHlwZW9mIGUpJiZlLnRoZW4seS5pc0Z1bmN0aW9uKGwpP3I/bC5jYWxsKGUscyhvLG4sTSxyKSxzKG8sbixXLHIpKToobysrLGwuY2FsbChlLHMobyxuLE0scikscyhvLG4sVyxyKSxzKG8sbixNLG4ubm90aWZ5V2l0aCkpKTooaSE9PU0mJihhPXZvaWQgMCx1PVtlXSksKHJ8fG4ucmVzb2x2ZVdpdGgpKGEsdSkpfX0sYz1yP2w6ZnVuY3Rpb24oKXt0cnl7bCgpfWNhdGNoKGUpe3kuRGVmZXJyZWQuZXhjZXB0aW9uSG9vayYmeS5EZWZlcnJlZC5leGNlcHRpb25Ib29rKGUsYy5zdGFja1RyYWNlKSx0KzE+PW8mJihpIT09VyYmKGE9dm9pZCAwLHU9W2VdKSxuLnJlamVjdFdpdGgoYSx1KSl9fTt0P2MoKTooeS5EZWZlcnJlZC5nZXRTdGFja0hvb2smJihjLnN0YWNrVHJhY2U9eS5EZWZlcnJlZC5nZXRTdGFja0hvb2soKSksZS5zZXRUaW1lb3V0KGMpKX19cmV0dXJuIHkuRGVmZXJyZWQoZnVuY3Rpb24oZSl7blswXVszXS5hZGQocygwLGUseS5pc0Z1bmN0aW9uKHIpP3I6TSxlLm5vdGlmeVdpdGgpKSxuWzFdWzNdLmFkZChzKDAsZSx5LmlzRnVuY3Rpb24odCk/dDpNKSksblsyXVszXS5hZGQocygwLGUseS5pc0Z1bmN0aW9uKGkpP2k6VykpfSkucHJvbWlzZSgpfSxwcm9taXNlOmZ1bmN0aW9uKGUpe3JldHVybiBudWxsIT1lP3kuZXh0ZW5kKGUscik6cn19LG89e307cmV0dXJuIHkuZWFjaChuLGZ1bmN0aW9uKGUsdCl7dmFyIHM9dFsyXSxhPXRbNV07clt0WzFdXT1zLmFkZCxhJiZzLmFkZChmdW5jdGlvbigpe2k9YX0sblszLWVdWzJdLmRpc2FibGUsblszLWVdWzNdLmRpc2FibGUsblswXVsyXS5sb2NrLG5bMF1bM10ubG9jaykscy5hZGQodFszXS5maXJlKSxvW3RbMF1dPWZ1bmN0aW9uKCl7cmV0dXJuIG9bdFswXStcIldpdGhcIl0odGhpcz09PW8/dm9pZCAwOnRoaXMsYXJndW1lbnRzKSx0aGlzfSxvW3RbMF0rXCJXaXRoXCJdPXMuZmlyZVdpdGh9KSxyLnByb21pc2UobyksdCYmdC5jYWxsKG8sbyksb30sd2hlbjpmdW5jdGlvbihlKXt2YXIgdD1hcmd1bWVudHMubGVuZ3RoLG49dCxpPUFycmF5KG4pLHI9by5jYWxsKGFyZ3VtZW50cykscz15LkRlZmVycmVkKCksYT1mdW5jdGlvbihlKXtyZXR1cm4gZnVuY3Rpb24obil7aVtlXT10aGlzLHJbZV09YXJndW1lbnRzLmxlbmd0aD4xP28uY2FsbChhcmd1bWVudHMpOm4sLS10fHxzLnJlc29sdmVXaXRoKGkscil9fTtpZih0PD0xJiYoQihlLHMuZG9uZShhKG4pKS5yZXNvbHZlLHMucmVqZWN0LCF0KSxcInBlbmRpbmdcIj09PXMuc3RhdGUoKXx8eS5pc0Z1bmN0aW9uKHJbbl0mJnJbbl0udGhlbikpKXJldHVybiBzLnRoZW4oKTt3aGlsZShuLS0pQihyW25dLGEobikscy5yZWplY3QpO3JldHVybiBzLnByb21pc2UoKX19KTt2YXIgJD0vXihFdmFsfEludGVybmFsfFJhbmdlfFJlZmVyZW5jZXxTeW50YXh8VHlwZXxVUkkpRXJyb3IkLzt5LkRlZmVycmVkLmV4Y2VwdGlvbkhvb2s9ZnVuY3Rpb24odCxuKXtlLmNvbnNvbGUmJmUuY29uc29sZS53YXJuJiZ0JiYkLnRlc3QodC5uYW1lKSYmZS5jb25zb2xlLndhcm4oXCJqUXVlcnkuRGVmZXJyZWQgZXhjZXB0aW9uOiBcIit0Lm1lc3NhZ2UsdC5zdGFjayxuKX0seS5yZWFkeUV4Y2VwdGlvbj1mdW5jdGlvbih0KXtlLnNldFRpbWVvdXQoZnVuY3Rpb24oKXt0aHJvdyB0fSl9O3ZhciBfPXkuRGVmZXJyZWQoKTt5LmZuLnJlYWR5PWZ1bmN0aW9uKGUpe3JldHVybiBfLnRoZW4oZSkuY2F0Y2goZnVuY3Rpb24oZSl7eS5yZWFkeUV4Y2VwdGlvbihlKX0pLHRoaXN9LHkuZXh0ZW5kKHtpc1JlYWR5OiExLHJlYWR5V2FpdDoxLHJlYWR5OmZ1bmN0aW9uKGUpeyghMD09PWU/LS15LnJlYWR5V2FpdDp5LmlzUmVhZHkpfHwoeS5pc1JlYWR5PSEwLCEwIT09ZSYmLS15LnJlYWR5V2FpdD4wfHxfLnJlc29sdmVXaXRoKGksW3ldKSl9fSkseS5yZWFkeS50aGVuPV8udGhlbjtmdW5jdGlvbiB6KCl7aS5yZW1vdmVFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLHopLGUucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImxvYWRcIix6KSx5LnJlYWR5KCl9XCJjb21wbGV0ZVwiPT09aS5yZWFkeVN0YXRlfHxcImxvYWRpbmdcIiE9PWkucmVhZHlTdGF0ZSYmIWkuZG9jdW1lbnRFbGVtZW50LmRvU2Nyb2xsP2Uuc2V0VGltZW91dCh5LnJlYWR5KTooaS5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLHopLGUuYWRkRXZlbnRMaXN0ZW5lcihcImxvYWRcIix6KSk7dmFyIFU9ZnVuY3Rpb24oZSx0LG4saSxyLG8scyl7dmFyIGE9MCx1PWUubGVuZ3RoLGw9bnVsbD09bjtpZihcIm9iamVjdFwiPT09eS50eXBlKG4pKXtyPSEwO2ZvcihhIGluIG4pVShlLHQsYSxuW2FdLCEwLG8scyl9ZWxzZSBpZih2b2lkIDAhPT1pJiYocj0hMCx5LmlzRnVuY3Rpb24oaSl8fChzPSEwKSxsJiYocz8odC5jYWxsKGUsaSksdD1udWxsKToobD10LHQ9ZnVuY3Rpb24oZSx0LG4pe3JldHVybiBsLmNhbGwoeShlKSxuKX0pKSx0KSlmb3IoO2E8dTthKyspdChlW2FdLG4scz9pOmkuY2FsbChlW2FdLGEsdChlW2FdLG4pKSk7cmV0dXJuIHI/ZTpsP3QuY2FsbChlKTp1P3QoZVswXSxuKTpvfSxYPWZ1bmN0aW9uKGUpe3JldHVybiAxPT09ZS5ub2RlVHlwZXx8OT09PWUubm9kZVR5cGV8fCErZS5ub2RlVHlwZX07ZnVuY3Rpb24gVigpe3RoaXMuZXhwYW5kbz15LmV4cGFuZG8rVi51aWQrK31WLnVpZD0xLFYucHJvdG90eXBlPXtjYWNoZTpmdW5jdGlvbihlKXt2YXIgdD1lW3RoaXMuZXhwYW5kb107cmV0dXJuIHR8fCh0PXt9LFgoZSkmJihlLm5vZGVUeXBlP2VbdGhpcy5leHBhbmRvXT10Ok9iamVjdC5kZWZpbmVQcm9wZXJ0eShlLHRoaXMuZXhwYW5kbyx7dmFsdWU6dCxjb25maWd1cmFibGU6ITB9KSkpLHR9LHNldDpmdW5jdGlvbihlLHQsbil7dmFyIGkscj10aGlzLmNhY2hlKGUpO2lmKFwic3RyaW5nXCI9PXR5cGVvZiB0KXJbeS5jYW1lbENhc2UodCldPW47ZWxzZSBmb3IoaSBpbiB0KXJbeS5jYW1lbENhc2UoaSldPXRbaV07cmV0dXJuIHJ9LGdldDpmdW5jdGlvbihlLHQpe3JldHVybiB2b2lkIDA9PT10P3RoaXMuY2FjaGUoZSk6ZVt0aGlzLmV4cGFuZG9dJiZlW3RoaXMuZXhwYW5kb11beS5jYW1lbENhc2UodCldfSxhY2Nlc3M6ZnVuY3Rpb24oZSx0LG4pe3JldHVybiB2b2lkIDA9PT10fHx0JiZcInN0cmluZ1wiPT10eXBlb2YgdCYmdm9pZCAwPT09bj90aGlzLmdldChlLHQpOih0aGlzLnNldChlLHQsbiksdm9pZCAwIT09bj9uOnQpfSxyZW1vdmU6ZnVuY3Rpb24oZSx0KXt2YXIgbixpPWVbdGhpcy5leHBhbmRvXTtpZih2b2lkIDAhPT1pKXtpZih2b2lkIDAhPT10KXtuPSh0PUFycmF5LmlzQXJyYXkodCk/dC5tYXAoeS5jYW1lbENhc2UpOih0PXkuY2FtZWxDYXNlKHQpKWluIGk/W3RdOnQubWF0Y2goSSl8fFtdKS5sZW5ndGg7d2hpbGUobi0tKWRlbGV0ZSBpW3Rbbl1dfSh2b2lkIDA9PT10fHx5LmlzRW1wdHlPYmplY3QoaSkpJiYoZS5ub2RlVHlwZT9lW3RoaXMuZXhwYW5kb109dm9pZCAwOmRlbGV0ZSBlW3RoaXMuZXhwYW5kb10pfX0saGFzRGF0YTpmdW5jdGlvbihlKXt2YXIgdD1lW3RoaXMuZXhwYW5kb107cmV0dXJuIHZvaWQgMCE9PXQmJiF5LmlzRW1wdHlPYmplY3QodCl9fTt2YXIgWT1uZXcgVixRPW5ldyBWLEc9L14oPzpcXHtbXFx3XFxXXSpcXH18XFxbW1xcd1xcV10qXFxdKSQvLEs9L1tBLVpdL2c7ZnVuY3Rpb24gSihlKXtyZXR1cm5cInRydWVcIj09PWV8fFwiZmFsc2VcIiE9PWUmJihcIm51bGxcIj09PWU/bnVsbDplPT09K2UrXCJcIj8rZTpHLnRlc3QoZSk/SlNPTi5wYXJzZShlKTplKX1mdW5jdGlvbiBaKGUsdCxuKXt2YXIgaTtpZih2b2lkIDA9PT1uJiYxPT09ZS5ub2RlVHlwZSlpZihpPVwiZGF0YS1cIit0LnJlcGxhY2UoSyxcIi0kJlwiKS50b0xvd2VyQ2FzZSgpLFwic3RyaW5nXCI9PXR5cGVvZihuPWUuZ2V0QXR0cmlidXRlKGkpKSl7dHJ5e249SihuKX1jYXRjaChlKXt9US5zZXQoZSx0LG4pfWVsc2Ugbj12b2lkIDA7cmV0dXJuIG59eS5leHRlbmQoe2hhc0RhdGE6ZnVuY3Rpb24oZSl7cmV0dXJuIFEuaGFzRGF0YShlKXx8WS5oYXNEYXRhKGUpfSxkYXRhOmZ1bmN0aW9uKGUsdCxuKXtyZXR1cm4gUS5hY2Nlc3MoZSx0LG4pfSxyZW1vdmVEYXRhOmZ1bmN0aW9uKGUsdCl7US5yZW1vdmUoZSx0KX0sX2RhdGE6ZnVuY3Rpb24oZSx0LG4pe3JldHVybiBZLmFjY2VzcyhlLHQsbil9LF9yZW1vdmVEYXRhOmZ1bmN0aW9uKGUsdCl7WS5yZW1vdmUoZSx0KX19KSx5LmZuLmV4dGVuZCh7ZGF0YTpmdW5jdGlvbihlLHQpe3ZhciBuLGkscixvPXRoaXNbMF0scz1vJiZvLmF0dHJpYnV0ZXM7aWYodm9pZCAwPT09ZSl7aWYodGhpcy5sZW5ndGgmJihyPVEuZ2V0KG8pLDE9PT1vLm5vZGVUeXBlJiYhWS5nZXQobyxcImhhc0RhdGFBdHRyc1wiKSkpe249cy5sZW5ndGg7d2hpbGUobi0tKXNbbl0mJjA9PT0oaT1zW25dLm5hbWUpLmluZGV4T2YoXCJkYXRhLVwiKSYmKGk9eS5jYW1lbENhc2UoaS5zbGljZSg1KSksWihvLGkscltpXSkpO1kuc2V0KG8sXCJoYXNEYXRhQXR0cnNcIiwhMCl9cmV0dXJuIHJ9cmV0dXJuXCJvYmplY3RcIj09dHlwZW9mIGU/dGhpcy5lYWNoKGZ1bmN0aW9uKCl7US5zZXQodGhpcyxlKX0pOlUodGhpcyxmdW5jdGlvbih0KXt2YXIgbjtpZihvJiZ2b2lkIDA9PT10KXtpZih2b2lkIDAhPT0obj1RLmdldChvLGUpKSlyZXR1cm4gbjtpZih2b2lkIDAhPT0obj1aKG8sZSkpKXJldHVybiBufWVsc2UgdGhpcy5lYWNoKGZ1bmN0aW9uKCl7US5zZXQodGhpcyxlLHQpfSl9LG51bGwsdCxhcmd1bWVudHMubGVuZ3RoPjEsbnVsbCwhMCl9LHJlbW92ZURhdGE6ZnVuY3Rpb24oZSl7cmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbigpe1EucmVtb3ZlKHRoaXMsZSl9KX19KSx5LmV4dGVuZCh7cXVldWU6ZnVuY3Rpb24oZSx0LG4pe3ZhciBpO2lmKGUpcmV0dXJuIHQ9KHR8fFwiZnhcIikrXCJxdWV1ZVwiLGk9WS5nZXQoZSx0KSxuJiYoIWl8fEFycmF5LmlzQXJyYXkobik/aT1ZLmFjY2VzcyhlLHQseS5tYWtlQXJyYXkobikpOmkucHVzaChuKSksaXx8W119LGRlcXVldWU6ZnVuY3Rpb24oZSx0KXt0PXR8fFwiZnhcIjt2YXIgbj15LnF1ZXVlKGUsdCksaT1uLmxlbmd0aCxyPW4uc2hpZnQoKSxvPXkuX3F1ZXVlSG9va3MoZSx0KSxzPWZ1bmN0aW9uKCl7eS5kZXF1ZXVlKGUsdCl9O1wiaW5wcm9ncmVzc1wiPT09ciYmKHI9bi5zaGlmdCgpLGktLSksciYmKFwiZnhcIj09PXQmJm4udW5zaGlmdChcImlucHJvZ3Jlc3NcIiksZGVsZXRlIG8uc3RvcCxyLmNhbGwoZSxzLG8pKSwhaSYmbyYmby5lbXB0eS5maXJlKCl9LF9xdWV1ZUhvb2tzOmZ1bmN0aW9uKGUsdCl7dmFyIG49dCtcInF1ZXVlSG9va3NcIjtyZXR1cm4gWS5nZXQoZSxuKXx8WS5hY2Nlc3MoZSxuLHtlbXB0eTp5LkNhbGxiYWNrcyhcIm9uY2UgbWVtb3J5XCIpLmFkZChmdW5jdGlvbigpe1kucmVtb3ZlKGUsW3QrXCJxdWV1ZVwiLG5dKX0pfSl9fSkseS5mbi5leHRlbmQoe3F1ZXVlOmZ1bmN0aW9uKGUsdCl7dmFyIG49MjtyZXR1cm5cInN0cmluZ1wiIT10eXBlb2YgZSYmKHQ9ZSxlPVwiZnhcIixuLS0pLGFyZ3VtZW50cy5sZW5ndGg8bj95LnF1ZXVlKHRoaXNbMF0sZSk6dm9pZCAwPT09dD90aGlzOnRoaXMuZWFjaChmdW5jdGlvbigpe3ZhciBuPXkucXVldWUodGhpcyxlLHQpO3kuX3F1ZXVlSG9va3ModGhpcyxlKSxcImZ4XCI9PT1lJiZcImlucHJvZ3Jlc3NcIiE9PW5bMF0mJnkuZGVxdWV1ZSh0aGlzLGUpfSl9LGRlcXVldWU6ZnVuY3Rpb24oZSl7cmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbigpe3kuZGVxdWV1ZSh0aGlzLGUpfSl9LGNsZWFyUXVldWU6ZnVuY3Rpb24oZSl7cmV0dXJuIHRoaXMucXVldWUoZXx8XCJmeFwiLFtdKX0scHJvbWlzZTpmdW5jdGlvbihlLHQpe3ZhciBuLGk9MSxyPXkuRGVmZXJyZWQoKSxvPXRoaXMscz10aGlzLmxlbmd0aCxhPWZ1bmN0aW9uKCl7LS1pfHxyLnJlc29sdmVXaXRoKG8sW29dKX07XCJzdHJpbmdcIiE9dHlwZW9mIGUmJih0PWUsZT12b2lkIDApLGU9ZXx8XCJmeFwiO3doaWxlKHMtLSkobj1ZLmdldChvW3NdLGUrXCJxdWV1ZUhvb2tzXCIpKSYmbi5lbXB0eSYmKGkrKyxuLmVtcHR5LmFkZChhKSk7cmV0dXJuIGEoKSxyLnByb21pc2UodCl9fSk7dmFyIGVlPS9bKy1dPyg/OlxcZCpcXC58KVxcZCsoPzpbZUVdWystXT9cXGQrfCkvLnNvdXJjZSx0ZT1uZXcgUmVnRXhwKFwiXig/OihbKy1dKT18KShcIitlZStcIikoW2EteiVdKikkXCIsXCJpXCIpLG5lPVtcIlRvcFwiLFwiUmlnaHRcIixcIkJvdHRvbVwiLFwiTGVmdFwiXSxpZT1mdW5jdGlvbihlLHQpe3JldHVyblwibm9uZVwiPT09KGU9dHx8ZSkuc3R5bGUuZGlzcGxheXx8XCJcIj09PWUuc3R5bGUuZGlzcGxheSYmeS5jb250YWlucyhlLm93bmVyRG9jdW1lbnQsZSkmJlwibm9uZVwiPT09eS5jc3MoZSxcImRpc3BsYXlcIil9LHJlPWZ1bmN0aW9uKGUsdCxuLGkpe3ZhciByLG8scz17fTtmb3IobyBpbiB0KXNbb109ZS5zdHlsZVtvXSxlLnN0eWxlW29dPXRbb107cj1uLmFwcGx5KGUsaXx8W10pO2ZvcihvIGluIHQpZS5zdHlsZVtvXT1zW29dO3JldHVybiByfTtmdW5jdGlvbiBvZShlLHQsbixpKXt2YXIgcixvLHM9MjAsYT1pP2Z1bmN0aW9uKCl7cmV0dXJuIGkuY3VyKCl9OmZ1bmN0aW9uKCl7cmV0dXJuIHkuY3NzKGUsdCxcIlwiKX0sdT1hKCksbD1uJiZuWzNdfHwoeS5jc3NOdW1iZXJbdF0/XCJcIjpcInB4XCIpLGM9KHkuY3NzTnVtYmVyW3RdfHxcInB4XCIhPT1sJiYrdSkmJnRlLmV4ZWMoeS5jc3MoZSx0KSk7aWYoYyYmY1szXSE9PWwpe3UvPTIsbD1sfHxjWzNdLGM9K3V8fDE7d2hpbGUocy0tKXkuc3R5bGUoZSx0LGMrbCksKDEtbykqKDEtKG89YSgpL3V8fC41KSk8PTAmJihzPTApLGMvPW87Yyo9Mix5LnN0eWxlKGUsdCxjK2wpLG49bnx8W119cmV0dXJuIG4mJihjPStjfHwrdXx8MCxyPW5bMV0/YysoblsxXSsxKSpuWzJdOituWzJdLGkmJihpLnVuaXQ9bCxpLnN0YXJ0PWMsaS5lbmQ9cikpLHJ9dmFyIHNlPXt9O2Z1bmN0aW9uIGFlKGUpe3ZhciB0LG49ZS5vd25lckRvY3VtZW50LGk9ZS5ub2RlTmFtZSxyPXNlW2ldO3JldHVybiByfHwodD1uLmJvZHkuYXBwZW5kQ2hpbGQobi5jcmVhdGVFbGVtZW50KGkpKSxyPXkuY3NzKHQsXCJkaXNwbGF5XCIpLHQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZCh0KSxcIm5vbmVcIj09PXImJihyPVwiYmxvY2tcIiksc2VbaV09cixyKX1mdW5jdGlvbiB1ZShlLHQpe2Zvcih2YXIgbixpLHI9W10sbz0wLHM9ZS5sZW5ndGg7bzxzO28rKykoaT1lW29dKS5zdHlsZSYmKG49aS5zdHlsZS5kaXNwbGF5LHQ/KFwibm9uZVwiPT09biYmKHJbb109WS5nZXQoaSxcImRpc3BsYXlcIil8fG51bGwscltvXXx8KGkuc3R5bGUuZGlzcGxheT1cIlwiKSksXCJcIj09PWkuc3R5bGUuZGlzcGxheSYmaWUoaSkmJihyW29dPWFlKGkpKSk6XCJub25lXCIhPT1uJiYocltvXT1cIm5vbmVcIixZLnNldChpLFwiZGlzcGxheVwiLG4pKSk7Zm9yKG89MDtvPHM7bysrKW51bGwhPXJbb10mJihlW29dLnN0eWxlLmRpc3BsYXk9cltvXSk7cmV0dXJuIGV9eS5mbi5leHRlbmQoe3Nob3c6ZnVuY3Rpb24oKXtyZXR1cm4gdWUodGhpcywhMCl9LGhpZGU6ZnVuY3Rpb24oKXtyZXR1cm4gdWUodGhpcyl9LHRvZ2dsZTpmdW5jdGlvbihlKXtyZXR1cm5cImJvb2xlYW5cIj09dHlwZW9mIGU/ZT90aGlzLnNob3coKTp0aGlzLmhpZGUoKTp0aGlzLmVhY2goZnVuY3Rpb24oKXtpZSh0aGlzKT95KHRoaXMpLnNob3coKTp5KHRoaXMpLmhpZGUoKX0pfX0pO3ZhciBsZT0vXig/OmNoZWNrYm94fHJhZGlvKSQvaSxjZT0vPChbYS16XVteXFwvXFwwPlxceDIwXFx0XFxyXFxuXFxmXSspL2ksZmU9L14kfFxcLyg/OmphdmF8ZWNtYSlzY3JpcHQvaSxwZT17b3B0aW9uOlsxLFwiPHNlbGVjdCBtdWx0aXBsZT0nbXVsdGlwbGUnPlwiLFwiPC9zZWxlY3Q+XCJdLHRoZWFkOlsxLFwiPHRhYmxlPlwiLFwiPC90YWJsZT5cIl0sY29sOlsyLFwiPHRhYmxlPjxjb2xncm91cD5cIixcIjwvY29sZ3JvdXA+PC90YWJsZT5cIl0sdHI6WzIsXCI8dGFibGU+PHRib2R5PlwiLFwiPC90Ym9keT48L3RhYmxlPlwiXSx0ZDpbMyxcIjx0YWJsZT48dGJvZHk+PHRyPlwiLFwiPC90cj48L3Rib2R5PjwvdGFibGU+XCJdLF9kZWZhdWx0OlswLFwiXCIsXCJcIl19O3BlLm9wdGdyb3VwPXBlLm9wdGlvbixwZS50Ym9keT1wZS50Zm9vdD1wZS5jb2xncm91cD1wZS5jYXB0aW9uPXBlLnRoZWFkLHBlLnRoPXBlLnRkO2Z1bmN0aW9uIGRlKGUsdCl7dmFyIG47cmV0dXJuIG49XCJ1bmRlZmluZWRcIiE9dHlwZW9mIGUuZ2V0RWxlbWVudHNCeVRhZ05hbWU/ZS5nZXRFbGVtZW50c0J5VGFnTmFtZSh0fHxcIipcIik6XCJ1bmRlZmluZWRcIiE9dHlwZW9mIGUucXVlcnlTZWxlY3RvckFsbD9lLnF1ZXJ5U2VsZWN0b3JBbGwodHx8XCIqXCIpOltdLHZvaWQgMD09PXR8fHQmJkQoZSx0KT95Lm1lcmdlKFtlXSxuKTpufWZ1bmN0aW9uIGhlKGUsdCl7Zm9yKHZhciBuPTAsaT1lLmxlbmd0aDtuPGk7bisrKVkuc2V0KGVbbl0sXCJnbG9iYWxFdmFsXCIsIXR8fFkuZ2V0KHRbbl0sXCJnbG9iYWxFdmFsXCIpKX12YXIgZ2U9Lzx8JiM/XFx3KzsvO2Z1bmN0aW9uIHZlKGUsdCxuLGkscil7Zm9yKHZhciBvLHMsYSx1LGwsYyxmPXQuY3JlYXRlRG9jdW1lbnRGcmFnbWVudCgpLHA9W10sZD0wLGg9ZS5sZW5ndGg7ZDxoO2QrKylpZigobz1lW2RdKXx8MD09PW8paWYoXCJvYmplY3RcIj09PXkudHlwZShvKSl5Lm1lcmdlKHAsby5ub2RlVHlwZT9bb106byk7ZWxzZSBpZihnZS50ZXN0KG8pKXtzPXN8fGYuYXBwZW5kQ2hpbGQodC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpKSxhPShjZS5leGVjKG8pfHxbXCJcIixcIlwiXSlbMV0udG9Mb3dlckNhc2UoKSx1PXBlW2FdfHxwZS5fZGVmYXVsdCxzLmlubmVySFRNTD11WzFdK3kuaHRtbFByZWZpbHRlcihvKSt1WzJdLGM9dVswXTt3aGlsZShjLS0pcz1zLmxhc3RDaGlsZDt5Lm1lcmdlKHAscy5jaGlsZE5vZGVzKSwocz1mLmZpcnN0Q2hpbGQpLnRleHRDb250ZW50PVwiXCJ9ZWxzZSBwLnB1c2godC5jcmVhdGVUZXh0Tm9kZShvKSk7Zi50ZXh0Q29udGVudD1cIlwiLGQ9MDt3aGlsZShvPXBbZCsrXSlpZihpJiZ5LmluQXJyYXkobyxpKT4tMSlyJiZyLnB1c2gobyk7ZWxzZSBpZihsPXkuY29udGFpbnMoby5vd25lckRvY3VtZW50LG8pLHM9ZGUoZi5hcHBlbmRDaGlsZChvKSxcInNjcmlwdFwiKSxsJiZoZShzKSxuKXtjPTA7d2hpbGUobz1zW2MrK10pZmUudGVzdChvLnR5cGV8fFwiXCIpJiZuLnB1c2gobyl9cmV0dXJuIGZ9IWZ1bmN0aW9uKCl7dmFyIGU9aS5jcmVhdGVEb2N1bWVudEZyYWdtZW50KCkuYXBwZW5kQ2hpbGQoaS5jcmVhdGVFbGVtZW50KFwiZGl2XCIpKSx0PWkuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO3Quc2V0QXR0cmlidXRlKFwidHlwZVwiLFwicmFkaW9cIiksdC5zZXRBdHRyaWJ1dGUoXCJjaGVja2VkXCIsXCJjaGVja2VkXCIpLHQuc2V0QXR0cmlidXRlKFwibmFtZVwiLFwidFwiKSxlLmFwcGVuZENoaWxkKHQpLGguY2hlY2tDbG9uZT1lLmNsb25lTm9kZSghMCkuY2xvbmVOb2RlKCEwKS5sYXN0Q2hpbGQuY2hlY2tlZCxlLmlubmVySFRNTD1cIjx0ZXh0YXJlYT54PC90ZXh0YXJlYT5cIixoLm5vQ2xvbmVDaGVja2VkPSEhZS5jbG9uZU5vZGUoITApLmxhc3RDaGlsZC5kZWZhdWx0VmFsdWV9KCk7dmFyIG1lPWkuZG9jdW1lbnRFbGVtZW50LHllPS9ea2V5Lyx4ZT0vXig/Om1vdXNlfHBvaW50ZXJ8Y29udGV4dG1lbnV8ZHJhZ3xkcm9wKXxjbGljay8sYmU9L14oW14uXSopKD86XFwuKC4rKXwpLztmdW5jdGlvbiB3ZSgpe3JldHVybiEwfWZ1bmN0aW9uIENlKCl7cmV0dXJuITF9ZnVuY3Rpb24gVGUoKXt0cnl7cmV0dXJuIGkuYWN0aXZlRWxlbWVudH1jYXRjaChlKXt9fWZ1bmN0aW9uIGtlKGUsdCxuLGkscixvKXt2YXIgcyxhO2lmKFwib2JqZWN0XCI9PXR5cGVvZiB0KXtcInN0cmluZ1wiIT10eXBlb2YgbiYmKGk9aXx8bixuPXZvaWQgMCk7Zm9yKGEgaW4gdClrZShlLGEsbixpLHRbYV0sbyk7cmV0dXJuIGV9aWYobnVsbD09aSYmbnVsbD09cj8ocj1uLGk9bj12b2lkIDApOm51bGw9PXImJihcInN0cmluZ1wiPT10eXBlb2Ygbj8ocj1pLGk9dm9pZCAwKToocj1pLGk9bixuPXZvaWQgMCkpLCExPT09cilyPUNlO2Vsc2UgaWYoIXIpcmV0dXJuIGU7cmV0dXJuIDE9PT1vJiYocz1yLChyPWZ1bmN0aW9uKGUpe3JldHVybiB5KCkub2ZmKGUpLHMuYXBwbHkodGhpcyxhcmd1bWVudHMpfSkuZ3VpZD1zLmd1aWR8fChzLmd1aWQ9eS5ndWlkKyspKSxlLmVhY2goZnVuY3Rpb24oKXt5LmV2ZW50LmFkZCh0aGlzLHQscixpLG4pfSl9eS5ldmVudD17Z2xvYmFsOnt9LGFkZDpmdW5jdGlvbihlLHQsbixpLHIpe3ZhciBvLHMsYSx1LGwsYyxmLHAsZCxoLGcsdj1ZLmdldChlKTtpZih2KXtuLmhhbmRsZXImJihuPShvPW4pLmhhbmRsZXIscj1vLnNlbGVjdG9yKSxyJiZ5LmZpbmQubWF0Y2hlc1NlbGVjdG9yKG1lLHIpLG4uZ3VpZHx8KG4uZ3VpZD15Lmd1aWQrKyksKHU9di5ldmVudHMpfHwodT12LmV2ZW50cz17fSksKHM9di5oYW5kbGUpfHwocz12LmhhbmRsZT1mdW5jdGlvbih0KXtyZXR1cm5cInVuZGVmaW5lZFwiIT10eXBlb2YgeSYmeS5ldmVudC50cmlnZ2VyZWQhPT10LnR5cGU/eS5ldmVudC5kaXNwYXRjaC5hcHBseShlLGFyZ3VtZW50cyk6dm9pZCAwfSksbD0odD0odHx8XCJcIikubWF0Y2goSSl8fFtcIlwiXSkubGVuZ3RoO3doaWxlKGwtLSlkPWc9KGE9YmUuZXhlYyh0W2xdKXx8W10pWzFdLGg9KGFbMl18fFwiXCIpLnNwbGl0KFwiLlwiKS5zb3J0KCksZCYmKGY9eS5ldmVudC5zcGVjaWFsW2RdfHx7fSxkPShyP2YuZGVsZWdhdGVUeXBlOmYuYmluZFR5cGUpfHxkLGY9eS5ldmVudC5zcGVjaWFsW2RdfHx7fSxjPXkuZXh0ZW5kKHt0eXBlOmQsb3JpZ1R5cGU6ZyxkYXRhOmksaGFuZGxlcjpuLGd1aWQ6bi5ndWlkLHNlbGVjdG9yOnIsbmVlZHNDb250ZXh0OnImJnkuZXhwci5tYXRjaC5uZWVkc0NvbnRleHQudGVzdChyKSxuYW1lc3BhY2U6aC5qb2luKFwiLlwiKX0sbyksKHA9dVtkXSl8fCgocD11W2RdPVtdKS5kZWxlZ2F0ZUNvdW50PTAsZi5zZXR1cCYmITEhPT1mLnNldHVwLmNhbGwoZSxpLGgscyl8fGUuYWRkRXZlbnRMaXN0ZW5lciYmZS5hZGRFdmVudExpc3RlbmVyKGQscykpLGYuYWRkJiYoZi5hZGQuY2FsbChlLGMpLGMuaGFuZGxlci5ndWlkfHwoYy5oYW5kbGVyLmd1aWQ9bi5ndWlkKSkscj9wLnNwbGljZShwLmRlbGVnYXRlQ291bnQrKywwLGMpOnAucHVzaChjKSx5LmV2ZW50Lmdsb2JhbFtkXT0hMCl9fSxyZW1vdmU6ZnVuY3Rpb24oZSx0LG4saSxyKXt2YXIgbyxzLGEsdSxsLGMsZixwLGQsaCxnLHY9WS5oYXNEYXRhKGUpJiZZLmdldChlKTtpZih2JiYodT12LmV2ZW50cykpe2w9KHQ9KHR8fFwiXCIpLm1hdGNoKEkpfHxbXCJcIl0pLmxlbmd0aDt3aGlsZShsLS0paWYoYT1iZS5leGVjKHRbbF0pfHxbXSxkPWc9YVsxXSxoPShhWzJdfHxcIlwiKS5zcGxpdChcIi5cIikuc29ydCgpLGQpe2Y9eS5ldmVudC5zcGVjaWFsW2RdfHx7fSxwPXVbZD0oaT9mLmRlbGVnYXRlVHlwZTpmLmJpbmRUeXBlKXx8ZF18fFtdLGE9YVsyXSYmbmV3IFJlZ0V4cChcIihefFxcXFwuKVwiK2guam9pbihcIlxcXFwuKD86LipcXFxcLnwpXCIpK1wiKFxcXFwufCQpXCIpLHM9bz1wLmxlbmd0aDt3aGlsZShvLS0pYz1wW29dLCFyJiZnIT09Yy5vcmlnVHlwZXx8biYmbi5ndWlkIT09Yy5ndWlkfHxhJiYhYS50ZXN0KGMubmFtZXNwYWNlKXx8aSYmaSE9PWMuc2VsZWN0b3ImJihcIioqXCIhPT1pfHwhYy5zZWxlY3Rvcil8fChwLnNwbGljZShvLDEpLGMuc2VsZWN0b3ImJnAuZGVsZWdhdGVDb3VudC0tLGYucmVtb3ZlJiZmLnJlbW92ZS5jYWxsKGUsYykpO3MmJiFwLmxlbmd0aCYmKGYudGVhcmRvd24mJiExIT09Zi50ZWFyZG93bi5jYWxsKGUsaCx2LmhhbmRsZSl8fHkucmVtb3ZlRXZlbnQoZSxkLHYuaGFuZGxlKSxkZWxldGUgdVtkXSl9ZWxzZSBmb3IoZCBpbiB1KXkuZXZlbnQucmVtb3ZlKGUsZCt0W2xdLG4saSwhMCk7eS5pc0VtcHR5T2JqZWN0KHUpJiZZLnJlbW92ZShlLFwiaGFuZGxlIGV2ZW50c1wiKX19LGRpc3BhdGNoOmZ1bmN0aW9uKGUpe3ZhciB0PXkuZXZlbnQuZml4KGUpLG4saSxyLG8scyxhLHU9bmV3IEFycmF5KGFyZ3VtZW50cy5sZW5ndGgpLGw9KFkuZ2V0KHRoaXMsXCJldmVudHNcIil8fHt9KVt0LnR5cGVdfHxbXSxjPXkuZXZlbnQuc3BlY2lhbFt0LnR5cGVdfHx7fTtmb3IodVswXT10LG49MTtuPGFyZ3VtZW50cy5sZW5ndGg7bisrKXVbbl09YXJndW1lbnRzW25dO2lmKHQuZGVsZWdhdGVUYXJnZXQ9dGhpcywhYy5wcmVEaXNwYXRjaHx8ITEhPT1jLnByZURpc3BhdGNoLmNhbGwodGhpcyx0KSl7YT15LmV2ZW50LmhhbmRsZXJzLmNhbGwodGhpcyx0LGwpLG49MDt3aGlsZSgobz1hW24rK10pJiYhdC5pc1Byb3BhZ2F0aW9uU3RvcHBlZCgpKXt0LmN1cnJlbnRUYXJnZXQ9by5lbGVtLGk9MDt3aGlsZSgocz1vLmhhbmRsZXJzW2krK10pJiYhdC5pc0ltbWVkaWF0ZVByb3BhZ2F0aW9uU3RvcHBlZCgpKXQucm5hbWVzcGFjZSYmIXQucm5hbWVzcGFjZS50ZXN0KHMubmFtZXNwYWNlKXx8KHQuaGFuZGxlT2JqPXMsdC5kYXRhPXMuZGF0YSx2b2lkIDAhPT0ocj0oKHkuZXZlbnQuc3BlY2lhbFtzLm9yaWdUeXBlXXx8e30pLmhhbmRsZXx8cy5oYW5kbGVyKS5hcHBseShvLmVsZW0sdSkpJiYhMT09PSh0LnJlc3VsdD1yKSYmKHQucHJldmVudERlZmF1bHQoKSx0LnN0b3BQcm9wYWdhdGlvbigpKSl9cmV0dXJuIGMucG9zdERpc3BhdGNoJiZjLnBvc3REaXNwYXRjaC5jYWxsKHRoaXMsdCksdC5yZXN1bHR9fSxoYW5kbGVyczpmdW5jdGlvbihlLHQpe3ZhciBuLGkscixvLHMsYT1bXSx1PXQuZGVsZWdhdGVDb3VudCxsPWUudGFyZ2V0O2lmKHUmJmwubm9kZVR5cGUmJiEoXCJjbGlja1wiPT09ZS50eXBlJiZlLmJ1dHRvbj49MSkpZm9yKDtsIT09dGhpcztsPWwucGFyZW50Tm9kZXx8dGhpcylpZigxPT09bC5ub2RlVHlwZSYmKFwiY2xpY2tcIiE9PWUudHlwZXx8ITAhPT1sLmRpc2FibGVkKSl7Zm9yKG89W10scz17fSxuPTA7bjx1O24rKyl2b2lkIDA9PT1zW3I9KGk9dFtuXSkuc2VsZWN0b3IrXCIgXCJdJiYoc1tyXT1pLm5lZWRzQ29udGV4dD95KHIsdGhpcykuaW5kZXgobCk+LTE6eS5maW5kKHIsdGhpcyxudWxsLFtsXSkubGVuZ3RoKSxzW3JdJiZvLnB1c2goaSk7by5sZW5ndGgmJmEucHVzaCh7ZWxlbTpsLGhhbmRsZXJzOm99KX1yZXR1cm4gbD10aGlzLHU8dC5sZW5ndGgmJmEucHVzaCh7ZWxlbTpsLGhhbmRsZXJzOnQuc2xpY2UodSl9KSxhfSxhZGRQcm9wOmZ1bmN0aW9uKGUsdCl7T2JqZWN0LmRlZmluZVByb3BlcnR5KHkuRXZlbnQucHJvdG90eXBlLGUse2VudW1lcmFibGU6ITAsY29uZmlndXJhYmxlOiEwLGdldDp5LmlzRnVuY3Rpb24odCk/ZnVuY3Rpb24oKXtpZih0aGlzLm9yaWdpbmFsRXZlbnQpcmV0dXJuIHQodGhpcy5vcmlnaW5hbEV2ZW50KX06ZnVuY3Rpb24oKXtpZih0aGlzLm9yaWdpbmFsRXZlbnQpcmV0dXJuIHRoaXMub3JpZ2luYWxFdmVudFtlXX0sc2V0OmZ1bmN0aW9uKHQpe09iamVjdC5kZWZpbmVQcm9wZXJ0eSh0aGlzLGUse2VudW1lcmFibGU6ITAsY29uZmlndXJhYmxlOiEwLHdyaXRhYmxlOiEwLHZhbHVlOnR9KX19KX0sZml4OmZ1bmN0aW9uKGUpe3JldHVybiBlW3kuZXhwYW5kb10/ZTpuZXcgeS5FdmVudChlKX0sc3BlY2lhbDp7bG9hZDp7bm9CdWJibGU6ITB9LGZvY3VzOnt0cmlnZ2VyOmZ1bmN0aW9uKCl7aWYodGhpcyE9PVRlKCkmJnRoaXMuZm9jdXMpcmV0dXJuIHRoaXMuZm9jdXMoKSwhMX0sZGVsZWdhdGVUeXBlOlwiZm9jdXNpblwifSxibHVyOnt0cmlnZ2VyOmZ1bmN0aW9uKCl7aWYodGhpcz09PVRlKCkmJnRoaXMuYmx1cilyZXR1cm4gdGhpcy5ibHVyKCksITF9LGRlbGVnYXRlVHlwZTpcImZvY3Vzb3V0XCJ9LGNsaWNrOnt0cmlnZ2VyOmZ1bmN0aW9uKCl7aWYoXCJjaGVja2JveFwiPT09dGhpcy50eXBlJiZ0aGlzLmNsaWNrJiZEKHRoaXMsXCJpbnB1dFwiKSlyZXR1cm4gdGhpcy5jbGljaygpLCExfSxfZGVmYXVsdDpmdW5jdGlvbihlKXtyZXR1cm4gRChlLnRhcmdldCxcImFcIil9fSxiZWZvcmV1bmxvYWQ6e3Bvc3REaXNwYXRjaDpmdW5jdGlvbihlKXt2b2lkIDAhPT1lLnJlc3VsdCYmZS5vcmlnaW5hbEV2ZW50JiYoZS5vcmlnaW5hbEV2ZW50LnJldHVyblZhbHVlPWUucmVzdWx0KX19fX0seS5yZW1vdmVFdmVudD1mdW5jdGlvbihlLHQsbil7ZS5yZW1vdmVFdmVudExpc3RlbmVyJiZlLnJlbW92ZUV2ZW50TGlzdGVuZXIodCxuKX0seS5FdmVudD1mdW5jdGlvbihlLHQpe2lmKCEodGhpcyBpbnN0YW5jZW9mIHkuRXZlbnQpKXJldHVybiBuZXcgeS5FdmVudChlLHQpO2UmJmUudHlwZT8odGhpcy5vcmlnaW5hbEV2ZW50PWUsdGhpcy50eXBlPWUudHlwZSx0aGlzLmlzRGVmYXVsdFByZXZlbnRlZD1lLmRlZmF1bHRQcmV2ZW50ZWR8fHZvaWQgMD09PWUuZGVmYXVsdFByZXZlbnRlZCYmITE9PT1lLnJldHVyblZhbHVlP3dlOkNlLHRoaXMudGFyZ2V0PWUudGFyZ2V0JiYzPT09ZS50YXJnZXQubm9kZVR5cGU/ZS50YXJnZXQucGFyZW50Tm9kZTplLnRhcmdldCx0aGlzLmN1cnJlbnRUYXJnZXQ9ZS5jdXJyZW50VGFyZ2V0LHRoaXMucmVsYXRlZFRhcmdldD1lLnJlbGF0ZWRUYXJnZXQpOnRoaXMudHlwZT1lLHQmJnkuZXh0ZW5kKHRoaXMsdCksdGhpcy50aW1lU3RhbXA9ZSYmZS50aW1lU3RhbXB8fHkubm93KCksdGhpc1t5LmV4cGFuZG9dPSEwfSx5LkV2ZW50LnByb3RvdHlwZT17Y29uc3RydWN0b3I6eS5FdmVudCxpc0RlZmF1bHRQcmV2ZW50ZWQ6Q2UsaXNQcm9wYWdhdGlvblN0b3BwZWQ6Q2UsaXNJbW1lZGlhdGVQcm9wYWdhdGlvblN0b3BwZWQ6Q2UsaXNTaW11bGF0ZWQ6ITEscHJldmVudERlZmF1bHQ6ZnVuY3Rpb24oKXt2YXIgZT10aGlzLm9yaWdpbmFsRXZlbnQ7dGhpcy5pc0RlZmF1bHRQcmV2ZW50ZWQ9d2UsZSYmIXRoaXMuaXNTaW11bGF0ZWQmJmUucHJldmVudERlZmF1bHQoKX0sc3RvcFByb3BhZ2F0aW9uOmZ1bmN0aW9uKCl7dmFyIGU9dGhpcy5vcmlnaW5hbEV2ZW50O3RoaXMuaXNQcm9wYWdhdGlvblN0b3BwZWQ9d2UsZSYmIXRoaXMuaXNTaW11bGF0ZWQmJmUuc3RvcFByb3BhZ2F0aW9uKCl9LHN0b3BJbW1lZGlhdGVQcm9wYWdhdGlvbjpmdW5jdGlvbigpe3ZhciBlPXRoaXMub3JpZ2luYWxFdmVudDt0aGlzLmlzSW1tZWRpYXRlUHJvcGFnYXRpb25TdG9wcGVkPXdlLGUmJiF0aGlzLmlzU2ltdWxhdGVkJiZlLnN0b3BJbW1lZGlhdGVQcm9wYWdhdGlvbigpLHRoaXMuc3RvcFByb3BhZ2F0aW9uKCl9fSx5LmVhY2goe2FsdEtleTohMCxidWJibGVzOiEwLGNhbmNlbGFibGU6ITAsY2hhbmdlZFRvdWNoZXM6ITAsY3RybEtleTohMCxkZXRhaWw6ITAsZXZlbnRQaGFzZTohMCxtZXRhS2V5OiEwLHBhZ2VYOiEwLHBhZ2VZOiEwLHNoaWZ0S2V5OiEwLHZpZXc6ITAsY2hhcjohMCxjaGFyQ29kZTohMCxrZXk6ITAsa2V5Q29kZTohMCxidXR0b246ITAsYnV0dG9uczohMCxjbGllbnRYOiEwLGNsaWVudFk6ITAsb2Zmc2V0WDohMCxvZmZzZXRZOiEwLHBvaW50ZXJJZDohMCxwb2ludGVyVHlwZTohMCxzY3JlZW5YOiEwLHNjcmVlblk6ITAsdGFyZ2V0VG91Y2hlczohMCx0b0VsZW1lbnQ6ITAsdG91Y2hlczohMCx3aGljaDpmdW5jdGlvbihlKXt2YXIgdD1lLmJ1dHRvbjtyZXR1cm4gbnVsbD09ZS53aGljaCYmeWUudGVzdChlLnR5cGUpP251bGwhPWUuY2hhckNvZGU/ZS5jaGFyQ29kZTplLmtleUNvZGU6IWUud2hpY2gmJnZvaWQgMCE9PXQmJnhlLnRlc3QoZS50eXBlKT8xJnQ/MToyJnQ/Mzo0JnQ/MjowOmUud2hpY2h9fSx5LmV2ZW50LmFkZFByb3ApLHkuZWFjaCh7bW91c2VlbnRlcjpcIm1vdXNlb3ZlclwiLG1vdXNlbGVhdmU6XCJtb3VzZW91dFwiLHBvaW50ZXJlbnRlcjpcInBvaW50ZXJvdmVyXCIscG9pbnRlcmxlYXZlOlwicG9pbnRlcm91dFwifSxmdW5jdGlvbihlLHQpe3kuZXZlbnQuc3BlY2lhbFtlXT17ZGVsZWdhdGVUeXBlOnQsYmluZFR5cGU6dCxoYW5kbGU6ZnVuY3Rpb24oZSl7dmFyIG4saT10aGlzLHI9ZS5yZWxhdGVkVGFyZ2V0LG89ZS5oYW5kbGVPYmo7cmV0dXJuIHImJihyPT09aXx8eS5jb250YWlucyhpLHIpKXx8KGUudHlwZT1vLm9yaWdUeXBlLG49by5oYW5kbGVyLmFwcGx5KHRoaXMsYXJndW1lbnRzKSxlLnR5cGU9dCksbn19fSkseS5mbi5leHRlbmQoe29uOmZ1bmN0aW9uKGUsdCxuLGkpe3JldHVybiBrZSh0aGlzLGUsdCxuLGkpfSxvbmU6ZnVuY3Rpb24oZSx0LG4saSl7cmV0dXJuIGtlKHRoaXMsZSx0LG4saSwxKX0sb2ZmOmZ1bmN0aW9uKGUsdCxuKXt2YXIgaSxyO2lmKGUmJmUucHJldmVudERlZmF1bHQmJmUuaGFuZGxlT2JqKXJldHVybiBpPWUuaGFuZGxlT2JqLHkoZS5kZWxlZ2F0ZVRhcmdldCkub2ZmKGkubmFtZXNwYWNlP2kub3JpZ1R5cGUrXCIuXCIraS5uYW1lc3BhY2U6aS5vcmlnVHlwZSxpLnNlbGVjdG9yLGkuaGFuZGxlciksdGhpcztpZihcIm9iamVjdFwiPT10eXBlb2YgZSl7Zm9yKHIgaW4gZSl0aGlzLm9mZihyLHQsZVtyXSk7cmV0dXJuIHRoaXN9cmV0dXJuITEhPT10JiZcImZ1bmN0aW9uXCIhPXR5cGVvZiB0fHwobj10LHQ9dm9pZCAwKSwhMT09PW4mJihuPUNlKSx0aGlzLmVhY2goZnVuY3Rpb24oKXt5LmV2ZW50LnJlbW92ZSh0aGlzLGUsbix0KX0pfX0pO3ZhciBFZT0vPCg/IWFyZWF8YnJ8Y29sfGVtYmVkfGhyfGltZ3xpbnB1dHxsaW5rfG1ldGF8cGFyYW0pKChbYS16XVteXFwvXFwwPlxceDIwXFx0XFxyXFxuXFxmXSopW14+XSopXFwvPi9naSxOZT0vPHNjcmlwdHw8c3R5bGV8PGxpbmsvaSxBZT0vY2hlY2tlZFxccyooPzpbXj1dfD1cXHMqLmNoZWNrZWQuKS9pLERlPS9edHJ1ZVxcLyguKikvLFNlPS9eXFxzKjwhKD86XFxbQ0RBVEFcXFt8LS0pfCg/OlxcXVxcXXwtLSk+XFxzKiQvZztmdW5jdGlvbiBxZShlLHQpe3JldHVybiBEKGUsXCJ0YWJsZVwiKSYmRCgxMSE9PXQubm9kZVR5cGU/dDp0LmZpcnN0Q2hpbGQsXCJ0clwiKT95KFwiPnRib2R5XCIsZSlbMF18fGU6ZX1mdW5jdGlvbiBMZShlKXtyZXR1cm4gZS50eXBlPShudWxsIT09ZS5nZXRBdHRyaWJ1dGUoXCJ0eXBlXCIpKStcIi9cIitlLnR5cGUsZX1mdW5jdGlvbiBqZShlKXt2YXIgdD1EZS5leGVjKGUudHlwZSk7cmV0dXJuIHQ/ZS50eXBlPXRbMV06ZS5yZW1vdmVBdHRyaWJ1dGUoXCJ0eXBlXCIpLGV9ZnVuY3Rpb24gSGUoZSx0KXt2YXIgbixpLHIsbyxzLGEsdSxsO2lmKDE9PT10Lm5vZGVUeXBlKXtpZihZLmhhc0RhdGEoZSkmJihvPVkuYWNjZXNzKGUpLHM9WS5zZXQodCxvKSxsPW8uZXZlbnRzKSl7ZGVsZXRlIHMuaGFuZGxlLHMuZXZlbnRzPXt9O2ZvcihyIGluIGwpZm9yKG49MCxpPWxbcl0ubGVuZ3RoO248aTtuKyspeS5ldmVudC5hZGQodCxyLGxbcl1bbl0pfVEuaGFzRGF0YShlKSYmKGE9US5hY2Nlc3MoZSksdT15LmV4dGVuZCh7fSxhKSxRLnNldCh0LHUpKX19ZnVuY3Rpb24gRmUoZSx0KXt2YXIgbj10Lm5vZGVOYW1lLnRvTG93ZXJDYXNlKCk7XCJpbnB1dFwiPT09biYmbGUudGVzdChlLnR5cGUpP3QuY2hlY2tlZD1lLmNoZWNrZWQ6XCJpbnB1dFwiIT09biYmXCJ0ZXh0YXJlYVwiIT09bnx8KHQuZGVmYXVsdFZhbHVlPWUuZGVmYXVsdFZhbHVlKX1mdW5jdGlvbiBPZShlLHQsbixpKXt0PXMuYXBwbHkoW10sdCk7dmFyIHIsbyxhLHUsbCxjLGY9MCxwPWUubGVuZ3RoLGQ9cC0xLGc9dFswXSxtPXkuaXNGdW5jdGlvbihnKTtpZihtfHxwPjEmJlwic3RyaW5nXCI9PXR5cGVvZiBnJiYhaC5jaGVja0Nsb25lJiZBZS50ZXN0KGcpKXJldHVybiBlLmVhY2goZnVuY3Rpb24ocil7dmFyIG89ZS5lcShyKTttJiYodFswXT1nLmNhbGwodGhpcyxyLG8uaHRtbCgpKSksT2Uobyx0LG4saSl9KTtpZihwJiYocj12ZSh0LGVbMF0ub3duZXJEb2N1bWVudCwhMSxlLGkpLG89ci5maXJzdENoaWxkLDE9PT1yLmNoaWxkTm9kZXMubGVuZ3RoJiYocj1vKSxvfHxpKSl7Zm9yKHU9KGE9eS5tYXAoZGUocixcInNjcmlwdFwiKSxMZSkpLmxlbmd0aDtmPHA7ZisrKWw9cixmIT09ZCYmKGw9eS5jbG9uZShsLCEwLCEwKSx1JiZ5Lm1lcmdlKGEsZGUobCxcInNjcmlwdFwiKSkpLG4uY2FsbChlW2ZdLGwsZik7aWYodSlmb3IoYz1hW2EubGVuZ3RoLTFdLm93bmVyRG9jdW1lbnQseS5tYXAoYSxqZSksZj0wO2Y8dTtmKyspbD1hW2ZdLGZlLnRlc3QobC50eXBlfHxcIlwiKSYmIVkuYWNjZXNzKGwsXCJnbG9iYWxFdmFsXCIpJiZ5LmNvbnRhaW5zKGMsbCkmJihsLnNyYz95Ll9ldmFsVXJsJiZ5Ll9ldmFsVXJsKGwuc3JjKTp2KGwudGV4dENvbnRlbnQucmVwbGFjZShTZSxcIlwiKSxjKSl9cmV0dXJuIGV9ZnVuY3Rpb24gUGUoZSx0LG4pe2Zvcih2YXIgaSxyPXQ/eS5maWx0ZXIodCxlKTplLG89MDtudWxsIT0oaT1yW29dKTtvKyspbnx8MSE9PWkubm9kZVR5cGV8fHkuY2xlYW5EYXRhKGRlKGkpKSxpLnBhcmVudE5vZGUmJihuJiZ5LmNvbnRhaW5zKGkub3duZXJEb2N1bWVudCxpKSYmaGUoZGUoaSxcInNjcmlwdFwiKSksaS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKGkpKTtyZXR1cm4gZX15LmV4dGVuZCh7aHRtbFByZWZpbHRlcjpmdW5jdGlvbihlKXtyZXR1cm4gZS5yZXBsYWNlKEVlLFwiPCQxPjwvJDI+XCIpfSxjbG9uZTpmdW5jdGlvbihlLHQsbil7dmFyIGkscixvLHMsYT1lLmNsb25lTm9kZSghMCksdT15LmNvbnRhaW5zKGUub3duZXJEb2N1bWVudCxlKTtpZighKGgubm9DbG9uZUNoZWNrZWR8fDEhPT1lLm5vZGVUeXBlJiYxMSE9PWUubm9kZVR5cGV8fHkuaXNYTUxEb2MoZSkpKWZvcihzPWRlKGEpLGk9MCxyPShvPWRlKGUpKS5sZW5ndGg7aTxyO2krKylGZShvW2ldLHNbaV0pO2lmKHQpaWYobilmb3Iobz1vfHxkZShlKSxzPXN8fGRlKGEpLGk9MCxyPW8ubGVuZ3RoO2k8cjtpKyspSGUob1tpXSxzW2ldKTtlbHNlIEhlKGUsYSk7cmV0dXJuKHM9ZGUoYSxcInNjcmlwdFwiKSkubGVuZ3RoPjAmJmhlKHMsIXUmJmRlKGUsXCJzY3JpcHRcIikpLGF9LGNsZWFuRGF0YTpmdW5jdGlvbihlKXtmb3IodmFyIHQsbixpLHI9eS5ldmVudC5zcGVjaWFsLG89MDt2b2lkIDAhPT0obj1lW29dKTtvKyspaWYoWChuKSl7aWYodD1uW1kuZXhwYW5kb10pe2lmKHQuZXZlbnRzKWZvcihpIGluIHQuZXZlbnRzKXJbaV0/eS5ldmVudC5yZW1vdmUobixpKTp5LnJlbW92ZUV2ZW50KG4saSx0LmhhbmRsZSk7bltZLmV4cGFuZG9dPXZvaWQgMH1uW1EuZXhwYW5kb10mJihuW1EuZXhwYW5kb109dm9pZCAwKX19fSkseS5mbi5leHRlbmQoe2RldGFjaDpmdW5jdGlvbihlKXtyZXR1cm4gUGUodGhpcyxlLCEwKX0scmVtb3ZlOmZ1bmN0aW9uKGUpe3JldHVybiBQZSh0aGlzLGUpfSx0ZXh0OmZ1bmN0aW9uKGUpe3JldHVybiBVKHRoaXMsZnVuY3Rpb24oZSl7cmV0dXJuIHZvaWQgMD09PWU/eS50ZXh0KHRoaXMpOnRoaXMuZW1wdHkoKS5lYWNoKGZ1bmN0aW9uKCl7MSE9PXRoaXMubm9kZVR5cGUmJjExIT09dGhpcy5ub2RlVHlwZSYmOSE9PXRoaXMubm9kZVR5cGV8fCh0aGlzLnRleHRDb250ZW50PWUpfSl9LG51bGwsZSxhcmd1bWVudHMubGVuZ3RoKX0sYXBwZW5kOmZ1bmN0aW9uKCl7cmV0dXJuIE9lKHRoaXMsYXJndW1lbnRzLGZ1bmN0aW9uKGUpezEhPT10aGlzLm5vZGVUeXBlJiYxMSE9PXRoaXMubm9kZVR5cGUmJjkhPT10aGlzLm5vZGVUeXBlfHxxZSh0aGlzLGUpLmFwcGVuZENoaWxkKGUpfSl9LHByZXBlbmQ6ZnVuY3Rpb24oKXtyZXR1cm4gT2UodGhpcyxhcmd1bWVudHMsZnVuY3Rpb24oZSl7aWYoMT09PXRoaXMubm9kZVR5cGV8fDExPT09dGhpcy5ub2RlVHlwZXx8OT09PXRoaXMubm9kZVR5cGUpe3ZhciB0PXFlKHRoaXMsZSk7dC5pbnNlcnRCZWZvcmUoZSx0LmZpcnN0Q2hpbGQpfX0pfSxiZWZvcmU6ZnVuY3Rpb24oKXtyZXR1cm4gT2UodGhpcyxhcmd1bWVudHMsZnVuY3Rpb24oZSl7dGhpcy5wYXJlbnROb2RlJiZ0aGlzLnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKGUsdGhpcyl9KX0sYWZ0ZXI6ZnVuY3Rpb24oKXtyZXR1cm4gT2UodGhpcyxhcmd1bWVudHMsZnVuY3Rpb24oZSl7dGhpcy5wYXJlbnROb2RlJiZ0aGlzLnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKGUsdGhpcy5uZXh0U2libGluZyl9KX0sZW1wdHk6ZnVuY3Rpb24oKXtmb3IodmFyIGUsdD0wO251bGwhPShlPXRoaXNbdF0pO3QrKykxPT09ZS5ub2RlVHlwZSYmKHkuY2xlYW5EYXRhKGRlKGUsITEpKSxlLnRleHRDb250ZW50PVwiXCIpO3JldHVybiB0aGlzfSxjbG9uZTpmdW5jdGlvbihlLHQpe3JldHVybiBlPW51bGwhPWUmJmUsdD1udWxsPT10P2U6dCx0aGlzLm1hcChmdW5jdGlvbigpe3JldHVybiB5LmNsb25lKHRoaXMsZSx0KX0pfSxodG1sOmZ1bmN0aW9uKGUpe3JldHVybiBVKHRoaXMsZnVuY3Rpb24oZSl7dmFyIHQ9dGhpc1swXXx8e30sbj0wLGk9dGhpcy5sZW5ndGg7aWYodm9pZCAwPT09ZSYmMT09PXQubm9kZVR5cGUpcmV0dXJuIHQuaW5uZXJIVE1MO2lmKFwic3RyaW5nXCI9PXR5cGVvZiBlJiYhTmUudGVzdChlKSYmIXBlWyhjZS5leGVjKGUpfHxbXCJcIixcIlwiXSlbMV0udG9Mb3dlckNhc2UoKV0pe2U9eS5odG1sUHJlZmlsdGVyKGUpO3RyeXtmb3IoO248aTtuKyspMT09PSh0PXRoaXNbbl18fHt9KS5ub2RlVHlwZSYmKHkuY2xlYW5EYXRhKGRlKHQsITEpKSx0LmlubmVySFRNTD1lKTt0PTB9Y2F0Y2goZSl7fX10JiZ0aGlzLmVtcHR5KCkuYXBwZW5kKGUpfSxudWxsLGUsYXJndW1lbnRzLmxlbmd0aCl9LHJlcGxhY2VXaXRoOmZ1bmN0aW9uKCl7dmFyIGU9W107cmV0dXJuIE9lKHRoaXMsYXJndW1lbnRzLGZ1bmN0aW9uKHQpe3ZhciBuPXRoaXMucGFyZW50Tm9kZTt5LmluQXJyYXkodGhpcyxlKTwwJiYoeS5jbGVhbkRhdGEoZGUodGhpcykpLG4mJm4ucmVwbGFjZUNoaWxkKHQsdGhpcykpfSxlKX19KSx5LmVhY2goe2FwcGVuZFRvOlwiYXBwZW5kXCIscHJlcGVuZFRvOlwicHJlcGVuZFwiLGluc2VydEJlZm9yZTpcImJlZm9yZVwiLGluc2VydEFmdGVyOlwiYWZ0ZXJcIixyZXBsYWNlQWxsOlwicmVwbGFjZVdpdGhcIn0sZnVuY3Rpb24oZSx0KXt5LmZuW2VdPWZ1bmN0aW9uKGUpe2Zvcih2YXIgbixpPVtdLHI9eShlKSxvPXIubGVuZ3RoLTEscz0wO3M8PW87cysrKW49cz09PW8/dGhpczp0aGlzLmNsb25lKCEwKSx5KHJbc10pW3RdKG4pLGEuYXBwbHkoaSxuLmdldCgpKTtyZXR1cm4gdGhpcy5wdXNoU3RhY2soaSl9fSk7dmFyIEllPS9ebWFyZ2luLyxSZT1uZXcgUmVnRXhwKFwiXihcIitlZStcIikoPyFweClbYS16JV0rJFwiLFwiaVwiKSxNZT1mdW5jdGlvbih0KXt2YXIgbj10Lm93bmVyRG9jdW1lbnQuZGVmYXVsdFZpZXc7cmV0dXJuIG4mJm4ub3BlbmVyfHwobj1lKSxuLmdldENvbXB1dGVkU3R5bGUodCl9OyFmdW5jdGlvbigpe2Z1bmN0aW9uIHQoKXtpZihsKXt1LnN0eWxlLmNzc1RleHQ9XCJwb3NpdGlvbjphYnNvbHV0ZTtsZWZ0Oi0xMTExMXB4O3dpZHRoOjYwcHg7bWFyZ2luLXRvcDoxcHg7cGFkZGluZzowO2JvcmRlcjowXCIsbC5zdHlsZS5jc3NUZXh0PVwicG9zaXRpb246cmVsYXRpdmU7ZGlzcGxheTpibG9jaztib3gtc2l6aW5nOmJvcmRlci1ib3g7b3ZlcmZsb3c6c2Nyb2xsO21hcmdpbjphdXRvO2JvcmRlcjoxcHg7cGFkZGluZzoxcHg7d2lkdGg6NjAlO3RvcDoxJVwiLG1lLmFwcGVuZENoaWxkKHUpLmFwcGVuZENoaWxkKGwpO3ZhciB0PWUuZ2V0Q29tcHV0ZWRTdHlsZShsKTtuPVwiMSVcIiE9PXQudG9wLGE9XCIxMnB4XCI9PT10Lm1hcmdpbkxlZnQsbC5zdHlsZS5tYXJnaW5SaWdodD1cIjYwJVwiLHM9XCIzNnB4XCI9PT10Lm1hcmdpblJpZ2h0LHI9XCIzNnB4XCI9PT10LndpZHRoLGwuc3R5bGUucG9zaXRpb249XCJhYnNvbHV0ZVwiLG89MzY9PT1sLm9mZnNldFdpZHRofHxcImFic29sdXRlXCIsbWUucmVtb3ZlQ2hpbGQodSksbD1udWxsfX12YXIgbixyLG8scyxhLHU9aS5jcmVhdGVFbGVtZW50KFwiZGl2XCIpLGw9aS5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO2wuc3R5bGUmJihsLnN0eWxlLmJhY2tncm91bmRDbGlwPVwiY29udGVudC1ib3hcIixsLmNsb25lTm9kZSghMCkuc3R5bGUuYmFja2dyb3VuZENsaXA9XCJcIixoLmNsZWFyQ2xvbmVTdHlsZT1cImNvbnRlbnQtYm94XCI9PT1sLnN0eWxlLmJhY2tncm91bmRDbGlwLHkuZXh0ZW5kKGgse2JveFNpemluZ1JlbGlhYmxlOmZ1bmN0aW9uKCl7cmV0dXJuIHQoKSxyfSxwaXhlbFBvc2l0aW9uOmZ1bmN0aW9uKCl7cmV0dXJuIHQoKSxufSxwaXhlbE1hcmdpblJpZ2h0OmZ1bmN0aW9uKCl7cmV0dXJuIHQoKSxzfSxyZWxpYWJsZU1hcmdpbkxlZnQ6ZnVuY3Rpb24oKXtyZXR1cm4gdCgpLGF9LHNjcm9sbGJveFNpemU6ZnVuY3Rpb24oKXtyZXR1cm4gdCgpLG99fSkpfSgpO2Z1bmN0aW9uIFdlKGUsdCxuKXt2YXIgaSxyLG8scyxhPWUuc3R5bGU7cmV0dXJuKG49bnx8TWUoZSkpJiYoXCJcIiE9PShzPW4uZ2V0UHJvcGVydHlWYWx1ZSh0KXx8blt0XSl8fHkuY29udGFpbnMoZS5vd25lckRvY3VtZW50LGUpfHwocz15LnN0eWxlKGUsdCkpLCFoLnBpeGVsTWFyZ2luUmlnaHQoKSYmUmUudGVzdChzKSYmSWUudGVzdCh0KSYmKGk9YS53aWR0aCxyPWEubWluV2lkdGgsbz1hLm1heFdpZHRoLGEubWluV2lkdGg9YS5tYXhXaWR0aD1hLndpZHRoPXMscz1uLndpZHRoLGEud2lkdGg9aSxhLm1pbldpZHRoPXIsYS5tYXhXaWR0aD1vKSksdm9pZCAwIT09cz9zK1wiXCI6c31mdW5jdGlvbiBCZShlLHQpe3JldHVybntnZXQ6ZnVuY3Rpb24oKXtpZighZSgpKXJldHVybih0aGlzLmdldD10KS5hcHBseSh0aGlzLGFyZ3VtZW50cyk7ZGVsZXRlIHRoaXMuZ2V0fX19dmFyICRlPS9eKG5vbmV8dGFibGUoPyEtY1tlYV0pLispLyxfZT0vXi0tLyx6ZT17cG9zaXRpb246XCJhYnNvbHV0ZVwiLHZpc2liaWxpdHk6XCJoaWRkZW5cIixkaXNwbGF5OlwiYmxvY2tcIn0sVWU9e2xldHRlclNwYWNpbmc6XCIwXCIsZm9udFdlaWdodDpcIjQwMFwifSxYZT1bXCJXZWJraXRcIixcIk1velwiLFwibXNcIl0sVmU9aS5jcmVhdGVFbGVtZW50KFwiZGl2XCIpLnN0eWxlO2Z1bmN0aW9uIFllKGUpe2lmKGUgaW4gVmUpcmV0dXJuIGU7dmFyIHQ9ZVswXS50b1VwcGVyQ2FzZSgpK2Uuc2xpY2UoMSksbj1YZS5sZW5ndGg7d2hpbGUobi0tKWlmKChlPVhlW25dK3QpaW4gVmUpcmV0dXJuIGV9ZnVuY3Rpb24gUWUoZSl7dmFyIHQ9eS5jc3NQcm9wc1tlXTtyZXR1cm4gdHx8KHQ9eS5jc3NQcm9wc1tlXT1ZZShlKXx8ZSksdH1mdW5jdGlvbiBHZShlLHQsbil7dmFyIGk9dGUuZXhlYyh0KTtyZXR1cm4gaT9NYXRoLm1heCgwLGlbMl0tKG58fDApKSsoaVszXXx8XCJweFwiKTp0fWZ1bmN0aW9uIEtlKGUsdCxuLGkscixvKXt2YXIgcz1cIndpZHRoXCI9PT10PzE6MCxhPTAsdT0wO2lmKG49PT0oaT9cImJvcmRlclwiOlwiY29udGVudFwiKSlyZXR1cm4gMDtmb3IoO3M8NDtzKz0yKVwibWFyZ2luXCI9PT1uJiYodSs9eS5jc3MoZSxuK25lW3NdLCEwLHIpKSxpPyhcImNvbnRlbnRcIj09PW4mJih1LT15LmNzcyhlLFwicGFkZGluZ1wiK25lW3NdLCEwLHIpKSxcIm1hcmdpblwiIT09biYmKHUtPXkuY3NzKGUsXCJib3JkZXJcIituZVtzXStcIldpZHRoXCIsITAscikpKToodSs9eS5jc3MoZSxcInBhZGRpbmdcIituZVtzXSwhMCxyKSxcInBhZGRpbmdcIiE9PW4/dSs9eS5jc3MoZSxcImJvcmRlclwiK25lW3NdK1wiV2lkdGhcIiwhMCxyKTphKz15LmNzcyhlLFwiYm9yZGVyXCIrbmVbc10rXCJXaWR0aFwiLCEwLHIpKTtyZXR1cm4haSYmbz49MCYmKHUrPU1hdGgubWF4KDAsTWF0aC5jZWlsKGVbXCJvZmZzZXRcIit0WzBdLnRvVXBwZXJDYXNlKCkrdC5zbGljZSgxKV0tby11LWEtLjUpKSksdX1mdW5jdGlvbiBKZShlLHQsbil7dmFyIGk9TWUoZSkscj1XZShlLHQsaSksbz1cImJvcmRlci1ib3hcIj09PXkuY3NzKGUsXCJib3hTaXppbmdcIiwhMSxpKSxzPW87aWYoUmUudGVzdChyKSl7aWYoIW4pcmV0dXJuIHI7cj1cImF1dG9cIn1yZXR1cm4gcz1zJiYoaC5ib3hTaXppbmdSZWxpYWJsZSgpfHxyPT09ZS5zdHlsZVt0XSksKFwiYXV0b1wiPT09cnx8IXBhcnNlRmxvYXQocikmJlwiaW5saW5lXCI9PT15LmNzcyhlLFwiZGlzcGxheVwiLCExLGkpKSYmKHI9ZVtcIm9mZnNldFwiK3RbMF0udG9VcHBlckNhc2UoKSt0LnNsaWNlKDEpXSxzPSEwKSwocj1wYXJzZUZsb2F0KHIpfHwwKStLZShlLHQsbnx8KG8/XCJib3JkZXJcIjpcImNvbnRlbnRcIikscyxpLHIpK1wicHhcIn15LmV4dGVuZCh7Y3NzSG9va3M6e29wYWNpdHk6e2dldDpmdW5jdGlvbihlLHQpe2lmKHQpe3ZhciBuPVdlKGUsXCJvcGFjaXR5XCIpO3JldHVyblwiXCI9PT1uP1wiMVwiOm59fX19LGNzc051bWJlcjp7YW5pbWF0aW9uSXRlcmF0aW9uQ291bnQ6ITAsY29sdW1uQ291bnQ6ITAsZmlsbE9wYWNpdHk6ITAsZmxleEdyb3c6ITAsZmxleFNocmluazohMCxmb250V2VpZ2h0OiEwLGxpbmVIZWlnaHQ6ITAsb3BhY2l0eTohMCxvcmRlcjohMCxvcnBoYW5zOiEwLHdpZG93czohMCx6SW5kZXg6ITAsem9vbTohMH0sY3NzUHJvcHM6e30sc3R5bGU6ZnVuY3Rpb24oZSx0LG4saSl7aWYoZSYmMyE9PWUubm9kZVR5cGUmJjghPT1lLm5vZGVUeXBlJiZlLnN0eWxlKXt2YXIgcixvLHMsYT15LmNhbWVsQ2FzZSh0KSx1PV9lLnRlc3QodCksbD1lLnN0eWxlO2lmKHV8fCh0PVFlKGEpKSxzPXkuY3NzSG9va3NbdF18fHkuY3NzSG9va3NbYV0sdm9pZCAwPT09bilyZXR1cm4gcyYmXCJnZXRcImluIHMmJnZvaWQgMCE9PShyPXMuZ2V0KGUsITEsaSkpP3I6bFt0XTtcInN0cmluZ1wiPT0obz10eXBlb2YgbikmJihyPXRlLmV4ZWMobikpJiZyWzFdJiYobj1vZShlLHQsciksbz1cIm51bWJlclwiKSxudWxsIT1uJiZuPT09biYmKFwibnVtYmVyXCI9PT1vJiYobis9ciYmclszXXx8KHkuY3NzTnVtYmVyW2FdP1wiXCI6XCJweFwiKSksaC5jbGVhckNsb25lU3R5bGV8fFwiXCIhPT1ufHwwIT09dC5pbmRleE9mKFwiYmFja2dyb3VuZFwiKXx8KGxbdF09XCJpbmhlcml0XCIpLHMmJlwic2V0XCJpbiBzJiZ2b2lkIDA9PT0obj1zLnNldChlLG4saSkpfHwodT9sLnNldFByb3BlcnR5KHQsbik6bFt0XT1uKSl9fSxjc3M6ZnVuY3Rpb24oZSx0LG4saSl7dmFyIHIsbyxzLGE9eS5jYW1lbENhc2UodCk7cmV0dXJuIF9lLnRlc3QodCl8fCh0PVFlKGEpKSwocz15LmNzc0hvb2tzW3RdfHx5LmNzc0hvb2tzW2FdKSYmXCJnZXRcImluIHMmJihyPXMuZ2V0KGUsITAsbikpLHZvaWQgMD09PXImJihyPVdlKGUsdCxpKSksXCJub3JtYWxcIj09PXImJnQgaW4gVWUmJihyPVVlW3RdKSxcIlwiPT09bnx8bj8obz1wYXJzZUZsb2F0KHIpLCEwPT09bnx8aXNGaW5pdGUobyk/b3x8MDpyKTpyfX0pLHkuZWFjaChbXCJoZWlnaHRcIixcIndpZHRoXCJdLGZ1bmN0aW9uKGUsdCl7eS5jc3NIb29rc1t0XT17Z2V0OmZ1bmN0aW9uKGUsbixpKXtpZihuKXJldHVybiEkZS50ZXN0KHkuY3NzKGUsXCJkaXNwbGF5XCIpKXx8ZS5nZXRDbGllbnRSZWN0cygpLmxlbmd0aCYmZS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS53aWR0aD9KZShlLHQsaSk6cmUoZSx6ZSxmdW5jdGlvbigpe3JldHVybiBKZShlLHQsaSl9KX0sc2V0OmZ1bmN0aW9uKGUsbixpKXt2YXIgcixvPU1lKGUpLHM9XCJib3JkZXItYm94XCI9PT15LmNzcyhlLFwiYm94U2l6aW5nXCIsITEsbyksYT1pJiZLZShlLHQsaSxzLG8pO3JldHVybiBzJiZoLnNjcm9sbGJveFNpemUoKT09PW8ucG9zaXRpb24mJihhLT1NYXRoLmNlaWwoZVtcIm9mZnNldFwiK3RbMF0udG9VcHBlckNhc2UoKSt0LnNsaWNlKDEpXS1wYXJzZUZsb2F0KG9bdF0pLUtlKGUsdCxcImJvcmRlclwiLCExLG8pLS41KSksYSYmKHI9dGUuZXhlYyhuKSkmJlwicHhcIiE9PShyWzNdfHxcInB4XCIpJiYoZS5zdHlsZVt0XT1uLG49eS5jc3MoZSx0KSksR2UoZSxuLGEpfX19KSx5LmNzc0hvb2tzLm1hcmdpbkxlZnQ9QmUoaC5yZWxpYWJsZU1hcmdpbkxlZnQsZnVuY3Rpb24oZSx0KXtpZih0KXJldHVybihwYXJzZUZsb2F0KFdlKGUsXCJtYXJnaW5MZWZ0XCIpKXx8ZS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS5sZWZ0LXJlKGUse21hcmdpbkxlZnQ6MH0sZnVuY3Rpb24oKXtyZXR1cm4gZS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS5sZWZ0fSkpK1wicHhcIn0pLHkuZWFjaCh7bWFyZ2luOlwiXCIscGFkZGluZzpcIlwiLGJvcmRlcjpcIldpZHRoXCJ9LGZ1bmN0aW9uKGUsdCl7eS5jc3NIb29rc1tlK3RdPXtleHBhbmQ6ZnVuY3Rpb24obil7Zm9yKHZhciBpPTAscj17fSxvPVwic3RyaW5nXCI9PXR5cGVvZiBuP24uc3BsaXQoXCIgXCIpOltuXTtpPDQ7aSsrKXJbZStuZVtpXSt0XT1vW2ldfHxvW2ktMl18fG9bMF07cmV0dXJuIHJ9fSxJZS50ZXN0KGUpfHwoeS5jc3NIb29rc1tlK3RdLnNldD1HZSl9KSx5LmZuLmV4dGVuZCh7Y3NzOmZ1bmN0aW9uKGUsdCl7cmV0dXJuIFUodGhpcyxmdW5jdGlvbihlLHQsbil7dmFyIGkscixvPXt9LHM9MDtpZihBcnJheS5pc0FycmF5KHQpKXtmb3IoaT1NZShlKSxyPXQubGVuZ3RoO3M8cjtzKyspb1t0W3NdXT15LmNzcyhlLHRbc10sITEsaSk7cmV0dXJuIG99cmV0dXJuIHZvaWQgMCE9PW4/eS5zdHlsZShlLHQsbik6eS5jc3MoZSx0KX0sZSx0LGFyZ3VtZW50cy5sZW5ndGg+MSl9fSk7ZnVuY3Rpb24gWmUoZSx0LG4saSxyKXtyZXR1cm4gbmV3IFplLnByb3RvdHlwZS5pbml0KGUsdCxuLGkscil9eS5Ud2Vlbj1aZSxaZS5wcm90b3R5cGU9e2NvbnN0cnVjdG9yOlplLGluaXQ6ZnVuY3Rpb24oZSx0LG4saSxyLG8pe3RoaXMuZWxlbT1lLHRoaXMucHJvcD1uLHRoaXMuZWFzaW5nPXJ8fHkuZWFzaW5nLl9kZWZhdWx0LHRoaXMub3B0aW9ucz10LHRoaXMuc3RhcnQ9dGhpcy5ub3c9dGhpcy5jdXIoKSx0aGlzLmVuZD1pLHRoaXMudW5pdD1vfHwoeS5jc3NOdW1iZXJbbl0/XCJcIjpcInB4XCIpfSxjdXI6ZnVuY3Rpb24oKXt2YXIgZT1aZS5wcm9wSG9va3NbdGhpcy5wcm9wXTtyZXR1cm4gZSYmZS5nZXQ/ZS5nZXQodGhpcyk6WmUucHJvcEhvb2tzLl9kZWZhdWx0LmdldCh0aGlzKX0scnVuOmZ1bmN0aW9uKGUpe3ZhciB0LG49WmUucHJvcEhvb2tzW3RoaXMucHJvcF07cmV0dXJuIHRoaXMub3B0aW9ucy5kdXJhdGlvbj90aGlzLnBvcz10PXkuZWFzaW5nW3RoaXMuZWFzaW5nXShlLHRoaXMub3B0aW9ucy5kdXJhdGlvbiplLDAsMSx0aGlzLm9wdGlvbnMuZHVyYXRpb24pOnRoaXMucG9zPXQ9ZSx0aGlzLm5vdz0odGhpcy5lbmQtdGhpcy5zdGFydCkqdCt0aGlzLnN0YXJ0LHRoaXMub3B0aW9ucy5zdGVwJiZ0aGlzLm9wdGlvbnMuc3RlcC5jYWxsKHRoaXMuZWxlbSx0aGlzLm5vdyx0aGlzKSxuJiZuLnNldD9uLnNldCh0aGlzKTpaZS5wcm9wSG9va3MuX2RlZmF1bHQuc2V0KHRoaXMpLHRoaXN9fSxaZS5wcm90b3R5cGUuaW5pdC5wcm90b3R5cGU9WmUucHJvdG90eXBlLFplLnByb3BIb29rcz17X2RlZmF1bHQ6e2dldDpmdW5jdGlvbihlKXt2YXIgdDtyZXR1cm4gMSE9PWUuZWxlbS5ub2RlVHlwZXx8bnVsbCE9ZS5lbGVtW2UucHJvcF0mJm51bGw9PWUuZWxlbS5zdHlsZVtlLnByb3BdP2UuZWxlbVtlLnByb3BdOih0PXkuY3NzKGUuZWxlbSxlLnByb3AsXCJcIikpJiZcImF1dG9cIiE9PXQ/dDowfSxzZXQ6ZnVuY3Rpb24oZSl7eS5meC5zdGVwW2UucHJvcF0/eS5meC5zdGVwW2UucHJvcF0oZSk6MSE9PWUuZWxlbS5ub2RlVHlwZXx8bnVsbD09ZS5lbGVtLnN0eWxlW3kuY3NzUHJvcHNbZS5wcm9wXV0mJiF5LmNzc0hvb2tzW2UucHJvcF0/ZS5lbGVtW2UucHJvcF09ZS5ub3c6eS5zdHlsZShlLmVsZW0sZS5wcm9wLGUubm93K2UudW5pdCl9fX0sWmUucHJvcEhvb2tzLnNjcm9sbFRvcD1aZS5wcm9wSG9va3Muc2Nyb2xsTGVmdD17c2V0OmZ1bmN0aW9uKGUpe2UuZWxlbS5ub2RlVHlwZSYmZS5lbGVtLnBhcmVudE5vZGUmJihlLmVsZW1bZS5wcm9wXT1lLm5vdyl9fSx5LmVhc2luZz17bGluZWFyOmZ1bmN0aW9uKGUpe3JldHVybiBlfSxzd2luZzpmdW5jdGlvbihlKXtyZXR1cm4uNS1NYXRoLmNvcyhlKk1hdGguUEkpLzJ9LF9kZWZhdWx0Olwic3dpbmdcIn0seS5meD1aZS5wcm90b3R5cGUuaW5pdCx5LmZ4LnN0ZXA9e307dmFyIGV0LHR0LG50PS9eKD86dG9nZ2xlfHNob3d8aGlkZSkkLyxpdD0vcXVldWVIb29rcyQvO2Z1bmN0aW9uIHJ0KCl7dHQmJighMT09PWkuaGlkZGVuJiZlLnJlcXVlc3RBbmltYXRpb25GcmFtZT9lLnJlcXVlc3RBbmltYXRpb25GcmFtZShydCk6ZS5zZXRUaW1lb3V0KHJ0LHkuZnguaW50ZXJ2YWwpLHkuZngudGljaygpKX1mdW5jdGlvbiBvdCgpe3JldHVybiBlLnNldFRpbWVvdXQoZnVuY3Rpb24oKXtldD12b2lkIDB9KSxldD15Lm5vdygpfWZ1bmN0aW9uIHN0KGUsdCl7dmFyIG4saT0wLHI9e2hlaWdodDplfTtmb3IodD10PzE6MDtpPDQ7aSs9Mi10KXJbXCJtYXJnaW5cIisobj1uZVtpXSldPXJbXCJwYWRkaW5nXCIrbl09ZTtyZXR1cm4gdCYmKHIub3BhY2l0eT1yLndpZHRoPWUpLHJ9ZnVuY3Rpb24gYXQoZSx0LG4pe2Zvcih2YXIgaSxyPShjdC50d2VlbmVyc1t0XXx8W10pLmNvbmNhdChjdC50d2VlbmVyc1tcIipcIl0pLG89MCxzPXIubGVuZ3RoO288cztvKyspaWYoaT1yW29dLmNhbGwobix0LGUpKXJldHVybiBpfWZ1bmN0aW9uIHV0KGUsdCxuKXt2YXIgaSxyLG8scyxhLHUsbCxjLGY9XCJ3aWR0aFwiaW4gdHx8XCJoZWlnaHRcImluIHQscD10aGlzLGQ9e30saD1lLnN0eWxlLGc9ZS5ub2RlVHlwZSYmaWUoZSksdj1ZLmdldChlLFwiZnhzaG93XCIpO24ucXVldWV8fChudWxsPT0ocz15Ll9xdWV1ZUhvb2tzKGUsXCJmeFwiKSkudW5xdWV1ZWQmJihzLnVucXVldWVkPTAsYT1zLmVtcHR5LmZpcmUscy5lbXB0eS5maXJlPWZ1bmN0aW9uKCl7cy51bnF1ZXVlZHx8YSgpfSkscy51bnF1ZXVlZCsrLHAuYWx3YXlzKGZ1bmN0aW9uKCl7cC5hbHdheXMoZnVuY3Rpb24oKXtzLnVucXVldWVkLS0seS5xdWV1ZShlLFwiZnhcIikubGVuZ3RofHxzLmVtcHR5LmZpcmUoKX0pfSkpO2ZvcihpIGluIHQpaWYocj10W2ldLG50LnRlc3Qocikpe2lmKGRlbGV0ZSB0W2ldLG89b3x8XCJ0b2dnbGVcIj09PXIscj09PShnP1wiaGlkZVwiOlwic2hvd1wiKSl7aWYoXCJzaG93XCIhPT1yfHwhdnx8dm9pZCAwPT09dltpXSljb250aW51ZTtnPSEwfWRbaV09diYmdltpXXx8eS5zdHlsZShlLGkpfWlmKCh1PSF5LmlzRW1wdHlPYmplY3QodCkpfHwheS5pc0VtcHR5T2JqZWN0KGQpKXtmJiYxPT09ZS5ub2RlVHlwZSYmKG4ub3ZlcmZsb3c9W2gub3ZlcmZsb3csaC5vdmVyZmxvd1gsaC5vdmVyZmxvd1ldLG51bGw9PShsPXYmJnYuZGlzcGxheSkmJihsPVkuZ2V0KGUsXCJkaXNwbGF5XCIpKSxcIm5vbmVcIj09PShjPXkuY3NzKGUsXCJkaXNwbGF5XCIpKSYmKGw/Yz1sOih1ZShbZV0sITApLGw9ZS5zdHlsZS5kaXNwbGF5fHxsLGM9eS5jc3MoZSxcImRpc3BsYXlcIiksdWUoW2VdKSkpLChcImlubGluZVwiPT09Y3x8XCJpbmxpbmUtYmxvY2tcIj09PWMmJm51bGwhPWwpJiZcIm5vbmVcIj09PXkuY3NzKGUsXCJmbG9hdFwiKSYmKHV8fChwLmRvbmUoZnVuY3Rpb24oKXtoLmRpc3BsYXk9bH0pLG51bGw9PWwmJihjPWguZGlzcGxheSxsPVwibm9uZVwiPT09Yz9cIlwiOmMpKSxoLmRpc3BsYXk9XCJpbmxpbmUtYmxvY2tcIikpLG4ub3ZlcmZsb3cmJihoLm92ZXJmbG93PVwiaGlkZGVuXCIscC5hbHdheXMoZnVuY3Rpb24oKXtoLm92ZXJmbG93PW4ub3ZlcmZsb3dbMF0saC5vdmVyZmxvd1g9bi5vdmVyZmxvd1sxXSxoLm92ZXJmbG93WT1uLm92ZXJmbG93WzJdfSkpLHU9ITE7Zm9yKGkgaW4gZCl1fHwodj9cImhpZGRlblwiaW4gdiYmKGc9di5oaWRkZW4pOnY9WS5hY2Nlc3MoZSxcImZ4c2hvd1wiLHtkaXNwbGF5Omx9KSxvJiYodi5oaWRkZW49IWcpLGcmJnVlKFtlXSwhMCkscC5kb25lKGZ1bmN0aW9uKCl7Z3x8dWUoW2VdKSxZLnJlbW92ZShlLFwiZnhzaG93XCIpO2ZvcihpIGluIGQpeS5zdHlsZShlLGksZFtpXSl9KSksdT1hdChnP3ZbaV06MCxpLHApLGkgaW4gdnx8KHZbaV09dS5zdGFydCxnJiYodS5lbmQ9dS5zdGFydCx1LnN0YXJ0PTApKX19ZnVuY3Rpb24gbHQoZSx0KXt2YXIgbixpLHIsbyxzO2ZvcihuIGluIGUpaWYoaT15LmNhbWVsQ2FzZShuKSxyPXRbaV0sbz1lW25dLEFycmF5LmlzQXJyYXkobykmJihyPW9bMV0sbz1lW25dPW9bMF0pLG4hPT1pJiYoZVtpXT1vLGRlbGV0ZSBlW25dKSwocz15LmNzc0hvb2tzW2ldKSYmXCJleHBhbmRcImluIHMpe289cy5leHBhbmQobyksZGVsZXRlIGVbaV07Zm9yKG4gaW4gbyluIGluIGV8fChlW25dPW9bbl0sdFtuXT1yKX1lbHNlIHRbaV09cn1mdW5jdGlvbiBjdChlLHQsbil7dmFyIGkscixvPTAscz1jdC5wcmVmaWx0ZXJzLmxlbmd0aCxhPXkuRGVmZXJyZWQoKS5hbHdheXMoZnVuY3Rpb24oKXtkZWxldGUgdS5lbGVtfSksdT1mdW5jdGlvbigpe2lmKHIpcmV0dXJuITE7Zm9yKHZhciB0PWV0fHxvdCgpLG49TWF0aC5tYXgoMCxsLnN0YXJ0VGltZStsLmR1cmF0aW9uLXQpLGk9MS0obi9sLmR1cmF0aW9ufHwwKSxvPTAscz1sLnR3ZWVucy5sZW5ndGg7bzxzO28rKylsLnR3ZWVuc1tvXS5ydW4oaSk7cmV0dXJuIGEubm90aWZ5V2l0aChlLFtsLGksbl0pLGk8MSYmcz9uOihzfHxhLm5vdGlmeVdpdGgoZSxbbCwxLDBdKSxhLnJlc29sdmVXaXRoKGUsW2xdKSwhMSl9LGw9YS5wcm9taXNlKHtlbGVtOmUscHJvcHM6eS5leHRlbmQoe30sdCksb3B0czp5LmV4dGVuZCghMCx7c3BlY2lhbEVhc2luZzp7fSxlYXNpbmc6eS5lYXNpbmcuX2RlZmF1bHR9LG4pLG9yaWdpbmFsUHJvcGVydGllczp0LG9yaWdpbmFsT3B0aW9uczpuLHN0YXJ0VGltZTpldHx8b3QoKSxkdXJhdGlvbjpuLmR1cmF0aW9uLHR3ZWVuczpbXSxjcmVhdGVUd2VlbjpmdW5jdGlvbih0LG4pe3ZhciBpPXkuVHdlZW4oZSxsLm9wdHMsdCxuLGwub3B0cy5zcGVjaWFsRWFzaW5nW3RdfHxsLm9wdHMuZWFzaW5nKTtyZXR1cm4gbC50d2VlbnMucHVzaChpKSxpfSxzdG9wOmZ1bmN0aW9uKHQpe3ZhciBuPTAsaT10P2wudHdlZW5zLmxlbmd0aDowO2lmKHIpcmV0dXJuIHRoaXM7Zm9yKHI9ITA7bjxpO24rKylsLnR3ZWVuc1tuXS5ydW4oMSk7cmV0dXJuIHQ/KGEubm90aWZ5V2l0aChlLFtsLDEsMF0pLGEucmVzb2x2ZVdpdGgoZSxbbCx0XSkpOmEucmVqZWN0V2l0aChlLFtsLHRdKSx0aGlzfX0pLGM9bC5wcm9wcztmb3IobHQoYyxsLm9wdHMuc3BlY2lhbEVhc2luZyk7bzxzO28rKylpZihpPWN0LnByZWZpbHRlcnNbb10uY2FsbChsLGUsYyxsLm9wdHMpKXJldHVybiB5LmlzRnVuY3Rpb24oaS5zdG9wKSYmKHkuX3F1ZXVlSG9va3MobC5lbGVtLGwub3B0cy5xdWV1ZSkuc3RvcD15LnByb3h5KGkuc3RvcCxpKSksaTtyZXR1cm4geS5tYXAoYyxhdCxsKSx5LmlzRnVuY3Rpb24obC5vcHRzLnN0YXJ0KSYmbC5vcHRzLnN0YXJ0LmNhbGwoZSxsKSxsLnByb2dyZXNzKGwub3B0cy5wcm9ncmVzcykuZG9uZShsLm9wdHMuZG9uZSxsLm9wdHMuY29tcGxldGUpLmZhaWwobC5vcHRzLmZhaWwpLmFsd2F5cyhsLm9wdHMuYWx3YXlzKSx5LmZ4LnRpbWVyKHkuZXh0ZW5kKHUse2VsZW06ZSxhbmltOmwscXVldWU6bC5vcHRzLnF1ZXVlfSkpLGx9eS5BbmltYXRpb249eS5leHRlbmQoY3Qse3R3ZWVuZXJzOntcIipcIjpbZnVuY3Rpb24oZSx0KXt2YXIgbj10aGlzLmNyZWF0ZVR3ZWVuKGUsdCk7cmV0dXJuIG9lKG4uZWxlbSxlLHRlLmV4ZWModCksbiksbn1dfSx0d2VlbmVyOmZ1bmN0aW9uKGUsdCl7eS5pc0Z1bmN0aW9uKGUpPyh0PWUsZT1bXCIqXCJdKTplPWUubWF0Y2goSSk7Zm9yKHZhciBuLGk9MCxyPWUubGVuZ3RoO2k8cjtpKyspbj1lW2ldLGN0LnR3ZWVuZXJzW25dPWN0LnR3ZWVuZXJzW25dfHxbXSxjdC50d2VlbmVyc1tuXS51bnNoaWZ0KHQpfSxwcmVmaWx0ZXJzOlt1dF0scHJlZmlsdGVyOmZ1bmN0aW9uKGUsdCl7dD9jdC5wcmVmaWx0ZXJzLnVuc2hpZnQoZSk6Y3QucHJlZmlsdGVycy5wdXNoKGUpfX0pLHkuc3BlZWQ9ZnVuY3Rpb24oZSx0LG4pe3ZhciBpPWUmJlwib2JqZWN0XCI9PXR5cGVvZiBlP3kuZXh0ZW5kKHt9LGUpOntjb21wbGV0ZTpufHwhbiYmdHx8eS5pc0Z1bmN0aW9uKGUpJiZlLGR1cmF0aW9uOmUsZWFzaW5nOm4mJnR8fHQmJiF5LmlzRnVuY3Rpb24odCkmJnR9O3JldHVybiB5LmZ4Lm9mZj9pLmR1cmF0aW9uPTA6XCJudW1iZXJcIiE9dHlwZW9mIGkuZHVyYXRpb24mJihpLmR1cmF0aW9uIGluIHkuZnguc3BlZWRzP2kuZHVyYXRpb249eS5meC5zcGVlZHNbaS5kdXJhdGlvbl06aS5kdXJhdGlvbj15LmZ4LnNwZWVkcy5fZGVmYXVsdCksbnVsbCE9aS5xdWV1ZSYmITAhPT1pLnF1ZXVlfHwoaS5xdWV1ZT1cImZ4XCIpLGkub2xkPWkuY29tcGxldGUsaS5jb21wbGV0ZT1mdW5jdGlvbigpe3kuaXNGdW5jdGlvbihpLm9sZCkmJmkub2xkLmNhbGwodGhpcyksaS5xdWV1ZSYmeS5kZXF1ZXVlKHRoaXMsaS5xdWV1ZSl9LGl9LHkuZm4uZXh0ZW5kKHtmYWRlVG86ZnVuY3Rpb24oZSx0LG4saSl7cmV0dXJuIHRoaXMuZmlsdGVyKGllKS5jc3MoXCJvcGFjaXR5XCIsMCkuc2hvdygpLmVuZCgpLmFuaW1hdGUoe29wYWNpdHk6dH0sZSxuLGkpfSxhbmltYXRlOmZ1bmN0aW9uKGUsdCxuLGkpe3ZhciByPXkuaXNFbXB0eU9iamVjdChlKSxvPXkuc3BlZWQodCxuLGkpLHM9ZnVuY3Rpb24oKXt2YXIgdD1jdCh0aGlzLHkuZXh0ZW5kKHt9LGUpLG8pOyhyfHxZLmdldCh0aGlzLFwiZmluaXNoXCIpKSYmdC5zdG9wKCEwKX07cmV0dXJuIHMuZmluaXNoPXMscnx8ITE9PT1vLnF1ZXVlP3RoaXMuZWFjaChzKTp0aGlzLnF1ZXVlKG8ucXVldWUscyl9LHN0b3A6ZnVuY3Rpb24oZSx0LG4pe3ZhciBpPWZ1bmN0aW9uKGUpe3ZhciB0PWUuc3RvcDtkZWxldGUgZS5zdG9wLHQobil9O3JldHVyblwic3RyaW5nXCIhPXR5cGVvZiBlJiYobj10LHQ9ZSxlPXZvaWQgMCksdCYmITEhPT1lJiZ0aGlzLnF1ZXVlKGV8fFwiZnhcIixbXSksdGhpcy5lYWNoKGZ1bmN0aW9uKCl7dmFyIHQ9ITAscj1udWxsIT1lJiZlK1wicXVldWVIb29rc1wiLG89eS50aW1lcnMscz1ZLmdldCh0aGlzKTtpZihyKXNbcl0mJnNbcl0uc3RvcCYmaShzW3JdKTtlbHNlIGZvcihyIGluIHMpc1tyXSYmc1tyXS5zdG9wJiZpdC50ZXN0KHIpJiZpKHNbcl0pO2ZvcihyPW8ubGVuZ3RoO3ItLTspb1tyXS5lbGVtIT09dGhpc3x8bnVsbCE9ZSYmb1tyXS5xdWV1ZSE9PWV8fChvW3JdLmFuaW0uc3RvcChuKSx0PSExLG8uc3BsaWNlKHIsMSkpOyF0JiZufHx5LmRlcXVldWUodGhpcyxlKX0pfSxmaW5pc2g6ZnVuY3Rpb24oZSl7cmV0dXJuITEhPT1lJiYoZT1lfHxcImZ4XCIpLHRoaXMuZWFjaChmdW5jdGlvbigpe3ZhciB0LG49WS5nZXQodGhpcyksaT1uW2UrXCJxdWV1ZVwiXSxyPW5bZStcInF1ZXVlSG9va3NcIl0sbz15LnRpbWVycyxzPWk/aS5sZW5ndGg6MDtmb3Iobi5maW5pc2g9ITAseS5xdWV1ZSh0aGlzLGUsW10pLHImJnIuc3RvcCYmci5zdG9wLmNhbGwodGhpcywhMCksdD1vLmxlbmd0aDt0LS07KW9bdF0uZWxlbT09PXRoaXMmJm9bdF0ucXVldWU9PT1lJiYob1t0XS5hbmltLnN0b3AoITApLG8uc3BsaWNlKHQsMSkpO2Zvcih0PTA7dDxzO3QrKylpW3RdJiZpW3RdLmZpbmlzaCYmaVt0XS5maW5pc2guY2FsbCh0aGlzKTtkZWxldGUgbi5maW5pc2h9KX19KSx5LmVhY2goW1widG9nZ2xlXCIsXCJzaG93XCIsXCJoaWRlXCJdLGZ1bmN0aW9uKGUsdCl7dmFyIG49eS5mblt0XTt5LmZuW3RdPWZ1bmN0aW9uKGUsaSxyKXtyZXR1cm4gbnVsbD09ZXx8XCJib29sZWFuXCI9PXR5cGVvZiBlP24uYXBwbHkodGhpcyxhcmd1bWVudHMpOnRoaXMuYW5pbWF0ZShzdCh0LCEwKSxlLGkscil9fSkseS5lYWNoKHtzbGlkZURvd246c3QoXCJzaG93XCIpLHNsaWRlVXA6c3QoXCJoaWRlXCIpLHNsaWRlVG9nZ2xlOnN0KFwidG9nZ2xlXCIpLGZhZGVJbjp7b3BhY2l0eTpcInNob3dcIn0sZmFkZU91dDp7b3BhY2l0eTpcImhpZGVcIn0sZmFkZVRvZ2dsZTp7b3BhY2l0eTpcInRvZ2dsZVwifX0sZnVuY3Rpb24oZSx0KXt5LmZuW2VdPWZ1bmN0aW9uKGUsbixpKXtyZXR1cm4gdGhpcy5hbmltYXRlKHQsZSxuLGkpfX0pLHkudGltZXJzPVtdLHkuZngudGljaz1mdW5jdGlvbigpe3ZhciBlLHQ9MCxuPXkudGltZXJzO2ZvcihldD15Lm5vdygpO3Q8bi5sZW5ndGg7dCsrKShlPW5bdF0pKCl8fG5bdF0hPT1lfHxuLnNwbGljZSh0LS0sMSk7bi5sZW5ndGh8fHkuZnguc3RvcCgpLGV0PXZvaWQgMH0seS5meC50aW1lcj1mdW5jdGlvbihlKXt5LnRpbWVycy5wdXNoKGUpLHkuZnguc3RhcnQoKX0seS5meC5pbnRlcnZhbD0xMyx5LmZ4LnN0YXJ0PWZ1bmN0aW9uKCl7dHR8fCh0dD0hMCxydCgpKX0seS5meC5zdG9wPWZ1bmN0aW9uKCl7dHQ9bnVsbH0seS5meC5zcGVlZHM9e3Nsb3c6NjAwLGZhc3Q6MjAwLF9kZWZhdWx0OjQwMH0seS5mbi5kZWxheT1mdW5jdGlvbih0LG4pe3JldHVybiB0PXkuZng/eS5meC5zcGVlZHNbdF18fHQ6dCxuPW58fFwiZnhcIix0aGlzLnF1ZXVlKG4sZnVuY3Rpb24obixpKXt2YXIgcj1lLnNldFRpbWVvdXQobix0KTtpLnN0b3A9ZnVuY3Rpb24oKXtlLmNsZWFyVGltZW91dChyKX19KX0sZnVuY3Rpb24oKXt2YXIgZT1pLmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKSx0PWkuY3JlYXRlRWxlbWVudChcInNlbGVjdFwiKS5hcHBlbmRDaGlsZChpLmNyZWF0ZUVsZW1lbnQoXCJvcHRpb25cIikpO2UudHlwZT1cImNoZWNrYm94XCIsaC5jaGVja09uPVwiXCIhPT1lLnZhbHVlLGgub3B0U2VsZWN0ZWQ9dC5zZWxlY3RlZCwoZT1pLmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKSkudmFsdWU9XCJ0XCIsZS50eXBlPVwicmFkaW9cIixoLnJhZGlvVmFsdWU9XCJ0XCI9PT1lLnZhbHVlfSgpO3ZhciBmdCxwdD15LmV4cHIuYXR0ckhhbmRsZTt5LmZuLmV4dGVuZCh7YXR0cjpmdW5jdGlvbihlLHQpe3JldHVybiBVKHRoaXMseS5hdHRyLGUsdCxhcmd1bWVudHMubGVuZ3RoPjEpfSxyZW1vdmVBdHRyOmZ1bmN0aW9uKGUpe3JldHVybiB0aGlzLmVhY2goZnVuY3Rpb24oKXt5LnJlbW92ZUF0dHIodGhpcyxlKX0pfX0pLHkuZXh0ZW5kKHthdHRyOmZ1bmN0aW9uKGUsdCxuKXt2YXIgaSxyLG89ZS5ub2RlVHlwZTtpZigzIT09byYmOCE9PW8mJjIhPT1vKXJldHVyblwidW5kZWZpbmVkXCI9PXR5cGVvZiBlLmdldEF0dHJpYnV0ZT95LnByb3AoZSx0LG4pOigxPT09byYmeS5pc1hNTERvYyhlKXx8KHI9eS5hdHRySG9va3NbdC50b0xvd2VyQ2FzZSgpXXx8KHkuZXhwci5tYXRjaC5ib29sLnRlc3QodCk/ZnQ6dm9pZCAwKSksdm9pZCAwIT09bj9udWxsPT09bj92b2lkIHkucmVtb3ZlQXR0cihlLHQpOnImJlwic2V0XCJpbiByJiZ2b2lkIDAhPT0oaT1yLnNldChlLG4sdCkpP2k6KGUuc2V0QXR0cmlidXRlKHQsbitcIlwiKSxuKTpyJiZcImdldFwiaW4gciYmbnVsbCE9PShpPXIuZ2V0KGUsdCkpP2k6bnVsbD09KGk9eS5maW5kLmF0dHIoZSx0KSk/dm9pZCAwOmkpfSxhdHRySG9va3M6e3R5cGU6e3NldDpmdW5jdGlvbihlLHQpe2lmKCFoLnJhZGlvVmFsdWUmJlwicmFkaW9cIj09PXQmJkQoZSxcImlucHV0XCIpKXt2YXIgbj1lLnZhbHVlO3JldHVybiBlLnNldEF0dHJpYnV0ZShcInR5cGVcIix0KSxuJiYoZS52YWx1ZT1uKSx0fX19fSxyZW1vdmVBdHRyOmZ1bmN0aW9uKGUsdCl7dmFyIG4saT0wLHI9dCYmdC5tYXRjaChJKTtpZihyJiYxPT09ZS5ub2RlVHlwZSl3aGlsZShuPXJbaSsrXSllLnJlbW92ZUF0dHJpYnV0ZShuKX19KSxmdD17c2V0OmZ1bmN0aW9uKGUsdCxuKXtyZXR1cm4hMT09PXQ/eS5yZW1vdmVBdHRyKGUsbik6ZS5zZXRBdHRyaWJ1dGUobixuKSxufX0seS5lYWNoKHkuZXhwci5tYXRjaC5ib29sLnNvdXJjZS5tYXRjaCgvXFx3Ky9nKSxmdW5jdGlvbihlLHQpe3ZhciBuPXB0W3RdfHx5LmZpbmQuYXR0cjtwdFt0XT1mdW5jdGlvbihlLHQsaSl7dmFyIHIsbyxzPXQudG9Mb3dlckNhc2UoKTtyZXR1cm4gaXx8KG89cHRbc10scHRbc109cixyPW51bGwhPW4oZSx0LGkpP3M6bnVsbCxwdFtzXT1vKSxyfX0pO3ZhciBkdD0vXig/OmlucHV0fHNlbGVjdHx0ZXh0YXJlYXxidXR0b24pJC9pLGh0PS9eKD86YXxhcmVhKSQvaTt5LmZuLmV4dGVuZCh7cHJvcDpmdW5jdGlvbihlLHQpe3JldHVybiBVKHRoaXMseS5wcm9wLGUsdCxhcmd1bWVudHMubGVuZ3RoPjEpfSxyZW1vdmVQcm9wOmZ1bmN0aW9uKGUpe3JldHVybiB0aGlzLmVhY2goZnVuY3Rpb24oKXtkZWxldGUgdGhpc1t5LnByb3BGaXhbZV18fGVdfSl9fSkseS5leHRlbmQoe3Byb3A6ZnVuY3Rpb24oZSx0LG4pe3ZhciBpLHIsbz1lLm5vZGVUeXBlO2lmKDMhPT1vJiY4IT09byYmMiE9PW8pcmV0dXJuIDE9PT1vJiZ5LmlzWE1MRG9jKGUpfHwodD15LnByb3BGaXhbdF18fHQscj15LnByb3BIb29rc1t0XSksdm9pZCAwIT09bj9yJiZcInNldFwiaW4gciYmdm9pZCAwIT09KGk9ci5zZXQoZSxuLHQpKT9pOmVbdF09bjpyJiZcImdldFwiaW4gciYmbnVsbCE9PShpPXIuZ2V0KGUsdCkpP2k6ZVt0XX0scHJvcEhvb2tzOnt0YWJJbmRleDp7Z2V0OmZ1bmN0aW9uKGUpe3ZhciB0PXkuZmluZC5hdHRyKGUsXCJ0YWJpbmRleFwiKTtyZXR1cm4gdD9wYXJzZUludCh0LDEwKTpkdC50ZXN0KGUubm9kZU5hbWUpfHxodC50ZXN0KGUubm9kZU5hbWUpJiZlLmhyZWY/MDotMX19fSxwcm9wRml4Ontmb3I6XCJodG1sRm9yXCIsY2xhc3M6XCJjbGFzc05hbWVcIn19KSxoLm9wdFNlbGVjdGVkfHwoeS5wcm9wSG9va3Muc2VsZWN0ZWQ9e2dldDpmdW5jdGlvbihlKXt2YXIgdD1lLnBhcmVudE5vZGU7cmV0dXJuIHQmJnQucGFyZW50Tm9kZSYmdC5wYXJlbnROb2RlLnNlbGVjdGVkSW5kZXgsbnVsbH0sc2V0OmZ1bmN0aW9uKGUpe3ZhciB0PWUucGFyZW50Tm9kZTt0JiYodC5zZWxlY3RlZEluZGV4LHQucGFyZW50Tm9kZSYmdC5wYXJlbnROb2RlLnNlbGVjdGVkSW5kZXgpfX0pLHkuZWFjaChbXCJ0YWJJbmRleFwiLFwicmVhZE9ubHlcIixcIm1heExlbmd0aFwiLFwiY2VsbFNwYWNpbmdcIixcImNlbGxQYWRkaW5nXCIsXCJyb3dTcGFuXCIsXCJjb2xTcGFuXCIsXCJ1c2VNYXBcIixcImZyYW1lQm9yZGVyXCIsXCJjb250ZW50RWRpdGFibGVcIl0sZnVuY3Rpb24oKXt5LnByb3BGaXhbdGhpcy50b0xvd2VyQ2FzZSgpXT10aGlzfSk7ZnVuY3Rpb24gZ3QoZSl7cmV0dXJuKGUubWF0Y2goSSl8fFtdKS5qb2luKFwiIFwiKX1mdW5jdGlvbiB2dChlKXtyZXR1cm4gZS5nZXRBdHRyaWJ1dGUmJmUuZ2V0QXR0cmlidXRlKFwiY2xhc3NcIil8fFwiXCJ9eS5mbi5leHRlbmQoe2FkZENsYXNzOmZ1bmN0aW9uKGUpe3ZhciB0LG4saSxyLG8scyxhLHU9MDtpZih5LmlzRnVuY3Rpb24oZSkpcmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbih0KXt5KHRoaXMpLmFkZENsYXNzKGUuY2FsbCh0aGlzLHQsdnQodGhpcykpKX0pO2lmKFwic3RyaW5nXCI9PXR5cGVvZiBlJiZlKXt0PWUubWF0Y2goSSl8fFtdO3doaWxlKG49dGhpc1t1KytdKWlmKHI9dnQobiksaT0xPT09bi5ub2RlVHlwZSYmXCIgXCIrZ3QocikrXCIgXCIpe3M9MDt3aGlsZShvPXRbcysrXSlpLmluZGV4T2YoXCIgXCIrbytcIiBcIik8MCYmKGkrPW8rXCIgXCIpO3IhPT0oYT1ndChpKSkmJm4uc2V0QXR0cmlidXRlKFwiY2xhc3NcIixhKX19cmV0dXJuIHRoaXN9LHJlbW92ZUNsYXNzOmZ1bmN0aW9uKGUpe3ZhciB0LG4saSxyLG8scyxhLHU9MDtpZih5LmlzRnVuY3Rpb24oZSkpcmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbih0KXt5KHRoaXMpLnJlbW92ZUNsYXNzKGUuY2FsbCh0aGlzLHQsdnQodGhpcykpKX0pO2lmKCFhcmd1bWVudHMubGVuZ3RoKXJldHVybiB0aGlzLmF0dHIoXCJjbGFzc1wiLFwiXCIpO2lmKFwic3RyaW5nXCI9PXR5cGVvZiBlJiZlKXt0PWUubWF0Y2goSSl8fFtdO3doaWxlKG49dGhpc1t1KytdKWlmKHI9dnQobiksaT0xPT09bi5ub2RlVHlwZSYmXCIgXCIrZ3QocikrXCIgXCIpe3M9MDt3aGlsZShvPXRbcysrXSl3aGlsZShpLmluZGV4T2YoXCIgXCIrbytcIiBcIik+LTEpaT1pLnJlcGxhY2UoXCIgXCIrbytcIiBcIixcIiBcIik7ciE9PShhPWd0KGkpKSYmbi5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLGEpfX1yZXR1cm4gdGhpc30sdG9nZ2xlQ2xhc3M6ZnVuY3Rpb24oZSx0KXt2YXIgbj10eXBlb2YgZTtyZXR1cm5cImJvb2xlYW5cIj09dHlwZW9mIHQmJlwic3RyaW5nXCI9PT1uP3Q/dGhpcy5hZGRDbGFzcyhlKTp0aGlzLnJlbW92ZUNsYXNzKGUpOnkuaXNGdW5jdGlvbihlKT90aGlzLmVhY2goZnVuY3Rpb24obil7eSh0aGlzKS50b2dnbGVDbGFzcyhlLmNhbGwodGhpcyxuLHZ0KHRoaXMpLHQpLHQpfSk6dGhpcy5lYWNoKGZ1bmN0aW9uKCl7dmFyIHQsaSxyLG87aWYoXCJzdHJpbmdcIj09PW4pe2k9MCxyPXkodGhpcyksbz1lLm1hdGNoKEkpfHxbXTt3aGlsZSh0PW9baSsrXSlyLmhhc0NsYXNzKHQpP3IucmVtb3ZlQ2xhc3ModCk6ci5hZGRDbGFzcyh0KX1lbHNlIHZvaWQgMCE9PWUmJlwiYm9vbGVhblwiIT09bnx8KCh0PXZ0KHRoaXMpKSYmWS5zZXQodGhpcyxcIl9fY2xhc3NOYW1lX19cIix0KSx0aGlzLnNldEF0dHJpYnV0ZSYmdGhpcy5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLHR8fCExPT09ZT9cIlwiOlkuZ2V0KHRoaXMsXCJfX2NsYXNzTmFtZV9fXCIpfHxcIlwiKSl9KX0saGFzQ2xhc3M6ZnVuY3Rpb24oZSl7dmFyIHQsbixpPTA7dD1cIiBcIitlK1wiIFwiO3doaWxlKG49dGhpc1tpKytdKWlmKDE9PT1uLm5vZGVUeXBlJiYoXCIgXCIrZ3QodnQobikpK1wiIFwiKS5pbmRleE9mKHQpPi0xKXJldHVybiEwO3JldHVybiExfX0pO3ZhciBtdD0vXFxyL2c7eS5mbi5leHRlbmQoe3ZhbDpmdW5jdGlvbihlKXt2YXIgdCxuLGkscj10aGlzWzBdO3tpZihhcmd1bWVudHMubGVuZ3RoKXJldHVybiBpPXkuaXNGdW5jdGlvbihlKSx0aGlzLmVhY2goZnVuY3Rpb24obil7dmFyIHI7MT09PXRoaXMubm9kZVR5cGUmJihudWxsPT0ocj1pP2UuY2FsbCh0aGlzLG4seSh0aGlzKS52YWwoKSk6ZSk/cj1cIlwiOlwibnVtYmVyXCI9PXR5cGVvZiByP3IrPVwiXCI6QXJyYXkuaXNBcnJheShyKSYmKHI9eS5tYXAocixmdW5jdGlvbihlKXtyZXR1cm4gbnVsbD09ZT9cIlwiOmUrXCJcIn0pKSwodD15LnZhbEhvb2tzW3RoaXMudHlwZV18fHkudmFsSG9va3NbdGhpcy5ub2RlTmFtZS50b0xvd2VyQ2FzZSgpXSkmJlwic2V0XCJpbiB0JiZ2b2lkIDAhPT10LnNldCh0aGlzLHIsXCJ2YWx1ZVwiKXx8KHRoaXMudmFsdWU9cikpfSk7aWYocilyZXR1cm4odD15LnZhbEhvb2tzW3IudHlwZV18fHkudmFsSG9va3Nbci5ub2RlTmFtZS50b0xvd2VyQ2FzZSgpXSkmJlwiZ2V0XCJpbiB0JiZ2b2lkIDAhPT0obj10LmdldChyLFwidmFsdWVcIikpP246XCJzdHJpbmdcIj09dHlwZW9mKG49ci52YWx1ZSk/bi5yZXBsYWNlKG10LFwiXCIpOm51bGw9PW4/XCJcIjpufX19KSx5LmV4dGVuZCh7dmFsSG9va3M6e29wdGlvbjp7Z2V0OmZ1bmN0aW9uKGUpe3ZhciB0PXkuZmluZC5hdHRyKGUsXCJ2YWx1ZVwiKTtyZXR1cm4gbnVsbCE9dD90Omd0KHkudGV4dChlKSl9fSxzZWxlY3Q6e2dldDpmdW5jdGlvbihlKXt2YXIgdCxuLGkscj1lLm9wdGlvbnMsbz1lLnNlbGVjdGVkSW5kZXgscz1cInNlbGVjdC1vbmVcIj09PWUudHlwZSxhPXM/bnVsbDpbXSx1PXM/bysxOnIubGVuZ3RoO2ZvcihpPW88MD91OnM/bzowO2k8dTtpKyspaWYoKChuPXJbaV0pLnNlbGVjdGVkfHxpPT09bykmJiFuLmRpc2FibGVkJiYoIW4ucGFyZW50Tm9kZS5kaXNhYmxlZHx8IUQobi5wYXJlbnROb2RlLFwib3B0Z3JvdXBcIikpKXtpZih0PXkobikudmFsKCkscylyZXR1cm4gdDthLnB1c2godCl9cmV0dXJuIGF9LHNldDpmdW5jdGlvbihlLHQpe3ZhciBuLGkscj1lLm9wdGlvbnMsbz15Lm1ha2VBcnJheSh0KSxzPXIubGVuZ3RoO3doaWxlKHMtLSkoKGk9cltzXSkuc2VsZWN0ZWQ9eS5pbkFycmF5KHkudmFsSG9va3Mub3B0aW9uLmdldChpKSxvKT4tMSkmJihuPSEwKTtyZXR1cm4gbnx8KGUuc2VsZWN0ZWRJbmRleD0tMSksb319fX0pLHkuZWFjaChbXCJyYWRpb1wiLFwiY2hlY2tib3hcIl0sZnVuY3Rpb24oKXt5LnZhbEhvb2tzW3RoaXNdPXtzZXQ6ZnVuY3Rpb24oZSx0KXtpZihBcnJheS5pc0FycmF5KHQpKXJldHVybiBlLmNoZWNrZWQ9eS5pbkFycmF5KHkoZSkudmFsKCksdCk+LTF9fSxoLmNoZWNrT258fCh5LnZhbEhvb2tzW3RoaXNdLmdldD1mdW5jdGlvbihlKXtyZXR1cm4gbnVsbD09PWUuZ2V0QXR0cmlidXRlKFwidmFsdWVcIik/XCJvblwiOmUudmFsdWV9KX0pO3ZhciB5dD0vXig/OmZvY3VzaW5mb2N1c3xmb2N1c291dGJsdXIpJC8seHQ9ZnVuY3Rpb24oZSl7ZS5zdG9wUHJvcGFnYXRpb24oKX07eS5leHRlbmQoeS5ldmVudCx7dHJpZ2dlcjpmdW5jdGlvbih0LG4scixvKXt2YXIgcyxhLHUsbCxjLHAsZCxoLHY9W3J8fGldLG09Zi5jYWxsKHQsXCJ0eXBlXCIpP3QudHlwZTp0LHg9Zi5jYWxsKHQsXCJuYW1lc3BhY2VcIik/dC5uYW1lc3BhY2Uuc3BsaXQoXCIuXCIpOltdO2lmKGE9aD11PXI9cnx8aSwzIT09ci5ub2RlVHlwZSYmOCE9PXIubm9kZVR5cGUmJiF5dC50ZXN0KG0reS5ldmVudC50cmlnZ2VyZWQpJiYobS5pbmRleE9mKFwiLlwiKT4tMSYmKG09KHg9bS5zcGxpdChcIi5cIikpLnNoaWZ0KCkseC5zb3J0KCkpLGM9bS5pbmRleE9mKFwiOlwiKTwwJiZcIm9uXCIrbSx0PXRbeS5leHBhbmRvXT90Om5ldyB5LkV2ZW50KG0sXCJvYmplY3RcIj09dHlwZW9mIHQmJnQpLHQuaXNUcmlnZ2VyPW8/MjozLHQubmFtZXNwYWNlPXguam9pbihcIi5cIiksdC5ybmFtZXNwYWNlPXQubmFtZXNwYWNlP25ldyBSZWdFeHAoXCIoXnxcXFxcLilcIit4LmpvaW4oXCJcXFxcLig/Oi4qXFxcXC58KVwiKStcIihcXFxcLnwkKVwiKTpudWxsLHQucmVzdWx0PXZvaWQgMCx0LnRhcmdldHx8KHQudGFyZ2V0PXIpLG49bnVsbD09bj9bdF06eS5tYWtlQXJyYXkobixbdF0pLGQ9eS5ldmVudC5zcGVjaWFsW21dfHx7fSxvfHwhZC50cmlnZ2VyfHwhMSE9PWQudHJpZ2dlci5hcHBseShyLG4pKSl7aWYoIW8mJiFkLm5vQnViYmxlJiYhZyhyKSl7Zm9yKGw9ZC5kZWxlZ2F0ZVR5cGV8fG0seXQudGVzdChsK20pfHwoYT1hLnBhcmVudE5vZGUpO2E7YT1hLnBhcmVudE5vZGUpdi5wdXNoKGEpLHU9YTt1PT09KHIub3duZXJEb2N1bWVudHx8aSkmJnYucHVzaCh1LmRlZmF1bHRWaWV3fHx1LnBhcmVudFdpbmRvd3x8ZSl9cz0wO3doaWxlKChhPXZbcysrXSkmJiF0LmlzUHJvcGFnYXRpb25TdG9wcGVkKCkpaD1hLHQudHlwZT1zPjE/bDpkLmJpbmRUeXBlfHxtLChwPShZLmdldChhLFwiZXZlbnRzXCIpfHx7fSlbdC50eXBlXSYmWS5nZXQoYSxcImhhbmRsZVwiKSkmJnAuYXBwbHkoYSxuKSwocD1jJiZhW2NdKSYmcC5hcHBseSYmWChhKSYmKHQucmVzdWx0PXAuYXBwbHkoYSxuKSwhMT09PXQucmVzdWx0JiZ0LnByZXZlbnREZWZhdWx0KCkpO3JldHVybiB0LnR5cGU9bSxvfHx0LmlzRGVmYXVsdFByZXZlbnRlZCgpfHxkLl9kZWZhdWx0JiYhMSE9PWQuX2RlZmF1bHQuYXBwbHkodi5wb3AoKSxuKXx8IVgocil8fGMmJnkuaXNGdW5jdGlvbihyW21dKSYmIWcocikmJigodT1yW2NdKSYmKHJbY109bnVsbCkseS5ldmVudC50cmlnZ2VyZWQ9bSx0LmlzUHJvcGFnYXRpb25TdG9wcGVkKCkmJmguYWRkRXZlbnRMaXN0ZW5lcihtLHh0KSxyW21dKCksdC5pc1Byb3BhZ2F0aW9uU3RvcHBlZCgpJiZoLnJlbW92ZUV2ZW50TGlzdGVuZXIobSx4dCkseS5ldmVudC50cmlnZ2VyZWQ9dm9pZCAwLHUmJihyW2NdPXUpKSx0LnJlc3VsdH19LHNpbXVsYXRlOmZ1bmN0aW9uKGUsdCxuKXt2YXIgaT15LmV4dGVuZChuZXcgeS5FdmVudCxuLHt0eXBlOmUsaXNTaW11bGF0ZWQ6ITB9KTt5LmV2ZW50LnRyaWdnZXIoaSxudWxsLHQpfX0pLHkuZm4uZXh0ZW5kKHt0cmlnZ2VyOmZ1bmN0aW9uKGUsdCl7cmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbigpe3kuZXZlbnQudHJpZ2dlcihlLHQsdGhpcyl9KX0sdHJpZ2dlckhhbmRsZXI6ZnVuY3Rpb24oZSx0KXt2YXIgbj10aGlzWzBdO2lmKG4pcmV0dXJuIHkuZXZlbnQudHJpZ2dlcihlLHQsbiwhMCl9fSkseS5lYWNoKFwiYmx1ciBmb2N1cyBmb2N1c2luIGZvY3Vzb3V0IHJlc2l6ZSBzY3JvbGwgY2xpY2sgZGJsY2xpY2sgbW91c2Vkb3duIG1vdXNldXAgbW91c2Vtb3ZlIG1vdXNlb3ZlciBtb3VzZW91dCBtb3VzZWVudGVyIG1vdXNlbGVhdmUgY2hhbmdlIHNlbGVjdCBzdWJtaXQga2V5ZG93biBrZXlwcmVzcyBrZXl1cCBjb250ZXh0bWVudVwiLnNwbGl0KFwiIFwiKSxmdW5jdGlvbihlLHQpe3kuZm5bdF09ZnVuY3Rpb24oZSxuKXtyZXR1cm4gYXJndW1lbnRzLmxlbmd0aD4wP3RoaXMub24odCxudWxsLGUsbik6dGhpcy50cmlnZ2VyKHQpfX0pLHkuZm4uZXh0ZW5kKHtob3ZlcjpmdW5jdGlvbihlLHQpe3JldHVybiB0aGlzLm1vdXNlZW50ZXIoZSkubW91c2VsZWF2ZSh0fHxlKX19KSxoLmZvY3VzaW49XCJvbmZvY3VzaW5cImluIGUsaC5mb2N1c2lufHx5LmVhY2goe2ZvY3VzOlwiZm9jdXNpblwiLGJsdXI6XCJmb2N1c291dFwifSxmdW5jdGlvbihlLHQpe3ZhciBuPWZ1bmN0aW9uKGUpe3kuZXZlbnQuc2ltdWxhdGUodCxlLnRhcmdldCx5LmV2ZW50LmZpeChlKSl9O3kuZXZlbnQuc3BlY2lhbFt0XT17c2V0dXA6ZnVuY3Rpb24oKXt2YXIgaT10aGlzLm93bmVyRG9jdW1lbnR8fHRoaXMscj1ZLmFjY2VzcyhpLHQpO3J8fGkuYWRkRXZlbnRMaXN0ZW5lcihlLG4sITApLFkuYWNjZXNzKGksdCwocnx8MCkrMSl9LHRlYXJkb3duOmZ1bmN0aW9uKCl7dmFyIGk9dGhpcy5vd25lckRvY3VtZW50fHx0aGlzLHI9WS5hY2Nlc3MoaSx0KS0xO3I/WS5hY2Nlc3MoaSx0LHIpOihpLnJlbW92ZUV2ZW50TGlzdGVuZXIoZSxuLCEwKSxZLnJlbW92ZShpLHQpKX19fSk7dmFyIGJ0PS9cXFtcXF0kLyx3dD0vXFxyP1xcbi9nLEN0PS9eKD86c3VibWl0fGJ1dHRvbnxpbWFnZXxyZXNldHxmaWxlKSQvaSxUdD0vXig/OmlucHV0fHNlbGVjdHx0ZXh0YXJlYXxrZXlnZW4pL2k7ZnVuY3Rpb24ga3QoZSx0LG4saSl7dmFyIHI7aWYoQXJyYXkuaXNBcnJheSh0KSl5LmVhY2godCxmdW5jdGlvbih0LHIpe258fGJ0LnRlc3QoZSk/aShlLHIpOmt0KGUrXCJbXCIrKFwib2JqZWN0XCI9PXR5cGVvZiByJiZudWxsIT1yP3Q6XCJcIikrXCJdXCIscixuLGkpfSk7ZWxzZSBpZihufHxcIm9iamVjdFwiIT09eS50eXBlKHQpKWkoZSx0KTtlbHNlIGZvcihyIGluIHQpa3QoZStcIltcIityK1wiXVwiLHRbcl0sbixpKX15LnBhcmFtPWZ1bmN0aW9uKGUsdCl7dmFyIG4saT1bXSxyPWZ1bmN0aW9uKGUsdCl7dmFyIG49eS5pc0Z1bmN0aW9uKHQpP3QoKTp0O2lbaS5sZW5ndGhdPWVuY29kZVVSSUNvbXBvbmVudChlKStcIj1cIitlbmNvZGVVUklDb21wb25lbnQobnVsbD09bj9cIlwiOm4pfTtpZihBcnJheS5pc0FycmF5KGUpfHxlLmpxdWVyeSYmIXkuaXNQbGFpbk9iamVjdChlKSl5LmVhY2goZSxmdW5jdGlvbigpe3IodGhpcy5uYW1lLHRoaXMudmFsdWUpfSk7ZWxzZSBmb3IobiBpbiBlKWt0KG4sZVtuXSx0LHIpO3JldHVybiBpLmpvaW4oXCImXCIpfSx5LmZuLmV4dGVuZCh7c2VyaWFsaXplOmZ1bmN0aW9uKCl7cmV0dXJuIHkucGFyYW0odGhpcy5zZXJpYWxpemVBcnJheSgpKX0sc2VyaWFsaXplQXJyYXk6ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24oKXt2YXIgZT15LnByb3AodGhpcyxcImVsZW1lbnRzXCIpO3JldHVybiBlP3kubWFrZUFycmF5KGUpOnRoaXN9KS5maWx0ZXIoZnVuY3Rpb24oKXt2YXIgZT10aGlzLnR5cGU7cmV0dXJuIHRoaXMubmFtZSYmIXkodGhpcykuaXMoXCI6ZGlzYWJsZWRcIikmJlR0LnRlc3QodGhpcy5ub2RlTmFtZSkmJiFDdC50ZXN0KGUpJiYodGhpcy5jaGVja2VkfHwhbGUudGVzdChlKSl9KS5tYXAoZnVuY3Rpb24oZSx0KXt2YXIgbj15KHRoaXMpLnZhbCgpO3JldHVybiBudWxsPT1uP251bGw6QXJyYXkuaXNBcnJheShuKT95Lm1hcChuLGZ1bmN0aW9uKGUpe3JldHVybntuYW1lOnQubmFtZSx2YWx1ZTplLnJlcGxhY2Uod3QsXCJcXHJcXG5cIil9fSk6e25hbWU6dC5uYW1lLHZhbHVlOm4ucmVwbGFjZSh3dCxcIlxcclxcblwiKX19KS5nZXQoKX19KSx5LmZuLmV4dGVuZCh7d3JhcEFsbDpmdW5jdGlvbihlKXt2YXIgdDtyZXR1cm4gdGhpc1swXSYmKHkuaXNGdW5jdGlvbihlKSYmKGU9ZS5jYWxsKHRoaXNbMF0pKSx0PXkoZSx0aGlzWzBdLm93bmVyRG9jdW1lbnQpLmVxKDApLmNsb25lKCEwKSx0aGlzWzBdLnBhcmVudE5vZGUmJnQuaW5zZXJ0QmVmb3JlKHRoaXNbMF0pLHQubWFwKGZ1bmN0aW9uKCl7dmFyIGU9dGhpczt3aGlsZShlLmZpcnN0RWxlbWVudENoaWxkKWU9ZS5maXJzdEVsZW1lbnRDaGlsZDtyZXR1cm4gZX0pLmFwcGVuZCh0aGlzKSksdGhpc30sd3JhcElubmVyOmZ1bmN0aW9uKGUpe3JldHVybiB5LmlzRnVuY3Rpb24oZSk/dGhpcy5lYWNoKGZ1bmN0aW9uKHQpe3kodGhpcykud3JhcElubmVyKGUuY2FsbCh0aGlzLHQpKX0pOnRoaXMuZWFjaChmdW5jdGlvbigpe3ZhciB0PXkodGhpcyksbj10LmNvbnRlbnRzKCk7bi5sZW5ndGg/bi53cmFwQWxsKGUpOnQuYXBwZW5kKGUpfSl9LHdyYXA6ZnVuY3Rpb24oZSl7dmFyIHQ9eS5pc0Z1bmN0aW9uKGUpO3JldHVybiB0aGlzLmVhY2goZnVuY3Rpb24obil7eSh0aGlzKS53cmFwQWxsKHQ/ZS5jYWxsKHRoaXMsbik6ZSl9KX0sdW53cmFwOmZ1bmN0aW9uKGUpe3JldHVybiB0aGlzLnBhcmVudChlKS5ub3QoXCJib2R5XCIpLmVhY2goZnVuY3Rpb24oKXt5KHRoaXMpLnJlcGxhY2VXaXRoKHRoaXMuY2hpbGROb2Rlcyl9KSx0aGlzfX0pLHkuZXhwci5wc2V1ZG9zLmhpZGRlbj1mdW5jdGlvbihlKXtyZXR1cm4heS5leHByLnBzZXVkb3MudmlzaWJsZShlKX0seS5leHByLnBzZXVkb3MudmlzaWJsZT1mdW5jdGlvbihlKXtyZXR1cm4hIShlLm9mZnNldFdpZHRofHxlLm9mZnNldEhlaWdodHx8ZS5nZXRDbGllbnRSZWN0cygpLmxlbmd0aCl9LGguY3JlYXRlSFRNTERvY3VtZW50PWZ1bmN0aW9uKCl7dmFyIGU9aS5pbXBsZW1lbnRhdGlvbi5jcmVhdGVIVE1MRG9jdW1lbnQoXCJcIikuYm9keTtyZXR1cm4gZS5pbm5lckhUTUw9XCI8Zm9ybT48L2Zvcm0+PGZvcm0+PC9mb3JtPlwiLDI9PT1lLmNoaWxkTm9kZXMubGVuZ3RofSgpLHkucGFyc2VIVE1MPWZ1bmN0aW9uKGUsdCxuKXtpZihcInN0cmluZ1wiIT10eXBlb2YgZSlyZXR1cm5bXTtcImJvb2xlYW5cIj09dHlwZW9mIHQmJihuPXQsdD0hMSk7dmFyIHIsbyxzO3JldHVybiB0fHwoaC5jcmVhdGVIVE1MRG9jdW1lbnQ/KChyPSh0PWkuaW1wbGVtZW50YXRpb24uY3JlYXRlSFRNTERvY3VtZW50KFwiXCIpKS5jcmVhdGVFbGVtZW50KFwiYmFzZVwiKSkuaHJlZj1pLmxvY2F0aW9uLmhyZWYsdC5oZWFkLmFwcGVuZENoaWxkKHIpKTp0PWkpLG89Uy5leGVjKGUpLHM9IW4mJltdLG8/W3QuY3JlYXRlRWxlbWVudChvWzFdKV06KG89dmUoW2VdLHQscykscyYmcy5sZW5ndGgmJnkocykucmVtb3ZlKCkseS5tZXJnZShbXSxvLmNoaWxkTm9kZXMpKX0seS5leHByLnBzZXVkb3MuYW5pbWF0ZWQ9ZnVuY3Rpb24oZSl7cmV0dXJuIHkuZ3JlcCh5LnRpbWVycyxmdW5jdGlvbih0KXtyZXR1cm4gZT09PXQuZWxlbX0pLmxlbmd0aH0seS5vZmZzZXQ9e3NldE9mZnNldDpmdW5jdGlvbihlLHQsbil7dmFyIGkscixvLHMsYSx1LGwsYz15LmNzcyhlLFwicG9zaXRpb25cIiksZj15KGUpLHA9e307XCJzdGF0aWNcIj09PWMmJihlLnN0eWxlLnBvc2l0aW9uPVwicmVsYXRpdmVcIiksYT1mLm9mZnNldCgpLG89eS5jc3MoZSxcInRvcFwiKSx1PXkuY3NzKGUsXCJsZWZ0XCIpLChsPShcImFic29sdXRlXCI9PT1jfHxcImZpeGVkXCI9PT1jKSYmKG8rdSkuaW5kZXhPZihcImF1dG9cIik+LTEpPyhzPShpPWYucG9zaXRpb24oKSkudG9wLHI9aS5sZWZ0KToocz1wYXJzZUZsb2F0KG8pfHwwLHI9cGFyc2VGbG9hdCh1KXx8MCkseS5pc0Z1bmN0aW9uKHQpJiYodD10LmNhbGwoZSxuLHkuZXh0ZW5kKHt9LGEpKSksbnVsbCE9dC50b3AmJihwLnRvcD10LnRvcC1hLnRvcCtzKSxudWxsIT10LmxlZnQmJihwLmxlZnQ9dC5sZWZ0LWEubGVmdCtyKSxcInVzaW5nXCJpbiB0P3QudXNpbmcuY2FsbChlLHApOmYuY3NzKHApfX0seS5mbi5leHRlbmQoe29mZnNldDpmdW5jdGlvbihlKXtpZihhcmd1bWVudHMubGVuZ3RoKXJldHVybiB2b2lkIDA9PT1lP3RoaXM6dGhpcy5lYWNoKGZ1bmN0aW9uKHQpe3kub2Zmc2V0LnNldE9mZnNldCh0aGlzLGUsdCl9KTt2YXIgdCxuLGk9dGhpc1swXTtpZihpKXJldHVybiBpLmdldENsaWVudFJlY3RzKCkubGVuZ3RoPyh0PWkuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCksbj1pLm93bmVyRG9jdW1lbnQuZGVmYXVsdFZpZXcse3RvcDp0LnRvcCtuLnBhZ2VZT2Zmc2V0LGxlZnQ6dC5sZWZ0K24ucGFnZVhPZmZzZXR9KTp7dG9wOjAsbGVmdDowfX0scG9zaXRpb246ZnVuY3Rpb24oKXtpZih0aGlzWzBdKXt2YXIgZSx0LG4saT10aGlzWzBdLHI9e3RvcDowLGxlZnQ6MH07aWYoXCJmaXhlZFwiPT09eS5jc3MoaSxcInBvc2l0aW9uXCIpKXQ9aS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtlbHNle3Q9dGhpcy5vZmZzZXQoKSxuPWkub3duZXJEb2N1bWVudCxlPWkub2Zmc2V0UGFyZW50fHxuLmRvY3VtZW50RWxlbWVudDt3aGlsZShlJiYoZT09PW4uYm9keXx8ZT09PW4uZG9jdW1lbnRFbGVtZW50KSYmXCJzdGF0aWNcIj09PXkuY3NzKGUsXCJwb3NpdGlvblwiKSllPWUucGFyZW50Tm9kZTtlJiZlIT09aSYmMT09PWUubm9kZVR5cGUmJigocj15KGUpLm9mZnNldCgpKS50b3ArPXkuY3NzKGUsXCJib3JkZXJUb3BXaWR0aFwiLCEwKSxyLmxlZnQrPXkuY3NzKGUsXCJib3JkZXJMZWZ0V2lkdGhcIiwhMCkpfXJldHVybnt0b3A6dC50b3Atci50b3AteS5jc3MoaSxcIm1hcmdpblRvcFwiLCEwKSxsZWZ0OnQubGVmdC1yLmxlZnQteS5jc3MoaSxcIm1hcmdpbkxlZnRcIiwhMCl9fX0sb2Zmc2V0UGFyZW50OmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uKCl7dmFyIGU9dGhpcy5vZmZzZXRQYXJlbnQ7d2hpbGUoZSYmXCJzdGF0aWNcIj09PXkuY3NzKGUsXCJwb3NpdGlvblwiKSllPWUub2Zmc2V0UGFyZW50O3JldHVybiBlfHxtZX0pfX0pLHkuZWFjaCh7c2Nyb2xsTGVmdDpcInBhZ2VYT2Zmc2V0XCIsc2Nyb2xsVG9wOlwicGFnZVlPZmZzZXRcIn0sZnVuY3Rpb24oZSx0KXt2YXIgbj1cInBhZ2VZT2Zmc2V0XCI9PT10O3kuZm5bZV09ZnVuY3Rpb24oaSl7cmV0dXJuIFUodGhpcyxmdW5jdGlvbihlLGkscil7dmFyIG87aWYoZyhlKT9vPWU6OT09PWUubm9kZVR5cGUmJihvPWUuZGVmYXVsdFZpZXcpLHZvaWQgMD09PXIpcmV0dXJuIG8/b1t0XTplW2ldO28/by5zY3JvbGxUbyhuP28ucGFnZVhPZmZzZXQ6cixuP3I6by5wYWdlWU9mZnNldCk6ZVtpXT1yfSxlLGksYXJndW1lbnRzLmxlbmd0aCl9fSkseS5lYWNoKFtcInRvcFwiLFwibGVmdFwiXSxmdW5jdGlvbihlLHQpe3kuY3NzSG9va3NbdF09QmUoaC5waXhlbFBvc2l0aW9uLGZ1bmN0aW9uKGUsbil7aWYobilyZXR1cm4gbj1XZShlLHQpLFJlLnRlc3Qobik/eShlKS5wb3NpdGlvbigpW3RdK1wicHhcIjpufSl9KSx5LmVhY2goe0hlaWdodDpcImhlaWdodFwiLFdpZHRoOlwid2lkdGhcIn0sZnVuY3Rpb24oZSx0KXt5LmVhY2goe3BhZGRpbmc6XCJpbm5lclwiK2UsY29udGVudDp0LFwiXCI6XCJvdXRlclwiK2V9LGZ1bmN0aW9uKG4saSl7eS5mbltpXT1mdW5jdGlvbihyLG8pe3ZhciBzPWFyZ3VtZW50cy5sZW5ndGgmJihufHxcImJvb2xlYW5cIiE9dHlwZW9mIHIpLGE9bnx8KCEwPT09cnx8ITA9PT1vP1wibWFyZ2luXCI6XCJib3JkZXJcIik7cmV0dXJuIFUodGhpcyxmdW5jdGlvbih0LG4scil7dmFyIG87cmV0dXJuIGcodCk/MD09PWkuaW5kZXhPZihcIm91dGVyXCIpP3RbXCJpbm5lclwiK2VdOnQuZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50W1wiY2xpZW50XCIrZV06OT09PXQubm9kZVR5cGU/KG89dC5kb2N1bWVudEVsZW1lbnQsTWF0aC5tYXgodC5ib2R5W1wic2Nyb2xsXCIrZV0sb1tcInNjcm9sbFwiK2VdLHQuYm9keVtcIm9mZnNldFwiK2VdLG9bXCJvZmZzZXRcIitlXSxvW1wiY2xpZW50XCIrZV0pKTp2b2lkIDA9PT1yP3kuY3NzKHQsbixhKTp5LnN0eWxlKHQsbixyLGEpfSx0LHM/cjp2b2lkIDAscyl9fSl9KSxcImZ1bmN0aW9uXCI9PXR5cGVvZiBkZWZpbmUmJmRlZmluZS5hbWQmJmRlZmluZShcImpxdWVyeVwiLFtdLGZ1bmN0aW9uKCl7cmV0dXJuIHl9KTt2YXIgRXQ9ZS5qUXVlcnksTnQ9ZS4kO3JldHVybiB5Lm5vQ29uZmxpY3Q9ZnVuY3Rpb24odCl7cmV0dXJuIGUuJD09PXkmJihlLiQ9TnQpLHQmJmUualF1ZXJ5PT09eSYmKGUualF1ZXJ5PUV0KSx5fSx0fHwoZS5qUXVlcnk9ZS4kPXkpLHl9KTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWpxdWVyeS5taW4ubWFwIiwiLy8gQ2hlY2sgZm9yIGpRdWVyeS5cbmlmICh0eXBlb2YgalF1ZXJ5ID09PSAndW5kZWZpbmVkJykge1xuICAvLyBDaGVjayBpZiByZXF1aXJlIGlzIGEgZGVmaW5lZCBmdW5jdGlvbi5cbiAgaWYgKHR5cGVvZiByZXF1aXJlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgalF1ZXJ5ID0gJCA9IHJlcXVpcmUoJ2pxdWVyeScpO1xuICAgIC8vIEVsc2UgdXNlIHRoZSBkb2xsYXIgc2lnbiBhbGlhcy5cbiAgfSBlbHNlIHtcbiAgICBqUXVlcnkgPSAkO1xuICB9XG59XG47IC8qXG4gICogalF1ZXJ5IEVhc2luZyB2MS40LjAgLSBodHRwOi8vZ3NnZC5jby51ay9zYW5kYm94L2pxdWVyeS9lYXNpbmcvXG4gICogT3BlbiBzb3VyY2UgdW5kZXIgdGhlIEJTRCBMaWNlbnNlLlxuICAqIENvcHlyaWdodCDCqSAyMDA4IEdlb3JnZSBNY0dpbmxleSBTbWl0aFxuICAqIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gICogaHR0cHM6Ly9yYXcuZ2l0aHViLmNvbS9nZHNtaXRoL2pxdWVyeS1lYXNpbmcvbWFzdGVyL0xJQ0VOU0VcbiAgKi9cblxuKGZ1bmN0aW9uIChmYWN0b3J5KSB7XG4gIGlmICh0eXBlb2YgZGVmaW5lID09PSBcImZ1bmN0aW9uXCIgJiYgZGVmaW5lLmFtZCkge1xuICAgIGRlZmluZShbJ2pxdWVyeSddLCBmdW5jdGlvbiAoJCkge1xuICAgICAgcmV0dXJuIGZhY3RvcnkoJCk7XG4gICAgfSk7XG4gIH0gZWxzZSBpZiAodHlwZW9mIG1vZHVsZSA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgbW9kdWxlLmV4cG9ydHMgPT09IFwib2JqZWN0XCIpIHtcbiAgICBleHBvcnRzID0gZmFjdG9yeShyZXF1aXJlKCdqcXVlcnknKSk7XG4gIH0gZWxzZSB7XG4gICAgZmFjdG9yeShqUXVlcnkpO1xuICB9XG59KShmdW5jdGlvbiAoJCkge1xuXG4gIC8vIFByZXNlcnZlIHRoZSBvcmlnaW5hbCBqUXVlcnkgXCJzd2luZ1wiIGVhc2luZyBhcyBcImpzd2luZ1wiXG4gICQuZWFzaW5nWydqc3dpbmcnXSA9ICQuZWFzaW5nWydzd2luZyddO1xuXG4gIHZhciBwb3cgPSBNYXRoLnBvdyxcbiAgICAgIHNxcnQgPSBNYXRoLnNxcnQsXG4gICAgICBzaW4gPSBNYXRoLnNpbixcbiAgICAgIGNvcyA9IE1hdGguY29zLFxuICAgICAgUEkgPSBNYXRoLlBJLFxuICAgICAgYzEgPSAxLjcwMTU4LFxuICAgICAgYzIgPSBjMSAqIDEuNTI1LFxuICAgICAgYzMgPSBjMSArIDEsXG4gICAgICBjNCA9IDIgKiBQSSAvIDMsXG4gICAgICBjNSA9IDIgKiBQSSAvIDQuNTtcblxuICAvLyB4IGlzIHRoZSBmcmFjdGlvbiBvZiBhbmltYXRpb24gcHJvZ3Jlc3MsIGluIHRoZSByYW5nZSAwLi4xXG4gIGZ1bmN0aW9uIGJvdW5jZU91dCh4KSB7XG4gICAgdmFyIG4xID0gNy41NjI1LFxuICAgICAgICBkMSA9IDIuNzU7XG4gICAgaWYgKHggPCAxIC8gZDEpIHtcbiAgICAgIHJldHVybiBuMSAqIHggKiB4O1xuICAgIH0gZWxzZSBpZiAoeCA8IDIgLyBkMSkge1xuICAgICAgcmV0dXJuIG4xICogKHggLT0gMS41IC8gZDEpICogeCArIC43NTtcbiAgICB9IGVsc2UgaWYgKHggPCAyLjUgLyBkMSkge1xuICAgICAgcmV0dXJuIG4xICogKHggLT0gMi4yNSAvIGQxKSAqIHggKyAuOTM3NTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIG4xICogKHggLT0gMi42MjUgLyBkMSkgKiB4ICsgLjk4NDM3NTtcbiAgICB9XG4gIH1cblxuICAkLmV4dGVuZCgkLmVhc2luZywge1xuICAgIGRlZjogJ2Vhc2VPdXRRdWFkJyxcbiAgICBzd2luZzogZnVuY3Rpb24gKHgpIHtcbiAgICAgIHJldHVybiAkLmVhc2luZ1skLmVhc2luZy5kZWZdKHgpO1xuICAgIH0sXG4gICAgZWFzZUluUXVhZDogZnVuY3Rpb24gKHgpIHtcbiAgICAgIHJldHVybiB4ICogeDtcbiAgICB9LFxuICAgIGVhc2VPdXRRdWFkOiBmdW5jdGlvbiAoeCkge1xuICAgICAgcmV0dXJuIDEgLSAoMSAtIHgpICogKDEgLSB4KTtcbiAgICB9LFxuICAgIGVhc2VJbk91dFF1YWQ6IGZ1bmN0aW9uICh4KSB7XG4gICAgICByZXR1cm4geCA8IDAuNSA/IDIgKiB4ICogeCA6IDEgLSBwb3coLTIgKiB4ICsgMiwgMikgLyAyO1xuICAgIH0sXG4gICAgZWFzZUluQ3ViaWM6IGZ1bmN0aW9uICh4KSB7XG4gICAgICByZXR1cm4geCAqIHggKiB4O1xuICAgIH0sXG4gICAgZWFzZU91dEN1YmljOiBmdW5jdGlvbiAoeCkge1xuICAgICAgcmV0dXJuIDEgLSBwb3coMSAtIHgsIDMpO1xuICAgIH0sXG4gICAgZWFzZUluT3V0Q3ViaWM6IGZ1bmN0aW9uICh4KSB7XG4gICAgICByZXR1cm4geCA8IDAuNSA/IDQgKiB4ICogeCAqIHggOiAxIC0gcG93KC0yICogeCArIDIsIDMpIC8gMjtcbiAgICB9LFxuICAgIGVhc2VJblF1YXJ0OiBmdW5jdGlvbiAoeCkge1xuICAgICAgcmV0dXJuIHggKiB4ICogeCAqIHg7XG4gICAgfSxcbiAgICBlYXNlT3V0UXVhcnQ6IGZ1bmN0aW9uICh4KSB7XG4gICAgICByZXR1cm4gMSAtIHBvdygxIC0geCwgNCk7XG4gICAgfSxcbiAgICBlYXNlSW5PdXRRdWFydDogZnVuY3Rpb24gKHgpIHtcbiAgICAgIHJldHVybiB4IDwgMC41ID8gOCAqIHggKiB4ICogeCAqIHggOiAxIC0gcG93KC0yICogeCArIDIsIDQpIC8gMjtcbiAgICB9LFxuICAgIGVhc2VJblF1aW50OiBmdW5jdGlvbiAoeCkge1xuICAgICAgcmV0dXJuIHggKiB4ICogeCAqIHggKiB4O1xuICAgIH0sXG4gICAgZWFzZU91dFF1aW50OiBmdW5jdGlvbiAoeCkge1xuICAgICAgcmV0dXJuIDEgLSBwb3coMSAtIHgsIDUpO1xuICAgIH0sXG4gICAgZWFzZUluT3V0UXVpbnQ6IGZ1bmN0aW9uICh4KSB7XG4gICAgICByZXR1cm4geCA8IDAuNSA/IDE2ICogeCAqIHggKiB4ICogeCAqIHggOiAxIC0gcG93KC0yICogeCArIDIsIDUpIC8gMjtcbiAgICB9LFxuICAgIGVhc2VJblNpbmU6IGZ1bmN0aW9uICh4KSB7XG4gICAgICByZXR1cm4gMSAtIGNvcyh4ICogUEkgLyAyKTtcbiAgICB9LFxuICAgIGVhc2VPdXRTaW5lOiBmdW5jdGlvbiAoeCkge1xuICAgICAgcmV0dXJuIHNpbih4ICogUEkgLyAyKTtcbiAgICB9LFxuICAgIGVhc2VJbk91dFNpbmU6IGZ1bmN0aW9uICh4KSB7XG4gICAgICByZXR1cm4gLShjb3MoUEkgKiB4KSAtIDEpIC8gMjtcbiAgICB9LFxuICAgIGVhc2VJbkV4cG86IGZ1bmN0aW9uICh4KSB7XG4gICAgICByZXR1cm4geCA9PT0gMCA/IDAgOiBwb3coMiwgMTAgKiB4IC0gMTApO1xuICAgIH0sXG4gICAgZWFzZU91dEV4cG86IGZ1bmN0aW9uICh4KSB7XG4gICAgICByZXR1cm4geCA9PT0gMSA/IDEgOiAxIC0gcG93KDIsIC0xMCAqIHgpO1xuICAgIH0sXG4gICAgZWFzZUluT3V0RXhwbzogZnVuY3Rpb24gKHgpIHtcbiAgICAgIHJldHVybiB4ID09PSAwID8gMCA6IHggPT09IDEgPyAxIDogeCA8IDAuNSA/IHBvdygyLCAyMCAqIHggLSAxMCkgLyAyIDogKDIgLSBwb3coMiwgLTIwICogeCArIDEwKSkgLyAyO1xuICAgIH0sXG4gICAgZWFzZUluQ2lyYzogZnVuY3Rpb24gKHgpIHtcbiAgICAgIHJldHVybiAxIC0gc3FydCgxIC0gcG93KHgsIDIpKTtcbiAgICB9LFxuICAgIGVhc2VPdXRDaXJjOiBmdW5jdGlvbiAoeCkge1xuICAgICAgcmV0dXJuIHNxcnQoMSAtIHBvdyh4IC0gMSwgMikpO1xuICAgIH0sXG4gICAgZWFzZUluT3V0Q2lyYzogZnVuY3Rpb24gKHgpIHtcbiAgICAgIHJldHVybiB4IDwgMC41ID8gKDEgLSBzcXJ0KDEgLSBwb3coMiAqIHgsIDIpKSkgLyAyIDogKHNxcnQoMSAtIHBvdygtMiAqIHggKyAyLCAyKSkgKyAxKSAvIDI7XG4gICAgfSxcbiAgICBlYXNlSW5FbGFzdGljOiBmdW5jdGlvbiAoeCkge1xuICAgICAgcmV0dXJuIHggPT09IDAgPyAwIDogeCA9PT0gMSA/IDEgOiAtcG93KDIsIDEwICogeCAtIDEwKSAqIHNpbigoeCAqIDEwIC0gMTAuNzUpICogYzQpO1xuICAgIH0sXG4gICAgZWFzZU91dEVsYXN0aWM6IGZ1bmN0aW9uICh4KSB7XG4gICAgICByZXR1cm4geCA9PT0gMCA/IDAgOiB4ID09PSAxID8gMSA6IHBvdygyLCAtMTAgKiB4KSAqIHNpbigoeCAqIDEwIC0gMC43NSkgKiBjNCkgKyAxO1xuICAgIH0sXG4gICAgZWFzZUluT3V0RWxhc3RpYzogZnVuY3Rpb24gKHgpIHtcbiAgICAgIHJldHVybiB4ID09PSAwID8gMCA6IHggPT09IDEgPyAxIDogeCA8IDAuNSA/IC0ocG93KDIsIDIwICogeCAtIDEwKSAqIHNpbigoMjAgKiB4IC0gMTEuMTI1KSAqIGM1KSkgLyAyIDogcG93KDIsIC0yMCAqIHggKyAxMCkgKiBzaW4oKDIwICogeCAtIDExLjEyNSkgKiBjNSkgLyAyICsgMTtcbiAgICB9LFxuICAgIGVhc2VJbkJhY2s6IGZ1bmN0aW9uICh4KSB7XG4gICAgICByZXR1cm4gYzMgKiB4ICogeCAqIHggLSBjMSAqIHggKiB4O1xuICAgIH0sXG4gICAgZWFzZU91dEJhY2s6IGZ1bmN0aW9uICh4KSB7XG4gICAgICByZXR1cm4gMSArIGMzICogcG93KHggLSAxLCAzKSArIGMxICogcG93KHggLSAxLCAyKTtcbiAgICB9LFxuICAgIGVhc2VJbk91dEJhY2s6IGZ1bmN0aW9uICh4KSB7XG4gICAgICByZXR1cm4geCA8IDAuNSA/IHBvdygyICogeCwgMikgKiAoKGMyICsgMSkgKiAyICogeCAtIGMyKSAvIDIgOiAocG93KDIgKiB4IC0gMiwgMikgKiAoKGMyICsgMSkgKiAoeCAqIDIgLSAyKSArIGMyKSArIDIpIC8gMjtcbiAgICB9LFxuICAgIGVhc2VJbkJvdW5jZTogZnVuY3Rpb24gKHgpIHtcbiAgICAgIHJldHVybiAxIC0gYm91bmNlT3V0KDEgLSB4KTtcbiAgICB9LFxuICAgIGVhc2VPdXRCb3VuY2U6IGJvdW5jZU91dCxcbiAgICBlYXNlSW5PdXRCb3VuY2U6IGZ1bmN0aW9uICh4KSB7XG4gICAgICByZXR1cm4geCA8IDAuNSA/ICgxIC0gYm91bmNlT3V0KDEgLSAyICogeCkpIC8gMiA6ICgxICsgYm91bmNlT3V0KDIgKiB4IC0gMSkpIC8gMjtcbiAgICB9XG4gIH0pO1xufSk7OyAvLyBDdXN0b20gRWFzaW5nXG5qUXVlcnkuZXh0ZW5kKGpRdWVyeS5lYXNpbmcsIHtcbiAgZWFzZUluT3V0TWF0ZXJpYWw6IGZ1bmN0aW9uICh4LCB0LCBiLCBjLCBkKSB7XG4gICAgaWYgKCh0IC89IGQgLyAyKSA8IDEpIHJldHVybiBjIC8gMiAqIHQgKiB0ICsgYjtcbiAgICByZXR1cm4gYyAvIDQgKiAoKHQgLT0gMikgKiB0ICogdCArIDIpICsgYjtcbiAgfVxufSk7OyAvKiEgVmVsb2NpdHlKUy5vcmcgKDEuMi4zKS4gKEMpIDIwMTQgSnVsaWFuIFNoYXBpcm8uIE1JVCBAbGljZW5zZTogZW4ud2lraXBlZGlhLm9yZy93aWtpL01JVF9MaWNlbnNlICovXG4vKiEgVmVsb2NpdHlKUy5vcmcgalF1ZXJ5IFNoaW0gKDEuMC4xKS4gKEMpIDIwMTQgVGhlIGpRdWVyeSBGb3VuZGF0aW9uLiBNSVQgQGxpY2Vuc2U6IGVuLndpa2lwZWRpYS5vcmcvd2lraS9NSVRfTGljZW5zZS4gKi9cbi8qISBOb3RlIHRoYXQgdGhpcyBoYXMgYmVlbiBtb2RpZmllZCBieSBNYXRlcmlhbGl6ZSB0byBjb25maXJtIHRoYXQgVmVsb2NpdHkgaXMgbm90IGFscmVhZHkgYmVpbmcgaW1wb3J0ZWQuICovXG5qUXVlcnkuVmVsb2NpdHkgPyBjb25zb2xlLmxvZyhcIlZlbG9jaXR5IGlzIGFscmVhZHkgbG9hZGVkLiBZb3UgbWF5IGJlIG5lZWRsZXNzbHkgaW1wb3J0aW5nIFZlbG9jaXR5IGFnYWluOyBub3RlIHRoYXQgTWF0ZXJpYWxpemUgaW5jbHVkZXMgVmVsb2NpdHkuXCIpIDogKCFmdW5jdGlvbiAoZSkge1xuICBmdW5jdGlvbiB0KGUpIHtcbiAgICB2YXIgdCA9IGUubGVuZ3RoLFxuICAgICAgICBhID0gci50eXBlKGUpO3JldHVybiBcImZ1bmN0aW9uXCIgPT09IGEgfHwgci5pc1dpbmRvdyhlKSA/ICExIDogMSA9PT0gZS5ub2RlVHlwZSAmJiB0ID8gITAgOiBcImFycmF5XCIgPT09IGEgfHwgMCA9PT0gdCB8fCBcIm51bWJlclwiID09IHR5cGVvZiB0ICYmIHQgPiAwICYmIHQgLSAxIGluIGU7XG4gIH1pZiAoIWUualF1ZXJ5KSB7XG4gICAgdmFyIHIgPSBmdW5jdGlvbiAoZSwgdCkge1xuICAgICAgcmV0dXJuIG5ldyByLmZuLmluaXQoZSwgdCk7XG4gICAgfTtyLmlzV2luZG93ID0gZnVuY3Rpb24gKGUpIHtcbiAgICAgIHJldHVybiBudWxsICE9IGUgJiYgZSA9PSBlLndpbmRvdztcbiAgICB9LCByLnR5cGUgPSBmdW5jdGlvbiAoZSkge1xuICAgICAgcmV0dXJuIG51bGwgPT0gZSA/IGUgKyBcIlwiIDogXCJvYmplY3RcIiA9PSB0eXBlb2YgZSB8fCBcImZ1bmN0aW9uXCIgPT0gdHlwZW9mIGUgPyBuW2kuY2FsbChlKV0gfHwgXCJvYmplY3RcIiA6IHR5cGVvZiBlO1xuICAgIH0sIHIuaXNBcnJheSA9IEFycmF5LmlzQXJyYXkgfHwgZnVuY3Rpb24gKGUpIHtcbiAgICAgIHJldHVybiBcImFycmF5XCIgPT09IHIudHlwZShlKTtcbiAgICB9LCByLmlzUGxhaW5PYmplY3QgPSBmdW5jdGlvbiAoZSkge1xuICAgICAgdmFyIHQ7aWYgKCFlIHx8IFwib2JqZWN0XCIgIT09IHIudHlwZShlKSB8fCBlLm5vZGVUeXBlIHx8IHIuaXNXaW5kb3coZSkpIHJldHVybiAhMTt0cnkge1xuICAgICAgICBpZiAoZS5jb25zdHJ1Y3RvciAmJiAhby5jYWxsKGUsIFwiY29uc3RydWN0b3JcIikgJiYgIW8uY2FsbChlLmNvbnN0cnVjdG9yLnByb3RvdHlwZSwgXCJpc1Byb3RvdHlwZU9mXCIpKSByZXR1cm4gITE7XG4gICAgICB9IGNhdGNoIChhKSB7XG4gICAgICAgIHJldHVybiAhMTtcbiAgICAgIH1mb3IgKHQgaW4gZSkge31yZXR1cm4gdm9pZCAwID09PSB0IHx8IG8uY2FsbChlLCB0KTtcbiAgICB9LCByLmVhY2ggPSBmdW5jdGlvbiAoZSwgciwgYSkge1xuICAgICAgdmFyIG4sXG4gICAgICAgICAgbyA9IDAsXG4gICAgICAgICAgaSA9IGUubGVuZ3RoLFxuICAgICAgICAgIHMgPSB0KGUpO2lmIChhKSB7XG4gICAgICAgIGlmIChzKSBmb3IgKDsgaSA+IG8gJiYgKG4gPSByLmFwcGx5KGVbb10sIGEpLCBuICE9PSAhMSk7IG8rKykge30gZWxzZSBmb3IgKG8gaW4gZSkge1xuICAgICAgICAgIGlmIChuID0gci5hcHBseShlW29dLCBhKSwgbiA9PT0gITEpIGJyZWFrO1xuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKHMpIGZvciAoOyBpID4gbyAmJiAobiA9IHIuY2FsbChlW29dLCBvLCBlW29dKSwgbiAhPT0gITEpOyBvKyspIHt9IGVsc2UgZm9yIChvIGluIGUpIHtcbiAgICAgICAgaWYgKG4gPSByLmNhbGwoZVtvXSwgbywgZVtvXSksIG4gPT09ICExKSBicmVhaztcbiAgICAgIH1yZXR1cm4gZTtcbiAgICB9LCByLmRhdGEgPSBmdW5jdGlvbiAoZSwgdCwgbikge1xuICAgICAgaWYgKHZvaWQgMCA9PT0gbikge1xuICAgICAgICB2YXIgbyA9IGVbci5leHBhbmRvXSxcbiAgICAgICAgICAgIGkgPSBvICYmIGFbb107aWYgKHZvaWQgMCA9PT0gdCkgcmV0dXJuIGk7aWYgKGkgJiYgdCBpbiBpKSByZXR1cm4gaVt0XTtcbiAgICAgIH0gZWxzZSBpZiAodm9pZCAwICE9PSB0KSB7XG4gICAgICAgIHZhciBvID0gZVtyLmV4cGFuZG9dIHx8IChlW3IuZXhwYW5kb10gPSArK3IudXVpZCk7cmV0dXJuIGFbb10gPSBhW29dIHx8IHt9LCBhW29dW3RdID0gbiwgbjtcbiAgICAgIH1cbiAgICB9LCByLnJlbW92ZURhdGEgPSBmdW5jdGlvbiAoZSwgdCkge1xuICAgICAgdmFyIG4gPSBlW3IuZXhwYW5kb10sXG4gICAgICAgICAgbyA9IG4gJiYgYVtuXTtvICYmIHIuZWFjaCh0LCBmdW5jdGlvbiAoZSwgdCkge1xuICAgICAgICBkZWxldGUgb1t0XTtcbiAgICAgIH0pO1xuICAgIH0sIHIuZXh0ZW5kID0gZnVuY3Rpb24gKCkge1xuICAgICAgdmFyIGUsXG4gICAgICAgICAgdCxcbiAgICAgICAgICBhLFxuICAgICAgICAgIG4sXG4gICAgICAgICAgbyxcbiAgICAgICAgICBpLFxuICAgICAgICAgIHMgPSBhcmd1bWVudHNbMF0gfHwge30sXG4gICAgICAgICAgbCA9IDEsXG4gICAgICAgICAgdSA9IGFyZ3VtZW50cy5sZW5ndGgsXG4gICAgICAgICAgYyA9ICExO2ZvciAoXCJib29sZWFuXCIgPT0gdHlwZW9mIHMgJiYgKGMgPSBzLCBzID0gYXJndW1lbnRzW2xdIHx8IHt9LCBsKyspLCBcIm9iamVjdFwiICE9IHR5cGVvZiBzICYmIFwiZnVuY3Rpb25cIiAhPT0gci50eXBlKHMpICYmIChzID0ge30pLCBsID09PSB1ICYmIChzID0gdGhpcywgbC0tKTsgdSA+IGw7IGwrKykge1xuICAgICAgICBpZiAobnVsbCAhPSAobyA9IGFyZ3VtZW50c1tsXSkpIGZvciAobiBpbiBvKSB7XG4gICAgICAgICAgZSA9IHNbbl0sIGEgPSBvW25dLCBzICE9PSBhICYmIChjICYmIGEgJiYgKHIuaXNQbGFpbk9iamVjdChhKSB8fCAodCA9IHIuaXNBcnJheShhKSkpID8gKHQgPyAodCA9ICExLCBpID0gZSAmJiByLmlzQXJyYXkoZSkgPyBlIDogW10pIDogaSA9IGUgJiYgci5pc1BsYWluT2JqZWN0KGUpID8gZSA6IHt9LCBzW25dID0gci5leHRlbmQoYywgaSwgYSkpIDogdm9pZCAwICE9PSBhICYmIChzW25dID0gYSkpO1xuICAgICAgICB9XG4gICAgICB9cmV0dXJuIHM7XG4gICAgfSwgci5xdWV1ZSA9IGZ1bmN0aW9uIChlLCBhLCBuKSB7XG4gICAgICBmdW5jdGlvbiBvKGUsIHIpIHtcbiAgICAgICAgdmFyIGEgPSByIHx8IFtdO3JldHVybiBudWxsICE9IGUgJiYgKHQoT2JqZWN0KGUpKSA/ICFmdW5jdGlvbiAoZSwgdCkge1xuICAgICAgICAgIGZvciAodmFyIHIgPSArdC5sZW5ndGgsIGEgPSAwLCBuID0gZS5sZW5ndGg7IHIgPiBhOykge1xuICAgICAgICAgICAgZVtuKytdID0gdFthKytdO1xuICAgICAgICAgIH1pZiAociAhPT0gcikgZm9yICg7IHZvaWQgMCAhPT0gdFthXTspIHtcbiAgICAgICAgICAgIGVbbisrXSA9IHRbYSsrXTtcbiAgICAgICAgICB9cmV0dXJuIGUubGVuZ3RoID0gbiwgZTtcbiAgICAgICAgfShhLCBcInN0cmluZ1wiID09IHR5cGVvZiBlID8gW2VdIDogZSkgOiBbXS5wdXNoLmNhbGwoYSwgZSkpLCBhO1xuICAgICAgfWlmIChlKSB7XG4gICAgICAgIGEgPSAoYSB8fCBcImZ4XCIpICsgXCJxdWV1ZVwiO3ZhciBpID0gci5kYXRhKGUsIGEpO3JldHVybiBuID8gKCFpIHx8IHIuaXNBcnJheShuKSA/IGkgPSByLmRhdGEoZSwgYSwgbyhuKSkgOiBpLnB1c2gobiksIGkpIDogaSB8fCBbXTtcbiAgICAgIH1cbiAgICB9LCByLmRlcXVldWUgPSBmdW5jdGlvbiAoZSwgdCkge1xuICAgICAgci5lYWNoKGUubm9kZVR5cGUgPyBbZV0gOiBlLCBmdW5jdGlvbiAoZSwgYSkge1xuICAgICAgICB0ID0gdCB8fCBcImZ4XCI7dmFyIG4gPSByLnF1ZXVlKGEsIHQpLFxuICAgICAgICAgICAgbyA9IG4uc2hpZnQoKTtcImlucHJvZ3Jlc3NcIiA9PT0gbyAmJiAobyA9IG4uc2hpZnQoKSksIG8gJiYgKFwiZnhcIiA9PT0gdCAmJiBuLnVuc2hpZnQoXCJpbnByb2dyZXNzXCIpLCBvLmNhbGwoYSwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgIHIuZGVxdWV1ZShhLCB0KTtcbiAgICAgICAgfSkpO1xuICAgICAgfSk7XG4gICAgfSwgci5mbiA9IHIucHJvdG90eXBlID0geyBpbml0OiBmdW5jdGlvbiAoZSkge1xuICAgICAgICBpZiAoZS5ub2RlVHlwZSkgcmV0dXJuIHRoaXNbMF0gPSBlLCB0aGlzO3Rocm93IG5ldyBFcnJvcihcIk5vdCBhIERPTSBub2RlLlwiKTtcbiAgICAgIH0sIG9mZnNldDogZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgdCA9IHRoaXNbMF0uZ2V0Qm91bmRpbmdDbGllbnRSZWN0ID8gdGhpc1swXS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKSA6IHsgdG9wOiAwLCBsZWZ0OiAwIH07cmV0dXJuIHsgdG9wOiB0LnRvcCArIChlLnBhZ2VZT2Zmc2V0IHx8IGRvY3VtZW50LnNjcm9sbFRvcCB8fCAwKSAtIChkb2N1bWVudC5jbGllbnRUb3AgfHwgMCksIGxlZnQ6IHQubGVmdCArIChlLnBhZ2VYT2Zmc2V0IHx8IGRvY3VtZW50LnNjcm9sbExlZnQgfHwgMCkgLSAoZG9jdW1lbnQuY2xpZW50TGVmdCB8fCAwKSB9O1xuICAgICAgfSwgcG9zaXRpb246IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgZnVuY3Rpb24gZSgpIHtcbiAgICAgICAgICBmb3IgKHZhciBlID0gdGhpcy5vZmZzZXRQYXJlbnQgfHwgZG9jdW1lbnQ7IGUgJiYgXCJodG1sXCIgPT09ICFlLm5vZGVUeXBlLnRvTG93ZXJDYXNlICYmIFwic3RhdGljXCIgPT09IGUuc3R5bGUucG9zaXRpb247KSB7XG4gICAgICAgICAgICBlID0gZS5vZmZzZXRQYXJlbnQ7XG4gICAgICAgICAgfXJldHVybiBlIHx8IGRvY3VtZW50O1xuICAgICAgICB9dmFyIHQgPSB0aGlzWzBdLFxuICAgICAgICAgICAgZSA9IGUuYXBwbHkodCksXG4gICAgICAgICAgICBhID0gdGhpcy5vZmZzZXQoKSxcbiAgICAgICAgICAgIG4gPSAvXig/OmJvZHl8aHRtbCkkL2kudGVzdChlLm5vZGVOYW1lKSA/IHsgdG9wOiAwLCBsZWZ0OiAwIH0gOiByKGUpLm9mZnNldCgpO3JldHVybiBhLnRvcCAtPSBwYXJzZUZsb2F0KHQuc3R5bGUubWFyZ2luVG9wKSB8fCAwLCBhLmxlZnQgLT0gcGFyc2VGbG9hdCh0LnN0eWxlLm1hcmdpbkxlZnQpIHx8IDAsIGUuc3R5bGUgJiYgKG4udG9wICs9IHBhcnNlRmxvYXQoZS5zdHlsZS5ib3JkZXJUb3BXaWR0aCkgfHwgMCwgbi5sZWZ0ICs9IHBhcnNlRmxvYXQoZS5zdHlsZS5ib3JkZXJMZWZ0V2lkdGgpIHx8IDApLCB7IHRvcDogYS50b3AgLSBuLnRvcCwgbGVmdDogYS5sZWZ0IC0gbi5sZWZ0IH07XG4gICAgICB9IH07dmFyIGEgPSB7fTtyLmV4cGFuZG8gPSBcInZlbG9jaXR5XCIgKyBuZXcgRGF0ZSgpLmdldFRpbWUoKSwgci51dWlkID0gMDtmb3IgKHZhciBuID0ge30sIG8gPSBuLmhhc093blByb3BlcnR5LCBpID0gbi50b1N0cmluZywgcyA9IFwiQm9vbGVhbiBOdW1iZXIgU3RyaW5nIEZ1bmN0aW9uIEFycmF5IERhdGUgUmVnRXhwIE9iamVjdCBFcnJvclwiLnNwbGl0KFwiIFwiKSwgbCA9IDA7IGwgPCBzLmxlbmd0aDsgbCsrKSB7XG4gICAgICBuW1wiW29iamVjdCBcIiArIHNbbF0gKyBcIl1cIl0gPSBzW2xdLnRvTG93ZXJDYXNlKCk7XG4gICAgfXIuZm4uaW5pdC5wcm90b3R5cGUgPSByLmZuLCBlLlZlbG9jaXR5ID0geyBVdGlsaXRpZXM6IHIgfTtcbiAgfVxufSh3aW5kb3cpLCBmdW5jdGlvbiAoZSkge1xuICBcIm9iamVjdFwiID09IHR5cGVvZiBtb2R1bGUgJiYgXCJvYmplY3RcIiA9PSB0eXBlb2YgbW9kdWxlLmV4cG9ydHMgPyBtb2R1bGUuZXhwb3J0cyA9IGUoKSA6IFwiZnVuY3Rpb25cIiA9PSB0eXBlb2YgZGVmaW5lICYmIGRlZmluZS5hbWQgPyBkZWZpbmUoZSkgOiBlKCk7XG59KGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIChlLCB0LCByLCBhKSB7XG4gICAgZnVuY3Rpb24gbihlKSB7XG4gICAgICBmb3IgKHZhciB0ID0gLTEsIHIgPSBlID8gZS5sZW5ndGggOiAwLCBhID0gW107ICsrdCA8IHI7KSB7XG4gICAgICAgIHZhciBuID0gZVt0XTtuICYmIGEucHVzaChuKTtcbiAgICAgIH1yZXR1cm4gYTtcbiAgICB9ZnVuY3Rpb24gbyhlKSB7XG4gICAgICByZXR1cm4gbS5pc1dyYXBwZWQoZSkgPyBlID0gW10uc2xpY2UuY2FsbChlKSA6IG0uaXNOb2RlKGUpICYmIChlID0gW2VdKSwgZTtcbiAgICB9ZnVuY3Rpb24gaShlKSB7XG4gICAgICB2YXIgdCA9IGYuZGF0YShlLCBcInZlbG9jaXR5XCIpO3JldHVybiBudWxsID09PSB0ID8gYSA6IHQ7XG4gICAgfWZ1bmN0aW9uIHMoZSkge1xuICAgICAgcmV0dXJuIGZ1bmN0aW9uICh0KSB7XG4gICAgICAgIHJldHVybiBNYXRoLnJvdW5kKHQgKiBlKSAqICgxIC8gZSk7XG4gICAgICB9O1xuICAgIH1mdW5jdGlvbiBsKGUsIHIsIGEsIG4pIHtcbiAgICAgIGZ1bmN0aW9uIG8oZSwgdCkge1xuICAgICAgICByZXR1cm4gMSAtIDMgKiB0ICsgMyAqIGU7XG4gICAgICB9ZnVuY3Rpb24gaShlLCB0KSB7XG4gICAgICAgIHJldHVybiAzICogdCAtIDYgKiBlO1xuICAgICAgfWZ1bmN0aW9uIHMoZSkge1xuICAgICAgICByZXR1cm4gMyAqIGU7XG4gICAgICB9ZnVuY3Rpb24gbChlLCB0LCByKSB7XG4gICAgICAgIHJldHVybiAoKG8odCwgcikgKiBlICsgaSh0LCByKSkgKiBlICsgcyh0KSkgKiBlO1xuICAgICAgfWZ1bmN0aW9uIHUoZSwgdCwgcikge1xuICAgICAgICByZXR1cm4gMyAqIG8odCwgcikgKiBlICogZSArIDIgKiBpKHQsIHIpICogZSArIHModCk7XG4gICAgICB9ZnVuY3Rpb24gYyh0LCByKSB7XG4gICAgICAgIGZvciAodmFyIG4gPSAwOyBtID4gbjsgKytuKSB7XG4gICAgICAgICAgdmFyIG8gPSB1KHIsIGUsIGEpO2lmICgwID09PSBvKSByZXR1cm4gcjt2YXIgaSA9IGwociwgZSwgYSkgLSB0O3IgLT0gaSAvIG87XG4gICAgICAgIH1yZXR1cm4gcjtcbiAgICAgIH1mdW5jdGlvbiBwKCkge1xuICAgICAgICBmb3IgKHZhciB0ID0gMDsgYiA+IHQ7ICsrdCkge1xuICAgICAgICAgIHdbdF0gPSBsKHQgKiB4LCBlLCBhKTtcbiAgICAgICAgfVxuICAgICAgfWZ1bmN0aW9uIGYodCwgciwgbikge1xuICAgICAgICB2YXIgbyxcbiAgICAgICAgICAgIGksXG4gICAgICAgICAgICBzID0gMDtkbyB7XG4gICAgICAgICAgaSA9IHIgKyAobiAtIHIpIC8gMiwgbyA9IGwoaSwgZSwgYSkgLSB0LCBvID4gMCA/IG4gPSBpIDogciA9IGk7XG4gICAgICAgIH0gd2hpbGUgKE1hdGguYWJzKG8pID4gaCAmJiArK3MgPCB2KTtyZXR1cm4gaTtcbiAgICAgIH1mdW5jdGlvbiBkKHQpIHtcbiAgICAgICAgZm9yICh2YXIgciA9IDAsIG4gPSAxLCBvID0gYiAtIDE7IG4gIT0gbyAmJiB3W25dIDw9IHQ7ICsrbikge1xuICAgICAgICAgIHIgKz0geDtcbiAgICAgICAgfS0tbjt2YXIgaSA9ICh0IC0gd1tuXSkgLyAod1tuICsgMV0gLSB3W25dKSxcbiAgICAgICAgICAgIHMgPSByICsgaSAqIHgsXG4gICAgICAgICAgICBsID0gdShzLCBlLCBhKTtyZXR1cm4gbCA+PSB5ID8gYyh0LCBzKSA6IDAgPT0gbCA/IHMgOiBmKHQsIHIsIHIgKyB4KTtcbiAgICAgIH1mdW5jdGlvbiBnKCkge1xuICAgICAgICBWID0gITAsIChlICE9IHIgfHwgYSAhPSBuKSAmJiBwKCk7XG4gICAgICB9dmFyIG0gPSA0LFxuICAgICAgICAgIHkgPSAuMDAxLFxuICAgICAgICAgIGggPSAxZS03LFxuICAgICAgICAgIHYgPSAxMCxcbiAgICAgICAgICBiID0gMTEsXG4gICAgICAgICAgeCA9IDEgLyAoYiAtIDEpLFxuICAgICAgICAgIFMgPSBcIkZsb2F0MzJBcnJheVwiIGluIHQ7aWYgKDQgIT09IGFyZ3VtZW50cy5sZW5ndGgpIHJldHVybiAhMTtmb3IgKHZhciBQID0gMDsgNCA+IFA7ICsrUCkge1xuICAgICAgICBpZiAoXCJudW1iZXJcIiAhPSB0eXBlb2YgYXJndW1lbnRzW1BdIHx8IGlzTmFOKGFyZ3VtZW50c1tQXSkgfHwgIWlzRmluaXRlKGFyZ3VtZW50c1tQXSkpIHJldHVybiAhMTtcbiAgICAgIH1lID0gTWF0aC5taW4oZSwgMSksIGEgPSBNYXRoLm1pbihhLCAxKSwgZSA9IE1hdGgubWF4KGUsIDApLCBhID0gTWF0aC5tYXgoYSwgMCk7dmFyIHcgPSBTID8gbmV3IEZsb2F0MzJBcnJheShiKSA6IG5ldyBBcnJheShiKSxcbiAgICAgICAgICBWID0gITEsXG4gICAgICAgICAgQyA9IGZ1bmN0aW9uICh0KSB7XG4gICAgICAgIHJldHVybiBWIHx8IGcoKSwgZSA9PT0gciAmJiBhID09PSBuID8gdCA6IDAgPT09IHQgPyAwIDogMSA9PT0gdCA/IDEgOiBsKGQodCksIHIsIG4pO1xuICAgICAgfTtDLmdldENvbnRyb2xQb2ludHMgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBbeyB4OiBlLCB5OiByIH0sIHsgeDogYSwgeTogbiB9XTtcbiAgICAgIH07dmFyIFQgPSBcImdlbmVyYXRlQmV6aWVyKFwiICsgW2UsIHIsIGEsIG5dICsgXCIpXCI7cmV0dXJuIEMudG9TdHJpbmcgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBUO1xuICAgICAgfSwgQztcbiAgICB9ZnVuY3Rpb24gdShlLCB0KSB7XG4gICAgICB2YXIgciA9IGU7cmV0dXJuIG0uaXNTdHJpbmcoZSkgPyBiLkVhc2luZ3NbZV0gfHwgKHIgPSAhMSkgOiByID0gbS5pc0FycmF5KGUpICYmIDEgPT09IGUubGVuZ3RoID8gcy5hcHBseShudWxsLCBlKSA6IG0uaXNBcnJheShlKSAmJiAyID09PSBlLmxlbmd0aCA/IHguYXBwbHkobnVsbCwgZS5jb25jYXQoW3RdKSkgOiBtLmlzQXJyYXkoZSkgJiYgNCA9PT0gZS5sZW5ndGggPyBsLmFwcGx5KG51bGwsIGUpIDogITEsIHIgPT09ICExICYmIChyID0gYi5FYXNpbmdzW2IuZGVmYXVsdHMuZWFzaW5nXSA/IGIuZGVmYXVsdHMuZWFzaW5nIDogdiksIHI7XG4gICAgfWZ1bmN0aW9uIGMoZSkge1xuICAgICAgaWYgKGUpIHtcbiAgICAgICAgdmFyIHQgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKSxcbiAgICAgICAgICAgIHIgPSBiLlN0YXRlLmNhbGxzLmxlbmd0aDtyID4gMWU0ICYmIChiLlN0YXRlLmNhbGxzID0gbihiLlN0YXRlLmNhbGxzKSk7Zm9yICh2YXIgbyA9IDA7IHIgPiBvOyBvKyspIHtcbiAgICAgICAgICBpZiAoYi5TdGF0ZS5jYWxsc1tvXSkge1xuICAgICAgICAgICAgdmFyIHMgPSBiLlN0YXRlLmNhbGxzW29dLFxuICAgICAgICAgICAgICAgIGwgPSBzWzBdLFxuICAgICAgICAgICAgICAgIHUgPSBzWzJdLFxuICAgICAgICAgICAgICAgIGQgPSBzWzNdLFxuICAgICAgICAgICAgICAgIGcgPSAhIWQsXG4gICAgICAgICAgICAgICAgeSA9IG51bGw7ZCB8fCAoZCA9IGIuU3RhdGUuY2FsbHNbb11bM10gPSB0IC0gMTYpO2ZvciAodmFyIGggPSBNYXRoLm1pbigodCAtIGQpIC8gdS5kdXJhdGlvbiwgMSksIHYgPSAwLCB4ID0gbC5sZW5ndGg7IHggPiB2OyB2KyspIHtcbiAgICAgICAgICAgICAgdmFyIFAgPSBsW3ZdLFxuICAgICAgICAgICAgICAgICAgViA9IFAuZWxlbWVudDtpZiAoaShWKSkge1xuICAgICAgICAgICAgICAgIHZhciBDID0gITE7aWYgKHUuZGlzcGxheSAhPT0gYSAmJiBudWxsICE9PSB1LmRpc3BsYXkgJiYgXCJub25lXCIgIT09IHUuZGlzcGxheSkge1xuICAgICAgICAgICAgICAgICAgaWYgKFwiZmxleFwiID09PSB1LmRpc3BsYXkpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIFQgPSBbXCItd2Via2l0LWJveFwiLCBcIi1tb3otYm94XCIsIFwiLW1zLWZsZXhib3hcIiwgXCItd2Via2l0LWZsZXhcIl07Zi5lYWNoKFQsIGZ1bmN0aW9uIChlLCB0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgUy5zZXRQcm9wZXJ0eVZhbHVlKFYsIFwiZGlzcGxheVwiLCB0KTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICB9Uy5zZXRQcm9wZXJ0eVZhbHVlKFYsIFwiZGlzcGxheVwiLCB1LmRpc3BsYXkpO1xuICAgICAgICAgICAgICAgIH11LnZpc2liaWxpdHkgIT09IGEgJiYgXCJoaWRkZW5cIiAhPT0gdS52aXNpYmlsaXR5ICYmIFMuc2V0UHJvcGVydHlWYWx1ZShWLCBcInZpc2liaWxpdHlcIiwgdS52aXNpYmlsaXR5KTtmb3IgKHZhciBrIGluIFApIHtcbiAgICAgICAgICAgICAgICAgIGlmIChcImVsZW1lbnRcIiAhPT0gaykge1xuICAgICAgICAgICAgICAgICAgICB2YXIgQSxcbiAgICAgICAgICAgICAgICAgICAgICAgIEYgPSBQW2tdLFxuICAgICAgICAgICAgICAgICAgICAgICAgaiA9IG0uaXNTdHJpbmcoRi5lYXNpbmcpID8gYi5FYXNpbmdzW0YuZWFzaW5nXSA6IEYuZWFzaW5nO2lmICgxID09PSBoKSBBID0gRi5lbmRWYWx1ZTtlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICB2YXIgRSA9IEYuZW5kVmFsdWUgLSBGLnN0YXJ0VmFsdWU7aWYgKEEgPSBGLnN0YXJ0VmFsdWUgKyBFICogaihoLCB1LCBFKSwgIWcgJiYgQSA9PT0gRi5jdXJyZW50VmFsdWUpIGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgICAgICB9aWYgKEYuY3VycmVudFZhbHVlID0gQSwgXCJ0d2VlblwiID09PSBrKSB5ID0gQTtlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICBpZiAoUy5Ib29rcy5yZWdpc3RlcmVkW2tdKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgSCA9IFMuSG9va3MuZ2V0Um9vdChrKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBOID0gaShWKS5yb290UHJvcGVydHlWYWx1ZUNhY2hlW0hdO04gJiYgKEYucm9vdFByb3BlcnR5VmFsdWUgPSBOKTtcbiAgICAgICAgICAgICAgICAgICAgICB9dmFyIEwgPSBTLnNldFByb3BlcnR5VmFsdWUoViwgaywgRi5jdXJyZW50VmFsdWUgKyAoMCA9PT0gcGFyc2VGbG9hdChBKSA/IFwiXCIgOiBGLnVuaXRUeXBlKSwgRi5yb290UHJvcGVydHlWYWx1ZSwgRi5zY3JvbGxEYXRhKTtTLkhvb2tzLnJlZ2lzdGVyZWRba10gJiYgKGkoVikucm9vdFByb3BlcnR5VmFsdWVDYWNoZVtIXSA9IFMuTm9ybWFsaXphdGlvbnMucmVnaXN0ZXJlZFtIXSA/IFMuTm9ybWFsaXphdGlvbnMucmVnaXN0ZXJlZFtIXShcImV4dHJhY3RcIiwgbnVsbCwgTFsxXSkgOiBMWzFdKSwgXCJ0cmFuc2Zvcm1cIiA9PT0gTFswXSAmJiAoQyA9ICEwKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH11Lm1vYmlsZUhBICYmIGkoVikudHJhbnNmb3JtQ2FjaGUudHJhbnNsYXRlM2QgPT09IGEgJiYgKGkoVikudHJhbnNmb3JtQ2FjaGUudHJhbnNsYXRlM2QgPSBcIigwcHgsIDBweCwgMHB4KVwiLCBDID0gITApLCBDICYmIFMuZmx1c2hUcmFuc2Zvcm1DYWNoZShWKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfXUuZGlzcGxheSAhPT0gYSAmJiBcIm5vbmVcIiAhPT0gdS5kaXNwbGF5ICYmIChiLlN0YXRlLmNhbGxzW29dWzJdLmRpc3BsYXkgPSAhMSksIHUudmlzaWJpbGl0eSAhPT0gYSAmJiBcImhpZGRlblwiICE9PSB1LnZpc2liaWxpdHkgJiYgKGIuU3RhdGUuY2FsbHNbb11bMl0udmlzaWJpbGl0eSA9ICExKSwgdS5wcm9ncmVzcyAmJiB1LnByb2dyZXNzLmNhbGwoc1sxXSwgc1sxXSwgaCwgTWF0aC5tYXgoMCwgZCArIHUuZHVyYXRpb24gLSB0KSwgZCwgeSksIDEgPT09IGggJiYgcChvKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1iLlN0YXRlLmlzVGlja2luZyAmJiB3KGMpO1xuICAgIH1mdW5jdGlvbiBwKGUsIHQpIHtcbiAgICAgIGlmICghYi5TdGF0ZS5jYWxsc1tlXSkgcmV0dXJuICExO2ZvciAodmFyIHIgPSBiLlN0YXRlLmNhbGxzW2VdWzBdLCBuID0gYi5TdGF0ZS5jYWxsc1tlXVsxXSwgbyA9IGIuU3RhdGUuY2FsbHNbZV1bMl0sIHMgPSBiLlN0YXRlLmNhbGxzW2VdWzRdLCBsID0gITEsIHUgPSAwLCBjID0gci5sZW5ndGg7IGMgPiB1OyB1KyspIHtcbiAgICAgICAgdmFyIHAgPSByW3VdLmVsZW1lbnQ7aWYgKHQgfHwgby5sb29wIHx8IChcIm5vbmVcIiA9PT0gby5kaXNwbGF5ICYmIFMuc2V0UHJvcGVydHlWYWx1ZShwLCBcImRpc3BsYXlcIiwgby5kaXNwbGF5KSwgXCJoaWRkZW5cIiA9PT0gby52aXNpYmlsaXR5ICYmIFMuc2V0UHJvcGVydHlWYWx1ZShwLCBcInZpc2liaWxpdHlcIiwgby52aXNpYmlsaXR5KSksIG8ubG9vcCAhPT0gITAgJiYgKGYucXVldWUocClbMV0gPT09IGEgfHwgIS9cXC52ZWxvY2l0eVF1ZXVlRW50cnlGbGFnL2kudGVzdChmLnF1ZXVlKHApWzFdKSkgJiYgaShwKSkge1xuICAgICAgICAgIGkocCkuaXNBbmltYXRpbmcgPSAhMSwgaShwKS5yb290UHJvcGVydHlWYWx1ZUNhY2hlID0ge307dmFyIGQgPSAhMTtmLmVhY2goUy5MaXN0cy50cmFuc2Zvcm1zM0QsIGZ1bmN0aW9uIChlLCB0KSB7XG4gICAgICAgICAgICB2YXIgciA9IC9ec2NhbGUvLnRlc3QodCkgPyAxIDogMCxcbiAgICAgICAgICAgICAgICBuID0gaShwKS50cmFuc2Zvcm1DYWNoZVt0XTtpKHApLnRyYW5zZm9ybUNhY2hlW3RdICE9PSBhICYmIG5ldyBSZWdFeHAoXCJeXFxcXChcIiArIHIgKyBcIlteLl1cIikudGVzdChuKSAmJiAoZCA9ICEwLCBkZWxldGUgaShwKS50cmFuc2Zvcm1DYWNoZVt0XSk7XG4gICAgICAgICAgfSksIG8ubW9iaWxlSEEgJiYgKGQgPSAhMCwgZGVsZXRlIGkocCkudHJhbnNmb3JtQ2FjaGUudHJhbnNsYXRlM2QpLCBkICYmIFMuZmx1c2hUcmFuc2Zvcm1DYWNoZShwKSwgUy5WYWx1ZXMucmVtb3ZlQ2xhc3MocCwgXCJ2ZWxvY2l0eS1hbmltYXRpbmdcIik7XG4gICAgICAgIH1pZiAoIXQgJiYgby5jb21wbGV0ZSAmJiAhby5sb29wICYmIHUgPT09IGMgLSAxKSB0cnkge1xuICAgICAgICAgIG8uY29tcGxldGUuY2FsbChuLCBuKTtcbiAgICAgICAgfSBjYXRjaCAoZykge1xuICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdGhyb3cgZztcbiAgICAgICAgICB9LCAxKTtcbiAgICAgICAgfXMgJiYgby5sb29wICE9PSAhMCAmJiBzKG4pLCBpKHApICYmIG8ubG9vcCA9PT0gITAgJiYgIXQgJiYgKGYuZWFjaChpKHApLnR3ZWVuc0NvbnRhaW5lciwgZnVuY3Rpb24gKGUsIHQpIHtcbiAgICAgICAgICAvXnJvdGF0ZS8udGVzdChlKSAmJiAzNjAgPT09IHBhcnNlRmxvYXQodC5lbmRWYWx1ZSkgJiYgKHQuZW5kVmFsdWUgPSAwLCB0LnN0YXJ0VmFsdWUgPSAzNjApLCAvXmJhY2tncm91bmRQb3NpdGlvbi8udGVzdChlKSAmJiAxMDAgPT09IHBhcnNlRmxvYXQodC5lbmRWYWx1ZSkgJiYgXCIlXCIgPT09IHQudW5pdFR5cGUgJiYgKHQuZW5kVmFsdWUgPSAwLCB0LnN0YXJ0VmFsdWUgPSAxMDApO1xuICAgICAgICB9KSwgYihwLCBcInJldmVyc2VcIiwgeyBsb29wOiAhMCwgZGVsYXk6IG8uZGVsYXkgfSkpLCBvLnF1ZXVlICE9PSAhMSAmJiBmLmRlcXVldWUocCwgby5xdWV1ZSk7XG4gICAgICB9Yi5TdGF0ZS5jYWxsc1tlXSA9ICExO2ZvciAodmFyIG0gPSAwLCB5ID0gYi5TdGF0ZS5jYWxscy5sZW5ndGg7IHkgPiBtOyBtKyspIHtcbiAgICAgICAgaWYgKGIuU3RhdGUuY2FsbHNbbV0gIT09ICExKSB7XG4gICAgICAgICAgbCA9ICEwO2JyZWFrO1xuICAgICAgICB9XG4gICAgICB9bCA9PT0gITEgJiYgKGIuU3RhdGUuaXNUaWNraW5nID0gITEsIGRlbGV0ZSBiLlN0YXRlLmNhbGxzLCBiLlN0YXRlLmNhbGxzID0gW10pO1xuICAgIH12YXIgZixcbiAgICAgICAgZCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIGlmIChyLmRvY3VtZW50TW9kZSkgcmV0dXJuIHIuZG9jdW1lbnRNb2RlO2ZvciAodmFyIGUgPSA3OyBlID4gNDsgZS0tKSB7XG4gICAgICAgIHZhciB0ID0gci5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO2lmICh0LmlubmVySFRNTCA9IFwiPCEtLVtpZiBJRSBcIiArIGUgKyBcIl0+PHNwYW4+PC9zcGFuPjwhW2VuZGlmXS0tPlwiLCB0LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic3BhblwiKS5sZW5ndGgpIHJldHVybiB0ID0gbnVsbCwgZTtcbiAgICAgIH1yZXR1cm4gYTtcbiAgICB9KCksXG4gICAgICAgIGcgPSBmdW5jdGlvbiAoKSB7XG4gICAgICB2YXIgZSA9IDA7cmV0dXJuIHQud2Via2l0UmVxdWVzdEFuaW1hdGlvbkZyYW1lIHx8IHQubW96UmVxdWVzdEFuaW1hdGlvbkZyYW1lIHx8IGZ1bmN0aW9uICh0KSB7XG4gICAgICAgIHZhciByLFxuICAgICAgICAgICAgYSA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpO3JldHVybiByID0gTWF0aC5tYXgoMCwgMTYgLSAoYSAtIGUpKSwgZSA9IGEgKyByLCBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICB0KGEgKyByKTtcbiAgICAgICAgfSwgcik7XG4gICAgICB9O1xuICAgIH0oKSxcbiAgICAgICAgbSA9IHsgaXNTdHJpbmc6IGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIHJldHVybiBcInN0cmluZ1wiID09IHR5cGVvZiBlO1xuICAgICAgfSwgaXNBcnJheTogQXJyYXkuaXNBcnJheSB8fCBmdW5jdGlvbiAoZSkge1xuICAgICAgICByZXR1cm4gXCJbb2JqZWN0IEFycmF5XVwiID09PSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoZSk7XG4gICAgICB9LCBpc0Z1bmN0aW9uOiBmdW5jdGlvbiAoZSkge1xuICAgICAgICByZXR1cm4gXCJbb2JqZWN0IEZ1bmN0aW9uXVwiID09PSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoZSk7XG4gICAgICB9LCBpc05vZGU6IGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIHJldHVybiBlICYmIGUubm9kZVR5cGU7XG4gICAgICB9LCBpc05vZGVMaXN0OiBmdW5jdGlvbiAoZSkge1xuICAgICAgICByZXR1cm4gXCJvYmplY3RcIiA9PSB0eXBlb2YgZSAmJiAvXlxcW29iamVjdCAoSFRNTENvbGxlY3Rpb258Tm9kZUxpc3R8T2JqZWN0KVxcXSQvLnRlc3QoT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKGUpKSAmJiBlLmxlbmd0aCAhPT0gYSAmJiAoMCA9PT0gZS5sZW5ndGggfHwgXCJvYmplY3RcIiA9PSB0eXBlb2YgZVswXSAmJiBlWzBdLm5vZGVUeXBlID4gMCk7XG4gICAgICB9LCBpc1dyYXBwZWQ6IGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIHJldHVybiBlICYmIChlLmpxdWVyeSB8fCB0LlplcHRvICYmIHQuWmVwdG8uemVwdG8uaXNaKGUpKTtcbiAgICAgIH0sIGlzU1ZHOiBmdW5jdGlvbiAoZSkge1xuICAgICAgICByZXR1cm4gdC5TVkdFbGVtZW50ICYmIGUgaW5zdGFuY2VvZiB0LlNWR0VsZW1lbnQ7XG4gICAgICB9LCBpc0VtcHR5T2JqZWN0OiBmdW5jdGlvbiAoZSkge1xuICAgICAgICBmb3IgKHZhciB0IGluIGUpIHtcbiAgICAgICAgICByZXR1cm4gITE7XG4gICAgICAgIH1yZXR1cm4gITA7XG4gICAgICB9IH0sXG4gICAgICAgIHkgPSAhMTtpZiAoZS5mbiAmJiBlLmZuLmpxdWVyeSA/IChmID0gZSwgeSA9ICEwKSA6IGYgPSB0LlZlbG9jaXR5LlV0aWxpdGllcywgOCA+PSBkICYmICF5KSB0aHJvdyBuZXcgRXJyb3IoXCJWZWxvY2l0eTogSUU4IGFuZCBiZWxvdyByZXF1aXJlIGpRdWVyeSB0byBiZSBsb2FkZWQgYmVmb3JlIFZlbG9jaXR5LlwiKTtpZiAoNyA+PSBkKSByZXR1cm4gdm9pZCAoalF1ZXJ5LmZuLnZlbG9jaXR5ID0galF1ZXJ5LmZuLmFuaW1hdGUpO3ZhciBoID0gNDAwLFxuICAgICAgICB2ID0gXCJzd2luZ1wiLFxuICAgICAgICBiID0geyBTdGF0ZTogeyBpc01vYmlsZTogL0FuZHJvaWR8d2ViT1N8aVBob25lfGlQYWR8aVBvZHxCbGFja0JlcnJ5fElFTW9iaWxlfE9wZXJhIE1pbmkvaS50ZXN0KG5hdmlnYXRvci51c2VyQWdlbnQpLCBpc0FuZHJvaWQ6IC9BbmRyb2lkL2kudGVzdChuYXZpZ2F0b3IudXNlckFnZW50KSwgaXNHaW5nZXJicmVhZDogL0FuZHJvaWQgMlxcLjNcXC5bMy03XS9pLnRlc3QobmF2aWdhdG9yLnVzZXJBZ2VudCksIGlzQ2hyb21lOiB0LmNocm9tZSwgaXNGaXJlZm94OiAvRmlyZWZveC9pLnRlc3QobmF2aWdhdG9yLnVzZXJBZ2VudCksIHByZWZpeEVsZW1lbnQ6IHIuY3JlYXRlRWxlbWVudChcImRpdlwiKSwgcHJlZml4TWF0Y2hlczoge30sIHNjcm9sbEFuY2hvcjogbnVsbCwgc2Nyb2xsUHJvcGVydHlMZWZ0OiBudWxsLCBzY3JvbGxQcm9wZXJ0eVRvcDogbnVsbCwgaXNUaWNraW5nOiAhMSwgY2FsbHM6IFtdIH0sIENTUzoge30sIFV0aWxpdGllczogZiwgUmVkaXJlY3RzOiB7fSwgRWFzaW5nczoge30sIFByb21pc2U6IHQuUHJvbWlzZSwgZGVmYXVsdHM6IHsgcXVldWU6IFwiXCIsIGR1cmF0aW9uOiBoLCBlYXNpbmc6IHYsIGJlZ2luOiBhLCBjb21wbGV0ZTogYSwgcHJvZ3Jlc3M6IGEsIGRpc3BsYXk6IGEsIHZpc2liaWxpdHk6IGEsIGxvb3A6ICExLCBkZWxheTogITEsIG1vYmlsZUhBOiAhMCwgX2NhY2hlVmFsdWVzOiAhMCB9LCBpbml0OiBmdW5jdGlvbiAoZSkge1xuICAgICAgICBmLmRhdGEoZSwgXCJ2ZWxvY2l0eVwiLCB7IGlzU1ZHOiBtLmlzU1ZHKGUpLCBpc0FuaW1hdGluZzogITEsIGNvbXB1dGVkU3R5bGU6IG51bGwsIHR3ZWVuc0NvbnRhaW5lcjogbnVsbCwgcm9vdFByb3BlcnR5VmFsdWVDYWNoZToge30sIHRyYW5zZm9ybUNhY2hlOiB7fSB9KTtcbiAgICAgIH0sIGhvb2s6IG51bGwsIG1vY2s6ICExLCB2ZXJzaW9uOiB7IG1ham9yOiAxLCBtaW5vcjogMiwgcGF0Y2g6IDIgfSwgZGVidWc6ICExIH07dC5wYWdlWU9mZnNldCAhPT0gYSA/IChiLlN0YXRlLnNjcm9sbEFuY2hvciA9IHQsIGIuU3RhdGUuc2Nyb2xsUHJvcGVydHlMZWZ0ID0gXCJwYWdlWE9mZnNldFwiLCBiLlN0YXRlLnNjcm9sbFByb3BlcnR5VG9wID0gXCJwYWdlWU9mZnNldFwiKSA6IChiLlN0YXRlLnNjcm9sbEFuY2hvciA9IHIuZG9jdW1lbnRFbGVtZW50IHx8IHIuYm9keS5wYXJlbnROb2RlIHx8IHIuYm9keSwgYi5TdGF0ZS5zY3JvbGxQcm9wZXJ0eUxlZnQgPSBcInNjcm9sbExlZnRcIiwgYi5TdGF0ZS5zY3JvbGxQcm9wZXJ0eVRvcCA9IFwic2Nyb2xsVG9wXCIpO3ZhciB4ID0gZnVuY3Rpb24gKCkge1xuICAgICAgZnVuY3Rpb24gZShlKSB7XG4gICAgICAgIHJldHVybiAtZS50ZW5zaW9uICogZS54IC0gZS5mcmljdGlvbiAqIGUudjtcbiAgICAgIH1mdW5jdGlvbiB0KHQsIHIsIGEpIHtcbiAgICAgICAgdmFyIG4gPSB7IHg6IHQueCArIGEuZHggKiByLCB2OiB0LnYgKyBhLmR2ICogciwgdGVuc2lvbjogdC50ZW5zaW9uLCBmcmljdGlvbjogdC5mcmljdGlvbiB9O3JldHVybiB7IGR4OiBuLnYsIGR2OiBlKG4pIH07XG4gICAgICB9ZnVuY3Rpb24gcihyLCBhKSB7XG4gICAgICAgIHZhciBuID0geyBkeDogci52LCBkdjogZShyKSB9LFxuICAgICAgICAgICAgbyA9IHQociwgLjUgKiBhLCBuKSxcbiAgICAgICAgICAgIGkgPSB0KHIsIC41ICogYSwgbyksXG4gICAgICAgICAgICBzID0gdChyLCBhLCBpKSxcbiAgICAgICAgICAgIGwgPSAxIC8gNiAqIChuLmR4ICsgMiAqIChvLmR4ICsgaS5keCkgKyBzLmR4KSxcbiAgICAgICAgICAgIHUgPSAxIC8gNiAqIChuLmR2ICsgMiAqIChvLmR2ICsgaS5kdikgKyBzLmR2KTtyZXR1cm4gci54ID0gci54ICsgbCAqIGEsIHIudiA9IHIudiArIHUgKiBhLCByO1xuICAgICAgfXJldHVybiBmdW5jdGlvbiBhKGUsIHQsIG4pIHtcbiAgICAgICAgdmFyIG8sXG4gICAgICAgICAgICBpLFxuICAgICAgICAgICAgcyxcbiAgICAgICAgICAgIGwgPSB7IHg6IC0xLCB2OiAwLCB0ZW5zaW9uOiBudWxsLCBmcmljdGlvbjogbnVsbCB9LFxuICAgICAgICAgICAgdSA9IFswXSxcbiAgICAgICAgICAgIGMgPSAwLFxuICAgICAgICAgICAgcCA9IDFlLTQsXG4gICAgICAgICAgICBmID0gLjAxNjtmb3IgKGUgPSBwYXJzZUZsb2F0KGUpIHx8IDUwMCwgdCA9IHBhcnNlRmxvYXQodCkgfHwgMjAsIG4gPSBuIHx8IG51bGwsIGwudGVuc2lvbiA9IGUsIGwuZnJpY3Rpb24gPSB0LCBvID0gbnVsbCAhPT0gbiwgbyA/IChjID0gYShlLCB0KSwgaSA9IGMgLyBuICogZikgOiBpID0gZjsgcyA9IHIocyB8fCBsLCBpKSwgdS5wdXNoKDEgKyBzLngpLCBjICs9IDE2LCBNYXRoLmFicyhzLngpID4gcCAmJiBNYXRoLmFicyhzLnYpID4gcDspIHt9cmV0dXJuIG8gPyBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgIHJldHVybiB1W2UgKiAodS5sZW5ndGggLSAxKSB8IDBdO1xuICAgICAgICB9IDogYztcbiAgICAgIH07XG4gICAgfSgpO2IuRWFzaW5ncyA9IHsgbGluZWFyOiBmdW5jdGlvbiAoZSkge1xuICAgICAgICByZXR1cm4gZTtcbiAgICAgIH0sIHN3aW5nOiBmdW5jdGlvbiAoZSkge1xuICAgICAgICByZXR1cm4gLjUgLSBNYXRoLmNvcyhlICogTWF0aC5QSSkgLyAyO1xuICAgICAgfSwgc3ByaW5nOiBmdW5jdGlvbiAoZSkge1xuICAgICAgICByZXR1cm4gMSAtIE1hdGguY29zKDQuNSAqIGUgKiBNYXRoLlBJKSAqIE1hdGguZXhwKDYgKiAtZSk7XG4gICAgICB9IH0sIGYuZWFjaChbW1wiZWFzZVwiLCBbLjI1LCAuMSwgLjI1LCAxXV0sIFtcImVhc2UtaW5cIiwgWy40MiwgMCwgMSwgMV1dLCBbXCJlYXNlLW91dFwiLCBbMCwgMCwgLjU4LCAxXV0sIFtcImVhc2UtaW4tb3V0XCIsIFsuNDIsIDAsIC41OCwgMV1dLCBbXCJlYXNlSW5TaW5lXCIsIFsuNDcsIDAsIC43NDUsIC43MTVdXSwgW1wiZWFzZU91dFNpbmVcIiwgWy4zOSwgLjU3NSwgLjU2NSwgMV1dLCBbXCJlYXNlSW5PdXRTaW5lXCIsIFsuNDQ1LCAuMDUsIC41NSwgLjk1XV0sIFtcImVhc2VJblF1YWRcIiwgWy41NSwgLjA4NSwgLjY4LCAuNTNdXSwgW1wiZWFzZU91dFF1YWRcIiwgWy4yNSwgLjQ2LCAuNDUsIC45NF1dLCBbXCJlYXNlSW5PdXRRdWFkXCIsIFsuNDU1LCAuMDMsIC41MTUsIC45NTVdXSwgW1wiZWFzZUluQ3ViaWNcIiwgWy41NSwgLjA1NSwgLjY3NSwgLjE5XV0sIFtcImVhc2VPdXRDdWJpY1wiLCBbLjIxNSwgLjYxLCAuMzU1LCAxXV0sIFtcImVhc2VJbk91dEN1YmljXCIsIFsuNjQ1LCAuMDQ1LCAuMzU1LCAxXV0sIFtcImVhc2VJblF1YXJ0XCIsIFsuODk1LCAuMDMsIC42ODUsIC4yMl1dLCBbXCJlYXNlT3V0UXVhcnRcIiwgWy4xNjUsIC44NCwgLjQ0LCAxXV0sIFtcImVhc2VJbk91dFF1YXJ0XCIsIFsuNzcsIDAsIC4xNzUsIDFdXSwgW1wiZWFzZUluUXVpbnRcIiwgWy43NTUsIC4wNSwgLjg1NSwgLjA2XV0sIFtcImVhc2VPdXRRdWludFwiLCBbLjIzLCAxLCAuMzIsIDFdXSwgW1wiZWFzZUluT3V0UXVpbnRcIiwgWy44NiwgMCwgLjA3LCAxXV0sIFtcImVhc2VJbkV4cG9cIiwgWy45NSwgLjA1LCAuNzk1LCAuMDM1XV0sIFtcImVhc2VPdXRFeHBvXCIsIFsuMTksIDEsIC4yMiwgMV1dLCBbXCJlYXNlSW5PdXRFeHBvXCIsIFsxLCAwLCAwLCAxXV0sIFtcImVhc2VJbkNpcmNcIiwgWy42LCAuMDQsIC45OCwgLjMzNV1dLCBbXCJlYXNlT3V0Q2lyY1wiLCBbLjA3NSwgLjgyLCAuMTY1LCAxXV0sIFtcImVhc2VJbk91dENpcmNcIiwgWy43ODUsIC4xMzUsIC4xNSwgLjg2XV1dLCBmdW5jdGlvbiAoZSwgdCkge1xuICAgICAgYi5FYXNpbmdzW3RbMF1dID0gbC5hcHBseShudWxsLCB0WzFdKTtcbiAgICB9KTt2YXIgUyA9IGIuQ1NTID0geyBSZWdFeDogeyBpc0hleDogL14jKFtBLWZcXGRdezN9KXsxLDJ9JC9pLCB2YWx1ZVVud3JhcDogL15bQS16XStcXCgoLiopXFwpJC9pLCB3cmFwcGVkVmFsdWVBbHJlYWR5RXh0cmFjdGVkOiAvWzAtOS5dKyBbMC05Ll0rIFswLTkuXSsoIFswLTkuXSspPy8sIHZhbHVlU3BsaXQ6IC8oW0Etel0rXFwoLitcXCkpfCgoW0EtejAtOSMtLl0rPykoPz1cXHN8JCkpL2dpIH0sIExpc3RzOiB7IGNvbG9yczogW1wiZmlsbFwiLCBcInN0cm9rZVwiLCBcInN0b3BDb2xvclwiLCBcImNvbG9yXCIsIFwiYmFja2dyb3VuZENvbG9yXCIsIFwiYm9yZGVyQ29sb3JcIiwgXCJib3JkZXJUb3BDb2xvclwiLCBcImJvcmRlclJpZ2h0Q29sb3JcIiwgXCJib3JkZXJCb3R0b21Db2xvclwiLCBcImJvcmRlckxlZnRDb2xvclwiLCBcIm91dGxpbmVDb2xvclwiXSwgdHJhbnNmb3Jtc0Jhc2U6IFtcInRyYW5zbGF0ZVhcIiwgXCJ0cmFuc2xhdGVZXCIsIFwic2NhbGVcIiwgXCJzY2FsZVhcIiwgXCJzY2FsZVlcIiwgXCJza2V3WFwiLCBcInNrZXdZXCIsIFwicm90YXRlWlwiXSwgdHJhbnNmb3JtczNEOiBbXCJ0cmFuc2Zvcm1QZXJzcGVjdGl2ZVwiLCBcInRyYW5zbGF0ZVpcIiwgXCJzY2FsZVpcIiwgXCJyb3RhdGVYXCIsIFwicm90YXRlWVwiXSB9LCBIb29rczogeyB0ZW1wbGF0ZXM6IHsgdGV4dFNoYWRvdzogW1wiQ29sb3IgWCBZIEJsdXJcIiwgXCJibGFjayAwcHggMHB4IDBweFwiXSwgYm94U2hhZG93OiBbXCJDb2xvciBYIFkgQmx1ciBTcHJlYWRcIiwgXCJibGFjayAwcHggMHB4IDBweCAwcHhcIl0sIGNsaXA6IFtcIlRvcCBSaWdodCBCb3R0b20gTGVmdFwiLCBcIjBweCAwcHggMHB4IDBweFwiXSwgYmFja2dyb3VuZFBvc2l0aW9uOiBbXCJYIFlcIiwgXCIwJSAwJVwiXSwgdHJhbnNmb3JtT3JpZ2luOiBbXCJYIFkgWlwiLCBcIjUwJSA1MCUgMHB4XCJdLCBwZXJzcGVjdGl2ZU9yaWdpbjogW1wiWCBZXCIsIFwiNTAlIDUwJVwiXSB9LCByZWdpc3RlcmVkOiB7fSwgcmVnaXN0ZXI6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICBmb3IgKHZhciBlID0gMDsgZSA8IFMuTGlzdHMuY29sb3JzLmxlbmd0aDsgZSsrKSB7XG4gICAgICAgICAgICB2YXIgdCA9IFwiY29sb3JcIiA9PT0gUy5MaXN0cy5jb2xvcnNbZV0gPyBcIjAgMCAwIDFcIiA6IFwiMjU1IDI1NSAyNTUgMVwiO1MuSG9va3MudGVtcGxhdGVzW1MuTGlzdHMuY29sb3JzW2VdXSA9IFtcIlJlZCBHcmVlbiBCbHVlIEFscGhhXCIsIHRdO1xuICAgICAgICAgIH12YXIgciwgYSwgbjtpZiAoZCkgZm9yIChyIGluIFMuSG9va3MudGVtcGxhdGVzKSB7XG4gICAgICAgICAgICBhID0gUy5Ib29rcy50ZW1wbGF0ZXNbcl0sIG4gPSBhWzBdLnNwbGl0KFwiIFwiKTt2YXIgbyA9IGFbMV0ubWF0Y2goUy5SZWdFeC52YWx1ZVNwbGl0KTtcIkNvbG9yXCIgPT09IG5bMF0gJiYgKG4ucHVzaChuLnNoaWZ0KCkpLCBvLnB1c2goby5zaGlmdCgpKSwgUy5Ib29rcy50ZW1wbGF0ZXNbcl0gPSBbbi5qb2luKFwiIFwiKSwgby5qb2luKFwiIFwiKV0pO1xuICAgICAgICAgIH1mb3IgKHIgaW4gUy5Ib29rcy50ZW1wbGF0ZXMpIHtcbiAgICAgICAgICAgIGEgPSBTLkhvb2tzLnRlbXBsYXRlc1tyXSwgbiA9IGFbMF0uc3BsaXQoXCIgXCIpO2ZvciAodmFyIGUgaW4gbikge1xuICAgICAgICAgICAgICB2YXIgaSA9IHIgKyBuW2VdLFxuICAgICAgICAgICAgICAgICAgcyA9IGU7Uy5Ib29rcy5yZWdpc3RlcmVkW2ldID0gW3IsIHNdO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfSwgZ2V0Um9vdDogZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICB2YXIgdCA9IFMuSG9va3MucmVnaXN0ZXJlZFtlXTtyZXR1cm4gdCA/IHRbMF0gOiBlO1xuICAgICAgICB9LCBjbGVhblJvb3RQcm9wZXJ0eVZhbHVlOiBmdW5jdGlvbiAoZSwgdCkge1xuICAgICAgICAgIHJldHVybiBTLlJlZ0V4LnZhbHVlVW53cmFwLnRlc3QodCkgJiYgKHQgPSB0Lm1hdGNoKFMuUmVnRXgudmFsdWVVbndyYXApWzFdKSwgUy5WYWx1ZXMuaXNDU1NOdWxsVmFsdWUodCkgJiYgKHQgPSBTLkhvb2tzLnRlbXBsYXRlc1tlXVsxXSksIHQ7XG4gICAgICAgIH0sIGV4dHJhY3RWYWx1ZTogZnVuY3Rpb24gKGUsIHQpIHtcbiAgICAgICAgICB2YXIgciA9IFMuSG9va3MucmVnaXN0ZXJlZFtlXTtpZiAocikge1xuICAgICAgICAgICAgdmFyIGEgPSByWzBdLFxuICAgICAgICAgICAgICAgIG4gPSByWzFdO3JldHVybiB0ID0gUy5Ib29rcy5jbGVhblJvb3RQcm9wZXJ0eVZhbHVlKGEsIHQpLCB0LnRvU3RyaW5nKCkubWF0Y2goUy5SZWdFeC52YWx1ZVNwbGl0KVtuXTtcbiAgICAgICAgICB9cmV0dXJuIHQ7XG4gICAgICAgIH0sIGluamVjdFZhbHVlOiBmdW5jdGlvbiAoZSwgdCwgcikge1xuICAgICAgICAgIHZhciBhID0gUy5Ib29rcy5yZWdpc3RlcmVkW2VdO2lmIChhKSB7XG4gICAgICAgICAgICB2YXIgbixcbiAgICAgICAgICAgICAgICBvLFxuICAgICAgICAgICAgICAgIGkgPSBhWzBdLFxuICAgICAgICAgICAgICAgIHMgPSBhWzFdO3JldHVybiByID0gUy5Ib29rcy5jbGVhblJvb3RQcm9wZXJ0eVZhbHVlKGksIHIpLCBuID0gci50b1N0cmluZygpLm1hdGNoKFMuUmVnRXgudmFsdWVTcGxpdCksIG5bc10gPSB0LCBvID0gbi5qb2luKFwiIFwiKTtcbiAgICAgICAgICB9cmV0dXJuIHI7XG4gICAgICAgIH0gfSwgTm9ybWFsaXphdGlvbnM6IHsgcmVnaXN0ZXJlZDogeyBjbGlwOiBmdW5jdGlvbiAoZSwgdCwgcikge1xuICAgICAgICAgICAgc3dpdGNoIChlKSB7Y2FzZSBcIm5hbWVcIjpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJjbGlwXCI7Y2FzZSBcImV4dHJhY3RcIjpcbiAgICAgICAgICAgICAgICB2YXIgYTtyZXR1cm4gUy5SZWdFeC53cmFwcGVkVmFsdWVBbHJlYWR5RXh0cmFjdGVkLnRlc3QocikgPyBhID0gciA6IChhID0gci50b1N0cmluZygpLm1hdGNoKFMuUmVnRXgudmFsdWVVbndyYXApLCBhID0gYSA/IGFbMV0ucmVwbGFjZSgvLChcXHMrKT8vZywgXCIgXCIpIDogciksIGE7Y2FzZSBcImluamVjdFwiOlxuICAgICAgICAgICAgICAgIHJldHVybiBcInJlY3QoXCIgKyByICsgXCIpXCI7fVxuICAgICAgICAgIH0sIGJsdXI6IGZ1bmN0aW9uIChlLCB0LCByKSB7XG4gICAgICAgICAgICBzd2l0Y2ggKGUpIHtjYXNlIFwibmFtZVwiOlxuICAgICAgICAgICAgICAgIHJldHVybiBiLlN0YXRlLmlzRmlyZWZveCA/IFwiZmlsdGVyXCIgOiBcIi13ZWJraXQtZmlsdGVyXCI7Y2FzZSBcImV4dHJhY3RcIjpcbiAgICAgICAgICAgICAgICB2YXIgYSA9IHBhcnNlRmxvYXQocik7aWYgKCFhICYmIDAgIT09IGEpIHtcbiAgICAgICAgICAgICAgICAgIHZhciBuID0gci50b1N0cmluZygpLm1hdGNoKC9ibHVyXFwoKFswLTldK1tBLXpdKylcXCkvaSk7YSA9IG4gPyBuWzFdIDogMDtcbiAgICAgICAgICAgICAgICB9cmV0dXJuIGE7Y2FzZSBcImluamVjdFwiOlxuICAgICAgICAgICAgICAgIHJldHVybiBwYXJzZUZsb2F0KHIpID8gXCJibHVyKFwiICsgciArIFwiKVwiIDogXCJub25lXCI7fVxuICAgICAgICAgIH0sIG9wYWNpdHk6IGZ1bmN0aW9uIChlLCB0LCByKSB7XG4gICAgICAgICAgICBpZiAoOCA+PSBkKSBzd2l0Y2ggKGUpIHtjYXNlIFwibmFtZVwiOlxuICAgICAgICAgICAgICAgIHJldHVybiBcImZpbHRlclwiO2Nhc2UgXCJleHRyYWN0XCI6XG4gICAgICAgICAgICAgICAgdmFyIGEgPSByLnRvU3RyaW5nKCkubWF0Y2goL2FscGhhXFwob3BhY2l0eT0oLiopXFwpL2kpO3JldHVybiByID0gYSA/IGFbMV0gLyAxMDAgOiAxO2Nhc2UgXCJpbmplY3RcIjpcbiAgICAgICAgICAgICAgICByZXR1cm4gdC5zdHlsZS56b29tID0gMSwgcGFyc2VGbG9hdChyKSA+PSAxID8gXCJcIiA6IFwiYWxwaGEob3BhY2l0eT1cIiArIHBhcnNlSW50KDEwMCAqIHBhcnNlRmxvYXQociksIDEwKSArIFwiKVwiO30gZWxzZSBzd2l0Y2ggKGUpIHtjYXNlIFwibmFtZVwiOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIm9wYWNpdHlcIjtjYXNlIFwiZXh0cmFjdFwiOlxuICAgICAgICAgICAgICAgIHJldHVybiByO2Nhc2UgXCJpbmplY3RcIjpcbiAgICAgICAgICAgICAgICByZXR1cm4gcjt9XG4gICAgICAgICAgfSB9LCByZWdpc3RlcjogZnVuY3Rpb24gKCkge1xuICAgICAgICAgIDkgPj0gZCB8fCBiLlN0YXRlLmlzR2luZ2VyYnJlYWQgfHwgKFMuTGlzdHMudHJhbnNmb3Jtc0Jhc2UgPSBTLkxpc3RzLnRyYW5zZm9ybXNCYXNlLmNvbmNhdChTLkxpc3RzLnRyYW5zZm9ybXMzRCkpO2ZvciAodmFyIGUgPSAwOyBlIDwgUy5MaXN0cy50cmFuc2Zvcm1zQmFzZS5sZW5ndGg7IGUrKykge1xuICAgICAgICAgICAgIWZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgdmFyIHQgPSBTLkxpc3RzLnRyYW5zZm9ybXNCYXNlW2VdO1MuTm9ybWFsaXphdGlvbnMucmVnaXN0ZXJlZFt0XSA9IGZ1bmN0aW9uIChlLCByLCBuKSB7XG4gICAgICAgICAgICAgICAgc3dpdGNoIChlKSB7Y2FzZSBcIm5hbWVcIjpcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFwidHJhbnNmb3JtXCI7Y2FzZSBcImV4dHJhY3RcIjpcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGkocikgPT09IGEgfHwgaShyKS50cmFuc2Zvcm1DYWNoZVt0XSA9PT0gYSA/IC9ec2NhbGUvaS50ZXN0KHQpID8gMSA6IDAgOiBpKHIpLnRyYW5zZm9ybUNhY2hlW3RdLnJlcGxhY2UoL1soKV0vZywgXCJcIik7Y2FzZSBcImluamVjdFwiOlxuICAgICAgICAgICAgICAgICAgICB2YXIgbyA9ICExO3N3aXRjaCAodC5zdWJzdHIoMCwgdC5sZW5ndGggLSAxKSkge2Nhc2UgXCJ0cmFuc2xhdGVcIjpcbiAgICAgICAgICAgICAgICAgICAgICAgIG8gPSAhLyglfHB4fGVtfHJlbXx2d3x2aHxcXGQpJC9pLnRlc3Qobik7YnJlYWs7Y2FzZSBcInNjYWxcIjpjYXNlIFwic2NhbGVcIjpcbiAgICAgICAgICAgICAgICAgICAgICAgIGIuU3RhdGUuaXNBbmRyb2lkICYmIGkocikudHJhbnNmb3JtQ2FjaGVbdF0gPT09IGEgJiYgMSA+IG4gJiYgKG4gPSAxKSwgbyA9ICEvKFxcZCkkL2kudGVzdChuKTticmVhaztjYXNlIFwic2tld1wiOlxuICAgICAgICAgICAgICAgICAgICAgICAgbyA9ICEvKGRlZ3xcXGQpJC9pLnRlc3Qobik7YnJlYWs7Y2FzZSBcInJvdGF0ZVwiOlxuICAgICAgICAgICAgICAgICAgICAgICAgbyA9ICEvKGRlZ3xcXGQpJC9pLnRlc3Qobik7fXJldHVybiBvIHx8IChpKHIpLnRyYW5zZm9ybUNhY2hlW3RdID0gXCIoXCIgKyBuICsgXCIpXCIpLCBpKHIpLnRyYW5zZm9ybUNhY2hlW3RdO31cbiAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIH0oKTtcbiAgICAgICAgICB9Zm9yICh2YXIgZSA9IDA7IGUgPCBTLkxpc3RzLmNvbG9ycy5sZW5ndGg7IGUrKykge1xuICAgICAgICAgICAgIWZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgdmFyIHQgPSBTLkxpc3RzLmNvbG9yc1tlXTtTLk5vcm1hbGl6YXRpb25zLnJlZ2lzdGVyZWRbdF0gPSBmdW5jdGlvbiAoZSwgciwgbikge1xuICAgICAgICAgICAgICAgIHN3aXRjaCAoZSkge2Nhc2UgXCJuYW1lXCI6XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0O2Nhc2UgXCJleHRyYWN0XCI6XG4gICAgICAgICAgICAgICAgICAgIHZhciBvO2lmIChTLlJlZ0V4LndyYXBwZWRWYWx1ZUFscmVhZHlFeHRyYWN0ZWQudGVzdChuKSkgbyA9IG47ZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgdmFyIGksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHMgPSB7IGJsYWNrOiBcInJnYigwLCAwLCAwKVwiLCBibHVlOiBcInJnYigwLCAwLCAyNTUpXCIsIGdyYXk6IFwicmdiKDEyOCwgMTI4LCAxMjgpXCIsIGdyZWVuOiBcInJnYigwLCAxMjgsIDApXCIsIHJlZDogXCJyZ2IoMjU1LCAwLCAwKVwiLCB3aGl0ZTogXCJyZ2IoMjU1LCAyNTUsIDI1NSlcIiB9Oy9eW0Etel0rJC9pLnRlc3QobikgPyBpID0gc1tuXSAhPT0gYSA/IHNbbl0gOiBzLmJsYWNrIDogUy5SZWdFeC5pc0hleC50ZXN0KG4pID8gaSA9IFwicmdiKFwiICsgUy5WYWx1ZXMuaGV4VG9SZ2Iobikuam9pbihcIiBcIikgKyBcIilcIiA6IC9ecmdiYT9cXCgvaS50ZXN0KG4pIHx8IChpID0gcy5ibGFjayksIG8gPSAoaSB8fCBuKS50b1N0cmluZygpLm1hdGNoKFMuUmVnRXgudmFsdWVVbndyYXApWzFdLnJlcGxhY2UoLywoXFxzKyk/L2csIFwiIFwiKTtcbiAgICAgICAgICAgICAgICAgICAgfXJldHVybiA4ID49IGQgfHwgMyAhPT0gby5zcGxpdChcIiBcIikubGVuZ3RoIHx8IChvICs9IFwiIDFcIiksIG87Y2FzZSBcImluamVjdFwiOlxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gOCA+PSBkID8gNCA9PT0gbi5zcGxpdChcIiBcIikubGVuZ3RoICYmIChuID0gbi5zcGxpdCgvXFxzKy8pLnNsaWNlKDAsIDMpLmpvaW4oXCIgXCIpKSA6IDMgPT09IG4uc3BsaXQoXCIgXCIpLmxlbmd0aCAmJiAobiArPSBcIiAxXCIpLCAoOCA+PSBkID8gXCJyZ2JcIiA6IFwicmdiYVwiKSArIFwiKFwiICsgbi5yZXBsYWNlKC9cXHMrL2csIFwiLFwiKS5yZXBsYWNlKC9cXC4oXFxkKSsoPz0sKS9nLCBcIlwiKSArIFwiKVwiO31cbiAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIH0oKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gfSwgTmFtZXM6IHsgY2FtZWxDYXNlOiBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgIHJldHVybiBlLnJlcGxhY2UoLy0oXFx3KS9nLCBmdW5jdGlvbiAoZSwgdCkge1xuICAgICAgICAgICAgcmV0dXJuIHQudG9VcHBlckNhc2UoKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfSwgU1ZHQXR0cmlidXRlOiBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgIHZhciB0ID0gXCJ3aWR0aHxoZWlnaHR8eHx5fGN4fGN5fHJ8cnh8cnl8eDF8eDJ8eTF8eTJcIjtyZXR1cm4gKGQgfHwgYi5TdGF0ZS5pc0FuZHJvaWQgJiYgIWIuU3RhdGUuaXNDaHJvbWUpICYmICh0ICs9IFwifHRyYW5zZm9ybVwiKSwgbmV3IFJlZ0V4cChcIl4oXCIgKyB0ICsgXCIpJFwiLCBcImlcIikudGVzdChlKTtcbiAgICAgICAgfSwgcHJlZml4Q2hlY2s6IGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgaWYgKGIuU3RhdGUucHJlZml4TWF0Y2hlc1tlXSkgcmV0dXJuIFtiLlN0YXRlLnByZWZpeE1hdGNoZXNbZV0sICEwXTtmb3IgKHZhciB0ID0gW1wiXCIsIFwiV2Via2l0XCIsIFwiTW96XCIsIFwibXNcIiwgXCJPXCJdLCByID0gMCwgYSA9IHQubGVuZ3RoOyBhID4gcjsgcisrKSB7XG4gICAgICAgICAgICB2YXIgbjtpZiAobiA9IDAgPT09IHIgPyBlIDogdFtyXSArIGUucmVwbGFjZSgvXlxcdy8sIGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICAgIHJldHVybiBlLnRvVXBwZXJDYXNlKCk7XG4gICAgICAgICAgICB9KSwgbS5pc1N0cmluZyhiLlN0YXRlLnByZWZpeEVsZW1lbnQuc3R5bGVbbl0pKSByZXR1cm4gYi5TdGF0ZS5wcmVmaXhNYXRjaGVzW2VdID0gbiwgW24sICEwXTtcbiAgICAgICAgICB9cmV0dXJuIFtlLCAhMV07XG4gICAgICAgIH0gfSwgVmFsdWVzOiB7IGhleFRvUmdiOiBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgIHZhciB0LFxuICAgICAgICAgICAgICByID0gL14jPyhbYS1mXFxkXSkoW2EtZlxcZF0pKFthLWZcXGRdKSQvaSxcbiAgICAgICAgICAgICAgYSA9IC9eIz8oW2EtZlxcZF17Mn0pKFthLWZcXGRdezJ9KShbYS1mXFxkXXsyfSkkL2k7cmV0dXJuIGUgPSBlLnJlcGxhY2UociwgZnVuY3Rpb24gKGUsIHQsIHIsIGEpIHtcbiAgICAgICAgICAgIHJldHVybiB0ICsgdCArIHIgKyByICsgYSArIGE7XG4gICAgICAgICAgfSksIHQgPSBhLmV4ZWMoZSksIHQgPyBbcGFyc2VJbnQodFsxXSwgMTYpLCBwYXJzZUludCh0WzJdLCAxNiksIHBhcnNlSW50KHRbM10sIDE2KV0gOiBbMCwgMCwgMF07XG4gICAgICAgIH0sIGlzQ1NTTnVsbFZhbHVlOiBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgIHJldHVybiAwID09IGUgfHwgL14obm9uZXxhdXRvfHRyYW5zcGFyZW50fChyZ2JhXFwoMCwgPzAsID8wLCA/MFxcKSkpJC9pLnRlc3QoZSk7XG4gICAgICAgIH0sIGdldFVuaXRUeXBlOiBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgIHJldHVybiAoL14ocm90YXRlfHNrZXcpL2kudGVzdChlKSA/IFwiZGVnXCIgOiAvKF4oc2NhbGV8c2NhbGVYfHNjYWxlWXxzY2FsZVp8YWxwaGF8ZmxleEdyb3d8ZmxleEhlaWdodHx6SW5kZXh8Zm9udFdlaWdodCkkKXwoKG9wYWNpdHl8cmVkfGdyZWVufGJsdWV8YWxwaGEpJCkvaS50ZXN0KGUpID8gXCJcIiA6IFwicHhcIlxuICAgICAgICAgICk7XG4gICAgICAgIH0sIGdldERpc3BsYXlUeXBlOiBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgIHZhciB0ID0gZSAmJiBlLnRhZ05hbWUudG9TdHJpbmcoKS50b0xvd2VyQ2FzZSgpO3JldHVybiAoL14oYnxiaWd8aXxzbWFsbHx0dHxhYmJyfGFjcm9ueW18Y2l0ZXxjb2RlfGRmbnxlbXxrYmR8c3Ryb25nfHNhbXB8dmFyfGF8YmRvfGJyfGltZ3xtYXB8b2JqZWN0fHF8c2NyaXB0fHNwYW58c3VifHN1cHxidXR0b258aW5wdXR8bGFiZWx8c2VsZWN0fHRleHRhcmVhKSQvaS50ZXN0KHQpID8gXCJpbmxpbmVcIiA6IC9eKGxpKSQvaS50ZXN0KHQpID8gXCJsaXN0LWl0ZW1cIiA6IC9eKHRyKSQvaS50ZXN0KHQpID8gXCJ0YWJsZS1yb3dcIiA6IC9eKHRhYmxlKSQvaS50ZXN0KHQpID8gXCJ0YWJsZVwiIDogL14odGJvZHkpJC9pLnRlc3QodCkgPyBcInRhYmxlLXJvdy1ncm91cFwiIDogXCJibG9ja1wiXG4gICAgICAgICAgKTtcbiAgICAgICAgfSwgYWRkQ2xhc3M6IGZ1bmN0aW9uIChlLCB0KSB7XG4gICAgICAgICAgZS5jbGFzc0xpc3QgPyBlLmNsYXNzTGlzdC5hZGQodCkgOiBlLmNsYXNzTmFtZSArPSAoZS5jbGFzc05hbWUubGVuZ3RoID8gXCIgXCIgOiBcIlwiKSArIHQ7XG4gICAgICAgIH0sIHJlbW92ZUNsYXNzOiBmdW5jdGlvbiAoZSwgdCkge1xuICAgICAgICAgIGUuY2xhc3NMaXN0ID8gZS5jbGFzc0xpc3QucmVtb3ZlKHQpIDogZS5jbGFzc05hbWUgPSBlLmNsYXNzTmFtZS50b1N0cmluZygpLnJlcGxhY2UobmV3IFJlZ0V4cChcIihefFxcXFxzKVwiICsgdC5zcGxpdChcIiBcIikuam9pbihcInxcIikgKyBcIihcXFxcc3wkKVwiLCBcImdpXCIpLCBcIiBcIik7XG4gICAgICAgIH0gfSwgZ2V0UHJvcGVydHlWYWx1ZTogZnVuY3Rpb24gKGUsIHIsIG4sIG8pIHtcbiAgICAgICAgZnVuY3Rpb24gcyhlLCByKSB7XG4gICAgICAgICAgZnVuY3Rpb24gbigpIHtcbiAgICAgICAgICAgIHUgJiYgUy5zZXRQcm9wZXJ0eVZhbHVlKGUsIFwiZGlzcGxheVwiLCBcIm5vbmVcIik7XG4gICAgICAgICAgfXZhciBsID0gMDtpZiAoOCA+PSBkKSBsID0gZi5jc3MoZSwgcik7ZWxzZSB7XG4gICAgICAgICAgICB2YXIgdSA9ICExO2lmICgvXih3aWR0aHxoZWlnaHQpJC8udGVzdChyKSAmJiAwID09PSBTLmdldFByb3BlcnR5VmFsdWUoZSwgXCJkaXNwbGF5XCIpICYmICh1ID0gITAsIFMuc2V0UHJvcGVydHlWYWx1ZShlLCBcImRpc3BsYXlcIiwgUy5WYWx1ZXMuZ2V0RGlzcGxheVR5cGUoZSkpKSwgIW8pIHtcbiAgICAgICAgICAgICAgaWYgKFwiaGVpZ2h0XCIgPT09IHIgJiYgXCJib3JkZXItYm94XCIgIT09IFMuZ2V0UHJvcGVydHlWYWx1ZShlLCBcImJveFNpemluZ1wiKS50b1N0cmluZygpLnRvTG93ZXJDYXNlKCkpIHtcbiAgICAgICAgICAgICAgICB2YXIgYyA9IGUub2Zmc2V0SGVpZ2h0IC0gKHBhcnNlRmxvYXQoUy5nZXRQcm9wZXJ0eVZhbHVlKGUsIFwiYm9yZGVyVG9wV2lkdGhcIikpIHx8IDApIC0gKHBhcnNlRmxvYXQoUy5nZXRQcm9wZXJ0eVZhbHVlKGUsIFwiYm9yZGVyQm90dG9tV2lkdGhcIikpIHx8IDApIC0gKHBhcnNlRmxvYXQoUy5nZXRQcm9wZXJ0eVZhbHVlKGUsIFwicGFkZGluZ1RvcFwiKSkgfHwgMCkgLSAocGFyc2VGbG9hdChTLmdldFByb3BlcnR5VmFsdWUoZSwgXCJwYWRkaW5nQm90dG9tXCIpKSB8fCAwKTtyZXR1cm4gbigpLCBjO1xuICAgICAgICAgICAgICB9aWYgKFwid2lkdGhcIiA9PT0gciAmJiBcImJvcmRlci1ib3hcIiAhPT0gUy5nZXRQcm9wZXJ0eVZhbHVlKGUsIFwiYm94U2l6aW5nXCIpLnRvU3RyaW5nKCkudG9Mb3dlckNhc2UoKSkge1xuICAgICAgICAgICAgICAgIHZhciBwID0gZS5vZmZzZXRXaWR0aCAtIChwYXJzZUZsb2F0KFMuZ2V0UHJvcGVydHlWYWx1ZShlLCBcImJvcmRlckxlZnRXaWR0aFwiKSkgfHwgMCkgLSAocGFyc2VGbG9hdChTLmdldFByb3BlcnR5VmFsdWUoZSwgXCJib3JkZXJSaWdodFdpZHRoXCIpKSB8fCAwKSAtIChwYXJzZUZsb2F0KFMuZ2V0UHJvcGVydHlWYWx1ZShlLCBcInBhZGRpbmdMZWZ0XCIpKSB8fCAwKSAtIChwYXJzZUZsb2F0KFMuZ2V0UHJvcGVydHlWYWx1ZShlLCBcInBhZGRpbmdSaWdodFwiKSkgfHwgMCk7cmV0dXJuIG4oKSwgcDtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfXZhciBnO2cgPSBpKGUpID09PSBhID8gdC5nZXRDb21wdXRlZFN0eWxlKGUsIG51bGwpIDogaShlKS5jb21wdXRlZFN0eWxlID8gaShlKS5jb21wdXRlZFN0eWxlIDogaShlKS5jb21wdXRlZFN0eWxlID0gdC5nZXRDb21wdXRlZFN0eWxlKGUsIG51bGwpLCBcImJvcmRlckNvbG9yXCIgPT09IHIgJiYgKHIgPSBcImJvcmRlclRvcENvbG9yXCIpLCBsID0gOSA9PT0gZCAmJiBcImZpbHRlclwiID09PSByID8gZy5nZXRQcm9wZXJ0eVZhbHVlKHIpIDogZ1tyXSwgKFwiXCIgPT09IGwgfHwgbnVsbCA9PT0gbCkgJiYgKGwgPSBlLnN0eWxlW3JdKSwgbigpO1xuICAgICAgICAgIH1pZiAoXCJhdXRvXCIgPT09IGwgJiYgL14odG9wfHJpZ2h0fGJvdHRvbXxsZWZ0KSQvaS50ZXN0KHIpKSB7XG4gICAgICAgICAgICB2YXIgbSA9IHMoZSwgXCJwb3NpdGlvblwiKTsoXCJmaXhlZFwiID09PSBtIHx8IFwiYWJzb2x1dGVcIiA9PT0gbSAmJiAvdG9wfGxlZnQvaS50ZXN0KHIpKSAmJiAobCA9IGYoZSkucG9zaXRpb24oKVtyXSArIFwicHhcIik7XG4gICAgICAgICAgfXJldHVybiBsO1xuICAgICAgICB9dmFyIGw7aWYgKFMuSG9va3MucmVnaXN0ZXJlZFtyXSkge1xuICAgICAgICAgIHZhciB1ID0gcixcbiAgICAgICAgICAgICAgYyA9IFMuSG9va3MuZ2V0Um9vdCh1KTtuID09PSBhICYmIChuID0gUy5nZXRQcm9wZXJ0eVZhbHVlKGUsIFMuTmFtZXMucHJlZml4Q2hlY2soYylbMF0pKSwgUy5Ob3JtYWxpemF0aW9ucy5yZWdpc3RlcmVkW2NdICYmIChuID0gUy5Ob3JtYWxpemF0aW9ucy5yZWdpc3RlcmVkW2NdKFwiZXh0cmFjdFwiLCBlLCBuKSksIGwgPSBTLkhvb2tzLmV4dHJhY3RWYWx1ZSh1LCBuKTtcbiAgICAgICAgfSBlbHNlIGlmIChTLk5vcm1hbGl6YXRpb25zLnJlZ2lzdGVyZWRbcl0pIHtcbiAgICAgICAgICB2YXIgcCwgZztwID0gUy5Ob3JtYWxpemF0aW9ucy5yZWdpc3RlcmVkW3JdKFwibmFtZVwiLCBlKSwgXCJ0cmFuc2Zvcm1cIiAhPT0gcCAmJiAoZyA9IHMoZSwgUy5OYW1lcy5wcmVmaXhDaGVjayhwKVswXSksIFMuVmFsdWVzLmlzQ1NTTnVsbFZhbHVlKGcpICYmIFMuSG9va3MudGVtcGxhdGVzW3JdICYmIChnID0gUy5Ib29rcy50ZW1wbGF0ZXNbcl1bMV0pKSwgbCA9IFMuTm9ybWFsaXphdGlvbnMucmVnaXN0ZXJlZFtyXShcImV4dHJhY3RcIiwgZSwgZyk7XG4gICAgICAgIH1pZiAoIS9eW1xcZC1dLy50ZXN0KGwpKSBpZiAoaShlKSAmJiBpKGUpLmlzU1ZHICYmIFMuTmFtZXMuU1ZHQXR0cmlidXRlKHIpKSB7XG4gICAgICAgICAgaWYgKC9eKGhlaWdodHx3aWR0aCkkL2kudGVzdChyKSkgdHJ5IHtcbiAgICAgICAgICAgIGwgPSBlLmdldEJCb3goKVtyXTtcbiAgICAgICAgICB9IGNhdGNoIChtKSB7XG4gICAgICAgICAgICBsID0gMDtcbiAgICAgICAgICB9IGVsc2UgbCA9IGUuZ2V0QXR0cmlidXRlKHIpO1xuICAgICAgICB9IGVsc2UgbCA9IHMoZSwgUy5OYW1lcy5wcmVmaXhDaGVjayhyKVswXSk7cmV0dXJuIFMuVmFsdWVzLmlzQ1NTTnVsbFZhbHVlKGwpICYmIChsID0gMCksIGIuZGVidWcgPj0gMiAmJiBjb25zb2xlLmxvZyhcIkdldCBcIiArIHIgKyBcIjogXCIgKyBsKSwgbDtcbiAgICAgIH0sIHNldFByb3BlcnR5VmFsdWU6IGZ1bmN0aW9uIChlLCByLCBhLCBuLCBvKSB7XG4gICAgICAgIHZhciBzID0gcjtpZiAoXCJzY3JvbGxcIiA9PT0gcikgby5jb250YWluZXIgPyBvLmNvbnRhaW5lcltcInNjcm9sbFwiICsgby5kaXJlY3Rpb25dID0gYSA6IFwiTGVmdFwiID09PSBvLmRpcmVjdGlvbiA/IHQuc2Nyb2xsVG8oYSwgby5hbHRlcm5hdGVWYWx1ZSkgOiB0LnNjcm9sbFRvKG8uYWx0ZXJuYXRlVmFsdWUsIGEpO2Vsc2UgaWYgKFMuTm9ybWFsaXphdGlvbnMucmVnaXN0ZXJlZFtyXSAmJiBcInRyYW5zZm9ybVwiID09PSBTLk5vcm1hbGl6YXRpb25zLnJlZ2lzdGVyZWRbcl0oXCJuYW1lXCIsIGUpKSBTLk5vcm1hbGl6YXRpb25zLnJlZ2lzdGVyZWRbcl0oXCJpbmplY3RcIiwgZSwgYSksIHMgPSBcInRyYW5zZm9ybVwiLCBhID0gaShlKS50cmFuc2Zvcm1DYWNoZVtyXTtlbHNlIHtcbiAgICAgICAgICBpZiAoUy5Ib29rcy5yZWdpc3RlcmVkW3JdKSB7XG4gICAgICAgICAgICB2YXIgbCA9IHIsXG4gICAgICAgICAgICAgICAgdSA9IFMuSG9va3MuZ2V0Um9vdChyKTtuID0gbiB8fCBTLmdldFByb3BlcnR5VmFsdWUoZSwgdSksIGEgPSBTLkhvb2tzLmluamVjdFZhbHVlKGwsIGEsIG4pLCByID0gdTtcbiAgICAgICAgICB9aWYgKFMuTm9ybWFsaXphdGlvbnMucmVnaXN0ZXJlZFtyXSAmJiAoYSA9IFMuTm9ybWFsaXphdGlvbnMucmVnaXN0ZXJlZFtyXShcImluamVjdFwiLCBlLCBhKSwgciA9IFMuTm9ybWFsaXphdGlvbnMucmVnaXN0ZXJlZFtyXShcIm5hbWVcIiwgZSkpLCBzID0gUy5OYW1lcy5wcmVmaXhDaGVjayhyKVswXSwgOCA+PSBkKSB0cnkge1xuICAgICAgICAgICAgZS5zdHlsZVtzXSA9IGE7XG4gICAgICAgICAgfSBjYXRjaCAoYykge1xuICAgICAgICAgICAgYi5kZWJ1ZyAmJiBjb25zb2xlLmxvZyhcIkJyb3dzZXIgZG9lcyBub3Qgc3VwcG9ydCBbXCIgKyBhICsgXCJdIGZvciBbXCIgKyBzICsgXCJdXCIpO1xuICAgICAgICAgIH0gZWxzZSBpKGUpICYmIGkoZSkuaXNTVkcgJiYgUy5OYW1lcy5TVkdBdHRyaWJ1dGUocikgPyBlLnNldEF0dHJpYnV0ZShyLCBhKSA6IGUuc3R5bGVbc10gPSBhO2IuZGVidWcgPj0gMiAmJiBjb25zb2xlLmxvZyhcIlNldCBcIiArIHIgKyBcIiAoXCIgKyBzICsgXCIpOiBcIiArIGEpO1xuICAgICAgICB9cmV0dXJuIFtzLCBhXTtcbiAgICAgIH0sIGZsdXNoVHJhbnNmb3JtQ2FjaGU6IGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIGZ1bmN0aW9uIHQodCkge1xuICAgICAgICAgIHJldHVybiBwYXJzZUZsb2F0KFMuZ2V0UHJvcGVydHlWYWx1ZShlLCB0KSk7XG4gICAgICAgIH12YXIgciA9IFwiXCI7aWYgKChkIHx8IGIuU3RhdGUuaXNBbmRyb2lkICYmICFiLlN0YXRlLmlzQ2hyb21lKSAmJiBpKGUpLmlzU1ZHKSB7XG4gICAgICAgICAgdmFyIGEgPSB7IHRyYW5zbGF0ZTogW3QoXCJ0cmFuc2xhdGVYXCIpLCB0KFwidHJhbnNsYXRlWVwiKV0sIHNrZXdYOiBbdChcInNrZXdYXCIpXSwgc2tld1k6IFt0KFwic2tld1lcIildLCBzY2FsZTogMSAhPT0gdChcInNjYWxlXCIpID8gW3QoXCJzY2FsZVwiKSwgdChcInNjYWxlXCIpXSA6IFt0KFwic2NhbGVYXCIpLCB0KFwic2NhbGVZXCIpXSwgcm90YXRlOiBbdChcInJvdGF0ZVpcIiksIDAsIDBdIH07Zi5lYWNoKGkoZSkudHJhbnNmb3JtQ2FjaGUsIGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICAvXnRyYW5zbGF0ZS9pLnRlc3QoZSkgPyBlID0gXCJ0cmFuc2xhdGVcIiA6IC9ec2NhbGUvaS50ZXN0KGUpID8gZSA9IFwic2NhbGVcIiA6IC9ecm90YXRlL2kudGVzdChlKSAmJiAoZSA9IFwicm90YXRlXCIpLCBhW2VdICYmIChyICs9IGUgKyBcIihcIiArIGFbZV0uam9pbihcIiBcIikgKyBcIikgXCIsIGRlbGV0ZSBhW2VdKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB2YXIgbiwgbztmLmVhY2goaShlKS50cmFuc2Zvcm1DYWNoZSwgZnVuY3Rpb24gKHQpIHtcbiAgICAgICAgICAgIHJldHVybiBuID0gaShlKS50cmFuc2Zvcm1DYWNoZVt0XSwgXCJ0cmFuc2Zvcm1QZXJzcGVjdGl2ZVwiID09PSB0ID8gKG8gPSBuLCAhMCkgOiAoOSA9PT0gZCAmJiBcInJvdGF0ZVpcIiA9PT0gdCAmJiAodCA9IFwicm90YXRlXCIpLCB2b2lkIChyICs9IHQgKyBuICsgXCIgXCIpKTtcbiAgICAgICAgICB9KSwgbyAmJiAociA9IFwicGVyc3BlY3RpdmVcIiArIG8gKyBcIiBcIiArIHIpO1xuICAgICAgICB9Uy5zZXRQcm9wZXJ0eVZhbHVlKGUsIFwidHJhbnNmb3JtXCIsIHIpO1xuICAgICAgfSB9O1MuSG9va3MucmVnaXN0ZXIoKSwgUy5Ob3JtYWxpemF0aW9ucy5yZWdpc3RlcigpLCBiLmhvb2sgPSBmdW5jdGlvbiAoZSwgdCwgcikge1xuICAgICAgdmFyIG4gPSBhO3JldHVybiBlID0gbyhlKSwgZi5lYWNoKGUsIGZ1bmN0aW9uIChlLCBvKSB7XG4gICAgICAgIGlmIChpKG8pID09PSBhICYmIGIuaW5pdChvKSwgciA9PT0gYSkgbiA9PT0gYSAmJiAobiA9IGIuQ1NTLmdldFByb3BlcnR5VmFsdWUobywgdCkpO2Vsc2Uge1xuICAgICAgICAgIHZhciBzID0gYi5DU1Muc2V0UHJvcGVydHlWYWx1ZShvLCB0LCByKTtcInRyYW5zZm9ybVwiID09PSBzWzBdICYmIGIuQ1NTLmZsdXNoVHJhbnNmb3JtQ2FjaGUobyksIG4gPSBzO1xuICAgICAgICB9XG4gICAgICB9KSwgbjtcbiAgICB9O3ZhciBQID0gZnVuY3Rpb24gKCkge1xuICAgICAgZnVuY3Rpb24gZSgpIHtcbiAgICAgICAgcmV0dXJuIHMgPyBrLnByb21pc2UgfHwgbnVsbCA6IGw7XG4gICAgICB9ZnVuY3Rpb24gbigpIHtcbiAgICAgICAgZnVuY3Rpb24gZShlKSB7XG4gICAgICAgICAgZnVuY3Rpb24gcChlLCB0KSB7XG4gICAgICAgICAgICB2YXIgciA9IGEsXG4gICAgICAgICAgICAgICAgbiA9IGEsXG4gICAgICAgICAgICAgICAgaSA9IGE7cmV0dXJuIG0uaXNBcnJheShlKSA/IChyID0gZVswXSwgIW0uaXNBcnJheShlWzFdKSAmJiAvXltcXGQtXS8udGVzdChlWzFdKSB8fCBtLmlzRnVuY3Rpb24oZVsxXSkgfHwgUy5SZWdFeC5pc0hleC50ZXN0KGVbMV0pID8gaSA9IGVbMV0gOiAobS5pc1N0cmluZyhlWzFdKSAmJiAhUy5SZWdFeC5pc0hleC50ZXN0KGVbMV0pIHx8IG0uaXNBcnJheShlWzFdKSkgJiYgKG4gPSB0ID8gZVsxXSA6IHUoZVsxXSwgcy5kdXJhdGlvbiksIGVbMl0gIT09IGEgJiYgKGkgPSBlWzJdKSkpIDogciA9IGUsIHQgfHwgKG4gPSBuIHx8IHMuZWFzaW5nKSwgbS5pc0Z1bmN0aW9uKHIpICYmIChyID0gci5jYWxsKG8sIFYsIHcpKSwgbS5pc0Z1bmN0aW9uKGkpICYmIChpID0gaS5jYWxsKG8sIFYsIHcpKSwgW3IgfHwgMCwgbiwgaV07XG4gICAgICAgICAgfWZ1bmN0aW9uIGQoZSwgdCkge1xuICAgICAgICAgICAgdmFyIHIsIGE7cmV0dXJuIGEgPSAodCB8fCBcIjBcIikudG9TdHJpbmcoKS50b0xvd2VyQ2FzZSgpLnJlcGxhY2UoL1slQS16XSskLywgZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHIgPSBlLCBcIlwiO1xuICAgICAgICAgICAgfSksIHIgfHwgKHIgPSBTLlZhbHVlcy5nZXRVbml0VHlwZShlKSksIFthLCByXTtcbiAgICAgICAgICB9ZnVuY3Rpb24gaCgpIHtcbiAgICAgICAgICAgIHZhciBlID0geyBteVBhcmVudDogby5wYXJlbnROb2RlIHx8IHIuYm9keSwgcG9zaXRpb246IFMuZ2V0UHJvcGVydHlWYWx1ZShvLCBcInBvc2l0aW9uXCIpLCBmb250U2l6ZTogUy5nZXRQcm9wZXJ0eVZhbHVlKG8sIFwiZm9udFNpemVcIikgfSxcbiAgICAgICAgICAgICAgICBhID0gZS5wb3NpdGlvbiA9PT0gTC5sYXN0UG9zaXRpb24gJiYgZS5teVBhcmVudCA9PT0gTC5sYXN0UGFyZW50LFxuICAgICAgICAgICAgICAgIG4gPSBlLmZvbnRTaXplID09PSBMLmxhc3RGb250U2l6ZTtMLmxhc3RQYXJlbnQgPSBlLm15UGFyZW50LCBMLmxhc3RQb3NpdGlvbiA9IGUucG9zaXRpb24sIEwubGFzdEZvbnRTaXplID0gZS5mb250U2l6ZTt2YXIgcyA9IDEwMCxcbiAgICAgICAgICAgICAgICBsID0ge307aWYgKG4gJiYgYSkgbC5lbVRvUHggPSBMLmxhc3RFbVRvUHgsIGwucGVyY2VudFRvUHhXaWR0aCA9IEwubGFzdFBlcmNlbnRUb1B4V2lkdGgsIGwucGVyY2VudFRvUHhIZWlnaHQgPSBMLmxhc3RQZXJjZW50VG9QeEhlaWdodDtlbHNlIHtcbiAgICAgICAgICAgICAgdmFyIHUgPSBpKG8pLmlzU1ZHID8gci5jcmVhdGVFbGVtZW50TlMoXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiLCBcInJlY3RcIikgOiByLmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7Yi5pbml0KHUpLCBlLm15UGFyZW50LmFwcGVuZENoaWxkKHUpLCBmLmVhY2goW1wib3ZlcmZsb3dcIiwgXCJvdmVyZmxvd1hcIiwgXCJvdmVyZmxvd1lcIl0sIGZ1bmN0aW9uIChlLCB0KSB7XG4gICAgICAgICAgICAgICAgYi5DU1Muc2V0UHJvcGVydHlWYWx1ZSh1LCB0LCBcImhpZGRlblwiKTtcbiAgICAgICAgICAgICAgfSksIGIuQ1NTLnNldFByb3BlcnR5VmFsdWUodSwgXCJwb3NpdGlvblwiLCBlLnBvc2l0aW9uKSwgYi5DU1Muc2V0UHJvcGVydHlWYWx1ZSh1LCBcImZvbnRTaXplXCIsIGUuZm9udFNpemUpLCBiLkNTUy5zZXRQcm9wZXJ0eVZhbHVlKHUsIFwiYm94U2l6aW5nXCIsIFwiY29udGVudC1ib3hcIiksIGYuZWFjaChbXCJtaW5XaWR0aFwiLCBcIm1heFdpZHRoXCIsIFwid2lkdGhcIiwgXCJtaW5IZWlnaHRcIiwgXCJtYXhIZWlnaHRcIiwgXCJoZWlnaHRcIl0sIGZ1bmN0aW9uIChlLCB0KSB7XG4gICAgICAgICAgICAgICAgYi5DU1Muc2V0UHJvcGVydHlWYWx1ZSh1LCB0LCBzICsgXCIlXCIpO1xuICAgICAgICAgICAgICB9KSwgYi5DU1Muc2V0UHJvcGVydHlWYWx1ZSh1LCBcInBhZGRpbmdMZWZ0XCIsIHMgKyBcImVtXCIpLCBsLnBlcmNlbnRUb1B4V2lkdGggPSBMLmxhc3RQZXJjZW50VG9QeFdpZHRoID0gKHBhcnNlRmxvYXQoUy5nZXRQcm9wZXJ0eVZhbHVlKHUsIFwid2lkdGhcIiwgbnVsbCwgITApKSB8fCAxKSAvIHMsIGwucGVyY2VudFRvUHhIZWlnaHQgPSBMLmxhc3RQZXJjZW50VG9QeEhlaWdodCA9IChwYXJzZUZsb2F0KFMuZ2V0UHJvcGVydHlWYWx1ZSh1LCBcImhlaWdodFwiLCBudWxsLCAhMCkpIHx8IDEpIC8gcywgbC5lbVRvUHggPSBMLmxhc3RFbVRvUHggPSAocGFyc2VGbG9hdChTLmdldFByb3BlcnR5VmFsdWUodSwgXCJwYWRkaW5nTGVmdFwiKSkgfHwgMSkgLyBzLCBlLm15UGFyZW50LnJlbW92ZUNoaWxkKHUpO1xuICAgICAgICAgICAgfXJldHVybiBudWxsID09PSBMLnJlbVRvUHggJiYgKEwucmVtVG9QeCA9IHBhcnNlRmxvYXQoUy5nZXRQcm9wZXJ0eVZhbHVlKHIuYm9keSwgXCJmb250U2l6ZVwiKSkgfHwgMTYpLCBudWxsID09PSBMLnZ3VG9QeCAmJiAoTC52d1RvUHggPSBwYXJzZUZsb2F0KHQuaW5uZXJXaWR0aCkgLyAxMDAsIEwudmhUb1B4ID0gcGFyc2VGbG9hdCh0LmlubmVySGVpZ2h0KSAvIDEwMCksIGwucmVtVG9QeCA9IEwucmVtVG9QeCwgbC52d1RvUHggPSBMLnZ3VG9QeCwgbC52aFRvUHggPSBMLnZoVG9QeCwgYi5kZWJ1ZyA+PSAxICYmIGNvbnNvbGUubG9nKFwiVW5pdCByYXRpb3M6IFwiICsgSlNPTi5zdHJpbmdpZnkobCksIG8pLCBsO1xuICAgICAgICAgIH1pZiAocy5iZWdpbiAmJiAwID09PSBWKSB0cnkge1xuICAgICAgICAgICAgcy5iZWdpbi5jYWxsKGcsIGcpO1xuICAgICAgICAgIH0gY2F0Y2ggKHgpIHtcbiAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICB0aHJvdyB4O1xuICAgICAgICAgICAgfSwgMSk7XG4gICAgICAgICAgfWlmIChcInNjcm9sbFwiID09PSBBKSB7XG4gICAgICAgICAgICB2YXIgUCxcbiAgICAgICAgICAgICAgICBDLFxuICAgICAgICAgICAgICAgIFQsXG4gICAgICAgICAgICAgICAgRiA9IC9eeCQvaS50ZXN0KHMuYXhpcykgPyBcIkxlZnRcIiA6IFwiVG9wXCIsXG4gICAgICAgICAgICAgICAgaiA9IHBhcnNlRmxvYXQocy5vZmZzZXQpIHx8IDA7cy5jb250YWluZXIgPyBtLmlzV3JhcHBlZChzLmNvbnRhaW5lcikgfHwgbS5pc05vZGUocy5jb250YWluZXIpID8gKHMuY29udGFpbmVyID0gcy5jb250YWluZXJbMF0gfHwgcy5jb250YWluZXIsIFAgPSBzLmNvbnRhaW5lcltcInNjcm9sbFwiICsgRl0sIFQgPSBQICsgZihvKS5wb3NpdGlvbigpW0YudG9Mb3dlckNhc2UoKV0gKyBqKSA6IHMuY29udGFpbmVyID0gbnVsbCA6IChQID0gYi5TdGF0ZS5zY3JvbGxBbmNob3JbYi5TdGF0ZVtcInNjcm9sbFByb3BlcnR5XCIgKyBGXV0sIEMgPSBiLlN0YXRlLnNjcm9sbEFuY2hvcltiLlN0YXRlW1wic2Nyb2xsUHJvcGVydHlcIiArIChcIkxlZnRcIiA9PT0gRiA/IFwiVG9wXCIgOiBcIkxlZnRcIildXSwgVCA9IGYobykub2Zmc2V0KClbRi50b0xvd2VyQ2FzZSgpXSArIGopLCBsID0geyBzY3JvbGw6IHsgcm9vdFByb3BlcnR5VmFsdWU6ICExLCBzdGFydFZhbHVlOiBQLCBjdXJyZW50VmFsdWU6IFAsIGVuZFZhbHVlOiBULCB1bml0VHlwZTogXCJcIiwgZWFzaW5nOiBzLmVhc2luZywgc2Nyb2xsRGF0YTogeyBjb250YWluZXI6IHMuY29udGFpbmVyLCBkaXJlY3Rpb246IEYsIGFsdGVybmF0ZVZhbHVlOiBDIH0gfSwgZWxlbWVudDogbyB9LCBiLmRlYnVnICYmIGNvbnNvbGUubG9nKFwidHdlZW5zQ29udGFpbmVyIChzY3JvbGwpOiBcIiwgbC5zY3JvbGwsIG8pO1xuICAgICAgICAgIH0gZWxzZSBpZiAoXCJyZXZlcnNlXCIgPT09IEEpIHtcbiAgICAgICAgICAgIGlmICghaShvKS50d2VlbnNDb250YWluZXIpIHJldHVybiB2b2lkIGYuZGVxdWV1ZShvLCBzLnF1ZXVlKTtcIm5vbmVcIiA9PT0gaShvKS5vcHRzLmRpc3BsYXkgJiYgKGkobykub3B0cy5kaXNwbGF5ID0gXCJhdXRvXCIpLCBcImhpZGRlblwiID09PSBpKG8pLm9wdHMudmlzaWJpbGl0eSAmJiAoaShvKS5vcHRzLnZpc2liaWxpdHkgPSBcInZpc2libGVcIiksIGkobykub3B0cy5sb29wID0gITEsIGkobykub3B0cy5iZWdpbiA9IG51bGwsIGkobykub3B0cy5jb21wbGV0ZSA9IG51bGwsIHYuZWFzaW5nIHx8IGRlbGV0ZSBzLmVhc2luZywgdi5kdXJhdGlvbiB8fCBkZWxldGUgcy5kdXJhdGlvbiwgcyA9IGYuZXh0ZW5kKHt9LCBpKG8pLm9wdHMsIHMpO3ZhciBFID0gZi5leHRlbmQoITAsIHt9LCBpKG8pLnR3ZWVuc0NvbnRhaW5lcik7Zm9yICh2YXIgSCBpbiBFKSB7XG4gICAgICAgICAgICAgIGlmIChcImVsZW1lbnRcIiAhPT0gSCkge1xuICAgICAgICAgICAgICAgIHZhciBOID0gRVtIXS5zdGFydFZhbHVlO0VbSF0uc3RhcnRWYWx1ZSA9IEVbSF0uY3VycmVudFZhbHVlID0gRVtIXS5lbmRWYWx1ZSwgRVtIXS5lbmRWYWx1ZSA9IE4sIG0uaXNFbXB0eU9iamVjdCh2KSB8fCAoRVtIXS5lYXNpbmcgPSBzLmVhc2luZyksIGIuZGVidWcgJiYgY29uc29sZS5sb2coXCJyZXZlcnNlIHR3ZWVuc0NvbnRhaW5lciAoXCIgKyBIICsgXCIpOiBcIiArIEpTT04uc3RyaW5naWZ5KEVbSF0pLCBvKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfWwgPSBFO1xuICAgICAgICAgIH0gZWxzZSBpZiAoXCJzdGFydFwiID09PSBBKSB7XG4gICAgICAgICAgICB2YXIgRTtpKG8pLnR3ZWVuc0NvbnRhaW5lciAmJiBpKG8pLmlzQW5pbWF0aW5nID09PSAhMCAmJiAoRSA9IGkobykudHdlZW5zQ29udGFpbmVyKSwgZi5lYWNoKHksIGZ1bmN0aW9uIChlLCB0KSB7XG4gICAgICAgICAgICAgIGlmIChSZWdFeHAoXCJeXCIgKyBTLkxpc3RzLmNvbG9ycy5qb2luKFwiJHxeXCIpICsgXCIkXCIpLnRlc3QoZSkpIHtcbiAgICAgICAgICAgICAgICB2YXIgciA9IHAodCwgITApLFxuICAgICAgICAgICAgICAgICAgICBuID0gclswXSxcbiAgICAgICAgICAgICAgICAgICAgbyA9IHJbMV0sXG4gICAgICAgICAgICAgICAgICAgIGkgPSByWzJdO2lmIChTLlJlZ0V4LmlzSGV4LnRlc3QobikpIHtcbiAgICAgICAgICAgICAgICAgIGZvciAodmFyIHMgPSBbXCJSZWRcIiwgXCJHcmVlblwiLCBcIkJsdWVcIl0sIGwgPSBTLlZhbHVlcy5oZXhUb1JnYihuKSwgdSA9IGkgPyBTLlZhbHVlcy5oZXhUb1JnYihpKSA6IGEsIGMgPSAwOyBjIDwgcy5sZW5ndGg7IGMrKykge1xuICAgICAgICAgICAgICAgICAgICB2YXIgZiA9IFtsW2NdXTtvICYmIGYucHVzaChvKSwgdSAhPT0gYSAmJiBmLnB1c2godVtjXSksIHlbZSArIHNbY11dID0gZjtcbiAgICAgICAgICAgICAgICAgIH1kZWxldGUgeVtlXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO2ZvciAodmFyIHogaW4geSkge1xuICAgICAgICAgICAgICB2YXIgTyA9IHAoeVt6XSksXG4gICAgICAgICAgICAgICAgICBxID0gT1swXSxcbiAgICAgICAgICAgICAgICAgICQgPSBPWzFdLFxuICAgICAgICAgICAgICAgICAgTSA9IE9bMl07eiA9IFMuTmFtZXMuY2FtZWxDYXNlKHopO3ZhciBJID0gUy5Ib29rcy5nZXRSb290KHopLFxuICAgICAgICAgICAgICAgICAgQiA9ICExO2lmIChpKG8pLmlzU1ZHIHx8IFwidHdlZW5cIiA9PT0gSSB8fCBTLk5hbWVzLnByZWZpeENoZWNrKEkpWzFdICE9PSAhMSB8fCBTLk5vcm1hbGl6YXRpb25zLnJlZ2lzdGVyZWRbSV0gIT09IGEpIHtcbiAgICAgICAgICAgICAgICAocy5kaXNwbGF5ICE9PSBhICYmIG51bGwgIT09IHMuZGlzcGxheSAmJiBcIm5vbmVcIiAhPT0gcy5kaXNwbGF5IHx8IHMudmlzaWJpbGl0eSAhPT0gYSAmJiBcImhpZGRlblwiICE9PSBzLnZpc2liaWxpdHkpICYmIC9vcGFjaXR5fGZpbHRlci8udGVzdCh6KSAmJiAhTSAmJiAwICE9PSBxICYmIChNID0gMCksIHMuX2NhY2hlVmFsdWVzICYmIEUgJiYgRVt6XSA/IChNID09PSBhICYmIChNID0gRVt6XS5lbmRWYWx1ZSArIEVbel0udW5pdFR5cGUpLCBCID0gaShvKS5yb290UHJvcGVydHlWYWx1ZUNhY2hlW0ldKSA6IFMuSG9va3MucmVnaXN0ZXJlZFt6XSA/IE0gPT09IGEgPyAoQiA9IFMuZ2V0UHJvcGVydHlWYWx1ZShvLCBJKSwgTSA9IFMuZ2V0UHJvcGVydHlWYWx1ZShvLCB6LCBCKSkgOiBCID0gUy5Ib29rcy50ZW1wbGF0ZXNbSV1bMV0gOiBNID09PSBhICYmIChNID0gUy5nZXRQcm9wZXJ0eVZhbHVlKG8sIHopKTt2YXIgVyxcbiAgICAgICAgICAgICAgICAgICAgRyxcbiAgICAgICAgICAgICAgICAgICAgWSxcbiAgICAgICAgICAgICAgICAgICAgRCA9ICExO2lmIChXID0gZCh6LCBNKSwgTSA9IFdbMF0sIFkgPSBXWzFdLCBXID0gZCh6LCBxKSwgcSA9IFdbMF0ucmVwbGFjZSgvXihbKy1cXC8qXSk9LywgZnVuY3Rpb24gKGUsIHQpIHtcbiAgICAgICAgICAgICAgICAgIHJldHVybiBEID0gdCwgXCJcIjtcbiAgICAgICAgICAgICAgICB9KSwgRyA9IFdbMV0sIE0gPSBwYXJzZUZsb2F0KE0pIHx8IDAsIHEgPSBwYXJzZUZsb2F0KHEpIHx8IDAsIFwiJVwiID09PSBHICYmICgvXihmb250U2l6ZXxsaW5lSGVpZ2h0KSQvLnRlc3QoeikgPyAocSAvPSAxMDAsIEcgPSBcImVtXCIpIDogL15zY2FsZS8udGVzdCh6KSA/IChxIC89IDEwMCwgRyA9IFwiXCIpIDogLyhSZWR8R3JlZW58Qmx1ZSkkL2kudGVzdCh6KSAmJiAocSA9IHEgLyAxMDAgKiAyNTUsIEcgPSBcIlwiKSksIC9bXFwvKl0vLnRlc3QoRCkpIEcgPSBZO2Vsc2UgaWYgKFkgIT09IEcgJiYgMCAhPT0gTSkgaWYgKDAgPT09IHEpIEcgPSBZO2Vsc2Uge1xuICAgICAgICAgICAgICAgICAgbiA9IG4gfHwgaCgpO3ZhciBRID0gL21hcmdpbnxwYWRkaW5nfGxlZnR8cmlnaHR8d2lkdGh8dGV4dHx3b3JkfGxldHRlci9pLnRlc3QoeikgfHwgL1gkLy50ZXN0KHopIHx8IFwieFwiID09PSB6ID8gXCJ4XCIgOiBcInlcIjtzd2l0Y2ggKFkpIHtjYXNlIFwiJVwiOlxuICAgICAgICAgICAgICAgICAgICAgIE0gKj0gXCJ4XCIgPT09IFEgPyBuLnBlcmNlbnRUb1B4V2lkdGggOiBuLnBlcmNlbnRUb1B4SGVpZ2h0O2JyZWFrO2Nhc2UgXCJweFwiOlxuICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO2RlZmF1bHQ6XG4gICAgICAgICAgICAgICAgICAgICAgTSAqPSBuW1kgKyBcIlRvUHhcIl07fXN3aXRjaCAoRykge2Nhc2UgXCIlXCI6XG4gICAgICAgICAgICAgICAgICAgICAgTSAqPSAxIC8gKFwieFwiID09PSBRID8gbi5wZXJjZW50VG9QeFdpZHRoIDogbi5wZXJjZW50VG9QeEhlaWdodCk7YnJlYWs7Y2FzZSBcInB4XCI6XG4gICAgICAgICAgICAgICAgICAgICAgYnJlYWs7ZGVmYXVsdDpcbiAgICAgICAgICAgICAgICAgICAgICBNICo9IDEgLyBuW0cgKyBcIlRvUHhcIl07fVxuICAgICAgICAgICAgICAgIH1zd2l0Y2ggKEQpIHtjYXNlIFwiK1wiOlxuICAgICAgICAgICAgICAgICAgICBxID0gTSArIHE7YnJlYWs7Y2FzZSBcIi1cIjpcbiAgICAgICAgICAgICAgICAgICAgcSA9IE0gLSBxO2JyZWFrO2Nhc2UgXCIqXCI6XG4gICAgICAgICAgICAgICAgICAgIHEgPSBNICogcTticmVhaztjYXNlIFwiL1wiOlxuICAgICAgICAgICAgICAgICAgICBxID0gTSAvIHE7fWxbel0gPSB7IHJvb3RQcm9wZXJ0eVZhbHVlOiBCLCBzdGFydFZhbHVlOiBNLCBjdXJyZW50VmFsdWU6IE0sIGVuZFZhbHVlOiBxLCB1bml0VHlwZTogRywgZWFzaW5nOiAkIH0sIGIuZGVidWcgJiYgY29uc29sZS5sb2coXCJ0d2VlbnNDb250YWluZXIgKFwiICsgeiArIFwiKTogXCIgKyBKU09OLnN0cmluZ2lmeShsW3pdKSwgbyk7XG4gICAgICAgICAgICAgIH0gZWxzZSBiLmRlYnVnICYmIGNvbnNvbGUubG9nKFwiU2tpcHBpbmcgW1wiICsgSSArIFwiXSBkdWUgdG8gYSBsYWNrIG9mIGJyb3dzZXIgc3VwcG9ydC5cIik7XG4gICAgICAgICAgICB9bC5lbGVtZW50ID0gbztcbiAgICAgICAgICB9bC5lbGVtZW50ICYmIChTLlZhbHVlcy5hZGRDbGFzcyhvLCBcInZlbG9jaXR5LWFuaW1hdGluZ1wiKSwgUi5wdXNoKGwpLCBcIlwiID09PSBzLnF1ZXVlICYmIChpKG8pLnR3ZWVuc0NvbnRhaW5lciA9IGwsIGkobykub3B0cyA9IHMpLCBpKG8pLmlzQW5pbWF0aW5nID0gITAsIFYgPT09IHcgLSAxID8gKGIuU3RhdGUuY2FsbHMucHVzaChbUiwgZywgcywgbnVsbCwgay5yZXNvbHZlcl0pLCBiLlN0YXRlLmlzVGlja2luZyA9PT0gITEgJiYgKGIuU3RhdGUuaXNUaWNraW5nID0gITAsIGMoKSkpIDogVisrKTtcbiAgICAgICAgfXZhciBuLFxuICAgICAgICAgICAgbyA9IHRoaXMsXG4gICAgICAgICAgICBzID0gZi5leHRlbmQoe30sIGIuZGVmYXVsdHMsIHYpLFxuICAgICAgICAgICAgbCA9IHt9O3N3aXRjaCAoaShvKSA9PT0gYSAmJiBiLmluaXQobyksIHBhcnNlRmxvYXQocy5kZWxheSkgJiYgcy5xdWV1ZSAhPT0gITEgJiYgZi5xdWV1ZShvLCBzLnF1ZXVlLCBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgIGIudmVsb2NpdHlRdWV1ZUVudHJ5RmxhZyA9ICEwLCBpKG8pLmRlbGF5VGltZXIgPSB7IHNldFRpbWVvdXQ6IHNldFRpbWVvdXQoZSwgcGFyc2VGbG9hdChzLmRlbGF5KSksIG5leHQ6IGUgfTtcbiAgICAgICAgfSksIHMuZHVyYXRpb24udG9TdHJpbmcoKS50b0xvd2VyQ2FzZSgpKSB7Y2FzZSBcImZhc3RcIjpcbiAgICAgICAgICAgIHMuZHVyYXRpb24gPSAyMDA7YnJlYWs7Y2FzZSBcIm5vcm1hbFwiOlxuICAgICAgICAgICAgcy5kdXJhdGlvbiA9IGg7YnJlYWs7Y2FzZSBcInNsb3dcIjpcbiAgICAgICAgICAgIHMuZHVyYXRpb24gPSA2MDA7YnJlYWs7ZGVmYXVsdDpcbiAgICAgICAgICAgIHMuZHVyYXRpb24gPSBwYXJzZUZsb2F0KHMuZHVyYXRpb24pIHx8IDE7fWIubW9jayAhPT0gITEgJiYgKGIubW9jayA9PT0gITAgPyBzLmR1cmF0aW9uID0gcy5kZWxheSA9IDEgOiAocy5kdXJhdGlvbiAqPSBwYXJzZUZsb2F0KGIubW9jaykgfHwgMSwgcy5kZWxheSAqPSBwYXJzZUZsb2F0KGIubW9jaykgfHwgMSkpLCBzLmVhc2luZyA9IHUocy5lYXNpbmcsIHMuZHVyYXRpb24pLCBzLmJlZ2luICYmICFtLmlzRnVuY3Rpb24ocy5iZWdpbikgJiYgKHMuYmVnaW4gPSBudWxsKSwgcy5wcm9ncmVzcyAmJiAhbS5pc0Z1bmN0aW9uKHMucHJvZ3Jlc3MpICYmIChzLnByb2dyZXNzID0gbnVsbCksIHMuY29tcGxldGUgJiYgIW0uaXNGdW5jdGlvbihzLmNvbXBsZXRlKSAmJiAocy5jb21wbGV0ZSA9IG51bGwpLCBzLmRpc3BsYXkgIT09IGEgJiYgbnVsbCAhPT0gcy5kaXNwbGF5ICYmIChzLmRpc3BsYXkgPSBzLmRpc3BsYXkudG9TdHJpbmcoKS50b0xvd2VyQ2FzZSgpLCBcImF1dG9cIiA9PT0gcy5kaXNwbGF5ICYmIChzLmRpc3BsYXkgPSBiLkNTUy5WYWx1ZXMuZ2V0RGlzcGxheVR5cGUobykpKSwgcy52aXNpYmlsaXR5ICE9PSBhICYmIG51bGwgIT09IHMudmlzaWJpbGl0eSAmJiAocy52aXNpYmlsaXR5ID0gcy52aXNpYmlsaXR5LnRvU3RyaW5nKCkudG9Mb3dlckNhc2UoKSksIHMubW9iaWxlSEEgPSBzLm1vYmlsZUhBICYmIGIuU3RhdGUuaXNNb2JpbGUgJiYgIWIuU3RhdGUuaXNHaW5nZXJicmVhZCwgcy5xdWV1ZSA9PT0gITEgPyBzLmRlbGF5ID8gc2V0VGltZW91dChlLCBzLmRlbGF5KSA6IGUoKSA6IGYucXVldWUobywgcy5xdWV1ZSwgZnVuY3Rpb24gKHQsIHIpIHtcbiAgICAgICAgICByZXR1cm4gciA9PT0gITAgPyAoay5wcm9taXNlICYmIGsucmVzb2x2ZXIoZyksICEwKSA6IChiLnZlbG9jaXR5UXVldWVFbnRyeUZsYWcgPSAhMCwgdm9pZCBlKHQpKTtcbiAgICAgICAgfSksIFwiXCIgIT09IHMucXVldWUgJiYgXCJmeFwiICE9PSBzLnF1ZXVlIHx8IFwiaW5wcm9ncmVzc1wiID09PSBmLnF1ZXVlKG8pWzBdIHx8IGYuZGVxdWV1ZShvKTtcbiAgICAgIH12YXIgcyxcbiAgICAgICAgICBsLFxuICAgICAgICAgIGQsXG4gICAgICAgICAgZyxcbiAgICAgICAgICB5LFxuICAgICAgICAgIHYsXG4gICAgICAgICAgeCA9IGFyZ3VtZW50c1swXSAmJiAoYXJndW1lbnRzWzBdLnAgfHwgZi5pc1BsYWluT2JqZWN0KGFyZ3VtZW50c1swXS5wcm9wZXJ0aWVzKSAmJiAhYXJndW1lbnRzWzBdLnByb3BlcnRpZXMubmFtZXMgfHwgbS5pc1N0cmluZyhhcmd1bWVudHNbMF0ucHJvcGVydGllcykpO2lmIChtLmlzV3JhcHBlZCh0aGlzKSA/IChzID0gITEsIGQgPSAwLCBnID0gdGhpcywgbCA9IHRoaXMpIDogKHMgPSAhMCwgZCA9IDEsIGcgPSB4ID8gYXJndW1lbnRzWzBdLmVsZW1lbnRzIHx8IGFyZ3VtZW50c1swXS5lIDogYXJndW1lbnRzWzBdKSwgZyA9IG8oZykpIHtcbiAgICAgICAgeCA/ICh5ID0gYXJndW1lbnRzWzBdLnByb3BlcnRpZXMgfHwgYXJndW1lbnRzWzBdLnAsIHYgPSBhcmd1bWVudHNbMF0ub3B0aW9ucyB8fCBhcmd1bWVudHNbMF0ubykgOiAoeSA9IGFyZ3VtZW50c1tkXSwgdiA9IGFyZ3VtZW50c1tkICsgMV0pO3ZhciB3ID0gZy5sZW5ndGgsXG4gICAgICAgICAgICBWID0gMDtpZiAoIS9eKHN0b3B8ZmluaXNoKSQvaS50ZXN0KHkpICYmICFmLmlzUGxhaW5PYmplY3QodikpIHtcbiAgICAgICAgICB2YXIgQyA9IGQgKyAxO3YgPSB7fTtmb3IgKHZhciBUID0gQzsgVCA8IGFyZ3VtZW50cy5sZW5ndGg7IFQrKykge1xuICAgICAgICAgICAgbS5pc0FycmF5KGFyZ3VtZW50c1tUXSkgfHwgIS9eKGZhc3R8bm9ybWFsfHNsb3cpJC9pLnRlc3QoYXJndW1lbnRzW1RdKSAmJiAhL15cXGQvLnRlc3QoYXJndW1lbnRzW1RdKSA/IG0uaXNTdHJpbmcoYXJndW1lbnRzW1RdKSB8fCBtLmlzQXJyYXkoYXJndW1lbnRzW1RdKSA/IHYuZWFzaW5nID0gYXJndW1lbnRzW1RdIDogbS5pc0Z1bmN0aW9uKGFyZ3VtZW50c1tUXSkgJiYgKHYuY29tcGxldGUgPSBhcmd1bWVudHNbVF0pIDogdi5kdXJhdGlvbiA9IGFyZ3VtZW50c1tUXTtcbiAgICAgICAgICB9XG4gICAgICAgIH12YXIgayA9IHsgcHJvbWlzZTogbnVsbCwgcmVzb2x2ZXI6IG51bGwsIHJlamVjdGVyOiBudWxsIH07cyAmJiBiLlByb21pc2UgJiYgKGsucHJvbWlzZSA9IG5ldyBiLlByb21pc2UoZnVuY3Rpb24gKGUsIHQpIHtcbiAgICAgICAgICBrLnJlc29sdmVyID0gZSwgay5yZWplY3RlciA9IHQ7XG4gICAgICAgIH0pKTt2YXIgQTtzd2l0Y2ggKHkpIHtjYXNlIFwic2Nyb2xsXCI6XG4gICAgICAgICAgICBBID0gXCJzY3JvbGxcIjticmVhaztjYXNlIFwicmV2ZXJzZVwiOlxuICAgICAgICAgICAgQSA9IFwicmV2ZXJzZVwiO2JyZWFrO2Nhc2UgXCJmaW5pc2hcIjpjYXNlIFwic3RvcFwiOlxuICAgICAgICAgICAgZi5lYWNoKGcsIGZ1bmN0aW9uIChlLCB0KSB7XG4gICAgICAgICAgICAgIGkodCkgJiYgaSh0KS5kZWxheVRpbWVyICYmIChjbGVhclRpbWVvdXQoaSh0KS5kZWxheVRpbWVyLnNldFRpbWVvdXQpLCBpKHQpLmRlbGF5VGltZXIubmV4dCAmJiBpKHQpLmRlbGF5VGltZXIubmV4dCgpLCBkZWxldGUgaSh0KS5kZWxheVRpbWVyKTtcbiAgICAgICAgICAgIH0pO3ZhciBGID0gW107cmV0dXJuIGYuZWFjaChiLlN0YXRlLmNhbGxzLCBmdW5jdGlvbiAoZSwgdCkge1xuICAgICAgICAgICAgICB0ICYmIGYuZWFjaCh0WzFdLCBmdW5jdGlvbiAociwgbikge1xuICAgICAgICAgICAgICAgIHZhciBvID0gdiA9PT0gYSA/IFwiXCIgOiB2O3JldHVybiBvID09PSAhMCB8fCB0WzJdLnF1ZXVlID09PSBvIHx8IHYgPT09IGEgJiYgdFsyXS5xdWV1ZSA9PT0gITEgPyB2b2lkIGYuZWFjaChnLCBmdW5jdGlvbiAociwgYSkge1xuICAgICAgICAgICAgICAgICAgYSA9PT0gbiAmJiAoKHYgPT09ICEwIHx8IG0uaXNTdHJpbmcodikpICYmIChmLmVhY2goZi5xdWV1ZShhLCBtLmlzU3RyaW5nKHYpID8gdiA6IFwiXCIpLCBmdW5jdGlvbiAoZSwgdCkge1xuICAgICAgICAgICAgICAgICAgICBtLmlzRnVuY3Rpb24odCkgJiYgdChudWxsLCAhMCk7XG4gICAgICAgICAgICAgICAgICB9KSwgZi5xdWV1ZShhLCBtLmlzU3RyaW5nKHYpID8gdiA6IFwiXCIsIFtdKSksIFwic3RvcFwiID09PSB5ID8gKGkoYSkgJiYgaShhKS50d2VlbnNDb250YWluZXIgJiYgbyAhPT0gITEgJiYgZi5lYWNoKGkoYSkudHdlZW5zQ29udGFpbmVyLCBmdW5jdGlvbiAoZSwgdCkge1xuICAgICAgICAgICAgICAgICAgICB0LmVuZFZhbHVlID0gdC5jdXJyZW50VmFsdWU7XG4gICAgICAgICAgICAgICAgICB9KSwgRi5wdXNoKGUpKSA6IFwiZmluaXNoXCIgPT09IHkgJiYgKHRbMl0uZHVyYXRpb24gPSAxKSk7XG4gICAgICAgICAgICAgICAgfSkgOiAhMDtcbiAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KSwgXCJzdG9wXCIgPT09IHkgJiYgKGYuZWFjaChGLCBmdW5jdGlvbiAoZSwgdCkge1xuICAgICAgICAgICAgICBwKHQsICEwKTtcbiAgICAgICAgICAgIH0pLCBrLnByb21pc2UgJiYgay5yZXNvbHZlcihnKSksIGUoKTtkZWZhdWx0OlxuICAgICAgICAgICAgaWYgKCFmLmlzUGxhaW5PYmplY3QoeSkgfHwgbS5pc0VtcHR5T2JqZWN0KHkpKSB7XG4gICAgICAgICAgICAgIGlmIChtLmlzU3RyaW5nKHkpICYmIGIuUmVkaXJlY3RzW3ldKSB7XG4gICAgICAgICAgICAgICAgdmFyIGogPSBmLmV4dGVuZCh7fSwgdiksXG4gICAgICAgICAgICAgICAgICAgIEUgPSBqLmR1cmF0aW9uLFxuICAgICAgICAgICAgICAgICAgICBIID0gai5kZWxheSB8fCAwO3JldHVybiBqLmJhY2t3YXJkcyA9PT0gITAgJiYgKGcgPSBmLmV4dGVuZCghMCwgW10sIGcpLnJldmVyc2UoKSksIGYuZWFjaChnLCBmdW5jdGlvbiAoZSwgdCkge1xuICAgICAgICAgICAgICAgICAgcGFyc2VGbG9hdChqLnN0YWdnZXIpID8gai5kZWxheSA9IEggKyBwYXJzZUZsb2F0KGouc3RhZ2dlcikgKiBlIDogbS5pc0Z1bmN0aW9uKGouc3RhZ2dlcikgJiYgKGouZGVsYXkgPSBIICsgai5zdGFnZ2VyLmNhbGwodCwgZSwgdykpLCBqLmRyYWcgJiYgKGouZHVyYXRpb24gPSBwYXJzZUZsb2F0KEUpIHx8ICgvXihjYWxsb3V0fHRyYW5zaXRpb24pLy50ZXN0KHkpID8gMWUzIDogaCksIGouZHVyYXRpb24gPSBNYXRoLm1heChqLmR1cmF0aW9uICogKGouYmFja3dhcmRzID8gMSAtIGUgLyB3IDogKGUgKyAxKSAvIHcpLCAuNzUgKiBqLmR1cmF0aW9uLCAyMDApKSwgYi5SZWRpcmVjdHNbeV0uY2FsbCh0LCB0LCBqIHx8IHt9LCBlLCB3LCBnLCBrLnByb21pc2UgPyBrIDogYSk7XG4gICAgICAgICAgICAgICAgfSksIGUoKTtcbiAgICAgICAgICAgICAgfXZhciBOID0gXCJWZWxvY2l0eTogRmlyc3QgYXJndW1lbnQgKFwiICsgeSArIFwiKSB3YXMgbm90IGEgcHJvcGVydHkgbWFwLCBhIGtub3duIGFjdGlvbiwgb3IgYSByZWdpc3RlcmVkIHJlZGlyZWN0LiBBYm9ydGluZy5cIjtyZXR1cm4gay5wcm9taXNlID8gay5yZWplY3RlcihuZXcgRXJyb3IoTikpIDogY29uc29sZS5sb2coTiksIGUoKTtcbiAgICAgICAgICAgIH1BID0gXCJzdGFydFwiO312YXIgTCA9IHsgbGFzdFBhcmVudDogbnVsbCwgbGFzdFBvc2l0aW9uOiBudWxsLCBsYXN0Rm9udFNpemU6IG51bGwsIGxhc3RQZXJjZW50VG9QeFdpZHRoOiBudWxsLCBsYXN0UGVyY2VudFRvUHhIZWlnaHQ6IG51bGwsIGxhc3RFbVRvUHg6IG51bGwsIHJlbVRvUHg6IG51bGwsIHZ3VG9QeDogbnVsbCwgdmhUb1B4OiBudWxsIH0sXG4gICAgICAgICAgICBSID0gW107Zi5lYWNoKGcsIGZ1bmN0aW9uIChlLCB0KSB7XG4gICAgICAgICAgbS5pc05vZGUodCkgJiYgbi5jYWxsKHQpO1xuICAgICAgICB9KTt2YXIgeixcbiAgICAgICAgICAgIGogPSBmLmV4dGVuZCh7fSwgYi5kZWZhdWx0cywgdik7aWYgKGoubG9vcCA9IHBhcnNlSW50KGoubG9vcCksIHogPSAyICogai5sb29wIC0gMSwgai5sb29wKSBmb3IgKHZhciBPID0gMDsgeiA+IE87IE8rKykge1xuICAgICAgICAgIHZhciBxID0geyBkZWxheTogai5kZWxheSwgcHJvZ3Jlc3M6IGoucHJvZ3Jlc3MgfTtPID09PSB6IC0gMSAmJiAocS5kaXNwbGF5ID0gai5kaXNwbGF5LCBxLnZpc2liaWxpdHkgPSBqLnZpc2liaWxpdHksIHEuY29tcGxldGUgPSBqLmNvbXBsZXRlKSwgUChnLCBcInJldmVyc2VcIiwgcSk7XG4gICAgICAgIH1yZXR1cm4gZSgpO1xuICAgICAgfVxuICAgIH07YiA9IGYuZXh0ZW5kKFAsIGIpLCBiLmFuaW1hdGUgPSBQO3ZhciB3ID0gdC5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUgfHwgZztyZXR1cm4gYi5TdGF0ZS5pc01vYmlsZSB8fCByLmhpZGRlbiA9PT0gYSB8fCByLmFkZEV2ZW50TGlzdGVuZXIoXCJ2aXNpYmlsaXR5Y2hhbmdlXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIHIuaGlkZGVuID8gKHcgPSBmdW5jdGlvbiAoZSkge1xuICAgICAgICByZXR1cm4gc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgZSghMCk7XG4gICAgICAgIH0sIDE2KTtcbiAgICAgIH0sIGMoKSkgOiB3ID0gdC5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUgfHwgZztcbiAgICB9KSwgZS5WZWxvY2l0eSA9IGIsIGUgIT09IHQgJiYgKGUuZm4udmVsb2NpdHkgPSBQLCBlLmZuLnZlbG9jaXR5LmRlZmF1bHRzID0gYi5kZWZhdWx0cyksIGYuZWFjaChbXCJEb3duXCIsIFwiVXBcIl0sIGZ1bmN0aW9uIChlLCB0KSB7XG4gICAgICBiLlJlZGlyZWN0c1tcInNsaWRlXCIgKyB0XSA9IGZ1bmN0aW9uIChlLCByLCBuLCBvLCBpLCBzKSB7XG4gICAgICAgIHZhciBsID0gZi5leHRlbmQoe30sIHIpLFxuICAgICAgICAgICAgdSA9IGwuYmVnaW4sXG4gICAgICAgICAgICBjID0gbC5jb21wbGV0ZSxcbiAgICAgICAgICAgIHAgPSB7IGhlaWdodDogXCJcIiwgbWFyZ2luVG9wOiBcIlwiLCBtYXJnaW5Cb3R0b206IFwiXCIsIHBhZGRpbmdUb3A6IFwiXCIsIHBhZGRpbmdCb3R0b206IFwiXCIgfSxcbiAgICAgICAgICAgIGQgPSB7fTtsLmRpc3BsYXkgPT09IGEgJiYgKGwuZGlzcGxheSA9IFwiRG93blwiID09PSB0ID8gXCJpbmxpbmVcIiA9PT0gYi5DU1MuVmFsdWVzLmdldERpc3BsYXlUeXBlKGUpID8gXCJpbmxpbmUtYmxvY2tcIiA6IFwiYmxvY2tcIiA6IFwibm9uZVwiKSwgbC5iZWdpbiA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICB1ICYmIHUuY2FsbChpLCBpKTtmb3IgKHZhciByIGluIHApIHtcbiAgICAgICAgICAgIGRbcl0gPSBlLnN0eWxlW3JdO3ZhciBhID0gYi5DU1MuZ2V0UHJvcGVydHlWYWx1ZShlLCByKTtwW3JdID0gXCJEb3duXCIgPT09IHQgPyBbYSwgMF0gOiBbMCwgYV07XG4gICAgICAgICAgfWQub3ZlcmZsb3cgPSBlLnN0eWxlLm92ZXJmbG93LCBlLnN0eWxlLm92ZXJmbG93ID0gXCJoaWRkZW5cIjtcbiAgICAgICAgfSwgbC5jb21wbGV0ZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICBmb3IgKHZhciB0IGluIGQpIHtcbiAgICAgICAgICAgIGUuc3R5bGVbdF0gPSBkW3RdO1xuICAgICAgICAgIH1jICYmIGMuY2FsbChpLCBpKSwgcyAmJiBzLnJlc29sdmVyKGkpO1xuICAgICAgICB9LCBiKGUsIHAsIGwpO1xuICAgICAgfTtcbiAgICB9KSwgZi5lYWNoKFtcIkluXCIsIFwiT3V0XCJdLCBmdW5jdGlvbiAoZSwgdCkge1xuICAgICAgYi5SZWRpcmVjdHNbXCJmYWRlXCIgKyB0XSA9IGZ1bmN0aW9uIChlLCByLCBuLCBvLCBpLCBzKSB7XG4gICAgICAgIHZhciBsID0gZi5leHRlbmQoe30sIHIpLFxuICAgICAgICAgICAgdSA9IHsgb3BhY2l0eTogXCJJblwiID09PSB0ID8gMSA6IDAgfSxcbiAgICAgICAgICAgIGMgPSBsLmNvbXBsZXRlO2wuY29tcGxldGUgPSBuICE9PSBvIC0gMSA/IGwuYmVnaW4gPSBudWxsIDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgIGMgJiYgYy5jYWxsKGksIGkpLCBzICYmIHMucmVzb2x2ZXIoaSk7XG4gICAgICAgIH0sIGwuZGlzcGxheSA9PT0gYSAmJiAobC5kaXNwbGF5ID0gXCJJblwiID09PSB0ID8gXCJhdXRvXCIgOiBcIm5vbmVcIiksIGIodGhpcywgdSwgbCk7XG4gICAgICB9O1xuICAgIH0pLCBiO1xuICB9KHdpbmRvdy5qUXVlcnkgfHwgd2luZG93LlplcHRvIHx8IHdpbmRvdywgd2luZG93LCBkb2N1bWVudCk7XG59KSk7XG47IWZ1bmN0aW9uIChhLCBiLCBjLCBkKSB7XG4gIFwidXNlIHN0cmljdFwiO1xuICBmdW5jdGlvbiBrKGEsIGIsIGMpIHtcbiAgICByZXR1cm4gc2V0VGltZW91dChxKGEsIGMpLCBiKTtcbiAgfWZ1bmN0aW9uIGwoYSwgYiwgYykge1xuICAgIHJldHVybiBBcnJheS5pc0FycmF5KGEpID8gKG0oYSwgY1tiXSwgYyksICEwKSA6ICExO1xuICB9ZnVuY3Rpb24gbShhLCBiLCBjKSB7XG4gICAgdmFyIGU7aWYgKGEpIGlmIChhLmZvckVhY2gpIGEuZm9yRWFjaChiLCBjKTtlbHNlIGlmIChhLmxlbmd0aCAhPT0gZCkgZm9yIChlID0gMDsgZSA8IGEubGVuZ3RoOykge1xuICAgICAgYi5jYWxsKGMsIGFbZV0sIGUsIGEpLCBlKys7XG4gICAgfSBlbHNlIGZvciAoZSBpbiBhKSB7XG4gICAgICBhLmhhc093blByb3BlcnR5KGUpICYmIGIuY2FsbChjLCBhW2VdLCBlLCBhKTtcbiAgICB9XG4gIH1mdW5jdGlvbiBuKGEsIGIsIGMpIHtcbiAgICBmb3IgKHZhciBlID0gT2JqZWN0LmtleXMoYiksIGYgPSAwOyBmIDwgZS5sZW5ndGg7KSB7XG4gICAgICAoIWMgfHwgYyAmJiBhW2VbZl1dID09PSBkKSAmJiAoYVtlW2ZdXSA9IGJbZVtmXV0pLCBmKys7XG4gICAgfXJldHVybiBhO1xuICB9ZnVuY3Rpb24gbyhhLCBiKSB7XG4gICAgcmV0dXJuIG4oYSwgYiwgITApO1xuICB9ZnVuY3Rpb24gcChhLCBiLCBjKSB7XG4gICAgdmFyIGUsXG4gICAgICAgIGQgPSBiLnByb3RvdHlwZTtlID0gYS5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKGQpLCBlLmNvbnN0cnVjdG9yID0gYSwgZS5fc3VwZXIgPSBkLCBjICYmIG4oZSwgYyk7XG4gIH1mdW5jdGlvbiBxKGEsIGIpIHtcbiAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIGEuYXBwbHkoYiwgYXJndW1lbnRzKTtcbiAgICB9O1xuICB9ZnVuY3Rpb24gcihhLCBiKSB7XG4gICAgcmV0dXJuIHR5cGVvZiBhID09IGcgPyBhLmFwcGx5KGIgPyBiWzBdIHx8IGQgOiBkLCBiKSA6IGE7XG4gIH1mdW5jdGlvbiBzKGEsIGIpIHtcbiAgICByZXR1cm4gYSA9PT0gZCA/IGIgOiBhO1xuICB9ZnVuY3Rpb24gdChhLCBiLCBjKSB7XG4gICAgbSh4KGIpLCBmdW5jdGlvbiAoYikge1xuICAgICAgYS5hZGRFdmVudExpc3RlbmVyKGIsIGMsICExKTtcbiAgICB9KTtcbiAgfWZ1bmN0aW9uIHUoYSwgYiwgYykge1xuICAgIG0oeChiKSwgZnVuY3Rpb24gKGIpIHtcbiAgICAgIGEucmVtb3ZlRXZlbnRMaXN0ZW5lcihiLCBjLCAhMSk7XG4gICAgfSk7XG4gIH1mdW5jdGlvbiB2KGEsIGIpIHtcbiAgICBmb3IgKDsgYTspIHtcbiAgICAgIGlmIChhID09IGIpIHJldHVybiAhMDthID0gYS5wYXJlbnROb2RlO1xuICAgIH1yZXR1cm4gITE7XG4gIH1mdW5jdGlvbiB3KGEsIGIpIHtcbiAgICByZXR1cm4gYS5pbmRleE9mKGIpID4gLTE7XG4gIH1mdW5jdGlvbiB4KGEpIHtcbiAgICByZXR1cm4gYS50cmltKCkuc3BsaXQoL1xccysvZyk7XG4gIH1mdW5jdGlvbiB5KGEsIGIsIGMpIHtcbiAgICBpZiAoYS5pbmRleE9mICYmICFjKSByZXR1cm4gYS5pbmRleE9mKGIpO2ZvciAodmFyIGQgPSAwOyBkIDwgYS5sZW5ndGg7KSB7XG4gICAgICBpZiAoYyAmJiBhW2RdW2NdID09IGIgfHwgIWMgJiYgYVtkXSA9PT0gYikgcmV0dXJuIGQ7ZCsrO1xuICAgIH1yZXR1cm4gLTE7XG4gIH1mdW5jdGlvbiB6KGEpIHtcbiAgICByZXR1cm4gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYSwgMCk7XG4gIH1mdW5jdGlvbiBBKGEsIGIsIGMpIHtcbiAgICBmb3IgKHZhciBkID0gW10sIGUgPSBbXSwgZiA9IDA7IGYgPCBhLmxlbmd0aDspIHtcbiAgICAgIHZhciBnID0gYiA/IGFbZl1bYl0gOiBhW2ZdO3koZSwgZykgPCAwICYmIGQucHVzaChhW2ZdKSwgZVtmXSA9IGcsIGYrKztcbiAgICB9cmV0dXJuIGMgJiYgKGQgPSBiID8gZC5zb3J0KGZ1bmN0aW9uIChhLCBjKSB7XG4gICAgICByZXR1cm4gYVtiXSA+IGNbYl07XG4gICAgfSkgOiBkLnNvcnQoKSksIGQ7XG4gIH1mdW5jdGlvbiBCKGEsIGIpIHtcbiAgICBmb3IgKHZhciBjLCBmLCBnID0gYlswXS50b1VwcGVyQ2FzZSgpICsgYi5zbGljZSgxKSwgaCA9IDA7IGggPCBlLmxlbmd0aDspIHtcbiAgICAgIGlmIChjID0gZVtoXSwgZiA9IGMgPyBjICsgZyA6IGIsIGYgaW4gYSkgcmV0dXJuIGY7aCsrO1xuICAgIH1yZXR1cm4gZDtcbiAgfWZ1bmN0aW9uIEQoKSB7XG4gICAgcmV0dXJuIEMrKztcbiAgfWZ1bmN0aW9uIEUoYSkge1xuICAgIHZhciBiID0gYS5vd25lckRvY3VtZW50O3JldHVybiBiLmRlZmF1bHRWaWV3IHx8IGIucGFyZW50V2luZG93O1xuICB9ZnVuY3Rpb24gYWIoYSwgYikge1xuICAgIHZhciBjID0gdGhpczt0aGlzLm1hbmFnZXIgPSBhLCB0aGlzLmNhbGxiYWNrID0gYiwgdGhpcy5lbGVtZW50ID0gYS5lbGVtZW50LCB0aGlzLnRhcmdldCA9IGEub3B0aW9ucy5pbnB1dFRhcmdldCwgdGhpcy5kb21IYW5kbGVyID0gZnVuY3Rpb24gKGIpIHtcbiAgICAgIHIoYS5vcHRpb25zLmVuYWJsZSwgW2FdKSAmJiBjLmhhbmRsZXIoYik7XG4gICAgfSwgdGhpcy5pbml0KCk7XG4gIH1mdW5jdGlvbiBiYihhKSB7XG4gICAgdmFyIGIsXG4gICAgICAgIGMgPSBhLm9wdGlvbnMuaW5wdXRDbGFzcztyZXR1cm4gYiA9IGMgPyBjIDogSCA/IHdiIDogSSA/IEViIDogRyA/IEdiIDogcmIsIG5ldyBiKGEsIGNiKTtcbiAgfWZ1bmN0aW9uIGNiKGEsIGIsIGMpIHtcbiAgICB2YXIgZCA9IGMucG9pbnRlcnMubGVuZ3RoLFxuICAgICAgICBlID0gYy5jaGFuZ2VkUG9pbnRlcnMubGVuZ3RoLFxuICAgICAgICBmID0gYiAmIE8gJiYgMCA9PT0gZCAtIGUsXG4gICAgICAgIGcgPSBiICYgKFEgfCBSKSAmJiAwID09PSBkIC0gZTtjLmlzRmlyc3QgPSAhIWYsIGMuaXNGaW5hbCA9ICEhZywgZiAmJiAoYS5zZXNzaW9uID0ge30pLCBjLmV2ZW50VHlwZSA9IGIsIGRiKGEsIGMpLCBhLmVtaXQoXCJoYW1tZXIuaW5wdXRcIiwgYyksIGEucmVjb2duaXplKGMpLCBhLnNlc3Npb24ucHJldklucHV0ID0gYztcbiAgfWZ1bmN0aW9uIGRiKGEsIGIpIHtcbiAgICB2YXIgYyA9IGEuc2Vzc2lvbixcbiAgICAgICAgZCA9IGIucG9pbnRlcnMsXG4gICAgICAgIGUgPSBkLmxlbmd0aDtjLmZpcnN0SW5wdXQgfHwgKGMuZmlyc3RJbnB1dCA9IGdiKGIpKSwgZSA+IDEgJiYgIWMuZmlyc3RNdWx0aXBsZSA/IGMuZmlyc3RNdWx0aXBsZSA9IGdiKGIpIDogMSA9PT0gZSAmJiAoYy5maXJzdE11bHRpcGxlID0gITEpO3ZhciBmID0gYy5maXJzdElucHV0LFxuICAgICAgICBnID0gYy5maXJzdE11bHRpcGxlLFxuICAgICAgICBoID0gZyA/IGcuY2VudGVyIDogZi5jZW50ZXIsXG4gICAgICAgIGkgPSBiLmNlbnRlciA9IGhiKGQpO2IudGltZVN0YW1wID0gaigpLCBiLmRlbHRhVGltZSA9IGIudGltZVN0YW1wIC0gZi50aW1lU3RhbXAsIGIuYW5nbGUgPSBsYihoLCBpKSwgYi5kaXN0YW5jZSA9IGtiKGgsIGkpLCBlYihjLCBiKSwgYi5vZmZzZXREaXJlY3Rpb24gPSBqYihiLmRlbHRhWCwgYi5kZWx0YVkpLCBiLnNjYWxlID0gZyA/IG5iKGcucG9pbnRlcnMsIGQpIDogMSwgYi5yb3RhdGlvbiA9IGcgPyBtYihnLnBvaW50ZXJzLCBkKSA6IDAsIGZiKGMsIGIpO3ZhciBrID0gYS5lbGVtZW50O3YoYi5zcmNFdmVudC50YXJnZXQsIGspICYmIChrID0gYi5zcmNFdmVudC50YXJnZXQpLCBiLnRhcmdldCA9IGs7XG4gIH1mdW5jdGlvbiBlYihhLCBiKSB7XG4gICAgdmFyIGMgPSBiLmNlbnRlcixcbiAgICAgICAgZCA9IGEub2Zmc2V0RGVsdGEgfHwge30sXG4gICAgICAgIGUgPSBhLnByZXZEZWx0YSB8fCB7fSxcbiAgICAgICAgZiA9IGEucHJldklucHV0IHx8IHt9OyhiLmV2ZW50VHlwZSA9PT0gTyB8fCBmLmV2ZW50VHlwZSA9PT0gUSkgJiYgKGUgPSBhLnByZXZEZWx0YSA9IHsgeDogZi5kZWx0YVggfHwgMCwgeTogZi5kZWx0YVkgfHwgMCB9LCBkID0gYS5vZmZzZXREZWx0YSA9IHsgeDogYy54LCB5OiBjLnkgfSksIGIuZGVsdGFYID0gZS54ICsgKGMueCAtIGQueCksIGIuZGVsdGFZID0gZS55ICsgKGMueSAtIGQueSk7XG4gIH1mdW5jdGlvbiBmYihhLCBiKSB7XG4gICAgdmFyIGYsXG4gICAgICAgIGcsXG4gICAgICAgIGgsXG4gICAgICAgIGosXG4gICAgICAgIGMgPSBhLmxhc3RJbnRlcnZhbCB8fCBiLFxuICAgICAgICBlID0gYi50aW1lU3RhbXAgLSBjLnRpbWVTdGFtcDtpZiAoYi5ldmVudFR5cGUgIT0gUiAmJiAoZSA+IE4gfHwgYy52ZWxvY2l0eSA9PT0gZCkpIHtcbiAgICAgIHZhciBrID0gYy5kZWx0YVggLSBiLmRlbHRhWCxcbiAgICAgICAgICBsID0gYy5kZWx0YVkgLSBiLmRlbHRhWSxcbiAgICAgICAgICBtID0gaWIoZSwgaywgbCk7ZyA9IG0ueCwgaCA9IG0ueSwgZiA9IGkobS54KSA+IGkobS55KSA/IG0ueCA6IG0ueSwgaiA9IGpiKGssIGwpLCBhLmxhc3RJbnRlcnZhbCA9IGI7XG4gICAgfSBlbHNlIGYgPSBjLnZlbG9jaXR5LCBnID0gYy52ZWxvY2l0eVgsIGggPSBjLnZlbG9jaXR5WSwgaiA9IGMuZGlyZWN0aW9uO2IudmVsb2NpdHkgPSBmLCBiLnZlbG9jaXR5WCA9IGcsIGIudmVsb2NpdHlZID0gaCwgYi5kaXJlY3Rpb24gPSBqO1xuICB9ZnVuY3Rpb24gZ2IoYSkge1xuICAgIGZvciAodmFyIGIgPSBbXSwgYyA9IDA7IGMgPCBhLnBvaW50ZXJzLmxlbmd0aDspIHtcbiAgICAgIGJbY10gPSB7IGNsaWVudFg6IGgoYS5wb2ludGVyc1tjXS5jbGllbnRYKSwgY2xpZW50WTogaChhLnBvaW50ZXJzW2NdLmNsaWVudFkpIH0sIGMrKztcbiAgICB9cmV0dXJuIHsgdGltZVN0YW1wOiBqKCksIHBvaW50ZXJzOiBiLCBjZW50ZXI6IGhiKGIpLCBkZWx0YVg6IGEuZGVsdGFYLCBkZWx0YVk6IGEuZGVsdGFZIH07XG4gIH1mdW5jdGlvbiBoYihhKSB7XG4gICAgdmFyIGIgPSBhLmxlbmd0aDtpZiAoMSA9PT0gYikgcmV0dXJuIHsgeDogaChhWzBdLmNsaWVudFgpLCB5OiBoKGFbMF0uY2xpZW50WSkgfTtmb3IgKHZhciBjID0gMCwgZCA9IDAsIGUgPSAwOyBiID4gZTspIHtcbiAgICAgIGMgKz0gYVtlXS5jbGllbnRYLCBkICs9IGFbZV0uY2xpZW50WSwgZSsrO1xuICAgIH1yZXR1cm4geyB4OiBoKGMgLyBiKSwgeTogaChkIC8gYikgfTtcbiAgfWZ1bmN0aW9uIGliKGEsIGIsIGMpIHtcbiAgICByZXR1cm4geyB4OiBiIC8gYSB8fCAwLCB5OiBjIC8gYSB8fCAwIH07XG4gIH1mdW5jdGlvbiBqYihhLCBiKSB7XG4gICAgcmV0dXJuIGEgPT09IGIgPyBTIDogaShhKSA+PSBpKGIpID8gYSA+IDAgPyBUIDogVSA6IGIgPiAwID8gViA6IFc7XG4gIH1mdW5jdGlvbiBrYihhLCBiLCBjKSB7XG4gICAgYyB8fCAoYyA9ICQpO3ZhciBkID0gYltjWzBdXSAtIGFbY1swXV0sXG4gICAgICAgIGUgPSBiW2NbMV1dIC0gYVtjWzFdXTtyZXR1cm4gTWF0aC5zcXJ0KGQgKiBkICsgZSAqIGUpO1xuICB9ZnVuY3Rpb24gbGIoYSwgYiwgYykge1xuICAgIGMgfHwgKGMgPSAkKTt2YXIgZCA9IGJbY1swXV0gLSBhW2NbMF1dLFxuICAgICAgICBlID0gYltjWzFdXSAtIGFbY1sxXV07cmV0dXJuIDE4MCAqIE1hdGguYXRhbjIoZSwgZCkgLyBNYXRoLlBJO1xuICB9ZnVuY3Rpb24gbWIoYSwgYikge1xuICAgIHJldHVybiBsYihiWzFdLCBiWzBdLCBfKSAtIGxiKGFbMV0sIGFbMF0sIF8pO1xuICB9ZnVuY3Rpb24gbmIoYSwgYikge1xuICAgIHJldHVybiBrYihiWzBdLCBiWzFdLCBfKSAvIGtiKGFbMF0sIGFbMV0sIF8pO1xuICB9ZnVuY3Rpb24gcmIoKSB7XG4gICAgdGhpcy5ldkVsID0gcGIsIHRoaXMuZXZXaW4gPSBxYiwgdGhpcy5hbGxvdyA9ICEwLCB0aGlzLnByZXNzZWQgPSAhMSwgYWIuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgfWZ1bmN0aW9uIHdiKCkge1xuICAgIHRoaXMuZXZFbCA9IHViLCB0aGlzLmV2V2luID0gdmIsIGFiLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyksIHRoaXMuc3RvcmUgPSB0aGlzLm1hbmFnZXIuc2Vzc2lvbi5wb2ludGVyRXZlbnRzID0gW107XG4gIH1mdW5jdGlvbiBBYigpIHtcbiAgICB0aGlzLmV2VGFyZ2V0ID0geWIsIHRoaXMuZXZXaW4gPSB6YiwgdGhpcy5zdGFydGVkID0gITEsIGFiLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gIH1mdW5jdGlvbiBCYihhLCBiKSB7XG4gICAgdmFyIGMgPSB6KGEudG91Y2hlcyksXG4gICAgICAgIGQgPSB6KGEuY2hhbmdlZFRvdWNoZXMpO3JldHVybiBiICYgKFEgfCBSKSAmJiAoYyA9IEEoYy5jb25jYXQoZCksIFwiaWRlbnRpZmllclwiLCAhMCkpLCBbYywgZF07XG4gIH1mdW5jdGlvbiBFYigpIHtcbiAgICB0aGlzLmV2VGFyZ2V0ID0gRGIsIHRoaXMudGFyZ2V0SWRzID0ge30sIGFiLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gIH1mdW5jdGlvbiBGYihhLCBiKSB7XG4gICAgdmFyIGMgPSB6KGEudG91Y2hlcyksXG4gICAgICAgIGQgPSB0aGlzLnRhcmdldElkcztpZiAoYiAmIChPIHwgUCkgJiYgMSA9PT0gYy5sZW5ndGgpIHJldHVybiBkW2NbMF0uaWRlbnRpZmllcl0gPSAhMCwgW2MsIGNdO3ZhciBlLFxuICAgICAgICBmLFxuICAgICAgICBnID0geihhLmNoYW5nZWRUb3VjaGVzKSxcbiAgICAgICAgaCA9IFtdLFxuICAgICAgICBpID0gdGhpcy50YXJnZXQ7aWYgKGYgPSBjLmZpbHRlcihmdW5jdGlvbiAoYSkge1xuICAgICAgcmV0dXJuIHYoYS50YXJnZXQsIGkpO1xuICAgIH0pLCBiID09PSBPKSBmb3IgKGUgPSAwOyBlIDwgZi5sZW5ndGg7KSB7XG4gICAgICBkW2ZbZV0uaWRlbnRpZmllcl0gPSAhMCwgZSsrO1xuICAgIH1mb3IgKGUgPSAwOyBlIDwgZy5sZW5ndGg7KSB7XG4gICAgICBkW2dbZV0uaWRlbnRpZmllcl0gJiYgaC5wdXNoKGdbZV0pLCBiICYgKFEgfCBSKSAmJiBkZWxldGUgZFtnW2VdLmlkZW50aWZpZXJdLCBlKys7XG4gICAgfXJldHVybiBoLmxlbmd0aCA/IFtBKGYuY29uY2F0KGgpLCBcImlkZW50aWZpZXJcIiwgITApLCBoXSA6IHZvaWQgMDtcbiAgfWZ1bmN0aW9uIEdiKCkge1xuICAgIGFiLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7dmFyIGEgPSBxKHRoaXMuaGFuZGxlciwgdGhpcyk7dGhpcy50b3VjaCA9IG5ldyBFYih0aGlzLm1hbmFnZXIsIGEpLCB0aGlzLm1vdXNlID0gbmV3IHJiKHRoaXMubWFuYWdlciwgYSk7XG4gIH1mdW5jdGlvbiBQYihhLCBiKSB7XG4gICAgdGhpcy5tYW5hZ2VyID0gYSwgdGhpcy5zZXQoYik7XG4gIH1mdW5jdGlvbiBRYihhKSB7XG4gICAgaWYgKHcoYSwgTWIpKSByZXR1cm4gTWI7dmFyIGIgPSB3KGEsIE5iKSxcbiAgICAgICAgYyA9IHcoYSwgT2IpO3JldHVybiBiICYmIGMgPyBOYiArIFwiIFwiICsgT2IgOiBiIHx8IGMgPyBiID8gTmIgOiBPYiA6IHcoYSwgTGIpID8gTGIgOiBLYjtcbiAgfWZ1bmN0aW9uIFliKGEpIHtcbiAgICB0aGlzLmlkID0gRCgpLCB0aGlzLm1hbmFnZXIgPSBudWxsLCB0aGlzLm9wdGlvbnMgPSBvKGEgfHwge30sIHRoaXMuZGVmYXVsdHMpLCB0aGlzLm9wdGlvbnMuZW5hYmxlID0gcyh0aGlzLm9wdGlvbnMuZW5hYmxlLCAhMCksIHRoaXMuc3RhdGUgPSBSYiwgdGhpcy5zaW11bHRhbmVvdXMgPSB7fSwgdGhpcy5yZXF1aXJlRmFpbCA9IFtdO1xuICB9ZnVuY3Rpb24gWmIoYSkge1xuICAgIHJldHVybiBhICYgV2IgPyBcImNhbmNlbFwiIDogYSAmIFViID8gXCJlbmRcIiA6IGEgJiBUYiA/IFwibW92ZVwiIDogYSAmIFNiID8gXCJzdGFydFwiIDogXCJcIjtcbiAgfWZ1bmN0aW9uICRiKGEpIHtcbiAgICByZXR1cm4gYSA9PSBXID8gXCJkb3duXCIgOiBhID09IFYgPyBcInVwXCIgOiBhID09IFQgPyBcImxlZnRcIiA6IGEgPT0gVSA/IFwicmlnaHRcIiA6IFwiXCI7XG4gIH1mdW5jdGlvbiBfYihhLCBiKSB7XG4gICAgdmFyIGMgPSBiLm1hbmFnZXI7cmV0dXJuIGMgPyBjLmdldChhKSA6IGE7XG4gIH1mdW5jdGlvbiBhYygpIHtcbiAgICBZYi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICB9ZnVuY3Rpb24gYmMoKSB7XG4gICAgYWMuYXBwbHkodGhpcywgYXJndW1lbnRzKSwgdGhpcy5wWCA9IG51bGwsIHRoaXMucFkgPSBudWxsO1xuICB9ZnVuY3Rpb24gY2MoKSB7XG4gICAgYWMuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgfWZ1bmN0aW9uIGRjKCkge1xuICAgIFliLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyksIHRoaXMuX3RpbWVyID0gbnVsbCwgdGhpcy5faW5wdXQgPSBudWxsO1xuICB9ZnVuY3Rpb24gZWMoKSB7XG4gICAgYWMuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgfWZ1bmN0aW9uIGZjKCkge1xuICAgIGFjLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gIH1mdW5jdGlvbiBnYygpIHtcbiAgICBZYi5hcHBseSh0aGlzLCBhcmd1bWVudHMpLCB0aGlzLnBUaW1lID0gITEsIHRoaXMucENlbnRlciA9ICExLCB0aGlzLl90aW1lciA9IG51bGwsIHRoaXMuX2lucHV0ID0gbnVsbCwgdGhpcy5jb3VudCA9IDA7XG4gIH1mdW5jdGlvbiBoYyhhLCBiKSB7XG4gICAgcmV0dXJuIGIgPSBiIHx8IHt9LCBiLnJlY29nbml6ZXJzID0gcyhiLnJlY29nbml6ZXJzLCBoYy5kZWZhdWx0cy5wcmVzZXQpLCBuZXcga2MoYSwgYik7XG4gIH1mdW5jdGlvbiBrYyhhLCBiKSB7XG4gICAgYiA9IGIgfHwge30sIHRoaXMub3B0aW9ucyA9IG8oYiwgaGMuZGVmYXVsdHMpLCB0aGlzLm9wdGlvbnMuaW5wdXRUYXJnZXQgPSB0aGlzLm9wdGlvbnMuaW5wdXRUYXJnZXQgfHwgYSwgdGhpcy5oYW5kbGVycyA9IHt9LCB0aGlzLnNlc3Npb24gPSB7fSwgdGhpcy5yZWNvZ25pemVycyA9IFtdLCB0aGlzLmVsZW1lbnQgPSBhLCB0aGlzLmlucHV0ID0gYmIodGhpcyksIHRoaXMudG91Y2hBY3Rpb24gPSBuZXcgUGIodGhpcywgdGhpcy5vcHRpb25zLnRvdWNoQWN0aW9uKSwgbGModGhpcywgITApLCBtKGIucmVjb2duaXplcnMsIGZ1bmN0aW9uIChhKSB7XG4gICAgICB2YXIgYiA9IHRoaXMuYWRkKG5ldyBhWzBdKGFbMV0pKTthWzJdICYmIGIucmVjb2duaXplV2l0aChhWzJdKSwgYVszXSAmJiBiLnJlcXVpcmVGYWlsdXJlKGFbM10pO1xuICAgIH0sIHRoaXMpO1xuICB9ZnVuY3Rpb24gbGMoYSwgYikge1xuICAgIHZhciBjID0gYS5lbGVtZW50O20oYS5vcHRpb25zLmNzc1Byb3BzLCBmdW5jdGlvbiAoYSwgZCkge1xuICAgICAgYy5zdHlsZVtCKGMuc3R5bGUsIGQpXSA9IGIgPyBhIDogXCJcIjtcbiAgICB9KTtcbiAgfWZ1bmN0aW9uIG1jKGEsIGMpIHtcbiAgICB2YXIgZCA9IGIuY3JlYXRlRXZlbnQoXCJFdmVudFwiKTtkLmluaXRFdmVudChhLCAhMCwgITApLCBkLmdlc3R1cmUgPSBjLCBjLnRhcmdldC5kaXNwYXRjaEV2ZW50KGQpO1xuICB9dmFyIGUgPSBbXCJcIiwgXCJ3ZWJraXRcIiwgXCJtb3pcIiwgXCJNU1wiLCBcIm1zXCIsIFwib1wiXSxcbiAgICAgIGYgPSBiLmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiksXG4gICAgICBnID0gXCJmdW5jdGlvblwiLFxuICAgICAgaCA9IE1hdGgucm91bmQsXG4gICAgICBpID0gTWF0aC5hYnMsXG4gICAgICBqID0gRGF0ZS5ub3csXG4gICAgICBDID0gMSxcbiAgICAgIEYgPSAvbW9iaWxlfHRhYmxldHxpcChhZHxob25lfG9kKXxhbmRyb2lkL2ksXG4gICAgICBHID0gXCJvbnRvdWNoc3RhcnRcIiBpbiBhLFxuICAgICAgSCA9IEIoYSwgXCJQb2ludGVyRXZlbnRcIikgIT09IGQsXG4gICAgICBJID0gRyAmJiBGLnRlc3QobmF2aWdhdG9yLnVzZXJBZ2VudCksXG4gICAgICBKID0gXCJ0b3VjaFwiLFxuICAgICAgSyA9IFwicGVuXCIsXG4gICAgICBMID0gXCJtb3VzZVwiLFxuICAgICAgTSA9IFwia2luZWN0XCIsXG4gICAgICBOID0gMjUsXG4gICAgICBPID0gMSxcbiAgICAgIFAgPSAyLFxuICAgICAgUSA9IDQsXG4gICAgICBSID0gOCxcbiAgICAgIFMgPSAxLFxuICAgICAgVCA9IDIsXG4gICAgICBVID0gNCxcbiAgICAgIFYgPSA4LFxuICAgICAgVyA9IDE2LFxuICAgICAgWCA9IFQgfCBVLFxuICAgICAgWSA9IFYgfCBXLFxuICAgICAgWiA9IFggfCBZLFxuICAgICAgJCA9IFtcInhcIiwgXCJ5XCJdLFxuICAgICAgXyA9IFtcImNsaWVudFhcIiwgXCJjbGllbnRZXCJdO2FiLnByb3RvdHlwZSA9IHsgaGFuZGxlcjogZnVuY3Rpb24gKCkge30sIGluaXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgIHRoaXMuZXZFbCAmJiB0KHRoaXMuZWxlbWVudCwgdGhpcy5ldkVsLCB0aGlzLmRvbUhhbmRsZXIpLCB0aGlzLmV2VGFyZ2V0ICYmIHQodGhpcy50YXJnZXQsIHRoaXMuZXZUYXJnZXQsIHRoaXMuZG9tSGFuZGxlciksIHRoaXMuZXZXaW4gJiYgdChFKHRoaXMuZWxlbWVudCksIHRoaXMuZXZXaW4sIHRoaXMuZG9tSGFuZGxlcik7XG4gICAgfSwgZGVzdHJveTogZnVuY3Rpb24gKCkge1xuICAgICAgdGhpcy5ldkVsICYmIHUodGhpcy5lbGVtZW50LCB0aGlzLmV2RWwsIHRoaXMuZG9tSGFuZGxlciksIHRoaXMuZXZUYXJnZXQgJiYgdSh0aGlzLnRhcmdldCwgdGhpcy5ldlRhcmdldCwgdGhpcy5kb21IYW5kbGVyKSwgdGhpcy5ldldpbiAmJiB1KEUodGhpcy5lbGVtZW50KSwgdGhpcy5ldldpbiwgdGhpcy5kb21IYW5kbGVyKTtcbiAgICB9IH07dmFyIG9iID0geyBtb3VzZWRvd246IE8sIG1vdXNlbW92ZTogUCwgbW91c2V1cDogUSB9LFxuICAgICAgcGIgPSBcIm1vdXNlZG93blwiLFxuICAgICAgcWIgPSBcIm1vdXNlbW92ZSBtb3VzZXVwXCI7cChyYiwgYWIsIHsgaGFuZGxlcjogZnVuY3Rpb24gKGEpIHtcbiAgICAgIHZhciBiID0gb2JbYS50eXBlXTtiICYgTyAmJiAwID09PSBhLmJ1dHRvbiAmJiAodGhpcy5wcmVzc2VkID0gITApLCBiICYgUCAmJiAxICE9PSBhLndoaWNoICYmIChiID0gUSksIHRoaXMucHJlc3NlZCAmJiB0aGlzLmFsbG93ICYmIChiICYgUSAmJiAodGhpcy5wcmVzc2VkID0gITEpLCB0aGlzLmNhbGxiYWNrKHRoaXMubWFuYWdlciwgYiwgeyBwb2ludGVyczogW2FdLCBjaGFuZ2VkUG9pbnRlcnM6IFthXSwgcG9pbnRlclR5cGU6IEwsIHNyY0V2ZW50OiBhIH0pKTtcbiAgICB9IH0pO3ZhciBzYiA9IHsgcG9pbnRlcmRvd246IE8sIHBvaW50ZXJtb3ZlOiBQLCBwb2ludGVydXA6IFEsIHBvaW50ZXJjYW5jZWw6IFIsIHBvaW50ZXJvdXQ6IFIgfSxcbiAgICAgIHRiID0geyAyOiBKLCAzOiBLLCA0OiBMLCA1OiBNIH0sXG4gICAgICB1YiA9IFwicG9pbnRlcmRvd25cIixcbiAgICAgIHZiID0gXCJwb2ludGVybW92ZSBwb2ludGVydXAgcG9pbnRlcmNhbmNlbFwiO2EuTVNQb2ludGVyRXZlbnQgJiYgKHViID0gXCJNU1BvaW50ZXJEb3duXCIsIHZiID0gXCJNU1BvaW50ZXJNb3ZlIE1TUG9pbnRlclVwIE1TUG9pbnRlckNhbmNlbFwiKSwgcCh3YiwgYWIsIHsgaGFuZGxlcjogZnVuY3Rpb24gKGEpIHtcbiAgICAgIHZhciBiID0gdGhpcy5zdG9yZSxcbiAgICAgICAgICBjID0gITEsXG4gICAgICAgICAgZCA9IGEudHlwZS50b0xvd2VyQ2FzZSgpLnJlcGxhY2UoXCJtc1wiLCBcIlwiKSxcbiAgICAgICAgICBlID0gc2JbZF0sXG4gICAgICAgICAgZiA9IHRiW2EucG9pbnRlclR5cGVdIHx8IGEucG9pbnRlclR5cGUsXG4gICAgICAgICAgZyA9IGYgPT0gSixcbiAgICAgICAgICBoID0geShiLCBhLnBvaW50ZXJJZCwgXCJwb2ludGVySWRcIik7ZSAmIE8gJiYgKDAgPT09IGEuYnV0dG9uIHx8IGcpID8gMCA+IGggJiYgKGIucHVzaChhKSwgaCA9IGIubGVuZ3RoIC0gMSkgOiBlICYgKFEgfCBSKSAmJiAoYyA9ICEwKSwgMCA+IGggfHwgKGJbaF0gPSBhLCB0aGlzLmNhbGxiYWNrKHRoaXMubWFuYWdlciwgZSwgeyBwb2ludGVyczogYiwgY2hhbmdlZFBvaW50ZXJzOiBbYV0sIHBvaW50ZXJUeXBlOiBmLCBzcmNFdmVudDogYSB9KSwgYyAmJiBiLnNwbGljZShoLCAxKSk7XG4gICAgfSB9KTt2YXIgeGIgPSB7IHRvdWNoc3RhcnQ6IE8sIHRvdWNobW92ZTogUCwgdG91Y2hlbmQ6IFEsIHRvdWNoY2FuY2VsOiBSIH0sXG4gICAgICB5YiA9IFwidG91Y2hzdGFydFwiLFxuICAgICAgemIgPSBcInRvdWNoc3RhcnQgdG91Y2htb3ZlIHRvdWNoZW5kIHRvdWNoY2FuY2VsXCI7cChBYiwgYWIsIHsgaGFuZGxlcjogZnVuY3Rpb24gKGEpIHtcbiAgICAgIHZhciBiID0geGJbYS50eXBlXTtpZiAoYiA9PT0gTyAmJiAodGhpcy5zdGFydGVkID0gITApLCB0aGlzLnN0YXJ0ZWQpIHtcbiAgICAgICAgdmFyIGMgPSBCYi5jYWxsKHRoaXMsIGEsIGIpO2IgJiAoUSB8IFIpICYmIDAgPT09IGNbMF0ubGVuZ3RoIC0gY1sxXS5sZW5ndGggJiYgKHRoaXMuc3RhcnRlZCA9ICExKSwgdGhpcy5jYWxsYmFjayh0aGlzLm1hbmFnZXIsIGIsIHsgcG9pbnRlcnM6IGNbMF0sIGNoYW5nZWRQb2ludGVyczogY1sxXSwgcG9pbnRlclR5cGU6IEosIHNyY0V2ZW50OiBhIH0pO1xuICAgICAgfVxuICAgIH0gfSk7dmFyIENiID0geyB0b3VjaHN0YXJ0OiBPLCB0b3VjaG1vdmU6IFAsIHRvdWNoZW5kOiBRLCB0b3VjaGNhbmNlbDogUiB9LFxuICAgICAgRGIgPSBcInRvdWNoc3RhcnQgdG91Y2htb3ZlIHRvdWNoZW5kIHRvdWNoY2FuY2VsXCI7cChFYiwgYWIsIHsgaGFuZGxlcjogZnVuY3Rpb24gKGEpIHtcbiAgICAgIHZhciBiID0gQ2JbYS50eXBlXSxcbiAgICAgICAgICBjID0gRmIuY2FsbCh0aGlzLCBhLCBiKTtjICYmIHRoaXMuY2FsbGJhY2sodGhpcy5tYW5hZ2VyLCBiLCB7IHBvaW50ZXJzOiBjWzBdLCBjaGFuZ2VkUG9pbnRlcnM6IGNbMV0sIHBvaW50ZXJUeXBlOiBKLCBzcmNFdmVudDogYSB9KTtcbiAgICB9IH0pLCBwKEdiLCBhYiwgeyBoYW5kbGVyOiBmdW5jdGlvbiAoYSwgYiwgYykge1xuICAgICAgdmFyIGQgPSBjLnBvaW50ZXJUeXBlID09IEosXG4gICAgICAgICAgZSA9IGMucG9pbnRlclR5cGUgPT0gTDtpZiAoZCkgdGhpcy5tb3VzZS5hbGxvdyA9ICExO2Vsc2UgaWYgKGUgJiYgIXRoaXMubW91c2UuYWxsb3cpIHJldHVybjtiICYgKFEgfCBSKSAmJiAodGhpcy5tb3VzZS5hbGxvdyA9ICEwKSwgdGhpcy5jYWxsYmFjayhhLCBiLCBjKTtcbiAgICB9LCBkZXN0cm95OiBmdW5jdGlvbiAoKSB7XG4gICAgICB0aGlzLnRvdWNoLmRlc3Ryb3koKSwgdGhpcy5tb3VzZS5kZXN0cm95KCk7XG4gICAgfSB9KTt2YXIgSGIgPSBCKGYuc3R5bGUsIFwidG91Y2hBY3Rpb25cIiksXG4gICAgICBJYiA9IEhiICE9PSBkLFxuICAgICAgSmIgPSBcImNvbXB1dGVcIixcbiAgICAgIEtiID0gXCJhdXRvXCIsXG4gICAgICBMYiA9IFwibWFuaXB1bGF0aW9uXCIsXG4gICAgICBNYiA9IFwibm9uZVwiLFxuICAgICAgTmIgPSBcInBhbi14XCIsXG4gICAgICBPYiA9IFwicGFuLXlcIjtQYi5wcm90b3R5cGUgPSB7IHNldDogZnVuY3Rpb24gKGEpIHtcbiAgICAgIGEgPT0gSmIgJiYgKGEgPSB0aGlzLmNvbXB1dGUoKSksIEliICYmICh0aGlzLm1hbmFnZXIuZWxlbWVudC5zdHlsZVtIYl0gPSBhKSwgdGhpcy5hY3Rpb25zID0gYS50b0xvd2VyQ2FzZSgpLnRyaW0oKTtcbiAgICB9LCB1cGRhdGU6IGZ1bmN0aW9uICgpIHtcbiAgICAgIHRoaXMuc2V0KHRoaXMubWFuYWdlci5vcHRpb25zLnRvdWNoQWN0aW9uKTtcbiAgICB9LCBjb21wdXRlOiBmdW5jdGlvbiAoKSB7XG4gICAgICB2YXIgYSA9IFtdO3JldHVybiBtKHRoaXMubWFuYWdlci5yZWNvZ25pemVycywgZnVuY3Rpb24gKGIpIHtcbiAgICAgICAgcihiLm9wdGlvbnMuZW5hYmxlLCBbYl0pICYmIChhID0gYS5jb25jYXQoYi5nZXRUb3VjaEFjdGlvbigpKSk7XG4gICAgICB9KSwgUWIoYS5qb2luKFwiIFwiKSk7XG4gICAgfSwgcHJldmVudERlZmF1bHRzOiBmdW5jdGlvbiAoYSkge1xuICAgICAgaWYgKCFJYikge1xuICAgICAgICB2YXIgYiA9IGEuc3JjRXZlbnQsXG4gICAgICAgICAgICBjID0gYS5vZmZzZXREaXJlY3Rpb247aWYgKHRoaXMubWFuYWdlci5zZXNzaW9uLnByZXZlbnRlZCkgcmV0dXJuIGIucHJldmVudERlZmF1bHQoKSwgdm9pZCAwO3ZhciBkID0gdGhpcy5hY3Rpb25zLFxuICAgICAgICAgICAgZSA9IHcoZCwgTWIpLFxuICAgICAgICAgICAgZiA9IHcoZCwgT2IpLFxuICAgICAgICAgICAgZyA9IHcoZCwgTmIpO3JldHVybiBlIHx8IGYgJiYgYyAmIFggfHwgZyAmJiBjICYgWSA/IHRoaXMucHJldmVudFNyYyhiKSA6IHZvaWQgMDtcbiAgICAgIH1cbiAgICB9LCBwcmV2ZW50U3JjOiBmdW5jdGlvbiAoYSkge1xuICAgICAgdGhpcy5tYW5hZ2VyLnNlc3Npb24ucHJldmVudGVkID0gITAsIGEucHJldmVudERlZmF1bHQoKTtcbiAgICB9IH07dmFyIFJiID0gMSxcbiAgICAgIFNiID0gMixcbiAgICAgIFRiID0gNCxcbiAgICAgIFViID0gOCxcbiAgICAgIFZiID0gVWIsXG4gICAgICBXYiA9IDE2LFxuICAgICAgWGIgPSAzMjtZYi5wcm90b3R5cGUgPSB7IGRlZmF1bHRzOiB7fSwgc2V0OiBmdW5jdGlvbiAoYSkge1xuICAgICAgcmV0dXJuIG4odGhpcy5vcHRpb25zLCBhKSwgdGhpcy5tYW5hZ2VyICYmIHRoaXMubWFuYWdlci50b3VjaEFjdGlvbi51cGRhdGUoKSwgdGhpcztcbiAgICB9LCByZWNvZ25pemVXaXRoOiBmdW5jdGlvbiAoYSkge1xuICAgICAgaWYgKGwoYSwgXCJyZWNvZ25pemVXaXRoXCIsIHRoaXMpKSByZXR1cm4gdGhpczt2YXIgYiA9IHRoaXMuc2ltdWx0YW5lb3VzO3JldHVybiBhID0gX2IoYSwgdGhpcyksIGJbYS5pZF0gfHwgKGJbYS5pZF0gPSBhLCBhLnJlY29nbml6ZVdpdGgodGhpcykpLCB0aGlzO1xuICAgIH0sIGRyb3BSZWNvZ25pemVXaXRoOiBmdW5jdGlvbiAoYSkge1xuICAgICAgcmV0dXJuIGwoYSwgXCJkcm9wUmVjb2duaXplV2l0aFwiLCB0aGlzKSA/IHRoaXMgOiAoYSA9IF9iKGEsIHRoaXMpLCBkZWxldGUgdGhpcy5zaW11bHRhbmVvdXNbYS5pZF0sIHRoaXMpO1xuICAgIH0sIHJlcXVpcmVGYWlsdXJlOiBmdW5jdGlvbiAoYSkge1xuICAgICAgaWYgKGwoYSwgXCJyZXF1aXJlRmFpbHVyZVwiLCB0aGlzKSkgcmV0dXJuIHRoaXM7dmFyIGIgPSB0aGlzLnJlcXVpcmVGYWlsO3JldHVybiBhID0gX2IoYSwgdGhpcyksIC0xID09PSB5KGIsIGEpICYmIChiLnB1c2goYSksIGEucmVxdWlyZUZhaWx1cmUodGhpcykpLCB0aGlzO1xuICAgIH0sIGRyb3BSZXF1aXJlRmFpbHVyZTogZnVuY3Rpb24gKGEpIHtcbiAgICAgIGlmIChsKGEsIFwiZHJvcFJlcXVpcmVGYWlsdXJlXCIsIHRoaXMpKSByZXR1cm4gdGhpczthID0gX2IoYSwgdGhpcyk7dmFyIGIgPSB5KHRoaXMucmVxdWlyZUZhaWwsIGEpO3JldHVybiBiID4gLTEgJiYgdGhpcy5yZXF1aXJlRmFpbC5zcGxpY2UoYiwgMSksIHRoaXM7XG4gICAgfSwgaGFzUmVxdWlyZUZhaWx1cmVzOiBmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gdGhpcy5yZXF1aXJlRmFpbC5sZW5ndGggPiAwO1xuICAgIH0sIGNhblJlY29nbml6ZVdpdGg6IGZ1bmN0aW9uIChhKSB7XG4gICAgICByZXR1cm4gISF0aGlzLnNpbXVsdGFuZW91c1thLmlkXTtcbiAgICB9LCBlbWl0OiBmdW5jdGlvbiAoYSkge1xuICAgICAgZnVuY3Rpb24gZChkKSB7XG4gICAgICAgIGIubWFuYWdlci5lbWl0KGIub3B0aW9ucy5ldmVudCArIChkID8gWmIoYykgOiBcIlwiKSwgYSk7XG4gICAgICB9dmFyIGIgPSB0aGlzLFxuICAgICAgICAgIGMgPSB0aGlzLnN0YXRlO1ViID4gYyAmJiBkKCEwKSwgZCgpLCBjID49IFViICYmIGQoITApO1xuICAgIH0sIHRyeUVtaXQ6IGZ1bmN0aW9uIChhKSB7XG4gICAgICByZXR1cm4gdGhpcy5jYW5FbWl0KCkgPyB0aGlzLmVtaXQoYSkgOiAodGhpcy5zdGF0ZSA9IFhiLCB2b2lkIDApO1xuICAgIH0sIGNhbkVtaXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgIGZvciAodmFyIGEgPSAwOyBhIDwgdGhpcy5yZXF1aXJlRmFpbC5sZW5ndGg7KSB7XG4gICAgICAgIGlmICghKHRoaXMucmVxdWlyZUZhaWxbYV0uc3RhdGUgJiAoWGIgfCBSYikpKSByZXR1cm4gITE7YSsrO1xuICAgICAgfXJldHVybiAhMDtcbiAgICB9LCByZWNvZ25pemU6IGZ1bmN0aW9uIChhKSB7XG4gICAgICB2YXIgYiA9IG4oe30sIGEpO3JldHVybiByKHRoaXMub3B0aW9ucy5lbmFibGUsIFt0aGlzLCBiXSkgPyAodGhpcy5zdGF0ZSAmIChWYiB8IFdiIHwgWGIpICYmICh0aGlzLnN0YXRlID0gUmIpLCB0aGlzLnN0YXRlID0gdGhpcy5wcm9jZXNzKGIpLCB0aGlzLnN0YXRlICYgKFNiIHwgVGIgfCBVYiB8IFdiKSAmJiB0aGlzLnRyeUVtaXQoYiksIHZvaWQgMCkgOiAodGhpcy5yZXNldCgpLCB0aGlzLnN0YXRlID0gWGIsIHZvaWQgMCk7XG4gICAgfSwgcHJvY2VzczogZnVuY3Rpb24gKCkge30sIGdldFRvdWNoQWN0aW9uOiBmdW5jdGlvbiAoKSB7fSwgcmVzZXQ6IGZ1bmN0aW9uICgpIHt9IH0sIHAoYWMsIFliLCB7IGRlZmF1bHRzOiB7IHBvaW50ZXJzOiAxIH0sIGF0dHJUZXN0OiBmdW5jdGlvbiAoYSkge1xuICAgICAgdmFyIGIgPSB0aGlzLm9wdGlvbnMucG9pbnRlcnM7cmV0dXJuIDAgPT09IGIgfHwgYS5wb2ludGVycy5sZW5ndGggPT09IGI7XG4gICAgfSwgcHJvY2VzczogZnVuY3Rpb24gKGEpIHtcbiAgICAgIHZhciBiID0gdGhpcy5zdGF0ZSxcbiAgICAgICAgICBjID0gYS5ldmVudFR5cGUsXG4gICAgICAgICAgZCA9IGIgJiAoU2IgfCBUYiksXG4gICAgICAgICAgZSA9IHRoaXMuYXR0clRlc3QoYSk7cmV0dXJuIGQgJiYgKGMgJiBSIHx8ICFlKSA/IGIgfCBXYiA6IGQgfHwgZSA/IGMgJiBRID8gYiB8IFViIDogYiAmIFNiID8gYiB8IFRiIDogU2IgOiBYYjtcbiAgICB9IH0pLCBwKGJjLCBhYywgeyBkZWZhdWx0czogeyBldmVudDogXCJwYW5cIiwgdGhyZXNob2xkOiAxMCwgcG9pbnRlcnM6IDEsIGRpcmVjdGlvbjogWiB9LCBnZXRUb3VjaEFjdGlvbjogZnVuY3Rpb24gKCkge1xuICAgICAgdmFyIGEgPSB0aGlzLm9wdGlvbnMuZGlyZWN0aW9uLFxuICAgICAgICAgIGIgPSBbXTtyZXR1cm4gYSAmIFggJiYgYi5wdXNoKE9iKSwgYSAmIFkgJiYgYi5wdXNoKE5iKSwgYjtcbiAgICB9LCBkaXJlY3Rpb25UZXN0OiBmdW5jdGlvbiAoYSkge1xuICAgICAgdmFyIGIgPSB0aGlzLm9wdGlvbnMsXG4gICAgICAgICAgYyA9ICEwLFxuICAgICAgICAgIGQgPSBhLmRpc3RhbmNlLFxuICAgICAgICAgIGUgPSBhLmRpcmVjdGlvbixcbiAgICAgICAgICBmID0gYS5kZWx0YVgsXG4gICAgICAgICAgZyA9IGEuZGVsdGFZO3JldHVybiBlICYgYi5kaXJlY3Rpb24gfHwgKGIuZGlyZWN0aW9uICYgWCA/IChlID0gMCA9PT0gZiA/IFMgOiAwID4gZiA/IFQgOiBVLCBjID0gZiAhPSB0aGlzLnBYLCBkID0gTWF0aC5hYnMoYS5kZWx0YVgpKSA6IChlID0gMCA9PT0gZyA/IFMgOiAwID4gZyA/IFYgOiBXLCBjID0gZyAhPSB0aGlzLnBZLCBkID0gTWF0aC5hYnMoYS5kZWx0YVkpKSksIGEuZGlyZWN0aW9uID0gZSwgYyAmJiBkID4gYi50aHJlc2hvbGQgJiYgZSAmIGIuZGlyZWN0aW9uO1xuICAgIH0sIGF0dHJUZXN0OiBmdW5jdGlvbiAoYSkge1xuICAgICAgcmV0dXJuIGFjLnByb3RvdHlwZS5hdHRyVGVzdC5jYWxsKHRoaXMsIGEpICYmICh0aGlzLnN0YXRlICYgU2IgfHwgISh0aGlzLnN0YXRlICYgU2IpICYmIHRoaXMuZGlyZWN0aW9uVGVzdChhKSk7XG4gICAgfSwgZW1pdDogZnVuY3Rpb24gKGEpIHtcbiAgICAgIHRoaXMucFggPSBhLmRlbHRhWCwgdGhpcy5wWSA9IGEuZGVsdGFZO3ZhciBiID0gJGIoYS5kaXJlY3Rpb24pO2IgJiYgdGhpcy5tYW5hZ2VyLmVtaXQodGhpcy5vcHRpb25zLmV2ZW50ICsgYiwgYSksIHRoaXMuX3N1cGVyLmVtaXQuY2FsbCh0aGlzLCBhKTtcbiAgICB9IH0pLCBwKGNjLCBhYywgeyBkZWZhdWx0czogeyBldmVudDogXCJwaW5jaFwiLCB0aHJlc2hvbGQ6IDAsIHBvaW50ZXJzOiAyIH0sIGdldFRvdWNoQWN0aW9uOiBmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gW01iXTtcbiAgICB9LCBhdHRyVGVzdDogZnVuY3Rpb24gKGEpIHtcbiAgICAgIHJldHVybiB0aGlzLl9zdXBlci5hdHRyVGVzdC5jYWxsKHRoaXMsIGEpICYmIChNYXRoLmFicyhhLnNjYWxlIC0gMSkgPiB0aGlzLm9wdGlvbnMudGhyZXNob2xkIHx8IHRoaXMuc3RhdGUgJiBTYik7XG4gICAgfSwgZW1pdDogZnVuY3Rpb24gKGEpIHtcbiAgICAgIGlmICh0aGlzLl9zdXBlci5lbWl0LmNhbGwodGhpcywgYSksIDEgIT09IGEuc2NhbGUpIHtcbiAgICAgICAgdmFyIGIgPSBhLnNjYWxlIDwgMSA/IFwiaW5cIiA6IFwib3V0XCI7dGhpcy5tYW5hZ2VyLmVtaXQodGhpcy5vcHRpb25zLmV2ZW50ICsgYiwgYSk7XG4gICAgICB9XG4gICAgfSB9KSwgcChkYywgWWIsIHsgZGVmYXVsdHM6IHsgZXZlbnQ6IFwicHJlc3NcIiwgcG9pbnRlcnM6IDEsIHRpbWU6IDUwMCwgdGhyZXNob2xkOiA1IH0sIGdldFRvdWNoQWN0aW9uOiBmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gW0tiXTtcbiAgICB9LCBwcm9jZXNzOiBmdW5jdGlvbiAoYSkge1xuICAgICAgdmFyIGIgPSB0aGlzLm9wdGlvbnMsXG4gICAgICAgICAgYyA9IGEucG9pbnRlcnMubGVuZ3RoID09PSBiLnBvaW50ZXJzLFxuICAgICAgICAgIGQgPSBhLmRpc3RhbmNlIDwgYi50aHJlc2hvbGQsXG4gICAgICAgICAgZSA9IGEuZGVsdGFUaW1lID4gYi50aW1lO2lmICh0aGlzLl9pbnB1dCA9IGEsICFkIHx8ICFjIHx8IGEuZXZlbnRUeXBlICYgKFEgfCBSKSAmJiAhZSkgdGhpcy5yZXNldCgpO2Vsc2UgaWYgKGEuZXZlbnRUeXBlICYgTykgdGhpcy5yZXNldCgpLCB0aGlzLl90aW1lciA9IGsoZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLnN0YXRlID0gVmIsIHRoaXMudHJ5RW1pdCgpO1xuICAgICAgfSwgYi50aW1lLCB0aGlzKTtlbHNlIGlmIChhLmV2ZW50VHlwZSAmIFEpIHJldHVybiBWYjtyZXR1cm4gWGI7XG4gICAgfSwgcmVzZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgIGNsZWFyVGltZW91dCh0aGlzLl90aW1lcik7XG4gICAgfSwgZW1pdDogZnVuY3Rpb24gKGEpIHtcbiAgICAgIHRoaXMuc3RhdGUgPT09IFZiICYmIChhICYmIGEuZXZlbnRUeXBlICYgUSA/IHRoaXMubWFuYWdlci5lbWl0KHRoaXMub3B0aW9ucy5ldmVudCArIFwidXBcIiwgYSkgOiAodGhpcy5faW5wdXQudGltZVN0YW1wID0gaigpLCB0aGlzLm1hbmFnZXIuZW1pdCh0aGlzLm9wdGlvbnMuZXZlbnQsIHRoaXMuX2lucHV0KSkpO1xuICAgIH0gfSksIHAoZWMsIGFjLCB7IGRlZmF1bHRzOiB7IGV2ZW50OiBcInJvdGF0ZVwiLCB0aHJlc2hvbGQ6IDAsIHBvaW50ZXJzOiAyIH0sIGdldFRvdWNoQWN0aW9uOiBmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gW01iXTtcbiAgICB9LCBhdHRyVGVzdDogZnVuY3Rpb24gKGEpIHtcbiAgICAgIHJldHVybiB0aGlzLl9zdXBlci5hdHRyVGVzdC5jYWxsKHRoaXMsIGEpICYmIChNYXRoLmFicyhhLnJvdGF0aW9uKSA+IHRoaXMub3B0aW9ucy50aHJlc2hvbGQgfHwgdGhpcy5zdGF0ZSAmIFNiKTtcbiAgICB9IH0pLCBwKGZjLCBhYywgeyBkZWZhdWx0czogeyBldmVudDogXCJzd2lwZVwiLCB0aHJlc2hvbGQ6IDEwLCB2ZWxvY2l0eTogLjY1LCBkaXJlY3Rpb246IFggfCBZLCBwb2ludGVyczogMSB9LCBnZXRUb3VjaEFjdGlvbjogZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIGJjLnByb3RvdHlwZS5nZXRUb3VjaEFjdGlvbi5jYWxsKHRoaXMpO1xuICAgIH0sIGF0dHJUZXN0OiBmdW5jdGlvbiAoYSkge1xuICAgICAgdmFyIGMsXG4gICAgICAgICAgYiA9IHRoaXMub3B0aW9ucy5kaXJlY3Rpb247cmV0dXJuIGIgJiAoWCB8IFkpID8gYyA9IGEudmVsb2NpdHkgOiBiICYgWCA/IGMgPSBhLnZlbG9jaXR5WCA6IGIgJiBZICYmIChjID0gYS52ZWxvY2l0eVkpLCB0aGlzLl9zdXBlci5hdHRyVGVzdC5jYWxsKHRoaXMsIGEpICYmIGIgJiBhLmRpcmVjdGlvbiAmJiBhLmRpc3RhbmNlID4gdGhpcy5vcHRpb25zLnRocmVzaG9sZCAmJiBpKGMpID4gdGhpcy5vcHRpb25zLnZlbG9jaXR5ICYmIGEuZXZlbnRUeXBlICYgUTtcbiAgICB9LCBlbWl0OiBmdW5jdGlvbiAoYSkge1xuICAgICAgdmFyIGIgPSAkYihhLmRpcmVjdGlvbik7YiAmJiB0aGlzLm1hbmFnZXIuZW1pdCh0aGlzLm9wdGlvbnMuZXZlbnQgKyBiLCBhKSwgdGhpcy5tYW5hZ2VyLmVtaXQodGhpcy5vcHRpb25zLmV2ZW50LCBhKTtcbiAgICB9IH0pLCBwKGdjLCBZYiwgeyBkZWZhdWx0czogeyBldmVudDogXCJ0YXBcIiwgcG9pbnRlcnM6IDEsIHRhcHM6IDEsIGludGVydmFsOiAzMDAsIHRpbWU6IDI1MCwgdGhyZXNob2xkOiAyLCBwb3NUaHJlc2hvbGQ6IDEwIH0sIGdldFRvdWNoQWN0aW9uOiBmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gW0xiXTtcbiAgICB9LCBwcm9jZXNzOiBmdW5jdGlvbiAoYSkge1xuICAgICAgdmFyIGIgPSB0aGlzLm9wdGlvbnMsXG4gICAgICAgICAgYyA9IGEucG9pbnRlcnMubGVuZ3RoID09PSBiLnBvaW50ZXJzLFxuICAgICAgICAgIGQgPSBhLmRpc3RhbmNlIDwgYi50aHJlc2hvbGQsXG4gICAgICAgICAgZSA9IGEuZGVsdGFUaW1lIDwgYi50aW1lO2lmICh0aGlzLnJlc2V0KCksIGEuZXZlbnRUeXBlICYgTyAmJiAwID09PSB0aGlzLmNvdW50KSByZXR1cm4gdGhpcy5mYWlsVGltZW91dCgpO2lmIChkICYmIGUgJiYgYykge1xuICAgICAgICBpZiAoYS5ldmVudFR5cGUgIT0gUSkgcmV0dXJuIHRoaXMuZmFpbFRpbWVvdXQoKTt2YXIgZiA9IHRoaXMucFRpbWUgPyBhLnRpbWVTdGFtcCAtIHRoaXMucFRpbWUgPCBiLmludGVydmFsIDogITAsXG4gICAgICAgICAgICBnID0gIXRoaXMucENlbnRlciB8fCBrYih0aGlzLnBDZW50ZXIsIGEuY2VudGVyKSA8IGIucG9zVGhyZXNob2xkO3RoaXMucFRpbWUgPSBhLnRpbWVTdGFtcCwgdGhpcy5wQ2VudGVyID0gYS5jZW50ZXIsIGcgJiYgZiA/IHRoaXMuY291bnQgKz0gMSA6IHRoaXMuY291bnQgPSAxLCB0aGlzLl9pbnB1dCA9IGE7dmFyIGggPSB0aGlzLmNvdW50ICUgYi50YXBzO2lmICgwID09PSBoKSByZXR1cm4gdGhpcy5oYXNSZXF1aXJlRmFpbHVyZXMoKSA/ICh0aGlzLl90aW1lciA9IGsoZnVuY3Rpb24gKCkge1xuICAgICAgICAgIHRoaXMuc3RhdGUgPSBWYiwgdGhpcy50cnlFbWl0KCk7XG4gICAgICAgIH0sIGIuaW50ZXJ2YWwsIHRoaXMpLCBTYikgOiBWYjtcbiAgICAgIH1yZXR1cm4gWGI7XG4gICAgfSwgZmFpbFRpbWVvdXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiB0aGlzLl90aW1lciA9IGsoZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLnN0YXRlID0gWGI7XG4gICAgICB9LCB0aGlzLm9wdGlvbnMuaW50ZXJ2YWwsIHRoaXMpLCBYYjtcbiAgICB9LCByZXNldDogZnVuY3Rpb24gKCkge1xuICAgICAgY2xlYXJUaW1lb3V0KHRoaXMuX3RpbWVyKTtcbiAgICB9LCBlbWl0OiBmdW5jdGlvbiAoKSB7XG4gICAgICB0aGlzLnN0YXRlID09IFZiICYmICh0aGlzLl9pbnB1dC50YXBDb3VudCA9IHRoaXMuY291bnQsIHRoaXMubWFuYWdlci5lbWl0KHRoaXMub3B0aW9ucy5ldmVudCwgdGhpcy5faW5wdXQpKTtcbiAgICB9IH0pLCBoYy5WRVJTSU9OID0gXCIyLjAuNFwiLCBoYy5kZWZhdWx0cyA9IHsgZG9tRXZlbnRzOiAhMSwgdG91Y2hBY3Rpb246IEpiLCBlbmFibGU6ICEwLCBpbnB1dFRhcmdldDogbnVsbCwgaW5wdXRDbGFzczogbnVsbCwgcHJlc2V0OiBbW2VjLCB7IGVuYWJsZTogITEgfV0sIFtjYywgeyBlbmFibGU6ICExIH0sIFtcInJvdGF0ZVwiXV0sIFtmYywgeyBkaXJlY3Rpb246IFggfV0sIFtiYywgeyBkaXJlY3Rpb246IFggfSwgW1wic3dpcGVcIl1dLCBbZ2NdLCBbZ2MsIHsgZXZlbnQ6IFwiZG91YmxldGFwXCIsIHRhcHM6IDIgfSwgW1widGFwXCJdXSwgW2RjXV0sIGNzc1Byb3BzOiB7IHVzZXJTZWxlY3Q6IFwiZGVmYXVsdFwiLCB0b3VjaFNlbGVjdDogXCJub25lXCIsIHRvdWNoQ2FsbG91dDogXCJub25lXCIsIGNvbnRlbnRab29taW5nOiBcIm5vbmVcIiwgdXNlckRyYWc6IFwibm9uZVwiLCB0YXBIaWdobGlnaHRDb2xvcjogXCJyZ2JhKDAsMCwwLDApXCIgfSB9O3ZhciBpYyA9IDEsXG4gICAgICBqYyA9IDI7a2MucHJvdG90eXBlID0geyBzZXQ6IGZ1bmN0aW9uIChhKSB7XG4gICAgICByZXR1cm4gbih0aGlzLm9wdGlvbnMsIGEpLCBhLnRvdWNoQWN0aW9uICYmIHRoaXMudG91Y2hBY3Rpb24udXBkYXRlKCksIGEuaW5wdXRUYXJnZXQgJiYgKHRoaXMuaW5wdXQuZGVzdHJveSgpLCB0aGlzLmlucHV0LnRhcmdldCA9IGEuaW5wdXRUYXJnZXQsIHRoaXMuaW5wdXQuaW5pdCgpKSwgdGhpcztcbiAgICB9LCBzdG9wOiBmdW5jdGlvbiAoYSkge1xuICAgICAgdGhpcy5zZXNzaW9uLnN0b3BwZWQgPSBhID8gamMgOiBpYztcbiAgICB9LCByZWNvZ25pemU6IGZ1bmN0aW9uIChhKSB7XG4gICAgICB2YXIgYiA9IHRoaXMuc2Vzc2lvbjtpZiAoIWIuc3RvcHBlZCkge1xuICAgICAgICB0aGlzLnRvdWNoQWN0aW9uLnByZXZlbnREZWZhdWx0cyhhKTt2YXIgYyxcbiAgICAgICAgICAgIGQgPSB0aGlzLnJlY29nbml6ZXJzLFxuICAgICAgICAgICAgZSA9IGIuY3VyUmVjb2duaXplcjsoIWUgfHwgZSAmJiBlLnN0YXRlICYgVmIpICYmIChlID0gYi5jdXJSZWNvZ25pemVyID0gbnVsbCk7Zm9yICh2YXIgZiA9IDA7IGYgPCBkLmxlbmd0aDspIHtcbiAgICAgICAgICBjID0gZFtmXSwgYi5zdG9wcGVkID09PSBqYyB8fCBlICYmIGMgIT0gZSAmJiAhYy5jYW5SZWNvZ25pemVXaXRoKGUpID8gYy5yZXNldCgpIDogYy5yZWNvZ25pemUoYSksICFlICYmIGMuc3RhdGUgJiAoU2IgfCBUYiB8IFViKSAmJiAoZSA9IGIuY3VyUmVjb2duaXplciA9IGMpLCBmKys7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LCBnZXQ6IGZ1bmN0aW9uIChhKSB7XG4gICAgICBpZiAoYSBpbnN0YW5jZW9mIFliKSByZXR1cm4gYTtmb3IgKHZhciBiID0gdGhpcy5yZWNvZ25pemVycywgYyA9IDA7IGMgPCBiLmxlbmd0aDsgYysrKSB7XG4gICAgICAgIGlmIChiW2NdLm9wdGlvbnMuZXZlbnQgPT0gYSkgcmV0dXJuIGJbY107XG4gICAgICB9cmV0dXJuIG51bGw7XG4gICAgfSwgYWRkOiBmdW5jdGlvbiAoYSkge1xuICAgICAgaWYgKGwoYSwgXCJhZGRcIiwgdGhpcykpIHJldHVybiB0aGlzO3ZhciBiID0gdGhpcy5nZXQoYS5vcHRpb25zLmV2ZW50KTtyZXR1cm4gYiAmJiB0aGlzLnJlbW92ZShiKSwgdGhpcy5yZWNvZ25pemVycy5wdXNoKGEpLCBhLm1hbmFnZXIgPSB0aGlzLCB0aGlzLnRvdWNoQWN0aW9uLnVwZGF0ZSgpLCBhO1xuICAgIH0sIHJlbW92ZTogZnVuY3Rpb24gKGEpIHtcbiAgICAgIGlmIChsKGEsIFwicmVtb3ZlXCIsIHRoaXMpKSByZXR1cm4gdGhpczt2YXIgYiA9IHRoaXMucmVjb2duaXplcnM7cmV0dXJuIGEgPSB0aGlzLmdldChhKSwgYi5zcGxpY2UoeShiLCBhKSwgMSksIHRoaXMudG91Y2hBY3Rpb24udXBkYXRlKCksIHRoaXM7XG4gICAgfSwgb246IGZ1bmN0aW9uIChhLCBiKSB7XG4gICAgICB2YXIgYyA9IHRoaXMuaGFuZGxlcnM7cmV0dXJuIG0oeChhKSwgZnVuY3Rpb24gKGEpIHtcbiAgICAgICAgY1thXSA9IGNbYV0gfHwgW10sIGNbYV0ucHVzaChiKTtcbiAgICAgIH0pLCB0aGlzO1xuICAgIH0sIG9mZjogZnVuY3Rpb24gKGEsIGIpIHtcbiAgICAgIHZhciBjID0gdGhpcy5oYW5kbGVycztyZXR1cm4gbSh4KGEpLCBmdW5jdGlvbiAoYSkge1xuICAgICAgICBiID8gY1thXS5zcGxpY2UoeShjW2FdLCBiKSwgMSkgOiBkZWxldGUgY1thXTtcbiAgICAgIH0pLCB0aGlzO1xuICAgIH0sIGVtaXQ6IGZ1bmN0aW9uIChhLCBiKSB7XG4gICAgICB0aGlzLm9wdGlvbnMuZG9tRXZlbnRzICYmIG1jKGEsIGIpO3ZhciBjID0gdGhpcy5oYW5kbGVyc1thXSAmJiB0aGlzLmhhbmRsZXJzW2FdLnNsaWNlKCk7aWYgKGMgJiYgYy5sZW5ndGgpIHtcbiAgICAgICAgYi50eXBlID0gYSwgYi5wcmV2ZW50RGVmYXVsdCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICBiLnNyY0V2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIH07Zm9yICh2YXIgZCA9IDA7IGQgPCBjLmxlbmd0aDspIHtcbiAgICAgICAgICBjW2RdKGIpLCBkKys7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LCBkZXN0cm95OiBmdW5jdGlvbiAoKSB7XG4gICAgICB0aGlzLmVsZW1lbnQgJiYgbGModGhpcywgITEpLCB0aGlzLmhhbmRsZXJzID0ge30sIHRoaXMuc2Vzc2lvbiA9IHt9LCB0aGlzLmlucHV0LmRlc3Ryb3koKSwgdGhpcy5lbGVtZW50ID0gbnVsbDtcbiAgICB9IH0sIG4oaGMsIHsgSU5QVVRfU1RBUlQ6IE8sIElOUFVUX01PVkU6IFAsIElOUFVUX0VORDogUSwgSU5QVVRfQ0FOQ0VMOiBSLCBTVEFURV9QT1NTSUJMRTogUmIsIFNUQVRFX0JFR0FOOiBTYiwgU1RBVEVfQ0hBTkdFRDogVGIsIFNUQVRFX0VOREVEOiBVYiwgU1RBVEVfUkVDT0dOSVpFRDogVmIsIFNUQVRFX0NBTkNFTExFRDogV2IsIFNUQVRFX0ZBSUxFRDogWGIsIERJUkVDVElPTl9OT05FOiBTLCBESVJFQ1RJT05fTEVGVDogVCwgRElSRUNUSU9OX1JJR0hUOiBVLCBESVJFQ1RJT05fVVA6IFYsIERJUkVDVElPTl9ET1dOOiBXLCBESVJFQ1RJT05fSE9SSVpPTlRBTDogWCwgRElSRUNUSU9OX1ZFUlRJQ0FMOiBZLCBESVJFQ1RJT05fQUxMOiBaLCBNYW5hZ2VyOiBrYywgSW5wdXQ6IGFiLCBUb3VjaEFjdGlvbjogUGIsIFRvdWNoSW5wdXQ6IEViLCBNb3VzZUlucHV0OiByYiwgUG9pbnRlckV2ZW50SW5wdXQ6IHdiLCBUb3VjaE1vdXNlSW5wdXQ6IEdiLCBTaW5nbGVUb3VjaElucHV0OiBBYiwgUmVjb2duaXplcjogWWIsIEF0dHJSZWNvZ25pemVyOiBhYywgVGFwOiBnYywgUGFuOiBiYywgU3dpcGU6IGZjLCBQaW5jaDogY2MsIFJvdGF0ZTogZWMsIFByZXNzOiBkYywgb246IHQsIG9mZjogdSwgZWFjaDogbSwgbWVyZ2U6IG8sIGV4dGVuZDogbiwgaW5oZXJpdDogcCwgYmluZEZuOiBxLCBwcmVmaXhlZDogQiB9KSwgdHlwZW9mIGRlZmluZSA9PSBnICYmIGRlZmluZS5hbWQgPyBkZWZpbmUoZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBoYztcbiAgfSkgOiBcInVuZGVmaW5lZFwiICE9IHR5cGVvZiBtb2R1bGUgJiYgbW9kdWxlLmV4cG9ydHMgPyBtb2R1bGUuZXhwb3J0cyA9IGhjIDogYVtjXSA9IGhjO1xufSh3aW5kb3csIGRvY3VtZW50LCBcIkhhbW1lclwiKTs7KGZ1bmN0aW9uIChmYWN0b3J5KSB7XG4gIGlmICh0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpIHtcbiAgICBkZWZpbmUoWydqcXVlcnknLCAnaGFtbWVyanMnXSwgZmFjdG9yeSk7XG4gIH0gZWxzZSBpZiAodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKSB7XG4gICAgZmFjdG9yeShyZXF1aXJlKCdqcXVlcnknKSwgcmVxdWlyZSgnaGFtbWVyanMnKSk7XG4gIH0gZWxzZSB7XG4gICAgZmFjdG9yeShqUXVlcnksIEhhbW1lcik7XG4gIH1cbn0pKGZ1bmN0aW9uICgkLCBIYW1tZXIpIHtcbiAgZnVuY3Rpb24gaGFtbWVyaWZ5KGVsLCBvcHRpb25zKSB7XG4gICAgdmFyICRlbCA9ICQoZWwpO1xuICAgIGlmICghJGVsLmRhdGEoXCJoYW1tZXJcIikpIHtcbiAgICAgICRlbC5kYXRhKFwiaGFtbWVyXCIsIG5ldyBIYW1tZXIoJGVsWzBdLCBvcHRpb25zKSk7XG4gICAgfVxuICB9XG5cbiAgJC5mbi5oYW1tZXIgPSBmdW5jdGlvbiAob3B0aW9ucykge1xuICAgIHJldHVybiB0aGlzLmVhY2goZnVuY3Rpb24gKCkge1xuICAgICAgaGFtbWVyaWZ5KHRoaXMsIG9wdGlvbnMpO1xuICAgIH0pO1xuICB9O1xuXG4gIC8vIGV4dGVuZCB0aGUgZW1pdCBtZXRob2QgdG8gYWxzbyB0cmlnZ2VyIGpRdWVyeSBldmVudHNcbiAgSGFtbWVyLk1hbmFnZXIucHJvdG90eXBlLmVtaXQgPSBmdW5jdGlvbiAob3JpZ2luYWxFbWl0KSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uICh0eXBlLCBkYXRhKSB7XG4gICAgICBvcmlnaW5hbEVtaXQuY2FsbCh0aGlzLCB0eXBlLCBkYXRhKTtcbiAgICAgICQodGhpcy5lbGVtZW50KS50cmlnZ2VyKHtcbiAgICAgICAgdHlwZTogdHlwZSxcbiAgICAgICAgZ2VzdHVyZTogZGF0YVxuICAgICAgfSk7XG4gICAgfTtcbiAgfShIYW1tZXIuTWFuYWdlci5wcm90b3R5cGUuZW1pdCk7XG59KTtcbjsgLy8gUmVxdWlyZWQgZm9yIE1ldGVvciBwYWNrYWdlLCB0aGUgdXNlIG9mIHdpbmRvdyBwcmV2ZW50cyBleHBvcnQgYnkgTWV0ZW9yXG4oZnVuY3Rpb24gKHdpbmRvdykge1xuICBpZiAod2luZG93LlBhY2thZ2UpIHtcbiAgICBNYXRlcmlhbGl6ZSA9IHt9O1xuICB9IGVsc2Uge1xuICAgIHdpbmRvdy5NYXRlcmlhbGl6ZSA9IHt9O1xuICB9XG59KSh3aW5kb3cpO1xuXG5pZiAodHlwZW9mIGV4cG9ydHMgIT09ICd1bmRlZmluZWQnICYmICFleHBvcnRzLm5vZGVUeXBlKSB7XG4gIGlmICh0eXBlb2YgbW9kdWxlICE9PSAndW5kZWZpbmVkJyAmJiAhbW9kdWxlLm5vZGVUeXBlICYmIG1vZHVsZS5leHBvcnRzKSB7XG4gICAgZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gTWF0ZXJpYWxpemU7XG4gIH1cbiAgZXhwb3J0cy5kZWZhdWx0ID0gTWF0ZXJpYWxpemU7XG59XG5cbi8qXG4gKiByYWYuanNcbiAqIGh0dHBzOi8vZ2l0aHViLmNvbS9uZ3J5bWFuL3JhZi5qc1xuICpcbiAqIG9yaWdpbmFsIHJlcXVlc3RBbmltYXRpb25GcmFtZSBwb2x5ZmlsbCBieSBFcmlrIE3DtmxsZXJcbiAqIGluc3BpcmVkIGZyb20gcGF1bF9pcmlzaCBnaXN0IGFuZCBwb3N0XG4gKlxuICogQ29weXJpZ2h0IChjKSAyMDEzIG5ncnltYW5cbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZS5cbiAqL1xuKGZ1bmN0aW9uICh3aW5kb3cpIHtcbiAgdmFyIGxhc3RUaW1lID0gMCxcbiAgICAgIHZlbmRvcnMgPSBbJ3dlYmtpdCcsICdtb3onXSxcbiAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSA9IHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUsXG4gICAgICBjYW5jZWxBbmltYXRpb25GcmFtZSA9IHdpbmRvdy5jYW5jZWxBbmltYXRpb25GcmFtZSxcbiAgICAgIGkgPSB2ZW5kb3JzLmxlbmd0aDtcblxuICAvLyB0cnkgdG8gdW4tcHJlZml4IGV4aXN0aW5nIHJhZlxuICB3aGlsZSAoLS1pID49IDAgJiYgIXJlcXVlc3RBbmltYXRpb25GcmFtZSkge1xuICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSA9IHdpbmRvd1t2ZW5kb3JzW2ldICsgJ1JlcXVlc3RBbmltYXRpb25GcmFtZSddO1xuICAgIGNhbmNlbEFuaW1hdGlvbkZyYW1lID0gd2luZG93W3ZlbmRvcnNbaV0gKyAnQ2FuY2VsUmVxdWVzdEFuaW1hdGlvbkZyYW1lJ107XG4gIH1cblxuICAvLyBwb2x5ZmlsbCB3aXRoIHNldFRpbWVvdXQgZmFsbGJhY2tcbiAgLy8gaGVhdmlseSBpbnNwaXJlZCBmcm9tIEBkYXJpdXMgZ2lzdCBtb2Q6IGh0dHBzOi8vZ2lzdC5naXRodWIuY29tL3BhdWxpcmlzaC8xNTc5NjcxI2NvbW1lbnQtODM3OTQ1XG4gIGlmICghcmVxdWVzdEFuaW1hdGlvbkZyYW1lIHx8ICFjYW5jZWxBbmltYXRpb25GcmFtZSkge1xuICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSA9IGZ1bmN0aW9uIChjYWxsYmFjaykge1xuICAgICAgdmFyIG5vdyA9ICtEYXRlLm5vdygpLFxuICAgICAgICAgIG5leHRUaW1lID0gTWF0aC5tYXgobGFzdFRpbWUgKyAxNiwgbm93KTtcbiAgICAgIHJldHVybiBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgY2FsbGJhY2sobGFzdFRpbWUgPSBuZXh0VGltZSk7XG4gICAgICB9LCBuZXh0VGltZSAtIG5vdyk7XG4gICAgfTtcblxuICAgIGNhbmNlbEFuaW1hdGlvbkZyYW1lID0gY2xlYXJUaW1lb3V0O1xuICB9XG5cbiAgLy8gZXhwb3J0IHRvIHdpbmRvd1xuICB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lID0gcmVxdWVzdEFuaW1hdGlvbkZyYW1lO1xuICB3aW5kb3cuY2FuY2VsQW5pbWF0aW9uRnJhbWUgPSBjYW5jZWxBbmltYXRpb25GcmFtZTtcbn0pKHdpbmRvdyk7XG5cbi8qKlxuICogR2VuZXJhdGUgYXBwcm94aW1hdGVkIHNlbGVjdG9yIHN0cmluZyBmb3IgYSBqUXVlcnkgb2JqZWN0XG4gKiBAcGFyYW0ge2pRdWVyeX0gb2JqICBqUXVlcnkgb2JqZWN0IHRvIGJlIHBhcnNlZFxuICogQHJldHVybnMge3N0cmluZ31cbiAqL1xuTWF0ZXJpYWxpemUub2JqZWN0U2VsZWN0b3JTdHJpbmcgPSBmdW5jdGlvbiAob2JqKSB7XG4gIHZhciB0YWdTdHIgPSBvYmoucHJvcCgndGFnTmFtZScpIHx8ICcnO1xuICB2YXIgaWRTdHIgPSBvYmouYXR0cignaWQnKSB8fCAnJztcbiAgdmFyIGNsYXNzU3RyID0gb2JqLmF0dHIoJ2NsYXNzJykgfHwgJyc7XG4gIHJldHVybiAodGFnU3RyICsgaWRTdHIgKyBjbGFzc1N0cikucmVwbGFjZSgvXFxzL2csICcnKTtcbn07XG5cbi8vIFVuaXF1ZSBSYW5kb20gSURcbk1hdGVyaWFsaXplLmd1aWQgPSBmdW5jdGlvbiAoKSB7XG4gIGZ1bmN0aW9uIHM0KCkge1xuICAgIHJldHVybiBNYXRoLmZsb29yKCgxICsgTWF0aC5yYW5kb20oKSkgKiAweDEwMDAwKS50b1N0cmluZygxNikuc3Vic3RyaW5nKDEpO1xuICB9XG4gIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIHM0KCkgKyBzNCgpICsgJy0nICsgczQoKSArICctJyArIHM0KCkgKyAnLScgKyBzNCgpICsgJy0nICsgczQoKSArIHM0KCkgKyBzNCgpO1xuICB9O1xufSgpO1xuXG4vKipcbiAqIEVzY2FwZXMgaGFzaCBmcm9tIHNwZWNpYWwgY2hhcmFjdGVyc1xuICogQHBhcmFtIHtzdHJpbmd9IGhhc2ggIFN0cmluZyByZXR1cm5lZCBmcm9tIHRoaXMuaGFzaFxuICogQHJldHVybnMge3N0cmluZ31cbiAqL1xuTWF0ZXJpYWxpemUuZXNjYXBlSGFzaCA9IGZ1bmN0aW9uIChoYXNoKSB7XG4gIHJldHVybiBoYXNoLnJlcGxhY2UoLyg6fFxcLnxcXFt8XFxdfCx8PSkvZywgXCJcXFxcJDFcIik7XG59O1xuXG5NYXRlcmlhbGl6ZS5lbGVtZW50T3JQYXJlbnRJc0ZpeGVkID0gZnVuY3Rpb24gKGVsZW1lbnQpIHtcbiAgdmFyICRlbGVtZW50ID0gJChlbGVtZW50KTtcbiAgdmFyICRjaGVja0VsZW1lbnRzID0gJGVsZW1lbnQuYWRkKCRlbGVtZW50LnBhcmVudHMoKSk7XG4gIHZhciBpc0ZpeGVkID0gZmFsc2U7XG4gICRjaGVja0VsZW1lbnRzLmVhY2goZnVuY3Rpb24gKCkge1xuICAgIGlmICgkKHRoaXMpLmNzcyhcInBvc2l0aW9uXCIpID09PSBcImZpeGVkXCIpIHtcbiAgICAgIGlzRml4ZWQgPSB0cnVlO1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfSk7XG4gIHJldHVybiBpc0ZpeGVkO1xufTtcblxuLyoqXG4gKiBHZXQgdGltZSBpbiBtc1xuICogQGxpY2Vuc2UgaHR0cHM6Ly9yYXcuZ2l0aHViLmNvbS9qYXNoa2VuYXMvdW5kZXJzY29yZS9tYXN0ZXIvTElDRU5TRVxuICogQHR5cGUge2Z1bmN0aW9ufVxuICogQHJldHVybiB7bnVtYmVyfVxuICovXG52YXIgZ2V0VGltZSA9IERhdGUubm93IHx8IGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xufTtcblxuLyoqXG4gKiBSZXR1cm5zIGEgZnVuY3Rpb24sIHRoYXQsIHdoZW4gaW52b2tlZCwgd2lsbCBvbmx5IGJlIHRyaWdnZXJlZCBhdCBtb3N0IG9uY2VcbiAqIGR1cmluZyBhIGdpdmVuIHdpbmRvdyBvZiB0aW1lLiBOb3JtYWxseSwgdGhlIHRocm90dGxlZCBmdW5jdGlvbiB3aWxsIHJ1blxuICogYXMgbXVjaCBhcyBpdCBjYW4sIHdpdGhvdXQgZXZlciBnb2luZyBtb3JlIHRoYW4gb25jZSBwZXIgYHdhaXRgIGR1cmF0aW9uO1xuICogYnV0IGlmIHlvdSdkIGxpa2UgdG8gZGlzYWJsZSB0aGUgZXhlY3V0aW9uIG9uIHRoZSBsZWFkaW5nIGVkZ2UsIHBhc3NcbiAqIGB7bGVhZGluZzogZmFsc2V9YC4gVG8gZGlzYWJsZSBleGVjdXRpb24gb24gdGhlIHRyYWlsaW5nIGVkZ2UsIGRpdHRvLlxuICogQGxpY2Vuc2UgaHR0cHM6Ly9yYXcuZ2l0aHViLmNvbS9qYXNoa2VuYXMvdW5kZXJzY29yZS9tYXN0ZXIvTElDRU5TRVxuICogQHBhcmFtIHtmdW5jdGlvbn0gZnVuY1xuICogQHBhcmFtIHtudW1iZXJ9IHdhaXRcbiAqIEBwYXJhbSB7T2JqZWN0PX0gb3B0aW9uc1xuICogQHJldHVybnMge0Z1bmN0aW9ufVxuICovXG5NYXRlcmlhbGl6ZS50aHJvdHRsZSA9IGZ1bmN0aW9uIChmdW5jLCB3YWl0LCBvcHRpb25zKSB7XG4gIHZhciBjb250ZXh0LCBhcmdzLCByZXN1bHQ7XG4gIHZhciB0aW1lb3V0ID0gbnVsbDtcbiAgdmFyIHByZXZpb3VzID0gMDtcbiAgb3B0aW9ucyB8fCAob3B0aW9ucyA9IHt9KTtcbiAgdmFyIGxhdGVyID0gZnVuY3Rpb24gKCkge1xuICAgIHByZXZpb3VzID0gb3B0aW9ucy5sZWFkaW5nID09PSBmYWxzZSA/IDAgOiBnZXRUaW1lKCk7XG4gICAgdGltZW91dCA9IG51bGw7XG4gICAgcmVzdWx0ID0gZnVuYy5hcHBseShjb250ZXh0LCBhcmdzKTtcbiAgICBjb250ZXh0ID0gYXJncyA9IG51bGw7XG4gIH07XG4gIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIG5vdyA9IGdldFRpbWUoKTtcbiAgICBpZiAoIXByZXZpb3VzICYmIG9wdGlvbnMubGVhZGluZyA9PT0gZmFsc2UpIHByZXZpb3VzID0gbm93O1xuICAgIHZhciByZW1haW5pbmcgPSB3YWl0IC0gKG5vdyAtIHByZXZpb3VzKTtcbiAgICBjb250ZXh0ID0gdGhpcztcbiAgICBhcmdzID0gYXJndW1lbnRzO1xuICAgIGlmIChyZW1haW5pbmcgPD0gMCkge1xuICAgICAgY2xlYXJUaW1lb3V0KHRpbWVvdXQpO1xuICAgICAgdGltZW91dCA9IG51bGw7XG4gICAgICBwcmV2aW91cyA9IG5vdztcbiAgICAgIHJlc3VsdCA9IGZ1bmMuYXBwbHkoY29udGV4dCwgYXJncyk7XG4gICAgICBjb250ZXh0ID0gYXJncyA9IG51bGw7XG4gICAgfSBlbHNlIGlmICghdGltZW91dCAmJiBvcHRpb25zLnRyYWlsaW5nICE9PSBmYWxzZSkge1xuICAgICAgdGltZW91dCA9IHNldFRpbWVvdXQobGF0ZXIsIHJlbWFpbmluZyk7XG4gICAgfVxuICAgIHJldHVybiByZXN1bHQ7XG4gIH07XG59O1xuXG4vLyBWZWxvY2l0eSBoYXMgY29uZmxpY3RzIHdoZW4gbG9hZGVkIHdpdGggalF1ZXJ5LCB0aGlzIHdpbGwgY2hlY2sgZm9yIGl0XG4vLyBGaXJzdCwgY2hlY2sgaWYgaW4gbm9Db25mbGljdCBtb2RlXG52YXIgVmVsO1xuaWYgKGpRdWVyeSkge1xuICBWZWwgPSBqUXVlcnkuVmVsb2NpdHk7XG59IGVsc2UgaWYgKCQpIHtcbiAgVmVsID0gJC5WZWxvY2l0eTtcbn0gZWxzZSB7XG4gIFZlbCA9IFZlbG9jaXR5O1xufVxuXG5pZiAoVmVsKSB7XG4gIE1hdGVyaWFsaXplLlZlbCA9IFZlbDtcbn0gZWxzZSB7XG4gIE1hdGVyaWFsaXplLlZlbCA9IFZlbG9jaXR5O1xufVxuOyhmdW5jdGlvbiAoJCkge1xuICAkLmZuLmNvbGxhcHNpYmxlID0gZnVuY3Rpb24gKG9wdGlvbnMsIG1ldGhvZFBhcmFtKSB7XG4gICAgdmFyIGRlZmF1bHRzID0ge1xuICAgICAgYWNjb3JkaW9uOiB1bmRlZmluZWQsXG4gICAgICBvbk9wZW46IHVuZGVmaW5lZCxcbiAgICAgIG9uQ2xvc2U6IHVuZGVmaW5lZFxuICAgIH07XG5cbiAgICB2YXIgbWV0aG9kTmFtZSA9IG9wdGlvbnM7XG4gICAgb3B0aW9ucyA9ICQuZXh0ZW5kKGRlZmF1bHRzLCBvcHRpb25zKTtcblxuICAgIHJldHVybiB0aGlzLmVhY2goZnVuY3Rpb24gKCkge1xuXG4gICAgICB2YXIgJHRoaXMgPSAkKHRoaXMpO1xuXG4gICAgICB2YXIgJHBhbmVsX2hlYWRlcnMgPSAkKHRoaXMpLmZpbmQoJz4gbGkgPiAuY29sbGFwc2libGUtaGVhZGVyJyk7XG5cbiAgICAgIHZhciBjb2xsYXBzaWJsZV90eXBlID0gJHRoaXMuZGF0YShcImNvbGxhcHNpYmxlXCIpO1xuXG4gICAgICAvKioqKioqKioqKioqKioqKlxuICAgICAgSGVscGVyIEZ1bmN0aW9uc1xuICAgICAgKioqKioqKioqKioqKioqKi9cblxuICAgICAgLy8gQWNjb3JkaW9uIE9wZW5cbiAgICAgIGZ1bmN0aW9uIGFjY29yZGlvbk9wZW4ob2JqZWN0KSB7XG4gICAgICAgICRwYW5lbF9oZWFkZXJzID0gJHRoaXMuZmluZCgnPiBsaSA+IC5jb2xsYXBzaWJsZS1oZWFkZXInKTtcbiAgICAgICAgaWYgKG9iamVjdC5oYXNDbGFzcygnYWN0aXZlJykpIHtcbiAgICAgICAgICBvYmplY3QucGFyZW50KCkuYWRkQ2xhc3MoJ2FjdGl2ZScpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIG9iamVjdC5wYXJlbnQoKS5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKG9iamVjdC5wYXJlbnQoKS5oYXNDbGFzcygnYWN0aXZlJykpIHtcbiAgICAgICAgICBvYmplY3Quc2libGluZ3MoJy5jb2xsYXBzaWJsZS1ib2R5Jykuc3RvcCh0cnVlLCBmYWxzZSkuc2xpZGVEb3duKHsgZHVyYXRpb246IDM1MCwgZWFzaW5nOiBcImVhc2VPdXRRdWFydFwiLCBxdWV1ZTogZmFsc2UsIGNvbXBsZXRlOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICQodGhpcykuY3NzKCdoZWlnaHQnLCAnJyk7XG4gICAgICAgICAgICB9IH0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIG9iamVjdC5zaWJsaW5ncygnLmNvbGxhcHNpYmxlLWJvZHknKS5zdG9wKHRydWUsIGZhbHNlKS5zbGlkZVVwKHsgZHVyYXRpb246IDM1MCwgZWFzaW5nOiBcImVhc2VPdXRRdWFydFwiLCBxdWV1ZTogZmFsc2UsIGNvbXBsZXRlOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICQodGhpcykuY3NzKCdoZWlnaHQnLCAnJyk7XG4gICAgICAgICAgICB9IH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgJHBhbmVsX2hlYWRlcnMubm90KG9iamVjdCkucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpLnBhcmVudCgpLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcblxuICAgICAgICAvLyBDbG9zZSBwcmV2aW91c2x5IG9wZW4gYWNjb3JkaW9uIGVsZW1lbnRzLlxuICAgICAgICAkcGFuZWxfaGVhZGVycy5ub3Qob2JqZWN0KS5wYXJlbnQoKS5jaGlsZHJlbignLmNvbGxhcHNpYmxlLWJvZHknKS5zdG9wKHRydWUsIGZhbHNlKS5lYWNoKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICBpZiAoJCh0aGlzKS5pcygnOnZpc2libGUnKSkge1xuICAgICAgICAgICAgJCh0aGlzKS5zbGlkZVVwKHtcbiAgICAgICAgICAgICAgZHVyYXRpb246IDM1MCxcbiAgICAgICAgICAgICAgZWFzaW5nOiBcImVhc2VPdXRRdWFydFwiLFxuICAgICAgICAgICAgICBxdWV1ZTogZmFsc2UsXG4gICAgICAgICAgICAgIGNvbXBsZXRlOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgJCh0aGlzKS5jc3MoJ2hlaWdodCcsICcnKTtcbiAgICAgICAgICAgICAgICBleGVjQ2FsbGJhY2tzKCQodGhpcykuc2libGluZ3MoJy5jb2xsYXBzaWJsZS1oZWFkZXInKSk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICAgIC8vIEV4cGFuZGFibGUgT3BlblxuICAgICAgZnVuY3Rpb24gZXhwYW5kYWJsZU9wZW4ob2JqZWN0KSB7XG4gICAgICAgIGlmIChvYmplY3QuaGFzQ2xhc3MoJ2FjdGl2ZScpKSB7XG4gICAgICAgICAgb2JqZWN0LnBhcmVudCgpLmFkZENsYXNzKCdhY3RpdmUnKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBvYmplY3QucGFyZW50KCkucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChvYmplY3QucGFyZW50KCkuaGFzQ2xhc3MoJ2FjdGl2ZScpKSB7XG4gICAgICAgICAgb2JqZWN0LnNpYmxpbmdzKCcuY29sbGFwc2libGUtYm9keScpLnN0b3AodHJ1ZSwgZmFsc2UpLnNsaWRlRG93bih7IGR1cmF0aW9uOiAzNTAsIGVhc2luZzogXCJlYXNlT3V0UXVhcnRcIiwgcXVldWU6IGZhbHNlLCBjb21wbGV0ZTogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAkKHRoaXMpLmNzcygnaGVpZ2h0JywgJycpO1xuICAgICAgICAgICAgfSB9KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBvYmplY3Quc2libGluZ3MoJy5jb2xsYXBzaWJsZS1ib2R5Jykuc3RvcCh0cnVlLCBmYWxzZSkuc2xpZGVVcCh7IGR1cmF0aW9uOiAzNTAsIGVhc2luZzogXCJlYXNlT3V0UXVhcnRcIiwgcXVldWU6IGZhbHNlLCBjb21wbGV0ZTogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAkKHRoaXMpLmNzcygnaGVpZ2h0JywgJycpO1xuICAgICAgICAgICAgfSB9KTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvLyBPcGVuIGNvbGxhcHNpYmxlLiBvYmplY3Q6IC5jb2xsYXBzaWJsZS1oZWFkZXJcbiAgICAgIGZ1bmN0aW9uIGNvbGxhcHNpYmxlT3BlbihvYmplY3QsIG5vVG9nZ2xlKSB7XG4gICAgICAgIGlmICghbm9Ub2dnbGUpIHtcbiAgICAgICAgICBvYmplY3QudG9nZ2xlQ2xhc3MoJ2FjdGl2ZScpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKG9wdGlvbnMuYWNjb3JkaW9uIHx8IGNvbGxhcHNpYmxlX3R5cGUgPT09IFwiYWNjb3JkaW9uXCIgfHwgY29sbGFwc2libGVfdHlwZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgLy8gSGFuZGxlIEFjY29yZGlvblxuICAgICAgICAgIGFjY29yZGlvbk9wZW4ob2JqZWN0KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAvLyBIYW5kbGUgRXhwYW5kYWJsZXNcbiAgICAgICAgICBleHBhbmRhYmxlT3BlbihvYmplY3QpO1xuICAgICAgICB9XG5cbiAgICAgICAgZXhlY0NhbGxiYWNrcyhvYmplY3QpO1xuICAgICAgfVxuXG4gICAgICAvLyBIYW5kbGUgY2FsbGJhY2tzXG4gICAgICBmdW5jdGlvbiBleGVjQ2FsbGJhY2tzKG9iamVjdCkge1xuICAgICAgICBpZiAob2JqZWN0Lmhhc0NsYXNzKCdhY3RpdmUnKSkge1xuICAgICAgICAgIGlmICh0eXBlb2Ygb3B0aW9ucy5vbk9wZW4gPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICAgICAgb3B0aW9ucy5vbk9wZW4uY2FsbCh0aGlzLCBvYmplY3QucGFyZW50KCkpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpZiAodHlwZW9mIG9wdGlvbnMub25DbG9zZSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgICAgICBvcHRpb25zLm9uQ2xvc2UuY2FsbCh0aGlzLCBvYmplY3QucGFyZW50KCkpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvKipcbiAgICAgICAqIENoZWNrIGlmIG9iamVjdCBpcyBjaGlsZHJlbiBvZiBwYW5lbCBoZWFkZXJcbiAgICAgICAqIEBwYXJhbSAge09iamVjdH0gIG9iamVjdCBKcXVlcnkgb2JqZWN0XG4gICAgICAgKiBAcmV0dXJuIHtCb29sZWFufSB0cnVlIGlmIGl0IGlzIGNoaWxkcmVuXG4gICAgICAgKi9cbiAgICAgIGZ1bmN0aW9uIGlzQ2hpbGRyZW5PZlBhbmVsSGVhZGVyKG9iamVjdCkge1xuXG4gICAgICAgIHZhciBwYW5lbEhlYWRlciA9IGdldFBhbmVsSGVhZGVyKG9iamVjdCk7XG5cbiAgICAgICAgcmV0dXJuIHBhbmVsSGVhZGVyLmxlbmd0aCA+IDA7XG4gICAgICB9XG5cbiAgICAgIC8qKlxuICAgICAgICogR2V0IHBhbmVsIGhlYWRlciBmcm9tIGEgY2hpbGRyZW4gZWxlbWVudFxuICAgICAgICogQHBhcmFtICB7T2JqZWN0fSBvYmplY3QgSnF1ZXJ5IG9iamVjdFxuICAgICAgICogQHJldHVybiB7T2JqZWN0fSBwYW5lbCBoZWFkZXIgb2JqZWN0XG4gICAgICAgKi9cbiAgICAgIGZ1bmN0aW9uIGdldFBhbmVsSGVhZGVyKG9iamVjdCkge1xuXG4gICAgICAgIHJldHVybiBvYmplY3QuY2xvc2VzdCgnbGkgPiAuY29sbGFwc2libGUtaGVhZGVyJyk7XG4gICAgICB9XG5cbiAgICAgIC8vIFR1cm4gb2ZmIGFueSBleGlzdGluZyBldmVudCBoYW5kbGVyc1xuICAgICAgZnVuY3Rpb24gcmVtb3ZlRXZlbnRIYW5kbGVycygpIHtcbiAgICAgICAgJHRoaXMub2ZmKCdjbGljay5jb2xsYXBzZScsICc+IGxpID4gLmNvbGxhcHNpYmxlLWhlYWRlcicpO1xuICAgICAgfVxuXG4gICAgICAvKioqKiogIEVuZCBIZWxwZXIgRnVuY3Rpb25zICAqKioqKi9cblxuICAgICAgLy8gTWV0aG9kc1xuICAgICAgaWYgKG1ldGhvZE5hbWUgPT09ICdkZXN0cm95Jykge1xuICAgICAgICByZW1vdmVFdmVudEhhbmRsZXJzKCk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH0gZWxzZSBpZiAobWV0aG9kUGFyYW0gPj0gMCAmJiBtZXRob2RQYXJhbSA8ICRwYW5lbF9oZWFkZXJzLmxlbmd0aCkge1xuICAgICAgICB2YXIgJGN1cnJfaGVhZGVyID0gJHBhbmVsX2hlYWRlcnMuZXEobWV0aG9kUGFyYW0pO1xuICAgICAgICBpZiAoJGN1cnJfaGVhZGVyLmxlbmd0aCAmJiAobWV0aG9kTmFtZSA9PT0gJ29wZW4nIHx8IG1ldGhvZE5hbWUgPT09ICdjbG9zZScgJiYgJGN1cnJfaGVhZGVyLmhhc0NsYXNzKCdhY3RpdmUnKSkpIHtcbiAgICAgICAgICBjb2xsYXBzaWJsZU9wZW4oJGN1cnJfaGVhZGVyKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHJlbW92ZUV2ZW50SGFuZGxlcnMoKTtcblxuICAgICAgLy8gQWRkIGNsaWNrIGhhbmRsZXIgdG8gb25seSBkaXJlY3QgY29sbGFwc2libGUgaGVhZGVyIGNoaWxkcmVuXG4gICAgICAkdGhpcy5vbignY2xpY2suY29sbGFwc2UnLCAnPiBsaSA+IC5jb2xsYXBzaWJsZS1oZWFkZXInLCBmdW5jdGlvbiAoZSkge1xuICAgICAgICB2YXIgZWxlbWVudCA9ICQoZS50YXJnZXQpO1xuXG4gICAgICAgIGlmIChpc0NoaWxkcmVuT2ZQYW5lbEhlYWRlcihlbGVtZW50KSkge1xuICAgICAgICAgIGVsZW1lbnQgPSBnZXRQYW5lbEhlYWRlcihlbGVtZW50KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbGxhcHNpYmxlT3BlbihlbGVtZW50KTtcbiAgICAgIH0pO1xuXG4gICAgICAvLyBPcGVuIGZpcnN0IGFjdGl2ZVxuICAgICAgaWYgKG9wdGlvbnMuYWNjb3JkaW9uIHx8IGNvbGxhcHNpYmxlX3R5cGUgPT09IFwiYWNjb3JkaW9uXCIgfHwgY29sbGFwc2libGVfdHlwZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIC8vIEhhbmRsZSBBY2NvcmRpb25cbiAgICAgICAgY29sbGFwc2libGVPcGVuKCRwYW5lbF9oZWFkZXJzLmZpbHRlcignLmFjdGl2ZScpLmZpcnN0KCksIHRydWUpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gSGFuZGxlIEV4cGFuZGFibGVzXG4gICAgICAgICRwYW5lbF9oZWFkZXJzLmZpbHRlcignLmFjdGl2ZScpLmVhY2goZnVuY3Rpb24gKCkge1xuICAgICAgICAgIGNvbGxhcHNpYmxlT3BlbigkKHRoaXMpLCB0cnVlKTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfSk7XG4gIH07XG5cbiAgJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24gKCkge1xuICAgICQoJy5jb2xsYXBzaWJsZScpLmNvbGxhcHNpYmxlKCk7XG4gIH0pO1xufSkoalF1ZXJ5KTs7KGZ1bmN0aW9uICgkKSB7XG5cbiAgLy8gQWRkIHBvc2liaWxpdHkgdG8gc2Nyb2xsIHRvIHNlbGVjdGVkIG9wdGlvblxuICAvLyB1c2VmdWxsIGZvciBzZWxlY3QgZm9yIGV4YW1wbGVcbiAgJC5mbi5zY3JvbGxUbyA9IGZ1bmN0aW9uIChlbGVtKSB7XG4gICAgJCh0aGlzKS5zY3JvbGxUb3AoJCh0aGlzKS5zY3JvbGxUb3AoKSAtICQodGhpcykub2Zmc2V0KCkudG9wICsgJChlbGVtKS5vZmZzZXQoKS50b3ApO1xuICAgIHJldHVybiB0aGlzO1xuICB9O1xuXG4gICQuZm4uZHJvcGRvd24gPSBmdW5jdGlvbiAob3B0aW9ucykge1xuICAgIHZhciBkZWZhdWx0cyA9IHtcbiAgICAgIGluRHVyYXRpb246IDMwMCxcbiAgICAgIG91dER1cmF0aW9uOiAyMjUsXG4gICAgICBjb25zdHJhaW5XaWR0aDogdHJ1ZSwgLy8gQ29uc3RyYWlucyB3aWR0aCBvZiBkcm9wZG93biB0byB0aGUgYWN0aXZhdG9yXG4gICAgICBob3ZlcjogZmFsc2UsXG4gICAgICBndXR0ZXI6IDAsIC8vIFNwYWNpbmcgZnJvbSBlZGdlXG4gICAgICBiZWxvd09yaWdpbjogZmFsc2UsXG4gICAgICBhbGlnbm1lbnQ6ICdsZWZ0JyxcbiAgICAgIHN0b3BQcm9wYWdhdGlvbjogZmFsc2VcbiAgICB9O1xuXG4gICAgLy8gT3BlbiBkcm9wZG93bi5cbiAgICBpZiAob3B0aW9ucyA9PT0gXCJvcGVuXCIpIHtcbiAgICAgIHRoaXMuZWFjaChmdW5jdGlvbiAoKSB7XG4gICAgICAgICQodGhpcykudHJpZ2dlcignb3BlbicpO1xuICAgICAgfSk7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgLy8gQ2xvc2UgZHJvcGRvd24uXG4gICAgaWYgKG9wdGlvbnMgPT09IFwiY2xvc2VcIikge1xuICAgICAgdGhpcy5lYWNoKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgJCh0aGlzKS50cmlnZ2VyKCdjbG9zZScpO1xuICAgICAgfSk7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgdGhpcy5lYWNoKGZ1bmN0aW9uICgpIHtcbiAgICAgIHZhciBvcmlnaW4gPSAkKHRoaXMpO1xuICAgICAgdmFyIGN1cnJfb3B0aW9ucyA9ICQuZXh0ZW5kKHt9LCBkZWZhdWx0cywgb3B0aW9ucyk7XG4gICAgICB2YXIgaXNGb2N1c2VkID0gZmFsc2U7XG5cbiAgICAgIC8vIERyb3Bkb3duIG1lbnVcbiAgICAgIHZhciBhY3RpdmF0ZXMgPSAkKFwiI1wiICsgb3JpZ2luLmF0dHIoJ2RhdGEtYWN0aXZhdGVzJykpO1xuXG4gICAgICBmdW5jdGlvbiB1cGRhdGVPcHRpb25zKCkge1xuICAgICAgICBpZiAob3JpZ2luLmRhdGEoJ2luZHVyYXRpb24nKSAhPT0gdW5kZWZpbmVkKSBjdXJyX29wdGlvbnMuaW5EdXJhdGlvbiA9IG9yaWdpbi5kYXRhKCdpbmR1cmF0aW9uJyk7XG4gICAgICAgIGlmIChvcmlnaW4uZGF0YSgnb3V0ZHVyYXRpb24nKSAhPT0gdW5kZWZpbmVkKSBjdXJyX29wdGlvbnMub3V0RHVyYXRpb24gPSBvcmlnaW4uZGF0YSgnb3V0ZHVyYXRpb24nKTtcbiAgICAgICAgaWYgKG9yaWdpbi5kYXRhKCdjb25zdHJhaW53aWR0aCcpICE9PSB1bmRlZmluZWQpIGN1cnJfb3B0aW9ucy5jb25zdHJhaW5XaWR0aCA9IG9yaWdpbi5kYXRhKCdjb25zdHJhaW53aWR0aCcpO1xuICAgICAgICBpZiAob3JpZ2luLmRhdGEoJ2hvdmVyJykgIT09IHVuZGVmaW5lZCkgY3Vycl9vcHRpb25zLmhvdmVyID0gb3JpZ2luLmRhdGEoJ2hvdmVyJyk7XG4gICAgICAgIGlmIChvcmlnaW4uZGF0YSgnZ3V0dGVyJykgIT09IHVuZGVmaW5lZCkgY3Vycl9vcHRpb25zLmd1dHRlciA9IG9yaWdpbi5kYXRhKCdndXR0ZXInKTtcbiAgICAgICAgaWYgKG9yaWdpbi5kYXRhKCdiZWxvd29yaWdpbicpICE9PSB1bmRlZmluZWQpIGN1cnJfb3B0aW9ucy5iZWxvd09yaWdpbiA9IG9yaWdpbi5kYXRhKCdiZWxvd29yaWdpbicpO1xuICAgICAgICBpZiAob3JpZ2luLmRhdGEoJ2FsaWdubWVudCcpICE9PSB1bmRlZmluZWQpIGN1cnJfb3B0aW9ucy5hbGlnbm1lbnQgPSBvcmlnaW4uZGF0YSgnYWxpZ25tZW50Jyk7XG4gICAgICAgIGlmIChvcmlnaW4uZGF0YSgnc3RvcHByb3BhZ2F0aW9uJykgIT09IHVuZGVmaW5lZCkgY3Vycl9vcHRpb25zLnN0b3BQcm9wYWdhdGlvbiA9IG9yaWdpbi5kYXRhKCdzdG9wcHJvcGFnYXRpb24nKTtcbiAgICAgIH1cblxuICAgICAgdXBkYXRlT3B0aW9ucygpO1xuXG4gICAgICAvLyBBdHRhY2ggZHJvcGRvd24gdG8gaXRzIGFjdGl2YXRvclxuICAgICAgb3JpZ2luLmFmdGVyKGFjdGl2YXRlcyk7XG5cbiAgICAgIC8qXG4gICAgICAgIEhlbHBlciBmdW5jdGlvbiB0byBwb3NpdGlvbiBhbmQgcmVzaXplIGRyb3Bkb3duLlxuICAgICAgICBVc2VkIGluIGhvdmVyIGFuZCBjbGljayBoYW5kbGVyLlxuICAgICAgKi9cbiAgICAgIGZ1bmN0aW9uIHBsYWNlRHJvcGRvd24oZXZlbnRUeXBlKSB7XG4gICAgICAgIC8vIENoZWNrIGZvciBzaW11bHRhbmVvdXMgZm9jdXMgYW5kIGNsaWNrIGV2ZW50cy5cbiAgICAgICAgaWYgKGV2ZW50VHlwZSA9PT0gJ2ZvY3VzJykge1xuICAgICAgICAgIGlzRm9jdXNlZCA9IHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBDaGVjayBodG1sIGRhdGEgYXR0cmlidXRlc1xuICAgICAgICB1cGRhdGVPcHRpb25zKCk7XG5cbiAgICAgICAgLy8gU2V0IERyb3Bkb3duIHN0YXRlXG4gICAgICAgIGFjdGl2YXRlcy5hZGRDbGFzcygnYWN0aXZlJyk7XG4gICAgICAgIG9yaWdpbi5hZGRDbGFzcygnYWN0aXZlJyk7XG5cbiAgICAgICAgdmFyIG9yaWdpbldpZHRoID0gb3JpZ2luWzBdLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLndpZHRoO1xuXG4gICAgICAgIC8vIENvbnN0cmFpbiB3aWR0aFxuICAgICAgICBpZiAoY3Vycl9vcHRpb25zLmNvbnN0cmFpbldpZHRoID09PSB0cnVlKSB7XG4gICAgICAgICAgYWN0aXZhdGVzLmNzcygnd2lkdGgnLCBvcmlnaW5XaWR0aCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgYWN0aXZhdGVzLmNzcygnd2hpdGUtc3BhY2UnLCAnbm93cmFwJyk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBPZmZzY3JlZW4gZGV0ZWN0aW9uXG4gICAgICAgIHZhciB3aW5kb3dIZWlnaHQgPSB3aW5kb3cuaW5uZXJIZWlnaHQ7XG4gICAgICAgIHZhciBvcmlnaW5IZWlnaHQgPSBvcmlnaW4uaW5uZXJIZWlnaHQoKTtcbiAgICAgICAgdmFyIG9mZnNldExlZnQgPSBvcmlnaW4ub2Zmc2V0KCkubGVmdDtcbiAgICAgICAgdmFyIG9mZnNldFRvcCA9IG9yaWdpbi5vZmZzZXQoKS50b3AgLSAkKHdpbmRvdykuc2Nyb2xsVG9wKCk7XG4gICAgICAgIHZhciBjdXJyQWxpZ25tZW50ID0gY3Vycl9vcHRpb25zLmFsaWdubWVudDtcbiAgICAgICAgdmFyIGd1dHRlclNwYWNpbmcgPSAwO1xuICAgICAgICB2YXIgbGVmdFBvc2l0aW9uID0gMDtcblxuICAgICAgICAvLyBCZWxvdyBPcmlnaW5cbiAgICAgICAgdmFyIHZlcnRpY2FsT2Zmc2V0ID0gMDtcbiAgICAgICAgaWYgKGN1cnJfb3B0aW9ucy5iZWxvd09yaWdpbiA9PT0gdHJ1ZSkge1xuICAgICAgICAgIHZlcnRpY2FsT2Zmc2V0ID0gb3JpZ2luSGVpZ2h0O1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gQ2hlY2sgZm9yIHNjcm9sbGluZyBwb3NpdGlvbmVkIGNvbnRhaW5lci5cbiAgICAgICAgdmFyIHNjcm9sbFlPZmZzZXQgPSAwO1xuICAgICAgICB2YXIgc2Nyb2xsWE9mZnNldCA9IDA7XG4gICAgICAgIHZhciB3cmFwcGVyID0gb3JpZ2luLnBhcmVudCgpO1xuICAgICAgICBpZiAoIXdyYXBwZXIuaXMoJ2JvZHknKSkge1xuICAgICAgICAgIGlmICh3cmFwcGVyWzBdLnNjcm9sbEhlaWdodCA+IHdyYXBwZXJbMF0uY2xpZW50SGVpZ2h0KSB7XG4gICAgICAgICAgICBzY3JvbGxZT2Zmc2V0ID0gd3JhcHBlclswXS5zY3JvbGxUb3A7XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmICh3cmFwcGVyWzBdLnNjcm9sbFdpZHRoID4gd3JhcHBlclswXS5jbGllbnRXaWR0aCkge1xuICAgICAgICAgICAgc2Nyb2xsWE9mZnNldCA9IHdyYXBwZXJbMF0uc2Nyb2xsTGVmdDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAob2Zmc2V0TGVmdCArIGFjdGl2YXRlcy5pbm5lcldpZHRoKCkgPiAkKHdpbmRvdykud2lkdGgoKSkge1xuICAgICAgICAgIC8vIERyb3Bkb3duIGdvZXMgcGFzdCBzY3JlZW4gb24gcmlnaHQsIGZvcmNlIHJpZ2h0IGFsaWdubWVudFxuICAgICAgICAgIGN1cnJBbGlnbm1lbnQgPSAncmlnaHQnO1xuICAgICAgICB9IGVsc2UgaWYgKG9mZnNldExlZnQgLSBhY3RpdmF0ZXMuaW5uZXJXaWR0aCgpICsgb3JpZ2luLmlubmVyV2lkdGgoKSA8IDApIHtcbiAgICAgICAgICAvLyBEcm9wZG93biBnb2VzIHBhc3Qgc2NyZWVuIG9uIGxlZnQsIGZvcmNlIGxlZnQgYWxpZ25tZW50XG4gICAgICAgICAgY3VyckFsaWdubWVudCA9ICdsZWZ0JztcbiAgICAgICAgfVxuICAgICAgICAvLyBWZXJ0aWNhbCBib3R0b20gb2Zmc2NyZWVuIGRldGVjdGlvblxuICAgICAgICBpZiAob2Zmc2V0VG9wICsgYWN0aXZhdGVzLmlubmVySGVpZ2h0KCkgPiB3aW5kb3dIZWlnaHQpIHtcbiAgICAgICAgICAvLyBJZiBnb2luZyB1cHdhcmRzIHN0aWxsIGdvZXMgb2Zmc2NyZWVuLCBqdXN0IGNyb3AgaGVpZ2h0IG9mIGRyb3Bkb3duLlxuICAgICAgICAgIGlmIChvZmZzZXRUb3AgKyBvcmlnaW5IZWlnaHQgLSBhY3RpdmF0ZXMuaW5uZXJIZWlnaHQoKSA8IDApIHtcbiAgICAgICAgICAgIHZhciBhZGp1c3RlZEhlaWdodCA9IHdpbmRvd0hlaWdodCAtIG9mZnNldFRvcCAtIHZlcnRpY2FsT2Zmc2V0O1xuICAgICAgICAgICAgYWN0aXZhdGVzLmNzcygnbWF4LWhlaWdodCcsIGFkanVzdGVkSGVpZ2h0KTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgLy8gRmxvdyB1cHdhcmRzLlxuICAgICAgICAgICAgaWYgKCF2ZXJ0aWNhbE9mZnNldCkge1xuICAgICAgICAgICAgICB2ZXJ0aWNhbE9mZnNldCArPSBvcmlnaW5IZWlnaHQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB2ZXJ0aWNhbE9mZnNldCAtPSBhY3RpdmF0ZXMuaW5uZXJIZWlnaHQoKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvLyBIYW5kbGUgZWRnZSBhbGlnbm1lbnRcbiAgICAgICAgaWYgKGN1cnJBbGlnbm1lbnQgPT09ICdsZWZ0Jykge1xuICAgICAgICAgIGd1dHRlclNwYWNpbmcgPSBjdXJyX29wdGlvbnMuZ3V0dGVyO1xuICAgICAgICAgIGxlZnRQb3NpdGlvbiA9IG9yaWdpbi5wb3NpdGlvbigpLmxlZnQgKyBndXR0ZXJTcGFjaW5nO1xuICAgICAgICB9IGVsc2UgaWYgKGN1cnJBbGlnbm1lbnQgPT09ICdyaWdodCcpIHtcbiAgICAgICAgICAvLyBNYXRlcmlhbCBpY29ucyBmaXhcbiAgICAgICAgICBhY3RpdmF0ZXMuc3RvcCh0cnVlLCB0cnVlKS5jc3Moe1xuICAgICAgICAgICAgb3BhY2l0eTogMCxcbiAgICAgICAgICAgIGxlZnQ6IDBcbiAgICAgICAgICB9KTtcblxuICAgICAgICAgIHZhciBvZmZzZXRSaWdodCA9IG9yaWdpbi5wb3NpdGlvbigpLmxlZnQgKyBvcmlnaW5XaWR0aCAtIGFjdGl2YXRlcy53aWR0aCgpO1xuICAgICAgICAgIGd1dHRlclNwYWNpbmcgPSAtY3Vycl9vcHRpb25zLmd1dHRlcjtcbiAgICAgICAgICBsZWZ0UG9zaXRpb24gPSBvZmZzZXRSaWdodCArIGd1dHRlclNwYWNpbmc7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBQb3NpdGlvbiBkcm9wZG93blxuICAgICAgICBhY3RpdmF0ZXMuY3NzKHtcbiAgICAgICAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICAgICAgICB0b3A6IG9yaWdpbi5wb3NpdGlvbigpLnRvcCArIHZlcnRpY2FsT2Zmc2V0ICsgc2Nyb2xsWU9mZnNldCxcbiAgICAgICAgICBsZWZ0OiBsZWZ0UG9zaXRpb24gKyBzY3JvbGxYT2Zmc2V0XG4gICAgICAgIH0pO1xuXG4gICAgICAgIC8vIFNob3cgZHJvcGRvd25cbiAgICAgICAgYWN0aXZhdGVzLnNsaWRlRG93bih7XG4gICAgICAgICAgcXVldWU6IGZhbHNlLFxuICAgICAgICAgIGR1cmF0aW9uOiBjdXJyX29wdGlvbnMuaW5EdXJhdGlvbixcbiAgICAgICAgICBlYXNpbmc6ICdlYXNlT3V0Q3ViaWMnLFxuICAgICAgICAgIGNvbXBsZXRlOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAkKHRoaXMpLmNzcygnaGVpZ2h0JywgJycpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSkuYW5pbWF0ZSh7IG9wYWNpdHk6IDEgfSwgeyBxdWV1ZTogZmFsc2UsIGR1cmF0aW9uOiBjdXJyX29wdGlvbnMuaW5EdXJhdGlvbiwgZWFzaW5nOiAnZWFzZU91dFNpbmUnIH0pO1xuXG4gICAgICAgIC8vIEFkZCBjbGljayBjbG9zZSBoYW5kbGVyIHRvIGRvY3VtZW50XG4gICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICQoZG9jdW1lbnQpLm9uKCdjbGljay4nICsgYWN0aXZhdGVzLmF0dHIoJ2lkJyksIGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICBoaWRlRHJvcGRvd24oKTtcbiAgICAgICAgICAgICQoZG9jdW1lbnQpLm9mZignY2xpY2suJyArIGFjdGl2YXRlcy5hdHRyKCdpZCcpKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfSwgMCk7XG4gICAgICB9XG5cbiAgICAgIGZ1bmN0aW9uIGhpZGVEcm9wZG93bigpIHtcbiAgICAgICAgLy8gQ2hlY2sgZm9yIHNpbXVsdGFuZW91cyBmb2N1cyBhbmQgY2xpY2sgZXZlbnRzLlxuICAgICAgICBpc0ZvY3VzZWQgPSBmYWxzZTtcbiAgICAgICAgYWN0aXZhdGVzLmZhZGVPdXQoY3Vycl9vcHRpb25zLm91dER1cmF0aW9uKTtcbiAgICAgICAgYWN0aXZhdGVzLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcbiAgICAgICAgb3JpZ2luLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcbiAgICAgICAgJChkb2N1bWVudCkub2ZmKCdjbGljay4nICsgYWN0aXZhdGVzLmF0dHIoJ2lkJykpO1xuICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICBhY3RpdmF0ZXMuY3NzKCdtYXgtaGVpZ2h0JywgJycpO1xuICAgICAgICB9LCBjdXJyX29wdGlvbnMub3V0RHVyYXRpb24pO1xuICAgICAgfVxuXG4gICAgICAvLyBIb3ZlclxuICAgICAgaWYgKGN1cnJfb3B0aW9ucy5ob3Zlcikge1xuICAgICAgICB2YXIgb3BlbiA9IGZhbHNlO1xuICAgICAgICBvcmlnaW4ub2ZmKCdjbGljay4nICsgb3JpZ2luLmF0dHIoJ2lkJykpO1xuICAgICAgICAvLyBIb3ZlciBoYW5kbGVyIHRvIHNob3cgZHJvcGRvd25cbiAgICAgICAgb3JpZ2luLm9uKCdtb3VzZWVudGVyJywgZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAvLyBNb3VzZSBvdmVyXG4gICAgICAgICAgaWYgKG9wZW4gPT09IGZhbHNlKSB7XG4gICAgICAgICAgICBwbGFjZURyb3Bkb3duKCk7XG4gICAgICAgICAgICBvcGVuID0gdHJ1ZTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICBvcmlnaW4ub24oJ21vdXNlbGVhdmUnLCBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgIC8vIElmIGhvdmVyIG9uIG9yaWdpbiB0aGVuIHRvIHNvbWV0aGluZyBvdGhlciB0aGFuIGRyb3Bkb3duIGNvbnRlbnQsIHRoZW4gY2xvc2VcbiAgICAgICAgICB2YXIgdG9FbCA9IGUudG9FbGVtZW50IHx8IGUucmVsYXRlZFRhcmdldDsgLy8gYWRkZWQgYnJvd3NlciBjb21wYXRpYmlsaXR5IGZvciB0YXJnZXQgZWxlbWVudFxuICAgICAgICAgIGlmICghJCh0b0VsKS5jbG9zZXN0KCcuZHJvcGRvd24tY29udGVudCcpLmlzKGFjdGl2YXRlcykpIHtcbiAgICAgICAgICAgIGFjdGl2YXRlcy5zdG9wKHRydWUsIHRydWUpO1xuICAgICAgICAgICAgaGlkZURyb3Bkb3duKCk7XG4gICAgICAgICAgICBvcGVuID0gZmFsc2U7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICBhY3RpdmF0ZXMub24oJ21vdXNlbGVhdmUnLCBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgIC8vIE1vdXNlIG91dFxuICAgICAgICAgIHZhciB0b0VsID0gZS50b0VsZW1lbnQgfHwgZS5yZWxhdGVkVGFyZ2V0O1xuICAgICAgICAgIGlmICghJCh0b0VsKS5jbG9zZXN0KCcuZHJvcGRvd24tYnV0dG9uJykuaXMob3JpZ2luKSkge1xuICAgICAgICAgICAgYWN0aXZhdGVzLnN0b3AodHJ1ZSwgdHJ1ZSk7XG4gICAgICAgICAgICBoaWRlRHJvcGRvd24oKTtcbiAgICAgICAgICAgIG9wZW4gPSBmYWxzZTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIC8vIENsaWNrXG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBDbGljayBoYW5kbGVyIHRvIHNob3cgZHJvcGRvd25cbiAgICAgICAgb3JpZ2luLm9mZignY2xpY2suJyArIG9yaWdpbi5hdHRyKCdpZCcpKTtcbiAgICAgICAgb3JpZ2luLm9uKCdjbGljay4nICsgb3JpZ2luLmF0dHIoJ2lkJyksIGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgaWYgKCFpc0ZvY3VzZWQpIHtcbiAgICAgICAgICAgIGlmIChvcmlnaW5bMF0gPT0gZS5jdXJyZW50VGFyZ2V0ICYmICFvcmlnaW4uaGFzQ2xhc3MoJ2FjdGl2ZScpICYmICQoZS50YXJnZXQpLmNsb3Nlc3QoJy5kcm9wZG93bi1jb250ZW50JykubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTsgLy8gUHJldmVudHMgYnV0dG9uIGNsaWNrIGZyb20gbW92aW5nIHdpbmRvd1xuICAgICAgICAgICAgICBpZiAoY3Vycl9vcHRpb25zLnN0b3BQcm9wYWdhdGlvbikge1xuICAgICAgICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgcGxhY2VEcm9wZG93bignY2xpY2snKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIElmIG9yaWdpbiBpcyBjbGlja2VkIGFuZCBtZW51IGlzIG9wZW4sIGNsb3NlIG1lbnVcbiAgICAgICAgICAgIGVsc2UgaWYgKG9yaWdpbi5oYXNDbGFzcygnYWN0aXZlJykpIHtcbiAgICAgICAgICAgICAgICBoaWRlRHJvcGRvd24oKTtcbiAgICAgICAgICAgICAgICAkKGRvY3VtZW50KS5vZmYoJ2NsaWNrLicgKyBhY3RpdmF0ZXMuYXR0cignaWQnKSk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfSAvLyBFbmQgZWxzZVxuXG4gICAgICAvLyBMaXN0ZW4gdG8gb3BlbiBhbmQgY2xvc2UgZXZlbnQgLSB1c2VmdWwgZm9yIHNlbGVjdCBjb21wb25lbnRcbiAgICAgIG9yaWdpbi5vbignb3BlbicsIGZ1bmN0aW9uIChlLCBldmVudFR5cGUpIHtcbiAgICAgICAgcGxhY2VEcm9wZG93bihldmVudFR5cGUpO1xuICAgICAgfSk7XG4gICAgICBvcmlnaW4ub24oJ2Nsb3NlJywgaGlkZURyb3Bkb3duKTtcbiAgICB9KTtcbiAgfTsgLy8gRW5kIGRyb3Bkb3duIHBsdWdpblxuXG4gICQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uICgpIHtcbiAgICAkKCcuZHJvcGRvd24tYnV0dG9uJykuZHJvcGRvd24oKTtcbiAgfSk7XG59KShqUXVlcnkpO1xuOyhmdW5jdGlvbiAoJCkge1xuXG4gICQuZm4ucGFyYWxsYXggPSBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIHdpbmRvd193aWR0aCA9ICQod2luZG93KS53aWR0aCgpO1xuICAgIC8vIFBhcmFsbGF4IFNjcmlwdHNcbiAgICByZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uIChpKSB7XG4gICAgICB2YXIgJHRoaXMgPSAkKHRoaXMpO1xuICAgICAgJHRoaXMuYWRkQ2xhc3MoJ3BhcmFsbGF4Jyk7XG5cbiAgICAgIGZ1bmN0aW9uIHVwZGF0ZVBhcmFsbGF4KGluaXRpYWwpIHtcbiAgICAgICAgdmFyIGNvbnRhaW5lcl9oZWlnaHQ7XG4gICAgICAgIGlmICh3aW5kb3dfd2lkdGggPCA2MDEpIHtcbiAgICAgICAgICBjb250YWluZXJfaGVpZ2h0ID0gJHRoaXMuaGVpZ2h0KCkgPiAwID8gJHRoaXMuaGVpZ2h0KCkgOiAkdGhpcy5jaGlsZHJlbihcImltZ1wiKS5oZWlnaHQoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBjb250YWluZXJfaGVpZ2h0ID0gJHRoaXMuaGVpZ2h0KCkgPiAwID8gJHRoaXMuaGVpZ2h0KCkgOiA1MDA7XG4gICAgICAgIH1cbiAgICAgICAgdmFyICRpbWcgPSAkdGhpcy5jaGlsZHJlbihcImltZ1wiKS5maXJzdCgpO1xuICAgICAgICB2YXIgaW1nX2hlaWdodCA9ICRpbWcuaGVpZ2h0KCk7XG4gICAgICAgIHZhciBwYXJhbGxheF9kaXN0ID0gaW1nX2hlaWdodCAtIGNvbnRhaW5lcl9oZWlnaHQ7XG4gICAgICAgIHZhciBib3R0b20gPSAkdGhpcy5vZmZzZXQoKS50b3AgKyBjb250YWluZXJfaGVpZ2h0O1xuICAgICAgICB2YXIgdG9wID0gJHRoaXMub2Zmc2V0KCkudG9wO1xuICAgICAgICB2YXIgc2Nyb2xsVG9wID0gJCh3aW5kb3cpLnNjcm9sbFRvcCgpO1xuICAgICAgICB2YXIgd2luZG93SGVpZ2h0ID0gd2luZG93LmlubmVySGVpZ2h0O1xuICAgICAgICB2YXIgd2luZG93Qm90dG9tID0gc2Nyb2xsVG9wICsgd2luZG93SGVpZ2h0O1xuICAgICAgICB2YXIgcGVyY2VudFNjcm9sbGVkID0gKHdpbmRvd0JvdHRvbSAtIHRvcCkgLyAoY29udGFpbmVyX2hlaWdodCArIHdpbmRvd0hlaWdodCk7XG4gICAgICAgIHZhciBwYXJhbGxheCA9IE1hdGgucm91bmQocGFyYWxsYXhfZGlzdCAqIHBlcmNlbnRTY3JvbGxlZCk7XG5cbiAgICAgICAgaWYgKGluaXRpYWwpIHtcbiAgICAgICAgICAkaW1nLmNzcygnZGlzcGxheScsICdibG9jaycpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChib3R0b20gPiBzY3JvbGxUb3AgJiYgdG9wIDwgc2Nyb2xsVG9wICsgd2luZG93SGVpZ2h0KSB7XG4gICAgICAgICAgJGltZy5jc3MoJ3RyYW5zZm9ybScsIFwidHJhbnNsYXRlM0QoLTUwJSxcIiArIHBhcmFsbGF4ICsgXCJweCwgMClcIik7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLy8gV2FpdCBmb3IgaW1hZ2UgbG9hZFxuICAgICAgJHRoaXMuY2hpbGRyZW4oXCJpbWdcIikub25lKFwibG9hZFwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHVwZGF0ZVBhcmFsbGF4KHRydWUpO1xuICAgICAgfSkuZWFjaChmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmICh0aGlzLmNvbXBsZXRlKSAkKHRoaXMpLnRyaWdnZXIoXCJsb2FkXCIpO1xuICAgICAgfSk7XG5cbiAgICAgICQod2luZG93KS5zY3JvbGwoZnVuY3Rpb24gKCkge1xuICAgICAgICB3aW5kb3dfd2lkdGggPSAkKHdpbmRvdykud2lkdGgoKTtcbiAgICAgICAgdXBkYXRlUGFyYWxsYXgoZmFsc2UpO1xuICAgICAgfSk7XG5cbiAgICAgICQod2luZG93KS5yZXNpemUoZnVuY3Rpb24gKCkge1xuICAgICAgICB3aW5kb3dfd2lkdGggPSAkKHdpbmRvdykud2lkdGgoKTtcbiAgICAgICAgdXBkYXRlUGFyYWxsYXgoZmFsc2UpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH07XG59KShqUXVlcnkpO1xuOyAvKiFcbiAgKiBXYXZlcyB2MC42LjRcbiAgKiBodHRwOi8vZmlhbi5teS5pZC9XYXZlc1xuICAqXG4gICogQ29weXJpZ2h0IDIwMTQgQWxmaWFuYSBFLiBTaWJ1ZWEgYW5kIG90aGVyIGNvbnRyaWJ1dG9yc1xuICAqIFJlbGVhc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZVxuICAqIGh0dHBzOi8vZ2l0aHViLmNvbS9maWFucy9XYXZlcy9ibG9iL21hc3Rlci9MSUNFTlNFXG4gICovXG5cbjsoZnVuY3Rpb24gKHdpbmRvdykge1xuICAndXNlIHN0cmljdCc7XG5cbiAgdmFyIFdhdmVzID0gV2F2ZXMgfHwge307XG4gIHZhciAkJCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwuYmluZChkb2N1bWVudCk7XG5cbiAgLy8gRmluZCBleGFjdCBwb3NpdGlvbiBvZiBlbGVtZW50XG4gIGZ1bmN0aW9uIGlzV2luZG93KG9iaikge1xuICAgIHJldHVybiBvYmogIT09IG51bGwgJiYgb2JqID09PSBvYmoud2luZG93O1xuICB9XG5cbiAgZnVuY3Rpb24gZ2V0V2luZG93KGVsZW0pIHtcbiAgICByZXR1cm4gaXNXaW5kb3coZWxlbSkgPyBlbGVtIDogZWxlbS5ub2RlVHlwZSA9PT0gOSAmJiBlbGVtLmRlZmF1bHRWaWV3O1xuICB9XG5cbiAgZnVuY3Rpb24gb2Zmc2V0KGVsZW0pIHtcbiAgICB2YXIgZG9jRWxlbSxcbiAgICAgICAgd2luLFxuICAgICAgICBib3ggPSB7IHRvcDogMCwgbGVmdDogMCB9LFxuICAgICAgICBkb2MgPSBlbGVtICYmIGVsZW0ub3duZXJEb2N1bWVudDtcblxuICAgIGRvY0VsZW0gPSBkb2MuZG9jdW1lbnRFbGVtZW50O1xuXG4gICAgaWYgKHR5cGVvZiBlbGVtLmdldEJvdW5kaW5nQ2xpZW50UmVjdCAhPT0gdHlwZW9mIHVuZGVmaW5lZCkge1xuICAgICAgYm94ID0gZWxlbS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICB9XG4gICAgd2luID0gZ2V0V2luZG93KGRvYyk7XG4gICAgcmV0dXJuIHtcbiAgICAgIHRvcDogYm94LnRvcCArIHdpbi5wYWdlWU9mZnNldCAtIGRvY0VsZW0uY2xpZW50VG9wLFxuICAgICAgbGVmdDogYm94LmxlZnQgKyB3aW4ucGFnZVhPZmZzZXQgLSBkb2NFbGVtLmNsaWVudExlZnRcbiAgICB9O1xuICB9XG5cbiAgZnVuY3Rpb24gY29udmVydFN0eWxlKG9iaikge1xuICAgIHZhciBzdHlsZSA9ICcnO1xuXG4gICAgZm9yICh2YXIgYSBpbiBvYmopIHtcbiAgICAgIGlmIChvYmouaGFzT3duUHJvcGVydHkoYSkpIHtcbiAgICAgICAgc3R5bGUgKz0gYSArICc6JyArIG9ialthXSArICc7JztcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gc3R5bGU7XG4gIH1cblxuICB2YXIgRWZmZWN0ID0ge1xuXG4gICAgLy8gRWZmZWN0IGRlbGF5XG4gICAgZHVyYXRpb246IDc1MCxcblxuICAgIHNob3c6IGZ1bmN0aW9uIChlLCBlbGVtZW50KSB7XG5cbiAgICAgIC8vIERpc2FibGUgcmlnaHQgY2xpY2tcbiAgICAgIGlmIChlLmJ1dHRvbiA9PT0gMikge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG5cbiAgICAgIHZhciBlbCA9IGVsZW1lbnQgfHwgdGhpcztcblxuICAgICAgLy8gQ3JlYXRlIHJpcHBsZVxuICAgICAgdmFyIHJpcHBsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgcmlwcGxlLmNsYXNzTmFtZSA9ICd3YXZlcy1yaXBwbGUnO1xuICAgICAgZWwuYXBwZW5kQ2hpbGQocmlwcGxlKTtcblxuICAgICAgLy8gR2V0IGNsaWNrIGNvb3JkaW5hdGUgYW5kIGVsZW1lbnQgd2l0ZGhcbiAgICAgIHZhciBwb3MgPSBvZmZzZXQoZWwpO1xuICAgICAgdmFyIHJlbGF0aXZlWSA9IGUucGFnZVkgLSBwb3MudG9wO1xuICAgICAgdmFyIHJlbGF0aXZlWCA9IGUucGFnZVggLSBwb3MubGVmdDtcbiAgICAgIHZhciBzY2FsZSA9ICdzY2FsZSgnICsgZWwuY2xpZW50V2lkdGggLyAxMDAgKiAxMCArICcpJztcblxuICAgICAgLy8gU3VwcG9ydCBmb3IgdG91Y2ggZGV2aWNlc1xuICAgICAgaWYgKCd0b3VjaGVzJyBpbiBlKSB7XG4gICAgICAgIHJlbGF0aXZlWSA9IGUudG91Y2hlc1swXS5wYWdlWSAtIHBvcy50b3A7XG4gICAgICAgIHJlbGF0aXZlWCA9IGUudG91Y2hlc1swXS5wYWdlWCAtIHBvcy5sZWZ0O1xuICAgICAgfVxuXG4gICAgICAvLyBBdHRhY2ggZGF0YSB0byBlbGVtZW50XG4gICAgICByaXBwbGUuc2V0QXR0cmlidXRlKCdkYXRhLWhvbGQnLCBEYXRlLm5vdygpKTtcbiAgICAgIHJpcHBsZS5zZXRBdHRyaWJ1dGUoJ2RhdGEtc2NhbGUnLCBzY2FsZSk7XG4gICAgICByaXBwbGUuc2V0QXR0cmlidXRlKCdkYXRhLXgnLCByZWxhdGl2ZVgpO1xuICAgICAgcmlwcGxlLnNldEF0dHJpYnV0ZSgnZGF0YS15JywgcmVsYXRpdmVZKTtcblxuICAgICAgLy8gU2V0IHJpcHBsZSBwb3NpdGlvblxuICAgICAgdmFyIHJpcHBsZVN0eWxlID0ge1xuICAgICAgICAndG9wJzogcmVsYXRpdmVZICsgJ3B4JyxcbiAgICAgICAgJ2xlZnQnOiByZWxhdGl2ZVggKyAncHgnXG4gICAgICB9O1xuXG4gICAgICByaXBwbGUuY2xhc3NOYW1lID0gcmlwcGxlLmNsYXNzTmFtZSArICcgd2F2ZXMtbm90cmFuc2l0aW9uJztcbiAgICAgIHJpcHBsZS5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywgY29udmVydFN0eWxlKHJpcHBsZVN0eWxlKSk7XG4gICAgICByaXBwbGUuY2xhc3NOYW1lID0gcmlwcGxlLmNsYXNzTmFtZS5yZXBsYWNlKCd3YXZlcy1ub3RyYW5zaXRpb24nLCAnJyk7XG5cbiAgICAgIC8vIFNjYWxlIHRoZSByaXBwbGVcbiAgICAgIHJpcHBsZVN0eWxlWyctd2Via2l0LXRyYW5zZm9ybSddID0gc2NhbGU7XG4gICAgICByaXBwbGVTdHlsZVsnLW1vei10cmFuc2Zvcm0nXSA9IHNjYWxlO1xuICAgICAgcmlwcGxlU3R5bGVbJy1tcy10cmFuc2Zvcm0nXSA9IHNjYWxlO1xuICAgICAgcmlwcGxlU3R5bGVbJy1vLXRyYW5zZm9ybSddID0gc2NhbGU7XG4gICAgICByaXBwbGVTdHlsZS50cmFuc2Zvcm0gPSBzY2FsZTtcbiAgICAgIHJpcHBsZVN0eWxlLm9wYWNpdHkgPSAnMSc7XG5cbiAgICAgIHJpcHBsZVN0eWxlWyctd2Via2l0LXRyYW5zaXRpb24tZHVyYXRpb24nXSA9IEVmZmVjdC5kdXJhdGlvbiArICdtcyc7XG4gICAgICByaXBwbGVTdHlsZVsnLW1vei10cmFuc2l0aW9uLWR1cmF0aW9uJ10gPSBFZmZlY3QuZHVyYXRpb24gKyAnbXMnO1xuICAgICAgcmlwcGxlU3R5bGVbJy1vLXRyYW5zaXRpb24tZHVyYXRpb24nXSA9IEVmZmVjdC5kdXJhdGlvbiArICdtcyc7XG4gICAgICByaXBwbGVTdHlsZVsndHJhbnNpdGlvbi1kdXJhdGlvbiddID0gRWZmZWN0LmR1cmF0aW9uICsgJ21zJztcblxuICAgICAgcmlwcGxlU3R5bGVbJy13ZWJraXQtdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb24nXSA9ICdjdWJpYy1iZXppZXIoMC4yNTAsIDAuNDYwLCAwLjQ1MCwgMC45NDApJztcbiAgICAgIHJpcHBsZVN0eWxlWyctbW96LXRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uJ10gPSAnY3ViaWMtYmV6aWVyKDAuMjUwLCAwLjQ2MCwgMC40NTAsIDAuOTQwKSc7XG4gICAgICByaXBwbGVTdHlsZVsnLW8tdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb24nXSA9ICdjdWJpYy1iZXppZXIoMC4yNTAsIDAuNDYwLCAwLjQ1MCwgMC45NDApJztcbiAgICAgIHJpcHBsZVN0eWxlWyd0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbiddID0gJ2N1YmljLWJlemllcigwLjI1MCwgMC40NjAsIDAuNDUwLCAwLjk0MCknO1xuXG4gICAgICByaXBwbGUuc2V0QXR0cmlidXRlKCdzdHlsZScsIGNvbnZlcnRTdHlsZShyaXBwbGVTdHlsZSkpO1xuICAgIH0sXG5cbiAgICBoaWRlOiBmdW5jdGlvbiAoZSkge1xuICAgICAgVG91Y2hIYW5kbGVyLnRvdWNodXAoZSk7XG5cbiAgICAgIHZhciBlbCA9IHRoaXM7XG4gICAgICB2YXIgd2lkdGggPSBlbC5jbGllbnRXaWR0aCAqIDEuNDtcblxuICAgICAgLy8gR2V0IGZpcnN0IHJpcHBsZVxuICAgICAgdmFyIHJpcHBsZSA9IG51bGw7XG4gICAgICB2YXIgcmlwcGxlcyA9IGVsLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ3dhdmVzLXJpcHBsZScpO1xuICAgICAgaWYgKHJpcHBsZXMubGVuZ3RoID4gMCkge1xuICAgICAgICByaXBwbGUgPSByaXBwbGVzW3JpcHBsZXMubGVuZ3RoIC0gMV07XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG5cbiAgICAgIHZhciByZWxhdGl2ZVggPSByaXBwbGUuZ2V0QXR0cmlidXRlKCdkYXRhLXgnKTtcbiAgICAgIHZhciByZWxhdGl2ZVkgPSByaXBwbGUuZ2V0QXR0cmlidXRlKCdkYXRhLXknKTtcbiAgICAgIHZhciBzY2FsZSA9IHJpcHBsZS5nZXRBdHRyaWJ1dGUoJ2RhdGEtc2NhbGUnKTtcblxuICAgICAgLy8gR2V0IGRlbGF5IGJlZXR3ZWVuIG1vdXNlZG93biBhbmQgbW91c2UgbGVhdmVcbiAgICAgIHZhciBkaWZmID0gRGF0ZS5ub3coKSAtIE51bWJlcihyaXBwbGUuZ2V0QXR0cmlidXRlKCdkYXRhLWhvbGQnKSk7XG4gICAgICB2YXIgZGVsYXkgPSAzNTAgLSBkaWZmO1xuXG4gICAgICBpZiAoZGVsYXkgPCAwKSB7XG4gICAgICAgIGRlbGF5ID0gMDtcbiAgICAgIH1cblxuICAgICAgLy8gRmFkZSBvdXQgcmlwcGxlIGFmdGVyIGRlbGF5XG4gICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIHN0eWxlID0ge1xuICAgICAgICAgICd0b3AnOiByZWxhdGl2ZVkgKyAncHgnLFxuICAgICAgICAgICdsZWZ0JzogcmVsYXRpdmVYICsgJ3B4JyxcbiAgICAgICAgICAnb3BhY2l0eSc6ICcwJyxcblxuICAgICAgICAgIC8vIER1cmF0aW9uXG4gICAgICAgICAgJy13ZWJraXQtdHJhbnNpdGlvbi1kdXJhdGlvbic6IEVmZmVjdC5kdXJhdGlvbiArICdtcycsXG4gICAgICAgICAgJy1tb3otdHJhbnNpdGlvbi1kdXJhdGlvbic6IEVmZmVjdC5kdXJhdGlvbiArICdtcycsXG4gICAgICAgICAgJy1vLXRyYW5zaXRpb24tZHVyYXRpb24nOiBFZmZlY3QuZHVyYXRpb24gKyAnbXMnLFxuICAgICAgICAgICd0cmFuc2l0aW9uLWR1cmF0aW9uJzogRWZmZWN0LmR1cmF0aW9uICsgJ21zJyxcbiAgICAgICAgICAnLXdlYmtpdC10cmFuc2Zvcm0nOiBzY2FsZSxcbiAgICAgICAgICAnLW1vei10cmFuc2Zvcm0nOiBzY2FsZSxcbiAgICAgICAgICAnLW1zLXRyYW5zZm9ybSc6IHNjYWxlLFxuICAgICAgICAgICctby10cmFuc2Zvcm0nOiBzY2FsZSxcbiAgICAgICAgICAndHJhbnNmb3JtJzogc2NhbGVcbiAgICAgICAgfTtcblxuICAgICAgICByaXBwbGUuc2V0QXR0cmlidXRlKCdzdHlsZScsIGNvbnZlcnRTdHlsZShzdHlsZSkpO1xuXG4gICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICBlbC5yZW1vdmVDaGlsZChyaXBwbGUpO1xuICAgICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICB9XG4gICAgICAgIH0sIEVmZmVjdC5kdXJhdGlvbik7XG4gICAgICB9LCBkZWxheSk7XG4gICAgfSxcblxuICAgIC8vIExpdHRsZSBoYWNrIHRvIG1ha2UgPGlucHV0PiBjYW4gcGVyZm9ybSB3YXZlcyBlZmZlY3RcbiAgICB3cmFwSW5wdXQ6IGZ1bmN0aW9uIChlbGVtZW50cykge1xuICAgICAgZm9yICh2YXIgYSA9IDA7IGEgPCBlbGVtZW50cy5sZW5ndGg7IGErKykge1xuICAgICAgICB2YXIgZWwgPSBlbGVtZW50c1thXTtcblxuICAgICAgICBpZiAoZWwudGFnTmFtZS50b0xvd2VyQ2FzZSgpID09PSAnaW5wdXQnKSB7XG4gICAgICAgICAgdmFyIHBhcmVudCA9IGVsLnBhcmVudE5vZGU7XG5cbiAgICAgICAgICAvLyBJZiBpbnB1dCBhbHJlYWR5IGhhdmUgcGFyZW50IGp1c3QgcGFzcyB0aHJvdWdoXG4gICAgICAgICAgaWYgKHBhcmVudC50YWdOYW1lLnRvTG93ZXJDYXNlKCkgPT09ICdpJyAmJiBwYXJlbnQuY2xhc3NOYW1lLmluZGV4T2YoJ3dhdmVzLWVmZmVjdCcpICE9PSAtMSkge1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLy8gUHV0IGVsZW1lbnQgY2xhc3MgYW5kIHN0eWxlIHRvIHRoZSBzcGVjaWZpZWQgcGFyZW50XG4gICAgICAgICAgdmFyIHdyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpJyk7XG4gICAgICAgICAgd3JhcHBlci5jbGFzc05hbWUgPSBlbC5jbGFzc05hbWUgKyAnIHdhdmVzLWlucHV0LXdyYXBwZXInO1xuXG4gICAgICAgICAgdmFyIGVsZW1lbnRTdHlsZSA9IGVsLmdldEF0dHJpYnV0ZSgnc3R5bGUnKTtcblxuICAgICAgICAgIGlmICghZWxlbWVudFN0eWxlKSB7XG4gICAgICAgICAgICBlbGVtZW50U3R5bGUgPSAnJztcbiAgICAgICAgICB9XG5cbiAgICAgICAgICB3cmFwcGVyLnNldEF0dHJpYnV0ZSgnc3R5bGUnLCBlbGVtZW50U3R5bGUpO1xuXG4gICAgICAgICAgZWwuY2xhc3NOYW1lID0gJ3dhdmVzLWJ1dHRvbi1pbnB1dCc7XG4gICAgICAgICAgZWwucmVtb3ZlQXR0cmlidXRlKCdzdHlsZScpO1xuXG4gICAgICAgICAgLy8gUHV0IGVsZW1lbnQgYXMgY2hpbGRcbiAgICAgICAgICBwYXJlbnQucmVwbGFjZUNoaWxkKHdyYXBwZXIsIGVsKTtcbiAgICAgICAgICB3cmFwcGVyLmFwcGVuZENoaWxkKGVsKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfTtcblxuICAvKipcbiAgICogRGlzYWJsZSBtb3VzZWRvd24gZXZlbnQgZm9yIDUwMG1zIGR1cmluZyBhbmQgYWZ0ZXIgdG91Y2hcbiAgICovXG4gIHZhciBUb3VjaEhhbmRsZXIgPSB7XG4gICAgLyogdXNlcyBhbiBpbnRlZ2VyIHJhdGhlciB0aGFuIGJvb2wgc28gdGhlcmUncyBubyBpc3N1ZXMgd2l0aFxuICAgICAqIG5lZWRpbmcgdG8gY2xlYXIgdGltZW91dHMgaWYgYW5vdGhlciB0b3VjaCBldmVudCBvY2N1cnJlZFxuICAgICAqIHdpdGhpbiB0aGUgNTAwbXMuIENhbm5vdCBtb3VzZXVwIGJldHdlZW4gdG91Y2hzdGFydCBhbmRcbiAgICAgKiB0b3VjaGVuZCwgbm9yIGluIHRoZSA1MDBtcyBhZnRlciB0b3VjaGVuZC4gKi9cbiAgICB0b3VjaGVzOiAwLFxuICAgIGFsbG93RXZlbnQ6IGZ1bmN0aW9uIChlKSB7XG4gICAgICB2YXIgYWxsb3cgPSB0cnVlO1xuXG4gICAgICBpZiAoZS50eXBlID09PSAndG91Y2hzdGFydCcpIHtcbiAgICAgICAgVG91Y2hIYW5kbGVyLnRvdWNoZXMgKz0gMTsgLy9wdXNoXG4gICAgICB9IGVsc2UgaWYgKGUudHlwZSA9PT0gJ3RvdWNoZW5kJyB8fCBlLnR5cGUgPT09ICd0b3VjaGNhbmNlbCcpIHtcbiAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgaWYgKFRvdWNoSGFuZGxlci50b3VjaGVzID4gMCkge1xuICAgICAgICAgICAgVG91Y2hIYW5kbGVyLnRvdWNoZXMgLT0gMTsgLy9wb3AgYWZ0ZXIgNTAwbXNcbiAgICAgICAgICB9XG4gICAgICAgIH0sIDUwMCk7XG4gICAgICB9IGVsc2UgaWYgKGUudHlwZSA9PT0gJ21vdXNlZG93bicgJiYgVG91Y2hIYW5kbGVyLnRvdWNoZXMgPiAwKSB7XG4gICAgICAgIGFsbG93ID0gZmFsc2U7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBhbGxvdztcbiAgICB9LFxuICAgIHRvdWNodXA6IGZ1bmN0aW9uIChlKSB7XG4gICAgICBUb3VjaEhhbmRsZXIuYWxsb3dFdmVudChlKTtcbiAgICB9XG4gIH07XG5cbiAgLyoqXG4gICAqIERlbGVnYXRlZCBjbGljayBoYW5kbGVyIGZvciAud2F2ZXMtZWZmZWN0IGVsZW1lbnQuXG4gICAqIHJldHVybnMgbnVsbCB3aGVuIC53YXZlcy1lZmZlY3QgZWxlbWVudCBub3QgaW4gXCJjbGljayB0cmVlXCJcbiAgICovXG4gIGZ1bmN0aW9uIGdldFdhdmVzRWZmZWN0RWxlbWVudChlKSB7XG4gICAgaWYgKFRvdWNoSGFuZGxlci5hbGxvd0V2ZW50KGUpID09PSBmYWxzZSkge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgdmFyIGVsZW1lbnQgPSBudWxsO1xuICAgIHZhciB0YXJnZXQgPSBlLnRhcmdldCB8fCBlLnNyY0VsZW1lbnQ7XG5cbiAgICB3aGlsZSAodGFyZ2V0LnBhcmVudE5vZGUgIT09IG51bGwpIHtcbiAgICAgIGlmICghKHRhcmdldCBpbnN0YW5jZW9mIFNWR0VsZW1lbnQpICYmIHRhcmdldC5jbGFzc05hbWUuaW5kZXhPZignd2F2ZXMtZWZmZWN0JykgIT09IC0xKSB7XG4gICAgICAgIGVsZW1lbnQgPSB0YXJnZXQ7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgICAgdGFyZ2V0ID0gdGFyZ2V0LnBhcmVudE5vZGU7XG4gICAgfVxuICAgIHJldHVybiBlbGVtZW50O1xuICB9XG5cbiAgLyoqXG4gICAqIEJ1YmJsZSB0aGUgY2xpY2sgYW5kIHNob3cgZWZmZWN0IGlmIC53YXZlcy1lZmZlY3QgZWxlbSB3YXMgZm91bmRcbiAgICovXG4gIGZ1bmN0aW9uIHNob3dFZmZlY3QoZSkge1xuICAgIHZhciBlbGVtZW50ID0gZ2V0V2F2ZXNFZmZlY3RFbGVtZW50KGUpO1xuXG4gICAgaWYgKGVsZW1lbnQgIT09IG51bGwpIHtcbiAgICAgIEVmZmVjdC5zaG93KGUsIGVsZW1lbnQpO1xuXG4gICAgICBpZiAoJ29udG91Y2hzdGFydCcgaW4gd2luZG93KSB7XG4gICAgICAgIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2hlbmQnLCBFZmZlY3QuaGlkZSwgZmFsc2UpO1xuICAgICAgICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNoY2FuY2VsJywgRWZmZWN0LmhpZGUsIGZhbHNlKTtcbiAgICAgIH1cblxuICAgICAgZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZXVwJywgRWZmZWN0LmhpZGUsIGZhbHNlKTtcbiAgICAgIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VsZWF2ZScsIEVmZmVjdC5oaWRlLCBmYWxzZSk7XG4gICAgICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2RyYWdlbmQnLCBFZmZlY3QuaGlkZSwgZmFsc2UpO1xuICAgIH1cbiAgfVxuXG4gIFdhdmVzLmRpc3BsYXlFZmZlY3QgPSBmdW5jdGlvbiAob3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuXG4gICAgaWYgKCdkdXJhdGlvbicgaW4gb3B0aW9ucykge1xuICAgICAgRWZmZWN0LmR1cmF0aW9uID0gb3B0aW9ucy5kdXJhdGlvbjtcbiAgICB9XG5cbiAgICAvL1dyYXAgaW5wdXQgaW5zaWRlIDxpPiB0YWdcbiAgICBFZmZlY3Qud3JhcElucHV0KCQkKCcud2F2ZXMtZWZmZWN0JykpO1xuXG4gICAgaWYgKCdvbnRvdWNoc3RhcnQnIGluIHdpbmRvdykge1xuICAgICAgZG9jdW1lbnQuYm9keS5hZGRFdmVudExpc3RlbmVyKCd0b3VjaHN0YXJ0Jywgc2hvd0VmZmVjdCwgZmFsc2UpO1xuICAgIH1cblxuICAgIGRvY3VtZW50LmJvZHkuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgc2hvd0VmZmVjdCwgZmFsc2UpO1xuICB9O1xuXG4gIC8qKlxuICAgKiBBdHRhY2ggV2F2ZXMgdG8gYW4gaW5wdXQgZWxlbWVudCAob3IgYW55IGVsZW1lbnQgd2hpY2ggZG9lc24ndFxuICAgKiBidWJibGUgbW91c2V1cC9tb3VzZWRvd24gZXZlbnRzKS5cbiAgICogICBJbnRlbmRlZCB0byBiZSB1c2VkIHdpdGggZHluYW1pY2FsbHkgbG9hZGVkIGZvcm1zL2lucHV0cywgb3JcbiAgICogd2hlcmUgdGhlIHVzZXIgZG9lc24ndCB3YW50IGEgZGVsZWdhdGVkIGNsaWNrIGhhbmRsZXIuXG4gICAqL1xuICBXYXZlcy5hdHRhY2ggPSBmdW5jdGlvbiAoZWxlbWVudCkge1xuICAgIC8vRlVUVVJFOiBhdXRvbWF0aWNhbGx5IGFkZCB3YXZlcyBjbGFzc2VzIGFuZCBhbGxvdyB1c2Vyc1xuICAgIC8vIHRvIHNwZWNpZnkgdGhlbSB3aXRoIGFuIG9wdGlvbnMgcGFyYW0/IEVnLiBsaWdodC9jbGFzc2ljL2J1dHRvblxuICAgIGlmIChlbGVtZW50LnRhZ05hbWUudG9Mb3dlckNhc2UoKSA9PT0gJ2lucHV0Jykge1xuICAgICAgRWZmZWN0LndyYXBJbnB1dChbZWxlbWVudF0pO1xuICAgICAgZWxlbWVudCA9IGVsZW1lbnQucGFyZW50Tm9kZTtcbiAgICB9XG5cbiAgICBpZiAoJ29udG91Y2hzdGFydCcgaW4gd2luZG93KSB7XG4gICAgICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNoc3RhcnQnLCBzaG93RWZmZWN0LCBmYWxzZSk7XG4gICAgfVxuXG4gICAgZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCBzaG93RWZmZWN0LCBmYWxzZSk7XG4gIH07XG5cbiAgd2luZG93LldhdmVzID0gV2F2ZXM7XG5cbiAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsIGZ1bmN0aW9uICgpIHtcbiAgICBXYXZlcy5kaXNwbGF5RWZmZWN0KCk7XG4gIH0sIGZhbHNlKTtcbn0pKHdpbmRvdyk7XG47KGZ1bmN0aW9uICgkKSB7XG5cbiAgdmFyIG1ldGhvZHMgPSB7XG4gICAgaW5pdDogZnVuY3Rpb24gKG9wdGlvbnMpIHtcbiAgICAgIHZhciBkZWZhdWx0cyA9IHtcbiAgICAgICAgbWVudVdpZHRoOiAzMDAsXG4gICAgICAgIGVkZ2U6ICdsZWZ0JyxcbiAgICAgICAgY2xvc2VPbkNsaWNrOiBmYWxzZSxcbiAgICAgICAgZHJhZ2dhYmxlOiB0cnVlLFxuICAgICAgICBvbk9wZW46IG51bGwsXG4gICAgICAgIG9uQ2xvc2U6IG51bGxcbiAgICAgIH07XG4gICAgICBvcHRpb25zID0gJC5leHRlbmQoZGVmYXVsdHMsIG9wdGlvbnMpO1xuXG4gICAgICAkKHRoaXMpLmVhY2goZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgJHRoaXMgPSAkKHRoaXMpO1xuICAgICAgICB2YXIgbWVudUlkID0gJHRoaXMuYXR0cignZGF0YS1hY3RpdmF0ZXMnKTtcbiAgICAgICAgdmFyIG1lbnUgPSAkKFwiI1wiICsgbWVudUlkKTtcblxuICAgICAgICAvLyBTZXQgdG8gd2lkdGhcbiAgICAgICAgaWYgKG9wdGlvbnMubWVudVdpZHRoICE9IDMwMCkge1xuICAgICAgICAgIG1lbnUuY3NzKCd3aWR0aCcsIG9wdGlvbnMubWVudVdpZHRoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIEFkZCBUb3VjaCBBcmVhXG4gICAgICAgIHZhciAkZHJhZ1RhcmdldCA9ICQoJy5kcmFnLXRhcmdldFtkYXRhLXNpZGVuYXY9XCInICsgbWVudUlkICsgJ1wiXScpO1xuICAgICAgICBpZiAob3B0aW9ucy5kcmFnZ2FibGUpIHtcbiAgICAgICAgICAvLyBSZWdlbmVyYXRlIGRyYWdUYXJnZXRcbiAgICAgICAgICBpZiAoJGRyYWdUYXJnZXQubGVuZ3RoKSB7XG4gICAgICAgICAgICAkZHJhZ1RhcmdldC5yZW1vdmUoKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAkZHJhZ1RhcmdldCA9ICQoJzxkaXYgY2xhc3M9XCJkcmFnLXRhcmdldFwiPjwvZGl2PicpLmF0dHIoJ2RhdGEtc2lkZW5hdicsIG1lbnVJZCk7XG4gICAgICAgICAgJCgnYm9keScpLmFwcGVuZCgkZHJhZ1RhcmdldCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgJGRyYWdUYXJnZXQgPSAkKCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAob3B0aW9ucy5lZGdlID09ICdsZWZ0Jykge1xuICAgICAgICAgIG1lbnUuY3NzKCd0cmFuc2Zvcm0nLCAndHJhbnNsYXRlWCgtMTAwJSknKTtcbiAgICAgICAgICAkZHJhZ1RhcmdldC5jc3MoeyAnbGVmdCc6IDAgfSk7IC8vIEFkZCBUb3VjaCBBcmVhXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgbWVudS5hZGRDbGFzcygncmlnaHQtYWxpZ25lZCcpIC8vIENoYW5nZSB0ZXh0LWFsaWdubWVudCB0byByaWdodFxuICAgICAgICAgIC5jc3MoJ3RyYW5zZm9ybScsICd0cmFuc2xhdGVYKDEwMCUpJyk7XG4gICAgICAgICAgJGRyYWdUYXJnZXQuY3NzKHsgJ3JpZ2h0JzogMCB9KTsgLy8gQWRkIFRvdWNoIEFyZWFcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIElmIGZpeGVkIHNpZGVuYXYsIGJyaW5nIG1lbnUgb3V0XG4gICAgICAgIGlmIChtZW51Lmhhc0NsYXNzKCdmaXhlZCcpKSB7XG4gICAgICAgICAgaWYgKHdpbmRvdy5pbm5lcldpZHRoID4gOTkyKSB7XG4gICAgICAgICAgICBtZW51LmNzcygndHJhbnNmb3JtJywgJ3RyYW5zbGF0ZVgoMCknKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvLyBXaW5kb3cgcmVzaXplIHRvIHJlc2V0IG9uIGxhcmdlIHNjcmVlbnMgZml4ZWRcbiAgICAgICAgaWYgKG1lbnUuaGFzQ2xhc3MoJ2ZpeGVkJykpIHtcbiAgICAgICAgICAkKHdpbmRvdykucmVzaXplKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGlmICh3aW5kb3cuaW5uZXJXaWR0aCA+IDk5Mikge1xuICAgICAgICAgICAgICAvLyBDbG9zZSBtZW51IGlmIHdpbmRvdyBpcyByZXNpemVkIGJpZ2dlciB0aGFuIDk5MiBhbmQgdXNlciBoYXMgZml4ZWQgc2lkZW5hdlxuICAgICAgICAgICAgICBpZiAoJCgnI3NpZGVuYXYtb3ZlcmxheScpLmxlbmd0aCAhPT0gMCAmJiBtZW51T3V0KSB7XG4gICAgICAgICAgICAgICAgcmVtb3ZlTWVudSh0cnVlKTtcbiAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAvLyBtZW51LnJlbW92ZUF0dHIoJ3N0eWxlJyk7XG4gICAgICAgICAgICAgICAgbWVudS5jc3MoJ3RyYW5zZm9ybScsICd0cmFuc2xhdGVYKDAlKScpO1xuICAgICAgICAgICAgICAgIC8vIG1lbnUuY3NzKCd3aWR0aCcsIG9wdGlvbnMubWVudVdpZHRoKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIGlmIChtZW51T3V0ID09PSBmYWxzZSkge1xuICAgICAgICAgICAgICBpZiAob3B0aW9ucy5lZGdlID09PSAnbGVmdCcpIHtcbiAgICAgICAgICAgICAgICBtZW51LmNzcygndHJhbnNmb3JtJywgJ3RyYW5zbGF0ZVgoLTEwMCUpJyk7XG4gICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgbWVudS5jc3MoJ3RyYW5zZm9ybScsICd0cmFuc2xhdGVYKDEwMCUpJyk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIGlmIGNsb3NlT25DbGljaywgdGhlbiBhZGQgY2xvc2UgZXZlbnQgZm9yIGFsbCBhIHRhZ3MgaW4gc2lkZSBzaWRlTmF2XG4gICAgICAgIGlmIChvcHRpb25zLmNsb3NlT25DbGljayA9PT0gdHJ1ZSkge1xuICAgICAgICAgIG1lbnUub24oXCJjbGljay5pdGVtY2xpY2tcIiwgXCJhOm5vdCguY29sbGFwc2libGUtaGVhZGVyKVwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBpZiAoISh3aW5kb3cuaW5uZXJXaWR0aCA+IDk5MiAmJiBtZW51Lmhhc0NsYXNzKCdmaXhlZCcpKSkge1xuICAgICAgICAgICAgICByZW1vdmVNZW51KCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgcmVtb3ZlTWVudSA9IGZ1bmN0aW9uIChyZXN0b3JlTmF2KSB7XG4gICAgICAgICAgcGFubmluZyA9IGZhbHNlO1xuICAgICAgICAgIG1lbnVPdXQgPSBmYWxzZTtcbiAgICAgICAgICAvLyBSZWVuYWJsZSBzY3JvbGxpbmdcbiAgICAgICAgICAkKCdib2R5JykuY3NzKHtcbiAgICAgICAgICAgIG92ZXJmbG93OiAnJyxcbiAgICAgICAgICAgIHdpZHRoOiAnJ1xuICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgJCgnI3NpZGVuYXYtb3ZlcmxheScpLnZlbG9jaXR5KHsgb3BhY2l0eTogMCB9LCB7IGR1cmF0aW9uOiAyMDAsXG4gICAgICAgICAgICBxdWV1ZTogZmFsc2UsIGVhc2luZzogJ2Vhc2VPdXRRdWFkJyxcbiAgICAgICAgICAgIGNvbXBsZXRlOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICQodGhpcykucmVtb3ZlKCk7XG4gICAgICAgICAgICB9IH0pO1xuICAgICAgICAgIGlmIChvcHRpb25zLmVkZ2UgPT09ICdsZWZ0Jykge1xuICAgICAgICAgICAgLy8gUmVzZXQgcGhhbnRvbSBkaXZcbiAgICAgICAgICAgICRkcmFnVGFyZ2V0LmNzcyh7IHdpZHRoOiAnJywgcmlnaHQ6ICcnLCBsZWZ0OiAnMCcgfSk7XG4gICAgICAgICAgICBtZW51LnZlbG9jaXR5KHsgJ3RyYW5zbGF0ZVgnOiAnLTEwMCUnIH0sIHsgZHVyYXRpb246IDIwMCxcbiAgICAgICAgICAgICAgcXVldWU6IGZhbHNlLFxuICAgICAgICAgICAgICBlYXNpbmc6ICdlYXNlT3V0Q3ViaWMnLFxuICAgICAgICAgICAgICBjb21wbGV0ZTogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIGlmIChyZXN0b3JlTmF2ID09PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgICAvLyBSZXN0b3JlIEZpeGVkIHNpZGVuYXZcbiAgICAgICAgICAgICAgICAgIG1lbnUucmVtb3ZlQXR0cignc3R5bGUnKTtcbiAgICAgICAgICAgICAgICAgIG1lbnUuY3NzKCd3aWR0aCcsIG9wdGlvbnMubWVudVdpZHRoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIC8vIFJlc2V0IHBoYW50b20gZGl2XG4gICAgICAgICAgICAkZHJhZ1RhcmdldC5jc3MoeyB3aWR0aDogJycsIHJpZ2h0OiAnMCcsIGxlZnQ6ICcnIH0pO1xuICAgICAgICAgICAgbWVudS52ZWxvY2l0eSh7ICd0cmFuc2xhdGVYJzogJzEwMCUnIH0sIHsgZHVyYXRpb246IDIwMCxcbiAgICAgICAgICAgICAgcXVldWU6IGZhbHNlLFxuICAgICAgICAgICAgICBlYXNpbmc6ICdlYXNlT3V0Q3ViaWMnLFxuICAgICAgICAgICAgICBjb21wbGV0ZTogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIGlmIChyZXN0b3JlTmF2ID09PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgICAvLyBSZXN0b3JlIEZpeGVkIHNpZGVuYXZcbiAgICAgICAgICAgICAgICAgIG1lbnUucmVtb3ZlQXR0cignc3R5bGUnKTtcbiAgICAgICAgICAgICAgICAgIG1lbnUuY3NzKCd3aWR0aCcsIG9wdGlvbnMubWVudVdpZHRoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC8vIENhbGxiYWNrXG4gICAgICAgICAgaWYgKHR5cGVvZiBvcHRpb25zLm9uQ2xvc2UgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIG9wdGlvbnMub25DbG9zZS5jYWxsKHRoaXMsIG1lbnUpO1xuICAgICAgICAgIH1cbiAgICAgICAgfTtcblxuICAgICAgICAvLyBUb3VjaCBFdmVudFxuICAgICAgICB2YXIgcGFubmluZyA9IGZhbHNlO1xuICAgICAgICB2YXIgbWVudU91dCA9IGZhbHNlO1xuXG4gICAgICAgIGlmIChvcHRpb25zLmRyYWdnYWJsZSkge1xuICAgICAgICAgICRkcmFnVGFyZ2V0Lm9uKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGlmIChtZW51T3V0KSB7XG4gICAgICAgICAgICAgIHJlbW92ZU1lbnUoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KTtcblxuICAgICAgICAgICRkcmFnVGFyZ2V0LmhhbW1lcih7XG4gICAgICAgICAgICBwcmV2ZW50X2RlZmF1bHQ6IGZhbHNlXG4gICAgICAgICAgfSkub24oJ3BhbicsIGZ1bmN0aW9uIChlKSB7XG5cbiAgICAgICAgICAgIGlmIChlLmdlc3R1cmUucG9pbnRlclR5cGUgPT0gXCJ0b3VjaFwiKSB7XG5cbiAgICAgICAgICAgICAgdmFyIGRpcmVjdGlvbiA9IGUuZ2VzdHVyZS5kaXJlY3Rpb247XG4gICAgICAgICAgICAgIHZhciB4ID0gZS5nZXN0dXJlLmNlbnRlci54O1xuICAgICAgICAgICAgICB2YXIgeSA9IGUuZ2VzdHVyZS5jZW50ZXIueTtcbiAgICAgICAgICAgICAgdmFyIHZlbG9jaXR5WCA9IGUuZ2VzdHVyZS52ZWxvY2l0eVg7XG5cbiAgICAgICAgICAgICAgLy8gVmVydGljYWwgc2Nyb2xsIGJ1Z2ZpeFxuICAgICAgICAgICAgICBpZiAoeCA9PT0gMCAmJiB5ID09PSAwKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgLy8gRGlzYWJsZSBTY3JvbGxpbmdcbiAgICAgICAgICAgICAgdmFyICRib2R5ID0gJCgnYm9keScpO1xuICAgICAgICAgICAgICB2YXIgJG92ZXJsYXkgPSAkKCcjc2lkZW5hdi1vdmVybGF5Jyk7XG4gICAgICAgICAgICAgIHZhciBvbGRXaWR0aCA9ICRib2R5LmlubmVyV2lkdGgoKTtcbiAgICAgICAgICAgICAgJGJvZHkuY3NzKCdvdmVyZmxvdycsICdoaWRkZW4nKTtcbiAgICAgICAgICAgICAgJGJvZHkud2lkdGgob2xkV2lkdGgpO1xuXG4gICAgICAgICAgICAgIC8vIElmIG92ZXJsYXkgZG9lcyBub3QgZXhpc3QsIGNyZWF0ZSBvbmUgYW5kIGlmIGl0IGlzIGNsaWNrZWQsIGNsb3NlIG1lbnVcbiAgICAgICAgICAgICAgaWYgKCRvdmVybGF5Lmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgICAgICRvdmVybGF5ID0gJCgnPGRpdiBpZD1cInNpZGVuYXYtb3ZlcmxheVwiPjwvZGl2PicpO1xuICAgICAgICAgICAgICAgICRvdmVybGF5LmNzcygnb3BhY2l0eScsIDApLmNsaWNrKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgIHJlbW92ZU1lbnUoKTtcbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgIC8vIFJ1biAnb25PcGVuJyB3aGVuIHNpZGVuYXYgaXMgb3BlbmVkIHZpYSB0b3VjaC9zd2lwZSBpZiBhcHBsaWNhYmxlXG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBvcHRpb25zLm9uT3BlbiA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgICAgICAgb3B0aW9ucy5vbk9wZW4uY2FsbCh0aGlzLCBtZW51KTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAkKCdib2R5JykuYXBwZW5kKCRvdmVybGF5KTtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIC8vIEtlZXAgd2l0aGluIGJvdW5kYXJpZXNcbiAgICAgICAgICAgICAgaWYgKG9wdGlvbnMuZWRnZSA9PT0gJ2xlZnQnKSB7XG4gICAgICAgICAgICAgICAgaWYgKHggPiBvcHRpb25zLm1lbnVXaWR0aCkge1xuICAgICAgICAgICAgICAgICAgeCA9IG9wdGlvbnMubWVudVdpZHRoO1xuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoeCA8IDApIHtcbiAgICAgICAgICAgICAgICAgIHggPSAwO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIGlmIChvcHRpb25zLmVkZ2UgPT09ICdsZWZ0Jykge1xuICAgICAgICAgICAgICAgIC8vIExlZnQgRGlyZWN0aW9uXG4gICAgICAgICAgICAgICAgaWYgKHggPCBvcHRpb25zLm1lbnVXaWR0aCAvIDIpIHtcbiAgICAgICAgICAgICAgICAgIG1lbnVPdXQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLy8gUmlnaHQgRGlyZWN0aW9uXG4gICAgICAgICAgICAgICAgZWxzZSBpZiAoeCA+PSBvcHRpb25zLm1lbnVXaWR0aCAvIDIpIHtcbiAgICAgICAgICAgICAgICAgICAgbWVudU91dCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgbWVudS5jc3MoJ3RyYW5zZm9ybScsICd0cmFuc2xhdGVYKCcgKyAoeCAtIG9wdGlvbnMubWVudVdpZHRoKSArICdweCknKTtcbiAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAvLyBMZWZ0IERpcmVjdGlvblxuICAgICAgICAgICAgICAgIGlmICh4IDwgd2luZG93LmlubmVyV2lkdGggLSBvcHRpb25zLm1lbnVXaWR0aCAvIDIpIHtcbiAgICAgICAgICAgICAgICAgIG1lbnVPdXQgPSB0cnVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvLyBSaWdodCBEaXJlY3Rpb25cbiAgICAgICAgICAgICAgICBlbHNlIGlmICh4ID49IHdpbmRvdy5pbm5lcldpZHRoIC0gb3B0aW9ucy5tZW51V2lkdGggLyAyKSB7XG4gICAgICAgICAgICAgICAgICAgIG1lbnVPdXQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB2YXIgcmlnaHRQb3MgPSB4IC0gb3B0aW9ucy5tZW51V2lkdGggLyAyO1xuICAgICAgICAgICAgICAgIGlmIChyaWdodFBvcyA8IDApIHtcbiAgICAgICAgICAgICAgICAgIHJpZ2h0UG9zID0gMDtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBtZW51LmNzcygndHJhbnNmb3JtJywgJ3RyYW5zbGF0ZVgoJyArIHJpZ2h0UG9zICsgJ3B4KScpO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgLy8gUGVyY2VudGFnZSBvdmVybGF5XG4gICAgICAgICAgICAgIHZhciBvdmVybGF5UGVyYztcbiAgICAgICAgICAgICAgaWYgKG9wdGlvbnMuZWRnZSA9PT0gJ2xlZnQnKSB7XG4gICAgICAgICAgICAgICAgb3ZlcmxheVBlcmMgPSB4IC8gb3B0aW9ucy5tZW51V2lkdGg7XG4gICAgICAgICAgICAgICAgJG92ZXJsYXkudmVsb2NpdHkoeyBvcGFjaXR5OiBvdmVybGF5UGVyYyB9LCB7IGR1cmF0aW9uOiAxMCwgcXVldWU6IGZhbHNlLCBlYXNpbmc6ICdlYXNlT3V0UXVhZCcgfSk7XG4gICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgb3ZlcmxheVBlcmMgPSBNYXRoLmFicygoeCAtIHdpbmRvdy5pbm5lcldpZHRoKSAvIG9wdGlvbnMubWVudVdpZHRoKTtcbiAgICAgICAgICAgICAgICAkb3ZlcmxheS52ZWxvY2l0eSh7IG9wYWNpdHk6IG92ZXJsYXlQZXJjIH0sIHsgZHVyYXRpb246IDEwLCBxdWV1ZTogZmFsc2UsIGVhc2luZzogJ2Vhc2VPdXRRdWFkJyB9KTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pLm9uKCdwYW5lbmQnLCBmdW5jdGlvbiAoZSkge1xuXG4gICAgICAgICAgICBpZiAoZS5nZXN0dXJlLnBvaW50ZXJUeXBlID09IFwidG91Y2hcIikge1xuICAgICAgICAgICAgICB2YXIgJG92ZXJsYXkgPSAkKCcjc2lkZW5hdi1vdmVybGF5Jyk7XG4gICAgICAgICAgICAgIHZhciB2ZWxvY2l0eVggPSBlLmdlc3R1cmUudmVsb2NpdHlYO1xuICAgICAgICAgICAgICB2YXIgeCA9IGUuZ2VzdHVyZS5jZW50ZXIueDtcbiAgICAgICAgICAgICAgdmFyIGxlZnRQb3MgPSB4IC0gb3B0aW9ucy5tZW51V2lkdGg7XG4gICAgICAgICAgICAgIHZhciByaWdodFBvcyA9IHggLSBvcHRpb25zLm1lbnVXaWR0aCAvIDI7XG4gICAgICAgICAgICAgIGlmIChsZWZ0UG9zID4gMCkge1xuICAgICAgICAgICAgICAgIGxlZnRQb3MgPSAwO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIGlmIChyaWdodFBvcyA8IDApIHtcbiAgICAgICAgICAgICAgICByaWdodFBvcyA9IDA7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgcGFubmluZyA9IGZhbHNlO1xuXG4gICAgICAgICAgICAgIGlmIChvcHRpb25zLmVkZ2UgPT09ICdsZWZ0Jykge1xuICAgICAgICAgICAgICAgIC8vIElmIHZlbG9jaXR5WCA8PSAwLjMgdGhlbiB0aGUgdXNlciBpcyBmbGluZ2luZyB0aGUgbWVudSBjbG9zZWQgc28gaWdub3JlIG1lbnVPdXRcbiAgICAgICAgICAgICAgICBpZiAobWVudU91dCAmJiB2ZWxvY2l0eVggPD0gMC4zIHx8IHZlbG9jaXR5WCA8IC0wLjUpIHtcbiAgICAgICAgICAgICAgICAgIC8vIFJldHVybiBtZW51IHRvIG9wZW5cbiAgICAgICAgICAgICAgICAgIGlmIChsZWZ0UG9zICE9PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgIG1lbnUudmVsb2NpdHkoeyAndHJhbnNsYXRlWCc6IFswLCBsZWZ0UG9zXSB9LCB7IGR1cmF0aW9uOiAzMDAsIHF1ZXVlOiBmYWxzZSwgZWFzaW5nOiAnZWFzZU91dFF1YWQnIH0pO1xuICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAkb3ZlcmxheS52ZWxvY2l0eSh7IG9wYWNpdHk6IDEgfSwgeyBkdXJhdGlvbjogNTAsIHF1ZXVlOiBmYWxzZSwgZWFzaW5nOiAnZWFzZU91dFF1YWQnIH0pO1xuICAgICAgICAgICAgICAgICAgJGRyYWdUYXJnZXQuY3NzKHsgd2lkdGg6ICc1MCUnLCByaWdodDogMCwgbGVmdDogJycgfSk7XG4gICAgICAgICAgICAgICAgICBtZW51T3V0ID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKCFtZW51T3V0IHx8IHZlbG9jaXR5WCA+IDAuMykge1xuICAgICAgICAgICAgICAgICAgLy8gRW5hYmxlIFNjcm9sbGluZ1xuICAgICAgICAgICAgICAgICAgJCgnYm9keScpLmNzcyh7XG4gICAgICAgICAgICAgICAgICAgIG92ZXJmbG93OiAnJyxcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6ICcnXG4gICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgIC8vIFNsaWRlIG1lbnUgY2xvc2VkXG4gICAgICAgICAgICAgICAgICBtZW51LnZlbG9jaXR5KHsgJ3RyYW5zbGF0ZVgnOiBbLTEgKiBvcHRpb25zLm1lbnVXaWR0aCAtIDEwLCBsZWZ0UG9zXSB9LCB7IGR1cmF0aW9uOiAyMDAsIHF1ZXVlOiBmYWxzZSwgZWFzaW5nOiAnZWFzZU91dFF1YWQnIH0pO1xuICAgICAgICAgICAgICAgICAgJG92ZXJsYXkudmVsb2NpdHkoeyBvcGFjaXR5OiAwIH0sIHsgZHVyYXRpb246IDIwMCwgcXVldWU6IGZhbHNlLCBlYXNpbmc6ICdlYXNlT3V0UXVhZCcsXG4gICAgICAgICAgICAgICAgICAgIGNvbXBsZXRlOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgLy8gUnVuICdvbkNsb3NlJyB3aGVuIHNpZGVuYXYgaXMgY2xvc2VkIHZpYSB0b3VjaC9zd2lwZSBpZiBhcHBsaWNhYmxlXG4gICAgICAgICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBvcHRpb25zLm9uQ2xvc2UgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG9wdGlvbnMub25DbG9zZS5jYWxsKHRoaXMsIG1lbnUpO1xuICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICQodGhpcykucmVtb3ZlKCk7XG4gICAgICAgICAgICAgICAgICAgIH0gfSk7XG4gICAgICAgICAgICAgICAgICAkZHJhZ1RhcmdldC5jc3MoeyB3aWR0aDogJzEwcHgnLCByaWdodDogJycsIGxlZnQ6IDAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGlmIChtZW51T3V0ICYmIHZlbG9jaXR5WCA+PSAtMC4zIHx8IHZlbG9jaXR5WCA+IDAuNSkge1xuICAgICAgICAgICAgICAgICAgLy8gUmV0dXJuIG1lbnUgdG8gb3BlblxuICAgICAgICAgICAgICAgICAgaWYgKHJpZ2h0UG9zICE9PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgIG1lbnUudmVsb2NpdHkoeyAndHJhbnNsYXRlWCc6IFswLCByaWdodFBvc10gfSwgeyBkdXJhdGlvbjogMzAwLCBxdWV1ZTogZmFsc2UsIGVhc2luZzogJ2Vhc2VPdXRRdWFkJyB9KTtcbiAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgJG92ZXJsYXkudmVsb2NpdHkoeyBvcGFjaXR5OiAxIH0sIHsgZHVyYXRpb246IDUwLCBxdWV1ZTogZmFsc2UsIGVhc2luZzogJ2Vhc2VPdXRRdWFkJyB9KTtcbiAgICAgICAgICAgICAgICAgICRkcmFnVGFyZ2V0LmNzcyh7IHdpZHRoOiAnNTAlJywgcmlnaHQ6ICcnLCBsZWZ0OiAwIH0pO1xuICAgICAgICAgICAgICAgICAgbWVudU91dCA9IHRydWU7XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmICghbWVudU91dCB8fCB2ZWxvY2l0eVggPCAtMC4zKSB7XG4gICAgICAgICAgICAgICAgICAvLyBFbmFibGUgU2Nyb2xsaW5nXG4gICAgICAgICAgICAgICAgICAkKCdib2R5JykuY3NzKHtcbiAgICAgICAgICAgICAgICAgICAgb3ZlcmZsb3c6ICcnLFxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogJydcbiAgICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgICAvLyBTbGlkZSBtZW51IGNsb3NlZFxuICAgICAgICAgICAgICAgICAgbWVudS52ZWxvY2l0eSh7ICd0cmFuc2xhdGVYJzogW29wdGlvbnMubWVudVdpZHRoICsgMTAsIHJpZ2h0UG9zXSB9LCB7IGR1cmF0aW9uOiAyMDAsIHF1ZXVlOiBmYWxzZSwgZWFzaW5nOiAnZWFzZU91dFF1YWQnIH0pO1xuICAgICAgICAgICAgICAgICAgJG92ZXJsYXkudmVsb2NpdHkoeyBvcGFjaXR5OiAwIH0sIHsgZHVyYXRpb246IDIwMCwgcXVldWU6IGZhbHNlLCBlYXNpbmc6ICdlYXNlT3V0UXVhZCcsXG4gICAgICAgICAgICAgICAgICAgIGNvbXBsZXRlOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgLy8gUnVuICdvbkNsb3NlJyB3aGVuIHNpZGVuYXYgaXMgY2xvc2VkIHZpYSB0b3VjaC9zd2lwZSBpZiBhcHBsaWNhYmxlXG4gICAgICAgICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBvcHRpb25zLm9uQ2xvc2UgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG9wdGlvbnMub25DbG9zZS5jYWxsKHRoaXMsIG1lbnUpO1xuICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICQodGhpcykucmVtb3ZlKCk7XG4gICAgICAgICAgICAgICAgICAgIH0gfSk7XG4gICAgICAgICAgICAgICAgICAkZHJhZ1RhcmdldC5jc3MoeyB3aWR0aDogJzEwcHgnLCByaWdodDogMCwgbGVmdDogJycgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICAkdGhpcy5vZmYoJ2NsaWNrLnNpZGVuYXYnKS5vbignY2xpY2suc2lkZW5hdicsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICBpZiAobWVudU91dCA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgbWVudU91dCA9IGZhbHNlO1xuICAgICAgICAgICAgcGFubmluZyA9IGZhbHNlO1xuICAgICAgICAgICAgcmVtb3ZlTWVudSgpO1xuICAgICAgICAgIH0gZWxzZSB7XG5cbiAgICAgICAgICAgIC8vIERpc2FibGUgU2Nyb2xsaW5nXG4gICAgICAgICAgICB2YXIgJGJvZHkgPSAkKCdib2R5Jyk7XG4gICAgICAgICAgICB2YXIgJG92ZXJsYXkgPSAkKCc8ZGl2IGlkPVwic2lkZW5hdi1vdmVybGF5XCI+PC9kaXY+Jyk7XG4gICAgICAgICAgICB2YXIgb2xkV2lkdGggPSAkYm9keS5pbm5lcldpZHRoKCk7XG4gICAgICAgICAgICAkYm9keS5jc3MoJ292ZXJmbG93JywgJ2hpZGRlbicpO1xuICAgICAgICAgICAgJGJvZHkud2lkdGgob2xkV2lkdGgpO1xuXG4gICAgICAgICAgICAvLyBQdXNoIGN1cnJlbnQgZHJhZyB0YXJnZXQgb24gdG9wIG9mIERPTSB0cmVlXG4gICAgICAgICAgICAkKCdib2R5JykuYXBwZW5kKCRkcmFnVGFyZ2V0KTtcblxuICAgICAgICAgICAgaWYgKG9wdGlvbnMuZWRnZSA9PT0gJ2xlZnQnKSB7XG4gICAgICAgICAgICAgICRkcmFnVGFyZ2V0LmNzcyh7IHdpZHRoOiAnNTAlJywgcmlnaHQ6IDAsIGxlZnQ6ICcnIH0pO1xuICAgICAgICAgICAgICBtZW51LnZlbG9jaXR5KHsgJ3RyYW5zbGF0ZVgnOiBbMCwgLTEgKiBvcHRpb25zLm1lbnVXaWR0aF0gfSwgeyBkdXJhdGlvbjogMzAwLCBxdWV1ZTogZmFsc2UsIGVhc2luZzogJ2Vhc2VPdXRRdWFkJyB9KTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICRkcmFnVGFyZ2V0LmNzcyh7IHdpZHRoOiAnNTAlJywgcmlnaHQ6ICcnLCBsZWZ0OiAwIH0pO1xuICAgICAgICAgICAgICBtZW51LnZlbG9jaXR5KHsgJ3RyYW5zbGF0ZVgnOiBbMCwgb3B0aW9ucy5tZW51V2lkdGhdIH0sIHsgZHVyYXRpb246IDMwMCwgcXVldWU6IGZhbHNlLCBlYXNpbmc6ICdlYXNlT3V0UXVhZCcgfSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIE92ZXJsYXkgY2xvc2Ugb24gY2xpY2tcbiAgICAgICAgICAgICRvdmVybGF5LmNzcygnb3BhY2l0eScsIDApLmNsaWNrKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgbWVudU91dCA9IGZhbHNlO1xuICAgICAgICAgICAgICBwYW5uaW5nID0gZmFsc2U7XG4gICAgICAgICAgICAgIHJlbW92ZU1lbnUoKTtcbiAgICAgICAgICAgICAgJG92ZXJsYXkudmVsb2NpdHkoeyBvcGFjaXR5OiAwIH0sIHsgZHVyYXRpb246IDMwMCwgcXVldWU6IGZhbHNlLCBlYXNpbmc6ICdlYXNlT3V0UXVhZCcsXG4gICAgICAgICAgICAgICAgY29tcGxldGU6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICQodGhpcykucmVtb3ZlKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAvLyBBcHBlbmQgYm9keVxuICAgICAgICAgICAgJCgnYm9keScpLmFwcGVuZCgkb3ZlcmxheSk7XG4gICAgICAgICAgICAkb3ZlcmxheS52ZWxvY2l0eSh7IG9wYWNpdHk6IDEgfSwgeyBkdXJhdGlvbjogMzAwLCBxdWV1ZTogZmFsc2UsIGVhc2luZzogJ2Vhc2VPdXRRdWFkJyxcbiAgICAgICAgICAgICAgY29tcGxldGU6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBtZW51T3V0ID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICBwYW5uaW5nID0gZmFsc2U7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAvLyBDYWxsYmFja1xuICAgICAgICAgICAgaWYgKHR5cGVvZiBvcHRpb25zLm9uT3BlbiA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgICBvcHRpb25zLm9uT3Blbi5jYWxsKHRoaXMsIG1lbnUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgICB9LFxuICAgIGRlc3Ryb3k6IGZ1bmN0aW9uICgpIHtcbiAgICAgIHZhciAkb3ZlcmxheSA9ICQoJyNzaWRlbmF2LW92ZXJsYXknKTtcbiAgICAgIHZhciAkZHJhZ1RhcmdldCA9ICQoJy5kcmFnLXRhcmdldFtkYXRhLXNpZGVuYXY9XCInICsgJCh0aGlzKS5hdHRyKCdkYXRhLWFjdGl2YXRlcycpICsgJ1wiXScpO1xuICAgICAgJG92ZXJsYXkudHJpZ2dlcignY2xpY2snKTtcbiAgICAgICRkcmFnVGFyZ2V0LnJlbW92ZSgpO1xuICAgICAgJCh0aGlzKS5vZmYoJ2NsaWNrJyk7XG4gICAgICAkb3ZlcmxheS5yZW1vdmUoKTtcbiAgICB9LFxuICAgIHNob3c6IGZ1bmN0aW9uICgpIHtcbiAgICAgIHRoaXMudHJpZ2dlcignY2xpY2snKTtcbiAgICB9LFxuICAgIGhpZGU6IGZ1bmN0aW9uICgpIHtcbiAgICAgICQoJyNzaWRlbmF2LW92ZXJsYXknKS50cmlnZ2VyKCdjbGljaycpO1xuICAgIH1cbiAgfTtcblxuICAkLmZuLnNpZGVOYXYgPSBmdW5jdGlvbiAobWV0aG9kT3JPcHRpb25zKSB7XG4gICAgaWYgKG1ldGhvZHNbbWV0aG9kT3JPcHRpb25zXSkge1xuICAgICAgcmV0dXJuIG1ldGhvZHNbbWV0aG9kT3JPcHRpb25zXS5hcHBseSh0aGlzLCBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcmd1bWVudHMsIDEpKTtcbiAgICB9IGVsc2UgaWYgKHR5cGVvZiBtZXRob2RPck9wdGlvbnMgPT09ICdvYmplY3QnIHx8ICFtZXRob2RPck9wdGlvbnMpIHtcbiAgICAgIC8vIERlZmF1bHQgdG8gXCJpbml0XCJcbiAgICAgIHJldHVybiBtZXRob2RzLmluaXQuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICB9IGVsc2Uge1xuICAgICAgJC5lcnJvcignTWV0aG9kICcgKyBtZXRob2RPck9wdGlvbnMgKyAnIGRvZXMgbm90IGV4aXN0IG9uIGpRdWVyeS5zaWRlTmF2Jyk7XG4gICAgfVxuICB9OyAvLyBQbHVnaW4gZW5kXG59KShqUXVlcnkpO1xuOyhmdW5jdGlvbiAoJCkge1xuICAkKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbiAoKSB7XG5cbiAgICAvLyBqUXVlcnkgcmV2ZXJzZVxuICAgICQuZm4ucmV2ZXJzZSA9IFtdLnJldmVyc2U7XG5cbiAgICAvLyBIb3ZlciBiZWhhdmlvdXI6IG1ha2Ugc3VyZSB0aGlzIGRvZXNuJ3Qgd29yayBvbiAuY2xpY2stdG8tdG9nZ2xlIEZBQnMhXG4gICAgJChkb2N1bWVudCkub24oJ21vdXNlZW50ZXIuZml4ZWRBY3Rpb25CdG4nLCAnLmZpeGVkLWFjdGlvbi1idG46bm90KC5jbGljay10by10b2dnbGUpOm5vdCgudG9vbGJhciknLCBmdW5jdGlvbiAoZSkge1xuICAgICAgdmFyICR0aGlzID0gJCh0aGlzKTtcbiAgICAgIG9wZW5GQUJNZW51KCR0aGlzKTtcbiAgICB9KTtcbiAgICAkKGRvY3VtZW50KS5vbignbW91c2VsZWF2ZS5maXhlZEFjdGlvbkJ0bicsICcuZml4ZWQtYWN0aW9uLWJ0bjpub3QoLmNsaWNrLXRvLXRvZ2dsZSk6bm90KC50b29sYmFyKScsIGZ1bmN0aW9uIChlKSB7XG4gICAgICB2YXIgJHRoaXMgPSAkKHRoaXMpO1xuICAgICAgY2xvc2VGQUJNZW51KCR0aGlzKTtcbiAgICB9KTtcblxuICAgIC8vIFRvZ2dsZS1vbi1jbGljayBiZWhhdmlvdXIuXG4gICAgJChkb2N1bWVudCkub24oJ2NsaWNrLmZhYkNsaWNrVG9nZ2xlJywgJy5maXhlZC1hY3Rpb24tYnRuLmNsaWNrLXRvLXRvZ2dsZSA+IGEnLCBmdW5jdGlvbiAoZSkge1xuICAgICAgdmFyICR0aGlzID0gJCh0aGlzKTtcbiAgICAgIHZhciAkbWVudSA9ICR0aGlzLnBhcmVudCgpO1xuICAgICAgaWYgKCRtZW51Lmhhc0NsYXNzKCdhY3RpdmUnKSkge1xuICAgICAgICBjbG9zZUZBQk1lbnUoJG1lbnUpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgb3BlbkZBQk1lbnUoJG1lbnUpO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgLy8gVG9vbGJhciB0cmFuc2l0aW9uIGJlaGF2aW91ci5cbiAgICAkKGRvY3VtZW50KS5vbignY2xpY2suZmFiVG9vbGJhcicsICcuZml4ZWQtYWN0aW9uLWJ0bi50b29sYmFyID4gYScsIGZ1bmN0aW9uIChlKSB7XG4gICAgICB2YXIgJHRoaXMgPSAkKHRoaXMpO1xuICAgICAgdmFyICRtZW51ID0gJHRoaXMucGFyZW50KCk7XG4gICAgICBGQUJ0b1Rvb2xiYXIoJG1lbnUpO1xuICAgIH0pO1xuICB9KTtcblxuICAkLmZuLmV4dGVuZCh7XG4gICAgb3BlbkZBQjogZnVuY3Rpb24gKCkge1xuICAgICAgb3BlbkZBQk1lbnUoJCh0aGlzKSk7XG4gICAgfSxcbiAgICBjbG9zZUZBQjogZnVuY3Rpb24gKCkge1xuICAgICAgY2xvc2VGQUJNZW51KCQodGhpcykpO1xuICAgIH0sXG4gICAgb3BlblRvb2xiYXI6IGZ1bmN0aW9uICgpIHtcbiAgICAgIEZBQnRvVG9vbGJhcigkKHRoaXMpKTtcbiAgICB9LFxuICAgIGNsb3NlVG9vbGJhcjogZnVuY3Rpb24gKCkge1xuICAgICAgdG9vbGJhclRvRkFCKCQodGhpcykpO1xuICAgIH1cbiAgfSk7XG5cbiAgdmFyIG9wZW5GQUJNZW51ID0gZnVuY3Rpb24gKGJ0bikge1xuICAgIHZhciAkdGhpcyA9IGJ0bjtcbiAgICBpZiAoJHRoaXMuaGFzQ2xhc3MoJ2FjdGl2ZScpID09PSBmYWxzZSkge1xuXG4gICAgICAvLyBHZXQgZGlyZWN0aW9uIG9wdGlvblxuICAgICAgdmFyIGhvcml6b250YWwgPSAkdGhpcy5oYXNDbGFzcygnaG9yaXpvbnRhbCcpO1xuICAgICAgdmFyIG9mZnNldFksIG9mZnNldFg7XG5cbiAgICAgIGlmIChob3Jpem9udGFsID09PSB0cnVlKSB7XG4gICAgICAgIG9mZnNldFggPSA0MDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG9mZnNldFkgPSA0MDtcbiAgICAgIH1cblxuICAgICAgJHRoaXMuYWRkQ2xhc3MoJ2FjdGl2ZScpO1xuICAgICAgJHRoaXMuZmluZCgndWwgLmJ0bi1mbG9hdGluZycpLnZlbG9jaXR5KHsgc2NhbGVZOiBcIi40XCIsIHNjYWxlWDogXCIuNFwiLCB0cmFuc2xhdGVZOiBvZmZzZXRZICsgJ3B4JywgdHJhbnNsYXRlWDogb2Zmc2V0WCArICdweCcgfSwgeyBkdXJhdGlvbjogMCB9KTtcblxuICAgICAgdmFyIHRpbWUgPSAwO1xuICAgICAgJHRoaXMuZmluZCgndWwgLmJ0bi1mbG9hdGluZycpLnJldmVyc2UoKS5lYWNoKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgJCh0aGlzKS52ZWxvY2l0eSh7IG9wYWNpdHk6IFwiMVwiLCBzY2FsZVg6IFwiMVwiLCBzY2FsZVk6IFwiMVwiLCB0cmFuc2xhdGVZOiBcIjBcIiwgdHJhbnNsYXRlWDogJzAnIH0sIHsgZHVyYXRpb246IDgwLCBkZWxheTogdGltZSB9KTtcbiAgICAgICAgdGltZSArPSA0MDtcbiAgICAgIH0pO1xuICAgIH1cbiAgfTtcblxuICB2YXIgY2xvc2VGQUJNZW51ID0gZnVuY3Rpb24gKGJ0bikge1xuICAgIHZhciAkdGhpcyA9IGJ0bjtcbiAgICAvLyBHZXQgZGlyZWN0aW9uIG9wdGlvblxuICAgIHZhciBob3Jpem9udGFsID0gJHRoaXMuaGFzQ2xhc3MoJ2hvcml6b250YWwnKTtcbiAgICB2YXIgb2Zmc2V0WSwgb2Zmc2V0WDtcblxuICAgIGlmIChob3Jpem9udGFsID09PSB0cnVlKSB7XG4gICAgICBvZmZzZXRYID0gNDA7XG4gICAgfSBlbHNlIHtcbiAgICAgIG9mZnNldFkgPSA0MDtcbiAgICB9XG5cbiAgICAkdGhpcy5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XG4gICAgdmFyIHRpbWUgPSAwO1xuICAgICR0aGlzLmZpbmQoJ3VsIC5idG4tZmxvYXRpbmcnKS52ZWxvY2l0eShcInN0b3BcIiwgdHJ1ZSk7XG4gICAgJHRoaXMuZmluZCgndWwgLmJ0bi1mbG9hdGluZycpLnZlbG9jaXR5KHsgb3BhY2l0eTogXCIwXCIsIHNjYWxlWDogXCIuNFwiLCBzY2FsZVk6IFwiLjRcIiwgdHJhbnNsYXRlWTogb2Zmc2V0WSArICdweCcsIHRyYW5zbGF0ZVg6IG9mZnNldFggKyAncHgnIH0sIHsgZHVyYXRpb246IDgwIH0pO1xuICB9O1xuXG4gIC8qKlxuICAgKiBUcmFuc2Zvcm0gRkFCIGludG8gdG9vbGJhclxuICAgKiBAcGFyYW0gIHtPYmplY3R9ICBvYmplY3QgalF1ZXJ5IG9iamVjdFxuICAgKi9cbiAgdmFyIEZBQnRvVG9vbGJhciA9IGZ1bmN0aW9uIChidG4pIHtcbiAgICBpZiAoYnRuLmF0dHIoJ2RhdGEtb3BlbicpID09PSBcInRydWVcIikge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHZhciBvZmZzZXRYLCBvZmZzZXRZLCBzY2FsZUZhY3RvcjtcbiAgICB2YXIgd2luZG93V2lkdGggPSB3aW5kb3cuaW5uZXJXaWR0aDtcbiAgICB2YXIgd2luZG93SGVpZ2h0ID0gd2luZG93LmlubmVySGVpZ2h0O1xuICAgIHZhciBidG5SZWN0ID0gYnRuWzBdLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgIHZhciBhbmNob3IgPSBidG4uZmluZCgnPiBhJykuZmlyc3QoKTtcbiAgICB2YXIgbWVudSA9IGJ0bi5maW5kKCc+IHVsJykuZmlyc3QoKTtcbiAgICB2YXIgYmFja2Ryb3AgPSAkKCc8ZGl2IGNsYXNzPVwiZmFiLWJhY2tkcm9wXCI+PC9kaXY+Jyk7XG4gICAgdmFyIGZhYkNvbG9yID0gYW5jaG9yLmNzcygnYmFja2dyb3VuZC1jb2xvcicpO1xuICAgIGFuY2hvci5hcHBlbmQoYmFja2Ryb3ApO1xuXG4gICAgb2Zmc2V0WCA9IGJ0blJlY3QubGVmdCAtIHdpbmRvd1dpZHRoIC8gMiArIGJ0blJlY3Qud2lkdGggLyAyO1xuICAgIG9mZnNldFkgPSB3aW5kb3dIZWlnaHQgLSBidG5SZWN0LmJvdHRvbTtcbiAgICBzY2FsZUZhY3RvciA9IHdpbmRvd1dpZHRoIC8gYmFja2Ryb3Aud2lkdGgoKTtcbiAgICBidG4uYXR0cignZGF0YS1vcmlnaW4tYm90dG9tJywgYnRuUmVjdC5ib3R0b20pO1xuICAgIGJ0bi5hdHRyKCdkYXRhLW9yaWdpbi1sZWZ0JywgYnRuUmVjdC5sZWZ0KTtcbiAgICBidG4uYXR0cignZGF0YS1vcmlnaW4td2lkdGgnLCBidG5SZWN0LndpZHRoKTtcblxuICAgIC8vIFNldCBpbml0aWFsIHN0YXRlXG4gICAgYnRuLmFkZENsYXNzKCdhY3RpdmUnKTtcbiAgICBidG4uYXR0cignZGF0YS1vcGVuJywgdHJ1ZSk7XG4gICAgYnRuLmNzcyh7XG4gICAgICAndGV4dC1hbGlnbic6ICdjZW50ZXInLFxuICAgICAgd2lkdGg6ICcxMDAlJyxcbiAgICAgIGJvdHRvbTogMCxcbiAgICAgIGxlZnQ6IDAsXG4gICAgICB0cmFuc2Zvcm06ICd0cmFuc2xhdGVYKCcgKyBvZmZzZXRYICsgJ3B4KScsXG4gICAgICB0cmFuc2l0aW9uOiAnbm9uZSdcbiAgICB9KTtcbiAgICBhbmNob3IuY3NzKHtcbiAgICAgIHRyYW5zZm9ybTogJ3RyYW5zbGF0ZVkoJyArIC1vZmZzZXRZICsgJ3B4KScsXG4gICAgICB0cmFuc2l0aW9uOiAnbm9uZSdcbiAgICB9KTtcbiAgICBiYWNrZHJvcC5jc3Moe1xuICAgICAgJ2JhY2tncm91bmQtY29sb3InOiBmYWJDb2xvclxuICAgIH0pO1xuXG4gICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICBidG4uY3NzKHtcbiAgICAgICAgdHJhbnNmb3JtOiAnJyxcbiAgICAgICAgdHJhbnNpdGlvbjogJ3RyYW5zZm9ybSAuMnMgY3ViaWMtYmV6aWVyKDAuNTUwLCAwLjA4NSwgMC42ODAsIDAuNTMwKSwgYmFja2dyb3VuZC1jb2xvciAwcyBsaW5lYXIgLjJzJ1xuICAgICAgfSk7XG4gICAgICBhbmNob3IuY3NzKHtcbiAgICAgICAgb3ZlcmZsb3c6ICd2aXNpYmxlJyxcbiAgICAgICAgdHJhbnNmb3JtOiAnJyxcbiAgICAgICAgdHJhbnNpdGlvbjogJ3RyYW5zZm9ybSAuMnMnXG4gICAgICB9KTtcblxuICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgIGJ0bi5jc3Moe1xuICAgICAgICAgIG92ZXJmbG93OiAnaGlkZGVuJyxcbiAgICAgICAgICAnYmFja2dyb3VuZC1jb2xvcic6IGZhYkNvbG9yXG4gICAgICAgIH0pO1xuICAgICAgICBiYWNrZHJvcC5jc3Moe1xuICAgICAgICAgIHRyYW5zZm9ybTogJ3NjYWxlKCcgKyBzY2FsZUZhY3RvciArICcpJyxcbiAgICAgICAgICB0cmFuc2l0aW9uOiAndHJhbnNmb3JtIC4ycyBjdWJpYy1iZXppZXIoMC41NTAsIDAuMDU1LCAwLjY3NSwgMC4xOTApJ1xuICAgICAgICB9KTtcbiAgICAgICAgbWVudS5maW5kKCc+IGxpID4gYScpLmNzcyh7XG4gICAgICAgICAgb3BhY2l0eTogMVxuICAgICAgICB9KTtcblxuICAgICAgICAvLyBTY3JvbGwgdG8gY2xvc2UuXG4gICAgICAgICQod2luZG93KS5vbignc2Nyb2xsLmZhYlRvb2xiYXJDbG9zZScsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICB0b29sYmFyVG9GQUIoYnRuKTtcbiAgICAgICAgICAkKHdpbmRvdykub2ZmKCdzY3JvbGwuZmFiVG9vbGJhckNsb3NlJyk7XG4gICAgICAgICAgJChkb2N1bWVudCkub2ZmKCdjbGljay5mYWJUb29sYmFyQ2xvc2UnKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgJChkb2N1bWVudCkub24oJ2NsaWNrLmZhYlRvb2xiYXJDbG9zZScsIGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgaWYgKCEkKGUudGFyZ2V0KS5jbG9zZXN0KG1lbnUpLmxlbmd0aCkge1xuICAgICAgICAgICAgdG9vbGJhclRvRkFCKGJ0bik7XG4gICAgICAgICAgICAkKHdpbmRvdykub2ZmKCdzY3JvbGwuZmFiVG9vbGJhckNsb3NlJyk7XG4gICAgICAgICAgICAkKGRvY3VtZW50KS5vZmYoJ2NsaWNrLmZhYlRvb2xiYXJDbG9zZScpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9LCAxMDApO1xuICAgIH0sIDApO1xuICB9O1xuXG4gIC8qKlxuICAgKiBUcmFuc2Zvcm0gdG9vbGJhciBiYWNrIGludG8gRkFCXG4gICAqIEBwYXJhbSAge09iamVjdH0gIG9iamVjdCBqUXVlcnkgb2JqZWN0XG4gICAqL1xuICB2YXIgdG9vbGJhclRvRkFCID0gZnVuY3Rpb24gKGJ0bikge1xuICAgIGlmIChidG4uYXR0cignZGF0YS1vcGVuJykgIT09IFwidHJ1ZVwiKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdmFyIG9mZnNldFgsIG9mZnNldFksIHNjYWxlRmFjdG9yO1xuICAgIHZhciB3aW5kb3dXaWR0aCA9IHdpbmRvdy5pbm5lcldpZHRoO1xuICAgIHZhciB3aW5kb3dIZWlnaHQgPSB3aW5kb3cuaW5uZXJIZWlnaHQ7XG4gICAgdmFyIGJ0bldpZHRoID0gYnRuLmF0dHIoJ2RhdGEtb3JpZ2luLXdpZHRoJyk7XG4gICAgdmFyIGJ0bkJvdHRvbSA9IGJ0bi5hdHRyKCdkYXRhLW9yaWdpbi1ib3R0b20nKTtcbiAgICB2YXIgYnRuTGVmdCA9IGJ0bi5hdHRyKCdkYXRhLW9yaWdpbi1sZWZ0Jyk7XG4gICAgdmFyIGFuY2hvciA9IGJ0bi5maW5kKCc+IC5idG4tZmxvYXRpbmcnKS5maXJzdCgpO1xuICAgIHZhciBtZW51ID0gYnRuLmZpbmQoJz4gdWwnKS5maXJzdCgpO1xuICAgIHZhciBiYWNrZHJvcCA9IGJ0bi5maW5kKCcuZmFiLWJhY2tkcm9wJyk7XG4gICAgdmFyIGZhYkNvbG9yID0gYW5jaG9yLmNzcygnYmFja2dyb3VuZC1jb2xvcicpO1xuXG4gICAgb2Zmc2V0WCA9IGJ0bkxlZnQgLSB3aW5kb3dXaWR0aCAvIDIgKyBidG5XaWR0aCAvIDI7XG4gICAgb2Zmc2V0WSA9IHdpbmRvd0hlaWdodCAtIGJ0bkJvdHRvbTtcbiAgICBzY2FsZUZhY3RvciA9IHdpbmRvd1dpZHRoIC8gYmFja2Ryb3Aud2lkdGgoKTtcblxuICAgIC8vIEhpZGUgYmFja2Ryb3BcbiAgICBidG4ucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xuICAgIGJ0bi5hdHRyKCdkYXRhLW9wZW4nLCBmYWxzZSk7XG4gICAgYnRuLmNzcyh7XG4gICAgICAnYmFja2dyb3VuZC1jb2xvcic6ICd0cmFuc3BhcmVudCcsXG4gICAgICB0cmFuc2l0aW9uOiAnbm9uZSdcbiAgICB9KTtcbiAgICBhbmNob3IuY3NzKHtcbiAgICAgIHRyYW5zaXRpb246ICdub25lJ1xuICAgIH0pO1xuICAgIGJhY2tkcm9wLmNzcyh7XG4gICAgICB0cmFuc2Zvcm06ICdzY2FsZSgwKScsXG4gICAgICAnYmFja2dyb3VuZC1jb2xvcic6IGZhYkNvbG9yXG4gICAgfSk7XG4gICAgbWVudS5maW5kKCc+IGxpID4gYScpLmNzcyh7XG4gICAgICBvcGFjaXR5OiAnJ1xuICAgIH0pO1xuXG4gICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICBiYWNrZHJvcC5yZW1vdmUoKTtcblxuICAgICAgLy8gU2V0IGluaXRpYWwgc3RhdGUuXG4gICAgICBidG4uY3NzKHtcbiAgICAgICAgJ3RleHQtYWxpZ24nOiAnJyxcbiAgICAgICAgd2lkdGg6ICcnLFxuICAgICAgICBib3R0b206ICcnLFxuICAgICAgICBsZWZ0OiAnJyxcbiAgICAgICAgb3ZlcmZsb3c6ICcnLFxuICAgICAgICAnYmFja2dyb3VuZC1jb2xvcic6ICcnLFxuICAgICAgICB0cmFuc2Zvcm06ICd0cmFuc2xhdGUzZCgnICsgLW9mZnNldFggKyAncHgsMCwwKSdcbiAgICAgIH0pO1xuICAgICAgYW5jaG9yLmNzcyh7XG4gICAgICAgIG92ZXJmbG93OiAnJyxcbiAgICAgICAgdHJhbnNmb3JtOiAndHJhbnNsYXRlM2QoMCwnICsgb2Zmc2V0WSArICdweCwwKSdcbiAgICAgIH0pO1xuXG4gICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgYnRuLmNzcyh7XG4gICAgICAgICAgdHJhbnNmb3JtOiAndHJhbnNsYXRlM2QoMCwwLDApJyxcbiAgICAgICAgICB0cmFuc2l0aW9uOiAndHJhbnNmb3JtIC4ycydcbiAgICAgICAgfSk7XG4gICAgICAgIGFuY2hvci5jc3Moe1xuICAgICAgICAgIHRyYW5zZm9ybTogJ3RyYW5zbGF0ZTNkKDAsMCwwKScsXG4gICAgICAgICAgdHJhbnNpdGlvbjogJ3RyYW5zZm9ybSAuMnMgY3ViaWMtYmV6aWVyKDAuNTUwLCAwLjA1NSwgMC42NzUsIDAuMTkwKSdcbiAgICAgICAgfSk7XG4gICAgICB9LCAyMCk7XG4gICAgfSwgMjAwKTtcbiAgfTtcbn0pKGpRdWVyeSk7XG5cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPW1hdGVyaWFsaXplX2NvbmNhdC5qcy5tYXBcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPW1hdGVyaWFsaXplLmpzLm1hcFxuIiwiLyohXG4gICogU2ltcGxlLUpla3lsbC1TZWFyY2ggdjEuNC4xIChodHRwczovL2dpdGh1Yi5jb20vY2hyaXN0aWFuLWZlaS9TaW1wbGUtSmVreWxsLVNlYXJjaClcbiAgKiBDb3B5cmlnaHQgMjAxNS0yMDE3LCBDaHJpc3RpYW4gRmVpXG4gICogTGljZW5zZWQgdW5kZXIgTUlUIChodHRwczovL2dpdGh1Yi5jb20vY2hyaXN0aWFuLWZlaS9TaW1wbGUtSmVreWxsLVNlYXJjaC9ibG9iL21hc3Rlci9MSUNFTlNFLm1kKVxuICAqL1xuIWZ1bmN0aW9uIHQoZSxyLG4pe2Z1bmN0aW9uIGkobyxhKXtpZighcltvXSl7aWYoIWVbb10pe3ZhciBjPVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmU7aWYoIWEmJmMpcmV0dXJuIGMobywhMCk7aWYodSlyZXR1cm4gdShvLCEwKTt2YXIgcz1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IHMuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixzfXZhciBmPXJbb109e2V4cG9ydHM6e319O2Vbb11bMF0uY2FsbChmLmV4cG9ydHMsZnVuY3Rpb24odCl7dmFyIHI9ZVtvXVsxXVt0XTtyZXR1cm4gaShyfHx0KX0sZixmLmV4cG9ydHMsdCxlLHIsbil9cmV0dXJuIHJbb10uZXhwb3J0c31mb3IodmFyIHU9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZSxvPTA7bzxuLmxlbmd0aDtvKyspaShuW29dKTtyZXR1cm4gaX0oezE6W2Z1bmN0aW9uKHQsZSxyKXtcInVzZSBzdHJpY3RcIjtlLmV4cG9ydHM9ZnVuY3Rpb24odCxlKXt2YXIgcj1lLmxlbmd0aCxuPXQubGVuZ3RoO2lmKG4+cilyZXR1cm4hMTtpZihuPT09cilyZXR1cm4gdD09PWU7dDpmb3IodmFyIGk9MCx1PTA7aTxuO2krKyl7Zm9yKHZhciBvPXQuY2hhckNvZGVBdChpKTt1PHI7KWlmKGUuY2hhckNvZGVBdCh1KyspPT09byljb250aW51ZSB0O3JldHVybiExfXJldHVybiEwfX0se31dLDI6W2Z1bmN0aW9uKHQsZSxyKXtcInVzZSBzdHJpY3RcIjtmdW5jdGlvbiBuKHQsZSl7cmV0dXJuIGZ1bmN0aW9uKCl7aWYoND09PXQucmVhZHlTdGF0ZSYmMjAwPT09dC5zdGF0dXMpdHJ5e2UobnVsbCxKU09OLnBhcnNlKHQucmVzcG9uc2VUZXh0KSl9Y2F0Y2gocil7ZShyLG51bGwpfX19ZnVuY3Rpb24gaSgpe3JldHVybiB3aW5kb3cuWE1MSHR0cFJlcXVlc3Q/bmV3IFhNTEh0dHBSZXF1ZXN0Om5ldyBBY3RpdmVYT2JqZWN0KFwiTWljcm9zb2Z0LlhNTEhUVFBcIil9ZS5leHBvcnRzPXtsb2FkOmZ1bmN0aW9uKHQsZSl7dmFyIHI9aSgpO3Iub3BlbihcIkdFVFwiLHQsITApLHIub25yZWFkeXN0YXRlY2hhbmdlPW4ocixlKSxyLnNlbmQoKX19fSx7fV0sMzpbZnVuY3Rpb24odCxlLHIpe1widXNlIHN0cmljdFwiO2UuZXhwb3J0cz1mdW5jdGlvbiBuKHQpe2lmKCFmdW5jdGlvbih0KXtyZXR1cm4hIXQmJlwidW5kZWZpbmVkXCIhPXR5cGVvZiB0LnJlcXVpcmVkJiZ0LnJlcXVpcmVkIGluc3RhbmNlb2YgQXJyYXl9KHQpKXRocm93IG5ldyBFcnJvcihcIi0tIE9wdGlvbnNWYWxpZGF0b3I6IHJlcXVpcmVkIG9wdGlvbnMgbWlzc2luZ1wiKTtpZighKHRoaXMgaW5zdGFuY2VvZiBuKSlyZXR1cm4gbmV3IG4odCk7dmFyIGU9dC5yZXF1aXJlZDt0aGlzLmdldFJlcXVpcmVkT3B0aW9ucz1mdW5jdGlvbigpe3JldHVybiBlfSx0aGlzLnZhbGlkYXRlPWZ1bmN0aW9uKHQpe3ZhciByPVtdO3JldHVybiBlLmZvckVhY2goZnVuY3Rpb24oZSl7XCJ1bmRlZmluZWRcIj09dHlwZW9mIHRbZV0mJnIucHVzaChlKX0pLHJ9fX0se31dLDQ6W2Z1bmN0aW9uKHQsZSxyKXtcInVzZSBzdHJpY3RcIjtmdW5jdGlvbiBuKHQpe3JldHVybiEhdCYmXCJbb2JqZWN0IE9iamVjdF1cIj09PU9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbCh0KX1mdW5jdGlvbiBpKHQpe3JldHVybiEhdCYmXCJbb2JqZWN0IEFycmF5XVwiPT09T2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKHQpfWZ1bmN0aW9uIHUodCl7cmV0dXJuIHAucHVzaCh0KSxwfWZ1bmN0aW9uIG8odCl7Zm9yKHZhciBlPVtdLHI9MDtyPHQubGVuZ3RoO3IrKyluKHRbcl0pJiZlLnB1c2godSh0W3JdKSk7cmV0dXJuIGV9ZnVuY3Rpb24gYSh0LGUscixuKXtmb3IodmFyIGk9W10sdT0wO3U8dC5sZW5ndGgmJmkubGVuZ3RoPG4ubGltaXQ7dSsrKXt2YXIgbz1jKHRbdV0sZSxyLG4pO28mJmkucHVzaChvKX1yZXR1cm4gaX1mdW5jdGlvbiBjKHQsZSxyLG4pe2Zvcih2YXIgaSBpbiB0KWlmKCFzKHRbaV0sbi5leGNsdWRlKSYmci5tYXRjaGVzKHRbaV0sZSkpcmV0dXJuIHR9ZnVuY3Rpb24gcyh0LGUpe3ZhciByPSExO2U9ZXx8W107Zm9yKHZhciBuPTA7bjxlLmxlbmd0aDtuKyspe3ZhciBpPWVbbl07IXImJm5ldyBSZWdFeHAodCkudGVzdChpKSYmKHI9ITApfXJldHVybiByfWUuZXhwb3J0cz17cHV0OmZ1bmN0aW9uKHQpe3JldHVybiBuKHQpP3UodCk6aSh0KT9vKHQpOnVuZGVmaW5lZH0sY2xlYXI6ZnVuY3Rpb24oKXtyZXR1cm4gcC5sZW5ndGg9MCxwfSxnZXQ6ZnVuY3Rpb24oKXtyZXR1cm4gcH0sc2VhcmNoOmZ1bmN0aW9uKHQpe3JldHVybiB0P2EocCx0LGguc2VhcmNoU3RyYXRlZ3ksaCk6W119LHNldE9wdGlvbnM6ZnVuY3Rpb24odCl7KGg9dHx8e30pLmZ1enp5PXQuZnV6enl8fCExLGgubGltaXQ9dC5saW1pdHx8MTAsaC5zZWFyY2hTdHJhdGVneT10LmZ1enp5P2Y6bH19O3ZhciBmPXQoXCIuL1NlYXJjaFN0cmF0ZWdpZXMvRnV6enlTZWFyY2hTdHJhdGVneVwiKSxsPXQoXCIuL1NlYXJjaFN0cmF0ZWdpZXMvTGl0ZXJhbFNlYXJjaFN0cmF0ZWd5XCIpLHA9W10saD17fTtoLmZ1enp5PSExLGgubGltaXQ9MTAsaC5zZWFyY2hTdHJhdGVneT1oLmZ1enp5P2Y6bH0se1wiLi9TZWFyY2hTdHJhdGVnaWVzL0Z1enp5U2VhcmNoU3RyYXRlZ3lcIjo1LFwiLi9TZWFyY2hTdHJhdGVnaWVzL0xpdGVyYWxTZWFyY2hTdHJhdGVneVwiOjZ9XSw1OltmdW5jdGlvbih0LGUscil7XCJ1c2Ugc3RyaWN0XCI7dmFyIG49dChcImZ1enp5c2VhcmNoXCIpO2UuZXhwb3J0cz1uZXcgZnVuY3Rpb24oKXt0aGlzLm1hdGNoZXM9ZnVuY3Rpb24odCxlKXtyZXR1cm4gbihlLHQpfX19LHtmdXp6eXNlYXJjaDoxfV0sNjpbZnVuY3Rpb24odCxlLHIpe1widXNlIHN0cmljdFwiO2UuZXhwb3J0cz1uZXcgZnVuY3Rpb24oKXt0aGlzLm1hdGNoZXM9ZnVuY3Rpb24odCxlKXtyZXR1cm5cInN0cmluZ1wiPT10eXBlb2YgdCYmKHQ9dC50cmltKCkpLnRvTG93ZXJDYXNlKCkuaW5kZXhPZihlLnRvTG93ZXJDYXNlKCkpPj0wfX19LHt9XSw3OltmdW5jdGlvbih0LGUscil7XCJ1c2Ugc3RyaWN0XCI7ZS5leHBvcnRzPXtjb21waWxlOmZ1bmN0aW9uKHQpe3JldHVybiBuLnRlbXBsYXRlLnJlcGxhY2Uobi5wYXR0ZXJuLGZ1bmN0aW9uKGUscil7dmFyIGk9bi5taWRkbGV3YXJlKHIsdFtyXSxuLnRlbXBsYXRlKTtyZXR1cm4gdm9pZCAwIT09aT9pOnRbcl18fGV9KX0sc2V0T3B0aW9uczpmdW5jdGlvbih0KXtuLnBhdHRlcm49dC5wYXR0ZXJufHxuLnBhdHRlcm4sbi50ZW1wbGF0ZT10LnRlbXBsYXRlfHxuLnRlbXBsYXRlLFwiZnVuY3Rpb25cIj09dHlwZW9mIHQubWlkZGxld2FyZSYmKG4ubWlkZGxld2FyZT10Lm1pZGRsZXdhcmUpfX07dmFyIG49e307bi5wYXR0ZXJuPS9cXHsoLio/KVxcfS9nLG4udGVtcGxhdGU9XCJcIixuLm1pZGRsZXdhcmU9ZnVuY3Rpb24oKXt9fSx7fV0sODpbZnVuY3Rpb24odCxlLHIpeyFmdW5jdGlvbihlLHIpe1widXNlIHN0cmljdFwiO2Z1bmN0aW9uIG4odCl7bS5wdXQodCksYSgpfWZ1bmN0aW9uIGkodCl7Uy5sb2FkKHQsZnVuY3Rpb24oZSxyKXtlJiZwKFwiZmFpbGVkIHRvIGdldCBKU09OIChcIit0K1wiKVwiKSxuKHIpfSl9ZnVuY3Rpb24gdSgpe2gucmVzdWx0c0NvbnRhaW5lci5pbm5lckhUTUw9XCJcIn1mdW5jdGlvbiBvKHQpe2gucmVzdWx0c0NvbnRhaW5lci5pbm5lckhUTUwrPXR9ZnVuY3Rpb24gYSgpe2guc2VhcmNoSW5wdXQuYWRkRXZlbnRMaXN0ZW5lcihcImtleXVwXCIsZnVuY3Rpb24odCl7bCh0LndoaWNoKSYmKHUoKSxjKHQudGFyZ2V0LnZhbHVlKSl9KX1mdW5jdGlvbiBjKHQpe2YodCkmJnMobS5zZWFyY2godCkpfWZ1bmN0aW9uIHModCl7dmFyIGU9dC5sZW5ndGg7aWYoMD09PWUpcmV0dXJuIG8oaC5ub1Jlc3VsdHNUZXh0KTtmb3IodmFyIHI9MDtyPGU7cisrKW8oeS5jb21waWxlKHRbcl0pKX1mdW5jdGlvbiBmKHQpe3JldHVybiB0JiZ0Lmxlbmd0aD4wfWZ1bmN0aW9uIGwodCl7cmV0dXJuLTE9PT1bMTMsMTYsMjAsMzcsMzgsMzksNDAsOTFdLmluZGV4T2YodCl9ZnVuY3Rpb24gcCh0KXt0aHJvdyBuZXcgRXJyb3IoXCJTaW1wbGVKZWt5bGxTZWFyY2ggLS0tIFwiK3QpfXZhciBoPXtzZWFyY2hJbnB1dDpudWxsLHJlc3VsdHNDb250YWluZXI6bnVsbCxqc29uOltdLHNlYXJjaFJlc3VsdFRlbXBsYXRlOic8bGk+PGEgaHJlZj1cInt1cmx9XCIgdGl0bGU9XCJ7ZGVzY31cIj57dGl0bGV9PC9hPjwvbGk+Jyx0ZW1wbGF0ZU1pZGRsZXdhcmU6ZnVuY3Rpb24oKXt9LG5vUmVzdWx0c1RleHQ6XCJObyByZXN1bHRzIGZvdW5kXCIsbGltaXQ6MTAsZnV6enk6ITEsZXhjbHVkZTpbXX0sZD1bXCJzZWFyY2hJbnB1dFwiLFwicmVzdWx0c0NvbnRhaW5lclwiLFwianNvblwiXSx5PXQoXCIuL1RlbXBsYXRlclwiKSxtPXQoXCIuL1JlcG9zaXRvcnlcIiksUz10KFwiLi9KU09OTG9hZGVyXCIpLGc9dChcIi4vT3B0aW9uc1ZhbGlkYXRvclwiKSh7cmVxdWlyZWQ6ZH0pLHY9dChcIi4vdXRpbHNcIik7ZS5TaW1wbGVKZWt5bGxTZWFyY2g9ZnVuY3Rpb24odCl7cmV0dXJuIGcudmFsaWRhdGUodCkubGVuZ3RoPjAmJnAoXCJZb3UgbXVzdCBzcGVjaWZ5IHRoZSBmb2xsb3dpbmcgcmVxdWlyZWQgb3B0aW9uczogXCIrZCksaD12Lm1lcmdlKGgsdCkseS5zZXRPcHRpb25zKHt0ZW1wbGF0ZTpoLnNlYXJjaFJlc3VsdFRlbXBsYXRlLG1pZGRsZXdhcmU6aC50ZW1wbGF0ZU1pZGRsZXdhcmV9KSxtLnNldE9wdGlvbnMoe2Z1enp5OmguZnV6enksbGltaXQ6aC5saW1pdH0pLHYuaXNKU09OKGguanNvbik/bihoLmpzb24pOmkoaC5qc29uKSx7c2VhcmNoOmN9fSxlLlNpbXBsZUpla3lsbFNlYXJjaC5pbml0PWUuU2ltcGxlSmVreWxsU2VhcmNoLFwiZnVuY3Rpb25cIj09dHlwZW9mIGUuU2ltcGxlSmVreWxsU2VhcmNoSW5pdCYmZS5TaW1wbGVKZWt5bGxTZWFyY2hJbml0LmNhbGwodGhpcyxlLlNpbXBsZUpla3lsbFNlYXJjaCl9KHdpbmRvdyxkb2N1bWVudCl9LHtcIi4vSlNPTkxvYWRlclwiOjIsXCIuL09wdGlvbnNWYWxpZGF0b3JcIjozLFwiLi9SZXBvc2l0b3J5XCI6NCxcIi4vVGVtcGxhdGVyXCI6NyxcIi4vdXRpbHNcIjo5fV0sOTpbZnVuY3Rpb24odCxlLHIpe1widXNlIHN0cmljdFwiO2UuZXhwb3J0cz17bWVyZ2U6ZnVuY3Rpb24odCxlKXt2YXIgcj17fTtmb3IodmFyIG4gaW4gdClyW25dPXRbbl0sXCJ1bmRlZmluZWRcIiE9dHlwZW9mIGVbbl0mJihyW25dPWVbbl0pO3JldHVybiByfSxpc0pTT046ZnVuY3Rpb24odCl7dHJ5e3JldHVybiEhKHQgaW5zdGFuY2VvZiBPYmplY3QmJkpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkodCkpKX1jYXRjaChlKXtyZXR1cm4hMX19fX0se31dfSx7fSxbOF0pOyIsIi8vICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiogLy9cbi8vICoqKiBIaWRlIEhlYWRlciBvbiBvbiBzY3JvbGwgZG93biAqKiogLy9cbi8vICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiogLy9cblxudmFyIGRpZFNjcm9sbDtcbnZhciBsYXN0U2Nyb2xsVG9wID0gMDtcbnZhciBkZWx0YSA9IDU7XG52YXIgbmF2YmFySGVpZ2h0ID0gJCgnLm5hdmJhci1maXhlZCcpLm91dGVySGVpZ2h0KCk7XG5cbiQod2luZG93KS5zY3JvbGwoZnVuY3Rpb24oZXZlbnQpe1xuICAgIGRpZFNjcm9sbCA9IHRydWU7XG59KTtcblxuc2V0SW50ZXJ2YWwoZnVuY3Rpb24oKSB7XG4gICAgaWYgKGRpZFNjcm9sbCkge1xuICAgICAgICBoYXNTY3JvbGxlZCgpO1xuICAgICAgICBkaWRTY3JvbGwgPSBmYWxzZTtcbiAgICB9XG59LCAyNTApO1xuXG5mdW5jdGlvbiBoYXNTY3JvbGxlZCgpIHtcbiAgICB2YXIgc3QgPSAkKHRoaXMpLnNjcm9sbFRvcCgpO1xuXG4gICAgLy8gTWFrZSBzdXJlIHRoZXkgc2Nyb2xsIG1vcmUgdGhhbiBkZWx0YVxuICAgIGlmKE1hdGguYWJzKGxhc3RTY3JvbGxUb3AgLSBzdCkgPD0gZGVsdGEpXG4gICAgICAgIHJldHVybjtcblxuICAgIC8vIElmIHRoZXkgc2Nyb2xsZWQgZG93biBhbmQgYXJlIHBhc3QgdGhlIG5hdmJhciwgYWRkIGNsYXNzIC5uYXYtdXAuXG4gICAgLy8gVGhpcyBpcyBuZWNlc3Nhcnkgc28geW91IG5ldmVyIHNlZSB3aGF0IGlzIFwiYmVoaW5kXCIgdGhlIG5hdmJhci5cbiAgICBpZiAoc3QgPiBsYXN0U2Nyb2xsVG9wICYmIHN0ID4gbmF2YmFySGVpZ2h0KXtcbiAgICAgICAgLy8gU2Nyb2xsIERvd25cbiAgICAgICAgJCgnLm5hdmJhci1maXhlZCcpLnJlbW92ZUNsYXNzKCduYXYtZG93bicpLmFkZENsYXNzKCduYXYtdXAnKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICAvLyBTY3JvbGwgVXBcbiAgICAgICAgaWYoc3QgKyAkKHdpbmRvdykuaGVpZ2h0KCkgPCAkKGRvY3VtZW50KS5oZWlnaHQoKSkge1xuICAgICAgICAgICAgJCgnLm5hdmJhci1maXhlZCcpLnJlbW92ZUNsYXNzKCduYXYtdXAnKS5hZGRDbGFzcygnbmF2LWRvd24nKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RTY3JvbGxUb3AgPSBzdDtcbn1cblxuXG4vLyAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqIC8vXG4vLyAqKiBUb2dnbGVhYmxlIEludmVydGVyIChOaWdodE1vZGUpICoqIC8vXG4vLyAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqIC8vXG4vLyB0b2dnbGVhYmxlIGludmVydGVyIHdpdGggc2Vzc2lvblN0b3JhZ2Vcbi8vIGZyb20gaHR0cDovL3N0YWNrb3ZlcmZsb3cuY29tL3F1ZXN0aW9ucy8yODIzOTMzNy9zdG9yZS1hLWNzcy1jbGFzcy1vbi1icm93c2VyXG5cblxuICAkKCAnI2ludmVydGVyJyApLmNsaWNrKGZ1bmN0aW9uICgpIHtcbiAgICAkKCAnYm9keScgKS50b2dnbGVDbGFzcyggJ25pZ2h0JyApO1xuXG4gICAgaWYgKCQoICdib2R5JyApLmhhc0NsYXNzKCAnbmlnaHQnICkpIHtcbiAgICAgIHNlc3Npb25TdG9yYWdlLnNldEl0ZW0oICd0aGVtZScsICduaWdodCcgKTtcbiAgICB9XG5cbiAgICBlbHNlIHtcbiAgICAgIHNlc3Npb25TdG9yYWdlLnNldEl0ZW0oICd0aGVtZScsICdkYXknICk7XG4gICAgfVxuXG4gIH0pO1xuXG4gICQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uKCkge1xuICAgIHZhciB0aGVtZSA9IHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oICd0aGVtZScgKTtcbiAgICBpZiAodGhlbWUgIT09ICcnKSB7XG4gICAgICAkKCAnYm9keScgKS5hZGRDbGFzcyh0aGVtZSk7XG4gICAgfVxuICB9KTtcblxuXG5cbiAgJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24oKSB7XG5cbiAgICAkKGZ1bmN0aW9uICgpIHtcbiAgICAgICQoICcuaW52ZXJ0IGknICkuY2xpY2soZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgJCh0aGlzKS50b2dnbGVDbGFzcyggJ2ZlYXRoZXItc3VuJyApO1xuXG4gICAgICAgIGlmICgkKHRoaXMpLmF0dHIoICdjbGFzcycgKSA9PSAnZmVhdGhlci1tb29uJyApIHtcbiAgICAgICAgICBzZXNzaW9uU3RvcmFnZS5jbGFzcyA9ICdmZWF0aGVyLW1vb24nO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKCQodGhpcykuYXR0ciggJ2NsYXNzJyApID09ICggJ2ZlYXRoZXItbW9vbiBmZWF0aGVyLXN1bicgKSkge1xuICAgICAgICAgIHNlc3Npb25TdG9yYWdlLmNsYXNzID0gJ2ZlYXRoZXItc3VuJztcbiAgICAgICAgfVxuXG4gICAgICB9KTtcblxuICAgIH0pO1xuXG4gICAgaWYodHlwZW9mKFN0b3JhZ2UpICE9PSAndW5kZWZpbmVkJyApIHtcbiAgICAgICQoICcuaW52ZXJ0IGknICkuYWRkQ2xhc3Moc2Vzc2lvblN0b3JhZ2UuY2xhc3MpO1xuICAgIH1cblxuICB9KTtcblxuXG4vLyBJbml0aWFsaXplIG1hdGVyaWFsaXplIGNvbXBvbmVudHNcblxuICAkKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbigpIHtcbiAgICAkKCcucGFyYWxsYXgnKS5wYXJhbGxheCgpO1xuXG4gICAgJChcIi5idXR0b24tY29sbGFwc2VcIikuc2lkZU5hdih7XG4gICAgICBtZW51V2lkdGg6IDI3MCxcbiAgICAgIGVkZ2U6ICdyaWdodCcsXG4gICAgICBjbG9zZU9uQ2xpY2s6IHRydWUsXG4gICAgICBkcmFnZ2FibGU6IHRydWVcbiAgICB9KTtcblxuICAgICQoJy5jb2xsYXBzaWJsZScpLmNvbGxhcHNpYmxlKCk7XG4gIH0pO1xuXG5cbiAgLy8gSW5pdGlhbGl6ZSB0aGUgSmVreWxsIFNlYXJjaCBwbHVnaW5cbiAgU2ltcGxlSmVreWxsU2VhcmNoKHtcbiAgICBzZWFyY2hJbnB1dDogZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NlYXJjaC1pbnB1dCcpLFxuICAgIHJlc3VsdHNDb250YWluZXI6IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyZXN1bHRzLWNvbnRhaW5lcicpLFxuICAgIGpzb246ICcvc2VhcmNoLmpzb24nLFxuICAgIGV4Y2x1ZGU6IFsnRGhhbW1hcHVqYSddXG4gIH0pO1xuIiwiLyohXG4gKiBqUXVlcnkgU21vb3RoIFNjcm9sbCAtIHYyLjIuMCAtIDIwMTctMDUtMDVcbiAqIGh0dHBzOi8vZ2l0aHViLmNvbS9rc3dlZGJlcmcvanF1ZXJ5LXNtb290aC1zY3JvbGxcbiAqIENvcHlyaWdodCAoYykgMjAxNyBLYXJsIFN3ZWRiZXJnXG4gKiBMaWNlbnNlZCBNSVRcbiAqL1xuXG5cbiFmdW5jdGlvbihhKXtcImZ1bmN0aW9uXCI9PXR5cGVvZiBkZWZpbmUmJmRlZmluZS5hbWQ/ZGVmaW5lKFtcImpxdWVyeVwiXSxhKTphKFwib2JqZWN0XCI9PXR5cGVvZiBtb2R1bGUmJm1vZHVsZS5leHBvcnRzP3JlcXVpcmUoXCJqcXVlcnlcIik6alF1ZXJ5KX0oZnVuY3Rpb24oYSl7dmFyIGI9e30sYz17ZXhjbHVkZTpbXSxleGNsdWRlV2l0aGluOltdLG9mZnNldDowLGRpcmVjdGlvbjpcInRvcFwiLGRlbGVnYXRlU2VsZWN0b3I6bnVsbCxzY3JvbGxFbGVtZW50Om51bGwsc2Nyb2xsVGFyZ2V0Om51bGwsYXV0b0ZvY3VzOiExLGJlZm9yZVNjcm9sbDpmdW5jdGlvbigpe30sYWZ0ZXJTY3JvbGw6ZnVuY3Rpb24oKXt9LGVhc2luZzpcInN3aW5nXCIsc3BlZWQ6NDAwLGF1dG9Db2VmZmljaWVudDoyLHByZXZlbnREZWZhdWx0OiEwfSxkPWZ1bmN0aW9uKGIpe3ZhciBjPVtdLGQ9ITEsZT1iLmRpciYmXCJsZWZ0XCI9PT1iLmRpcj9cInNjcm9sbExlZnRcIjpcInNjcm9sbFRvcFwiO3JldHVybiB0aGlzLmVhY2goZnVuY3Rpb24oKXt2YXIgYj1hKHRoaXMpO2lmKHRoaXMhPT1kb2N1bWVudCYmdGhpcyE9PXdpbmRvdylyZXR1cm4hZG9jdW1lbnQuc2Nyb2xsaW5nRWxlbWVudHx8dGhpcyE9PWRvY3VtZW50LmRvY3VtZW50RWxlbWVudCYmdGhpcyE9PWRvY3VtZW50LmJvZHk/dm9pZChiW2VdKCk+MD9jLnB1c2godGhpcyk6KGJbZV0oMSksZD1iW2VdKCk+MCxkJiZjLnB1c2godGhpcyksYltlXSgwKSkpOihjLnB1c2goZG9jdW1lbnQuc2Nyb2xsaW5nRWxlbWVudCksITEpfSksYy5sZW5ndGh8fHRoaXMuZWFjaChmdW5jdGlvbigpe3RoaXM9PT1kb2N1bWVudC5kb2N1bWVudEVsZW1lbnQmJlwic21vb3RoXCI9PT1hKHRoaXMpLmNzcyhcInNjcm9sbEJlaGF2aW9yXCIpJiYoYz1bdGhpc10pLGMubGVuZ3RofHxcIkJPRFlcIiE9PXRoaXMubm9kZU5hbWV8fChjPVt0aGlzXSl9KSxcImZpcnN0XCI9PT1iLmVsJiZjLmxlbmd0aD4xJiYoYz1bY1swXV0pLGN9LGU9L14oW1xcLVxcK109KShcXGQrKS87YS5mbi5leHRlbmQoe3Njcm9sbGFibGU6ZnVuY3Rpb24oYSl7dmFyIGI9ZC5jYWxsKHRoaXMse2RpcjphfSk7cmV0dXJuIHRoaXMucHVzaFN0YWNrKGIpfSxmaXJzdFNjcm9sbGFibGU6ZnVuY3Rpb24oYSl7dmFyIGI9ZC5jYWxsKHRoaXMse2VsOlwiZmlyc3RcIixkaXI6YX0pO3JldHVybiB0aGlzLnB1c2hTdGFjayhiKX0sc21vb3RoU2Nyb2xsOmZ1bmN0aW9uKGIsYyl7aWYoXCJvcHRpb25zXCI9PT0oYj1ifHx7fSkpcmV0dXJuIGM/dGhpcy5lYWNoKGZ1bmN0aW9uKCl7dmFyIGI9YSh0aGlzKSxkPWEuZXh0ZW5kKGIuZGF0YShcInNzT3B0c1wiKXx8e30sYyk7YSh0aGlzKS5kYXRhKFwic3NPcHRzXCIsZCl9KTp0aGlzLmZpcnN0KCkuZGF0YShcInNzT3B0c1wiKTt2YXIgZD1hLmV4dGVuZCh7fSxhLmZuLnNtb290aFNjcm9sbC5kZWZhdWx0cyxiKSxlPWZ1bmN0aW9uKGIpe3ZhciBjPWZ1bmN0aW9uKGEpe3JldHVybiBhLnJlcGxhY2UoLyg6fFxcLnxcXC8pL2csXCJcXFxcJDFcIil9LGU9dGhpcyxmPWEodGhpcyksZz1hLmV4dGVuZCh7fSxkLGYuZGF0YShcInNzT3B0c1wiKXx8e30pLGg9ZC5leGNsdWRlLGk9Zy5leGNsdWRlV2l0aGluLGo9MCxrPTAsbD0hMCxtPXt9LG49YS5zbW9vdGhTY3JvbGwuZmlsdGVyUGF0aChsb2NhdGlvbi5wYXRobmFtZSksbz1hLnNtb290aFNjcm9sbC5maWx0ZXJQYXRoKGUucGF0aG5hbWUpLHA9bG9jYXRpb24uaG9zdG5hbWU9PT1lLmhvc3RuYW1lfHwhZS5ob3N0bmFtZSxxPWcuc2Nyb2xsVGFyZ2V0fHxvPT09bixyPWMoZS5oYXNoKTtpZihyJiYhYShyKS5sZW5ndGgmJihsPSExKSxnLnNjcm9sbFRhcmdldHx8cCYmcSYmcil7Zm9yKDtsJiZqPGgubGVuZ3RoOylmLmlzKGMoaFtqKytdKSkmJihsPSExKTtmb3IoO2wmJms8aS5sZW5ndGg7KWYuY2xvc2VzdChpW2srK10pLmxlbmd0aCYmKGw9ITEpfWVsc2UgbD0hMTtsJiYoZy5wcmV2ZW50RGVmYXVsdCYmYi5wcmV2ZW50RGVmYXVsdCgpLGEuZXh0ZW5kKG0sZyx7c2Nyb2xsVGFyZ2V0Omcuc2Nyb2xsVGFyZ2V0fHxyLGxpbms6ZX0pLGEuc21vb3RoU2Nyb2xsKG0pKX07cmV0dXJuIG51bGwhPT1iLmRlbGVnYXRlU2VsZWN0b3I/dGhpcy5vZmYoXCJjbGljay5zbW9vdGhzY3JvbGxcIixiLmRlbGVnYXRlU2VsZWN0b3IpLm9uKFwiY2xpY2suc21vb3Roc2Nyb2xsXCIsYi5kZWxlZ2F0ZVNlbGVjdG9yLGUpOnRoaXMub2ZmKFwiY2xpY2suc21vb3Roc2Nyb2xsXCIpLm9uKFwiY2xpY2suc21vb3Roc2Nyb2xsXCIsZSksdGhpc319KTt2YXIgZj1mdW5jdGlvbihhKXt2YXIgYj17cmVsYXRpdmU6XCJcIn0sYz1cInN0cmluZ1wiPT10eXBlb2YgYSYmZS5leGVjKGEpO3JldHVyblwibnVtYmVyXCI9PXR5cGVvZiBhP2IucHg9YTpjJiYoYi5yZWxhdGl2ZT1jWzFdLGIucHg9cGFyc2VGbG9hdChjWzJdKXx8MCksYn0sZz1mdW5jdGlvbihiKXt2YXIgYz1hKGIuc2Nyb2xsVGFyZ2V0KTtiLmF1dG9Gb2N1cyYmYy5sZW5ndGgmJihjWzBdLmZvY3VzKCksYy5pcyhkb2N1bWVudC5hY3RpdmVFbGVtZW50KXx8KGMucHJvcCh7dGFiSW5kZXg6LTF9KSxjWzBdLmZvY3VzKCkpKSxiLmFmdGVyU2Nyb2xsLmNhbGwoYi5saW5rLGIpfTthLnNtb290aFNjcm9sbD1mdW5jdGlvbihjLGQpe2lmKFwib3B0aW9uc1wiPT09YyYmXCJvYmplY3RcIj09dHlwZW9mIGQpcmV0dXJuIGEuZXh0ZW5kKGIsZCk7dmFyIGUsaCxpLGosaz1mKGMpLGw9e30sbT0wLG49XCJvZmZzZXRcIixvPVwic2Nyb2xsVG9wXCIscD17fSxxPXt9O2sucHg/ZT1hLmV4dGVuZCh7bGluazpudWxsfSxhLmZuLnNtb290aFNjcm9sbC5kZWZhdWx0cyxiKTooZT1hLmV4dGVuZCh7bGluazpudWxsfSxhLmZuLnNtb290aFNjcm9sbC5kZWZhdWx0cyxjfHx7fSxiKSxlLnNjcm9sbEVsZW1lbnQmJihuPVwicG9zaXRpb25cIixcInN0YXRpY1wiPT09ZS5zY3JvbGxFbGVtZW50LmNzcyhcInBvc2l0aW9uXCIpJiZlLnNjcm9sbEVsZW1lbnQuY3NzKFwicG9zaXRpb25cIixcInJlbGF0aXZlXCIpKSxkJiYoaz1mKGQpKSksbz1cImxlZnRcIj09PWUuZGlyZWN0aW9uP1wic2Nyb2xsTGVmdFwiOm8sZS5zY3JvbGxFbGVtZW50PyhoPWUuc2Nyb2xsRWxlbWVudCxrLnB4fHwvXig/OkhUTUx8Qk9EWSkkLy50ZXN0KGhbMF0ubm9kZU5hbWUpfHwobT1oW29dKCkpKTpoPWEoXCJodG1sLCBib2R5XCIpLmZpcnN0U2Nyb2xsYWJsZShlLmRpcmVjdGlvbiksZS5iZWZvcmVTY3JvbGwuY2FsbChoLGUpLGw9ay5weD9rOntyZWxhdGl2ZTpcIlwiLHB4OmEoZS5zY3JvbGxUYXJnZXQpW25dKCkmJmEoZS5zY3JvbGxUYXJnZXQpW25dKClbZS5kaXJlY3Rpb25dfHwwfSxwW29dPWwucmVsYXRpdmUrKGwucHgrbStlLm9mZnNldCksaT1lLnNwZWVkLFwiYXV0b1wiPT09aSYmKGo9TWF0aC5hYnMocFtvXS1oW29dKCkpLGk9ai9lLmF1dG9Db2VmZmljaWVudCkscT17ZHVyYXRpb246aSxlYXNpbmc6ZS5lYXNpbmcsY29tcGxldGU6ZnVuY3Rpb24oKXtnKGUpfX0sZS5zdGVwJiYocS5zdGVwPWUuc3RlcCksaC5sZW5ndGg/aC5zdG9wKCkuYW5pbWF0ZShwLHEpOmcoZSl9LGEuc21vb3RoU2Nyb2xsLnZlcnNpb249XCIyLjIuMFwiLGEuc21vb3RoU2Nyb2xsLmZpbHRlclBhdGg9ZnVuY3Rpb24oYSl7cmV0dXJuIGE9YXx8XCJcIixhLnJlcGxhY2UoL15cXC8vLFwiXCIpLnJlcGxhY2UoLyg/OmluZGV4fGRlZmF1bHQpLlthLXpBLVpdezMsNH0kLyxcIlwiKS5yZXBsYWNlKC9cXC8kLyxcIlwiKX0sYS5mbi5zbW9vdGhTY3JvbGwuZGVmYXVsdHM9Y30pOyIsIi8vPSByZXF1aXJlcyBqcXVlcnkvanF1ZXJ5LnNtb290aC1zY3JvbGxcblxualF1ZXJ5LmZ4LmludGVydmFsID0gMTA7XG5cbnZhciBhdWRpbyA9ICQoXCIjYXVkaW8gYXVkaW9cIilbMF07XG52YXIgZGlzcGxheTtcbnZhciBkYXRhID0gJChcIiNkYXRhXCIpO1xudmFyIHRpbWVMaW5lTm9kZXMgPSBbXTtcblxuaWYgKGRhdGEgJiYgZGF0YS52YWwoKSkge1xuICBkaXNwbGF5ID0gJCgnPHVsIGNsYXNzPVwiZGlzcGxheVwiPjwvdWw+Jyk7XG4gIHRpbWUgPSAkKCc8ZGl2IGlkPVwidGltZVwiPjAwOjAwLjA8L2Rpdj4nKTtcbiAgdmFyIGNvbnRhaW4gPSAkKFwiI21haW5cIik7IC8qIGZvciBtYXRlcmlhbGl6ZSA8bWFpbj4gKi9cbiAgY29udGFpbi5hcHBlbmQodGltZSk7XG4gIGNvbnRhaW4uYXBwZW5kKGRpc3BsYXkpOyAvKiBmb3IgbWF0ZXJpYWxpemUgPG1haW4+ICovXG4gIC8qJCgnYm9keScpLmFwcGVuZCgnPGRpdiBpZD1cInRpbWVcIj4wMDowMC4wPC9kaXY+Jyk7IC8vIGJvb3RzdHJhcCAqL1xuICAvKiQoJ2JvZHknKS5hcHBlbmQoZGlzcGxheSk7IC8vYm9vc3RyYXAgKi9cblxuICBkYXRhLnZhbCgpLnNwbGl0KC9cXG4rLykuZm9yRWFjaChmdW5jdGlvbiAobGluZSkge1xuICAgIHZhciBtYXRjaCA9IGxpbmUubWF0Y2goL15cXHMqKFxcWyguKz8pXFxdKT8oXFxzKikoLispXFxzKiQvKTtcbiAgICBpZiAobWF0Y2gpIHtcbiAgICAgIHZhciB0aW1lICAgPSBodW1hblRvVGltZShtYXRjaFsyXSksXG4gICAgICAgICAgaW5kZW50ID0gbWF0Y2hbM10sXG4gICAgICAgICAgdGV4dCAgID0gbWF0Y2hbNF0sXG4gICAgICAgICAgbm9kZTtcbiAgICAgIGlmICh0ZXh0ID09PSBcIlwiKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiZW1wdHlcIik7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH0gZWxzZSBpZiAodGV4dFswXSA9PSBcIiNcIikge1xuICAgICAgICB2YXIgbWF0Y2ggPSB0ZXh0Lm1hdGNoKC9eKCMrKVxccyooLispJC8pLFxuICAgICAgICAgICAgZGVwdGggPSBtYXRjaFsxXS5sZW5ndGgsXG4gICAgICAgICAgICB0ZXh0ICA9IG1hdGNoWzJdO1xuICAgICAgICBjb25zb2xlLmxvZyhtYXRjaCk7XG4gICAgICAgIG5vZGUgPSAkKCc8bGk+PGgnICsgZGVwdGggKyc+JyArIHRleHQgKyAnPC9oJyArIGRlcHRoICsgJz48L2xpPicpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdmFyIHBjbGFzcztcbiAgICAgICAgaWYgKGluZGVudC5sZW5ndGggPiAxKSB7XG4gICAgICAgICAgcGNsYXNzID0gXCJlbiBmbG93LXRleHRcIjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBwY2xhc3MgPSBcInBhbGkgZmxvdy10ZXh0XCI7XG4gICAgICAgIH1cbiAgICAgICAgdGV4dCA9IHZvY2FsaXplKHRleHQpO1xuICAgICAgICB0ZXh0ID0gdW5kZXJsaW5lKHRleHQpO1xuICAgICAgICBub2RlID0gJCgnPGxpPjxwIGNsYXNzPVwiJyArIHBjbGFzcyArICdcIj4nICsgdGV4dCArICc8L3A+PC9saT4nKTtcbiAgICAgIH1cbiAgICAgIGlmICh0aW1lICE9PSBudWxsKSB7XG4gICAgICAgIHZhciB0aW1lTm9kZSA9ICQoJzxkaXYgY2xhc3M9XCJ0aW1lXCIgZGF0YS10aW1lPVwiJyArIHRpbWUgKyAnXCI+JyArIHRpbWVUb0h1bWFuKHRpbWUpICsgJzwvZGl2PicpO1xuICAgICAgICBub2RlLm9uKFwiY2xpY2tcIiwgZnVuY3Rpb24oZXZlbnQpIHtcbiAgICAgICAgICAvLyBCaW5kaW5nIGV2ZW50XG4gICAgICAgICAgLy9hdWRpby5vbmNhbnBsYXkgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgICAvLyAgY29uc29sZS5sb2coXCJDYW4gc3RhcnQgcGxheWluZyBhdWRpb1wiKTtcbiAgICAgICAgICAvL31cblxuXG4gICAgICAgICAgYXVkaW8uY3VycmVudFRpbWUgPSB0aW1lO1xuICAgICAgICAgIGF1ZGlvLnBsYXkoKTtcbiAgICAgICAgfSk7XG4gICAgICAgIG5vZGUucHJlcGVuZCh0aW1lTm9kZSk7XG4gICAgICAgIHRpbWVMaW5lTm9kZXMucHVzaCh7IHRpbWU6IHRpbWUsIG5vZGU6IG5vZGUgfSk7XG4gICAgICB9XG4gICAgICBkaXNwbGF5LmFwcGVuZChub2RlKTtcbiAgICB9XG4gIH0pO1xufVxuXG5mdW5jdGlvbiB0aW1lVG9IdW1hbih0aW1lLCBkaWdpdHMpIHtcbiAgcmV0dXJuIFwiXCIgKyBwYXJzZUludCh0aW1lIC8gNjApICsgXCI6XCIgKyAoXCIwXCIgKyAodGltZSAlIDYwKS50b0ZpeGVkKDEpKS5zbGljZSgtNCk7XG59XG5cbmZ1bmN0aW9uIGh1bWFuVG9UaW1lKHRpbWUpIHtcbiAgaWYgKHR5cGVvZih0aW1lKSA9PSBcInN0cmluZ1wiKSB7XG4gICAgdmFyIG1hdGNoID0gdGltZS5tYXRjaCgvXlxccyooXFxkKylcXHMqOlxccyooW1xcZFxcLl0rKVxccyokLyk7XG4gICAgaWYgKG1hdGNoKSB7XG4gICAgICByZXR1cm4gKHBhcnNlSW50KG1hdGNoWzFdKSAqIDYwKSArIHBhcnNlRmxvYXQobWF0Y2hbMl0pO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcGFyc2VGbG9hdCh0aW1lKSB8fCBudWxsO1xufVxuXG5mdW5jdGlvbiB2b2NhbGl6ZSh0ZXh0KSB7XG4gIHJldHVybiB0ZXh0LnJlcGxhY2UoLygoW1xcXmBdKykoLikpL2csIGZ1bmN0aW9uKHQxLCB0MiwgbSwgYykge1xuICAgIGNvbnNvbGUubG9nKFttLCBjXSk7XG4gICAgdmFyIGRpcjtcbiAgICBpZiAobVswXSA9PSBcIl5cIikge1xuICAgICAgZGlyID0gXCJ1XCI7XG4gICAgfSBlbHNlIHtcbiAgICAgIGRpciA9IFwiZFwiO1xuICAgIH1cbiAgICBpZiAobS5sZW5ndGggPiAxKSB7XG4gICAgICBkaXIgPSBkaXIgKyBkaXI7XG4gICAgfVxuICAgIHJldHVybiAnPHNwYW4gY2xhc3M9XCJ0XCI+JyArIGMgKyAnPHNwYW4+PHNwYW4gY2xhc3M9XCInICsgZGlyICsgJ1wiPjwvc3Bhbj48L3NwYW4+PC9zcGFuPic7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiB1bmRlcmxpbmUodGV4dCkge1xuICByZXR1cm4gdGV4dC5yZXBsYWNlKC9fKC4rPylfL2csIGZ1bmN0aW9uKHQxLCBtKSB7XG4gICAgcmV0dXJuICc8c3BhbiBjbGFzcz1cInVuXCI+JyArIG0gKyAnPC9zcGFuPic7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBmaW5kTGluZUJ5VGltZSh0aW1lKSB7XG4gIHZhciBtaW4gPSAwLCBtaWQgPSAwLCBtYXggPSB0aW1lTGluZU5vZGVzLmxlbmd0aDtcbiAgaWYgKG1heCA9PT0gMCkge1xuICAgIHJldHVybiBudWxsO1xuICB9XG4gIHdoaWxlIChtaW4gPCBtYXgpIHtcbiAgICBtaWQgPSBwYXJzZUludCgobWluICsgbWF4KSAvIDIpO1xuICAgIG1pZFRpbWUgPSB0aW1lTGluZU5vZGVzW21pZF0udGltZTtcbiAgICBpZiAodGltZSA8IG1pZFRpbWUpIHtcbiAgICAgIGlmIChtYXggPT0gbWlkKSB7XG4gICAgICAgIG1heCA9IG1pZCAtIDE7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBtYXggPSBtaWQ7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmIChtaW4gPT0gbWlkKSB7XG4gICAgICAgIG1pbiA9IG1pZCArIDE7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBtaW4gPSBtaWQ7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIHJldHVybiB0aW1lTGluZU5vZGVzW21pZF0ubm9kZTtcbn1cblxuZnVuY3Rpb24gdHJhY2tUaW1lKHRyYWNrKSB7XG4gIHZhciBsaW5lTm9kZSA9IGZpbmRMaW5lQnlUaW1lKHRyYWNrLmN1cnJlbnRUaW1lKTtcbiAgaWYgKGxpbmVOb2RlKSB7XG4gICAgaWYgKCFsaW5lTm9kZS5oYXNDbGFzcyhcImhpZ2hsaWdodFwiKSkge1xuICAgICAgJCgnbGkuaGlnaGxpZ2h0JykucmVtb3ZlQ2xhc3MoXCJoaWdobGlnaHRcIik7XG4gICAgICBsaW5lTm9kZS5hZGRDbGFzcyhcImhpZ2hsaWdodFwiKTtcbiAgICAgIGNvbnNvbGUubG9nKCk7XG4gICAgICBpZiAoIWVsZW1lbnRJblNjcmVlbihsaW5lTm9kZSwgMTUwKSkge1xuICAgICAgICAkLnNtb290aFNjcm9sbCh7XG4gICAgICAgICAgc2Nyb2xsVGFyZ2V0OiBsaW5lTm9kZSxcbiAgICAgICAgICBvZmZzZXQ6IC0xMDAsXG4gICAgICAgICAgZWFzaW5nOiAnc3dpbmcnLFxuICAgICAgICAgIHNwZWVkOiAxMDAwXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICAkKFwiI3RpbWVcIikudGV4dCh0aW1lVG9IdW1hbih0cmFjay5jdXJyZW50VGltZSkpO1xufVxuXG5mdW5jdGlvbiBlbGVtZW50SW5TY3JlZW4oZWwsIHRvbGVyYW5jZSkge1xuICB2YXIgZWwgICAgICA9ICQoZWwpLFxuICAgICAgd2luICAgICA9ICQod2luZG93KSxcbiAgICAgIHRvcCAgICAgPSBlbC5vZmZzZXQoKS50b3AsXG4gICAgICBoZWlnaHQgID0gZWwuaGVpZ2h0KCksXG4gICAgICB3VG9wICAgID0gd2luLnNjcm9sbFRvcCgpLFxuICAgICAgd0hlaWdodCA9IHdpbi5oZWlnaHQoKTtcbiAgcmV0dXJuICgod1RvcCA8IHRvcCAtIHRvbGVyYW5jZSkgJiZcbiAgICAgICAgICAod1RvcCArIHdIZWlnaHQgPiB0b3AgKyBoZWlnaHQgKyB0b2xlcmFuY2UpKTtcbn1cbiJdfQ==
