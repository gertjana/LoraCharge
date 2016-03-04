// Compiled by ClojureScript 0.0-2371
goog.provide('loracharge.core');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('ajax.core');
goog.require('goog.events');
goog.require('goog.events');
goog.require('clojure.string');
goog.require('clojure.string');
goog.require('reagent.core');
goog.require('reagent.core');
goog.require('ajax.core');
cljs.core.enable_console_print_BANG_.call(null);
if(typeof loracharge.core.session_state !== 'undefined')
{} else
{loracharge.core.session_state = reagent.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
}
loracharge.core.get_all_sessions = (function get_all_sessions(){return ajax.core.GET.call(null,"/sessions",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"handler","handler",-195596612),(function (value){return cljs.core.reset_BANG_.call(null,loracharge.core.session_state,value);
})], null));
});
loracharge.core.header = (function header(){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3","h3",2067611163),"Lora Sessions"], null);
});
loracharge.core.session_row = (function session_row(s){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,cljs.core.vals.call(null,s))))], null),(function (){var iter__4379__auto__ = (function iter__5560(s__5561){return (new cljs.core.LazySeq(null,(function (){var s__5561__$1 = s__5561;while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__5561__$1);if(temp__4425__auto__)
{var s__5561__$2 = temp__4425__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__5561__$2))
{var c__4377__auto__ = cljs.core.chunk_first.call(null,s__5561__$2);var size__4378__auto__ = cljs.core.count.call(null,c__4377__auto__);var b__5563 = cljs.core.chunk_buffer.call(null,size__4378__auto__);if((function (){var i__5562 = (0);while(true){
if((i__5562 < size__4378__auto__))
{var v = cljs.core._nth.call(null,c__4377__auto__,i__5562);cljs.core.chunk_append.call(null,b__5563,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),v], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(s)+cljs.core.str.cljs$core$IFn$_invoke$arity$1(v))], null)));
{
var G__5564 = (i__5562 + (1));
i__5562 = G__5564;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__5563),iter__5560.call(null,cljs.core.chunk_rest.call(null,s__5561__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__5563),null);
}
} else
{var v = cljs.core.first.call(null,s__5561__$2);return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),v], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(s)+cljs.core.str.cljs$core$IFn$_invoke$arity$1(v))], null)),iter__5560.call(null,cljs.core.rest.call(null,s__5561__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4379__auto__.call(null,cljs.core.vals.call(null,s));
})()], null);
});
loracharge.core.sessions = (function sessions(){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"table","table",-564943036),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tbody","tbody",-80678300),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),(function (){var iter__4379__auto__ = (function iter__5573(s__5574){return (new cljs.core.LazySeq(null,(function (){var s__5574__$1 = s__5574;while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__5574__$1);if(temp__4425__auto__)
{var s__5574__$2 = temp__4425__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__5574__$2))
{var c__4377__auto__ = cljs.core.chunk_first.call(null,s__5574__$2);var size__4378__auto__ = cljs.core.count.call(null,c__4377__auto__);var b__5576 = cljs.core.chunk_buffer.call(null,size__4378__auto__);if((function (){var i__5575 = (0);while(true){
if((i__5575 < size__4378__auto__))
{var h = cljs.core._nth.call(null,c__4377__auto__,i__5575);cljs.core.chunk_append.call(null,b__5576,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),clojure.string.capitalize.call(null,h)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),h], null)));
{
var G__5581 = (i__5575 + (1));
i__5575 = G__5581;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__5576),iter__5573.call(null,cljs.core.chunk_rest.call(null,s__5574__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__5576),null);
}
} else
{var h = cljs.core.first.call(null,s__5574__$2);return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),clojure.string.capitalize.call(null,h)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),h], null)),iter__5573.call(null,cljs.core.rest.call(null,s__5574__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4379__auto__.call(null,cljs.core.keys.call(null,cljs.core.first.call(null,cljs.core.deref.call(null,loracharge.core.session_state))));
})()], null),(function (){var iter__4379__auto__ = (function iter__5577(s__5578){return (new cljs.core.LazySeq(null,(function (){var s__5578__$1 = s__5578;while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__5578__$1);if(temp__4425__auto__)
{var s__5578__$2 = temp__4425__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__5578__$2))
{var c__4377__auto__ = cljs.core.chunk_first.call(null,s__5578__$2);var size__4378__auto__ = cljs.core.count.call(null,c__4377__auto__);var b__5580 = cljs.core.chunk_buffer.call(null,size__4378__auto__);if((function (){var i__5579 = (0);while(true){
if((i__5579 < size__4378__auto__))
{var s = cljs.core._nth.call(null,c__4377__auto__,i__5579);cljs.core.chunk_append.call(null,b__5580,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [loracharge.core.session_row,s], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),s], null)));
{
var G__5582 = (i__5579 + (1));
i__5579 = G__5582;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__5580),iter__5577.call(null,cljs.core.chunk_rest.call(null,s__5578__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__5580),null);
}
} else
{var s = cljs.core.first.call(null,s__5578__$2);return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [loracharge.core.session_row,s], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),s], null)),iter__5577.call(null,cljs.core.rest.call(null,s__5578__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4379__auto__.call(null,cljs.core.deref.call(null,loracharge.core.session_state));
})()], null)], null);
});
loracharge.core.main = (function main(){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [loracharge.core.header], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [loracharge.core.sessions], null)], null);
});
loracharge.core.run = (function run(){loracharge.core.get_all_sessions.call(null);
return reagent.core.render.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [loracharge.core.main], null),document.getElementById("app"));
});
goog.exportSymbol('loracharge.core.run', loracharge.core.run);

//# sourceMappingURL=core.js.map