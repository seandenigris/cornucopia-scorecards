define("amber-cornucopiascorecards/CornucopiaScorecards-Platform", ["amber/boot"
//>>excludeStart("imports", pragmas.excludeImports);
, "amber/jquery/Wrappers-JQuery"
//>>excludeEnd("imports");
, "amber_core/Kernel-Objects", "amber_core/Kernel-Collections", "amber-cornucopiascorecards/CornucopiaScorecards"], function($boot
//>>excludeStart("imports", pragmas.excludeImports);

//>>excludeEnd("imports");
){"use strict";
var $core=$boot.api,nil=$boot.nil,$recv=$boot.asReceiver,$globals=$boot.globals;
$core.addPackage('CornucopiaScorecards-Platform');
$core.packages["CornucopiaScorecards-Platform"].innerEval = function (expr) { return eval(expr); };
$core.packages["CornucopiaScorecards-Platform"].imports = ["amber/jquery/Wrappers-JQuery"];
$core.packages["CornucopiaScorecards-Platform"].transport = {"type":"amd","amdNamespace":"amber-cornucopiascorecards"};
$core.addMethod(
$core.method({
selector: "downloadAll",
protocol: '*CornucopiaScorecards-Platform',
fn: function (){
var self=this;
var response;
function $JQuery(){return $globals.JQuery||(typeof JQuery=="undefined"?nil:JQuery)}
function $CrEggSupplier(){return $globals.CrEggSupplier||(typeof CrEggSupplier=="undefined"?nil:CrEggSupplier)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
response=$recv($recv($JQuery())._current())._ajax_($globals.HashedCollection._newFromPairs_(["dataType","json","url","./egg_suppliers.json","async",false]));
$1=$recv($recv(response)._responseJSON())._collect_((function(e){
var supplier;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
supplier=$recv($CrEggSupplier())._new();
supplier;
$recv(e)._keysAndValuesDo_((function(k,v){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx3) {
//>>excludeEnd("ctx");
return $recv(supplier)._instVarNamed_put_(k,v);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx3) {$ctx3.fillBlock({k:k,v:v},$ctx2,2)});
//>>excludeEnd("ctx");
}));
return supplier;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({e:e,supplier:supplier},$ctx1,1)});
//>>excludeEnd("ctx");
}));
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"downloadAll",{response:response},$globals.CrEggSupplier.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "downloadAll\x0a\x09\x22This must be done syncronously. Solution adapted from http://stackoverflow.com/questions/13009755/getjson-synchronous\x22\x0a\x0a\x09| response |\x0a\x09response := JQuery current ajax: #{ #dataType -> 'json'. #url -> './egg_suppliers.json'. #async -> false }.\x0a\x09^ response responseJSON collect: [ :e |\x0a\x09\x09| supplier |\x0a\x09\x09supplier := CrEggSupplier new.\x0a\x09\x09e keysAndValuesDo: [ :k :v | supplier instVarNamed: k put: v ].\x0a\x09\x09supplier ].",
referencedClasses: ["JQuery", "CrEggSupplier"],
//>>excludeEnd("ide");
messageSends: ["ajax:", "current", "collect:", "responseJSON", "new", "keysAndValuesDo:", "instVarNamed:put:"]
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
