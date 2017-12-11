webpackJsonp([9],{34:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=n(0),s=n(9),c=n(40),a=n(50),o=n(82);n.n(o);n(35),i.a.config.productionTip=!1,i.a.config.flespiServer="https://flespi.io",-1===window.location.host.indexOf("localhost:9004")&&-1===window.location.host.indexOf("localhost:9004")||(i.a.config.flespiServer=""),i.a.use(s.G),s.a.set("#333333"),n(80),s.G.start(function(){new i.a({el:"#q-app",router:c.a,store:a.a,render:function(e){return e(n(84))}})})},35:function(e,t){},40:function(e,t,n){"use strict";function i(e){return function(){return n(42)("./"+e+".vue")}}var s=n(0),c=n(41);s.a.use(c.a),t.a=new c.a({routes:[{path:"/",component:i("Index")},{path:"/login",component:i("Login")},{path:"/login/:token",component:i("Login")},{path:"*",component:i("Error404")}]})},42:function(e,t,n){function i(e){var t=s[e];return t?n.e(t[1]).then(function(){return n(t[0])}):Promise.reject(new Error("Cannot find module '"+e+"'."))}var s={"./Device.vue":[90,7],"./DeviceList.vue":[93,3],"./Error404.vue":[96,6],"./Index.vue":[97,0],"./Login.vue":[95,4],"./Map.vue":[94,1],"./PostMessageModal.vue":[92,5],"./Queue.vue":[91,2]};i.keys=function(){return Object.keys(s)},i.id=42,e.exports=i},50:function(e,t,n){"use strict";var i=n(31),s=n(0),c=n(51),a=n(53),o=n(54),r=n(55),u=n(56);s.a.use(c.a),s.a.use(i.b);var f={token:"",devices:[],activeDevicesID:[],hasDevicesInit:!1,offline:!1};t.a=new i.b.Store({state:f,actions:a.a,mutations:o.a,getters:r.a,modules:u.a})},52:function(e,t){},53:function(e,t,n){"use strict";function i(e){var t=e.state,n=e.commit;return n("reqStart"),!!t.token&&a.a.http.get(a.a.config.flespiServer+"/registry/devices/all",{params:{fields:"id,name,ident,phone,telemetry,messages_ttl"}}).then(function(e){return e.json()}).then(function(e){if(n("reqSuccessful",{type:"devices",payload:e}),!t.hasDevicesInit){n("setDevicesInit");var i=o.e.get.item("TrackIt Active Devices");i&&i.length&&i.forEach(function(t){e.result.filter(function(e){return e.id===t}).length&&n("setActiveDevice",t)})}return e.result}).catch(function(e){n("reqFailed",e)})}function s(e,t){var n=(e.state,e.commit),i=t.data,s=t.id;return n("reqStart"),a.a.http.post(a.a.config.flespiServer+"/registry/devices/"+s+"/messages",i).then(function(e){return e.json()}).then(function(e){n("reqSuccessful",{type:"postMessage",payload:e})}).catch(function(e){n("reqFailed",e)})}function c(e){var t=(e.state,e.commit);a.a.http.get("/statics/icons/favicon-16x16.png?_="+(new Date).getTime()).then(function(e){200===e.status&&t("setOfflineFlag",!1)}).catch(function(e){console.log(e)})}var a=n(0),o=n(9);t.a={getDevices:i,postMessage:s,checkConnection:c}},54:function(e,t,n){"use strict";function i(e){}function s(e,t){var n=t.type,i=t.payload,s=i.result;switch(n){case"postMessage":p.F.create.positive({html:"Post message to devices with IDs "+s+" success",icon:"alarm_add",timeout:2500,bgColor:"white"});break;default:d.a.set(e,n,s)}}function c(e,t){switch(t.status){case 0:a(e,!0),l(e),d.a.set(e,"token","");break;case 401:r(e)}}function a(e,t){d.a.set(e,"offline",t)}function o(e,t){var n=t.replace("FlespiToken ","");t&&n.match(/^[a-z0-9]+$/i)?(d.a.http.headers.common.Authorization="FlespiToken "+n,p.e.set("X-Flespi-Token",n)):(n="",r(e)),d.a.set(e,"token",n)}function r(e){var t=p.b.get("X-Flespi-Token"),n=p.e.get.item("X-Flespi-Token");t&&n&&t===n&&p.b.remove("X-Flespi-Token"),p.e.remove("X-Flespi-Token"),d.a.http.headers.common.Authorization="",d.a.set(e,"token","")}function u(e,t){e.devices.filter(function(e){return e.id===t})[0].messages_ttl&&(e.activeDevicesID.push(t),p.e.set("TrackIt Active Devices",e.activeDevicesID))}function f(e,t){e.activeDevicesID=e.activeDevicesID.filter(function(e){return e!==t}),p.e.set("TrackIt Active Devices",e.activeDevicesID)}function v(e){e.hasDevicesInit=!0}function l(e){e.hasDevicesInit=!1,d.a.set(e,"devices",[]),d.a.set(e,"activeDevicesID",[])}var p=n(9),d=n(0);t.a={reqStart:i,reqSuccessful:s,reqFailed:c,setToken:o,clearToken:r,setActiveDevice:u,unsetActiveDevice:f,setDevicesInit:v,unsetDevicesInit:l,setOfflineFlag:a}},55:function(e,t,n){"use strict";t.a={}},56:function(e,t,n){"use strict";var i=n(57);t.a={messages:i.a}},57:function(e,t,n){"use strict";var i=n(58),s=n(59),c={entities:{},timestamp:0,activeDevicesID:[]};t.a={namespaced:!0,state:c,actions:i.a,mutations:s.a}},58:function(e,t,n){"use strict";function i(e){var t=e.state,n=e.commit,i=e.rootState;n("reqStart");var s={count:10,reverse:!0,filter:"position.latitude,position.longitude",from:t.timestamp+1||0};return!(!i.token||!t.activeDevicesID.length)&&o.a.http.get(o.a.config.flespiServer+"/registry/devices/"+t.activeDevicesID+"/messages",{params:{data:a()(s)}}).then(function(e){return e.json()}).then(function(e){n("reqSuccessful",e)}).catch(function(e){n("reqFailed",e,{root:!0})})}function s(e,t){var n=e.state,i=e.commit,s=e.rootState;i("reqStart");var c={count:10,reverse:!0,filter:"position.latitude,position.longitude",to:n.timestamp||0};return n.entities[t]||o.a.set(n.entities,t,[]),!!s.token&&o.a.http.get(o.a.config.flespiServer+"/registry/devices/"+t+"/messages",{params:{data:a()(c)}}).then(function(e){return e.json()}).then(function(e){i("reqSuccessful",e)}).catch(function(e){i("reqFailed",e)})}var c=n(33),a=n.n(c),o=n(0);t.a={get:i,getHistoryByDeviceID:s}},59:function(e,t,n){"use strict";function i(e){}function s(e,t){var n=t.result;e.activeDevicesID.forEach(function(t){var i=n.filter(function(e){return e.device_id===t});if(!i.length)return e.entities[t]||f.a.set(e.entities,t,[]),!1;var s=e.entities[t]||[];f.a.set(e.entities,t,[].concat(u()(i),u()(s)).slice(0,10))}),f.a.set(e,"timestamp",parseInt(e.activeDevicesID.reduce(function(t,n){return e.entities[n].length&&e.entities[n][0].timestamp>t?e.entities[n][0].timestamp:t},0)))}function c(e){e.activeDevicesID.length&&(f.a.set(e,"entities",{}),f.a.set(e,"activeDevicesID",[]),f.a.set(e,"timestamp",0))}function a(e,t){f.a.delete(e.entities,t)}function o(e,t){f.a.set(e,"activeDevicesID",t)}var r=n(60),u=n.n(r),f=n(0);t.a={reqStart:i,reqSuccessful:s,clear:c,clearByID:a,setActiveDevicesID:o}},81:function(e,t){},83:function(e,t){},84:function(e,t,n){function i(e){n(85)}var s=n(29)(n(86),n(87),i,null,null);e.exports=s.exports},85:function(e,t){},86:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={}},87:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"q-app"}},[n("router-view")],1)},staticRenderFns:[]}}},[34]);