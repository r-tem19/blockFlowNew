(window["webpackJsonpretejs-react-render"]=window["webpackJsonpretejs-react-render"]||[]).push([[0],{23:function(t,e,r){t.exports=r(37)},36:function(t,e,r){},37:function(t,e,r){"use strict";r.r(e);var n=r(1),o=r.n(n),a=r(19),i=r.n(a),c=r(9),u=r(3),l=r(11),s=r(20),f=r(21),h=r(4),p=r(5),v=r(8),d=r(7),y=function(t){Object(v.a)(r,t);var e=Object(d.a)(r);function r(t,n,o){var a,i=arguments.length>3&&void 0!==arguments[3]&&arguments[3];Object(h.a)(this,r),(a=e.call(this,n)).emitter=t,a.key=n,a.component=r.component;var c=o.data[n]||0;return o.data[n]=c,a.props={readonly:i,value:c,onChange:function(t){a.setValue(t),a.emitter.trigger("process")}},a}return Object(p.a)(r,[{key:"setValue",value:function(t){this.props.value=t,this.putData(this.key,t),this.update()}}]),r}(u.c.Control);y.component=function(t){var e=t.value,r=t.onChange;return o.a.createElement(o.a.Fragment,null,o.a.createElement("input",{type:"number",value:e,ref:function(t){t&&t.addEventListener("pointerdown",(function(t){return t.stopPropagation()}))},onChange:function(t){return r(+t.target.value)}}))};new u.c.Socket("Action"),new u.c.Socket("Data");var m=new u.c.Socket("Number value"),g=new u.c.Socket("String"),w=function(t){Object(v.a)(r,t);var e=Object(d.a)(r);function r(){return Object(h.a)(this,r),e.apply(this,arguments)}return Object(p.a)(r,[{key:"render",value:function(){var t=this.props,e=t.editor,r=t.node,n=t.bindSocket,a=t.bindControl,i=this.state,c=i.outputs,u=i.controls,s=i.inputs,f=i.selected;return o.a.createElement("div",{className:"node ".concat(f)},o.a.createElement("div",{className:"node__title"},r.name),c.map((function(t){return o.a.createElement("div",{className:"output",key:t.key},o.a.createElement("div",{className:"output__title-wrapper"},o.a.createElement("div",{className:"output__title"},"Output")),o.a.createElement("div",{className:"output-title"},t.name),o.a.createElement(l.c,{type:"output",socket:t.socket,io:t,innerRef:n}))})),u.map((function(t){return o.a.createElement(l.a,{className:"control",key:t.key,control:t,innerRef:a})})),s.map((function(t){return o.a.createElement("div",{className:"input",key:t.key},o.a.createElement("div",{className:"input__title-wrapper"},o.a.createElement("div",{className:"input__title"},"Input")),o.a.createElement(l.c,{type:"input",socket:t.socket,io:t,innerRef:n}),!t.showControl()&&o.a.createElement("div",{className:"input-title"},t.name),t.showControl()&&o.a.createElement(l.a,{className:"input-control",control:t.control,innerRef:a}))})),o.a.createElement("div",{className:"node__remove"},o.a.createElement("button",{className:"icon-btn icon-btn_remove",onClick:function(t){t.preventDefault(),r.outputs.forEach((function(t){t.connections.map((function(t){return e.removeConnection(t)}))})),e.removeNode(r)}})))}}]),r}(l.b),b=function(t){Object(v.a)(r,t);var e=Object(d.a)(r);function r(){var t;return Object(h.a)(this,r),(t=e.call(this,"Zapier")).data.component=w,t}return Object(p.a)(r,[{key:"builder",value:function(t){var e=new u.c.Output("num","Number",m),r=new y(this.editor,"num",t);return t.addControl(r).addOutput(e)}},{key:"worker",value:function(t,e,r){r.num=t.data.num}}]),r}(u.c.Component),E=function(t){Object(v.a)(r,t);var e=Object(d.a)(r);function r(){var t;return Object(h.a)(this,r),(t=e.call(this,"Webhook")).data.component=w,t}return Object(p.a)(r,[{key:"builder",value:function(t){var e=new u.c.Input("num1","Number",m),r=new u.c.Input("num2","Number2",m),n=new u.c.Output("num","Number",m);return e.addControl(new y(this.editor,"num1",t)),r.addControl(new y(this.editor,"num2",t)),t.addInput(e).addInput(r).addControl(new y(this.editor,"preview",t,!0)).addOutput(n)}},{key:"worker",value:function(t,e,r){var n=(e.num1.length?e.num1[0]:t.data.num1)+(e.num2.length?e.num2[0]:t.data.num2);this.editor.nodes.find((function(e){return e.id===t.id})).controls.get("preview").setValue(n),r.num=n}}]),r}(u.c.Component),x=function(t){Object(v.a)(r,t);var e=Object(d.a)(r);function r(t,n,o){var a,i=arguments.length>3&&void 0!==arguments[3]&&arguments[3];Object(h.a)(this,r),(a=e.call(this,n)).emitter=t,a.key=n,a.component=r.component;var c=o.data[n]||"";return o.data[n]=c,a.props={readonly:i,value:c,onChange:function(t){a.setValue(t),a.emitter.trigger("process")}},a}return Object(p.a)(r,[{key:"setValue",value:function(t){this.props.value=t,this.putData(this.key,t),this.update()}}]),r}(u.c.Control);x.component=function(t){var e=t.value,r=t.onChange;return o.a.createElement(o.a.Fragment,null,o.a.createElement("input",{type:"text",value:e,ref:function(t){t&&t.addEventListener("pointerdown",(function(t){return t.stopPropagation()}))},onChange:function(t){return r(t.target.value)}}))};var L,O,j=function(t){Object(v.a)(r,t);var e=Object(d.a)(r);function r(){var t;return Object(h.a)(this,r),(t=e.call(this,"Midjorney")).data.component=w,t}return Object(p.a)(r,[{key:"builder",value:function(t){var e=new u.c.Input("text1","Text",g),r=new u.c.Output("text","Text",g);return e.addControl(new x(this.editor,"text1",t)),t.addInput(e).addControl(new x(this.editor,"preview",t,!0)).addOutput(r)}},{key:"worker",value:function(t,e,r){r.text=t.data.text}}]),r}(u.c.Component),k=r(38);function _(){_=function(){return e};var t,e={},r=Object.prototype,n=r.hasOwnProperty,o=Object.defineProperty||function(t,e,r){t[e]=r.value},a="function"==typeof Symbol?Symbol:{},i=a.iterator||"@@iterator",c=a.asyncIterator||"@@asyncIterator",u=a.toStringTag||"@@toStringTag";function l(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{l({},"")}catch(t){l=function(t,e,r){return t[e]=r}}function s(t,e,r,n){var a=e&&e.prototype instanceof y?e:y,i=Object.create(a.prototype),c=new G(n||[]);return o(i,"_invoke",{value:j(t,r,c)}),i}function f(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}e.wrap=s;var h="suspendedStart",p="executing",v="completed",d={};function y(){}function m(){}function g(){}var w={};l(w,i,(function(){return this}));var b=Object.getPrototypeOf,E=b&&b(b(C([])));E&&E!==r&&n.call(E,i)&&(w=E);var x=g.prototype=y.prototype=Object.create(w);function L(t){["next","throw","return"].forEach((function(e){l(t,e,(function(t){return this._invoke(e,t)}))}))}function O(t,e){function r(o,a,i,c){var u=f(t[o],t,a);if("throw"!==u.type){var l=u.arg,s=l.value;return s&&"object"==typeof s&&n.call(s,"__await")?e.resolve(s.__await).then((function(t){r("next",t,i,c)}),(function(t){r("throw",t,i,c)})):e.resolve(s).then((function(t){l.value=t,i(l)}),(function(t){return r("throw",t,i,c)}))}c(u.arg)}var a;o(this,"_invoke",{value:function(t,n){function o(){return new e((function(e,o){r(t,n,e,o)}))}return a=a?a.then(o,o):o()}})}function j(e,r,n){var o=h;return function(a,i){if(o===p)throw new Error("Generator is already running");if(o===v){if("throw"===a)throw i;return{value:t,done:!0}}for(n.method=a,n.arg=i;;){var c=n.delegate;if(c){var u=k(c,n);if(u){if(u===d)continue;return u}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(o===h)throw o=v,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);o=p;var l=f(e,r,n);if("normal"===l.type){if(o=n.done?v:"suspendedYield",l.arg===d)continue;return{value:l.arg,done:n.done}}"throw"===l.type&&(o=v,n.method="throw",n.arg=l.arg)}}}function k(e,r){var n=r.method,o=e.iterator[n];if(o===t)return r.delegate=null,"throw"===n&&e.iterator.return&&(r.method="return",r.arg=t,k(e,r),"throw"===r.method)||"return"!==n&&(r.method="throw",r.arg=new TypeError("The iterator does not provide a '"+n+"' method")),d;var a=f(o,e.iterator,r.arg);if("throw"===a.type)return r.method="throw",r.arg=a.arg,r.delegate=null,d;var i=a.arg;return i?i.done?(r[e.resultName]=i.value,r.next=e.nextLoc,"return"!==r.method&&(r.method="next",r.arg=t),r.delegate=null,d):i:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,d)}function N(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function S(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function G(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(N,this),this.reset(!0)}function C(e){if(e||""===e){var r=e[i];if(r)return r.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var o=-1,a=function r(){for(;++o<e.length;)if(n.call(e,o))return r.value=e[o],r.done=!1,r;return r.value=t,r.done=!0,r};return a.next=a}}throw new TypeError(typeof e+" is not iterable")}return m.prototype=g,o(x,"constructor",{value:g,configurable:!0}),o(g,"constructor",{value:m,configurable:!0}),m.displayName=l(g,u,"GeneratorFunction"),e.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===m||"GeneratorFunction"===(e.displayName||e.name))},e.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,g):(t.__proto__=g,l(t,u,"GeneratorFunction")),t.prototype=Object.create(x),t},e.awrap=function(t){return{__await:t}},L(O.prototype),l(O.prototype,c,(function(){return this})),e.AsyncIterator=O,e.async=function(t,r,n,o,a){void 0===a&&(a=Promise);var i=new O(s(t,r,n,o),a);return e.isGeneratorFunction(r)?i:i.next().then((function(t){return t.done?t.value:i.next()}))},L(x),l(x,u,"Generator"),l(x,i,(function(){return this})),l(x,"toString",(function(){return"[object Generator]"})),e.keys=function(t){var e=Object(t),r=[];for(var n in e)r.push(n);return r.reverse(),function t(){for(;r.length;){var n=r.pop();if(n in e)return t.value=n,t.done=!1,t}return t.done=!0,t}},e.values=C,G.prototype={constructor:G,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(S),!e)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=t)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var r=this;function o(n,o){return c.type="throw",c.arg=e,r.next=n,o&&(r.method="next",r.arg=t),!!o}for(var a=this.tryEntries.length-1;a>=0;--a){var i=this.tryEntries[a],c=i.completion;if("root"===i.tryLoc)return o("end");if(i.tryLoc<=this.prev){var u=n.call(i,"catchLoc"),l=n.call(i,"finallyLoc");if(u&&l){if(this.prev<i.catchLoc)return o(i.catchLoc,!0);if(this.prev<i.finallyLoc)return o(i.finallyLoc)}else if(u){if(this.prev<i.catchLoc)return o(i.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return o(i.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var a=o;break}}a&&("break"===t||"continue"===t)&&a.tryLoc<=e&&e<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=t,i.arg=e,a?(this.method="next",this.next=a.finallyLoc,d):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),d},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),S(r),d}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;S(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(e,r,n){return this.delegate={iterator:C(e),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=t),d}},e}function N(){return(N=Object(c.a)(_().mark((function t(e){var r,n,o,a;return _().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return o=function(){return(o=Object(c.a)(_().mark((function t(){return _().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,r.abort();case 2:return t.next=4,r.process(L.toJSON());case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)},n=function(){return o.apply(this,arguments)},(L=new u.c.NodeEditor("demo@0.1.0",e)).use(s.a),L.use(l.d),r=new u.c.Engine("demo@0.1.0"),r=new u.c.Engine("demo@0.1.0"),(O=[new b,new E,new j]).map((function(t){return[L.register(t),r.register(t)]})),L.on("process nodecreated noderemoved connectioncreated connectionremoved",Object(c.a)(_().mark((function t(){return _().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:console.log("process"),n();case 2:case"end":return t.stop()}}),t)})))),L.on("nodeselected",function(){var t=Object(c.a)(_().mark((function t(e){return _().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:console.log("el"),console.log(e.position);case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()),t.prev=11,t.next=14,k.a.get("https://demo142.grissoft.com.ua/json/api/get.php?id=1");case 14:a=t.sent,L.fromJSON(a.data).then((function(){L.view.resize(),f.a.zoomAt(L),n()})),t.next=21;break;case 18:t.prev=18,t.t0=t.catch(11),console.log(t.t0);case 21:return t.prev=21,t.finish(21);case 23:case"end":return t.stop()}}),t,null,[[11,18,21,23]])})))).apply(this,arguments)}var S=r(12);function G(t){var e=t.handler,r=Object(n.useState)([]),a=Object(S.a)(r,2),i=a[0],c=a[1];Object(n.useEffect)((function(){c(O)}),[]);return o.a.createElement("div",{className:"sidebar"},i&&o.a.createElement("ul",null,i.map((function(t,r){return o.a.createElement("li",{key:r},o.a.createElement("button",{draggable:!0,onDragStart:(n=t,function(t){e(n)})},t.name));var n}))))}function C(){C=function(){return e};var t,e={},r=Object.prototype,n=r.hasOwnProperty,o=Object.defineProperty||function(t,e,r){t[e]=r.value},a="function"==typeof Symbol?Symbol:{},i=a.iterator||"@@iterator",c=a.asyncIterator||"@@asyncIterator",u=a.toStringTag||"@@toStringTag";function l(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{l({},"")}catch(t){l=function(t,e,r){return t[e]=r}}function s(t,e,r,n){var a=e&&e.prototype instanceof y?e:y,i=Object.create(a.prototype),c=new S(n||[]);return o(i,"_invoke",{value:j(t,r,c)}),i}function f(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}e.wrap=s;var h="suspendedStart",p="executing",v="completed",d={};function y(){}function m(){}function g(){}var w={};l(w,i,(function(){return this}));var b=Object.getPrototypeOf,E=b&&b(b(G([])));E&&E!==r&&n.call(E,i)&&(w=E);var x=g.prototype=y.prototype=Object.create(w);function L(t){["next","throw","return"].forEach((function(e){l(t,e,(function(t){return this._invoke(e,t)}))}))}function O(t,e){function r(o,a,i,c){var u=f(t[o],t,a);if("throw"!==u.type){var l=u.arg,s=l.value;return s&&"object"==typeof s&&n.call(s,"__await")?e.resolve(s.__await).then((function(t){r("next",t,i,c)}),(function(t){r("throw",t,i,c)})):e.resolve(s).then((function(t){l.value=t,i(l)}),(function(t){return r("throw",t,i,c)}))}c(u.arg)}var a;o(this,"_invoke",{value:function(t,n){function o(){return new e((function(e,o){r(t,n,e,o)}))}return a=a?a.then(o,o):o()}})}function j(e,r,n){var o=h;return function(a,i){if(o===p)throw new Error("Generator is already running");if(o===v){if("throw"===a)throw i;return{value:t,done:!0}}for(n.method=a,n.arg=i;;){var c=n.delegate;if(c){var u=k(c,n);if(u){if(u===d)continue;return u}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(o===h)throw o=v,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);o=p;var l=f(e,r,n);if("normal"===l.type){if(o=n.done?v:"suspendedYield",l.arg===d)continue;return{value:l.arg,done:n.done}}"throw"===l.type&&(o=v,n.method="throw",n.arg=l.arg)}}}function k(e,r){var n=r.method,o=e.iterator[n];if(o===t)return r.delegate=null,"throw"===n&&e.iterator.return&&(r.method="return",r.arg=t,k(e,r),"throw"===r.method)||"return"!==n&&(r.method="throw",r.arg=new TypeError("The iterator does not provide a '"+n+"' method")),d;var a=f(o,e.iterator,r.arg);if("throw"===a.type)return r.method="throw",r.arg=a.arg,r.delegate=null,d;var i=a.arg;return i?i.done?(r[e.resultName]=i.value,r.next=e.nextLoc,"return"!==r.method&&(r.method="next",r.arg=t),r.delegate=null,d):i:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,d)}function _(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function N(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function S(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(_,this),this.reset(!0)}function G(e){if(e||""===e){var r=e[i];if(r)return r.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var o=-1,a=function r(){for(;++o<e.length;)if(n.call(e,o))return r.value=e[o],r.done=!1,r;return r.value=t,r.done=!0,r};return a.next=a}}throw new TypeError(typeof e+" is not iterable")}return m.prototype=g,o(x,"constructor",{value:g,configurable:!0}),o(g,"constructor",{value:m,configurable:!0}),m.displayName=l(g,u,"GeneratorFunction"),e.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===m||"GeneratorFunction"===(e.displayName||e.name))},e.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,g):(t.__proto__=g,l(t,u,"GeneratorFunction")),t.prototype=Object.create(x),t},e.awrap=function(t){return{__await:t}},L(O.prototype),l(O.prototype,c,(function(){return this})),e.AsyncIterator=O,e.async=function(t,r,n,o,a){void 0===a&&(a=Promise);var i=new O(s(t,r,n,o),a);return e.isGeneratorFunction(r)?i:i.next().then((function(t){return t.done?t.value:i.next()}))},L(x),l(x,u,"Generator"),l(x,i,(function(){return this})),l(x,"toString",(function(){return"[object Generator]"})),e.keys=function(t){var e=Object(t),r=[];for(var n in e)r.push(n);return r.reverse(),function t(){for(;r.length;){var n=r.pop();if(n in e)return t.value=n,t.done=!1,t}return t.done=!0,t}},e.values=G,S.prototype={constructor:S,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(N),!e)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=t)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var r=this;function o(n,o){return c.type="throw",c.arg=e,r.next=n,o&&(r.method="next",r.arg=t),!!o}for(var a=this.tryEntries.length-1;a>=0;--a){var i=this.tryEntries[a],c=i.completion;if("root"===i.tryLoc)return o("end");if(i.tryLoc<=this.prev){var u=n.call(i,"catchLoc"),l=n.call(i,"finallyLoc");if(u&&l){if(this.prev<i.catchLoc)return o(i.catchLoc,!0);if(this.prev<i.finallyLoc)return o(i.finallyLoc)}else if(u){if(this.prev<i.catchLoc)return o(i.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return o(i.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var a=o;break}}a&&("break"===t||"continue"===t)&&a.tryLoc<=e&&e<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=t,i.arg=e,a?(this.method="next",this.next=a.finallyLoc,d):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),d},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),N(r),d}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;N(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(e,r,n){return this.delegate={iterator:G(e),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=t),d}},e}function P(){var t=function(){var t=Object(c.a)(C().mark((function t(e){return C().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.preventDefault(),t.prev=1,t.next=4,k.a.post("https://demo142.grissoft.com.ua/json/api/set.php?id=1",JSON.stringify(L.toJSON()));case 4:t.sent,t.next=10;break;case 7:t.prev=7,t.t0=t.catch(1),console.log(t.t0);case 10:return t.prev=10,t.finish(10);case 12:case"end":return t.stop()}}),t,null,[[1,7,10,12]])})));return function(e){return t.apply(this,arguments)}}();return o.a.createElement("header",{className:"header"},o.a.createElement("div",{className:"logo"},o.a.createElement("img",{src:"./img/logo.svg"})),o.a.createElement("button",{className:"icon-btn icon-btn_save",onClick:t}))}function T(){T=function(){return e};var t,e={},r=Object.prototype,n=r.hasOwnProperty,o=Object.defineProperty||function(t,e,r){t[e]=r.value},a="function"==typeof Symbol?Symbol:{},i=a.iterator||"@@iterator",c=a.asyncIterator||"@@asyncIterator",u=a.toStringTag||"@@toStringTag";function l(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{l({},"")}catch(t){l=function(t,e,r){return t[e]=r}}function s(t,e,r,n){var a=e&&e.prototype instanceof y?e:y,i=Object.create(a.prototype),c=new S(n||[]);return o(i,"_invoke",{value:j(t,r,c)}),i}function f(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}e.wrap=s;var h="suspendedStart",p="executing",v="completed",d={};function y(){}function m(){}function g(){}var w={};l(w,i,(function(){return this}));var b=Object.getPrototypeOf,E=b&&b(b(G([])));E&&E!==r&&n.call(E,i)&&(w=E);var x=g.prototype=y.prototype=Object.create(w);function L(t){["next","throw","return"].forEach((function(e){l(t,e,(function(t){return this._invoke(e,t)}))}))}function O(t,e){function r(o,a,i,c){var u=f(t[o],t,a);if("throw"!==u.type){var l=u.arg,s=l.value;return s&&"object"==typeof s&&n.call(s,"__await")?e.resolve(s.__await).then((function(t){r("next",t,i,c)}),(function(t){r("throw",t,i,c)})):e.resolve(s).then((function(t){l.value=t,i(l)}),(function(t){return r("throw",t,i,c)}))}c(u.arg)}var a;o(this,"_invoke",{value:function(t,n){function o(){return new e((function(e,o){r(t,n,e,o)}))}return a=a?a.then(o,o):o()}})}function j(e,r,n){var o=h;return function(a,i){if(o===p)throw new Error("Generator is already running");if(o===v){if("throw"===a)throw i;return{value:t,done:!0}}for(n.method=a,n.arg=i;;){var c=n.delegate;if(c){var u=k(c,n);if(u){if(u===d)continue;return u}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(o===h)throw o=v,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);o=p;var l=f(e,r,n);if("normal"===l.type){if(o=n.done?v:"suspendedYield",l.arg===d)continue;return{value:l.arg,done:n.done}}"throw"===l.type&&(o=v,n.method="throw",n.arg=l.arg)}}}function k(e,r){var n=r.method,o=e.iterator[n];if(o===t)return r.delegate=null,"throw"===n&&e.iterator.return&&(r.method="return",r.arg=t,k(e,r),"throw"===r.method)||"return"!==n&&(r.method="throw",r.arg=new TypeError("The iterator does not provide a '"+n+"' method")),d;var a=f(o,e.iterator,r.arg);if("throw"===a.type)return r.method="throw",r.arg=a.arg,r.delegate=null,d;var i=a.arg;return i?i.done?(r[e.resultName]=i.value,r.next=e.nextLoc,"return"!==r.method&&(r.method="next",r.arg=t),r.delegate=null,d):i:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,d)}function _(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function N(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function S(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(_,this),this.reset(!0)}function G(e){if(e||""===e){var r=e[i];if(r)return r.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var o=-1,a=function r(){for(;++o<e.length;)if(n.call(e,o))return r.value=e[o],r.done=!1,r;return r.value=t,r.done=!0,r};return a.next=a}}throw new TypeError(typeof e+" is not iterable")}return m.prototype=g,o(x,"constructor",{value:g,configurable:!0}),o(g,"constructor",{value:m,configurable:!0}),m.displayName=l(g,u,"GeneratorFunction"),e.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===m||"GeneratorFunction"===(e.displayName||e.name))},e.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,g):(t.__proto__=g,l(t,u,"GeneratorFunction")),t.prototype=Object.create(x),t},e.awrap=function(t){return{__await:t}},L(O.prototype),l(O.prototype,c,(function(){return this})),e.AsyncIterator=O,e.async=function(t,r,n,o,a){void 0===a&&(a=Promise);var i=new O(s(t,r,n,o),a);return e.isGeneratorFunction(r)?i:i.next().then((function(t){return t.done?t.value:i.next()}))},L(x),l(x,u,"Generator"),l(x,i,(function(){return this})),l(x,"toString",(function(){return"[object Generator]"})),e.keys=function(t){var e=Object(t),r=[];for(var n in e)r.push(n);return r.reverse(),function t(){for(;r.length;){var n=r.pop();if(n in e)return t.value=n,t.done=!1,t}return t.done=!0,t}},e.values=G,S.prototype={constructor:S,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(N),!e)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=t)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var r=this;function o(n,o){return c.type="throw",c.arg=e,r.next=n,o&&(r.method="next",r.arg=t),!!o}for(var a=this.tryEntries.length-1;a>=0;--a){var i=this.tryEntries[a],c=i.completion;if("root"===i.tryLoc)return o("end");if(i.tryLoc<=this.prev){var u=n.call(i,"catchLoc"),l=n.call(i,"finallyLoc");if(u&&l){if(this.prev<i.catchLoc)return o(i.catchLoc,!0);if(this.prev<i.finallyLoc)return o(i.finallyLoc)}else if(u){if(this.prev<i.catchLoc)return o(i.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return o(i.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var a=o;break}}a&&("break"===t||"continue"===t)&&a.tryLoc<=e&&e<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=t,i.arg=e,a?(this.method="next",this.next=a.finallyLoc,d):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),d},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),N(r),d}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;N(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(e,r,n){return this.delegate={iterator:G(e),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=t),d}},e}function F(){var t="",e=function(){var e=Object(c.a)(T().mark((function e(r){var n,o,a,i,c,u,l,s;return T().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r.preventDefault(),r.persist(),e.next=4,L.view.area.transform;case 4:return n=e.sent,o=n.x,a=n.y,i=n.k,c=r.clientX-r.target.offsetLeft,u=r.clientY-r.target.offsetTop,l=[(c-o)/i,(u-a)/i],e.next=13,t.createNode();case 13:(s=e.sent).position=l,L.addNode(s);case 16:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return o.a.createElement("div",{className:"layout"},o.a.createElement(P,null),o.a.createElement(G,{handler:function(e){t=e}}),o.a.createElement("div",{className:"layout__content",ref:function(t){return t&&function(t){return N.apply(this,arguments)}(t)},onDragOver:function(t){t.preventDefault()},onDrop:e}))}r(36);function I(){return o.a.createElement("div",{className:"App"},o.a.createElement(F,null))}var D=document.getElementById("root");i.a.render(o.a.createElement(I,null),D)}},[[23,1,2]]]);
//# sourceMappingURL=main.20a28c0d.chunk.js.map