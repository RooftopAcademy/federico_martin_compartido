(()=>{"use strict";const t=function(){function t(){}return t.prototype.geTTitle=function(){return this.title},t.prototype.getPrice=function(){return this.price},t.prototype.getID=function(){return this.id},t.prototype.getDescription=function(){return this.description},t}(),n=function(){function t(){this._products=[]}return Object.defineProperty(t.prototype,"products",{get:function(){return this._products},enumerable:!1,configurable:!0}),t.prototype.addProducts=function(t){this._products.push(t)},t}(),e=function(){function t(){this.counter=0}return Object.defineProperty(t.prototype,"addProduct",{set:function(t){this.counter+=Number(t)},enumerable:!1,configurable:!0}),t}();function r(){return t=this,n=void 0,r=function(){return function(t,n){var e,r,o,i,c={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:u(0),throw:u(1),return:u(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function u(i){return function(u){return function(i){if(e)throw new TypeError("Generator is already executing.");for(;c;)try{if(e=1,r&&(o=2&i[0]?r.return:i[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,i[1])).done)return o;switch(r=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return c.label++,{value:i[1],done:!1};case 5:c.label++,r=i[1],i=[0];continue;case 7:i=c.ops.pop(),c.trys.pop();continue;default:if(!((o=(o=c.trys).length>0&&o[o.length-1])||6!==i[0]&&2!==i[0])){c=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){c.label=i[1];break}if(6===i[0]&&c.label<o[1]){c.label=o[1],o=i;break}if(o&&c.label<o[2]){c.label=o[2],c.ops.push(i);break}o[2]&&c.ops.pop(),c.trys.pop();continue}i=n.call(t,c)}catch(t){i=[6,t],r=0}finally{e=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,u])}}}(this,(function(t){switch(t.label){case 0:return[4,fetch("https://fakestoreapi.com/products?limit=3").then((function(t){return t.json()}))];case 1:return[2,t.sent()]}}))},new((e=void 0)||(e=Promise))((function(o,i){function c(t){try{a(r.next(t))}catch(t){i(t)}}function u(t){try{a(r.throw(t))}catch(t){i(t)}}function a(t){var n;t.done?o(t.value):(n=t.value,n instanceof e?n:new e((function(t){t(n)}))).then(c,u)}a((r=r.apply(t,n||[])).next())}));var t,n,e,r}var o=function(){function o(){this._cart=new e,this._catalog=new n}return Object.defineProperty(o.prototype,"cart",{get:function(){return this._cart},enumerable:!1,configurable:!0}),Object.defineProperty(o.prototype,"catalog",{get:function(){return this._catalog},enumerable:!1,configurable:!0}),o.prototype.setCatalog=function(){return n=this,e=void 0,i=function(){var n=this;return function(t,n){var e,r,o,i,c={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:u(0),throw:u(1),return:u(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function u(i){return function(u){return function(i){if(e)throw new TypeError("Generator is already executing.");for(;c;)try{if(e=1,r&&(o=2&i[0]?r.return:i[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,i[1])).done)return o;switch(r=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return c.label++,{value:i[1],done:!1};case 5:c.label++,r=i[1],i=[0];continue;case 7:i=c.ops.pop(),c.trys.pop();continue;default:if(!((o=(o=c.trys).length>0&&o[o.length-1])||6!==i[0]&&2!==i[0])){c=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){c.label=i[1];break}if(6===i[0]&&c.label<o[1]){c.label=o[1],o=i;break}if(o&&c.label<o[2]){c.label=o[2],c.ops.push(i);break}o[2]&&c.ops.pop(),c.trys.pop();continue}i=n.call(t,c)}catch(t){i=[6,t],r=0}finally{e=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,u])}}}(this,(function(e){switch(e.label){case 0:return[4,r()];case 1:return e.sent().forEach((function(e){var r=new t;r.title=e.title,r.id=e.id,r.price=e.price,r.description=e.description,n._catalog.addProducts(r)})),[2]}}))},new((o=void 0)||(o=Promise))((function(t,r){function c(t){try{a(i.next(t))}catch(t){r(t)}}function u(t){try{a(i.throw(t))}catch(t){r(t)}}function a(n){var e;n.done?t(n.value):(e=n.value,e instanceof o?e:new o((function(t){t(e)}))).then(c,u)}a((i=i.apply(n,e||[])).next())}));var n,e,o,i},o}(),i=function(t,n,e,r){return new(e||(e=Promise))((function(o,i){function c(t){try{a(r.next(t))}catch(t){i(t)}}function u(t){try{a(r.throw(t))}catch(t){i(t)}}function a(t){var n;t.done?o(t.value):(n=t.value,n instanceof e?n:new e((function(t){t(n)}))).then(c,u)}a((r=r.apply(t,n||[])).next())}))},c=function(t,n){var e,r,o,i,c={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:u(0),throw:u(1),return:u(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function u(i){return function(u){return function(i){if(e)throw new TypeError("Generator is already executing.");for(;c;)try{if(e=1,r&&(o=2&i[0]?r.return:i[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,i[1])).done)return o;switch(r=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return c.label++,{value:i[1],done:!1};case 5:c.label++,r=i[1],i=[0];continue;case 7:i=c.ops.pop(),c.trys.pop();continue;default:if(!((o=(o=c.trys).length>0&&o[o.length-1])||6!==i[0]&&2!==i[0])){c=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){c.label=i[1];break}if(6===i[0]&&c.label<o[1]){c.label=o[1],o=i;break}if(o&&c.label<o[2]){c.label=o[2],c.ops.push(i);break}o[2]&&c.ops.pop(),c.trys.pop();continue}i=n.call(t,c)}catch(t){i=[6,t],r=0}finally{e=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,u])}}},u=new o,a=document.getElementById("products-container");i(void 0,void 0,void 0,(function(){return c(this,(function(t){switch(t.label){case 0:return[4,u.setCatalog()];case 1:return t.sent(),u.catalog.products.forEach((function(t){return i(void 0,void 0,void 0,(function(){return c(this,(function(n){return function(t,n){t&&(t.innerHTML+=function(t){return'\n    <div class="product">\n    <img src="./images/'+t.id+'.jpg" class="blue-shirt" />\n    <div class="product-info">\n        <h2>'+t.title+"</h2>\n        <span>$"+t.price.toFixed(2)+'</span><a href="details.html">Detalles</a>\n        <div>\n            <input\n                type="number"\n                class="cantidad"\n                name="cantidad"\n                min="0"\n                placeholder="0"\n            /><button class="comprar">Comprar</button>\n        </div>\n    </div>\n</div>\n'}(n))}(a,t),[2]}))}))})),Array.from(document.getElementsByClassName("comprar")).forEach((function(t){t.addEventListener("click",(function(t){if(t){var n=t.target.previousElementSibling;"0"==n.value?alert("Elige cuántas prendas quieres comprar"):(u.cart.addProduct=Number(n.value),l&&(l.innerHTML=String(u.cart.counter)))}}))})),[2]}}))}));var l=document.getElementById("counter")})();