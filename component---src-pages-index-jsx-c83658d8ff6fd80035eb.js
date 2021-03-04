(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{"8+s/":function(e,t,n){"use strict";var r,a=n("q1tI"),i=(r=a)&&"object"==typeof r&&"default"in r?r.default:r;function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var l=!("undefined"==typeof window||!window.document||!window.document.createElement);e.exports=function(e,t,n){if("function"!=typeof e)throw new Error("Expected reducePropsToState to be a function.");if("function"!=typeof t)throw new Error("Expected handleStateChangeOnClient to be a function.");if(void 0!==n&&"function"!=typeof n)throw new Error("Expected mapStateOnServer to either be undefined or a function.");return function(r){if("function"!=typeof r)throw new Error("Expected WrappedComponent to be a React component.");var c,u=[];function s(){c=e(u.map((function(e){return e.props}))),p.canUseDOM?t(c):n&&(c=n(c))}var p=function(e){var t,n;function a(){return e.apply(this,arguments)||this}n=e,(t=a).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n,a.peek=function(){return c},a.rewind=function(){if(a.canUseDOM)throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");var e=c;return c=void 0,u=[],e};var o=a.prototype;return o.UNSAFE_componentWillMount=function(){u.push(this),s()},o.componentDidUpdate=function(){s()},o.componentWillUnmount=function(){var e=u.indexOf(this);u.splice(e,1),s()},o.render=function(){return i.createElement(r,this.props)},a}(a.PureComponent);return o(p,"displayName","SideEffect("+function(e){return e.displayName||e.name||"Component"}(r)+")"),o(p,"canUseDOM",l),p}}},Dtc0:function(e,t,n){"use strict";n.r(t);var r=n("q1tI"),a=n.n(r),i=n("qhky"),o=n("kYWE"),l=n.n(o);t.default=function(){return a.a.createElement("div",{className:"container",style:{fontFamily:"Helvetica, Arial, sans-serif",maxWidth:720,margin:"1rem auto",lineHeight:1.4}},a.a.createElement(i.a,null,a.a.createElement("meta",{charSet:"utf-8"}),a.a.createElement("title",null,"Phat Tran's CV"),a.a.createElement("meta",{name:"author",content:"Phat Tran"}),a.a.createElement("meta",{name:"description",content:"Phat Tran's curriculum vitae"}),a.a.createElement("link",{rel:"icon",type:"image/png",href:l.a,sizes:"16x16"})),a.a.createElement("main",{style:{display:"flex",flexDirection:"column"}},a.a.createElement("div",{className:"name"},a.a.createElement("h1",null,"Tran Minh Phat")),a.a.createElement("div",{className:"contact-info",style:{display:"flex",flexDirection:"column"}},a.a.createElement("div",{style:{display:"flex",justifyContent:"space-between"}},a.a.createElement("p",null,a.a.createElement("b",null,"location: "),a.a.createElement("span",null,"Ho Chi Minh City, Viet Nam")),a.a.createElement("p",null,a.a.createElement("b",null,"phone number: "),a.a.createElement("span",null,"(+84) 909771795")),a.a.createElement("p",null,a.a.createElement("b",null,"email: "),a.a.createElement("span",null,"phattm204@gmail.com"))),a.a.createElement("div",{style:{display:"flex",justifyContent:"space-between"}},a.a.createElement("p",null,a.a.createElement("b",null,"github: "),a.a.createElement("span",null,a.a.createElement("a",{href:"https://github.com/tranminhphat",target:"_blank",rel:"noreferrer"},"https://github.com/tranminhphat"))),a.a.createElement("p",null,a.a.createElement("b",null,"linkedin: "),a.a.createElement("span",null,a.a.createElement("a",{href:"https://www.linkedin.com/in/tranminhphat/",target:"_blank",rel:"noreferrer"},"https://www.linkedin.com/in/tranminhphat/"," "))))),a.a.createElement("div",{className:"education"},a.a.createElement("div",null,a.a.createElement("h2",null,"education"),a.a.createElement("hr",null),a.a.createElement("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:"1rem"}},a.a.createElement("h3",null,"Bachelor of Software Engineering at UIT"),a.a.createElement("i",null,"Sep 2017 - Jul 2021"))),a.a.createElement("div",null,a.a.createElement("ul",null,a.a.createElement("li",null,"my major: Information System"),a.a.createElement("li",null,"my gpa: 7.65 / 10"),a.a.createElement("li",null,"my degree classification: Good"),a.a.createElement("li",null,"my thesis title: Building a web application help connecting the host of experience activities with the guest")))),a.a.createElement("div",{className:"work-experience"},a.a.createElement("div",null,a.a.createElement("h2",null,"work experience"),a.a.createElement("hr",null),a.a.createElement("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:"2rem"}},a.a.createElement("h3",null,"Front-end Intern Developer, BigIn"),a.a.createElement("i",null,"Sep 2020 - Dec 2020"))),a.a.createElement("div",null,a.a.createElement("p",null,"As an intern developer, i was responsible for working with BA team, Designer and Back-end team to implementing web-app UI for company's project using Vue.js"),a.a.createElement("p",null,"I also did a little bit mobile development by implementing mobile-app UI for company's project using React Native and NativeScript"))),a.a.createElement("div",{className:"personal-project"},a.a.createElement("div",null,a.a.createElement("h2",null,"personal project"),a.a.createElement("hr",null),a.a.createElement("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:"1rem"}},a.a.createElement("h3",null,"Phazel - An algorithm visualizer"),a.a.createElement("i",null,"Aug 2020 - Sep 2020")),a.a.createElement("div",null,a.a.createElement("p",null,"Phazel is an web application made with React that allows you to visualize sorting algorithms with a friendly UI. The project idea is inspired by ",a.a.createElement("b",null,"Clément Mihailescu"),", who is a Youtuber, after he uploaded a video on how to visualize Merge Sort algorithm."),a.a.createElement("p",null,"In this app, the user can:",a.a.createElement("ul",null,a.a.createElement("li",null,"Generate an array to sort manually or automatically"),a.a.createElement("li",null,"Change the speed of the algorithm"),a.a.createElement("li",null,"Change the length of the array"))),a.a.createElement("p",null,"The currently implemented algorithms: Bubble Sort, Selection Sort, Insertion Sort, Merge Sort, Quick Sort, Heap Sort."),a.a.createElement("p",null,"Demo:"," ",a.a.createElement("a",{href:"https://phazel.firebaseapp.com/sortalgo",target:"_blank",rel:"noreferrer"},"https://phazel.firebaseapp.com/sortalgo"))),a.a.createElement("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:"1rem"}},a.a.createElement("h3",null,"Covid-19 Statistics"),a.a.createElement("i",null,"Aug 2020 - Sep 2020")),a.a.createElement("div",null,a.a.createElement("p",null,"An web application built by React and Ant Design that shows the affect of Covid-19 with statistical information by the data from the Ministry Of Health around the world."),a.a.createElement("p",null,"The UIs that implemented to show in the table form express information about the number of total cases, new cases or new deaths, etc. The website also has an interactive hover-map which will show the statictical information about the specific country that user hover mouse on."),a.a.createElement("p",null,"User can find the statistical information by country, especially by province of Viet Nam."),a.a.createElement("p",null,"Demo:"," ",a.a.createElement("a",{href:"https://tranminhphat.github.io/covid19-stats/",target:"_blank",rel:"noreferrer"},"https://tranminhphat.github.io/covid19-stats/"))),a.a.createElement("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:"1rem"}},a.a.createElement("h3",null,"Bookstore"),a.a.createElement("i",null,"Apr 2020 - Jul 2020")),a.a.createElement("div",null,a.a.createElement("p",null,"Bookstore is a project for Mobile Development class at UIT. The app has been built by React Native for book business field, it has a friendly theme and comes with some administrator and client features."),a.a.createElement("p",null,"Administrator: be able to manage accounts, books, orders and statistical."),a.a.createElement("p",null,"Client: easy to register, login and come along with some features like search, order, choose favorite, rating, comment. The client is also able to tracking or cancle orders, manage their own personal information."),a.a.createElement("p",null,"Demo:"," ",a.a.createElement("span",null,a.a.createElement("a",{href:"https://drive.google.com/drive/folders/13oKOes_6y61P3mtns4zfk_CzuZu8ZZGa?usp=sharing",target:"_blank",rel:"noreferrer"},"here")))),a.a.createElement("div",{className:"personal-project"},a.a.createElement("div",null,a.a.createElement("h2",null,"skills"),a.a.createElement("hr",null),a.a.createElement("div",{style:{marginBottom:"1rem"}},a.a.createElement("p",null,"programming languages: JavaScript, TypeScript"),a.a.createElement("p",null,"tools & technologies: HTML5, CSS3, React.js, Redux, Node.js, Express.js, MongoDB"))))))))}},ZhWT:function(e,t){var n="undefined"!=typeof Element,r="function"==typeof Map,a="function"==typeof Set,i="function"==typeof ArrayBuffer&&!!ArrayBuffer.isView;e.exports=function(e,t){try{return function e(t,o){if(t===o)return!0;if(t&&o&&"object"==typeof t&&"object"==typeof o){if(t.constructor!==o.constructor)return!1;var l,c,u,s;if(Array.isArray(t)){if((l=t.length)!=o.length)return!1;for(c=l;0!=c--;)if(!e(t[c],o[c]))return!1;return!0}if(r&&t instanceof Map&&o instanceof Map){if(t.size!==o.size)return!1;for(s=t.entries();!(c=s.next()).done;)if(!o.has(c.value[0]))return!1;for(s=t.entries();!(c=s.next()).done;)if(!e(c.value[1],o.get(c.value[0])))return!1;return!0}if(a&&t instanceof Set&&o instanceof Set){if(t.size!==o.size)return!1;for(s=t.entries();!(c=s.next()).done;)if(!o.has(c.value[0]))return!1;return!0}if(i&&ArrayBuffer.isView(t)&&ArrayBuffer.isView(o)){if((l=t.length)!=o.length)return!1;for(c=l;0!=c--;)if(t[c]!==o[c])return!1;return!0}if(t.constructor===RegExp)return t.source===o.source&&t.flags===o.flags;if(t.valueOf!==Object.prototype.valueOf)return t.valueOf()===o.valueOf();if(t.toString!==Object.prototype.toString)return t.toString()===o.toString();if((l=(u=Object.keys(t)).length)!==Object.keys(o).length)return!1;for(c=l;0!=c--;)if(!Object.prototype.hasOwnProperty.call(o,u[c]))return!1;if(n&&t instanceof Element)return!1;for(c=l;0!=c--;)if(("_owner"!==u[c]&&"__v"!==u[c]&&"__o"!==u[c]||!t.$$typeof)&&!e(t[u[c]],o[u[c]]))return!1;return!0}return t!=t&&o!=o}(e,t)}catch(o){if((o.message||"").match(/stack|recursion/i))return console.warn("react-fast-compare cannot handle circular refs"),!1;throw o}}},kYWE:function(e,t,n){e.exports=n.p+"static/avatar-ccbb97cc69dfe82c13845ebcbd2577e4.png"},qhky:function(e,t,n){"use strict";(function(e){n.d(t,"a",(function(){return de}));n("E9XD");var r,a,i,o,l=n("17x9"),c=n.n(l),u=n("8+s/"),s=n.n(u),p=n("ZhWT"),f=n.n(p),m=n("q1tI"),h=n.n(m),d=n("YVoz"),y=n.n(d),b="bodyAttributes",g="htmlAttributes",E="titleAttributes",v={BASE:"base",BODY:"body",HEAD:"head",HTML:"html",LINK:"link",META:"meta",NOSCRIPT:"noscript",SCRIPT:"script",STYLE:"style",TITLE:"title"},w=(Object.keys(v).map((function(e){return v[e]})),"charset"),T="cssText",C="href",A="http-equiv",S="innerHTML",O="itemprop",j="name",k="property",x="rel",I="src",P="target",L={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"},N="defaultTitle",M="defer",B="encodeSpecialCharacters",D="onChangeClientState",R="titleTemplate",_=Object.keys(L).reduce((function(e,t){return e[L[t]]=t,e}),{}),H=[v.NOSCRIPT,v.SCRIPT,v.STYLE],q="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},z=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},U=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),Y=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},F=function(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n},V=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t},W=function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return!1===t?String(e):String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")},K=function(e){var t=Q(e,v.TITLE),n=Q(e,R);if(n&&t)return n.replace(/%s/g,(function(){return Array.isArray(t)?t.join(""):t}));var r=Q(e,N);return t||r||void 0},J=function(e){return Q(e,D)||function(){}},Z=function(e,t){return t.filter((function(t){return void 0!==t[e]})).map((function(t){return t[e]})).reduce((function(e,t){return Y({},e,t)}),{})},G=function(e,t){return t.filter((function(e){return void 0!==e[v.BASE]})).map((function(e){return e[v.BASE]})).reverse().reduce((function(t,n){if(!t.length)for(var r=Object.keys(n),a=0;a<r.length;a++){var i=r[a].toLowerCase();if(-1!==e.indexOf(i)&&n[i])return t.concat(n)}return t}),[])},$=function(e,t,n){var r={};return n.filter((function(t){return!!Array.isArray(t[e])||(void 0!==t[e]&&re("Helmet: "+e+' should be of type "Array". Instead found type "'+q(t[e])+'"'),!1)})).map((function(t){return t[e]})).reverse().reduce((function(e,n){var a={};n.filter((function(e){for(var n=void 0,i=Object.keys(e),o=0;o<i.length;o++){var l=i[o],c=l.toLowerCase();-1===t.indexOf(c)||n===x&&"canonical"===e[n].toLowerCase()||c===x&&"stylesheet"===e[c].toLowerCase()||(n=c),-1===t.indexOf(l)||l!==S&&l!==T&&l!==O||(n=l)}if(!n||!e[n])return!1;var u=e[n].toLowerCase();return r[n]||(r[n]={}),a[n]||(a[n]={}),!r[n][u]&&(a[n][u]=!0,!0)})).reverse().forEach((function(t){return e.push(t)}));for(var i=Object.keys(a),o=0;o<i.length;o++){var l=i[o],c=y()({},r[l],a[l]);r[l]=c}return e}),[]).reverse()},Q=function(e,t){for(var n=e.length-1;n>=0;n--){var r=e[n];if(r.hasOwnProperty(t))return r[t]}return null},X=(r=Date.now(),function(e){var t=Date.now();t-r>16?(r=t,e(t)):setTimeout((function(){X(e)}),0)}),ee=function(e){return clearTimeout(e)},te="undefined"!=typeof window?window.requestAnimationFrame&&window.requestAnimationFrame.bind(window)||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||X:e.requestAnimationFrame||X,ne="undefined"!=typeof window?window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||ee:e.cancelAnimationFrame||ee,re=function(e){return console&&"function"==typeof console.warn&&console.warn(e)},ae=null,ie=function(e,t){var n=e.baseTag,r=e.bodyAttributes,a=e.htmlAttributes,i=e.linkTags,o=e.metaTags,l=e.noscriptTags,c=e.onChangeClientState,u=e.scriptTags,s=e.styleTags,p=e.title,f=e.titleAttributes;ce(v.BODY,r),ce(v.HTML,a),le(p,f);var m={baseTag:ue(v.BASE,n),linkTags:ue(v.LINK,i),metaTags:ue(v.META,o),noscriptTags:ue(v.NOSCRIPT,l),scriptTags:ue(v.SCRIPT,u),styleTags:ue(v.STYLE,s)},h={},d={};Object.keys(m).forEach((function(e){var t=m[e],n=t.newTags,r=t.oldTags;n.length&&(h[e]=n),r.length&&(d[e]=m[e].oldTags)})),t&&t(),c(e,h,d)},oe=function(e){return Array.isArray(e)?e.join(""):e},le=function(e,t){void 0!==e&&document.title!==e&&(document.title=oe(e)),ce(v.TITLE,t)},ce=function(e,t){var n=document.getElementsByTagName(e)[0];if(n){for(var r=n.getAttribute("data-react-helmet"),a=r?r.split(","):[],i=[].concat(a),o=Object.keys(t),l=0;l<o.length;l++){var c=o[l],u=t[c]||"";n.getAttribute(c)!==u&&n.setAttribute(c,u),-1===a.indexOf(c)&&a.push(c);var s=i.indexOf(c);-1!==s&&i.splice(s,1)}for(var p=i.length-1;p>=0;p--)n.removeAttribute(i[p]);a.length===i.length?n.removeAttribute("data-react-helmet"):n.getAttribute("data-react-helmet")!==o.join(",")&&n.setAttribute("data-react-helmet",o.join(","))}},ue=function(e,t){var n=document.head||document.querySelector(v.HEAD),r=n.querySelectorAll(e+"[data-react-helmet]"),a=Array.prototype.slice.call(r),i=[],o=void 0;return t&&t.length&&t.forEach((function(t){var n=document.createElement(e);for(var r in t)if(t.hasOwnProperty(r))if(r===S)n.innerHTML=t.innerHTML;else if(r===T)n.styleSheet?n.styleSheet.cssText=t.cssText:n.appendChild(document.createTextNode(t.cssText));else{var l=void 0===t[r]?"":t[r];n.setAttribute(r,l)}n.setAttribute("data-react-helmet","true"),a.some((function(e,t){return o=t,n.isEqualNode(e)}))?a.splice(o,1):i.push(n)})),a.forEach((function(e){return e.parentNode.removeChild(e)})),i.forEach((function(e){return n.appendChild(e)})),{oldTags:a,newTags:i}},se=function(e){return Object.keys(e).reduce((function(t,n){var r=void 0!==e[n]?n+'="'+e[n]+'"':""+n;return t?t+" "+r:r}),"")},pe=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,n){return t[L[n]||n]=e[n],t}),t)},fe=function(e,t,n){switch(e){case v.TITLE:return{toComponent:function(){return e=t.title,n=t.titleAttributes,(r={key:e})["data-react-helmet"]=!0,a=pe(n,r),[h.a.createElement(v.TITLE,a,e)];var e,n,r,a},toString:function(){return function(e,t,n,r){var a=se(n),i=oe(t);return a?"<"+e+' data-react-helmet="true" '+a+">"+W(i,r)+"</"+e+">":"<"+e+' data-react-helmet="true">'+W(i,r)+"</"+e+">"}(e,t.title,t.titleAttributes,n)}};case b:case g:return{toComponent:function(){return pe(t)},toString:function(){return se(t)}};default:return{toComponent:function(){return function(e,t){return t.map((function(t,n){var r,a=((r={key:n})["data-react-helmet"]=!0,r);return Object.keys(t).forEach((function(e){var n=L[e]||e;if(n===S||n===T){var r=t.innerHTML||t.cssText;a.dangerouslySetInnerHTML={__html:r}}else a[n]=t[e]})),h.a.createElement(e,a)}))}(e,t)},toString:function(){return function(e,t,n){return t.reduce((function(t,r){var a=Object.keys(r).filter((function(e){return!(e===S||e===T)})).reduce((function(e,t){var a=void 0===r[t]?t:t+'="'+W(r[t],n)+'"';return e?e+" "+a:a}),""),i=r.innerHTML||r.cssText||"",o=-1===H.indexOf(e);return t+"<"+e+' data-react-helmet="true" '+a+(o?"/>":">"+i+"</"+e+">")}),"")}(e,t,n)}}}},me=function(e){var t=e.baseTag,n=e.bodyAttributes,r=e.encode,a=e.htmlAttributes,i=e.linkTags,o=e.metaTags,l=e.noscriptTags,c=e.scriptTags,u=e.styleTags,s=e.title,p=void 0===s?"":s,f=e.titleAttributes;return{base:fe(v.BASE,t,r),bodyAttributes:fe(b,n,r),htmlAttributes:fe(g,a,r),link:fe(v.LINK,i,r),meta:fe(v.META,o,r),noscript:fe(v.NOSCRIPT,l,r),script:fe(v.SCRIPT,c,r),style:fe(v.STYLE,u,r),title:fe(v.TITLE,{title:p,titleAttributes:f},r)}},he=s()((function(e){return{baseTag:G([C,P],e),bodyAttributes:Z(b,e),defer:Q(e,M),encode:Q(e,B),htmlAttributes:Z(g,e),linkTags:$(v.LINK,[x,C],e),metaTags:$(v.META,[j,w,A,k,O],e),noscriptTags:$(v.NOSCRIPT,[S],e),onChangeClientState:J(e),scriptTags:$(v.SCRIPT,[I,S],e),styleTags:$(v.STYLE,[T],e),title:K(e),titleAttributes:Z(E,e)}}),(function(e){ae&&ne(ae),e.defer?ae=te((function(){ie(e,(function(){ae=null}))})):(ie(e),ae=null)}),me)((function(){return null})),de=(a=he,o=i=function(e){function t(){return z(this,t),V(this,e.apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.shouldComponentUpdate=function(e){return!f()(this.props,e)},t.prototype.mapNestedChildrenToProps=function(e,t){if(!t)return null;switch(e.type){case v.SCRIPT:case v.NOSCRIPT:return{innerHTML:t};case v.STYLE:return{cssText:t}}throw new Error("<"+e.type+" /> elements are self-closing and can not contain children. Refer to our API for more information.")},t.prototype.flattenArrayTypeChildren=function(e){var t,n=e.child,r=e.arrayTypeChildren,a=e.newChildProps,i=e.nestedChildren;return Y({},r,((t={})[n.type]=[].concat(r[n.type]||[],[Y({},a,this.mapNestedChildrenToProps(n,i))]),t))},t.prototype.mapObjectTypeChildren=function(e){var t,n,r=e.child,a=e.newProps,i=e.newChildProps,o=e.nestedChildren;switch(r.type){case v.TITLE:return Y({},a,((t={})[r.type]=o,t.titleAttributes=Y({},i),t));case v.BODY:return Y({},a,{bodyAttributes:Y({},i)});case v.HTML:return Y({},a,{htmlAttributes:Y({},i)})}return Y({},a,((n={})[r.type]=Y({},i),n))},t.prototype.mapArrayTypeChildrenToProps=function(e,t){var n=Y({},t);return Object.keys(e).forEach((function(t){var r;n=Y({},n,((r={})[t]=e[t],r))})),n},t.prototype.warnOnInvalidChildren=function(e,t){return!0},t.prototype.mapChildrenToProps=function(e,t){var n=this,r={};return h.a.Children.forEach(e,(function(e){if(e&&e.props){var a=e.props,i=a.children,o=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,n){return t[_[n]||n]=e[n],t}),t)}(F(a,["children"]));switch(n.warnOnInvalidChildren(e,i),e.type){case v.LINK:case v.META:case v.NOSCRIPT:case v.SCRIPT:case v.STYLE:r=n.flattenArrayTypeChildren({child:e,arrayTypeChildren:r,newChildProps:o,nestedChildren:i});break;default:t=n.mapObjectTypeChildren({child:e,newProps:t,newChildProps:o,nestedChildren:i})}}})),t=this.mapArrayTypeChildrenToProps(r,t)},t.prototype.render=function(){var e=this.props,t=e.children,n=F(e,["children"]),r=Y({},n);return t&&(r=this.mapChildrenToProps(t,r)),h.a.createElement(a,r)},U(t,null,[{key:"canUseDOM",set:function(e){a.canUseDOM=e}}]),t}(h.a.Component),i.propTypes={base:c.a.object,bodyAttributes:c.a.object,children:c.a.oneOfType([c.a.arrayOf(c.a.node),c.a.node]),defaultTitle:c.a.string,defer:c.a.bool,encodeSpecialCharacters:c.a.bool,htmlAttributes:c.a.object,link:c.a.arrayOf(c.a.object),meta:c.a.arrayOf(c.a.object),noscript:c.a.arrayOf(c.a.object),onChangeClientState:c.a.func,script:c.a.arrayOf(c.a.object),style:c.a.arrayOf(c.a.object),title:c.a.string,titleAttributes:c.a.object,titleTemplate:c.a.string},i.defaultProps={defer:!0,encodeSpecialCharacters:!0},i.peek=a.peek,i.rewind=function(){var e=a.rewind();return e||(e=me({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}})),e},o);de.renderStatic=de.rewind}).call(this,n("yLpj"))}}]);
//# sourceMappingURL=component---src-pages-index-jsx-c83658d8ff6fd80035eb.js.map