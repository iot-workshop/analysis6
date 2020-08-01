(function(e){function t(t){for(var r,a,i=t[0],c=t[1],l=t[2],d=0,f=[];d<i.length;d++)a=i[d],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&f.push(o[a][0]),o[a]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(e[r]=c[r]);u&&u(t);while(f.length)f.shift()();return s.push.apply(s,l||[]),n()}function n(){for(var e,t=0;t<s.length;t++){for(var n=s[t],r=!0,i=1;i<n.length;i++){var c=n[i];0!==o[c]&&(r=!1)}r&&(s.splice(t--,1),e=a(a.s=n[0]))}return e}var r={},o={app:0},s=[];function a(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=e,a.c=r,a.d=function(e,t,n){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)a.d(n,r,function(t){return e[t]}.bind(null,r));return n},a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="/analysis6/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],c=i.push.bind(i);i.push=t,i=i.slice();for(var l=0;l<i.length;l++)t(i[l]);var u=c;s.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";var r=n("85ec"),o=n.n(r);o.a},"10c6":function(e,t,n){"use strict";var r=n("ead6"),o=n.n(r);o.a},"13f3":function(e,t,n){},2271:function(e,t,n){"use strict";var r=n("13f3"),o=n.n(r);o.a},"2c6d":function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("b0c0"),n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),o=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"app"}},[r("img",{attrs:{alt:"Analytics logo",width:"30%",src:n("d9e5")}}),r("qrcode",{attrs:{value:e.url}}),r("HelloWorld",{attrs:{msg:"Welcome to Your Analytics (#"+e.currentSession+")",currentSessionID:e.currentSession}}),e._m(0)],1)},s=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("p",{staticStyle:{color:"#999","font-size":"small"}},[e._v("ShakeIT is a simple and fun Internet of Things game, used for the development of an IoT showcase in purpose of a thesis."),n("br"),e._v(" © Stefanie Motzokan, 2020 "),n("br"),e._v("This work is licensed under a "),n("a",{attrs:{href:"http://creativecommons.org/licenses/by-sa/3.0/"}},[e._v("Creative Commons Attribution-ShareAlike 3.0 License")])])}],a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"hello"},[n("div",{staticClass:"StartButton"},[n("button",{staticClass:"start",attrs:{disabled:e.clicked},on:{click:e.startCountdown}},[e._v("Start IT")])]),n("div",{staticClass:"countdown-wrapper"},[e.clicked&&0!==e.counter?n("div",{attrs:{id:"countdown"}},[n("p",[e._v(e._s(e.counter))])]):e._e(),e.clicked&&0===e.counter?n("div",{attrs:{id:"timeover"}},[n("p",[e._v("Time is over!")])]):e._e()]),n("h1",[e._v(e._s(e.msg))]),e.sessionTimeout?n("p",{staticClass:"session-timeout"},[e._v("Session expired!")]):e._e(),n("div",{staticClass:"realtime"},[n("details",{attrs:{open:"open"}},[n("summary",[e._v("Realtime data")]),n("RealtimeResults")],1)]),n("div",{staticClass:"outputSession"},[n("details",[n("summary",[e._v("Results for your current session")]),n("ResultTable",{ref:"session",attrs:{overall:!1,url:e.url_session}})],1)]),n("div",{staticClass:"outputHighscore"},[n("details",[n("summary",[e._v("Overall highscore")]),n("ResultTable",{ref:"overall",attrs:{overall:!0,url:e.url_overall}})],1)])])},i=[],c=(n("96cf"),n("1da1")),l=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("table",[n("thead",[n("tr",[n("th",[e._v("Rank")]),n("th",[e._v("Name")]),n("th",[e._v("Energy")]),e.overall?n("th",[e._v("Date")]):e._e()])]),n("tbody",[e.list.length<=0?n("tr",[e._v("Loading...")]):e._e(),e._l(e.list,(function(t,r){return void 0!==e.list||e.list.length>0?n("tr",[n("td",[e._v(e._s(r+1))]),n("td",[e._v(e._s(t.deviceID))]),n("td",[e._v(e._s(t.energy))]),e.overall?n("td",[e._v(e._s(e.getDateFromSession(t.sessionID)))]):e._e()]):e._e()}))],2)])},u=[],d=(n("fb6a"),n("bc3a").default),f={name:"ResultTable",props:{url:String,overall:Boolean},data:function(){return{list:[]}},created:function(){this.getData()},methods:{getData:function(){var e=Object(c["a"])(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,d.get(this.url);case 3:t=e.sent,console.log(t.data),this.list=t.data,e.next=11;break;case 8:e.prev=8,e.t0=e["catch"](0),console.log("Error getting data: "+e.t0);case 11:case"end":return e.stop()}}),e,this,[[0,8]])})));function t(){return e.apply(this,arguments)}return t}(),getDateFromSession:function(e){return e.slice(7,9)+"/"+e.slice(5,7)+"/"+e.slice(1,5)}}},p=f,h=(n("10c6"),n("2877")),m=Object(h["a"])(p,l,u,!1,null,"25d6051f",null),v=m.exports,g=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"realtimeDataWrapper"},[n("div",{staticClass:"realtimeData"},e._l(e.players,(function(e,t){return n("div",{key:t},[n("div",{staticClass:"realtimePlayer"},[n("RealtimePlayer",{attrs:{deviceID:e}})],1)])})),0)])},_=[],b=(n("c975"),function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("GChart",{attrs:{type:"LineChart",data:e.chartData,options:e.chartOptions}})}),y=[],w=n("cb43"),D=new r["a"],x={name:"RealtimePlayer",components:{GChart:w["GChart"]},props:{deviceID:String},data:function(){return{firstTimestamp:0,chartData:[["Date","X-Axis","Y-Axis","Z-Axis",{type:"string",role:"annotation"},{type:"string",role:"annotationText"}],[-1,0,0,0,null,null]],chartOptions:{title:this.deviceID,hAxis:{title:"Time"},vAxis:{title:"Acceleration"},width:900,explorer:{actions:["dragToZoom","rightClickToReset"],axis:"horizontal",keepInBounds:!0,maxZoomIn:10},annotations:{style:"line"}}}},created:function(){var e=this;console.log("Created method"),D.$on("receivemessage",(function(t){if(console.log("event received"),console.log(t),e.deviceID===t[0].deviceID)for(var n in console.log(e.deviceID),0===e.firstTimestamp&&(e.firstTimestamp=t[0].sendingTimestamp),console.log("Push it"),t)e.chartData.push([t[n].sendingTimestamp-e.firstTimestamp,t[n].deviceCoordinateX,t[n].deviceCoordinateY,t[n].deviceCoordinateZ,null,null])})),D.$on("startgame",(function(t){console.log("start event received"+t),e.chartData.push([t-e.firstTimestamp,0,0,0,"start","Start-Annotation"]),setTimeout((function(){e.chartData.push([t-e.firstTimestamp+1e4,0,0,0,"end","End-Annotation"])}),1e4)}))}},T=x,S=Object(h["a"])(T,b,y,!1,null,"f34fa81c",null),k=S.exports,C=n("1a9a"),R=n("bc3a").default,O={name:"RealtimeResults",components:{RealtimePlayer:k},data:function(){return{ready:!1,players:[]}},mounted:function(){var e=this;this.getSignalRConnectionInfo().then((function(t){return e.getConnectionInfo(t)}))},methods:{getConnectionInfo:function(e){var t=this;console.log("connInfo "+this.players),console.log(e.url+"  token  "+e.accessToken),this.ready=!0;var n={accessTokenFactory:function(){return e.accessToken}},r=(new C.HubConnectionBuilder).withUrl(e.url,n).configureLogging(C.LogLevel.Information).build();r.on("newMessage",(function(e){console.log("Connection from SignalR with message: "),console.log(e),console.log("connInfoON "+t.players);var n=JSON.parse("["+e+"]"),r=n[0].deviceID;-1===t.players.indexOf(r)&&t.players.push(r),console.log("Before Event schmeiß"),D.$emit("receivemessage",n),console.log("Nach Event schmeiß")})),r.onclose((function(){return console.log("disconnected")})),console.log("connecting..."),r.start().then((function(){return console.log("connected!")})).catch(console.error)},getAxiosConfig:function(){var e={headers:{}};return e},getSignalRConnectionInfo:function(){var e=Object(c["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.abrupt("return",R.post("https://workshop-functions6.azurewebsites.net/api/negotiate",null,this.getAxiosConfig()).then((function(e){return e.data})));case 1:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}()}},I=O,A=(n("2271"),Object(h["a"])(I,g,_,!1,null,"69859e5a",null)),j=A.exports,$=n("bc3a").default,E={name:"HelloWorld",components:{RealtimeResults:j,ResultTable:v},props:{msg:String,currentSessionID:String},data:function(){return{clicked:!1,counter:10,url_overall:"https://workshop-functions6.azurewebsites.net/api/DataAnalytics",url_session:void 0,sessionTimeout:!1}},methods:{startCountdown:function(){this.clicked=!0;var e=Date.now();this.url_session="https://workshop-functions6.azurewebsites.net/api/DataAnalyticsSession?session="+this.currentSessionID+"&begin="+e,D.$emit("startgame",e),this.countdownTimer()},countdownTimer:function(){var e=Object(c["a"])(regeneratorRuntime.mark((function e(){var t=this;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(0===this.counter){e.next=4;break}setTimeout((function(){t.counter--,t.countdownTimer()}),1e3),e.next=9;break;case 4:return console.log(this.url_session),e.next=7,this.$refs.session.getData();case 7:return e.next=9,this.$refs.overall.getData();case 9:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),deleteAccelerometerData:function(){var e=Object(c["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,$.post("https://workshop-functions6.azurewebsites.net/api/DeleteOldAccelerometerData");case 3:console.log("AccelerometerData from current session deleted"),e.next=9;break;case 6:e.prev=6,e.t0=e["catch"](0),console.log("Error deleting accelerometer data: "+e.t0);case 9:case"end":return e.stop()}}),e,null,[[0,6]])})));function t(){return e.apply(this,arguments)}return t}()},created:function(){var e=this;setTimeout((function(){e.sessionTimeout=!0,e.deleteAccelerometerData()}),3e5)}},P=E,M=(n("8806"),Object(h["a"])(P,a,i,!1,null,"cab4a26c",null)),z=M.exports,L=n("e19f").sprintf,B={name:"app",components:{HelloWorld:z},created:function(){this.count=Math.floor(101*Math.random());var e=new Date(Date.now());this.currentSession=L("S%04d%02d%02d%03d_%02d",e.getFullYear(),e.getMonth()+1,e.getDate(),e.getMilliseconds(),this.count),this.url="https://iot-workshop.github.io/iotgame6?session="+this.currentSession},data:function(){return{currentSession:String,count:1,url:String}}},H=B,W=(n("034f"),Object(h["a"])(H,o,s,!1,null,null,null)),F=W.exports,N=n("b2e5"),Y=n.n(N);r["a"].config.productionTip=!1,r["a"].component(Y.a.name,Y.a),r["a"].use(w["default"]),new r["a"]({render:function(e){return e(F)}}).$mount("#app")},"85ec":function(e,t,n){},8806:function(e,t,n){"use strict";var r=n("2c6d"),o=n.n(r);o.a},d9e5:function(e,t,n){e.exports=n.p+"img/analytics.9135f0ff.png"},ead6:function(e,t,n){}});
//# sourceMappingURL=app.4ac805fb.js.map