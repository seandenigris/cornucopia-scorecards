define("amber-cornucopiascorecards/CornucopiaScorecards", ["amber/boot", "amber_core/Kernel-Objects"], function($boot){"use strict";
var $core=$boot.api,nil=$boot.nil,$recv=$boot.asReceiver,$globals=$boot.globals;
$core.addPackage('CornucopiaScorecards');
$core.packages["CornucopiaScorecards"].innerEval = function (expr) { return eval(expr); };
$core.packages["CornucopiaScorecards"].transport = {"type":"amd","amdNamespace":"amber-cornucopiascorecards"};

$core.addClass('CrEggSupplier', $globals.Object, ['brand', 'company', 'rating', 'location', 'marketArea', 'totalScore'], 'CornucopiaScorecards');
$core.addMethod(
$core.method({
selector: "brand",
protocol: 'accessing',
fn: function (){
var self=this;
var $1;
$1=self["@brand"];
return $1;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "brand\x0a\x09^ brand",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.CrEggSupplier);

$core.addMethod(
$core.method({
selector: "brand:",
protocol: 'accessing',
fn: function (aString){
var self=this;
self["@brand"]=aString;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString"],
source: "brand: aString\x0a\x09brand := aString",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.CrEggSupplier);

$core.addMethod(
$core.method({
selector: "company",
protocol: 'accessing',
fn: function (){
var self=this;
var $1;
$1=self["@company"];
return $1;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "company\x0a\x09^ company",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.CrEggSupplier);

$core.addMethod(
$core.method({
selector: "company:",
protocol: 'accessing',
fn: function (aString){
var self=this;
self["@company"]=aString;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString"],
source: "company: aString\x0a\x09company := aString",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.CrEggSupplier);

$core.addMethod(
$core.method({
selector: "location",
protocol: 'accessing',
fn: function (){
var self=this;
var $1;
$1=self["@location"];
return $1;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "location\x0a\x09^ location",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.CrEggSupplier);

$core.addMethod(
$core.method({
selector: "location:",
protocol: 'accessing',
fn: function (aString){
var self=this;
self["@location"]=aString;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString"],
source: "location: aString\x0a\x09location := aString",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.CrEggSupplier);

$core.addMethod(
$core.method({
selector: "marketArea",
protocol: 'accessing',
fn: function (){
var self=this;
var $1;
$1=self["@marketArea"];
return $1;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "marketArea\x0a\x09^ marketArea",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.CrEggSupplier);

$core.addMethod(
$core.method({
selector: "marketArea:",
protocol: 'accessing',
fn: function (aString){
var self=this;
self["@marketArea"]=aString;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString"],
source: "marketArea: aString\x0a\x09marketArea := aString",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.CrEggSupplier);

$core.addMethod(
$core.method({
selector: "printOn:",
protocol: 'printing',
fn: function (aStream){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$recv(aStream)._nextPutAll_(self["@brand"]);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["nextPutAll:"]=1;
//>>excludeEnd("ctx");
$recv(aStream)._nextPutAll_(" is rated a ");
$1=$recv(aStream)._print_(self["@rating"]);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"printOn:",{aStream:aStream},$globals.CrEggSupplier)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aStream"],
source: "printOn: aStream\x0a\x09aStream\x0a\x09\x09nextPutAll: brand;\x0a\x09\x09nextPutAll: ' is rated a ';\x0a\x09\x09print: rating",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["nextPutAll:", "print:"]
}),
$globals.CrEggSupplier);

$core.addMethod(
$core.method({
selector: "rating",
protocol: 'accessing',
fn: function (){
var self=this;
var $1;
$1=self["@rating"];
return $1;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "rating\x0a\x09^ rating",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.CrEggSupplier);

$core.addMethod(
$core.method({
selector: "rating:",
protocol: 'accessing',
fn: function (anInteger){
var self=this;
self["@rating"]=anInteger;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anInteger"],
source: "rating: anInteger\x0a\x09rating := anInteger",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.CrEggSupplier);

$core.addMethod(
$core.method({
selector: "totalScore",
protocol: 'accessing',
fn: function (){
var self=this;
var $1;
$1=self["@totalScore"];
return $1;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "totalScore\x0a\x09^ totalScore",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.CrEggSupplier);

$core.addMethod(
$core.method({
selector: "totalScore:",
protocol: 'accessing',
fn: function (anInteger){
var self=this;
self["@totalScore"]=anInteger;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anInteger"],
source: "totalScore: anInteger\x0a\x09totalScore := anInteger",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.CrEggSupplier);


$globals.CrEggSupplier.klass.iVarNames = ['all'];
$core.addMethod(
$core.method({
selector: "all",
protocol: 'accessing',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$2,$receiver;
$1=self["@all"];
if(($receiver = $1) == null || $receiver.isNil){
self._downloadAll();
} else {
$1;
};
$2=self["@all"];
return $2;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"all",{},$globals.CrEggSupplier.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "all\x0a\x09\x22In the Pharo version, #downloadAll returns the collection, but I can't figure out how to do that in Amber.\x0a\x09I asked a question on the mailing list http://forum.world.st/Baffling-Difference-between-Workspace-and-Inspector-tt4832487.html\x0a\x09But for now, we'll just modify slightly. I guess we could also just tweak the Pharo version to set #all: in #downloadAll\x22\x0a\x09\x22^ all ifNil: [ all := self downloadAll ]\x22\x0a\x09all ifNil: [ self downloadAll ].\x0a\x09^ all",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["ifNil:", "downloadAll"]
}),
$globals.CrEggSupplier.klass);

$core.addMethod(
$core.method({
selector: "all:",
protocol: 'private',
fn: function (aCollection){
var self=this;
self["@all"]=aCollection;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aCollection"],
source: "all: aCollection\x0a\x09all := aCollection",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.CrEggSupplier.klass);

$core.addMethod(
$core.method({
selector: "allAphabeticalByBrand",
protocol: 'accessing',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $2,$1;
$1=$recv($recv(self._all())._asOrderedCollection())._sort_((function(a,b){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$2=$recv(a)._brand();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["brand"]=1;
//>>excludeEnd("ctx");
return $recv($2).__lt($recv(b)._brand());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({a:a,b:b},$ctx1,1)});
//>>excludeEnd("ctx");
}));
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"allAphabeticalByBrand",{},$globals.CrEggSupplier.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "allAphabeticalByBrand\x0a\x09^ self all asOrderedCollection sort: [ :a :b | a brand < b brand ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["sort:", "asOrderedCollection", "all", "<", "brand"]
}),
$globals.CrEggSupplier.klass);

$core.addMethod(
$core.method({
selector: "brandsStartingWith:",
protocol: 'accessing',
fn: function (aString){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$recv(self._allAphabeticalByBrand())._select_((function(e){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv($recv(e)._brand())._beginsWith_(aString);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({e:e},$ctx1,1)});
//>>excludeEnd("ctx");
}));
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"brandsStartingWith:",{aString:aString},$globals.CrEggSupplier.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString"],
source: "brandsStartingWith: aString\x0a\x0a\x09^ self allAphabeticalByBrand select: [ :e | e brand beginsWith: aString ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["select:", "allAphabeticalByBrand", "beginsWith:", "brand"]
}),
$globals.CrEggSupplier.klass);

});
