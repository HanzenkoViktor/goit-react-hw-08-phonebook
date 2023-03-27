(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[117],{7117:function(n,e,t){"use strict";t.r(e),t.d(e,{default:function(){return X}});var r=t(9439),i=t(9434),o=t(2791),u=t(5090),a="NOT_FOUND";var c=function(n,e){return n===e};function s(n,e){var t="object"===typeof e?e:{equalityCheck:e},r=t.equalityCheck,i=void 0===r?c:r,o=t.maxSize,u=void 0===o?1:o,s=t.resultEqualityCheck,p=function(n){return function(e,t){if(null===e||null===t||e.length!==t.length)return!1;for(var r=e.length,i=0;i<r;i++)if(!n(e[i],t[i]))return!1;return!0}}(i),d=1===u?function(n){var e;return{get:function(t){return e&&n(e.key,t)?e.value:a},put:function(n,t){e={key:n,value:t}},getEntries:function(){return e?[e]:[]},clear:function(){e=void 0}}}(p):function(n,e){var t=[];function r(n){var r=t.findIndex((function(t){return e(n,t.key)}));if(r>-1){var i=t[r];return r>0&&(t.splice(r,1),t.unshift(i)),i.value}return a}return{get:r,put:function(e,i){r(e)===a&&(t.unshift({key:e,value:i}),t.length>n&&t.pop())},getEntries:function(){return t},clear:function(){t=[]}}}(u,p);function l(){var e=d.get(arguments);if(e===a){if(e=n.apply(null,arguments),s){var t=d.getEntries(),r=t.find((function(n){return s(n.value,e)}));r&&(e=r.value)}d.put(arguments,e)}return e}return l.clearCache=function(){return d.clear()},l}function p(n){var e=Array.isArray(n[0])?n[0]:n;if(!e.every((function(n){return"function"===typeof n}))){var t=e.map((function(n){return"function"===typeof n?"function "+(n.name||"unnamed")+"()":typeof n})).join(", ");throw new Error("createSelector expects all input-selectors to be functions, but received the following types: ["+t+"]")}return e}function d(n){for(var e=arguments.length,t=new Array(e>1?e-1:0),r=1;r<e;r++)t[r-1]=arguments[r];var i=function(){for(var e=arguments.length,r=new Array(e),i=0;i<e;i++)r[i]=arguments[i];var o,u=0,a={memoizeOptions:void 0},c=r.pop();if("object"===typeof c&&(a=c,c=r.pop()),"function"!==typeof c)throw new Error("createSelector expects an output function after the inputs, but received: ["+typeof c+"]");var s=a,d=s.memoizeOptions,l=void 0===d?t:d,f=Array.isArray(l)?l:[l],x=p(r),h=n.apply(void 0,[function(){return u++,c.apply(null,arguments)}].concat(f)),m=n((function(){for(var n=[],e=x.length,t=0;t<e;t++)n.push(x[t].apply(null,arguments));return o=h.apply(null,n)}));return Object.assign(m,{resultFunc:c,memoizedResultFunc:h,dependencies:x,lastResult:function(){return o},recomputations:function(){return u},resetRecomputations:function(){return u=0}}),m};return i}var l,f,x,h,m,g,v,b,y,w,j=d(s),Z=function(n){return n.contacts.items},k=function(n){return n.contacts.isLoading},C=function(n){return n.contacts.error},z=j([Z,function(n){return n.filter}],(function(n,e){return e?n.filter((function(n){return n.name.toLowerCase().includes(e)})):n})),T=t(168),E=t(4934),O=E.Z.form(l||(l=(0,T.Z)(["\n  display: flex;\n  gap: 7px;\n  flex-direction: column;\n  justify-content: center;\n  padding: 20px;\n  width: 300px;\n  border: 1px solid blue;\n"]))),R=E.Z.input(f||(f=(0,T.Z)(["\n  outline: none;\n  padding: 5px;\n"]))),A=E.Z.button(x||(x=(0,T.Z)(["\n  width: 80px;\n  padding: 6px;\n  font-size: 12px;\n  text-align: center;\n  color: #fff;\n  background-color: blue;\n  box-shadow: 0px 4px 4px rgb(0 0 0 / 15%);\n  border-radius: 5px;\n  border: none;\n  cursor: pointer;\n  transition: 250ms cubic-bezier(0.4, 0, 0.2, 1);\n  :hover,\n  :focus {\n    background-color: #918d8d;\n  }\n  @media screen and (min-width: 760px) {\n    width: 100px;\n    padding: 7px;\n    font-size: 14px;\n  }\n"]))),_=t(184),q=t(6429),P=q.generate(),I=q.generate(),S=q.generate(),F=function(){var n=(0,o.useState)(""),e=(0,r.Z)(n,2),t=e[0],a=e[1],c=(0,o.useState)(""),s=(0,r.Z)(c,2),p=s[0],d=s[1],l=(0,i.v9)(Z),f=(0,i.I0)(),x=function(){a(""),d("")};return(0,_.jsxs)(O,{onSubmit:function(n){var e;(n.preventDefault(),e=t,l.some((function(n){return n.name===e})))?alert("".concat(t," is allready in contacts")):(f((0,u.uK)({name:t,number:p})),x())},children:[(0,_.jsx)("label",{htmlFor:P,children:(0,_.jsx)("span",{children:"Name"})}),(0,_.jsx)(R,{autoComplete:"off",type:"text",name:"name",id:P,value:t,onChange:function(n){a(n.currentTarget.value)},pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0}),(0,_.jsx)("label",{htmlFor:I,children:(0,_.jsx)("span",{children:"Number"})}),(0,_.jsx)(R,{type:"tel",name:"number",id:I,value:p,onChange:function(n){d(n.currentTarget.value)},pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0}),(0,_.jsx)("label",{htmlFor:S,children:(0,_.jsx)(A,{type:"submit",id:S,children:"Add contact"})})]})},M=E.Z.div(h||(h=(0,T.Z)(["\n  display: flex;\n  flex-direction: column;\n  margin-top: 10px;\n  margin-bottom: 10px;\n  font-size: 17px;\n  @media screen and (min-width: 760px) {\n    font-size: 20px;\n  }\n"]))),D=E.Z.label(m||(m=(0,T.Z)(["\n  margin: 5px;\n width: 210px;\n @media screen and (min-width: 451px) {\n    width: 330px;\n  }\n"]))),L=E.Z.input(g||(g=(0,T.Z)(["\n  outline: none;\n  padding: 5px;\n  border: 1px solid blue;\n  margin-bottom: 20px;\n"]))),N=t(3165),V=function(){var n=(0,i.I0)();return(0,_.jsxs)(M,{children:[(0,_.jsx)(D,{children:"\u0421ontact search"}),(0,_.jsx)(L,{type:"text",onChange:function(e){var t=e.target.value.toLowerCase();n((0,N.T)(t))}})]})},U=E.Z.ul(v||(v=(0,T.Z)(["\n  list-style: none;\n  padding: 0;\n  margin: 0;\n"]))),W=E.Z.div(b||(b=(0,T.Z)(["\n  width: 200px;\n  margin: 0;\n  border: 1px solid blue;\n  border-radius: 6px;\n  padding: 20px;\n  font-size: 13px;\n  @media screen and (min-width: 451px) {\n   width: 300px;\n     padding: 20px;\n     font-size: 14px;\n }\n   @media screen and (min-width: 1200px) {\n     width: 300px;\n     padding: 20px;\n     font-size: 15px;\n   }\n "]))),B=t(2007),K=E.Z.li(y||(y=(0,T.Z)(["\n  margin: 5px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n"]))),Y=E.Z.button(w||(w=(0,T.Z)(["\n  padding: 5px;\n  font-size: 12px;\n  text-align: center;\n  color: #fff;\n  background-color: blue;\n  box-shadow: 0px 4px 4px rgb(0 0 0 / 15%);\n  border-radius: 5px;\n  border: none;\n  cursor: pointer;\n  transition: 250ms cubic-bezier(0.4, 0, 0.2, 1);\n  :hover,\n  :focus {\n    background-color: #918d8d;\n  }\n  @media screen and (min-width: 451px) {\n  width: 60px;\n  font-size: 14px;\n}\n"]))),$=function(n){var e=n.name,t=n.number,r=n.id,o=(0,i.I0)();return(0,_.jsxs)(K,{children:[(0,_.jsxs)("p",{children:[e,": ",t]}),(0,_.jsx)(Y,{onClick:function(){return o((0,u.GK)(r))},title:"Delete contact",children:"Delete"})]})};$.prototype={id:B.PropTypes.string.isRequired,name:B.PropTypes.string.isRequired,number:B.PropTypes.string.isRequired,deleteContact:B.PropTypes.func.isRequired};var G,H=$,J=function(){var n=(0,i.v9)(z),e=(0,i.I0)();return(0,o.useEffect)((function(){e((0,u.yF)())}),[e]),(0,_.jsxs)(W,{children:[(0,_.jsx)("h2",{children:"My contacts"}),(0,_.jsx)(U,{children:n.map((function(n){var e=n.name,t=n.number,r=n.id;return(0,_.jsx)(H,{name:e,number:t,id:r},r)}))})]})},Q=E.Z.div(G||(G=(0,T.Z)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  width: 85%;\n  margin: 20px auto;\n  color: blue;\n  background-color: white;\n  padding: 20px 10px;\n  border: 2px dashed blue;\n  border-radius: 4%;\n  @media screen and (min-width: 760px) {\nwidth: 440px;\npadding: 20px;\n\t}\n\t@media screen and (min-width: 1200px) {\n    padding: 40px 80px 100px 80px;\n    width: 500px;\n    margin: 30px auto;\n\t}\n"]))),X=function(){var n=(0,i.v9)(k),e=(0,i.v9)(C);return(0,_.jsx)("main",{children:(0,_.jsxs)(Q,{children:[(0,_.jsx)("h1",{children:"Phonebook"}),(0,_.jsx)(F,{}),(0,_.jsx)(V,{}),n&&!e&&"...Loading",(0,_.jsx)(J,{})]})})}},888:function(n,e,t){"use strict";var r=t(9047);function i(){}function o(){}o.resetWarningCache=i,n.exports=function(){function n(n,e,t,i,o,u){if(u!==r){var a=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw a.name="Invariant Violation",a}}function e(){return n}n.isRequired=n;var t={array:n,bigint:n,bool:n,func:n,number:n,object:n,string:n,symbol:n,any:n,arrayOf:e,element:n,elementType:n,instanceOf:e,node:n,objectOf:e,oneOf:e,oneOfType:e,shape:e,exact:e,checkPropTypes:o,resetWarningCache:i};return t.PropTypes=t,t}},2007:function(n,e,t){n.exports=t(888)()},9047:function(n){"use strict";n.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},6429:function(n,e,t){"use strict";n.exports=t(5274)},8857:function(n,e,t){"use strict";var r,i,o,u=t(5408),a="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ_-";function c(){o=!1}function s(n){if(n){if(n!==r){if(n.length!==a.length)throw new Error("Custom alphabet for shortid must be "+a.length+" unique characters. You submitted "+n.length+" characters: "+n);var e=n.split("").filter((function(n,e,t){return e!==t.lastIndexOf(n)}));if(e.length)throw new Error("Custom alphabet for shortid must be "+a.length+" unique characters. These characters were not unique: "+e.join(", "));r=n,c()}}else r!==a&&(r=a,c())}function p(){return o||(o=function(){r||s(a);for(var n,e=r.split(""),t=[],i=u.nextValue();e.length>0;)i=u.nextValue(),n=Math.floor(i*e.length),t.push(e.splice(n,1)[0]);return t.join("")}())}n.exports={get:function(){return r||a},characters:function(n){return s(n),r},seed:function(n){u.seed(n),i!==n&&(c(),i=n)},lookup:function(n){return p()[n]},shuffled:p}},7098:function(n,e,t){"use strict";var r,i,o=t(2226);t(8857);n.exports=function(n){var e="",t=Math.floor(.001*(Date.now()-1567752802062));return t===i?r++:(r=0,i=t),e+=o(7),e+=o(n),r>0&&(e+=o(r)),e+=o(t)}},2226:function(n,e,t){"use strict";var r=t(8857),i=t(9139),o=t(2483);n.exports=function(n){for(var e,t=0,u="";!e;)u+=o(i,r.get(),1),e=n<Math.pow(16,t+1),t++;return u}},5274:function(n,e,t){"use strict";var r=t(8857),i=t(7098),o=t(6046),u=t(5347)||0;function a(){return i(u)}n.exports=a,n.exports.generate=a,n.exports.seed=function(e){return r.seed(e),n.exports},n.exports.worker=function(e){return u=e,n.exports},n.exports.characters=function(n){return void 0!==n&&r.characters(n),r.shuffled()},n.exports.isValid=o},6046:function(n,e,t){"use strict";var r=t(8857);n.exports=function(n){return!(!n||"string"!==typeof n||n.length<6)&&!new RegExp("[^"+r.get().replace(/[|\\{}()[\]^$+*?.-]/g,"\\$&")+"]").test(n)}},9139:function(n){"use strict";var e,t="object"===typeof window&&(window.crypto||window.msCrypto);e=t&&t.getRandomValues?function(n){return t.getRandomValues(new Uint8Array(n))}:function(n){for(var e=[],t=0;t<n;t++)e.push(Math.floor(256*Math.random()));return e},n.exports=e},5408:function(n){"use strict";var e=1;n.exports={nextValue:function(){return(e=(9301*e+49297)%233280)/233280},seed:function(n){e=n}}},5347:function(n){"use strict";n.exports=0},2483:function(n){n.exports=function(n,e,t){for(var r=(2<<Math.log(e.length-1)/Math.LN2)-1,i=-~(1.6*r*t/e.length),o="";;)for(var u=n(i),a=i;a--;)if((o+=e[u[a]&r]||"").length===+t)return o}}}]);
//# sourceMappingURL=117.5cbb2190.chunk.js.map