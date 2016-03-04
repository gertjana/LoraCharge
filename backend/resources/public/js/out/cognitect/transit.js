// Compiled by ClojureScript 0.0-2371
goog.provide('cognitect.transit');
goog.require('cljs.core');
goog.require('com.cognitect.transit');
goog.require('com.cognitect.transit');
goog.require('com.cognitect.transit.types');
goog.require('com.cognitect.transit.types');
goog.require('com.cognitect.transit.eq');
goog.require('com.cognitect.transit.eq');
goog.require('goog.math.Long');
cljs.core.UUID.prototype.cljs$core$IEquiv$ = true;
cljs.core.UUID.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){var this$__$1 = this;if((other instanceof cljs.core.UUID))
{return (this$__$1.uuid === other.uuid);
} else
{if((other instanceof com.cognitect.transit.types.UUID))
{return (this$__$1.uuid === other.toString());
} else
{return false;

}
}
});
goog.math.Long.prototype.cljs$core$IEquiv$ = true;
goog.math.Long.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){var this$__$1 = this;return this$__$1.equiv(other);
});
com.cognitect.transit.types.UUID.prototype.cljs$core$IEquiv$ = true;
com.cognitect.transit.types.UUID.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){var this$__$1 = this;if((other instanceof cljs.core.UUID))
{return cljs.core._equiv.call(null,other,this$__$1);
} else
{return this$__$1.equiv(other);
}
});
com.cognitect.transit.types.TaggedValue.prototype.cljs$core$IEquiv$ = true;
com.cognitect.transit.types.TaggedValue.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){var this$__$1 = this;return this$__$1.equiv(other);
});
goog.math.Long.prototype.cljs$core$IHash$ = true;
goog.math.Long.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){var this$__$1 = this;return com.cognitect.transit.eq.hashCode.call(null,this$__$1);
});
com.cognitect.transit.types.UUID.prototype.cljs$core$IHash$ = true;
com.cognitect.transit.types.UUID.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){var this$__$1 = this;return com.cognitect.transit.eq.hashCode.call(null,this$__$1);
});
com.cognitect.transit.types.TaggedValue.prototype.cljs$core$IHash$ = true;
com.cognitect.transit.types.TaggedValue.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){var this$__$1 = this;return com.cognitect.transit.eq.hashCode.call(null,this$__$1);
});
cognitect.transit.opts_merge = (function opts_merge(a,b){var seq__11558_11562 = cljs.core.seq.call(null,cljs.core.js_keys.call(null,b));var chunk__11559_11563 = null;var count__11560_11564 = (0);var i__11561_11565 = (0);while(true){
if((i__11561_11565 < count__11560_11564))
{var k_11566 = cljs.core._nth.call(null,chunk__11559_11563,i__11561_11565);var v_11567 = (b[k_11566]);(a[k_11566] = v_11567);
{
var G__11568 = seq__11558_11562;
var G__11569 = chunk__11559_11563;
var G__11570 = count__11560_11564;
var G__11571 = (i__11561_11565 + (1));
seq__11558_11562 = G__11568;
chunk__11559_11563 = G__11569;
count__11560_11564 = G__11570;
i__11561_11565 = G__11571;
continue;
}
} else
{var temp__4425__auto___11572 = cljs.core.seq.call(null,seq__11558_11562);if(temp__4425__auto___11572)
{var seq__11558_11573__$1 = temp__4425__auto___11572;if(cljs.core.chunked_seq_QMARK_.call(null,seq__11558_11573__$1))
{var c__4410__auto___11574 = cljs.core.chunk_first.call(null,seq__11558_11573__$1);{
var G__11575 = cljs.core.chunk_rest.call(null,seq__11558_11573__$1);
var G__11576 = c__4410__auto___11574;
var G__11577 = cljs.core.count.call(null,c__4410__auto___11574);
var G__11578 = (0);
seq__11558_11562 = G__11575;
chunk__11559_11563 = G__11576;
count__11560_11564 = G__11577;
i__11561_11565 = G__11578;
continue;
}
} else
{var k_11579 = cljs.core.first.call(null,seq__11558_11573__$1);var v_11580 = (b[k_11579]);(a[k_11579] = v_11580);
{
var G__11581 = cljs.core.next.call(null,seq__11558_11573__$1);
var G__11582 = null;
var G__11583 = (0);
var G__11584 = (0);
seq__11558_11562 = G__11581;
chunk__11559_11563 = G__11582;
count__11560_11564 = G__11583;
i__11561_11565 = G__11584;
continue;
}
}
} else
{}
}
break;
}
return a;
});

/**
* @constructor
*/
cognitect.transit.MapBuilder = (function (){
})
cognitect.transit.MapBuilder.cljs$lang$type = true;
cognitect.transit.MapBuilder.cljs$lang$ctorStr = "cognitect.transit/MapBuilder";
cognitect.transit.MapBuilder.cljs$lang$ctorPrWriter = (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){return cljs.core._write.call(null,writer__4218__auto__,"cognitect.transit/MapBuilder");
});
cognitect.transit.MapBuilder.prototype.init = (function (node){var self__ = this;
var _ = this;return cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY);
});
cognitect.transit.MapBuilder.prototype.add = (function (m,k,v,node){var self__ = this;
var _ = this;return cljs.core.assoc_BANG_.call(null,m,k,v);
});
cognitect.transit.MapBuilder.prototype.finalize = (function (m,node){var self__ = this;
var _ = this;return cljs.core.persistent_BANG_.call(null,m);
});
cognitect.transit.MapBuilder.prototype.fromArray = (function (arr,node){var self__ = this;
var _ = this;return cljs.core.PersistentArrayMap.fromArray.call(null,arr,true,true);
});
cognitect.transit.__GT_MapBuilder = (function __GT_MapBuilder(){return (new cognitect.transit.MapBuilder());
});

/**
* @constructor
*/
cognitect.transit.VectorBuilder = (function (){
})
cognitect.transit.VectorBuilder.cljs$lang$type = true;
cognitect.transit.VectorBuilder.cljs$lang$ctorStr = "cognitect.transit/VectorBuilder";
cognitect.transit.VectorBuilder.cljs$lang$ctorPrWriter = (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){return cljs.core._write.call(null,writer__4218__auto__,"cognitect.transit/VectorBuilder");
});
cognitect.transit.VectorBuilder.prototype.init = (function (node){var self__ = this;
var _ = this;return cljs.core.transient$.call(null,cljs.core.PersistentVector.EMPTY);
});
cognitect.transit.VectorBuilder.prototype.add = (function (v,x,node){var self__ = this;
var _ = this;return cljs.core.conj_BANG_.call(null,v,x);
});
cognitect.transit.VectorBuilder.prototype.finalize = (function (v,node){var self__ = this;
var _ = this;return cljs.core.persistent_BANG_.call(null,v);
});
cognitect.transit.VectorBuilder.prototype.fromArray = (function (arr,node){var self__ = this;
var _ = this;return cljs.core.PersistentVector.fromArray.call(null,arr,true);
});
cognitect.transit.__GT_VectorBuilder = (function __GT_VectorBuilder(){return (new cognitect.transit.VectorBuilder());
});
/**
* Return a transit reader. type may be either :json or :json-verbose.
* opts may be a map optionally containing a :handlers entry. The value
* of :handlers should be map from tag to a decoder function which returns
* then in-memory representation of the semantic transit value.
*/
cognitect.transit.reader = (function() {
var reader = null;
var reader__1 = (function (type){return reader.call(null,type,null);
});
var reader__2 = (function (type,opts){return com.cognitect.transit.reader.call(null,cljs.core.name.call(null,type),cognitect.transit.opts_merge.call(null,{"handlers": cljs.core.clj__GT_js.call(null,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 5, ["$",(function (v){return cljs.core.symbol.call(null,v);
}),":",(function (v){return cljs.core.keyword.call(null,v);
}),"set",(function (v){return cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,v);
}),"list",(function (v){return cljs.core.into.call(null,cljs.core.List.EMPTY,v.reverse());
}),"cmap",(function (v){var i = (0);var ret = cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY);while(true){
if((i < v.length))
{{
var G__11585 = (i + (2));
var G__11586 = cljs.core.assoc_BANG_.call(null,ret,(v[i]),(v[(i + (1))]));
i = G__11585;
ret = G__11586;
continue;
}
} else
{return cljs.core.persistent_BANG_.call(null,ret);
}
break;
}
})], null),new cljs.core.Keyword(null,"handlers","handlers",79528781).cljs$core$IFn$_invoke$arity$1(opts))), "mapBuilder": (new cognitect.transit.MapBuilder()), "arrayBuilder": (new cognitect.transit.VectorBuilder()), "prefersStrings": false},cljs.core.clj__GT_js.call(null,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"handlers","handlers",79528781)))));
});
reader = function(type,opts){
switch(arguments.length){
case 1:
return reader__1.call(this,type);
case 2:
return reader__2.call(this,type,opts);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
reader.cljs$core$IFn$_invoke$arity$1 = reader__1;
reader.cljs$core$IFn$_invoke$arity$2 = reader__2;
return reader;
})()
;
/**
* Read a transit encoded string into ClojureScript values given a
* transit reader.
*/
cognitect.transit.read = (function read(r,str){return r.read(str);
});

/**
* @constructor
*/
cognitect.transit.KeywordHandler = (function (){
})
cognitect.transit.KeywordHandler.cljs$lang$type = true;
cognitect.transit.KeywordHandler.cljs$lang$ctorStr = "cognitect.transit/KeywordHandler";
cognitect.transit.KeywordHandler.cljs$lang$ctorPrWriter = (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){return cljs.core._write.call(null,writer__4218__auto__,"cognitect.transit/KeywordHandler");
});
cognitect.transit.KeywordHandler.prototype.tag = (function (v){var self__ = this;
var _ = this;return ":";
});
cognitect.transit.KeywordHandler.prototype.rep = (function (v){var self__ = this;
var _ = this;return v.fqn;
});
cognitect.transit.KeywordHandler.prototype.stringRep = (function (v){var self__ = this;
var _ = this;return v.fqn;
});
cognitect.transit.__GT_KeywordHandler = (function __GT_KeywordHandler(){return (new cognitect.transit.KeywordHandler());
});

/**
* @constructor
*/
cognitect.transit.SymbolHandler = (function (){
})
cognitect.transit.SymbolHandler.cljs$lang$type = true;
cognitect.transit.SymbolHandler.cljs$lang$ctorStr = "cognitect.transit/SymbolHandler";
cognitect.transit.SymbolHandler.cljs$lang$ctorPrWriter = (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){return cljs.core._write.call(null,writer__4218__auto__,"cognitect.transit/SymbolHandler");
});
cognitect.transit.SymbolHandler.prototype.tag = (function (v){var self__ = this;
var _ = this;return "$";
});
cognitect.transit.SymbolHandler.prototype.rep = (function (v){var self__ = this;
var _ = this;return v.str;
});
cognitect.transit.SymbolHandler.prototype.stringRep = (function (v){var self__ = this;
var _ = this;return v.str;
});
cognitect.transit.__GT_SymbolHandler = (function __GT_SymbolHandler(){return (new cognitect.transit.SymbolHandler());
});

/**
* @constructor
*/
cognitect.transit.ListHandler = (function (){
})
cognitect.transit.ListHandler.cljs$lang$type = true;
cognitect.transit.ListHandler.cljs$lang$ctorStr = "cognitect.transit/ListHandler";
cognitect.transit.ListHandler.cljs$lang$ctorPrWriter = (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){return cljs.core._write.call(null,writer__4218__auto__,"cognitect.transit/ListHandler");
});
cognitect.transit.ListHandler.prototype.tag = (function (v){var self__ = this;
var _ = this;return "list";
});
cognitect.transit.ListHandler.prototype.rep = (function (v){var self__ = this;
var _ = this;var ret = [];var seq__11587_11591 = cljs.core.seq.call(null,v);var chunk__11588_11592 = null;var count__11589_11593 = (0);var i__11590_11594 = (0);while(true){
if((i__11590_11594 < count__11589_11593))
{var x_11595 = cljs.core._nth.call(null,chunk__11588_11592,i__11590_11594);ret.push(x_11595);
{
var G__11596 = seq__11587_11591;
var G__11597 = chunk__11588_11592;
var G__11598 = count__11589_11593;
var G__11599 = (i__11590_11594 + (1));
seq__11587_11591 = G__11596;
chunk__11588_11592 = G__11597;
count__11589_11593 = G__11598;
i__11590_11594 = G__11599;
continue;
}
} else
{var temp__4425__auto___11600 = cljs.core.seq.call(null,seq__11587_11591);if(temp__4425__auto___11600)
{var seq__11587_11601__$1 = temp__4425__auto___11600;if(cljs.core.chunked_seq_QMARK_.call(null,seq__11587_11601__$1))
{var c__4410__auto___11602 = cljs.core.chunk_first.call(null,seq__11587_11601__$1);{
var G__11603 = cljs.core.chunk_rest.call(null,seq__11587_11601__$1);
var G__11604 = c__4410__auto___11602;
var G__11605 = cljs.core.count.call(null,c__4410__auto___11602);
var G__11606 = (0);
seq__11587_11591 = G__11603;
chunk__11588_11592 = G__11604;
count__11589_11593 = G__11605;
i__11590_11594 = G__11606;
continue;
}
} else
{var x_11607 = cljs.core.first.call(null,seq__11587_11601__$1);ret.push(x_11607);
{
var G__11608 = cljs.core.next.call(null,seq__11587_11601__$1);
var G__11609 = null;
var G__11610 = (0);
var G__11611 = (0);
seq__11587_11591 = G__11608;
chunk__11588_11592 = G__11609;
count__11589_11593 = G__11610;
i__11590_11594 = G__11611;
continue;
}
}
} else
{}
}
break;
}
return com.cognitect.transit.tagged.call(null,"array",ret);
});
cognitect.transit.ListHandler.prototype.stringRep = (function (v){var self__ = this;
var _ = this;return null;
});
cognitect.transit.__GT_ListHandler = (function __GT_ListHandler(){return (new cognitect.transit.ListHandler());
});

/**
* @constructor
*/
cognitect.transit.MapHandler = (function (){
})
cognitect.transit.MapHandler.cljs$lang$type = true;
cognitect.transit.MapHandler.cljs$lang$ctorStr = "cognitect.transit/MapHandler";
cognitect.transit.MapHandler.cljs$lang$ctorPrWriter = (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){return cljs.core._write.call(null,writer__4218__auto__,"cognitect.transit/MapHandler");
});
cognitect.transit.MapHandler.prototype.tag = (function (v){var self__ = this;
var _ = this;return "map";
});
cognitect.transit.MapHandler.prototype.rep = (function (v){var self__ = this;
var _ = this;return v;
});
cognitect.transit.MapHandler.prototype.stringRep = (function (v){var self__ = this;
var _ = this;return null;
});
cognitect.transit.__GT_MapHandler = (function __GT_MapHandler(){return (new cognitect.transit.MapHandler());
});

/**
* @constructor
*/
cognitect.transit.SetHandler = (function (){
})
cognitect.transit.SetHandler.cljs$lang$type = true;
cognitect.transit.SetHandler.cljs$lang$ctorStr = "cognitect.transit/SetHandler";
cognitect.transit.SetHandler.cljs$lang$ctorPrWriter = (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){return cljs.core._write.call(null,writer__4218__auto__,"cognitect.transit/SetHandler");
});
cognitect.transit.SetHandler.prototype.tag = (function (v){var self__ = this;
var _ = this;return "set";
});
cognitect.transit.SetHandler.prototype.rep = (function (v){var self__ = this;
var _ = this;var ret = [];var seq__11612_11616 = cljs.core.seq.call(null,v);var chunk__11613_11617 = null;var count__11614_11618 = (0);var i__11615_11619 = (0);while(true){
if((i__11615_11619 < count__11614_11618))
{var x_11620 = cljs.core._nth.call(null,chunk__11613_11617,i__11615_11619);ret.push(x_11620);
{
var G__11621 = seq__11612_11616;
var G__11622 = chunk__11613_11617;
var G__11623 = count__11614_11618;
var G__11624 = (i__11615_11619 + (1));
seq__11612_11616 = G__11621;
chunk__11613_11617 = G__11622;
count__11614_11618 = G__11623;
i__11615_11619 = G__11624;
continue;
}
} else
{var temp__4425__auto___11625 = cljs.core.seq.call(null,seq__11612_11616);if(temp__4425__auto___11625)
{var seq__11612_11626__$1 = temp__4425__auto___11625;if(cljs.core.chunked_seq_QMARK_.call(null,seq__11612_11626__$1))
{var c__4410__auto___11627 = cljs.core.chunk_first.call(null,seq__11612_11626__$1);{
var G__11628 = cljs.core.chunk_rest.call(null,seq__11612_11626__$1);
var G__11629 = c__4410__auto___11627;
var G__11630 = cljs.core.count.call(null,c__4410__auto___11627);
var G__11631 = (0);
seq__11612_11616 = G__11628;
chunk__11613_11617 = G__11629;
count__11614_11618 = G__11630;
i__11615_11619 = G__11631;
continue;
}
} else
{var x_11632 = cljs.core.first.call(null,seq__11612_11626__$1);ret.push(x_11632);
{
var G__11633 = cljs.core.next.call(null,seq__11612_11626__$1);
var G__11634 = null;
var G__11635 = (0);
var G__11636 = (0);
seq__11612_11616 = G__11633;
chunk__11613_11617 = G__11634;
count__11614_11618 = G__11635;
i__11615_11619 = G__11636;
continue;
}
}
} else
{}
}
break;
}
return com.cognitect.transit.tagged.call(null,"array",ret);
});
cognitect.transit.SetHandler.prototype.stringRep = (function (){var self__ = this;
var v = this;return null;
});
cognitect.transit.__GT_SetHandler = (function __GT_SetHandler(){return (new cognitect.transit.SetHandler());
});

/**
* @constructor
*/
cognitect.transit.VectorHandler = (function (){
})
cognitect.transit.VectorHandler.cljs$lang$type = true;
cognitect.transit.VectorHandler.cljs$lang$ctorStr = "cognitect.transit/VectorHandler";
cognitect.transit.VectorHandler.cljs$lang$ctorPrWriter = (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){return cljs.core._write.call(null,writer__4218__auto__,"cognitect.transit/VectorHandler");
});
cognitect.transit.VectorHandler.prototype.tag = (function (v){var self__ = this;
var _ = this;return "array";
});
cognitect.transit.VectorHandler.prototype.rep = (function (v){var self__ = this;
var _ = this;var ret = [];var seq__11637_11641 = cljs.core.seq.call(null,v);var chunk__11638_11642 = null;var count__11639_11643 = (0);var i__11640_11644 = (0);while(true){
if((i__11640_11644 < count__11639_11643))
{var x_11645 = cljs.core._nth.call(null,chunk__11638_11642,i__11640_11644);ret.push(x_11645);
{
var G__11646 = seq__11637_11641;
var G__11647 = chunk__11638_11642;
var G__11648 = count__11639_11643;
var G__11649 = (i__11640_11644 + (1));
seq__11637_11641 = G__11646;
chunk__11638_11642 = G__11647;
count__11639_11643 = G__11648;
i__11640_11644 = G__11649;
continue;
}
} else
{var temp__4425__auto___11650 = cljs.core.seq.call(null,seq__11637_11641);if(temp__4425__auto___11650)
{var seq__11637_11651__$1 = temp__4425__auto___11650;if(cljs.core.chunked_seq_QMARK_.call(null,seq__11637_11651__$1))
{var c__4410__auto___11652 = cljs.core.chunk_first.call(null,seq__11637_11651__$1);{
var G__11653 = cljs.core.chunk_rest.call(null,seq__11637_11651__$1);
var G__11654 = c__4410__auto___11652;
var G__11655 = cljs.core.count.call(null,c__4410__auto___11652);
var G__11656 = (0);
seq__11637_11641 = G__11653;
chunk__11638_11642 = G__11654;
count__11639_11643 = G__11655;
i__11640_11644 = G__11656;
continue;
}
} else
{var x_11657 = cljs.core.first.call(null,seq__11637_11651__$1);ret.push(x_11657);
{
var G__11658 = cljs.core.next.call(null,seq__11637_11651__$1);
var G__11659 = null;
var G__11660 = (0);
var G__11661 = (0);
seq__11637_11641 = G__11658;
chunk__11638_11642 = G__11659;
count__11639_11643 = G__11660;
i__11640_11644 = G__11661;
continue;
}
}
} else
{}
}
break;
}
return ret;
});
cognitect.transit.VectorHandler.prototype.stringRep = (function (v){var self__ = this;
var _ = this;return null;
});
cognitect.transit.__GT_VectorHandler = (function __GT_VectorHandler(){return (new cognitect.transit.VectorHandler());
});

/**
* @constructor
*/
cognitect.transit.UUIDHandler = (function (){
})
cognitect.transit.UUIDHandler.cljs$lang$type = true;
cognitect.transit.UUIDHandler.cljs$lang$ctorStr = "cognitect.transit/UUIDHandler";
cognitect.transit.UUIDHandler.cljs$lang$ctorPrWriter = (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){return cljs.core._write.call(null,writer__4218__auto__,"cognitect.transit/UUIDHandler");
});
cognitect.transit.UUIDHandler.prototype.tag = (function (v){var self__ = this;
var _ = this;return "u";
});
cognitect.transit.UUIDHandler.prototype.rep = (function (v){var self__ = this;
var _ = this;return v.uuid;
});
cognitect.transit.UUIDHandler.prototype.stringRep = (function (v){var self__ = this;
var this$ = this;return this$.rep(v);
});
cognitect.transit.__GT_UUIDHandler = (function __GT_UUIDHandler(){return (new cognitect.transit.UUIDHandler());
});
/**
* Return a transit writer. type maybe either :json or :json-verbose.
* opts is a map containing a :handlers entry. :handlers is a JavaScript
* array of interleaved type constructors and handler instances for those
* type constructors.
*/
cognitect.transit.writer = (function() {
var writer = null;
var writer__1 = (function (type){return writer.call(null,type,null);
});
var writer__2 = (function (type,opts){var keyword_handler = (new cognitect.transit.KeywordHandler());var symbol_handler = (new cognitect.transit.SymbolHandler());var list_handler = (new cognitect.transit.ListHandler());var map_handler = (new cognitect.transit.MapHandler());var set_handler = (new cognitect.transit.SetHandler());var vector_handler = (new cognitect.transit.VectorHandler());var uuid_handler = (new cognitect.transit.UUIDHandler());var handlers = cljs.core.merge.call(null,cljs.core.PersistentHashMap.fromArrays([cljs.core.PersistentHashMap,cljs.core.Cons,cljs.core.PersistentArrayMap,cljs.core.NodeSeq,cljs.core.PersistentQueue,cljs.core.IndexedSeq,cljs.core.Keyword,cljs.core.EmptyList,cljs.core.LazySeq,cljs.core.Subvec,cljs.core.PersistentQueueSeq,cljs.core.ArrayNodeSeq,cljs.core.ValSeq,cljs.core.PersistentArrayMapSeq,cljs.core.PersistentVector,cljs.core.List,cljs.core.RSeq,cljs.core.PersistentHashSet,cljs.core.PersistentTreeMap,cljs.core.KeySeq,cljs.core.ChunkedSeq,cljs.core.PersistentTreeSet,cljs.core.ChunkedCons,cljs.core.Symbol,cljs.core.UUID,cljs.core.Range,cljs.core.PersistentTreeMapSeq],[map_handler,list_handler,map_handler,list_handler,list_handler,list_handler,keyword_handler,list_handler,list_handler,vector_handler,list_handler,list_handler,list_handler,list_handler,vector_handler,list_handler,list_handler,set_handler,map_handler,list_handler,list_handler,set_handler,list_handler,symbol_handler,uuid_handler,list_handler,list_handler]),new cljs.core.Keyword(null,"handlers","handlers",79528781).cljs$core$IFn$_invoke$arity$1(opts));return com.cognitect.transit.writer.call(null,cljs.core.name.call(null,type),cognitect.transit.opts_merge.call(null,{"objectBuilder": ((function (keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (m,kfn,vfn){return cljs.core.reduce_kv.call(null,((function (keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (obj,k,v){var G__11670 = obj;G__11670.push(kfn.call(null,k),vfn.call(null,v));
return G__11670;
});})(keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
,["^ "],m);
});})(keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
, "handlers": (function (){var x11671 = cljs.core.clone.call(null,handlers);x11671.forEach = ((function (x11671,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (f){var coll = this;var seq__11672 = cljs.core.seq.call(null,coll);var chunk__11673 = null;var count__11674 = (0);var i__11675 = (0);while(true){
if((i__11675 < count__11674))
{var vec__11676 = cljs.core._nth.call(null,chunk__11673,i__11675);var k = cljs.core.nth.call(null,vec__11676,(0),null);var v = cljs.core.nth.call(null,vec__11676,(1),null);f.call(null,v,k);
{
var G__11678 = seq__11672;
var G__11679 = chunk__11673;
var G__11680 = count__11674;
var G__11681 = (i__11675 + (1));
seq__11672 = G__11678;
chunk__11673 = G__11679;
count__11674 = G__11680;
i__11675 = G__11681;
continue;
}
} else
{var temp__4425__auto__ = cljs.core.seq.call(null,seq__11672);if(temp__4425__auto__)
{var seq__11672__$1 = temp__4425__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__11672__$1))
{var c__4410__auto__ = cljs.core.chunk_first.call(null,seq__11672__$1);{
var G__11682 = cljs.core.chunk_rest.call(null,seq__11672__$1);
var G__11683 = c__4410__auto__;
var G__11684 = cljs.core.count.call(null,c__4410__auto__);
var G__11685 = (0);
seq__11672 = G__11682;
chunk__11673 = G__11683;
count__11674 = G__11684;
i__11675 = G__11685;
continue;
}
} else
{var vec__11677 = cljs.core.first.call(null,seq__11672__$1);var k = cljs.core.nth.call(null,vec__11677,(0),null);var v = cljs.core.nth.call(null,vec__11677,(1),null);f.call(null,v,k);
{
var G__11686 = cljs.core.next.call(null,seq__11672__$1);
var G__11687 = null;
var G__11688 = (0);
var G__11689 = (0);
seq__11672 = G__11686;
chunk__11673 = G__11687;
count__11674 = G__11688;
i__11675 = G__11689;
continue;
}
}
} else
{return null;
}
}
break;
}
});})(x11671,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
;
return x11671;
})(), "unpack": ((function (keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (x){if((x instanceof cljs.core.PersistentArrayMap))
{return x.arr;
} else
{return false;
}
});})(keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
},cljs.core.clj__GT_js.call(null,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"handlers","handlers",79528781)))));
});
writer = function(type,opts){
switch(arguments.length){
case 1:
return writer__1.call(this,type);
case 2:
return writer__2.call(this,type,opts);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
writer.cljs$core$IFn$_invoke$arity$1 = writer__1;
writer.cljs$core$IFn$_invoke$arity$2 = writer__2;
return writer;
})()
;
/**
* Encode an object into a transit string given a transit writer.
*/
cognitect.transit.write = (function write(w,o){return w.write(o);
});
/**
* Construct a read handler. Implemented as identity, exists primarily
* for API compatiblity with transit-clj
*/
cognitect.transit.read_handler = (function read_handler(from_rep){return from_rep;
});
/**
* Creates a transit write handler whose tag, rep,
* stringRep, and verboseWriteHandler methods
* invoke the provided fns.
*/
cognitect.transit.write_handler = (function() {
var write_handler = null;
var write_handler__2 = (function (tag_fn,rep_fn){return write_handler.call(null,tag_fn,rep_fn,null,null);
});
var write_handler__3 = (function (tag_fn,rep_fn,str_rep_fn){return write_handler.call(null,tag_fn,rep_fn,str_rep_fn,null);
});
var write_handler__4 = (function (tag_fn,rep_fn,str_rep_fn,verbose_handler_fn){if(typeof cognitect.transit.t11693 !== 'undefined')
{} else
{
/**
* @constructor
*/
cognitect.transit.t11693 = (function (write_handler,tag_fn,rep_fn,str_rep_fn,verbose_handler_fn,meta11694){
this.write_handler = write_handler;
this.tag_fn = tag_fn;
this.rep_fn = rep_fn;
this.str_rep_fn = str_rep_fn;
this.verbose_handler_fn = verbose_handler_fn;
this.meta11694 = meta11694;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cognitect.transit.t11693.cljs$lang$type = true;
cognitect.transit.t11693.cljs$lang$ctorStr = "cognitect.transit/t11693";
cognitect.transit.t11693.cljs$lang$ctorPrWriter = (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){return cljs.core._write.call(null,writer__4218__auto__,"cognitect.transit/t11693");
});
cognitect.transit.t11693.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11695,meta11694__$1){var self__ = this;
var _11695__$1 = this;return (new cognitect.transit.t11693(self__.write_handler,self__.tag_fn,self__.rep_fn,self__.str_rep_fn,self__.verbose_handler_fn,meta11694__$1));
});
cognitect.transit.t11693.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11695){var self__ = this;
var _11695__$1 = this;return self__.meta11694;
});
cognitect.transit.t11693.prototype.tag = (function (o){var self__ = this;
var _ = this;return self__.tag_fn.call(null,o);
});
cognitect.transit.t11693.prototype.rep = (function (o){var self__ = this;
var _ = this;return self__.rep_fn.call(null,o);
});
cognitect.transit.t11693.prototype.stringRep = (function (o){var self__ = this;
var _ = this;if(cljs.core.truth_(self__.str_rep_fn))
{return self__.str_rep_fn.call(null,o);
} else
{return null;
}
});
cognitect.transit.t11693.prototype.getVerboseHandler = (function (){var self__ = this;
var _ = this;if(cljs.core.truth_(self__.verbose_handler_fn))
{return self__.verbose_handler_fn.call(null);
} else
{return null;
}
});
cognitect.transit.__GT_t11693 = (function __GT_t11693(write_handler__$1,tag_fn__$1,rep_fn__$1,str_rep_fn__$1,verbose_handler_fn__$1,meta11694){return (new cognitect.transit.t11693(write_handler__$1,tag_fn__$1,rep_fn__$1,str_rep_fn__$1,verbose_handler_fn__$1,meta11694));
});
}
return (new cognitect.transit.t11693(write_handler,tag_fn,rep_fn,str_rep_fn,verbose_handler_fn,null));
});
write_handler = function(tag_fn,rep_fn,str_rep_fn,verbose_handler_fn){
switch(arguments.length){
case 2:
return write_handler__2.call(this,tag_fn,rep_fn);
case 3:
return write_handler__3.call(this,tag_fn,rep_fn,str_rep_fn);
case 4:
return write_handler__4.call(this,tag_fn,rep_fn,str_rep_fn,verbose_handler_fn);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
write_handler.cljs$core$IFn$_invoke$arity$2 = write_handler__2;
write_handler.cljs$core$IFn$_invoke$arity$3 = write_handler__3;
write_handler.cljs$core$IFn$_invoke$arity$4 = write_handler__4;
return write_handler;
})()
;
/**
* Construct a tagged value. tag must be a string and rep can
* be any transit encodeable value.
*/
cognitect.transit.tagged_value = (function tagged_value(tag,rep){return com.cognitect.transit.types.taggedValue.call(null,tag,rep);
});
/**
* Returns true if x is a transit tagged value, false otherwise.
*/
cognitect.transit.tagged_value_QMARK_ = (function tagged_value_QMARK_(x){return com.cognitect.transit.types.isTaggedValue.call(null,x);
});
/**
* Construct a transit integer value. Returns JavaScript number if
* in the 53bit integer range, a goog.math.Long instance if above. s
* may be a string or a JavaScript number.
*/
cognitect.transit.integer = (function integer(s){return com.cognitect.transit.types.integer.call(null,s);
});
/**
* Returns true if x is an integer value between the 53bit and 64bit
* range, false otherwise.
*/
cognitect.transit.integer_QMARK_ = (function integer_QMARK_(x){return com.cognitect.transit.types.isInteger.call(null,x);
});
/**
* Construct a big decimal from a string.
*/
cognitect.transit.bigint = (function bigint(s){return com.cognitect.transit.types.bigInteger.call(null,s);
});
/**
* Returns true if x is a transit big decimal value, false otherwise.
*/
cognitect.transit.bigint_QMARK_ = (function bigint_QMARK_(x){return com.cognitect.transit.types.isBigInteger.call(null,x);
});
/**
* Construct a big decimal from a string.
*/
cognitect.transit.bigdec = (function bigdec(s){return com.cognitect.transit.types.bigDecimalValue.call(null,s);
});
/**
* Returns true if x is a transit big decimal value, false otherwise.
*/
cognitect.transit.bigdec_QMARK_ = (function bigdec_QMARK_(x){return com.cognitect.transit.types.isBigDecimal.call(null,x);
});
/**
* Construct a URI from a string.
*/
cognitect.transit.uri = (function uri(s){return com.cognitect.transit.types.uri.call(null,s);
});
/**
* Returns true if x is a transit URI value, false otherwise.
*/
cognitect.transit.uri_QMARK_ = (function uri_QMARK_(x){return com.cognitect.transit.types.isURI.call(null,x);
});
/**
* Construct a UUID from a string.
*/
cognitect.transit.uuid = (function uuid(s){return com.cognitect.transit.types.uuid.call(null,s);
});
/**
* Returns true if x is a transit UUID value, false otherwise.
*/
cognitect.transit.uuid_QMARK_ = (function uuid_QMARK_(x){return com.cognitect.transit.types.isUUID.call(null,x);
});
/**
* Construct a transit binary value. s should be base64 encoded
* string.
*/
cognitect.transit.binary = (function binary(s){return com.cognitect.transit.types.binary.call(null,s);
});
/**
* Returns true if x is a transit binary value, false otherwise.
*/
cognitect.transit.binary_QMARK_ = (function binary_QMARK_(x){return com.cognitect.transit.types.isBinary.call(null,x);
});
/**
* Construct a quoted transit value. x should be a transit
* encodeable value.
*/
cognitect.transit.quoted = (function quoted(x){return com.cognitect.transit.types.quoted.call(null,x);
});
/**
* Returns true if x is a transit quoted value, false otherwise.
*/
cognitect.transit.quoted_QMARK_ = (function quoted_QMARK_(x){return com.cognitect.transit.types.isQuoted.call(null,x);
});
/**
* Construct a transit link value. x should be an IMap instance
* containing at a minimum the following keys: :href, :rel. It
* may optionall include :name, :render, and :prompt. :href must
* be a transit URI, all other values are strings, and :render must
* be either :image or :link.
*/
cognitect.transit.link = (function link(x){return com.cognitect.transit.types.link.call(null,x);
});
/**
* Returns true if x a transit link value, false if otherwise.
*/
cognitect.transit.link_QMARK_ = (function link_QMARK_(x){return com.cognitect.transit.types.isLink.call(null,x);
});

//# sourceMappingURL=transit.js.map