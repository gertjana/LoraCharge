// Compiled by ClojureScript 0.0-2371
goog.provide('reagent.dom');
goog.require('cljs.core');
goog.require('cljsjs.react.dom');
goog.require('reagent.impl.util');
goog.require('reagent.impl.util');
goog.require('reagent.impl.template');
goog.require('reagent.impl.template');
goog.require('reagent.debug');
goog.require('reagent.interop');
if(typeof reagent.dom.dom !== 'undefined')
{} else
{reagent.dom.dom = (function (){var or__3640__auto__ = (function (){var and__3628__auto__ = typeof ReactDOM !== 'undefined';if(and__3628__auto__)
{return ReactDOM;
} else
{return and__3628__auto__;
}
})();if(cljs.core.truth_(or__3640__auto__))
{return or__3640__auto__;
} else
{var and__3628__auto__ = typeof require !== 'undefined';if(and__3628__auto__)
{return require("react-dom");
} else
{return and__3628__auto__;
}
}
})();
}
if(cljs.core.truth_(reagent.dom.dom))
{} else
{throw (new Error(("Assert failed: Could not find ReactDOM\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,new cljs.core.Symbol(null,"dom","dom",403993605,null))))));
}
if(typeof reagent.dom.roots !== 'undefined')
{} else
{reagent.dom.roots = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
reagent.dom.unmount_comp = (function unmount_comp(container){cljs.core.swap_BANG_.call(null,reagent.dom.roots,cljs.core.dissoc,container);
return (reagent.dom.dom["unmountComponentAtNode"])(container);
});
reagent.dom.render_comp = (function render_comp(comp,container,callback){var _STAR_always_update_STAR_5422 = reagent.impl.util._STAR_always_update_STAR_;try{reagent.impl.util._STAR_always_update_STAR_ = true;
return (reagent.dom.dom["render"])(comp.call(null),container,((function (_STAR_always_update_STAR_5422){
return (function (){var _STAR_always_update_STAR_5423 = reagent.impl.util._STAR_always_update_STAR_;try{reagent.impl.util._STAR_always_update_STAR_ = false;
cljs.core.swap_BANG_.call(null,reagent.dom.roots,cljs.core.assoc,container,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [comp,container], null));
if(cljs.core.some_QMARK_.call(null,callback))
{return callback.call(null);
} else
{return null;
}
}finally {reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR_5423;
}});})(_STAR_always_update_STAR_5422))
);
}finally {reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR_5422;
}});
reagent.dom.re_render_component = (function re_render_component(comp,container){return reagent.dom.render_comp.call(null,comp,container,null);
});
/**
* Render a Reagent component into the DOM. The first argument may be
* either a vector (using Reagent's Hiccup syntax), or a React element. The second argument should be a DOM node.
* 
* Optionally takes a callback that is called when the component is in place.
* 
* Returns the mounted component instance.
*/
reagent.dom.render = (function() {
var render = null;
var render__2 = (function (comp,container){return render.call(null,comp,container,null);
});
var render__3 = (function (comp,container,callback){var f = (function (){return reagent.impl.template.as_element.call(null,((cljs.core.fn_QMARK_.call(null,comp))?comp.call(null):comp));
});return reagent.dom.render_comp.call(null,f,container,callback);
});
render = function(comp,container,callback){
switch(arguments.length){
case 2:
return render__2.call(this,comp,container);
case 3:
return render__3.call(this,comp,container,callback);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
render.cljs$core$IFn$_invoke$arity$2 = render__2;
render.cljs$core$IFn$_invoke$arity$3 = render__3;
return render;
})()
;
reagent.dom.unmount_component_at_node = (function unmount_component_at_node(container){return reagent.dom.unmount_comp.call(null,container);
});
/**
* Returns the root DOM node of a mounted component.
*/
reagent.dom.dom_node = (function dom_node(this$){return (reagent.dom.dom["findDOMNode"])(this$);
});
reagent.impl.template.find_dom_node = reagent.dom.dom_node;
/**
* Force re-rendering of all mounted Reagent components. This is
* probably only useful in a development environment, when you want to
* update components in response to some dynamic changes to code.
* 
* Note that force-update-all may not update root components. This
* happens if a component 'foo' is mounted with `(render [foo])` (since
* functions are passed by value, and not by reference, in
* ClojureScript). To get around this you'll have to introduce a layer
* of indirection, for example by using `(render [#'foo])` instead.
*/
reagent.dom.force_update_all = (function force_update_all(){var seq__5428_5432 = cljs.core.seq.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,reagent.dom.roots)));var chunk__5429_5433 = null;var count__5430_5434 = (0);var i__5431_5435 = (0);while(true){
if((i__5431_5435 < count__5430_5434))
{var v_5436 = cljs.core._nth.call(null,chunk__5429_5433,i__5431_5435);cljs.core.apply.call(null,reagent.dom.re_render_component,v_5436);
{
var G__5437 = seq__5428_5432;
var G__5438 = chunk__5429_5433;
var G__5439 = count__5430_5434;
var G__5440 = (i__5431_5435 + (1));
seq__5428_5432 = G__5437;
chunk__5429_5433 = G__5438;
count__5430_5434 = G__5439;
i__5431_5435 = G__5440;
continue;
}
} else
{var temp__4425__auto___5441 = cljs.core.seq.call(null,seq__5428_5432);if(temp__4425__auto___5441)
{var seq__5428_5442__$1 = temp__4425__auto___5441;if(cljs.core.chunked_seq_QMARK_.call(null,seq__5428_5442__$1))
{var c__4410__auto___5443 = cljs.core.chunk_first.call(null,seq__5428_5442__$1);{
var G__5444 = cljs.core.chunk_rest.call(null,seq__5428_5442__$1);
var G__5445 = c__4410__auto___5443;
var G__5446 = cljs.core.count.call(null,c__4410__auto___5443);
var G__5447 = (0);
seq__5428_5432 = G__5444;
chunk__5429_5433 = G__5445;
count__5430_5434 = G__5446;
i__5431_5435 = G__5447;
continue;
}
} else
{var v_5448 = cljs.core.first.call(null,seq__5428_5442__$1);cljs.core.apply.call(null,reagent.dom.re_render_component,v_5448);
{
var G__5449 = cljs.core.next.call(null,seq__5428_5442__$1);
var G__5450 = null;
var G__5451 = (0);
var G__5452 = (0);
seq__5428_5432 = G__5449;
chunk__5429_5433 = G__5450;
count__5430_5434 = G__5451;
i__5431_5435 = G__5452;
continue;
}
}
} else
{}
}
break;
}
return "Updated";
});

//# sourceMappingURL=dom.js.map