!function(e){var n={};function t(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,t),o.l=!0,o.exports}t.m=e,t.c=n,t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:r})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,n){if(1&n&&(e=t(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(t.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var o in e)t.d(r,o,function(n){return e[n]}.bind(null,o));return r},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},t.p="",t(t.s=2)}([function(e,n,t){"use strict";var r=t(1);function o(e){return(o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var i={assertTrue:function(e,n){if(!e)throw new Error(n)},assertNotNull:function(e,n){return i.assertTrue(null!==e&&void 0!==o(e),Object(r.sprintf)("%s must be provided",n||"A value")),e},isNonEmptyString:function(e){return"string"==typeof e&&e.length>0},assertIsList:function(e,n){if(!Array.isArray(e))throw new Error(n+" is not an array")},isFunction:function(e){return!!(e&&e.constructor&&e.call&&e.apply)},isObject:function(e){return!("object"!==o(e)||null===e)},isString:function(e){return"string"==typeof e},isNumber:function(e){return"number"==typeof e}},c=new RegExp("^(wss://)\\w*");i.validWSUrl=function(e){return c.test(e)},i.getSubscriptionResponse=function(e,n,t){return{topic:e,content:{status:n?"success":"failure",topics:t}}},i.assertIsObject=function(e,n){if(!i.isObject(e))throw new Error(n+" is not an object!")},i.addJitter=function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;n=Math.min(n,1);var t=Math.random()>.5?1:-1;return Math.floor(e+t*e*Math.random()*n)},i.isNetworkOnline=function(){return navigator.onLine};var s=i,a="NULL",u="CLIENT_LOGGER",l="DEBUG",f="aws/subscribe",p="aws/unsubscribe",d="aws/heartbeat",b="connected",g="disconnected";function y(e){return(y="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function S(e,n){return!n||"object"!==y(n)&&"function"!=typeof n?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):n}function k(e){return(k=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function v(e,n){return(v=Object.setPrototypeOf||function(e,n){return e.__proto__=n,e})(e,n)}function h(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function w(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function m(e,n,t){return n&&w(e.prototype,n),t&&w(e,t),e}var C=function(){function e(){h(this,e)}return m(e,[{key:"debug",value:function(e){}},{key:"info",value:function(e){}},{key:"warn",value:function(e){}},{key:"error",value:function(e){}}]),e}(),I={DEBUG:10,INFO:20,WARN:30,ERROR:40},T=function(){function e(){h(this,e),this.updateLoggerConfig(),this.consoleLoggerWrapper=_()}return m(e,[{key:"writeToClientLogger",value:function(e,n){if(this.hasClientLogger())switch(e){case I.DEBUG:return this._clientLogger.debug(n);case I.INFO:return this._clientLogger.info(n);case I.WARN:return this._clientLogger.warn(n);case I.ERROR:return this._clientLogger.error(n)}}},{key:"isLevelEnabled",value:function(e){return e>=this._level}},{key:"hasClientLogger",value:function(){return null!==this._clientLogger}},{key:"getLogger",value:function(e){var n=e.prefix||"";return this._logsDestination===l?this.consoleLoggerWrapper:new N(n)}},{key:"updateLoggerConfig",value:function(e){var n=e||{};this._level=n.level||I.DEBUG,this._clientLogger=n.logger||null,this._logsDestination=a,n.debug&&(this._logsDestination=l),n.logger&&(this._logsDestination=u)}}]),e}(),O=function(){function e(){h(this,e)}return m(e,[{key:"debug",value:function(){}},{key:"info",value:function(){}},{key:"warn",value:function(){}},{key:"error",value:function(){}}]),e}(),N=function(e){function n(e){var t;return h(this,n),(t=S(this,k(n).call(this))).prefix=e||"",t}return function(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),n&&v(e,n)}(n,O),m(n,[{key:"debug",value:function(){for(var e=arguments.length,n=new Array(e),t=0;t<e;t++)n[t]=arguments[t];this._log(I.DEBUG,n)}},{key:"info",value:function(){for(var e=arguments.length,n=new Array(e),t=0;t<e;t++)n[t]=arguments[t];this._log(I.INFO,n)}},{key:"warn",value:function(){for(var e=arguments.length,n=new Array(e),t=0;t<e;t++)n[t]=arguments[t];this._log(I.WARN,n)}},{key:"error",value:function(){for(var e=arguments.length,n=new Array(e),t=0;t<e;t++)n[t]=arguments[t];this._log(I.ERROR,n)}},{key:"_shouldLog",value:function(e){return W.hasClientLogger()&&W.isLevelEnabled(e)}},{key:"_writeToClientLogger",value:function(e,n){W.writeToClientLogger(e,n)}},{key:"_log",value:function(e,n){if(this._shouldLog(e)){var t=this._convertToSingleStatement(n);this._writeToClientLogger(e,t)}}},{key:"_convertToSingleStatement",value:function(e){var n="";this.prefix&&(n+=this.prefix+" ");for(var t=0;t<e.length;t++){var r=e[t];n+=this._convertToString(r)+" "}return n}},{key:"_convertToString",value:function(e){try{if(!e)return"";if(s.isString(e))return e;if(s.isObject(e)&&s.isFunction(e.toString)){var n=e.toString();if("[object Object]"!==n)return n}return JSON.stringify(e)}catch(n){return console.error("Error while converting argument to string",e,n),""}}}]),n}(),_=function(){var e=new O;return e.debug=console.debug,e.info=console.info,e.warn=console.warn,e.error=console.error,e},W=new T;t.d(n,"a",function(){return L});var E=function(){var e=W.getLogger({}),n=s.isNetworkOnline(),t={primary:null,secondary:null},r={reconnectWebSocket:!0,websocketInitFailed:!1,exponentialBackOffTime:1e3,exponentialTimeoutHandle:null,lifeTimeTimeoutHandle:null,webSocketInitCheckerTimeoutId:null,connState:null},o={pendingResponse:!1,intervalHandle:null},i={initFailure:new Set,getWebSocketTransport:null,subscriptionUpdate:new Set,subscriptionFailure:new Set,topic:new Map,allMessage:new Set,connectionGain:new Set,connectionLost:new Set},c={connConfig:null,promiseHandle:null,promiseCompleted:!0},a={subscribed:new Set,pending:new Set,subscriptionHistory:new Set},u={responseCheckIntervalId:null,requestCompleted:!0,reSubscribeIntervalId:null,consecutiveFailedSubscribeAttempts:0,consecutiveNoResponseRequest:0},l=new Set([f,p,d]),y=setInterval(function(){if(n!==s.isNetworkOnline()){if(!(n=s.isNetworkOnline()))return void e.info("Network offline");var t=C();n&&(!t||h(t,WebSocket.CLOSING)||h(t,WebSocket.CLOSED))&&(e.info("Network online, connecting to WebSocket server"),G())}},250),S=function(n,t){n.forEach(function(n){try{n(t)}catch(n){e.error("Error executing callback",n)}})},k=function(e){if(null===e)return"NULL";switch(e.readyState){case WebSocket.CONNECTING:return"CONNECTING";case WebSocket.OPEN:return"OPEN";case WebSocket.CLOSING:return"CLOSING";case WebSocket.CLOSED:return"CLOSED";default:return"UNDEFINED"}},v=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";e.debug("["+n+"] Primary WebSocket: "+k(t.primary)+" | Secondary WebSocket: "+k(t.secondary))},h=function(e,n){return e&&e.readyState===n},w=function(e){return h(e,WebSocket.OPEN)},m=function(e){return null===e||void 0===e.readyState||h(e,WebSocket.CLOSED)},C=function(){return null!==t.secondary?t.secondary:t.primary},I=function(){return w(C())},T=function(){if(o.pendingResponse)return e.warn("Heartbeat response not received"),clearInterval(o.intervalHandle),o.pendingResponse=!1,void G();I()?(e.debug("Sending heartbeat"),C().send(D(d)),o.pendingResponse=!0):(e.warn("Failed to send heartbeat since WebSocket is not open"),v("sendHeartBeat"),G())},O=function(){r.exponentialBackOffTime=1e3,o.pendingResponse=!1,r.reconnectWebSocket=!0,clearTimeout(r.lifeTimeTimeoutHandle),clearInterval(o.intervalHandle),clearTimeout(r.exponentialTimeoutHandle),clearTimeout(r.webSocketInitCheckerTimeoutId)},N=function(){u.consecutiveFailedSubscribeAttempts=0,u.consecutiveNoResponseRequest=0,clearInterval(u.responseCheckIntervalId),clearInterval(u.reSubscribeIntervalId)},_=function(){try{e.info("WebSocket connection established!"),v("webSocketOnOpen"),r.connState=b,null===t.secondary&&S(i.connectionGain),O(),0===a.subscribed.size&&w(t.secondary)&&j(t.primary,"[Primary WebSocket] Closing WebSocket"),(a.subscribed.size>0||a.pending.size>0)&&(w(t.secondary)&&e.info("Subscribing secondary websocket to topics of primary websocket"),a.subscribed.forEach(function(e){a.subscriptionHistory.add(e),a.pending.add(e)}),a.subscribed.clear(),x()),T(),o.intervalHandle=setInterval(T,1e4),r.lifeTimeTimeoutHandle=setTimeout(function(){e.debug("Starting scheduled WebSocket manager reconnect"),G()},Date.parse(c.connConfig.webSocketTransport.expiry)-Date.now())}catch(n){e.error("Error after establishing WebSocket connection",n)}},E=function(n){e.info("Socket connection is closed",n),v("webSocketOnClose before-cleanup"),m(t.primary)&&(t.primary=null),m(t.secondary)&&(t.secondary=null),r.reconnectWebSocket&&(w(t.primary)||w(t.secondary)?m(t.primary)&&w(t.secondary)&&(e.info("[Primary] WebSocket Cleanly Closed"),t.primary=t.secondary,t.secondary=null):(e.warn("Neither primary websocket and nor secondary websocket have open connections, attempting to re-establish connection"),r.connState!==g?S(i.connectionLost):e.info("Ignoring connectionLost callback invocation"),r.connState=g,G()),v("webSocketOnClose after-cleanup"))},L=function(n){v("webSocketOnError"),e.error("WebSocketManager Error, error_event: ",n),G()},F=function(n){var r=JSON.parse(n.data);switch(r.topic){case f:if(e.debug("Subscription Message received from webSocket server",n.data),u.requestCompleted=!0,u.consecutiveNoResponseRequest=0,"success"===r.content.status)u.consecutiveFailedSubscribeAttempts=0,r.content.topics.forEach(function(e){a.subscriptionHistory.delete(e),a.pending.delete(e),a.subscribed.add(e)}),0===a.subscriptionHistory.size?w(t.secondary)&&(e.info("Successfully subscribed secondary websocket to all topics of primary websocket"),j(t.primary,"[Primary WebSocket] Closing WebSocket")):x(),S(i.subscriptionUpdate,r);else{if(clearInterval(u.reSubscribeIntervalId),++u.consecutiveFailedSubscribeAttempts,5===u.consecutiveFailedSubscribeAttempts)return S(i.subscriptionFailure,r),void(u.consecutiveFailedSubscribeAttempts=0);u.reSubscribeIntervalId=setInterval(function(){x()},500)}break;case d:e.debug("Heartbeat response received"),o.pendingResponse=!1;break;default:if(r.topic){if(e.debug("Message received for topic "+r.topic),w(t.primary)&&w(t.secondary)&&0===a.subscriptionHistory.size&&this===t.primary)return void e.warn("Ignoring Message for Topic "+r.topic+", to avoid duplicates");if(0===i.allMessage.size&&0===i.topic.size)return void e.warn("No registered callback listener for Topic",r.topic);S(i.allMessage,r),i.topic.has(r.topic)&&S(i.topic.get(r.topic),r)}else r.message?e.warn("WebSocketManager Message Error",r):e.warn("Invalid incoming message",r)}},x=function n(){if(u.consecutiveNoResponseRequest>3)return e.warn("Ignoring subscribePendingTopics since we have exhausted max subscription retries with no response"),void S(i.subscriptionFailure,s.getSubscriptionResponse(f,!1,Array.from(a.pending)));I()?(clearInterval(u.responseCheckIntervalId),C().send(D(f,{topics:Array.from(a.pending)})),u.requestCompleted=!1,u.responseCheckIntervalId=setInterval(function(){u.requestCompleted||(++u.consecutiveNoResponseRequest,n())},1e3)):e.warn("Ignoring subscribePendingTopics call since Default WebSocket is not open")},j=function(n,t){h(n,WebSocket.CONNECTING)||h(n,WebSocket.OPEN)?n.close(1e3,t):e.warn("Ignoring WebSocket Close request, WebSocket State: "+k(n))},R=function(e){j(t.primary,"[Primary] WebSocket "+e),j(t.secondary,"[Secondary] WebSocket "+e)},M=function(){var n=s.addJitter(r.exponentialBackOffTime,.3);Date.now()+n<=c.connConfig.urlConnValidTime?(e.debug("Scheduling WebSocket reinitialization, after delay "+n+" ms"),r.exponentialTimeoutHandle=setTimeout(function(){return A()},n),r.exponentialBackOffTime*=2):(e.warn("WebSocket URL is cannot be used to establish connection"),G())},P=function(){O(),N(),e.error("WebSocket Initialization failed"),r.websocketInitFailed=!0,R("Terminating WebSocket Manager"),clearInterval(y),S(i.initFailure)},D=function(e,n){return JSON.stringify({topic:e,content:n})},H=function(n){return!!(s.isObject(n)&&s.isObject(n.webSocketTransport)&&s.isNonEmptyString(n.webSocketTransport.url)&&s.validWSUrl(n.webSocketTransport.url)&&s.isNonEmptyString(n.webSocketTransport.expiry)&&Date.parse(n.webSocketTransport.expiry)-Date.now()>=36e5)||(e.error("Invalid WebSocket Connection Configuration",n),!1)},G=function n(){if(s.isNetworkOnline())if(r.websocketInitFailed)e.debug("WebSocket Init had failed, ignoring this getWebSocketConnConfig request");else{if(c.promiseCompleted)return O(),e.info("Fetching new WebSocket connection configuration"),c.promiseCompleted=!1,c.promiseHandle=i.getWebSocketTransport(),c.promiseHandle.then(function(n){return c.promiseCompleted=!0,e.debug("Successfully fetched webSocket connection configuration",n),H(n)?(c.connConfig=n,c.connConfig.urlConnValidTime=Date.now()+85e3,A()):(P(),{webSocketConnectionFailed:!0})},function(t){return c.promiseCompleted=!0,e.error("Failed to fetch webSocket connection configuration",t),setTimeout(function(){return n()},s.addJitter(5e3,.3)),{webSocketConnectionFailed:!0}});e.debug("There is an ongoing getWebSocketConnConfig request, this request will be ignored")}else e.info("Network offline, ignoring this getWebSocketConnConfig request")},A=function(){if(r.websocketInitFailed)return e.info("web-socket initializing had failed, aborting re-init"),{webSocketConnectionFailed:!0};if(!s.isNetworkOnline())return e.warn("System is offline aborting web-socket init"),{webSocketConnectionFailed:!0};e.info("Initializing Websocket Manager"),v("initWebSocket");try{if(H(c.connConfig)){var n=null;return w(t.primary)?(e.debug("Primary Socket connection is already open"),h(t.secondary,WebSocket.CONNECTING)||(e.debug("Establishing a secondary web-socket connection"),t.secondary=U()),n=t.secondary):(h(t.primary,WebSocket.CONNECTING)||(e.debug("Establishing a primary web-socket connection"),t.primary=U()),n=t.primary),r.webSocketInitCheckerTimeoutId=setTimeout(function(){w(n)||M()},1e3),{webSocketConnectionFailed:!1}}}catch(n){return e.error("Error Initializing web-socket-manager",n),P(),{webSocketConnectionFailed:!0}}},U=function(){var e=new WebSocket(c.connConfig.webSocketTransport.url);return e.addEventListener("open",_),e.addEventListener("message",F),e.addEventListener("error",L),e.addEventListener("close",E),e};this.init=function(n){if(s.assertTrue(s.isFunction(n),"transportHandle must be a function"),null===i.getWebSocketTransport)return i.getWebSocketTransport=n,G();e.warn("Web Socket Manager was already initialized")},this.onInitFailure=function(e){return s.assertTrue(s.isFunction(e),"cb must be a function"),i.initFailure.add(e),r.websocketInitFailed&&e(),function(){return i.initFailure.delete(e)}},this.onConnectionGain=function(e){return s.assertTrue(s.isFunction(e),"cb must be a function"),i.connectionGain.add(e),I()&&e(),function(){return i.connectionGain.delete(e)}},this.onConnectionLost=function(e){return s.assertTrue(s.isFunction(e),"cb must be a function"),i.connectionLost.add(e),r.connState===g&&e(),function(){return i.connectionLost.delete(e)}},this.onSubscriptionUpdate=function(e){return s.assertTrue(s.isFunction(e),"cb must be a function"),i.subscriptionUpdate.add(e),function(){return i.subscriptionUpdate.delete(e)}},this.onSubscriptionFailure=function(e){return s.assertTrue(s.isFunction(e),"cb must be a function"),i.subscriptionFailure.add(e),function(){return i.subscriptionFailure.delete(e)}},this.onMessage=function(e,n){return s.assertNotNull(e,"topicName"),s.assertTrue(s.isFunction(n),"cb must be a function"),i.topic.has(e)?i.topic.get(e).add(n):i.topic.set(e,new Set([n])),function(){return i.topic.get(e).delete(n)}},this.onAllMessage=function(e){return s.assertTrue(s.isFunction(e),"cb must be a function"),i.allMessage.add(e),function(){return i.allMessage.delete(e)}},this.subscribeTopics=function(e){s.assertNotNull(e,"topics"),s.assertIsList(e),e.forEach(function(e){a.subscribed.has(e)||a.pending.add(e)}),u.consecutiveNoResponseRequest=0,x()},this.sendMessage=function(n){if(s.assertIsObject(n,"payload"),void 0===n.topic||l.has(n.topic))e.warn("Cannot send message, Invalid topic",n);else{try{n=JSON.stringify(n)}catch(t){return void e.warn("Error stringify message",n)}I()?C().send(n):e.warn("Cannot send message, web socket connection is not open")}},this.closeWebSocket=function(){O(),N(),r.reconnectWebSocket=!1,clearInterval(y),R("User request to close WebSocket")}},L={create:function(){return new E},setGlobalConfig:function(e){var n=e.loggerConfig;W.updateLoggerConfig(n)},LogLevel:I,Logger:C}},function(e,n,t){var r;!function(){"use strict";var o={not_string:/[^s]/,not_bool:/[^t]/,not_type:/[^T]/,not_primitive:/[^v]/,number:/[diefg]/,numeric_arg:/[bcdiefguxX]/,json:/[j]/,not_json:/[^j]/,text:/^[^\x25]+/,modulo:/^\x25{2}/,placeholder:/^\x25(?:([1-9]\d*)\$|\(([^)]+)\))?(\+)?(0|'[^$])?(-)?(\d+)?(?:\.(\d+))?([b-gijostTuvxX])/,key:/^([a-z_][a-z_\d]*)/i,key_access:/^\.([a-z_][a-z_\d]*)/i,index_access:/^\[(\d+)\]/,sign:/^[+-]/};function i(e){return function(e,n){var t,r,c,s,a,u,l,f,p,d=1,b=e.length,g="";for(r=0;r<b;r++)if("string"==typeof e[r])g+=e[r];else if("object"==typeof e[r]){if((s=e[r]).keys)for(t=n[d],c=0;c<s.keys.length;c++){if(null==t)throw new Error(i('[sprintf] Cannot access property "%s" of undefined value "%s"',s.keys[c],s.keys[c-1]));t=t[s.keys[c]]}else t=s.param_no?n[s.param_no]:n[d++];if(o.not_type.test(s.type)&&o.not_primitive.test(s.type)&&t instanceof Function&&(t=t()),o.numeric_arg.test(s.type)&&"number"!=typeof t&&isNaN(t))throw new TypeError(i("[sprintf] expecting number but found %T",t));switch(o.number.test(s.type)&&(f=t>=0),s.type){case"b":t=parseInt(t,10).toString(2);break;case"c":t=String.fromCharCode(parseInt(t,10));break;case"d":case"i":t=parseInt(t,10);break;case"j":t=JSON.stringify(t,null,s.width?parseInt(s.width):0);break;case"e":t=s.precision?parseFloat(t).toExponential(s.precision):parseFloat(t).toExponential();break;case"f":t=s.precision?parseFloat(t).toFixed(s.precision):parseFloat(t);break;case"g":t=s.precision?String(Number(t.toPrecision(s.precision))):parseFloat(t);break;case"o":t=(parseInt(t,10)>>>0).toString(8);break;case"s":t=String(t),t=s.precision?t.substring(0,s.precision):t;break;case"t":t=String(!!t),t=s.precision?t.substring(0,s.precision):t;break;case"T":t=Object.prototype.toString.call(t).slice(8,-1).toLowerCase(),t=s.precision?t.substring(0,s.precision):t;break;case"u":t=parseInt(t,10)>>>0;break;case"v":t=t.valueOf(),t=s.precision?t.substring(0,s.precision):t;break;case"x":t=(parseInt(t,10)>>>0).toString(16);break;case"X":t=(parseInt(t,10)>>>0).toString(16).toUpperCase()}o.json.test(s.type)?g+=t:(!o.number.test(s.type)||f&&!s.sign?p="":(p=f?"+":"-",t=t.toString().replace(o.sign,"")),u=s.pad_char?"0"===s.pad_char?"0":s.pad_char.charAt(1):" ",l=s.width-(p+t).length,a=s.width&&l>0?u.repeat(l):"",g+=s.align?p+t+a:"0"===u?p+a+t:a+p+t)}return g}(function(e){if(s[e])return s[e];var n,t=e,r=[],i=0;for(;t;){if(null!==(n=o.text.exec(t)))r.push(n[0]);else if(null!==(n=o.modulo.exec(t)))r.push("%");else{if(null===(n=o.placeholder.exec(t)))throw new SyntaxError("[sprintf] unexpected placeholder");if(n[2]){i|=1;var c=[],a=n[2],u=[];if(null===(u=o.key.exec(a)))throw new SyntaxError("[sprintf] failed to parse named argument key");for(c.push(u[1]);""!==(a=a.substring(u[0].length));)if(null!==(u=o.key_access.exec(a)))c.push(u[1]);else{if(null===(u=o.index_access.exec(a)))throw new SyntaxError("[sprintf] failed to parse named argument key");c.push(u[1])}n[2]=c}else i|=2;if(3===i)throw new Error("[sprintf] mixing positional and named placeholders is not (yet) supported");r.push({placeholder:n[0],param_no:n[1],keys:n[2],sign:n[3],pad_char:n[4],align:n[5],width:n[6],precision:n[7],type:n[8]})}t=t.substring(n[0].length)}return s[e]=r}(e),arguments)}function c(e,n){return i.apply(null,[e].concat(n||[]))}var s=Object.create(null);n.sprintf=i,n.vsprintf=c,"undefined"!=typeof window&&(window.sprintf=i,window.vsprintf=c,void 0===(r=function(){return{sprintf:i,vsprintf:c}}.call(n,t,n,e))||(e.exports=r))}()},function(e,n,t){"use strict";t.r(n),function(e){t.d(n,"WebSocketManager",function(){return o});var r=t(0);e.connect=e.connect||{},connect.WebSocketManager=r.a;var o=r.a}.call(this,t(3))},function(e,n){var t;t=function(){return this}();try{t=t||new Function("return this")()}catch(e){"object"==typeof window&&(t=window)}e.exports=t}]);
//# sourceMappingURL=amazon-connect-websocket-manager.js.map