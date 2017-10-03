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


  $('#inverter').click(function () {
    $('body').toggleClass('night');

    if ($('body').hasClass('night')) {
      sessionStorage.setItem('theme', 'night');
    }

    else {
      sessionStorage.setItem('theme', 'day');
    }

  });

  $(document).ready(function() {
    var theme = sessionStorage.getItem('theme');
    if (theme !== '') {
      $('body').addClass(theme);
    }
  });



  $(document).ready(function() {

    $(function () {
      $('.invert i').click(function() {

        $(this).toggleClass('feather-sun');

        if ($(this).attr('class') == 'feather-moon') {
          sessionStorage.class = 'feather-moon';
        }
        else if ($(this).attr('class') == ('feather-moon feather-sun')) {
          sessionStorage.class = 'feather-sun';
        }

      });

    });

    if(typeof(Storage) !== 'undefined') {
      $('.invert i').addClass(sessionStorage.class);
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
    json: '/search.json'
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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImpxdWVyeS0zLjIuMS1jdXN0b20ubWluLmpzIiwibWF0ZXJpYWxpemUtdjAuMTAwLjItY3VzdG9tLmpzIiwic2ltcGxlLWpla3lsbC1zZWFyY2gubWluLmpzIiwic2NyaXB0cy5qcyIsImpxdWVyeS5zbW9vdGgtc2Nyb2xsLmpzIiwiY2hhbnRpbmcuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FDRkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNuMEZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ0xBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ3ZIQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNSQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyohIGpRdWVyeSB2My4yLjItcHJlIC1hamF4LC1hamF4L2pzb25wLC1hamF4L2xvYWQsLWFqYXgvcGFyc2VYTUwsLWFqYXgvc2NyaXB0LC1hamF4L3Zhci9sb2NhdGlvbiwtYWpheC92YXIvbm9uY2UsLWFqYXgvdmFyL3JxdWVyeSwtYWpheC94aHIsLW1hbmlwdWxhdGlvbi9fZXZhbFVybCwtZXZlbnQvYWpheCwtZGVwcmVjYXRlZCB8IChjKSBKUyBGb3VuZGF0aW9uIGFuZCBvdGhlciBjb250cmlidXRvcnMgfCBqcXVlcnkub3JnL2xpY2Vuc2UgKi9cbiFmdW5jdGlvbihlLHQpe1widXNlIHN0cmljdFwiO1wib2JqZWN0XCI9PXR5cGVvZiBtb2R1bGUmJlwib2JqZWN0XCI9PXR5cGVvZiBtb2R1bGUuZXhwb3J0cz9tb2R1bGUuZXhwb3J0cz1lLmRvY3VtZW50P3QoZSwhMCk6ZnVuY3Rpb24oZSl7aWYoIWUuZG9jdW1lbnQpdGhyb3cgbmV3IEVycm9yKFwialF1ZXJ5IHJlcXVpcmVzIGEgd2luZG93IHdpdGggYSBkb2N1bWVudFwiKTtyZXR1cm4gdChlKX06dChlKX0oXCJ1bmRlZmluZWRcIiE9dHlwZW9mIHdpbmRvdz93aW5kb3c6dGhpcyxmdW5jdGlvbihlLHQpe1widXNlIHN0cmljdFwiO3ZhciBuPVtdLGk9ZS5kb2N1bWVudCxyPU9iamVjdC5nZXRQcm90b3R5cGVPZixvPW4uc2xpY2Uscz1uLmNvbmNhdCxhPW4ucHVzaCx1PW4uaW5kZXhPZixsPXt9LGM9bC50b1N0cmluZyxmPWwuaGFzT3duUHJvcGVydHkscD1mLnRvU3RyaW5nLGQ9cC5jYWxsKE9iamVjdCksaD17fSxnPWZ1bmN0aW9uIGUodCl7cmV0dXJuIG51bGwhPXQmJnQ9PT10LndpbmRvd307ZnVuY3Rpb24gdihlLHQpe3ZhciBuPSh0PXR8fGkpLmNyZWF0ZUVsZW1lbnQoXCJzY3JpcHRcIik7bi50ZXh0PWUsdC5oZWFkLmFwcGVuZENoaWxkKG4pLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQobil9dmFyIG09XCIzLjIuMi1wcmUgLWFqYXgsLWFqYXgvanNvbnAsLWFqYXgvbG9hZCwtYWpheC9wYXJzZVhNTCwtYWpheC9zY3JpcHQsLWFqYXgvdmFyL2xvY2F0aW9uLC1hamF4L3Zhci9ub25jZSwtYWpheC92YXIvcnF1ZXJ5LC1hamF4L3hociwtbWFuaXB1bGF0aW9uL19ldmFsVXJsLC1ldmVudC9hamF4LC1kZXByZWNhdGVkXCIseT1mdW5jdGlvbihlLHQpe3JldHVybiBuZXcgeS5mbi5pbml0KGUsdCl9LHg9L15bXFxzXFx1RkVGRlxceEEwXSt8W1xcc1xcdUZFRkZcXHhBMF0rJC9nLGI9L14tbXMtLyx3PS8tKFthLXpdKS9nLEM9ZnVuY3Rpb24oZSx0KXtyZXR1cm4gdC50b1VwcGVyQ2FzZSgpfTt5LmZuPXkucHJvdG90eXBlPXtqcXVlcnk6bSxjb25zdHJ1Y3Rvcjp5LGxlbmd0aDowLHRvQXJyYXk6ZnVuY3Rpb24oKXtyZXR1cm4gby5jYWxsKHRoaXMpfSxnZXQ6ZnVuY3Rpb24oZSl7cmV0dXJuIG51bGw9PWU/by5jYWxsKHRoaXMpOmU8MD90aGlzW2UrdGhpcy5sZW5ndGhdOnRoaXNbZV19LHB1c2hTdGFjazpmdW5jdGlvbihlKXt2YXIgdD15Lm1lcmdlKHRoaXMuY29uc3RydWN0b3IoKSxlKTtyZXR1cm4gdC5wcmV2T2JqZWN0PXRoaXMsdH0sZWFjaDpmdW5jdGlvbihlKXtyZXR1cm4geS5lYWNoKHRoaXMsZSl9LG1hcDpmdW5jdGlvbihlKXtyZXR1cm4gdGhpcy5wdXNoU3RhY2soeS5tYXAodGhpcyxmdW5jdGlvbih0LG4pe3JldHVybiBlLmNhbGwodCxuLHQpfSkpfSxzbGljZTpmdW5jdGlvbigpe3JldHVybiB0aGlzLnB1c2hTdGFjayhvLmFwcGx5KHRoaXMsYXJndW1lbnRzKSl9LGZpcnN0OmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuZXEoMCl9LGxhc3Q6ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5lcSgtMSl9LGVxOmZ1bmN0aW9uKGUpe3ZhciB0PXRoaXMubGVuZ3RoLG49K2UrKGU8MD90OjApO3JldHVybiB0aGlzLnB1c2hTdGFjayhuPj0wJiZuPHQ/W3RoaXNbbl1dOltdKX0sZW5kOmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMucHJldk9iamVjdHx8dGhpcy5jb25zdHJ1Y3RvcigpfSxwdXNoOmEsc29ydDpuLnNvcnQsc3BsaWNlOm4uc3BsaWNlfSx5LmV4dGVuZD15LmZuLmV4dGVuZD1mdW5jdGlvbigpe3ZhciBlLHQsbixpLHIsbyxzPWFyZ3VtZW50c1swXXx8e30sYT0xLHU9YXJndW1lbnRzLmxlbmd0aCxsPSExO2ZvcihcImJvb2xlYW5cIj09dHlwZW9mIHMmJihsPXMscz1hcmd1bWVudHNbYV18fHt9LGErKyksXCJvYmplY3RcIj09dHlwZW9mIHN8fHkuaXNGdW5jdGlvbihzKXx8KHM9e30pLGE9PT11JiYocz10aGlzLGEtLSk7YTx1O2ErKylpZihudWxsIT0oZT1hcmd1bWVudHNbYV0pKWZvcih0IGluIGUpbj1zW3RdLHMhPT0oaT1lW3RdKSYmKGwmJmkmJih5LmlzUGxhaW5PYmplY3QoaSl8fChyPUFycmF5LmlzQXJyYXkoaSkpKT8ocj8ocj0hMSxvPW4mJkFycmF5LmlzQXJyYXkobik/bjpbXSk6bz1uJiZ5LmlzUGxhaW5PYmplY3Qobik/bjp7fSxzW3RdPXkuZXh0ZW5kKGwsbyxpKSk6dm9pZCAwIT09aSYmKHNbdF09aSkpO3JldHVybiBzfSx5LmV4dGVuZCh7ZXhwYW5kbzpcImpRdWVyeVwiKyhtK01hdGgucmFuZG9tKCkpLnJlcGxhY2UoL1xcRC9nLFwiXCIpLGlzUmVhZHk6ITAsZXJyb3I6ZnVuY3Rpb24oZSl7dGhyb3cgbmV3IEVycm9yKGUpfSxub29wOmZ1bmN0aW9uKCl7fSxpc0Z1bmN0aW9uOmZ1bmN0aW9uKGUpe3JldHVyblwiZnVuY3Rpb25cIj09dHlwZW9mIGUmJlwibnVtYmVyXCIhPXR5cGVvZiBlLm5vZGVUeXBlfSxpc051bWVyaWM6ZnVuY3Rpb24oZSl7dmFyIHQ9eS50eXBlKGUpO3JldHVybihcIm51bWJlclwiPT09dHx8XCJzdHJpbmdcIj09PXQpJiYhaXNOYU4oZS1wYXJzZUZsb2F0KGUpKX0saXNQbGFpbk9iamVjdDpmdW5jdGlvbihlKXt2YXIgdCxuO3JldHVybiEoIWV8fFwiW29iamVjdCBPYmplY3RdXCIhPT1jLmNhbGwoZSkpJiYoISh0PXIoZSkpfHxcImZ1bmN0aW9uXCI9PXR5cGVvZihuPWYuY2FsbCh0LFwiY29uc3RydWN0b3JcIikmJnQuY29uc3RydWN0b3IpJiZwLmNhbGwobik9PT1kKX0saXNFbXB0eU9iamVjdDpmdW5jdGlvbihlKXt2YXIgdDtmb3IodCBpbiBlKXJldHVybiExO3JldHVybiEwfSx0eXBlOmZ1bmN0aW9uKGUpe3JldHVybiBudWxsPT1lP2UrXCJcIjpcIm9iamVjdFwiPT10eXBlb2YgZXx8XCJmdW5jdGlvblwiPT10eXBlb2YgZT9sW2MuY2FsbChlKV18fFwib2JqZWN0XCI6dHlwZW9mIGV9LGdsb2JhbEV2YWw6ZnVuY3Rpb24oZSl7dihlKX0sY2FtZWxDYXNlOmZ1bmN0aW9uKGUpe3JldHVybiBlLnJlcGxhY2UoYixcIm1zLVwiKS5yZXBsYWNlKHcsQyl9LGVhY2g6ZnVuY3Rpb24oZSx0KXt2YXIgbixpPTA7aWYoVChlKSl7Zm9yKG49ZS5sZW5ndGg7aTxuO2krKylpZighMT09PXQuY2FsbChlW2ldLGksZVtpXSkpYnJlYWt9ZWxzZSBmb3IoaSBpbiBlKWlmKCExPT09dC5jYWxsKGVbaV0saSxlW2ldKSlicmVhaztyZXR1cm4gZX0sdHJpbTpmdW5jdGlvbihlKXtyZXR1cm4gbnVsbD09ZT9cIlwiOihlK1wiXCIpLnJlcGxhY2UoeCxcIlwiKX0sbWFrZUFycmF5OmZ1bmN0aW9uKGUsdCl7dmFyIG49dHx8W107cmV0dXJuIG51bGwhPWUmJihUKE9iamVjdChlKSk/eS5tZXJnZShuLFwic3RyaW5nXCI9PXR5cGVvZiBlP1tlXTplKTphLmNhbGwobixlKSksbn0saW5BcnJheTpmdW5jdGlvbihlLHQsbil7cmV0dXJuIG51bGw9PXQ/LTE6dS5jYWxsKHQsZSxuKX0sbWVyZ2U6ZnVuY3Rpb24oZSx0KXtmb3IodmFyIG49K3QubGVuZ3RoLGk9MCxyPWUubGVuZ3RoO2k8bjtpKyspZVtyKytdPXRbaV07cmV0dXJuIGUubGVuZ3RoPXIsZX0sZ3JlcDpmdW5jdGlvbihlLHQsbil7Zm9yKHZhciBpLHI9W10sbz0wLHM9ZS5sZW5ndGgsYT0hbjtvPHM7bysrKShpPSF0KGVbb10sbykpIT09YSYmci5wdXNoKGVbb10pO3JldHVybiByfSxtYXA6ZnVuY3Rpb24oZSx0LG4pe3ZhciBpLHIsbz0wLGE9W107aWYoVChlKSlmb3IoaT1lLmxlbmd0aDtvPGk7bysrKW51bGwhPShyPXQoZVtvXSxvLG4pKSYmYS5wdXNoKHIpO2Vsc2UgZm9yKG8gaW4gZSludWxsIT0ocj10KGVbb10sbyxuKSkmJmEucHVzaChyKTtyZXR1cm4gcy5hcHBseShbXSxhKX0sZ3VpZDoxLHByb3h5OmZ1bmN0aW9uKGUsdCl7dmFyIG4saSxyO2lmKFwic3RyaW5nXCI9PXR5cGVvZiB0JiYobj1lW3RdLHQ9ZSxlPW4pLHkuaXNGdW5jdGlvbihlKSlyZXR1cm4gaT1vLmNhbGwoYXJndW1lbnRzLDIpLHI9ZnVuY3Rpb24oKXtyZXR1cm4gZS5hcHBseSh0fHx0aGlzLGkuY29uY2F0KG8uY2FsbChhcmd1bWVudHMpKSl9LHIuZ3VpZD1lLmd1aWQ9ZS5ndWlkfHx5Lmd1aWQrKyxyfSxub3c6RGF0ZS5ub3csc3VwcG9ydDpofSksXCJmdW5jdGlvblwiPT10eXBlb2YgU3ltYm9sJiYoeS5mbltTeW1ib2wuaXRlcmF0b3JdPW5bU3ltYm9sLml0ZXJhdG9yXSkseS5lYWNoKFwiQm9vbGVhbiBOdW1iZXIgU3RyaW5nIEZ1bmN0aW9uIEFycmF5IERhdGUgUmVnRXhwIE9iamVjdCBFcnJvciBTeW1ib2xcIi5zcGxpdChcIiBcIiksZnVuY3Rpb24oZSx0KXtsW1wiW29iamVjdCBcIit0K1wiXVwiXT10LnRvTG93ZXJDYXNlKCl9KTtmdW5jdGlvbiBUKGUpe3ZhciB0PSEhZSYmXCJsZW5ndGhcImluIGUmJmUubGVuZ3RoLG49eS50eXBlKGUpO3JldHVybiF5LmlzRnVuY3Rpb24oZSkmJiFnKGUpJiYoXCJhcnJheVwiPT09bnx8MD09PXR8fFwibnVtYmVyXCI9PXR5cGVvZiB0JiZ0PjAmJnQtMSBpbiBlKX12YXIgaz1mdW5jdGlvbihlKXt2YXIgdCxuLGkscixvLHMsYSx1LGwsYyxmLHAsZCxoLGcsdixtLHkseCxiPVwic2l6emxlXCIrMSpuZXcgRGF0ZSx3PWUuZG9jdW1lbnQsQz0wLFQ9MCxrPXNlKCksRT1zZSgpLE49c2UoKSxBPWZ1bmN0aW9uKGUsdCl7cmV0dXJuIGU9PT10JiYoZj0hMCksMH0sRD17fS5oYXNPd25Qcm9wZXJ0eSxTPVtdLHE9Uy5wb3AsTD1TLnB1c2gsaj1TLnB1c2gsSD1TLnNsaWNlLEY9ZnVuY3Rpb24oZSx0KXtmb3IodmFyIG49MCxpPWUubGVuZ3RoO248aTtuKyspaWYoZVtuXT09PXQpcmV0dXJuIG47cmV0dXJuLTF9LE89XCJjaGVja2VkfHNlbGVjdGVkfGFzeW5jfGF1dG9mb2N1c3xhdXRvcGxheXxjb250cm9sc3xkZWZlcnxkaXNhYmxlZHxoaWRkZW58aXNtYXB8bG9vcHxtdWx0aXBsZXxvcGVufHJlYWRvbmx5fHJlcXVpcmVkfHNjb3BlZFwiLFA9XCJbXFxcXHgyMFxcXFx0XFxcXHJcXFxcblxcXFxmXVwiLEk9XCIoPzpcXFxcXFxcXC58W1xcXFx3LV18W15cXDAtXFxcXHhhMF0pK1wiLFI9XCJcXFxcW1wiK1ArXCIqKFwiK0krXCIpKD86XCIrUCtcIiooWypeJHwhfl0/PSlcIitQK1wiKig/OicoKD86XFxcXFxcXFwufFteXFxcXFxcXFwnXSkqKSd8XFxcIigoPzpcXFxcXFxcXC58W15cXFxcXFxcXFxcXCJdKSopXFxcInwoXCIrSStcIikpfClcIitQK1wiKlxcXFxdXCIsTT1cIjooXCIrSStcIikoPzpcXFxcKCgoJygoPzpcXFxcXFxcXC58W15cXFxcXFxcXCddKSopJ3xcXFwiKCg/OlxcXFxcXFxcLnxbXlxcXFxcXFxcXFxcIl0pKilcXFwiKXwoKD86XFxcXFxcXFwufFteXFxcXFxcXFwoKVtcXFxcXV18XCIrUitcIikqKXwuKilcXFxcKXwpXCIsVz1uZXcgUmVnRXhwKFArXCIrXCIsXCJnXCIpLEI9bmV3IFJlZ0V4cChcIl5cIitQK1wiK3woKD86XnxbXlxcXFxcXFxcXSkoPzpcXFxcXFxcXC4pKilcIitQK1wiKyRcIixcImdcIiksJD1uZXcgUmVnRXhwKFwiXlwiK1ArXCIqLFwiK1ArXCIqXCIpLF89bmV3IFJlZ0V4cChcIl5cIitQK1wiKihbPit+XXxcIitQK1wiKVwiK1ArXCIqXCIpLHo9bmV3IFJlZ0V4cChcIj1cIitQK1wiKihbXlxcXFxdJ1xcXCJdKj8pXCIrUCtcIipcXFxcXVwiLFwiZ1wiKSxVPW5ldyBSZWdFeHAoTSksWD1uZXcgUmVnRXhwKFwiXlwiK0krXCIkXCIpLFY9e0lEOm5ldyBSZWdFeHAoXCJeIyhcIitJK1wiKVwiKSxDTEFTUzpuZXcgUmVnRXhwKFwiXlxcXFwuKFwiK0krXCIpXCIpLFRBRzpuZXcgUmVnRXhwKFwiXihcIitJK1wifFsqXSlcIiksQVRUUjpuZXcgUmVnRXhwKFwiXlwiK1IpLFBTRVVETzpuZXcgUmVnRXhwKFwiXlwiK00pLENISUxEOm5ldyBSZWdFeHAoXCJeOihvbmx5fGZpcnN0fGxhc3R8bnRofG50aC1sYXN0KS0oY2hpbGR8b2YtdHlwZSkoPzpcXFxcKFwiK1ArXCIqKGV2ZW58b2RkfCgoWystXXwpKFxcXFxkKilufClcIitQK1wiKig/OihbKy1dfClcIitQK1wiKihcXFxcZCspfCkpXCIrUCtcIipcXFxcKXwpXCIsXCJpXCIpLGJvb2w6bmV3IFJlZ0V4cChcIl4oPzpcIitPK1wiKSRcIixcImlcIiksbmVlZHNDb250ZXh0Om5ldyBSZWdFeHAoXCJeXCIrUCtcIipbPit+XXw6KGV2ZW58b2RkfGVxfGd0fGx0fG50aHxmaXJzdHxsYXN0KSg/OlxcXFwoXCIrUCtcIiooKD86LVxcXFxkKT9cXFxcZCopXCIrUCtcIipcXFxcKXwpKD89W14tXXwkKVwiLFwiaVwiKX0sWT0vXig/OmlucHV0fHNlbGVjdHx0ZXh0YXJlYXxidXR0b24pJC9pLFE9L15oXFxkJC9pLEc9L15bXntdK1xce1xccypcXFtuYXRpdmUgXFx3LyxLPS9eKD86IyhbXFx3LV0rKXwoXFx3Kyl8XFwuKFtcXHctXSspKSQvLEo9L1srfl0vLFo9bmV3IFJlZ0V4cChcIlxcXFxcXFxcKFtcXFxcZGEtZl17MSw2fVwiK1ArXCI/fChcIitQK1wiKXwuKVwiLFwiaWdcIiksZWU9ZnVuY3Rpb24oZSx0LG4pe3ZhciBpPVwiMHhcIit0LTY1NTM2O3JldHVybiBpIT09aXx8bj90Omk8MD9TdHJpbmcuZnJvbUNoYXJDb2RlKGkrNjU1MzYpOlN0cmluZy5mcm9tQ2hhckNvZGUoaT4+MTB8NTUyOTYsMTAyMyZpfDU2MzIwKX0sdGU9LyhbXFwwLVxceDFmXFx4N2ZdfF4tP1xcZCl8Xi0kfFteXFwwLVxceDFmXFx4N2YtXFx1RkZGRlxcdy1dL2csbmU9ZnVuY3Rpb24oZSx0KXtyZXR1cm4gdD9cIlxcMFwiPT09ZT9cIlxcdWZmZmRcIjplLnNsaWNlKDAsLTEpK1wiXFxcXFwiK2UuY2hhckNvZGVBdChlLmxlbmd0aC0xKS50b1N0cmluZygxNikrXCIgXCI6XCJcXFxcXCIrZX0saWU9ZnVuY3Rpb24oKXtwKCl9LHJlPXllKGZ1bmN0aW9uKGUpe3JldHVybiEwPT09ZS5kaXNhYmxlZCYmKFwiZm9ybVwiaW4gZXx8XCJsYWJlbFwiaW4gZSl9LHtkaXI6XCJwYXJlbnROb2RlXCIsbmV4dDpcImxlZ2VuZFwifSk7dHJ5e2ouYXBwbHkoUz1ILmNhbGwody5jaGlsZE5vZGVzKSx3LmNoaWxkTm9kZXMpLFNbdy5jaGlsZE5vZGVzLmxlbmd0aF0ubm9kZVR5cGV9Y2F0Y2goZSl7aj17YXBwbHk6Uy5sZW5ndGg/ZnVuY3Rpb24oZSx0KXtMLmFwcGx5KGUsSC5jYWxsKHQpKX06ZnVuY3Rpb24oZSx0KXt2YXIgbj1lLmxlbmd0aCxpPTA7d2hpbGUoZVtuKytdPXRbaSsrXSk7ZS5sZW5ndGg9bi0xfX19ZnVuY3Rpb24gb2UoZSx0LGkscil7dmFyIG8sYSxsLGMsZixoLG0seT10JiZ0Lm93bmVyRG9jdW1lbnQsQz10P3Qubm9kZVR5cGU6OTtpZihpPWl8fFtdLFwic3RyaW5nXCIhPXR5cGVvZiBlfHwhZXx8MSE9PUMmJjkhPT1DJiYxMSE9PUMpcmV0dXJuIGk7aWYoIXImJigodD90Lm93bmVyRG9jdW1lbnR8fHQ6dykhPT1kJiZwKHQpLHQ9dHx8ZCxnKSl7aWYoMTEhPT1DJiYoZj1LLmV4ZWMoZSkpKWlmKG89ZlsxXSl7aWYoOT09PUMpe2lmKCEobD10LmdldEVsZW1lbnRCeUlkKG8pKSlyZXR1cm4gaTtpZihsLmlkPT09bylyZXR1cm4gaS5wdXNoKGwpLGl9ZWxzZSBpZih5JiYobD15LmdldEVsZW1lbnRCeUlkKG8pKSYmeCh0LGwpJiZsLmlkPT09bylyZXR1cm4gaS5wdXNoKGwpLGl9ZWxzZXtpZihmWzJdKXJldHVybiBqLmFwcGx5KGksdC5nZXRFbGVtZW50c0J5VGFnTmFtZShlKSksaTtpZigobz1mWzNdKSYmbi5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lJiZ0LmdldEVsZW1lbnRzQnlDbGFzc05hbWUpcmV0dXJuIGouYXBwbHkoaSx0LmdldEVsZW1lbnRzQnlDbGFzc05hbWUobykpLGl9aWYobi5xc2EmJiFOW2UrXCIgXCJdJiYoIXZ8fCF2LnRlc3QoZSkpKXtpZigxIT09Qyl5PXQsbT1lO2Vsc2UgaWYoXCJvYmplY3RcIiE9PXQubm9kZU5hbWUudG9Mb3dlckNhc2UoKSl7KGM9dC5nZXRBdHRyaWJ1dGUoXCJpZFwiKSk/Yz1jLnJlcGxhY2UodGUsbmUpOnQuc2V0QXR0cmlidXRlKFwiaWRcIixjPWIpLGE9KGg9cyhlKSkubGVuZ3RoO3doaWxlKGEtLSloW2FdPVwiI1wiK2MrXCIgXCIrbWUoaFthXSk7bT1oLmpvaW4oXCIsXCIpLHk9Si50ZXN0KGUpJiZnZSh0LnBhcmVudE5vZGUpfHx0fWlmKG0pdHJ5e3JldHVybiBqLmFwcGx5KGkseS5xdWVyeVNlbGVjdG9yQWxsKG0pKSxpfWNhdGNoKGUpe31maW5hbGx5e2M9PT1iJiZ0LnJlbW92ZUF0dHJpYnV0ZShcImlkXCIpfX19cmV0dXJuIHUoZS5yZXBsYWNlKEIsXCIkMVwiKSx0LGkscil9ZnVuY3Rpb24gc2UoKXt2YXIgZT1bXTtmdW5jdGlvbiB0KG4scil7cmV0dXJuIGUucHVzaChuK1wiIFwiKT5pLmNhY2hlTGVuZ3RoJiZkZWxldGUgdFtlLnNoaWZ0KCldLHRbbitcIiBcIl09cn1yZXR1cm4gdH1mdW5jdGlvbiBhZShlKXtyZXR1cm4gZVtiXT0hMCxlfWZ1bmN0aW9uIHVlKGUpe3ZhciB0PWQuY3JlYXRlRWxlbWVudChcImZpZWxkc2V0XCIpO3RyeXtyZXR1cm4hIWUodCl9Y2F0Y2goZSl7cmV0dXJuITF9ZmluYWxseXt0LnBhcmVudE5vZGUmJnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZCh0KSx0PW51bGx9fWZ1bmN0aW9uIGxlKGUsdCl7dmFyIG49ZS5zcGxpdChcInxcIikscj1uLmxlbmd0aDt3aGlsZShyLS0paS5hdHRySGFuZGxlW25bcl1dPXR9ZnVuY3Rpb24gY2UoZSx0KXt2YXIgbj10JiZlLGk9biYmMT09PWUubm9kZVR5cGUmJjE9PT10Lm5vZGVUeXBlJiZlLnNvdXJjZUluZGV4LXQuc291cmNlSW5kZXg7aWYoaSlyZXR1cm4gaTtpZihuKXdoaWxlKG49bi5uZXh0U2libGluZylpZihuPT09dClyZXR1cm4tMTtyZXR1cm4gZT8xOi0xfWZ1bmN0aW9uIGZlKGUpe3JldHVybiBmdW5jdGlvbih0KXtyZXR1cm5cImlucHV0XCI9PT10Lm5vZGVOYW1lLnRvTG93ZXJDYXNlKCkmJnQudHlwZT09PWV9fWZ1bmN0aW9uIHBlKGUpe3JldHVybiBmdW5jdGlvbih0KXt2YXIgbj10Lm5vZGVOYW1lLnRvTG93ZXJDYXNlKCk7cmV0dXJuKFwiaW5wdXRcIj09PW58fFwiYnV0dG9uXCI9PT1uKSYmdC50eXBlPT09ZX19ZnVuY3Rpb24gZGUoZSl7cmV0dXJuIGZ1bmN0aW9uKHQpe3JldHVyblwiZm9ybVwiaW4gdD90LnBhcmVudE5vZGUmJiExPT09dC5kaXNhYmxlZD9cImxhYmVsXCJpbiB0P1wibGFiZWxcImluIHQucGFyZW50Tm9kZT90LnBhcmVudE5vZGUuZGlzYWJsZWQ9PT1lOnQuZGlzYWJsZWQ9PT1lOnQuaXNEaXNhYmxlZD09PWV8fHQuaXNEaXNhYmxlZCE9PSFlJiZyZSh0KT09PWU6dC5kaXNhYmxlZD09PWU6XCJsYWJlbFwiaW4gdCYmdC5kaXNhYmxlZD09PWV9fWZ1bmN0aW9uIGhlKGUpe3JldHVybiBhZShmdW5jdGlvbih0KXtyZXR1cm4gdD0rdCxhZShmdW5jdGlvbihuLGkpe3ZhciByLG89ZShbXSxuLmxlbmd0aCx0KSxzPW8ubGVuZ3RoO3doaWxlKHMtLSluW3I9b1tzXV0mJihuW3JdPSEoaVtyXT1uW3JdKSl9KX0pfWZ1bmN0aW9uIGdlKGUpe3JldHVybiBlJiZcInVuZGVmaW5lZFwiIT10eXBlb2YgZS5nZXRFbGVtZW50c0J5VGFnTmFtZSYmZX1uPW9lLnN1cHBvcnQ9e30sbz1vZS5pc1hNTD1mdW5jdGlvbihlKXt2YXIgdD1lJiYoZS5vd25lckRvY3VtZW50fHxlKS5kb2N1bWVudEVsZW1lbnQ7cmV0dXJuISF0JiZcIkhUTUxcIiE9PXQubm9kZU5hbWV9LHA9b2Uuc2V0RG9jdW1lbnQ9ZnVuY3Rpb24oZSl7dmFyIHQscixzPWU/ZS5vd25lckRvY3VtZW50fHxlOnc7cmV0dXJuIHMhPT1kJiY5PT09cy5ub2RlVHlwZSYmcy5kb2N1bWVudEVsZW1lbnQ/KGQ9cyxoPWQuZG9jdW1lbnRFbGVtZW50LGc9IW8oZCksdyE9PWQmJihyPWQuZGVmYXVsdFZpZXcpJiZyLnRvcCE9PXImJihyLmFkZEV2ZW50TGlzdGVuZXI/ci5hZGRFdmVudExpc3RlbmVyKFwidW5sb2FkXCIsaWUsITEpOnIuYXR0YWNoRXZlbnQmJnIuYXR0YWNoRXZlbnQoXCJvbnVubG9hZFwiLGllKSksbi5hdHRyaWJ1dGVzPXVlKGZ1bmN0aW9uKGUpe3JldHVybiBlLmNsYXNzTmFtZT1cImlcIiwhZS5nZXRBdHRyaWJ1dGUoXCJjbGFzc05hbWVcIil9KSxuLmdldEVsZW1lbnRzQnlUYWdOYW1lPXVlKGZ1bmN0aW9uKGUpe3JldHVybiBlLmFwcGVuZENoaWxkKGQuY3JlYXRlQ29tbWVudChcIlwiKSksIWUuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCIqXCIpLmxlbmd0aH0pLG4uZ2V0RWxlbWVudHNCeUNsYXNzTmFtZT1HLnRlc3QoZC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKSxuLmdldEJ5SWQ9dWUoZnVuY3Rpb24oZSl7cmV0dXJuIGguYXBwZW5kQ2hpbGQoZSkuaWQ9YiwhZC5nZXRFbGVtZW50c0J5TmFtZXx8IWQuZ2V0RWxlbWVudHNCeU5hbWUoYikubGVuZ3RofSksbi5nZXRCeUlkPyhpLmZpbHRlci5JRD1mdW5jdGlvbihlKXt2YXIgdD1lLnJlcGxhY2UoWixlZSk7cmV0dXJuIGZ1bmN0aW9uKGUpe3JldHVybiBlLmdldEF0dHJpYnV0ZShcImlkXCIpPT09dH19LGkuZmluZC5JRD1mdW5jdGlvbihlLHQpe2lmKFwidW5kZWZpbmVkXCIhPXR5cGVvZiB0LmdldEVsZW1lbnRCeUlkJiZnKXt2YXIgbj10LmdldEVsZW1lbnRCeUlkKGUpO3JldHVybiBuP1tuXTpbXX19KTooaS5maWx0ZXIuSUQ9ZnVuY3Rpb24oZSl7dmFyIHQ9ZS5yZXBsYWNlKFosZWUpO3JldHVybiBmdW5jdGlvbihlKXt2YXIgbj1cInVuZGVmaW5lZFwiIT10eXBlb2YgZS5nZXRBdHRyaWJ1dGVOb2RlJiZlLmdldEF0dHJpYnV0ZU5vZGUoXCJpZFwiKTtyZXR1cm4gbiYmbi52YWx1ZT09PXR9fSxpLmZpbmQuSUQ9ZnVuY3Rpb24oZSx0KXtpZihcInVuZGVmaW5lZFwiIT10eXBlb2YgdC5nZXRFbGVtZW50QnlJZCYmZyl7dmFyIG4saSxyLG89dC5nZXRFbGVtZW50QnlJZChlKTtpZihvKXtpZigobj1vLmdldEF0dHJpYnV0ZU5vZGUoXCJpZFwiKSkmJm4udmFsdWU9PT1lKXJldHVybltvXTtyPXQuZ2V0RWxlbWVudHNCeU5hbWUoZSksaT0wO3doaWxlKG89cltpKytdKWlmKChuPW8uZ2V0QXR0cmlidXRlTm9kZShcImlkXCIpKSYmbi52YWx1ZT09PWUpcmV0dXJuW29dfXJldHVybltdfX0pLGkuZmluZC5UQUc9bi5nZXRFbGVtZW50c0J5VGFnTmFtZT9mdW5jdGlvbihlLHQpe3JldHVyblwidW5kZWZpbmVkXCIhPXR5cGVvZiB0LmdldEVsZW1lbnRzQnlUYWdOYW1lP3QuZ2V0RWxlbWVudHNCeVRhZ05hbWUoZSk6bi5xc2E/dC5xdWVyeVNlbGVjdG9yQWxsKGUpOnZvaWQgMH06ZnVuY3Rpb24oZSx0KXt2YXIgbixpPVtdLHI9MCxvPXQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoZSk7aWYoXCIqXCI9PT1lKXt3aGlsZShuPW9bcisrXSkxPT09bi5ub2RlVHlwZSYmaS5wdXNoKG4pO3JldHVybiBpfXJldHVybiBvfSxpLmZpbmQuQ0xBU1M9bi5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lJiZmdW5jdGlvbihlLHQpe2lmKFwidW5kZWZpbmVkXCIhPXR5cGVvZiB0LmdldEVsZW1lbnRzQnlDbGFzc05hbWUmJmcpcmV0dXJuIHQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShlKX0sbT1bXSx2PVtdLChuLnFzYT1HLnRlc3QoZC5xdWVyeVNlbGVjdG9yQWxsKSkmJih1ZShmdW5jdGlvbihlKXtoLmFwcGVuZENoaWxkKGUpLmlubmVySFRNTD1cIjxhIGlkPSdcIitiK1wiJz48L2E+PHNlbGVjdCBpZD0nXCIrYitcIi1cXHJcXFxcJyBtc2FsbG93Y2FwdHVyZT0nJz48b3B0aW9uIHNlbGVjdGVkPScnPjwvb3B0aW9uPjwvc2VsZWN0PlwiLGUucXVlcnlTZWxlY3RvckFsbChcIlttc2FsbG93Y2FwdHVyZV49JyddXCIpLmxlbmd0aCYmdi5wdXNoKFwiWypeJF09XCIrUCtcIiooPzonJ3xcXFwiXFxcIilcIiksZS5xdWVyeVNlbGVjdG9yQWxsKFwiW3NlbGVjdGVkXVwiKS5sZW5ndGh8fHYucHVzaChcIlxcXFxbXCIrUCtcIiooPzp2YWx1ZXxcIitPK1wiKVwiKSxlLnF1ZXJ5U2VsZWN0b3JBbGwoXCJbaWR+PVwiK2IrXCItXVwiKS5sZW5ndGh8fHYucHVzaChcIn49XCIpLGUucXVlcnlTZWxlY3RvckFsbChcIjpjaGVja2VkXCIpLmxlbmd0aHx8di5wdXNoKFwiOmNoZWNrZWRcIiksZS5xdWVyeVNlbGVjdG9yQWxsKFwiYSNcIitiK1wiKypcIikubGVuZ3RofHx2LnB1c2goXCIuIy4rWyt+XVwiKX0pLHVlKGZ1bmN0aW9uKGUpe2UuaW5uZXJIVE1MPVwiPGEgaHJlZj0nJyBkaXNhYmxlZD0nZGlzYWJsZWQnPjwvYT48c2VsZWN0IGRpc2FibGVkPSdkaXNhYmxlZCc+PG9wdGlvbi8+PC9zZWxlY3Q+XCI7dmFyIHQ9ZC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7dC5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsXCJoaWRkZW5cIiksZS5hcHBlbmRDaGlsZCh0KS5zZXRBdHRyaWJ1dGUoXCJuYW1lXCIsXCJEXCIpLGUucXVlcnlTZWxlY3RvckFsbChcIltuYW1lPWRdXCIpLmxlbmd0aCYmdi5wdXNoKFwibmFtZVwiK1ArXCIqWypeJHwhfl0/PVwiKSwyIT09ZS5xdWVyeVNlbGVjdG9yQWxsKFwiOmVuYWJsZWRcIikubGVuZ3RoJiZ2LnB1c2goXCI6ZW5hYmxlZFwiLFwiOmRpc2FibGVkXCIpLGguYXBwZW5kQ2hpbGQoZSkuZGlzYWJsZWQ9ITAsMiE9PWUucXVlcnlTZWxlY3RvckFsbChcIjpkaXNhYmxlZFwiKS5sZW5ndGgmJnYucHVzaChcIjplbmFibGVkXCIsXCI6ZGlzYWJsZWRcIiksZS5xdWVyeVNlbGVjdG9yQWxsKFwiKiw6eFwiKSx2LnB1c2goXCIsLio6XCIpfSkpLChuLm1hdGNoZXNTZWxlY3Rvcj1HLnRlc3QoeT1oLm1hdGNoZXN8fGgud2Via2l0TWF0Y2hlc1NlbGVjdG9yfHxoLm1vek1hdGNoZXNTZWxlY3Rvcnx8aC5vTWF0Y2hlc1NlbGVjdG9yfHxoLm1zTWF0Y2hlc1NlbGVjdG9yKSkmJnVlKGZ1bmN0aW9uKGUpe24uZGlzY29ubmVjdGVkTWF0Y2g9eS5jYWxsKGUsXCIqXCIpLHkuY2FsbChlLFwiW3MhPScnXTp4XCIpLG0ucHVzaChcIiE9XCIsTSl9KSx2PXYubGVuZ3RoJiZuZXcgUmVnRXhwKHYuam9pbihcInxcIikpLG09bS5sZW5ndGgmJm5ldyBSZWdFeHAobS5qb2luKFwifFwiKSksdD1HLnRlc3QoaC5jb21wYXJlRG9jdW1lbnRQb3NpdGlvbikseD10fHxHLnRlc3QoaC5jb250YWlucyk/ZnVuY3Rpb24oZSx0KXt2YXIgbj05PT09ZS5ub2RlVHlwZT9lLmRvY3VtZW50RWxlbWVudDplLGk9dCYmdC5wYXJlbnROb2RlO3JldHVybiBlPT09aXx8ISghaXx8MSE9PWkubm9kZVR5cGV8fCEobi5jb250YWlucz9uLmNvbnRhaW5zKGkpOmUuY29tcGFyZURvY3VtZW50UG9zaXRpb24mJjE2JmUuY29tcGFyZURvY3VtZW50UG9zaXRpb24oaSkpKX06ZnVuY3Rpb24oZSx0KXtpZih0KXdoaWxlKHQ9dC5wYXJlbnROb2RlKWlmKHQ9PT1lKXJldHVybiEwO3JldHVybiExfSxBPXQ/ZnVuY3Rpb24oZSx0KXtpZihlPT09dClyZXR1cm4gZj0hMCwwO3ZhciBpPSFlLmNvbXBhcmVEb2N1bWVudFBvc2l0aW9uLSF0LmNvbXBhcmVEb2N1bWVudFBvc2l0aW9uO3JldHVybiBpfHwoMSYoaT0oZS5vd25lckRvY3VtZW50fHxlKT09PSh0Lm93bmVyRG9jdW1lbnR8fHQpP2UuY29tcGFyZURvY3VtZW50UG9zaXRpb24odCk6MSl8fCFuLnNvcnREZXRhY2hlZCYmdC5jb21wYXJlRG9jdW1lbnRQb3NpdGlvbihlKT09PWk/ZT09PWR8fGUub3duZXJEb2N1bWVudD09PXcmJngodyxlKT8tMTp0PT09ZHx8dC5vd25lckRvY3VtZW50PT09dyYmeCh3LHQpPzE6Yz9GKGMsZSktRihjLHQpOjA6NCZpPy0xOjEpfTpmdW5jdGlvbihlLHQpe2lmKGU9PT10KXJldHVybiBmPSEwLDA7dmFyIG4saT0wLHI9ZS5wYXJlbnROb2RlLG89dC5wYXJlbnROb2RlLHM9W2VdLGE9W3RdO2lmKCFyfHwhbylyZXR1cm4gZT09PWQ/LTE6dD09PWQ/MTpyPy0xOm8/MTpjP0YoYyxlKS1GKGMsdCk6MDtpZihyPT09bylyZXR1cm4gY2UoZSx0KTtuPWU7d2hpbGUobj1uLnBhcmVudE5vZGUpcy51bnNoaWZ0KG4pO249dDt3aGlsZShuPW4ucGFyZW50Tm9kZSlhLnVuc2hpZnQobik7d2hpbGUoc1tpXT09PWFbaV0paSsrO3JldHVybiBpP2NlKHNbaV0sYVtpXSk6c1tpXT09PXc/LTE6YVtpXT09PXc/MTowfSxkKTpkfSxvZS5tYXRjaGVzPWZ1bmN0aW9uKGUsdCl7cmV0dXJuIG9lKGUsbnVsbCxudWxsLHQpfSxvZS5tYXRjaGVzU2VsZWN0b3I9ZnVuY3Rpb24oZSx0KXtpZigoZS5vd25lckRvY3VtZW50fHxlKSE9PWQmJnAoZSksdD10LnJlcGxhY2UoeixcIj0nJDEnXVwiKSxuLm1hdGNoZXNTZWxlY3RvciYmZyYmIU5bdCtcIiBcIl0mJighbXx8IW0udGVzdCh0KSkmJighdnx8IXYudGVzdCh0KSkpdHJ5e3ZhciBpPXkuY2FsbChlLHQpO2lmKGl8fG4uZGlzY29ubmVjdGVkTWF0Y2h8fGUuZG9jdW1lbnQmJjExIT09ZS5kb2N1bWVudC5ub2RlVHlwZSlyZXR1cm4gaX1jYXRjaChlKXt9cmV0dXJuIG9lKHQsZCxudWxsLFtlXSkubGVuZ3RoPjB9LG9lLmNvbnRhaW5zPWZ1bmN0aW9uKGUsdCl7cmV0dXJuKGUub3duZXJEb2N1bWVudHx8ZSkhPT1kJiZwKGUpLHgoZSx0KX0sb2UuYXR0cj1mdW5jdGlvbihlLHQpeyhlLm93bmVyRG9jdW1lbnR8fGUpIT09ZCYmcChlKTt2YXIgcj1pLmF0dHJIYW5kbGVbdC50b0xvd2VyQ2FzZSgpXSxvPXImJkQuY2FsbChpLmF0dHJIYW5kbGUsdC50b0xvd2VyQ2FzZSgpKT9yKGUsdCwhZyk6dm9pZCAwO3JldHVybiB2b2lkIDAhPT1vP286bi5hdHRyaWJ1dGVzfHwhZz9lLmdldEF0dHJpYnV0ZSh0KToobz1lLmdldEF0dHJpYnV0ZU5vZGUodCkpJiZvLnNwZWNpZmllZD9vLnZhbHVlOm51bGx9LG9lLmVzY2FwZT1mdW5jdGlvbihlKXtyZXR1cm4oZStcIlwiKS5yZXBsYWNlKHRlLG5lKX0sb2UuZXJyb3I9ZnVuY3Rpb24oZSl7dGhyb3cgbmV3IEVycm9yKFwiU3ludGF4IGVycm9yLCB1bnJlY29nbml6ZWQgZXhwcmVzc2lvbjogXCIrZSl9LG9lLnVuaXF1ZVNvcnQ9ZnVuY3Rpb24oZSl7dmFyIHQsaT1bXSxyPTAsbz0wO2lmKGY9IW4uZGV0ZWN0RHVwbGljYXRlcyxjPSFuLnNvcnRTdGFibGUmJmUuc2xpY2UoMCksZS5zb3J0KEEpLGYpe3doaWxlKHQ9ZVtvKytdKXQ9PT1lW29dJiYocj1pLnB1c2gobykpO3doaWxlKHItLSllLnNwbGljZShpW3JdLDEpfXJldHVybiBjPW51bGwsZX0scj1vZS5nZXRUZXh0PWZ1bmN0aW9uKGUpe3ZhciB0LG49XCJcIixpPTAsbz1lLm5vZGVUeXBlO2lmKG8pe2lmKDE9PT1vfHw5PT09b3x8MTE9PT1vKXtpZihcInN0cmluZ1wiPT10eXBlb2YgZS50ZXh0Q29udGVudClyZXR1cm4gZS50ZXh0Q29udGVudDtmb3IoZT1lLmZpcnN0Q2hpbGQ7ZTtlPWUubmV4dFNpYmxpbmcpbis9cihlKX1lbHNlIGlmKDM9PT1vfHw0PT09bylyZXR1cm4gZS5ub2RlVmFsdWV9ZWxzZSB3aGlsZSh0PWVbaSsrXSluKz1yKHQpO3JldHVybiBufSwoaT1vZS5zZWxlY3RvcnM9e2NhY2hlTGVuZ3RoOjUwLGNyZWF0ZVBzZXVkbzphZSxtYXRjaDpWLGF0dHJIYW5kbGU6e30sZmluZDp7fSxyZWxhdGl2ZTp7XCI+XCI6e2RpcjpcInBhcmVudE5vZGVcIixmaXJzdDohMH0sXCIgXCI6e2RpcjpcInBhcmVudE5vZGVcIn0sXCIrXCI6e2RpcjpcInByZXZpb3VzU2libGluZ1wiLGZpcnN0OiEwfSxcIn5cIjp7ZGlyOlwicHJldmlvdXNTaWJsaW5nXCJ9fSxwcmVGaWx0ZXI6e0FUVFI6ZnVuY3Rpb24oZSl7cmV0dXJuIGVbMV09ZVsxXS5yZXBsYWNlKFosZWUpLGVbM109KGVbM118fGVbNF18fGVbNV18fFwiXCIpLnJlcGxhY2UoWixlZSksXCJ+PVwiPT09ZVsyXSYmKGVbM109XCIgXCIrZVszXStcIiBcIiksZS5zbGljZSgwLDQpfSxDSElMRDpmdW5jdGlvbihlKXtyZXR1cm4gZVsxXT1lWzFdLnRvTG93ZXJDYXNlKCksXCJudGhcIj09PWVbMV0uc2xpY2UoMCwzKT8oZVszXXx8b2UuZXJyb3IoZVswXSksZVs0XT0rKGVbNF0/ZVs1XSsoZVs2XXx8MSk6MiooXCJldmVuXCI9PT1lWzNdfHxcIm9kZFwiPT09ZVszXSkpLGVbNV09KyhlWzddK2VbOF18fFwib2RkXCI9PT1lWzNdKSk6ZVszXSYmb2UuZXJyb3IoZVswXSksZX0sUFNFVURPOmZ1bmN0aW9uKGUpe3ZhciB0LG49IWVbNl0mJmVbMl07cmV0dXJuIFYuQ0hJTEQudGVzdChlWzBdKT9udWxsOihlWzNdP2VbMl09ZVs0XXx8ZVs1XXx8XCJcIjpuJiZVLnRlc3QobikmJih0PXMobiwhMCkpJiYodD1uLmluZGV4T2YoXCIpXCIsbi5sZW5ndGgtdCktbi5sZW5ndGgpJiYoZVswXT1lWzBdLnNsaWNlKDAsdCksZVsyXT1uLnNsaWNlKDAsdCkpLGUuc2xpY2UoMCwzKSl9fSxmaWx0ZXI6e1RBRzpmdW5jdGlvbihlKXt2YXIgdD1lLnJlcGxhY2UoWixlZSkudG9Mb3dlckNhc2UoKTtyZXR1cm5cIipcIj09PWU/ZnVuY3Rpb24oKXtyZXR1cm4hMH06ZnVuY3Rpb24oZSl7cmV0dXJuIGUubm9kZU5hbWUmJmUubm9kZU5hbWUudG9Mb3dlckNhc2UoKT09PXR9fSxDTEFTUzpmdW5jdGlvbihlKXt2YXIgdD1rW2UrXCIgXCJdO3JldHVybiB0fHwodD1uZXcgUmVnRXhwKFwiKF58XCIrUCtcIilcIitlK1wiKFwiK1ArXCJ8JClcIikpJiZrKGUsZnVuY3Rpb24oZSl7cmV0dXJuIHQudGVzdChcInN0cmluZ1wiPT10eXBlb2YgZS5jbGFzc05hbWUmJmUuY2xhc3NOYW1lfHxcInVuZGVmaW5lZFwiIT10eXBlb2YgZS5nZXRBdHRyaWJ1dGUmJmUuZ2V0QXR0cmlidXRlKFwiY2xhc3NcIil8fFwiXCIpfSl9LEFUVFI6ZnVuY3Rpb24oZSx0LG4pe3JldHVybiBmdW5jdGlvbihpKXt2YXIgcj1vZS5hdHRyKGksZSk7cmV0dXJuIG51bGw9PXI/XCIhPVwiPT09dDohdHx8KHIrPVwiXCIsXCI9XCI9PT10P3I9PT1uOlwiIT1cIj09PXQ/ciE9PW46XCJePVwiPT09dD9uJiYwPT09ci5pbmRleE9mKG4pOlwiKj1cIj09PXQ/biYmci5pbmRleE9mKG4pPi0xOlwiJD1cIj09PXQ/biYmci5zbGljZSgtbi5sZW5ndGgpPT09bjpcIn49XCI9PT10PyhcIiBcIityLnJlcGxhY2UoVyxcIiBcIikrXCIgXCIpLmluZGV4T2Yobik+LTE6XCJ8PVwiPT09dCYmKHI9PT1ufHxyLnNsaWNlKDAsbi5sZW5ndGgrMSk9PT1uK1wiLVwiKSl9fSxDSElMRDpmdW5jdGlvbihlLHQsbixpLHIpe3ZhciBvPVwibnRoXCIhPT1lLnNsaWNlKDAsMykscz1cImxhc3RcIiE9PWUuc2xpY2UoLTQpLGE9XCJvZi10eXBlXCI9PT10O3JldHVybiAxPT09aSYmMD09PXI/ZnVuY3Rpb24oZSl7cmV0dXJuISFlLnBhcmVudE5vZGV9OmZ1bmN0aW9uKHQsbix1KXt2YXIgbCxjLGYscCxkLGgsZz1vIT09cz9cIm5leHRTaWJsaW5nXCI6XCJwcmV2aW91c1NpYmxpbmdcIix2PXQucGFyZW50Tm9kZSxtPWEmJnQubm9kZU5hbWUudG9Mb3dlckNhc2UoKSx5PSF1JiYhYSx4PSExO2lmKHYpe2lmKG8pe3doaWxlKGcpe3A9dDt3aGlsZShwPXBbZ10paWYoYT9wLm5vZGVOYW1lLnRvTG93ZXJDYXNlKCk9PT1tOjE9PT1wLm5vZGVUeXBlKXJldHVybiExO2g9Zz1cIm9ubHlcIj09PWUmJiFoJiZcIm5leHRTaWJsaW5nXCJ9cmV0dXJuITB9aWYoaD1bcz92LmZpcnN0Q2hpbGQ6di5sYXN0Q2hpbGRdLHMmJnkpe3g9KGQ9KGw9KGM9KGY9KHA9dilbYl18fChwW2JdPXt9KSlbcC51bmlxdWVJRF18fChmW3AudW5pcXVlSURdPXt9KSlbZV18fFtdKVswXT09PUMmJmxbMV0pJiZsWzJdLHA9ZCYmdi5jaGlsZE5vZGVzW2RdO3doaWxlKHA9KytkJiZwJiZwW2ddfHwoeD1kPTApfHxoLnBvcCgpKWlmKDE9PT1wLm5vZGVUeXBlJiYrK3gmJnA9PT10KXtjW2VdPVtDLGQseF07YnJlYWt9fWVsc2UgaWYoeSYmKHg9ZD0obD0oYz0oZj0ocD10KVtiXXx8KHBbYl09e30pKVtwLnVuaXF1ZUlEXXx8KGZbcC51bmlxdWVJRF09e30pKVtlXXx8W10pWzBdPT09QyYmbFsxXSksITE9PT14KXdoaWxlKHA9KytkJiZwJiZwW2ddfHwoeD1kPTApfHxoLnBvcCgpKWlmKChhP3Aubm9kZU5hbWUudG9Mb3dlckNhc2UoKT09PW06MT09PXAubm9kZVR5cGUpJiYrK3gmJih5JiYoKGM9KGY9cFtiXXx8KHBbYl09e30pKVtwLnVuaXF1ZUlEXXx8KGZbcC51bmlxdWVJRF09e30pKVtlXT1bQyx4XSkscD09PXQpKWJyZWFrO3JldHVybih4LT1yKT09PWl8fHglaT09MCYmeC9pPj0wfX19LFBTRVVETzpmdW5jdGlvbihlLHQpe3ZhciBuLHI9aS5wc2V1ZG9zW2VdfHxpLnNldEZpbHRlcnNbZS50b0xvd2VyQ2FzZSgpXXx8b2UuZXJyb3IoXCJ1bnN1cHBvcnRlZCBwc2V1ZG86IFwiK2UpO3JldHVybiByW2JdP3IodCk6ci5sZW5ndGg+MT8obj1bZSxlLFwiXCIsdF0saS5zZXRGaWx0ZXJzLmhhc093blByb3BlcnR5KGUudG9Mb3dlckNhc2UoKSk/YWUoZnVuY3Rpb24oZSxuKXt2YXIgaSxvPXIoZSx0KSxzPW8ubGVuZ3RoO3doaWxlKHMtLSllW2k9RihlLG9bc10pXT0hKG5baV09b1tzXSl9KTpmdW5jdGlvbihlKXtyZXR1cm4gcihlLDAsbil9KTpyfX0scHNldWRvczp7bm90OmFlKGZ1bmN0aW9uKGUpe3ZhciB0PVtdLG49W10saT1hKGUucmVwbGFjZShCLFwiJDFcIikpO3JldHVybiBpW2JdP2FlKGZ1bmN0aW9uKGUsdCxuLHIpe3ZhciBvLHM9aShlLG51bGwscixbXSksYT1lLmxlbmd0aDt3aGlsZShhLS0pKG89c1thXSkmJihlW2FdPSEodFthXT1vKSl9KTpmdW5jdGlvbihlLHIsbyl7cmV0dXJuIHRbMF09ZSxpKHQsbnVsbCxvLG4pLHRbMF09bnVsbCwhbi5wb3AoKX19KSxoYXM6YWUoZnVuY3Rpb24oZSl7cmV0dXJuIGZ1bmN0aW9uKHQpe3JldHVybiBvZShlLHQpLmxlbmd0aD4wfX0pLGNvbnRhaW5zOmFlKGZ1bmN0aW9uKGUpe3JldHVybiBlPWUucmVwbGFjZShaLGVlKSxmdW5jdGlvbih0KXtyZXR1cm4odC50ZXh0Q29udGVudHx8dC5pbm5lclRleHR8fHIodCkpLmluZGV4T2YoZSk+LTF9fSksbGFuZzphZShmdW5jdGlvbihlKXtyZXR1cm4gWC50ZXN0KGV8fFwiXCIpfHxvZS5lcnJvcihcInVuc3VwcG9ydGVkIGxhbmc6IFwiK2UpLGU9ZS5yZXBsYWNlKFosZWUpLnRvTG93ZXJDYXNlKCksZnVuY3Rpb24odCl7dmFyIG47ZG97aWYobj1nP3QubGFuZzp0LmdldEF0dHJpYnV0ZShcInhtbDpsYW5nXCIpfHx0LmdldEF0dHJpYnV0ZShcImxhbmdcIikpcmV0dXJuKG49bi50b0xvd2VyQ2FzZSgpKT09PWV8fDA9PT1uLmluZGV4T2YoZStcIi1cIil9d2hpbGUoKHQ9dC5wYXJlbnROb2RlKSYmMT09PXQubm9kZVR5cGUpO3JldHVybiExfX0pLHRhcmdldDpmdW5jdGlvbih0KXt2YXIgbj1lLmxvY2F0aW9uJiZlLmxvY2F0aW9uLmhhc2g7cmV0dXJuIG4mJm4uc2xpY2UoMSk9PT10LmlkfSxyb290OmZ1bmN0aW9uKGUpe3JldHVybiBlPT09aH0sZm9jdXM6ZnVuY3Rpb24oZSl7cmV0dXJuIGU9PT1kLmFjdGl2ZUVsZW1lbnQmJighZC5oYXNGb2N1c3x8ZC5oYXNGb2N1cygpKSYmISEoZS50eXBlfHxlLmhyZWZ8fH5lLnRhYkluZGV4KX0sZW5hYmxlZDpkZSghMSksZGlzYWJsZWQ6ZGUoITApLGNoZWNrZWQ6ZnVuY3Rpb24oZSl7dmFyIHQ9ZS5ub2RlTmFtZS50b0xvd2VyQ2FzZSgpO3JldHVyblwiaW5wdXRcIj09PXQmJiEhZS5jaGVja2VkfHxcIm9wdGlvblwiPT09dCYmISFlLnNlbGVjdGVkfSxzZWxlY3RlZDpmdW5jdGlvbihlKXtyZXR1cm4gZS5wYXJlbnROb2RlJiZlLnBhcmVudE5vZGUuc2VsZWN0ZWRJbmRleCwhMD09PWUuc2VsZWN0ZWR9LGVtcHR5OmZ1bmN0aW9uKGUpe2ZvcihlPWUuZmlyc3RDaGlsZDtlO2U9ZS5uZXh0U2libGluZylpZihlLm5vZGVUeXBlPDYpcmV0dXJuITE7cmV0dXJuITB9LHBhcmVudDpmdW5jdGlvbihlKXtyZXR1cm4haS5wc2V1ZG9zLmVtcHR5KGUpfSxoZWFkZXI6ZnVuY3Rpb24oZSl7cmV0dXJuIFEudGVzdChlLm5vZGVOYW1lKX0saW5wdXQ6ZnVuY3Rpb24oZSl7cmV0dXJuIFkudGVzdChlLm5vZGVOYW1lKX0sYnV0dG9uOmZ1bmN0aW9uKGUpe3ZhciB0PWUubm9kZU5hbWUudG9Mb3dlckNhc2UoKTtyZXR1cm5cImlucHV0XCI9PT10JiZcImJ1dHRvblwiPT09ZS50eXBlfHxcImJ1dHRvblwiPT09dH0sdGV4dDpmdW5jdGlvbihlKXt2YXIgdDtyZXR1cm5cImlucHV0XCI9PT1lLm5vZGVOYW1lLnRvTG93ZXJDYXNlKCkmJlwidGV4dFwiPT09ZS50eXBlJiYobnVsbD09KHQ9ZS5nZXRBdHRyaWJ1dGUoXCJ0eXBlXCIpKXx8XCJ0ZXh0XCI9PT10LnRvTG93ZXJDYXNlKCkpfSxmaXJzdDpoZShmdW5jdGlvbigpe3JldHVyblswXX0pLGxhc3Q6aGUoZnVuY3Rpb24oZSx0KXtyZXR1cm5bdC0xXX0pLGVxOmhlKGZ1bmN0aW9uKGUsdCxuKXtyZXR1cm5bbjwwP24rdDpuXX0pLGV2ZW46aGUoZnVuY3Rpb24oZSx0KXtmb3IodmFyIG49MDtuPHQ7bis9MillLnB1c2gobik7cmV0dXJuIGV9KSxvZGQ6aGUoZnVuY3Rpb24oZSx0KXtmb3IodmFyIG49MTtuPHQ7bis9MillLnB1c2gobik7cmV0dXJuIGV9KSxsdDpoZShmdW5jdGlvbihlLHQsbil7Zm9yKHZhciBpPW48MD9uK3Q6bjstLWk+PTA7KWUucHVzaChpKTtyZXR1cm4gZX0pLGd0OmhlKGZ1bmN0aW9uKGUsdCxuKXtmb3IodmFyIGk9bjwwP24rdDpuOysraTx0OyllLnB1c2goaSk7cmV0dXJuIGV9KX19KS5wc2V1ZG9zLm50aD1pLnBzZXVkb3MuZXE7Zm9yKHQgaW57cmFkaW86ITAsY2hlY2tib3g6ITAsZmlsZTohMCxwYXNzd29yZDohMCxpbWFnZTohMH0paS5wc2V1ZG9zW3RdPWZlKHQpO2Zvcih0IGlue3N1Ym1pdDohMCxyZXNldDohMH0paS5wc2V1ZG9zW3RdPXBlKHQpO2Z1bmN0aW9uIHZlKCl7fXZlLnByb3RvdHlwZT1pLmZpbHRlcnM9aS5wc2V1ZG9zLGkuc2V0RmlsdGVycz1uZXcgdmUscz1vZS50b2tlbml6ZT1mdW5jdGlvbihlLHQpe3ZhciBuLHIsbyxzLGEsdSxsLGM9RVtlK1wiIFwiXTtpZihjKXJldHVybiB0PzA6Yy5zbGljZSgwKTthPWUsdT1bXSxsPWkucHJlRmlsdGVyO3doaWxlKGEpe24mJiEocj0kLmV4ZWMoYSkpfHwociYmKGE9YS5zbGljZShyWzBdLmxlbmd0aCl8fGEpLHUucHVzaChvPVtdKSksbj0hMSwocj1fLmV4ZWMoYSkpJiYobj1yLnNoaWZ0KCksby5wdXNoKHt2YWx1ZTpuLHR5cGU6clswXS5yZXBsYWNlKEIsXCIgXCIpfSksYT1hLnNsaWNlKG4ubGVuZ3RoKSk7Zm9yKHMgaW4gaS5maWx0ZXIpIShyPVZbc10uZXhlYyhhKSl8fGxbc10mJiEocj1sW3NdKHIpKXx8KG49ci5zaGlmdCgpLG8ucHVzaCh7dmFsdWU6bix0eXBlOnMsbWF0Y2hlczpyfSksYT1hLnNsaWNlKG4ubGVuZ3RoKSk7aWYoIW4pYnJlYWt9cmV0dXJuIHQ/YS5sZW5ndGg6YT9vZS5lcnJvcihlKTpFKGUsdSkuc2xpY2UoMCl9O2Z1bmN0aW9uIG1lKGUpe2Zvcih2YXIgdD0wLG49ZS5sZW5ndGgsaT1cIlwiO3Q8bjt0KyspaSs9ZVt0XS52YWx1ZTtyZXR1cm4gaX1mdW5jdGlvbiB5ZShlLHQsbil7dmFyIGk9dC5kaXIscj10Lm5leHQsbz1yfHxpLHM9biYmXCJwYXJlbnROb2RlXCI9PT1vLGE9VCsrO3JldHVybiB0LmZpcnN0P2Z1bmN0aW9uKHQsbixyKXt3aGlsZSh0PXRbaV0paWYoMT09PXQubm9kZVR5cGV8fHMpcmV0dXJuIGUodCxuLHIpO3JldHVybiExfTpmdW5jdGlvbih0LG4sdSl7dmFyIGwsYyxmLHA9W0MsYV07aWYodSl7d2hpbGUodD10W2ldKWlmKCgxPT09dC5ub2RlVHlwZXx8cykmJmUodCxuLHUpKXJldHVybiEwfWVsc2Ugd2hpbGUodD10W2ldKWlmKDE9PT10Lm5vZGVUeXBlfHxzKWlmKGY9dFtiXXx8KHRbYl09e30pLGM9Zlt0LnVuaXF1ZUlEXXx8KGZbdC51bmlxdWVJRF09e30pLHImJnI9PT10Lm5vZGVOYW1lLnRvTG93ZXJDYXNlKCkpdD10W2ldfHx0O2Vsc2V7aWYoKGw9Y1tvXSkmJmxbMF09PT1DJiZsWzFdPT09YSlyZXR1cm4gcFsyXT1sWzJdO2lmKGNbb109cCxwWzJdPWUodCxuLHUpKXJldHVybiEwfXJldHVybiExfX1mdW5jdGlvbiB4ZShlKXtyZXR1cm4gZS5sZW5ndGg+MT9mdW5jdGlvbih0LG4saSl7dmFyIHI9ZS5sZW5ndGg7d2hpbGUoci0tKWlmKCFlW3JdKHQsbixpKSlyZXR1cm4hMTtyZXR1cm4hMH06ZVswXX1mdW5jdGlvbiBiZShlLHQsbil7Zm9yKHZhciBpPTAscj10Lmxlbmd0aDtpPHI7aSsrKW9lKGUsdFtpXSxuKTtyZXR1cm4gbn1mdW5jdGlvbiB3ZShlLHQsbixpLHIpe2Zvcih2YXIgbyxzPVtdLGE9MCx1PWUubGVuZ3RoLGw9bnVsbCE9dDthPHU7YSsrKShvPWVbYV0pJiYobiYmIW4obyxpLHIpfHwocy5wdXNoKG8pLGwmJnQucHVzaChhKSkpO3JldHVybiBzfWZ1bmN0aW9uIENlKGUsdCxuLGkscixvKXtyZXR1cm4gaSYmIWlbYl0mJihpPUNlKGkpKSxyJiYhcltiXSYmKHI9Q2UocixvKSksYWUoZnVuY3Rpb24obyxzLGEsdSl7dmFyIGwsYyxmLHA9W10sZD1bXSxoPXMubGVuZ3RoLGc9b3x8YmUodHx8XCIqXCIsYS5ub2RlVHlwZT9bYV06YSxbXSksdj0hZXx8IW8mJnQ/Zzp3ZShnLHAsZSxhLHUpLG09bj9yfHwobz9lOmh8fGkpP1tdOnM6djtpZihuJiZuKHYsbSxhLHUpLGkpe2w9d2UobSxkKSxpKGwsW10sYSx1KSxjPWwubGVuZ3RoO3doaWxlKGMtLSkoZj1sW2NdKSYmKG1bZFtjXV09ISh2W2RbY11dPWYpKX1pZihvKXtpZihyfHxlKXtpZihyKXtsPVtdLGM9bS5sZW5ndGg7d2hpbGUoYy0tKShmPW1bY10pJiZsLnB1c2godltjXT1mKTtyKG51bGwsbT1bXSxsLHUpfWM9bS5sZW5ndGg7d2hpbGUoYy0tKShmPW1bY10pJiYobD1yP0YobyxmKTpwW2NdKT4tMSYmKG9bbF09IShzW2xdPWYpKX19ZWxzZSBtPXdlKG09PT1zP20uc3BsaWNlKGgsbS5sZW5ndGgpOm0pLHI/cihudWxsLHMsbSx1KTpqLmFwcGx5KHMsbSl9KX1mdW5jdGlvbiBUZShlKXtmb3IodmFyIHQsbixyLG89ZS5sZW5ndGgscz1pLnJlbGF0aXZlW2VbMF0udHlwZV0sYT1zfHxpLnJlbGF0aXZlW1wiIFwiXSx1PXM/MTowLGM9eWUoZnVuY3Rpb24oZSl7cmV0dXJuIGU9PT10fSxhLCEwKSxmPXllKGZ1bmN0aW9uKGUpe3JldHVybiBGKHQsZSk+LTF9LGEsITApLHA9W2Z1bmN0aW9uKGUsbixpKXt2YXIgcj0hcyYmKGl8fG4hPT1sKXx8KCh0PW4pLm5vZGVUeXBlP2MoZSxuLGkpOmYoZSxuLGkpKTtyZXR1cm4gdD1udWxsLHJ9XTt1PG87dSsrKWlmKG49aS5yZWxhdGl2ZVtlW3VdLnR5cGVdKXA9W3llKHhlKHApLG4pXTtlbHNle2lmKChuPWkuZmlsdGVyW2VbdV0udHlwZV0uYXBwbHkobnVsbCxlW3VdLm1hdGNoZXMpKVtiXSl7Zm9yKHI9Kyt1O3I8bztyKyspaWYoaS5yZWxhdGl2ZVtlW3JdLnR5cGVdKWJyZWFrO3JldHVybiBDZSh1PjEmJnhlKHApLHU+MSYmbWUoZS5zbGljZSgwLHUtMSkuY29uY2F0KHt2YWx1ZTpcIiBcIj09PWVbdS0yXS50eXBlP1wiKlwiOlwiXCJ9KSkucmVwbGFjZShCLFwiJDFcIiksbix1PHImJlRlKGUuc2xpY2UodSxyKSkscjxvJiZUZShlPWUuc2xpY2UocikpLHI8byYmbWUoZSkpfXAucHVzaChuKX1yZXR1cm4geGUocCl9ZnVuY3Rpb24ga2UoZSx0KXt2YXIgbj10Lmxlbmd0aD4wLHI9ZS5sZW5ndGg+MCxvPWZ1bmN0aW9uKG8scyxhLHUsYyl7dmFyIGYsaCx2LG09MCx5PVwiMFwiLHg9byYmW10sYj1bXSx3PWwsVD1vfHxyJiZpLmZpbmQuVEFHKFwiKlwiLGMpLGs9Qys9bnVsbD09dz8xOk1hdGgucmFuZG9tKCl8fC4xLEU9VC5sZW5ndGg7Zm9yKGMmJihsPXM9PT1kfHxzfHxjKTt5IT09RSYmbnVsbCE9KGY9VFt5XSk7eSsrKXtpZihyJiZmKXtoPTAsc3x8Zi5vd25lckRvY3VtZW50PT09ZHx8KHAoZiksYT0hZyk7d2hpbGUodj1lW2grK10paWYodihmLHN8fGQsYSkpe3UucHVzaChmKTticmVha31jJiYoQz1rKX1uJiYoKGY9IXYmJmYpJiZtLS0sbyYmeC5wdXNoKGYpKX1pZihtKz15LG4mJnkhPT1tKXtoPTA7d2hpbGUodj10W2grK10pdih4LGIscyxhKTtpZihvKXtpZihtPjApd2hpbGUoeS0tKXhbeV18fGJbeV18fChiW3ldPXEuY2FsbCh1KSk7Yj13ZShiKX1qLmFwcGx5KHUsYiksYyYmIW8mJmIubGVuZ3RoPjAmJm0rdC5sZW5ndGg+MSYmb2UudW5pcXVlU29ydCh1KX1yZXR1cm4gYyYmKEM9ayxsPXcpLHh9O3JldHVybiBuP2FlKG8pOm99cmV0dXJuIGE9b2UuY29tcGlsZT1mdW5jdGlvbihlLHQpe3ZhciBuLGk9W10scj1bXSxvPU5bZStcIiBcIl07aWYoIW8pe3R8fCh0PXMoZSkpLG49dC5sZW5ndGg7d2hpbGUobi0tKShvPVRlKHRbbl0pKVtiXT9pLnB1c2gobyk6ci5wdXNoKG8pOyhvPU4oZSxrZShyLGkpKSkuc2VsZWN0b3I9ZX1yZXR1cm4gb30sdT1vZS5zZWxlY3Q9ZnVuY3Rpb24oZSx0LG4scil7dmFyIG8sdSxsLGMsZixwPVwiZnVuY3Rpb25cIj09dHlwZW9mIGUmJmUsZD0hciYmcyhlPXAuc2VsZWN0b3J8fGUpO2lmKG49bnx8W10sMT09PWQubGVuZ3RoKXtpZigodT1kWzBdPWRbMF0uc2xpY2UoMCkpLmxlbmd0aD4yJiZcIklEXCI9PT0obD11WzBdKS50eXBlJiY5PT09dC5ub2RlVHlwZSYmZyYmaS5yZWxhdGl2ZVt1WzFdLnR5cGVdKXtpZighKHQ9KGkuZmluZC5JRChsLm1hdGNoZXNbMF0ucmVwbGFjZShaLGVlKSx0KXx8W10pWzBdKSlyZXR1cm4gbjtwJiYodD10LnBhcmVudE5vZGUpLGU9ZS5zbGljZSh1LnNoaWZ0KCkudmFsdWUubGVuZ3RoKX1vPVYubmVlZHNDb250ZXh0LnRlc3QoZSk/MDp1Lmxlbmd0aDt3aGlsZShvLS0pe2lmKGw9dVtvXSxpLnJlbGF0aXZlW2M9bC50eXBlXSlicmVhaztpZigoZj1pLmZpbmRbY10pJiYocj1mKGwubWF0Y2hlc1swXS5yZXBsYWNlKFosZWUpLEoudGVzdCh1WzBdLnR5cGUpJiZnZSh0LnBhcmVudE5vZGUpfHx0KSkpe2lmKHUuc3BsaWNlKG8sMSksIShlPXIubGVuZ3RoJiZtZSh1KSkpcmV0dXJuIGouYXBwbHkobixyKSxuO2JyZWFrfX19cmV0dXJuKHB8fGEoZSxkKSkocix0LCFnLG4sIXR8fEoudGVzdChlKSYmZ2UodC5wYXJlbnROb2RlKXx8dCksbn0sbi5zb3J0U3RhYmxlPWIuc3BsaXQoXCJcIikuc29ydChBKS5qb2luKFwiXCIpPT09YixuLmRldGVjdER1cGxpY2F0ZXM9ISFmLHAoKSxuLnNvcnREZXRhY2hlZD11ZShmdW5jdGlvbihlKXtyZXR1cm4gMSZlLmNvbXBhcmVEb2N1bWVudFBvc2l0aW9uKGQuY3JlYXRlRWxlbWVudChcImZpZWxkc2V0XCIpKX0pLHVlKGZ1bmN0aW9uKGUpe3JldHVybiBlLmlubmVySFRNTD1cIjxhIGhyZWY9JyMnPjwvYT5cIixcIiNcIj09PWUuZmlyc3RDaGlsZC5nZXRBdHRyaWJ1dGUoXCJocmVmXCIpfSl8fGxlKFwidHlwZXxocmVmfGhlaWdodHx3aWR0aFwiLGZ1bmN0aW9uKGUsdCxuKXtpZighbilyZXR1cm4gZS5nZXRBdHRyaWJ1dGUodCxcInR5cGVcIj09PXQudG9Mb3dlckNhc2UoKT8xOjIpfSksbi5hdHRyaWJ1dGVzJiZ1ZShmdW5jdGlvbihlKXtyZXR1cm4gZS5pbm5lckhUTUw9XCI8aW5wdXQvPlwiLGUuZmlyc3RDaGlsZC5zZXRBdHRyaWJ1dGUoXCJ2YWx1ZVwiLFwiXCIpLFwiXCI9PT1lLmZpcnN0Q2hpbGQuZ2V0QXR0cmlidXRlKFwidmFsdWVcIil9KXx8bGUoXCJ2YWx1ZVwiLGZ1bmN0aW9uKGUsdCxuKXtpZighbiYmXCJpbnB1dFwiPT09ZS5ub2RlTmFtZS50b0xvd2VyQ2FzZSgpKXJldHVybiBlLmRlZmF1bHRWYWx1ZX0pLHVlKGZ1bmN0aW9uKGUpe3JldHVybiBudWxsPT1lLmdldEF0dHJpYnV0ZShcImRpc2FibGVkXCIpfSl8fGxlKE8sZnVuY3Rpb24oZSx0LG4pe3ZhciBpO2lmKCFuKXJldHVybiEwPT09ZVt0XT90LnRvTG93ZXJDYXNlKCk6KGk9ZS5nZXRBdHRyaWJ1dGVOb2RlKHQpKSYmaS5zcGVjaWZpZWQ/aS52YWx1ZTpudWxsfSksb2V9KGUpO3kuZmluZD1rLHkuZXhwcj1rLnNlbGVjdG9ycyx5LmV4cHJbXCI6XCJdPXkuZXhwci5wc2V1ZG9zLHkudW5pcXVlU29ydD15LnVuaXF1ZT1rLnVuaXF1ZVNvcnQseS50ZXh0PWsuZ2V0VGV4dCx5LmlzWE1MRG9jPWsuaXNYTUwseS5jb250YWlucz1rLmNvbnRhaW5zLHkuZXNjYXBlU2VsZWN0b3I9ay5lc2NhcGU7dmFyIEU9ZnVuY3Rpb24oZSx0LG4pe3ZhciBpPVtdLHI9dm9pZCAwIT09bjt3aGlsZSgoZT1lW3RdKSYmOSE9PWUubm9kZVR5cGUpaWYoMT09PWUubm9kZVR5cGUpe2lmKHImJnkoZSkuaXMobikpYnJlYWs7aS5wdXNoKGUpfXJldHVybiBpfSxOPWZ1bmN0aW9uKGUsdCl7Zm9yKHZhciBuPVtdO2U7ZT1lLm5leHRTaWJsaW5nKTE9PT1lLm5vZGVUeXBlJiZlIT09dCYmbi5wdXNoKGUpO3JldHVybiBufSxBPXkuZXhwci5tYXRjaC5uZWVkc0NvbnRleHQ7ZnVuY3Rpb24gRChlLHQpe3JldHVybiBlLm5vZGVOYW1lJiZlLm5vZGVOYW1lLnRvTG93ZXJDYXNlKCk9PT10LnRvTG93ZXJDYXNlKCl9dmFyIFM9L148KFthLXpdW15cXC9cXDA+OlxceDIwXFx0XFxyXFxuXFxmXSopW1xceDIwXFx0XFxyXFxuXFxmXSpcXC8/Pig/OjxcXC9cXDE+fCkkL2kscT0vXi5bXjojXFxbXFwuLF0qJC87ZnVuY3Rpb24gTChlLHQsbil7cmV0dXJuIHkuaXNGdW5jdGlvbih0KT95LmdyZXAoZSxmdW5jdGlvbihlLGkpe3JldHVybiEhdC5jYWxsKGUsaSxlKSE9PW59KTp0Lm5vZGVUeXBlP3kuZ3JlcChlLGZ1bmN0aW9uKGUpe3JldHVybiBlPT09dCE9PW59KTpcInN0cmluZ1wiIT10eXBlb2YgdD95LmdyZXAoZSxmdW5jdGlvbihlKXtyZXR1cm4gdS5jYWxsKHQsZSk+LTEhPT1ufSk6cS50ZXN0KHQpP3kuZmlsdGVyKHQsZSxuKToodD15LmZpbHRlcih0LGUpLHkuZ3JlcChlLGZ1bmN0aW9uKGUpe3JldHVybiB1LmNhbGwodCxlKT4tMSE9PW4mJjE9PT1lLm5vZGVUeXBlfSkpfXkuZmlsdGVyPWZ1bmN0aW9uKGUsdCxuKXt2YXIgaT10WzBdO3JldHVybiBuJiYoZT1cIjpub3QoXCIrZStcIilcIiksMT09PXQubGVuZ3RoJiYxPT09aS5ub2RlVHlwZT95LmZpbmQubWF0Y2hlc1NlbGVjdG9yKGksZSk/W2ldOltdOnkuZmluZC5tYXRjaGVzKGUseS5ncmVwKHQsZnVuY3Rpb24oZSl7cmV0dXJuIDE9PT1lLm5vZGVUeXBlfSkpfSx5LmZuLmV4dGVuZCh7ZmluZDpmdW5jdGlvbihlKXt2YXIgdCxuLGk9dGhpcy5sZW5ndGgscj10aGlzO2lmKFwic3RyaW5nXCIhPXR5cGVvZiBlKXJldHVybiB0aGlzLnB1c2hTdGFjayh5KGUpLmZpbHRlcihmdW5jdGlvbigpe2Zvcih0PTA7dDxpO3QrKylpZih5LmNvbnRhaW5zKHJbdF0sdGhpcykpcmV0dXJuITB9KSk7Zm9yKG49dGhpcy5wdXNoU3RhY2soW10pLHQ9MDt0PGk7dCsrKXkuZmluZChlLHJbdF0sbik7cmV0dXJuIGk+MT95LnVuaXF1ZVNvcnQobik6bn0sZmlsdGVyOmZ1bmN0aW9uKGUpe3JldHVybiB0aGlzLnB1c2hTdGFjayhMKHRoaXMsZXx8W10sITEpKX0sbm90OmZ1bmN0aW9uKGUpe3JldHVybiB0aGlzLnB1c2hTdGFjayhMKHRoaXMsZXx8W10sITApKX0saXM6ZnVuY3Rpb24oZSl7cmV0dXJuISFMKHRoaXMsXCJzdHJpbmdcIj09dHlwZW9mIGUmJkEudGVzdChlKT95KGUpOmV8fFtdLCExKS5sZW5ndGh9fSk7dmFyIGosSD0vXig/OlxccyooPFtcXHdcXFddKz4pW14+XSp8IyhbXFx3LV0rKSkkLzsoeS5mbi5pbml0PWZ1bmN0aW9uKGUsdCxuKXt2YXIgcixvO2lmKCFlKXJldHVybiB0aGlzO2lmKG49bnx8aixcInN0cmluZ1wiPT10eXBlb2YgZSl7aWYoIShyPVwiPFwiPT09ZVswXSYmXCI+XCI9PT1lW2UubGVuZ3RoLTFdJiZlLmxlbmd0aD49Mz9bbnVsbCxlLG51bGxdOkguZXhlYyhlKSl8fCFyWzFdJiZ0KXJldHVybiF0fHx0LmpxdWVyeT8odHx8bikuZmluZChlKTp0aGlzLmNvbnN0cnVjdG9yKHQpLmZpbmQoZSk7aWYoclsxXSl7aWYodD10IGluc3RhbmNlb2YgeT90WzBdOnQseS5tZXJnZSh0aGlzLHkucGFyc2VIVE1MKHJbMV0sdCYmdC5ub2RlVHlwZT90Lm93bmVyRG9jdW1lbnR8fHQ6aSwhMCkpLFMudGVzdChyWzFdKSYmeS5pc1BsYWluT2JqZWN0KHQpKWZvcihyIGluIHQpeS5pc0Z1bmN0aW9uKHRoaXNbcl0pP3RoaXNbcl0odFtyXSk6dGhpcy5hdHRyKHIsdFtyXSk7cmV0dXJuIHRoaXN9cmV0dXJuKG89aS5nZXRFbGVtZW50QnlJZChyWzJdKSkmJih0aGlzWzBdPW8sdGhpcy5sZW5ndGg9MSksdGhpc31yZXR1cm4gZS5ub2RlVHlwZT8odGhpc1swXT1lLHRoaXMubGVuZ3RoPTEsdGhpcyk6eS5pc0Z1bmN0aW9uKGUpP3ZvaWQgMCE9PW4ucmVhZHk/bi5yZWFkeShlKTplKHkpOnkubWFrZUFycmF5KGUsdGhpcyl9KS5wcm90b3R5cGU9eS5mbixqPXkoaSk7dmFyIEY9L14oPzpwYXJlbnRzfHByZXYoPzpVbnRpbHxBbGwpKS8sTz17Y2hpbGRyZW46ITAsY29udGVudHM6ITAsbmV4dDohMCxwcmV2OiEwfTt5LmZuLmV4dGVuZCh7aGFzOmZ1bmN0aW9uKGUpe3ZhciB0PXkoZSx0aGlzKSxuPXQubGVuZ3RoO3JldHVybiB0aGlzLmZpbHRlcihmdW5jdGlvbigpe2Zvcih2YXIgZT0wO2U8bjtlKyspaWYoeS5jb250YWlucyh0aGlzLHRbZV0pKXJldHVybiEwfSl9LGNsb3Nlc3Q6ZnVuY3Rpb24oZSx0KXt2YXIgbixpPTAscj10aGlzLmxlbmd0aCxvPVtdLHM9XCJzdHJpbmdcIiE9dHlwZW9mIGUmJnkoZSk7aWYoIUEudGVzdChlKSlmb3IoO2k8cjtpKyspZm9yKG49dGhpc1tpXTtuJiZuIT09dDtuPW4ucGFyZW50Tm9kZSlpZihuLm5vZGVUeXBlPDExJiYocz9zLmluZGV4KG4pPi0xOjE9PT1uLm5vZGVUeXBlJiZ5LmZpbmQubWF0Y2hlc1NlbGVjdG9yKG4sZSkpKXtvLnB1c2gobik7YnJlYWt9cmV0dXJuIHRoaXMucHVzaFN0YWNrKG8ubGVuZ3RoPjE/eS51bmlxdWVTb3J0KG8pOm8pfSxpbmRleDpmdW5jdGlvbihlKXtyZXR1cm4gZT9cInN0cmluZ1wiPT10eXBlb2YgZT91LmNhbGwoeShlKSx0aGlzWzBdKTp1LmNhbGwodGhpcyxlLmpxdWVyeT9lWzBdOmUpOnRoaXNbMF0mJnRoaXNbMF0ucGFyZW50Tm9kZT90aGlzLmZpcnN0KCkucHJldkFsbCgpLmxlbmd0aDotMX0sYWRkOmZ1bmN0aW9uKGUsdCl7cmV0dXJuIHRoaXMucHVzaFN0YWNrKHkudW5pcXVlU29ydCh5Lm1lcmdlKHRoaXMuZ2V0KCkseShlLHQpKSkpfSxhZGRCYWNrOmZ1bmN0aW9uKGUpe3JldHVybiB0aGlzLmFkZChudWxsPT1lP3RoaXMucHJldk9iamVjdDp0aGlzLnByZXZPYmplY3QuZmlsdGVyKGUpKX19KTtmdW5jdGlvbiBQKGUsdCl7d2hpbGUoKGU9ZVt0XSkmJjEhPT1lLm5vZGVUeXBlKTtyZXR1cm4gZX15LmVhY2goe3BhcmVudDpmdW5jdGlvbihlKXt2YXIgdD1lLnBhcmVudE5vZGU7cmV0dXJuIHQmJjExIT09dC5ub2RlVHlwZT90Om51bGx9LHBhcmVudHM6ZnVuY3Rpb24oZSl7cmV0dXJuIEUoZSxcInBhcmVudE5vZGVcIil9LHBhcmVudHNVbnRpbDpmdW5jdGlvbihlLHQsbil7cmV0dXJuIEUoZSxcInBhcmVudE5vZGVcIixuKX0sbmV4dDpmdW5jdGlvbihlKXtyZXR1cm4gUChlLFwibmV4dFNpYmxpbmdcIil9LHByZXY6ZnVuY3Rpb24oZSl7cmV0dXJuIFAoZSxcInByZXZpb3VzU2libGluZ1wiKX0sbmV4dEFsbDpmdW5jdGlvbihlKXtyZXR1cm4gRShlLFwibmV4dFNpYmxpbmdcIil9LHByZXZBbGw6ZnVuY3Rpb24oZSl7cmV0dXJuIEUoZSxcInByZXZpb3VzU2libGluZ1wiKX0sbmV4dFVudGlsOmZ1bmN0aW9uKGUsdCxuKXtyZXR1cm4gRShlLFwibmV4dFNpYmxpbmdcIixuKX0scHJldlVudGlsOmZ1bmN0aW9uKGUsdCxuKXtyZXR1cm4gRShlLFwicHJldmlvdXNTaWJsaW5nXCIsbil9LHNpYmxpbmdzOmZ1bmN0aW9uKGUpe3JldHVybiBOKChlLnBhcmVudE5vZGV8fHt9KS5maXJzdENoaWxkLGUpfSxjaGlsZHJlbjpmdW5jdGlvbihlKXtyZXR1cm4gTihlLmZpcnN0Q2hpbGQpfSxjb250ZW50czpmdW5jdGlvbihlKXtyZXR1cm4gRChlLFwiaWZyYW1lXCIpP2UuY29udGVudERvY3VtZW50OihEKGUsXCJ0ZW1wbGF0ZVwiKSYmKGU9ZS5jb250ZW50fHxlKSx5Lm1lcmdlKFtdLGUuY2hpbGROb2RlcykpfX0sZnVuY3Rpb24oZSx0KXt5LmZuW2VdPWZ1bmN0aW9uKG4saSl7dmFyIHI9eS5tYXAodGhpcyx0LG4pO3JldHVyblwiVW50aWxcIiE9PWUuc2xpY2UoLTUpJiYoaT1uKSxpJiZcInN0cmluZ1wiPT10eXBlb2YgaSYmKHI9eS5maWx0ZXIoaSxyKSksdGhpcy5sZW5ndGg+MSYmKE9bZV18fHkudW5pcXVlU29ydChyKSxGLnRlc3QoZSkmJnIucmV2ZXJzZSgpKSx0aGlzLnB1c2hTdGFjayhyKX19KTt2YXIgST0vW15cXHgyMFxcdFxcclxcblxcZl0rL2c7ZnVuY3Rpb24gUihlKXt2YXIgdD17fTtyZXR1cm4geS5lYWNoKGUubWF0Y2goSSl8fFtdLGZ1bmN0aW9uKGUsbil7dFtuXT0hMH0pLHR9eS5DYWxsYmFja3M9ZnVuY3Rpb24oZSl7ZT1cInN0cmluZ1wiPT10eXBlb2YgZT9SKGUpOnkuZXh0ZW5kKHt9LGUpO3ZhciB0LG4saSxyLG89W10scz1bXSxhPS0xLHU9ZnVuY3Rpb24oKXtmb3Iocj1yfHxlLm9uY2UsaT10PSEwO3MubGVuZ3RoO2E9LTEpe249cy5zaGlmdCgpO3doaWxlKCsrYTxvLmxlbmd0aCkhMT09PW9bYV0uYXBwbHkoblswXSxuWzFdKSYmZS5zdG9wT25GYWxzZSYmKGE9by5sZW5ndGgsbj0hMSl9ZS5tZW1vcnl8fChuPSExKSx0PSExLHImJihvPW4/W106XCJcIil9LGw9e2FkZDpmdW5jdGlvbigpe3JldHVybiBvJiYobiYmIXQmJihhPW8ubGVuZ3RoLTEscy5wdXNoKG4pKSxmdW5jdGlvbiB0KG4pe3kuZWFjaChuLGZ1bmN0aW9uKG4saSl7eS5pc0Z1bmN0aW9uKGkpP2UudW5pcXVlJiZsLmhhcyhpKXx8by5wdXNoKGkpOmkmJmkubGVuZ3RoJiZcInN0cmluZ1wiIT09eS50eXBlKGkpJiZ0KGkpfSl9KGFyZ3VtZW50cyksbiYmIXQmJnUoKSksdGhpc30scmVtb3ZlOmZ1bmN0aW9uKCl7cmV0dXJuIHkuZWFjaChhcmd1bWVudHMsZnVuY3Rpb24oZSx0KXt2YXIgbjt3aGlsZSgobj15LmluQXJyYXkodCxvLG4pKT4tMSlvLnNwbGljZShuLDEpLG48PWEmJmEtLX0pLHRoaXN9LGhhczpmdW5jdGlvbihlKXtyZXR1cm4gZT95LmluQXJyYXkoZSxvKT4tMTpvLmxlbmd0aD4wfSxlbXB0eTpmdW5jdGlvbigpe3JldHVybiBvJiYobz1bXSksdGhpc30sZGlzYWJsZTpmdW5jdGlvbigpe3JldHVybiByPXM9W10sbz1uPVwiXCIsdGhpc30sZGlzYWJsZWQ6ZnVuY3Rpb24oKXtyZXR1cm4hb30sbG9jazpmdW5jdGlvbigpe3JldHVybiByPXM9W10sbnx8dHx8KG89bj1cIlwiKSx0aGlzfSxsb2NrZWQ6ZnVuY3Rpb24oKXtyZXR1cm4hIXJ9LGZpcmVXaXRoOmZ1bmN0aW9uKGUsbil7cmV0dXJuIHJ8fChuPVtlLChuPW58fFtdKS5zbGljZT9uLnNsaWNlKCk6bl0scy5wdXNoKG4pLHR8fHUoKSksdGhpc30sZmlyZTpmdW5jdGlvbigpe3JldHVybiBsLmZpcmVXaXRoKHRoaXMsYXJndW1lbnRzKSx0aGlzfSxmaXJlZDpmdW5jdGlvbigpe3JldHVybiEhaX19O3JldHVybiBsfTtmdW5jdGlvbiBNKGUpe3JldHVybiBlfWZ1bmN0aW9uIFcoZSl7dGhyb3cgZX1mdW5jdGlvbiBCKGUsdCxuLGkpe3ZhciByO3RyeXtlJiZ5LmlzRnVuY3Rpb24ocj1lLnByb21pc2UpP3IuY2FsbChlKS5kb25lKHQpLmZhaWwobik6ZSYmeS5pc0Z1bmN0aW9uKHI9ZS50aGVuKT9yLmNhbGwoZSx0LG4pOnQuYXBwbHkodm9pZCAwLFtlXS5zbGljZShpKSl9Y2F0Y2goZSl7bi5hcHBseSh2b2lkIDAsW2VdKX19eS5leHRlbmQoe0RlZmVycmVkOmZ1bmN0aW9uKHQpe3ZhciBuPVtbXCJub3RpZnlcIixcInByb2dyZXNzXCIseS5DYWxsYmFja3MoXCJtZW1vcnlcIikseS5DYWxsYmFja3MoXCJtZW1vcnlcIiksMl0sW1wicmVzb2x2ZVwiLFwiZG9uZVwiLHkuQ2FsbGJhY2tzKFwib25jZSBtZW1vcnlcIikseS5DYWxsYmFja3MoXCJvbmNlIG1lbW9yeVwiKSwwLFwicmVzb2x2ZWRcIl0sW1wicmVqZWN0XCIsXCJmYWlsXCIseS5DYWxsYmFja3MoXCJvbmNlIG1lbW9yeVwiKSx5LkNhbGxiYWNrcyhcIm9uY2UgbWVtb3J5XCIpLDEsXCJyZWplY3RlZFwiXV0saT1cInBlbmRpbmdcIixyPXtzdGF0ZTpmdW5jdGlvbigpe3JldHVybiBpfSxhbHdheXM6ZnVuY3Rpb24oKXtyZXR1cm4gby5kb25lKGFyZ3VtZW50cykuZmFpbChhcmd1bWVudHMpLHRoaXN9LGNhdGNoOmZ1bmN0aW9uKGUpe3JldHVybiByLnRoZW4obnVsbCxlKX0scGlwZTpmdW5jdGlvbigpe3ZhciBlPWFyZ3VtZW50cztyZXR1cm4geS5EZWZlcnJlZChmdW5jdGlvbih0KXt5LmVhY2gobixmdW5jdGlvbihuLGkpe3ZhciByPXkuaXNGdW5jdGlvbihlW2lbNF1dKSYmZVtpWzRdXTtvW2lbMV1dKGZ1bmN0aW9uKCl7dmFyIGU9ciYmci5hcHBseSh0aGlzLGFyZ3VtZW50cyk7ZSYmeS5pc0Z1bmN0aW9uKGUucHJvbWlzZSk/ZS5wcm9taXNlKCkucHJvZ3Jlc3ModC5ub3RpZnkpLmRvbmUodC5yZXNvbHZlKS5mYWlsKHQucmVqZWN0KTp0W2lbMF0rXCJXaXRoXCJdKHRoaXMscj9bZV06YXJndW1lbnRzKX0pfSksZT1udWxsfSkucHJvbWlzZSgpfSx0aGVuOmZ1bmN0aW9uKHQsaSxyKXt2YXIgbz0wO2Z1bmN0aW9uIHModCxuLGkscil7cmV0dXJuIGZ1bmN0aW9uKCl7dmFyIGE9dGhpcyx1PWFyZ3VtZW50cyxsPWZ1bmN0aW9uKCl7dmFyIGUsbDtpZighKHQ8bykpe2lmKChlPWkuYXBwbHkoYSx1KSk9PT1uLnByb21pc2UoKSl0aHJvdyBuZXcgVHlwZUVycm9yKFwiVGhlbmFibGUgc2VsZi1yZXNvbHV0aW9uXCIpO2w9ZSYmKFwib2JqZWN0XCI9PXR5cGVvZiBlfHxcImZ1bmN0aW9uXCI9PXR5cGVvZiBlKSYmZS50aGVuLHkuaXNGdW5jdGlvbihsKT9yP2wuY2FsbChlLHMobyxuLE0scikscyhvLG4sVyxyKSk6KG8rKyxsLmNhbGwoZSxzKG8sbixNLHIpLHMobyxuLFcscikscyhvLG4sTSxuLm5vdGlmeVdpdGgpKSk6KGkhPT1NJiYoYT12b2lkIDAsdT1bZV0pLChyfHxuLnJlc29sdmVXaXRoKShhLHUpKX19LGM9cj9sOmZ1bmN0aW9uKCl7dHJ5e2woKX1jYXRjaChlKXt5LkRlZmVycmVkLmV4Y2VwdGlvbkhvb2smJnkuRGVmZXJyZWQuZXhjZXB0aW9uSG9vayhlLGMuc3RhY2tUcmFjZSksdCsxPj1vJiYoaSE9PVcmJihhPXZvaWQgMCx1PVtlXSksbi5yZWplY3RXaXRoKGEsdSkpfX07dD9jKCk6KHkuRGVmZXJyZWQuZ2V0U3RhY2tIb29rJiYoYy5zdGFja1RyYWNlPXkuRGVmZXJyZWQuZ2V0U3RhY2tIb29rKCkpLGUuc2V0VGltZW91dChjKSl9fXJldHVybiB5LkRlZmVycmVkKGZ1bmN0aW9uKGUpe25bMF1bM10uYWRkKHMoMCxlLHkuaXNGdW5jdGlvbihyKT9yOk0sZS5ub3RpZnlXaXRoKSksblsxXVszXS5hZGQocygwLGUseS5pc0Z1bmN0aW9uKHQpP3Q6TSkpLG5bMl1bM10uYWRkKHMoMCxlLHkuaXNGdW5jdGlvbihpKT9pOlcpKX0pLnByb21pc2UoKX0scHJvbWlzZTpmdW5jdGlvbihlKXtyZXR1cm4gbnVsbCE9ZT95LmV4dGVuZChlLHIpOnJ9fSxvPXt9O3JldHVybiB5LmVhY2gobixmdW5jdGlvbihlLHQpe3ZhciBzPXRbMl0sYT10WzVdO3JbdFsxXV09cy5hZGQsYSYmcy5hZGQoZnVuY3Rpb24oKXtpPWF9LG5bMy1lXVsyXS5kaXNhYmxlLG5bMy1lXVszXS5kaXNhYmxlLG5bMF1bMl0ubG9jayxuWzBdWzNdLmxvY2spLHMuYWRkKHRbM10uZmlyZSksb1t0WzBdXT1mdW5jdGlvbigpe3JldHVybiBvW3RbMF0rXCJXaXRoXCJdKHRoaXM9PT1vP3ZvaWQgMDp0aGlzLGFyZ3VtZW50cyksdGhpc30sb1t0WzBdK1wiV2l0aFwiXT1zLmZpcmVXaXRofSksci5wcm9taXNlKG8pLHQmJnQuY2FsbChvLG8pLG99LHdoZW46ZnVuY3Rpb24oZSl7dmFyIHQ9YXJndW1lbnRzLmxlbmd0aCxuPXQsaT1BcnJheShuKSxyPW8uY2FsbChhcmd1bWVudHMpLHM9eS5EZWZlcnJlZCgpLGE9ZnVuY3Rpb24oZSl7cmV0dXJuIGZ1bmN0aW9uKG4pe2lbZV09dGhpcyxyW2VdPWFyZ3VtZW50cy5sZW5ndGg+MT9vLmNhbGwoYXJndW1lbnRzKTpuLC0tdHx8cy5yZXNvbHZlV2l0aChpLHIpfX07aWYodDw9MSYmKEIoZSxzLmRvbmUoYShuKSkucmVzb2x2ZSxzLnJlamVjdCwhdCksXCJwZW5kaW5nXCI9PT1zLnN0YXRlKCl8fHkuaXNGdW5jdGlvbihyW25dJiZyW25dLnRoZW4pKSlyZXR1cm4gcy50aGVuKCk7d2hpbGUobi0tKUIocltuXSxhKG4pLHMucmVqZWN0KTtyZXR1cm4gcy5wcm9taXNlKCl9fSk7dmFyICQ9L14oRXZhbHxJbnRlcm5hbHxSYW5nZXxSZWZlcmVuY2V8U3ludGF4fFR5cGV8VVJJKUVycm9yJC87eS5EZWZlcnJlZC5leGNlcHRpb25Ib29rPWZ1bmN0aW9uKHQsbil7ZS5jb25zb2xlJiZlLmNvbnNvbGUud2FybiYmdCYmJC50ZXN0KHQubmFtZSkmJmUuY29uc29sZS53YXJuKFwialF1ZXJ5LkRlZmVycmVkIGV4Y2VwdGlvbjogXCIrdC5tZXNzYWdlLHQuc3RhY2ssbil9LHkucmVhZHlFeGNlcHRpb249ZnVuY3Rpb24odCl7ZS5zZXRUaW1lb3V0KGZ1bmN0aW9uKCl7dGhyb3cgdH0pfTt2YXIgXz15LkRlZmVycmVkKCk7eS5mbi5yZWFkeT1mdW5jdGlvbihlKXtyZXR1cm4gXy50aGVuKGUpLmNhdGNoKGZ1bmN0aW9uKGUpe3kucmVhZHlFeGNlcHRpb24oZSl9KSx0aGlzfSx5LmV4dGVuZCh7aXNSZWFkeTohMSxyZWFkeVdhaXQ6MSxyZWFkeTpmdW5jdGlvbihlKXsoITA9PT1lPy0teS5yZWFkeVdhaXQ6eS5pc1JlYWR5KXx8KHkuaXNSZWFkeT0hMCwhMCE9PWUmJi0teS5yZWFkeVdhaXQ+MHx8Xy5yZXNvbHZlV2l0aChpLFt5XSkpfX0pLHkucmVhZHkudGhlbj1fLnRoZW47ZnVuY3Rpb24geigpe2kucmVtb3ZlRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIix6KSxlLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJsb2FkXCIseikseS5yZWFkeSgpfVwiY29tcGxldGVcIj09PWkucmVhZHlTdGF0ZXx8XCJsb2FkaW5nXCIhPT1pLnJlYWR5U3RhdGUmJiFpLmRvY3VtZW50RWxlbWVudC5kb1Njcm9sbD9lLnNldFRpbWVvdXQoeS5yZWFkeSk6KGkuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIix6KSxlLmFkZEV2ZW50TGlzdGVuZXIoXCJsb2FkXCIseikpO3ZhciBVPWZ1bmN0aW9uKGUsdCxuLGkscixvLHMpe3ZhciBhPTAsdT1lLmxlbmd0aCxsPW51bGw9PW47aWYoXCJvYmplY3RcIj09PXkudHlwZShuKSl7cj0hMDtmb3IoYSBpbiBuKVUoZSx0LGEsblthXSwhMCxvLHMpfWVsc2UgaWYodm9pZCAwIT09aSYmKHI9ITAseS5pc0Z1bmN0aW9uKGkpfHwocz0hMCksbCYmKHM/KHQuY2FsbChlLGkpLHQ9bnVsbCk6KGw9dCx0PWZ1bmN0aW9uKGUsdCxuKXtyZXR1cm4gbC5jYWxsKHkoZSksbil9KSksdCkpZm9yKDthPHU7YSsrKXQoZVthXSxuLHM/aTppLmNhbGwoZVthXSxhLHQoZVthXSxuKSkpO3JldHVybiByP2U6bD90LmNhbGwoZSk6dT90KGVbMF0sbik6b30sWD1mdW5jdGlvbihlKXtyZXR1cm4gMT09PWUubm9kZVR5cGV8fDk9PT1lLm5vZGVUeXBlfHwhK2Uubm9kZVR5cGV9O2Z1bmN0aW9uIFYoKXt0aGlzLmV4cGFuZG89eS5leHBhbmRvK1YudWlkKyt9Vi51aWQ9MSxWLnByb3RvdHlwZT17Y2FjaGU6ZnVuY3Rpb24oZSl7dmFyIHQ9ZVt0aGlzLmV4cGFuZG9dO3JldHVybiB0fHwodD17fSxYKGUpJiYoZS5ub2RlVHlwZT9lW3RoaXMuZXhwYW5kb109dDpPYmplY3QuZGVmaW5lUHJvcGVydHkoZSx0aGlzLmV4cGFuZG8se3ZhbHVlOnQsY29uZmlndXJhYmxlOiEwfSkpKSx0fSxzZXQ6ZnVuY3Rpb24oZSx0LG4pe3ZhciBpLHI9dGhpcy5jYWNoZShlKTtpZihcInN0cmluZ1wiPT10eXBlb2YgdClyW3kuY2FtZWxDYXNlKHQpXT1uO2Vsc2UgZm9yKGkgaW4gdClyW3kuY2FtZWxDYXNlKGkpXT10W2ldO3JldHVybiByfSxnZXQ6ZnVuY3Rpb24oZSx0KXtyZXR1cm4gdm9pZCAwPT09dD90aGlzLmNhY2hlKGUpOmVbdGhpcy5leHBhbmRvXSYmZVt0aGlzLmV4cGFuZG9dW3kuY2FtZWxDYXNlKHQpXX0sYWNjZXNzOmZ1bmN0aW9uKGUsdCxuKXtyZXR1cm4gdm9pZCAwPT09dHx8dCYmXCJzdHJpbmdcIj09dHlwZW9mIHQmJnZvaWQgMD09PW4/dGhpcy5nZXQoZSx0KToodGhpcy5zZXQoZSx0LG4pLHZvaWQgMCE9PW4/bjp0KX0scmVtb3ZlOmZ1bmN0aW9uKGUsdCl7dmFyIG4saT1lW3RoaXMuZXhwYW5kb107aWYodm9pZCAwIT09aSl7aWYodm9pZCAwIT09dCl7bj0odD1BcnJheS5pc0FycmF5KHQpP3QubWFwKHkuY2FtZWxDYXNlKToodD15LmNhbWVsQ2FzZSh0KSlpbiBpP1t0XTp0Lm1hdGNoKEkpfHxbXSkubGVuZ3RoO3doaWxlKG4tLSlkZWxldGUgaVt0W25dXX0odm9pZCAwPT09dHx8eS5pc0VtcHR5T2JqZWN0KGkpKSYmKGUubm9kZVR5cGU/ZVt0aGlzLmV4cGFuZG9dPXZvaWQgMDpkZWxldGUgZVt0aGlzLmV4cGFuZG9dKX19LGhhc0RhdGE6ZnVuY3Rpb24oZSl7dmFyIHQ9ZVt0aGlzLmV4cGFuZG9dO3JldHVybiB2b2lkIDAhPT10JiYheS5pc0VtcHR5T2JqZWN0KHQpfX07dmFyIFk9bmV3IFYsUT1uZXcgVixHPS9eKD86XFx7W1xcd1xcV10qXFx9fFxcW1tcXHdcXFddKlxcXSkkLyxLPS9bQS1aXS9nO2Z1bmN0aW9uIEooZSl7cmV0dXJuXCJ0cnVlXCI9PT1lfHxcImZhbHNlXCIhPT1lJiYoXCJudWxsXCI9PT1lP251bGw6ZT09PStlK1wiXCI/K2U6Ry50ZXN0KGUpP0pTT04ucGFyc2UoZSk6ZSl9ZnVuY3Rpb24gWihlLHQsbil7dmFyIGk7aWYodm9pZCAwPT09biYmMT09PWUubm9kZVR5cGUpaWYoaT1cImRhdGEtXCIrdC5yZXBsYWNlKEssXCItJCZcIikudG9Mb3dlckNhc2UoKSxcInN0cmluZ1wiPT10eXBlb2Yobj1lLmdldEF0dHJpYnV0ZShpKSkpe3RyeXtuPUoobil9Y2F0Y2goZSl7fVEuc2V0KGUsdCxuKX1lbHNlIG49dm9pZCAwO3JldHVybiBufXkuZXh0ZW5kKHtoYXNEYXRhOmZ1bmN0aW9uKGUpe3JldHVybiBRLmhhc0RhdGEoZSl8fFkuaGFzRGF0YShlKX0sZGF0YTpmdW5jdGlvbihlLHQsbil7cmV0dXJuIFEuYWNjZXNzKGUsdCxuKX0scmVtb3ZlRGF0YTpmdW5jdGlvbihlLHQpe1EucmVtb3ZlKGUsdCl9LF9kYXRhOmZ1bmN0aW9uKGUsdCxuKXtyZXR1cm4gWS5hY2Nlc3MoZSx0LG4pfSxfcmVtb3ZlRGF0YTpmdW5jdGlvbihlLHQpe1kucmVtb3ZlKGUsdCl9fSkseS5mbi5leHRlbmQoe2RhdGE6ZnVuY3Rpb24oZSx0KXt2YXIgbixpLHIsbz10aGlzWzBdLHM9byYmby5hdHRyaWJ1dGVzO2lmKHZvaWQgMD09PWUpe2lmKHRoaXMubGVuZ3RoJiYocj1RLmdldChvKSwxPT09by5ub2RlVHlwZSYmIVkuZ2V0KG8sXCJoYXNEYXRhQXR0cnNcIikpKXtuPXMubGVuZ3RoO3doaWxlKG4tLSlzW25dJiYwPT09KGk9c1tuXS5uYW1lKS5pbmRleE9mKFwiZGF0YS1cIikmJihpPXkuY2FtZWxDYXNlKGkuc2xpY2UoNSkpLFoobyxpLHJbaV0pKTtZLnNldChvLFwiaGFzRGF0YUF0dHJzXCIsITApfXJldHVybiByfXJldHVyblwib2JqZWN0XCI9PXR5cGVvZiBlP3RoaXMuZWFjaChmdW5jdGlvbigpe1Euc2V0KHRoaXMsZSl9KTpVKHRoaXMsZnVuY3Rpb24odCl7dmFyIG47aWYobyYmdm9pZCAwPT09dCl7aWYodm9pZCAwIT09KG49US5nZXQobyxlKSkpcmV0dXJuIG47aWYodm9pZCAwIT09KG49WihvLGUpKSlyZXR1cm4gbn1lbHNlIHRoaXMuZWFjaChmdW5jdGlvbigpe1Euc2V0KHRoaXMsZSx0KX0pfSxudWxsLHQsYXJndW1lbnRzLmxlbmd0aD4xLG51bGwsITApfSxyZW1vdmVEYXRhOmZ1bmN0aW9uKGUpe3JldHVybiB0aGlzLmVhY2goZnVuY3Rpb24oKXtRLnJlbW92ZSh0aGlzLGUpfSl9fSkseS5leHRlbmQoe3F1ZXVlOmZ1bmN0aW9uKGUsdCxuKXt2YXIgaTtpZihlKXJldHVybiB0PSh0fHxcImZ4XCIpK1wicXVldWVcIixpPVkuZ2V0KGUsdCksbiYmKCFpfHxBcnJheS5pc0FycmF5KG4pP2k9WS5hY2Nlc3MoZSx0LHkubWFrZUFycmF5KG4pKTppLnB1c2gobikpLGl8fFtdfSxkZXF1ZXVlOmZ1bmN0aW9uKGUsdCl7dD10fHxcImZ4XCI7dmFyIG49eS5xdWV1ZShlLHQpLGk9bi5sZW5ndGgscj1uLnNoaWZ0KCksbz15Ll9xdWV1ZUhvb2tzKGUsdCkscz1mdW5jdGlvbigpe3kuZGVxdWV1ZShlLHQpfTtcImlucHJvZ3Jlc3NcIj09PXImJihyPW4uc2hpZnQoKSxpLS0pLHImJihcImZ4XCI9PT10JiZuLnVuc2hpZnQoXCJpbnByb2dyZXNzXCIpLGRlbGV0ZSBvLnN0b3Asci5jYWxsKGUscyxvKSksIWkmJm8mJm8uZW1wdHkuZmlyZSgpfSxfcXVldWVIb29rczpmdW5jdGlvbihlLHQpe3ZhciBuPXQrXCJxdWV1ZUhvb2tzXCI7cmV0dXJuIFkuZ2V0KGUsbil8fFkuYWNjZXNzKGUsbix7ZW1wdHk6eS5DYWxsYmFja3MoXCJvbmNlIG1lbW9yeVwiKS5hZGQoZnVuY3Rpb24oKXtZLnJlbW92ZShlLFt0K1wicXVldWVcIixuXSl9KX0pfX0pLHkuZm4uZXh0ZW5kKHtxdWV1ZTpmdW5jdGlvbihlLHQpe3ZhciBuPTI7cmV0dXJuXCJzdHJpbmdcIiE9dHlwZW9mIGUmJih0PWUsZT1cImZ4XCIsbi0tKSxhcmd1bWVudHMubGVuZ3RoPG4/eS5xdWV1ZSh0aGlzWzBdLGUpOnZvaWQgMD09PXQ/dGhpczp0aGlzLmVhY2goZnVuY3Rpb24oKXt2YXIgbj15LnF1ZXVlKHRoaXMsZSx0KTt5Ll9xdWV1ZUhvb2tzKHRoaXMsZSksXCJmeFwiPT09ZSYmXCJpbnByb2dyZXNzXCIhPT1uWzBdJiZ5LmRlcXVldWUodGhpcyxlKX0pfSxkZXF1ZXVlOmZ1bmN0aW9uKGUpe3JldHVybiB0aGlzLmVhY2goZnVuY3Rpb24oKXt5LmRlcXVldWUodGhpcyxlKX0pfSxjbGVhclF1ZXVlOmZ1bmN0aW9uKGUpe3JldHVybiB0aGlzLnF1ZXVlKGV8fFwiZnhcIixbXSl9LHByb21pc2U6ZnVuY3Rpb24oZSx0KXt2YXIgbixpPTEscj15LkRlZmVycmVkKCksbz10aGlzLHM9dGhpcy5sZW5ndGgsYT1mdW5jdGlvbigpey0taXx8ci5yZXNvbHZlV2l0aChvLFtvXSl9O1wic3RyaW5nXCIhPXR5cGVvZiBlJiYodD1lLGU9dm9pZCAwKSxlPWV8fFwiZnhcIjt3aGlsZShzLS0pKG49WS5nZXQob1tzXSxlK1wicXVldWVIb29rc1wiKSkmJm4uZW1wdHkmJihpKyssbi5lbXB0eS5hZGQoYSkpO3JldHVybiBhKCksci5wcm9taXNlKHQpfX0pO3ZhciBlZT0vWystXT8oPzpcXGQqXFwufClcXGQrKD86W2VFXVsrLV0/XFxkK3wpLy5zb3VyY2UsdGU9bmV3IFJlZ0V4cChcIl4oPzooWystXSk9fCkoXCIrZWUrXCIpKFthLXolXSopJFwiLFwiaVwiKSxuZT1bXCJUb3BcIixcIlJpZ2h0XCIsXCJCb3R0b21cIixcIkxlZnRcIl0saWU9ZnVuY3Rpb24oZSx0KXtyZXR1cm5cIm5vbmVcIj09PShlPXR8fGUpLnN0eWxlLmRpc3BsYXl8fFwiXCI9PT1lLnN0eWxlLmRpc3BsYXkmJnkuY29udGFpbnMoZS5vd25lckRvY3VtZW50LGUpJiZcIm5vbmVcIj09PXkuY3NzKGUsXCJkaXNwbGF5XCIpfSxyZT1mdW5jdGlvbihlLHQsbixpKXt2YXIgcixvLHM9e307Zm9yKG8gaW4gdClzW29dPWUuc3R5bGVbb10sZS5zdHlsZVtvXT10W29dO3I9bi5hcHBseShlLGl8fFtdKTtmb3IobyBpbiB0KWUuc3R5bGVbb109c1tvXTtyZXR1cm4gcn07ZnVuY3Rpb24gb2UoZSx0LG4saSl7dmFyIHIsbyxzPTIwLGE9aT9mdW5jdGlvbigpe3JldHVybiBpLmN1cigpfTpmdW5jdGlvbigpe3JldHVybiB5LmNzcyhlLHQsXCJcIil9LHU9YSgpLGw9biYmblszXXx8KHkuY3NzTnVtYmVyW3RdP1wiXCI6XCJweFwiKSxjPSh5LmNzc051bWJlclt0XXx8XCJweFwiIT09bCYmK3UpJiZ0ZS5leGVjKHkuY3NzKGUsdCkpO2lmKGMmJmNbM10hPT1sKXt1Lz0yLGw9bHx8Y1szXSxjPSt1fHwxO3doaWxlKHMtLSl5LnN0eWxlKGUsdCxjK2wpLCgxLW8pKigxLShvPWEoKS91fHwuNSkpPD0wJiYocz0wKSxjLz1vO2MqPTIseS5zdHlsZShlLHQsYytsKSxuPW58fFtdfXJldHVybiBuJiYoYz0rY3x8K3V8fDAscj1uWzFdP2MrKG5bMV0rMSkqblsyXTorblsyXSxpJiYoaS51bml0PWwsaS5zdGFydD1jLGkuZW5kPXIpKSxyfXZhciBzZT17fTtmdW5jdGlvbiBhZShlKXt2YXIgdCxuPWUub3duZXJEb2N1bWVudCxpPWUubm9kZU5hbWUscj1zZVtpXTtyZXR1cm4gcnx8KHQ9bi5ib2R5LmFwcGVuZENoaWxkKG4uY3JlYXRlRWxlbWVudChpKSkscj15LmNzcyh0LFwiZGlzcGxheVwiKSx0LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQodCksXCJub25lXCI9PT1yJiYocj1cImJsb2NrXCIpLHNlW2ldPXIscil9ZnVuY3Rpb24gdWUoZSx0KXtmb3IodmFyIG4saSxyPVtdLG89MCxzPWUubGVuZ3RoO288cztvKyspKGk9ZVtvXSkuc3R5bGUmJihuPWkuc3R5bGUuZGlzcGxheSx0PyhcIm5vbmVcIj09PW4mJihyW29dPVkuZ2V0KGksXCJkaXNwbGF5XCIpfHxudWxsLHJbb118fChpLnN0eWxlLmRpc3BsYXk9XCJcIikpLFwiXCI9PT1pLnN0eWxlLmRpc3BsYXkmJmllKGkpJiYocltvXT1hZShpKSkpOlwibm9uZVwiIT09biYmKHJbb109XCJub25lXCIsWS5zZXQoaSxcImRpc3BsYXlcIixuKSkpO2ZvcihvPTA7bzxzO28rKyludWxsIT1yW29dJiYoZVtvXS5zdHlsZS5kaXNwbGF5PXJbb10pO3JldHVybiBlfXkuZm4uZXh0ZW5kKHtzaG93OmZ1bmN0aW9uKCl7cmV0dXJuIHVlKHRoaXMsITApfSxoaWRlOmZ1bmN0aW9uKCl7cmV0dXJuIHVlKHRoaXMpfSx0b2dnbGU6ZnVuY3Rpb24oZSl7cmV0dXJuXCJib29sZWFuXCI9PXR5cGVvZiBlP2U/dGhpcy5zaG93KCk6dGhpcy5oaWRlKCk6dGhpcy5lYWNoKGZ1bmN0aW9uKCl7aWUodGhpcyk/eSh0aGlzKS5zaG93KCk6eSh0aGlzKS5oaWRlKCl9KX19KTt2YXIgbGU9L14oPzpjaGVja2JveHxyYWRpbykkL2ksY2U9LzwoW2Etel1bXlxcL1xcMD5cXHgyMFxcdFxcclxcblxcZl0rKS9pLGZlPS9eJHxcXC8oPzpqYXZhfGVjbWEpc2NyaXB0L2kscGU9e29wdGlvbjpbMSxcIjxzZWxlY3QgbXVsdGlwbGU9J211bHRpcGxlJz5cIixcIjwvc2VsZWN0PlwiXSx0aGVhZDpbMSxcIjx0YWJsZT5cIixcIjwvdGFibGU+XCJdLGNvbDpbMixcIjx0YWJsZT48Y29sZ3JvdXA+XCIsXCI8L2NvbGdyb3VwPjwvdGFibGU+XCJdLHRyOlsyLFwiPHRhYmxlPjx0Ym9keT5cIixcIjwvdGJvZHk+PC90YWJsZT5cIl0sdGQ6WzMsXCI8dGFibGU+PHRib2R5Pjx0cj5cIixcIjwvdHI+PC90Ym9keT48L3RhYmxlPlwiXSxfZGVmYXVsdDpbMCxcIlwiLFwiXCJdfTtwZS5vcHRncm91cD1wZS5vcHRpb24scGUudGJvZHk9cGUudGZvb3Q9cGUuY29sZ3JvdXA9cGUuY2FwdGlvbj1wZS50aGVhZCxwZS50aD1wZS50ZDtmdW5jdGlvbiBkZShlLHQpe3ZhciBuO3JldHVybiBuPVwidW5kZWZpbmVkXCIhPXR5cGVvZiBlLmdldEVsZW1lbnRzQnlUYWdOYW1lP2UuZ2V0RWxlbWVudHNCeVRhZ05hbWUodHx8XCIqXCIpOlwidW5kZWZpbmVkXCIhPXR5cGVvZiBlLnF1ZXJ5U2VsZWN0b3JBbGw/ZS5xdWVyeVNlbGVjdG9yQWxsKHR8fFwiKlwiKTpbXSx2b2lkIDA9PT10fHx0JiZEKGUsdCk/eS5tZXJnZShbZV0sbik6bn1mdW5jdGlvbiBoZShlLHQpe2Zvcih2YXIgbj0wLGk9ZS5sZW5ndGg7bjxpO24rKylZLnNldChlW25dLFwiZ2xvYmFsRXZhbFwiLCF0fHxZLmdldCh0W25dLFwiZ2xvYmFsRXZhbFwiKSl9dmFyIGdlPS88fCYjP1xcdys7LztmdW5jdGlvbiB2ZShlLHQsbixpLHIpe2Zvcih2YXIgbyxzLGEsdSxsLGMsZj10LmNyZWF0ZURvY3VtZW50RnJhZ21lbnQoKSxwPVtdLGQ9MCxoPWUubGVuZ3RoO2Q8aDtkKyspaWYoKG89ZVtkXSl8fDA9PT1vKWlmKFwib2JqZWN0XCI9PT15LnR5cGUobykpeS5tZXJnZShwLG8ubm9kZVR5cGU/W29dOm8pO2Vsc2UgaWYoZ2UudGVzdChvKSl7cz1zfHxmLmFwcGVuZENoaWxkKHQuY3JlYXRlRWxlbWVudChcImRpdlwiKSksYT0oY2UuZXhlYyhvKXx8W1wiXCIsXCJcIl0pWzFdLnRvTG93ZXJDYXNlKCksdT1wZVthXXx8cGUuX2RlZmF1bHQscy5pbm5lckhUTUw9dVsxXSt5Lmh0bWxQcmVmaWx0ZXIobykrdVsyXSxjPXVbMF07d2hpbGUoYy0tKXM9cy5sYXN0Q2hpbGQ7eS5tZXJnZShwLHMuY2hpbGROb2RlcyksKHM9Zi5maXJzdENoaWxkKS50ZXh0Q29udGVudD1cIlwifWVsc2UgcC5wdXNoKHQuY3JlYXRlVGV4dE5vZGUobykpO2YudGV4dENvbnRlbnQ9XCJcIixkPTA7d2hpbGUobz1wW2QrK10paWYoaSYmeS5pbkFycmF5KG8saSk+LTEpciYmci5wdXNoKG8pO2Vsc2UgaWYobD15LmNvbnRhaW5zKG8ub3duZXJEb2N1bWVudCxvKSxzPWRlKGYuYXBwZW5kQ2hpbGQobyksXCJzY3JpcHRcIiksbCYmaGUocyksbil7Yz0wO3doaWxlKG89c1tjKytdKWZlLnRlc3Qoby50eXBlfHxcIlwiKSYmbi5wdXNoKG8pfXJldHVybiBmfSFmdW5jdGlvbigpe3ZhciBlPWkuY3JlYXRlRG9jdW1lbnRGcmFnbWVudCgpLmFwcGVuZENoaWxkKGkuY3JlYXRlRWxlbWVudChcImRpdlwiKSksdD1pLmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTt0LnNldEF0dHJpYnV0ZShcInR5cGVcIixcInJhZGlvXCIpLHQuc2V0QXR0cmlidXRlKFwiY2hlY2tlZFwiLFwiY2hlY2tlZFwiKSx0LnNldEF0dHJpYnV0ZShcIm5hbWVcIixcInRcIiksZS5hcHBlbmRDaGlsZCh0KSxoLmNoZWNrQ2xvbmU9ZS5jbG9uZU5vZGUoITApLmNsb25lTm9kZSghMCkubGFzdENoaWxkLmNoZWNrZWQsZS5pbm5lckhUTUw9XCI8dGV4dGFyZWE+eDwvdGV4dGFyZWE+XCIsaC5ub0Nsb25lQ2hlY2tlZD0hIWUuY2xvbmVOb2RlKCEwKS5sYXN0Q2hpbGQuZGVmYXVsdFZhbHVlfSgpO3ZhciBtZT1pLmRvY3VtZW50RWxlbWVudCx5ZT0vXmtleS8seGU9L14oPzptb3VzZXxwb2ludGVyfGNvbnRleHRtZW51fGRyYWd8ZHJvcCl8Y2xpY2svLGJlPS9eKFteLl0qKSg/OlxcLiguKyl8KS87ZnVuY3Rpb24gd2UoKXtyZXR1cm4hMH1mdW5jdGlvbiBDZSgpe3JldHVybiExfWZ1bmN0aW9uIFRlKCl7dHJ5e3JldHVybiBpLmFjdGl2ZUVsZW1lbnR9Y2F0Y2goZSl7fX1mdW5jdGlvbiBrZShlLHQsbixpLHIsbyl7dmFyIHMsYTtpZihcIm9iamVjdFwiPT10eXBlb2YgdCl7XCJzdHJpbmdcIiE9dHlwZW9mIG4mJihpPWl8fG4sbj12b2lkIDApO2ZvcihhIGluIHQpa2UoZSxhLG4saSx0W2FdLG8pO3JldHVybiBlfWlmKG51bGw9PWkmJm51bGw9PXI/KHI9bixpPW49dm9pZCAwKTpudWxsPT1yJiYoXCJzdHJpbmdcIj09dHlwZW9mIG4/KHI9aSxpPXZvaWQgMCk6KHI9aSxpPW4sbj12b2lkIDApKSwhMT09PXIpcj1DZTtlbHNlIGlmKCFyKXJldHVybiBlO3JldHVybiAxPT09byYmKHM9ciwocj1mdW5jdGlvbihlKXtyZXR1cm4geSgpLm9mZihlKSxzLmFwcGx5KHRoaXMsYXJndW1lbnRzKX0pLmd1aWQ9cy5ndWlkfHwocy5ndWlkPXkuZ3VpZCsrKSksZS5lYWNoKGZ1bmN0aW9uKCl7eS5ldmVudC5hZGQodGhpcyx0LHIsaSxuKX0pfXkuZXZlbnQ9e2dsb2JhbDp7fSxhZGQ6ZnVuY3Rpb24oZSx0LG4saSxyKXt2YXIgbyxzLGEsdSxsLGMsZixwLGQsaCxnLHY9WS5nZXQoZSk7aWYodil7bi5oYW5kbGVyJiYobj0obz1uKS5oYW5kbGVyLHI9by5zZWxlY3RvciksciYmeS5maW5kLm1hdGNoZXNTZWxlY3RvcihtZSxyKSxuLmd1aWR8fChuLmd1aWQ9eS5ndWlkKyspLCh1PXYuZXZlbnRzKXx8KHU9di5ldmVudHM9e30pLChzPXYuaGFuZGxlKXx8KHM9di5oYW5kbGU9ZnVuY3Rpb24odCl7cmV0dXJuXCJ1bmRlZmluZWRcIiE9dHlwZW9mIHkmJnkuZXZlbnQudHJpZ2dlcmVkIT09dC50eXBlP3kuZXZlbnQuZGlzcGF0Y2guYXBwbHkoZSxhcmd1bWVudHMpOnZvaWQgMH0pLGw9KHQ9KHR8fFwiXCIpLm1hdGNoKEkpfHxbXCJcIl0pLmxlbmd0aDt3aGlsZShsLS0pZD1nPShhPWJlLmV4ZWModFtsXSl8fFtdKVsxXSxoPShhWzJdfHxcIlwiKS5zcGxpdChcIi5cIikuc29ydCgpLGQmJihmPXkuZXZlbnQuc3BlY2lhbFtkXXx8e30sZD0ocj9mLmRlbGVnYXRlVHlwZTpmLmJpbmRUeXBlKXx8ZCxmPXkuZXZlbnQuc3BlY2lhbFtkXXx8e30sYz15LmV4dGVuZCh7dHlwZTpkLG9yaWdUeXBlOmcsZGF0YTppLGhhbmRsZXI6bixndWlkOm4uZ3VpZCxzZWxlY3RvcjpyLG5lZWRzQ29udGV4dDpyJiZ5LmV4cHIubWF0Y2gubmVlZHNDb250ZXh0LnRlc3QociksbmFtZXNwYWNlOmguam9pbihcIi5cIil9LG8pLChwPXVbZF0pfHwoKHA9dVtkXT1bXSkuZGVsZWdhdGVDb3VudD0wLGYuc2V0dXAmJiExIT09Zi5zZXR1cC5jYWxsKGUsaSxoLHMpfHxlLmFkZEV2ZW50TGlzdGVuZXImJmUuYWRkRXZlbnRMaXN0ZW5lcihkLHMpKSxmLmFkZCYmKGYuYWRkLmNhbGwoZSxjKSxjLmhhbmRsZXIuZ3VpZHx8KGMuaGFuZGxlci5ndWlkPW4uZ3VpZCkpLHI/cC5zcGxpY2UocC5kZWxlZ2F0ZUNvdW50KyssMCxjKTpwLnB1c2goYykseS5ldmVudC5nbG9iYWxbZF09ITApfX0scmVtb3ZlOmZ1bmN0aW9uKGUsdCxuLGkscil7dmFyIG8scyxhLHUsbCxjLGYscCxkLGgsZyx2PVkuaGFzRGF0YShlKSYmWS5nZXQoZSk7aWYodiYmKHU9di5ldmVudHMpKXtsPSh0PSh0fHxcIlwiKS5tYXRjaChJKXx8W1wiXCJdKS5sZW5ndGg7d2hpbGUobC0tKWlmKGE9YmUuZXhlYyh0W2xdKXx8W10sZD1nPWFbMV0saD0oYVsyXXx8XCJcIikuc3BsaXQoXCIuXCIpLnNvcnQoKSxkKXtmPXkuZXZlbnQuc3BlY2lhbFtkXXx8e30scD11W2Q9KGk/Zi5kZWxlZ2F0ZVR5cGU6Zi5iaW5kVHlwZSl8fGRdfHxbXSxhPWFbMl0mJm5ldyBSZWdFeHAoXCIoXnxcXFxcLilcIitoLmpvaW4oXCJcXFxcLig/Oi4qXFxcXC58KVwiKStcIihcXFxcLnwkKVwiKSxzPW89cC5sZW5ndGg7d2hpbGUoby0tKWM9cFtvXSwhciYmZyE9PWMub3JpZ1R5cGV8fG4mJm4uZ3VpZCE9PWMuZ3VpZHx8YSYmIWEudGVzdChjLm5hbWVzcGFjZSl8fGkmJmkhPT1jLnNlbGVjdG9yJiYoXCIqKlwiIT09aXx8IWMuc2VsZWN0b3IpfHwocC5zcGxpY2UobywxKSxjLnNlbGVjdG9yJiZwLmRlbGVnYXRlQ291bnQtLSxmLnJlbW92ZSYmZi5yZW1vdmUuY2FsbChlLGMpKTtzJiYhcC5sZW5ndGgmJihmLnRlYXJkb3duJiYhMSE9PWYudGVhcmRvd24uY2FsbChlLGgsdi5oYW5kbGUpfHx5LnJlbW92ZUV2ZW50KGUsZCx2LmhhbmRsZSksZGVsZXRlIHVbZF0pfWVsc2UgZm9yKGQgaW4gdSl5LmV2ZW50LnJlbW92ZShlLGQrdFtsXSxuLGksITApO3kuaXNFbXB0eU9iamVjdCh1KSYmWS5yZW1vdmUoZSxcImhhbmRsZSBldmVudHNcIil9fSxkaXNwYXRjaDpmdW5jdGlvbihlKXt2YXIgdD15LmV2ZW50LmZpeChlKSxuLGkscixvLHMsYSx1PW5ldyBBcnJheShhcmd1bWVudHMubGVuZ3RoKSxsPShZLmdldCh0aGlzLFwiZXZlbnRzXCIpfHx7fSlbdC50eXBlXXx8W10sYz15LmV2ZW50LnNwZWNpYWxbdC50eXBlXXx8e307Zm9yKHVbMF09dCxuPTE7bjxhcmd1bWVudHMubGVuZ3RoO24rKyl1W25dPWFyZ3VtZW50c1tuXTtpZih0LmRlbGVnYXRlVGFyZ2V0PXRoaXMsIWMucHJlRGlzcGF0Y2h8fCExIT09Yy5wcmVEaXNwYXRjaC5jYWxsKHRoaXMsdCkpe2E9eS5ldmVudC5oYW5kbGVycy5jYWxsKHRoaXMsdCxsKSxuPTA7d2hpbGUoKG89YVtuKytdKSYmIXQuaXNQcm9wYWdhdGlvblN0b3BwZWQoKSl7dC5jdXJyZW50VGFyZ2V0PW8uZWxlbSxpPTA7d2hpbGUoKHM9by5oYW5kbGVyc1tpKytdKSYmIXQuaXNJbW1lZGlhdGVQcm9wYWdhdGlvblN0b3BwZWQoKSl0LnJuYW1lc3BhY2UmJiF0LnJuYW1lc3BhY2UudGVzdChzLm5hbWVzcGFjZSl8fCh0LmhhbmRsZU9iaj1zLHQuZGF0YT1zLmRhdGEsdm9pZCAwIT09KHI9KCh5LmV2ZW50LnNwZWNpYWxbcy5vcmlnVHlwZV18fHt9KS5oYW5kbGV8fHMuaGFuZGxlcikuYXBwbHkoby5lbGVtLHUpKSYmITE9PT0odC5yZXN1bHQ9cikmJih0LnByZXZlbnREZWZhdWx0KCksdC5zdG9wUHJvcGFnYXRpb24oKSkpfXJldHVybiBjLnBvc3REaXNwYXRjaCYmYy5wb3N0RGlzcGF0Y2guY2FsbCh0aGlzLHQpLHQucmVzdWx0fX0saGFuZGxlcnM6ZnVuY3Rpb24oZSx0KXt2YXIgbixpLHIsbyxzLGE9W10sdT10LmRlbGVnYXRlQ291bnQsbD1lLnRhcmdldDtpZih1JiZsLm5vZGVUeXBlJiYhKFwiY2xpY2tcIj09PWUudHlwZSYmZS5idXR0b24+PTEpKWZvcig7bCE9PXRoaXM7bD1sLnBhcmVudE5vZGV8fHRoaXMpaWYoMT09PWwubm9kZVR5cGUmJihcImNsaWNrXCIhPT1lLnR5cGV8fCEwIT09bC5kaXNhYmxlZCkpe2ZvcihvPVtdLHM9e30sbj0wO248dTtuKyspdm9pZCAwPT09c1tyPShpPXRbbl0pLnNlbGVjdG9yK1wiIFwiXSYmKHNbcl09aS5uZWVkc0NvbnRleHQ/eShyLHRoaXMpLmluZGV4KGwpPi0xOnkuZmluZChyLHRoaXMsbnVsbCxbbF0pLmxlbmd0aCksc1tyXSYmby5wdXNoKGkpO28ubGVuZ3RoJiZhLnB1c2goe2VsZW06bCxoYW5kbGVyczpvfSl9cmV0dXJuIGw9dGhpcyx1PHQubGVuZ3RoJiZhLnB1c2goe2VsZW06bCxoYW5kbGVyczp0LnNsaWNlKHUpfSksYX0sYWRkUHJvcDpmdW5jdGlvbihlLHQpe09iamVjdC5kZWZpbmVQcm9wZXJ0eSh5LkV2ZW50LnByb3RvdHlwZSxlLHtlbnVtZXJhYmxlOiEwLGNvbmZpZ3VyYWJsZTohMCxnZXQ6eS5pc0Z1bmN0aW9uKHQpP2Z1bmN0aW9uKCl7aWYodGhpcy5vcmlnaW5hbEV2ZW50KXJldHVybiB0KHRoaXMub3JpZ2luYWxFdmVudCl9OmZ1bmN0aW9uKCl7aWYodGhpcy5vcmlnaW5hbEV2ZW50KXJldHVybiB0aGlzLm9yaWdpbmFsRXZlbnRbZV19LHNldDpmdW5jdGlvbih0KXtPYmplY3QuZGVmaW5lUHJvcGVydHkodGhpcyxlLHtlbnVtZXJhYmxlOiEwLGNvbmZpZ3VyYWJsZTohMCx3cml0YWJsZTohMCx2YWx1ZTp0fSl9fSl9LGZpeDpmdW5jdGlvbihlKXtyZXR1cm4gZVt5LmV4cGFuZG9dP2U6bmV3IHkuRXZlbnQoZSl9LHNwZWNpYWw6e2xvYWQ6e25vQnViYmxlOiEwfSxmb2N1czp7dHJpZ2dlcjpmdW5jdGlvbigpe2lmKHRoaXMhPT1UZSgpJiZ0aGlzLmZvY3VzKXJldHVybiB0aGlzLmZvY3VzKCksITF9LGRlbGVnYXRlVHlwZTpcImZvY3VzaW5cIn0sYmx1cjp7dHJpZ2dlcjpmdW5jdGlvbigpe2lmKHRoaXM9PT1UZSgpJiZ0aGlzLmJsdXIpcmV0dXJuIHRoaXMuYmx1cigpLCExfSxkZWxlZ2F0ZVR5cGU6XCJmb2N1c291dFwifSxjbGljazp7dHJpZ2dlcjpmdW5jdGlvbigpe2lmKFwiY2hlY2tib3hcIj09PXRoaXMudHlwZSYmdGhpcy5jbGljayYmRCh0aGlzLFwiaW5wdXRcIikpcmV0dXJuIHRoaXMuY2xpY2soKSwhMX0sX2RlZmF1bHQ6ZnVuY3Rpb24oZSl7cmV0dXJuIEQoZS50YXJnZXQsXCJhXCIpfX0sYmVmb3JldW5sb2FkOntwb3N0RGlzcGF0Y2g6ZnVuY3Rpb24oZSl7dm9pZCAwIT09ZS5yZXN1bHQmJmUub3JpZ2luYWxFdmVudCYmKGUub3JpZ2luYWxFdmVudC5yZXR1cm5WYWx1ZT1lLnJlc3VsdCl9fX19LHkucmVtb3ZlRXZlbnQ9ZnVuY3Rpb24oZSx0LG4pe2UucmVtb3ZlRXZlbnRMaXN0ZW5lciYmZS5yZW1vdmVFdmVudExpc3RlbmVyKHQsbil9LHkuRXZlbnQ9ZnVuY3Rpb24oZSx0KXtpZighKHRoaXMgaW5zdGFuY2VvZiB5LkV2ZW50KSlyZXR1cm4gbmV3IHkuRXZlbnQoZSx0KTtlJiZlLnR5cGU/KHRoaXMub3JpZ2luYWxFdmVudD1lLHRoaXMudHlwZT1lLnR5cGUsdGhpcy5pc0RlZmF1bHRQcmV2ZW50ZWQ9ZS5kZWZhdWx0UHJldmVudGVkfHx2b2lkIDA9PT1lLmRlZmF1bHRQcmV2ZW50ZWQmJiExPT09ZS5yZXR1cm5WYWx1ZT93ZTpDZSx0aGlzLnRhcmdldD1lLnRhcmdldCYmMz09PWUudGFyZ2V0Lm5vZGVUeXBlP2UudGFyZ2V0LnBhcmVudE5vZGU6ZS50YXJnZXQsdGhpcy5jdXJyZW50VGFyZ2V0PWUuY3VycmVudFRhcmdldCx0aGlzLnJlbGF0ZWRUYXJnZXQ9ZS5yZWxhdGVkVGFyZ2V0KTp0aGlzLnR5cGU9ZSx0JiZ5LmV4dGVuZCh0aGlzLHQpLHRoaXMudGltZVN0YW1wPWUmJmUudGltZVN0YW1wfHx5Lm5vdygpLHRoaXNbeS5leHBhbmRvXT0hMH0seS5FdmVudC5wcm90b3R5cGU9e2NvbnN0cnVjdG9yOnkuRXZlbnQsaXNEZWZhdWx0UHJldmVudGVkOkNlLGlzUHJvcGFnYXRpb25TdG9wcGVkOkNlLGlzSW1tZWRpYXRlUHJvcGFnYXRpb25TdG9wcGVkOkNlLGlzU2ltdWxhdGVkOiExLHByZXZlbnREZWZhdWx0OmZ1bmN0aW9uKCl7dmFyIGU9dGhpcy5vcmlnaW5hbEV2ZW50O3RoaXMuaXNEZWZhdWx0UHJldmVudGVkPXdlLGUmJiF0aGlzLmlzU2ltdWxhdGVkJiZlLnByZXZlbnREZWZhdWx0KCl9LHN0b3BQcm9wYWdhdGlvbjpmdW5jdGlvbigpe3ZhciBlPXRoaXMub3JpZ2luYWxFdmVudDt0aGlzLmlzUHJvcGFnYXRpb25TdG9wcGVkPXdlLGUmJiF0aGlzLmlzU2ltdWxhdGVkJiZlLnN0b3BQcm9wYWdhdGlvbigpfSxzdG9wSW1tZWRpYXRlUHJvcGFnYXRpb246ZnVuY3Rpb24oKXt2YXIgZT10aGlzLm9yaWdpbmFsRXZlbnQ7dGhpcy5pc0ltbWVkaWF0ZVByb3BhZ2F0aW9uU3RvcHBlZD13ZSxlJiYhdGhpcy5pc1NpbXVsYXRlZCYmZS5zdG9wSW1tZWRpYXRlUHJvcGFnYXRpb24oKSx0aGlzLnN0b3BQcm9wYWdhdGlvbigpfX0seS5lYWNoKHthbHRLZXk6ITAsYnViYmxlczohMCxjYW5jZWxhYmxlOiEwLGNoYW5nZWRUb3VjaGVzOiEwLGN0cmxLZXk6ITAsZGV0YWlsOiEwLGV2ZW50UGhhc2U6ITAsbWV0YUtleTohMCxwYWdlWDohMCxwYWdlWTohMCxzaGlmdEtleTohMCx2aWV3OiEwLGNoYXI6ITAsY2hhckNvZGU6ITAsa2V5OiEwLGtleUNvZGU6ITAsYnV0dG9uOiEwLGJ1dHRvbnM6ITAsY2xpZW50WDohMCxjbGllbnRZOiEwLG9mZnNldFg6ITAsb2Zmc2V0WTohMCxwb2ludGVySWQ6ITAscG9pbnRlclR5cGU6ITAsc2NyZWVuWDohMCxzY3JlZW5ZOiEwLHRhcmdldFRvdWNoZXM6ITAsdG9FbGVtZW50OiEwLHRvdWNoZXM6ITAsd2hpY2g6ZnVuY3Rpb24oZSl7dmFyIHQ9ZS5idXR0b247cmV0dXJuIG51bGw9PWUud2hpY2gmJnllLnRlc3QoZS50eXBlKT9udWxsIT1lLmNoYXJDb2RlP2UuY2hhckNvZGU6ZS5rZXlDb2RlOiFlLndoaWNoJiZ2b2lkIDAhPT10JiZ4ZS50ZXN0KGUudHlwZSk/MSZ0PzE6MiZ0PzM6NCZ0PzI6MDplLndoaWNofX0seS5ldmVudC5hZGRQcm9wKSx5LmVhY2goe21vdXNlZW50ZXI6XCJtb3VzZW92ZXJcIixtb3VzZWxlYXZlOlwibW91c2VvdXRcIixwb2ludGVyZW50ZXI6XCJwb2ludGVyb3ZlclwiLHBvaW50ZXJsZWF2ZTpcInBvaW50ZXJvdXRcIn0sZnVuY3Rpb24oZSx0KXt5LmV2ZW50LnNwZWNpYWxbZV09e2RlbGVnYXRlVHlwZTp0LGJpbmRUeXBlOnQsaGFuZGxlOmZ1bmN0aW9uKGUpe3ZhciBuLGk9dGhpcyxyPWUucmVsYXRlZFRhcmdldCxvPWUuaGFuZGxlT2JqO3JldHVybiByJiYocj09PWl8fHkuY29udGFpbnMoaSxyKSl8fChlLnR5cGU9by5vcmlnVHlwZSxuPW8uaGFuZGxlci5hcHBseSh0aGlzLGFyZ3VtZW50cyksZS50eXBlPXQpLG59fX0pLHkuZm4uZXh0ZW5kKHtvbjpmdW5jdGlvbihlLHQsbixpKXtyZXR1cm4ga2UodGhpcyxlLHQsbixpKX0sb25lOmZ1bmN0aW9uKGUsdCxuLGkpe3JldHVybiBrZSh0aGlzLGUsdCxuLGksMSl9LG9mZjpmdW5jdGlvbihlLHQsbil7dmFyIGkscjtpZihlJiZlLnByZXZlbnREZWZhdWx0JiZlLmhhbmRsZU9iailyZXR1cm4gaT1lLmhhbmRsZU9iaix5KGUuZGVsZWdhdGVUYXJnZXQpLm9mZihpLm5hbWVzcGFjZT9pLm9yaWdUeXBlK1wiLlwiK2kubmFtZXNwYWNlOmkub3JpZ1R5cGUsaS5zZWxlY3RvcixpLmhhbmRsZXIpLHRoaXM7aWYoXCJvYmplY3RcIj09dHlwZW9mIGUpe2ZvcihyIGluIGUpdGhpcy5vZmYocix0LGVbcl0pO3JldHVybiB0aGlzfXJldHVybiExIT09dCYmXCJmdW5jdGlvblwiIT10eXBlb2YgdHx8KG49dCx0PXZvaWQgMCksITE9PT1uJiYobj1DZSksdGhpcy5lYWNoKGZ1bmN0aW9uKCl7eS5ldmVudC5yZW1vdmUodGhpcyxlLG4sdCl9KX19KTt2YXIgRWU9LzwoPyFhcmVhfGJyfGNvbHxlbWJlZHxocnxpbWd8aW5wdXR8bGlua3xtZXRhfHBhcmFtKSgoW2Etel1bXlxcL1xcMD5cXHgyMFxcdFxcclxcblxcZl0qKVtePl0qKVxcLz4vZ2ksTmU9LzxzY3JpcHR8PHN0eWxlfDxsaW5rL2ksQWU9L2NoZWNrZWRcXHMqKD86W149XXw9XFxzKi5jaGVja2VkLikvaSxEZT0vXnRydWVcXC8oLiopLyxTZT0vXlxccyo8ISg/OlxcW0NEQVRBXFxbfC0tKXwoPzpcXF1cXF18LS0pPlxccyokL2c7ZnVuY3Rpb24gcWUoZSx0KXtyZXR1cm4gRChlLFwidGFibGVcIikmJkQoMTEhPT10Lm5vZGVUeXBlP3Q6dC5maXJzdENoaWxkLFwidHJcIik/eShcIj50Ym9keVwiLGUpWzBdfHxlOmV9ZnVuY3Rpb24gTGUoZSl7cmV0dXJuIGUudHlwZT0obnVsbCE9PWUuZ2V0QXR0cmlidXRlKFwidHlwZVwiKSkrXCIvXCIrZS50eXBlLGV9ZnVuY3Rpb24gamUoZSl7dmFyIHQ9RGUuZXhlYyhlLnR5cGUpO3JldHVybiB0P2UudHlwZT10WzFdOmUucmVtb3ZlQXR0cmlidXRlKFwidHlwZVwiKSxlfWZ1bmN0aW9uIEhlKGUsdCl7dmFyIG4saSxyLG8scyxhLHUsbDtpZigxPT09dC5ub2RlVHlwZSl7aWYoWS5oYXNEYXRhKGUpJiYobz1ZLmFjY2VzcyhlKSxzPVkuc2V0KHQsbyksbD1vLmV2ZW50cykpe2RlbGV0ZSBzLmhhbmRsZSxzLmV2ZW50cz17fTtmb3IociBpbiBsKWZvcihuPTAsaT1sW3JdLmxlbmd0aDtuPGk7bisrKXkuZXZlbnQuYWRkKHQscixsW3JdW25dKX1RLmhhc0RhdGEoZSkmJihhPVEuYWNjZXNzKGUpLHU9eS5leHRlbmQoe30sYSksUS5zZXQodCx1KSl9fWZ1bmN0aW9uIEZlKGUsdCl7dmFyIG49dC5ub2RlTmFtZS50b0xvd2VyQ2FzZSgpO1wiaW5wdXRcIj09PW4mJmxlLnRlc3QoZS50eXBlKT90LmNoZWNrZWQ9ZS5jaGVja2VkOlwiaW5wdXRcIiE9PW4mJlwidGV4dGFyZWFcIiE9PW58fCh0LmRlZmF1bHRWYWx1ZT1lLmRlZmF1bHRWYWx1ZSl9ZnVuY3Rpb24gT2UoZSx0LG4saSl7dD1zLmFwcGx5KFtdLHQpO3ZhciByLG8sYSx1LGwsYyxmPTAscD1lLmxlbmd0aCxkPXAtMSxnPXRbMF0sbT15LmlzRnVuY3Rpb24oZyk7aWYobXx8cD4xJiZcInN0cmluZ1wiPT10eXBlb2YgZyYmIWguY2hlY2tDbG9uZSYmQWUudGVzdChnKSlyZXR1cm4gZS5lYWNoKGZ1bmN0aW9uKHIpe3ZhciBvPWUuZXEocik7bSYmKHRbMF09Zy5jYWxsKHRoaXMscixvLmh0bWwoKSkpLE9lKG8sdCxuLGkpfSk7aWYocCYmKHI9dmUodCxlWzBdLm93bmVyRG9jdW1lbnQsITEsZSxpKSxvPXIuZmlyc3RDaGlsZCwxPT09ci5jaGlsZE5vZGVzLmxlbmd0aCYmKHI9byksb3x8aSkpe2Zvcih1PShhPXkubWFwKGRlKHIsXCJzY3JpcHRcIiksTGUpKS5sZW5ndGg7ZjxwO2YrKylsPXIsZiE9PWQmJihsPXkuY2xvbmUobCwhMCwhMCksdSYmeS5tZXJnZShhLGRlKGwsXCJzY3JpcHRcIikpKSxuLmNhbGwoZVtmXSxsLGYpO2lmKHUpZm9yKGM9YVthLmxlbmd0aC0xXS5vd25lckRvY3VtZW50LHkubWFwKGEsamUpLGY9MDtmPHU7ZisrKWw9YVtmXSxmZS50ZXN0KGwudHlwZXx8XCJcIikmJiFZLmFjY2VzcyhsLFwiZ2xvYmFsRXZhbFwiKSYmeS5jb250YWlucyhjLGwpJiYobC5zcmM/eS5fZXZhbFVybCYmeS5fZXZhbFVybChsLnNyYyk6dihsLnRleHRDb250ZW50LnJlcGxhY2UoU2UsXCJcIiksYykpfXJldHVybiBlfWZ1bmN0aW9uIFBlKGUsdCxuKXtmb3IodmFyIGkscj10P3kuZmlsdGVyKHQsZSk6ZSxvPTA7bnVsbCE9KGk9cltvXSk7bysrKW58fDEhPT1pLm5vZGVUeXBlfHx5LmNsZWFuRGF0YShkZShpKSksaS5wYXJlbnROb2RlJiYobiYmeS5jb250YWlucyhpLm93bmVyRG9jdW1lbnQsaSkmJmhlKGRlKGksXCJzY3JpcHRcIikpLGkucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChpKSk7cmV0dXJuIGV9eS5leHRlbmQoe2h0bWxQcmVmaWx0ZXI6ZnVuY3Rpb24oZSl7cmV0dXJuIGUucmVwbGFjZShFZSxcIjwkMT48LyQyPlwiKX0sY2xvbmU6ZnVuY3Rpb24oZSx0LG4pe3ZhciBpLHIsbyxzLGE9ZS5jbG9uZU5vZGUoITApLHU9eS5jb250YWlucyhlLm93bmVyRG9jdW1lbnQsZSk7aWYoIShoLm5vQ2xvbmVDaGVja2VkfHwxIT09ZS5ub2RlVHlwZSYmMTEhPT1lLm5vZGVUeXBlfHx5LmlzWE1MRG9jKGUpKSlmb3Iocz1kZShhKSxpPTAscj0obz1kZShlKSkubGVuZ3RoO2k8cjtpKyspRmUob1tpXSxzW2ldKTtpZih0KWlmKG4pZm9yKG89b3x8ZGUoZSkscz1zfHxkZShhKSxpPTAscj1vLmxlbmd0aDtpPHI7aSsrKUhlKG9baV0sc1tpXSk7ZWxzZSBIZShlLGEpO3JldHVybihzPWRlKGEsXCJzY3JpcHRcIikpLmxlbmd0aD4wJiZoZShzLCF1JiZkZShlLFwic2NyaXB0XCIpKSxhfSxjbGVhbkRhdGE6ZnVuY3Rpb24oZSl7Zm9yKHZhciB0LG4saSxyPXkuZXZlbnQuc3BlY2lhbCxvPTA7dm9pZCAwIT09KG49ZVtvXSk7bysrKWlmKFgobikpe2lmKHQ9bltZLmV4cGFuZG9dKXtpZih0LmV2ZW50cylmb3IoaSBpbiB0LmV2ZW50cylyW2ldP3kuZXZlbnQucmVtb3ZlKG4saSk6eS5yZW1vdmVFdmVudChuLGksdC5oYW5kbGUpO25bWS5leHBhbmRvXT12b2lkIDB9bltRLmV4cGFuZG9dJiYobltRLmV4cGFuZG9dPXZvaWQgMCl9fX0pLHkuZm4uZXh0ZW5kKHtkZXRhY2g6ZnVuY3Rpb24oZSl7cmV0dXJuIFBlKHRoaXMsZSwhMCl9LHJlbW92ZTpmdW5jdGlvbihlKXtyZXR1cm4gUGUodGhpcyxlKX0sdGV4dDpmdW5jdGlvbihlKXtyZXR1cm4gVSh0aGlzLGZ1bmN0aW9uKGUpe3JldHVybiB2b2lkIDA9PT1lP3kudGV4dCh0aGlzKTp0aGlzLmVtcHR5KCkuZWFjaChmdW5jdGlvbigpezEhPT10aGlzLm5vZGVUeXBlJiYxMSE9PXRoaXMubm9kZVR5cGUmJjkhPT10aGlzLm5vZGVUeXBlfHwodGhpcy50ZXh0Q29udGVudD1lKX0pfSxudWxsLGUsYXJndW1lbnRzLmxlbmd0aCl9LGFwcGVuZDpmdW5jdGlvbigpe3JldHVybiBPZSh0aGlzLGFyZ3VtZW50cyxmdW5jdGlvbihlKXsxIT09dGhpcy5ub2RlVHlwZSYmMTEhPT10aGlzLm5vZGVUeXBlJiY5IT09dGhpcy5ub2RlVHlwZXx8cWUodGhpcyxlKS5hcHBlbmRDaGlsZChlKX0pfSxwcmVwZW5kOmZ1bmN0aW9uKCl7cmV0dXJuIE9lKHRoaXMsYXJndW1lbnRzLGZ1bmN0aW9uKGUpe2lmKDE9PT10aGlzLm5vZGVUeXBlfHwxMT09PXRoaXMubm9kZVR5cGV8fDk9PT10aGlzLm5vZGVUeXBlKXt2YXIgdD1xZSh0aGlzLGUpO3QuaW5zZXJ0QmVmb3JlKGUsdC5maXJzdENoaWxkKX19KX0sYmVmb3JlOmZ1bmN0aW9uKCl7cmV0dXJuIE9lKHRoaXMsYXJndW1lbnRzLGZ1bmN0aW9uKGUpe3RoaXMucGFyZW50Tm9kZSYmdGhpcy5wYXJlbnROb2RlLmluc2VydEJlZm9yZShlLHRoaXMpfSl9LGFmdGVyOmZ1bmN0aW9uKCl7cmV0dXJuIE9lKHRoaXMsYXJndW1lbnRzLGZ1bmN0aW9uKGUpe3RoaXMucGFyZW50Tm9kZSYmdGhpcy5wYXJlbnROb2RlLmluc2VydEJlZm9yZShlLHRoaXMubmV4dFNpYmxpbmcpfSl9LGVtcHR5OmZ1bmN0aW9uKCl7Zm9yKHZhciBlLHQ9MDtudWxsIT0oZT10aGlzW3RdKTt0KyspMT09PWUubm9kZVR5cGUmJih5LmNsZWFuRGF0YShkZShlLCExKSksZS50ZXh0Q29udGVudD1cIlwiKTtyZXR1cm4gdGhpc30sY2xvbmU6ZnVuY3Rpb24oZSx0KXtyZXR1cm4gZT1udWxsIT1lJiZlLHQ9bnVsbD09dD9lOnQsdGhpcy5tYXAoZnVuY3Rpb24oKXtyZXR1cm4geS5jbG9uZSh0aGlzLGUsdCl9KX0saHRtbDpmdW5jdGlvbihlKXtyZXR1cm4gVSh0aGlzLGZ1bmN0aW9uKGUpe3ZhciB0PXRoaXNbMF18fHt9LG49MCxpPXRoaXMubGVuZ3RoO2lmKHZvaWQgMD09PWUmJjE9PT10Lm5vZGVUeXBlKXJldHVybiB0LmlubmVySFRNTDtpZihcInN0cmluZ1wiPT10eXBlb2YgZSYmIU5lLnRlc3QoZSkmJiFwZVsoY2UuZXhlYyhlKXx8W1wiXCIsXCJcIl0pWzFdLnRvTG93ZXJDYXNlKCldKXtlPXkuaHRtbFByZWZpbHRlcihlKTt0cnl7Zm9yKDtuPGk7bisrKTE9PT0odD10aGlzW25dfHx7fSkubm9kZVR5cGUmJih5LmNsZWFuRGF0YShkZSh0LCExKSksdC5pbm5lckhUTUw9ZSk7dD0wfWNhdGNoKGUpe319dCYmdGhpcy5lbXB0eSgpLmFwcGVuZChlKX0sbnVsbCxlLGFyZ3VtZW50cy5sZW5ndGgpfSxyZXBsYWNlV2l0aDpmdW5jdGlvbigpe3ZhciBlPVtdO3JldHVybiBPZSh0aGlzLGFyZ3VtZW50cyxmdW5jdGlvbih0KXt2YXIgbj10aGlzLnBhcmVudE5vZGU7eS5pbkFycmF5KHRoaXMsZSk8MCYmKHkuY2xlYW5EYXRhKGRlKHRoaXMpKSxuJiZuLnJlcGxhY2VDaGlsZCh0LHRoaXMpKX0sZSl9fSkseS5lYWNoKHthcHBlbmRUbzpcImFwcGVuZFwiLHByZXBlbmRUbzpcInByZXBlbmRcIixpbnNlcnRCZWZvcmU6XCJiZWZvcmVcIixpbnNlcnRBZnRlcjpcImFmdGVyXCIscmVwbGFjZUFsbDpcInJlcGxhY2VXaXRoXCJ9LGZ1bmN0aW9uKGUsdCl7eS5mbltlXT1mdW5jdGlvbihlKXtmb3IodmFyIG4saT1bXSxyPXkoZSksbz1yLmxlbmd0aC0xLHM9MDtzPD1vO3MrKyluPXM9PT1vP3RoaXM6dGhpcy5jbG9uZSghMCkseShyW3NdKVt0XShuKSxhLmFwcGx5KGksbi5nZXQoKSk7cmV0dXJuIHRoaXMucHVzaFN0YWNrKGkpfX0pO3ZhciBJZT0vXm1hcmdpbi8sUmU9bmV3IFJlZ0V4cChcIl4oXCIrZWUrXCIpKD8hcHgpW2EteiVdKyRcIixcImlcIiksTWU9ZnVuY3Rpb24odCl7dmFyIG49dC5vd25lckRvY3VtZW50LmRlZmF1bHRWaWV3O3JldHVybiBuJiZuLm9wZW5lcnx8KG49ZSksbi5nZXRDb21wdXRlZFN0eWxlKHQpfTshZnVuY3Rpb24oKXtmdW5jdGlvbiB0KCl7aWYobCl7dS5zdHlsZS5jc3NUZXh0PVwicG9zaXRpb246YWJzb2x1dGU7bGVmdDotMTExMTFweDt3aWR0aDo2MHB4O21hcmdpbi10b3A6MXB4O3BhZGRpbmc6MDtib3JkZXI6MFwiLGwuc3R5bGUuY3NzVGV4dD1cInBvc2l0aW9uOnJlbGF0aXZlO2Rpc3BsYXk6YmxvY2s7Ym94LXNpemluZzpib3JkZXItYm94O292ZXJmbG93OnNjcm9sbDttYXJnaW46YXV0bztib3JkZXI6MXB4O3BhZGRpbmc6MXB4O3dpZHRoOjYwJTt0b3A6MSVcIixtZS5hcHBlbmRDaGlsZCh1KS5hcHBlbmRDaGlsZChsKTt2YXIgdD1lLmdldENvbXB1dGVkU3R5bGUobCk7bj1cIjElXCIhPT10LnRvcCxhPVwiMTJweFwiPT09dC5tYXJnaW5MZWZ0LGwuc3R5bGUubWFyZ2luUmlnaHQ9XCI2MCVcIixzPVwiMzZweFwiPT09dC5tYXJnaW5SaWdodCxyPVwiMzZweFwiPT09dC53aWR0aCxsLnN0eWxlLnBvc2l0aW9uPVwiYWJzb2x1dGVcIixvPTM2PT09bC5vZmZzZXRXaWR0aHx8XCJhYnNvbHV0ZVwiLG1lLnJlbW92ZUNoaWxkKHUpLGw9bnVsbH19dmFyIG4scixvLHMsYSx1PWkuY3JlYXRlRWxlbWVudChcImRpdlwiKSxsPWkuY3JlYXRlRWxlbWVudChcImRpdlwiKTtsLnN0eWxlJiYobC5zdHlsZS5iYWNrZ3JvdW5kQ2xpcD1cImNvbnRlbnQtYm94XCIsbC5jbG9uZU5vZGUoITApLnN0eWxlLmJhY2tncm91bmRDbGlwPVwiXCIsaC5jbGVhckNsb25lU3R5bGU9XCJjb250ZW50LWJveFwiPT09bC5zdHlsZS5iYWNrZ3JvdW5kQ2xpcCx5LmV4dGVuZChoLHtib3hTaXppbmdSZWxpYWJsZTpmdW5jdGlvbigpe3JldHVybiB0KCkscn0scGl4ZWxQb3NpdGlvbjpmdW5jdGlvbigpe3JldHVybiB0KCksbn0scGl4ZWxNYXJnaW5SaWdodDpmdW5jdGlvbigpe3JldHVybiB0KCksc30scmVsaWFibGVNYXJnaW5MZWZ0OmZ1bmN0aW9uKCl7cmV0dXJuIHQoKSxhfSxzY3JvbGxib3hTaXplOmZ1bmN0aW9uKCl7cmV0dXJuIHQoKSxvfX0pKX0oKTtmdW5jdGlvbiBXZShlLHQsbil7dmFyIGkscixvLHMsYT1lLnN0eWxlO3JldHVybihuPW58fE1lKGUpKSYmKFwiXCIhPT0ocz1uLmdldFByb3BlcnR5VmFsdWUodCl8fG5bdF0pfHx5LmNvbnRhaW5zKGUub3duZXJEb2N1bWVudCxlKXx8KHM9eS5zdHlsZShlLHQpKSwhaC5waXhlbE1hcmdpblJpZ2h0KCkmJlJlLnRlc3QocykmJkllLnRlc3QodCkmJihpPWEud2lkdGgscj1hLm1pbldpZHRoLG89YS5tYXhXaWR0aCxhLm1pbldpZHRoPWEubWF4V2lkdGg9YS53aWR0aD1zLHM9bi53aWR0aCxhLndpZHRoPWksYS5taW5XaWR0aD1yLGEubWF4V2lkdGg9bykpLHZvaWQgMCE9PXM/cytcIlwiOnN9ZnVuY3Rpb24gQmUoZSx0KXtyZXR1cm57Z2V0OmZ1bmN0aW9uKCl7aWYoIWUoKSlyZXR1cm4odGhpcy5nZXQ9dCkuYXBwbHkodGhpcyxhcmd1bWVudHMpO2RlbGV0ZSB0aGlzLmdldH19fXZhciAkZT0vXihub25lfHRhYmxlKD8hLWNbZWFdKS4rKS8sX2U9L14tLS8semU9e3Bvc2l0aW9uOlwiYWJzb2x1dGVcIix2aXNpYmlsaXR5OlwiaGlkZGVuXCIsZGlzcGxheTpcImJsb2NrXCJ9LFVlPXtsZXR0ZXJTcGFjaW5nOlwiMFwiLGZvbnRXZWlnaHQ6XCI0MDBcIn0sWGU9W1wiV2Via2l0XCIsXCJNb3pcIixcIm1zXCJdLFZlPWkuY3JlYXRlRWxlbWVudChcImRpdlwiKS5zdHlsZTtmdW5jdGlvbiBZZShlKXtpZihlIGluIFZlKXJldHVybiBlO3ZhciB0PWVbMF0udG9VcHBlckNhc2UoKStlLnNsaWNlKDEpLG49WGUubGVuZ3RoO3doaWxlKG4tLSlpZigoZT1YZVtuXSt0KWluIFZlKXJldHVybiBlfWZ1bmN0aW9uIFFlKGUpe3ZhciB0PXkuY3NzUHJvcHNbZV07cmV0dXJuIHR8fCh0PXkuY3NzUHJvcHNbZV09WWUoZSl8fGUpLHR9ZnVuY3Rpb24gR2UoZSx0LG4pe3ZhciBpPXRlLmV4ZWModCk7cmV0dXJuIGk/TWF0aC5tYXgoMCxpWzJdLShufHwwKSkrKGlbM118fFwicHhcIik6dH1mdW5jdGlvbiBLZShlLHQsbixpLHIsbyl7dmFyIHM9XCJ3aWR0aFwiPT09dD8xOjAsYT0wLHU9MDtpZihuPT09KGk/XCJib3JkZXJcIjpcImNvbnRlbnRcIikpcmV0dXJuIDA7Zm9yKDtzPDQ7cys9MilcIm1hcmdpblwiPT09biYmKHUrPXkuY3NzKGUsbituZVtzXSwhMCxyKSksaT8oXCJjb250ZW50XCI9PT1uJiYodS09eS5jc3MoZSxcInBhZGRpbmdcIituZVtzXSwhMCxyKSksXCJtYXJnaW5cIiE9PW4mJih1LT15LmNzcyhlLFwiYm9yZGVyXCIrbmVbc10rXCJXaWR0aFwiLCEwLHIpKSk6KHUrPXkuY3NzKGUsXCJwYWRkaW5nXCIrbmVbc10sITAsciksXCJwYWRkaW5nXCIhPT1uP3UrPXkuY3NzKGUsXCJib3JkZXJcIituZVtzXStcIldpZHRoXCIsITAscik6YSs9eS5jc3MoZSxcImJvcmRlclwiK25lW3NdK1wiV2lkdGhcIiwhMCxyKSk7cmV0dXJuIWkmJm8+PTAmJih1Kz1NYXRoLm1heCgwLE1hdGguY2VpbChlW1wib2Zmc2V0XCIrdFswXS50b1VwcGVyQ2FzZSgpK3Quc2xpY2UoMSldLW8tdS1hLS41KSkpLHV9ZnVuY3Rpb24gSmUoZSx0LG4pe3ZhciBpPU1lKGUpLHI9V2UoZSx0LGkpLG89XCJib3JkZXItYm94XCI9PT15LmNzcyhlLFwiYm94U2l6aW5nXCIsITEsaSkscz1vO2lmKFJlLnRlc3Qocikpe2lmKCFuKXJldHVybiByO3I9XCJhdXRvXCJ9cmV0dXJuIHM9cyYmKGguYm94U2l6aW5nUmVsaWFibGUoKXx8cj09PWUuc3R5bGVbdF0pLChcImF1dG9cIj09PXJ8fCFwYXJzZUZsb2F0KHIpJiZcImlubGluZVwiPT09eS5jc3MoZSxcImRpc3BsYXlcIiwhMSxpKSkmJihyPWVbXCJvZmZzZXRcIit0WzBdLnRvVXBwZXJDYXNlKCkrdC5zbGljZSgxKV0scz0hMCksKHI9cGFyc2VGbG9hdChyKXx8MCkrS2UoZSx0LG58fChvP1wiYm9yZGVyXCI6XCJjb250ZW50XCIpLHMsaSxyKStcInB4XCJ9eS5leHRlbmQoe2Nzc0hvb2tzOntvcGFjaXR5OntnZXQ6ZnVuY3Rpb24oZSx0KXtpZih0KXt2YXIgbj1XZShlLFwib3BhY2l0eVwiKTtyZXR1cm5cIlwiPT09bj9cIjFcIjpufX19fSxjc3NOdW1iZXI6e2FuaW1hdGlvbkl0ZXJhdGlvbkNvdW50OiEwLGNvbHVtbkNvdW50OiEwLGZpbGxPcGFjaXR5OiEwLGZsZXhHcm93OiEwLGZsZXhTaHJpbms6ITAsZm9udFdlaWdodDohMCxsaW5lSGVpZ2h0OiEwLG9wYWNpdHk6ITAsb3JkZXI6ITAsb3JwaGFuczohMCx3aWRvd3M6ITAsekluZGV4OiEwLHpvb206ITB9LGNzc1Byb3BzOnt9LHN0eWxlOmZ1bmN0aW9uKGUsdCxuLGkpe2lmKGUmJjMhPT1lLm5vZGVUeXBlJiY4IT09ZS5ub2RlVHlwZSYmZS5zdHlsZSl7dmFyIHIsbyxzLGE9eS5jYW1lbENhc2UodCksdT1fZS50ZXN0KHQpLGw9ZS5zdHlsZTtpZih1fHwodD1RZShhKSkscz15LmNzc0hvb2tzW3RdfHx5LmNzc0hvb2tzW2FdLHZvaWQgMD09PW4pcmV0dXJuIHMmJlwiZ2V0XCJpbiBzJiZ2b2lkIDAhPT0ocj1zLmdldChlLCExLGkpKT9yOmxbdF07XCJzdHJpbmdcIj09KG89dHlwZW9mIG4pJiYocj10ZS5leGVjKG4pKSYmclsxXSYmKG49b2UoZSx0LHIpLG89XCJudW1iZXJcIiksbnVsbCE9biYmbj09PW4mJihcIm51bWJlclwiPT09byYmKG4rPXImJnJbM118fCh5LmNzc051bWJlclthXT9cIlwiOlwicHhcIikpLGguY2xlYXJDbG9uZVN0eWxlfHxcIlwiIT09bnx8MCE9PXQuaW5kZXhPZihcImJhY2tncm91bmRcIil8fChsW3RdPVwiaW5oZXJpdFwiKSxzJiZcInNldFwiaW4gcyYmdm9pZCAwPT09KG49cy5zZXQoZSxuLGkpKXx8KHU/bC5zZXRQcm9wZXJ0eSh0LG4pOmxbdF09bikpfX0sY3NzOmZ1bmN0aW9uKGUsdCxuLGkpe3ZhciByLG8scyxhPXkuY2FtZWxDYXNlKHQpO3JldHVybiBfZS50ZXN0KHQpfHwodD1RZShhKSksKHM9eS5jc3NIb29rc1t0XXx8eS5jc3NIb29rc1thXSkmJlwiZ2V0XCJpbiBzJiYocj1zLmdldChlLCEwLG4pKSx2b2lkIDA9PT1yJiYocj1XZShlLHQsaSkpLFwibm9ybWFsXCI9PT1yJiZ0IGluIFVlJiYocj1VZVt0XSksXCJcIj09PW58fG4/KG89cGFyc2VGbG9hdChyKSwhMD09PW58fGlzRmluaXRlKG8pP298fDA6cik6cn19KSx5LmVhY2goW1wiaGVpZ2h0XCIsXCJ3aWR0aFwiXSxmdW5jdGlvbihlLHQpe3kuY3NzSG9va3NbdF09e2dldDpmdW5jdGlvbihlLG4saSl7aWYobilyZXR1cm4hJGUudGVzdCh5LmNzcyhlLFwiZGlzcGxheVwiKSl8fGUuZ2V0Q2xpZW50UmVjdHMoKS5sZW5ndGgmJmUuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkud2lkdGg/SmUoZSx0LGkpOnJlKGUsemUsZnVuY3Rpb24oKXtyZXR1cm4gSmUoZSx0LGkpfSl9LHNldDpmdW5jdGlvbihlLG4saSl7dmFyIHIsbz1NZShlKSxzPVwiYm9yZGVyLWJveFwiPT09eS5jc3MoZSxcImJveFNpemluZ1wiLCExLG8pLGE9aSYmS2UoZSx0LGkscyxvKTtyZXR1cm4gcyYmaC5zY3JvbGxib3hTaXplKCk9PT1vLnBvc2l0aW9uJiYoYS09TWF0aC5jZWlsKGVbXCJvZmZzZXRcIit0WzBdLnRvVXBwZXJDYXNlKCkrdC5zbGljZSgxKV0tcGFyc2VGbG9hdChvW3RdKS1LZShlLHQsXCJib3JkZXJcIiwhMSxvKS0uNSkpLGEmJihyPXRlLmV4ZWMobikpJiZcInB4XCIhPT0oclszXXx8XCJweFwiKSYmKGUuc3R5bGVbdF09bixuPXkuY3NzKGUsdCkpLEdlKGUsbixhKX19fSkseS5jc3NIb29rcy5tYXJnaW5MZWZ0PUJlKGgucmVsaWFibGVNYXJnaW5MZWZ0LGZ1bmN0aW9uKGUsdCl7aWYodClyZXR1cm4ocGFyc2VGbG9hdChXZShlLFwibWFyZ2luTGVmdFwiKSl8fGUuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkubGVmdC1yZShlLHttYXJnaW5MZWZ0OjB9LGZ1bmN0aW9uKCl7cmV0dXJuIGUuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkubGVmdH0pKStcInB4XCJ9KSx5LmVhY2goe21hcmdpbjpcIlwiLHBhZGRpbmc6XCJcIixib3JkZXI6XCJXaWR0aFwifSxmdW5jdGlvbihlLHQpe3kuY3NzSG9va3NbZSt0XT17ZXhwYW5kOmZ1bmN0aW9uKG4pe2Zvcih2YXIgaT0wLHI9e30sbz1cInN0cmluZ1wiPT10eXBlb2Ygbj9uLnNwbGl0KFwiIFwiKTpbbl07aTw0O2krKylyW2UrbmVbaV0rdF09b1tpXXx8b1tpLTJdfHxvWzBdO3JldHVybiByfX0sSWUudGVzdChlKXx8KHkuY3NzSG9va3NbZSt0XS5zZXQ9R2UpfSkseS5mbi5leHRlbmQoe2NzczpmdW5jdGlvbihlLHQpe3JldHVybiBVKHRoaXMsZnVuY3Rpb24oZSx0LG4pe3ZhciBpLHIsbz17fSxzPTA7aWYoQXJyYXkuaXNBcnJheSh0KSl7Zm9yKGk9TWUoZSkscj10Lmxlbmd0aDtzPHI7cysrKW9bdFtzXV09eS5jc3MoZSx0W3NdLCExLGkpO3JldHVybiBvfXJldHVybiB2b2lkIDAhPT1uP3kuc3R5bGUoZSx0LG4pOnkuY3NzKGUsdCl9LGUsdCxhcmd1bWVudHMubGVuZ3RoPjEpfX0pO2Z1bmN0aW9uIFplKGUsdCxuLGkscil7cmV0dXJuIG5ldyBaZS5wcm90b3R5cGUuaW5pdChlLHQsbixpLHIpfXkuVHdlZW49WmUsWmUucHJvdG90eXBlPXtjb25zdHJ1Y3RvcjpaZSxpbml0OmZ1bmN0aW9uKGUsdCxuLGkscixvKXt0aGlzLmVsZW09ZSx0aGlzLnByb3A9bix0aGlzLmVhc2luZz1yfHx5LmVhc2luZy5fZGVmYXVsdCx0aGlzLm9wdGlvbnM9dCx0aGlzLnN0YXJ0PXRoaXMubm93PXRoaXMuY3VyKCksdGhpcy5lbmQ9aSx0aGlzLnVuaXQ9b3x8KHkuY3NzTnVtYmVyW25dP1wiXCI6XCJweFwiKX0sY3VyOmZ1bmN0aW9uKCl7dmFyIGU9WmUucHJvcEhvb2tzW3RoaXMucHJvcF07cmV0dXJuIGUmJmUuZ2V0P2UuZ2V0KHRoaXMpOlplLnByb3BIb29rcy5fZGVmYXVsdC5nZXQodGhpcyl9LHJ1bjpmdW5jdGlvbihlKXt2YXIgdCxuPVplLnByb3BIb29rc1t0aGlzLnByb3BdO3JldHVybiB0aGlzLm9wdGlvbnMuZHVyYXRpb24/dGhpcy5wb3M9dD15LmVhc2luZ1t0aGlzLmVhc2luZ10oZSx0aGlzLm9wdGlvbnMuZHVyYXRpb24qZSwwLDEsdGhpcy5vcHRpb25zLmR1cmF0aW9uKTp0aGlzLnBvcz10PWUsdGhpcy5ub3c9KHRoaXMuZW5kLXRoaXMuc3RhcnQpKnQrdGhpcy5zdGFydCx0aGlzLm9wdGlvbnMuc3RlcCYmdGhpcy5vcHRpb25zLnN0ZXAuY2FsbCh0aGlzLmVsZW0sdGhpcy5ub3csdGhpcyksbiYmbi5zZXQ/bi5zZXQodGhpcyk6WmUucHJvcEhvb2tzLl9kZWZhdWx0LnNldCh0aGlzKSx0aGlzfX0sWmUucHJvdG90eXBlLmluaXQucHJvdG90eXBlPVplLnByb3RvdHlwZSxaZS5wcm9wSG9va3M9e19kZWZhdWx0OntnZXQ6ZnVuY3Rpb24oZSl7dmFyIHQ7cmV0dXJuIDEhPT1lLmVsZW0ubm9kZVR5cGV8fG51bGwhPWUuZWxlbVtlLnByb3BdJiZudWxsPT1lLmVsZW0uc3R5bGVbZS5wcm9wXT9lLmVsZW1bZS5wcm9wXToodD15LmNzcyhlLmVsZW0sZS5wcm9wLFwiXCIpKSYmXCJhdXRvXCIhPT10P3Q6MH0sc2V0OmZ1bmN0aW9uKGUpe3kuZnguc3RlcFtlLnByb3BdP3kuZnguc3RlcFtlLnByb3BdKGUpOjEhPT1lLmVsZW0ubm9kZVR5cGV8fG51bGw9PWUuZWxlbS5zdHlsZVt5LmNzc1Byb3BzW2UucHJvcF1dJiYheS5jc3NIb29rc1tlLnByb3BdP2UuZWxlbVtlLnByb3BdPWUubm93Onkuc3R5bGUoZS5lbGVtLGUucHJvcCxlLm5vdytlLnVuaXQpfX19LFplLnByb3BIb29rcy5zY3JvbGxUb3A9WmUucHJvcEhvb2tzLnNjcm9sbExlZnQ9e3NldDpmdW5jdGlvbihlKXtlLmVsZW0ubm9kZVR5cGUmJmUuZWxlbS5wYXJlbnROb2RlJiYoZS5lbGVtW2UucHJvcF09ZS5ub3cpfX0seS5lYXNpbmc9e2xpbmVhcjpmdW5jdGlvbihlKXtyZXR1cm4gZX0sc3dpbmc6ZnVuY3Rpb24oZSl7cmV0dXJuLjUtTWF0aC5jb3MoZSpNYXRoLlBJKS8yfSxfZGVmYXVsdDpcInN3aW5nXCJ9LHkuZng9WmUucHJvdG90eXBlLmluaXQseS5meC5zdGVwPXt9O3ZhciBldCx0dCxudD0vXig/OnRvZ2dsZXxzaG93fGhpZGUpJC8saXQ9L3F1ZXVlSG9va3MkLztmdW5jdGlvbiBydCgpe3R0JiYoITE9PT1pLmhpZGRlbiYmZS5yZXF1ZXN0QW5pbWF0aW9uRnJhbWU/ZS5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUocnQpOmUuc2V0VGltZW91dChydCx5LmZ4LmludGVydmFsKSx5LmZ4LnRpY2soKSl9ZnVuY3Rpb24gb3QoKXtyZXR1cm4gZS5zZXRUaW1lb3V0KGZ1bmN0aW9uKCl7ZXQ9dm9pZCAwfSksZXQ9eS5ub3coKX1mdW5jdGlvbiBzdChlLHQpe3ZhciBuLGk9MCxyPXtoZWlnaHQ6ZX07Zm9yKHQ9dD8xOjA7aTw0O2krPTItdClyW1wibWFyZ2luXCIrKG49bmVbaV0pXT1yW1wicGFkZGluZ1wiK25dPWU7cmV0dXJuIHQmJihyLm9wYWNpdHk9ci53aWR0aD1lKSxyfWZ1bmN0aW9uIGF0KGUsdCxuKXtmb3IodmFyIGkscj0oY3QudHdlZW5lcnNbdF18fFtdKS5jb25jYXQoY3QudHdlZW5lcnNbXCIqXCJdKSxvPTAscz1yLmxlbmd0aDtvPHM7bysrKWlmKGk9cltvXS5jYWxsKG4sdCxlKSlyZXR1cm4gaX1mdW5jdGlvbiB1dChlLHQsbil7dmFyIGkscixvLHMsYSx1LGwsYyxmPVwid2lkdGhcImluIHR8fFwiaGVpZ2h0XCJpbiB0LHA9dGhpcyxkPXt9LGg9ZS5zdHlsZSxnPWUubm9kZVR5cGUmJmllKGUpLHY9WS5nZXQoZSxcImZ4c2hvd1wiKTtuLnF1ZXVlfHwobnVsbD09KHM9eS5fcXVldWVIb29rcyhlLFwiZnhcIikpLnVucXVldWVkJiYocy51bnF1ZXVlZD0wLGE9cy5lbXB0eS5maXJlLHMuZW1wdHkuZmlyZT1mdW5jdGlvbigpe3MudW5xdWV1ZWR8fGEoKX0pLHMudW5xdWV1ZWQrKyxwLmFsd2F5cyhmdW5jdGlvbigpe3AuYWx3YXlzKGZ1bmN0aW9uKCl7cy51bnF1ZXVlZC0tLHkucXVldWUoZSxcImZ4XCIpLmxlbmd0aHx8cy5lbXB0eS5maXJlKCl9KX0pKTtmb3IoaSBpbiB0KWlmKHI9dFtpXSxudC50ZXN0KHIpKXtpZihkZWxldGUgdFtpXSxvPW98fFwidG9nZ2xlXCI9PT1yLHI9PT0oZz9cImhpZGVcIjpcInNob3dcIikpe2lmKFwic2hvd1wiIT09cnx8IXZ8fHZvaWQgMD09PXZbaV0pY29udGludWU7Zz0hMH1kW2ldPXYmJnZbaV18fHkuc3R5bGUoZSxpKX1pZigodT0heS5pc0VtcHR5T2JqZWN0KHQpKXx8IXkuaXNFbXB0eU9iamVjdChkKSl7ZiYmMT09PWUubm9kZVR5cGUmJihuLm92ZXJmbG93PVtoLm92ZXJmbG93LGgub3ZlcmZsb3dYLGgub3ZlcmZsb3dZXSxudWxsPT0obD12JiZ2LmRpc3BsYXkpJiYobD1ZLmdldChlLFwiZGlzcGxheVwiKSksXCJub25lXCI9PT0oYz15LmNzcyhlLFwiZGlzcGxheVwiKSkmJihsP2M9bDoodWUoW2VdLCEwKSxsPWUuc3R5bGUuZGlzcGxheXx8bCxjPXkuY3NzKGUsXCJkaXNwbGF5XCIpLHVlKFtlXSkpKSwoXCJpbmxpbmVcIj09PWN8fFwiaW5saW5lLWJsb2NrXCI9PT1jJiZudWxsIT1sKSYmXCJub25lXCI9PT15LmNzcyhlLFwiZmxvYXRcIikmJih1fHwocC5kb25lKGZ1bmN0aW9uKCl7aC5kaXNwbGF5PWx9KSxudWxsPT1sJiYoYz1oLmRpc3BsYXksbD1cIm5vbmVcIj09PWM/XCJcIjpjKSksaC5kaXNwbGF5PVwiaW5saW5lLWJsb2NrXCIpKSxuLm92ZXJmbG93JiYoaC5vdmVyZmxvdz1cImhpZGRlblwiLHAuYWx3YXlzKGZ1bmN0aW9uKCl7aC5vdmVyZmxvdz1uLm92ZXJmbG93WzBdLGgub3ZlcmZsb3dYPW4ub3ZlcmZsb3dbMV0saC5vdmVyZmxvd1k9bi5vdmVyZmxvd1syXX0pKSx1PSExO2ZvcihpIGluIGQpdXx8KHY/XCJoaWRkZW5cImluIHYmJihnPXYuaGlkZGVuKTp2PVkuYWNjZXNzKGUsXCJmeHNob3dcIix7ZGlzcGxheTpsfSksbyYmKHYuaGlkZGVuPSFnKSxnJiZ1ZShbZV0sITApLHAuZG9uZShmdW5jdGlvbigpe2d8fHVlKFtlXSksWS5yZW1vdmUoZSxcImZ4c2hvd1wiKTtmb3IoaSBpbiBkKXkuc3R5bGUoZSxpLGRbaV0pfSkpLHU9YXQoZz92W2ldOjAsaSxwKSxpIGluIHZ8fCh2W2ldPXUuc3RhcnQsZyYmKHUuZW5kPXUuc3RhcnQsdS5zdGFydD0wKSl9fWZ1bmN0aW9uIGx0KGUsdCl7dmFyIG4saSxyLG8scztmb3IobiBpbiBlKWlmKGk9eS5jYW1lbENhc2Uobikscj10W2ldLG89ZVtuXSxBcnJheS5pc0FycmF5KG8pJiYocj1vWzFdLG89ZVtuXT1vWzBdKSxuIT09aSYmKGVbaV09byxkZWxldGUgZVtuXSksKHM9eS5jc3NIb29rc1tpXSkmJlwiZXhwYW5kXCJpbiBzKXtvPXMuZXhwYW5kKG8pLGRlbGV0ZSBlW2ldO2ZvcihuIGluIG8pbiBpbiBlfHwoZVtuXT1vW25dLHRbbl09cil9ZWxzZSB0W2ldPXJ9ZnVuY3Rpb24gY3QoZSx0LG4pe3ZhciBpLHIsbz0wLHM9Y3QucHJlZmlsdGVycy5sZW5ndGgsYT15LkRlZmVycmVkKCkuYWx3YXlzKGZ1bmN0aW9uKCl7ZGVsZXRlIHUuZWxlbX0pLHU9ZnVuY3Rpb24oKXtpZihyKXJldHVybiExO2Zvcih2YXIgdD1ldHx8b3QoKSxuPU1hdGgubWF4KDAsbC5zdGFydFRpbWUrbC5kdXJhdGlvbi10KSxpPTEtKG4vbC5kdXJhdGlvbnx8MCksbz0wLHM9bC50d2VlbnMubGVuZ3RoO288cztvKyspbC50d2VlbnNbb10ucnVuKGkpO3JldHVybiBhLm5vdGlmeVdpdGgoZSxbbCxpLG5dKSxpPDEmJnM/bjooc3x8YS5ub3RpZnlXaXRoKGUsW2wsMSwwXSksYS5yZXNvbHZlV2l0aChlLFtsXSksITEpfSxsPWEucHJvbWlzZSh7ZWxlbTplLHByb3BzOnkuZXh0ZW5kKHt9LHQpLG9wdHM6eS5leHRlbmQoITAse3NwZWNpYWxFYXNpbmc6e30sZWFzaW5nOnkuZWFzaW5nLl9kZWZhdWx0fSxuKSxvcmlnaW5hbFByb3BlcnRpZXM6dCxvcmlnaW5hbE9wdGlvbnM6bixzdGFydFRpbWU6ZXR8fG90KCksZHVyYXRpb246bi5kdXJhdGlvbix0d2VlbnM6W10sY3JlYXRlVHdlZW46ZnVuY3Rpb24odCxuKXt2YXIgaT15LlR3ZWVuKGUsbC5vcHRzLHQsbixsLm9wdHMuc3BlY2lhbEVhc2luZ1t0XXx8bC5vcHRzLmVhc2luZyk7cmV0dXJuIGwudHdlZW5zLnB1c2goaSksaX0sc3RvcDpmdW5jdGlvbih0KXt2YXIgbj0wLGk9dD9sLnR3ZWVucy5sZW5ndGg6MDtpZihyKXJldHVybiB0aGlzO2ZvcihyPSEwO248aTtuKyspbC50d2VlbnNbbl0ucnVuKDEpO3JldHVybiB0PyhhLm5vdGlmeVdpdGgoZSxbbCwxLDBdKSxhLnJlc29sdmVXaXRoKGUsW2wsdF0pKTphLnJlamVjdFdpdGgoZSxbbCx0XSksdGhpc319KSxjPWwucHJvcHM7Zm9yKGx0KGMsbC5vcHRzLnNwZWNpYWxFYXNpbmcpO288cztvKyspaWYoaT1jdC5wcmVmaWx0ZXJzW29dLmNhbGwobCxlLGMsbC5vcHRzKSlyZXR1cm4geS5pc0Z1bmN0aW9uKGkuc3RvcCkmJih5Ll9xdWV1ZUhvb2tzKGwuZWxlbSxsLm9wdHMucXVldWUpLnN0b3A9eS5wcm94eShpLnN0b3AsaSkpLGk7cmV0dXJuIHkubWFwKGMsYXQsbCkseS5pc0Z1bmN0aW9uKGwub3B0cy5zdGFydCkmJmwub3B0cy5zdGFydC5jYWxsKGUsbCksbC5wcm9ncmVzcyhsLm9wdHMucHJvZ3Jlc3MpLmRvbmUobC5vcHRzLmRvbmUsbC5vcHRzLmNvbXBsZXRlKS5mYWlsKGwub3B0cy5mYWlsKS5hbHdheXMobC5vcHRzLmFsd2F5cykseS5meC50aW1lcih5LmV4dGVuZCh1LHtlbGVtOmUsYW5pbTpsLHF1ZXVlOmwub3B0cy5xdWV1ZX0pKSxsfXkuQW5pbWF0aW9uPXkuZXh0ZW5kKGN0LHt0d2VlbmVyczp7XCIqXCI6W2Z1bmN0aW9uKGUsdCl7dmFyIG49dGhpcy5jcmVhdGVUd2VlbihlLHQpO3JldHVybiBvZShuLmVsZW0sZSx0ZS5leGVjKHQpLG4pLG59XX0sdHdlZW5lcjpmdW5jdGlvbihlLHQpe3kuaXNGdW5jdGlvbihlKT8odD1lLGU9W1wiKlwiXSk6ZT1lLm1hdGNoKEkpO2Zvcih2YXIgbixpPTAscj1lLmxlbmd0aDtpPHI7aSsrKW49ZVtpXSxjdC50d2VlbmVyc1tuXT1jdC50d2VlbmVyc1tuXXx8W10sY3QudHdlZW5lcnNbbl0udW5zaGlmdCh0KX0scHJlZmlsdGVyczpbdXRdLHByZWZpbHRlcjpmdW5jdGlvbihlLHQpe3Q/Y3QucHJlZmlsdGVycy51bnNoaWZ0KGUpOmN0LnByZWZpbHRlcnMucHVzaChlKX19KSx5LnNwZWVkPWZ1bmN0aW9uKGUsdCxuKXt2YXIgaT1lJiZcIm9iamVjdFwiPT10eXBlb2YgZT95LmV4dGVuZCh7fSxlKTp7Y29tcGxldGU6bnx8IW4mJnR8fHkuaXNGdW5jdGlvbihlKSYmZSxkdXJhdGlvbjplLGVhc2luZzpuJiZ0fHx0JiYheS5pc0Z1bmN0aW9uKHQpJiZ0fTtyZXR1cm4geS5meC5vZmY/aS5kdXJhdGlvbj0wOlwibnVtYmVyXCIhPXR5cGVvZiBpLmR1cmF0aW9uJiYoaS5kdXJhdGlvbiBpbiB5LmZ4LnNwZWVkcz9pLmR1cmF0aW9uPXkuZnguc3BlZWRzW2kuZHVyYXRpb25dOmkuZHVyYXRpb249eS5meC5zcGVlZHMuX2RlZmF1bHQpLG51bGwhPWkucXVldWUmJiEwIT09aS5xdWV1ZXx8KGkucXVldWU9XCJmeFwiKSxpLm9sZD1pLmNvbXBsZXRlLGkuY29tcGxldGU9ZnVuY3Rpb24oKXt5LmlzRnVuY3Rpb24oaS5vbGQpJiZpLm9sZC5jYWxsKHRoaXMpLGkucXVldWUmJnkuZGVxdWV1ZSh0aGlzLGkucXVldWUpfSxpfSx5LmZuLmV4dGVuZCh7ZmFkZVRvOmZ1bmN0aW9uKGUsdCxuLGkpe3JldHVybiB0aGlzLmZpbHRlcihpZSkuY3NzKFwib3BhY2l0eVwiLDApLnNob3coKS5lbmQoKS5hbmltYXRlKHtvcGFjaXR5OnR9LGUsbixpKX0sYW5pbWF0ZTpmdW5jdGlvbihlLHQsbixpKXt2YXIgcj15LmlzRW1wdHlPYmplY3QoZSksbz15LnNwZWVkKHQsbixpKSxzPWZ1bmN0aW9uKCl7dmFyIHQ9Y3QodGhpcyx5LmV4dGVuZCh7fSxlKSxvKTsocnx8WS5nZXQodGhpcyxcImZpbmlzaFwiKSkmJnQuc3RvcCghMCl9O3JldHVybiBzLmZpbmlzaD1zLHJ8fCExPT09by5xdWV1ZT90aGlzLmVhY2gocyk6dGhpcy5xdWV1ZShvLnF1ZXVlLHMpfSxzdG9wOmZ1bmN0aW9uKGUsdCxuKXt2YXIgaT1mdW5jdGlvbihlKXt2YXIgdD1lLnN0b3A7ZGVsZXRlIGUuc3RvcCx0KG4pfTtyZXR1cm5cInN0cmluZ1wiIT10eXBlb2YgZSYmKG49dCx0PWUsZT12b2lkIDApLHQmJiExIT09ZSYmdGhpcy5xdWV1ZShlfHxcImZ4XCIsW10pLHRoaXMuZWFjaChmdW5jdGlvbigpe3ZhciB0PSEwLHI9bnVsbCE9ZSYmZStcInF1ZXVlSG9va3NcIixvPXkudGltZXJzLHM9WS5nZXQodGhpcyk7aWYocilzW3JdJiZzW3JdLnN0b3AmJmkoc1tyXSk7ZWxzZSBmb3IociBpbiBzKXNbcl0mJnNbcl0uc3RvcCYmaXQudGVzdChyKSYmaShzW3JdKTtmb3Iocj1vLmxlbmd0aDtyLS07KW9bcl0uZWxlbSE9PXRoaXN8fG51bGwhPWUmJm9bcl0ucXVldWUhPT1lfHwob1tyXS5hbmltLnN0b3AobiksdD0hMSxvLnNwbGljZShyLDEpKTshdCYmbnx8eS5kZXF1ZXVlKHRoaXMsZSl9KX0sZmluaXNoOmZ1bmN0aW9uKGUpe3JldHVybiExIT09ZSYmKGU9ZXx8XCJmeFwiKSx0aGlzLmVhY2goZnVuY3Rpb24oKXt2YXIgdCxuPVkuZ2V0KHRoaXMpLGk9bltlK1wicXVldWVcIl0scj1uW2UrXCJxdWV1ZUhvb2tzXCJdLG89eS50aW1lcnMscz1pP2kubGVuZ3RoOjA7Zm9yKG4uZmluaXNoPSEwLHkucXVldWUodGhpcyxlLFtdKSxyJiZyLnN0b3AmJnIuc3RvcC5jYWxsKHRoaXMsITApLHQ9by5sZW5ndGg7dC0tOylvW3RdLmVsZW09PT10aGlzJiZvW3RdLnF1ZXVlPT09ZSYmKG9bdF0uYW5pbS5zdG9wKCEwKSxvLnNwbGljZSh0LDEpKTtmb3IodD0wO3Q8czt0KyspaVt0XSYmaVt0XS5maW5pc2gmJmlbdF0uZmluaXNoLmNhbGwodGhpcyk7ZGVsZXRlIG4uZmluaXNofSl9fSkseS5lYWNoKFtcInRvZ2dsZVwiLFwic2hvd1wiLFwiaGlkZVwiXSxmdW5jdGlvbihlLHQpe3ZhciBuPXkuZm5bdF07eS5mblt0XT1mdW5jdGlvbihlLGkscil7cmV0dXJuIG51bGw9PWV8fFwiYm9vbGVhblwiPT10eXBlb2YgZT9uLmFwcGx5KHRoaXMsYXJndW1lbnRzKTp0aGlzLmFuaW1hdGUoc3QodCwhMCksZSxpLHIpfX0pLHkuZWFjaCh7c2xpZGVEb3duOnN0KFwic2hvd1wiKSxzbGlkZVVwOnN0KFwiaGlkZVwiKSxzbGlkZVRvZ2dsZTpzdChcInRvZ2dsZVwiKSxmYWRlSW46e29wYWNpdHk6XCJzaG93XCJ9LGZhZGVPdXQ6e29wYWNpdHk6XCJoaWRlXCJ9LGZhZGVUb2dnbGU6e29wYWNpdHk6XCJ0b2dnbGVcIn19LGZ1bmN0aW9uKGUsdCl7eS5mbltlXT1mdW5jdGlvbihlLG4saSl7cmV0dXJuIHRoaXMuYW5pbWF0ZSh0LGUsbixpKX19KSx5LnRpbWVycz1bXSx5LmZ4LnRpY2s9ZnVuY3Rpb24oKXt2YXIgZSx0PTAsbj15LnRpbWVycztmb3IoZXQ9eS5ub3coKTt0PG4ubGVuZ3RoO3QrKykoZT1uW3RdKSgpfHxuW3RdIT09ZXx8bi5zcGxpY2UodC0tLDEpO24ubGVuZ3RofHx5LmZ4LnN0b3AoKSxldD12b2lkIDB9LHkuZngudGltZXI9ZnVuY3Rpb24oZSl7eS50aW1lcnMucHVzaChlKSx5LmZ4LnN0YXJ0KCl9LHkuZnguaW50ZXJ2YWw9MTMseS5meC5zdGFydD1mdW5jdGlvbigpe3R0fHwodHQ9ITAscnQoKSl9LHkuZnguc3RvcD1mdW5jdGlvbigpe3R0PW51bGx9LHkuZnguc3BlZWRzPXtzbG93OjYwMCxmYXN0OjIwMCxfZGVmYXVsdDo0MDB9LHkuZm4uZGVsYXk9ZnVuY3Rpb24odCxuKXtyZXR1cm4gdD15LmZ4P3kuZnguc3BlZWRzW3RdfHx0OnQsbj1ufHxcImZ4XCIsdGhpcy5xdWV1ZShuLGZ1bmN0aW9uKG4saSl7dmFyIHI9ZS5zZXRUaW1lb3V0KG4sdCk7aS5zdG9wPWZ1bmN0aW9uKCl7ZS5jbGVhclRpbWVvdXQocil9fSl9LGZ1bmN0aW9uKCl7dmFyIGU9aS5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIiksdD1pLmNyZWF0ZUVsZW1lbnQoXCJzZWxlY3RcIikuYXBwZW5kQ2hpbGQoaS5jcmVhdGVFbGVtZW50KFwib3B0aW9uXCIpKTtlLnR5cGU9XCJjaGVja2JveFwiLGguY2hlY2tPbj1cIlwiIT09ZS52YWx1ZSxoLm9wdFNlbGVjdGVkPXQuc2VsZWN0ZWQsKGU9aS5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIikpLnZhbHVlPVwidFwiLGUudHlwZT1cInJhZGlvXCIsaC5yYWRpb1ZhbHVlPVwidFwiPT09ZS52YWx1ZX0oKTt2YXIgZnQscHQ9eS5leHByLmF0dHJIYW5kbGU7eS5mbi5leHRlbmQoe2F0dHI6ZnVuY3Rpb24oZSx0KXtyZXR1cm4gVSh0aGlzLHkuYXR0cixlLHQsYXJndW1lbnRzLmxlbmd0aD4xKX0scmVtb3ZlQXR0cjpmdW5jdGlvbihlKXtyZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uKCl7eS5yZW1vdmVBdHRyKHRoaXMsZSl9KX19KSx5LmV4dGVuZCh7YXR0cjpmdW5jdGlvbihlLHQsbil7dmFyIGkscixvPWUubm9kZVR5cGU7aWYoMyE9PW8mJjghPT1vJiYyIT09bylyZXR1cm5cInVuZGVmaW5lZFwiPT10eXBlb2YgZS5nZXRBdHRyaWJ1dGU/eS5wcm9wKGUsdCxuKTooMT09PW8mJnkuaXNYTUxEb2MoZSl8fChyPXkuYXR0ckhvb2tzW3QudG9Mb3dlckNhc2UoKV18fCh5LmV4cHIubWF0Y2guYm9vbC50ZXN0KHQpP2Z0OnZvaWQgMCkpLHZvaWQgMCE9PW4/bnVsbD09PW4/dm9pZCB5LnJlbW92ZUF0dHIoZSx0KTpyJiZcInNldFwiaW4gciYmdm9pZCAwIT09KGk9ci5zZXQoZSxuLHQpKT9pOihlLnNldEF0dHJpYnV0ZSh0LG4rXCJcIiksbik6ciYmXCJnZXRcImluIHImJm51bGwhPT0oaT1yLmdldChlLHQpKT9pOm51bGw9PShpPXkuZmluZC5hdHRyKGUsdCkpP3ZvaWQgMDppKX0sYXR0ckhvb2tzOnt0eXBlOntzZXQ6ZnVuY3Rpb24oZSx0KXtpZighaC5yYWRpb1ZhbHVlJiZcInJhZGlvXCI9PT10JiZEKGUsXCJpbnB1dFwiKSl7dmFyIG49ZS52YWx1ZTtyZXR1cm4gZS5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsdCksbiYmKGUudmFsdWU9biksdH19fX0scmVtb3ZlQXR0cjpmdW5jdGlvbihlLHQpe3ZhciBuLGk9MCxyPXQmJnQubWF0Y2goSSk7aWYociYmMT09PWUubm9kZVR5cGUpd2hpbGUobj1yW2krK10pZS5yZW1vdmVBdHRyaWJ1dGUobil9fSksZnQ9e3NldDpmdW5jdGlvbihlLHQsbil7cmV0dXJuITE9PT10P3kucmVtb3ZlQXR0cihlLG4pOmUuc2V0QXR0cmlidXRlKG4sbiksbn19LHkuZWFjaCh5LmV4cHIubWF0Y2guYm9vbC5zb3VyY2UubWF0Y2goL1xcdysvZyksZnVuY3Rpb24oZSx0KXt2YXIgbj1wdFt0XXx8eS5maW5kLmF0dHI7cHRbdF09ZnVuY3Rpb24oZSx0LGkpe3ZhciByLG8scz10LnRvTG93ZXJDYXNlKCk7cmV0dXJuIGl8fChvPXB0W3NdLHB0W3NdPXIscj1udWxsIT1uKGUsdCxpKT9zOm51bGwscHRbc109bykscn19KTt2YXIgZHQ9L14oPzppbnB1dHxzZWxlY3R8dGV4dGFyZWF8YnV0dG9uKSQvaSxodD0vXig/OmF8YXJlYSkkL2k7eS5mbi5leHRlbmQoe3Byb3A6ZnVuY3Rpb24oZSx0KXtyZXR1cm4gVSh0aGlzLHkucHJvcCxlLHQsYXJndW1lbnRzLmxlbmd0aD4xKX0scmVtb3ZlUHJvcDpmdW5jdGlvbihlKXtyZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uKCl7ZGVsZXRlIHRoaXNbeS5wcm9wRml4W2VdfHxlXX0pfX0pLHkuZXh0ZW5kKHtwcm9wOmZ1bmN0aW9uKGUsdCxuKXt2YXIgaSxyLG89ZS5ub2RlVHlwZTtpZigzIT09byYmOCE9PW8mJjIhPT1vKXJldHVybiAxPT09byYmeS5pc1hNTERvYyhlKXx8KHQ9eS5wcm9wRml4W3RdfHx0LHI9eS5wcm9wSG9va3NbdF0pLHZvaWQgMCE9PW4/ciYmXCJzZXRcImluIHImJnZvaWQgMCE9PShpPXIuc2V0KGUsbix0KSk/aTplW3RdPW46ciYmXCJnZXRcImluIHImJm51bGwhPT0oaT1yLmdldChlLHQpKT9pOmVbdF19LHByb3BIb29rczp7dGFiSW5kZXg6e2dldDpmdW5jdGlvbihlKXt2YXIgdD15LmZpbmQuYXR0cihlLFwidGFiaW5kZXhcIik7cmV0dXJuIHQ/cGFyc2VJbnQodCwxMCk6ZHQudGVzdChlLm5vZGVOYW1lKXx8aHQudGVzdChlLm5vZGVOYW1lKSYmZS5ocmVmPzA6LTF9fX0scHJvcEZpeDp7Zm9yOlwiaHRtbEZvclwiLGNsYXNzOlwiY2xhc3NOYW1lXCJ9fSksaC5vcHRTZWxlY3RlZHx8KHkucHJvcEhvb2tzLnNlbGVjdGVkPXtnZXQ6ZnVuY3Rpb24oZSl7dmFyIHQ9ZS5wYXJlbnROb2RlO3JldHVybiB0JiZ0LnBhcmVudE5vZGUmJnQucGFyZW50Tm9kZS5zZWxlY3RlZEluZGV4LG51bGx9LHNldDpmdW5jdGlvbihlKXt2YXIgdD1lLnBhcmVudE5vZGU7dCYmKHQuc2VsZWN0ZWRJbmRleCx0LnBhcmVudE5vZGUmJnQucGFyZW50Tm9kZS5zZWxlY3RlZEluZGV4KX19KSx5LmVhY2goW1widGFiSW5kZXhcIixcInJlYWRPbmx5XCIsXCJtYXhMZW5ndGhcIixcImNlbGxTcGFjaW5nXCIsXCJjZWxsUGFkZGluZ1wiLFwicm93U3BhblwiLFwiY29sU3BhblwiLFwidXNlTWFwXCIsXCJmcmFtZUJvcmRlclwiLFwiY29udGVudEVkaXRhYmxlXCJdLGZ1bmN0aW9uKCl7eS5wcm9wRml4W3RoaXMudG9Mb3dlckNhc2UoKV09dGhpc30pO2Z1bmN0aW9uIGd0KGUpe3JldHVybihlLm1hdGNoKEkpfHxbXSkuam9pbihcIiBcIil9ZnVuY3Rpb24gdnQoZSl7cmV0dXJuIGUuZ2V0QXR0cmlidXRlJiZlLmdldEF0dHJpYnV0ZShcImNsYXNzXCIpfHxcIlwifXkuZm4uZXh0ZW5kKHthZGRDbGFzczpmdW5jdGlvbihlKXt2YXIgdCxuLGkscixvLHMsYSx1PTA7aWYoeS5pc0Z1bmN0aW9uKGUpKXJldHVybiB0aGlzLmVhY2goZnVuY3Rpb24odCl7eSh0aGlzKS5hZGRDbGFzcyhlLmNhbGwodGhpcyx0LHZ0KHRoaXMpKSl9KTtpZihcInN0cmluZ1wiPT10eXBlb2YgZSYmZSl7dD1lLm1hdGNoKEkpfHxbXTt3aGlsZShuPXRoaXNbdSsrXSlpZihyPXZ0KG4pLGk9MT09PW4ubm9kZVR5cGUmJlwiIFwiK2d0KHIpK1wiIFwiKXtzPTA7d2hpbGUobz10W3MrK10paS5pbmRleE9mKFwiIFwiK28rXCIgXCIpPDAmJihpKz1vK1wiIFwiKTtyIT09KGE9Z3QoaSkpJiZuLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsYSl9fXJldHVybiB0aGlzfSxyZW1vdmVDbGFzczpmdW5jdGlvbihlKXt2YXIgdCxuLGkscixvLHMsYSx1PTA7aWYoeS5pc0Z1bmN0aW9uKGUpKXJldHVybiB0aGlzLmVhY2goZnVuY3Rpb24odCl7eSh0aGlzKS5yZW1vdmVDbGFzcyhlLmNhbGwodGhpcyx0LHZ0KHRoaXMpKSl9KTtpZighYXJndW1lbnRzLmxlbmd0aClyZXR1cm4gdGhpcy5hdHRyKFwiY2xhc3NcIixcIlwiKTtpZihcInN0cmluZ1wiPT10eXBlb2YgZSYmZSl7dD1lLm1hdGNoKEkpfHxbXTt3aGlsZShuPXRoaXNbdSsrXSlpZihyPXZ0KG4pLGk9MT09PW4ubm9kZVR5cGUmJlwiIFwiK2d0KHIpK1wiIFwiKXtzPTA7d2hpbGUobz10W3MrK10pd2hpbGUoaS5pbmRleE9mKFwiIFwiK28rXCIgXCIpPi0xKWk9aS5yZXBsYWNlKFwiIFwiK28rXCIgXCIsXCIgXCIpO3IhPT0oYT1ndChpKSkmJm4uc2V0QXR0cmlidXRlKFwiY2xhc3NcIixhKX19cmV0dXJuIHRoaXN9LHRvZ2dsZUNsYXNzOmZ1bmN0aW9uKGUsdCl7dmFyIG49dHlwZW9mIGU7cmV0dXJuXCJib29sZWFuXCI9PXR5cGVvZiB0JiZcInN0cmluZ1wiPT09bj90P3RoaXMuYWRkQ2xhc3MoZSk6dGhpcy5yZW1vdmVDbGFzcyhlKTp5LmlzRnVuY3Rpb24oZSk/dGhpcy5lYWNoKGZ1bmN0aW9uKG4pe3kodGhpcykudG9nZ2xlQ2xhc3MoZS5jYWxsKHRoaXMsbix2dCh0aGlzKSx0KSx0KX0pOnRoaXMuZWFjaChmdW5jdGlvbigpe3ZhciB0LGkscixvO2lmKFwic3RyaW5nXCI9PT1uKXtpPTAscj15KHRoaXMpLG89ZS5tYXRjaChJKXx8W107d2hpbGUodD1vW2krK10pci5oYXNDbGFzcyh0KT9yLnJlbW92ZUNsYXNzKHQpOnIuYWRkQ2xhc3ModCl9ZWxzZSB2b2lkIDAhPT1lJiZcImJvb2xlYW5cIiE9PW58fCgodD12dCh0aGlzKSkmJlkuc2V0KHRoaXMsXCJfX2NsYXNzTmFtZV9fXCIsdCksdGhpcy5zZXRBdHRyaWJ1dGUmJnRoaXMuc2V0QXR0cmlidXRlKFwiY2xhc3NcIix0fHwhMT09PWU/XCJcIjpZLmdldCh0aGlzLFwiX19jbGFzc05hbWVfX1wiKXx8XCJcIikpfSl9LGhhc0NsYXNzOmZ1bmN0aW9uKGUpe3ZhciB0LG4saT0wO3Q9XCIgXCIrZStcIiBcIjt3aGlsZShuPXRoaXNbaSsrXSlpZigxPT09bi5ub2RlVHlwZSYmKFwiIFwiK2d0KHZ0KG4pKStcIiBcIikuaW5kZXhPZih0KT4tMSlyZXR1cm4hMDtyZXR1cm4hMX19KTt2YXIgbXQ9L1xcci9nO3kuZm4uZXh0ZW5kKHt2YWw6ZnVuY3Rpb24oZSl7dmFyIHQsbixpLHI9dGhpc1swXTt7aWYoYXJndW1lbnRzLmxlbmd0aClyZXR1cm4gaT15LmlzRnVuY3Rpb24oZSksdGhpcy5lYWNoKGZ1bmN0aW9uKG4pe3ZhciByOzE9PT10aGlzLm5vZGVUeXBlJiYobnVsbD09KHI9aT9lLmNhbGwodGhpcyxuLHkodGhpcykudmFsKCkpOmUpP3I9XCJcIjpcIm51bWJlclwiPT10eXBlb2Ygcj9yKz1cIlwiOkFycmF5LmlzQXJyYXkocikmJihyPXkubWFwKHIsZnVuY3Rpb24oZSl7cmV0dXJuIG51bGw9PWU/XCJcIjplK1wiXCJ9KSksKHQ9eS52YWxIb29rc1t0aGlzLnR5cGVdfHx5LnZhbEhvb2tzW3RoaXMubm9kZU5hbWUudG9Mb3dlckNhc2UoKV0pJiZcInNldFwiaW4gdCYmdm9pZCAwIT09dC5zZXQodGhpcyxyLFwidmFsdWVcIil8fCh0aGlzLnZhbHVlPXIpKX0pO2lmKHIpcmV0dXJuKHQ9eS52YWxIb29rc1tyLnR5cGVdfHx5LnZhbEhvb2tzW3Iubm9kZU5hbWUudG9Mb3dlckNhc2UoKV0pJiZcImdldFwiaW4gdCYmdm9pZCAwIT09KG49dC5nZXQocixcInZhbHVlXCIpKT9uOlwic3RyaW5nXCI9PXR5cGVvZihuPXIudmFsdWUpP24ucmVwbGFjZShtdCxcIlwiKTpudWxsPT1uP1wiXCI6bn19fSkseS5leHRlbmQoe3ZhbEhvb2tzOntvcHRpb246e2dldDpmdW5jdGlvbihlKXt2YXIgdD15LmZpbmQuYXR0cihlLFwidmFsdWVcIik7cmV0dXJuIG51bGwhPXQ/dDpndCh5LnRleHQoZSkpfX0sc2VsZWN0OntnZXQ6ZnVuY3Rpb24oZSl7dmFyIHQsbixpLHI9ZS5vcHRpb25zLG89ZS5zZWxlY3RlZEluZGV4LHM9XCJzZWxlY3Qtb25lXCI9PT1lLnR5cGUsYT1zP251bGw6W10sdT1zP28rMTpyLmxlbmd0aDtmb3IoaT1vPDA/dTpzP286MDtpPHU7aSsrKWlmKCgobj1yW2ldKS5zZWxlY3RlZHx8aT09PW8pJiYhbi5kaXNhYmxlZCYmKCFuLnBhcmVudE5vZGUuZGlzYWJsZWR8fCFEKG4ucGFyZW50Tm9kZSxcIm9wdGdyb3VwXCIpKSl7aWYodD15KG4pLnZhbCgpLHMpcmV0dXJuIHQ7YS5wdXNoKHQpfXJldHVybiBhfSxzZXQ6ZnVuY3Rpb24oZSx0KXt2YXIgbixpLHI9ZS5vcHRpb25zLG89eS5tYWtlQXJyYXkodCkscz1yLmxlbmd0aDt3aGlsZShzLS0pKChpPXJbc10pLnNlbGVjdGVkPXkuaW5BcnJheSh5LnZhbEhvb2tzLm9wdGlvbi5nZXQoaSksbyk+LTEpJiYobj0hMCk7cmV0dXJuIG58fChlLnNlbGVjdGVkSW5kZXg9LTEpLG99fX19KSx5LmVhY2goW1wicmFkaW9cIixcImNoZWNrYm94XCJdLGZ1bmN0aW9uKCl7eS52YWxIb29rc1t0aGlzXT17c2V0OmZ1bmN0aW9uKGUsdCl7aWYoQXJyYXkuaXNBcnJheSh0KSlyZXR1cm4gZS5jaGVja2VkPXkuaW5BcnJheSh5KGUpLnZhbCgpLHQpPi0xfX0saC5jaGVja09ufHwoeS52YWxIb29rc1t0aGlzXS5nZXQ9ZnVuY3Rpb24oZSl7cmV0dXJuIG51bGw9PT1lLmdldEF0dHJpYnV0ZShcInZhbHVlXCIpP1wib25cIjplLnZhbHVlfSl9KTt2YXIgeXQ9L14oPzpmb2N1c2luZm9jdXN8Zm9jdXNvdXRibHVyKSQvLHh0PWZ1bmN0aW9uKGUpe2Uuc3RvcFByb3BhZ2F0aW9uKCl9O3kuZXh0ZW5kKHkuZXZlbnQse3RyaWdnZXI6ZnVuY3Rpb24odCxuLHIsbyl7dmFyIHMsYSx1LGwsYyxwLGQsaCx2PVtyfHxpXSxtPWYuY2FsbCh0LFwidHlwZVwiKT90LnR5cGU6dCx4PWYuY2FsbCh0LFwibmFtZXNwYWNlXCIpP3QubmFtZXNwYWNlLnNwbGl0KFwiLlwiKTpbXTtpZihhPWg9dT1yPXJ8fGksMyE9PXIubm9kZVR5cGUmJjghPT1yLm5vZGVUeXBlJiYheXQudGVzdChtK3kuZXZlbnQudHJpZ2dlcmVkKSYmKG0uaW5kZXhPZihcIi5cIik+LTEmJihtPSh4PW0uc3BsaXQoXCIuXCIpKS5zaGlmdCgpLHguc29ydCgpKSxjPW0uaW5kZXhPZihcIjpcIik8MCYmXCJvblwiK20sdD10W3kuZXhwYW5kb10/dDpuZXcgeS5FdmVudChtLFwib2JqZWN0XCI9PXR5cGVvZiB0JiZ0KSx0LmlzVHJpZ2dlcj1vPzI6Myx0Lm5hbWVzcGFjZT14LmpvaW4oXCIuXCIpLHQucm5hbWVzcGFjZT10Lm5hbWVzcGFjZT9uZXcgUmVnRXhwKFwiKF58XFxcXC4pXCIreC5qb2luKFwiXFxcXC4oPzouKlxcXFwufClcIikrXCIoXFxcXC58JClcIik6bnVsbCx0LnJlc3VsdD12b2lkIDAsdC50YXJnZXR8fCh0LnRhcmdldD1yKSxuPW51bGw9PW4/W3RdOnkubWFrZUFycmF5KG4sW3RdKSxkPXkuZXZlbnQuc3BlY2lhbFttXXx8e30sb3x8IWQudHJpZ2dlcnx8ITEhPT1kLnRyaWdnZXIuYXBwbHkocixuKSkpe2lmKCFvJiYhZC5ub0J1YmJsZSYmIWcocikpe2ZvcihsPWQuZGVsZWdhdGVUeXBlfHxtLHl0LnRlc3QobCttKXx8KGE9YS5wYXJlbnROb2RlKTthO2E9YS5wYXJlbnROb2RlKXYucHVzaChhKSx1PWE7dT09PShyLm93bmVyRG9jdW1lbnR8fGkpJiZ2LnB1c2godS5kZWZhdWx0Vmlld3x8dS5wYXJlbnRXaW5kb3d8fGUpfXM9MDt3aGlsZSgoYT12W3MrK10pJiYhdC5pc1Byb3BhZ2F0aW9uU3RvcHBlZCgpKWg9YSx0LnR5cGU9cz4xP2w6ZC5iaW5kVHlwZXx8bSwocD0oWS5nZXQoYSxcImV2ZW50c1wiKXx8e30pW3QudHlwZV0mJlkuZ2V0KGEsXCJoYW5kbGVcIikpJiZwLmFwcGx5KGEsbiksKHA9YyYmYVtjXSkmJnAuYXBwbHkmJlgoYSkmJih0LnJlc3VsdD1wLmFwcGx5KGEsbiksITE9PT10LnJlc3VsdCYmdC5wcmV2ZW50RGVmYXVsdCgpKTtyZXR1cm4gdC50eXBlPW0sb3x8dC5pc0RlZmF1bHRQcmV2ZW50ZWQoKXx8ZC5fZGVmYXVsdCYmITEhPT1kLl9kZWZhdWx0LmFwcGx5KHYucG9wKCksbil8fCFYKHIpfHxjJiZ5LmlzRnVuY3Rpb24oclttXSkmJiFnKHIpJiYoKHU9cltjXSkmJihyW2NdPW51bGwpLHkuZXZlbnQudHJpZ2dlcmVkPW0sdC5pc1Byb3BhZ2F0aW9uU3RvcHBlZCgpJiZoLmFkZEV2ZW50TGlzdGVuZXIobSx4dCksclttXSgpLHQuaXNQcm9wYWdhdGlvblN0b3BwZWQoKSYmaC5yZW1vdmVFdmVudExpc3RlbmVyKG0seHQpLHkuZXZlbnQudHJpZ2dlcmVkPXZvaWQgMCx1JiYocltjXT11KSksdC5yZXN1bHR9fSxzaW11bGF0ZTpmdW5jdGlvbihlLHQsbil7dmFyIGk9eS5leHRlbmQobmV3IHkuRXZlbnQsbix7dHlwZTplLGlzU2ltdWxhdGVkOiEwfSk7eS5ldmVudC50cmlnZ2VyKGksbnVsbCx0KX19KSx5LmZuLmV4dGVuZCh7dHJpZ2dlcjpmdW5jdGlvbihlLHQpe3JldHVybiB0aGlzLmVhY2goZnVuY3Rpb24oKXt5LmV2ZW50LnRyaWdnZXIoZSx0LHRoaXMpfSl9LHRyaWdnZXJIYW5kbGVyOmZ1bmN0aW9uKGUsdCl7dmFyIG49dGhpc1swXTtpZihuKXJldHVybiB5LmV2ZW50LnRyaWdnZXIoZSx0LG4sITApfX0pLHkuZWFjaChcImJsdXIgZm9jdXMgZm9jdXNpbiBmb2N1c291dCByZXNpemUgc2Nyb2xsIGNsaWNrIGRibGNsaWNrIG1vdXNlZG93biBtb3VzZXVwIG1vdXNlbW92ZSBtb3VzZW92ZXIgbW91c2VvdXQgbW91c2VlbnRlciBtb3VzZWxlYXZlIGNoYW5nZSBzZWxlY3Qgc3VibWl0IGtleWRvd24ga2V5cHJlc3Mga2V5dXAgY29udGV4dG1lbnVcIi5zcGxpdChcIiBcIiksZnVuY3Rpb24oZSx0KXt5LmZuW3RdPWZ1bmN0aW9uKGUsbil7cmV0dXJuIGFyZ3VtZW50cy5sZW5ndGg+MD90aGlzLm9uKHQsbnVsbCxlLG4pOnRoaXMudHJpZ2dlcih0KX19KSx5LmZuLmV4dGVuZCh7aG92ZXI6ZnVuY3Rpb24oZSx0KXtyZXR1cm4gdGhpcy5tb3VzZWVudGVyKGUpLm1vdXNlbGVhdmUodHx8ZSl9fSksaC5mb2N1c2luPVwib25mb2N1c2luXCJpbiBlLGguZm9jdXNpbnx8eS5lYWNoKHtmb2N1czpcImZvY3VzaW5cIixibHVyOlwiZm9jdXNvdXRcIn0sZnVuY3Rpb24oZSx0KXt2YXIgbj1mdW5jdGlvbihlKXt5LmV2ZW50LnNpbXVsYXRlKHQsZS50YXJnZXQseS5ldmVudC5maXgoZSkpfTt5LmV2ZW50LnNwZWNpYWxbdF09e3NldHVwOmZ1bmN0aW9uKCl7dmFyIGk9dGhpcy5vd25lckRvY3VtZW50fHx0aGlzLHI9WS5hY2Nlc3MoaSx0KTtyfHxpLmFkZEV2ZW50TGlzdGVuZXIoZSxuLCEwKSxZLmFjY2VzcyhpLHQsKHJ8fDApKzEpfSx0ZWFyZG93bjpmdW5jdGlvbigpe3ZhciBpPXRoaXMub3duZXJEb2N1bWVudHx8dGhpcyxyPVkuYWNjZXNzKGksdCktMTtyP1kuYWNjZXNzKGksdCxyKTooaS5yZW1vdmVFdmVudExpc3RlbmVyKGUsbiwhMCksWS5yZW1vdmUoaSx0KSl9fX0pO3ZhciBidD0vXFxbXFxdJC8sd3Q9L1xccj9cXG4vZyxDdD0vXig/OnN1Ym1pdHxidXR0b258aW1hZ2V8cmVzZXR8ZmlsZSkkL2ksVHQ9L14oPzppbnB1dHxzZWxlY3R8dGV4dGFyZWF8a2V5Z2VuKS9pO2Z1bmN0aW9uIGt0KGUsdCxuLGkpe3ZhciByO2lmKEFycmF5LmlzQXJyYXkodCkpeS5lYWNoKHQsZnVuY3Rpb24odCxyKXtufHxidC50ZXN0KGUpP2koZSxyKTprdChlK1wiW1wiKyhcIm9iamVjdFwiPT10eXBlb2YgciYmbnVsbCE9cj90OlwiXCIpK1wiXVwiLHIsbixpKX0pO2Vsc2UgaWYobnx8XCJvYmplY3RcIiE9PXkudHlwZSh0KSlpKGUsdCk7ZWxzZSBmb3IociBpbiB0KWt0KGUrXCJbXCIrcitcIl1cIix0W3JdLG4saSl9eS5wYXJhbT1mdW5jdGlvbihlLHQpe3ZhciBuLGk9W10scj1mdW5jdGlvbihlLHQpe3ZhciBuPXkuaXNGdW5jdGlvbih0KT90KCk6dDtpW2kubGVuZ3RoXT1lbmNvZGVVUklDb21wb25lbnQoZSkrXCI9XCIrZW5jb2RlVVJJQ29tcG9uZW50KG51bGw9PW4/XCJcIjpuKX07aWYoQXJyYXkuaXNBcnJheShlKXx8ZS5qcXVlcnkmJiF5LmlzUGxhaW5PYmplY3QoZSkpeS5lYWNoKGUsZnVuY3Rpb24oKXtyKHRoaXMubmFtZSx0aGlzLnZhbHVlKX0pO2Vsc2UgZm9yKG4gaW4gZSlrdChuLGVbbl0sdCxyKTtyZXR1cm4gaS5qb2luKFwiJlwiKX0seS5mbi5leHRlbmQoe3NlcmlhbGl6ZTpmdW5jdGlvbigpe3JldHVybiB5LnBhcmFtKHRoaXMuc2VyaWFsaXplQXJyYXkoKSl9LHNlcmlhbGl6ZUFycmF5OmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uKCl7dmFyIGU9eS5wcm9wKHRoaXMsXCJlbGVtZW50c1wiKTtyZXR1cm4gZT95Lm1ha2VBcnJheShlKTp0aGlzfSkuZmlsdGVyKGZ1bmN0aW9uKCl7dmFyIGU9dGhpcy50eXBlO3JldHVybiB0aGlzLm5hbWUmJiF5KHRoaXMpLmlzKFwiOmRpc2FibGVkXCIpJiZUdC50ZXN0KHRoaXMubm9kZU5hbWUpJiYhQ3QudGVzdChlKSYmKHRoaXMuY2hlY2tlZHx8IWxlLnRlc3QoZSkpfSkubWFwKGZ1bmN0aW9uKGUsdCl7dmFyIG49eSh0aGlzKS52YWwoKTtyZXR1cm4gbnVsbD09bj9udWxsOkFycmF5LmlzQXJyYXkobik/eS5tYXAobixmdW5jdGlvbihlKXtyZXR1cm57bmFtZTp0Lm5hbWUsdmFsdWU6ZS5yZXBsYWNlKHd0LFwiXFxyXFxuXCIpfX0pOntuYW1lOnQubmFtZSx2YWx1ZTpuLnJlcGxhY2Uod3QsXCJcXHJcXG5cIil9fSkuZ2V0KCl9fSkseS5mbi5leHRlbmQoe3dyYXBBbGw6ZnVuY3Rpb24oZSl7dmFyIHQ7cmV0dXJuIHRoaXNbMF0mJih5LmlzRnVuY3Rpb24oZSkmJihlPWUuY2FsbCh0aGlzWzBdKSksdD15KGUsdGhpc1swXS5vd25lckRvY3VtZW50KS5lcSgwKS5jbG9uZSghMCksdGhpc1swXS5wYXJlbnROb2RlJiZ0Lmluc2VydEJlZm9yZSh0aGlzWzBdKSx0Lm1hcChmdW5jdGlvbigpe3ZhciBlPXRoaXM7d2hpbGUoZS5maXJzdEVsZW1lbnRDaGlsZCllPWUuZmlyc3RFbGVtZW50Q2hpbGQ7cmV0dXJuIGV9KS5hcHBlbmQodGhpcykpLHRoaXN9LHdyYXBJbm5lcjpmdW5jdGlvbihlKXtyZXR1cm4geS5pc0Z1bmN0aW9uKGUpP3RoaXMuZWFjaChmdW5jdGlvbih0KXt5KHRoaXMpLndyYXBJbm5lcihlLmNhbGwodGhpcyx0KSl9KTp0aGlzLmVhY2goZnVuY3Rpb24oKXt2YXIgdD15KHRoaXMpLG49dC5jb250ZW50cygpO24ubGVuZ3RoP24ud3JhcEFsbChlKTp0LmFwcGVuZChlKX0pfSx3cmFwOmZ1bmN0aW9uKGUpe3ZhciB0PXkuaXNGdW5jdGlvbihlKTtyZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uKG4pe3kodGhpcykud3JhcEFsbCh0P2UuY2FsbCh0aGlzLG4pOmUpfSl9LHVud3JhcDpmdW5jdGlvbihlKXtyZXR1cm4gdGhpcy5wYXJlbnQoZSkubm90KFwiYm9keVwiKS5lYWNoKGZ1bmN0aW9uKCl7eSh0aGlzKS5yZXBsYWNlV2l0aCh0aGlzLmNoaWxkTm9kZXMpfSksdGhpc319KSx5LmV4cHIucHNldWRvcy5oaWRkZW49ZnVuY3Rpb24oZSl7cmV0dXJuIXkuZXhwci5wc2V1ZG9zLnZpc2libGUoZSl9LHkuZXhwci5wc2V1ZG9zLnZpc2libGU9ZnVuY3Rpb24oZSl7cmV0dXJuISEoZS5vZmZzZXRXaWR0aHx8ZS5vZmZzZXRIZWlnaHR8fGUuZ2V0Q2xpZW50UmVjdHMoKS5sZW5ndGgpfSxoLmNyZWF0ZUhUTUxEb2N1bWVudD1mdW5jdGlvbigpe3ZhciBlPWkuaW1wbGVtZW50YXRpb24uY3JlYXRlSFRNTERvY3VtZW50KFwiXCIpLmJvZHk7cmV0dXJuIGUuaW5uZXJIVE1MPVwiPGZvcm0+PC9mb3JtPjxmb3JtPjwvZm9ybT5cIiwyPT09ZS5jaGlsZE5vZGVzLmxlbmd0aH0oKSx5LnBhcnNlSFRNTD1mdW5jdGlvbihlLHQsbil7aWYoXCJzdHJpbmdcIiE9dHlwZW9mIGUpcmV0dXJuW107XCJib29sZWFuXCI9PXR5cGVvZiB0JiYobj10LHQ9ITEpO3ZhciByLG8scztyZXR1cm4gdHx8KGguY3JlYXRlSFRNTERvY3VtZW50Pygocj0odD1pLmltcGxlbWVudGF0aW9uLmNyZWF0ZUhUTUxEb2N1bWVudChcIlwiKSkuY3JlYXRlRWxlbWVudChcImJhc2VcIikpLmhyZWY9aS5sb2NhdGlvbi5ocmVmLHQuaGVhZC5hcHBlbmRDaGlsZChyKSk6dD1pKSxvPVMuZXhlYyhlKSxzPSFuJiZbXSxvP1t0LmNyZWF0ZUVsZW1lbnQob1sxXSldOihvPXZlKFtlXSx0LHMpLHMmJnMubGVuZ3RoJiZ5KHMpLnJlbW92ZSgpLHkubWVyZ2UoW10sby5jaGlsZE5vZGVzKSl9LHkuZXhwci5wc2V1ZG9zLmFuaW1hdGVkPWZ1bmN0aW9uKGUpe3JldHVybiB5LmdyZXAoeS50aW1lcnMsZnVuY3Rpb24odCl7cmV0dXJuIGU9PT10LmVsZW19KS5sZW5ndGh9LHkub2Zmc2V0PXtzZXRPZmZzZXQ6ZnVuY3Rpb24oZSx0LG4pe3ZhciBpLHIsbyxzLGEsdSxsLGM9eS5jc3MoZSxcInBvc2l0aW9uXCIpLGY9eShlKSxwPXt9O1wic3RhdGljXCI9PT1jJiYoZS5zdHlsZS5wb3NpdGlvbj1cInJlbGF0aXZlXCIpLGE9Zi5vZmZzZXQoKSxvPXkuY3NzKGUsXCJ0b3BcIiksdT15LmNzcyhlLFwibGVmdFwiKSwobD0oXCJhYnNvbHV0ZVwiPT09Y3x8XCJmaXhlZFwiPT09YykmJihvK3UpLmluZGV4T2YoXCJhdXRvXCIpPi0xKT8ocz0oaT1mLnBvc2l0aW9uKCkpLnRvcCxyPWkubGVmdCk6KHM9cGFyc2VGbG9hdChvKXx8MCxyPXBhcnNlRmxvYXQodSl8fDApLHkuaXNGdW5jdGlvbih0KSYmKHQ9dC5jYWxsKGUsbix5LmV4dGVuZCh7fSxhKSkpLG51bGwhPXQudG9wJiYocC50b3A9dC50b3AtYS50b3ArcyksbnVsbCE9dC5sZWZ0JiYocC5sZWZ0PXQubGVmdC1hLmxlZnQrciksXCJ1c2luZ1wiaW4gdD90LnVzaW5nLmNhbGwoZSxwKTpmLmNzcyhwKX19LHkuZm4uZXh0ZW5kKHtvZmZzZXQ6ZnVuY3Rpb24oZSl7aWYoYXJndW1lbnRzLmxlbmd0aClyZXR1cm4gdm9pZCAwPT09ZT90aGlzOnRoaXMuZWFjaChmdW5jdGlvbih0KXt5Lm9mZnNldC5zZXRPZmZzZXQodGhpcyxlLHQpfSk7dmFyIHQsbixpPXRoaXNbMF07aWYoaSlyZXR1cm4gaS5nZXRDbGllbnRSZWN0cygpLmxlbmd0aD8odD1pLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLG49aS5vd25lckRvY3VtZW50LmRlZmF1bHRWaWV3LHt0b3A6dC50b3Arbi5wYWdlWU9mZnNldCxsZWZ0OnQubGVmdCtuLnBhZ2VYT2Zmc2V0fSk6e3RvcDowLGxlZnQ6MH19LHBvc2l0aW9uOmZ1bmN0aW9uKCl7aWYodGhpc1swXSl7dmFyIGUsdCxuLGk9dGhpc1swXSxyPXt0b3A6MCxsZWZ0OjB9O2lmKFwiZml4ZWRcIj09PXkuY3NzKGksXCJwb3NpdGlvblwiKSl0PWkuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7ZWxzZXt0PXRoaXMub2Zmc2V0KCksbj1pLm93bmVyRG9jdW1lbnQsZT1pLm9mZnNldFBhcmVudHx8bi5kb2N1bWVudEVsZW1lbnQ7d2hpbGUoZSYmKGU9PT1uLmJvZHl8fGU9PT1uLmRvY3VtZW50RWxlbWVudCkmJlwic3RhdGljXCI9PT15LmNzcyhlLFwicG9zaXRpb25cIikpZT1lLnBhcmVudE5vZGU7ZSYmZSE9PWkmJjE9PT1lLm5vZGVUeXBlJiYoKHI9eShlKS5vZmZzZXQoKSkudG9wKz15LmNzcyhlLFwiYm9yZGVyVG9wV2lkdGhcIiwhMCksci5sZWZ0Kz15LmNzcyhlLFwiYm9yZGVyTGVmdFdpZHRoXCIsITApKX1yZXR1cm57dG9wOnQudG9wLXIudG9wLXkuY3NzKGksXCJtYXJnaW5Ub3BcIiwhMCksbGVmdDp0LmxlZnQtci5sZWZ0LXkuY3NzKGksXCJtYXJnaW5MZWZ0XCIsITApfX19LG9mZnNldFBhcmVudDpmdW5jdGlvbigpe3JldHVybiB0aGlzLm1hcChmdW5jdGlvbigpe3ZhciBlPXRoaXMub2Zmc2V0UGFyZW50O3doaWxlKGUmJlwic3RhdGljXCI9PT15LmNzcyhlLFwicG9zaXRpb25cIikpZT1lLm9mZnNldFBhcmVudDtyZXR1cm4gZXx8bWV9KX19KSx5LmVhY2goe3Njcm9sbExlZnQ6XCJwYWdlWE9mZnNldFwiLHNjcm9sbFRvcDpcInBhZ2VZT2Zmc2V0XCJ9LGZ1bmN0aW9uKGUsdCl7dmFyIG49XCJwYWdlWU9mZnNldFwiPT09dDt5LmZuW2VdPWZ1bmN0aW9uKGkpe3JldHVybiBVKHRoaXMsZnVuY3Rpb24oZSxpLHIpe3ZhciBvO2lmKGcoZSk/bz1lOjk9PT1lLm5vZGVUeXBlJiYobz1lLmRlZmF1bHRWaWV3KSx2b2lkIDA9PT1yKXJldHVybiBvP29bdF06ZVtpXTtvP28uc2Nyb2xsVG8obj9vLnBhZ2VYT2Zmc2V0OnIsbj9yOm8ucGFnZVlPZmZzZXQpOmVbaV09cn0sZSxpLGFyZ3VtZW50cy5sZW5ndGgpfX0pLHkuZWFjaChbXCJ0b3BcIixcImxlZnRcIl0sZnVuY3Rpb24oZSx0KXt5LmNzc0hvb2tzW3RdPUJlKGgucGl4ZWxQb3NpdGlvbixmdW5jdGlvbihlLG4pe2lmKG4pcmV0dXJuIG49V2UoZSx0KSxSZS50ZXN0KG4pP3koZSkucG9zaXRpb24oKVt0XStcInB4XCI6bn0pfSkseS5lYWNoKHtIZWlnaHQ6XCJoZWlnaHRcIixXaWR0aDpcIndpZHRoXCJ9LGZ1bmN0aW9uKGUsdCl7eS5lYWNoKHtwYWRkaW5nOlwiaW5uZXJcIitlLGNvbnRlbnQ6dCxcIlwiOlwib3V0ZXJcIitlfSxmdW5jdGlvbihuLGkpe3kuZm5baV09ZnVuY3Rpb24ocixvKXt2YXIgcz1hcmd1bWVudHMubGVuZ3RoJiYobnx8XCJib29sZWFuXCIhPXR5cGVvZiByKSxhPW58fCghMD09PXJ8fCEwPT09bz9cIm1hcmdpblwiOlwiYm9yZGVyXCIpO3JldHVybiBVKHRoaXMsZnVuY3Rpb24odCxuLHIpe3ZhciBvO3JldHVybiBnKHQpPzA9PT1pLmluZGV4T2YoXCJvdXRlclwiKT90W1wiaW5uZXJcIitlXTp0LmRvY3VtZW50LmRvY3VtZW50RWxlbWVudFtcImNsaWVudFwiK2VdOjk9PT10Lm5vZGVUeXBlPyhvPXQuZG9jdW1lbnRFbGVtZW50LE1hdGgubWF4KHQuYm9keVtcInNjcm9sbFwiK2VdLG9bXCJzY3JvbGxcIitlXSx0LmJvZHlbXCJvZmZzZXRcIitlXSxvW1wib2Zmc2V0XCIrZV0sb1tcImNsaWVudFwiK2VdKSk6dm9pZCAwPT09cj95LmNzcyh0LG4sYSk6eS5zdHlsZSh0LG4scixhKX0sdCxzP3I6dm9pZCAwLHMpfX0pfSksXCJmdW5jdGlvblwiPT10eXBlb2YgZGVmaW5lJiZkZWZpbmUuYW1kJiZkZWZpbmUoXCJqcXVlcnlcIixbXSxmdW5jdGlvbigpe3JldHVybiB5fSk7dmFyIEV0PWUualF1ZXJ5LE50PWUuJDtyZXR1cm4geS5ub0NvbmZsaWN0PWZ1bmN0aW9uKHQpe3JldHVybiBlLiQ9PT15JiYoZS4kPU50KSx0JiZlLmpRdWVyeT09PXkmJihlLmpRdWVyeT1FdCkseX0sdHx8KGUualF1ZXJ5PWUuJD15KSx5fSk7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1qcXVlcnkubWluLm1hcCIsIi8vIENoZWNrIGZvciBqUXVlcnkuXG5pZiAodHlwZW9mIGpRdWVyeSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgLy8gQ2hlY2sgaWYgcmVxdWlyZSBpcyBhIGRlZmluZWQgZnVuY3Rpb24uXG4gIGlmICh0eXBlb2YgcmVxdWlyZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIGpRdWVyeSA9ICQgPSByZXF1aXJlKCdqcXVlcnknKTtcbiAgICAvLyBFbHNlIHVzZSB0aGUgZG9sbGFyIHNpZ24gYWxpYXMuXG4gIH0gZWxzZSB7XG4gICAgalF1ZXJ5ID0gJDtcbiAgfVxufVxuOyAvKlxuICAqIGpRdWVyeSBFYXNpbmcgdjEuNC4wIC0gaHR0cDovL2dzZ2QuY28udWsvc2FuZGJveC9qcXVlcnkvZWFzaW5nL1xuICAqIE9wZW4gc291cmNlIHVuZGVyIHRoZSBCU0QgTGljZW5zZS5cbiAgKiBDb3B5cmlnaHQgwqkgMjAwOCBHZW9yZ2UgTWNHaW5sZXkgU21pdGhcbiAgKiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICAqIGh0dHBzOi8vcmF3LmdpdGh1Yi5jb20vZ2RzbWl0aC9qcXVlcnktZWFzaW5nL21hc3Rlci9MSUNFTlNFXG4gICovXG5cbihmdW5jdGlvbiAoZmFjdG9yeSkge1xuICBpZiAodHlwZW9mIGRlZmluZSA9PT0gXCJmdW5jdGlvblwiICYmIGRlZmluZS5hbWQpIHtcbiAgICBkZWZpbmUoWydqcXVlcnknXSwgZnVuY3Rpb24gKCQpIHtcbiAgICAgIHJldHVybiBmYWN0b3J5KCQpO1xuICAgIH0pO1xuICB9IGVsc2UgaWYgKHR5cGVvZiBtb2R1bGUgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIG1vZHVsZS5leHBvcnRzID09PSBcIm9iamVjdFwiKSB7XG4gICAgZXhwb3J0cyA9IGZhY3RvcnkocmVxdWlyZSgnanF1ZXJ5JykpO1xuICB9IGVsc2Uge1xuICAgIGZhY3RvcnkoalF1ZXJ5KTtcbiAgfVxufSkoZnVuY3Rpb24gKCQpIHtcblxuICAvLyBQcmVzZXJ2ZSB0aGUgb3JpZ2luYWwgalF1ZXJ5IFwic3dpbmdcIiBlYXNpbmcgYXMgXCJqc3dpbmdcIlxuICAkLmVhc2luZ1snanN3aW5nJ10gPSAkLmVhc2luZ1snc3dpbmcnXTtcblxuICB2YXIgcG93ID0gTWF0aC5wb3csXG4gICAgICBzcXJ0ID0gTWF0aC5zcXJ0LFxuICAgICAgc2luID0gTWF0aC5zaW4sXG4gICAgICBjb3MgPSBNYXRoLmNvcyxcbiAgICAgIFBJID0gTWF0aC5QSSxcbiAgICAgIGMxID0gMS43MDE1OCxcbiAgICAgIGMyID0gYzEgKiAxLjUyNSxcbiAgICAgIGMzID0gYzEgKyAxLFxuICAgICAgYzQgPSAyICogUEkgLyAzLFxuICAgICAgYzUgPSAyICogUEkgLyA0LjU7XG5cbiAgLy8geCBpcyB0aGUgZnJhY3Rpb24gb2YgYW5pbWF0aW9uIHByb2dyZXNzLCBpbiB0aGUgcmFuZ2UgMC4uMVxuICBmdW5jdGlvbiBib3VuY2VPdXQoeCkge1xuICAgIHZhciBuMSA9IDcuNTYyNSxcbiAgICAgICAgZDEgPSAyLjc1O1xuICAgIGlmICh4IDwgMSAvIGQxKSB7XG4gICAgICByZXR1cm4gbjEgKiB4ICogeDtcbiAgICB9IGVsc2UgaWYgKHggPCAyIC8gZDEpIHtcbiAgICAgIHJldHVybiBuMSAqICh4IC09IDEuNSAvIGQxKSAqIHggKyAuNzU7XG4gICAgfSBlbHNlIGlmICh4IDwgMi41IC8gZDEpIHtcbiAgICAgIHJldHVybiBuMSAqICh4IC09IDIuMjUgLyBkMSkgKiB4ICsgLjkzNzU7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBuMSAqICh4IC09IDIuNjI1IC8gZDEpICogeCArIC45ODQzNzU7XG4gICAgfVxuICB9XG5cbiAgJC5leHRlbmQoJC5lYXNpbmcsIHtcbiAgICBkZWY6ICdlYXNlT3V0UXVhZCcsXG4gICAgc3dpbmc6IGZ1bmN0aW9uICh4KSB7XG4gICAgICByZXR1cm4gJC5lYXNpbmdbJC5lYXNpbmcuZGVmXSh4KTtcbiAgICB9LFxuICAgIGVhc2VJblF1YWQ6IGZ1bmN0aW9uICh4KSB7XG4gICAgICByZXR1cm4geCAqIHg7XG4gICAgfSxcbiAgICBlYXNlT3V0UXVhZDogZnVuY3Rpb24gKHgpIHtcbiAgICAgIHJldHVybiAxIC0gKDEgLSB4KSAqICgxIC0geCk7XG4gICAgfSxcbiAgICBlYXNlSW5PdXRRdWFkOiBmdW5jdGlvbiAoeCkge1xuICAgICAgcmV0dXJuIHggPCAwLjUgPyAyICogeCAqIHggOiAxIC0gcG93KC0yICogeCArIDIsIDIpIC8gMjtcbiAgICB9LFxuICAgIGVhc2VJbkN1YmljOiBmdW5jdGlvbiAoeCkge1xuICAgICAgcmV0dXJuIHggKiB4ICogeDtcbiAgICB9LFxuICAgIGVhc2VPdXRDdWJpYzogZnVuY3Rpb24gKHgpIHtcbiAgICAgIHJldHVybiAxIC0gcG93KDEgLSB4LCAzKTtcbiAgICB9LFxuICAgIGVhc2VJbk91dEN1YmljOiBmdW5jdGlvbiAoeCkge1xuICAgICAgcmV0dXJuIHggPCAwLjUgPyA0ICogeCAqIHggKiB4IDogMSAtIHBvdygtMiAqIHggKyAyLCAzKSAvIDI7XG4gICAgfSxcbiAgICBlYXNlSW5RdWFydDogZnVuY3Rpb24gKHgpIHtcbiAgICAgIHJldHVybiB4ICogeCAqIHggKiB4O1xuICAgIH0sXG4gICAgZWFzZU91dFF1YXJ0OiBmdW5jdGlvbiAoeCkge1xuICAgICAgcmV0dXJuIDEgLSBwb3coMSAtIHgsIDQpO1xuICAgIH0sXG4gICAgZWFzZUluT3V0UXVhcnQ6IGZ1bmN0aW9uICh4KSB7XG4gICAgICByZXR1cm4geCA8IDAuNSA/IDggKiB4ICogeCAqIHggKiB4IDogMSAtIHBvdygtMiAqIHggKyAyLCA0KSAvIDI7XG4gICAgfSxcbiAgICBlYXNlSW5RdWludDogZnVuY3Rpb24gKHgpIHtcbiAgICAgIHJldHVybiB4ICogeCAqIHggKiB4ICogeDtcbiAgICB9LFxuICAgIGVhc2VPdXRRdWludDogZnVuY3Rpb24gKHgpIHtcbiAgICAgIHJldHVybiAxIC0gcG93KDEgLSB4LCA1KTtcbiAgICB9LFxuICAgIGVhc2VJbk91dFF1aW50OiBmdW5jdGlvbiAoeCkge1xuICAgICAgcmV0dXJuIHggPCAwLjUgPyAxNiAqIHggKiB4ICogeCAqIHggKiB4IDogMSAtIHBvdygtMiAqIHggKyAyLCA1KSAvIDI7XG4gICAgfSxcbiAgICBlYXNlSW5TaW5lOiBmdW5jdGlvbiAoeCkge1xuICAgICAgcmV0dXJuIDEgLSBjb3MoeCAqIFBJIC8gMik7XG4gICAgfSxcbiAgICBlYXNlT3V0U2luZTogZnVuY3Rpb24gKHgpIHtcbiAgICAgIHJldHVybiBzaW4oeCAqIFBJIC8gMik7XG4gICAgfSxcbiAgICBlYXNlSW5PdXRTaW5lOiBmdW5jdGlvbiAoeCkge1xuICAgICAgcmV0dXJuIC0oY29zKFBJICogeCkgLSAxKSAvIDI7XG4gICAgfSxcbiAgICBlYXNlSW5FeHBvOiBmdW5jdGlvbiAoeCkge1xuICAgICAgcmV0dXJuIHggPT09IDAgPyAwIDogcG93KDIsIDEwICogeCAtIDEwKTtcbiAgICB9LFxuICAgIGVhc2VPdXRFeHBvOiBmdW5jdGlvbiAoeCkge1xuICAgICAgcmV0dXJuIHggPT09IDEgPyAxIDogMSAtIHBvdygyLCAtMTAgKiB4KTtcbiAgICB9LFxuICAgIGVhc2VJbk91dEV4cG86IGZ1bmN0aW9uICh4KSB7XG4gICAgICByZXR1cm4geCA9PT0gMCA/IDAgOiB4ID09PSAxID8gMSA6IHggPCAwLjUgPyBwb3coMiwgMjAgKiB4IC0gMTApIC8gMiA6ICgyIC0gcG93KDIsIC0yMCAqIHggKyAxMCkpIC8gMjtcbiAgICB9LFxuICAgIGVhc2VJbkNpcmM6IGZ1bmN0aW9uICh4KSB7XG4gICAgICByZXR1cm4gMSAtIHNxcnQoMSAtIHBvdyh4LCAyKSk7XG4gICAgfSxcbiAgICBlYXNlT3V0Q2lyYzogZnVuY3Rpb24gKHgpIHtcbiAgICAgIHJldHVybiBzcXJ0KDEgLSBwb3coeCAtIDEsIDIpKTtcbiAgICB9LFxuICAgIGVhc2VJbk91dENpcmM6IGZ1bmN0aW9uICh4KSB7XG4gICAgICByZXR1cm4geCA8IDAuNSA/ICgxIC0gc3FydCgxIC0gcG93KDIgKiB4LCAyKSkpIC8gMiA6IChzcXJ0KDEgLSBwb3coLTIgKiB4ICsgMiwgMikpICsgMSkgLyAyO1xuICAgIH0sXG4gICAgZWFzZUluRWxhc3RpYzogZnVuY3Rpb24gKHgpIHtcbiAgICAgIHJldHVybiB4ID09PSAwID8gMCA6IHggPT09IDEgPyAxIDogLXBvdygyLCAxMCAqIHggLSAxMCkgKiBzaW4oKHggKiAxMCAtIDEwLjc1KSAqIGM0KTtcbiAgICB9LFxuICAgIGVhc2VPdXRFbGFzdGljOiBmdW5jdGlvbiAoeCkge1xuICAgICAgcmV0dXJuIHggPT09IDAgPyAwIDogeCA9PT0gMSA/IDEgOiBwb3coMiwgLTEwICogeCkgKiBzaW4oKHggKiAxMCAtIDAuNzUpICogYzQpICsgMTtcbiAgICB9LFxuICAgIGVhc2VJbk91dEVsYXN0aWM6IGZ1bmN0aW9uICh4KSB7XG4gICAgICByZXR1cm4geCA9PT0gMCA/IDAgOiB4ID09PSAxID8gMSA6IHggPCAwLjUgPyAtKHBvdygyLCAyMCAqIHggLSAxMCkgKiBzaW4oKDIwICogeCAtIDExLjEyNSkgKiBjNSkpIC8gMiA6IHBvdygyLCAtMjAgKiB4ICsgMTApICogc2luKCgyMCAqIHggLSAxMS4xMjUpICogYzUpIC8gMiArIDE7XG4gICAgfSxcbiAgICBlYXNlSW5CYWNrOiBmdW5jdGlvbiAoeCkge1xuICAgICAgcmV0dXJuIGMzICogeCAqIHggKiB4IC0gYzEgKiB4ICogeDtcbiAgICB9LFxuICAgIGVhc2VPdXRCYWNrOiBmdW5jdGlvbiAoeCkge1xuICAgICAgcmV0dXJuIDEgKyBjMyAqIHBvdyh4IC0gMSwgMykgKyBjMSAqIHBvdyh4IC0gMSwgMik7XG4gICAgfSxcbiAgICBlYXNlSW5PdXRCYWNrOiBmdW5jdGlvbiAoeCkge1xuICAgICAgcmV0dXJuIHggPCAwLjUgPyBwb3coMiAqIHgsIDIpICogKChjMiArIDEpICogMiAqIHggLSBjMikgLyAyIDogKHBvdygyICogeCAtIDIsIDIpICogKChjMiArIDEpICogKHggKiAyIC0gMikgKyBjMikgKyAyKSAvIDI7XG4gICAgfSxcbiAgICBlYXNlSW5Cb3VuY2U6IGZ1bmN0aW9uICh4KSB7XG4gICAgICByZXR1cm4gMSAtIGJvdW5jZU91dCgxIC0geCk7XG4gICAgfSxcbiAgICBlYXNlT3V0Qm91bmNlOiBib3VuY2VPdXQsXG4gICAgZWFzZUluT3V0Qm91bmNlOiBmdW5jdGlvbiAoeCkge1xuICAgICAgcmV0dXJuIHggPCAwLjUgPyAoMSAtIGJvdW5jZU91dCgxIC0gMiAqIHgpKSAvIDIgOiAoMSArIGJvdW5jZU91dCgyICogeCAtIDEpKSAvIDI7XG4gICAgfVxuICB9KTtcbn0pOzsgLy8gQ3VzdG9tIEVhc2luZ1xualF1ZXJ5LmV4dGVuZChqUXVlcnkuZWFzaW5nLCB7XG4gIGVhc2VJbk91dE1hdGVyaWFsOiBmdW5jdGlvbiAoeCwgdCwgYiwgYywgZCkge1xuICAgIGlmICgodCAvPSBkIC8gMikgPCAxKSByZXR1cm4gYyAvIDIgKiB0ICogdCArIGI7XG4gICAgcmV0dXJuIGMgLyA0ICogKCh0IC09IDIpICogdCAqIHQgKyAyKSArIGI7XG4gIH1cbn0pOzsgLyohIFZlbG9jaXR5SlMub3JnICgxLjIuMykuIChDKSAyMDE0IEp1bGlhbiBTaGFwaXJvLiBNSVQgQGxpY2Vuc2U6IGVuLndpa2lwZWRpYS5vcmcvd2lraS9NSVRfTGljZW5zZSAqL1xuLyohIFZlbG9jaXR5SlMub3JnIGpRdWVyeSBTaGltICgxLjAuMSkuIChDKSAyMDE0IFRoZSBqUXVlcnkgRm91bmRhdGlvbi4gTUlUIEBsaWNlbnNlOiBlbi53aWtpcGVkaWEub3JnL3dpa2kvTUlUX0xpY2Vuc2UuICovXG4vKiEgTm90ZSB0aGF0IHRoaXMgaGFzIGJlZW4gbW9kaWZpZWQgYnkgTWF0ZXJpYWxpemUgdG8gY29uZmlybSB0aGF0IFZlbG9jaXR5IGlzIG5vdCBhbHJlYWR5IGJlaW5nIGltcG9ydGVkLiAqL1xualF1ZXJ5LlZlbG9jaXR5ID8gY29uc29sZS5sb2coXCJWZWxvY2l0eSBpcyBhbHJlYWR5IGxvYWRlZC4gWW91IG1heSBiZSBuZWVkbGVzc2x5IGltcG9ydGluZyBWZWxvY2l0eSBhZ2Fpbjsgbm90ZSB0aGF0IE1hdGVyaWFsaXplIGluY2x1ZGVzIFZlbG9jaXR5LlwiKSA6ICghZnVuY3Rpb24gKGUpIHtcbiAgZnVuY3Rpb24gdChlKSB7XG4gICAgdmFyIHQgPSBlLmxlbmd0aCxcbiAgICAgICAgYSA9IHIudHlwZShlKTtyZXR1cm4gXCJmdW5jdGlvblwiID09PSBhIHx8IHIuaXNXaW5kb3coZSkgPyAhMSA6IDEgPT09IGUubm9kZVR5cGUgJiYgdCA/ICEwIDogXCJhcnJheVwiID09PSBhIHx8IDAgPT09IHQgfHwgXCJudW1iZXJcIiA9PSB0eXBlb2YgdCAmJiB0ID4gMCAmJiB0IC0gMSBpbiBlO1xuICB9aWYgKCFlLmpRdWVyeSkge1xuICAgIHZhciByID0gZnVuY3Rpb24gKGUsIHQpIHtcbiAgICAgIHJldHVybiBuZXcgci5mbi5pbml0KGUsIHQpO1xuICAgIH07ci5pc1dpbmRvdyA9IGZ1bmN0aW9uIChlKSB7XG4gICAgICByZXR1cm4gbnVsbCAhPSBlICYmIGUgPT0gZS53aW5kb3c7XG4gICAgfSwgci50eXBlID0gZnVuY3Rpb24gKGUpIHtcbiAgICAgIHJldHVybiBudWxsID09IGUgPyBlICsgXCJcIiA6IFwib2JqZWN0XCIgPT0gdHlwZW9mIGUgfHwgXCJmdW5jdGlvblwiID09IHR5cGVvZiBlID8gbltpLmNhbGwoZSldIHx8IFwib2JqZWN0XCIgOiB0eXBlb2YgZTtcbiAgICB9LCByLmlzQXJyYXkgPSBBcnJheS5pc0FycmF5IHx8IGZ1bmN0aW9uIChlKSB7XG4gICAgICByZXR1cm4gXCJhcnJheVwiID09PSByLnR5cGUoZSk7XG4gICAgfSwgci5pc1BsYWluT2JqZWN0ID0gZnVuY3Rpb24gKGUpIHtcbiAgICAgIHZhciB0O2lmICghZSB8fCBcIm9iamVjdFwiICE9PSByLnR5cGUoZSkgfHwgZS5ub2RlVHlwZSB8fCByLmlzV2luZG93KGUpKSByZXR1cm4gITE7dHJ5IHtcbiAgICAgICAgaWYgKGUuY29uc3RydWN0b3IgJiYgIW8uY2FsbChlLCBcImNvbnN0cnVjdG9yXCIpICYmICFvLmNhbGwoZS5jb25zdHJ1Y3Rvci5wcm90b3R5cGUsIFwiaXNQcm90b3R5cGVPZlwiKSkgcmV0dXJuICExO1xuICAgICAgfSBjYXRjaCAoYSkge1xuICAgICAgICByZXR1cm4gITE7XG4gICAgICB9Zm9yICh0IGluIGUpIHt9cmV0dXJuIHZvaWQgMCA9PT0gdCB8fCBvLmNhbGwoZSwgdCk7XG4gICAgfSwgci5lYWNoID0gZnVuY3Rpb24gKGUsIHIsIGEpIHtcbiAgICAgIHZhciBuLFxuICAgICAgICAgIG8gPSAwLFxuICAgICAgICAgIGkgPSBlLmxlbmd0aCxcbiAgICAgICAgICBzID0gdChlKTtpZiAoYSkge1xuICAgICAgICBpZiAocykgZm9yICg7IGkgPiBvICYmIChuID0gci5hcHBseShlW29dLCBhKSwgbiAhPT0gITEpOyBvKyspIHt9IGVsc2UgZm9yIChvIGluIGUpIHtcbiAgICAgICAgICBpZiAobiA9IHIuYXBwbHkoZVtvXSwgYSksIG4gPT09ICExKSBicmVhaztcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmIChzKSBmb3IgKDsgaSA+IG8gJiYgKG4gPSByLmNhbGwoZVtvXSwgbywgZVtvXSksIG4gIT09ICExKTsgbysrKSB7fSBlbHNlIGZvciAobyBpbiBlKSB7XG4gICAgICAgIGlmIChuID0gci5jYWxsKGVbb10sIG8sIGVbb10pLCBuID09PSAhMSkgYnJlYWs7XG4gICAgICB9cmV0dXJuIGU7XG4gICAgfSwgci5kYXRhID0gZnVuY3Rpb24gKGUsIHQsIG4pIHtcbiAgICAgIGlmICh2b2lkIDAgPT09IG4pIHtcbiAgICAgICAgdmFyIG8gPSBlW3IuZXhwYW5kb10sXG4gICAgICAgICAgICBpID0gbyAmJiBhW29dO2lmICh2b2lkIDAgPT09IHQpIHJldHVybiBpO2lmIChpICYmIHQgaW4gaSkgcmV0dXJuIGlbdF07XG4gICAgICB9IGVsc2UgaWYgKHZvaWQgMCAhPT0gdCkge1xuICAgICAgICB2YXIgbyA9IGVbci5leHBhbmRvXSB8fCAoZVtyLmV4cGFuZG9dID0gKytyLnV1aWQpO3JldHVybiBhW29dID0gYVtvXSB8fCB7fSwgYVtvXVt0XSA9IG4sIG47XG4gICAgICB9XG4gICAgfSwgci5yZW1vdmVEYXRhID0gZnVuY3Rpb24gKGUsIHQpIHtcbiAgICAgIHZhciBuID0gZVtyLmV4cGFuZG9dLFxuICAgICAgICAgIG8gPSBuICYmIGFbbl07byAmJiByLmVhY2godCwgZnVuY3Rpb24gKGUsIHQpIHtcbiAgICAgICAgZGVsZXRlIG9bdF07XG4gICAgICB9KTtcbiAgICB9LCByLmV4dGVuZCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIHZhciBlLFxuICAgICAgICAgIHQsXG4gICAgICAgICAgYSxcbiAgICAgICAgICBuLFxuICAgICAgICAgIG8sXG4gICAgICAgICAgaSxcbiAgICAgICAgICBzID0gYXJndW1lbnRzWzBdIHx8IHt9LFxuICAgICAgICAgIGwgPSAxLFxuICAgICAgICAgIHUgPSBhcmd1bWVudHMubGVuZ3RoLFxuICAgICAgICAgIGMgPSAhMTtmb3IgKFwiYm9vbGVhblwiID09IHR5cGVvZiBzICYmIChjID0gcywgcyA9IGFyZ3VtZW50c1tsXSB8fCB7fSwgbCsrKSwgXCJvYmplY3RcIiAhPSB0eXBlb2YgcyAmJiBcImZ1bmN0aW9uXCIgIT09IHIudHlwZShzKSAmJiAocyA9IHt9KSwgbCA9PT0gdSAmJiAocyA9IHRoaXMsIGwtLSk7IHUgPiBsOyBsKyspIHtcbiAgICAgICAgaWYgKG51bGwgIT0gKG8gPSBhcmd1bWVudHNbbF0pKSBmb3IgKG4gaW4gbykge1xuICAgICAgICAgIGUgPSBzW25dLCBhID0gb1tuXSwgcyAhPT0gYSAmJiAoYyAmJiBhICYmIChyLmlzUGxhaW5PYmplY3QoYSkgfHwgKHQgPSByLmlzQXJyYXkoYSkpKSA/ICh0ID8gKHQgPSAhMSwgaSA9IGUgJiYgci5pc0FycmF5KGUpID8gZSA6IFtdKSA6IGkgPSBlICYmIHIuaXNQbGFpbk9iamVjdChlKSA/IGUgOiB7fSwgc1tuXSA9IHIuZXh0ZW5kKGMsIGksIGEpKSA6IHZvaWQgMCAhPT0gYSAmJiAoc1tuXSA9IGEpKTtcbiAgICAgICAgfVxuICAgICAgfXJldHVybiBzO1xuICAgIH0sIHIucXVldWUgPSBmdW5jdGlvbiAoZSwgYSwgbikge1xuICAgICAgZnVuY3Rpb24gbyhlLCByKSB7XG4gICAgICAgIHZhciBhID0gciB8fCBbXTtyZXR1cm4gbnVsbCAhPSBlICYmICh0KE9iamVjdChlKSkgPyAhZnVuY3Rpb24gKGUsIHQpIHtcbiAgICAgICAgICBmb3IgKHZhciByID0gK3QubGVuZ3RoLCBhID0gMCwgbiA9IGUubGVuZ3RoOyByID4gYTspIHtcbiAgICAgICAgICAgIGVbbisrXSA9IHRbYSsrXTtcbiAgICAgICAgICB9aWYgKHIgIT09IHIpIGZvciAoOyB2b2lkIDAgIT09IHRbYV07KSB7XG4gICAgICAgICAgICBlW24rK10gPSB0W2ErK107XG4gICAgICAgICAgfXJldHVybiBlLmxlbmd0aCA9IG4sIGU7XG4gICAgICAgIH0oYSwgXCJzdHJpbmdcIiA9PSB0eXBlb2YgZSA/IFtlXSA6IGUpIDogW10ucHVzaC5jYWxsKGEsIGUpKSwgYTtcbiAgICAgIH1pZiAoZSkge1xuICAgICAgICBhID0gKGEgfHwgXCJmeFwiKSArIFwicXVldWVcIjt2YXIgaSA9IHIuZGF0YShlLCBhKTtyZXR1cm4gbiA/ICghaSB8fCByLmlzQXJyYXkobikgPyBpID0gci5kYXRhKGUsIGEsIG8obikpIDogaS5wdXNoKG4pLCBpKSA6IGkgfHwgW107XG4gICAgICB9XG4gICAgfSwgci5kZXF1ZXVlID0gZnVuY3Rpb24gKGUsIHQpIHtcbiAgICAgIHIuZWFjaChlLm5vZGVUeXBlID8gW2VdIDogZSwgZnVuY3Rpb24gKGUsIGEpIHtcbiAgICAgICAgdCA9IHQgfHwgXCJmeFwiO3ZhciBuID0gci5xdWV1ZShhLCB0KSxcbiAgICAgICAgICAgIG8gPSBuLnNoaWZ0KCk7XCJpbnByb2dyZXNzXCIgPT09IG8gJiYgKG8gPSBuLnNoaWZ0KCkpLCBvICYmIChcImZ4XCIgPT09IHQgJiYgbi51bnNoaWZ0KFwiaW5wcm9ncmVzc1wiKSwgby5jYWxsKGEsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICByLmRlcXVldWUoYSwgdCk7XG4gICAgICAgIH0pKTtcbiAgICAgIH0pO1xuICAgIH0sIHIuZm4gPSByLnByb3RvdHlwZSA9IHsgaW5pdDogZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgaWYgKGUubm9kZVR5cGUpIHJldHVybiB0aGlzWzBdID0gZSwgdGhpczt0aHJvdyBuZXcgRXJyb3IoXCJOb3QgYSBET00gbm9kZS5cIik7XG4gICAgICB9LCBvZmZzZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIHQgPSB0aGlzWzBdLmdldEJvdW5kaW5nQ2xpZW50UmVjdCA/IHRoaXNbMF0uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkgOiB7IHRvcDogMCwgbGVmdDogMCB9O3JldHVybiB7IHRvcDogdC50b3AgKyAoZS5wYWdlWU9mZnNldCB8fCBkb2N1bWVudC5zY3JvbGxUb3AgfHwgMCkgLSAoZG9jdW1lbnQuY2xpZW50VG9wIHx8IDApLCBsZWZ0OiB0LmxlZnQgKyAoZS5wYWdlWE9mZnNldCB8fCBkb2N1bWVudC5zY3JvbGxMZWZ0IHx8IDApIC0gKGRvY3VtZW50LmNsaWVudExlZnQgfHwgMCkgfTtcbiAgICAgIH0sIHBvc2l0aW9uOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGZ1bmN0aW9uIGUoKSB7XG4gICAgICAgICAgZm9yICh2YXIgZSA9IHRoaXMub2Zmc2V0UGFyZW50IHx8IGRvY3VtZW50OyBlICYmIFwiaHRtbFwiID09PSAhZS5ub2RlVHlwZS50b0xvd2VyQ2FzZSAmJiBcInN0YXRpY1wiID09PSBlLnN0eWxlLnBvc2l0aW9uOykge1xuICAgICAgICAgICAgZSA9IGUub2Zmc2V0UGFyZW50O1xuICAgICAgICAgIH1yZXR1cm4gZSB8fCBkb2N1bWVudDtcbiAgICAgICAgfXZhciB0ID0gdGhpc1swXSxcbiAgICAgICAgICAgIGUgPSBlLmFwcGx5KHQpLFxuICAgICAgICAgICAgYSA9IHRoaXMub2Zmc2V0KCksXG4gICAgICAgICAgICBuID0gL14oPzpib2R5fGh0bWwpJC9pLnRlc3QoZS5ub2RlTmFtZSkgPyB7IHRvcDogMCwgbGVmdDogMCB9IDogcihlKS5vZmZzZXQoKTtyZXR1cm4gYS50b3AgLT0gcGFyc2VGbG9hdCh0LnN0eWxlLm1hcmdpblRvcCkgfHwgMCwgYS5sZWZ0IC09IHBhcnNlRmxvYXQodC5zdHlsZS5tYXJnaW5MZWZ0KSB8fCAwLCBlLnN0eWxlICYmIChuLnRvcCArPSBwYXJzZUZsb2F0KGUuc3R5bGUuYm9yZGVyVG9wV2lkdGgpIHx8IDAsIG4ubGVmdCArPSBwYXJzZUZsb2F0KGUuc3R5bGUuYm9yZGVyTGVmdFdpZHRoKSB8fCAwKSwgeyB0b3A6IGEudG9wIC0gbi50b3AsIGxlZnQ6IGEubGVmdCAtIG4ubGVmdCB9O1xuICAgICAgfSB9O3ZhciBhID0ge307ci5leHBhbmRvID0gXCJ2ZWxvY2l0eVwiICsgbmV3IERhdGUoKS5nZXRUaW1lKCksIHIudXVpZCA9IDA7Zm9yICh2YXIgbiA9IHt9LCBvID0gbi5oYXNPd25Qcm9wZXJ0eSwgaSA9IG4udG9TdHJpbmcsIHMgPSBcIkJvb2xlYW4gTnVtYmVyIFN0cmluZyBGdW5jdGlvbiBBcnJheSBEYXRlIFJlZ0V4cCBPYmplY3QgRXJyb3JcIi5zcGxpdChcIiBcIiksIGwgPSAwOyBsIDwgcy5sZW5ndGg7IGwrKykge1xuICAgICAgbltcIltvYmplY3QgXCIgKyBzW2xdICsgXCJdXCJdID0gc1tsXS50b0xvd2VyQ2FzZSgpO1xuICAgIH1yLmZuLmluaXQucHJvdG90eXBlID0gci5mbiwgZS5WZWxvY2l0eSA9IHsgVXRpbGl0aWVzOiByIH07XG4gIH1cbn0od2luZG93KSwgZnVuY3Rpb24gKGUpIHtcbiAgXCJvYmplY3RcIiA9PSB0eXBlb2YgbW9kdWxlICYmIFwib2JqZWN0XCIgPT0gdHlwZW9mIG1vZHVsZS5leHBvcnRzID8gbW9kdWxlLmV4cG9ydHMgPSBlKCkgOiBcImZ1bmN0aW9uXCIgPT0gdHlwZW9mIGRlZmluZSAmJiBkZWZpbmUuYW1kID8gZGVmaW5lKGUpIDogZSgpO1xufShmdW5jdGlvbiAoKSB7XG4gIHJldHVybiBmdW5jdGlvbiAoZSwgdCwgciwgYSkge1xuICAgIGZ1bmN0aW9uIG4oZSkge1xuICAgICAgZm9yICh2YXIgdCA9IC0xLCByID0gZSA/IGUubGVuZ3RoIDogMCwgYSA9IFtdOyArK3QgPCByOykge1xuICAgICAgICB2YXIgbiA9IGVbdF07biAmJiBhLnB1c2gobik7XG4gICAgICB9cmV0dXJuIGE7XG4gICAgfWZ1bmN0aW9uIG8oZSkge1xuICAgICAgcmV0dXJuIG0uaXNXcmFwcGVkKGUpID8gZSA9IFtdLnNsaWNlLmNhbGwoZSkgOiBtLmlzTm9kZShlKSAmJiAoZSA9IFtlXSksIGU7XG4gICAgfWZ1bmN0aW9uIGkoZSkge1xuICAgICAgdmFyIHQgPSBmLmRhdGEoZSwgXCJ2ZWxvY2l0eVwiKTtyZXR1cm4gbnVsbCA9PT0gdCA/IGEgOiB0O1xuICAgIH1mdW5jdGlvbiBzKGUpIHtcbiAgICAgIHJldHVybiBmdW5jdGlvbiAodCkge1xuICAgICAgICByZXR1cm4gTWF0aC5yb3VuZCh0ICogZSkgKiAoMSAvIGUpO1xuICAgICAgfTtcbiAgICB9ZnVuY3Rpb24gbChlLCByLCBhLCBuKSB7XG4gICAgICBmdW5jdGlvbiBvKGUsIHQpIHtcbiAgICAgICAgcmV0dXJuIDEgLSAzICogdCArIDMgKiBlO1xuICAgICAgfWZ1bmN0aW9uIGkoZSwgdCkge1xuICAgICAgICByZXR1cm4gMyAqIHQgLSA2ICogZTtcbiAgICAgIH1mdW5jdGlvbiBzKGUpIHtcbiAgICAgICAgcmV0dXJuIDMgKiBlO1xuICAgICAgfWZ1bmN0aW9uIGwoZSwgdCwgcikge1xuICAgICAgICByZXR1cm4gKChvKHQsIHIpICogZSArIGkodCwgcikpICogZSArIHModCkpICogZTtcbiAgICAgIH1mdW5jdGlvbiB1KGUsIHQsIHIpIHtcbiAgICAgICAgcmV0dXJuIDMgKiBvKHQsIHIpICogZSAqIGUgKyAyICogaSh0LCByKSAqIGUgKyBzKHQpO1xuICAgICAgfWZ1bmN0aW9uIGModCwgcikge1xuICAgICAgICBmb3IgKHZhciBuID0gMDsgbSA+IG47ICsrbikge1xuICAgICAgICAgIHZhciBvID0gdShyLCBlLCBhKTtpZiAoMCA9PT0gbykgcmV0dXJuIHI7dmFyIGkgPSBsKHIsIGUsIGEpIC0gdDtyIC09IGkgLyBvO1xuICAgICAgICB9cmV0dXJuIHI7XG4gICAgICB9ZnVuY3Rpb24gcCgpIHtcbiAgICAgICAgZm9yICh2YXIgdCA9IDA7IGIgPiB0OyArK3QpIHtcbiAgICAgICAgICB3W3RdID0gbCh0ICogeCwgZSwgYSk7XG4gICAgICAgIH1cbiAgICAgIH1mdW5jdGlvbiBmKHQsIHIsIG4pIHtcbiAgICAgICAgdmFyIG8sXG4gICAgICAgICAgICBpLFxuICAgICAgICAgICAgcyA9IDA7ZG8ge1xuICAgICAgICAgIGkgPSByICsgKG4gLSByKSAvIDIsIG8gPSBsKGksIGUsIGEpIC0gdCwgbyA+IDAgPyBuID0gaSA6IHIgPSBpO1xuICAgICAgICB9IHdoaWxlIChNYXRoLmFicyhvKSA+IGggJiYgKytzIDwgdik7cmV0dXJuIGk7XG4gICAgICB9ZnVuY3Rpb24gZCh0KSB7XG4gICAgICAgIGZvciAodmFyIHIgPSAwLCBuID0gMSwgbyA9IGIgLSAxOyBuICE9IG8gJiYgd1tuXSA8PSB0OyArK24pIHtcbiAgICAgICAgICByICs9IHg7XG4gICAgICAgIH0tLW47dmFyIGkgPSAodCAtIHdbbl0pIC8gKHdbbiArIDFdIC0gd1tuXSksXG4gICAgICAgICAgICBzID0gciArIGkgKiB4LFxuICAgICAgICAgICAgbCA9IHUocywgZSwgYSk7cmV0dXJuIGwgPj0geSA/IGModCwgcykgOiAwID09IGwgPyBzIDogZih0LCByLCByICsgeCk7XG4gICAgICB9ZnVuY3Rpb24gZygpIHtcbiAgICAgICAgViA9ICEwLCAoZSAhPSByIHx8IGEgIT0gbikgJiYgcCgpO1xuICAgICAgfXZhciBtID0gNCxcbiAgICAgICAgICB5ID0gLjAwMSxcbiAgICAgICAgICBoID0gMWUtNyxcbiAgICAgICAgICB2ID0gMTAsXG4gICAgICAgICAgYiA9IDExLFxuICAgICAgICAgIHggPSAxIC8gKGIgLSAxKSxcbiAgICAgICAgICBTID0gXCJGbG9hdDMyQXJyYXlcIiBpbiB0O2lmICg0ICE9PSBhcmd1bWVudHMubGVuZ3RoKSByZXR1cm4gITE7Zm9yICh2YXIgUCA9IDA7IDQgPiBQOyArK1ApIHtcbiAgICAgICAgaWYgKFwibnVtYmVyXCIgIT0gdHlwZW9mIGFyZ3VtZW50c1tQXSB8fCBpc05hTihhcmd1bWVudHNbUF0pIHx8ICFpc0Zpbml0ZShhcmd1bWVudHNbUF0pKSByZXR1cm4gITE7XG4gICAgICB9ZSA9IE1hdGgubWluKGUsIDEpLCBhID0gTWF0aC5taW4oYSwgMSksIGUgPSBNYXRoLm1heChlLCAwKSwgYSA9IE1hdGgubWF4KGEsIDApO3ZhciB3ID0gUyA/IG5ldyBGbG9hdDMyQXJyYXkoYikgOiBuZXcgQXJyYXkoYiksXG4gICAgICAgICAgViA9ICExLFxuICAgICAgICAgIEMgPSBmdW5jdGlvbiAodCkge1xuICAgICAgICByZXR1cm4gViB8fCBnKCksIGUgPT09IHIgJiYgYSA9PT0gbiA/IHQgOiAwID09PSB0ID8gMCA6IDEgPT09IHQgPyAxIDogbChkKHQpLCByLCBuKTtcbiAgICAgIH07Qy5nZXRDb250cm9sUG9pbnRzID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gW3sgeDogZSwgeTogciB9LCB7IHg6IGEsIHk6IG4gfV07XG4gICAgICB9O3ZhciBUID0gXCJnZW5lcmF0ZUJlemllcihcIiArIFtlLCByLCBhLCBuXSArIFwiKVwiO3JldHVybiBDLnRvU3RyaW5nID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gVDtcbiAgICAgIH0sIEM7XG4gICAgfWZ1bmN0aW9uIHUoZSwgdCkge1xuICAgICAgdmFyIHIgPSBlO3JldHVybiBtLmlzU3RyaW5nKGUpID8gYi5FYXNpbmdzW2VdIHx8IChyID0gITEpIDogciA9IG0uaXNBcnJheShlKSAmJiAxID09PSBlLmxlbmd0aCA/IHMuYXBwbHkobnVsbCwgZSkgOiBtLmlzQXJyYXkoZSkgJiYgMiA9PT0gZS5sZW5ndGggPyB4LmFwcGx5KG51bGwsIGUuY29uY2F0KFt0XSkpIDogbS5pc0FycmF5KGUpICYmIDQgPT09IGUubGVuZ3RoID8gbC5hcHBseShudWxsLCBlKSA6ICExLCByID09PSAhMSAmJiAociA9IGIuRWFzaW5nc1tiLmRlZmF1bHRzLmVhc2luZ10gPyBiLmRlZmF1bHRzLmVhc2luZyA6IHYpLCByO1xuICAgIH1mdW5jdGlvbiBjKGUpIHtcbiAgICAgIGlmIChlKSB7XG4gICAgICAgIHZhciB0ID0gbmV3IERhdGUoKS5nZXRUaW1lKCksXG4gICAgICAgICAgICByID0gYi5TdGF0ZS5jYWxscy5sZW5ndGg7ciA+IDFlNCAmJiAoYi5TdGF0ZS5jYWxscyA9IG4oYi5TdGF0ZS5jYWxscykpO2ZvciAodmFyIG8gPSAwOyByID4gbzsgbysrKSB7XG4gICAgICAgICAgaWYgKGIuU3RhdGUuY2FsbHNbb10pIHtcbiAgICAgICAgICAgIHZhciBzID0gYi5TdGF0ZS5jYWxsc1tvXSxcbiAgICAgICAgICAgICAgICBsID0gc1swXSxcbiAgICAgICAgICAgICAgICB1ID0gc1syXSxcbiAgICAgICAgICAgICAgICBkID0gc1szXSxcbiAgICAgICAgICAgICAgICBnID0gISFkLFxuICAgICAgICAgICAgICAgIHkgPSBudWxsO2QgfHwgKGQgPSBiLlN0YXRlLmNhbGxzW29dWzNdID0gdCAtIDE2KTtmb3IgKHZhciBoID0gTWF0aC5taW4oKHQgLSBkKSAvIHUuZHVyYXRpb24sIDEpLCB2ID0gMCwgeCA9IGwubGVuZ3RoOyB4ID4gdjsgdisrKSB7XG4gICAgICAgICAgICAgIHZhciBQID0gbFt2XSxcbiAgICAgICAgICAgICAgICAgIFYgPSBQLmVsZW1lbnQ7aWYgKGkoVikpIHtcbiAgICAgICAgICAgICAgICB2YXIgQyA9ICExO2lmICh1LmRpc3BsYXkgIT09IGEgJiYgbnVsbCAhPT0gdS5kaXNwbGF5ICYmIFwibm9uZVwiICE9PSB1LmRpc3BsYXkpIHtcbiAgICAgICAgICAgICAgICAgIGlmIChcImZsZXhcIiA9PT0gdS5kaXNwbGF5KSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBUID0gW1wiLXdlYmtpdC1ib3hcIiwgXCItbW96LWJveFwiLCBcIi1tcy1mbGV4Ym94XCIsIFwiLXdlYmtpdC1mbGV4XCJdO2YuZWFjaChULCBmdW5jdGlvbiAoZSwgdCkge1xuICAgICAgICAgICAgICAgICAgICAgIFMuc2V0UHJvcGVydHlWYWx1ZShWLCBcImRpc3BsYXlcIiwgdCk7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgfVMuc2V0UHJvcGVydHlWYWx1ZShWLCBcImRpc3BsYXlcIiwgdS5kaXNwbGF5KTtcbiAgICAgICAgICAgICAgICB9dS52aXNpYmlsaXR5ICE9PSBhICYmIFwiaGlkZGVuXCIgIT09IHUudmlzaWJpbGl0eSAmJiBTLnNldFByb3BlcnR5VmFsdWUoViwgXCJ2aXNpYmlsaXR5XCIsIHUudmlzaWJpbGl0eSk7Zm9yICh2YXIgayBpbiBQKSB7XG4gICAgICAgICAgICAgICAgICBpZiAoXCJlbGVtZW50XCIgIT09IGspIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIEEsXG4gICAgICAgICAgICAgICAgICAgICAgICBGID0gUFtrXSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGogPSBtLmlzU3RyaW5nKEYuZWFzaW5nKSA/IGIuRWFzaW5nc1tGLmVhc2luZ10gOiBGLmVhc2luZztpZiAoMSA9PT0gaCkgQSA9IEYuZW5kVmFsdWU7ZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgdmFyIEUgPSBGLmVuZFZhbHVlIC0gRi5zdGFydFZhbHVlO2lmIChBID0gRi5zdGFydFZhbHVlICsgRSAqIGooaCwgdSwgRSksICFnICYmIEEgPT09IEYuY3VycmVudFZhbHVlKSBjb250aW51ZTtcbiAgICAgICAgICAgICAgICAgICAgfWlmIChGLmN1cnJlbnRWYWx1ZSA9IEEsIFwidHdlZW5cIiA9PT0gaykgeSA9IEE7ZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgaWYgKFMuSG9va3MucmVnaXN0ZXJlZFtrXSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIEggPSBTLkhvb2tzLmdldFJvb3QoayksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgTiA9IGkoVikucm9vdFByb3BlcnR5VmFsdWVDYWNoZVtIXTtOICYmIChGLnJvb3RQcm9wZXJ0eVZhbHVlID0gTik7XG4gICAgICAgICAgICAgICAgICAgICAgfXZhciBMID0gUy5zZXRQcm9wZXJ0eVZhbHVlKFYsIGssIEYuY3VycmVudFZhbHVlICsgKDAgPT09IHBhcnNlRmxvYXQoQSkgPyBcIlwiIDogRi51bml0VHlwZSksIEYucm9vdFByb3BlcnR5VmFsdWUsIEYuc2Nyb2xsRGF0YSk7Uy5Ib29rcy5yZWdpc3RlcmVkW2tdICYmIChpKFYpLnJvb3RQcm9wZXJ0eVZhbHVlQ2FjaGVbSF0gPSBTLk5vcm1hbGl6YXRpb25zLnJlZ2lzdGVyZWRbSF0gPyBTLk5vcm1hbGl6YXRpb25zLnJlZ2lzdGVyZWRbSF0oXCJleHRyYWN0XCIsIG51bGwsIExbMV0pIDogTFsxXSksIFwidHJhbnNmb3JtXCIgPT09IExbMF0gJiYgKEMgPSAhMCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9dS5tb2JpbGVIQSAmJiBpKFYpLnRyYW5zZm9ybUNhY2hlLnRyYW5zbGF0ZTNkID09PSBhICYmIChpKFYpLnRyYW5zZm9ybUNhY2hlLnRyYW5zbGF0ZTNkID0gXCIoMHB4LCAwcHgsIDBweClcIiwgQyA9ICEwKSwgQyAmJiBTLmZsdXNoVHJhbnNmb3JtQ2FjaGUoVik7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH11LmRpc3BsYXkgIT09IGEgJiYgXCJub25lXCIgIT09IHUuZGlzcGxheSAmJiAoYi5TdGF0ZS5jYWxsc1tvXVsyXS5kaXNwbGF5ID0gITEpLCB1LnZpc2liaWxpdHkgIT09IGEgJiYgXCJoaWRkZW5cIiAhPT0gdS52aXNpYmlsaXR5ICYmIChiLlN0YXRlLmNhbGxzW29dWzJdLnZpc2liaWxpdHkgPSAhMSksIHUucHJvZ3Jlc3MgJiYgdS5wcm9ncmVzcy5jYWxsKHNbMV0sIHNbMV0sIGgsIE1hdGgubWF4KDAsIGQgKyB1LmR1cmF0aW9uIC0gdCksIGQsIHkpLCAxID09PSBoICYmIHAobyk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9Yi5TdGF0ZS5pc1RpY2tpbmcgJiYgdyhjKTtcbiAgICB9ZnVuY3Rpb24gcChlLCB0KSB7XG4gICAgICBpZiAoIWIuU3RhdGUuY2FsbHNbZV0pIHJldHVybiAhMTtmb3IgKHZhciByID0gYi5TdGF0ZS5jYWxsc1tlXVswXSwgbiA9IGIuU3RhdGUuY2FsbHNbZV1bMV0sIG8gPSBiLlN0YXRlLmNhbGxzW2VdWzJdLCBzID0gYi5TdGF0ZS5jYWxsc1tlXVs0XSwgbCA9ICExLCB1ID0gMCwgYyA9IHIubGVuZ3RoOyBjID4gdTsgdSsrKSB7XG4gICAgICAgIHZhciBwID0gclt1XS5lbGVtZW50O2lmICh0IHx8IG8ubG9vcCB8fCAoXCJub25lXCIgPT09IG8uZGlzcGxheSAmJiBTLnNldFByb3BlcnR5VmFsdWUocCwgXCJkaXNwbGF5XCIsIG8uZGlzcGxheSksIFwiaGlkZGVuXCIgPT09IG8udmlzaWJpbGl0eSAmJiBTLnNldFByb3BlcnR5VmFsdWUocCwgXCJ2aXNpYmlsaXR5XCIsIG8udmlzaWJpbGl0eSkpLCBvLmxvb3AgIT09ICEwICYmIChmLnF1ZXVlKHApWzFdID09PSBhIHx8ICEvXFwudmVsb2NpdHlRdWV1ZUVudHJ5RmxhZy9pLnRlc3QoZi5xdWV1ZShwKVsxXSkpICYmIGkocCkpIHtcbiAgICAgICAgICBpKHApLmlzQW5pbWF0aW5nID0gITEsIGkocCkucm9vdFByb3BlcnR5VmFsdWVDYWNoZSA9IHt9O3ZhciBkID0gITE7Zi5lYWNoKFMuTGlzdHMudHJhbnNmb3JtczNELCBmdW5jdGlvbiAoZSwgdCkge1xuICAgICAgICAgICAgdmFyIHIgPSAvXnNjYWxlLy50ZXN0KHQpID8gMSA6IDAsXG4gICAgICAgICAgICAgICAgbiA9IGkocCkudHJhbnNmb3JtQ2FjaGVbdF07aShwKS50cmFuc2Zvcm1DYWNoZVt0XSAhPT0gYSAmJiBuZXcgUmVnRXhwKFwiXlxcXFwoXCIgKyByICsgXCJbXi5dXCIpLnRlc3QobikgJiYgKGQgPSAhMCwgZGVsZXRlIGkocCkudHJhbnNmb3JtQ2FjaGVbdF0pO1xuICAgICAgICAgIH0pLCBvLm1vYmlsZUhBICYmIChkID0gITAsIGRlbGV0ZSBpKHApLnRyYW5zZm9ybUNhY2hlLnRyYW5zbGF0ZTNkKSwgZCAmJiBTLmZsdXNoVHJhbnNmb3JtQ2FjaGUocCksIFMuVmFsdWVzLnJlbW92ZUNsYXNzKHAsIFwidmVsb2NpdHktYW5pbWF0aW5nXCIpO1xuICAgICAgICB9aWYgKCF0ICYmIG8uY29tcGxldGUgJiYgIW8ubG9vcCAmJiB1ID09PSBjIC0gMSkgdHJ5IHtcbiAgICAgICAgICBvLmNvbXBsZXRlLmNhbGwobiwgbik7XG4gICAgICAgIH0gY2F0Y2ggKGcpIHtcbiAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHRocm93IGc7XG4gICAgICAgICAgfSwgMSk7XG4gICAgICAgIH1zICYmIG8ubG9vcCAhPT0gITAgJiYgcyhuKSwgaShwKSAmJiBvLmxvb3AgPT09ICEwICYmICF0ICYmIChmLmVhY2goaShwKS50d2VlbnNDb250YWluZXIsIGZ1bmN0aW9uIChlLCB0KSB7XG4gICAgICAgICAgL15yb3RhdGUvLnRlc3QoZSkgJiYgMzYwID09PSBwYXJzZUZsb2F0KHQuZW5kVmFsdWUpICYmICh0LmVuZFZhbHVlID0gMCwgdC5zdGFydFZhbHVlID0gMzYwKSwgL15iYWNrZ3JvdW5kUG9zaXRpb24vLnRlc3QoZSkgJiYgMTAwID09PSBwYXJzZUZsb2F0KHQuZW5kVmFsdWUpICYmIFwiJVwiID09PSB0LnVuaXRUeXBlICYmICh0LmVuZFZhbHVlID0gMCwgdC5zdGFydFZhbHVlID0gMTAwKTtcbiAgICAgICAgfSksIGIocCwgXCJyZXZlcnNlXCIsIHsgbG9vcDogITAsIGRlbGF5OiBvLmRlbGF5IH0pKSwgby5xdWV1ZSAhPT0gITEgJiYgZi5kZXF1ZXVlKHAsIG8ucXVldWUpO1xuICAgICAgfWIuU3RhdGUuY2FsbHNbZV0gPSAhMTtmb3IgKHZhciBtID0gMCwgeSA9IGIuU3RhdGUuY2FsbHMubGVuZ3RoOyB5ID4gbTsgbSsrKSB7XG4gICAgICAgIGlmIChiLlN0YXRlLmNhbGxzW21dICE9PSAhMSkge1xuICAgICAgICAgIGwgPSAhMDticmVhaztcbiAgICAgICAgfVxuICAgICAgfWwgPT09ICExICYmIChiLlN0YXRlLmlzVGlja2luZyA9ICExLCBkZWxldGUgYi5TdGF0ZS5jYWxscywgYi5TdGF0ZS5jYWxscyA9IFtdKTtcbiAgICB9dmFyIGYsXG4gICAgICAgIGQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICBpZiAoci5kb2N1bWVudE1vZGUpIHJldHVybiByLmRvY3VtZW50TW9kZTtmb3IgKHZhciBlID0gNzsgZSA+IDQ7IGUtLSkge1xuICAgICAgICB2YXIgdCA9IHIuY3JlYXRlRWxlbWVudChcImRpdlwiKTtpZiAodC5pbm5lckhUTUwgPSBcIjwhLS1baWYgSUUgXCIgKyBlICsgXCJdPjxzcGFuPjwvc3Bhbj48IVtlbmRpZl0tLT5cIiwgdC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNwYW5cIikubGVuZ3RoKSByZXR1cm4gdCA9IG51bGwsIGU7XG4gICAgICB9cmV0dXJuIGE7XG4gICAgfSgpLFxuICAgICAgICBnID0gZnVuY3Rpb24gKCkge1xuICAgICAgdmFyIGUgPSAwO3JldHVybiB0LndlYmtpdFJlcXVlc3RBbmltYXRpb25GcmFtZSB8fCB0Lm1velJlcXVlc3RBbmltYXRpb25GcmFtZSB8fCBmdW5jdGlvbiAodCkge1xuICAgICAgICB2YXIgcixcbiAgICAgICAgICAgIGEgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKTtyZXR1cm4gciA9IE1hdGgubWF4KDAsIDE2IC0gKGEgLSBlKSksIGUgPSBhICsgciwgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgdChhICsgcik7XG4gICAgICAgIH0sIHIpO1xuICAgICAgfTtcbiAgICB9KCksXG4gICAgICAgIG0gPSB7IGlzU3RyaW5nOiBmdW5jdGlvbiAoZSkge1xuICAgICAgICByZXR1cm4gXCJzdHJpbmdcIiA9PSB0eXBlb2YgZTtcbiAgICAgIH0sIGlzQXJyYXk6IEFycmF5LmlzQXJyYXkgfHwgZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgcmV0dXJuIFwiW29iamVjdCBBcnJheV1cIiA9PT0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKGUpO1xuICAgICAgfSwgaXNGdW5jdGlvbjogZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgcmV0dXJuIFwiW29iamVjdCBGdW5jdGlvbl1cIiA9PT0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKGUpO1xuICAgICAgfSwgaXNOb2RlOiBmdW5jdGlvbiAoZSkge1xuICAgICAgICByZXR1cm4gZSAmJiBlLm5vZGVUeXBlO1xuICAgICAgfSwgaXNOb2RlTGlzdDogZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgcmV0dXJuIFwib2JqZWN0XCIgPT0gdHlwZW9mIGUgJiYgL15cXFtvYmplY3QgKEhUTUxDb2xsZWN0aW9ufE5vZGVMaXN0fE9iamVjdClcXF0kLy50ZXN0KE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChlKSkgJiYgZS5sZW5ndGggIT09IGEgJiYgKDAgPT09IGUubGVuZ3RoIHx8IFwib2JqZWN0XCIgPT0gdHlwZW9mIGVbMF0gJiYgZVswXS5ub2RlVHlwZSA+IDApO1xuICAgICAgfSwgaXNXcmFwcGVkOiBmdW5jdGlvbiAoZSkge1xuICAgICAgICByZXR1cm4gZSAmJiAoZS5qcXVlcnkgfHwgdC5aZXB0byAmJiB0LlplcHRvLnplcHRvLmlzWihlKSk7XG4gICAgICB9LCBpc1NWRzogZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgcmV0dXJuIHQuU1ZHRWxlbWVudCAmJiBlIGluc3RhbmNlb2YgdC5TVkdFbGVtZW50O1xuICAgICAgfSwgaXNFbXB0eU9iamVjdDogZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgZm9yICh2YXIgdCBpbiBlKSB7XG4gICAgICAgICAgcmV0dXJuICExO1xuICAgICAgICB9cmV0dXJuICEwO1xuICAgICAgfSB9LFxuICAgICAgICB5ID0gITE7aWYgKGUuZm4gJiYgZS5mbi5qcXVlcnkgPyAoZiA9IGUsIHkgPSAhMCkgOiBmID0gdC5WZWxvY2l0eS5VdGlsaXRpZXMsIDggPj0gZCAmJiAheSkgdGhyb3cgbmV3IEVycm9yKFwiVmVsb2NpdHk6IElFOCBhbmQgYmVsb3cgcmVxdWlyZSBqUXVlcnkgdG8gYmUgbG9hZGVkIGJlZm9yZSBWZWxvY2l0eS5cIik7aWYgKDcgPj0gZCkgcmV0dXJuIHZvaWQgKGpRdWVyeS5mbi52ZWxvY2l0eSA9IGpRdWVyeS5mbi5hbmltYXRlKTt2YXIgaCA9IDQwMCxcbiAgICAgICAgdiA9IFwic3dpbmdcIixcbiAgICAgICAgYiA9IHsgU3RhdGU6IHsgaXNNb2JpbGU6IC9BbmRyb2lkfHdlYk9TfGlQaG9uZXxpUGFkfGlQb2R8QmxhY2tCZXJyeXxJRU1vYmlsZXxPcGVyYSBNaW5pL2kudGVzdChuYXZpZ2F0b3IudXNlckFnZW50KSwgaXNBbmRyb2lkOiAvQW5kcm9pZC9pLnRlc3QobmF2aWdhdG9yLnVzZXJBZ2VudCksIGlzR2luZ2VyYnJlYWQ6IC9BbmRyb2lkIDJcXC4zXFwuWzMtN10vaS50ZXN0KG5hdmlnYXRvci51c2VyQWdlbnQpLCBpc0Nocm9tZTogdC5jaHJvbWUsIGlzRmlyZWZveDogL0ZpcmVmb3gvaS50ZXN0KG5hdmlnYXRvci51c2VyQWdlbnQpLCBwcmVmaXhFbGVtZW50OiByLmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiksIHByZWZpeE1hdGNoZXM6IHt9LCBzY3JvbGxBbmNob3I6IG51bGwsIHNjcm9sbFByb3BlcnR5TGVmdDogbnVsbCwgc2Nyb2xsUHJvcGVydHlUb3A6IG51bGwsIGlzVGlja2luZzogITEsIGNhbGxzOiBbXSB9LCBDU1M6IHt9LCBVdGlsaXRpZXM6IGYsIFJlZGlyZWN0czoge30sIEVhc2luZ3M6IHt9LCBQcm9taXNlOiB0LlByb21pc2UsIGRlZmF1bHRzOiB7IHF1ZXVlOiBcIlwiLCBkdXJhdGlvbjogaCwgZWFzaW5nOiB2LCBiZWdpbjogYSwgY29tcGxldGU6IGEsIHByb2dyZXNzOiBhLCBkaXNwbGF5OiBhLCB2aXNpYmlsaXR5OiBhLCBsb29wOiAhMSwgZGVsYXk6ICExLCBtb2JpbGVIQTogITAsIF9jYWNoZVZhbHVlczogITAgfSwgaW5pdDogZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgZi5kYXRhKGUsIFwidmVsb2NpdHlcIiwgeyBpc1NWRzogbS5pc1NWRyhlKSwgaXNBbmltYXRpbmc6ICExLCBjb21wdXRlZFN0eWxlOiBudWxsLCB0d2VlbnNDb250YWluZXI6IG51bGwsIHJvb3RQcm9wZXJ0eVZhbHVlQ2FjaGU6IHt9LCB0cmFuc2Zvcm1DYWNoZToge30gfSk7XG4gICAgICB9LCBob29rOiBudWxsLCBtb2NrOiAhMSwgdmVyc2lvbjogeyBtYWpvcjogMSwgbWlub3I6IDIsIHBhdGNoOiAyIH0sIGRlYnVnOiAhMSB9O3QucGFnZVlPZmZzZXQgIT09IGEgPyAoYi5TdGF0ZS5zY3JvbGxBbmNob3IgPSB0LCBiLlN0YXRlLnNjcm9sbFByb3BlcnR5TGVmdCA9IFwicGFnZVhPZmZzZXRcIiwgYi5TdGF0ZS5zY3JvbGxQcm9wZXJ0eVRvcCA9IFwicGFnZVlPZmZzZXRcIikgOiAoYi5TdGF0ZS5zY3JvbGxBbmNob3IgPSByLmRvY3VtZW50RWxlbWVudCB8fCByLmJvZHkucGFyZW50Tm9kZSB8fCByLmJvZHksIGIuU3RhdGUuc2Nyb2xsUHJvcGVydHlMZWZ0ID0gXCJzY3JvbGxMZWZ0XCIsIGIuU3RhdGUuc2Nyb2xsUHJvcGVydHlUb3AgPSBcInNjcm9sbFRvcFwiKTt2YXIgeCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIGZ1bmN0aW9uIGUoZSkge1xuICAgICAgICByZXR1cm4gLWUudGVuc2lvbiAqIGUueCAtIGUuZnJpY3Rpb24gKiBlLnY7XG4gICAgICB9ZnVuY3Rpb24gdCh0LCByLCBhKSB7XG4gICAgICAgIHZhciBuID0geyB4OiB0LnggKyBhLmR4ICogciwgdjogdC52ICsgYS5kdiAqIHIsIHRlbnNpb246IHQudGVuc2lvbiwgZnJpY3Rpb246IHQuZnJpY3Rpb24gfTtyZXR1cm4geyBkeDogbi52LCBkdjogZShuKSB9O1xuICAgICAgfWZ1bmN0aW9uIHIociwgYSkge1xuICAgICAgICB2YXIgbiA9IHsgZHg6IHIudiwgZHY6IGUocikgfSxcbiAgICAgICAgICAgIG8gPSB0KHIsIC41ICogYSwgbiksXG4gICAgICAgICAgICBpID0gdChyLCAuNSAqIGEsIG8pLFxuICAgICAgICAgICAgcyA9IHQociwgYSwgaSksXG4gICAgICAgICAgICBsID0gMSAvIDYgKiAobi5keCArIDIgKiAoby5keCArIGkuZHgpICsgcy5keCksXG4gICAgICAgICAgICB1ID0gMSAvIDYgKiAobi5kdiArIDIgKiAoby5kdiArIGkuZHYpICsgcy5kdik7cmV0dXJuIHIueCA9IHIueCArIGwgKiBhLCByLnYgPSByLnYgKyB1ICogYSwgcjtcbiAgICAgIH1yZXR1cm4gZnVuY3Rpb24gYShlLCB0LCBuKSB7XG4gICAgICAgIHZhciBvLFxuICAgICAgICAgICAgaSxcbiAgICAgICAgICAgIHMsXG4gICAgICAgICAgICBsID0geyB4OiAtMSwgdjogMCwgdGVuc2lvbjogbnVsbCwgZnJpY3Rpb246IG51bGwgfSxcbiAgICAgICAgICAgIHUgPSBbMF0sXG4gICAgICAgICAgICBjID0gMCxcbiAgICAgICAgICAgIHAgPSAxZS00LFxuICAgICAgICAgICAgZiA9IC4wMTY7Zm9yIChlID0gcGFyc2VGbG9hdChlKSB8fCA1MDAsIHQgPSBwYXJzZUZsb2F0KHQpIHx8IDIwLCBuID0gbiB8fCBudWxsLCBsLnRlbnNpb24gPSBlLCBsLmZyaWN0aW9uID0gdCwgbyA9IG51bGwgIT09IG4sIG8gPyAoYyA9IGEoZSwgdCksIGkgPSBjIC8gbiAqIGYpIDogaSA9IGY7IHMgPSByKHMgfHwgbCwgaSksIHUucHVzaCgxICsgcy54KSwgYyArPSAxNiwgTWF0aC5hYnMocy54KSA+IHAgJiYgTWF0aC5hYnMocy52KSA+IHA7KSB7fXJldHVybiBvID8gZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICByZXR1cm4gdVtlICogKHUubGVuZ3RoIC0gMSkgfCAwXTtcbiAgICAgICAgfSA6IGM7XG4gICAgICB9O1xuICAgIH0oKTtiLkVhc2luZ3MgPSB7IGxpbmVhcjogZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgcmV0dXJuIGU7XG4gICAgICB9LCBzd2luZzogZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgcmV0dXJuIC41IC0gTWF0aC5jb3MoZSAqIE1hdGguUEkpIC8gMjtcbiAgICAgIH0sIHNwcmluZzogZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgcmV0dXJuIDEgLSBNYXRoLmNvcyg0LjUgKiBlICogTWF0aC5QSSkgKiBNYXRoLmV4cCg2ICogLWUpO1xuICAgICAgfSB9LCBmLmVhY2goW1tcImVhc2VcIiwgWy4yNSwgLjEsIC4yNSwgMV1dLCBbXCJlYXNlLWluXCIsIFsuNDIsIDAsIDEsIDFdXSwgW1wiZWFzZS1vdXRcIiwgWzAsIDAsIC41OCwgMV1dLCBbXCJlYXNlLWluLW91dFwiLCBbLjQyLCAwLCAuNTgsIDFdXSwgW1wiZWFzZUluU2luZVwiLCBbLjQ3LCAwLCAuNzQ1LCAuNzE1XV0sIFtcImVhc2VPdXRTaW5lXCIsIFsuMzksIC41NzUsIC41NjUsIDFdXSwgW1wiZWFzZUluT3V0U2luZVwiLCBbLjQ0NSwgLjA1LCAuNTUsIC45NV1dLCBbXCJlYXNlSW5RdWFkXCIsIFsuNTUsIC4wODUsIC42OCwgLjUzXV0sIFtcImVhc2VPdXRRdWFkXCIsIFsuMjUsIC40NiwgLjQ1LCAuOTRdXSwgW1wiZWFzZUluT3V0UXVhZFwiLCBbLjQ1NSwgLjAzLCAuNTE1LCAuOTU1XV0sIFtcImVhc2VJbkN1YmljXCIsIFsuNTUsIC4wNTUsIC42NzUsIC4xOV1dLCBbXCJlYXNlT3V0Q3ViaWNcIiwgWy4yMTUsIC42MSwgLjM1NSwgMV1dLCBbXCJlYXNlSW5PdXRDdWJpY1wiLCBbLjY0NSwgLjA0NSwgLjM1NSwgMV1dLCBbXCJlYXNlSW5RdWFydFwiLCBbLjg5NSwgLjAzLCAuNjg1LCAuMjJdXSwgW1wiZWFzZU91dFF1YXJ0XCIsIFsuMTY1LCAuODQsIC40NCwgMV1dLCBbXCJlYXNlSW5PdXRRdWFydFwiLCBbLjc3LCAwLCAuMTc1LCAxXV0sIFtcImVhc2VJblF1aW50XCIsIFsuNzU1LCAuMDUsIC44NTUsIC4wNl1dLCBbXCJlYXNlT3V0UXVpbnRcIiwgWy4yMywgMSwgLjMyLCAxXV0sIFtcImVhc2VJbk91dFF1aW50XCIsIFsuODYsIDAsIC4wNywgMV1dLCBbXCJlYXNlSW5FeHBvXCIsIFsuOTUsIC4wNSwgLjc5NSwgLjAzNV1dLCBbXCJlYXNlT3V0RXhwb1wiLCBbLjE5LCAxLCAuMjIsIDFdXSwgW1wiZWFzZUluT3V0RXhwb1wiLCBbMSwgMCwgMCwgMV1dLCBbXCJlYXNlSW5DaXJjXCIsIFsuNiwgLjA0LCAuOTgsIC4zMzVdXSwgW1wiZWFzZU91dENpcmNcIiwgWy4wNzUsIC44MiwgLjE2NSwgMV1dLCBbXCJlYXNlSW5PdXRDaXJjXCIsIFsuNzg1LCAuMTM1LCAuMTUsIC44Nl1dXSwgZnVuY3Rpb24gKGUsIHQpIHtcbiAgICAgIGIuRWFzaW5nc1t0WzBdXSA9IGwuYXBwbHkobnVsbCwgdFsxXSk7XG4gICAgfSk7dmFyIFMgPSBiLkNTUyA9IHsgUmVnRXg6IHsgaXNIZXg6IC9eIyhbQS1mXFxkXXszfSl7MSwyfSQvaSwgdmFsdWVVbndyYXA6IC9eW0Etel0rXFwoKC4qKVxcKSQvaSwgd3JhcHBlZFZhbHVlQWxyZWFkeUV4dHJhY3RlZDogL1swLTkuXSsgWzAtOS5dKyBbMC05Ll0rKCBbMC05Ll0rKT8vLCB2YWx1ZVNwbGl0OiAvKFtBLXpdK1xcKC4rXFwpKXwoKFtBLXowLTkjLS5dKz8pKD89XFxzfCQpKS9naSB9LCBMaXN0czogeyBjb2xvcnM6IFtcImZpbGxcIiwgXCJzdHJva2VcIiwgXCJzdG9wQ29sb3JcIiwgXCJjb2xvclwiLCBcImJhY2tncm91bmRDb2xvclwiLCBcImJvcmRlckNvbG9yXCIsIFwiYm9yZGVyVG9wQ29sb3JcIiwgXCJib3JkZXJSaWdodENvbG9yXCIsIFwiYm9yZGVyQm90dG9tQ29sb3JcIiwgXCJib3JkZXJMZWZ0Q29sb3JcIiwgXCJvdXRsaW5lQ29sb3JcIl0sIHRyYW5zZm9ybXNCYXNlOiBbXCJ0cmFuc2xhdGVYXCIsIFwidHJhbnNsYXRlWVwiLCBcInNjYWxlXCIsIFwic2NhbGVYXCIsIFwic2NhbGVZXCIsIFwic2tld1hcIiwgXCJza2V3WVwiLCBcInJvdGF0ZVpcIl0sIHRyYW5zZm9ybXMzRDogW1widHJhbnNmb3JtUGVyc3BlY3RpdmVcIiwgXCJ0cmFuc2xhdGVaXCIsIFwic2NhbGVaXCIsIFwicm90YXRlWFwiLCBcInJvdGF0ZVlcIl0gfSwgSG9va3M6IHsgdGVtcGxhdGVzOiB7IHRleHRTaGFkb3c6IFtcIkNvbG9yIFggWSBCbHVyXCIsIFwiYmxhY2sgMHB4IDBweCAwcHhcIl0sIGJveFNoYWRvdzogW1wiQ29sb3IgWCBZIEJsdXIgU3ByZWFkXCIsIFwiYmxhY2sgMHB4IDBweCAwcHggMHB4XCJdLCBjbGlwOiBbXCJUb3AgUmlnaHQgQm90dG9tIExlZnRcIiwgXCIwcHggMHB4IDBweCAwcHhcIl0sIGJhY2tncm91bmRQb3NpdGlvbjogW1wiWCBZXCIsIFwiMCUgMCVcIl0sIHRyYW5zZm9ybU9yaWdpbjogW1wiWCBZIFpcIiwgXCI1MCUgNTAlIDBweFwiXSwgcGVyc3BlY3RpdmVPcmlnaW46IFtcIlggWVwiLCBcIjUwJSA1MCVcIl0gfSwgcmVnaXN0ZXJlZDoge30sIHJlZ2lzdGVyOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgZm9yICh2YXIgZSA9IDA7IGUgPCBTLkxpc3RzLmNvbG9ycy5sZW5ndGg7IGUrKykge1xuICAgICAgICAgICAgdmFyIHQgPSBcImNvbG9yXCIgPT09IFMuTGlzdHMuY29sb3JzW2VdID8gXCIwIDAgMCAxXCIgOiBcIjI1NSAyNTUgMjU1IDFcIjtTLkhvb2tzLnRlbXBsYXRlc1tTLkxpc3RzLmNvbG9yc1tlXV0gPSBbXCJSZWQgR3JlZW4gQmx1ZSBBbHBoYVwiLCB0XTtcbiAgICAgICAgICB9dmFyIHIsIGEsIG47aWYgKGQpIGZvciAociBpbiBTLkhvb2tzLnRlbXBsYXRlcykge1xuICAgICAgICAgICAgYSA9IFMuSG9va3MudGVtcGxhdGVzW3JdLCBuID0gYVswXS5zcGxpdChcIiBcIik7dmFyIG8gPSBhWzFdLm1hdGNoKFMuUmVnRXgudmFsdWVTcGxpdCk7XCJDb2xvclwiID09PSBuWzBdICYmIChuLnB1c2gobi5zaGlmdCgpKSwgby5wdXNoKG8uc2hpZnQoKSksIFMuSG9va3MudGVtcGxhdGVzW3JdID0gW24uam9pbihcIiBcIiksIG8uam9pbihcIiBcIildKTtcbiAgICAgICAgICB9Zm9yIChyIGluIFMuSG9va3MudGVtcGxhdGVzKSB7XG4gICAgICAgICAgICBhID0gUy5Ib29rcy50ZW1wbGF0ZXNbcl0sIG4gPSBhWzBdLnNwbGl0KFwiIFwiKTtmb3IgKHZhciBlIGluIG4pIHtcbiAgICAgICAgICAgICAgdmFyIGkgPSByICsgbltlXSxcbiAgICAgICAgICAgICAgICAgIHMgPSBlO1MuSG9va3MucmVnaXN0ZXJlZFtpXSA9IFtyLCBzXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH0sIGdldFJvb3Q6IGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgdmFyIHQgPSBTLkhvb2tzLnJlZ2lzdGVyZWRbZV07cmV0dXJuIHQgPyB0WzBdIDogZTtcbiAgICAgICAgfSwgY2xlYW5Sb290UHJvcGVydHlWYWx1ZTogZnVuY3Rpb24gKGUsIHQpIHtcbiAgICAgICAgICByZXR1cm4gUy5SZWdFeC52YWx1ZVVud3JhcC50ZXN0KHQpICYmICh0ID0gdC5tYXRjaChTLlJlZ0V4LnZhbHVlVW53cmFwKVsxXSksIFMuVmFsdWVzLmlzQ1NTTnVsbFZhbHVlKHQpICYmICh0ID0gUy5Ib29rcy50ZW1wbGF0ZXNbZV1bMV0pLCB0O1xuICAgICAgICB9LCBleHRyYWN0VmFsdWU6IGZ1bmN0aW9uIChlLCB0KSB7XG4gICAgICAgICAgdmFyIHIgPSBTLkhvb2tzLnJlZ2lzdGVyZWRbZV07aWYgKHIpIHtcbiAgICAgICAgICAgIHZhciBhID0gclswXSxcbiAgICAgICAgICAgICAgICBuID0gclsxXTtyZXR1cm4gdCA9IFMuSG9va3MuY2xlYW5Sb290UHJvcGVydHlWYWx1ZShhLCB0KSwgdC50b1N0cmluZygpLm1hdGNoKFMuUmVnRXgudmFsdWVTcGxpdClbbl07XG4gICAgICAgICAgfXJldHVybiB0O1xuICAgICAgICB9LCBpbmplY3RWYWx1ZTogZnVuY3Rpb24gKGUsIHQsIHIpIHtcbiAgICAgICAgICB2YXIgYSA9IFMuSG9va3MucmVnaXN0ZXJlZFtlXTtpZiAoYSkge1xuICAgICAgICAgICAgdmFyIG4sXG4gICAgICAgICAgICAgICAgbyxcbiAgICAgICAgICAgICAgICBpID0gYVswXSxcbiAgICAgICAgICAgICAgICBzID0gYVsxXTtyZXR1cm4gciA9IFMuSG9va3MuY2xlYW5Sb290UHJvcGVydHlWYWx1ZShpLCByKSwgbiA9IHIudG9TdHJpbmcoKS5tYXRjaChTLlJlZ0V4LnZhbHVlU3BsaXQpLCBuW3NdID0gdCwgbyA9IG4uam9pbihcIiBcIik7XG4gICAgICAgICAgfXJldHVybiByO1xuICAgICAgICB9IH0sIE5vcm1hbGl6YXRpb25zOiB7IHJlZ2lzdGVyZWQ6IHsgY2xpcDogZnVuY3Rpb24gKGUsIHQsIHIpIHtcbiAgICAgICAgICAgIHN3aXRjaCAoZSkge2Nhc2UgXCJuYW1lXCI6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiY2xpcFwiO2Nhc2UgXCJleHRyYWN0XCI6XG4gICAgICAgICAgICAgICAgdmFyIGE7cmV0dXJuIFMuUmVnRXgud3JhcHBlZFZhbHVlQWxyZWFkeUV4dHJhY3RlZC50ZXN0KHIpID8gYSA9IHIgOiAoYSA9IHIudG9TdHJpbmcoKS5tYXRjaChTLlJlZ0V4LnZhbHVlVW53cmFwKSwgYSA9IGEgPyBhWzFdLnJlcGxhY2UoLywoXFxzKyk/L2csIFwiIFwiKSA6IHIpLCBhO2Nhc2UgXCJpbmplY3RcIjpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJyZWN0KFwiICsgciArIFwiKVwiO31cbiAgICAgICAgICB9LCBibHVyOiBmdW5jdGlvbiAoZSwgdCwgcikge1xuICAgICAgICAgICAgc3dpdGNoIChlKSB7Y2FzZSBcIm5hbWVcIjpcbiAgICAgICAgICAgICAgICByZXR1cm4gYi5TdGF0ZS5pc0ZpcmVmb3ggPyBcImZpbHRlclwiIDogXCItd2Via2l0LWZpbHRlclwiO2Nhc2UgXCJleHRyYWN0XCI6XG4gICAgICAgICAgICAgICAgdmFyIGEgPSBwYXJzZUZsb2F0KHIpO2lmICghYSAmJiAwICE9PSBhKSB7XG4gICAgICAgICAgICAgICAgICB2YXIgbiA9IHIudG9TdHJpbmcoKS5tYXRjaCgvYmx1clxcKChbMC05XStbQS16XSspXFwpL2kpO2EgPSBuID8gblsxXSA6IDA7XG4gICAgICAgICAgICAgICAgfXJldHVybiBhO2Nhc2UgXCJpbmplY3RcIjpcbiAgICAgICAgICAgICAgICByZXR1cm4gcGFyc2VGbG9hdChyKSA/IFwiYmx1cihcIiArIHIgKyBcIilcIiA6IFwibm9uZVwiO31cbiAgICAgICAgICB9LCBvcGFjaXR5OiBmdW5jdGlvbiAoZSwgdCwgcikge1xuICAgICAgICAgICAgaWYgKDggPj0gZCkgc3dpdGNoIChlKSB7Y2FzZSBcIm5hbWVcIjpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJmaWx0ZXJcIjtjYXNlIFwiZXh0cmFjdFwiOlxuICAgICAgICAgICAgICAgIHZhciBhID0gci50b1N0cmluZygpLm1hdGNoKC9hbHBoYVxcKG9wYWNpdHk9KC4qKVxcKS9pKTtyZXR1cm4gciA9IGEgPyBhWzFdIC8gMTAwIDogMTtjYXNlIFwiaW5qZWN0XCI6XG4gICAgICAgICAgICAgICAgcmV0dXJuIHQuc3R5bGUuem9vbSA9IDEsIHBhcnNlRmxvYXQocikgPj0gMSA/IFwiXCIgOiBcImFscGhhKG9wYWNpdHk9XCIgKyBwYXJzZUludCgxMDAgKiBwYXJzZUZsb2F0KHIpLCAxMCkgKyBcIilcIjt9IGVsc2Ugc3dpdGNoIChlKSB7Y2FzZSBcIm5hbWVcIjpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJvcGFjaXR5XCI7Y2FzZSBcImV4dHJhY3RcIjpcbiAgICAgICAgICAgICAgICByZXR1cm4gcjtjYXNlIFwiaW5qZWN0XCI6XG4gICAgICAgICAgICAgICAgcmV0dXJuIHI7fVxuICAgICAgICAgIH0gfSwgcmVnaXN0ZXI6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICA5ID49IGQgfHwgYi5TdGF0ZS5pc0dpbmdlcmJyZWFkIHx8IChTLkxpc3RzLnRyYW5zZm9ybXNCYXNlID0gUy5MaXN0cy50cmFuc2Zvcm1zQmFzZS5jb25jYXQoUy5MaXN0cy50cmFuc2Zvcm1zM0QpKTtmb3IgKHZhciBlID0gMDsgZSA8IFMuTGlzdHMudHJhbnNmb3Jtc0Jhc2UubGVuZ3RoOyBlKyspIHtcbiAgICAgICAgICAgICFmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgIHZhciB0ID0gUy5MaXN0cy50cmFuc2Zvcm1zQmFzZVtlXTtTLk5vcm1hbGl6YXRpb25zLnJlZ2lzdGVyZWRbdF0gPSBmdW5jdGlvbiAoZSwgciwgbikge1xuICAgICAgICAgICAgICAgIHN3aXRjaCAoZSkge2Nhc2UgXCJuYW1lXCI6XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBcInRyYW5zZm9ybVwiO2Nhc2UgXCJleHRyYWN0XCI6XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBpKHIpID09PSBhIHx8IGkocikudHJhbnNmb3JtQ2FjaGVbdF0gPT09IGEgPyAvXnNjYWxlL2kudGVzdCh0KSA/IDEgOiAwIDogaShyKS50cmFuc2Zvcm1DYWNoZVt0XS5yZXBsYWNlKC9bKCldL2csIFwiXCIpO2Nhc2UgXCJpbmplY3RcIjpcbiAgICAgICAgICAgICAgICAgICAgdmFyIG8gPSAhMTtzd2l0Y2ggKHQuc3Vic3RyKDAsIHQubGVuZ3RoIC0gMSkpIHtjYXNlIFwidHJhbnNsYXRlXCI6XG4gICAgICAgICAgICAgICAgICAgICAgICBvID0gIS8oJXxweHxlbXxyZW18dnd8dmh8XFxkKSQvaS50ZXN0KG4pO2JyZWFrO2Nhc2UgXCJzY2FsXCI6Y2FzZSBcInNjYWxlXCI6XG4gICAgICAgICAgICAgICAgICAgICAgICBiLlN0YXRlLmlzQW5kcm9pZCAmJiBpKHIpLnRyYW5zZm9ybUNhY2hlW3RdID09PSBhICYmIDEgPiBuICYmIChuID0gMSksIG8gPSAhLyhcXGQpJC9pLnRlc3Qobik7YnJlYWs7Y2FzZSBcInNrZXdcIjpcbiAgICAgICAgICAgICAgICAgICAgICAgIG8gPSAhLyhkZWd8XFxkKSQvaS50ZXN0KG4pO2JyZWFrO2Nhc2UgXCJyb3RhdGVcIjpcbiAgICAgICAgICAgICAgICAgICAgICAgIG8gPSAhLyhkZWd8XFxkKSQvaS50ZXN0KG4pO31yZXR1cm4gbyB8fCAoaShyKS50cmFuc2Zvcm1DYWNoZVt0XSA9IFwiKFwiICsgbiArIFwiKVwiKSwgaShyKS50cmFuc2Zvcm1DYWNoZVt0XTt9XG4gICAgICAgICAgICAgIH07XG4gICAgICAgICAgICB9KCk7XG4gICAgICAgICAgfWZvciAodmFyIGUgPSAwOyBlIDwgUy5MaXN0cy5jb2xvcnMubGVuZ3RoOyBlKyspIHtcbiAgICAgICAgICAgICFmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgIHZhciB0ID0gUy5MaXN0cy5jb2xvcnNbZV07Uy5Ob3JtYWxpemF0aW9ucy5yZWdpc3RlcmVkW3RdID0gZnVuY3Rpb24gKGUsIHIsIG4pIHtcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKGUpIHtjYXNlIFwibmFtZVwiOlxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdDtjYXNlIFwiZXh0cmFjdFwiOlxuICAgICAgICAgICAgICAgICAgICB2YXIgbztpZiAoUy5SZWdFeC53cmFwcGVkVmFsdWVBbHJlYWR5RXh0cmFjdGVkLnRlc3QobikpIG8gPSBuO2Vsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgIHZhciBpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBzID0geyBibGFjazogXCJyZ2IoMCwgMCwgMClcIiwgYmx1ZTogXCJyZ2IoMCwgMCwgMjU1KVwiLCBncmF5OiBcInJnYigxMjgsIDEyOCwgMTI4KVwiLCBncmVlbjogXCJyZ2IoMCwgMTI4LCAwKVwiLCByZWQ6IFwicmdiKDI1NSwgMCwgMClcIiwgd2hpdGU6IFwicmdiKDI1NSwgMjU1LCAyNTUpXCIgfTsvXltBLXpdKyQvaS50ZXN0KG4pID8gaSA9IHNbbl0gIT09IGEgPyBzW25dIDogcy5ibGFjayA6IFMuUmVnRXguaXNIZXgudGVzdChuKSA/IGkgPSBcInJnYihcIiArIFMuVmFsdWVzLmhleFRvUmdiKG4pLmpvaW4oXCIgXCIpICsgXCIpXCIgOiAvXnJnYmE/XFwoL2kudGVzdChuKSB8fCAoaSA9IHMuYmxhY2spLCBvID0gKGkgfHwgbikudG9TdHJpbmcoKS5tYXRjaChTLlJlZ0V4LnZhbHVlVW53cmFwKVsxXS5yZXBsYWNlKC8sKFxccyspPy9nLCBcIiBcIik7XG4gICAgICAgICAgICAgICAgICAgIH1yZXR1cm4gOCA+PSBkIHx8IDMgIT09IG8uc3BsaXQoXCIgXCIpLmxlbmd0aCB8fCAobyArPSBcIiAxXCIpLCBvO2Nhc2UgXCJpbmplY3RcIjpcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDggPj0gZCA/IDQgPT09IG4uc3BsaXQoXCIgXCIpLmxlbmd0aCAmJiAobiA9IG4uc3BsaXQoL1xccysvKS5zbGljZSgwLCAzKS5qb2luKFwiIFwiKSkgOiAzID09PSBuLnNwbGl0KFwiIFwiKS5sZW5ndGggJiYgKG4gKz0gXCIgMVwiKSwgKDggPj0gZCA/IFwicmdiXCIgOiBcInJnYmFcIikgKyBcIihcIiArIG4ucmVwbGFjZSgvXFxzKy9nLCBcIixcIikucmVwbGFjZSgvXFwuKFxcZCkrKD89LCkvZywgXCJcIikgKyBcIilcIjt9XG4gICAgICAgICAgICAgIH07XG4gICAgICAgICAgICB9KCk7XG4gICAgICAgICAgfVxuICAgICAgICB9IH0sIE5hbWVzOiB7IGNhbWVsQ2FzZTogZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICByZXR1cm4gZS5yZXBsYWNlKC8tKFxcdykvZywgZnVuY3Rpb24gKGUsIHQpIHtcbiAgICAgICAgICAgIHJldHVybiB0LnRvVXBwZXJDYXNlKCk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH0sIFNWR0F0dHJpYnV0ZTogZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICB2YXIgdCA9IFwid2lkdGh8aGVpZ2h0fHh8eXxjeHxjeXxyfHJ4fHJ5fHgxfHgyfHkxfHkyXCI7cmV0dXJuIChkIHx8IGIuU3RhdGUuaXNBbmRyb2lkICYmICFiLlN0YXRlLmlzQ2hyb21lKSAmJiAodCArPSBcInx0cmFuc2Zvcm1cIiksIG5ldyBSZWdFeHAoXCJeKFwiICsgdCArIFwiKSRcIiwgXCJpXCIpLnRlc3QoZSk7XG4gICAgICAgIH0sIHByZWZpeENoZWNrOiBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgIGlmIChiLlN0YXRlLnByZWZpeE1hdGNoZXNbZV0pIHJldHVybiBbYi5TdGF0ZS5wcmVmaXhNYXRjaGVzW2VdLCAhMF07Zm9yICh2YXIgdCA9IFtcIlwiLCBcIldlYmtpdFwiLCBcIk1velwiLCBcIm1zXCIsIFwiT1wiXSwgciA9IDAsIGEgPSB0Lmxlbmd0aDsgYSA+IHI7IHIrKykge1xuICAgICAgICAgICAgdmFyIG47aWYgKG4gPSAwID09PSByID8gZSA6IHRbcl0gKyBlLnJlcGxhY2UoL15cXHcvLCBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgICByZXR1cm4gZS50b1VwcGVyQ2FzZSgpO1xuICAgICAgICAgICAgfSksIG0uaXNTdHJpbmcoYi5TdGF0ZS5wcmVmaXhFbGVtZW50LnN0eWxlW25dKSkgcmV0dXJuIGIuU3RhdGUucHJlZml4TWF0Y2hlc1tlXSA9IG4sIFtuLCAhMF07XG4gICAgICAgICAgfXJldHVybiBbZSwgITFdO1xuICAgICAgICB9IH0sIFZhbHVlczogeyBoZXhUb1JnYjogZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICB2YXIgdCxcbiAgICAgICAgICAgICAgciA9IC9eIz8oW2EtZlxcZF0pKFthLWZcXGRdKShbYS1mXFxkXSkkL2ksXG4gICAgICAgICAgICAgIGEgPSAvXiM/KFthLWZcXGRdezJ9KShbYS1mXFxkXXsyfSkoW2EtZlxcZF17Mn0pJC9pO3JldHVybiBlID0gZS5yZXBsYWNlKHIsIGZ1bmN0aW9uIChlLCB0LCByLCBhKSB7XG4gICAgICAgICAgICByZXR1cm4gdCArIHQgKyByICsgciArIGEgKyBhO1xuICAgICAgICAgIH0pLCB0ID0gYS5leGVjKGUpLCB0ID8gW3BhcnNlSW50KHRbMV0sIDE2KSwgcGFyc2VJbnQodFsyXSwgMTYpLCBwYXJzZUludCh0WzNdLCAxNildIDogWzAsIDAsIDBdO1xuICAgICAgICB9LCBpc0NTU051bGxWYWx1ZTogZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICByZXR1cm4gMCA9PSBlIHx8IC9eKG5vbmV8YXV0b3x0cmFuc3BhcmVudHwocmdiYVxcKDAsID8wLCA/MCwgPzBcXCkpKSQvaS50ZXN0KGUpO1xuICAgICAgICB9LCBnZXRVbml0VHlwZTogZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICByZXR1cm4gKC9eKHJvdGF0ZXxza2V3KS9pLnRlc3QoZSkgPyBcImRlZ1wiIDogLyheKHNjYWxlfHNjYWxlWHxzY2FsZVl8c2NhbGVafGFscGhhfGZsZXhHcm93fGZsZXhIZWlnaHR8ekluZGV4fGZvbnRXZWlnaHQpJCl8KChvcGFjaXR5fHJlZHxncmVlbnxibHVlfGFscGhhKSQpL2kudGVzdChlKSA/IFwiXCIgOiBcInB4XCJcbiAgICAgICAgICApO1xuICAgICAgICB9LCBnZXREaXNwbGF5VHlwZTogZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICB2YXIgdCA9IGUgJiYgZS50YWdOYW1lLnRvU3RyaW5nKCkudG9Mb3dlckNhc2UoKTtyZXR1cm4gKC9eKGJ8YmlnfGl8c21hbGx8dHR8YWJicnxhY3JvbnltfGNpdGV8Y29kZXxkZm58ZW18a2JkfHN0cm9uZ3xzYW1wfHZhcnxhfGJkb3xicnxpbWd8bWFwfG9iamVjdHxxfHNjcmlwdHxzcGFufHN1YnxzdXB8YnV0dG9ufGlucHV0fGxhYmVsfHNlbGVjdHx0ZXh0YXJlYSkkL2kudGVzdCh0KSA/IFwiaW5saW5lXCIgOiAvXihsaSkkL2kudGVzdCh0KSA/IFwibGlzdC1pdGVtXCIgOiAvXih0cikkL2kudGVzdCh0KSA/IFwidGFibGUtcm93XCIgOiAvXih0YWJsZSkkL2kudGVzdCh0KSA/IFwidGFibGVcIiA6IC9eKHRib2R5KSQvaS50ZXN0KHQpID8gXCJ0YWJsZS1yb3ctZ3JvdXBcIiA6IFwiYmxvY2tcIlxuICAgICAgICAgICk7XG4gICAgICAgIH0sIGFkZENsYXNzOiBmdW5jdGlvbiAoZSwgdCkge1xuICAgICAgICAgIGUuY2xhc3NMaXN0ID8gZS5jbGFzc0xpc3QuYWRkKHQpIDogZS5jbGFzc05hbWUgKz0gKGUuY2xhc3NOYW1lLmxlbmd0aCA/IFwiIFwiIDogXCJcIikgKyB0O1xuICAgICAgICB9LCByZW1vdmVDbGFzczogZnVuY3Rpb24gKGUsIHQpIHtcbiAgICAgICAgICBlLmNsYXNzTGlzdCA/IGUuY2xhc3NMaXN0LnJlbW92ZSh0KSA6IGUuY2xhc3NOYW1lID0gZS5jbGFzc05hbWUudG9TdHJpbmcoKS5yZXBsYWNlKG5ldyBSZWdFeHAoXCIoXnxcXFxccylcIiArIHQuc3BsaXQoXCIgXCIpLmpvaW4oXCJ8XCIpICsgXCIoXFxcXHN8JClcIiwgXCJnaVwiKSwgXCIgXCIpO1xuICAgICAgICB9IH0sIGdldFByb3BlcnR5VmFsdWU6IGZ1bmN0aW9uIChlLCByLCBuLCBvKSB7XG4gICAgICAgIGZ1bmN0aW9uIHMoZSwgcikge1xuICAgICAgICAgIGZ1bmN0aW9uIG4oKSB7XG4gICAgICAgICAgICB1ICYmIFMuc2V0UHJvcGVydHlWYWx1ZShlLCBcImRpc3BsYXlcIiwgXCJub25lXCIpO1xuICAgICAgICAgIH12YXIgbCA9IDA7aWYgKDggPj0gZCkgbCA9IGYuY3NzKGUsIHIpO2Vsc2Uge1xuICAgICAgICAgICAgdmFyIHUgPSAhMTtpZiAoL14od2lkdGh8aGVpZ2h0KSQvLnRlc3QocikgJiYgMCA9PT0gUy5nZXRQcm9wZXJ0eVZhbHVlKGUsIFwiZGlzcGxheVwiKSAmJiAodSA9ICEwLCBTLnNldFByb3BlcnR5VmFsdWUoZSwgXCJkaXNwbGF5XCIsIFMuVmFsdWVzLmdldERpc3BsYXlUeXBlKGUpKSksICFvKSB7XG4gICAgICAgICAgICAgIGlmIChcImhlaWdodFwiID09PSByICYmIFwiYm9yZGVyLWJveFwiICE9PSBTLmdldFByb3BlcnR5VmFsdWUoZSwgXCJib3hTaXppbmdcIikudG9TdHJpbmcoKS50b0xvd2VyQ2FzZSgpKSB7XG4gICAgICAgICAgICAgICAgdmFyIGMgPSBlLm9mZnNldEhlaWdodCAtIChwYXJzZUZsb2F0KFMuZ2V0UHJvcGVydHlWYWx1ZShlLCBcImJvcmRlclRvcFdpZHRoXCIpKSB8fCAwKSAtIChwYXJzZUZsb2F0KFMuZ2V0UHJvcGVydHlWYWx1ZShlLCBcImJvcmRlckJvdHRvbVdpZHRoXCIpKSB8fCAwKSAtIChwYXJzZUZsb2F0KFMuZ2V0UHJvcGVydHlWYWx1ZShlLCBcInBhZGRpbmdUb3BcIikpIHx8IDApIC0gKHBhcnNlRmxvYXQoUy5nZXRQcm9wZXJ0eVZhbHVlKGUsIFwicGFkZGluZ0JvdHRvbVwiKSkgfHwgMCk7cmV0dXJuIG4oKSwgYztcbiAgICAgICAgICAgICAgfWlmIChcIndpZHRoXCIgPT09IHIgJiYgXCJib3JkZXItYm94XCIgIT09IFMuZ2V0UHJvcGVydHlWYWx1ZShlLCBcImJveFNpemluZ1wiKS50b1N0cmluZygpLnRvTG93ZXJDYXNlKCkpIHtcbiAgICAgICAgICAgICAgICB2YXIgcCA9IGUub2Zmc2V0V2lkdGggLSAocGFyc2VGbG9hdChTLmdldFByb3BlcnR5VmFsdWUoZSwgXCJib3JkZXJMZWZ0V2lkdGhcIikpIHx8IDApIC0gKHBhcnNlRmxvYXQoUy5nZXRQcm9wZXJ0eVZhbHVlKGUsIFwiYm9yZGVyUmlnaHRXaWR0aFwiKSkgfHwgMCkgLSAocGFyc2VGbG9hdChTLmdldFByb3BlcnR5VmFsdWUoZSwgXCJwYWRkaW5nTGVmdFwiKSkgfHwgMCkgLSAocGFyc2VGbG9hdChTLmdldFByb3BlcnR5VmFsdWUoZSwgXCJwYWRkaW5nUmlnaHRcIikpIHx8IDApO3JldHVybiBuKCksIHA7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH12YXIgZztnID0gaShlKSA9PT0gYSA/IHQuZ2V0Q29tcHV0ZWRTdHlsZShlLCBudWxsKSA6IGkoZSkuY29tcHV0ZWRTdHlsZSA/IGkoZSkuY29tcHV0ZWRTdHlsZSA6IGkoZSkuY29tcHV0ZWRTdHlsZSA9IHQuZ2V0Q29tcHV0ZWRTdHlsZShlLCBudWxsKSwgXCJib3JkZXJDb2xvclwiID09PSByICYmIChyID0gXCJib3JkZXJUb3BDb2xvclwiKSwgbCA9IDkgPT09IGQgJiYgXCJmaWx0ZXJcIiA9PT0gciA/IGcuZ2V0UHJvcGVydHlWYWx1ZShyKSA6IGdbcl0sIChcIlwiID09PSBsIHx8IG51bGwgPT09IGwpICYmIChsID0gZS5zdHlsZVtyXSksIG4oKTtcbiAgICAgICAgICB9aWYgKFwiYXV0b1wiID09PSBsICYmIC9eKHRvcHxyaWdodHxib3R0b218bGVmdCkkL2kudGVzdChyKSkge1xuICAgICAgICAgICAgdmFyIG0gPSBzKGUsIFwicG9zaXRpb25cIik7KFwiZml4ZWRcIiA9PT0gbSB8fCBcImFic29sdXRlXCIgPT09IG0gJiYgL3RvcHxsZWZ0L2kudGVzdChyKSkgJiYgKGwgPSBmKGUpLnBvc2l0aW9uKClbcl0gKyBcInB4XCIpO1xuICAgICAgICAgIH1yZXR1cm4gbDtcbiAgICAgICAgfXZhciBsO2lmIChTLkhvb2tzLnJlZ2lzdGVyZWRbcl0pIHtcbiAgICAgICAgICB2YXIgdSA9IHIsXG4gICAgICAgICAgICAgIGMgPSBTLkhvb2tzLmdldFJvb3QodSk7biA9PT0gYSAmJiAobiA9IFMuZ2V0UHJvcGVydHlWYWx1ZShlLCBTLk5hbWVzLnByZWZpeENoZWNrKGMpWzBdKSksIFMuTm9ybWFsaXphdGlvbnMucmVnaXN0ZXJlZFtjXSAmJiAobiA9IFMuTm9ybWFsaXphdGlvbnMucmVnaXN0ZXJlZFtjXShcImV4dHJhY3RcIiwgZSwgbikpLCBsID0gUy5Ib29rcy5leHRyYWN0VmFsdWUodSwgbik7XG4gICAgICAgIH0gZWxzZSBpZiAoUy5Ob3JtYWxpemF0aW9ucy5yZWdpc3RlcmVkW3JdKSB7XG4gICAgICAgICAgdmFyIHAsIGc7cCA9IFMuTm9ybWFsaXphdGlvbnMucmVnaXN0ZXJlZFtyXShcIm5hbWVcIiwgZSksIFwidHJhbnNmb3JtXCIgIT09IHAgJiYgKGcgPSBzKGUsIFMuTmFtZXMucHJlZml4Q2hlY2socClbMF0pLCBTLlZhbHVlcy5pc0NTU051bGxWYWx1ZShnKSAmJiBTLkhvb2tzLnRlbXBsYXRlc1tyXSAmJiAoZyA9IFMuSG9va3MudGVtcGxhdGVzW3JdWzFdKSksIGwgPSBTLk5vcm1hbGl6YXRpb25zLnJlZ2lzdGVyZWRbcl0oXCJleHRyYWN0XCIsIGUsIGcpO1xuICAgICAgICB9aWYgKCEvXltcXGQtXS8udGVzdChsKSkgaWYgKGkoZSkgJiYgaShlKS5pc1NWRyAmJiBTLk5hbWVzLlNWR0F0dHJpYnV0ZShyKSkge1xuICAgICAgICAgIGlmICgvXihoZWlnaHR8d2lkdGgpJC9pLnRlc3QocikpIHRyeSB7XG4gICAgICAgICAgICBsID0gZS5nZXRCQm94KClbcl07XG4gICAgICAgICAgfSBjYXRjaCAobSkge1xuICAgICAgICAgICAgbCA9IDA7XG4gICAgICAgICAgfSBlbHNlIGwgPSBlLmdldEF0dHJpYnV0ZShyKTtcbiAgICAgICAgfSBlbHNlIGwgPSBzKGUsIFMuTmFtZXMucHJlZml4Q2hlY2socilbMF0pO3JldHVybiBTLlZhbHVlcy5pc0NTU051bGxWYWx1ZShsKSAmJiAobCA9IDApLCBiLmRlYnVnID49IDIgJiYgY29uc29sZS5sb2coXCJHZXQgXCIgKyByICsgXCI6IFwiICsgbCksIGw7XG4gICAgICB9LCBzZXRQcm9wZXJ0eVZhbHVlOiBmdW5jdGlvbiAoZSwgciwgYSwgbiwgbykge1xuICAgICAgICB2YXIgcyA9IHI7aWYgKFwic2Nyb2xsXCIgPT09IHIpIG8uY29udGFpbmVyID8gby5jb250YWluZXJbXCJzY3JvbGxcIiArIG8uZGlyZWN0aW9uXSA9IGEgOiBcIkxlZnRcIiA9PT0gby5kaXJlY3Rpb24gPyB0LnNjcm9sbFRvKGEsIG8uYWx0ZXJuYXRlVmFsdWUpIDogdC5zY3JvbGxUbyhvLmFsdGVybmF0ZVZhbHVlLCBhKTtlbHNlIGlmIChTLk5vcm1hbGl6YXRpb25zLnJlZ2lzdGVyZWRbcl0gJiYgXCJ0cmFuc2Zvcm1cIiA9PT0gUy5Ob3JtYWxpemF0aW9ucy5yZWdpc3RlcmVkW3JdKFwibmFtZVwiLCBlKSkgUy5Ob3JtYWxpemF0aW9ucy5yZWdpc3RlcmVkW3JdKFwiaW5qZWN0XCIsIGUsIGEpLCBzID0gXCJ0cmFuc2Zvcm1cIiwgYSA9IGkoZSkudHJhbnNmb3JtQ2FjaGVbcl07ZWxzZSB7XG4gICAgICAgICAgaWYgKFMuSG9va3MucmVnaXN0ZXJlZFtyXSkge1xuICAgICAgICAgICAgdmFyIGwgPSByLFxuICAgICAgICAgICAgICAgIHUgPSBTLkhvb2tzLmdldFJvb3Qocik7biA9IG4gfHwgUy5nZXRQcm9wZXJ0eVZhbHVlKGUsIHUpLCBhID0gUy5Ib29rcy5pbmplY3RWYWx1ZShsLCBhLCBuKSwgciA9IHU7XG4gICAgICAgICAgfWlmIChTLk5vcm1hbGl6YXRpb25zLnJlZ2lzdGVyZWRbcl0gJiYgKGEgPSBTLk5vcm1hbGl6YXRpb25zLnJlZ2lzdGVyZWRbcl0oXCJpbmplY3RcIiwgZSwgYSksIHIgPSBTLk5vcm1hbGl6YXRpb25zLnJlZ2lzdGVyZWRbcl0oXCJuYW1lXCIsIGUpKSwgcyA9IFMuTmFtZXMucHJlZml4Q2hlY2socilbMF0sIDggPj0gZCkgdHJ5IHtcbiAgICAgICAgICAgIGUuc3R5bGVbc10gPSBhO1xuICAgICAgICAgIH0gY2F0Y2ggKGMpIHtcbiAgICAgICAgICAgIGIuZGVidWcgJiYgY29uc29sZS5sb2coXCJCcm93c2VyIGRvZXMgbm90IHN1cHBvcnQgW1wiICsgYSArIFwiXSBmb3IgW1wiICsgcyArIFwiXVwiKTtcbiAgICAgICAgICB9IGVsc2UgaShlKSAmJiBpKGUpLmlzU1ZHICYmIFMuTmFtZXMuU1ZHQXR0cmlidXRlKHIpID8gZS5zZXRBdHRyaWJ1dGUociwgYSkgOiBlLnN0eWxlW3NdID0gYTtiLmRlYnVnID49IDIgJiYgY29uc29sZS5sb2coXCJTZXQgXCIgKyByICsgXCIgKFwiICsgcyArIFwiKTogXCIgKyBhKTtcbiAgICAgICAgfXJldHVybiBbcywgYV07XG4gICAgICB9LCBmbHVzaFRyYW5zZm9ybUNhY2hlOiBmdW5jdGlvbiAoZSkge1xuICAgICAgICBmdW5jdGlvbiB0KHQpIHtcbiAgICAgICAgICByZXR1cm4gcGFyc2VGbG9hdChTLmdldFByb3BlcnR5VmFsdWUoZSwgdCkpO1xuICAgICAgICB9dmFyIHIgPSBcIlwiO2lmICgoZCB8fCBiLlN0YXRlLmlzQW5kcm9pZCAmJiAhYi5TdGF0ZS5pc0Nocm9tZSkgJiYgaShlKS5pc1NWRykge1xuICAgICAgICAgIHZhciBhID0geyB0cmFuc2xhdGU6IFt0KFwidHJhbnNsYXRlWFwiKSwgdChcInRyYW5zbGF0ZVlcIildLCBza2V3WDogW3QoXCJza2V3WFwiKV0sIHNrZXdZOiBbdChcInNrZXdZXCIpXSwgc2NhbGU6IDEgIT09IHQoXCJzY2FsZVwiKSA/IFt0KFwic2NhbGVcIiksIHQoXCJzY2FsZVwiKV0gOiBbdChcInNjYWxlWFwiKSwgdChcInNjYWxlWVwiKV0sIHJvdGF0ZTogW3QoXCJyb3RhdGVaXCIpLCAwLCAwXSB9O2YuZWFjaChpKGUpLnRyYW5zZm9ybUNhY2hlLCBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgL150cmFuc2xhdGUvaS50ZXN0KGUpID8gZSA9IFwidHJhbnNsYXRlXCIgOiAvXnNjYWxlL2kudGVzdChlKSA/IGUgPSBcInNjYWxlXCIgOiAvXnJvdGF0ZS9pLnRlc3QoZSkgJiYgKGUgPSBcInJvdGF0ZVwiKSwgYVtlXSAmJiAociArPSBlICsgXCIoXCIgKyBhW2VdLmpvaW4oXCIgXCIpICsgXCIpIFwiLCBkZWxldGUgYVtlXSk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdmFyIG4sIG87Zi5lYWNoKGkoZSkudHJhbnNmb3JtQ2FjaGUsIGZ1bmN0aW9uICh0KSB7XG4gICAgICAgICAgICByZXR1cm4gbiA9IGkoZSkudHJhbnNmb3JtQ2FjaGVbdF0sIFwidHJhbnNmb3JtUGVyc3BlY3RpdmVcIiA9PT0gdCA/IChvID0gbiwgITApIDogKDkgPT09IGQgJiYgXCJyb3RhdGVaXCIgPT09IHQgJiYgKHQgPSBcInJvdGF0ZVwiKSwgdm9pZCAociArPSB0ICsgbiArIFwiIFwiKSk7XG4gICAgICAgICAgfSksIG8gJiYgKHIgPSBcInBlcnNwZWN0aXZlXCIgKyBvICsgXCIgXCIgKyByKTtcbiAgICAgICAgfVMuc2V0UHJvcGVydHlWYWx1ZShlLCBcInRyYW5zZm9ybVwiLCByKTtcbiAgICAgIH0gfTtTLkhvb2tzLnJlZ2lzdGVyKCksIFMuTm9ybWFsaXphdGlvbnMucmVnaXN0ZXIoKSwgYi5ob29rID0gZnVuY3Rpb24gKGUsIHQsIHIpIHtcbiAgICAgIHZhciBuID0gYTtyZXR1cm4gZSA9IG8oZSksIGYuZWFjaChlLCBmdW5jdGlvbiAoZSwgbykge1xuICAgICAgICBpZiAoaShvKSA9PT0gYSAmJiBiLmluaXQobyksIHIgPT09IGEpIG4gPT09IGEgJiYgKG4gPSBiLkNTUy5nZXRQcm9wZXJ0eVZhbHVlKG8sIHQpKTtlbHNlIHtcbiAgICAgICAgICB2YXIgcyA9IGIuQ1NTLnNldFByb3BlcnR5VmFsdWUobywgdCwgcik7XCJ0cmFuc2Zvcm1cIiA9PT0gc1swXSAmJiBiLkNTUy5mbHVzaFRyYW5zZm9ybUNhY2hlKG8pLCBuID0gcztcbiAgICAgICAgfVxuICAgICAgfSksIG47XG4gICAgfTt2YXIgUCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIGZ1bmN0aW9uIGUoKSB7XG4gICAgICAgIHJldHVybiBzID8gay5wcm9taXNlIHx8IG51bGwgOiBsO1xuICAgICAgfWZ1bmN0aW9uIG4oKSB7XG4gICAgICAgIGZ1bmN0aW9uIGUoZSkge1xuICAgICAgICAgIGZ1bmN0aW9uIHAoZSwgdCkge1xuICAgICAgICAgICAgdmFyIHIgPSBhLFxuICAgICAgICAgICAgICAgIG4gPSBhLFxuICAgICAgICAgICAgICAgIGkgPSBhO3JldHVybiBtLmlzQXJyYXkoZSkgPyAociA9IGVbMF0sICFtLmlzQXJyYXkoZVsxXSkgJiYgL15bXFxkLV0vLnRlc3QoZVsxXSkgfHwgbS5pc0Z1bmN0aW9uKGVbMV0pIHx8IFMuUmVnRXguaXNIZXgudGVzdChlWzFdKSA/IGkgPSBlWzFdIDogKG0uaXNTdHJpbmcoZVsxXSkgJiYgIVMuUmVnRXguaXNIZXgudGVzdChlWzFdKSB8fCBtLmlzQXJyYXkoZVsxXSkpICYmIChuID0gdCA/IGVbMV0gOiB1KGVbMV0sIHMuZHVyYXRpb24pLCBlWzJdICE9PSBhICYmIChpID0gZVsyXSkpKSA6IHIgPSBlLCB0IHx8IChuID0gbiB8fCBzLmVhc2luZyksIG0uaXNGdW5jdGlvbihyKSAmJiAociA9IHIuY2FsbChvLCBWLCB3KSksIG0uaXNGdW5jdGlvbihpKSAmJiAoaSA9IGkuY2FsbChvLCBWLCB3KSksIFtyIHx8IDAsIG4sIGldO1xuICAgICAgICAgIH1mdW5jdGlvbiBkKGUsIHQpIHtcbiAgICAgICAgICAgIHZhciByLCBhO3JldHVybiBhID0gKHQgfHwgXCIwXCIpLnRvU3RyaW5nKCkudG9Mb3dlckNhc2UoKS5yZXBsYWNlKC9bJUEtel0rJC8sIGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICAgIHJldHVybiByID0gZSwgXCJcIjtcbiAgICAgICAgICAgIH0pLCByIHx8IChyID0gUy5WYWx1ZXMuZ2V0VW5pdFR5cGUoZSkpLCBbYSwgcl07XG4gICAgICAgICAgfWZ1bmN0aW9uIGgoKSB7XG4gICAgICAgICAgICB2YXIgZSA9IHsgbXlQYXJlbnQ6IG8ucGFyZW50Tm9kZSB8fCByLmJvZHksIHBvc2l0aW9uOiBTLmdldFByb3BlcnR5VmFsdWUobywgXCJwb3NpdGlvblwiKSwgZm9udFNpemU6IFMuZ2V0UHJvcGVydHlWYWx1ZShvLCBcImZvbnRTaXplXCIpIH0sXG4gICAgICAgICAgICAgICAgYSA9IGUucG9zaXRpb24gPT09IEwubGFzdFBvc2l0aW9uICYmIGUubXlQYXJlbnQgPT09IEwubGFzdFBhcmVudCxcbiAgICAgICAgICAgICAgICBuID0gZS5mb250U2l6ZSA9PT0gTC5sYXN0Rm9udFNpemU7TC5sYXN0UGFyZW50ID0gZS5teVBhcmVudCwgTC5sYXN0UG9zaXRpb24gPSBlLnBvc2l0aW9uLCBMLmxhc3RGb250U2l6ZSA9IGUuZm9udFNpemU7dmFyIHMgPSAxMDAsXG4gICAgICAgICAgICAgICAgbCA9IHt9O2lmIChuICYmIGEpIGwuZW1Ub1B4ID0gTC5sYXN0RW1Ub1B4LCBsLnBlcmNlbnRUb1B4V2lkdGggPSBMLmxhc3RQZXJjZW50VG9QeFdpZHRoLCBsLnBlcmNlbnRUb1B4SGVpZ2h0ID0gTC5sYXN0UGVyY2VudFRvUHhIZWlnaHQ7ZWxzZSB7XG4gICAgICAgICAgICAgIHZhciB1ID0gaShvKS5pc1NWRyA/IHIuY3JlYXRlRWxlbWVudE5TKFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiwgXCJyZWN0XCIpIDogci5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO2IuaW5pdCh1KSwgZS5teVBhcmVudC5hcHBlbmRDaGlsZCh1KSwgZi5lYWNoKFtcIm92ZXJmbG93XCIsIFwib3ZlcmZsb3dYXCIsIFwib3ZlcmZsb3dZXCJdLCBmdW5jdGlvbiAoZSwgdCkge1xuICAgICAgICAgICAgICAgIGIuQ1NTLnNldFByb3BlcnR5VmFsdWUodSwgdCwgXCJoaWRkZW5cIik7XG4gICAgICAgICAgICAgIH0pLCBiLkNTUy5zZXRQcm9wZXJ0eVZhbHVlKHUsIFwicG9zaXRpb25cIiwgZS5wb3NpdGlvbiksIGIuQ1NTLnNldFByb3BlcnR5VmFsdWUodSwgXCJmb250U2l6ZVwiLCBlLmZvbnRTaXplKSwgYi5DU1Muc2V0UHJvcGVydHlWYWx1ZSh1LCBcImJveFNpemluZ1wiLCBcImNvbnRlbnQtYm94XCIpLCBmLmVhY2goW1wibWluV2lkdGhcIiwgXCJtYXhXaWR0aFwiLCBcIndpZHRoXCIsIFwibWluSGVpZ2h0XCIsIFwibWF4SGVpZ2h0XCIsIFwiaGVpZ2h0XCJdLCBmdW5jdGlvbiAoZSwgdCkge1xuICAgICAgICAgICAgICAgIGIuQ1NTLnNldFByb3BlcnR5VmFsdWUodSwgdCwgcyArIFwiJVwiKTtcbiAgICAgICAgICAgICAgfSksIGIuQ1NTLnNldFByb3BlcnR5VmFsdWUodSwgXCJwYWRkaW5nTGVmdFwiLCBzICsgXCJlbVwiKSwgbC5wZXJjZW50VG9QeFdpZHRoID0gTC5sYXN0UGVyY2VudFRvUHhXaWR0aCA9IChwYXJzZUZsb2F0KFMuZ2V0UHJvcGVydHlWYWx1ZSh1LCBcIndpZHRoXCIsIG51bGwsICEwKSkgfHwgMSkgLyBzLCBsLnBlcmNlbnRUb1B4SGVpZ2h0ID0gTC5sYXN0UGVyY2VudFRvUHhIZWlnaHQgPSAocGFyc2VGbG9hdChTLmdldFByb3BlcnR5VmFsdWUodSwgXCJoZWlnaHRcIiwgbnVsbCwgITApKSB8fCAxKSAvIHMsIGwuZW1Ub1B4ID0gTC5sYXN0RW1Ub1B4ID0gKHBhcnNlRmxvYXQoUy5nZXRQcm9wZXJ0eVZhbHVlKHUsIFwicGFkZGluZ0xlZnRcIikpIHx8IDEpIC8gcywgZS5teVBhcmVudC5yZW1vdmVDaGlsZCh1KTtcbiAgICAgICAgICAgIH1yZXR1cm4gbnVsbCA9PT0gTC5yZW1Ub1B4ICYmIChMLnJlbVRvUHggPSBwYXJzZUZsb2F0KFMuZ2V0UHJvcGVydHlWYWx1ZShyLmJvZHksIFwiZm9udFNpemVcIikpIHx8IDE2KSwgbnVsbCA9PT0gTC52d1RvUHggJiYgKEwudndUb1B4ID0gcGFyc2VGbG9hdCh0LmlubmVyV2lkdGgpIC8gMTAwLCBMLnZoVG9QeCA9IHBhcnNlRmxvYXQodC5pbm5lckhlaWdodCkgLyAxMDApLCBsLnJlbVRvUHggPSBMLnJlbVRvUHgsIGwudndUb1B4ID0gTC52d1RvUHgsIGwudmhUb1B4ID0gTC52aFRvUHgsIGIuZGVidWcgPj0gMSAmJiBjb25zb2xlLmxvZyhcIlVuaXQgcmF0aW9zOiBcIiArIEpTT04uc3RyaW5naWZ5KGwpLCBvKSwgbDtcbiAgICAgICAgICB9aWYgKHMuYmVnaW4gJiYgMCA9PT0gVikgdHJ5IHtcbiAgICAgICAgICAgIHMuYmVnaW4uY2FsbChnLCBnKTtcbiAgICAgICAgICB9IGNhdGNoICh4KSB7XG4gICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgdGhyb3cgeDtcbiAgICAgICAgICAgIH0sIDEpO1xuICAgICAgICAgIH1pZiAoXCJzY3JvbGxcIiA9PT0gQSkge1xuICAgICAgICAgICAgdmFyIFAsXG4gICAgICAgICAgICAgICAgQyxcbiAgICAgICAgICAgICAgICBULFxuICAgICAgICAgICAgICAgIEYgPSAvXngkL2kudGVzdChzLmF4aXMpID8gXCJMZWZ0XCIgOiBcIlRvcFwiLFxuICAgICAgICAgICAgICAgIGogPSBwYXJzZUZsb2F0KHMub2Zmc2V0KSB8fCAwO3MuY29udGFpbmVyID8gbS5pc1dyYXBwZWQocy5jb250YWluZXIpIHx8IG0uaXNOb2RlKHMuY29udGFpbmVyKSA/IChzLmNvbnRhaW5lciA9IHMuY29udGFpbmVyWzBdIHx8IHMuY29udGFpbmVyLCBQID0gcy5jb250YWluZXJbXCJzY3JvbGxcIiArIEZdLCBUID0gUCArIGYobykucG9zaXRpb24oKVtGLnRvTG93ZXJDYXNlKCldICsgaikgOiBzLmNvbnRhaW5lciA9IG51bGwgOiAoUCA9IGIuU3RhdGUuc2Nyb2xsQW5jaG9yW2IuU3RhdGVbXCJzY3JvbGxQcm9wZXJ0eVwiICsgRl1dLCBDID0gYi5TdGF0ZS5zY3JvbGxBbmNob3JbYi5TdGF0ZVtcInNjcm9sbFByb3BlcnR5XCIgKyAoXCJMZWZ0XCIgPT09IEYgPyBcIlRvcFwiIDogXCJMZWZ0XCIpXV0sIFQgPSBmKG8pLm9mZnNldCgpW0YudG9Mb3dlckNhc2UoKV0gKyBqKSwgbCA9IHsgc2Nyb2xsOiB7IHJvb3RQcm9wZXJ0eVZhbHVlOiAhMSwgc3RhcnRWYWx1ZTogUCwgY3VycmVudFZhbHVlOiBQLCBlbmRWYWx1ZTogVCwgdW5pdFR5cGU6IFwiXCIsIGVhc2luZzogcy5lYXNpbmcsIHNjcm9sbERhdGE6IHsgY29udGFpbmVyOiBzLmNvbnRhaW5lciwgZGlyZWN0aW9uOiBGLCBhbHRlcm5hdGVWYWx1ZTogQyB9IH0sIGVsZW1lbnQ6IG8gfSwgYi5kZWJ1ZyAmJiBjb25zb2xlLmxvZyhcInR3ZWVuc0NvbnRhaW5lciAoc2Nyb2xsKTogXCIsIGwuc2Nyb2xsLCBvKTtcbiAgICAgICAgICB9IGVsc2UgaWYgKFwicmV2ZXJzZVwiID09PSBBKSB7XG4gICAgICAgICAgICBpZiAoIWkobykudHdlZW5zQ29udGFpbmVyKSByZXR1cm4gdm9pZCBmLmRlcXVldWUobywgcy5xdWV1ZSk7XCJub25lXCIgPT09IGkobykub3B0cy5kaXNwbGF5ICYmIChpKG8pLm9wdHMuZGlzcGxheSA9IFwiYXV0b1wiKSwgXCJoaWRkZW5cIiA9PT0gaShvKS5vcHRzLnZpc2liaWxpdHkgJiYgKGkobykub3B0cy52aXNpYmlsaXR5ID0gXCJ2aXNpYmxlXCIpLCBpKG8pLm9wdHMubG9vcCA9ICExLCBpKG8pLm9wdHMuYmVnaW4gPSBudWxsLCBpKG8pLm9wdHMuY29tcGxldGUgPSBudWxsLCB2LmVhc2luZyB8fCBkZWxldGUgcy5lYXNpbmcsIHYuZHVyYXRpb24gfHwgZGVsZXRlIHMuZHVyYXRpb24sIHMgPSBmLmV4dGVuZCh7fSwgaShvKS5vcHRzLCBzKTt2YXIgRSA9IGYuZXh0ZW5kKCEwLCB7fSwgaShvKS50d2VlbnNDb250YWluZXIpO2ZvciAodmFyIEggaW4gRSkge1xuICAgICAgICAgICAgICBpZiAoXCJlbGVtZW50XCIgIT09IEgpIHtcbiAgICAgICAgICAgICAgICB2YXIgTiA9IEVbSF0uc3RhcnRWYWx1ZTtFW0hdLnN0YXJ0VmFsdWUgPSBFW0hdLmN1cnJlbnRWYWx1ZSA9IEVbSF0uZW5kVmFsdWUsIEVbSF0uZW5kVmFsdWUgPSBOLCBtLmlzRW1wdHlPYmplY3QodikgfHwgKEVbSF0uZWFzaW5nID0gcy5lYXNpbmcpLCBiLmRlYnVnICYmIGNvbnNvbGUubG9nKFwicmV2ZXJzZSB0d2VlbnNDb250YWluZXIgKFwiICsgSCArIFwiKTogXCIgKyBKU09OLnN0cmluZ2lmeShFW0hdKSwgbyk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1sID0gRTtcbiAgICAgICAgICB9IGVsc2UgaWYgKFwic3RhcnRcIiA9PT0gQSkge1xuICAgICAgICAgICAgdmFyIEU7aShvKS50d2VlbnNDb250YWluZXIgJiYgaShvKS5pc0FuaW1hdGluZyA9PT0gITAgJiYgKEUgPSBpKG8pLnR3ZWVuc0NvbnRhaW5lciksIGYuZWFjaCh5LCBmdW5jdGlvbiAoZSwgdCkge1xuICAgICAgICAgICAgICBpZiAoUmVnRXhwKFwiXlwiICsgUy5MaXN0cy5jb2xvcnMuam9pbihcIiR8XlwiKSArIFwiJFwiKS50ZXN0KGUpKSB7XG4gICAgICAgICAgICAgICAgdmFyIHIgPSBwKHQsICEwKSxcbiAgICAgICAgICAgICAgICAgICAgbiA9IHJbMF0sXG4gICAgICAgICAgICAgICAgICAgIG8gPSByWzFdLFxuICAgICAgICAgICAgICAgICAgICBpID0gclsyXTtpZiAoUy5SZWdFeC5pc0hleC50ZXN0KG4pKSB7XG4gICAgICAgICAgICAgICAgICBmb3IgKHZhciBzID0gW1wiUmVkXCIsIFwiR3JlZW5cIiwgXCJCbHVlXCJdLCBsID0gUy5WYWx1ZXMuaGV4VG9SZ2IobiksIHUgPSBpID8gUy5WYWx1ZXMuaGV4VG9SZ2IoaSkgOiBhLCBjID0gMDsgYyA8IHMubGVuZ3RoOyBjKyspIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGYgPSBbbFtjXV07byAmJiBmLnB1c2gobyksIHUgIT09IGEgJiYgZi5wdXNoKHVbY10pLCB5W2UgKyBzW2NdXSA9IGY7XG4gICAgICAgICAgICAgICAgICB9ZGVsZXRlIHlbZV07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtmb3IgKHZhciB6IGluIHkpIHtcbiAgICAgICAgICAgICAgdmFyIE8gPSBwKHlbel0pLFxuICAgICAgICAgICAgICAgICAgcSA9IE9bMF0sXG4gICAgICAgICAgICAgICAgICAkID0gT1sxXSxcbiAgICAgICAgICAgICAgICAgIE0gPSBPWzJdO3ogPSBTLk5hbWVzLmNhbWVsQ2FzZSh6KTt2YXIgSSA9IFMuSG9va3MuZ2V0Um9vdCh6KSxcbiAgICAgICAgICAgICAgICAgIEIgPSAhMTtpZiAoaShvKS5pc1NWRyB8fCBcInR3ZWVuXCIgPT09IEkgfHwgUy5OYW1lcy5wcmVmaXhDaGVjayhJKVsxXSAhPT0gITEgfHwgUy5Ob3JtYWxpemF0aW9ucy5yZWdpc3RlcmVkW0ldICE9PSBhKSB7XG4gICAgICAgICAgICAgICAgKHMuZGlzcGxheSAhPT0gYSAmJiBudWxsICE9PSBzLmRpc3BsYXkgJiYgXCJub25lXCIgIT09IHMuZGlzcGxheSB8fCBzLnZpc2liaWxpdHkgIT09IGEgJiYgXCJoaWRkZW5cIiAhPT0gcy52aXNpYmlsaXR5KSAmJiAvb3BhY2l0eXxmaWx0ZXIvLnRlc3QoeikgJiYgIU0gJiYgMCAhPT0gcSAmJiAoTSA9IDApLCBzLl9jYWNoZVZhbHVlcyAmJiBFICYmIEVbel0gPyAoTSA9PT0gYSAmJiAoTSA9IEVbel0uZW5kVmFsdWUgKyBFW3pdLnVuaXRUeXBlKSwgQiA9IGkobykucm9vdFByb3BlcnR5VmFsdWVDYWNoZVtJXSkgOiBTLkhvb2tzLnJlZ2lzdGVyZWRbel0gPyBNID09PSBhID8gKEIgPSBTLmdldFByb3BlcnR5VmFsdWUobywgSSksIE0gPSBTLmdldFByb3BlcnR5VmFsdWUobywgeiwgQikpIDogQiA9IFMuSG9va3MudGVtcGxhdGVzW0ldWzFdIDogTSA9PT0gYSAmJiAoTSA9IFMuZ2V0UHJvcGVydHlWYWx1ZShvLCB6KSk7dmFyIFcsXG4gICAgICAgICAgICAgICAgICAgIEcsXG4gICAgICAgICAgICAgICAgICAgIFksXG4gICAgICAgICAgICAgICAgICAgIEQgPSAhMTtpZiAoVyA9IGQoeiwgTSksIE0gPSBXWzBdLCBZID0gV1sxXSwgVyA9IGQoeiwgcSksIHEgPSBXWzBdLnJlcGxhY2UoL14oWystXFwvKl0pPS8sIGZ1bmN0aW9uIChlLCB0KSB7XG4gICAgICAgICAgICAgICAgICByZXR1cm4gRCA9IHQsIFwiXCI7XG4gICAgICAgICAgICAgICAgfSksIEcgPSBXWzFdLCBNID0gcGFyc2VGbG9hdChNKSB8fCAwLCBxID0gcGFyc2VGbG9hdChxKSB8fCAwLCBcIiVcIiA9PT0gRyAmJiAoL14oZm9udFNpemV8bGluZUhlaWdodCkkLy50ZXN0KHopID8gKHEgLz0gMTAwLCBHID0gXCJlbVwiKSA6IC9ec2NhbGUvLnRlc3QoeikgPyAocSAvPSAxMDAsIEcgPSBcIlwiKSA6IC8oUmVkfEdyZWVufEJsdWUpJC9pLnRlc3QoeikgJiYgKHEgPSBxIC8gMTAwICogMjU1LCBHID0gXCJcIikpLCAvW1xcLypdLy50ZXN0KEQpKSBHID0gWTtlbHNlIGlmIChZICE9PSBHICYmIDAgIT09IE0pIGlmICgwID09PSBxKSBHID0gWTtlbHNlIHtcbiAgICAgICAgICAgICAgICAgIG4gPSBuIHx8IGgoKTt2YXIgUSA9IC9tYXJnaW58cGFkZGluZ3xsZWZ0fHJpZ2h0fHdpZHRofHRleHR8d29yZHxsZXR0ZXIvaS50ZXN0KHopIHx8IC9YJC8udGVzdCh6KSB8fCBcInhcIiA9PT0geiA/IFwieFwiIDogXCJ5XCI7c3dpdGNoIChZKSB7Y2FzZSBcIiVcIjpcbiAgICAgICAgICAgICAgICAgICAgICBNICo9IFwieFwiID09PSBRID8gbi5wZXJjZW50VG9QeFdpZHRoIDogbi5wZXJjZW50VG9QeEhlaWdodDticmVhaztjYXNlIFwicHhcIjpcbiAgICAgICAgICAgICAgICAgICAgICBicmVhaztkZWZhdWx0OlxuICAgICAgICAgICAgICAgICAgICAgIE0gKj0gbltZICsgXCJUb1B4XCJdO31zd2l0Y2ggKEcpIHtjYXNlIFwiJVwiOlxuICAgICAgICAgICAgICAgICAgICAgIE0gKj0gMSAvIChcInhcIiA9PT0gUSA/IG4ucGVyY2VudFRvUHhXaWR0aCA6IG4ucGVyY2VudFRvUHhIZWlnaHQpO2JyZWFrO2Nhc2UgXCJweFwiOlxuICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO2RlZmF1bHQ6XG4gICAgICAgICAgICAgICAgICAgICAgTSAqPSAxIC8gbltHICsgXCJUb1B4XCJdO31cbiAgICAgICAgICAgICAgICB9c3dpdGNoIChEKSB7Y2FzZSBcIitcIjpcbiAgICAgICAgICAgICAgICAgICAgcSA9IE0gKyBxO2JyZWFrO2Nhc2UgXCItXCI6XG4gICAgICAgICAgICAgICAgICAgIHEgPSBNIC0gcTticmVhaztjYXNlIFwiKlwiOlxuICAgICAgICAgICAgICAgICAgICBxID0gTSAqIHE7YnJlYWs7Y2FzZSBcIi9cIjpcbiAgICAgICAgICAgICAgICAgICAgcSA9IE0gLyBxO31sW3pdID0geyByb290UHJvcGVydHlWYWx1ZTogQiwgc3RhcnRWYWx1ZTogTSwgY3VycmVudFZhbHVlOiBNLCBlbmRWYWx1ZTogcSwgdW5pdFR5cGU6IEcsIGVhc2luZzogJCB9LCBiLmRlYnVnICYmIGNvbnNvbGUubG9nKFwidHdlZW5zQ29udGFpbmVyIChcIiArIHogKyBcIik6IFwiICsgSlNPTi5zdHJpbmdpZnkobFt6XSksIG8pO1xuICAgICAgICAgICAgICB9IGVsc2UgYi5kZWJ1ZyAmJiBjb25zb2xlLmxvZyhcIlNraXBwaW5nIFtcIiArIEkgKyBcIl0gZHVlIHRvIGEgbGFjayBvZiBicm93c2VyIHN1cHBvcnQuXCIpO1xuICAgICAgICAgICAgfWwuZWxlbWVudCA9IG87XG4gICAgICAgICAgfWwuZWxlbWVudCAmJiAoUy5WYWx1ZXMuYWRkQ2xhc3MobywgXCJ2ZWxvY2l0eS1hbmltYXRpbmdcIiksIFIucHVzaChsKSwgXCJcIiA9PT0gcy5xdWV1ZSAmJiAoaShvKS50d2VlbnNDb250YWluZXIgPSBsLCBpKG8pLm9wdHMgPSBzKSwgaShvKS5pc0FuaW1hdGluZyA9ICEwLCBWID09PSB3IC0gMSA/IChiLlN0YXRlLmNhbGxzLnB1c2goW1IsIGcsIHMsIG51bGwsIGsucmVzb2x2ZXJdKSwgYi5TdGF0ZS5pc1RpY2tpbmcgPT09ICExICYmIChiLlN0YXRlLmlzVGlja2luZyA9ICEwLCBjKCkpKSA6IFYrKyk7XG4gICAgICAgIH12YXIgbixcbiAgICAgICAgICAgIG8gPSB0aGlzLFxuICAgICAgICAgICAgcyA9IGYuZXh0ZW5kKHt9LCBiLmRlZmF1bHRzLCB2KSxcbiAgICAgICAgICAgIGwgPSB7fTtzd2l0Y2ggKGkobykgPT09IGEgJiYgYi5pbml0KG8pLCBwYXJzZUZsb2F0KHMuZGVsYXkpICYmIHMucXVldWUgIT09ICExICYmIGYucXVldWUobywgcy5xdWV1ZSwgZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICBiLnZlbG9jaXR5UXVldWVFbnRyeUZsYWcgPSAhMCwgaShvKS5kZWxheVRpbWVyID0geyBzZXRUaW1lb3V0OiBzZXRUaW1lb3V0KGUsIHBhcnNlRmxvYXQocy5kZWxheSkpLCBuZXh0OiBlIH07XG4gICAgICAgIH0pLCBzLmR1cmF0aW9uLnRvU3RyaW5nKCkudG9Mb3dlckNhc2UoKSkge2Nhc2UgXCJmYXN0XCI6XG4gICAgICAgICAgICBzLmR1cmF0aW9uID0gMjAwO2JyZWFrO2Nhc2UgXCJub3JtYWxcIjpcbiAgICAgICAgICAgIHMuZHVyYXRpb24gPSBoO2JyZWFrO2Nhc2UgXCJzbG93XCI6XG4gICAgICAgICAgICBzLmR1cmF0aW9uID0gNjAwO2JyZWFrO2RlZmF1bHQ6XG4gICAgICAgICAgICBzLmR1cmF0aW9uID0gcGFyc2VGbG9hdChzLmR1cmF0aW9uKSB8fCAxO31iLm1vY2sgIT09ICExICYmIChiLm1vY2sgPT09ICEwID8gcy5kdXJhdGlvbiA9IHMuZGVsYXkgPSAxIDogKHMuZHVyYXRpb24gKj0gcGFyc2VGbG9hdChiLm1vY2spIHx8IDEsIHMuZGVsYXkgKj0gcGFyc2VGbG9hdChiLm1vY2spIHx8IDEpKSwgcy5lYXNpbmcgPSB1KHMuZWFzaW5nLCBzLmR1cmF0aW9uKSwgcy5iZWdpbiAmJiAhbS5pc0Z1bmN0aW9uKHMuYmVnaW4pICYmIChzLmJlZ2luID0gbnVsbCksIHMucHJvZ3Jlc3MgJiYgIW0uaXNGdW5jdGlvbihzLnByb2dyZXNzKSAmJiAocy5wcm9ncmVzcyA9IG51bGwpLCBzLmNvbXBsZXRlICYmICFtLmlzRnVuY3Rpb24ocy5jb21wbGV0ZSkgJiYgKHMuY29tcGxldGUgPSBudWxsKSwgcy5kaXNwbGF5ICE9PSBhICYmIG51bGwgIT09IHMuZGlzcGxheSAmJiAocy5kaXNwbGF5ID0gcy5kaXNwbGF5LnRvU3RyaW5nKCkudG9Mb3dlckNhc2UoKSwgXCJhdXRvXCIgPT09IHMuZGlzcGxheSAmJiAocy5kaXNwbGF5ID0gYi5DU1MuVmFsdWVzLmdldERpc3BsYXlUeXBlKG8pKSksIHMudmlzaWJpbGl0eSAhPT0gYSAmJiBudWxsICE9PSBzLnZpc2liaWxpdHkgJiYgKHMudmlzaWJpbGl0eSA9IHMudmlzaWJpbGl0eS50b1N0cmluZygpLnRvTG93ZXJDYXNlKCkpLCBzLm1vYmlsZUhBID0gcy5tb2JpbGVIQSAmJiBiLlN0YXRlLmlzTW9iaWxlICYmICFiLlN0YXRlLmlzR2luZ2VyYnJlYWQsIHMucXVldWUgPT09ICExID8gcy5kZWxheSA/IHNldFRpbWVvdXQoZSwgcy5kZWxheSkgOiBlKCkgOiBmLnF1ZXVlKG8sIHMucXVldWUsIGZ1bmN0aW9uICh0LCByKSB7XG4gICAgICAgICAgcmV0dXJuIHIgPT09ICEwID8gKGsucHJvbWlzZSAmJiBrLnJlc29sdmVyKGcpLCAhMCkgOiAoYi52ZWxvY2l0eVF1ZXVlRW50cnlGbGFnID0gITAsIHZvaWQgZSh0KSk7XG4gICAgICAgIH0pLCBcIlwiICE9PSBzLnF1ZXVlICYmIFwiZnhcIiAhPT0gcy5xdWV1ZSB8fCBcImlucHJvZ3Jlc3NcIiA9PT0gZi5xdWV1ZShvKVswXSB8fCBmLmRlcXVldWUobyk7XG4gICAgICB9dmFyIHMsXG4gICAgICAgICAgbCxcbiAgICAgICAgICBkLFxuICAgICAgICAgIGcsXG4gICAgICAgICAgeSxcbiAgICAgICAgICB2LFxuICAgICAgICAgIHggPSBhcmd1bWVudHNbMF0gJiYgKGFyZ3VtZW50c1swXS5wIHx8IGYuaXNQbGFpbk9iamVjdChhcmd1bWVudHNbMF0ucHJvcGVydGllcykgJiYgIWFyZ3VtZW50c1swXS5wcm9wZXJ0aWVzLm5hbWVzIHx8IG0uaXNTdHJpbmcoYXJndW1lbnRzWzBdLnByb3BlcnRpZXMpKTtpZiAobS5pc1dyYXBwZWQodGhpcykgPyAocyA9ICExLCBkID0gMCwgZyA9IHRoaXMsIGwgPSB0aGlzKSA6IChzID0gITAsIGQgPSAxLCBnID0geCA/IGFyZ3VtZW50c1swXS5lbGVtZW50cyB8fCBhcmd1bWVudHNbMF0uZSA6IGFyZ3VtZW50c1swXSksIGcgPSBvKGcpKSB7XG4gICAgICAgIHggPyAoeSA9IGFyZ3VtZW50c1swXS5wcm9wZXJ0aWVzIHx8IGFyZ3VtZW50c1swXS5wLCB2ID0gYXJndW1lbnRzWzBdLm9wdGlvbnMgfHwgYXJndW1lbnRzWzBdLm8pIDogKHkgPSBhcmd1bWVudHNbZF0sIHYgPSBhcmd1bWVudHNbZCArIDFdKTt2YXIgdyA9IGcubGVuZ3RoLFxuICAgICAgICAgICAgViA9IDA7aWYgKCEvXihzdG9wfGZpbmlzaCkkL2kudGVzdCh5KSAmJiAhZi5pc1BsYWluT2JqZWN0KHYpKSB7XG4gICAgICAgICAgdmFyIEMgPSBkICsgMTt2ID0ge307Zm9yICh2YXIgVCA9IEM7IFQgPCBhcmd1bWVudHMubGVuZ3RoOyBUKyspIHtcbiAgICAgICAgICAgIG0uaXNBcnJheShhcmd1bWVudHNbVF0pIHx8ICEvXihmYXN0fG5vcm1hbHxzbG93KSQvaS50ZXN0KGFyZ3VtZW50c1tUXSkgJiYgIS9eXFxkLy50ZXN0KGFyZ3VtZW50c1tUXSkgPyBtLmlzU3RyaW5nKGFyZ3VtZW50c1tUXSkgfHwgbS5pc0FycmF5KGFyZ3VtZW50c1tUXSkgPyB2LmVhc2luZyA9IGFyZ3VtZW50c1tUXSA6IG0uaXNGdW5jdGlvbihhcmd1bWVudHNbVF0pICYmICh2LmNvbXBsZXRlID0gYXJndW1lbnRzW1RdKSA6IHYuZHVyYXRpb24gPSBhcmd1bWVudHNbVF07XG4gICAgICAgICAgfVxuICAgICAgICB9dmFyIGsgPSB7IHByb21pc2U6IG51bGwsIHJlc29sdmVyOiBudWxsLCByZWplY3RlcjogbnVsbCB9O3MgJiYgYi5Qcm9taXNlICYmIChrLnByb21pc2UgPSBuZXcgYi5Qcm9taXNlKGZ1bmN0aW9uIChlLCB0KSB7XG4gICAgICAgICAgay5yZXNvbHZlciA9IGUsIGsucmVqZWN0ZXIgPSB0O1xuICAgICAgICB9KSk7dmFyIEE7c3dpdGNoICh5KSB7Y2FzZSBcInNjcm9sbFwiOlxuICAgICAgICAgICAgQSA9IFwic2Nyb2xsXCI7YnJlYWs7Y2FzZSBcInJldmVyc2VcIjpcbiAgICAgICAgICAgIEEgPSBcInJldmVyc2VcIjticmVhaztjYXNlIFwiZmluaXNoXCI6Y2FzZSBcInN0b3BcIjpcbiAgICAgICAgICAgIGYuZWFjaChnLCBmdW5jdGlvbiAoZSwgdCkge1xuICAgICAgICAgICAgICBpKHQpICYmIGkodCkuZGVsYXlUaW1lciAmJiAoY2xlYXJUaW1lb3V0KGkodCkuZGVsYXlUaW1lci5zZXRUaW1lb3V0KSwgaSh0KS5kZWxheVRpbWVyLm5leHQgJiYgaSh0KS5kZWxheVRpbWVyLm5leHQoKSwgZGVsZXRlIGkodCkuZGVsYXlUaW1lcik7XG4gICAgICAgICAgICB9KTt2YXIgRiA9IFtdO3JldHVybiBmLmVhY2goYi5TdGF0ZS5jYWxscywgZnVuY3Rpb24gKGUsIHQpIHtcbiAgICAgICAgICAgICAgdCAmJiBmLmVhY2godFsxXSwgZnVuY3Rpb24gKHIsIG4pIHtcbiAgICAgICAgICAgICAgICB2YXIgbyA9IHYgPT09IGEgPyBcIlwiIDogdjtyZXR1cm4gbyA9PT0gITAgfHwgdFsyXS5xdWV1ZSA9PT0gbyB8fCB2ID09PSBhICYmIHRbMl0ucXVldWUgPT09ICExID8gdm9pZCBmLmVhY2goZywgZnVuY3Rpb24gKHIsIGEpIHtcbiAgICAgICAgICAgICAgICAgIGEgPT09IG4gJiYgKCh2ID09PSAhMCB8fCBtLmlzU3RyaW5nKHYpKSAmJiAoZi5lYWNoKGYucXVldWUoYSwgbS5pc1N0cmluZyh2KSA/IHYgOiBcIlwiKSwgZnVuY3Rpb24gKGUsIHQpIHtcbiAgICAgICAgICAgICAgICAgICAgbS5pc0Z1bmN0aW9uKHQpICYmIHQobnVsbCwgITApO1xuICAgICAgICAgICAgICAgICAgfSksIGYucXVldWUoYSwgbS5pc1N0cmluZyh2KSA/IHYgOiBcIlwiLCBbXSkpLCBcInN0b3BcIiA9PT0geSA/IChpKGEpICYmIGkoYSkudHdlZW5zQ29udGFpbmVyICYmIG8gIT09ICExICYmIGYuZWFjaChpKGEpLnR3ZWVuc0NvbnRhaW5lciwgZnVuY3Rpb24gKGUsIHQpIHtcbiAgICAgICAgICAgICAgICAgICAgdC5lbmRWYWx1ZSA9IHQuY3VycmVudFZhbHVlO1xuICAgICAgICAgICAgICAgICAgfSksIEYucHVzaChlKSkgOiBcImZpbmlzaFwiID09PSB5ICYmICh0WzJdLmR1cmF0aW9uID0gMSkpO1xuICAgICAgICAgICAgICAgIH0pIDogITA7XG4gICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSksIFwic3RvcFwiID09PSB5ICYmIChmLmVhY2goRiwgZnVuY3Rpb24gKGUsIHQpIHtcbiAgICAgICAgICAgICAgcCh0LCAhMCk7XG4gICAgICAgICAgICB9KSwgay5wcm9taXNlICYmIGsucmVzb2x2ZXIoZykpLCBlKCk7ZGVmYXVsdDpcbiAgICAgICAgICAgIGlmICghZi5pc1BsYWluT2JqZWN0KHkpIHx8IG0uaXNFbXB0eU9iamVjdCh5KSkge1xuICAgICAgICAgICAgICBpZiAobS5pc1N0cmluZyh5KSAmJiBiLlJlZGlyZWN0c1t5XSkge1xuICAgICAgICAgICAgICAgIHZhciBqID0gZi5leHRlbmQoe30sIHYpLFxuICAgICAgICAgICAgICAgICAgICBFID0gai5kdXJhdGlvbixcbiAgICAgICAgICAgICAgICAgICAgSCA9IGouZGVsYXkgfHwgMDtyZXR1cm4gai5iYWNrd2FyZHMgPT09ICEwICYmIChnID0gZi5leHRlbmQoITAsIFtdLCBnKS5yZXZlcnNlKCkpLCBmLmVhY2goZywgZnVuY3Rpb24gKGUsIHQpIHtcbiAgICAgICAgICAgICAgICAgIHBhcnNlRmxvYXQoai5zdGFnZ2VyKSA/IGouZGVsYXkgPSBIICsgcGFyc2VGbG9hdChqLnN0YWdnZXIpICogZSA6IG0uaXNGdW5jdGlvbihqLnN0YWdnZXIpICYmIChqLmRlbGF5ID0gSCArIGouc3RhZ2dlci5jYWxsKHQsIGUsIHcpKSwgai5kcmFnICYmIChqLmR1cmF0aW9uID0gcGFyc2VGbG9hdChFKSB8fCAoL14oY2FsbG91dHx0cmFuc2l0aW9uKS8udGVzdCh5KSA/IDFlMyA6IGgpLCBqLmR1cmF0aW9uID0gTWF0aC5tYXgoai5kdXJhdGlvbiAqIChqLmJhY2t3YXJkcyA/IDEgLSBlIC8gdyA6IChlICsgMSkgLyB3KSwgLjc1ICogai5kdXJhdGlvbiwgMjAwKSksIGIuUmVkaXJlY3RzW3ldLmNhbGwodCwgdCwgaiB8fCB7fSwgZSwgdywgZywgay5wcm9taXNlID8gayA6IGEpO1xuICAgICAgICAgICAgICAgIH0pLCBlKCk7XG4gICAgICAgICAgICAgIH12YXIgTiA9IFwiVmVsb2NpdHk6IEZpcnN0IGFyZ3VtZW50IChcIiArIHkgKyBcIikgd2FzIG5vdCBhIHByb3BlcnR5IG1hcCwgYSBrbm93biBhY3Rpb24sIG9yIGEgcmVnaXN0ZXJlZCByZWRpcmVjdC4gQWJvcnRpbmcuXCI7cmV0dXJuIGsucHJvbWlzZSA/IGsucmVqZWN0ZXIobmV3IEVycm9yKE4pKSA6IGNvbnNvbGUubG9nKE4pLCBlKCk7XG4gICAgICAgICAgICB9QSA9IFwic3RhcnRcIjt9dmFyIEwgPSB7IGxhc3RQYXJlbnQ6IG51bGwsIGxhc3RQb3NpdGlvbjogbnVsbCwgbGFzdEZvbnRTaXplOiBudWxsLCBsYXN0UGVyY2VudFRvUHhXaWR0aDogbnVsbCwgbGFzdFBlcmNlbnRUb1B4SGVpZ2h0OiBudWxsLCBsYXN0RW1Ub1B4OiBudWxsLCByZW1Ub1B4OiBudWxsLCB2d1RvUHg6IG51bGwsIHZoVG9QeDogbnVsbCB9LFxuICAgICAgICAgICAgUiA9IFtdO2YuZWFjaChnLCBmdW5jdGlvbiAoZSwgdCkge1xuICAgICAgICAgIG0uaXNOb2RlKHQpICYmIG4uY2FsbCh0KTtcbiAgICAgICAgfSk7dmFyIHosXG4gICAgICAgICAgICBqID0gZi5leHRlbmQoe30sIGIuZGVmYXVsdHMsIHYpO2lmIChqLmxvb3AgPSBwYXJzZUludChqLmxvb3ApLCB6ID0gMiAqIGoubG9vcCAtIDEsIGoubG9vcCkgZm9yICh2YXIgTyA9IDA7IHogPiBPOyBPKyspIHtcbiAgICAgICAgICB2YXIgcSA9IHsgZGVsYXk6IGouZGVsYXksIHByb2dyZXNzOiBqLnByb2dyZXNzIH07TyA9PT0geiAtIDEgJiYgKHEuZGlzcGxheSA9IGouZGlzcGxheSwgcS52aXNpYmlsaXR5ID0gai52aXNpYmlsaXR5LCBxLmNvbXBsZXRlID0gai5jb21wbGV0ZSksIFAoZywgXCJyZXZlcnNlXCIsIHEpO1xuICAgICAgICB9cmV0dXJuIGUoKTtcbiAgICAgIH1cbiAgICB9O2IgPSBmLmV4dGVuZChQLCBiKSwgYi5hbmltYXRlID0gUDt2YXIgdyA9IHQucmVxdWVzdEFuaW1hdGlvbkZyYW1lIHx8IGc7cmV0dXJuIGIuU3RhdGUuaXNNb2JpbGUgfHwgci5oaWRkZW4gPT09IGEgfHwgci5hZGRFdmVudExpc3RlbmVyKFwidmlzaWJpbGl0eWNoYW5nZVwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICByLmhpZGRlbiA/ICh3ID0gZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgcmV0dXJuIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgIGUoITApO1xuICAgICAgICB9LCAxNik7XG4gICAgICB9LCBjKCkpIDogdyA9IHQucmVxdWVzdEFuaW1hdGlvbkZyYW1lIHx8IGc7XG4gICAgfSksIGUuVmVsb2NpdHkgPSBiLCBlICE9PSB0ICYmIChlLmZuLnZlbG9jaXR5ID0gUCwgZS5mbi52ZWxvY2l0eS5kZWZhdWx0cyA9IGIuZGVmYXVsdHMpLCBmLmVhY2goW1wiRG93blwiLCBcIlVwXCJdLCBmdW5jdGlvbiAoZSwgdCkge1xuICAgICAgYi5SZWRpcmVjdHNbXCJzbGlkZVwiICsgdF0gPSBmdW5jdGlvbiAoZSwgciwgbiwgbywgaSwgcykge1xuICAgICAgICB2YXIgbCA9IGYuZXh0ZW5kKHt9LCByKSxcbiAgICAgICAgICAgIHUgPSBsLmJlZ2luLFxuICAgICAgICAgICAgYyA9IGwuY29tcGxldGUsXG4gICAgICAgICAgICBwID0geyBoZWlnaHQ6IFwiXCIsIG1hcmdpblRvcDogXCJcIiwgbWFyZ2luQm90dG9tOiBcIlwiLCBwYWRkaW5nVG9wOiBcIlwiLCBwYWRkaW5nQm90dG9tOiBcIlwiIH0sXG4gICAgICAgICAgICBkID0ge307bC5kaXNwbGF5ID09PSBhICYmIChsLmRpc3BsYXkgPSBcIkRvd25cIiA9PT0gdCA/IFwiaW5saW5lXCIgPT09IGIuQ1NTLlZhbHVlcy5nZXREaXNwbGF5VHlwZShlKSA/IFwiaW5saW5lLWJsb2NrXCIgOiBcImJsb2NrXCIgOiBcIm5vbmVcIiksIGwuYmVnaW4gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgdSAmJiB1LmNhbGwoaSwgaSk7Zm9yICh2YXIgciBpbiBwKSB7XG4gICAgICAgICAgICBkW3JdID0gZS5zdHlsZVtyXTt2YXIgYSA9IGIuQ1NTLmdldFByb3BlcnR5VmFsdWUoZSwgcik7cFtyXSA9IFwiRG93blwiID09PSB0ID8gW2EsIDBdIDogWzAsIGFdO1xuICAgICAgICAgIH1kLm92ZXJmbG93ID0gZS5zdHlsZS5vdmVyZmxvdywgZS5zdHlsZS5vdmVyZmxvdyA9IFwiaGlkZGVuXCI7XG4gICAgICAgIH0sIGwuY29tcGxldGUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgZm9yICh2YXIgdCBpbiBkKSB7XG4gICAgICAgICAgICBlLnN0eWxlW3RdID0gZFt0XTtcbiAgICAgICAgICB9YyAmJiBjLmNhbGwoaSwgaSksIHMgJiYgcy5yZXNvbHZlcihpKTtcbiAgICAgICAgfSwgYihlLCBwLCBsKTtcbiAgICAgIH07XG4gICAgfSksIGYuZWFjaChbXCJJblwiLCBcIk91dFwiXSwgZnVuY3Rpb24gKGUsIHQpIHtcbiAgICAgIGIuUmVkaXJlY3RzW1wiZmFkZVwiICsgdF0gPSBmdW5jdGlvbiAoZSwgciwgbiwgbywgaSwgcykge1xuICAgICAgICB2YXIgbCA9IGYuZXh0ZW5kKHt9LCByKSxcbiAgICAgICAgICAgIHUgPSB7IG9wYWNpdHk6IFwiSW5cIiA9PT0gdCA/IDEgOiAwIH0sXG4gICAgICAgICAgICBjID0gbC5jb21wbGV0ZTtsLmNvbXBsZXRlID0gbiAhPT0gbyAtIDEgPyBsLmJlZ2luID0gbnVsbCA6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICBjICYmIGMuY2FsbChpLCBpKSwgcyAmJiBzLnJlc29sdmVyKGkpO1xuICAgICAgICB9LCBsLmRpc3BsYXkgPT09IGEgJiYgKGwuZGlzcGxheSA9IFwiSW5cIiA9PT0gdCA/IFwiYXV0b1wiIDogXCJub25lXCIpLCBiKHRoaXMsIHUsIGwpO1xuICAgICAgfTtcbiAgICB9KSwgYjtcbiAgfSh3aW5kb3cualF1ZXJ5IHx8IHdpbmRvdy5aZXB0byB8fCB3aW5kb3csIHdpbmRvdywgZG9jdW1lbnQpO1xufSkpO1xuOyFmdW5jdGlvbiAoYSwgYiwgYywgZCkge1xuICBcInVzZSBzdHJpY3RcIjtcbiAgZnVuY3Rpb24gayhhLCBiLCBjKSB7XG4gICAgcmV0dXJuIHNldFRpbWVvdXQocShhLCBjKSwgYik7XG4gIH1mdW5jdGlvbiBsKGEsIGIsIGMpIHtcbiAgICByZXR1cm4gQXJyYXkuaXNBcnJheShhKSA/IChtKGEsIGNbYl0sIGMpLCAhMCkgOiAhMTtcbiAgfWZ1bmN0aW9uIG0oYSwgYiwgYykge1xuICAgIHZhciBlO2lmIChhKSBpZiAoYS5mb3JFYWNoKSBhLmZvckVhY2goYiwgYyk7ZWxzZSBpZiAoYS5sZW5ndGggIT09IGQpIGZvciAoZSA9IDA7IGUgPCBhLmxlbmd0aDspIHtcbiAgICAgIGIuY2FsbChjLCBhW2VdLCBlLCBhKSwgZSsrO1xuICAgIH0gZWxzZSBmb3IgKGUgaW4gYSkge1xuICAgICAgYS5oYXNPd25Qcm9wZXJ0eShlKSAmJiBiLmNhbGwoYywgYVtlXSwgZSwgYSk7XG4gICAgfVxuICB9ZnVuY3Rpb24gbihhLCBiLCBjKSB7XG4gICAgZm9yICh2YXIgZSA9IE9iamVjdC5rZXlzKGIpLCBmID0gMDsgZiA8IGUubGVuZ3RoOykge1xuICAgICAgKCFjIHx8IGMgJiYgYVtlW2ZdXSA9PT0gZCkgJiYgKGFbZVtmXV0gPSBiW2VbZl1dKSwgZisrO1xuICAgIH1yZXR1cm4gYTtcbiAgfWZ1bmN0aW9uIG8oYSwgYikge1xuICAgIHJldHVybiBuKGEsIGIsICEwKTtcbiAgfWZ1bmN0aW9uIHAoYSwgYiwgYykge1xuICAgIHZhciBlLFxuICAgICAgICBkID0gYi5wcm90b3R5cGU7ZSA9IGEucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShkKSwgZS5jb25zdHJ1Y3RvciA9IGEsIGUuX3N1cGVyID0gZCwgYyAmJiBuKGUsIGMpO1xuICB9ZnVuY3Rpb24gcShhLCBiKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiBhLmFwcGx5KGIsIGFyZ3VtZW50cyk7XG4gICAgfTtcbiAgfWZ1bmN0aW9uIHIoYSwgYikge1xuICAgIHJldHVybiB0eXBlb2YgYSA9PSBnID8gYS5hcHBseShiID8gYlswXSB8fCBkIDogZCwgYikgOiBhO1xuICB9ZnVuY3Rpb24gcyhhLCBiKSB7XG4gICAgcmV0dXJuIGEgPT09IGQgPyBiIDogYTtcbiAgfWZ1bmN0aW9uIHQoYSwgYiwgYykge1xuICAgIG0oeChiKSwgZnVuY3Rpb24gKGIpIHtcbiAgICAgIGEuYWRkRXZlbnRMaXN0ZW5lcihiLCBjLCAhMSk7XG4gICAgfSk7XG4gIH1mdW5jdGlvbiB1KGEsIGIsIGMpIHtcbiAgICBtKHgoYiksIGZ1bmN0aW9uIChiKSB7XG4gICAgICBhLnJlbW92ZUV2ZW50TGlzdGVuZXIoYiwgYywgITEpO1xuICAgIH0pO1xuICB9ZnVuY3Rpb24gdihhLCBiKSB7XG4gICAgZm9yICg7IGE7KSB7XG4gICAgICBpZiAoYSA9PSBiKSByZXR1cm4gITA7YSA9IGEucGFyZW50Tm9kZTtcbiAgICB9cmV0dXJuICExO1xuICB9ZnVuY3Rpb24gdyhhLCBiKSB7XG4gICAgcmV0dXJuIGEuaW5kZXhPZihiKSA+IC0xO1xuICB9ZnVuY3Rpb24geChhKSB7XG4gICAgcmV0dXJuIGEudHJpbSgpLnNwbGl0KC9cXHMrL2cpO1xuICB9ZnVuY3Rpb24geShhLCBiLCBjKSB7XG4gICAgaWYgKGEuaW5kZXhPZiAmJiAhYykgcmV0dXJuIGEuaW5kZXhPZihiKTtmb3IgKHZhciBkID0gMDsgZCA8IGEubGVuZ3RoOykge1xuICAgICAgaWYgKGMgJiYgYVtkXVtjXSA9PSBiIHx8ICFjICYmIGFbZF0gPT09IGIpIHJldHVybiBkO2QrKztcbiAgICB9cmV0dXJuIC0xO1xuICB9ZnVuY3Rpb24geihhKSB7XG4gICAgcmV0dXJuIEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGEsIDApO1xuICB9ZnVuY3Rpb24gQShhLCBiLCBjKSB7XG4gICAgZm9yICh2YXIgZCA9IFtdLCBlID0gW10sIGYgPSAwOyBmIDwgYS5sZW5ndGg7KSB7XG4gICAgICB2YXIgZyA9IGIgPyBhW2ZdW2JdIDogYVtmXTt5KGUsIGcpIDwgMCAmJiBkLnB1c2goYVtmXSksIGVbZl0gPSBnLCBmKys7XG4gICAgfXJldHVybiBjICYmIChkID0gYiA/IGQuc29ydChmdW5jdGlvbiAoYSwgYykge1xuICAgICAgcmV0dXJuIGFbYl0gPiBjW2JdO1xuICAgIH0pIDogZC5zb3J0KCkpLCBkO1xuICB9ZnVuY3Rpb24gQihhLCBiKSB7XG4gICAgZm9yICh2YXIgYywgZiwgZyA9IGJbMF0udG9VcHBlckNhc2UoKSArIGIuc2xpY2UoMSksIGggPSAwOyBoIDwgZS5sZW5ndGg7KSB7XG4gICAgICBpZiAoYyA9IGVbaF0sIGYgPSBjID8gYyArIGcgOiBiLCBmIGluIGEpIHJldHVybiBmO2grKztcbiAgICB9cmV0dXJuIGQ7XG4gIH1mdW5jdGlvbiBEKCkge1xuICAgIHJldHVybiBDKys7XG4gIH1mdW5jdGlvbiBFKGEpIHtcbiAgICB2YXIgYiA9IGEub3duZXJEb2N1bWVudDtyZXR1cm4gYi5kZWZhdWx0VmlldyB8fCBiLnBhcmVudFdpbmRvdztcbiAgfWZ1bmN0aW9uIGFiKGEsIGIpIHtcbiAgICB2YXIgYyA9IHRoaXM7dGhpcy5tYW5hZ2VyID0gYSwgdGhpcy5jYWxsYmFjayA9IGIsIHRoaXMuZWxlbWVudCA9IGEuZWxlbWVudCwgdGhpcy50YXJnZXQgPSBhLm9wdGlvbnMuaW5wdXRUYXJnZXQsIHRoaXMuZG9tSGFuZGxlciA9IGZ1bmN0aW9uIChiKSB7XG4gICAgICByKGEub3B0aW9ucy5lbmFibGUsIFthXSkgJiYgYy5oYW5kbGVyKGIpO1xuICAgIH0sIHRoaXMuaW5pdCgpO1xuICB9ZnVuY3Rpb24gYmIoYSkge1xuICAgIHZhciBiLFxuICAgICAgICBjID0gYS5vcHRpb25zLmlucHV0Q2xhc3M7cmV0dXJuIGIgPSBjID8gYyA6IEggPyB3YiA6IEkgPyBFYiA6IEcgPyBHYiA6IHJiLCBuZXcgYihhLCBjYik7XG4gIH1mdW5jdGlvbiBjYihhLCBiLCBjKSB7XG4gICAgdmFyIGQgPSBjLnBvaW50ZXJzLmxlbmd0aCxcbiAgICAgICAgZSA9IGMuY2hhbmdlZFBvaW50ZXJzLmxlbmd0aCxcbiAgICAgICAgZiA9IGIgJiBPICYmIDAgPT09IGQgLSBlLFxuICAgICAgICBnID0gYiAmIChRIHwgUikgJiYgMCA9PT0gZCAtIGU7Yy5pc0ZpcnN0ID0gISFmLCBjLmlzRmluYWwgPSAhIWcsIGYgJiYgKGEuc2Vzc2lvbiA9IHt9KSwgYy5ldmVudFR5cGUgPSBiLCBkYihhLCBjKSwgYS5lbWl0KFwiaGFtbWVyLmlucHV0XCIsIGMpLCBhLnJlY29nbml6ZShjKSwgYS5zZXNzaW9uLnByZXZJbnB1dCA9IGM7XG4gIH1mdW5jdGlvbiBkYihhLCBiKSB7XG4gICAgdmFyIGMgPSBhLnNlc3Npb24sXG4gICAgICAgIGQgPSBiLnBvaW50ZXJzLFxuICAgICAgICBlID0gZC5sZW5ndGg7Yy5maXJzdElucHV0IHx8IChjLmZpcnN0SW5wdXQgPSBnYihiKSksIGUgPiAxICYmICFjLmZpcnN0TXVsdGlwbGUgPyBjLmZpcnN0TXVsdGlwbGUgPSBnYihiKSA6IDEgPT09IGUgJiYgKGMuZmlyc3RNdWx0aXBsZSA9ICExKTt2YXIgZiA9IGMuZmlyc3RJbnB1dCxcbiAgICAgICAgZyA9IGMuZmlyc3RNdWx0aXBsZSxcbiAgICAgICAgaCA9IGcgPyBnLmNlbnRlciA6IGYuY2VudGVyLFxuICAgICAgICBpID0gYi5jZW50ZXIgPSBoYihkKTtiLnRpbWVTdGFtcCA9IGooKSwgYi5kZWx0YVRpbWUgPSBiLnRpbWVTdGFtcCAtIGYudGltZVN0YW1wLCBiLmFuZ2xlID0gbGIoaCwgaSksIGIuZGlzdGFuY2UgPSBrYihoLCBpKSwgZWIoYywgYiksIGIub2Zmc2V0RGlyZWN0aW9uID0gamIoYi5kZWx0YVgsIGIuZGVsdGFZKSwgYi5zY2FsZSA9IGcgPyBuYihnLnBvaW50ZXJzLCBkKSA6IDEsIGIucm90YXRpb24gPSBnID8gbWIoZy5wb2ludGVycywgZCkgOiAwLCBmYihjLCBiKTt2YXIgayA9IGEuZWxlbWVudDt2KGIuc3JjRXZlbnQudGFyZ2V0LCBrKSAmJiAoayA9IGIuc3JjRXZlbnQudGFyZ2V0KSwgYi50YXJnZXQgPSBrO1xuICB9ZnVuY3Rpb24gZWIoYSwgYikge1xuICAgIHZhciBjID0gYi5jZW50ZXIsXG4gICAgICAgIGQgPSBhLm9mZnNldERlbHRhIHx8IHt9LFxuICAgICAgICBlID0gYS5wcmV2RGVsdGEgfHwge30sXG4gICAgICAgIGYgPSBhLnByZXZJbnB1dCB8fCB7fTsoYi5ldmVudFR5cGUgPT09IE8gfHwgZi5ldmVudFR5cGUgPT09IFEpICYmIChlID0gYS5wcmV2RGVsdGEgPSB7IHg6IGYuZGVsdGFYIHx8IDAsIHk6IGYuZGVsdGFZIHx8IDAgfSwgZCA9IGEub2Zmc2V0RGVsdGEgPSB7IHg6IGMueCwgeTogYy55IH0pLCBiLmRlbHRhWCA9IGUueCArIChjLnggLSBkLngpLCBiLmRlbHRhWSA9IGUueSArIChjLnkgLSBkLnkpO1xuICB9ZnVuY3Rpb24gZmIoYSwgYikge1xuICAgIHZhciBmLFxuICAgICAgICBnLFxuICAgICAgICBoLFxuICAgICAgICBqLFxuICAgICAgICBjID0gYS5sYXN0SW50ZXJ2YWwgfHwgYixcbiAgICAgICAgZSA9IGIudGltZVN0YW1wIC0gYy50aW1lU3RhbXA7aWYgKGIuZXZlbnRUeXBlICE9IFIgJiYgKGUgPiBOIHx8IGMudmVsb2NpdHkgPT09IGQpKSB7XG4gICAgICB2YXIgayA9IGMuZGVsdGFYIC0gYi5kZWx0YVgsXG4gICAgICAgICAgbCA9IGMuZGVsdGFZIC0gYi5kZWx0YVksXG4gICAgICAgICAgbSA9IGliKGUsIGssIGwpO2cgPSBtLngsIGggPSBtLnksIGYgPSBpKG0ueCkgPiBpKG0ueSkgPyBtLnggOiBtLnksIGogPSBqYihrLCBsKSwgYS5sYXN0SW50ZXJ2YWwgPSBiO1xuICAgIH0gZWxzZSBmID0gYy52ZWxvY2l0eSwgZyA9IGMudmVsb2NpdHlYLCBoID0gYy52ZWxvY2l0eVksIGogPSBjLmRpcmVjdGlvbjtiLnZlbG9jaXR5ID0gZiwgYi52ZWxvY2l0eVggPSBnLCBiLnZlbG9jaXR5WSA9IGgsIGIuZGlyZWN0aW9uID0gajtcbiAgfWZ1bmN0aW9uIGdiKGEpIHtcbiAgICBmb3IgKHZhciBiID0gW10sIGMgPSAwOyBjIDwgYS5wb2ludGVycy5sZW5ndGg7KSB7XG4gICAgICBiW2NdID0geyBjbGllbnRYOiBoKGEucG9pbnRlcnNbY10uY2xpZW50WCksIGNsaWVudFk6IGgoYS5wb2ludGVyc1tjXS5jbGllbnRZKSB9LCBjKys7XG4gICAgfXJldHVybiB7IHRpbWVTdGFtcDogaigpLCBwb2ludGVyczogYiwgY2VudGVyOiBoYihiKSwgZGVsdGFYOiBhLmRlbHRhWCwgZGVsdGFZOiBhLmRlbHRhWSB9O1xuICB9ZnVuY3Rpb24gaGIoYSkge1xuICAgIHZhciBiID0gYS5sZW5ndGg7aWYgKDEgPT09IGIpIHJldHVybiB7IHg6IGgoYVswXS5jbGllbnRYKSwgeTogaChhWzBdLmNsaWVudFkpIH07Zm9yICh2YXIgYyA9IDAsIGQgPSAwLCBlID0gMDsgYiA+IGU7KSB7XG4gICAgICBjICs9IGFbZV0uY2xpZW50WCwgZCArPSBhW2VdLmNsaWVudFksIGUrKztcbiAgICB9cmV0dXJuIHsgeDogaChjIC8gYiksIHk6IGgoZCAvIGIpIH07XG4gIH1mdW5jdGlvbiBpYihhLCBiLCBjKSB7XG4gICAgcmV0dXJuIHsgeDogYiAvIGEgfHwgMCwgeTogYyAvIGEgfHwgMCB9O1xuICB9ZnVuY3Rpb24gamIoYSwgYikge1xuICAgIHJldHVybiBhID09PSBiID8gUyA6IGkoYSkgPj0gaShiKSA/IGEgPiAwID8gVCA6IFUgOiBiID4gMCA/IFYgOiBXO1xuICB9ZnVuY3Rpb24ga2IoYSwgYiwgYykge1xuICAgIGMgfHwgKGMgPSAkKTt2YXIgZCA9IGJbY1swXV0gLSBhW2NbMF1dLFxuICAgICAgICBlID0gYltjWzFdXSAtIGFbY1sxXV07cmV0dXJuIE1hdGguc3FydChkICogZCArIGUgKiBlKTtcbiAgfWZ1bmN0aW9uIGxiKGEsIGIsIGMpIHtcbiAgICBjIHx8IChjID0gJCk7dmFyIGQgPSBiW2NbMF1dIC0gYVtjWzBdXSxcbiAgICAgICAgZSA9IGJbY1sxXV0gLSBhW2NbMV1dO3JldHVybiAxODAgKiBNYXRoLmF0YW4yKGUsIGQpIC8gTWF0aC5QSTtcbiAgfWZ1bmN0aW9uIG1iKGEsIGIpIHtcbiAgICByZXR1cm4gbGIoYlsxXSwgYlswXSwgXykgLSBsYihhWzFdLCBhWzBdLCBfKTtcbiAgfWZ1bmN0aW9uIG5iKGEsIGIpIHtcbiAgICByZXR1cm4ga2IoYlswXSwgYlsxXSwgXykgLyBrYihhWzBdLCBhWzFdLCBfKTtcbiAgfWZ1bmN0aW9uIHJiKCkge1xuICAgIHRoaXMuZXZFbCA9IHBiLCB0aGlzLmV2V2luID0gcWIsIHRoaXMuYWxsb3cgPSAhMCwgdGhpcy5wcmVzc2VkID0gITEsIGFiLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gIH1mdW5jdGlvbiB3YigpIHtcbiAgICB0aGlzLmV2RWwgPSB1YiwgdGhpcy5ldldpbiA9IHZiLCBhYi5hcHBseSh0aGlzLCBhcmd1bWVudHMpLCB0aGlzLnN0b3JlID0gdGhpcy5tYW5hZ2VyLnNlc3Npb24ucG9pbnRlckV2ZW50cyA9IFtdO1xuICB9ZnVuY3Rpb24gQWIoKSB7XG4gICAgdGhpcy5ldlRhcmdldCA9IHliLCB0aGlzLmV2V2luID0gemIsIHRoaXMuc3RhcnRlZCA9ICExLCBhYi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICB9ZnVuY3Rpb24gQmIoYSwgYikge1xuICAgIHZhciBjID0geihhLnRvdWNoZXMpLFxuICAgICAgICBkID0geihhLmNoYW5nZWRUb3VjaGVzKTtyZXR1cm4gYiAmIChRIHwgUikgJiYgKGMgPSBBKGMuY29uY2F0KGQpLCBcImlkZW50aWZpZXJcIiwgITApKSwgW2MsIGRdO1xuICB9ZnVuY3Rpb24gRWIoKSB7XG4gICAgdGhpcy5ldlRhcmdldCA9IERiLCB0aGlzLnRhcmdldElkcyA9IHt9LCBhYi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICB9ZnVuY3Rpb24gRmIoYSwgYikge1xuICAgIHZhciBjID0geihhLnRvdWNoZXMpLFxuICAgICAgICBkID0gdGhpcy50YXJnZXRJZHM7aWYgKGIgJiAoTyB8IFApICYmIDEgPT09IGMubGVuZ3RoKSByZXR1cm4gZFtjWzBdLmlkZW50aWZpZXJdID0gITAsIFtjLCBjXTt2YXIgZSxcbiAgICAgICAgZixcbiAgICAgICAgZyA9IHooYS5jaGFuZ2VkVG91Y2hlcyksXG4gICAgICAgIGggPSBbXSxcbiAgICAgICAgaSA9IHRoaXMudGFyZ2V0O2lmIChmID0gYy5maWx0ZXIoZnVuY3Rpb24gKGEpIHtcbiAgICAgIHJldHVybiB2KGEudGFyZ2V0LCBpKTtcbiAgICB9KSwgYiA9PT0gTykgZm9yIChlID0gMDsgZSA8IGYubGVuZ3RoOykge1xuICAgICAgZFtmW2VdLmlkZW50aWZpZXJdID0gITAsIGUrKztcbiAgICB9Zm9yIChlID0gMDsgZSA8IGcubGVuZ3RoOykge1xuICAgICAgZFtnW2VdLmlkZW50aWZpZXJdICYmIGgucHVzaChnW2VdKSwgYiAmIChRIHwgUikgJiYgZGVsZXRlIGRbZ1tlXS5pZGVudGlmaWVyXSwgZSsrO1xuICAgIH1yZXR1cm4gaC5sZW5ndGggPyBbQShmLmNvbmNhdChoKSwgXCJpZGVudGlmaWVyXCIsICEwKSwgaF0gOiB2b2lkIDA7XG4gIH1mdW5jdGlvbiBHYigpIHtcbiAgICBhYi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO3ZhciBhID0gcSh0aGlzLmhhbmRsZXIsIHRoaXMpO3RoaXMudG91Y2ggPSBuZXcgRWIodGhpcy5tYW5hZ2VyLCBhKSwgdGhpcy5tb3VzZSA9IG5ldyByYih0aGlzLm1hbmFnZXIsIGEpO1xuICB9ZnVuY3Rpb24gUGIoYSwgYikge1xuICAgIHRoaXMubWFuYWdlciA9IGEsIHRoaXMuc2V0KGIpO1xuICB9ZnVuY3Rpb24gUWIoYSkge1xuICAgIGlmICh3KGEsIE1iKSkgcmV0dXJuIE1iO3ZhciBiID0gdyhhLCBOYiksXG4gICAgICAgIGMgPSB3KGEsIE9iKTtyZXR1cm4gYiAmJiBjID8gTmIgKyBcIiBcIiArIE9iIDogYiB8fCBjID8gYiA/IE5iIDogT2IgOiB3KGEsIExiKSA/IExiIDogS2I7XG4gIH1mdW5jdGlvbiBZYihhKSB7XG4gICAgdGhpcy5pZCA9IEQoKSwgdGhpcy5tYW5hZ2VyID0gbnVsbCwgdGhpcy5vcHRpb25zID0gbyhhIHx8IHt9LCB0aGlzLmRlZmF1bHRzKSwgdGhpcy5vcHRpb25zLmVuYWJsZSA9IHModGhpcy5vcHRpb25zLmVuYWJsZSwgITApLCB0aGlzLnN0YXRlID0gUmIsIHRoaXMuc2ltdWx0YW5lb3VzID0ge30sIHRoaXMucmVxdWlyZUZhaWwgPSBbXTtcbiAgfWZ1bmN0aW9uIFpiKGEpIHtcbiAgICByZXR1cm4gYSAmIFdiID8gXCJjYW5jZWxcIiA6IGEgJiBVYiA/IFwiZW5kXCIgOiBhICYgVGIgPyBcIm1vdmVcIiA6IGEgJiBTYiA/IFwic3RhcnRcIiA6IFwiXCI7XG4gIH1mdW5jdGlvbiAkYihhKSB7XG4gICAgcmV0dXJuIGEgPT0gVyA/IFwiZG93blwiIDogYSA9PSBWID8gXCJ1cFwiIDogYSA9PSBUID8gXCJsZWZ0XCIgOiBhID09IFUgPyBcInJpZ2h0XCIgOiBcIlwiO1xuICB9ZnVuY3Rpb24gX2IoYSwgYikge1xuICAgIHZhciBjID0gYi5tYW5hZ2VyO3JldHVybiBjID8gYy5nZXQoYSkgOiBhO1xuICB9ZnVuY3Rpb24gYWMoKSB7XG4gICAgWWIuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgfWZ1bmN0aW9uIGJjKCkge1xuICAgIGFjLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyksIHRoaXMucFggPSBudWxsLCB0aGlzLnBZID0gbnVsbDtcbiAgfWZ1bmN0aW9uIGNjKCkge1xuICAgIGFjLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gIH1mdW5jdGlvbiBkYygpIHtcbiAgICBZYi5hcHBseSh0aGlzLCBhcmd1bWVudHMpLCB0aGlzLl90aW1lciA9IG51bGwsIHRoaXMuX2lucHV0ID0gbnVsbDtcbiAgfWZ1bmN0aW9uIGVjKCkge1xuICAgIGFjLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gIH1mdW5jdGlvbiBmYygpIHtcbiAgICBhYy5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICB9ZnVuY3Rpb24gZ2MoKSB7XG4gICAgWWIuYXBwbHkodGhpcywgYXJndW1lbnRzKSwgdGhpcy5wVGltZSA9ICExLCB0aGlzLnBDZW50ZXIgPSAhMSwgdGhpcy5fdGltZXIgPSBudWxsLCB0aGlzLl9pbnB1dCA9IG51bGwsIHRoaXMuY291bnQgPSAwO1xuICB9ZnVuY3Rpb24gaGMoYSwgYikge1xuICAgIHJldHVybiBiID0gYiB8fCB7fSwgYi5yZWNvZ25pemVycyA9IHMoYi5yZWNvZ25pemVycywgaGMuZGVmYXVsdHMucHJlc2V0KSwgbmV3IGtjKGEsIGIpO1xuICB9ZnVuY3Rpb24ga2MoYSwgYikge1xuICAgIGIgPSBiIHx8IHt9LCB0aGlzLm9wdGlvbnMgPSBvKGIsIGhjLmRlZmF1bHRzKSwgdGhpcy5vcHRpb25zLmlucHV0VGFyZ2V0ID0gdGhpcy5vcHRpb25zLmlucHV0VGFyZ2V0IHx8IGEsIHRoaXMuaGFuZGxlcnMgPSB7fSwgdGhpcy5zZXNzaW9uID0ge30sIHRoaXMucmVjb2duaXplcnMgPSBbXSwgdGhpcy5lbGVtZW50ID0gYSwgdGhpcy5pbnB1dCA9IGJiKHRoaXMpLCB0aGlzLnRvdWNoQWN0aW9uID0gbmV3IFBiKHRoaXMsIHRoaXMub3B0aW9ucy50b3VjaEFjdGlvbiksIGxjKHRoaXMsICEwKSwgbShiLnJlY29nbml6ZXJzLCBmdW5jdGlvbiAoYSkge1xuICAgICAgdmFyIGIgPSB0aGlzLmFkZChuZXcgYVswXShhWzFdKSk7YVsyXSAmJiBiLnJlY29nbml6ZVdpdGgoYVsyXSksIGFbM10gJiYgYi5yZXF1aXJlRmFpbHVyZShhWzNdKTtcbiAgICB9LCB0aGlzKTtcbiAgfWZ1bmN0aW9uIGxjKGEsIGIpIHtcbiAgICB2YXIgYyA9IGEuZWxlbWVudDttKGEub3B0aW9ucy5jc3NQcm9wcywgZnVuY3Rpb24gKGEsIGQpIHtcbiAgICAgIGMuc3R5bGVbQihjLnN0eWxlLCBkKV0gPSBiID8gYSA6IFwiXCI7XG4gICAgfSk7XG4gIH1mdW5jdGlvbiBtYyhhLCBjKSB7XG4gICAgdmFyIGQgPSBiLmNyZWF0ZUV2ZW50KFwiRXZlbnRcIik7ZC5pbml0RXZlbnQoYSwgITAsICEwKSwgZC5nZXN0dXJlID0gYywgYy50YXJnZXQuZGlzcGF0Y2hFdmVudChkKTtcbiAgfXZhciBlID0gW1wiXCIsIFwid2Via2l0XCIsIFwibW96XCIsIFwiTVNcIiwgXCJtc1wiLCBcIm9cIl0sXG4gICAgICBmID0gYi5jcmVhdGVFbGVtZW50KFwiZGl2XCIpLFxuICAgICAgZyA9IFwiZnVuY3Rpb25cIixcbiAgICAgIGggPSBNYXRoLnJvdW5kLFxuICAgICAgaSA9IE1hdGguYWJzLFxuICAgICAgaiA9IERhdGUubm93LFxuICAgICAgQyA9IDEsXG4gICAgICBGID0gL21vYmlsZXx0YWJsZXR8aXAoYWR8aG9uZXxvZCl8YW5kcm9pZC9pLFxuICAgICAgRyA9IFwib250b3VjaHN0YXJ0XCIgaW4gYSxcbiAgICAgIEggPSBCKGEsIFwiUG9pbnRlckV2ZW50XCIpICE9PSBkLFxuICAgICAgSSA9IEcgJiYgRi50ZXN0KG5hdmlnYXRvci51c2VyQWdlbnQpLFxuICAgICAgSiA9IFwidG91Y2hcIixcbiAgICAgIEsgPSBcInBlblwiLFxuICAgICAgTCA9IFwibW91c2VcIixcbiAgICAgIE0gPSBcImtpbmVjdFwiLFxuICAgICAgTiA9IDI1LFxuICAgICAgTyA9IDEsXG4gICAgICBQID0gMixcbiAgICAgIFEgPSA0LFxuICAgICAgUiA9IDgsXG4gICAgICBTID0gMSxcbiAgICAgIFQgPSAyLFxuICAgICAgVSA9IDQsXG4gICAgICBWID0gOCxcbiAgICAgIFcgPSAxNixcbiAgICAgIFggPSBUIHwgVSxcbiAgICAgIFkgPSBWIHwgVyxcbiAgICAgIFogPSBYIHwgWSxcbiAgICAgICQgPSBbXCJ4XCIsIFwieVwiXSxcbiAgICAgIF8gPSBbXCJjbGllbnRYXCIsIFwiY2xpZW50WVwiXTthYi5wcm90b3R5cGUgPSB7IGhhbmRsZXI6IGZ1bmN0aW9uICgpIHt9LCBpbml0OiBmdW5jdGlvbiAoKSB7XG4gICAgICB0aGlzLmV2RWwgJiYgdCh0aGlzLmVsZW1lbnQsIHRoaXMuZXZFbCwgdGhpcy5kb21IYW5kbGVyKSwgdGhpcy5ldlRhcmdldCAmJiB0KHRoaXMudGFyZ2V0LCB0aGlzLmV2VGFyZ2V0LCB0aGlzLmRvbUhhbmRsZXIpLCB0aGlzLmV2V2luICYmIHQoRSh0aGlzLmVsZW1lbnQpLCB0aGlzLmV2V2luLCB0aGlzLmRvbUhhbmRsZXIpO1xuICAgIH0sIGRlc3Ryb3k6IGZ1bmN0aW9uICgpIHtcbiAgICAgIHRoaXMuZXZFbCAmJiB1KHRoaXMuZWxlbWVudCwgdGhpcy5ldkVsLCB0aGlzLmRvbUhhbmRsZXIpLCB0aGlzLmV2VGFyZ2V0ICYmIHUodGhpcy50YXJnZXQsIHRoaXMuZXZUYXJnZXQsIHRoaXMuZG9tSGFuZGxlciksIHRoaXMuZXZXaW4gJiYgdShFKHRoaXMuZWxlbWVudCksIHRoaXMuZXZXaW4sIHRoaXMuZG9tSGFuZGxlcik7XG4gICAgfSB9O3ZhciBvYiA9IHsgbW91c2Vkb3duOiBPLCBtb3VzZW1vdmU6IFAsIG1vdXNldXA6IFEgfSxcbiAgICAgIHBiID0gXCJtb3VzZWRvd25cIixcbiAgICAgIHFiID0gXCJtb3VzZW1vdmUgbW91c2V1cFwiO3AocmIsIGFiLCB7IGhhbmRsZXI6IGZ1bmN0aW9uIChhKSB7XG4gICAgICB2YXIgYiA9IG9iW2EudHlwZV07YiAmIE8gJiYgMCA9PT0gYS5idXR0b24gJiYgKHRoaXMucHJlc3NlZCA9ICEwKSwgYiAmIFAgJiYgMSAhPT0gYS53aGljaCAmJiAoYiA9IFEpLCB0aGlzLnByZXNzZWQgJiYgdGhpcy5hbGxvdyAmJiAoYiAmIFEgJiYgKHRoaXMucHJlc3NlZCA9ICExKSwgdGhpcy5jYWxsYmFjayh0aGlzLm1hbmFnZXIsIGIsIHsgcG9pbnRlcnM6IFthXSwgY2hhbmdlZFBvaW50ZXJzOiBbYV0sIHBvaW50ZXJUeXBlOiBMLCBzcmNFdmVudDogYSB9KSk7XG4gICAgfSB9KTt2YXIgc2IgPSB7IHBvaW50ZXJkb3duOiBPLCBwb2ludGVybW92ZTogUCwgcG9pbnRlcnVwOiBRLCBwb2ludGVyY2FuY2VsOiBSLCBwb2ludGVyb3V0OiBSIH0sXG4gICAgICB0YiA9IHsgMjogSiwgMzogSywgNDogTCwgNTogTSB9LFxuICAgICAgdWIgPSBcInBvaW50ZXJkb3duXCIsXG4gICAgICB2YiA9IFwicG9pbnRlcm1vdmUgcG9pbnRlcnVwIHBvaW50ZXJjYW5jZWxcIjthLk1TUG9pbnRlckV2ZW50ICYmICh1YiA9IFwiTVNQb2ludGVyRG93blwiLCB2YiA9IFwiTVNQb2ludGVyTW92ZSBNU1BvaW50ZXJVcCBNU1BvaW50ZXJDYW5jZWxcIiksIHAod2IsIGFiLCB7IGhhbmRsZXI6IGZ1bmN0aW9uIChhKSB7XG4gICAgICB2YXIgYiA9IHRoaXMuc3RvcmUsXG4gICAgICAgICAgYyA9ICExLFxuICAgICAgICAgIGQgPSBhLnR5cGUudG9Mb3dlckNhc2UoKS5yZXBsYWNlKFwibXNcIiwgXCJcIiksXG4gICAgICAgICAgZSA9IHNiW2RdLFxuICAgICAgICAgIGYgPSB0YlthLnBvaW50ZXJUeXBlXSB8fCBhLnBvaW50ZXJUeXBlLFxuICAgICAgICAgIGcgPSBmID09IEosXG4gICAgICAgICAgaCA9IHkoYiwgYS5wb2ludGVySWQsIFwicG9pbnRlcklkXCIpO2UgJiBPICYmICgwID09PSBhLmJ1dHRvbiB8fCBnKSA/IDAgPiBoICYmIChiLnB1c2goYSksIGggPSBiLmxlbmd0aCAtIDEpIDogZSAmIChRIHwgUikgJiYgKGMgPSAhMCksIDAgPiBoIHx8IChiW2hdID0gYSwgdGhpcy5jYWxsYmFjayh0aGlzLm1hbmFnZXIsIGUsIHsgcG9pbnRlcnM6IGIsIGNoYW5nZWRQb2ludGVyczogW2FdLCBwb2ludGVyVHlwZTogZiwgc3JjRXZlbnQ6IGEgfSksIGMgJiYgYi5zcGxpY2UoaCwgMSkpO1xuICAgIH0gfSk7dmFyIHhiID0geyB0b3VjaHN0YXJ0OiBPLCB0b3VjaG1vdmU6IFAsIHRvdWNoZW5kOiBRLCB0b3VjaGNhbmNlbDogUiB9LFxuICAgICAgeWIgPSBcInRvdWNoc3RhcnRcIixcbiAgICAgIHpiID0gXCJ0b3VjaHN0YXJ0IHRvdWNobW92ZSB0b3VjaGVuZCB0b3VjaGNhbmNlbFwiO3AoQWIsIGFiLCB7IGhhbmRsZXI6IGZ1bmN0aW9uIChhKSB7XG4gICAgICB2YXIgYiA9IHhiW2EudHlwZV07aWYgKGIgPT09IE8gJiYgKHRoaXMuc3RhcnRlZCA9ICEwKSwgdGhpcy5zdGFydGVkKSB7XG4gICAgICAgIHZhciBjID0gQmIuY2FsbCh0aGlzLCBhLCBiKTtiICYgKFEgfCBSKSAmJiAwID09PSBjWzBdLmxlbmd0aCAtIGNbMV0ubGVuZ3RoICYmICh0aGlzLnN0YXJ0ZWQgPSAhMSksIHRoaXMuY2FsbGJhY2sodGhpcy5tYW5hZ2VyLCBiLCB7IHBvaW50ZXJzOiBjWzBdLCBjaGFuZ2VkUG9pbnRlcnM6IGNbMV0sIHBvaW50ZXJUeXBlOiBKLCBzcmNFdmVudDogYSB9KTtcbiAgICAgIH1cbiAgICB9IH0pO3ZhciBDYiA9IHsgdG91Y2hzdGFydDogTywgdG91Y2htb3ZlOiBQLCB0b3VjaGVuZDogUSwgdG91Y2hjYW5jZWw6IFIgfSxcbiAgICAgIERiID0gXCJ0b3VjaHN0YXJ0IHRvdWNobW92ZSB0b3VjaGVuZCB0b3VjaGNhbmNlbFwiO3AoRWIsIGFiLCB7IGhhbmRsZXI6IGZ1bmN0aW9uIChhKSB7XG4gICAgICB2YXIgYiA9IENiW2EudHlwZV0sXG4gICAgICAgICAgYyA9IEZiLmNhbGwodGhpcywgYSwgYik7YyAmJiB0aGlzLmNhbGxiYWNrKHRoaXMubWFuYWdlciwgYiwgeyBwb2ludGVyczogY1swXSwgY2hhbmdlZFBvaW50ZXJzOiBjWzFdLCBwb2ludGVyVHlwZTogSiwgc3JjRXZlbnQ6IGEgfSk7XG4gICAgfSB9KSwgcChHYiwgYWIsIHsgaGFuZGxlcjogZnVuY3Rpb24gKGEsIGIsIGMpIHtcbiAgICAgIHZhciBkID0gYy5wb2ludGVyVHlwZSA9PSBKLFxuICAgICAgICAgIGUgPSBjLnBvaW50ZXJUeXBlID09IEw7aWYgKGQpIHRoaXMubW91c2UuYWxsb3cgPSAhMTtlbHNlIGlmIChlICYmICF0aGlzLm1vdXNlLmFsbG93KSByZXR1cm47YiAmIChRIHwgUikgJiYgKHRoaXMubW91c2UuYWxsb3cgPSAhMCksIHRoaXMuY2FsbGJhY2soYSwgYiwgYyk7XG4gICAgfSwgZGVzdHJveTogZnVuY3Rpb24gKCkge1xuICAgICAgdGhpcy50b3VjaC5kZXN0cm95KCksIHRoaXMubW91c2UuZGVzdHJveSgpO1xuICAgIH0gfSk7dmFyIEhiID0gQihmLnN0eWxlLCBcInRvdWNoQWN0aW9uXCIpLFxuICAgICAgSWIgPSBIYiAhPT0gZCxcbiAgICAgIEpiID0gXCJjb21wdXRlXCIsXG4gICAgICBLYiA9IFwiYXV0b1wiLFxuICAgICAgTGIgPSBcIm1hbmlwdWxhdGlvblwiLFxuICAgICAgTWIgPSBcIm5vbmVcIixcbiAgICAgIE5iID0gXCJwYW4teFwiLFxuICAgICAgT2IgPSBcInBhbi15XCI7UGIucHJvdG90eXBlID0geyBzZXQ6IGZ1bmN0aW9uIChhKSB7XG4gICAgICBhID09IEpiICYmIChhID0gdGhpcy5jb21wdXRlKCkpLCBJYiAmJiAodGhpcy5tYW5hZ2VyLmVsZW1lbnQuc3R5bGVbSGJdID0gYSksIHRoaXMuYWN0aW9ucyA9IGEudG9Mb3dlckNhc2UoKS50cmltKCk7XG4gICAgfSwgdXBkYXRlOiBmdW5jdGlvbiAoKSB7XG4gICAgICB0aGlzLnNldCh0aGlzLm1hbmFnZXIub3B0aW9ucy50b3VjaEFjdGlvbik7XG4gICAgfSwgY29tcHV0ZTogZnVuY3Rpb24gKCkge1xuICAgICAgdmFyIGEgPSBbXTtyZXR1cm4gbSh0aGlzLm1hbmFnZXIucmVjb2duaXplcnMsIGZ1bmN0aW9uIChiKSB7XG4gICAgICAgIHIoYi5vcHRpb25zLmVuYWJsZSwgW2JdKSAmJiAoYSA9IGEuY29uY2F0KGIuZ2V0VG91Y2hBY3Rpb24oKSkpO1xuICAgICAgfSksIFFiKGEuam9pbihcIiBcIikpO1xuICAgIH0sIHByZXZlbnREZWZhdWx0czogZnVuY3Rpb24gKGEpIHtcbiAgICAgIGlmICghSWIpIHtcbiAgICAgICAgdmFyIGIgPSBhLnNyY0V2ZW50LFxuICAgICAgICAgICAgYyA9IGEub2Zmc2V0RGlyZWN0aW9uO2lmICh0aGlzLm1hbmFnZXIuc2Vzc2lvbi5wcmV2ZW50ZWQpIHJldHVybiBiLnByZXZlbnREZWZhdWx0KCksIHZvaWQgMDt2YXIgZCA9IHRoaXMuYWN0aW9ucyxcbiAgICAgICAgICAgIGUgPSB3KGQsIE1iKSxcbiAgICAgICAgICAgIGYgPSB3KGQsIE9iKSxcbiAgICAgICAgICAgIGcgPSB3KGQsIE5iKTtyZXR1cm4gZSB8fCBmICYmIGMgJiBYIHx8IGcgJiYgYyAmIFkgPyB0aGlzLnByZXZlbnRTcmMoYikgOiB2b2lkIDA7XG4gICAgICB9XG4gICAgfSwgcHJldmVudFNyYzogZnVuY3Rpb24gKGEpIHtcbiAgICAgIHRoaXMubWFuYWdlci5zZXNzaW9uLnByZXZlbnRlZCA9ICEwLCBhLnByZXZlbnREZWZhdWx0KCk7XG4gICAgfSB9O3ZhciBSYiA9IDEsXG4gICAgICBTYiA9IDIsXG4gICAgICBUYiA9IDQsXG4gICAgICBVYiA9IDgsXG4gICAgICBWYiA9IFViLFxuICAgICAgV2IgPSAxNixcbiAgICAgIFhiID0gMzI7WWIucHJvdG90eXBlID0geyBkZWZhdWx0czoge30sIHNldDogZnVuY3Rpb24gKGEpIHtcbiAgICAgIHJldHVybiBuKHRoaXMub3B0aW9ucywgYSksIHRoaXMubWFuYWdlciAmJiB0aGlzLm1hbmFnZXIudG91Y2hBY3Rpb24udXBkYXRlKCksIHRoaXM7XG4gICAgfSwgcmVjb2duaXplV2l0aDogZnVuY3Rpb24gKGEpIHtcbiAgICAgIGlmIChsKGEsIFwicmVjb2duaXplV2l0aFwiLCB0aGlzKSkgcmV0dXJuIHRoaXM7dmFyIGIgPSB0aGlzLnNpbXVsdGFuZW91cztyZXR1cm4gYSA9IF9iKGEsIHRoaXMpLCBiW2EuaWRdIHx8IChiW2EuaWRdID0gYSwgYS5yZWNvZ25pemVXaXRoKHRoaXMpKSwgdGhpcztcbiAgICB9LCBkcm9wUmVjb2duaXplV2l0aDogZnVuY3Rpb24gKGEpIHtcbiAgICAgIHJldHVybiBsKGEsIFwiZHJvcFJlY29nbml6ZVdpdGhcIiwgdGhpcykgPyB0aGlzIDogKGEgPSBfYihhLCB0aGlzKSwgZGVsZXRlIHRoaXMuc2ltdWx0YW5lb3VzW2EuaWRdLCB0aGlzKTtcbiAgICB9LCByZXF1aXJlRmFpbHVyZTogZnVuY3Rpb24gKGEpIHtcbiAgICAgIGlmIChsKGEsIFwicmVxdWlyZUZhaWx1cmVcIiwgdGhpcykpIHJldHVybiB0aGlzO3ZhciBiID0gdGhpcy5yZXF1aXJlRmFpbDtyZXR1cm4gYSA9IF9iKGEsIHRoaXMpLCAtMSA9PT0geShiLCBhKSAmJiAoYi5wdXNoKGEpLCBhLnJlcXVpcmVGYWlsdXJlKHRoaXMpKSwgdGhpcztcbiAgICB9LCBkcm9wUmVxdWlyZUZhaWx1cmU6IGZ1bmN0aW9uIChhKSB7XG4gICAgICBpZiAobChhLCBcImRyb3BSZXF1aXJlRmFpbHVyZVwiLCB0aGlzKSkgcmV0dXJuIHRoaXM7YSA9IF9iKGEsIHRoaXMpO3ZhciBiID0geSh0aGlzLnJlcXVpcmVGYWlsLCBhKTtyZXR1cm4gYiA+IC0xICYmIHRoaXMucmVxdWlyZUZhaWwuc3BsaWNlKGIsIDEpLCB0aGlzO1xuICAgIH0sIGhhc1JlcXVpcmVGYWlsdXJlczogZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIHRoaXMucmVxdWlyZUZhaWwubGVuZ3RoID4gMDtcbiAgICB9LCBjYW5SZWNvZ25pemVXaXRoOiBmdW5jdGlvbiAoYSkge1xuICAgICAgcmV0dXJuICEhdGhpcy5zaW11bHRhbmVvdXNbYS5pZF07XG4gICAgfSwgZW1pdDogZnVuY3Rpb24gKGEpIHtcbiAgICAgIGZ1bmN0aW9uIGQoZCkge1xuICAgICAgICBiLm1hbmFnZXIuZW1pdChiLm9wdGlvbnMuZXZlbnQgKyAoZCA/IFpiKGMpIDogXCJcIiksIGEpO1xuICAgICAgfXZhciBiID0gdGhpcyxcbiAgICAgICAgICBjID0gdGhpcy5zdGF0ZTtVYiA+IGMgJiYgZCghMCksIGQoKSwgYyA+PSBVYiAmJiBkKCEwKTtcbiAgICB9LCB0cnlFbWl0OiBmdW5jdGlvbiAoYSkge1xuICAgICAgcmV0dXJuIHRoaXMuY2FuRW1pdCgpID8gdGhpcy5lbWl0KGEpIDogKHRoaXMuc3RhdGUgPSBYYiwgdm9pZCAwKTtcbiAgICB9LCBjYW5FbWl0OiBmdW5jdGlvbiAoKSB7XG4gICAgICBmb3IgKHZhciBhID0gMDsgYSA8IHRoaXMucmVxdWlyZUZhaWwubGVuZ3RoOykge1xuICAgICAgICBpZiAoISh0aGlzLnJlcXVpcmVGYWlsW2FdLnN0YXRlICYgKFhiIHwgUmIpKSkgcmV0dXJuICExO2ErKztcbiAgICAgIH1yZXR1cm4gITA7XG4gICAgfSwgcmVjb2duaXplOiBmdW5jdGlvbiAoYSkge1xuICAgICAgdmFyIGIgPSBuKHt9LCBhKTtyZXR1cm4gcih0aGlzLm9wdGlvbnMuZW5hYmxlLCBbdGhpcywgYl0pID8gKHRoaXMuc3RhdGUgJiAoVmIgfCBXYiB8IFhiKSAmJiAodGhpcy5zdGF0ZSA9IFJiKSwgdGhpcy5zdGF0ZSA9IHRoaXMucHJvY2VzcyhiKSwgdGhpcy5zdGF0ZSAmIChTYiB8IFRiIHwgVWIgfCBXYikgJiYgdGhpcy50cnlFbWl0KGIpLCB2b2lkIDApIDogKHRoaXMucmVzZXQoKSwgdGhpcy5zdGF0ZSA9IFhiLCB2b2lkIDApO1xuICAgIH0sIHByb2Nlc3M6IGZ1bmN0aW9uICgpIHt9LCBnZXRUb3VjaEFjdGlvbjogZnVuY3Rpb24gKCkge30sIHJlc2V0OiBmdW5jdGlvbiAoKSB7fSB9LCBwKGFjLCBZYiwgeyBkZWZhdWx0czogeyBwb2ludGVyczogMSB9LCBhdHRyVGVzdDogZnVuY3Rpb24gKGEpIHtcbiAgICAgIHZhciBiID0gdGhpcy5vcHRpb25zLnBvaW50ZXJzO3JldHVybiAwID09PSBiIHx8IGEucG9pbnRlcnMubGVuZ3RoID09PSBiO1xuICAgIH0sIHByb2Nlc3M6IGZ1bmN0aW9uIChhKSB7XG4gICAgICB2YXIgYiA9IHRoaXMuc3RhdGUsXG4gICAgICAgICAgYyA9IGEuZXZlbnRUeXBlLFxuICAgICAgICAgIGQgPSBiICYgKFNiIHwgVGIpLFxuICAgICAgICAgIGUgPSB0aGlzLmF0dHJUZXN0KGEpO3JldHVybiBkICYmIChjICYgUiB8fCAhZSkgPyBiIHwgV2IgOiBkIHx8IGUgPyBjICYgUSA/IGIgfCBVYiA6IGIgJiBTYiA/IGIgfCBUYiA6IFNiIDogWGI7XG4gICAgfSB9KSwgcChiYywgYWMsIHsgZGVmYXVsdHM6IHsgZXZlbnQ6IFwicGFuXCIsIHRocmVzaG9sZDogMTAsIHBvaW50ZXJzOiAxLCBkaXJlY3Rpb246IFogfSwgZ2V0VG91Y2hBY3Rpb246IGZ1bmN0aW9uICgpIHtcbiAgICAgIHZhciBhID0gdGhpcy5vcHRpb25zLmRpcmVjdGlvbixcbiAgICAgICAgICBiID0gW107cmV0dXJuIGEgJiBYICYmIGIucHVzaChPYiksIGEgJiBZICYmIGIucHVzaChOYiksIGI7XG4gICAgfSwgZGlyZWN0aW9uVGVzdDogZnVuY3Rpb24gKGEpIHtcbiAgICAgIHZhciBiID0gdGhpcy5vcHRpb25zLFxuICAgICAgICAgIGMgPSAhMCxcbiAgICAgICAgICBkID0gYS5kaXN0YW5jZSxcbiAgICAgICAgICBlID0gYS5kaXJlY3Rpb24sXG4gICAgICAgICAgZiA9IGEuZGVsdGFYLFxuICAgICAgICAgIGcgPSBhLmRlbHRhWTtyZXR1cm4gZSAmIGIuZGlyZWN0aW9uIHx8IChiLmRpcmVjdGlvbiAmIFggPyAoZSA9IDAgPT09IGYgPyBTIDogMCA+IGYgPyBUIDogVSwgYyA9IGYgIT0gdGhpcy5wWCwgZCA9IE1hdGguYWJzKGEuZGVsdGFYKSkgOiAoZSA9IDAgPT09IGcgPyBTIDogMCA+IGcgPyBWIDogVywgYyA9IGcgIT0gdGhpcy5wWSwgZCA9IE1hdGguYWJzKGEuZGVsdGFZKSkpLCBhLmRpcmVjdGlvbiA9IGUsIGMgJiYgZCA+IGIudGhyZXNob2xkICYmIGUgJiBiLmRpcmVjdGlvbjtcbiAgICB9LCBhdHRyVGVzdDogZnVuY3Rpb24gKGEpIHtcbiAgICAgIHJldHVybiBhYy5wcm90b3R5cGUuYXR0clRlc3QuY2FsbCh0aGlzLCBhKSAmJiAodGhpcy5zdGF0ZSAmIFNiIHx8ICEodGhpcy5zdGF0ZSAmIFNiKSAmJiB0aGlzLmRpcmVjdGlvblRlc3QoYSkpO1xuICAgIH0sIGVtaXQ6IGZ1bmN0aW9uIChhKSB7XG4gICAgICB0aGlzLnBYID0gYS5kZWx0YVgsIHRoaXMucFkgPSBhLmRlbHRhWTt2YXIgYiA9ICRiKGEuZGlyZWN0aW9uKTtiICYmIHRoaXMubWFuYWdlci5lbWl0KHRoaXMub3B0aW9ucy5ldmVudCArIGIsIGEpLCB0aGlzLl9zdXBlci5lbWl0LmNhbGwodGhpcywgYSk7XG4gICAgfSB9KSwgcChjYywgYWMsIHsgZGVmYXVsdHM6IHsgZXZlbnQ6IFwicGluY2hcIiwgdGhyZXNob2xkOiAwLCBwb2ludGVyczogMiB9LCBnZXRUb3VjaEFjdGlvbjogZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIFtNYl07XG4gICAgfSwgYXR0clRlc3Q6IGZ1bmN0aW9uIChhKSB7XG4gICAgICByZXR1cm4gdGhpcy5fc3VwZXIuYXR0clRlc3QuY2FsbCh0aGlzLCBhKSAmJiAoTWF0aC5hYnMoYS5zY2FsZSAtIDEpID4gdGhpcy5vcHRpb25zLnRocmVzaG9sZCB8fCB0aGlzLnN0YXRlICYgU2IpO1xuICAgIH0sIGVtaXQ6IGZ1bmN0aW9uIChhKSB7XG4gICAgICBpZiAodGhpcy5fc3VwZXIuZW1pdC5jYWxsKHRoaXMsIGEpLCAxICE9PSBhLnNjYWxlKSB7XG4gICAgICAgIHZhciBiID0gYS5zY2FsZSA8IDEgPyBcImluXCIgOiBcIm91dFwiO3RoaXMubWFuYWdlci5lbWl0KHRoaXMub3B0aW9ucy5ldmVudCArIGIsIGEpO1xuICAgICAgfVxuICAgIH0gfSksIHAoZGMsIFliLCB7IGRlZmF1bHRzOiB7IGV2ZW50OiBcInByZXNzXCIsIHBvaW50ZXJzOiAxLCB0aW1lOiA1MDAsIHRocmVzaG9sZDogNSB9LCBnZXRUb3VjaEFjdGlvbjogZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIFtLYl07XG4gICAgfSwgcHJvY2VzczogZnVuY3Rpb24gKGEpIHtcbiAgICAgIHZhciBiID0gdGhpcy5vcHRpb25zLFxuICAgICAgICAgIGMgPSBhLnBvaW50ZXJzLmxlbmd0aCA9PT0gYi5wb2ludGVycyxcbiAgICAgICAgICBkID0gYS5kaXN0YW5jZSA8IGIudGhyZXNob2xkLFxuICAgICAgICAgIGUgPSBhLmRlbHRhVGltZSA+IGIudGltZTtpZiAodGhpcy5faW5wdXQgPSBhLCAhZCB8fCAhYyB8fCBhLmV2ZW50VHlwZSAmIChRIHwgUikgJiYgIWUpIHRoaXMucmVzZXQoKTtlbHNlIGlmIChhLmV2ZW50VHlwZSAmIE8pIHRoaXMucmVzZXQoKSwgdGhpcy5fdGltZXIgPSBrKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5zdGF0ZSA9IFZiLCB0aGlzLnRyeUVtaXQoKTtcbiAgICAgIH0sIGIudGltZSwgdGhpcyk7ZWxzZSBpZiAoYS5ldmVudFR5cGUgJiBRKSByZXR1cm4gVmI7cmV0dXJuIFhiO1xuICAgIH0sIHJlc2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICBjbGVhclRpbWVvdXQodGhpcy5fdGltZXIpO1xuICAgIH0sIGVtaXQ6IGZ1bmN0aW9uIChhKSB7XG4gICAgICB0aGlzLnN0YXRlID09PSBWYiAmJiAoYSAmJiBhLmV2ZW50VHlwZSAmIFEgPyB0aGlzLm1hbmFnZXIuZW1pdCh0aGlzLm9wdGlvbnMuZXZlbnQgKyBcInVwXCIsIGEpIDogKHRoaXMuX2lucHV0LnRpbWVTdGFtcCA9IGooKSwgdGhpcy5tYW5hZ2VyLmVtaXQodGhpcy5vcHRpb25zLmV2ZW50LCB0aGlzLl9pbnB1dCkpKTtcbiAgICB9IH0pLCBwKGVjLCBhYywgeyBkZWZhdWx0czogeyBldmVudDogXCJyb3RhdGVcIiwgdGhyZXNob2xkOiAwLCBwb2ludGVyczogMiB9LCBnZXRUb3VjaEFjdGlvbjogZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIFtNYl07XG4gICAgfSwgYXR0clRlc3Q6IGZ1bmN0aW9uIChhKSB7XG4gICAgICByZXR1cm4gdGhpcy5fc3VwZXIuYXR0clRlc3QuY2FsbCh0aGlzLCBhKSAmJiAoTWF0aC5hYnMoYS5yb3RhdGlvbikgPiB0aGlzLm9wdGlvbnMudGhyZXNob2xkIHx8IHRoaXMuc3RhdGUgJiBTYik7XG4gICAgfSB9KSwgcChmYywgYWMsIHsgZGVmYXVsdHM6IHsgZXZlbnQ6IFwic3dpcGVcIiwgdGhyZXNob2xkOiAxMCwgdmVsb2NpdHk6IC42NSwgZGlyZWN0aW9uOiBYIHwgWSwgcG9pbnRlcnM6IDEgfSwgZ2V0VG91Y2hBY3Rpb246IGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiBiYy5wcm90b3R5cGUuZ2V0VG91Y2hBY3Rpb24uY2FsbCh0aGlzKTtcbiAgICB9LCBhdHRyVGVzdDogZnVuY3Rpb24gKGEpIHtcbiAgICAgIHZhciBjLFxuICAgICAgICAgIGIgPSB0aGlzLm9wdGlvbnMuZGlyZWN0aW9uO3JldHVybiBiICYgKFggfCBZKSA/IGMgPSBhLnZlbG9jaXR5IDogYiAmIFggPyBjID0gYS52ZWxvY2l0eVggOiBiICYgWSAmJiAoYyA9IGEudmVsb2NpdHlZKSwgdGhpcy5fc3VwZXIuYXR0clRlc3QuY2FsbCh0aGlzLCBhKSAmJiBiICYgYS5kaXJlY3Rpb24gJiYgYS5kaXN0YW5jZSA+IHRoaXMub3B0aW9ucy50aHJlc2hvbGQgJiYgaShjKSA+IHRoaXMub3B0aW9ucy52ZWxvY2l0eSAmJiBhLmV2ZW50VHlwZSAmIFE7XG4gICAgfSwgZW1pdDogZnVuY3Rpb24gKGEpIHtcbiAgICAgIHZhciBiID0gJGIoYS5kaXJlY3Rpb24pO2IgJiYgdGhpcy5tYW5hZ2VyLmVtaXQodGhpcy5vcHRpb25zLmV2ZW50ICsgYiwgYSksIHRoaXMubWFuYWdlci5lbWl0KHRoaXMub3B0aW9ucy5ldmVudCwgYSk7XG4gICAgfSB9KSwgcChnYywgWWIsIHsgZGVmYXVsdHM6IHsgZXZlbnQ6IFwidGFwXCIsIHBvaW50ZXJzOiAxLCB0YXBzOiAxLCBpbnRlcnZhbDogMzAwLCB0aW1lOiAyNTAsIHRocmVzaG9sZDogMiwgcG9zVGhyZXNob2xkOiAxMCB9LCBnZXRUb3VjaEFjdGlvbjogZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIFtMYl07XG4gICAgfSwgcHJvY2VzczogZnVuY3Rpb24gKGEpIHtcbiAgICAgIHZhciBiID0gdGhpcy5vcHRpb25zLFxuICAgICAgICAgIGMgPSBhLnBvaW50ZXJzLmxlbmd0aCA9PT0gYi5wb2ludGVycyxcbiAgICAgICAgICBkID0gYS5kaXN0YW5jZSA8IGIudGhyZXNob2xkLFxuICAgICAgICAgIGUgPSBhLmRlbHRhVGltZSA8IGIudGltZTtpZiAodGhpcy5yZXNldCgpLCBhLmV2ZW50VHlwZSAmIE8gJiYgMCA9PT0gdGhpcy5jb3VudCkgcmV0dXJuIHRoaXMuZmFpbFRpbWVvdXQoKTtpZiAoZCAmJiBlICYmIGMpIHtcbiAgICAgICAgaWYgKGEuZXZlbnRUeXBlICE9IFEpIHJldHVybiB0aGlzLmZhaWxUaW1lb3V0KCk7dmFyIGYgPSB0aGlzLnBUaW1lID8gYS50aW1lU3RhbXAgLSB0aGlzLnBUaW1lIDwgYi5pbnRlcnZhbCA6ICEwLFxuICAgICAgICAgICAgZyA9ICF0aGlzLnBDZW50ZXIgfHwga2IodGhpcy5wQ2VudGVyLCBhLmNlbnRlcikgPCBiLnBvc1RocmVzaG9sZDt0aGlzLnBUaW1lID0gYS50aW1lU3RhbXAsIHRoaXMucENlbnRlciA9IGEuY2VudGVyLCBnICYmIGYgPyB0aGlzLmNvdW50ICs9IDEgOiB0aGlzLmNvdW50ID0gMSwgdGhpcy5faW5wdXQgPSBhO3ZhciBoID0gdGhpcy5jb3VudCAlIGIudGFwcztpZiAoMCA9PT0gaCkgcmV0dXJuIHRoaXMuaGFzUmVxdWlyZUZhaWx1cmVzKCkgPyAodGhpcy5fdGltZXIgPSBrKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICB0aGlzLnN0YXRlID0gVmIsIHRoaXMudHJ5RW1pdCgpO1xuICAgICAgICB9LCBiLmludGVydmFsLCB0aGlzKSwgU2IpIDogVmI7XG4gICAgICB9cmV0dXJuIFhiO1xuICAgIH0sIGZhaWxUaW1lb3V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gdGhpcy5fdGltZXIgPSBrKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5zdGF0ZSA9IFhiO1xuICAgICAgfSwgdGhpcy5vcHRpb25zLmludGVydmFsLCB0aGlzKSwgWGI7XG4gICAgfSwgcmVzZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgIGNsZWFyVGltZW91dCh0aGlzLl90aW1lcik7XG4gICAgfSwgZW1pdDogZnVuY3Rpb24gKCkge1xuICAgICAgdGhpcy5zdGF0ZSA9PSBWYiAmJiAodGhpcy5faW5wdXQudGFwQ291bnQgPSB0aGlzLmNvdW50LCB0aGlzLm1hbmFnZXIuZW1pdCh0aGlzLm9wdGlvbnMuZXZlbnQsIHRoaXMuX2lucHV0KSk7XG4gICAgfSB9KSwgaGMuVkVSU0lPTiA9IFwiMi4wLjRcIiwgaGMuZGVmYXVsdHMgPSB7IGRvbUV2ZW50czogITEsIHRvdWNoQWN0aW9uOiBKYiwgZW5hYmxlOiAhMCwgaW5wdXRUYXJnZXQ6IG51bGwsIGlucHV0Q2xhc3M6IG51bGwsIHByZXNldDogW1tlYywgeyBlbmFibGU6ICExIH1dLCBbY2MsIHsgZW5hYmxlOiAhMSB9LCBbXCJyb3RhdGVcIl1dLCBbZmMsIHsgZGlyZWN0aW9uOiBYIH1dLCBbYmMsIHsgZGlyZWN0aW9uOiBYIH0sIFtcInN3aXBlXCJdXSwgW2djXSwgW2djLCB7IGV2ZW50OiBcImRvdWJsZXRhcFwiLCB0YXBzOiAyIH0sIFtcInRhcFwiXV0sIFtkY11dLCBjc3NQcm9wczogeyB1c2VyU2VsZWN0OiBcImRlZmF1bHRcIiwgdG91Y2hTZWxlY3Q6IFwibm9uZVwiLCB0b3VjaENhbGxvdXQ6IFwibm9uZVwiLCBjb250ZW50Wm9vbWluZzogXCJub25lXCIsIHVzZXJEcmFnOiBcIm5vbmVcIiwgdGFwSGlnaGxpZ2h0Q29sb3I6IFwicmdiYSgwLDAsMCwwKVwiIH0gfTt2YXIgaWMgPSAxLFxuICAgICAgamMgPSAyO2tjLnByb3RvdHlwZSA9IHsgc2V0OiBmdW5jdGlvbiAoYSkge1xuICAgICAgcmV0dXJuIG4odGhpcy5vcHRpb25zLCBhKSwgYS50b3VjaEFjdGlvbiAmJiB0aGlzLnRvdWNoQWN0aW9uLnVwZGF0ZSgpLCBhLmlucHV0VGFyZ2V0ICYmICh0aGlzLmlucHV0LmRlc3Ryb3koKSwgdGhpcy5pbnB1dC50YXJnZXQgPSBhLmlucHV0VGFyZ2V0LCB0aGlzLmlucHV0LmluaXQoKSksIHRoaXM7XG4gICAgfSwgc3RvcDogZnVuY3Rpb24gKGEpIHtcbiAgICAgIHRoaXMuc2Vzc2lvbi5zdG9wcGVkID0gYSA/IGpjIDogaWM7XG4gICAgfSwgcmVjb2duaXplOiBmdW5jdGlvbiAoYSkge1xuICAgICAgdmFyIGIgPSB0aGlzLnNlc3Npb247aWYgKCFiLnN0b3BwZWQpIHtcbiAgICAgICAgdGhpcy50b3VjaEFjdGlvbi5wcmV2ZW50RGVmYXVsdHMoYSk7dmFyIGMsXG4gICAgICAgICAgICBkID0gdGhpcy5yZWNvZ25pemVycyxcbiAgICAgICAgICAgIGUgPSBiLmN1clJlY29nbml6ZXI7KCFlIHx8IGUgJiYgZS5zdGF0ZSAmIFZiKSAmJiAoZSA9IGIuY3VyUmVjb2duaXplciA9IG51bGwpO2ZvciAodmFyIGYgPSAwOyBmIDwgZC5sZW5ndGg7KSB7XG4gICAgICAgICAgYyA9IGRbZl0sIGIuc3RvcHBlZCA9PT0gamMgfHwgZSAmJiBjICE9IGUgJiYgIWMuY2FuUmVjb2duaXplV2l0aChlKSA/IGMucmVzZXQoKSA6IGMucmVjb2duaXplKGEpLCAhZSAmJiBjLnN0YXRlICYgKFNiIHwgVGIgfCBVYikgJiYgKGUgPSBiLmN1clJlY29nbml6ZXIgPSBjKSwgZisrO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSwgZ2V0OiBmdW5jdGlvbiAoYSkge1xuICAgICAgaWYgKGEgaW5zdGFuY2VvZiBZYikgcmV0dXJuIGE7Zm9yICh2YXIgYiA9IHRoaXMucmVjb2duaXplcnMsIGMgPSAwOyBjIDwgYi5sZW5ndGg7IGMrKykge1xuICAgICAgICBpZiAoYltjXS5vcHRpb25zLmV2ZW50ID09IGEpIHJldHVybiBiW2NdO1xuICAgICAgfXJldHVybiBudWxsO1xuICAgIH0sIGFkZDogZnVuY3Rpb24gKGEpIHtcbiAgICAgIGlmIChsKGEsIFwiYWRkXCIsIHRoaXMpKSByZXR1cm4gdGhpczt2YXIgYiA9IHRoaXMuZ2V0KGEub3B0aW9ucy5ldmVudCk7cmV0dXJuIGIgJiYgdGhpcy5yZW1vdmUoYiksIHRoaXMucmVjb2duaXplcnMucHVzaChhKSwgYS5tYW5hZ2VyID0gdGhpcywgdGhpcy50b3VjaEFjdGlvbi51cGRhdGUoKSwgYTtcbiAgICB9LCByZW1vdmU6IGZ1bmN0aW9uIChhKSB7XG4gICAgICBpZiAobChhLCBcInJlbW92ZVwiLCB0aGlzKSkgcmV0dXJuIHRoaXM7dmFyIGIgPSB0aGlzLnJlY29nbml6ZXJzO3JldHVybiBhID0gdGhpcy5nZXQoYSksIGIuc3BsaWNlKHkoYiwgYSksIDEpLCB0aGlzLnRvdWNoQWN0aW9uLnVwZGF0ZSgpLCB0aGlzO1xuICAgIH0sIG9uOiBmdW5jdGlvbiAoYSwgYikge1xuICAgICAgdmFyIGMgPSB0aGlzLmhhbmRsZXJzO3JldHVybiBtKHgoYSksIGZ1bmN0aW9uIChhKSB7XG4gICAgICAgIGNbYV0gPSBjW2FdIHx8IFtdLCBjW2FdLnB1c2goYik7XG4gICAgICB9KSwgdGhpcztcbiAgICB9LCBvZmY6IGZ1bmN0aW9uIChhLCBiKSB7XG4gICAgICB2YXIgYyA9IHRoaXMuaGFuZGxlcnM7cmV0dXJuIG0oeChhKSwgZnVuY3Rpb24gKGEpIHtcbiAgICAgICAgYiA/IGNbYV0uc3BsaWNlKHkoY1thXSwgYiksIDEpIDogZGVsZXRlIGNbYV07XG4gICAgICB9KSwgdGhpcztcbiAgICB9LCBlbWl0OiBmdW5jdGlvbiAoYSwgYikge1xuICAgICAgdGhpcy5vcHRpb25zLmRvbUV2ZW50cyAmJiBtYyhhLCBiKTt2YXIgYyA9IHRoaXMuaGFuZGxlcnNbYV0gJiYgdGhpcy5oYW5kbGVyc1thXS5zbGljZSgpO2lmIChjICYmIGMubGVuZ3RoKSB7XG4gICAgICAgIGIudHlwZSA9IGEsIGIucHJldmVudERlZmF1bHQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgYi5zcmNFdmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICB9O2ZvciAodmFyIGQgPSAwOyBkIDwgYy5sZW5ndGg7KSB7XG4gICAgICAgICAgY1tkXShiKSwgZCsrO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSwgZGVzdHJveTogZnVuY3Rpb24gKCkge1xuICAgICAgdGhpcy5lbGVtZW50ICYmIGxjKHRoaXMsICExKSwgdGhpcy5oYW5kbGVycyA9IHt9LCB0aGlzLnNlc3Npb24gPSB7fSwgdGhpcy5pbnB1dC5kZXN0cm95KCksIHRoaXMuZWxlbWVudCA9IG51bGw7XG4gICAgfSB9LCBuKGhjLCB7IElOUFVUX1NUQVJUOiBPLCBJTlBVVF9NT1ZFOiBQLCBJTlBVVF9FTkQ6IFEsIElOUFVUX0NBTkNFTDogUiwgU1RBVEVfUE9TU0lCTEU6IFJiLCBTVEFURV9CRUdBTjogU2IsIFNUQVRFX0NIQU5HRUQ6IFRiLCBTVEFURV9FTkRFRDogVWIsIFNUQVRFX1JFQ09HTklaRUQ6IFZiLCBTVEFURV9DQU5DRUxMRUQ6IFdiLCBTVEFURV9GQUlMRUQ6IFhiLCBESVJFQ1RJT05fTk9ORTogUywgRElSRUNUSU9OX0xFRlQ6IFQsIERJUkVDVElPTl9SSUdIVDogVSwgRElSRUNUSU9OX1VQOiBWLCBESVJFQ1RJT05fRE9XTjogVywgRElSRUNUSU9OX0hPUklaT05UQUw6IFgsIERJUkVDVElPTl9WRVJUSUNBTDogWSwgRElSRUNUSU9OX0FMTDogWiwgTWFuYWdlcjoga2MsIElucHV0OiBhYiwgVG91Y2hBY3Rpb246IFBiLCBUb3VjaElucHV0OiBFYiwgTW91c2VJbnB1dDogcmIsIFBvaW50ZXJFdmVudElucHV0OiB3YiwgVG91Y2hNb3VzZUlucHV0OiBHYiwgU2luZ2xlVG91Y2hJbnB1dDogQWIsIFJlY29nbml6ZXI6IFliLCBBdHRyUmVjb2duaXplcjogYWMsIFRhcDogZ2MsIFBhbjogYmMsIFN3aXBlOiBmYywgUGluY2g6IGNjLCBSb3RhdGU6IGVjLCBQcmVzczogZGMsIG9uOiB0LCBvZmY6IHUsIGVhY2g6IG0sIG1lcmdlOiBvLCBleHRlbmQ6IG4sIGluaGVyaXQ6IHAsIGJpbmRGbjogcSwgcHJlZml4ZWQ6IEIgfSksIHR5cGVvZiBkZWZpbmUgPT0gZyAmJiBkZWZpbmUuYW1kID8gZGVmaW5lKGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gaGM7XG4gIH0pIDogXCJ1bmRlZmluZWRcIiAhPSB0eXBlb2YgbW9kdWxlICYmIG1vZHVsZS5leHBvcnRzID8gbW9kdWxlLmV4cG9ydHMgPSBoYyA6IGFbY10gPSBoYztcbn0od2luZG93LCBkb2N1bWVudCwgXCJIYW1tZXJcIik7OyhmdW5jdGlvbiAoZmFjdG9yeSkge1xuICBpZiAodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKSB7XG4gICAgZGVmaW5lKFsnanF1ZXJ5JywgJ2hhbW1lcmpzJ10sIGZhY3RvcnkpO1xuICB9IGVsc2UgaWYgKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jykge1xuICAgIGZhY3RvcnkocmVxdWlyZSgnanF1ZXJ5JyksIHJlcXVpcmUoJ2hhbW1lcmpzJykpO1xuICB9IGVsc2Uge1xuICAgIGZhY3RvcnkoalF1ZXJ5LCBIYW1tZXIpO1xuICB9XG59KShmdW5jdGlvbiAoJCwgSGFtbWVyKSB7XG4gIGZ1bmN0aW9uIGhhbW1lcmlmeShlbCwgb3B0aW9ucykge1xuICAgIHZhciAkZWwgPSAkKGVsKTtcbiAgICBpZiAoISRlbC5kYXRhKFwiaGFtbWVyXCIpKSB7XG4gICAgICAkZWwuZGF0YShcImhhbW1lclwiLCBuZXcgSGFtbWVyKCRlbFswXSwgb3B0aW9ucykpO1xuICAgIH1cbiAgfVxuXG4gICQuZm4uaGFtbWVyID0gZnVuY3Rpb24gKG9wdGlvbnMpIHtcbiAgICByZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uICgpIHtcbiAgICAgIGhhbW1lcmlmeSh0aGlzLCBvcHRpb25zKTtcbiAgICB9KTtcbiAgfTtcblxuICAvLyBleHRlbmQgdGhlIGVtaXQgbWV0aG9kIHRvIGFsc28gdHJpZ2dlciBqUXVlcnkgZXZlbnRzXG4gIEhhbW1lci5NYW5hZ2VyLnByb3RvdHlwZS5lbWl0ID0gZnVuY3Rpb24gKG9yaWdpbmFsRW1pdCkge1xuICAgIHJldHVybiBmdW5jdGlvbiAodHlwZSwgZGF0YSkge1xuICAgICAgb3JpZ2luYWxFbWl0LmNhbGwodGhpcywgdHlwZSwgZGF0YSk7XG4gICAgICAkKHRoaXMuZWxlbWVudCkudHJpZ2dlcih7XG4gICAgICAgIHR5cGU6IHR5cGUsXG4gICAgICAgIGdlc3R1cmU6IGRhdGFcbiAgICAgIH0pO1xuICAgIH07XG4gIH0oSGFtbWVyLk1hbmFnZXIucHJvdG90eXBlLmVtaXQpO1xufSk7XG47IC8vIFJlcXVpcmVkIGZvciBNZXRlb3IgcGFja2FnZSwgdGhlIHVzZSBvZiB3aW5kb3cgcHJldmVudHMgZXhwb3J0IGJ5IE1ldGVvclxuKGZ1bmN0aW9uICh3aW5kb3cpIHtcbiAgaWYgKHdpbmRvdy5QYWNrYWdlKSB7XG4gICAgTWF0ZXJpYWxpemUgPSB7fTtcbiAgfSBlbHNlIHtcbiAgICB3aW5kb3cuTWF0ZXJpYWxpemUgPSB7fTtcbiAgfVxufSkod2luZG93KTtcblxuaWYgKHR5cGVvZiBleHBvcnRzICE9PSAndW5kZWZpbmVkJyAmJiAhZXhwb3J0cy5ub2RlVHlwZSkge1xuICBpZiAodHlwZW9mIG1vZHVsZSAhPT0gJ3VuZGVmaW5lZCcgJiYgIW1vZHVsZS5ub2RlVHlwZSAmJiBtb2R1bGUuZXhwb3J0cykge1xuICAgIGV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IE1hdGVyaWFsaXplO1xuICB9XG4gIGV4cG9ydHMuZGVmYXVsdCA9IE1hdGVyaWFsaXplO1xufVxuXG4vKlxuICogcmFmLmpzXG4gKiBodHRwczovL2dpdGh1Yi5jb20vbmdyeW1hbi9yYWYuanNcbiAqXG4gKiBvcmlnaW5hbCByZXF1ZXN0QW5pbWF0aW9uRnJhbWUgcG9seWZpbGwgYnkgRXJpayBNw7ZsbGVyXG4gKiBpbnNwaXJlZCBmcm9tIHBhdWxfaXJpc2ggZ2lzdCBhbmQgcG9zdFxuICpcbiAqIENvcHlyaWdodCAoYykgMjAxMyBuZ3J5bWFuXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UuXG4gKi9cbihmdW5jdGlvbiAod2luZG93KSB7XG4gIHZhciBsYXN0VGltZSA9IDAsXG4gICAgICB2ZW5kb3JzID0gWyd3ZWJraXQnLCAnbW96J10sXG4gICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUgPSB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lLFxuICAgICAgY2FuY2VsQW5pbWF0aW9uRnJhbWUgPSB3aW5kb3cuY2FuY2VsQW5pbWF0aW9uRnJhbWUsXG4gICAgICBpID0gdmVuZG9ycy5sZW5ndGg7XG5cbiAgLy8gdHJ5IHRvIHVuLXByZWZpeCBleGlzdGluZyByYWZcbiAgd2hpbGUgKC0taSA+PSAwICYmICFyZXF1ZXN0QW5pbWF0aW9uRnJhbWUpIHtcbiAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUgPSB3aW5kb3dbdmVuZG9yc1tpXSArICdSZXF1ZXN0QW5pbWF0aW9uRnJhbWUnXTtcbiAgICBjYW5jZWxBbmltYXRpb25GcmFtZSA9IHdpbmRvd1t2ZW5kb3JzW2ldICsgJ0NhbmNlbFJlcXVlc3RBbmltYXRpb25GcmFtZSddO1xuICB9XG5cbiAgLy8gcG9seWZpbGwgd2l0aCBzZXRUaW1lb3V0IGZhbGxiYWNrXG4gIC8vIGhlYXZpbHkgaW5zcGlyZWQgZnJvbSBAZGFyaXVzIGdpc3QgbW9kOiBodHRwczovL2dpc3QuZ2l0aHViLmNvbS9wYXVsaXJpc2gvMTU3OTY3MSNjb21tZW50LTgzNzk0NVxuICBpZiAoIXJlcXVlc3RBbmltYXRpb25GcmFtZSB8fCAhY2FuY2VsQW5pbWF0aW9uRnJhbWUpIHtcbiAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUgPSBmdW5jdGlvbiAoY2FsbGJhY2spIHtcbiAgICAgIHZhciBub3cgPSArRGF0ZS5ub3coKSxcbiAgICAgICAgICBuZXh0VGltZSA9IE1hdGgubWF4KGxhc3RUaW1lICsgMTYsIG5vdyk7XG4gICAgICByZXR1cm4gc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgIGNhbGxiYWNrKGxhc3RUaW1lID0gbmV4dFRpbWUpO1xuICAgICAgfSwgbmV4dFRpbWUgLSBub3cpO1xuICAgIH07XG5cbiAgICBjYW5jZWxBbmltYXRpb25GcmFtZSA9IGNsZWFyVGltZW91dDtcbiAgfVxuXG4gIC8vIGV4cG9ydCB0byB3aW5kb3dcbiAgd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZSA9IHJlcXVlc3RBbmltYXRpb25GcmFtZTtcbiAgd2luZG93LmNhbmNlbEFuaW1hdGlvbkZyYW1lID0gY2FuY2VsQW5pbWF0aW9uRnJhbWU7XG59KSh3aW5kb3cpO1xuXG4vKipcbiAqIEdlbmVyYXRlIGFwcHJveGltYXRlZCBzZWxlY3RvciBzdHJpbmcgZm9yIGEgalF1ZXJ5IG9iamVjdFxuICogQHBhcmFtIHtqUXVlcnl9IG9iaiAgalF1ZXJ5IG9iamVjdCB0byBiZSBwYXJzZWRcbiAqIEByZXR1cm5zIHtzdHJpbmd9XG4gKi9cbk1hdGVyaWFsaXplLm9iamVjdFNlbGVjdG9yU3RyaW5nID0gZnVuY3Rpb24gKG9iaikge1xuICB2YXIgdGFnU3RyID0gb2JqLnByb3AoJ3RhZ05hbWUnKSB8fCAnJztcbiAgdmFyIGlkU3RyID0gb2JqLmF0dHIoJ2lkJykgfHwgJyc7XG4gIHZhciBjbGFzc1N0ciA9IG9iai5hdHRyKCdjbGFzcycpIHx8ICcnO1xuICByZXR1cm4gKHRhZ1N0ciArIGlkU3RyICsgY2xhc3NTdHIpLnJlcGxhY2UoL1xccy9nLCAnJyk7XG59O1xuXG4vLyBVbmlxdWUgUmFuZG9tIElEXG5NYXRlcmlhbGl6ZS5ndWlkID0gZnVuY3Rpb24gKCkge1xuICBmdW5jdGlvbiBzNCgpIHtcbiAgICByZXR1cm4gTWF0aC5mbG9vcigoMSArIE1hdGgucmFuZG9tKCkpICogMHgxMDAwMCkudG9TdHJpbmcoMTYpLnN1YnN0cmluZygxKTtcbiAgfVxuICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBzNCgpICsgczQoKSArICctJyArIHM0KCkgKyAnLScgKyBzNCgpICsgJy0nICsgczQoKSArICctJyArIHM0KCkgKyBzNCgpICsgczQoKTtcbiAgfTtcbn0oKTtcblxuLyoqXG4gKiBFc2NhcGVzIGhhc2ggZnJvbSBzcGVjaWFsIGNoYXJhY3RlcnNcbiAqIEBwYXJhbSB7c3RyaW5nfSBoYXNoICBTdHJpbmcgcmV0dXJuZWQgZnJvbSB0aGlzLmhhc2hcbiAqIEByZXR1cm5zIHtzdHJpbmd9XG4gKi9cbk1hdGVyaWFsaXplLmVzY2FwZUhhc2ggPSBmdW5jdGlvbiAoaGFzaCkge1xuICByZXR1cm4gaGFzaC5yZXBsYWNlKC8oOnxcXC58XFxbfFxcXXwsfD0pL2csIFwiXFxcXCQxXCIpO1xufTtcblxuTWF0ZXJpYWxpemUuZWxlbWVudE9yUGFyZW50SXNGaXhlZCA9IGZ1bmN0aW9uIChlbGVtZW50KSB7XG4gIHZhciAkZWxlbWVudCA9ICQoZWxlbWVudCk7XG4gIHZhciAkY2hlY2tFbGVtZW50cyA9ICRlbGVtZW50LmFkZCgkZWxlbWVudC5wYXJlbnRzKCkpO1xuICB2YXIgaXNGaXhlZCA9IGZhbHNlO1xuICAkY2hlY2tFbGVtZW50cy5lYWNoKGZ1bmN0aW9uICgpIHtcbiAgICBpZiAoJCh0aGlzKS5jc3MoXCJwb3NpdGlvblwiKSA9PT0gXCJmaXhlZFwiKSB7XG4gICAgICBpc0ZpeGVkID0gdHJ1ZTtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH0pO1xuICByZXR1cm4gaXNGaXhlZDtcbn07XG5cbi8qKlxuICogR2V0IHRpbWUgaW4gbXNcbiAqIEBsaWNlbnNlIGh0dHBzOi8vcmF3LmdpdGh1Yi5jb20vamFzaGtlbmFzL3VuZGVyc2NvcmUvbWFzdGVyL0xJQ0VOU0VcbiAqIEB0eXBlIHtmdW5jdGlvbn1cbiAqIEByZXR1cm4ge251bWJlcn1cbiAqL1xudmFyIGdldFRpbWUgPSBEYXRlLm5vdyB8fCBmdW5jdGlvbiAoKSB7XG4gIHJldHVybiBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcbn07XG5cbi8qKlxuICogUmV0dXJucyBhIGZ1bmN0aW9uLCB0aGF0LCB3aGVuIGludm9rZWQsIHdpbGwgb25seSBiZSB0cmlnZ2VyZWQgYXQgbW9zdCBvbmNlXG4gKiBkdXJpbmcgYSBnaXZlbiB3aW5kb3cgb2YgdGltZS4gTm9ybWFsbHksIHRoZSB0aHJvdHRsZWQgZnVuY3Rpb24gd2lsbCBydW5cbiAqIGFzIG11Y2ggYXMgaXQgY2FuLCB3aXRob3V0IGV2ZXIgZ29pbmcgbW9yZSB0aGFuIG9uY2UgcGVyIGB3YWl0YCBkdXJhdGlvbjtcbiAqIGJ1dCBpZiB5b3UnZCBsaWtlIHRvIGRpc2FibGUgdGhlIGV4ZWN1dGlvbiBvbiB0aGUgbGVhZGluZyBlZGdlLCBwYXNzXG4gKiBge2xlYWRpbmc6IGZhbHNlfWAuIFRvIGRpc2FibGUgZXhlY3V0aW9uIG9uIHRoZSB0cmFpbGluZyBlZGdlLCBkaXR0by5cbiAqIEBsaWNlbnNlIGh0dHBzOi8vcmF3LmdpdGh1Yi5jb20vamFzaGtlbmFzL3VuZGVyc2NvcmUvbWFzdGVyL0xJQ0VOU0VcbiAqIEBwYXJhbSB7ZnVuY3Rpb259IGZ1bmNcbiAqIEBwYXJhbSB7bnVtYmVyfSB3YWl0XG4gKiBAcGFyYW0ge09iamVjdD19IG9wdGlvbnNcbiAqIEByZXR1cm5zIHtGdW5jdGlvbn1cbiAqL1xuTWF0ZXJpYWxpemUudGhyb3R0bGUgPSBmdW5jdGlvbiAoZnVuYywgd2FpdCwgb3B0aW9ucykge1xuICB2YXIgY29udGV4dCwgYXJncywgcmVzdWx0O1xuICB2YXIgdGltZW91dCA9IG51bGw7XG4gIHZhciBwcmV2aW91cyA9IDA7XG4gIG9wdGlvbnMgfHwgKG9wdGlvbnMgPSB7fSk7XG4gIHZhciBsYXRlciA9IGZ1bmN0aW9uICgpIHtcbiAgICBwcmV2aW91cyA9IG9wdGlvbnMubGVhZGluZyA9PT0gZmFsc2UgPyAwIDogZ2V0VGltZSgpO1xuICAgIHRpbWVvdXQgPSBudWxsO1xuICAgIHJlc3VsdCA9IGZ1bmMuYXBwbHkoY29udGV4dCwgYXJncyk7XG4gICAgY29udGV4dCA9IGFyZ3MgPSBudWxsO1xuICB9O1xuICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgIHZhciBub3cgPSBnZXRUaW1lKCk7XG4gICAgaWYgKCFwcmV2aW91cyAmJiBvcHRpb25zLmxlYWRpbmcgPT09IGZhbHNlKSBwcmV2aW91cyA9IG5vdztcbiAgICB2YXIgcmVtYWluaW5nID0gd2FpdCAtIChub3cgLSBwcmV2aW91cyk7XG4gICAgY29udGV4dCA9IHRoaXM7XG4gICAgYXJncyA9IGFyZ3VtZW50cztcbiAgICBpZiAocmVtYWluaW5nIDw9IDApIHtcbiAgICAgIGNsZWFyVGltZW91dCh0aW1lb3V0KTtcbiAgICAgIHRpbWVvdXQgPSBudWxsO1xuICAgICAgcHJldmlvdXMgPSBub3c7XG4gICAgICByZXN1bHQgPSBmdW5jLmFwcGx5KGNvbnRleHQsIGFyZ3MpO1xuICAgICAgY29udGV4dCA9IGFyZ3MgPSBudWxsO1xuICAgIH0gZWxzZSBpZiAoIXRpbWVvdXQgJiYgb3B0aW9ucy50cmFpbGluZyAhPT0gZmFsc2UpIHtcbiAgICAgIHRpbWVvdXQgPSBzZXRUaW1lb3V0KGxhdGVyLCByZW1haW5pbmcpO1xuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0O1xuICB9O1xufTtcblxuLy8gVmVsb2NpdHkgaGFzIGNvbmZsaWN0cyB3aGVuIGxvYWRlZCB3aXRoIGpRdWVyeSwgdGhpcyB3aWxsIGNoZWNrIGZvciBpdFxuLy8gRmlyc3QsIGNoZWNrIGlmIGluIG5vQ29uZmxpY3QgbW9kZVxudmFyIFZlbDtcbmlmIChqUXVlcnkpIHtcbiAgVmVsID0galF1ZXJ5LlZlbG9jaXR5O1xufSBlbHNlIGlmICgkKSB7XG4gIFZlbCA9ICQuVmVsb2NpdHk7XG59IGVsc2Uge1xuICBWZWwgPSBWZWxvY2l0eTtcbn1cblxuaWYgKFZlbCkge1xuICBNYXRlcmlhbGl6ZS5WZWwgPSBWZWw7XG59IGVsc2Uge1xuICBNYXRlcmlhbGl6ZS5WZWwgPSBWZWxvY2l0eTtcbn1cbjsoZnVuY3Rpb24gKCQpIHtcbiAgJC5mbi5jb2xsYXBzaWJsZSA9IGZ1bmN0aW9uIChvcHRpb25zLCBtZXRob2RQYXJhbSkge1xuICAgIHZhciBkZWZhdWx0cyA9IHtcbiAgICAgIGFjY29yZGlvbjogdW5kZWZpbmVkLFxuICAgICAgb25PcGVuOiB1bmRlZmluZWQsXG4gICAgICBvbkNsb3NlOiB1bmRlZmluZWRcbiAgICB9O1xuXG4gICAgdmFyIG1ldGhvZE5hbWUgPSBvcHRpb25zO1xuICAgIG9wdGlvbnMgPSAkLmV4dGVuZChkZWZhdWx0cywgb3B0aW9ucyk7XG5cbiAgICByZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uICgpIHtcblxuICAgICAgdmFyICR0aGlzID0gJCh0aGlzKTtcblxuICAgICAgdmFyICRwYW5lbF9oZWFkZXJzID0gJCh0aGlzKS5maW5kKCc+IGxpID4gLmNvbGxhcHNpYmxlLWhlYWRlcicpO1xuXG4gICAgICB2YXIgY29sbGFwc2libGVfdHlwZSA9ICR0aGlzLmRhdGEoXCJjb2xsYXBzaWJsZVwiKTtcblxuICAgICAgLyoqKioqKioqKioqKioqKipcbiAgICAgIEhlbHBlciBGdW5jdGlvbnNcbiAgICAgICoqKioqKioqKioqKioqKiovXG5cbiAgICAgIC8vIEFjY29yZGlvbiBPcGVuXG4gICAgICBmdW5jdGlvbiBhY2NvcmRpb25PcGVuKG9iamVjdCkge1xuICAgICAgICAkcGFuZWxfaGVhZGVycyA9ICR0aGlzLmZpbmQoJz4gbGkgPiAuY29sbGFwc2libGUtaGVhZGVyJyk7XG4gICAgICAgIGlmIChvYmplY3QuaGFzQ2xhc3MoJ2FjdGl2ZScpKSB7XG4gICAgICAgICAgb2JqZWN0LnBhcmVudCgpLmFkZENsYXNzKCdhY3RpdmUnKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBvYmplY3QucGFyZW50KCkucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChvYmplY3QucGFyZW50KCkuaGFzQ2xhc3MoJ2FjdGl2ZScpKSB7XG4gICAgICAgICAgb2JqZWN0LnNpYmxpbmdzKCcuY29sbGFwc2libGUtYm9keScpLnN0b3AodHJ1ZSwgZmFsc2UpLnNsaWRlRG93bih7IGR1cmF0aW9uOiAzNTAsIGVhc2luZzogXCJlYXNlT3V0UXVhcnRcIiwgcXVldWU6IGZhbHNlLCBjb21wbGV0ZTogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAkKHRoaXMpLmNzcygnaGVpZ2h0JywgJycpO1xuICAgICAgICAgICAgfSB9KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBvYmplY3Quc2libGluZ3MoJy5jb2xsYXBzaWJsZS1ib2R5Jykuc3RvcCh0cnVlLCBmYWxzZSkuc2xpZGVVcCh7IGR1cmF0aW9uOiAzNTAsIGVhc2luZzogXCJlYXNlT3V0UXVhcnRcIiwgcXVldWU6IGZhbHNlLCBjb21wbGV0ZTogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAkKHRoaXMpLmNzcygnaGVpZ2h0JywgJycpO1xuICAgICAgICAgICAgfSB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgICRwYW5lbF9oZWFkZXJzLm5vdChvYmplY3QpLnJlbW92ZUNsYXNzKCdhY3RpdmUnKS5wYXJlbnQoKS5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XG5cbiAgICAgICAgLy8gQ2xvc2UgcHJldmlvdXNseSBvcGVuIGFjY29yZGlvbiBlbGVtZW50cy5cbiAgICAgICAgJHBhbmVsX2hlYWRlcnMubm90KG9iamVjdCkucGFyZW50KCkuY2hpbGRyZW4oJy5jb2xsYXBzaWJsZS1ib2R5Jykuc3RvcCh0cnVlLCBmYWxzZSkuZWFjaChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgaWYgKCQodGhpcykuaXMoJzp2aXNpYmxlJykpIHtcbiAgICAgICAgICAgICQodGhpcykuc2xpZGVVcCh7XG4gICAgICAgICAgICAgIGR1cmF0aW9uOiAzNTAsXG4gICAgICAgICAgICAgIGVhc2luZzogXCJlYXNlT3V0UXVhcnRcIixcbiAgICAgICAgICAgICAgcXVldWU6IGZhbHNlLFxuICAgICAgICAgICAgICBjb21wbGV0ZTogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICQodGhpcykuY3NzKCdoZWlnaHQnLCAnJyk7XG4gICAgICAgICAgICAgICAgZXhlY0NhbGxiYWNrcygkKHRoaXMpLnNpYmxpbmdzKCcuY29sbGFwc2libGUtaGVhZGVyJykpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfVxuXG4gICAgICAvLyBFeHBhbmRhYmxlIE9wZW5cbiAgICAgIGZ1bmN0aW9uIGV4cGFuZGFibGVPcGVuKG9iamVjdCkge1xuICAgICAgICBpZiAob2JqZWN0Lmhhc0NsYXNzKCdhY3RpdmUnKSkge1xuICAgICAgICAgIG9iamVjdC5wYXJlbnQoKS5hZGRDbGFzcygnYWN0aXZlJyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgb2JqZWN0LnBhcmVudCgpLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAob2JqZWN0LnBhcmVudCgpLmhhc0NsYXNzKCdhY3RpdmUnKSkge1xuICAgICAgICAgIG9iamVjdC5zaWJsaW5ncygnLmNvbGxhcHNpYmxlLWJvZHknKS5zdG9wKHRydWUsIGZhbHNlKS5zbGlkZURvd24oeyBkdXJhdGlvbjogMzUwLCBlYXNpbmc6IFwiZWFzZU91dFF1YXJ0XCIsIHF1ZXVlOiBmYWxzZSwgY29tcGxldGU6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgJCh0aGlzKS5jc3MoJ2hlaWdodCcsICcnKTtcbiAgICAgICAgICAgIH0gfSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgb2JqZWN0LnNpYmxpbmdzKCcuY29sbGFwc2libGUtYm9keScpLnN0b3AodHJ1ZSwgZmFsc2UpLnNsaWRlVXAoeyBkdXJhdGlvbjogMzUwLCBlYXNpbmc6IFwiZWFzZU91dFF1YXJ0XCIsIHF1ZXVlOiBmYWxzZSwgY29tcGxldGU6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgJCh0aGlzKS5jc3MoJ2hlaWdodCcsICcnKTtcbiAgICAgICAgICAgIH0gfSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLy8gT3BlbiBjb2xsYXBzaWJsZS4gb2JqZWN0OiAuY29sbGFwc2libGUtaGVhZGVyXG4gICAgICBmdW5jdGlvbiBjb2xsYXBzaWJsZU9wZW4ob2JqZWN0LCBub1RvZ2dsZSkge1xuICAgICAgICBpZiAoIW5vVG9nZ2xlKSB7XG4gICAgICAgICAgb2JqZWN0LnRvZ2dsZUNsYXNzKCdhY3RpdmUnKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChvcHRpb25zLmFjY29yZGlvbiB8fCBjb2xsYXBzaWJsZV90eXBlID09PSBcImFjY29yZGlvblwiIHx8IGNvbGxhcHNpYmxlX3R5cGUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIC8vIEhhbmRsZSBBY2NvcmRpb25cbiAgICAgICAgICBhY2NvcmRpb25PcGVuKG9iamVjdCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgLy8gSGFuZGxlIEV4cGFuZGFibGVzXG4gICAgICAgICAgZXhwYW5kYWJsZU9wZW4ob2JqZWN0KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGV4ZWNDYWxsYmFja3Mob2JqZWN0KTtcbiAgICAgIH1cblxuICAgICAgLy8gSGFuZGxlIGNhbGxiYWNrc1xuICAgICAgZnVuY3Rpb24gZXhlY0NhbGxiYWNrcyhvYmplY3QpIHtcbiAgICAgICAgaWYgKG9iamVjdC5oYXNDbGFzcygnYWN0aXZlJykpIHtcbiAgICAgICAgICBpZiAodHlwZW9mIG9wdGlvbnMub25PcGVuID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgICAgIG9wdGlvbnMub25PcGVuLmNhbGwodGhpcywgb2JqZWN0LnBhcmVudCgpKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaWYgKHR5cGVvZiBvcHRpb25zLm9uQ2xvc2UgPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICAgICAgb3B0aW9ucy5vbkNsb3NlLmNhbGwodGhpcywgb2JqZWN0LnBhcmVudCgpKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLyoqXG4gICAgICAgKiBDaGVjayBpZiBvYmplY3QgaXMgY2hpbGRyZW4gb2YgcGFuZWwgaGVhZGVyXG4gICAgICAgKiBAcGFyYW0gIHtPYmplY3R9ICBvYmplY3QgSnF1ZXJ5IG9iamVjdFxuICAgICAgICogQHJldHVybiB7Qm9vbGVhbn0gdHJ1ZSBpZiBpdCBpcyBjaGlsZHJlblxuICAgICAgICovXG4gICAgICBmdW5jdGlvbiBpc0NoaWxkcmVuT2ZQYW5lbEhlYWRlcihvYmplY3QpIHtcblxuICAgICAgICB2YXIgcGFuZWxIZWFkZXIgPSBnZXRQYW5lbEhlYWRlcihvYmplY3QpO1xuXG4gICAgICAgIHJldHVybiBwYW5lbEhlYWRlci5sZW5ndGggPiAwO1xuICAgICAgfVxuXG4gICAgICAvKipcbiAgICAgICAqIEdldCBwYW5lbCBoZWFkZXIgZnJvbSBhIGNoaWxkcmVuIGVsZW1lbnRcbiAgICAgICAqIEBwYXJhbSAge09iamVjdH0gb2JqZWN0IEpxdWVyeSBvYmplY3RcbiAgICAgICAqIEByZXR1cm4ge09iamVjdH0gcGFuZWwgaGVhZGVyIG9iamVjdFxuICAgICAgICovXG4gICAgICBmdW5jdGlvbiBnZXRQYW5lbEhlYWRlcihvYmplY3QpIHtcblxuICAgICAgICByZXR1cm4gb2JqZWN0LmNsb3Nlc3QoJ2xpID4gLmNvbGxhcHNpYmxlLWhlYWRlcicpO1xuICAgICAgfVxuXG4gICAgICAvLyBUdXJuIG9mZiBhbnkgZXhpc3RpbmcgZXZlbnQgaGFuZGxlcnNcbiAgICAgIGZ1bmN0aW9uIHJlbW92ZUV2ZW50SGFuZGxlcnMoKSB7XG4gICAgICAgICR0aGlzLm9mZignY2xpY2suY29sbGFwc2UnLCAnPiBsaSA+IC5jb2xsYXBzaWJsZS1oZWFkZXInKTtcbiAgICAgIH1cblxuICAgICAgLyoqKioqICBFbmQgSGVscGVyIEZ1bmN0aW9ucyAgKioqKiovXG5cbiAgICAgIC8vIE1ldGhvZHNcbiAgICAgIGlmIChtZXRob2ROYW1lID09PSAnZGVzdHJveScpIHtcbiAgICAgICAgcmVtb3ZlRXZlbnRIYW5kbGVycygpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9IGVsc2UgaWYgKG1ldGhvZFBhcmFtID49IDAgJiYgbWV0aG9kUGFyYW0gPCAkcGFuZWxfaGVhZGVycy5sZW5ndGgpIHtcbiAgICAgICAgdmFyICRjdXJyX2hlYWRlciA9ICRwYW5lbF9oZWFkZXJzLmVxKG1ldGhvZFBhcmFtKTtcbiAgICAgICAgaWYgKCRjdXJyX2hlYWRlci5sZW5ndGggJiYgKG1ldGhvZE5hbWUgPT09ICdvcGVuJyB8fCBtZXRob2ROYW1lID09PSAnY2xvc2UnICYmICRjdXJyX2hlYWRlci5oYXNDbGFzcygnYWN0aXZlJykpKSB7XG4gICAgICAgICAgY29sbGFwc2libGVPcGVuKCRjdXJyX2hlYWRlcik7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICByZW1vdmVFdmVudEhhbmRsZXJzKCk7XG5cbiAgICAgIC8vIEFkZCBjbGljayBoYW5kbGVyIHRvIG9ubHkgZGlyZWN0IGNvbGxhcHNpYmxlIGhlYWRlciBjaGlsZHJlblxuICAgICAgJHRoaXMub24oJ2NsaWNrLmNvbGxhcHNlJywgJz4gbGkgPiAuY29sbGFwc2libGUtaGVhZGVyJywgZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgdmFyIGVsZW1lbnQgPSAkKGUudGFyZ2V0KTtcblxuICAgICAgICBpZiAoaXNDaGlsZHJlbk9mUGFuZWxIZWFkZXIoZWxlbWVudCkpIHtcbiAgICAgICAgICBlbGVtZW50ID0gZ2V0UGFuZWxIZWFkZXIoZWxlbWVudCk7XG4gICAgICAgIH1cblxuICAgICAgICBjb2xsYXBzaWJsZU9wZW4oZWxlbWVudCk7XG4gICAgICB9KTtcblxuICAgICAgLy8gT3BlbiBmaXJzdCBhY3RpdmVcbiAgICAgIGlmIChvcHRpb25zLmFjY29yZGlvbiB8fCBjb2xsYXBzaWJsZV90eXBlID09PSBcImFjY29yZGlvblwiIHx8IGNvbGxhcHNpYmxlX3R5cGUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAvLyBIYW5kbGUgQWNjb3JkaW9uXG4gICAgICAgIGNvbGxhcHNpYmxlT3BlbigkcGFuZWxfaGVhZGVycy5maWx0ZXIoJy5hY3RpdmUnKS5maXJzdCgpLCB0cnVlKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIEhhbmRsZSBFeHBhbmRhYmxlc1xuICAgICAgICAkcGFuZWxfaGVhZGVycy5maWx0ZXIoJy5hY3RpdmUnKS5lYWNoKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICBjb2xsYXBzaWJsZU9wZW4oJCh0aGlzKSwgdHJ1ZSk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0pO1xuICB9O1xuXG4gICQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uICgpIHtcbiAgICAkKCcuY29sbGFwc2libGUnKS5jb2xsYXBzaWJsZSgpO1xuICB9KTtcbn0pKGpRdWVyeSk7OyhmdW5jdGlvbiAoJCkge1xuXG4gIC8vIEFkZCBwb3NpYmlsaXR5IHRvIHNjcm9sbCB0byBzZWxlY3RlZCBvcHRpb25cbiAgLy8gdXNlZnVsbCBmb3Igc2VsZWN0IGZvciBleGFtcGxlXG4gICQuZm4uc2Nyb2xsVG8gPSBmdW5jdGlvbiAoZWxlbSkge1xuICAgICQodGhpcykuc2Nyb2xsVG9wKCQodGhpcykuc2Nyb2xsVG9wKCkgLSAkKHRoaXMpLm9mZnNldCgpLnRvcCArICQoZWxlbSkub2Zmc2V0KCkudG9wKTtcbiAgICByZXR1cm4gdGhpcztcbiAgfTtcblxuICAkLmZuLmRyb3Bkb3duID0gZnVuY3Rpb24gKG9wdGlvbnMpIHtcbiAgICB2YXIgZGVmYXVsdHMgPSB7XG4gICAgICBpbkR1cmF0aW9uOiAzMDAsXG4gICAgICBvdXREdXJhdGlvbjogMjI1LFxuICAgICAgY29uc3RyYWluV2lkdGg6IHRydWUsIC8vIENvbnN0cmFpbnMgd2lkdGggb2YgZHJvcGRvd24gdG8gdGhlIGFjdGl2YXRvclxuICAgICAgaG92ZXI6IGZhbHNlLFxuICAgICAgZ3V0dGVyOiAwLCAvLyBTcGFjaW5nIGZyb20gZWRnZVxuICAgICAgYmVsb3dPcmlnaW46IGZhbHNlLFxuICAgICAgYWxpZ25tZW50OiAnbGVmdCcsXG4gICAgICBzdG9wUHJvcGFnYXRpb246IGZhbHNlXG4gICAgfTtcblxuICAgIC8vIE9wZW4gZHJvcGRvd24uXG4gICAgaWYgKG9wdGlvbnMgPT09IFwib3BlblwiKSB7XG4gICAgICB0aGlzLmVhY2goZnVuY3Rpb24gKCkge1xuICAgICAgICAkKHRoaXMpLnRyaWdnZXIoJ29wZW4nKTtcbiAgICAgIH0pO1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIC8vIENsb3NlIGRyb3Bkb3duLlxuICAgIGlmIChvcHRpb25zID09PSBcImNsb3NlXCIpIHtcbiAgICAgIHRoaXMuZWFjaChmdW5jdGlvbiAoKSB7XG4gICAgICAgICQodGhpcykudHJpZ2dlcignY2xvc2UnKTtcbiAgICAgIH0pO1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIHRoaXMuZWFjaChmdW5jdGlvbiAoKSB7XG4gICAgICB2YXIgb3JpZ2luID0gJCh0aGlzKTtcbiAgICAgIHZhciBjdXJyX29wdGlvbnMgPSAkLmV4dGVuZCh7fSwgZGVmYXVsdHMsIG9wdGlvbnMpO1xuICAgICAgdmFyIGlzRm9jdXNlZCA9IGZhbHNlO1xuXG4gICAgICAvLyBEcm9wZG93biBtZW51XG4gICAgICB2YXIgYWN0aXZhdGVzID0gJChcIiNcIiArIG9yaWdpbi5hdHRyKCdkYXRhLWFjdGl2YXRlcycpKTtcblxuICAgICAgZnVuY3Rpb24gdXBkYXRlT3B0aW9ucygpIHtcbiAgICAgICAgaWYgKG9yaWdpbi5kYXRhKCdpbmR1cmF0aW9uJykgIT09IHVuZGVmaW5lZCkgY3Vycl9vcHRpb25zLmluRHVyYXRpb24gPSBvcmlnaW4uZGF0YSgnaW5kdXJhdGlvbicpO1xuICAgICAgICBpZiAob3JpZ2luLmRhdGEoJ291dGR1cmF0aW9uJykgIT09IHVuZGVmaW5lZCkgY3Vycl9vcHRpb25zLm91dER1cmF0aW9uID0gb3JpZ2luLmRhdGEoJ291dGR1cmF0aW9uJyk7XG4gICAgICAgIGlmIChvcmlnaW4uZGF0YSgnY29uc3RyYWlud2lkdGgnKSAhPT0gdW5kZWZpbmVkKSBjdXJyX29wdGlvbnMuY29uc3RyYWluV2lkdGggPSBvcmlnaW4uZGF0YSgnY29uc3RyYWlud2lkdGgnKTtcbiAgICAgICAgaWYgKG9yaWdpbi5kYXRhKCdob3ZlcicpICE9PSB1bmRlZmluZWQpIGN1cnJfb3B0aW9ucy5ob3ZlciA9IG9yaWdpbi5kYXRhKCdob3ZlcicpO1xuICAgICAgICBpZiAob3JpZ2luLmRhdGEoJ2d1dHRlcicpICE9PSB1bmRlZmluZWQpIGN1cnJfb3B0aW9ucy5ndXR0ZXIgPSBvcmlnaW4uZGF0YSgnZ3V0dGVyJyk7XG4gICAgICAgIGlmIChvcmlnaW4uZGF0YSgnYmVsb3dvcmlnaW4nKSAhPT0gdW5kZWZpbmVkKSBjdXJyX29wdGlvbnMuYmVsb3dPcmlnaW4gPSBvcmlnaW4uZGF0YSgnYmVsb3dvcmlnaW4nKTtcbiAgICAgICAgaWYgKG9yaWdpbi5kYXRhKCdhbGlnbm1lbnQnKSAhPT0gdW5kZWZpbmVkKSBjdXJyX29wdGlvbnMuYWxpZ25tZW50ID0gb3JpZ2luLmRhdGEoJ2FsaWdubWVudCcpO1xuICAgICAgICBpZiAob3JpZ2luLmRhdGEoJ3N0b3Bwcm9wYWdhdGlvbicpICE9PSB1bmRlZmluZWQpIGN1cnJfb3B0aW9ucy5zdG9wUHJvcGFnYXRpb24gPSBvcmlnaW4uZGF0YSgnc3RvcHByb3BhZ2F0aW9uJyk7XG4gICAgICB9XG5cbiAgICAgIHVwZGF0ZU9wdGlvbnMoKTtcblxuICAgICAgLy8gQXR0YWNoIGRyb3Bkb3duIHRvIGl0cyBhY3RpdmF0b3JcbiAgICAgIG9yaWdpbi5hZnRlcihhY3RpdmF0ZXMpO1xuXG4gICAgICAvKlxuICAgICAgICBIZWxwZXIgZnVuY3Rpb24gdG8gcG9zaXRpb24gYW5kIHJlc2l6ZSBkcm9wZG93bi5cbiAgICAgICAgVXNlZCBpbiBob3ZlciBhbmQgY2xpY2sgaGFuZGxlci5cbiAgICAgICovXG4gICAgICBmdW5jdGlvbiBwbGFjZURyb3Bkb3duKGV2ZW50VHlwZSkge1xuICAgICAgICAvLyBDaGVjayBmb3Igc2ltdWx0YW5lb3VzIGZvY3VzIGFuZCBjbGljayBldmVudHMuXG4gICAgICAgIGlmIChldmVudFR5cGUgPT09ICdmb2N1cycpIHtcbiAgICAgICAgICBpc0ZvY3VzZWQgPSB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gQ2hlY2sgaHRtbCBkYXRhIGF0dHJpYnV0ZXNcbiAgICAgICAgdXBkYXRlT3B0aW9ucygpO1xuXG4gICAgICAgIC8vIFNldCBEcm9wZG93biBzdGF0ZVxuICAgICAgICBhY3RpdmF0ZXMuYWRkQ2xhc3MoJ2FjdGl2ZScpO1xuICAgICAgICBvcmlnaW4uYWRkQ2xhc3MoJ2FjdGl2ZScpO1xuXG4gICAgICAgIHZhciBvcmlnaW5XaWR0aCA9IG9yaWdpblswXS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS53aWR0aDtcblxuICAgICAgICAvLyBDb25zdHJhaW4gd2lkdGhcbiAgICAgICAgaWYgKGN1cnJfb3B0aW9ucy5jb25zdHJhaW5XaWR0aCA9PT0gdHJ1ZSkge1xuICAgICAgICAgIGFjdGl2YXRlcy5jc3MoJ3dpZHRoJywgb3JpZ2luV2lkdGgpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGFjdGl2YXRlcy5jc3MoJ3doaXRlLXNwYWNlJywgJ25vd3JhcCcpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gT2Zmc2NyZWVuIGRldGVjdGlvblxuICAgICAgICB2YXIgd2luZG93SGVpZ2h0ID0gd2luZG93LmlubmVySGVpZ2h0O1xuICAgICAgICB2YXIgb3JpZ2luSGVpZ2h0ID0gb3JpZ2luLmlubmVySGVpZ2h0KCk7XG4gICAgICAgIHZhciBvZmZzZXRMZWZ0ID0gb3JpZ2luLm9mZnNldCgpLmxlZnQ7XG4gICAgICAgIHZhciBvZmZzZXRUb3AgPSBvcmlnaW4ub2Zmc2V0KCkudG9wIC0gJCh3aW5kb3cpLnNjcm9sbFRvcCgpO1xuICAgICAgICB2YXIgY3VyckFsaWdubWVudCA9IGN1cnJfb3B0aW9ucy5hbGlnbm1lbnQ7XG4gICAgICAgIHZhciBndXR0ZXJTcGFjaW5nID0gMDtcbiAgICAgICAgdmFyIGxlZnRQb3NpdGlvbiA9IDA7XG5cbiAgICAgICAgLy8gQmVsb3cgT3JpZ2luXG4gICAgICAgIHZhciB2ZXJ0aWNhbE9mZnNldCA9IDA7XG4gICAgICAgIGlmIChjdXJyX29wdGlvbnMuYmVsb3dPcmlnaW4gPT09IHRydWUpIHtcbiAgICAgICAgICB2ZXJ0aWNhbE9mZnNldCA9IG9yaWdpbkhlaWdodDtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIENoZWNrIGZvciBzY3JvbGxpbmcgcG9zaXRpb25lZCBjb250YWluZXIuXG4gICAgICAgIHZhciBzY3JvbGxZT2Zmc2V0ID0gMDtcbiAgICAgICAgdmFyIHNjcm9sbFhPZmZzZXQgPSAwO1xuICAgICAgICB2YXIgd3JhcHBlciA9IG9yaWdpbi5wYXJlbnQoKTtcbiAgICAgICAgaWYgKCF3cmFwcGVyLmlzKCdib2R5JykpIHtcbiAgICAgICAgICBpZiAod3JhcHBlclswXS5zY3JvbGxIZWlnaHQgPiB3cmFwcGVyWzBdLmNsaWVudEhlaWdodCkge1xuICAgICAgICAgICAgc2Nyb2xsWU9mZnNldCA9IHdyYXBwZXJbMF0uc2Nyb2xsVG9wO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAod3JhcHBlclswXS5zY3JvbGxXaWR0aCA+IHdyYXBwZXJbMF0uY2xpZW50V2lkdGgpIHtcbiAgICAgICAgICAgIHNjcm9sbFhPZmZzZXQgPSB3cmFwcGVyWzBdLnNjcm9sbExlZnQ7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKG9mZnNldExlZnQgKyBhY3RpdmF0ZXMuaW5uZXJXaWR0aCgpID4gJCh3aW5kb3cpLndpZHRoKCkpIHtcbiAgICAgICAgICAvLyBEcm9wZG93biBnb2VzIHBhc3Qgc2NyZWVuIG9uIHJpZ2h0LCBmb3JjZSByaWdodCBhbGlnbm1lbnRcbiAgICAgICAgICBjdXJyQWxpZ25tZW50ID0gJ3JpZ2h0JztcbiAgICAgICAgfSBlbHNlIGlmIChvZmZzZXRMZWZ0IC0gYWN0aXZhdGVzLmlubmVyV2lkdGgoKSArIG9yaWdpbi5pbm5lcldpZHRoKCkgPCAwKSB7XG4gICAgICAgICAgLy8gRHJvcGRvd24gZ29lcyBwYXN0IHNjcmVlbiBvbiBsZWZ0LCBmb3JjZSBsZWZ0IGFsaWdubWVudFxuICAgICAgICAgIGN1cnJBbGlnbm1lbnQgPSAnbGVmdCc7XG4gICAgICAgIH1cbiAgICAgICAgLy8gVmVydGljYWwgYm90dG9tIG9mZnNjcmVlbiBkZXRlY3Rpb25cbiAgICAgICAgaWYgKG9mZnNldFRvcCArIGFjdGl2YXRlcy5pbm5lckhlaWdodCgpID4gd2luZG93SGVpZ2h0KSB7XG4gICAgICAgICAgLy8gSWYgZ29pbmcgdXB3YXJkcyBzdGlsbCBnb2VzIG9mZnNjcmVlbiwganVzdCBjcm9wIGhlaWdodCBvZiBkcm9wZG93bi5cbiAgICAgICAgICBpZiAob2Zmc2V0VG9wICsgb3JpZ2luSGVpZ2h0IC0gYWN0aXZhdGVzLmlubmVySGVpZ2h0KCkgPCAwKSB7XG4gICAgICAgICAgICB2YXIgYWRqdXN0ZWRIZWlnaHQgPSB3aW5kb3dIZWlnaHQgLSBvZmZzZXRUb3AgLSB2ZXJ0aWNhbE9mZnNldDtcbiAgICAgICAgICAgIGFjdGl2YXRlcy5jc3MoJ21heC1oZWlnaHQnLCBhZGp1c3RlZEhlaWdodCk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIC8vIEZsb3cgdXB3YXJkcy5cbiAgICAgICAgICAgIGlmICghdmVydGljYWxPZmZzZXQpIHtcbiAgICAgICAgICAgICAgdmVydGljYWxPZmZzZXQgKz0gb3JpZ2luSGVpZ2h0O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdmVydGljYWxPZmZzZXQgLT0gYWN0aXZhdGVzLmlubmVySGVpZ2h0KCk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLy8gSGFuZGxlIGVkZ2UgYWxpZ25tZW50XG4gICAgICAgIGlmIChjdXJyQWxpZ25tZW50ID09PSAnbGVmdCcpIHtcbiAgICAgICAgICBndXR0ZXJTcGFjaW5nID0gY3Vycl9vcHRpb25zLmd1dHRlcjtcbiAgICAgICAgICBsZWZ0UG9zaXRpb24gPSBvcmlnaW4ucG9zaXRpb24oKS5sZWZ0ICsgZ3V0dGVyU3BhY2luZztcbiAgICAgICAgfSBlbHNlIGlmIChjdXJyQWxpZ25tZW50ID09PSAncmlnaHQnKSB7XG4gICAgICAgICAgLy8gTWF0ZXJpYWwgaWNvbnMgZml4XG4gICAgICAgICAgYWN0aXZhdGVzLnN0b3AodHJ1ZSwgdHJ1ZSkuY3NzKHtcbiAgICAgICAgICAgIG9wYWNpdHk6IDAsXG4gICAgICAgICAgICBsZWZ0OiAwXG4gICAgICAgICAgfSk7XG5cbiAgICAgICAgICB2YXIgb2Zmc2V0UmlnaHQgPSBvcmlnaW4ucG9zaXRpb24oKS5sZWZ0ICsgb3JpZ2luV2lkdGggLSBhY3RpdmF0ZXMud2lkdGgoKTtcbiAgICAgICAgICBndXR0ZXJTcGFjaW5nID0gLWN1cnJfb3B0aW9ucy5ndXR0ZXI7XG4gICAgICAgICAgbGVmdFBvc2l0aW9uID0gb2Zmc2V0UmlnaHQgKyBndXR0ZXJTcGFjaW5nO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gUG9zaXRpb24gZHJvcGRvd25cbiAgICAgICAgYWN0aXZhdGVzLmNzcyh7XG4gICAgICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgICAgICAgdG9wOiBvcmlnaW4ucG9zaXRpb24oKS50b3AgKyB2ZXJ0aWNhbE9mZnNldCArIHNjcm9sbFlPZmZzZXQsXG4gICAgICAgICAgbGVmdDogbGVmdFBvc2l0aW9uICsgc2Nyb2xsWE9mZnNldFxuICAgICAgICB9KTtcblxuICAgICAgICAvLyBTaG93IGRyb3Bkb3duXG4gICAgICAgIGFjdGl2YXRlcy5zbGlkZURvd24oe1xuICAgICAgICAgIHF1ZXVlOiBmYWxzZSxcbiAgICAgICAgICBkdXJhdGlvbjogY3Vycl9vcHRpb25zLmluRHVyYXRpb24sXG4gICAgICAgICAgZWFzaW5nOiAnZWFzZU91dEN1YmljJyxcbiAgICAgICAgICBjb21wbGV0ZTogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgJCh0aGlzKS5jc3MoJ2hlaWdodCcsICcnKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pLmFuaW1hdGUoeyBvcGFjaXR5OiAxIH0sIHsgcXVldWU6IGZhbHNlLCBkdXJhdGlvbjogY3Vycl9vcHRpb25zLmluRHVyYXRpb24sIGVhc2luZzogJ2Vhc2VPdXRTaW5lJyB9KTtcblxuICAgICAgICAvLyBBZGQgY2xpY2sgY2xvc2UgaGFuZGxlciB0byBkb2N1bWVudFxuICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAkKGRvY3VtZW50KS5vbignY2xpY2suJyArIGFjdGl2YXRlcy5hdHRyKCdpZCcpLCBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgaGlkZURyb3Bkb3duKCk7XG4gICAgICAgICAgICAkKGRvY3VtZW50KS5vZmYoJ2NsaWNrLicgKyBhY3RpdmF0ZXMuYXR0cignaWQnKSk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH0sIDApO1xuICAgICAgfVxuXG4gICAgICBmdW5jdGlvbiBoaWRlRHJvcGRvd24oKSB7XG4gICAgICAgIC8vIENoZWNrIGZvciBzaW11bHRhbmVvdXMgZm9jdXMgYW5kIGNsaWNrIGV2ZW50cy5cbiAgICAgICAgaXNGb2N1c2VkID0gZmFsc2U7XG4gICAgICAgIGFjdGl2YXRlcy5mYWRlT3V0KGN1cnJfb3B0aW9ucy5vdXREdXJhdGlvbik7XG4gICAgICAgIGFjdGl2YXRlcy5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XG4gICAgICAgIG9yaWdpbi5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XG4gICAgICAgICQoZG9jdW1lbnQpLm9mZignY2xpY2suJyArIGFjdGl2YXRlcy5hdHRyKCdpZCcpKTtcbiAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgYWN0aXZhdGVzLmNzcygnbWF4LWhlaWdodCcsICcnKTtcbiAgICAgICAgfSwgY3Vycl9vcHRpb25zLm91dER1cmF0aW9uKTtcbiAgICAgIH1cblxuICAgICAgLy8gSG92ZXJcbiAgICAgIGlmIChjdXJyX29wdGlvbnMuaG92ZXIpIHtcbiAgICAgICAgdmFyIG9wZW4gPSBmYWxzZTtcbiAgICAgICAgb3JpZ2luLm9mZignY2xpY2suJyArIG9yaWdpbi5hdHRyKCdpZCcpKTtcbiAgICAgICAgLy8gSG92ZXIgaGFuZGxlciB0byBzaG93IGRyb3Bkb3duXG4gICAgICAgIG9yaWdpbi5vbignbW91c2VlbnRlcicsIGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgLy8gTW91c2Ugb3ZlclxuICAgICAgICAgIGlmIChvcGVuID09PSBmYWxzZSkge1xuICAgICAgICAgICAgcGxhY2VEcm9wZG93bigpO1xuICAgICAgICAgICAgb3BlbiA9IHRydWU7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgb3JpZ2luLm9uKCdtb3VzZWxlYXZlJywgZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAvLyBJZiBob3ZlciBvbiBvcmlnaW4gdGhlbiB0byBzb21ldGhpbmcgb3RoZXIgdGhhbiBkcm9wZG93biBjb250ZW50LCB0aGVuIGNsb3NlXG4gICAgICAgICAgdmFyIHRvRWwgPSBlLnRvRWxlbWVudCB8fCBlLnJlbGF0ZWRUYXJnZXQ7IC8vIGFkZGVkIGJyb3dzZXIgY29tcGF0aWJpbGl0eSBmb3IgdGFyZ2V0IGVsZW1lbnRcbiAgICAgICAgICBpZiAoISQodG9FbCkuY2xvc2VzdCgnLmRyb3Bkb3duLWNvbnRlbnQnKS5pcyhhY3RpdmF0ZXMpKSB7XG4gICAgICAgICAgICBhY3RpdmF0ZXMuc3RvcCh0cnVlLCB0cnVlKTtcbiAgICAgICAgICAgIGhpZGVEcm9wZG93bigpO1xuICAgICAgICAgICAgb3BlbiA9IGZhbHNlO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgYWN0aXZhdGVzLm9uKCdtb3VzZWxlYXZlJywgZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAvLyBNb3VzZSBvdXRcbiAgICAgICAgICB2YXIgdG9FbCA9IGUudG9FbGVtZW50IHx8IGUucmVsYXRlZFRhcmdldDtcbiAgICAgICAgICBpZiAoISQodG9FbCkuY2xvc2VzdCgnLmRyb3Bkb3duLWJ1dHRvbicpLmlzKG9yaWdpbikpIHtcbiAgICAgICAgICAgIGFjdGl2YXRlcy5zdG9wKHRydWUsIHRydWUpO1xuICAgICAgICAgICAgaGlkZURyb3Bkb3duKCk7XG4gICAgICAgICAgICBvcGVuID0gZmFsc2U7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICAvLyBDbGlja1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gQ2xpY2sgaGFuZGxlciB0byBzaG93IGRyb3Bkb3duXG4gICAgICAgIG9yaWdpbi5vZmYoJ2NsaWNrLicgKyBvcmlnaW4uYXR0cignaWQnKSk7XG4gICAgICAgIG9yaWdpbi5vbignY2xpY2suJyArIG9yaWdpbi5hdHRyKCdpZCcpLCBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgIGlmICghaXNGb2N1c2VkKSB7XG4gICAgICAgICAgICBpZiAob3JpZ2luWzBdID09IGUuY3VycmVudFRhcmdldCAmJiAhb3JpZ2luLmhhc0NsYXNzKCdhY3RpdmUnKSAmJiAkKGUudGFyZ2V0KS5jbG9zZXN0KCcuZHJvcGRvd24tY29udGVudCcpLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7IC8vIFByZXZlbnRzIGJ1dHRvbiBjbGljayBmcm9tIG1vdmluZyB3aW5kb3dcbiAgICAgICAgICAgICAgaWYgKGN1cnJfb3B0aW9ucy5zdG9wUHJvcGFnYXRpb24pIHtcbiAgICAgICAgICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIHBsYWNlRHJvcGRvd24oJ2NsaWNrJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBJZiBvcmlnaW4gaXMgY2xpY2tlZCBhbmQgbWVudSBpcyBvcGVuLCBjbG9zZSBtZW51XG4gICAgICAgICAgICBlbHNlIGlmIChvcmlnaW4uaGFzQ2xhc3MoJ2FjdGl2ZScpKSB7XG4gICAgICAgICAgICAgICAgaGlkZURyb3Bkb3duKCk7XG4gICAgICAgICAgICAgICAgJChkb2N1bWVudCkub2ZmKCdjbGljay4nICsgYWN0aXZhdGVzLmF0dHIoJ2lkJykpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH0gLy8gRW5kIGVsc2VcblxuICAgICAgLy8gTGlzdGVuIHRvIG9wZW4gYW5kIGNsb3NlIGV2ZW50IC0gdXNlZnVsIGZvciBzZWxlY3QgY29tcG9uZW50XG4gICAgICBvcmlnaW4ub24oJ29wZW4nLCBmdW5jdGlvbiAoZSwgZXZlbnRUeXBlKSB7XG4gICAgICAgIHBsYWNlRHJvcGRvd24oZXZlbnRUeXBlKTtcbiAgICAgIH0pO1xuICAgICAgb3JpZ2luLm9uKCdjbG9zZScsIGhpZGVEcm9wZG93bik7XG4gICAgfSk7XG4gIH07IC8vIEVuZCBkcm9wZG93biBwbHVnaW5cblxuICAkKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbiAoKSB7XG4gICAgJCgnLmRyb3Bkb3duLWJ1dHRvbicpLmRyb3Bkb3duKCk7XG4gIH0pO1xufSkoalF1ZXJ5KTtcbjsoZnVuY3Rpb24gKCQpIHtcblxuICAkLmZuLnBhcmFsbGF4ID0gZnVuY3Rpb24gKCkge1xuICAgIHZhciB3aW5kb3dfd2lkdGggPSAkKHdpbmRvdykud2lkdGgoKTtcbiAgICAvLyBQYXJhbGxheCBTY3JpcHRzXG4gICAgcmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbiAoaSkge1xuICAgICAgdmFyICR0aGlzID0gJCh0aGlzKTtcbiAgICAgICR0aGlzLmFkZENsYXNzKCdwYXJhbGxheCcpO1xuXG4gICAgICBmdW5jdGlvbiB1cGRhdGVQYXJhbGxheChpbml0aWFsKSB7XG4gICAgICAgIHZhciBjb250YWluZXJfaGVpZ2h0O1xuICAgICAgICBpZiAod2luZG93X3dpZHRoIDwgNjAxKSB7XG4gICAgICAgICAgY29udGFpbmVyX2hlaWdodCA9ICR0aGlzLmhlaWdodCgpID4gMCA/ICR0aGlzLmhlaWdodCgpIDogJHRoaXMuY2hpbGRyZW4oXCJpbWdcIikuaGVpZ2h0KCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgY29udGFpbmVyX2hlaWdodCA9ICR0aGlzLmhlaWdodCgpID4gMCA/ICR0aGlzLmhlaWdodCgpIDogNTAwO1xuICAgICAgICB9XG4gICAgICAgIHZhciAkaW1nID0gJHRoaXMuY2hpbGRyZW4oXCJpbWdcIikuZmlyc3QoKTtcbiAgICAgICAgdmFyIGltZ19oZWlnaHQgPSAkaW1nLmhlaWdodCgpO1xuICAgICAgICB2YXIgcGFyYWxsYXhfZGlzdCA9IGltZ19oZWlnaHQgLSBjb250YWluZXJfaGVpZ2h0O1xuICAgICAgICB2YXIgYm90dG9tID0gJHRoaXMub2Zmc2V0KCkudG9wICsgY29udGFpbmVyX2hlaWdodDtcbiAgICAgICAgdmFyIHRvcCA9ICR0aGlzLm9mZnNldCgpLnRvcDtcbiAgICAgICAgdmFyIHNjcm9sbFRvcCA9ICQod2luZG93KS5zY3JvbGxUb3AoKTtcbiAgICAgICAgdmFyIHdpbmRvd0hlaWdodCA9IHdpbmRvdy5pbm5lckhlaWdodDtcbiAgICAgICAgdmFyIHdpbmRvd0JvdHRvbSA9IHNjcm9sbFRvcCArIHdpbmRvd0hlaWdodDtcbiAgICAgICAgdmFyIHBlcmNlbnRTY3JvbGxlZCA9ICh3aW5kb3dCb3R0b20gLSB0b3ApIC8gKGNvbnRhaW5lcl9oZWlnaHQgKyB3aW5kb3dIZWlnaHQpO1xuICAgICAgICB2YXIgcGFyYWxsYXggPSBNYXRoLnJvdW5kKHBhcmFsbGF4X2Rpc3QgKiBwZXJjZW50U2Nyb2xsZWQpO1xuXG4gICAgICAgIGlmIChpbml0aWFsKSB7XG4gICAgICAgICAgJGltZy5jc3MoJ2Rpc3BsYXknLCAnYmxvY2snKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoYm90dG9tID4gc2Nyb2xsVG9wICYmIHRvcCA8IHNjcm9sbFRvcCArIHdpbmRvd0hlaWdodCkge1xuICAgICAgICAgICRpbWcuY3NzKCd0cmFuc2Zvcm0nLCBcInRyYW5zbGF0ZTNEKC01MCUsXCIgKyBwYXJhbGxheCArIFwicHgsIDApXCIpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8vIFdhaXQgZm9yIGltYWdlIGxvYWRcbiAgICAgICR0aGlzLmNoaWxkcmVuKFwiaW1nXCIpLm9uZShcImxvYWRcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgICB1cGRhdGVQYXJhbGxheCh0cnVlKTtcbiAgICAgIH0pLmVhY2goZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAodGhpcy5jb21wbGV0ZSkgJCh0aGlzKS50cmlnZ2VyKFwibG9hZFwiKTtcbiAgICAgIH0pO1xuXG4gICAgICAkKHdpbmRvdykuc2Nyb2xsKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgd2luZG93X3dpZHRoID0gJCh3aW5kb3cpLndpZHRoKCk7XG4gICAgICAgIHVwZGF0ZVBhcmFsbGF4KGZhbHNlKTtcbiAgICAgIH0pO1xuXG4gICAgICAkKHdpbmRvdykucmVzaXplKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgd2luZG93X3dpZHRoID0gJCh3aW5kb3cpLndpZHRoKCk7XG4gICAgICAgIHVwZGF0ZVBhcmFsbGF4KGZhbHNlKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9O1xufSkoalF1ZXJ5KTtcbjsgLyohXG4gICogV2F2ZXMgdjAuNi40XG4gICogaHR0cDovL2ZpYW4ubXkuaWQvV2F2ZXNcbiAgKlxuICAqIENvcHlyaWdodCAyMDE0IEFsZmlhbmEgRS4gU2lidWVhIGFuZCBvdGhlciBjb250cmlidXRvcnNcbiAgKiBSZWxlYXNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2VcbiAgKiBodHRwczovL2dpdGh1Yi5jb20vZmlhbnMvV2F2ZXMvYmxvYi9tYXN0ZXIvTElDRU5TRVxuICAqL1xuXG47KGZ1bmN0aW9uICh3aW5kb3cpIHtcbiAgJ3VzZSBzdHJpY3QnO1xuXG4gIHZhciBXYXZlcyA9IFdhdmVzIHx8IHt9O1xuICB2YXIgJCQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsLmJpbmQoZG9jdW1lbnQpO1xuXG4gIC8vIEZpbmQgZXhhY3QgcG9zaXRpb24gb2YgZWxlbWVudFxuICBmdW5jdGlvbiBpc1dpbmRvdyhvYmopIHtcbiAgICByZXR1cm4gb2JqICE9PSBudWxsICYmIG9iaiA9PT0gb2JqLndpbmRvdztcbiAgfVxuXG4gIGZ1bmN0aW9uIGdldFdpbmRvdyhlbGVtKSB7XG4gICAgcmV0dXJuIGlzV2luZG93KGVsZW0pID8gZWxlbSA6IGVsZW0ubm9kZVR5cGUgPT09IDkgJiYgZWxlbS5kZWZhdWx0VmlldztcbiAgfVxuXG4gIGZ1bmN0aW9uIG9mZnNldChlbGVtKSB7XG4gICAgdmFyIGRvY0VsZW0sXG4gICAgICAgIHdpbixcbiAgICAgICAgYm94ID0geyB0b3A6IDAsIGxlZnQ6IDAgfSxcbiAgICAgICAgZG9jID0gZWxlbSAmJiBlbGVtLm93bmVyRG9jdW1lbnQ7XG5cbiAgICBkb2NFbGVtID0gZG9jLmRvY3VtZW50RWxlbWVudDtcblxuICAgIGlmICh0eXBlb2YgZWxlbS5nZXRCb3VuZGluZ0NsaWVudFJlY3QgIT09IHR5cGVvZiB1bmRlZmluZWQpIHtcbiAgICAgIGJveCA9IGVsZW0uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgfVxuICAgIHdpbiA9IGdldFdpbmRvdyhkb2MpO1xuICAgIHJldHVybiB7XG4gICAgICB0b3A6IGJveC50b3AgKyB3aW4ucGFnZVlPZmZzZXQgLSBkb2NFbGVtLmNsaWVudFRvcCxcbiAgICAgIGxlZnQ6IGJveC5sZWZ0ICsgd2luLnBhZ2VYT2Zmc2V0IC0gZG9jRWxlbS5jbGllbnRMZWZ0XG4gICAgfTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNvbnZlcnRTdHlsZShvYmopIHtcbiAgICB2YXIgc3R5bGUgPSAnJztcblxuICAgIGZvciAodmFyIGEgaW4gb2JqKSB7XG4gICAgICBpZiAob2JqLmhhc093blByb3BlcnR5KGEpKSB7XG4gICAgICAgIHN0eWxlICs9IGEgKyAnOicgKyBvYmpbYV0gKyAnOyc7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHN0eWxlO1xuICB9XG5cbiAgdmFyIEVmZmVjdCA9IHtcblxuICAgIC8vIEVmZmVjdCBkZWxheVxuICAgIGR1cmF0aW9uOiA3NTAsXG5cbiAgICBzaG93OiBmdW5jdGlvbiAoZSwgZWxlbWVudCkge1xuXG4gICAgICAvLyBEaXNhYmxlIHJpZ2h0IGNsaWNrXG4gICAgICBpZiAoZS5idXR0b24gPT09IDIpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuXG4gICAgICB2YXIgZWwgPSBlbGVtZW50IHx8IHRoaXM7XG5cbiAgICAgIC8vIENyZWF0ZSByaXBwbGVcbiAgICAgIHZhciByaXBwbGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgIHJpcHBsZS5jbGFzc05hbWUgPSAnd2F2ZXMtcmlwcGxlJztcbiAgICAgIGVsLmFwcGVuZENoaWxkKHJpcHBsZSk7XG5cbiAgICAgIC8vIEdldCBjbGljayBjb29yZGluYXRlIGFuZCBlbGVtZW50IHdpdGRoXG4gICAgICB2YXIgcG9zID0gb2Zmc2V0KGVsKTtcbiAgICAgIHZhciByZWxhdGl2ZVkgPSBlLnBhZ2VZIC0gcG9zLnRvcDtcbiAgICAgIHZhciByZWxhdGl2ZVggPSBlLnBhZ2VYIC0gcG9zLmxlZnQ7XG4gICAgICB2YXIgc2NhbGUgPSAnc2NhbGUoJyArIGVsLmNsaWVudFdpZHRoIC8gMTAwICogMTAgKyAnKSc7XG5cbiAgICAgIC8vIFN1cHBvcnQgZm9yIHRvdWNoIGRldmljZXNcbiAgICAgIGlmICgndG91Y2hlcycgaW4gZSkge1xuICAgICAgICByZWxhdGl2ZVkgPSBlLnRvdWNoZXNbMF0ucGFnZVkgLSBwb3MudG9wO1xuICAgICAgICByZWxhdGl2ZVggPSBlLnRvdWNoZXNbMF0ucGFnZVggLSBwb3MubGVmdDtcbiAgICAgIH1cblxuICAgICAgLy8gQXR0YWNoIGRhdGEgdG8gZWxlbWVudFxuICAgICAgcmlwcGxlLnNldEF0dHJpYnV0ZSgnZGF0YS1ob2xkJywgRGF0ZS5ub3coKSk7XG4gICAgICByaXBwbGUuc2V0QXR0cmlidXRlKCdkYXRhLXNjYWxlJywgc2NhbGUpO1xuICAgICAgcmlwcGxlLnNldEF0dHJpYnV0ZSgnZGF0YS14JywgcmVsYXRpdmVYKTtcbiAgICAgIHJpcHBsZS5zZXRBdHRyaWJ1dGUoJ2RhdGEteScsIHJlbGF0aXZlWSk7XG5cbiAgICAgIC8vIFNldCByaXBwbGUgcG9zaXRpb25cbiAgICAgIHZhciByaXBwbGVTdHlsZSA9IHtcbiAgICAgICAgJ3RvcCc6IHJlbGF0aXZlWSArICdweCcsXG4gICAgICAgICdsZWZ0JzogcmVsYXRpdmVYICsgJ3B4J1xuICAgICAgfTtcblxuICAgICAgcmlwcGxlLmNsYXNzTmFtZSA9IHJpcHBsZS5jbGFzc05hbWUgKyAnIHdhdmVzLW5vdHJhbnNpdGlvbic7XG4gICAgICByaXBwbGUuc2V0QXR0cmlidXRlKCdzdHlsZScsIGNvbnZlcnRTdHlsZShyaXBwbGVTdHlsZSkpO1xuICAgICAgcmlwcGxlLmNsYXNzTmFtZSA9IHJpcHBsZS5jbGFzc05hbWUucmVwbGFjZSgnd2F2ZXMtbm90cmFuc2l0aW9uJywgJycpO1xuXG4gICAgICAvLyBTY2FsZSB0aGUgcmlwcGxlXG4gICAgICByaXBwbGVTdHlsZVsnLXdlYmtpdC10cmFuc2Zvcm0nXSA9IHNjYWxlO1xuICAgICAgcmlwcGxlU3R5bGVbJy1tb3otdHJhbnNmb3JtJ10gPSBzY2FsZTtcbiAgICAgIHJpcHBsZVN0eWxlWyctbXMtdHJhbnNmb3JtJ10gPSBzY2FsZTtcbiAgICAgIHJpcHBsZVN0eWxlWyctby10cmFuc2Zvcm0nXSA9IHNjYWxlO1xuICAgICAgcmlwcGxlU3R5bGUudHJhbnNmb3JtID0gc2NhbGU7XG4gICAgICByaXBwbGVTdHlsZS5vcGFjaXR5ID0gJzEnO1xuXG4gICAgICByaXBwbGVTdHlsZVsnLXdlYmtpdC10cmFuc2l0aW9uLWR1cmF0aW9uJ10gPSBFZmZlY3QuZHVyYXRpb24gKyAnbXMnO1xuICAgICAgcmlwcGxlU3R5bGVbJy1tb3otdHJhbnNpdGlvbi1kdXJhdGlvbiddID0gRWZmZWN0LmR1cmF0aW9uICsgJ21zJztcbiAgICAgIHJpcHBsZVN0eWxlWyctby10cmFuc2l0aW9uLWR1cmF0aW9uJ10gPSBFZmZlY3QuZHVyYXRpb24gKyAnbXMnO1xuICAgICAgcmlwcGxlU3R5bGVbJ3RyYW5zaXRpb24tZHVyYXRpb24nXSA9IEVmZmVjdC5kdXJhdGlvbiArICdtcyc7XG5cbiAgICAgIHJpcHBsZVN0eWxlWyctd2Via2l0LXRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uJ10gPSAnY3ViaWMtYmV6aWVyKDAuMjUwLCAwLjQ2MCwgMC40NTAsIDAuOTQwKSc7XG4gICAgICByaXBwbGVTdHlsZVsnLW1vei10cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbiddID0gJ2N1YmljLWJlemllcigwLjI1MCwgMC40NjAsIDAuNDUwLCAwLjk0MCknO1xuICAgICAgcmlwcGxlU3R5bGVbJy1vLXRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uJ10gPSAnY3ViaWMtYmV6aWVyKDAuMjUwLCAwLjQ2MCwgMC40NTAsIDAuOTQwKSc7XG4gICAgICByaXBwbGVTdHlsZVsndHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb24nXSA9ICdjdWJpYy1iZXppZXIoMC4yNTAsIDAuNDYwLCAwLjQ1MCwgMC45NDApJztcblxuICAgICAgcmlwcGxlLnNldEF0dHJpYnV0ZSgnc3R5bGUnLCBjb252ZXJ0U3R5bGUocmlwcGxlU3R5bGUpKTtcbiAgICB9LFxuXG4gICAgaGlkZTogZnVuY3Rpb24gKGUpIHtcbiAgICAgIFRvdWNoSGFuZGxlci50b3VjaHVwKGUpO1xuXG4gICAgICB2YXIgZWwgPSB0aGlzO1xuICAgICAgdmFyIHdpZHRoID0gZWwuY2xpZW50V2lkdGggKiAxLjQ7XG5cbiAgICAgIC8vIEdldCBmaXJzdCByaXBwbGVcbiAgICAgIHZhciByaXBwbGUgPSBudWxsO1xuICAgICAgdmFyIHJpcHBsZXMgPSBlbC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCd3YXZlcy1yaXBwbGUnKTtcbiAgICAgIGlmIChyaXBwbGVzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgcmlwcGxlID0gcmlwcGxlc1tyaXBwbGVzLmxlbmd0aCAtIDFdO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuXG4gICAgICB2YXIgcmVsYXRpdmVYID0gcmlwcGxlLmdldEF0dHJpYnV0ZSgnZGF0YS14Jyk7XG4gICAgICB2YXIgcmVsYXRpdmVZID0gcmlwcGxlLmdldEF0dHJpYnV0ZSgnZGF0YS15Jyk7XG4gICAgICB2YXIgc2NhbGUgPSByaXBwbGUuZ2V0QXR0cmlidXRlKCdkYXRhLXNjYWxlJyk7XG5cbiAgICAgIC8vIEdldCBkZWxheSBiZWV0d2VlbiBtb3VzZWRvd24gYW5kIG1vdXNlIGxlYXZlXG4gICAgICB2YXIgZGlmZiA9IERhdGUubm93KCkgLSBOdW1iZXIocmlwcGxlLmdldEF0dHJpYnV0ZSgnZGF0YS1ob2xkJykpO1xuICAgICAgdmFyIGRlbGF5ID0gMzUwIC0gZGlmZjtcblxuICAgICAgaWYgKGRlbGF5IDwgMCkge1xuICAgICAgICBkZWxheSA9IDA7XG4gICAgICB9XG5cbiAgICAgIC8vIEZhZGUgb3V0IHJpcHBsZSBhZnRlciBkZWxheVxuICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBzdHlsZSA9IHtcbiAgICAgICAgICAndG9wJzogcmVsYXRpdmVZICsgJ3B4JyxcbiAgICAgICAgICAnbGVmdCc6IHJlbGF0aXZlWCArICdweCcsXG4gICAgICAgICAgJ29wYWNpdHknOiAnMCcsXG5cbiAgICAgICAgICAvLyBEdXJhdGlvblxuICAgICAgICAgICctd2Via2l0LXRyYW5zaXRpb24tZHVyYXRpb24nOiBFZmZlY3QuZHVyYXRpb24gKyAnbXMnLFxuICAgICAgICAgICctbW96LXRyYW5zaXRpb24tZHVyYXRpb24nOiBFZmZlY3QuZHVyYXRpb24gKyAnbXMnLFxuICAgICAgICAgICctby10cmFuc2l0aW9uLWR1cmF0aW9uJzogRWZmZWN0LmR1cmF0aW9uICsgJ21zJyxcbiAgICAgICAgICAndHJhbnNpdGlvbi1kdXJhdGlvbic6IEVmZmVjdC5kdXJhdGlvbiArICdtcycsXG4gICAgICAgICAgJy13ZWJraXQtdHJhbnNmb3JtJzogc2NhbGUsXG4gICAgICAgICAgJy1tb3otdHJhbnNmb3JtJzogc2NhbGUsXG4gICAgICAgICAgJy1tcy10cmFuc2Zvcm0nOiBzY2FsZSxcbiAgICAgICAgICAnLW8tdHJhbnNmb3JtJzogc2NhbGUsXG4gICAgICAgICAgJ3RyYW5zZm9ybSc6IHNjYWxlXG4gICAgICAgIH07XG5cbiAgICAgICAgcmlwcGxlLnNldEF0dHJpYnV0ZSgnc3R5bGUnLCBjb252ZXJ0U3R5bGUoc3R5bGUpKTtcblxuICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgZWwucmVtb3ZlQ2hpbGQocmlwcGxlKTtcbiAgICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgfVxuICAgICAgICB9LCBFZmZlY3QuZHVyYXRpb24pO1xuICAgICAgfSwgZGVsYXkpO1xuICAgIH0sXG5cbiAgICAvLyBMaXR0bGUgaGFjayB0byBtYWtlIDxpbnB1dD4gY2FuIHBlcmZvcm0gd2F2ZXMgZWZmZWN0XG4gICAgd3JhcElucHV0OiBmdW5jdGlvbiAoZWxlbWVudHMpIHtcbiAgICAgIGZvciAodmFyIGEgPSAwOyBhIDwgZWxlbWVudHMubGVuZ3RoOyBhKyspIHtcbiAgICAgICAgdmFyIGVsID0gZWxlbWVudHNbYV07XG5cbiAgICAgICAgaWYgKGVsLnRhZ05hbWUudG9Mb3dlckNhc2UoKSA9PT0gJ2lucHV0Jykge1xuICAgICAgICAgIHZhciBwYXJlbnQgPSBlbC5wYXJlbnROb2RlO1xuXG4gICAgICAgICAgLy8gSWYgaW5wdXQgYWxyZWFkeSBoYXZlIHBhcmVudCBqdXN0IHBhc3MgdGhyb3VnaFxuICAgICAgICAgIGlmIChwYXJlbnQudGFnTmFtZS50b0xvd2VyQ2FzZSgpID09PSAnaScgJiYgcGFyZW50LmNsYXNzTmFtZS5pbmRleE9mKCd3YXZlcy1lZmZlY3QnKSAhPT0gLTEpIHtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC8vIFB1dCBlbGVtZW50IGNsYXNzIGFuZCBzdHlsZSB0byB0aGUgc3BlY2lmaWVkIHBhcmVudFxuICAgICAgICAgIHZhciB3cmFwcGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaScpO1xuICAgICAgICAgIHdyYXBwZXIuY2xhc3NOYW1lID0gZWwuY2xhc3NOYW1lICsgJyB3YXZlcy1pbnB1dC13cmFwcGVyJztcblxuICAgICAgICAgIHZhciBlbGVtZW50U3R5bGUgPSBlbC5nZXRBdHRyaWJ1dGUoJ3N0eWxlJyk7XG5cbiAgICAgICAgICBpZiAoIWVsZW1lbnRTdHlsZSkge1xuICAgICAgICAgICAgZWxlbWVudFN0eWxlID0gJyc7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgd3JhcHBlci5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywgZWxlbWVudFN0eWxlKTtcblxuICAgICAgICAgIGVsLmNsYXNzTmFtZSA9ICd3YXZlcy1idXR0b24taW5wdXQnO1xuICAgICAgICAgIGVsLnJlbW92ZUF0dHJpYnV0ZSgnc3R5bGUnKTtcblxuICAgICAgICAgIC8vIFB1dCBlbGVtZW50IGFzIGNoaWxkXG4gICAgICAgICAgcGFyZW50LnJlcGxhY2VDaGlsZCh3cmFwcGVyLCBlbCk7XG4gICAgICAgICAgd3JhcHBlci5hcHBlbmRDaGlsZChlbCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH07XG5cbiAgLyoqXG4gICAqIERpc2FibGUgbW91c2Vkb3duIGV2ZW50IGZvciA1MDBtcyBkdXJpbmcgYW5kIGFmdGVyIHRvdWNoXG4gICAqL1xuICB2YXIgVG91Y2hIYW5kbGVyID0ge1xuICAgIC8qIHVzZXMgYW4gaW50ZWdlciByYXRoZXIgdGhhbiBib29sIHNvIHRoZXJlJ3Mgbm8gaXNzdWVzIHdpdGhcbiAgICAgKiBuZWVkaW5nIHRvIGNsZWFyIHRpbWVvdXRzIGlmIGFub3RoZXIgdG91Y2ggZXZlbnQgb2NjdXJyZWRcbiAgICAgKiB3aXRoaW4gdGhlIDUwMG1zLiBDYW5ub3QgbW91c2V1cCBiZXR3ZWVuIHRvdWNoc3RhcnQgYW5kXG4gICAgICogdG91Y2hlbmQsIG5vciBpbiB0aGUgNTAwbXMgYWZ0ZXIgdG91Y2hlbmQuICovXG4gICAgdG91Y2hlczogMCxcbiAgICBhbGxvd0V2ZW50OiBmdW5jdGlvbiAoZSkge1xuICAgICAgdmFyIGFsbG93ID0gdHJ1ZTtcblxuICAgICAgaWYgKGUudHlwZSA9PT0gJ3RvdWNoc3RhcnQnKSB7XG4gICAgICAgIFRvdWNoSGFuZGxlci50b3VjaGVzICs9IDE7IC8vcHVzaFxuICAgICAgfSBlbHNlIGlmIChlLnR5cGUgPT09ICd0b3VjaGVuZCcgfHwgZS50eXBlID09PSAndG91Y2hjYW5jZWwnKSB7XG4gICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgIGlmIChUb3VjaEhhbmRsZXIudG91Y2hlcyA+IDApIHtcbiAgICAgICAgICAgIFRvdWNoSGFuZGxlci50b3VjaGVzIC09IDE7IC8vcG9wIGFmdGVyIDUwMG1zXG4gICAgICAgICAgfVxuICAgICAgICB9LCA1MDApO1xuICAgICAgfSBlbHNlIGlmIChlLnR5cGUgPT09ICdtb3VzZWRvd24nICYmIFRvdWNoSGFuZGxlci50b3VjaGVzID4gMCkge1xuICAgICAgICBhbGxvdyA9IGZhbHNlO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gYWxsb3c7XG4gICAgfSxcbiAgICB0b3VjaHVwOiBmdW5jdGlvbiAoZSkge1xuICAgICAgVG91Y2hIYW5kbGVyLmFsbG93RXZlbnQoZSk7XG4gICAgfVxuICB9O1xuXG4gIC8qKlxuICAgKiBEZWxlZ2F0ZWQgY2xpY2sgaGFuZGxlciBmb3IgLndhdmVzLWVmZmVjdCBlbGVtZW50LlxuICAgKiByZXR1cm5zIG51bGwgd2hlbiAud2F2ZXMtZWZmZWN0IGVsZW1lbnQgbm90IGluIFwiY2xpY2sgdHJlZVwiXG4gICAqL1xuICBmdW5jdGlvbiBnZXRXYXZlc0VmZmVjdEVsZW1lbnQoZSkge1xuICAgIGlmIChUb3VjaEhhbmRsZXIuYWxsb3dFdmVudChlKSA9PT0gZmFsc2UpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIHZhciBlbGVtZW50ID0gbnVsbDtcbiAgICB2YXIgdGFyZ2V0ID0gZS50YXJnZXQgfHwgZS5zcmNFbGVtZW50O1xuXG4gICAgd2hpbGUgKHRhcmdldC5wYXJlbnROb2RlICE9PSBudWxsKSB7XG4gICAgICBpZiAoISh0YXJnZXQgaW5zdGFuY2VvZiBTVkdFbGVtZW50KSAmJiB0YXJnZXQuY2xhc3NOYW1lLmluZGV4T2YoJ3dhdmVzLWVmZmVjdCcpICE9PSAtMSkge1xuICAgICAgICBlbGVtZW50ID0gdGFyZ2V0O1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICAgIHRhcmdldCA9IHRhcmdldC5wYXJlbnROb2RlO1xuICAgIH1cbiAgICByZXR1cm4gZWxlbWVudDtcbiAgfVxuXG4gIC8qKlxuICAgKiBCdWJibGUgdGhlIGNsaWNrIGFuZCBzaG93IGVmZmVjdCBpZiAud2F2ZXMtZWZmZWN0IGVsZW0gd2FzIGZvdW5kXG4gICAqL1xuICBmdW5jdGlvbiBzaG93RWZmZWN0KGUpIHtcbiAgICB2YXIgZWxlbWVudCA9IGdldFdhdmVzRWZmZWN0RWxlbWVudChlKTtcblxuICAgIGlmIChlbGVtZW50ICE9PSBudWxsKSB7XG4gICAgICBFZmZlY3Quc2hvdyhlLCBlbGVtZW50KTtcblxuICAgICAgaWYgKCdvbnRvdWNoc3RhcnQnIGluIHdpbmRvdykge1xuICAgICAgICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNoZW5kJywgRWZmZWN0LmhpZGUsIGZhbHNlKTtcbiAgICAgICAgZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCd0b3VjaGNhbmNlbCcsIEVmZmVjdC5oaWRlLCBmYWxzZSk7XG4gICAgICB9XG5cbiAgICAgIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2V1cCcsIEVmZmVjdC5oaWRlLCBmYWxzZSk7XG4gICAgICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbGVhdmUnLCBFZmZlY3QuaGlkZSwgZmFsc2UpO1xuICAgICAgZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdkcmFnZW5kJywgRWZmZWN0LmhpZGUsIGZhbHNlKTtcbiAgICB9XG4gIH1cblxuICBXYXZlcy5kaXNwbGF5RWZmZWN0ID0gZnVuY3Rpb24gKG9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcblxuICAgIGlmICgnZHVyYXRpb24nIGluIG9wdGlvbnMpIHtcbiAgICAgIEVmZmVjdC5kdXJhdGlvbiA9IG9wdGlvbnMuZHVyYXRpb247XG4gICAgfVxuXG4gICAgLy9XcmFwIGlucHV0IGluc2lkZSA8aT4gdGFnXG4gICAgRWZmZWN0LndyYXBJbnB1dCgkJCgnLndhdmVzLWVmZmVjdCcpKTtcblxuICAgIGlmICgnb250b3VjaHN0YXJ0JyBpbiB3aW5kb3cpIHtcbiAgICAgIGRvY3VtZW50LmJvZHkuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2hzdGFydCcsIHNob3dFZmZlY3QsIGZhbHNlKTtcbiAgICB9XG5cbiAgICBkb2N1bWVudC5ib2R5LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIHNob3dFZmZlY3QsIGZhbHNlKTtcbiAgfTtcblxuICAvKipcbiAgICogQXR0YWNoIFdhdmVzIHRvIGFuIGlucHV0IGVsZW1lbnQgKG9yIGFueSBlbGVtZW50IHdoaWNoIGRvZXNuJ3RcbiAgICogYnViYmxlIG1vdXNldXAvbW91c2Vkb3duIGV2ZW50cykuXG4gICAqICAgSW50ZW5kZWQgdG8gYmUgdXNlZCB3aXRoIGR5bmFtaWNhbGx5IGxvYWRlZCBmb3Jtcy9pbnB1dHMsIG9yXG4gICAqIHdoZXJlIHRoZSB1c2VyIGRvZXNuJ3Qgd2FudCBhIGRlbGVnYXRlZCBjbGljayBoYW5kbGVyLlxuICAgKi9cbiAgV2F2ZXMuYXR0YWNoID0gZnVuY3Rpb24gKGVsZW1lbnQpIHtcbiAgICAvL0ZVVFVSRTogYXV0b21hdGljYWxseSBhZGQgd2F2ZXMgY2xhc3NlcyBhbmQgYWxsb3cgdXNlcnNcbiAgICAvLyB0byBzcGVjaWZ5IHRoZW0gd2l0aCBhbiBvcHRpb25zIHBhcmFtPyBFZy4gbGlnaHQvY2xhc3NpYy9idXR0b25cbiAgICBpZiAoZWxlbWVudC50YWdOYW1lLnRvTG93ZXJDYXNlKCkgPT09ICdpbnB1dCcpIHtcbiAgICAgIEVmZmVjdC53cmFwSW5wdXQoW2VsZW1lbnRdKTtcbiAgICAgIGVsZW1lbnQgPSBlbGVtZW50LnBhcmVudE5vZGU7XG4gICAgfVxuXG4gICAgaWYgKCdvbnRvdWNoc3RhcnQnIGluIHdpbmRvdykge1xuICAgICAgZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCd0b3VjaHN0YXJ0Jywgc2hvd0VmZmVjdCwgZmFsc2UpO1xuICAgIH1cblxuICAgIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgc2hvd0VmZmVjdCwgZmFsc2UpO1xuICB9O1xuXG4gIHdpbmRvdy5XYXZlcyA9IFdhdmVzO1xuXG4gIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCBmdW5jdGlvbiAoKSB7XG4gICAgV2F2ZXMuZGlzcGxheUVmZmVjdCgpO1xuICB9LCBmYWxzZSk7XG59KSh3aW5kb3cpO1xuOyhmdW5jdGlvbiAoJCkge1xuXG4gIHZhciBtZXRob2RzID0ge1xuICAgIGluaXQ6IGZ1bmN0aW9uIChvcHRpb25zKSB7XG4gICAgICB2YXIgZGVmYXVsdHMgPSB7XG4gICAgICAgIG1lbnVXaWR0aDogMzAwLFxuICAgICAgICBlZGdlOiAnbGVmdCcsXG4gICAgICAgIGNsb3NlT25DbGljazogZmFsc2UsXG4gICAgICAgIGRyYWdnYWJsZTogdHJ1ZSxcbiAgICAgICAgb25PcGVuOiBudWxsLFxuICAgICAgICBvbkNsb3NlOiBudWxsXG4gICAgICB9O1xuICAgICAgb3B0aW9ucyA9ICQuZXh0ZW5kKGRlZmF1bHRzLCBvcHRpb25zKTtcblxuICAgICAgJCh0aGlzKS5lYWNoKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyICR0aGlzID0gJCh0aGlzKTtcbiAgICAgICAgdmFyIG1lbnVJZCA9ICR0aGlzLmF0dHIoJ2RhdGEtYWN0aXZhdGVzJyk7XG4gICAgICAgIHZhciBtZW51ID0gJChcIiNcIiArIG1lbnVJZCk7XG5cbiAgICAgICAgLy8gU2V0IHRvIHdpZHRoXG4gICAgICAgIGlmIChvcHRpb25zLm1lbnVXaWR0aCAhPSAzMDApIHtcbiAgICAgICAgICBtZW51LmNzcygnd2lkdGgnLCBvcHRpb25zLm1lbnVXaWR0aCk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBBZGQgVG91Y2ggQXJlYVxuICAgICAgICB2YXIgJGRyYWdUYXJnZXQgPSAkKCcuZHJhZy10YXJnZXRbZGF0YS1zaWRlbmF2PVwiJyArIG1lbnVJZCArICdcIl0nKTtcbiAgICAgICAgaWYgKG9wdGlvbnMuZHJhZ2dhYmxlKSB7XG4gICAgICAgICAgLy8gUmVnZW5lcmF0ZSBkcmFnVGFyZ2V0XG4gICAgICAgICAgaWYgKCRkcmFnVGFyZ2V0Lmxlbmd0aCkge1xuICAgICAgICAgICAgJGRyYWdUYXJnZXQucmVtb3ZlKCk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgJGRyYWdUYXJnZXQgPSAkKCc8ZGl2IGNsYXNzPVwiZHJhZy10YXJnZXRcIj48L2Rpdj4nKS5hdHRyKCdkYXRhLXNpZGVuYXYnLCBtZW51SWQpO1xuICAgICAgICAgICQoJ2JvZHknKS5hcHBlbmQoJGRyYWdUYXJnZXQpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICRkcmFnVGFyZ2V0ID0gJCgpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKG9wdGlvbnMuZWRnZSA9PSAnbGVmdCcpIHtcbiAgICAgICAgICBtZW51LmNzcygndHJhbnNmb3JtJywgJ3RyYW5zbGF0ZVgoLTEwMCUpJyk7XG4gICAgICAgICAgJGRyYWdUYXJnZXQuY3NzKHsgJ2xlZnQnOiAwIH0pOyAvLyBBZGQgVG91Y2ggQXJlYVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIG1lbnUuYWRkQ2xhc3MoJ3JpZ2h0LWFsaWduZWQnKSAvLyBDaGFuZ2UgdGV4dC1hbGlnbm1lbnQgdG8gcmlnaHRcbiAgICAgICAgICAuY3NzKCd0cmFuc2Zvcm0nLCAndHJhbnNsYXRlWCgxMDAlKScpO1xuICAgICAgICAgICRkcmFnVGFyZ2V0LmNzcyh7ICdyaWdodCc6IDAgfSk7IC8vIEFkZCBUb3VjaCBBcmVhXG4gICAgICAgIH1cblxuICAgICAgICAvLyBJZiBmaXhlZCBzaWRlbmF2LCBicmluZyBtZW51IG91dFxuICAgICAgICBpZiAobWVudS5oYXNDbGFzcygnZml4ZWQnKSkge1xuICAgICAgICAgIGlmICh3aW5kb3cuaW5uZXJXaWR0aCA+IDk5Mikge1xuICAgICAgICAgICAgbWVudS5jc3MoJ3RyYW5zZm9ybScsICd0cmFuc2xhdGVYKDApJyk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLy8gV2luZG93IHJlc2l6ZSB0byByZXNldCBvbiBsYXJnZSBzY3JlZW5zIGZpeGVkXG4gICAgICAgIGlmIChtZW51Lmhhc0NsYXNzKCdmaXhlZCcpKSB7XG4gICAgICAgICAgJCh3aW5kb3cpLnJlc2l6ZShmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBpZiAod2luZG93LmlubmVyV2lkdGggPiA5OTIpIHtcbiAgICAgICAgICAgICAgLy8gQ2xvc2UgbWVudSBpZiB3aW5kb3cgaXMgcmVzaXplZCBiaWdnZXIgdGhhbiA5OTIgYW5kIHVzZXIgaGFzIGZpeGVkIHNpZGVuYXZcbiAgICAgICAgICAgICAgaWYgKCQoJyNzaWRlbmF2LW92ZXJsYXknKS5sZW5ndGggIT09IDAgJiYgbWVudU91dCkge1xuICAgICAgICAgICAgICAgIHJlbW92ZU1lbnUodHJ1ZSk7XG4gICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgLy8gbWVudS5yZW1vdmVBdHRyKCdzdHlsZScpO1xuICAgICAgICAgICAgICAgIG1lbnUuY3NzKCd0cmFuc2Zvcm0nLCAndHJhbnNsYXRlWCgwJSknKTtcbiAgICAgICAgICAgICAgICAvLyBtZW51LmNzcygnd2lkdGgnLCBvcHRpb25zLm1lbnVXaWR0aCk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSBpZiAobWVudU91dCA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgICAgaWYgKG9wdGlvbnMuZWRnZSA9PT0gJ2xlZnQnKSB7XG4gICAgICAgICAgICAgICAgbWVudS5jc3MoJ3RyYW5zZm9ybScsICd0cmFuc2xhdGVYKC0xMDAlKScpO1xuICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIG1lbnUuY3NzKCd0cmFuc2Zvcm0nLCAndHJhbnNsYXRlWCgxMDAlKScpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBpZiBjbG9zZU9uQ2xpY2ssIHRoZW4gYWRkIGNsb3NlIGV2ZW50IGZvciBhbGwgYSB0YWdzIGluIHNpZGUgc2lkZU5hdlxuICAgICAgICBpZiAob3B0aW9ucy5jbG9zZU9uQ2xpY2sgPT09IHRydWUpIHtcbiAgICAgICAgICBtZW51Lm9uKFwiY2xpY2suaXRlbWNsaWNrXCIsIFwiYTpub3QoLmNvbGxhcHNpYmxlLWhlYWRlcilcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgaWYgKCEod2luZG93LmlubmVyV2lkdGggPiA5OTIgJiYgbWVudS5oYXNDbGFzcygnZml4ZWQnKSkpIHtcbiAgICAgICAgICAgICAgcmVtb3ZlTWVudSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIHJlbW92ZU1lbnUgPSBmdW5jdGlvbiAocmVzdG9yZU5hdikge1xuICAgICAgICAgIHBhbm5pbmcgPSBmYWxzZTtcbiAgICAgICAgICBtZW51T3V0ID0gZmFsc2U7XG4gICAgICAgICAgLy8gUmVlbmFibGUgc2Nyb2xsaW5nXG4gICAgICAgICAgJCgnYm9keScpLmNzcyh7XG4gICAgICAgICAgICBvdmVyZmxvdzogJycsXG4gICAgICAgICAgICB3aWR0aDogJydcbiAgICAgICAgICB9KTtcblxuICAgICAgICAgICQoJyNzaWRlbmF2LW92ZXJsYXknKS52ZWxvY2l0eSh7IG9wYWNpdHk6IDAgfSwgeyBkdXJhdGlvbjogMjAwLFxuICAgICAgICAgICAgcXVldWU6IGZhbHNlLCBlYXNpbmc6ICdlYXNlT3V0UXVhZCcsXG4gICAgICAgICAgICBjb21wbGV0ZTogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAkKHRoaXMpLnJlbW92ZSgpO1xuICAgICAgICAgICAgfSB9KTtcbiAgICAgICAgICBpZiAob3B0aW9ucy5lZGdlID09PSAnbGVmdCcpIHtcbiAgICAgICAgICAgIC8vIFJlc2V0IHBoYW50b20gZGl2XG4gICAgICAgICAgICAkZHJhZ1RhcmdldC5jc3MoeyB3aWR0aDogJycsIHJpZ2h0OiAnJywgbGVmdDogJzAnIH0pO1xuICAgICAgICAgICAgbWVudS52ZWxvY2l0eSh7ICd0cmFuc2xhdGVYJzogJy0xMDAlJyB9LCB7IGR1cmF0aW9uOiAyMDAsXG4gICAgICAgICAgICAgIHF1ZXVlOiBmYWxzZSxcbiAgICAgICAgICAgICAgZWFzaW5nOiAnZWFzZU91dEN1YmljJyxcbiAgICAgICAgICAgICAgY29tcGxldGU6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBpZiAocmVzdG9yZU5hdiA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgICAgLy8gUmVzdG9yZSBGaXhlZCBzaWRlbmF2XG4gICAgICAgICAgICAgICAgICBtZW51LnJlbW92ZUF0dHIoJ3N0eWxlJyk7XG4gICAgICAgICAgICAgICAgICBtZW51LmNzcygnd2lkdGgnLCBvcHRpb25zLm1lbnVXaWR0aCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAvLyBSZXNldCBwaGFudG9tIGRpdlxuICAgICAgICAgICAgJGRyYWdUYXJnZXQuY3NzKHsgd2lkdGg6ICcnLCByaWdodDogJzAnLCBsZWZ0OiAnJyB9KTtcbiAgICAgICAgICAgIG1lbnUudmVsb2NpdHkoeyAndHJhbnNsYXRlWCc6ICcxMDAlJyB9LCB7IGR1cmF0aW9uOiAyMDAsXG4gICAgICAgICAgICAgIHF1ZXVlOiBmYWxzZSxcbiAgICAgICAgICAgICAgZWFzaW5nOiAnZWFzZU91dEN1YmljJyxcbiAgICAgICAgICAgICAgY29tcGxldGU6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBpZiAocmVzdG9yZU5hdiA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgICAgLy8gUmVzdG9yZSBGaXhlZCBzaWRlbmF2XG4gICAgICAgICAgICAgICAgICBtZW51LnJlbW92ZUF0dHIoJ3N0eWxlJyk7XG4gICAgICAgICAgICAgICAgICBtZW51LmNzcygnd2lkdGgnLCBvcHRpb25zLm1lbnVXaWR0aCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAvLyBDYWxsYmFja1xuICAgICAgICAgIGlmICh0eXBlb2Ygb3B0aW9ucy5vbkNsb3NlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICBvcHRpb25zLm9uQ2xvc2UuY2FsbCh0aGlzLCBtZW51KTtcbiAgICAgICAgICB9XG4gICAgICAgIH07XG5cbiAgICAgICAgLy8gVG91Y2ggRXZlbnRcbiAgICAgICAgdmFyIHBhbm5pbmcgPSBmYWxzZTtcbiAgICAgICAgdmFyIG1lbnVPdXQgPSBmYWxzZTtcblxuICAgICAgICBpZiAob3B0aW9ucy5kcmFnZ2FibGUpIHtcbiAgICAgICAgICAkZHJhZ1RhcmdldC5vbignY2xpY2snLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBpZiAobWVudU91dCkge1xuICAgICAgICAgICAgICByZW1vdmVNZW51KCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSk7XG5cbiAgICAgICAgICAkZHJhZ1RhcmdldC5oYW1tZXIoe1xuICAgICAgICAgICAgcHJldmVudF9kZWZhdWx0OiBmYWxzZVxuICAgICAgICAgIH0pLm9uKCdwYW4nLCBmdW5jdGlvbiAoZSkge1xuXG4gICAgICAgICAgICBpZiAoZS5nZXN0dXJlLnBvaW50ZXJUeXBlID09IFwidG91Y2hcIikge1xuXG4gICAgICAgICAgICAgIHZhciBkaXJlY3Rpb24gPSBlLmdlc3R1cmUuZGlyZWN0aW9uO1xuICAgICAgICAgICAgICB2YXIgeCA9IGUuZ2VzdHVyZS5jZW50ZXIueDtcbiAgICAgICAgICAgICAgdmFyIHkgPSBlLmdlc3R1cmUuY2VudGVyLnk7XG4gICAgICAgICAgICAgIHZhciB2ZWxvY2l0eVggPSBlLmdlc3R1cmUudmVsb2NpdHlYO1xuXG4gICAgICAgICAgICAgIC8vIFZlcnRpY2FsIHNjcm9sbCBidWdmaXhcbiAgICAgICAgICAgICAgaWYgKHggPT09IDAgJiYgeSA9PT0gMCkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIC8vIERpc2FibGUgU2Nyb2xsaW5nXG4gICAgICAgICAgICAgIHZhciAkYm9keSA9ICQoJ2JvZHknKTtcbiAgICAgICAgICAgICAgdmFyICRvdmVybGF5ID0gJCgnI3NpZGVuYXYtb3ZlcmxheScpO1xuICAgICAgICAgICAgICB2YXIgb2xkV2lkdGggPSAkYm9keS5pbm5lcldpZHRoKCk7XG4gICAgICAgICAgICAgICRib2R5LmNzcygnb3ZlcmZsb3cnLCAnaGlkZGVuJyk7XG4gICAgICAgICAgICAgICRib2R5LndpZHRoKG9sZFdpZHRoKTtcblxuICAgICAgICAgICAgICAvLyBJZiBvdmVybGF5IGRvZXMgbm90IGV4aXN0LCBjcmVhdGUgb25lIGFuZCBpZiBpdCBpcyBjbGlja2VkLCBjbG9zZSBtZW51XG4gICAgICAgICAgICAgIGlmICgkb3ZlcmxheS5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgICAgICAkb3ZlcmxheSA9ICQoJzxkaXYgaWQ9XCJzaWRlbmF2LW92ZXJsYXlcIj48L2Rpdj4nKTtcbiAgICAgICAgICAgICAgICAkb3ZlcmxheS5jc3MoJ29wYWNpdHknLCAwKS5jbGljayhmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICByZW1vdmVNZW51KCk7XG4gICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICAvLyBSdW4gJ29uT3Blbicgd2hlbiBzaWRlbmF2IGlzIG9wZW5lZCB2aWEgdG91Y2gvc3dpcGUgaWYgYXBwbGljYWJsZVxuICAgICAgICAgICAgICAgIGlmICh0eXBlb2Ygb3B0aW9ucy5vbk9wZW4gPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgICAgICAgIG9wdGlvbnMub25PcGVuLmNhbGwodGhpcywgbWVudSk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgJCgnYm9keScpLmFwcGVuZCgkb3ZlcmxheSk7XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAvLyBLZWVwIHdpdGhpbiBib3VuZGFyaWVzXG4gICAgICAgICAgICAgIGlmIChvcHRpb25zLmVkZ2UgPT09ICdsZWZ0Jykge1xuICAgICAgICAgICAgICAgIGlmICh4ID4gb3B0aW9ucy5tZW51V2lkdGgpIHtcbiAgICAgICAgICAgICAgICAgIHggPSBvcHRpb25zLm1lbnVXaWR0aDtcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHggPCAwKSB7XG4gICAgICAgICAgICAgICAgICB4ID0gMDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICBpZiAob3B0aW9ucy5lZGdlID09PSAnbGVmdCcpIHtcbiAgICAgICAgICAgICAgICAvLyBMZWZ0IERpcmVjdGlvblxuICAgICAgICAgICAgICAgIGlmICh4IDwgb3B0aW9ucy5tZW51V2lkdGggLyAyKSB7XG4gICAgICAgICAgICAgICAgICBtZW51T3V0ID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8vIFJpZ2h0IERpcmVjdGlvblxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKHggPj0gb3B0aW9ucy5tZW51V2lkdGggLyAyKSB7XG4gICAgICAgICAgICAgICAgICAgIG1lbnVPdXQgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIG1lbnUuY3NzKCd0cmFuc2Zvcm0nLCAndHJhbnNsYXRlWCgnICsgKHggLSBvcHRpb25zLm1lbnVXaWR0aCkgKyAncHgpJyk7XG4gICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgLy8gTGVmdCBEaXJlY3Rpb25cbiAgICAgICAgICAgICAgICBpZiAoeCA8IHdpbmRvdy5pbm5lcldpZHRoIC0gb3B0aW9ucy5tZW51V2lkdGggLyAyKSB7XG4gICAgICAgICAgICAgICAgICBtZW51T3V0ID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLy8gUmlnaHQgRGlyZWN0aW9uXG4gICAgICAgICAgICAgICAgZWxzZSBpZiAoeCA+PSB3aW5kb3cuaW5uZXJXaWR0aCAtIG9wdGlvbnMubWVudVdpZHRoIC8gMikge1xuICAgICAgICAgICAgICAgICAgICBtZW51T3V0ID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdmFyIHJpZ2h0UG9zID0geCAtIG9wdGlvbnMubWVudVdpZHRoIC8gMjtcbiAgICAgICAgICAgICAgICBpZiAocmlnaHRQb3MgPCAwKSB7XG4gICAgICAgICAgICAgICAgICByaWdodFBvcyA9IDA7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgbWVudS5jc3MoJ3RyYW5zZm9ybScsICd0cmFuc2xhdGVYKCcgKyByaWdodFBvcyArICdweCknKTtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIC8vIFBlcmNlbnRhZ2Ugb3ZlcmxheVxuICAgICAgICAgICAgICB2YXIgb3ZlcmxheVBlcmM7XG4gICAgICAgICAgICAgIGlmIChvcHRpb25zLmVkZ2UgPT09ICdsZWZ0Jykge1xuICAgICAgICAgICAgICAgIG92ZXJsYXlQZXJjID0geCAvIG9wdGlvbnMubWVudVdpZHRoO1xuICAgICAgICAgICAgICAgICRvdmVybGF5LnZlbG9jaXR5KHsgb3BhY2l0eTogb3ZlcmxheVBlcmMgfSwgeyBkdXJhdGlvbjogMTAsIHF1ZXVlOiBmYWxzZSwgZWFzaW5nOiAnZWFzZU91dFF1YWQnIH0pO1xuICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIG92ZXJsYXlQZXJjID0gTWF0aC5hYnMoKHggLSB3aW5kb3cuaW5uZXJXaWR0aCkgLyBvcHRpb25zLm1lbnVXaWR0aCk7XG4gICAgICAgICAgICAgICAgJG92ZXJsYXkudmVsb2NpdHkoeyBvcGFjaXR5OiBvdmVybGF5UGVyYyB9LCB7IGR1cmF0aW9uOiAxMCwgcXVldWU6IGZhbHNlLCBlYXNpbmc6ICdlYXNlT3V0UXVhZCcgfSk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KS5vbigncGFuZW5kJywgZnVuY3Rpb24gKGUpIHtcblxuICAgICAgICAgICAgaWYgKGUuZ2VzdHVyZS5wb2ludGVyVHlwZSA9PSBcInRvdWNoXCIpIHtcbiAgICAgICAgICAgICAgdmFyICRvdmVybGF5ID0gJCgnI3NpZGVuYXYtb3ZlcmxheScpO1xuICAgICAgICAgICAgICB2YXIgdmVsb2NpdHlYID0gZS5nZXN0dXJlLnZlbG9jaXR5WDtcbiAgICAgICAgICAgICAgdmFyIHggPSBlLmdlc3R1cmUuY2VudGVyLng7XG4gICAgICAgICAgICAgIHZhciBsZWZ0UG9zID0geCAtIG9wdGlvbnMubWVudVdpZHRoO1xuICAgICAgICAgICAgICB2YXIgcmlnaHRQb3MgPSB4IC0gb3B0aW9ucy5tZW51V2lkdGggLyAyO1xuICAgICAgICAgICAgICBpZiAobGVmdFBvcyA+IDApIHtcbiAgICAgICAgICAgICAgICBsZWZ0UG9zID0gMDtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBpZiAocmlnaHRQb3MgPCAwKSB7XG4gICAgICAgICAgICAgICAgcmlnaHRQb3MgPSAwO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIHBhbm5pbmcgPSBmYWxzZTtcblxuICAgICAgICAgICAgICBpZiAob3B0aW9ucy5lZGdlID09PSAnbGVmdCcpIHtcbiAgICAgICAgICAgICAgICAvLyBJZiB2ZWxvY2l0eVggPD0gMC4zIHRoZW4gdGhlIHVzZXIgaXMgZmxpbmdpbmcgdGhlIG1lbnUgY2xvc2VkIHNvIGlnbm9yZSBtZW51T3V0XG4gICAgICAgICAgICAgICAgaWYgKG1lbnVPdXQgJiYgdmVsb2NpdHlYIDw9IDAuMyB8fCB2ZWxvY2l0eVggPCAtMC41KSB7XG4gICAgICAgICAgICAgICAgICAvLyBSZXR1cm4gbWVudSB0byBvcGVuXG4gICAgICAgICAgICAgICAgICBpZiAobGVmdFBvcyAhPT0gMCkge1xuICAgICAgICAgICAgICAgICAgICBtZW51LnZlbG9jaXR5KHsgJ3RyYW5zbGF0ZVgnOiBbMCwgbGVmdFBvc10gfSwgeyBkdXJhdGlvbjogMzAwLCBxdWV1ZTogZmFsc2UsIGVhc2luZzogJ2Vhc2VPdXRRdWFkJyB9KTtcbiAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgJG92ZXJsYXkudmVsb2NpdHkoeyBvcGFjaXR5OiAxIH0sIHsgZHVyYXRpb246IDUwLCBxdWV1ZTogZmFsc2UsIGVhc2luZzogJ2Vhc2VPdXRRdWFkJyB9KTtcbiAgICAgICAgICAgICAgICAgICRkcmFnVGFyZ2V0LmNzcyh7IHdpZHRoOiAnNTAlJywgcmlnaHQ6IDAsIGxlZnQ6ICcnIH0pO1xuICAgICAgICAgICAgICAgICAgbWVudU91dCA9IHRydWU7XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmICghbWVudU91dCB8fCB2ZWxvY2l0eVggPiAwLjMpIHtcbiAgICAgICAgICAgICAgICAgIC8vIEVuYWJsZSBTY3JvbGxpbmdcbiAgICAgICAgICAgICAgICAgICQoJ2JvZHknKS5jc3Moe1xuICAgICAgICAgICAgICAgICAgICBvdmVyZmxvdzogJycsXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAnJ1xuICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAvLyBTbGlkZSBtZW51IGNsb3NlZFxuICAgICAgICAgICAgICAgICAgbWVudS52ZWxvY2l0eSh7ICd0cmFuc2xhdGVYJzogWy0xICogb3B0aW9ucy5tZW51V2lkdGggLSAxMCwgbGVmdFBvc10gfSwgeyBkdXJhdGlvbjogMjAwLCBxdWV1ZTogZmFsc2UsIGVhc2luZzogJ2Vhc2VPdXRRdWFkJyB9KTtcbiAgICAgICAgICAgICAgICAgICRvdmVybGF5LnZlbG9jaXR5KHsgb3BhY2l0eTogMCB9LCB7IGR1cmF0aW9uOiAyMDAsIHF1ZXVlOiBmYWxzZSwgZWFzaW5nOiAnZWFzZU91dFF1YWQnLFxuICAgICAgICAgICAgICAgICAgICBjb21wbGV0ZTogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAgIC8vIFJ1biAnb25DbG9zZScgd2hlbiBzaWRlbmF2IGlzIGNsb3NlZCB2aWEgdG91Y2gvc3dpcGUgaWYgYXBwbGljYWJsZVxuICAgICAgICAgICAgICAgICAgICAgIGlmICh0eXBlb2Ygb3B0aW9ucy5vbkNsb3NlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBvcHRpb25zLm9uQ2xvc2UuY2FsbCh0aGlzLCBtZW51KTtcbiAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAkKHRoaXMpLnJlbW92ZSgpO1xuICAgICAgICAgICAgICAgICAgICB9IH0pO1xuICAgICAgICAgICAgICAgICAgJGRyYWdUYXJnZXQuY3NzKHsgd2lkdGg6ICcxMHB4JywgcmlnaHQ6ICcnLCBsZWZ0OiAwIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBpZiAobWVudU91dCAmJiB2ZWxvY2l0eVggPj0gLTAuMyB8fCB2ZWxvY2l0eVggPiAwLjUpIHtcbiAgICAgICAgICAgICAgICAgIC8vIFJldHVybiBtZW51IHRvIG9wZW5cbiAgICAgICAgICAgICAgICAgIGlmIChyaWdodFBvcyAhPT0gMCkge1xuICAgICAgICAgICAgICAgICAgICBtZW51LnZlbG9jaXR5KHsgJ3RyYW5zbGF0ZVgnOiBbMCwgcmlnaHRQb3NdIH0sIHsgZHVyYXRpb246IDMwMCwgcXVldWU6IGZhbHNlLCBlYXNpbmc6ICdlYXNlT3V0UXVhZCcgfSk7XG4gICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICRvdmVybGF5LnZlbG9jaXR5KHsgb3BhY2l0eTogMSB9LCB7IGR1cmF0aW9uOiA1MCwgcXVldWU6IGZhbHNlLCBlYXNpbmc6ICdlYXNlT3V0UXVhZCcgfSk7XG4gICAgICAgICAgICAgICAgICAkZHJhZ1RhcmdldC5jc3MoeyB3aWR0aDogJzUwJScsIHJpZ2h0OiAnJywgbGVmdDogMCB9KTtcbiAgICAgICAgICAgICAgICAgIG1lbnVPdXQgPSB0cnVlO1xuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoIW1lbnVPdXQgfHwgdmVsb2NpdHlYIDwgLTAuMykge1xuICAgICAgICAgICAgICAgICAgLy8gRW5hYmxlIFNjcm9sbGluZ1xuICAgICAgICAgICAgICAgICAgJCgnYm9keScpLmNzcyh7XG4gICAgICAgICAgICAgICAgICAgIG92ZXJmbG93OiAnJyxcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6ICcnXG4gICAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgICAgLy8gU2xpZGUgbWVudSBjbG9zZWRcbiAgICAgICAgICAgICAgICAgIG1lbnUudmVsb2NpdHkoeyAndHJhbnNsYXRlWCc6IFtvcHRpb25zLm1lbnVXaWR0aCArIDEwLCByaWdodFBvc10gfSwgeyBkdXJhdGlvbjogMjAwLCBxdWV1ZTogZmFsc2UsIGVhc2luZzogJ2Vhc2VPdXRRdWFkJyB9KTtcbiAgICAgICAgICAgICAgICAgICRvdmVybGF5LnZlbG9jaXR5KHsgb3BhY2l0eTogMCB9LCB7IGR1cmF0aW9uOiAyMDAsIHF1ZXVlOiBmYWxzZSwgZWFzaW5nOiAnZWFzZU91dFF1YWQnLFxuICAgICAgICAgICAgICAgICAgICBjb21wbGV0ZTogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAgIC8vIFJ1biAnb25DbG9zZScgd2hlbiBzaWRlbmF2IGlzIGNsb3NlZCB2aWEgdG91Y2gvc3dpcGUgaWYgYXBwbGljYWJsZVxuICAgICAgICAgICAgICAgICAgICAgIGlmICh0eXBlb2Ygb3B0aW9ucy5vbkNsb3NlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBvcHRpb25zLm9uQ2xvc2UuY2FsbCh0aGlzLCBtZW51KTtcbiAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAkKHRoaXMpLnJlbW92ZSgpO1xuICAgICAgICAgICAgICAgICAgICB9IH0pO1xuICAgICAgICAgICAgICAgICAgJGRyYWdUYXJnZXQuY3NzKHsgd2lkdGg6ICcxMHB4JywgcmlnaHQ6IDAsIGxlZnQ6ICcnIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgJHRoaXMub2ZmKCdjbGljay5zaWRlbmF2Jykub24oJ2NsaWNrLnNpZGVuYXYnLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgaWYgKG1lbnVPdXQgPT09IHRydWUpIHtcbiAgICAgICAgICAgIG1lbnVPdXQgPSBmYWxzZTtcbiAgICAgICAgICAgIHBhbm5pbmcgPSBmYWxzZTtcbiAgICAgICAgICAgIHJlbW92ZU1lbnUoKTtcbiAgICAgICAgICB9IGVsc2Uge1xuXG4gICAgICAgICAgICAvLyBEaXNhYmxlIFNjcm9sbGluZ1xuICAgICAgICAgICAgdmFyICRib2R5ID0gJCgnYm9keScpO1xuICAgICAgICAgICAgdmFyICRvdmVybGF5ID0gJCgnPGRpdiBpZD1cInNpZGVuYXYtb3ZlcmxheVwiPjwvZGl2PicpO1xuICAgICAgICAgICAgdmFyIG9sZFdpZHRoID0gJGJvZHkuaW5uZXJXaWR0aCgpO1xuICAgICAgICAgICAgJGJvZHkuY3NzKCdvdmVyZmxvdycsICdoaWRkZW4nKTtcbiAgICAgICAgICAgICRib2R5LndpZHRoKG9sZFdpZHRoKTtcblxuICAgICAgICAgICAgLy8gUHVzaCBjdXJyZW50IGRyYWcgdGFyZ2V0IG9uIHRvcCBvZiBET00gdHJlZVxuICAgICAgICAgICAgJCgnYm9keScpLmFwcGVuZCgkZHJhZ1RhcmdldCk7XG5cbiAgICAgICAgICAgIGlmIChvcHRpb25zLmVkZ2UgPT09ICdsZWZ0Jykge1xuICAgICAgICAgICAgICAkZHJhZ1RhcmdldC5jc3MoeyB3aWR0aDogJzUwJScsIHJpZ2h0OiAwLCBsZWZ0OiAnJyB9KTtcbiAgICAgICAgICAgICAgbWVudS52ZWxvY2l0eSh7ICd0cmFuc2xhdGVYJzogWzAsIC0xICogb3B0aW9ucy5tZW51V2lkdGhdIH0sIHsgZHVyYXRpb246IDMwMCwgcXVldWU6IGZhbHNlLCBlYXNpbmc6ICdlYXNlT3V0UXVhZCcgfSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAkZHJhZ1RhcmdldC5jc3MoeyB3aWR0aDogJzUwJScsIHJpZ2h0OiAnJywgbGVmdDogMCB9KTtcbiAgICAgICAgICAgICAgbWVudS52ZWxvY2l0eSh7ICd0cmFuc2xhdGVYJzogWzAsIG9wdGlvbnMubWVudVdpZHRoXSB9LCB7IGR1cmF0aW9uOiAzMDAsIHF1ZXVlOiBmYWxzZSwgZWFzaW5nOiAnZWFzZU91dFF1YWQnIH0pO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBPdmVybGF5IGNsb3NlIG9uIGNsaWNrXG4gICAgICAgICAgICAkb3ZlcmxheS5jc3MoJ29wYWNpdHknLCAwKS5jbGljayhmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgIG1lbnVPdXQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgcGFubmluZyA9IGZhbHNlO1xuICAgICAgICAgICAgICByZW1vdmVNZW51KCk7XG4gICAgICAgICAgICAgICRvdmVybGF5LnZlbG9jaXR5KHsgb3BhY2l0eTogMCB9LCB7IGR1cmF0aW9uOiAzMDAsIHF1ZXVlOiBmYWxzZSwgZWFzaW5nOiAnZWFzZU91dFF1YWQnLFxuICAgICAgICAgICAgICAgIGNvbXBsZXRlOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAkKHRoaXMpLnJlbW92ZSgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgLy8gQXBwZW5kIGJvZHlcbiAgICAgICAgICAgICQoJ2JvZHknKS5hcHBlbmQoJG92ZXJsYXkpO1xuICAgICAgICAgICAgJG92ZXJsYXkudmVsb2NpdHkoeyBvcGFjaXR5OiAxIH0sIHsgZHVyYXRpb246IDMwMCwgcXVldWU6IGZhbHNlLCBlYXNpbmc6ICdlYXNlT3V0UXVhZCcsXG4gICAgICAgICAgICAgIGNvbXBsZXRlOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgbWVudU91dCA9IHRydWU7XG4gICAgICAgICAgICAgICAgcGFubmluZyA9IGZhbHNlO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgLy8gQ2FsbGJhY2tcbiAgICAgICAgICAgIGlmICh0eXBlb2Ygb3B0aW9ucy5vbk9wZW4gPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgICAgb3B0aW9ucy5vbk9wZW4uY2FsbCh0aGlzLCBtZW51KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG5cbiAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gICAgfSxcbiAgICBkZXN0cm95OiBmdW5jdGlvbiAoKSB7XG4gICAgICB2YXIgJG92ZXJsYXkgPSAkKCcjc2lkZW5hdi1vdmVybGF5Jyk7XG4gICAgICB2YXIgJGRyYWdUYXJnZXQgPSAkKCcuZHJhZy10YXJnZXRbZGF0YS1zaWRlbmF2PVwiJyArICQodGhpcykuYXR0cignZGF0YS1hY3RpdmF0ZXMnKSArICdcIl0nKTtcbiAgICAgICRvdmVybGF5LnRyaWdnZXIoJ2NsaWNrJyk7XG4gICAgICAkZHJhZ1RhcmdldC5yZW1vdmUoKTtcbiAgICAgICQodGhpcykub2ZmKCdjbGljaycpO1xuICAgICAgJG92ZXJsYXkucmVtb3ZlKCk7XG4gICAgfSxcbiAgICBzaG93OiBmdW5jdGlvbiAoKSB7XG4gICAgICB0aGlzLnRyaWdnZXIoJ2NsaWNrJyk7XG4gICAgfSxcbiAgICBoaWRlOiBmdW5jdGlvbiAoKSB7XG4gICAgICAkKCcjc2lkZW5hdi1vdmVybGF5JykudHJpZ2dlcignY2xpY2snKTtcbiAgICB9XG4gIH07XG5cbiAgJC5mbi5zaWRlTmF2ID0gZnVuY3Rpb24gKG1ldGhvZE9yT3B0aW9ucykge1xuICAgIGlmIChtZXRob2RzW21ldGhvZE9yT3B0aW9uc10pIHtcbiAgICAgIHJldHVybiBtZXRob2RzW21ldGhvZE9yT3B0aW9uc10uYXBwbHkodGhpcywgQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJndW1lbnRzLCAxKSk7XG4gICAgfSBlbHNlIGlmICh0eXBlb2YgbWV0aG9kT3JPcHRpb25zID09PSAnb2JqZWN0JyB8fCAhbWV0aG9kT3JPcHRpb25zKSB7XG4gICAgICAvLyBEZWZhdWx0IHRvIFwiaW5pdFwiXG4gICAgICByZXR1cm4gbWV0aG9kcy5pbml0LmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgfSBlbHNlIHtcbiAgICAgICQuZXJyb3IoJ01ldGhvZCAnICsgbWV0aG9kT3JPcHRpb25zICsgJyBkb2VzIG5vdCBleGlzdCBvbiBqUXVlcnkuc2lkZU5hdicpO1xuICAgIH1cbiAgfTsgLy8gUGx1Z2luIGVuZFxufSkoalF1ZXJ5KTtcbjsoZnVuY3Rpb24gKCQpIHtcbiAgJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24gKCkge1xuXG4gICAgLy8galF1ZXJ5IHJldmVyc2VcbiAgICAkLmZuLnJldmVyc2UgPSBbXS5yZXZlcnNlO1xuXG4gICAgLy8gSG92ZXIgYmVoYXZpb3VyOiBtYWtlIHN1cmUgdGhpcyBkb2Vzbid0IHdvcmsgb24gLmNsaWNrLXRvLXRvZ2dsZSBGQUJzIVxuICAgICQoZG9jdW1lbnQpLm9uKCdtb3VzZWVudGVyLmZpeGVkQWN0aW9uQnRuJywgJy5maXhlZC1hY3Rpb24tYnRuOm5vdCguY2xpY2stdG8tdG9nZ2xlKTpub3QoLnRvb2xiYXIpJywgZnVuY3Rpb24gKGUpIHtcbiAgICAgIHZhciAkdGhpcyA9ICQodGhpcyk7XG4gICAgICBvcGVuRkFCTWVudSgkdGhpcyk7XG4gICAgfSk7XG4gICAgJChkb2N1bWVudCkub24oJ21vdXNlbGVhdmUuZml4ZWRBY3Rpb25CdG4nLCAnLmZpeGVkLWFjdGlvbi1idG46bm90KC5jbGljay10by10b2dnbGUpOm5vdCgudG9vbGJhciknLCBmdW5jdGlvbiAoZSkge1xuICAgICAgdmFyICR0aGlzID0gJCh0aGlzKTtcbiAgICAgIGNsb3NlRkFCTWVudSgkdGhpcyk7XG4gICAgfSk7XG5cbiAgICAvLyBUb2dnbGUtb24tY2xpY2sgYmVoYXZpb3VyLlxuICAgICQoZG9jdW1lbnQpLm9uKCdjbGljay5mYWJDbGlja1RvZ2dsZScsICcuZml4ZWQtYWN0aW9uLWJ0bi5jbGljay10by10b2dnbGUgPiBhJywgZnVuY3Rpb24gKGUpIHtcbiAgICAgIHZhciAkdGhpcyA9ICQodGhpcyk7XG4gICAgICB2YXIgJG1lbnUgPSAkdGhpcy5wYXJlbnQoKTtcbiAgICAgIGlmICgkbWVudS5oYXNDbGFzcygnYWN0aXZlJykpIHtcbiAgICAgICAgY2xvc2VGQUJNZW51KCRtZW51KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG9wZW5GQUJNZW51KCRtZW51KTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIC8vIFRvb2xiYXIgdHJhbnNpdGlvbiBiZWhhdmlvdXIuXG4gICAgJChkb2N1bWVudCkub24oJ2NsaWNrLmZhYlRvb2xiYXInLCAnLmZpeGVkLWFjdGlvbi1idG4udG9vbGJhciA+IGEnLCBmdW5jdGlvbiAoZSkge1xuICAgICAgdmFyICR0aGlzID0gJCh0aGlzKTtcbiAgICAgIHZhciAkbWVudSA9ICR0aGlzLnBhcmVudCgpO1xuICAgICAgRkFCdG9Ub29sYmFyKCRtZW51KTtcbiAgICB9KTtcbiAgfSk7XG5cbiAgJC5mbi5leHRlbmQoe1xuICAgIG9wZW5GQUI6IGZ1bmN0aW9uICgpIHtcbiAgICAgIG9wZW5GQUJNZW51KCQodGhpcykpO1xuICAgIH0sXG4gICAgY2xvc2VGQUI6IGZ1bmN0aW9uICgpIHtcbiAgICAgIGNsb3NlRkFCTWVudSgkKHRoaXMpKTtcbiAgICB9LFxuICAgIG9wZW5Ub29sYmFyOiBmdW5jdGlvbiAoKSB7XG4gICAgICBGQUJ0b1Rvb2xiYXIoJCh0aGlzKSk7XG4gICAgfSxcbiAgICBjbG9zZVRvb2xiYXI6IGZ1bmN0aW9uICgpIHtcbiAgICAgIHRvb2xiYXJUb0ZBQigkKHRoaXMpKTtcbiAgICB9XG4gIH0pO1xuXG4gIHZhciBvcGVuRkFCTWVudSA9IGZ1bmN0aW9uIChidG4pIHtcbiAgICB2YXIgJHRoaXMgPSBidG47XG4gICAgaWYgKCR0aGlzLmhhc0NsYXNzKCdhY3RpdmUnKSA9PT0gZmFsc2UpIHtcblxuICAgICAgLy8gR2V0IGRpcmVjdGlvbiBvcHRpb25cbiAgICAgIHZhciBob3Jpem9udGFsID0gJHRoaXMuaGFzQ2xhc3MoJ2hvcml6b250YWwnKTtcbiAgICAgIHZhciBvZmZzZXRZLCBvZmZzZXRYO1xuXG4gICAgICBpZiAoaG9yaXpvbnRhbCA9PT0gdHJ1ZSkge1xuICAgICAgICBvZmZzZXRYID0gNDA7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBvZmZzZXRZID0gNDA7XG4gICAgICB9XG5cbiAgICAgICR0aGlzLmFkZENsYXNzKCdhY3RpdmUnKTtcbiAgICAgICR0aGlzLmZpbmQoJ3VsIC5idG4tZmxvYXRpbmcnKS52ZWxvY2l0eSh7IHNjYWxlWTogXCIuNFwiLCBzY2FsZVg6IFwiLjRcIiwgdHJhbnNsYXRlWTogb2Zmc2V0WSArICdweCcsIHRyYW5zbGF0ZVg6IG9mZnNldFggKyAncHgnIH0sIHsgZHVyYXRpb246IDAgfSk7XG5cbiAgICAgIHZhciB0aW1lID0gMDtcbiAgICAgICR0aGlzLmZpbmQoJ3VsIC5idG4tZmxvYXRpbmcnKS5yZXZlcnNlKCkuZWFjaChmdW5jdGlvbiAoKSB7XG4gICAgICAgICQodGhpcykudmVsb2NpdHkoeyBvcGFjaXR5OiBcIjFcIiwgc2NhbGVYOiBcIjFcIiwgc2NhbGVZOiBcIjFcIiwgdHJhbnNsYXRlWTogXCIwXCIsIHRyYW5zbGF0ZVg6ICcwJyB9LCB7IGR1cmF0aW9uOiA4MCwgZGVsYXk6IHRpbWUgfSk7XG4gICAgICAgIHRpbWUgKz0gNDA7XG4gICAgICB9KTtcbiAgICB9XG4gIH07XG5cbiAgdmFyIGNsb3NlRkFCTWVudSA9IGZ1bmN0aW9uIChidG4pIHtcbiAgICB2YXIgJHRoaXMgPSBidG47XG4gICAgLy8gR2V0IGRpcmVjdGlvbiBvcHRpb25cbiAgICB2YXIgaG9yaXpvbnRhbCA9ICR0aGlzLmhhc0NsYXNzKCdob3Jpem9udGFsJyk7XG4gICAgdmFyIG9mZnNldFksIG9mZnNldFg7XG5cbiAgICBpZiAoaG9yaXpvbnRhbCA9PT0gdHJ1ZSkge1xuICAgICAgb2Zmc2V0WCA9IDQwO1xuICAgIH0gZWxzZSB7XG4gICAgICBvZmZzZXRZID0gNDA7XG4gICAgfVxuXG4gICAgJHRoaXMucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xuICAgIHZhciB0aW1lID0gMDtcbiAgICAkdGhpcy5maW5kKCd1bCAuYnRuLWZsb2F0aW5nJykudmVsb2NpdHkoXCJzdG9wXCIsIHRydWUpO1xuICAgICR0aGlzLmZpbmQoJ3VsIC5idG4tZmxvYXRpbmcnKS52ZWxvY2l0eSh7IG9wYWNpdHk6IFwiMFwiLCBzY2FsZVg6IFwiLjRcIiwgc2NhbGVZOiBcIi40XCIsIHRyYW5zbGF0ZVk6IG9mZnNldFkgKyAncHgnLCB0cmFuc2xhdGVYOiBvZmZzZXRYICsgJ3B4JyB9LCB7IGR1cmF0aW9uOiA4MCB9KTtcbiAgfTtcblxuICAvKipcbiAgICogVHJhbnNmb3JtIEZBQiBpbnRvIHRvb2xiYXJcbiAgICogQHBhcmFtICB7T2JqZWN0fSAgb2JqZWN0IGpRdWVyeSBvYmplY3RcbiAgICovXG4gIHZhciBGQUJ0b1Rvb2xiYXIgPSBmdW5jdGlvbiAoYnRuKSB7XG4gICAgaWYgKGJ0bi5hdHRyKCdkYXRhLW9wZW4nKSA9PT0gXCJ0cnVlXCIpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB2YXIgb2Zmc2V0WCwgb2Zmc2V0WSwgc2NhbGVGYWN0b3I7XG4gICAgdmFyIHdpbmRvd1dpZHRoID0gd2luZG93LmlubmVyV2lkdGg7XG4gICAgdmFyIHdpbmRvd0hlaWdodCA9IHdpbmRvdy5pbm5lckhlaWdodDtcbiAgICB2YXIgYnRuUmVjdCA9IGJ0blswXS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICB2YXIgYW5jaG9yID0gYnRuLmZpbmQoJz4gYScpLmZpcnN0KCk7XG4gICAgdmFyIG1lbnUgPSBidG4uZmluZCgnPiB1bCcpLmZpcnN0KCk7XG4gICAgdmFyIGJhY2tkcm9wID0gJCgnPGRpdiBjbGFzcz1cImZhYi1iYWNrZHJvcFwiPjwvZGl2PicpO1xuICAgIHZhciBmYWJDb2xvciA9IGFuY2hvci5jc3MoJ2JhY2tncm91bmQtY29sb3InKTtcbiAgICBhbmNob3IuYXBwZW5kKGJhY2tkcm9wKTtcblxuICAgIG9mZnNldFggPSBidG5SZWN0LmxlZnQgLSB3aW5kb3dXaWR0aCAvIDIgKyBidG5SZWN0LndpZHRoIC8gMjtcbiAgICBvZmZzZXRZID0gd2luZG93SGVpZ2h0IC0gYnRuUmVjdC5ib3R0b207XG4gICAgc2NhbGVGYWN0b3IgPSB3aW5kb3dXaWR0aCAvIGJhY2tkcm9wLndpZHRoKCk7XG4gICAgYnRuLmF0dHIoJ2RhdGEtb3JpZ2luLWJvdHRvbScsIGJ0blJlY3QuYm90dG9tKTtcbiAgICBidG4uYXR0cignZGF0YS1vcmlnaW4tbGVmdCcsIGJ0blJlY3QubGVmdCk7XG4gICAgYnRuLmF0dHIoJ2RhdGEtb3JpZ2luLXdpZHRoJywgYnRuUmVjdC53aWR0aCk7XG5cbiAgICAvLyBTZXQgaW5pdGlhbCBzdGF0ZVxuICAgIGJ0bi5hZGRDbGFzcygnYWN0aXZlJyk7XG4gICAgYnRuLmF0dHIoJ2RhdGEtb3BlbicsIHRydWUpO1xuICAgIGJ0bi5jc3Moe1xuICAgICAgJ3RleHQtYWxpZ24nOiAnY2VudGVyJyxcbiAgICAgIHdpZHRoOiAnMTAwJScsXG4gICAgICBib3R0b206IDAsXG4gICAgICBsZWZ0OiAwLFxuICAgICAgdHJhbnNmb3JtOiAndHJhbnNsYXRlWCgnICsgb2Zmc2V0WCArICdweCknLFxuICAgICAgdHJhbnNpdGlvbjogJ25vbmUnXG4gICAgfSk7XG4gICAgYW5jaG9yLmNzcyh7XG4gICAgICB0cmFuc2Zvcm06ICd0cmFuc2xhdGVZKCcgKyAtb2Zmc2V0WSArICdweCknLFxuICAgICAgdHJhbnNpdGlvbjogJ25vbmUnXG4gICAgfSk7XG4gICAgYmFja2Ryb3AuY3NzKHtcbiAgICAgICdiYWNrZ3JvdW5kLWNvbG9yJzogZmFiQ29sb3JcbiAgICB9KTtcblxuICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgYnRuLmNzcyh7XG4gICAgICAgIHRyYW5zZm9ybTogJycsXG4gICAgICAgIHRyYW5zaXRpb246ICd0cmFuc2Zvcm0gLjJzIGN1YmljLWJlemllcigwLjU1MCwgMC4wODUsIDAuNjgwLCAwLjUzMCksIGJhY2tncm91bmQtY29sb3IgMHMgbGluZWFyIC4ycydcbiAgICAgIH0pO1xuICAgICAgYW5jaG9yLmNzcyh7XG4gICAgICAgIG92ZXJmbG93OiAndmlzaWJsZScsXG4gICAgICAgIHRyYW5zZm9ybTogJycsXG4gICAgICAgIHRyYW5zaXRpb246ICd0cmFuc2Zvcm0gLjJzJ1xuICAgICAgfSk7XG5cbiAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICBidG4uY3NzKHtcbiAgICAgICAgICBvdmVyZmxvdzogJ2hpZGRlbicsXG4gICAgICAgICAgJ2JhY2tncm91bmQtY29sb3InOiBmYWJDb2xvclxuICAgICAgICB9KTtcbiAgICAgICAgYmFja2Ryb3AuY3NzKHtcbiAgICAgICAgICB0cmFuc2Zvcm06ICdzY2FsZSgnICsgc2NhbGVGYWN0b3IgKyAnKScsXG4gICAgICAgICAgdHJhbnNpdGlvbjogJ3RyYW5zZm9ybSAuMnMgY3ViaWMtYmV6aWVyKDAuNTUwLCAwLjA1NSwgMC42NzUsIDAuMTkwKSdcbiAgICAgICAgfSk7XG4gICAgICAgIG1lbnUuZmluZCgnPiBsaSA+IGEnKS5jc3Moe1xuICAgICAgICAgIG9wYWNpdHk6IDFcbiAgICAgICAgfSk7XG5cbiAgICAgICAgLy8gU2Nyb2xsIHRvIGNsb3NlLlxuICAgICAgICAkKHdpbmRvdykub24oJ3Njcm9sbC5mYWJUb29sYmFyQ2xvc2UnLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgdG9vbGJhclRvRkFCKGJ0bik7XG4gICAgICAgICAgJCh3aW5kb3cpLm9mZignc2Nyb2xsLmZhYlRvb2xiYXJDbG9zZScpO1xuICAgICAgICAgICQoZG9jdW1lbnQpLm9mZignY2xpY2suZmFiVG9vbGJhckNsb3NlJyk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgICQoZG9jdW1lbnQpLm9uKCdjbGljay5mYWJUb29sYmFyQ2xvc2UnLCBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgIGlmICghJChlLnRhcmdldCkuY2xvc2VzdChtZW51KS5sZW5ndGgpIHtcbiAgICAgICAgICAgIHRvb2xiYXJUb0ZBQihidG4pO1xuICAgICAgICAgICAgJCh3aW5kb3cpLm9mZignc2Nyb2xsLmZhYlRvb2xiYXJDbG9zZScpO1xuICAgICAgICAgICAgJChkb2N1bWVudCkub2ZmKCdjbGljay5mYWJUb29sYmFyQ2xvc2UnKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfSwgMTAwKTtcbiAgICB9LCAwKTtcbiAgfTtcblxuICAvKipcbiAgICogVHJhbnNmb3JtIHRvb2xiYXIgYmFjayBpbnRvIEZBQlxuICAgKiBAcGFyYW0gIHtPYmplY3R9ICBvYmplY3QgalF1ZXJ5IG9iamVjdFxuICAgKi9cbiAgdmFyIHRvb2xiYXJUb0ZBQiA9IGZ1bmN0aW9uIChidG4pIHtcbiAgICBpZiAoYnRuLmF0dHIoJ2RhdGEtb3BlbicpICE9PSBcInRydWVcIikge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHZhciBvZmZzZXRYLCBvZmZzZXRZLCBzY2FsZUZhY3RvcjtcbiAgICB2YXIgd2luZG93V2lkdGggPSB3aW5kb3cuaW5uZXJXaWR0aDtcbiAgICB2YXIgd2luZG93SGVpZ2h0ID0gd2luZG93LmlubmVySGVpZ2h0O1xuICAgIHZhciBidG5XaWR0aCA9IGJ0bi5hdHRyKCdkYXRhLW9yaWdpbi13aWR0aCcpO1xuICAgIHZhciBidG5Cb3R0b20gPSBidG4uYXR0cignZGF0YS1vcmlnaW4tYm90dG9tJyk7XG4gICAgdmFyIGJ0bkxlZnQgPSBidG4uYXR0cignZGF0YS1vcmlnaW4tbGVmdCcpO1xuICAgIHZhciBhbmNob3IgPSBidG4uZmluZCgnPiAuYnRuLWZsb2F0aW5nJykuZmlyc3QoKTtcbiAgICB2YXIgbWVudSA9IGJ0bi5maW5kKCc+IHVsJykuZmlyc3QoKTtcbiAgICB2YXIgYmFja2Ryb3AgPSBidG4uZmluZCgnLmZhYi1iYWNrZHJvcCcpO1xuICAgIHZhciBmYWJDb2xvciA9IGFuY2hvci5jc3MoJ2JhY2tncm91bmQtY29sb3InKTtcblxuICAgIG9mZnNldFggPSBidG5MZWZ0IC0gd2luZG93V2lkdGggLyAyICsgYnRuV2lkdGggLyAyO1xuICAgIG9mZnNldFkgPSB3aW5kb3dIZWlnaHQgLSBidG5Cb3R0b207XG4gICAgc2NhbGVGYWN0b3IgPSB3aW5kb3dXaWR0aCAvIGJhY2tkcm9wLndpZHRoKCk7XG5cbiAgICAvLyBIaWRlIGJhY2tkcm9wXG4gICAgYnRuLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcbiAgICBidG4uYXR0cignZGF0YS1vcGVuJywgZmFsc2UpO1xuICAgIGJ0bi5jc3Moe1xuICAgICAgJ2JhY2tncm91bmQtY29sb3InOiAndHJhbnNwYXJlbnQnLFxuICAgICAgdHJhbnNpdGlvbjogJ25vbmUnXG4gICAgfSk7XG4gICAgYW5jaG9yLmNzcyh7XG4gICAgICB0cmFuc2l0aW9uOiAnbm9uZSdcbiAgICB9KTtcbiAgICBiYWNrZHJvcC5jc3Moe1xuICAgICAgdHJhbnNmb3JtOiAnc2NhbGUoMCknLFxuICAgICAgJ2JhY2tncm91bmQtY29sb3InOiBmYWJDb2xvclxuICAgIH0pO1xuICAgIG1lbnUuZmluZCgnPiBsaSA+IGEnKS5jc3Moe1xuICAgICAgb3BhY2l0eTogJydcbiAgICB9KTtcblxuICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgYmFja2Ryb3AucmVtb3ZlKCk7XG5cbiAgICAgIC8vIFNldCBpbml0aWFsIHN0YXRlLlxuICAgICAgYnRuLmNzcyh7XG4gICAgICAgICd0ZXh0LWFsaWduJzogJycsXG4gICAgICAgIHdpZHRoOiAnJyxcbiAgICAgICAgYm90dG9tOiAnJyxcbiAgICAgICAgbGVmdDogJycsXG4gICAgICAgIG92ZXJmbG93OiAnJyxcbiAgICAgICAgJ2JhY2tncm91bmQtY29sb3InOiAnJyxcbiAgICAgICAgdHJhbnNmb3JtOiAndHJhbnNsYXRlM2QoJyArIC1vZmZzZXRYICsgJ3B4LDAsMCknXG4gICAgICB9KTtcbiAgICAgIGFuY2hvci5jc3Moe1xuICAgICAgICBvdmVyZmxvdzogJycsXG4gICAgICAgIHRyYW5zZm9ybTogJ3RyYW5zbGF0ZTNkKDAsJyArIG9mZnNldFkgKyAncHgsMCknXG4gICAgICB9KTtcblxuICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgIGJ0bi5jc3Moe1xuICAgICAgICAgIHRyYW5zZm9ybTogJ3RyYW5zbGF0ZTNkKDAsMCwwKScsXG4gICAgICAgICAgdHJhbnNpdGlvbjogJ3RyYW5zZm9ybSAuMnMnXG4gICAgICAgIH0pO1xuICAgICAgICBhbmNob3IuY3NzKHtcbiAgICAgICAgICB0cmFuc2Zvcm06ICd0cmFuc2xhdGUzZCgwLDAsMCknLFxuICAgICAgICAgIHRyYW5zaXRpb246ICd0cmFuc2Zvcm0gLjJzIGN1YmljLWJlemllcigwLjU1MCwgMC4wNTUsIDAuNjc1LCAwLjE5MCknXG4gICAgICAgIH0pO1xuICAgICAgfSwgMjApO1xuICAgIH0sIDIwMCk7XG4gIH07XG59KShqUXVlcnkpO1xuXG4vLyMgc291cmNlTWFwcGluZ1VSTD1tYXRlcmlhbGl6ZV9jb25jYXQuanMubWFwXG4vLyMgc291cmNlTWFwcGluZ1VSTD1tYXRlcmlhbGl6ZS5qcy5tYXBcbiIsIi8qIVxuICAqIFNpbXBsZS1KZWt5bGwtU2VhcmNoIHYxLjQuMSAoaHR0cHM6Ly9naXRodWIuY29tL2NocmlzdGlhbi1mZWkvU2ltcGxlLUpla3lsbC1TZWFyY2gpXG4gICogQ29weXJpZ2h0IDIwMTUtMjAxNywgQ2hyaXN0aWFuIEZlaVxuICAqIExpY2Vuc2VkIHVuZGVyIE1JVCAoaHR0cHM6Ly9naXRodWIuY29tL2NocmlzdGlhbi1mZWkvU2ltcGxlLUpla3lsbC1TZWFyY2gvYmxvYi9tYXN0ZXIvTElDRU5TRS5tZClcbiAgKi9cbiFmdW5jdGlvbiB0KGUscixuKXtmdW5jdGlvbiBpKG8sYSl7aWYoIXJbb10pe2lmKCFlW29dKXt2YXIgYz1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlO2lmKCFhJiZjKXJldHVybiBjKG8sITApO2lmKHUpcmV0dXJuIHUobywhMCk7dmFyIHM9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBzLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsc312YXIgZj1yW29dPXtleHBvcnRzOnt9fTtlW29dWzBdLmNhbGwoZi5leHBvcnRzLGZ1bmN0aW9uKHQpe3ZhciByPWVbb11bMV1bdF07cmV0dXJuIGkocnx8dCl9LGYsZi5leHBvcnRzLHQsZSxyLG4pfXJldHVybiByW29dLmV4cG9ydHN9Zm9yKHZhciB1PVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmUsbz0wO288bi5sZW5ndGg7bysrKWkobltvXSk7cmV0dXJuIGl9KHsxOltmdW5jdGlvbih0LGUscil7XCJ1c2Ugc3RyaWN0XCI7ZS5leHBvcnRzPWZ1bmN0aW9uKHQsZSl7dmFyIHI9ZS5sZW5ndGgsbj10Lmxlbmd0aDtpZihuPnIpcmV0dXJuITE7aWYobj09PXIpcmV0dXJuIHQ9PT1lO3Q6Zm9yKHZhciBpPTAsdT0wO2k8bjtpKyspe2Zvcih2YXIgbz10LmNoYXJDb2RlQXQoaSk7dTxyOylpZihlLmNoYXJDb2RlQXQodSsrKT09PW8pY29udGludWUgdDtyZXR1cm4hMX1yZXR1cm4hMH19LHt9XSwyOltmdW5jdGlvbih0LGUscil7XCJ1c2Ugc3RyaWN0XCI7ZnVuY3Rpb24gbih0LGUpe3JldHVybiBmdW5jdGlvbigpe2lmKDQ9PT10LnJlYWR5U3RhdGUmJjIwMD09PXQuc3RhdHVzKXRyeXtlKG51bGwsSlNPTi5wYXJzZSh0LnJlc3BvbnNlVGV4dCkpfWNhdGNoKHIpe2UocixudWxsKX19fWZ1bmN0aW9uIGkoKXtyZXR1cm4gd2luZG93LlhNTEh0dHBSZXF1ZXN0P25ldyBYTUxIdHRwUmVxdWVzdDpuZXcgQWN0aXZlWE9iamVjdChcIk1pY3Jvc29mdC5YTUxIVFRQXCIpfWUuZXhwb3J0cz17bG9hZDpmdW5jdGlvbih0LGUpe3ZhciByPWkoKTtyLm9wZW4oXCJHRVRcIix0LCEwKSxyLm9ucmVhZHlzdGF0ZWNoYW5nZT1uKHIsZSksci5zZW5kKCl9fX0se31dLDM6W2Z1bmN0aW9uKHQsZSxyKXtcInVzZSBzdHJpY3RcIjtlLmV4cG9ydHM9ZnVuY3Rpb24gbih0KXtpZighZnVuY3Rpb24odCl7cmV0dXJuISF0JiZcInVuZGVmaW5lZFwiIT10eXBlb2YgdC5yZXF1aXJlZCYmdC5yZXF1aXJlZCBpbnN0YW5jZW9mIEFycmF5fSh0KSl0aHJvdyBuZXcgRXJyb3IoXCItLSBPcHRpb25zVmFsaWRhdG9yOiByZXF1aXJlZCBvcHRpb25zIG1pc3NpbmdcIik7aWYoISh0aGlzIGluc3RhbmNlb2YgbikpcmV0dXJuIG5ldyBuKHQpO3ZhciBlPXQucmVxdWlyZWQ7dGhpcy5nZXRSZXF1aXJlZE9wdGlvbnM9ZnVuY3Rpb24oKXtyZXR1cm4gZX0sdGhpcy52YWxpZGF0ZT1mdW5jdGlvbih0KXt2YXIgcj1bXTtyZXR1cm4gZS5mb3JFYWNoKGZ1bmN0aW9uKGUpe1widW5kZWZpbmVkXCI9PXR5cGVvZiB0W2VdJiZyLnB1c2goZSl9KSxyfX19LHt9XSw0OltmdW5jdGlvbih0LGUscil7XCJ1c2Ugc3RyaWN0XCI7ZnVuY3Rpb24gbih0KXtyZXR1cm4hIXQmJlwiW29iamVjdCBPYmplY3RdXCI9PT1PYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwodCl9ZnVuY3Rpb24gaSh0KXtyZXR1cm4hIXQmJlwiW29iamVjdCBBcnJheV1cIj09PU9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbCh0KX1mdW5jdGlvbiB1KHQpe3JldHVybiBwLnB1c2godCkscH1mdW5jdGlvbiBvKHQpe2Zvcih2YXIgZT1bXSxyPTA7cjx0Lmxlbmd0aDtyKyspbih0W3JdKSYmZS5wdXNoKHUodFtyXSkpO3JldHVybiBlfWZ1bmN0aW9uIGEodCxlLHIsbil7Zm9yKHZhciBpPVtdLHU9MDt1PHQubGVuZ3RoJiZpLmxlbmd0aDxuLmxpbWl0O3UrKyl7dmFyIG89Yyh0W3VdLGUscixuKTtvJiZpLnB1c2gobyl9cmV0dXJuIGl9ZnVuY3Rpb24gYyh0LGUscixuKXtmb3IodmFyIGkgaW4gdClpZighcyh0W2ldLG4uZXhjbHVkZSkmJnIubWF0Y2hlcyh0W2ldLGUpKXJldHVybiB0fWZ1bmN0aW9uIHModCxlKXt2YXIgcj0hMTtlPWV8fFtdO2Zvcih2YXIgbj0wO248ZS5sZW5ndGg7bisrKXt2YXIgaT1lW25dOyFyJiZuZXcgUmVnRXhwKHQpLnRlc3QoaSkmJihyPSEwKX1yZXR1cm4gcn1lLmV4cG9ydHM9e3B1dDpmdW5jdGlvbih0KXtyZXR1cm4gbih0KT91KHQpOmkodCk/byh0KTp1bmRlZmluZWR9LGNsZWFyOmZ1bmN0aW9uKCl7cmV0dXJuIHAubGVuZ3RoPTAscH0sZ2V0OmZ1bmN0aW9uKCl7cmV0dXJuIHB9LHNlYXJjaDpmdW5jdGlvbih0KXtyZXR1cm4gdD9hKHAsdCxoLnNlYXJjaFN0cmF0ZWd5LGgpOltdfSxzZXRPcHRpb25zOmZ1bmN0aW9uKHQpeyhoPXR8fHt9KS5mdXp6eT10LmZ1enp5fHwhMSxoLmxpbWl0PXQubGltaXR8fDEwLGguc2VhcmNoU3RyYXRlZ3k9dC5mdXp6eT9mOmx9fTt2YXIgZj10KFwiLi9TZWFyY2hTdHJhdGVnaWVzL0Z1enp5U2VhcmNoU3RyYXRlZ3lcIiksbD10KFwiLi9TZWFyY2hTdHJhdGVnaWVzL0xpdGVyYWxTZWFyY2hTdHJhdGVneVwiKSxwPVtdLGg9e307aC5mdXp6eT0hMSxoLmxpbWl0PTEwLGguc2VhcmNoU3RyYXRlZ3k9aC5mdXp6eT9mOmx9LHtcIi4vU2VhcmNoU3RyYXRlZ2llcy9GdXp6eVNlYXJjaFN0cmF0ZWd5XCI6NSxcIi4vU2VhcmNoU3RyYXRlZ2llcy9MaXRlcmFsU2VhcmNoU3RyYXRlZ3lcIjo2fV0sNTpbZnVuY3Rpb24odCxlLHIpe1widXNlIHN0cmljdFwiO3ZhciBuPXQoXCJmdXp6eXNlYXJjaFwiKTtlLmV4cG9ydHM9bmV3IGZ1bmN0aW9uKCl7dGhpcy5tYXRjaGVzPWZ1bmN0aW9uKHQsZSl7cmV0dXJuIG4oZSx0KX19fSx7ZnV6enlzZWFyY2g6MX1dLDY6W2Z1bmN0aW9uKHQsZSxyKXtcInVzZSBzdHJpY3RcIjtlLmV4cG9ydHM9bmV3IGZ1bmN0aW9uKCl7dGhpcy5tYXRjaGVzPWZ1bmN0aW9uKHQsZSl7cmV0dXJuXCJzdHJpbmdcIj09dHlwZW9mIHQmJih0PXQudHJpbSgpKS50b0xvd2VyQ2FzZSgpLmluZGV4T2YoZS50b0xvd2VyQ2FzZSgpKT49MH19fSx7fV0sNzpbZnVuY3Rpb24odCxlLHIpe1widXNlIHN0cmljdFwiO2UuZXhwb3J0cz17Y29tcGlsZTpmdW5jdGlvbih0KXtyZXR1cm4gbi50ZW1wbGF0ZS5yZXBsYWNlKG4ucGF0dGVybixmdW5jdGlvbihlLHIpe3ZhciBpPW4ubWlkZGxld2FyZShyLHRbcl0sbi50ZW1wbGF0ZSk7cmV0dXJuIHZvaWQgMCE9PWk/aTp0W3JdfHxlfSl9LHNldE9wdGlvbnM6ZnVuY3Rpb24odCl7bi5wYXR0ZXJuPXQucGF0dGVybnx8bi5wYXR0ZXJuLG4udGVtcGxhdGU9dC50ZW1wbGF0ZXx8bi50ZW1wbGF0ZSxcImZ1bmN0aW9uXCI9PXR5cGVvZiB0Lm1pZGRsZXdhcmUmJihuLm1pZGRsZXdhcmU9dC5taWRkbGV3YXJlKX19O3ZhciBuPXt9O24ucGF0dGVybj0vXFx7KC4qPylcXH0vZyxuLnRlbXBsYXRlPVwiXCIsbi5taWRkbGV3YXJlPWZ1bmN0aW9uKCl7fX0se31dLDg6W2Z1bmN0aW9uKHQsZSxyKXshZnVuY3Rpb24oZSxyKXtcInVzZSBzdHJpY3RcIjtmdW5jdGlvbiBuKHQpe20ucHV0KHQpLGEoKX1mdW5jdGlvbiBpKHQpe1MubG9hZCh0LGZ1bmN0aW9uKGUscil7ZSYmcChcImZhaWxlZCB0byBnZXQgSlNPTiAoXCIrdCtcIilcIiksbihyKX0pfWZ1bmN0aW9uIHUoKXtoLnJlc3VsdHNDb250YWluZXIuaW5uZXJIVE1MPVwiXCJ9ZnVuY3Rpb24gbyh0KXtoLnJlc3VsdHNDb250YWluZXIuaW5uZXJIVE1MKz10fWZ1bmN0aW9uIGEoKXtoLnNlYXJjaElucHV0LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXl1cFwiLGZ1bmN0aW9uKHQpe2wodC53aGljaCkmJih1KCksYyh0LnRhcmdldC52YWx1ZSkpfSl9ZnVuY3Rpb24gYyh0KXtmKHQpJiZzKG0uc2VhcmNoKHQpKX1mdW5jdGlvbiBzKHQpe3ZhciBlPXQubGVuZ3RoO2lmKDA9PT1lKXJldHVybiBvKGgubm9SZXN1bHRzVGV4dCk7Zm9yKHZhciByPTA7cjxlO3IrKylvKHkuY29tcGlsZSh0W3JdKSl9ZnVuY3Rpb24gZih0KXtyZXR1cm4gdCYmdC5sZW5ndGg+MH1mdW5jdGlvbiBsKHQpe3JldHVybi0xPT09WzEzLDE2LDIwLDM3LDM4LDM5LDQwLDkxXS5pbmRleE9mKHQpfWZ1bmN0aW9uIHAodCl7dGhyb3cgbmV3IEVycm9yKFwiU2ltcGxlSmVreWxsU2VhcmNoIC0tLSBcIit0KX12YXIgaD17c2VhcmNoSW5wdXQ6bnVsbCxyZXN1bHRzQ29udGFpbmVyOm51bGwsanNvbjpbXSxzZWFyY2hSZXN1bHRUZW1wbGF0ZTonPGxpPjxhIGhyZWY9XCJ7dXJsfVwiIHRpdGxlPVwie2Rlc2N9XCI+e3RpdGxlfTwvYT48L2xpPicsdGVtcGxhdGVNaWRkbGV3YXJlOmZ1bmN0aW9uKCl7fSxub1Jlc3VsdHNUZXh0OlwiTm8gcmVzdWx0cyBmb3VuZFwiLGxpbWl0OjEwLGZ1enp5OiExLGV4Y2x1ZGU6W119LGQ9W1wic2VhcmNoSW5wdXRcIixcInJlc3VsdHNDb250YWluZXJcIixcImpzb25cIl0seT10KFwiLi9UZW1wbGF0ZXJcIiksbT10KFwiLi9SZXBvc2l0b3J5XCIpLFM9dChcIi4vSlNPTkxvYWRlclwiKSxnPXQoXCIuL09wdGlvbnNWYWxpZGF0b3JcIikoe3JlcXVpcmVkOmR9KSx2PXQoXCIuL3V0aWxzXCIpO2UuU2ltcGxlSmVreWxsU2VhcmNoPWZ1bmN0aW9uKHQpe3JldHVybiBnLnZhbGlkYXRlKHQpLmxlbmd0aD4wJiZwKFwiWW91IG11c3Qgc3BlY2lmeSB0aGUgZm9sbG93aW5nIHJlcXVpcmVkIG9wdGlvbnM6IFwiK2QpLGg9di5tZXJnZShoLHQpLHkuc2V0T3B0aW9ucyh7dGVtcGxhdGU6aC5zZWFyY2hSZXN1bHRUZW1wbGF0ZSxtaWRkbGV3YXJlOmgudGVtcGxhdGVNaWRkbGV3YXJlfSksbS5zZXRPcHRpb25zKHtmdXp6eTpoLmZ1enp5LGxpbWl0OmgubGltaXR9KSx2LmlzSlNPTihoLmpzb24pP24oaC5qc29uKTppKGguanNvbikse3NlYXJjaDpjfX0sZS5TaW1wbGVKZWt5bGxTZWFyY2guaW5pdD1lLlNpbXBsZUpla3lsbFNlYXJjaCxcImZ1bmN0aW9uXCI9PXR5cGVvZiBlLlNpbXBsZUpla3lsbFNlYXJjaEluaXQmJmUuU2ltcGxlSmVreWxsU2VhcmNoSW5pdC5jYWxsKHRoaXMsZS5TaW1wbGVKZWt5bGxTZWFyY2gpfSh3aW5kb3csZG9jdW1lbnQpfSx7XCIuL0pTT05Mb2FkZXJcIjoyLFwiLi9PcHRpb25zVmFsaWRhdG9yXCI6MyxcIi4vUmVwb3NpdG9yeVwiOjQsXCIuL1RlbXBsYXRlclwiOjcsXCIuL3V0aWxzXCI6OX1dLDk6W2Z1bmN0aW9uKHQsZSxyKXtcInVzZSBzdHJpY3RcIjtlLmV4cG9ydHM9e21lcmdlOmZ1bmN0aW9uKHQsZSl7dmFyIHI9e307Zm9yKHZhciBuIGluIHQpcltuXT10W25dLFwidW5kZWZpbmVkXCIhPXR5cGVvZiBlW25dJiYocltuXT1lW25dKTtyZXR1cm4gcn0saXNKU09OOmZ1bmN0aW9uKHQpe3RyeXtyZXR1cm4hISh0IGluc3RhbmNlb2YgT2JqZWN0JiZKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KHQpKSl9Y2F0Y2goZSl7cmV0dXJuITF9fX19LHt9XX0se30sWzhdKTsiLCIvLyAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqIC8vXG4vLyAqKiogSGlkZSBIZWFkZXIgb24gb24gc2Nyb2xsIGRvd24gKioqIC8vXG4vLyAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqIC8vXG5cbnZhciBkaWRTY3JvbGw7XG52YXIgbGFzdFNjcm9sbFRvcCA9IDA7XG52YXIgZGVsdGEgPSA1O1xudmFyIG5hdmJhckhlaWdodCA9ICQoJy5uYXZiYXItZml4ZWQnKS5vdXRlckhlaWdodCgpO1xuXG4kKHdpbmRvdykuc2Nyb2xsKGZ1bmN0aW9uKGV2ZW50KXtcbiAgICBkaWRTY3JvbGwgPSB0cnVlO1xufSk7XG5cbnNldEludGVydmFsKGZ1bmN0aW9uKCkge1xuICAgIGlmIChkaWRTY3JvbGwpIHtcbiAgICAgICAgaGFzU2Nyb2xsZWQoKTtcbiAgICAgICAgZGlkU2Nyb2xsID0gZmFsc2U7XG4gICAgfVxufSwgMjUwKTtcblxuZnVuY3Rpb24gaGFzU2Nyb2xsZWQoKSB7XG4gICAgdmFyIHN0ID0gJCh0aGlzKS5zY3JvbGxUb3AoKTtcblxuICAgIC8vIE1ha2Ugc3VyZSB0aGV5IHNjcm9sbCBtb3JlIHRoYW4gZGVsdGFcbiAgICBpZihNYXRoLmFicyhsYXN0U2Nyb2xsVG9wIC0gc3QpIDw9IGRlbHRhKVxuICAgICAgICByZXR1cm47XG5cbiAgICAvLyBJZiB0aGV5IHNjcm9sbGVkIGRvd24gYW5kIGFyZSBwYXN0IHRoZSBuYXZiYXIsIGFkZCBjbGFzcyAubmF2LXVwLlxuICAgIC8vIFRoaXMgaXMgbmVjZXNzYXJ5IHNvIHlvdSBuZXZlciBzZWUgd2hhdCBpcyBcImJlaGluZFwiIHRoZSBuYXZiYXIuXG4gICAgaWYgKHN0ID4gbGFzdFNjcm9sbFRvcCAmJiBzdCA+IG5hdmJhckhlaWdodCl7XG4gICAgICAgIC8vIFNjcm9sbCBEb3duXG4gICAgICAgICQoJy5uYXZiYXItZml4ZWQnKS5yZW1vdmVDbGFzcygnbmF2LWRvd24nKS5hZGRDbGFzcygnbmF2LXVwJyk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgLy8gU2Nyb2xsIFVwXG4gICAgICAgIGlmKHN0ICsgJCh3aW5kb3cpLmhlaWdodCgpIDwgJChkb2N1bWVudCkuaGVpZ2h0KCkpIHtcbiAgICAgICAgICAgICQoJy5uYXZiYXItZml4ZWQnKS5yZW1vdmVDbGFzcygnbmF2LXVwJykuYWRkQ2xhc3MoJ25hdi1kb3duJyk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0U2Nyb2xsVG9wID0gc3Q7XG59XG5cblxuLy8gKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiAvL1xuLy8gKiogVG9nZ2xlYWJsZSBJbnZlcnRlciAoTmlnaHRNb2RlKSAqKiAvL1xuLy8gKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiAvL1xuLy8gdG9nZ2xlYWJsZSBpbnZlcnRlciB3aXRoIHNlc3Npb25TdG9yYWdlXG4vLyBmcm9tIGh0dHA6Ly9zdGFja292ZXJmbG93LmNvbS9xdWVzdGlvbnMvMjgyMzkzMzcvc3RvcmUtYS1jc3MtY2xhc3Mtb24tYnJvd3NlclxuXG5cbiAgJCgnI2ludmVydGVyJykuY2xpY2soZnVuY3Rpb24gKCkge1xuICAgICQoJ2JvZHknKS50b2dnbGVDbGFzcygnbmlnaHQnKTtcblxuICAgIGlmICgkKCdib2R5JykuaGFzQ2xhc3MoJ25pZ2h0JykpIHtcbiAgICAgIHNlc3Npb25TdG9yYWdlLnNldEl0ZW0oJ3RoZW1lJywgJ25pZ2h0Jyk7XG4gICAgfVxuXG4gICAgZWxzZSB7XG4gICAgICBzZXNzaW9uU3RvcmFnZS5zZXRJdGVtKCd0aGVtZScsICdkYXknKTtcbiAgICB9XG5cbiAgfSk7XG5cbiAgJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24oKSB7XG4gICAgdmFyIHRoZW1lID0gc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbSgndGhlbWUnKTtcbiAgICBpZiAodGhlbWUgIT09ICcnKSB7XG4gICAgICAkKCdib2R5JykuYWRkQ2xhc3ModGhlbWUpO1xuICAgIH1cbiAgfSk7XG5cblxuXG4gICQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uKCkge1xuXG4gICAgJChmdW5jdGlvbiAoKSB7XG4gICAgICAkKCcuaW52ZXJ0IGknKS5jbGljayhmdW5jdGlvbigpIHtcblxuICAgICAgICAkKHRoaXMpLnRvZ2dsZUNsYXNzKCdmZWF0aGVyLXN1bicpO1xuXG4gICAgICAgIGlmICgkKHRoaXMpLmF0dHIoJ2NsYXNzJykgPT0gJ2ZlYXRoZXItbW9vbicpIHtcbiAgICAgICAgICBzZXNzaW9uU3RvcmFnZS5jbGFzcyA9ICdmZWF0aGVyLW1vb24nO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKCQodGhpcykuYXR0cignY2xhc3MnKSA9PSAoJ2ZlYXRoZXItbW9vbiBmZWF0aGVyLXN1bicpKSB7XG4gICAgICAgICAgc2Vzc2lvblN0b3JhZ2UuY2xhc3MgPSAnZmVhdGhlci1zdW4nO1xuICAgICAgICB9XG5cbiAgICAgIH0pO1xuXG4gICAgfSk7XG5cbiAgICBpZih0eXBlb2YoU3RvcmFnZSkgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAkKCcuaW52ZXJ0IGknKS5hZGRDbGFzcyhzZXNzaW9uU3RvcmFnZS5jbGFzcyk7XG4gICAgfVxuXG4gIH0pO1xuXG5cbi8vIEluaXRpYWxpemUgbWF0ZXJpYWxpemUgY29tcG9uZW50c1xuXG4gICQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uKCkge1xuICAgICQoJy5wYXJhbGxheCcpLnBhcmFsbGF4KCk7XG5cbiAgICAkKFwiLmJ1dHRvbi1jb2xsYXBzZVwiKS5zaWRlTmF2KHtcbiAgICAgIG1lbnVXaWR0aDogMjcwLFxuICAgICAgZWRnZTogJ3JpZ2h0JyxcbiAgICAgIGNsb3NlT25DbGljazogdHJ1ZSxcbiAgICAgIGRyYWdnYWJsZTogdHJ1ZVxuICAgIH0pO1xuXG4gICAgJCgnLmNvbGxhcHNpYmxlJykuY29sbGFwc2libGUoKTtcbiAgfSk7XG5cblxuICAvLyBJbml0aWFsaXplIHRoZSBKZWt5bGwgU2VhcmNoIHBsdWdpblxuICBTaW1wbGVKZWt5bGxTZWFyY2goe1xuICAgIHNlYXJjaElucHV0OiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2VhcmNoLWlucHV0JyksXG4gICAgcmVzdWx0c0NvbnRhaW5lcjogZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Jlc3VsdHMtY29udGFpbmVyJyksXG4gICAganNvbjogJy9zZWFyY2guanNvbidcbiAgfSk7XG4iLCIvKiFcbiAqIGpRdWVyeSBTbW9vdGggU2Nyb2xsIC0gdjIuMi4wIC0gMjAxNy0wNS0wNVxuICogaHR0cHM6Ly9naXRodWIuY29tL2tzd2VkYmVyZy9qcXVlcnktc21vb3RoLXNjcm9sbFxuICogQ29weXJpZ2h0IChjKSAyMDE3IEthcmwgU3dlZGJlcmdcbiAqIExpY2Vuc2VkIE1JVFxuICovXG5cblxuIWZ1bmN0aW9uKGEpe1wiZnVuY3Rpb25cIj09dHlwZW9mIGRlZmluZSYmZGVmaW5lLmFtZD9kZWZpbmUoW1wianF1ZXJ5XCJdLGEpOmEoXCJvYmplY3RcIj09dHlwZW9mIG1vZHVsZSYmbW9kdWxlLmV4cG9ydHM/cmVxdWlyZShcImpxdWVyeVwiKTpqUXVlcnkpfShmdW5jdGlvbihhKXt2YXIgYj17fSxjPXtleGNsdWRlOltdLGV4Y2x1ZGVXaXRoaW46W10sb2Zmc2V0OjAsZGlyZWN0aW9uOlwidG9wXCIsZGVsZWdhdGVTZWxlY3RvcjpudWxsLHNjcm9sbEVsZW1lbnQ6bnVsbCxzY3JvbGxUYXJnZXQ6bnVsbCxhdXRvRm9jdXM6ITEsYmVmb3JlU2Nyb2xsOmZ1bmN0aW9uKCl7fSxhZnRlclNjcm9sbDpmdW5jdGlvbigpe30sZWFzaW5nOlwic3dpbmdcIixzcGVlZDo0MDAsYXV0b0NvZWZmaWNpZW50OjIscHJldmVudERlZmF1bHQ6ITB9LGQ9ZnVuY3Rpb24oYil7dmFyIGM9W10sZD0hMSxlPWIuZGlyJiZcImxlZnRcIj09PWIuZGlyP1wic2Nyb2xsTGVmdFwiOlwic2Nyb2xsVG9wXCI7cmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbigpe3ZhciBiPWEodGhpcyk7aWYodGhpcyE9PWRvY3VtZW50JiZ0aGlzIT09d2luZG93KXJldHVybiFkb2N1bWVudC5zY3JvbGxpbmdFbGVtZW50fHx0aGlzIT09ZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50JiZ0aGlzIT09ZG9jdW1lbnQuYm9keT92b2lkKGJbZV0oKT4wP2MucHVzaCh0aGlzKTooYltlXSgxKSxkPWJbZV0oKT4wLGQmJmMucHVzaCh0aGlzKSxiW2VdKDApKSk6KGMucHVzaChkb2N1bWVudC5zY3JvbGxpbmdFbGVtZW50KSwhMSl9KSxjLmxlbmd0aHx8dGhpcy5lYWNoKGZ1bmN0aW9uKCl7dGhpcz09PWRvY3VtZW50LmRvY3VtZW50RWxlbWVudCYmXCJzbW9vdGhcIj09PWEodGhpcykuY3NzKFwic2Nyb2xsQmVoYXZpb3JcIikmJihjPVt0aGlzXSksYy5sZW5ndGh8fFwiQk9EWVwiIT09dGhpcy5ub2RlTmFtZXx8KGM9W3RoaXNdKX0pLFwiZmlyc3RcIj09PWIuZWwmJmMubGVuZ3RoPjEmJihjPVtjWzBdXSksY30sZT0vXihbXFwtXFwrXT0pKFxcZCspLzthLmZuLmV4dGVuZCh7c2Nyb2xsYWJsZTpmdW5jdGlvbihhKXt2YXIgYj1kLmNhbGwodGhpcyx7ZGlyOmF9KTtyZXR1cm4gdGhpcy5wdXNoU3RhY2soYil9LGZpcnN0U2Nyb2xsYWJsZTpmdW5jdGlvbihhKXt2YXIgYj1kLmNhbGwodGhpcyx7ZWw6XCJmaXJzdFwiLGRpcjphfSk7cmV0dXJuIHRoaXMucHVzaFN0YWNrKGIpfSxzbW9vdGhTY3JvbGw6ZnVuY3Rpb24oYixjKXtpZihcIm9wdGlvbnNcIj09PShiPWJ8fHt9KSlyZXR1cm4gYz90aGlzLmVhY2goZnVuY3Rpb24oKXt2YXIgYj1hKHRoaXMpLGQ9YS5leHRlbmQoYi5kYXRhKFwic3NPcHRzXCIpfHx7fSxjKTthKHRoaXMpLmRhdGEoXCJzc09wdHNcIixkKX0pOnRoaXMuZmlyc3QoKS5kYXRhKFwic3NPcHRzXCIpO3ZhciBkPWEuZXh0ZW5kKHt9LGEuZm4uc21vb3RoU2Nyb2xsLmRlZmF1bHRzLGIpLGU9ZnVuY3Rpb24oYil7dmFyIGM9ZnVuY3Rpb24oYSl7cmV0dXJuIGEucmVwbGFjZSgvKDp8XFwufFxcLykvZyxcIlxcXFwkMVwiKX0sZT10aGlzLGY9YSh0aGlzKSxnPWEuZXh0ZW5kKHt9LGQsZi5kYXRhKFwic3NPcHRzXCIpfHx7fSksaD1kLmV4Y2x1ZGUsaT1nLmV4Y2x1ZGVXaXRoaW4saj0wLGs9MCxsPSEwLG09e30sbj1hLnNtb290aFNjcm9sbC5maWx0ZXJQYXRoKGxvY2F0aW9uLnBhdGhuYW1lKSxvPWEuc21vb3RoU2Nyb2xsLmZpbHRlclBhdGgoZS5wYXRobmFtZSkscD1sb2NhdGlvbi5ob3N0bmFtZT09PWUuaG9zdG5hbWV8fCFlLmhvc3RuYW1lLHE9Zy5zY3JvbGxUYXJnZXR8fG89PT1uLHI9YyhlLmhhc2gpO2lmKHImJiFhKHIpLmxlbmd0aCYmKGw9ITEpLGcuc2Nyb2xsVGFyZ2V0fHxwJiZxJiZyKXtmb3IoO2wmJmo8aC5sZW5ndGg7KWYuaXMoYyhoW2orK10pKSYmKGw9ITEpO2Zvcig7bCYmazxpLmxlbmd0aDspZi5jbG9zZXN0KGlbaysrXSkubGVuZ3RoJiYobD0hMSl9ZWxzZSBsPSExO2wmJihnLnByZXZlbnREZWZhdWx0JiZiLnByZXZlbnREZWZhdWx0KCksYS5leHRlbmQobSxnLHtzY3JvbGxUYXJnZXQ6Zy5zY3JvbGxUYXJnZXR8fHIsbGluazplfSksYS5zbW9vdGhTY3JvbGwobSkpfTtyZXR1cm4gbnVsbCE9PWIuZGVsZWdhdGVTZWxlY3Rvcj90aGlzLm9mZihcImNsaWNrLnNtb290aHNjcm9sbFwiLGIuZGVsZWdhdGVTZWxlY3Rvcikub24oXCJjbGljay5zbW9vdGhzY3JvbGxcIixiLmRlbGVnYXRlU2VsZWN0b3IsZSk6dGhpcy5vZmYoXCJjbGljay5zbW9vdGhzY3JvbGxcIikub24oXCJjbGljay5zbW9vdGhzY3JvbGxcIixlKSx0aGlzfX0pO3ZhciBmPWZ1bmN0aW9uKGEpe3ZhciBiPXtyZWxhdGl2ZTpcIlwifSxjPVwic3RyaW5nXCI9PXR5cGVvZiBhJiZlLmV4ZWMoYSk7cmV0dXJuXCJudW1iZXJcIj09dHlwZW9mIGE/Yi5weD1hOmMmJihiLnJlbGF0aXZlPWNbMV0sYi5weD1wYXJzZUZsb2F0KGNbMl0pfHwwKSxifSxnPWZ1bmN0aW9uKGIpe3ZhciBjPWEoYi5zY3JvbGxUYXJnZXQpO2IuYXV0b0ZvY3VzJiZjLmxlbmd0aCYmKGNbMF0uZm9jdXMoKSxjLmlzKGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQpfHwoYy5wcm9wKHt0YWJJbmRleDotMX0pLGNbMF0uZm9jdXMoKSkpLGIuYWZ0ZXJTY3JvbGwuY2FsbChiLmxpbmssYil9O2Euc21vb3RoU2Nyb2xsPWZ1bmN0aW9uKGMsZCl7aWYoXCJvcHRpb25zXCI9PT1jJiZcIm9iamVjdFwiPT10eXBlb2YgZClyZXR1cm4gYS5leHRlbmQoYixkKTt2YXIgZSxoLGksaixrPWYoYyksbD17fSxtPTAsbj1cIm9mZnNldFwiLG89XCJzY3JvbGxUb3BcIixwPXt9LHE9e307ay5weD9lPWEuZXh0ZW5kKHtsaW5rOm51bGx9LGEuZm4uc21vb3RoU2Nyb2xsLmRlZmF1bHRzLGIpOihlPWEuZXh0ZW5kKHtsaW5rOm51bGx9LGEuZm4uc21vb3RoU2Nyb2xsLmRlZmF1bHRzLGN8fHt9LGIpLGUuc2Nyb2xsRWxlbWVudCYmKG49XCJwb3NpdGlvblwiLFwic3RhdGljXCI9PT1lLnNjcm9sbEVsZW1lbnQuY3NzKFwicG9zaXRpb25cIikmJmUuc2Nyb2xsRWxlbWVudC5jc3MoXCJwb3NpdGlvblwiLFwicmVsYXRpdmVcIikpLGQmJihrPWYoZCkpKSxvPVwibGVmdFwiPT09ZS5kaXJlY3Rpb24/XCJzY3JvbGxMZWZ0XCI6byxlLnNjcm9sbEVsZW1lbnQ/KGg9ZS5zY3JvbGxFbGVtZW50LGsucHh8fC9eKD86SFRNTHxCT0RZKSQvLnRlc3QoaFswXS5ub2RlTmFtZSl8fChtPWhbb10oKSkpOmg9YShcImh0bWwsIGJvZHlcIikuZmlyc3RTY3JvbGxhYmxlKGUuZGlyZWN0aW9uKSxlLmJlZm9yZVNjcm9sbC5jYWxsKGgsZSksbD1rLnB4P2s6e3JlbGF0aXZlOlwiXCIscHg6YShlLnNjcm9sbFRhcmdldClbbl0oKSYmYShlLnNjcm9sbFRhcmdldClbbl0oKVtlLmRpcmVjdGlvbl18fDB9LHBbb109bC5yZWxhdGl2ZSsobC5weCttK2Uub2Zmc2V0KSxpPWUuc3BlZWQsXCJhdXRvXCI9PT1pJiYoaj1NYXRoLmFicyhwW29dLWhbb10oKSksaT1qL2UuYXV0b0NvZWZmaWNpZW50KSxxPXtkdXJhdGlvbjppLGVhc2luZzplLmVhc2luZyxjb21wbGV0ZTpmdW5jdGlvbigpe2coZSl9fSxlLnN0ZXAmJihxLnN0ZXA9ZS5zdGVwKSxoLmxlbmd0aD9oLnN0b3AoKS5hbmltYXRlKHAscSk6ZyhlKX0sYS5zbW9vdGhTY3JvbGwudmVyc2lvbj1cIjIuMi4wXCIsYS5zbW9vdGhTY3JvbGwuZmlsdGVyUGF0aD1mdW5jdGlvbihhKXtyZXR1cm4gYT1hfHxcIlwiLGEucmVwbGFjZSgvXlxcLy8sXCJcIikucmVwbGFjZSgvKD86aW5kZXh8ZGVmYXVsdCkuW2EtekEtWl17Myw0fSQvLFwiXCIpLnJlcGxhY2UoL1xcLyQvLFwiXCIpfSxhLmZuLnNtb290aFNjcm9sbC5kZWZhdWx0cz1jfSk7IiwiLy89IHJlcXVpcmVzIGpxdWVyeS9qcXVlcnkuc21vb3RoLXNjcm9sbFxuXG5qUXVlcnkuZnguaW50ZXJ2YWwgPSAxMDtcblxudmFyIGF1ZGlvID0gJChcIiNhdWRpbyBhdWRpb1wiKVswXTtcbnZhciBkaXNwbGF5O1xudmFyIGRhdGEgPSAkKFwiI2RhdGFcIik7XG52YXIgdGltZUxpbmVOb2RlcyA9IFtdO1xuXG5pZiAoZGF0YSAmJiBkYXRhLnZhbCgpKSB7XG4gIGRpc3BsYXkgPSAkKCc8dWwgY2xhc3M9XCJkaXNwbGF5XCI+PC91bD4nKTtcbiAgdGltZSA9ICQoJzxkaXYgaWQ9XCJ0aW1lXCI+MDA6MDAuMDwvZGl2PicpO1xuICB2YXIgY29udGFpbiA9ICQoXCIjbWFpblwiKTsgLyogZm9yIG1hdGVyaWFsaXplIDxtYWluPiAqL1xuICBjb250YWluLmFwcGVuZCh0aW1lKTtcbiAgY29udGFpbi5hcHBlbmQoZGlzcGxheSk7IC8qIGZvciBtYXRlcmlhbGl6ZSA8bWFpbj4gKi9cbiAgLyokKCdib2R5JykuYXBwZW5kKCc8ZGl2IGlkPVwidGltZVwiPjAwOjAwLjA8L2Rpdj4nKTsgLy8gYm9vdHN0cmFwICovXG4gIC8qJCgnYm9keScpLmFwcGVuZChkaXNwbGF5KTsgLy9ib29zdHJhcCAqL1xuXG4gIGRhdGEudmFsKCkuc3BsaXQoL1xcbisvKS5mb3JFYWNoKGZ1bmN0aW9uIChsaW5lKSB7XG4gICAgdmFyIG1hdGNoID0gbGluZS5tYXRjaCgvXlxccyooXFxbKC4rPylcXF0pPyhcXHMqKSguKylcXHMqJC8pO1xuICAgIGlmIChtYXRjaCkge1xuICAgICAgdmFyIHRpbWUgICA9IGh1bWFuVG9UaW1lKG1hdGNoWzJdKSxcbiAgICAgICAgICBpbmRlbnQgPSBtYXRjaFszXSxcbiAgICAgICAgICB0ZXh0ICAgPSBtYXRjaFs0XSxcbiAgICAgICAgICBub2RlO1xuICAgICAgaWYgKHRleHQgPT09IFwiXCIpIHtcbiAgICAgICAgY29uc29sZS5sb2coXCJlbXB0eVwiKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfSBlbHNlIGlmICh0ZXh0WzBdID09IFwiI1wiKSB7XG4gICAgICAgIHZhciBtYXRjaCA9IHRleHQubWF0Y2goL14oIyspXFxzKiguKykkLyksXG4gICAgICAgICAgICBkZXB0aCA9IG1hdGNoWzFdLmxlbmd0aCxcbiAgICAgICAgICAgIHRleHQgID0gbWF0Y2hbMl07XG4gICAgICAgIGNvbnNvbGUubG9nKG1hdGNoKTtcbiAgICAgICAgbm9kZSA9ICQoJzxsaT48aCcgKyBkZXB0aCArJz4nICsgdGV4dCArICc8L2gnICsgZGVwdGggKyAnPjwvbGk+Jyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB2YXIgcGNsYXNzO1xuICAgICAgICBpZiAoaW5kZW50Lmxlbmd0aCA+IDEpIHtcbiAgICAgICAgICBwY2xhc3MgPSBcImVuIGZsb3ctdGV4dFwiO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHBjbGFzcyA9IFwicGFsaSBmbG93LXRleHRcIjtcbiAgICAgICAgfVxuICAgICAgICB0ZXh0ID0gdm9jYWxpemUodGV4dCk7XG4gICAgICAgIHRleHQgPSB1bmRlcmxpbmUodGV4dCk7XG4gICAgICAgIG5vZGUgPSAkKCc8bGk+PHAgY2xhc3M9XCInICsgcGNsYXNzICsgJ1wiPicgKyB0ZXh0ICsgJzwvcD48L2xpPicpO1xuICAgICAgfVxuICAgICAgaWYgKHRpbWUgIT09IG51bGwpIHtcbiAgICAgICAgdmFyIHRpbWVOb2RlID0gJCgnPGRpdiBjbGFzcz1cInRpbWVcIiBkYXRhLXRpbWU9XCInICsgdGltZSArICdcIj4nICsgdGltZVRvSHVtYW4odGltZSkgKyAnPC9kaXY+Jyk7XG4gICAgICAgIG5vZGUub24oXCJjbGlja1wiLCBmdW5jdGlvbihldmVudCkge1xuICAgICAgICAgIC8vIEJpbmRpbmcgZXZlbnRcbiAgICAgICAgICAvL2F1ZGlvLm9uY2FucGxheSA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAgIC8vICBjb25zb2xlLmxvZyhcIkNhbiBzdGFydCBwbGF5aW5nIGF1ZGlvXCIpO1xuICAgICAgICAgIC8vfVxuXG5cbiAgICAgICAgICBhdWRpby5jdXJyZW50VGltZSA9IHRpbWU7XG4gICAgICAgICAgYXVkaW8ucGxheSgpO1xuICAgICAgICB9KTtcbiAgICAgICAgbm9kZS5wcmVwZW5kKHRpbWVOb2RlKTtcbiAgICAgICAgdGltZUxpbmVOb2Rlcy5wdXNoKHsgdGltZTogdGltZSwgbm9kZTogbm9kZSB9KTtcbiAgICAgIH1cbiAgICAgIGRpc3BsYXkuYXBwZW5kKG5vZGUpO1xuICAgIH1cbiAgfSk7XG59XG5cbmZ1bmN0aW9uIHRpbWVUb0h1bWFuKHRpbWUsIGRpZ2l0cykge1xuICByZXR1cm4gXCJcIiArIHBhcnNlSW50KHRpbWUgLyA2MCkgKyBcIjpcIiArIChcIjBcIiArICh0aW1lICUgNjApLnRvRml4ZWQoMSkpLnNsaWNlKC00KTtcbn1cblxuZnVuY3Rpb24gaHVtYW5Ub1RpbWUodGltZSkge1xuICBpZiAodHlwZW9mKHRpbWUpID09IFwic3RyaW5nXCIpIHtcbiAgICB2YXIgbWF0Y2ggPSB0aW1lLm1hdGNoKC9eXFxzKihcXGQrKVxccyo6XFxzKihbXFxkXFwuXSspXFxzKiQvKTtcbiAgICBpZiAobWF0Y2gpIHtcbiAgICAgIHJldHVybiAocGFyc2VJbnQobWF0Y2hbMV0pICogNjApICsgcGFyc2VGbG9hdChtYXRjaFsyXSk7XG4gICAgfVxuICB9XG4gIHJldHVybiBwYXJzZUZsb2F0KHRpbWUpIHx8IG51bGw7XG59XG5cbmZ1bmN0aW9uIHZvY2FsaXplKHRleHQpIHtcbiAgcmV0dXJuIHRleHQucmVwbGFjZSgvKChbXFxeYF0rKSguKSkvZywgZnVuY3Rpb24odDEsIHQyLCBtLCBjKSB7XG4gICAgY29uc29sZS5sb2coW20sIGNdKTtcbiAgICB2YXIgZGlyO1xuICAgIGlmIChtWzBdID09IFwiXlwiKSB7XG4gICAgICBkaXIgPSBcInVcIjtcbiAgICB9IGVsc2Uge1xuICAgICAgZGlyID0gXCJkXCI7XG4gICAgfVxuICAgIGlmIChtLmxlbmd0aCA+IDEpIHtcbiAgICAgIGRpciA9IGRpciArIGRpcjtcbiAgICB9XG4gICAgcmV0dXJuICc8c3BhbiBjbGFzcz1cInRcIj4nICsgYyArICc8c3Bhbj48c3BhbiBjbGFzcz1cIicgKyBkaXIgKyAnXCI+PC9zcGFuPjwvc3Bhbj48L3NwYW4+JztcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIHVuZGVybGluZSh0ZXh0KSB7XG4gIHJldHVybiB0ZXh0LnJlcGxhY2UoL18oLis/KV8vZywgZnVuY3Rpb24odDEsIG0pIHtcbiAgICByZXR1cm4gJzxzcGFuIGNsYXNzPVwidW5cIj4nICsgbSArICc8L3NwYW4+JztcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIGZpbmRMaW5lQnlUaW1lKHRpbWUpIHtcbiAgdmFyIG1pbiA9IDAsIG1pZCA9IDAsIG1heCA9IHRpbWVMaW5lTm9kZXMubGVuZ3RoO1xuICBpZiAobWF4ID09PSAwKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cbiAgd2hpbGUgKG1pbiA8IG1heCkge1xuICAgIG1pZCA9IHBhcnNlSW50KChtaW4gKyBtYXgpIC8gMik7XG4gICAgbWlkVGltZSA9IHRpbWVMaW5lTm9kZXNbbWlkXS50aW1lO1xuICAgIGlmICh0aW1lIDwgbWlkVGltZSkge1xuICAgICAgaWYgKG1heCA9PSBtaWQpIHtcbiAgICAgICAgbWF4ID0gbWlkIC0gMTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG1heCA9IG1pZDtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKG1pbiA9PSBtaWQpIHtcbiAgICAgICAgbWluID0gbWlkICsgMTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG1pbiA9IG1pZDtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgcmV0dXJuIHRpbWVMaW5lTm9kZXNbbWlkXS5ub2RlO1xufVxuXG5mdW5jdGlvbiB0cmFja1RpbWUodHJhY2spIHtcbiAgdmFyIGxpbmVOb2RlID0gZmluZExpbmVCeVRpbWUodHJhY2suY3VycmVudFRpbWUpO1xuICBpZiAobGluZU5vZGUpIHtcbiAgICBpZiAoIWxpbmVOb2RlLmhhc0NsYXNzKFwiaGlnaGxpZ2h0XCIpKSB7XG4gICAgICAkKCdsaS5oaWdobGlnaHQnKS5yZW1vdmVDbGFzcyhcImhpZ2hsaWdodFwiKTtcbiAgICAgIGxpbmVOb2RlLmFkZENsYXNzKFwiaGlnaGxpZ2h0XCIpO1xuICAgICAgY29uc29sZS5sb2coKTtcbiAgICAgIGlmICghZWxlbWVudEluU2NyZWVuKGxpbmVOb2RlLCAxNTApKSB7XG4gICAgICAgICQuc21vb3RoU2Nyb2xsKHtcbiAgICAgICAgICBzY3JvbGxUYXJnZXQ6IGxpbmVOb2RlLFxuICAgICAgICAgIG9mZnNldDogLTEwMCxcbiAgICAgICAgICBlYXNpbmc6ICdzd2luZycsXG4gICAgICAgICAgc3BlZWQ6IDEwMDBcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuICB9XG4gICQoXCIjdGltZVwiKS50ZXh0KHRpbWVUb0h1bWFuKHRyYWNrLmN1cnJlbnRUaW1lKSk7XG59XG5cbmZ1bmN0aW9uIGVsZW1lbnRJblNjcmVlbihlbCwgdG9sZXJhbmNlKSB7XG4gIHZhciBlbCAgICAgID0gJChlbCksXG4gICAgICB3aW4gICAgID0gJCh3aW5kb3cpLFxuICAgICAgdG9wICAgICA9IGVsLm9mZnNldCgpLnRvcCxcbiAgICAgIGhlaWdodCAgPSBlbC5oZWlnaHQoKSxcbiAgICAgIHdUb3AgICAgPSB3aW4uc2Nyb2xsVG9wKCksXG4gICAgICB3SGVpZ2h0ID0gd2luLmhlaWdodCgpO1xuICByZXR1cm4gKCh3VG9wIDwgdG9wIC0gdG9sZXJhbmNlKSAmJlxuICAgICAgICAgICh3VG9wICsgd0hlaWdodCA+IHRvcCArIGhlaWdodCArIHRvbGVyYW5jZSkpO1xufVxuIl19