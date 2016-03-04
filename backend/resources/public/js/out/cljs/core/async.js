// Compiled by ClojureScript 0.0-2371
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
cljs.core.async.fn_handler = (function fn_handler(f){if(typeof cljs.core.async.t11855 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t11855 = (function (fn_handler,f,meta11856){
this.fn_handler = fn_handler;
this.f = f;
this.meta11856 = meta11856;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t11855.cljs$lang$type = true;
cljs.core.async.t11855.cljs$lang$ctorStr = "cljs.core.async/t11855";
cljs.core.async.t11855.cljs$lang$ctorPrWriter = (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){return cljs.core._write.call(null,writer__4218__auto__,"cljs.core.async/t11855");
});
cljs.core.async.t11855.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11857,meta11856__$1){var self__ = this;
var _11857__$1 = this;return (new cljs.core.async.t11855(self__.fn_handler,self__.f,meta11856__$1));
});
cljs.core.async.t11855.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11857){var self__ = this;
var _11857__$1 = this;return self__.meta11856;
});
cljs.core.async.t11855.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t11855.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return true;
});
cljs.core.async.t11855.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.f;
});
cljs.core.async.__GT_t11855 = (function __GT_t11855(fn_handler__$1,f__$1,meta11856){return (new cljs.core.async.t11855(fn_handler__$1,f__$1,meta11856));
});
}
return (new cljs.core.async.t11855(fn_handler,f,null));
});
/**
* Returns a fixed buffer of size n. When full, puts will block/park.
*/
cljs.core.async.buffer = (function buffer(n){return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
* Returns a buffer of size n. When full, puts will complete but
* val will be dropped (no transfer).
*/
cljs.core.async.dropping_buffer = (function dropping_buffer(n){return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
* Returns a buffer of size n. When full, puts will complete, and be
* buffered, but oldest elements in buffer will be dropped (not
* transferred).
*/
cljs.core.async.sliding_buffer = (function sliding_buffer(n){return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
* Returns true if a channel created with buff will never block. That is to say,
* puts into this buffer will never cause the buffer to be full.
*/
cljs.core.async.unblocking_buffer_QMARK_ = (function unblocking_buffer_QMARK_(buff){var G__11859 = buff;if(G__11859)
{var bit__4304__auto__ = null;if(cljs.core.truth_((function (){var or__3640__auto__ = bit__4304__auto__;if(cljs.core.truth_(or__3640__auto__))
{return or__3640__auto__;
} else
{return G__11859.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})()))
{return true;
} else
{if((!G__11859.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__11859);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__11859);
}
});
/**
* Creates a channel with an optional buffer, an optional transducer (like (map f),
* (filter p) etc or a composition thereof), and an optional exception handler.
* If buf-or-n is a number, will create and use a fixed buffer of that size. If a
* transducer is supplied a buffer must be specified. ex-handler must be a
* fn of one argument - if an exception occurs during transformation it will be called
* with the thrown value as an argument, and any non-nil return value will be placed
* in the channel.
*/
cljs.core.async.chan = (function() {
var chan = null;
var chan__0 = (function (){return chan.call(null,null);
});
var chan__1 = (function (buf_or_n){return chan.call(null,buf_or_n,null,null);
});
var chan__2 = (function (buf_or_n,xform){return chan.call(null,buf_or_n,xform,null);
});
var chan__3 = (function (buf_or_n,xform,ex_handler){var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);if(cljs.core.truth_(xform))
{if(cljs.core.truth_(buf_or_n__$1))
{} else
{throw (new Error(("Assert failed: buffer must be supplied when transducer is\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,new cljs.core.Symbol(null,"buf-or-n","buf-or-n",-1646815050,null))))));
}
} else
{}
return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});
chan = function(buf_or_n,xform,ex_handler){
switch(arguments.length){
case 0:
return chan__0.call(this);
case 1:
return chan__1.call(this,buf_or_n);
case 2:
return chan__2.call(this,buf_or_n,xform);
case 3:
return chan__3.call(this,buf_or_n,xform,ex_handler);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
chan.cljs$core$IFn$_invoke$arity$0 = chan__0;
chan.cljs$core$IFn$_invoke$arity$1 = chan__1;
chan.cljs$core$IFn$_invoke$arity$2 = chan__2;
chan.cljs$core$IFn$_invoke$arity$3 = chan__3;
return chan;
})()
;
/**
* Returns a channel that will close after msecs
*/
cljs.core.async.timeout = (function timeout(msecs){return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
* takes a val from port. Must be called inside a (go ...) block. Will
* return nil if closed. Will park if nothing is available.
* Returns true unless port is already closed
*/
cljs.core.async._LT__BANG_ = (function _LT__BANG_(port){throw (new Error("<! used not in (go ...) block"));
});
/**
* Asynchronously takes a val from port, passing to fn1. Will pass nil
* if closed. If on-caller? (default true) is true, and value is
* immediately available, will call fn1 on calling thread.
* Returns nil.
*/
cljs.core.async.take_BANG_ = (function() {
var take_BANG_ = null;
var take_BANG___2 = (function (port,fn1){return take_BANG_.call(null,port,fn1,true);
});
var take_BANG___3 = (function (port,fn1,on_caller_QMARK_){var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));if(cljs.core.truth_(ret))
{var val_11860 = cljs.core.deref.call(null,ret);if(cljs.core.truth_(on_caller_QMARK_))
{fn1.call(null,val_11860);
} else
{cljs.core.async.impl.dispatch.run.call(null,((function (val_11860,ret){
return (function (){return fn1.call(null,val_11860);
});})(val_11860,ret))
);
}
} else
{}
return null;
});
take_BANG_ = function(port,fn1,on_caller_QMARK_){
switch(arguments.length){
case 2:
return take_BANG___2.call(this,port,fn1);
case 3:
return take_BANG___3.call(this,port,fn1,on_caller_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
take_BANG_.cljs$core$IFn$_invoke$arity$2 = take_BANG___2;
take_BANG_.cljs$core$IFn$_invoke$arity$3 = take_BANG___3;
return take_BANG_;
})()
;
cljs.core.async.nop = (function nop(_){return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
* puts a val into port. nil values are not allowed. Must be called
* inside a (go ...) block. Will park if no buffer space is available.
* Returns true unless port is already closed.
*/
cljs.core.async._GT__BANG_ = (function _GT__BANG_(port,val){throw (new Error(">! used not in (go ...) block"));
});
/**
* Asynchronously puts a val into port, calling fn0 (if supplied) when
* complete. nil values are not allowed. Will throw if closed. If
* on-caller? (default true) is true, and the put is immediately
* accepted, will call fn0 on calling thread.  Returns nil.
*/
cljs.core.async.put_BANG_ = (function() {
var put_BANG_ = null;
var put_BANG___2 = (function (port,val){var temp__4423__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);if(cljs.core.truth_(temp__4423__auto__))
{var ret = temp__4423__auto__;return cljs.core.deref.call(null,ret);
} else
{return true;
}
});
var put_BANG___3 = (function (port,val,fn1){return put_BANG_.call(null,port,val,fn1,true);
});
var put_BANG___4 = (function (port,val,fn1,on_caller_QMARK_){var temp__4423__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));if(cljs.core.truth_(temp__4423__auto__))
{var retb = temp__4423__auto__;var ret = cljs.core.deref.call(null,retb);if(cljs.core.truth_(on_caller_QMARK_))
{fn1.call(null,ret);
} else
{cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__4423__auto__){
return (function (){return fn1.call(null,ret);
});})(ret,retb,temp__4423__auto__))
);
}
return ret;
} else
{return true;
}
});
put_BANG_ = function(port,val,fn1,on_caller_QMARK_){
switch(arguments.length){
case 2:
return put_BANG___2.call(this,port,val);
case 3:
return put_BANG___3.call(this,port,val,fn1);
case 4:
return put_BANG___4.call(this,port,val,fn1,on_caller_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
put_BANG_.cljs$core$IFn$_invoke$arity$2 = put_BANG___2;
put_BANG_.cljs$core$IFn$_invoke$arity$3 = put_BANG___3;
put_BANG_.cljs$core$IFn$_invoke$arity$4 = put_BANG___4;
return put_BANG_;
})()
;
cljs.core.async.close_BANG_ = (function close_BANG_(port){return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function random_array(n){var a = (new Array(n));var n__4510__auto___11861 = n;var x_11862 = (0);while(true){
if((x_11862 < n__4510__auto___11861))
{(a[x_11862] = (0));
{
var G__11863 = (x_11862 + (1));
x_11862 = G__11863;
continue;
}
} else
{}
break;
}
var i = (1);while(true){
if(cljs.core._EQ_.call(null,i,n))
{return a;
} else
{var j = cljs.core.rand_int.call(null,i);(a[i] = (a[j]));
(a[j] = i);
{
var G__11864 = (i + (1));
i = G__11864;
continue;
}
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){var flag = cljs.core.atom.call(null,true);if(typeof cljs.core.async.t11868 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t11868 = (function (alt_flag,flag,meta11869){
this.alt_flag = alt_flag;
this.flag = flag;
this.meta11869 = meta11869;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t11868.cljs$lang$type = true;
cljs.core.async.t11868.cljs$lang$ctorStr = "cljs.core.async/t11868";
cljs.core.async.t11868.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){return cljs.core._write.call(null,writer__4218__auto__,"cljs.core.async/t11868");
});})(flag))
;
cljs.core.async.t11868.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_11870,meta11869__$1){var self__ = this;
var _11870__$1 = this;return (new cljs.core.async.t11868(self__.alt_flag,self__.flag,meta11869__$1));
});})(flag))
;
cljs.core.async.t11868.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_11870){var self__ = this;
var _11870__$1 = this;return self__.meta11869;
});})(flag))
;
cljs.core.async.t11868.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t11868.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.deref.call(null,self__.flag);
});})(flag))
;
cljs.core.async.t11868.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.flag,null);
return true;
});})(flag))
;
cljs.core.async.__GT_t11868 = ((function (flag){
return (function __GT_t11868(alt_flag__$1,flag__$1,meta11869){return (new cljs.core.async.t11868(alt_flag__$1,flag__$1,meta11869));
});})(flag))
;
}
return (new cljs.core.async.t11868(alt_flag,flag,null));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){if(typeof cljs.core.async.t11874 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t11874 = (function (alt_handler,flag,cb,meta11875){
this.alt_handler = alt_handler;
this.flag = flag;
this.cb = cb;
this.meta11875 = meta11875;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t11874.cljs$lang$type = true;
cljs.core.async.t11874.cljs$lang$ctorStr = "cljs.core.async/t11874";
cljs.core.async.t11874.cljs$lang$ctorPrWriter = (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){return cljs.core._write.call(null,writer__4218__auto__,"cljs.core.async/t11874");
});
cljs.core.async.t11874.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11876,meta11875__$1){var self__ = this;
var _11876__$1 = this;return (new cljs.core.async.t11874(self__.alt_handler,self__.flag,self__.cb,meta11875__$1));
});
cljs.core.async.t11874.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11876){var self__ = this;
var _11876__$1 = this;return self__.meta11875;
});
cljs.core.async.t11874.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t11874.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});
cljs.core.async.t11874.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.async.impl.protocols.commit.call(null,self__.flag);
return self__.cb;
});
cljs.core.async.__GT_t11874 = (function __GT_t11874(alt_handler__$1,flag__$1,cb__$1,meta11875){return (new cljs.core.async.t11874(alt_handler__$1,flag__$1,cb__$1,meta11875));
});
}
return (new cljs.core.async.t11874(alt_handler,flag,cb,null));
});
/**
* returns derefable [val port] if immediate, nil if enqueued
*/
cljs.core.async.do_alts = (function do_alts(fret,ports,opts){var flag = cljs.core.async.alt_flag.call(null);var n = cljs.core.count.call(null,ports);var idxs = cljs.core.async.random_array.call(null,n);var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);var ret = (function (){var i = (0);while(true){
if((i < n))
{var idx = (cljs.core.truth_(priority)?i:(idxs[i]));var port = cljs.core.nth.call(null,ports,idx);var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__11877_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__11877_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__11878_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__11878_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));if(cljs.core.truth_(vbox))
{return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__3640__auto__ = wport;if(cljs.core.truth_(or__3640__auto__))
{return or__3640__auto__;
} else
{return port;
}
})()], null));
} else
{{
var G__11879 = (i + (1));
i = G__11879;
continue;
}
}
} else
{return null;
}
break;
}
})();var or__3640__auto__ = ret;if(cljs.core.truth_(or__3640__auto__))
{return or__3640__auto__;
} else
{if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328)))
{var temp__4425__auto__ = (function (){var and__3628__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);if(cljs.core.truth_(and__3628__auto__))
{return cljs.core.async.impl.protocols.commit.call(null,flag);
} else
{return and__3628__auto__;
}
})();if(cljs.core.truth_(temp__4425__auto__))
{var got = temp__4425__auto__;return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else
{return null;
}
} else
{return null;
}
}
});
/**
* Completes at most one of several channel operations. Must be called
* inside a (go ...) block. ports is a vector of channel endpoints,
* which can be either a channel to take from or a vector of
* [channel-to-put-to val-to-put], in any combination. Takes will be
* made as if by <!, and puts will be made as if by >!. Unless
* the :priority option is true, if more than one port operation is
* ready a non-deterministic choice will be made. If no operation is
* ready and a :default value is supplied, [default-val :default] will
* be returned, otherwise alts! will park until the first operation to
* become ready completes. Returns [val port] of the completed
* operation, where val is the value taken for takes, and a
* boolean (true unless already closed, as per put!) for puts.
* 
* opts are passed as :key val ... Supported options:
* 
* :default val - the value to use if none of the operations are immediately ready
* :priority true - (default nil) when true, the operations will be tried in order.
* 
* Note: there is no guarantee that the port exps or val exprs will be
* used, nor in what order should they be, so they should not be
* depended upon for side effects.
* @param {...*} var_args
*/
cljs.core.async.alts_BANG_ = (function() { 
var alts_BANG___delegate = function (ports,p__11880){var map__11882 = p__11880;var map__11882__$1 = ((cljs.core.seq_QMARK_.call(null,map__11882))?cljs.core.apply.call(null,cljs.core.hash_map,map__11882):map__11882);var opts = map__11882__$1;throw (new Error("alts! used not in (go ...) block"));
};
var alts_BANG_ = function (ports,var_args){
var p__11880 = null;if (arguments.length > 1) {
  p__11880 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return alts_BANG___delegate.call(this,ports,p__11880);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__11883){
var ports = cljs.core.first(arglist__11883);
var p__11880 = cljs.core.rest(arglist__11883);
return alts_BANG___delegate(ports,p__11880);
});
alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = alts_BANG___delegate;
return alts_BANG_;
})()
;
/**
* Takes elements from the from channel and supplies them to the to
* channel. By default, the to channel will be closed when the from
* channel closes, but can be determined by the close?  parameter. Will
* stop consuming the from channel if the to channel closes
*/
cljs.core.async.pipe = (function() {
var pipe = null;
var pipe__2 = (function (from,to){return pipe.call(null,from,to,true);
});
var pipe__3 = (function (from,to,close_QMARK_){var c__5823__auto___11978 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5823__auto___11978){
return (function (){var f__5824__auto__ = (function (){var switch__5808__auto__ = ((function (c__5823__auto___11978){
return (function (state_11954){var state_val_11955 = (state_11954[(1)]);if((state_val_11955 === (7)))
{var inst_11950 = (state_11954[(2)]);var state_11954__$1 = state_11954;var statearr_11956_11979 = state_11954__$1;(statearr_11956_11979[(2)] = inst_11950);
(statearr_11956_11979[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11955 === (1)))
{var state_11954__$1 = state_11954;var statearr_11957_11980 = state_11954__$1;(statearr_11957_11980[(2)] = null);
(statearr_11957_11980[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11955 === (4)))
{var inst_11933 = (state_11954[(7)]);var inst_11933__$1 = (state_11954[(2)]);var inst_11934 = (inst_11933__$1 == null);var state_11954__$1 = (function (){var statearr_11958 = state_11954;(statearr_11958[(7)] = inst_11933__$1);
return statearr_11958;
})();if(cljs.core.truth_(inst_11934))
{var statearr_11959_11981 = state_11954__$1;(statearr_11959_11981[(1)] = (5));
} else
{var statearr_11960_11982 = state_11954__$1;(statearr_11960_11982[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11955 === (13)))
{var state_11954__$1 = state_11954;var statearr_11961_11983 = state_11954__$1;(statearr_11961_11983[(2)] = null);
(statearr_11961_11983[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11955 === (6)))
{var inst_11933 = (state_11954[(7)]);var state_11954__$1 = state_11954;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11954__$1,(11),to,inst_11933);
} else
{if((state_val_11955 === (3)))
{var inst_11952 = (state_11954[(2)]);var state_11954__$1 = state_11954;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11954__$1,inst_11952);
} else
{if((state_val_11955 === (12)))
{var state_11954__$1 = state_11954;var statearr_11962_11984 = state_11954__$1;(statearr_11962_11984[(2)] = null);
(statearr_11962_11984[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11955 === (2)))
{var state_11954__$1 = state_11954;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11954__$1,(4),from);
} else
{if((state_val_11955 === (11)))
{var inst_11943 = (state_11954[(2)]);var state_11954__$1 = state_11954;if(cljs.core.truth_(inst_11943))
{var statearr_11963_11985 = state_11954__$1;(statearr_11963_11985[(1)] = (12));
} else
{var statearr_11964_11986 = state_11954__$1;(statearr_11964_11986[(1)] = (13));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11955 === (9)))
{var state_11954__$1 = state_11954;var statearr_11965_11987 = state_11954__$1;(statearr_11965_11987[(2)] = null);
(statearr_11965_11987[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11955 === (5)))
{var state_11954__$1 = state_11954;if(cljs.core.truth_(close_QMARK_))
{var statearr_11966_11988 = state_11954__$1;(statearr_11966_11988[(1)] = (8));
} else
{var statearr_11967_11989 = state_11954__$1;(statearr_11967_11989[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11955 === (14)))
{var inst_11948 = (state_11954[(2)]);var state_11954__$1 = state_11954;var statearr_11968_11990 = state_11954__$1;(statearr_11968_11990[(2)] = inst_11948);
(statearr_11968_11990[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11955 === (10)))
{var inst_11940 = (state_11954[(2)]);var state_11954__$1 = state_11954;var statearr_11969_11991 = state_11954__$1;(statearr_11969_11991[(2)] = inst_11940);
(statearr_11969_11991[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11955 === (8)))
{var inst_11937 = cljs.core.async.close_BANG_.call(null,to);var state_11954__$1 = state_11954;var statearr_11970_11992 = state_11954__$1;(statearr_11970_11992[(2)] = inst_11937);
(statearr_11970_11992[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__5823__auto___11978))
;return ((function (switch__5808__auto__,c__5823__auto___11978){
return (function() {
var state_machine__5809__auto__ = null;
var state_machine__5809__auto____0 = (function (){var statearr_11974 = [null,null,null,null,null,null,null,null];(statearr_11974[(0)] = state_machine__5809__auto__);
(statearr_11974[(1)] = (1));
return statearr_11974;
});
var state_machine__5809__auto____1 = (function (state_11954){while(true){
var ret_value__5810__auto__ = (function (){try{while(true){
var result__5811__auto__ = switch__5808__auto__.call(null,state_11954);if(cljs.core.keyword_identical_QMARK_.call(null,result__5811__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5811__auto__;
}
break;
}
}catch (e11975){if((e11975 instanceof Object))
{var ex__5812__auto__ = e11975;var statearr_11976_11993 = state_11954;(statearr_11976_11993[(5)] = ex__5812__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11954);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e11975;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5810__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__11994 = state_11954;
state_11954 = G__11994;
continue;
}
} else
{return ret_value__5810__auto__;
}
break;
}
});
state_machine__5809__auto__ = function(state_11954){
switch(arguments.length){
case 0:
return state_machine__5809__auto____0.call(this);
case 1:
return state_machine__5809__auto____1.call(this,state_11954);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5809__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5809__auto____0;
state_machine__5809__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5809__auto____1;
return state_machine__5809__auto__;
})()
;})(switch__5808__auto__,c__5823__auto___11978))
})();var state__5825__auto__ = (function (){var statearr_11977 = f__5824__auto__.call(null);(statearr_11977[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5823__auto___11978);
return statearr_11977;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5825__auto__);
});})(c__5823__auto___11978))
);
return to;
});
pipe = function(from,to,close_QMARK_){
switch(arguments.length){
case 2:
return pipe__2.call(this,from,to);
case 3:
return pipe__3.call(this,from,to,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
pipe.cljs$core$IFn$_invoke$arity$2 = pipe__2;
pipe.cljs$core$IFn$_invoke$arity$3 = pipe__3;
return pipe;
})()
;
cljs.core.async.pipeline_STAR_ = (function pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){if((n > (0)))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"pos?","pos?",-244377722,null),new cljs.core.Symbol(null,"n","n",-2092305744,null)))))));
}
var jobs = cljs.core.async.chan.call(null,n);var results = cljs.core.async.chan.call(null,n);var process = ((function (jobs,results){
return (function (p__12178){var vec__12179 = p__12178;var v = cljs.core.nth.call(null,vec__12179,(0),null);var p = cljs.core.nth.call(null,vec__12179,(1),null);var job = vec__12179;if((job == null))
{cljs.core.async.close_BANG_.call(null,results);
return null;
} else
{var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);var c__5823__auto___12361 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5823__auto___12361,res,vec__12179,v,p,job,jobs,results){
return (function (){var f__5824__auto__ = (function (){var switch__5808__auto__ = ((function (c__5823__auto___12361,res,vec__12179,v,p,job,jobs,results){
return (function (state_12184){var state_val_12185 = (state_12184[(1)]);if((state_val_12185 === (1)))
{var state_12184__$1 = state_12184;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12184__$1,(2),res,v);
} else
{if((state_val_12185 === (2)))
{var inst_12181 = (state_12184[(2)]);var inst_12182 = cljs.core.async.close_BANG_.call(null,res);var state_12184__$1 = (function (){var statearr_12186 = state_12184;(statearr_12186[(7)] = inst_12181);
return statearr_12186;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12184__$1,inst_12182);
} else
{return null;
}
}
});})(c__5823__auto___12361,res,vec__12179,v,p,job,jobs,results))
;return ((function (switch__5808__auto__,c__5823__auto___12361,res,vec__12179,v,p,job,jobs,results){
return (function() {
var state_machine__5809__auto__ = null;
var state_machine__5809__auto____0 = (function (){var statearr_12190 = [null,null,null,null,null,null,null,null];(statearr_12190[(0)] = state_machine__5809__auto__);
(statearr_12190[(1)] = (1));
return statearr_12190;
});
var state_machine__5809__auto____1 = (function (state_12184){while(true){
var ret_value__5810__auto__ = (function (){try{while(true){
var result__5811__auto__ = switch__5808__auto__.call(null,state_12184);if(cljs.core.keyword_identical_QMARK_.call(null,result__5811__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5811__auto__;
}
break;
}
}catch (e12191){if((e12191 instanceof Object))
{var ex__5812__auto__ = e12191;var statearr_12192_12362 = state_12184;(statearr_12192_12362[(5)] = ex__5812__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12184);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e12191;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5810__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__12363 = state_12184;
state_12184 = G__12363;
continue;
}
} else
{return ret_value__5810__auto__;
}
break;
}
});
state_machine__5809__auto__ = function(state_12184){
switch(arguments.length){
case 0:
return state_machine__5809__auto____0.call(this);
case 1:
return state_machine__5809__auto____1.call(this,state_12184);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5809__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5809__auto____0;
state_machine__5809__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5809__auto____1;
return state_machine__5809__auto__;
})()
;})(switch__5808__auto__,c__5823__auto___12361,res,vec__12179,v,p,job,jobs,results))
})();var state__5825__auto__ = (function (){var statearr_12193 = f__5824__auto__.call(null);(statearr_12193[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5823__auto___12361);
return statearr_12193;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5825__auto__);
});})(c__5823__auto___12361,res,vec__12179,v,p,job,jobs,results))
);
cljs.core.async.put_BANG_.call(null,p,res);
return true;
}
});})(jobs,results))
;var async = ((function (jobs,results,process){
return (function (p__12194){var vec__12195 = p__12194;var v = cljs.core.nth.call(null,vec__12195,(0),null);var p = cljs.core.nth.call(null,vec__12195,(1),null);var job = vec__12195;if((job == null))
{cljs.core.async.close_BANG_.call(null,results);
return null;
} else
{var res = cljs.core.async.chan.call(null,(1));xf.call(null,v,res);
cljs.core.async.put_BANG_.call(null,p,res);
return true;
}
});})(jobs,results,process))
;var n__4510__auto___12364 = n;var __12365 = (0);while(true){
if((__12365 < n__4510__auto___12364))
{var G__12196_12366 = (((type instanceof cljs.core.Keyword))?type.fqn:null);switch (G__12196_12366) {
case "compute":
var c__5823__auto___12368 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (__12365,c__5823__auto___12368,G__12196_12366,n__4510__auto___12364,jobs,results,process,async){
return (function (){var f__5824__auto__ = (function (){var switch__5808__auto__ = ((function (__12365,c__5823__auto___12368,G__12196_12366,n__4510__auto___12364,jobs,results,process,async){
return (function (state_12209){var state_val_12210 = (state_12209[(1)]);if((state_val_12210 === (1)))
{var state_12209__$1 = state_12209;var statearr_12211_12369 = state_12209__$1;(statearr_12211_12369[(2)] = null);
(statearr_12211_12369[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12210 === (2)))
{var state_12209__$1 = state_12209;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12209__$1,(4),jobs);
} else
{if((state_val_12210 === (3)))
{var inst_12207 = (state_12209[(2)]);var state_12209__$1 = state_12209;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12209__$1,inst_12207);
} else
{if((state_val_12210 === (4)))
{var inst_12199 = (state_12209[(2)]);var inst_12200 = process.call(null,inst_12199);var state_12209__$1 = state_12209;if(cljs.core.truth_(inst_12200))
{var statearr_12212_12370 = state_12209__$1;(statearr_12212_12370[(1)] = (5));
} else
{var statearr_12213_12371 = state_12209__$1;(statearr_12213_12371[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12210 === (5)))
{var state_12209__$1 = state_12209;var statearr_12214_12372 = state_12209__$1;(statearr_12214_12372[(2)] = null);
(statearr_12214_12372[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12210 === (6)))
{var state_12209__$1 = state_12209;var statearr_12215_12373 = state_12209__$1;(statearr_12215_12373[(2)] = null);
(statearr_12215_12373[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12210 === (7)))
{var inst_12205 = (state_12209[(2)]);var state_12209__$1 = state_12209;var statearr_12216_12374 = state_12209__$1;(statearr_12216_12374[(2)] = inst_12205);
(statearr_12216_12374[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
});})(__12365,c__5823__auto___12368,G__12196_12366,n__4510__auto___12364,jobs,results,process,async))
;return ((function (__12365,switch__5808__auto__,c__5823__auto___12368,G__12196_12366,n__4510__auto___12364,jobs,results,process,async){
return (function() {
var state_machine__5809__auto__ = null;
var state_machine__5809__auto____0 = (function (){var statearr_12220 = [null,null,null,null,null,null,null];(statearr_12220[(0)] = state_machine__5809__auto__);
(statearr_12220[(1)] = (1));
return statearr_12220;
});
var state_machine__5809__auto____1 = (function (state_12209){while(true){
var ret_value__5810__auto__ = (function (){try{while(true){
var result__5811__auto__ = switch__5808__auto__.call(null,state_12209);if(cljs.core.keyword_identical_QMARK_.call(null,result__5811__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5811__auto__;
}
break;
}
}catch (e12221){if((e12221 instanceof Object))
{var ex__5812__auto__ = e12221;var statearr_12222_12375 = state_12209;(statearr_12222_12375[(5)] = ex__5812__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12209);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e12221;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5810__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__12376 = state_12209;
state_12209 = G__12376;
continue;
}
} else
{return ret_value__5810__auto__;
}
break;
}
});
state_machine__5809__auto__ = function(state_12209){
switch(arguments.length){
case 0:
return state_machine__5809__auto____0.call(this);
case 1:
return state_machine__5809__auto____1.call(this,state_12209);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5809__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5809__auto____0;
state_machine__5809__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5809__auto____1;
return state_machine__5809__auto__;
})()
;})(__12365,switch__5808__auto__,c__5823__auto___12368,G__12196_12366,n__4510__auto___12364,jobs,results,process,async))
})();var state__5825__auto__ = (function (){var statearr_12223 = f__5824__auto__.call(null);(statearr_12223[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5823__auto___12368);
return statearr_12223;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5825__auto__);
});})(__12365,c__5823__auto___12368,G__12196_12366,n__4510__auto___12364,jobs,results,process,async))
);

break;
case "async":
var c__5823__auto___12377 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (__12365,c__5823__auto___12377,G__12196_12366,n__4510__auto___12364,jobs,results,process,async){
return (function (){var f__5824__auto__ = (function (){var switch__5808__auto__ = ((function (__12365,c__5823__auto___12377,G__12196_12366,n__4510__auto___12364,jobs,results,process,async){
return (function (state_12236){var state_val_12237 = (state_12236[(1)]);if((state_val_12237 === (1)))
{var state_12236__$1 = state_12236;var statearr_12238_12378 = state_12236__$1;(statearr_12238_12378[(2)] = null);
(statearr_12238_12378[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12237 === (2)))
{var state_12236__$1 = state_12236;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12236__$1,(4),jobs);
} else
{if((state_val_12237 === (3)))
{var inst_12234 = (state_12236[(2)]);var state_12236__$1 = state_12236;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12236__$1,inst_12234);
} else
{if((state_val_12237 === (4)))
{var inst_12226 = (state_12236[(2)]);var inst_12227 = async.call(null,inst_12226);var state_12236__$1 = state_12236;if(cljs.core.truth_(inst_12227))
{var statearr_12239_12379 = state_12236__$1;(statearr_12239_12379[(1)] = (5));
} else
{var statearr_12240_12380 = state_12236__$1;(statearr_12240_12380[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12237 === (5)))
{var state_12236__$1 = state_12236;var statearr_12241_12381 = state_12236__$1;(statearr_12241_12381[(2)] = null);
(statearr_12241_12381[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12237 === (6)))
{var state_12236__$1 = state_12236;var statearr_12242_12382 = state_12236__$1;(statearr_12242_12382[(2)] = null);
(statearr_12242_12382[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12237 === (7)))
{var inst_12232 = (state_12236[(2)]);var state_12236__$1 = state_12236;var statearr_12243_12383 = state_12236__$1;(statearr_12243_12383[(2)] = inst_12232);
(statearr_12243_12383[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
});})(__12365,c__5823__auto___12377,G__12196_12366,n__4510__auto___12364,jobs,results,process,async))
;return ((function (__12365,switch__5808__auto__,c__5823__auto___12377,G__12196_12366,n__4510__auto___12364,jobs,results,process,async){
return (function() {
var state_machine__5809__auto__ = null;
var state_machine__5809__auto____0 = (function (){var statearr_12247 = [null,null,null,null,null,null,null];(statearr_12247[(0)] = state_machine__5809__auto__);
(statearr_12247[(1)] = (1));
return statearr_12247;
});
var state_machine__5809__auto____1 = (function (state_12236){while(true){
var ret_value__5810__auto__ = (function (){try{while(true){
var result__5811__auto__ = switch__5808__auto__.call(null,state_12236);if(cljs.core.keyword_identical_QMARK_.call(null,result__5811__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5811__auto__;
}
break;
}
}catch (e12248){if((e12248 instanceof Object))
{var ex__5812__auto__ = e12248;var statearr_12249_12384 = state_12236;(statearr_12249_12384[(5)] = ex__5812__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12236);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e12248;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5810__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__12385 = state_12236;
state_12236 = G__12385;
continue;
}
} else
{return ret_value__5810__auto__;
}
break;
}
});
state_machine__5809__auto__ = function(state_12236){
switch(arguments.length){
case 0:
return state_machine__5809__auto____0.call(this);
case 1:
return state_machine__5809__auto____1.call(this,state_12236);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5809__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5809__auto____0;
state_machine__5809__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5809__auto____1;
return state_machine__5809__auto__;
})()
;})(__12365,switch__5808__auto__,c__5823__auto___12377,G__12196_12366,n__4510__auto___12364,jobs,results,process,async))
})();var state__5825__auto__ = (function (){var statearr_12250 = f__5824__auto__.call(null);(statearr_12250[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5823__auto___12377);
return statearr_12250;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5825__auto__);
});})(__12365,c__5823__auto___12377,G__12196_12366,n__4510__auto___12364,jobs,results,process,async))
);

break;
default:
throw (new Error(("No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(type))));

}
{
var G__12386 = (__12365 + (1));
__12365 = G__12386;
continue;
}
} else
{}
break;
}
var c__5823__auto___12387 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5823__auto___12387,jobs,results,process,async){
return (function (){var f__5824__auto__ = (function (){var switch__5808__auto__ = ((function (c__5823__auto___12387,jobs,results,process,async){
return (function (state_12272){var state_val_12273 = (state_12272[(1)]);if((state_val_12273 === (1)))
{var state_12272__$1 = state_12272;var statearr_12274_12388 = state_12272__$1;(statearr_12274_12388[(2)] = null);
(statearr_12274_12388[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12273 === (2)))
{var state_12272__$1 = state_12272;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12272__$1,(4),from);
} else
{if((state_val_12273 === (3)))
{var inst_12270 = (state_12272[(2)]);var state_12272__$1 = state_12272;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12272__$1,inst_12270);
} else
{if((state_val_12273 === (4)))
{var inst_12253 = (state_12272[(7)]);var inst_12253__$1 = (state_12272[(2)]);var inst_12254 = (inst_12253__$1 == null);var state_12272__$1 = (function (){var statearr_12275 = state_12272;(statearr_12275[(7)] = inst_12253__$1);
return statearr_12275;
})();if(cljs.core.truth_(inst_12254))
{var statearr_12276_12389 = state_12272__$1;(statearr_12276_12389[(1)] = (5));
} else
{var statearr_12277_12390 = state_12272__$1;(statearr_12277_12390[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12273 === (5)))
{var inst_12256 = cljs.core.async.close_BANG_.call(null,jobs);var state_12272__$1 = state_12272;var statearr_12278_12391 = state_12272__$1;(statearr_12278_12391[(2)] = inst_12256);
(statearr_12278_12391[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12273 === (6)))
{var inst_12253 = (state_12272[(7)]);var inst_12258 = (state_12272[(8)]);var inst_12258__$1 = cljs.core.async.chan.call(null,(1));var inst_12259 = cljs.core.PersistentVector.EMPTY_NODE;var inst_12260 = [inst_12253,inst_12258__$1];var inst_12261 = (new cljs.core.PersistentVector(null,2,(5),inst_12259,inst_12260,null));var state_12272__$1 = (function (){var statearr_12279 = state_12272;(statearr_12279[(8)] = inst_12258__$1);
return statearr_12279;
})();return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12272__$1,(8),jobs,inst_12261);
} else
{if((state_val_12273 === (7)))
{var inst_12268 = (state_12272[(2)]);var state_12272__$1 = state_12272;var statearr_12280_12392 = state_12272__$1;(statearr_12280_12392[(2)] = inst_12268);
(statearr_12280_12392[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12273 === (8)))
{var inst_12258 = (state_12272[(8)]);var inst_12263 = (state_12272[(2)]);var state_12272__$1 = (function (){var statearr_12281 = state_12272;(statearr_12281[(9)] = inst_12263);
return statearr_12281;
})();return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12272__$1,(9),results,inst_12258);
} else
{if((state_val_12273 === (9)))
{var inst_12265 = (state_12272[(2)]);var state_12272__$1 = (function (){var statearr_12282 = state_12272;(statearr_12282[(10)] = inst_12265);
return statearr_12282;
})();var statearr_12283_12393 = state_12272__$1;(statearr_12283_12393[(2)] = null);
(statearr_12283_12393[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
}
}
});})(c__5823__auto___12387,jobs,results,process,async))
;return ((function (switch__5808__auto__,c__5823__auto___12387,jobs,results,process,async){
return (function() {
var state_machine__5809__auto__ = null;
var state_machine__5809__auto____0 = (function (){var statearr_12287 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_12287[(0)] = state_machine__5809__auto__);
(statearr_12287[(1)] = (1));
return statearr_12287;
});
var state_machine__5809__auto____1 = (function (state_12272){while(true){
var ret_value__5810__auto__ = (function (){try{while(true){
var result__5811__auto__ = switch__5808__auto__.call(null,state_12272);if(cljs.core.keyword_identical_QMARK_.call(null,result__5811__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5811__auto__;
}
break;
}
}catch (e12288){if((e12288 instanceof Object))
{var ex__5812__auto__ = e12288;var statearr_12289_12394 = state_12272;(statearr_12289_12394[(5)] = ex__5812__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12272);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e12288;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5810__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__12395 = state_12272;
state_12272 = G__12395;
continue;
}
} else
{return ret_value__5810__auto__;
}
break;
}
});
state_machine__5809__auto__ = function(state_12272){
switch(arguments.length){
case 0:
return state_machine__5809__auto____0.call(this);
case 1:
return state_machine__5809__auto____1.call(this,state_12272);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5809__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5809__auto____0;
state_machine__5809__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5809__auto____1;
return state_machine__5809__auto__;
})()
;})(switch__5808__auto__,c__5823__auto___12387,jobs,results,process,async))
})();var state__5825__auto__ = (function (){var statearr_12290 = f__5824__auto__.call(null);(statearr_12290[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5823__auto___12387);
return statearr_12290;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5825__auto__);
});})(c__5823__auto___12387,jobs,results,process,async))
);
var c__5823__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5823__auto__,jobs,results,process,async){
return (function (){var f__5824__auto__ = (function (){var switch__5808__auto__ = ((function (c__5823__auto__,jobs,results,process,async){
return (function (state_12328){var state_val_12329 = (state_12328[(1)]);if((state_val_12329 === (7)))
{var inst_12324 = (state_12328[(2)]);var state_12328__$1 = state_12328;var statearr_12330_12396 = state_12328__$1;(statearr_12330_12396[(2)] = inst_12324);
(statearr_12330_12396[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12329 === (20)))
{var state_12328__$1 = state_12328;var statearr_12331_12397 = state_12328__$1;(statearr_12331_12397[(2)] = null);
(statearr_12331_12397[(1)] = (21));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12329 === (1)))
{var state_12328__$1 = state_12328;var statearr_12332_12398 = state_12328__$1;(statearr_12332_12398[(2)] = null);
(statearr_12332_12398[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12329 === (4)))
{var inst_12293 = (state_12328[(7)]);var inst_12293__$1 = (state_12328[(2)]);var inst_12294 = (inst_12293__$1 == null);var state_12328__$1 = (function (){var statearr_12333 = state_12328;(statearr_12333[(7)] = inst_12293__$1);
return statearr_12333;
})();if(cljs.core.truth_(inst_12294))
{var statearr_12334_12399 = state_12328__$1;(statearr_12334_12399[(1)] = (5));
} else
{var statearr_12335_12400 = state_12328__$1;(statearr_12335_12400[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12329 === (15)))
{var inst_12306 = (state_12328[(8)]);var state_12328__$1 = state_12328;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12328__$1,(18),to,inst_12306);
} else
{if((state_val_12329 === (21)))
{var inst_12319 = (state_12328[(2)]);var state_12328__$1 = state_12328;var statearr_12336_12401 = state_12328__$1;(statearr_12336_12401[(2)] = inst_12319);
(statearr_12336_12401[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12329 === (13)))
{var inst_12321 = (state_12328[(2)]);var state_12328__$1 = (function (){var statearr_12337 = state_12328;(statearr_12337[(9)] = inst_12321);
return statearr_12337;
})();var statearr_12338_12402 = state_12328__$1;(statearr_12338_12402[(2)] = null);
(statearr_12338_12402[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12329 === (6)))
{var inst_12293 = (state_12328[(7)]);var state_12328__$1 = state_12328;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12328__$1,(11),inst_12293);
} else
{if((state_val_12329 === (17)))
{var inst_12314 = (state_12328[(2)]);var state_12328__$1 = state_12328;if(cljs.core.truth_(inst_12314))
{var statearr_12339_12403 = state_12328__$1;(statearr_12339_12403[(1)] = (19));
} else
{var statearr_12340_12404 = state_12328__$1;(statearr_12340_12404[(1)] = (20));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12329 === (3)))
{var inst_12326 = (state_12328[(2)]);var state_12328__$1 = state_12328;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12328__$1,inst_12326);
} else
{if((state_val_12329 === (12)))
{var inst_12303 = (state_12328[(10)]);var state_12328__$1 = state_12328;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12328__$1,(14),inst_12303);
} else
{if((state_val_12329 === (2)))
{var state_12328__$1 = state_12328;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12328__$1,(4),results);
} else
{if((state_val_12329 === (19)))
{var state_12328__$1 = state_12328;var statearr_12341_12405 = state_12328__$1;(statearr_12341_12405[(2)] = null);
(statearr_12341_12405[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12329 === (11)))
{var inst_12303 = (state_12328[(2)]);var state_12328__$1 = (function (){var statearr_12342 = state_12328;(statearr_12342[(10)] = inst_12303);
return statearr_12342;
})();var statearr_12343_12406 = state_12328__$1;(statearr_12343_12406[(2)] = null);
(statearr_12343_12406[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12329 === (9)))
{var state_12328__$1 = state_12328;var statearr_12344_12407 = state_12328__$1;(statearr_12344_12407[(2)] = null);
(statearr_12344_12407[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12329 === (5)))
{var state_12328__$1 = state_12328;if(cljs.core.truth_(close_QMARK_))
{var statearr_12345_12408 = state_12328__$1;(statearr_12345_12408[(1)] = (8));
} else
{var statearr_12346_12409 = state_12328__$1;(statearr_12346_12409[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12329 === (14)))
{var inst_12306 = (state_12328[(8)]);var inst_12308 = (state_12328[(11)]);var inst_12306__$1 = (state_12328[(2)]);var inst_12307 = (inst_12306__$1 == null);var inst_12308__$1 = cljs.core.not.call(null,inst_12307);var state_12328__$1 = (function (){var statearr_12347 = state_12328;(statearr_12347[(8)] = inst_12306__$1);
(statearr_12347[(11)] = inst_12308__$1);
return statearr_12347;
})();if(inst_12308__$1)
{var statearr_12348_12410 = state_12328__$1;(statearr_12348_12410[(1)] = (15));
} else
{var statearr_12349_12411 = state_12328__$1;(statearr_12349_12411[(1)] = (16));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12329 === (16)))
{var inst_12308 = (state_12328[(11)]);var state_12328__$1 = state_12328;var statearr_12350_12412 = state_12328__$1;(statearr_12350_12412[(2)] = inst_12308);
(statearr_12350_12412[(1)] = (17));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12329 === (10)))
{var inst_12300 = (state_12328[(2)]);var state_12328__$1 = state_12328;var statearr_12351_12413 = state_12328__$1;(statearr_12351_12413[(2)] = inst_12300);
(statearr_12351_12413[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12329 === (18)))
{var inst_12311 = (state_12328[(2)]);var state_12328__$1 = state_12328;var statearr_12352_12414 = state_12328__$1;(statearr_12352_12414[(2)] = inst_12311);
(statearr_12352_12414[(1)] = (17));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12329 === (8)))
{var inst_12297 = cljs.core.async.close_BANG_.call(null,to);var state_12328__$1 = state_12328;var statearr_12353_12415 = state_12328__$1;(statearr_12353_12415[(2)] = inst_12297);
(statearr_12353_12415[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__5823__auto__,jobs,results,process,async))
;return ((function (switch__5808__auto__,c__5823__auto__,jobs,results,process,async){
return (function() {
var state_machine__5809__auto__ = null;
var state_machine__5809__auto____0 = (function (){var statearr_12357 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_12357[(0)] = state_machine__5809__auto__);
(statearr_12357[(1)] = (1));
return statearr_12357;
});
var state_machine__5809__auto____1 = (function (state_12328){while(true){
var ret_value__5810__auto__ = (function (){try{while(true){
var result__5811__auto__ = switch__5808__auto__.call(null,state_12328);if(cljs.core.keyword_identical_QMARK_.call(null,result__5811__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5811__auto__;
}
break;
}
}catch (e12358){if((e12358 instanceof Object))
{var ex__5812__auto__ = e12358;var statearr_12359_12416 = state_12328;(statearr_12359_12416[(5)] = ex__5812__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12328);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e12358;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5810__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__12417 = state_12328;
state_12328 = G__12417;
continue;
}
} else
{return ret_value__5810__auto__;
}
break;
}
});
state_machine__5809__auto__ = function(state_12328){
switch(arguments.length){
case 0:
return state_machine__5809__auto____0.call(this);
case 1:
return state_machine__5809__auto____1.call(this,state_12328);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5809__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5809__auto____0;
state_machine__5809__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5809__auto____1;
return state_machine__5809__auto__;
})()
;})(switch__5808__auto__,c__5823__auto__,jobs,results,process,async))
})();var state__5825__auto__ = (function (){var statearr_12360 = f__5824__auto__.call(null);(statearr_12360[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5823__auto__);
return statearr_12360;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5825__auto__);
});})(c__5823__auto__,jobs,results,process,async))
);
return c__5823__auto__;
});
/**
* Takes elements from the from channel and supplies them to the to
* channel, subject to the async function af, with parallelism n. af
* must be a function of two arguments, the first an input value and
* the second a channel on which to place the result(s). af must close!
* the channel before returning.  The presumption is that af will
* return immediately, having launched some asynchronous operation
* whose completion/callback will manipulate the result channel. Outputs
* will be returned in order relative to  the inputs. By default, the to
* channel will be closed when the from channel closes, but can be
* determined by the close?  parameter. Will stop consuming the from
* channel if the to channel closes.
*/
cljs.core.async.pipeline_async = (function() {
var pipeline_async = null;
var pipeline_async__4 = (function (n,to,af,from){return pipeline_async.call(null,n,to,af,from,true);
});
var pipeline_async__5 = (function (n,to,af,from,close_QMARK_){return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});
pipeline_async = function(n,to,af,from,close_QMARK_){
switch(arguments.length){
case 4:
return pipeline_async__4.call(this,n,to,af,from);
case 5:
return pipeline_async__5.call(this,n,to,af,from,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
pipeline_async.cljs$core$IFn$_invoke$arity$4 = pipeline_async__4;
pipeline_async.cljs$core$IFn$_invoke$arity$5 = pipeline_async__5;
return pipeline_async;
})()
;
/**
* Takes elements from the from channel and supplies them to the to
* channel, subject to the transducer xf, with parallelism n. Because
* it is parallel, the transducer will be applied independently to each
* element, not across elements, and may produce zero or more outputs
* per input.  Outputs will be returned in order relative to the
* inputs. By default, the to channel will be closed when the from
* channel closes, but can be determined by the close?  parameter. Will
* stop consuming the from channel if the to channel closes.
* 
* Note this is supplied for API compatibility with the Clojure version.
* Values of N > 1 will not result in actual concurrency in a
* single-threaded runtime.
*/
cljs.core.async.pipeline = (function() {
var pipeline = null;
var pipeline__4 = (function (n,to,xf,from){return pipeline.call(null,n,to,xf,from,true);
});
var pipeline__5 = (function (n,to,xf,from,close_QMARK_){return pipeline.call(null,n,to,xf,from,close_QMARK_,null);
});
var pipeline__6 = (function (n,to,xf,from,close_QMARK_,ex_handler){return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});
pipeline = function(n,to,xf,from,close_QMARK_,ex_handler){
switch(arguments.length){
case 4:
return pipeline__4.call(this,n,to,xf,from);
case 5:
return pipeline__5.call(this,n,to,xf,from,close_QMARK_);
case 6:
return pipeline__6.call(this,n,to,xf,from,close_QMARK_,ex_handler);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
pipeline.cljs$core$IFn$_invoke$arity$4 = pipeline__4;
pipeline.cljs$core$IFn$_invoke$arity$5 = pipeline__5;
pipeline.cljs$core$IFn$_invoke$arity$6 = pipeline__6;
return pipeline;
})()
;
/**
* Takes a predicate and a source channel and returns a vector of two
* channels, the first of which will contain the values for which the
* predicate returned true, the second those for which it returned
* false.
* 
* The out channels will be unbuffered by default, or two buf-or-ns can
* be supplied. The channels will close after the source channel has
* closed.
*/
cljs.core.async.split = (function() {
var split = null;
var split__2 = (function (p,ch){return split.call(null,p,ch,null,null);
});
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){var tc = cljs.core.async.chan.call(null,t_buf_or_n);var fc = cljs.core.async.chan.call(null,f_buf_or_n);var c__5823__auto___12518 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5823__auto___12518,tc,fc){
return (function (){var f__5824__auto__ = (function (){var switch__5808__auto__ = ((function (c__5823__auto___12518,tc,fc){
return (function (state_12493){var state_val_12494 = (state_12493[(1)]);if((state_val_12494 === (7)))
{var inst_12489 = (state_12493[(2)]);var state_12493__$1 = state_12493;var statearr_12495_12519 = state_12493__$1;(statearr_12495_12519[(2)] = inst_12489);
(statearr_12495_12519[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12494 === (1)))
{var state_12493__$1 = state_12493;var statearr_12496_12520 = state_12493__$1;(statearr_12496_12520[(2)] = null);
(statearr_12496_12520[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12494 === (4)))
{var inst_12470 = (state_12493[(7)]);var inst_12470__$1 = (state_12493[(2)]);var inst_12471 = (inst_12470__$1 == null);var state_12493__$1 = (function (){var statearr_12497 = state_12493;(statearr_12497[(7)] = inst_12470__$1);
return statearr_12497;
})();if(cljs.core.truth_(inst_12471))
{var statearr_12498_12521 = state_12493__$1;(statearr_12498_12521[(1)] = (5));
} else
{var statearr_12499_12522 = state_12493__$1;(statearr_12499_12522[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12494 === (13)))
{var state_12493__$1 = state_12493;var statearr_12500_12523 = state_12493__$1;(statearr_12500_12523[(2)] = null);
(statearr_12500_12523[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12494 === (6)))
{var inst_12470 = (state_12493[(7)]);var inst_12476 = p.call(null,inst_12470);var state_12493__$1 = state_12493;if(cljs.core.truth_(inst_12476))
{var statearr_12501_12524 = state_12493__$1;(statearr_12501_12524[(1)] = (9));
} else
{var statearr_12502_12525 = state_12493__$1;(statearr_12502_12525[(1)] = (10));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12494 === (3)))
{var inst_12491 = (state_12493[(2)]);var state_12493__$1 = state_12493;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12493__$1,inst_12491);
} else
{if((state_val_12494 === (12)))
{var state_12493__$1 = state_12493;var statearr_12503_12526 = state_12493__$1;(statearr_12503_12526[(2)] = null);
(statearr_12503_12526[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12494 === (2)))
{var state_12493__$1 = state_12493;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12493__$1,(4),ch);
} else
{if((state_val_12494 === (11)))
{var inst_12470 = (state_12493[(7)]);var inst_12480 = (state_12493[(2)]);var state_12493__$1 = state_12493;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12493__$1,(8),inst_12480,inst_12470);
} else
{if((state_val_12494 === (9)))
{var state_12493__$1 = state_12493;var statearr_12504_12527 = state_12493__$1;(statearr_12504_12527[(2)] = tc);
(statearr_12504_12527[(1)] = (11));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12494 === (5)))
{var inst_12473 = cljs.core.async.close_BANG_.call(null,tc);var inst_12474 = cljs.core.async.close_BANG_.call(null,fc);var state_12493__$1 = (function (){var statearr_12505 = state_12493;(statearr_12505[(8)] = inst_12473);
return statearr_12505;
})();var statearr_12506_12528 = state_12493__$1;(statearr_12506_12528[(2)] = inst_12474);
(statearr_12506_12528[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12494 === (14)))
{var inst_12487 = (state_12493[(2)]);var state_12493__$1 = state_12493;var statearr_12507_12529 = state_12493__$1;(statearr_12507_12529[(2)] = inst_12487);
(statearr_12507_12529[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12494 === (10)))
{var state_12493__$1 = state_12493;var statearr_12508_12530 = state_12493__$1;(statearr_12508_12530[(2)] = fc);
(statearr_12508_12530[(1)] = (11));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12494 === (8)))
{var inst_12482 = (state_12493[(2)]);var state_12493__$1 = state_12493;if(cljs.core.truth_(inst_12482))
{var statearr_12509_12531 = state_12493__$1;(statearr_12509_12531[(1)] = (12));
} else
{var statearr_12510_12532 = state_12493__$1;(statearr_12510_12532[(1)] = (13));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__5823__auto___12518,tc,fc))
;return ((function (switch__5808__auto__,c__5823__auto___12518,tc,fc){
return (function() {
var state_machine__5809__auto__ = null;
var state_machine__5809__auto____0 = (function (){var statearr_12514 = [null,null,null,null,null,null,null,null,null];(statearr_12514[(0)] = state_machine__5809__auto__);
(statearr_12514[(1)] = (1));
return statearr_12514;
});
var state_machine__5809__auto____1 = (function (state_12493){while(true){
var ret_value__5810__auto__ = (function (){try{while(true){
var result__5811__auto__ = switch__5808__auto__.call(null,state_12493);if(cljs.core.keyword_identical_QMARK_.call(null,result__5811__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5811__auto__;
}
break;
}
}catch (e12515){if((e12515 instanceof Object))
{var ex__5812__auto__ = e12515;var statearr_12516_12533 = state_12493;(statearr_12516_12533[(5)] = ex__5812__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12493);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e12515;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5810__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__12534 = state_12493;
state_12493 = G__12534;
continue;
}
} else
{return ret_value__5810__auto__;
}
break;
}
});
state_machine__5809__auto__ = function(state_12493){
switch(arguments.length){
case 0:
return state_machine__5809__auto____0.call(this);
case 1:
return state_machine__5809__auto____1.call(this,state_12493);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5809__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5809__auto____0;
state_machine__5809__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5809__auto____1;
return state_machine__5809__auto__;
})()
;})(switch__5808__auto__,c__5823__auto___12518,tc,fc))
})();var state__5825__auto__ = (function (){var statearr_12517 = f__5824__auto__.call(null);(statearr_12517[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5823__auto___12518);
return statearr_12517;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5825__auto__);
});})(c__5823__auto___12518,tc,fc))
);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});
split = function(p,ch,t_buf_or_n,f_buf_or_n){
switch(arguments.length){
case 2:
return split__2.call(this,p,ch);
case 4:
return split__4.call(this,p,ch,t_buf_or_n,f_buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
split.cljs$core$IFn$_invoke$arity$2 = split__2;
split.cljs$core$IFn$_invoke$arity$4 = split__4;
return split;
})()
;
/**
* f should be a function of 2 arguments. Returns a channel containing
* the single result of applying f to init and the first item from the
* channel, then applying f to that result and the 2nd item, etc. If
* the channel closes without yielding items, returns init and f is not
* called. ch must close before reduce produces a result.
*/
cljs.core.async.reduce = (function reduce(f,init,ch){var c__5823__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5823__auto__){
return (function (){var f__5824__auto__ = (function (){var switch__5808__auto__ = ((function (c__5823__auto__){
return (function (state_12581){var state_val_12582 = (state_12581[(1)]);if((state_val_12582 === (1)))
{var inst_12567 = init;var state_12581__$1 = (function (){var statearr_12583 = state_12581;(statearr_12583[(7)] = inst_12567);
return statearr_12583;
})();var statearr_12584_12599 = state_12581__$1;(statearr_12584_12599[(2)] = null);
(statearr_12584_12599[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12582 === (2)))
{var state_12581__$1 = state_12581;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12581__$1,(4),ch);
} else
{if((state_val_12582 === (3)))
{var inst_12579 = (state_12581[(2)]);var state_12581__$1 = state_12581;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12581__$1,inst_12579);
} else
{if((state_val_12582 === (4)))
{var inst_12570 = (state_12581[(8)]);var inst_12570__$1 = (state_12581[(2)]);var inst_12571 = (inst_12570__$1 == null);var state_12581__$1 = (function (){var statearr_12585 = state_12581;(statearr_12585[(8)] = inst_12570__$1);
return statearr_12585;
})();if(cljs.core.truth_(inst_12571))
{var statearr_12586_12600 = state_12581__$1;(statearr_12586_12600[(1)] = (5));
} else
{var statearr_12587_12601 = state_12581__$1;(statearr_12587_12601[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12582 === (5)))
{var inst_12567 = (state_12581[(7)]);var state_12581__$1 = state_12581;var statearr_12588_12602 = state_12581__$1;(statearr_12588_12602[(2)] = inst_12567);
(statearr_12588_12602[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12582 === (6)))
{var inst_12567 = (state_12581[(7)]);var inst_12570 = (state_12581[(8)]);var inst_12574 = f.call(null,inst_12567,inst_12570);var inst_12567__$1 = inst_12574;var state_12581__$1 = (function (){var statearr_12589 = state_12581;(statearr_12589[(7)] = inst_12567__$1);
return statearr_12589;
})();var statearr_12590_12603 = state_12581__$1;(statearr_12590_12603[(2)] = null);
(statearr_12590_12603[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12582 === (7)))
{var inst_12577 = (state_12581[(2)]);var state_12581__$1 = state_12581;var statearr_12591_12604 = state_12581__$1;(statearr_12591_12604[(2)] = inst_12577);
(statearr_12591_12604[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
});})(c__5823__auto__))
;return ((function (switch__5808__auto__,c__5823__auto__){
return (function() {
var state_machine__5809__auto__ = null;
var state_machine__5809__auto____0 = (function (){var statearr_12595 = [null,null,null,null,null,null,null,null,null];(statearr_12595[(0)] = state_machine__5809__auto__);
(statearr_12595[(1)] = (1));
return statearr_12595;
});
var state_machine__5809__auto____1 = (function (state_12581){while(true){
var ret_value__5810__auto__ = (function (){try{while(true){
var result__5811__auto__ = switch__5808__auto__.call(null,state_12581);if(cljs.core.keyword_identical_QMARK_.call(null,result__5811__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5811__auto__;
}
break;
}
}catch (e12596){if((e12596 instanceof Object))
{var ex__5812__auto__ = e12596;var statearr_12597_12605 = state_12581;(statearr_12597_12605[(5)] = ex__5812__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12581);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e12596;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5810__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__12606 = state_12581;
state_12581 = G__12606;
continue;
}
} else
{return ret_value__5810__auto__;
}
break;
}
});
state_machine__5809__auto__ = function(state_12581){
switch(arguments.length){
case 0:
return state_machine__5809__auto____0.call(this);
case 1:
return state_machine__5809__auto____1.call(this,state_12581);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5809__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5809__auto____0;
state_machine__5809__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5809__auto____1;
return state_machine__5809__auto__;
})()
;})(switch__5808__auto__,c__5823__auto__))
})();var state__5825__auto__ = (function (){var statearr_12598 = f__5824__auto__.call(null);(statearr_12598[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5823__auto__);
return statearr_12598;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5825__auto__);
});})(c__5823__auto__))
);
return c__5823__auto__;
});
/**
* Puts the contents of coll into the supplied channel.
* 
* By default the channel will be closed after the items are copied,
* but can be determined by the close? parameter.
* 
* Returns a channel which will close after the items are copied.
*/
cljs.core.async.onto_chan = (function() {
var onto_chan = null;
var onto_chan__2 = (function (ch,coll){return onto_chan.call(null,ch,coll,true);
});
var onto_chan__3 = (function (ch,coll,close_QMARK_){var c__5823__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5823__auto__){
return (function (){var f__5824__auto__ = (function (){var switch__5808__auto__ = ((function (c__5823__auto__){
return (function (state_12680){var state_val_12681 = (state_12680[(1)]);if((state_val_12681 === (7)))
{var inst_12662 = (state_12680[(2)]);var state_12680__$1 = state_12680;var statearr_12682_12705 = state_12680__$1;(statearr_12682_12705[(2)] = inst_12662);
(statearr_12682_12705[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12681 === (1)))
{var inst_12656 = cljs.core.seq.call(null,coll);var inst_12657 = inst_12656;var state_12680__$1 = (function (){var statearr_12683 = state_12680;(statearr_12683[(7)] = inst_12657);
return statearr_12683;
})();var statearr_12684_12706 = state_12680__$1;(statearr_12684_12706[(2)] = null);
(statearr_12684_12706[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12681 === (4)))
{var inst_12657 = (state_12680[(7)]);var inst_12660 = cljs.core.first.call(null,inst_12657);var state_12680__$1 = state_12680;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12680__$1,(7),ch,inst_12660);
} else
{if((state_val_12681 === (13)))
{var inst_12674 = (state_12680[(2)]);var state_12680__$1 = state_12680;var statearr_12685_12707 = state_12680__$1;(statearr_12685_12707[(2)] = inst_12674);
(statearr_12685_12707[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12681 === (6)))
{var inst_12665 = (state_12680[(2)]);var state_12680__$1 = state_12680;if(cljs.core.truth_(inst_12665))
{var statearr_12686_12708 = state_12680__$1;(statearr_12686_12708[(1)] = (8));
} else
{var statearr_12687_12709 = state_12680__$1;(statearr_12687_12709[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12681 === (3)))
{var inst_12678 = (state_12680[(2)]);var state_12680__$1 = state_12680;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12680__$1,inst_12678);
} else
{if((state_val_12681 === (12)))
{var state_12680__$1 = state_12680;var statearr_12688_12710 = state_12680__$1;(statearr_12688_12710[(2)] = null);
(statearr_12688_12710[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12681 === (2)))
{var inst_12657 = (state_12680[(7)]);var state_12680__$1 = state_12680;if(cljs.core.truth_(inst_12657))
{var statearr_12689_12711 = state_12680__$1;(statearr_12689_12711[(1)] = (4));
} else
{var statearr_12690_12712 = state_12680__$1;(statearr_12690_12712[(1)] = (5));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12681 === (11)))
{var inst_12671 = cljs.core.async.close_BANG_.call(null,ch);var state_12680__$1 = state_12680;var statearr_12691_12713 = state_12680__$1;(statearr_12691_12713[(2)] = inst_12671);
(statearr_12691_12713[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12681 === (9)))
{var state_12680__$1 = state_12680;if(cljs.core.truth_(close_QMARK_))
{var statearr_12692_12714 = state_12680__$1;(statearr_12692_12714[(1)] = (11));
} else
{var statearr_12693_12715 = state_12680__$1;(statearr_12693_12715[(1)] = (12));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12681 === (5)))
{var inst_12657 = (state_12680[(7)]);var state_12680__$1 = state_12680;var statearr_12694_12716 = state_12680__$1;(statearr_12694_12716[(2)] = inst_12657);
(statearr_12694_12716[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12681 === (10)))
{var inst_12676 = (state_12680[(2)]);var state_12680__$1 = state_12680;var statearr_12695_12717 = state_12680__$1;(statearr_12695_12717[(2)] = inst_12676);
(statearr_12695_12717[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12681 === (8)))
{var inst_12657 = (state_12680[(7)]);var inst_12667 = cljs.core.next.call(null,inst_12657);var inst_12657__$1 = inst_12667;var state_12680__$1 = (function (){var statearr_12696 = state_12680;(statearr_12696[(7)] = inst_12657__$1);
return statearr_12696;
})();var statearr_12697_12718 = state_12680__$1;(statearr_12697_12718[(2)] = null);
(statearr_12697_12718[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__5823__auto__))
;return ((function (switch__5808__auto__,c__5823__auto__){
return (function() {
var state_machine__5809__auto__ = null;
var state_machine__5809__auto____0 = (function (){var statearr_12701 = [null,null,null,null,null,null,null,null];(statearr_12701[(0)] = state_machine__5809__auto__);
(statearr_12701[(1)] = (1));
return statearr_12701;
});
var state_machine__5809__auto____1 = (function (state_12680){while(true){
var ret_value__5810__auto__ = (function (){try{while(true){
var result__5811__auto__ = switch__5808__auto__.call(null,state_12680);if(cljs.core.keyword_identical_QMARK_.call(null,result__5811__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5811__auto__;
}
break;
}
}catch (e12702){if((e12702 instanceof Object))
{var ex__5812__auto__ = e12702;var statearr_12703_12719 = state_12680;(statearr_12703_12719[(5)] = ex__5812__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12680);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e12702;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5810__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__12720 = state_12680;
state_12680 = G__12720;
continue;
}
} else
{return ret_value__5810__auto__;
}
break;
}
});
state_machine__5809__auto__ = function(state_12680){
switch(arguments.length){
case 0:
return state_machine__5809__auto____0.call(this);
case 1:
return state_machine__5809__auto____1.call(this,state_12680);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5809__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5809__auto____0;
state_machine__5809__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5809__auto____1;
return state_machine__5809__auto__;
})()
;})(switch__5808__auto__,c__5823__auto__))
})();var state__5825__auto__ = (function (){var statearr_12704 = f__5824__auto__.call(null);(statearr_12704[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5823__auto__);
return statearr_12704;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5825__auto__);
});})(c__5823__auto__))
);
return c__5823__auto__;
});
onto_chan = function(ch,coll,close_QMARK_){
switch(arguments.length){
case 2:
return onto_chan__2.call(this,ch,coll);
case 3:
return onto_chan__3.call(this,ch,coll,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
onto_chan.cljs$core$IFn$_invoke$arity$2 = onto_chan__2;
onto_chan.cljs$core$IFn$_invoke$arity$3 = onto_chan__3;
return onto_chan;
})()
;
/**
* Creates and returns a channel which contains the contents of coll,
* closing when exhausted.
*/
cljs.core.async.to_chan = (function to_chan(coll){var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));cljs.core.async.onto_chan.call(null,ch,coll);
return ch;
});
cljs.core.async.Mux = (function (){var obj12722 = {};return obj12722;
})();
cljs.core.async.muxch_STAR_ = (function muxch_STAR_(_){if((function (){var and__3628__auto__ = _;if(and__3628__auto__)
{return _.cljs$core$async$Mux$muxch_STAR_$arity$1;
} else
{return and__3628__auto__;
}
})())
{return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else
{var x__4277__auto__ = (((_ == null))?null:_);return (function (){var or__3640__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4277__auto__)]);if(or__3640__auto__)
{return or__3640__auto__;
} else
{var or__3640__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);if(or__3640__auto____$1)
{return or__3640__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
})().call(null,_);
}
});
cljs.core.async.Mult = (function (){var obj12724 = {};return obj12724;
})();
cljs.core.async.tap_STAR_ = (function tap_STAR_(m,ch,close_QMARK_){if((function (){var and__3628__auto__ = m;if(and__3628__auto__)
{return m.cljs$core$async$Mult$tap_STAR_$arity$3;
} else
{return and__3628__auto__;
}
})())
{return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else
{var x__4277__auto__ = (((m == null))?null:m);return (function (){var or__3640__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4277__auto__)]);if(or__3640__auto__)
{return or__3640__auto__;
} else
{var or__3640__auto____$1 = (cljs.core.async.tap_STAR_["_"]);if(or__3640__auto____$1)
{return or__3640__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
})().call(null,m,ch,close_QMARK_);
}
});
cljs.core.async.untap_STAR_ = (function untap_STAR_(m,ch){if((function (){var and__3628__auto__ = m;if(and__3628__auto__)
{return m.cljs$core$async$Mult$untap_STAR_$arity$2;
} else
{return and__3628__auto__;
}
})())
{return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else
{var x__4277__auto__ = (((m == null))?null:m);return (function (){var or__3640__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4277__auto__)]);if(or__3640__auto__)
{return or__3640__auto__;
} else
{var or__3640__auto____$1 = (cljs.core.async.untap_STAR_["_"]);if(or__3640__auto____$1)
{return or__3640__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.untap_all_STAR_ = (function untap_all_STAR_(m){if((function (){var and__3628__auto__ = m;if(and__3628__auto__)
{return m.cljs$core$async$Mult$untap_all_STAR_$arity$1;
} else
{return and__3628__auto__;
}
})())
{return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else
{var x__4277__auto__ = (((m == null))?null:m);return (function (){var or__3640__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4277__auto__)]);if(or__3640__auto__)
{return or__3640__auto__;
} else
{var or__3640__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);if(or__3640__auto____$1)
{return or__3640__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
})().call(null,m);
}
});
/**
* Creates and returns a mult(iple) of the supplied channel. Channels
* containing copies of the channel can be created with 'tap', and
* detached with 'untap'.
* 
* Each item is distributed to all taps in parallel and synchronously,
* i.e. each tap must accept before the next item is distributed. Use
* buffering/windowing to prevent slow taps from holding up the mult.
* 
* Items received when there are no taps get dropped.
* 
* If a tap puts to a closed channel, it will be removed from the mult.
*/
cljs.core.async.mult = (function mult(ch){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var m = (function (){if(typeof cljs.core.async.t12946 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t12946 = (function (mult,ch,cs,meta12947){
this.mult = mult;
this.ch = ch;
this.cs = cs;
this.meta12947 = meta12947;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t12946.cljs$lang$type = true;
cljs.core.async.t12946.cljs$lang$ctorStr = "cljs.core.async/t12946";
cljs.core.async.t12946.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){return cljs.core._write.call(null,writer__4218__auto__,"cljs.core.async/t12946");
});})(cs))
;
cljs.core.async.t12946.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_12948,meta12947__$1){var self__ = this;
var _12948__$1 = this;return (new cljs.core.async.t12946(self__.mult,self__.ch,self__.cs,meta12947__$1));
});})(cs))
;
cljs.core.async.t12946.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_12948){var self__ = this;
var _12948__$1 = this;return self__.meta12947;
});})(cs))
;
cljs.core.async.t12946.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t12946.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(cs))
;
cljs.core.async.t12946.prototype.cljs$core$async$Mult$ = true;
cljs.core.async.t12946.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$2,close_QMARK_){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$2,close_QMARK_);
return null;
});})(cs))
;
cljs.core.async.t12946.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$2){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$2);
return null;
});})(cs))
;
cljs.core.async.t12946.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return null;
});})(cs))
;
cljs.core.async.__GT_t12946 = ((function (cs){
return (function __GT_t12946(mult__$1,ch__$1,cs__$1,meta12947){return (new cljs.core.async.t12946(mult__$1,ch__$1,cs__$1,meta12947));
});})(cs))
;
}
return (new cljs.core.async.t12946(mult,ch,cs,null));
})();var dchan = cljs.core.async.chan.call(null,(1));var dctr = cljs.core.atom.call(null,null);var done = ((function (cs,m,dchan,dctr){
return (function (_){if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0)))
{return cljs.core.async.put_BANG_.call(null,dchan,true);
} else
{return null;
}
});})(cs,m,dchan,dctr))
;var c__5823__auto___13167 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5823__auto___13167,cs,m,dchan,dctr,done){
return (function (){var f__5824__auto__ = (function (){var switch__5808__auto__ = ((function (c__5823__auto___13167,cs,m,dchan,dctr,done){
return (function (state_13079){var state_val_13080 = (state_13079[(1)]);if((state_val_13080 === (7)))
{var inst_13075 = (state_13079[(2)]);var state_13079__$1 = state_13079;var statearr_13081_13168 = state_13079__$1;(statearr_13081_13168[(2)] = inst_13075);
(statearr_13081_13168[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13080 === (20)))
{var inst_12980 = (state_13079[(7)]);var inst_12990 = cljs.core.first.call(null,inst_12980);var inst_12991 = cljs.core.nth.call(null,inst_12990,(0),null);var inst_12992 = cljs.core.nth.call(null,inst_12990,(1),null);var state_13079__$1 = (function (){var statearr_13082 = state_13079;(statearr_13082[(8)] = inst_12991);
return statearr_13082;
})();if(cljs.core.truth_(inst_12992))
{var statearr_13083_13169 = state_13079__$1;(statearr_13083_13169[(1)] = (22));
} else
{var statearr_13084_13170 = state_13079__$1;(statearr_13084_13170[(1)] = (23));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13080 === (27)))
{var inst_13027 = (state_13079[(9)]);var inst_13020 = (state_13079[(10)]);var inst_13022 = (state_13079[(11)]);var inst_12951 = (state_13079[(12)]);var inst_13027__$1 = cljs.core._nth.call(null,inst_13020,inst_13022);var inst_13028 = cljs.core.async.put_BANG_.call(null,inst_13027__$1,inst_12951,done);var state_13079__$1 = (function (){var statearr_13085 = state_13079;(statearr_13085[(9)] = inst_13027__$1);
return statearr_13085;
})();if(cljs.core.truth_(inst_13028))
{var statearr_13086_13171 = state_13079__$1;(statearr_13086_13171[(1)] = (30));
} else
{var statearr_13087_13172 = state_13079__$1;(statearr_13087_13172[(1)] = (31));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13080 === (1)))
{var state_13079__$1 = state_13079;var statearr_13088_13173 = state_13079__$1;(statearr_13088_13173[(2)] = null);
(statearr_13088_13173[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13080 === (24)))
{var inst_12980 = (state_13079[(7)]);var inst_12997 = (state_13079[(2)]);var inst_12998 = cljs.core.next.call(null,inst_12980);var inst_12960 = inst_12998;var inst_12961 = null;var inst_12962 = (0);var inst_12963 = (0);var state_13079__$1 = (function (){var statearr_13089 = state_13079;(statearr_13089[(13)] = inst_12960);
(statearr_13089[(14)] = inst_12963);
(statearr_13089[(15)] = inst_12961);
(statearr_13089[(16)] = inst_12962);
(statearr_13089[(17)] = inst_12997);
return statearr_13089;
})();var statearr_13090_13174 = state_13079__$1;(statearr_13090_13174[(2)] = null);
(statearr_13090_13174[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13080 === (39)))
{var state_13079__$1 = state_13079;var statearr_13094_13175 = state_13079__$1;(statearr_13094_13175[(2)] = null);
(statearr_13094_13175[(1)] = (41));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13080 === (4)))
{var inst_12951 = (state_13079[(12)]);var inst_12951__$1 = (state_13079[(2)]);var inst_12952 = (inst_12951__$1 == null);var state_13079__$1 = (function (){var statearr_13095 = state_13079;(statearr_13095[(12)] = inst_12951__$1);
return statearr_13095;
})();if(cljs.core.truth_(inst_12952))
{var statearr_13096_13176 = state_13079__$1;(statearr_13096_13176[(1)] = (5));
} else
{var statearr_13097_13177 = state_13079__$1;(statearr_13097_13177[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13080 === (15)))
{var inst_12960 = (state_13079[(13)]);var inst_12963 = (state_13079[(14)]);var inst_12961 = (state_13079[(15)]);var inst_12962 = (state_13079[(16)]);var inst_12976 = (state_13079[(2)]);var inst_12977 = (inst_12963 + (1));var tmp13091 = inst_12960;var tmp13092 = inst_12961;var tmp13093 = inst_12962;var inst_12960__$1 = tmp13091;var inst_12961__$1 = tmp13092;var inst_12962__$1 = tmp13093;var inst_12963__$1 = inst_12977;var state_13079__$1 = (function (){var statearr_13098 = state_13079;(statearr_13098[(13)] = inst_12960__$1);
(statearr_13098[(14)] = inst_12963__$1);
(statearr_13098[(15)] = inst_12961__$1);
(statearr_13098[(16)] = inst_12962__$1);
(statearr_13098[(18)] = inst_12976);
return statearr_13098;
})();var statearr_13099_13178 = state_13079__$1;(statearr_13099_13178[(2)] = null);
(statearr_13099_13178[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13080 === (21)))
{var inst_13001 = (state_13079[(2)]);var state_13079__$1 = state_13079;var statearr_13103_13179 = state_13079__$1;(statearr_13103_13179[(2)] = inst_13001);
(statearr_13103_13179[(1)] = (18));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13080 === (31)))
{var inst_13027 = (state_13079[(9)]);var inst_13031 = done.call(null,null);var inst_13032 = cljs.core.async.untap_STAR_.call(null,m,inst_13027);var state_13079__$1 = (function (){var statearr_13104 = state_13079;(statearr_13104[(19)] = inst_13031);
return statearr_13104;
})();var statearr_13105_13180 = state_13079__$1;(statearr_13105_13180[(2)] = inst_13032);
(statearr_13105_13180[(1)] = (32));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13080 === (32)))
{var inst_13019 = (state_13079[(20)]);var inst_13020 = (state_13079[(10)]);var inst_13022 = (state_13079[(11)]);var inst_13021 = (state_13079[(21)]);var inst_13034 = (state_13079[(2)]);var inst_13035 = (inst_13022 + (1));var tmp13100 = inst_13019;var tmp13101 = inst_13020;var tmp13102 = inst_13021;var inst_13019__$1 = tmp13100;var inst_13020__$1 = tmp13101;var inst_13021__$1 = tmp13102;var inst_13022__$1 = inst_13035;var state_13079__$1 = (function (){var statearr_13106 = state_13079;(statearr_13106[(20)] = inst_13019__$1);
(statearr_13106[(10)] = inst_13020__$1);
(statearr_13106[(11)] = inst_13022__$1);
(statearr_13106[(21)] = inst_13021__$1);
(statearr_13106[(22)] = inst_13034);
return statearr_13106;
})();var statearr_13107_13181 = state_13079__$1;(statearr_13107_13181[(2)] = null);
(statearr_13107_13181[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13080 === (40)))
{var inst_13047 = (state_13079[(23)]);var inst_13051 = done.call(null,null);var inst_13052 = cljs.core.async.untap_STAR_.call(null,m,inst_13047);var state_13079__$1 = (function (){var statearr_13108 = state_13079;(statearr_13108[(24)] = inst_13051);
return statearr_13108;
})();var statearr_13109_13182 = state_13079__$1;(statearr_13109_13182[(2)] = inst_13052);
(statearr_13109_13182[(1)] = (41));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13080 === (33)))
{var inst_13038 = (state_13079[(25)]);var inst_13040 = cljs.core.chunked_seq_QMARK_.call(null,inst_13038);var state_13079__$1 = state_13079;if(inst_13040)
{var statearr_13110_13183 = state_13079__$1;(statearr_13110_13183[(1)] = (36));
} else
{var statearr_13111_13184 = state_13079__$1;(statearr_13111_13184[(1)] = (37));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13080 === (13)))
{var inst_12970 = (state_13079[(26)]);var inst_12973 = cljs.core.async.close_BANG_.call(null,inst_12970);var state_13079__$1 = state_13079;var statearr_13112_13185 = state_13079__$1;(statearr_13112_13185[(2)] = inst_12973);
(statearr_13112_13185[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13080 === (22)))
{var inst_12991 = (state_13079[(8)]);var inst_12994 = cljs.core.async.close_BANG_.call(null,inst_12991);var state_13079__$1 = state_13079;var statearr_13113_13186 = state_13079__$1;(statearr_13113_13186[(2)] = inst_12994);
(statearr_13113_13186[(1)] = (24));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13080 === (36)))
{var inst_13038 = (state_13079[(25)]);var inst_13042 = cljs.core.chunk_first.call(null,inst_13038);var inst_13043 = cljs.core.chunk_rest.call(null,inst_13038);var inst_13044 = cljs.core.count.call(null,inst_13042);var inst_13019 = inst_13043;var inst_13020 = inst_13042;var inst_13021 = inst_13044;var inst_13022 = (0);var state_13079__$1 = (function (){var statearr_13114 = state_13079;(statearr_13114[(20)] = inst_13019);
(statearr_13114[(10)] = inst_13020);
(statearr_13114[(11)] = inst_13022);
(statearr_13114[(21)] = inst_13021);
return statearr_13114;
})();var statearr_13115_13187 = state_13079__$1;(statearr_13115_13187[(2)] = null);
(statearr_13115_13187[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13080 === (41)))
{var inst_13038 = (state_13079[(25)]);var inst_13054 = (state_13079[(2)]);var inst_13055 = cljs.core.next.call(null,inst_13038);var inst_13019 = inst_13055;var inst_13020 = null;var inst_13021 = (0);var inst_13022 = (0);var state_13079__$1 = (function (){var statearr_13116 = state_13079;(statearr_13116[(20)] = inst_13019);
(statearr_13116[(10)] = inst_13020);
(statearr_13116[(27)] = inst_13054);
(statearr_13116[(11)] = inst_13022);
(statearr_13116[(21)] = inst_13021);
return statearr_13116;
})();var statearr_13117_13188 = state_13079__$1;(statearr_13117_13188[(2)] = null);
(statearr_13117_13188[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13080 === (43)))
{var state_13079__$1 = state_13079;var statearr_13118_13189 = state_13079__$1;(statearr_13118_13189[(2)] = null);
(statearr_13118_13189[(1)] = (44));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13080 === (29)))
{var inst_13063 = (state_13079[(2)]);var state_13079__$1 = state_13079;var statearr_13119_13190 = state_13079__$1;(statearr_13119_13190[(2)] = inst_13063);
(statearr_13119_13190[(1)] = (26));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13080 === (44)))
{var inst_13072 = (state_13079[(2)]);var state_13079__$1 = (function (){var statearr_13120 = state_13079;(statearr_13120[(28)] = inst_13072);
return statearr_13120;
})();var statearr_13121_13191 = state_13079__$1;(statearr_13121_13191[(2)] = null);
(statearr_13121_13191[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13080 === (6)))
{var inst_13011 = (state_13079[(29)]);var inst_13010 = cljs.core.deref.call(null,cs);var inst_13011__$1 = cljs.core.keys.call(null,inst_13010);var inst_13012 = cljs.core.count.call(null,inst_13011__$1);var inst_13013 = cljs.core.reset_BANG_.call(null,dctr,inst_13012);var inst_13018 = cljs.core.seq.call(null,inst_13011__$1);var inst_13019 = inst_13018;var inst_13020 = null;var inst_13021 = (0);var inst_13022 = (0);var state_13079__$1 = (function (){var statearr_13122 = state_13079;(statearr_13122[(20)] = inst_13019);
(statearr_13122[(29)] = inst_13011__$1);
(statearr_13122[(10)] = inst_13020);
(statearr_13122[(11)] = inst_13022);
(statearr_13122[(21)] = inst_13021);
(statearr_13122[(30)] = inst_13013);
return statearr_13122;
})();var statearr_13123_13192 = state_13079__$1;(statearr_13123_13192[(2)] = null);
(statearr_13123_13192[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13080 === (28)))
{var inst_13019 = (state_13079[(20)]);var inst_13038 = (state_13079[(25)]);var inst_13038__$1 = cljs.core.seq.call(null,inst_13019);var state_13079__$1 = (function (){var statearr_13124 = state_13079;(statearr_13124[(25)] = inst_13038__$1);
return statearr_13124;
})();if(inst_13038__$1)
{var statearr_13125_13193 = state_13079__$1;(statearr_13125_13193[(1)] = (33));
} else
{var statearr_13126_13194 = state_13079__$1;(statearr_13126_13194[(1)] = (34));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13080 === (25)))
{var inst_13022 = (state_13079[(11)]);var inst_13021 = (state_13079[(21)]);var inst_13024 = (inst_13022 < inst_13021);var inst_13025 = inst_13024;var state_13079__$1 = state_13079;if(cljs.core.truth_(inst_13025))
{var statearr_13127_13195 = state_13079__$1;(statearr_13127_13195[(1)] = (27));
} else
{var statearr_13128_13196 = state_13079__$1;(statearr_13128_13196[(1)] = (28));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13080 === (34)))
{var state_13079__$1 = state_13079;var statearr_13129_13197 = state_13079__$1;(statearr_13129_13197[(2)] = null);
(statearr_13129_13197[(1)] = (35));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13080 === (17)))
{var state_13079__$1 = state_13079;var statearr_13130_13198 = state_13079__$1;(statearr_13130_13198[(2)] = null);
(statearr_13130_13198[(1)] = (18));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13080 === (3)))
{var inst_13077 = (state_13079[(2)]);var state_13079__$1 = state_13079;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13079__$1,inst_13077);
} else
{if((state_val_13080 === (12)))
{var inst_13006 = (state_13079[(2)]);var state_13079__$1 = state_13079;var statearr_13131_13199 = state_13079__$1;(statearr_13131_13199[(2)] = inst_13006);
(statearr_13131_13199[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13080 === (2)))
{var state_13079__$1 = state_13079;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13079__$1,(4),ch);
} else
{if((state_val_13080 === (23)))
{var state_13079__$1 = state_13079;var statearr_13132_13200 = state_13079__$1;(statearr_13132_13200[(2)] = null);
(statearr_13132_13200[(1)] = (24));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13080 === (35)))
{var inst_13061 = (state_13079[(2)]);var state_13079__$1 = state_13079;var statearr_13133_13201 = state_13079__$1;(statearr_13133_13201[(2)] = inst_13061);
(statearr_13133_13201[(1)] = (29));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13080 === (19)))
{var inst_12980 = (state_13079[(7)]);var inst_12984 = cljs.core.chunk_first.call(null,inst_12980);var inst_12985 = cljs.core.chunk_rest.call(null,inst_12980);var inst_12986 = cljs.core.count.call(null,inst_12984);var inst_12960 = inst_12985;var inst_12961 = inst_12984;var inst_12962 = inst_12986;var inst_12963 = (0);var state_13079__$1 = (function (){var statearr_13134 = state_13079;(statearr_13134[(13)] = inst_12960);
(statearr_13134[(14)] = inst_12963);
(statearr_13134[(15)] = inst_12961);
(statearr_13134[(16)] = inst_12962);
return statearr_13134;
})();var statearr_13135_13202 = state_13079__$1;(statearr_13135_13202[(2)] = null);
(statearr_13135_13202[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13080 === (11)))
{var inst_12960 = (state_13079[(13)]);var inst_12980 = (state_13079[(7)]);var inst_12980__$1 = cljs.core.seq.call(null,inst_12960);var state_13079__$1 = (function (){var statearr_13136 = state_13079;(statearr_13136[(7)] = inst_12980__$1);
return statearr_13136;
})();if(inst_12980__$1)
{var statearr_13137_13203 = state_13079__$1;(statearr_13137_13203[(1)] = (16));
} else
{var statearr_13138_13204 = state_13079__$1;(statearr_13138_13204[(1)] = (17));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13080 === (9)))
{var inst_13008 = (state_13079[(2)]);var state_13079__$1 = state_13079;var statearr_13139_13205 = state_13079__$1;(statearr_13139_13205[(2)] = inst_13008);
(statearr_13139_13205[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13080 === (5)))
{var inst_12958 = cljs.core.deref.call(null,cs);var inst_12959 = cljs.core.seq.call(null,inst_12958);var inst_12960 = inst_12959;var inst_12961 = null;var inst_12962 = (0);var inst_12963 = (0);var state_13079__$1 = (function (){var statearr_13140 = state_13079;(statearr_13140[(13)] = inst_12960);
(statearr_13140[(14)] = inst_12963);
(statearr_13140[(15)] = inst_12961);
(statearr_13140[(16)] = inst_12962);
return statearr_13140;
})();var statearr_13141_13206 = state_13079__$1;(statearr_13141_13206[(2)] = null);
(statearr_13141_13206[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13080 === (14)))
{var state_13079__$1 = state_13079;var statearr_13142_13207 = state_13079__$1;(statearr_13142_13207[(2)] = null);
(statearr_13142_13207[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13080 === (45)))
{var inst_13069 = (state_13079[(2)]);var state_13079__$1 = state_13079;var statearr_13143_13208 = state_13079__$1;(statearr_13143_13208[(2)] = inst_13069);
(statearr_13143_13208[(1)] = (44));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13080 === (26)))
{var inst_13011 = (state_13079[(29)]);var inst_13065 = (state_13079[(2)]);var inst_13066 = cljs.core.seq.call(null,inst_13011);var state_13079__$1 = (function (){var statearr_13144 = state_13079;(statearr_13144[(31)] = inst_13065);
return statearr_13144;
})();if(inst_13066)
{var statearr_13145_13209 = state_13079__$1;(statearr_13145_13209[(1)] = (42));
} else
{var statearr_13146_13210 = state_13079__$1;(statearr_13146_13210[(1)] = (43));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13080 === (16)))
{var inst_12980 = (state_13079[(7)]);var inst_12982 = cljs.core.chunked_seq_QMARK_.call(null,inst_12980);var state_13079__$1 = state_13079;if(inst_12982)
{var statearr_13147_13211 = state_13079__$1;(statearr_13147_13211[(1)] = (19));
} else
{var statearr_13148_13212 = state_13079__$1;(statearr_13148_13212[(1)] = (20));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13080 === (38)))
{var inst_13058 = (state_13079[(2)]);var state_13079__$1 = state_13079;var statearr_13149_13213 = state_13079__$1;(statearr_13149_13213[(2)] = inst_13058);
(statearr_13149_13213[(1)] = (35));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13080 === (30)))
{var state_13079__$1 = state_13079;var statearr_13150_13214 = state_13079__$1;(statearr_13150_13214[(2)] = null);
(statearr_13150_13214[(1)] = (32));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13080 === (10)))
{var inst_12963 = (state_13079[(14)]);var inst_12961 = (state_13079[(15)]);var inst_12969 = cljs.core._nth.call(null,inst_12961,inst_12963);var inst_12970 = cljs.core.nth.call(null,inst_12969,(0),null);var inst_12971 = cljs.core.nth.call(null,inst_12969,(1),null);var state_13079__$1 = (function (){var statearr_13151 = state_13079;(statearr_13151[(26)] = inst_12970);
return statearr_13151;
})();if(cljs.core.truth_(inst_12971))
{var statearr_13152_13215 = state_13079__$1;(statearr_13152_13215[(1)] = (13));
} else
{var statearr_13153_13216 = state_13079__$1;(statearr_13153_13216[(1)] = (14));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13080 === (18)))
{var inst_13004 = (state_13079[(2)]);var state_13079__$1 = state_13079;var statearr_13154_13217 = state_13079__$1;(statearr_13154_13217[(2)] = inst_13004);
(statearr_13154_13217[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13080 === (42)))
{var state_13079__$1 = state_13079;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13079__$1,(45),dchan);
} else
{if((state_val_13080 === (37)))
{var inst_13038 = (state_13079[(25)]);var inst_13047 = (state_13079[(23)]);var inst_12951 = (state_13079[(12)]);var inst_13047__$1 = cljs.core.first.call(null,inst_13038);var inst_13048 = cljs.core.async.put_BANG_.call(null,inst_13047__$1,inst_12951,done);var state_13079__$1 = (function (){var statearr_13155 = state_13079;(statearr_13155[(23)] = inst_13047__$1);
return statearr_13155;
})();if(cljs.core.truth_(inst_13048))
{var statearr_13156_13218 = state_13079__$1;(statearr_13156_13218[(1)] = (39));
} else
{var statearr_13157_13219 = state_13079__$1;(statearr_13157_13219[(1)] = (40));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13080 === (8)))
{var inst_12963 = (state_13079[(14)]);var inst_12962 = (state_13079[(16)]);var inst_12965 = (inst_12963 < inst_12962);var inst_12966 = inst_12965;var state_13079__$1 = state_13079;if(cljs.core.truth_(inst_12966))
{var statearr_13158_13220 = state_13079__$1;(statearr_13158_13220[(1)] = (10));
} else
{var statearr_13159_13221 = state_13079__$1;(statearr_13159_13221[(1)] = (11));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__5823__auto___13167,cs,m,dchan,dctr,done))
;return ((function (switch__5808__auto__,c__5823__auto___13167,cs,m,dchan,dctr,done){
return (function() {
var state_machine__5809__auto__ = null;
var state_machine__5809__auto____0 = (function (){var statearr_13163 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_13163[(0)] = state_machine__5809__auto__);
(statearr_13163[(1)] = (1));
return statearr_13163;
});
var state_machine__5809__auto____1 = (function (state_13079){while(true){
var ret_value__5810__auto__ = (function (){try{while(true){
var result__5811__auto__ = switch__5808__auto__.call(null,state_13079);if(cljs.core.keyword_identical_QMARK_.call(null,result__5811__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5811__auto__;
}
break;
}
}catch (e13164){if((e13164 instanceof Object))
{var ex__5812__auto__ = e13164;var statearr_13165_13222 = state_13079;(statearr_13165_13222[(5)] = ex__5812__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13079);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e13164;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5810__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__13223 = state_13079;
state_13079 = G__13223;
continue;
}
} else
{return ret_value__5810__auto__;
}
break;
}
});
state_machine__5809__auto__ = function(state_13079){
switch(arguments.length){
case 0:
return state_machine__5809__auto____0.call(this);
case 1:
return state_machine__5809__auto____1.call(this,state_13079);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5809__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5809__auto____0;
state_machine__5809__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5809__auto____1;
return state_machine__5809__auto__;
})()
;})(switch__5808__auto__,c__5823__auto___13167,cs,m,dchan,dctr,done))
})();var state__5825__auto__ = (function (){var statearr_13166 = f__5824__auto__.call(null);(statearr_13166[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5823__auto___13167);
return statearr_13166;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5825__auto__);
});})(c__5823__auto___13167,cs,m,dchan,dctr,done))
);
return m;
});
/**
* Copies the mult source onto the supplied channel.
* 
* By default the channel will be closed when the source closes,
* but can be determined by the close? parameter.
*/
cljs.core.async.tap = (function() {
var tap = null;
var tap__2 = (function (mult,ch){return tap.call(null,mult,ch,true);
});
var tap__3 = (function (mult,ch,close_QMARK_){cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);
return ch;
});
tap = function(mult,ch,close_QMARK_){
switch(arguments.length){
case 2:
return tap__2.call(this,mult,ch);
case 3:
return tap__3.call(this,mult,ch,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
tap.cljs$core$IFn$_invoke$arity$2 = tap__2;
tap.cljs$core$IFn$_invoke$arity$3 = tap__3;
return tap;
})()
;
/**
* Disconnects a target channel from a mult
*/
cljs.core.async.untap = (function untap(mult,ch){return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
* Disconnects all target channels from a mult
*/
cljs.core.async.untap_all = (function untap_all(mult){return cljs.core.async.untap_all_STAR_.call(null,mult);
});
cljs.core.async.Mix = (function (){var obj13225 = {};return obj13225;
})();
cljs.core.async.admix_STAR_ = (function admix_STAR_(m,ch){if((function (){var and__3628__auto__ = m;if(and__3628__auto__)
{return m.cljs$core$async$Mix$admix_STAR_$arity$2;
} else
{return and__3628__auto__;
}
})())
{return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else
{var x__4277__auto__ = (((m == null))?null:m);return (function (){var or__3640__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4277__auto__)]);if(or__3640__auto__)
{return or__3640__auto__;
} else
{var or__3640__auto____$1 = (cljs.core.async.admix_STAR_["_"]);if(or__3640__auto____$1)
{return or__3640__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.unmix_STAR_ = (function unmix_STAR_(m,ch){if((function (){var and__3628__auto__ = m;if(and__3628__auto__)
{return m.cljs$core$async$Mix$unmix_STAR_$arity$2;
} else
{return and__3628__auto__;
}
})())
{return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else
{var x__4277__auto__ = (((m == null))?null:m);return (function (){var or__3640__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4277__auto__)]);if(or__3640__auto__)
{return or__3640__auto__;
} else
{var or__3640__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);if(or__3640__auto____$1)
{return or__3640__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.unmix_all_STAR_ = (function unmix_all_STAR_(m){if((function (){var and__3628__auto__ = m;if(and__3628__auto__)
{return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1;
} else
{return and__3628__auto__;
}
})())
{return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else
{var x__4277__auto__ = (((m == null))?null:m);return (function (){var or__3640__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4277__auto__)]);if(or__3640__auto__)
{return or__3640__auto__;
} else
{var or__3640__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);if(or__3640__auto____$1)
{return or__3640__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
})().call(null,m);
}
});
cljs.core.async.toggle_STAR_ = (function toggle_STAR_(m,state_map){if((function (){var and__3628__auto__ = m;if(and__3628__auto__)
{return m.cljs$core$async$Mix$toggle_STAR_$arity$2;
} else
{return and__3628__auto__;
}
})())
{return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else
{var x__4277__auto__ = (((m == null))?null:m);return (function (){var or__3640__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4277__auto__)]);if(or__3640__auto__)
{return or__3640__auto__;
} else
{var or__3640__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);if(or__3640__auto____$1)
{return or__3640__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
})().call(null,m,state_map);
}
});
cljs.core.async.solo_mode_STAR_ = (function solo_mode_STAR_(m,mode){if((function (){var and__3628__auto__ = m;if(and__3628__auto__)
{return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2;
} else
{return and__3628__auto__;
}
})())
{return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else
{var x__4277__auto__ = (((m == null))?null:m);return (function (){var or__3640__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4277__auto__)]);if(or__3640__auto__)
{return or__3640__auto__;
} else
{var or__3640__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);if(or__3640__auto____$1)
{return or__3640__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
})().call(null,m,mode);
}
});
/**
* @param {...*} var_args
*/
cljs.core.async.ioc_alts_BANG_ = (function() { 
var ioc_alts_BANG___delegate = function (state,cont_block,ports,p__13226){var map__13231 = p__13226;var map__13231__$1 = ((cljs.core.seq_QMARK_.call(null,map__13231))?cljs.core.apply.call(null,cljs.core.hash_map,map__13231):map__13231);var opts = map__13231__$1;var statearr_13232_13235 = state;(statearr_13232_13235[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);
var temp__4425__auto__ = cljs.core.async.do_alts.call(null,((function (map__13231,map__13231__$1,opts){
return (function (val){var statearr_13233_13236 = state;(statearr_13233_13236[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__13231,map__13231__$1,opts))
,ports,opts);if(cljs.core.truth_(temp__4425__auto__))
{var cb = temp__4425__auto__;var statearr_13234_13237 = state;(statearr_13234_13237[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
};
var ioc_alts_BANG_ = function (state,cont_block,ports,var_args){
var p__13226 = null;if (arguments.length > 3) {
  p__13226 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);} 
return ioc_alts_BANG___delegate.call(this,state,cont_block,ports,p__13226);};
ioc_alts_BANG_.cljs$lang$maxFixedArity = 3;
ioc_alts_BANG_.cljs$lang$applyTo = (function (arglist__13238){
var state = cljs.core.first(arglist__13238);
arglist__13238 = cljs.core.next(arglist__13238);
var cont_block = cljs.core.first(arglist__13238);
arglist__13238 = cljs.core.next(arglist__13238);
var ports = cljs.core.first(arglist__13238);
var p__13226 = cljs.core.rest(arglist__13238);
return ioc_alts_BANG___delegate(state,cont_block,ports,p__13226);
});
ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = ioc_alts_BANG___delegate;
return ioc_alts_BANG_;
})()
;
/**
* Creates and returns a mix of one or more input channels which will
* be put on the supplied out channel. Input sources can be added to
* the mix with 'admix', and removed with 'unmix'. A mix supports
* soloing, muting and pausing multiple inputs atomically using
* 'toggle', and can solo using either muting or pausing as determined
* by 'solo-mode'.
* 
* Each channel can have zero or more boolean modes set via 'toggle':
* 
* :solo - when true, only this (ond other soloed) channel(s) will appear
* in the mix output channel. :mute and :pause states of soloed
* channels are ignored. If solo-mode is :mute, non-soloed
* channels are muted, if :pause, non-soloed channels are
* paused.
* 
* :mute - muted channels will have their contents consumed but not included in the mix
* :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
*/
cljs.core.async.mix = (function mix(out){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));var change = cljs.core.async.chan.call(null);var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){if(cljs.core.truth_(attr.call(null,v)))
{return cljs.core.conj.call(null,ret,c);
} else
{return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){var chs = cljs.core.deref.call(null,cs);var mode = cljs.core.deref.call(null,solo_mode);var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;var m = (function (){if(typeof cljs.core.async.t13358 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t13358 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta13359){
this.change = change;
this.mix = mix;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta13359 = meta13359;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t13358.cljs$lang$type = true;
cljs.core.async.t13358.cljs$lang$ctorStr = "cljs.core.async/t13358";
cljs.core.async.t13358.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){return cljs.core._write.call(null,writer__4218__auto__,"cljs.core.async/t13358");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t13358.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_13360,meta13359__$1){var self__ = this;
var _13360__$1 = this;return (new cljs.core.async.t13358(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta13359__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t13358.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_13360){var self__ = this;
var _13360__$1 = this;return self__.meta13359;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t13358.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t13358.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t13358.prototype.cljs$core$async$Mix$ = true;
cljs.core.async.t13358.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t13358.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t13358.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t13358.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t13358.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.solo_modes.call(null,mode)))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(("mode must be one of: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)))+"\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"mode","mode",-2000032078,null)))))));
}
cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.__GT_t13358 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t13358(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta13359){return (new cljs.core.async.t13358(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta13359));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
}
return (new cljs.core.async.t13358(change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,null));
})();var c__5823__auto___13477 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5823__auto___13477,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){var f__5824__auto__ = (function (){var switch__5808__auto__ = ((function (c__5823__auto___13477,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_13430){var state_val_13431 = (state_13430[(1)]);if((state_val_13431 === (7)))
{var inst_13374 = (state_13430[(7)]);var inst_13379 = cljs.core.apply.call(null,cljs.core.hash_map,inst_13374);var state_13430__$1 = state_13430;var statearr_13432_13478 = state_13430__$1;(statearr_13432_13478[(2)] = inst_13379);
(statearr_13432_13478[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13431 === (20)))
{var inst_13389 = (state_13430[(8)]);var state_13430__$1 = state_13430;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13430__$1,(23),out,inst_13389);
} else
{if((state_val_13431 === (1)))
{var inst_13364 = (state_13430[(9)]);var inst_13364__$1 = calc_state.call(null);var inst_13365 = cljs.core.seq_QMARK_.call(null,inst_13364__$1);var state_13430__$1 = (function (){var statearr_13433 = state_13430;(statearr_13433[(9)] = inst_13364__$1);
return statearr_13433;
})();if(inst_13365)
{var statearr_13434_13479 = state_13430__$1;(statearr_13434_13479[(1)] = (2));
} else
{var statearr_13435_13480 = state_13430__$1;(statearr_13435_13480[(1)] = (3));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13431 === (24)))
{var inst_13382 = (state_13430[(10)]);var inst_13374 = inst_13382;var state_13430__$1 = (function (){var statearr_13436 = state_13430;(statearr_13436[(7)] = inst_13374);
return statearr_13436;
})();var statearr_13437_13481 = state_13430__$1;(statearr_13437_13481[(2)] = null);
(statearr_13437_13481[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13431 === (4)))
{var inst_13364 = (state_13430[(9)]);var inst_13370 = (state_13430[(2)]);var inst_13371 = cljs.core.get.call(null,inst_13370,new cljs.core.Keyword(null,"solos","solos",1441458643));var inst_13372 = cljs.core.get.call(null,inst_13370,new cljs.core.Keyword(null,"mutes","mutes",1068806309));var inst_13373 = cljs.core.get.call(null,inst_13370,new cljs.core.Keyword(null,"reads","reads",-1215067361));var inst_13374 = inst_13364;var state_13430__$1 = (function (){var statearr_13438 = state_13430;(statearr_13438[(7)] = inst_13374);
(statearr_13438[(11)] = inst_13372);
(statearr_13438[(12)] = inst_13373);
(statearr_13438[(13)] = inst_13371);
return statearr_13438;
})();var statearr_13439_13482 = state_13430__$1;(statearr_13439_13482[(2)] = null);
(statearr_13439_13482[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13431 === (15)))
{var state_13430__$1 = state_13430;var statearr_13440_13483 = state_13430__$1;(statearr_13440_13483[(2)] = null);
(statearr_13440_13483[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13431 === (21)))
{var inst_13382 = (state_13430[(10)]);var inst_13374 = inst_13382;var state_13430__$1 = (function (){var statearr_13441 = state_13430;(statearr_13441[(7)] = inst_13374);
return statearr_13441;
})();var statearr_13442_13484 = state_13430__$1;(statearr_13442_13484[(2)] = null);
(statearr_13442_13484[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13431 === (13)))
{var inst_13426 = (state_13430[(2)]);var state_13430__$1 = state_13430;var statearr_13443_13485 = state_13430__$1;(statearr_13443_13485[(2)] = inst_13426);
(statearr_13443_13485[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13431 === (22)))
{var inst_13424 = (state_13430[(2)]);var state_13430__$1 = state_13430;var statearr_13444_13486 = state_13430__$1;(statearr_13444_13486[(2)] = inst_13424);
(statearr_13444_13486[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13431 === (6)))
{var inst_13428 = (state_13430[(2)]);var state_13430__$1 = state_13430;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13430__$1,inst_13428);
} else
{if((state_val_13431 === (25)))
{var state_13430__$1 = state_13430;var statearr_13445_13487 = state_13430__$1;(statearr_13445_13487[(2)] = null);
(statearr_13445_13487[(1)] = (26));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13431 === (17)))
{var inst_13404 = (state_13430[(14)]);var state_13430__$1 = state_13430;var statearr_13446_13488 = state_13430__$1;(statearr_13446_13488[(2)] = inst_13404);
(statearr_13446_13488[(1)] = (19));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13431 === (3)))
{var inst_13364 = (state_13430[(9)]);var state_13430__$1 = state_13430;var statearr_13447_13489 = state_13430__$1;(statearr_13447_13489[(2)] = inst_13364);
(statearr_13447_13489[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13431 === (12)))
{var inst_13383 = (state_13430[(15)]);var inst_13404 = (state_13430[(14)]);var inst_13390 = (state_13430[(16)]);var inst_13404__$1 = inst_13383.call(null,inst_13390);var state_13430__$1 = (function (){var statearr_13448 = state_13430;(statearr_13448[(14)] = inst_13404__$1);
return statearr_13448;
})();if(cljs.core.truth_(inst_13404__$1))
{var statearr_13449_13490 = state_13430__$1;(statearr_13449_13490[(1)] = (17));
} else
{var statearr_13450_13491 = state_13430__$1;(statearr_13450_13491[(1)] = (18));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13431 === (2)))
{var inst_13364 = (state_13430[(9)]);var inst_13367 = cljs.core.apply.call(null,cljs.core.hash_map,inst_13364);var state_13430__$1 = state_13430;var statearr_13451_13492 = state_13430__$1;(statearr_13451_13492[(2)] = inst_13367);
(statearr_13451_13492[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13431 === (23)))
{var inst_13415 = (state_13430[(2)]);var state_13430__$1 = state_13430;if(cljs.core.truth_(inst_13415))
{var statearr_13452_13493 = state_13430__$1;(statearr_13452_13493[(1)] = (24));
} else
{var statearr_13453_13494 = state_13430__$1;(statearr_13453_13494[(1)] = (25));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13431 === (19)))
{var inst_13412 = (state_13430[(2)]);var state_13430__$1 = state_13430;if(cljs.core.truth_(inst_13412))
{var statearr_13454_13495 = state_13430__$1;(statearr_13454_13495[(1)] = (20));
} else
{var statearr_13455_13496 = state_13430__$1;(statearr_13455_13496[(1)] = (21));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13431 === (11)))
{var inst_13389 = (state_13430[(8)]);var inst_13395 = (inst_13389 == null);var state_13430__$1 = state_13430;if(cljs.core.truth_(inst_13395))
{var statearr_13456_13497 = state_13430__$1;(statearr_13456_13497[(1)] = (14));
} else
{var statearr_13457_13498 = state_13430__$1;(statearr_13457_13498[(1)] = (15));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13431 === (9)))
{var inst_13382 = (state_13430[(10)]);var inst_13382__$1 = (state_13430[(2)]);var inst_13383 = cljs.core.get.call(null,inst_13382__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));var inst_13384 = cljs.core.get.call(null,inst_13382__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));var inst_13385 = cljs.core.get.call(null,inst_13382__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));var state_13430__$1 = (function (){var statearr_13458 = state_13430;(statearr_13458[(17)] = inst_13384);
(statearr_13458[(10)] = inst_13382__$1);
(statearr_13458[(15)] = inst_13383);
return statearr_13458;
})();return cljs.core.async.ioc_alts_BANG_.call(null,state_13430__$1,(10),inst_13385);
} else
{if((state_val_13431 === (5)))
{var inst_13374 = (state_13430[(7)]);var inst_13377 = cljs.core.seq_QMARK_.call(null,inst_13374);var state_13430__$1 = state_13430;if(inst_13377)
{var statearr_13459_13499 = state_13430__$1;(statearr_13459_13499[(1)] = (7));
} else
{var statearr_13460_13500 = state_13430__$1;(statearr_13460_13500[(1)] = (8));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13431 === (14)))
{var inst_13390 = (state_13430[(16)]);var inst_13397 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_13390);var state_13430__$1 = state_13430;var statearr_13461_13501 = state_13430__$1;(statearr_13461_13501[(2)] = inst_13397);
(statearr_13461_13501[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13431 === (26)))
{var inst_13420 = (state_13430[(2)]);var state_13430__$1 = state_13430;var statearr_13462_13502 = state_13430__$1;(statearr_13462_13502[(2)] = inst_13420);
(statearr_13462_13502[(1)] = (22));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13431 === (16)))
{var inst_13400 = (state_13430[(2)]);var inst_13401 = calc_state.call(null);var inst_13374 = inst_13401;var state_13430__$1 = (function (){var statearr_13463 = state_13430;(statearr_13463[(7)] = inst_13374);
(statearr_13463[(18)] = inst_13400);
return statearr_13463;
})();var statearr_13464_13503 = state_13430__$1;(statearr_13464_13503[(2)] = null);
(statearr_13464_13503[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13431 === (10)))
{var inst_13390 = (state_13430[(16)]);var inst_13389 = (state_13430[(8)]);var inst_13388 = (state_13430[(2)]);var inst_13389__$1 = cljs.core.nth.call(null,inst_13388,(0),null);var inst_13390__$1 = cljs.core.nth.call(null,inst_13388,(1),null);var inst_13391 = (inst_13389__$1 == null);var inst_13392 = cljs.core._EQ_.call(null,inst_13390__$1,change);var inst_13393 = (inst_13391) || (inst_13392);var state_13430__$1 = (function (){var statearr_13465 = state_13430;(statearr_13465[(16)] = inst_13390__$1);
(statearr_13465[(8)] = inst_13389__$1);
return statearr_13465;
})();if(cljs.core.truth_(inst_13393))
{var statearr_13466_13504 = state_13430__$1;(statearr_13466_13504[(1)] = (11));
} else
{var statearr_13467_13505 = state_13430__$1;(statearr_13467_13505[(1)] = (12));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13431 === (18)))
{var inst_13384 = (state_13430[(17)]);var inst_13383 = (state_13430[(15)]);var inst_13390 = (state_13430[(16)]);var inst_13407 = cljs.core.empty_QMARK_.call(null,inst_13383);var inst_13408 = inst_13384.call(null,inst_13390);var inst_13409 = cljs.core.not.call(null,inst_13408);var inst_13410 = (inst_13407) && (inst_13409);var state_13430__$1 = state_13430;var statearr_13468_13506 = state_13430__$1;(statearr_13468_13506[(2)] = inst_13410);
(statearr_13468_13506[(1)] = (19));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13431 === (8)))
{var inst_13374 = (state_13430[(7)]);var state_13430__$1 = state_13430;var statearr_13469_13507 = state_13430__$1;(statearr_13469_13507[(2)] = inst_13374);
(statearr_13469_13507[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__5823__auto___13477,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;return ((function (switch__5808__auto__,c__5823__auto___13477,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var state_machine__5809__auto__ = null;
var state_machine__5809__auto____0 = (function (){var statearr_13473 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_13473[(0)] = state_machine__5809__auto__);
(statearr_13473[(1)] = (1));
return statearr_13473;
});
var state_machine__5809__auto____1 = (function (state_13430){while(true){
var ret_value__5810__auto__ = (function (){try{while(true){
var result__5811__auto__ = switch__5808__auto__.call(null,state_13430);if(cljs.core.keyword_identical_QMARK_.call(null,result__5811__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5811__auto__;
}
break;
}
}catch (e13474){if((e13474 instanceof Object))
{var ex__5812__auto__ = e13474;var statearr_13475_13508 = state_13430;(statearr_13475_13508[(5)] = ex__5812__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13430);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e13474;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5810__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__13509 = state_13430;
state_13430 = G__13509;
continue;
}
} else
{return ret_value__5810__auto__;
}
break;
}
});
state_machine__5809__auto__ = function(state_13430){
switch(arguments.length){
case 0:
return state_machine__5809__auto____0.call(this);
case 1:
return state_machine__5809__auto____1.call(this,state_13430);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5809__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5809__auto____0;
state_machine__5809__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5809__auto____1;
return state_machine__5809__auto__;
})()
;})(switch__5808__auto__,c__5823__auto___13477,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();var state__5825__auto__ = (function (){var statearr_13476 = f__5824__auto__.call(null);(statearr_13476[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5823__auto___13477);
return statearr_13476;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5825__auto__);
});})(c__5823__auto___13477,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);
return m;
});
/**
* Adds ch as an input to the mix
*/
cljs.core.async.admix = (function admix(mix,ch){return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
* Removes ch as an input to the mix
*/
cljs.core.async.unmix = (function unmix(mix,ch){return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
* removes all inputs from the mix
*/
cljs.core.async.unmix_all = (function unmix_all(mix){return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
* Atomically sets the state(s) of one or more channels in a mix. The
* state map is a map of channels -> channel-state-map. A
* channel-state-map is a map of attrs -> boolean, where attr is one or
* more of :mute, :pause or :solo. Any states supplied are merged with
* the current state.
* 
* Note that channels can be added to a mix via toggle, which can be
* used to add channels in a particular (e.g. paused) state.
*/
cljs.core.async.toggle = (function toggle(mix,state_map){return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
* Sets the solo mode of the mix. mode must be one of :mute or :pause
*/
cljs.core.async.solo_mode = (function solo_mode(mix,mode){return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});
cljs.core.async.Pub = (function (){var obj13511 = {};return obj13511;
})();
cljs.core.async.sub_STAR_ = (function sub_STAR_(p,v,ch,close_QMARK_){if((function (){var and__3628__auto__ = p;if(and__3628__auto__)
{return p.cljs$core$async$Pub$sub_STAR_$arity$4;
} else
{return and__3628__auto__;
}
})())
{return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else
{var x__4277__auto__ = (((p == null))?null:p);return (function (){var or__3640__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4277__auto__)]);if(or__3640__auto__)
{return or__3640__auto__;
} else
{var or__3640__auto____$1 = (cljs.core.async.sub_STAR_["_"]);if(or__3640__auto____$1)
{return or__3640__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
})().call(null,p,v,ch,close_QMARK_);
}
});
cljs.core.async.unsub_STAR_ = (function unsub_STAR_(p,v,ch){if((function (){var and__3628__auto__ = p;if(and__3628__auto__)
{return p.cljs$core$async$Pub$unsub_STAR_$arity$3;
} else
{return and__3628__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else
{var x__4277__auto__ = (((p == null))?null:p);return (function (){var or__3640__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4277__auto__)]);if(or__3640__auto__)
{return or__3640__auto__;
} else
{var or__3640__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);if(or__3640__auto____$1)
{return or__3640__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
})().call(null,p,v,ch);
}
});
cljs.core.async.unsub_all_STAR_ = (function() {
var unsub_all_STAR_ = null;
var unsub_all_STAR___1 = (function (p){if((function (){var and__3628__auto__ = p;if(and__3628__auto__)
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1;
} else
{return and__3628__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else
{var x__4277__auto__ = (((p == null))?null:p);return (function (){var or__3640__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4277__auto__)]);if(or__3640__auto__)
{return or__3640__auto__;
} else
{var or__3640__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);if(or__3640__auto____$1)
{return or__3640__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p);
}
});
var unsub_all_STAR___2 = (function (p,v){if((function (){var and__3628__auto__ = p;if(and__3628__auto__)
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2;
} else
{return and__3628__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else
{var x__4277__auto__ = (((p == null))?null:p);return (function (){var or__3640__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4277__auto__)]);if(or__3640__auto__)
{return or__3640__auto__;
} else
{var or__3640__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);if(or__3640__auto____$1)
{return or__3640__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p,v);
}
});
unsub_all_STAR_ = function(p,v){
switch(arguments.length){
case 1:
return unsub_all_STAR___1.call(this,p);
case 2:
return unsub_all_STAR___2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = unsub_all_STAR___1;
unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = unsub_all_STAR___2;
return unsub_all_STAR_;
})()
;
/**
* Creates and returns a pub(lication) of the supplied channel,
* partitioned into topics by the topic-fn. topic-fn will be applied to
* each value on the channel and the result will determine the 'topic'
* on which that value will be put. Channels can be subscribed to
* receive copies of topics using 'sub', and unsubscribed using
* 'unsub'. Each topic will be handled by an internal mult on a
* dedicated channel. By default these internal channels are
* unbuffered, but a buf-fn can be supplied which, given a topic,
* creates a buffer with desired properties.
* 
* Each item is distributed to all subs in parallel and synchronously,
* i.e. each sub must accept before the next item is distributed. Use
* buffering/windowing to prevent slow subs from holding up the pub.
* 
* Items received when there are no matching subs get dropped.
* 
* Note that if buf-fns are used then each topic is handled
* asynchronously, i.e. if a channel is subscribed to more than one
* topic it should not expect them to be interleaved identically with
* the source.
*/
cljs.core.async.pub = (function() {
var pub = null;
var pub__2 = (function (ch,topic_fn){return pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});
var pub__3 = (function (ch,topic_fn,buf_fn){var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var ensure_mult = ((function (mults){
return (function (topic){var or__3640__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);if(cljs.core.truth_(or__3640__auto__))
{return or__3640__auto__;
} else
{return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__3640__auto__,mults){
return (function (p1__13512_SHARP_){if(cljs.core.truth_(p1__13512_SHARP_.call(null,topic)))
{return p1__13512_SHARP_;
} else
{return cljs.core.assoc.call(null,p1__13512_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__3640__auto__,mults))
),topic);
}
});})(mults))
;var p = (function (){if(typeof cljs.core.async.t13635 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t13635 = (function (pub,ch,topic_fn,buf_fn,mults,ensure_mult,meta13636){
this.pub = pub;
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta13636 = meta13636;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t13635.cljs$lang$type = true;
cljs.core.async.t13635.cljs$lang$ctorStr = "cljs.core.async/t13635";
cljs.core.async.t13635.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){return cljs.core._write.call(null,writer__4218__auto__,"cljs.core.async/t13635");
});})(mults,ensure_mult))
;
cljs.core.async.t13635.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_13637,meta13636__$1){var self__ = this;
var _13637__$1 = this;return (new cljs.core.async.t13635(self__.pub,self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta13636__$1));
});})(mults,ensure_mult))
;
cljs.core.async.t13635.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_13637){var self__ = this;
var _13637__$1 = this;return self__.meta13636;
});})(mults,ensure_mult))
;
cljs.core.async.t13635.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t13635.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(mults,ensure_mult))
;
cljs.core.async.t13635.prototype.cljs$core$async$Pub$ = true;
cljs.core.async.t13635.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2,close_QMARK_){var self__ = this;
var p__$1 = this;var m = self__.ensure_mult.call(null,topic);return cljs.core.async.tap.call(null,m,ch__$2,close_QMARK_);
});})(mults,ensure_mult))
;
cljs.core.async.t13635.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2){var self__ = this;
var p__$1 = this;var temp__4425__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);if(cljs.core.truth_(temp__4425__auto__))
{var m = temp__4425__auto__;return cljs.core.async.untap.call(null,m,ch__$2);
} else
{return null;
}
});})(mults,ensure_mult))
;
cljs.core.async.t13635.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;
cljs.core.async.t13635.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){var self__ = this;
var ___$1 = this;return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;
cljs.core.async.__GT_t13635 = ((function (mults,ensure_mult){
return (function __GT_t13635(pub__$1,ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta13636){return (new cljs.core.async.t13635(pub__$1,ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta13636));
});})(mults,ensure_mult))
;
}
return (new cljs.core.async.t13635(pub,ch,topic_fn,buf_fn,mults,ensure_mult,null));
})();var c__5823__auto___13757 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5823__auto___13757,mults,ensure_mult,p){
return (function (){var f__5824__auto__ = (function (){var switch__5808__auto__ = ((function (c__5823__auto___13757,mults,ensure_mult,p){
return (function (state_13709){var state_val_13710 = (state_13709[(1)]);if((state_val_13710 === (7)))
{var inst_13705 = (state_13709[(2)]);var state_13709__$1 = state_13709;var statearr_13711_13758 = state_13709__$1;(statearr_13711_13758[(2)] = inst_13705);
(statearr_13711_13758[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13710 === (20)))
{var state_13709__$1 = state_13709;var statearr_13712_13759 = state_13709__$1;(statearr_13712_13759[(2)] = null);
(statearr_13712_13759[(1)] = (21));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13710 === (1)))
{var state_13709__$1 = state_13709;var statearr_13713_13760 = state_13709__$1;(statearr_13713_13760[(2)] = null);
(statearr_13713_13760[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13710 === (24)))
{var inst_13688 = (state_13709[(7)]);var inst_13697 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_13688);var state_13709__$1 = state_13709;var statearr_13714_13761 = state_13709__$1;(statearr_13714_13761[(2)] = inst_13697);
(statearr_13714_13761[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13710 === (4)))
{var inst_13640 = (state_13709[(8)]);var inst_13640__$1 = (state_13709[(2)]);var inst_13641 = (inst_13640__$1 == null);var state_13709__$1 = (function (){var statearr_13715 = state_13709;(statearr_13715[(8)] = inst_13640__$1);
return statearr_13715;
})();if(cljs.core.truth_(inst_13641))
{var statearr_13716_13762 = state_13709__$1;(statearr_13716_13762[(1)] = (5));
} else
{var statearr_13717_13763 = state_13709__$1;(statearr_13717_13763[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13710 === (15)))
{var inst_13682 = (state_13709[(2)]);var state_13709__$1 = state_13709;var statearr_13718_13764 = state_13709__$1;(statearr_13718_13764[(2)] = inst_13682);
(statearr_13718_13764[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13710 === (21)))
{var inst_13702 = (state_13709[(2)]);var state_13709__$1 = (function (){var statearr_13719 = state_13709;(statearr_13719[(9)] = inst_13702);
return statearr_13719;
})();var statearr_13720_13765 = state_13709__$1;(statearr_13720_13765[(2)] = null);
(statearr_13720_13765[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13710 === (13)))
{var inst_13664 = (state_13709[(10)]);var inst_13666 = cljs.core.chunked_seq_QMARK_.call(null,inst_13664);var state_13709__$1 = state_13709;if(inst_13666)
{var statearr_13721_13766 = state_13709__$1;(statearr_13721_13766[(1)] = (16));
} else
{var statearr_13722_13767 = state_13709__$1;(statearr_13722_13767[(1)] = (17));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13710 === (22)))
{var inst_13694 = (state_13709[(2)]);var state_13709__$1 = state_13709;if(cljs.core.truth_(inst_13694))
{var statearr_13723_13768 = state_13709__$1;(statearr_13723_13768[(1)] = (23));
} else
{var statearr_13724_13769 = state_13709__$1;(statearr_13724_13769[(1)] = (24));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13710 === (6)))
{var inst_13690 = (state_13709[(11)]);var inst_13688 = (state_13709[(7)]);var inst_13640 = (state_13709[(8)]);var inst_13688__$1 = topic_fn.call(null,inst_13640);var inst_13689 = cljs.core.deref.call(null,mults);var inst_13690__$1 = cljs.core.get.call(null,inst_13689,inst_13688__$1);var state_13709__$1 = (function (){var statearr_13725 = state_13709;(statearr_13725[(11)] = inst_13690__$1);
(statearr_13725[(7)] = inst_13688__$1);
return statearr_13725;
})();if(cljs.core.truth_(inst_13690__$1))
{var statearr_13726_13770 = state_13709__$1;(statearr_13726_13770[(1)] = (19));
} else
{var statearr_13727_13771 = state_13709__$1;(statearr_13727_13771[(1)] = (20));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13710 === (25)))
{var inst_13699 = (state_13709[(2)]);var state_13709__$1 = state_13709;var statearr_13728_13772 = state_13709__$1;(statearr_13728_13772[(2)] = inst_13699);
(statearr_13728_13772[(1)] = (21));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13710 === (17)))
{var inst_13664 = (state_13709[(10)]);var inst_13673 = cljs.core.first.call(null,inst_13664);var inst_13674 = cljs.core.async.muxch_STAR_.call(null,inst_13673);var inst_13675 = cljs.core.async.close_BANG_.call(null,inst_13674);var inst_13676 = cljs.core.next.call(null,inst_13664);var inst_13650 = inst_13676;var inst_13651 = null;var inst_13652 = (0);var inst_13653 = (0);var state_13709__$1 = (function (){var statearr_13729 = state_13709;(statearr_13729[(12)] = inst_13651);
(statearr_13729[(13)] = inst_13653);
(statearr_13729[(14)] = inst_13650);
(statearr_13729[(15)] = inst_13675);
(statearr_13729[(16)] = inst_13652);
return statearr_13729;
})();var statearr_13730_13773 = state_13709__$1;(statearr_13730_13773[(2)] = null);
(statearr_13730_13773[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13710 === (3)))
{var inst_13707 = (state_13709[(2)]);var state_13709__$1 = state_13709;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13709__$1,inst_13707);
} else
{if((state_val_13710 === (12)))
{var inst_13684 = (state_13709[(2)]);var state_13709__$1 = state_13709;var statearr_13731_13774 = state_13709__$1;(statearr_13731_13774[(2)] = inst_13684);
(statearr_13731_13774[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13710 === (2)))
{var state_13709__$1 = state_13709;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13709__$1,(4),ch);
} else
{if((state_val_13710 === (23)))
{var state_13709__$1 = state_13709;var statearr_13732_13775 = state_13709__$1;(statearr_13732_13775[(2)] = null);
(statearr_13732_13775[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13710 === (19)))
{var inst_13690 = (state_13709[(11)]);var inst_13640 = (state_13709[(8)]);var inst_13692 = cljs.core.async.muxch_STAR_.call(null,inst_13690);var state_13709__$1 = state_13709;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13709__$1,(22),inst_13692,inst_13640);
} else
{if((state_val_13710 === (11)))
{var inst_13664 = (state_13709[(10)]);var inst_13650 = (state_13709[(14)]);var inst_13664__$1 = cljs.core.seq.call(null,inst_13650);var state_13709__$1 = (function (){var statearr_13733 = state_13709;(statearr_13733[(10)] = inst_13664__$1);
return statearr_13733;
})();if(inst_13664__$1)
{var statearr_13734_13776 = state_13709__$1;(statearr_13734_13776[(1)] = (13));
} else
{var statearr_13735_13777 = state_13709__$1;(statearr_13735_13777[(1)] = (14));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13710 === (9)))
{var inst_13686 = (state_13709[(2)]);var state_13709__$1 = state_13709;var statearr_13736_13778 = state_13709__$1;(statearr_13736_13778[(2)] = inst_13686);
(statearr_13736_13778[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13710 === (5)))
{var inst_13647 = cljs.core.deref.call(null,mults);var inst_13648 = cljs.core.vals.call(null,inst_13647);var inst_13649 = cljs.core.seq.call(null,inst_13648);var inst_13650 = inst_13649;var inst_13651 = null;var inst_13652 = (0);var inst_13653 = (0);var state_13709__$1 = (function (){var statearr_13737 = state_13709;(statearr_13737[(12)] = inst_13651);
(statearr_13737[(13)] = inst_13653);
(statearr_13737[(14)] = inst_13650);
(statearr_13737[(16)] = inst_13652);
return statearr_13737;
})();var statearr_13738_13779 = state_13709__$1;(statearr_13738_13779[(2)] = null);
(statearr_13738_13779[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13710 === (14)))
{var state_13709__$1 = state_13709;var statearr_13742_13780 = state_13709__$1;(statearr_13742_13780[(2)] = null);
(statearr_13742_13780[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13710 === (16)))
{var inst_13664 = (state_13709[(10)]);var inst_13668 = cljs.core.chunk_first.call(null,inst_13664);var inst_13669 = cljs.core.chunk_rest.call(null,inst_13664);var inst_13670 = cljs.core.count.call(null,inst_13668);var inst_13650 = inst_13669;var inst_13651 = inst_13668;var inst_13652 = inst_13670;var inst_13653 = (0);var state_13709__$1 = (function (){var statearr_13743 = state_13709;(statearr_13743[(12)] = inst_13651);
(statearr_13743[(13)] = inst_13653);
(statearr_13743[(14)] = inst_13650);
(statearr_13743[(16)] = inst_13652);
return statearr_13743;
})();var statearr_13744_13781 = state_13709__$1;(statearr_13744_13781[(2)] = null);
(statearr_13744_13781[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13710 === (10)))
{var inst_13651 = (state_13709[(12)]);var inst_13653 = (state_13709[(13)]);var inst_13650 = (state_13709[(14)]);var inst_13652 = (state_13709[(16)]);var inst_13658 = cljs.core._nth.call(null,inst_13651,inst_13653);var inst_13659 = cljs.core.async.muxch_STAR_.call(null,inst_13658);var inst_13660 = cljs.core.async.close_BANG_.call(null,inst_13659);var inst_13661 = (inst_13653 + (1));var tmp13739 = inst_13651;var tmp13740 = inst_13650;var tmp13741 = inst_13652;var inst_13650__$1 = tmp13740;var inst_13651__$1 = tmp13739;var inst_13652__$1 = tmp13741;var inst_13653__$1 = inst_13661;var state_13709__$1 = (function (){var statearr_13745 = state_13709;(statearr_13745[(12)] = inst_13651__$1);
(statearr_13745[(17)] = inst_13660);
(statearr_13745[(13)] = inst_13653__$1);
(statearr_13745[(14)] = inst_13650__$1);
(statearr_13745[(16)] = inst_13652__$1);
return statearr_13745;
})();var statearr_13746_13782 = state_13709__$1;(statearr_13746_13782[(2)] = null);
(statearr_13746_13782[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13710 === (18)))
{var inst_13679 = (state_13709[(2)]);var state_13709__$1 = state_13709;var statearr_13747_13783 = state_13709__$1;(statearr_13747_13783[(2)] = inst_13679);
(statearr_13747_13783[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13710 === (8)))
{var inst_13653 = (state_13709[(13)]);var inst_13652 = (state_13709[(16)]);var inst_13655 = (inst_13653 < inst_13652);var inst_13656 = inst_13655;var state_13709__$1 = state_13709;if(cljs.core.truth_(inst_13656))
{var statearr_13748_13784 = state_13709__$1;(statearr_13748_13784[(1)] = (10));
} else
{var statearr_13749_13785 = state_13709__$1;(statearr_13749_13785[(1)] = (11));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__5823__auto___13757,mults,ensure_mult,p))
;return ((function (switch__5808__auto__,c__5823__auto___13757,mults,ensure_mult,p){
return (function() {
var state_machine__5809__auto__ = null;
var state_machine__5809__auto____0 = (function (){var statearr_13753 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_13753[(0)] = state_machine__5809__auto__);
(statearr_13753[(1)] = (1));
return statearr_13753;
});
var state_machine__5809__auto____1 = (function (state_13709){while(true){
var ret_value__5810__auto__ = (function (){try{while(true){
var result__5811__auto__ = switch__5808__auto__.call(null,state_13709);if(cljs.core.keyword_identical_QMARK_.call(null,result__5811__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5811__auto__;
}
break;
}
}catch (e13754){if((e13754 instanceof Object))
{var ex__5812__auto__ = e13754;var statearr_13755_13786 = state_13709;(statearr_13755_13786[(5)] = ex__5812__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13709);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e13754;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5810__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__13787 = state_13709;
state_13709 = G__13787;
continue;
}
} else
{return ret_value__5810__auto__;
}
break;
}
});
state_machine__5809__auto__ = function(state_13709){
switch(arguments.length){
case 0:
return state_machine__5809__auto____0.call(this);
case 1:
return state_machine__5809__auto____1.call(this,state_13709);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5809__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5809__auto____0;
state_machine__5809__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5809__auto____1;
return state_machine__5809__auto__;
})()
;})(switch__5808__auto__,c__5823__auto___13757,mults,ensure_mult,p))
})();var state__5825__auto__ = (function (){var statearr_13756 = f__5824__auto__.call(null);(statearr_13756[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5823__auto___13757);
return statearr_13756;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5825__auto__);
});})(c__5823__auto___13757,mults,ensure_mult,p))
);
return p;
});
pub = function(ch,topic_fn,buf_fn){
switch(arguments.length){
case 2:
return pub__2.call(this,ch,topic_fn);
case 3:
return pub__3.call(this,ch,topic_fn,buf_fn);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
pub.cljs$core$IFn$_invoke$arity$2 = pub__2;
pub.cljs$core$IFn$_invoke$arity$3 = pub__3;
return pub;
})()
;
/**
* Subscribes a channel to a topic of a pub.
* 
* By default the channel will be closed when the source closes,
* but can be determined by the close? parameter.
*/
cljs.core.async.sub = (function() {
var sub = null;
var sub__3 = (function (p,topic,ch){return sub.call(null,p,topic,ch,true);
});
var sub__4 = (function (p,topic,ch,close_QMARK_){return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});
sub = function(p,topic,ch,close_QMARK_){
switch(arguments.length){
case 3:
return sub__3.call(this,p,topic,ch);
case 4:
return sub__4.call(this,p,topic,ch,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
sub.cljs$core$IFn$_invoke$arity$3 = sub__3;
sub.cljs$core$IFn$_invoke$arity$4 = sub__4;
return sub;
})()
;
/**
* Unsubscribes a channel from a topic of a pub
*/
cljs.core.async.unsub = (function unsub(p,topic,ch){return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
* Unsubscribes all channels from a pub, or a topic of a pub
*/
cljs.core.async.unsub_all = (function() {
var unsub_all = null;
var unsub_all__1 = (function (p){return cljs.core.async.unsub_all_STAR_.call(null,p);
});
var unsub_all__2 = (function (p,topic){return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});
unsub_all = function(p,topic){
switch(arguments.length){
case 1:
return unsub_all__1.call(this,p);
case 2:
return unsub_all__2.call(this,p,topic);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unsub_all.cljs$core$IFn$_invoke$arity$1 = unsub_all__1;
unsub_all.cljs$core$IFn$_invoke$arity$2 = unsub_all__2;
return unsub_all;
})()
;
/**
* Takes a function and a collection of source channels, and returns a
* channel which contains the values produced by applying f to the set
* of first items taken from each source channel, followed by applying
* f to the set of second items from each channel, until any one of the
* channels is closed, at which point the output channel will be
* closed. The returned channel will be unbuffered by default, or a
* buf-or-n can be supplied
*/
cljs.core.async.map = (function() {
var map = null;
var map__2 = (function (f,chs){return map.call(null,f,chs,null);
});
var map__3 = (function (f,chs,buf_or_n){var chs__$1 = cljs.core.vec.call(null,chs);var out = cljs.core.async.chan.call(null,buf_or_n);var cnt = cljs.core.count.call(null,chs__$1);var rets = cljs.core.object_array.call(null,cnt);var dchan = cljs.core.async.chan.call(null,(1));var dctr = cljs.core.atom.call(null,null);var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){(rets[i] = ret);
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0)))
{return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else
{return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));var c__5823__auto___13924 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5823__auto___13924,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){var f__5824__auto__ = (function (){var switch__5808__auto__ = ((function (c__5823__auto___13924,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_13894){var state_val_13895 = (state_13894[(1)]);if((state_val_13895 === (7)))
{var state_13894__$1 = state_13894;var statearr_13896_13925 = state_13894__$1;(statearr_13896_13925[(2)] = null);
(statearr_13896_13925[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13895 === (1)))
{var state_13894__$1 = state_13894;var statearr_13897_13926 = state_13894__$1;(statearr_13897_13926[(2)] = null);
(statearr_13897_13926[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13895 === (4)))
{var inst_13858 = (state_13894[(7)]);var inst_13860 = (inst_13858 < cnt);var state_13894__$1 = state_13894;if(cljs.core.truth_(inst_13860))
{var statearr_13898_13927 = state_13894__$1;(statearr_13898_13927[(1)] = (6));
} else
{var statearr_13899_13928 = state_13894__$1;(statearr_13899_13928[(1)] = (7));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13895 === (15)))
{var inst_13890 = (state_13894[(2)]);var state_13894__$1 = state_13894;var statearr_13900_13929 = state_13894__$1;(statearr_13900_13929[(2)] = inst_13890);
(statearr_13900_13929[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13895 === (13)))
{var inst_13883 = cljs.core.async.close_BANG_.call(null,out);var state_13894__$1 = state_13894;var statearr_13901_13930 = state_13894__$1;(statearr_13901_13930[(2)] = inst_13883);
(statearr_13901_13930[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13895 === (6)))
{var state_13894__$1 = state_13894;var statearr_13902_13931 = state_13894__$1;(statearr_13902_13931[(2)] = null);
(statearr_13902_13931[(1)] = (11));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13895 === (3)))
{var inst_13892 = (state_13894[(2)]);var state_13894__$1 = state_13894;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13894__$1,inst_13892);
} else
{if((state_val_13895 === (12)))
{var inst_13880 = (state_13894[(8)]);var inst_13880__$1 = (state_13894[(2)]);var inst_13881 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_13880__$1);var state_13894__$1 = (function (){var statearr_13903 = state_13894;(statearr_13903[(8)] = inst_13880__$1);
return statearr_13903;
})();if(cljs.core.truth_(inst_13881))
{var statearr_13904_13932 = state_13894__$1;(statearr_13904_13932[(1)] = (13));
} else
{var statearr_13905_13933 = state_13894__$1;(statearr_13905_13933[(1)] = (14));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13895 === (2)))
{var inst_13857 = cljs.core.reset_BANG_.call(null,dctr,cnt);var inst_13858 = (0);var state_13894__$1 = (function (){var statearr_13906 = state_13894;(statearr_13906[(9)] = inst_13857);
(statearr_13906[(7)] = inst_13858);
return statearr_13906;
})();var statearr_13907_13934 = state_13894__$1;(statearr_13907_13934[(2)] = null);
(statearr_13907_13934[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13895 === (11)))
{var inst_13858 = (state_13894[(7)]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_13894,(10),Object,null,(9));var inst_13867 = chs__$1.call(null,inst_13858);var inst_13868 = done.call(null,inst_13858);var inst_13869 = cljs.core.async.take_BANG_.call(null,inst_13867,inst_13868);var state_13894__$1 = state_13894;var statearr_13908_13935 = state_13894__$1;(statearr_13908_13935[(2)] = inst_13869);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13894__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13895 === (9)))
{var inst_13858 = (state_13894[(7)]);var inst_13871 = (state_13894[(2)]);var inst_13872 = (inst_13858 + (1));var inst_13858__$1 = inst_13872;var state_13894__$1 = (function (){var statearr_13909 = state_13894;(statearr_13909[(10)] = inst_13871);
(statearr_13909[(7)] = inst_13858__$1);
return statearr_13909;
})();var statearr_13910_13936 = state_13894__$1;(statearr_13910_13936[(2)] = null);
(statearr_13910_13936[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13895 === (5)))
{var inst_13878 = (state_13894[(2)]);var state_13894__$1 = (function (){var statearr_13911 = state_13894;(statearr_13911[(11)] = inst_13878);
return statearr_13911;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13894__$1,(12),dchan);
} else
{if((state_val_13895 === (14)))
{var inst_13880 = (state_13894[(8)]);var inst_13885 = cljs.core.apply.call(null,f,inst_13880);var state_13894__$1 = state_13894;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13894__$1,(16),out,inst_13885);
} else
{if((state_val_13895 === (16)))
{var inst_13887 = (state_13894[(2)]);var state_13894__$1 = (function (){var statearr_13912 = state_13894;(statearr_13912[(12)] = inst_13887);
return statearr_13912;
})();var statearr_13913_13937 = state_13894__$1;(statearr_13913_13937[(2)] = null);
(statearr_13913_13937[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13895 === (10)))
{var inst_13862 = (state_13894[(2)]);var inst_13863 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var state_13894__$1 = (function (){var statearr_13914 = state_13894;(statearr_13914[(13)] = inst_13862);
return statearr_13914;
})();var statearr_13915_13938 = state_13894__$1;(statearr_13915_13938[(2)] = inst_13863);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13894__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13895 === (8)))
{var inst_13876 = (state_13894[(2)]);var state_13894__$1 = state_13894;var statearr_13916_13939 = state_13894__$1;(statearr_13916_13939[(2)] = inst_13876);
(statearr_13916_13939[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__5823__auto___13924,chs__$1,out,cnt,rets,dchan,dctr,done))
;return ((function (switch__5808__auto__,c__5823__auto___13924,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var state_machine__5809__auto__ = null;
var state_machine__5809__auto____0 = (function (){var statearr_13920 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_13920[(0)] = state_machine__5809__auto__);
(statearr_13920[(1)] = (1));
return statearr_13920;
});
var state_machine__5809__auto____1 = (function (state_13894){while(true){
var ret_value__5810__auto__ = (function (){try{while(true){
var result__5811__auto__ = switch__5808__auto__.call(null,state_13894);if(cljs.core.keyword_identical_QMARK_.call(null,result__5811__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5811__auto__;
}
break;
}
}catch (e13921){if((e13921 instanceof Object))
{var ex__5812__auto__ = e13921;var statearr_13922_13940 = state_13894;(statearr_13922_13940[(5)] = ex__5812__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13894);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e13921;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5810__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__13941 = state_13894;
state_13894 = G__13941;
continue;
}
} else
{return ret_value__5810__auto__;
}
break;
}
});
state_machine__5809__auto__ = function(state_13894){
switch(arguments.length){
case 0:
return state_machine__5809__auto____0.call(this);
case 1:
return state_machine__5809__auto____1.call(this,state_13894);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5809__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5809__auto____0;
state_machine__5809__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5809__auto____1;
return state_machine__5809__auto__;
})()
;})(switch__5808__auto__,c__5823__auto___13924,chs__$1,out,cnt,rets,dchan,dctr,done))
})();var state__5825__auto__ = (function (){var statearr_13923 = f__5824__auto__.call(null);(statearr_13923[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5823__auto___13924);
return statearr_13923;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5825__auto__);
});})(c__5823__auto___13924,chs__$1,out,cnt,rets,dchan,dctr,done))
);
return out;
});
map = function(f,chs,buf_or_n){
switch(arguments.length){
case 2:
return map__2.call(this,f,chs);
case 3:
return map__3.call(this,f,chs,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
map.cljs$core$IFn$_invoke$arity$2 = map__2;
map.cljs$core$IFn$_invoke$arity$3 = map__3;
return map;
})()
;
/**
* Takes a collection of source channels and returns a channel which
* contains all values taken from them. The returned channel will be
* unbuffered by default, or a buf-or-n can be supplied. The channel
* will close after all the source channels have closed.
*/
cljs.core.async.merge = (function() {
var merge = null;
var merge__1 = (function (chs){return merge.call(null,chs,null);
});
var merge__2 = (function (chs,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5823__auto___14049 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5823__auto___14049,out){
return (function (){var f__5824__auto__ = (function (){var switch__5808__auto__ = ((function (c__5823__auto___14049,out){
return (function (state_14025){var state_val_14026 = (state_14025[(1)]);if((state_val_14026 === (7)))
{var inst_14004 = (state_14025[(7)]);var inst_14005 = (state_14025[(8)]);var inst_14004__$1 = (state_14025[(2)]);var inst_14005__$1 = cljs.core.nth.call(null,inst_14004__$1,(0),null);var inst_14006 = cljs.core.nth.call(null,inst_14004__$1,(1),null);var inst_14007 = (inst_14005__$1 == null);var state_14025__$1 = (function (){var statearr_14027 = state_14025;(statearr_14027[(7)] = inst_14004__$1);
(statearr_14027[(9)] = inst_14006);
(statearr_14027[(8)] = inst_14005__$1);
return statearr_14027;
})();if(cljs.core.truth_(inst_14007))
{var statearr_14028_14050 = state_14025__$1;(statearr_14028_14050[(1)] = (8));
} else
{var statearr_14029_14051 = state_14025__$1;(statearr_14029_14051[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14026 === (1)))
{var inst_13996 = cljs.core.vec.call(null,chs);var inst_13997 = inst_13996;var state_14025__$1 = (function (){var statearr_14030 = state_14025;(statearr_14030[(10)] = inst_13997);
return statearr_14030;
})();var statearr_14031_14052 = state_14025__$1;(statearr_14031_14052[(2)] = null);
(statearr_14031_14052[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14026 === (4)))
{var inst_13997 = (state_14025[(10)]);var state_14025__$1 = state_14025;return cljs.core.async.ioc_alts_BANG_.call(null,state_14025__$1,(7),inst_13997);
} else
{if((state_val_14026 === (6)))
{var inst_14021 = (state_14025[(2)]);var state_14025__$1 = state_14025;var statearr_14032_14053 = state_14025__$1;(statearr_14032_14053[(2)] = inst_14021);
(statearr_14032_14053[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14026 === (3)))
{var inst_14023 = (state_14025[(2)]);var state_14025__$1 = state_14025;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14025__$1,inst_14023);
} else
{if((state_val_14026 === (2)))
{var inst_13997 = (state_14025[(10)]);var inst_13999 = cljs.core.count.call(null,inst_13997);var inst_14000 = (inst_13999 > (0));var state_14025__$1 = state_14025;if(cljs.core.truth_(inst_14000))
{var statearr_14034_14054 = state_14025__$1;(statearr_14034_14054[(1)] = (4));
} else
{var statearr_14035_14055 = state_14025__$1;(statearr_14035_14055[(1)] = (5));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14026 === (11)))
{var inst_13997 = (state_14025[(10)]);var inst_14014 = (state_14025[(2)]);var tmp14033 = inst_13997;var inst_13997__$1 = tmp14033;var state_14025__$1 = (function (){var statearr_14036 = state_14025;(statearr_14036[(11)] = inst_14014);
(statearr_14036[(10)] = inst_13997__$1);
return statearr_14036;
})();var statearr_14037_14056 = state_14025__$1;(statearr_14037_14056[(2)] = null);
(statearr_14037_14056[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14026 === (9)))
{var inst_14005 = (state_14025[(8)]);var state_14025__$1 = state_14025;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14025__$1,(11),out,inst_14005);
} else
{if((state_val_14026 === (5)))
{var inst_14019 = cljs.core.async.close_BANG_.call(null,out);var state_14025__$1 = state_14025;var statearr_14038_14057 = state_14025__$1;(statearr_14038_14057[(2)] = inst_14019);
(statearr_14038_14057[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14026 === (10)))
{var inst_14017 = (state_14025[(2)]);var state_14025__$1 = state_14025;var statearr_14039_14058 = state_14025__$1;(statearr_14039_14058[(2)] = inst_14017);
(statearr_14039_14058[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14026 === (8)))
{var inst_14004 = (state_14025[(7)]);var inst_14006 = (state_14025[(9)]);var inst_14005 = (state_14025[(8)]);var inst_13997 = (state_14025[(10)]);var inst_14009 = (function (){var cs = inst_13997;var vec__14002 = inst_14004;var v = inst_14005;var c = inst_14006;return ((function (cs,vec__14002,v,c,inst_14004,inst_14006,inst_14005,inst_13997,state_val_14026,c__5823__auto___14049,out){
return (function (p1__13942_SHARP_){return cljs.core.not_EQ_.call(null,c,p1__13942_SHARP_);
});
;})(cs,vec__14002,v,c,inst_14004,inst_14006,inst_14005,inst_13997,state_val_14026,c__5823__auto___14049,out))
})();var inst_14010 = cljs.core.filterv.call(null,inst_14009,inst_13997);var inst_13997__$1 = inst_14010;var state_14025__$1 = (function (){var statearr_14040 = state_14025;(statearr_14040[(10)] = inst_13997__$1);
return statearr_14040;
})();var statearr_14041_14059 = state_14025__$1;(statearr_14041_14059[(2)] = null);
(statearr_14041_14059[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__5823__auto___14049,out))
;return ((function (switch__5808__auto__,c__5823__auto___14049,out){
return (function() {
var state_machine__5809__auto__ = null;
var state_machine__5809__auto____0 = (function (){var statearr_14045 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_14045[(0)] = state_machine__5809__auto__);
(statearr_14045[(1)] = (1));
return statearr_14045;
});
var state_machine__5809__auto____1 = (function (state_14025){while(true){
var ret_value__5810__auto__ = (function (){try{while(true){
var result__5811__auto__ = switch__5808__auto__.call(null,state_14025);if(cljs.core.keyword_identical_QMARK_.call(null,result__5811__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5811__auto__;
}
break;
}
}catch (e14046){if((e14046 instanceof Object))
{var ex__5812__auto__ = e14046;var statearr_14047_14060 = state_14025;(statearr_14047_14060[(5)] = ex__5812__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14025);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e14046;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5810__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__14061 = state_14025;
state_14025 = G__14061;
continue;
}
} else
{return ret_value__5810__auto__;
}
break;
}
});
state_machine__5809__auto__ = function(state_14025){
switch(arguments.length){
case 0:
return state_machine__5809__auto____0.call(this);
case 1:
return state_machine__5809__auto____1.call(this,state_14025);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5809__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5809__auto____0;
state_machine__5809__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5809__auto____1;
return state_machine__5809__auto__;
})()
;})(switch__5808__auto__,c__5823__auto___14049,out))
})();var state__5825__auto__ = (function (){var statearr_14048 = f__5824__auto__.call(null);(statearr_14048[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5823__auto___14049);
return statearr_14048;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5825__auto__);
});})(c__5823__auto___14049,out))
);
return out;
});
merge = function(chs,buf_or_n){
switch(arguments.length){
case 1:
return merge__1.call(this,chs);
case 2:
return merge__2.call(this,chs,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
merge.cljs$core$IFn$_invoke$arity$1 = merge__1;
merge.cljs$core$IFn$_invoke$arity$2 = merge__2;
return merge;
})()
;
/**
* Returns a channel containing the single (collection) result of the
* items taken from the channel conjoined to the supplied
* collection. ch must close before into produces a result.
*/
cljs.core.async.into = (function into(coll,ch){return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
* Returns a channel that will return, at most, n items from ch. After n items
* have been returned, or ch has been closed, the return chanel will close.
* 
* The output channel is unbuffered by default, unless buf-or-n is given.
*/
cljs.core.async.take = (function() {
var take = null;
var take__2 = (function (n,ch){return take.call(null,n,ch,null);
});
var take__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5823__auto___14154 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5823__auto___14154,out){
return (function (){var f__5824__auto__ = (function (){var switch__5808__auto__ = ((function (c__5823__auto___14154,out){
return (function (state_14131){var state_val_14132 = (state_14131[(1)]);if((state_val_14132 === (7)))
{var inst_14113 = (state_14131[(7)]);var inst_14113__$1 = (state_14131[(2)]);var inst_14114 = (inst_14113__$1 == null);var inst_14115 = cljs.core.not.call(null,inst_14114);var state_14131__$1 = (function (){var statearr_14133 = state_14131;(statearr_14133[(7)] = inst_14113__$1);
return statearr_14133;
})();if(inst_14115)
{var statearr_14134_14155 = state_14131__$1;(statearr_14134_14155[(1)] = (8));
} else
{var statearr_14135_14156 = state_14131__$1;(statearr_14135_14156[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14132 === (1)))
{var inst_14108 = (0);var state_14131__$1 = (function (){var statearr_14136 = state_14131;(statearr_14136[(8)] = inst_14108);
return statearr_14136;
})();var statearr_14137_14157 = state_14131__$1;(statearr_14137_14157[(2)] = null);
(statearr_14137_14157[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14132 === (4)))
{var state_14131__$1 = state_14131;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14131__$1,(7),ch);
} else
{if((state_val_14132 === (6)))
{var inst_14126 = (state_14131[(2)]);var state_14131__$1 = state_14131;var statearr_14138_14158 = state_14131__$1;(statearr_14138_14158[(2)] = inst_14126);
(statearr_14138_14158[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14132 === (3)))
{var inst_14128 = (state_14131[(2)]);var inst_14129 = cljs.core.async.close_BANG_.call(null,out);var state_14131__$1 = (function (){var statearr_14139 = state_14131;(statearr_14139[(9)] = inst_14128);
return statearr_14139;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14131__$1,inst_14129);
} else
{if((state_val_14132 === (2)))
{var inst_14108 = (state_14131[(8)]);var inst_14110 = (inst_14108 < n);var state_14131__$1 = state_14131;if(cljs.core.truth_(inst_14110))
{var statearr_14140_14159 = state_14131__$1;(statearr_14140_14159[(1)] = (4));
} else
{var statearr_14141_14160 = state_14131__$1;(statearr_14141_14160[(1)] = (5));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14132 === (11)))
{var inst_14108 = (state_14131[(8)]);var inst_14118 = (state_14131[(2)]);var inst_14119 = (inst_14108 + (1));var inst_14108__$1 = inst_14119;var state_14131__$1 = (function (){var statearr_14142 = state_14131;(statearr_14142[(10)] = inst_14118);
(statearr_14142[(8)] = inst_14108__$1);
return statearr_14142;
})();var statearr_14143_14161 = state_14131__$1;(statearr_14143_14161[(2)] = null);
(statearr_14143_14161[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14132 === (9)))
{var state_14131__$1 = state_14131;var statearr_14144_14162 = state_14131__$1;(statearr_14144_14162[(2)] = null);
(statearr_14144_14162[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14132 === (5)))
{var state_14131__$1 = state_14131;var statearr_14145_14163 = state_14131__$1;(statearr_14145_14163[(2)] = null);
(statearr_14145_14163[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14132 === (10)))
{var inst_14123 = (state_14131[(2)]);var state_14131__$1 = state_14131;var statearr_14146_14164 = state_14131__$1;(statearr_14146_14164[(2)] = inst_14123);
(statearr_14146_14164[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14132 === (8)))
{var inst_14113 = (state_14131[(7)]);var state_14131__$1 = state_14131;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14131__$1,(11),out,inst_14113);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__5823__auto___14154,out))
;return ((function (switch__5808__auto__,c__5823__auto___14154,out){
return (function() {
var state_machine__5809__auto__ = null;
var state_machine__5809__auto____0 = (function (){var statearr_14150 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_14150[(0)] = state_machine__5809__auto__);
(statearr_14150[(1)] = (1));
return statearr_14150;
});
var state_machine__5809__auto____1 = (function (state_14131){while(true){
var ret_value__5810__auto__ = (function (){try{while(true){
var result__5811__auto__ = switch__5808__auto__.call(null,state_14131);if(cljs.core.keyword_identical_QMARK_.call(null,result__5811__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5811__auto__;
}
break;
}
}catch (e14151){if((e14151 instanceof Object))
{var ex__5812__auto__ = e14151;var statearr_14152_14165 = state_14131;(statearr_14152_14165[(5)] = ex__5812__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14131);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e14151;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5810__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__14166 = state_14131;
state_14131 = G__14166;
continue;
}
} else
{return ret_value__5810__auto__;
}
break;
}
});
state_machine__5809__auto__ = function(state_14131){
switch(arguments.length){
case 0:
return state_machine__5809__auto____0.call(this);
case 1:
return state_machine__5809__auto____1.call(this,state_14131);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5809__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5809__auto____0;
state_machine__5809__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5809__auto____1;
return state_machine__5809__auto__;
})()
;})(switch__5808__auto__,c__5823__auto___14154,out))
})();var state__5825__auto__ = (function (){var statearr_14153 = f__5824__auto__.call(null);(statearr_14153[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5823__auto___14154);
return statearr_14153;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5825__auto__);
});})(c__5823__auto___14154,out))
);
return out;
});
take = function(n,ch,buf_or_n){
switch(arguments.length){
case 2:
return take__2.call(this,n,ch);
case 3:
return take__3.call(this,n,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
take.cljs$core$IFn$_invoke$arity$2 = take__2;
take.cljs$core$IFn$_invoke$arity$3 = take__3;
return take;
})()
;
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.map_LT_ = (function map_LT_(f,ch){if(typeof cljs.core.async.t14174 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t14174 = (function (map_LT_,f,ch,meta14175){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta14175 = meta14175;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t14174.cljs$lang$type = true;
cljs.core.async.t14174.cljs$lang$ctorStr = "cljs.core.async/t14174";
cljs.core.async.t14174.cljs$lang$ctorPrWriter = (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){return cljs.core._write.call(null,writer__4218__auto__,"cljs.core.async/t14174");
});
cljs.core.async.t14174.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14176,meta14175__$1){var self__ = this;
var _14176__$1 = this;return (new cljs.core.async.t14174(self__.map_LT_,self__.f,self__.ch,meta14175__$1));
});
cljs.core.async.t14174.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14176){var self__ = this;
var _14176__$1 = this;return self__.meta14175;
});
cljs.core.async.t14174.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t14174.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t14174.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});
cljs.core.async.t14174.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t14174.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){if(typeof cljs.core.async.t14177 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t14177 = (function (map_LT_,f,ch,meta14175,_,fn1,meta14178){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta14175 = meta14175;
this._ = _;
this.fn1 = fn1;
this.meta14178 = meta14178;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t14177.cljs$lang$type = true;
cljs.core.async.t14177.cljs$lang$ctorStr = "cljs.core.async/t14177";
cljs.core.async.t14177.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){return cljs.core._write.call(null,writer__4218__auto__,"cljs.core.async/t14177");
});})(___$1))
;
cljs.core.async.t14177.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_14179,meta14178__$1){var self__ = this;
var _14179__$1 = this;return (new cljs.core.async.t14177(self__.map_LT_,self__.f,self__.ch,self__.meta14175,self__._,self__.fn1,meta14178__$1));
});})(___$1))
;
cljs.core.async.t14177.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_14179){var self__ = this;
var _14179__$1 = this;return self__.meta14178;
});})(___$1))
;
cljs.core.async.t14177.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t14177.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;
cljs.core.async.t14177.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);return ((function (f1,___$4,___$1){
return (function (p1__14167_SHARP_){return f1.call(null,(((p1__14167_SHARP_ == null))?null:self__.f.call(null,p1__14167_SHARP_)));
});
;})(f1,___$4,___$1))
});})(___$1))
;
cljs.core.async.__GT_t14177 = ((function (___$1){
return (function __GT_t14177(map_LT___$2,f__$2,ch__$2,meta14175__$1,___$2,fn1__$1,meta14178){return (new cljs.core.async.t14177(map_LT___$2,f__$2,ch__$2,meta14175__$1,___$2,fn1__$1,meta14178));
});})(___$1))
;
}
return (new cljs.core.async.t14177(self__.map_LT_,self__.f,self__.ch,self__.meta14175,___$1,fn1,null));
})());if(cljs.core.truth_((function (){var and__3628__auto__ = ret;if(cljs.core.truth_(and__3628__auto__))
{return !((cljs.core.deref.call(null,ret) == null));
} else
{return and__3628__auto__;
}
})()))
{return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else
{return ret;
}
});
cljs.core.async.t14174.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t14174.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});
cljs.core.async.__GT_t14174 = (function __GT_t14174(map_LT___$1,f__$1,ch__$1,meta14175){return (new cljs.core.async.t14174(map_LT___$1,f__$1,ch__$1,meta14175));
});
}
return (new cljs.core.async.t14174(map_LT_,f,ch,null));
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){if(typeof cljs.core.async.t14183 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t14183 = (function (map_GT_,f,ch,meta14184){
this.map_GT_ = map_GT_;
this.f = f;
this.ch = ch;
this.meta14184 = meta14184;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t14183.cljs$lang$type = true;
cljs.core.async.t14183.cljs$lang$ctorStr = "cljs.core.async/t14183";
cljs.core.async.t14183.cljs$lang$ctorPrWriter = (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){return cljs.core._write.call(null,writer__4218__auto__,"cljs.core.async/t14183");
});
cljs.core.async.t14183.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14185,meta14184__$1){var self__ = this;
var _14185__$1 = this;return (new cljs.core.async.t14183(self__.map_GT_,self__.f,self__.ch,meta14184__$1));
});
cljs.core.async.t14183.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14185){var self__ = this;
var _14185__$1 = this;return self__.meta14184;
});
cljs.core.async.t14183.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t14183.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t14183.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t14183.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t14183.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t14183.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});
cljs.core.async.__GT_t14183 = (function __GT_t14183(map_GT___$1,f__$1,ch__$1,meta14184){return (new cljs.core.async.t14183(map_GT___$1,f__$1,ch__$1,meta14184));
});
}
return (new cljs.core.async.t14183(map_GT_,f,ch,null));
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){if(typeof cljs.core.async.t14189 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t14189 = (function (filter_GT_,p,ch,meta14190){
this.filter_GT_ = filter_GT_;
this.p = p;
this.ch = ch;
this.meta14190 = meta14190;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t14189.cljs$lang$type = true;
cljs.core.async.t14189.cljs$lang$ctorStr = "cljs.core.async/t14189";
cljs.core.async.t14189.cljs$lang$ctorPrWriter = (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){return cljs.core._write.call(null,writer__4218__auto__,"cljs.core.async/t14189");
});
cljs.core.async.t14189.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14191,meta14190__$1){var self__ = this;
var _14191__$1 = this;return (new cljs.core.async.t14189(self__.filter_GT_,self__.p,self__.ch,meta14190__$1));
});
cljs.core.async.t14189.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14191){var self__ = this;
var _14191__$1 = this;return self__.meta14190;
});
cljs.core.async.t14189.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t14189.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t14189.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});
cljs.core.async.t14189.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t14189.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t14189.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t14189.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.p.call(null,val)))
{return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else
{return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});
cljs.core.async.__GT_t14189 = (function __GT_t14189(filter_GT___$1,p__$1,ch__$1,meta14190){return (new cljs.core.async.t14189(filter_GT___$1,p__$1,ch__$1,meta14190));
});
}
return (new cljs.core.async.t14189(filter_GT_,p,ch,null));
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.remove_GT_ = (function remove_GT_(p,ch){return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.filter_LT_ = (function() {
var filter_LT_ = null;
var filter_LT___2 = (function (p,ch){return filter_LT_.call(null,p,ch,null);
});
var filter_LT___3 = (function (p,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5823__auto___14274 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5823__auto___14274,out){
return (function (){var f__5824__auto__ = (function (){var switch__5808__auto__ = ((function (c__5823__auto___14274,out){
return (function (state_14253){var state_val_14254 = (state_14253[(1)]);if((state_val_14254 === (7)))
{var inst_14249 = (state_14253[(2)]);var state_14253__$1 = state_14253;var statearr_14255_14275 = state_14253__$1;(statearr_14255_14275[(2)] = inst_14249);
(statearr_14255_14275[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14254 === (1)))
{var state_14253__$1 = state_14253;var statearr_14256_14276 = state_14253__$1;(statearr_14256_14276[(2)] = null);
(statearr_14256_14276[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14254 === (4)))
{var inst_14235 = (state_14253[(7)]);var inst_14235__$1 = (state_14253[(2)]);var inst_14236 = (inst_14235__$1 == null);var state_14253__$1 = (function (){var statearr_14257 = state_14253;(statearr_14257[(7)] = inst_14235__$1);
return statearr_14257;
})();if(cljs.core.truth_(inst_14236))
{var statearr_14258_14277 = state_14253__$1;(statearr_14258_14277[(1)] = (5));
} else
{var statearr_14259_14278 = state_14253__$1;(statearr_14259_14278[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14254 === (6)))
{var inst_14235 = (state_14253[(7)]);var inst_14240 = p.call(null,inst_14235);var state_14253__$1 = state_14253;if(cljs.core.truth_(inst_14240))
{var statearr_14260_14279 = state_14253__$1;(statearr_14260_14279[(1)] = (8));
} else
{var statearr_14261_14280 = state_14253__$1;(statearr_14261_14280[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14254 === (3)))
{var inst_14251 = (state_14253[(2)]);var state_14253__$1 = state_14253;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14253__$1,inst_14251);
} else
{if((state_val_14254 === (2)))
{var state_14253__$1 = state_14253;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14253__$1,(4),ch);
} else
{if((state_val_14254 === (11)))
{var inst_14243 = (state_14253[(2)]);var state_14253__$1 = state_14253;var statearr_14262_14281 = state_14253__$1;(statearr_14262_14281[(2)] = inst_14243);
(statearr_14262_14281[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14254 === (9)))
{var state_14253__$1 = state_14253;var statearr_14263_14282 = state_14253__$1;(statearr_14263_14282[(2)] = null);
(statearr_14263_14282[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14254 === (5)))
{var inst_14238 = cljs.core.async.close_BANG_.call(null,out);var state_14253__$1 = state_14253;var statearr_14264_14283 = state_14253__$1;(statearr_14264_14283[(2)] = inst_14238);
(statearr_14264_14283[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14254 === (10)))
{var inst_14246 = (state_14253[(2)]);var state_14253__$1 = (function (){var statearr_14265 = state_14253;(statearr_14265[(8)] = inst_14246);
return statearr_14265;
})();var statearr_14266_14284 = state_14253__$1;(statearr_14266_14284[(2)] = null);
(statearr_14266_14284[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14254 === (8)))
{var inst_14235 = (state_14253[(7)]);var state_14253__$1 = state_14253;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14253__$1,(11),out,inst_14235);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__5823__auto___14274,out))
;return ((function (switch__5808__auto__,c__5823__auto___14274,out){
return (function() {
var state_machine__5809__auto__ = null;
var state_machine__5809__auto____0 = (function (){var statearr_14270 = [null,null,null,null,null,null,null,null,null];(statearr_14270[(0)] = state_machine__5809__auto__);
(statearr_14270[(1)] = (1));
return statearr_14270;
});
var state_machine__5809__auto____1 = (function (state_14253){while(true){
var ret_value__5810__auto__ = (function (){try{while(true){
var result__5811__auto__ = switch__5808__auto__.call(null,state_14253);if(cljs.core.keyword_identical_QMARK_.call(null,result__5811__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5811__auto__;
}
break;
}
}catch (e14271){if((e14271 instanceof Object))
{var ex__5812__auto__ = e14271;var statearr_14272_14285 = state_14253;(statearr_14272_14285[(5)] = ex__5812__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14253);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e14271;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5810__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__14286 = state_14253;
state_14253 = G__14286;
continue;
}
} else
{return ret_value__5810__auto__;
}
break;
}
});
state_machine__5809__auto__ = function(state_14253){
switch(arguments.length){
case 0:
return state_machine__5809__auto____0.call(this);
case 1:
return state_machine__5809__auto____1.call(this,state_14253);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5809__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5809__auto____0;
state_machine__5809__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5809__auto____1;
return state_machine__5809__auto__;
})()
;})(switch__5808__auto__,c__5823__auto___14274,out))
})();var state__5825__auto__ = (function (){var statearr_14273 = f__5824__auto__.call(null);(statearr_14273[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5823__auto___14274);
return statearr_14273;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5825__auto__);
});})(c__5823__auto___14274,out))
);
return out;
});
filter_LT_ = function(p,ch,buf_or_n){
switch(arguments.length){
case 2:
return filter_LT___2.call(this,p,ch);
case 3:
return filter_LT___3.call(this,p,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
filter_LT_.cljs$core$IFn$_invoke$arity$2 = filter_LT___2;
filter_LT_.cljs$core$IFn$_invoke$arity$3 = filter_LT___3;
return filter_LT_;
})()
;
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.remove_LT_ = (function() {
var remove_LT_ = null;
var remove_LT___2 = (function (p,ch){return remove_LT_.call(null,p,ch,null);
});
var remove_LT___3 = (function (p,ch,buf_or_n){return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});
remove_LT_ = function(p,ch,buf_or_n){
switch(arguments.length){
case 2:
return remove_LT___2.call(this,p,ch);
case 3:
return remove_LT___3.call(this,p,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
remove_LT_.cljs$core$IFn$_invoke$arity$2 = remove_LT___2;
remove_LT_.cljs$core$IFn$_invoke$arity$3 = remove_LT___3;
return remove_LT_;
})()
;
cljs.core.async.mapcat_STAR_ = (function mapcat_STAR_(f,in$,out){var c__5823__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5823__auto__){
return (function (){var f__5824__auto__ = (function (){var switch__5808__auto__ = ((function (c__5823__auto__){
return (function (state_14452){var state_val_14453 = (state_14452[(1)]);if((state_val_14453 === (7)))
{var inst_14448 = (state_14452[(2)]);var state_14452__$1 = state_14452;var statearr_14454_14495 = state_14452__$1;(statearr_14454_14495[(2)] = inst_14448);
(statearr_14454_14495[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14453 === (20)))
{var inst_14418 = (state_14452[(7)]);var inst_14429 = (state_14452[(2)]);var inst_14430 = cljs.core.next.call(null,inst_14418);var inst_14404 = inst_14430;var inst_14405 = null;var inst_14406 = (0);var inst_14407 = (0);var state_14452__$1 = (function (){var statearr_14455 = state_14452;(statearr_14455[(8)] = inst_14429);
(statearr_14455[(9)] = inst_14406);
(statearr_14455[(10)] = inst_14404);
(statearr_14455[(11)] = inst_14407);
(statearr_14455[(12)] = inst_14405);
return statearr_14455;
})();var statearr_14456_14496 = state_14452__$1;(statearr_14456_14496[(2)] = null);
(statearr_14456_14496[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14453 === (1)))
{var state_14452__$1 = state_14452;var statearr_14457_14497 = state_14452__$1;(statearr_14457_14497[(2)] = null);
(statearr_14457_14497[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14453 === (4)))
{var inst_14393 = (state_14452[(13)]);var inst_14393__$1 = (state_14452[(2)]);var inst_14394 = (inst_14393__$1 == null);var state_14452__$1 = (function (){var statearr_14458 = state_14452;(statearr_14458[(13)] = inst_14393__$1);
return statearr_14458;
})();if(cljs.core.truth_(inst_14394))
{var statearr_14459_14498 = state_14452__$1;(statearr_14459_14498[(1)] = (5));
} else
{var statearr_14460_14499 = state_14452__$1;(statearr_14460_14499[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14453 === (15)))
{var state_14452__$1 = state_14452;var statearr_14464_14500 = state_14452__$1;(statearr_14464_14500[(2)] = null);
(statearr_14464_14500[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14453 === (21)))
{var state_14452__$1 = state_14452;var statearr_14465_14501 = state_14452__$1;(statearr_14465_14501[(2)] = null);
(statearr_14465_14501[(1)] = (23));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14453 === (13)))
{var inst_14406 = (state_14452[(9)]);var inst_14404 = (state_14452[(10)]);var inst_14407 = (state_14452[(11)]);var inst_14405 = (state_14452[(12)]);var inst_14414 = (state_14452[(2)]);var inst_14415 = (inst_14407 + (1));var tmp14461 = inst_14406;var tmp14462 = inst_14404;var tmp14463 = inst_14405;var inst_14404__$1 = tmp14462;var inst_14405__$1 = tmp14463;var inst_14406__$1 = tmp14461;var inst_14407__$1 = inst_14415;var state_14452__$1 = (function (){var statearr_14466 = state_14452;(statearr_14466[(9)] = inst_14406__$1);
(statearr_14466[(14)] = inst_14414);
(statearr_14466[(10)] = inst_14404__$1);
(statearr_14466[(11)] = inst_14407__$1);
(statearr_14466[(12)] = inst_14405__$1);
return statearr_14466;
})();var statearr_14467_14502 = state_14452__$1;(statearr_14467_14502[(2)] = null);
(statearr_14467_14502[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14453 === (22)))
{var state_14452__$1 = state_14452;var statearr_14468_14503 = state_14452__$1;(statearr_14468_14503[(2)] = null);
(statearr_14468_14503[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14453 === (6)))
{var inst_14393 = (state_14452[(13)]);var inst_14402 = f.call(null,inst_14393);var inst_14403 = cljs.core.seq.call(null,inst_14402);var inst_14404 = inst_14403;var inst_14405 = null;var inst_14406 = (0);var inst_14407 = (0);var state_14452__$1 = (function (){var statearr_14469 = state_14452;(statearr_14469[(9)] = inst_14406);
(statearr_14469[(10)] = inst_14404);
(statearr_14469[(11)] = inst_14407);
(statearr_14469[(12)] = inst_14405);
return statearr_14469;
})();var statearr_14470_14504 = state_14452__$1;(statearr_14470_14504[(2)] = null);
(statearr_14470_14504[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14453 === (17)))
{var inst_14418 = (state_14452[(7)]);var inst_14422 = cljs.core.chunk_first.call(null,inst_14418);var inst_14423 = cljs.core.chunk_rest.call(null,inst_14418);var inst_14424 = cljs.core.count.call(null,inst_14422);var inst_14404 = inst_14423;var inst_14405 = inst_14422;var inst_14406 = inst_14424;var inst_14407 = (0);var state_14452__$1 = (function (){var statearr_14471 = state_14452;(statearr_14471[(9)] = inst_14406);
(statearr_14471[(10)] = inst_14404);
(statearr_14471[(11)] = inst_14407);
(statearr_14471[(12)] = inst_14405);
return statearr_14471;
})();var statearr_14472_14505 = state_14452__$1;(statearr_14472_14505[(2)] = null);
(statearr_14472_14505[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14453 === (3)))
{var inst_14450 = (state_14452[(2)]);var state_14452__$1 = state_14452;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14452__$1,inst_14450);
} else
{if((state_val_14453 === (12)))
{var inst_14438 = (state_14452[(2)]);var state_14452__$1 = state_14452;var statearr_14473_14506 = state_14452__$1;(statearr_14473_14506[(2)] = inst_14438);
(statearr_14473_14506[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14453 === (2)))
{var state_14452__$1 = state_14452;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14452__$1,(4),in$);
} else
{if((state_val_14453 === (23)))
{var inst_14446 = (state_14452[(2)]);var state_14452__$1 = state_14452;var statearr_14474_14507 = state_14452__$1;(statearr_14474_14507[(2)] = inst_14446);
(statearr_14474_14507[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14453 === (19)))
{var inst_14433 = (state_14452[(2)]);var state_14452__$1 = state_14452;var statearr_14475_14508 = state_14452__$1;(statearr_14475_14508[(2)] = inst_14433);
(statearr_14475_14508[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14453 === (11)))
{var inst_14404 = (state_14452[(10)]);var inst_14418 = (state_14452[(7)]);var inst_14418__$1 = cljs.core.seq.call(null,inst_14404);var state_14452__$1 = (function (){var statearr_14476 = state_14452;(statearr_14476[(7)] = inst_14418__$1);
return statearr_14476;
})();if(inst_14418__$1)
{var statearr_14477_14509 = state_14452__$1;(statearr_14477_14509[(1)] = (14));
} else
{var statearr_14478_14510 = state_14452__$1;(statearr_14478_14510[(1)] = (15));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14453 === (9)))
{var inst_14440 = (state_14452[(2)]);var inst_14441 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);var state_14452__$1 = (function (){var statearr_14479 = state_14452;(statearr_14479[(15)] = inst_14440);
return statearr_14479;
})();if(cljs.core.truth_(inst_14441))
{var statearr_14480_14511 = state_14452__$1;(statearr_14480_14511[(1)] = (21));
} else
{var statearr_14481_14512 = state_14452__$1;(statearr_14481_14512[(1)] = (22));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14453 === (5)))
{var inst_14396 = cljs.core.async.close_BANG_.call(null,out);var state_14452__$1 = state_14452;var statearr_14482_14513 = state_14452__$1;(statearr_14482_14513[(2)] = inst_14396);
(statearr_14482_14513[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14453 === (14)))
{var inst_14418 = (state_14452[(7)]);var inst_14420 = cljs.core.chunked_seq_QMARK_.call(null,inst_14418);var state_14452__$1 = state_14452;if(inst_14420)
{var statearr_14483_14514 = state_14452__$1;(statearr_14483_14514[(1)] = (17));
} else
{var statearr_14484_14515 = state_14452__$1;(statearr_14484_14515[(1)] = (18));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14453 === (16)))
{var inst_14436 = (state_14452[(2)]);var state_14452__$1 = state_14452;var statearr_14485_14516 = state_14452__$1;(statearr_14485_14516[(2)] = inst_14436);
(statearr_14485_14516[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14453 === (10)))
{var inst_14407 = (state_14452[(11)]);var inst_14405 = (state_14452[(12)]);var inst_14412 = cljs.core._nth.call(null,inst_14405,inst_14407);var state_14452__$1 = state_14452;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14452__$1,(13),out,inst_14412);
} else
{if((state_val_14453 === (18)))
{var inst_14418 = (state_14452[(7)]);var inst_14427 = cljs.core.first.call(null,inst_14418);var state_14452__$1 = state_14452;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14452__$1,(20),out,inst_14427);
} else
{if((state_val_14453 === (8)))
{var inst_14406 = (state_14452[(9)]);var inst_14407 = (state_14452[(11)]);var inst_14409 = (inst_14407 < inst_14406);var inst_14410 = inst_14409;var state_14452__$1 = state_14452;if(cljs.core.truth_(inst_14410))
{var statearr_14486_14517 = state_14452__$1;(statearr_14486_14517[(1)] = (10));
} else
{var statearr_14487_14518 = state_14452__$1;(statearr_14487_14518[(1)] = (11));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__5823__auto__))
;return ((function (switch__5808__auto__,c__5823__auto__){
return (function() {
var state_machine__5809__auto__ = null;
var state_machine__5809__auto____0 = (function (){var statearr_14491 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_14491[(0)] = state_machine__5809__auto__);
(statearr_14491[(1)] = (1));
return statearr_14491;
});
var state_machine__5809__auto____1 = (function (state_14452){while(true){
var ret_value__5810__auto__ = (function (){try{while(true){
var result__5811__auto__ = switch__5808__auto__.call(null,state_14452);if(cljs.core.keyword_identical_QMARK_.call(null,result__5811__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5811__auto__;
}
break;
}
}catch (e14492){if((e14492 instanceof Object))
{var ex__5812__auto__ = e14492;var statearr_14493_14519 = state_14452;(statearr_14493_14519[(5)] = ex__5812__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14452);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e14492;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5810__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__14520 = state_14452;
state_14452 = G__14520;
continue;
}
} else
{return ret_value__5810__auto__;
}
break;
}
});
state_machine__5809__auto__ = function(state_14452){
switch(arguments.length){
case 0:
return state_machine__5809__auto____0.call(this);
case 1:
return state_machine__5809__auto____1.call(this,state_14452);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5809__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5809__auto____0;
state_machine__5809__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5809__auto____1;
return state_machine__5809__auto__;
})()
;})(switch__5808__auto__,c__5823__auto__))
})();var state__5825__auto__ = (function (){var statearr_14494 = f__5824__auto__.call(null);(statearr_14494[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5823__auto__);
return statearr_14494;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5825__auto__);
});})(c__5823__auto__))
);
return c__5823__auto__;
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.mapcat_LT_ = (function() {
var mapcat_LT_ = null;
var mapcat_LT___2 = (function (f,in$){return mapcat_LT_.call(null,f,in$,null);
});
var mapcat_LT___3 = (function (f,in$,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);cljs.core.async.mapcat_STAR_.call(null,f,in$,out);
return out;
});
mapcat_LT_ = function(f,in$,buf_or_n){
switch(arguments.length){
case 2:
return mapcat_LT___2.call(this,f,in$);
case 3:
return mapcat_LT___3.call(this,f,in$,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = mapcat_LT___2;
mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = mapcat_LT___3;
return mapcat_LT_;
})()
;
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.mapcat_GT_ = (function() {
var mapcat_GT_ = null;
var mapcat_GT___2 = (function (f,out){return mapcat_GT_.call(null,f,out,null);
});
var mapcat_GT___3 = (function (f,out,buf_or_n){var in$ = cljs.core.async.chan.call(null,buf_or_n);cljs.core.async.mapcat_STAR_.call(null,f,in$,out);
return in$;
});
mapcat_GT_ = function(f,out,buf_or_n){
switch(arguments.length){
case 2:
return mapcat_GT___2.call(this,f,out);
case 3:
return mapcat_GT___3.call(this,f,out,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = mapcat_GT___2;
mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = mapcat_GT___3;
return mapcat_GT_;
})()
;
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.unique = (function() {
var unique = null;
var unique__1 = (function (ch){return unique.call(null,ch,null);
});
var unique__2 = (function (ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5823__auto___14617 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5823__auto___14617,out){
return (function (){var f__5824__auto__ = (function (){var switch__5808__auto__ = ((function (c__5823__auto___14617,out){
return (function (state_14592){var state_val_14593 = (state_14592[(1)]);if((state_val_14593 === (7)))
{var inst_14587 = (state_14592[(2)]);var state_14592__$1 = state_14592;var statearr_14594_14618 = state_14592__$1;(statearr_14594_14618[(2)] = inst_14587);
(statearr_14594_14618[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14593 === (1)))
{var inst_14569 = null;var state_14592__$1 = (function (){var statearr_14595 = state_14592;(statearr_14595[(7)] = inst_14569);
return statearr_14595;
})();var statearr_14596_14619 = state_14592__$1;(statearr_14596_14619[(2)] = null);
(statearr_14596_14619[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14593 === (4)))
{var inst_14572 = (state_14592[(8)]);var inst_14572__$1 = (state_14592[(2)]);var inst_14573 = (inst_14572__$1 == null);var inst_14574 = cljs.core.not.call(null,inst_14573);var state_14592__$1 = (function (){var statearr_14597 = state_14592;(statearr_14597[(8)] = inst_14572__$1);
return statearr_14597;
})();if(inst_14574)
{var statearr_14598_14620 = state_14592__$1;(statearr_14598_14620[(1)] = (5));
} else
{var statearr_14599_14621 = state_14592__$1;(statearr_14599_14621[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14593 === (6)))
{var state_14592__$1 = state_14592;var statearr_14600_14622 = state_14592__$1;(statearr_14600_14622[(2)] = null);
(statearr_14600_14622[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14593 === (3)))
{var inst_14589 = (state_14592[(2)]);var inst_14590 = cljs.core.async.close_BANG_.call(null,out);var state_14592__$1 = (function (){var statearr_14601 = state_14592;(statearr_14601[(9)] = inst_14589);
return statearr_14601;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14592__$1,inst_14590);
} else
{if((state_val_14593 === (2)))
{var state_14592__$1 = state_14592;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14592__$1,(4),ch);
} else
{if((state_val_14593 === (11)))
{var inst_14572 = (state_14592[(8)]);var inst_14581 = (state_14592[(2)]);var inst_14569 = inst_14572;var state_14592__$1 = (function (){var statearr_14602 = state_14592;(statearr_14602[(10)] = inst_14581);
(statearr_14602[(7)] = inst_14569);
return statearr_14602;
})();var statearr_14603_14623 = state_14592__$1;(statearr_14603_14623[(2)] = null);
(statearr_14603_14623[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14593 === (9)))
{var inst_14572 = (state_14592[(8)]);var state_14592__$1 = state_14592;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14592__$1,(11),out,inst_14572);
} else
{if((state_val_14593 === (5)))
{var inst_14572 = (state_14592[(8)]);var inst_14569 = (state_14592[(7)]);var inst_14576 = cljs.core._EQ_.call(null,inst_14572,inst_14569);var state_14592__$1 = state_14592;if(inst_14576)
{var statearr_14605_14624 = state_14592__$1;(statearr_14605_14624[(1)] = (8));
} else
{var statearr_14606_14625 = state_14592__$1;(statearr_14606_14625[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14593 === (10)))
{var inst_14584 = (state_14592[(2)]);var state_14592__$1 = state_14592;var statearr_14607_14626 = state_14592__$1;(statearr_14607_14626[(2)] = inst_14584);
(statearr_14607_14626[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14593 === (8)))
{var inst_14569 = (state_14592[(7)]);var tmp14604 = inst_14569;var inst_14569__$1 = tmp14604;var state_14592__$1 = (function (){var statearr_14608 = state_14592;(statearr_14608[(7)] = inst_14569__$1);
return statearr_14608;
})();var statearr_14609_14627 = state_14592__$1;(statearr_14609_14627[(2)] = null);
(statearr_14609_14627[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__5823__auto___14617,out))
;return ((function (switch__5808__auto__,c__5823__auto___14617,out){
return (function() {
var state_machine__5809__auto__ = null;
var state_machine__5809__auto____0 = (function (){var statearr_14613 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_14613[(0)] = state_machine__5809__auto__);
(statearr_14613[(1)] = (1));
return statearr_14613;
});
var state_machine__5809__auto____1 = (function (state_14592){while(true){
var ret_value__5810__auto__ = (function (){try{while(true){
var result__5811__auto__ = switch__5808__auto__.call(null,state_14592);if(cljs.core.keyword_identical_QMARK_.call(null,result__5811__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5811__auto__;
}
break;
}
}catch (e14614){if((e14614 instanceof Object))
{var ex__5812__auto__ = e14614;var statearr_14615_14628 = state_14592;(statearr_14615_14628[(5)] = ex__5812__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14592);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e14614;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5810__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__14629 = state_14592;
state_14592 = G__14629;
continue;
}
} else
{return ret_value__5810__auto__;
}
break;
}
});
state_machine__5809__auto__ = function(state_14592){
switch(arguments.length){
case 0:
return state_machine__5809__auto____0.call(this);
case 1:
return state_machine__5809__auto____1.call(this,state_14592);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5809__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5809__auto____0;
state_machine__5809__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5809__auto____1;
return state_machine__5809__auto__;
})()
;})(switch__5808__auto__,c__5823__auto___14617,out))
})();var state__5825__auto__ = (function (){var statearr_14616 = f__5824__auto__.call(null);(statearr_14616[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5823__auto___14617);
return statearr_14616;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5825__auto__);
});})(c__5823__auto___14617,out))
);
return out;
});
unique = function(ch,buf_or_n){
switch(arguments.length){
case 1:
return unique__1.call(this,ch);
case 2:
return unique__2.call(this,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unique.cljs$core$IFn$_invoke$arity$1 = unique__1;
unique.cljs$core$IFn$_invoke$arity$2 = unique__2;
return unique;
})()
;
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.partition = (function() {
var partition = null;
var partition__2 = (function (n,ch){return partition.call(null,n,ch,null);
});
var partition__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5823__auto___14764 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5823__auto___14764,out){
return (function (){var f__5824__auto__ = (function (){var switch__5808__auto__ = ((function (c__5823__auto___14764,out){
return (function (state_14734){var state_val_14735 = (state_14734[(1)]);if((state_val_14735 === (7)))
{var inst_14730 = (state_14734[(2)]);var state_14734__$1 = state_14734;var statearr_14736_14765 = state_14734__$1;(statearr_14736_14765[(2)] = inst_14730);
(statearr_14736_14765[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14735 === (1)))
{var inst_14697 = (new Array(n));var inst_14698 = inst_14697;var inst_14699 = (0);var state_14734__$1 = (function (){var statearr_14737 = state_14734;(statearr_14737[(7)] = inst_14699);
(statearr_14737[(8)] = inst_14698);
return statearr_14737;
})();var statearr_14738_14766 = state_14734__$1;(statearr_14738_14766[(2)] = null);
(statearr_14738_14766[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14735 === (4)))
{var inst_14702 = (state_14734[(9)]);var inst_14702__$1 = (state_14734[(2)]);var inst_14703 = (inst_14702__$1 == null);var inst_14704 = cljs.core.not.call(null,inst_14703);var state_14734__$1 = (function (){var statearr_14739 = state_14734;(statearr_14739[(9)] = inst_14702__$1);
return statearr_14739;
})();if(inst_14704)
{var statearr_14740_14767 = state_14734__$1;(statearr_14740_14767[(1)] = (5));
} else
{var statearr_14741_14768 = state_14734__$1;(statearr_14741_14768[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14735 === (15)))
{var inst_14724 = (state_14734[(2)]);var state_14734__$1 = state_14734;var statearr_14742_14769 = state_14734__$1;(statearr_14742_14769[(2)] = inst_14724);
(statearr_14742_14769[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14735 === (13)))
{var state_14734__$1 = state_14734;var statearr_14743_14770 = state_14734__$1;(statearr_14743_14770[(2)] = null);
(statearr_14743_14770[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14735 === (6)))
{var inst_14699 = (state_14734[(7)]);var inst_14720 = (inst_14699 > (0));var state_14734__$1 = state_14734;if(cljs.core.truth_(inst_14720))
{var statearr_14744_14771 = state_14734__$1;(statearr_14744_14771[(1)] = (12));
} else
{var statearr_14745_14772 = state_14734__$1;(statearr_14745_14772[(1)] = (13));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14735 === (3)))
{var inst_14732 = (state_14734[(2)]);var state_14734__$1 = state_14734;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14734__$1,inst_14732);
} else
{if((state_val_14735 === (12)))
{var inst_14698 = (state_14734[(8)]);var inst_14722 = cljs.core.vec.call(null,inst_14698);var state_14734__$1 = state_14734;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14734__$1,(15),out,inst_14722);
} else
{if((state_val_14735 === (2)))
{var state_14734__$1 = state_14734;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14734__$1,(4),ch);
} else
{if((state_val_14735 === (11)))
{var inst_14714 = (state_14734[(2)]);var inst_14715 = (new Array(n));var inst_14698 = inst_14715;var inst_14699 = (0);var state_14734__$1 = (function (){var statearr_14746 = state_14734;(statearr_14746[(7)] = inst_14699);
(statearr_14746[(10)] = inst_14714);
(statearr_14746[(8)] = inst_14698);
return statearr_14746;
})();var statearr_14747_14773 = state_14734__$1;(statearr_14747_14773[(2)] = null);
(statearr_14747_14773[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14735 === (9)))
{var inst_14698 = (state_14734[(8)]);var inst_14712 = cljs.core.vec.call(null,inst_14698);var state_14734__$1 = state_14734;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14734__$1,(11),out,inst_14712);
} else
{if((state_val_14735 === (5)))
{var inst_14707 = (state_14734[(11)]);var inst_14699 = (state_14734[(7)]);var inst_14702 = (state_14734[(9)]);var inst_14698 = (state_14734[(8)]);var inst_14706 = (inst_14698[inst_14699] = inst_14702);var inst_14707__$1 = (inst_14699 + (1));var inst_14708 = (inst_14707__$1 < n);var state_14734__$1 = (function (){var statearr_14748 = state_14734;(statearr_14748[(11)] = inst_14707__$1);
(statearr_14748[(12)] = inst_14706);
return statearr_14748;
})();if(cljs.core.truth_(inst_14708))
{var statearr_14749_14774 = state_14734__$1;(statearr_14749_14774[(1)] = (8));
} else
{var statearr_14750_14775 = state_14734__$1;(statearr_14750_14775[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14735 === (14)))
{var inst_14727 = (state_14734[(2)]);var inst_14728 = cljs.core.async.close_BANG_.call(null,out);var state_14734__$1 = (function (){var statearr_14752 = state_14734;(statearr_14752[(13)] = inst_14727);
return statearr_14752;
})();var statearr_14753_14776 = state_14734__$1;(statearr_14753_14776[(2)] = inst_14728);
(statearr_14753_14776[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14735 === (10)))
{var inst_14718 = (state_14734[(2)]);var state_14734__$1 = state_14734;var statearr_14754_14777 = state_14734__$1;(statearr_14754_14777[(2)] = inst_14718);
(statearr_14754_14777[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14735 === (8)))
{var inst_14707 = (state_14734[(11)]);var inst_14698 = (state_14734[(8)]);var tmp14751 = inst_14698;var inst_14698__$1 = tmp14751;var inst_14699 = inst_14707;var state_14734__$1 = (function (){var statearr_14755 = state_14734;(statearr_14755[(7)] = inst_14699);
(statearr_14755[(8)] = inst_14698__$1);
return statearr_14755;
})();var statearr_14756_14778 = state_14734__$1;(statearr_14756_14778[(2)] = null);
(statearr_14756_14778[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__5823__auto___14764,out))
;return ((function (switch__5808__auto__,c__5823__auto___14764,out){
return (function() {
var state_machine__5809__auto__ = null;
var state_machine__5809__auto____0 = (function (){var statearr_14760 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_14760[(0)] = state_machine__5809__auto__);
(statearr_14760[(1)] = (1));
return statearr_14760;
});
var state_machine__5809__auto____1 = (function (state_14734){while(true){
var ret_value__5810__auto__ = (function (){try{while(true){
var result__5811__auto__ = switch__5808__auto__.call(null,state_14734);if(cljs.core.keyword_identical_QMARK_.call(null,result__5811__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5811__auto__;
}
break;
}
}catch (e14761){if((e14761 instanceof Object))
{var ex__5812__auto__ = e14761;var statearr_14762_14779 = state_14734;(statearr_14762_14779[(5)] = ex__5812__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14734);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e14761;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5810__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__14780 = state_14734;
state_14734 = G__14780;
continue;
}
} else
{return ret_value__5810__auto__;
}
break;
}
});
state_machine__5809__auto__ = function(state_14734){
switch(arguments.length){
case 0:
return state_machine__5809__auto____0.call(this);
case 1:
return state_machine__5809__auto____1.call(this,state_14734);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5809__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5809__auto____0;
state_machine__5809__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5809__auto____1;
return state_machine__5809__auto__;
})()
;})(switch__5808__auto__,c__5823__auto___14764,out))
})();var state__5825__auto__ = (function (){var statearr_14763 = f__5824__auto__.call(null);(statearr_14763[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5823__auto___14764);
return statearr_14763;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5825__auto__);
});})(c__5823__auto___14764,out))
);
return out;
});
partition = function(n,ch,buf_or_n){
switch(arguments.length){
case 2:
return partition__2.call(this,n,ch);
case 3:
return partition__3.call(this,n,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
partition.cljs$core$IFn$_invoke$arity$2 = partition__2;
partition.cljs$core$IFn$_invoke$arity$3 = partition__3;
return partition;
})()
;
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.partition_by = (function() {
var partition_by = null;
var partition_by__2 = (function (f,ch){return partition_by.call(null,f,ch,null);
});
var partition_by__3 = (function (f,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5823__auto___14923 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5823__auto___14923,out){
return (function (){var f__5824__auto__ = (function (){var switch__5808__auto__ = ((function (c__5823__auto___14923,out){
return (function (state_14893){var state_val_14894 = (state_14893[(1)]);if((state_val_14894 === (7)))
{var inst_14889 = (state_14893[(2)]);var state_14893__$1 = state_14893;var statearr_14895_14924 = state_14893__$1;(statearr_14895_14924[(2)] = inst_14889);
(statearr_14895_14924[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14894 === (1)))
{var inst_14852 = [];var inst_14853 = inst_14852;var inst_14854 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);var state_14893__$1 = (function (){var statearr_14896 = state_14893;(statearr_14896[(7)] = inst_14853);
(statearr_14896[(8)] = inst_14854);
return statearr_14896;
})();var statearr_14897_14925 = state_14893__$1;(statearr_14897_14925[(2)] = null);
(statearr_14897_14925[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14894 === (4)))
{var inst_14857 = (state_14893[(9)]);var inst_14857__$1 = (state_14893[(2)]);var inst_14858 = (inst_14857__$1 == null);var inst_14859 = cljs.core.not.call(null,inst_14858);var state_14893__$1 = (function (){var statearr_14898 = state_14893;(statearr_14898[(9)] = inst_14857__$1);
return statearr_14898;
})();if(inst_14859)
{var statearr_14899_14926 = state_14893__$1;(statearr_14899_14926[(1)] = (5));
} else
{var statearr_14900_14927 = state_14893__$1;(statearr_14900_14927[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14894 === (15)))
{var inst_14883 = (state_14893[(2)]);var state_14893__$1 = state_14893;var statearr_14901_14928 = state_14893__$1;(statearr_14901_14928[(2)] = inst_14883);
(statearr_14901_14928[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14894 === (13)))
{var state_14893__$1 = state_14893;var statearr_14902_14929 = state_14893__$1;(statearr_14902_14929[(2)] = null);
(statearr_14902_14929[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14894 === (6)))
{var inst_14853 = (state_14893[(7)]);var inst_14878 = inst_14853.length;var inst_14879 = (inst_14878 > (0));var state_14893__$1 = state_14893;if(cljs.core.truth_(inst_14879))
{var statearr_14903_14930 = state_14893__$1;(statearr_14903_14930[(1)] = (12));
} else
{var statearr_14904_14931 = state_14893__$1;(statearr_14904_14931[(1)] = (13));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14894 === (3)))
{var inst_14891 = (state_14893[(2)]);var state_14893__$1 = state_14893;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14893__$1,inst_14891);
} else
{if((state_val_14894 === (12)))
{var inst_14853 = (state_14893[(7)]);var inst_14881 = cljs.core.vec.call(null,inst_14853);var state_14893__$1 = state_14893;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14893__$1,(15),out,inst_14881);
} else
{if((state_val_14894 === (2)))
{var state_14893__$1 = state_14893;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14893__$1,(4),ch);
} else
{if((state_val_14894 === (11)))
{var inst_14857 = (state_14893[(9)]);var inst_14861 = (state_14893[(10)]);var inst_14871 = (state_14893[(2)]);var inst_14872 = [];var inst_14873 = inst_14872.push(inst_14857);var inst_14853 = inst_14872;var inst_14854 = inst_14861;var state_14893__$1 = (function (){var statearr_14905 = state_14893;(statearr_14905[(7)] = inst_14853);
(statearr_14905[(8)] = inst_14854);
(statearr_14905[(11)] = inst_14873);
(statearr_14905[(12)] = inst_14871);
return statearr_14905;
})();var statearr_14906_14932 = state_14893__$1;(statearr_14906_14932[(2)] = null);
(statearr_14906_14932[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14894 === (9)))
{var inst_14853 = (state_14893[(7)]);var inst_14869 = cljs.core.vec.call(null,inst_14853);var state_14893__$1 = state_14893;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14893__$1,(11),out,inst_14869);
} else
{if((state_val_14894 === (5)))
{var inst_14857 = (state_14893[(9)]);var inst_14861 = (state_14893[(10)]);var inst_14854 = (state_14893[(8)]);var inst_14861__$1 = f.call(null,inst_14857);var inst_14862 = cljs.core._EQ_.call(null,inst_14861__$1,inst_14854);var inst_14863 = cljs.core.keyword_identical_QMARK_.call(null,inst_14854,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));var inst_14864 = (inst_14862) || (inst_14863);var state_14893__$1 = (function (){var statearr_14907 = state_14893;(statearr_14907[(10)] = inst_14861__$1);
return statearr_14907;
})();if(cljs.core.truth_(inst_14864))
{var statearr_14908_14933 = state_14893__$1;(statearr_14908_14933[(1)] = (8));
} else
{var statearr_14909_14934 = state_14893__$1;(statearr_14909_14934[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14894 === (14)))
{var inst_14886 = (state_14893[(2)]);var inst_14887 = cljs.core.async.close_BANG_.call(null,out);var state_14893__$1 = (function (){var statearr_14911 = state_14893;(statearr_14911[(13)] = inst_14886);
return statearr_14911;
})();var statearr_14912_14935 = state_14893__$1;(statearr_14912_14935[(2)] = inst_14887);
(statearr_14912_14935[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14894 === (10)))
{var inst_14876 = (state_14893[(2)]);var state_14893__$1 = state_14893;var statearr_14913_14936 = state_14893__$1;(statearr_14913_14936[(2)] = inst_14876);
(statearr_14913_14936[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14894 === (8)))
{var inst_14857 = (state_14893[(9)]);var inst_14853 = (state_14893[(7)]);var inst_14861 = (state_14893[(10)]);var inst_14866 = inst_14853.push(inst_14857);var tmp14910 = inst_14853;var inst_14853__$1 = tmp14910;var inst_14854 = inst_14861;var state_14893__$1 = (function (){var statearr_14914 = state_14893;(statearr_14914[(14)] = inst_14866);
(statearr_14914[(7)] = inst_14853__$1);
(statearr_14914[(8)] = inst_14854);
return statearr_14914;
})();var statearr_14915_14937 = state_14893__$1;(statearr_14915_14937[(2)] = null);
(statearr_14915_14937[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__5823__auto___14923,out))
;return ((function (switch__5808__auto__,c__5823__auto___14923,out){
return (function() {
var state_machine__5809__auto__ = null;
var state_machine__5809__auto____0 = (function (){var statearr_14919 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_14919[(0)] = state_machine__5809__auto__);
(statearr_14919[(1)] = (1));
return statearr_14919;
});
var state_machine__5809__auto____1 = (function (state_14893){while(true){
var ret_value__5810__auto__ = (function (){try{while(true){
var result__5811__auto__ = switch__5808__auto__.call(null,state_14893);if(cljs.core.keyword_identical_QMARK_.call(null,result__5811__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5811__auto__;
}
break;
}
}catch (e14920){if((e14920 instanceof Object))
{var ex__5812__auto__ = e14920;var statearr_14921_14938 = state_14893;(statearr_14921_14938[(5)] = ex__5812__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14893);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e14920;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5810__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__14939 = state_14893;
state_14893 = G__14939;
continue;
}
} else
{return ret_value__5810__auto__;
}
break;
}
});
state_machine__5809__auto__ = function(state_14893){
switch(arguments.length){
case 0:
return state_machine__5809__auto____0.call(this);
case 1:
return state_machine__5809__auto____1.call(this,state_14893);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5809__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5809__auto____0;
state_machine__5809__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5809__auto____1;
return state_machine__5809__auto__;
})()
;})(switch__5808__auto__,c__5823__auto___14923,out))
})();var state__5825__auto__ = (function (){var statearr_14922 = f__5824__auto__.call(null);(statearr_14922[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5823__auto___14923);
return statearr_14922;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5825__auto__);
});})(c__5823__auto___14923,out))
);
return out;
});
partition_by = function(f,ch,buf_or_n){
switch(arguments.length){
case 2:
return partition_by__2.call(this,f,ch);
case 3:
return partition_by__3.call(this,f,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
partition_by.cljs$core$IFn$_invoke$arity$2 = partition_by__2;
partition_by.cljs$core$IFn$_invoke$arity$3 = partition_by__3;
return partition_by;
})()
;

//# sourceMappingURL=async.js.map