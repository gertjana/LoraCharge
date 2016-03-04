// Compiled by ClojureScript 0.0-2371
goog.provide('reagent.impl.batching');
goog.require('cljs.core');
goog.require('reagent.impl.util');
goog.require('reagent.debug');
goog.require('reagent.interop');
goog.require('reagent.impl.util');
goog.require('clojure.string');
goog.require('clojure.string');
if(typeof reagent.impl.batching.mount_count !== 'undefined')
{} else
{reagent.impl.batching.mount_count = (0);
}
reagent.impl.batching.next_mount_count = (function next_mount_count(){return reagent.impl.batching.mount_count = (reagent.impl.batching.mount_count + (1));
});
reagent.impl.batching.fake_raf = (function fake_raf(f){return setTimeout(f,(16));
});
reagent.impl.batching.next_tick = ((cljs.core.not.call(null,reagent.impl.util.is_client))?reagent.impl.batching.fake_raf:(function (){var w = window;var or__3640__auto__ = (w["requestAnimationFrame"]);if(cljs.core.truth_(or__3640__auto__))
{return or__3640__auto__;
} else
{var or__3640__auto____$1 = (w["webkitRequestAnimationFrame"]);if(cljs.core.truth_(or__3640__auto____$1))
{return or__3640__auto____$1;
} else
{var or__3640__auto____$2 = (w["mozRequestAnimationFrame"]);if(cljs.core.truth_(or__3640__auto____$2))
{return or__3640__auto____$2;
} else
{var or__3640__auto____$3 = (w["msRequestAnimationFrame"]);if(cljs.core.truth_(or__3640__auto____$3))
{return or__3640__auto____$3;
} else
{return reagent.impl.batching.fake_raf;
}
}
}
}
})());
reagent.impl.batching.compare_mount_order = (function compare_mount_order(c1,c2){return ((c1["cljsMountOrder"]) - (c2["cljsMountOrder"]));
});
reagent.impl.batching.run_queue = (function run_queue(a){a.sort(reagent.impl.batching.compare_mount_order);
var n__4510__auto__ = a.length;var i = (0);while(true){
if((i < n__4510__auto__))
{var c_5503 = (a[i]);if((c_5503["cljsIsDirty"]) === true)
{(c_5503["forceUpdate"])();
} else
{}
{
var G__5504 = (i + (1));
i = G__5504;
continue;
}
} else
{return null;
}
break;
}
});
if(typeof reagent.impl.batching.ratom_flush !== 'undefined')
{} else
{reagent.impl.batching.ratom_flush = cljs.core.identity;
}

/**
* @constructor
*/
reagent.impl.batching.RenderQueue = (function (scheduled_QMARK_){
this.scheduled_QMARK_ = scheduled_QMARK_;
})
reagent.impl.batching.RenderQueue.cljs$lang$type = true;
reagent.impl.batching.RenderQueue.cljs$lang$ctorStr = "reagent.impl.batching/RenderQueue";
reagent.impl.batching.RenderQueue.cljs$lang$ctorPrWriter = (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){return cljs.core._write.call(null,writer__4218__auto__,"reagent.impl.batching/RenderQueue");
});
reagent.impl.batching.RenderQueue.prototype.enqueue = (function (k,f){var self__ = this;
var this$ = this;if(cljs.core.some_QMARK_.call(null,f))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"some?","some?",234752293,null),new cljs.core.Symbol(null,"f","f",43394975,null)))))));
}
if(((this$[k]) == null))
{(this$[k] = []);
} else
{}
(this$[k]).push(f);
return this$.schedule();
});
reagent.impl.batching.RenderQueue.prototype.run_funs = (function (k){var self__ = this;
var this$ = this;var temp__4429__auto__ = (this$[k]);if((temp__4429__auto__ == null))
{return null;
} else
{var fs = temp__4429__auto__;(this$[k] = null);
var n__4510__auto__ = fs.length;var i = (0);while(true){
if((i < n__4510__auto__))
{(fs[i]).call(null);
{
var G__5505 = (i + (1));
i = G__5505;
continue;
}
} else
{return null;
}
break;
}
}
});
reagent.impl.batching.RenderQueue.prototype.schedule = (function (){var self__ = this;
var this$ = this;if(self__.scheduled_QMARK_)
{return null;
} else
{self__.scheduled_QMARK_ = true;
return reagent.impl.batching.next_tick.call(null,((function (this$){
return (function (){return this$.run_queues();
});})(this$))
);
}
});
reagent.impl.batching.RenderQueue.prototype.queue_render = (function (c){var self__ = this;
var this$ = this;return this$.enqueue("componentQueue",c);
});
reagent.impl.batching.RenderQueue.prototype.add_before_flush = (function (f){var self__ = this;
var this$ = this;return this$.enqueue("beforeFlush",f);
});
reagent.impl.batching.RenderQueue.prototype.add_after_render = (function (f){var self__ = this;
var this$ = this;return this$.enqueue("afterRender",f);
});
reagent.impl.batching.RenderQueue.prototype.run_queues = (function (){var self__ = this;
var this$ = this;self__.scheduled_QMARK_ = false;
return this$.flush_queues();
});
reagent.impl.batching.RenderQueue.prototype.flush_queues = (function (){var self__ = this;
var this$ = this;this$.run_funs("beforeFlush");
reagent.impl.batching.ratom_flush.call(null);
var temp__4429__auto___5506 = (this$["componentQueue"]);if((temp__4429__auto___5506 == null))
{} else
{var cs_5507 = temp__4429__auto___5506;(this$["componentQueue"] = null);
reagent.impl.batching.run_queue.call(null,cs_5507);
}
return this$.run_funs("afterRender");
});
reagent.impl.batching.__GT_RenderQueue = (function __GT_RenderQueue(scheduled_QMARK_){return (new reagent.impl.batching.RenderQueue(scheduled_QMARK_));
});
if(typeof reagent.impl.batching.render_queue !== 'undefined')
{} else
{reagent.impl.batching.render_queue = (new reagent.impl.batching.RenderQueue(false));
}
reagent.impl.batching.flush = (function flush(){return reagent.impl.batching.render_queue.flush_queues();
});
reagent.impl.batching.queue_render = (function queue_render(c){(c["cljsIsDirty"] = true);
return reagent.impl.batching.render_queue.queue_render(c);
});
reagent.impl.batching.mark_rendered = (function mark_rendered(c){return (c["cljsIsDirty"] = false);
});
reagent.impl.batching.do_before_flush = (function do_before_flush(f){return reagent.impl.batching.render_queue.add_before_flush(f);
});
reagent.impl.batching.do_after_render = (function do_after_render(f){return reagent.impl.batching.render_queue.add_after_render(f);
});
reagent.impl.batching.schedule = (function schedule(){if(reagent.impl.batching.render_queue.scheduled_QMARK_ === false)
{return reagent.impl.batching.render_queue.schedule();
} else
{return null;
}
});

//# sourceMappingURL=batching.js.map