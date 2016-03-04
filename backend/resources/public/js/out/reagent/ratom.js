// Compiled by ClojureScript 0.0-2371
goog.provide('reagent.ratom');
goog.require('cljs.core');
goog.require('reagent.impl.util');
goog.require('reagent.impl.util');
goog.require('reagent.debug');
goog.require('reagent.impl.batching');
goog.require('reagent.impl.batching');
goog.require('clojure.set');
goog.require('clojure.set');
if(typeof reagent.ratom.debug !== 'undefined')
{} else
{reagent.ratom.debug = false;
}
if(typeof reagent.ratom.generation !== 'undefined')
{} else
{reagent.ratom.generation = (0);
}
if(typeof reagent.ratom._running !== 'undefined')
{} else
{reagent.ratom._running = cljs.core.atom.call(null,(0));
}
reagent.ratom.reactive_QMARK_ = (function reactive_QMARK_(){return cljs.core.some_QMARK_.call(null,reagent.ratom._STAR_ratom_context_STAR_);
});
reagent.ratom.running = (function running(){return cljs.core.deref.call(null,reagent.ratom._running);
});
reagent.ratom.arr_len = (function arr_len(x){if((x == null))
{return (0);
} else
{return x.length;
}
});
reagent.ratom.arr_eq = (function arr_eq(x,y){var len = reagent.ratom.arr_len.call(null,x);var and__3628__auto__ = (len === reagent.ratom.arr_len.call(null,y));if(and__3628__auto__)
{var i = (0);while(true){
var or__3640__auto__ = (i === len);if(or__3640__auto__)
{return or__3640__auto__;
} else
{if(((x[i]) === (y[i])))
{{
var G__5453 = (i + (1));
i = G__5453;
continue;
}
} else
{return false;
}
}
break;
}
} else
{return and__3628__auto__;
}
});
reagent.ratom.in_context = (function in_context(obj,f){var _STAR_ratom_context_STAR_5455 = reagent.ratom._STAR_ratom_context_STAR_;try{reagent.ratom._STAR_ratom_context_STAR_ = obj;
return f.call(null);
}finally {reagent.ratom._STAR_ratom_context_STAR_ = _STAR_ratom_context_STAR_5455;
}});
reagent.ratom.deref_capture = (function deref_capture(f,r){r.captured = null;
r.ratomGeneration = reagent.ratom.generation = (reagent.ratom.generation + (1));

var res = reagent.ratom.in_context.call(null,r,f);var c = r.captured;r.dirty_QMARK_ = false;
if(reagent.ratom.arr_eq.call(null,c,r.watching))
{} else
{r._update_watching(c);
}
return res;
});
reagent.ratom.notify_deref_watcher_BANG_ = (function notify_deref_watcher_BANG_(derefed){var temp__4429__auto__ = reagent.ratom._STAR_ratom_context_STAR_;if((temp__4429__auto__ == null))
{return null;
} else
{var r = temp__4429__auto__;var c = r.captured;if((c == null))
{return r.captured = [derefed];
} else
{return c.push(derefed);
}
}
});
reagent.ratom.check_watches = (function check_watches(old,new$){if(reagent.ratom.debug)
{cljs.core.swap_BANG_.call(null,reagent.ratom._running,cljs.core._PLUS_,(cljs.core.count.call(null,new$) - cljs.core.count.call(null,old)));
} else
{}
return new$;
});
reagent.ratom.add_w = (function add_w(this$,key,f){var w = this$.watches;this$.watches = reagent.ratom.check_watches.call(null,w,cljs.core.assoc.call(null,w,key,f));
return this$.watchesArr = null;
});
reagent.ratom.remove_w = (function remove_w(this$,key){var w = this$.watches;this$.watches = reagent.ratom.check_watches.call(null,w,cljs.core.dissoc.call(null,w,key));
return this$.watchesArr = null;
});
reagent.ratom.notify_w = (function notify_w(this$,old,new$){var w = this$.watchesArr;var a = (((w == null))?this$.watchesArr = cljs.core.reduce_kv.call(null,((function (w){
return (function (p1__5456_SHARP_,p2__5457_SHARP_,p3__5458_SHARP_){var G__5460 = p1__5456_SHARP_;G__5460.push(p2__5457_SHARP_);
G__5460.push(p3__5458_SHARP_);
return G__5460;
});})(w))
,[],this$.watches):w);var len = a.length;var i = (0);while(true){
if((i < len))
{var k_5461 = (a[i]);var f_5462 = (a[(i + (1))]);f_5462.call(null,k_5461,this$,old,new$);
{
var G__5463 = ((2) + i);
i = G__5463;
continue;
}
} else
{return null;
}
break;
}
});
reagent.ratom.pr_atom = (function pr_atom(a,writer,opts,s){cljs.core._write.call(null,writer,("#<"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(s)+" "));
cljs.core.pr_writer.call(null,(function (){var _STAR_ratom_context_STAR_5465 = reagent.ratom._STAR_ratom_context_STAR_;try{reagent.ratom._STAR_ratom_context_STAR_ = null;
return cljs.core._deref.call(null,a);
}finally {reagent.ratom._STAR_ratom_context_STAR_ = _STAR_ratom_context_STAR_5465;
}})(),writer,opts);
return cljs.core._write.call(null,writer,">");
});
if(typeof reagent.ratom.rea_queue !== 'undefined')
{} else
{reagent.ratom.rea_queue = null;
}
reagent.ratom.rea_enqueue = (function rea_enqueue(r){if((reagent.ratom.rea_queue == null))
{reagent.ratom.rea_queue = [];
reagent.impl.batching.schedule.call(null);
} else
{}
return reagent.ratom.rea_queue.push(r);
});
reagent.ratom.flush_BANG_ = (function flush_BANG_(){while(true){
var q = reagent.ratom.rea_queue;if((q == null))
{return null;
} else
{reagent.ratom.rea_queue = null;
var n__4510__auto___5466 = q.length;var i_5467 = (0);while(true){
if((i_5467 < n__4510__auto___5466))
{(q[i_5467])._try_run();
{
var G__5468 = (i_5467 + (1));
i_5467 = G__5468;
continue;
}
} else
{}
break;
}
{
continue;
}
}
break;
}
});
reagent.impl.batching.ratom_flush = reagent.ratom.flush_BANG_;
reagent.ratom.IReactiveAtom = (function (){var obj5470 = {};return obj5470;
})();

/**
* @constructor
*/
reagent.ratom.RAtom = (function (state,meta,validator,watches){
this.state = state;
this.meta = meta;
this.validator = validator;
this.watches = watches;
this.cljs$lang$protocol_mask$partition0$ = 2153938944;
this.cljs$lang$protocol_mask$partition1$ = 114690;
})
reagent.ratom.RAtom.cljs$lang$type = true;
reagent.ratom.RAtom.cljs$lang$ctorStr = "reagent.ratom/RAtom";
reagent.ratom.RAtom.cljs$lang$ctorPrWriter = (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){return cljs.core._write.call(null,writer__4218__auto__,"reagent.ratom/RAtom");
});
reagent.ratom.RAtom.prototype.reagent$ratom$IReactiveAtom$ = true;
reagent.ratom.RAtom.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (a,w,opts){var self__ = this;
var a__$1 = this;return reagent.ratom.pr_atom.call(null,a__$1,w,opts,"Atom:");
});
reagent.ratom.RAtom.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.meta;
});
reagent.ratom.RAtom.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return goog.getUid(this$__$1);
});
reagent.ratom.RAtom.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (o,other){var self__ = this;
var o__$1 = this;return (o__$1 === other);
});
reagent.ratom.RAtom.prototype.cljs$core$IReset$_reset_BANG_$arity$2 = (function (a,new_value){var self__ = this;
var a__$1 = this;if((self__.validator == null))
{} else
{if(cljs.core.truth_(self__.validator.call(null,new_value)))
{} else
{throw (new Error(("Assert failed: Validator rejected reference state\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"validator","validator",-325659154,null),new cljs.core.Symbol(null,"new-value","new-value",-1567397401,null)))))));
}
}
var old_value = self__.state;self__.state = new_value;
if((self__.watches == null))
{} else
{reagent.ratom.notify_w.call(null,a__$1,old_value,new_value);
}
return new_value;
});
reagent.ratom.RAtom.prototype.cljs$core$ISwap$_swap_BANG_$arity$2 = (function (a,f){var self__ = this;
var a__$1 = this;return cljs.core._reset_BANG_.call(null,a__$1,f.call(null,self__.state));
});
reagent.ratom.RAtom.prototype.cljs$core$ISwap$_swap_BANG_$arity$3 = (function (a,f,x){var self__ = this;
var a__$1 = this;return cljs.core._reset_BANG_.call(null,a__$1,f.call(null,self__.state,x));
});
reagent.ratom.RAtom.prototype.cljs$core$ISwap$_swap_BANG_$arity$4 = (function (a,f,x,y){var self__ = this;
var a__$1 = this;return cljs.core._reset_BANG_.call(null,a__$1,f.call(null,self__.state,x,y));
});
reagent.ratom.RAtom.prototype.cljs$core$ISwap$_swap_BANG_$arity$5 = (function (a,f,x,y,more){var self__ = this;
var a__$1 = this;return cljs.core._reset_BANG_.call(null,a__$1,cljs.core.apply.call(null,f,self__.state,x,y,more));
});
reagent.ratom.RAtom.prototype.cljs$core$IWatchable$_notify_watches$arity$3 = (function (this$,old,new$){var self__ = this;
var this$__$1 = this;return reagent.ratom.notify_w.call(null,this$__$1,old,new$);
});
reagent.ratom.RAtom.prototype.cljs$core$IWatchable$_add_watch$arity$3 = (function (this$,key,f){var self__ = this;
var this$__$1 = this;return reagent.ratom.add_w.call(null,this$__$1,key,f);
});
reagent.ratom.RAtom.prototype.cljs$core$IWatchable$_remove_watch$arity$2 = (function (this$,key){var self__ = this;
var this$__$1 = this;return reagent.ratom.remove_w.call(null,this$__$1,key);
});
reagent.ratom.RAtom.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;reagent.ratom.notify_deref_watcher_BANG_.call(null,this$__$1);
return self__.state;
});
reagent.ratom.__GT_RAtom = (function __GT_RAtom(state,meta,validator,watches){return (new reagent.ratom.RAtom(state,meta,validator,watches));
});
/**
* Like clojure.core/atom, except that it keeps track of derefs.
* @param {...*} var_args
*/
reagent.ratom.atom = (function() {
var atom = null;
var atom__1 = (function (x){return (new reagent.ratom.RAtom(x,null,null,null));
});
var atom__2 = (function() { 
var G__5474__delegate = function (x,p__5471){var map__5473 = p__5471;var map__5473__$1 = ((cljs.core.seq_QMARK_.call(null,map__5473))?cljs.core.apply.call(null,cljs.core.hash_map,map__5473):map__5473);var meta = cljs.core.get.call(null,map__5473__$1,new cljs.core.Keyword(null,"meta","meta",1499536964));var validator = cljs.core.get.call(null,map__5473__$1,new cljs.core.Keyword(null,"validator","validator",-1966190681));return (new reagent.ratom.RAtom(x,meta,validator,null));
};
var G__5474 = function (x,var_args){
var p__5471 = null;if (arguments.length > 1) {
  p__5471 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return G__5474__delegate.call(this,x,p__5471);};
G__5474.cljs$lang$maxFixedArity = 1;
G__5474.cljs$lang$applyTo = (function (arglist__5475){
var x = cljs.core.first(arglist__5475);
var p__5471 = cljs.core.rest(arglist__5475);
return G__5474__delegate(x,p__5471);
});
G__5474.cljs$core$IFn$_invoke$arity$variadic = G__5474__delegate;
return G__5474;
})()
;
atom = function(x,var_args){
var p__5471 = var_args;
switch(arguments.length){
case 1:
return atom__1.call(this,x);
default:
return atom__2.cljs$core$IFn$_invoke$arity$variadic(x, cljs.core.array_seq(arguments, 1));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
atom.cljs$lang$maxFixedArity = 1;
atom.cljs$lang$applyTo = atom__2.cljs$lang$applyTo;
atom.cljs$core$IFn$_invoke$arity$1 = atom__1;
atom.cljs$core$IFn$_invoke$arity$variadic = atom__2.cljs$core$IFn$_invoke$arity$variadic;
return atom;
})()
;
reagent.ratom.cache_key = "reagReactionCache";
reagent.ratom.cached_reaction = (function cached_reaction(f,o,k,obj,destroy){var m = (o[reagent.ratom.cache_key]);var m__$1 = (((m == null))?cljs.core.PersistentArrayMap.EMPTY:m);var r = m__$1.call(null,k,null);if(cljs.core.some_QMARK_.call(null,r))
{return cljs.core._deref.call(null,r);
} else
{if((reagent.ratom._STAR_ratom_context_STAR_ == null))
{return f.call(null);
} else
{var r__$1 = reagent.ratom.make_reaction.call(null,f,new cljs.core.Keyword(null,"on-dispose","on-dispose",2105306360),((function (m,m__$1,r){
return (function (x){if(reagent.ratom.debug)
{cljs.core.swap_BANG_.call(null,reagent.ratom._running,cljs.core.dec);
} else
{}
var __5476 = (o[reagent.ratom.cache_key]);var __5477__$1 = cljs.core.dissoc.call(null,__5476,k);var __5478__$2 = (o[reagent.ratom.cache_key] = __5477__$1);if(cljs.core.some_QMARK_.call(null,obj))
{obj.reaction = null;
} else
{}
if(cljs.core.some_QMARK_.call(null,destroy))
{return destroy.call(null,x);
} else
{return null;
}
});})(m,m__$1,r))
);var v = cljs.core._deref.call(null,r__$1);(o[reagent.ratom.cache_key] = cljs.core.assoc.call(null,m__$1,k,r__$1));
if(reagent.ratom.debug)
{cljs.core.swap_BANG_.call(null,reagent.ratom._running,cljs.core.inc);
} else
{}
if(cljs.core.some_QMARK_.call(null,obj))
{obj.reaction = r__$1;
} else
{}
return v;

}
}
});

/**
* @constructor
*/
reagent.ratom.Track = (function (f,args,reaction){
this.f = f;
this.args = args;
this.reaction = reaction;
this.cljs$lang$protocol_mask$partition0$ = 2153807872;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
reagent.ratom.Track.cljs$lang$type = true;
reagent.ratom.Track.cljs$lang$ctorStr = "reagent.ratom/Track";
reagent.ratom.Track.cljs$lang$ctorPrWriter = (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){return cljs.core._write.call(null,writer__4218__auto__,"reagent.ratom/Track");
});
reagent.ratom.Track.prototype.reagent$ratom$IReactiveAtom$ = true;
reagent.ratom.Track.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;var temp__4427__auto__ = self__.reaction;if((temp__4427__auto__ == null))
{return reagent.ratom.cached_reaction.call(null,((function (temp__4427__auto__,this$__$1){
return (function (){return cljs.core.apply.call(null,self__.f,self__.args);
});})(temp__4427__auto__,this$__$1))
,self__.f,self__.args,this$__$1,null);
} else
{var r = temp__4427__auto__;return cljs.core._deref.call(null,r);
}
});
reagent.ratom.Track.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (_,other){var self__ = this;
var ___$1 = this;return ((other instanceof reagent.ratom.Track)) && (cljs.core._EQ_.call(null,self__.f,other.f)) && (cljs.core._EQ_.call(null,self__.args,other.args));
});
reagent.ratom.Track.prototype.cljs$core$IHash$_hash$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.hash.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.f,self__.args], null));
});
reagent.ratom.Track.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (a,w,opts){var self__ = this;
var a__$1 = this;return reagent.ratom.pr_atom.call(null,a__$1,w,opts,"Track:");
});
reagent.ratom.__GT_Track = (function __GT_Track(f,args,reaction){return (new reagent.ratom.Track(f,args,reaction));
});
reagent.ratom.make_track = (function make_track(f,args){return (new reagent.ratom.Track(f,args,null));
});
reagent.ratom.make_track_BANG_ = (function make_track_BANG_(f,args){var t = reagent.ratom.make_track.call(null,f,args);var r = reagent.ratom.make_reaction.call(null,((function (t){
return (function (){return cljs.core._deref.call(null,t);
});})(t))
,new cljs.core.Keyword(null,"auto-run","auto-run",1958400437),true);cljs.core.deref.call(null,r);
return r;
});
/**
* @param {...*} var_args
*/
reagent.ratom.track = (function() { 
var track__delegate = function (f,args){if(cljs.core.ifn_QMARK_.call(null,f))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"ifn?","ifn?",-2106461064,null),new cljs.core.Symbol(null,"f","f",43394975,null)))))));
}
return reagent.ratom.make_track.call(null,f,args);
};
var track = function (f,var_args){
var args = null;if (arguments.length > 1) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return track__delegate.call(this,f,args);};
track.cljs$lang$maxFixedArity = 1;
track.cljs$lang$applyTo = (function (arglist__5479){
var f = cljs.core.first(arglist__5479);
var args = cljs.core.rest(arglist__5479);
return track__delegate(f,args);
});
track.cljs$core$IFn$_invoke$arity$variadic = track__delegate;
return track;
})()
;
/**
* @param {...*} var_args
*/
reagent.ratom.track_BANG_ = (function() { 
var track_BANG___delegate = function (f,args){if(cljs.core.ifn_QMARK_.call(null,f))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"ifn?","ifn?",-2106461064,null),new cljs.core.Symbol(null,"f","f",43394975,null)))))));
}
return reagent.ratom.make_track_BANG_.call(null,f,args);
};
var track_BANG_ = function (f,var_args){
var args = null;if (arguments.length > 1) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return track_BANG___delegate.call(this,f,args);};
track_BANG_.cljs$lang$maxFixedArity = 1;
track_BANG_.cljs$lang$applyTo = (function (arglist__5480){
var f = cljs.core.first(arglist__5480);
var args = cljs.core.rest(arglist__5480);
return track_BANG___delegate(f,args);
});
track_BANG_.cljs$core$IFn$_invoke$arity$variadic = track_BANG___delegate;
return track_BANG_;
})()
;

/**
* @constructor
*/
reagent.ratom.RCursor = (function (ratom,path,reaction,state,watches){
this.ratom = ratom;
this.path = path;
this.reaction = reaction;
this.state = state;
this.watches = watches;
this.cljs$lang$protocol_mask$partition0$ = 2153807872;
this.cljs$lang$protocol_mask$partition1$ = 114690;
})
reagent.ratom.RCursor.cljs$lang$type = true;
reagent.ratom.RCursor.cljs$lang$ctorStr = "reagent.ratom/RCursor";
reagent.ratom.RCursor.cljs$lang$ctorPrWriter = (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){return cljs.core._write.call(null,writer__4218__auto__,"reagent.ratom/RCursor");
});
reagent.ratom.RCursor.prototype._peek = (function (){var self__ = this;
var this$ = this;var _STAR_ratom_context_STAR_5481 = reagent.ratom._STAR_ratom_context_STAR_;try{reagent.ratom._STAR_ratom_context_STAR_ = null;
return this$.cljs$core$IDeref$_deref$arity$1(null);
}finally {reagent.ratom._STAR_ratom_context_STAR_ = _STAR_ratom_context_STAR_5481;
}});
reagent.ratom.RCursor.prototype._set_state = (function (oldstate,newstate){var self__ = this;
var this$ = this;if((oldstate === newstate))
{return null;
} else
{self__.state = newstate;
if(cljs.core.some_QMARK_.call(null,self__.watches))
{return reagent.ratom.notify_w.call(null,this$,oldstate,newstate);
} else
{return null;
}
}
});
reagent.ratom.RCursor.prototype.reagent$ratom$IReactiveAtom$ = true;
reagent.ratom.RCursor.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (a,w,opts){var self__ = this;
var a__$1 = this;return reagent.ratom.pr_atom.call(null,a__$1,w,opts,("Cursor: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.path)));
});
reagent.ratom.RCursor.prototype.cljs$core$IHash$_hash$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.hash.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.ratom,self__.path], null));
});
reagent.ratom.RCursor.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (_,other){var self__ = this;
var ___$1 = this;return ((other instanceof reagent.ratom.RCursor)) && (cljs.core._EQ_.call(null,self__.path,other.path)) && (cljs.core._EQ_.call(null,self__.ratom,other.ratom));
});
reagent.ratom.RCursor.prototype.cljs$core$IReset$_reset_BANG_$arity$2 = (function (this$,new_value){var self__ = this;
var this$__$1 = this;var oldstate = self__.state;this$__$1._set_state(oldstate,new_value);
if((function (){var G__5482 = self__.ratom;if(G__5482)
{var bit__4304__auto__ = (G__5482.cljs$lang$protocol_mask$partition0$ & (32768));if((bit__4304__auto__) || (G__5482.cljs$core$IDeref$))
{return true;
} else
{if((!G__5482.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IDeref,G__5482);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IDeref,G__5482);
}
})())
{if(cljs.core._EQ_.call(null,self__.path,cljs.core.PersistentVector.EMPTY))
{cljs.core.reset_BANG_.call(null,self__.ratom,new_value);
} else
{cljs.core.swap_BANG_.call(null,self__.ratom,cljs.core.assoc_in,self__.path,new_value);
}
} else
{self__.ratom.call(null,self__.path,new_value);
}
return new_value;
});
reagent.ratom.RCursor.prototype.cljs$core$ISwap$_swap_BANG_$arity$2 = (function (a,f){var self__ = this;
var a__$1 = this;return cljs.core._reset_BANG_.call(null,a__$1,f.call(null,a__$1._peek()));
});
reagent.ratom.RCursor.prototype.cljs$core$ISwap$_swap_BANG_$arity$3 = (function (a,f,x){var self__ = this;
var a__$1 = this;return cljs.core._reset_BANG_.call(null,a__$1,f.call(null,a__$1._peek(),x));
});
reagent.ratom.RCursor.prototype.cljs$core$ISwap$_swap_BANG_$arity$4 = (function (a,f,x,y){var self__ = this;
var a__$1 = this;return cljs.core._reset_BANG_.call(null,a__$1,f.call(null,a__$1._peek(),x,y));
});
reagent.ratom.RCursor.prototype.cljs$core$ISwap$_swap_BANG_$arity$5 = (function (a,f,x,y,more){var self__ = this;
var a__$1 = this;return cljs.core._reset_BANG_.call(null,a__$1,cljs.core.apply.call(null,f,a__$1._peek(),x,y,more));
});
reagent.ratom.RCursor.prototype.cljs$core$IWatchable$_notify_watches$arity$3 = (function (this$,old,new$){var self__ = this;
var this$__$1 = this;return reagent.ratom.notify_w.call(null,this$__$1,old,new$);
});
reagent.ratom.RCursor.prototype.cljs$core$IWatchable$_add_watch$arity$3 = (function (this$,key,f){var self__ = this;
var this$__$1 = this;return reagent.ratom.add_w.call(null,this$__$1,key,f);
});
reagent.ratom.RCursor.prototype.cljs$core$IWatchable$_remove_watch$arity$2 = (function (this$,key){var self__ = this;
var this$__$1 = this;return reagent.ratom.remove_w.call(null,this$__$1,key);
});
reagent.ratom.RCursor.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;var oldstate = self__.state;var newstate = (function (){var temp__4427__auto__ = self__.reaction;if((temp__4427__auto__ == null))
{var f = (((function (){var G__5483 = self__.ratom;if(G__5483)
{var bit__4304__auto__ = (G__5483.cljs$lang$protocol_mask$partition0$ & (32768));if((bit__4304__auto__) || (G__5483.cljs$core$IDeref$))
{return true;
} else
{if((!G__5483.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IDeref,G__5483);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IDeref,G__5483);
}
})())?((function (temp__4427__auto__,oldstate,this$__$1){
return (function (){return cljs.core.get_in.call(null,cljs.core.deref.call(null,self__.ratom),self__.path);
});})(temp__4427__auto__,oldstate,this$__$1))
:((function (temp__4427__auto__,oldstate,this$__$1){
return (function (){return self__.ratom.call(null,self__.path);
});})(temp__4427__auto__,oldstate,this$__$1))
);return reagent.ratom.cached_reaction.call(null,f,self__.ratom,self__.path,this$__$1,null);
} else
{var r = temp__4427__auto__;return cljs.core._deref.call(null,r);
}
})();this$__$1._set_state(oldstate,newstate);
return newstate;
});
reagent.ratom.__GT_RCursor = (function __GT_RCursor(ratom,path,reaction,state,watches){return (new reagent.ratom.RCursor(ratom,path,reaction,state,watches));
});
reagent.ratom.cursor = (function cursor(src,path){if((function (){var or__3640__auto__ = (function (){var G__5487 = src;if(G__5487)
{var bit__4304__auto__ = null;if(cljs.core.truth_((function (){var or__3640__auto__ = bit__4304__auto__;if(cljs.core.truth_(or__3640__auto__))
{return or__3640__auto__;
} else
{return G__5487.reagent$ratom$IReactiveAtom$;
}
})()))
{return true;
} else
{if((!G__5487.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,reagent.ratom.IReactiveAtom,G__5487);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,reagent.ratom.IReactiveAtom,G__5487);
}
})();if(or__3640__auto__)
{return or__3640__auto__;
} else
{return (cljs.core.ifn_QMARK_.call(null,src)) && (!(cljs.core.vector_QMARK_.call(null,src)));
}
})())
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(("src must be a reactive atom or a function, not "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,src))))+"\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"or","or",1876275696,null),cljs.core.list(new cljs.core.Symbol(null,"satisfies?","satisfies?",-433227199,null),new cljs.core.Symbol(null,"IReactiveAtom","IReactiveAtom",-991158427,null),new cljs.core.Symbol(null,"src","src",-10544524,null)),cljs.core.list(new cljs.core.Symbol(null,"and","and",668631710,null),cljs.core.list(new cljs.core.Symbol(null,"ifn?","ifn?",-2106461064,null),new cljs.core.Symbol(null,"src","src",-10544524,null)),cljs.core.list(new cljs.core.Symbol(null,"not","not",1044554643,null),cljs.core.list(new cljs.core.Symbol(null,"vector?","vector?",-61367869,null),new cljs.core.Symbol(null,"src","src",-10544524,null))))))))));
}
return (new reagent.ratom.RCursor(src,path,null,null,null));
});
reagent.ratom.with_let_destroy = (function with_let_destroy(v){var temp__4429__auto__ = v.destroy;if((temp__4429__auto__ == null))
{return null;
} else
{var f = temp__4429__auto__;return f.call(null);
}
});
reagent.ratom.with_let_values = (function with_let_values(key){var temp__4427__auto__ = reagent.ratom._STAR_ratom_context_STAR_;if((temp__4427__auto__ == null))
{return [];
} else
{var c = temp__4427__auto__;return reagent.ratom.cached_reaction.call(null,cljs.core.array,c,key,null,reagent.ratom.with_let_destroy);
}
});
reagent.ratom.IDisposable = (function (){var obj5489 = {};return obj5489;
})();
reagent.ratom.dispose_BANG_ = (function dispose_BANG_(this$){if((function (){var and__3628__auto__ = this$;if(and__3628__auto__)
{return this$.reagent$ratom$IDisposable$dispose_BANG_$arity$1;
} else
{return and__3628__auto__;
}
})())
{return this$.reagent$ratom$IDisposable$dispose_BANG_$arity$1(this$);
} else
{var x__4277__auto__ = (((this$ == null))?null:this$);return (function (){var or__3640__auto__ = (reagent.ratom.dispose_BANG_[goog.typeOf(x__4277__auto__)]);if(or__3640__auto__)
{return or__3640__auto__;
} else
{var or__3640__auto____$1 = (reagent.ratom.dispose_BANG_["_"]);if(or__3640__auto____$1)
{return or__3640__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IDisposable.dispose!",this$);
}
}
})().call(null,this$);
}
});
reagent.ratom.IRunnable = (function (){var obj5491 = {};return obj5491;
})();
reagent.ratom.run = (function run(this$){if((function (){var and__3628__auto__ = this$;if(and__3628__auto__)
{return this$.reagent$ratom$IRunnable$run$arity$1;
} else
{return and__3628__auto__;
}
})())
{return this$.reagent$ratom$IRunnable$run$arity$1(this$);
} else
{var x__4277__auto__ = (((this$ == null))?null:this$);return (function (){var or__3640__auto__ = (reagent.ratom.run[goog.typeOf(x__4277__auto__)]);if(or__3640__auto__)
{return or__3640__auto__;
} else
{var or__3640__auto____$1 = (reagent.ratom.run["_"]);if(or__3640__auto____$1)
{return or__3640__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IRunnable.run",this$);
}
}
})().call(null,this$);
}
});
reagent.ratom.handle_reaction_change = (function handle_reaction_change(this$,sender,old,new$){return this$._handle_change(sender,old,new$);
});

/**
* @constructor
*/
reagent.ratom.Reaction = (function (f,state,dirty_QMARK_,nocache_QMARK_,watching,watches,auto_run,caught){
this.f = f;
this.state = state;
this.dirty_QMARK_ = dirty_QMARK_;
this.nocache_QMARK_ = nocache_QMARK_;
this.watching = watching;
this.watches = watches;
this.auto_run = auto_run;
this.caught = caught;
this.cljs$lang$protocol_mask$partition0$ = 2153807872;
this.cljs$lang$protocol_mask$partition1$ = 114690;
})
reagent.ratom.Reaction.cljs$lang$type = true;
reagent.ratom.Reaction.cljs$lang$ctorStr = "reagent.ratom/Reaction";
reagent.ratom.Reaction.cljs$lang$ctorPrWriter = (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){return cljs.core._write.call(null,writer__4218__auto__,"reagent.ratom/Reaction");
});
reagent.ratom.Reaction.prototype._peek_at = (function (){var self__ = this;
var this$ = this;var _STAR_ratom_context_STAR_5492 = reagent.ratom._STAR_ratom_context_STAR_;try{reagent.ratom._STAR_ratom_context_STAR_ = null;
return this$.cljs$core$IDeref$_deref$arity$1(null);
}finally {reagent.ratom._STAR_ratom_context_STAR_ = _STAR_ratom_context_STAR_5492;
}});
reagent.ratom.Reaction.prototype._handle_change = (function (sender,oldval,newval){var self__ = this;
var this$ = this;if(((oldval === newval)) || (self__.dirty_QMARK_))
{return null;
} else
{self__.dirty_QMARK_ = true;
if((self__.auto_run == null))
{return reagent.ratom.rea_enqueue.call(null,this$);
} else
{if(self__.auto_run === true)
{return this$._run();
} else
{return self__.auto_run.call(null,this$);
}
}
}
});
reagent.ratom.Reaction.prototype._update_watching = (function (derefed){var self__ = this;
var this$ = this;var new$ = cljs.core.set.call(null,derefed);var old = cljs.core.set.call(null,self__.watching);self__.watching = derefed;
var seq__5493_5508 = cljs.core.seq.call(null,clojure.set.difference.call(null,new$,old));var chunk__5494_5509 = null;var count__5495_5510 = (0);var i__5496_5511 = (0);while(true){
if((i__5496_5511 < count__5495_5510))
{var w_5512 = cljs.core._nth.call(null,chunk__5494_5509,i__5496_5511);cljs.core._add_watch.call(null,w_5512,this$,reagent.ratom.handle_reaction_change);
{
var G__5513 = seq__5493_5508;
var G__5514 = chunk__5494_5509;
var G__5515 = count__5495_5510;
var G__5516 = (i__5496_5511 + (1));
seq__5493_5508 = G__5513;
chunk__5494_5509 = G__5514;
count__5495_5510 = G__5515;
i__5496_5511 = G__5516;
continue;
}
} else
{var temp__4425__auto___5517 = cljs.core.seq.call(null,seq__5493_5508);if(temp__4425__auto___5517)
{var seq__5493_5518__$1 = temp__4425__auto___5517;if(cljs.core.chunked_seq_QMARK_.call(null,seq__5493_5518__$1))
{var c__4410__auto___5519 = cljs.core.chunk_first.call(null,seq__5493_5518__$1);{
var G__5520 = cljs.core.chunk_rest.call(null,seq__5493_5518__$1);
var G__5521 = c__4410__auto___5519;
var G__5522 = cljs.core.count.call(null,c__4410__auto___5519);
var G__5523 = (0);
seq__5493_5508 = G__5520;
chunk__5494_5509 = G__5521;
count__5495_5510 = G__5522;
i__5496_5511 = G__5523;
continue;
}
} else
{var w_5524 = cljs.core.first.call(null,seq__5493_5518__$1);cljs.core._add_watch.call(null,w_5524,this$,reagent.ratom.handle_reaction_change);
{
var G__5525 = cljs.core.next.call(null,seq__5493_5518__$1);
var G__5526 = null;
var G__5527 = (0);
var G__5528 = (0);
seq__5493_5508 = G__5525;
chunk__5494_5509 = G__5526;
count__5495_5510 = G__5527;
i__5496_5511 = G__5528;
continue;
}
}
} else
{}
}
break;
}
var seq__5497 = cljs.core.seq.call(null,clojure.set.difference.call(null,old,new$));var chunk__5498 = null;var count__5499 = (0);var i__5500 = (0);while(true){
if((i__5500 < count__5499))
{var w = cljs.core._nth.call(null,chunk__5498,i__5500);cljs.core._remove_watch.call(null,w,this$);
{
var G__5529 = seq__5497;
var G__5530 = chunk__5498;
var G__5531 = count__5499;
var G__5532 = (i__5500 + (1));
seq__5497 = G__5529;
chunk__5498 = G__5530;
count__5499 = G__5531;
i__5500 = G__5532;
continue;
}
} else
{var temp__4425__auto__ = cljs.core.seq.call(null,seq__5497);if(temp__4425__auto__)
{var seq__5497__$1 = temp__4425__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__5497__$1))
{var c__4410__auto__ = cljs.core.chunk_first.call(null,seq__5497__$1);{
var G__5533 = cljs.core.chunk_rest.call(null,seq__5497__$1);
var G__5534 = c__4410__auto__;
var G__5535 = cljs.core.count.call(null,c__4410__auto__);
var G__5536 = (0);
seq__5497 = G__5533;
chunk__5498 = G__5534;
count__5499 = G__5535;
i__5500 = G__5536;
continue;
}
} else
{var w = cljs.core.first.call(null,seq__5497__$1);cljs.core._remove_watch.call(null,w,this$);
{
var G__5537 = cljs.core.next.call(null,seq__5497__$1);
var G__5538 = null;
var G__5539 = (0);
var G__5540 = (0);
seq__5497 = G__5537;
chunk__5498 = G__5538;
count__5499 = G__5539;
i__5500 = G__5540;
continue;
}
}
} else
{return null;
}
}
break;
}
});
reagent.ratom.Reaction.prototype._try_run = (function (other){var self__ = this;
var this$ = this;if((self__.dirty_QMARK_) && (cljs.core.some_QMARK_.call(null,self__.watching)))
{try{return this$._run();
}catch (e5501){var e = e5501;self__.state = null;
self__.caught = e;
return reagent.ratom.notify_w.call(null,this$,e,null);
}} else
{return null;
}
});
reagent.ratom.Reaction.prototype._run = (function (){var self__ = this;
var this$ = this;var oldstate = self__.state;var res = reagent.ratom.deref_capture.call(null,self__.f,this$);if(self__.nocache_QMARK_)
{} else
{self__.state = res;
if(((self__.watches == null)) || (cljs.core._EQ_.call(null,oldstate,res)))
{} else
{reagent.ratom.notify_w.call(null,this$,oldstate,res);
}
}
return res;
});
reagent.ratom.Reaction.prototype._set_opts = (function (p__5502){var self__ = this;
var map__5503 = p__5502;var map__5503__$1 = ((cljs.core.seq_QMARK_.call(null,map__5503))?cljs.core.apply.call(null,cljs.core.hash_map,map__5503):map__5503);var auto_run__$1 = cljs.core.get.call(null,map__5503__$1,new cljs.core.Keyword(null,"auto-run","auto-run",1958400437));var on_set = cljs.core.get.call(null,map__5503__$1,new cljs.core.Keyword(null,"on-set","on-set",-140953470));var on_dispose = cljs.core.get.call(null,map__5503__$1,new cljs.core.Keyword(null,"on-dispose","on-dispose",2105306360));var no_cache = cljs.core.get.call(null,map__5503__$1,new cljs.core.Keyword(null,"no-cache","no-cache",1588056370));var this$ = this;if(cljs.core.some_QMARK_.call(null,auto_run__$1))
{this$.auto_run = auto_run__$1;
} else
{}
if(cljs.core.some_QMARK_.call(null,on_set))
{this$.on_set = on_set;
} else
{}
if(cljs.core.some_QMARK_.call(null,on_dispose))
{this$.on_dispose = on_dispose;
} else
{}
if(cljs.core.some_QMARK_.call(null,no_cache))
{return this$.nocache_QMARK_ = no_cache;
} else
{return null;
}
});
reagent.ratom.Reaction.prototype.reagent$ratom$IReactiveAtom$ = true;
reagent.ratom.Reaction.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (a,w,opts){var self__ = this;
var a__$1 = this;return reagent.ratom.pr_atom.call(null,a__$1,w,opts,("Reaction "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.hash.call(null,a__$1))+":"));
});
reagent.ratom.Reaction.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return goog.getUid(this$__$1);
});
reagent.ratom.Reaction.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (o,other){var self__ = this;
var o__$1 = this;return (o__$1 === other);
});
reagent.ratom.Reaction.prototype.reagent$ratom$IDisposable$ = true;
reagent.ratom.Reaction.prototype.reagent$ratom$IDisposable$dispose_BANG_$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;var s = self__.state;var wg = self__.watching;self__.watching = null;
self__.state = null;
self__.auto_run = null;
self__.dirty_QMARK_ = true;
var seq__5504_5541 = cljs.core.seq.call(null,cljs.core.set.call(null,wg));var chunk__5505_5542 = null;var count__5506_5543 = (0);var i__5507_5544 = (0);while(true){
if((i__5507_5544 < count__5506_5543))
{var w_5545 = cljs.core._nth.call(null,chunk__5505_5542,i__5507_5544);cljs.core._remove_watch.call(null,w_5545,this$__$1);
{
var G__5546 = seq__5504_5541;
var G__5547 = chunk__5505_5542;
var G__5548 = count__5506_5543;
var G__5549 = (i__5507_5544 + (1));
seq__5504_5541 = G__5546;
chunk__5505_5542 = G__5547;
count__5506_5543 = G__5548;
i__5507_5544 = G__5549;
continue;
}
} else
{var temp__4425__auto___5550 = cljs.core.seq.call(null,seq__5504_5541);if(temp__4425__auto___5550)
{var seq__5504_5551__$1 = temp__4425__auto___5550;if(cljs.core.chunked_seq_QMARK_.call(null,seq__5504_5551__$1))
{var c__4410__auto___5552 = cljs.core.chunk_first.call(null,seq__5504_5551__$1);{
var G__5553 = cljs.core.chunk_rest.call(null,seq__5504_5551__$1);
var G__5554 = c__4410__auto___5552;
var G__5555 = cljs.core.count.call(null,c__4410__auto___5552);
var G__5556 = (0);
seq__5504_5541 = G__5553;
chunk__5505_5542 = G__5554;
count__5506_5543 = G__5555;
i__5507_5544 = G__5556;
continue;
}
} else
{var w_5557 = cljs.core.first.call(null,seq__5504_5551__$1);cljs.core._remove_watch.call(null,w_5557,this$__$1);
{
var G__5558 = cljs.core.next.call(null,seq__5504_5551__$1);
var G__5559 = null;
var G__5560 = (0);
var G__5561 = (0);
seq__5504_5541 = G__5558;
chunk__5505_5542 = G__5559;
count__5506_5543 = G__5560;
i__5507_5544 = G__5561;
continue;
}
}
} else
{}
}
break;
}
if(cljs.core.some_QMARK_.call(null,this$__$1.on_dispose))
{return this$__$1.on_dispose(s);
} else
{return null;
}
});
reagent.ratom.Reaction.prototype.cljs$core$IReset$_reset_BANG_$arity$2 = (function (a,newval){var self__ = this;
var a__$1 = this;if(cljs.core.fn_QMARK_.call(null,a__$1.on_set))
{} else
{throw (new Error(("Assert failed: Reaction is read only.\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"fn?","fn?",1820990818,null),cljs.core.list(new cljs.core.Symbol(null,".-on-set",".-on-set",-1855206165,null),new cljs.core.Symbol(null,"a","a",-482876059,null))))))));
}
var oldval = self__.state;self__.state = newval;
a__$1.on_set(oldval,newval);
reagent.ratom.notify_w.call(null,a__$1,oldval,newval);
return newval;
});
reagent.ratom.Reaction.prototype.cljs$core$ISwap$_swap_BANG_$arity$2 = (function (a,f__$1){var self__ = this;
var a__$1 = this;return cljs.core._reset_BANG_.call(null,a__$1,f__$1.call(null,a__$1._peek_at()));
});
reagent.ratom.Reaction.prototype.cljs$core$ISwap$_swap_BANG_$arity$3 = (function (a,f__$1,x){var self__ = this;
var a__$1 = this;return cljs.core._reset_BANG_.call(null,a__$1,f__$1.call(null,a__$1._peek_at(),x));
});
reagent.ratom.Reaction.prototype.cljs$core$ISwap$_swap_BANG_$arity$4 = (function (a,f__$1,x,y){var self__ = this;
var a__$1 = this;return cljs.core._reset_BANG_.call(null,a__$1,f__$1.call(null,a__$1._peek_at(),x,y));
});
reagent.ratom.Reaction.prototype.cljs$core$ISwap$_swap_BANG_$arity$5 = (function (a,f__$1,x,y,more){var self__ = this;
var a__$1 = this;return cljs.core._reset_BANG_.call(null,a__$1,cljs.core.apply.call(null,f__$1,a__$1._peek_at(),x,y,more));
});
reagent.ratom.Reaction.prototype.reagent$ratom$IRunnable$ = true;
reagent.ratom.Reaction.prototype.reagent$ratom$IRunnable$run$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;reagent.ratom.flush_BANG_.call(null);
return this$__$1._run();
});
reagent.ratom.Reaction.prototype.cljs$core$IWatchable$_notify_watches$arity$3 = (function (this$,old,new$){var self__ = this;
var this$__$1 = this;return reagent.ratom.notify_w.call(null,this$__$1,old,new$);
});
reagent.ratom.Reaction.prototype.cljs$core$IWatchable$_add_watch$arity$3 = (function (this$,key,f__$1){var self__ = this;
var this$__$1 = this;return reagent.ratom.add_w.call(null,this$__$1,key,f__$1);
});
reagent.ratom.Reaction.prototype.cljs$core$IWatchable$_remove_watch$arity$2 = (function (this$,key){var self__ = this;
var this$__$1 = this;var was_empty = cljs.core.empty_QMARK_.call(null,self__.watches);reagent.ratom.remove_w.call(null,this$__$1,key);
if((!(was_empty)) && (cljs.core.empty_QMARK_.call(null,self__.watches)) && ((self__.auto_run == null)))
{return reagent.ratom.dispose_BANG_.call(null,this$__$1);
} else
{return null;
}
});
reagent.ratom.Reaction.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;var temp__4429__auto___5562 = self__.caught;if((temp__4429__auto___5562 == null))
{} else
{var e_5563 = temp__4429__auto___5562;self__.caught = null;
throw e_5563;
}
var non_reactive_5564 = (reagent.ratom._STAR_ratom_context_STAR_ == null);if(non_reactive_5564)
{reagent.ratom.flush_BANG_.call(null);
} else
{}
if((non_reactive_5564) && ((self__.auto_run == null)))
{if(self__.dirty_QMARK_)
{var oldstate_5565 = self__.state;self__.state = self__.f.call(null);
if(((self__.watches == null)) || (cljs.core._EQ_.call(null,oldstate_5565,self__.state)))
{} else
{reagent.ratom.notify_w.call(null,this$__$1,oldstate_5565,self__.state);
}
} else
{}
} else
{reagent.ratom.notify_deref_watcher_BANG_.call(null,this$__$1);
if(self__.dirty_QMARK_)
{this$__$1._run();
} else
{}
}
return self__.state;
});
reagent.ratom.__GT_Reaction = (function __GT_Reaction(f,state,dirty_QMARK_,nocache_QMARK_,watching,watches,auto_run,caught){return (new reagent.ratom.Reaction(f,state,dirty_QMARK_,nocache_QMARK_,watching,watches,auto_run,caught));
});
/**
* @param {...*} var_args
*/
reagent.ratom.make_reaction = (function() { 
var make_reaction__delegate = function (f,p__5566){var map__5568 = p__5566;var map__5568__$1 = ((cljs.core.seq_QMARK_.call(null,map__5568))?cljs.core.apply.call(null,cljs.core.hash_map,map__5568):map__5568);var auto_run = cljs.core.get.call(null,map__5568__$1,new cljs.core.Keyword(null,"auto-run","auto-run",1958400437));var on_set = cljs.core.get.call(null,map__5568__$1,new cljs.core.Keyword(null,"on-set","on-set",-140953470));var on_dispose = cljs.core.get.call(null,map__5568__$1,new cljs.core.Keyword(null,"on-dispose","on-dispose",2105306360));var reaction = (new reagent.ratom.Reaction(f,null,true,false,null,null,null,null));reaction._set_opts(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"auto-run","auto-run",1958400437),auto_run,new cljs.core.Keyword(null,"on-set","on-set",-140953470),on_set,new cljs.core.Keyword(null,"on-dispose","on-dispose",2105306360),on_dispose], null));
return reaction;
};
var make_reaction = function (f,var_args){
var p__5566 = null;if (arguments.length > 1) {
  p__5566 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return make_reaction__delegate.call(this,f,p__5566);};
make_reaction.cljs$lang$maxFixedArity = 1;
make_reaction.cljs$lang$applyTo = (function (arglist__5569){
var f = cljs.core.first(arglist__5569);
var p__5566 = cljs.core.rest(arglist__5569);
return make_reaction__delegate(f,p__5566);
});
make_reaction.cljs$core$IFn$_invoke$arity$variadic = make_reaction__delegate;
return make_reaction;
})()
;
reagent.ratom.temp_reaction = reagent.ratom.make_reaction.call(null,null);
reagent.ratom.run_in_reaction = (function run_in_reaction(f,obj,key,run,opts){var r = reagent.ratom.temp_reaction;var res = reagent.ratom.deref_capture.call(null,f,r);if((r.watching == null))
{} else
{reagent.ratom.temp_reaction = reagent.ratom.make_reaction.call(null,null);
r._set_opts(opts);
r.f = f;
r.auto_run = ((function (r,res){
return (function (){return run.call(null,obj);
});})(r,res))
;
(obj[key] = r);
}
return res;
});
reagent.ratom.check_derefs = (function check_derefs(f){var ctx = (function (){var obj5573 = {};return obj5573;
})();var res = reagent.ratom.in_context.call(null,ctx,f);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [res,cljs.core.some_QMARK_.call(null,ctx.captured)], null);
});

/**
* @constructor
*/
reagent.ratom.Wrapper = (function (state,callback,changed,watches){
this.state = state;
this.callback = callback;
this.changed = changed;
this.watches = watches;
this.cljs$lang$protocol_mask$partition1$ = 114690;
this.cljs$lang$protocol_mask$partition0$ = 2149613568;
})
reagent.ratom.Wrapper.cljs$lang$type = true;
reagent.ratom.Wrapper.cljs$lang$ctorStr = "reagent.ratom/Wrapper";
reagent.ratom.Wrapper.cljs$lang$ctorPrWriter = (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){return cljs.core._write.call(null,writer__4218__auto__,"reagent.ratom/Wrapper");
});
reagent.ratom.Wrapper.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;if((self__.changed) && (cljs.core.some_QMARK_.call(null,reagent.ratom._STAR_ratom_context_STAR_)))
{if(cljs.core.truth_(reagent.debug.has_console))
{(cljs.core.truth_(reagent.debug.tracking)?reagent.debug.track_console:console).warn(("Warning: derefing stale wrap: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,this$__$1))));
} else
{}
} else
{}

return self__.state;
});
reagent.ratom.Wrapper.prototype.cljs$core$IReset$_reset_BANG_$arity$2 = (function (this$,newval){var self__ = this;
var this$__$1 = this;var oldval = self__.state;self__.changed = true;
self__.state = newval;
if(cljs.core.some_QMARK_.call(null,self__.watches))
{reagent.ratom.notify_w.call(null,this$__$1,oldval,newval);
} else
{}
self__.callback.call(null,newval);
return newval;
});
reagent.ratom.Wrapper.prototype.cljs$core$ISwap$_swap_BANG_$arity$2 = (function (a,f){var self__ = this;
var a__$1 = this;return cljs.core._reset_BANG_.call(null,a__$1,f.call(null,self__.state));
});
reagent.ratom.Wrapper.prototype.cljs$core$ISwap$_swap_BANG_$arity$3 = (function (a,f,x){var self__ = this;
var a__$1 = this;return cljs.core._reset_BANG_.call(null,a__$1,f.call(null,self__.state,x));
});
reagent.ratom.Wrapper.prototype.cljs$core$ISwap$_swap_BANG_$arity$4 = (function (a,f,x,y){var self__ = this;
var a__$1 = this;return cljs.core._reset_BANG_.call(null,a__$1,f.call(null,self__.state,x,y));
});
reagent.ratom.Wrapper.prototype.cljs$core$ISwap$_swap_BANG_$arity$5 = (function (a,f,x,y,more){var self__ = this;
var a__$1 = this;return cljs.core._reset_BANG_.call(null,a__$1,cljs.core.apply.call(null,f,self__.state,x,y,more));
});
reagent.ratom.Wrapper.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (_,other){var self__ = this;
var ___$1 = this;return ((other instanceof reagent.ratom.Wrapper)) && (!(self__.changed)) && (cljs.core.not.call(null,other.changed)) && (cljs.core._EQ_.call(null,self__.state,other.state)) && (cljs.core._EQ_.call(null,self__.callback,other.callback));
});
reagent.ratom.Wrapper.prototype.cljs$core$IWatchable$_notify_watches$arity$3 = (function (this$,old,new$){var self__ = this;
var this$__$1 = this;return reagent.ratom.notify_w.call(null,this$__$1,old,new$);
});
reagent.ratom.Wrapper.prototype.cljs$core$IWatchable$_add_watch$arity$3 = (function (this$,key,f){var self__ = this;
var this$__$1 = this;return reagent.ratom.add_w.call(null,this$__$1,key,f);
});
reagent.ratom.Wrapper.prototype.cljs$core$IWatchable$_remove_watch$arity$2 = (function (this$,key){var self__ = this;
var this$__$1 = this;return reagent.ratom.remove_w.call(null,this$__$1,key);
});
reagent.ratom.Wrapper.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (a,w,opts){var self__ = this;
var a__$1 = this;return reagent.ratom.pr_atom.call(null,a__$1,w,opts,"Wrap:");
});
reagent.ratom.__GT_Wrapper = (function __GT_Wrapper(state,callback,changed,watches){return (new reagent.ratom.Wrapper(state,callback,changed,watches));
});
reagent.ratom.make_wrapper = (function make_wrapper(value,callback_fn,args){return (new reagent.ratom.Wrapper(value,(new reagent.impl.util.partial_ifn(callback_fn,args,null)),false,null));
});

//# sourceMappingURL=ratom.js.map