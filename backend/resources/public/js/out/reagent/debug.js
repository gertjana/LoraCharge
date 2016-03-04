// Compiled by ClojureScript 0.0-2371
goog.provide('reagent.debug');
goog.require('cljs.core');
reagent.debug.has_console = typeof console !== 'undefined';
reagent.debug.tracking = false;
if(typeof reagent.debug.warnings !== 'undefined')
{} else
{reagent.debug.warnings = cljs.core.atom.call(null,null);
}
if(typeof reagent.debug.track_console !== 'undefined')
{} else
{reagent.debug.track_console = (function (){var o = {};o.warn = ((function (o){
return (function() { 
var G__5453__delegate = function (args){return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__5453 = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__5453__delegate.call(this,args);};
G__5453.cljs$lang$maxFixedArity = 0;
G__5453.cljs$lang$applyTo = (function (arglist__5454){
var args = cljs.core.seq(arglist__5454);
return G__5453__delegate(args);
});
G__5453.cljs$core$IFn$_invoke$arity$variadic = G__5453__delegate;
return G__5453;
})()
;})(o))
;
o.error = ((function (o){
return (function() { 
var G__5455__delegate = function (args){return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__5455 = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__5455__delegate.call(this,args);};
G__5455.cljs$lang$maxFixedArity = 0;
G__5455.cljs$lang$applyTo = (function (arglist__5456){
var args = cljs.core.seq(arglist__5456);
return G__5455__delegate(args);
});
G__5455.cljs$core$IFn$_invoke$arity$variadic = G__5455__delegate;
return G__5455;
})()
;})(o))
;
return o;
})();
}
reagent.debug.track_warnings = (function track_warnings(f){reagent.debug.tracking = true;
cljs.core.reset_BANG_.call(null,reagent.debug.warnings,null);
f.call(null);
var warns = cljs.core.deref.call(null,reagent.debug.warnings);cljs.core.reset_BANG_.call(null,reagent.debug.warnings,null);
reagent.debug.tracking = false;
return warns;
});

//# sourceMappingURL=debug.js.map