define("amber-cornucopiascorecards/CornucopiaScorecardsApp", ["amber/boot"
//>>excludeStart("imports", pragmas.excludeImports);
, "amber/jquery/Wrappers-JQuery"
//>>excludeEnd("imports");
, "amber_core/Kernel-Objects"], function($boot
//>>excludeStart("imports", pragmas.excludeImports);

//>>excludeEnd("imports");
){"use strict";
var $core=$boot.api,nil=$boot.nil,$recv=$boot.asReceiver,$globals=$boot.globals;
$core.addPackage('CornucopiaScorecardsApp');
$core.packages["CornucopiaScorecardsApp"].innerEval = function (expr) { return eval(expr); };
$core.packages["CornucopiaScorecardsApp"].imports = ["amber/jquery/Wrappers-JQuery"];
$core.packages["CornucopiaScorecardsApp"].transport = {"type":"amd","amdNamespace":"amber-cornucopiascorecards"};

$core.addClass('CornucopiaScorecardsApp', $globals.Object, [], 'CornucopiaScorecardsApp');
$core.addMethod(
$core.method({
selector: "augmentPage",
protocol: 'starting',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
self._initializeSupplierAutoComplete();
self._listSuppliers();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"augmentPage",{},$globals.CornucopiaScorecardsApp)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "augmentPage\x0a\x09self initializeSupplierAutoComplete.\x0a\x09self listSuppliers.",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["initializeSupplierAutoComplete", "listSuppliers"]
}),
$globals.CornucopiaScorecardsApp);

$core.addMethod(
$core.method({
selector: "initializeSupplierAutoComplete",
protocol: 'private-starting',
fn: function (){
var self=this;
function $CrEggSupplier(){return $globals.CrEggSupplier||(typeof CrEggSupplier=="undefined"?nil:CrEggSupplier)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv("#suppliers"._asJQuery())._autocomplete_($globals.HashedCollection._newFromPairs_(["source",(function(req,res){
var matches,matchStrings;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
matches=$recv($CrEggSupplier())._brandsStartingWith_($recv(req)._term());
matches;
matchStrings=$recv(matches)._collect_((function(e){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx3) {
//>>excludeEnd("ctx");
return $recv(e)._printString();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx3) {$ctx3.fillBlock({e:e},$ctx2,2)});
//>>excludeEnd("ctx");
}));
matchStrings;
return $recv(res)._value_(matchStrings);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({req:req,res:res,matches:matches,matchStrings:matchStrings},$ctx1,1)});
//>>excludeEnd("ctx");
})]));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"initializeSupplierAutoComplete",{},$globals.CornucopiaScorecardsApp)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "initializeSupplierAutoComplete\x0a\x09'#suppliers' asJQuery autocomplete: #{ 'source' -> [ :req :res |\x0a\x09\x09| matches matchStrings | \x0a\x09\x09matches := CrEggSupplier brandsStartingWith: req term.\x0a\x09\x09matchStrings := matches collect: [ :e | e printString ].\x0a\x09\x09res value: matchStrings ] }.",
referencedClasses: ["CrEggSupplier"],
//>>excludeEnd("ide");
messageSends: ["autocomplete:", "asJQuery", "brandsStartingWith:", "term", "collect:", "printString", "value:"]
}),
$globals.CornucopiaScorecardsApp);

$core.addMethod(
$core.method({
selector: "listSuppliers",
protocol: 'private-starting',
fn: function (){
var self=this;
function $CrEggSupplier(){return $globals.CrEggSupplier||(typeof CrEggSupplier=="undefined"?nil:CrEggSupplier)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$2;
$recv($recv($CrEggSupplier())._allAphabeticalByBrand())._do_((function(e){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$1="#supplier-list"._asJQuery();
$2=$recv("<li>".__comma($recv(e)._printString())).__comma("</li>");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx[","]=1;
//>>excludeEnd("ctx");
return $recv($1)._append_($2);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({e:e},$ctx1,1)});
//>>excludeEnd("ctx");
}));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"listSuppliers",{},$globals.CornucopiaScorecardsApp)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "listSuppliers\x0a\x09CrEggSupplier allAphabeticalByBrand do: [ :e | '#supplier-list' asJQuery append: '<li>', e printString, '</li>' ]",
referencedClasses: ["CrEggSupplier"],
//>>excludeEnd("ide");
messageSends: ["do:", "allAphabeticalByBrand", "append:", "asJQuery", ",", "printString"]
}),
$globals.CornucopiaScorecardsApp);


$core.addMethod(
$core.method({
selector: "start",
protocol: 'starting',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv(self._new())._augmentPage();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"start",{},$globals.CornucopiaScorecardsApp.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "start\x0a\x09self new augmentPage",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["augmentPage", "new"]
}),
$globals.CornucopiaScorecardsApp.klass);

});
