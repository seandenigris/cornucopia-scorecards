define("amber-cornucopiascorecards/CornucopiaScorecards-Platform", ["amber/boot", "amber_core/Kernel-Objects", "amber-cornucopiascorecards/CornucopiaScorecards", "amber_core/Kernel-Collections"], function($boot){"use strict";
var $core=$boot.api,nil=$boot.nil,$recv=$boot.asReceiver,$globals=$boot.globals;
$core.addPackage('CornucopiaScorecards-Platform');
$core.packages["CornucopiaScorecards-Platform"].innerEval = function (expr) { return eval(expr); };
$core.packages["CornucopiaScorecards-Platform"].transport = {"type":"amd","amdNamespace":"amber-cornucopiascorecards"};
$core.addMethod(
$core.method({
selector: "downloadAll",
protocol: '*CornucopiaScorecards-Platform',
fn: function (){
var self=this;
function $JQuery(){return $globals.JQuery||(typeof JQuery=="undefined"?nil:JQuery)}
function $CrEggSupplier(){return $globals.CrEggSupplier||(typeof CrEggSupplier=="undefined"?nil:CrEggSupplier)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv($recv($JQuery())._current())._getJSON_onSuccess_("./egg_suppliers.json",(function(json){
var suppliers;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
suppliers=$recv(json)._collect_((function(e){
var supplier;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx3) {
//>>excludeEnd("ctx");
supplier=$recv($CrEggSupplier())._new();
supplier;
$recv(e)._keysAndValuesDo_((function(k,v){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx4) {
//>>excludeEnd("ctx");
return $recv(supplier)._instVarAt_put_(k,v);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx4) {$ctx4.fillBlock({k:k,v:v},$ctx3,3)});
//>>excludeEnd("ctx");
}));
return supplier;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx3) {$ctx3.fillBlock({e:e,supplier:supplier},$ctx2,2)});
//>>excludeEnd("ctx");
}));
suppliers;
return self._all_(suppliers);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({json:json,suppliers:suppliers},$ctx1,1)});
//>>excludeEnd("ctx");
}));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"downloadAll",{},$globals.CrEggSupplier.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "downloadAll\x0a\x0a\x09JQuery current\x0a\x09\x09getJSON: './egg_suppliers.json'\x0a\x09\x09onSuccess: [ :json | | suppliers |\x0a\x09\x09\x09suppliers := json collect: [ :e |\x0a\x09\x09\x09\x09| supplier |\x0a\x09\x09\x09\x09supplier := CrEggSupplier new.\x0a\x09\x09\x09\x09e keysAndValuesDo: [ :k :v | supplier instVarAt: k put: v ].\x0a\x09\x09\x09\x09supplier ].\x0a\x09\x09\x09self all: suppliers ].",
referencedClasses: ["JQuery", "CrEggSupplier"],
//>>excludeEnd("ide");
messageSends: ["getJSON:onSuccess:", "current", "collect:", "new", "keysAndValuesDo:", "instVarAt:put:", "all:"]
}),
$globals.CrEggSupplier.klass);

$core.addMethod(
$core.method({
selector: "instVarNamed:put:",
protocol: '*CornucopiaScorecards-Platform',
fn: function (aString,anObject){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=self._instVarAt_put_(aString,anObject);
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"instVarNamed:put:",{aString:aString,anObject:anObject},$globals.ProtoObject)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString", "anObject"],
source: "instVarNamed: aString put: anObject\x0a\x09^ self instVarAt: aString put: anObject",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["instVarAt:put:"]
}),
$globals.ProtoObject);

$core.addMethod(
$core.method({
selector: "print:",
protocol: '*CornucopiaScorecards-Platform',
fn: function (anObject){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv(anObject)._printOn_(self);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"print:",{anObject:anObject},$globals.Stream)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anObject"],
source: "print: anObject\x0a\x0a\x09anObject printOn: self",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["printOn:"]
}),
$globals.Stream);

});
